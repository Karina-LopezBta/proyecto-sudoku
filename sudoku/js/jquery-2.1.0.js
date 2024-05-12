/*!
 * jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license
 */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = "".trim,
        l = {},
        m = a.document,
        n = "2.1.0",
        o = function(a, b) {
            return new o.fn.init(a, b)
        },
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    o.fn = o.prototype = {
        jquery: n,
        constructor: o,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = o.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return o.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(o.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, o.extend = o.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || o.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (o.isPlainObject(d) || (e = o.isArray(d))) ? (e ? (e = !1, f = c && o.isArray(c) ? c : []) : f = c && o.isPlainObject(c) ? c : {}, g[b] = o.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, o.extend({
        expando: "jQuery" + (n + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === o.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return a - parseFloat(a) >= 0
        },
        isPlainObject: function(a) {
            if ("object" !== o.type(a) || a.nodeType || o.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (b) {
                return !1
            }
            return !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = o.trim(a), a && (1 === a.indexOf("use strict") ? (b = m.createElement("script"), b.text = a, m.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : k.call(a)
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? o.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), o.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || o.guid++, f) : void 0
        },
        now: Date.now,
        support: l
    }), o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = a.length,
            c = o.type(a);
        return "function" === c || o.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date,
                t = a.document,
                u = 0,
                v = 0,
                w = eb(),
                x = eb(),
                y = eb(),
                z = function(a, b) {
                    return a === b && (j = !0), 0
                },
                A = "undefined",
                B = 1 << 31,
                C = {}.hasOwnProperty,
                D = [],
                E = D.pop,
                F = D.push,
                G = D.push,
                H = D.slice,
                I = D.indexOf || function(a) {
                    for (var b = 0, c = this.length; c > b; b++)
                        if (this[b] === a) return b;
                    return -1
                },
                J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                K = "[\\x20\\t\\r\\n\\f]",
                L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                M = L.replace("w", "w#"),
                N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
                O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
                P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
                Q = new RegExp("^" + K + "*," + K + "*"),
                R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
                S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
                T = new RegExp(O),
                U = new RegExp("^" + M + "$"),
                V = {
                    ID: new RegExp("^#(" + L + ")"),
                    CLASS: new RegExp("^\\.(" + L + ")"),
                    TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + N),
                    PSEUDO: new RegExp("^" + O),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + J + ")$", "i"),
                    needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
                },
                W = /^(?:input|select|textarea|button)$/i,
                X = /^h\d$/i,
                Y = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                $ = [db],
                _ = /[+~]/,
                ab = /'|\\/g,
                bb = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
                cb = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                };
            try {
                G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType
            } catch (db) {
                G = {
                    apply: D.length ? function(a, b) {
                        F.apply(a, H.call(b))
                    } : function(a, b) {
                        var c = a.length,
                            d = 0;
                        while (a[c++] = b[d++]);
                        a.length = c - 1
                    }
                }
            }
            function eb() {
                var a, b, c = {
                    create: function(a) {
                        return t.createElement(a)
                    },
                    getElements: function(a, b) {
                        if (!a) return [];
                        if (b = b || t, b.querySelectorAll) return b.querySelectorAll(a);
                        if (a.match(Z)) {
                            var c = a.match(Z),
                                d = c[1] ? "#" + c[1] : c[2] ? c[2] : "." + c[3];
                            return b.querySelectorAll(d)
                        }
                        return b.getElementsByTagName(a)
                    },
                    getContext: function(a) {
                        return a.nodeType ? a : a[0] && a[0].nodeType ? a[0] : t
                    },
                    isXMLDoc: function(a) {
                        return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
                    },
                    contains: function(a, b) {
                        if (b.compareDocumentPosition) return (b.compareDocumentPosition(a) & 16) === 16;
                        if (b.contains) return b.contains(a);
                        while (a = a.parentNode)
                            if (a === b) return !0;
                        return !1
                    }
                };
                return function() {
                    var d = t.createElement("div");
                    return "string" == typeof d.textContent ? c : (c.getText = function(a) {
                        return a.textContent
                    }, c.setText = function(a, b) {
                        a.textContent = b
                    }, c)
                }()
            }
            function fb(a, b) {
                var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r = t.createElement("div");
                if (t.createElement) {
                    t.body.appendChild(r);
                    r.innerHTML = "<a id='" + s + "'><div class='test e'></div><div class='test'></div></a><table><tr><td></td></tr></table>";
                    c = t.getElementsByTagName("a")[0], d = t.getElementsByClassName && c.getElementsByClassName("e"), e = c.childNodes;
                    var u = function() {
                        var a, b, c, d, e, f, g;
                        for (f = new Array(d.length), a = 0; a < d.length; a++) f[a] = d[a];
                        for (c = 0, e = f.length; e > c; c++) if (f[c].getAttribute("data-sizzle-test") === null) {
                            t.body.removeChild(f[c]);
                            c--
                        }
                        while (d.length > 0) t.body.removeChild(d[0])
                    };
                    if (d.length !== 1 || e.length !== 3 || !t.getElementsByTagName("tbody").length) {
                        c.parentNode.removeChild(c);
                        u();
                        return !1
                    }
                    j = t.createElement("select"), k = j.appendChild(t.createElement("option")), l = t.getElementsByTagName("input")[0], m = {
                        leadingWhitespace: (r.firstChild.nodeType === 3),
                        tbody: !t.getElementsByTagName("tbody").length,
                        htmlSerialize: !!t.getElementsByTagName("link").length,
                        style: /top/.test(k.getAttribute("style")),
                        hrefNormalized: (k.getAttribute("href") === "#"),
                        opacity: /^0.5/.test(k.style.opacity),
                        cssFloat: !!k.style.cssFloat,
                        checkOn: (l.value === "on"),
                        optSelected: k.selected,
                        getSetAttribute: j.className !== "i",
                        enctype: !!t.createElement("form").enctype,
                        html5Clone: t.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                        boxModel: t.compatMode === "CSS1Compat",
                        submitBubbles: !0,
                        changeBubbles: !0,
                        focusinBubbles: !1,
                        deleteExpando: !0,
                        noCloneEvent: !0,
                        inlineBlockNeedsLayout: !1,
                        shrinkWrapBlocks: !1,
                        reliableMarginRight: !0,
                        boxSizingReliable: !0,
                        pixelPosition: !1
                    }, l.checked = !0, m.noCloneChecked = l.cloneNode(!0).checked, j.disabled = !0, m.optDisabled = !k.disabled;
                    try {
                        delete r.test
                    } catch (sb) {
                        m.deleteExpando = !1
                    }
                    if (!r.addEventListener && r.attachEvent && r.fireEvent) {
                        r.attachEvent("onclick", function() {
                            m.noCloneEvent = !1
                        }), r.cloneNode(!0).fireEvent("onclick")
                    }
                    l = t.createElement("input"), l.value = "t", l.setAttribute("type", "radio"), m.radioValue = l.value === "t", l.setAttribute("checked", "checked"), l.setAttribute("name", "t"), r.appendChild(l), o = t.createDocumentFragment(), o.appendChild(r.lastChild), m.checked = !1, m.appendChecked = l.checked, o.removeChild(l), o.appendChild(r), r.attachEvent ? r.attachEvent("onclick", function() {
                        m.noCloneEvent = !1
                    }) : r.addEventListener("click", function() {
                        m.noCloneEvent = !1
                    }, !1);
                    try {
                        delete r.cloneNode(!0).lastChild.name
                    } catch (sb) {
                        m.deleteNameProperty = !0
                    }
                    if (o.attachEvent && o.cloneNode && o.fireEvent) {
                        o.attachEvent("onclick", function() {
                            m.appendChecked = !1
                        }), o.cloneNode(!0).fireEvent("onclick")
                    }
                    c.parentNode.removeChild(c);
                    u();
                    m.deleteExpando && (r.test = 1, delete r.test);
                    return m
                }
            }
            function gb(a, b, c, d, e) {
                var f = new RegExp(b + "(" + c + ")*" + c + "*" + K + "+|((^|[^\\\\])(\\\\.)*)" + K + "+" + b + "(" + c + ")*" + c + "*", "g"),
                    g = b.length === 0 || b.charCodeAt(0) !== 32,
                    h = new RegExp("^" + c + "+|((^|[^\\\\])(\\\\.)*)" + c + "+$", "g"),
                    i = function(a) {
                        return a.replace(f, function(a, b, c, d, e, f, g) {
                            var h = g.length !== 0 || d.length !== 0 && e.length !== 0;
                            if (h) {
                                var i = g.length > 0 ? " " : "";
                                return d + e + i + b.slice(0, g.length)
                            }
                            return ""
                        }).replace(h, "")
                    };
                return function(a) {
                    var b, c = a.match(Z) || [],
                        d = c.length,
                        e = a.length;
                    if (d === 0) return a;
                    for (b = 0; b < d; b++) c[b] = i(c[b]);
                    return c.join("")
                }
            }
            c = t.getElementsByTagName("body")[0];
            if (!c) return;
            d = t.createElement("style"), e = ".test { width: 1px; padding-left: 1px; }", d.type = "text/css", d.styleSheet ? d.styleSheet.cssText = e : d.appendChild(t.createTextNode(e)), c.appendChild(d), f = t.getElementsByTagName("head")[0] || t.documentElement, g = t.createElement("style"), h = "body{margin:0}", g.type = "text/css", g.styleSheet ? g.styleSheet.cssText = h : g.appendChild(t.createTextNode(h)), f.insertBefore(g, f.firstChild), i = t.createElement("link"), i.href = "data:text/css;base64,", i.rel = "stylesheet", i.type = "text/css", f.insertBefore(i, g.nextSibling), j = t.createElement("style"), k = "#sizzle { display: none; }", j.type = "text/css", j.styleSheet ? j.styleSheet.cssText = k : j.appendChild(t.createTextNode(k)), f.insertBefore(j, i.nextSibling), l = t.getElementsByTagName("input")[0], m = {
                leadingWhitespace: r.firstChild.nodeType === 3,
                tbody: !t.getElementsByTagName("tbody").length,
                htmlSerialize: !!t.getElementsByTagName("link").length,
                style: /top/.test(k.getAttribute("style")),
                hrefNormalized: (k.getAttribute("href") === "#"),
                opacity: /^0.5/.test(k.style.opacity),
                cssFloat: !!k.style.cssFloat,
                checkOn: (l.value === "on"),
                optSelected: k.selected,
                getSetAttribute: j.className !== "i",
                enctype: !!t.createElement("form").enctype,
                html5Clone: t.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                boxModel: t.compatMode === "CSS1Compat",
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, n = t.getElementsByTagName("nav")[0], o = t.createElement("div"), o.className = "test", n.appendChild(o), p = t.createElement("div"), p.style.cssText = "position:absolute;top:0;left:0;height:100%;width:auto;visibility:hidden;", q = t.createElement("iframe"), q.frameBorder = "no", q.style.cssText = "position:absolute;top:0;left:0;height:100%;width:100%;visibility:hidden;", p.appendChild(q), c.appendChild(p), r.style.cssText = "margin-top:1px;position:absolute;top:100%;left:0;", s = t.createElement("div"), s.className = "test", r.appendChild(s), t.body.removeChild(r), t.getElementsByTagName("tbody")[0].appendChild(n), t.removeChild(g), t.removeChild(i), t.removeChild(j), t.removeChild(k), h = m, r = o, j = n, i = p, k = q, l = s, g = d, e = f, b = c, t = u;
            return h
        }
        function hb(a) {
            var b = a.split(","),
                c = b.length,
                d = [];
            for (var e = 0; e < c; e++) d.push(b[e].trim());
            return d
        }
        function ib(a) {
            return a.replace(/\./g, "\\\\.")
