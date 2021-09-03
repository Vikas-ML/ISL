(self.AMP = self.AMP || []).push({
    n: "amp-auto-lightbox",
    v: "2011252111003",
    f: (function(AMP, _) {
        'use strict';

        function k(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return
            }(function() {
                throw Error("Cannot find global object");
            })()
        }
        k(this);
        "function" === typeof Symbol && Symbol("x");
        var m;

        function n() {
            var a, b;
            this.promise = new Promise(function(c, d) {
                a = c;
                b = d
            });
            this.resolve = a;
            this.reject = b
        };

        function p(a) {
            return a ? Array.prototype.slice.call(a) : []
        };
        var q = self.AMP_CONFIG || {},
            r = ("string" == typeof q.cdnProxyRegex ? new RegExp(q.cdnProxyRegex) : q.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function t(a) {
            if (self.document && self.document.head && (!self.location || !r.test(self.location.origin))) {
                var b = self.document.head.querySelector('meta[name="' + a + '"]');
                b && b.getAttribute("content")
            }
        }
        q.cdnUrl || t("runtime-host");
        q.geoApiUrl || t("amp-geo-api");
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var u = self.__AMP_LOG;

        function v() {
            if (u.dev) return u.dev;
            throw Error("failed to call initLogConstructor");
        };

        function w(a, b) {
            a = a.__AMP_TOP || (a.__AMP_TOP = a);
            return x(a, b)
        }

        function y(a, b) {
            var c = z(a);
            c = A(c);
            return x(c, b)
        }

        function z(a) {
            return a.nodeType ? w((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function A(a) {
            a = z(a);
            return a.isSingleDoc() ? a.win : a
        }

        function x(a, b) {
            B(a, b);
            var c = a.__AMP_SERVICES;
            c || (c = a.__AMP_SERVICES = {});
            a = c[b];
            a.obj || (a.obj = new a.ctor(a.context), a.ctor = null, a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function B(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor && !a.obj)
        };
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        function C(a, b) {
            for (; a && void 0 !== a; a = a.parentElement)
                if (b(a)) return a;
            return null
        }

        function D(a) {
            return a.closest ? a.closest("a[href],amp-script,amp-story,button,amp-lightbox,amp-carousel,[placeholder],[data-amp-auto-lightbox-disable],amp-selector [option],[subscriptions-action]") : C(a, function(b) {
                var c = b.matches || b.webkitMatchesSelector || b.mozMatchesSelector || b.msMatchesSelector || b.oMatchesSelector;
                return c ? c.call(b, "a[href],amp-script,amp-story,button,amp-lightbox,amp-carousel,[placeholder],[data-amp-auto-lightbox-disable],amp-selector [option],[subscriptions-action]") : !1
            })
        }

        function E(a) {
            a.tagName.startsWith("AMP-");
            if (a.createdCallback) return Promise.resolve(a);
            if (!a.__AMP_UPG_PRM) {
                var b = new n;
                a.__AMP_UPG_PRM = b.promise;
                a.__AMP_UPG_RES = b.resolve
            }
            return a.__AMP_UPG_PRM
        };
        /nochunking=1/.test(self.location.hash);
        (function() {
            return m ? m : m = Promise.resolve(void 0)
        })();
        var F = {
            Article: !0,
            NewsArticle: !0,
            BlogPosting: !0,
            LiveBlogPosting: !0,
            DiscussionForumPosting: !0
        };

        function G() {}
        var H = /\s+([0-9]+)w(,|[\S\s]*$)/g;

        function I(a) {
            return y(a, "mutator").mutateElement(a, function() {
                a.setAttribute("i-amphtml-auto-lightbox-visited", "")
            })
        }

        function J(a) {
            return E(a).then(function(b) {
                return b.signals().whenSignal("load-end")
            })
        }

        function K(a) {
            return p(a.getRootNode().querySelectorAll('script[type="application/ld+json"]')).map(function(b) {
                try {
                    var c = JSON.parse(b.textContent)
                } catch (d) {
                    c = null
                }
                return (c || {})["@type"]
            }).filter(function(b) {
                return b
            })
        }

        function L(a) {
            return K(a).some(function(b) {
                return F[b]
            })
        }

        function M(a) {
            function b(c) {
                return !!a.getRootNode().querySelector(c)
            }
            return b('script[custom-element="amp-lightbox-gallery"]') && b("[lightbox]:not([i-amphtml-auto-lightbox-visited])")
        }
        var N = 0;

        function O(a, b) {
            return y(a, "mutator").mutateElement(b, function() {
                b.setAttribute("lightbox", "i-amphtml-auto-lightbox-" + N++)
            }).then(function() {
                w(a.win, "extensions").installExtensionForDoc(a, "amp-lightbox-gallery");
                var c = b.ownerDocument.createEvent("Event");
                c.data = {};
                c.initEvent("amp-auto-lightbox:newly-set", !0, !0);
                b.dispatchEvent(c);
                return b
            })
        }

        function P(a, b) {
            b.map(function(c) {
                return J(c).then(function() {
                    var d;
                    if (d = !c.signals().get("unload")) {
                        var h = c.querySelector("img");
                        d = h.naturalWidth;
                        var g = h.naturalHeight;
                        var l = d / g;
                        var e = -1;
                        if (h = h.getAttribute("srcset"))
                            for (var f; f = H.exec(h);) f = parseInt(f[1], 10), f > e && (e = f);
                        g = e > d ? {
                            naturalWidth: e,
                            naturalHeight: e / l
                        } : {
                            naturalWidth: d,
                            naturalHeight: g
                        };
                        d = g.naturalWidth;
                        g = g.naturalHeight;
                        e = c.getLayoutBox();
                        l = e.width;
                        h = e.height;
                        f = y(c, "viewport").getSize();
                        e = f.width;
                        f = f.height;
                        l *= h;
                        if (d = 1.2 <= d * g / l || d > e || g > f ||
                            .25 <= l / (e * f)) D(c) ? d = !1 : (d = z(c), d = A(d), d = !(B(d, "action") ? x(d, "action") : null).hasResolvableAction(c, "tap"))
                    }
                    if (d) return v().info("amp-auto-lightbox", "apply", c), O(a, c)
                }, G)
            })
        }

        function Q(a, b) {
            if (M(a)) var c = 0;
            else c = (c = a.getRootNode().querySelector('meta[property="og:type"]')) ? c.getAttribute("content") : void 0, c = "article" == c || L(a);
            c ? (c = p((b || a.win.document).querySelectorAll("amp-img:not([lightbox]):not([i-amphtml-auto-lightbox-visited])")), c.forEach(I), P(a, c)) : v().info("amp-auto-lightbox", "disabled")
        }
        (function(a) {
            var b = a.ampdoc;
            b.whenReady().then(function() {
                b.getRootNode().addEventListener("amp:dom-update", function(c) {
                    Q(b, c.target)
                });
                Q(b)
            })
        })(self.AMP);
    })
});

//# sourceMappingURL=amp-auto-lightbox-0.1.js.map