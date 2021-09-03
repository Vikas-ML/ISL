self.AMP_CONFIG = {
    "v": "012011252111003",
    "type": "production",
    "allow-doc-opt-in": ["amp-next-page", "analytics-chunks-inabox"],
    "allow-url-opt-in": ["pump-early-frame"],
    "canary": 0,
    "a4aProfilingRate": 0.01,
    "adsense-ad-size-optimization": 0.1,
    "amp-access-iframe": 1,
    "amp-accordion-display-locking": 1,
    "amp-action-macro": 1,
    "amp-ad-ff-adx-ady": 0.01,
    "amp-auto-ads-adsense-holdout": 0.1,
    "ampdoc-fie": 1,
    "amp-mega-menu": 1,
    "amp-nested-menu": 1,
    "amp-playbuzz": 1,
    "amp-sidebar-swipe-to-dismiss": 1,
    "amp-story-responsive-units": 1,
    "amp-story-v1": 1,
    "chunked-amp": 1,
    "doubleclickSraExp": 0.01,
    "doubleclickSraReportExcludedBlock": 0.1,
    "expand-json-targeting": 1,
    "fix-inconsistent-responsive-height-selection": 0,
    "fixed-elements-in-lightbox": 1,
    "flexAdSlots": 0.05,
    "intersect-resources": 1,
    "ios-fixed-no-transfer": 0,
    "pump-early-frame": 1,
    "swg-gpay-api": 1,
    "swg-gpay-native": 1,
    "amp-ad-no-center-css": 0,
    "adsense-ptt-exp": 0.1,
    "doubleclick-ptt-exp": 0.1,
    "visibility-trigger-improvements": 1
}; /*AMP_CONFIG*/
var global = self;
self.AMP = self.AMP || [];
try {
    (function(_) {
        'use strict';
        var g, aa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        };

        function ca(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return d
            }
            return function() {
                throw Error("Cannot find global object");
            }()
        }
        var da = ca(this);
        "function" === typeof Symbol && Symbol("x");
        var ea;
        if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
        else {
            var fa;
            a: {
                var ja = {
                        a: !0
                    },
                    ka = {};
                try {
                    ka.__proto__ = ja;
                    fa = ka.a;
                    break a
                } catch (a) {}
                fa = !1
            }
            ea = fa ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        var la = ea;

        function n(a, b) {
            a.prototype = aa(b.prototype);
            a.prototype.constructor = a;
            if (la) la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Nh = b.prototype
        }

        function ma() {
            this.Qf = new na
        }
        ma.prototype.abort = function() {
            this.Qf.pf = !0
        };
        da.Object.defineProperties(ma.prototype, {
            signal: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.Qf
                }
            }
        });

        function na() {
            this.pf = !1
        }
        da.Object.defineProperties(na.prototype, {
            aborted: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.pf
                }
            }
        });

        function oa(a, b) {
            var c = b || 0,
                d = this.length;
            for (b = 0 <= c ? c : Math.max(d + c, 0); b < d; b++) {
                var e = this[b];
                if (e === a || a !== a && e !== e) return !0
            }
            return !1
        };
        var pa;

        function v() {
            return pa ? pa : pa = Promise.resolve(void 0)
        };
        var qa = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/,
            ra = "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "),
            ta = {
                childList: !0,
                subtree: !0
            };

        function ua(a, b) {
            if (!qa.test(b) || ra.includes(b)) throw new a('invalid custom element name "' + b + '"');
        }

        function va(a) {
            setTimeout(function() {
                self.__AMP_REPORT_ERROR(a);
                throw a;
            })
        }

        function xa(a, b) {
            this.A = a;
            this.Gc = b;
            this.Ff = Object.create(null)
        }
        xa.prototype.define = function(a, b, c) {
            this.Gc.define(a, b, c);
            var d = this.Ff,
                e = d[a];
            e && (e.resolve(), delete d[a])
        };
        xa.prototype.get = function(a) {
            var b = this.Gc.getByName(a);
            if (b) return b.ctor
        };
        xa.prototype.whenDefined = function(a) {
            var b = this.A,
                c = b.Promise;
            ua(b.SyntaxError, a);
            if (this.Gc.getByName(a)) return v();
            b = this.Ff;
            var d = b[a];
            if (d) return d.promise;
            var e, f = new c(function(h) {
                return e = h
            });
            b[a] = {
                promise: f,
                resolve: e
            };
            return f
        };
        xa.prototype.upgrade = function(a) {
            this.Gc.upgrade(a)
        };

        function ya(a) {
            this.A = a;
            this.vd = Object.create(null);
            this.Oa = "";
            this.ja = this.ud = null;
            this.ie = [a.document]
        }
        g = ya.prototype;
        g.current = function() {
            var a = this.ud;
            this.ud = null;
            return a
        };
        g.getByName = function(a) {
            var b = this.vd[a];
            if (b) return b
        };
        g.getByConstructor = function(a) {
            var b = this.vd,
                c;
            for (c in b) {
                var d = b[c];
                if (d.ctor === a) return d
            }
        };
        g.define = function(a, b, c) {
            var d = this,
                e = this.A,
                f = e.Error;
            e = e.SyntaxError;
            if (c) throw new f("Extending native custom elements is not supported");
            ua(e, a);
            if (this.getByName(a) || this.getByConstructor(b)) throw new f('duplicate definition "' + a + '"');
            this.vd[a] = {
                name: a,
                ctor: b
            };
            za(this, a);
            this.ie.forEach(function(h) {
                d.upgrade(h, a)
            })
        };
        g.upgrade = function(a, b) {
            var c = !!b,
                d = Aa(a, b || this.Oa);
            for (a = 0; a < d.length; a++) {
                var e = d[a];
                c ? Ba(this, e) : this.upgradeSelf(e)
            }
        };
        g.upgradeSelf = function(a) {
            var b = this.getByName(a.localName);
            b && Ca(this, a, b)
        };

        function Aa(a, b) {
            return b && a.querySelectorAll ? a.querySelectorAll(b) : []
        }

        function Ca(a, b, c) {
            c = c.ctor;
            if (!(b instanceof c)) {
                a.ud = b;
                try {
                    if (new c !== b) throw new a.A.Error("Constructor illegally returned a different instance.");
                } catch (d) {
                    va(d)
                }
            }
        }

        function Ba(a, b) {
            var c = a.getByName(b.localName);
            if (c && (Ca(a, b, c), b.connectedCallback)) try {
                b.connectedCallback()
            } catch (d) {
                va(d)
            }
        }

        function za(a, b) {
            if (a.Oa) a.Oa += "," + b;
            else {
                a.Oa = b;
                var c = new a.A.MutationObserver(function(d) {
                    d && Da(a, d)
                });
                a.ja = c;
                a.ie.forEach(function(d) {
                    c.observe(d, ta)
                });
                Ea(a.A, a)
            }
        }
        g.observe = function(a) {
            this.ie.push(a);
            this.ja && this.ja.observe(a, ta)
        };
        g.sync = function() {
            this.ja && Da(this, this.ja.takeRecords())
        };

        function Da(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (d) {
                    var e = d,
                        f = e.addedNodes,
                        h = e.removedNodes;
                    for (e = 0; e < f.length; e++) {
                        var k = f[e],
                            l = Aa(k, a.Oa);
                        Ba(a, k);
                        for (k = 0; k < l.length; k++) Ba(a, l[k])
                    }
                    for (e = 0; e < h.length; e++) {
                        k = h[e];
                        var m = Aa(k, a.Oa);
                        if (k.disconnectedCallback) try {
                            k.disconnectedCallback()
                        } catch (q) {
                            va(q)
                        }
                        for (k = 0; k < m.length; k++) {
                            var p = m[k];
                            if (p.disconnectedCallback) try {
                                p.disconnectedCallback()
                            } catch (q) {
                                va(q)
                            }
                        }
                    }
                }
            }
        }

        function Ea(a, b) {
            var c = a.document,
                d = a.Document.prototype,
                e = a.Element.prototype,
                f = a.Node.prototype,
                h = d.createElement,
                k = d.importNode,
                l = f.appendChild,
                m = f.cloneNode,
                p = f.insertBefore,
                q = f.removeChild,
                t = f.replaceChild;
            d.createElement = function(y) {
                var F = b.getByName(y);
                return F ? new F.ctor : h.apply(this, arguments)
            };
            d.importNode = function() {
                var y = k.apply(this, arguments);
                y && this === c && (b.upgradeSelf(y), b.upgrade(y));
                return y
            };
            f.appendChild = function() {
                var y = l.apply(this, arguments);
                b.sync();
                return y
            };
            f.insertBefore =
                function() {
                    var y = p.apply(this, arguments);
                    b.sync();
                    return y
                };
            f.removeChild = function() {
                var y = q.apply(this, arguments);
                b.sync();
                return y
            };
            f.replaceChild = function() {
                var y = t.apply(this, arguments);
                b.sync();
                return y
            };
            f.cloneNode = function() {
                var y = m.apply(this, arguments);
                y.ownerDocument === c && (b.upgradeSelf(y), b.upgrade(y));
                return y
            };
            var w = e,
                u = Object.getOwnPropertyDescriptor(w, "innerHTML");
            u || (w = Object.getPrototypeOf(a.HTMLElement.prototype), u = Object.getOwnPropertyDescriptor(w, "innerHTML"));
            if (u && u.configurable) {
                var r =
                    u.set;
                u.set = function(y) {
                    r.call(this, y);
                    b.upgrade(this)
                };
                Object.defineProperty(w, "innerHTML", u)
            }
        }

        function Fa() {
            function a() {
                var p = this.constructor,
                    q = h.current();
                q || (q = h.getByConstructor(p), q = f.call(e, q.name));
                Ga(q, p.prototype);
                return q
            }
            var b = Ha,
                c = b.Element,
                d = b.HTMLElement,
                e = b.document,
                f = e.createElement,
                h = new ya(b),
                k = new xa(b, h);
            Object.defineProperty(b, "customElements", {
                enumerable: !0,
                configurable: !0,
                value: k
            });
            c = c.prototype;
            var l = c.attachShadow,
                m = c.createShadowRoot;
            l && (c.attachShadow = function(p) {
                var q = l.apply(this, arguments);
                h.observe(q);
                return q
            }, c.attachShadow.toString = function() {
                return l.toString()
            });
            m && (c.createShadowRoot = function() {
                var p = m.apply(this, arguments);
                h.observe(p);
                return p
            }, c.createShadowRoot.toString = function() {
                return m.toString()
            });
            Ia(d, a);
            b.HTMLElement = a;
            a.call || (a.apply = b.Function.apply, a.bind = b.Function.bind, a.call = b.Function.call)
        }

        function Ja() {
            function a() {
                return d.construct(c, [], this.constructor)
            }
            var b = Ha,
                c = b.HTMLElement,
                d = b.Reflect;
            Ia(c, a);
            b.HTMLElement = a
        }

        function Ia(a, b) {
            b.prototype = Object.create(a.prototype, {
                constructor: {
                    configurable: !0,
                    writable: !0,
                    value: b
                }
            });
            Ga(b, a)
        }

        function Ga(a, b) {
            if (Object.setPrototypeOf) Object.setPrototypeOf(a, b);
            else if ({
                    __proto__: {
                        test: !0
                    }
                }.test) a.__proto__ = b;
            else
                for (; null !== b && !Object.isPrototypeOf.call(b, a);) {
                    for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) {
                        var e = c[d];
                        if (!Object.hasOwnProperty.call(a, e)) {
                            var f = Object.getOwnPropertyDescriptor(b, e);
                            Object.defineProperty(a, e, f)
                        }
                    }
                    b = Object.getPrototypeOf(b)
                }
        };

        function Ka(a, b) {
            if (void 0 === b ? this.contains(a) : !b) return this.remove(a), !1;
            this.add(a);
            return !0
        }

        function La() {
            var a = self;
            if (/Trident|MSIE|IEMobile/i.test(a.navigator.userAgent) && a.DOMTokenList) {
                a.Object.defineProperty(a.DOMTokenList.prototype, "toggle", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: Ka
                });
                var b = a.DOMTokenList.prototype.add;
                a.DOMTokenList.prototype.add = function() {
                    for (var c = 0; c < arguments.length; c++) b.call(this, arguments[c])
                }
            }
        };

        function Ma(a) {
            return a == this || this.documentElement.contains(a)
        };

        function Na(a, b) {
            var c = b = void 0 === b ? "" : b;
            try {
                return decodeURIComponent(a)
            } catch (d) {
                return c
            }
        };
        var Oa = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

        function x(a) {
            var b = Object.create(null);
            if (!a) return b;
            for (var c; c = Oa.exec(a);) {
                var d = Na(c[1], c[1]),
                    e = c[2] ? Na(c[2].replace(/\+/g, " "), c[2]) : "";
                b[d] = e
            }
            return b
        };
        var Pa = "";

        function z(a) {
            var b = a || self;
            if (b.__AMP_MODE) b = b.__AMP_MODE;
            else {
                var c = x(b.location.originalHash || b.location.hash);
                var d = x(b.location.search);
                Pa || (Pa = b.AMP_CONFIG && b.AMP_CONFIG.v ? b.AMP_CONFIG.v : "012011252111003");
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
                    rtvVersion: Pa
                };
                b = b.__AMP_MODE = c
            }
            return b
        };
        var Qa = Object.prototype.toString;

        function A(a) {
            return Array.isArray(a)
        }

        function Ra(a) {
            return a ? Array.prototype.slice.call(a) : []
        }

        function Sa(a) {
            return "[object Object]" === Qa.call(a)
        }

        function Ta(a) {
            return "number" === typeof a && isFinite(a)
        };

        function Ua(a) {
            var b = !1,
                c = null,
                d = a;
            return function(e) {
                for (var f = [], h = 0; h < arguments.length; ++h) f[h - 0] = arguments[h];
                b || (c = d.apply(self, f), b = !0, d = null);
                return c
            }
        };
        var B = self.AMP_CONFIG || {},
            Va = ("string" == typeof B.cdnProxyRegex ? new RegExp(B.cdnProxyRegex) : B.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function Wa(a) {
            if (!self.document || !self.document.head || self.location && Va.test(self.location.origin)) return null;
            var b = self.document.head.querySelector('meta[name="' + a + '"]');
            return b && b.getAttribute("content") || null
        }
        var D = {
                thirdParty: B.thirdPartyUrl || "https://3p.ampproject.net",
                thirdPartyFrameHost: B.thirdPartyFrameHost || "ampproject.net",
                thirdPartyFrameRegex: ("string" == typeof B.thirdPartyFrameRegex ? new RegExp(B.thirdPartyFrameRegex) : B.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
                cdn: B.cdnUrl || Wa("runtime-host") || "https://cdn.ampproject.org",
                cdnProxyRegex: Va,
                localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
                errorReporting: B.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
                betaErrorReporting: B.betaErrorReportingUrl ||
                    "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
                localDev: B.localDev || !1,
                trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
                geoApi: B.geoApiUrl || Wa("amp-geo-api")
            },
            Xa = {
                urls: D
            };

        function Ya() {}

        function Za(a) {
            return 0 <= a.indexOf("\u200b\u200b\u200b")
        }
        var $a = void 0;

        function ab(a) {
            $a = a
        }

        function bb(a, b) {
            return b.reduce(function(c, d) {
                return c + "&s[]=" + encodeURIComponent(String(cb(d)))
            }, "https://log.amp.dev/?v=012011252111003&id=" + encodeURIComponent(a))
        }

        function db(a, b, c) {
            var d = this,
                e = c = void 0 === c ? "" : c;
            this.win = a;
            this.Sg = b;
            this.Tg = this.win.console && this.win.console.log && "0" != z().log ? this.Sg(parseInt(z().log, 10), z().development) : 0;
            this.Qc = e;
            this.vc = null;
            this.wg = Ua(function() {
                a.fetch(D.cdn + "/rtv/012011252111003/log-messages.simple.json").then(function(f) {
                    return f.json()
                }, Ya).then(function(f) {
                    f && (d.vc = f)
                })
            })
        }

        function eb(a) {
            return void 0 !== $a ? $a : a.Tg
        }

        function hb(a, b, c, d) {
            if (0 != eb(a)) {
                var e = a.win.console.log;
                "ERROR" == c ? e = a.win.console.error || e : "INFO" == c ? e = a.win.console.info || e : "WARN" == c && (e = a.win.console.warn || e);
                c = A(d[0]) ? ib(a, d[0]) : d;
                b = "[" + b + "]";
                "string" === typeof c[0] ? c[0] = b + " " + c[0] : c.unshift(b);
                e.apply(a.win.console, c)
            }
        }
        g = db.prototype;
        g.isEnabled = function() {
            return 0 != eb(this)
        };
        g.fine = function(a, b) {
            4 <= eb(this) && hb(this, a, "FINE", Array.prototype.slice.call(arguments, 1))
        };
        g.info = function(a, b) {
            3 <= eb(this) && hb(this, a, "INFO", Array.prototype.slice.call(arguments, 1))
        };
        g.warn = function(a, b) {
            2 <= eb(this) && hb(this, a, "WARN", Array.prototype.slice.call(arguments, 1))
        };
        g.La = function(a, b) {
            if (1 <= eb(this)) hb(this, a, "ERROR", Array.prototype.slice.call(arguments, 1));
            else {
                var c = jb.apply(null, Array.prototype.slice.call(arguments, 1));
                kb(this, c);
                return c
            }
        };
        g.error = function(a, b) {
            var c = this.La.apply(this, arguments);
            c && (c.name = a || c.name, self.__AMP_REPORT_ERROR(c))
        };
        g.expectedError = function(a, b) {
            var c = this.La.apply(this, arguments);
            c && (c.expected = !0, self.__AMP_REPORT_ERROR(c))
        };
        g.createError = function(a) {
            var b = jb.apply(null, arguments);
            kb(this, b);
            return b
        };
        g.createExpectedError = function(a) {
            var b = jb.apply(null, arguments);
            kb(this, b);
            b.expected = !0;
            return b
        };
        g.assert = function(a, b, c) {
            var d;
            if (A(b)) return this.assert.apply(this, [a].concat(ib(this, b)));
            if (!a) {
                var e = (b || "Assertion failed").split("%s"),
                    f = e.shift(),
                    h = f,
                    k = [],
                    l = 2;
                for ("" != f && k.push(f); 0 < e.length;) {
                    var m = e.shift(),
                        p = arguments[l++];
                    p && p.tagName && (d = p);
                    k.push(p);
                    f = m.trim();
                    "" != f && k.push(f);
                    h += cb(p) + m
                }
                l = Error(h);
                l.fromAssert = !0;
                l.associatedElement = d;
                l.messageArray = k;
                kb(this, l);
                self.__AMP_REPORT_ERROR(l);
                throw l;
            }
            return a
        };
        g.assertElement = function(a, b) {
            lb(this, a, a && 1 == a.nodeType, "Element expected", b);
            return a
        };
        g.assertString = function(a, b) {
            lb(this, a, "string" == typeof a, "String expected", b);
            return a
        };
        g.assertNumber = function(a, b) {
            lb(this, a, "number" == typeof a, "Number expected", b);
            return a
        };
        g.assertArray = function(a, b) {
            lb(this, a, A(a), "Array expected", b);
            return a
        };
        g.assertBoolean = function(a, b) {
            lb(this, a, !!a === a, "Boolean expected", b);
            return a
        };
        g.assertEnumValue = function(a, b, c) {
            a: {
                for (var d in a)
                    if (a[d] === b) {
                        a = !0;
                        break a
                    }
                a = !1
            }
            if (a) return b;this.assert(!1, 'Unknown %s value: "%s"', c || "enum", b)
        };

        function kb(a, b) {
            b = mb(b);
            a.Qc ? b.message ? -1 == b.message.indexOf(a.Qc) && (b.message += a.Qc) : b.message = a.Qc : Za(b.message) && (b.message = b.message.replace("\u200b\u200b\u200b", ""))
        }

        function ib(a, b) {
            var c = b.shift();
            z(a.win).development && a.wg();
            return a.vc && c in a.vc ? [a.vc[c]].concat(b) : ["More info at " + bb(c, b)]
        }

        function lb(a, b, c, d, e) {
            A(e) ? a.assert(c, e.concat(b)) : a.assert(c, (e || d) + ": %s", b)
        }

        function cb(a) {
            return a && 1 == a.nodeType ? a.tagName.toLowerCase() + (a.id ? "#" + a.id : "") : a
        }

        function mb(a) {
            var b = Object.getOwnPropertyDescriptor(a, "message");
            if (b && b.writable) return a;
            var c = a.stack,
                d = Error(a.message),
                e;
            for (e in a) d[e] = a[e];
            d.stack = c;
            return d
        }

        function jb(a) {
            for (var b = null, c = "", d = 0; d < arguments.length; d++) {
                var e = arguments[d];
                e instanceof Error && !b ? b = mb(e) : (c && (c += " "), c += e)
            }
            b ? c && (b.message = c + ": " + b.message) : b = Error(c);
            return b
        }

        function nb(a) {
            var b = jb.apply(null, arguments);
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
        var ob = self.__AMP_LOG,
            pb = null;

        function G(a) {
            ob.user || (ob.user = qb("\u200b\u200b\u200b"));
            var b = ob.user.win;
            return a && a.ownerDocument.defaultView != b ? ob.userForEmbed ? ob.userForEmbed : ob.userForEmbed = qb("\u200b\u200b\u200b\u200b") : ob.user
        }

        function qb(a) {
            if (!pb) throw Error("failed to call initLogConstructor");
            return new pb(self, function(b, c) {
                return c || 1 <= b ? 4 : 2
            }, a)
        }

        function H() {
            if (ob.dev) return ob.dev;
            if (!pb) throw Error("failed to call initLogConstructor");
            return ob.dev = new pb(self, function(a) {
                return 3 <= a ? 4 : 2 <= a ? 3 : 0
            })
        }

        function J(a, b, c, d, e, f) {
            return G().assert(a, b, c, d, e, f, void 0, void 0, void 0, void 0, void 0)
        };
        var rb = Object.prototype.hasOwnProperty;

        function K(a) {
            var b = Object.create(null);
            a && Object.assign(b, a);
            return b
        }

        function L(a) {
            return a || {}
        };

        function M() {
            var a, b;
            this.promise = new Promise(function(c, d) {
                a = c;
                b = d
            });
            this.resolve = a;
            this.reject = b
        }

        function sb(a) {
            return new Promise(function(b) {
                b(a())
            })
        };
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        var tb = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;

        function ub(a, b, c, d, e) {
            return e ? e : b ? "\ufffd" : d ? a.slice(0, -1) + "\\" + a.slice(-1).charCodeAt(0).toString(16) + " " : "\\" + a
        };
        var vb;

        function wb(a) {
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

        function xb(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        }

        function yb(a) {
            return a.trimStart ? a.trimStart() : (a + "_").trim().slice(0, -1)
        };

        function zb(a, b, c) {
            if (b(a)) c();
            else {
                var d = a.ownerDocument.defaultView;
                if (d.MutationObserver) {
                    var e = new d.MutationObserver(function() {
                        b(a) && (e.disconnect(), c())
                    });
                    e.observe(a, {
                        childList: !0
                    })
                } else var f = d.setInterval(function() {
                    b(a) && (d.clearInterval(f), c())
                }, 5)
            }
        }

        function Ab(a, b) {
            return new Promise(function(c) {
                zb(a, b, c)
            })
        }

        function Bb(a, b) {
            zb(a.documentElement, function() {
                return !!a.body
            }, b)
        }

        function Cb(a) {
            return new Promise(function(b) {
                return Bb(a, b)
            })
        }

        function Db(a) {
            a.parentElement && a.parentElement.removeChild(a)
        }

        function Eb(a) {
            var b = L({
                src: "about:blank",
                style: "display:none"
            });
            a = a.createElement("iframe");
            for (var c in b) a.setAttribute(c, b[c]);
            return a
        }

        function Fb(a) {
            var b = a.isConnected;
            if (void 0 !== b) return b;
            do
                if (a = Gb(a), a.host) a = a.host;
                else break; while (1);
            return a.nodeType === Node.DOCUMENT_NODE
        }

        function Gb(a) {
            if (Node.prototype.getRootNode) return a.getRootNode() || a;
            for (; a.parentNode && (!a || "I-AMPHTML-SHADOW-ROOT" != a.tagName && (11 != a.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(a))); a = a.parentNode);
            return a
        }

        function Hb(a, b) {
            for (; a && void 0 !== a; a = a.parentElement)
                if (b(a)) return a;
            return null
        }

        function Ib(a, b) {
            return a.closest ? a.closest(b) : Hb(a, function(c) {
                return Jb(c, b)
            })
        }

        function Kb(a, b) {
            var c = [];
            for (a = a.firstElementChild; a; a = a.nextElementSibling) b(a) && c.push(a);
            return c
        }

        function Lb(a, b) {
            for (a = a.lastElementChild; a; a = a.previousElementSibling)
                if (b(a)) return a;
            return null
        }

        function Mb(a, b) {
            var c = [];
            for (a = a.firstChild; a; a = a.nextSibling) b(a) && c.push(a);
            return c
        }

        function Nb(a, b) {
            /^[\w-]+$/.test(b);
            return Ob(a, "> [" + b + "]")
        }

        function Jb(a, b) {
            var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
            return c ? c.call(a, b) : !1
        }

        function Pb(a, b) {
            a.classList.add("i-amphtml-scoped");
            var c = b.replace(/^|,/g, "$&.i-amphtml-scoped "),
                d = a.querySelectorAll(c);
            a.classList.remove("i-amphtml-scoped");
            return d
        }

        function Ob(a, b) {
            if (void 0 !== vb ? vb : vb = wb(a)) return a.querySelector(b.replace(/^|,/g, "$&:scope "));
            var c = Pb(a, b);
            return void 0 === c[0] ? null : c[0]
        }

        function Qb(a, b) {
            for (var c = a.length, d = 0; d < c; d++) b(a[d], d)
        }

        function Rb(a, b, c, d) {
            try {
                var e = a.open(b, c, d)
            } catch (h) {
                H().error("DOM", "Failed to open url on target: ", c, h)
            }
            if (!(c = e || "_top" == c)) {
                c = d || "";
                var f;
                "number" !== typeof f && (f = 0);
                c = f + 8 > c.length ? !1 : -1 !== c.indexOf("noopener", f)
            }
            c || (e = a.open(b, "_top"));
            return e
        }

        function Sb(a) {
            try {
                a.focus()
            } catch (b) {}
        }

        function Tb(a) {
            return a.parent && a.parent != a
        }

        function Ub(a, b, c) {
            c = c || {};
            var d = a.ownerDocument.createEvent("Event");
            d.data = c;
            d.initEvent(b, !0, !0);
            a.dispatchEvent(d)
        };

        function Vb(a) {
            var b = Object.create(null),
                c;
            for (c in a)
                if (Wb(a, c)) {
                    var d = a[c];
                    b[c] = Sa(d) ? Vb(d) : d
                }
            return b
        }

        function Xb(a) {
            return JSON.parse(a)
        }

        function Wb(a, b) {
            return null == a || "object" != typeof a ? !1 : Object.prototype.hasOwnProperty.call(a, b)
        };

        function Yb(a) {
            return "undefined" !== typeof TextEncoder ? (new TextEncoder("utf-8")).encode(a) : Zb(unescape(encodeURIComponent(a)))
        }

        function Zb(a) {
            for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                b[c] = d
            }
            return b
        }

        function $b(a) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) b[c] = String.fromCharCode(a[c]);
            return b.join("")
        };
        var ac = {
                document: 1,
                text: 2
            },
            bc = ["GET", "POST"];

        function cc(a, b) {
            var c = b = void 0 === b ? {} : b;
            return new Promise(function(d, e) {
                var f = dc(c.method || "GET"),
                    h = ec(f, a);
                "include" == c.credentials && (h.withCredentials = !0);
                c.responseType in ac && (h.responseType = c.responseType);
                c.headers && Object.keys(c.headers).forEach(function(k) {
                    h.setRequestHeader(k, c.headers[k])
                });
                h.onreadystatechange = function() {
                    2 > h.readyState || (100 > h.status || 599 < h.status ? (h.onreadystatechange = null, e(G().createExpectedError("Unknown HTTP status " + h.status))) : 4 == h.readyState && d(new fc(h)))
                };
                h.onerror =
                    function() {
                        e(G().createExpectedError("Network failure"))
                    };
                h.onabort = function() {
                    e(G().createExpectedError("Request aborted"))
                };
                "POST" == f ? h.send(c.body) : h.send()
            })
        }

        function ec(a, b) {
            var c = new XMLHttpRequest;
            if ("withCredentials" in c) c.open(a, b, !0);
            else throw H().createExpectedError("CORS is not supported");
            return c
        }

        function fc(a) {
            this.Sa = a;
            this.status = this.Sa.status;
            this.statusText = this.Sa.statusText;
            this.ok = 200 <= this.status && 300 > this.status;
            this.headers = new gc(a);
            this.bodyUsed = !1;
            this.body = null;
            this.url = a.responseURL
        }
        fc.prototype.clone = function() {
            return new fc(this.Sa)
        };

        function hc(a) {
            a.bodyUsed = !0;
            return Promise.resolve(a.Sa.responseText)
        }
        fc.prototype.text = function() {
            return hc(this)
        };
        fc.prototype.json = function() {
            return hc(this).then(Xb)
        };
        fc.prototype.arrayBuffer = function() {
            return hc(this).then(Yb)
        };

        function dc(a) {
            if (void 0 === a) return "GET";
            a = a.toUpperCase();
            bc.includes(a);
            return a
        }

        function gc(a) {
            this.Sa = a
        }
        gc.prototype.get = function(a) {
            return this.Sa.getResponseHeader(a)
        };
        gc.prototype.has = function(a) {
            return null != this.Sa.getResponseHeader(a)
        };

        function ic(a, b) {
            var c = b = void 0 === b ? {} : b,
                d = K();
            a = Object.assign({}, {
                status: 200,
                statusText: "OK",
                responseText: a ? String(a) : "",
                getResponseHeader: function(f) {
                    var h = String(f).toLowerCase();
                    return rb.call(d, h) ? d[h] : null
                }
            }, c);
            a.status = void 0 === c.status ? 200 : parseInt(c.status, 10);
            if (A(c.headers)) c.headers.forEach(function(f) {
                var h = f[1];
                d[String(f[0]).toLowerCase()] = String(h)
            });
            else if (Sa(c.headers))
                for (var e in c.headers) d[String(e).toLowerCase()] = String(c.headers[e]);
            c.statusText && (a.statusText = String(c.statusText));
            fc.call(this, a)
        }
        n(ic, fc);

        function jc(a, b, c, d) {
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

        function kc(a) {
            for (var b = -Infinity, c = Infinity, d = -Infinity, e = Infinity, f = 0; f < arguments.length; f++) {
                var h = arguments[f];
                if (h && (b = Math.max(b, h.left), c = Math.min(c, h.left + h.width), d = Math.max(d, h.top), e = Math.min(e, h.top + h.height), c < b || e < d)) return null
            }
            return Infinity == c ? null : jc(b, d, c - b, e - d)
        }

        function lc(a, b) {
            return jc(a.left - .25 * a.width, a.top - a.height * b, 1.5 * a.width, a.height * (1 + 2 * b))
        }

        function mc(a, b, c) {
            return 0 == b && 0 == c || 0 == a.width && 0 == a.height ? a : jc(a.left + b, a.top + c, a.width, a.height)
        };
        var nc;

        function oc() {
            return Fb(this) ? nc.call(this) : jc(0, 0, 0, 0)
        }

        function pc() {
            var a = qc;
            if (!a.document) return !1;
            try {
                return 0 !== a.document.createElement("div").getBoundingClientRect().top
            } catch (b) {
                return !0
            }
        };

        function N(a, b, c) {
            a = rc(a);
            sc(a, a, b, c)
        }

        function O(a, b, c, d) {
            var e = tc(a),
                f = wc(e);
            sc(f, e, b, c);
            d && xc(f, b)
        }

        function P(a, b) {
            a = rc(a);
            return xc(a, b)
        }

        function yc(a) {
            a = rc(a);
            return zc(a, "performance") ? xc(a, "performance") : null
        }

        function Ac(a, b) {
            var c = tc(a);
            c = wc(c);
            return xc(c, b)
        }

        function Bc(a, b) {
            a = tc(a);
            a = wc(a);
            return zc(a, b) ? xc(a, b) : null
        }

        function Cc(a, b) {
            return Dc(wc(a), b)
        }

        function Ec(a, b) {
            return Fc(wc(a), b)
        }

        function rc(a) {
            return a.__AMP_TOP || (a.__AMP_TOP = a)
        }

        function Gc(a, b) {
            var c = (a.ownerDocument || a).defaultView;
            a = b || rc(c);
            if (c && c != a && rc(c) == a) try {
                return c.frameElement
            } catch (d) {}
            return null
        }

        function tc(a) {
            return a.nodeType ? P((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function wc(a) {
            a = tc(a);
            return a.isSingleDoc() ? a.win : a
        }

        function xc(a, b) {
            zc(a, b);
            a = Hc(a)[b];
            a.obj || (a.obj = new a.ctor(a.context), a.ctor = null, a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function sc(a, b, c, d) {
            var e = Hc(a),
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
            f.ctor || f.obj || (f.ctor = d, f.context = b, f.adopted = !1, f.resolve && xc(a, c))
        }

        function Dc(a, b) {
            var c = Fc(a, b);
            if (c) return c;
            a = Hc(a);
            a[b] = Ic();
            return a[b].promise
        }

        function Fc(a, b) {
            var c = Hc(a)[b];
            if (c) {
                if (c.promise) return c.promise;
                xc(a, b);
                return c.promise = Promise.resolve(c.obj)
            }
            return null
        }

        function Hc(a) {
            var b = a.__AMP_SERVICES;
            b || (b = a.__AMP_SERVICES = {});
            return b
        }

        function Jc(a) {
            a = Hc(a);
            var b = {},
                c;
            for (c in a) {
                b.Ta = c;
                if (Object.prototype.hasOwnProperty.call(a, b.Ta)) {
                    var d = a[b.Ta];
                    d.adopted || (d.obj ? Kc(b.Ta, d.obj) : d.promise && d.promise.then(function(e) {
                        return function(f) {
                            return Kc(e.Ta, f)
                        }
                    }(b)))
                }
                b = {
                    Ta: b.Ta
                }
            }
        }

        function Kc(a, b) {
            if ("function" == typeof b.dispose) try {
                b.dispose()
            } catch (c) {
                H().error("SERVICE", "failed to dispose service", a, c)
            }
        }

        function zc(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor && !a.obj)
        }

        function Ic() {
            var a = new M,
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

        function Lc(a, b, c) {
            return Mc(a, b, c, void 0).then(function(d) {
                return J(d, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", b, c, c, c)
            })
        }

        function Mc(a, b, c, d) {
            var e = Ec(a, b);
            if (e) return e;
            var f = tc(a);
            return f.waitForBodyOpen().then(function() {
                var h = f.win;
                return Nc(f.win.document.head).includes(c) ? P(h, "extensions").waitForExtension(h, c) : v()
            }).then(function() {
                if (d) var h = Ec(a, b);
                else h = f.win, h = h.__AMP_EXTENDED_ELEMENTS && h.__AMP_EXTENDED_ELEMENTS[c] ? Cc(a, b) : null;
                return h
            })
        }

        function Oc(a) {
            var b = Bc(a, "bind");
            return b ? Promise.resolve(b) : Mc(a, "bind", "amp-bind")
        }

        function Nc(a) {
            if (!a) return [];
            for (var b = {}, c = a.querySelectorAll("script[custom-element],script[custom-template]"), d = 0; d < c.length; d++) {
                var e = c[d];
                e = e.getAttribute("custom-element") || e.getAttribute("custom-template");
                b[e] = !0
            }
            return Object.keys(b)
        }

        function Pc(a) {
            return a.waitForBodyOpen().then(function() {
                var b = a.getHeadNode();
                return Nc(b).includes("amp-form")
            })
        };

        function Qc(a) {
            return P(a, "ampdoc")
        }

        function Rc(a) {
            return Ac(a, "documentInfo").get()
        }

        function Sc(a) {
            return P(a, "extensions")
        }

        function Tc(a) {
            return Ac(a, "mutator")
        }

        function Q(a) {
            return P(a, "platform")
        }

        function Uc(a) {
            return Ac(a, "resources")
        }

        function R(a) {
            return P(a, "timer")
        }

        function S(a) {
            return Ac(a, "viewer")
        }

        function Vc(a) {
            return P(a, "vsync")
        }

        function Wc(a) {
            return Ac(a, "viewport")
        };

        function Xc(a, b) {
            this.ng = a;
            this.Lb = Object.assign({}, {
                root: null,
                rootMargin: "0px 0px 0px 0px"
            }, b);
            if ((a = this.Lb.root) && 1 !== a.nodeType) throw Error("root must be an Element");
            this.Ka = [];
            this.T = null;
            Xc._upgraders.push(this.Jh.bind(this))
        }
        g = Xc.prototype;
        g.disconnect = function() {
            this.T ? this.T.disconnect() : this.Ka.length = 0
        };
        g.takeRecords = function() {
            return this.T ? this.T.takeRecords() : []
        };
        g.observe = function(a) {
            this.T ? this.T.observe(a) : -1 == this.Ka.indexOf(a) && this.Ka.push(a)
        };
        g.unobserve = function(a) {
            this.T ? this.T.unobserve(a) : (a = this.Ka.indexOf(a), -1 != a && this.Ka.splice(a, 1))
        };
        g.Jh = function(a) {
            var b = new a(this.ng, this.Lb);
            this.T = b;
            this.Ka.forEach(function(c) {
                return b.observe(c)
            });
            this.Ka = null
        };
        da.Object.defineProperties(Xc.prototype, {
            root: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.T ? this.T.root : this.Lb.root || null
                }
            },
            rootMargin: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.T ? this.T.rootMargin : this.Lb.rootMargin
                }
            },
            thresholds: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.T ? this.T.thresholds : [].concat(this.Lb.threshold || 0)
                }
            }
        });
        Xc._upgraders = [];

        function Yc() {
            var a = Zc;
            !a.IntersectionObserverEntry || "isIntersecting" in a.IntersectionObserverEntry.prototype || Object.defineProperty(a.IntersectionObserverEntry.prototype, "isIntersecting", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return 0 < this.intersectionRatio
                }
            })
        };

        function $c(a) {
            return (a = Number(a)) ? 0 < a ? 1 : -1 : a
        };
        var ad = Object.prototype.hasOwnProperty;

        function bd(a, b) {
            if (null == a) throw new TypeError("Cannot convert undefined or null to object");
            for (var c = Object(a), d = 1; d < arguments.length; d++) {
                var e = arguments[d];
                if (null != e)
                    for (var f in e) ad.call(e, f) && (c[f] = e[f])
            }
            return c
        };

        function cd(a) {
            return Object.keys(a).map(function(b) {
                return a[b]
            })
        };

        function dd(a) {
            if (!(this instanceof dd)) throw new TypeError("Constructor Promise requires `new`");
            if (!ed(a)) throw new TypeError("Must pass resolver function");
            this._state = fd;
            this._value = [];
            this._isChainEnd = !0;
            gd(this, hd(this, id), hd(this, jd), {
                then: a
            })
        }
        dd.prototype.then = function(a, b) {
            a = ed(a) ? a : void 0;
            b = ed(b) ? b : void 0;
            if (a || b) this._isChainEnd = !1;
            return this._state(this._value, a, b)
        };
        dd.prototype.catch = function(a) {
            return this.then(void 0, a)
        };

        function kd(a) {
            return a === Object(a) && a instanceof this ? a : new this(function(b) {
                b(a)
            })
        }

        function ld(a) {
            return new this(function(b, c) {
                c(a)
            })
        }

        function md(a) {
            var b = this;
            return new b(function(c, d) {
                var e = a.length,
                    f = Array(e);
                if (0 === e) return c(f);
                nd(a, function(h, k) {
                    b.resolve(h).then(function(l) {
                        f[k] = l;
                        0 === --e && c(f)
                    }, d)
                })
            })
        }

        function od(a) {
            var b = this;
            return new b(function(c, d) {
                for (var e = 0; e < a.length; e++) b.resolve(a[e]).then(c, d)
            })
        }

        function id(a, b, c, d) {
            if (!b) return d && (b = d.promise, b._state = id, b._value = a), this;
            d || (d = new pd(this.constructor));
            qd(rd(d, b, a));
            return d.promise
        }

        function jd(a, b, c, d) {
            if (!c) return d && (b = d.promise, b._state = jd, b._value = a), this;
            d || (d = new pd(this.constructor));
            qd(rd(d, c, a));
            return d.promise
        }

        function fd(a, b, c, d) {
            if (!d) {
                if (!b && !c) return this;
                d = new pd(this.constructor)
            }
            a.push({
                deferred: d,
                onFulfilled: b || d.resolve,
                onRejected: c || d.reject
            });
            return d.promise
        }

        function pd(a) {
            var b = this;
            this.promise = new a(function(c, d) {
                b.resolve = c;
                b.reject = d
            });
            return b
        }

        function sd(a, b, c, d) {
            var e = a._value;
            a._state = b;
            a._value = c;
            d && b === fd && d._state(c, void 0, void 0, {
                promise: a,
                resolve: void 0,
                reject: void 0
            });
            for (var f = 0; f < e.length; f++) {
                var h = e[f];
                a._state(c, h.onFulfilled, h.onRejected, h.deferred)
            }
            e.length = 0;
            b === jd && a._isChainEnd && setTimeout(function() {
                if (a._isChainEnd) throw c;
            }, 0)
        }

        function hd(a, b) {
            return function(c) {
                sd(a, b, c)
            }
        }

        function td() {}

        function ed(a) {
            return "function" === typeof a
        }

        function nd(a, b) {
            for (var c = 0; c < a.length; c++) b(a[c], c)
        }

        function rd(a, b, c) {
            var d = a.promise,
                e = a.resolve,
                f = a.reject;
            return function() {
                try {
                    var h = b(c);
                    gd(d, e, f, h, h)
                } catch (k) {
                    f(k)
                }
            }
        }
        var qd = function() {
            function a() {
                for (var e = 0; e < d; e++) {
                    var f = c[e];
                    c[e] = null;
                    f()
                }
                d = 0
            }
            if ("undefined" !== typeof window && window.postMessage) {
                window.addEventListener("message", a);
                var b = function() {
                    window.postMessage("macro-task", "*")
                }
            } else b = function() {
                setTimeout(a, 0)
            };
            var c = Array(16),
                d = 0;
            return function(e) {
                0 === d && b();
                c[d++] = e
            }
        }();

        function gd(a, b, c, d, e) {
            var f = c,
                h;
            try {
                if (d === a) throw new TypeError("Cannot fulfill promise with itself");
                var k = d === Object(d);
                if (k && d instanceof a.constructor) sd(a, d._state, d._value, d);
                else if (k && (h = d.then) && ed(h)) {
                    var l = function(m) {
                        l = f = td;
                        gd(a, b, c, m, m)
                    };
                    f = function(m) {
                        l = f = td;
                        c(m)
                    };
                    h.call(e, function(m) {
                        l(m)
                    }, function(m) {
                        f(m)
                    })
                } else b(d)
            } catch (m) {
                f(m)
            }
        };

        function ud(a, b) {
            return this.substr(0 < b ? b | 0 : 0, a.length) === a
        };
        (function(a) {
            a.fetch || (Object.defineProperty(a, "fetch", {
                value: cc,
                writable: !0,
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(a, "Response", {
                value: ic,
                writable: !0,
                enumerable: !1,
                configurable: !0
            }))
        })(self);
        (function(a) {
            a.Math.sign || a.Object.defineProperty(a.Math, "sign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: $c
            })
        })(self);
        (function(a) {
            a.Object.assign || a.Object.defineProperty(a.Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: bd
            })
        })(self);
        (function(a) {
            a.Object.values || a.Object.defineProperty(a.Object, "values", {
                configurable: !0,
                writable: !0,
                value: cd
            })
        })(self);
        (function(a) {
            a.Promise || (a.Promise = dd, dd.default && (a.Promise = dd.default), a.Promise.resolve = kd, a.Promise.reject = ld, a.Promise.all = md, a.Promise.race = od)
        })(self);
        (function(a) {
            a.Array.prototype.includes || a.Object.defineProperty(a.Array.prototype, "includes", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: oa
            })
        })(self);
        (function(a) {
            var b = a.Map,
                c = new b;
            if (c.set(0, 0) !== c) {
                var d = c.set;
                a.Object.defineProperty(b.prototype, "set", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        d.apply(this, arguments);
                        return this
                    }
                })
            }
        })(self);
        (function(a) {
            var b = a.WeakMap,
                c = new b;
            if (c.set({}, 0) !== c) {
                var d = c.set;
                a.Object.defineProperty(b.prototype, "set", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        d.apply(this, arguments);
                        return this
                    }
                })
            }
        })(self);
        (function(a) {
            var b = a.Set,
                c = new b;
            if (c.add(0) !== c) {
                var d = c.add;
                a.Object.defineProperty(b.prototype, "add", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        d.apply(this, arguments);
                        return this
                    }
                })
            }
        })(self);
        (function(a) {
            a.String.prototype.startsWith || a.Object.defineProperty(a.String.prototype, "startsWith", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: ud
            })
        })(self);
        if (self.document) {
            La();
            var vd = self,
                wd = vd.HTMLDocument || vd.Document;
            wd && !wd.prototype.contains && vd.Object.defineProperty(wd.prototype, "contains", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Ma
            });
            var qc = self;
            pc() && (nc = Element.prototype.getBoundingClientRect, qc.Object.defineProperty(qc.Element.prototype, "getBoundingClientRect", {
                value: oc
            }));
            var xd = function() {},
                Ha = self,
                yd = Ha.document,
                zd, Ad = Ha.customElements;
            zd = !!(Ad && Ad.define && Ad.get && Ad.whenDefined);
            var Bd;
            if (!(Bd = !yd)) {
                var Cd;
                if (Cd = zd) Cd = -1 === Ha.HTMLElement.toString().indexOf("[native code]");
                Bd = Cd
            }
            if (!Bd) {
                var Dd = !0,
                    Ed = !1;
                if (xd && zd) try {
                    var Fd = Ha.Reflect,
                        Gd = Object.create(xd.prototype);
                    Function.call.call(xd, Gd);
                    Ed = !(!Fd || !Fd.construct)
                } catch (a) {
                    Dd = !1
                }
                Ed ? Ja() : Dd && Fa()
            }
            var Zc = self;
            Zc.IntersectionObserver || (Zc.IntersectionObserver = Xc);
            Yc();
            var Hd = self;
            Hd.AbortController || (Object.defineProperty(Hd, "AbortController", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: ma
            }), Object.defineProperty(Hd, "AbortSignal", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: na
            }))
        };
        var Id;

        function Jd(a) {
            a = a.ownerDocument || a;
            Id && Id.ownerDocument === a || (Id = a.createElement("div"));
            return Kd
        }

        function Kd(a) {
            var b = Id;
            b.innerHTML = a[0];
            a = b.firstElementChild;
            b.removeChild(a);
            return a
        };

        function Ld() {
            this.og = 100;
            this.$c = this.Y = 0;
            this.Wa = Object.create(null)
        }
        Ld.prototype.has = function(a) {
            return !!this.Wa[a]
        };
        Ld.prototype.get = function(a) {
            var b = this.Wa[a];
            if (b) return b.access = ++this.$c, b.payload
        };
        Ld.prototype.put = function(a, b) {
            this.has(a) || this.Y++;
            this.Wa[a] = {
                payload: b,
                access: this.$c
            };
            if (!(this.Y <= this.og)) {
                H().warn("lru-cache", "Trimming LRU cache");
                a = this.Wa;
                var c = this.$c + 1,
                    d;
                for (d in a) {
                    var e = a[d].access;
                    if (e < c) {
                        c = e;
                        var f = d
                    }
                }
                void 0 !== f && (delete a[f], this.Y--)
            }
        };
        var Md = L({
                c: !0,
                v: !0,
                a: !0,
                ad: !0
            }),
            Nd, Od, Pd = /[?&]amp_js[^&]*/,
            Qd = /[?&]amp_gsa[^&]*/,
            Rd = /[?&]amp_r[^&]*/,
            Sd = /[?&]amp_kit[^&]*/,
            Ud = /[?&]usqp[^&]*/,
            Vd = ["javascript:", "data:", "vbscript:"];

        function U(a, b) {
            Nd || (Nd = self.document.createElement("a"), Od = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new Ld));
            return Wd(Nd, a, b ? null : Od)
        }

        function Wd(a, b, c) {
            if (c && c.has(b)) return c.get(b);
            a.href = b;
            a.protocol || (a.href = a.href);
            var d = {
                href: a.href,
                protocol: a.protocol,
                host: a.host,
                hostname: a.hostname,
                port: "0" == a.port ? "" : a.port,
                pathname: a.pathname,
                search: a.search,
                hash: a.hash,
                origin: null
            };
            "/" !== d.pathname[0] && (d.pathname = "/" + d.pathname);
            if ("http:" == d.protocol && 80 == d.port || "https:" == d.protocol && 443 == d.port) d.port = "", d.host = d.hostname;
            d.origin = a.origin && "null" != a.origin ? a.origin : "data:" != d.protocol && d.host ? d.protocol + "//" + d.host : d.href;
            c && c.put(b,
                d);
            return d
        }

        function Xd(a, b, c) {
            if (!b) return a;
            var d = a.split("#", 2),
                e = d[0].split("?", 2),
                f = e[0] + (e[1] ? c ? "?" + b + "&" + e[1] : "?" + e[1] + "&" + b : "?" + b);
            return f += d[1] ? "#" + d[1] : ""
        }

        function Yd(a, b) {
            return Xd(a, Zd(b))
        }

        function Zd(a) {
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

        function $d(a) {
            "string" == typeof a && (a = U(a));
            return "https:" == a.protocol || "localhost" == a.hostname || "127.0.0.1" == a.hostname || xb(a.hostname, ".localhost")
        }

        function ae(a, b, c) {
            var d = c = void 0 === c ? "source" : c;
            J(null != a, "%s %s must be available", b, d);
            J($d(a) || /^(\/\/)/.test(a), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', b, d, a);
            return a
        }

        function be(a) {
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        }

        function V(a) {
            "string" == typeof a && (a = U(a));
            return D.cdnProxyRegex.test(a.origin)
        }

        function ce(a) {
            if (!a) return !0;
            "string" == typeof a && (a = U(a));
            return !Vd.includes(a.protocol)
        }

        function de(a) {
            var b = U(a);
            a = ee(b.search);
            return b.origin + b.pathname + a + b.hash
        }

        function ee(a) {
            if (!a || "?" == a) return "";
            var b = a.replace(Pd, "").replace(Qd, "").replace(Rd, "").replace(Sd, "").replace(Ud, "").replace(/^[?&]/, "");
            return b ? "?" + b : ""
        }

        function fe(a) {
            "string" == typeof a && (a = U(a));
            if (!V(a)) return a.href;
            var b = a.pathname.split("/");
            J(Md[b[1]], "Unknown path prefix in url %s", a.href);
            var c = b[2],
                d = "s" == c ? "https://" + decodeURIComponent(b[3]) : "http://" + decodeURIComponent(c);
            J(0 < d.indexOf("."), "Expected a . in origin %s", d);
            b.splice(1, "s" == c ? 3 : 2);
            return d + b.join("/") + ee(a.search) + (a.hash || "")
        }

        function ge(a) {
            return U(fe(a)).origin
        }

        function he(a, b) {
            "string" == typeof b && (b = U(b));
            if ("function" == typeof URL) var c = (new URL(a, b.href)).toString();
            else {
                c = a;
                var d = b;
                "string" == typeof d && (d = U(d));
                c = c.replace(/\\/g, "/");
                var e = U(c);
                c = c.toLowerCase().startsWith(e.protocol) ? e.href : c.startsWith("//") ? d.protocol + c : c.startsWith("/") ? d.origin + c : d.origin + d.pathname.replace(/\/[^/]*$/, "/") + c
            }
            return c
        }

        function ie(a, b) {
            je(b);
            var c = ge(a.location.href);
            a = encodeURIComponent("__amp_source_origin") + "=" + encodeURIComponent(c);
            return Xd(b, a, void 0)
        }

        function je(a) {
            var b = U(a),
                c = x(b.search);
            J(!("__amp_source_origin" in c), "Source origin is not allowed in %s", a)
        };

        function W(a, b) {
            return !!ke(a)[b]
        }

        function le(a, b, c, d) {
            var e = W(a, b),
                f = !(void 0 !== c ? !c : e);
            if (f != e && (ke(a)[b] = f, !d)) {
                var h = me(a);
                h[b] = f;
                var k = [],
                    l;
                for (l in h) k.push((!1 === h[l] ? "-" : "") + l);
                try {
                    "localStorage" in a && a.localStorage.setItem("amp-experiment-toggles", k.join(","))
                } catch (m) {
                    G().error("EXPERIMENTS", "Failed to save experiments to localStorage.")
                }
                G().warn("EXPERIMENTS", '"%s" experiment %s for the domain "%s". See: https://amp.dev/documentation/guides-and-tutorials/learn/experimental', b, f ? "enabled" : "disabled", a.location.hostname)
            }
            return f
        }

        function ke(a) {
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
                    var h = f.getAttribute("content").split(",");
                    for (c = 0; c < h.length; c++) - 1 != e.indexOf(h[c]) && (b[h[c]] = !0)
                }
            }
            Object.assign(b, me(a));
            if (a.AMP_CONFIG && Array.isArray(a.AMP_CONFIG["allow-url-opt-in"]) && 0 < a.AMP_CONFIG["allow-url-opt-in"].length) {
                c = a.AMP_CONFIG["allow-url-opt-in"];
                a = x(a.location.originalHash || a.location.hash);
                for (var k = 0; k < c.length; k++) {
                    var l = a["e-" + c[k]];
                    "1" == l && (b[c[k]] = !0);
                    "0" == l && (b[c[k]] = !1)
                }
            }
            return b
        }

        function me(a) {
            var b = "";
            try {
                "localStorage" in a && (b = a.localStorage.getItem("amp-experiment-toggles"))
            } catch (e) {
                H().warn("EXPERIMENTS", "Failed to retrieve experiments from localStorage.")
            }
            var c = b ? b.split(/\s*,\s*/g) : [];
            a = Object.create(null);
            for (var d = 0; d < c.length; d++) 0 != c[d].length && ("-" == c[d][0] ? a[c[d].substr(1)] = !1 : a[c[d]] = !0);
            return a
        }

        function ne(a, b) {
            a.__AMP_EXPERIMENT_BRANCHES = a.__AMP_EXPERIMENT_BRANCHES || {};
            for (var c = 0; c < b.length; c++) {
                var d = b[c],
                    e = d.experimentId;
                rb.call(a.__AMP_EXPERIMENT_BRANCHES, e) || (d.isTrafficEligible && d.isTrafficEligible(a) ? !a.__AMP_EXPERIMENT_BRANCHES[e] && W(a, e) && (d = d.branches, a.__AMP_EXPERIMENT_BRANCHES[e] = d[Math.floor(Math.random() * d.length)] || null) : a.__AMP_EXPERIMENT_BRANCHES[e] = null)
            }
        }

        function oe(a) {
            return a.__AMP_EXPERIMENT_BRANCHES ? a.__AMP_EXPERIMENT_BRANCHES["intersect-resources"] : null
        };
        var pe, qe = "Webkit webkit Moz moz ms O o".split(" ");

        function re(a, b, c) {
            if (b.startsWith("--")) return b;
            pe || (pe = K());
            var d = pe[b];
            if (!d || c) {
                d = b;
                if (void 0 === a[b]) {
                    var e = b.charAt(0).toUpperCase() + b.slice(1);
                    a: {
                        for (var f = 0; f < qe.length; f++) {
                            var h = qe[f] + e;
                            if (void 0 !== a[h]) {
                                e = h;
                                break a
                            }
                        }
                        e = ""
                    }
                    var k = e;
                    void 0 !== a[k] && (d = k)
                }
                c || (pe[b] = d)
            }
            return d
        }

        function se(a, b) {
            a = a.style;
            for (var c in b) a.setProperty(re(a, c), b[c].toString(), "important")
        }

        function X(a, b, c, d) {
            if (b = re(a.style, b, void 0)) {
                var e = d ? c + d : c;
                b.startsWith("--") ? a.style.setProperty(b, e) : a.style[b] = e
            }
        }

        function te(a, b) {
            for (var c in b) X(a, c, b[c])
        }

        function ue(a, b) {
            void 0 === b && (b = a.hasAttribute("hidden"));
            b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "")
        };

        function ve(a) {
            if (!a.hasAttribute("src") && 0 == "srcset" in a) {
                var b = a.getAttribute("srcset"),
                    c = /\S+/.exec(b);
                null != c && a.setAttribute("src", c[0])
            }
        }

        function we(a, b, c) {
            var d = a.createElement("canvas");
            d.width = b;
            d.height = c;
            return d.toDataURL()
        };
        var xe = ['<i-amphtml-sizer class=i-amphtml-sizer slot=i-amphtml-svc><img alt="" role=presentation aria-hidden=true class=i-amphtml-intrinsic-sizer></i-amphtml-sizer>'],
            ye = {
                NODISPLAY: "nodisplay",
                FIXED: "fixed",
                FIXED_HEIGHT: "fixed-height",
                RESPONSIVE: "responsive",
                CONTAINER: "container",
                FILL: "fill",
                FLEX_ITEM: "flex-item",
                FLUID: "fluid",
                INTRINSIC: "intrinsic"
            },
            ze = {
                "AMP-PIXEL": {
                    width: "0px",
                    height: "0px"
                },
                "AMP-ANALYTICS": {
                    width: "1px",
                    height: "1px"
                },
                "AMP-AUDIO": null,
                "AMP-SOCIAL-SHARE": {
                    width: "60px",
                    height: "44px"
                }
            },
            Ae = {
                "AMP-AD": !0,
                "AMP-ANIM": !0,
                "AMP-EMBED": !0,
                "AMP-FACEBOOK": !0,
                "AMP-FACEBOOK-COMMENTS": !0,
                "AMP-FACEBOOK-PAGE": !0,
                "AMP-GOOGLE-DOCUMENT-EMBED": !0,
                "AMP-IFRAME": !0,
                "AMP-IMG": !0,
                "AMP-INSTAGRAM": !0,
                "AMP-LIST": !0,
                "AMP-PINTEREST": !0,
                "AMP-PLAYBUZZ": !0,
                "AMP-TWITTER": !0
            },
            Be = /^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i,
            Ce = null;

        function De(a) {
            for (var b in ye)
                if (ye[b] == a) return ye[b]
        }

        function Ee(a) {
            return "fixed" == a || "fixed-height" == a || "responsive" == a || "fill" == a || "flex-item" == a || "fluid" == a || "intrinsic" == a
        }

        function Fe(a) {
            if ("number" == typeof a) return a + "px";
            if (a && /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(a)) return /^\d+(\.\d+)?$/.test(a) ? a + "px" : a
        }

        function Ge(a) {
            J(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(a), "Invalid length value: %s", a);
            return a
        }

        function He(a) {
            J(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|%)$/.test(a), "Invalid length or percent value: %s", a);
            return a
        }

        function Ie(a) {
            Ge(a);
            return J(/[a-z]+/i.exec(a), "Failed to read units from %s", a)[0]
        }

        function Je(a) {
            a = parseFloat(a);
            return Ta(a) ? a : void 0
        };
        var Ke;

        function Le(a, b, c, d) {
            var e = a,
                f = c;
            var h = function(m) {
                try {
                    return f(m)
                } catch (p) {
                    throw self.__AMP_REPORT_ERROR(p), p;
                }
            };
            var k = Me(),
                l = !1;
            d && (l = d.capture);
            e.addEventListener(b, h, k ? d : l);
            return function() {
                e && e.removeEventListener(b, h, k ? d : l);
                h = e = f = null
            }
        }

        function Me() {
            if (void 0 !== Ke) return Ke;
            Ke = !1;
            try {
                var a = {
                    get capture() {
                        Ke = !0
                    }
                };
                self.addEventListener("test-options", null, a);
                self.removeEventListener("test-options", null, a)
            } catch (b) {}
            return Ke
        };

        function Ne(a, b) {
            var c = {
                detail: b
            };
            Object.assign(c, void 0);
            if ("function" == typeof a.CustomEvent) return new a.CustomEvent("perf", c);
            a = a.document.createEvent("CustomEvent");
            a.initCustomEvent("perf", !!c.bubbles, !!c.cancelable, b);
            return a
        }

        function Oe(a, b, c, d) {
            return Le(a, b, c, d)
        }

        function Pe(a, b, c, d) {
            var e = c,
                f = Le(a, b, function(h) {
                    try {
                        e(h)
                    } finally {
                        e = null, f()
                    }
                }, d);
            return f
        }

        function Qe(a, b) {
            var c, d = new Promise(function(e) {
                c = Pe(a, "click", e, void 0)
            });
            d.then(c, c);
            b && b(c);
            return d
        }

        function Re(a) {
            return !!(a.complete || "complete" == a.readyState || Se(a) && 0 < a.readyState || a.document && "complete" == a.document.readyState)
        }

        function Te(a) {
            var b, c;
            if (Re(a)) return Promise.resolve(a);
            var d = Se(a);
            return d && a.__AMP_MEDIA_LOAD_FAILURE_SRC === a.currentSrc ? Promise.reject(a) : (new Promise(function(e, f) {
                b = d ? Pe(a, "loadedmetadata", e, {
                    capture: !0
                }) : Pe(a, "load", e);
                if (a.tagName) {
                    var h = a;
                    if (d && !a.hasAttribute("src") && (h = Lb(a, function(k) {
                            return "SOURCE" === k.tagName
                        }), !h)) return f(Error("Media has no source."));
                    c = Pe(h, "error", f)
                }
            })).then(function() {
                c && c();
                return a
            }, function() {
                b && b();
                Se(a) && (a.__AMP_MEDIA_LOAD_FAILURE_SRC = a.currentSrc || !0);
                var e = a;
                e && e.src && (e = e.src);
                throw G().createError("Failed to load:", e);
            })
        }

        function Se(a) {
            return "AUDIO" === a.tagName || "VIDEO" === a.tagName
        };

        function Ue(a) {
            this.element = a;
            this.layout_ = "nodisplay";
            this.win = a.ownerDocument.defaultView;
            this.defaultActionAlias_ = this.actionMap_ = null
        }
        g = Ue.prototype;
        g.signals = function() {
            return this.element.signals()
        };
        g.getDefaultActionAlias = function() {
            return this.defaultActionAlias_
        };
        g.getLayoutPriority = function() {
            return 0
        };
        g.updateLayoutPriority = function(a) {
            this.element.getResources().updateLayoutPriority(this.element, a)
        };
        g.getLayout = function() {
            return this.layout_
        };
        g.getLayoutBox = function() {
            return this.element.getLayoutBox()
        };
        g.getPageLayoutBox = function() {
            return this.element.getPageLayoutBox()
        };
        g.getWin = function() {
            return this.win
        };
        g.getAmpDoc = function() {
            return this.element.getAmpDoc()
        };
        g.getVsync = function() {
            return Vc(this.win)
        };
        g.getConsentPolicy = function() {
            var a = null;
            this.element.hasAttribute("data-block-on-consent") && (a = this.element.getAttribute("data-block-on-consent") || "default");
            return a
        };
        g.isLayoutSupported = function(a) {
            return "nodisplay" == a
        };
        g.isAlwaysFixed = function() {
            return !1
        };
        g.upgradeCallback = function() {
            return null
        };
        g.buildCallback = function() {};
        g.preconnectCallback = function() {};
        g.attachedCallback = function() {};
        g.detachedCallback = function() {};
        g.prerenderAllowed = function() {
            return !1
        };
        g.isBuildRenderBlocking = function() {
            return !1
        };
        g.createPlaceholderCallback = function() {
            return null
        };
        g.createLoaderLogoCallback = function() {
            return {}
        };
        g.renderOutsideViewport = function() {
            return "inabox" == z(this.win).runtime || 3
        };
        g.idleRenderOutsideViewport = function() {
            return !1
        };
        g.isRelayoutNeeded = function() {
            return !1
        };
        g.layoutCallback = function() {
            return v()
        };
        g.firstLayoutCompleted = function() {
            this.togglePlaceholder(!1)
        };
        g.pauseCallback = function() {};
        g.resumeCallback = function() {};
        g.unlayoutCallback = function() {
            return !1
        };
        g.unlayoutOnPause = function() {
            return !1
        };
        g.reconstructWhenReparented = function() {
            return !0
        };
        g.loadPromise = function(a) {
            return Te(a)
        };

        function Ve(a) {
            a.actionMap_ || (a.actionMap_ = a.win.Object.create(null))
        }
        g.registerAction = function(a, b, c) {
            var d = c = void 0 === c ? 2 : c;
            Ve(this);
            this.actionMap_[a] = {
                handler: b,
                minTrust: d
            }
        };
        g.registerDefaultAction = function(a, b, c) {
            var d = void 0 === b ? "activate" : b;
            this.registerAction(d, a, void 0 === c ? 2 : c);
            this.defaultActionAlias_ = d
        };
        g.executeAction = function(a) {
            var b = a.method;
            "activate" === b && (b = this.defaultActionAlias_ || b);
            Ve(this);
            var c = this.actionMap_[b];
            J(c, "Method not found: " + b + " in " + this.element.tagName);
            b = c.handler;
            if (a.satisfiesTrust(c.minTrust)) return b(a)
        };
        g.propagateAttributes = function(a, b, c) {
            a = A(a) ? a : [a];
            for (var d = 0; d < a.length; d++) {
                var e = a[d],
                    f = this.element.getAttribute(e);
                null !== f ? b.setAttribute(e, f) : c && b.removeAttribute(e)
            }
        };
        g.forwardEvents = function(a, b) {
            var c = this,
                d = (A(a) ? a : [a]).map(function(e) {
                    return Oe(b, e, function(f) {
                        Ub(c.element, e, f.data || {})
                    })
                });
            return function() {
                return d.forEach(function(e) {
                    return e()
                })
            }
        };
        g.getPlaceholder = function() {
            return this.element.getPlaceholder()
        };
        g.togglePlaceholder = function(a) {
            this.element.togglePlaceholder(a)
        };
        g.getFallback = function() {
            return this.element.getFallback()
        };
        g.toggleFallback = function(a) {
            this.element.toggleFallback(a)
        };
        g.toggleLoading = function(a, b) {
            this.element.toggleLoading(a, void 0 === b ? !1 : b)
        };
        g.getOverflowElement = function() {
            return this.element.getOverflowElement()
        };
        g.renderStarted = function() {
            this.element.renderStarted()
        };
        g.getRealChildNodes = function() {
            return this.element.getRealChildNodes()
        };
        g.getRealChildren = function() {
            return this.element.getRealChildren()
        };
        g.applyFillContent = function(a, b) {
            a.classList.add("i-amphtml-fill-content");
            b && a.classList.add("i-amphtml-replaced-content")
        };
        g.getViewport = function() {
            return Wc(this.getAmpDoc())
        };
        g.getIntersectionElementLayoutBox = function() {
            return this.getLayoutBox()
        };
        g.collapse = function() {
            Tc(this.getAmpDoc()).collapseElement(this.element)
        };
        g.attemptCollapse = function() {
            return Tc(this.getAmpDoc()).attemptCollapse(this.element)
        };
        g.forceChangeHeight = function(a) {
            Tc(this.getAmpDoc()).forceChangeSize(this.element, a, void 0)
        };
        g.attemptChangeHeight = function(a) {
            return Tc(this.getAmpDoc()).requestChangeSize(this.element, a, void 0)
        };
        g.attemptChangeSize = function(a, b, c) {
            return Tc(this.getAmpDoc()).requestChangeSize(this.element, a, b, void 0, c)
        };
        g.measureElement = function(a) {
            return Tc(this.getAmpDoc()).measureElement(a)
        };
        g.mutateElement = function(a, b) {
            return this.measureMutateElement(null, a, b)
        };
        g.measureMutateElement = function(a, b, c) {
            return Tc(this.getAmpDoc()).measureMutateElement(c || this.element, a, b)
        };
        g.mutateElementSkipRemeasure = function(a) {
            return Tc(this.getAmpDoc()).mutateElement(this.element, a, !0)
        };
        g.collapsedCallback = function() {};
        g.expand = function() {
            Tc(this.getAmpDoc()).expandElement(this.element)
        };
        g.mutatedAttributesCallback = function() {};
        g.onLayoutMeasure = function() {};
        g.onMeasureChanged = function() {};
        g.user = function() {
            return G(this.element)
        };
        var We = {
            PRERENDER: "prerender",
            VISIBLE: "visible",
            HIDDEN: "hidden",
            PAUSED: "paused",
            INACTIVE: "inactive"
        };
        /*

         Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
         Use of this source code is governed by a BSD-style
         license that can be found in the LICENSE file or at
         https://developers.google.com/open-source/licenses/bsd */
        var Xe = {
            "amp-dynamic-css-classes": "[custom-element=amp-dynamic-css-classes]",
            variant: "amp-experiment",
            "amp-story-render": "amp-story[standalone]"
        };

        function Ye(a) {
            var b = Ze(a).map(function(c) {
                var d = Dc(a, c).then(function(e) {
                    return e && "function" == typeof e.whenReady ? e.whenReady().then(function() {
                        return e
                    }) : e
                });
                return R(a).timeoutPromise(3E3, d, "Render timeout waiting for service " + c + " to be ready.")
            });
            return Promise.all(b)
        }

        function Ze(a) {
            var b = a.document;
            return Object.keys(Xe).filter(function(c) {
                return b.querySelector(Xe[c])
            })
        };

        function $e(a, b, c, d, e) {
            var f = a.getHeadNode(),
                h = af(f, bf(f, b), d || !1, e || null);
            if (c) {
                var k = a.getRootNode();
                if (cf(k, h)) c(h);
                else var l = setInterval(function() {
                    cf(k, h) && (clearInterval(l), c(h))
                }, 4)
            }
        }

        function af(a, b, c, d) {
            var e = a.__AMP_CSS_SM;
            e || (e = a.__AMP_CSS_SM = K());
            var f = !c && d && "amp-custom" != d && "amp-keyframes" != d,
                h = c ? "amp-runtime" : f ? "amp-extension=" + d : null;
            if (h) {
                var k = df(a, e, h);
                if (k) return k.textContent !== b && (k.textContent = b), k
            }
            var l = (a.ownerDocument || a).createElement("style");
            l.textContent = b;
            var m = null;
            c ? l.setAttribute("amp-runtime", "") : f ? (l.setAttribute("amp-extension", d || ""), m = df(a, e, "amp-runtime")) : (d && l.setAttribute(d, ""), m = a.lastChild);
            b = m;
            (b = void 0 === b ? null : b) ? a.insertBefore(l, b.nextSibling):
                a.insertBefore(l, a.firstChild);
            h && (e[h] = l);
            return l
        }

        function df(a, b, c) {
            return b[c] ? b[c] : (a = a.querySelector("style[" + c + "]")) ? b[c] = a : null
        }

        function bf(a, b) {
            return (a = a.__AMP_CSS_TR) ? a(b) : b
        }
        var ef = !1;

        function ff() {
            var a = self.document,
                b = a.defaultView;
            Cb(a).then(function() {
                return Ye(b)
            }).catch(function(c) {
                nb(c);
                return []
            }).then(function(c) {
                ef = !0;
                gf(a);
                tc(a).signals().signal("render-start");
                0 < c.length && Uc(a.documentElement).schedulePass(1, !0);
                try {
                    var d = P(b, "performance");
                    d.tick("mbv");
                    d.flush()
                } catch (e) {}
            })
        }

        function hf(a) {
            ef || (ef = !0, gf(a))
        }

        function gf(a) {
            te(a.body, {
                opacity: 1,
                visibility: "visible",
                animation: "none"
            })
        }

        function cf(a, b) {
            var c = a.styleSheets;
            for (a = 0; a < c.length; a++)
                if (c[a].ownerNode == b) return !0;
            return !1
        };

        function jf(a) {
            var b = a.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)$/i);
            return {
                extensionId: b ? b[2] : void 0,
                extensionVersion: b ? b[3] : void 0
            }
        };
        var kf = "html{overflow-x:hidden!important}html.i-amphtml-fie{height:100%!important;width:100%!important}html:not([amp4ads]),html:not([amp4ads]) body{height:auto!important}html:not([amp4ads]) body{margin:0!important}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.i-amphtml-singledoc.i-amphtml-embedded{-ms-touch-action:pan-y;touch-action:pan-y}html.i-amphtml-fie>body,html.i-amphtml-singledoc>body{overflow:visible!important}html.i-amphtml-fie:not(.i-amphtml-inabox)>body,html.i-amphtml-singledoc:not(.i-amphtml-inabox)>body{position:relative!important}html.i-amphtml-webview>body{overflow-x:hidden!important;overflow-y:visible!important;min-height:100vh!important}html.i-amphtml-ios-embed-legacy>body{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important}html.i-amphtml-ios-embed{overflow-y:auto!important;position:static}#i-amphtml-wrapper{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;display:block!important}html.i-amphtml-ios-embed.i-amphtml-ios-overscroll,html.i-amphtml-ios-embed.i-amphtml-ios-overscroll>#i-amphtml-wrapper{-webkit-overflow-scrolling:touch!important}#i-amphtml-wrapper>body{position:relative!important;border-top:1px solid transparent!important}#i-amphtml-wrapper+body{visibility:visible}#i-amphtml-wrapper+body .i-amphtml-lightbox-element,#i-amphtml-wrapper+body[i-amphtml-lightbox]{visibility:hidden}#i-amphtml-wrapper+body[i-amphtml-lightbox] .i-amphtml-lightbox-element{visibility:visible}#i-amphtml-wrapper.i-amphtml-scroll-disabled,.i-amphtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}amp-instagram{padding:54px 0px 0px!important;background-color:#fff}amp-iframe iframe{box-sizing:border-box!important}[amp-access][amp-access-hide]{display:none}[subscriptions-dialog],body:not(.i-amphtml-subs-ready) [subscriptions-action],body:not(.i-amphtml-subs-ready) [subscriptions-section]{display:none!important}amp-experiment,amp-live-list>[update]{display:none}.i-amphtml-jank-meter{position:fixed;background-color:rgba(232,72,95,0.5);bottom:0;right:0;color:#fff;font-size:16px;z-index:1000;padding:5px}amp-list[resizable-children]>.i-amphtml-loading-container.amp-hidden{display:none!important}amp-list [fetch-error],amp-list[load-more] [load-more-button],amp-list[load-more] [load-more-end],amp-list[load-more] [load-more-failed],amp-list[load-more] [load-more-loading]{display:none}amp-list[diffable] div[role=list]{display:block}amp-story-page,amp-story[standalone]{min-height:1px!important;display:block!important;height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;width:100%!important}amp-story[standalone]{background-color:#202125!important;position:relative!important}amp-story-page{background-color:#757575}amp-story .amp-active>div,amp-story .i-amphtml-loader-background{display:none!important}amp-story-page:not(:first-of-type):not([distance]):not([active]){transform:translateY(1000vh)!important}amp-autocomplete{position:relative!important;display:inline-block!important}amp-autocomplete>input,amp-autocomplete>textarea{padding:0.5rem;border:1px solid rgba(0,0,0,0.33)}.i-amphtml-autocomplete-results,amp-autocomplete>input,amp-autocomplete>textarea{font-size:1rem;line-height:1.5rem}[amp-fx^=fly-in]{visibility:hidden}amp-script[nodom]{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}\n/*# sourceURL=/css/ampdoc.css*/";
        var lf = "[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill){display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-for-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/";

        function mf(a, b, c) {
            function d(k) {
                h = null;
                f = a.setTimeout(e, c);
                b.apply(null, k)
            }

            function e() {
                f = 0;
                h && d(h)
            }
            var f = 0,
                h = null;
            return function(k) {
                for (var l = [], m = 0; m < arguments.length; ++m) l[m - 0] = arguments[m];
                f ? h = l : d(l)
            }
        }

        function nf(a, b) {
            function c() {
                d = 0;
                var h = 300 - (a.Date.now() - e);
                if (0 < h) d = a.setTimeout(c, h);
                else {
                    var k = f;
                    f = null;
                    b.apply(null, k)
                }
            }
            var d = 0,
                e = 0,
                f = null;
            return function(h) {
                for (var k = [], l = 0; l < arguments.length; ++l) k[l - 0] = arguments[l];
                e = a.Date.now();
                f = k;
                d || (d = a.setTimeout(c, 300))
            }
        };

        function of (a, b) {
            var c = b.documentElement;
            return a.some(function(d) {
                return c.hasAttribute(d)
            })
        }

        function pf(a) {
            return of(["\u26a14email", "amp4email"], a)
        };

        function qf() {
            var a = rf();
            return function(b) {
                return setTimeout(b, a())
            }
        }

        function rf() {
            var a = 0;
            return function() {
                var b = Math.pow(1.5, a++);
                var c = b * (c || .3) * Math.random();
                .5 < Math.random() && (c *= -1);
                b += c;
                return 1E3 * b
            }
        };

        function sf(a, b) {
            var c = !1;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? !0 : c;
            var d = b,
                e = c;
            Mc(a, "amp-analytics-instrumentation", "amp-analytics").then(function(f) {
                f && f.triggerEventForTarget(a, "user-error", d, e)
            })
        };
        var tf = self.__AMP_ERRORS || [];
        self.__AMP_ERRORS = tf;

        function uf(a) {
            uf = qf();
            return uf(a)
        }

        function vf(a) {
            try {
                return JSON.stringify(a)
            } catch (b) {
                return String(a)
            }
        }
        var wf;

        function xf(a, b) {
            try {
                if (a)
                    if (void 0 !== a.message) a = mb(a);
                    else {
                        var c = a;
                        a = Error(vf(c));
                        a.origError = c
                    }
                else a = Error("Unknown error");
                if (a.reported) return a;
                a.reported = !0;
                var d = b || a.associatedElement;
                d && d.classList && (d.classList.add("i-amphtml-error"), z().development && (d.classList.add("i-amphtml-element-error"), d.setAttribute("error-message", a.message)));
                if (self.console) {
                    var e = console.error || console.log;
                    a.messageArray ? e.apply(console, a.messageArray) : d ? e.call(console, a.message, d) : e.call(console, a.message)
                }
                d &&
                    d.Ba && d.Ba("amp:error", a.message);
                yf.call(self, void 0, void 0, void 0, void 0, a)
            } catch (f) {
                setTimeout(function() {
                    throw f;
                })
            }
            return a
        }

        function zf() {
            return Error("CANCELLED")
        }

        function Af(a) {
            return a ? "string" == typeof a ? a.startsWith("BLOCK_BY_CONSENT") : "string" == typeof a.message ? a.message.startsWith("BLOCK_BY_CONSENT") : !1 : !1
        }

        function Bf() {
            var a = self;
            a.onerror = yf;
            a.addEventListener("unhandledrejection", function(b) {
                !b.reason || "CANCELLED" !== b.reason.message && "BLOCK_BY_CONSENT" !== b.reason.message && "AbortError" !== b.reason.message ? xf(b.reason || Error("rejected promise " + b)) : b.preventDefault()
            })
        }

        function yf(a, b, c, d, e) {
            var f = this;
            !this || !this.document || e && e.expected || hf(this.document);
            if (!z().development) {
                var h = !1;
                try {
                    h = Cf()
                } catch (l) {}
                if (!(h && .01 < Math.random())) {
                    var k = Df(a, b, c, d, e, h);
                    k && uf(function() {
                        try {
                            return Ef(f, k).catch(function() {})
                        } catch (l) {}
                    })
                }
            }
        }

        function Ef(a, b) {
            return b.pt && .9 > Math.random() ? v() : Ff(a, b).then(function(c) {
                if (!c) {
                    var d = new XMLHttpRequest;
                    d.open("POST", .1 > Math.random() ? D.betaErrorReporting : D.errorReporting, !0);
                    d.send(JSON.stringify(b))
                }
            })
        }

        function Ff(a, b) {
            a = Qc(a);
            if (!a.isSingleDoc()) return Promise.resolve(!1);
            var c = a.getSingleDoc();
            if (!c.getRootNode().documentElement.hasAttribute("report-errors-to-viewer")) return Promise.resolve(!1);
            var d = S(c);
            return d.hasCapability("errorReporter") ? d.isTrustedViewer().then(function(e) {
                if (!e) return !1;
                d.sendMessage("error", L({
                    m: b.m,
                    a: b.a,
                    s: b.s,
                    el: b.el,
                    ex: b.ex,
                    v: b.v,
                    pt: b.pt,
                    jse: b.jse
                }));
                return !0
            }) : Promise.resolve(!1)
        }

        function Df(a, b, c, d, e, f) {
            var h = a;
            e && (h = e.message ? e.message : String(e));
            h || (h = "Unknown error");
            a = h;
            var k = !(!e || !e.expected);
            if (!/_reported_/.test(a) && "CANCELLED" != a) {
                var l = !(self && self.window),
                    m = Math.random();
                if (-1 != a.indexOf("Failed to load:") || "Script error." == a || l)
                    if (k = !0, .001 < m) return;
                var p = Za(a);
                if (!(p && .1 < m)) {
                    h = Object.create(null);
                    h.v = z().rtvVersion;
                    h.noAmp = f ? "1" : "0";
                    h.m = a.replace("\u200b\u200b\u200b", "");
                    h.a = p ? "1" : "0";
                    h.ex = k ? "1" : "0";
                    h.dw = l ? "1" : "0";
                    var q = "1p";
                    self.context && self.context.location ?
                        (h["3p"] = "1", q = "3p") : z().runtime && (q = z().runtime);
                    h.rt = q;
                    "inabox" === q && (h.adid = z().a4aId);
                    f = self;
                    h.ca = f.AMP_CONFIG && f.AMP_CONFIG.canary ? "1" : "0";
                    f = self;
                    h.bt = f.AMP_CONFIG && f.AMP_CONFIG.type ? f.AMP_CONFIG.type : "unknown";
                    self.location.ancestorOrigins && self.location.ancestorOrigins[0] && (h.or = self.location.ancestorOrigins[0]);
                    self.viewerState && (h.vs = self.viewerState);
                    self.parent && self.parent != self && (h.iem = "1");
                    if (self.AMP && self.AMP.viewer) {
                        var t = self.AMP.viewer.getResolvedViewerUrl(),
                            w = self.AMP.viewer.maybeGetMessagingOrigin();
                        t && (h.rvu = t);
                        w && (h.mso = w)
                    }
                    wf || (wf = Gf());
                    h.jse = wf;
                    var u = [];
                    f = self.__AMP__EXPERIMENT_TOGGLES || null;
                    for (var r in f) u.push(r + "=" + (f[r] ? "1" : "0"));
                    h.exps = u.join(",");
                    e ? (h.el = e.associatedElement ? e.associatedElement.tagName : "u", e.args && (h.args = JSON.stringify(e.args)), p || e.ignoreStack || !e.stack || (h.s = e.stack), e.message && (e.message += " _reported_")) : (h.f = b || "", h.l = c || "", h.c = d || "");
                    h.r = self.document ? self.document.referrer : "";
                    h.ae = tf.join(",");
                    h.fr = self.location.originalHash || self.location.hash;
                    "production" ===
                    h.bt && (h.pt = "1");
                    b = a;
                    25 <= tf.length && tf.splice(0, tf.length - 25 + 1);
                    tf.push(b);
                    return h
                }
            }
        }

        function Cf() {
            var a = self;
            if (!a.document) return !1;
            a = a.document.querySelectorAll("script[src]");
            for (var b = 0; b < a.length; b++)
                if (!V(a[b].src.toLowerCase())) return !0;
            return !1
        }

        function Gf() {
            function a() {}
            a.prototype.t = function() {
                throw Error("message");
            };
            var b = new a;
            try {
                b.t()
            } catch (d) {
                b = d.stack;
                if (b.startsWith("t@")) return "Safari";
                if (-1 < b.indexOf(".prototype.t@")) return "Firefox";
                var c = b.split("\n").pop();
                if (/\bat .* \(/i.test(c)) return "IE";
                if (b.startsWith("Error: message")) return "Chrome"
            }
            return "unknown"
        };
        var Hf = "__AMP_ACTION_MAP__" + Math.random(),
            If = {
                form: ["submit", "clear"]
            },
            Jf = [{
                tagOrTarget: "AMP",
                method: "setState"
            }, {
                tagOrTarget: "*",
                method: "focus"
            }, {
                tagOrTarget: "*",
                method: "hide"
            }, {
                tagOrTarget: "*",
                method: "show"
            }, {
                tagOrTarget: "*",
                method: "toggleClass"
            }, {
                tagOrTarget: "*",
                method: "toggleVisibility"
            }],
            Kf = {
                button: !0,
                checkbox: !0,
                link: !0,
                listbox: !0,
                menuitem: !0,
                menuitemcheckbox: !0,
                menuitemradio: !0,
                option: !0,
                radio: !0,
                scrollbar: !0,
                slider: !0,
                spinbutton: !0,
                "switch": !0,
                tab: !0,
                treeitem: !0
            };

        function Lf(a, b, c, d, e, f, h, k, l, m) {
            k = void 0 === k ? "?" : k;
            l = void 0 === l ? null : l;
            m = void 0 === m ? Math.random() : m;
            var p = k,
                q = l,
                t = m;
            this.node = a;
            this.method = b;
            this.args = c;
            this.source = d;
            this.caller = e;
            this.event = f;
            this.trust = h;
            this.actionEventType = p;
            this.tagOrTarget = q || a.tagName;
            this.sequenceId = t
        }
        Lf.prototype.satisfiesTrust = function(a) {
            if (!Ta(this.trust)) return H().error("Action", "Invalid trust for '" + this.method + "': " + this.trust), !1;
            if (this.trust < a) {
                a: switch (this.trust) {
                    case 1:
                        var b = "low";
                        break a;
                    case 3:
                        b = "high";
                        break a;
                    default:
                        b = "default"
                }
                G().error("Action", '"' + this.actionEventType + '" event with "' + b + '" trust is not allowed to invoke "' + (this.tagOrTarget.toLowerCase() + "." + this.method + '".'));
                return !1
            }
            return !0
        };

        function Mf(a, b) {
            this.ampdoc = a;
            this.V = b || a.getRootNode();
            this.ha = (this.qf = this.ampdoc.isSingleDoc() && pf(this.V)) ? Jf : null;
            this.Cd = K();
            this.ff = K();
            this.addEvent("tap");
            this.addEvent("submit");
            this.addEvent("change");
            this.addEvent("input-debounced");
            this.addEvent("input-throttled");
            this.addEvent("valid");
            this.addEvent("invalid")
        }
        g = Mf.prototype;
        g.addEvent = function(a) {
            var b = this;
            if ("tap" == a) this.V.addEventListener("click", function(e) {
                e.defaultPrevented || b.trigger(e.target, a, e, 3)
            }), this.V.addEventListener("keydown", function(e) {
                var f = e.key,
                    h = e.target;
                if ("Enter" == f || " " == f) {
                    var k = h.getAttribute("role");
                    if (f = k) f = k.toLowerCase(), f = rb.call(Kf, f);
                    var l = f;
                    !e.defaultPrevented && l && b.trigger(h, a, e, 3) && e.preventDefault()
                }
            });
            else if ("submit" == a) this.V.addEventListener(a, function(e) {
                b.trigger(e.target, a, e, 3)
            });
            else if ("change" == a) this.V.addEventListener(a,
                function(e) {
                    var f = e.target;
                    Nf(e);
                    b.trigger(f, a, e, 3)
                });
            else if ("input-debounced" == a) {
                var c = nf(this.ampdoc.win, function(e) {
                    b.trigger(e.target, a, e, 3)
                });
                this.V.addEventListener("input", function(e) {
                    var f = new Of(e);
                    Nf(f);
                    c(f)
                })
            } else if ("input-throttled" == a) {
                var d = mf(this.ampdoc.win, function(e) {
                    b.trigger(e.target, a, e, 3)
                }, 100);
                this.V.addEventListener("input", function(e) {
                    e = new Of(e);
                    Nf(e);
                    d(e)
                })
            } else "valid" != a && "invalid" != a || this.V.addEventListener(a, function(e) {
                b.trigger(e.target, a, e, 3)
            })
        };
        g.addGlobalTarget = function(a, b) {
            this.Cd[a] = b
        };
        g.addGlobalMethodHandler = function(a, b, c) {
            this.ff[a] = {
                handler: b,
                minTrust: void 0 === c ? 2 : c
            }
        };
        g.trigger = function(a, b, c, d, e) {
            return Pf(this, a, b, c, d, e)
        };
        g.execute = function(a, b, c, d, e, f, h) {
            a = new Lf(a, b, c, d, e, f, h);
            Qf(this, a)
        };
        g.installActionHandler = function(a, b) {
            "amp-" === (a.getAttribute("id") || "").substring(0, 4) || a.tagName.toLowerCase();
            if (a.__AMP_ACTION_HANDLER__) H().error("Action", "Action handler already installed for " + a);
            else {
                a.__AMP_ACTION_HANDLER__ = b;
                var c = a.__AMP_ACTION_QUEUE__;
                A(c) && R(a.ownerDocument.defaultView).delay(function() {
                    c.forEach(function(d) {
                        try {
                            b(d)
                        } catch (e) {
                            H().error("Action", "Action execution failed:", d, e)
                        }
                    });
                    a.__AMP_ACTION_QUEUE__.length = 0
                }, 1)
            }
        };
        g.hasAction = function(a, b, c) {
            return !!Rf(a, b, c)
        };
        g.hasResolvableAction = function(a, b, c) {
            var d = this,
                e = Rf(a, b, c);
            return e ? e.actionInfos.some(function(f) {
                return !!Sf(d, f.target)
            }) : !1
        };
        g.hasResolvableActionForTarget = function(a, b, c, d) {
            var e = this;
            return (a = Rf(a, b, d)) ? a.actionInfos.some(function(f) {
                return Sf(e, f.target) == c
            }) : !1
        };

        function Sf(a, b) {
            return a.Cd[b] ? a.V : a.V.getElementById(b)
        }
        g.setAllowlist = function(a) {
            a.every(function(b) {
                return b.tagOrTarget && b.method
            });
            this.ha = a
        };
        g.addToAllowlist = function(a, b, c) {
            var d = this;
            c && c.includes("email") !== this.qf || (this.ha || (this.ha = []), A(b) || (b = [b]), b.forEach(function(e) {
                d.ha.some(function(f) {
                    return f.tagOrTarget == a && f.method == e
                }) || d.ha.push({
                    tagOrTarget: a,
                    method: e
                })
            }))
        };

        function Pf(a, b, c, d, e, f) {
            var h = Rf(b, c);
            if (!h) return !1;
            var k = Math.random(),
                l = null;
            h.actionInfos.forEach(function(m) {
                function p() {
                    var r = Sf(a, q);
                    if (r) return r = new Lf(r, t, u, b, h.node, d, e, c, r.tagName || q, k), Qf(a, r);
                    a.La('Target "' + q + '" not found for action [' + w + "].")
                }
                var q = m.target,
                    t = m.method,
                    w = m.str,
                    u = Tf(m.args, d, f);
                l = l ? l.then(p) : p()
            });
            return 1 <= h.actionInfos.length
        }
        g.La = function(a, b) {
            if (b) throw a = G().createError("[Action] " + a), xf(a, b), a;
            G().error("Action", a)
        };

        function Qf(a, b) {
            var c = b.method,
                d = b.tagOrTarget;
            if (a.ha && !Uf(b, a.ha)) return a.La('"' + d + "." + c + '" is not allowlisted ' + JSON.stringify(a.ha) + "."), null;
            var e = a.Cd[d];
            if (e) return e(b);
            var f = b.node,
                h = a.ff[c];
            if (h && b.satisfiesTrust(h.minTrust)) return h.handler(b);
            var k = f.tagName.toLowerCase();
            if ("amp-" === k.substring(0, 4)) return f.enqueAction ? f.enqueAction(b) : a.La('Unrecognized AMP element "' + k + '".', f), null;
            var l = If[k];
            if ("amp-" === (f.getAttribute("id") || "").substring(0, 4) || l && -1 < l.indexOf(c)) return (a = f.__AMP_ACTION_HANDLER__) ?
                a(b) : (f.__AMP_ACTION_QUEUE__ = f.__AMP_ACTION_QUEUE__ || [], f.__AMP_ACTION_QUEUE__.push(b)), null;
            a.La("Target (" + d + ") doesn't support \"" + c + '" action.', b.caller);
            return null
        }

        function Rf(a, b, c) {
            for (; a && (!c || a != c);) {
                var d = b;
                var e = a;
                var f = d,
                    h = e[Hf];
                void 0 === h && (h = null, e.hasAttribute("on") ? (f = e.getAttribute("on"), h = Vf(f, e), e[Hf] = h) : e.hasAttribute("execute") && (h = e.getAttribute("execute"), h = Vf(f + ":" + h, e), e[Hf] = h));
                var k = (e = h) ? e[d] || null : null;
                if (k && !a.disabled && !Jb(a, ":disabled")) return {
                    node: a,
                    actionInfos: k
                };
                a = a.parentElement
            }
            return null
        }
        g.setActions = function(a, b) {
            a.setAttribute("on", b);
            delete a[Hf]
        };

        function Nf(a) {
            var b = K(),
                c = a.target;
            void 0 !== c.value && (b.value = c.value);
            "INPUT" == c.tagName && (b.valueAsNumber = Number(c.value));
            void 0 !== c.checked && (b.checked = c.checked);
            if (void 0 !== c.min || void 0 !== c.max) b.min = c.min, b.max = c.max;
            c.files && (b.files = Ra(c.files).map(function(d) {
                return {
                    name: d.name,
                    size: d.size,
                    type: d.type
                }
            }));
            if (0 < Object.keys(b).length) try {
                a.detail = b
            } catch (d) {}
        }

        function Uf(a, b) {
            var c = a.method,
                d = a.node;
            a = a.tagOrTarget;
            "activate" === c && "function" == typeof d.getDefaultActionAlias && (c = d.getDefaultActionAlias());
            var e = c.toLowerCase(),
                f = a.toLowerCase();
            return b.some(function(h) {
                return h.tagOrTarget.toLowerCase() !== f && "*" !== h.tagOrTarget || h.method.toLowerCase() !== e ? !1 : !0
            })
        }

        function Of(a) {
            this.detail = null;
            var b = this || K(),
                c;
            for (c in a) b[c] = "function" === typeof a[c] ? Wf : a[c]
        }

        function Wf() {}

        function Vf(a, b) {
            var c = Xf.bind(null, a, b),
                d = Yf.bind(null, a, b);
            b = null;
            var e = new Zf(a);
            do {
                var f = e.next();
                if (f.type != $f && (f.type != ag || ";" != f.value))
                    if (f.type == bg || f.type == cg) {
                        var h = f.value;
                        d(e.next(), [ag], ":");
                        var k = [];
                        do {
                            var l = d(e.next(), [bg, cg]).value,
                                m = "activate",
                                p = null;
                            var q = e.peek();
                            if (q.type == ag && "." == q.value && (e.next(), m = d(e.next(), [bg, cg]).value || m, q = e.peek(), q.type == ag && "(" == q.value)) {
                                e.next();
                                p = e;
                                var t = d,
                                    w = c,
                                    u = p.peek(),
                                    r = null;
                                if (u.type == dg) {
                                    r = K();
                                    var y = p.next().value;
                                    r.__AMP_OBJECT_STRING__ =
                                        y;
                                    t(p.next(), [ag], ")")
                                } else {
                                    do {
                                        var F = y = p.next();
                                        u = F.type;
                                        F = F.value;
                                        if (u != ag || "," != F && ")" != F)
                                            if (u == bg || u == cg) {
                                                t(p.next(), [ag], "=");
                                                y = t(p.next(!0), [bg, cg]);
                                                var sa = [y];
                                                if (y.type == cg)
                                                    for (u = p.peek(); u.type == ag && "." == u.value; u = p.peek()) p.next(), y = t(p.next(!1), [cg]), sa.push(y);
                                                u = eg(sa);
                                                r || (r = K());
                                                r[F] = u;
                                                u = p.peek();
                                                w(u.type == ag && ("," == u.value || ")" == u.value), "Expected either [,] or [)]")
                                            } else w(!1, "; unexpected token [" + (y.value || "") + "]")
                                    } while (y.type != ag || ")" != y.value)
                                }
                                p = r
                            }
                            k.push({
                                event: h,
                                target: l,
                                method: m,
                                args: p,
                                str: a
                            });
                            q = e.peek()
                        } while (q.type == ag && "," == q.value && e.next());
                        b || (b = K());
                        b[h] = k
                    } else c(!1, "; unexpected token [" + (f.value || "") + "]")
            } while (f.type != $f);
            return b
        }

        function eg(a) {
            return 0 == a.length ? null : 1 == a.length ? a[0].value : {
                expression: a.map(function(b) {
                    return b.value
                }).join(".")
            }
        }

        function Tf(a, b, c) {
            if (!a) return a;
            var d = c || L({});
            b && (b = b.detail) && (d.event = b);
            var e = K();
            Object.keys(a).forEach(function(f) {
                var h = a[f];
                if ("object" == typeof h && h.expression) {
                    h = h.expression;
                    if ("." == h) h = d;
                    else {
                        h = h.split(".");
                        for (var k = d, l = 0; l < h.length; l++) {
                            var m = h[l];
                            if (m && k && void 0 !== k[m] && Wb(k, m)) k = k[m];
                            else {
                                k = void 0;
                                break
                            }
                        }
                        h = k
                    }
                    var p = h;
                    h = void 0 === p ? null : p
                }
                e[f] = d[h] ? d[h] : h
            });
            return e
        }

        function Xf(a, b, c, d) {
            return J(c, "Invalid action definition in %s: [%s] %s", b, a, d || "")
        }

        function Yf(a, b, c, d, e) {
            void 0 !== e ? Xf(a, b, d.includes(c.type) && c.value == e, "; expected [" + e + "]") : Xf(a, b, d.includes(c.type));
            return c
        }
        var $f = 1,
            ag = 2,
            bg = 3,
            cg = 4,
            dg = 5;

        function Zf(a) {
            this.M = a;
            this.Gd = -1
        }
        Zf.prototype.next = function(a) {
            var b = fg(this, a || !1);
            this.Gd = b.index;
            return b
        };
        Zf.prototype.peek = function(a) {
            return fg(this, a || !1)
        };

        function fg(a, b) {
            var c = a.Gd + 1;
            if (c >= a.M.length) return {
                type: $f,
                index: a.Gd
            };
            var d = a.M.charAt(c);
            if (-1 != " \t\n\r\f\v\u00a0\u2028\u2029".indexOf(d)) {
                for (c++; c < a.M.length && -1 != " \t\n\r\f\v\u00a0\u2028\u2029".indexOf(a.M.charAt(c)); c++);
                if (c >= a.M.length) return {
                    type: $f,
                    index: c
                };
                d = a.M.charAt(c)
            }
            if (b && (gg(d) || "." == d && c + 1 < a.M.length && gg(a.M[c + 1]))) {
                for (var e = "." == d, f = c + 1; f < a.M.length; f++) {
                    var h = a.M.charAt(f);
                    if ("." == h) e = !0;
                    else if (!gg(h)) break
                }
                a = a.M.substring(c, f);
                a = e ? parseFloat(a) : parseInt(a, 10);
                c = f - 1;
                return {
                    type: bg,
                    value: a,
                    index: c
                }
            }
            if (-1 != ";:.()=,|!".indexOf(d)) return {
                type: ag,
                value: d,
                index: c
            };
            if (-1 != "\"'".indexOf(d)) {
                f = -1;
                for (var k = c + 1; k < a.M.length; k++)
                    if (a.M.charAt(k) == d) {
                        f = k;
                        break
                    }
                if (-1 == f) return {
                    type: 0,
                    index: c
                };
                a = a.M.substring(c + 1, f);
                c = f;
                return {
                    type: bg,
                    value: a,
                    index: c
                }
            }
            if ("{" == d) {
                var l = 1;
                f = -1;
                for (d = c + 1; d < a.M.length; d++) {
                    var m = a.M[d];
                    "{" == m ? l++ : "}" == m && l--;
                    if (0 >= l) {
                        f = d;
                        break
                    }
                }
                if (-1 == f) return {
                    type: 0,
                    index: c
                };
                a = a.M.substring(c, f + 1);
                c = f;
                return {
                    type: dg,
                    value: a,
                    index: c
                }
            }
            for (f = c + 1; f < a.M.length && -1 == " \t\n\r\f\x0B\u00a0\u2028\u2029;:.()=,|!\"'{}".indexOf(a.M.charAt(f)); f++);
            a = a.M.substring(c, f);
            c = f - 1;
            return !b || "true" != a && "false" != a ? gg(a.charAt(0)) ? {
                type: bg,
                value: a,
                index: c
            } : {
                type: cg,
                value: a,
                index: c
            } : {
                type: bg,
                value: "true" == a,
                index: c
            }
        }

        function gg(a) {
            return "0" <= a && "9" >= a
        };

        function hg(a, b) {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a[e];
                b(f, e, a) ? c.push(f) : (d < e && (a[d] = f), d++)
            }
            d < a.length && (a.length = d)
        }

        function ig(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b(a[c], c, a)) return c;
            return -1
        };

        function jg(a) {
            return !!a && "function" == typeof a.getFormData
        };
        var kg = ["GET", "POST"],
            lg = [A, Sa];

        function mg(a, b) {
            var c = Object.assign({}, b);
            if (jg(b.body)) {
                var d = b.body;
                c.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
                b = d.entries();
                for (var e = [], f = b.next(); !f.done; f = b.next()) e.push(f.value);
                c.body = e
            }
            return {
                input: a,
                init: c
            }
        }

        function ng(a, b) {
            J(Sa(a), "Object expected: %s", a);
            if ("document" != b) return new Response(a.body, a.init);
            var c = K(),
                d = {
                    status: 200,
                    statusText: "OK",
                    getResponseHeader: function(f) {
                        return c[String(f).toLowerCase()] || null
                    }
                };
            if (a.init) {
                var e = a.init;
                A(e.headers) && e.headers.forEach(function(f) {
                    var h = f[1];
                    c[String(f[0]).toLowerCase()] = String(h)
                });
                e.status && (d.status = parseInt(e.status, 10));
                e.statusText && (d.statusText = String(e.statusText))
            }
            return new Response(a.body ? String(a.body) : "", d)
        }

        function og(a, b, c, d) {
            if (!b) return v();
            var e = d.prerenderSafe ? v() : b.whenFirstVisible(),
                f = S(b),
                h = V(c),
                k = f.hasCapability("xhrInterceptor"),
                l = d.bypassInterceptorForDev && !1;
            return h || !k || l || !b.getRootNode().documentElement.hasAttribute("allow-xhr-interception") ? e : e.then(function() {
                return f.isTrustedViewer()
            }).then(function(m) {
                if (m || W(a, "untrusted-xhr-interception")) {
                    var p = L({
                        originalRequest: mg(c, d)
                    });
                    return f.sendMessageAwaitResponse("xhr", p).then(function(q) {
                        return ng(q, d.responseType)
                    })
                }
            })
        }

        function pg(a, b, c) {
            !1 !== c.ampCors && (b = ie(a, b));
            return b
        }

        function qg(a, b) {
            a = a || {};
            var c = a.method;
            void 0 === c ? c = "GET" : (c = c.toUpperCase(), kg.includes(c));
            a.method = c;
            a.headers = a.headers || L({});
            b && (a.headers.Accept = b);
            return a
        }

        function rg(a, b, c) {
            c = c || {};
            var d = a.origin || U(a.location.href).origin;
            a = U(b).origin;
            d == a && (c.headers = c.headers || {}, c.headers["AMP-Same-Origin"] = "true");
            return c
        }

        function sg(a) {
            var b = qg(a, "application/json");
            "POST" != b.method || jg(b.body) || (lg.some(function(c) {
                return c(b.body)
            }), b.headers["Content-Type"] = b.headers["Content-Type"] || "text/plain;charset=utf-8", b.body = "application/x-www-form-urlencoded" === b.headers["Content-Type"] ? Zd(b.body) : JSON.stringify(b.body));
            return b
        }

        function tg(a) {
            return new Promise(function(b) {
                if (a.ok) return b(a);
                b = a.status;
                var c = G().createError("HTTP error " + b);
                c.retriable = 415 == b || 500 <= b && 600 > b;
                c.response = a;
                throw c;
            })
        };

        function ug(a) {
            this.win = a;
            a = Qc(a);
            this.eg = a.isSingleDoc() ? a.getSingleDoc() : null
        }
        g = ug.prototype;
        g.xg = function(a, b) {
            var c = arguments,
                d = this;
            return og(this.win, this.eg, a, b).then(function(e) {
                if (e) return e;
                jg(b.body) && (b.body = b.body.getFormData());
                return d.win.fetch.apply(null, c)
            })
        };

        function vg(a, b, c) {
            c = void 0 === c ? {} : c;
            b = pg(a.win, b, c);
            c = rg(a.win, b, c);
            return a.xg(b, c).then(function(d) {
                return d
            }, function(d) {
                var e = U(b).origin;
                throw G().createExpectedError("XHR", "Failed fetching (" + e + "/...):", d && d.message);
            })
        }
        g.fetchJson = function(a, b) {
            return this.fetch(a, sg(b))
        };
        g.fetchText = function(a, b) {
            return this.fetch(a, qg(b, "text/plain"))
        };
        g.xssiJson = function(a, b) {
            return b ? a.text().then(function(c) {
                return c.startsWith(b) ? Xb(c.slice(b.length)) : (G().warn("XHR", 'Failed to strip missing prefix "' + b + '" in fetch response.'), Xb(c))
            }) : a.json()
        };
        g.fetch = function(a, b) {
            b = qg(b);
            return vg(this, a, b).then(function(c) {
                return tg(c)
            })
        };
        g.sendSignal = function(a, b) {
            return vg(this, a, b).then(function(c) {
                return tg(c)
            })
        };
        g.getCorsUrl = function(a, b) {
            return ie(a, b)
        };

        function wg(a) {
            ug.call(this, a);
            this.yb = K()
        }
        n(wg, ug);
        wg.prototype.fetch = function(a, b) {
            var c = this,
                d = !b || !b.method || "GET" === b.method,
                e = xg(this, a, b && b.headers && b.headers.Accept || ""),
                f = !!this.yb[e];
            if (d && f) return this.yb[e].then(function(k) {
                return k.clone()
            });
            var h = ug.prototype.fetch.call(this, a, b);
            d && (this.yb[e] = h.then(function(k) {
                delete c.yb[e];
                return k.clone()
            }, function(k) {
                delete c.yb[e];
                throw k;
            }));
            return h
        };

        function xg(a, b, c) {
            var d = he(b, ge(a.win.location));
            return be(d) + c
        };

        function yg(a) {
            this.B = a;
            this.j = S(this.B);
            this.he = null;
            this.O = R(this.B.win)
        }
        yg.prototype.isSupported = function() {
            return this.j.isCctEmbedded() && this.j.isProxyOrigin()
        };
        yg.prototype.getScopedCid = function(a) {
            var b = this;
            if (!this.j.isCctEmbedded()) return Promise.resolve(null);
            this.he || (this.he = this.xb("https://ampcid.google.com/v1/cache:getClientId?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc"));
            return this.he.then(function(c) {
                return c ? zg(b, c, a) : null
            })
        };
        yg.prototype.xb = function(a, b) {
            var c = this,
                d = b = void 0 === b ? !0 : b,
                e = L({
                    publisherOrigin: ge(this.B.win.location)
                });
            return this.O.timeoutPromise(3E4, P(this.B.win, "xhr").fetchJson(a, {
                method: "POST",
                ampCors: !1,
                credentials: "include",
                mode: "cors",
                body: e
            }), "fetchCidTimeout").then(function(f) {
                return f.json().then(function(h) {
                    if (h.optOut) return null;
                    var k = h.publisherClientId;
                    return !k && d && h.alternateUrl ? c.xb(h.alternateUrl + "?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc", !1) : k
                })
            }).catch(function(f) {
                f && f.response ? f.response.json().then(function(h) {
                    H().error("CacheCidApi",
                        JSON.stringify(h))
                }) : f && "fetchCidTimeout" == f.message ? H().expectedError("CacheCidApi", f) : H().error("CacheCidApi", f);
                return null
            })
        };

        function zg(a, b, c) {
            b = b + ";" + c;
            return P(a.B.win, "crypto").sha384Base64(b).then(function(d) {
                return "amp-" + d
            })
        };

        function Ag(a, b) {
            var c = Bg(a);
            if (!c) return null;
            var d = c.split(";");
            for (a = 0; a < d.length; a++) {
                var e = d[a].trim(),
                    f = e.indexOf("="),
                    h;
                if (h = -1 != f) h = e.substring(0, f).trim(), h = Na(h, void 0) == b;
                if (h) return b = e.substring(f + 1).trim(), Na(b, b)
            }
            return null
        }

        function Bg(a) {
            try {
                return a.document.cookie
            } catch (b) {
                return ""
            }
        }

        function Cg(a, b, c, d) {
            var e = {
                    highestAvailableDomain: !0
                },
                f = e = void 0 === e ? {} : e;
            if (f.allowOnProxyOrigin) J(!f.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
            else {
                J(!V(a.location.href), "Should never attempt to set cookie on proxy origin: " + b);
                e = U(a.location.href).hostname.toLowerCase();
                var h = U(D.cdn).hostname.toLowerCase();
                J(!(e == h || xb(e, "." + h)), "Should never attempt to set cookie on proxy origin. (in depth check): " + b)
            }
            e = void 0;
            if (f.domain) e =
                f.domain;
            else if (f.highestAvailableDomain) a: if (e = a.document.head && a.document.head.querySelector("meta[name='amp-cookie-scope']")) e = e.getAttribute("content") || "", h = ge(a.location.href), e = xb(h, "." + e) ? e : h.split("://")[1];
                else {
                    if (!V(a.location.href)) {
                        e = a.location.hostname.split(".");
                        h = e[e.length - 1];
                        var k;
                        for (k = "-test-amp-cookie-tmp"; Ag(a, k);) k = "-test-amp-cookie-tmp0";
                        for (var l = e.length - 2; 0 <= l; l--)
                            if (h = e[l] + "." + h, Dg(a, k, "delete", Date.now() + 1E3, h), "delete" == Ag(a, k)) {
                                Dg(a, k, "delete", Date.now() - 1E3, h);
                                e = h;
                                break a
                            }
                    }
                    e = null
                }
            Dg(a, b, c, d, e, f.sameSite, f.secure)
        }

        function Dg(a, b, c, d, e, f, h) {
            "ampproject.org" == e && (c = "delete", d = 0);
            b = encodeURIComponent(b) + "=" + encodeURIComponent(c) + "; path=/" + (e ? "; domain=" + e : "") + "; expires=" + (new Date(d)).toUTCString() + (f ? "; SameSite=" + f : "") + (h ? "; Secure" : "");
            try {
                a.document.cookie = b
            } catch (k) {}
        };

        function Eg(a) {
            this.A = a.win;
            this.O = R(this.A);
            this.rd = {};
            var b = Rc(a).canonicalUrl;
            this.qd = b ? U(b).origin : null
        }
        Eg.prototype.getScopedCid = function(a, b) {
            var c = this;
            if (this.rd[b]) return this.rd[b];
            var d;
            return this.rd[b] = this.O.poll(200, function() {
                d = Ag(c.A, "AMP_TOKEN");
                return "$RETRIEVING" !== d
            }).then(function() {
                if ("$OPT_OUT" === d) return "$OPT_OUT";
                if (("$NOT_FOUND" !== d || !V(c.A.document.referrer)) && d && "$" === d[0]) return null;
                d && (!d || "$" !== d[0]) || Fg(c, "$RETRIEVING", 3E4);
                return c.xb("https://ampcid.google.com/v1/publisher:getClientId?key=" + a, b, d).then(function(e) {
                    var f = c.hf(e);
                    return !f && e.alternateUrl ? c.xb(e.alternateUrl +
                        "?key=" + a, b, d).then(c.hf.bind(c)) : f
                }).catch(function(e) {
                    Fg(c, "$ERROR", 3E4);
                    e && e.response ? e.response.json().then(function(f) {
                        H().error("GoogleCidApi", JSON.stringify(f))
                    }) : H().error("GoogleCidApi", e);
                    return null
                })
            })
        };
        Eg.prototype.xb = function(a, b, c) {
            b = L({
                originScope: b,
                canonicalOrigin: this.qd
            });
            c && (b.securityToken = c);
            return this.O.timeoutPromise(3E4, P(this.A, "xhr").fetchJson(a, {
                method: "POST",
                ampCors: !1,
                credentials: "include",
                mode: "cors",
                body: b
            }).then(function(d) {
                return d.json()
            }))
        };
        Eg.prototype.hf = function(a) {
            if (a.optOut) return Fg(this, "$OPT_OUT", 31536E6), "$OPT_OUT";
            if (a.clientId) return Fg(this, a.securityToken, 31536E6), a.clientId;
            if (a.alternateUrl) return null;
            Fg(this, "$NOT_FOUND", 36E5);
            return null
        };

        function Fg(a, b, c) {
            if (b) {
                var d = a.A;
                a = a.A.Date.now() + c;
                Cg(d, "AMP_TOKEN", b, a)
            }
        };

        function Gg(a) {
            this.B = a;
            this.j = S(this.B);
            this.qd = (a = Rc(this.B).canonicalUrl) ? U(a).origin : null
        }
        Gg.prototype.isSupported = function() {
            return this.j.hasCapability("cid") ? this.j.isTrustedViewer() : Promise.resolve(!1)
        };
        Gg.prototype.getScopedCid = function(a, b) {
            b = L({
                scope: b,
                clientIdApi: !!a,
                canonicalOrigin: this.qd
            });
            a && (b.apiKey = a);
            return this.j.sendMessageAwaitResponse("cid", b)
        };
        var Hg = {
            "+": "-",
            "/": "_",
            "=": "."
        };

        function Ig(a) {
            a = $b(a);
            return btoa(a).replace(/[+/=]/g, function(b) {
                return Hg[b]
            })
        };
        var Jg = /^[a-zA-Z0-9-_.]+$/,
            Kg = {
                googleanalytics: "AMP_ECID_GOOGLE"
            },
            Lg = {
                googleanalytics: "AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM"
            };

        function Mg(a) {
            this.ampdoc = a;
            this.fd = null;
            this.zd = Object.create(null);
            this.Oe = new yg(a);
            this.bg = new Gg(a);
            this.pg = new Eg(a);
            this.ed = null;
            this.isBackupCidExpOn = W(this.ampdoc.win, "amp-cid-backup")
        }
        Mg.prototype.get = function(a, b, c) {
            var d = this;
            J(Jg.test(a.scope) && Jg.test(a.cookieName), "The CID scope and cookie name must only use the characters [a-zA-Z0-9-_.]+\nInstead found: %s", a.scope);
            return b.then(function() {
                return d.ampdoc.whenFirstVisible()
            }).then(function() {
                return Ng(d.ampdoc)
            }).then(function(e) {
                if (e) return "";
                var f = Og(d, a, c || b);
                return R(d.ampdoc.win).timeoutPromise(1E4, f, 'Getting cid for "' + a.scope + '" timed out').catch(function(h) {
                    nb(h)
                })
            })
        };
        Mg.prototype.optOut = function() {
            return Pg(this.ampdoc)
        };

        function Og(a, b, c) {
            var d = b.scope,
                e = U(a.ampdoc.win.location.href);
            if (!V(e)) {
                var f = Qg(a, d);
                return f ? a.pg.getScopedCid(f, d).then(function(h) {
                    return "$OPT_OUT" == h ? null : h ? (Rg(a.ampdoc.win, b.cookieName || d, h), h) : Sg(a, b, c)
                }) : Sg(a, b, c)
            }
            return a.bg.isSupported().then(function(h) {
                if (h) {
                    var k = Qg(a, d);
                    return a.bg.getScopedCid(k, d)
                }
                return a.Oe.isSupported() && Qg(a, d) ? a.Oe.getScopedCid(d).then(function(l) {
                    return l ? l : Tg(a, c, d, e)
                }) : Tg(a, c, d, e)
            })
        }

        function Tg(a, b, c, d) {
            return Ug(a, b).then(function(e) {
                return P(a.ampdoc.win, "crypto").sha384Base64(e + Vg(d) + c)
            })
        }

        function Qg(a, b) {
            a.ed || (a.ed = Wg(a));
            return a.ed[b]
        }

        function Wg(a) {
            var b = {},
                c = a.ampdoc.getMetaByName("amp-google-client-id-api");
            c && c.split(",").forEach(function(d) {
                d = d.trim();
                if (0 < d.indexOf("=")) {
                    var e = d.split("=");
                    d = e[0].trim();
                    b[d] = e[1].trim()
                } else {
                    var f = d;
                    (d = Kg[f]) ? b[d] = Lg[f]: G().warn("CID", "Unsupported client for Google CID API: " + f + '.Please remove or correct meta[name="amp-google-client-id-api"]')
                }
            });
            return b
        }

        function Pg(a) {
            S(a).sendMessage("cidOptOut", {});
            return Cc(a, "storage").then(function(b) {
                return b.set("amp-cid-optout", !0)
            })
        }

        function Ng(a) {
            return Cc(a, "storage").then(function(b) {
                return b.get("amp-cid-optout").then(function(c) {
                    return !!c
                })
            }).catch(function() {
                return !1
            })
        }

        function Rg(a, b, c) {
            var d = Date.now() + 31536E6;
            Cg(a, b, c, d)
        }

        function Xg(a, b, c) {
            Cc(a, "storage").then(function(d) {
                d.isViewerStorage() || d.setNonBoolean("amp-cid:" + b, c)
            })
        }

        function Yg(a, b) {
            var c = a.ampdoc,
                d = a.isBackupCidExpOn,
                e = b.disableBackup;
            a = b.scope;
            var f = b.cookieName || a,
                h = Ag(c.win, f);
            return h ? Promise.resolve(h) : d && !e ? Cc(c, "storage").then(function(k) {
                return k.get("amp-cid:" + f, 31536E6)
            }).then(function(k) {
                return k && "string" == typeof k ? k : null
            }) : Promise.resolve(null)
        }

        function Sg(a, b, c) {
            var d = a.isBackupCidExpOn,
                e = a.ampdoc,
                f = e.win,
                h = b.scope,
                k = b.disableBackup,
                l = b.cookieName || h;
            return Yg(a, b).then(function(m) {
                if (!m && !b.createCookieIfNotPresent) return Promise.resolve(null);
                if (m) return /^amp-/.test(m) && (Rg(f, l, m), d && !k && Xg(e, l, m)), Promise.resolve(m);
                if (a.zd[h]) return a.zd[h];
                var p = Zg(f).then(function(q) {
                    return "amp-" + q
                });
                Promise.all([p, c]).then(function(q) {
                    var t = q[0];
                    Ag(f, l) || (Rg(f, l, t), d && !k && Xg(e, l, t))
                });
                return a.zd[h] = p
            })
        }

        function Vg(a) {
            J(V(a), "Expected proxy origin %s", a.origin);
            return ge(a)
        }

        function Ug(a, b) {
            if (a.fd) return a.fd;
            var c = a.ampdoc.win;
            return a.fd = $g(a.ampdoc).then(function(d) {
                var e = !1;
                if (d && !ah(d)) {
                    var f = Promise.resolve(d.cid);
                    bh(d) && (e = !0)
                } else f = P(c, "crypto").sha384Base64(ch(c)), e = !0;
                e && f.then(function(h) {
                    dh(a.ampdoc, b, h)
                });
                return f
            })
        }

        function dh(a, b, c) {
            var d = a.win;
            Tb(d) ? eh(a, fh(c)) : b.then(function() {
                try {
                    d.localStorage.setItem("amp-cid", fh(c))
                } catch (e) {}
            })
        }

        function eh(a, b) {
            var c = S(a);
            return c.isTrustedViewer().then(function(d) {
                if (d) return H().expectedError("CID", "Viewer does not provide cap=cid"), c.sendMessageAwaitResponse("cid", b).then(function(e) {
                    var f;
                    if (f = e) {
                        try {
                            var h = Xb(e)
                        } catch (k) {
                            h = null
                        }
                        f = !h
                    }
                    return f ? (H().expectedError("CID", "invalid cid format"), JSON.stringify(L({
                        time: Date.now(),
                        cid: e
                    }))) : e
                })
            })
        }

        function fh(a) {
            return JSON.stringify(L({
                time: Date.now(),
                cid: a
            }))
        }

        function $g(a) {
            var b = a.win;
            try {
                var c = b.localStorage.getItem("amp-cid")
            } catch (e) {}
            var d = Promise.resolve(c);
            !c && Tb(b) && (d = eh(a));
            return d.then(function(e) {
                if (!e) return null;
                e = Xb(e);
                return {
                    time: e.time,
                    cid: e.cid
                }
            })
        }

        function ah(a) {
            var b = a.time,
                c = Date.now();
            return b + 31536E6 < c
        }

        function bh(a) {
            a = a.time;
            var b = Date.now();
            return a + 864E5 < b
        }

        function ch(a) {
            var b;
            if ((b = (b = a.crypto) || a.msCrypto) && b.getRandomValues) {
                var c = new Uint8Array(16);
                b.getRandomValues(c);
                b = c
            } else b = null;
            return b ? b : String(a.location.href + Date.now() + a.Math.random() + a.screen.width + a.screen.height)
        }

        function Zg(a) {
            var b = ch(a);
            return "string" == typeof b ? P(a, "crypto").sha384Base64(b) : sb(function() {
                return Ig(b).replace(/\.+$/, "")
            })
        };

        function gh(a) {
            this.A = a;
            var b = null,
                c = !1;
            a.crypto && (a.crypto.subtle ? b = a.crypto.subtle : a.crypto.webkitSubtle && (b = a.crypto.webkitSubtle, c = !0));
            this.pkcsAlgo = {
                name: "RSASSA-PKCS1-v1_5",
                hash: {
                    name: "SHA-256"
                }
            };
            this.subtle = b;
            this.Mg = c;
            this.Pb = null
        }
        g = gh.prototype;
        g.sha384 = function(a) {
            var b = this;
            "string" === typeof a && (a = Zb(a));
            if (!this.subtle || this.Pb) return (this.Pb || hh(this)).then(function(c) {
                return c(a)
            });
            try {
                return this.subtle.digest({
                    name: "SHA-384"
                }, a).then(function(c) {
                    return new Uint8Array(c)
                }, function(c) {
                    c.message && 0 > c.message.indexOf("secure origin") && G().error("Crypto", "SubtleCrypto failed, fallback to closure lib.", c);
                    return hh(b).then(function() {
                        return b.sha384(a)
                    })
                })
            } catch (c) {
                return H().error("Crypto", "SubtleCrypto failed, fallback to closure lib.",
                    c), hh(this).then(function() {
                    return b.sha384(a)
                })
            }
        };
        g.sha384Base64 = function(a) {
            return this.sha384(a).then(function(b) {
                return Ig(b)
            })
        };
        g.uniform = function(a) {
            return this.sha384(a).then(function(b) {
                for (var c = 0, d = 2; 0 <= d; d--) c = (c + b[d]) / 256;
                return c
            })
        };

        function hh(a) {
            return a.Pb ? a.Pb : a.Pb = Sc(a.A).preloadExtension("amp-crypto-polyfill").then(function() {
                return P(a.A, "crypto-polyfill")
            })
        }
        g.isPkcsAvailable = function() {
            return !!this.subtle && !1 !== this.A.isSecureContext
        };
        g.importPkcsKey = function(a) {
            this.isPkcsAvailable();
            var b = this.Mg ? Yb(JSON.stringify(a)) : a;
            return this.subtle.importKey("jwk", b, this.pkcsAlgo, !0, ["verify"])
        };
        g.verifyPkcs = function(a, b, c) {
            this.isPkcsAvailable();
            return this.subtle.verify(this.pkcsAlgo, a, b, c)
        };
        var ih = ["prefetch", "preload", "preconnect", "dns-prefetch"];

        function jh(a) {
            this.B = a;
            this.ce = this.Hd = null
        }
        jh.prototype.get = function() {
            if (this.Hd) return this.Hd;
            var a = this.B,
                b = a.getUrl(),
                c = fe(b),
                d = a.getRootNode();
            b = d && d.AMP && d.AMP.canonicalUrl;
            if (!b) {
                var e = d.querySelector("link[rel=canonical]");
                b = e ? U(e.href).href : c
            }
            var f = String(Math.floor(1E4 * a.win.Math.random())),
                h = kh(a.win.document);
            d = lh(a.win.document);
            var k = mh(a);
            return this.Hd = {
                get sourceUrl() {
                    return fe(a.getUrl())
                },
                canonicalUrl: b,
                pageViewId: f,
                get pageViewId64() {
                    this.ce || (this.ce = Zg(a.win));
                    return this.ce
                },
                linkRels: h,
                viewport: d,
                replaceParams: k
            }
        };

        function kh(a) {
            var b = K();
            if (a.head) {
                a = a.head.querySelectorAll("link[rel]");
                for (var c = {}, d = 0; d < a.length; c = {
                        nb: c.nb
                    }, d++) {
                    var e = a[d];
                    c.nb = e.href;
                    var f = e.getAttribute("rel");
                    f && c.nb && f.split(/\s+/).forEach(function(h) {
                        return function(k) {
                            if (-1 == ih.indexOf(k)) {
                                var l = b[k];
                                l ? (A(l) || (l = b[k] = [l]), l.push(h.nb)) : b[k] = h.nb
                            }
                        }
                    }(c))
                }
            }
            return b
        }

        function lh(a) {
            var b = a.head.querySelector('meta[name="viewport"]');
            return b ? b.getAttribute("content") : null
        }

        function mh(a) {
            var b;
            (b = !a.isSingleDoc()) || (b = a.win.location.href, "string" == typeof b && (b = U(b)), b = "a" != (V(b) ? b.pathname.split("/", 2)[1] : null));
            if (b) return null;
            a = U(a.win.location.href);
            var c = x(a.search).amp_r;
            return void 0 === c ? null : x(c)
        };
        var nh = null,
            oh = ["gclid", "gclsrc"],
            ph = [/^t.co$/];

        function qh() {
            return J(nh, "E#19457 trackImpressionPromise")
        }

        function rh() {
            var a = self,
                b = new M,
                c = b.promise,
                d = b.resolve;
            nh = R(a).timeoutPromise(8E3, c, "TrackImpressionPromise timeout").catch(function(h) {
                H().warn("IMPRESSION", h)
            });
            b = S(a.document.documentElement);
            var e = b.isTrustedViewer(),
                f = b.getReferrerUrl().then(function(h) {
                    return sh(h)
                });
            Promise.all([e, f]).then(function(h) {
                var k = h[1];
                if (h[0] || k || W(a, "alp")) {
                    var l = th(a),
                        m = uh(a);
                    Promise.all([l, m]).then(function() {
                        d()
                    }, function() {})
                } else d()
            })
        }

        function th(a) {
            var b = S(a.document.documentElement);
            return b.getParam("replaceUrl") ? b.hasCapability("replaceUrl") ? b.sendMessageAwaitResponse("getReplaceUrl", void 0).then(function(c) {
                c && "object" == typeof c ? b.replaceUrl(c.replaceUrl || null) : H().warn("IMPRESSION", "get invalid replaceUrl response")
            }, function(c) {
                H().warn("IMPRESSION", "Error request replaceUrl from viewer", c)
            }) : (b.replaceUrl(b.getParam("replaceUrl") || null), v()) : v()
        }

        function sh(a) {
            var b = U(a);
            return "https:" != b.protocol ? !1 : ph.some(function(c) {
                return c.test(b.hostname)
            })
        }

        function uh(a) {
            var b = tc(a.document.documentElement),
                c = S(b).getParam("click");
            if (!c) return v();
            if (0 != c.indexOf("https://")) return G().warn("IMPRESSION", "click fragment param should start with https://. Found ", c), v();
            a.location.hash && (a.location.hash = "");
            return b.whenFirstVisible().then(function() {
                return vh(a, c)
            }).then(function(d) {
                if (d) {
                    var e = d.location;
                    (d = d.tracking_url || e) && !V(d) && ((new Image).src = d);
                    if (e && a.history.replaceState) {
                        d = S(a.document.documentElement);
                        var f = a.location.href;
                        e = U(e);
                        e = x(e.search);
                        e = Yd(f, e);
                        a.history.replaceState(null, "", e);
                        d.maybeUpdateFragmentForCct()
                    }
                }
            }).catch(function(d) {
                G().warn("IMPRESSION", "Error on request clickUrl: ", d)
            })
        }

        function vh(a, b) {
            return P(a, "xhr").fetchJson(b, {
                credentials: "include"
            }).then(function(c) {
                return 204 == c.status ? null : c.json()
            })
        }

        function wh(a) {
            return a.whenReady().then(function() {
                return !!a.getBody().querySelector("amp-analytics[type=googleanalytics]")
            })
        };

        function xh() {
            this.F = []
        }
        xh.prototype.peek = function() {
            var a = this.F.length;
            return a ? this.F[a - 1].item : null
        };
        xh.prototype.enqueue = function(a, b) {
            if (isNaN(b)) throw Error("Priority must not be NaN.");
            for (var c = -1, d = 0, e = this.F.length; d <= e;) {
                c = Math.floor((d + e) / 2);
                if (c === this.F.length) break;
                if (this.F[c].priority < b) d = c + 1;
                else if (0 < c && this.F[c - 1].priority >= b) e = c - 1;
                else break
            }
            this.F.splice(c, 0, {
                item: a,
                priority: b
            })
        };
        xh.prototype.forEach = function(a) {
            for (var b = this.F.length; b--;) a(this.F[b].item)
        };
        xh.prototype.dequeue = function() {
            return this.F.length ? this.F.pop().item : null
        };
        da.Object.defineProperties(xh.prototype, {
            length: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.F.length
                }
            }
        });
        var yh = ["_top", "_blank"];

        function zh(a) {
            var b = this;
            this.ampdoc = a;
            this.la = a.getRootNode();
            this.I = Wc(this.ampdoc);
            this.j = S(this.ampdoc);
            this.N = Ac(this.ampdoc, "history");
            this.ra = Q(this.ampdoc.win);
            this.Lg = this.ra.isIos() && this.ra.isSafari();
            this.Fb = Tb(this.ampdoc.win) && this.j.isOvertakeHistory();
            this.Md = this.la != this.ampdoc.getRootNode() || !!this.ampdoc.getParent();
            this.Kg = "inabox" == z(this.ampdoc.win).runtime;
            this.Mf = this.la.nodeType == Node.DOCUMENT_NODE ? this.la.documentElement : this.la;
            this.rb = this.Eg.bind(this);
            this.la.addEventListener("click",
                this.rb);
            this.la.addEventListener("contextmenu", this.rb);
            this.ze = !1;
            wh(this.ampdoc).then(function(c) {
                b.ze = c
            });
            this.rf = this.$a = !1;
            Promise.all([this.j.isTrustedViewer(), this.j.getViewerOrigin()]).then(function(c) {
                b.$a = c[0];
                c = c[1];
                "string" == typeof c && (c = U(c));
                c = D.localhostRegex.test(c.origin);
                b.rf = c
            });
            this.Zc = null;
            this.ye = new xh;
            this.Bf = new xh
        }
        g = zh.prototype;
        g.cleanup = function() {
            this.rb && (this.la.removeEventListener("click", this.rb), this.la.removeEventListener("contextmenu", this.rb))
        };
        g.openWindow = function(a, b, c, d) {
            var e = "";
            !this.ra.isIos() && this.ra.isChrome() || d || (e += "noopener");
            var f = Rb(a, b, c, e);
            f && !d && (f.opener = null)
        };
        g.navigateTo = function(a, b, c, d) {
            var e = d = void 0 === d ? {} : d;
            d = void 0 === e.target ? "_top" : e.target;
            e = void 0 === e.opener ? !1 : e.opener;
            b = Ah(this, b);
            var f = Bc(this.Mf, "url");
            if (f.isProtocolValid(b)) {
                J(yh.includes(d), "Target '" + d + "' not supported.");
                var h = f.getSourceUrl(a.location);
                b = f.resolveRelativeUrl(b, h);
                if ("_blank" == d) this.openWindow(a, b, d, e);
                else {
                    if (c && (this.Zc || (this.Zc = Bh(this)), this.Zc.includes(c) && this.navigateToAmpUrl(b, c))) return;
                    a.top.location.href = b
                }
            } else G().error("navigation", "Cannot navigate to invalid protocol: " +
                b)
        };
        g.navigateToAmpUrl = function(a, b) {
            return this.j.hasCapability("a2a") ? (this.j.sendMessage("a2aNavigate", L({
                url: a,
                requestedBy: b
            })), !0) : !1
        };

        function Bh(a) {
            return (a = a.la.querySelector('meta[name="amp-to-amp-navigation"]')) && a.hasAttribute("content") ? a.getAttribute("content").split(",").map(function(b) {
                return b.trim()
            }) : []
        }
        g.Eg = function(a) {
            if (!a.defaultPrevented) {
                var b = Ib(a.__AMP_CUSTOM_LINKER_TARGET__ || a.target, "A");
                if (b && b.href)
                    if ("click" == a.type) {
                        Ch(this, b);
                        var c = Dh(this, b.href),
                            d;
                        if (d = !Eh(this, a, b, c)) {
                            if (this.Fb) {
                                d = b.ownerDocument.defaultView;
                                var e = b.href,
                                    f = c.protocol;
                                "ftp:" == f ? (Rb(d, e, "_blank"), a.preventDefault(), d = !0) : (f = /^(https?|mailto):$/.test(f), this.Lg && !f ? (Rb(d, e, "_top"), a.preventDefault(), d = !0) : d = !1)
                            } else d = !1;
                            d = !d
                        }
                        if (d)
                            if (d = Dh(this, ""), Fh(c) != Fh(d) && (Gh(this, b, a), c = Dh(this, b.href)), e = c, c = Fh(e), f = Fh(d),
                                e.hash && c == f) Hh(this, a, e, d);
                            else {
                                e = (b.getAttribute("target") || "").toLowerCase();
                                (this.Md || this.Kg) && "_top" != e && "_blank" != e && (e = "_blank", b.setAttribute("target", e));
                                f = this.ampdoc.win;
                                var h = Q(f);
                                b = S(b);
                                d.search && h.isSafari() && 13 <= h.getMajorVersion() && b.isProxyOrigin() && b.isEmbedded() && Ih(f, d, e);
                                this.viewerInterceptsNavigation(c, "intercept_click") && a.preventDefault()
                            }
                    } else "contextmenu" == a.type && (Ch(this, b), Gh(this, b, a))
            }
        };

        function Gh(a, b, c) {
            a.ye.forEach(function(d) {
                d(b, c)
            })
        }

        function Ah(a, b) {
            a.Bf.forEach(function(c) {
                b = c(b)
            });
            return b
        }

        function Ch(a, b) {
            var c = null;
            if (a.ze && !a.Md) {
                a = U(a.ampdoc.win.location.href);
                var d = x(a.search);
                a = [];
                for (var e = 0; e < oh.length; e++) {
                    var f = oh[e];
                    "undefined" !== typeof d[f] && a.push(f)
                }
                d = b.getAttribute("data-amp-addparams");
                e = b.href;
                d && (e = Yd(e, x(d)));
                d = U(e);
                d = x(d.search);
                for (e = a.length - 1; 0 <= e; e--) "undefined" !== typeof d[a[e]] && a.splice(e, 1);
                d = "";
                for (e = 0; e < a.length; e++) f = a[e], d += 0 == e ? f + "=QUERY_PARAM(" + f + ")" : "&" + f + "=QUERY_PARAM(" + f + ")";
                c = d
            }
            Bc(b, "url-replace").maybeExpandLink(b, c)
        }

        function Eh(a, b, c, d) {
            return c.hasAttribute("rel") && c.getAttribute("rel").split(" ").map(function(e) {
                return e.trim()
            }).includes("amphtml") ? a.navigateToAmpUrl(d.href, "<a rel=amphtml>") ? (b.preventDefault(), !0) : !1 : !1
        }

        function Ih(a, b, c) {
            function d() {
                var h = a.location.href;
                h == f ? (H().info("navigation", "Restored iframe URL with query string:", e), a.history.replaceState(null, "", e)) : H().error("navigation", "Unexpected iframe URL change:", h, f)
            }
            H().info("navigation", "Removing iframe query string before navigation:", b.search);
            var e = b.href,
                f = "" + b.origin + b.pathname + b.hash;
            a.history.replaceState(null, "", f);
            "_blank" === c ? a.setTimeout(d, 0) : a.addEventListener("pageshow", function l(k) {
                k.persisted && (d(), a.removeEventListener("pageshow",
                    l))
            })
        }

        function Hh(a, b, c, d) {
            if (Q(a.ampdoc.win).isIe()) {
                var e = c.hash.substring(1),
                    f = a.ampdoc.getElementById(e);
                f && (/^(?:a|select|input|button|textarea)$/i.test(f.tagName) || (f.tabIndex = -1), Sb(f))
            }
            b.preventDefault();
            if (!a.Md) {
                var h = c.hash.slice(1),
                    k = null;
                if (h) {
                    var l = String(h).replace(tb, ub);
                    k = a.la.getElementById(h) || a.la.querySelector('a[name="' + l + '"]')
                }
                c.hash != d.hash ? a.N.replaceStateForTarget(c.hash).then(function() {
                    Jh(a, k, h)
                }) : Jh(a, k, h)
            }
        }
        g.registerAnchorMutator = function(a, b) {
            this.ye.enqueue(a, b)
        };
        g.registerNavigateToMutator = function(a, b) {
            this.Bf.enqueue(a, b)
        };

        function Jh(a, b, c) {
            b ? (a.I.scrollIntoView(b), R(a.ampdoc.win).delay(function() {
                return a.I.scrollIntoView(b)
            }, 1)) : H().warn("navigation", "failed to find element with id=" + c + " or a[name=" + c + "]")
        }

        function Dh(a, b) {
            return Bc(a.Mf, "url").parse(b)
        }
        g.viewerInterceptsNavigation = function(a, b) {
            var c = this.j.hasCapability("interceptNavigation"),
                d = this.ampdoc.getRootNode().documentElement.hasAttribute("allow-navigation-interception");
            if (!c || !d || !this.$a && !this.rf) return !1;
            this.j.sendMessage("navigateTo", L({
                url: a,
                requestedBy: b
            }));
            return !0
        };

        function Fh(a) {
            return "" + a.origin + a.pathname + a.search
        };

        function Kh(a) {
            Pc(a).then(function(b) {
                b && a.getRootNode().addEventListener("submit", Lh, !0)
            })
        }

        function Lh(a) {
            if (!a.defaultPrevented) {
                var b = a.target;
                if (b && "FORM" == b.tagName) {
                    (b.classList.contains("i-amphtml-form") ? b.hasAttribute("amp-novalidate") : b.hasAttribute("novalidate")) || !b.checkValidity || b.checkValidity() || a.preventDefault();
                    for (var c = b.elements, d = 0; d < c.length; d++) J(!c[d].name || "__amp_source_origin" != c[d].name, "Illegal input name, %s found: %s", "__amp_source_origin", c[d]);
                    c = b.getAttribute("action");
                    var e = b.getAttribute("action-xhr");
                    d = (b.getAttribute("method") || "GET").toUpperCase();
                    e && (ae(e, b, "action-xhr"), J(!V(e), "form action-xhr should not be on AMP CDN: %s", b), je(e));
                    c && (ae(c, b, "action"), J(!V(c), "form action should not be on AMP CDN: %s", b), je(c));
                    "GET" == d ? J(e || c, "form action-xhr or action attribute is required for method=GET: %s", b) : "POST" == d && (c && G().error("form", "action attribute is invalid for method=POST: %s", b), e || (a.preventDefault(), J(!1, "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s", b)));
                    (c = b.getAttribute("target")) ? J("_blank" ==
                        c || "_top" == c, "form target=%s is invalid can only be _blank or _top: %s", c, b): b.setAttribute("target", "_top");
                    e && (a.preventDefault(), a.stopImmediatePropagation(), Bc(b, "action").execute(b, "submit", null, b, b, a, 3))
                }
            }
        };

        function Y() {
            this.Z = null
        }
        g = Y.prototype;
        g.add = function(a) {
            var b = this;
            this.Z || (this.Z = []);
            this.Z.push(a);
            return function() {
                b.remove(a)
            }
        };
        g.remove = function(a) {
            this.Z && (a = this.Z.indexOf(a), -1 < a && this.Z.splice(a, 1))
        };
        g.removeAll = function() {
            this.Z && (this.Z.length = 0)
        };
        g.fire = function(a) {
            if (this.Z)
                for (var b = this.Z, c = 0; c < b.length; c++)(0, b[c])(a)
        };
        g.getHandlerCount = function() {
            return this.Z ? this.Z.length : 0
        };
        var Mh = {
            attributes: !0,
            attributeFilter: ["hidden"],
            subtree: !0
        };

        function Nh(a) {
            this.V = a.getRootNode();
            this.A = (this.V.ownerDocument || this.V).defaultView;
            this.gb = this.ja = null
        }
        Nh.prototype.add = function(a) {
            var b = this;
            Oh(this);
            var c = this.gb.add(a);
            return function() {
                c();
                0 === b.gb.getHandlerCount() && b.dispose()
            }
        };

        function Oh(a) {
            if (!a.ja) {
                a.gb = new Y;
                var b = new a.A.MutationObserver(function(c) {
                    c && a.gb.fire(c)
                });
                a.ja = b;
                b.observe(a.V, Mh)
            }
        }
        Nh.prototype.dispose = function() {
            this.ja && (this.ja.disconnect(), this.gb.removeAll(), this.gb = this.ja = null)
        };

        function Ph(a) {
            try {
                return a.state
            } catch (b) {
                return null
            }
        };

        function Qh(a, b) {
            this.B = a;
            this.O = R(a.win);
            this.o = b;
            this.C = 0;
            this.Qa = [];
            this.F = [];
            this.o.setOnStateUpdated(this.aa.bind(this))
        }
        g = Qh.prototype;
        g.cleanup = function() {
            this.o.cleanup()
        };
        g.push = function(a, b) {
            var c = this;
            return Rh(this, function() {
                return c.o.push(b).then(function(d) {
                    c.aa(d);
                    a && (c.Qa[d.stackIndex] = a);
                    return d.stackIndex
                })
            }, "push")
        };
        g.pop = function(a) {
            var b = this;
            return Rh(this, function() {
                return b.o.pop(a).then(function(c) {
                    b.aa(c)
                })
            }, "pop")
        };
        g.replace = function(a) {
            var b = this;
            return Rh(this, function() {
                return b.o.replace(a)
            }, "replace")
        };
        g.get = function() {
            var a = this;
            return Rh(this, function() {
                return a.o.get()
            }, "get")
        };
        g.goBack = function(a) {
            var b = this;
            return Rh(this, function() {
                return 0 >= b.C && !a ? v() : b.o.pop(b.C).then(function(c) {
                    b.aa(c)
                })
            }, "goBack")
        };
        g.replaceStateForTarget = function(a) {
            var b = this,
                c = this.B.win.location.hash;
            return this.push(function() {
                b.B.win.location.replace(c || "#")
            }).then(function() {
                b.o.replaceStateForTarget(a)
            })
        };
        g.getFragment = function() {
            return this.o.getFragment()
        };
        g.updateFragment = function(a) {
            "#" == a[0] && (a = a.substr(1));
            return this.o.updateFragment(a)
        };
        g.aa = function(a) {
            this.C = a.stackIndex;
            Sh(this, a)
        };

        function Sh(a, b) {
            if (!(a.C >= a.Qa.length - 1)) {
                for (var c = [], d = a.Qa.length - 1; d > a.C; d--) a.Qa[d] && (c.push(a.Qa[d]), a.Qa[d] = void 0);
                a.Qa.splice(a.C + 1);
                if (0 < c.length)
                    for (d = {
                            ob: 0
                        }; d.ob < c.length; d = {
                            ob: d.ob
                        }, d.ob++) a.O.delay(function(e) {
                        return function() {
                            return c[e.ob](b)
                        }
                    }(d), 1)
            }
        }

        function Rh(a, b, c) {
            var d = new M,
                e = d.promise;
            a.F.push({
                callback: b,
                resolve: d.resolve,
                reject: d.reject,
                trace: Error("history trace for " + c + ": ")
            });
            1 == a.F.length && Th(a);
            return e
        }

        function Th(a) {
            if (0 != a.F.length) {
                var b = a.F[0];
                try {
                    var c = b.callback()
                } catch (d) {
                    c = Promise.reject(d)
                }
                c.then(function(d) {
                    b.resolve(d)
                }, function(d) {
                    H().error("History", "failed to execute a task:", d);
                    b.trace && (b.trace.message += d, H().error("History", b.trace));
                    b.reject(d)
                }).then(function() {
                    a.F.splice(0, 1);
                    Th(a)
                })
            }
        }

        function Uh(a) {
            var b = this;
            this.win = a;
            this.O = R(a);
            a = this.win.history;
            this.Ra = a.length - 1;
            var c = Ph(a);
            c && void 0 !== c["AMP.History"] && (this.Ra = Math.min(c["AMP.History"], this.Ra));
            this.C = this.Ra;
            this.aa = null;
            this.Dh = "state" in a;
            this.lb = Vh(this, this.C);
            if (a.pushState && a.replaceState) {
                this.yc = a.originalPushState || a.pushState.bind(a);
                this.Mb = a.originalReplaceState || a.replaceState.bind(a);
                var d = function(f, h, k) {
                    b.lb = f;
                    b.yc(f, h, k || null)
                };
                var e = function(f, h, k) {
                    b.lb = f;
                    void 0 !== k ? b.Mb(f, h, k) : b.Mb(f, h)
                };
                a.originalPushState ||
                    (a.originalPushState = this.yc);
                a.originalReplaceState || (a.originalReplaceState = this.Mb)
            } else d = function(f) {
                b.lb = f
            }, e = function(f) {
                b.lb = f
            };
            this.kh = d;
            this.Ic = e;
            try {
                this.Ic(Vh(this, this.C, !0))
            } catch (f) {
                H().error("History", "Initial replaceState failed: " + f.message)
            }
            a.pushState = this.lf.bind(this);
            a.replaceState = this.Fd.bind(this);
            this.Ec = function(f) {
                f = f.state;
                H().fine("History", "popstate event: " + b.win.history.length + ", " + JSON.stringify(f));
                f = Wh(b);
                H().fine("History", "history event: " + b.win.history.length +
                    ", " + JSON.stringify(f));
                var h = f ? f["AMP.History"] : void 0,
                    k = b.C,
                    l = b.Xc;
                b.Xc = void 0;
                k > b.win.history.length - 2 && (k = b.win.history.length - 2, b.ya(Xh(f, {
                    stackIndex: k
                })));
                k = void 0 == h ? k + 1 : h < b.win.history.length ? h : b.win.history.length - 1;
                f || (f = {});
                f["AMP.History"] = k;
                b.Ic(f, void 0, void 0);
                k != b.C && b.ya(Xh(f, {
                    stackIndex: k
                }));
                k < b.Ra && (b.Ra = k);
                l && l.resolve()
            };
            this.win.addEventListener("popstate", this.Ec)
        }
        g = Uh.prototype;
        g.cleanup = function() {
            this.yc && (this.win.history.pushState = this.yc);
            this.Mb && (this.win.history.replaceState = this.Mb);
            this.win.removeEventListener("popstate", this.Ec)
        };

        function Vh(a, b, c) {
            a = K(c ? Wh(a) : void 0);
            a["AMP.History"] = b;
            return a
        }
        g.setOnStateUpdated = function(a) {
            this.aa = a
        };
        g.push = function(a) {
            var b = this;
            return Yh(this, function() {
                var c = Xh(Wh(b), a || {});
                b.lf(c, void 0, c.fragment ? "#" + c.fragment : void 0);
                return sb(function() {
                    return Xh(c, {
                        stackIndex: b.C
                    })
                })
            })
        };
        g.pop = function(a) {
            var b = this;
            a = Math.max(a, this.Ra);
            return Yh(this, function() {
                return Zh(b, b.C - a + 1)
            }).then(function(c) {
                return Xh(Wh(b), {
                    stackIndex: c
                })
            })
        };
        g.replace = function(a) {
            var b = this,
                c = a = void 0 === a ? {} : a;
            return Yh(this, function() {
                var d = Xh(Wh(b), c || {}),
                    e = (d.url || "").replace(/#.*/, ""),
                    f = d.fragment ? "#" + d.fragment : "";
                b.Fd(d, d.title, e || f ? e + f : void 0);
                return sb(function() {
                    return Xh(d, {
                        stackIndex: b.C
                    })
                })
            })
        };
        g.get = function() {
            var a = this;
            return sb(function() {
                return Xh(Wh(a), {
                    stackIndex: a.C
                })
            })
        };
        g.backTo = function(a) {
            var b = this;
            a = Math.max(a, this.Ra);
            return Yh(this, function() {
                return Zh(b, b.C - a)
            })
        };

        function Wh(a) {
            return a.Dh ? Ph(a.win.history) : a.lb
        }

        function Yh(a, b) {
            return a.Xc ? a.Xc.promise.then(b, b) : b()
        }

        function $h(a) {
            var b = new M,
                c = b.resolve,
                d = b.reject;
            b = a.O.timeoutPromise(500, b.promise);
            a.Xc = {
                promise: b,
                resolve: c,
                reject: d
            };
            return b
        }

        function Zh(a, b) {
            if (0 >= b) return Promise.resolve(a.C);
            a.lb = Vh(a, a.C - b);
            var c = $h(a);
            a.win.history.go(-b);
            return c.then(function() {
                return Promise.resolve(a.C)
            })
        }
        g.lf = function(a, b, c) {
            a || (a = {});
            var d = this.C + 1;
            a["AMP.History"] = d;
            this.kh(a, b, c);
            d != this.win.history.length - 1 && (d = this.win.history.length - 1, a["AMP.History"] = d, this.Ic(a));
            a = Xh(a, {
                stackIndex: d
            });
            this.ya(a)
        };
        g.replaceStateForTarget = function(a) {
            var b = this;
            Yh(this, function() {
                b.win.removeEventListener("popstate", b.Ec);
                try {
                    b.win.location.replace(a)
                } finally {
                    b.win.addEventListener("popstate", b.Ec)
                }
                b.Fd();
                return v()
            })
        };
        g.Fd = function(a, b, c) {
            a || (a = {});
            var d = Math.min(this.C, this.win.history.length - 1);
            a["AMP.History"] = d;
            this.Ic(a, b, c);
            a = Xh(a, {
                stackIndex: d
            });
            this.ya(a)
        };
        g.ya = function(a) {
            a.stackIndex = Math.min(a.stackIndex, this.win.history.length - 1);
            this.C != a.stackIndex && (H().fine("History", "stack index changed: " + this.C + " -> " + a.stackIndex), this.C = a.stackIndex, this.aa && this.aa(a))
        };
        g.getFragment = function() {
            var a = this.win.location.hash;
            a = a.substr(1);
            return Promise.resolve(a)
        };
        g.updateFragment = function(a) {
            return this.replace({
                fragment: a
            })
        };

        function Xh(a, b) {
            var c = Object.assign({}, a && a.data || {}, b.data || {});
            return Object.assign({}, a || {}, b, {
                data: c
            })
        }

        function ai(a, b) {
            var c = this;
            this.win = a;
            this.j = b;
            this.C = 0;
            this.aa = null;
            this.Hh = this.j.onMessage("historyPopped", function(d) {
                void 0 !== d.newStackIndex && (d.stackIndex = d.newStackIndex);
                bi(d) ? c.ya(d) : H().warn("History", 'Ignored unexpected "historyPopped" data:', d)
            })
        }
        g = ai.prototype;
        g.replaceStateForTarget = function(a) {
            this.win.location.replace(a)
        };
        g.cleanup = function() {
            this.Hh()
        };
        g.setOnStateUpdated = function(a) {
            this.aa = a
        };

        function ci(a, b, c) {
            if (bi(a)) return a;
            H().warn("History", 'Ignored unexpected "%s" data:', c, a);
            return b
        }

        function bi(a) {
            return !!a && void 0 !== a.stackIndex
        }
        g.push = function(a) {
            var b = this,
                c = Object.assign({}, {
                    stackIndex: this.C + 1
                }, a || {});
            return this.j.sendMessageAwaitResponse("pushHistory", c).then(function(d) {
                d = ci(d, c, "pushHistory");
                b.ya(d);
                return d
            })
        };
        g.pop = function(a) {
            var b = this;
            if (a > this.C) return this.get();
            a = L({
                stackIndex: this.C
            });
            return this.j.sendMessageAwaitResponse("popHistory", a).then(function(c) {
                var d = L({
                    stackIndex: b.C - 1
                });
                c = ci(c, d, "popHistory");
                b.ya(c);
                return c
            })
        };
        g.replace = function(a) {
            var b = this;
            if (a && a.url) {
                if (!this.j.hasCapability("fullReplaceHistory")) {
                    var c = L({
                        stackIndex: this.C
                    });
                    return Promise.resolve(c)
                }
                var d = a.url.replace(/#.*/, "");
                a.url = d
            }
            var e = Object.assign({}, {
                stackIndex: this.C
            }, a || {});
            return this.j.sendMessageAwaitResponse("replaceHistory", e, !0).then(function(f) {
                f = ci(f, e, "replaceHistory");
                b.ya(f);
                return f
            })
        };
        g.get = function() {
            return Promise.resolve({
                data: void 0,
                fragment: "",
                stackIndex: this.C,
                title: ""
            })
        };
        g.ya = function(a) {
            var b = a.stackIndex;
            this.C != b && (H().fine("History", "stackIndex: " + this.C + " -> " + b), this.C = b, this.aa && this.aa(a))
        };
        g.getFragment = function() {
            return this.j.hasCapability("fragment") ? this.j.sendMessageAwaitResponse("getFragment", void 0, !0).then(function(a) {
                if (!a) return "";
                "#" == a[0] && (a = a.substr(1));
                return a
            }) : Promise.resolve("")
        };
        g.updateFragment = function(a) {
            return this.j.hasCapability("fragment") ? this.j.sendMessageAwaitResponse("replaceHistory", L({
                fragment: a
            }), !0) : v()
        };

        function di(a) {
            var b = S(a);
            b.isOvertakeHistory() || a.win.__AMP_TEST_IFRAME ? b = new ai(a.win, b) : (N(a.win, "global-history-binding", Uh), b = P(a.win, "global-history-binding"));
            return new Qh(a, b)
        };
        var ei = [];

        function fi(a) {
            Ue.call(this, a);
            ei.push(this)
        }
        n(fi, Ue);
        fi.prototype.getLayoutPriority = function() {
            return 0
        };
        fi.prototype.isLayoutSupported = function() {
            return !0
        };
        fi.prototype.reconstructWhenReparented = function() {
            return !1
        };

        function gi(a, b, c) {
            b.__AMP__RESOURCE = this;
            this.Gg = a;
            this.element = b;
            this.debugid = b.tagName.toLowerCase() + "#" + a;
            this.hostWin = b.ownerDocument.defaultView;
            this.h = c;
            this.Og = b.hasAttribute("placeholder");
            this.Bb = !1;
            this.hb = void 0;
            this.D = b.isBuilt() ? 1 : 0;
            0 == this.D && b.isBuilding() && this.build();
            this.ge = -1;
            this.pa = 0;
            this.vf = this.Va = null;
            this.Eb = !1;
            this.$ = jc(-1E4, -1E4, 0, 0);
            this.Id = null;
            this.Qd = !1;
            this.Jb = this.ma = null;
            this.ee = void 0;
            a = new M;
            this.Ug = a.promise;
            this.Ud = a.resolve;
            this.Ma = c.isIntersectionExperimentOn();
            this.Od = !1;
            this.ib = null
        }

        function Z(a) {
            return a.__AMP__RESOURCE
        }
        g = gi.prototype;
        g.getId = function() {
            return this.Gg
        };
        g.updateOwner = function(a) {
            this.hb = a
        };
        g.getOwner = function() {
            if (void 0 === this.hb) {
                for (var a = this.element; a; a = a.parentElement)
                    if (a.__AMP__OWNER) {
                        this.hb = a.__AMP__OWNER;
                        break
                    }
                void 0 === this.hb && (this.hb = null)
            }
            return this.hb
        };
        g.hasOwner = function() {
            return !!this.getOwner()
        };
        g.getLayoutPriority = function() {
            return -1 != this.ge ? this.ge : this.element.getLayoutPriority()
        };
        g.updateLayoutPriority = function(a) {
            this.ge = a
        };
        g.getState = function() {
            return this.D
        };
        g.isBuilt = function() {
            return this.element.isBuilt()
        };
        g.isBuilding = function() {
            return this.Bb
        };
        g.whenBuilt = function() {
            return this.element.signals().whenSignal("res-built")
        };
        g.build = function() {
            var a = this;
            if (this.Bb || !this.element.isUpgraded()) return null;
            this.Bb = !0;
            return this.element.build().then(function() {
                a.Bb = !1;
                a.Ma && a.hasBeenMeasured() ? (a.D = 2, a.element.isAlwaysFixed() && !a.Eb && a.requestMeasure(), a.element.onMeasure(!0)) : a.D = 1;
                a.element.signals().signal("res-built")
            }, function(b) {
                a.maybeReportErrorOnBuildFailure(b);
                a.Bb = !1;
                a.element.signals().rejectSignal("res-built", b);
                throw b;
            })
        };
        g.maybeReportErrorOnBuildFailure = function(a) {
            Af(a) || H().error("Resource", "failed to build:", this.debugid, a)
        };
        g.applySizesAndMediaQuery = function() {
            this.element.applySizesAndMediaQuery()
        };
        g.changeSize = function(a, b, c) {
            this.element.applySize(a, b, c);
            this.requestMeasure()
        };
        g.overflowCallback = function(a, b, c, d) {
            a && (this.ee = {
                height: b,
                width: c,
                margins: d
            });
            this.element.overflowCallback(a, b, c, d)
        };
        g.resetPendingChangeSize = function() {
            this.ee = void 0
        };
        g.getPendingChangeSize = function() {
            return this.ee
        };
        g.getUpgradeDelayMs = function() {
            return this.element.getUpgradeDelayMs()
        };
        g.premeasure = function(a) {
            this.ib = a
        };
        g.invalidatePremeasurementAndRequestMeasure = function() {
            this.ib = null;
            this.requestMeasure()
        };
        g.measure = function(a) {
            var b = a = void 0 === a ? !1 : a;
            if (!(this.Og && this.element.parentElement && this.element.parentElement.tagName.startsWith("AMP-")) || "__AMP__RESOURCE" in this.element.parentElement)
                if (this.element.ownerDocument && this.element.ownerDocument.defaultView) {
                    this.Qd = !1;
                    var c = this.$;
                    b ? hi(this, this.ib) : hi(this);
                    this.ib = null;
                    var d = this.$,
                        e = !(c.width == d.width && c.height === d.height);
                    (1 == this.D || c.top != d.top || e) && this.element.isUpgraded() && (1 == this.D ? this.D = 2 : 4 != this.D && 5 != this.D || !this.element.isRelayoutNeeded() ||
                        (this.D = 2));
                    this.hasBeenMeasured() || (this.Id = d);
                    this.element.updateLayoutBox(d, e)
                } else this.D = 1
        };

        function hi(a, b) {
            var c = Wc(a.element);
            a.$ = c.getLayoutRect(a.element, b);
            var d = !1;
            if (c.supportsPositionFixed() && a.isDisplayed())
                for (var e = a.h.getAmpdoc().win, f = e.document.body, h = a.element; h && h != f; h = h.offsetParent) {
                    if (h.isAlwaysFixed && h.isAlwaysFixed()) {
                        d = !0;
                        break
                    }
                    if (c.isDeclaredFixed(h) && "fixed" == (e.getComputedStyle(h) || K()).position) {
                        d = !0;
                        break
                    }
                }
            if (a.Eb = d) a.$ = mc(a.$, -c.getScrollLeft(), -c.getScrollTop())
        }
        g.completeCollapse = function() {
            ue(this.element, !1);
            this.$ = jc(this.$.left, this.$.top, 0, 0);
            this.Eb = !1;
            this.element.updateLayoutBox(this.getLayoutBox());
            var a = this.getOwner();
            a && a.collapsedCallback(this.element)
        };
        g.completeExpand = function() {
            ue(this.element, !0);
            this.requestMeasure()
        };
        g.isMeasureRequested = function() {
            return this.Qd
        };
        g.hasBeenMeasured = function() {
            return !!this.Id
        };
        g.hasBeenPremeasured = function() {
            return !!this.ib
        };
        g.requestMeasure = function() {
            this.Qd = !0
        };
        g.getLayoutBox = function() {
            if (!this.Eb) return this.$;
            var a = Wc(this.element);
            return mc(this.$, a.getScrollLeft(), a.getScrollTop())
        };
        g.getPageLayoutBox = function() {
            return this.$
        };
        g.getPageLayoutBoxAsync = function() {
            var a = this;
            return this.hasBeenMeasured() ? sb(function() {
                return a.getPageLayoutBox()
            }) : Vc(this.hostWin).measurePromise(function() {
                a.measure();
                return a.getPageLayoutBox()
            })
        };
        g.getInitialLayoutBox = function() {
            return this.Id || this.$
        };
        g.isDisplayed = function(a) {
            var b = void 0 === a ? !1 : a;
            if (!this.element.ownerDocument || !this.element.ownerDocument.defaultView) return !1;
            var c = "fluid" == this.element.getLayout(),
                d = b ? this.ib : this.getLayoutBox(),
                e = 0 < d.height && 0 < d.width;
            return c || e
        };
        g.isFixed = function() {
            return this.Eb
        };
        g.overlaps = function(a) {
            var b = this.getLayoutBox();
            return b.top <= a.bottom && a.top <= b.bottom && b.left <= a.right && a.left <= b.right
        };
        g.prerenderAllowed = function() {
            return this.element.prerenderAllowed()
        };
        g.isBuildRenderBlocking = function() {
            return this.element.isBuildRenderBlocking()
        };
        g.whenWithinViewport = function(a) {
            if (!this.isLayoutPending() || !0 === a) return v();
            var b = String(a);
            if (this.ma && this.ma[b]) return this.ma[b].promise;
            if (this.isWithinViewportRatio(a)) return v();
            this.ma = this.ma || {};
            this.ma[b] = new M;
            return this.ma[b].promise
        };

        function ii(a) {
            if (a.ma) {
                var b = a.getDistanceViewportRatio(),
                    c;
                for (c in a.ma) a.isWithinViewportRatio(parseFloat(c), b) && (a.ma[c].resolve(), delete a.ma[c])
            }
        }
        g.getDistanceViewportRatio = function() {
            var a = Wc(this.element).getRect(),
                b = this.getLayoutBox(),
                c = this.h.getScrollDirection(),
                d = 1,
                e = 0;
            if (a.right < b.left || a.left > b.right) return {
                distance: !1
            };
            if (a.bottom < b.top) e = b.top - a.bottom, -1 == c && (d = 2);
            else if (a.top > b.bottom) e = a.top - b.bottom, 1 == c && (d = 2);
            else return {
                distance: !0
            };
            return {
                distance: e,
                scrollPenalty: d,
                viewportHeight: a.height
            }
        };
        g.isWithinViewportRatio = function(a, b) {
            if ("boolean" === typeof a) return a;
            var c = b || this.getDistanceViewportRatio(),
                d = c.distance;
            return "boolean" == typeof d ? d : d < c.viewportHeight * a / c.scrollPenalty
        };
        g.renderOutsideViewport = function() {
            ii(this);
            return this.hasOwner() || this.isWithinViewportRatio(this.element.renderOutsideViewport())
        };
        g.idleRenderOutsideViewport = function() {
            return this.isWithinViewportRatio(this.element.idleRenderOutsideViewport())
        };
        g.layoutScheduled = function(a) {
            this.D = 3;
            this.element.layoutScheduleTime = a
        };
        g.layoutCanceled = function() {
            this.D = this.hasBeenMeasured() ? 2 : 1
        };
        g.startLayout = function() {
            var a = this;
            if (this.Jb) return this.Jb;
            if (4 == this.D) return v();
            if (5 == this.D) return Promise.reject(this.vf);
            this.isDisplayed();
            if (3 != this.D) {
                var b = H().createError("startLayout called but not LAYOUT_SCHEDULED", "currently: ", this.D);
                b.associatedElement = this.element;
                xf(b);
                return Promise.reject(b)
            }
            if (0 < this.pa && !this.element.isRelayoutNeeded()) return H().fine("Resource", "layout canceled since it wasn't requested:", this.debugid, this.D), this.D = 4, v();
            H().fine("Resource", "start layout:",
                this.debugid, "count:", this.pa);
            this.pa++;
            this.D = 3;
            this.Va = new AbortController;
            var c = this.Va.signal;
            return this.Jb = (new Promise(function(d, e) {
                Vc(a.hostWin).mutate(function() {
                    try {
                        d(a.element.layoutCallback(c))
                    } catch (f) {
                        e(f)
                    }
                })
            })).then(function() {
                return ji(a, !0, c)
            }, function(d) {
                return ji(a, !1, c, d)
            })
        };

        function ji(a, b, c, d) {
            a.Va = null;
            if (c.aborted) throw c = H().createError("layoutComplete race"), c.associatedElement = a.element, H().expectedError("Resource", c), zf();
            a.Ud && (a.Ud(), a.Ud = null);
            a.Jb = null;
            a.D = b ? 4 : 5;
            a.vf = d;
            if (b) H().fine("Resource", "layout complete:", a.debugid);
            else return H().fine("Resource", "loading failed:", a.debugid, d), Promise.reject(d)
        }
        g.isLayoutPending = function() {
            return 4 != this.D && 5 != this.D
        };
        g.loadedOnce = function() {
            return this.Ug
        };
        g.isInViewport = function() {
            this.Od && ii(this);
            return this.Od
        };
        g.setInViewport = function(a) {
            this.Od = a
        };
        g.unlayout = function() {
            0 != this.D && 1 != this.D && 2 != this.D && (this.Va && (this.Va.abort(), this.Va = null), this.setInViewport(!1), this.element.unlayoutCallback() && (this.element.togglePlaceholder(!0), this.D = this.Ma ? 2 : 1, this.pa = 0, this.Jb = null))
        };
        g.getTaskId = function(a) {
            return this.debugid + "#" + a
        };
        g.pause = function() {
            this.element.pauseCallback();
            this.element.unlayoutOnPause() && this.unlayout()
        };
        g.pauseOnRemove = function() {
            this.element.pauseCallback()
        };
        g.resume = function() {
            this.element.resumeCallback()
        };
        g.unload = function() {
            this.pause();
            this.unlayout()
        };
        g.disconnect = function() {
            delete this.element.__AMP__RESOURCE;
            this.element.disconnect(!0)
        };

        function ki() {
            this.Da = K();
            this.da = null
        }
        g = ki.prototype;
        g.get = function(a) {
            a = this.Da[a];
            return null == a ? null : a
        };
        g.whenSignal = function(a) {
            var b = this.da && this.da[a];
            if (!b) {
                var c = this.Da[a];
                null != c ? b = {
                    promise: "number" == typeof c ? Promise.resolve(c) : Promise.reject(c)
                } : (c = new M, b = {
                    promise: c.promise,
                    resolve: c.resolve,
                    reject: c.reject
                });
                this.da || (this.da = K());
                this.da[a] = b
            }
            return b.promise
        };
        g.signal = function(a, b) {
            if (null == this.Da[a]) {
                var c = void 0 == b ? Date.now() : b;
                this.Da[a] = c;
                (a = this.da && this.da[a]) && a.resolve && (a.resolve(c), a.resolve = void 0, a.reject = void 0)
            }
        };
        g.rejectSignal = function(a, b) {
            null == this.Da[a] && (this.Da[a] = b, (a = this.da && this.da[a]) && a.reject && (a.reject(b), a.promise.catch(function() {}), a.resolve = void 0, a.reject = void 0))
        };
        g.reset = function(a) {
            this.Da[a] && delete this.Da[a];
            var b = this.da && this.da[a];
            b && !b.resolve && delete this.da[a]
        };
        var li = Date.now();

        function mi(a, b) {
            var c = a.split(",");
            J(0 < c.length, "sizes has to have at least one size");
            var d = [];
            c.forEach(function(e) {
                e = e.replace(/\s+/g, " ").trim();
                if (0 != e.length) {
                    var f, h = !1;
                    if (")" == e.charAt(e.length - 1)) {
                        h = !0;
                        var k = 1;
                        for (f = e.length - 2; 0 <= f; f--) {
                            var l = e.charAt(f);
                            "(" == l ? k-- : ")" == l && k++;
                            if (0 == k) break
                        }
                        var m = f - 1;
                        if (0 < f)
                            for (f--; 0 <= f && (l = e.charAt(f), "%" == l || "-" == l || "_" == l || "a" <= l && "z" >= l || "A" <= l && "Z" >= l || "0" <= l && "9" >= l); f--);
                        J(f < m, 'Invalid CSS function in "%s"', e)
                    } else
                        for (f = e.length - 2; 0 <= f && (l = e.charAt(f),
                                "%" == l || "." == l || "a" <= l && "z" >= l || "A" <= l && "Z" >= l || "0" <= l && "9" >= l); f--);
                    if (0 <= f) {
                        var p = e.substring(0, f + 1).trim();
                        var q = e.substring(f + 1).trim()
                    } else q = e, p = void 0;
                    d.push({
                        mediaQuery: p,
                        size: h ? q : b ? He(q) : Ge(q)
                    })
                }
            });
            return new ni(d)
        }

        function ni(a) {
            J(0 < a.length, "SizeList must have at least one option");
            this.zh = a;
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                b < a.length - 1 ? J(c.mediaQuery, "All options except for the last must have a media condition") : J(!c.mediaQuery, "The last option must not have a media condition")
            }
        }
        ni.prototype.select = function(a) {
            for (var b = this.zh, c = b.length - 1, d = 0; d < c; d++) {
                var e = b[d];
                if (a.matchMedia(e.mediaQuery).matches) return e.size
            }
            return b[c].size
        };
        var oi = /nochunking=1/.test(self.location.hash),
            pi = v();

        function qi(a) {
            O(a, "chunk", ri);
            return Ac(a, "chunk")
        }

        function si(a, b, c) {
            if (oi) pi.then(b);
            else {
                var d = qi(a.documentElement || a);
                d.runForStartup(b);
                c && d.runForStartup(function() {
                    d.De = !0
                })
            }
        }

        function ti(a, b) {
            oi ? pi.then(b) : qi(a).run(b, 10)
        }

        function ui(a) {
            this.state = "not_run";
            this.Ad = a
        }

        function vi(a, b) {
            if ("run" != a.state) {
                a.state = "run";
                try {
                    a.Ad(b)
                } catch (c) {
                    throw a.Ef(), c;
                }
            }
        }
        ui.prototype.Ef = function() {};
        ui.prototype.mf = function() {
            return !1
        };
        ui.prototype.ag = function() {
            return !1
        };

        function wi(a, b, c) {
            ui.call(this, a);
            this.Se = c
        }
        n(wi, ui);
        wi.prototype.Ef = function() {
            hf(self.document)
        };
        wi.prototype.mf = function() {
            return this.Se.ampdoc.isVisible()
        };
        wi.prototype.ag = function() {
            return this.Se.We
        };

        function ri(a) {
            var b = this;
            this.ampdoc = a;
            this.A = a.win;
            this.L = new xh;
            this.Fe = this.af.bind(this);
            this.Za = 0;
            this.Bh = !(!this.A.navigator.scheduling || !this.A.navigator.scheduling.isInputPending);
            this.Kc = !1;
            this.De = this.A.document.documentElement.hasAttribute("i-amphtml-no-boilerplate");
            this.A.addEventListener("message", function(c) {
                "amp-macro-task" == c.data && b.af(null)
            });
            this.We = !1;
            Cc(a, "viewer").then(function() {
                b.We = !0
            });
            a.onVisibilityChanged(function() {
                a.isVisible() && b.wa()
            })
        }
        ri.prototype.run = function(a, b) {
            a = new ui(a);
            this.L.enqueue(a, b);
            this.wa()
        };
        ri.prototype.runForStartup = function(a) {
            a = new wi(a, this.A, this);
            this.L.enqueue(a, Number.POSITIVE_INFINITY);
            this.wa()
        };

        function xi(a, b) {
            for (var c = a.L.peek(); c && "not_run" !== c.state;) a.L.dequeue(), c = a.L.peek();
            c && b && a.L.dequeue();
            return c
        }
        ri.prototype.af = function(a) {
            var b = this,
                c = xi(this, !0);
            if (!c) return this.Kc = !1, this.Za = 0, !1;
            try {
                var d = Date.now();
                vi(c, a)
            } finally {
                pi.then().then().then().then().then().then().then().then().then(function() {
                    b.Kc = !1;
                    b.Za += Date.now() - d;
                    H().fine("CHUNK", c.Ad.displayName || c.Ad.name, "Chunk duration", Date.now() - d, b.Za);
                    b.wa()
                })
            }
            return !0
        };

        function yi(a) {
            a.De && (a.Bh ? a.A.navigator.scheduling.isInputPending() : 5 < a.Za) ? (a.Za = 0, zi(a)) : pi.then(function() {
                a.Fe(null)
            })
        }
        ri.prototype.wa = function() {
            if (!this.Kc) {
                var a = xi(this);
                a && (a.mf() ? (this.Kc = !0, yi(this)) : a.ag() && this.A.requestIdleCallback ? Ai(this.A, this.Fe) : zi(this))
            }
        };

        function zi(a) {
            a.A.postMessage("amp-macro-task", "*")
        }

        function Ai(a, b) {
            function c(e) {
                if (15 > e.timeRemaining()) {
                    var f = 2E3 - (Date.now() - d);
                    0 >= f || e.didTimeout ? (H().fine("CHUNK", "Timed out", 2E3, e.didTimeout), b(e)) : (H().fine("CHUNK", "Rescheduling with", f, e.timeRemaining()), a.requestIdleCallback(c, {
                        timeout: f
                    }))
                } else H().fine("CHUNK", "Running idle callback with ", 15), b(e)
            }
            var d = Date.now();
            a.requestIdleCallback(c, {
                timeout: 2E3
            })
        };
        var Bi;

        function Ci(a) {
            function b() {
                return c.apply(this, arguments) || this
            }
            var c = Di(a);
            n(b, c);
            return b
        }

        function Di(a) {
            function b() {
                var d = c.call(this) || this;
                d.createdCallback();
                return d
            }
            if (a.__AMP_BASE_CE_CLASS) return a.__AMP_BASE_CE_CLASS;
            var c = a.HTMLElement;
            n(b, c);
            b.prototype.createdCallback = function() {
                this.Db = this.od = !1;
                this.hc = null;
                this.readyState = "loading";
                this.everAttached = !1;
                this.h = this.B = null;
                this.layout_ = "nodisplay";
                this.Rg = this.xf = -1;
                this.pa = 0;
                this.Ob = this.Nd = !1;
                this.lc = this.Oc = this.tc = void 0;
                this.warnOnMissingOverflow = !0;
                this.layoutScheduleTime = this.ka = this.sizerElement = void 0;
                this.implementation_ =
                    new(a.__AMP_EXTENDED_ELEMENTS && a.__AMP_EXTENDED_ELEMENTS[this.localName])(this);
                this.mb = 1;
                this.Zf = 0;
                this.Gb = this.Ja = void 0;
                this.K = new ki;
                var d = yc(a);
                this.Mh = d && d.isPerformanceTrackingOn();
                this.__AMP_UPG_RES && (this.__AMP_UPG_RES(this), delete this.__AMP_UPG_RES, delete this.__AMP_UPG_PRM)
            };
            b.prototype.signals = function() {
                return this.K
            };
            b.prototype.getAmpDoc = function() {
                return this.B
            };
            b.prototype.getResources = function() {
                return this.h
            };
            b.prototype.isUpgraded = function() {
                return 2 == this.mb
            };
            b.prototype.whenUpgraded =
                function() {
                    return this.K.whenSignal("upgraded")
                };
            b.prototype.upgrade = function(d) {
                this.Gb || 1 != this.mb || (this.implementation_ = new d(this), this.everAttached && this.Xf())
            };
            b.prototype.getUpgradeDelayMs = function() {
                return this.Zf
            };
            b.prototype.sd = function(d, e) {
                this.Zf = a.Date.now() - e;
                this.mb = 2;
                this.implementation_ = d;
                this.classList.remove("amp-unresolved");
                this.classList.remove("i-amphtml-unresolved");
                this.gg();
                this.implementation_.layout_ = this.layout_;
                this.Ba("amp:attached");
                this.getResources().upgraded(this);
                this.K.signal("upgraded")
            };
            b.prototype.gg = function() {
                "nodisplay" == this.layout_ || this.implementation_.isLayoutSupported(this.layout_) || (J(this.getAttribute("layout"), "The element did not specify a layout attribute. Check https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/control_layout and the respective element documentation for details."), J(!1, "Layout not supported: " + this.layout_))
            };
            b.prototype.isBuilt = function() {
                return this.od
            };
            b.prototype.whenBuilt = function() {
                return this.K.whenSignal("built")
            };
            b.prototype.getLayoutPriority = function() {
                this.isUpgraded();
                return this.implementation_.getLayoutPriority()
            };
            b.prototype.getLayoutWidth = function() {
                return this.xf
            };
            b.prototype.getDefaultActionAlias = function() {
                this.isUpgraded();
                return this.implementation_.getDefaultActionAlias()
            };
            b.prototype.isBuilding = function() {
                return !!this.hc
            };
            b.prototype.build = function() {
                var d = this;
                this.isUpgraded();
                return this.hc ? this.hc : this.hc = (new Promise(function(e, f) {
                    var h = d.yg();
                    h ? Mc(d, "consentPolicyManager", "amp-consent").then(function(k) {
                        return k ?
                            k.whenPolicyUnblock(h) : !0
                    }).then(function(k) {
                        k ? e(d.implementation_.buildCallback()) : f(Error("BLOCK_BY_CONSENT"))
                    }) : e(d.implementation_.buildCallback())
                })).then(function() {
                    d.preconnect(!1);
                    d.od = !0;
                    d.classList.add("i-amphtml-built");
                    d.classList.remove("i-amphtml-notbuilt");
                    d.classList.remove("amp-notbuilt");
                    d.K.signal("built");
                    d.Db && d.Ve();
                    d.Ja && R(d.ownerDocument.defaultView).delay(d.rg.bind(d), 1);
                    if (!d.getPlaceholder()) {
                        var e = d.createPlaceholder();
                        e && d.appendChild(e)
                    }
                }, function(e) {
                    d.K.rejectSignal("built",
                        e);
                    Af(e) || xf(e, d);
                    throw e;
                })
            };
            b.prototype.preconnect = function(d) {
                var e = this;
                d ? this.implementation_.preconnectCallback(d) : si(this.getAmpDoc(), function() {
                    var f = e.tagName;
                    e.ownerDocument ? e.ownerDocument.defaultView ? e.implementation_.preconnectCallback(d) : H().error(f, "preconnect without defaultView") : H().error(f, "preconnect without ownerDocument")
                })
            };
            b.prototype.isAlwaysFixed = function() {
                return this.implementation_.isAlwaysFixed()
            };
            b.prototype.updateLayoutBox = function(d, e) {
                var f = e = void 0 === e ? !1 : e;
                this.xf =
                    d.width;
                this.Rg = d.height;
                if (this.isBuilt()) this.onMeasure(f)
            };
            b.prototype.onMeasure = function(d) {
                var e = void 0 === d ? !1 : d;
                this.isBuilt();
                try {
                    if (this.implementation_.onLayoutMeasure(), e) this.implementation_.onMeasureChanged()
                } catch (f) {
                    xf(f, this)
                }
            };
            b.prototype.ef = function() {
                void 0 !== this.sizerElement || "responsive" !== this.layout_ && "intrinsic" !== this.layout_ || (this.sizerElement = this.querySelector("i-amphtml-sizer"));
                return this.sizerElement || null
            };
            b.prototype.ph = function(d) {
                if ("responsive" === this.layout_) X(d,
                    "paddingTop", "0");
                else if ("intrinsic" === this.layout_) {
                    var e = d.querySelector(".i-amphtml-intrinsic-sizer");
                    e && e.setAttribute("src", "")
                }
            };
            b.prototype.applySizesAndMediaQuery = function() {
                void 0 === this.tc && (this.tc = this.getAttribute("media") || null);
                this.tc && this.classList.toggle("i-amphtml-hidden-by-media-query", !this.ownerDocument.defaultView.matchMedia(this.tc).matches);
                if (void 0 === this.Oc) {
                    var d = this.getAttribute("sizes");
                    this.Oc = !this.hasAttribute("disable-inline-width") && d ? mi(d) : null
                }
                this.Oc && X(this,
                    "width", this.Oc.select(this.ownerDocument.defaultView));
                void 0 === this.lc && "responsive" === this.layout_ && (this.lc = (d = this.getAttribute("heights")) ? mi(d, !0) : null);
                this.lc && (d = this.ef()) && X(d, "paddingTop", this.lc.select(this.ownerDocument.defaultView))
            };
            b.prototype.applySize = function(d, e, f) {
                var h = this.ef();
                h && (this.sizerElement = null, this.ph(h), this.Yg(function() {
                    h && Db(h)
                }));
                void 0 !== d && X(this, "height", d, "px");
                void 0 !== e && X(this, "width", e, "px");
                f && (null != f.top && X(this, "marginTop", f.top, "px"), null != f.right &&
                    X(this, "marginRight", f.right, "px"), null != f.bottom && X(this, "marginBottom", f.bottom, "px"), null != f.left && X(this, "marginLeft", f.left, "px"));
                this.Ig() && this.yh();
                Ub(this, "amp:size-changed")
            };
            b.prototype.connectedCallback = function() {
                void 0 === Bi && (Bi = "content" in self.document.createElement("template"));
                Bi || void 0 !== this.Gb || (this.Gb = !!Ib(this, "template"));
                if (!this.Gb && !this.Db && Fb(this)) {
                    this.Db = !0;
                    this.everAttached || (this.classList.add("i-amphtml-element"), this.classList.add("i-amphtml-notbuilt"), this.classList.add("amp-notbuilt"));
                    if (!this.B) {
                        var d = this.ownerDocument.defaultView,
                            e = Qc(d).getAmpDoc(this);
                        this.B = e;
                        var f = this.tagName.toLowerCase();
                        this.implementation_ instanceof fi && !e.declaresExtension(f) && Sc(d).installExtensionForDoc(e, f)
                    }
                    this.h || (this.h = Uc(this.B));
                    this.getResources().add(this);
                    if (this.everAttached) {
                        var h = this.reconstructWhenReparented();
                        h && this.Jf();
                        this.isUpgraded() && (h && this.getResources().upgraded(this), this.Ve(), this.Ba("amp:attached"))
                    } else {
                        this.everAttached = !0;
                        try {
                            var k = Q(this.ownerDocument.defaultView).isIe();
                            d = void 0 === k ? !1 : k;
                            var l = this.getAttribute("i-amphtml-layout");
                            if (l) {
                                var m = De(l);
                                "responsive" != m && "intrinsic" != m || !this.firstElementChild ? "nodisplay" == m && (ue(this, !1), this.style.display = "") : (this.sizerElement = this.querySelector("i-amphtml-sizer") || void 0) && this.sizerElement.setAttribute("slot", "i-amphtml-svc");
                                var p = m
                            } else {
                                var q = this.getAttribute("layout"),
                                    t = this.getAttribute("width"),
                                    w = this.getAttribute("height"),
                                    u = this.getAttribute("sizes"),
                                    r = this.getAttribute("heights"),
                                    y = q ? De(q) : null;
                                J(void 0 !==
                                    y, 'Invalid "layout" value: %s, %s', q, this);
                                var F = t && "auto" != t ? Fe(t) : t;
                                J(void 0 !== F, 'Invalid "width" value: %s, %s', t, this);
                                var sa = w && "fluid" != w ? Fe(w) : w;
                                J(void 0 !== sa, 'Invalid "height" value: %s, %s', w, this);
                                var fb;
                                if (!(fb = y && "fixed" != y && "fixed-height" != y || F && sa)) {
                                    var wa = this.tagName;
                                    wa = wa.toUpperCase();
                                    fb = void 0 === ze[wa]
                                }
                                if (fb) {
                                    var E = F;
                                    var C = sa
                                } else {
                                    var T = this.tagName.toUpperCase();
                                    if (!ze[T]) {
                                        var ba = this.ownerDocument,
                                            ha = T.replace(/^AMP\-/, ""),
                                            ia = ba.createElement(ha);
                                        ia.controls = !0;
                                        te(ia, {
                                            position: "absolute",
                                            visibility: "hidden"
                                        });
                                        ba.body.appendChild(ia);
                                        ze[T] = {
                                            width: (ia.offsetWidth || 1) + "px",
                                            height: (ia.offsetHeight || 1) + "px"
                                        };
                                        ba.body.removeChild(ia)
                                    }
                                    var gb = ze[T];
                                    E = F || "fixed-height" == y ? F : gb.width;
                                    C = sa || gb.height
                                }
                                var I = y ? y : E || C ? "fluid" == C ? "fluid" : !C || E && "auto" != E ? C && E && (u || r) ? "responsive" : "fixed" : "fixed-height" : "container";
                                "fixed" != I && "fixed-height" != I && "responsive" != I && "intrinsic" != I || J(C, 'The "height" attribute is missing: %s', this);
                                "fixed-height" == I && J(!E || "auto" == E, 'The "width" attribute must be missing or "auto": %s',
                                    this);
                                "fixed" != I && "responsive" != I && "intrinsic" != I || J(E && "auto" != E, 'The "width" attribute must be present and not "auto": %s', this);
                                "responsive" == I || "intrinsic" == I ? J(Ie(E) == Ie(C), 'Length units should be the same for "width" and "height": %s, %s, %s', t, w, this) : J(null === r, '"heights" attribute must be missing: %s', this);
                                this.classList.add("i-amphtml-layout-" + I);
                                Ee(I) && this.classList.add("i-amphtml-layout-size-defined");
                                if ("nodisplay" == I) ue(this, !1), this.style.display = "";
                                else if ("fixed" == I) te(this, {
                                    width: E,
                                    height: C
                                });
                                else if ("fixed-height" == I) X(this, "height", C);
                                else if ("responsive" == I) {
                                    var uc = this.ownerDocument.defaultView;
                                    null == Ce && (Ce = W(uc, "layout-aspect-ratio-css") && uc.CSS && uc.CSS.supports && uc.CSS.supports("aspect-ratio: 1/1") || !1);
                                    if (Ce) X(this, "aspect-ratio", Je(E) + "/" + Je(C));
                                    else {
                                        var vc = this.ownerDocument.createElement("i-amphtml-sizer");
                                        vc.setAttribute("slot", "i-amphtml-svc");
                                        te(vc, {
                                            paddingTop: Je(C) / Je(E) * 100 + "%"
                                        });
                                        this.insertBefore(vc, this.firstChild);
                                        this.sizerElement = vc
                                    }
                                } else if ("intrinsic" ==
                                    I) {
                                    var Td = Jd(this)(xe);
                                    Td.firstElementChild.setAttribute("src", d && this.ownerDocument ? we(this.ownerDocument, Je(E), Je(C)) : 'data:image/svg+xml;charset=utf-8,<svg height="' + C + '" width="' + E + '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>');
                                    this.insertBefore(Td, this.firstChild);
                                    this.sizerElement = Td
                                } else "fill" != I && "container" != I && ("flex-item" == I ? (E && X(this, "width", E), C && X(this, "height", C)) : "fluid" == I && (this.classList.add("i-amphtml-layout-awaiting-size"), E && X(this, "width", E), X(this, "height", 0)));
                                this.setAttribute("i-amphtml-layout",
                                    I);
                                p = I
                            }
                            this.layout_ = p
                        } catch (sl) {
                            xf(sl, this)
                        }
                        this.implementation_ instanceof fi || this.Xf();
                        this.isUpgraded() || (this.classList.add("amp-unresolved"), this.classList.add("i-amphtml-unresolved"), this.Ba("amp:stubbed"));
                        this.getResources().isIntersectionExperimentOn() && this.applySizesAndMediaQuery()
                    }
                    this.toggleLoading(!0)
                }
            };
            b.prototype.Ig = function() {
                return this.classList.contains("i-amphtml-layout-awaiting-size")
            };
            b.prototype.yh = function() {
                this.classList.remove("i-amphtml-layout-awaiting-size")
            };
            b.prototype.Xf =
                function() {
                    var d = this,
                        e = this.implementation_;
                    if (1 == this.mb) {
                        this.mb = 4;
                        var f = a.Date.now(),
                            h = e.upgradeCallback();
                        h ? "function" == typeof h.then ? h.then(function(k) {
                            d.sd(k || e, f)
                        }).catch(function(k) {
                            d.mb = 3;
                            nb(k)
                        }) : this.sd(h, f) : this.sd(e, f)
                    }
                };
            b.prototype.disconnectedCallback = function() {
                this.disconnect(!1)
            };
            b.prototype.Ve = function() {
                this.od && this.implementation_.attachedCallback()
            };
            b.prototype.disconnect = function(d) {
                this.Gb || !this.Db || !d && Fb(this) || (d && this.classList.remove("i-amphtml-element"), this.Db = !1,
                    this.getResources().remove(this), this.implementation_.detachedCallback(), this.toggleLoading(!1))
            };
            b.prototype.Ba = function() {};
            b.prototype.prerenderAllowed = function() {
                return this.implementation_.prerenderAllowed()
            };
            b.prototype.isBuildRenderBlocking = function() {
                return this.implementation_.isBuildRenderBlocking()
            };
            b.prototype.createPlaceholder = function() {
                return this.implementation_.createPlaceholderCallback()
            };
            b.prototype.createLoaderLogo = function() {
                return this.implementation_.createLoaderLogoCallback()
            };
            b.prototype.renderOutsideViewport = function() {
                return this.implementation_.renderOutsideViewport()
            };
            b.prototype.idleRenderOutsideViewport = function() {
                return this.implementation_.idleRenderOutsideViewport()
            };
            b.prototype.getLayoutBox = function() {
                return this.zb().getLayoutBox()
            };
            b.prototype.getPageLayoutBox = function() {
                return this.zb().getPageLayoutBox()
            };
            b.prototype.getOwner = function() {
                return this.zb().getOwner()
            };
            b.prototype.getIntersectionChangeEntry = function() {
                var d = this.implementation_.getIntersectionElementLayoutBox(),
                    e = this.getOwner(),
                    f = this.implementation_.getViewport().getRect(),
                    h = e && e.getLayoutBox(),
                    k = kc(d, h, f) || jc(0, 0, 0, 0);
                e = k.width * k.height;
                var l = d.width * d.height;
                e = 0 === l ? 0 : e / l;
                if (l = f) k = mc(k, -f.left, -f.top), d = mc(d, -f.left, -f.top), l = mc(l, -f.left, -f.top);
                return {
                    time: "undefined" !== typeof performance && performance.now ? performance.now() : Date.now() - li,
                    rootBounds: l,
                    boundingClientRect: d,
                    intersectionRect: k,
                    intersectionRatio: e
                }
            };
            b.prototype.zb = function() {
                return this.getResources().getResourceForElement(this)
            };
            b.prototype.getResourceId =
                function() {
                    return this.zb().getId()
                };
            b.prototype.isRelayoutNeeded = function() {
                return this.implementation_.isRelayoutNeeded()
            };
            b.prototype.getImpl = function(d) {
                var e = this;
                d = void 0 === d ? !0 : d;
                return (d ? this.whenBuilt() : this.whenUpgraded()).then(function() {
                    return e.implementation_
                })
            };
            b.prototype.getLayout = function() {
                return this.layout_
            };
            b.prototype.layoutCallback = function(d) {
                var e = this;
                this.isBuilt();
                if (d.aborted) return Promise.reject(zf());
                this.Ba("amp:load-start");
                var f = 0 == this.pa;
                this.K.reset("unload");
                f && this.K.signal("load-start");
                this.toggleLoading(!0);
                var h = sb(function() {
                    return e.implementation_.layoutCallback()
                });
                this.preconnect(!0);
                this.classList.add("i-amphtml-layout");
                return h.then(function() {
                    if (d.aborted) throw zf();
                    f && e.K.signal("load-end");
                    e.readyState = "complete";
                    e.pa++;
                    e.toggleLoading(!1);
                    e.Nd || (e.implementation_.firstLayoutCompleted(), e.Nd = !0, e.Ba("amp:load-end"))
                }, function(k) {
                    if (d.aborted) throw zf();
                    f && e.K.rejectSignal("load-end", k);
                    e.pa++;
                    e.toggleLoading(!1);
                    throw k;
                })
            };
            b.prototype.isPaused =
                function() {
                    return this.Ob
                };
            b.prototype.pauseCallback = function() {
                this.Ob || (this.Ob = !0, this.isBuilt() && this.implementation_.pauseCallback())
            };
            b.prototype.resumeCallback = function() {
                this.Ob && (this.Ob = !1, this.isBuilt() && this.implementation_.resumeCallback())
            };
            b.prototype.unlayoutCallback = function() {
                if (!this.isBuilt()) return !1;
                this.K.signal("unload");
                var d = this.implementation_.unlayoutCallback();
                d && this.Jf();
                this.Ba("amp:unload");
                return d
            };
            b.prototype.Jf = function() {
                this.pa = 0;
                this.Nd = !1;
                this.K.reset("render-start");
                this.K.reset("load-start");
                this.K.reset("load-end");
                this.K.reset("ini-load")
            };
            b.prototype.unlayoutOnPause = function() {
                return this.implementation_.unlayoutOnPause()
            };
            b.prototype.reconstructWhenReparented = function() {
                return this.implementation_.reconstructWhenReparented()
            };
            b.prototype.collapse = function() {
                this.implementation_.collapse()
            };
            b.prototype.collapsedCallback = function(d) {
                this.implementation_.collapsedCallback(d)
            };
            b.prototype.expand = function() {
                this.implementation_.expand()
            };
            b.prototype.mutatedAttributesCallback =
                function(d) {
                    this.implementation_.mutatedAttributesCallback(d)
                };
            b.prototype.enqueAction = function(d) {
                this.isBuilt() ? this.bf(d, !1) : (void 0 === this.Ja && (this.Ja = []), this.Ja.push(d))
            };
            b.prototype.rg = function() {
                var d = this;
                if (this.Ja) {
                    var e = this.Ja;
                    this.Ja = null;
                    e.forEach(function(f) {
                        d.bf(f, !0)
                    })
                }
            };
            b.prototype.bf = function(d, e) {
                try {
                    this.implementation_.executeAction(d, e)
                } catch (f) {
                    nb("Action execution failed:", f, d.node.tagName, d.method)
                }
            };
            b.prototype.yg = function() {
                var d = this.getAttribute("data-block-on-consent");
                if (null === d)
                    if ((d = this.getAmpDoc().getMetaByName("amp-consent-blocking")) ? (d = d.toUpperCase().replace(/\s+/g, ""), d = d.split(",").includes(this.tagName)) : d = !1, d) d = "default", this.setAttribute("data-block-on-consent", d);
                    else return null;
                return "" == d || "default" == d ? this.implementation_.getConsentPolicy() : d
            };
            b.prototype.getRealChildNodes = function() {
                return Mb(this, function(d) {
                    return !Ei(d)
                })
            };
            b.prototype.getRealChildren = function() {
                return Kb(this, function(d) {
                    return !Ei(d)
                })
            };
            b.prototype.getPlaceholder = function() {
                return Lb(this,
                    function(d) {
                        return d.hasAttribute("placeholder") && !("placeholder" in d)
                    })
            };
            b.prototype.togglePlaceholder = function(d) {
                if (d) {
                    var e = this.getPlaceholder();
                    e && e.classList.remove("amp-hidden")
                } else {
                    /^[\w-]+$/.test("placeholder");
                    e = (void 0 !== vb ? vb : vb = wb(this)) ? this.querySelectorAll("> [placeholder]".replace(/^|,/g, "$&:scope ")) : Pb(this, "> [placeholder]");
                    for (var f = 0; f < e.length; f++) "placeholder" in e[f] || e[f].classList.add("amp-hidden")
                }
            };
            b.prototype.getFallback = function() {
                return Nb(this, "fallback")
            };
            b.prototype.toggleFallback =
                function(d) {
                    var e = this.zb().getState();
                    if (!d || 0 != e && 1 != e && 2 != e)
                        if (this.classList.toggle("amp-notsupported", d), 1 == d) {
                            var f = this.getFallback();
                            f && Ac(this.getAmpDoc(), "owners").scheduleLayout(this, f)
                        }
                };
            b.prototype.renderStarted = function() {
                this.K.signal("render-start");
                this.togglePlaceholder(!1);
                this.toggleLoading(!1)
            };
            b.prototype.Ng = function(d) {
                var e = 0 < this.pa || this.K.get("render-start");
                (d = "nodisplay" == this.layout_ || this.hasAttribute("noloading") || e && !d) || (d = this.tagName.toUpperCase(), d = !(Ae[d] || ("AMP-VIDEO" ==
                    d ? 0 : Be.test(d))));
                return d || Ei(this) ? !1 : !0
            };
            b.prototype.toggleLoading = function(d, e) {
                e = void 0 === e ? !1 : e;
                if (this.ownerDocument && this.ownerDocument.defaultView) {
                    var f = Bc(this.getAmpDoc(), "loadingIndicator");
                    f && ((d = d && this.Ng(e)) ? f.track(this) : f.untrack(this))
                }
            };
            b.prototype.getOverflowElement = function() {
                void 0 === this.ka && (this.ka = Nb(this, "overflow")) && (this.ka.hasAttribute("tabindex") || this.ka.setAttribute("tabindex", "0"), this.ka.hasAttribute("role") || this.ka.setAttribute("role", "button"));
                return this.ka
            };
            b.prototype.overflowCallback = function(d, e, f) {
                var h = this;
                this.getOverflowElement();
                this.ka ? (this.ka.classList.toggle("amp-visible", d), this.ka.onclick = d ? function() {
                    var k = Tc(h.getAmpDoc());
                    k.forceChangeSize(h, e, f);
                    k.mutateElement(h, function() {
                        h.overflowCallback(!1, e, f)
                    })
                } : null) : d && this.warnOnMissingOverflow && G().warn("CustomElement", "Cannot resize element and overflow is not available", this)
            };
            b.prototype.Yg = function(d) {
                var e = void 0 === e ? !1 : e;
                this.B ? Tc(this.getAmpDoc()).mutateElement(this, d, e) : d()
            };
            a.__AMP_BASE_CE_CLASS =
                b;
            return a.__AMP_BASE_CE_CLASS
        }

        function Ei(a) {
            var b = "string" == typeof a ? a : a.tagName;
            return b && b.toLowerCase().startsWith("i-") || a.tagName && (a.hasAttribute("placeholder") || a.hasAttribute("fallback") || a.hasAttribute("overflow")) ? !0 : !1
        };

        function Fi(a) {
            a.__AMP_EXTENDED_ELEMENTS || (a.__AMP_EXTENDED_ELEMENTS = {});
            return a.__AMP_EXTENDED_ELEMENTS
        }

        function Gi(a, b) {
            try {
                a.upgrade(b)
            } catch (c) {
                xf(c, a)
            }
        }

        function Hi(a) {
            Nc(a.getHeadNode()).forEach(function(b) {
                a.declareExtension(b);
                Ii(a.win, b)
            })
        }

        function Ii(a, b) {
            Fi(a)[b] || Ji(a, b, fi)
        }

        function Ji(a, b, c) {
            Fi(a)[b] = c;
            var d = Ci(a);
            a.customElements.define(b, d)
        };
        var Ki = "alt aria-describedby aria-label aria-labelledby crossorigin referrerpolicy sizes src srcset title".split(" ");

        function Li(a) {
            Ue.call(this, a);
            this.dc = !0;
            this.Uc = this.Vc = this.J = this.fe = null;
            this.Rf = 0
        }
        n(Li, Ue);
        g = Li.prototype;
        g.mutatedAttributesCallback = function(a) {
            if (this.J) {
                var b = Ki.filter(function(c) {
                    return void 0 !== a[c]
                });
                a.src && !a.srcset && this.element.hasAttribute("srcset") && (this.element.removeAttribute("srcset"), b.push("srcset"), this.user().warn("amp-img", "Removed [srcset] since [src] was mutated. Recommend adding a [srcset] binding to support responsive images.", this.element));
                this.propagateAttributes(b, this.J, !0);
                this.propagateDataset(this.J);
                ve(this.J)
            }
        };
        g.onMeasureChanged = function() {
            Mi(this, !1)
        };
        g.preconnectCallback = function(a) {
            var b = this.element.getAttribute("src");
            b ? P(this.win, "preconnect").url(this.getAmpDoc(), b, a) : (b = this.element.getAttribute("srcset")) && (b = /\S+/.exec(b)) && P(this.win, "preconnect").url(this.getAmpDoc(), b[0], a)
        };
        g.isLayoutSupported = function(a) {
            return Ee(a)
        };
        g.mc = function() {
            if (!this.J) {
                this.dc = !this.element.hasAttribute("fallback");
                this.element.hasAttribute("i-amphtml-ssr") && (this.J = Ob(this.element, "> img:not([placeholder])"));
                this.J = this.J || new Image;
                this.J.setAttribute("decoding", "async");
                this.element.id && this.J.setAttribute("amp-img-id", this.element.id);
                "img" == this.element.getAttribute("role") && (this.element.removeAttribute("role"), this.user().error("amp-img", "Setting role=img on amp-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element."));
                Mi(this, !0);
                this.propagateAttributes(Ki, this.J);
                this.propagateDataset(this.J);
                ve(this.J);
                this.applyFillContent(this.J, !0);
                var a = this.element,
                    b = this.J;
                a.hasAttribute("object-fit") && X(b, "object-fit", a.getAttribute("object-fit"));
                a.hasAttribute("object-position") && X(b, "object-position", a.getAttribute("object-position"));
                this.element.appendChild(this.J)
            }
        };

        function Mi(a, b) {
            if (a.J && !a.element.getAttribute("sizes")) {
                var c = a.element.getAttribute("srcset");
                if (c && !/[0-9]+x(?:,|$)/.test(c) && (c = a.element.getLayoutWidth(), Ni(a, c))) {
                    var d = a.getViewport().getWidth(),
                        e = "(max-width: " + d + "px) " + c + "px, ",
                        f = c + "px";
                    "fixed" !== a.getLayout() && (f = Math.max(Math.round(100 * c / d), 100) + "vw");
                    var h = e + f;
                    b ? a.J.setAttribute("sizes", h) : a.mutateElement(function() {
                        a.J.setAttribute("sizes", h)
                    });
                    a.Rf = c
                }
            }
        }

        function Ni(a, b) {
            return a.J.hasAttribute("sizes") ? b > a.Rf : !0
        }
        g.prerenderAllowed = function() {
            null == this.fe && (this.fe = !this.element.hasAttribute("noprerender"));
            return this.fe
        };
        g.reconstructWhenReparented = function() {
            return !1
        };
        g.layoutCallback = function() {
            var a = this;
            this.mc();
            var b = this.J;
            this.Vc = Oe(b, "load", function() {
                return Oi(a)
            });
            this.Uc = Oe(b, "error", function() {
                return Pi(a)
            });
            return 0 >= this.element.getLayoutWidth() ? v() : this.loadPromise(b)
        };
        g.unlayoutCallback = function() {
            this.Uc && (this.Uc(), this.Uc = null);
            this.Vc && (this.Vc(), this.Vc = null);
            var a = this.J;
            a && !a.complete && (a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=", Db(a), this.J = null);
            return !0
        };
        g.firstLayoutCompleted = function() {
            var a = this.getPlaceholder();
            a && a.classList.contains("i-amphtml-blurry-placeholder") ? se(a, {
                opacity: 0
            }) : this.togglePlaceholder(!1)
        };

        function Oi(a) {
            !a.dc && a.J.classList.contains("i-amphtml-ghost") && a.getVsync().mutate(function() {
                a.J.classList.remove("i-amphtml-ghost");
                a.toggleFallback(!1)
            })
        }

        function Pi(a) {
            a.dc && (a.getVsync().mutate(function() {
                a.J.classList.add("i-amphtml-ghost");
                a.toggleFallback(!0);
                a.togglePlaceholder(!1)
            }), a.dc = !1)
        }
        g.propagateDataset = function(a) {
            for (var b in a.dataset) b in this.element.dataset || delete a.dataset[b];
            for (var c in this.element.dataset) c.startsWith("ampBind") && "ampBind" !== c || a.dataset[c] !== this.element.dataset[c] && (a.dataset[c] = this.element.dataset[c])
        };

        function Qi(a) {
            this.win = a;
            this.hg = this.Zg.bind(this);
            this.ig = this.$g.bind(this);
            this.hd = this.Ge = this.jd = null;
            this.kc = "ontouchstart" in a || void 0 !== a.navigator.maxTouchPoints && 0 < a.navigator.maxTouchPoints || void 0 !== a.DocumentTouch;
            H().fine("Input", "touch detected:", this.kc);
            this.Ib = !1;
            this.win.document.addEventListener("keydown", this.hg);
            this.win.document.addEventListener("mousedown", this.ig);
            this.Dd = !0;
            this.zf = 0;
            this.Fh = new Y;
            this.Af = new Y;
            this.Sd = new Y;
            this.kc && (this.Dd = !this.kc, this.jd = this.ah.bind(this),
                Pe(a.document, "mousemove", this.jd))
        }
        g = Qi.prototype;
        g.setupInputModeClasses = function(a) {
            var b = this;
            this.onTouchDetected(function(c) {
                Ri(b, a, "amp-mode-touch", c)
            }, !0);
            this.onMouseDetected(function(c) {
                Ri(b, a, "amp-mode-mouse", c)
            }, !0);
            this.onKeyboardStateChanged(function(c) {
                Ri(b, a, "amp-mode-keyboard-active", c)
            }, !0)
        };
        g.isTouchDetected = function() {
            return this.kc
        };
        g.onTouchDetected = function(a, b) {
            b && a(this.isTouchDetected());
            return this.Fh.add(a)
        };
        g.isMouseDetected = function() {
            return this.Dd
        };
        g.onMouseDetected = function(a, b) {
            b && a(this.isMouseDetected());
            return this.Af.add(a)
        };
        g.isKeyboardActive = function() {
            return this.Ib
        };
        g.onKeyboardStateChanged = function(a, b) {
            b && a(this.isKeyboardActive());
            return this.Sd.add(a)
        };

        function Ri(a, b, c, d) {
            b.waitForBodyOpen().then(function(e) {
                Vc(a.win).mutate(function() {
                    e.classList.toggle(c, d)
                })
            })
        }
        g.Zg = function(a) {
            this.Ib || a.defaultPrevented || (a = a.target, a && ("INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "OPTION" == a.tagName || a.hasAttribute("contenteditable"))) || (this.Ib = !0, this.Sd.fire(!0), H().fine("Input", "keyboard activated"))
        };
        g.$g = function() {
            this.Ib && (this.Ib = !1, this.Sd.fire(!1), H().fine("Input", "keyboard deactivated"))
        };
        g.ah = function(a) {
            var b = this;
            if (a.sourceCapabilities && a.sourceCapabilities.firesTouchEvents) this.yf();
            else {
                this.hd || (this.hd = this.Xg.bind(this), this.Ge = this.yf.bind(this));
                var c, d = Qe(this.win.document, function(e) {
                    c = e
                });
                return R(this.win).timeoutPromise(300, d).then(this.Ge, function() {
                    c && c();
                    b.hd()
                })
            }
        };
        g.Xg = function() {
            this.Dd = !0;
            this.Af.fire(!0);
            H().fine("Input", "mouse detected")
        };
        g.yf = function() {
            this.zf++;
            3 >= this.zf ? Pe(this.win.document, "mousemove", this.jd) : H().fine("Input", "mouse detection failed")
        };

        function Si() {
            Ue.apply(this, arguments)
        }
        n(Si, Ue);
        Si.prototype.isLayoutSupported = function(a) {
            return "container" == a || Ee(a)
        };
        Si.prototype.buildCallback = function() {
            if ("container" != this.getLayout()) {
                var a = this.win.document.createElement("div");
                this.applyFillContent(a);
                this.getRealChildNodes().forEach(function(b) {
                    a.appendChild(b)
                });
                this.element.appendChild(a)
            }
        };
        Si.prototype.prerenderAllowed = function() {
            return !0
        };

        function Ti(a, b) {
            return Sc(a.win).installExtensionForDoc(a, "amp-loader").then(function() {
                return Lc(b, "loader", "amp-loader")
            })
        }

        function Ui(a, b, c, d, e) {
            var f = e = void 0 === e ? a.win.Date.now() : e,
                h = b.ownerDocument.createElement("div");
            Ti(a, b).then(function(k) {
                var l = a.win.Date.now() - f;
                k.initializeLoader(b, h, l, c, d)
            });
            return h
        };

        function Vi(a, b) {
            return new b.IntersectionObserver(a, {
                threshold: void 0
            })
        }
        new WeakMap;
        new WeakMap;
        var Wi = ['<div class="i-amphtml-loading-container i-amphtml-fill-content amp-hidden"></div>'];

        function Xi(a) {
            this.B = a;
            a = a.win;
            var b = this.inViewport_.bind(this);
            this.Kd = Vi(function(c) {
                return c.forEach(b)
            }, a);
            this.Ia = new WeakMap
        }
        g = Xi.prototype;
        g.dispose = function() {
            this.Kd.disconnect()
        };
        g.track = function(a) {
            this.Kd.observe(a)
        };
        g.untrack = function(a) {
            this.Kd.unobserve(a);
            this.Te(a)
        };
        g.inViewport_ = function(a) {
            var b = a.boundingClientRect,
                c = b.width,
                d = b.height;
            b = a.target;
            a = a.isIntersecting && 20 < c && 20 < d;
            var e = this.Ia.get(b);
            a !== (e && e.shown || !1) && (a && !e && (e = Date.now(), c = Ui(this.B, b, c, d, e), d = Jd(this.B.win.document)(Wi), d.appendChild(c), b.appendChild(d), e = {
                shown: !1,
                loader: c,
                container: d
            }, this.Ia.set(b, e)), e && (e.shown = a, e.container.classList.toggle("amp-hidden", !a), e.loader.classList.toggle("amp-active", a)))
        };
        g.Te = function(a) {
            var b = this.Ia.get(a);
            b && (this.Ia.delete(a), Db(b.container))
        };

        function Yi(a) {
            var b = this;
            this.win = a;
            this.jh = 6E4;
            this.N = [];
            this.Cf = new Y;
            this.Qe = function(c) {
                c.target && 1 == c.target.nodeType && Zi(b, c.target)
            };
            this.Pe = function() {
                R(a).delay(function() {
                    b.win.document.activeElement && Zi(b, b.win.document.activeElement)
                }, 500)
            };
            this.win.document.addEventListener("focus", this.Qe, !0);
            this.win.addEventListener("blur", this.Pe)
        }
        g = Yi.prototype;
        g.Te = function() {
            this.win.document.removeEventListener("focus", this.Qe, !0);
            this.win.removeEventListener("blur", this.Pe)
        };
        g.onFocus = function(a) {
            return this.Cf.add(a)
        };

        function Zi(a, b) {
            var c = Date.now();
            0 == a.N.length || a.N[a.N.length - 1].el != b ? a.N.push({
                el: b,
                time: c
            }) : a.N[a.N.length - 1].time = c;
            a.purgeBefore(c - a.jh);
            a.Cf.fire(b)
        }
        g.getLast = function() {
            return 0 == this.N.length ? null : this.N[this.N.length - 1].el
        };
        g.purgeBefore = function(a) {
            for (var b = this.N.length - 1, c = 0; c < this.N.length; c++)
                if (this.N[c].time >= a) {
                    b = c - 1;
                    break
                } - 1 != b && this.N.splice(0, b + 1)
        };
        g.hasDescendantsOf = function(a) {
            this.win.document.activeElement && Zi(this, this.win.document.activeElement);
            for (var b = 0; b < this.N.length; b++)
                if (a.contains(this.N[b].el)) return !0;
            return !1
        };

        function $i(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.h = Uc(a);
            this.I = Wc(this.ampdoc);
            this.G = Vc(this.win);
            this.bd = new Yi(this.win);
            this.bd.onFocus(function(c) {
                aj(b, c)
            });
            this.Ma = this.h.isIntersectionExperimentOn()
        }
        g = $i.prototype;
        g.forceChangeSize = function(a, b, c, d, e) {
            bj(this, Z(a), b, c, e, void 0, !0, d)
        };
        g.requestChangeSize = function(a, b, c, d, e) {
            var f = this;
            return new Promise(function(h, k) {
                bj(f, Z(a), b, c, d, e, !1, function(l) {
                    l ? h() : k(Error("changeSize attempt denied"))
                })
            })
        };
        g.expandElement = function(a) {
            Z(a).completeExpand();
            this.h.schedulePass(70)
        };
        g.attemptCollapse = function(a) {
            var b = this;
            return new Promise(function(c, d) {
                bj(b, Z(a), 0, 0, void 0, void 0, !1, function(e) {
                    e ? (Z(a).completeCollapse(), c()) : d(H().createExpectedError("collapse attempt denied"))
                })
            })
        };
        g.collapseElement = function(a) {
            if (!this.Ma) {
                var b = this.I.getLayoutRect(a);
                0 != b.width && 0 != b.height && (W(this.win, "dirty-collapse-element") ? this.dirtyElement(a) : this.h.setRelayoutTop(b.top))
            }
            Z(a).completeCollapse();
            this.Ma || this.h.schedulePass(70)
        };
        g.measureElement = function(a) {
            return this.G.measurePromise(a)
        };
        g.mutateElement = function(a, b, c) {
            return cj(this, a, null, b, c)
        };
        g.measureMutateElement = function(a, b, c) {
            return cj(this, a, b, c)
        };

        function cj(a, b, c, d, e) {
            function f() {
                var l = a.I.getLayoutRect(b);
                return 0 != l.width && 0 != l.height ? l.top : -1
            }
            var h = void 0 === e ? !1 : e,
                k = -1;
            return a.G.runPromise({
                measure: function() {
                    c && c();
                    a.Ma || h || (k = f())
                },
                mutate: function() {
                    d();
                    if (!h) {
                        b.classList.contains("i-amphtml-element") && Z(b).requestMeasure();
                        for (var l = b.getElementsByClassName("i-amphtml-element"), m = 0; m < l.length; m++) Z(l[m]).requestMeasure();
                        a.h.schedulePass(70);
                        a.Ma ? a.h.maybeHeightChanged() : (-1 != k && a.h.setRelayoutTop(k), a.G.measure(function() {
                            var p =
                                f(); - 1 != p && p != k && (a.h.setRelayoutTop(p), a.h.schedulePass(70));
                            a.h.maybeHeightChanged()
                        }))
                    }
                }
            })
        }
        g.dirtyElement = function(a) {
            var b = !1;
            a.classList.contains("i-amphtml-element") ? (a = Z(a), this.h.setRelayoutTop(a.getLayoutBox().top)) : b = !0;
            this.h.schedulePass(70, b)
        };

        function aj(a, b) {
            var c = Hb(b, function(e) {
                return !!Z(e)
            });
            if (c) {
                b = Z(c);
                var d = b.getPendingChangeSize();
                void 0 !== d && bj(a, b, d.height, d.width, d.margins, void 0, !0)
            }
        }

        function bj(a, b, c, d, e, f, h, k) {
            b.hasBeenMeasured() && !e ? dj(a, b, c, d, void 0, f, h, k) : a.G.measure(function() {
                b.hasBeenMeasured() || b.measure();
                if (e) {
                    var l = a.win.getComputedStyle(b.element) || K();
                    l = {
                        top: parseInt(l.marginTop, 10) || 0,
                        right: parseInt(l.marginRight, 10) || 0,
                        bottom: parseInt(l.marginBottom, 10) || 0,
                        left: parseInt(l.marginLeft, 10) || 0
                    };
                    l = {
                        newMargins: e,
                        currentMargins: l
                    }
                } else l = void 0;
                dj(a, b, c, d, l, f, h, k)
            })
        }

        function dj(a, b, c, d, e, f, h, k) {
            b.resetPendingChangeSize();
            var l = b.getPageLayoutBox();
            if (!(l = void 0 !== c && c != l.height || void 0 !== d && d != l.width) && (l = void 0 !== e)) {
                l = e.currentMargins;
                var m = e.newMargins;
                l = void 0 !== m.top && m.top != l.top || void 0 !== m.right && m.right != l.right || void 0 !== m.bottom && m.bottom != l.bottom || void 0 !== m.left && m.left != l.left
            }
            l ? (a.h.updateOrEnqueueMutateTask(b, {
                resource: b,
                newHeight: c,
                newWidth: d,
                marginChange: e,
                event: f,
                force: h,
                callback: k
            }), a.h.schedulePassVsync()) : (void 0 === c && void 0 === d && void 0 ===
                e && H().error("Mutator", "attempting to change size with undefined dimensions", b.debugid), k && k(!0))
        };

        function ej(a) {
            return A(a) ? a : [a]
        }

        function fj(a) {
            this.h = Uc(a)
        }
        g = fj.prototype;
        g.setOwner = function(a, b) {
            b.contains(a);
            Z(a) && Z(a).updateOwner(b);
            a.__AMP__OWNER = b;
            a = a.getElementsByClassName("i-amphtml-element");
            for (b = 0; b < a.length; b++) {
                var c = a[b];
                Z(c) && Z(c).updateOwner(void 0)
            }
        };
        g.schedulePreload = function(a, b) {
            gj(this, this.h.getResourceForElement(a), !1, ej(b))
        };
        g.scheduleLayout = function(a, b) {
            gj(this, this.h.getResourceForElement(a), !0, ej(b))
        };
        g.schedulePause = function(a, b) {
            var c = this.h.getResourceForElement(a);
            b = ej(b);
            hj(this, c, b, function(d) {
                d.pause()
            })
        };
        g.scheduleResume = function(a, b) {
            a = this.h.getResourceForElement(a);
            b = ej(b);
            hj(this, a, b, function(c) {
                c.resume()
            })
        };
        g.scheduleUnlayout = function(a, b) {
            a = this.h.getResourceForElement(a);
            b = ej(b);
            hj(this, a, b, function(c) {
                c.unlayout()
            })
        };
        g.requireLayout = function(a, b) {
            var c = this,
                d = [];
            ij(this, a, function(e) {
                4 != e.getState() && (3 != e.getState() ? d.push(e.whenBuilt().then(function() {
                    e.measure();
                    if (e.isDisplayed()) return c.h.scheduleLayoutOrPreload(e, !0, b, !0), e.loadedOnce()
                })) : e.isDisplayed() && d.push(e.loadedOnce()))
            });
            return Promise.all(d)
        };

        function hj(a, b, c, d) {
            c.forEach(function(e) {
                b.element.contains(e);
                ij(a, e, d)
            })
        }

        function ij(a, b, c) {
            if (b.classList.contains("i-amphtml-element")) c(a.h.getResourceForElement(b)), (b = b.getPlaceholder()) && ij(a, b, c);
            else {
                b = b.getElementsByClassName("i-amphtml-element");
                for (var d = [], e = 0; e < b.length; e++) {
                    for (var f = b[e], h = !1, k = 0; k < d.length; k++)
                        if (d[k].contains(f)) {
                            h = !0;
                            break
                        }
                    h || (d.push(f), c(a.h.getResourceForElement(f)))
                }
            }
        }

        function gj(a, b, c, d) {
            hj(a, b, d, function(e) {
                0 === e.getState() ? e.whenBuilt().then(function() {
                    jj(a, e, !c, b.getLayoutPriority())
                }) : jj(a, e, !c, b.getLayoutPriority())
            })
        }

        function jj(a, b, c, d) {
            b.measure();
            2 === b.getState() && b.isDisplayed() && a.h.scheduleLayoutOrPreload(b, !c, d)
        };

        function kj(a, b) {
            if ("referrerPolicy" in Image.prototype) return lj(a, b, !0);
            var c = Eb(a.document);
            c.onload = function() {
                lj(c.contentWindow, b)
            };
            a.document.body.appendChild(c);
            return c
        }

        function lj(a, b, c) {
            var d = c = void 0 === c ? !1 : c;
            a = new a.Image;
            d && (a.referrerPolicy = "no-referrer");
            a.src = b;
            return a
        };

        function mj(a) {
            Ue.call(this, a);
            this.qe = null
        }
        n(mj, Ue);
        mj.prototype.isLayoutSupported = function() {
            return !0
        };
        mj.prototype.buildCallback = function() {
            this.element.setAttribute("aria-hidden", "true");
            (this.Fc = this.element.getAttribute("referrerpolicy")) && J("no-referrer" == this.Fc, 'amp-pixel: invalid "referrerpolicy" value "' + this.Fc + '". Only "no-referrer" is supported');
            this.element.hasAttribute("i-amphtml-ssr") && this.element.querySelector("img") ? H().info("amp-pixel", "inabox img already present") : this.getAmpDoc().whenFirstVisible().then(this.Gh.bind(this))
        };
        mj.prototype.Gh = function() {
            var a = this;
            if (this.qe) return H().error("amp-pixel", "duplicate pixel"), this.qe;
            this.qe = R(this.win).promise(1).then(function() {
                var b = a.element.getAttribute("src");
                if (b) return Bc(a.element, "url-replace").expandUrlAsync(nj(b)).then(function(c) {
                    if (a.win) {
                        var d = a.win;
                        var e = a.Fc;
                        e && "no-referrer" !== e && G().error("pixel", "Unsupported referrerPolicy: %s", e);
                        d = "no-referrer" === e ? kj(d, c) : lj(d, c);
                        H().info("amp-pixel", "pixel triggered: ", c);
                        return d
                    }
                })
            })
        };

        function nj(a) {
            J(/^(https:\/\/|\/\/)/i.test(a), 'The <amp-pixel> src attribute must start with "https://" or "//". Invalid value: ' + a);
            return a
        };

        function oj(a) {
            this.S = a.navigator;
            this.A = a
        }
        g = oj.prototype;
        g.isAndroid = function() {
            return /Android/i.test(this.S.userAgent)
        };
        g.isIos = function() {
            return /iPhone|iPad|iPod/i.test(this.S.userAgent)
        };
        g.isSafari = function() {
            return /Safari/i.test(this.S.userAgent) && !this.isChrome() && !this.isIe() && !this.isEdge() && !this.isFirefox() && !this.isOpera()
        };
        g.isChrome = function() {
            return /Chrome|CriOS/i.test(this.S.userAgent) && !this.isEdge() && !this.isOpera()
        };
        g.isFirefox = function() {
            return /Firefox|FxiOS/i.test(this.S.userAgent) && !this.isEdge()
        };
        g.isOpera = function() {
            return /OPR\/|Opera|OPiOS/i.test(this.S.userAgent)
        };
        g.isIe = function() {
            return /Trident|MSIE|IEMobile/i.test(this.S.userAgent)
        };
        g.isEdge = function() {
            return /Edge/i.test(this.S.userAgent)
        };
        g.isWebKit = function() {
            return /WebKit/i.test(this.S.userAgent) && !this.isEdge()
        };
        g.isWindows = function() {
            return /Windows/i.test(this.S.userAgent)
        };
        g.isStandalone = function() {
            return this.isIos() && this.S.standalone || this.isChrome() && this.A.matchMedia("(display-mode: standalone)").matches
        };
        g.isBot = function() {
            return /bot/i.test(this.S.userAgent)
        };
        g.getMajorVersion = function() {
            return this.isSafari() ? this.isIos() ? this.getIosMajorVersion() || 0 : pj(this, /\sVersion\/(\d+)/, 1) : this.isChrome() ? pj(this, /(Chrome|CriOS)\/(\d+)/, 2) : this.isFirefox() ? pj(this, /(Firefox|FxiOS)\/(\d+)/, 2) : this.isOpera() ? pj(this, /(OPR|Opera|OPiOS)\/(\d+)/, 2) : this.isIe() ? pj(this, /MSIE\s(\d+)/, 1) : this.isEdge() ? pj(this, /Edge\/(\d+)/, 1) : 0
        };

        function pj(a, b, c) {
            if (!a.S.userAgent) return 0;
            a = a.S.userAgent.match(b);
            return !a || c >= a.length ? 0 : parseInt(a[c], 10)
        }
        g.getIosVersionString = function() {
            if (!this.S.userAgent || !this.isIos()) return "";
            var a = this.S.userAgent.match(/OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/);
            return a ? a = a[1].replace(/_/g, ".") : ""
        };
        g.getIosMajorVersion = function() {
            var a = this.getIosVersionString();
            return "" == a ? null : Number(a.split(".")[0])
        };

        function qj(a) {
            return "loading" != a.readyState && "uninitialized" != a.readyState
        }

        function rj(a) {
            return "complete" == a.readyState
        }

        function sj(a, b) {
            tj(a, qj, b)
        }

        function tj(a, b, c) {
            var d = b(a);
            if (d) c(a);
            else {
                var e = function() {
                    b(a) && (d || (d = !0, c(a)), a.removeEventListener("readystatechange", e))
                };
                a.addEventListener("readystatechange", e)
            }
        }

        function uj(a) {
            return new Promise(function(b) {
                sj(a, b)
            })
        }

        function vj(a) {
            return new Promise(function(b) {
                tj(a, rj, b)
            })
        };
        var wj = ["<link rel=preload referrerpolicy=origin>"],
            xj = null;

        function yj(a) {
            this.wd = a.document;
            this.Ed = a.document.head;
            this.Nb = {};
            this.$f = {};
            this.ra = Q(a);
            this.Nb[U(a.location.href).origin] = !0;
            a: {
                if (!xj) {
                    var b = a.document.createElement("link");
                    var c = b.relList;
                    b.as = "invalid-value";
                    if (!c || !c.supports) {
                        b = {};
                        break a
                    }
                    xj = {
                        preconnect: c.supports("preconnect"),
                        preload: c.supports("preload"),
                        onlyValidAs: "invalid-value" != b.as
                    }
                }
                b = xj
            }
            this.ic = b;
            this.O = R(a)
        }
        yj.prototype.url = function(a, b, c) {
            var d = this;
            a.whenFirstVisible().then(function() {
                d.$b(a, b, c)
            })
        };
        yj.prototype.$b = function(a, b, c) {
            if (zj(b)) {
                a = U(b).origin;
                b = Date.now();
                var d = this.Nb[a];
                if (d && b < d) c && (this.Nb[a] = b + 18E4);
                else {
                    this.Nb[a] = b + (c ? 18E4 : 1E4);
                    if (!this.ic.preconnect) {
                        var e = this.wd.createElement("link");
                        e.setAttribute("rel", "dns-prefetch");
                        e.setAttribute("href", a);
                        this.Ed.appendChild(e)
                    }
                    var f = this.wd.createElement("link");
                    f.setAttribute("rel", "preconnect");
                    f.setAttribute("href", a);
                    f.setAttribute("referrerpolicy", "origin");
                    this.Ed.appendChild(f);
                    this.O.delay(function() {
                        e && e.parentNode && e.parentNode.removeChild(e);
                        f.parentNode && f.parentNode.removeChild(f)
                    }, 1E4);
                    Aj(this, a)
                }
            }
        };
        yj.prototype.preload = function(a, b, c) {
            var d = this;
            zj(b) && !this.$f[b] && (this.$f[b] = !0, this.url(a, b, !0), this.ic.preload && ("document" == c && this.ra.isSafari() || a.whenFirstVisible().then(function() {
                var e = Jd(d.wd)(wj);
                e.setAttribute("href", b);
                e.as = d.ic.onlyValidAs ? "fetch" : "";
                d.Ed.appendChild(e)
            })))
        };

        function zj(a) {
            return a.startsWith("https:") || a.startsWith("http:") ? !0 : !1
        }

        function Aj(a, b) {
            if (!a.ic.preconnect && (a.ra.isSafari() || a.ra.isIos())) {
                var c = Date.now();
                a.Nb[b] = c + 18E4;
                a = new XMLHttpRequest;
                a.open("HEAD", b + "/robots.txt?_AMP_safari_preconnect_polyfill_cachebust=" + (c - c % 18E4), !0);
                a.withCredentials = !0;
                a.send()
            }
        }

        function Bj() {
            var a = self.document;
            vj(a).then(function() {
                var b = a.defaultView;
                if (b) {
                    b = P(b, "preconnect");
                    var c = Rc(a.documentElement),
                        d = tc(a);
                    b.url(d, c.sourceUrl);
                    b.url(d, c.canonicalUrl)
                }
            })
        };

        function Cj(a) {
            this.D = a;
            this.Wf = Object.create(null)
        }
        Cj.prototype.addTransition = function(a, b, c) {
            this.Wf[a + "|" + b] = c
        };
        Cj.prototype.setState = function(a) {
            var b = this.D;
            this.D = a;
            (a = this.Wf[b + "|" + a]) && a()
        };

        function Dj() {
            try {
                return new IntersectionObserver(function() {}, {
                    root: document
                }), !0
            } catch (a) {
                return !1
            }
        }

        function Ej(a) {
            !pf(a.document) && Dj() && ne(a, [{
                experimentId: "intersect-resources",
                isTrafficEligible: function() {
                    return !0
                },
                branches: ["21068800", "21068801"]
            }])
        };

        function Fj(a, b, c) {
            var d = this;
            this.O = R(a);
            this.Fg = b;
            this.qg = c || 0;
            this.ta = -1;
            this.Zd = 0;
            this.Pa = !1;
            this.jg = function() {
                d.Dc()
            }
        }
        Fj.prototype.isPending = function() {
            return -1 != this.ta
        };
        Fj.prototype.schedule = function(a) {
            var b = a || this.qg;
            this.Pa && 10 > b && (b = 10);
            var c = Date.now() + b;
            return !this.isPending() || -10 > c - this.Zd ? (this.cancel(), this.Zd = c, this.ta = this.O.delay(this.jg, b), !0) : !1
        };
        Fj.prototype.Dc = function() {
            this.ta = -1;
            this.Zd = 0;
            this.Pa = !0;
            this.Fg();
            this.Pa = !1
        };
        Fj.prototype.cancel = function() {
            this.isPending() && (this.O.cancel(this.ta), this.ta = -1)
        };

        function Gj() {
            this.L = [];
            this.Xb = {};
            this.tf = this.uf = 0
        }
        g = Gj.prototype;
        g.getSize = function() {
            return this.L.length
        };
        g.getLastEnqueueTime = function() {
            return this.uf
        };
        g.getLastDequeueTime = function() {
            return this.tf
        };
        g.getTaskById = function(a) {
            return this.Xb[a] || null
        };
        g.enqueue = function(a) {
            this.L.push(a);
            this.Xb[a.id] = a;
            this.uf = Date.now()
        };
        g.dequeue = function(a) {
            if (!this.removeAtIndex(a, this.L.indexOf(this.Xb[a.id]))) return !1;
            this.tf = Date.now();
            return !0
        };
        g.peek = function(a) {
            for (var b = 1E6, c = null, d = 0; d < this.L.length; d++) {
                var e = this.L[d],
                    f = a(e);
                f < b && (b = f, c = e)
            }
            return c
        };
        g.forEach = function(a) {
            this.L.forEach(a)
        };
        g.removeAtIndex = function(a, b) {
            var c = this.Xb[a.id];
            if (!c || this.L[b] != c) return !1;
            this.L.splice(b, 1);
            delete this.Xb[a.id];
            return !0
        };
        g.purge = function(a) {
            for (var b = this.L.length; b--;) a(this.L[b]) && this.removeAtIndex(this.L[b], b)
        };

        function Hj(a) {
            if (Q(a).isIe()) {
                a = a.document;
                for (var b = a.querySelectorAll('.i-amphtml-intrinsic-sizer[src^="data:image/svg"]'), c = 0; c < b.length; c++) {
                    var d = b[c],
                        e = Ib(d, ".i-amphtml-element");
                    if (e) {
                        var f = Je(e.getAttribute("width"));
                        e = Je(e.getAttribute("height"));
                        f && e && (d.src = we(a, f, e))
                    }
                }
            }
        };

        function Ij(a) {
            return !Q(a).isIe() || Jj(a) ? null : new Promise(function(b) {
                var c = Date.now() + 2E3,
                    d = a.setInterval(function() {
                        var e = Date.now(),
                            f = Jj(a);
                        if (f || e > c) a.clearInterval(d), b(), f || H().error("ie-media-bug", "IE media never resolved")
                    }, 10)
            })
        }

        function Jj(a) {
            var b = "(min-width: " + (a.innerWidth - 1) + "px) AND (max-width: " + (a.innerWidth + 1 + "px)");
            try {
                return a.matchMedia(b).matches
            } catch (c) {
                return H().error("ie-media-bug", "IE matchMedia failed: ", c), !0
            }
        };

        function Kj(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.j = S(a);
            this.ia = this.j.isRuntimeOn();
            this.Jg = !1;
            this.sh = 0;
            this.h = [];
            this.nd = this.Ne = this.xe = 0;
            this.ga = this.ampdoc.isVisible();
            this.vb = !1;
            this.cf = !0;
            this.cd = !1;
            this.jc = -1;
            this.Ea = !0;
            this.jb = -1;
            this.Td = this.qc = 0;
            this.Dc = new Fj(this.win, function() {
                return b.doPass()
            });
            this.If = new Fj(this.win, function() {
                b.Ea = !0;
                b.schedulePass()
            });
            this.oa = new Gj;
            this.F = new Gj;
            this.md = this.mg.bind(this);
            this.ea = [];
            this.ua = [];
            this.Ld = !1;
            this.I = Wc(this.ampdoc);
            this.G =
                Vc(this.win);
            this.bd = new Yi(this.win);
            this.we = !1;
            this.Xa = 0;
            this.ab = !1;
            this.Cc = [];
            this.xd = [];
            this.ih = W(this.win, "build-close-to-viewport");
            this.lg = W(this.win, "build-in-chunks");
            this.Hc = W(this.win, "remove-task-timeout");
            this.df = new M;
            this.dg = new Cj(this.ampdoc.getVisibilityState());
            this.U = null;
            this.nf = !1;
            Ej(this.win);
            if ("21068801" === oe(this.win) && !pf(this.win.document)) {
                var c = Tb(this.win);
                a = this.ampdoc.isSingleDoc() && c ? this.win.document : null;
                try {
                    this.U = new IntersectionObserver(function(d) {
                        return b.intersect(d)
                    }, {
                        root: a,
                        rootMargin: "250% 31.25%"
                    }), this.Ea = !1
                } catch (d) {
                    H().warn("Resources", "Falling back to classic Resources:", d)
                }
            }
            this.I.onChanged(function(d) {
                b.qc = Date.now();
                b.Td = d.velocity;
                d.relayoutAll && (b.Ea = !0, b.ab = !0);
                !b.Ea && b.U || b.schedulePass();
                b.Ea && b.U && b.h.forEach(function(e) {
                    return e.invalidatePremeasurementAndRequestMeasure()
                })
            });
            this.I.onScroll(function() {
                b.qc = Date.now()
            });
            this.ampdoc.onVisibilityChanged(function() {
                -1 == b.jc && b.ampdoc.isVisible() && (b.jc = Date.now());
                b.schedulePass()
            });
            this.j.onRuntimeState(function(d) {
                H().fine("Resources",
                    "Runtime state:", d);
                b.ia = d;
                b.schedulePass(1)
            });
            si(this.ampdoc, function() {
                Lj(b, b.dg);
                b.schedulePass(0)
            });
            Mj(this);
            this.U || (this.Rc = mf(this.win, function(d) {
                d = d.target;
                d.nodeType !== Node.ELEMENT_NODE || d === b.I.getScrollingElement() || b.xd.includes(d) || (b.xd.push(d), b.schedulePass(70))
            }, 250), Oe(this.win.document, "scroll", this.Rc, {
                capture: !0,
                passive: !0
            }))
        }
        g = Kj.prototype;
        g.isIntersectionExperimentOn = function() {
            return !!this.U
        };
        g.intersect = function(a) {
            this.nf = !0;
            a.forEach(function(b) {
                var c = b.boundingClientRect;
                Z(b.target).premeasure(c)
            });
            this.schedulePass()
        };

        function Mj(a) {
            a.ampdoc.whenReady().then(function() {
                a.vb = !0;
                Nj(a);
                a.ua = null;
                P(a.win, "input").setupInputModeClasses(a.ampdoc);
                Hj(a.win);
                if (!a.U) {
                    var b = Ij(a.win),
                        c = function() {
                            return a.If.schedule()
                        };
                    b ? b.then(c) : c();
                    Promise.race([Te(a.win), R(a.win).promise(3100)]).then(c);
                    a.win.document.fonts && "loaded" != a.win.document.fonts.status && a.win.document.fonts.ready.then(c)
                }
            })
        }
        g.get = function() {
            return this.h.slice(0)
        };
        g.getAmpdoc = function() {
            return this.ampdoc
        };
        g.getResourceForElement = function(a) {
            return Z(a)
        };
        g.getResourceForElementOptional = function(a) {
            return Z(a)
        };
        g.getScrollDirection = function() {
            return Math.sign(this.Td) || 1
        };
        g.add = function(a) {
            this.xe++;
            1 == this.xe && this.I.ensureReadyForElements();
            var b = Z(a);
            b && 0 != b.getState() && !a.reconstructWhenReparented() ? (b.requestMeasure(), H().fine("Resources", "resource reused:", b.debugid)) : (b = new gi(++this.sh, a, this), H().fine("Resources", "resource added:", b.debugid));
            this.h.push(b);
            this.U ? this.U.observe(a) : this.If.schedule(1E3)
        };

        function Oj(a, b, c, d) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? !1 : d;
            var e = c,
                f = d;
            if (a.ia || a.Jg)
                if ("prerender" != a.ampdoc.getVisibilityState() || b.prerenderAllowed())
                    if (!a.ih || f || b.isBuildRenderBlocking() || b.renderOutsideViewport() || Pj(a) && b.idleRenderOutsideViewport()) a.vb ? Qj(a, b, f) : b.isBuilt() || b.isBuilding() || e && a.ua.includes(b) || (a.ua.push(b), Nj(a))
        }

        function Nj(a) {
            if (!a.Ld) try {
                a.Ld = !0;
                for (var b = 0; b < a.ua.length; b++) {
                    var c = a.ua[b],
                        d;
                    if (!(d = a.vb)) a: {
                        var e = a.ampdoc.getRootNode(),
                            f = c.element;do
                            if (f.nextSibling) {
                                d = !0;
                                break a
                            }
                        while ((f = f.parentNode) && f != e);
                        d = !1
                    }
                    d && (a.ua.splice(b--, 1), Qj(a, c))
                }
            } finally {
                a.Ld = !1
            }
        }

        function Qj(a, b, c) {
            if ((void 0 === c ? 0 : c) || (a.lg && 10 <= a.nd ? 0 : 20 > a.Ne || a.ampdoc.hasBeenVisible()) || b.isBuildRenderBlocking())
                if (c = b.build()) H().fine("Resources", "build resource:", b.debugid), a.Ne++, a.nd++, c.then(function() {
                    return a.schedulePass()
                }, function(d) {
                    Rj(a, b);
                    if (!Af(d)) throw d;
                })
        }
        g.remove = function(a) {
            (a = Z(a)) && Rj(this, a)
        };

        function Rj(a, b) {
            var c = a.h.indexOf(b); - 1 != c && a.h.splice(c, 1);
            b.isBuilt() && b.pauseOnRemove();
            a.U && a.U.unobserve(b.element);
            Sj(a, b, !0);
            H().fine("Resources", "resource removed:", b.debugid)
        }
        g.upgraded = function(a) {
            a = Z(a);
            Oj(this, a);
            H().fine("Resources", "resource upgraded:", a.debugid)
        };
        g.updateLayoutPriority = function(a, b) {
            var c = Z(a);
            c.updateLayoutPriority(b);
            this.F.forEach(function(d) {
                d.resource == c && (d.priority = b)
            });
            this.schedulePass()
        };
        g.schedulePass = function(a) {
            return this.Dc.schedule(a)
        };
        g.updateOrEnqueueMutateTask = function(a, b) {
            for (var c = null, d = 0; d < this.ea.length; d++)
                if (this.ea[d].resource == a) {
                    c = this.ea[d];
                    break
                }
            c ? (c.newHeight = b.newHeight, c.newWidth = b.newWidth, c.marginChange = b.marginChange, c.event = b.event, c.force = b.force || c.force, c.callback = b.callback) : this.ea.push(b)
        };
        g.schedulePassVsync = function() {
            var a = this;
            this.we || (this.we = !0, this.G.mutate(function() {
                return a.doPass()
            }))
        };
        g.ampInitComplete = function() {
            this.cd = !0;
            H().fine("Resources", "ampInitComplete");
            this.schedulePass()
        };
        g.setRelayoutTop = function(a) {
            this.jb = -1 == this.jb ? a : Math.min(a, this.jb)
        };
        g.maybeHeightChanged = function() {
            this.ab = !0
        };
        g.onNextPass = function(a) {
            this.Cc.push(a)
        };
        g.doPass = function() {
            var a = this;
            if (this.ia) {
                this.ga = this.ampdoc.isVisible();
                this.nd = 0;
                if (this.vb && this.cf && this.cd) {
                    this.cf = !1;
                    var b = this.win.document,
                        c = Rc(this.ampdoc);
                    this.j.sendMessage("documentLoaded", L({
                        title: b.title,
                        sourceUrl: fe(this.ampdoc.getUrl()),
                        serverLayout: b.documentElement.hasAttribute("i-amphtml-element"),
                        linkRels: c.linkRels,
                        metaTags: {
                            viewport: c.viewport
                        },
                        viewport: c.viewport
                    }), !0);
                    this.Xa = this.I.getContentHeight();
                    this.j.sendMessage("documentHeight", L({
                        height: this.Xa
                    }), !0);
                    H().fine("Resources",
                        "document height on load: %s", this.Xa)
                }
                var d = this.I.getSize();
                H().fine("Resources", "PASS: visible=", this.ga, ", relayoutAll=", this.Ea, ", relayoutTop=", this.jb, ", viewportSize=", d.width, d.height);
                this.Dc.cancel();
                this.we = !1;
                this.dg.setState(this.ampdoc.getVisibilityState());
                !this.vb || !this.cd || this.U && !this.nf || this.ampdoc.signals().get("ready-scan") || (this.ampdoc.signals().signal("ready-scan"), H().fine("Resources", "signal: ready-scan"));
                this.ab && (this.ab = !1, this.G.measure(function() {
                    var e = a.I.getContentHeight();
                    e != a.Xa && (a.j.sendMessage("documentHeight", L({
                        height: e
                    }), !0), a.Xa = e, H().fine("Resources", "document height changed: %s", a.Xa), a.I.contentHeightChanged())
                }));
                for (b = 0; b < this.Cc.length; b++)(0, this.Cc[b])();
                this.Cc.length = 0
            } else H().fine("Resources", "runtime is off")
        };

        function Tj(a) {
            var b = Date.now(),
                c = a.I.getRect(),
                d = c.height / 10,
                e = c.height / 10,
                f = .01 > Math.abs(a.Td) && 500 < b - a.qc || 1E3 < b - a.qc;
            if (0 < a.ea.length) {
                H().fine("Resources", "change size requests:", a.ea.length);
                var h = a.ea;
                a.ea = [];
                var k = -1,
                    l = [],
                    m = 0;
                b = {};
                for (var p = 0; p < h.length; b = {
                        Ua: b.Ua,
                        bc: b.bc,
                        H: b.H,
                        P: b.P
                    }, p++) {
                    b.H = h[p];
                    var q = b.H;
                    b.Ua = q.resource;
                    q = q.event;
                    var t = b.Ua.getLayoutBox(),
                        w = 0,
                        u = 0,
                        r = 0,
                        y = 0,
                        F = t,
                        sa = F.top,
                        fb = F.bottom;
                    b.P = void 0;
                    b.H.marginChange && (b.P = b.H.marginChange.newMargins, F = b.H.marginChange.currentMargins,
                        void 0 != b.P.top && (w = b.P.top - F.top), void 0 != b.P.bottom && (u = b.P.bottom - F.bottom), void 0 != b.P.left && (r = b.P.left - F.left), void 0 != b.P.right && (y = b.P.right - F.right), w && (sa = t.top - F.top), u && (fb = t.bottom + F.bottom));
                    var wa = b.H.newHeight - t.height;
                    b.bc = b.H.newWidth - t.width;
                    var E = !1;
                    if (0 != wa || 0 != w || 0 != u || 0 != b.bc || 0 != r || 0 != y)
                        if (b.H.force || !a.ga) E = !0;
                        else if (a.bd.hasDescendantsOf(b.Ua.element) || q && q.userActivation && q.userActivation.hasBeenActive) E = !0;
                    else if (sa >= c.bottom - e || 0 == w && t.bottom + Math.min(wa, 0) >= c.bottom -
                        e) E = !0;
                    else if (1 < c.top && fb <= c.top + d) {
                        if (0 > wa && c.top + m < -wa) continue;
                        f ? (m += wa, l.push(b.H)) : a.ea.push(b.H);
                        continue
                    } else Uj(a, b.Ua, t) ? E = !0 : 0 > wa || 0 > w || 0 > u || (b.H.newHeight == t.height ? a.G.run({
                        measure: function(C) {
                            return function(T) {
                                T.resize = !1;
                                var ba = C.Ua.element.parentElement;
                                if (ba) {
                                    for (var ha = ba.getLayoutWidth && ba.getLayoutWidth() || ba.offsetWidth, ia = C.bc, gb = 0; gb < ba.childElementCount; gb++)
                                        if (ia += ba.children[gb].offsetWidth, ia > ha) return;
                                    T.resize = !0
                                }
                            }
                        }(b),
                        mutate: function(C) {
                            return function(T) {
                                T.resize && C.H.resource.changeSize(C.H.newHeight,
                                    C.H.newWidth, C.P);
                                C.H.resource.overflowCallback(!T.resize, C.H.newHeight, C.H.newWidth, C.P)
                            }
                        }(b)
                    }, {}) : b.H.resource.overflowCallback(!0, b.H.newHeight, b.H.newWidth, b.P));
                    E && (0 <= t.top && (k = -1 == k ? t.top : Math.min(k, t.top)), b.H.resource.changeSize(b.H.newHeight, b.H.newWidth, b.P), b.H.resource.overflowCallback(!1, b.H.newHeight, b.H.newWidth, b.P), a.ab = !0);
                    b.H.callback && b.H.callback(E)
                } - 1 != k && a.setRelayoutTop(k);
                0 < l.length && a.G.run({
                    measure: function(C) {
                        C.scrollHeight = a.I.getScrollHeight();
                        C.scrollTop = a.I.getScrollTop()
                    },
                    mutate: function(C) {
                        var T = -1;
                        l.forEach(function(ha) {
                            var ia = ha.resource.getLayoutBox();
                            T = -1 == T ? ia.top : Math.min(T, ia.top);
                            ha.resource.changeSize(ha.newHeight, ha.newWidth, ha.marginChange ? ha.marginChange.newMargins : void 0);
                            ha.callback && ha.callback(!0)
                        }); - 1 != T && a.setRelayoutTop(T);
                        var ba = a.I.getScrollHeight();
                        ba != C.scrollHeight && a.I.setScrollTop(C.scrollTop + (ba - C.scrollHeight));
                        a.ab = !0
                    }
                }, {})
            }
        }

        function Uj(a, b, c) {
            var d = a.I.getContentHeight();
            a = Math.max(.85 * d, d - 1E3);
            var e = c || b.getLayoutBox(),
                f = b.getInitialLayoutBox();
            return e.bottom >= a || f.bottom >= a
        }

        function Vj(a, b) {
            b = void 0 === b ? !1 : b;
            var c = a.isDisplayed();
            a.measure(b);
            return !(c && !a.isDisplayed())
        }

        function Wj(a, b) {
            b.length && a.G.mutate(function() {
                b.forEach(function(c) {
                    c.unload();
                    Sj(a, c)
                });
                H().fine("Resources", "unload:", b)
            })
        }

        function Pj(a, b) {
            var c = b = void 0 === b ? Date.now() : b,
                d = a.oa.getLastDequeueTime();
            return 0 == a.oa.getSize() && 0 == a.F.getSize() && c > d + 5E3 && 0 < d
        }
        g.mg = function(a) {
            var b = this.I.getRect(),
                c = a.resource.getLayoutBox(),
                d = Math.floor((c.top - b.top) / b.height);
            Math.sign(d) != this.getScrollDirection() && (d *= 2);
            d = Math.abs(d);
            return 10 * a.priority + d
        };

        function Xj(a, b) {
            var c = Date.now();
            if (0 == a.oa.getSize()) return -1 === a.jc ? 0 : Math.max(1E3 * b.priority - (c - a.jc), 0);
            var d = 0;
            a.oa.forEach(function(e) {
                d = Math.max(d, Math.max(1E3 * (b.priority - e.priority), 0) - (c - e.startTime))
            });
            return d
        }
        g.oh = function(a) {
            this.F.getTaskById(a.id) || this.F.enqueue(a)
        };
        g.Tf = function(a, b, c) {
            this.oa.dequeue(a);
            this.schedulePass(1E3);
            if (!b) return H().info("Resources", "task failed:", a.id, a.resource.debugid, c), Promise.reject(c)
        };

        function Yj(a, b, c) {
            return 0 != b.getState() && b.isDisplayed() && (a.ga || "prerender" == a.ampdoc.getVisibilityState() && b.prerenderAllowed()) && (c || b.isInViewport() || b.renderOutsideViewport() || b.idleRenderOutsideViewport()) ? !0 : !1
        }
        g.scheduleLayoutOrPreload = function(a, b, c, d) {
            a.getState();
            a.isDisplayed();
            d = d || !1;
            Yj(this, a, d) && (b ? this.wa(a, "L", 0, c || 0, d, a.startLayout.bind(a)) : this.wa(a, "P", 2, c || 0, d, a.startLayout.bind(a)))
        };
        g.wa = function(a, b, c, d, e, f) {
            b = a.getTaskId(b);
            a = {
                id: b,
                resource: a,
                priority: Math.max(a.getLayoutPriority(), d) + c,
                forceOutsideViewport: e,
                callback: f,
                scheduleTime: Date.now(),
                startTime: 0,
                promise: null
            };
            H().fine("Resources", "schedule:", a.id, "at", a.scheduleTime);
            var h = this.F.getTaskById(b);
            if (!h || a.priority < h.priority) h && this.F.dequeue(h), this.F.enqueue(a), this.Hc ? this.schedulePass() : this.schedulePass(Xj(this, a));
            a.resource.layoutScheduled(a.scheduleTime)
        };
        g.whenFirstPass = function() {
            return this.df.promise
        };

        function Lj(a, b) {
            function c() {
                a.h.forEach(function(k) {
                    return k.resume()
                });
                h()
            }

            function d() {
                a.h.forEach(function(k) {
                    k.unload();
                    Sj(a, k)
                });
                try {
                    a.win.getSelection().removeAllRanges()
                } catch (k) {}
            }

            function e() {
                a.h.forEach(function(k) {
                    return k.pause()
                })
            }

            function f() {}

            function h() {
                var k = a.I.getSize();
                if (0 < k.height && 0 < k.width) {
                    0 < a.ea.length && Tj(a);
                    k = Date.now();
                    var l = a.Ea,
                        m = a.jb,
                        p = a.xd;
                    a.Ea = !1;
                    a.jb = -1;
                    for (var q = 0, t = 0, w = 0; w < a.h.length; w++) {
                        var u = a.h[w];
                        0 != u.getState() || u.isBuilding() || Oj(a, u, !0);
                        if (a.U) l && (u.applySizesAndMediaQuery(),
                            H().fine("Resources", "apply sizes/media query:", u.debugid));
                        else if (l || !u.hasBeenMeasured() || 1 == u.getState()) u.applySizesAndMediaQuery(), H().fine("Resources", "apply sizes/media query:", u.debugid), q++;
                        u.isMeasureRequested() && t++
                    }
                    var r;
                    if (a.U)
                        for (m = 0; m < a.h.length; m++) {
                            if (q = a.h[m], t = q.isMeasureRequested(), !q.hasOwner() || t) w = q.hasBeenPremeasured(), t && H().fine("Resources", "force remeasure:", q.debugid), u = !q.hasBeenMeasured() && "AMP-AD" == q.element.tagName, (w || t || l || u) && !Vj(q, w) && (q.getState(), r || (r = []), r.push(q))
                        } else if (0 <
                            q || 0 < t || l || -1 != m || 0 < p.length)
                            for (q = 0; q < a.h.length; q++)
                                if (t = a.h[q], !t.hasOwner() || t.isMeasureRequested()) {
                                    w = l || 1 == t.getState() || !t.hasBeenMeasured() || t.isMeasureRequested() || -1 != m && t.getLayoutBox().bottom >= m;
                                    if (!w)
                                        for (u = 0; u < p.length; u++)
                                            if (p[u].contains(t.element)) {
                                                w = !0;
                                                break
                                            }
                                    w && !Vj(t) && (r || (r = []), r.push(t))
                                }
                    p.length = 0;
                    r && Wj(a, r);
                    l = a.I.getRect();
                    r = a.ga ? lc(l, 2) : l;
                    l = a.ga ? lc(l, .25) : l;
                    for (p = 0; p < a.h.length; p++) m = a.h[p], 0 == m.getState() || m.hasOwner() || (q = a.ga && m.isDisplayed() && m.overlaps(l), m.setInViewport(q));
                    if (r)
                        for (l = 0; l < a.h.length; l++) p = a.h[l], !p.isBuilt() && !p.isBuilding() && !p.hasOwner() && p.hasBeenMeasured() && p.isDisplayed() && p.overlaps(r) && Oj(a, p, !0, !0), 2 != p.getState() || p.hasOwner() || p.isDisplayed() && p.overlaps(r) && a.scheduleLayoutOrPreload(p, !0);
                    if (a.ga && Pj(a, k)) {
                        for (r = k = 0; r < a.h.length && 4 > k; r++) l = a.h[r], 2 == l.getState() && !l.hasOwner() && l.isDisplayed() && l.idleRenderOutsideViewport() && (H().fine("Resources", "idleRenderOutsideViewport layout:", l.debugid), a.scheduleLayoutOrPreload(l, !1), k++);
                        for (r = 0; r <
                            a.h.length && 4 > k; r++) l = a.h[r], 2 == l.getState() && !l.hasOwner() && l.isDisplayed() && (H().fine("Resources", "idle layout:", l.debugid), a.scheduleLayoutOrPreload(l, !1), k++)
                    }
                    k = Date.now();
                    l = -1;
                    for (r = a.F.peek(a.md); r;) {
                        a.Hc || (l = Xj(a, r));
                        H().fine("Resources", "peek from queue:", r.id, "sched at", r.scheduleTime, "score", a.md(r), "timeout", l);
                        if (!a.Hc && 16 < l) break;
                        a.F.dequeue(r);
                        (l = a.oa.getTaskById(r.id)) ? (r = a.oh.bind(a, r), l.promise.then(r, r)) : (l = r.resource, p = !0, a.U ? l.hasBeenPremeasured() && (p = l.isDisplayed(!0)) : l.measure(),
                            p && Yj(a, l, r.forceOutsideViewport) ? (r.promise = r.callback(), r.startTime = k, H().fine("Resources", "exec:", r.id, "at", r.startTime), a.oa.enqueue(r), r.promise.then(a.Tf.bind(a, r, !0), a.Tf.bind(a, r, !1)).catch(xf)) : (H().fine("Resources", "cancelled", r.id), l.layoutCanceled()));
                        r = a.F.peek(a.md);
                        l = -1
                    }
                    H().fine("Resources", "queue size:", a.F.getSize(), "exec size:", a.oa.getSize());
                    !a.Hc && 0 <= l ? k = l : (k = 2 * (k - a.oa.getLastDequeueTime()), k = Math.max(Math.min(3E4, k), 5E3));
                    0 < a.ea.length && (k = Math.min(k, 500));
                    a.ga ? a.schedulePass(k) ?
                        H().fine("Resources", "next pass:", k) : H().fine("Resources", "pass already scheduled") : H().fine("Resources", "document is not visible: no scheduling");
                    a.df.resolve()
                }
            }
            b.addTransition("prerender", "prerender", h);
            b.addTransition("prerender", "visible", h);
            b.addTransition("prerender", "hidden", h);
            b.addTransition("prerender", "inactive", h);
            b.addTransition("prerender", "paused", h);
            b.addTransition("visible", "visible", h);
            b.addTransition("visible", "hidden", h);
            b.addTransition("visible", "inactive", d);
            b.addTransition("visible",
                "paused", e);
            b.addTransition("hidden", "visible", h);
            b.addTransition("hidden", "hidden", h);
            b.addTransition("hidden", "inactive", d);
            b.addTransition("hidden", "paused", e);
            b.addTransition("inactive", "visible", c);
            b.addTransition("inactive", "hidden", c);
            b.addTransition("inactive", "inactive", f);
            b.addTransition("inactive", "paused", h);
            b.addTransition("paused", "visible", c);
            b.addTransition("paused", "hidden", h);
            b.addTransition("paused", "inactive", d);
            b.addTransition("paused", "paused", f)
        }

        function Sj(a, b, c) {
            if (1 == b.getState() || 2 == b.getState()) a.F.purge(function(e) {
                return e.resource == b
            }), a.oa.purge(function(e) {
                return e.resource == b
            }), hg(a.ea, function(e) {
                return e.resource === b
            });
            if (0 == b.getState() && c && a.ua) {
                var d = a.ua.indexOf(b); - 1 != d && a.ua.splice(d, 1)
            }
        };
        var Zj = /^i-amphtml-/;

        function ak(a) {
            this.ampdoc = a;
            var b = a.getHeadNode();
            this.fb = Tc(a);
            this.I = Wc(a);
            a = Bc(b, "action");
            a.addGlobalTarget("AMP", this.zg.bind(this));
            a.addGlobalMethodHandler("hide", this.gf.bind(this));
            a.addGlobalMethodHandler("show", this.kf.bind(this));
            a.addGlobalMethodHandler("toggleVisibility", this.Dg.bind(this));
            a.addGlobalMethodHandler("scrollTo", this.jf.bind(this));
            a.addGlobalMethodHandler("focus", this.Ag.bind(this));
            a.addGlobalMethodHandler("toggleClass", this.Cg.bind(this))
        }
        g = ak.prototype;
        g.zg = function(a) {
            if (!a.satisfiesTrust(2)) return null;
            var b = a.node,
                c = a.method,
                d = a.args,
                e = (b.ownerDocument || b).defaultView;
            switch (c) {
                case "pushState":
                case "setState":
                    return Oc(b.nodeType === Node.DOCUMENT_NODE ? b.documentElement : b).then(function(f) {
                        J(f, "AMP-BIND is not installed.");
                        return f.invoke(a)
                    });
                case "navigateTo":
                    return bk(this, a);
                case "closeOrNavigateTo":
                    return ck(this, a);
                case "scrollTo":
                    return J(d.id, "AMP.scrollTo must provide element ID"), a.node = tc(b).getElementById(d.id), this.jf(a);
                case "goBack":
                    return Ac(this.ampdoc,
                        "history").goBack(!(!d || !0 !== d.navigate)), null;
                case "print":
                    return e.print(), null;
                case "optoutOfCid":
                    return Cc(this.ampdoc, "cid").then(function(f) {
                        return f.optOut()
                    }).catch(function(f) {
                        H().error("STANDARD-ACTIONS", "Failed to opt out of CID", f)
                    })
            }
            throw G().createError("Unknown AMP action ", c);
        };

        function bk(a, b) {
            var c = b.node,
                d = b.caller,
                e = b.method,
                f = b.args,
                h = (c.ownerDocument || c).defaultView;
            b = v();
            d.tagName.startsWith("AMP-") && (b = d.getImpl().then(function(k) {
                "function" == typeof k.throwIfCannotNavigate && k.throwIfCannotNavigate()
            }));
            return b.then(function() {
                Ac(a.ampdoc, "navigation").navigateTo(h, f.url, "AMP." + e, {
                    target: f.target,
                    opener: f.opener
                })
            }, function(k) {
                G().error("STANDARD-ACTIONS", k.message)
            })
        }

        function ck(a, b) {
            var c = b.node;
            c = (c.ownerDocument || c).defaultView;
            var d = c.parent != c,
                e = !1;
            c.opener && a.ampdoc.isSingleDoc() && !d && (c.close(), e = c.closed);
            return e ? v() : bk(a, b)
        }
        g.jf = function(a) {
            var b = a.node,
                c = (a = a.args) && a.position,
                d = a && a.duration;
            c && !["top", "bottom", "center"].includes(c) && (c = void 0);
            Ta(d) || (d = void 0);
            return this.I.animateScrollIntoView(b, c, d)
        };
        g.Ag = function(a) {
            Sb(a.node);
            return null
        };
        g.gf = function(a) {
            var b = a.node;
            b.classList.contains("i-amphtml-element") ? this.fb.mutateElement(b, function() {
                return b.collapse()
            }, !0) : this.fb.mutateElement(b, function() {
                return ue(b, !1)
            });
            return null
        };
        g.kf = function(a) {
            var b = a.node,
                c = b.ownerDocument.defaultView;
            if (b.classList.contains("i-amphtml-layout-nodisplay")) return G().warn("STANDARD-ACTIONS", "Elements with layout=nodisplay cannot be dynamically shown.", b), null;
            this.fb.measureElement(function() {
                "none" != (c.getComputedStyle(b) || K()).display || b.hasAttribute("hidden") || G().warn("STANDARD-ACTIONS", 'Elements can only be dynamically shown when they have the "hidden" attribute set or when they were dynamically hidden.', b)
            });
            var d = b.hasAttribute("autofocus") ?
                b : b.querySelector("[autofocus]");
            d && Q(c).isIos() ? (dk(b, d), this.fb.mutateElement(b, function() {})) : this.fb.mutateElement(b, function() {
                dk(b, d)
            });
            return null
        };

        function dk(a, b) {
            a.classList.contains("i-amphtml-element") ? a.expand() : ue(a, !0);
            b && Sb(b)
        }
        g.Dg = function(a) {
            return a.node.hasAttribute("hidden") ? this.kf(a) : this.gf(a)
        };
        g.Cg = function(a) {
            var b = a.node,
                c = a.args,
                d = G().assertString(c["class"], "Argument 'class' must be a string.");
            if (Zj.test(d)) return null;
            this.fb.mutateElement(b, function() {
                if (void 0 !== c.force) {
                    var e = G().assertBoolean(c.force, "Optional argument 'force' must be a boolean.");
                    b.classList.toggle(d, e)
                } else b.classList.toggle(d)
            });
            return null
        };

        function ek(a, b, c) {
            this.ampdoc = a;
            this.j = b;
            this.o = c;
            this.Qg = c instanceof fk;
            this.zc = ge(this.ampdoc.win.location);
            this.Pc = null
        }
        g = ek.prototype;
        g.get = function(a, b) {
            return gk(this).then(function(c) {
                return c.get(a, b)
            })
        };
        g.set = function(a, b, c) {
            return this.setNonBoolean(a, b, c)
        };
        g.setNonBoolean = function(a, b, c) {
            return hk(this, function(d) {
                return d.set(a, b, c)
            })
        };
        g.remove = function(a) {
            return hk(this, function(b) {
                return b.remove(a)
            })
        };
        g.isViewerStorage = function() {
            return this.Qg
        };

        function gk(a) {
            a.Pc || (a.Pc = a.o.loadBlob(a.zc).then(function(b) {
                return b ? Xb(atob(b)) : {}
            }).catch(function(b) {
                H().expectedError("Storage", "Failed to load store: ", b);
                return {}
            }).then(function(b) {
                return new ik(b)
            }));
            return a.Pc
        }

        function hk(a, b) {
            return gk(a).then(function(c) {
                b(c);
                c = btoa(JSON.stringify(c.obj));
                return a.o.saveBlob(a.zc, c)
            }).then(a.kg.bind(a))
        }

        function jk(a) {
            a.j.onBroadcast(function(b) {
                "amp-storage-reset" == b.type && b.origin == a.zc && (H().fine("Storage", "Received reset message"), a.Pc = null)
            })
        }
        g.kg = function() {
            H().fine("Storage", "Broadcasted reset message");
            this.j.broadcast({
                type: "amp-storage-reset",
                origin: this.zc
            })
        };

        function ik(a) {
            this.obj = Vb(a);
            this.Vg = 8;
            this.za = this.obj.vv || Object.create(null);
            this.obj.vv || (this.obj.vv = this.za)
        }
        ik.prototype.get = function(a, b) {
            var c = (a = this.za[a]) ? a.t : void 0,
                d = b && void 0 != c ? c + b > Date.now() : !0;
            return a && d ? a.v : void 0
        };
        ik.prototype.set = function(a, b, c) {
            if (void 0 !== this.za[a]) {
                a = this.za[a];
                var d = Date.now();
                c && (d = a.t);
                a.v = b;
                a.t = d
            } else this.za[a] = L({
                v: b,
                t: Date.now()
            });
            b = Object.keys(this.za);
            if (b.length > this.Vg) {
                var e = Infinity,
                    f = null;
                for (c = 0; c < b.length; c++) a = this.za[b[c]], a.t < e && (f = b[c], e = a.t);
                f && delete this.za[f]
            }
        };
        ik.prototype.remove = function(a) {
            delete this.za[a]
        };

        function kk(a) {
            this.win = a;
            try {
                if ("localStorage" in this.win) {
                    this.win.localStorage.getItem("test");
                    var b = !0
                } else b = !1
            } catch (c) {
                b = !1
            }
            this.Pd = b;
            this.Pd || (a = Error("localStorage not supported."), H().expectedError("Storage", a))
        }
        kk.prototype.loadBlob = function(a) {
            var b = this;
            return new Promise(function(c) {
                b.Pd ? c(b.win.localStorage.getItem("amp-store:" + a)) : c(null)
            })
        };
        kk.prototype.saveBlob = function(a, b) {
            var c = this;
            return new Promise(function(d) {
                c.Pd && c.win.localStorage.setItem("amp-store:" + a, b);
                d()
            })
        };

        function fk(a) {
            this.j = a
        }
        fk.prototype.loadBlob = function(a) {
            return this.j.sendMessageAwaitResponse("loadStore", L({
                origin: a
            })).then(function(b) {
                return b.blob
            })
        };
        fk.prototype.saveBlob = function(a, b) {
            return this.j.sendMessageAwaitResponse("saveStore", L({
                origin: a,
                blob: b
            })).catch(function(c) {
                throw H().createExpectedError("Storage", "Failed to save store: ", c);
            })
        };

        function lk(a) {
            O(a, "storage", function() {
                var b = S(a),
                    c = parseInt(b.getParam("storage"), 10) ? new fk(b) : new kk(a.win);
                b = new ek(a, b, c);
                jk(b);
                return b
            }, !0)
        };

        function mk() {}

        function nk(a) {
            this.A = a;
            this.Yb = {};
            this.oe = {}
        }
        g = nk.prototype;
        g.whenReady = function(a) {
            return ok(this, a).then(mk)
        };
        g.setHtmlForTemplate = function(a, b) {
            return ok(this, a).then(function(c) {
                return c.setHtml(b)
            })
        };
        g.renderTemplate = function(a, b) {
            return ok(this, a).then(function(c) {
                return c.render(b)
            })
        };
        g.renderTemplateAsString = function(a, b) {
            return ok(this, a).then(function(c) {
                return c.renderAsString(b)
            })
        };
        g.renderTemplateArray = function(a, b) {
            return 0 == b.length ? Promise.resolve([]) : ok(this, a).then(function(c) {
                return b.map(function(d) {
                    return c.render(d)
                })
            })
        };
        g.findAndRenderTemplate = function(a, b, c) {
            return this.renderTemplate(this.findTemplate(a, c), b)
        };
        g.findAndSetHtmlForTemplate = function(a, b, c) {
            return this.setHtmlForTemplate(this.findTemplate(a, c), b)
        };
        g.findAndRenderTemplateArray = function(a, b, c) {
            return this.renderTemplateArray(this.findTemplate(a, c), b)
        };
        g.hasTemplate = function(a, b) {
            return !!this.maybeFindTemplate(a, b)
        };
        g.findTemplate = function(a, b) {
            b = this.maybeFindTemplate(a, b);
            J(b, "Template not found for %s", a);
            var c = b.tagName;
            J("TEMPLATE" == c || "SCRIPT" == c && "text/plain" === b.getAttribute("type"), 'Template must be defined in a <template> or <script type="text/plain"> tag');
            return b
        };
        g.maybeFindTemplate = function(a, b) {
            var c = a.getAttribute("template");
            return c ? Gb(a).getElementById(c) : b ? Ob(a, b) : a.querySelector('template[type], script[type="text/plain"]')
        };

        function ok(a, b) {
            var c = b.__AMP_IMPL_;
            if (c) return Promise.resolve(c);
            c = "";
            var d = b.tagName;
            "TEMPLATE" == d ? c = b.getAttribute("type") : "SCRIPT" == d && (c = b.getAttribute("template"));
            J(c, "Type must be specified: %s", b);
            if (d = b.__AMP_WAIT_) return d;
            d = pk(a, c).then(function(e) {
                var f = b.__AMP_IMPL_ = new e(b, a.A);
                delete b.__AMP_WAIT_;
                return f
            });
            return b.__AMP_WAIT_ = d
        }

        function pk(a, b) {
            if (a.Yb[b]) return a.Yb[b];
            var c = new M,
                d = c.promise;
            c = c.resolve;
            a.Yb[b] = d;
            a.oe[b] = c;
            return d
        };

        function qk(a) {
            this.win = a;
            this.rh = this.win.Promise.resolve();
            this.Eh = 0;
            this.pd = {};
            this.ne = Date.now()
        }
        g = qk.prototype;
        g.timeSinceStart = function() {
            return Date.now() - this.ne
        };
        g.delay = function(a, b) {
            var c = this;
            if (!b) {
                var d = "p" + this.Eh++;
                this.rh.then(function() {
                    c.pd[d] ? delete c.pd[d] : a()
                }).catch(xf);
                return d
            }
            return this.win.setTimeout(function() {
                try {
                    a()
                } catch (e) {
                    throw xf(e), e;
                }
            }, b)
        };
        g.cancel = function(a) {
            "string" == typeof a ? this.pd[a] = !0 : this.win.clearTimeout(a)
        };
        g.promise = function(a) {
            var b = this;
            return new this.win.Promise(function(c) {
                if (-1 == b.delay(c, a)) throw Error("Failed to schedule timer.");
            })
        };
        g.timeoutPromise = function(a, b, c) {
            function d() {
                e.cancel(f)
            }
            var e = this,
                f, h = new this.win.Promise(function(k, l) {
                    f = e.delay(function() {
                        l(G().createError(c || "timeout"))
                    }, a);
                    if (-1 == f) throw Error("Failed to schedule timer.");
                });
            if (!b) return h;
            b.then(d, d);
            return this.win.Promise.race([h, b])
        };
        g.poll = function(a, b) {
            var c = this;
            return new this.win.Promise(function(d) {
                var e = c.win.setInterval(function() {
                    b() && (c.win.clearInterval(e), d())
                }, a)
            })
        };

        function rk(a) {
            a = a.getRootNode();
            this.fg = (a.ownerDocument || a).createElement("a");
            this.Wa = new Ld
        }
        g = rk.prototype;
        g.parse = function(a, b) {
            return Wd(this.fg, a, b ? null : this.Wa)
        };

        function sk(a, b) {
            return "string" !== typeof b ? b : a.parse(b)
        }
        g.isProtocolValid = function(a) {
            return ce(a)
        };
        g.getSourceOrigin = function(a) {
            return ge(sk(this, a))
        };
        g.getSourceUrl = function(a) {
            return fe(sk(this, a))
        };
        g.resolveRelativeUrl = function(a, b) {
            return he(a, sk(this, b))
        };
        g.assertHttpsUrl = function(a, b, c) {
            return ae(a, b, void 0 === c ? "source" : c)
        };
        g.assertAbsoluteHttpOrHttpsUrl = function(a) {
            J(/^https?:/i.test(a), 'URL must start with "http://" or "https://". Invalid value: %s', a);
            return U(a).href
        };
        g.isProxyOrigin = function(a) {
            return V(sk(this, a))
        };
        g.isSecure = function(a) {
            return $d(sk(this, a))
        };
        g.getWinOrigin = function(a) {
            return a.origin || sk(this, a.location.href).origin
        };
        g.getCdnUrlOnOrigin = function(a) {
            if (V(a)) return a;
            var b = sk(this, a),
                c = b.hash,
                d = b.pathname,
                e = b.search,
                f = encodeURIComponent(b.host);
            return D.cdn + "/c/" + f + d + e + c
        };
        var tk = {
            navigationStart: 1,
            redirectStart: 1,
            redirectEnd: 1,
            fetchStart: 1,
            domainLookupStart: 1,
            domainLookupEnd: 1,
            connectStart: 1,
            secureConnectionStart: 1,
            connectEnd: 1,
            requestStart: 1,
            responseStart: 1,
            responseEnd: 1,
            domLoading: 2,
            domInteractive: 2,
            domContentLoaded: 2,
            domComplete: 2,
            loadEventStart: 3,
            loadEventEnd: 4
        };

        function uk(a, b, c) {
            var d = tk[b] || 3,
                e = Math.max(d, c ? tk[c] || 3 : d);
            if (1 === e) var f = v();
            else if (2 === e) f = vj(a.document);
            else if (3 === e) f = Te(a);
            else if (4 === e) {
                var h = R(a);
                f = Te(a).then(function() {
                    return h.promise(1)
                })
            }
            return f.then(function() {
                return vk(a, b, c)
            })
        }

        function vk(a, b, c) {
            var d = a.performance && a.performance.timing;
            if (d && 0 != d.navigationStart) {
                var e = void 0 === c ? d[b] : d[c] - d[b];
                if (Ta(e) && !(0 > e)) return e
            }
        }

        function wk(a, b) {
            var c = a.performance && a.performance.navigation;
            if (c && void 0 !== c[b]) return c[b]
        }

        function xk(a) {
            this.ampdoc = a;
            this.Fa = Object.create(null);
            this.Jd = !1;
            yk(this)
        }
        g = xk.prototype;
        g.mc = function() {
            this.initialize();
            this.Jd = !0
        };
        g.initialize = function() {};
        g.get = function(a) {
            this.Jd || this.mc();
            return this.Fa[a]
        };
        g.set = function(a, b) {
            a.indexOf("RETURN");
            this.Fa[a] = this.Fa[a] || {
                sync: void 0,
                async: void 0
            };
            this.Fa[a].sync = b;
            return this
        };
        g.setAsync = function(a, b) {
            a.indexOf("RETURN");
            this.Fa[a] = this.Fa[a] || {
                sync: void 0,
                async: void 0
            };
            this.Fa[a].async = b;
            return this
        };
        g.setBoth = function(a, b, c) {
            return this.set(a, b).setAsync(a, c)
        };
        g.getExpr = function(a, b) {
            this.Jd || this.mc();
            var c = Object.assign({}, this.Fa, a);
            return zk(this, Object.keys(c), b)
        };

        function zk(a, b, c) {
            yk(a) && (b = b.filter(function(e) {
                return yk(a).includes(e)
            }));
            c && (b = b.filter(function(e) {
                return c[e]
            }));
            if (0 === b.length) return /_^/g;
            b.sort(function(e, f) {
                return f.length - e.length
            });
            var d = "\\$?(" + b.map(function(e) {
                return "$" === e[0] ? "\\" + e : e
            }).join("|") + ")";
            return new RegExp(d, "g")
        }

        function yk(a) {
            if (a.te) return a.te;
            if (a.ampdoc.isSingleDoc()) {
                var b = a.ampdoc.getRootNode();
                if (pf(b)) return a.te = [""], a.te
            }
        };

        function Ak(a, b, c, d, e, f) {
            this.fa = a;
            this.pb = b;
            this.Ue = c;
            this.kb = d;
            this.ha = e;
            this.ug = !f
        }
        Ak.prototype.expand = function(a) {
            if (!a.length) return this.kb ? a : Promise.resolve(a);
            var b = this.fa.getExpr(this.pb, this.ha);
            b = Bk(a, b);
            return b.length ? Ck(this, a, b) : this.kb ? a : Promise.resolve(a)
        };
        Ak.prototype.getMacroNames = function(a) {
            var b = this.fa.getExpr(this.pb, this.ha);
            return (a = a.match(b)) ? a : []
        };

        function Bk(a, b) {
            var c = [];
            a.replace(b, function(d, e, f) {
                d = d.length;
                c.push({
                    start: f,
                    stop: d + f - 1,
                    name: e,
                    length: d
                })
            });
            return c
        }

        function Ck(a, b, c) {
            function d(p) {
                for (var q = "", t = [], w = []; f < b.length && h <= c.length;) {
                    var u = q.trim();
                    if (k && f === k.start) u && t.push(l ? yb(q) : q), q = void 0, q = a.pb && rb.call(a.pb, k.name) ? {
                        name: k.name,
                        prioritized: a.pb[k.name],
                        encode: p
                    } : Object.assign({}, a.fa.get(k.name), {
                        name: k.name,
                        encode: p
                    }), f = k.stop + 1, k = c[++h], "(" === b[f] ? (f++, l++, e.push(q), t.push(d(!1))) : t.push(Dk(a, q)), q = "";
                    else {
                        if ("`" === b[f]) m ? (m = !1, q.length && t.push(q)) : (m = !0, u && t.push(u)), q = "";
                        else if (l && "," === b[f] && !m) u && t.push(u), w.push(t), t = [], "," === b[f +
                            1] && (w.push([""]), f++), q = "";
                        else {
                            if (l && ")" === b[f] && !m) return f++, l--, q = e.pop(), u && t.push(u), w.push(t), Dk(a, q, w);
                            q += b[f]
                        }
                        f++
                    }
                    f === b.length && q.length && t.push(q)
                }
                return a.kb ? t.join("") : Promise.all(t).then(function(r) {
                    return r.join("")
                }).catch(function(r) {
                    nb(r);
                    return ""
                })
            }
            var e = [],
                f = 0,
                h = 0,
                k = c[h],
                l = 0,
                m = !1;
            return d(a.ug)
        }

        function Dk(a, b, c) {
            var d = b.encode,
                e = b.name;
            if (void 0 != b.prioritized) var f = b.prioritized;
            else a.kb && void 0 != b.sync ? f = b.sync : a.kb ? (G().error("Expander", "ignoring async replacement key: ", b.name), f = "") : f = b.async || b.sync;
            return a.kb ? (a = Ek(a, f, e, c), d ? encodeURIComponent(a) : a) : Fk(a, f, e, c).then(function(h) {
                return d ? encodeURIComponent(h) : h
            })
        }

        function Fk(a, b, c, d) {
            try {
                var e = "function" === typeof b ? d ? Gk(d).then(function(f) {
                    return b.apply(null, f)
                }) : sb(b) : Promise.resolve(b);
                return e.then(function(f) {
                    Hk(a, c, f, d);
                    return null == f ? "" : f
                }).catch(function(f) {
                    nb(f);
                    Hk(a, c, "", d);
                    return Promise.resolve("")
                })
            } catch (f) {
                return nb(f), Hk(a, c, "", d), Promise.resolve("")
            }
        }

        function Gk(a) {
            return Promise.all(a.map(function(b) {
                return Promise.all(b).then(function(c) {
                    return c.join("")
                })
            }))
        }

        function Ek(a, b, c, d) {
            try {
                var e = b;
                "function" === typeof b && (e = b.apply(null, Ik(d)));
                if (e && e.then) {
                    G().error("Expander", "ignoring async macro resolution");
                    var f = ""
                } else "string" === typeof e || "number" === typeof e || "boolean" === typeof e ? (Hk(a, c, e, d), f = e.toString()) : (Hk(a, c, "", d), f = "");
                return f
            } catch (h) {
                return nb(h), Hk(a, c, "", d), ""
            }
        }

        function Ik(a) {
            return a ? a.map(function(b) {
                return b.join("")
            }) : a
        }

        function Hk(a, b, c, d) {
            if (a.Ue) {
                var e = "";
                d && (e = "(" + d.filter(function(f) {
                    return "" !== f
                }).join(",") + ")");
                a.Ue["" + b + e] = c || ""
            }
        };

        function Jk(a) {
            return function() {
                return (new Date)[a]()
            }
        }

        function Kk(a, b) {
            return function() {
                return a[b]
            }
        }

        function Lk() {
            xk.apply(this, arguments)
        }
        n(Lk, xk);

        function Mk(a, b, c, d) {
            a.setBoth(b, function() {
                return vk(a.ampdoc.win, c, d)
            }, function() {
                return uk(a.ampdoc.win, c, d)
            })
        }
        Lk.prototype.initialize = function() {
            function a() {
                var l = Nk(b);
                return be(Ok(b, l.sourceUrl))
            }
            var b = this,
                c = this.ampdoc.win,
                d = this.ampdoc.getHeadNode(),
                e = Wc(this.ampdoc);
            this.set("RANDOM", function() {
                return Math.random()
            });
            var f = Object.create(null);
            this.set("COUNTER", function(l) {
                return f[l] = (f[l] | 0) + 1
            });
            this.set("CANONICAL_URL", function() {
                return Nk(b).canonicalUrl
            });
            this.set("CANONICAL_HOST", function() {
                return U(Nk(b).canonicalUrl).host
            });
            this.set("CANONICAL_HOSTNAME", function() {
                return U(Nk(b).canonicalUrl).hostname
            });
            this.set("CANONICAL_PATH", function() {
                return U(Nk(b).canonicalUrl).pathname
            });
            this.setAsync("DOCUMENT_REFERRER", function() {
                return S(b.ampdoc).getReferrerUrl()
            });
            this.setAsync("EXTERNAL_REFERRER", function() {
                return S(b.ampdoc).getReferrerUrl().then(function(l) {
                    return l ? U(fe(l)).hostname === c.location.hostname ? null : l : null
                })
            });
            this.set("TITLE", function() {
                var l = c.document;
                return l.originalTitle || l.title
            });
            this.set("AMPDOC_URL", function() {
                return be(Ok(b, c.location.href))
            });
            this.set("AMPDOC_HOST", function() {
                var l =
                    U(c.location.href);
                return l && l.host
            });
            this.set("AMPDOC_HOSTNAME", function() {
                var l = U(c.location.href);
                return l && l.hostname
            });
            this.setBoth("SOURCE_URL", function() {
                return a()
            }, function() {
                return qh().then(function() {
                    return a()
                })
            });
            this.set("SOURCE_HOST", function() {
                return U(Nk(b).sourceUrl).host
            });
            this.set("SOURCE_HOSTNAME", function() {
                return U(Nk(b).sourceUrl).hostname
            });
            this.set("SOURCE_PATH", function() {
                return U(Nk(b).sourceUrl).pathname
            });
            this.set("PAGE_VIEW_ID", function() {
                return Nk(b).pageViewId
            });
            this.setAsync("PAGE_VIEW_ID_64", function() {
                return Nk(b).pageViewId64
            });
            this.setBoth("QUERY_PARAM", function(l, m) {
                return Pk(b, l, void 0 === m ? "" : m)
            }, function(l, m) {
                var p = void 0 === m ? "" : m;
                return qh().then(function() {
                    return Pk(b, l, p)
                })
            });
            this.set("FRAGMENT_PARAM", function(l, m) {
                m = void 0 === m ? "" : m;
                J(l, "The first argument to FRAGMENT_PARAM, the fragment string param is required");
                J("string" == typeof l, "param should be a string");
                var p = x(b.ampdoc.win.location.originalHash);
                return void 0 === p[l] ? m : p[l]
            });
            var h = null;
            this.setBoth("CLIENT_ID", function(l) {
                return h ? h[l] : null
            }, function(l, m, p, q) {
                J(l, "The first argument to CLIENT_ID, the fallback Cookie name, is required");
                var t = v();
                m && (t = Lc(d, "userNotificationManager", "amp-user-notification").then(function(w) {
                    return w.get(m)
                }));
                return Cc(b.ampdoc, "cid").then(function(w) {
                    q = "true" == q ? !0 : !1;
                    return w.get({
                        scope: l,
                        createCookieIfNotPresent: !0,
                        cookieName: p || void 0,
                        disableBackup: q
                    }, t)
                }).then(function(w) {
                    h || (h = Object.create(null));
                    var u = p || l;
                    w && "_ga" == u && ("string" === typeof w ?
                        w = w.replace(/^(GA1|1)\.[\d-]+\./, "") : H().error("UrlReplacements", "non-string cid, what is it?", Object.keys(w)));
                    return h[l] = w
                })
            });
            this.setAsync("VARIANT", function(l) {
                return Qk(b, function(m) {
                    var p = m[l];
                    J(void 0 !== p, "The value passed to VARIANT() is not a valid experiment in <amp-experiment>:" + l);
                    return null === p ? "none" : p
                }, "VARIANT")
            });
            this.setAsync("VARIANTS", function() {
                return Qk(b, function(l) {
                    var m = [],
                        p;
                    for (p in l) m.push(p + "." + (l[p] || "none"));
                    return m.join("!")
                }, "VARIANTS")
            });
            this.setAsync("AMP_GEO",
                function(l) {
                    return Rk(b, function(m) {
                        return l ? (J("ISOCountry" === l, "The value passed to AMP_GEO() is not valid name:" + l), m[l] || "unknown") : m.matchedISOCountryGroups.join(",")
                    })
                });
            this.set("TIMESTAMP", Jk("getTime"));
            this.set("TIMESTAMP_ISO", Jk("toISOString"));
            this.set("TIMEZONE", Jk("getTimezoneOffset"));
            this.set("SCROLL_HEIGHT", function() {
                return e.getScrollHeight()
            });
            this.set("SCROLL_WIDTH", function() {
                return e.getScrollWidth()
            });
            this.set("VIEWPORT_HEIGHT", function() {
                return e.getHeight()
            });
            this.set("VIEWPORT_WIDTH",
                function() {
                    return e.getWidth()
                });
            var k = c.screen;
            this.set("SCREEN_WIDTH", Kk(k, "width"));
            this.set("SCREEN_HEIGHT", Kk(k, "height"));
            this.set("AVAILABLE_SCREEN_HEIGHT", Kk(k, "availHeight"));
            this.set("AVAILABLE_SCREEN_WIDTH", Kk(k, "availWidth"));
            this.set("SCREEN_COLOR_DEPTH", Kk(k, "colorDepth"));
            this.set("DOCUMENT_CHARSET", function() {
                var l = c.document;
                return l.characterSet || l.charset
            });
            this.set("BROWSER_LANGUAGE", function() {
                var l = c.navigator;
                return (l.language || l.userLanguage || l.browserLanguage || "").toLowerCase()
            });
            this.set("USER_AGENT", function() {
                return c.navigator.userAgent
            });
            Mk(this, "PAGE_LOAD_TIME", "navigationStart", "loadEventStart");
            Mk(this, "DOMAIN_LOOKUP_TIME", "domainLookupStart", "domainLookupEnd");
            Mk(this, "TCP_CONNECT_TIME", "connectStart", "connectEnd");
            Mk(this, "SERVER_RESPONSE_TIME", "requestStart", "responseStart");
            Mk(this, "PAGE_DOWNLOAD_TIME", "responseStart", "responseEnd");
            Mk(this, "REDIRECT_TIME", "navigationStart", "fetchStart");
            Mk(this, "DOM_INTERACTIVE_TIME", "navigationStart", "domInteractive");
            Mk(this,
                "CONTENT_LOAD_TIME", "navigationStart", "domContentLoadedEventStart");
            this.setAsync("ACCESS_READER_ID", function() {
                return Sk(b, function(l) {
                    return l.getAccessReaderId()
                }, "ACCESS_READER_ID")
            });
            this.setAsync("AUTHDATA", function(l) {
                J(l, "The first argument to AUTHDATA, the field, is required");
                return Sk(b, function(m) {
                    return m.getAuthdataField(l)
                }, "AUTHDATA")
            });
            this.setAsync("VIEWER", function() {
                return S(b.ampdoc).getViewerOrigin().then(function(l) {
                    return void 0 == l ? "" : l
                })
            });
            this.setAsync("TOTAL_ENGAGED_TIME",
                function() {
                    return Lc(d, "activity", "amp-analytics").then(function(l) {
                        return l.getTotalEngagedTime()
                    })
                });
            this.setAsync("INCREMENTAL_ENGAGED_TIME", function(l, m) {
                return Lc(d, "activity", "amp-analytics").then(function(p) {
                    return p.getIncrementalEngagedTime(l, "false" !== m)
                })
            });
            this.set("NAV_TIMING", function(l, m) {
                J(l, "The first argument to NAV_TIMING, the start attribute name, is required");
                return vk(c, l, m)
            });
            this.setAsync("NAV_TIMING", function(l, m) {
                J(l, "The first argument to NAV_TIMING, the start attribute name, is required");
                return uk(c, l, m)
            });
            this.set("NAV_TYPE", function() {
                return wk(c, "type")
            });
            this.set("NAV_REDIRECT_COUNT", function() {
                return wk(c, "redirectCount")
            });
            this.set("AMP_VERSION", function() {
                return "2011252111003"
            });
            this.set("BACKGROUND_STATE", function() {
                return b.ampdoc.isVisible() ? "0" : "1"
            });
            this.setAsync("VIDEO_STATE", function(l, m) {
                return Ac(b.ampdoc, "video-manager").getVideoStateProperty(l, m)
            });
            this.setAsync("AMP_STATE", function(l) {
                var m = b.ampdoc.getRootNode();
                return Oc(m.documentElement || m).then(function(p) {
                    return p ?
                        p.getStateValue(l) || "" : ""
                })
            })
        };

        function Ok(a, b) {
            if (a = Nk(a).replaceParams) {
                b = de(b);
                var c = U(b);
                c = x(c.search);
                for (var d = L({}), e = Object.keys(a), f = 0; f < e.length; f++) rb.call(c, e[f]) || (d[e[f]] = a[e[f]]);
                a = Yd(b, d)
            } else a = b;
            return a
        }

        function Nk(a) {
            return Rc(a.ampdoc)
        }

        function Sk(a, b, c) {
            a = a.ampdoc.getHeadNode();
            return Promise.all([Mc(a, "access", "amp-access"), Mc(a, "subscriptions", "amp-subscriptions")]).then(function(d) {
                d = d[0] || d[1];
                return d ? b(d) : (G().error("UrlReplacements", "Access or subsciptions service is not installed to access: ", c), null)
            })
        }

        function Pk(a, b, c) {
            J(b, "The first argument to QUERY_PARAM, the query string param is required");
            var d = U(de(a.ampdoc.win.location.href));
            d = x(d.search);
            a = Nk(a).replaceParams;
            return "undefined" !== typeof d[b] ? d[b] : a && "undefined" !== typeof a[b] ? a[b] : c
        }

        function Qk(a, b, c) {
            return Mc(a.ampdoc.getHeadNode(), "variant", "amp-experiment", !0).then(function(d) {
                J(d, "To use variable %s, amp-experiment should be configured", c);
                return d.getVariants()
            }).then(function(d) {
                return b(d)
            })
        }

        function Rk(a, b) {
            a = a.ampdoc.getHeadNode();
            return Mc(a, "geo", "amp-geo", !0).then(function(c) {
                J(c, "To use variable %s, amp-geo should be configured", "AMP_GEO");
                return b(c)
            })
        }

        function Tk(a, b) {
            this.ampdoc = a;
            this.fa = b
        }
        g = Tk.prototype;
        g.expandStringSync = function(a, b, c) {
            return (new Ak(this.fa, b, void 0, !0, c, !0)).expand(a)
        };
        g.expandStringAsync = function(a, b, c) {
            return (new Ak(this.fa, b, void 0, void 0, c, !0)).expand(a)
        };
        g.expandUrlSync = function(a, b, c) {
            return Uk(a, (new Ak(this.fa, b, void 0, !0, c)).expand(a))
        };
        g.expandUrlAsync = function(a, b, c, d) {
            return (new Ak(this.fa, b, void 0, void 0, c, d)).expand(a).then(function(e) {
                return Uk(a, e)
            })
        };
        g.expandInputValueAsync = function(a) {
            return Vk(this, a, !1)
        };
        g.expandInputValueSync = function(a) {
            return Vk(this, a, !0)
        };

        function Vk(a, b, c) {
            "INPUT" == b.tagName && (b.getAttribute("type") || "").toLowerCase();
            var d = Wk(b);
            if (!d) return c ? b.value : Promise.resolve(b.value);
            void 0 === b["amp-original-value"] && (b["amp-original-value"] = b.value);
            a = (new Ak(a.fa, void 0, void 0, c, d)).expand(b["amp-original-value"] || b.value);
            return c ? b.value = a : a.then(function(e) {
                return b.value = e
            })
        }

        function Wk(a, b) {
            if (a = a.getAttribute("data-amp-replace")) {
                var c = {};
                a.trim().split(/\s+/).forEach(function(d) {
                    !b || rb.call(b, d) ? c[d] = !0 : G().warn("URL", "Ignoring unsupported replacement", d)
                });
                return c
            }
        }
        g.maybeExpandLink = function(a, b) {
            var c = a.getAttribute("data-amp-addparams") || "",
                d = Wk(a, {
                    CLIENT_ID: !0,
                    QUERY_PARAM: !0,
                    PAGE_VIEW_ID: !0,
                    PAGE_VIEW_ID_64: !0,
                    NAV_TIMING: !0
                });
            if (d || c || b) {
                var e = a["amp-original-href"] || a.getAttribute("href"),
                    f = U(e);
                null == a["amp-original-href"] && (a["amp-original-href"] = e);
                a: {
                    var h = Rc(this.ampdoc);
                    if (f.origin == U(h.canonicalUrl).origin || f.origin == U(h.sourceUrl).origin) f = !0;
                    else {
                        if (h = this.ampdoc.getMetaByName("amp-link-variable-allowed-origin")) {
                            h = h.trim().split(/\s+/);
                            for (var k =
                                    0; k < h.length; k++)
                                if (f.origin == U(h[k]).origin) {
                                    f = !0;
                                    break a
                                }
                        }
                        f = !1
                    }
                }
                var l = f;
                c && (l ? (f = c, f = d ? this.expandUrlSync(f, void 0, d) : f) : f = c, c = f, e = Yd(e, x(c)));
                if (!l) return d && G().warn("URL", "Ignoring link replacement %s because the link does not go to the document's source, canonical, or allowlisted origin.", e), a.href = e;
                b && (d && d.QUERY_PARAM || (b = this.expandUrlSync(b, void 0, {
                    QUERY_PARAM: !0
                })), e = Yd(e, x(b)));
                e = d ? this.expandUrlSync(e, void 0, d) : e;
                return a.href = e
            }
        };
        g.collectVars = function(a, b) {
            var c = Object.create(null);
            return (new Ak(this.fa, b, c)).expand(a).then(function() {
                return c
            })
        };
        g.collectDisallowedVarsSync = function(a) {
            var b = a.getAttribute("src"),
                c = (new Ak(this.fa)).getMacroNames(b),
                d = Wk(a);
            return d ? c.filter(function(e) {
                return !d[e]
            }) : c
        };

        function Uk(a, b) {
            var c = U(b, !0).protocol,
                d = U(a, !0).protocol;
            if (c != d) return G().error("UrlReplacements", "Illegal replacement of the protocol: ", a), a;
            J(ce(b), "The replacement url has invalid protocol: %s", b);
            return b
        }
        g.getVariableSource = function() {
            return this.fa
        };

        function Xk(a) {
            O(a, "url-replace", function(b) {
                return new Tk(b, new Lk(b))
            })
        };
        var Yk = /^(https?:\/\/)((www[0-9]*|web|ftp|wap|home|mobile|amp|m)\.)+/i;

        function Zk(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.Fb = Tb(this.win);
            this.ia = !0;
            this.Ac = !1;
            this.Vd = K();
            this.uc = K();
            this.Lf = new Y;
            this.Me = new Y;
            this.wc = this.bb = null;
            this.cb = [];
            this.sa = K();
            this.Ab = K();
            a.isSingleDoc() && Object.assign(this.Ab, x(this.win.location.hash));
            this.ia = !parseInt(a.getParam("off"), 10);
            H().fine("Viewer", "- runtimeOn:", this.ia);
            this.Ac = !(!parseInt(a.getParam("history"), 10) && !this.Ac);
            H().fine("Viewer", "- history:", this.Ac);
            H().fine("Viewer", "- visibilityState:", this.ampdoc.getVisibilityState());
            this.Cb = null;
            this.Pg = V(U(this.ampdoc.win.location.href));
            var c = new M;
            this.Wg = c.resolve;
            this.Na = $k(this, c.promise);
            this.ue = this.$a = null;
            var d = a.getParam("referrer");
            this.Tc = this.isEmbedded() && null != d && !1 !== al(this) ? d : this.win.document.referrer;
            this.mh = new Promise(function(f) {
                b.isEmbedded() && null != a.getParam("referrer") ? b.isTrustedViewer().then(function(h) {
                    h ? f(a.getParam("referrer")) : (f(b.win.document.referrer), b.Tc != b.win.document.referrer && (H().expectedError("Viewer", "Untrusted viewer referrer override: " +
                        b.Tc + " at " + b.wc), b.Tc = b.win.document.referrer))
                }) : f(b.win.document.referrer)
            });
            this.Jc = be(this.win.location.href || "");
            this.Lh = new Promise(function(f) {
                var h = a.getParam("viewerUrl");
                b.isEmbedded() && h ? b.isTrustedViewer().then(function(k) {
                    k ? b.Jc = h : H().expectedError("Viewer", "Untrusted viewer url override: " + h + " at " + b.wc);
                    f(b.Jc)
                }) : f(b.Jc)
            });
            if (this.Ab.click) {
                var e = be(this.win.location.href);
                e != this.win.location.href && this.win.history.replaceState && (this.win.location.originalHash || (this.win.location.originalHash =
                    this.win.location.hash), this.win.history.replaceState({}, "", e), delete this.Ab.click, H().fine("Viewer", "replace fragment:" + this.win.location.href))
            }
            this.ampdoc.whenFirstVisible().then(function() {
                b.maybeUpdateFragmentForCct()
            });
            this.ampdoc.isSingleDoc() && bl(this)
        }

        function $k(a, b) {
            return a.Fb && !a.win.__AMP_TEST_IFRAME && (a.ampdoc.getParam("origin") || a.ampdoc.getParam("visibilityState") || -1 != a.win.location.search.indexOf("amp_js_v")) || a.isWebviewEmbedded() || a.isCctEmbedded() || !a.ampdoc.isSingleDoc() ? R(a.win).timeoutPromise(2E4, b, "initMessagingChannel timeout").catch(function(c) {
                (c = cl(c)) && xb(c.message, "initMessagingChannel timeout") && (c = H().createExpectedError(c));
                xf(c);
                throw c;
            }) : null
        }
        g = Zk.prototype;
        g.getAmpDoc = function() {
            return this.ampdoc
        };
        g.getParam = function(a) {
            return this.ampdoc.getParam(a)
        };
        g.hasCapability = function(a) {
            var b = this.ampdoc.getParam("cap");
            return b ? -1 != b.split(",").indexOf(a) : !1
        };
        g.isEmbedded = function() {
            return !!this.Na
        };
        g.isWebviewEmbedded = function() {
            return !this.Fb && "1" == this.ampdoc.getParam("webview")
        };
        g.isCctEmbedded = function() {
            if (null != this.Cb) return this.Cb;
            this.Cb = !1;
            if (!this.Fb) {
                var a = x(this.win.location.search);
                this.Cb = "1" === a.amp_gsa && (a.amp_js_v || "").startsWith("a")
            }
            return this.Cb
        };
        g.isProxyOrigin = function() {
            return this.Pg
        };
        g.maybeUpdateFragmentForCct = function() {
            if (this.isCctEmbedded() && this.win.history.replaceState) {
                var a = ge(this.win.location.href),
                    b = Rc(this.ampdoc).canonicalUrl,
                    c = ge(b);
                dl(a, c) && (this.Ab.ampshare = b, this.win.history.replaceState({}, "", "#" + Zd(this.Ab)))
            }
        };

        function dl(a, b) {
            function c(d) {
                return 2 < d.split(".").length ? d.replace(Yk, "$1") : d
            }
            return c(a) == c(b)
        }
        g.isRuntimeOn = function() {
            return this.ia
        };
        g.toggleRuntime = function() {
            this.ia = !this.ia;
            H().fine("Viewer", "Runtime state:", this.ia);
            this.Lf.fire(this.ia)
        };
        g.onRuntimeState = function(a) {
            return this.Lf.add(a)
        };
        g.isOvertakeHistory = function() {
            return this.Ac
        };
        g.getVisibilityState = function() {
            return this.ampdoc.getVisibilityState()
        };
        g.isVisible = function() {
            return this.ampdoc.isVisible()
        };
        g.hasBeenVisible = function() {
            return this.ampdoc.hasBeenVisible()
        };
        g.whenFirstVisible = function() {
            return this.ampdoc.whenFirstVisible()
        };
        g.whenNextVisible = function() {
            return this.ampdoc.whenNextVisible()
        };
        g.getFirstVisibleTime = function() {
            return this.ampdoc.getFirstVisibleTime()
        };
        g.getLastVisibleTime = function() {
            return this.ampdoc.getLastVisibleTime()
        };
        g.onVisibilityChanged = function(a) {
            return this.ampdoc.onVisibilityChanged(a)
        };

        function el(a, b) {
            b && (b = H().assertEnumValue(We, b, "VisibilityState"), "hidden" === b && (b = null != a.ampdoc.getLastVisibleTime() ? "inactive" : "prerender"), a.ampdoc.overrideVisibilityState(b), H().fine("Viewer", "visibilitychange event:", a.ampdoc.getVisibilityState()))
        }
        g.getResolvedViewerUrl = function() {
            return this.Jc
        };
        g.getViewerUrl = function() {
            return this.Lh
        };
        g.maybeGetMessagingOrigin = function() {
            return this.wc
        };
        g.getUnconfirmedReferrerUrl = function() {
            return this.Tc
        };
        g.getReferrerUrl = function() {
            return this.mh
        };
        g.isTrustedViewer = function() {
            if (!this.$a) {
                var a = al(this);
                this.$a = void 0 !== a ? Promise.resolve(a) : this.Na.then(function(b) {
                    return b ? fl(b) : !1
                })
            }
            return this.$a
        };

        function al(a) {
            if (!a.isEmbedded()) return !1;
            if (a.win.location.ancestorOrigins && !a.isWebviewEmbedded() && !a.isCctEmbedded()) return 0 < a.win.location.ancestorOrigins.length && fl(a.win.location.ancestorOrigins[0])
        }
        g.getViewerOrigin = function() {
            if (!this.ue) {
                var a;
                this.isEmbedded() ? this.win.location.ancestorOrigins && 0 < this.win.location.ancestorOrigins.length && (a = this.win.location.ancestorOrigins[0]) : a = "";
                this.ue = void 0 !== a ? Promise.resolve(a) : R(this.win).timeoutPromise(1E3, this.Na).catch(function() {
                    return ""
                })
            }
            return this.ue
        };

        function fl(a) {
            var b = U(a);
            a = b.protocol;
            return "x-thread:" == a ? !0 : "https:" != a ? !1 : D.trustedViewerHosts.some(function(c) {
                return c.test(b.hostname)
            })
        }
        g.onMessage = function(a, b) {
            var c = this.Vd[a];
            c || (c = new Y, this.Vd[a] = c);
            var d = c.add(b);
            this.sa[a] && (this.sa[a].forEach(function(e) {
                c.fire(e.data);
                e.deferred.resolve()
            }), this.sa[a] = []);
            return d
        };
        g.onMessageRespond = function(a, b) {
            var c = this;
            this.uc[a] = b;
            this.sa[a] && (this.sa[a].forEach(function(d) {
                d.deferred.resolve(b(d.data))
            }), this.sa[a] = []);
            return function() {
                c.uc[a] === b && delete c.uc[a]
            }
        };
        g.receiveMessage = function(a, b) {
            if ("visibilitychange" == a) return el(this, b.state), v();
            if ("broadcast" == a) return this.Me.fire(b), v();
            var c = this.Vd[a],
                d = this.uc[a];
            if (!c && !d) {
                this.sa[a] = this.sa[a] || [];
                if (50 <= this.sa[a].length) return;
                c = new M;
                this.sa[a].push({
                    data: b,
                    deferred: c
                });
                return c.promise
            }
            c && c.fire(b);
            if (d) return d(b);
            if (c) return v()
        };
        g.setMessageDeliverer = function(a, b) {
            var c = this;
            if (this.bb) throw Error("message channel can only be initialized once");
            if (null == b) throw Error("message channel must have an origin");
            H().fine("Viewer", "message channel established with origin: ", b);
            this.bb = a;
            this.wc = b;
            this.Wg(b);
            0 < this.cb.length && (a = this.cb.slice(0), this.cb = [], a.forEach(function(d) {
                var e = c.bb(d.eventType, d.data, d.awaitResponse);
                d.awaitResponse && d.responseResolver(e)
            }))
        };
        g.sendMessage = function(a, b, c) {
            gl(this, a, b, void 0 === c ? !1 : c, !1)
        };
        g.sendMessageAwaitResponse = function(a, b, c) {
            return gl(this, a, b, void 0 === c ? !1 : c, !0)
        };

        function gl(a, b, c, d, e) {
            if (a.bb) return sb(function() {
                return a.bb(b, c, e)
            });
            if (!a.Na) return e ? Promise.reject(cl()) : v();
            if (!d) return a.Na.then(function() {
                return a.bb(b, c, e)
            });
            var f = ig(a.cb, function(h) {
                return h.eventType == b
            }); - 1 != f ? (d = a.cb.splice(f, 1)[0], d.data = c, d.awaitResponse = d.awaitResponse || e) : (d = new M, d = {
                eventType: b,
                data: c,
                awaitResponse: e,
                responsePromise: d.promise,
                responseResolver: d.resolve
            });
            a.cb.push(d);
            return d.responsePromise
        }
        g.broadcast = function(a) {
            return this.Na ? gl(this, "broadcast", a, !1, !1).then(function() {
                return !0
            }, function() {
                return !1
            }) : Promise.resolve(!1)
        };
        g.onBroadcast = function(a) {
            return this.Me.add(a)
        };
        g.whenMessagingReady = function() {
            return this.Na
        };
        g.replaceUrl = function(a) {
            if (a && this.ampdoc.isSingleDoc() && this.win.history.replaceState) try {
                var b = U(this.win.location.href),
                    c = U(be(a) + this.win.location.hash);
                b.origin == c.origin && ge(b) == ge(c) && (this.win.history.replaceState({}, "", c.href), this.win.location.originalHref = b.href, H().fine("Viewer", "replace url:" + c.href))
            } catch (d) {
                H().error("Viewer", "replaceUrl failed", d)
            }
        };

        function bl(a) {
            if ("visible" != a.ampdoc.getVisibilityState()) {
                var b = [],
                    c = function() {
                        return b.forEach(function(f) {
                            return f()
                        })
                    },
                    d = function() {
                        el(a, "visible");
                        c();
                        H().expectedError("Viewer", "Received user action in non-visible doc")
                    },
                    e = {
                        capture: !0,
                        passive: !0
                    };
                b.push(Le(a.win, "keydown", d, e), Le(a.win, "touchstart", d, e), Le(a.win, "mousedown", d, e));
                a.whenFirstVisible().then(c)
            }
        }

        function cl(a) {
            if (a instanceof Error) {
                a = mb(a);
                a.message = "No messaging channel: " + a.message;
                var b = a
            } else b = Error("No messaging channel: " + a);
            b.message = b.message.replace("\u200b\u200b\u200b", "");
            return b
        };

        function hl(a, b, c, d) {
            var e = new il(a, b, c, d);
            return e.solveYValueFromXValue.bind(e)
        }

        function il(a, b, c, d) {
            this.y0 = this.x0 = 0;
            this.x1 = a;
            this.y1 = b;
            this.x2 = c;
            this.y2 = d;
            this.y3 = this.x3 = 1
        }
        g = il.prototype;
        g.solveYValueFromXValue = function(a) {
            return this.getPointY(this.solvePositionFromXValue(a))
        };
        g.solvePositionFromXValue = function(a) {
            var b = (a - this.x0) / (this.x3 - this.x0);
            if (0 >= b) return 0;
            if (1 <= b) return 1;
            for (var c = 0, d = 1, e = 0, f = 0; 8 > f; f++) {
                e = this.getPointX(b);
                var h = (this.getPointX(b + 1E-6) - e) / 1E-6;
                if (1E-6 > Math.abs(e - a)) return b;
                if (1E-6 > Math.abs(h)) break;
                else e < a ? c = b : d = b, b -= (e - a) / h
            }
            for (f = 0; 1E-6 < Math.abs(e - a) && 8 > f; f++) e < a ? (c = b, b = (b + d) / 2) : (d = b, b = (b + c) / 2), e = this.getPointX(b);
            return b
        };
        g.getPointX = function(a) {
            if (0 == a) return this.x0;
            if (1 == a) return this.x3;
            var b = this.lerp(this.x0, this.x1, a),
                c = this.lerp(this.x1, this.x2, a),
                d = this.lerp(this.x2, this.x3, a);
            b = this.lerp(b, c, a);
            c = this.lerp(c, d, a);
            return this.lerp(b, c, a)
        };
        g.getPointY = function(a) {
            if (0 == a) return this.y0;
            if (1 == a) return this.y3;
            var b = this.lerp(this.y0, this.y1, a),
                c = this.lerp(this.y1, this.y2, a),
                d = this.lerp(this.y2, this.y3, a);
            b = this.lerp(b, c, a);
            c = this.lerp(c, d, a);
            return this.lerp(b, c, a)
        };
        g.lerp = function(a, b, c) {
            return a + c * (b - a)
        };
        var jl = hl(.25, .1, .25, 1),
            kl = hl(.42, 0, 1, 1),
            ll = hl(0, 0, .58, 1),
            ml = hl(.42, 0, .58, 1),
            nl = {
                linear: function(a) {
                    return a
                },
                ease: jl,
                "ease-in": kl,
                "ease-out": ll,
                "ease-in-out": ml
            };

        function ol(a) {
            if (!a) return null;
            if ("string" == typeof a) {
                if (-1 != a.indexOf("cubic-bezier")) {
                    var b = a.match(/cubic-bezier\((.+)\)/);
                    if (b && (b = b[1].split(",").map(parseFloat), 4 == b.length)) {
                        for (var c = 0; 4 > c; c++)
                            if (isNaN(b[c])) return null;
                        return hl(b[0], b[1], b[2], b[3])
                    }
                    return null
                }
                return nl[a]
            }
            return a
        };

        function pl() {}

        function ql(a) {
            this.ub = a;
            this.G = Vc(self);
            this.Xe = null;
            this.W = []
        }

        function rl(a, b, c, d) {
            return (new ql(a)).setCurve(d).add(0, b, 1).start(c)
        }
        ql.prototype.setCurve = function(a) {
            a && (this.Xe = ol(a));
            return this
        };
        ql.prototype.add = function(a, b, c, d) {
            this.W.push({
                delay: a,
                func: b,
                duration: c,
                curve: ol(d)
            });
            return this
        };
        ql.prototype.start = function(a) {
            return new tl(this.G, this.ub, this.W, this.Xe, a)
        };

        function tl(a, b, c, d, e) {
            this.G = a;
            this.ub = b;
            this.W = [];
            for (a = 0; a < c.length; a++) {
                var f = c[a];
                this.W.push({
                    delay: f.delay,
                    func: f.func,
                    duration: f.duration,
                    curve: f.curve || d,
                    started: !1,
                    completed: !1
                })
            }
            this.tg = e;
            this.ne = Date.now();
            this.Pa = !0;
            this.D = {};
            c = new M;
            this.Gf = c.promise;
            this.qh = c.resolve;
            this.nh = c.reject;
            this.Uf = this.G.createAnimTask(this.ub, {
                mutate: this.Ah.bind(this)
            });
            this.G.canAnimate(this.ub) ? this.Uf(this.D) : (H().warn("Animation", "cannot animate"), ul(this, !1, 0))
        }
        tl.prototype.then = function(a, b) {
            return a || b ? this.Gf.then(a, b) : this.Gf
        };
        tl.prototype.thenAlways = function(a) {
            a = a || pl;
            return this.then(a, a)
        };
        tl.prototype.halt = function(a) {
            ul(this, !1, a || 0)
        };

        function ul(a, b, c) {
            if (a.Pa) {
                a.Pa = !1;
                if (0 != c) {
                    1 < a.W.length && a.W.sort(function(e, f) {
                        return e.delay + e.duration - (f.delay + f.duration)
                    });
                    try {
                        if (0 < c)
                            for (c = 0; c < a.W.length; c++) a.W[c].func(1, !0);
                        else
                            for (var d = a.W.length - 1; 0 <= d; d--) a.W[d].func(0, !1)
                    } catch (e) {
                        H().error("Animation", "completion failed: " + e, e), b = !1
                    }
                }
                b ? a.qh() : a.nh()
            }
        }
        tl.prototype.Ah = function() {
            if (this.Pa) {
                for (var a = Date.now(), b = Math.min((a - this.ne) / this.tg, 1), c = 0; c < this.W.length; c++) {
                    var d = this.W[c];
                    !d.started && b >= d.delay && (d.started = !0)
                }
                for (c = 0; c < this.W.length; c++)
                    if (d = this.W[c], d.started && !d.completed) a: {
                        var e;
                        if (0 < d.duration) {
                            var f = e = Math.min((b - d.delay) / d.duration, 1);
                            if (d.curve && 1 != f) try {
                                f = d.curve(e)
                            } catch (h) {
                                H().error("Animation", "step curve failed: " + h, h);
                                ul(this, !1, 0);
                                break a
                            }
                        } else f = e = 1;1 == e && (d.completed = !0);
                        try {
                            d.func(f, d.completed)
                        } catch (h) {
                            H().error("Animation",
                                "step mutate failed: " + h, h), ul(this, !1, 0)
                        }
                    }
                1 == b ? ul(this, !0, 0) : this.G.canAnimate(this.ub) ? this.Uf(this.D) : (H().warn("Animation", "cancel animation"), ul(this, !1, 0))
            }
        };

        function vl(a, b) {
            for (b = b.lastElementChild; b; b = b.previousElementSibling)
                if (0 < b.getBoundingClientRect().height) {
                    var c = a.getComputedStyle(b) || K();
                    if ("static" == c.position || "relative" == c.position) {
                        var d = c;
                        break
                    }
                }
            return d ? parseInt(d.marginBottom, 10) : 0
        };

        function wl(a) {
            var b = this;
            this.win = a;
            this.G = Vc(a);
            a = this.win.document;
            var c = a.documentElement,
                d = c.className;
            c.classList.add("i-amphtml-ios-embed");
            var e = a.createElement("html");
            this.X = e;
            e.id = "i-amphtml-wrapper";
            e.className = d;
            this.Ha = new Y;
            this.Ga = new Y;
            this.tb = this.Df.bind(this);
            this.sb = function() {
                return b.Ga.fire()
            };
            this.ba = 0;
            this.Nf = !1;
            Bb(a, this.Of.bind(this));
            uj(a).then(function() {
                c.classList.add("i-amphtml-ios-overscroll")
            });
            H().fine("Viewport", "initialized ios-embed-wrapper viewport")
        }
        g = wl.prototype;
        g.ensureReadyForElements = function() {
            this.Of()
        };
        g.Of = function() {
            if (!this.Nf) {
                this.Nf = !0;
                var a = this.win.document,
                    b = a.body;
                a.documentElement.appendChild(this.X);
                this.X.appendChild(b);
                Object.defineProperty(a, "body", {
                    get: function() {
                        return b
                    }
                });
                this.Df()
            }
        };
        g.connect = function() {
            this.win.addEventListener("resize", this.sb);
            this.X.addEventListener("scroll", this.tb)
        };
        g.disconnect = function() {
            this.win.removeEventListener("resize", this.sb);
            this.X.removeEventListener("scroll", this.tb)
        };
        g.getBorderTop = function() {
            return 1
        };
        g.requiresFixedLayerTransfer = function() {
            return W(this.win, "ios-fixed-no-transfer") ? 12.2 > parseFloat(Q(this.win).getIosVersionString()) : !0
        };
        g.overrideGlobalScrollTo = function() {
            return !0
        };
        g.supportsPositionFixed = function() {
            return !0
        };
        g.onScroll = function(a) {
            this.Ha.add(a)
        };
        g.onResize = function(a) {
            this.Ga.add(a)
        };
        g.updatePaddingTop = function(a) {
            this.ba = a;
            se(this.X, {
                "padding-top": a + "px"
            })
        };
        g.hideViewerHeader = function(a) {
            a || this.updatePaddingTop(0)
        };
        g.showViewerHeader = function(a, b) {
            a || this.updatePaddingTop(b)
        };
        g.disableScroll = function() {
            this.X.classList.add("i-amphtml-scroll-disabled")
        };
        g.resetScroll = function() {
            this.X.classList.remove("i-amphtml-scroll-disabled")
        };
        g.updateLightboxMode = function() {
            return v()
        };
        g.getSize = function() {
            return {
                width: this.win.innerWidth,
                height: this.win.innerHeight
            }
        };
        g.getScrollTop = function() {
            return this.X.scrollTop
        };
        g.getScrollLeft = function() {
            return 0
        };
        g.getScrollWidth = function() {
            return this.X.scrollWidth
        };
        g.getScrollHeight = function() {
            return this.X.scrollHeight
        };
        g.getContentHeight = function() {
            var a = this.win.document.body,
                b = a.getBoundingClientRect().height,
                c = vl(this.win, a);
            a = this.win.getComputedStyle(a) || K();
            return parseInt(a.marginTop, 10) + this.ba + b + c + parseInt(a.marginBottom, 10)
        };
        g.contentHeightChanged = function() {};
        g.getLayoutRect = function(a, b, c, d) {
            a = d || a.getBoundingClientRect();
            var e = void 0 != c ? c : this.getScrollTop(),
                f = void 0 != b ? b : this.getScrollLeft();
            return jc(Math.round(a.left + f), Math.round(a.top + e), Math.round(a.width), Math.round(a.height))
        };
        g.getRootClientRectAsync = function() {
            return Promise.resolve(null)
        };
        g.setScrollTop = function(a) {
            this.X.scrollTop = a || 1
        };
        g.Df = function(a) {
            0 == this.X.scrollTop && (this.X.scrollTop = 1, a && a.preventDefault());
            a && this.Ha.fire()
        };
        g.getScrollingElement = function() {
            return this.X
        };
        g.getScrollingElementScrollsLikeViewport = function() {
            return !1
        };

        function xl(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.ra = Q(this.win);
            this.Ha = new Y;
            this.Ga = new Y;
            this.tb = this.Bg.bind(this);
            this.sb = function() {
                return b.Ga.fire()
            };
            H().fine("Viewport", "initialized natural viewport")
        }
        g = xl.prototype;
        g.Bg = function() {
            this.Ha.fire()
        };
        g.connect = function() {
            this.win.addEventListener("scroll", this.tb);
            this.win.addEventListener("resize", this.sb)
        };
        g.disconnect = function() {
            this.win.removeEventListener("scroll", this.tb);
            this.win.removeEventListener("resize", this.sb)
        };
        g.ensureReadyForElements = function() {};
        g.getBorderTop = function() {
            return 0
        };
        g.requiresFixedLayerTransfer = function() {
            return !1
        };
        g.overrideGlobalScrollTo = function() {
            return !1
        };
        g.supportsPositionFixed = function() {
            return !0
        };
        g.onScroll = function(a) {
            this.Ha.add(a)
        };
        g.onResize = function(a) {
            this.Ga.add(a)
        };
        g.updatePaddingTop = function(a) {
            se(this.win.document.documentElement, {
                "padding-top": a + "px"
            })
        };
        g.hideViewerHeader = function(a) {
            a || this.updatePaddingTop(0)
        };
        g.showViewerHeader = function(a, b) {
            a || this.updatePaddingTop(b)
        };
        g.disableScroll = function() {
            this.win.document.documentElement.classList.add("i-amphtml-scroll-disabled")
        };
        g.resetScroll = function() {
            this.win.document.documentElement.classList.remove("i-amphtml-scroll-disabled")
        };
        g.updateLightboxMode = function() {
            return v()
        };
        g.getSize = function() {
            var a = this.win.innerWidth,
                b = this.win.innerHeight;
            if (a && b) return {
                width: a,
                height: b
            };
            var c = this.win.document.documentElement;
            return {
                width: c.clientWidth,
                height: c.clientHeight
            }
        };
        g.getScrollTop = function() {
            var a = this.getScrollingElement().scrollTop || this.win.pageYOffset,
                b = this.ampdoc.getRootNode().host;
            return b ? a - b.offsetTop : a
        };
        g.getScrollLeft = function() {
            return 0
        };
        g.getScrollWidth = function() {
            return this.getScrollingElement().scrollWidth
        };
        g.getScrollHeight = function() {
            return this.getScrollingElement().scrollHeight
        };
        g.getContentHeight = function() {
            var a = this.getScrollingElement(),
                b = a.getBoundingClientRect(),
                c = b.top + this.getScrollTop(),
                d = Q(this.win).isSafari() ? vl(this.win, a) : 0;
            a = this.win.getComputedStyle(a) || K();
            return c + parseInt(a.marginTop, 10) + b.height + d + parseInt(a.marginBottom, 10)
        };
        g.contentHeightChanged = function() {};
        g.getLayoutRect = function(a, b, c, d) {
            a = d || a.getBoundingClientRect();
            c = void 0 != c ? c : this.getScrollTop();
            b = void 0 != b ? b : this.getScrollLeft();
            return jc(Math.round(a.left + b), Math.round(a.top + c), Math.round(a.width), Math.round(a.height))
        };
        g.getRootClientRectAsync = function() {
            return Promise.resolve(null)
        };
        g.setScrollTop = function(a) {
            this.getScrollingElement().scrollTop = a
        };
        g.getScrollingElement = function() {
            var a = this.win.document;
            return a.scrollingElement ? a.scrollingElement : a.body && this.ra.isWebKit() ? a.body : a.documentElement
        };
        g.getScrollingElementScrollsLikeViewport = function() {
            return !0
        };

        function yl(a, b) {
            return function(c) {
                return a + (b - a) * c
            }
        };

        function zl(a, b, c) {
            var d = this,
                e = a.win;
            this.ampdoc = a;
            this.Bd = this.ampdoc.win.document;
            this.o = b;
            this.j = c;
            this.xa = this.Y = this.Tb = null;
            this.je = !1;
            this.Lc = null;
            this.ba = Number(c.getParam("paddingTop") || 0);
            this.pc = 0;
            this.O = R(e);
            this.G = Vc(e);
            this.ke = !1;
            this.le = null;
            this.vh = 0;
            this.Re = new Y;
            this.Ha = new Y;
            this.Ga = new Y;
            this.be = this.ac = void 0;
            this.R = null;
            this.j.onMessage("viewport", this.Ih.bind(this));
            this.j.onMessage("scroll", this.Kh.bind(this));
            this.j.onMessage("disableScroll", this.sg.bind(this));
            this.j.isEmbedded() &&
                this.o.updatePaddingTop(this.ba);
            this.o.onScroll(this.wh.bind(this));
            this.o.onResize(this.Kf.bind(this));
            this.onScroll(this.xh.bind(this));
            this.ga = !1;
            this.ampdoc.onVisibilityChanged(this.Yf.bind(this));
            this.Yf();
            var f = this.Bd.documentElement;
            a.isSingleDoc() && f.classList.add("i-amphtml-singledoc");
            c.isEmbedded() ? f.classList.add("i-amphtml-embedded") : f.classList.add("i-amphtml-standalone");
            Tb(e) && f.classList.add("i-amphtml-iframed");
            "1" === c.getParam("webview") && f.classList.add("i-amphtml-webview");
            Tb(e) && "scrollRestoration" in e.history && (e.history.scrollRestoration = "manual");
            if (this.o.overrideGlobalScrollTo()) try {
                Object.defineProperty(e, "scrollTo", {
                    value: function(h, k) {
                        return d.setScrollTop(k)
                    }
                }), ["pageYOffset", "scrollY"].forEach(function(h) {
                    Object.defineProperty(e, h, {
                        get: function() {
                            return d.getScrollTop()
                        }
                    })
                })
            } catch (h) {}
        }
        g = zl.prototype;
        g.dispose = function() {
            this.o.disconnect()
        };
        g.ensureReadyForElements = function() {
            this.o.ensureReadyForElements()
        };
        g.Yf = function() {
            var a = this.ampdoc.isVisible();
            a != this.ga && ((this.ga = a) ? (this.o.connect(), this.Y && this.Kf(), this.xa && (this.xa = null, this.getScrollTop())) : this.o.disconnect())
        };
        g.getPaddingTop = function() {
            return this.ba
        };
        g.getScrollTop = function() {
            null == this.xa && (this.xa = this.o.getScrollTop());
            return this.xa
        };
        g.getScrollLeft = function() {
            null == this.Lc && (this.Lc = this.o.getScrollLeft());
            return this.Lc
        };
        g.setScrollTop = function(a) {
            this.xa = null;
            this.o.setScrollTop(a)
        };
        g.updatePaddingBottom = function(a) {
            this.ampdoc.waitForBodyOpen().then(function(b) {
                X(b, "borderBottom", a + "px solid transparent")
            })
        };
        g.getSize = function() {
            if (this.Y) return this.Y;
            this.Y = this.o.getSize();
            if (0 == this.Y.width || 0 == this.Y.height) {
                var a = this.ampdoc.getVisibilityState();
                ("prerender" == a || "visible" == a) && .01 > Math.random() && H().error("Viewport", "viewport has zero dimensions")
            }
            return this.Y
        };
        g.getHeight = function() {
            return this.getSize().height
        };
        g.getWidth = function() {
            return this.getSize().width
        };
        g.getScrollWidth = function() {
            return this.o.getScrollWidth()
        };
        g.getScrollHeight = function() {
            return this.o.getScrollHeight()
        };
        g.getContentHeight = function() {
            return this.o.getContentHeight()
        };
        g.contentHeightChanged = function() {
            this.o.contentHeightChanged()
        };
        g.getRect = function() {
            if (null == this.Tb) {
                var a = this.getScrollTop(),
                    b = this.getScrollLeft(),
                    c = this.getSize();
                this.Tb = jc(b, a, c.width, c.height)
            }
            return this.Tb
        };
        g.getLayoutRect = function(a, b) {
            var c = this.getScrollLeft(),
                d = this.getScrollTop(),
                e = Gc(a, this.ampdoc.win);
            return e ? (a = this.o.getLayoutRect(a, 0, 0, b), c = this.o.getLayoutRect(e, c, d), jc(Math.round(a.left + c.left), Math.round(a.top + c.top), Math.round(a.width), Math.round(a.height))) : this.o.getLayoutRect(a, c, d, b)
        };
        g.getClientRectAsync = function(a) {
            var b = this.G.measurePromise(function() {
                    return a.getBoundingClientRect()
                }),
                c = this.o.getRootClientRectAsync(),
                d = Gc(a, this.ampdoc.win);
            d && (c = this.G.measurePromise(function() {
                return d.getBoundingClientRect()
            }));
            return Promise.all([b, c]).then(function(e) {
                var f = e[0];
                return (e = e[1]) ? mc(f, e.left, e.top) : jc(Number(f.left), Number(f.top), Number(f.width), Number(f.height))
            })
        };
        g.supportsPositionFixed = function() {
            return this.o.supportsPositionFixed()
        };
        g.isDeclaredFixed = function(a) {
            return this.R ? this.R.isDeclaredFixed(a) : !1
        };
        g.scrollIntoView = function(a) {
            var b = this;
            return Al(this, a).then(function(c) {
                return Bl(b, a, c)
            })
        };

        function Bl(a, b, c) {
            var d = a.o.getLayoutRect(b).top;
            sb(function() {
                return Math.max(0, d - a.ba)
            }).then(function(e) {
                return Cl(a, c, e)
            })
        }
        g.animateScrollIntoView = function(a, b, c, d) {
            var e = this,
                f = void 0 === b ? "top" : b;
            return Al(this, a).then(function(h) {
                return e.animateScrollWithinParent(a, h, f, c, d)
            })
        };
        g.animateScrollWithinParent = function(a, b, c, d, e) {
            var f = this,
                h = this.o.getLayoutRect(a),
                k = (b == this.o.getScrollingElement() ? this.getSize() : this.getLayoutRect(b)).height;
            switch (c) {
                case "bottom":
                    var l = -k + h.height;
                    break;
                case "center":
                    l = -k / 2 + h.height / 2;
                    break;
                default:
                    l = 0
            }
            return Dl(this, b).then(function(m) {
                var p = Math.max(0, h.top - f.ba + l);
                if (p != m) return El(f, b, m, p, d, e)
            })
        };

        function El(a, b, c, d, e, f) {
            var h = void 0 === f ? "ease-in" : f;
            e = void 0 !== e ? e : Math.floor(Math.min(Math.max(.65 * Math.abs(c - d), 0), 500));
            var k = yl(c, d);
            return rl(b, function(l) {
                Cl(a, b, k(l))
            }, e, h).thenAlways(function() {
                Cl(a, b, d)
            })
        }

        function Al(a, b) {
            return a.G.measurePromise(function() {
                return Ib(b, ".i-amphtml-scrollable") || a.o.getScrollingElement()
            })
        }

        function Cl(a, b, c) {
            b == a.o.getScrollingElement() ? a.o.setScrollTop(c) : a.G.mutate(function() {
                b.scrollTop = c
            })
        }

        function Dl(a, b) {
            return b == a.o.getScrollingElement() ? sb(function() {
                return a.getScrollTop()
            }) : a.G.measurePromise(function() {
                return b.scrollTop
            })
        }
        g.getScrollingElement = function() {
            return this.le ? this.le : this.le = this.o.getScrollingElement()
        };
        g.onChanged = function(a) {
            return this.Re.add(a)
        };
        g.onScroll = function(a) {
            return this.Ha.add(a)
        };
        g.onResize = function(a) {
            return this.Ga.add(a)
        };
        g.enterLightboxMode = function(a, b) {
            this.j.sendMessage("requestFullOverlay", {}, !0);
            this.enterOverlayMode();
            this.R && this.R.enterLightbox(a, b);
            a && this.maybeEnterFieLightboxMode(a);
            return this.o.updateLightboxMode(!0)
        };
        g.leaveLightboxMode = function(a) {
            this.j.sendMessage("cancelFullOverlay", {}, !0);
            this.R && this.R.leaveLightbox();
            this.leaveOverlayMode();
            a && this.maybeLeaveFieLightboxMode(a);
            return this.o.updateLightboxMode(!1)
        };
        g.isLightboxExperimentOn = function() {
            return W(this.ampdoc.win, "amp-lightbox-a4a-proto")
        };
        g.maybeEnterFieLightboxMode = function(a) {
            var b = Fl(this, a);
            b && (this.isLightboxExperimentOn(), b.enterFullOverlayMode())
        };
        g.maybeLeaveFieLightboxMode = function(a) {
            (a = Fl(this, a)) && a.leaveFullOverlayMode()
        };

        function Fl(a, b) {
            var c = Gc(b, a.ampdoc.win);
            return c && c.__AMP_EMBED__
        }
        g.enterOverlayMode = function() {
            this.disableTouchZoom();
            this.disableScroll()
        };
        g.leaveOverlayMode = function() {
            this.resetScroll();
            this.restoreOriginalTouchZoom()
        };
        g.disableScroll = function() {
            var a = this,
                b = this.ampdoc.win,
                c = b.document.documentElement,
                d;
            this.G.measure(function() {
                var e = (b.getComputedStyle(c) || K()).marginRight;
                var f = a.ampdoc.win;
                f = f.innerWidth - f.document.documentElement.clientWidth;
                d = parseInt(e, 10) + f
            });
            this.G.mutate(function() {
                X(c, "margin-right", d, "px");
                a.o.disableScroll()
            })
        };
        g.resetScroll = function() {
            var a = this,
                b = this.ampdoc.win.document.documentElement;
            this.G.mutate(function() {
                X(b, "margin-right", "");
                a.o.resetScroll()
            })
        };
        g.resetTouchZoom = function() {
            var a = this,
                b = this.ampdoc.win.innerHeight,
                c = this.Bd.documentElement.clientHeight;
            b && c && b === c || this.disableTouchZoom() && this.O.delay(function() {
                a.restoreOriginalTouchZoom()
            }, 50)
        };
        g.disableTouchZoom = function() {
            var a = Gl(this);
            if (!a) return !1;
            var b = a.content,
                c = {
                    "maximum-scale": "1",
                    "user-scalable": "no"
                };
            var d = Object.create(null);
            if (b)
                for (var e = b.split(/,|;/), f = 0; f < e.length; f++) {
                    var h = e[f].split("="),
                        k = h[0].trim();
                    h = h[1];
                    h = (h || "").trim();
                    k && (d[k] = h)
                }
            e = !1;
            for (var l in c) d[l] !== c[l] && (e = !0, void 0 !== c[l] ? d[l] = c[l] : delete d[l]);
            if (e) {
                b = "";
                for (var m in d) 0 < b.length && (b += ","), b = d[m] ? b + (m + "=" + d[m]) : b + m;
                d = b
            } else d = b;
            return Hl(this, d)
        };
        g.restoreOriginalTouchZoom = function() {
            return void 0 !== this.be ? Hl(this, this.be) : !1
        };
        g.updateFixedLayer = function() {
            return this.R ? this.R.update() : v()
        };
        g.addToFixedLayer = function(a, b) {
            return this.R ? this.R.addElement(a, b) : v()
        };
        g.removeFromFixedLayer = function(a) {
            this.R && this.R.removeElement(a)
        };
        g.createFixedLayer = function(a) {
            var b = this;
            this.R = new a(this.ampdoc, this.G, this.o.getBorderTop(), this.ba, this.o.requiresFixedLayerTransfer());
            this.ampdoc.whenReady().then(function() {
                return b.R.setup()
            })
        };

        function Hl(a, b) {
            return (a = Gl(a)) && a.content != b ? (H().fine("Viewport", "changed viewport meta to:", b), a.content = b, !0) : !1
        }

        function Gl(a) {
            if (Tb(a.ampdoc.win)) return null;
            void 0 === a.ac && (a.ac = a.Bd.querySelector("meta[name=viewport]"), a.ac && (a.be = a.ac.content));
            return a.ac
        }
        g.Kh = function(a) {
            this.setScrollTop(a.scrollTop)
        };
        g.Ih = function(a) {
            var b = this,
                c = a.paddingTop,
                d = a.duration || 0,
                e = a.curve,
                f = a["transient"];
            if (void 0 != c && c != this.ba && (this.pc = this.ba, this.ba = c, this.R)) {
                var h = this.R.animateFixedElements(this.ba, this.pc, d, e, f);
                c < this.pc ? this.o.hideViewerHeader(f, this.pc) : h.then(function() {
                    b.o.showViewerHeader(f, c)
                })
            }
        };
        g.sg = function(a) {
            a ? this.disableScroll() : this.resetScroll()
        };

        function Il(a, b, c) {
            var d = a.getSize(),
                e = a.getScrollTop(),
                f = a.getScrollLeft();
            H().fine("Viewport", "changed event:", "relayoutAll=", b, "top=", e, "left=", f, "bottom=", e + d.height, "velocity=", c);
            a.Re.fire({
                relayoutAll: b,
                top: e,
                left: f,
                width: d.width,
                height: d.height,
                velocity: c
            })
        }
        g.wh = function() {
            var a = this;
            this.Tb = null;
            this.vh++;
            this.Lc = this.o.getScrollLeft();
            var b = this.o.getScrollTop();
            if (!(0 > b)) {
                this.xa = b;
                if (!this.ke) {
                    this.ke = !0;
                    var c = Date.now();
                    this.O.delay(function() {
                        a.G.measure(function() {
                            a.Rc(c, b)
                        })
                    }, 36)
                }
                this.Ha.fire()
            }
        };
        g.Rc = function(a, b) {
            var c = this,
                d = this.xa = this.o.getScrollTop(),
                e = Date.now(),
                f = 0;
            e != a && (f = (d - b) / (e - a));
            H().fine("Viewport", "scroll: scrollTop=" + d + "; velocity=" + f);
            .03 > Math.abs(f) ? (Il(this, !1, f), this.ke = !1) : this.O.delay(function() {
                return c.G.measure(c.Rc.bind(c, e, d))
            }, 20)
        };
        g.xh = function() {
            var a = this;
            this.je || (this.je = !0, this.G.measure(function() {
                a.je = !1;
                a.j.sendMessage("scroll", L({
                    scrollTop: a.getScrollTop()
                }), !0)
            }))
        };
        g.Kf = function() {
            var a = this;
            this.Tb = null;
            var b = this.Y;
            this.Y = null;
            var c = this.getSize();
            this.updateFixedLayer().then(function() {
                var d = !b || b.width != c.width;
                Il(a, d, 0);
                (d || b.height != c.height) && a.Ga.fire({
                    relayoutAll: d,
                    width: c.width,
                    height: c.height
                })
            })
        };

        function Jl(a) {
            var b = S(a),
                c = a.win;
            c = a.isSingleDoc() && (Q(c).isIos() && Tb(c) && b.isEmbedded() && !b.hasCapability("iframeScroll") ? Kl : Ll) == Kl ? new wl(c) : new xl(a);
            return new zl(a, c, b)
        }
        var Ll = "natural",
            Kl = "natural-ios-embed";
        var Ml = ["<div class=i-amphtml-jank-meter></div>"];

        function Nl(a) {
            this.A = a;
            this.sc = this.rc = this.Zb = this.fc = 0;
            this.Ub = null;
            this.va = yc(a);
            this.Kb = this.Be = this.Ce = null;
            Ol(this)
        }
        Nl.prototype.onScheduled = function() {
            Pl(this) && null == this.Ub && (this.Ub = this.A.Date.now())
        };
        Nl.prototype.onRun = function() {
            if (Pl(this) && null != this.Ub) {
                var a = this.A.Date.now() - this.Ub;
                this.Ub = null;
                this.Zb++;
                16 < a && (this.fc++, H().info("JANK", "Paint latency: " + a + "ms"));
                if (this.va && 200 == this.Zb) {
                    var b = this.A.Math.floor((this.Zb - this.fc) / this.Zb * 100);
                    this.va.tickDelta("gfp", b);
                    this.va.tickDelta("bf", this.fc);
                    this.Kb && (this.va.tickDelta("lts", this.sc), this.va.tickDelta("ltc", this.rc), this.Kb.disconnect(), this.Kb = null);
                    var c = 0;
                    this.Ce && null != this.Be && (c = this.A.Math.max(0, this.A.Math.floor(100 * this.Ce.level -
                        this.Be)), this.va.tickDelta("bd", c));
                    this.va.flush();
                    if (W(this.A, "jank-meter")) {
                        var d = c,
                            e = this.A.document,
                            f = Jd(e)(Ml);
                        f.textContent = "bf:" + this.fc + ", lts: " + this.sc + ", ltc:" + (this.rc + ", bd:" + d);
                        e.body.appendChild(f)
                    }
                }
            }
        };

        function Pl(a) {
            return W(a.A, "jank-meter") || a.va && a.va.isPerformanceTrackingOn() && 200 > a.Zb
        }

        function Ol(a) {
            Pl(a) && Ql(a.A) && (a.Kb = new a.A.PerformanceObserver(function(b) {
                for (var c = b.getEntries(), d = 0; d < c.length; d++)
                    if ("longtask" == c[d].entryType) {
                        var e = a.A.Math.floor(c[d].duration / 50);
                        "cross-origin-descendant" == c[d].name ? (a.rc += e, G().info("LONGTASK", "from child frame " + c[d].duration + "ms")) : (a.sc += e, H().info("LONGTASK", "from self frame " + c[d].duration + "ms"))
                    }
            }), a.Kb.observe({
                entryTypes: ["longtask"]
            }))
        }

        function Ql(a) {
            return !!a.PerformanceObserver && !!a.TaskAttributionTiming && "containerName" in a.TaskAttributionTiming.prototype
        };

        function Rl(a) {
            var b = re(a, "visibilityState", !0);
            if (a[b]) return a[b];
            var c = re(a, "hidden", !0);
            return a[c] ? a[c] ? "hidden" : "visible" : "visible"
        }

        function Sl(a, b) {
            if (a.addEventListener) {
                var c = Tl(a);
                c && a.addEventListener(c, b)
            }
        }

        function Ul(a, b) {
            if (a.removeEventListener) {
                var c = Tl(a);
                c && a.removeEventListener(c, b)
            }
        }

        function Tl(a) {
            a = re(a, "hidden", !0);
            var b = a.indexOf("Hidden");
            return -1 != b ? a.substring(0, b) + "Visibilitychange" : "visibilitychange"
        };

        function Vl(a) {
            this.win = a;
            this.Aa = Qc(this.win);
            this.lh = Wl(this);
            this.L = [];
            this.Yd = [];
            this.Ia = [];
            this.Xd = [];
            this.ta = !1;
            this.Wd = this.xc = null;
            this.ld = this.uh.bind(this);
            this.Hg = new Fj(this.win, this.ld, 16);
            this.Ae = new Fj(this.win, this.ld, 40);
            this.kd = this.hh.bind(this);
            if (this.Aa.isSingleDoc()) this.Aa.getSingleDoc().onVisibilityChanged(this.kd);
            else Sl(this.win.document, this.kd);
            this.sf = new Nl(this.win)
        }
        g = Vl.prototype;
        g.dispose = function() {
            Ul(this.win.document, this.kd)
        };
        g.hh = function() {
            this.ta && Xl(this)
        };
        g.run = function(a, b) {
            this.L.push(a);
            this.Ia.push(b || void 0);
            this.wa()
        };
        g.runPromise = function(a, b) {
            this.run(a, b);
            if (this.xc) return this.xc;
            a = new M;
            this.Wd = a.resolve;
            return this.xc = a.promise
        };
        g.createTask = function(a) {
            var b = this;
            return function(c) {
                b.run(a, c)
            }
        };
        g.mutate = function(a) {
            this.run({
                measure: void 0,
                mutate: a
            })
        };
        g.mutatePromise = function(a) {
            return this.runPromise({
                measure: void 0,
                mutate: a
            })
        };
        g.measure = function(a) {
            this.run({
                measure: a,
                mutate: void 0
            })
        };
        g.measurePromise = function(a) {
            var b = this;
            return new Promise(function(c) {
                b.measure(function() {
                    c(a())
                })
            })
        };
        g.canAnimate = function(a) {
            return Yl(this, a)
        };

        function Yl(a, b) {
            return "visible" != Rl(a.win.document) ? !1 : a.Aa.isSingleDoc() ? a.Aa.getSingleDoc().isVisible() : b ? (a = a.Aa.getAmpDocIfAvailable(b), !a || a.isVisible()) : !0
        }
        g.runAnim = function(a, b, c) {
            if (!Yl(this, a)) return H().warn("VSYNC", "Did not schedule a vsync request, because document was invisible"), !1;
            this.run(b, c);
            return !0
        };
        g.createAnimTask = function(a, b) {
            var c = this;
            return function(d) {
                return c.runAnim(a, b, d)
            }
        };
        g.runAnimMutateSeries = function(a, b, c) {
            var d = this;
            return Yl(this, a) ? new Promise(function(e, f) {
                var h = Date.now(),
                    k = 0,
                    l = d.createAnimTask(a, {
                        mutate: function(m) {
                            var p = Date.now() - h;
                            b(p, p - k, m) ? c && p > c ? f(Error("timeout")) : (k = p, l(m)) : e()
                        }
                    });
                l({})
            }) : Promise.reject(zf())
        };
        g.wa = function() {
            this.ta || (this.ta = !0, this.sf.onScheduled(), Xl(this))
        };

        function Xl(a) {
            Yl(a) ? (a.lh(a.ld), a.Ae.schedule()) : a.Hg.schedule()
        }
        g.uh = function() {
            this.Ae.cancel();
            this.ta = !1;
            this.sf.onRun();
            var a = this.L,
                b = this.Ia,
                c = this.Wd;
            this.xc = this.Wd = null;
            this.L = this.Yd;
            this.Ia = this.Xd;
            for (var d = 0; d < a.length; d++) a[d].measure && !Zl(a[d].measure, b[d]) && (a[d].mutate = void 0);
            for (d = 0; d < a.length; d++) a[d].mutate && Zl(a[d].mutate, b[d]);
            this.Yd = a;
            this.Xd = b;
            this.Yd.length = 0;
            this.Xd.length = 0;
            c && c()
        };

        function Wl(a) {
            var b = a.win.requestAnimationFrame || a.win.webkitRequestAnimationFrame;
            if (b) return b.bind(a.win);
            var c = 0;
            return function(d) {
                var e = Date.now(),
                    f = Math.max(0, 16 - (e - c));
                c = e + f;
                a.win.setTimeout(d, f)
            }
        }

        function Zl(a, b) {
            try {
                void 0 !== a(b) && H().error("VSYNC", "callback returned a value but vsync cannot propogate it: %s", a.toString())
            } catch (c) {
                return nb(c), !1
            }
            return !0
        };

        function $l(a) {
            N(a, "crypto", gh);
            N(a, "batched-xhr", wg);
            N(a, "platform", oj);
            N(a, "templates", nk);
            N(a, "timer", qk);
            N(a, "timer", qk);
            N(a, "vsync", Vl);
            N(a, "xhr", ug);
            N(a, "input", Qi);
            N(a, "preconnect", yj)
        }

        function am(a) {
            a.getParent();
            O(a, "url", rk, !0);
            O(a, "documentInfo", jh);
            O(a, "cid", Mg);
            O(a, "viewer", Zk, !0);
            O(a, "viewport", Jl, !0);
            O(a, "hidden-observer", Nh);
            O(a, "history", di);
            O(a, "resources", Kj);
            O(a, "owners", fj);
            O(a, "mutator", $i);
            Xk(a);
            O(a, "action", Mf, !0);
            O(a, "standard-actions", ak, !0);
            lk(a);
            O(a, "navigation", zh, !0);
            Kh(a);
            O(a, "loadingIndicator", Xi)
        };
        var bm = ["amp-ad", "amp-embed", "amp-video"],
            cm = ["amp-mustache"];

        function dm(a) {
            this.win = a;
            this.Aa = Qc(a);
            this.yd = {};
            this.Ya = null
        }
        g = dm.prototype;
        g.registerExtension = function(a, b, c) {
            var d = em(this, a, !0);
            try {
                this.Ya = a, b(c, c._), d.loaded = !0, d.resolve && d.resolve(d.extension)
            } catch (e) {
                throw d.error = e, d.reject && d.reject(e), e;
            } finally {
                this.Ya = null
            }
        };
        g.waitForExtension = function(a, b, c) {
            return R(a).timeoutPromise(c || 16E3, fm(em(this, b, !1)), "Render timeout waiting for extension " + b + " to be load.")
        };
        g.preloadExtension = function(a, b) {
            "amp-embed" == a && (a = "amp-ad");
            var c = em(this, a, !1);
            if (c.loaded || c.error) var d = !1;
            else void 0 === c.scriptPresent && (d = gm(this, a), c.scriptPresent = 0 < d.length), d = !c.scriptPresent;
            if (d) {
                d = b;
                b = this.win.document.createElement("script");
                b.async = !0;
                a.startsWith("_") ? d = "" : b.setAttribute(0 <= cm.indexOf(a) ? "custom-template" : "custom-element", a);
                b.setAttribute("data-script", a);
                b.setAttribute("i-amphtml-inserted", "");
                z().esm && b.setAttribute("type", "module");
                var e = this.win.document.head.querySelector("script[nonce]");
                e && b.setAttribute("nonce", e.getAttribute("nonce"));
                b.setAttribute("crossorigin", "anonymous");
                e = z().esm ? ".mjs" : ".js";
                var f = D.cdn;
                var h = z().rtvVersion;
                null == d && (d = "0.1");
                b.src = f + "/rtv/" + h + "/v0/" + a + (d ? "-" + d : "") + e;
                this.win.document.head.appendChild(b);
                c.scriptPresent = !0
            }
            return fm(c)
        };
        g.installExtensionForDoc = function(a, b, c) {
            var d = this,
                e = a.getRootNode(),
                f = e.__AMP_EXT_LDR;
            f || (f = e.__AMP_EXT_LDR = K());
            if (f[b]) return f[b];
            Ii(a.win, b);
            return f[b] = this.preloadExtension(b, c).then(function() {
                return d.installExtensionInDoc(a, b)
            })
        };
        g.reloadExtension = function(a) {
            var b = gm(this, a, !1);
            if (!b.length) return G().error("reloadExtension", 'Extension script for "%s" is missing or was already reloaded.', a), null;
            var c = this.yd[a];
            c && (c.scriptPresent = !1);
            b.forEach(function(d) {
                return d.setAttribute("i-amphtml-loaded-new-version", a)
            });
            c = jf(b[0].src);
            return this.preloadExtension(a, c.extensionVersion)
        };

        function gm(a, b, c) {
            c = void 0 === c ? !0 : c;
            a = a.win.document.head.querySelectorAll('script[src*="/' + b + '-"]:not([i-amphtml-loaded-new-version])' + (c ? "" : ":not([i-amphtml-inserted])"));
            for (var d = [], e = 0; e < a.length; e++) {
                var f = a[e];
                jf(f.src).extensionId === b && d.push(f)
            }
            return d
        }
        g.loadElementClass = function(a) {
            return this.preloadExtension(a).then(function(b) {
                return b.elements[a].implementationClass
            })
        };
        g.addElement = function(a, b, c) {
            hm(this, a).extension.elements[a] = {
                implementationClass: b,
                css: c
            };
            this.addDocFactory(function(d) {
                im(d, a, b, c)
            })
        };

        function im(a, b, c, d) {
            d ? $e(a, d, function() {
                jm(a.win, b, c)
            }, !1, b) : jm(a.win, b, c)
        }

        function jm(a, b, c) {
            var d = Fi(a);
            if (!d[b]) Ji(a, b, c);
            else if (d[b] != c)
                for (J(d[b] == fi, "%s is already registered. The script tag for %s is likely included twice in the page.", b, b), d[b] = c, d = 0; d < ei.length; d++) {
                    var e = ei[d].element;
                    e.tagName.toLowerCase() == b && e.ownerDocument.defaultView == a && (Gi(e, c), ei.splice(d--, 1))
                }
            N(a, b, km)
        }
        g.addService = function(a, b) {
            hm(this).extension.services.push({
                serviceName: a,
                serviceClass: b
            });
            this.addDocFactory(function(c) {
                O(c, a, b, !0)
            })
        };
        g.addDocFactory = function(a, b) {
            var c = hm(this, b);
            c.docFactories.push(a);
            if (this.Ya && this.Aa.isSingleDoc()) {
                var d = this.Aa.getAmpDoc(this.win.document);
                (d.declaresExtension(this.Ya) || c.auto) && a(d)
            }
        };
        g.preinstallEmbed = function(a, b) {
            var c = a.win;
            lm(this.win, c);
            mm(c);
            b.forEach(function(d) {
                bm.includes(d) || Ii(c, d)
            })
        };
        g.installExtensionsInDoc = function(a, b) {
            var c = this;
            return Promise.all(b.map(function(d) {
                return c.installExtensionInDoc(a, d)
            }))
        };
        g.installExtensionInDoc = function(a, b) {
            var c = em(this, b, !1);
            return fm(c).then(function() {
                a.declareExtension(b);
                c.docFactories.forEach(function(d) {
                    try {
                        d(a)
                    } catch (e) {
                        nb("Doc factory failed: ", e, b)
                    }
                })
            })
        };

        function em(a, b, c) {
            var d = a.yd[b];
            d || (d = {
                extension: {
                    elements: {},
                    services: []
                },
                auto: c,
                docFactories: [],
                promise: void 0,
                resolve: void 0,
                reject: void 0,
                loaded: void 0,
                error: void 0,
                scriptPresent: void 0
            }, a.yd[b] = d);
            return d
        }

        function hm(a, b) {
            a.Ya || H().error("extensions", "unknown extension for ", b);
            return em(a, a.Ya || "_UNKNOWN_", !0)
        }

        function fm(a) {
            if (!a.promise)
                if (a.loaded) a.promise = Promise.resolve(a.extension);
                else if (a.error) a.promise = Promise.reject(a.error);
            else {
                var b = new M;
                a.promise = b.promise;
                a.resolve = b.resolve;
                a.reject = b.reject
            }
            return a.promise
        }

        function mm(a) {
            bm.forEach(function(b) {
                Ii(a, b)
            })
        }

        function lm(a, b) {
            var c = Fi(a)["amp-img"];
            Ji(b, "amp-img", c || fi);
            a = Fi(a)["amp-pixel"];
            Ji(b, "amp-pixel", a || fi)
        }

        function km() {
            return {}
        };
        (function() {
            pb = db;
            H();
            G()
        })();
        (function(a) {
            self.__AMP_REPORT_ERROR = a
        })(function(a, b, c) {
            xf(b, c);
            b && a && Za(b.message) && !(0 <= b.message.indexOf("\u200b\u200b\u200b\u200b")) && Qc(a).isSingleDoc() && (b = L({
                errorName: b.name,
                errorMessage: b.message
            }), a = Qc(a).getSingleDoc().getRootNode(), sf(a.documentElement || a.body || a, b))
        }.bind(null, self));

        function nm(a) {
            function b(k) {
                function l() {
                    f.then(function() {
                        "function" == typeof k ? k(c.AMP, c.AMP._) : e.registerExtension(k.n, k.f, c.AMP)
                    })
                }
                "function" != typeof k && k.i ? om(e, k).then(function() {
                    return pm(c, k, l)
                }) : pm(c, k, l)
            }
            var c = self;
            if (c.__AMP_TAG) v();
            else {
                c.__AMP_TAG = !0;
                var d = c.AMP || [];
                N(c, "extensions", dm);
                var e = Sc(c);
                $l(c);
                mm(c);
                c.AMP = {
                    win: c,
                    _: c.AMP ? c.AMP._ : void 0
                };
                c.AMP.config = Xa;
                c.AMP.BaseElement = Ue;
                c.AMP.registerElement = e.addElement.bind(e);
                c.AMP.registerTemplate = function(k, l) {
                    var m = P(c, "templates");
                    if (m.Yb[k]) {
                        var p = m.oe[k];
                        J(p, "Duplicate template type: %s", k);
                        delete m.oe[k];
                        p(l)
                    } else m.Yb[k] = Promise.resolve(l)
                };
                c.AMP.registerServiceForDoc = e.addService.bind(e);
                c.AMP.isExperimentOn = W.bind(null, c);
                c.AMP.toggleExperiment = le.bind(null, c);
                c.AMP.setLogLevel = ab.bind(null);
                c.AMP.setTickFunction = function() {};
                var f = a(c, e);
                for (a = 0; a < d.length; a++) {
                    var h = d[a];
                    if (qm(c, h)) d.splice(a--, 1);
                    else if ("function" == typeof h || "high" == h.p) {
                        try {
                            b(h)
                        } catch (k) {
                            H().error("runtime", "Extension failed: ", k, h.n)
                        }
                        d.splice(a--,
                            1)
                    }
                }
                rm(c, function() {
                    c.AMP.push = function(m) {
                        qm(c, m) || b(m)
                    };
                    for (var k = 0; k < d.length; k++) {
                        var l = d[k];
                        if (!qm(c, l)) try {
                            b(l)
                        } catch (m) {
                            H().error("runtime", "Extension failed: ", m, l.n)
                        }
                    }
                    d.length = 0
                });
                c.AMP.push || (c.AMP.push = d.push.bind(d));
                Q(c).isIos() && X(c.document.documentElement, "cursor", "pointer");
                c.IntersectionObserver && c.IntersectionObserver !== Xc && c.IntersectionObserverEntry || Sc(c).preloadExtension("amp-intersection-observer-polyfill")
            }
        }

        function om(a, b) {
            if (Array.isArray(b.i)) return b = b.i.map(function(c) {
                return a.preloadExtension(c)
            }), Promise.all(b);
            if ("string" == typeof b.i) return a.preloadExtension(b.i);
            H().error("RUNTIME", "dependency is neither an array or a string", b.i);
            return v()
        }

        function pm(a, b, c) {
            "function" == typeof b || "high" == b.p ? v().then(c) : (c.displayName = b.n, si(a.document, c))
        }

        function sm() {
            nm(function(a) {
                tm(a);
                um(a);
                return Cb(a.document).then(function() {
                    Hi(a.AMP.ampdoc)
                })
            })
        }

        function tm(a) {
            var b = a.document.documentElement,
                c = Qc(a).getSingleDoc();
            a.AMP.ampdoc = c;
            c = S(b);
            a.AMP.viewer = c;
            z().development && (a.AMP.toggleRuntime = c.toggleRuntime.bind(c), a.AMP.resources = Uc(b));
            b = Wc(b);
            a.AMP.viewport = {};
            a.AMP.viewport.getScrollLeft = b.getScrollLeft.bind(b);
            a.AMP.viewport.getScrollWidth = b.getScrollWidth.bind(b);
            a.AMP.viewport.getWidth = b.getWidth.bind(b)
        }

        function um(a) {
            a.AMP.installAmpdocServices = am.bind(null);
            a.AMP.combinedCss = kf + lf
        }

        function qm(a, b) {
            if ("function" == typeof b || "2011252111003" == b.v) return !1;
            Sc(a).reloadExtension(b.n);
            return !0
        }

        function rm(a, b) {
            W(a, "pump-early-frame") ? a.document.body ? 0 < Ze(a).length ? b() : R(a).delay(b, 1) : b() : b()
        };

        function vm() {
            var a = self;
            sj(a.document, function() {
                return wm(a)
            })
        }

        function wm(a) {
            var b = 1500,
                c = a.performance;
            c && c.timing && c.timing.navigationStart && (b = Date.now() - c.timing.navigationStart);
            var d = Math.max(1, 2100 - b);
            a.setTimeout(function() {
                xm(a);
                var e = a.document.styleSheets;
                if (e) {
                    for (var f = a.document.querySelectorAll('link[rel~="stylesheet"]:not([href^="' + String(D.cdn).replace(tb, ub) + '"])'), h = [], k = 0; k < f.length; k++) {
                        for (var l = f[k], m = !1, p = 0; p < e.length; p++)
                            if (e[p].ownerNode == l) {
                                m = !0;
                                break
                            }
                        m || h.push(l)
                    }
                    k = {};
                    for (l = 0; l < h.length; k = {
                            na: k.na,
                            Yc: k.Yc
                        }, l++) k.na = h[l], k.Yc = k.na.media ||
                        "all", k.na.media = "print", k.na.onload = function(q) {
                            return function() {
                                q.na.media = q.Yc;
                                xm(a)
                            }
                        }(k), k.na.setAttribute("i-amphtml-timeout", d), k.na.parentNode.insertBefore(k.na, k.na.nextSibling)
                }
            }, d)
        }

        function xm(a) {
            a = a.document;
            if (a.fonts && a.fonts.values)
                for (var b = a.fonts.values(); a = b.next();) {
                    var c = a.value;
                    if (!c) break;
                    "loading" == c.status && "display" in c && "auto" == c.display && (c.display = "swap")
                }
        };

        function ym(a) {
            return a.waitForBodyOpen().then(function() {
                var b = a.getBody(),
                    c = Ab(b, function() {
                        return !!b.firstElementChild
                    });
                return R(a.win).timeoutPromise(2E3, c).then(function() {
                    return "AMP-STORY" === b.firstElementChild.tagName
                }, function() {
                    return !1
                })
            })
        };

        function zm(a) {
            var b = a.win; of (["\u26a1", "amp"], b.document) && a.isSingleDoc() && ti(a, function() {
                ym(a).then(function(c) {
                    c || Sc(b).installExtensionForDoc(a, "amp-auto-lightbox")
                })
            })
        };

        function Am(a) {
            this.win = a;
            this.Nc = null;
            var b = K();
            a.name && 0 == a.name.indexOf("__AMP__") && Object.assign(b, x(a.name.substring(7)));
            a.location && a.location.hash && Object.assign(b, x(a.location.hash));
            this.Nc = new Bm(a, {
                params: b
            });
            a.document.__AMPDOC = this.Nc
        }
        g = Am.prototype;
        g.isSingleDoc = function() {
            return !!this.Nc
        };
        g.getSingleDoc = function() {
            return this.Nc
        };
        g.getAmpDocIfAvailable = function(a) {
            for (var b = a; b;) {
                var c = a.everAttached && "function" === typeof a.getAmpDoc ? a.getAmpDoc() : null;
                if (c) return c;
                b = Gb(b);
                if (!b) break;
                var d = b.__AMPDOC;
                if (d) return d;
                b = b.host ? b.host : Gc(b, this.win)
            }
            return null
        };
        g.getAmpDoc = function(a) {
            var b = this.getAmpDocIfAvailable(a);
            if (!b) throw H().createError("No ampdoc found for", a);
            return b
        };
        g.installShadowDoc = function(a, b, c) {
            a = new Cm(this.win, a, b, c);
            return b.__AMPDOC = a
        };
        g.installFieDoc = function(a, b, c) {
            var d = b.document;
            a = new Dm(b, a, this.getAmpDoc(b.frameElement), c);
            return d.__AMPDOC = a
        };

        function Em(a, b, c) {
            var d = this;
            this.win = a;
            this.Hf = K();
            this.Bc = b;
            this.K = c && c.signals || new ki;
            this.de = c && c.params || K();
            this.qa = null;
            this.Ye = [];
            this.ve = c && c.visibilityState || this.de.visibilityState && H().assertEnumValue(We, this.de.visibilityState, "VisibilityState") || null;
            this.Wc = null;
            this.cg = new Y;
            this.wf = null;
            this.re = [];
            var e = this.se.bind(this);
            this.Bc && this.re.push(this.Bc.onVisibilityChanged(e));
            Sl(this.win.document, e);
            this.re.push(function() {
                return Ul(d.win.document, e)
            });
            this.se()
        }
        g = Em.prototype;
        g.dispose = function() {
            Jc(this);
            this.re.forEach(function(a) {
                return a()
            })
        };
        g.isSingleDoc = function() {
            return null
        };
        g.getParent = function() {
            return this.Bc
        };
        g.getWin = function() {
            return this.win
        };
        g.signals = function() {
            return this.K
        };
        g.getParam = function(a) {
            a = this.de[a];
            return null == a ? null : a
        };
        g.getMeta = function() {
            var a = this;
            if (this.qa) return K(this.qa);
            this.qa = K();
            var b = this.win.document.head.querySelectorAll("meta[name]");
            Qb(b, function(c) {
                var d = c.getAttribute("name");
                c = c.getAttribute("content");
                d && null !== c && void 0 === a.qa[d] && (a.qa[d] = c)
            });
            return K(this.qa)
        };
        g.getMetaByName = function(a) {
            if (!a) return null;
            a = this.getMeta()[a];
            return void 0 !== a ? a : null
        };
        g.setMetaByName = function() {};
        g.declaresExtension = function(a) {
            return -1 != this.Ye.indexOf(a)
        };
        g.declareExtension = function(a) {
            this.declaresExtension(a) || this.Ye.push(a)
        };
        g.getRootNode = function() {
            return null
        };
        g.getHeadNode = function() {};
        g.isBodyAvailable = function() {
            return !1
        };
        g.getBody = function() {
            return null
        };
        g.waitForBodyOpen = function() {
            return null
        };
        g.isReady = function() {
            return null
        };
        g.whenReady = function() {
            return null
        };
        g.getUrl = function() {
            return null
        };
        g.getElementById = function(a) {
            return this.getRootNode().getElementById(a)
        };
        g.contains = function(a) {
            return this.getRootNode().contains(a)
        };
        g.overrideVisibilityState = function(a) {
            this.ve != a && (this.ve = a, this.se())
        };
        g.se = function() {
            for (var a = Rl(this.win.document), b = "visible", c = this.Bc; c; c = c.getParent())
                if ("visible" != c.getVisibilityState()) {
                    b = c.getVisibilityState();
                    break
                }
            var d = this.ve || "visible";
            c = "visible" == d && "visible" == b && "visible" == a ? "visible" : "hidden" == a && "paused" == d ? a : "paused" == d || "inactive" == d ? d : "paused" == b || "inactive" == b ? b : "prerender" == d || "prerender" == a || "prerender" == b ? "prerender" : "hidden";
            this.Wc != c && (this.Wc = c, "visible" == c ? (this.wf = Date.now(), this.K.signal("-ampdoc-first-visible"), this.K.signal("-ampdoc-next-visible")) :
                this.K.reset("-ampdoc-next-visible"), this.cg.fire())
        };
        g.whenFirstVisible = function() {
            return this.K.whenSignal("-ampdoc-first-visible").then(function() {})
        };
        g.whenNextVisible = function() {
            return this.K.whenSignal("-ampdoc-next-visible").then(function() {})
        };
        g.getFirstVisibleTime = function() {
            return this.K.get("-ampdoc-first-visible")
        };
        g.getLastVisibleTime = function() {
            return this.wf
        };
        g.getVisibilityState = function() {
            return this.Wc
        };
        g.isVisible = function() {
            return "visible" == this.Wc
        };
        g.hasBeenVisible = function() {
            return null != this.getLastVisibleTime()
        };
        g.onVisibilityChanged = function(a) {
            return this.cg.add(a)
        };
        g.registerSingleton = function(a) {
            return this.Hf[a] ? !1 : this.Hf[a] = !0
        };

        function Bm(a, b) {
            Em.call(this, a, null, b);
            var c = this;
            this.qb = this.win.document.body ? Promise.resolve(this.win.document.body) : Cb(this.win.document).then(function() {
                return c.getBody()
            });
            this.Qb = uj(this.win.document)
        }
        n(Bm, Em);
        g = Bm.prototype;
        g.isSingleDoc = function() {
            return !0
        };
        g.getRootNode = function() {
            return this.win.document
        };
        g.getUrl = function() {
            return this.win.location.href
        };
        g.getHeadNode = function() {
            return this.win.document.head
        };
        g.isBodyAvailable = function() {
            return !!this.win.document.body
        };
        g.getBody = function() {
            return this.win.document.body
        };
        g.waitForBodyOpen = function() {
            return this.qb
        };
        g.isReady = function() {
            return qj(this.win.document)
        };
        g.whenReady = function() {
            return this.Qb
        };

        function Cm(a, b, c, d) {
            Em.call(this, a, null, d);
            this.$b = b;
            this.Pf = c;
            this.gd = null;
            var e = new M;
            this.qb = e.promise;
            this.Ee = e.resolve;
            this.Sb = !1;
            var f = new M;
            this.Qb = f.promise;
            this.Rb = f.resolve
        }
        n(Cm, Em);
        g = Cm.prototype;
        g.isSingleDoc = function() {
            return !1
        };
        g.getRootNode = function() {
            return this.Pf
        };
        g.getUrl = function() {
            return this.$b
        };
        g.getHeadNode = function() {
            return this.Pf
        };
        g.isBodyAvailable = function() {
            return !!this.gd
        };
        g.getBody = function() {
            return this.gd
        };
        g.setBody = function(a) {
            this.gd = a;
            this.Ee(a);
            this.Ee = void 0
        };
        g.waitForBodyOpen = function() {
            return this.qb
        };
        g.isReady = function() {
            return this.Sb
        };
        g.setReady = function() {
            this.Sb = !0;
            this.Rb();
            this.Rb = void 0
        };
        g.whenReady = function() {
            return this.Qb
        };
        g.getMeta = function() {
            return K(this.qa)
        };
        g.setMetaByName = function(a, b) {
            this.qa || (this.qa = K());
            this.qa[a] = b
        };

        function Dm(a, b, c, d) {
            Em.call(this, a, c, d);
            var e = this;
            this.$b = b;
            this.qb = this.win.document.body ? Promise.resolve(this.win.document.body) : Cb(this.win.document).then(function() {
                return e.getBody()
            });
            this.Sb = !1;
            a = new M;
            this.Qb = a.promise;
            this.Rb = a.resolve
        }
        n(Dm, Em);
        g = Dm.prototype;
        g.isSingleDoc = function() {
            return !1
        };
        g.getRootNode = function() {
            return this.win.document
        };
        g.getUrl = function() {
            return this.$b
        };
        g.getHeadNode = function() {
            return this.win.document.head
        };
        g.isBodyAvailable = function() {
            return !!this.win.document.body
        };
        g.getBody = function() {
            return this.win.document.body
        };
        g.waitForBodyOpen = function() {
            return this.qb
        };
        g.isReady = function() {
            return this.Sb
        };
        g.whenReady = function() {
            return this.Qb
        };
        g.setReady = function() {
            this.Sb = !0;
            this.Rb();
            this.Rb = void 0
        };

        function Fm() {
            var a = self;
            N(a, "ampdoc", function() {
                return new Am(a)
            })
        };
        var Gm = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];

        function Hm(a, b, c) {
            a = tc(a);
            return Im(a, b, function(d) {
                return d.isDisplayed() && (d.overlaps(c) || d.isFixed()) && d.prerenderAllowed() ? !0 : !1
            }).then(function(d) {
                var e = [];
                d.forEach(function(f) {
                    Gm.includes(f.element.tagName) || e.push(f.loadedOnce())
                });
                return Promise.all(e)
            })
        }

        function Im(a, b, c) {
            return a.signals().whenSignal("ready-scan").then(function() {
                var d = [];
                Uc(a).get().forEach(function(e) {
                    e.hasBeenMeasured() || e.hostWin != b || e.hasOwner() || d.push(e.getPageLayoutBoxAsync())
                });
                return Promise.all(d)
            }).then(function() {
                return Uc(a).get().filter(function(d) {
                    return d.hostWin == b && !d.hasOwner() && d.hasBeenMeasured() && c(d)
                })
            })
        };

        function Jm(a) {
            var b = this;
            this.win = a;
            this.wb = [];
            this.pe = a.performance.timeOrigin || a.performance.timing.navigationStart;
            this.Ze = this.h = this.j = this.B = null;
            this.Hb = this.Rd = !1;
            this.$e = K();
            this.ec = void 0;
            this.eb = new ki;
            this.cc = this.Mc = 0;
            var c = this.win.PerformanceObserver && this.win.PerformanceObserver.supportedEntryTypes || [];
            c.includes("paint") || this.eb.rejectSignal("fcp", H().createExpectedError("First Contentful Paint not supported"));
            (this.Wb = c.includes("layout-shift")) || this.eb.rejectSignal("cls", H().createExpectedError("Cumulative Layout Shift not supported"));
            (this.Sf = c.includes("first-input")) || this.eb.rejectSignal("fid", H().createExpectedError("First Input Delay not supported"));
            (this.Vb = c.includes("largest-contentful-paint")) || this.eb.rejectSignal("lcpv", H().createExpectedError("Largest Contentful Paint not supported"));
            this.Ch = c.includes("navigation");
            this.oc = this.nc = null;
            this.He = this.gh.bind(this);
            this.$d = this.$d.bind(this);
            this.addEnabledExperiment("rtv-" + z(this.win).rtvVersion);
            uj(a.document).then(function() {
                b.tick("dr");
                b.flush()
            });
            vj(a.document).then(function() {
                b.tick("ol");
                if (!b.win.PerformancePaintTiming && b.win.chrome && "function" == typeof b.win.chrome.loadTimes) {
                    var d = 1E3 * b.win.chrome.loadTimes().firstPaintTime - b.win.performance.timing.navigationStart;
                    1 >= d || b.tickDelta("fp", d)
                }
                b.flush()
            });
            Km(this);
            Lm(this)
        }
        g = Jm.prototype;
        g.coreServicesAvailable = function() {
            var a = this,
                b = this.win.document.documentElement;
            this.B = tc(b);
            this.j = S(b);
            this.h = Uc(b);
            this.Ze = Rc(this.B);
            this.Hb = this.j.isEmbedded() && "1" === this.j.getParam("csi");
            this.B.onVisibilityChanged(this.flush.bind(this));
            Mm(this);
            var c = this.j.whenMessagingReady();
            this.B.whenFirstVisible().then(function() {
                a.tick("ofv");
                a.flush()
            });
            if (this.Vb || this.Wb) this.win.addEventListener("visibilitychange", this.He, {
                capture: !0
            }), this.B.onVisibilityChanged(this.$d);
            return c ? c.then(function() {
                a.tickDelta("msr",
                    a.win.performance.now());
                a.tick("timeOrigin", void 0, a.pe);
                var d = a.B.getMetaByName("amp-usqp");
                d && d.split(",").forEach(function(e) {
                    a.addEnabledExperiment("ssr-" + e)
                });
                return Nm(a)
            }).then(function() {
                a.Rd = !0;
                Om(a);
                a.flush()
            }) : v()
        };

        function Nm(a) {
            var b = Qc(a.win).getSingleDoc();
            return ym(b).then(function(c) {
                c && a.addEnabledExperiment("story")
            })
        }

        function Km(a) {
            if ("inabox" !== z(a.win).runtime) {
                var b = !1,
                    c = !1,
                    d = !1,
                    e = !1,
                    f = function(k) {
                        if ("first-paint" != k.name || b)
                            if ("first-contentful-paint" != k.name || c) "first-input" !== k.entryType || d ? "layout-shift" === k.entryType ? k.hadRecentInput || (a.cc += k.value) : "largest-contentful-paint" === k.entryType ? (k.loadTime && (a.nc = k.loadTime), k.renderTime && (a.oc = k.renderTime)) : "navigation" != k.entryType || e || ("domComplete domContentLoadedEventEnd domContentLoadedEventStart domInteractive loadEventEnd loadEventStart requestStart responseStart".split(" ").forEach(function(m) {
                                return a.tick(m,
                                    k[m])
                            }), e = !0) : (a.tickDelta("fid", k.processingStart - k.startTime), d = !0);
                            else {
                                var l = k.startTime + k.duration;
                                a.tickDelta("fcp", l);
                                a.tickSinceVisible("fcpv", l);
                                c = !0
                            }
                        else a.tickDelta("fp", k.startTime + k.duration), b = !0
                    },
                    h = [];
                a.win.PerformancePaintTiming && (a.win.performance.getEntriesByType("paint").forEach(f), h.push("paint"));
                a.Sf && Pm(a, f, {
                    type: "first-input",
                    buffered: !0
                });
                a.Wb && Pm(a, f, {
                    type: "layout-shift",
                    buffered: !0
                });
                a.Vb && Pm(a, f, {
                    type: "largest-contentful-paint",
                    buffered: !0
                });
                a.Ch && Pm(a, f, {
                    type: "navigation",
                    buffered: !0
                });
                0 < h.length && Pm(a, f, {
                    entryTypes: h
                })
            }
        }

        function Pm(a, b, c) {
            try {
                (new a.win.PerformanceObserver(function(d) {
                    d.getEntries().forEach(b);
                    a.flush()
                })).observe(c)
            } catch (d) {
                H().warn("Performance", d)
            }
        }

        function Lm(a) {
            if (a.win.perfMetrics && a.win.perfMetrics.onFirstInputDelay) a.win.perfMetrics.onFirstInputDelay(function(b) {
                a.tickDelta("fid-polyfill", b);
                a.flush()
            })
        }
        g.gh = function() {
            "hidden" === this.win.document.visibilityState && (this.Wb && Qm(this), this.Vb && Rm(this))
        };
        g.$d = function() {
            "inactive" === this.B.getVisibilityState() && (this.Wb && Qm(this), this.Vb && Rm(this))
        };

        function Qm(a) {
            0 === a.Mc ? (a.tickDelta("cls", a.cc), a.flush(), a.Mc = 1) : 1 === a.Mc && (a.tickDelta("cls-2", a.cc), a.flush(), a.Mc = 2, a.win.removeEventListener("visibilitychange", a.He, {
                capture: !0
            }))
        }

        function Rm(a) {
            if (null !== a.nc) {
                a.tickDelta("lcpl", a.nc);
                var b = a.nc
            }
            null !== a.oc && (a.tickDelta("lcpr", a.oc), b = b || a.oc);
            null !== b && a.tickSinceVisible("lcpv", b);
            a.flush()
        }

        function Mm(a) {
            var b = !a.B.hasBeenVisible(),
                c = -1;
            a.B.whenFirstVisible().then(function() {
                c = a.win.performance.now();
                a.mark("visible")
            });
            Sm(a).then(function() {
                if (b) {
                    var d = -1 < c ? a.win.performance.now() - c : 0;
                    a.B.whenFirstVisible().then(function() {
                        a.tickDelta("pc", d)
                    });
                    Tm(a, d);
                    a.mark("pc")
                } else a.tick("pc"), Tm(a, a.win.performance.now() - c);
                a.flush()
            })
        }

        function Sm(a) {
            return a.h.whenFirstPass().then(function() {
                var b = a.win.document.documentElement,
                    c = Wc(b).getSize();
                c = jc(0, 0, c.width, c.height);
                return Hm(b, a.win, c)
            })
        }
        g.tick = function(a, b, c) {
            var d = L({
                    label: a
                }),
                e;
            void 0 != b ? d.delta = e = Math.max(b, 0) : void 0 != c ? d.value = c : (this.mark(a), e = this.win.performance.now(), d.value = this.pe + e);
            this.win.dispatchEvent(Ne(this.win, {
                label: a,
                delta: e
            }));
            this.Rd && this.Hb ? this.j.sendMessage("tick", d) : (50 <= this.wb.length && this.wb.shift(), this.wb.push(d));
            this.eb.signal(a, e)
        };
        g.mark = function(a) {
            this.win.performance && this.win.performance.mark && 1 == arguments.length && this.win.performance.mark(a)
        };
        g.tickDelta = function(a, b) {
            this.tick(a, b)
        };
        g.tickSinceVisible = function(a, b) {
            b = void 0 == b ? this.win.performance.now() : b;
            b = this.pe + b;
            var c = this.B && this.B.getFirstVisibleTime();
            this.tickDelta(a, c ? Math.max(b - c, 0) : 0)
        };
        g.flush = function() {
            this.Rd && this.Hb && (null == this.ec && (this.ec = Object.keys(this.$e).join(",")), this.j.sendMessage("sendCsi", L({
                ampexp: this.ec,
                canonicalUrl: this.Ze.canonicalUrl
            }), !0))
        };
        g.throttledFlush = function() {
            this.Vf || (this.Vf = mf(this.win, this.flush.bind(this), 100));
            this.Vf()
        };
        g.addEnabledExperiment = function(a) {
            this.$e[a] = !0;
            this.ec = void 0
        };

        function Om(a) {
            a.j && (a.Hb && a.wb.forEach(function(b) {
                a.j.sendMessage("tick", b)
            }), a.wb.length = 0)
        }

        function Tm(a, b) {
            a.j && a.j.sendMessage("prerenderComplete", L({
                value: b
            }), !0)
        }
        g.isPerformanceTrackingOn = function() {
            return this.Hb
        };
        g.getMetric = function(a) {
            return this.eb.whenSignal(a)
        };

        function Um(a, b) {
            this.Ca = a;
            this.I = b;
            this.Sc = !1;
            this.me = 0;
            this.Le = this.fh.bind(this);
            this.Ke = this.eh.bind(this);
            this.Je = this.dh.bind(this);
            this.Ie = this.bh.bind(this);
            this.Ca.addEventListener("touchstart", this.Le, !0)
        }
        g = Um.prototype;
        g.cleanup = function() {
            Vm(this);
            this.Ca.removeEventListener("touchstart", this.Le, !0)
        };
        g.fh = function(a) {
            this.Sc || !a.touches || 1 != a.touches.length || 0 < this.I.getScrollTop() || (a = a.touches[0].clientY, this.Sc = !0, this.me = a, this.Ca.addEventListener("touchmove", this.Ke, !0), this.Ca.addEventListener("touchend", this.Je, !0), this.Ca.addEventListener("touchcancel", this.Ie, !0))
        };

        function Vm(a) {
            a.Sc = !1;
            a.me = 0;
            a.Ca.removeEventListener("touchmove", a.Ke, !0);
            a.Ca.removeEventListener("touchend", a.Je, !0);
            a.Ca.removeEventListener("touchcancel", a.Ie, !0)
        }
        g.eh = function(a) {
            if (this.Sc) {
                var b = a.touches[0].clientY - this.me;
                0 < b && a.preventDefault();
                0 != b && Vm(this)
            }
        };
        g.dh = function() {
            Vm(this)
        };
        g.bh = function() {
            Vm(this)
        };

        function Wm(a) {
            var b = a.win; of (["\u26a1", "amp"], b.document) && Q(a.win).isStandalone() && ti(a, function() {
                Sc(b).installExtensionForDoc(a, "amp-standalone").then(function() {
                    return Lc(a.getBody(), "standalone", "amp-standalone")
                }).then(function(c) {
                    return c.initialize()
                })
            })
        };

        function Xm() {
            var a = self,
                b = a.location.href;
            if (!b.startsWith("about:")) {
                var c = !1;
                z().development && (c = "0" !== x(a.location.originalHash || a.location.hash).validate);
                c ? Ym(a.document, D.cdn + "/v0/validator.js").then(function() {
                    amp.validator.validateUrlAndLog(b, a.document)
                }) : z().examiner && Ym(a.document, D.cdn + "/examiner.js")
            }
        }

        function Ym(a, b) {
            var c = a.createElement("script");
            c.src = b;
            (b = a.head.querySelector("script[nonce]")) && c.setAttribute("nonce", b.getAttribute("nonce"));
            b = Te(c).then(function() {
                a.head.removeChild(c)
            }, function() {});
            a.head.appendChild(c);
            return b
        };

        function Zm(a, b) {
            si(self.document, function() {
                $l(self);
                am(a);
                b.coreServicesAvailable();
                rh()
            });
            si(self.document, function() {
                sm()
            });
            si(self.document, function() {
                var c = self;
                Ji(c, "amp-img", Li);
                Ji(c, "amp-pixel", mj);
                Ji(c, "amp-layout", Si)
            });
            si(self.document, function() {
                Hi(a)
            });
            si(self.document, function() {
                var c = self,
                    d = c.document.documentElement;
                "0" == S(d).getParam("p2r") && Q(c).isChrome() && new Um(c.document, Wc(d));
                zm(a);
                Wm(a);
                Xm();
                ff();
                Bj()
            }, !0);
            si(self.document, function() {
                b.tick("e_is");
                Uc(a).ampInitComplete();
                b.flush()
            })
        }
        if (!self.IS_AMP_ALT) {
            self.location && (self.location.originalHash = self.location.hash);
            var ampdocService;
            try {
                Bf(), Fm(), ampdocService = Qc(self)
            } catch (a) {
                throw hf(self.document), a;
            }
            si(self.document, function() {
                var a = ampdocService.getAmpDoc(self.document);
                N(self, "platform", oj);
                N(self, "performance", Jm);
                var b = P(self, "performance");
                self.document.documentElement.hasAttribute("i-amphtml-no-boilerplate") && b.addEnabledExperiment("no-boilerplate");
                z().esm && b.addEnabledExperiment("esm");
                vm();
                b.tick("is");
                $e(a, kf +
                    lf,
                    function() {
                        return Zm(a, b)
                    }, !0, "amp-runtime")
            });
            self.console && (console.info || console.log).call(console, "Powered by AMP \u26a1 HTML \u2013 Version 2011252111003", self.location.href);
            self.document.documentElement.setAttribute("amp-version", "2011252111003")
        };
    })(AMP._ = AMP._ || {})
} catch (e) {
    setTimeout(function() {
        var s = document.body.style;
        s.opacity = 1;
        s.visibility = "visible";
        s.animation = "none";
        s.WebkitAnimation = "none;"
    }, 1000);
    throw e
};

//# sourceMappingURL=v0.js.map