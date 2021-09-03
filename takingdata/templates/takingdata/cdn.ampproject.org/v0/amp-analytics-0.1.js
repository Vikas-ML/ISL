(self.AMP = self.AMP || []).push({
    n: "amp-analytics",
    v: "2011252111003",
    f: (function(AMP, _) {
        'use strict';
        var l, aa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        };

        function ba(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return d
            }
            return function() {
                throw Error("Cannot find global object");
            }()
        }
        var ca = ba(this);
        "function" === typeof Symbol && Symbol("x");
        var da;
        if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
        else {
            var ea;
            a: {
                var fa = {
                        a: !0
                    },
                    ha = {};
                try {
                    ha.__proto__ = fa;
                    ea = ha.a;
                    break a
                } catch (a) {}
                ea = !1
            }
            da = ea ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        var ia = da;

        function p(a, b) {
            a.prototype = aa(b.prototype);
            a.prototype.constructor = a;
            if (ia) ia(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.xd = b.prototype
        }
        var ja;

        function t() {
            return ja ? ja : ja = Promise.resolve(void 0)
        };

        function w() {
            var a, b;
            this.promise = new Promise(function(c, d) {
                a = c;
                b = d
            });
            this.resolve = a;
            this.reject = b
        }

        function la(a) {
            return new Promise(function(b) {
                b(a())
            })
        };

        function ma(a, b) {
            var c = b = void 0 === b ? "" : b;
            try {
                return decodeURIComponent(a)
            } catch (d) {
                return c
            }
        };
        var na = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

        function x(a) {
            var b = Object.create(null);
            if (!a) return b;
            for (var c; c = na.exec(a);) {
                var d = ma(c[1], c[1]),
                    e = c[2] ? ma(c[2].replace(/\+/g, " "), c[2]) : "";
                b[d] = e
            }
            return b
        };
        var oa = "";

        function y(a) {
            var b = a || self;
            if (b.__AMP_MODE) var c = b.__AMP_MODE;
            else {
                c = x(b.location.originalHash || b.location.hash);
                var d = x(b.location.search);
                oa || (oa = b.AMP_CONFIG && b.AMP_CONFIG.v ? b.AMP_CONFIG.v : "012011252111003");
                c = {
                    localDev: !1,
                    development: !!(0 <= ["1", "actions", "amp", "amp4ads", "amp4email"].indexOf(c.development) || b.AMP_DEV_MODE),
                    examiner: "2" == c.development,
                    esm: !1,
                    geoOverride: c["amp-geo"],
                    minified: !0,
                    lite: void 0 != d.amp_lite,
                    test: !1,
                    log: c.log,
                    version: "2011252111003",
                    rtvVersion: oa
                };
                c = b.__AMP_MODE = c
            }
            return c
        };
        var pa = Object.prototype.toString;

        function A(a) {
            return Array.isArray(a)
        }

        function B(a) {
            return "[object Object]" === pa.call(a)
        }

        function qa(a) {
            return "number" === typeof a && isFinite(a)
        }

        function ra(a) {
            var b = sa,
                c;
            for (c in b)
                if (b[c] === a) return !0;
            return !1
        };
        var C = self.AMP_CONFIG || {},
            ta = ("string" == typeof C.cdnProxyRegex ? new RegExp(C.cdnProxyRegex) : C.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function ua(a) {
            if (!self.document || !self.document.head || self.location && ta.test(self.location.origin)) return null;
            var b = self.document.head.querySelector('meta[name="' + a + '"]');
            return b && b.getAttribute("content") || null
        }
        var va = {
            thirdParty: C.thirdPartyUrl || "https://3p.ampproject.net",
            thirdPartyFrameHost: C.thirdPartyFrameHost || "ampproject.net",
            thirdPartyFrameRegex: ("string" == typeof C.thirdPartyFrameRegex ? new RegExp(C.thirdPartyFrameRegex) : C.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
            cdn: C.cdnUrl || ua("runtime-host") || "https://cdn.ampproject.org",
            cdnProxyRegex: ta,
            localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
            errorReporting: C.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
            betaErrorReporting: C.betaErrorReportingUrl ||
                "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
            localDev: C.localDev || !1,
            trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
            geoApi: C.geoApiUrl || ua("amp-geo-api")
        };

        function wa(a) {
            for (var b = null, c = "", d = 0; d < arguments.length; d++) {
                var e = arguments[d];
                if (e instanceof Error && !b) {
                    b = void 0;
                    var f = Object.getOwnPropertyDescriptor(e, "message");
                    if (f && f.writable) b = e;
                    else {
                        f = e.stack;
                        var g = Error(e.message);
                        for (b in e) g[b] = e[b];
                        g.stack = f;
                        b = g
                    }
                } else c && (c += " "), c += e
            }
            b ? c && (b.message = c + ": " + b.message) : b = Error(c);
            return b
        }

        function xa(a) {
            var b = wa.apply(null, arguments);
            setTimeout(function() {
                self.__AMP_REPORT_ERROR(b);
                throw b;
            })
        }
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var ya = self.__AMP_LOG;

        function D() {
            if (!ya.user) throw Error("failed to call initLogConstructor");
            return ya.user
        }

        function E() {
            if (ya.dev) return ya.dev;
            throw Error("failed to call initLogConstructor");
        }

        function F(a, b, c, d, e, f) {
            return D().assert(a, b, c, d, e, f, void 0, void 0, void 0, void 0, void 0)
        };

        function H(a, b) {
            a = za(a);
            return Aa(a, b)
        }

        function I(a, b) {
            var c = J(a);
            c = L(c);
            return Aa(c, b)
        }

        function Ba(a, b) {
            a = J(a);
            a = L(a);
            return Ca(a, b) ? Aa(a, b) : null
        }

        function Da(a, b) {
            return Ea(L(a), b)
        }

        function za(a) {
            return a.__AMP_TOP || (a.__AMP_TOP = a)
        }

        function Fa(a, b) {
            var c = (a.ownerDocument || a).defaultView;
            a = b || za(c);
            if (c && c != a && za(c) == a) try {
                return c.frameElement
            } catch (d) {}
            return null
        }

        function J(a) {
            return a.nodeType ? H((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function L(a) {
            a = J(a);
            return a.isSingleDoc() ? a.win : a
        }

        function Aa(a, b) {
            Ca(a, b);
            a = Ga(a)[b];
            a.obj || (a.obj = new a.ctor(a.context), a.ctor = null, a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function Ha(a, b, c, d) {
            var e = Ga(a),
                f = e[c];
            f || (f = e[c] = {
                obj: null,
                promise: null,
                resolve: null,
                reject: null,
                context: null,
                ctor: null,
                adopted: !1
            });
            f.ctor || f.obj || (f.ctor = d, f.context = b, f.adopted = !1, f.resolve && Aa(a, c))
        }

        function Ia(a, b) {
            var c = Ea(a, b);
            if (c) return c;
            a = Ga(a);
            a[b] = Ja();
            return a[b].promise
        }

        function Ea(a, b) {
            var c = Ga(a)[b];
            if (c) {
                if (c.promise) return c.promise;
                Aa(a, b);
                return c.promise = Promise.resolve(c.obj)
            }
            return null
        }

        function Ga(a) {
            var b = a.__AMP_SERVICES;
            b || (b = a.__AMP_SERVICES = {});
            return b
        }

        function Ca(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor && !a.obj)
        }

        function Ja() {
            var a = new w,
                b = a.promise,
                c = a.resolve;
            a = a.reject;
            b.catch(function() {});
            return {
                obj: null,
                promise: b,
                resolve: c,
                reject: a,
                context: null,
                ctor: null
            }
        };
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        var Ka;

        function La(a) {
            try {
                var b = a.ownerDocument,
                    c = b.createElement("div"),
                    d = b.createElement("div");
                c.appendChild(d);
                return c.querySelector(":scope div") === d
            } catch (e) {
                return !1
            }
        };
        var Ma = Object.prototype.hasOwnProperty;

        function M(a) {
            return a || {}
        }

        function N(a, b) {
            return Ma.call(a, b)
        }

        function Na(a, b, c) {
            var d = void 0 === c ? 10 : c,
                e = [],
                f = [];
            f.push({
                t: a,
                s: b,
                d: 0
            });
            for (a = {}; 0 < f.length;) {
                b = f.shift();
                a.aa = b.t;
                a.U = b.s;
                a.Ma = b.d;
                if (e.includes(a.U)) throw Error("Source object has a circular reference.");
                e.push(a.U);
                a.aa !== a.U && (a.Ma > d ? Object.assign(a.aa, a.U) : Object.keys(a.U).forEach(function(g) {
                    return function(h) {
                        var k = g.U[h];
                        if (N(g.aa, h)) {
                            var m = g.aa[h];
                            if (B(k) && B(m)) {
                                f.push({
                                    t: m,
                                    s: k,
                                    d: g.Ma + 1
                                });
                                return
                            }
                        }
                        g.aa[h] = k
                    }
                }(a)));
                a = {
                    U: a.U,
                    aa: a.aa,
                    Ma: a.Ma
                }
            }
        };

        function Oa(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        }

        function Pa(a, b) {
            for (var c = {}, d = 0; 5 > d && (c.Na = 0, a = a.replace(/\${([^}]*)}/g, function(e) {
                    return function(f, g) {
                        e.Na++;
                        return b(g)
                    }
                }(c)), c.Na); c = {
                    Na: c.Na
                }, d++);
            return a
        }

        function Qa(a, b) {
            var c = /\${([^}]*)}/g;
            if ("string" === typeof b) return Promise.resolve(a.replace(c, b));
            var d = [],
                e = 0;
            a.replace(c, function(f) {
                var g = arguments[arguments.length - 2];
                d.push(a.slice(e, g));
                e = g + f.length;
                var h = b.apply(null, arguments);
                d.push(h)
            });
            d.push(a.slice(e));
            return Promise.all(d).then(function(f) {
                return f.join("")
            })
        };

        function Ra(a, b, c) {
            a = a.createElement(b);
            for (var d in c) a.setAttribute(d, c[d]);
            return a
        }

        function Sa(a, b) {
            for (; a && void 0 !== a; a = a.parentElement)
                if (b(a)) return a;
            return null
        }

        function Ta(a, b) {
            return a.closest ? a.closest(b) : Sa(a, function(c) {
                return Ua(c, b)
            })
        }

        function Wa(a, b) {
            for (a = a.lastElementChild; a; a = a.previousElementSibling)
                if (b(a)) return a;
            return null
        }

        function Ua(a, b) {
            var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
            return c ? c.call(a, b) : !1
        }

        function Xa(a, b) {
            a.classList.add("i-amphtml-scoped");
            var c = b.replace(/^|,/g, "$&.i-amphtml-scoped "),
                d = a.querySelectorAll(c);
            a.classList.remove("i-amphtml-scoped");
            return d
        }

        function Ya(a, b) {
            function c(k) {
                return k
            }
            var d = a.dataset;
            a = {};
            var e = b ? b : /^param(.+)/,
                f;
            for (f in d) {
                var g = f.match(e);
                if (g) {
                    var h = g[1][0].toLowerCase() + g[1].substr(1);
                    a[c(h)] = d[f]
                }
            }
            return a
        };

        function Za(a) {
            return $a(a, "userNotificationManager", "amp-user-notification", void 0).then(function(b) {
                return F(b, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", "userNotificationManager", "amp-user-notification", "amp-user-notification", "amp-user-notification")
            })
        }

        function $a(a, b, c, d) {
            var e = Da(a, b);
            if (e) return e;
            var f = J(a);
            return f.waitForBodyOpen().then(function() {
                var g = f.win;
                var h = f.win.document.head;
                if (h) {
                    var k = {};
                    h = h.querySelectorAll("script[custom-element],script[custom-template]");
                    for (var m = 0; m < h.length; m++) {
                        var n = h[m];
                        n = n.getAttribute("custom-element") || n.getAttribute("custom-template");
                        k[n] = !0
                    }
                    k = Object.keys(k)
                } else k = [];
                return k.includes(c) ? H(g, "extensions").waitForExtension(g, c) : t()
            }).then(function() {
                if (d) var g = Da(a, b);
                else g = f.win, g = g.__AMP_EXTENDED_ELEMENTS &&
                    g.__AMP_EXTENDED_ELEMENTS[c] ? Ia(L(a), b) : null;
                return g
            })
        };

        function ab(a) {
            return H(a, "performance")
        }

        function O(a) {
            return Ba(a, "url-replace")
        }

        function bb(a) {
            return $a(a, "consentPolicyManager", "amp-consent")
        }

        function P(a) {
            return I(a, "viewport")
        };
        var cb;

        function db(a, b, c, d) {
            var e = a,
                f = c;
            var g = function(m) {
                try {
                    return f(m)
                } catch (n) {
                    throw self.__AMP_REPORT_ERROR(n), n;
                }
            };
            var h = eb(),
                k = !1;
            d && (k = d.capture);
            e.addEventListener(b, g, h ? d : k);
            return function() {
                e && e.removeEventListener(b, g, h ? d : k);
                g = e = f = null
            }
        }

        function eb() {
            if (void 0 !== cb) return cb;
            cb = !1;
            try {
                var a = {
                    get capture() {
                        cb = !0
                    }
                };
                self.addEventListener("test-options", null, a);
                self.removeEventListener("test-options", null, a)
            } catch (b) {}
            return cb
        };

        function fb(a, b, c, d) {
            var e = c,
                f = db(a, b, function(g) {
                    try {
                        e(g)
                    } finally {
                        e = null, f()
                    }
                }, d);
            return f
        }

        function gb(a) {
            return !!(a.complete || "complete" == a.readyState || hb(a) && 0 < a.readyState || a.document && "complete" == a.document.readyState)
        }

        function ib(a) {
            var b, c;
            if (gb(a)) return Promise.resolve(a);
            var d = hb(a);
            return d && a.__AMP_MEDIA_LOAD_FAILURE_SRC === a.currentSrc ? Promise.reject(a) : (new Promise(function(e, f) {
                b = d ? fb(a, "loadedmetadata", e, {
                    capture: !0
                }) : fb(a, "load", e);
                if (a.tagName) {
                    var g = a;
                    if (d && !a.hasAttribute("src") && (g = Wa(a, function(h) {
                            return "SOURCE" === h.tagName
                        }), !g)) return f(Error("Media has no source."));
                    c = fb(g, "error", f)
                }
            })).then(function() {
                c && c();
                return a
            }, function() {
                b && b();
                hb(a) && (a.__AMP_MEDIA_LOAD_FAILURE_SRC = a.currentSrc || !0);
                var e = a;
                e && e.src && (e = e.src);
                throw D().createError("Failed to load:", e);
            })
        }

        function hb(a) {
            return "AUDIO" === a.tagName || "VIDEO" === a.tagName
        };

        function jb(a, b) {
            var c = 0;
            "active" === a.type && (c = 5);
            return Math.min(b - a.time, c)
        }

        function kb() {
            this.Ob = 0;
            this.pa = void 0
        }
        kb.prototype.push = function(a) {
            this.pa && this.pa.time < a.time && (this.Ob += jb(this.pa, a.time));
            this.pa = a
        };
        kb.prototype.getTotalEngagedTime = function(a) {
            var b = 0;
            void 0 !== this.pa && (b = this.Ob + jb(this.pa, a));
            return b
        };
        var lb = ["mousedown", "mouseup", "mousemove", "keydown", "keyup"],
            mb = ["mouseleave"];

        function nb(a) {
            this.ampdoc = a;
            this.Kc = this.rd.bind(this);
            this.Wb = this.Bb.bind(this);
            this.Ic = this.fc.bind(this);
            this.Jc = this.Zc.bind(this);
            this.Ja = {};
            this.ta = [];
            this.bb = this.ab = !1;
            this.Sb = new kb;
            this.T = P(this.ampdoc);
            this.ampdoc.whenFirstVisible().then(this.qd.bind(this))
        }
        l = nb.prototype;
        l.qd = function() {
            this.Y = Date.now();
            this.Bb();
            for (var a = this.ampdoc.getRootNode(), b = this.Wb, c = 0; c < lb.length; c++) this.ta.push(db(a, lb[c], b, void 0));
            a = this.ampdoc.getRootNode();
            b = this.Ic;
            for (c = 0; c < mb.length; c++) this.ta.push(db(a, mb[c], b, void 0));
            this.ta.push(this.ampdoc.onVisibilityChanged(this.Jc));
            this.T.onScroll(this.Wb)
        };

        function ob(a) {
            var b = Date.now() - a.Y;
            return 0 < b ? b : 0
        }
        l.rd = function() {
            this.bb = this.ab = !1
        };
        l.Bb = function() {
            this.ab || (this.ab = !0, this.bb = !1, pb(this, "active"))
        };
        l.fc = function() {
            this.bb || (this.bb = !0, this.ab = !1, pb(this, "inactive"))
        };

        function pb(a, b) {
            var c = ob(a),
                d = Math.floor(c / 1E3);
            setTimeout(a.Kc, 1E3 - c % 1E3);
            a.Sb.push({
                type: b,
                time: d
            })
        }
        l.Zc = function() {
            this.ampdoc.isVisible() ? this.Bb() : this.fc()
        };
        l.Qb = function() {
            for (var a = 0; a < this.ta.length; a++) {
                var b = this.ta[a];
                "function" === typeof b && b()
            }
            this.ta = []
        };
        l.wd = function() {
            this.Qb()
        };
        l.getTotalEngagedTime = function() {
            var a = Math.floor(ob(this) / 1E3);
            return this.Sb.getTotalEngagedTime(a)
        };
        l.getIncrementalEngagedTime = function(a, b) {
            var c = void 0 === b ? !0 : b;
            if (!N(this.Ja, a)) return c && (this.Ja[a] = this.getTotalEngagedTime()), this.getTotalEngagedTime();
            var d = this.Ja[a];
            if (!1 === c) return this.getTotalEngagedTime() - d;
            this.Ja[a] = this.getTotalEngagedTime();
            return this.Ja[a] - d
        };

        function qb(a, b) {
            try {
                return JSON.parse(a)
            } catch (c) {
                return b && b(c), null
            }
        };
        var rb = JSON.parse('{"transport":{"beacon":true,"xhrpost":true,"image":true},"vars":{"accessReaderId":"ACCESS_READER_ID","ampGeo":"AMP_GEO","ampState":"AMP_STATE","ampVersion":"AMP_VERSION","ampdocHost":"AMPDOC_HOST","ampdocHostname":"AMPDOC_HOSTNAME","ampdocMeta":"AMPDOC_META","ampdocUrl":"AMPDOC_URL","authdata":"AUTHDATA","availableScreenHeight":"AVAILABLE_SCREEN_HEIGHT","availableScreenWidth":"AVAILABLE_SCREEN_WIDTH","backgroundState":"BACKGROUND_STATE","browserLanguage":"BROWSER_LANGUAGE","canonicalHost":"CANONICAL_HOST","canonicalHostname":"CANONICAL_HOSTNAME","canonicalPath":"CANONICAL_PATH","canonicalUrl":"CANONICAL_URL","clientId":"CLIENT_ID","consentState":"CONSENT_STATE","consentString":"CONSENT_STRING","contentLoadTime":"CONTENT_LOAD_TIME","cookie":"COOKIE","counter":"COUNTER","cumulativeLayoutShift":"CUMULATIVE_LAYOUT_SHIFT","documentCharset":"DOCUMENT_CHARSET","documentReferrer":"DOCUMENT_REFERRER","domInteractiveTime":"DOM_INTERACTIVE_TIME","domainLookupTime":"DOMAIN_LOOKUP_TIME","experimentBranches":"EXPERIMENT_BRANCHES","externalReferrer":"EXTERNAL_REFERRER","firstContentfulPaint":"FIRST_CONTENTFUL_PAINT","firstInputDelay":"FIRST_INPUT_DELAY","firstViewportReady":"FIRST_VIEWPORT_READY","fragmentParam":"FRAGMENT_PARAM","htmlAttr":"HTML_ATTR","incrementalEngagedTime":"INCREMENTAL_ENGAGED_TIME","largestContentfulPaint":"LARGEST_CONTENTFUL_PAINT","makeBodyVisible":"MAKE_BODY_VISIBLE","navRedirectCount":"NAV_REDIRECT_COUNT","navTiming":"NAV_TIMING","navType":"NAV_TYPE","pageDownloadTime":"PAGE_DOWNLOAD_TIME","pageLoadTime":"PAGE_LOAD_TIME","pageViewId":"PAGE_VIEW_ID","pageViewId64":"PAGE_VIEW_ID_64","queryParam":"QUERY_PARAM","random":"RANDOM","redirectTime":"REDIRECT_TIME","resourceTiming":"RESOURCE_TIMING","screenColorDepth":"SCREEN_COLOR_DEPTH","screenHeight":"SCREEN_HEIGHT","screenWidth":"SCREEN_WIDTH","scrollHeight":"SCROLL_HEIGHT","scrollLeft":"SCROLL_LEFT","scrollTop":"SCROLL_TOP","scrollWidth":"SCROLL_WIDTH","serverResponseTime":"SERVER_RESPONSE_TIME","sourceHost":"SOURCE_HOST","sourceHostname":"SOURCE_HOSTNAME","sourcePath":"SOURCE_PATH","sourceUrl":"SOURCE_URL","tcpConnectTime":"TCP_CONNECT_TIME","timestamp":"TIMESTAMP","timezone":"TIMEZONE","timezoneCode":"TIMEZONE_CODE","title":"TITLE","totalEngagedTime":"TOTAL_ENGAGED_TIME","userAgent":"USER_AGENT","viewer":"VIEWER","viewportHeight":"VIEWPORT_HEIGHT","viewportWidth":"VIEWPORT_WIDTH"}}');

        function sb() {
            this.Nc = 100;
            this.tb = this.Nb = 0;
            this.Qa = Object.create(null)
        }
        sb.prototype.has = function(a) {
            return !!this.Qa[a]
        };
        sb.prototype.get = function(a) {
            var b = this.Qa[a];
            if (b) return b.access = ++this.tb, b.payload
        };
        sb.prototype.put = function(a, b) {
            this.has(a) || this.Nb++;
            this.Qa[a] = {
                payload: b,
                access: this.tb
            };
            if (!(this.Nb <= this.Nc)) {
                E().warn("lru-cache", "Trimming LRU cache");
                a = this.Qa;
                var c = this.tb + 1,
                    d;
                for (d in a) {
                    var e = a[d].access;
                    if (e < c) {
                        c = e;
                        var f = d
                    }
                }
                void 0 !== f && (delete a[f], this.Nb--)
            }
        };
        var tb = M({
                c: !0,
                v: !0,
                a: !0,
                ad: !0
            }),
            ub, vb, wb = /[?&]amp_js[^&]*/,
            xb = /[?&]amp_gsa[^&]*/,
            yb = /[?&]amp_r[^&]*/,
            zb = /[?&]amp_kit[^&]*/,
            Ab = /[?&]usqp[^&]*/;

        function Q(a) {
            ub || (ub = self.document.createElement("a"), vb = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new sb));
            var b = vb,
                c = ub;
            if (b && b.has(a)) a = b.get(a);
            else {
                c.href = a;
                c.protocol || (c.href = c.href);
                var d = {
                    href: c.href,
                    protocol: c.protocol,
                    host: c.host,
                    hostname: c.hostname,
                    port: "0" == c.port ? "" : c.port,
                    pathname: c.pathname,
                    search: c.search,
                    hash: c.hash,
                    origin: null
                };
                "/" !== d.pathname[0] && (d.pathname = "/" + d.pathname);
                if ("http:" == d.protocol && 80 == d.port || "https:" == d.protocol && 443 == d.port) d.port = "", d.host = d.hostname;
                d.origin =
                    c.origin && "null" != c.origin ? c.origin : "data:" != d.protocol && d.host ? d.protocol + "//" + d.host : d.href;
                b && b.put(a, d);
                a = d
            }
            return a
        }

        function Cb(a, b, c) {
            if (!b) return a;
            var d = a.split("#", 2),
                e = d[0].split("?", 2),
                f = e[0] + (e[1] ? c ? "?" + b + "&" + e[1] : "?" + e[1] + "&" + b : "?" + b);
            return f += d[1] ? "#" + d[1] : ""
        }

        function Db(a) {
            var b = [],
                c;
            for (c in a) {
                var d = a[c];
                if (null != d)
                    if (A(d))
                        for (var e = 0; e < d.length; e++) {
                            var f = d[e];
                            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(f))
                        } else b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            }
            return b.join("&")
        }

        function Eb(a, b) {
            var c = void 0 === c ? "source" : c;
            F(null != a, "%s %s must be available", b, c);
            var d = a;
            "string" == typeof d && (d = Q(d));
            d = "https:" == d.protocol || "localhost" == d.hostname || "127.0.0.1" == d.hostname || Oa(d.hostname, ".localhost");
            F(d || /^(\/\/)/.test(a), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', b, c, a)
        }

        function Fb(a) {
            "string" == typeof a && (a = Q(a));
            return va.cdnProxyRegex.test(a.origin)
        };

        function Gb(a) {
            if (a.__AMP__EXPERIMENT_TOGGLES) return a.__AMP__EXPERIMENT_TOGGLES;
            a.__AMP__EXPERIMENT_TOGGLES = Object.create(null);
            var b = a.__AMP__EXPERIMENT_TOGGLES;
            if (a.AMP_CONFIG)
                for (var c in a.AMP_CONFIG) {
                    var d = a.AMP_CONFIG[c];
                    "number" === typeof d && 0 <= d && 1 >= d && (b[c] = Math.random() < d)
                }
            if (a.AMP_CONFIG && Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"]) && 0 < a.AMP_CONFIG["allow-doc-opt-in"].length) {
                var e = a.AMP_CONFIG["allow-doc-opt-in"],
                    f = a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
                if (f) {
                    var g = f.getAttribute("content").split(",");
                    for (c = 0; c < g.length; c++) - 1 != e.indexOf(g[c]) && (b[g[c]] = !0)
                }
            }
            Object.assign(b, Hb(a));
            if (a.AMP_CONFIG && Array.isArray(a.AMP_CONFIG["allow-url-opt-in"]) && 0 < a.AMP_CONFIG["allow-url-opt-in"].length) {
                c = a.AMP_CONFIG["allow-url-opt-in"];
                a = x(a.location.originalHash || a.location.hash);
                for (var h = 0; h < c.length; h++) {
                    var k = a["e-" + c[h]];
                    "1" == k && (b[c[h]] = !0);
                    "0" == k && (b[c[h]] = !1)
                }
            }
            return b
        }

        function Hb(a) {
            var b = "";
            try {
                "localStorage" in a && (b = a.localStorage.getItem("amp-experiment-toggles"))
            } catch (e) {
                E().warn("EXPERIMENTS", "Failed to retrieve experiments from localStorage.")
            }
            var c = b ? b.split(/\s*,\s*/g) : [];
            a = Object.create(null);
            for (var d = 0; d < c.length; d++) 0 != c[d].length && ("-" == c[d][0] ? a[c[d].substr(1)] = !1 : a[c[d]] = !0);
            return a
        }

        function Ib(a) {
            a = za(a);
            a.__AMP_EXPERIMENT_BRANCHES || (a.__AMP_EXPERIMENT_BRANCHES = {});
            return Object.assign({}, a.__AMP_EXPERIMENT_BRANCHES)
        };

        function Jb(a) {
            return "undefined" !== typeof TextEncoder ? (new TextEncoder("utf-8")).encode(a) : Kb(unescape(encodeURIComponent(a)))
        }

        function Kb(a) {
            for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                b[c] = d
            }
            return b
        }

        function Lb(a) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) b[c] = String.fromCharCode(a[c]);
            return b.join("")
        };
        var Mb = {
                "-": "+",
                _: "/",
                ".": "="
            },
            Nb = {
                "+": "-",
                "/": "_",
                "=": "."
            };

        function Ob(a) {
            var b = atob(a.replace(/[-_.]/g, function(c) {
                return Mb[c]
            }));
            return Kb(b)
        }

        function Pb(a) {
            a = Lb(a);
            return btoa(a).replace(/[+/=]/g, function(b) {
                return Nb[b]
            })
        }

        function Qb(a) {
            a = Jb(a);
            return Pb(a)
        };

        function Rb(a, b) {
            var c = Sb(a);
            if (!c) return null;
            var d = c.split(";");
            for (a = 0; a < d.length; a++) {
                var e = d[a].trim(),
                    f = e.indexOf("="),
                    g;
                if (g = -1 != f) g = e.substring(0, f).trim(), g = ma(g, void 0) == b;
                if (g) return b = e.substring(f + 1).trim(), ma(b, b)
            }
            return null
        }

        function Sb(a) {
            try {
                return a.document.cookie
            } catch (b) {
                return ""
            }
        }

        function Tb(a) {
            var b = a.document.head && a.document.head.querySelector("meta[name='amp-cookie-scope']");
            if (b) {
                var c = b.getAttribute("content") || "";
                a = a.location.href;
                "string" == typeof a && (a = Q(a));
                if (Fb(a)) {
                    var d = a.pathname.split("/");
                    F(tb[d[1]], "Unknown path prefix in url %s", a.href);
                    var e = d[2],
                        f = "s" == e ? "https://" + decodeURIComponent(d[3]) : "http://" + decodeURIComponent(e);
                    F(0 < f.indexOf("."), "Expected a . in origin %s", f);
                    d.splice(1, "s" == e ? 3 : 2);
                    d = f + d.join("/");
                    e = (e = a.search) && "?" != e ? (e = e.replace(wb, "").replace(xb,
                        "").replace(yb, "").replace(zb, "").replace(Ab, "").replace(/^[?&]/, "")) ? "?" + e : "" : "";
                    a = d + e + (a.hash || "")
                } else a = a.href;
                a = Q(a).origin;
                return Oa(a, "." + c) ? c : a.split("://")[1]
            }
            if (!Fb(a.location.href)) {
                d = a.location.hostname.split(".");
                e = d[d.length - 1];
                for (f = "-test-amp-cookie-tmp"; Rb(a, f);) f = "-test-amp-cookie-tmp0";
                for (var g = d.length - 2; 0 <= g; g--)
                    if (e = d[g] + "." + e, Ub(a, f, "delete", Date.now() + 1E3, e), "delete" == Rb(a, f)) return Ub(a, f, "delete", Date.now() - 1E3, e), e
            }
            return null
        }

        function Ub(a, b, c, d, e, f, g) {
            "ampproject.org" == e && (c = "delete", d = 0);
            b = encodeURIComponent(b) + "=" + encodeURIComponent(c) + "; path=/" + (e ? "; domain=" + e : "") + "; expires=" + (new Date(d)).toUTCString() + (f ? "; SameSite=" + f : "") + (g ? "; Secure" : "");
            try {
                a.document.cookie = b
            } catch (h) {}
        };

        function Vb(a) {
            if (!Wb(a)) return null;
            var b = a.indexOf("{");
            try {
                return JSON.parse(a.substr(b))
            } catch (c) {
                return E().error("MESSAGING", "Failed to parse message: " + a, c), null
            }
        }

        function Wb(a) {
            return "string" == typeof a && 0 == a.indexOf("amp-") && -1 != a.indexOf("{")
        };

        function Xb(a, b) {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a[e];
                b(f, e, a) ? c.push(f) : (d < e && (a[d] = f), d++)
            }
            d < a.length && (a.length = d)
        }

        function Yb(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b(a[c], c, a)) return c;
            return -1
        };
        var Zb, $b = "Webkit webkit Moz moz ms O o".split(" ");

        function ac(a) {
            var b = !1;
            void 0 === b && (b = a.hasAttribute("hidden"));
            b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "")
        };

        function bc(a, b, c) {
            var d = a.listeningFors;
            !d && c && (d = a.listeningFors = Object.create(null));
            a = d || null;
            if (!a) return a;
            var e = a[b];
            !e && c && (e = a[b] = []);
            return e || null
        }

        function cc(a, b, c) {
            var d = c ? b.getAttribute("data-amp-3p-sentinel") : "amp";
            a = bc(a, d, !0);
            for (d = 0; d < a.length; d++) {
                var e = a[d];
                if (e.frame === b) {
                    var f = e;
                    break
                }
            }
            f || (f = {
                frame: b,
                events: Object.create(null)
            }, a.push(f));
            return f.events
        }

        function dc(a) {
            for (var b = M({
                    sentinel: "unlisten"
                }), c = a.length - 1; 0 <= c; c--) {
                var d = a[c];
                if (!d.frame.contentWindow) {
                    a.splice(c, 1);
                    d = d.events;
                    for (var e in d) d[e].splice(0, Infinity).forEach(function(f) {
                        f(b)
                    })
                }
            }
        }

        function ec(a) {
            a.listeningFors || a.addEventListener("message", function(b) {
                if (b.data) {
                    var c = fc(b.data);
                    if (c && c.sentinel) {
                        var d = b.source;
                        var e = bc(a, c.sentinel);
                        if (e) {
                            for (var f, g = 0; g < e.length; g++) {
                                var h = e[g],
                                    k = h.frame.contentWindow;
                                if (k) {
                                    var m;
                                    if (!(m = d == k)) b: {
                                        for (m = d; m && m != m.parent; m = m.parent)
                                            if (m == k) {
                                                m = !0;
                                                break b
                                            }
                                        m = !1
                                    }
                                    if (m) {
                                        f = h;
                                        break
                                    }
                                } else setTimeout(dc, 0, e)
                            }
                            d = f ? f.events : null
                        } else d = e;
                        var n = d;
                        if (n) {
                            var r = n[c.type];
                            if (r)
                                for (r = r.slice(), d = 0; d < r.length; d++)(0, r[d])(c, b.source, b.origin, b)
                        }
                    }
                }
            })
        }

        function gc(a, b, c, d) {
            function e(m, n, r, q) {
                if ("amp" == m.sentinel) {
                    if (n != a.contentWindow) return;
                    var u = "null" == r && void 0;
                    if (g != r && !u) return
                }
                if (d || n == a.contentWindow) "unlisten" == m.sentinel ? k() : b(m, n, r, q)
            }
            var f = a.ownerDocument.defaultView;
            ec(f);
            c = cc(f, a, c);
            var g = Q(a.src).origin,
                h = c["send-iframe-transport-events"] || (c["send-iframe-transport-events"] = []),
                k;
            h.push(e);
            return k = function() {
                if (e) {
                    var m = h.indexOf(e); - 1 < m && h.splice(m, 1);
                    b = h = e = null
                }
            }
        }

        function hc(a, b, c, d, e) {
            if (a.contentWindow)
                for (d.type = c, d.sentinel = e ? a.getAttribute("data-amp-3p-sentinel") : "amp", a = d, e && (a = "amp-" + JSON.stringify(d)), d = 0; d < b.length; d++) e = b[d], e.win.postMessage(a, e.origin)
        }

        function fc(a) {
            "string" == typeof a && (a = "{" == a.charAt(0) ? qb(a, function(b) {
                E().warn("IFRAME-HELPER", "Postmessage could not be parsed. Is it in a valid JSON format?", b)
            }) || null : Wb(a) ? Vb(a) : null);
            return a
        }

        function ic(a, b) {
            var c = this;
            this.ic = a;
            this.Db = !0;
            this.ya = [];
            this.Qb = gc(this.ic, function(d, e, f) {
                c.ya.some(function(g) {
                    return g.win == e
                }) || c.ya.push({
                    win: e,
                    origin: f
                });
                b(d, e, f)
            }, this.Db, this.Db)
        }
        ic.prototype.send = function(a, b) {
            Xb(this.ya, function(c) {
                return !c.win.parent
            });
            hc(this.ic, this.ya, a, b, this.Db)
        };
        ic.prototype.destroy = function() {
            this.Qb();
            this.ya.length = 0
        };

        function jc(a) {
            return a.classList.contains("i-amphtml-fie") || !!Ta(a, ".i-amphtml-fie")
        };

        function kc(a, b) {
            return !jc(b) && !Fb(a.location) && "inabox" != y(a).runtime
        };

        function lc(a) {
            var b = void 0 === b ? "default" : b;
            return bb(a).then(function(c) {
                return c ? c.whenPolicyResolved(b) : null
            })
        }

        function mc(a) {
            return bb(a).then(function(b) {
                return b ? b.getConsentStringInfo("default") : null
            })
        }

        function nc(a) {
            return bb(a).then(function(b) {
                return b ? b.getConsentMetadataInfo("default") : null
            })
        };
        var oc = null;
        var pc = /^[a-zA-Z0-9\-_.]+$/;

        function qc(a) {
            var b = rc(a);
            return "" === b ? "" : ["1", sc(b), b].join("*")
        }

        function sc(a, b) {
            var c = (new Date).getTimezoneOffset();
            var d = window;
            c = [window.navigator.userAgent, c, d.navigator.userLanguage || d.navigator.language].join("*");
            d = b || 0;
            var e = Math.floor(Date.now() / 6E4) - d;
            a = [c, e, a].join("*");
            if (!oc) {
                c = Array(256);
                for (d = 0; 256 > d; d++) {
                    for (var f = d, g = 0; 8 > g; g++) f = f & 1 ? f >>> 1 ^ 3988292384 : f >>> 1;
                    c[d] = f
                }
                oc = c
            }
            a = Jb(a);
            c = 4294967295;
            for (d = 0; d < a.length; d++) c = c >>> 8 ^ oc[(c ^ a[d]) & 255];
            return ((c ^ -1) >>> 0).toString(36)
        }

        function rc(a) {
            return a ? Object.keys(a).filter(function(b) {
                var c = pc.test(b);
                c || D().error("amp-analytics/linker", "Invalid linker key: " + b);
                return c
            }).map(function(b) {
                return b + "*" + Qb(String(a[b]))
            }).join("*") : ""
        };

        function tc(a) {
            this.l = a;
            this.Ba = {}
        }
        tc.prototype.get = function(a, b) {
            if (!a || !b) return D().error("amp-analytics/linker-reader", "LINKER_PARAM requires two params, name and id"), null;
            if (!N(this.Ba, a)) {
                var c = this.Ba;
                var d = x(this.l.location.search);
                if (N(d, a)) {
                    d = d[a];
                    var e = this.l.location;
                    if (this.l.history.replaceState) {
                        var f;
                        f = (f = e.search) && "?" != f ? (f = f.replace(new RegExp("[?&]" + a + "=[^&]*", "g"), "").replace(/^[?&]/, "")) ? "?" + f : "" : "";
                        this.l.history.replaceState(null, "", e.origin + e.pathname + f + (e.hash || ""))
                    }
                    e = d.split("*");
                    f = 0 == e.length % 2;
                    4 > e.length ||
                        !f ? (D().error("amp-analytics/linker", "Invalid linker_param value " + d), d = null) : (d = Number(e.shift()), 1 !== d ? (D().error("amp-analytics/linker", "Invalid version number " + d), d = null) : (d = e.shift(), e = e.join("*"), d = {
                            checksum: d,
                            serializedIds: e
                        }));
                    if (d) {
                        e = d.serializedIds;
                        c: {
                            d = d.checksum;
                            for (f = 0; 1 >= f; f++)
                                if (sc(e, f) == d) {
                                    d = !0;
                                    break c
                                }
                            d = !1
                        }
                        if (d)
                            for (d = {}, e = e.split("*"), f = 0; f < e.length; f += 2) {
                                var g = e[f];
                                if (pc.test(g)) {
                                    var h = Ob(String(e[f + 1]));
                                    "undefined" !== typeof TextDecoder ? h = (new TextDecoder("utf-8")).decode(h) : (h =
                                        Lb(new Uint8Array(h.buffer || h)), h = decodeURIComponent(escape(h)));
                                    d[g] = h
                                } else D().error("amp-analytics/linker", "Invalid linker key " + g + ", value ignored")
                            } else D().error("amp-analytics/linker", "LINKER_PARAM value checksum not valid"), d = null
                    } else d = null
                } else d = null;
                c[a] = d
            }
            return this.Ba[a] && this.Ba[a][b] ? this.Ba[a][b] : null
        };
        var uc = /^(?:([^\s]*)(\([^)]*\))|[^]+)$/,
            vc = {
                1: "sufficient",
                2: "insufficient",
                3: "not_required",
                4: "unknown"
            };

        function R(a, b, c) {
            this.vars = a;
            this.iterations = void 0 === b ? 2 : b;
            this.noEncode = !!c;
            this.freezeVars = {}
        }
        R.prototype.freezeVar = function(a) {
            this.freezeVars[a] = !0
        };
        R.prototype.getVar = function(a) {
            a = this.vars[a];
            null == a && (a = "");
            return a
        };

        function wc(a, b, c) {
            b = Number(b);
            var d = a.length;
            F(qa(b), "Start index " + b + "in substr macro should be a number");
            c && (d = Number(c), F(qa(d), "Length " + d + " in substr macro should be a number"));
            return a.substr(b, d)
        }

        function xc(a, b) {
            return a && a.length ? a : b
        }

        function yc(a, b, c) {
            b || D().warn("amp-analytics/variables", "REPLACE macro must have two or more arguments");
            c || (c = "");
            return a.replace(new RegExp(b, "g"), c)
        }

        function zc(a, b, c) {
            b || D().warn("amp-analytics/variables", "MATCH macro must have two or more arguments");
            var d = 0;
            c && (d = parseInt(c, 10), 0 != d && !d || 0 > d) && (D().error("amp-analytics/variables", "Third argument in MATCH macro must be a number >= 0"), d = 0);
            return (a = a.match(new RegExp(b))) && a[d] ? a[d] : ""
        }

        function Ac(a, b) {
            if (b) return (a.__AMP_EXPERIMENT_BRANCHES ? a.__AMP_EXPERIMENT_BRANCHES[b] : null) || "";
            var c = Ib(a);
            return Object.keys(c).map(function(d) {
                return d + ":" + c[d]
            }).join(",")
        }

        function Bc(a) {
            var b = this;
            this.m = a;
            this.na = M({});
            this.ed = H(this.m.win, "amp-analytics-linker-reader");
            this.na.$DEFAULT = xc;
            this.na.$SUBSTR = wc;
            S(this, "$TRIM", function(c) {
                return c.trim()
            });
            S(this, "$TOLOWERCASE", function(c) {
                return c.toLowerCase()
            });
            S(this, "$TOUPPERCASE", function(c) {
                return c.toUpperCase()
            });
            S(this, "$NOT", function(c) {
                return String(!c)
            });
            S(this, "$BASE64", function(c) {
                return Qb(c)
            });
            S(this, "$HASH", this.$c.bind(this));
            S(this, "$IF", function(c, d, e) {
                return Cc(c) ? d : e
            });
            this.na.$REPLACE = yc;
            this.na.$MATCH =
                zc;
            S(this, "$EQUALS", function(c, d) {
                return c === d
            });
            S(this, "LINKER_PARAM", function(c, d) {
                return b.ed.get(c, d)
            });
            S(this, "TIMEZONE_CODE", function() {
                var c = "";
                "Intl" in b.m.win && "DateTimeFormat" in b.m.win.Intl && (c = (new b.m.win.Intl.DateTimeFormat).resolvedOptions().timeZone);
                return c
            });
            S(this, "SCROLL_TOP", function() {
                return Math.round(P(b.m).getScrollTop())
            });
            S(this, "SCROLL_LEFT", function() {
                return Math.round(P(b.m).getScrollLeft())
            });
            S(this, "EXPERIMENT_BRANCHES", function(c) {
                return Ac(b.m.win, c)
            });
            S(this, "AMPDOC_META",
                function(c, d) {
                    var e = void 0 === d ? "" : d,
                        f;
                    return null != (f = b.m.getMetaByName(c)) ? f : e
                })
        }
        Bc.prototype.getMacros = function(a) {
            var b = this,
                c = {
                    COOKIE: function(e) {
                        var f = b.m.win;
                        return kc(f, a) ? Rb(f, e) : null
                    },
                    CONSENT_STATE: Dc(a),
                    CONSENT_STRING: mc(a),
                    CONSENT_METADATA: function(e) {
                        return Ec(a, F(e, "CONSENT_METADATA macro must contain a key"))
                    }
                },
                d = jc(a) ? {} : {
                    FIRST_CONTENTFUL_PAINT: function() {
                        return ab(b.m.win).getMetric("fcpv")
                    },
                    FIRST_VIEWPORT_READY: function() {
                        return ab(b.m.win).getMetric("pc")
                    },
                    MAKE_BODY_VISIBLE: function() {
                        return ab(b.m.win).getMetric("mbv")
                    },
                    LARGEST_CONTENTFUL_PAINT: function() {
                        return ab(b.m.win).getMetric("lcpv")
                    },
                    FIRST_INPUT_DELAY: function() {
                        return ab(b.m.win).getMetric("fid")
                    },
                    CUMULATIVE_LAYOUT_SHIFT: function() {
                        return ab(b.m.win).getMetric("cls")
                    }
                };
            return Object.assign({}, this.na, c, d)
        };

        function S(a, b, c) {
            a.na[b] = c
        }
        Bc.prototype.expandTemplate = function(a, b, c, d, e) {
            var f = this;
            return Qa(a, function(g, h) {
                if (0 > b.iterations) return D().error("amp-analytics/variables", "Maximum depth reached while expanding variables. Please ensure that the variables are not recursive."), g;
                if (!h) return "";
                var k = Fc(h);
                h = k.name;
                k = k.argList;
                if (b.freezeVars[h]) return g;
                g = b.getVar(h);
                var m = O(c);
                if ("string" == typeof g) g = Gc(f, g, b, c, m, d, e, k);
                else if (A(g)) {
                    for (h = 0; h < g.length; h++) g[h] = "string" == typeof g[h] ? Gc(f, g[h], b, c, m, d, e) : g[h];
                    g = Promise.all(g)
                }
                return Promise.resolve(g).then(function(n) {
                    return b.noEncode ?
                        n : Hc(n)
                })
            })
        };

        function Gc(a, b, c, d, e, f, g, h) {
            return a.expandTemplate(b, new R(c.vars, c.iterations - 1, !0), d, f, g).then(function(k) {
                return e.expandStringAsync(h ? k + h : k, f || a.getMacros(d), g)
            })
        }
        Bc.prototype.$c = function(a) {
            return H(this.m.win, "crypto").sha384Base64(a)
        };

        function Hc(a) {
            if (null == a) return "";
            if (A(a)) return a.map(Hc).join(",");
            var b = Fc(String(a)),
                c = b.argList;
            return encodeURIComponent(b.name) + c
        }

        function Fc(a) {
            if (!a) return {
                name: "",
                argList: ""
            };
            var b = a.match(uc);
            F(b, "Variable with invalid format found: " + a);
            return {
                name: b[1] || b[0],
                argList: b[2] || ""
            }
        }

        function T(a) {
            return I(a, "amp-analytics-variables")
        }

        function Dc(a) {
            return lc(a).then(function(b) {
                return b ? vc[b] : null
            })
        }

        function Ec(a, b) {
            return nc(a).then(function(c) {
                return c ? c[b] : null
            })
        }

        function Cc(a) {
            return "false" !== a && "" !== a && "0" !== a && "null" !== a && "NaN" !== a && "undefined" !== a
        };

        function Ic(a) {
            this.j = a;
            this.l = null;
            this.Tc = rb || {};
            this.qb = {};
            this.h = {};
            this.qa = {};
            this.W = !1;
            this.F = T(a)
        }
        l = Ic.prototype;
        l.loadConfig = function() {
            var a = this;
            this.l = this.j.ownerDocument.defaultView;
            this.W = this.j.hasAttribute("sandbox");
            return Promise.all([Jc(this), Kc(this)]).then(this.nd.bind(this)).then(this.Oc.bind(this)).then(function() {
                return a.h
            })
        };

        function Lc(a) {
            var b = va.cdn;
            var c;
            if (c = "bg" === a) c = self, c = !(!c.AMP_CONFIG || !c.AMP_CONFIG.canary);
            var d = c ? ".canary" : "";
            return b + "/rtv/" + y().rtvVersion + "/v0/analytics-vendors/" + a + d + ".json"
        }

        function Kc(a) {
            var b = a.j.getAttribute("type");
            if (!b) return t();
            var c = Lc(b),
                d = a.A();
            E().fine(d, "Fetching vendor config", c);
            return H(a.l, "xhr").fetchJson(c, {
                ampCors: !1
            }).then(function(e) {
                return e.json()
            }).then(function(e) {
                a.qb = e || {};
                E().fine(d, "Vendor config loaded for " + b, e)
            }, function(e) {
                D().error(d, "Error loading vendor config: ", c, e)
            })
        }

        function Jc(a) {
            var b = a.j.getAttribute("config");
            if (!b || a.W) return t();
            Eb(b, a.j);
            var c = a.A();
            E().fine(c, "Fetching remote config", b);
            var d = {};
            a.j.hasAttribute("data-credentials") && (d.credentials = a.j.getAttribute("data-credentials"));
            return O(a.j).expandUrlAsync(b, a.F.getMacros(a.j)).then(function(e) {
                b = e;
                return H(a.l, "xhr").fetchJson(b, d)
            }).then(function(e) {
                return e.json()
            }).then(function(e) {
                a.qa = e;
                E().fine(c, "Remote config loaded", b)
            }, function(e) {
                D().error(c, "Error loading remote config: ", b, e)
            })
        }
        l.nd = function() {
            var a = (this.qb.configRewriter || {}).url,
                b = M({});
            if (this.j.CONFIG) var c = this.j.CONFIG;
            else {
                c = {};
                var d = this.A();
                try {
                    var e = this.j.children;
                    if (1 == e.length) {
                        var f = this.j;
                        /^[\w-]+$/.test("script");
                        var g = (void 0 !== Ka ? Ka : Ka = La(f)) ? f.querySelectorAll("> script".replace(/^|,/g, "$&:scope ")) : Xa(f, "> script");
                        if (1 !== g.length) throw Error("Found " + g.length + " <script> children. Expected 1.");
                        var h = g[0];
                        if ("SCRIPT" != h.tagName || !h.hasAttribute("type") || "APPLICATION/JSON" != h.getAttribute("type").toUpperCase()) throw Error('<script> child must have type="application/json"');
                        try {
                            c = JSON.parse(h.textContent)
                        } catch (m) {
                            throw Error("Failed to parse <script> contents. Is it valid JSON?");
                        }
                    } else 1 < e.length && D().error(d, "The tag should contain only one <script> child.")
                } catch (m) {
                    D().error(d, m.message)
                }
            }
            var k = c;
            this.j.getAttribute("type") && (k.transport || this.qa.transport) && (c = this.A(), D().error(c, "Inline or remote config should not overwrite vendor transport settings"));
            k.transport && k.transport.iframe && (D().error("amp-analytics/config", "Inline configs are not allowed to specify transport iframe"),
                k.transport.iframe = void 0);
            this.qa.transport && this.qa.transport.iframe && (D().error("amp-analytics/config", "Remote configs are not allowed to specify transport iframe"), this.qa.transport.iframe = void 0);
            U(k, b);
            U(this.qa, b);
            return !a || this.W ? (this.h = Mc(this, b), t()) : Oc(this, b, a)
        };

        function Oc(a, b, c) {
            Eb(c, a.j);
            var d = a.A();
            E().fine(d, "Rewriting config", c);
            return Pc(a, b).then(function() {
                var e = {
                    method: "POST",
                    body: b
                };
                a.j.hasAttribute("data-credentials") && (e.credentials = a.j.getAttribute("data-credentials"));
                return O(a.j).expandUrlAsync(c).then(function(f) {
                    return H(a.l, "xhr").fetchJson(f, e)
                }).then(function(f) {
                    return f.json()
                }).then(function(f) {
                    a.h = Mc(a, f);
                    E().fine(d, "Configuration re-written", c)
                }, function(f) {
                    D().error(d, "Error rewriting configuration: ", c, f)
                })
            })
        }
        l.Oc = function() {
            if (this.h.warningMessage) {
                var a = this.A(),
                    b = this.j.getAttribute("type"),
                    c = this.j.getAttribute("config");
                D().warn(a, "Warning from analytics vendor%s%s: %s", b ? " " + b : "", c ? " with remote config url " + c : "", String(this.h.warningMessage));
                delete this.h.warningMessage
            }
        };

        function Pc(a, b) {
            var c = b.configRewriter,
                d = c && c.varGroups,
                e = (a.qb.configRewriter || {}).varGroups;
            if (!d && !e) return t();
            if (d && !e) {
                var f = a.A();
                D().warn(f, "This analytics provider does not currently support varGroups");
                return t()
            }
            b.configRewriter = b.configRewriter || {};
            var g = b.configRewriter;
            g.vars = M({});
            var h = [],
                k = d || {};
            Na(k, e);
            Object.keys(k).forEach(function(m) {
                var n = k[m];
                if (n.enabled) {
                    var r = a.shallowExpandObject(a.j, n).then(function(q) {
                        delete q.enabled;
                        Object.assign(g.vars, q)
                    });
                    h.push(r)
                }
            });
            return Promise.all(h).then(function() {
                if (!Object.keys(g.vars).length) return delete b.configRewriter;
                d && delete g.varGroups
            })
        }

        function Mc(a, b) {
            var c = M({
                vars: {
                    requestCount: 0
                }
            });
            U(Qc(a.Tc), c);
            U(Qc(a.qb), c, !0);
            U(Qc(b), c, !0);
            return c
        }
        l.A = function() {
            return "AmpAnalytics " + (this.j.getAttribute("id") || "<unknown id>")
        };
        l.shallowExpandObject = function(a, b) {
            var c = {},
                d = [],
                e = [],
                f = O(a),
                g = T(a).getMacros(a);
            Object.keys(b).forEach(function(h) {
                d.push(h);
                var k = f.expandStringAsync(b[h], g);
                e.push(k)
            });
            return Promise.all(e).then(function(h) {
                d.forEach(function(k, m) {
                    return c[k] = h[m]
                });
                return c
            })
        };

        function U(a, b, c) {
            if (null === b || void 0 === b) b = {};
            F(c || !a || !a.optout || "_gaUserPrefs.ioo" == a.optout || "__gaOptOutExtension" == a.optoutElementId, "optout property is only available to vendor config.");
            for (var d in a) F(c || "iframePing" != d, "iframePing config is only available to vendor config."), N(a, d) && (A(a[d]) ? (A(b[d]) || (b[d] = []), b[d] = U(a[d], b[d], c)) : B(a[d]) ? (B(b[d]) || (b[d] = {}), b[d] = U(a[d], b[d], c)) : b[d] = a[d]);
            return b
        }

        function Qc(a) {
            if (!a.requests) return a;
            for (var b in a.requests)
                if (N(a.requests, b)) {
                    var c = a.requests;
                    var d = a.requests[b];
                    d = B(d) ? d : {
                        baseUrl: d
                    };
                    c[b] = d
                }
            if (N(a, "requests") && N(a, "requestOrigin")) {
                b = a.requestOrigin;
                for (var e in a.requests) N(a.requests[e], "origin") || (a.requests[e].origin = b)
            }
            return a
        };

        function Rc() {
            this.I = null
        }
        l = Rc.prototype;
        l.add = function(a) {
            var b = this;
            this.I || (this.I = []);
            this.I.push(a);
            return function() {
                b.remove(a)
            }
        };
        l.remove = function(a) {
            this.I && (a = this.I.indexOf(a), -1 < a && this.I.splice(a, 1))
        };
        l.removeAll = function() {
            this.I && (this.I.length = 0)
        };
        l.fire = function(a) {
            if (this.I)
                for (var b = this.I, c = 0; c < b.length; c++)(0, b[c])(a)
        };
        l.getHandlerCount = function() {
            return this.I ? this.I.length : 0
        };
        var Sc = {
            ENDED: "video-ended",
            PAUSE: "video-pause",
            PLAY: "video-play",
            SESSION: "video-session",
            SESSION_VISIBLE: "video-session-visible",
            SECONDS_PLAYED: "video-seconds-played",
            CUSTOM: "video-hosted-custom",
            PERCENTAGE_PLAYED: "video-percentage-played",
            AD_START: "video-ad-start",
            AD_END: "video-ad-end"
        };
        var Tc = /^vars(.+)/;

        function Uc() {}
        var sa = {
                CLICK: "click",
                CUSTOM: "custom",
                HIDDEN: "hidden",
                INI_LOAD: "ini-load",
                RENDER_START: "render-start",
                SCROLL: "scroll",
                STORY: "story",
                TIMER: "timer",
                VIDEO: "video",
                VISIBLE: "visible"
            },
            V = ["ampdoc", "embed"],
            W = {},
            cd = Object.freeze((W.click = {
                name: "click",
                allowedFor: V.concat(["timer"]),
                klass: function(a) {
                    return new Vc(a)
                }
            }, W.custom = {
                name: "custom",
                allowedFor: V.concat(["timer"]),
                klass: function(a) {
                    return new X(a)
                }
            }, W.hidden = {
                name: "visible",
                allowedFor: V.concat(["timer"]),
                klass: function(a) {
                    return new Wc(a)
                }
            }, W["ini-load"] = {
                name: "ini-load",
                allowedFor: V.concat(["timer", "visible"]),
                klass: function(a) {
                    return new Xc(a)
                }
            }, W["render-start"] = {
                name: "render-start",
                allowedFor: V.concat(["timer", "visible"]),
                klass: function(a) {
                    return new Yc(a)
                }
            }, W.scroll = {
                name: "scroll",
                allowedFor: V.concat(["timer"]),
                klass: function(a) {
                    return new Zc(a)
                }
            }, W.story = {
                name: "story",
                allowedFor: V,
                klass: function(a) {
                    return new $c(a)
                }
            }, W.timer = {
                name: "timer",
                allowedFor: V,
                klass: function(a) {
                    return new ad(a)
                }
            }, W.video = {
                name: "video",
                allowedFor: V.concat(["timer"]),
                klass: function(a) {
                    return new bd(a)
                }
            }, W.visible = {
                name: "visible",
                allowedFor: V.concat(["timer"]),
                klass: function(a) {
                    return new Wc(a)
                }
            }, W));

        function dd(a) {
            return a.startsWith("video") ? "video" : a.startsWith("story") ? "story" : ra(a) ? N(cd, a) ? cd[a].name : a : "custom"
        }

        function ed(a) {
            var b = {};
            Object.keys(cd).forEach(function(c) {
                N(cd, c) && -1 != cd[c].allowedFor.indexOf(a) && (b[c] = cd[c].klass)
            });
            return b
        }

        function Y(a, b, c, d) {
            c = void 0 === c ? {} : c;
            d = void 0 === d ? !0 : d;
            var e = c,
                f = d;
            this.target = a;
            this.type = b;
            f ? (a = Ya(a, Tc), Na(a, e, 0)) : a = e;
            this.vars = a
        }

        function Z(a) {
            this.root = a
        }
        Z.prototype.dispose = function() {};
        Z.prototype.add = function() {};

        function X(a) {
            this.root = a;
            var b = this;
            this.O = {};
            this.D = {};
            this.ga = {};
            setTimeout(function() {
                b.D = void 0
            }, 1E4)
        }
        p(X, Z);
        X.prototype.dispose = function() {
            this.ga = this.D = void 0;
            for (var a in this.O) this.O[a].removeAll()
        };
        X.prototype.add = function(a, b, c, d) {
            var e = this,
                f = c.selector;
            f || (f = ":root");
            var g = this.root.getElement(a, f, c.selectionMethod || null),
                h = b.startsWith("sandbox-"),
                k = h ? this.ga && this.ga[b] : this.D && this.D[b];
            if (k) {
                var m = k.length;
                g.then(function(r) {
                    setTimeout(function() {
                        for (var q = 0; q < m; q++) {
                            var u = k[q];
                            r.contains(u.target) && d(u)
                        }
                        h && (e.ga[b] = void 0)
                    }, 1)
                })
            }
            var n = this.O[b];
            n || (n = new Rc, this.O[b] = n);
            return this.O[b].add(function(r) {
                g.then(function(q) {
                    q.contains(r.target) && d(r)
                })
            })
        };
        X.prototype.trigger = function(a) {
            var b = a.type,
                c = b.startsWith("sandbox-"),
                d = this.O[b];
            if (d && (d.fire(a), c)) return;
            c ? (this.ga[b] = this.ga[b] || [], this.ga[b].push(a)) : this.D && (this.D[b] = this.D[b] || [], this.D[b].push(a))
        };

        function $c(a) {
            X.call(this, a)
        }
        p($c, X);
        $c.prototype.add = function(a, b, c, d) {
            var e = this.root.getRootElement();
            if (a = this.D && this.D[b])
                for (var f = a.length, g = 0; g < f; g++) fd(a[g], e, c, d);
            a = this.O[b];
            a || (a = new Rc, this.O[b] = a);
            return this.O[b].add(function(h) {
                fd(h, e, c, d)
            })
        };

        function fd(a, b, c, d) {
            var e = a.type;
            a = a.vars;
            var f = c.storySpec || {},
                g = void 0 === f.repeat ? !0 : f.repeat,
                h = a.eventDetails;
            (c = c.tagName) && h.tagName && c.toLowerCase() !== h.tagName || !1 === g && h.repeated || d(new Y(b, e, a))
        }
        $c.prototype.trigger = function(a) {
            var b = a.type,
                c = this.O[b];
            c && c.fire(a);
            this.D && (this.D[b] = this.D[b] || [], this.D[b].push(a))
        };

        function Vc(a) {
            this.root = a;
            this.Ra = new Rc;
            this.Xb = this.Ra.fire.bind(this.Ra);
            this.root.getRoot().addEventListener("click", this.Xb)
        }
        p(Vc, Z);
        Vc.prototype.dispose = function() {
            this.root.getRoot().removeEventListener("click", this.Xb);
            this.Ra.removeAll()
        };
        Vc.prototype.add = function(a, b, c, d) {
            b = F(c.selector, "Missing required selector on click trigger");
            c = c.selectionMethod || null;
            return this.Ra.add(this.root.createSelectiveListener(this.Wc.bind(this, d), a.parentElement || a, b, c))
        };
        Vc.prototype.Wc = function(a, b) {
            a(new Y(b, "click"))
        };

        function Zc(a) {
            this.G = this.root = a;
            this.xa = null
        }
        p(Zc, Z);
        Zc.prototype.dispose = function() {
            null !== this.xa && (this.G.getScrollManager().removeScrollHandler(this.xa), this.xa = null)
        };
        Zc.prototype.add = function(a, b, c, d) {
            if (!c.scrollSpec) return D().error("amp-analytics/events", "Missing scrollSpec on scroll trigger."), Uc;
            if (!Array.isArray(c.scrollSpec.verticalBoundaries) && !Array.isArray(c.scrollSpec.horizontalBoundaries)) return D().error("amp-analytics/events", "Boundaries are required for the scroll trigger to work."), Uc;
            var e = gd(c.scrollSpec.verticalBoundaries),
                f = gd(c.scrollSpec.horizontalBoundaries);
            this.xa = this.pd.bind(this, f, e, !!c.scrollSpec.useInitialPageSize, d);
            return this.G.getScrollManager().addScrollHandler(this.xa)
        };
        Zc.prototype.pd = function(a, b, c, d, e) {
            c = c ? e.initialSize : e;
            var f = c.scrollWidth;
            hd(this, b, 100 * (e.top + e.height) / c.scrollHeight, "verticalScrollBoundary", d);
            hd(this, a, 100 * (e.left + e.width) / f, "horizontalScrollBoundary", d)
        };

        function gd(a) {
            var b = M({});
            if (!a || !Array.isArray(a)) return b;
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                if ("number" !== typeof d || !isFinite(d)) {
                    D().error("amp-analytics/events", "Scroll trigger boundaries must be finite.");
                    break
                }
                d = Math.min(5 * Math.round(d / 5), 100);
                b[d] = !1
            }
            return b
        }

        function hd(a, b, c, d, e) {
            if (c)
                for (var f in b)
                    if (N(b, f)) {
                        var g = parseInt(f, 10);
                        g > c || b[g] || (b[g] = !0, g = {}, g[d] = f, e(new Y(a.G.getRootElement(), "scroll", g, !1)))
                    }
        }

        function Yc(a) {
            this.root = a
        }
        p(Yc, Z);
        Yc.prototype.dispose = function() {};
        Yc.prototype.add = function(a, b, c, d) {
            var e = this,
                f = c.selector || ":root";
            if (":root" == f || ":host" == f) {
                var g = this.root.getRootElement();
                var h = this.getRootSignal(b)
            } else h = this.root.getAmpElement(a.parentElement || a, f, c.selectionMethod).then(function(k) {
                g = k;
                return e.getElementSignal(b, g)
            });
            h.then(function() {
                d(new Y(g, b))
            });
            return Uc
        };
        Yc.prototype.getRootSignal = function(a) {
            return this.root.signals().whenSignal(a)
        };
        Yc.prototype.getElementSignal = function(a, b) {
            return "function" != typeof b.signals ? t() : b.signals().whenSignal(a)
        };

        function Xc(a) {
            this.root = a
        }
        p(Xc, Z);
        Xc.prototype.dispose = function() {};
        Xc.prototype.add = function(a, b, c, d) {
            var e = this,
                f = c.selector || ":root";
            if (":root" == f || ":host" == f) {
                var g = this.root.getRootElement();
                a = this.getRootSignal()
            } else a = this.root.getAmpElement(a.parentElement || a, f, c.selectionMethod).then(function(h) {
                g = h;
                return e.getElementSignal("ini-load", g)
            });
            a.then(function() {
                d(new Y(g, b))
            });
            return Uc
        };
        Xc.prototype.getRootSignal = function() {
            return this.root.whenIniLoaded()
        };
        Xc.prototype.getElementSignal = function(a, b) {
            if ("function" != typeof b.signals) return t();
            var c = b.signals();
            return Promise.race([c.whenSignal("ini-load"), c.whenSignal("load-end")])
        };

        function id(a, b, c) {
            this.eb = void 0;
            F("interval" in a, "Timer interval specification required");
            this.nc = Number(a.interval) || 0;
            F(.5 <= this.nc, "Bad timer interval specification");
            this.qc = "maxTimerLength" in a ? Number(a.maxTimerLength) : 7200;
            F(0 < this.qc, "Bad maxTimerLength specification");
            this.fd = "maxTimerLength" in a;
            this.Mc = "immediate" in a ? !!a.immediate : !0;
            this.ha = this.$ = this.Cb = null;
            this.Ia = b || null;
            this.ob = c || null;
            this.gb = this.Y = void 0
        }
        l = id.prototype;
        l.init = function(a) {
            this.Ia ? this.Ia && (this.$ = this.Ia()) : a()
        };
        l.dispose = function() {
            this.ha && (this.ha(), this.ha = null);
            this.$ && (this.$(), this.$ = null)
        };
        l.isRunning = function() {
            return !!this.eb
        };
        l.startIntervalInWindow = function(a, b, c) {
            if (!this.isRunning() && (this.Y = Date.now(), this.gb = void 0, this.Cb = b, this.eb = a.setInterval(function() {
                    b()
                }, 1E3 * this.nc), (!this.ob || this.ob && this.fd) && a.setTimeout(function() {
                    c()
                }, 1E3 * this.qc), this.$ && (this.$(), this.$ = null), this.Mc && b(), this.ob)) try {
                this.ha = this.ob()
            } catch (d) {
                throw this.dispose(), d;
            }
        };
        l.pb = function(a) {
            this.isRunning() && (this.Cb(), this.Cb = null, a.clearInterval(this.eb), this.gb = this.eb = void 0, this.ha && (this.ha(), this.ha = null), this.Ia && (this.$ = this.Ia()))
        };
        l.getTimerVars = function() {
            var a = 0;
            this.isRunning() && (a = this.Y ? Date.now() - (this.gb || this.Y) : 0, this.gb = Date.now());
            return M({
                timerDuration: a,
                timerStart: this.Y || 0
            })
        };

        function ad(a) {
            this.root = a;
            this.C = {};
            this.ud = 1
        }
        p(ad, Z);
        l = ad.prototype;
        l.getTrackedTimerKeys = function() {
            return Object.keys(this.C)
        };
        l.dispose = function() {
            var a = this;
            this.getTrackedTimerKeys().forEach(function(b) {
                a.Jb(b)
            })
        };
        l.add = function(a, b, c, d) {
            var e = this;
            c = c.timerSpec;
            F(c && "object" == typeof c, "Bad timer specification");
            var f = "startSpec" in c ? c.startSpec : null;
            F(!f || "object" == typeof f, "Bad timer start specification");
            var g = "stopSpec" in c ? c.stopSpec : null;
            F(!f && !g || "object" == typeof g, "Bad timer stop specification");
            var h = ++this.ud;
            if (f) {
                var k = jd(this, f);
                F(k, "Cannot track timer start");
                var m = k.add.bind(k, a, f.on, f, this.hc.bind(this, h, b, d))
            }
            if (g) {
                var n = jd(this, g);
                F(n, "Cannot track timer stop");
                var r = n.add.bind(n, a, g.on, g,
                    this.hc.bind(this, h, b, d))
            }
            var q = new id(c, m, r);
            this.C[h] = q;
            q.init(this.Bc.bind(this, h, b, d));
            return function() {
                e.Jb(h)
            }
        };

        function jd(a, b) {
            b = D().assertString(b.on);
            var c = dd(b);
            return a.root.getTrackerForAllowlist(c, ed("timer"))
        }
        l.hc = function(a, b, c) {
            var d = this.C[a];
            d && (d.isRunning() ? this.pb(a) : this.Bc(a, b, c))
        };
        l.Bc = function(a, b, c) {
            var d = this;
            this.C[a].startIntervalInWindow(this.root.ampdoc.win, function() {
                var e = new Y(d.root.getRootElement(), b, d.C[a].getTimerVars(), !1);
                c(e)
            }, this.Jb.bind(this, a))
        };
        l.pb = function(a) {
            this.C[a].pb(this.root.ampdoc.win)
        };
        l.Jb = function(a) {
            this.C[a] && (this.pb(a), this.C[a].dispose(), delete this.C[a])
        };

        function bd(a) {
            this.root = a;
            var b = this;
            this.nb = new Rc;
            this.xb = this.nb.fire.bind(this.nb);
            Object.keys(Sc).forEach(function(c) {
                b.root.getRoot().addEventListener(Sc[c], b.xb)
            })
        }
        p(bd, Z);
        bd.prototype.dispose = function() {
            var a = this,
                b = this.root.getRoot();
            Object.keys(Sc).forEach(function(c) {
                b.removeEventListener(Sc[c], a.xb)
            });
            this.nb = this.xb = null
        };
        bd.prototype.add = function(a, b, c, d) {
            var e = c.videoSpec || {},
                f = this.root.getElement(a, c.selector || e.selector, c.selectionMethod || null),
                g = e["end-session-when-invisible"],
                h = e["exclude-autoplay"],
                k = e.interval,
                m = e.percentages,
                n = c.on,
                r = 0,
                q = 0;
            return this.nb.add(function(u) {
                var v = u.type,
                    z = u.data,
                    G = "video-session-visible" == v ? "video-session" : "video-hosted-custom" == v ? z["__amp:eventType"] : v;
                if (G === n)
                    if ("video-seconds-played" !== G || k) {
                        if ("video-seconds-played" === G && (r++, 0 !== r % k)) return;
                        if ("video-percentage-played" ===
                            G) {
                            if (!m) {
                                D().error("amp-analytics/events", "video-percentage-played requires percentages spec.");
                                return
                            }
                            for (var K = 0; K < m.length; K++) {
                                var ka = m[K];
                                if (0 >= ka || 0 != ka % 5) {
                                    D().error("amp-analytics/events", "Percentages must be set in increments of %s with non-zero values", 5);
                                    return
                                }
                            }
                            var Va = parseInt(z.normalizedPercentage, 10);
                            qa(Va);
                            if (q == Va && 1 < m.length || 0 > m.indexOf(Va)) return;
                            q = Va
                        }
                        if ("video-session-visible" !== v || g)
                            if (!h || "playing_auto" !== z.state) {
                                var qe = u.target;
                                f.then(function(Nc) {
                                    if (Nc.contains(qe)) {
                                        if (z) {
                                            var Bb =
                                                Object.assign({}, z);
                                            delete Bb["__amp:eventType"]
                                        } else Bb = {};
                                        d(new Y(Nc, G, Bb))
                                    }
                                })
                            }
                    } else D().error("amp-analytics/events", "video-seconds-played requires interval spec with non-zero value")
            })
        };

        function Wc(a) {
            this.root = a;
            this.Fc = {}
        }
        p(Wc, Z);
        l = Wc.prototype;
        l.dispose = function() {};
        l.add = function(a, b, c, d) {
            var e = this,
                f = c.visibilitySpec || {},
                g = c.selector || f.selector,
                h = f.waitFor,
                k = f.reportWhen,
                m = null;
            k && F(!f.repeat, "reportWhen and repeat are mutually exclusive.");
            "hidden" === b && (k && D().error("amp-analytics/events", 'ReportWhen should not be defined when eventType is "hidden"'), k = "documentHidden");
            var n = this.root.getVisibilityManager();
            "documentHidden" == k ? m = this.Qc.bind(this) : "documentExit" == k ? m = this.Pc.bind(this) : F(!k, 'reportWhen value "%s" not supported.', k);
            if (!g || ":root" == g || ":host" ==
                g) return n.listenRoot(f, this.getReadyPromise(h || (g ? "ini-load" : "none")), m, this.rc.bind(this, b, d, this.root.getRootElement()));
            c = c.selectionMethod || f.selectionMethod;
            kd(g);
            var r = this.root.getElements(a.parentElement || a, g, c).then(function(q) {
                for (var u = [], v = 0; v < q.length; v++) u.push(n.listenElement(q[v], f, e.getReadyPromise(h, q[v]), m, e.rc.bind(e, b, d, q[v])));
                return u
            });
            return function() {
                r.then(function(q) {
                    for (var u = 0; u < q.length; u++) q[u]()
                })
            }
        };

        function kd(a) {
            if (A(a))
                for (var b = {}, c = 0; c < a.length; c++) F(!b[a[c]], "Cannot have duplicate selectors in selectors list: %s", a), b[a[c]] = a[c]
        }
        l.Qc = function() {
            var a = this.root.ampdoc;
            return a.isVisible() ? new Promise(function(b) {
                a.onVisibilityChanged(function() {
                    a.isVisible() || b()
                })
            }) : t()
        };
        l.Pc = function() {
            var a = new w,
                b = this.root.ampdoc.win,
                c, d;
            "onpagehide" in this.root.ampdoc.win || b.addEventListener("unload", c = function() {
                b.removeEventListener("unload", c);
                a.resolve()
            });
            b.addEventListener("pagehide", d = function() {
                b.removeEventListener("pagehide", d);
                a.resolve()
            });
            return a.promise
        };
        l.getReadyPromise = function(a, b) {
            if (b) {
                var c = b.tagName;
                c.startsWith("AMP-") && "AMP-STICKY-AD-TOP-PADDING" != c && "AMP-BODY" != c ? a = a || "ini-load" : F(!a || "none" == a, "waitFor for non-AMP elements must be none or null. Found %s", a)
            }
            if (!a || "none" == a) return null;
            var d = ed("visible");
            F(void 0 !== d[a], "waitFor value %s not supported", a);
            var e = this.Fc[a] || this.root.getTrackerForAllowlist(a, d);
            if (e) this.Fc[a] = e;
            else return null;
            return b ? e.getElementSignal(a, b) : e.getRootSignal(a)
        };
        l.rc = function(a, b, c, d) {
            var e = Ya(c, Tc),
                f;
            for (f in e) d[f] = e[f];
            b(new Y(c, a, d, !1))
        };
        var ld = !1;

        function md() {
            this.J = []
        }
        md.prototype.peek = function() {
            var a = this.J.length;
            return a ? this.J[a - 1].item : null
        };
        md.prototype.enqueue = function(a, b) {
            if (isNaN(b)) throw Error("Priority must not be NaN.");
            for (var c = -1, d = 0, e = this.J.length; d <= e;) {
                c = Math.floor((d + e) / 2);
                if (c === this.J.length) break;
                if (this.J[c].priority < b) d = c + 1;
                else if (0 < c && this.J[c - 1].priority >= b) e = c - 1;
                else break
            }
            this.J.splice(c, 0, {
                item: a,
                priority: b
            })
        };
        md.prototype.forEach = function(a) {
            for (var b = this.J.length; b--;) a(this.J[b].item)
        };
        md.prototype.dequeue = function() {
            return this.J.length ? this.J.pop().item : null
        };
        ca.Object.defineProperties(md.prototype, {
            length: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.J.length
                }
            }
        });
        var nd = /nochunking=1/.test(self.location.hash),
            od = t();

        function pd(a, b, c) {
            if (nd) od.then(b);
            else {
                var d = qd,
                    e = J(a),
                    f = L(e);
                Ha(f, e, "chunk", d);
                I(a, "chunk").run(b, c)
            }
        }

        function rd(a) {
            this.state = "not_run";
            this.Ab = a
        }

        function sd(a, b) {
            if ("run" != a.state) {
                a.state = "run";
                try {
                    a.Ab(b)
                } catch (c) {
                    throw a.sc(), c;
                }
            }
        }
        rd.prototype.A = function() {
            return this.Ab.displayName || this.Ab.name
        };
        rd.prototype.sc = function() {};
        rd.prototype.jc = function() {
            return !1
        };
        rd.prototype.Dc = function() {
            return !1
        };

        function td(a, b, c) {
            rd.call(this, a);
            this.$b = c
        }
        p(td, rd);
        td.prototype.sc = function() {
            var a = self.document;
            if (!ld) {
                ld = !0;
                a = a.body;
                var b = {
                        opacity: 1,
                        visibility: "visible",
                        animation: "none"
                    },
                    c;
                for (c in b) {
                    var d = a,
                        e = b[c];
                    var f = d.style;
                    var g = c;
                    if (g.startsWith("--")) f = g;
                    else {
                        Zb || (Zb = Object.create(null));
                        var h = Zb[g];
                        if (!h) {
                            h = g;
                            if (void 0 === f[g]) {
                                var k = g;
                                k = k.charAt(0).toUpperCase() + k.slice(1);
                                b: {
                                    for (var m = 0; m < $b.length; m++) {
                                        var n = $b[m] + k;
                                        if (void 0 !== f[n]) {
                                            k = n;
                                            break b
                                        }
                                    }
                                    k = ""
                                }
                                void 0 !== f[k] && (h = k)
                            }
                            Zb[g] = h
                        }
                        f = h
                    }
                    f && (f.startsWith("--") ? d.style.setProperty(f, e) : d.style[f] = e)
                }
            }
        };
        td.prototype.jc = function() {
            return this.$b.ampdoc.isVisible()
        };
        td.prototype.Dc = function() {
            return this.$b.bc
        };

        function qd(a) {
            var b = this;
            this.ampdoc = a;
            this.l = a.win;
            this.sa = new md;
            this.Vb = this.dc.bind(this);
            this.la = 0;
            this.sd = !(!this.l.navigator.scheduling || !this.l.navigator.scheduling.isInputPending);
            this.mb = !1;
            this.Hc = this.l.document.documentElement.hasAttribute("i-amphtml-no-boilerplate");
            this.l.addEventListener("message", function(c) {
                "amp-macro-task" == c.data && b.dc(null)
            });
            this.bc = !1;
            Ia(L(a), "viewer").then(function() {
                b.bc = !0
            });
            a.onVisibilityChanged(function() {
                a.isVisible() && ud(b)
            })
        }
        qd.prototype.run = function(a, b) {
            var c = new rd(a);
            this.sa.enqueue(c, b);
            ud(this)
        };
        qd.prototype.runForStartup = function(a) {
            a = new td(a, this.l, this);
            this.sa.enqueue(a, Number.POSITIVE_INFINITY);
            ud(this)
        };

        function vd(a, b) {
            for (var c = a.sa.peek(); c && "not_run" !== c.state;) a.sa.dequeue(), c = a.sa.peek();
            c && b && a.sa.dequeue();
            return c
        }
        qd.prototype.dc = function(a) {
            var b = this,
                c = vd(this, !0);
            if (!c) return this.mb = !1, this.la = 0, !1;
            try {
                var d = Date.now();
                sd(c, a)
            } finally {
                od.then().then().then().then().then().then().then().then().then(function() {
                    b.mb = !1;
                    b.la += Date.now() - d;
                    E().fine("CHUNK", c.A(), "Chunk duration", Date.now() - d, b.la);
                    ud(b)
                })
            }
            return !0
        };

        function wd(a) {
            a.Hc && (a.sd ? a.l.navigator.scheduling.isInputPending() : 5 < a.la) ? (a.la = 0, xd(a)) : od.then(function() {
                a.Vb(null)
            })
        }

        function ud(a) {
            if (!a.mb) {
                var b = vd(a);
                b && (b.jc() ? (a.mb = !0, wd(a)) : b.Dc() && a.l.requestIdleCallback ? yd(a.l, a.Vb) : xd(a))
            }
        }

        function xd(a) {
            a.l.postMessage("amp-macro-task", "*")
        }

        function yd(a, b) {
            function c(e) {
                if (15 > e.timeRemaining()) {
                    var f = 2E3 - (Date.now() - d);
                    0 >= f || e.didTimeout ? (E().fine("CHUNK", "Timed out", 2E3, e.didTimeout), b(e)) : (E().fine("CHUNK", "Rescheduling with", f, e.timeRemaining()), a.requestIdleCallback(c, {
                        timeout: f
                    }))
                } else E().fine("CHUNK", "Running idle callback with ", 15), b(e)
            }
            var d = Date.now();
            a.requestIdleCallback(c, {
                timeout: 2E3
            })
        };

        function zd(a, b) {
            this.G = a;
            this.Tb = b;
            this.pc = [];
            this.Pb = 0;
            this.l = b.ownerDocument.defaultView
        }
        zd.prototype.dispose = function() {
            this.pc.forEach(function(a) {
                a()
            })
        };
        zd.prototype.addTrigger = function(a, b) {
            function c() {
                k = h.add(d.Tb, e, a, b);
                d.pc.push(k);
                m.resolve()
            }
            var d = this,
                e = a.on,
                f = dd(e),
                g = ed(this.G.getType()),
                h = this.G.getTrackerForAllowlist(f, g);
            F(!!h, 'Trigger type "%s" is not allowed in the %s', e, this.G.getType());
            var k, m = new w;
            1 > this.Pb || !Ad(this.l) ? c() : pd(this.Tb, c, 3 > this.Pb ? 20 : 10);
            this.Pb++;
            return m.promise
        };

        function Ad(a) {
            return "inabox" == y(a).runtime ? !!Gb(a)["analytics-chunks-inabox"] : !0
        };
        var Bd = {
            referrerDomains: !0,
            enabled: !0,
            cookiePath: !0,
            cookieMaxAge: !0,
            cookieSecure: !0,
            cookieDomain: !0
        };

        function Cd(a, b, c) {
            this.l = a;
            this.j = b;
            this.Ka = O(b);
            this.rb = null;
            this.h = c;
            this.Gc = T(b).getMacros(b)
        }
        Cd.prototype.write = function() {
            var a = this;
            if (!this.rb) {
                this.rb = new w;
                var b = function() {
                    a.rb.resolve(Dd(a))
                };
                Ad(this.l) ? pd(this.j, b, 10) : b()
            }
            return this.rb.promise
        };

        function Dd(a) {
            if (!kc(a.l, a.j) || !N(a.h, "cookies")) return t();
            if (!B(a.h.cookies)) return D().error("amp-analytics/cookie-writer", "cookies config must be an object"), t();
            var b = a.h.cookies;
            if (!1 === b.enabled) return t();
            var c;
            N(b, "cookieMaxAge") ? (c = Number(b.cookieMaxAge)) || 0 === c ? (0 >= c && D().warn("amp-analytics/cookie-writer", "cookieMaxAge %s less than or equal to 0, cookie will immediately expire", b.cookieMaxAge), c *= 1E3) : (D().error("amp-analytics/cookie-writer", "invalid cookieMaxAge %s, falling back to default value (1 year)",
                b.cookieMaxAge), c = 31536E6) : c = 31536E6;
            var d = c;
            c = Object.keys(b);
            for (var e = [], f = 0; f < c.length; f++) {
                var g = c[f],
                    h = b[g];
                var k = h;
                Bd[g] ? k = !1 : B(k) ? N(k, "value") ? k = !0 : (D().error("amp-analytics/cookie-writer", "value is required in the cookieValue object"), k = !1) : (D().error("amp-analytics/cookie-writer", "cookieValue must be configured in an object"), k = !1);
                k && e.push(Ed(a, g, h.value, d))
            }
            return Promise.all(e)
        }

        function Ed(a, b, c, d) {
            return a.Ka.expandStringAsync(c, a.Gc).then(function(e) {
                if (e) {
                    var f = Date.now() + d,
                        g = a.l,
                        h = {
                            highestAvailableDomain: !0
                        };
                    h = void 0 === h ? {} : h;
                    if (h.allowOnProxyOrigin) F(!h.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
                    else {
                        F(!Fb(g.location.href), "Should never attempt to set cookie on proxy origin: " + b);
                        var k = Q(g.location.href).hostname.toLowerCase(),
                            m = Q(va.cdn).hostname.toLowerCase();
                        F(!(k == m || Oa(k, "." + m)), "Should never attempt to set cookie on proxy origin. (in depth check): " +
                            b)
                    }
                    k = void 0;
                    h.domain ? k = h.domain : h.highestAvailableDomain && (k = Tb(g));
                    Ub(g, b, e, f, k, h.sameSite, h.secure)
                }
            }).catch(function(e) {
                D().error("amp-analytics/cookie-writer", "Error expanding cookie string", e)
            })
        };

        function Fd(a) {
            this.T = P(a.ampdoc);
            this.gd = I(a.ampdoc, "mutator");
            this.ja = null;
            this.ra = new Rc;
            this.G = a.getRootElement();
            this.cb = null
        }
        Fd.prototype.dispose = function() {
            this.ra.removeAll();
            this.ja && (this.ja(), this.ja = null)
        };
        Fd.prototype.removeScrollHandler = function(a) {
            this.ra.remove(a);
            0 >= this.ra.getHandlerCount() && this.ja && (this.ja(), this.ja = null)
        };
        Fd.prototype.addScrollHandler = function(a) {
            var b = this,
                c = this.T.getSize();
            (this.cb || Gd(this)).then(function(d) {
                var e = d.top,
                    f = d.left,
                    g = d.width,
                    h = d.height,
                    k = {
                        top: b.T.getScrollTop() - e,
                        left: b.T.getScrollLeft() - f,
                        width: c.width,
                        height: c.height,
                        scrollHeight: h,
                        scrollWidth: g,
                        initialSize: {
                            scrollHeight: h,
                            scrollWidth: g
                        }
                    };
                a(k)
            });
            0 === this.ra.getHandlerCount() && (this.ja = this.T.onChanged(this.kd.bind(this)));
            return this.ra.add(a)
        };
        Fd.prototype.kd = function(a) {
            var b = this;
            return Promise.all([this.cb || Gd(this), Gd(this)]).then(function(c) {
                var d = c[0],
                    e = c[1];
                b.ra.fire({
                    top: a.top - e.top,
                    left: a.left - e.left,
                    width: a.width,
                    height: a.height,
                    scrollWidth: e.width,
                    scrollHeight: e.height,
                    initialSize: {
                        scrollHeight: d.height,
                        scrollWidth: d.width
                    }
                })
            })
        };

        function Gd(a) {
            var b = a.gd.measureElement(function() {
                return a.T.getLayoutRect(a.G)
            });
            a.cb = a.cb || b;
            return b
        };

        function Hd(a, b, c, d) {
            return {
                left: a,
                top: b,
                width: c,
                height: d,
                bottom: b + d,
                right: a + c,
                x: a,
                y: b
            }
        }

        function Id(a, b, c) {
            c = {
                top: c,
                bottom: c + b.getHeight(),
                left: 0,
                right: b.getWidth()
            };
            c = Hd(Number(c.left), Number(c.top), Number(c.width), Number(c.height));
            return a.top <= c.bottom && c.top <= a.bottom && a.left <= c.right && c.left <= a.right ? "inside" : a.top < c.top ? "top" : a.bottom > c.bottom ? "bottom" : "inside"
        };

        function Jd() {}
        Jd.prototype.generateRequest = function(a, b, c) {
            return (c = void 0 === c ? !1 : c) ? {
                url: a.replace("${extraUrlParams}", ""),
                payload: JSON.stringify(b.extraUrlParams)
            } : {
                url: Kd(a, [b])
            }
        };
        Jd.prototype.generateBatchRequest = function(a, b, c) {
            return (void 0 === c ? 0 : c) ? {
                url: a.replace("${extraUrlParams}", ""),
                payload: JSON.stringify(b.map(function(d) {
                    return d.extraUrlParams
                }))
            } : {
                url: Kd(a, b)
            }
        };
        var Ld = {
            "default": new Jd
        };

        function Kd(a, b) {
            var c = b.map(function(d) {
                return Db(d.extraUrlParams)
            }).filter(function(d) {
                return !!d
            }).join("&");
            return 0 <= a.indexOf("${extraUrlParams}") ? a.replace("${extraUrlParams}", c) : Cb(a, c)
        };
        var Md = {
            AMPDOC_HOST: !0,
            AMPDOC_HOSTNAME: !0,
            AMPDOC_URL: !0,
            AMP_VERSION: !0,
            AVAILABLE_SCREEN_HEIGHT: !0,
            AVAILABLE_SCREEN_WIDTH: !0,
            BACKGROUND_STATE: !0,
            BROWSER_LANGUAGE: !0,
            CANONICAL_HOST: !0,
            CANONICAL_HOSTNAME: !0,
            CANONICAL_PATH: !0,
            CANONICAL_URL: !0,
            DOCUMENT_CHARSET: !0,
            FIRST_CONTENTFUL_PAINT: !0,
            FIRST_VIEWPORT_READY: !0,
            MAKE_BODY_VISIBLE: !0,
            RANDOM: !0,
            SCREEN_COLOR_DEPTH: !0,
            SCREEN_HEIGHT: !0,
            SCREEN_WIDTH: !0,
            SOURCE_HOST: !0,
            SOURCE_HOSTNAME: !0,
            SOURCE_PATH: !0,
            SOURCE_URL: !0,
            TIMESTAMP: !0,
            TIMEZONE: !0,
            TIMEZONE_CODE: !0,
            USER_AGENT: !0,
            VIEWPORT_HEIGHT: !0,
            VIEWPORT_WIDTH: !0
        };

        function Nd(a) {
            return new Promise(function(b) {
                setTimeout(function() {
                    return b(a())
                })
            })
        }

        function Od(a) {
            return B(a.resources) ? a.encoding && a.encoding.entry && a.encoding.delim ? 2 > a.encoding.base || 36 < a.encoding.base ? (D().warn("ANALYTICS", "resource timing variables only supports bases between 2 and 36"), !1) : null != a.responseAfter && "number" != typeof a.responseAfter ? (D().warn("ANALYTICS", 'resourceTimingSpec["responseAfter"] must be a number'), !1) : !0 : (D().warn("ANALYTICS", "resourceTimingSpec is missing or has incomplete encoding options"), !1) : (D().warn("ANALYTICS", 'resourceTimingSpec missing "resources" field'), !1)
        }

        function Pd(a, b) {
            var c = a.name;
            for (a = 0; a < b.length; ++a) {
                var d = b[a],
                    e = d.resources;
                if (d.hostPattern.test(c.host) && (d = Yb(e, function(f) {
                        return f.pathPattern.test(c.pathname) && f.queryPattern.test(c.search)
                    }), -1 != d)) return e[d].name
            }
            return null
        }

        function Qd(a) {
            var b = {},
                c;
            for (c in a) {
                var d = a[c].host || "",
                    e = {
                        name: c,
                        pathPattern: new RegExp(a[c].path || ""),
                        queryPattern: new RegExp(a[c].query || "")
                    };
                b[d] ? b[d].resources.push(e) : b[d] = {
                    hostPattern: new RegExp(d),
                    resources: [e]
                }
            }
            var f = [],
                g;
            for (g in b) f.push(b[g]);
            return f
        }

        function Rd(a, b) {
            var c = Qd(b),
                d = [];
            a.forEach(function(e) {
                var f = Pd(e, c);
                f && d.push({
                    entry: e,
                    name: f
                })
            });
            return d
        }

        function Sd(a, b, c) {
            function d(h, k) {
                k = void 0 === k ? 0 : k;
                return Math.round(h - k).toString(f.base || 10)
            }
            var e = b.resources,
                f = b.encoding,
                g = T(c);
            a = Rd(a, e).map(function(h) {
                var k = h.entry;
                k = {
                    key: h.name,
                    startTime: d(k.startTime),
                    redirectTime: d(k.redirectEnd, k.redirectStart),
                    domainLookupTime: d(k.domainLookupEnd, k.domainLookupStart),
                    tcpConnectTime: d(k.connectEnd, k.connectStart),
                    serverResponseTime: d(k.responseStart, k.requestStart),
                    networkTransferTime: d(k.responseEnd, k.responseStart),
                    transferSize: d(k.transferSize || 0),
                    encodedBodySize: d(k.encodedBodySize || 0),
                    decodedBodySize: d(k.decodedBodySize || 0),
                    duration: d(k.duration),
                    initiatorType: k.initiatorType
                };
                return new R(k, 1)
            }).map(function(h) {
                return g.expandTemplate(f.entry, h, c)
            });
            return Promise.all(a).then(function(h) {
                return h.join(f.delim)
            })
        }

        function Td(a, b) {
            var c = a.getAmpDoc().win;
            if (b.done || !c.performance || !c.performance.now || !c.performance.getEntriesByType || !Od(b)) return b.done = !0, Promise.resolve("");
            var d = c.performance.getEntriesByType("resource");
            150 <= d.length && (b.done = !0);
            var e = b.responseAfter || 0;
            b.responseAfter = Math.max(e, c.performance.now());
            d = d.filter(function(f) {
                return f.startTime + f.duration >= e
            });
            return d.length ? Nd(function() {
                return Sd(d, b, a)
            }) : Promise.resolve("")
        }

        function Ud(a, b, c) {
            return b && Date.now() < c + 6E4 ? Td(a, b) : Promise.resolve("")
        };

        function Vd(a, b, c, d, e) {
            this.j = a;
            this.m = a.getAmpDoc();
            this.win = this.m.win;
            this.yc = b.origin;
            this.baseUrl = b.baseUrl;
            this.B = b.batchInterval;
            this.xc = Number(b.reportWindow) || null;
            this.vb = null;
            this.F = T(a);
            this.Ka = O(a);
            this.ua = Ba(a, "url");
            this.Lb = this.Pa = this.Oa = null;
            this.wb = [];
            this.md = c;
            this.Z = d;
            this.va = e ? Md : void 0;
            this.ib = this.ba = null;
            this.wc = !0;
            this.Gb = null;
            this.Fa = 0;
            this.Y = Date.now();
            this.Ua = null;
            Wd(this);
            if (this.B) {
                this.B = A(this.B) ? this.B : [this.B];
                for (a = 0; a < this.B.length; a++) b = this.B[a], F(qa(b), "Invalid batchInterval value: %s",
                    this.B), b = 1E3 * Number(b), F(200 <= b, "Invalid batchInterval value: %s, interval value must be greater than %s ms.", this.B, 200), this.B[a] = b;
                this.vb = 0;
                Xd(this)
            }
        }
        Vd.prototype.send = function(a, b, c) {
            var d = this,
                e = !0 === b.important;
            if (this.wc || e) {
                c.getVar("_avError_") && (this.Ua = c.getVar("_avError_"), delete c.vars._avError_);
                this.Fa++;
                this.Gb = b;
                var f = this.F.getMacros(this.j);
                f.RESOURCE_TIMING = Ud(this.j, b.resourceTimingSpec, this.Y);
                this.Oa || (c.freezeVar("extraUrlParams"), this.Pa = this.F.expandTemplate(this.baseUrl, c, this.j, f, this.va), this.Oa = this.Pa.then(function(n) {
                    return d.Ka.expandUrlAsync(n, f, d.va)
                }));
                if (!this.Lb && this.yc) {
                    var g = new R(c.vars, c.iterations, !0);
                    this.Lb =
                        this.F.expandTemplate(this.yc, g, this.j, f, this.va).then(function(n) {
                            return d.Ka.expandUrlAsync(n, f, d.va, !0)
                        })
                }
                var h = Object.assign({}, a, b.extraUrlParams),
                    k = this.win.Date.now(),
                    m = Yd(this.F, this.Ka, h, c, f, this.j, this.va).then(function(n) {
                        return M({
                            trigger: b.on,
                            timestamp: k,
                            extraUrlParams: n
                        })
                    });
                this.wb.push(m);
                0 == this.Fa || !e && this.B || Zd(this)
            }
        };
        Vd.prototype.dispose = function() {
            this.jb();
            this.ba && (this.win.clearTimeout(this.ba), this.ba = null);
            this.ib && (this.win.clearTimeout(this.ib), this.ib = null)
        };

        function Zd(a) {
            var b = a.Lb,
                c = a.Pa,
                d = a.Oa,
                e = a.wb,
                f = a.Gb;
            a.jb();
            (b ? b : c).then(function(g) {
                a.md.url(a.m, g, !0)
            });
            Promise.all([d, Promise.all(e), b]).then(function(g) {
                var h = g[0];
                var k = g[2];
                h = k ? a.ua.parse(k).origin + h : h;
                g = g[1];
                if (0 !== g.length) {
                    if (a.Ua) {
                        try {
                            a: {
                                var m = a.Ua;
                                if (B(m)) {
                                    var n = Q(h);
                                    if ("pagead2.googlesyndication.com" == n.hostname) {
                                        var r = x(n.search);
                                        if ("ampim" == r.id) {
                                            var q = r.d && r.d.split(","),
                                                u = r.bs && r.bs.split(",");
                                            if (A(q)) {
                                                var v = Number(q[0]),
                                                    z = Number(q[1]);
                                                if (0 == v || 0 == z) {
                                                    if (.1 < Math.random()) break a;
                                                    E().expectedError("active-view-debug",
                                                        "Debugging: Activeview request with zero element size", v, z, h, JSON.stringify(m))
                                                }
                                            }
                                            if (A(u)) {
                                                var G = Number(u[0]),
                                                    K = Number(u[1]);
                                                0 != G && 0 != K || .1 < Math.random() || E().expectedError("active-view-debug", "Debugging: Activeview request with zero viewport size", G, K, h, JSON.stringify(m))
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        catch (ka) {
                            E().error("active-view-debug", ka)
                        }
                        a.Ua = null
                    }
                    f.iframePing ? (F("visible" == f.on, "iframePing is only available on page view requests."), a.Z.sendRequestUsingIframe(h, g[0])) : a.Z.sendRequest(h, g, !!a.B)
                }
            })
        }
        Vd.prototype.jb = function() {
            this.Fa = 0;
            this.Pa = this.Oa = null;
            this.wb = [];
            this.Gb = null
        };

        function Wd(a) {
            a.xc && (a.ib = a.win.setTimeout(function() {
                0 != a.Fa && Zd(a);
                a.wc = !1;
                a.ba && (a.win.clearTimeout(a.ba), a.ba = null)
            }, 1E3 * a.xc))
        }

        function Xd(a) {
            var b = a.vb < a.B.length ? a.B[a.vb++] : a.B[a.B.length - 1];
            a.ba = a.win.setTimeout(function() {
                0 != a.Fa && Zd(a);
                Xd(a)
            }, b)
        }

        function $d(a, b, c, d, e, f) {
            var g = T(a),
                h = O(f),
                k = g.getMacros(f);
            e.freezeVar("extraUrlParams");
            var m = g.expandTemplate(b, e, f).then(function(n) {
                return h.expandStringAsync(n, k)
            });
            return 0 > b.indexOf("${extraUrlParams}") ? m : m.then(function(n) {
                var r = Object.assign({}, c, d.extraUrlParams);
                return Yd(g, h, r, e, k, f).then(function(q) {
                    return Kd(n, [M({
                        extraUrlParams: q
                    })])
                })
            })
        }

        function Yd(a, b, c, d, e, f, g) {
            function h(q, u, v) {
                q = q[u];
                if ("string" === typeof q) v[u] = void 0, q = a.expandTemplate(q, n, f).then(function(K) {
                    return b.expandStringAsync(K, e, g)
                }).then(function(K) {
                    v[u] = K
                }), m.push(q);
                else if (A(q)) {
                    v[u] = [];
                    for (var z = 0; z < q.length; z++) h(q, z, v[u])
                } else if (B(q) && null !== q) {
                    v[u] = {};
                    var G = Object.keys(q);
                    for (z = 0; z < G.length; z++) h(q, G[z], v[u])
                } else v[u] = q
            }
            var k = {},
                m = [],
                n = new R(d.vars, d.iterations, !0),
                r = Object.keys(c);
            for (d = 0; d < r.length; d++) h(c, r[d], k);
            return Promise.all(m).then(function() {
                return k
            })
        };

        function ae(a, b, c, d, e) {
            var f = this;
            c = void 0 === c ? null : c;
            d = void 0 === d ? null : d;
            e = void 0 === e ? null : e;
            var g = c,
                h = d,
                k = e;
            this.Lc = b;
            this.Zb = g;
            this.Yb = h;
            this.Ec = k;
            this.Ta = M({});
            this.N = M({
                visiblePercentageMin: Number(a.visiblePercentageMin) / 100 || 0,
                visiblePercentageMax: Number(a.visiblePercentageMax) / 100 || 1,
                totalTimeMin: Number(a.totalTimeMin) || 0,
                totalTimeMax: Number(a.totalTimeMax) || Infinity,
                continuousTimeMin: Number(a.continuousTimeMin) || 0,
                continuousTimeMax: Number(a.continuousTimeMax) || Infinity
            });
            "0" === String(a.visiblePercentageMax).trim() &&
                (this.N.visiblePercentageMax = 0);
            this.bd = void 0 !== a.reportWhen;
            this.vc = !0 === a.repeat;
            this.fa = new Rc;
            a = new w;
            this.Va = a.promise;
            this.ma = a.resolve;
            this.Va.then(function() {
                f.fa.fire()
            });
            this.ia = [];
            this.Rc = Date.now();
            this.Kb = this.tc = !0;
            this.K = this.Sa = null;
            this.zb = this.oa = !1;
            this.lc = this.za = this.Ca = this.Da = this.Hb = this.hb = this.Ya = this.Fb = this.Xa = this.R = this.X = this.V = 0;
            this.Rb = this.kc = !1;
            this.lb = null
        }
        l = ae.prototype;
        l.jb = function() {
            var a = this,
                b = new w;
            this.Va = b.promise;
            this.ma = b.resolve;
            this.Va.then(function() {
                a.fa.fire()
            });
            this.lb = null;
            this.oa = this.zb = !1;
            this.za = this.Ca = this.Da = this.hb = this.Fb = this.Xa = this.Ya = this.R = this.X = this.V = 0;
            this.Rb = !1
        };
        l.maybeDispose = function() {
            this.vc || this.dispose()
        };
        l.dispose = function() {
            this.K && (clearTimeout(this.K), this.K = null);
            this.lb && (clearTimeout(this.lb), this.lb = null);
            this.ia.forEach(function(a) {
                a()
            });
            this.ia.length = 0;
            this.ma = null;
            this.fa && (this.fa.removeAll(), this.fa = null)
        };
        l.unsubscribe = function(a) {
            this.ia.push(a)
        };
        l.onTriggerEvent = function(a) {
            this.fa && this.fa.add(a);
            this.Va && !this.ma && a()
        };
        l.setReady = function(a) {
            this.tc = a;
            this.update()
        };
        l.setReportReady = function(a) {
            this.Kb = !1;
            this.Sa = a
        };
        l.update = function() {
            be(this, this.tc ? this.Lc() : 0)
        };
        l.getState = function(a) {
            return M({
                firstSeenTime: ce(this.Xa, a),
                lastSeenTime: ce(this.Fb, a),
                lastVisibleTime: ce(this.hb, a),
                firstVisibleTime: ce(this.Ya, a),
                maxContinuousVisibleTime: this.X,
                totalVisibleTime: this.R,
                loadTimeVisibility: 100 * this.Hb || 0,
                minVisiblePercentage: 100 * this.Da,
                maxVisiblePercentage: 100 * this.Ca
            })
        };
        l.getErrorInfoTemp = function() {
            return this.Ta
        };

        function be(a, b) {
            if (a.Rb) de(a, b) || a.jb();
            else if (a.ma)
                if (ee(a, b) || a.bd)
                    if (a.K && (clearTimeout(a.K), a.K = null), a.Kb) a.ma(), a.ma = null, a.vc && (a.Rb = !0, a.V = 0);
                    else {
                        if (a.Sa) {
                            var c = a.Sa();
                            a.Sa = null;
                            c.then(function() {
                                a.Kb = !0;
                                a.update()
                            })
                        }
                    }
            else if (a.oa && !a.K) {
                var d = fe(a);
                0 < d && (a.K = setTimeout(function() {
                    a.K = null;
                    a.update()
                }, d))
            } else !a.oa && a.K && (clearTimeout(a.K), a.K = null)
        }

        function de(a, b) {
            return 1 == a.N.visiblePercentageMin ? 1 == b : 0 == a.N.visiblePercentageMax ? 0 == b : b > a.N.visiblePercentageMin && b <= a.N.visiblePercentageMax
        }

        function ee(a, b) {
            var c = Date.now();
            0 < b && (a.Xa = a.Xa || c, a.Fb = c, !a.Hb && 300 > c - a.Rc && (a.Hb = b));
            var d = a.oa,
                e = a.za ? c - a.za : 0;
            a.oa = de(a, b);
            if (a.oa) {
                a.zb = !0;
                d ? (a.R += e, a.V += e, a.X = Math.max(a.X, a.V)) : a.Ya = a.Ya || c;
                a.za = c;
                a.Da = 0 < a.Da ? Math.min(a.Da, b) : b;
                if (b > a.Ca) try {
                    a.Zb && (a.Ta.layoutBoxAtMaxRatio = a.Zb()), a.Yb && (a.Ta.boundingClientRectAtMaxRatio = a.Yb()), a.Ec && (a.Ta.viewportSizeAtMaxRatio = a.Ec.getSize())
                } catch (f) {
                    E().error("active-view-debug", f)
                }
                a.Ca = Math.max(a.Ca, b);
                a.hb = c
            } else d && (a.X = Math.max(a.X, a.V + e), a.za = 0,
                a.R += e, a.V = 0, a.hb = c);
            return a.zb && a.R >= a.N.totalTimeMin && a.R <= a.N.totalTimeMax && a.X >= a.N.continuousTimeMin && a.X <= a.N.continuousTimeMax
        }
        l.maybeSetInitialScrollDepth = function(a) {
            this.kc || (this.lc = a, this.kc = !0)
        };
        l.getInitialScrollDepth = function() {
            return this.lc
        };

        function fe(a) {
            var b = Math.max(a.N.continuousTimeMin - a.V, 0),
                c = Math.max(a.N.totalTimeMin - a.R, 0);
            return Math.min(Math.max(b, c), b || Infinity, c || Infinity)
        }

        function ce(a, b) {
            return a >= b ? a - b : 0
        };

        function ge(a) {
            var b = a.parentElement,
                c = [];
            if (b) {
                var d = b;
                c.push(d);
                for (var e = 0; 50 > e; e++)
                    if ((b = d.parentNode || d.parentElement) && 1 == b.nodeType) d = b, c.push(d);
                    else if (b && 9 == b.nodeType)
                    if ((b = d.ownerDocument.defaultView.frameElement) && 1 == b.nodeType) d = b, c.push(d);
                    else break;
                else break
            }
            c.push(a);
            var f = 1;
            for (a = 0; a < c.length; a++) {
                if (b = c[a])
                    if (b = window.getComputedStyle(b) || Object.create(null), d = b.opacity, "hidden" === b.visibility) var g = 0;
                    else b = "" === d ? 1 : parseFloat(d), g = isNaN(b) ? 1 : b;
                else g = 1;
                g < f && (f = g);
                if (0 === f) break
            }
            return f
        };
        var he = [0, .05, .1, .15, .2, .25, .3, .35, .4, .45, .5, .55, .6, .65, .7, .75, .8, .85, .9, .95, 1],
            ie = 1;

        function je(a) {
            var b = a.__AMP_VIS_ID;
            b || (b = ++ie, a.__AMP_VIS_ID = b);
            return b
        }

        function ke(a) {
            if (!a.__AMP_VIS) {
                var b = J(a);
                var c = Fa(a),
                    d = c && c.__AMP_EMBED__,
                    e;
                if (e = c)
                    if (Node.prototype.getRootNode) e = c.getRootNode() || c;
                    else {
                        for (; c.parentNode && (!c || "I-AMPHTML-SHADOW-ROOT" != c.tagName && (11 != c.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(c))); c = c.parentNode);
                        e = c
                    }
                c = e;
                b = d && c ? new le(ke(c), d) : new me(b);
                a.__AMP_VIS = b
            }
            return a.__AMP_VIS
        }

        function ne(a, b) {
            var c = this;
            this.parent = a;
            this.ampdoc = b;
            this.zc = I(b, "resources");
            this.Mb = 0;
            this.ea = [];
            this.H = null;
            this.ia = [];
            this.Ib = 0;
            this.parent && oe(this.parent, this);
            var d = P(this.ampdoc);
            d.onChanged(function() {
                c.maybeUpdateMaxScrollDepth(d.getScrollTop())
            })
        }

        function oe(a, b) {
            a.H || (a.H = []);
            a.H.push(b)
        }

        function pe(a, b) {
            a.H && (b = a.H.indexOf(b), -1 != b && a.H.splice(b, 1))
        }
        l = ne.prototype;
        l.dispose = function() {
            this.setRootVisibility(0);
            for (var a = this.ea.length - 1; 0 <= a; a--) this.ea[a].dispose();
            this.ia.forEach(function(b) {
                b()
            });
            this.ia.length = 0;
            this.parent && pe(this.parent, this);
            if (this.H)
                for (a = 0; a < this.H.length; a++) this.H[a].dispose()
        };
        l.unsubscribe = function(a) {
            this.ia.push(a)
        };
        l.getStartTime = function() {};
        l.isBackgrounded = function() {};
        l.isBackgroundedAtStart = function() {};
        l.getRootMinOpacity = function() {};
        l.getRootLayoutBox = function() {};
        l.getRootElementTemp = function() {};
        l.getBoundingClientRectTemp = function() {};
        l.getElementLayoutBoxTemp = function(a) {
            var b = this.zc.getResourceForElementOptional(a);
            return b ? b.getLayoutBox() : P(this.ampdoc).getLayoutRect(a)
        };
        l.getRootVisibility = function() {
            return this.parent ? 0 < this.parent.getRootVisibility() ? this.Mb : 0 : this.Mb
        };
        l.setRootVisibility = function(a) {
            this.Mb = a;
            re(this);
            if (this.H)
                for (a = 0; a < this.H.length; a++) re(this.H[a])
        };
        l.maybeUpdateMaxScrollDepth = function(a) {
            a > this.Ib && (this.Ib = a)
        };
        l.getMaxScrollDepth = function() {
            return this.Ib
        };

        function re(a) {
            for (var b = 0; b < a.ea.length; b++) a.ea[b].update()
        }
        l.listenRoot = function(a, b, c, d) {
            var e = this.getRootVisibility.bind(this),
                f = this.getRootLayoutBox.bind(this),
                g;
            this.getRootElementTemp() && (g = this.getBoundingClientRectTemp.bind(this, this.getRootElementTemp()));
            return se(this, e, f, g || null, a, b, c, d)
        };
        l.listenElement = function(a, b, c, d, e) {
            var f = this.getElementVisibility.bind(this, a),
                g = this.getElementLayoutBoxTemp.bind(this, a),
                h = this.getBoundingClientRectTemp.bind(this, a);
            return se(this, f, g, h, b, c, d, e, a)
        };

        function se(a, b, c, d, e, f, g, h, k) {
            if (e.visiblePercentageThresholds && void 0 == e.visiblePercentageMin && void 0 == e.visiblePercentageMax) {
                var m = [],
                    n = e.visiblePercentageThresholds;
                if (!n || !A(n)) return D().error("amp-analytics/visibility-manager", "invalid visiblePercentageThresholds"),
                    function() {};
                for (var r = 0; r < n.length; r++) {
                    var q = n[r];
                    if (A(q) && 2 == q.length)
                        if (qa(q[0]) && qa(q[1])) {
                            var u = Number(q[0]),
                                v = Number(q[1]);
                            if (0 > u || 100 < v || u > v || u == v && 100 != u && 0 != v) D().error("amp-analytics/visibility-manager", "visiblePercentageThresholds entry invalid min/max value");
                            else {
                                var z = e;
                                z.visiblePercentageMin = u;
                                z.visiblePercentageMax = v;
                                var G = new ae(z, b, c, d, P(a.ampdoc));
                                m.push(te(a, G, f, g, h, k))
                            }
                        } else D().error("amp-analytics/visibility-manager", "visiblePercentageThresholds entry is not valid number");
                    else D().error("amp-analytics/visibility-manager", "visiblePercentageThresholds entry length is not 2")
                }
                return function() {
                    m.forEach(function(ka) {
                        return ka()
                    })
                }
            }
            var K = new ae(e, b, c, d, P(a.ampdoc));
            return te(a, K, f, g, h, k)
        }

        function te(a, b, c, d, e, f) {
            d && b.setReportReady(d);
            var g = P(a.ampdoc),
                h = g.getScrollTop();
            a.maybeUpdateMaxScrollDepth(h);
            c ? (b.setReady(!1), c.then(function() {
                b.setReady(!0);
                b.maybeSetInitialScrollDepth(h)
            })) : b.maybeSetInitialScrollDepth(h);
            b.onTriggerEvent(function() {
                var k = a.getStartTime(),
                    m = b.getState(k);
                m._avError_ = b.getErrorInfoTemp();
                m.backgrounded = a.isBackgrounded() ? 1 : 0;
                m.backgroundedAtStart = a.isBackgroundedAtStart() ? 1 : 0;
                m.totalTime = Date.now() - k;
                if (f) {
                    m.elementId = f.id;
                    m.opacity = ge(f);
                    k = (k = a.zc.getResourceForElementOptional(f)) ?
                        k.getLayoutBox() : g.getLayoutRect(f);
                    var n = a.getElementVisibility(f),
                        r = a.getElementIntersectionRect(f);
                    Object.assign(m, M({
                        intersectionRatio: n,
                        intersectionRect: JSON.stringify(r)
                    }))
                } else m.opacity = a.getRootMinOpacity(), m.intersectionRatio = a.getRootVisibility(), k = a.getRootLayoutBox();
                b.maybeDispose();
                k && (Object.assign(m, M({
                    elementX: k.left,
                    elementY: k.top,
                    elementWidth: k.width,
                    elementHeight: k.height
                })), m.initialScrollDepth = Id(k, g, b.getInitialScrollDepth()), m.maxScrollDepth = Id(k, g, a.getMaxScrollDepth()));
                e(m)
            });
            a.ea.push(b);
            b.unsubscribe(function() {
                var k = a.ea.indexOf(b); - 1 != k && a.ea.splice(k, 1)
            });
            f && b.unsubscribe(a.observe(f, function() {
                return b.update()
            }));
            b.update();
            return function() {
                b.dispose()
            }
        }
        l.observe = function() {};
        l.getElementVisibility = function() {};
        l.getElementIntersectionRect = function() {};

        function me(a) {
            ne.call(this, null, a);
            var b = this;
            this.T = P(a);
            this.Ub = !a.isVisible();
            this.ub = this.isBackgrounded();
            this.S = Object.create(null);
            this.da = this.Ac = null;
            if ("inabox" == y(this.ampdoc.win).runtime) {
                a = this.ampdoc.getRootNode();
                var c = a.documentElement || a.body || a;
                this.Ac = c;
                this.unsubscribe(this.observe(c, this.setRootVisibility.bind(this)));
                var d = function() {
                    var e = je(c),
                        f = b.S[e];
                    f && (f.isVisible = 1 > b.ampdoc.win.innerHeight || 1 > b.ampdoc.win.innerWidth ? !1 : !0, b.setRootVisibility(f.isVisible ? f.intersectionRatio :
                        0))
                };
                this.ampdoc.win.addEventListener("resize", d);
                this.unsubscribe(function() {
                    b.ampdoc.win.removeEventListener("resize", d)
                })
            } else this.setRootVisibility(this.ampdoc.isVisible() ? 1 : 0), this.unsubscribe(this.ampdoc.onVisibilityChanged(function() {
                var e = b.ampdoc.isVisible();
                e || (b.Ub = !0);
                b.setRootVisibility(e ? 1 : 0)
            }))
        }
        p(me, ne);
        l = me.prototype;
        l.dispose = function() {
            ne.prototype.dispose.call(this);
            this.da && (this.da.disconnect(), this.da = null)
        };
        l.getStartTime = function() {
            return this.ampdoc.getFirstVisibleTime()
        };
        l.isBackgrounded = function() {
            return this.Ub
        };
        l.isBackgroundedAtStart = function() {
            return this.ub
        };
        l.getRootMinOpacity = function() {
            var a = this.ampdoc.getRootNode();
            return ge(a.documentElement || a.body || a)
        };
        l.getRootElementTemp = function() {
            return this.Ac
        };
        l.getRootLayoutBox = function() {
            var a = this.ampdoc.getRootNode();
            return this.T.getLayoutRect(a.documentElement || a.body || a)
        };
        l.observe = function(a, b) {
            var c = this,
                d = je(a),
                e = this.S[d];
            e ? 0 < e.intersectionRatio && e.isVisible && b(e.intersectionRatio) : (e = {
                element: a,
                intersectionRatio: 0,
                intersectionRect: null,
                isVisible: !1,
                boundingClientRect: null,
                listeners: []
            }, this.S[d] = e);
            e.listeners.push(b);
            this.da || (this.da = new this.ampdoc.win.IntersectionObserver(this.jd.bind(this), {
                threshold: he
            }));
            this.da.observe(a);
            return function() {
                var f = c.S[d];
                if (f) {
                    var g = f.listeners.indexOf(b); - 1 != g && f.listeners.splice(g, 1);
                    0 == f.listeners.length && (c.da.unobserve(a),
                        delete c.S[d])
                }
            }
        };
        l.getElementVisibility = function(a) {
            if (0 == this.getRootVisibility()) return 0;
            a = je(a);
            return (a = this.S[a]) && a.isVisible && a.intersectionRatio || 0
        };
        l.getBoundingClientRectTemp = function(a) {
            if (!a) return null;
            a = je(a);
            return (a = this.S[a]) && a.boundingClientRect
        };
        l.getElementIntersectionRect = function(a) {
            if (0 >= this.getElementVisibility(a)) return null;
            a = je(a);
            return (a = this.S[a]) ? a.intersectionRect : null
        };
        l.jd = function(a) {
            var b = this;
            a.forEach(function(c) {
                var d = c.intersectionRect;
                d = Hd(Number(d.left), Number(d.top), Number(d.width), Number(d.height));
                var e = c.boundingClientRect;
                e = e && Hd(Number(e.left), Number(e.top), Number(e.width), Number(e.height));
                var f = c.intersectionRatio,
                    g = d,
                    h = e;
                f = Math.min(Math.max(f, 0), 1);
                c = je(c.target);
                c = b.S[c];
                var k = !0;
                if (1 > h.width || 1 > h.height) k = !1;
                if (c)
                    for (c.isVisible = k, c.intersectionRatio = f, c.intersectionRect = g, c.boundingClientRect = h, g = 0; g < c.listeners.length; g++) c.listeners[g](c.isVisible ?
                        f : 0)
            })
        };

        function le(a, b) {
            ne.call(this, a, a.ampdoc);
            this.embed = b;
            this.ub = this.parent.isBackgrounded();
            this.unsubscribe(this.parent.observe(b.host, this.setRootVisibility.bind(this)))
        }
        p(le, ne);
        l = le.prototype;
        l.getStartTime = function() {
            return this.embed.getStartTime()
        };
        l.isBackgrounded = function() {
            return this.parent.isBackgrounded()
        };
        l.isBackgroundedAtStart = function() {
            return this.ub
        };
        l.getRootMinOpacity = function() {
            return ge(this.embed.iframe)
        };
        l.getRootElementTemp = function() {
            return null
        };
        l.getBoundingClientRectTemp = function() {
            return null
        };
        l.getRootLayoutBox = function() {
            var a = this.embed.iframe;
            return P(this.ampdoc).getLayoutRect(a)
        };
        l.observe = function(a, b) {
            return this.parent.observe(a, b)
        };
        l.getElementVisibility = function(a) {
            return 0 == this.getRootVisibility() ? 0 : this.parent.getElementVisibility(a)
        };
        l.getElementIntersectionRect = function(a) {
            return 0 == this.getRootVisibility() ? null : this.parent.getElementIntersectionRect(a)
        };
        var ue = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];

        function ve(a, b, c) {
            a = J(a);
            return we(a, b, function(d) {
                return d.isDisplayed() && (d.overlaps(c) || d.isFixed()) ? !0 : !1
            }).then(function(d) {
                var e = [];
                d.forEach(function(f) {
                    ue.includes(f.element.tagName) || e.push(f.loadedOnce())
                });
                return Promise.all(e)
            })
        }

        function we(a, b, c) {
            return a.signals().whenSignal("ready-scan").then(function() {
                var d = [];
                I(a, "resources").get().forEach(function(e) {
                    e.hasBeenMeasured() || e.hostWin != b || e.hasOwner() || d.push(e.getPageLayoutBoxAsync())
                });
                return Promise.all(d)
            }).then(function() {
                return I(a, "resources").get().filter(function(d) {
                    return d.hostWin == b && !d.hasOwner() && d.hasBeenMeasured() && c(d)
                })
            })
        };
        var xe = /^vars(.+)/;

        function ye(a) {
            this.ampdoc = a;
            this.C = Object.create(null);
            this.Ha = this.La = null
        }
        l = ye.prototype;
        l.dispose = function() {
            for (var a in this.C) this.C[a].dispose(), delete this.C[a];
            this.La && this.La.dispose();
            this.Ha && this.Ha.dispose()
        };
        l.getType = function() {};
        l.getRoot = function() {};
        l.getViewer = function() {
            return I(this.ampdoc, "viewer")
        };
        l.getRootElement = function() {
            var a = this.getRoot();
            return a.host || a.documentElement || a.body || a
        };
        l.getHostElement = function() {};
        l.signals = function() {};
        l.contains = function(a) {
            return this.getRoot().contains(a)
        };
        l.getElementById = function() {};
        l.getTrackerForAllowlist = function(a, b) {
            var c = b[a];
            return c ? this.getTracker(a, c) : null
        };
        l.getTracker = function(a, b) {
            var c = this.C[a];
            c || (c = new b(this), this.C[a] = c);
            return c
        };
        l.getTrackerOptional = function(a) {
            return this.C[a] || null
        };
        l.getElement = function(a, b, c) {
            var d = this,
                e = void 0 === c ? null : c;
            return ":root" == b ? la(function() {
                return d.getRootElement()
            }) : ":host" == b ? new Promise(function(f) {
                f(D().assertElement(d.getHostElement(), 'Element "' + b + '" not found'))
            }) : this.ampdoc.whenReady().then(function() {
                var f = null;
                try {
                    if ("scope" == e)
                        if (void 0 !== Ka ? Ka : Ka = La(a)) var g = a.querySelector(b.replace(/^|,/g, "$&:scope "));
                        else {
                            var h = Xa(a, b);
                            g = void 0 === h[0] ? null : h[0]
                        }
                    else g = "closest" == e ? Ta(a, b) : d.getRoot().querySelector(b);
                    var k = g
                } catch (m) {
                    F(!1, "Invalid query selector " +
                        b)
                }
                k && d.contains(k) && (f = k);
                return D().assertElement(f, 'Element "' + b + '" not found')
            })
        };

        function ze(a, b) {
            return a.ampdoc.whenReady().then(function() {
                for (var c = [], d = 0; d < b.length; d++) {
                    var e = void 0,
                        f = [],
                        g = b[d];
                    try {
                        e = a.getRoot().querySelectorAll(g)
                    } catch (k) {
                        F(!1, "Invalid query selector " + g)
                    }
                    for (var h = 0; h < e.length; h++) a.contains(e[h]) && f.push(e[h]);
                    f = Ae(f, g);
                    F(f.length, 'Element "' + g + '" not found');
                    c = c.concat(f)
                }
                return c.filter(function(k, m) {
                    return c.indexOf(k) === m
                })
            })
        }

        function Ae(a, b) {
            for (var c = 0, d = [], e = 0; e < a.length; e++) Object.keys(Ya(a[e], xe)).length ? d.push(a[e]) : c++;
            c && D().warn("amp-analytics/analytics-root", '%s element(s) ommited from selector "%s" because no data-vars-* attribute was found.', c, b);
            return d
        }
        l.getAmpElement = function(a, b, c) {
            return this.getElement(a, b, c).then(function(d) {
                for (var e = [d], f = 0; f < e.length; f++) F(e[f].classList.contains("i-amphtml-element"), 'Element "%s" is required to be an AMP element', b);
                return d
            })
        };
        l.getElements = function(a, b, c) {
            return Gb(this.ampdoc.win)["visibility-trigger-improvements"] && A(b) ? (F(!c, "Cannot have selectionMethod %s defined with an array selector.", c), ze(this, b)) : this.getElement(a, b, c).then(function(d) {
                return [d]
            })
        };
        l.createSelectiveListener = function(a, b, c, d) {
            var e = this,
                f = void 0 === d ? null : d;
            return function(g) {
                if (":host" != c)
                    for (var h = e.getRootElement(), k = "*" == c, m = ":root" == c, n = g.target; n && e.contains(n) && ("scope" != f || m || b.contains(n));) {
                        if ("closest" != f || n.contains(b))
                            if (k || m && n == h || Be(n, c)) {
                                a(n, g);
                                break
                            }
                        n = n.parentElement
                    }
            }
        };
        l.whenIniLoaded = function() {};
        l.getVisibilityManager = function() {
            this.La || (this.La = ke(this.getRoot()));
            return this.La
        };
        l.getScrollManager = function() {
            this.Ha || (this.Ha = new Fd(this));
            return this.Ha
        };

        function Ce(a) {
            ye.call(this, a)
        }
        p(Ce, ye);
        l = Ce.prototype;
        l.getType = function() {
            return "ampdoc"
        };
        l.getRoot = function() {
            return this.ampdoc.getRootNode()
        };
        l.getHostElement = function() {
            return null
        };
        l.signals = function() {
            return this.ampdoc.signals()
        };
        l.getElementById = function(a) {
            return this.ampdoc.getElementById(a)
        };
        l.whenIniLoaded = function() {
            var a = P(this.ampdoc);
            "inabox" == y(this.ampdoc.win).runtime ? a = a.getLayoutRect(this.getRootElement()) : (a = a.getSize(), a = Hd(0, 0, a.width, a.height));
            return ve(this.ampdoc, this.ampdoc.win, a)
        };

        function De(a, b) {
            ye.call(this, a);
            this.embed = b
        }
        p(De, ye);
        l = De.prototype;
        l.getType = function() {
            return "embed"
        };
        l.getRoot = function() {
            return this.embed.win.document
        };
        l.getHostElement = function() {
            return this.embed.iframe
        };
        l.signals = function() {
            return this.embed.signals()
        };
        l.getElementById = function(a) {
            return this.embed.win.document.getElementById(a)
        };
        l.whenIniLoaded = function() {
            return this.embed.whenIniLoaded()
        };

        function Be(a, b) {
            try {
                return Ua(a, b)
            } catch (c) {
                return D().error("amp-analytics/analytics-root", "Bad query selector.", b, c), !1
            }
        };

        function Ee(a) {
            this.ampdoc = a;
            this.G = Fe(this, a.getRootNode())
        }
        Ee.prototype.dispose = function() {
            this.G.dispose()
        };
        Ee.prototype.getAnalyticsRoot = function(a) {
            return Fe(this, a)
        };
        Ee.prototype.createAnalyticsGroup = function(a) {
            var b = Fe(this, a);
            return new zd(b, a)
        };

        function Ge(a) {
            switch (a) {
                case "story":
                    return $c;
                default:
                    return X
            }
        }
        Ee.prototype.triggerEventForTarget = function(a, b, c, d) {
            c = void 0 === c ? {} : c;
            c = new Y(a, b, c, void 0 === d ? !0 : d);
            a = Fe(this, a);
            b = dd(b);
            a.getTracker(b, Ge(b)).trigger(c)
        };

        function Fe(a, b) {
            var c = J(b),
                d = (b = Fa(b)) && b.__AMP_EMBED__;
            return c == a.ampdoc && !d && a.G ? a.G : He(d || c, function() {
                return d ? new De(c, d) : new Ce(c)
            })
        }

        function He(a, b) {
            var c = a.__AMP_AN_ROOT;
            c || (c = b(), a.__AMP_AN_ROOT = c);
            return c
        };

        function Ie(a, b, c, d) {
            this.m = a;
            this.h = b.linkers;
            this.vd = b.vars || {};
            this.L = c;
            this.j = d;
            this.kb = {};
            this.ua = Ba(this.j, "url");
            this.Uc = Ia(L(a), "form-submit-service");
            this.Za = null;
            this.F = T(this.m);
            this.$a = null
        }
        Ie.prototype.init = function() {
            var a = this;
            if (!B(this.h)) return t();
            this.$a = Tb(this.m.win);
            this.h = Je(this, this.h);
            var b = Object.keys(this.h).map(function(d) {
                var e = a.h[d].ids,
                    f = Object.keys(e),
                    g = f.map(function(h) {
                        var k = new R(a.vd, void 0, !0);
                        return a.Wa(e[h], k)
                    });
                return Promise.all(g).then(function(h) {
                    var k = {};
                    h.forEach(function(m, n) {
                        m && (k[f[n]] = m)
                    });
                    return a.kb[d] = k
                })
            });
            if (b.length) {
                var c = I(this.m, "navigation");
                c.registerAnchorMutator(function(d, e) {
                    d.href && "click" === e.type && (d.href = Ke(a, d.href))
                }, 2);
                c.registerNavigateToMutator(function(d) {
                    return Ke(a,
                        d)
                }, 2)
            }
            Le(this);
            return Promise.all(b)
        };
        Ie.prototype.dispose = function() {
            this.Za && this.Za()
        };

        function Je(a, b) {
            var c = {},
                d = {
                    enabled: Me(a) && Ne(a)
                },
                e = Object.keys(b).filter(function(g) {
                    var h = b[g],
                        k = B(h);
                    k || (d[g] = h);
                    return k
                }),
                f = a.ua.isProxyOrigin(a.m.win.location);
            e.forEach(function(g) {
                var h = Object.assign({}, d, b[g]);
                if (!0 !== h.enabled) D().info("amp-analytics/linker-manager", "linker config for %s is not enabled and will be ignored.", g);
                else if (f || !1 === h.proxyOnly) h.ids ? c[g] = h : D().error("amp-analytics/linker-manager", '"ids" is a required field for use of "linkers".')
            });
            return c
        }
        Ie.prototype.Wa = function(a, b) {
            var c = this,
                d = this.F.getMacros(this.j);
            return this.F.expandTemplate(a, b, this.j).then(function(e) {
                return O(c.j).expandUrlAsync(e, d)
            })
        };

        function Me(a) {
            return "googleanalytics" !== a.L || "googleanalytics" !== a.m.getMetaByName("amp-google-client-id-api") ? !1 : a.m.registerSingleton(2)
        }

        function Ne(a) {
            a = H(a.m.win, "platform");
            return a.isSafari() && 12 <= a.getMajorVersion()
        }

        function Ke(a, b) {
            var c = a.h,
                d;
            for (d in c)
                if (a.kb[d]) {
                    var e = a,
                        f = d;
                    if (Oe(e, b, f, c[d].destinationDomains)) {
                        var g = qc(e.kb[f]);
                        if (g) {
                            e = {};
                            e[f] = g;
                            f = e;
                            e = Q(b);
                            e = x(e.search);
                            g = M({});
                            for (var h = Object.keys(f), k = 0; k < h.length; k++) N(e, h[k]) || (g[h[k]] = f[h[k]]);
                            b = Cb(b, Db(g))
                        }
                    }
                }
            return b
        }

        function Oe(a, b, c, d) {
            var e = a.ua.parse(b).hostname;
            if (d && !Array.isArray(d)) return D().warn("amp-analytics/linker-manager", "%s destinationDomains must be an array.", c), !1;
            if (d) return Pe(d, e);
            if (a.m.win.location.hostname === e) return !1;
            b = I(a.m, "documentInfo").get();
            c = b.sourceUrl;
            var f = a.ua.parse(b.canonicalUrl).hostname,
                g = Qe(f) === Qe(e);
            if (a.$a) return Pe([a.$a, "*" + a.$a], e) || g;
            a = a.ua.parse(c).hostname;
            return Qe(a) === Qe(e) || g
        }

        function Pe(a, b) {
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e;
                !(e = d === b) && (e = -1 !== d.indexOf("*")) && (e = b, d = d.replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*"), e = (new RegExp("^" + d + "$")).test(e));
                if (e) return !0
            }
            return !1
        }

        function Le(a) {
            a.Za || a.Uc.then(function(b) {
                a.Za = b.beforeSubmit(a.Yc.bind(a))
            })
        }
        Ie.prototype.Yc = function(a) {
            var b = a.form,
                c = a.actionXhrMutator,
                d;
            for (d in this.h) {
                a = this.h[d].destinationDomains;
                var e = b.getAttribute("action-xhr") || b.getAttribute("action");
                if (Oe(this, e, d, a) && (a = d, e = this.kb[a])) {
                    var f = qc(e);
                    (e = b.getAttribute("action-xhr")) ? (a = encodeURIComponent(a) + "=" + encodeURIComponent(f), a = Cb(e, a, void 0), c(a)) : (a = M({
                        type: "hidden",
                        name: a,
                        value: f
                    }), a = Ra(b.ownerDocument, "input", a), b.appendChild(a))
                }
            }
        };

        function Qe(a) {
            return a.replace(/^(?:www\.|m\.|amp\.)+/, "")
        };

        function Re(a) {
            var b = this;
            this.Vc = a;
            this.oc = !1;
            this.Ea = [];
            this.ld = new ic(this.Vc, function() {
                b.setIsReady()
            })
        }
        Re.prototype.isReady = function() {
            return this.oc
        };
        Re.prototype.setIsReady = function() {
            this.oc = !0;
            Se(this)
        };
        Re.prototype.queueSize = function() {
            return this.Ea.length
        };
        Re.prototype.enqueue = function(a) {
            this.Ea.push(a);
            100 <= this.queueSize() && (E().warn("amp-analytics/iframe-transport-message-queue", "Exceeded maximum size of queue for: " + a.creativeId), this.Ea.shift());
            Se(this)
        };

        function Se(a) {
            a.isReady() && a.queueSize() && (a.ld.send("iframe-transport-events", {
                events: a.Ea
            }), a.Ea = [])
        };

        function Te(a) {
            return !!a.PerformanceObserver && !!a.TaskAttributionTiming && "containerName" in a.TaskAttributionTiming.prototype
        };

        function Ue(a, b, c, d) {
            this.wa = a;
            this.L = b;
            this.cc = d;
            this.ec = c.iframe;
            this.hd = 0;
            this.processCrossDomainIframe()
        }
        l = Ue.prototype;
        l.detach = function() {
            var a = this.wa.document,
                b = this.L,
                c = Ve[b];
            --c.usageCount || (a.body.removeChild(c.frame), delete Ve[b], We[b] && (We[b].disconnect(), We[b] = null))
        };
        l.processCrossDomainIframe = function() {
            if (N(Ve, this.L)) {
                var a = Ve[this.L];
                ++a.usageCount
            } else a = this.createCrossDomainIframe(), this.wa.document.body.appendChild(a.frame), Xe(this)
        };
        l.createCrossDomainIframe = function() {
            var a = String(++Ye),
                b = JSON.stringify({
                    scriptSrc: va.thirdParty + "/2011252111003/iframe-transport-client-v0.js",
                    sentinel: a,
                    type: this.L
                }),
                c = Ra(this.wa.document, "iframe", {
                    sandbox: "allow-scripts allow-same-origin",
                    name: b,
                    "data-amp-3p-sentinel": a
                });
            c.sentinel = a;
            ac(c);
            c.src = this.ec;
            a = {
                frame: c,
                usageCount: 1,
                queue: new Re(c)
            };
            return Ve[this.L] = a
        };

        function Xe(a) {
            Te(a.wa) && (We[a.L] = new a.wa.PerformanceObserver(function(b) {
                b && b.getEntries().forEach(function(c) {
                    c && "longtask" == c.entryType && "cross-origin-descendant" == c.name && c.attribution && c.attribution.forEach(function(d) {
                        a.ec == d.containerSrc && 0 == ++a.hd % 5 && D().error("amp-analytics/iframe-transport", 'Long Task: Vendor: "' + a.L + '"')
                    })
                })
            }), We[a.L].observe({
                entryTypes: ["longtask"]
            }))
        }
        l.sendRequest = function(a) {
            Ve[this.L].queue.enqueue({
                creativeId: this.cc,
                message: a
            })
        };
        l.getCreativeId = function() {
            return this.cc
        };
        l.getType = function() {
            return this.L
        };
        var Ve = {},
            Ye = 0,
            We = {};

        function Ze(a, b, c) {
            c && "no-referrer" !== c && D().error("pixel", "Unsupported referrerPolicy: %s", c);
            return "no-referrer" === c ? $e(a, b) : af(a, b)
        }

        function $e(a, b) {
            if ("referrerPolicy" in Image.prototype) return af(a, b, !0);
            var c = Ra(a.document, "iframe", M({
                src: "about:blank",
                style: "display:none"
            }));
            c.onload = function() {
                af(c.contentWindow, b)
            };
            a.document.body.appendChild(c);
            return c
        }

        function af(a, b, c) {
            var d = c = void 0 === c ? !1 : c;
            a = new a.Image;
            d && (a.referrerPolicy = "no-referrer");
            a.src = b;
            return a
        };

        function bf(a, b) {
            try {
                var c = Fa(a, b).parentElement;
                if ("AMP-AD" == c.nodeName) return String(c.getResourceId())
            } catch (d) {}
            return null
        };

        function cf(a, b) {
            b = void 0 === b ? {} : b;
            this.l = a;
            this.M = b;
            this.uc = this.M.referrerPolicy;
            "no-referrer" === this.uc && (this.M.beacon = !1, this.M.xhrpost = !1);
            this.Cc = !!this.M.useBody;
            this.ca = null;
            this.fb = "inabox" == y(a).runtime
        }
        cf.prototype.sendRequest = function(a, b, c) {
            if (a && 0 !== b.length) {
                var d = Ld["default"],
                    e = df(function(h) {
                        h = c ? d.generateBatchRequest(a, b, h) : d.generateRequest(a, b[0], h);
                        Eb(h.url, "amp-analytics request");
                        var k = h.url,
                            m = Q(k);
                        m = x(m.search);
                        F(!("__amp_source_origin" in m), "Source origin is not allowed in %s", k);
                        return h
                    });
                if (this.M.iframe) this.ca ? this.ca.sendRequest(e(!1).url) : E().error("amp-analytics/transport", "iframe transport was inadvertently deleted");
                else if (!this.M.beacon || !ef(this.l, e(this.Cc)))
                    if (!this.M.xhrpost ||
                        !ff(this.l, e(this.Cc))) {
                        var f = this.M.image;
                        if (f) {
                            var g = "object" == typeof f && f.suppressWarnings;
                            gf(this.l, e(!1), g, this.uc)
                        } else D().warn("amp-analytics/transport", "Failed to send request", a, this.M)
                    }
            } else E().info("amp-analytics/transport", "Empty request not sent: ", a)
        };
        cf.prototype.maybeInitIframeTransport = function(a) {
            if (this.M.iframe && !this.ca) {
                var b = za(a.ownerDocument.defaultView),
                    c = a.getAttribute("type"),
                    d = this.fb ? "1" : D().assertString(bf(a, b), "No friendly amp-ad ancestor element was found for amp-analytics tag with iframe transport.");
                this.ca = new Ue(b, c, this.M, d)
            }
        };
        cf.prototype.deleteIframeTransport = function() {
            this.ca && (this.ca.detach(), this.ca = null)
        };
        cf.prototype.sendRequestUsingIframe = function(a, b) {
            var c = this;
            if (a = Kd(a, [b])) {
                Eb(a, "amp-analytics request");
                F(Q(a).origin != Q(this.l.location.href).origin, "Origin of iframe request must not be equal to the document origin. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.");
                var d = this.l.document.createElement("iframe");
                ac(d);
                d.onload = d.onerror = function() {
                    H(c.l, "timer").delay(function() {
                        d.parentElement && d.parentElement.removeChild(d)
                    }, 5E3)
                };
                d.setAttribute("amp-analytics",
                    "");
                d.setAttribute("sandbox", "allow-scripts allow-same-origin");
                d.src = a;
                this.l.document.body.appendChild(d)
            } else D().error("amp-analytics/transport", "Request not sent. Contents empty.")
        };

        function gf(a, b, c, d) {
            a && (a = Ze(a, b.url, d), ib(a).then(function() {
                E().fine("amp-analytics/transport", "Sent image request", b.url)
            }).catch(function() {
                c || D().warn("amp-analytics/transport", "Response unparseable or failed to send image request", b.url)
            }))
        }

        function ef(a, b) {
            a = a.navigator.sendBeacon ? a.navigator.sendBeacon.bind(a.navigator) : void 0;
            if (!a) return !1;
            (a = a(b.url, b.payload || "")) && E().fine("amp-analytics/transport", "Sent beacon request", b);
            return a
        }

        function ff(a, b) {
            a = a.XMLHttpRequest;
            if (!a) return !1;
            var c = new a;
            if (!("withCredentials" in c)) return !1;
            c.open("POST", b.url, !0);
            c.withCredentials = !0;
            c.setRequestHeader("Content-Type", "text/plain");
            c.onreadystatechange = function() {
                4 == c.readyState && E().fine("amp-analytics/transport", "Sent XHR request", b.url)
            };
            c.send(b.payload || "");
            return !0
        }

        function df(a) {
            var b = {};
            return function(c) {
                var d = String(c);
                void 0 === b[d] && (b[d] = a(c));
                return b[d]
            }
        };
        var hf = ["visible", "hidden", "ini-load", "render-start"];

        function jf(a) {
            a = AMP.BaseElement.call(this, a) || this;
            a.ac = t();
            a.yb = null;
            a.W = !1;
            a.Ga = {};
            a.h = {};
            a.mc = null;
            a.ka = null;
            a.F = null;
            a.Sc = H(a.win, "crypto");
            a.P = null;
            a.Z = null;
            a.fb = "inabox" == y(a.win).runtime;
            a.Aa = null;
            a.Eb = null;
            return a
        }
        p(jf, AMP.BaseElement);
        l = jf.prototype;
        l.getLayoutPriority = function() {
            return this.fb ? 0 : 1
        };
        l.isAlwaysFixed = function() {
            return !jc(this.element)
        };
        l.isLayoutSupported = function() {
            return !0
        };
        l.buildCallback = function() {
            var a = this;
            this.W = this.element.hasAttribute("sandbox");
            this.element.setAttribute("aria-hidden", "true");
            this.yb = this.element.getAttribute("data-consent-notification-id");
            null != this.yb && (this.ac = Za(this.element).then(function(b) {
                return b.get(a.yb)
            }));
            "immediate" == this.element.getAttribute("trigger") && kf(this)
        };
        l.layoutCallback = function() {
            return kf(this)
        };
        l.detachedCallback = function() {
            this.ka && (this.ka.dispose(), this.ka = null);
            this.Aa && (this.Aa.dispose(), this.Aa = null);
            for (var a in this.Ga) this.Ga[a].dispose(), delete this.Ga[a]
        };
        l.resumeCallback = function() {
            var a = this;
            this.P && this.P.then(function() {
                a.Z.maybeInitIframeTransport(a.element)
            })
        };
        l.unlayoutCallback = function() {
            var a = this;
            if (this.getAmpDoc().isVisible()) return !1;
            this.P && this.P.then(function() {
                a.Z.deleteIframeTransport()
            });
            return AMP.BaseElement.prototype.unlayoutCallback.call(this)
        };

        function kf(a) {
            if (a.P) return a.P;
            a.P = a.getAmpDoc().whenFirstVisible().then(function() {
                return H(a.win, "timer").promise(1)
            }).then(function() {
                return a.ac
            }).then(function() {
                return H(a.win, "ampdoc")
            }).then(function(b) {
                return b.getAmpDoc(a.element)
            }).then(function(b) {
                return Promise.all([Ia(L(b), "amp-analytics-instrumentation"), Ia(L(b), "amp-analytics-variables")])
            }).then(function(b) {
                function c() {
                    var e = (new Ic(a.element)).loadConfig();
                    d.resolve(e)
                }
                a.mc = b[0];
                a.F = b[1];
                var d = new w;
                Ad(a.win) ? pd(a.element, c, 20) :
                    c();
                return d.promise
            }).then(function(b) {
                a.h = b;
                return (new Cd(a.win, a.element, a.h)).write()
            }).then(function() {
                a.Z = new cf(a.win, a.h.transport || {})
            }).then(a.od.bind(a)).then(a.cd.bind(a));
            a.P.then(function() {
                a.collapse()
            });
            return a.P
        }

        function lf(a) {
            if (a.fb) return !0;
            null == a.Eb && (a.Eb = jc(a.element));
            return a.Eb
        }
        l.od = function() {
            var a = this;
            if (mf(this)) {
                var b = this.A();
                D().fine(b, "User has opted out. No hits will be sent.");
                return t()
            }
            nf(this);
            if (!this.h.triggers) return b = this.A(), this.user().warn(b, "No triggers were found in the config. No analytics data will be sent."), t(); of (this, this.h.extraUrlParams, this.h.extraUrlParamsReplaceMap);
            this.ka = this.mc.createAnalyticsGroup(this.element);
            this.Z.maybeInitIframeTransport(this.element);
            b = [];
            var c = {},
                d;
            for (d in this.h.triggers) {
                a: if (N(this.h.triggers, d)) {
                    c.o = this.h.triggers[d];
                    c.sb = pf(this, M({}), c.o, void 0, !0);
                    var e = this.A();
                    if (c.o) {
                        var f = c.o.request || c.o.parentPostMessage && lf(this);
                        if (c.o.on && f) {
                            if (this.W) {
                                var g = c.o.on;
                                if (ra(g) && !hf.includes(g)) {
                                    this.user().error(e, g + " is not supported for amp-analytics in scope");
                                    break a
                                }
                            } of (this, c.o.extraUrlParams, this.h.extraUrlParamsReplaceMap);
                            b.push(qf(this, c.o).then(function(k) {
                                return function(m) {
                                    if (m)
                                        if (a.W) {
                                            if (a.element.parentElement) return k.o.selector = a.element.parentElement.tagName, k.o.selectionMethod = "closest", rf(a, k.o)
                                        } else return k.o.selector &&
                                            !A(k.o.selector) ? a.F.expandTemplate(k.o.selector, k.sb, a.element).then(function(n) {
                                                k.o.selector = n;
                                                return rf(a, k.o)
                                            }) : rf(a, k.o)
                                }
                            }(c)))
                        } else {
                            var h = lf(this) ? '/"parentPostMessage"' : "";
                            this.user().error(e, '"on" and "request"' + h + " attributes are required for data to be collected.")
                        }
                    } else this.user().error(e, "Trigger should be an object: ", d)
                }c = {
                    o: c.o,
                    sb: c.sb
                }
            }
            return Promise.all(b)
        };
        l.preload = function(a, b) {
            H(this.win, "preconnect").preload(this.getAmpDoc(), a, b)
        };

        function rf(a, b) {
            if (!a.ka) return t();
            try {
                return a.ka.addTrigger(b, a.Xc.bind(a, b))
            } catch (c) {
                return a = a.A(), xa(a, 'Failed to process trigger "' + b.on + '"', c), t()
            }
        }

        function of (a, b, c) {
            if (b && c) {
                var d = 0,
                    e;
                for (e in c) {
                    if (16 < ++d) {
                        b = a.A();
                        a.user().error(b, "More than 16 extraUrlParamsReplaceMap rules aren't allowed; Skipping the rest");
                        break
                    }
                    for (var f in b) {
                        var g = f.replace(e, c[e]);
                        if (f != g) {
                            var h = b[f];
                            delete b[f];
                            b[g] = h
                        }
                    }
                }
            }
        }

        function mf(a) {
            var b = a.h.optoutElementId;
            if (b && a.win.document.getElementById(b)) return !0;
            if (!a.h.optout) return !1;
            var c = a.h.optout.split(".");
            a = a.win;
            for (var d = 0; d < c.length; d++) {
                if (!a) return !1;
                a = a[c[d]]
            }
            return a()
        }

        function nf(a) {
            if (!a.h.requests) {
                if (!lf(a)) {
                    var b = a.A();
                    a.user().warn(b, "No request strings defined. Analytics data will not be sent from this page.")
                }
            } else if (a.h.requests) {
                for (var c in a.h.requests) N(a.h.requests, c) && !a.h.requests[c].baseUrl && (a.user().error("amp-analytics", "request must have a baseUrl"), delete a.h.requests[c]);
                for (var d in a.h.requests) a.h.requests[d].baseUrl = Pa(a.h.requests[d].baseUrl, function(e) {
                    var f = a.h.requests[e];
                    return f && f.baseUrl || "${" + e + "}"
                });
                c = {};
                for (b in a.h.requests) N(a.h.requests,
                    b) && (c[b] = new Vd(a.element, a.h.requests[b], H(a.win, "preconnect"), a.Z, a.W));
                a.Ga = c
            }
        }
        l.cd = function() {
            function a() {
                b.Aa.init()
            }
            var b = this,
                c = this.element.getAttribute("type");
            this.Aa = new Ie(this.getAmpDoc(), this.h, c, this.element);
            Ad(this.win) ? pd(this.element, a, 10) : a()
        };
        l.Xc = function(a, b) {
            for (var c = A(a.request) ? a.request : [a.request], d = 0; d < c.length; d++) sf(this, c[d], a, b)
        };

        function sf(a, b, c, d) {
            if (!a.element.ownerDocument.defaultView) {
                var e = a.A();
                E().warn(e, "request against destroyed embed: ", c.on)
            }
            var f = a.Ga[b],
                g = lf(a) && c.parentPostMessage;
            if (void 0 != b && !f && (b = a.A(), a.user().error(b, "Ignoring request for event. Request string not found: ", c.request), !g)) return;
            tf(a, c, d).then(function(h) {
                var k = a.element.ownerDocument && a.element.ownerDocument.defaultView;
                h && k && (f && (a.h.vars.requestCount++, h = pf(a, d, c), f.send(a.h.extraUrlParams, c, h)), uf(a, c, d))
            })
        }

        function uf(a, b, c) {
            var d = b.parentPostMessage;
            d && lf(a) && (c = pf(a, c, b), $d(a.getAmpDoc(), d, a.h.extraUrlParams, b, c, a.element).then(function(e) {
                var f = a.win;
                f.parent && f.parent != f && a.win.parent.postMessage(e, "*")
            }))
        }

        function qf(a, b) {
            var c = b.sampleSpec,
                d = a.A();
            if (!c) return Promise.resolve(!0);
            var e = c.sampleOn;
            if (!e) return a.user().error(d, "Invalid sampleOn value."), Promise.resolve(!0);
            var f = parseFloat(c.threshold);
            if (0 <= f && 100 >= f) {
                var g = new w,
                    h = function() {
                        var k = pf(a, M({}), b),
                            m = a.Wa(e, k).then(function(n) {
                                return a.Sc.uniform(n)
                            }).then(function(n) {
                                return 100 * n < f
                            });
                        g.resolve(m)
                    };
                Ad(a.win) ? pd(a.element, h, 10) : h();
                return g.promise
            }
            D().error(d, "Invalid threshold for sampling.");
            return Promise.resolve(!0)
        }

        function tf(a, b, c) {
            c = pf(a, c, b);
            var d = vf(a, a.h.enabled, c),
                e = vf(a, b.enabled, c);
            return Promise.all([d, e]).then(function(f) {
                return f[0] && f[1]
            })
        }

        function vf(a, b, c) {
            return void 0 === b ? Promise.resolve(!0) : "boolean" === typeof b ? Promise.resolve(b) : a.Wa(b, c).then(function(d) {
                return Cc(d)
            })
        }
        l.Wa = function(a, b) {
            var c = this;
            return this.F.expandTemplate(a, b, this.element).then(function(d) {
                return O(c.element).expandUrlAsync(d, c.F.getMacros(c.element))
            })
        };
        l.A = function() {
            return "AmpAnalytics " + (this.element.getAttribute("id") || "<unknown id>")
        };

        function pf(a, b, c, d, e) {
            var f = {};
            U(a.h.vars, f);
            U(c.vars, f);
            U(b.vars, f);
            return new R(f, d, e)
        }(function(a) {
            a.registerServiceForDoc("amp-analytics-instrumentation", Ee);
            a.registerServiceForDoc("activity", nb);
            var b = a.win;
            b = za(b);
            Ha(b, b, "amp-analytics-linker-reader", tc);
            a.registerServiceForDoc("amp-analytics-variables", Bc);
            a.registerElement("amp-analytics", jf)
        })(self.AMP);
    })
});

//# sourceMappingURL=amp-analytics-0.1.js.map