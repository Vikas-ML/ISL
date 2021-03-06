/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
    internalRuntimeVersion
} from './internal-version';
import {
    parseQueryString_
} from './url-parse-query-string';

/**
 * @typedef {{
 *   localDev: boolean,
 *   development: boolean,
 *   minified: boolean,
 *   lite: boolean,
 *   test: boolean,
 *   log: (string|undefined),
 *   version: string,
 *   rtvVersion: string,
 *   runtime: (null|string|undefined),
 *   a4aId: (null|string|undefined),
 *   esm: (boolean|undefined)
 * }}
 */
export let ModeDef;

/**
 * `rtvVersion` is the prefixed version we serve off of the cdn.
 * The prefix denotes canary(00) or prod(01) or an experiment version ( > 01).
 * @type {string}
 */
let rtvVersion = '';

/**
 * Provides info about the current app.
 * @param {?Window=} opt_win
 * @return {!ModeDef}
 */
export function getMode(opt_win) {
    const win = opt_win || self;
    if (win.__AMP_MODE) {
        return win.__AMP_MODE;
    }
    return (win.__AMP_MODE = getMode_(win));
}

/**
 * Provides info about the current app.
 * @param {!Window} win
 * @return {!ModeDef}
 */
function getMode_(win) {
    // TODO(erwinmombay): simplify the logic here
    const AMP_CONFIG = self.AMP_CONFIG || {};

    // Magic constants that are replaced by closure compiler.
    // IS_MINIFIED is always replaced with true when closure compiler is used
    // while IS_DEV is only replaced when `gulp dist` is called without the
    // --fortesting flag.
    const IS_DEV = true;
    const IS_MINIFIED = false;

    const runningTests =
        IS_DEV && !!(AMP_CONFIG.test || win.__AMP_TEST || win.__karma__);
    const isLocalDev = IS_DEV && (!!AMP_CONFIG.localDev || runningTests);
    const hashQuery = parseQueryString_(
        // location.originalHash is set by the viewer when it removes the fragment
        // from the URL.
        win.location.originalHash || win.location.hash
    );

    const searchQuery = parseQueryString_(win.location.search);

    if (!rtvVersion) {
        rtvVersion = getRtvVersion(win);
    }

    // The `minified`, `test` and `localDev` properties are replaced
    // as boolean literals when we run `gulp dist` without the `--fortesting`
    // flags. This improved DCE on the production file we deploy as the code
    // paths for localhost/testing/development are eliminated.
    return {
        localDev: isLocalDev,
        // Triggers validation or enable pub level logging. Validation can be
        // bypassed via #validate=0.
        // Note that AMP_DEV_MODE flag is used for testing purposes.
        // Use Array.indexOf instead of Array.includes because of #24219
        development: !!(
            ['1', 'actions', 'amp', 'amp4ads', 'amp4email'].indexOf(
                hashQuery['development']
            ) >= 0 || win.AMP_DEV_MODE
        ),
        examiner: hashQuery['development'] == '2',
        esm: IS_ESM,
        // amp-geo override
        geoOverride: hashQuery['amp-geo'],
        minified: IS_MINIFIED,
        // Whether document is in an amp-lite viewer. It signal that the user
        // would prefer to use less bandwidth.
        lite: searchQuery['amp_lite'] != undefined,
        test: runningTests,
        log: hashQuery['log'],
        version: internalRuntimeVersion(),
        rtvVersion,
    };
}

/**
 * Retrieve the `rtvVersion` which will have a numeric prefix
 * denoting canary/prod/experiment (unless `isLocalDev` is true).
 *
 * @param {!Window} win
 * @return {string}
 */
function getRtvVersion(win) {
    if (win.AMP_CONFIG && win.AMP_CONFIG.v) {
        return win.AMP_CONFIG.v;
    }

    // Currently `internalRuntimeVersion` and thus `mode.version` contain only
    // major version. The full version however must also carry the minor version.
    // We will default to production default `01` minor version for now.
    // TODO(erwinmombay): decide whether internalRuntimeVersion should contain
    // minor version.
    return `01${internalRuntimeVersion()}`;
}

/**
 * @param {!Window} win
 * @return {string}
 * @visibleForTesting
 */
export function getRtvVersionForTesting(win) {
    return getRtvVersion(win);
}

/** @visibleForTesting */
export function resetRtvVersionForTesting() {
    rtvVersion = '';
}