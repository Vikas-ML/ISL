(self.AMP = self.AMP || []).push({
    n: "amp-mustache",
    v: "2011252111003",
    f: (function(AMP, _) {
        'use strict';
        var z;

        function aa(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return
            }(function() {
                throw Error("Cannot find global object");
            })()
        }
        aa(this);
        "function" === typeof Symbol && Symbol("x");
        var ca = "function" == typeof Object.create ? Object.create : function(a) {
                function b() {}
                b.prototype = a;
                return new b
            },
            da;
        if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
        else {
            var na;
            a: {
                var oa = {
                        a: !0
                    },
                    pa = {};
                try {
                    pa.__proto__ = oa;
                    na = pa.a;
                    break a
                } catch (a) {}
                na = !1
            }
            da = na ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        var qa = da;

        function va(a, b) {
            var c = b = void 0 === b ? "" : b;
            try {
                return decodeURIComponent(a)
            } catch (d) {
                return c
            }
        };
        var wa = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
        var J = self.AMP_CONFIG || {},
            xa = ("string" == typeof J.cdnProxyRegex ? new RegExp(J.cdnProxyRegex) : J.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function ya(a) {
            if (!self.document || !self.document.head || self.location && xa.test(self.location.origin)) return null;
            var b = self.document.head.querySelector('meta[name="' + a + '"]');
            return b && b.getAttribute("content") || null
        }
        var za = {
            thirdParty: J.thirdPartyUrl || "https://3p.ampproject.net",
            thirdPartyFrameHost: J.thirdPartyFrameHost || "ampproject.net",
            thirdPartyFrameRegex: ("string" == typeof J.thirdPartyFrameRegex ? new RegExp(J.thirdPartyFrameRegex) : J.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
            cdn: J.cdnUrl || ya("runtime-host") || "https://cdn.ampproject.org",
            cdnProxyRegex: xa,
            localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
            errorReporting: J.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
            betaErrorReporting: J.betaErrorReportingUrl ||
                "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
            localDev: J.localDev || !1,
            trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
            geoApi: J.geoApiUrl || ya("amp-geo-api")
        };
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var Aa = self.__AMP_LOG;

        function Ba() {
            if (!Aa.user) throw Error("failed to call initLogConstructor");
            return Aa.user
        }

        function Ea(a, b, c) {
            Ba().assert(a, b, c, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
        };

        function Fa(a, b) {
            var c = a = a.__AMP_TOP || (a.__AMP_TOP = a),
                d = Ga(c),
                h = d.purifier;
            h || (h = d.purifier = {
                obj: null,
                promise: null,
                resolve: null,
                reject: null,
                context: null,
                ctor: null,
                adopted: !1
            });
            h.ctor || h.obj || (h.ctor = b, h.context = a, h.adopted = !1, h.resolve && Ha(c, "purifier"))
        }

        function Ia(a, b) {
            a = a.__AMP_TOP || (a.__AMP_TOP = a);
            return Ha(a, b)
        }

        function Ja(a) {
            return a.nodeType ? Ia((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function Ha(a, b) {
            a = Ga(a)[b];
            a.obj || (a.obj = new a.ctor(a.context), a.ctor = null, a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function Ga(a) {
            var b = a.__AMP_SERVICES;
            b || (b = a.__AMP_SERVICES = {});
            return b
        };
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        function Ka(a) {
            return a || {}
        };

        function La(a, b) {
            for (var c = a.length, d = 0; d < c; d++) b(a[d], d)
        };

        function O(a, b) {
            this.element = a;
            this.win = a.ownerDocument.defaultView || b;
            a = Ja(this.element);
            a = Ja(a);
            a = a.isSingleDoc() ? a.win : a;
            this.J = Ha(a, "viewer");
            this.compileCallback()
        }
        z = O.prototype;
        z.compileCallback = function() {};
        z.setHtml = function() {};
        z.render = function() {};
        z.renderAsString = function() {};

        function Ma(a, b) {
            for (a = a.firstChild; null != a; a = a.nextSibling)
                if (3 == a.nodeType) {
                    var c = a.textContent.trim();
                    c && b(c)
                } else 8 != a.nodeType && 1 == a.nodeType && b(a)
        }
        z.tryUnwrap = function(a) {
            var b;
            Ma(a, function(c) {
                b = void 0 === b && c.nodeType ? c : null
            });
            return b || a
        };
        z.unwrapChildren = function(a) {
            var b = this,
                c = [];
            Ma(a, function(d) {
                if ("string" == typeof d) {
                    var h = b.win.document.createElement("div");
                    h.textContent = d;
                    c.push(h)
                } else c.push(d)
            });
            return c
        };
        z.viewerCanRenderTemplates = function() {
            return this.J.hasCapability("viewerRenderTemplate")
        };

        function Na(a) {
            var b = a.documentElement;
            return ["\u26a14email", "amp4email"].some(function(c) {
                return b.hasAttribute(c)
            })
        };

        function Oa() {
            this.H = 100;
            this.o = this.B = 0;
            this.l = Object.create(null)
        }
        Oa.prototype.has = function(a) {
            return !!this.l[a]
        };
        Oa.prototype.get = function(a) {
            var b = this.l[a];
            if (b) return b.access = ++this.o, b.payload
        };
        Oa.prototype.put = function(a, b) {
            this.has(a) || this.B++;
            this.l[a] = {
                payload: b,
                access: this.o
            };
            if (!(this.B <= this.H)) {
                if (Aa.dev) a = Aa.dev;
                else throw Error("failed to call initLogConstructor");
                a.warn("lru-cache", "Trimming LRU cache");
                a = this.l;
                var c = this.o + 1,
                    d;
                for (d in a) {
                    var h = a[d].access;
                    if (h < c) {
                        c = h;
                        var q = d
                    }
                }
                void 0 !== q && (delete a[q], this.B--)
            }
        };
        var Pa = Ka({
                c: !0,
                v: !0,
                a: !0,
                ad: !0
            }),
            Qa, Ra, ab = /[?&]amp_js[^&]*/,
            bb = /[?&]amp_gsa[^&]*/,
            cb = /[?&]amp_r[^&]*/,
            db = /[?&]amp_kit[^&]*/,
            eb = /[?&]usqp[^&]*/;

        function fb(a) {
            Qa || (Qa = self.document.createElement("a"), Ra = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new Oa));
            var b = Ra,
                c = Qa;
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

        function gb(a) {
            "string" == typeof a && (a = fb(a));
            return za.cdnProxyRegex.test(a.origin)
        }

        function hb(a) {
            "string" == typeof a && (a = fb(a));
            if (!gb(a)) return a.href;
            var b = a.pathname.split("/");
            Ea(Pa[b[1]], "Unknown path prefix in url %s", a.href);
            var c = b[2],
                d = "s" == c ? "https://" + decodeURIComponent(b[3]) : "http://" + decodeURIComponent(c);
            Ea(0 < d.indexOf("."), "Expected a . in origin %s", d);
            b.splice(1, "s" == c ? 3 : 2);
            b = d + b.join("/");
            d = (d = a.search) && "?" != d ? (d = d.replace(ab, "").replace(bb, "").replace(cb, "").replace(db, "").replace(eb, "").replace(/^[?&]/, "")) ? "?" + d : "" : "";
            return b + d + (a.hash || "")
        }

        function ib(a, b) {
            "string" == typeof b && (b = fb(b));
            if ("function" == typeof URL) var c = (new URL(a, b.href)).toString();
            else {
                c = a;
                var d = b;
                "string" == typeof d && (d = fb(d));
                c = c.replace(/\\/g, "/");
                var h = fb(c);
                c = c.toLowerCase().startsWith(h.protocol) ? h.href : c.startsWith("//") ? d.protocol + c : c.startsWith("/") ? d.origin + c : d.origin + d.pathname.replace(/\/[^/]*$/, "/") + c
            }
            return c
        }

        function jb(a) {
            var b = fb(a).search,
                c = Object.create(null);
            if (b)
                for (var d; d = wa.exec(b);) {
                    var h = va(d[1], d[1]);
                    d = d[2] ? va(d[2].replace(/\+/g, " "), d[2]) : "";
                    c[h] = d
                }
            Ea(!("__amp_source_origin" in c), "Source origin is not allowed in %s", a)
        };
        var kb = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;

        function lb(a) {
            for (var b = [], c; c = kb.exec(a);) {
                var d = c[1],
                    h = void 0,
                    q = void 0;
                if (c[2]) {
                    var D = c[3].toLowerCase();
                    if ("w" == D) h = parseInt(c[2], 10);
                    else if ("x" == D) q = parseFloat(c[2]);
                    else continue
                } else q = 1;
                b.push({
                    url: d,
                    width: h,
                    dpr: q
                })
            }
            return new mb(b)
        }

        function mb(a) {
            Ea(0 < a.length, "Srcset must have at least one source");
            this.j = a;
            for (var b = !1, c = !1, d = 0; d < a.length; d++) {
                var h = a[d];
                b = b || !!h.width;
                c = c || !!h.dpr
            }
            Ea(!!(b ^ c), "Srcset must have width or dpr sources, but not both");
            a.sort(b ? nb : ob);
            this.G = b
        }
        mb.prototype.select = function(a, b) {
            if (this.G) {
                b *= a;
                a = this.j;
                for (var c = 0, d = Infinity, h = Infinity, q = 0; q < a.length; q++) {
                    var D = a[q].width,
                        v = Math.abs(D - b);
                    if (v <= 1.1 * d || 1.2 < b / h) c = q, d = v, h = D;
                    else break
                }
                b = c
            } else {
                a = this.j;
                c = 0;
                d = Infinity;
                for (h = 0; h < a.length; h++)
                    if (q = Math.abs(a[h].dpr - b), q <= d) c = h, d = q;
                    else break;
                b = c
            }
            return this.j[b].url
        };
        mb.prototype.getUrls = function() {
            return this.j.map(function(a) {
                return a.url
            })
        };
        mb.prototype.stringify = function(a) {
            for (var b = [], c = this.j, d = 0; d < c.length; d++) {
                var h = c[d],
                    q = h.url;
                a && (q = a(q));
                q = this.G ? q + (" " + h.width + "w") : q + (" " + h.dpr + "x");
                b.push(q)
            }
            return b.join(", ")
        };

        function nb(a, b) {
            Ea(a.width != b.width, "Duplicate width: %s", a.width);
            return a.width - b.width
        }

        function ob(a, b) {
            Ea(a.dpr != b.dpr, "Duplicate dpr: %s", a.dpr);
            return a.dpr - b.dpr
        };

        function pb(a, b, c) {
            return qb(b) ? rb(a, b, c) : c
        }

        function qb(a) {
            return "src" == a || "href" == a || "xlink:href" == a || "srcset" == a
        }

        function rb(a, b, c) {
            var d = self.location;
            jb(c);
            var h = gb(d),
                q = fb(hb(d));
            if ("href" == b && !c.startsWith("#")) return ib(c, q);
            if ("src" == b) return "amp-img" == a ? sb(c, q, h) : ib(c, q);
            if ("srcset" == b) {
                try {
                    var D = lb(c)
                } catch (v) {
                    return Ba().error("URL-REWRITE", "Failed to parse srcset: ", v), c
                }
                return D.stringify(function(v) {
                    return sb(v, q, h)
                })
            }
            return c
        }

        function sb(a, b, c) {
            a = fb(ib(a, b));
            return "data:" == a.protocol || gb(a) || !c ? a.href : za.cdn + "/i/" + ("https:" == a.protocol ? "s/" : "") + encodeURIComponent(a.host) + a.pathname + (a.search || "") + (a.hash || "")
        };
        var tb = {
            "AMP-IMG": ["src", "srcset", "layout", "width", "height"]
        };

        function ub(a, b) {
            var c = a.tagName.startsWith("AMP-"),
                d = a.hasAttribute("i-amphtml-binding");
            if (!d && tb[a.tagName]) a.setAttribute("i-amphtml-ignore", "");
            else if (d || c) a.hasAttribute("i-amphtml-key") || a.setAttribute("i-amphtml-key", b())
        }
        var vb = {
                applet: !0,
                audio: !0,
                base: !0,
                embed: !0,
                frame: !0,
                frameset: !0,
                iframe: !0,
                img: !0,
                link: !0,
                meta: !0,
                object: !0,
                style: !0,
                video: !0
            },
            wb = {
                "amp-accordion": !0,
                "amp-anim": !0,
                "amp-bind-macro": !0,
                "amp-carousel": !0,
                "amp-fit-text": !0,
                "amp-img": !0,
                "amp-layout": !0,
                "amp-selector": !0,
                "amp-sidebar": !0,
                "amp-timeago": !0
            },
            xb = "a b br caption code col colgroup dd del div dl dt em hr i ins li mark ol p q s small span strong sub sup table tbody td tfoot th thead time tr u ul".split(" "),
            yb = "amp-fx fallback heights layout min-font-size max-font-size on option placeholder submitting submit-success submit-error validation-for verify-error visible-when-invalid href style text subscriptions-action subscriptions-actions subscriptions-decorate subscriptions-dialog subscriptions-display subscriptions-section subscriptions-service subscriptions-google-rtc amp-nested-submenu amp-nested-submenu-open amp-nested-submenu-close itemprop".split(" "),
            zb = {
                a: ["rel", "target"],
                div: ["template"],
                form: ["action-xhr", "verify-xhr", "custom-validation-reporting", "target"],
                input: ["mask-output"],
                template: ["type"],
                textarea: ["autoexpand"]
            },
            Ab = ["_top", "_blank"],
            Bb = /^(?:\w+script|data|blob):/i,
            Cb = /^(?:blob):/i,
            Db = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,
            Eb = Object.freeze(Ka({
                input: {
                    type: /(?:image|button)/i
                }
            })),
            Lb = Object.freeze(Ka({
                input: {
                    type: /(?:button|file|image|password)/i
                }
            })),
            Mb = Object.freeze("form formaction formmethod formtarget formnovalidate formenctype".split(" ")),
            Nb = Object.freeze(Ka({
                input: Mb,
                textarea: Mb,
                select: Mb
            })),
            Ob = Object.freeze(Ka({
                "amp-anim": ["controls"],
                form: ["name"]
            })),
            Pb = /!important|position\s*:\s*fixed|position\s*:\s*sticky/i;

        function Qb(a, b, c, d) {
            var h = !0,
                q = h = void 0 === h ? !1 : h,
                D = c ? c.replace(Db, "") : "";
            if (!q) {
                if (b.startsWith("on") && "on" != b) return !1;
                var v = D.toLowerCase();
                if (0 <= v.indexOf("<script") || 0 <= v.indexOf("\x3c/script") || Bb.test(D)) return !1
            }
            if (Cb.test(D)) return !1;
            if ("style" == b) return !Pb.test(c);
            if ("class" == b && c && /(^|\W)i-amphtml-/i.test(c) || qb(b) && /__amp_source_origin/.test(c)) return !1;
            var B = Na(d),
                E = Object.assign(Object.create(null), Nb, B ? Ob : {})[a];
            if (E && -1 != E.indexOf(b)) return !1;
            var C = Object.assign(Object.create(null),
                Eb, B ? Lb : {})[a];
            if (C) {
                var m = C[b];
                if (m && -1 != c.search(m)) return !1
            }
            return !0
        };
        var Rb = Object.freeze || function(a) {
                return a
            },
            Sb = Rb("a abbr acronym address area article aside audio b bdi bdo big blink blockquote body br button canvas caption center cite code col colgroup content data datalist dd decorator del details dfn dir div dl dt element em fieldset figcaption figure font footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i img input ins kbd label legend li main map mark marquee menu menuitem meter nav nobr ol optgroup option output p pre progress q rp rt ruby s samp section select shadow small source spacer span strike strong style sub summary sup table tbody td template textarea tfoot th thead time tr track tt u ul var video wbr".split(" ")),
            Tb = Rb("svg a altglyph altglyphdef altglyphitem animatecolor animatemotion animatetransform audio canvas circle clippath defs desc ellipse filter font g glyph glyphref hkern image line lineargradient marker mask metadata mpath path pattern polygon polyline radialgradient rect stop style switch symbol text textpath title tref tspan video view vkern".split(" ")),
            Ub = Rb("feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence".split(" ")),
            Vb = Rb("math menclose merror mfenced mfrac mglyph mi mlabeledtr mmultiscripts mn mo mover mpadded mphantom mroot mrow ms mspace msqrt mstyle msub msup msubsup mtable mtd mtext mtr munder munderover".split(" ")),
            Wb = Rb(["#text"]),
            Xb = Object.freeze || function(a) {
                return a
            },
            Yb = Xb("accept action align alt autocomplete background bgcolor border cellpadding cellspacing checked cite class clear color cols colspan controls coords crossorigin datetime default dir disabled download enctype face for headers height hidden high href hreflang id integrity ismap label lang list loop low max maxlength media method min minlength multiple name noshade novalidate nowrap open optimum pattern placeholder poster preload pubdate radiogroup readonly rel required rev reversed role rows rowspan spellcheck scope selected shape size sizes span srclang start src srcset step style summary tabindex title type usemap valign value width xmlns".split(" ")),
            Zb = Xb("accent-height accumulate additive alignment-baseline ascent attributename attributetype azimuth basefrequency baseline-shift begin bias by class clip clip-path clip-rule color color-interpolation color-interpolation-filters color-profile color-rendering cx cy d dx dy diffuseconstant direction display divisor dur edgemode elevation end fill fill-opacity fill-rule filter filterunits flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight fx fy g1 g2 glyph-name glyphref gradientunits gradienttransform height href id image-rendering in in2 k k1 k2 k3 k4 kerning keypoints keysplines keytimes lang lengthadjust letter-spacing kernelmatrix kernelunitlength lighting-color local marker-end marker-mid marker-start markerheight markerunits markerwidth maskcontentunits maskunits max mask media method mode min name numoctaves offset operator opacity order orient orientation origin overflow paint-order path pathlength patterncontentunits patterntransform patternunits points preservealpha preserveaspectratio primitiveunits r rx ry radius refx refy repeatcount repeatdur restart result rotate scale seed shape-rendering specularconstant specularexponent spreadmethod stddeviation stitchtiles stop-color stop-opacity stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke stroke-width style surfacescale tabindex targetx targety transform text-anchor text-decoration text-rendering textlength type u1 u2 unicode values viewbox visibility version vert-adv-y vert-origin-x vert-origin-y width word-spacing wrap writing-mode xchannelselector ychannelselector x x1 x2 xmlns y y1 y2 z zoomandpan".split(" ")),
            $b = Xb("accent accentunder align bevelled close columnsalign columnlines columnspan denomalign depth dir display displaystyle encoding fence frame height href id largeop length linethickness lspace lquote mathbackground mathcolor mathsize mathvariant maxsize minsize movablelimits notation numalign open rowalign rowlines rowspacing rowspan rspace rquote scriptlevel scriptminsize scriptsizemultiplier selection separator separators stretchy subscriptshift supscriptshift symmetric voffset width xmlns".split(" ")),
            ac = Xb(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
            bc = Object.hasOwnProperty,
            cc = Object.setPrototypeOf,
            dc = ("undefined" !== typeof Reflect && Reflect).apply;
        dc || (dc = function(a, b, c) {
            return a.apply(b, c)
        });

        function S(a, b) {
            cc && cc(a, null);
            for (var c = b.length; c--;) {
                var d = b[c];
                if ("string" === typeof d) {
                    var h = d.toLowerCase();
                    h !== d && (Object.isFrozen(b) || (b[c] = h), d = h)
                }
                a[d] = !0
            }
            return a
        }

        function ec(a) {
            var b = {},
                c = void 0;
            for (c in a) dc(bc, a, [c]) && (b[c] = a[c]);
            return b
        }
        var fc = Object.seal || function(a) {
                return a
            },
            gc = fc(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
            hc = fc(/<%[\s\S]*|[\s\S]*%>/gm),
            ic = fc(/^data-[\-\w.\u00B7-\uFFFF]/),
            jc = fc(/^aria-[\-\w]+$/),
            kc = fc(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
            lc = fc(/^(?:\w+script|data):/i),
            mc = fc(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),
            nc = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(a) {
                return typeof a
            } : function(a) {
                return a && "function" === typeof Symbol &&
                    a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            };

        function Y(a) {
            if (Array.isArray(a)) {
                for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
                return c
            }
            return Array.from(a)
        }
        var oc = ("undefined" !== typeof Reflect && Reflect).apply,
            pc = Array.prototype.slice,
            qc = Object.freeze;
        oc || (oc = function(a, b, c) {
            return a.apply(b, c)
        });

        function rc(a, b) {
            if ("object" !== ("undefined" === typeof a ? "undefined" : nc(a)) || "function" !== typeof a.createPolicy) return null;
            var c = null;
            b.currentScript && b.currentScript.hasAttribute("data-tt-policy-suffix") && (c = b.currentScript.getAttribute("data-tt-policy-suffix"));
            var d = "dompurify" + (c ? "#" + c : "");
            try {
                return a.createPolicy(d, {
                    createHTML: function(h) {
                        return h
                    }
                })
            } catch (h) {
                return console.warn("TrustedTypes policy " + d + " could not be created."), null
            }
        }

        function sc() {
            function a(e) {
                var g, r = void 0,
                    t;
                d("beforeSanitizeAttributes", e, null);
                var H = e.attributes;
                if (H) {
                    var P = {
                        attrName: "",
                        attrValue: "",
                        keepAttr: !0,
                        allowedAttributes: F
                    };
                    for (t = H.length; t--;) {
                        var U = g = H[t],
                            T = U.name,
                            V = U.namespaceURI;
                        g = g.value.trim();
                        var fa = T.toLowerCase();
                        P.attrName = fa;
                        P.attrValue = g;
                        P.keepAttr = !0;
                        d("uponSanitizeAttribute", e, P);
                        g = P.attrValue;
                        if ("name" === fa && "IMG" === e.nodeName && H.id) r = H.id, H = oc(pc, H, []), B("id", e), B(T, e), H.indexOf(r) > t && e.setAttribute("id", r.value);
                        else if ("INPUT" !==
                            e.nodeName || "type" !== fa || "file" !== g || !P.keepAttr || !F[fa] && ra[fa]) "id" === T && e.setAttribute(T, ""), B(T, e);
                        else continue;
                        if (P.keepAttr)
                            if (/svg|math/i.test(e.namespaceURI) && (new RegExp("</(" + Object.keys(Fb).join("|") + ")", "i")).test(g)) B(T, e);
                            else {
                                ha && (g = g.replace(gc, " "), g = g.replace(hc, " "));
                                var Dc = e.nodeName.toLowerCase();
                                if (b(Dc, fa, g)) try {
                                    V ? e.setAttributeNS(V, T, g) : e.setAttribute(T, g), m.removed.pop()
                                } catch (Mc) {}
                            }
                    }
                    d("afterSanitizeAttributes", e, null)
                }
            }

            function b(e, g, r) {
                if (Gb && ("id" === g || "name" === g) && (r in
                        W || r in Ec)) return !1;
                if (!Sa || !ic.test(g))
                    if (!L || !jc.test(g))
                        if (!F[g] || ra[g] || !(Ta[g] || G.test(r.replace(mc, "")) || ("src" === g || "xlink:href" === g || "href" === g) && "script" !== e && 0 === r.indexOf("data:") && Fc[e] || Hb && !lc.test(r.replace(mc, ""))) && r) return !1;
                return !0
            }

            function c(e) {
                d("beforeSanitizeElements", e, null);
                if (q(e)) return E(e), !0;
                var g = e.nodeName.toLowerCase();
                d("uponSanitizeElement", e, {
                    tagName: g,
                    allowedTags: w
                });
                if (("svg" === g || "math" === g) && 0 !== e.querySelectorAll("p, br").length) return E(e), !0;
                if (!w[g] ||
                    Q[g]) {
                    if (Ua && !Fb[g] && "function" === typeof e.insertAdjacentHTML) try {
                        var r = e.innerHTML;
                        e.insertAdjacentHTML("AfterEnd", k ? k.createHTML(r) : r)
                    } catch (t) {}
                    E(e);
                    return !0
                }
                if ("noscript" === g && /<\/noscript/i.test(e.innerHTML) || "noembed" === g && /<\/noembed/i.test(e.innerHTML)) return E(e), !0;
                !Ib || e.firstElementChild || e.content && e.content.firstElementChild || !/</g.test(e.textContent) || (m.removed.push({
                    element: e.cloneNode()
                }), e.innerHTML = e.innerHTML ? e.innerHTML.replace(/</g, "&lt;") : e.textContent.replace(/</g, "&lt;"));
                ha && 3 === e.nodeType && (g = e.textContent, g = g.replace(gc, " "), g = g.replace(hc, " "), e.textContent !== g && (m.removed.push({
                    element: e.cloneNode()
                }), e.textContent = g));
                d("afterSanitizeElements", e, null);
                return !1
            }

            function d(e, g, r) {
                I[e] && I[e].forEach(function(t) {
                    t.call(m, g, r, ia)
                })
            }

            function h(e) {
                return "object" === ("undefined" === typeof ja ? "undefined" : nc(ja)) ? e instanceof ja : e && "object" === ("undefined" === typeof e ? "undefined" : nc(e)) && "number" === typeof e.nodeType && "string" === typeof e.nodeName
            }

            function q(e) {
                return e instanceof
                Va || e instanceof sa ? !1 : "string" === typeof e.nodeName && "string" === typeof e.textContent && "function" === typeof e.removeChild && e.attributes instanceof Wa && "function" === typeof e.removeAttribute && "function" === typeof e.setAttribute && "string" === typeof e.namespaceURI ? !1 : !0
            }

            function D(e) {
                return A.call(e.ownerDocument || e, e, ka.SHOW_ELEMENT | ka.SHOW_COMMENT | ka.SHOW_TEXT, function() {
                    return ka.FILTER_ACCEPT
                }, !1)
            }

            function v(e) {
                var g = void 0,
                    r = void 0;
                if (Xa) e = "<remove></remove>" + e;
                else {
                    var t = e.match(/^[\s]+/);
                    (r = t && t[0]) &&
                    (e = e.slice(r.length))
                }
                if (M) try {
                    g = (new f).parseFromString(e, "text/html")
                } catch (H) {}
                ea && S(Q, ["title"]);
                g && g.documentElement || (g = y.createHTMLDocument(""), t = g.body, t.parentNode.removeChild(t.parentNode.firstElementChild), t.outerHTML = k ? k.createHTML(e) : e);
                e && r && g.body.insertBefore(W.createTextNode(r), g.body.childNodes[0] || null);
                return x.call(g, ta ? "html" : "body")[0]
            }

            function B(e, g) {
                try {
                    m.removed.push({
                        attribute: g.getAttributeNode(e),
                        from: g
                    })
                } catch (r) {
                    m.removed.push({
                        attribute: null,
                        from: g
                    })
                }
                g.removeAttribute(e)
            }

            function E(e) {
                m.removed.push({
                    element: e
                });
                try {
                    e.parentNode.removeChild(e)
                } catch (g) {
                    e.outerHTML = n
                }
            }

            function C(e) {
                ia && ia === e || (e && "object" === ("undefined" === typeof e ? "undefined" : nc(e)) || (e = {}), w = "ALLOWED_TAGS" in e ? S({}, e.ALLOWED_TAGS) : N, F = "ALLOWED_ATTR" in e ? S({}, e.ALLOWED_ATTR) : la, Ta = "ADD_URI_SAFE_ATTR" in e ? S(ec(Jb), e.ADD_URI_SAFE_ATTR) : Jb, Q = "FORBID_TAGS" in e ? S({}, e.FORBID_TAGS) : {}, ra = "FORBID_ATTR" in e ? S({}, e.FORBID_ATTR) : {}, ma = "USE_PROFILES" in e ? e.USE_PROFILES : !1, L = !1 !== e.ALLOW_ARIA_ATTR, Sa = !1 !== e.ALLOW_DATA_ATTR,
                    Hb = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ib = e.SAFE_FOR_JQUERY || !1, ha = e.SAFE_FOR_TEMPLATES || !1, ta = e.WHOLE_DOCUMENT || !1, ua = e.RETURN_DOM || !1, Ya = e.RETURN_DOM_FRAGMENT || !1, Kb = e.RETURN_DOM_IMPORT || !1, Za = e.RETURN_TRUSTED_TYPE || !1, Xa = e.FORCE_BODY || !1, Gb = !1 !== e.SANITIZE_DOM, Ua = !1 !== e.KEEP_CONTENT, Ca = e.IN_PLACE || !1, G = e.ALLOWED_URI_REGEXP || G, ha && (Sa = !1), Ya && (ua = !0), ma && (w = S({}, [].concat(Y(Wb))), F = [], !0 === ma.html && (S(w, Sb), S(F, Yb)), !0 === ma.svg && (S(w, Tb), S(F, Zb), S(F, ac)), !0 === ma.svgFilters && (S(w, Ub), S(F, Zb), S(F, ac)), !0 === ma.mathMl && (S(w, Vb), S(F, $b), S(F, ac))), e.ADD_TAGS && (w === N && (w = ec(w)), S(w, e.ADD_TAGS)), e.ADD_ATTR && (F === la && (F = ec(F)), S(F, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && S(Ta, e.ADD_URI_SAFE_ATTR), Ua && (w["#text"] = !0), ta && S(w, ["html", "head", "body"]), w.table && (S(w, ["tbody"]), delete Q.tbody), qc && qc(e), ia = e)
            }

            function m(e) {
                return sc(e)
            }
            var p = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "undefined" === typeof window ? null : window;
            m.version = "2.0.7";
            m.removed = [];
            if (!p || !p.document || 9 !== p.document.nodeType) return m.isSupported = !1, m;
            var ba = p.document,
                M = !1,
                ea = !1,
                W = p.document,
                Da = p.DocumentFragment,
                ja = p.Node,
                ka = p.NodeFilter,
                X = p.NamedNodeMap,
                Wa = void 0 === X ? p.NamedNodeMap || p.MozNamedAttrMap : X,
                Va = p.Text,
                sa = p.Comment,
                f = p.DOMParser,
                l = p.TrustedTypes;
            "function" === typeof p.HTMLTemplateElement && (X = W.createElement("template"), X.content && X.content.ownerDocument && (W = X.content.ownerDocument));
            var k = rc(l, ba),
                n = k ? k.createHTML("") : "",
                u = W,
                y = u.implementation,
                A = u.createNodeIterator,
                x = u.getElementsByTagName,
                K = u.createDocumentFragment,
                R = ba.importNode,
                I = {};
            m.isSupported = y && "undefined" !== typeof y.createHTMLDocument && 9 !== W.documentMode;
            var G = kc,
                w = null,
                N = S({}, [].concat(Y(Sb), Y(Tb), Y(Ub), Y(Vb), Y(Wb))),
                F = null,
                la = S({}, [].concat(Y(Yb), Y(Zb), Y($b), Y(ac))),
                Q = null,
                ra = null,
                L = !0,
                Sa = !0,
                Hb = !1,
                Ib = !1,
                ha = !1,
                ta = !1,
                $a = !1,
                Xa = !1,
                ua = !1,
                Ya = !1,
                Kb = !1,
                Za = !1,
                Gb = !0,
                Ua = !0,
                Ca = !1,
                ma = {},
                Fb = S({}, "annotation-xml audio colgroup desc foreignobject head iframe math mi mn mo ms mtext noembed noframes plaintext script style svg template thead title video xmp".split(" ")),
                Fc = S({}, ["audio",
                    "video", "img", "source", "image"
                ]),
                Ta = null,
                Jb = S({}, "alt class for id label name pattern placeholder summary title value style xmlns".split(" ")),
                ia = null,
                Ec = W.createElement("form");
            m.isSupported && (function() {
                try {
                    v('<svg><p><textarea><img src="</textarea><img src=x abc=1//">').querySelector("svg img") && (M = !0)
                } catch (e) {}
            }(), function() {
                try {
                    var e = v("<x/><title>&lt;/title&gt;&lt;img&gt;");
                    /<\/title/.test(e.querySelector("title").innerHTML) && (ea = !0)
                } catch (g) {}
            }());
            var Gc = function r(g) {
                var t = void 0,
                    H = D(g);
                for (d("beforeSanitizeShadowDOM", g, null); t = H.nextNode();) d("uponSanitizeShadowNode", t, null), c(t) || (t.content instanceof Da && r(t.content), a(t));
                d("afterSanitizeShadowDOM", g, null)
            };
            m.sanitize = function(g, r) {
                var t = void 0,
                    H = void 0,
                    P = void 0,
                    U = void 0;
                g || (g = "\x3c!--\x3e");
                if ("string" !== typeof g && !h(g)) {
                    if ("function" !== typeof g.toString) throw new TypeError("toString is not a function");
                    g = g.toString();
                    if ("string" !== typeof g) throw new TypeError("dirty is not a string, aborting");
                }
                if (!m.isSupported) {
                    if ("object" ===
                        nc(p.toStaticHTML) || "function" === typeof p.toStaticHTML) {
                        if ("string" === typeof g) return p.toStaticHTML(g);
                        if (h(g)) return p.toStaticHTML(g.outerHTML)
                    }
                    return g
                }
                $a || C(r);
                m.removed = [];
                if (!Ca)
                    if (g instanceof ja) t = v("\x3c!--\x3e"), H = t.ownerDocument.importNode(g, !0), 1 === H.nodeType && "BODY" === H.nodeName ? t = H : "HTML" === H.nodeName ? t = H : t.appendChild(H);
                    else {
                        if (!ua && !ha && !ta && Za && -1 === g.indexOf("<")) return k ? k.createHTML(g) : g;
                        t = v(g);
                        if (!t) return ua ? null : n
                    }
                t && Xa && E(t.firstChild);
                for (var T = D(Ca ? g : t); r = T.nextNode();) 3 ===
                    r.nodeType && r === P || c(r) || (r.content instanceof Da && Gc(r.content), a(r), P = r);
                P = null;
                if (Ca) return g;
                if (ua) {
                    if (Ya)
                        for (U = K.call(t.ownerDocument); t.firstChild;) U.appendChild(t.firstChild);
                    else U = t;
                    Kb && (U = R.call(ba, U, !0));
                    return U
                }
                var V = ta ? t.outerHTML : t.innerHTML;
                ha && (V = V.replace(gc, " "), V = V.replace(hc, " "));
                return k && Za ? k.createHTML(V) : V
            };
            m.setConfig = function(g) {
                C(g);
                $a = !0
            };
            m.clearConfig = function() {
                ia = null;
                $a = !1
            };
            m.isValidAttribute = function(g, r, t) {
                ia || C({});
                g = g.toLowerCase();
                r = r.toLowerCase();
                return b(g,
                    r, t)
            };
            m.addHook = function(g, r) {
                "function" === typeof r && (I[g] = I[g] || [], I[g].push(r))
            };
            m.removeHook = function(g) {
                I[g] && I[g].pop()
            };
            m.removeHooks = function(g) {
                I[g] && (I[g] = [])
            };
            m.removeAllHooks = function() {
                I = {}
            };
            return m
        }
        var tc = sc();
        var uc = {
                script: {
                    attribute: "type",
                    values: ["application/json", "application/ld+json"]
                }
            },
            vc = {
                USE_PROFILES: {
                    html: !0,
                    svg: !0,
                    svgFilters: !0
                }
            };

        function wc(a) {
            this.m = a;
            this.I = 1;
            this.h = tc(self);
            this.C = tc(self);
            a = Object.assign({}, Object.assign({}, vc, {
                ADD_ATTR: yb,
                ADD_TAGS: ["use"],
                FORBID_TAGS: Object.keys(vb),
                FORCE_BODY: !0,
                RETURN_DOM: !0,
                ALLOW_UNKNOWN_PROTOCOLS: !0
            }));
            this.h.setConfig(a);
            xc(this, this.h);
            yc(this.C)
        }
        wc.prototype.purifyHtml = function(a) {
            return this.h.sanitize(a)
        };
        wc.prototype.purifyTagsForTripleMustache = function(a) {
            a = this.C.sanitize(a, {
                ALLOWED_TAGS: xb,
                FORCE_BODY: !0,
                RETURN_DOM_FRAGMENT: !0
            });
            var b = this.m.createElement("div");
            b.appendChild(a);
            return b.innerHTML
        };
        wc.prototype.getAllowedTags = function() {
            var a = {};
            this.h.addHook("uponSanitizeElement", function(c, d) {
                Object.assign(a, d.allowedTags)
            });
            var b = this.m.createElement("p");
            this.h.sanitize(b);
            Object.keys(vb).forEach(function(c) {
                a[c] = !1
            });
            this.h.removeHook("uponSanitizeElement");
            return a
        };
        wc.prototype.validateAttributeChange = function(a, b, c) {
            var d = a.nodeName.toLowerCase(),
                h = uc[d];
            if (h) {
                var q = h.values;
                if (h.attribute === b && (null == c || !q.includes(c))) return !1
            }
            if ("a" === d && "target" === b && (null == c || !Ab.includes(c))) return !1;
            if (null == c) return !0;
            if (zc(b) !== Ac) return !1;
            if (!this.h.isValidAttribute(d, b, c)) {
                var D = zb[d];
                if (!(D && D.includes(b) || d.startsWith("amp-"))) return !1
            }
            a = a.ownerDocument ? a.ownerDocument : a;
            return c && !Qb(d, b, c, a) ? !1 : !0
        };

        function xc(a, b) {
            var c = Na(a.m),
                d, h = [],
                q, D = [];
            b.addHook("uponSanitizeElement", function(v, B) {
                var E = B.tagName;
                d = B.allowedTags;
                E.startsWith("amp-") && (d[E] = !c || wb[E]);
                "a" === E && v.hasAttribute("href") && !v.hasAttribute("target") && v.setAttribute("target", "_top");
                var C = uc[E];
                C && (B = C.attribute, C = C.values, v.hasAttribute(B) && C.includes(v.getAttribute(B)) && (d[E] = !0, h.push(E)))
            });
            b.addHook("afterSanitizeElements", function() {
                h.forEach(function(v) {
                    delete d[v]
                });
                h.length = 0
            });
            b.addHook("uponSanitizeAttribute", function(v,
                B) {
                function E() {
                    q[m] || (q[m] = !0, D.push(m))
                }
                var C = v.nodeName.toLowerCase(),
                    m = B.attrName,
                    p = B.attrValue;
                q = B.allowedAttributes;
                if (C.startsWith("amp-")) E();
                else {
                    if ("a" == C && "target" == m) {
                        var ba = p.toLowerCase();
                        p = Ab.includes(ba) ? ba : "_top"
                    }
                    var M = zb[C];
                    M && M.includes(m) && E()
                }
                var ea = zc(m);
                ea === Bc && (M = m.substring(1, m.length - 1), v.setAttribute("data-amp-bind-" + M, p));
                ea !== Ac && v.setAttribute("i-amphtml-binding", "");
                Qb(C, m, p, a.m) ? pb && p && !m.startsWith("data-amp-bind-") && (p = pb(C, m, p)) : (B.keepAttr = !1, Ba().error("purifier",
                    'Removed invalid attribute %s[%s="%s"].', C, m, p));
                B.attrValue = p
            });
            b.addHook("afterSanitizeAttributes", function(v) {
                ub(v, function() {
                    return String(a.I++)
                });
                D.forEach(function(B) {
                    delete q[B]
                });
                D.length = 0;
                "use" === v.nodeName.toLowerCase() && ["href", "xlink:href"].forEach(function(B) {
                    v.hasAttribute(B) && !v.getAttribute(B).startsWith("#") && (v.parentElement && v.parentElement.removeChild(v), Ba().error("purifier", 'Removed invalid <use>. use[href] must start with "#".'))
                })
            })
        }

        function yc(a) {
            var b;
            a.addHook("uponSanitizeElement", function(c, d) {
                var h = d.tagName;
                b = d.allowedTags;
                "template" === h && (c = c.getAttribute("type")) && "amp-mustache" === c.toLowerCase() && (b.template = !0)
            });
            a.addHook("afterSanitizeElements", function() {
                b.template = !1
            })
        }
        var Ac = 0,
            Bc = 1,
            Cc = 2;

        function zc(a) {
            return "[" == a[0] && "]" == a[a.length - 1] ? Bc : a.startsWith("data-amp-bind-") ? Cc : Ac
        };
        /*
         mustache.js - Logic-less {{mustache}} templates with JavaScript
         http://github.com/janl/mustache.js
        */
        var Hc = {};
        (function(a) {
            function b(f) {
                return "function" === typeof f
            }

            function c(f) {
                return M(f) ? "array" : typeof f
            }

            function d(f) {
                return f.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }

            function h(f, l) {
                return null != f && "object" === typeof f && Object.prototype.hasOwnProperty.call(f, l)
            }

            function q(f, l) {
                return ea.call(f, l)
            }

            function D(f) {
                return !q(W, f)
            }

            function v(f, l) {
                function k() {
                    if (A && !x)
                        for (; y.length;) delete u[y.pop()];
                    else y = [];
                    x = A = !1
                }
                if (!f) return [];
                var n = [],
                    u = [],
                    y = [],
                    A = !1,
                    x = !1,
                    K, R, I;
                (function(L) {
                    "string" === typeof L && (L =
                        L.split(ka, 2));
                    if (!M(L) || 2 !== L.length) throw Error("Invalid tags: " + L);
                    K = new RegExp(d(L[0]) + "\\s*");
                    R = new RegExp("\\s*" + d(L[1]));
                    I = new RegExp("\\s*" + d("}" + L[1]))
                })(l || a.tags);
                for (var G = new C(f), w, N, F, la, Q; !G.eos();) {
                    f = G.pos;
                    if (N = G.scanUntil(K)) {
                        w = 0;
                        for (var ra = N.length; w < ra; ++w) F = N.charAt(w), D(F) ? y.push(u.length) : x = !0, u.push(["text", F, f, f + 1]), f += 1, "\n" === F && k()
                    }
                    if (!G.scan(K)) break;
                    A = !0;
                    w = G.scan(Va) || "name";
                    G.scan(ja);
                    "=" === w ? (N = G.scanUntil(X), G.scan(X), G.scanUntil(R)) : "{" === w ? (N = G.scanUntil(I), G.scan(Wa),
                        G.scanUntil(R), w = "&") : N = G.scanUntil(R);
                    if (!G.scan(R)) throw Error("Unclosed tag at " + G.pos);
                    la = [w, N, f, G.pos];
                    u.push(la);
                    if ("#" === w || "^" === w) n.push(la);
                    else if ("/" === w) {
                        Q = n.pop();
                        if (!Q) throw Error('Unopened section "' + N + '" at ' + f);
                        if (Q[1] !== N) throw Error('Unclosed section "' + Q[1] + '" at ' + f);
                    } else if ("name" === w || "{" === w || "&" === w) x = !0
                }
                if (Q = n.pop()) throw Error('Unclosed section "' + Q[1] + '" at ' + G.pos);
                return E(B(u))
            }

            function B(f) {
                for (var l = [], k, n, u = 0, y = f.length; u < y; ++u)
                    if (k = f[u]) "text" === k[0] && n && "text" ===
                        n[0] ? (n[1] += k[1], n[3] = k[3]) : (l.push(k), n = k);
                return l
            }

            function E(f) {
                for (var l = [], k = l, n = [], u, y, A = 0, x = f.length; A < x; ++A) switch (u = f[A], u[0]) {
                    case "#":
                    case "^":
                        k.push(u);
                        n.push(u);
                        k = u[4] = [];
                        break;
                    case "/":
                        y = n.pop();
                        y[5] = u[2];
                        k = 0 < n.length ? n[n.length - 1][4] : l;
                        break;
                    default:
                        k.push(u)
                }
                return l
            }

            function C(f) {
                this.tail = this.string = f;
                this.pos = 0
            }

            function m(f, l) {
                this.view = f;
                this.cache = {
                    ".": this.view
                };
                this.parent = l
            }

            function p() {
                this.cache = {}
            }
            var ba = Object.prototype.toString,
                M = Array.isArray || function(f) {
                    return "[object Array]" ===
                        ba.call(f)
                },
                ea = RegExp.prototype.test,
                W = /\S/,
                Da = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;",
                    "`": "&#x60;",
                    "=": "&#x3D;"
                },
                ja = /\s*/,
                ka = /\s+/,
                X = /\s*=/,
                Wa = /\s*\}/,
                Va = /#|\^|\/|>|\{|&|=|!/;
            C.prototype.eos = function() {
                return "" === this.tail
            };
            C.prototype.scan = function(f) {
                f = this.tail.match(f);
                if (!f || 0 !== f.index) return "";
                f = f[0];
                this.tail = this.tail.substring(f.length);
                this.pos += f.length;
                return f
            };
            C.prototype.scanUntil = function(f) {
                f = this.tail.search(f);
                switch (f) {
                    case -1:
                        var l = this.tail;
                        this.tail = "";
                        break;
                    case 0:
                        l = "";
                        break;
                    default:
                        l = this.tail.substring(0, f), this.tail = this.tail.substring(f)
                }
                this.pos += l.length;
                return l
            };
            m.prototype.push = function(f) {
                return new m(f, this)
            };
            m.prototype.lookup = function(f) {
                var l = this.cache;
                if (l.hasOwnProperty(f)) var k = l[f];
                else {
                    for (var n = this, u, y, A = !1; n;) {
                        if (0 < f.indexOf("."))
                            for (k = n.view, u = f.split("."), y = 0; null != k && y < u.length;) {
                                if (!h(k, u[y])) {
                                    k = null;
                                    break
                                }
                                y === u.length - 1 && (A = !0);
                                k = k[u[y++]]
                            } else h(n.view, f) ? (k = n.view[f], A = !0) : k = null;
                        if (A) break;
                        n = n.parent
                    }
                    l[f] =
                        k
                }
                b(k) && (k = k.call(this.view));
                return k
            };
            p.prototype.clearCache = function() {
                this.cache = {}
            };
            p.prototype.parse = function(f, l) {
                var k = this.cache,
                    n = k[f];
                null == n && (n = k[f] = v(f, l));
                return n
            };
            p.prototype.render = function(f, l, k) {
                var n = this.parse(f);
                l = l instanceof m ? l : new m(l);
                return this.renderTokens(n, l, k, f)
            };
            p.prototype.renderTokens = function(f, l, k, n) {
                for (var u = "", y, A, x, K = 0, R = f.length; K < R; ++K) x = void 0, y = f[K], A = y[0], "#" === A ? x = this.renderSection(y, l, k, n) : "^" === A ? x = this.renderInverted(y, l, k, n) : ">" === A ? x = this.renderPartial(y,
                    l, k, n) : "&" === A ? x = this.unescapedValue(y, l) : "name" === A ? x = this.escapedValue(y, l) : "text" === A && (x = this.rawValue(y)), void 0 !== x && (u += x);
                return u
            };
            p.prototype.renderSection = function(f, l, k, n) {
                function u(I) {
                    return y.render(I, l, k)
                }
                var y = this,
                    A = "",
                    x = l.lookup(f[1]);
                if (x) {
                    if (M(x))
                        for (var K = 0, R = x.length; K < R; ++K) A += this.renderTokens(f[4], l.push(x[K]), k, n);
                    else if ("object" === typeof x || "string" === typeof x || "number" === typeof x) A += this.renderTokens(f[4], l.push(x), k, n);
                    else if (b(x)) {
                        if ("string" !== typeof n) throw Error("Cannot use higher-order sections without the original template");
                        x = x.call(l.view, n.slice(f[3], f[5]), u);
                        null != x && (A += x)
                    } else A += this.renderTokens(f[4], l, k, n);
                    return A
                }
            };
            p.prototype.renderInverted = function(f, l, k, n) {
                var u = l.lookup(f[1]);
                if (!u || M(u) && 0 === u.length) return this.renderTokens(f[4], l, k, n)
            };
            p.prototype.renderPartial = function(f, l, k) {
                if (k && (f = b(k) ? k(f[1]) : k[f[1]], null != f)) return this.renderTokens(this.parse(f), l, k, f)
            };
            p.prototype.unescapedValue = function(f, l) {
                f = l.lookup(f[1]);
                if (null != f) return a.sanitizeUnescaped ? a.sanitizeUnescaped(f) : f
            };
            p.prototype.escapedValue =
                function(f, l) {
                    f = l.lookup(f[1]);
                    if (null != f) return a.escape(f)
                };
            p.prototype.rawValue = function(f) {
                return f[1]
            };
            a.name = "mustache.js";
            a.version = "2.2.0";
            a.tags = ["{{", "}}"];
            var sa = new p;
            a.clearCache = function() {
                return sa.clearCache()
            };
            a.parse = function(f, l) {
                return sa.parse(f, l)
            };
            a.render = function(f, l, k) {
                if ("string" !== typeof f) throw new TypeError('Invalid template! Template should be a "string" but "' + c(f) + '" was given as the first argument for mustache#render(template, view, partials)');
                return sa.render(f,
                    l, k)
            };
            a.to_html = function(f, l, k, n) {
                f = a.render(f, l, k);
                if (b(n)) n(f);
                else return f
            };
            a.escape = function(f) {
                return String(f).replace(/[&<>"'`=\/]/g, function(l) {
                    return Da[l]
                })
            };
            a.sanitizeUnescaped = null;
            a.setUnescapedSanitizer = function(f) {
                a.sanitizeUnescaped = f
            };
            a.Scanner = C;
            a.Context = m;
            a.Writer = p
        })(Hc);

        function Z(a, b) {
            O.call(this, a, b);
            var c = this;
            Fa(b, function() {
                return new wc(b.document)
            });
            this.A = Ia(b, "purifier");
            Hc.setUnescapedSanitizer(function(d) {
                return c.A.purifyTagsForTripleMustache(d)
            })
        }
        Z.prototype = ca(O.prototype);
        Z.prototype.constructor = Z;
        if (qa) qa(Z, O);
        else
            for (var Ic in O)
                if ("prototype" != Ic)
                    if (Object.defineProperties) {
                        var Jc = Object.getOwnPropertyDescriptor(O, Ic);
                        Jc && Object.defineProperty(Z, Ic, Jc)
                    } else Z[Ic] = O[Ic];
        Z.K = O.prototype;
        Z.prototype.compileCallback = function() {
            if (!this.viewerCanRenderTemplates()) {
                this.D = {};
                if ("TEMPLATE" == this.element.tagName) {
                    var a = this.element;
                    if ("content" in a) var b = a.content.cloneNode(!0);
                    else {
                        b = a.ownerDocument.createDocumentFragment();
                        var c = b.ownerDocument.createDocumentFragment();
                        for (a = a.firstChild; a; a = a.nextSibling) c.appendChild(a.cloneNode(!0));
                        b.appendChild(c)
                    }
                    Kc(this, b);
                    c = this.element.ownerDocument.createElement("div");
                    c.appendChild(b);
                    b = c.innerHTML
                } else b = "SCRIPT" == this.element.tagName ? this.element.textContent :
                    "";
                this.F = b;
                try {
                    Hc.parse(this.F, void 0)
                } catch (d) {
                    Ba().error("amp-mustache", d.message, this.element)
                }
            }
        };

        function Kc(a, b) {
            var c = b.querySelectorAll("template");
            La(c, function(d, h) {
                h = "__AMP_NESTED_TEMPLATE_" + h;
                a.D[h] = d.outerHTML;
                var q = a.element.ownerDocument.createTextNode("{{{" + h + "}}}");
                d.parentNode.replaceChild(q, d)
            })
        }
        Z.prototype.setHtml = function(a) {
            var b = this.tryUnwrap(this.A.purifyHtml("<div><div>" + (a + "</div></div>")).firstElementChild);
            return this.unwrapChildren(b)
        };
        Z.prototype.render = function(a) {
            return this.tryUnwrap(Lc(this, a))
        };
        Z.prototype.renderAsString = function(a) {
            return Lc(this, a).innerHTML
        };

        function Lc(a, b) {
            var c = b;
            "object" === typeof b && (c = Object.assign({}, b, a.D));
            b = Hc.render(a.F, c, void 0);
            return a.A.purifyHtml("<div>" + b + "</div>").firstElementChild
        }(function(a) {
            a.registerTemplate("amp-mustache", Z)
        })(self.AMP);
    })
});

//# sourceMappingURL=amp-mustache-0.2.js.map