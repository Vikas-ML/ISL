(self.AMP = self.AMP || []).push({
    n: "amp-form",
    v: "2011252111003",
    f: (function(AMP, _) {
        'use strict';
        var m, ba = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        };

        function ca(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return
            }(function() {
                throw Error("Cannot find global object");
            })()
        }
        ca(this);
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

        function n(a, b) {
            a.prototype = ba(b.prototype);
            a.prototype.constructor = a;
            if (ia) ia(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Xa = b.prototype
        }
        var ja;

        function p() {
            return ja ? ja : ja = Promise.resolve(void 0)
        };

        function ka(a, b) {
            var c = b = void 0 === b ? "" : b;
            try {
                return decodeURIComponent(a)
            } catch (d) {
                return c
            }
        };
        var la = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

        function ma(a) {
            var b = Object.create(null);
            if (!a) return b;
            for (var c; c = la.exec(a);) {
                var d = ka(c[1], c[1]),
                    e = c[2] ? ka(c[2].replace(/\+/g, " "), c[2]) : "";
                b[d] = e
            }
            return b
        };
        var na = Object.prototype.toString;

        function oa(a) {
            return a ? Array.prototype.slice.call(a) : []
        };
        var q = self.AMP_CONFIG || {},
            pa = ("string" == typeof q.cdnProxyRegex ? new RegExp(q.cdnProxyRegex) : q.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function qa(a) {
            if (!self.document || !self.document.head || self.location && pa.test(self.location.origin)) return null;
            var b = self.document.head.querySelector('meta[name="' + a + '"]');
            return b && b.getAttribute("content") || null
        }
        var ra = {
            thirdParty: q.thirdPartyUrl || "https://3p.ampproject.net",
            thirdPartyFrameHost: q.thirdPartyFrameHost || "ampproject.net",
            thirdPartyFrameRegex: ("string" == typeof q.thirdPartyFrameRegex ? new RegExp(q.thirdPartyFrameRegex) : q.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
            cdn: q.cdnUrl || qa("runtime-host") || "https://cdn.ampproject.org",
            cdnProxyRegex: pa,
            localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
            errorReporting: q.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
            betaErrorReporting: q.betaErrorReportingUrl ||
                "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
            localDev: q.localDev || !1,
            trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
            geoApi: q.geoApiUrl || qa("amp-geo-api")
        };
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var r = self.__AMP_LOG;

        function t() {
            if (!r.user) throw Error("failed to call initLogConstructor");
            return r.user
        }

        function sa() {
            if (r.dev) return r.dev;
            throw Error("failed to call initLogConstructor");
        }

        function u(a, b, c, d) {
            t().assert(a, b, c, d, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
        };

        function ta() {
            var a, b;
            this.promise = new Promise(function(c, d) {
                a = c;
                b = d
            });
            this.resolve = a;
            this.reject = b
        }

        function ua(a) {
            return new Promise(function(b) {
                b(a())
            })
        }

        function va() {
            var a, b;
            this.ya = new Promise(function(c, d) {
                a = c;
                b = d
            });
            this.Na = a;
            this.La = b;
            this.ia = 0
        }
        va.prototype.add = function(a) {
            var b = this,
                c = ++this.ia;
            Promise.resolve(a).then(function(d) {
                b.ia === c && b.Na(d)
            }, function(d) {
                b.ia === c && b.La(d)
            });
            return this.ya
        };
        va.prototype.then = function(a, b) {
            return this.ya.then(a, b)
        };

        function v(a, b) {
            a = a.__AMP_TOP || (a.__AMP_TOP = a);
            return w(a, b)
        }

        function x(a, b) {
            var c = y(a);
            c = z(c);
            return w(c, b)
        }

        function A(a, b) {
            a = y(a);
            a = z(a);
            return wa(a, b) ? w(a, b) : null
        }

        function xa(a, b) {
            return ya(z(a), b)
        }

        function y(a) {
            return a.nodeType ? v((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function z(a) {
            a = y(a);
            return a.isSingleDoc() ? a.win : a
        }

        function w(a, b) {
            wa(a, b);
            a = za(a)[b];
            a.obj || (a.obj = new a.ctor(a.context), a.ctor = null, a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function Aa(a, b) {
            var c = ya(a, b);
            if (c) return c;
            a = za(a);
            a[b] = Ba();
            return a[b].promise
        }

        function ya(a, b) {
            var c = za(a)[b];
            if (c) {
                if (c.promise) return c.promise;
                w(a, b);
                return c.promise = Promise.resolve(c.obj)
            }
            return null
        }

        function za(a) {
            var b = a.__AMP_SERVICES;
            b || (b = a.__AMP_SERVICES = {});
            return b
        }

        function wa(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor && !a.obj)
        }

        function Ba() {
            var a = new ta,
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
        var Ca = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;

        function Da(a, b, c, d, e) {
            return e ? e : b ? "\ufffd" : d ? a.slice(0, -1) + "\\" + a.slice(-1).charCodeAt(0).toString(16) + " " : "\\" + a
        };
        var Ea;
        var Fa = Object.prototype.hasOwnProperty;

        function B() {
            return Object.create(null)
        }

        function C(a) {
            return a || {}
        }

        function Ga(a, b) {
            var c = [],
                d = [];
            d.push({
                t: a,
                s: b,
                d: 0
            });
            for (a = {}; 0 < d.length;) {
                b = d.shift();
                a.H = b.t;
                a.C = b.s;
                a.Z = b.d;
                if (c.includes(a.C)) throw Error("Source object has a circular reference.");
                c.push(a.C);
                a.H !== a.C && (10 < a.Z ? Object.assign(a.H, a.C) : Object.keys(a.C).forEach(function(e) {
                    return function(f) {
                        var g = e.C[f];
                        if (Fa.call(e.H, f)) {
                            var h = e.H[f];
                            if ("[object Object]" === na.call(g) && "[object Object]" === na.call(h)) {
                                d.push({
                                    t: h,
                                    s: g,
                                    d: e.Z + 1
                                });
                                return
                            }
                        }
                        e.H[f] = g
                    }
                }(a)));
                a = {
                    C: a.C,
                    H: a.H,
                    Z: a.Z
                }
            }
        };

        function Ha(a, b) {
            for (var c = [], d = a.parentElement; d; d = d.parentElement) b(d) && c.push(d);
            return c
        }

        function Ia(a) {
            var b = "fieldset";
            /^[\w-]+$/.test(b);
            b = b.toUpperCase();
            return Ha(a, function(c) {
                return c.tagName == b
            })
        }

        function D(a, b) {
            for (var c = a.length, d = 0; d < c; d++) b(a[d], d)
        };

        function Ja(a, b, c) {
            var d = xa(a, b);
            if (d) return d;
            var e = y(a);
            return e.waitForBodyOpen().then(function() {
                var f = e.win;
                var g = e.win.document.head;
                if (g) {
                    var h = {};
                    g = g.querySelectorAll("script[custom-element],script[custom-template]");
                    for (var k = 0; k < g.length; k++) {
                        var l = g[k];
                        l = l.getAttribute("custom-element") || l.getAttribute("custom-template");
                        h[l] = !0
                    }
                    h = Object.keys(h)
                } else h = [];
                return h.includes(c) ? v(f, "extensions").waitForExtension(f, c) : p()
            }).then(function() {
                var f = e.win;
                return f.__AMP_EXTENDED_ELEMENTS && f.__AMP_EXTENDED_ELEMENTS[c] ?
                    Aa(z(a), b) : null
            })
        };

        function E(a) {
            return x(a, "mutator")
        };
        var F, Ka = "Webkit webkit Moz moz ms O o".split(" ");

        function La(a, b, c) {
            var d = a.style;
            if (!b.startsWith("--")) {
                F || (F = B());
                var e = F[b];
                if (!e) {
                    e = b;
                    if (void 0 === d[b]) {
                        var f = b.charAt(0).toUpperCase() + b.slice(1);
                        b: {
                            for (var g = 0; g < Ka.length; g++) {
                                var h = Ka[g] + f;
                                if (void 0 !== d[h]) {
                                    f = h;
                                    break b
                                }
                            }
                            f = ""
                        }
                        void 0 !== d[f] && (e = f)
                    }
                    F[b] = e
                }
                b = e
            }
            b && (b.startsWith("--") ? a.style.setProperty(b, c) : a.style[b] = c)
        }

        function Ma(a, b) {
            void 0 === b && (b = a.hasAttribute("hidden"));
            b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "")
        };
        var H;

        function Na(a, b, c) {
            var d = a,
                e = c;
            var f = function(h) {
                try {
                    return e(h)
                } catch (k) {
                    throw self.__AMP_REPORT_ERROR(k), k;
                }
            };
            var g = Oa();
            d.addEventListener(b, f, g ? void 0 : !1);
            return function() {
                d && d.removeEventListener(b, f, g ? void 0 : !1);
                f = d = e = null
            }
        }

        function Oa() {
            if (void 0 !== H) return H;
            H = !1;
            try {
                var a = {
                    get capture() {
                        H = !0
                    }
                };
                self.addEventListener("test-options", null, a);
                self.removeEventListener("test-options", null, a)
            } catch (b) {}
            return H
        };

        function I(a, b, c, d) {
            var e = {
                detail: c
            };
            Object.assign(e, d);
            if ("function" == typeof a.CustomEvent) return new a.CustomEvent(b, e);
            a = a.document.createEvent("CustomEvent");
            a.initCustomEvent(b, !!e.bubbles, !!e.cancelable, c);
            return a
        }

        function Pa(a, b, c) {
            return Na(a, b, c)
        }

        function Qa(a, b) {
            var c = b,
                d = Na(a, "mouseup", function(e) {
                    try {
                        c(e)
                    } finally {
                        c = null, d()
                    }
                });
            return d
        }

        function Ra(a) {
            var b, c = new Promise(function(d) {
                b = Qa(a, d)
            });
            c.then(b, b);
            return c
        };

        function Sa(a, b) {
            function c(g) {
                f = null;
                e = a.setTimeout(d, 100);
                b.apply(null, g)
            }

            function d() {
                e = 0;
                f && c(f)
            }
            var e = 0,
                f = null;
            return function(g) {
                for (var h = [], k = 0; k < arguments.length; ++k) h[k - 0] = arguments[k];
                e ? f = h : c(h)
            }
        };

        function Ta(a) {
            var b = a.getRootNode();
            this.T = b.ownerDocument || b;
            this.j = this.T.defaultView;
            this.qa = x(a, "viewport");
            this.V = [];
            this.V.push(Pa(b, "input", function(e) {
                e = e.target;
                "TEXTAREA" == e.tagName && e.hasAttribute("autoexpand") && Ua(e)
            }));
            this.V.push(Pa(b, "mousedown", function(e) {
                1 == e.which && (e = e.target, "TEXTAREA" == e.tagName && Va(e))
            }));
            var c = b.querySelectorAll("textarea");
            this.V.push(Pa(b, "amp:dom-update", function() {
                c = b.querySelectorAll("textarea")
            }));
            var d = Sa(this.j, function(e) {
                e.relayoutAll && Wa(c)
            });
            this.V.push(this.qa.onResize(d));
            Xa(c)
        }

        function Ya(a) {
            function b() {
                var e = c.querySelector("textarea[autoexpand]");
                e && !d ? d = new Ta(a) : !e && d && (d.dispose(), d = null)
            }
            var c = a.getRootNode(),
                d = null;
            Na(c, "amp:dom-update", b);
            b()
        }
        Ta.prototype.dispose = function() {
            this.V.forEach(function(a) {
                return a()
            })
        };

        function Xa(a) {
            Promise.all(oa(a).map(function(b) {
                return Za(b).then(function(c) {
                    c && (t().warn("AMP-FORM", '"textarea[autoexpand]" with initially scrolling content will not autoexpand.\nSee https://github.com/ampproject/amphtml/issues/20839'), b.removeAttribute("autoexpand"))
                })
            }))
        }

        function Za(a) {
            return E(a).measureElement(function() {
                return a.scrollHeight > a.clientHeight
            })
        }

        function Wa(a) {
            D(a, function(b) {
                "TEXTAREA" == b.tagName && b.hasAttribute("autoexpand") && Ua(b)
            })
        }

        function Va(a) {
            var b = E(a);
            Promise.all([b.measureElement(function() {
                return a.scrollHeight
            }), Ra(a)]).then(function(c) {
                var d = c[0],
                    e = 0;
                return b.measureMutateElement(a, function() {
                    e = a.scrollHeight
                }, function() {
                    d != e && a.removeAttribute("autoexpand")
                })
            })
        }

        function Ua(a) {
            var b = E(a),
                c = a.ownerDocument.defaultView,
                d = 0,
                e = 0,
                f = 0,
                g = ab(a);
            b.measureMutateElement(a, function() {
                var h = c.getComputedStyle(a) || B();
                e = a.scrollHeight;
                var k = parseInt(h.getPropertyValue("max-height"), 10);
                f = isNaN(k) ? Infinity : k;
                d = "content-box" == h.getPropertyValue("box-sizing") ? -parseInt(h.getPropertyValue("padding-top"), 10) + -parseInt(h.getPropertyValue("padding-bottom"), 10) : parseInt(h.getPropertyValue("border-top-width"), 10) + parseInt(h.getPropertyValue("border-bottom-width"), 10)
            }, function() {
                return g.then(function(h) {
                    a.classList.toggle("i-amphtml-textarea-max",
                        h + d > f);
                    if ("iAmphtmlHasExpanded" in a.dataset || e <= h) a.dataset.iAmphtmlHasExpanded = "", La(a, "height", h + d + "px")
                })
            })
        }

        function ab(a) {
            var b = a.ownerDocument,
                c = b.defaultView,
                d = b.body,
                e = E(a),
                f = a.cloneNode(!1);
            f.classList.add("i-amphtml-textarea-clone");
            var g = 0,
                h = 0,
                k = !1;
            return e.measureMutateElement(d, function() {
                var l = c.getComputedStyle(a) || B(),
                    G = parseInt(l.getPropertyValue("max-height"), 10);
                g = parseInt(l.getPropertyValue("width"), 10);
                k = isNaN(G) || a.scrollHeight < G
            }, function() {
                k && (a.scrollTop = 0);
                La(f, "width", g + "px");
                b.body.appendChild(f)
            }).then(function() {
                return e.measureMutateElement(d, function() {
                    h = f.scrollHeight
                }, function() {
                    f.parentElement &&
                        f.parentElement.removeChild(f)
                })
            }).then(function() {
                return h
            })
        };

        function J(a) {
            for (var b = a.elements, c = {}, d = /^(?:input|select|textarea)$/i, e = /^(?:submit|button|image|file|reset)$/i, f = /^(?:checkbox|radio)$/i, g = {}, h = 0; h < b.length; g = {
                    G: g.G
                }, h++) {
                var k = b[h],
                    l = k,
                    G = l.checked;
                g.G = l.name;
                var Zb = l.multiple,
                    $b = l.options,
                    ac = l.tagName,
                    $a = l.type;
                l = l.value;
                !g.G || cb(k) || !d.test(ac) || e.test($a) || f.test($a) && !G || (void 0 === c[g.G] && (c[g.G] = []), Zb ? D($b, function(aa) {
                    return function(bb) {
                        bb.selected && c[aa.G].push(bb.value)
                    }
                }(g)) : c[g.G].push(l))
            }
            var P = db(a);
            P && P.name && (a = P.name, void 0 ===
                c[a] && (c[a] = []), c[P.name].push(P.value));
            Object.keys(c).forEach(function(aa) {
                0 == c[aa].length && delete c[aa]
            });
            return c
        }

        function db(a) {
            var b = a.elements,
                c = b.length,
                d = a.ownerDocument.activeElement,
                e = null;
            for (a = 0; a < c; a++) {
                var f = b[a],
                    g = f.type;
                if ("BUTTON" == f.tagName || "submit" == g)
                    if (e || (e = f), d == f) return d
            }
            return e
        }

        function cb(a) {
            if (a.disabled) return !0;
            a = Ia(a);
            for (var b = 0; b < a.length; b++)
                if (a[b].disabled) return !0;
            return !1
        }

        function eb(a) {
            switch (a.type) {
                case "select-multiple":
                case "select-one":
                    a = a.options;
                    for (var b = 0; b < a.length; b++)
                        if (a[b].selected !== a[b].defaultSelected) return !1;
                    break;
                case "checkbox":
                case "radio":
                    return a.checked === a.defaultChecked;
                default:
                    return a.value === a.defaultValue
            }
            return !0
        };

        function fb(a, b) {
            return a.hasAttribute("verify-xhr") ? new gb(a, b) : new hb(a)
        }

        function K(a) {
            this.h = a
        }
        K.prototype.onCommit = function() {
            ib(this);
            a: {
                var a = this.h.elements;
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    if (!c.disabled && !eb(c)) {
                        a = !0;
                        break a
                    }
                }
                a = !1
            }
            return a ? this.Ba() : Promise.resolve({
                updatedElements: [],
                errors: []
            })
        };
        K.prototype.Ba = function() {
            return Promise.resolve({
                updatedElements: [],
                errors: []
            })
        };

        function ib(a) {
            (a = a.h.elements) && D(a, function(b) {
                b.setCustomValidity("")
            })
        }

        function hb() {
            K.apply(this, arguments)
        }
        n(hb, K);

        function gb(a, b) {
            this.h = a;
            this.ca = b;
            this.Y = null;
            this.xa = []
        }
        n(gb, K);
        gb.prototype.Ba = function() {
            var a = this,
                b = this.ca().then(function() {
                    return []
                }, function(c) {
                    return jb(c)
                });
            return kb(this, b).then(function(c) {
                return lb(a, c)
            })
        };

        function kb(a, b) {
            if (!a.Y) {
                a.Y = new va;
                var c = function() {
                    return a.Y = null
                };
                a.Y.then(c, c)
            }
            return a.Y.add(b)
        }

        function lb(a, b) {
            var c = [],
                d = a.xa;
            a.xa = b;
            for (var e = 0; e < b.length; e++) {
                var f = b[e],
                    g = t().assertString(f.name, "Verification errors must have a name property");
                f = t().assertString(f.message, "Verification errors must have a message property");
                g = t().assertElement(a.h.querySelector('[name="' + g + '"]'), "Verification error name property must match a field name");
                g.checkValidity() && (g.setCustomValidity(f), c.push(g))
            }
            var h = d.filter(function(k) {
                return b.every(function(l) {
                    return k.name !== l.name
                })
            }).map(function(k) {
                return a.h.querySelector('[name="' +
                    k.name + '"]')
            });
            return {
                updatedElements: c.concat(h),
                errors: b
            }
        }

        function jb(a) {
            return (a = a.response) ? a.json().then(function(b) {
                return b.verifyErrors || []
            }, function() {
                return []
            }) : Promise.resolve([])
        };

        function mb(a, b) {
            var c = v(a, "platform");
            return c.isIos() && 11 == c.getMajorVersion() ? new nb(b) : FormData.prototype.entries && FormData.prototype.delete ? new L(b) : new M(b)
        }

        function M(a) {
            this.D = a ? J(a) : B()
        }
        M.prototype.append = function(a, b) {
            var c = String(a);
            this.D[c] = this.D[c] || [];
            this.D[c].push(String(b))
        };
        M.prototype.delete = function(a) {
            delete this.D[a]
        };
        M.prototype.entries = function() {
            var a = this,
                b = [];
            Object.keys(this.D).forEach(function(d) {
                a.D[d].forEach(function(e) {
                    return b.push([d, e])
                })
            });
            var c = 0;
            return {
                next: function() {
                    return c < b.length ? {
                        value: b[c++],
                        done: !1
                    } : {
                        value: void 0,
                        done: !0
                    }
                }
            }
        };
        M.prototype.getFormData = function() {
            var a = this,
                b = new FormData;
            Object.keys(this.D).forEach(function(c) {
                a.D[c].forEach(function(d) {
                    return b.append(c, d)
                })
            });
            return b
        };

        function L(a) {
            this.F = new FormData(a);
            a && (a = db(a)) && a.name && this.append(a.name, a.value)
        }
        L.prototype.append = function(a, b) {
            this.F.append(a, b)
        };
        L.prototype.delete = function(a) {
            this.F.delete(a)
        };
        L.prototype.entries = function() {
            return this.F.entries()
        };
        L.prototype.getFormData = function() {
            return this.F
        };

        function nb(a) {
            L.call(this, a);
            var b = this;
            a && D(a.elements, function(c) {
                "file" == c.type && 0 == c.files.length && (b.F.delete(c.name), b.F.append(c.name, new Blob([]), ""))
            })
        }
        n(nb, L);
        nb.prototype.append = function(a, b, c) {
            b && "object" == typeof b && "" == b.name && 0 == b.size ? this.F.append(a, new Blob([]), c || "") : this.F.append(a, b)
        };
        var ob = {
            INPUT: !0,
            SELECT: !0,
            TEXTAREA: !0
        };

        function pb(a, b) {
            this.h = a;
            this.j = b;
            this.S = 0;
            this.L = B();
            this.pa = null;
            this.Da = this.ea = !1;
            this.na();
            for (a = 0; a < this.h.elements.length; ++a) qb(this, this.h.elements[a]);
            N(this)
        }
        m = pb.prototype;
        m.onSubmitting = function() {
            this.ea = !0;
            N(this)
        };
        m.onSubmitError = function() {
            this.ea = !1;
            N(this)
        };
        m.onSubmitSuccess = function() {
            this.ea = !1;
            this.pa = mb(this.j, this.h).getFormData();
            this.L = B();
            this.S = 0;
            N(this)
        };

        function N(a) {
            var b = 0 < a.S && !a.ea;
            if (b !== a.Da) {
                a.h.classList.toggle("amp-form-dirty", b);
                var c = I(a.j, "amp:form-dirtiness-change", C({
                    isDirty: b
                }), {
                    bubbles: !0
                });
                a.h.dispatchEvent(c)
            }
            a.Da = b
        }
        m.na = function() {
            this.h.addEventListener("input", this.wa.bind(this));
            this.h.addEventListener("reset", this.Ka.bind(this));
            this.h.addEventListener("amp:form-value-change", this.wa.bind(this))
        };
        m.wa = function(a) {
            qb(this, a.target);
            N(this)
        };
        m.Ka = function() {
            this.L = B();
            this.S = 0;
            N(this)
        };

        function qb(a, b) {
            var c = b.hidden;
            if (ob[b.tagName] && b.name && !c && !cb(b)) {
                a: switch (b.tagName) {
                    case "INPUT":
                        c = "checkbox" == b.type || "radio" == b.type ? !b.checked : !b.value;
                        break a;
                    case "TEXTAREA":
                        c = !b.value;
                        break a;
                    case "SELECT":
                        c = !1;
                        break a;
                    default:
                        throw Error("isFieldEmpty: " + b.tagName + " is not a supported field element.");
                }(c = c || eb(b)) || (a.pa ? (c = b.value, c = a.pa.get(b.name) === c) : c = !1);c ? (b = b.name, a.L[b] && (a.L[b] = !1, --a.S)) : (b = b.name, a.L[b] || (a.L[b] = !0, ++a.S))
            }
        };

        function rb() {
            this.o = null
        }
        m = rb.prototype;
        m.add = function(a) {
            var b = this;
            this.o || (this.o = []);
            this.o.push(a);
            return function() {
                b.remove(a)
            }
        };
        m.remove = function(a) {
            this.o && (a = this.o.indexOf(a), -1 < a && this.o.splice(a, 1))
        };
        m.removeAll = function() {
            this.o && (this.o.length = 0)
        };
        m.fire = function(a) {
            if (this.o)
                for (var b = this.o, c = 0; c < b.length; c++)(0, b[c])(a)
        };
        m.getHandlerCount = function() {
            return this.o ? this.o.length : 0
        };

        function sb() {
            this.va = new rb
        }
        sb.prototype.beforeSubmit = function(a) {
            return this.va.add(a)
        };
        sb.prototype.fire = function(a) {
            this.va.fire(a)
        };

        function tb() {
            this.Ha = 100;
            this.ha = this.oa = 0;
            this.aa = Object.create(null)
        }
        tb.prototype.has = function(a) {
            return !!this.aa[a]
        };
        tb.prototype.get = function(a) {
            var b = this.aa[a];
            if (b) return b.access = ++this.ha, b.payload
        };
        tb.prototype.put = function(a, b) {
            this.has(a) || this.oa++;
            this.aa[a] = {
                payload: b,
                access: this.ha
            };
            if (!(this.oa <= this.Ha)) {
                sa().warn("lru-cache", "Trimming LRU cache");
                a = this.aa;
                var c = this.ha + 1,
                    d;
                for (d in a) {
                    var e = a[d].access;
                    if (e < c) {
                        c = e;
                        var f = d
                    }
                }
                void 0 !== f && (delete a[f], this.oa--)
            }
        };
        var ub = C({
                c: !0,
                v: !0,
                a: !0,
                ad: !0
            }),
            vb, wb, xb = /[?&]amp_js[^&]*/,
            yb = /[?&]amp_gsa[^&]*/,
            zb = /[?&]amp_r[^&]*/,
            Ab = /[?&]amp_kit[^&]*/,
            Bb = /[?&]usqp[^&]*/;

        function O(a) {
            vb || (vb = self.document.createElement("a"), wb = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new tb));
            var b = wb,
                c = vb;
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
                    if (Array.isArray(d))
                        for (var e = 0; e < d.length; e++) {
                            var f = d[e];
                            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(f))
                        } else e = d, b.push(encodeURIComponent(c) + "=" + encodeURIComponent(e))
            }
            return b.join("&")
        }

        function Eb(a) {
            "string" == typeof a && (a = O(a));
            return ra.cdnProxyRegex.test(a.origin)
        };
        var Fb = ["GET", "POST"];

        function Q(a, b) {
            this.M = a;
            this.B = b;
            this.Oa = "amp-form"
        }
        Q.prototype.isEnabled = function() {
            var a = this.M.getAmpDoc();
            return a.isSingleDoc() && a.getRootNode().documentElement.hasAttribute("allow-viewer-render-template") ? this.M.hasCapability("viewerRenderTemplate") : !1
        };
        Q.prototype.assertTrustedViewer = function(a) {
            return this.M.isTrustedViewer().then(function(b) {
                u(b, "Refused to attempt SSR in untrusted viewer: ", a)
            })
        };
        Q.prototype.ssr = function(a, b, c, d) {
            var e = this;
            c = void 0 === c ? null : c;
            d = void 0 === d ? {} : d;
            var f = c,
                g = d,
                h;
            f || (h = this.B.maybeFindTemplate(a));
            return this.assertTrustedViewer(a).then(function() {
                return e.M.sendMessageAwaitResponse("viewerRenderTemplate", Gb(e, b, h, f, g))
            })
        };
        Q.prototype.applySsrOrCsrTemplate = function(a, b) {
            var c = this;
            if (this.isEnabled()) {
                u("string" === typeof b.html, "Server side html response must be defined");
                var d = this.assertTrustedViewer(a).then(function() {
                    return c.B.findAndSetHtmlForTemplate(a, b.html)
                })
            } else d = Array.isArray(b) ? this.B.findAndRenderTemplateArray(a, b) : this.B.findAndRenderTemplate(a, b);
            return d
        };

        function Gb(a, b, c, d, e) {
            var f = e = void 0 === e ? {} : e,
                g = C({
                    type: a.Oa
                }),
                h = d && d.successTemplate ? d.successTemplate : c;
            h && (g.successTemplate = {
                type: "amp-mustache",
                payload: h.innerHTML
            });
            var k = d && d.errorTemplate ? d.errorTemplate : null;
            k && (g.errorTemplate = {
                type: "amp-mustache",
                payload: k.innerHTML
            });
            f && Object.assign(g, f);
            a = b.xhrUrl;
            c = b.fetchOpt;
            b = Object.assign({}, c);
            if ((d = c.body) && "function" == typeof d.getFormData) {
                c = c.body;
                b.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
                c = c.entries();
                d = [];
                for (e = c.next(); !e.done; e =
                    c.next()) d.push(e.value);
                b.body = d
            }
            return C({
                originalRequest: {
                    input: a,
                    init: b
                },
                ampComponent: g
            })
        };

        function Hb(a, b) {
            this.ma = b;
            this.qa = x(a, "viewport");
            this.Ca = v(a.win, "vsync");
            this.ka = null;
            this.ja = "";
            this.fa = !1;
            this.K = a.win.document.createElement("div");
            Ma(this.K, !1);
            this.K.classList.add("i-amphtml-validation-bubble");
            this.K.__BUBBLE_OBJ = this;
            a.getBody().appendChild(this.K)
        }
        Hb.prototype.isActiveOn = function(a) {
            return this.fa && a == this.ka
        };
        Hb.prototype.hide = function() {
            this.fa && (this.fa = !1, this.ka = null, this.ja = "", this.Ca.run({
                measure: void 0,
                mutate: Ib
            }, {
                bubbleElement: this.K
            }))
        };
        Hb.prototype.show = function(a, b) {
            this.isActiveOn(a) && b == this.ja || (this.fa = !0, this.ka = a, this.ja = b, this.Ca.run({
                measure: Jb,
                mutate: Kb
            }, {
                message: b,
                targetElement: a,
                bubbleElement: this.K,
                viewport: this.qa,
                id: this.ma
            }))
        };

        function Ib(a) {
            a.bubbleElement.removeAttribute("aria-alert");
            a.bubbleElement.removeAttribute("role");
            for (var b = a.bubbleElement; b.firstChild;) b.removeChild(b.firstChild);
            Ma(a.bubbleElement, !1)
        }

        function Jb(a) {
            a.targetRect = a.viewport.getLayoutRect(a.targetElement)
        }

        function Kb(a) {
            for (var b = a.bubbleElement; b.firstChild;) b.removeChild(b.firstChild);
            var c = a.bubbleElement.ownerDocument.createElement("div");
            c.id = "bubble-message-" + a.id;
            c.textContent = a.message;
            a.bubbleElement.setAttribute("aria-labeledby", c.id);
            a.bubbleElement.setAttribute("role", "alert");
            a.bubbleElement.setAttribute("aria-live", "assertive");
            a.bubbleElement.appendChild(c);
            Ma(a.bubbleElement, !0);
            b = a.bubbleElement;
            a = {
                top: a.targetRect.top - 10 + "px",
                left: a.targetRect.left + a.targetRect.width / 2 + "px"
            };
            for (var d in a) La(b,
                d, a[d])
        };
        var Lb, Mb, Nb = 0;

        function R(a) {
            this.form = a;
            this.ampdoc = y(a);
            this.mutator = E(a);
            this.root = this.ampdoc.getRootNode();
            this.da = null
        }
        m = R.prototype;
        m.report = function() {};
        m.onBlur = function() {};
        m.onInput = function() {};
        m.inputs = function() {
            return this.form.querySelectorAll("input,select,textarea")
        };
        m.checkInputValidity = function(a) {
            if ("TEXTAREA" === a.tagName && a.hasAttribute("pattern") && (a.checkValidity() || "Please match the requested format." === a.validationMessage)) {
                var b = a.getAttribute("pattern"),
                    c = (new RegExp("^" + b + "$", "m")).test(a.value);
                a.setCustomValidity(c ? "" : "Please match the requested format.")
            }
            return a.checkValidity()
        };
        m.checkFormValidity = function(a) {
            Ob(this, a);
            return a.checkValidity()
        };
        m.reportFormValidity = function(a) {
            Ob(this, a);
            return a.reportValidity()
        };

        function Ob(a, b) {
            D(b.elements, function(c) {
                "TEXTAREA" == c.tagName && a.checkInputValidity(c)
            })
        }
        m.fireValidityEventIfNecessary = function() {
            var a = this.da;
            this.da = this.checkFormValidity(this.form);
            if (a !== this.da) {
                var b = I(this.form.ownerDocument.defaultView, this.da ? "valid" : "invalid", null, {
                    bubbles: !0
                });
                this.form.dispatchEvent(b)
            }
        };

        function Pb() {
            R.apply(this, arguments)
        }
        n(Pb, R);
        Pb.prototype.report = function() {
            this.reportFormValidity(this.form);
            this.fireValidityEventIfNecessary()
        };

        function S(a) {
            R.call(this, a);
            var b = "i-amphtml-validation-bubble-" + Nb++;
            this.W = new Hb(this.ampdoc, b)
        }
        n(S, R);
        S.prototype.report = function() {
            for (var a = this.inputs(), b = 0; b < a.length; b++)
                if (!this.checkInputValidity(a[b])) {
                    a[b].focus();
                    this.W.show(a[b], a[b].validationMessage);
                    break
                }
            this.fireValidityEventIfNecessary()
        };
        S.prototype.onBlur = function(a) {
            "submit" != a.target.type && this.W.hide()
        };
        S.prototype.onInput = function(a) {
            a = a.target;
            this.W.isActiveOn(a) && (this.checkInputValidity(a) ? (a.removeAttribute("aria-invalid"), this.W.hide()) : (a.setAttribute("aria-invalid", "true"), this.W.show(a, a.validationMessage)))
        };

        function T(a) {
            R.call(this, a);
            this.Ra = this.form.id ? this.form.id : String(Date.now() + Math.floor(100 * Math.random()));
            this.Ga = 0
        }
        n(T, R);
        m = T.prototype;
        m.reportInput = function(a) {
            var b = Qb(a);
            b && this.showValidationFor(a, b)
        };
        m.hideAllValidations = function() {
            for (var a = this.inputs(), b = 0; b < a.length; b++) this.hideValidationFor(a[b])
        };
        m.getValidationFor = function(a, b) {
            if (!a.id) return null;
            var c = a.validationMessage;
            c = "TEXTAREA" === a.tagName && "customError" === b && "Please match the requested format." === c ? "patternMismatch" : b;
            var d = "__AMP_VALIDATION_" + c;
            d in a || (a[d] = this.root.querySelector("[visible-when-invalid=" + c + "][validation-for=" + (a.id + "]")));
            return a[d]
        };
        m.showValidationFor = function(a, b) {
            var c = this.getValidationFor(a, b);
            if (c) {
                c.textContent.trim() || (c.textContent = a.validationMessage);
                a.__AMP_VISIBLE_VALIDATION = c;
                var d = c.getAttribute("id");
                d || (d = "i-amphtml-aria-desc-" + this.Ra + "-" + this.Ga++, c.setAttribute("id", d));
                a.setAttribute("aria-invalid", "true");
                a.setAttribute("aria-describedby", d);
                this.mutator.mutateElement(c, function() {
                    return c.classList.add("visible")
                })
            }
        };
        m.hideValidationFor = function(a) {
            var b = this.getVisibleValidationFor(a);
            b && (delete a.__AMP_VISIBLE_VALIDATION, a.removeAttribute("aria-invalid"), a.removeAttribute("aria-describedby"), this.mutator.mutateElement(b, function() {
                return b.classList.remove("visible")
            }))
        };
        m.getVisibleValidationFor = function(a) {
            return a.__AMP_VISIBLE_VALIDATION
        };
        m.shouldValidateOnInteraction = function() {
            throw Error("Not Implemented");
        };
        m.onInteraction = function(a) {
            a = a.target;
            var b = !!a.checkValidity && this.shouldValidateOnInteraction(a);
            this.hideValidationFor(a);
            b && !this.checkInputValidity(a) && this.reportInput(a)
        };
        m.onBlur = function(a) {
            this.onInteraction(a)
        };
        m.onInput = function(a) {
            this.onInteraction(a)
        };

        function Rb() {
            T.apply(this, arguments)
        }
        n(Rb, T);
        Rb.prototype.report = function() {
            this.hideAllValidations();
            for (var a = this.inputs(), b = 0; b < a.length; b++)
                if (!this.checkInputValidity(a[b])) {
                    this.reportInput(a[b]);
                    a[b].focus();
                    break
                }
            this.fireValidityEventIfNecessary()
        };
        Rb.prototype.shouldValidateOnInteraction = function(a) {
            return !!this.getVisibleValidationFor(a)
        };

        function U() {
            T.apply(this, arguments)
        }
        n(U, T);
        U.prototype.report = function() {
            this.hideAllValidations();
            for (var a = null, b = this.inputs(), c = 0; c < b.length; c++) this.checkInputValidity(b[c]) || (a = a || b[c], this.reportInput(b[c]));
            a && a.focus();
            this.fireValidityEventIfNecessary()
        };
        U.prototype.shouldValidateOnInteraction = function(a) {
            return !!this.getVisibleValidationFor(a)
        };

        function Sb() {
            T.apply(this, arguments)
        }
        n(Sb, T);
        Sb.prototype.shouldValidateOnInteraction = function() {
            return !0
        };
        Sb.prototype.onInteraction = function(a) {
            T.prototype.onInteraction.call(this, a);
            this.fireValidityEventIfNecessary()
        };

        function Tb() {
            U.apply(this, arguments)
        }
        n(Tb, U);
        Tb.prototype.shouldValidateOnInteraction = function() {
            return !0
        };
        Tb.prototype.onInteraction = function(a) {
            U.prototype.onInteraction.call(this, a);
            this.fireValidityEventIfNecessary()
        };

        function Ub(a) {
            switch (a.getAttribute("custom-validation-reporting")) {
                case "as-you-go":
                    return new Sb(a);
                case "show-all-on-submit":
                    return new U(a);
                case "interact-and-submit":
                    return new Tb(a);
                case "show-first-on-submit":
                    return new Rb(a)
            }
            a.ownerDocument && void 0 === Lb && (Lb = !!document.createElement("form").reportValidity);
            return Lb ? new Pb(a) : new S(a)
        }

        function Qb(a) {
            var b = ["badInput"];
            for (c in a.validity) b.includes(c) || b.push(c);
            var c = b.filter(function(d) {
                return !0 === a.validity[d]
            });
            return c.length ? c[0] : null
        };

        function Vb(a) {
            var b = a.ownerDocument.defaultView;
            b.FormProxy || (b.FormProxy = Wb(b));
            var c = new b.FormProxy(a);
            "action" in c || Xb(a, c);
            a.$p = c
        }

        function Wb(a) {
            function b(f) {
                this.h = f
            }
            var c = b.prototype,
                d = a.Object,
                e = d.prototype;
            [a.HTMLFormElement, a.EventTarget].reduce(function(f, g) {
                for (g = g && g.prototype; g && g !== e && !(0 <= f.indexOf(g));) f.push(g), g = d.getPrototypeOf(g);
                return f
            }, []).forEach(function(f) {
                var g = {},
                    h;
                for (h in f) {
                    g.A = a.Object.getOwnPropertyDescriptor(f, h);
                    if (g.A && h.toUpperCase() != h && !h.startsWith("on") && !e.hasOwnProperty.call(c, h))
                        if ("function" == typeof g.A.value) g.ga = g.A.value, c[h] = function(l) {
                            return function() {
                                return l.ga.apply(this.h,
                                    arguments)
                            }
                        }(g);
                        else {
                            var k = {};
                            g.A.get && (k.get = function(l) {
                                return function() {
                                    return l.A.get.call(this.h)
                                }
                            }(g));
                            g.A.set && (k.set = function(l) {
                                return function(G) {
                                    return l.A.set.call(this.h, G)
                                }
                            }(g));
                            a.Object.defineProperty(c, h, k)
                        }
                    g = {
                        ga: g.ga,
                        A: g.A
                    }
                }
            });
            return b
        }

        function Xb(a, b) {
            var c = a.ownerDocument.defaultView.HTMLFormElement.prototype.cloneNode.call(a, !1),
                d = {},
                e;
            for (e in c) {
                d.l = e;
                if (!(d.l in b || d.l.toUpperCase() == d.l || d.l.startsWith("on"))) {
                    d.m = Yb[d.l];
                    var f = a[d.l];
                    if (d.m)
                        if (d.m.access == V) {
                            d.O = void 0;
                            if (f && f.nodeType) {
                                var g = c = f,
                                    h = g.nextSibling;
                                g = g.parentNode;
                                g.removeChild(c);
                                try {
                                    d.O = a[d.l]
                                } finally {
                                    g.insertBefore(c, h)
                                }
                            } else d.O = f;
                            Object.defineProperty(b, d.l, {
                                get: function(k) {
                                    return function() {
                                        return k.O
                                    }
                                }(d)
                            })
                        } else d.m.access == W && (d.P = d.m.attr || d.l, Object.defineProperty(b,
                            d.l, {
                                get: function(k) {
                                    return function() {
                                        var l = b.getAttribute(k.P);
                                        return null == l && void 0 !== k.m.def ? k.m.def : k.m.type == bc ? "true" === l : k.m.type == cc ? null != l : k.m.type == dc ? (l = l || "", A(a, "url").parse(l).href) : l
                                    }
                                }(d),
                                set: function(k) {
                                    return function(l) {
                                        k.m.type == cc && (l = l ? "" : null);
                                        null != l ? b.setAttribute(k.P, l) : b.removeAttribute(k.P)
                                    }
                                }(d)
                            }));
                    else Object.defineProperty(b, d.l, {
                        get: function(k) {
                            return function() {
                                return a[k.l]
                            }
                        }(d),
                        set: function(k) {
                            return function(l) {
                                a[k.l] = l
                            }
                        }(d)
                    })
                }
                d = {
                    O: d.O,
                    P: d.P,
                    m: d.m,
                    l: d.l
                }
            }
        }
        var W = 1,
            V = 2,
            dc = 1,
            bc = 2,
            cc = 3,
            Yb = {
                acceptCharset: {
                    access: W,
                    attr: "accept-charset"
                },
                accessKey: {
                    access: W,
                    attr: "accesskey"
                },
                action: {
                    access: W,
                    type: dc
                },
                attributes: {
                    access: V
                },
                autocomplete: {
                    access: W,
                    def: "on"
                },
                children: {
                    access: V
                },
                dataset: {
                    access: V
                },
                dir: {
                    access: W
                },
                draggable: {
                    access: W,
                    type: bc,
                    def: !1
                },
                elements: {
                    access: V
                },
                encoding: {
                    access: V
                },
                enctype: {
                    access: W
                },
                hidden: {
                    access: W,
                    type: cc,
                    def: !1
                },
                id: {
                    access: W,
                    def: ""
                },
                lang: {
                    access: W
                },
                localName: {
                    access: V
                },
                method: {
                    access: W,
                    def: "get"
                },
                name: {
                    access: W
                },
                noValidate: {
                    access: W,
                    attr: "novalidate",
                    type: cc,
                    def: !1
                },
                prefix: {
                    access: V
                },
                spellcheck: {
                    access: W
                },
                style: {
                    access: V
                },
                target: {
                    access: W,
                    def: ""
                },
                title: {
                    access: W
                },
                translate: {
                    access: W
                }
            };

        function ec(a, b) {
            var c = a.getHeadNode(),
                d = fc(c, gc(c));
            if (b) {
                var e = a.getRootNode();
                if (hc(e, d)) b(d);
                else var f = setInterval(function() {
                    hc(e, d) && (clearInterval(f), b(d))
                }, 4)
            }
        }

        function fc(a, b) {
            var c = a.__AMP_CSS_SM;
            c || (c = a.__AMP_CSS_SM = B());
            var d = ic(a, c, "amp-extension=amp-form");
            if (d) return d.textContent !== b && (d.textContent = b), d;
            var e = (a.ownerDocument || a).createElement("style");
            e.textContent = b;
            var f = null;
            e.setAttribute("amp-extension", "amp-form");
            b = f = ic(a, c, "amp-runtime");
            (b = void 0 === b ? null : b) ? a.insertBefore(e, b.nextSibling): a.insertBefore(e, a.firstChild);
            return c["amp-extension=amp-form"] = e
        }

        function ic(a, b, c) {
            return b[c] ? b[c] : (a = a.querySelector("style[" + c + "]")) ? b[c] = a : null
        }

        function gc(a) {
            return (a = a.__AMP_CSS_TR) ? a('form.amp-form-submit-error [submit-error],form.amp-form-submit-success [submit-success],form.amp-form-submitting [submitting]{display:block}textarea[autoexpand]:not(.i-amphtml-textarea-max){overflow:hidden!important}.i-amphtml-textarea-clone{visibility:hidden;position:absolute;top:-9999px;left:-9999px;height:0!important}.i-amphtml-validation-bubble{transform:translate(-50%,-100%);background-color:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,0.5);max-width:200px;position:absolute;display:block;box-sizing:border-box;padding:10px;border-radius:5px}.i-amphtml-validation-bubble:after{content:" ";position:absolute;bottom:-8px;left:30px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}[visible-when-invalid]{color:red}\n/*# sourceURL=/extensions/amp-form/0.1/amp-form.css*/') : 'form.amp-form-submit-error [submit-error],form.amp-form-submit-success [submit-success],form.amp-form-submitting [submitting]{display:block}textarea[autoexpand]:not(.i-amphtml-textarea-max){overflow:hidden!important}.i-amphtml-textarea-clone{visibility:hidden;position:absolute;top:-9999px;left:-9999px;height:0!important}.i-amphtml-validation-bubble{transform:translate(-50%,-100%);background-color:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,0.5);max-width:200px;position:absolute;display:block;box-sizing:border-box;padding:10px;border-radius:5px}.i-amphtml-validation-bubble:after{content:" ";position:absolute;bottom:-8px;left:30px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}[visible-when-invalid]{color:red}\n/*# sourceURL=/extensions/amp-form/0.1/amp-form.css*/'
        }

        function hc(a, b) {
            var c = a.styleSheets;
            for (a = 0; a < c.length; a++)
                if (c[a].ownerNode == b) return !0;
            return !1
        };

        function jc(a) {
            var b = a.documentElement;
            return ["\u26a14email", "amp4email"].some(function(c) {
                return b.hasAttribute(c)
            })
        };

        function kc(a, b, c) {
            c = void 0 === c ? {} : c;
            var d = void 0 === d ? !0 : d;
            var e = c;
            Ja(a, "amp-analytics-instrumentation", "amp-analytics").then(function(f) {
                f && f.triggerEventForTarget(a, b, e, d)
            })
        };

        function lc(a, b) {
            try {
                return JSON.parse(a)
            } catch (c) {
                return b && b(c), null
            }
        };
        var mc = ["amp-selector"];

        function nc(a, b) {
            var c = this;
            try {
                Vb(a)
            } catch (f) {
                sa().error("amp-form", "form proxy failed to install", f)
            }
            a.__AMP_FORM = this;
            this.ma = b;
            this.T = a.ownerDocument;
            this.j = this.T.defaultView;
            this.Qa = v(this.j, "timer");
            this.Aa = A(a, "url-replace");
            this.la = null;
            this.h = a;
            this.Fa = y(this.h);
            this.B = v(this.j, "templates");
            this.ra = v(this.j, "xhr");
            this.R = A(this.h, "action");
            this.ua = E(this.h);
            this.M = x(this.h, "viewer");
            this.U = new Q(this.M, this.B);
            this.I = (this.h.getAttribute("method") || "GET").toUpperCase();
            this.Pa = this.h.getAttribute("target");
            this.N = oc(this, "action-xhr");
            this.Va = oc(this, "verify-xhr");
            this.Ia = pc(this);
            this.za = !this.h.hasAttribute("novalidate");
            this.h.setAttribute("novalidate", "");
            this.za || this.h.setAttribute("amp-novalidate", "");
            this.h.classList.add("i-amphtml-form");
            this.J = "initial";
            b = this.h.elements;
            for (var d = 0; d < b.length; d++) {
                var e = b[d].name;
                u("__amp_source_origin" != e && "__amp_form_verify" != e, "Illegal input name, %s found: %s", e, b[d])
            }
            this.ba = new pb(this.h, this.j);
            this.X = Ub(this.h);
            this.Sa = fb(this.h, function() {
                return qc(c)
            });
            this.R.addToAllowlist("FORM", ["clear", "submit"], ["email"]);
            this.R.installActionHandler(this.h, this.Ea.bind(this));
            this.na();
            rc(this);
            sc(this);
            this.sa = this.Ma = this.Ua = null;
            Aa(z(a), "form-submit-service").then(function(f) {
                c.sa = f
            });
            this.Ja = this.T && jc(this.T)
        }

        function oc(a, b) {
            var c = a.h.getAttribute(b);
            if (c) {
                var d = A(a.h, "url");
                d.assertHttpsUrl(c, a.h, b);
                u(!d.isProxyOrigin(c), "form %s should not be on AMP CDN: %s", b, a.h)
            }
            return c
        }

        function pc(a) {
            var b = a.h.getAttribute("enctype");
            if ("application/x-www-form-urlencoded" === b || "multipart/form-data" === b) return b;
            null !== b && t().warn("amp-form", "Unexpected enctype: " + b + ". Defaulting to 'multipart/form-data'.");
            return "multipart/form-data"
        }
        m = nc.prototype;
        m.getXssiPrefix = function() {
            return this.h.getAttribute("xssi-prefix")
        };
        m.requestForFormFetch = function(a, b, c, d) {
            var e = C({
                Accept: "application/json"
            });
            if ("GET" == b || "HEAD" == b) {
                tc(this);
                var f = J(this.h);
                d && d.forEach(function(l) {
                    return delete f[l]
                });
                c && Ga(f, c);
                var g = Cb(a, Db(f))
            } else {
                g = a;
                if ("application/x-www-form-urlencoded" === this.Ia) {
                    var h = Db(J(this.h));
                    e = C({
                        Accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded"
                    })
                } else h = mb(this.j, this.h);
                d && d.forEach(function(l) {
                    return h.delete(l)
                });
                for (var k in c) h.append(k, c[k])
            }
            return {
                xhrUrl: g,
                fetchOpt: C({
                    body: h,
                    method: b,
                    credentials: "include",
                    headers: e
                })
            }
        };
        m.setXhrAction = function(a) {
            this.N = a
        };
        m.Ea = function(a) {
            var b = this;
            if (!a.satisfiesTrust(2)) return null;
            if ("submit" == a.method) return uc(this).then(function() {
                return "submitting" != b.J && vc(b) ? wc(b, a.trust, null) : Promise.resolve(null)
            });
            "clear" === a.method && xc(this);
            return null
        };

        function uc(a) {
            if (a.la) return a.la;
            var b = a.h.querySelectorAll(mc.join(",")),
                c = oa(b).map(function(d) {
                    return d.whenBuilt()
                });
            return a.la = yc(a, c, 2E3)
        }
        m.na = function() {
            var a = this;
            this.Fa.whenNextVisible().then(function() {
                var b = a.h.querySelector("[autofocus]");
                if (b) try {
                    b.focus()
                } catch (c) {}
            });
            this.h.addEventListener("submit", this.ta.bind(this), !0);
            this.h.addEventListener("blur", function(b) {
                zc(b.target);
                a.X.onBlur(b)
            }, !0);
            this.h.addEventListener("amp:form-value-change", function(b) {
                zc(b.target);
                a.X.onInput(b)
            }, !0);
            this.U.isEnabled() || this.h.addEventListener("change", function(b) {
                a.Sa.onCommit().then(function(c) {
                    var d = c.errors;
                    c.updatedElements.forEach(zc);
                    a.X.onBlur(b);
                    "verifying" === a.J && (d.length ? (X(a, "verify-error"), Y(a, C({
                        verifyErrors: d
                    })).then(function() {
                        Ac(a, "verify-error", d, 2)
                    })) : X(a, "initial"))
                })
            });
            this.h.addEventListener("input", function(b) {
                zc(b.target);
                a.X.onInput(b)
            })
        };

        function rc(a) {
            Ja(a.h, "inputmask", "amp-inputmask").then(function(b) {
                b && b.install()
            })
        }

        function Bc(a, b) {
            Cc(a, "Form analytics not supported");
            var c = C({}),
                d = J(a.h),
                e;
            for (e in d) Object.prototype.hasOwnProperty.call(d, e) && (c["formFields[" + e + "]"] = d[e].join(","));
            c.formId = a.h.id;
            kc(a.h, b, c)
        }

        function xc(a) {
            a.h.reset();
            X(a, "initial");
            a.h.classList.remove("user-valid");
            a.h.classList.remove("user-invalid");
            var b = a.h.querySelectorAll(".user-valid, .user-invalid");
            D(b, function(d) {
                d.classList.remove("user-valid");
                d.classList.remove("user-invalid")
            });
            var c = a.h.querySelectorAll(".visible[validation-for]");
            D(c, function(d) {
                d.classList.remove("visible")
            });
            Dc(a.h)
        }
        m.ta = function(a) {
            if ("submitting" == this.J || !vc(this)) return a.stopImmediatePropagation(), a.preventDefault(), Promise.resolve(null);
            (this.N || "POST" == this.I) && a.preventDefault();
            return wc(this, 3, a)
        };

        function wc(a, b, c) {
            try {
                var d = {
                    form: a.h,
                    actionXhrMutator: a.setXhrAction.bind(a)
                };
                a.sa.fire(d)
            } catch (k) {
                sa().error("amp-form", "Form submit service failed: %s", k)
            }
            var e = Ec(a),
                f = a.h.getElementsByClassName("i-amphtml-async-input");
            a.ba.onSubmitting();
            if (!a.N && "GET" == a.I) {
                Cc(a, "Non-XHR GETs not supported.");
                tc(a);
                if (0 === f.length) {
                    for (d = 0; d < e.length; d++) a.Aa.expandInputValueSync(e[d]);
                    Fc(a, !c);
                    a.ba.onSubmitSuccess();
                    return p()
                }
                c && c.preventDefault()
            }
            X(a, "submitting");
            var g = [],
                h = [];
            h.push(Gc(a, e));
            D(f, function(k) {
                var l =
                    Hc(a, k);
                k.classList.contains("i-async-require-action") ? g.push(l) : h.push(l)
            });
            return Promise.all(g).then(function() {
                return yc(a, h, 1E4).then(function() {
                    if (a.N) var k = Ic(a, b);
                    else "POST" == a.I ? u(!1, "Only XHR based (via action-xhr attribute) submissions are supported for POST requests. %s", a.h) : "GET" == a.I && Fc(a, !0), k = p();
                    return k
                }, function(k) {
                    return Jc(a, k, b)
                })
            }, function(k) {
                return Jc(a, k, b)
            })
        }

        function Jc(a, b, c) {
            var d = {};
            b && b.message && (d.error = b.message);
            return Kc(a, b, d, c)
        }

        function Ec(a) {
            return a.h.querySelectorAll('[type="hidden"][data-amp-replace]')
        }

        function qc(a) {
            if ("submitting" === a.J) return p();
            X(a, "verifying");
            Ac(a, "verify", null, 3);
            return Gc(a, Ec(a)).then(function() {
                return Lc(a)
            })
        }

        function Ic(a, b) {
            if (a.U.isEnabled()) var c = Mc(a, b);
            else Nc(a, b), c = a.ca(a.N, a.I).then(function(d) {
                return Oc(a, d, b)
            }, function(d) {
                return Pc(a, d, b)
            });
            return c
        }

        function Mc(a, b) {
            var c = J(a.h);
            return Y(a, c).then(function() {
                return a.R.trigger(a.h, "submit", null, b)
            }).then(function() {
                var d = a.requestForFormFetch(a.N, a.I),
                    e = d.fetchOpt || {};
                var f = e.method;
                void 0 === f ? f = "GET" : (f = f.toUpperCase(), Fb.includes(f));
                e.method = f;
                e.headers = e.headers || C({});
                d.fetchOpt = e;
                f = d.xhrUrl;
                e = (e = d.fetchOpt) || {};
                var g = a.j;
                g = g.origin || O(g.location.href).origin;
                f = O(f).origin;
                g == f && (e.headers = e.headers || {}, e.headers["AMP-Same-Origin"] = "true");
                d.fetchOpt = e;
                f = a.j;
                e = d.xhrUrl;
                if (!1 !== d.fetchOpt.ampCors) {
                    g =
                        O(e);
                    g = ma(g.search);
                    u(!("__amp_source_origin" in g), "Source origin is not allowed in %s", e);
                    f = f.location.href;
                    "string" == typeof f && (f = O(f));
                    if (Eb(f)) {
                        g = f.pathname.split("/");
                        u(ub[g[1]], "Unknown path prefix in url %s", f.href);
                        var h = g[2],
                            k = "s" == h ? "https://" + decodeURIComponent(g[3]) : "http://" + decodeURIComponent(h);
                        u(0 < k.indexOf("."), "Expected a . in origin %s", k);
                        g.splice(1, "s" == h ? 3 : 2);
                        g = k + g.join("/");
                        h = (h = f.search) && "?" != h ? (h = h.replace(xb, "").replace(yb, "").replace(zb, "").replace(Ab, "").replace(Bb, "").replace(/^[?&]/,
                            "")) ? "?" + h : "" : "";
                        f = g + h + (f.hash || "")
                    } else f = f.href;
                    f = O(f).origin;
                    f = encodeURIComponent("__amp_source_origin") + "=" + encodeURIComponent(f);
                    e = Cb(e, f, void 0)
                }
                d.xhrUrl = e;
                return a.U.ssr(a.h, d, Qc(a))
            }).then(function(d) {
                return Rc(a, d, b)
            }, function(d) {
                var e = {};
                d && d.message && (e.error = d.message);
                return Kc(a, d, e, b)
            })
        }

        function Qc(a) {
            var b, c = a.h.querySelector("[submit-success]");
            c && (b = a.B.maybeFindTemplate(c));
            var d, e = a.h.querySelector("[submit-error]");
            e && (d = a.B.maybeFindTemplate(e));
            return {
                successTemplate: b,
                errorTemplate: d
            }
        }

        function Rc(a, b, c) {
            var d = b.init,
                e = lc(b.body, function(f) {
                    return t().error("amp-form", "Failed to parse response JSON: %s", f)
                });
            return d && (d = d.status, 300 <= d) ? Kc(a, d, b, c, e) : Sc(a, b, c, e)
        }

        function Nc(a, b) {
            Bc(a, "amp-form-submit");
            var c = J(a.h);
            Y(a, c).then(function() {
                a.R.trigger(a.h, "submit", null, b)
            })
        }

        function Gc(a, b) {
            for (var c = [], d = 0; d < b.length; d++) c.push(a.Aa.expandInputValueAsync(b[d]));
            return yc(a, c, 100)
        }

        function Hc(a, b) {
            return b.getImpl().then(function(c) {
                return c.getValue()
            }).then(function(c) {
                var d = b.getAttribute("name");
                d = a.h.querySelector("input[name=" + String(d).replace(Ca, Da) + "]");
                if (!d) {
                    d = C({
                        name: b.getAttribute("name"),
                        hidden: "true"
                    });
                    var e = a.j.document.createElement("input"),
                        f;
                    for (f in d) e.setAttribute(f, d[f]);
                    d = e
                }
                d.setAttribute("value", c);
                a.h.appendChild(d)
            })
        }

        function Lc(a) {
            var b = oa(a.h.querySelectorAll("[" + "no-verify".replace(Ca, Da) + "]")).map(function(d) {
                    return d.name || d.id
                }),
                c = {};
            return a.ca(a.Va, a.I, (c.__amp_form_verify = !0, c), b)
        }
        m.ca = function(a, b, c, d) {
            Cc(this, "XHRs should be proxied.");
            a = this.requestForFormFetch(a, b, c, d);
            return this.ra.fetch(a.xhrUrl, a.fetchOpt)
        };

        function Oc(a, b, c) {
            return a.ra.xssiJson(b, a.getXssiPrefix()).then(function(d) {
                return Sc(a, d, c)
            }, function(d) {
                return t().error("amp-form", "Failed to parse response JSON: %s", d)
            }).then(function() {
                Bc(a, "amp-form-submit-success");
                Tc(a, b)
            })
        }

        function Sc(a, b, c, d) {
            X(a, "submit-success");
            return ua(function() {
                Y(a, b || {}).then(function() {
                    Ac(a, "submit-success", void 0 === d ? b : d, c - 1);
                    a.ba.onSubmitSuccess()
                })
            })
        }

        function Pc(a, b, c) {
            return (b && b.response ? a.ra.xssiJson(b.response, a.getXssiPrefix()).catch(function() {
                return null
            }) : Promise.resolve(null)).then(function(d) {
                Bc(a, "amp-form-submit-error");
                Kc(a, b, d, c);
                Tc(a, b.response)
            })
        }

        function Kc(a, b, c, d, e) {
            X(a, "submit-error");
            t().error("amp-form", "Form submission failed: %s", b);
            return ua(function() {
                Y(a, c).then(function() {
                    Ac(a, "submit-error", void 0 === e ? c : e, d - 1);
                    a.ba.onSubmitError()
                })
            })
        }

        function Fc(a, b) {
            Bc(a, "amp-form-submit");
            b && a.h.submit();
            X(a, "initial")
        }

        function Cc(a, b) {
            var c = a.U.isEnabled();
            u(!1 === c, "[amp-form]: viewerRenderTemplate | %s", b)
        }

        function tc(a) {
            var b = a.h.querySelectorAll("input[type=password],input[type=file]");
            u(0 == b.length, "input[type=password] or input[type=file] may only appear in form[method=post]")
        }

        function vc(a) {
            void 0 === Mb && (Mb = !!a.j.document.createElement("input").checkValidity);
            if (Mb) {
                var b = Uc(a.h);
                if (a.za) return a.X.report(), b
            }
            return !0
        }

        function Tc(a, b) {
            Cc(a, "Redirects not supported.");
            if (b && b.headers) {
                var c = b.headers.get("AMP-Redirect-To");
                if (c) {
                    u(!a.Ja, "Redirects not supported in AMP4Email.", a.h);
                    u("_blank" != a.Pa, "Redirecting to target=_blank using AMP-Redirect-To is currently not supported, use target=_top instead. %s", a.h);
                    try {
                        var d = A(a.h, "url");
                        d.assertAbsoluteHttpOrHttpsUrl(c);
                        d.assertHttpsUrl(c, "AMP-Redirect-To", "Url")
                    } catch (e) {
                        u(!1, "The `AMP-Redirect-To` header value must be an absolute URL starting with https://. Found %s",
                            c)
                    }
                    x(a.h, "navigation").navigateTo(a.j, c, "AMP-Redirect-To")
                }
            }
        }

        function Ac(a, b, c, d) {
            c = I(a.j, "amp-form." + b, C({
                response: c
            }));
            a.R.trigger(a.h, b, c, d)
        }

        function yc(a, b, c) {
            return Promise.race([Promise.all(b), a.Qa.promise(c)])
        }

        function X(a, b) {
            var c = a.J;
            a.h.classList.remove("amp-form-" + c);
            a.h.classList.add("amp-form-" + b);
            var d = a.h.querySelector("[" + c + "]");
            if (d) {
                /^[\w-]+$/.test("i-amphtml-rendered");
                if (void 0 !== Ea) var e = Ea;
                else {
                    try {
                        var f = d.ownerDocument,
                            g = f.createElement("div"),
                            h = f.createElement("div");
                        g.appendChild(h);
                        e = g.querySelector(":scope div") === h
                    } catch (k) {
                        e = !1
                    }
                    e = Ea = e
                }
                e ? d = d.querySelector("> [i-amphtml-rendered]".replace(/^|,/g, "$&:scope ")) : (d.classList.add("i-amphtml-scoped"), e = "> [i-amphtml-rendered]".replace(/^|,/g,
                    "$&.i-amphtml-scoped "), e = d.querySelectorAll(e), d.classList.remove("i-amphtml-scoped"), d = void 0 === e[0] ? null : e[0]);
                d && d.parentElement && d.parentElement.removeChild(d)
            }
            a.J = b
        }

        function Y(a, b) {
            Array.isArray(b) && (b = {}, t().warn("amp-form", "Unexpected data type: " + b + ". Expected non JSON array."));
            var c = a.h.querySelector("[" + a.J + "]"),
                d = p();
            if (c) {
                var e = "rendered-message-" + a.ma;
                c.setAttribute("role", "alert");
                c.setAttribute("aria-labeledby", e);
                c.setAttribute("aria-live", "assertive");
                a.B.hasTemplate(c) ? d = a.U.applySsrOrCsrTemplate(c, b).then(function(f) {
                    if (Array.isArray(f))
                        if (1 === f.length) var g = f[0];
                        else g = document.createElement("div"), f.forEach(function(h) {
                            return g.appendChild(h)
                        });
                    else g = f;
                    g.id = e;
                    g.setAttribute("i-amphtml-rendered", "");
                    return a.ua.mutateElement(c, function() {
                        c.appendChild(g);
                        var h = I(a.j, "amp:dom-update", null, {
                            bubbles: !0
                        });
                        c.dispatchEvent(h)
                    })
                }) : a.ua.mutateElement(c, function() {})
            }
            return d
        }

        function sc(a) {
            if (!Eb(a.j.location) && a.h.hasAttribute("data-initialize-from-url")) {
                var b = ["SELECT", "TEXTAREA"],
                    c = "color date datetime-local email hidden month number range search tel text time url week".split(" "),
                    d = ["checkbox", "radio"],
                    e = function(g, h) {
                        if (!g.hasAttribute("data-amp-replace") && g.hasAttribute("data-allow-initialization")) {
                            h = f[h] || "";
                            var k = g.getAttribute("type") || "text",
                                l = g.tagName;
                            "INPUT" === l ? c.includes(k.toLocaleLowerCase()) ? g.value !== h && (g.value = h) : d.includes(k) && (h = g.value === h, g.checked !==
                                h && (g.checked = h)) : b.includes(l) && g.value !== h && (g.value = h)
                        }
                    },
                    f = ma(a.j.location.search);
                Object.keys(f).forEach(function(g) {
                    var h = a.h.elements[g];
                    h && (h.nodeType === Node.ELEMENT_NODE ? e(h, g) : h.length && D(h, function(k) {
                        return e(k, g)
                    }))
                })
            }
        }
        m.Wa = function() {
            return this.Ma
        };
        m.Ya = function() {
            return this.Ua
        };

        function Uc(a) {
            var b = a.querySelectorAll("input,select,textarea,fieldset");
            D(b, function(c) {
                return Z(c)
            });
            return Z(a)
        }

        function Dc(a) {
            var b = document.createElement("input"),
                c = {},
                d;
            for (d in b.validity) {
                c.$ = d;
                var e = a.querySelectorAll("." + String(c.$).replace(Ca, Da));
                D(e, function(f) {
                    return function(g) {
                        g.classList.remove(f.$)
                    }
                }(c));
                c = {
                    $: c.$
                }
            }
        }

        function Z(a, b) {
            var c = b = void 0 === b ? !1 : b;
            if (!a.checkValidity) return !0;
            var d = !1;
            var e = a.classList.contains("user-valid") ? "valid" : a.classList.contains("user-invalid") ? "invalid" : "none";
            var f = a.checkValidity();
            "valid" != e && f ? (a.classList.add("user-valid"), a.classList.remove("user-invalid"), d = "invalid" == e) : "invalid" == e || f || (a.classList.add("user-invalid"), a.classList.remove("user-valid"), d = !0);
            if (a.validity)
                for (var g in a.validity) a.classList.toggle(g, a.validity[g]);
            if (c && d) {
                e = Ia(a);
                for (g = 0; g < e.length; g++) Z(e[g]);
                a.form && Z(a.form)
            }
            return f
        }

        function zc(a) {
            Z(a, !0)
        }

        function Vc(a) {
            this.Ta = Wc(a).then(function() {
                return Xc(a)
            })
        }
        Vc.prototype.whenInitialized = function() {
            return this.Ta
        };

        function Wc(a) {
            var b = new ta;
            ec(a, b.resolve);
            return b.promise
        }

        function Xc(a) {
            return a.whenReady().then(function() {
                var b = a.getRootNode();
                Yc(b.querySelectorAll("form"));
                Ya(a);
                Zc(b);
                $c(b)
            })
        }

        function Yc(a) {
            a && D(a, function(b, c) {
                b.__AMP_FORM || new nc(b, "amp-form-" + c)
            })
        }

        function Zc(a) {
            a.addEventListener("amp:dom-update", function() {
                Yc(a.querySelectorAll("form"))
            })
        }

        function $c(a) {
            a.addEventListener("keydown", function(b) {
                if (!b.defaultPrevented && "Enter" == b.key && (b.ctrlKey || b.metaKey) && "TEXTAREA" === b.target.tagName) {
                    var c = b.target.form,
                        d = c ? c.__AMP_FORM || null : null;
                    d && (d.ta(b), b.preventDefault())
                }
            })
        }(function(a) {
            a.registerServiceForDoc("form-submit-service", sb);
            a.registerServiceForDoc("amp-form", Vc)
        })(self.AMP);
    })
});

//# sourceMappingURL=amp-form-0.1.js.map