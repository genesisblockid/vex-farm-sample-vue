(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-26a2b14d"], {
        3783: function (t, e, i) {
            "use strict";
            var a = i("276c"),
                s = i("e954"),
                o = i("76b0"),
                n = i.n(o),
                r = i("876a"),
                c = i.n(r),
                u = i("d3b7c"),
                l = i.n(u),
                v = i("01ea"),
                d = v["a"].network,
                f = v["a"].config;
            n.a.plugins(new c.a);
            var m = n.a.scatter,
                h = {
                    expireInSeconds: 60
                },
                g = function () {
                    function t() {
                        Object(a["a"])(this, t), this.network = d, this.config = f, this.scatter = m
                    }
                    return Object(s["a"])(t, [{
                        key: "authAction",
                        value: function (t) {
                            var e = this;
                            m.connect(this.config.dappName).then((function (i) {
                                if (i) {
                                    var a = {
                                        accounts: [e.network]
                                    };
                                    n.a.scatter.getIdentity(a).then((function (e) {
                                        t(null, e)
                                    })).catch((function (e) {
                                        t(e, null)
                                    }))
                                }
                            }))
                        }
                    }, {
                        key: "sendAction",
                        value: function (t, e) {
                            var i = {
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
                                a = {
                                    blocksBehind: 3,
                                    expireSeconds: 30
                                },
                                s = [i, a],
                                o = n.a.scatter.eos(d, l.a, h);
                            o.transaction.apply(o, s).then((function (t) {
                                e(null, t)
                            })).catch((function (t) {
                                e(t, null)
                            }))
                        }
                    }, {
                        key: "pushAction",
                        value: function (t, e) {
                            var i = {
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
                                a = {
                                    blocksBehind: 3,
                                    expireSeconds: 30
                                },
                                s = [i, a],
                                o = n.a.scatter.eos(this.network, l.a, h);
                            o.transaction.apply(o, s).then((function (t) {
                                e(null, t)
                            })).catch((function (t) {
                                e(t, null)
                            }))
                        }
                    }, {
                        key: "getBalanceAction",
                        value: function (t, e) {
                            var i = n.a.scatter.eos(d, l.a, h);
                            i.getCurrencyBalance(t.code, t.account, t.symbol).then((function (t) {
                                e(null, t)
                            })).catch((function (t) {
                                e(t, null)
                            }))
                        }
                    }, {
                        key: "getTableRowsAction",
                        value: function (t, e) {
                            var i = n.a.scatter.eos(d, l.a, h);
                            i.getTableRows(t).then((function (t) {
                                e(null, t)
                            })).catch((function (t) {
                                e(t, null)
                            }))
                        }
                    }]), t
                }();
            e["a"] = new g
        },
        "3bab": function (t, e, i) {
            "use strict";
            var a = i("d33a"),
                s = i.n(a);
            s.a
        },
        "4b3b": function (t, e, i) {
            "use strict";
            i.r(e);
            var a = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "voteList"
                    }, [i("div", {
                        staticClass: "top"
                    }, [0 === t.item.state ? i("div", {
                        staticClass: "state1"
                    }, [t._v(t._s(t.$t("vote.notStarted")))]) : t._e(), 1 === t.item.state ? i("div", {
                        staticClass: "state2"
                    }, [t._v(t._s(t.$t("vote.progress")))]) : t._e(), 2 === t.item.state ? i("div", {
                        staticClass: "state1"
                    }, [t._v(t._s(t.$t("vote.end")))]) : t._e(), 3 === t.item.state ? i("div", {
                        staticClass: "state1"
                    }, [t._v(t._s(t.$t("vote.end2")))]) : t._e(), i("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.getVoteContent().title))])]), i("div", {
                        domProps: {
                            innerHTML: t._s(t.getVoteContent().content)
                        }
                    }), i("div", {
                        staticClass: "table"
                    }, [i("div", {
                        staticClass: "tableHead"
                    }, [t._v(t._s(t.$t("vote.initiator")))]), i("div", {
                        staticClass: "cell2"
                    }, [i("div", {
                        staticClass: "leftTitle"
                    }, [t._v(t._s(t.$t("vote.author")))]), i("div", {
                        staticClass: "rightTitle"
                    }, [t._v(t._s(t.item.info.author))])]), i("div", {
                        staticClass: "cell2"
                    }, [i("div", {
                        staticClass: "leftTitle"
                    }, [t._v(t._s(t.$t("vote.startTime")))]), i("div", {
                        staticClass: "rightTitle"
                    }, [t._v(t._s(t.getVoteContent(t.item).startTime))])]), i("div", {
                        staticClass: "cell2"
                    }, [i("div", {
                        staticClass: "leftTitle"
                    }, [t._v(t._s(t.$t("vote.endTime")))]), i("div", {
                        staticClass: "rightTitle"
                    }, [t._v(t._s(t.getVoteContent(t.item).endTime))])])]), i("div", {
                        staticClass: "table"
                    }, [i("div", {
                        staticClass: "tableHead"
                    }, [t._v(t._s(t.$t("vote.list")))]), t._l(t.item.info.options, (function (e, a) {
                        return i("dd", {
                            key: a,
                            class: {
                                on: t.selectID === e.id
                            },
                            on: {
                                click: function (i) {
                                    return t.selectCell(e.id)
                                }
                            }
                        }, [t._v(" " + t._s(t.getVoteOption(e)) + " ")])
                    }))], 2), i("div", {
                        staticClass: "table",
                        staticStyle: {
                            padding: "20px"
                        }
                    }, [i("div", {
                        staticClass: "rightTitle",
                        staticStyle: {
                            "font-size": "16px",
                            "margin-bottom": "20px"
                        }
                    }, [t._v(" " + t._s(t.$t("vote.myVote")) + "：" + t._s(t.getVoteOption(this.selectOption)) + " ")]), i("div", {
                        staticClass: "rightTitle",
                        staticStyle: {
                            "font-size": "16px",
                            "margin-bottom": "20px"
                        }
                    }, [t._v(" " + t._s(t.$t("vote.myVoteNum")) + "：" + t._s(this.voted_quantity) + " ")]), i("div", {
                        staticClass: "button"
                    }, [i("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: function (e) {
                                return t.voteBtn()
                            }
                        }
                    }, [t._v(t._s(t.$t("vote.vote")))])]), i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.itemID < 8,
                            expression: "itemID < 8"
                        }],
                        staticClass: "button"
                    }, [i("a", {
                        attrs: {
                            href: "javascript:;"
                        },
                        on: {
                            click: function (e) {
                                return t.receiveBtn()
                            }
                        }
                    }, [t._v(t._s(t.$t("vote.receive")))])])]), i("div", {
                        staticClass: "table"
                    }, [i("div", {
                        staticClass: "tableHead"
                    }, [t._v(t._s(t.$t("vote.result")))]), t._l(t.item.options, (function (e, a) {
                        return i("dd", {
                            key: a
                        }, [t._v(" " + t._s(t.getVoteOption(e)) + " "), i("div", {
                            staticClass: "cell2"
                        }, [i("div", {
                            staticClass: "leftOption"
                        }, [t._v(" (" + t._s(parseFloat(.01 * e.ratio).toFixed(2)) + "%)")]), t.item.id >= 8 ? i("div", {
                            staticClass: "rightOption"
                        }, [t._v(t._s(t.getVotedQuantity(e.voted_quantity)))]) : i("div", {
                            staticClass: "rightOption"
                        }, [t._v(t._s(e.weight))])]), i("div", {
                            staticClass: "rateBack"
                        }, [i("div", {
                            staticClass: "rate",
                            style: {
                                width: parseFloat(.01 * e.ratio).toFixed(2) + "%"
                            }
                        })])])
                    }))], 2)])
                },
                s = [],
                o = (i("99af"), i("4de4"), i("b0c0"), i("ac1f"), i("1276"), i("f3f3")),
                n = i("2f62"),
                r = i("3783"),
                c = i("01ea"),
                u = i("fa7d"),
                l = i("4810"),
                v = {
                    data: function () {
                        return {
                            itemID: this.$route.query.id,
                            item: {
                                info: {
                                    options: []
                                },
                                options: {}
                            },
                            selectID: 0,
                            selectOption: {},
                            voted_quantity: 0
                        }
                    },
                    created: function () {
                        var t = this;
                        this.requestData(), setTimeout((function () {
                            t.requestData()
                        }), 3e3)
                    },
                    computed: Object(o["a"])({}, Object(n["b"])({
                        authority: function (t) {
                            return t.user.authority
                        },
                        name: function (t) {
                            return t.user.name
                        }
                    })),
                    methods: {
                        requestData: function () {
                            var t = this,
                                e = {
                                    json: !0,
                                    code: c["a"].config.voteContract,
                                    scope: c["a"].config.voteContract,
                                    table: "proposal",
                                    limit: 100
                                };
                            r["a"].getTableRowsAction(e, (function (e, i) {
                                if (i && 0 !== i.rows.length)
                                    for (var a in i.rows) {
                                        var s = i.rows[a];
                                        if (s.id == t.itemID) {
                                            if (t.item = s, s.id >= 8) {
                                                var o = (new Date).getTime() / 1e3,
                                                    n = s.info.epoch + s.info.duration;
                                                o < s.info.epoch ? (t.item.state = 0, t.getMyVotes1()) : o < n ? (t.item.state = 1, t.getMyVotes1()) : ((s.vote_ratio_req = 0) || s.voted_ratio >= s.vote_ratio_req ? t.item.state = 2 : t.item.state = 3, t.getMyVotes2())
                                            }
                                            for (var r in s.options) {
                                                var c = s.options[r];
                                                for (var u in c.records) {
                                                    var l = c.records[u];
                                                    if (l.user == t.name) return void(t.selectOption = c)
                                                }
                                            }
                                            return
                                        }
                                    }
                            }))
                        },
                        getMyVotes1: function () {
                            var t = this,
                                e = {
                                    json: !0,
                                    code: c["a"].config.voteContract,
                                    scope: c["a"].config.voteContract,
                                    table: "voter",
                                    lower_bound: l.nameToUint64(this.name),
                                    limit: 1
                                };
                            r["a"].getTableRowsAction(e, (function (e, i) {
                                if (i && 0 !== i.rows.length) {
                                    var a = i.rows.filter((function (e) {
                                        return e.user == t.name
                                    }));
                                    0 !== a.length ? t.voted_quantity = i.rows[0].votes.split(" ")[0] : t.voted_quantity = 0
                                }
                            }))
                        },
                        getMyVotes2: function () {
                            for (var t in data.options) {
                                var e = data.options[t];
                                for (var i in e.records) {
                                    var a = e.records[i];
                                    if (a.user == this.name) return void(this.voted_quantity = a.voted_quantity)
                                }
                            }
                        },
                        getTime: function (t) {
                            var e = new Date(1e3 * t),
                                i = e.getFullYear(),
                                a = e.getMonth() + 1,
                                s = e.getDate(),
                                o = e.getHours(),
                                n = e.getMinutes(),
                                r = e.getSeconds();
                            return "".concat(i, "-").concat(a, "-").concat(s, " ").concat(o, ":").concat(n, ":").concat(r)
                        },
                        getVoteContent: function () {
                            if (this.item.id) {
                                var t = this.$i18n.t("voteText[" + (this.item.id - 1) + "]");
                                return t
                            }
                            return {}
                        },
                        getVoteOption: function (t) {
                            if (this.item.id && t.id) {
                                var e = this.$i18n.t("voteText[" + (this.item.id - 1) + "].voteOptions[" + (t.id - 1) + "]");
                                return e
                            }
                            return ""
                        },
                        selectCell: function (t) {
                            this.selectID = t
                        },
                        getVotedQuantity: function (t) {
                            return Object(u["a"])(t)
                        },
                        voteBtn: function () {
                            var t = this;
                            if (this.selectID <= 0) this.$message({
                                message: this.$t("vote.select"),
                                type: "warning"
                            });
                            else {
                                var e = {
                                    contract: c["a"].config.voteContract,
                                    action: "vote",
                                    userName: this.name,
                                    authority: this.authority,
                                    data: {
                                        from: this.name,
                                        proposal_id: this.item.id,
                                        option_id: this.selectID
                                    }
                                };
                                r["a"].pushAction(e, (function (e, i) {
                                    if (i) t.$message({
                                        message: t.$t("vote.success"),
                                        type: "success"
                                    }), t.requestData(), setTimeout((function () {
                                        t.requestData()
                                    }), 3e3);
                                    else if (e) {
                                        var a = Object(u["c"])(e),
                                            s = t.$t("error." + a.errorKey);
                                        s === "error." + a.errorKey ? t.$message({
                                            message: a.message,
                                            type: "error"
                                        }) : t.$message({
                                            message: t.$t("error." + a.errorKey),
                                            type: "error"
                                        })
                                    }
                                }))
                            }
                        },
                        receiveBtn: function () {
                            var t = this,
                                e = {
                                    contract: c["a"].config.voteContract,
                                    action: "claim",
                                    userName: this.name,
                                    authority: this.authority,
                                    data: {
                                        from: this.name,
                                        id: this.item.id
                                    }
                                };
                            r["a"].pushAction(e, (function (e, i) {
                                if (i) t.$message({
                                    message: t.$t("vote.receiveSuccess2"),
                                    type: "success"
                                }), t.requestData(), setTimeout((function () {
                                    t.requestData()
                                }), 3e3);
                                else if (e) {
                                    var a = Object(u["c"])(e),
                                        s = t.$t("error." + a.errorKey);
                                    s === "error." + a.errorKey ? t.$message({
                                        message: a.message,
                                        type: "error"
                                    }) : t.$message({
                                        message: t.$t("error." + a.errorKey),
                                        type: "error"
                                    })
                                }
                            }))
                        }
                    }
                },
                d = v,
                f = (i("3bab"), i("2877")),
                m = Object(f["a"])(d, a, s, !1, null, "0a61a683", null);
            e["default"] = m.exports
        },
        "99af": function (t, e, i) {
            "use strict";
            var a = i("23e7"),
                s = i("d039"),
                o = i("e8b5"),
                n = i("861d"),
                r = i("7b0b"),
                c = i("50c4"),
                u = i("8418"),
                l = i("65f0"),
                v = i("1dde"),
                d = i("b622"),
                f = i("2d00"),
                m = d("isConcatSpreadable"),
                h = 9007199254740991,
                g = "Maximum allowed index exceeded",
                p = f >= 51 || !s((function () {
                    var t = [];
                    return t[m] = !1, t.concat()[0] !== t
                })),
                _ = v("concat"),
                y = function (t) {
                    if (!n(t)) return !1;
                    var e = t[m];
                    return void 0 !== e ? !!e : o(t)
                },
                C = !p || !_;
            a({
                target: "Array",
                proto: !0,
                forced: C
            }, {
                concat: function (t) {
                    var e, i, a, s, o, n = r(this),
                        v = l(n, 0),
                        d = 0;
                    for (e = -1, a = arguments.length; e < a; e++)
                        if (o = -1 === e ? n : arguments[e], y(o)) {
                            if (s = c(o.length), d + s > h) throw TypeError(g);
                            for (i = 0; i < s; i++, d++) i in o && u(v, d, o[i])
                        } else {
                            if (d >= h) throw TypeError(g);
                            u(v, d++, o)
                        } return v.length = d, v
                }
            })
        },
        d33a: function (t, e, i) {}
    }
]);