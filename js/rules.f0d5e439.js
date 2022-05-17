(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["rules"], {
        "034d": function(t, s, i) {},
        "0894": function(t, s, i) {
            t.exports = i.p + "img/feature.7a4c12d2.png"
        },
        "0dfb": function(t, s, i) {
            t.exports = i.p + "img/mine_ico2.d27e38c3.png"
        },
        "1d4c": function(t, s, i) {
            "use strict";
            i.r(s);
            var e = function() {
                    var t = this,
                        s = t.$createElement,
                        i = t._self._c || s;
                    return i("div", {
                        staticClass: "inner"
                    }, [i("banner", [i("template", {
                        slot: "title"
                    }, [t._v(" " + t._s(t.$t("rules.title")) + " ")])], 2), i("div", {
                        staticClass: "tips"
                    }, [t._v(t._s(t.$t("rules.tips")))]), i("div", {
                        staticClass: "rules"
                    }, [
                    //     i("div", {
                    //     staticClass: "des"
                    // }, [t._v(t._s(t.$t("rules.text")))]), 
                        i("div", {
                        domProps: {
                            innerHTML: t._s(t.$t("rules.text"))
                        }
                        }),
                        i("div", {
                        domProps: {
                            innerHTML: t._s(t.$t("rules.content"))
                        }
                        }), 
                        i("div", {
                        staticClass: "slowmist"
                    }, [t._v(t._s(t.$t("rules.slowmist")))])])], 1)
                },
                n = [],
                a = i("b9ad"),
                c = {
                    components: {
                        banner: a["a"]
                    },
                    data: function() {
                        return {}
                    },
                    created: function() {},
                    computed: {},
                    methods: {}
                },
                o = c,
                r = (i("4fc6"), i("2877")),
                l = Object(r["a"])(o, e, n, !1, null, "53bdba21", null);
            s["default"] = l.exports
        },
        "3cf4": function(t, s, i) {
            t.exports = i.p + "img/mine_ico1.01b9c0ad.png"
        },
        "3f6d": function(t, s, i) {},
        "4fc6": function(t, s, i) {
            "use strict";
            var e = i("034d"),
                n = i.n(e);
            n.a
        },
        6234: function(t, s, i) {
            t.exports = i.p + "img/mine_ico3.06722ed3.png"
        },
        "7a80": function(t, s, i) {
            "use strict";
            var e = i("3f6d"),
                n = i.n(e);
            n.a
        },
        b9ad: function(t, s, i) {
            "use strict";
            var e = function() {
                    var t = this,
                        s = t.$createElement,
                        e = t._self._c || s;
                    return e("div", {
                        staticClass: "slogan"
                    }, ["VEX" == t.coin ? e("div", {
                        staticClass: "image"
                    }, [e("img", {
                        attrs: {
                            alt: "",
                            src: i("3cf4")
                        }
                    })]) : "USDV" == t.coin ? e("div", {
                        staticClass: "image"
                    }, [e("img", {
                        attrs: {
                            alt: "",
                            src: i("0dfb")
                        }
                    })]) : "VYN" == t.coin ? e("div", {
                        staticClass: "image"
                    }, [e("img", {
                        attrs: {
                            alt: "",
                            src: i("6234")
                        }
                    })]) : "DJV" == t.coin ? n("div", {
                        staticClass: "image"
                    }, [n("img", {
                        attrs: {
                            alt: "",
                            src: i("814b")
                        }
                    })]) : e("div", {
                        staticClass: "image"
                    }, [e("img", {
                        attrs: {
                            alt: "",
                            src: i("0894")
                        }
                    })]), e("div", {
                        staticClass: "title"
                    }, [t._t("title"), t.$slots.beta ? e("div", {
                        staticClass: "beta"
                    }, [t._t("beta")], 2) : t._e()], 2), t.$slots.conent ? e("div", {
                        staticClass: "conent"
                    }, [t._t("conent")], 2) : t._e()])
                },
                n = [],
                a = {
                    data: function() {
                        return {
                            coin: this.$route.query.coin
                        }
                    },
                    methods: {}
                },
                c = a,
                o = (i("7a80"), i("2877")),
                r = Object(o["a"])(c, e, n, !1, null, "04589b4e", null);
            s["a"] = r.exports
        }
    }
]);