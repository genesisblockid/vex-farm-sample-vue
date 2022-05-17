/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["mine", "chunk-2d0aec89"], {
        "0163": function(t, e, s) {
            t.exports = s.p + "img/mine_ico9.ac262c17.png"
        },
        "01c5": function(t, e, s) {
            "use strict";
            s.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "inner"
                    }, [s("banner", [s("template", {
                        slot: "title"
                    }, [t._v(" YFC/VEX LP " + t._s(t.$t("mineDetail.title")) + " ")]), s("template", {
                        slot: "conent"
                    }, [t._v(" " + t._s(t.$t("mineDetail2.conentyfc")) + " ")])], 2), s("div", {
                        staticClass: "detail"
                    }, [s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "tokensItem"
                    }, [s("div", {
                        staticClass: "info"
                    }, [t._m(0), s("strong", [t._v(t._s(t.my))]), s("p", [t._v(t._s(t.$t("mineDetail.has")))])]), s("div", {
                        staticClass: "bottom"
                    }, [t.collectDmd ? s("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: function(e) {
                                return t.harvestBtn()
                            }
                        }
                    }, [t._v(t._s(t.$t("mineDetail.collect")))]) : s("a", {
                        staticClass: "desbled",
                        attrs: {
                            href: "javascript:;"
                        }
                    }, [t._v(t._s(t.$t("mineDetail.collect")))])])])]), s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "tokensItem"
                    }, [s("div", {
                        staticClass: "info"
                    }, [t._m(1), s("strong", [t._v(t._s(t.staked))]), s("p", [t._v(t._s(t.$t("mineDetail2.pledged")))])]), s("div", {
                        staticClass: "bottom"
                    }, [s("a", {
                        attrs: {
                            href: "https://apps.defis.network/market/329",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.$t("mineDetail2.buttom")))])])])])])], 1)
                },
                n = [function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("cfe5")
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("cf66")
                        }
                    })])
                }],
                a = (s("c975"), s("b0c0"), s("f3f3")),
                c = s("2f62"),
                o = s("b9ad"),
                r = {
                    components: {
                        banner: o["a"]
                    },
                    data: function() {
                        return {
                            coin: this.$route.query.coin,
                            my: "0.0000",
                            staked: "0",
                            collectDmd: !1,
                            interval: null
                        }
                    },
                    computed: Object(a["a"])({}, Object(c["b"])({
                        yfc: function(t) {
                            return t.setting.yfc
                        },
                        name: function(t) {
                            return t.user.name
                        }
                    })),
                    created: function() {
                        this.name ? this.nowRefreshData() : this.refreshData(), this.timeAll()
                    },
                    methods: {
                        refreshData: function() {
                            var t = this;
                            setTimeout((function() {
                                t.getMyDMD()//, t.getMyYFCnew()
                            }), 3e3)
                        },
                        nowRefreshData: function() {
                            this.getMyDMD()//, this.getMyYFCnew()
                        },
                        timeAll: function() {
                            var t = this;
                            this.interval = window.setInterval((function() {
                                t.name && t.nowRefreshData()
                            }), 1e4)
                        },
                        getMyDMD: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.yfc
                                };
                            this.$store.dispatch("queryMyPoolInfo", e).then((function(e) {
                                if (0 != e.rows.length) {
                                    t.my = e.rows[0].unclaimed;
                                    var s = t.my.substring(0, t.my.indexOf(".") + 11);
                                    1e5 * s > 0 && (t.collectDmd = !0)
                                } else t.my = "0.0000"
                            })).catch((function(t) {}))
                        },
                        getMyYFCnew: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.yfc
                                };
                            this.$store.dispatch("queryMyLPPoolInfo", e).then((function(e) {
                                0 != e.rows.length ? t.staked = e.rows[0].token : t.staked = "0"
                            })).catch((function(t) {}))
                        },
                        harvestBtn: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.yfc
                                };
                            this.$store.dispatch("UserGetReward", e).then((function(e) {
                                t.$message({
                                    message: t.$t("message.harvest"),
                                    type: "success"
                                }), t.nowRefreshData(), setTimeout((function() {
                                    t.nowRefreshData()
                                }), 2e3)
                            })).catch((function(t) {}))
                        }
                    },
                    destroyed: function() {
                        window.clearInterval(this.interval)
                    }
                },
                l = r,
                m = (s("ed9d"), s("2877")),
                u = Object(m["a"])(l, i, n, !1, null, "1c9e5057", null);
            e["default"] = u.exports
        },
        "0c11": function(t, e, s) {
            "use strict";
            s.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("router-view")
                },
                n = [],
                a = {
                    name: "page",
                    data: function() {
                        return {}
                    }
                },
                c = a,
                o = s("2877"),
                r = Object(o["a"])(c, i, n, !1, null, null, null);
            e["default"] = r.exports
        },
        "24b2": function(t, e, s) {},
        "2dcc": function(t, e, s) {
            "use strict";
            var i = s("4b9a"),
                n = s.n(i);
            n.a
        },
        "30d2": function(t, e, s) {
            "use strict";
            s.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "inner"
                    }, [s("banner", [s("template", {
                        slot: "title"
                    }, [t._v(" WOOL/VEX LP " + t._s(t.$t("mineDetail.title")) + " ")]), s("template", {
                        slot: "conent"
                    }, [t._v(" " + t._s(t.$t("mineDetail2.conentwool")) + " ")])], 2), s("div", {
                        staticClass: "detail"
                    }, [s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "tokensItem"
                    }, [s("div", {
                        staticClass: "info"
                    }, [t._m(0), s("strong", [t._v(t._s(t.my))]), s("p", [t._v(t._s(t.$t("mineDetail.has")))])]), s("div", {
                        staticClass: "bottom"
                    }, [t.collectDmd ? s("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: function(e) {
                                return t.harvestBtn()
                            }
                        }
                    }, [t._v(t._s(t.$t("mineDetail.collect")))]) : s("a", {
                        staticClass: "desbled",
                        attrs: {
                            href: "javascript:;"
                        }
                    }, [t._v(t._s(t.$t("mineDetail.collect")))])])])]), s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "tokensItem"
                    }, [s("div", {
                        staticClass: "info"
                    }, [t._m(1), s("strong", [t._v(t._s(t.staked))]), s("p", [t._v(t._s(t.$t("mineDetail2.pledged")))])]), s("div", {
                        staticClass: "bottom"
                    }, [s("a", {
                        attrs: {
                            href: "https://dolphinswap.io/market/24",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.$t("mineDetail2.buttom")))])])])])])], 1)
                },
                n = [function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("cfe5")
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("c9a8")
                        }
                    })])
                }],
                a = (s("c975"), s("b0c0"), s("f3f3")),
                c = s("2f62"),
                o = s("b9ad"),
                r = {
                    components: {
                        banner: o["a"]
                    },
                    data: function() {
                        return {
                            coin: this.$route.query.coin,
                            my: "0.0000",
                            staked: "0",
                            collectDmd: !1,
                            interval: null
                        }
                    },
                    computed: Object(a["a"])({}, Object(c["b"])({
                        woollp: function(t) {
                            return t.setting.woollp
                        },
                        name: function(t) {
                            return t.user.name
                        }
                    })),
                    created: function() {
                        this.name ? this.nowRefreshData() : this.refreshData(), this.timeAll()
                    },
                    methods: {
                        refreshData: function() {
                            var t = this;
                            setTimeout((function() {
                                t.getMyDMD()//, t.getMyWOOLnew()
                            }), 3e3)
                        },
                        nowRefreshData: function() {
                            this.getMyDMD()//, this.getMyWOOLnew()
                        },
                        timeAll: function() {
                            var t = this;
                            this.interval = window.setInterval((function() {
                                t.name && t.nowRefreshData()
                            }), 1e4)
                        },
                        getMyDMD: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.woollp
                                };
                            this.$store.dispatch("queryMyPoolInfo", e).then((function(e) {
                                if (0 != e.rows.length) {
                                    t.my = e.rows[0].unclaimed;
                                    var s = t.my.substring(0, t.my.indexOf(".") + 11);
                                    1e5 * s > 0 && (t.collectDmd = !0)
                                } else t.my = "0.0000"
                            })).catch((function(t) {}))
                        },
                        getMyWOOLnew: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.woollp
                                };
                            this.$store.dispatch("queryMyLPPoolInfo", e).then((function(e) {
                                0 != e.rows.length ? t.staked = e.rows[0].token : t.staked = "0"
                            })).catch((function(t) {}))
                        },
                        harvestBtn: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.woollp
                                };
                            this.$store.dispatch("UserGetReward", e).then((function(e) {
                                t.$message({
                                    message: t.$t("message.harvest"),
                                    type: "success"
                                }), t.nowRefreshData(), setTimeout((function() {
                                    t.nowRefreshData()
                                }), 2e3)
                            })).catch((function(t) {}))
                        }
                    },
                    destroyed: function() {
                        window.clearInterval(this.interval)
                    }
                },
                l = r,
                m = (s("aa59"), s("2877")),
                u = Object(m["a"])(l, i, n, !1, null, "7e064e13", null);
            e["default"] = u.exports
        },
        4507: function(t, e, s) {
            t.exports = s.p + "img/mine_ico4.5a31a5b7.png"
        },
        "4b9a": function(t, e, s) {},
        "5b27": function(t, e, s) {
            "use strict";
            s.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "inner"
                    }, [s("banner", [s("template", {
                        slot: "title"
                    }, [t._v(" TUYUL/VEX LP " + t._s(t.$t("mineDetail.title")) + " ")]), s("template", {
                        slot: "conent"
                    }, [t._v(" " + t._s(t.$t("mineDetail2.conent")) + " ")])], 2), s("div", {
                        staticClass: "detail"
                    }, [s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "tokensItem"
                    }, [s("div", {
                        staticClass: "info"
                    }, [t._m(0), s("strong", [t._v(t._s(t.my))]), s("p", [t._v(t._s(t.$t("mineDetail.has")))])]), s("div", {
                        staticClass: "bottom"
                    }, [t.collectDmd ? s("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: function(e) {
                                return t.harvestBtn()
                            }
                        }
                    }, [t._v(t._s(t.$t("mineDetail.collect")))]) : s("a", {
                        staticClass: "desbled",
                        attrs: {
                            href: "javascript:;"
                        }
                    }, [t._v(t._s(t.$t("mineDetail.collect")))])])])]), s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "tokensItem"
                    }, [s("div", {
                        staticClass: "info"
                    }, [t._m(1), s("strong", [t._v(t._s(t.staked))]), s("p", [t._v(t._s(t.$t("mineDetail2.pledged")))])]), s("div", {
                        staticClass: "bottom"
                    }, [s("a", {
                        attrs: {
                            href: "https://apps.defis.network/market/326",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.$t("mineDetail2.buttom")))])])])])])], 1)
                },
                n = [function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("cfe5")
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("f2cc")
                        }
                    })])
                }],
                a = (s("c975"), s("b0c0"), s("f3f3")),
                c = s("2f62"),
                o = s("b9ad"),
                r = {
                    components: {
                        banner: o["a"]
                    },
                    data: function() {
                        return {
                            coin: this.$route.query.coin,
                            my: "0.0000",
                            staked: "0",
                            collectDmd: !1,
                            interval: null
                        }
                    },
                    computed: Object(a["a"])({}, Object(c["b"])({
                        dmd: function(t) {
                            return t.setting.dmd
                        },
                        name: function(t) {
                            return t.user.name
                        }
                    })),
                    created: function() {
                        this.name ? this.nowRefreshData() : this.refreshData(), this.timeAll()
                    },
                    methods: {
                        refreshData: function() {
                            var t = this;
                            setTimeout((function() {
                                t.getMyDMD()//, t.getMyDMDnew()
                            }), 3e3)
                        },
                        nowRefreshData: function() {
                            this.getMyDMD()//, this.getMyDMDnew()
                        },
                        timeAll: function() {
                            var t = this;
                            this.interval = window.setInterval((function() {
                                t.name && t.nowRefreshData()
                            }), 1e4)
                        },
                        getMyDMD: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.dmd
                                };
                            this.$store.dispatch("queryMyPoolInfo", e).then((function(e) {
                                if (0 != e.rows.length) {
                                    t.my = e.rows[0].unclaimed;
                                    var s = t.my.substring(0, t.my.indexOf(".") + 11);
                                    1e5 * s > 0 && (t.collectDmd = !0)
                                } else t.my = "0.0000"
                            })).catch((function(t) {}))
                        },
                        getMyDMDnew: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.dmd
                                };
                            this.$store.dispatch("queryMyLPPoolInfo", e).then((function(e) {
                                0 != e.rows.length ? t.staked = e.rows[0].token : t.staked = "0"
                            })).catch((function(t) {}))
                        },
                        harvestBtn: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.dmd
                                };
                            this.$store.dispatch("UserGetReward", e).then((function(e) {
                                t.$message({
                                    message: t.$t("message.harvest"),
                                    type: "success"
                                }), t.nowRefreshData(), setTimeout((function() {
                                    t.nowRefreshData()
                                }), 2e3)
                            })).catch((function(t) {}))
                        }
                    },
                    destroyed: function() {
                        window.clearInterval(this.interval)
                    }
                },
                l = r,
                m = (s("bd30"), s("2877")),
                u = Object(m["a"])(l, i, n, !1, null, "3d60aab5", null);
            e["default"] = u.exports
        },
        "601e": function(t, e, s) {
            "use strict";
            var i = s("eace"),
                n = s.n(i);
            n.a
        },
        "64f2": function(t, e, s) {
            "use strict";
            s.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "inner"
                    }, [i("banner", [i("template", {
                        slot: "title"
                    }, [t._v(" " + t._s(t.coin) + " " + t._s(t.$t("mineDetail.title")) + " ")]), i("template", {
                        slot: "conent"
                    }, [t._v(" " + t._s(t.$t("mineDetail.deposit")) + " " + t._s(t.coin) + " " + t._s(t.$t("mineDetail.deposit2")) + " ")])], 2), i("div", {
                        staticClass: "detail"
                    }, [i("div", {
                        staticClass: "item"
                    }, [i("div", {
                        staticClass: "tokensItem"
                    }, [i("div", {
                        staticClass: "info"
                    }, [t._m(0), i("strong", [t._v(t._s(t.my))]), i("p", [t._v(t._s(t.$t("mineDetail.has")))])]), i("div", {
                        staticClass: "bottom"
                    }, [t.collectDmd ? i("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: function(e) {
                                return t.harvestBtn()
                            }
                        }
                    }, [t._v(t._s(t.$t("mineDetail.collect")))]) : i("a", {
                        staticClass: "desbled",
                        attrs: {
                            href: "javascript:;"
                        }
                    }, [t._v(t._s(t.$t("mineDetail.collect")))])])])]), i("div", {
                        staticClass: "item"
                    }, [i("div", {
                        staticClass: "tokensItem"
                    }, [i("div", {
                        staticClass: "info"
                    }, [i("i", {
                        staticClass: "thumb"
                    }, ["VEX" == t.coin ? i("img", {
                        attrs: {
                            alt: "",
                            src: s("3cf4")
                        }
                    }) : t._e(), "USDV" == t.coin ? i("img", {
                        attrs: {
                            alt: "",
                            src: s("0dfb")
                        }
                    }) : t._e(), "VYN" == t.coin ? i("img", {
                        attrs: {
                            alt: "",
                            src: s("6234")
                        }
                    }) : t._e(), "DJV" == t.coin ? i("img", {
                        attrs: {
                            alt: "",
                            src: s("814b")
                        }
                    }) : t._e()]), 
                    //已抵押
                    i("strong", [t._v(t._s(t.staked))]), 
                    i("p", [t._v(t._s(t.coin) + " " + t._s(t.$t("mineDetail.pledged")))]), 
                    i("div", {
                        staticClass: "account"
                    }, [t._v(" " + t._s(t.$t("mineDetail.balance")) + ": " + t._s(t.myToken) + " " + t._s(t.coin) + " "), 
                    i("div", {
                        staticClass: "form"
                    }, [i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.betting,
                            expression: "betting"
                        }],
                        attrs: {
                            type: "number"
                        },
                        domProps: {
                            value: t.betting
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.betting = e.target.value)
                            }
                        }
                    }), i("button", {
                        staticClass: "btn",
                        on: {
                            click: t.eosMaximum
                        }
                    }, [t._v(t._s(t.$t("mineDetail.max")))])])])]), i("div", {
                        staticClass: "bottom"
                    }, [i("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: function(e) {
                                return t.pledgeBtn()
                            }
                        }
                    }, [t._v(t._s(t.$t("mineDetail.pledge")) + " " + t._s(t.coin))])])])])]), i("div", {
                        staticClass: "detailBottom"
                    }, [i("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: function(e) {
                                return t.DecompressBtn()
                            }
                        }
                    }, [t._v(t._s(t.$t("mineDetail.btn")))])])], 1)
                },
                n = [function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("cfe5")
                        }
                    })])
                }],
                a = (s("c975"), s("b0c0"), s("f3f3")),
                c = s("2f62"),
                o = s("b9ad"),
                r = {
                    components: {
                        banner: o["a"]
                    },
                    data: function() {
                        return {
                            coin: this.$route.query.coin,
                            betting: "",
                            my: "0.0000",
                            staked: "0.0000",
                            collectDmd: !1,
                            myToken: "",
                            interval: null
                        }
                    },
                    computed: Object(a["a"])({}, Object(c["b"])({
                        eos: function(t) {
                            return t.setting.eos
                        },
                        usdt: function(t) {
                            return t.setting.usdt
                        },
                        ogx: function(t) {
                            return t.setting.ogx
                        },
                        hub: function(t) {
                            return t.setting.hub
                        },
                        name: function(t) {
                            return t.user.name
                        }
                    })),
                    created: function() {
                        this.name ? this.nowRefreshData() : this.refreshData(), this.timeAll()
                    },
                    methods: {
                        refreshData: function() {
                            var t = this;
                            "VEX" == this.coin ? setTimeout((function() {
                                t.getMyEos()
                            }), 3e3) : "USDV" == this.coin ? setTimeout((function() {
                                t.getMyUsdt()
                            }), 3e3) : "VYN" == this.coin ? setTimeout((function() {
                                t.getMyOgx()
                            }), 3e3) : setTimeout((function() {
                                t.getMyHub()
                            }), 3e3), setTimeout((function() {
                                t.getToken(t.coin)
                            }), 3e3)
                        },
                        nowRefreshData: function() {
                            "VEX" == this.coin ? this.getMyEos() : "USDV" == this.coin ? this.getMyUsdt() : "VYN" == this.coin ? this.getMyOgx() : this.getMyHub(), this.getToken(this.coin)
                        },
                        timeAll: function() {
                            var t = this;
                            this.interval = window.setInterval((function() {
                                t.name && t.nowRefreshData()
                            }), 1e4)
                        },
                        eosMaximum: function() {
                            this.myToken < 0 || (this.betting = this.myToken)
                        },
                        getMyEos: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.eos
                                };
                            this.$store.dispatch("queryMyPoolInfo", e).then((function(e) {
                                if (0 != e.rows.length) {
                                    t.my = e.rows[0].vex_bonus;//available_bonus
                                    var s = t.my.substring(0, t.my.indexOf(".") + 11);
                                    1e5 * s > 0 && (t.collectDmd = !0), t.staked = e.rows[0].vex_stake
                                } else t.my = "0.0000"
                            })).catch((function(t) {}))
                        },
                        getMyUsdt: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.usdt
                                };
                            this.$store.dispatch("queryMyPoolInfo", e).then((function(e) {
                                if (0 != e.rows.length) {
                                    t.my = e.rows[0].usdv_bonus;//available_bonus
                                    var s = t.my.substring(0, t.my.indexOf(".") + 11);
                                    1e5 * s > 0 && (t.collectDmd = !0), t.staked = e.rows[0].usdv_stake
                                } else t.my = "0.0000"
                            })).catch((function(t) {}))
                        },
                        getMyOgx: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.ogx
                                };
                            this.$store.dispatch("queryMyPoolInfo", e).then((function(e) {
                                if (0 != e.rows.length) {
                                    t.my = e.rows[0].vyn_bonus;//available_bonus
                                    var s = t.my.substring(0, t.my.indexOf(".") + 11);
                                    1e5 * s > 0 && (t.collectDmd = !0), t.staked = e.rows[0].vyn_stake
                                } else t.my = "0.0000"
                            })).catch((function(t) {}))
                        },
                        getMyHub: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.hub
                                };
                            this.$store.dispatch("queryMyPoolInfo", e).then((function(e) {
                                if (0 != e.rows.length) {
                                    t.my = e.rows[0].djv_bonus;//available_bonus
                                    var s = t.my.substring(0, t.my.indexOf(".") + 11);
                                    1e5 * s > 0 && (t.collectDmd = !0), t.staked = e.rows[0].djv_stake
                                } else t.my = "0.0000"
                            })).catch((function(t) {}))
                        },
                        getToken: function(t) {
                            var e = this,
                                s = {
                                    accountName: this.name
                                };
                            "VEX" == this.coin ? s.pool = this.eos : s.pool = "USDV" == t ? this.usdt : "VYN" == t ? this.ogx : this.hub, this.$store.dispatch("mySTokenBalance", s).then((function(t) {
                                0 != t.length && (e.myToken = t[0])
                            })).catch((function(t) {}))
                        },
                        pledgeBtn: function() {
                            var t = this;
                            if ("" != this.betting) {
                                if ("VEX" == this.coin) {
                                    if (this.betting < 100) return void this.$message({
                                        message: "Stake 100 VEX at least",
                                        type: "warning"
                                    })
                                } else if ("USDV" == this.coin) {
                                    if (this.betting < 0.1) return void this.$message({
                                        message: "Stake 0.1 USDV at least",
                                        type: "warning"
                                    })
                                } else if ("VYN" == this.coin) {
                                    if (this.betting < 0.1) return void this.$message({
                                        message: "Stake 0.1 VYN at least",
                                        type: "warning"
                                    })
                                } else if (this.betting < 0.0001) return void this.$message({
                                    message: "Stake 0.0001 DJV at least",
                                    type: "warning"
                                });
                                var e = {
                                    accountName: this.name,
                                    amount: this.betting
                                };
                                "VEX" == this.coin ? e.pool = this.eos : "USDV" == this.coin ? e.pool = this.usdt : "VYN" == this.coin ? e.pool = this.ogx : e.pool = this.hub, this.$store.dispatch("UserStake", e).then((function(e) {
                                    void 0 != e && t.$message({
                                        message: t.$t("message.stake"),
                                        type: "success"
                                    }), t.nowRefreshData(), setTimeout((function() {
                                        t.nowRefreshData()
                                    }), 2e3), setTimeout((function() {
                                        t.nowRefreshData()
                                    }), 4e3), t.betting = ""
                                })).catch((function(t) {}))
                            } else this.$message({
                                message: "Stake Cannot be empty",
                                type: "warning"
                            })
                        },
                        DecompressBtn: function() {
                            var t = this,
                                e = {
                                    accountName: this.name
                                };
                            "VEX" == this.coin ? e.pool = this.eos : "USDV" == this.coin ? e.pool = this.usdt : "VYN" == this.coin ? e.pool = this.ogx : e.pool = this.hub, this.$store.dispatch("UserExitPool", e).then((function(e) {
                                void 0 != e && t.$message({
                                    message: t.$t("message.exit"),
                                    type: "success"
                                }), t.nowRefreshData(), setTimeout((function() {
                                    t.nowRefreshData()
                                }), 2e3), setTimeout((function() {
                                    t.nowRefreshData()
                                }), 4e3)
                            })).catch((function(t) {}))
                        },
                        harvestBtn: function() {
                            var t = this,
                                e = {
                                    accountName: this.name
                                };
                            "VEX" == this.coin ? e.pool = this.eos : "USDV" == this.coin ? e.pool = this.usdt : "VYN" == this.coin ? e.pool = this.ogx : e.pool = this.hub, this.$store.dispatch("UserGetReward", e).then((function(e) {
                                void 0 != e && t.$message({
                                    message: t.$t("message.harvest"),
                                    type: "success"
                                }), t.nowRefreshData(), setTimeout((function() {
                                    t.nowRefreshData()
                                }), 2e3), setTimeout((function() {
                                    t.nowRefreshData()
                                }), 4e3)
                            })).catch((function(t) {}))
                        }
                    },
                    destroyed: function() {
                        window.clearInterval(this.interval)
                    }
                },
                l = r,
                m = (s("2dcc"), s("2877")),
                u = Object(m["a"])(l, i, n, !1, null, "64733363", null);
            e["default"] = u.exports
        },
        6504: function(t, e, s) {},
        "814b": function(t, e, s) {
            t.exports = s.p + "img/mine_ico7.650f1285.png"
        },
        8750: function(t, e, s) {
            "use strict";
            var i = s("24b2"),
                n = s.n(i);
            n.a
        },
        "90a6": function(t, e, s) {},
        a3eb: function(t, e, s) {
            "use strict";
            s.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "inner"
                    }, [s("banner", [s("template", {
                        slot: "title"
                    }, [t._v(" DFS/VEX LP " + t._s(t.$t("mineDetail.title")) + " ")]), s("template", {
                        slot: "conent"
                    }, [t._v(" " + t._s(t.$t("mineDetail2.conentdfs")) + " ")])], 2), s("div", {
                        staticClass: "detail"
                    }, [s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "tokensItem"
                    }, [s("div", {
                        staticClass: "info"
                    }, [t._m(0), s("strong", [t._v(t._s(t.my))]), s("p", [t._v(t._s(t.$t("mineDetail.has")))])]), s("div", {
                        staticClass: "bottom"
                    }, [t.collectDmd ? s("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: function(e) {
                                return t.harvestBtn()
                            }
                        }
                    }, [t._v(t._s(t.$t("mineDetail.collect")))]) : s("a", {
                        staticClass: "desbled",
                        attrs: {
                            href: "javascript:;"
                        }
                    }, [t._v(t._s(t.$t("mineDetail.collect")))])])])]), s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "tokensItem"
                    }, [s("div", {
                        staticClass: "info"
                    }, [t._m(1), s("strong", [t._v(t._s(t.staked))]), s("p", [t._v(t._s(t.$t("mineDetail2.pledged")))])]), s("div", {
                        staticClass: "bottom"
                    }, [s("a", {
                        attrs: {
                            href: "https://apps.defis.network/market/39",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.$t("mineDetail2.buttom")))])])])])])], 1)
                },
                n = [function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("cfe5")
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("0163")
                        }
                    })])
                }],
                a = (s("c975"), s("b0c0"), s("f3f3")),
                c = s("2f62"),
                o = s("b9ad"),
                r = {
                    components: {
                        banner: o["a"]
                    },
                    data: function() {
                        return {
                            coin: this.$route.query.coin,
                            my: "0.0000",
                            staked: "0",
                            collectDmd: !1,
                            interval: null
                        }
                    },
                    computed: Object(a["a"])({}, Object(c["b"])({
                        dfslp: function(t) {
                            return t.setting.dfslp
                        },
                        name: function(t) {
                            return t.user.name
                        }
                    })),
                    created: function() {
                        this.name ? this.nowRefreshData() : this.refreshData(), this.timeAll()
                    },
                    methods: {
                        refreshData: function() {
                            var t = this;
                            setTimeout((function() {
                                t.getMyDMD()//, t.getMyDFSnew()
                            }), 3e3)
                        },
                        nowRefreshData: function() {
                            this.getMyDMD()//, this.getMyDFSnew()
                        },
                        timeAll: function() {
                            var t = this;
                            this.interval = window.setInterval((function() {
                                t.name && t.nowRefreshData()
                            }), 1e4)
                        },
                        getMyDMD: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.dfslp
                                };
                            this.$store.dispatch("queryMyPoolInfo", e).then((function(e) {
                                if (0 != e.rows.length) {
                                    t.my = e.rows[0].unclaimed;
                                    var s = t.my.substring(0, t.my.indexOf(".") + 11);
                                    1e5 * s > 0 && (t.collectDmd = !0)
                                } else t.my = "0.0000"
                            })).catch((function(t) {}))
                        },
                        getMyDFSnew: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.dfslp
                                };
                            this.$store.dispatch("queryMyLPPoolInfo", e).then((function(e) {
                                0 != e.rows.length ? t.staked = e.rows[0].token : t.staked = "0"
                            })).catch((function(t) {}))
                        },
                        harvestBtn: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.dfslp
                                };
                            this.$store.dispatch("UserGetReward", e).then((function(e) {
                                t.$message({
                                    message: t.$t("message.harvest"),
                                    type: "success"
                                }), t.nowRefreshData(), setTimeout((function() {
                                    t.nowRefreshData()
                                }), 2e3)
                            })).catch((function(t) {}))
                        }
                    },
                    destroyed: function() {
                        window.clearInterval(this.interval)
                    }
                },
                l = r,
                m = (s("e02a"), s("2877")),
                u = Object(m["a"])(l, i, n, !1, null, "61d4d36c", null);
            e["default"] = u.exports
        },
        aa59: function(t, e, s) {
            "use strict";
            var i = s("b9df"),
                n = s.n(i);
            n.a
        },
        b5b1: function(t, e, s) {
            "use strict";
            s.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "inner"
                    }, [s("banner", [s("template", {
                        slot: "title"
                    }, [t._v(" " + t._s(t.$t("mine.title")) + " ")]), s("template", {
                        slot: "conent"
                    }, [t._v(" " + t._s(t.$t("mine.tips")) + " ")])], 2), s("div", {
                        staticClass: "mine"
                    }, [
                
                    s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "tokensItem"
                    }, [s("div", {
                        staticClass: "times"
                    }, [
                        s("span", {
                            staticClass: "timesWrap"
                        }, [s("lksCountDown", {
                            attrs: {
                                endDate: "2021-06-14 12:00:00"
                            }
                        })], 1)
                    ]), s("div", {
                        staticClass: "info"
                    }, [t._m(6), s("strong", [t._v("VEX")]), s("p", [t._v(t._s(t.$t("mine.deposit")) + " VEX")]), s("p", [t._v(t._s(t.$t("mine.gain")))])]), s("div", {
                        staticClass: "bottom"
                    }, [s("router-link", {
                        attrs: {
                            to: {
                                path: "/mine/detail",
                                query: {
                                    coin: "VEX"
                                }
                            }
                        }
                    }, [t._v(t._s(t.$t("mine.select")))])], 1)])]), 
                    
                    s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "tokensItem"
                    }, [s("div", {
                        staticClass: "times"
                    }, [
                        s("span", {
                            staticClass: "timesWrap"
                        }, [s("lksCountDown", {
                            attrs: {
                                endDate: "2021-06-14 12:00:00"
                            }
                        })], 1)
                    ]), s("div", {
                        staticClass: "info"
                    }, [t._m(7), s("strong", [t._v("USDV")]), s("p", [t._v(t._s(t.$t("mine.deposit")) + " USDV")]), s("p", [t._v(t._s(t.$t("mine.gain")))])]), s("div", {
                        staticClass: "bottom"
                    }, [s("router-link", {
                        attrs: {
                            to: {
                                path: "/mine/detail",
                                query: {
                                    coin: "USDV"
                                }
                            }
                        }
                    }, [t._v(t._s(t.$t("mine.select")))])], 1)])]), 
                    
                    s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "tokensItem"
                    }, [s("div", {
                        staticClass: "times"
                    }, [
                        s("span", {
                            staticClass: "timesWrap"
                        }, [s("lksCountDown", {
                            attrs: {
                                endDate: "2021-06-14 12:00:00"
                            }
                        })], 1)
                    ]), s("div", {
                        staticClass: "info"
                    }, [t._m(8), s("strong", [t._v("VYN")]), s("p", [t._v(t._s(t.$t("mine.deposit")) + " VYN")]), s("p", [t._v(t._s(t.$t("mine.gain")))])]), s("div", {
                        staticClass: "bottom"
                    }, [s("router-link", {
                        attrs: {
                            to: {
                                path: "/mine/detail",
                                query: {
                                    coin: "VYN"
                                }
                            }
                        }
                    }, [t._v(t._s(t.$t("mine.select")))])], 1)])]),

                    s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "tokensItem"
                    }, [s("div", {
                        staticClass: "times"
                    }, [
                        s("span", {
                            staticClass: "timesWrap"
                        }, [s("lksCountDown", {
                            attrs: {
                                endDate: "2021-06-14 12:00:00"
                            }
                        })], 1)
                    ]), s("div", {
                        staticClass: "info"
                    }, [t._m(5), s("strong", [t._v("DJV")]), s("p", [t._v(t._s(t.$t("mine.deposit")) + " DJV")]), s("p", [t._v(t._s(t.$t("mine.gain")))])]), s("div", {
                        staticClass: "bottom"
                    }, [s("router-link", {
                        attrs: {
                            to: {
                                path: "/mine/detail",
                                query: {
                                    coin: "DJV"
                                }
                            }
                        }
                    }, [t._v(t._s(t.$t("mine.select")))])], 1)])])
                ])], 1)
                },
                n = [function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("814b")
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("c9a8")
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("0163")
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("cf66")
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("f2cc")
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("814b")
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("3cf4")
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("0dfb")
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("6234")
                        }
                    })])
                }],
                a = s("b9ad"),
                c = s("76c6"),
                o = {
                    components: {
                        banner: a["a"],
                        lksCountDown: c["a"]
                    },
                    data: function() {
                        return {}
                    },
                    created: function() {},
                    computed: {},
                    methods: {}
                },
                r = o,
                l = (s("8750"), s("2877")),
                m = Object(l["a"])(r, i, n, !1, null, "7794ac6f", null);
            e["default"] = m.exports
        },
        b9df: function(t, e, s) {},
        bd30: function(t, e, s) {
            "use strict";
            var i = s("e745"),
                n = s.n(i);
            n.a
        },
        c975: function(t, e, s) {
            "use strict";
            var i = s("23e7"),
                n = s("4d64").indexOf,
                a = s("a640"),
                c = s("ae40"),
                o = [].indexOf,
                r = !!o && 1 / [1].indexOf(1, -0) < 0,
                l = a("indexOf"),
                m = c("indexOf", {
                    ACCESSORS: !0,
                    1: 0
                });
            i({
                target: "Array",
                proto: !0,
                forced: r || !l || !m
            }, {
                indexOf: function(t) {
                    return r ? o.apply(this, arguments) || 0 : n(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        c9a8: function(t, e, s) {
            t.exports = s.p + "img/mine_ico8.f8e51cba.png"
        },
        cf66: function(t, e, s) {
            t.exports = s.p + "img/mine_ico5.7e070d94.png"
        },
        e02a: function(t, e, s) {
            "use strict";
            var i = s("90a6"),
                n = s.n(i);
            n.a
        },
        e745: function(t, e, s) {},
        ea8a: function(t, e, s) {
            "use strict";
            s.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "inner"
                    }, [s("banner", [s("template", {
                        slot: "title"
                    }, [t._v(" HUB/VEX LP " + t._s(t.$t("mineDetail.title")) + " ")]), s("template", {
                        slot: "conent"
                    }, [t._v(" " + t._s(t.$t("mineDetail2.conenthub")) + " ")])], 2), s("div", {
                        staticClass: "detail"
                    }, [s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "tokensItem"
                    }, [s("div", {
                        staticClass: "info"
                    }, [t._m(0), s("strong", [t._v(t._s(t.my))]), s("p", [t._v(t._s(t.$t("mineDetail.has")))])]), s("div", {
                        staticClass: "bottom"
                    }, [t.collectDmd ? s("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: function(e) {
                                return t.harvestBtn()
                            }
                        }
                    }, [t._v(t._s(t.$t("mineDetail.collect")))]) : s("a", {
                        staticClass: "desbled",
                        attrs: {
                            href: "javascript:;"
                        }
                    }, [t._v(t._s(t.$t("mineDetail.collect")))])])])]), s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "tokensItem"
                    }, [s("div", {
                        staticClass: "info"
                    }, [t._m(1), s("strong", [t._v(t._s(t.staked))]), s("p", [t._v(t._s(t.$t("mineDetail2.pledged")))])]), s("div", {
                        staticClass: "bottom"
                    }, [s("a", {
                        attrs: {
                            href: "https://dolphinswap.io/market/3",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.$t("mineDetail2.buttom")))])])])])])], 1)
                },
                n = [function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("cfe5")
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("i", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("814b")
                        }
                    })])
                }],
                a = (s("c975"), s("b0c0"), s("f3f3")),
                c = s("2f62"),
                o = s("b9ad"),
                r = {
                    components: {
                        banner: o["a"]
                    },
                    data: function() {
                        return {
                            coin: this.$route.query.coin,
                            my: "0.0000",
                            staked: "0",
                            collectDmd: !1,
                            interval: null
                        }
                    },
                    computed: Object(a["a"])({}, Object(c["b"])({
                        hublp: function(t) {
                            return t.setting.hublp
                        },
                        name: function(t) {
                            return t.user.name
                        }
                    })),
                    created: function() {
                        this.name ? this.nowRefreshData() : this.refreshData(), this.timeAll()
                    },
                    methods: {
                        refreshData: function() {
                            var t = this;
                            setTimeout((function() {
                                t.getMyDMD()//, t.getMyHUBnew()
                            }), 3e3)
                        },
                        nowRefreshData: function() {
                            this.getMyDMD()//, this.getMyHUBnew()
                        },
                        timeAll: function() {
                            var t = this;
                            this.interval = window.setInterval((function() {
                                t.name && t.nowRefreshData()
                            }), 1e4)
                        },
                        getMyDMD: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.hublp
                                };
                            this.$store.dispatch("queryMyPoolInfo", e).then((function(e) {
                                if (0 != e.rows.length) {
                                    t.my = e.rows[0].unclaimed;
                                    var s = t.my.substring(0, t.my.indexOf(".") + 11);
                                    1e5 * s > 0 && (t.collectDmd = !0)
                                } else t.my = "0.0000"
                            })).catch((function(t) {}))
                        },
                        getMyHUBnew: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.hublp
                                };
                            this.$store.dispatch("queryMyLPPoolInfo", e).then((function(e) {
                                0 != e.rows.length ? t.staked = e.rows[0].token : t.staked = "0"
                            })).catch((function(t) {}))
                        },
                        harvestBtn: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.hublp
                                };
                            this.$store.dispatch("UserGetReward", e).then((function(e) {
                                t.$message({
                                    message: t.$t("message.harvest"),
                                    type: "success"
                                }), t.nowRefreshData(), setTimeout((function() {
                                    t.nowRefreshData()
                                }), 2e3)
                            })).catch((function(t) {}))
                        }
                    },
                    destroyed: function() {
                        window.clearInterval(this.interval)
                    }
                },
                l = r,
                m = (s("601e"), s("2877")),
                u = Object(m["a"])(l, i, n, !1, null, "0c5cfa72", null);
            e["default"] = u.exports
        },
        eace: function(t, e, s) {},
        ed9d: function(t, e, s) {
            "use strict";
            var i = s("6504"),
                n = s.n(i);
            n.a
        },
        f2cc: function(t, e, s) {
            t.exports = s.p + "img/mine_ico6.78d77c74.png"
        }
    }
]);