(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-4689280a"], {
        3783: function(t, e, n) {
            "use strict";
            var i = n("276c"),
                a = n("e954"),
                o = n("76b0"),
                r = n.n(o),
                s = n("876a"),
                c = n.n(s),
                l = n("d3b7c"),
                u = n.n(l),
                d = n("01ea"),
                f = d["a"].network,
                h = d["a"].config;
            r.a.plugins(new c.a);
            var p = r.a.scatter,
                v = {
                    expireInSeconds: 60
                },
                m = function() {
                    function t() {
                        Object(i["a"])(this, t), this.network = f, this.config = h, this.scatter = p
                    }
                    return Object(a["a"])(t, [{
                        key: "authAction",
                        value: function(t) {
                            var e = this;
                            p.connect(this.config.dappName).then((function(n) {
                                if (n) {
                                    var i = {
                                        accounts: [e.network]
                                    };
                                    r.a.scatter.getIdentity(i).then((function(e) {
                                        t(null, e)
                                    })).catch((function(e) {
                                        t(e, null)
                                    }))
                                }
                            }))
                        }
                    }, {
                        key: "sendAction",
                        value: function(t, e) {
                            var n = {
                                    actions: [{
                                        account: t.contract,
                                        name: "transfer",
                                        authorization: [{
                                            actor: t.from,
                                            permission: t.authority
                                        }],
                                        data: {
                                            from: t.from,
                                            to: t.to,
                                            quantity: t.amount,
                                            memo: t.memo
                                        }
                                    }]
                                },
                                i = {
                                    blocksBehind: 3,
                                    expireSeconds: 30
                                },
                                a = [n, i],
                                o = r.a.scatter.eos(f, u.a, v);
                            o.transaction.apply(o, a).then((function(t) {
                                e(null, t)
                            })).catch((function(t) {
                                e(t, null)
                            }))
                        }
                    }, {
                        key: "pushAction",
                        value: function(t, e) {
                            var n = {
                                    actions: [{
                                        account: t.contract,
                                        name: t.action,
                                        authorization: [{
                                            actor: t.userName,
                                            permission: t.authority
                                        }],
                                        data: t.data
                                    }]
                                },
                                i = {
                                    blocksBehind: 3,
                                    expireSeconds: 30
                                },
                                a = [n, i],
                                o = r.a.scatter.eos(this.network, u.a, v);
                            o.transaction.apply(o, a).then((function(t) {
                                e(null, t)
                            })).catch((function(t) {
                                e(t, null)
                            }))
                        }
                    }, {
                        key: "getBalanceAction",
                        value: function(t, e) {
                            var n = r.a.scatter.eos(f, u.a, v);
                            n.getCurrencyBalance(t.code, t.account, t.symbol).then((function(t) {
                                e(null, t)
                            })).catch((function(t) {
                                e(t, null)
                            }))
                        }
                    }, {
                        key: "getTableRowsAction",
                        value: function(t, e) {
                            var n = r.a.scatter.eos(f, u.a, v);
                            n.getTableRows(t).then((function(t) {
                                e(null, t)
                            })).catch((function(t) {
                                e(t, null)
                            }))
                        }
                    }]), t
                }();
            e["a"] = new m
        },
        "4bfe": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "voteList"
                    }, [n("loading", {
                        attrs: {
                            active: t.isLoading,
                            "can-cancel": !0,
                            "is-full-page": !0,
                            opacity: .2,
                            "background-color": "#fff",
                            color: "#d16c00",
                            loader: "dots"
                        },
                        on: {
                            "update:active": function(e) {
                                t.isLoading = e
                            }
                        }
                    }), n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("vote.vote")))]), t._l(t.proposalList, (function(e, i) {
                        return n("dd", {
                            key: i
                        }, [n("router-link", {
                            attrs: {
                                to: {
                                    path: "/vote/voteDetail",
                                    query: {
                                        id: e.id
                                    }
                                }
                            }
                        }, [n("div", {
                            staticClass: "top"
                        }, [0 === e.state ? n("div", {
                            staticClass: "state1"
                        }, [t._v(t._s(t.$t("vote.notStarted")))]) : t._e(), 1 === e.state ? n("div", {
                            staticClass: "state2"
                        }, [t._v(t._s(t.$t("vote.progress")))]) : t._e(), 2 === e.state ? n("div", {
                            staticClass: "state1"
                        }, [t._v(t._s(t.$t("vote.end")))]) : t._e(), 3 === e.state ? n("div", {
                            staticClass: "state1"
                        }, [t._v(t._s(t.$t("vote.end2")))]) : t._e(), n("div", {
                            staticClass: "title"
                        }, [t._v(t._s(t.getTitle(e)))])])])], 1)
                    })), n("div", {
                        staticClass: "space"
                    })], 2)
                },
                a = [],
                o = n("9062"),
                r = n.n(o),
                s = (n("e40d"), n("01ea")),
                c = n("3783"),
                l = {
                    data: function() {
                        return {
                            isLoading: !1,
                            proposalList: []
                        }
                    },
                    components: {
                        loading: r.a
                    },
                    created: function() {
                        this.requestData()
                    },
                    methods: {
                        getTitle: function(t) {
                            var e = this.$i18n.t("voteText[" + (t.id - 1) + "]");
                            return e.title
                        },
                        requestData: function() {
                            var t = this;
                            this.isLoading = !0;
                            var e = {
                                json: !0,
                                code: s["a"].config.voteContract,
                                scope: s["a"].config.voteContract,
                                table: "proposal",
                                limit: 100
                            };
                            c["a"].getTableRowsAction(e, (function(e, n) {
                                if (t.isLoading = !1, n && 0 !== n.rows.length)
                                    for (var i in t.proposalList = n.rows.reverse(), t.proposalList) {
                                        var a = t.proposalList[i];
                                        if (a.id >= 8) {
                                            var o = (new Date).getTime() / 1e3,
                                                r = a.info.epoch + a.info.duration;
                                            o < a.info.epoch ? t.proposalList[i].state = 0 : o < r ? t.proposalList[i].state = 1 : (a.vote_ratio_req = 0) || a.voted_ratio >= a.vote_ratio_req ? t.proposalList[i].state = 2 : t.proposalList[i].state = 3
                                        }
                                    }
                            }))
                        }
                    }
                },
                u = l,
                d = (n("acc4"), n("2877")),
                f = Object(d["a"])(u, i, a, !1, null, "6c32358b", null);
            e["default"] = f.exports
        },
        9062: function(t, e, n) {
            ! function(e, n) {
                t.exports = n()
            }("undefined" != typeof self && self, (function() {
                return function(t) {
                    var e = {};

                    function n(i) {
                        if (e[i]) return e[i].exports;
                        var a = e[i] = {
                            i: i,
                            l: !1,
                            exports: {}
                        };
                        return t[i].call(a.exports, a, a.exports, n), a.l = !0, a.exports
                    }
                    return n.m = t, n.c = e, n.d = function(t, e, i) {
                        n.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: i
                        })
                    }, n.r = function(t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }, n.t = function(t, e) {
                        if (1 & e && (t = n(t)), 8 & e) return t;
                        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var i = Object.create(null);
                        if (n.r(i), Object.defineProperty(i, "default", {
                                enumerable: !0,
                                value: t
                            }), 2 & e && "string" != typeof t)
                            for (var a in t) n.d(i, a, function(e) {
                                return t[e]
                            }.bind(null, a));
                        return i
                    }, n.n = function(t) {
                        var e = t && t.__esModule ? function() {
                            return t.default
                        } : function() {
                            return t
                        };
                        return n.d(e, "a", e), e
                    }, n.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, n.p = "", n(n.s = 1)
                }([function(t, e, n) {}, function(t, e, n) {
                    "use strict";
                    n.r(e);
                    var i = "undefined" != typeof window ? window.HTMLElement : Object,
                        a = {
                            mounted: function() {
                                this.enforceFocus && document.addEventListener("focusin", this.focusIn)
                            },
                            methods: {
                                focusIn: function(t) {
                                    if (this.isActive && t.target !== this.$el && !this.$el.contains(t.target)) {
                                        var e = this.container ? this.container : this.isFullPage ? null : this.$el.parentElement;
                                        (this.isFullPage || e && e.contains(t.target)) && (t.preventDefault(), this.$el.focus())
                                    }
                                }
                            },
                            beforeDestroy: function() {
                                document.removeEventListener("focusin", this.focusIn)
                            }
                        };

                    function o(t, e, n, i, a, o, r, s) {
                        var c, l = "function" == typeof t ? t.options : t;
                        if (e && (l.render = e, l.staticRenderFns = n, l._compiled = !0), i && (l.functional = !0), o && (l._scopeId = "data-v-" + o), r ? (c = function(t) {
                                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), a && a.call(this, t), t && t._registeredComponents && t._registeredComponents.add(r)
                            }, l._ssrRegister = c) : a && (c = s ? function() {
                                a.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot)
                            } : a), c)
                            if (l.functional) {
                                l._injectStyles = c;
                                var u = l.render;
                                l.render = function(t, e) {
                                    return c.call(e), u(t, e)
                                }
                            } else {
                                var d = l.beforeCreate;
                                l.beforeCreate = d ? [].concat(d, c) : [c]
                            }
                        return {
                            exports: t,
                            options: l
                        }
                    }
                    var r = o({
                            name: "spinner",
                            props: {
                                color: {
                                    type: String,
                                    default: "#000"
                                },
                                height: {
                                    type: Number,
                                    default: 64
                                },
                                width: {
                                    type: Number,
                                    default: 64
                                }
                            }
                        }, (function() {
                            var t = this.$createElement,
                                e = this._self._c || t;
                            return e("svg", {
                                attrs: {
                                    viewBox: "0 0 38 38",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: this.width,
                                    height: this.height,
                                    stroke: this.color
                                }
                            }, [e("g", {
                                attrs: {
                                    fill: "none",
                                    "fill-rule": "evenodd"
                                }
                            }, [e("g", {
                                attrs: {
                                    transform: "translate(1 1)",
                                    "stroke-width": "2"
                                }
                            }, [e("circle", {
                                attrs: {
                                    "stroke-opacity": ".25",
                                    cx: "18",
                                    cy: "18",
                                    r: "18"
                                }
                            }), e("path", {
                                attrs: {
                                    d: "M36 18c0-9.94-8.06-18-18-18"
                                }
                            }, [e("animateTransform", {
                                attrs: {
                                    attributeName: "transform",
                                    type: "rotate",
                                    from: "0 18 18",
                                    to: "360 18 18",
                                    dur: "0.8s",
                                    repeatCount: "indefinite"
                                }
                            })], 1)])])])
                        }), [], !1, null, null, null).exports,
                        s = o({
                            name: "dots",
                            props: {
                                color: {
                                    type: String,
                                    default: "#000"
                                },
                                height: {
                                    type: Number,
                                    default: 240
                                },
                                width: {
                                    type: Number,
                                    default: 60
                                }
                            }
                        }, (function() {
                            var t = this.$createElement,
                                e = this._self._c || t;
                            return e("svg", {
                                attrs: {
                                    viewBox: "0 0 120 30",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: this.color,
                                    width: this.width,
                                    height: this.height
                                }
                            }, [e("circle", {
                                attrs: {
                                    cx: "15",
                                    cy: "15",
                                    r: "15"
                                }
                            }, [e("animate", {
                                attrs: {
                                    attributeName: "r",
                                    from: "15",
                                    to: "15",
                                    begin: "0s",
                                    dur: "0.8s",
                                    values: "15;9;15",
                                    calcMode: "linear",
                                    repeatCount: "indefinite"
                                }
                            }), e("animate", {
                                attrs: {
                                    attributeName: "fill-opacity",
                                    from: "1",
                                    to: "1",
                                    begin: "0s",
                                    dur: "0.8s",
                                    values: "1;.5;1",
                                    calcMode: "linear",
                                    repeatCount: "indefinite"
                                }
                            })]), e("circle", {
                                attrs: {
                                    cx: "60",
                                    cy: "15",
                                    r: "9",
                                    "fill-opacity": "0.3"
                                }
                            }, [e("animate", {
                                attrs: {
                                    attributeName: "r",
                                    from: "9",
                                    to: "9",
                                    begin: "0s",
                                    dur: "0.8s",
                                    values: "9;15;9",
                                    calcMode: "linear",
                                    repeatCount: "indefinite"
                                }
                            }), e("animate", {
                                attrs: {
                                    attributeName: "fill-opacity",
                                    from: "0.5",
                                    to: "0.5",
                                    begin: "0s",
                                    dur: "0.8s",
                                    values: ".5;1;.5",
                                    calcMode: "linear",
                                    repeatCount: "indefinite"
                                }
                            })]), e("circle", {
                                attrs: {
                                    cx: "105",
                                    cy: "15",
                                    r: "15"
                                }
                            }, [e("animate", {
                                attrs: {
                                    attributeName: "r",
                                    from: "15",
                                    to: "15",
                                    begin: "0s",
                                    dur: "0.8s",
                                    values: "15;9;15",
                                    calcMode: "linear",
                                    repeatCount: "indefinite"
                                }
                            }), e("animate", {
                                attrs: {
                                    attributeName: "fill-opacity",
                                    from: "1",
                                    to: "1",
                                    begin: "0s",
                                    dur: "0.8s",
                                    values: "1;.5;1",
                                    calcMode: "linear",
                                    repeatCount: "indefinite"
                                }
                            })])])
                        }), [], !1, null, null, null).exports,
                        c = o({
                            name: "bars",
                            props: {
                                color: {
                                    type: String,
                                    default: "#000"
                                },
                                height: {
                                    type: Number,
                                    default: 40
                                },
                                width: {
                                    type: Number,
                                    default: 40
                                }
                            }
                        }, (function() {
                            var t = this.$createElement,
                                e = this._self._c || t;
                            return e("svg", {
                                attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 30 30",
                                    height: this.height,
                                    width: this.width,
                                    fill: this.color
                                }
                            }, [e("rect", {
                                attrs: {
                                    x: "0",
                                    y: "13",
                                    width: "4",
                                    height: "5"
                                }
                            }, [e("animate", {
                                attrs: {
                                    attributeName: "height",
                                    attributeType: "XML",
                                    values: "5;21;5",
                                    begin: "0s",
                                    dur: "0.6s",
                                    repeatCount: "indefinite"
                                }
                            }), e("animate", {
                                attrs: {
                                    attributeName: "y",
                                    attributeType: "XML",
                                    values: "13; 5; 13",
                                    begin: "0s",
                                    dur: "0.6s",
                                    repeatCount: "indefinite"
                                }
                            })]), e("rect", {
                                attrs: {
                                    x: "10",
                                    y: "13",
                                    width: "4",
                                    height: "5"
                                }
                            }, [e("animate", {
                                attrs: {
                                    attributeName: "height",
                                    attributeType: "XML",
                                    values: "5;21;5",
                                    begin: "0.15s",
                                    dur: "0.6s",
                                    repeatCount: "indefinite"
                                }
                            }), e("animate", {
                                attrs: {
                                    attributeName: "y",
                                    attributeType: "XML",
                                    values: "13; 5; 13",
                                    begin: "0.15s",
                                    dur: "0.6s",
                                    repeatCount: "indefinite"
                                }
                            })]), e("rect", {
                                attrs: {
                                    x: "20",
                                    y: "13",
                                    width: "4",
                                    height: "5"
                                }
                            }, [e("animate", {
                                attrs: {
                                    attributeName: "height",
                                    attributeType: "XML",
                                    values: "5;21;5",
                                    begin: "0.3s",
                                    dur: "0.6s",
                                    repeatCount: "indefinite"
                                }
                            }), e("animate", {
                                attrs: {
                                    attributeName: "y",
                                    attributeType: "XML",
                                    values: "13; 5; 13",
                                    begin: "0.3s",
                                    dur: "0.6s",
                                    repeatCount: "indefinite"
                                }
                            })])])
                        }), [], !1, null, null, null).exports,
                        l = o({
                            name: "vue-loading",
                            mixins: [a],
                            props: {
                                active: Boolean,
                                programmatic: Boolean,
                                container: [Object, Function, i],
                                isFullPage: {
                                    type: Boolean,
                                    default: !0
                                },
                                enforceFocus: {
                                    type: Boolean,
                                    default: !0
                                },
                                lockScroll: {
                                    type: Boolean,
                                    default: !1
                                },
                                transition: {
                                    type: String,
                                    default: "fade"
                                },
                                canCancel: Boolean,
                                onCancel: {
                                    type: Function,
                                    default: function() {}
                                },
                                color: String,
                                backgroundColor: String,
                                blur: {
                                    type: String,
                                    default: "2px"
                                },
                                opacity: Number,
                                width: Number,
                                height: Number,
                                zIndex: Number,
                                loader: {
                                    type: String,
                                    default: "spinner"
                                }
                            },
                            data: function() {
                                return {
                                    isActive: this.active
                                }
                            },
                            components: {
                                Spinner: r,
                                Dots: s,
                                Bars: c
                            },
                            beforeMount: function() {
                                this.programmatic && (this.container ? (this.isFullPage = !1, this.container.appendChild(this.$el)) : document.body.appendChild(this.$el))
                            },
                            mounted: function() {
                                this.programmatic && (this.isActive = !0), document.addEventListener("keyup", this.keyPress)
                            },
                            methods: {
                                cancel: function() {
                                    this.canCancel && this.isActive && (this.hide(), this.onCancel.apply(null, arguments))
                                },
                                hide: function() {
                                    var t = this;
                                    this.$emit("hide"), this.$emit("update:active", !1), this.programmatic && (this.isActive = !1, setTimeout((function() {
                                        var e;
                                        t.$destroy(), void 0 !== (e = t.$el).remove ? e.remove() : e.parentNode.removeChild(e)
                                    }), 150))
                                },
                                disableScroll: function() {
                                    this.isFullPage && this.lockScroll && document.body.classList.add("vld-shown")
                                },
                                enableScroll: function() {
                                    this.isFullPage && this.lockScroll && document.body.classList.remove("vld-shown")
                                },
                                keyPress: function(t) {
                                    27 === t.keyCode && this.cancel()
                                }
                            },
                            watch: {
                                active: function(t) {
                                    this.isActive = t
                                },
                                isActive: function(t) {
                                    t ? this.disableScroll() : this.enableScroll()
                                }
                            },
                            computed: {
                                bgStyle: function() {
                                    return {
                                        background: this.backgroundColor,
                                        opacity: this.opacity,
                                        backdropFilter: "blur(".concat(this.blur, ")")
                                    }
                                }
                            },
                            beforeDestroy: function() {
                                document.removeEventListener("keyup", this.keyPress)
                            }
                        }, (function() {
                            var t = this,
                                e = t.$createElement,
                                n = t._self._c || e;
                            return n("transition", {
                                attrs: {
                                    name: t.transition
                                }
                            }, [n("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.isActive,
                                    expression: "isActive"
                                }],
                                staticClass: "vld-overlay is-active",
                                class: {
                                    "is-full-page": t.isFullPage
                                },
                                style: {
                                    zIndex: t.zIndex
                                },
                                attrs: {
                                    tabindex: "0",
                                    "aria-busy": t.isActive,
                                    "aria-label": "Loading"
                                }
                            }, [n("div", {
                                staticClass: "vld-background",
                                style: t.bgStyle,
                                on: {
                                    click: function(e) {
                                        return e.preventDefault(), t.cancel(e)
                                    }
                                }
                            }), n("div", {
                                staticClass: "vld-icon"
                            }, [t._t("before"), t._t("default", [n(t.loader, {
                                tag: "component",
                                attrs: {
                                    color: t.color,
                                    width: t.width,
                                    height: t.height
                                }
                            })]), t._t("after")], 2)])])
                        }), [], !1, null, null, null).exports,
                        u = function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return {
                                show: function() {
                                    var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
                                        o = {
                                            programmatic: !0
                                        },
                                        r = Object.assign({}, e, i, o),
                                        s = new(t.extend(l))({
                                            el: document.createElement("div"),
                                            propsData: r
                                        }),
                                        c = Object.assign({}, n, a);
                                    return Object.keys(c).map((function(t) {
                                        s.$slots[t] = c[t]
                                    })), s
                                }
                            }
                        };
                    n(0), l.install = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = u(t, e, n);
                        t.$loading = i, t.prototype.$loading = i
                    }, e.default = l
                }]).default
            }))
        },
        acc4: function(t, e, n) {
            "use strict";
            var i = n("d2f7"),
                a = n.n(i);
            a.a
        },
        d2f7: function(t, e, n) {},
        e40d: function(t, e, n) {}
    }
]);