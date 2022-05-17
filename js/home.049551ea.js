/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["home"], {
        "0894": function(t, e, s) {
            t.exports = s.p + "img/feature.7a4c12d2.png"
        },
        "0dfb": function(t, e, s) {
            t.exports = s.p + "img/mine_ico2.d27e38c3.png"
        },
        "0ffe": function(t, e, s) {},
        "2a47": function(t, e, s) {
            "use strict";
            var i = s("0ffe"),
                n = s.n(i);
            n.a
        },
        "3cf4": function(t, e, s) {
            t.exports = s.p + "img/mine_ico1.01b9c0ad.png"
        },
        "3f6d": function(t, e, s) {},
        6234: function(t, e, s) {
            t.exports = s.p + "img/mine_ico3.06722ed3.png"
        },
        "7a80": function(t, e, s) {
            "use strict";
            var i = s("3f6d"),
                n = s.n(i);
            n.a
        },
        "7abe2": function(t, e, s) {
            "use strict";
            s.r(e);
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "home inner"
                    }, [s("banner", [
                        s("template", {
                        slot: "title"
                    }, [t._v(" " + t._s(t.$t("home.banner.title")) + " ")]), 
                    s("template", {
                        slot: "conent"
                    }, [t._v(" " + t._s(t.$t("home.banner.tips")) + " "), 
                    // s("div", {
                    //     staticClass: "slowMist"
                    // }, [t._v(" " + t._s(t.$t("home.slowMist.text")) + " "), s("a", {
                    //     attrs: {
                    //         href: t.$t("home.slowMist.links"),
                    //         target: "_blank"
                    //     }
                    // }, [t._v(t._s(t.$t("home.slowMist.here")))]), t._v("。 ")])
                ])], 2), s("statistics"), s("tokenStake")], 1)
                },
                n = [],
                r = s("b9ad"),
                o = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "statistics"
                    }, [s("dl", {
                        staticClass: "balance"
                    }, [s("dt", [t._v(t._s(t.balance))]), s("dd", [t._v(t._s(t.$t("home.statistics.money")))])]), s("dl", {
                        staticClass: "total"
                    }, [s("dt", [t._v("30000")]), s("dd", [t._v(t._s(t.$t("home.statistics.number")))])])])
                },
                c = [],
                l = s("f3f3"),
                a = s("2f62"),
                u = {
                    components: {},
                    data: function() {
                        return {}
                    },
                    computed: Object(l["a"])({}, Object(a["b"])({
                        balance: function(t) {
                            return t.user.balance || "0.0000000000"
                        }
                    })),
                    created: function() {},
                    methods: {}
                },
                f = u,
                d = (s("93cc"), s("2877")),
                h = Object(d["a"])(f, o, c, !1, null, "1ca9feb9", null),
                p = h.exports,
                m = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                        //统计信息
                    return s("div", {
                        staticClass: "tokenStake"
                    }, [s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "info"
                    }, [s("div", {
                        staticClass: "title"
                    }, [t._m(0), t._v(" VEX " + t._s(t.$t("home.token.title")) + " ")]), s("div", {
                        staticClass: "myStake"
                    }, [t._v(t._s(t.myVex))]), s("div", {
                        staticClass: "subTitle"
                    }, [t._v(t._s(t.$t("home.token.pledge")))]), s("div", {
                        staticClass: "myStake"
                    }, [t._v(t._s(t.allVex))]), s("div", {
                        staticClass: "subTitle"
                    }, [t._v(t._s(t.$t("home.token.pledgeAll")))]), s("div", {
                        staticClass: "desc"
                    }, [s("dl", [s("dt", [t._v("========== " + t._s(t.$t("home.token.ratio")) + " ==========")]), 
                    s("dd", [t._v(t._s((parseFloat(t.myVex) /parseFloat(t.allVex) * 100.00).toFixed(4)) + " %")])
                    // , 
                    // s("dd", [t._v("1 VEX = " + t._s(t.TickersUsdt.last) + " $")])
                    ]), 

                    s("dl", [s("dt", [t._v("======== " + t._s(t.$t("home.token.expreward")) + " ========")]), 
                    s("dd", [t._v("Hourly Reward: " + t._s((t.vexHourly * parseFloat(t.myVex)/parseFloat(t.allVex)).toFixed(10)) + " TUYUL")]), 
                    s("dd", [t._v("Daily Reward: " + t._s((t.vexDaily* parseFloat(t.myVex)/parseFloat(t.allVex)).toFixed(10)) + " TUYUL")]), 
                    s("dd", [t._v("Weekly Reward: " + t._s((t.vexWeekly* parseFloat(t.myVex)/parseFloat(t.allVex)).toFixed(10)) + " TUYUL")])
                    // , 
                    // s("dd", [t._v("APY: " + t._s(t.hublpAPR) + "%")])
                    ])])])
                    ]),
                    s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "info"
                    }, [s("div", {
                        staticClass: "title"
                    }, [t._m(1), t._v(" USDV " + t._s(t.$t("home.token.title")) + " ")]), s("div", {
                        staticClass: "myStake"
                    }, [t._v(t._s(t.myUsdv))]), s("div", {
                        staticClass: "subTitle"
                    }, [t._v(t._s(t.$t("home.token.pledge")))]), s("div", {
                        staticClass: "myStake"
                    }, [t._v(t._s(t.allUsdv))]), s("div", {
                        staticClass: "subTitle"
                    }, [t._v(t._s(t.$t("home.token.pledgeAll")))]), s("div", {
                        staticClass: "desc"
                    }, [s("dl", [s("dt", [t._v("========== " + t._s(t.$t("home.token.ratio")) + " ==========")]), 
                    s("dd", [t._v(t._s((parseFloat(t.myUsdv)/parseFloat(t.allUsdv)*100.00).toFixed(4)) + " %")])
                    // , 
                    // s("dd", [t._v("1 VEX = " + t._s(t.TickersUsdt.last) + " $")])
                    ]), 
                    s("dl", [s("dt", [t._v("======== " + t._s(t.$t("home.token.expreward")) + " ========")]), 
                    s("dd", [t._v("Hourly Reward: " + t._s((t.usdvHourly * parseFloat(t.myUsdv)/parseFloat(t.allUsdv)).toFixed(10)) + " TUYUL")]), 
                    s("dd", [t._v("Daily Reward: " + t._s((t.usdvDaily* parseFloat(t.myUsdv)/parseFloat(t.allUsdv)).toFixed(10)) + " TUYUL")]), 
                    s("dd", [t._v("Weekly Reward: " + t._s((t.usdvWeekly* parseFloat(t.myUsdv)/parseFloat(t.allUsdv)).toFixed(10)) + " TUYUL")])
                    // , 
                    // s("dd", [t._v("APY: " + t._s(t.hublpAPR) + "%")])
                    ])])])
                    ]),
                    s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "info"
                    }, [s("div", {
                        staticClass: "title"
                    }, [t._m(2), t._v(" VYN " + t._s(t.$t("home.token.title")) + " ")]), s("div", {
                        staticClass: "myStake"
                    }, [t._v(t._s(t.myVyn))]), s("div", {
                        staticClass: "subTitle"
                    }, [t._v(t._s(t.$t("home.token.pledge")))]), s("div", {
                        staticClass: "myStake"
                    }, [t._v(t._s(t.allVyn))]), s("div", {
                        staticClass: "subTitle"
                    }, [t._v(t._s(t.$t("home.token.pledgeAll")))]), s("div", {
                        staticClass: "desc"
                    }, [s("dl", [s("dt", [t._v("========== " + t._s(t.$t("home.token.ratio")) + " ==========")]), 
                    s("dd", [t._v(t._s((parseFloat(t.myVyn)/parseFloat(t.allVyn)*100.00).toFixed(4)) + " %")])
                    // , 
                    // s("dd", [t._v("1 VEX = " + t._s(t.TickersUsdt.last) + " $")])
                    ]), 
                    s("dl", [s("dt", [t._v("======== " + t._s(t.$t("home.token.expreward")) + " ========")]), 
                    s("dd", [t._v("Hourly Reward: " + t._s((t.djvHourly * parseFloat(t.myVyn)/parseFloat(t.allVyn)).toFixed(10)) + " TUYUL")]), 
                    s("dd", [t._v("Daily Reward: " + t._s((t.djvDaily* parseFloat(t.myVyn)/parseFloat(t.allVyn)).toFixed(10)) + " TUYUL")]), 
                    s("dd", [t._v("Weekly Reward: " + t._s((t.djvWeekly* parseFloat(t.myVyn)/parseFloat(t.allVyn)).toFixed(10)) + " TUYUL")])
                    // , 
                    // s("dd", [t._v("APY: " + t._s(t.hublpAPR) + "%")])
                    ])])])
                    ]),
                    s("div", {
                        staticClass: "item"
                    }, [s("div", {
                        staticClass: "info"
                    }, [s("div", {
                        staticClass: "title"
                    }, [t._m(3), t._v(" DJV " + t._s(t.$t("home.token.title")) + " ")]), s("div", {
                        staticClass: "myStake"
                    }, [t._v(t._s(t.myDjv))]), s("div", {
                        staticClass: "subTitle"
                    }, [t._v(t._s(t.$t("home.token.pledge")))]), s("div", {
                        staticClass: "myStake"
                    }, [t._v(t._s(t.allDjv))]), s("div", {
                        staticClass: "subTitle"
                    }, [t._v(t._s(t.$t("home.token.pledgeAll")))]), s("div", {
                        staticClass: "desc"
                    }, [s("dl", [s("dt", [t._v("========== " + t._s(t.$t("home.token.ratio")) + " ==========")]), 
                    s("dd", [t._v(t._s((parseFloat(t.myDjv)/parseFloat(t.allDjv)*100.00).toFixed(4)) + " %")])
                    // , 
                    // s("dd", [t._v("1 VEX = " + t._s(t.TickersUsdt.last) + " $")])
                    ]), 
                    s("dl", [s("dt", [t._v("======== " + t._s(t.$t("home.token.expreward")) + " ========")]), 
                    s("dd", [t._v("Hourly Reward: " + t._s((t.djvHourly * parseFloat(t.myDjv)/parseFloat(t.allDjv)).toFixed(10)) + " TUYUL")]), 
                    s("dd", [t._v("Daily Reward: " + t._s((t.djvDaily* parseFloat(t.myDjv)/parseFloat(t.allDjv)).toFixed(10)) + " TUYUL")]), 
                    s("dd", [t._v("Weekly Reward: " + t._s((t.djvWeekly* parseFloat(t.myDjv)/parseFloat(t.allDjv)).toFixed(10)) + " TUYUL")])
                    // , 
                    // s("dd", [t._v("APY: " + t._s(t.hublpAPR) + "%")])
                    ])])])
                    ])
                    ])
                },
                v = [function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("span", [i("img", {
                        attrs: {
                            alt: "",
                            src: s("3cf4")
                        }
                    })])
                },function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("span", [i("img", {
                        attrs: {
                            alt: "",
                            src: s("0dfb")
                        }
                    })])
                },function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("span", [i("img", {
                        attrs: {
                            alt: "",
                            src: s("6234")
                        }
                    })])
                },function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("span", [i("img", {
                        attrs: {
                            alt: "",
                            src: s("814b")
                        }
                    })])
                }],
                b = (s("4de4"), s("b0c0"), s("a9e3"), s("b680"), s("d3b7"), s("ac1f"), s("25f0"), s("5319"), s("1276"), s("365c")),
                k = {
                    components: {},
                    data: function() {
                        return {
                            myVex: "0.0000",
                            myUsdv: "0.000000",
                            myVyn: "0.00000000",
                            myDjv: "0.00000000",
                            myHublp: "0",
                            myWoollp: "0",
                            myDfslp: "0",
                            allVex: "0.0000",
                            allUsdv: "0.000000",
                            allVyn: "0.00000000",
                            allDjv: "0.00000000",
                            dayVex: "0.0000000000",
                            dayUsdv: "0.0000000000",
                            dayVyn: "0.0000000000",
                            dayDjv: "0.0000000000",
                            allHublp: "0",
                            allWoollp: "0",
                            allDfslp: "0",
                            interval: null,
                            TickersEos: {},
                            TickersUsdt: {},
                            TickersOgx: {},
                            TickersHub: {},
                            TickersDmd: {},
                            TickersYfc: {},
                            TickersHublp: {},
                            TickersWoollp: {},
                            TickersDfslp: {}
                        }
                    },
                    computed: Object(l["a"])(Object(l["a"])({}, Object(a["b"])({
                        hub: function(t) {
                            return t.setting.hub
                        },
                        dmd: function(t) {
                            return t.setting.dmd
                        },
                        yfc: function(t) {
                            return t.setting.yfc
                        },
                        hublp: function(t) {
                            return t.setting.hublp
                        },
                        woollp: function(t) {
                            return t.setting.woollp
                        },
                        dfslp: function(t) {
                            return t.setting.dfslp
                        },
                        name: function(t) {
                            return t.user.name
                        }
                    })), {}, {
                        usdvHourly: function() {
                            var  t = this.dayUsdv ? this.dayUsdv.split(" ")[0] : 0;
                            var i = (parseFloat(t) / 24).toFixed(6);
                            return Number(i)
                        },
                        usdvDaily: function() {
                            var t = (24 * this.usdvHourly).toFixed(6);
                            return t
                        },
                        usdvWeekly: function() {
                            var t = (24 * this.usdvHourly * 7).toFixed(6);
                            return t
                        },
                        hubAPR: function() {
                            var t = (24 * this.usdvHourly * 365).toFixed(6);
                            return t
                        },
                        vynHourly: function() {
                            var  t = this.dayVyn ? this.dayVyn.split(" ")[0] : 0;
                            var i = (parseFloat(t) / 24).toFixed(6);
                            return Number(i)
                        },
                        vynDaily: function() {
                            var t = (24 * this.vynHourly).toFixed(6);
                            return t
                        },
                        vynWeekly: function() {
                            var t = (24 * this.vynHourly * 7).toFixed(6);
                            return t
                        },
                        dmdAPR: function() {
                            var t = (24 * this.vynHourly * 365).toFixed(6);
                            return t
                        },
                        yfcPrice: function() {
                            var t = 0;
                            t = this.TickersYfc.reserve0 ? this.TickersYfc.reserve0.split(" ")[0] : 0;
                            var e = 0;
                            e = this.TickersYfc.reserve1 ? this.TickersYfc.reserve1.split(" ")[0] : 0;
                            var s = t / e * this.TickersUsdt.last;
                            return Number(s)
                        },
                        djvHourly: function() {
                            var  t = this.dayDjv ? this.dayDjv.split(" ")[0] : 0;
                            var i = (parseFloat(t) / 24).toFixed(6);
                            return Number(i)
                        },
                        djvDaily: function() {
                            var t = (24 * this.djvHourly).toFixed(6);
                            return t
                        },
                        djvWeekly: function() {
                            var t = (24 * this.djvHourly * 7).toFixed(6);
                            return t
                        },
                        yfcAPR: function() {
                            var t = (24 * this.djvHourly * 365).toFixed(6);
                            return t
                        },
                        hublpPrice: function() {
                            var t = 0;
                            t = this.TickersHublp.tokens[0].reserve ? this.TickersHublp.tokens[0].reserve.split(" ")[0] : 0;
                            var e = 0;
                            e = this.TickersHublp.tokens[1].reserve ? this.TickersHublp.tokens[1].reserve.split(" ")[0] : 0;
                            var s = 4 * e / t * this.TickersUsdt.last;
                            return Number(s)
                        },
                        vexHourly: function() {
                            var t = 0;
                            t = this.dayVex ? this.dayVex.split(" ")[0] : 0;
                            var i = (parseFloat(t) / 24).toFixed(6);
                            return Number(i)
                        },
                        vexDaily: function() {
                            var t = (24 * this.vexHourly).toFixed(6);
                            t = Number(t).toFixed(6);
                            return t
                        },
                        vexWeekly: function() {
                            var t = (24 * this.vexHourly * 7).toFixed(6);
                            return t
                        },
                        hublpAPR: function() {
                            var t = (24 * this.vexHourly * 365).toFixed(6);
                            return t
                        },
                        woollpPrice: function() {
                            var t = 0;
                            t = this.TickersWoollp.tokens[0].reserve ? this.TickersWoollp.tokens[0].reserve.split(" ")[0] : 0;
                            var e = 0;
                            e = this.TickersWoollp.tokens[1].reserve ? this.TickersWoollp.tokens[1].reserve.split(" ")[0] : 0;
                            var s = e / t * this.TickersUsdt.last;
                            return Number(s)
                        },
                        woollpHourly: function() {
                            var t = 0;
                            t = this.TickersWoollp.tokens[1].reserve ? this.TickersWoollp.tokens[1].reserve.split(" ")[0] : 0;
                            var e = 500 * this.TickersEos.last / (8640 * t * 2),
                                s = 100 * e,
                                i = String(s).replace(/^(.*\..{6}).*$/, "$1");
                            return Number(i)
                        },
                        woollpDaily: function() {
                            var t = (24 * this.woollpHourly).toFixed(6);
                            return t
                        },
                        woollpWeekly: function() {
                            var t = (24 * this.woollpHourly * 7).toFixed(6);
                            return t
                        },
                        woollpAPR: function() {
                            var t = (24 * this.woollpHourly * 365).toFixed(6);
                            return t
                        },
                        dfslpPrice: function() {
                            var t = 0;
                            t = this.TickersDfslp.reserve0 ? this.TickersDfslp.reserve0.split(" ")[0] : 0;
                            var e = 0;
                            e = this.TickersDfslp.reserve1 ? this.TickersDfslp.reserve1.split(" ")[0] : 0;
                            var s = t / e * this.TickersUsdt.last;
                            return Number(s)
                        },
                        dfslpHourly: function() {
                            var t = 0;
                            t = this.TickersDfslp.reserve1 ? this.TickersDfslp.reserve0.split(" ")[0] : 0;
                            var e = 500 * this.TickersEos.last / (8640 * t * 2),
                                s = 100 * e,
                                i = String(s).replace(/^(.*\..{6}).*$/, "$1");
                            return Number(i)
                        },
                        dfslpDaily: function() {
                            var t = (24 * this.dfslpHourly).toFixed(6);
                            return t
                        },
                        dfslpWeekly: function() {
                            var t = (24 * this.dfslpHourly * 7).toFixed(6);
                            return t
                        },
                        dfslpAPR: function() {
                            var t = (24 * this.dfslpHourly * 365).toFixed(6);
                            return t
                        }
                    }),
                    created: function() {
                        var t = this;
                        setTimeout((function() {
                            //查表获取信息
                            t.getMyStake(), 
                            t.getGlobal()
                            //t.getMyHub(), 
                            // t.getMyDmd(), 
                            // t.getMyYfc(), 
                            // t.getMyHublp(), 
                            // t.getMyWoollp(), 
                            // t.getMyDfslp()
                        }), 2e3), 
                        setTimeout((function() {
                            t.getMyStake(), 
                            t.getGlobal()
                            // t.getMyDmd(), 
                            // t.getMyYfc(), 
                            // t.getMyHublp(), 
                            // t.getMyWoollp(), 
                            // t.getMyDfslp()
                        }), 3e3), 
                        // setTimeout((function() {
                        //     t.getMyDmd(), 
                        //     t.getMyYfc(), 
                        //     t.getMyHublp(), 
                        //     t.getMyWoollp(), 
                        //     t.getMyDfslp()
                        // }), 4e3), 
                        // setTimeout((function() {
                        //     t.getAllHub()
                        // }), 800), 
                        this.timeAll()
                        // this.getTickersData(), 
                        // this.getTickersHubData(), 
                        // this.getTickersDmdData(), 
                        // this.getTickersYfcData(), 
                        // this.getTickersHublpData(), 
                        // this.getTickersWoollpData(), 
                        // this.getTickersDfslpData()
                    },
                    methods: {
                        getMyStake: function() {
                            var t = this,
                                e = {
                                    accountName: this.name
                                };
                            this.$store.dispatch("queryMyStakeInfo", e).then((function(e) {
                                0 != e.rows.length && (t.myVex = e.rows[0].vex_stake, t.myUsdv = e.rows[0].usdv_stake, t.myVyn = e.rows[0].vyn_stake, t.myDjv = e.rows[0].djv_stake)
                            })).catch((function(t) {}))
                        },
                        getGlobal: function() {
                            var t = this,
                                e = {
                                    pool: this.hub
                                };
                            this.$store.dispatch("queryGlobalInfo", e).then((function(e) {
                                0 != e.rows.length && (t.allVex = e.rows[0].total_staked_vex,t.allUsdv = e.rows[0].total_staked_usdv,t.allVyn = e.rows[0].total_staked_vyn,t.allDjv = e.rows[0].total_staked_djv,
                                    t.dayVex = e.rows[0].vex_pool_day_reward,t.dayUsdv = e.rows[0].usdv_pool_day_reward,t.dayVyn = e.rows[0].vyn_pool_day_reward,t.dayDjv = e.rows[0].djv_pool_day_reward)
                            })).catch((function(t) {}))
                        },
                        getMyHub: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.hub
                                };
                            this.$store.dispatch("queryMyPoolInfo", e).then((function(e) {
                                0 != e.rows.length && (t.myVex = e.rows[0].staked)
                            })).catch((function(t) {}))
                        },
                        getMyDmd: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.dmd
                                };
                            this.$store.dispatch("queryMyLPPoolInfo", e).then((function(e) {
                                0 != e.rows.length ? t.myUsdv = e.rows[0].token : t.myUsdv = "0"
                            })).catch((function(t) {}))
                        },
                        getMyYfc: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.yfc
                                };
                            this.$store.dispatch("queryMyLPPoolInfo", e).then((function(e) {
                                0 != e.rows.length ? t.myVyn = e.rows[0].token : t.myVyn = "0"
                            })).catch((function(t) {}))
                        },
                        getMyHublp: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.hublp
                                };
                            this.$store.dispatch("queryMyLPPoolInfo", e).then((function(e) {
                                0 != e.rows.length ? t.myHublp = e.rows[0].token : t.myHublp = "0"
                            })).catch((function(t) {}))
                        },
                        getMyWoollp: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.woollp
                                };
                            this.$store.dispatch("queryMyLPPoolInfo", e).then((function(e) {
                                0 != e.rows.length ? t.myWoollp = e.rows[0].token : t.myWoollp = "0"
                            })).catch((function(t) {}))
                        },
                        getMyDfslp: function() {
                            var t = this,
                                e = {
                                    accountName: this.name,
                                    pool: this.dfslp
                                };
                            this.$store.dispatch("queryMyLPPoolInfo", e).then((function(e) {
                                0 != e.rows.length ? t.myDfslp = e.rows[0].token : t.myDfslp = "0"
                            })).catch((function(t) {}))
                        },
                        getAllHub: function() {
                            var t = this,
                                e = {
                                    pool: this.hub
                                };
                            this.$store.dispatch("queryPoolInfo", e).then((function(e) {
                                0 != e.rows.length && (t.allHub = e.rows[0].total_staked)
                            })).catch((function(t) {}))
                        },
                        timeAll: function() {
                            var t = this;
                            this.interval = window.setInterval((function() {
                                //定时任务
                                //t.name && (t.getMyHub(), t.getMyDmd()), t.getAllHub()
                                t.name && (t.getMyStake()), t.getGlobal()
                            }), 2e4)
                        },
                        getTickersData: function() {
                            var t = this;
                            Object(b["b"])().then((function(e) {
                                var s = e.data,
                                    i = s.filter((function(t) {
                                        return "eosdmdtokens-dmd-eos" === t.symbol
                                    }));
                                t.TickersEos = i[0];
                                var n = s.filter((function(t) {
                                    return "eosio.token-eos-usdt" === t.symbol
                                }));
                                t.TickersUsdt = n[0];
                                var r = s.filter((function(t) {
                                    return "organixtoken-ogx-eos" === t.symbol
                                }));
                                t.TickersOgx = r[0]
                            })).catch((function(t) {}))
                        },
                        getTickersHubData: function() {
                            var t = this,
                                e = {
                                    code: "defisswapcnt",
                                    json: !0,
                                    limit: 1,
                                    scope: "defisswapcnt",
                                    table: "markets",
                                    lower_bound: 344
                                };
                            Object(b["c"])(e).then((function(e) {
                                t.TickersHub = e.rows[0]
                            })).catch((function(t) {}))
                        },
                        getTickersDmdData: function() {
                            var t = this,
                                e = {
                                    code: "defisswapcnt",
                                    json: !0,
                                    limit: 1,
                                    scope: "defisswapcnt",
                                    table: "markets",
                                    lower_bound: 326
                                };
                            Object(b["c"])(e).then((function(e) {
                                t.TickersDmd = e.rows[0], t.allDmd = e.rows[0].liquidity_token
                            })).catch((function(t) {}))
                        },
                        getTickersYfcData: function() {
                            var t = this,
                                e = {
                                    code: "defisswapcnt",
                                    json: !0,
                                    limit: 1,
                                    scope: "defisswapcnt",
                                    table: "markets",
                                    lower_bound: 329
                                };
                            Object(b["c"])(e).then((function(e) {
                                t.TickersYfc = e.rows[0], t.allYfc = e.rows[0].liquidity_token
                            })).catch((function(t) {}))
                        },
                        getTickersHublpData: function() {
                            var t = this,
                                e = {
                                    code: "dolphinsswap",
                                    json: !0,
                                    limit: 1,
                                    scope: "dolphinsswap",
                                    table: "pools",
                                    lower_bound: 3
                                };
                            Object(b["c"])(e).then((function(e) {
                                t.TickersHublp = e.rows[0], t.allHublp = e.rows[0].total_lptoken
                            })).catch((function(t) {}))
                        },
                        getTickersWoollpData: function() {
                            var t = this,
                                e = {
                                    code: "dolphinsswap",
                                    json: !0,
                                    limit: 1,
                                    scope: "dolphinsswap",
                                    table: "pools",
                                    lower_bound: 24
                                };
                            Object(b["c"])(e).then((function(e) {
                                t.TickersWoollp = e.rows[0], t.allWoollp = e.rows[0].total_lptoken
                            })).catch((function(t) {}))
                        },
                        getTickersDfslpData: function() {
                            var t = this,
                                e = {
                                    code: "defisswapcnt",
                                    json: !0,
                                    limit: 1,
                                    scope: "defisswapcnt",
                                    table: "markets",
                                    lower_bound: 39
                                };
                            Object(b["c"])(e).then((function(e) {
                                t.TickersDfslp = e.rows[0], t.allDfslp = e.rows[0].liquidity_token
                            })).catch((function(t) {}))
                        },
                        scientificToNumber: function(t) {
                            var e, s, i = t.toString(),
                                n = /^(\d+)(e)([\-]?\d+)$/,
                                r = "";
                            if (n.test(i)) {
                                e = n.exec(i), s = Math.abs(e[3]) - 1;
                                for (var o = 0; o < s; o++) r += "0";
                                return "0." + r + e[1]
                            }
                            return t
                        }
                    },
                    destroyed: function() {
                        window.clearInterval(this.interval)
                    }
                },
                y = k,
                g = (s("2a47"), Object(d["a"])(y, m, v, !1, null, "4928dd48", null)),
                T = g.exports,
                _ = {
                    components: {
                        banner: r["a"],
                        statistics: p,
                        tokenStake: T
                    },
                    data: function() {
                        return {}
                    },
                    created: function() {},
                    computed: {},
                    methods: {}
                },
                w = _,
                H = (s("f4a0"), Object(d["a"])(w, i, n, !1, null, "3d5ed2fc", null));
            e["default"] = H.exports
        },
        "814b": function(t, e, s) {
            t.exports = s.p + "img/mine_ico7.650f1285.png"
        },
        "93cc": function(t, e, s) {
            "use strict";
            var i = s("e01f"),
                n = s.n(i);
            n.a
        },
        b4aa: function(t, e, s) {},
        b9ad: function(t, e, s) {
            "use strict";
            var i = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "slogan"
                    }, [
                    i("div", {
                        staticClass: "start"
                    }, [t._v(" " + t._s(t.$t("home.banner.start")) + " ")], 2),
                    "VEX" == t.coin ? i("div", {
                        staticClass: "image"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("3cf4")
                        }
                    })]) : "USDV" == t.coin ? i("div", {
                        staticClass: "image"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("0dfb")
                        }
                    })]) : "VYN" == t.coin ? i("div", {
                        staticClass: "image"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("6234")
                        }
                    })]) : "DJV" == t.coin ? n("div", {
                        staticClass: "image"
                    }, [n("img", {
                        attrs: {
                            alt: "",
                            src: i("814b")
                        }
                    })]) : i("div", {
                        staticClass: "image"
                    }, [i("img", {
                        attrs: {
                            alt: "",
                            src: s("0894")
                        }
                    })]), i("div", {
                        staticClass: "title"
                    }, [t._t("title"), t.$slots.beta ? i("div", {
                        staticClass: "beta"
                    }, [t._t("beta")], 2) : t._e()], 2), t.$slots.conent ? i("div", {
                        staticClass: "conent"
                    }, [t._t("conent")], 2) : t._e()])
                },
                n = [],
                r = {
                    data: function() {
                        return {
                            coin: this.$route.query.coin
                        }
                    },
                    methods: {}
                },
                o = r,
                c = (s("7a80"), s("2877")),
                l = Object(c["a"])(o, i, n, !1, null, "04589b4e", null);
            e["a"] = l.exports
        },
        e01f: function(t, e, s) {},
        f4a0: function(t, e, s) {
            "use strict";
            var i = s("b4aa"),
                n = s.n(i);
            n.a
        }
    }
]);