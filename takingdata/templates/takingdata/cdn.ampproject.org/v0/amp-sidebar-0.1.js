(self.AMP = self.AMP || []).push({
    n: "amp-sidebar",
    v: "2011252111003",
    f: (function(AMP, _) {
        'use strict';
        var h, aa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        };

        function ba(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return
            }(function() {
                throw Error("Cannot find global object");
            })()
        }
        ba(this);
        "function" === typeof Symbol && Symbol("x");
        var m;
        if ("function" == typeof Object.setPrototypeOf) m = Object.setPrototypeOf;
        else {
            var n;
            a: {
                var ca = {
                        a: !0
                    },
                    p = {};
                try {
                    p.__proto__ = ca;
                    n = p.a;
                    break a
                } catch (a) {}
                n = !1
            }
            m = n ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        var q = m;

        function r(a, b) {
            a.prototype = aa(b.prototype);
            a.prototype.constructor = a;
            if (q) q(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Va = b.prototype
        };

        function t(a, b) {
            var c = b = void 0 === b ? "" : b;
            try {
                return decodeURIComponent(a)
            } catch (d) {
                return c
            }
        };
        var da = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

        function u(a) {
            return a ? Array.prototype.slice.call(a) : []
        };
        var v = self.AMP_CONFIG || {},
            ea = ("string" == typeof v.cdnProxyRegex ? new RegExp(v.cdnProxyRegex) : v.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function fa(a) {
            if (self.document && self.document.head && (!self.location || !ea.test(self.location.origin))) {
                var b = self.document.head.querySelector('meta[name="' + a + '"]');
                b && b.getAttribute("content")
            }
        }
        v.cdnUrl || fa("runtime-host");
        v.geoApiUrl || fa("amp-geo-api");
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var w = self.__AMP_LOG;

        function x() {
            if (!w.user) throw Error("failed to call initLogConstructor");
            return w.user
        };

        function z() {
            this.l = null
        }
        h = z.prototype;
        h.add = function(a) {
            var b = this;
            this.l || (this.l = []);
            this.l.push(a);
            return function() {
                b.remove(a)
            }
        };
        h.remove = function(a) {
            this.l && (a = this.l.indexOf(a), -1 < a && this.l.splice(a, 1))
        };
        h.removeAll = function() {
            this.l && (this.l.length = 0)
        };
        h.fire = function(a) {
            if (this.l)
                for (var b = this.l, c = 0; c < b.length; c++)(0, b[c])(a)
        };
        h.getHandlerCount = function() {
            return this.l ? this.l.length : 0
        };

        function A(a, b) {
            a = a.__AMP_TOP || (a.__AMP_TOP = a);
            return B(a, b)
        }

        function C(a, b) {
            var c = D(a);
            c = ha(c);
            return B(c, b)
        }

        function ia(a, b) {
            a = D(a);
            a = ha(a);
            return ja(a, b) ? B(a, b) : null
        }

        function D(a) {
            return a.nodeType ? A((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function ha(a) {
            a = D(a);
            return a.isSingleDoc() ? a.win : a
        }

        function B(a, b) {
            ja(a, b);
            var c = a.__AMP_SERVICES;
            c || (c = a.__AMP_SERVICES = {});
            a = c[b];
            a.obj || (a.obj = new a.ctor(a.context), a.ctor = null, a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function ja(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor && !a.obj)
        };
        var ka;
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        var E;

        function la(a) {
            return ":not([toolbar]) [autoscroll]".replace(/^|,/g, "$&" + a + " ")
        };

        function ma(a) {
            if (void 0 === a.isConnected) {
                do
                    if (a = oa(a), a.host) a = a.host;
                    else break; while (1)
            }
        }

        function oa(a) {
            if (Node.prototype.getRootNode) return a.getRootNode() || a;
            for (; a.parentNode && (!a || "I-AMPHTML-SHADOW-ROOT" != a.tagName && (11 != a.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(a))); a = a.parentNode);
            return a
        }

        function pa(a, b) {
            for (; a && void 0 !== a; a = a.parentElement)
                if (b(a)) return a;
            return null
        }

        function F(a, b) {
            return a.closest ? a.closest(b) : pa(a, function(c) {
                var d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
                return d ? d.call(c, b) : !1
            })
        }

        function qa(a) {
            return "rtl" == (a.body.getAttribute("dir") || a.documentElement.getAttribute("dir") || "ltr")
        };

        function G(a, b) {
            var c = this;
            this.Ea = A(a, "timer");
            this.Ka = b;
            this.Ia = 0;
            this.T = -1;
            this.ga = 0;
            this.ma = !1;
            this.Ha = function() {
                c.aa()
            }
        }
        G.prototype.isPending = function() {
            return -1 != this.T
        };
        G.prototype.schedule = function(a) {
            var b = a || this.Ia;
            this.ma && 10 > b && (b = 10);
            var c = Date.now() + b;
            return !this.isPending() || -10 > c - this.ga ? (this.cancel(), this.ga = c, this.T = this.Ea.delay(this.Ha, b), !0) : !1
        };
        G.prototype.aa = function() {
            this.T = -1;
            this.ga = 0;
            this.ma = !0;
            this.Ka();
            this.ma = !1
        };
        G.prototype.cancel = function() {
            this.isPending() && (this.Ea.cancel(this.T), this.T = -1)
        };

        function ra(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b(a[c], c, a)) return c;
            return -1
        };
        var H;

        function sa(a) {
            if (void 0 !== H) return H;
            H = !1;
            try {
                var b = {
                    get passive() {
                        H = !0;
                        return !1
                    }
                };
                a.addEventListener("test-options", null, b);
                a.removeEventListener("test-options", null, b)
            } catch (c) {}
            return H
        };

        function ta(a, b, c, d) {
            this.type = a;
            this.data = b;
            this.time = c;
            this.event = d
        }

        function ua(a, b, c) {
            this.o = a;
            this.c = [];
            this.L = [];
            this.m = [];
            this.h = [];
            this.j = null;
            this.Ra = b;
            this.Sa = c;
            this.ca = !1;
            this.aa = new G(a.ownerDocument.defaultView, this.ya.bind(this));
            this.Ca = new z;
            this.S = Object.create(null);
            this.wa = this.Pa.bind(this);
            this.ua = this.Na.bind(this);
            this.va = this.Oa.bind(this);
            this.ta = this.Ma.bind(this);
            var d = sa(a.ownerDocument.defaultView);
            this.o.addEventListener("touchstart", this.wa, d ? {
                passive: !0
            } : !1);
            this.o.addEventListener("touchend", this.ua);
            this.o.addEventListener("touchmove",
                this.va, d ? {
                    passive: !0
                } : !1);
            this.o.addEventListener("touchcancel", this.ta);
            this.ia = !1
        }

        function va(a) {
            var b = !1,
                c = !0;
            b = void 0 === b ? !1 : b;
            c = void 0 === c ? !1 : c;
            var d = b,
                e = c,
                f = a.__AMP_Gestures;
            f || (f = new ua(a, d, e), a.__AMP_Gestures = f);
            return f
        }
        h = ua.prototype;
        h.cleanup = function() {
            this.o.removeEventListener("touchstart", this.wa);
            this.o.removeEventListener("touchend", this.ua);
            this.o.removeEventListener("touchmove", this.va);
            this.o.removeEventListener("touchcancel", this.ta);
            delete this.o.__AMP_Gestures;
            this.aa.cancel()
        };
        h.onGesture = function(a, b) {
            var c = new a(this),
                d = c.getType(),
                e = this.S[d];
            e || (this.c.push(c), e = new z, this.S[d] = e);
            return e.add(b)
        };
        h.removeGesture = function(a) {
            var b = (new a(this)).getType();
            if (a = this.S[b]) {
                a.removeAll();
                a = ra(this.c, function(c) {
                    return c.getType() == b
                });
                if (0 > a) return !1;
                this.c.splice(a, 1);
                this.m.splice(a, 1);
                this.h.splice(a, 1);
                this.L.splice(a, 1);
                delete this.S[b];
                return !0
            }
            return !1
        };
        h.onPointerDown = function(a) {
            return this.Ca.add(a)
        };
        h.Pa = function(a) {
            var b = Date.now();
            this.ca = !1;
            this.Ca.fire(a);
            for (var c = 0; c < this.c.length; c++)
                if (!this.m[c] && (this.h[c] && this.h[c] < b && I(this, c), this.c[c].onTouchStart(a))) {
                    var d = c;
                    this.L[d] = !0;
                    this.h[d] = 0
                }
            J(this, a)
        };
        h.Oa = function(a) {
            for (var b = Date.now(), c = 0; c < this.c.length; c++) this.L[c] && (this.h[c] && this.h[c] < b ? I(this, c) : this.c[c].onTouchMove(a) || I(this, c));
            J(this, a)
        };
        h.Na = function(a) {
            for (var b = Date.now(), c = 0; c < this.c.length; c++)
                if (this.L[c])
                    if (this.h[c] && this.h[c] < b) I(this, c);
                    else {
                        this.c[c].onTouchEnd(a);
                        var d = !this.h[c],
                            e = this.h[c] < b;
                        this.j != this.c[c] && (d || e) && I(this, c)
                    }
            J(this, a)
        };
        h.Ma = function(a) {
            for (var b = 0; b < this.c.length; b++) {
                var c = b;
                this.m[c] = 0;
                I(this, c)
            }
            J(this, a)
        };

        function J(a, b) {
            var c = !!a.j || a.ca;
            a.ca = !1;
            if (!c)
                for (var d = Date.now(), e = 0; e < a.c.length; e++)
                    if (a.m[e] || a.h[e] && a.h[e] >= d) {
                        c = !0;
                        break
                    }
            c ? (b.stopPropagation(), a.Ra || b.preventDefault()) : a.Sa && b.stopPropagation();
            a.ia && (a.ia = !1, a.ya())
        }
        h.ya = function() {
            for (var a = Date.now(), b = -1, c = 0; c < this.c.length; c++)
                if (!this.m[c]) this.h[c] && this.h[c] < a && I(this, c);
                else if (-1 == b || this.m[c] > this.m[b]) b = c;
            if (-1 != b) {
                var d = 0;
                for (c = 0; c < this.c.length; c++) !this.m[c] && this.L[c] && (d = Math.max(d, this.h[c] - a));
                if (2 > d) {
                    a = b;
                    c = this.c[a];
                    for (var e = 0; e < this.c.length; e++)
                        if (e != a) {
                            var f = e;
                            this.m[f] = 0;
                            I(this, f)
                        }
                    this.m[a] = 0;
                    this.h[a] = 0;
                    this.j = c;
                    c.acceptStart()
                } else this.aa.schedule(d)
            }
        };

        function I(a, b) {
            a.L[b] = !1;
            a.h[b] = 0;
            a.m[b] || a.c[b].acceptCancel()
        }

        function K(a, b) {
            this.Ua = a;
            this.Y = b
        }
        h = K.prototype;
        h.getType = function() {
            return this.Ua
        };
        h.signalReady = function(a) {
            var b = this.Y;
            if (b.j) this.acceptCancel();
            else {
                for (var c = Date.now(), d = 0; d < b.c.length; d++) b.c[d] == this && (b.m[d] = c + a, b.h[d] = 0);
                b.ia = !0
            }
        };
        h.signalPending = function(a) {
            var b = this.Y;
            if (b.j) this.acceptCancel();
            else
                for (var c = Date.now(), d = 0; d < b.c.length; d++) b.c[d] == this && (b.h[d] = c + a)
        };
        h.signalEnd = function() {
            var a = this.Y;
            a.j == this && (a.j = null, a.ca = !0)
        };
        h.signalEmit = function(a, b) {
            var c = this.Y.S[this.getType()];
            c && c.fire(new ta(this.getType(), a, Date.now(), b))
        };
        h.acceptStart = function() {};
        h.acceptCancel = function() {};
        h.onTouchStart = function() {
            return !1
        };
        h.onTouchMove = function() {
            return !1
        };
        h.onTouchEnd = function() {};

        function wa(a, b, c) {
            1 > b && (b = 1);
            var d = .5 + Math.min(b / 33.34, .5);
            return a / b * d + c * (1 - d)
        };

        function L(a, b, c, d) {
            K.call(this, a, b);
            this.za = c;
            this.Ga = d;
            this.j = !1;
            this.qa = this.pa = this.ja = this.X = this.Da = this.la = this.ka = this.G = this.F = this.K = this.J = 0
        }
        r(L, K);
        h = L.prototype;
        h.onTouchStart = function(a) {
            a = a.touches;
            return this.j && a && 1 < a.length ? !0 : a && 1 == a.length ? (this.Da = Date.now(), this.J = a[0].clientX, this.K = a[0].clientY, !0) : !1
        };
        h.onTouchMove = function(a) {
            var b = a.touches;
            if (b && 1 <= b.length) {
                var c = b[0];
                b = c.clientX;
                c = c.clientY;
                this.F = b;
                this.G = c;
                if (this.j) M(this, !1, !1, a);
                else if (a = Math.abs(b - this.J), b = Math.abs(c - this.K), this.za && this.Ga)(8 <= a || 8 <= b) && this.signalReady(-10);
                else if (this.za)
                    if (8 <= a && a > b) this.signalReady(-10);
                    else {
                        if (8 <= b) return !1
                    }
                else if (this.Ga)
                    if (8 <= b && b > a) this.signalReady(-10);
                    else {
                        if (8 <= a) return !1
                    }
                else return !1;
                return !0
            }
            return !1
        };
        h.onTouchEnd = function(a) {
            var b = a.touches;
            b && 0 == b.length && this.j && (this.j = !1, M(this, !1, !0, a), this.signalEnd())
        };
        h.acceptStart = function() {
            this.j = !0;
            this.ka = this.J;
            this.la = this.K;
            this.ja = this.Da;
            this.J = this.F;
            this.K = this.G;
            M(this, !0, !1, null)
        };
        h.acceptCancel = function() {
            this.j = !1
        };

        function M(a, b, c, d) {
            a.X = Date.now();
            var e = a.X - a.ja;
            if (!c && 4 < e || c && 16 < e) {
                var f = wa(a.F - a.ka, e, a.pa),
                    k = wa(a.G - a.la, e, a.qa);
                if (!c || 32 < e || 0 != f || 0 != k) a.pa = 1E-4 < Math.abs(f) ? f : 0, a.qa = 1E-4 < Math.abs(k) ? k : 0;
                a.ka = a.F;
                a.la = a.G;
                a.ja = a.X
            }
            a.signalEmit({
                first: b,
                last: c,
                time: a.X,
                deltaX: a.F - a.J,
                deltaY: a.G - a.K,
                startX: a.J,
                startY: a.K,
                lastX: a.F,
                lastY: a.G,
                velocityX: a.pa,
                velocityY: a.qa
            }, d)
        }

        function xa(a) {
            L.call(this, "swipe-x", a, !0, !1)
        }
        r(xa, L);

        function N(a, b) {
            var c = A(a, "timer");
            return c.promise(1).then(function() {
                return c.promise(b)
            })
        };
        var O, ya = "Webkit webkit Moz moz ms O o".split(" ");

        function P(a, b) {
            for (var c in b) {
                var d = a,
                    e = b[c];
                var f = d.style;
                var k = c;
                if (k.startsWith("--")) f = k;
                else {
                    O || (O = Object.create(null));
                    var g = O[k];
                    if (!g) {
                        g = k;
                        if (void 0 === f[k]) {
                            var l = k;
                            l = l.charAt(0).toUpperCase() + l.slice(1);
                            b: {
                                for (var y = 0; y < ya.length; y++) {
                                    var na = ya[y] + l;
                                    if (void 0 !== f[na]) {
                                        l = na;
                                        break b
                                    }
                                }
                                l = ""
                            }
                            void 0 !== f[l] && (g = l)
                        }
                        O[k] = g
                    }
                    f = g
                }
                f && (f.startsWith("--") ? d.style.setProperty(f, e) : d.style[f] = e)
            }
        }

        function Q(a, b) {
            void 0 === b && (b = a.hasAttribute("hidden"));
            b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "")
        };

        function R(a, b, c) {
            this.ra = a;
            this.fa = b;
            this.Qa = c;
            this.ea = "backward";
            this.R = "horizontal";
            this.$ = this.C = null
        }

        function S(a) {
            return "horizontal" == a.R ? a.C.offsetWidth : a.C.offsetHeight
        }

        function T(a, b, c) {
            b = "horizontal" == a.R ? b : c;
            return "backward" == a.ea ? -Math.min(b, 0) : Math.max(b, 0)
        }

        function U(a, b, c) {
            var d = void 0 === c ? "" : c,
                e = "backward" == a.ea ? -b : b;
            return "translate(" + ("horizontal" == a.R ? "" + e + d : 0) + ", " + ("horizontal" == a.R ? 0 : "" + e + d) + ")"
        }
        R.prototype.startSwipe = function(a) {
            var b = a.mask,
                c = a.direction,
                d = a.orientation;
            this.C = a.swipeElement;
            this.$ = b;
            this.ea = c;
            this.R = d
        };
        R.prototype.swipeMove = function(a) {
            za(this, a, !1)
        };
        R.prototype.endSwipe = function(a) {
            za(this, a, !0)
        };

        function Aa(a, b, c) {
            var d = .75 * c;
            P(a.C, {
                transform: U(a, b, "px"),
                transition: d + "ms transform cubic-bezier(0.15, .55, .3, 0.95)"
            });
            return N(a.ra, d)
        }

        function Ba(a, b) {
            var c = .8 * b;
            return a.fa(function() {
                P(a.C, {
                    transform: U(a, 0),
                    transition: c + "ms transform ease-in"
                });
                P(a.$, {
                    opacity: "",
                    transition: c + "ms opacity ease-in"
                })
            }).then(function() {
                return N(a.ra, c)
            })
        }

        function Ca(a, b) {
            var c = .75 * (S(a) - b);
            return a.fa(function() {
                P(a.C, {
                    transform: U(a, 100, "%"),
                    transition: c + "ms transform ease-out"
                });
                P(a.$, {
                    opacity: 0,
                    transition: c + "ms opacity ease-out"
                })
            }).then(function() {
                return N(a.ra, c)
            }).then(function() {
                return a.Qa()
            })
        }

        function Da(a, b, c) {
            b = void 0 === b ? "" : b;
            var d = c = void 0 === c ? "" : c;
            P(a.C, {
                transform: b,
                transition: ""
            });
            P(a.$, {
                opacity: d,
                transition: ""
            })
        }

        function Ea(a, b, c, d, e) {
            var f = T(a, 22.5 * b + d, 22.5 * c + e),
                k = T(a, b, c),
                g = .5 * S(a);
            return f < g && .65 > k ? Aa(a, f, k).then(function() {
                return Ba(a, f)
            }) : Ca(a, f)
        }

        function za(a, b, c) {
            var d = b.deltaX,
                e = b.deltaY,
                f = b.velocityX,
                k = b.velocityY;
            a.fa(function() {
                if (c) Ea(a, f, k, d, e).then(function() {
                    Da(a)
                });
                else {
                    var g = T(a, d, e),
                        l = g / S(a),
                        y = Math.max(0, 1 - l);
                    Da(a, U(a, g, "px"), y)
                }
            })
        };

        function Fa(a, b) {
            if (void 0 !== E) var c = E;
            else {
                try {
                    var d = b.ownerDocument,
                        e = d.createElement("div"),
                        f = d.createElement("div");
                    e.appendChild(f);
                    c = e.querySelector(":scope div") === f
                } catch (g) {
                    c = !1
                }
                c = E = c
            }
            c ? c = b.querySelector(la(":scope")) : (b.classList.add("i-amphtml-scoped"), c = la(".i-amphtml-scoped"), c = b.querySelectorAll(c), b.classList.remove("i-amphtml-scoped"), c = void 0 === c[0] ? null : c[0]);
            if (c) {
                var k = (a.win.getComputedStyle(b) || Object.create(null))["overflow-y"];
                "scroll" != k && "auto" != k ? x().error("AMP-SIDEBAR",
                    "for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work.") : C(a, "viewport").animateScrollWithinParent(c, b, "center", 0)
            }
        };

        function Ga(a, b) {
            this.xa = b;
            this.A = a;
            this.da = b.getAmpDoc();
            this.Ta = this.A.getAttribute("toolbar");
            this.U = null;
            this.B = void 0;
            this.ba = !1;
            this.A.classList.add("amp-sidebar-toolbar-target-hidden");
            this.U = this.A.cloneNode(!0);
            a = this.A.getAttribute("toolbar-target");
            var c = this.A;
            a = x().assert(a, '"toolbar-target" is required', c, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
            if (c = this.da.getElementById(a)) this.B = c, this.U.classList.add("i-amphtml-toolbar"), Q(this.B, !1);
            else throw x().createError("Could not find the toolbar-target element with an id: " +
                a);
        }
        Ga.prototype.onLayoutChange = function() {
            this.da.win.matchMedia(this.Ta).matches ? Ha(this) : Ia(this)
        };

        function Ha(a) {
            a.ba ? ka || (ka = Promise.resolve(void 0)) : a.xa.mutateElement(function() {
                a.B && (Q(a.B, !0), a.B.contains(a.U) || a.B.appendChild(a.U), a.A.classList.add("amp-sidebar-toolbar-target-shown"), a.A.classList.remove("amp-sidebar-toolbar-target-hidden"), a.ba = !0, Fa(a.da, a.U))
            })
        }

        function Ia(a) {
            a.ba && a.xa.mutateElement(function() {
                a.B && (Q(a.B, !1), a.A.classList.add("amp-sidebar-toolbar-target-hidden"), a.A.classList.remove("amp-sidebar-toolbar-target-shown"), a.ba = !1)
            })
        };

        function Ja(a, b) {
            function c() {
                d = 0;
                var k = 100 - (a.Date.now() - e);
                if (0 < k) d = a.setTimeout(c, k);
                else {
                    var g = f;
                    f = null;
                    b.apply(null, g)
                }
            }
            var d = 0,
                e = 0,
                f = null;
            return function(k) {
                for (var g = [], l = 0; l < arguments.length; ++l) g[l - 0] = arguments[l];
                e = a.Date.now();
                f = g;
                d || (d = a.setTimeout(c, 100))
            }
        };

        function Ka(a) {
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        };

        function La(a) {
            if (a.__AMP__EXPERIMENT_TOGGLES) var b = a.__AMP__EXPERIMENT_TOGGLES;
            else {
                a.__AMP__EXPERIMENT_TOGGLES = Object.create(null);
                b = a.__AMP__EXPERIMENT_TOGGLES;
                if (a.AMP_CONFIG)
                    for (var c in a.AMP_CONFIG) {
                        var d = a.AMP_CONFIG[c];
                        "number" === typeof d && 0 <= d && 1 >= d && (b[c] = Math.random() < d)
                    }
                if (a.AMP_CONFIG && Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"]) && 0 < a.AMP_CONFIG["allow-doc-opt-in"].length && (c = a.AMP_CONFIG["allow-doc-opt-in"], d = a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))) {
                    d =
                        d.getAttribute("content").split(",");
                    for (var e = 0; e < d.length; e++) - 1 != c.indexOf(d[e]) && (b[d[e]] = !0)
                }
                Object.assign(b, Ma(a));
                if (a.AMP_CONFIG && Array.isArray(a.AMP_CONFIG["allow-url-opt-in"]) && 0 < a.AMP_CONFIG["allow-url-opt-in"].length) {
                    c = a.AMP_CONFIG["allow-url-opt-in"];
                    d = a.location.originalHash || a.location.hash;
                    a = Object.create(null);
                    if (d)
                        for (var f; f = da.exec(d);) e = t(f[1], f[1]), f = f[2] ? t(f[2].replace(/\+/g, " "), f[2]) : "", a[e] = f;
                    for (d = 0; d < c.length; d++) e = a["e-" + c[d]], "1" == e && (b[c[d]] = !0), "0" == e && (b[c[d]] = !1)
                }
            }
            return !!b["amp-sidebar-swipe-to-dismiss"]
        }

        function Ma(a) {
            var b = "";
            try {
                "localStorage" in a && (b = a.localStorage.getItem("amp-experiment-toggles"))
            } catch (e) {
                if (w.dev) a = w.dev;
                else throw Error("failed to call initLogConstructor");
                a.warn("EXPERIMENTS", "Failed to retrieve experiments from localStorage.")
            }
            var c = b ? b.split(/\s*,\s*/g) : [];
            a = Object.create(null);
            for (var d = 0; d < c.length; d++) 0 != c[d].length && ("-" == c[d][0] ? a[c[d].substr(1)] = !1 : a[c[d]] = !0);
            return a
        };
        var V = [];

        function Na(a) {
            var b = [];
            a = Oa(a);
            for (var c = {}, d = 0; d < a.length; c = {
                    N: c.N
                }, d++) c.N = a[d], c.N.parentNode && u(c.N.parentNode.children).filter(function(e) {
                return function(f) {
                    return f != e.N
                }
            }(c)).forEach(function(e) {
                return b.push(e)
            });
            return b
        }

        function Oa(a) {
            for (var b = [], c = a; c; c = c.parentNode || c.host) b.push(c);
            return b
        }

        function Pa(a) {
            for (var b = []; a;) {
                a = oa(a);
                var c = a.querySelectorAll("a[href],area[href],button,details summary,iframe,input,select,textarea,[contenteditable],[draggable],[tabindex]");
                Array.prototype.push.apply(b, c);
                a = a.host
            }
            return b
        }

        function Qa(a) {
            V.every(function(g) {
                return g.element !== a
            });
            ma(a);
            var b = Na(a),
                c = Oa(a).filter(function(g) {
                    return g.nodeType == Node.ELEMENT_NODE
                }),
                d = Pa(a),
                e = d.filter(function(g) {
                    return a.contains(g) && void 0 !== g.__AMP_MODAL_SAVED_TAB_INDEX
                }),
                f = d.filter(function(g) {
                    return !a.contains(g) && void 0 === g.__AMP_MODAL_SAVED_TAB_INDEX
                }),
                k = b.concat(c).map(function(g) {
                    return {
                        element: g,
                        prevValue: g.getAttribute("aria-hidden")
                    }
                });
            c.forEach(function(g) {
                return g.removeAttribute("aria-hidden")
            });
            b.forEach(function(g) {
                return g.setAttribute("aria-hidden",
                    "true")
            });
            f.forEach(function(g) {
                g.__AMP_MODAL_SAVED_TAB_INDEX = g.getAttribute("tabindex");
                g.setAttribute("tabindex", "-1")
            });
            e.forEach(function(g) {
                var l = g.__AMP_MODAL_SAVED_TAB_INDEX;
                null === l ? g.removeAttribute("tabindex") : g.setAttribute("tabindex", l)
            });
            V.push({
                element: a,
                hiddenElementInfos: k,
                focusableExternalElements: f,
                focusableInternalElements: e
            })
        }

        function Ra(a) {
            var b = V.pop(),
                c = b.hiddenElementInfos,
                d = b.focusableExternalElements;
            b = b.focusableInternalElements;
            ma(a);
            c.forEach(function(e) {
                var f = e.element,
                    k = e.prevValue;
                null === k ? f.removeAttribute("aria-hidden") : f.setAttribute("aria-hidden", k)
            });
            b.forEach(function(e) {
                e.setAttribute("tabindex", "-1")
            });
            d.forEach(function(e) {
                var f = e.__AMP_MODAL_SAVED_TAB_INDEX;
                null === f ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", f);
                e.__AMP_MODAL_SAVED_TAB_INDEX = void 0
            })
        };

        function W(a) {
            var b = AMP.BaseElement.call(this, a) || this;
            b.M = null;
            b.V = null;
            b.Fa = null;
            b.Z = null;
            b.D = b.win.document;
            b.Ja = b.D.documentElement;
            b.I = null;
            b.oa = [];
            var c = A(b.win, "platform");
            b.P = c.isIos();
            b.La = c.isSafari();
            b.W = -1;
            b.sa = !1;
            b.O = null;
            b.ha = null;
            b.Aa = 0;
            b.H = !1;
            b.Ba = null;
            b.na = new R(b.win, function(d) {
                return b.mutateElement(d)
            }, function() {
                return X(b, !0, 3)
            });
            return b
        }
        r(W, AMP.BaseElement);
        W.prototype.buildCallback = function() {
            var a = this,
                b = this.element;
            b.classList.add("i-amphtml-overlay");
            b.classList.add("i-amphtml-scrollable");
            this.I = b.getAttribute("side");
            this.M = this.getViewport();
            this.V = ia(b, "action");
            this.element.parentNode != this.element.ownerDocument.body && this.element.parentNode != this.getAmpDoc().getBody() && this.user().warn("amp-sidebar toolbar", "amp-sidebar toolbar is recommended to be a direct child of the <body> element to preserve a logical DOM order.");
            "left" != this.I && "right" !=
                this.I && (this.I = Sa(this, qa(this.D) ? "right" : "left"), b.setAttribute("side", this.I));
            Ta(this);
            b.addEventListener("amp:dom-update", function() {
                Ta(a)
            });
            this.getAmpDoc().whenReady().then(function() {
                var c = u(b.querySelectorAll("nav[toolbar]"));
                c.forEach(function(d) {
                    try {
                        a.oa.push(new Ga(d, a))
                    } catch (e) {
                        a.user().error("amp-sidebar toolbar", "Failed to instantiate toolbar", e)
                    }
                });
                if (c.length) a.getViewport().onResize(Ja(a.win, function() {
                    a.oa.forEach(function(d) {
                        d.onLayoutChange()
                    })
                }))
            });
            this.P && Ua(this);
            b.hasAttribute("role") ||
                b.setAttribute("role", "menu");
            b.tabIndex = -1;
            this.Ja.addEventListener("keydown", function(c) {
                "Escape" == c.key && X(a, !1, 3) && c.preventDefault()
            });
            this.O = Va(this);
            this.O || (this.O = this.createScreenReaderCloseButton(), b.insertBefore(this.O, this.element.firstChild));
            b.appendChild(this.createScreenReaderCloseButton());
            this.registerDefaultAction(function(c) {
                Wa(a, c.trust, c.caller)
            }, "open");
            this.registerAction("close", function(c) {
                X(a, !1, c.trust)
            });
            this.registerAction("toggle", function(c) {
                var d = c.trust;
                c = c.caller;
                a.H ? X(a, !1, d) : Wa(a, d, c)
            });
            this.V.addToAllowlist("amp-sidebar", ["open", "close", "toggle"], ["email"]);
            b.addEventListener("click", function(c) {
                if ((c = F(c.target, "A")) && c.href) {
                    var d = ia(b, "url").parse(c.href),
                        e = a.getAmpDoc().getUrl();
                    Ka(c.href) == Ka(e) && d.hash && X(a, !1, 3)
                }
            }, !0);
            Xa(this, this.element)
        };

        function Ta(a) {
            if (!a.Ba) {
                var b = a.element.querySelector("amp-nested-menu");
                b && (A(a.win, "extensions").installExtensionForDoc(a.getAmpDoc(), "amp-nested-menu"), a.Ba = b)
            }
        }

        function Va(a) {
            for (var b = a.element.querySelectorAll("[on]"), c = 0; c < b.length; c++) {
                var d = b[c],
                    e = a.V.hasResolvableActionForTarget(d, "tap", a.element, d.parentElement),
                    f = F(d, "[toolbar]");
                if (e && !f) return d
            }
            return null
        }
        W.prototype.createScreenReaderCloseButton = function() {
            var a = this,
                b = this.element.getAttribute("data-close-button-aria-label") || "Close the sidebar",
                c = this.D.createElement("button");
            c.textContent = b;
            c.classList.add("i-amphtml-screen-reader");
            c.tabIndex = -1;
            c.addEventListener("click", function() {
                X(a, !1, 3)
            });
            return c
        };
        W.prototype.onLayoutMeasure = function() {
            var a = this;
            this.getAmpDoc().whenReady().then(function() {
                a.oa.forEach(function(b) {
                    b.onLayoutChange()
                })
            })
        };

        function Y(a, b, c) {
            function d() {
                a.Fa === b && a.mutateElement(b)
            }
            a.Fa = b;
            c ? A(a.win, "timer").delay(d, c) : d()
        }

        function Ya(a, b) {
            Q(a.element, !0);
            Q(Z(a), !0);
            a.M.addToFixedLayer(a.element, !0);
            a.mutateElement(function() {
                Qa(a.element)
            });
            a.P && a.La && Za(a);
            a.element.scrollTop = 1;
            a.element.setAttribute("open", "");
            Z(a).setAttribute("open", "");
            Y(a, function() {
                var c = a.getRealChildren(),
                    d = C(a.element, "owners");
                d.scheduleLayout(a.element, c);
                d.scheduleResume(a.element, c);
                if (!a.P || !C(a.element, "viewer").isEmbedded()) try {
                    a.O.focus()
                } catch (e) {}
                $a(a, "sidebarOpen", b);
                a.element.setAttribute("i-amphtml-sidebar-opened", "");
                Z(a).setAttribute("i-amphtml-sidebar-opened",
                    "")
            }, 350);
            Fa(a.getAmpDoc(), a.element)
        }

        function ab(a, b, c) {
            Z(a).removeAttribute("open");
            Z(a).removeAttribute("i-amphtml-sidebar-opened");
            a.mutateElement(function() {
                Ra(a.element)
            });
            a.element.removeAttribute("open");
            a.element.removeAttribute("i-amphtml-sidebar-opened");
            Y(a, function() {
                Q(a.element, !1);
                Q(Z(a), !1);
                C(a.element, "owners").schedulePause(a.element, a.getRealChildren());
                $a(a, "sidebarClose", c)
            }, b ? 0 : 350)
        }

        function Wa(a, b, c) {
            a.H || (a.H = !0, a.M.enterOverlayMode(), Y(a, function() {
                return Ya(a, b)
            }), C(a.getAmpDoc(), "history").push(function() {
                a.P ? X(a, !0, b) : X(a, !1, b)
            }).then(function(d) {
                a.W = d
            }), c && (a.ha = c, a.Aa = a.M.getScrollTop()))
        }

        function X(a, b, c) {
            if (!a.H) return !1;
            a.H = !1;
            a.M.leaveOverlayMode();
            var d = a.Aa == a.M.getScrollTop(),
                e = a.element.contains(a.D.activeElement);
            Y(a, function() {
                return ab(a, b, c)
            });
            b && (Q(a.element, !1), Q(Z(a), !1)); - 1 != a.W && (C(a.getAmpDoc(), "history").pop(a.W), a.W = -1);
            if (a.ha && e && d && (!a.P || !C(a.element, "viewer").isEmbedded())) try {
                a.ha.focus()
            } catch (f) {}
            return !0
        }

        function Xa(a, b) {
            if (La(a.win)) va(b).onGesture(xa, function(c) {
                c = c.data;
                c.first ? a.na.startSwipe({
                    swipeElement: a.element,
                    mask: a.Z,
                    direction: "left" == a.I ? "backward" : "forward",
                    orientation: "horizontal"
                }) : c.last ? a.na.endSwipe(c) : a.na.swipeMove(c)
            })
        }

        function Sa(a, b) {
            return F(a.element, "amp-story") ? "left" == b ? "right" : "left" : b
        }

        function Z(a) {
            if (!a.Z) {
                var b = a.D.createElement("div");
                b.classList.add("i-amphtml-sidebar-mask");
                b.addEventListener("click", function() {
                    X(a, !1, 3)
                });
                a.getAmpDoc().getBody().appendChild(b);
                b.addEventListener("touchmove", function(c) {
                    c.preventDefault()
                });
                Xa(a, b);
                a.Z = b
            }
            return a.Z
        }

        function Ua(a) {
            a.element.addEventListener("scroll", function(b) {
                a.H && (1 > a.element.scrollTop ? (a.element.scrollTop = 1, b.preventDefault()) : a.element.scrollHeight == a.element.scrollTop + a.element.offsetHeight && (--a.element.scrollTop, b.preventDefault()))
            })
        }

        function Za(a) {
            if (!a.sa) {
                var b = a.D.createElement("div");
                P(b, {
                    height: "54px",
                    width: "100%",
                    "background-color": "transparent"
                });
                a.element.appendChild(b);
                a.sa = !0
            }
        }

        function $a(a, b, c) {
            var d = a.win;
            var e = "amp-sidebar toolbar." + b;
            var f = {};
            var k = {
                detail: f
            };
            Object.assign(k, void 0);
            "function" == typeof d.CustomEvent ? e = new d.CustomEvent(e, k) : (d = d.document.createEvent("CustomEvent"), d.initCustomEvent(e, !!k.bubbles, !!k.cancelable, f), e = d);
            a.V.trigger(a.element, b, e, c)
        }(function(a) {
            a.registerElement("amp-sidebar", W, "amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;background-color:rgba(0,0,0,0.5);animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")
        })(self.AMP);
    })
});

//# sourceMappingURL=amp-sidebar-0.1.js.map