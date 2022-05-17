/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
(function(e) {
    function t(t) {
        for (var o, a, s = t[0], c = t[1], l = t[2], u = 0, d = []; u < s.length; u++) a = s[u], Object.prototype.hasOwnProperty.call(i, a) && i[a] && d.push(i[a][0]), i[a] = 0;
        for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
        m && m(t);
        while (d.length) d.shift()();
        return r.push.apply(r, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], o = !0, a = 1; a < n.length; a++) {
                var s = n[a];
                0 !== i[s] && (o = !1)
            }
            o && (r.splice(t--, 1), e = c(c.s = n[0]))
        }
        return e
    }
    var o = {},
        a = {
            app: 0
        },
        i = {
            app: 0
        },
        r = [];

    function s(e) {
        return c.p + "js/" + ({
            mine: "mine",
            home: "home",
            rules: "rules"
        }[e] || e) + "." + {
            "chunk-0d282e8e": "ed67c837",
            "chunk-1ea07b17": "442a0b6c",
            "chunk-2ce65186": "edeb95de",
            mine: "ddfd8072",
            "chunk-26a2b14d": "ff842ea8",
            "chunk-2d0aec89": "2993326f",
            "chunk-4689280a": "3ce02c5f",
            "chunk-8b3d126a": "37002ef9",
            home: "049551ea",
            rules: "f0d5e439"
        }[e] + ".js"
    }

    function c(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
    }
    c.e = function(e) {
        var t = [],
            n = {
                "chunk-0d282e8e": 1,
                "chunk-1ea07b17": 1,
                "chunk-2ce65186": 1,
                mine: 1,
                "chunk-26a2b14d": 1,
                "chunk-4689280a": 1,
                "chunk-8b3d126a": 1,
                home: 1,
                rules: 1
            };
        a[e] ? t.push(a[e]) : 0 !== a[e] && n[e] && t.push(a[e] = new Promise((function(t, n) {
            for (var o = "css/" + ({
                    mine: "mine",
                    home: "home",
                    rules: "rules"
                }[e] || e) + "." + {
                    "chunk-0d282e8e": "efeed5b9",
                    "chunk-1ea07b17": "b4f95e60",
                    "chunk-2ce65186": "7d616aea",
                    mine: "aaaedb48",
                    "chunk-26a2b14d": "19a49465",
                    "chunk-2d0aec89": "31d6cfe0",
                    "chunk-4689280a": "dae055c4",
                    "chunk-8b3d126a": "68011b80",
                    home: "5c656da3",
                    rules: "08958be8"
                }[e] + ".css", i = c.p + o, r = document.getElementsByTagName("link"), s = 0; s < r.length; s++) {
                var l = r[s],
                    u = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (u === o || u === i)) return t()
            }
            var d = document.getElementsByTagName("style");
            for (s = 0; s < d.length; s++) {
                l = d[s], u = l.getAttribute("data-href");
                if (u === o || u === i) return t()
            }
            var m = document.createElement("link");
            m.rel = "stylesheet", m.type = "text/css", m.onload = t, m.onerror = function(t) {
                var o = t && t.target && t.target.src || i,
                    r = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                r.code = "CSS_CHUNK_LOAD_FAILED", r.request = o, delete a[e], m.parentNode.removeChild(m), n(r)
            }, m.href = i;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(m)
        })).then((function() {
            a[e] = 0
        })));
        var o = i[e];
        if (0 !== o)
            if (o) t.push(o[2]);
            else {
                var r = new Promise((function(t, n) {
                    o = i[e] = [t, n]
                }));
                t.push(o[2] = r);
                var l, u = document.createElement("script");
                u.charset = "utf-8", u.timeout = 120, c.nc && u.setAttribute("nonce", c.nc), u.src = s(e);
                var d = new Error;
                l = function(t) {
                    u.onerror = u.onload = null, clearTimeout(m);
                    var n = i[e];
                    if (0 !== n) {
                        if (n) {
                            var o = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + o + ": " + a + ")", d.name = "ChunkLoadError", d.type = o, d.request = a, n[1](d)
                        }
                        i[e] = void 0
                    }
                };
                var m = setTimeout((function() {
                    l({
                        type: "timeout",
                        target: u
                    })
                }), 12e4);
                u.onerror = u.onload = l, document.head.appendChild(u)
            }
        return Promise.all(t)
    }, c.m = e, c.c = o, c.d = function(e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, c.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.t = function(e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (c.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) c.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "/", c.oe = function(e) {
        throw console.error(e), e
    };
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var d = 0; d < l.length; d++) t(l[d]);
    var m = u;
    r.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "01ea": function(e, t, n) {
        "use strict";
        var o = n("9224"),
            a = {
                network: {
                    blockchain: "eos",
                    host: "vexascan.com",
                    port: 8443,
                    protocol: "https",
                    chainId: "f9f432b1851b5c179d2091a96f593aaed50ec7466b74f89301f957a83e56ce1f"
                    //eos url
                    // blockchain: "eos",
                    // host: "eospush.tokenpocket.pro",
                    // port: 443,
                    // protocol: "https",
                    // chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"
                },
                config: {
                    baseUrl: "",
                    walletType: "scatter",
                    dappName: "basofinance",
                    initTimeout: 5e3,
                    dmdContract: "testbastoken",//eosdmdtokens
                    dmdSymbol: "BASO",//BASO 
                    dmdPrecision: 10,//10 精确度
                    voteContract: "eosdmdgovern"
                }
            },
            i = {
                network: {
                    blockchain: "eos",
                    host: "vexascan.com",
                    port: 8443,
                    protocol: "https",
                    chainId: "f9f432b1851b5c179d2091a96f593aaed50ec7466b74f89301f957a83e56ce1f"
                    //eos url
                    // blockchain: "eos",
                    // host: "eospush.tokenpocket.pro",
                    // port: 443,
                    // protocol: "https",
                    // chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"
                },
                config: {
                    baseUrl: "",
                    walletType: "scatter",
                    dappName: "basofinance",
                    initTimeout: 5e3,
                    dmdContract: "dtest1111112",
                    dmdSymbol: "DDD",
                    dmdPrecision: 10,
                    voteContract: "dtest1111114"
                }
            };
        t["a"] = o.DEV ? i : a
    },
    "027c": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDgtMjdUMTQ6NDI6MzErMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA4LTI3VDE0OjQzOjU4KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA4LTI3VDE0OjQzOjU4KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmVjNmI1OTc5LTU2YmQtNGViMy1iMzBkLTYyMzg4MGFkMTI5YiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDplYzZiNTk3OS01NmJkLTRlYjMtYjMwZC02MjM4ODBhZDEyOWIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplYzZiNTk3OS01NmJkLTRlYjMtYjMwZC02MjM4ODBhZDEyOWIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVjNmI1OTc5LTU2YmQtNGViMy1iMzBkLTYyMzg4MGFkMTI5YiIgc3RFdnQ6d2hlbj0iMjAyMC0wOC0yN1QxNDo0MjozMSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3+wEFQAAAkhJREFUSMftl8srRFEcx+8/wN7KSiwUZaNY2ZEkC5NYeCTCYqYmERakKMljcVGTEBsp1GjG1Ewjj8Z4jVkwk6EZ45XX2FBSjvu7Obdr5p7HtRgbU9+ae88538+55/E7vyMghASWzNPH6TUje5ax1cDui/S7KKhCASFT0VXHEJJe+4r7do7qx/cHeDyZwKKerZBQYUWgjlk/ABABjHC9tAbHB3T0V2BomFJt+8RmesBYOSZ3zGjxFXKDJZOZqmFvgpFeMMhmFt+vzIPdTHC4rPnkYdMrG8XD9YKXTaJcHkzNg/JaInhnYmUFV9SC6wGrod9eL4NLJyUJ4Cbx0EhooMB5wSQPWHSwYH+A4SWrIQ+Y1nFQ+YDHrYBhBdPmBxts+q+pYHv7JBUKgp0CX53wtSw4DcyCYhmGvMtC69SRQauQBieBeaCgjBbnm+A7u+u0eiKIJBheMLu3utCT/5QKxuWRm0dE8wTJwQIPIa9IYD0SznPKYmqTZOkfnDzwny0unu2EKz9HolQwbDlQOBBmbydWABHXgrLprTivAEhgqAPPoexSVNfvpgcQCJnyHwZUDaANNQ9cDpmkQyIeCkZb20EqeMF1zoT/OCTiDwotKBjwHIuktprHojoRoDXkTQRIHjClmqmP4yA6SuutntQnHn6RX/mhmfpg3VkW7aT50ZvsKfDx2bdoa6+Bmd5eNnZtaK3I36S3c87Qq1SWy53Qw1Uk6Qm9+goDqxB3gBec1eZ6Z92hBD2XNsv6mV0ChAlgtxQYPBAJeTy/ANI2R1D/diavAAAAAElFTkSuQmCC"
    },
    "0f04": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADz0lEQVRYR71XW2hcVRRd684ktY+0WlvyU9pYh7mHEh9I5E6rKMFXRcEf6Yci1h+rH5UW/KgVbS1C6o9FkYoW/LAICqIiPhClvqBzgyVIlXhuOkOGUAPGVjEkzWQyuVvOdWY6ydxk7jzq+b1rr7XOOfvsuzcRcfWM9lzVOdF5vyXWLgiSADaA2CAiFogLAC4Q1AA+zHfnP89dl8tHoWY9kBpU14ovL5N8DMDqenjzXURmALw3v2L+YOaWzJ/LxSxtQBCzXftZAM+T7IoiHIKZFpEBL++9gn4UwzhCDSTcxNq4xD8FcWeTwgvCROT0zOqZB8duHPt7MV+NAZVWPQC+BpFoh3gVR27On7snuyObqeZdYGDz2c3XrJxe+RPJ69ssXqbL+XH/1pG+EZO0waoY2Pbrtk5/yv8eQOoKiQe0Ajkz7U/fcX7HeZOolw2otDoM4tCVFK/iHtApfbBiYNPpTevXWGvGoj6zVk2KSL7AQs9oavSP4AqS6eTrFq29rRI3GP+2Tuk9hHnvg/ZfBNc2SFAXLpAfCXYCcBaDBTLpOd562q7dT/BUXbZGAYI39Ha9FwKqQWVKtCnfCxexkyqtXgWxv1H+OvgTOqWfLGNUWv0CojfkFI7TTttfktzZLgMCOek53uMwlwvAdu1jBPeF8QvklLmCnwne1A4DAvnAc7xHQPj1xIOaIPKbOYEJkhtDHYqME5wDsaWeQYF84jnewyDmDVa5agDAgeXiBPLPcgbOaUfb5iiXO8ZSdfvCm/EeKv/xooiX4gIDZ0neEOJ0RDtaVe4ybR8n+XQNTvCN1WU9MNw7XAh2PqgOQXC43omVDHhUrvoKwL1LBJzQjt5TlVDvEHyiCvtDvjt/X7n7SbrJAxYsc/RR13cmCZfM0hLLu9rRuwMTAoM/SfJRAO5kfPKu8b7xSwbXhLhJwjejFqJqE5bt2kdiXbGjw73DU6Vs30fwWNRtV3CmEJVK8UWC6+oQXDZRBbRduylx0zfGumJXBz8j27VfI/hMhB28rx1t3nm5yDQlXkrAt7yU91RgoKHfseCjQkdhf7wY323BeimC6dqHI5Iv+sUt2duyE5WOSLnKkL3YDGETMUd1Sj9n4ioGEucSK+IX498C2N4EYfQQwdCUTN1e05IZBtOUrrq0agiA6YzbvkTkd+mQm0Ob0rJa0JYTpjjV/r9bs5Qrxot3Z/oy2Wqa0MFk65mt6zqKHR8T7G9N87/ohgaTimBpNCP5QgvNanOjWfWuE0OJjbHZ2JH/fzhddPZh47lAuoNZozSeA/DMeD7bPftZ1PH8X4MQmQWveFTbAAAAAElFTkSuQmCC"
    },
    1: function(e, t) {},
    1642: function(e, t, n) {
        "use strict";
        var o = n("cd12"),
            a = n.n(o);
        a.a
    },
    2: function(e, t) {},
    3: function(e, t) {},
    "365c": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        })), n.d(t, "d", (function() {
            return c
        })), n.d(t, "b", (function() {
            return l
        })), n.d(t, "c", (function() {
            return u
        }));
        n("d3b7");
        var o = n("bc3a"),
            a = n.n(o),
            i = a.a.create({
                baseURL: Object({
                    NODE_ENV: "production",
                    VUE_APP_BASE_API: "/api/",
                    VUE_APP_STATIC_URL: "/",
                    BASE_URL: "/"
                }).BASE_API,
                timeout: 15e3
            });
        i.interceptors.request.use((function(e) {
            return e
        }), (function(e) {
            Promise.reject(e)
        })), i.interceptors.response.use((function(e) {
            return e.data
        }), (function(e) {
            return Message({
                message: e.message,
                type: "error",
                duration: 5e3
            }), Promise.reject(e)
        }));
        var r = i;

        function s(e) {
            return r({
                url: "/pools.json",
                method: "get",
                params: e
            })
        }

        function c(e) {
            return r({
                url: "/vaults.json",// /v1/vaults
                method: "get",
                params: e
            })
        }

        function l(e) {
            return r({
                url: "https://api.newdex.vip/v1/tickers",
                method: "get",
                params: e
            })
        }

        function u(e) {
            return r({
                url: "https://vexascan.com/v1/chain/get_table_rows",
                //eos url
                //url: "https://eospush.tokenpocket.pro/v1/chain/get_table_rows",
                method: "post",
                data: e
            })
        }
    },
    "3d39": function(e, t, n) {},
    4: function(e, t) {},
    "411f": function(e, t, n) {
        "use strict";
        var o = n("92be"),
            a = n.n(o);
        a.a
    },
    4146: function(e, t, n) {
        "use strict";
        var o = n("fcbe"),
            a = n.n(o);
        a.a
    },
    "43f0": function(e, t, n) {
        "use strict";
        var o = n("6a10"),
            a = n.n(o);
        a.a
    },
    5: function(e, t) {},
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var o = n("2b0e"),
            a = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "wrapper",
                    attrs: {
                        id: "app"
                    }
                }, [n("MHeader"), n("router-view"), n("MFooter")], 1)
            },
            i = [],
            r = n("fa7d"),
            s = (n("3d39"), function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", [o("div", {
                    staticClass: "header cf"
                }, [o("div", {
                    staticClass: "inner"
                }, [e._m(0), o("div", {
                    staticClass: "menu"
                }, [o("router-link", {
                    attrs: {
                        to: "/mine"
                    }
                }, [e._v(e._s(e.$t("menus.mine")))]), o("router-link", {
                    //屏蔽点击
                    style: "pointer-events: none",
                    attrs: {
                        to: "/vault"
                    }
                }, [e._v(e._s(e.$t("menus.vault")))]), o("router-link", {
                    //屏蔽点击
                    style: "pointer-events: none",
                    attrs: {
                        to: "/vote"
                    }
                }, [e._v(e._s(e.$t("menus.vote")))]), 
                // o("a", {
                //     attrs: {
                //         href: "https://community.eosfi.io",
                //         target: "_blank"
                //     }
                // }, [e._v(e._s(e.$t("menus.community")))]), 
                o("router-link", {
                    attrs: {
                        to: "/rules"
                    }
                }, [e._v(e._s(e.$t("menus.rules")))])], 1), o("div", {
                    staticClass: "topTools"
                }, [o("div", {
                    staticClass: "language"
                }, [o("div", {
                    staticClass: "tit"
                }, [e._v(e._s(e.$t("menus.language")))]), o("a", {
                    on: {
                        click: function(t) {
                            return e.changeLanguage("en")
                        }
                    }
                }, [o("img", {
                    attrs: {
                        src: n("027c")
                    }
                })]), o("a", {
                    on: {
                        click: function(t) {
                            return e.changeLanguage("zh-cn")
                        }
                    }
                }, [o("img", {
                    attrs: {
                        src: n("b734")
                    }
                })])]), o("div", {
                    staticClass: "loginWrap"
                }, [this.name ? e._e() : o("a", {
                    staticClass: "btn",
                    on: {
                        click: e.login
                    }
                }, [e._v(e._s(e.$t("menus.login")))]), this.name ? o("a", {
                    staticClass: "btn",
                    on: {
                        click: e.myWallet
                    }
                }, [e._v(e._s(e.$t("menus.loginIn")))]) : e._e(), this.name ? o("a", {
                    staticClass: "btn",
                    on: {
                        click: e.logoutBtn
                    }
                }, [e._v(e._s(e.$t("menus.loginOut")))]) : e._e(), o("a", {
                    staticClass: "btn",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(t) {
                            e.isShowNodeList = !0
                        }
                    }
                }, [e._v(e._s(e.$t("menus.nodeTitle")))])])])])]), o("page-dialog", {
                    attrs: {
                        "is-show": e.dialog,
                        "max-width": 600
                    },
                    on: {
                        "on-close": function(t) {
                            e.dialog = !1
                        }
                    }
                }, [o("div", {
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [e._v(e._s(e.$t("menus.dialog.title")))]), o("div", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        slot: "main"
                    },
                    slot: "main"
                }, [o("div", {
                    staticClass: "accountInfo"
                }, [o("i", {
                    staticClass: "thumb"
                }, [o("img", {
                    attrs: {
                        alt: "",
                        src: n("cfe5")
                    }
                })]), o("div", {
                    staticClass: "username"
                }, [e._v(e._s(e.name))]), o("div", {
                    staticClass: "money"
                }, [e._v(" " + e._s(e.balance) + " ")]), o("div", {
                    staticClass: "tit"
                }, [e._v(e._s(e.$t("menus.dialog.money")))]), o("div", {
                    staticClass: "bottom"
                }, [o("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: function(t) {
                            e.dialog = !1
                        }
                    }
                }, [e._v(e._s(e.$t("menus.dialog.close")))])])])])]), o("page-dialog", {
                    attrs: {
                        "is-show": e.isShowNodeList,
                        "max-width": 500
                    },
                    on: {
                        "on-close": function(t) {
                            e.isShowNodeList = !1
                        }
                    }
                }, [o("div", {
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [e._v(" " + e._s(e.$t("nodeList.title")) + " ")]), o("div", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        slot: "main"
                    },
                    slot: "main"
                }, [o("nodeList", {
                    on: {
                        closeNodeList: e.closeNodeList
                    }
                })], 1)]), o("page-dialog", {
                    attrs: {
                        "is-show": e.isShowAnnouncement,
                        "max-width": 500
                    },
                    on: {
                        "on-close": function(t) {
                            e.isShowAnnouncement = !1
                        }
                    }
                }, [o("div", {
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [e._v(" " + e._s(e.$t("menus.announcement")) + " ")]), o("div", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        slot: "main"
                    },
                    slot: "main"
                }, [e._v(" " + e._s(e.$t("menus.announcementContent")) + " "), o("a", {
                    staticStyle: {
                        color: "dodgerblue"
                    },
                    attrs: {
                        href: e.$t("menus.announcementURL"),
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("menus.announcementURL")))])])])], 1)
            }),
            c = [function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "logo"
                }, [n("a", {
                    attrs: {
                        href: "/"
                    }
                })])
            }],
            l = (n("b0c0"), n("f3f3")),
            u = n("2f62"),
            d = n("9565"),
            m = function() {
                var e = this,
                    t = e.$createElement,
                    o = e._self._c || t;
                return o("div", {
                    staticClass: "nodeList"
                }, [o("dl", [e._m(0), e._l(e.nodeList, (function(t, a) {
                    return o("dd", {
                        key: a,
                        class: {
                            on: e.nowUrl == t.url
                        },
                        on: {
                            click: function(n) {
                                return e.selectNode(t.url)
                            }
                        }
                    }, [o("img", {
                        staticClass: "img",
                        attrs: {
                            src: n("0f04")
                        }
                    }), o("div", [e._v("https://" + e._s(t.url))]), o("div", [e._v(e._s(t.speed))]), o("div", {
                        staticStyle: {
                            display: "none"
                        }
                    }, [o("img", {
                        ref: "img",
                        refInFor: !0,
                        attrs: {
                            src: "https://" + t.img
                        }
                    })])])
                }))], 2), o("div", {
                    staticClass: "closeNodeList"
                }, [o("a", {
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: e.confirmBtn
                    }
                }, [e._v(e._s(e.$t("nodeList.done")))])])])
            },
            p = [function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("dt", [n("div", [e._v("Node")]), n("div", [e._v("Speed")])])
            }],
            h = {
                data: function() {
                    return {
                        nodeList: [{
                            url: "vexascan.com",
                            speed: "Loading...",
                            img: ""
                        }, {
                            url: "explorer.vexanium.com",
                            speed: "Loading...",
                            img: ""
                        }],
                        interval: null,
                        ping: 1,
                        nowUrl: ""
                    }
                },
                computed: Object(l["a"])({}, Object(u["b"])({
                    node: function(e) {
                        return e.user.node
                    }
                })),
                created: function() {
                    this.newRequest()
                },
                mounted: function() {
                    for (var e = this, t = function(t) {
                            e.$refs.img[t].onerror = function() {
                                e.nodeList[t].speed = 100 * e.ping + "ms"
                            }
                        }, n = 0; n < this.nodeList.length; n++) t(n);
                    this.nowUrl = this.node
                },
                methods: {
                    selectNode: function(e) {
                        this.nowUrl = e
                    },
                    newRequest: function() {
                        var e = this;
                        this.interval = window.setInterval((function() {
                            e.ping++, 150 === e.ping && window.clearInterval(e.interval)
                        }), 100);
                        for (var t = 0; t < this.nodeList.length; t++) this.nodeList[t].img = this.nodeList[t].url + "/" + Math.random()
                    },
                    confirmBtn: function() {
                        this.$store.dispatch("unNodes", this.nowUrl), this.$emit("closeNodeList"), this.$store.dispatch("loginWallet")
                    }
                },
                destroyed: function() {
                    window.clearInterval(this.interval)
                }
            },
            f = h,
            g = (n("411f"), n("2877")),
            D = Object(g["a"])(f, m, p, !1, null, "c1a7bb44", null),
            v = D.exports,
            b = {
                props: {
                    current: {
                        type: String,
                        default: "home"
                    }
                },
                components: {
                    pageDialog: d["a"],
                    nodeList: v
                },
                data: function() {
                    return {
                        language: "" === window.localStorage.getItem("language") || "en" === window.localStorage.getItem("language") ? "en" : "zh-cn",
                        dialog: !1,
                        isShowAnnouncement: !1,
                        isShowNodeList: !1
                    }
                },
                computed: Object(l["a"])({}, Object(u["b"])({
                    token: function(e) {
                        return e.user.name || ""
                    },
                    name: function(e) {
                        return e.user.name || ""
                    },
                    balance: function(e) {
                        return e.user.balance
                    }
                })),
                created: function() {
                    var e = this;
                    setTimeout((function() {
                        e.login()
                    }), 1e3), this.$store.dispatch("GetInfo")
                },
                methods: {
                    login: function() {
                        this.$store.dispatch("loginWallet")
                    },
                    logoutBtn: function() {
                        this.$store.dispatch("LogOut")
                    },
                    changeLanguage: function(e) {
                        this.$i18n.locale = e, window.localStorage.setItem("language", e), this.language = window.localStorage.getItem("language")
                    },
                    myWallet: function() {
                        this.dialog = !0
                    },
                    closeNodeList: function() {
                        this.isShowNodeList = !1
                    }
                }
            },
            w = b,
            y = (n("4146"), Object(g["a"])(w, s, c, !1, null, "2687ac0a", null)),
            S = y.exports,
            k = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "footer cf"
                }, [n("div", {
                    staticClass: "inner cf"
                }, [n("ul", {
                    staticClass: "sns"
                }, [n("li", [n("a", {
                    attrs: {
                        // href: e.$t("footer.telegram"),
                        // target: "_blank"
                    }
                }, [e._v("Telegram")])]), e._m(0), e._m(1)])]), 
                // n("a", {
                //     staticClass: "securityLogo",
                //     attrs: {
                //         href: "https://www.slowmist.com/",
                //         target: "_blank"
                //     }
                // })
                ])
            },
            M = [function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("li", [n("a", {
                    attrs: {
                        // href: "https://twitter.com/Dmd_Finance",
                        // target: "_blank"
                    }
                }, [e._v("Twitter")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("li", [n("a", {
                    attrs: {
                        // href: "https://medium.com/@emfi/TUYUL-finance-faq-67d639a3dff6",
                        // target: "_blank"
                    }
                }, [e._v("Medium")])])
            }],
            O = {
                methods: {}
            },
            T = O,
            A = (n("1642"), Object(g["a"])(T, k, M, !1, null, "5f8915d5", null)),
            C = A.exports,
            E = {
                name: "app",
                components: {
                    MHeader: S,
                    MFooter: C
                },
                data: function() {
                    return {
                        coin: Object(r["d"])("coin") || "eth"
                    }
                }
            },
            x = E,
            P = Object(g["a"])(x, a, i, !1, null, null, null),
            L = P.exports,
            U = (n("d3b7"), n("8c4f"));
        o["default"].use(U["a"]);
        var j = new U["a"]({
                mode: "history",
                routes: [{
                    path: "/",
                    component: function() {
                        return n.e("home").then(n.bind(null, "7abe2"))
                    }
                }, {
                    path: "/mine",
                    name: "mine",
                    redirect: "/mine/index",
                    component: function() {
                        return Promise.all([n.e("chunk-1ea07b17"), n.e("mine")]).then(n.bind(null, "0c11"))
                    },
                    children: [{
                        path: "index",
                        component: function() {
                            return Promise.all([n.e("chunk-1ea07b17"), n.e("mine")]).then(n.bind(null, "b5b1"))
                        }
                    }, {
                        path: "detail",
                        component: function() {
                            return Promise.all([n.e("chunk-1ea07b17"), n.e("mine")]).then(n.bind(null, "64f2"))
                        }
                    }, {
                        path: "detaildmd",
                        component: function() {
                            return Promise.all([n.e("chunk-1ea07b17"), n.e("mine")]).then(n.bind(null, "5b27"))
                        }
                    }, {
                        path: "detailyfc",
                        component: function() {
                            return Promise.all([n.e("chunk-1ea07b17"), n.e("mine")]).then(n.bind(null, "01c5"))
                        }
                    }, {
                        path: "detailhub",
                        component: function() {
                            return Promise.all([n.e("chunk-1ea07b17"), n.e("mine")]).then(n.bind(null, "ea8a"))
                        }
                    }, {
                        path: "detailwool",
                        component: function() {
                            return Promise.all([n.e("chunk-1ea07b17"), n.e("mine")]).then(n.bind(null, "30d2"))
                        }
                    }, {
                        path: "detaildfs",
                        component: function() {
                            return Promise.all([n.e("chunk-1ea07b17"), n.e("mine")]).then(n.bind(null, "a3eb"))
                        }
                    }]
                }, {
                    path: "/vault",
                    name: "vault",
                    redirect: "/vault/index",
                    component: function() {
                        return n.e("chunk-2d0aec89").then(n.bind(null, "0c11"))
                    },
                    children: [{
                        path: "index",
                        component: function() {
                            return n.e("chunk-8b3d126a").then(n.bind(null, "91c0"))
                        }
                    }, {
                        path: "vaultDetail",
                        component: function() {
                            return n.e("chunk-0d282e8e").then(n.bind(null, "d9f6"))
                        }
                    }, {
                        path: "vaultDetail2",
                        component: function() {
                            return Promise.all([n.e("chunk-1ea07b17"), n.e("chunk-2ce65186")]).then(n.bind(null, "5e3a"))
                        }
                    }]
                }, {
                    path: "/vote",
                    name: "vote",
                    redirect: "/vote/index",
                    component: function() {
                        return n.e("chunk-2d0aec89").then(n.bind(null, "0c11"))
                    },
                    children: [{
                        path: "index",
                        component: function() {
                            return n.e("chunk-4689280a").then(n.bind(null, "4bfe"))
                        }
                    }, {
                        path: "voteDetail",
                        component: function() {
                            return n.e("chunk-26a2b14d").then(n.bind(null, "4b3b"))
                        }
                    }]
                }, {
                    path: "/rules",
                    component: function() {
                        return n.e("rules").then(n.bind(null, "1d4c"))
                    }
                }, {
                    path: "*",
                    redirect: "/"
                }]
            }),
            B = (n("4160"), n("b680"), n("b64b"), n("ac1f"), n("5319"), n("1276"), n("498a"), n("159b"), n("fc11")),
            I = n("a78e"),
            N = n.n(I),
            R = "Token";

        function W(e) {
            return N.a.set(R, e)
        }

        function _() {
            return N.a.remove(R)
        }
        var H, Y = n("74f7"),
            z = n("01ea"),
            G = (Object(r["d"])("source"), z["a"].network),
            V = z["a"].config,
            F = Object(Y["a"])(G, V),
            Z = "USER_SIGNIN",
            q = "USER_SIGNOUT",
            X = "USER_BALANCE",
            Q = "USER_AUTHORITY",
            J = "USER_NODE",
            K = "",
            $ = {
                state: {
                    name: "",
                    balance: "",
                    authority: "",
                    node: "vexascan.com"
                },
                mutations: (H = {}, Object(B["a"])(H, Z, (function(e, t) {
                    e.name = t
                })), Object(B["a"])(H, q, (function(e) {
                    Object.keys(e).forEach((function(t) {
                        return o["default"].delete(e, t)
                    }))
                })), Object(B["a"])(H, X, (function(e, t) {
                    e.balance = t
                })), Object(B["a"])(H, Q, (function(e, t) {
                    e.authority = t
                })), Object(B["a"])(H, J, (function(e, t) {
                    e.node = t
                })), H),
                actions: {
                    loginWallet: function(e) {
                        var t = e.commit;
                        F.connect((function(e) {
                            e && F.getIdentity((function(e, n) {
                                n ? (W(n.name), t(Z, n.name), t(Q, n.authority), K = n.authority, F.getHarvestTokenBalance({
                                    accountName: n.name
                                }, (function(e, n) {
                                    var o;
                                    o = 0 !== n.length ? n[0].replace(/[^0-9|\.]/g, "") : "0", t(X, o)
                                }))) : (t(Z, null), t(X, null), _(), F.forgetIdentity())
                            }))
                        }))
                    },
                    LogOut: function(e) {
                        var t = e.commit;
                        t(Z, null), t(X, null), _(), F.forgetIdentity()
                    },
                    UserStake: function(e, t) {
                        e.dispatch, e.commit;
                        return new Promise((function(e, n) {
                            F.connect((function(a) {
                                a && F.getIdentity((function(a, i) {
                                    var r = {
                                        from: t.accountName,
                                        to: t.pool.poolContract,
                                        amount: parseFloat(t.amount).toFixed(t.pool.sTokenPrecision) + " " + t.pool.sTokenSymbol,
                                        memo: "stake",
                                        contract: t.pool.sTokenContract,
                                        authority: K
                                    };
                                    F.generalTransfer(r, (function(t, a) {
                                        if (a && e(a), t) {
                                            if (n(t), "signature_rejected" === t.type) return void o["default"].prototype.$message({
                                                message: t.message,
                                                type: "error"
                                            });
                                            var i = JSON.parse(t);
                                            i.error.details[0].message ? o["default"].prototype.$message({
                                                message: i.error.details[0].message,
                                                type: "error"
                                            }) : o["default"].prototype.$message({
                                                message: i,
                                                type: "error"
                                            })
                                        }
                                    }))
                                }))
                            }))
                        })).catch((function(e) {}))
                    },
                    UserGetReward: function(e, t) {
                        e.dispatch, e.commit;
                        return new Promise((function(e, n) {
                            F.connect((function(a) {
                                a && F.getIdentity((function(a, i) {
                                    var r = t;
                                    r.authority = K, F.getReward(r, (function(t, a) {
                                        if (a && e(a), t) {
                                            if (n(t), "signature_rejected" === t.type) return void o["default"].prototype.$message({
                                                message: t.message,
                                                type: "error"
                                            });
                                            var i = JSON.parse(t);
                                            i.error.details[0].message ? o["default"].prototype.$message({
                                                message: i.error.details[0].message,
                                                type: "error"
                                            }) : o["default"].prototype.$message({
                                                message: i,
                                                type: "error"
                                            })
                                        }
                                    }))
                                }))
                            }))
                        })).catch((function(e) {}))
                    },
                    UserExitPool: function(e, t) {
                        e.dispatch, e.commit;
                        return new Promise((function(e, n) {
                            F.connect((function(a) {
                                a && F.getIdentity((function(a, i) {
                                    var r = t;
                                    r.authority = K, F.exitPool(r, (function(t, a) {
                                        if (a && e(a), t) {
                                            if (n(t), "signature_rejected" === t.type) return void o["default"].prototype.$message({
                                                message: t.message,
                                                type: "error"
                                            });
                                            var i = JSON.parse(t);
                                            i.error.details[0].message ? o["default"].prototype.$message({
                                                message: i.error.details[0].message,
                                                type: "error"
                                            }) : o["default"].prototype.$message({
                                                message: i,
                                                type: "error"
                                            })
                                        }
                                    }))
                                }))
                            }))
                        })).catch((function(e) {}))
                    },
                    UserVote: function(e, t) {
                        e.dispatch, e.commit;
                        return new Promise((function(e, n) {
                            F.connect((function(o) {
                                o && F.getIdentity((function(o, a) {
                                    var i = t;
                                    i.authority = K, F.UserVote(i, (function(t, o) {
                                        t ? n(t) : o && e(o)
                                    }))
                                }))
                            }))
                        }))
                    },
                    myHTokenBalance: function(e, t) {
                        var n = e.commit;
                        F.getHarvestTokenBalance({
                            accountName: t
                        }, (function(e, t) {
                            var o;
                            o = 0 !== t.length ? t[0].replace(/[^0-9|\.]/g, "") : "0", n(X, o)
                        }))
                    },
                    mySTokenBalance: function(e, t) {
                        e.commit;
                        return new Promise((function(e, n) {
                            var o = {
                                account: t.accountName,
                                code: t.pool.sTokenContract,
                                symbol: t.pool.sTokenSymbol
                            };
                            F.getStakeTokenBalance(o, (function(t, n) {
                                var o;
                                o = 0 != n.length ? n[0].trim().split(" ") : "0", e(o)
                            }))
                        }))
                    },
                    queryPoolInfo: function(e, t) {
                        e.commit;
                        return new Promise((function(e, n) {
                            F.getPoolInfo(t.pool, (function(t, o) {
                                o ? e(o) : n(t)
                            }))
                        }))
                    },
                    queryGlobalInfo: function(e, t) {
                        e.commit;
                        return new Promise((function(e, n) {
                            F.getGlobalInfo(t.pool, (function(t, o) {
                                o ? e(o) : n(t)
                            }))
                        }))
                    },
                    queryMyStakeInfo: function(e, t) {
                        e.commit;
                        return new Promise((function(e, n) {
                            var o = {
                                accountName: t.accountName
                            };
                            F.getMyStakeInfo(o, (function(t, o) {
                                o ? e(o) : n(t)
                            }))
                        }))
                    },
                    queryMyPoolInfo: function(e, t) {
                        e.commit;
                        return new Promise((function(e, n) {
                            var o = {
                                accountName: t.accountName,
                                pool: t.pool
                            };
                            F.getMyPoolInfo(o, (function(t, o) {
                                o ? e(o) : n(t)
                            }))
                        }))
                    },
                    queryMyLPPoolInfo: function(e, t) {
                        e.commit;
                        return new Promise((function(e, n) {
                            var o = {
                                accountName: t.accountName,
                                pool: t.pool
                            };
                            F.getMyLPPoolInfo(o, (function(t, o) {
                                o ? e(o) : n(t)
                            }))
                        }))
                    },
                    unNodes: function(e, t) {
                        var n = e.commit;
                        n(J, t), G.host = t;
                        if(t === "vexascan.com")
                        {
                            G.port = 8443;
                        }
                        else if(t === "explorer.vexanium.com")
                        {
                            G.port = 6960;
                        }
                    },
                    VaultEOSReward: function(e, t) {
                        e.dispatch, e.commit;
                        return new Promise((function(e, n) {
                            F.connect((function(o) {
                                o && F.getVaultEOSReward(t, (function(t, o) {
                                    if (o && e(o), t) {
                                        var a = Object(r["c"])(t);
                                        n(a)
                                    }
                                }))
                            }))
                        }))
                    },
                    UserDeposit: function(e, t) {
                        e.dispatch, e.commit;
                        return new Promise((function(e, n) {
                            F.connect((function(o) {
                                o && F.getIdentity((function(o, a) {
                                    var i = {
                                        from: t.from,
                                        to: t.to,
                                        amount: t.amount,
                                        memo: t.memo,
                                        contract: t.contract,
                                        authority: K
                                    };
                                    F.generalTransfer(i, (function(t, o) {
                                        if (o && e(o), t) {
                                            var a = Object(r["c"])(t);
                                            n(a)
                                        }
                                    }))
                                }))
                            }))
                        }))
                    },
                    UserWithdraw: function(e, t) {
                        e.dispatch, e.commit;
                        return new Promise((function(e, n) {
                            F.connect((function(o) {
                                o && F.getIdentity((function(o, a) {
                                    var i = {
                                        from: t.from,
                                        to: t.to,
                                        amount: t.amount,
                                        memo: t.memo,
                                        contract: t.contract,
                                        authority: K
                                    };
                                    F.generalTransfer(i, (function(t, o) {
                                        if (o && e(o), t) {
                                            var a = Object(r["c"])(t);
                                            n(a)
                                        }
                                    }))
                                }))
                            }))
                        }))
                    }
                }
            },
            ee = n("365c"),
            te = {
                state: {
                    eos: {},
                    usdt: {},
                    ogx: {},
                    hub: {},
                    dmd: {},
                    yfc: {},
                    hublp: {},
                    woollp: {},
                    dfslp: {}
                },
                mutations: {
                    VEX: function(e, t) {
                        e.eos = t
                    },
                    USDV: function(e, t) {
                        e.usdt = t
                    },
                    VYN: function(e, t) {
                        e.ogx = t
                    },
                    DJV: function(e, t) {
                        e.hub = t
                    },
                    TUYUL: function(e, t) {
                        e.dmd = t
                    },
                    YFC: function(e, t) {
                        e.yfc = t
                    },
                    HUBLP: function(e, t) {
                        e.hublp = t
                    },
                    WOOLLP: function(e, t) {
                        e.woollp = t
                    },
                    DFSLP: function(e, t) {
                        e.dfslp = t
                    }
                },
                actions: {
                    GetInfo: function(e) {
                        var t = e.commit;
                        e.state;
                        return new Promise((function(e, n) {
                            Object(ee["a"])().then((function(n) {
                                //加载pool.json
                                t("VEX", n.pools[0]), t("USDV", n.pools[1]), t("VYN", n.pools[2]), t("DJV", n.pools[3]), 
                                //t("TUYUL", n.pools[4]), t("YFC", n.pools[5]), t("HUBLP", n.pools[6]), t("WOOLLP", n.pools[7]), t("DFSLP", n.pools[8]), 
                                e(n)
                            })).catch((function(e) {
                                n(e)
                            }))
                        }))
                    }
                }
            },
            ne = {
                name: function(e) {
                    return e.user.name
                },
                balance: function(e) {
                    return e.user.balance
                }
            },
            oe = ne;
        o["default"].use(u["a"]);
        var ae = new u["a"].Store({
                modules: {
                    user: $,
                    setting: te
                },
                getters: oe
            }),
            ie = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("transition", {
                    attrs: {
                        name: "mei-message-fade"
                    }
                }, [e.show ? n("div", {
                    class: ["mei-message", e.type ? "mei-message-" + e.type : ""]
                }, ["warning" == e.type ? n("i", {
                    staticClass: "mei-message-icon"
                }, [n("svg", {
                    staticClass: "icon",
                    attrs: {
                        height: "40",
                        "p-id": "7173",
                        t: "1534130512063",
                        version: "1.1",
                        viewBox: "0 0 1024 1024",
                        width: "40",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M512 989.86666668C775.85066667 989.86666667 989.86666667 775.85066667 989.86666668 512c0-263.91893333-214.016-477.86666667-477.86666668-477.86666668-263.98720001 0-477.86666667 213.94773333-477.86666668 477.86666668C34.13333333 775.85066667 248.0128 989.86666667 512 989.86666668zM512 238.93333333c28.19413333 0 51.2 22.9376 51.2 51.2S540.19413333 341.33333333 512 341.33333334c-28.39893334 0-51.2-22.9376-51.2-51.20000001S483.60106667 238.93333333 512 238.93333333zM460.8 494.93333333C460.8 466.60266667 483.60106667 443.73333332 512 443.73333333 540.19413333 443.73333333 563.2 466.60266667 563.2 494.93333333l0 238.93333334C563.2 762.19733333 540.19413333 785.06666667 512 785.06666667c-28.39893334 0-51.2-22.86933333-51.2-51.2L460.8 494.93333333z",
                        fill: "#f5a623",
                        "p-id": "7174"
                    }
                })])]) : e._e(), "error" == e.type ? n("i", {
                    staticClass: "mei-message-icon"
                }, [n("svg", {
                    staticClass: "icon",
                    attrs: {
                        height: "40",
                        "p-id": "4951",
                        t: "1534130023768",
                        version: "1.1",
                        viewBox: "0 0 1024 1024",
                        width: "40",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M511.970515 1024a512.560207 512.560207 0 0 1-511.970515-511.970515 512.560207 512.560207 0 0 1 511.970515-512.029485 512.560207 512.560207 0 0 1 511.970516 511.970515 512.560207 512.560207 0 0 1-511.970516 512.029485z m-5.07135-433.718399l145.889778 145.889778a58.615376 58.615376 0 0 0 41.750187 17.277973 58.556407 58.556407 0 0 0 41.632249-17.277973 58.556407 58.556407 0 0 0 17.277973-41.691218 58.556407 58.556407 0 0 0-17.277973-41.691218l-145.948747-145.948747 145.948747-145.948748a58.556407 58.556407 0 0 0 17.277973-41.691218 58.556407 58.556407 0 0 0-17.277973-41.691218 58.438468 58.438468 0 0 0-41.691218-17.277973 58.615376 58.615376 0 0 0-41.691218 17.277973l-145.948747 145.948748-145.948748-145.948748a58.615376 58.615376 0 0 0-41.691218-17.277973 58.615376 58.615376 0 0 0-41.691218 17.277973 58.969191 58.969191 0 0 0 0 83.382436l145.948748 145.948748-145.948748 145.948747a58.969191 58.969191 0 0 0 0 83.382436 58.615376 58.615376 0 0 0 41.750188 17.277973 58.556407 58.556407 0 0 0 41.691218-17.277973l145.830809-145.889778z",
                        fill: "#E76B66",
                        "p-id": "4952"
                    }
                })])]) : e._e(), "success" == e.type ? n("i", {
                    staticClass: "mei-message-icon"
                }, [n("svg", {
                    staticClass: "icon",
                    attrs: {
                        height: "40",
                        "p-id": "5686",
                        t: "1534130184516",
                        version: "1.1",
                        viewBox: "0 0 1024 1024",
                        width: "40",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M512 32C246.4 32 32 246.4 32 512s214.4 480 480 480 480-214.4 480-480S777.6 32 512 32z m214.4 400l-230.4 230.4c-16 16-38.4 16-54.4 0L320 540.8c-16-16-16-38.4 0-54.4s38.4-16 54.4 0l96 96 204.8-204.8c16-16 38.4-16 54.4 0 12.8 16 12.8 38.4-3.2 54.4z",
                        fill: "#28C828",
                        "p-id": "5687"
                    }
                })])]) : e._e(), "info" == e.type ? n("i", {
                    staticClass: "mei-message-icon"
                }, [n("svg", {
                    staticClass: "icon",
                    attrs: {
                        height: "40",
                        "p-id": "6492",
                        t: "1534130289600",
                        version: "1.1",
                        viewBox: "0 0 1024 1024",
                        width: "40",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M511.263731 64.132646c-247.085468 0-447.387423 200.430892-447.387423 447.674972 0 247.245104 200.301955 447.674972 447.387423 447.674972s447.387423-200.429869 447.387423-447.674972C958.651155 264.563538 758.349199 64.132646 511.263731 64.132646zM566.040289 709.809181c-19.158339 24.910343-55.812143 67.205635-99.207489 67.393923-30.632671 0.187265-62.426795-19.016099-57.409524-70.02996 4.983501-51.015907 33.799804-122.066103 49.570999-178.949648 12.761652-45.947472 29.160133-84.242659-33.92567-83.001389 0-4.315282 0-8.643867 0-12.95915 42.360783-16.70752 107.673302-10.604522 151.413502-25.946952 1.725294 0 3.480264 0 5.205559 0-21.070898 106.189508-65.595974 202.761983-75.691913 311.208904 2.384303 1.820462 2.069125 1.442862 5.204535 2.574638 32.859385 10.980076 51.737338-64.884776 73.089645-59.612703C605.672938 665.820318 570.900993 703.407378 566.040289 709.809181zM559.675324 351.942631c-29.503964 0-53.429887-23.749914-53.429887-53.071729 0-29.318746 23.925922-53.069683 53.429887-53.069683 29.474288 0 53.399187 23.750937 53.399187 53.069683C613.073488 328.192717 589.148589 351.942631 559.675324 351.942631z",
                        "p-id": "6493"
                    }
                })])]) : e._e(), n("span", {
                    staticClass: "mei-message-con"
                }, [e._v(e._s(e.message))])]) : e._e()])
            },
            re = [],
            se = {
                success: "success",
                info: "info",
                warning: "warning",
                error: "error"
            },
            ce = {
                data: function() {
                    return {
                        show: !1,
                        message: "",
                        type: ""
                    }
                },
                computed: {
                    iconClass: function() {
                        return this.type ? "mei-message-icon mei-icon-".concat(se[this.type]) : ""
                    }
                }
            },
            le = ce,
            ue = (n("f926"), Object(g["a"])(le, ie, re, !1, null, "46771214", null)),
            de = ue.exports,
            me = {
                show: !1,
                text: "",
                duration: "3000",
                type: ""
            },
            pe = o["default"].extend(de);
        pe.prototype.close = function() {
            var e = this,
                t = this;
            this.$on("after-leave", (function(n) {
                t.$el && t.$el.parentNode && t.$el.parentNode.removeChild(t.$el), e.$destroy()
            })), t.show = !1
        };
        var he = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!o["default"].prototype.$isServer) {
                    e = Object.assign({}, me, e);
                    var t = document.body,
                        n = new pe({
                            el: document.createElement("div"),
                            data: e
                        });
                    return t.appendChild(n.$el), o["default"].nextTick((function() {
                        n.show = !0, setTimeout((function() {
                            n.close()
                        }), e.duration)
                    })), n
                }
            },
            fe = he,
            ge = {
                install: function(e) {
                    e.prototype.$message = fe
                }
            },
            De = n("a925"),
            ve = {
                error: {
                    account_missing: "Please login first",
                    signature_rejected: "Cancelled by user",
                    Invalidpackedtransaction: "Cancelled by user",
                    unknown: "Unknown error",
                    exceedthemaxwithdrawalamount: "exceed the max withdrawal amount",
                    exceedsbetatestcap: "exceeds beta test cap",
                    insufficientquota: "insufficient quota",
                    mustmeetminimumdepositamount: "must meet minimum deposit amount",
                    depositpaused: "deposit paused",
                    overdrawnbalance: "Insufficient balance or pledged",
                    alreadyvoted: "Please do not vote for the same option.",
                    Cannotchooseashortertimethanthepreviousstaking: "Can't choose a shorter time than before",
                    TUYULisbeingstaked: "TUYUL is being staked, it can be unstaked after expiration time."
                },
                menus: {
                    home: "Home",
                    mine: "Mine",
                    vault: "Vault",
                    vote: "Vote",
                    rules: "Rules",
                    community: "Community",
                    login: "Login",
                    loginIn: "My Wallet",
                    loginOut: "Sign out",
                    language: "Language",
                    nodeTitle: "Node Switch",
                    dialog: {
                        title: "My Account",
                        money: "TUYUL Balance",
                        close: "Cancel"
                    },
                    announcement: "Announcement",
                    announcementContent: "Dear community. Our telegram channel owner, Akon's account was stolen. We are in contact with the telegram team to try and retrieve the account. Please rest assured that user funds are 100% safe. The EFi Smart Contracts are safe. Only the telegram account is affected. Please join our new telegram group:",
                    announcementURL: "https://t.me/efi_global"
                },
                nodeList: {
                    title: "Node Selection",
                    done: "Confirm"
                },
                home: {
                    banner: {
                        start: "Farm starts on 31/03/2021 04 AM GMT",
                        title: "It's a good day to mine some TUYULs on VEX.",
                        tips: "Stake Anytime and get TUYULs Instantly."
                    },
                    slowMist: {
                        text: "TUYUL.finance Smart Contract has been audited by SlowMist. Check Audit Report",
                        here: "Here",
                        links: "https://www.slowmist.com/en/security-audit-certificate.html?id=da0118f07b4b57e855aef73bd5fae341ca85b57bccfa8d3249603626032e8748"
                    },
                    statistics: {
                        money: "My TUYUL balance",
                        number: "Total supply"
                    },
                    token: {
                        title: "Stats",
                        pledge: "My Stake",
                        pledgeAll: "Total Staked",
                        price: "PRICES",
                        rewards: "TUYUL REWARDS",
                        ratio: "My Ratio",
                        expreward: "Expect Reward"
                    },
                    token2: {
                        title: "Stats",
                        pledge: "My Token",
                        pledgeAll: "Total Token",
                        price: "PRICES",
                        rewards: "TUYUL REWARDS"
                    }
                },
                vault: {
                    title: "Vault",
                    desc: "Deposit to Earn More",
                    depositSuccess: "Deposit Successful",
                    depositErr: "The deposit amount cannot be ",
                    extractErr: "The withdraw amount cannot be 0",
                    depositBut: "Deposit",
                    extractBut: "Withdraw",
                    extractAllBut2: "Withdraw All",
                    extractAllBut: "Withdraw by appointment",
                    lockAll: "TVL",
                    explain: "Vault Introduction",
                    locking: "Locked",
                    yourEarnings: "Your VEX earnings",
                    receive: "Claim",
                    receiveSuccess: "Received successfully",
                    marketable: "Redeemable",
                    totalRevenue: "Total Profit",
                    earnMoney: "Your remaining beta quota",
                    availableBalance: "Balance",
                    estimatedValue: "Estimated",
                    acceptableQuantity: "Max withdrawal amount",
                    expectedAcquisition: "Expected to get",
                    test: "TUYUL Vault Smart Contract has been audited by SlowMist. Check Audit Report",
                    links: "https://www.slowmist.com/en/security-audit-certificate.html?id=6a6b302408026276c2e7b9adb64a660ea086e4f81af9c35f344ac4dac0ce16ff",
                    text: "0.1% withdrawal fee",
                    details: "Detail",
                    details2: "Add Liquidity",
                    confirm: "confirm",
                    estimateAPY: "Estimated 24H APY",
                    APY1: "Vault APY",
                    APY4_EOS: "VexSwap dEOS/VEX APY",
                    APY5: "VexSwap APY",
                    importantNotice: "This Vault paused, please withdraw your token ASAP.",
                    text1: "Reward pool of TUYUL mainly comes from buyback,and 0.2% of the total reward pool will be distributed every hour as reward.",
                    text2: "Staking TUYUL, earn more.",
                    text3: "TVL",
                    text4: "Total reward pool",
                    text5: "Next Reward",
                    text6: "Earned",
                    text7: "Harvest",
                    text8: "Harvest&Unstake",
                    text9: "Staked",
                    text10: "Expiration Time",
                    text12: "Maximum APY",
                    text13: "Stake",
                    text14: "Harvest successfully",
                    text15: "Harvest&Unstake successfully",
                    text16: "Balance",
                    text17: "≥ 0.1TUYUL",
                    text18: "Staking Time",
                    text19: "Any time",
                    text20: "Days",
                    text21: "Stake",
                    text22: "Staking Rule",
                    text23: "When staking TUYUL, you can choose different lock-up time, the longer time, the higher mining weight.",
                    text24: "Mining weight",
                    text25: "*When you have staked TUYUL, you can only choose the same staking time or longer staking time. And the expiration time is based on the last TUYUL staked",
                    text26: "The stake amount cannot be less than 0.1 TUYUL",
                    text27: "Stake successfully",
                    text28: "Can't choose a shorter time than before"
                },
                time: {
                    days: "days",
                    hours: "hours",
                    mins: "mins",
                    secs: "secs"
                },
                mine: {
                    title: "Select a Mine",
                    tips: "Earn TUYUL tokens by staking Tokens or providing liquidity.",
                    times: "Coming Soon",
                    times2: "End",
                    deposit: "Deposit",
                    gain: "Earn TUYUL",
                    select: "Select"
                },
                mineDetail: {
                    title: "Mines",
                    deposit: "Deposit",
                    deposit2: "and earn TUYUL.",
                    has: "TUYUL earned",
                    collect: "Harvest",
                    btn: "Harvest & Unstake",
                    pledged: "Staked",
                    balance: "Balance",
                    pledge: "Stake",
                    max: "MAX"
                },
                mineDetail2: {
                    conent: "Get TUYUL by mapping the flow cell of DFS Swap TUYUL/VEX.",
                    conentyfc: "Get TUYUL by mapping the flow cell of DFS Swap YFC/VEX.",
                    conenthub: "Get TUYUL by mapping the flow cell of VexSwap HUB/VEX.",
                    conentwool: "Get TUYUL by mapping the flow cell of VexSwap WOOL/VEX.",
                    conentdfs: "Get TUYUL by mapping the flow cell of DFS Swap DFS/VEX.",
                    pledged: "Swap Token",
                    buttom: "Manage"
                },
                rules: {
                    title: "Rules",
                    tips: "This Project is in beta, use at your own risk.",
                    text: "<dl>\n    <dt>Intro:</dt>\n    <dd>TUYUL finance is inspired by TUYUL ,one of the most Popular Indonesian Food along with soto ,rendang ,satay,siomay,nasi goreng, rujak ,ketoprak etc , The name TUYUL originated from bak-so (肉酥, Pe̍h-ōe-jī: bah-so·), the Hokkien pronunciation for 'fluffy meat' or 'minced meat'.\n  <dl>\n    <dd>This suggests that bakso has Indonesian Chinese cuisine origin. Chinese influences is apparent in Indonesian food, such as bakmi, mie ayam, pangsit, mie goreng, kwetiau goreng, bakso, and lumpia(source : https://en.wikipedia.org/wiki/Bakso).</dd>\n    </br>\n  <dt>Rules</dt>\n    <dd>This Project is in beta, use at your own risk.TUYUL (TUYUL.finance) is the first yield farming ( yield optimizer defi ecosystem ) on Vexanium blockchain. \n  <dl>\n    <dd>TUYUL is issued in the form of YFI: no founders, no investors, no inflations, and all people are equal. The  development team of behind TUYUL, aims to improve the Vexanium DeFi ecological infrastructure and stimulate the profitability of the entire VEX ecosystem.",
                    content: "<dl>\n    <dt>Token</dt>\n    <dd>Token Symbol: TUYUL</dd>\n    <dd>Total Supply: 30000</dd>\n    <dd>Token Contract: vexTUYULtoken</dd>\n    <dd><dt>\n</br>\nToken Distribution:</dt></dd>\n  </dl>\n  <dl>\n    <dt>TUYUL Pool V1 (estimate 2 weeks)</dt>\n    <dd>VEX：7000</dd>\n    <dd>USDV：2000</dd>\n    <dd>VYN：500</dd>\n    <dd>DJV : 500</dd>\n  </dl>\n  <dl>\n    <dt>TUYUL Pool V2 (estimate 2 months)</dt>\n    <dd>Cooperation projects LP</dd>\n    <dd>TUYUL/VEX LP 3000</dd>\n    <dd>TUYUL/USDV LP 4000</dd>\n    <dd>VEX/USDV LP 1500</dd>\n    <dd>TUYUL/VYN LP 500</dd>\n    <dd>TUYUL/DJV LP 500</dd>\n    <dd>VYN/VEX LP 500</dd>\n  </dl>\n  <dl>\n    <dt>TUYUL Pool V3</dt>\n    <dd>Pool Choose By community</dd>\n    <dd>7000 TUYUL (LP vote later)</dd>\n </dl> <dl>\n<dt>Community vote locked</dt>\n    <dd>The community voted to lock the reversed 3000 TUYUL for one year, and it will be locked until 2022-03-30 00:00GMT</dd> \n    </br> </dl>",
                    slowmist: "users’ funds are safe! The threshold of multisig is 22, it requires at least 3 members to approve to update the contract, TUYUL team cannot update that alone, which ensures the consistency and security of the contract."
                },
                footer: {
                    telegram: "https://t.me/efi_global"
                },
                message: {
                    stake: "stake successfully",
                    harvest: "harvest successfully",
                    exit: "harvest successfully"
                },
                vote: {
                    vote: "Vote",
                    notStarted: "NOT STARTED",
                    progress: "IN PROGRESS",
                    end: "PASSED",
                    end2: "CANCELED",
                    list: "Vote List",
                    myVote: "My Vote Item",
                    myVoteNum: "My votes",
                    myVoteWeight: "My Vote Weight",
                    reward: "Reward",
                    receive: "Unstake",
                    initiator: "Proposer",
                    author: "Author",
                    startTime: "Start Date",
                    endTime: "End Date",
                    result: "Results",
                    success: "Vote successfully",
                    receiveSuccess: "Appointment successful",
                    receiveSuccess2: "Harvest successfully",
                    empty: "Vote Cannot be empty",
                    select: "Select an item and vote"
                },
                voteText: [{
                    title: "New Liquidity Pool️ Proposal",
                    startTime: "2020-09-16 04:00 UTC",
                    endTime: "2020-09-19 04:00 UTC",
                    content: "1. Select a proposal, enter the amount of TUYUL to vote; you can vote multiple times, but you cannot modify it after voting.\n\t  </br>\n\t2. At the end of the voting, rewards will be issued according to the proportion of votes to the total votes; the top 3 votes will receive additional rewards.\n\t</br>\n  3. The voting TUYUL will be locked, and when the proposal is over, it can be claimed with the reward.\n  </br>\n  4. The voting weight on the first day is 3, the voting weight on the second day is 2, and the voting weight on the third day is 1. The number of votes and the weight will ultimately affect the result and the number of rewards.\n  </br>\n  5. Totally 3 pools will be selected at the first round, each pool will have 500 TUYUL.",
                    voteOptions: ["HUB/VEX LP", "DFS/VEX LP", "BOX/VEX LP", "TKT/VEX LP", "TPT/VEX LP", "PIZZA/VEX LP", "IQ/VEX LP", "VIG/VEX LP", "DAPP/VEX LP", "EOSDT/USDT LP", "CRL/VEX LP", "WOOL/VEX LP"]
                }, {
                    title: "TUYUL Pool Change Proposal",
                    startTime: "2020-09-19 04:00 UTC",
                    endTime: "2020-09-20 04:00 UTC",
                    content: "1. Select a proposal, enter the amount of TUYUL to vote; you can vote multiple times, but you cannot modify it after voting.\n\t  </br>\n  2. The voting TUYUL will be locked, and when the proposal is over, it can be claimed. No additional rewards for this vote.\n  </br>\n  3. DophinSwap will go alive at 13:00 UTC on Sep 20,2020 and TUYUL/VEX, HUB/VEX LP mining will be started. Should there be any changes in TUYUL/VEX LP and HUB/VEX LP mining in TUYUL?\n  </br>\n  4. For more information about VexSwap: https://medium.com/@e.fi/dolphinswap-e5ccc5a5cf31",
                    voteOptions: ["Stop TUYUL/VEX LP mining", "Stop HUB/VEX LP mining", "Stop HUB/VEX LP and TUYUL/VEX LP mining at the same time", "TUYUL/VEX LP and HUB/VEX LP mining continues, but the total duration is extended from two weeks to 10 weeks", "Maintain the status"]
                }, {
                    title: "TUYUL Pool V3 Proposal",
                    startTime: "2020-09-20 04:00 UTC",
                    endTime: "2020-09-21 04:00 UTC",
                    content: "1. Select a proposal, enter the amount of TUYUL to vote; you can vote multiple times, but you cannot modify it after voting.\n\t  </br>\n  2. The voting TUYUL will be locked, and when the proposal is over, it can be claimed. No additional rewards for this vote.\n  </br>\n  3. How to deal with the remaining 3500 TUYUL in the TUYUL pool V3?",
                    voteOptions: ["Continue to vote, once a week, 500 per pool", "Lock up for half a year", "Lock up for one year", "Temporarily suspended, opening time will be decided by the community"]
                }, {
                    title: "Voting on the mining time of the first TUYUL V3 pools",
                    startTime: "2020-09-21 04:00 UTC",
                    endTime: "2020-09-22 04:00 UTC",
                    content: "1. Select a proposal, enter the amount of TUYUL to vote; you can vote multiple times, but you cannot modify it after voting.\n\t  </br>\n  2. The voting TUYUL will be locked, and when the proposal is over, it can be claimed. No additional rewards for this vote.\n  </br>\n  3. The first batch of V3 TUYUL deposits, with a total of 500 TUYUL per mine, will be opened next Wednesday. The voting decision will determine the mining time of the pool.",
                    voteOptions: ["7 days", "15 days", "30 days", "90 days", "180 days", "360 days"]
                }, {
                    title: "How to deal with the buy-back TUYUL?",
                    startTime: "2020-12-3 2:00 UTC",
                    endTime: "2020-12-5 2:00 UTC",
                    content: "1. Select proposal -> enter the quantity of TUYUL for vote; You can vote multiple times, but changing voted choice is not allowed.\n</br>\n2. TUYUL will be released after voting finished, you will need to claim back.\n</br>\n3. TUYUL participating each proposal must reach min. 30% of total circulating supply (21200 for current time), otherwise, the voting will be void.\n</br>\n4. Total TUYUL buy back(2020-12-2 11:00 UTC): 253.2144262131 TUYUL</br>\n   Vault profit buyback:      TUYULvault  15.4848246609 TUYUL</br>\n   Vault withdrawal fee buyback: dmdvaultfund  145.5367852912 TUYUL</br>\n   VexSwap fee buyback:      dopswapfee12  92.192816261 TUYUL",
                    voteOptions: ["Burn all buy-back", "Burn 30% buy-back, 70% for TUYUL staking reward", "Burn 50% buy-back, 50% for TUYUL staking reward", "100% for TUYUL staking reward", "30% for insurance fund，burn 50% buy-back，20% for sponsor grant for community volunteers."]
                }, {
                    title: "How to deal with the buy-back TUYUL?",
                    startTime: "2020-12-8 4:00 UTC",
                    endTime: "2020-12-11 4:00 UTC",
                    content: "Dear community, due to the voting ratio being lower than what we expected (30%), the TUYUL proposal from last week couldn’t be successfully voted on. We've done our due research and found out a solution. In order to help the liquidity providers vote for the proposals, we will improve the TUYUL-DAO. However, this will take a while to implement. So, until then, we have decided to reduce the 30% voting requirement, down to 15% for the upcoming proposals and re-vote on the first proposal while we are developing the TUYUL-DAO. Due to the cornfi mining, many users are being liquidity provides, we decide to extend the voting time to 3 days.\n</br></br>\nProposal 1: How to deal with the TUYUL buy-back?</br>\nRestart time: 2020-12-08 04:00 UTC</br>\nLasts for : 3 days</br></br>\nAfter this proposal passes, we will start a new one regarding the details of the TUYUL staking reward.",
                    voteOptions: ["Burn all the buy-backs", "Burn 30% buy-back, give out 70% as TUYUL staking reward", "Burn 50% buy-back, give out 50% as TUYUL staking reward", "100% goes to staking reward", "30% for insurance fund, burn 50% of the buy-back and 20% as sponsorship grant for community volunteers."]
                }, {
                    title: "Which ration should be adopted to distribute TUYUL for TUYUL stakers hourly ?",
                    startTime: "2020-12-15 04:00 UTC",
                    endTime: "2020-12-17 04:00 UTC",
                    content: "1. Rewards for TUYUL vault come from the buyback of VexSwap and TUYUL Vaults.</br>\n2. The system will distribute a specific ratio of the TUYUL to reward the stakers hourly, and the DAO will vote for which ratio should be.</br>\n*A higher ratio will quickly deplete the reward pool, please vote carefully",
                    voteOptions: ["0.02%", "0.05%", "0.1%", "0.2%"]
                }, {
                    title: "Whether to stop some mining pool for TUYUL mining?",
                    startTime: "2020-12-29 12:00 UTC",
                    endTime: "2020-12-31 12:00 UTC",
                    content: "Dear community, with the launch of the TUYUL staking mining pool, users can already vote with the staked TUYUL, which has further promoted the success rate of community voting and the enthusiasm for participation. In order to reduce the output of TUYUL, we launched a new proposal today to stop the output of some mining pools and use the stopped output to reward staking users, and the TUYUL releasing rate will be reduced from 1 year to half a year.",
                    voteOptions: ["A. Stop DFS mining", "B. Stop WOOL mining", "C. Stop DFS and WOOL mining at the same time", "D. Maintain the current situation"]
                }]
            },
            be = ve,
            we = {
                error: {
                    account_missing: "請先授權登錄",
                    signature_rejected: "用戶取消",
                    Invalidpackedtransaction: "用戶取消",
                    unknown: "未知錯誤",
                    exceedthemaxwithdrawalamount: "超過最大可提取數量",
                    exceedsbetatestcap: "公測總額度已滿",
                    insufficientquota: "公測個人額度不足",
                    mustmeetminimumdepositamount: "須滿足最小存入金額",
                    depositpaused: "存入已暫停",
                    overdrawnbalance: "餘額不足或者已質押",
                    alreadyvoted: "不能重複投票",
                    Cannotchooseashortertimethanthepreviousstaking: "不能選擇比之前質押更短的時間",
                    TUYULisbeingstaked: "TUYUL質押中，質押時間結束後可解質押"
                },
                menus: {
                    home: "首頁",
                    mine: "礦場",
                    vault: "金庫",
                    vote: "投票",
                    rules: "幫助",
                    community: "論壇",
                    login: "帳號登入",
                    loginIn: "我的錢包",
                    loginOut: "退出",
                    language: "語言",
                    nodeTitle: "節點切換",
                    dialog: {
                        title: "我的帳戶",
                        money: "TUYUL餘額",
                        close: "取消"
                    },
                    announcement: "公告",
                    announcementContent: "EFi管理員賬號akon|TUYUL.finance異常（注意：網站及合約未受任何影響，用戶資金安全），請不要相信任何私聊你信息的用戶，並退出原telegram群聊，加入新群",
                    announcementURL: "https://t.me/efi_cn"
                },
                nodeList: {
                    title: "選擇節點",
                    done: "確認選擇"
                },
                home: {
                    banner: {
                        start: "挖礦將在2021/03/31 04 AM GMT開始",
                        title: "今天是挖TUYUL的好日子",
                        tips: "隨時抵押,立即獲取TUYUL獎勵。"
                    },
                    slowMist: {
                        text: "TUYUL.finance的智慧合約已通過慢霧SlowMist稽核。檢查稽核報告",
                        here: "此處",
                        links: "https://www.slowmist.com/security-audit-certificate.html?id=da0118f07b4b57e855aef73bd5fae341ca85b57bccfa8d3249603626032e8748"
                    },
                    statistics: {
                        money: "我的TUYUL餘額",
                        number: "總供應量"
                    },
                    token: {
                        title: "統計",
                        pledge: "我的質押",
                        pledgeAll: "總質押",
                        price: "價格",
                        rewards: "獎勵",
                        ratio: "占比",
                        expreward: "預期獎勵"
                    },
                    token2: {
                        title: "統計",
                        pledge: "我的憑證",
                        pledgeAll: "總憑證",
                        price: "價格",
                        rewards: "獎勵"
                    }
                },
                time: {
                    days: "天",
                    hours: "小時",
                    mins: "分鐘",
                    secs: "秒"
                },
                vault: {
                    title: "金庫",
                    desc: "存入獲取token,並賺取收益",
                    depositSuccess: "存入成功",
                    depositErr: "存入金額不能小於",
                    extractErr: "提取金額不能小於0",
                    depositBut: "存入",
                    extractBut: "提取",
                    extractAllBut2: "全部提取",
                    extractAllBut: "預約取回",
                    lockAll: "總鎖倉",
                    explain: "金庫使用說明",
                    locking: "鎖定中",
                    yourEarnings: "你的EOS收益",
                    receive: "領取",
                    receiveSuccess: "領取成功",
                    marketable: "可提取",
                    totalRevenue: "總收益",
                    earnMoney: "您的剩餘公測額度",
                    availableBalance: "可用餘額",
                    estimatedValue: "估算價值",
                    expectedAcquisition: "預計獲得",
                    test: "TUYUL金庫的智能合約已通過慢霧SlowMist審計。檢查審計報告",
                    links: "https://www.slowmist.com/security-audit-certificate.html?id=6a6b302408026276c2e7b9adb64a660ea086e4f81af9c35f344ac4dac0ce16ff",
                    text: "0.1%的提現費",
                    details: "詳情",
                    details2: "去做市",
                    confirm: "確認",
                    estimateAPY: "預估24H年化",
                    acceptableQuantity: "可取數量",
                    APY1: "金庫年化",
                    APY4_EOS: "Dolphin做市年化",
                    APY5: "VexSwap年化",
                    importantNotice: "金库已暂停服务，请尽快取回！",
                    text1: "TUYUL當前獎勵池主要來自回購，每小時分配總獎勵池的0.2％作為鎖倉TUYUL獎勵",
                    text2: "質押賺取TUYUL",
                    text3: "總鎖倉",
                    text4: "總獎勵池",
                    text5: "下一輪分配",
                    text6: "已獲取",
                    text7: "收穫",
                    text8: "收穫並解押",
                    text9: "已質押",
                    text10: "到期時間",
                    text12: "最大年化收益率",
                    text13: "質押",
                    text14: "收穫成功",
                    text15: "收穫並解押成功",
                    text16: "餘額",
                    text17: "≥ 0.1TUYUL",
                    text18: "選擇質押時間",
                    text19: "隨存隨取",
                    text20: "天",
                    text21: "質押",
                    text22: "質押挖礦規則",
                    text23: "質押TUYUL替代不同鎖倉時間檔位，鎖倉時間越長挖礦權重越高",
                    text24: "挖礦權重",
                    text25: "*現有的TUYUL質押時，只能選擇相同或更長的鎖倉時間，多次鎖倉TUYUL，到期時間以最後一次存入TUYUL的到期時間為準",
                    text26: "質押金額不能小於0.1 TUYUL",
                    text27: "質押成功",
                    text28: "不能選擇比之前質押更短的時間"
                },
                mine: {
                    title: "選擇一個礦場",
                    tips: "通過質押代幣或提供流動性來賺取TUYUL代幣。",
                    times: "即將推出",
                    times2: "已結束",
                    deposit: "存款",
                    gain: "獲取TUYUL",
                    select: "選擇"
                },
                mineDetail: {
                    title: "礦場",
                    deposit: "存入",
                    deposit2: "並獲取TUYUL。",
                    has: "已獲取的TUYUL",
                    collect: "收穫",
                    btn: "收穫並解押",
                    pledged: "已質押",
                    balance: "餘額",
                    pledge: "質押",
                    max: "最大"
                },
                mineDetail2: {
                    conent: "通過映射DFS Swap TUYUL/EOS的流動池來獲取TUYUL。",
                    conentyfc: "通過映射DFS Swap YFC/EOS的流動池來獲取TUYUL。",
                    conenthub: "通過映射VexSwap HUB/EOS的流動池來獲取TUYUL。",
                    conentwool: "通過映射VexSwap WOOL/EOS的流動池來獲取TUYUL。",
                    conentdfs: "通過映射DFS Swap DFS/EOS的流動池來獲取TUYUL。",
                    pledged: "做市憑證",
                    buttom: "管理"
                },
                rules: {
                    title: "幫助",
                    tips: "本項目是早期項目,請注意風險。",
                    text: "<dl>\n    <dt>簡介：</dt>\n    <dd>TUYUL finance的靈感來源於印尼最受歡迎的食物之一TUYUL，以及soto、rendang、satay、siomay、nasi goreng、rujak、ketoprak等，TUYUL這個名字源於bak so（肉酥, Pe̍h-ōe-jī: bah-so·），即“蓬松肉”或“碎肉”的福建發音。\n  <dl>\n    <dd>這說明Bakso有印尼中餐的起源。中國人的影響在印尼食物中很明顯，如bakmi、mie ayam、pangsit、mie goreng、kwetiau goreng、bakso和lumpia（資料來源：https://en.wikipedia.org/wiki/Bakso）。</dd>\n    </br>\n  <dt>規則</dt>\n    <dd>這個項目是測試版，使用風險自負。TUYUL (TUYUL.finance)是Vexanium區塊鏈上的第一個產量農業（產量優化器defi生態系統）。\n  <dl>\n    <dd>TUYUL是以YFI的形式發行的：沒有創始人，沒有投資者，沒有通貨膨脹，人人平等。TUYUL的開發團隊旨在改善Vexanium DeFi生態基礎設施，並刺激整個VEX生態系統的盈利能力。",
                    content: "<dl>\n<dt>代幣</dt>\n<dd>代幣符號：TUYUL</dd>\n<dd>代幣總量：30000</dd>\n<dd>代幣合約地址：vexTUYULtoken</dd>\n<dd><dt>\n</br>\n代幣分配：</dt></dd>\n</dl>\n<dl>\n<dt>TUYUL礦池V1（估計2周）</dt>\n<dd>VEX: 7000</dd>\n<dd>USDV: 2000</dd>\n<dd>VYN: 500</dd>\n<dd>DJV: 500</dd>\n</dl>\n<dl>\n<dt>TUYUL礦池V2（估計2月）</dt>\n<dd>合作申請項目LP</dd>\n<dd>TUYUL/VEX LP 3000</dd>\n<dd>TUYUL/USDV LP 4000</dd>\n<dd>VEX/USDV LP 1500</dd>\n<dd>TUYUL/VYN LP 500</dd>\n<dd>TUYUL/DJV LP 500</dd>\n<dd>VYN/VEX LP 500</dd>\n</dl>\n<dl>\n<dt>TUYUL礦池V3</dt>\n<dd>由社區選擇獎池</dd>\n<dd>7000 TUYUL（稍後投票LP）</dd>\n</dl>  <dl>\n<dt>社區投票鎖倉</dt>\n    <dd>社區投票決定將3000 TUYUL鎖定一年，並將鎖定至2022-03-30 00:00GMT。</dd> \n    </br> </dl>",
                    slowmist: "用戶資金是安全的！多簽名的閾值是22，更新合同至少需要3個成員的批準，TUYUL團隊不能單獨更新，這保證了合同的一致性和安全性。"
                },
                footer: {
                    telegram: "https://t.me/efi_cn"
                },
                message: {
                    stake: "質押成功",
                    harvest: "收穫成功",
                    exit: "收穫成功"
                },
                vote: {
                    vote: "投票",
                    notStarted: "未開始",
                    progress: "進行中",
                    end: "已通過",
                    end2: "未通過",
                    list: "投票清單",
                    myVote: "我的投票選項",
                    myVoteNum: "我的票數",
                    myVoteWeight: "我的投票權重",
                    reward: "獎勵",
                    receive: "取回",
                    initiator: "投票發起方",
                    author: "作者",
                    startTime: "開始時間",
                    endTime: "結束時間",
                    result: "投票結果",
                    success: "投票成功",
                    receiveSuccess: "預約成功",
                    receiveSuccess2: "領取成功",
                    empty: "投票金額不能為空",
                    select: "請選擇一項進行投票"
                },
                voteText: [{
                    title: "新礦池投票",
                    startTime: "2020-09-16 04:00 UTC",
                    endTime: "2020-09-19 04:00 UTC",
                    content: "1.選擇一個提案,輸入要投票的TUYUL數量；您可以多次投票,但投票後不能對其進行修改。\n</br>\n2.投票結束時,將按照總票數的比例分配獎勵；前3名投票者將獲得額外獎勵。\n</br>\n3.投票TUYUL將被鎖定,提案結束後,可以取回並領取獎勵。\n</br>\n4.第一天投票權重為3,第二天投票權重為2,第三天投票權重為1,投票數量與權重的乘積,將最終影響投票結果與獲得獎勵數量。\n</br>\n5.本輪投票將提取前三名,加入新的流動性礦池,每個500 TUYUL挖礦額度。",
                    voteOptions: ["HUB/VEX LP", "DFS/VEX LP", "BOX/VEX LP", "TKT/VEX LP", "TPT/VEX LP", "PIZZA/VEX LP", "IQ/VEX LP", "VIG/VEX LP", "DAPP/VEX LP", "EOSDT/USDT LP", "CRL/VEX LP", "WOOL/VEX LP"]
                }, {
                    title: "TUYUL礦池變更投票",
                    startTime: "2020-09-19 04:00 UTC",
                    endTime: "2020-09-20 04:00 UTC",
                    content: "1.選擇一個提案,輸入要投票的TUYUL數量；您可以多次投票,但投票後不能對其進行修改。\n</br>\n2.投票TUYUL將被鎖定,提案結束後,可以取回鎖定的TUYUL。本次投票無額外獎勵。\n</br>\n3. EFi生態VexSwap將於2020-09-20 13:00 UTC開啟TUYUL/EOS與HUB/VEX LP創世挖礦,當前TUYUL中TUYUL/VEX LP與HUB/VEX LP挖礦是否變更?\n</br>\n4.關於VexSwap更多資訊請查看https://medium.com/@e.fi/dolphinswap-e5ccc5a5cf31",
                    voteOptions: ["停止TUYUL/VEX LP挖礦", "停止HUB/VEX LP挖礦", "同時停止HUB/VEX LP和TUYUL/VEX LP挖礦", "TUYUL/VEX LP與HUB/VEX LP挖礦繼續,但總時長由兩周延長至10周", "維持現狀"]
                }, {
                    title: "TUYUL礦池V3 TUYUL決議",
                    startTime: "2020-09-20 04:00 UTC",
                    endTime: "2020-09-21 04:00 UTC",
                    content: "1.選擇一個提案,輸入要投票的TUYUL數量；您可以多次投票,但投票後不能對其進行修改。\n</br>\n2.投票TUYUL將被鎖定,提案結束後,可以取回鎖定的TUYUL。本次投票無額外獎勵。\n</br>\n3.TUYUL礦池V3中剩餘3500 TUYUL,後續如何處理?",
                    voteOptions: ["繼續投票上池,每週上一個,每個池子500", "鎖倉半年", "鎖倉一年", "暫時停止,開放時間由社區決議"]
                }, {
                    title: "首批TUYUL礦池V3釋放週期投票",
                    startTime: "2020-09-21 04:00 UTC",
                    endTime: "2020-09-22 04:00 UTC",
                    content: "1.選擇一個提案,輸入要投票的TUYUL數量；您可以多次投票,但投票後不能對其進行修改。\n</br>\n2.投票TUYUL將被鎖定,提案結束後,可以取回鎖定的TUYUL。本次投票無額外獎勵。\n</br>\n3.首批V3TUYUL礦池將於下週三開啟挖礦,每個礦池總量500 TUYUL,本次投票决定將决定礦池挖礦時長。",
                    voteOptions: ["7天", "15天", "30天", "90天", "180天", "360天"]
                }, {
                    title: "金庫與Dolphin回購的TUYUL如何使用？",
                    startTime: "2020-12-3 10:00 HKT",
                    endTime: "2020-12-5 10:00 HKT",
                    content: "1.選擇一個提案,輸入要投票的TUYUL數量；您可以多次投票,但投票後不能對其進行修改。\n</br>\n2.投票TUYUL將被鎖定,提案結束後,可以取回。\n</br>\n3.參與投票的總TUYUL數量需大於等於總流通量(當前約為21200)的30%，否則提案無效。\n</br>\n4.當前已回購TUYUL總量(截至2020-12-2 19:00 HKT)：253.2144262131 TUYUL</br>\n  金庫利潤回購： TUYULvault 15.4848246609 TUYUL</br>\n  金庫提現費回購：dmdvaultfund 145.5367852912 TUYUL</br>\n  海豚手續費回購：dopswapfee12 92.192816261 TUYUL",
                    voteOptions: ["100%全部銷毀", "30%銷毀，70%作為TUYUL金庫鎖倉分紅", "50%銷毀，50%作為TUYUL金庫鎖倉分紅", "100%作為TUYUL金庫鎖倉分紅", "30%作為意外儲備金，50%銷毀，20%的作為志願者經費"]
                }, {
                    title: "金庫與Dolphin回購的TUYUL如何使用？",
                    startTime: "2020-12-8 12:00 HKT",
                    endTime: "2020-12-11 12:00 HKT",
                    content: "亲爱的社群，由于首个上个提案投票率低于预期（30％），所以上周TUYUL提案无法成功投票。我们已经进行了适当的研究，找到了解决方案。为了帮助流动性提供者对提案进行投票，我们将改进TUYUL-DAO。但是，这将需要一段时间才能实现。因此，在此之前，我们决定将30％的投票要求降低到即将到来的提案的15％，并对第一个提案重新投票，与此同时我们将同步开发TUYUL-DAO支持做市投票。由于当前不少用户参与了玉米挖矿，为了减缓这一部分的用户无法投票带来的影响，我们将投票时间设置为3天。\n</br></br>\n建议1：如何处理TUYUL的回购？</br>\n重启时间：2020-12-08 12:00 HKT</br>\n持续时间：3天\n</br></br>\n该提案通过后，我们将开始一项有关TUYUL权益奖励细节的新提案。",
                    voteOptions: ["100%全部銷毀", "30%銷毀，70%作為TUYUL金庫鎖倉分紅", "50%銷毀，50%作為TUYUL金庫鎖倉分紅", "100%作為TUYUL金庫鎖倉分紅", "30%作為意外儲備金，50%銷毀，20%的作為志願者經費"]
                }, {
                    title: "TUYUL鎖倉金庫分紅如何分配？",
                    startTime: "2020-12-15 12:00 HKT",
                    endTime: "2020-12-17 12:00 HKT",
                    content: "1.TUYUL金庫總獎勵池當前來自於TUYUL和VexSwap利潤回購</br>\n2.分配方式為每小時從總獎勵池獲取一定比例的TUYUL作為獎勵，投票將決定每小時從總獎勵池中獲取的比例</br>\n注：比例較高可能導致獎勵池快速耗盡，請謹慎投票",
                    voteOptions: ["0.02%", "0.05%", "0.1%", "0.2%"]
                }, {
                    title: "是否對當前的進行TUYUL挖礦的礦池進行停止？",
                    startTime: "2020-12-29 20:00 HKT",
                    endTime: "2020-12-31 20:00 HKT",
                    content: "親愛的社區，隨著TUYUL質押礦池的上線，用戶已可以使用已質押的TUYUL進行投票，也更進一步的促進了社區投票的成功率與參與的積極性。為了減少TUYUL的產出，我們今天發起一項新的提案，對一些礦池進行停止產出，並將停止的產出用於獎勵質押用戶，釋放速度由原來的一年縮短為半年。",
                    voteOptions: ["A. 停止DFS的挖礦", "B. 停止WOOL的挖礦", "C. 同時停止DFS和WOOL的挖礦", "D. 保持現狀"]
                }]
            },
            ye = we,
            Se = {
                en: be,
                "zh-cn": ye
            },
            ke = Se,
            Me = n("4eb5"),
            Oe = n.n(Me);

        function Te() {
            var e = (navigator.language || navigator.browserLanguage).toLowerCase(),
                t = window.localStorage.getItem("language");
            return t || ("zh-cn" === e ? "zh-cn" : "en")
        }
        o["default"].config.productionTip = !1, o["default"].use(ge), o["default"].use(De["a"]);
        var Ae = Te();
        window.lang = Te();
        var Ce = new De["a"]({
            locale: Ae,
            messages: ke
        });
        o["default"].use(Oe.a), new o["default"]({
            router: j,
            store: ae,
            i18n: Ce,
            render: function(e) {
                return e(L)
            }
        }).$mount("#app")
    },
    6: function(e, t) {},
    "6a10": function(e, t, n) {},
    "74f7": function(e, t, n) {
        "use strict";
        var o = n("8864"),
            a = (n("4de4"), n("d3b7"), n("0122")),
            i = n("276c"),
            r = n("e954"),
            s = function() {
                function e(t) {
                    Object(i["a"])(this, e), this.baseUrl = t.baseUrl
                }
                return Object(r["a"])(e, [{
                    key: "post",
                    value: function(e, t) {
                        return e = this.baseUrl + e, fetch(e, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(t)
                        }).then((function(e) {
                            return e.json()
                        })).catch((function(e) {
                            return e
                        }))
                    }
                }, {
                    key: "getJSON",
                    value: function(e, t) {
                        return e = this.baseUrl + e + this.getUrl(t), fetch(e, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then((function(e) {
                            return e.json()
                        })).catch((function(e) {
                            return e
                        }))
                    }
                }, {
                    key: "getFORM",
                    value: function(e, t) {
                        return e = this.baseUrl + e + this.getUrl(t), fetch(e, {
                            method: "GET"
                        }).then((function(e) {
                            return e.json()
                        })).catch((function(e) {
                            return e
                        }))
                    }
                }, {
                    key: "getUrl",
                    value: function(e) {
                        var t = "";
                        if ("object" === Object(a["a"])(e) && e)
                            for (var n in t += "?", e) t += n + "=" + e[n] + "&";
                        return t
                    }
                }]), e
            }(),
            c = n("4810"),
            l = function(e, t, n) {
                new s(n);
                e.getHarvestTokenBalance = function(t, o) {
                    var a = {
                            code: n.dmdContract,
                            symbol: n.dmdSymbol
                        },
                        i = Object.assign(a, t);
                    if ("function" != typeof o) return e.eos.getCurrencyBalance(i.code, i.accountName, i.symbol);
                    e.eos.getCurrencyBalance(i.code, i.accountName, i.symbol).then((function(e) {
                        o(null, e)
                    })).catch((function(e) {
                        o(e, null)
                    }))
                }, e.getStakeTokenBalance = function(t, n) {
                    if ("function" != typeof n) return e.eos.getCurrencyBalance(p.code, p.accountName, p.symbol);
                    e.eos.getCurrencyBalance(t.code, t.account, t.symbol).then((function(e) {
                        n(null, e)
                    })).catch((function(e) {
                        n(e, null)
                    }))
                }, e.getPoolInfo = function(e, t) {
                    var n = e,
                        a = {
                            json: !0,
                            code: n.poolContract,
                            scope: n.poolContract,
                            table: "stakepool",
                            limit: 1
                        };
                    return o(a, t)
                }, e.getGlobalInfo = function(e, t) {
                    var n = e,
                        a = {
                            json: !0,
                            code: "testfinances",
                            scope: "testfinances",
                            table: "global",
                            limit: 1
                        };
                    return o(a, t)
                }, e.getMyStakeInfo = function(e, t) {
                    var n = e.accountName,
                        // a = e.pool,
                        i = {
                            json: !0,
                            code: "testfinances",
                            scope: "testfinances",
                            table: "user",
                            table_key: "holder",
                            index_position: "secondary",
                            key_type: "name",
                            lower_bound: n,
                            limit: 1
                        };
                    return o(i, (function(e, o) {
                        if (e) t(e, null);
                        else {
                            var a = o.rows,
                                i = a.filter((function(e) {
                                    return e.holder === n
                                }));
                            o.rows = i, t(null, o)
                        }
                    }))
                }, e.getMyPoolInfo = function(e, t) {
                    var n = e.accountName,
                        a = e.pool,
                        i = {
                            json: !0,
                            code: a.poolContract,
                            scope: a.poolContract,
                            // table: "userstake",
                            // lower_bound: c.nameToUint64(n),
                            // limit: 1
                            table: "user",
                            table_key: "holder",
                            index_position: "secondary",
                            key_type: "name",
                            lower_bound: n,
                            limit: 1
                        };
                    return o(i, (function(e, o) {
                        if (e) t(e, null);
                        else {
                            var a = o.rows,
                                i = a.filter((function(e) {
                                    return e.holder === n
                                }));
                            o.rows = i, t(null, o)
                        }
                    }))
                }, e.getMyLPPoolInfo = function(e, t) {
                    var n = e.accountName,
                        a = e.pool,
                        i = {
                            json: !0,
                            code: a.poolContract,
                            scope: a.poolContract,
                            table: "liquiditysnp",
                            lower_bound: c.nameToUint64(n),
                            limit: 1
                        };
                    return o(i, (function(e, o) {
                        if (e) t(e, null);
                        else {
                            var a = o.rows,
                                i = a.filter((function(e) {
                                    return e.owner == n
                                }));
                            o.rows = i, t(null, o)
                        }
                    }))
                }, e.getVaultMyEOS = function(e, t) {
                    var n = {
                        json: !0,
                        code: e.vaultContract,
                        scope: e.vaultContract,
                        table: "divlist",
                        lower_bound: c.nameToUint64(e.accountName),
                        limit: 1
                    };
                    return o(n, (function(n, o) {
                        if (n) t(n, null);
                        else {
                            var a = o.rows,
                                i = a.filter((function(t) {
                                    return t.user === e.accountName
                                }));
                            o.rows = i, t(null, o)
                        }
                    }))
                };
                var o = function(t, n) {
                    if ("function" !== typeof n) return e.eos.getTableRows(t);
                    e.eos.getTableRows(t).then((function(e) {
                        n(null, e)
                    })).catch((function(e) {
                        n(e, null)
                    }))
                };
                return e.generalTransfer = function(t, n) {
                    var o = t.from,
                        a = t.to,
                        i = t.amount,
                        r = t.memo,
                        s = t.contract,
                        c = t.authority,
                        l = {
                            actions: [{
                                account: s,
                                name: "transfer",
                                authorization: [{
                                    actor: o,
                                    permission: c
                                }],
                                data: {
                                    from: o,
                                    to: a,
                                    quantity: i,
                                    memo: r
                                }
                            }]
                        },
                        u = {
                            blocksBehind: 3,
                            expireSeconds: 30
                        },
                        d = [l, u];
                    if ("function" !== typeof n) return e.pushTransaction(d, n);
                    e.pushTransaction(d, n)
                }, e.getReward = function(t, n) {
                    var o = t.accountName,
                        a = t.pool,
                        i = t.authority,
                        r = {
                            actions: [{
                                account: a.poolContract,
                                name: "claim",
                                authorization: [{
                                    actor: o,
                                    permission: i
                                }],
                                data: {
                                    from: o,
                                    pooltype: a.sTokenSymbol
                                }
                            }]
                        },
                        s = {
                            blocksBehind: 3,
                            expireSeconds: 30
                        },
                        c = [r, s];
                    if ("function" !== typeof n) return e.pushTransaction(c, n);
                    e.pushTransaction(c, n)
                }, e.getVaultEOSReward = function(t, n) {
                    var o = {
                            actions: [{
                                account: t.vaultContract,
                                name: "claim",
                                authorization: [{
                                    actor: t.accountName,
                                    permission: t.authority
                                }],
                                data: {
                                    vid: t.vaultid,
                                    from: t.accountName
                                }
                            }]
                        },
                        a = {
                            blocksBehind: 3,
                            expireSeconds: 30
                        },
                        i = [o, a];
                    if ("function" !== typeof n) return e.pushTransaction(i, n);
                    e.pushTransaction(i, n)
                }, e.exitPool = function(t, n) {
                    var o = t.accountName,
                        a = t.pool,
                        i = t.authority,
                        r = {
                            actions: [{
                                account: a.poolContract,
                                name: "exit",
                                authorization: [{
                                    actor: o,
                                    permission: i
                                }],
                                data: {
                                    from: o,
                                    pooltype: a.sTokenSymbol
                                }
                            }]
                        },
                        s = {
                            blocksBehind: 3,
                            expireSeconds: 30
                        },
                        c = [r, s];
                    if ("function" !== typeof n) return e.pushTransaction(c, n);
                    e.pushTransaction(c, n)
                }, e
            };
        t["a"] = function(e, t) {
            var n = Object(o["a"])(e, t);
            return l(n, e, t), n
        }
    },
    9224: function(e) {
        e.exports = JSON.parse('{"name":"dmdfinance","version":"1.0.0","private":true,"DEV":false,"scripts":{"serve":"vue-cli-service serve --open","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"axios":"0.19.2","core-js":"3.6.5","eos-wallet-js":"1.0.26","eosjs":"^16.0.9","eosjs-account-name":"^1.1.1","eosjs-ecc":"^4.0.4","js-cookie":"^2.2.1","lodash":"4.17.15","moment":"^2.27.0","save":"^2.4.0","vue":"2.6.11","vue-clipboard2":"^0.3.1","vue-i18n":"^8.17.3","vue-loading-overlay":"^3.4.1","vue-router":"3.1.6","vue-slider-component":"^3.2.5","vuex":"3.1.3","scatterjs-core":"^2.7.16","scatterjs-plugin-eosjs":"^1.5.1"},"devDependencies":{"@vue/cli-plugin-babel":"4.3.1","@vue/cli-plugin-eslint":"4.3.1","@vue/cli-service":"4.3.1","@vue/eslint-config-standard":"5.1.2","babel-eslint":"10.1.0","babel-plugin-component":"1.1.1","eslint":"6.8.0","eslint-plugin-vue":"6.2.2","node-sass":"4.13.1","sass-loader":"8.0.2","vue-cli-plugin-element":"1.0.1","vue-template-compiler":"2.6.11"}}')
    },
    "92be": function(e, t, n) {},
    9565: function(e, t, n) {
        "use strict";
        var o = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "dialog",
                    style: "z-index:" + this.zIndex
                }, [e.isShow ? n("div", {
                    staticClass: "dialog-cover",
                    on: {
                        click: e.closeMyself
                    }
                }) : e._e(), n("transition", {
                    attrs: {
                        name: "drop"
                    }
                }, [e.isShow ? n("div", {
                    staticClass: "dialog-content",
                    style: "max-width:" + this.maxWidth + "px;position:" + this.positionType + ";top:" + this.topLim + "%;"
                }, [n("div", {
                    staticClass: "dialog_head "
                }, [e._t("header", [e._v("提示信息")])], 2), n("div", {
                    staticClass: "dialog_main"
                }, [e._t("main", [e._v("弹窗内容")])], 2)]) : e._e()])], 1)
            },
            a = [],
            i = (n("a9e3"), {
                name: "dialogPop",
                props: {
                    zIndex: {
                        type: Number,
                        default: 9e3,
                        required: !1
                    },
                    maxWidth: {
                        type: Number,
                        default: 650,
                        required: !1
                    },
                    positionType: {
                        type: String,
                        default: "absolute",
                        required: !1
                    },
                    topLim: {
                        type: Number,
                        default: 50,
                        required: !1
                    },
                    isShow: {
                        type: Boolean,
                        default: !1,
                        required: !0
                    }
                },
                methods: {
                    closeMyself: function() {
                        this.$emit("on-close")
                    }
                }
            }),
            r = i,
            s = (n("43f0"), n("2877")),
            c = Object(s["a"])(r, o, a, !1, null, "f0ecd08e", null);
        t["a"] = c.exports
    },
    a1af: function(e, t, n) {},
    b734: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAFoqSavAAAACXBIWXMAAAsSAAALEgHS3X78AAAFKUlEQVRIiZ1Xa0xcRRSevSyPXZaFyqvWRCSCBX8JCRi1tArGGquVpUHahIIt1ZgW0zWmtrQYMdJC1UijxKgRFWIUNC018UGrYB/YWDBiommp5UerUVt5LOzyWhZ2zXd2Zzr37uWW+iU3c+/snDmPOeebsywQCNDjebcpDSN9XLlnZQDAqIxtKXGlnhlkC1f+ZoAJK67emxVgIdCEDBPkbFXVbLKlmcUUPnxSbDi2YzNtShMT9XsCfo8b89f2kDemvWJtgZRvf1LYeN2uTr4N3wrwXTwftFO5KbE9tANJmjOzaRytKL5mt56K2PKnCmzbn+8VscDjfrOxTP4WRmqlgdQzgyaMyvDja3zSpFgghLgHsFoG5nEEChb9+1A+M2dkiYiPbCiiceGPS620IDDppomI5SuC48230Bhff+h+xVpa/hw+plqaKRZ45n7uE7ZEHOjq+dE/NhIz/ckHq/S8CDtPl7NqaK7vh9u1bgOWRze02Pfu36Y6s8UiDcQ59zLrExXkJPeDyQetTbGo3HxhvyamegaRG6bRJx0u34VzCZhIOd4f1GCLI63JR7rpPTDpoRGYHxoUiQKXzKb4ZaOMsYTgeeQxbknkHVlsbqCPeU99x+z7GnQtMVksv4XlimWdQwhwIe7OaKWDzV88r4qDCKJR9LWwbtqyMe7Z3R1M7xgB94F973vP9lb6h6+a8R258s7xyNy7n+FCKmjzX1Ufb7ziNPpdpX3yvUNpUx+9c0nPZCU5dT75i5ORqjn+At8XEwTgBoLsfq2uQSU8vnv7gDZoJpudciGx7ahqk5nO9j2etw6WCWHv6Z67tJpSjvdRssx81RlmxfSnHxLzqMpfD5yStJh4+YVOIk0WyrJlzW20BJWfdLibeU93s6icfJGuTJN1ImC8UEAdEESOw2T/pEfjTr94N8s/oBDAPSxUMJGZWUQzsGC6o1XFJGHCvIKiVz9ICxG06c/aqN79Hk+YsPCZw1pWyeJ21qgWcYtkf823ps8oqFMxkZnNcONwuKor2MzXR4UrMqIL12aHlSdMhq9THW2ClrDh7KluUZrQmtj+jdWQ3/Qgc5s4KuKpWJvhBihPLsj0ahqV5Tv3a7ec69EFhb8kHHw7R7uZLiFogQ39I8MvLvx5eZ1vaDA1MDVp0q5BHCLS0i8oSSld9l11Ndfd1Eg5GGn2+2Nb9RQtFQhTVN59j9EtvhTlN8KpLFSTgO/3QdWlpYXhbehpqndOf/5x01IUgqPk3AURLPzz13XlwKaWdY4M29POy0I5Qjzz5eGqpShOOtJD9c57D7zPDfQz147NSxGnVLeWlqfDAAWsqqcY9x4PqQzRzyxfQQ/YC6Rjr20kGf6AveRq50AOeXuOUbWaxnZuDTtj0ERiaziDg91AUJZHisnzkZJCEQkZMjuyUI+FJlcG+i8lMOFK1CoBjYANtYguKKLfcMZILniGswaHYQ7GkfEhxe79NUSGoCbcaTL8oyPFquZHD1AAppVvE5wxQp3Q2EyKEXLuPY5huKTIMPMBi2NjoxJxW8YJo0UIFzbjXgFROXmkOPiuzgsYGbx87WF7yQARKfEvveoAOxkttG2rppDDK9kInDvYX3vmALq+xRCzdj31E6LO0QXw/ooD10t8bYMq5CwU2on6GmonRTRy86lLxnkblR7+WaHjZ1qGm6h1npjt6VpjGC8DoFUF0/F7Twbq27K+dJPcMOpyOzowvUbq/0BPqaFyDtxm+NfkPdu7+kYuGNBo9KoHXje83Rhj/wH5A014oh06vgAAAABJRU5ErkJggg=="
    },
    cd12: function(e, t, n) {},
    cfe5: function(e, t, n) {
        e.exports = n.p + "img/logo.c9f4fcf3.png"
    },
    f926: function(e, t, n) {
        "use strict";
        var o = n("a1af"),
            a = n.n(o);
        a.a
    },
    fa7d: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return a
        })), n.d(t, "c", (function() {
            return i
        })), n.d(t, "b", (function() {
            return r
        })), n.d(t, "a", (function() {
            return s
        }));
        n("fb6a"), n("4d63"), n("ac1f"), n("25f0"), n("466d"), n("5319"), n("1276");
        var o = n("0122");

        function a(e) {
            return decodeURIComponent((new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(location.href) || [, ""])[1].replace(/\+/g, "%20")) || null
        }

        function i(e) {
            var t = void 0;
            if ("object" === Object(o["a"])(e) ? t = e : "string" === typeof e && (t = JSON.parse(e)), void 0 !== t && t.error) {
                var n = t.error.details[0].message.split(":");
                if (2 === n.length) {
                    var a = n[1].split(","),
                        i = a[0].replaceAll(" ", "");
                    return {
                        errorKey: i,
                        message: t.error.details[0].message
                    }
                }
                return {
                    errorKey: n[0],
                    message: t.error.details[0].message
                }
            }
            return "account_missing" === t.type ? {
                errorKey: "account_missing",
                message: ""
            } : "signature_rejected" === t.type ? {
                errorKey: "signature_rejected",
                message: ""
            } : {
                errorKey: "unknown",
                message: ""
            }
        }

        function r(e) {
            var t = new Date(e),
                n = t.getFullYear(),
                o = ("0" + (t.getMonth() + 1)).slice(-2),
                a = ("0" + t.getDate()).slice(-2),
                i = ("0" + t.getHours()).slice(-2),
                r = ("0" + t.getMinutes()).slice(-2),
                s = ("0" + t.getSeconds()).slice(-2),
                c = n + "-" + o + "-" + a + " " + i + ":" + r + ":" + s;
            return c
        }

        function s(e) {
            if (e && "" !== e) {
                var t = e.split(" ");
                if (2 === t.length) {
                    var n = parseFloat(t[0]);
                    if (n > 0) return n
                }
            }
            return 0
        }
    },
    fcbe: function(e, t, n) {}
});