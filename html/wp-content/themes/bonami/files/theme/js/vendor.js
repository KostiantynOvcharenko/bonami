!(function (t, e) {
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = t.document
              ? e(t, !0)
              : function (t) {
                    if (!t.document) throw new Error("jQuery requires a window with a document");
                    return e(t);
                })
        : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
    function i(t) {
        var e = !!t && "length" in t && t.length,
            i = pt.type(t);
        return "function" !== i && !pt.isWindow(t) && ("array" === i || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t));
    }
    function n(t, e, i) {
        if (pt.isFunction(e))
            return pt.grep(t, function (t, n) {
                return !!e.call(t, n, t) !== i;
            });
        if (e.nodeType)
            return pt.grep(t, function (t) {
                return (t === e) !== i;
            });
        if ("string" == typeof e) {
            if (xt.test(e)) return pt.filter(e, t, i);
            e = pt.filter(e, t);
        }
        return pt.grep(t, function (t) {
            return pt.inArray(t, e) > -1 !== i;
        });
    }
    function s(t, e) {
        do t = t[e];
        while (t && 1 !== t.nodeType);
        return t;
    }
    function o(t) {
        var e = {};
        return (
            pt.each(t.match(kt) || [], function (t, i) {
                e[i] = !0;
            }),
            e
        );
    }
    function a() {
        nt.addEventListener ? (nt.removeEventListener("DOMContentLoaded", r), t.removeEventListener("load", r)) : (nt.detachEvent("onreadystatechange", r), t.detachEvent("onload", r));
    }
    function r() {
        (nt.addEventListener || "load" === t.event.type || "complete" === nt.readyState) && (a(), pt.ready());
    }
    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Gt, "-$1").toLowerCase();
            if (((i = t.getAttribute(n)), "string" == typeof i)) {
                try {
                    i = "true" === i || ("false" !== i && ("null" === i ? null : +i + "" === i ? +i : Ht.test(i) ? pt.parseJSON(i) : i));
                } catch (s) {}
                pt.data(t, e, i);
            } else i = void 0;
        }
        return i;
    }
    function h(t) {
        var e;
        for (e in t) if (("data" !== e || !pt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0;
    }
    function c(t, e, i, n) {
        if (Et(t)) {
            var s,
                o,
                a = pt.expando,
                r = t.nodeType,
                l = r ? pt.cache : t,
                h = r ? t[a] : t[a] && a;
            if ((h && l[h] && (n || l[h].data)) || void 0 !== i || "string" != typeof e)
                return (
                    h || (h = r ? (t[a] = it.pop() || pt.guid++) : a),
                    l[h] || (l[h] = r ? {} : { toJSON: pt.noop }),
                    ("object" != typeof e && "function" != typeof e) || (n ? (l[h] = pt.extend(l[h], e)) : (l[h].data = pt.extend(l[h].data, e))),
                    (o = l[h]),
                    n || (o.data || (o.data = {}), (o = o.data)),
                    void 0 !== i && (o[pt.camelCase(e)] = i),
                    "string" == typeof e ? ((s = o[e]), null == s && (s = o[pt.camelCase(e)])) : (s = o),
                    s
                );
        }
    }
    function u(t, e, i) {
        if (Et(t)) {
            var n,
                s,
                o = t.nodeType,
                a = o ? pt.cache : t,
                r = o ? t[pt.expando] : pt.expando;
            if (a[r]) {
                if (e && (n = i ? a[r] : a[r].data)) {
                    pt.isArray(e) ? (e = e.concat(pt.map(e, pt.camelCase))) : e in n ? (e = [e]) : ((e = pt.camelCase(e)), (e = e in n ? [e] : e.split(" "))), (s = e.length);
                    for (; s--; ) delete n[e[s]];
                    if (i ? !h(n) : !pt.isEmptyObject(n)) return;
                }
                (i || (delete a[r].data, h(a[r]))) && (o ? pt.cleanData([t], !0) : ut.deleteExpando || a != a.window ? delete a[r] : (a[r] = void 0));
            }
        }
    }
    function d(t, e, i, n) {
        var s,
            o = 1,
            a = 20,
            r = n
                ? function () {
                      return n.cur();
                  }
                : function () {
                      return pt.css(t, e, "");
                  },
            l = r(),
            h = (i && i[3]) || (pt.cssNumber[e] ? "" : "px"),
            c = (pt.cssNumber[e] || ("px" !== h && +l)) && Bt.exec(pt.css(t, e));
        if (c && c[3] !== h) {
            (h = h || c[3]), (i = i || []), (c = +l || 1);
            do (o = o || ".5"), (c /= o), pt.style(t, e, c + h);
            while (o !== (o = r() / l) && 1 !== o && --a);
        }
        return i && ((c = +c || +l || 0), (s = i[1] ? c + (i[1] + 1) * i[2] : +i[2]), n && ((n.unit = h), (n.start = c), (n.end = s))), s;
    }
    function p(t) {
        var e = Vt.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement) for (; e.length; ) i.createElement(e.pop());
        return i;
    }
    function f(t, e) {
        var i,
            n,
            s = 0,
            o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!o) for (o = [], i = t.childNodes || t; null != (n = i[s]); s++) !e || pt.nodeName(n, e) ? o.push(n) : pt.merge(o, f(n, e));
        return void 0 === e || (e && pt.nodeName(t, e)) ? pt.merge([t], o) : o;
    }
    function g(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) pt._data(i, "globalEval", !e || pt._data(e[n], "globalEval"));
    }
    function m(t) {
        Rt.test(t.type) && (t.defaultChecked = t.checked);
    }
    function v(t, e, i, n, s) {
        for (var o, a, r, l, h, c, u, d = t.length, v = p(e), b = [], y = 0; y < d; y++)
            if (((a = t[y]), a || 0 === a))
                if ("object" === pt.type(a)) pt.merge(b, a.nodeType ? [a] : a);
                else if (Xt.test(a)) {
                    for (l = l || v.appendChild(e.createElement("div")), h = (zt.exec(a) || ["", ""])[1].toLowerCase(), u = jt[h] || jt._default, l.innerHTML = u[1] + pt.htmlPrefilter(a) + u[2], o = u[0]; o--; ) l = l.lastChild;
                    if ((!ut.leadingWhitespace && $t.test(a) && b.push(e.createTextNode($t.exec(a)[0])), !ut.tbody))
                        for (a = "table" !== h || qt.test(a) ? ("<table>" !== u[1] || qt.test(a) ? 0 : l) : l.firstChild, o = a && a.childNodes.length; o--; )
                            pt.nodeName((c = a.childNodes[o]), "tbody") && !c.childNodes.length && a.removeChild(c);
                    for (pt.merge(b, l.childNodes), l.textContent = ""; l.firstChild; ) l.removeChild(l.firstChild);
                    l = v.lastChild;
                } else b.push(e.createTextNode(a));
        for (l && v.removeChild(l), ut.appendChecked || pt.grep(f(b, "input"), m), y = 0; (a = b[y++]); )
            if (n && pt.inArray(a, n) > -1) s && s.push(a);
            else if (((r = pt.contains(a.ownerDocument, a)), (l = f(v.appendChild(a), "script")), r && g(l), i)) for (o = 0; (a = l[o++]); ) Wt.test(a.type || "") && i.push(a);
        return (l = null), v;
    }
    function b() {
        return !0;
    }
    function y() {
        return !1;
    }
    function _() {
        try {
            return nt.activeElement;
        } catch (t) {}
    }
    function T(t, e, i, n, s, o) {
        var a, r;
        if ("object" == typeof e) {
            "string" != typeof i && ((n = n || i), (i = void 0));
            for (r in e) T(t, r, i, n, e[r], o);
            return t;
        }
        if ((null == n && null == s ? ((s = i), (n = i = void 0)) : null == s && ("string" == typeof i ? ((s = n), (n = void 0)) : ((s = n), (n = i), (i = void 0))), s === !1)) s = y;
        else if (!s) return t;
        return (
            1 === o &&
                ((a = s),
                (s = function (t) {
                    return pt().off(t), a.apply(this, arguments);
                }),
                (s.guid = a.guid || (a.guid = pt.guid++))),
            t.each(function () {
                pt.event.add(this, e, s, n, i);
            })
        );
    }
    function w(t, e) {
        return pt.nodeName(t, "table") && pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
    }
    function x(t) {
        return (t.type = (null !== pt.find.attr(t, "type")) + "/" + t.type), t;
    }
    function S(t) {
        var e = se.exec(t.type);
        return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
    }
    function C(t, e) {
        if (1 === e.nodeType && pt.hasData(t)) {
            var i,
                n,
                s,
                o = pt._data(t),
                a = pt._data(e, o),
                r = o.events;
            if (r) {
                delete a.handle, (a.events = {});
                for (i in r) for (n = 0, s = r[i].length; n < s; n++) pt.event.add(e, i, r[i][n]);
            }
            a.data && (a.data = pt.extend({}, a.data));
        }
    }
    function P(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (((i = e.nodeName.toLowerCase()), !ut.noCloneEvent && e[pt.expando])) {
                s = pt._data(e);
                for (n in s.events) pt.removeEvent(e, n, s.handle);
                e.removeAttribute(pt.expando);
            }
            "script" === i && e.text !== t.text
                ? ((x(e).text = t.text), S(e))
                : "object" === i
                ? (e.parentNode && (e.outerHTML = t.outerHTML), ut.html5Clone && t.innerHTML && !pt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML))
                : "input" === i && Rt.test(t.type)
                ? ((e.defaultChecked = e.checked = t.checked), e.value !== t.value && (e.value = t.value))
                : "option" === i
                ? (e.defaultSelected = e.selected = t.defaultSelected)
                : ("input" !== i && "textarea" !== i) || (e.defaultValue = t.defaultValue);
        }
    }
    function M(t, e, i, n) {
        e = ot.apply([], e);
        var s,
            o,
            a,
            r,
            l,
            h,
            c = 0,
            u = t.length,
            d = u - 1,
            p = e[0],
            g = pt.isFunction(p);
        if (g || (u > 1 && "string" == typeof p && !ut.checkClone && ne.test(p)))
            return t.each(function (s) {
                var o = t.eq(s);
                g && (e[0] = p.call(this, s, o.html())), M(o, e, i, n);
            });
        if (u && ((h = v(e, t[0].ownerDocument, !1, t, n)), (s = h.firstChild), 1 === h.childNodes.length && (h = s), s || n)) {
            for (r = pt.map(f(h, "script"), x), a = r.length; c < u; c++) (o = h), c !== d && ((o = pt.clone(o, !0, !0)), a && pt.merge(r, f(o, "script"))), i.call(t[c], o, c);
            if (a)
                for (l = r[r.length - 1].ownerDocument, pt.map(r, S), c = 0; c < a; c++)
                    (o = r[c]), Wt.test(o.type || "") && !pt._data(o, "globalEval") && pt.contains(l, o) && (o.src ? pt._evalUrl && pt._evalUrl(o.src) : pt.globalEval((o.text || o.textContent || o.innerHTML || "").replace(oe, "")));
            h = s = null;
        }
        return t;
    }
    function A(t, e, i) {
        for (var n, s = e ? pt.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || pt.cleanData(f(n)), n.parentNode && (i && pt.contains(n.ownerDocument, n) && g(f(n, "script")), n.parentNode.removeChild(n));
        return t;
    }
    function k(t, e) {
        var i = pt(e.createElement(t)).appendTo(e.body),
            n = pt.css(i[0], "display");
        return i.detach(), n;
    }
    function D(t) {
        var e = nt,
            i = he[t];
        return (
            i ||
                ((i = k(t, e)),
                ("none" !== i && i) ||
                    ((le = (le || pt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement)), (e = (le[0].contentWindow || le[0].contentDocument).document), e.write(), e.close(), (i = k(t, e)), le.detach()),
                (he[t] = i)),
            i
        );
    }
    function I(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments);
            },
        };
    }
    function E(t) {
        if (t in Se) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = xe.length; i--; ) if (((t = xe[i] + e), t in Se)) return t;
    }
    function H(t, e) {
        for (var i, n, s, o = [], a = 0, r = t.length; a < r; a++)
            (n = t[a]),
                n.style &&
                    ((o[a] = pt._data(n, "olddisplay")),
                    (i = n.style.display),
                    e
                        ? (o[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ot(n) && (o[a] = pt._data(n, "olddisplay", D(n.nodeName))))
                        : ((s = Ot(n)), ((i && "none" !== i) || !s) && pt._data(n, "olddisplay", s ? i : pt.css(n, "display"))));
        for (a = 0; a < r; a++) (n = t[a]), n.style && ((e && "none" !== n.style.display && "" !== n.style.display) || (n.style.display = e ? o[a] || "" : "none"));
        return t;
    }
    function G(t, e, i) {
        var n = _e.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e;
    }
    function N(t, e, i, n, s) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; o < 4; o += 2)
            "margin" === i && (a += pt.css(t, i + Lt[o], !0, s)),
                n
                    ? ("content" === i && (a -= pt.css(t, "padding" + Lt[o], !0, s)), "margin" !== i && (a -= pt.css(t, "border" + Lt[o] + "Width", !0, s)))
                    : ((a += pt.css(t, "padding" + Lt[o], !0, s)), "padding" !== i && (a += pt.css(t, "border" + Lt[o] + "Width", !0, s)));
        return a;
    }
    function B(t, e, i) {
        var n = !0,
            s = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = fe(t),
            a = ut.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, o);
        if (s <= 0 || null == s) {
            if (((s = ge(t, e, o)), (s < 0 || null == s) && (s = t.style[e]), ue.test(s))) return s;
            (n = a && (ut.boxSizingReliable() || s === t.style[e])), (s = parseFloat(s) || 0);
        }
        return s + N(t, e, i || (a ? "border" : "content"), n, o) + "px";
    }
    function L(t, e, i, n, s) {
        return new L.prototype.init(t, e, i, n, s);
    }
    function O() {
        return (
            t.setTimeout(function () {
                Ce = void 0;
            }),
            (Ce = pt.now())
        );
    }
    function F(t, e) {
        var i,
            n = { height: t },
            s = 0;
        for (e = e ? 1 : 0; s < 4; s += 2 - e) (i = Lt[s]), (n["margin" + i] = n["padding" + i] = t);
        return e && (n.opacity = n.width = t), n;
    }
    function R(t, e, i) {
        for (var n, s = ($.tweeners[e] || []).concat($.tweeners["*"]), o = 0, a = s.length; o < a; o++) if ((n = s[o].call(i, e, t))) return n;
    }
    function z(t, e, i) {
        var n,
            s,
            o,
            a,
            r,
            l,
            h,
            c,
            u = this,
            d = {},
            p = t.style,
            f = t.nodeType && Ot(t),
            g = pt._data(t, "fxshow");
        i.queue ||
            ((r = pt._queueHooks(t, "fx")),
            null == r.unqueued &&
                ((r.unqueued = 0),
                (l = r.empty.fire),
                (r.empty.fire = function () {
                    r.unqueued || l();
                })),
            r.unqueued++,
            u.always(function () {
                u.always(function () {
                    r.unqueued--, pt.queue(t, "fx").length || r.empty.fire();
                });
            })),
            1 === t.nodeType &&
                ("height" in e || "width" in e) &&
                ((i.overflow = [p.overflow, p.overflowX, p.overflowY]),
                (h = pt.css(t, "display")),
                (c = "none" === h ? pt._data(t, "olddisplay") || D(t.nodeName) : h),
                "inline" === c && "none" === pt.css(t, "float") && (ut.inlineBlockNeedsLayout && "inline" !== D(t.nodeName) ? (p.zoom = 1) : (p.display = "inline-block"))),
            i.overflow &&
                ((p.overflow = "hidden"),
                ut.shrinkWrapBlocks() ||
                    u.always(function () {
                        (p.overflow = i.overflow[0]), (p.overflowX = i.overflow[1]), (p.overflowY = i.overflow[2]);
                    }));
        for (n in e)
            if (((s = e[n]), Me.exec(s))) {
                if ((delete e[n], (o = o || "toggle" === s), s === (f ? "hide" : "show"))) {
                    if ("show" !== s || !g || void 0 === g[n]) continue;
                    f = !0;
                }
                d[n] = (g && g[n]) || pt.style(t, n);
            } else h = void 0;
        if (pt.isEmptyObject(d)) "inline" === ("none" === h ? D(t.nodeName) : h) && (p.display = h);
        else {
            g ? "hidden" in g && (f = g.hidden) : (g = pt._data(t, "fxshow", {})),
                o && (g.hidden = !f),
                f
                    ? pt(t).show()
                    : u.done(function () {
                          pt(t).hide();
                      }),
                u.done(function () {
                    var e;
                    pt._removeData(t, "fxshow");
                    for (e in d) pt.style(t, e, d[e]);
                });
            for (n in d) (a = R(f ? g[n] : 0, n, u)), n in g || ((g[n] = a.start), f && ((a.end = a.start), (a.start = "width" === n || "height" === n ? 1 : 0)));
        }
    }
    function W(t, e) {
        var i, n, s, o, a;
        for (i in t)
            if (((n = pt.camelCase(i)), (s = e[n]), (o = t[i]), pt.isArray(o) && ((s = o[1]), (o = t[i] = o[0])), i !== n && ((t[n] = o), delete t[i]), (a = pt.cssHooks[n]), a && "expand" in a)) {
                (o = a.expand(o)), delete t[n];
                for (i in o) i in t || ((t[i] = o[i]), (e[i] = s));
            } else e[n] = s;
    }
    function $(t, e, i) {
        var n,
            s,
            o = 0,
            a = $.prefilters.length,
            r = pt.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (s) return !1;
                for (var e = Ce || O(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, o = 1 - n, a = 0, l = h.tweens.length; a < l; a++) h.tweens[a].run(o);
                return r.notifyWith(t, [h, o, i]), o < 1 && l ? i : (r.resolveWith(t, [h]), !1);
            },
            h = r.promise({
                elem: t,
                props: pt.extend({}, e),
                opts: pt.extend(!0, { specialEasing: {}, easing: pt.easing._default }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Ce || O(),
                duration: i.duration,
                tweens: [],
                createTween: function (e, i) {
                    var n = pt.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(n), n;
                },
                stop: function (e) {
                    var i = 0,
                        n = e ? h.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < n; i++) h.tweens[i].run(1);
                    return e ? (r.notifyWith(t, [h, 1, 0]), r.resolveWith(t, [h, e])) : r.rejectWith(t, [h, e]), this;
                },
            }),
            c = h.props;
        for (W(c, h.opts.specialEasing); o < a; o++) if ((n = $.prefilters[o].call(h, t, c, h.opts))) return pt.isFunction(n.stop) && (pt._queueHooks(h.elem, h.opts.queue).stop = pt.proxy(n.stop, n)), n;
        return (
            pt.map(c, R, h),
            pt.isFunction(h.opts.start) && h.opts.start.call(t, h),
            pt.fx.timer(pt.extend(l, { elem: t, anim: h, queue: h.opts.queue })),
            h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
        );
    }
    function V(t) {
        return pt.attr(t, "class") || "";
    }
    function j(t) {
        return function (e, i) {
            "string" != typeof e && ((i = e), (e = "*"));
            var n,
                s = 0,
                o = e.toLowerCase().match(kt) || [];
            if (pt.isFunction(i)) for (; (n = o[s++]); ) "+" === n.charAt(0) ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i);
        };
    }
    function X(t, e, i, n) {
        function s(r) {
            var l;
            return (
                (o[r] = !0),
                pt.each(t[r] || [], function (t, r) {
                    var h = r(e, i, n);
                    return "string" != typeof h || a || o[h] ? (a ? !(l = h) : void 0) : (e.dataTypes.unshift(h), s(h), !1);
                }),
                l
            );
        }
        var o = {},
            a = t === Ze;
        return s(e.dataTypes[0]) || (!o["*"] && s("*"));
    }
    function q(t, e) {
        var i,
            n,
            s = pt.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && pt.extend(!0, t, i), t;
    }
    function K(t, e, i) {
        for (var n, s, o, a, r = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s)
            for (a in r)
                if (r[a] && r[a].test(s)) {
                    l.unshift(a);
                    break;
                }
        if (l[0] in i) o = l[0];
        else {
            for (a in i) {
                if (!l[0] || t.converters[a + " " + l[0]]) {
                    o = a;
                    break;
                }
                n || (n = a);
            }
            o = o || n;
        }
        if (o) return o !== l[0] && l.unshift(o), i[o];
    }
    function Y(t, e, i, n) {
        var s,
            o,
            a,
            r,
            l,
            h = {},
            c = t.dataTypes.slice();
        if (c[1]) for (a in t.converters) h[a.toLowerCase()] = t.converters[a];
        for (o = c.shift(); o; )
            if ((t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = o), (o = c.shift())))
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
                    if (((a = h[l + " " + o] || h["* " + o]), !a))
                        for (s in h)
                            if (((r = s.split(" ")), r[1] === o && (a = h[l + " " + r[0]] || h["* " + r[0]]))) {
                                a === !0 ? (a = h[s]) : h[s] !== !0 && ((o = r[0]), c.unshift(r[1]));
                                break;
                            }
                    if (a !== !0)
                        if (a && t["throws"]) e = a(e);
                        else
                            try {
                                e = a(e);
                            } catch (u) {
                                return { state: "parsererror", error: a ? u : "No conversion from " + l + " to " + o };
                            }
                }
        return { state: "success", data: e };
    }
    function U(t) {
        return (t.style && t.style.display) || pt.css(t, "display");
    }
    function Q(t) {
        if (!pt.contains(t.ownerDocument || nt, t)) return !0;
        for (; t && 1 === t.nodeType; ) {
            if ("none" === U(t) || "hidden" === t.type) return !0;
            t = t.parentNode;
        }
        return !1;
    }
    function Z(t, e, i, n) {
        var s;
        if (pt.isArray(e))
            pt.each(e, function (e, s) {
                i || ni.test(t) ? n(t, s) : Z(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n);
            });
        else if (i || "object" !== pt.type(e)) n(t, e);
        else for (s in e) Z(t + "[" + s + "]", e[s], i, n);
    }
    function J() {
        try {
            return new t.XMLHttpRequest();
        } catch (e) {}
    }
    function tt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
    function et(t) {
        return pt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow);
    }
    var it = [],
        nt = t.document,
        st = it.slice,
        ot = it.concat,
        at = it.push,
        rt = it.indexOf,
        lt = {},
        ht = lt.toString,
        ct = lt.hasOwnProperty,
        ut = {},
        dt = "1.12.4",
        pt = function (t, e) {
            return new pt.fn.init(t, e);
        },
        ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        gt = /^-ms-/,
        mt = /-([\da-z])/gi,
        vt = function (t, e) {
            return e.toUpperCase();
        };
    (pt.fn = pt.prototype = {
        jquery: dt,
        constructor: pt,
        selector: "",
        length: 0,
        toArray: function () {
            return st.call(this);
        },
        get: function (t) {
            return null != t ? (t < 0 ? this[t + this.length] : this[t]) : st.call(this);
        },
        pushStack: function (t) {
            var e = pt.merge(this.constructor(), t);
            return (e.prevObject = this), (e.context = this.context), e;
        },
        each: function (t) {
            return pt.each(this, t);
        },
        map: function (t) {
            return this.pushStack(
                pt.map(this, function (e, i) {
                    return t.call(e, i, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(st.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: at,
        sort: it.sort,
        splice: it.splice,
    }),
        (pt.extend = pt.fn.extend = function () {
            var t,
                e,
                i,
                n,
                s,
                o,
                a = arguments[0] || {},
                r = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof a && ((h = a), (a = arguments[r] || {}), r++), "object" == typeof a || pt.isFunction(a) || (a = {}), r === l && ((a = this), r--); r < l; r++)
                if (null != (s = arguments[r]))
                    for (n in s)
                        (t = a[n]),
                            (i = s[n]),
                            a !== i &&
                                (h && i && (pt.isPlainObject(i) || (e = pt.isArray(i)))
                                    ? (e ? ((e = !1), (o = t && pt.isArray(t) ? t : [])) : (o = t && pt.isPlainObject(t) ? t : {}), (a[n] = pt.extend(h, o, i)))
                                    : void 0 !== i && (a[n] = i));
            return a;
        }),
        pt.extend({
            expando: "jQuery" + (dt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t);
            },
            noop: function () {},
            isFunction: function (t) {
                return "function" === pt.type(t);
            },
            isArray:
                Array.isArray ||
                function (t) {
                    return "array" === pt.type(t);
                },
            isWindow: function (t) {
                return null != t && t == t.window;
            },
            isNumeric: function (t) {
                var e = t && t.toString();
                return !pt.isArray(t) && e - parseFloat(e) + 1 >= 0;
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0;
            },
            isPlainObject: function (t) {
                var e;
                if (!t || "object" !== pt.type(t) || t.nodeType || pt.isWindow(t)) return !1;
                try {
                    if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf")) return !1;
                } catch (i) {
                    return !1;
                }
                if (!ut.ownFirst) for (e in t) return ct.call(t, e);
                for (e in t);
                return void 0 === e || ct.call(t, e);
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ht.call(t)] || "object" : typeof t;
            },
            globalEval: function (e) {
                e &&
                    pt.trim(e) &&
                    (
                        t.execScript ||
                        function (e) {
                            t.eval.call(t, e);
                        }
                    )(e);
            },
            camelCase: function (t) {
                return t.replace(gt, "ms-").replace(mt, vt);
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
            },
            each: function (t, e) {
                var n,
                    s = 0;
                if (i(t)) for (n = t.length; s < n && e.call(t[s], s, t[s]) !== !1; s++);
                else for (s in t) if (e.call(t[s], s, t[s]) === !1) break;
                return t;
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(ft, "");
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? pt.merge(n, "string" == typeof t ? [t] : t) : at.call(n, t)), n;
            },
            inArray: function (t, e, i) {
                var n;
                if (e) {
                    if (rt) return rt.call(e, t, i);
                    for (n = e.length, i = i ? (i < 0 ? Math.max(0, n + i) : i) : 0; i < n; i++) if (i in e && e[i] === t) return i;
                }
                return -1;
            },
            merge: function (t, e) {
                for (var i = +e.length, n = 0, s = t.length; n < i; ) t[s++] = e[n++];
                if (i !== i) for (; void 0 !== e[n]; ) t[s++] = e[n++];
                return (t.length = s), t;
            },
            grep: function (t, e, i) {
                for (var n, s = [], o = 0, a = t.length, r = !i; o < a; o++) (n = !e(t[o], o)), n !== r && s.push(t[o]);
                return s;
            },
            map: function (t, e, n) {
                var s,
                    o,
                    a = 0,
                    r = [];
                if (i(t)) for (s = t.length; a < s; a++) (o = e(t[a], a, n)), null != o && r.push(o);
                else for (a in t) (o = e(t[a], a, n)), null != o && r.push(o);
                return ot.apply([], r);
            },
            guid: 1,
            proxy: function (t, e) {
                var i, n, s;
                if (("string" == typeof e && ((s = t[e]), (e = t), (t = s)), pt.isFunction(t)))
                    return (
                        (i = st.call(arguments, 2)),
                        (n = function () {
                            return t.apply(e || this, i.concat(st.call(arguments)));
                        }),
                        (n.guid = t.guid = t.guid || pt.guid++),
                        n
                    );
            },
            now: function () {
                return +new Date();
            },
            support: ut,
        }),
        "function" == typeof Symbol && (pt.fn[Symbol.iterator] = it[Symbol.iterator]),
        pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            lt["[object " + e + "]"] = e.toLowerCase();
        });
    var bt = (function (t) {
        function e(t, e, i, n) {
            var s,
                o,
                a,
                r,
                l,
                h,
                u,
                p,
                f = e && e.ownerDocument,
                g = e ? e.nodeType : 9;
            if (((i = i || []), "string" != typeof t || !t || (1 !== g && 9 !== g && 11 !== g))) return i;
            if (!n && ((e ? e.ownerDocument || e : R) !== E && I(e), (e = e || E), G)) {
                if (11 !== g && (h = vt.exec(t)))
                    if ((s = h[1])) {
                        if (9 === g) {
                            if (!(a = e.getElementById(s))) return i;
                            if (a.id === s) return i.push(a), i;
                        } else if (f && (a = f.getElementById(s)) && O(e, a) && a.id === s) return i.push(a), i;
                    } else {
                        if (h[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = h[3]) && T.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(s)), i;
                    }
                if (T.qsa && !j[t + " "] && (!N || !N.test(t))) {
                    if (1 !== g) (f = e), (p = t);
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((r = e.getAttribute("id")) ? (r = r.replace(yt, "\\$&")) : e.setAttribute("id", (r = F)), u = C(t), o = u.length, l = dt.test(r) ? "#" + r : "[id='" + r + "']"; o--; ) u[o] = l + " " + d(u[o]);
                        (p = u.join(",")), (f = (bt.test(t) && c(e.parentNode)) || e);
                    }
                    if (p)
                        try {
                            return Z.apply(i, f.querySelectorAll(p)), i;
                        } catch (m) {
                        } finally {
                            r === F && e.removeAttribute("id");
                        }
                }
            }
            return M(t.replace(rt, "$1"), e, i, n);
        }
        function i() {
            function t(i, n) {
                return e.push(i + " ") > w.cacheLength && delete t[e.shift()], (t[i + " "] = n);
            }
            var e = [];
            return t;
        }
        function n(t) {
            return (t[F] = !0), t;
        }
        function s(t) {
            var e = E.createElement("div");
            try {
                return !!t(e);
            } catch (i) {
                return !1;
            } finally {
                e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
        }
        function o(t, e) {
            for (var i = t.split("|"), n = i.length; n--; ) w.attrHandle[i[n]] = e;
        }
        function a(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || q) - (~t.sourceIndex || q);
            if (n) return n;
            if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
            return t ? 1 : -1;
        }
        function r(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t;
            };
        }
        function l(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t;
            };
        }
        function h(t) {
            return n(function (e) {
                return (
                    (e = +e),
                    n(function (i, n) {
                        for (var s, o = t([], i.length, e), a = o.length; a--; ) i[(s = o[a])] && (i[s] = !(n[s] = i[s]));
                    })
                );
            });
        }
        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t;
        }
        function u() {}
        function d(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n;
        }
        function p(t, e, i) {
            var n = e.dir,
                s = i && "parentNode" === n,
                o = W++;
            return e.first
                ? function (e, i, o) {
                      for (; (e = e[n]); ) if (1 === e.nodeType || s) return t(e, i, o);
                  }
                : function (e, i, a) {
                      var r,
                          l,
                          h,
                          c = [z, o];
                      if (a) {
                          for (; (e = e[n]); ) if ((1 === e.nodeType || s) && t(e, i, a)) return !0;
                      } else
                          for (; (e = e[n]); )
                              if (1 === e.nodeType || s) {
                                  if (((h = e[F] || (e[F] = {})), (l = h[e.uniqueID] || (h[e.uniqueID] = {})), (r = l[n]) && r[0] === z && r[1] === o)) return (c[2] = r[2]);
                                  if (((l[n] = c), (c[2] = t(e, i, a)))) return !0;
                              }
                  };
        }
        function f(t) {
            return t.length > 1
                ? function (e, i, n) {
                      for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
                      return !0;
                  }
                : t[0];
        }
        function g(t, i, n) {
            for (var s = 0, o = i.length; s < o; s++) e(t, i[s], n);
            return n;
        }
        function m(t, e, i, n, s) {
            for (var o, a = [], r = 0, l = t.length, h = null != e; r < l; r++) (o = t[r]) && ((i && !i(o, n, s)) || (a.push(o), h && e.push(r)));
            return a;
        }
        function v(t, e, i, s, o, a) {
            return (
                s && !s[F] && (s = v(s)),
                o && !o[F] && (o = v(o, a)),
                n(function (n, a, r, l) {
                    var h,
                        c,
                        u,
                        d = [],
                        p = [],
                        f = a.length,
                        v = n || g(e || "*", r.nodeType ? [r] : r, []),
                        b = !t || (!n && e) ? v : m(v, d, t, r, l),
                        y = i ? (o || (n ? t : f || s) ? [] : a) : b;
                    if ((i && i(b, y, r, l), s)) for (h = m(y, p), s(h, [], r, l), c = h.length; c--; ) (u = h[c]) && (y[p[c]] = !(b[p[c]] = u));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (h = [], c = y.length; c--; ) (u = y[c]) && h.push((b[c] = u));
                                o(null, (y = []), h, l);
                            }
                            for (c = y.length; c--; ) (u = y[c]) && (h = o ? tt(n, u) : d[c]) > -1 && (n[h] = !(a[h] = u));
                        }
                    } else (y = m(y === a ? y.splice(f, y.length) : y)), o ? o(null, a, y, l) : Z.apply(a, y);
                })
            );
        }
        function b(t) {
            for (
                var e,
                    i,
                    n,
                    s = t.length,
                    o = w.relative[t[0].type],
                    a = o || w.relative[" "],
                    r = o ? 1 : 0,
                    l = p(
                        function (t) {
                            return t === e;
                        },
                        a,
                        !0
                    ),
                    h = p(
                        function (t) {
                            return tt(e, t) > -1;
                        },
                        a,
                        !0
                    ),
                    c = [
                        function (t, i, n) {
                            var s = (!o && (n || i !== A)) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                            return (e = null), s;
                        },
                    ];
                r < s;
                r++
            )
                if ((i = w.relative[t[r].type])) c = [p(f(c), i)];
                else {
                    if (((i = w.filter[t[r].type].apply(null, t[r].matches)), i[F])) {
                        for (n = ++r; n < s && !w.relative[t[n].type]; n++);
                        return v(r > 1 && f(c), r > 1 && d(t.slice(0, r - 1).concat({ value: " " === t[r - 2].type ? "*" : "" })).replace(rt, "$1"), i, r < n && b(t.slice(r, n)), n < s && b((t = t.slice(n))), n < s && d(t));
                    }
                    c.push(i);
                }
            return f(c);
        }
        function y(t, i) {
            var s = i.length > 0,
                o = t.length > 0,
                a = function (n, a, r, l, h) {
                    var c,
                        u,
                        d,
                        p = 0,
                        f = "0",
                        g = n && [],
                        v = [],
                        b = A,
                        y = n || (o && w.find.TAG("*", h)),
                        _ = (z += null == b ? 1 : Math.random() || 0.1),
                        T = y.length;
                    for (h && (A = a === E || a || h); f !== T && null != (c = y[f]); f++) {
                        if (o && c) {
                            for (u = 0, a || c.ownerDocument === E || (I(c), (r = !G)); (d = t[u++]); )
                                if (d(c, a || E, r)) {
                                    l.push(c);
                                    break;
                                }
                            h && (z = _);
                        }
                        s && ((c = !d && c) && p--, n && g.push(c));
                    }
                    if (((p += f), s && f !== p)) {
                        for (u = 0; (d = i[u++]); ) d(g, v, a, r);
                        if (n) {
                            if (p > 0) for (; f--; ) g[f] || v[f] || (v[f] = U.call(l));
                            v = m(v);
                        }
                        Z.apply(l, v), h && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l);
                    }
                    return h && ((z = _), (A = b)), g;
                };
            return s ? n(a) : a;
        }
        var _,
            T,
            w,
            x,
            S,
            C,
            P,
            M,
            A,
            k,
            D,
            I,
            E,
            H,
            G,
            N,
            B,
            L,
            O,
            F = "sizzle" + 1 * new Date(),
            R = t.document,
            z = 0,
            W = 0,
            $ = i(),
            V = i(),
            j = i(),
            X = function (t, e) {
                return t === e && (D = !0), 0;
            },
            q = 1 << 31,
            K = {}.hasOwnProperty,
            Y = [],
            U = Y.pop,
            Q = Y.push,
            Z = Y.push,
            J = Y.slice,
            tt = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                return -1;
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
            ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            at = new RegExp(it + "+", "g"),
            rt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            lt = new RegExp("^" + it + "*," + it + "*"),
            ht = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ct = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            ut = new RegExp(ot),
            dt = new RegExp("^" + nt + "$"),
            pt = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt + "|[*])"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i"),
            },
            ft = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            yt = /'|\\/g,
            _t = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            Tt = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
            },
            wt = function () {
                I();
            };
        try {
            Z.apply((Y = J.call(R.childNodes)), R.childNodes), Y[R.childNodes.length].nodeType;
        } catch (xt) {
            Z = {
                apply: Y.length
                    ? function (t, e) {
                          Q.apply(t, J.call(e));
                      }
                    : function (t, e) {
                          for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                          t.length = i - 1;
                      },
            };
        }
        (T = e.support = {}),
            (S = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName;
            }),
            (I = e.setDocument = function (t) {
                var e,
                    i,
                    n = t ? t.ownerDocument || t : R;
                return n !== E && 9 === n.nodeType && n.documentElement
                    ? ((E = n),
                      (H = E.documentElement),
                      (G = !S(E)),
                      (i = E.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", wt, !1) : i.attachEvent && i.attachEvent("onunload", wt)),
                      (T.attributes = s(function (t) {
                          return (t.className = "i"), !t.getAttribute("className");
                      })),
                      (T.getElementsByTagName = s(function (t) {
                          return t.appendChild(E.createComment("")), !t.getElementsByTagName("*").length;
                      })),
                      (T.getElementsByClassName = mt.test(E.getElementsByClassName)),
                      (T.getById = s(function (t) {
                          return (H.appendChild(t).id = F), !E.getElementsByName || !E.getElementsByName(F).length;
                      })),
                      T.getById
                          ? ((w.find.ID = function (t, e) {
                                if ("undefined" != typeof e.getElementById && G) {
                                    var i = e.getElementById(t);
                                    return i ? [i] : [];
                                }
                            }),
                            (w.filter.ID = function (t) {
                                var e = t.replace(_t, Tt);
                                return function (t) {
                                    return t.getAttribute("id") === e;
                                };
                            }))
                          : (delete w.find.ID,
                            (w.filter.ID = function (t) {
                                var e = t.replace(_t, Tt);
                                return function (t) {
                                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                                    return i && i.value === e;
                                };
                            })),
                      (w.find.TAG = T.getElementsByTagName
                          ? function (t, e) {
                                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : T.qsa ? e.querySelectorAll(t) : void 0;
                            }
                          : function (t, e) {
                                var i,
                                    n = [],
                                    s = 0,
                                    o = e.getElementsByTagName(t);
                                if ("*" === t) {
                                    for (; (i = o[s++]); ) 1 === i.nodeType && n.push(i);
                                    return n;
                                }
                                return o;
                            }),
                      (w.find.CLASS =
                          T.getElementsByClassName &&
                          function (t, e) {
                              if ("undefined" != typeof e.getElementsByClassName && G) return e.getElementsByClassName(t);
                          }),
                      (B = []),
                      (N = []),
                      (T.qsa = mt.test(E.querySelectorAll)) &&
                          (s(function (t) {
                              (H.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                  t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + it + "*(?:''|\"\")"),
                                  t.querySelectorAll("[selected]").length || N.push("\\[" + it + "*(?:value|" + et + ")"),
                                  t.querySelectorAll("[id~=" + F + "-]").length || N.push("~="),
                                  t.querySelectorAll(":checked").length || N.push(":checked"),
                                  t.querySelectorAll("a#" + F + "+*").length || N.push(".#.+[+~]");
                          }),
                          s(function (t) {
                              var e = E.createElement("input");
                              e.setAttribute("type", "hidden"),
                                  t.appendChild(e).setAttribute("name", "D"),
                                  t.querySelectorAll("[name=d]").length && N.push("name" + it + "*[*^$|!~]?="),
                                  t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"),
                                  t.querySelectorAll("*,:x"),
                                  N.push(",.*:");
                          })),
                      (T.matchesSelector = mt.test((L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector))) &&
                          s(function (t) {
                              (T.disconnectedMatch = L.call(t, "div")), L.call(t, "[s!='']:x"), B.push("!=", ot);
                          }),
                      (N = N.length && new RegExp(N.join("|"))),
                      (B = B.length && new RegExp(B.join("|"))),
                      (e = mt.test(H.compareDocumentPosition)),
                      (O =
                          e || mt.test(H.contains)
                              ? function (t, e) {
                                    var i = 9 === t.nodeType ? t.documentElement : t,
                                        n = e && e.parentNode;
                                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
                                }
                              : function (t, e) {
                                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                                    return !1;
                                }),
                      (X = e
                          ? function (t, e) {
                                if (t === e) return (D = !0), 0;
                                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                return i
                                    ? i
                                    : ((i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1),
                                      1 & i || (!T.sortDetached && e.compareDocumentPosition(t) === i)
                                          ? t === E || (t.ownerDocument === R && O(R, t))
                                              ? -1
                                              : e === E || (e.ownerDocument === R && O(R, e))
                                              ? 1
                                              : k
                                              ? tt(k, t) - tt(k, e)
                                              : 0
                                          : 4 & i
                                          ? -1
                                          : 1);
                            }
                          : function (t, e) {
                                if (t === e) return (D = !0), 0;
                                var i,
                                    n = 0,
                                    s = t.parentNode,
                                    o = e.parentNode,
                                    r = [t],
                                    l = [e];
                                if (!s || !o) return t === E ? -1 : e === E ? 1 : s ? -1 : o ? 1 : k ? tt(k, t) - tt(k, e) : 0;
                                if (s === o) return a(t, e);
                                for (i = t; (i = i.parentNode); ) r.unshift(i);
                                for (i = e; (i = i.parentNode); ) l.unshift(i);
                                for (; r[n] === l[n]; ) n++;
                                return n ? a(r[n], l[n]) : r[n] === R ? -1 : l[n] === R ? 1 : 0;
                            }),
                      E)
                    : E;
            }),
            (e.matches = function (t, i) {
                return e(t, null, null, i);
            }),
            (e.matchesSelector = function (t, i) {
                if (((t.ownerDocument || t) !== E && I(t), (i = i.replace(ct, "='$1']")), T.matchesSelector && G && !j[i + " "] && (!B || !B.test(i)) && (!N || !N.test(i))))
                    try {
                        var n = L.call(t, i);
                        if (n || T.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return n;
                    } catch (s) {}
                return e(i, E, null, [t]).length > 0;
            }),
            (e.contains = function (t, e) {
                return (t.ownerDocument || t) !== E && I(t), O(t, e);
            }),
            (e.attr = function (t, e) {
                (t.ownerDocument || t) !== E && I(t);
                var i = w.attrHandle[e.toLowerCase()],
                    n = i && K.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !G) : void 0;
                return void 0 !== n ? n : T.attributes || !G ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
            }),
            (e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t);
            }),
            (e.uniqueSort = function (t) {
                var e,
                    i = [],
                    n = 0,
                    s = 0;
                if (((D = !T.detectDuplicates), (k = !T.sortStable && t.slice(0)), t.sort(X), D)) {
                    for (; (e = t[s++]); ) e === t[s] && (n = i.push(s));
                    for (; n--; ) t.splice(i[n], 1);
                }
                return (k = null), t;
            }),
            (x = e.getText = function (t) {
                var e,
                    i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += x(t);
                    } else if (3 === s || 4 === s) return t.nodeValue;
                } else for (; (e = t[n++]); ) i += x(e);
                return i;
            }),
            (w = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: pt,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (t) {
                        return (t[1] = t[1].replace(_t, Tt)), (t[3] = (t[3] || t[4] || t[5] || "").replace(_t, Tt)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                    },
                    CHILD: function (t) {
                        return (
                            (t[1] = t[1].toLowerCase()),
                            "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && e.error(t[0]),
                            t
                        );
                    },
                    PSEUDO: function (t) {
                        var e,
                            i = !t[6] && t[2];
                        return pt.CHILD.test(t[0])
                            ? null
                            : (t[3] ? (t[2] = t[4] || t[5] || "") : i && ut.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))), t.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(_t, Tt).toLowerCase();
                        return "*" === t
                            ? function () {
                                  return !0;
                              }
                            : function (t) {
                                  return t.nodeName && t.nodeName.toLowerCase() === e;
                              };
                    },
                    CLASS: function (t) {
                        var e = $[t + " "];
                        return (
                            e ||
                            ((e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) &&
                                $(t, function (t) {
                                    return e.test(("string" == typeof t.className && t.className) || ("undefined" != typeof t.getAttribute && t.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (t, i, n) {
                        return function (s) {
                            var o = e.attr(s, t);
                            return null == o
                                ? "!=" === i
                                : !i ||
                                      ((o += ""),
                                      "=" === i
                                          ? o === n
                                          : "!=" === i
                                          ? o !== n
                                          : "^=" === i
                                          ? n && 0 === o.indexOf(n)
                                          : "*=" === i
                                          ? n && o.indexOf(n) > -1
                                          : "$=" === i
                                          ? n && o.slice(-n.length) === n
                                          : "~=" === i
                                          ? (" " + o.replace(at, " ") + " ").indexOf(n) > -1
                                          : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"));
                        };
                    },
                    CHILD: function (t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            r = "of-type" === e;
                        return 1 === n && 0 === s
                            ? function (t) {
                                  return !!t.parentNode;
                              }
                            : function (e, i, l) {
                                  var h,
                                      c,
                                      u,
                                      d,
                                      p,
                                      f,
                                      g = o !== a ? "nextSibling" : "previousSibling",
                                      m = e.parentNode,
                                      v = r && e.nodeName.toLowerCase(),
                                      b = !l && !r,
                                      y = !1;
                                  if (m) {
                                      if (o) {
                                          for (; g; ) {
                                              for (d = e; (d = d[g]); ) if (r ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                              f = g = "only" === t && !f && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((f = [a ? m.firstChild : m.lastChild]), a && b)) {
                                          for (
                                              d = m, u = d[F] || (d[F] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), h = c[t] || [], p = h[0] === z && h[1], y = p && h[2], d = p && m.childNodes[p];
                                              (d = (++p && d && d[g]) || (y = p = 0) || f.pop());

                                          )
                                              if (1 === d.nodeType && ++y && d === e) {
                                                  c[t] = [z, p, y];
                                                  break;
                                              }
                                      } else if ((b && ((d = e), (u = d[F] || (d[F] = {})), (c = u[d.uniqueID] || (u[d.uniqueID] = {})), (h = c[t] || []), (p = h[0] === z && h[1]), (y = p)), y === !1))
                                          for (
                                              ;
                                              (d = (++p && d && d[g]) || (y = p = 0) || f.pop()) &&
                                              ((r ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++y || (b && ((u = d[F] || (d[F] = {})), (c = u[d.uniqueID] || (u[d.uniqueID] = {})), (c[t] = [z, y])), d !== e));

                                          );
                                      return (y -= s), y === n || (y % n === 0 && y / n >= 0);
                                  }
                              };
                    },
                    PSEUDO: function (t, i) {
                        var s,
                            o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[F]
                            ? o(i)
                            : o.length > 1
                            ? ((s = [t, t, "", i]),
                              w.setFilters.hasOwnProperty(t.toLowerCase())
                                  ? n(function (t, e) {
                                        for (var n, s = o(t, i), a = s.length; a--; ) (n = tt(t, s[a])), (t[n] = !(e[n] = s[a]));
                                    })
                                  : function (t) {
                                        return o(t, 0, s);
                                    })
                            : o;
                    },
                },
                pseudos: {
                    not: n(function (t) {
                        var e = [],
                            i = [],
                            s = P(t.replace(rt, "$1"));
                        return s[F]
                            ? n(function (t, e, i, n) {
                                  for (var o, a = s(t, null, n, []), r = t.length; r--; ) (o = a[r]) && (t[r] = !(e[r] = o));
                              })
                            : function (t, n, o) {
                                  return (e[0] = t), s(e, null, o, i), (e[0] = null), !i.pop();
                              };
                    }),
                    has: n(function (t) {
                        return function (i) {
                            return e(t, i).length > 0;
                        };
                    }),
                    contains: n(function (t) {
                        return (
                            (t = t.replace(_t, Tt)),
                            function (e) {
                                return (e.textContent || e.innerText || x(e)).indexOf(t) > -1;
                            }
                        );
                    }),
                    lang: n(function (t) {
                        return (
                            dt.test(t || "") || e.error("unsupported lang: " + t),
                            (t = t.replace(_t, Tt).toLowerCase()),
                            function (e) {
                                var i;
                                do if ((i = G ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (i = i.toLowerCase()), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id;
                    },
                    root: function (t) {
                        return t === H;
                    },
                    focus: function (t) {
                        return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                    },
                    enabled: function (t) {
                        return t.disabled === !1;
                    },
                    disabled: function (t) {
                        return t.disabled === !0;
                    },
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0;
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (t) {
                        return !w.pseudos.empty(t);
                    },
                    header: function (t) {
                        return gt.test(t.nodeName);
                    },
                    input: function (t) {
                        return ft.test(t.nodeName);
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e && "button" === t.type) || "button" === e;
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                    },
                    first: h(function () {
                        return [0];
                    }),
                    last: h(function (t, e) {
                        return [e - 1];
                    }),
                    eq: h(function (t, e, i) {
                        return [i < 0 ? i + e : i];
                    }),
                    even: h(function (t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t;
                    }),
                    odd: h(function (t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t;
                    }),
                    lt: h(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; --n >= 0; ) t.push(n);
                        return t;
                    }),
                    gt: h(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
                        return t;
                    }),
                },
            }),
            (w.pseudos.nth = w.pseudos.eq);
        for (_ in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) w.pseudos[_] = r(_);
        for (_ in { submit: !0, reset: !0 }) w.pseudos[_] = l(_);
        return (
            (u.prototype = w.filters = w.pseudos),
            (w.setFilters = new u()),
            (C = e.tokenize = function (t, i) {
                var n,
                    s,
                    o,
                    a,
                    r,
                    l,
                    h,
                    c = V[t + " "];
                if (c) return i ? 0 : c.slice(0);
                for (r = t, l = [], h = w.preFilter; r; ) {
                    (n && !(s = lt.exec(r))) || (s && (r = r.slice(s[0].length) || r), l.push((o = []))), (n = !1), (s = ht.exec(r)) && ((n = s.shift()), o.push({ value: n, type: s[0].replace(rt, " ") }), (r = r.slice(n.length)));
                    for (a in w.filter) !(s = pt[a].exec(r)) || (h[a] && !(s = h[a](s))) || ((n = s.shift()), o.push({ value: n, type: a, matches: s }), (r = r.slice(n.length)));
                    if (!n) break;
                }
                return i ? r.length : r ? e.error(t) : V(t, l).slice(0);
            }),
            (P = e.compile = function (t, e) {
                var i,
                    n = [],
                    s = [],
                    o = j[t + " "];
                if (!o) {
                    for (e || (e = C(t)), i = e.length; i--; ) (o = b(e[i])), o[F] ? n.push(o) : s.push(o);
                    (o = j(t, y(s, n))), (o.selector = t);
                }
                return o;
            }),
            (M = e.select = function (t, e, i, n) {
                var s,
                    o,
                    a,
                    r,
                    l,
                    h = "function" == typeof t && t,
                    u = !n && C((t = h.selector || t));
                if (((i = i || []), 1 === u.length)) {
                    if (((o = u[0] = u[0].slice(0)), o.length > 2 && "ID" === (a = o[0]).type && T.getById && 9 === e.nodeType && G && w.relative[o[1].type])) {
                        if (((e = (w.find.ID(a.matches[0].replace(_t, Tt), e) || [])[0]), !e)) return i;
                        h && (e = e.parentNode), (t = t.slice(o.shift().value.length));
                    }
                    for (s = pt.needsContext.test(t) ? 0 : o.length; s-- && ((a = o[s]), !w.relative[(r = a.type)]); )
                        if ((l = w.find[r]) && (n = l(a.matches[0].replace(_t, Tt), (bt.test(o[0].type) && c(e.parentNode)) || e))) {
                            if ((o.splice(s, 1), (t = n.length && d(o)), !t)) return Z.apply(i, n), i;
                            break;
                        }
                }
                return (h || P(t, u))(n, e, !G, i, !e || (bt.test(t) && c(e.parentNode)) || e), i;
            }),
            (T.sortStable = F.split("").sort(X).join("") === F),
            (T.detectDuplicates = !!D),
            I(),
            (T.sortDetached = s(function (t) {
                return 1 & t.compareDocumentPosition(E.createElement("div"));
            })),
            s(function (t) {
                return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
            }) ||
                o("type|href|height|width", function (t, e, i) {
                    if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                }),
            (T.attributes &&
                s(function (t) {
                    return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                })) ||
                o("value", function (t, e, i) {
                    if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
                }),
            s(function (t) {
                return null == t.getAttribute("disabled");
            }) ||
                o(et, function (t, e, i) {
                    var n;
                    if (!i) return t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
                }),
            e
        );
    })(t);
    (pt.find = bt), (pt.expr = bt.selectors), (pt.expr[":"] = pt.expr.pseudos), (pt.uniqueSort = pt.unique = bt.uniqueSort), (pt.text = bt.getText), (pt.isXMLDoc = bt.isXML), (pt.contains = bt.contains);
    var yt = function (t, e, i) {
            for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (s && pt(t).is(i)) break;
                    n.push(t);
                }
            return n;
        },
        _t = function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i;
        },
        Tt = pt.expr.match.needsContext,
        wt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        xt = /^.[^:#\[\.,]*$/;
    (pt.filter = function (t, e, i) {
        var n = e[0];
        return (
            i && (t = ":not(" + t + ")"),
            1 === e.length && 1 === n.nodeType
                ? pt.find.matchesSelector(n, t)
                    ? [n]
                    : []
                : pt.find.matches(
                      t,
                      pt.grep(e, function (t) {
                          return 1 === t.nodeType;
                      })
                  )
        );
    }),
        pt.fn.extend({
            find: function (t) {
                var e,
                    i = [],
                    n = this,
                    s = n.length;
                if ("string" != typeof t)
                    return this.pushStack(
                        pt(t).filter(function () {
                            for (e = 0; e < s; e++) if (pt.contains(n[e], this)) return !0;
                        })
                    );
                for (e = 0; e < s; e++) pt.find(t, n[e], i);
                return (i = this.pushStack(s > 1 ? pt.unique(i) : i)), (i.selector = this.selector ? this.selector + " " + t : t), i;
            },
            filter: function (t) {
                return this.pushStack(n(this, t || [], !1));
            },
            not: function (t) {
                return this.pushStack(n(this, t || [], !0));
            },
            is: function (t) {
                return !!n(this, "string" == typeof t && Tt.test(t) ? pt(t) : t || [], !1).length;
            },
        });
    var St,
        Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Pt = (pt.fn.init = function (t, e, i) {
            var n, s;
            if (!t) return this;
            if (((i = i || St), "string" == typeof t)) {
                if (((n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Ct.exec(t)), !n || (!n[1] && e))) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (((e = e instanceof pt ? e[0] : e), pt.merge(this, pt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : nt, !0)), wt.test(n[1]) && pt.isPlainObject(e)))
                        for (n in e) pt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this;
                }
                if (((s = nt.getElementById(n[2])), s && s.parentNode)) {
                    if (s.id !== n[2]) return St.find(t);
                    (this.length = 1), (this[0] = s);
                }
                return (this.context = nt), (this.selector = t), this;
            }
            return t.nodeType
                ? ((this.context = this[0] = t), (this.length = 1), this)
                : pt.isFunction(t)
                ? "undefined" != typeof i.ready
                    ? i.ready(t)
                    : t(pt)
                : (void 0 !== t.selector && ((this.selector = t.selector), (this.context = t.context)), pt.makeArray(t, this));
        });
    (Pt.prototype = pt.fn), (St = pt(nt));
    var Mt = /^(?:parents|prev(?:Until|All))/,
        At = { children: !0, contents: !0, next: !0, prev: !0 };
    pt.fn.extend({
        has: function (t) {
            var e,
                i = pt(t, this),
                n = i.length;
            return this.filter(function () {
                for (e = 0; e < n; e++) if (pt.contains(this, i[e])) return !0;
            });
        },
        closest: function (t, e) {
            for (var i, n = 0, s = this.length, o = [], a = Tt.test(t) || "string" != typeof t ? pt(t, e || this.context) : 0; n < s; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && pt.find.matchesSelector(i, t))) {
                        o.push(i);
                        break;
                    }
            return this.pushStack(o.length > 1 ? pt.uniqueSort(o) : o);
        },
        index: function (t) {
            return t ? ("string" == typeof t ? pt.inArray(this[0], pt(t)) : pt.inArray(t.jquery ? t[0] : t, this)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (t, e) {
            return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))));
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        },
    }),
        pt.each(
            {
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (t) {
                    return yt(t, "parentNode");
                },
                parentsUntil: function (t, e, i) {
                    return yt(t, "parentNode", i);
                },
                next: function (t) {
                    return s(t, "nextSibling");
                },
                prev: function (t) {
                    return s(t, "previousSibling");
                },
                nextAll: function (t) {
                    return yt(t, "nextSibling");
                },
                prevAll: function (t) {
                    return yt(t, "previousSibling");
                },
                nextUntil: function (t, e, i) {
                    return yt(t, "nextSibling", i);
                },
                prevUntil: function (t, e, i) {
                    return yt(t, "previousSibling", i);
                },
                siblings: function (t) {
                    return _t((t.parentNode || {}).firstChild, t);
                },
                children: function (t) {
                    return _t(t.firstChild);
                },
                contents: function (t) {
                    return pt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : pt.merge([], t.childNodes);
                },
            },
            function (t, e) {
                pt.fn[t] = function (i, n) {
                    var s = pt.map(this, e, i);
                    return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = pt.filter(n, s)), this.length > 1 && (At[t] || (s = pt.uniqueSort(s)), Mt.test(t) && (s = s.reverse())), this.pushStack(s);
                };
            }
        );
    var kt = /\S+/g;
    (pt.Callbacks = function (t) {
        t = "string" == typeof t ? o(t) : pt.extend({}, t);
        var e,
            i,
            n,
            s,
            a = [],
            r = [],
            l = -1,
            h = function () {
                for (s = t.once, n = e = !0; r.length; l = -1) for (i = r.shift(); ++l < a.length; ) a[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && ((l = a.length), (i = !1));
                t.memory || (i = !1), (e = !1), s && (a = i ? [] : "");
            },
            c = {
                add: function () {
                    return (
                        a &&
                            (i && !e && ((l = a.length - 1), r.push(i)),
                            (function n(e) {
                                pt.each(e, function (e, i) {
                                    pt.isFunction(i) ? (t.unique && c.has(i)) || a.push(i) : i && i.length && "string" !== pt.type(i) && n(i);
                                });
                            })(arguments),
                            i && !e && h()),
                        this
                    );
                },
                remove: function () {
                    return (
                        pt.each(arguments, function (t, e) {
                            for (var i; (i = pt.inArray(e, a, i)) > -1; ) a.splice(i, 1), i <= l && l--;
                        }),
                        this
                    );
                },
                has: function (t) {
                    return t ? pt.inArray(t, a) > -1 : a.length > 0;
                },
                empty: function () {
                    return a && (a = []), this;
                },
                disable: function () {
                    return (s = r = []), (a = i = ""), this;
                },
                disabled: function () {
                    return !a;
                },
                lock: function () {
                    return (s = !0), i || c.disable(), this;
                },
                locked: function () {
                    return !!s;
                },
                fireWith: function (t, i) {
                    return s || ((i = i || []), (i = [t, i.slice ? i.slice() : i]), r.push(i), e || h()), this;
                },
                fire: function () {
                    return c.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!n;
                },
            };
        return c;
    }),
        pt.extend({
            Deferred: function (t) {
                var e = [
                        ["resolve", "done", pt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", pt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", pt.Callbacks("memory")],
                    ],
                    i = "pending",
                    n = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var t = arguments;
                            return pt
                                .Deferred(function (i) {
                                    pt.each(e, function (e, o) {
                                        var a = pt.isFunction(t[e]) && t[e];
                                        s[o[1]](function () {
                                            var t = a && a.apply(this, arguments);
                                            t && pt.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments);
                                        });
                                    }),
                                        (t = null);
                                })
                                .promise();
                        },
                        promise: function (t) {
                            return null != t ? pt.extend(t, n) : n;
                        },
                    },
                    s = {};
                return (
                    (n.pipe = n.then),
                    pt.each(e, function (t, o) {
                        var a = o[2],
                            r = o[3];
                        (n[o[1]] = a.add),
                            r &&
                                a.add(
                                    function () {
                                        i = r;
                                    },
                                    e[1 ^ t][2].disable,
                                    e[2][2].lock
                                ),
                            (s[o[0]] = function () {
                                return s[o[0] + "With"](this === s ? n : this, arguments), this;
                            }),
                            (s[o[0] + "With"] = a.fireWith);
                    }),
                    n.promise(s),
                    t && t.call(s, s),
                    s
                );
            },
            when: function (t) {
                var e,
                    i,
                    n,
                    s = 0,
                    o = st.call(arguments),
                    a = o.length,
                    r = 1 !== a || (t && pt.isFunction(t.promise)) ? a : 0,
                    l = 1 === r ? t : pt.Deferred(),
                    h = function (t, i, n) {
                        return function (s) {
                            (i[t] = this), (n[t] = arguments.length > 1 ? st.call(arguments) : s), n === e ? l.notifyWith(i, n) : --r || l.resolveWith(i, n);
                        };
                    };
                if (a > 1) for (e = new Array(a), i = new Array(a), n = new Array(a); s < a; s++) o[s] && pt.isFunction(o[s].promise) ? o[s].promise().progress(h(s, i, e)).done(h(s, n, o)).fail(l.reject) : --r;
                return r || l.resolveWith(n, o), l.promise();
            },
        });
    var Dt;
    (pt.fn.ready = function (t) {
        return pt.ready.promise().done(t), this;
    }),
        pt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? pt.readyWait++ : pt.ready(!0);
            },
            ready: function (t) {
                (t === !0 ? --pt.readyWait : pt.isReady) || ((pt.isReady = !0), (t !== !0 && --pt.readyWait > 0) || (Dt.resolveWith(nt, [pt]), pt.fn.triggerHandler && (pt(nt).triggerHandler("ready"), pt(nt).off("ready"))));
            },
        }),
        (pt.ready.promise = function (e) {
            if (!Dt)
                if (((Dt = pt.Deferred()), "complete" === nt.readyState || ("loading" !== nt.readyState && !nt.documentElement.doScroll))) t.setTimeout(pt.ready);
                else if (nt.addEventListener) nt.addEventListener("DOMContentLoaded", r), t.addEventListener("load", r);
                else {
                    nt.attachEvent("onreadystatechange", r), t.attachEvent("onload", r);
                    var i = !1;
                    try {
                        i = null == t.frameElement && nt.documentElement;
                    } catch (n) {}
                    i &&
                        i.doScroll &&
                        !(function s() {
                            if (!pt.isReady) {
                                try {
                                    i.doScroll("left");
                                } catch (e) {
                                    return t.setTimeout(s, 50);
                                }
                                a(), pt.ready();
                            }
                        })();
                }
            return Dt.promise(e);
        }),
        pt.ready.promise();
    var It;
    for (It in pt(ut)) break;
    (ut.ownFirst = "0" === It),
        (ut.inlineBlockNeedsLayout = !1),
        pt(function () {
            var t, e, i, n;
            (i = nt.getElementsByTagName("body")[0]),
                i &&
                    i.style &&
                    ((e = nt.createElement("div")),
                    (n = nt.createElement("div")),
                    (n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                    i.appendChild(n).appendChild(e),
                    "undefined" != typeof e.style.zoom && ((e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"), (ut.inlineBlockNeedsLayout = t = 3 === e.offsetWidth), t && (i.style.zoom = 1)),
                    i.removeChild(n));
        }),
        (function () {
            var t = nt.createElement("div");
            ut.deleteExpando = !0;
            try {
                delete t.test;
            } catch (e) {
                ut.deleteExpando = !1;
            }
            t = null;
        })();
    var Et = function (t) {
            var e = pt.noData[(t.nodeName + " ").toLowerCase()],
                i = +t.nodeType || 1;
            return (1 === i || 9 === i) && (!e || (e !== !0 && t.getAttribute("classid") === e));
        },
        Ht = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Gt = /([A-Z])/g;
    pt.extend({
        cache: {},
        noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" },
        hasData: function (t) {
            return (t = t.nodeType ? pt.cache[t[pt.expando]] : t[pt.expando]), !!t && !h(t);
        },
        data: function (t, e, i) {
            return c(t, e, i);
        },
        removeData: function (t, e) {
            return u(t, e);
        },
        _data: function (t, e, i) {
            return c(t, e, i, !0);
        },
        _removeData: function (t, e) {
            return u(t, e, !0);
        },
    }),
        pt.fn.extend({
            data: function (t, e) {
                var i,
                    n,
                    s,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && ((s = pt.data(o)), 1 === o.nodeType && !pt._data(o, "parsedAttrs"))) {
                        for (i = a.length; i--; ) a[i] && ((n = a[i].name), 0 === n.indexOf("data-") && ((n = pt.camelCase(n.slice(5))), l(o, n, s[n])));
                        pt._data(o, "parsedAttrs", !0);
                    }
                    return s;
                }
                return "object" == typeof t
                    ? this.each(function () {
                          pt.data(this, t);
                      })
                    : arguments.length > 1
                    ? this.each(function () {
                          pt.data(this, t, e);
                      })
                    : o
                    ? l(o, t, pt.data(o, t))
                    : void 0;
            },
            removeData: function (t) {
                return this.each(function () {
                    pt.removeData(this, t);
                });
            },
        }),
        pt.extend({
            queue: function (t, e, i) {
                var n;
                if (t) return (e = (e || "fx") + "queue"), (n = pt._data(t, e)), i && (!n || pt.isArray(i) ? (n = pt._data(t, e, pt.makeArray(i))) : n.push(i)), n || [];
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var i = pt.queue(t, e),
                    n = i.length,
                    s = i.shift(),
                    o = pt._queueHooks(t, e),
                    a = function () {
                        pt.dequeue(t, e);
                    };
                "inprogress" === s && ((s = i.shift()), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, a, o)), !n && o && o.empty.fire();
            },
            _queueHooks: function (t, e) {
                var i = e + "queueHooks";
                return (
                    pt._data(t, i) ||
                    pt._data(t, i, {
                        empty: pt.Callbacks("once memory").add(function () {
                            pt._removeData(t, e + "queue"), pt._removeData(t, i);
                        }),
                    })
                );
            },
        }),
        pt.fn.extend({
            queue: function (t, e) {
                var i = 2;
                return (
                    "string" != typeof t && ((e = t), (t = "fx"), i--),
                    arguments.length < i
                        ? pt.queue(this[0], t)
                        : void 0 === e
                        ? this
                        : this.each(function () {
                              var i = pt.queue(this, t, e);
                              pt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && pt.dequeue(this, t);
                          })
                );
            },
            dequeue: function (t) {
                return this.each(function () {
                    pt.dequeue(this, t);
                });
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", []);
            },
            promise: function (t, e) {
                var i,
                    n = 1,
                    s = pt.Deferred(),
                    o = this,
                    a = this.length,
                    r = function () {
                        --n || s.resolveWith(o, [o]);
                    };
                for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; a--; ) (i = pt._data(o[a], t + "queueHooks")), i && i.empty && (n++, i.empty.add(r));
                return r(), s.promise(e);
            },
        }),
        (function () {
            var t;
            ut.shrinkWrapBlocks = function () {
                if (null != t) return t;
                t = !1;
                var e, i, n;
                return (
                    (i = nt.getElementsByTagName("body")[0]),
                    i && i.style
                        ? ((e = nt.createElement("div")),
                          (n = nt.createElement("div")),
                          (n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                          i.appendChild(n).appendChild(e),
                          "undefined" != typeof e.style.zoom &&
                              ((e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                              (e.appendChild(nt.createElement("div")).style.width = "5px"),
                              (t = 3 !== e.offsetWidth)),
                          i.removeChild(n),
                          t)
                        : void 0
                );
            };
        })();
    var Nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Bt = new RegExp("^(?:([+-])=|)(" + Nt + ")([a-z%]*)$", "i"),
        Lt = ["Top", "Right", "Bottom", "Left"],
        Ot = function (t, e) {
            return (t = e || t), "none" === pt.css(t, "display") || !pt.contains(t.ownerDocument, t);
        },
        Ft = function (t, e, i, n, s, o, a) {
            var r = 0,
                l = t.length,
                h = null == i;
            if ("object" === pt.type(i)) {
                s = !0;
                for (r in i) Ft(t, e, r, i[r], !0, o, a);
            } else if (
                void 0 !== n &&
                ((s = !0),
                pt.isFunction(n) || (a = !0),
                h &&
                    (a
                        ? (e.call(t, n), (e = null))
                        : ((h = e),
                          (e = function (t, e, i) {
                              return h.call(pt(t), i);
                          }))),
                e)
            )
                for (; r < l; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
            return s ? t : h ? e.call(t) : l ? e(t[0], i) : o;
        },
        Rt = /^(?:checkbox|radio)$/i,
        zt = /<([\w:-]+)/,
        Wt = /^$|\/(?:java|ecma)script/i,
        $t = /^\s+/,
        Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !(function () {
        var t = nt.createElement("div"),
            e = nt.createDocumentFragment(),
            i = nt.createElement("input");
        (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
            (ut.leadingWhitespace = 3 === t.firstChild.nodeType),
            (ut.tbody = !t.getElementsByTagName("tbody").length),
            (ut.htmlSerialize = !!t.getElementsByTagName("link").length),
            (ut.html5Clone = "<:nav></:nav>" !== nt.createElement("nav").cloneNode(!0).outerHTML),
            (i.type = "checkbox"),
            (i.checked = !0),
            e.appendChild(i),
            (ut.appendChecked = i.checked),
            (t.innerHTML = "<textarea>x</textarea>"),
            (ut.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
            e.appendChild(t),
            (i = nt.createElement("input")),
            i.setAttribute("type", "radio"),
            i.setAttribute("checked", "checked"),
            i.setAttribute("name", "t"),
            t.appendChild(i),
            (ut.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (ut.noCloneEvent = !!t.addEventListener),
            (t[pt.expando] = 1),
            (ut.attributes = !t.getAttribute(pt.expando));
    })();
    var jt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ut.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    };
    (jt.optgroup = jt.option), (jt.tbody = jt.tfoot = jt.colgroup = jt.caption = jt.thead), (jt.th = jt.td);
    var Xt = /<|&#?\w+;/,
        qt = /<tbody/i;
    !(function () {
        var e,
            i,
            n = nt.createElement("div");
        for (e in { submit: !0, change: !0, focusin: !0 }) (i = "on" + e), (ut[e] = i in t) || (n.setAttribute(i, "t"), (ut[e] = n.attributes[i].expando === !1));
        n = null;
    })();
    var Kt = /^(?:input|select|textarea)$/i,
        Yt = /^key/,
        Ut = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Qt = /^(?:focusinfocus|focusoutblur)$/,
        Zt = /^([^.]*)(?:\.(.+)|)/;
    (pt.event = {
        global: {},
        add: function (t, e, i, n, s) {
            var o,
                a,
                r,
                l,
                h,
                c,
                u,
                d,
                p,
                f,
                g,
                m = pt._data(t);
            if (m) {
                for (
                    i.handler && ((l = i), (i = l.handler), (s = l.selector)),
                        i.guid || (i.guid = pt.guid++),
                        (a = m.events) || (a = m.events = {}),
                        (c = m.handle) ||
                            ((c = m.handle = function (t) {
                                return "undefined" == typeof pt || (t && pt.event.triggered === t.type) ? void 0 : pt.event.dispatch.apply(c.elem, arguments);
                            }),
                            (c.elem = t)),
                        e = (e || "").match(kt) || [""],
                        r = e.length;
                    r--;

                )
                    (o = Zt.exec(e[r]) || []),
                        (p = g = o[1]),
                        (f = (o[2] || "").split(".").sort()),
                        p &&
                            ((h = pt.event.special[p] || {}),
                            (p = (s ? h.delegateType : h.bindType) || p),
                            (h = pt.event.special[p] || {}),
                            (u = pt.extend({ type: p, origType: g, data: n, handler: i, guid: i.guid, selector: s, needsContext: s && pt.expr.match.needsContext.test(s), namespace: f.join(".") }, l)),
                            (d = a[p]) || ((d = a[p] = []), (d.delegateCount = 0), (h.setup && h.setup.call(t, n, f, c) !== !1) || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))),
                            h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)),
                            s ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                            (pt.event.global[p] = !0));
                t = null;
            }
        },
        remove: function (t, e, i, n, s) {
            var o,
                a,
                r,
                l,
                h,
                c,
                u,
                d,
                p,
                f,
                g,
                m = pt.hasData(t) && pt._data(t);
            if (m && (c = m.events)) {
                for (e = (e || "").match(kt) || [""], h = e.length; h--; )
                    if (((r = Zt.exec(e[h]) || []), (p = g = r[1]), (f = (r[2] || "").split(".").sort()), p)) {
                        for (u = pt.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = c[p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--; )
                            (a = d[o]),
                                (!s && g !== a.origType) ||
                                    (i && i.guid !== a.guid) ||
                                    (r && !r.test(a.namespace)) ||
                                    (n && n !== a.selector && ("**" !== n || !a.selector)) ||
                                    (d.splice(o, 1), a.selector && d.delegateCount--, u.remove && u.remove.call(t, a));
                        l && !d.length && ((u.teardown && u.teardown.call(t, f, m.handle) !== !1) || pt.removeEvent(t, p, m.handle), delete c[p]);
                    } else for (p in c) pt.event.remove(t, p + e[h], i, n, !0);
                pt.isEmptyObject(c) && (delete m.handle, pt._removeData(t, "events"));
            }
        },
        trigger: function (e, i, n, s) {
            var o,
                a,
                r,
                l,
                h,
                c,
                u,
                d = [n || nt],
                p = ct.call(e, "type") ? e.type : e,
                f = ct.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((r = c = n = n || nt),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !Qt.test(p + pt.event.triggered) &&
                    (p.indexOf(".") > -1 && ((f = p.split(".")), (p = f.shift()), f.sort()),
                    (a = p.indexOf(":") < 0 && "on" + p),
                    (e = e[pt.expando] ? e : new pt.Event(p, "object" == typeof e && e)),
                    (e.isTrigger = s ? 2 : 3),
                    (e.namespace = f.join(".")),
                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (i = null == i ? [e] : pt.makeArray(i, [e])),
                    (h = pt.event.special[p] || {}),
                    s || !h.trigger || h.trigger.apply(n, i) !== !1))
            ) {
                if (!s && !h.noBubble && !pt.isWindow(n)) {
                    for (l = h.delegateType || p, Qt.test(l + p) || (r = r.parentNode); r; r = r.parentNode) d.push(r), (c = r);
                    c === (n.ownerDocument || nt) && d.push(c.defaultView || c.parentWindow || t);
                }
                for (u = 0; (r = d[u++]) && !e.isPropagationStopped(); )
                    (e.type = u > 1 ? l : h.bindType || p),
                        (o = (pt._data(r, "events") || {})[e.type] && pt._data(r, "handle")),
                        o && o.apply(r, i),
                        (o = a && r[a]),
                        o && o.apply && Et(r) && ((e.result = o.apply(r, i)), e.result === !1 && e.preventDefault());
                if (((e.type = p), !s && !e.isDefaultPrevented() && (!h._default || h._default.apply(d.pop(), i) === !1) && Et(n) && a && n[p] && !pt.isWindow(n))) {
                    (c = n[a]), c && (n[a] = null), (pt.event.triggered = p);
                    try {
                        n[p]();
                    } catch (g) {}
                    (pt.event.triggered = void 0), c && (n[a] = c);
                }
                return e.result;
            }
        },
        dispatch: function (t) {
            t = pt.event.fix(t);
            var e,
                i,
                n,
                s,
                o,
                a = [],
                r = st.call(arguments),
                l = (pt._data(this, "events") || {})[t.type] || [],
                h = pt.event.special[t.type] || {};
            if (((r[0] = t), (t.delegateTarget = this), !h.preDispatch || h.preDispatch.call(this, t) !== !1)) {
                for (a = pt.event.handlers.call(this, t, l), e = 0; (s = a[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = s.elem, i = 0; (o = s.handlers[i++]) && !t.isImmediatePropagationStopped(); )
                        (t.rnamespace && !t.rnamespace.test(o.namespace)) ||
                            ((t.handleObj = o), (t.data = o.data), (n = ((pt.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, r)), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function (t, e) {
            var i,
                n,
                s,
                o,
                a = [],
                r = e.delegateCount,
                l = t.target;
            if (r && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (n = [], i = 0; i < r; i++) (o = e[i]), (s = o.selector + " "), void 0 === n[s] && (n[s] = o.needsContext ? pt(s, this).index(l) > -1 : pt.find(s, this, null, [l]).length), n[s] && n.push(o);
                        n.length && a.push({ elem: l, handlers: n });
                    }
            return r < e.length && a.push({ elem: this, handlers: e.slice(r) }), a;
        },
        fix: function (t) {
            if (t[pt.expando]) return t;
            var e,
                i,
                n,
                s = t.type,
                o = t,
                a = this.fixHooks[s];
            for (a || (this.fixHooks[s] = a = Ut.test(s) ? this.mouseHooks : Yt.test(s) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, t = new pt.Event(o), e = n.length; e--; ) (i = n[e]), (t[i] = o[i]);
            return t.target || (t.target = o.srcElement || nt), 3 === t.target.nodeType && (t.target = t.target.parentNode), (t.metaKey = !!t.metaKey), a.filter ? a.filter(t, o) : t;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t;
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var i,
                    n,
                    s,
                    o = e.button,
                    a = e.fromElement;
                return (
                    null == t.pageX &&
                        null != e.clientX &&
                        ((n = t.target.ownerDocument || nt),
                        (s = n.documentElement),
                        (i = n.body),
                        (t.pageX = e.clientX + ((s && s.scrollLeft) || (i && i.scrollLeft) || 0) - ((s && s.clientLeft) || (i && i.clientLeft) || 0)),
                        (t.pageY = e.clientY + ((s && s.scrollTop) || (i && i.scrollTop) || 0) - ((s && s.clientTop) || (i && i.clientTop) || 0))),
                    !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a),
                    t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    t
                );
            },
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== _() && this.focus)
                        try {
                            return this.focus(), !1;
                        } catch (t) {}
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === _() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if (pt.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1;
                },
                _default: function (t) {
                    return pt.nodeName(t.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                },
            },
        },
        simulate: function (t, e, i) {
            var n = pt.extend(new pt.Event(), i, { type: t, isSimulated: !0 });
            pt.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault();
        },
    }),
        (pt.removeEvent = nt.removeEventListener
            ? function (t, e, i) {
                  t.removeEventListener && t.removeEventListener(e, i);
              }
            : function (t, e, i) {
                  var n = "on" + e;
                  t.detachEvent && ("undefined" == typeof t[n] && (t[n] = null), t.detachEvent(n, i));
              }),
        (pt.Event = function (t, e) {
            return this instanceof pt.Event
                ? (t && t.type ? ((this.originalEvent = t), (this.type = t.type), (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && t.returnValue === !1) ? b : y)) : (this.type = t),
                  e && pt.extend(this, e),
                  (this.timeStamp = (t && t.timeStamp) || pt.now()),
                  void (this[pt.expando] = !0))
                : new pt.Event(t, e);
        }),
        (pt.Event.prototype = {
            constructor: pt.Event,
            isDefaultPrevented: y,
            isPropagationStopped: y,
            isImmediatePropagationStopped: y,
            preventDefault: function () {
                var t = this.originalEvent;
                (this.isDefaultPrevented = b), t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                (this.isPropagationStopped = b), t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                (this.isImmediatePropagationStopped = b), t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        pt.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
            pt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var i,
                        n = this,
                        s = t.relatedTarget,
                        o = t.handleObj;
                    return (s && (s === n || pt.contains(n, s))) || ((t.type = o.origType), (i = o.handler.apply(this, arguments)), (t.type = e)), i;
                },
            };
        }),
        ut.submit ||
            (pt.event.special.submit = {
                setup: function () {
                    return (
                        !pt.nodeName(this, "form") &&
                        void pt.event.add(this, "click._submit keypress._submit", function (t) {
                            var e = t.target,
                                i = pt.nodeName(e, "input") || pt.nodeName(e, "button") ? pt.prop(e, "form") : void 0;
                            i &&
                                !pt._data(i, "submit") &&
                                (pt.event.add(i, "submit._submit", function (t) {
                                    t._submitBubble = !0;
                                }),
                                pt._data(i, "submit", !0));
                        })
                    );
                },
                postDispatch: function (t) {
                    t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && pt.event.simulate("submit", this.parentNode, t));
                },
                teardown: function () {
                    return !pt.nodeName(this, "form") && void pt.event.remove(this, "._submit");
                },
            }),
        ut.change ||
            (pt.event.special.change = {
                setup: function () {
                    return Kt.test(this.nodeName)
                        ? (("checkbox" !== this.type && "radio" !== this.type) ||
                              (pt.event.add(this, "propertychange._change", function (t) {
                                  "checked" === t.originalEvent.propertyName && (this._justChanged = !0);
                              }),
                              pt.event.add(this, "click._change", function (t) {
                                  this._justChanged && !t.isTrigger && (this._justChanged = !1), pt.event.simulate("change", this, t);
                              })),
                          !1)
                        : void pt.event.add(this, "beforeactivate._change", function (t) {
                              var e = t.target;
                              Kt.test(e.nodeName) &&
                                  !pt._data(e, "change") &&
                                  (pt.event.add(e, "change._change", function (t) {
                                      !this.parentNode || t.isSimulated || t.isTrigger || pt.event.simulate("change", this.parentNode, t);
                                  }),
                                  pt._data(e, "change", !0));
                          });
                },
                handle: function (t) {
                    var e = t.target;
                    if (this !== e || t.isSimulated || t.isTrigger || ("radio" !== e.type && "checkbox" !== e.type)) return t.handleObj.handler.apply(this, arguments);
                },
                teardown: function () {
                    return pt.event.remove(this, "._change"), !Kt.test(this.nodeName);
                },
            }),
        ut.focusin ||
            pt.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                var i = function (t) {
                    pt.event.simulate(e, t.target, pt.event.fix(t));
                };
                pt.event.special[e] = {
                    setup: function () {
                        var n = this.ownerDocument || this,
                            s = pt._data(n, e);
                        s || n.addEventListener(t, i, !0), pt._data(n, e, (s || 0) + 1);
                    },
                    teardown: function () {
                        var n = this.ownerDocument || this,
                            s = pt._data(n, e) - 1;
                        s ? pt._data(n, e, s) : (n.removeEventListener(t, i, !0), pt._removeData(n, e));
                    },
                };
            }),
        pt.fn.extend({
            on: function (t, e, i, n) {
                return T(this, t, e, i, n);
            },
            one: function (t, e, i, n) {
                return T(this, t, e, i, n, 1);
            },
            off: function (t, e, i) {
                var n, s;
                if (t && t.preventDefault && t.handleObj) return (n = t.handleObj), pt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, e, t[s]);
                    return this;
                }
                return (
                    (e !== !1 && "function" != typeof e) || ((i = e), (e = void 0)),
                    i === !1 && (i = y),
                    this.each(function () {
                        pt.event.remove(this, t, i, e);
                    })
                );
            },
            trigger: function (t, e) {
                return this.each(function () {
                    pt.event.trigger(t, e, this);
                });
            },
            triggerHandler: function (t, e) {
                var i = this[0];
                if (i) return pt.event.trigger(t, e, i, !0);
            },
        });
    var Jt = / jQuery\d+="(?:null|\d+)"/g,
        te = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
        ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ie = /<script|<style|<link/i,
        ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        se = /^true\/(.*)/,
        oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ae = p(nt),
        re = ae.appendChild(nt.createElement("div"));
    pt.extend({
        htmlPrefilter: function (t) {
            return t.replace(ee, "<$1></$2>");
        },
        clone: function (t, e, i) {
            var n,
                s,
                o,
                a,
                r,
                l = pt.contains(t.ownerDocument, t);
            if (
                (ut.html5Clone || pt.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? (o = t.cloneNode(!0)) : ((re.innerHTML = t.outerHTML), re.removeChild((o = re.firstChild))),
                !((ut.noCloneEvent && ut.noCloneChecked) || (1 !== t.nodeType && 11 !== t.nodeType) || pt.isXMLDoc(t)))
            )
                for (n = f(o), r = f(t), a = 0; null != (s = r[a]); ++a) n[a] && P(s, n[a]);
            if (e)
                if (i) for (r = r || f(t), n = n || f(o), a = 0; null != (s = r[a]); a++) C(s, n[a]);
                else C(t, o);
            return (n = f(o, "script")), n.length > 0 && g(n, !l && f(t, "script")), (n = r = s = null), o;
        },
        cleanData: function (t, e) {
            for (var i, n, s, o, a = 0, r = pt.expando, l = pt.cache, h = ut.attributes, c = pt.event.special; null != (i = t[a]); a++)
                if ((e || Et(i)) && ((s = i[r]), (o = s && l[s]))) {
                    if (o.events) for (n in o.events) c[n] ? pt.event.remove(i, n) : pt.removeEvent(i, n, o.handle);
                    l[s] && (delete l[s], h || "undefined" == typeof i.removeAttribute ? (i[r] = void 0) : i.removeAttribute(r), it.push(s));
                }
        },
    }),
        pt.fn.extend({
            domManip: M,
            detach: function (t) {
                return A(this, t, !0);
            },
            remove: function (t) {
                return A(this, t);
            },
            text: function (t) {
                return Ft(
                    this,
                    function (t) {
                        return void 0 === t ? pt.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || nt).createTextNode(t));
                    },
                    null,
                    t,
                    arguments.length
                );
            },
            append: function () {
                return M(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = w(this, t);
                        e.appendChild(t);
                    }
                });
            },
            prepend: function () {
                return M(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = w(this, t);
                        e.insertBefore(t, e.firstChild);
                    }
                });
            },
            before: function () {
                return M(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this);
                });
            },
            after: function () {
                return M(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                });
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && pt.cleanData(f(t, !1)); t.firstChild; ) t.removeChild(t.firstChild);
                    t.options && pt.nodeName(t, "select") && (t.options.length = 0);
                }
                return this;
            },
            clone: function (t, e) {
                return (
                    (t = null != t && t),
                    (e = null == e ? t : e),
                    this.map(function () {
                        return pt.clone(this, t, e);
                    })
                );
            },
            html: function (t) {
                return Ft(
                    this,
                    function (t) {
                        var e = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Jt, "") : void 0;
                        if ("string" == typeof t && !ie.test(t) && (ut.htmlSerialize || !te.test(t)) && (ut.leadingWhitespace || !$t.test(t)) && !jt[(zt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = pt.htmlPrefilter(t);
                            try {
                                for (; i < n; i++) (e = this[i] || {}), 1 === e.nodeType && (pt.cleanData(f(e, !1)), (e.innerHTML = t));
                                e = 0;
                            } catch (s) {}
                        }
                        e && this.empty().append(t);
                    },
                    null,
                    t,
                    arguments.length
                );
            },
            replaceWith: function () {
                var t = [];
                return M(
                    this,
                    arguments,
                    function (e) {
                        var i = this.parentNode;
                        pt.inArray(this, t) < 0 && (pt.cleanData(f(this)), i && i.replaceChild(e, this));
                    },
                    t
                );
            },
        }),
        pt.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
            pt.fn[t] = function (t) {
                for (var i, n = 0, s = [], o = pt(t), a = o.length - 1; n <= a; n++) (i = n === a ? this : this.clone(!0)), pt(o[n])[e](i), at.apply(s, i.get());
                return this.pushStack(s);
            };
        });
    var le,
        he = { HTML: "block", BODY: "block" },
        ce = /^margin/,
        ue = new RegExp("^(" + Nt + ")(?!px)[a-z%]+$", "i"),
        de = function (t, e, i, n) {
            var s,
                o,
                a = {};
            for (o in e) (a[o] = t.style[o]), (t.style[o] = e[o]);
            s = i.apply(t, n || []);
            for (o in e) t.style[o] = a[o];
            return s;
        },
        pe = nt.documentElement;
    !(function () {
        function e() {
            var e,
                c,
                u = nt.documentElement;
            u.appendChild(l),
                (h.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
                (i = s = r = !1),
                (n = a = !0),
                t.getComputedStyle &&
                    ((c = t.getComputedStyle(h)),
                    (i = "1%" !== (c || {}).top),
                    (r = "2px" === (c || {}).marginLeft),
                    (s = "4px" === (c || { width: "4px" }).width),
                    (h.style.marginRight = "50%"),
                    (n = "4px" === (c || { marginRight: "4px" }).marginRight),
                    (e = h.appendChild(nt.createElement("div"))),
                    (e.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                    (e.style.marginRight = e.style.width = "0"),
                    (h.style.width = "1px"),
                    (a = !parseFloat((t.getComputedStyle(e) || {}).marginRight)),
                    h.removeChild(e)),
                (h.style.display = "none"),
                (o = 0 === h.getClientRects().length),
                o &&
                    ((h.style.display = ""),
                    (h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                    (h.childNodes[0].style.borderCollapse = "separate"),
                    (e = h.getElementsByTagName("td")),
                    (e[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
                    (o = 0 === e[0].offsetHeight),
                    o && ((e[0].style.display = ""), (e[1].style.display = "none"), (o = 0 === e[0].offsetHeight))),
                u.removeChild(l);
        }
        var i,
            n,
            s,
            o,
            a,
            r,
            l = nt.createElement("div"),
            h = nt.createElement("div");
        h.style &&
            ((h.style.cssText = "float:left;opacity:.5"),
            (ut.opacity = "0.5" === h.style.opacity),
            (ut.cssFloat = !!h.style.cssFloat),
            (h.style.backgroundClip = "content-box"),
            (h.cloneNode(!0).style.backgroundClip = ""),
            (ut.clearCloneStyle = "content-box" === h.style.backgroundClip),
            (l = nt.createElement("div")),
            (l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
            (h.innerHTML = ""),
            l.appendChild(h),
            (ut.boxSizing = "" === h.style.boxSizing || "" === h.style.MozBoxSizing || "" === h.style.WebkitBoxSizing),
            pt.extend(ut, {
                reliableHiddenOffsets: function () {
                    return null == i && e(), o;
                },
                boxSizingReliable: function () {
                    return null == i && e(), s;
                },
                pixelMarginRight: function () {
                    return null == i && e(), n;
                },
                pixelPosition: function () {
                    return null == i && e(), i;
                },
                reliableMarginRight: function () {
                    return null == i && e(), a;
                },
                reliableMarginLeft: function () {
                    return null == i && e(), r;
                },
            }));
    })();
    var fe,
        ge,
        me = /^(top|right|bottom|left)$/;
    t.getComputedStyle
        ? ((fe = function (e) {
              var i = e.ownerDocument.defaultView;
              return (i && i.opener) || (i = t), i.getComputedStyle(e);
          }),
          (ge = function (t, e, i) {
              var n,
                  s,
                  o,
                  a,
                  r = t.style;
              return (
                  (i = i || fe(t)),
                  (a = i ? i.getPropertyValue(e) || i[e] : void 0),
                  ("" !== a && void 0 !== a) || pt.contains(t.ownerDocument, t) || (a = pt.style(t, e)),
                  i && !ut.pixelMarginRight() && ue.test(a) && ce.test(e) && ((n = r.width), (s = r.minWidth), (o = r.maxWidth), (r.minWidth = r.maxWidth = r.width = a), (a = i.width), (r.width = n), (r.minWidth = s), (r.maxWidth = o)),
                  void 0 === a ? a : a + ""
              );
          }))
        : pe.currentStyle &&
          ((fe = function (t) {
              return t.currentStyle;
          }),
          (ge = function (t, e, i) {
              var n,
                  s,
                  o,
                  a,
                  r = t.style;
              return (
                  (i = i || fe(t)),
                  (a = i ? i[e] : void 0),
                  null == a && r && r[e] && (a = r[e]),
                  ue.test(a) && !me.test(e) && ((n = r.left), (s = t.runtimeStyle), (o = s && s.left), o && (s.left = t.currentStyle.left), (r.left = "fontSize" === e ? "1em" : a), (a = r.pixelLeft + "px"), (r.left = n), o && (s.left = o)),
                  void 0 === a ? a : a + "" || "auto"
              );
          }));
    var ve = /alpha\([^)]*\)/i,
        be = /opacity\s*=\s*([^)]*)/i,
        ye = /^(none|table(?!-c[ea]).+)/,
        _e = new RegExp("^(" + Nt + ")(.*)$", "i"),
        Te = { position: "absolute", visibility: "hidden", display: "block" },
        we = { letterSpacing: "0", fontWeight: "400" },
        xe = ["Webkit", "O", "Moz", "ms"],
        Se = nt.createElement("div").style;
    pt.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = ge(t, "opacity");
                        return "" === i ? "1" : i;
                    }
                },
            },
        },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: ut.cssFloat ? "cssFloat" : "styleFloat" },
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s,
                    o,
                    a,
                    r = pt.camelCase(e),
                    l = t.style;
                if (((e = pt.cssProps[r] || (pt.cssProps[r] = E(r) || r)), (a = pt.cssHooks[e] || pt.cssHooks[r]), void 0 === i)) return a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : l[e];
                if (
                    ((o = typeof i),
                    "string" === o && (s = Bt.exec(i)) && s[1] && ((i = d(t, e, s)), (o = "number")),
                    null != i &&
                        i === i &&
                        ("number" === o && (i += (s && s[3]) || (pt.cssNumber[r] ? "" : "px")), ut.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (i = a.set(t, i, n)))))
                )
                    try {
                        l[e] = i;
                    } catch (h) {}
            }
        },
        css: function (t, e, i, n) {
            var s,
                o,
                a,
                r = pt.camelCase(e);
            return (
                (e = pt.cssProps[r] || (pt.cssProps[r] = E(r) || r)),
                (a = pt.cssHooks[e] || pt.cssHooks[r]),
                a && "get" in a && (o = a.get(t, !0, i)),
                void 0 === o && (o = ge(t, e, n)),
                "normal" === o && e in we && (o = we[e]),
                "" === i || i ? ((s = parseFloat(o)), i === !0 || isFinite(s) ? s || 0 : o) : o
            );
        },
    }),
        pt.each(["height", "width"], function (t, e) {
            pt.cssHooks[e] = {
                get: function (t, i, n) {
                    if (i)
                        return ye.test(pt.css(t, "display")) && 0 === t.offsetWidth
                            ? de(t, Te, function () {
                                  return B(t, e, n);
                              })
                            : B(t, e, n);
                },
                set: function (t, i, n) {
                    var s = n && fe(t);
                    return G(t, i, n ? N(t, e, n, ut.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, s), s) : 0);
                },
            };
        }),
        ut.opacity ||
            (pt.cssHooks.opacity = {
                get: function (t, e) {
                    return be.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : e ? "1" : "";
                },
                set: function (t, e) {
                    var i = t.style,
                        n = t.currentStyle,
                        s = pt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                        o = (n && n.filter) || i.filter || "";
                    (i.zoom = 1), ((e >= 1 || "" === e) && "" === pt.trim(o.replace(ve, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || (n && !n.filter))) || (i.filter = ve.test(o) ? o.replace(ve, s) : o + " " + s);
                },
            }),
        (pt.cssHooks.marginRight = I(ut.reliableMarginRight, function (t, e) {
            if (e) return de(t, { display: "inline-block" }, ge, [t, "marginRight"]);
        })),
        (pt.cssHooks.marginLeft = I(ut.reliableMarginLeft, function (t, e) {
            if (e)
                return (
                    (parseFloat(ge(t, "marginLeft")) ||
                        (pt.contains(t.ownerDocument, t)
                            ? t.getBoundingClientRect().left -
                              de(t, { marginLeft: 0 }, function () {
                                  return t.getBoundingClientRect().left;
                              })
                            : 0)) + "px"
                );
        })),
        pt.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
            (pt.cssHooks[t + e] = {
                expand: function (i) {
                    for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + Lt[n] + e] = o[n] || o[n - 2] || o[0];
                    return s;
                },
            }),
                ce.test(t) || (pt.cssHooks[t + e].set = G);
        }),
        pt.fn.extend({
            css: function (t, e) {
                return Ft(
                    this,
                    function (t, e, i) {
                        var n,
                            s,
                            o = {},
                            a = 0;
                        if (pt.isArray(e)) {
                            for (n = fe(t), s = e.length; a < s; a++) o[e[a]] = pt.css(t, e[a], !1, n);
                            return o;
                        }
                        return void 0 !== i ? pt.style(t, e, i) : pt.css(t, e);
                    },
                    t,
                    e,
                    arguments.length > 1
                );
            },
            show: function () {
                return H(this, !0);
            },
            hide: function () {
                return H(this);
            },
            toggle: function (t) {
                return "boolean" == typeof t
                    ? t
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          Ot(this) ? pt(this).show() : pt(this).hide();
                      });
            },
        }),
        (pt.Tween = L),
        (L.prototype = {
            constructor: L,
            init: function (t, e, i, n, s, o) {
                (this.elem = t), (this.prop = i), (this.easing = s || pt.easing._default), (this.options = e), (this.start = this.now = this.cur()), (this.end = n), (this.unit = o || (pt.cssNumber[i] ? "" : "px"));
            },
            cur: function () {
                var t = L.propHooks[this.prop];
                return t && t.get ? t.get(this) : L.propHooks._default.get(this);
            },
            run: function (t) {
                var e,
                    i = L.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)) : (this.pos = e = t),
                    (this.now = (this.end - this.start) * e + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    i && i.set ? i.set(this) : L.propHooks._default.set(this),
                    this
                );
            },
        }),
        (L.prototype.init.prototype = L.prototype),
        (L.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop]) ? t.elem[t.prop] : ((e = pt.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0);
                },
                set: function (t) {
                    pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || (null == t.elem.style[pt.cssProps[t.prop]] && !pt.cssHooks[t.prop]) ? (t.elem[t.prop] = t.now) : pt.style(t.elem, t.prop, t.now + t.unit);
                },
            },
        }),
        (L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
            },
        }),
        (pt.easing = {
            linear: function (t) {
                return t;
            },
            swing: function (t) {
                return 0.5 - Math.cos(t * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (pt.fx = L.prototype.init),
        (pt.fx.step = {});
    var Ce,
        Pe,
        Me = /^(?:toggle|show|hide)$/,
        Ae = /queueHooks$/;
    (pt.Animation = pt.extend($, {
        tweeners: {
            "*": [
                function (t, e) {
                    var i = this.createTween(t, e);
                    return d(i.elem, t, Bt.exec(e), i), i;
                },
            ],
        },
        tweener: function (t, e) {
            pt.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.match(kt));
            for (var i, n = 0, s = t.length; n < s; n++) (i = t[n]), ($.tweeners[i] = $.tweeners[i] || []), $.tweeners[i].unshift(e);
        },
        prefilters: [z],
        prefilter: function (t, e) {
            e ? $.prefilters.unshift(t) : $.prefilters.push(t);
        },
    })),
        (pt.speed = function (t, e, i) {
            var n = t && "object" == typeof t ? pt.extend({}, t) : { complete: i || (!i && e) || (pt.isFunction(t) && t), duration: t, easing: (i && e) || (e && !pt.isFunction(e) && e) };
            return (
                (n.duration = pt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in pt.fx.speeds ? pt.fx.speeds[n.duration] : pt.fx.speeds._default),
                (null != n.queue && n.queue !== !0) || (n.queue = "fx"),
                (n.old = n.complete),
                (n.complete = function () {
                    pt.isFunction(n.old) && n.old.call(this), n.queue && pt.dequeue(this, n.queue);
                }),
                n
            );
        }),
        pt.fn.extend({
            fadeTo: function (t, e, i, n) {
                return this.filter(Ot).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n);
            },
            animate: function (t, e, i, n) {
                var s = pt.isEmptyObject(t),
                    o = pt.speed(e, i, n),
                    a = function () {
                        var e = $(this, pt.extend({}, t), o);
                        (s || pt._data(this, "finish")) && e.stop(!0);
                    };
                return (a.finish = a), s || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (t, e, i) {
                var n = function (t) {
                    var e = t.stop;
                    delete t.stop, e(i);
                };
                return (
                    "string" != typeof t && ((i = e), (e = t), (t = void 0)),
                    e && t !== !1 && this.queue(t || "fx", []),
                    this.each(function () {
                        var e = !0,
                            s = null != t && t + "queueHooks",
                            o = pt.timers,
                            a = pt._data(this);
                        if (s) a[s] && a[s].stop && n(a[s]);
                        else for (s in a) a[s] && a[s].stop && Ae.test(s) && n(a[s]);
                        for (s = o.length; s--; ) o[s].elem !== this || (null != t && o[s].queue !== t) || (o[s].anim.stop(i), (e = !1), o.splice(s, 1));
                        (!e && i) || pt.dequeue(this, t);
                    })
                );
            },
            finish: function (t) {
                return (
                    t !== !1 && (t = t || "fx"),
                    this.each(function () {
                        var e,
                            i = pt._data(this),
                            n = i[t + "queue"],
                            s = i[t + "queueHooks"],
                            o = pt.timers,
                            a = n ? n.length : 0;
                        for (i.finish = !0, pt.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish;
                    })
                );
            },
        }),
        pt.each(["toggle", "show", "hide"], function (t, e) {
            var i = pt.fn[e];
            pt.fn[e] = function (t, n, s) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(F(e, !0), t, n, s);
            };
        }),
        pt.each({ slideDown: F("show"), slideUp: F("hide"), slideToggle: F("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
            pt.fn[t] = function (t, i, n) {
                return this.animate(e, t, i, n);
            };
        }),
        (pt.timers = []),
        (pt.fx.tick = function () {
            var t,
                e = pt.timers,
                i = 0;
            for (Ce = pt.now(); i < e.length; i++) (t = e[i]), t() || e[i] !== t || e.splice(i--, 1);
            e.length || pt.fx.stop(), (Ce = void 0);
        }),
        (pt.fx.timer = function (t) {
            pt.timers.push(t), t() ? pt.fx.start() : pt.timers.pop();
        }),
        (pt.fx.interval = 13),
        (pt.fx.start = function () {
            Pe || (Pe = t.setInterval(pt.fx.tick, pt.fx.interval));
        }),
        (pt.fx.stop = function () {
            t.clearInterval(Pe), (Pe = null);
        }),
        (pt.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (pt.fn.delay = function (e, i) {
            return (
                (e = pt.fx ? pt.fx.speeds[e] || e : e),
                (i = i || "fx"),
                this.queue(i, function (i, n) {
                    var s = t.setTimeout(i, e);
                    n.stop = function () {
                        t.clearTimeout(s);
                    };
                })
            );
        }),
        (function () {
            var t,
                e = nt.createElement("input"),
                i = nt.createElement("div"),
                n = nt.createElement("select"),
                s = n.appendChild(nt.createElement("option"));
            (i = nt.createElement("div")),
                i.setAttribute("className", "t"),
                (i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                (t = i.getElementsByTagName("a")[0]),
                e.setAttribute("type", "checkbox"),
                i.appendChild(e),
                (t = i.getElementsByTagName("a")[0]),
                (t.style.cssText = "top:1px"),
                (ut.getSetAttribute = "t" !== i.className),
                (ut.style = /top/.test(t.getAttribute("style"))),
                (ut.hrefNormalized = "/a" === t.getAttribute("href")),
                (ut.checkOn = !!e.value),
                (ut.optSelected = s.selected),
                (ut.enctype = !!nt.createElement("form").enctype),
                (n.disabled = !0),
                (ut.optDisabled = !s.disabled),
                (e = nt.createElement("input")),
                e.setAttribute("value", ""),
                (ut.input = "" === e.getAttribute("value")),
                (e.value = "t"),
                e.setAttribute("type", "radio"),
                (ut.radioValue = "t" === e.value);
        })();
    var ke = /\r/g,
        De = /[\x20\t\r\n\f]+/g;
    pt.fn.extend({
        val: function (t) {
            var e,
                i,
                n,
                s = this[0];
            {
                if (arguments.length)
                    return (
                        (n = pt.isFunction(t)),
                        this.each(function (i) {
                            var s;
                            1 === this.nodeType &&
                                ((s = n ? t.call(this, i, pt(this).val()) : t),
                                null == s
                                    ? (s = "")
                                    : "number" == typeof s
                                    ? (s += "")
                                    : pt.isArray(s) &&
                                      (s = pt.map(s, function (t) {
                                          return null == t ? "" : t + "";
                                      })),
                                (e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()]),
                                (e && "set" in e && void 0 !== e.set(this, s, "value")) || (this.value = s));
                        })
                    );
                if (s) return (e = pt.valHooks[s.type] || pt.valHooks[s.nodeName.toLowerCase()]), e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : ((i = s.value), "string" == typeof i ? i.replace(ke, "") : null == i ? "" : i);
            }
        },
    }),
        pt.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = pt.find.attr(t, "value");
                        return null != e ? e : pt.trim(pt.text(t)).replace(De, " ");
                    },
                },
                select: {
                    get: function (t) {
                        for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || s < 0, a = o ? null : [], r = o ? s + 1 : n.length, l = s < 0 ? r : o ? s : 0; l < r; l++)
                            if (((i = n[l]), (i.selected || l === s) && (ut.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !pt.nodeName(i.parentNode, "optgroup")))) {
                                if (((e = pt(i).val()), o)) return e;
                                a.push(e);
                            }
                        return a;
                    },
                    set: function (t, e) {
                        for (var i, n, s = t.options, o = pt.makeArray(e), a = s.length; a--; )
                            if (((n = s[a]), pt.inArray(pt.valHooks.option.get(n), o) > -1))
                                try {
                                    n.selected = i = !0;
                                } catch (r) {
                                    n.scrollHeight;
                                }
                            else n.selected = !1;
                        return i || (t.selectedIndex = -1), s;
                    },
                },
            },
        }),
        pt.each(["radio", "checkbox"], function () {
            (pt.valHooks[this] = {
                set: function (t, e) {
                    if (pt.isArray(e)) return (t.checked = pt.inArray(pt(t).val(), e) > -1);
                },
            }),
                ut.checkOn ||
                    (pt.valHooks[this].get = function (t) {
                        return null === t.getAttribute("value") ? "on" : t.value;
                    });
        });
    var Ie,
        Ee,
        He = pt.expr.attrHandle,
        Ge = /^(?:checked|selected)$/i,
        Ne = ut.getSetAttribute,
        Be = ut.input;
    pt.fn.extend({
        attr: function (t, e) {
            return Ft(this, pt.attr, t, e, arguments.length > 1);
        },
        removeAttr: function (t) {
            return this.each(function () {
                pt.removeAttr(this, t);
            });
        },
    }),
        pt.extend({
            attr: function (t, e, i) {
                var n,
                    s,
                    o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof t.getAttribute
                        ? pt.prop(t, e, i)
                        : ((1 === o && pt.isXMLDoc(t)) || ((e = e.toLowerCase()), (s = pt.attrHooks[e] || (pt.expr.match.bool.test(e) ? Ee : Ie))),
                          void 0 !== i
                              ? null === i
                                  ? void pt.removeAttr(t, e)
                                  : s && "set" in s && void 0 !== (n = s.set(t, i, e))
                                  ? n
                                  : (t.setAttribute(e, i + ""), i)
                              : s && "get" in s && null !== (n = s.get(t, e))
                              ? n
                              : ((n = pt.find.attr(t, e)), null == n ? void 0 : n));
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!ut.radioValue && "radio" === e && pt.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e;
                        }
                    },
                },
            },
            removeAttr: function (t, e) {
                var i,
                    n,
                    s = 0,
                    o = e && e.match(kt);
                if (o && 1 === t.nodeType)
                    for (; (i = o[s++]); ) (n = pt.propFix[i] || i), pt.expr.match.bool.test(i) ? ((Be && Ne) || !Ge.test(i) ? (t[n] = !1) : (t[pt.camelCase("default-" + i)] = t[n] = !1)) : pt.attr(t, i, ""), t.removeAttribute(Ne ? i : n);
            },
        }),
        (Ee = {
            set: function (t, e, i) {
                return e === !1 ? pt.removeAttr(t, i) : (Be && Ne) || !Ge.test(i) ? t.setAttribute((!Ne && pt.propFix[i]) || i, i) : (t[pt.camelCase("default-" + i)] = t[i] = !0), i;
            },
        }),
        pt.each(pt.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var i = He[e] || pt.find.attr;
            (Be && Ne) || !Ge.test(e)
                ? (He[e] = function (t, e, n) {
                      var s, o;
                      return n || ((o = He[e]), (He[e] = s), (s = null != i(t, e, n) ? e.toLowerCase() : null), (He[e] = o)), s;
                  })
                : (He[e] = function (t, e, i) {
                      if (!i) return t[pt.camelCase("default-" + e)] ? e.toLowerCase() : null;
                  });
        }),
        (Be && Ne) ||
            (pt.attrHooks.value = {
                set: function (t, e, i) {
                    return pt.nodeName(t, "input") ? void (t.defaultValue = e) : Ie && Ie.set(t, e, i);
                },
            }),
        Ne ||
            ((Ie = {
                set: function (t, e, i) {
                    var n = t.getAttributeNode(i);
                    if ((n || t.setAttributeNode((n = t.ownerDocument.createAttribute(i))), (n.value = e += ""), "value" === i || e === t.getAttribute(i))) return e;
                },
            }),
            (He.id = He.name = He.coords = function (t, e, i) {
                var n;
                if (!i) return (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null;
            }),
            (pt.valHooks.button = {
                get: function (t, e) {
                    var i = t.getAttributeNode(e);
                    if (i && i.specified) return i.value;
                },
                set: Ie.set,
            }),
            (pt.attrHooks.contenteditable = {
                set: function (t, e, i) {
                    Ie.set(t, "" !== e && e, i);
                },
            }),
            pt.each(["width", "height"], function (t, e) {
                pt.attrHooks[e] = {
                    set: function (t, i) {
                        if ("" === i) return t.setAttribute(e, "auto"), i;
                    },
                };
            })),
        ut.style ||
            (pt.attrHooks.style = {
                get: function (t) {
                    return t.style.cssText || void 0;
                },
                set: function (t, e) {
                    return (t.style.cssText = e + "");
                },
            });
    var Le = /^(?:input|select|textarea|button|object)$/i,
        Oe = /^(?:a|area)$/i;
    pt.fn.extend({
        prop: function (t, e) {
            return Ft(this, pt.prop, t, e, arguments.length > 1);
        },
        removeProp: function (t) {
            return (
                (t = pt.propFix[t] || t),
                this.each(function () {
                    try {
                        (this[t] = void 0), delete this[t];
                    } catch (e) {}
                })
            );
        },
    }),
        pt.extend({
            prop: function (t, e, i) {
                var n,
                    s,
                    o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && pt.isXMLDoc(t)) || ((e = pt.propFix[e] || e), (s = pt.propHooks[e])),
                        void 0 !== i ? (s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t[e] = i)) : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = pt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Le.test(t.nodeName) || (Oe.test(t.nodeName) && t.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        ut.hrefNormalized ||
            pt.each(["href", "src"], function (t, e) {
                pt.propHooks[e] = {
                    get: function (t) {
                        return t.getAttribute(e, 4);
                    },
                };
            }),
        ut.optSelected ||
            (pt.propHooks.selected = {
                get: function (t) {
                    var e = t.parentNode;
                    return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null;
                },
                set: function (t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                },
            }),
        pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            pt.propFix[this.toLowerCase()] = this;
        }),
        ut.enctype || (pt.propFix.enctype = "encoding");
    var Fe = /[\t\r\n\f]/g;
    pt.fn.extend({
        addClass: function (t) {
            var e,
                i,
                n,
                s,
                o,
                a,
                r,
                l = 0;
            if (pt.isFunction(t))
                return this.each(function (e) {
                    pt(this).addClass(t.call(this, e, V(this)));
                });
            if ("string" == typeof t && t)
                for (e = t.match(kt) || []; (i = this[l++]); )
                    if (((s = V(i)), (n = 1 === i.nodeType && (" " + s + " ").replace(Fe, " ")))) {
                        for (a = 0; (o = e[a++]); ) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        (r = pt.trim(n)), s !== r && pt.attr(i, "class", r);
                    }
            return this;
        },
        removeClass: function (t) {
            var e,
                i,
                n,
                s,
                o,
                a,
                r,
                l = 0;
            if (pt.isFunction(t))
                return this.each(function (e) {
                    pt(this).removeClass(t.call(this, e, V(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(kt) || []; (i = this[l++]); )
                    if (((s = V(i)), (n = 1 === i.nodeType && (" " + s + " ").replace(Fe, " ")))) {
                        for (a = 0; (o = e[a++]); ) for (; n.indexOf(" " + o + " ") > -1; ) n = n.replace(" " + o + " ", " ");
                        (r = pt.trim(n)), s !== r && pt.attr(i, "class", r);
                    }
            return this;
        },
        toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i
                ? e
                    ? this.addClass(t)
                    : this.removeClass(t)
                : pt.isFunction(t)
                ? this.each(function (i) {
                      pt(this).toggleClass(t.call(this, i, V(this), e), e);
                  })
                : this.each(function () {
                      var e, n, s, o;
                      if ("string" === i) for (n = 0, s = pt(this), o = t.match(kt) || []; (e = o[n++]); ) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                      else (void 0 !== t && "boolean" !== i) || ((e = V(this)), e && pt._data(this, "__className__", e), pt.attr(this, "class", e || t === !1 ? "" : pt._data(this, "__className__") || ""));
                  });
        },
        hasClass: function (t) {
            var e,
                i,
                n = 0;
            for (e = " " + t + " "; (i = this[n++]); ) if (1 === i.nodeType && (" " + V(i) + " ").replace(Fe, " ").indexOf(e) > -1) return !0;
            return !1;
        },
    }),
        pt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
            t,
            e
        ) {
            pt.fn[e] = function (t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
            };
        }),
        pt.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t);
            },
        });
    var Re = t.location,
        ze = pt.now(),
        We = /\?/,
        $e = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (pt.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i,
            n = null,
            s = pt.trim(e + "");
        return s &&
            !pt.trim(
                s.replace($e, function (t, e, s, o) {
                    return i && e && (n = 0), 0 === n ? t : ((i = s || e), (n += !o - !s), "");
                })
            )
            ? Function("return " + s)()
            : pt.error("Invalid JSON: " + e);
    }),
        (pt.parseXML = function (e) {
            var i, n;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? ((n = new t.DOMParser()), (i = n.parseFromString(e, "text/xml"))) : ((i = new t.ActiveXObject("Microsoft.XMLDOM")), (i.async = "false"), i.loadXML(e));
            } catch (s) {
                i = void 0;
            }
            return (i && i.documentElement && !i.getElementsByTagName("parsererror").length) || pt.error("Invalid XML: " + e), i;
        });
    var Ve = /#.*$/,
        je = /([?&])_=[^&]*/,
        Xe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        qe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ke = /^(?:GET|HEAD)$/,
        Ye = /^\/\//,
        Ue = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Qe = {},
        Ze = {},
        Je = "*/".concat("*"),
        ti = Re.href,
        ei = Ue.exec(ti.toLowerCase()) || [];
    pt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ti,
            type: "GET",
            isLocal: qe.test(ei[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: { "*": Je, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
            converters: { "* text": String, "text html": !0, "text json": pt.parseJSON, "text xml": pt.parseXML },
            flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (t, e) {
            return e ? q(q(t, pt.ajaxSettings), e) : q(pt.ajaxSettings, t);
        },
        ajaxPrefilter: j(Qe),
        ajaxTransport: j(Ze),
        ajax: function (e, i) {
            function n(e, i, n, s) {
                var o,
                    u,
                    b,
                    y,
                    T,
                    x = i;
                2 !== _ &&
                    ((_ = 2),
                    l && t.clearTimeout(l),
                    (c = void 0),
                    (r = s || ""),
                    (w.readyState = e > 0 ? 4 : 0),
                    (o = (e >= 200 && e < 300) || 304 === e),
                    n && (y = K(d, w, n)),
                    (y = Y(d, y, w, o)),
                    o
                        ? (d.ifModified && ((T = w.getResponseHeader("Last-Modified")), T && (pt.lastModified[a] = T), (T = w.getResponseHeader("etag")), T && (pt.etag[a] = T)),
                          204 === e || "HEAD" === d.type ? (x = "nocontent") : 304 === e ? (x = "notmodified") : ((x = y.state), (u = y.data), (b = y.error), (o = !b)))
                        : ((b = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
                    (w.status = e),
                    (w.statusText = (i || x) + ""),
                    o ? g.resolveWith(p, [u, x, w]) : g.rejectWith(p, [w, x, b]),
                    w.statusCode(v),
                    (v = void 0),
                    h && f.trigger(o ? "ajaxSuccess" : "ajaxError", [w, d, o ? u : b]),
                    m.fireWith(p, [w, x]),
                    h && (f.trigger("ajaxComplete", [w, d]), --pt.active || pt.event.trigger("ajaxStop")));
            }
            "object" == typeof e && ((i = e), (e = void 0)), (i = i || {});
            var s,
                o,
                a,
                r,
                l,
                h,
                c,
                u,
                d = pt.ajaxSetup({}, i),
                p = d.context || d,
                f = d.context && (p.nodeType || p.jquery) ? pt(p) : pt.event,
                g = pt.Deferred(),
                m = pt.Callbacks("once memory"),
                v = d.statusCode || {},
                b = {},
                y = {},
                _ = 0,
                T = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === _) {
                            if (!u) for (u = {}; (e = Xe.exec(r)); ) u[e[1].toLowerCase()] = e[2];
                            e = u[t.toLowerCase()];
                        }
                        return null == e ? null : e;
                    },
                    getAllResponseHeaders: function () {
                        return 2 === _ ? r : null;
                    },
                    setRequestHeader: function (t, e) {
                        var i = t.toLowerCase();
                        return _ || ((t = y[i] = y[i] || t), (b[t] = e)), this;
                    },
                    overrideMimeType: function (t) {
                        return _ || (d.mimeType = t), this;
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (_ < 2) for (e in t) v[e] = [v[e], t[e]];
                            else w.always(t[w.status]);
                        return this;
                    },
                    abort: function (t) {
                        var e = t || T;
                        return c && c.abort(e), n(0, e), this;
                    },
                };
            if (
                ((g.promise(w).complete = m.add),
                (w.success = w.done),
                (w.error = w.fail),
                (d.url = ((e || d.url || ti) + "").replace(Ve, "").replace(Ye, ei[1] + "//")),
                (d.type = i.method || i.type || d.method || d.type),
                (d.dataTypes = pt
                    .trim(d.dataType || "*")
                    .toLowerCase()
                    .match(kt) || [""]),
                null == d.crossDomain && ((s = Ue.exec(d.url.toLowerCase())), (d.crossDomain = !(!s || (s[1] === ei[1] && s[2] === ei[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (ei[3] || ("http:" === ei[1] ? "80" : "443")))))),
                d.data && d.processData && "string" != typeof d.data && (d.data = pt.param(d.data, d.traditional)),
                X(Qe, d, i, w),
                2 === _)
            )
                return w;
            (h = pt.event && d.global),
                h && 0 === pt.active++ && pt.event.trigger("ajaxStart"),
                (d.type = d.type.toUpperCase()),
                (d.hasContent = !Ke.test(d.type)),
                (a = d.url),
                d.hasContent || (d.data && ((a = d.url += (We.test(a) ? "&" : "?") + d.data), delete d.data), d.cache === !1 && (d.url = je.test(a) ? a.replace(je, "$1_=" + ze++) : a + (We.test(a) ? "&" : "?") + "_=" + ze++)),
                d.ifModified && (pt.lastModified[a] && w.setRequestHeader("If-Modified-Since", pt.lastModified[a]), pt.etag[a] && w.setRequestHeader("If-None-Match", pt.etag[a])),
                ((d.data && d.hasContent && d.contentType !== !1) || i.contentType) && w.setRequestHeader("Content-Type", d.contentType),
                w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Je + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) w.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === _)) return w.abort();
            T = "abort";
            for (o in { success: 1, error: 1, complete: 1 }) w[o](d[o]);
            if ((c = X(Ze, d, i, w))) {
                if (((w.readyState = 1), h && f.trigger("ajaxSend", [w, d]), 2 === _)) return w;
                d.async &&
                    d.timeout > 0 &&
                    (l = t.setTimeout(function () {
                        w.abort("timeout");
                    }, d.timeout));
                try {
                    (_ = 1), c.send(b, n);
                } catch (x) {
                    if (!(_ < 2)) throw x;
                    n(-1, x);
                }
            } else n(-1, "No Transport");
            return w;
        },
        getJSON: function (t, e, i) {
            return pt.get(t, e, i, "json");
        },
        getScript: function (t, e) {
            return pt.get(t, void 0, e, "script");
        },
    }),
        pt.each(["get", "post"], function (t, e) {
            pt[e] = function (t, i, n, s) {
                return pt.isFunction(i) && ((s = s || n), (n = i), (i = void 0)), pt.ajax(pt.extend({ url: t, type: e, dataType: s, data: i, success: n }, pt.isPlainObject(t) && t));
            };
        }),
        (pt._evalUrl = function (t) {
            return pt.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
        }),
        pt.fn.extend({
            wrapAll: function (t) {
                if (pt.isFunction(t))
                    return this.each(function (e) {
                        pt(this).wrapAll(t.call(this, e));
                    });
                if (this[0]) {
                    var e = pt(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; ) t = t.firstChild;
                                return t;
                            })
                            .append(this);
                }
                return this;
            },
            wrapInner: function (t) {
                return pt.isFunction(t)
                    ? this.each(function (e) {
                          pt(this).wrapInner(t.call(this, e));
                      })
                    : this.each(function () {
                          var e = pt(this),
                              i = e.contents();
                          i.length ? i.wrapAll(t) : e.append(t);
                      });
            },
            wrap: function (t) {
                var e = pt.isFunction(t);
                return this.each(function (i) {
                    pt(this).wrapAll(e ? t.call(this, i) : t);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        }),
        (pt.expr.filters.hidden = function (t) {
            return ut.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : Q(t);
        }),
        (pt.expr.filters.visible = function (t) {
            return !pt.expr.filters.hidden(t);
        });
    var ii = /%20/g,
        ni = /\[\]$/,
        si = /\r?\n/g,
        oi = /^(?:submit|button|image|reset|file)$/i,
        ai = /^(?:input|select|textarea|keygen)/i;
    (pt.param = function (t, e) {
        var i,
            n = [],
            s = function (t, e) {
                (e = pt.isFunction(e) ? e() : null == e ? "" : e), (n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
            };
        if ((void 0 === e && (e = pt.ajaxSettings && pt.ajaxSettings.traditional), pt.isArray(t) || (t.jquery && !pt.isPlainObject(t))))
            pt.each(t, function () {
                s(this.name, this.value);
            });
        else for (i in t) Z(i, t[i], e, s);
        return n.join("&").replace(ii, "+");
    }),
        pt.fn.extend({
            serialize: function () {
                return pt.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = pt.prop(this, "elements");
                    return t ? pt.makeArray(t) : this;
                })
                    .filter(function () {
                        var t = this.type;
                        return this.name && !pt(this).is(":disabled") && ai.test(this.nodeName) && !oi.test(t) && (this.checked || !Rt.test(t));
                    })
                    .map(function (t, e) {
                        var i = pt(this).val();
                        return null == i
                            ? null
                            : pt.isArray(i)
                            ? pt.map(i, function (t) {
                                  return { name: e.name, value: t.replace(si, "\r\n") };
                              })
                            : { name: e.name, value: i.replace(si, "\r\n") };
                    })
                    .get();
            },
        }),
        (pt.ajaxSettings.xhr =
            void 0 !== t.ActiveXObject
                ? function () {
                      return this.isLocal ? tt() : nt.documentMode > 8 ? J() : (/^(get|post|head|put|delete|options)$/i.test(this.type) && J()) || tt();
                  }
                : J);
    var ri = 0,
        li = {},
        hi = pt.ajaxSettings.xhr();
    t.attachEvent &&
        t.attachEvent("onunload", function () {
            for (var t in li) li[t](void 0, !0);
        }),
        (ut.cors = !!hi && "withCredentials" in hi),
        (hi = ut.ajax = !!hi),
        hi &&
            pt.ajaxTransport(function (e) {
                if (!e.crossDomain || ut.cors) {
                    var i;
                    return {
                        send: function (n, s) {
                            var o,
                                a = e.xhr(),
                                r = ++ri;
                            if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (o in e.xhrFields) a[o] = e.xhrFields[o];
                            e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                            for (o in n) void 0 !== n[o] && a.setRequestHeader(o, n[o] + "");
                            a.send((e.hasContent && e.data) || null),
                                (i = function (t, n) {
                                    var o, l, h;
                                    if (i && (n || 4 === a.readyState))
                                        if ((delete li[r], (i = void 0), (a.onreadystatechange = pt.noop), n)) 4 !== a.readyState && a.abort();
                                        else {
                                            (h = {}), (o = a.status), "string" == typeof a.responseText && (h.text = a.responseText);
                                            try {
                                                l = a.statusText;
                                            } catch (c) {
                                                l = "";
                                            }
                                            o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : (o = h.text ? 200 : 404);
                                        }
                                    h && s(o, l, h, a.getAllResponseHeaders());
                                }),
                                e.async ? (4 === a.readyState ? t.setTimeout(i) : (a.onreadystatechange = li[r] = i)) : i();
                        },
                        abort: function () {
                            i && i(void 0, !0);
                        },
                    };
                }
            }),
        pt.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (t) {
                    return pt.globalEval(t), t;
                },
            },
        }),
        pt.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && ((t.type = "GET"), (t.global = !1));
        }),
        pt.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e,
                    i = nt.head || pt("head")[0] || nt.documentElement;
                return {
                    send: function (n, s) {
                        (e = nt.createElement("script")),
                            (e.async = !0),
                            t.scriptCharset && (e.charset = t.scriptCharset),
                            (e.src = t.url),
                            (e.onload = e.onreadystatechange = function (t, i) {
                                (i || !e.readyState || /loaded|complete/.test(e.readyState)) && ((e.onload = e.onreadystatechange = null), e.parentNode && e.parentNode.removeChild(e), (e = null), i || s(200, "success"));
                            }),
                            i.insertBefore(e, i.firstChild);
                    },
                    abort: function () {
                        e && e.onload(void 0, !0);
                    },
                };
            }
        });
    var ci = [],
        ui = /(=)\?(?=&|$)|\?\?/;
    pt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = ci.pop() || pt.expando + "_" + ze++;
            return (this[t] = !0), t;
        },
    }),
        pt.ajaxPrefilter("json jsonp", function (e, i, n) {
            var s,
                o,
                a,
                r = e.jsonp !== !1 && (ui.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ui.test(e.data) && "data");
            if (r || "jsonp" === e.dataTypes[0])
                return (
                    (s = e.jsonpCallback = pt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    r ? (e[r] = e[r].replace(ui, "$1" + s)) : e.jsonp !== !1 && (e.url += (We.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
                    (e.converters["script json"] = function () {
                        return a || pt.error(s + " was not called"), a[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (o = t[s]),
                    (t[s] = function () {
                        a = arguments;
                    }),
                    n.always(function () {
                        void 0 === o ? pt(t).removeProp(s) : (t[s] = o), e[s] && ((e.jsonpCallback = i.jsonpCallback), ci.push(s)), a && pt.isFunction(o) && o(a[0]), (a = o = void 0);
                    }),
                    "script"
                );
        }),
        (pt.parseHTML = function (t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && ((i = e), (e = !1)), (e = e || nt);
            var n = wt.exec(t),
                s = !i && [];
            return n ? [e.createElement(n[1])] : ((n = v([t], e, s)), s && s.length && pt(s).remove(), pt.merge([], n.childNodes));
        });
    var di = pt.fn.load;
    (pt.fn.load = function (t, e, i) {
        if ("string" != typeof t && di) return di.apply(this, arguments);
        var n,
            s,
            o,
            a = this,
            r = t.indexOf(" ");
        return (
            r > -1 && ((n = pt.trim(t.slice(r, t.length))), (t = t.slice(0, r))),
            pt.isFunction(e) ? ((i = e), (e = void 0)) : e && "object" == typeof e && (s = "POST"),
            a.length > 0 &&
                pt
                    .ajax({ url: t, type: s || "GET", dataType: "html", data: e })
                    .done(function (t) {
                        (o = arguments), a.html(n ? pt("<div>").append(pt.parseHTML(t)).find(n) : t);
                    })
                    .always(
                        i &&
                            function (t, e) {
                                a.each(function () {
                                    i.apply(this, o || [t.responseText, e, t]);
                                });
                            }
                    ),
            this
        );
    }),
        pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            pt.fn[e] = function (t) {
                return this.on(e, t);
            };
        }),
        (pt.expr.filters.animated = function (t) {
            return pt.grep(pt.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (pt.offset = {
            setOffset: function (t, e, i) {
                var n,
                    s,
                    o,
                    a,
                    r,
                    l,
                    h,
                    c = pt.css(t, "position"),
                    u = pt(t),
                    d = {};
                "static" === c && (t.style.position = "relative"),
                    (r = u.offset()),
                    (o = pt.css(t, "top")),
                    (l = pt.css(t, "left")),
                    (h = ("absolute" === c || "fixed" === c) && pt.inArray("auto", [o, l]) > -1),
                    h ? ((n = u.position()), (a = n.top), (s = n.left)) : ((a = parseFloat(o) || 0), (s = parseFloat(l) || 0)),
                    pt.isFunction(e) && (e = e.call(t, i, pt.extend({}, r))),
                    null != e.top && (d.top = e.top - r.top + a),
                    null != e.left && (d.left = e.left - r.left + s),
                    "using" in e ? e.using.call(t, d) : u.css(d);
            },
        }),
        pt.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              pt.offset.setOffset(this, t, e);
                          });
                var e,
                    i,
                    n = { top: 0, left: 0 },
                    s = this[0],
                    o = s && s.ownerDocument;
                if (o)
                    return (
                        (e = o.documentElement),
                        pt.contains(e, s)
                            ? ("undefined" != typeof s.getBoundingClientRect && (n = s.getBoundingClientRect()),
                              (i = et(o)),
                              { top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) })
                            : n
                    );
            },
            position: function () {
                if (this[0]) {
                    var t,
                        e,
                        i = { top: 0, left: 0 },
                        n = this[0];
                    return (
                        "fixed" === pt.css(n, "position")
                            ? (e = n.getBoundingClientRect())
                            : ((t = this.offsetParent()), (e = this.offset()), pt.nodeName(t[0], "html") || (i = t.offset()), (i.top += pt.css(t[0], "borderTopWidth", !0)), (i.left += pt.css(t[0], "borderLeftWidth", !0))),
                        { top: e.top - i.top - pt.css(n, "marginTop", !0), left: e.left - i.left - pt.css(n, "marginLeft", !0) }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && !pt.nodeName(t, "html") && "static" === pt.css(t, "position"); ) t = t.offsetParent;
                    return t || pe;
                });
            },
        }),
        pt.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
            var i = /Y/.test(e);
            pt.fn[t] = function (n) {
                return Ft(
                    this,
                    function (t, n, s) {
                        var o = et(t);
                        return void 0 === s ? (o ? (e in o ? o[e] : o.document.documentElement[n]) : t[n]) : void (o ? o.scrollTo(i ? pt(o).scrollLeft() : s, i ? s : pt(o).scrollTop()) : (t[n] = s));
                    },
                    t,
                    n,
                    arguments.length,
                    null
                );
            };
        }),
        pt.each(["top", "left"], function (t, e) {
            pt.cssHooks[e] = I(ut.pixelPosition, function (t, i) {
                if (i) return (i = ge(t, e)), ue.test(i) ? pt(t).position()[e] + "px" : i;
            });
        }),
        pt.each({ Height: "height", Width: "width" }, function (t, e) {
            pt.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (i, n) {
                pt.fn[n] = function (n, s) {
                    var o = arguments.length && (i || "boolean" != typeof n),
                        a = i || (n === !0 || s === !0 ? "margin" : "border");
                    return Ft(
                        this,
                        function (e, i, n) {
                            var s;
                            return pt.isWindow(e)
                                ? e.document.documentElement["client" + t]
                                : 9 === e.nodeType
                                ? ((s = e.documentElement), Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t]))
                                : void 0 === n
                                ? pt.css(e, i, a)
                                : pt.style(e, i, n, a);
                        },
                        e,
                        o ? n : void 0,
                        o,
                        null
                    );
                };
            });
        }),
        pt.fn.extend({
            bind: function (t, e, i) {
                return this.on(t, null, e, i);
            },
            unbind: function (t, e) {
                return this.off(t, null, e);
            },
            delegate: function (t, e, i, n) {
                return this.on(e, t, i, n);
            },
            undelegate: function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
            },
        }),
        (pt.fn.size = function () {
            return this.length;
        }),
        (pt.fn.andSelf = pt.fn.addBack),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return pt;
            });
    var pi = t.jQuery,
        fi = t.$;
    return (
        (pt.noConflict = function (e) {
            return t.$ === pt && (t.$ = fi), e && t.jQuery === pt && (t.jQuery = pi), pt;
        }),
        e || (t.jQuery = t.$ = pt),
        pt
    );
}),
    (function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery);
    })(function (t) {
        var e,
            i = navigator.userAgent,
            n = /iphone/i.test(i),
            s = /chrome/i.test(i),
            o = /android/i.test(i);
        (t.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }),
            t.fn.extend({
                caret: function (t, e) {
                    var i;
                    if (0 !== this.length && !this.is(":hidden"))
                        return "number" == typeof t
                            ? ((e = "number" == typeof e ? e : t),
                              this.each(function () {
                                  this.setSelectionRange ? this.setSelectionRange(t, e) : this.createTextRange && ((i = this.createTextRange()), i.collapse(!0), i.moveEnd("character", e), i.moveStart("character", t), i.select());
                              }))
                            : (this[0].setSelectionRange
                                  ? ((t = this[0].selectionStart), (e = this[0].selectionEnd))
                                  : document.selection && document.selection.createRange && ((i = document.selection.createRange()), (t = 0 - i.duplicate().moveStart("character", -1e5)), (e = t + i.text.length)),
                              { begin: t, end: e });
                },
                unmask: function () {
                    return this.trigger("unmask");
                },
                mask: function (i, a) {
                    var r, l, h, c, u, d, p, f;
                    if (!i && this.length > 0) {
                        r = t(this[0]);
                        var g = r.data(t.mask.dataName);
                        return g ? g() : void 0;
                    }
                    return (
                        (a = t.extend({ autoclear: t.mask.autoclear, placeholder: t.mask.placeholder, completed: null }, a)),
                        (l = t.mask.definitions),
                        (h = []),
                        (c = p = i.length),
                        (u = null),
                        t.each(i.split(""), function (t, e) {
                            "?" == e ? (p--, (c = t)) : l[e] ? (h.push(new RegExp(l[e])), null === u && (u = h.length - 1), t < c && (d = h.length - 1)) : h.push(null);
                        }),
                        this.trigger("unmask").each(function () {
                            function r() {
                                if (a.completed) {
                                    for (var t = u; t <= d; t++) if (h[t] && A[t] === g(t)) return;
                                    a.completed.call(M);
                                }
                            }
                            function g(t) {
                                return t < a.placeholder.length ? a.placeholder.charAt(t) : a.placeholder.charAt(0);
                            }
                            function m(t) {
                                for (; ++t < p && !h[t]; );
                                return t;
                            }
                            function v(t) {
                                for (; --t >= 0 && !h[t]; );
                                return t;
                            }
                            function b(t, e) {
                                var i, n;
                                if (!(t < 0)) {
                                    for (i = t, n = m(e); i < p; i++)
                                        if (h[i]) {
                                            if (!(n < p && h[i].test(A[n]))) break;
                                            (A[i] = A[n]), (A[n] = g(n)), (n = m(n));
                                        }
                                    C(), M.caret(Math.max(u, t));
                                }
                            }
                            function y(t) {
                                var e, i, n, s;
                                for (e = t, i = g(t); e < p; e++)
                                    if (h[e]) {
                                        if (((n = m(e)), (s = A[e]), (A[e] = i), !(n < p && h[n].test(s)))) break;
                                        i = s;
                                    }
                            }
                            function _(t) {
                                var e = M.val(),
                                    i = M.caret();
                                if (f && f.length && f.length > e.length) {
                                    for (P(!0); i.begin > 0 && !h[i.begin - 1]; ) i.begin--;
                                    if (0 === i.begin) for (; i.begin < u && !h[i.begin]; ) i.begin++;
                                    M.caret(i.begin, i.begin);
                                } else {
                                    for (P(!0); i.begin < p && !h[i.begin]; ) i.begin++;
                                    M.caret(i.begin, i.begin);
                                }
                                r();
                            }
                            function T(t) {
                                P(), M.val() != D && M.change();
                            }
                            function w(t) {
                                if (!M.prop("readonly")) {
                                    var e,
                                        i,
                                        s,
                                        o = t.which || t.keyCode;
                                    (f = M.val()),
                                        8 === o || 46 === o || (n && 127 === o)
                                            ? ((e = M.caret()), (i = e.begin), (s = e.end), s - i === 0 && ((i = 46 !== o ? v(i) : (s = m(i - 1))), (s = 46 === o ? m(s) : s)), S(i, s), b(i, s - 1), t.preventDefault())
                                            : 13 === o
                                            ? T.call(this, t)
                                            : 27 === o && (M.val(D), M.caret(0, P()), t.preventDefault());
                                }
                            }
                            function x(e) {
                                if (!M.prop("readonly")) {
                                    var i,
                                        n,
                                        s,
                                        a = e.which || e.keyCode,
                                        l = M.caret();
                                    if (!(e.ctrlKey || e.altKey || e.metaKey || a < 32) && a && 13 !== a) {
                                        if ((l.end - l.begin !== 0 && (S(l.begin, l.end), b(l.begin, l.end - 1)), (i = m(l.begin - 1)), i < p && ((n = String.fromCharCode(a)), h[i].test(n)))) {
                                            if ((y(i), (A[i] = n), C(), (s = m(i)), o)) {
                                                var c = function () {
                                                    t.proxy(t.fn.caret, M, s)();
                                                };
                                                setTimeout(c, 0);
                                            } else M.caret(s);
                                            l.begin <= d && r();
                                        }
                                        e.preventDefault();
                                    }
                                }
                            }
                            function S(t, e) {
                                var i;
                                for (i = t; i < e && i < p; i++) h[i] && (A[i] = g(i));
                            }
                            function C() {
                                M.val(A.join(""));
                            }
                            function P(t) {
                                var e,
                                    i,
                                    n,
                                    s = M.val(),
                                    o = -1;
                                for (e = 0, n = 0; e < p; e++)
                                    if (h[e]) {
                                        for (A[e] = g(e); n++ < s.length; )
                                            if (((i = s.charAt(n - 1)), h[e].test(i))) {
                                                (A[e] = i), (o = e);
                                                break;
                                            }
                                        if (n > s.length) {
                                            S(e + 1, p);
                                            break;
                                        }
                                    } else A[e] === s.charAt(n) && n++, e < c && (o = e);
                                return t ? C() : o + 1 < c ? (a.autoclear || A.join("") === k ? (M.val() && M.val(""), S(0, p)) : C()) : (C(), M.val(M.val().substring(0, o + 1))), c ? e : u;
                            }
                            var M = t(this),
                                A = t.map(i.split(""), function (t, e) {
                                    if ("?" != t) return l[t] ? g(e) : t;
                                }),
                                k = A.join(""),
                                D = M.val();
                            M.data(t.mask.dataName, function () {
                                return t
                                    .map(A, function (t, e) {
                                        return h[e] && t != g(e) ? t : null;
                                    })
                                    .join("");
                            }),
                                M.one("unmask", function () {
                                    M.off(".mask").removeData(t.mask.dataName);
                                })
                                    .on("focus.mask", function () {
                                        if (!M.prop("readonly")) {
                                            clearTimeout(e);
                                            var t;
                                            (D = M.val()),
                                                (t = P()),
                                                (e = setTimeout(function () {
                                                    M.get(0) === document.activeElement && (C(), t == i.replace("?", "").length ? M.caret(0, t) : M.caret(t));
                                                }, 10));
                                        }
                                    })
                                    .on("blur.mask", T)
                                    .on("keydown.mask", w)
                                    .on("keypress.mask", x)
                                    .on("input.mask paste.mask", function () {
                                        M.prop("readonly") ||
                                            setTimeout(function () {
                                                var t = P(!0);
                                                M.caret(t), r();
                                            }, 0);
                                    }),
                                s && o && M.off("input.mask").on("input.mask", _),
                                P();
                        })
                    );
                },
            });
    }),
    (function (t, e, i, n) {
        function s(e, i) {
            (this.settings = null),
                (this.options = t.extend({}, s.Defaults, i)),
                (this.$element = t(e)),
                (this._handlers = {}),
                (this._plugins = {}),
                (this._supress = {}),
                (this._current = null),
                (this._speed = null),
                (this._coordinates = []),
                (this._breakpoint = null),
                (this._width = null),
                (this._items = []),
                (this._clones = []),
                (this._mergers = []),
                (this._widths = []),
                (this._invalidated = {}),
                (this._pipe = []),
                (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
                (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
                t.each(
                    ["onResize", "onThrottledResize"],
                    t.proxy(function (e, i) {
                        this._handlers[i] = t.proxy(this[i], this);
                    }, this)
                ),
                t.each(
                    s.Plugins,
                    t.proxy(function (t, e) {
                        this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
                    }, this)
                ),
                t.each(
                    s.Workers,
                    t.proxy(function (e, i) {
                        this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) });
                    }, this)
                ),
                this.setup(),
                this.initialize();
        }
        (s.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            checkVisibility: !0,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab",
        }),
            (s.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
            (s.Type = { Event: "event", State: "state" }),
            (s.Plugins = {}),
            (s.Workers = [
                {
                    filter: ["width", "settings"],
                    run: function () {
                        this._width = this.$element.width();
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        t.current = this._items && this._items[this.relative(this._current)];
                    },
                },
                {
                    filter: ["items", "settings"],
                    run: function () {
                        this.$stage.children(".cloned").remove();
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        var e = this.settings.margin || "",
                            i = !this.settings.autoWidth,
                            n = this.settings.rtl,
                            s = { width: "auto", "margin-left": n ? e : "", "margin-right": n ? "" : e };
                        !i && this.$stage.children().css(s), (t.css = s);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                            i = null,
                            n = this._items.length,
                            s = !this.settings.autoWidth,
                            o = [];
                        for (t.items = { merge: !1, width: e }; n--; )
                            (i = this._mergers[n]), (i = (this.settings.mergeFit && Math.min(i, this.settings.items)) || i), (t.items.merge = i > 1 || t.items.merge), (o[n] = s ? e * i : this._items[n].width());
                        this._widths = o;
                    },
                },
                {
                    filter: ["items", "settings"],
                    run: function () {
                        var e = [],
                            i = this._items,
                            n = this.settings,
                            s = Math.max(2 * n.items, 4),
                            o = 2 * Math.ceil(i.length / 2),
                            a = n.loop && i.length ? (n.rewind ? s : Math.max(s, o)) : 0,
                            r = "",
                            l = "";
                        for (a /= 2; a > 0; )
                            e.push(this.normalize(e.length / 2, !0)), (r += i[e[e.length - 1]][0].outerHTML), e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), (l = i[e[e.length - 1]][0].outerHTML + l), (a -= 1);
                        (this._clones = e), t(r).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function () {
                        for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, s = 0, o = []; ++i < e; )
                            (n = o[i - 1] || 0), (s = this._widths[this.relative(i)] + this.settings.margin), o.push(n + s * t);
                        this._coordinates = o;
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function () {
                        var t = this.settings.stagePadding,
                            e = this._coordinates,
                            i = { width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t, "padding-left": t || "", "padding-right": t || "" };
                        this.$stage.css(i);
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        var e = this._coordinates.length,
                            i = !this.settings.autoWidth,
                            n = this.$stage.children();
                        if (i && t.items.merge) for (; e--; ) (t.css.width = this._widths[this.relative(e)]), n.eq(e).css(t.css);
                        else i && ((t.css.width = t.items.width), n.css(t.css));
                    },
                },
                {
                    filter: ["items"],
                    run: function () {
                        this._coordinates.length < 1 && this.$stage.removeAttr("style");
                    },
                },
                {
                    filter: ["width", "items", "settings"],
                    run: function (t) {
                        (t.current = t.current ? this.$stage.children().index(t.current) : 0), (t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current))), this.reset(t.current);
                    },
                },
                {
                    filter: ["position"],
                    run: function () {
                        this.animate(this.coordinates(this._current));
                    },
                },
                {
                    filter: ["width", "position", "items", "settings"],
                    run: function () {
                        var t,
                            e,
                            i,
                            n,
                            s = this.settings.rtl ? 1 : -1,
                            o = 2 * this.settings.stagePadding,
                            a = this.coordinates(this.current()) + o,
                            r = a + this.width() * s,
                            l = [];
                        for (i = 0, n = this._coordinates.length; i < n; i++)
                            (t = this._coordinates[i - 1] || 0), (e = Math.abs(this._coordinates[i]) + o * s), ((this.op(t, "<=", a) && this.op(t, ">", r)) || (this.op(e, "<", a) && this.op(e, ">", r))) && l.push(i);
                        this.$stage.children(".active").removeClass("active"),
                            this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"),
                            this.$stage.children(".center").removeClass("center"),
                            this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
                    },
                },
            ]),
            (s.prototype.initializeStage = function () {
                (this.$stage = this.$element.find("." + this.settings.stageClass)),
                    this.$stage.length ||
                        (this.$element.addClass(this.options.loadingClass),
                        (this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
                        this.$element.append(this.$stage.parent()));
            }),
            (s.prototype.initializeItems = function () {
                var e = this.$element.find(".owl-item");
                return e.length
                    ? ((this._items = e.get().map(function (e) {
                          return t(e);
                      })),
                      (this._mergers = this._items.map(function () {
                          return 1;
                      })),
                      void this.refresh())
                    : (this.replace(this.$element.children().not(this.$stage.parent())),
                      this.isVisible() ? this.refresh() : this.invalidate("width"),
                      void this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass));
            }),
            (s.prototype.initialize = function () {
                if ((this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading"))) {
                    var t, e, i;
                    (t = this.$element.find("img")), (e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n), (i = this.$element.children(e).width()), t.length && i <= 0 && this.preloadAutoWidthImages(t);
                }
                this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
            }),
            (s.prototype.isVisible = function () {
                return !this.settings.checkVisibility || this.$element.is(":visible");
            }),
            (s.prototype.setup = function () {
                var e = this.viewport(),
                    i = this.options.responsive,
                    n = -1,
                    s = null;
                i
                    ? (t.each(i, function (t) {
                          t <= e && t > n && (n = Number(t));
                      }),
                      (s = t.extend({}, this.options, i[n])),
                      "function" == typeof s.stagePadding && (s.stagePadding = s.stagePadding()),
                      delete s.responsive,
                      s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n)))
                    : (s = t.extend({}, this.options)),
                    this.trigger("change", { property: { name: "settings", value: s } }),
                    (this._breakpoint = n),
                    (this.settings = s),
                    this.invalidate("settings"),
                    this.trigger("changed", { property: { name: "settings", value: this.settings } });
            }),
            (s.prototype.optionsLogic = function () {
                this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
            }),
            (s.prototype.prepare = function (e) {
                var i = this.trigger("prepare", { content: e });
                return (
                    i.data ||
                        (i.data = t("<" + this.settings.itemElement + "/>")
                            .addClass(this.options.itemClass)
                            .append(e)),
                    this.trigger("prepared", { content: i.data }),
                    i.data
                );
            }),
            (s.prototype.update = function () {
                for (
                    var e = 0,
                        i = this._pipe.length,
                        n = t.proxy(function (t) {
                            return this[t];
                        }, this._invalidated),
                        s = {};
                    e < i;

                )
                    (this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(s), e++;
                (this._invalidated = {}), !this.is("valid") && this.enter("valid");
            }),
            (s.prototype.width = function (t) {
                switch ((t = t || s.Width.Default)) {
                    case s.Width.Inner:
                    case s.Width.Outer:
                        return this._width;
                    default:
                        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
                }
            }),
            (s.prototype.refresh = function () {
                this.enter("refreshing"),
                    this.trigger("refresh"),
                    this.setup(),
                    this.optionsLogic(),
                    this.$element.addClass(this.options.refreshClass),
                    this.update(),
                    this.$element.removeClass(this.options.refreshClass),
                    this.leave("refreshing"),
                    this.trigger("refreshed");
            }),
            (s.prototype.onThrottledResize = function () {
                e.clearTimeout(this.resizeTimer), (this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
            }),
            (s.prototype.onResize = function () {
                return (
                    !!this._items.length &&
                    this._width !== this.$element.width() &&
                    !!this.isVisible() &&
                    (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
                );
            }),
            (s.prototype.registerEventHandlers = function () {
                t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)),
                    this.settings.responsive !== !1 && this.on(e, "resize", this._handlers.onThrottledResize),
                    this.settings.mouseDrag &&
                        (this.$element.addClass(this.options.dragClass),
                        this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)),
                        this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                            return !1;
                        })),
                    this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)));
            }),
            (s.prototype.onDragStart = function (e) {
                var n = null;
                3 !== e.which &&
                    (t.support.transform
                        ? ((n = this.$stage
                              .css("transform")
                              .replace(/.*\(|\)| /g, "")
                              .split(",")),
                          (n = { x: n[16 === n.length ? 12 : 4], y: n[16 === n.length ? 13 : 5] }))
                        : ((n = this.$stage.position()), (n = { x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left, y: n.top })),
                    this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")),
                    this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type),
                    this.speed(0),
                    (this._drag.time = new Date().getTime()),
                    (this._drag.target = t(e.target)),
                    (this._drag.stage.start = n),
                    (this._drag.stage.current = n),
                    (this._drag.pointer = this.pointer(e)),
                    t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)),
                    t(i).one(
                        "mousemove.owl.core touchmove.owl.core",
                        t.proxy(function (e) {
                            var n = this.difference(this._drag.pointer, this.pointer(e));
                            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), (Math.abs(n.x) < Math.abs(n.y) && this.is("valid")) || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                        }, this)
                    ));
            }),
            (s.prototype.onDragMove = function (t) {
                var e = null,
                    i = null,
                    n = null,
                    s = this.difference(this._drag.pointer, this.pointer(t)),
                    o = this.difference(this._drag.stage.start, s);
                this.is("dragging") &&
                    (t.preventDefault(),
                    this.settings.loop
                        ? ((e = this.coordinates(this.minimum())), (i = this.coordinates(this.maximum() + 1) - e), (o.x = ((((o.x - e) % i) + i) % i) + e))
                        : ((e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                          (i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                          (n = this.settings.pullDrag ? (-1 * s.x) / 5 : 0),
                          (o.x = Math.max(Math.min(o.x, e + n), i + n))),
                    (this._drag.stage.current = o),
                    this.animate(o.x));
            }),
            (s.prototype.onDragEnd = function (e) {
                var n = this.difference(this._drag.pointer, this.pointer(e)),
                    s = this._drag.stage.current,
                    o = (n.x > 0) ^ this.settings.rtl ? "left" : "right";
                t(i).off(".owl.core"),
                    this.$element.removeClass(this.options.grabClass),
                    ((0 !== n.x && this.is("dragging")) || !this.is("valid")) &&
                        (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                        this.current(this.closest(s.x, 0 !== n.x ? o : this._drag.direction)),
                        this.invalidate("position"),
                        this.update(),
                        (this._drag.direction = o),
                        (Math.abs(n.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                            this._drag.target.one("click.owl.core", function () {
                                return !1;
                            })),
                    this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
            }),
            (s.prototype.closest = function (e, i) {
                var s = -1,
                    o = 30,
                    a = this.width(),
                    r = this.coordinates();
                return (
                    this.settings.freeDrag ||
                        t.each(
                            r,
                            t.proxy(function (t, l) {
                                return (
                                    "left" === i && e > l - o && e < l + o
                                        ? (s = t)
                                        : "right" === i && e > l - a - o && e < l - a + o
                                        ? (s = t + 1)
                                        : this.op(e, "<", l) && this.op(e, ">", r[t + 1] !== n ? r[t + 1] : l - a) && (s = "left" === i ? t + 1 : t),
                                    s === -1
                                );
                            }, this)
                        ),
                    this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? (s = e = this.minimum()) : this.op(e, "<", r[this.maximum()]) && (s = e = this.maximum())),
                    s
                );
            }),
            (s.prototype.animate = function (e) {
                var i = this.speed() > 0;
                this.is("animating") && this.onTransitionEnd(),
                    i && (this.enter("animating"), this.trigger("translate")),
                    t.support.transform3d && t.support.transition
                        ? this.$stage.css({ transform: "translate3d(" + e + "px,0px,0px)", transition: this.speed() / 1e3 + "s" })
                        : i
                        ? this.$stage.animate({ left: e + "px" }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this))
                        : this.$stage.css({ left: e + "px" });
            }),
            (s.prototype.is = function (t) {
                return this._states.current[t] && this._states.current[t] > 0;
            }),
            (s.prototype.current = function (t) {
                if (t === n) return this._current;
                if (0 === this._items.length) return n;
                if (((t = this.normalize(t)), this._current !== t)) {
                    var e = this.trigger("change", { property: { name: "position", value: t } });
                    e.data !== n && (t = this.normalize(e.data)), (this._current = t), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
                }
                return this._current;
            }),
            (s.prototype.invalidate = function (e) {
                return (
                    "string" === t.type(e) && ((this._invalidated[e] = !0), this.is("valid") && this.leave("valid")),
                    t.map(this._invalidated, function (t, e) {
                        return e;
                    })
                );
            }),
            (s.prototype.reset = function (t) {
                (t = this.normalize(t)), t !== n && ((this._speed = 0), (this._current = t), this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]));
            }),
            (s.prototype.normalize = function (t, e) {
                var i = this._items.length,
                    s = e ? 0 : this._clones.length;
                return !this.isNumeric(t) || i < 1 ? (t = n) : (t < 0 || t >= i + s) && (t = ((((t - s / 2) % i) + i) % i) + s / 2), t;
            }),
            (s.prototype.relative = function (t) {
                return (t -= this._clones.length / 2), this.normalize(t, !0);
            }),
            (s.prototype.maximum = function (t) {
                var e,
                    i,
                    n,
                    s = this.settings,
                    o = this._coordinates.length;
                if (s.loop) o = this._clones.length / 2 + this._items.length - 1;
                else if (s.autoWidth || s.merge) {
                    if ((e = this._items.length)) for (i = this._items[--e].width(), n = this.$element.width(); e-- && ((i += this._items[e].width() + this.settings.margin), !(i > n)); );
                    o = e + 1;
                } else o = s.center ? this._items.length - 1 : this._items.length - s.items;
                return t && (o -= this._clones.length / 2), Math.max(o, 0);
            }),
            (s.prototype.minimum = function (t) {
                return t ? 0 : this._clones.length / 2;
            }),
            (s.prototype.items = function (t) {
                return t === n ? this._items.slice() : ((t = this.normalize(t, !0)), this._items[t]);
            }),
            (s.prototype.mergers = function (t) {
                return t === n ? this._mergers.slice() : ((t = this.normalize(t, !0)), this._mergers[t]);
            }),
            (s.prototype.clones = function (e) {
                var i = this._clones.length / 2,
                    s = i + this._items.length,
                    o = function (t) {
                        return t % 2 === 0 ? s + t / 2 : i - (t + 1) / 2;
                    };
                return e === n
                    ? t.map(this._clones, function (t, e) {
                          return o(e);
                      })
                    : t.map(this._clones, function (t, i) {
                          return t === e ? o(i) : null;
                      });
            }),
            (s.prototype.speed = function (t) {
                return t !== n && (this._speed = t), this._speed;
            }),
            (s.prototype.coordinates = function (e) {
                var i,
                    s = 1,
                    o = e - 1;
                return e === n
                    ? t.map(
                          this._coordinates,
                          t.proxy(function (t, e) {
                              return this.coordinates(e);
                          }, this)
                      )
                    : (this.settings.center ? (this.settings.rtl && ((s = -1), (o = e + 1)), (i = this._coordinates[e]), (i += ((this.width() - i + (this._coordinates[o] || 0)) / 2) * s)) : (i = this._coordinates[o] || 0),
                      (i = Math.ceil(i)));
            }),
            (s.prototype.duration = function (t, e, i) {
                return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed);
            }),
            (s.prototype.to = function (t, e) {
                var i = this.current(),
                    n = null,
                    s = t - this.relative(i),
                    o = (s > 0) - (s < 0),
                    a = this._items.length,
                    r = this.minimum(),
                    l = this.maximum();
                this.settings.loop
                    ? (!this.settings.rewind && Math.abs(s) > a / 2 && (s += o * -1 * a), (t = i + s), (n = ((((t - r) % a) + a) % a) + r), n !== t && n - s <= l && n - s > 0 && ((i = n - s), (t = n), this.reset(i)))
                    : this.settings.rewind
                    ? ((l += 1), (t = ((t % l) + l) % l))
                    : (t = Math.max(r, Math.min(l, t))),
                    this.speed(this.duration(i, t, e)),
                    this.current(t),
                    this.isVisible() && this.update();
            }),
            (s.prototype.next = function (t) {
                (t = t || !1), this.to(this.relative(this.current()) + 1, t);
            }),
            (s.prototype.prev = function (t) {
                (t = t || !1), this.to(this.relative(this.current()) - 1, t);
            }),
            (s.prototype.onTransitionEnd = function (t) {
                return (t === n || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"));
            }),
            (s.prototype.viewport = function () {
                var n;
                return (
                    this.options.responsiveBaseElement !== e
                        ? (n = t(this.options.responsiveBaseElement).width())
                        : e.innerWidth
                        ? (n = e.innerWidth)
                        : i.documentElement && i.documentElement.clientWidth
                        ? (n = i.documentElement.clientWidth)
                        : console.warn("Can not detect viewport width."),
                    n
                );
            }),
            (s.prototype.replace = function (e) {
                this.$stage.empty(),
                    (this._items = []),
                    e && (e = e instanceof jQuery ? e : t(e)),
                    this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)),
                    e
                        .filter(function () {
                            return 1 === this.nodeType;
                        })
                        .each(
                            t.proxy(function (t, e) {
                                (e = this.prepare(e)), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                            }, this)
                        ),
                    this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                    this.invalidate("items");
            }),
            (s.prototype.add = function (e, i) {
                var s = this.relative(this._current);
                (i = i === n ? this._items.length : this.normalize(i, !0)),
                    (e = e instanceof jQuery ? e : t(e)),
                    this.trigger("add", { content: e, position: i }),
                    (e = this.prepare(e)),
                    0 === this._items.length || i === this._items.length
                        ? (0 === this._items.length && this.$stage.append(e),
                          0 !== this._items.length && this._items[i - 1].after(e),
                          this._items.push(e),
                          this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                        : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                    this._items[s] && this.reset(this._items[s].index()),
                    this.invalidate("items"),
                    this.trigger("added", { content: e, position: i });
            }),
            (s.prototype.remove = function (t) {
                (t = this.normalize(t, !0)),
                    t !== n &&
                        (this.trigger("remove", { content: this._items[t], position: t }),
                        this._items[t].remove(),
                        this._items.splice(t, 1),
                        this._mergers.splice(t, 1),
                        this.invalidate("items"),
                        this.trigger("removed", { content: null, position: t }));
            }),
            (s.prototype.preloadAutoWidthImages = function (e) {
                e.each(
                    t.proxy(function (e, i) {
                        this.enter("pre-loading"),
                            (i = t(i)),
                            t(new Image())
                                .one(
                                    "load",
                                    t.proxy(function (t) {
                                        i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                                    }, this)
                                )
                                .attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"));
                    }, this)
                );
            }),
            (s.prototype.destroy = function () {
                this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), this.settings.responsive !== !1 && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
                for (var n in this._plugins) this._plugins[n].destroy();
                this.$stage.children(".cloned").remove(),
                    this.$stage.unwrap(),
                    this.$stage.children().contents().unwrap(),
                    this.$stage.children().unwrap(),
                    this.$stage.remove(),
                    this.$element
                        .removeClass(this.options.refreshClass)
                        .removeClass(this.options.loadingClass)
                        .removeClass(this.options.loadedClass)
                        .removeClass(this.options.rtlClass)
                        .removeClass(this.options.dragClass)
                        .removeClass(this.options.grabClass)
                        .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                        .removeData("owl.carousel");
            }),
            (s.prototype.op = function (t, e, i) {
                var n = this.settings.rtl;
                switch (e) {
                    case "<":
                        return n ? t > i : t < i;
                    case ">":
                        return n ? t < i : t > i;
                    case ">=":
                        return n ? t <= i : t >= i;
                    case "<=":
                        return n ? t >= i : t <= i;
                }
            }),
            (s.prototype.on = function (t, e, i, n) {
                t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i);
            }),
            (s.prototype.off = function (t, e, i, n) {
                t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i);
            }),
            (s.prototype.trigger = function (e, i, n, o, a) {
                var r = { item: { count: this._items.length, index: this.current() } },
                    l = t.camelCase(
                        t
                            .grep(["on", e, n], function (t) {
                                return t;
                            })
                            .join("-")
                            .toLowerCase()
                    ),
                    h = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({ relatedTarget: this }, r, i));
                return (
                    this._supress[e] ||
                        (t.each(this._plugins, function (t, e) {
                            e.onTrigger && e.onTrigger(h);
                        }),
                        this.register({ type: s.Type.Event, name: e }),
                        this.$element.trigger(h),
                        this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, h)),
                    h
                );
            }),
            (s.prototype.enter = function (e) {
                t.each(
                    [e].concat(this._states.tags[e] || []),
                    t.proxy(function (t, e) {
                        this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++;
                    }, this)
                );
            }),
            (s.prototype.leave = function (e) {
                t.each(
                    [e].concat(this._states.tags[e] || []),
                    t.proxy(function (t, e) {
                        this._states.current[e]--;
                    }, this)
                );
            }),
            (s.prototype.register = function (e) {
                if (e.type === s.Type.Event) {
                    if ((t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl)) {
                        var i = t.event.special[e.name]._default;
                        (t.event.special[e.name]._default = function (t) {
                            return !i || !i.apply || (t.namespace && t.namespace.indexOf("owl") !== -1) ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments);
                        }),
                            (t.event.special[e.name].owl = !0);
                    }
                } else
                    e.type === s.Type.State &&
                        (this._states.tags[e.name] ? (this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags)) : (this._states.tags[e.name] = e.tags),
                        (this._states.tags[e.name] = t.grep(
                            this._states.tags[e.name],
                            t.proxy(function (i, n) {
                                return t.inArray(i, this._states.tags[e.name]) === n;
                            }, this)
                        )));
            }),
            (s.prototype.suppress = function (e) {
                t.each(
                    e,
                    t.proxy(function (t, e) {
                        this._supress[e] = !0;
                    }, this)
                );
            }),
            (s.prototype.release = function (e) {
                t.each(
                    e,
                    t.proxy(function (t, e) {
                        delete this._supress[e];
                    }, this)
                );
            }),
            (s.prototype.pointer = function (t) {
                var i = { x: null, y: null };
                return (
                    (t = t.originalEvent || t || e.event),
                    (t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t),
                    t.pageX ? ((i.x = t.pageX), (i.y = t.pageY)) : ((i.x = t.clientX), (i.y = t.clientY)),
                    i
                );
            }),
            (s.prototype.isNumeric = function (t) {
                return !isNaN(parseFloat(t));
            }),
            (s.prototype.difference = function (t, e) {
                return { x: t.x - e.x, y: t.y - e.y };
            }),
            (t.fn.owlCarousel = function (e) {
                var i = Array.prototype.slice.call(arguments, 1);
                return this.each(function () {
                    var n = t(this),
                        o = n.data("owl.carousel");
                    o ||
                        ((o = new s(this, "object" == typeof e && e)),
                        n.data("owl.carousel", o),
                        t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, i) {
                            o.register({ type: s.Type.Event, name: i }),
                                o.$element.on(
                                    i + ".owl.carousel.core",
                                    t.proxy(function (t) {
                                        t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]));
                                    }, o)
                                );
                        })),
                        "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i);
                });
            }),
            (t.fn.owlCarousel.Constructor = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, n) {
        var s = function (e) {
            (this._core = e),
                (this._interval = null),
                (this._visible = null),
                (this._handlers = {
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoRefresh && this.watch();
                    }, this),
                }),
                (this._core.options = t.extend({}, s.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (s.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (s.prototype.watch = function () {
                this._interval || ((this._visible = this._core.isVisible()), (this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
            }),
            (s.prototype.refresh = function () {
                this._core.isVisible() !== this._visible && ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
            }),
            (s.prototype.destroy = function () {
                var t, i;
                e.clearInterval(this._interval);
                for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, n) {
        var s = function (e) {
            (this._core = e),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
                        if (e.namespace && this._core.settings && this._core.settings.lazyLoad && ((e.property && "position" == e.property.name) || "initialized" == e.type))
                            for (
                                var i = this._core.settings,
                                    s = (i.center && Math.ceil(i.items / 2)) || i.items,
                                    o = (i.center && s * -1) || 0,
                                    a = (e.property && e.property.value !== n ? e.property.value : this._core.current()) + o,
                                    r = this._core.clones().length,
                                    l = t.proxy(function (t, e) {
                                        this.load(e);
                                    }, this);
                                o++ < s;

                            )
                                this.load(r / 2 + this._core.relative(a)), r && t.each(this._core.clones(this._core.relative(a)), l), a++;
                    }, this),
                }),
                (this._core.options = t.extend({}, s.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (s.Defaults = { lazyLoad: !1 }),
            (s.prototype.load = function (i) {
                var n = this._core.$stage.children().eq(i),
                    s = n && n.find(".owl-lazy");
                !s ||
                    t.inArray(n.get(0), this._loaded) > -1 ||
                    (s.each(
                        t.proxy(function (i, n) {
                            var s,
                                o = t(n),
                                a = (e.devicePixelRatio > 1 && o.attr("data-src-retina")) || o.attr("data-src") || o.attr("data-srcset");
                            this._core.trigger("load", { element: o, url: a }, "lazy"),
                                o.is("img")
                                    ? o
                                          .one(
                                              "load.owl.lazy",
                                              t.proxy(function () {
                                                  o.css("opacity", 1), this._core.trigger("loaded", { element: o, url: a }, "lazy");
                                              }, this)
                                          )
                                          .attr("src", a)
                                    : o.is("source")
                                    ? o
                                          .one(
                                              "load.owl.lazy",
                                              t.proxy(function () {
                                                  this._core.trigger("loaded", { element: o, url: a }, "lazy");
                                              }, this)
                                          )
                                          .attr("srcset", a)
                                    : ((s = new Image()),
                                      (s.onload = t.proxy(function () {
                                          o.css({ "background-image": 'url("' + a + '")', opacity: "1" }), this._core.trigger("loaded", { element: o, url: a }, "lazy");
                                      }, this)),
                                      (s.src = a));
                        }, this)
                    ),
                    this._loaded.push(n.get(0)));
            }),
            (s.prototype.destroy = function () {
                var t, e;
                for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Lazy = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, n) {
        var s = function (i) {
            (this._core = i),
                (this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && this.update();
                    }, this),
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && "position" === t.property.name && (console.log("update called"), this.update());
                    }, this),
                    "loaded.owl.lazy": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                    }, this),
                }),
                (this._core.options = t.extend({}, s.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                (this._intervalId = null);
            var n = this;
            t(e).on("load", function () {
                n._core.settings.autoHeight && n.update();
            }),
                t(e).resize(function () {
                    n._core.settings.autoHeight &&
                        (null != n._intervalId && clearTimeout(n._intervalId),
                        (n._intervalId = setTimeout(function () {
                            n.update();
                        }, 250)));
                });
        };
        (s.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (s.prototype.update = function () {
                var e = this._core._current,
                    i = e + this._core.settings.items,
                    n = this._core.$stage.children().toArray().slice(e, i),
                    s = [],
                    o = 0;
                t.each(n, function (e, i) {
                    s.push(t(i).height());
                }),
                    (o = Math.max.apply(null, s)),
                    this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass);
            }),
            (s.prototype.destroy = function () {
                var t, e;
                for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, n) {
        var s = function (e) {
            (this._core = e),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                    }, this),
                    "resize.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault();
                    }, this),
                    "refreshed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                    }, this),
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && "position" === t.property.name && this._playing && this.stop();
                    }, this),
                    "prepared.owl.carousel": t.proxy(function (e) {
                        if (e.namespace) {
                            var i = t(e.content).find(".owl-video");
                            i.length && (i.css("display", "none"), this.fetch(i, t(e.content)));
                        }
                    }, this),
                }),
                (this._core.options = t.extend({}, s.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                    "click.owl.video",
                    ".owl-video-play-icon",
                    t.proxy(function (t) {
                        this.play(t);
                    }, this)
                );
        };
        (s.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (s.prototype.fetch = function (t, e) {
                var i = (function () {
                        return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube";
                    })(),
                    n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                    s = t.attr("data-width") || this._core.settings.videoWidth,
                    o = t.attr("data-height") || this._core.settings.videoHeight,
                    a = t.attr("href");
                if (!a) throw new Error("Missing video URL.");
                if (
                    ((n = a.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/)),
                    n[3].indexOf("youtu") > -1)
                )
                    i = "youtube";
                else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
                else {
                    if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                    i = "vzaar";
                }
                (n = n[6]), (this._videos[a] = { type: i, id: n, width: s, height: o }), e.attr("data-video", a), this.thumbnail(t, this._videos[a]);
            }),
            (s.prototype.thumbnail = function (e, i) {
                var n,
                    s,
                    o,
                    a = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                    r = e.find("img"),
                    l = "src",
                    h = "",
                    c = this._core.settings,
                    u = function (t) {
                        (s = '<div class="owl-video-play-icon"></div>'),
                            (n = c.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>'),
                            e.after(n),
                            e.after(s);
                    };
                return (
                    e.wrap('<div class="owl-video-wrapper"' + a + "></div>"),
                    this._core.settings.lazyLoad && ((l = "data-src"), (h = "owl-lazy")),
                    r.length
                        ? (u(r.attr(l)), r.remove(), !1)
                        : void ("youtube" === i.type
                              ? ((o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"), u(o))
                              : "vimeo" === i.type
                              ? t.ajax({
                                    type: "GET",
                                    url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                                    jsonp: "callback",
                                    dataType: "jsonp",
                                    success: function (t) {
                                        (o = t[0].thumbnail_large), u(o);
                                    },
                                })
                              : "vzaar" === i.type &&
                                t.ajax({
                                    type: "GET",
                                    url: "//vzaar.com/api/videos/" + i.id + ".json",
                                    jsonp: "callback",
                                    dataType: "jsonp",
                                    success: function (t) {
                                        (o = t.framegrab_url), u(o);
                                    },
                                }))
                );
            }),
            (s.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    (this._playing = null),
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video");
            }),
            (s.prototype.play = function (e) {
                var i,
                    n = t(e.target),
                    s = n.closest("." + this._core.settings.itemClass),
                    o = this._videos[s.attr("data-video")],
                    a = o.width || "100%",
                    r = o.height || this._core.$stage.height();
                this._playing ||
                    (this._core.enter("playing"),
                    this._core.trigger("play", null, "video"),
                    (s = this._core.items(this._core.relative(s.index()))),
                    this._core.reset(s.index()),
                    "youtube" === o.type
                        ? (i = '<iframe width="' + a + '" height="' + r + '" src="//www.youtube.com/embed/' + o.id + "?autoplay=1&rel=0&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>')
                        : "vimeo" === o.type
                        ? (i = '<iframe src="//player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + a + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
                        : "vzaar" === o.type && (i = '<iframe frameborder="0"height="' + r + '"width="' + a + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + o.id + '/player?autoplay=true"></iframe>'),
                    t('<div class="owl-video-frame">' + i + "</div>").insertAfter(s.find(".owl-video")),
                    (this._playing = s.addClass("owl-video-playing")));
            }),
            (s.prototype.isInFullScreen = function () {
                var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
                return e && t(e).parent().hasClass("owl-video-frame");
            }),
            (s.prototype.destroy = function () {
                var t, e;
                this._core.$element.off("click.owl.video");
                for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Video = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, n) {
        var s = function (e) {
            (this.core = e),
                (this.core.options = t.extend({}, s.Defaults, this.core.options)),
                (this.swapping = !0),
                (this.previous = n),
                (this.next = n),
                (this.handlers = {
                    "change.owl.carousel": t.proxy(function (t) {
                        t.namespace && "position" == t.property.name && ((this.previous = this.core.current()), (this.next = t.property.value));
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                        t.namespace && (this.swapping = "translated" == t.type);
                    }, this),
                    "translate.owl.carousel": t.proxy(function (t) {
                        t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        };
        (s.Defaults = { animateOut: !1, animateIn: !1 }),
            (s.prototype.swap = function () {
                if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                    this.core.speed(0);
                    var e,
                        i = t.proxy(this.clear, this),
                        n = this.core.$stage.children().eq(this.previous),
                        s = this.core.$stage.children().eq(this.next),
                        o = this.core.settings.animateIn,
                        a = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                        (a &&
                            ((e = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                            n
                                .one(t.support.animation.end, i)
                                .css({ left: e + "px" })
                                .addClass("animated owl-animated-out")
                                .addClass(a)),
                        o && s.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o));
                }
            }),
            (s.prototype.clear = function (e) {
                t(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
            }),
            (s.prototype.destroy = function () {
                var t, e;
                for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Animate = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, n) {
        var s = function (e) {
            (this._core = e),
                (this._call = null),
                (this._time = 0),
                (this._timeout = 0),
                (this._paused = !0),
                (this._handlers = {
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && "settings" === t.property.name ? (this._core.settings.autoplay ? this.play() : this.stop()) : t.namespace && "position" === t.property.name && this._paused && (this._time = 0);
                    }, this),
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.autoplay && this.play();
                    }, this),
                    "play.owl.autoplay": t.proxy(function (t, e, i) {
                        t.namespace && this.play(e, i);
                    }, this),
                    "stop.owl.autoplay": t.proxy(function (t) {
                        t.namespace && this.stop();
                    }, this),
                    "mouseover.owl.autoplay": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "mouseleave.owl.autoplay": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                    }, this),
                    "touchstart.owl.core": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "touchend.owl.core": t.proxy(function () {
                        this._core.settings.autoplayHoverPause && this.play();
                    }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = t.extend({}, s.Defaults, this._core.options));
        };
        (s.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
            (s.prototype._next = function (n) {
                (this._call = e.setTimeout(t.proxy(this._next, this, n), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read())),
                    this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed);
            }),
            (s.prototype.read = function () {
                return new Date().getTime() - this._time;
            }),
            (s.prototype.play = function (i, n) {
                var s;
                this._core.is("rotating") || this._core.enter("rotating"),
                    (i = i || this._core.settings.autoplayTimeout),
                    (s = Math.min(this._time % (this._timeout || i), i)),
                    this._paused ? ((this._time = this.read()), (this._paused = !1)) : e.clearTimeout(this._call),
                    (this._time += (this.read() % i) - s),
                    (this._timeout = i),
                    (this._call = e.setTimeout(t.proxy(this._next, this, n), i - s));
            }),
            (s.prototype.stop = function () {
                this._core.is("rotating") && ((this._time = 0), (this._paused = !0), e.clearTimeout(this._call), this._core.leave("rotating"));
            }),
            (s.prototype.pause = function () {
                this._core.is("rotating") && !this._paused && ((this._time = this.read()), (this._paused = !0), e.clearTimeout(this._call));
            }),
            (s.prototype.destroy = function () {
                var t, e;
                this.stop();
                for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.autoplay = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, n) {
        "use strict";
        var s = function (e) {
            (this._core = e),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                (this._handlers = {
                    "prepared.owl.carousel": t.proxy(function (e) {
                        e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                    }, this),
                    "added.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop());
                    }, this),
                    "remove.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1);
                    }, this),
                    "changed.owl.carousel": t.proxy(function (t) {
                        t.namespace && "position" == t.property.name && this.draw();
                    }, this),
                    "initialized.owl.carousel": t.proxy(function (t) {
                        t.namespace &&
                            !this._initialized &&
                            (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                    }, this),
                    "refreshed.owl.carousel": t.proxy(function (t) {
                        t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                    }, this),
                }),
                (this._core.options = t.extend({}, s.Defaults, this._core.options)),
                this.$element.on(this._handlers);
        };
        (s.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
        }),
            (s.prototype.initialize = function () {
                var e,
                    i = this._core.settings;
                (this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                    (this._controls.$previous = t("<" + i.navElement + ">")
                        .addClass(i.navClass[0])
                        .html(i.navText[0])
                        .prependTo(this._controls.$relative)
                        .on(
                            "click",
                            t.proxy(function (t) {
                                this.prev(i.navSpeed);
                            }, this)
                        )),
                    (this._controls.$next = t("<" + i.navElement + ">")
                        .addClass(i.navClass[1])
                        .html(i.navText[1])
                        .appendTo(this._controls.$relative)
                        .on(
                            "click",
                            t.proxy(function (t) {
                                this.next(i.navSpeed);
                            }, this)
                        )),
                    i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]),
                    (this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled")),
                    this._controls.$absolute.on(
                        "click",
                        "button",
                        t.proxy(function (e) {
                            var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                            e.preventDefault(), this.to(n, i.dotsSpeed);
                        }, this)
                    );
                for (e in this._overrides) this._core[e] = t.proxy(this[e], this);
            }),
            (s.prototype.destroy = function () {
                var t, e, i, n, s;
                s = this._core.settings;
                for (t in this._handlers) this.$element.off(t, this._handlers[t]);
                for (e in this._controls) "$relative" === e && s.navContainer ? this._controls[e].html("") : this._controls[e].remove();
                for (n in this.overides) this._core[n] = this._overrides[n];
                for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null);
            }),
            (s.prototype.update = function () {
                var t,
                    e,
                    i,
                    n = this._core.clones().length / 2,
                    s = n + this._core.items().length,
                    o = this._core.maximum(!0),
                    a = this._core.settings,
                    r = a.center || a.autoWidth || a.dotsData ? 1 : a.dotsEach || a.items;
                if (("page" !== a.slideBy && (a.slideBy = Math.min(a.slideBy, a.items)), a.dots || "page" == a.slideBy))
                    for (this._pages = [], t = n, e = 0, i = 0; t < s; t++) {
                        if (e >= r || 0 === e) {
                            if ((this._pages.push({ start: Math.min(o, t - n), end: t - n + r - 1 }), Math.min(o, t - n) === o)) break;
                            (e = 0), ++i;
                        }
                        e += this._core.mergers(this._core.relative(t));
                    }
            }),
            (s.prototype.draw = function () {
                var e,
                    i = this._core.settings,
                    n = this._core.items().length <= i.items,
                    s = this._core.relative(this._core.current()),
                    o = i.loop || i.rewind;
                this._controls.$relative.toggleClass("disabled", !i.nav || n),
                    i.nav && (this._controls.$previous.toggleClass("disabled", !o && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && s >= this._core.maximum(!0))),
                    this._controls.$absolute.toggleClass("disabled", !i.dots || n),
                    i.dots &&
                        ((e = this._pages.length - this._controls.$absolute.children().length),
                        i.dotsData && 0 !== e
                            ? this._controls.$absolute.html(this._templates.join(""))
                            : e > 0
                            ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0]))
                            : e < 0 && this._controls.$absolute.children().slice(e).remove(),
                        this._controls.$absolute.find(".active").removeClass("active"),
                        this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"));
            }),
            (s.prototype.onTrigger = function (e) {
                var i = this._core.settings;
                e.page = { index: t.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items) };
            }),
            (s.prototype.current = function () {
                var e = this._core.relative(this._core.current());
                return t
                    .grep(
                        this._pages,
                        t.proxy(function (t, i) {
                            return t.start <= e && t.end >= e;
                        }, this)
                    )
                    .pop();
            }),
            (s.prototype.getPosition = function (e) {
                var i,
                    n,
                    s = this._core.settings;
                return (
                    "page" == s.slideBy
                        ? ((i = t.inArray(this.current(), this._pages)), (n = this._pages.length), e ? ++i : --i, (i = this._pages[((i % n) + n) % n].start))
                        : ((i = this._core.relative(this._core.current())), (n = this._core.items().length), e ? (i += s.slideBy) : (i -= s.slideBy)),
                    i
                );
            }),
            (s.prototype.next = function (e) {
                t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
            }),
            (s.prototype.prev = function (e) {
                t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
            }),
            (s.prototype.to = function (e, i, n) {
                var s;
                !n && this._pages.length ? ((s = this._pages.length), t.proxy(this._overrides.to, this._core)(this._pages[((e % s) + s) % s].start, i)) : t.proxy(this._overrides.to, this._core)(e, i);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Navigation = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, n) {
        "use strict";
        var s = function (i) {
            (this._core = i),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.owl.carousel": t.proxy(function (i) {
                        i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation");
                    }, this),
                    "prepared.owl.carousel": t.proxy(function (e) {
                        if (e.namespace) {
                            var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                            if (!i) return;
                            this._hashes[i] = e.content;
                        }
                    }, this),
                    "changed.owl.carousel": t.proxy(function (i) {
                        if (i.namespace && "position" === i.property.name) {
                            var n = this._core.items(this._core.relative(this._core.current())),
                                s = t
                                    .map(this._hashes, function (t, e) {
                                        return t === n ? e : null;
                                    })
                                    .join();
                            if (!s || e.location.hash.slice(1) === s) return;
                            e.location.hash = s;
                        }
                    }, this),
                }),
                (this._core.options = t.extend({}, s.Defaults, this._core.options)),
                this.$element.on(this._handlers),
                t(e).on(
                    "hashchange.owl.navigation",
                    t.proxy(function (t) {
                        var i = e.location.hash.substring(1),
                            s = this._core.$stage.children(),
                            o = this._hashes[i] && s.index(this._hashes[i]);
                        o !== n && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0);
                    }, this)
                );
        };
        (s.Defaults = { URLhashListener: !1 }),
            (s.prototype.destroy = function () {
                var i, n;
                t(e).off("hashchange.owl.navigation");
                for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
                for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null);
            }),
            (t.fn.owlCarousel.Constructor.Plugins.Hash = s);
    })(window.Zepto || window.jQuery, window, document),
    (function (t, e, i, n) {
        function s(e, i) {
            var s = !1,
                o = e.charAt(0).toUpperCase() + e.slice(1);
            return (
                t.each((e + " " + r.join(o + " ") + o).split(" "), function (t, e) {
                    if (a[e] !== n) return (s = !i || e), !1;
                }),
                s
            );
        }
        function o(t) {
            return s(t, !0);
        }
        var a = t("<support>").get(0).style,
            r = "Webkit Moz O ms".split(" "),
            l = {
                transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
            },
            h = {
                csstransforms: function () {
                    return !!s("transform");
                },
                csstransforms3d: function () {
                    return !!s("perspective");
                },
                csstransitions: function () {
                    return !!s("transition");
                },
                cssanimations: function () {
                    return !!s("animation");
                },
            };
        h.csstransitions() && ((t.support.transition = new String(o("transition"))), (t.support.transition.end = l.transition.end[t.support.transition])),
            h.cssanimations() && ((t.support.animation = new String(o("animation"))), (t.support.animation.end = l.animation.end[t.support.animation])),
            h.csstransforms() && ((t.support.transform = new String(o("transform"))), (t.support.transform3d = h.csstransforms3d()));
    })(window.Zepto || window.jQuery, window, document),
    (function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
    })(function (t) {
        function e(t) {
            for (var e = t.css("visibility"); "inherit" === e; ) (t = t.parent()), (e = t.css("visibility"));
            return "hidden" !== e;
        }
        function i(t) {
            for (var e, i; t.length && t[0] !== document; ) {
                if (((e = t.css("position")), ("absolute" === e || "relative" === e || "fixed" === e) && ((i = parseInt(t.css("zIndex"), 10)), !isNaN(i) && 0 !== i))) return i;
                t = t.parent();
            }
            return 0;
        }
        function n() {
            (this._curInst = null),
                (this._keyEvent = !1),
                (this._disabledInputs = []),
                (this._datepickerShowing = !1),
                (this._inDialog = !1),
                (this._mainDivId = "ui-datepicker-div"),
                (this._inlineClass = "ui-datepicker-inline"),
                (this._appendClass = "ui-datepicker-append"),
                (this._triggerClass = "ui-datepicker-trigger"),
                (this._dialogClass = "ui-datepicker-dialog"),
                (this._disableClass = "ui-datepicker-disabled"),
                (this._unselectableClass = "ui-datepicker-unselectable"),
                (this._currentClass = "ui-datepicker-current-day"),
                (this._dayOverClass = "ui-datepicker-days-cell-over"),
                (this.regional = []),
                (this.regional[""] = {
                    closeText: "Done",
                    prevText: "Prev",
                    nextText: "Next",
                    currentText: "Today",
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    weekHeader: "Wk",
                    dateFormat: "mm/dd/yy",
                    firstDay: 0,
                    isRTL: !1,
                    showMonthAfterYear: !1,
                    yearSuffix: "",
                }),
                (this._defaults = {
                    showOn: "focus",
                    showAnim: "fadeIn",
                    showOptions: {},
                    defaultDate: null,
                    appendText: "",
                    buttonText: "...",
                    buttonImage: "",
                    buttonImageOnly: !1,
                    hideIfNoPrevNext: !1,
                    navigationAsDateFormat: !1,
                    gotoCurrent: !1,
                    changeMonth: !1,
                    changeYear: !1,
                    yearRange: "c-10:c+10",
                    showOtherMonths: !1,
                    selectOtherMonths: !1,
                    showWeek: !1,
                    calculateWeek: this.iso8601Week,
                    shortYearCutoff: "+10",
                    minDate: null,
                    maxDate: null,
                    duration: "fast",
                    beforeShowDay: null,
                    beforeShow: null,
                    onSelect: null,
                    onChangeMonthYear: null,
                    onClose: null,
                    numberOfMonths: 1,
                    showCurrentAtPos: 0,
                    stepMonths: 1,
                    stepBigMonths: 12,
                    altField: "",
                    altFormat: "",
                    constrainInput: !0,
                    showButtonPanel: !1,
                    autoSize: !1,
                    disabled: !1,
                }),
                t.extend(this._defaults, this.regional[""]),
                (this.regional.en = t.extend(!0, {}, this.regional[""])),
                (this.regional["en-US"] = t.extend(!0, {}, this.regional.en)),
                (this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")));
        }
        function s(e) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return e
                .on("mouseout", i, function () {
                    t(this).removeClass("ui-state-hover"),
                        this.className.indexOf("ui-datepicker-prev") !== -1 && t(this).removeClass("ui-datepicker-prev-hover"),
                        this.className.indexOf("ui-datepicker-next") !== -1 && t(this).removeClass("ui-datepicker-next-hover");
                })
                .on("mouseover", i, o);
        }
        function o() {
            t.datepicker._isDisabledDatepicker(p.inline ? p.dpDiv.parent()[0] : p.input[0]) ||
                (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
                t(this).addClass("ui-state-hover"),
                this.className.indexOf("ui-datepicker-prev") !== -1 && t(this).addClass("ui-datepicker-prev-hover"),
                this.className.indexOf("ui-datepicker-next") !== -1 && t(this).addClass("ui-datepicker-next-hover"));
        }
        function a(e, i) {
            t.extend(e, i);
            for (var n in i) null == i[n] && (e[n] = i[n]);
            return e;
        }
        function r(t) {
            return function () {
                var e = this.element.val();
                t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change");
            };
        }
        t.ui = t.ui || {};
        var l = ((t.ui.version = "1.12.1"), 0),
            h = Array.prototype.slice;
        (t.cleanData = (function (e) {
            return function (i) {
                var n, s, o;
                for (o = 0; null != (s = i[o]); o++)
                    try {
                        (n = t._data(s, "events")), n && n.remove && t(s).triggerHandler("remove");
                    } catch (a) {}
                e(i);
            };
        })(t.cleanData)),
            (t.widget = function (e, i, n) {
                var s,
                    o,
                    a,
                    r = {},
                    l = e.split(".")[0];
                e = e.split(".")[1];
                var h = l + "-" + e;
                return (
                    n || ((n = i), (i = t.Widget)),
                    t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))),
                    (t.expr[":"][h.toLowerCase()] = function (e) {
                        return !!t.data(e, h);
                    }),
                    (t[l] = t[l] || {}),
                    (s = t[l][e]),
                    (o = t[l][e] = function (t, e) {
                        return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new o(t, e);
                    }),
                    t.extend(o, s, { version: n.version, _proto: t.extend({}, n), _childConstructors: [] }),
                    (a = new i()),
                    (a.options = t.widget.extend({}, a.options)),
                    t.each(n, function (e, n) {
                        return t.isFunction(n)
                            ? void (r[e] = (function () {
                                  function t() {
                                      return i.prototype[e].apply(this, arguments);
                                  }
                                  function s(t) {
                                      return i.prototype[e].apply(this, t);
                                  }
                                  return function () {
                                      var e,
                                          i = this._super,
                                          o = this._superApply;
                                      return (this._super = t), (this._superApply = s), (e = n.apply(this, arguments)), (this._super = i), (this._superApply = o), e;
                                  };
                              })())
                            : void (r[e] = n);
                    }),
                    (o.prototype = t.widget.extend(a, { widgetEventPrefix: s ? a.widgetEventPrefix || e : e }, r, { constructor: o, namespace: l, widgetName: e, widgetFullName: h })),
                    s
                        ? (t.each(s._childConstructors, function (e, i) {
                              var n = i.prototype;
                              t.widget(n.namespace + "." + n.widgetName, o, i._proto);
                          }),
                          delete s._childConstructors)
                        : i._childConstructors.push(o),
                    t.widget.bridge(e, o),
                    o
                );
            }),
            (t.widget.extend = function (e) {
                for (var i, n, s = h.call(arguments, 1), o = 0, a = s.length; o < a; o++)
                    for (i in s[o]) (n = s[o][i]), s[o].hasOwnProperty(i) && void 0 !== n && (t.isPlainObject(n) ? (e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n)) : (e[i] = n));
                return e;
            }),
            (t.widget.bridge = function (e, i) {
                var n = i.prototype.widgetFullName || e;
                t.fn[e] = function (s) {
                    var o = "string" == typeof s,
                        a = h.call(arguments, 1),
                        r = this;
                    return (
                        o
                            ? this.length || "instance" !== s
                                ? this.each(function () {
                                      var i,
                                          o = t.data(this, n);
                                      return "instance" === s
                                          ? ((r = o), !1)
                                          : o
                                          ? t.isFunction(o[s]) && "_" !== s.charAt(0)
                                              ? ((i = o[s].apply(o, a)), i !== o && void 0 !== i ? ((r = i && i.jquery ? r.pushStack(i.get()) : i), !1) : void 0)
                                              : t.error("no such method '" + s + "' for " + e + " widget instance")
                                          : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'");
                                  })
                                : (r = void 0)
                            : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))),
                              this.each(function () {
                                  var e = t.data(this, n);
                                  e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this));
                              })),
                        r
                    );
                };
            }),
            (t.Widget = function () {}),
            (t.Widget._childConstructors = []),
            (t.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: { classes: {}, disabled: !1, create: null },
                _createWidget: function (e, i) {
                    (i = t(i || this.defaultElement || this)[0]),
                        (this.element = t(i)),
                        (this.uuid = l++),
                        (this.eventNamespace = "." + this.widgetName + this.uuid),
                        (this.bindings = t()),
                        (this.hoverable = t()),
                        (this.focusable = t()),
                        (this.classesElementLookup = {}),
                        i !== this &&
                            (t.data(i, this.widgetFullName, this),
                            this._on(!0, this.element, {
                                remove: function (t) {
                                    t.target === i && this.destroy();
                                },
                            }),
                            (this.document = t(i.style ? i.ownerDocument : i.document || i)),
                            (this.window = t(this.document[0].defaultView || this.document[0].parentWindow))),
                        (this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e)),
                        this._create(),
                        this.options.disabled && this._setOptionDisabled(this.options.disabled),
                        this._trigger("create", null, this._getCreateEventData()),
                        this._init();
                },
                _getCreateOptions: function () {
                    return {};
                },
                _getCreateEventData: t.noop,
                _create: t.noop,
                _init: t.noop,
                destroy: function () {
                    var e = this;
                    this._destroy(),
                        t.each(this.classesElementLookup, function (t, i) {
                            e._removeClass(i, t);
                        }),
                        this.element.off(this.eventNamespace).removeData(this.widgetFullName),
                        this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
                        this.bindings.off(this.eventNamespace);
                },
                _destroy: t.noop,
                widget: function () {
                    return this.element;
                },
                option: function (e, i) {
                    var n,
                        s,
                        o,
                        a = e;
                    if (0 === arguments.length) return t.widget.extend({}, this.options);
                    if ("string" == typeof e)
                        if (((a = {}), (n = e.split(".")), (e = n.shift()), n.length)) {
                            for (s = a[e] = t.widget.extend({}, this.options[e]), o = 0; o < n.length - 1; o++) (s[n[o]] = s[n[o]] || {}), (s = s[n[o]]);
                            if (((e = n.pop()), 1 === arguments.length)) return void 0 === s[e] ? null : s[e];
                            s[e] = i;
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                            a[e] = i;
                        }
                    return this._setOptions(a), this;
                },
                _setOptions: function (t) {
                    var e;
                    for (e in t) this._setOption(e, t[e]);
                    return this;
                },
                _setOption: function (t, e) {
                    return "classes" === t && this._setOptionClasses(e), (this.options[t] = e), "disabled" === t && this._setOptionDisabled(e), this;
                },
                _setOptionClasses: function (e) {
                    var i, n, s;
                    for (i in e) (s = this.classesElementLookup[i]), e[i] !== this.options.classes[i] && s && s.length && ((n = t(s.get())), this._removeClass(s, i), n.addClass(this._classes({ element: n, keys: i, classes: e, add: !0 })));
                },
                _setOptionDisabled: function (t) {
                    this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
                },
                enable: function () {
                    return this._setOptions({ disabled: !1 });
                },
                disable: function () {
                    return this._setOptions({ disabled: !0 });
                },
                _classes: function (e) {
                    function i(i, o) {
                        var a, r;
                        for (r = 0; r < i.length; r++)
                            (a = s.classesElementLookup[i[r]] || t()),
                                (a = t(e.add ? t.unique(a.get().concat(e.element.get())) : a.not(e.element).get())),
                                (s.classesElementLookup[i[r]] = a),
                                n.push(i[r]),
                                o && e.classes[i[r]] && n.push(e.classes[i[r]]);
                    }
                    var n = [],
                        s = this;
                    return (
                        (e = t.extend({ element: this.element, classes: this.options.classes || {} }, e)),
                        this._on(e.element, { remove: "_untrackClassesElement" }),
                        e.keys && i(e.keys.match(/\S+/g) || [], !0),
                        e.extra && i(e.extra.match(/\S+/g) || []),
                        n.join(" ")
                    );
                },
                _untrackClassesElement: function (e) {
                    var i = this;
                    t.each(i.classesElementLookup, function (n, s) {
                        t.inArray(e.target, s) !== -1 && (i.classesElementLookup[n] = t(s.not(e.target).get()));
                    });
                },
                _removeClass: function (t, e, i) {
                    return this._toggleClass(t, e, i, !1);
                },
                _addClass: function (t, e, i) {
                    return this._toggleClass(t, e, i, !0);
                },
                _toggleClass: function (t, e, i, n) {
                    n = "boolean" == typeof n ? n : i;
                    var s = "string" == typeof t || null === t,
                        o = { extra: s ? e : i, keys: s ? t : e, element: s ? this.element : t, add: n };
                    return o.element.toggleClass(this._classes(o), n), this;
                },
                _on: function (e, i, n) {
                    var s,
                        o = this;
                    "boolean" != typeof e && ((n = i), (i = e), (e = !1)),
                        n ? ((i = s = t(i)), (this.bindings = this.bindings.add(i))) : ((n = i), (i = this.element), (s = this.widget())),
                        t.each(n, function (n, a) {
                            function r() {
                                if (e || (o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled"))) return ("string" == typeof a ? o[a] : a).apply(o, arguments);
                            }
                            "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                            var l = n.match(/^([\w:-]*)\s*(.*)$/),
                                h = l[1] + o.eventNamespace,
                                c = l[2];
                            c ? s.on(h, c, r) : i.on(h, r);
                        });
                },
                _off: function (e, i) {
                    (i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace),
                        e.off(i).off(i),
                        (this.bindings = t(this.bindings.not(e).get())),
                        (this.focusable = t(this.focusable.not(e).get())),
                        (this.hoverable = t(this.hoverable.not(e).get()));
                },
                _delay: function (t, e) {
                    function i() {
                        return ("string" == typeof t ? n[t] : t).apply(n, arguments);
                    }
                    var n = this;
                    return setTimeout(i, e || 0);
                },
                _hoverable: function (e) {
                    (this.hoverable = this.hoverable.add(e)),
                        this._on(e, {
                            mouseenter: function (e) {
                                this._addClass(t(e.currentTarget), null, "ui-state-hover");
                            },
                            mouseleave: function (e) {
                                this._removeClass(t(e.currentTarget), null, "ui-state-hover");
                            },
                        });
                },
                _focusable: function (e) {
                    (this.focusable = this.focusable.add(e)),
                        this._on(e, {
                            focusin: function (e) {
                                this._addClass(t(e.currentTarget), null, "ui-state-focus");
                            },
                            focusout: function (e) {
                                this._removeClass(t(e.currentTarget), null, "ui-state-focus");
                            },
                        });
                },
                _trigger: function (e, i, n) {
                    var s,
                        o,
                        a = this.options[e];
                    if (((n = n || {}), (i = t.Event(i)), (i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase()), (i.target = this.element[0]), (o = i.originalEvent))) for (s in o) s in i || (i[s] = o[s]);
                    return this.element.trigger(i, n), !((t.isFunction(a) && a.apply(this.element[0], [i].concat(n)) === !1) || i.isDefaultPrevented());
                },
            }),
            t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
                t.Widget.prototype["_" + e] = function (n, s, o) {
                    "string" == typeof s && (s = { effect: s });
                    var a,
                        r = s ? (s === !0 || "number" == typeof s ? i : s.effect || i) : e;
                    (s = s || {}),
                        "number" == typeof s && (s = { duration: s }),
                        (a = !t.isEmptyObject(s)),
                        (s.complete = o),
                        s.delay && n.delay(s.delay),
                        a && t.effects && t.effects.effect[r]
                            ? n[e](s)
                            : r !== e && n[r]
                            ? n[r](s.duration, s.easing, o)
                            : n.queue(function (i) {
                                  t(this)[e](), o && o.call(n[0]), i();
                              });
                };
            });
        t.widget;
        !(function () {
            function e(t, e, i) {
                return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)];
            }
            function i(e, i) {
                return parseInt(t.css(e, i), 10) || 0;
            }
            function n(e) {
                var i = e[0];
                return 9 === i.nodeType
                    ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } }
                    : t.isWindow(i)
                    ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } }
                    : i.preventDefault
                    ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
                    : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() };
            }
            var s,
                o = Math.max,
                a = Math.abs,
                r = /left|center|right/,
                l = /top|center|bottom/,
                h = /[\+\-]\d+(\.[\d]+)?%?/,
                c = /^\w+/,
                u = /%$/,
                d = t.fn.position;
            (t.position = {
                scrollbarWidth: function () {
                    if (void 0 !== s) return s;
                    var e,
                        i,
                        n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = n.children()[0];
                    return t("body").append(n), (e = o.offsetWidth), n.css("overflow", "scroll"), (i = o.offsetWidth), e === i && (i = n[0].clientWidth), n.remove(), (s = e - i);
                },
                getScrollInfo: function (e) {
                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                        n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                        s = "scroll" === i || ("auto" === i && e.width < e.element[0].scrollWidth),
                        o = "scroll" === n || ("auto" === n && e.height < e.element[0].scrollHeight);
                    return { width: o ? t.position.scrollbarWidth() : 0, height: s ? t.position.scrollbarWidth() : 0 };
                },
                getWithinInfo: function (e) {
                    var i = t(e || window),
                        n = t.isWindow(i[0]),
                        s = !!i[0] && 9 === i[0].nodeType,
                        o = !n && !s;
                    return { element: i, isWindow: n, isDocument: s, offset: o ? t(e).offset() : { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: i.outerWidth(), height: i.outerHeight() };
                },
            }),
                (t.fn.position = function (s) {
                    if (!s || !s.of) return d.apply(this, arguments);
                    s = t.extend({}, s);
                    var u,
                        p,
                        f,
                        g,
                        m,
                        v,
                        b = t(s.of),
                        y = t.position.getWithinInfo(s.within),
                        _ = t.position.getScrollInfo(y),
                        T = (s.collision || "flip").split(" "),
                        w = {};
                    return (
                        (v = n(b)),
                        b[0].preventDefault && (s.at = "left top"),
                        (p = v.width),
                        (f = v.height),
                        (g = v.offset),
                        (m = t.extend({}, g)),
                        t.each(["my", "at"], function () {
                            var t,
                                e,
                                i = (s[this] || "").split(" ");
                            1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
                                (i[0] = r.test(i[0]) ? i[0] : "center"),
                                (i[1] = l.test(i[1]) ? i[1] : "center"),
                                (t = h.exec(i[0])),
                                (e = h.exec(i[1])),
                                (w[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                                (s[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]);
                        }),
                        1 === T.length && (T[1] = T[0]),
                        "right" === s.at[0] ? (m.left += p) : "center" === s.at[0] && (m.left += p / 2),
                        "bottom" === s.at[1] ? (m.top += f) : "center" === s.at[1] && (m.top += f / 2),
                        (u = e(w.at, p, f)),
                        (m.left += u[0]),
                        (m.top += u[1]),
                        this.each(function () {
                            var n,
                                r,
                                l = t(this),
                                h = l.outerWidth(),
                                c = l.outerHeight(),
                                d = i(this, "marginLeft"),
                                v = i(this, "marginTop"),
                                x = h + d + i(this, "marginRight") + _.width,
                                S = c + v + i(this, "marginBottom") + _.height,
                                C = t.extend({}, m),
                                P = e(w.my, l.outerWidth(), l.outerHeight());
                            "right" === s.my[0] ? (C.left -= h) : "center" === s.my[0] && (C.left -= h / 2),
                                "bottom" === s.my[1] ? (C.top -= c) : "center" === s.my[1] && (C.top -= c / 2),
                                (C.left += P[0]),
                                (C.top += P[1]),
                                (n = { marginLeft: d, marginTop: v }),
                                t.each(["left", "top"], function (e, i) {
                                    t.ui.position[T[e]] &&
                                        t.ui.position[T[e]][i](C, {
                                            targetWidth: p,
                                            targetHeight: f,
                                            elemWidth: h,
                                            elemHeight: c,
                                            collisionPosition: n,
                                            collisionWidth: x,
                                            collisionHeight: S,
                                            offset: [u[0] + P[0], u[1] + P[1]],
                                            my: s.my,
                                            at: s.at,
                                            within: y,
                                            elem: l,
                                        });
                                }),
                                s.using &&
                                    (r = function (t) {
                                        var e = g.left - C.left,
                                            i = e + p - h,
                                            n = g.top - C.top,
                                            r = n + f - c,
                                            u = {
                                                target: { element: b, left: g.left, top: g.top, width: p, height: f },
                                                element: { element: l, left: C.left, top: C.top, width: h, height: c },
                                                horizontal: i < 0 ? "left" : e > 0 ? "right" : "center",
                                                vertical: r < 0 ? "top" : n > 0 ? "bottom" : "middle",
                                            };
                                        p < h && a(e + i) < p && (u.horizontal = "center"),
                                            f < c && a(n + r) < f && (u.vertical = "middle"),
                                            o(a(e), a(i)) > o(a(n), a(r)) ? (u.important = "horizontal") : (u.important = "vertical"),
                                            s.using.call(this, t, u);
                                    }),
                                l.offset(t.extend(C, { using: r }));
                        })
                    );
                }),
                (t.ui.position = {
                    fit: {
                        left: function (t, e) {
                            var i,
                                n = e.within,
                                s = n.isWindow ? n.scrollLeft : n.offset.left,
                                a = n.width,
                                r = t.left - e.collisionPosition.marginLeft,
                                l = s - r,
                                h = r + e.collisionWidth - a - s;
                            e.collisionWidth > a
                                ? l > 0 && h <= 0
                                    ? ((i = t.left + l + e.collisionWidth - a - s), (t.left += l - i))
                                    : h > 0 && l <= 0
                                    ? (t.left = s)
                                    : l > h
                                    ? (t.left = s + a - e.collisionWidth)
                                    : (t.left = s)
                                : l > 0
                                ? (t.left += l)
                                : h > 0
                                ? (t.left -= h)
                                : (t.left = o(t.left - r, t.left));
                        },
                        top: function (t, e) {
                            var i,
                                n = e.within,
                                s = n.isWindow ? n.scrollTop : n.offset.top,
                                a = e.within.height,
                                r = t.top - e.collisionPosition.marginTop,
                                l = s - r,
                                h = r + e.collisionHeight - a - s;
                            e.collisionHeight > a
                                ? l > 0 && h <= 0
                                    ? ((i = t.top + l + e.collisionHeight - a - s), (t.top += l - i))
                                    : h > 0 && l <= 0
                                    ? (t.top = s)
                                    : l > h
                                    ? (t.top = s + a - e.collisionHeight)
                                    : (t.top = s)
                                : l > 0
                                ? (t.top += l)
                                : h > 0
                                ? (t.top -= h)
                                : (t.top = o(t.top - r, t.top));
                        },
                    },
                    flip: {
                        left: function (t, e) {
                            var i,
                                n,
                                s = e.within,
                                o = s.offset.left + s.scrollLeft,
                                r = s.width,
                                l = s.isWindow ? s.scrollLeft : s.offset.left,
                                h = t.left - e.collisionPosition.marginLeft,
                                c = h - l,
                                u = h + e.collisionWidth - r - l,
                                d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                f = -2 * e.offset[0];
                            c < 0
                                ? ((i = t.left + d + p + f + e.collisionWidth - r - o), (i < 0 || i < a(c)) && (t.left += d + p + f))
                                : u > 0 && ((n = t.left - e.collisionPosition.marginLeft + d + p + f - l), (n > 0 || a(n) < u) && (t.left += d + p + f));
                        },
                        top: function (t, e) {
                            var i,
                                n,
                                s = e.within,
                                o = s.offset.top + s.scrollTop,
                                r = s.height,
                                l = s.isWindow ? s.scrollTop : s.offset.top,
                                h = t.top - e.collisionPosition.marginTop,
                                c = h - l,
                                u = h + e.collisionHeight - r - l,
                                d = "top" === e.my[1],
                                p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                g = -2 * e.offset[1];
                            c < 0
                                ? ((n = t.top + p + f + g + e.collisionHeight - r - o), (n < 0 || n < a(c)) && (t.top += p + f + g))
                                : u > 0 && ((i = t.top - e.collisionPosition.marginTop + p + f + g - l), (i > 0 || a(i) < u) && (t.top += p + f + g));
                        },
                    },
                    flipfit: {
                        left: function () {
                            t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
                        },
                        top: function () {
                            t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
                        },
                    },
                });
        })();
        t.ui.position,
            t.extend(t.expr[":"], {
                data: t.expr.createPseudo
                    ? t.expr.createPseudo(function (e) {
                          return function (i) {
                              return !!t.data(i, e);
                          };
                      })
                    : function (e, i, n) {
                          return !!t.data(e, n[3]);
                      },
            }),
            t.fn.extend({
                disableSelection: (function () {
                    var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                    return function () {
                        return this.on(t + ".ui-disableSelection", function (t) {
                            t.preventDefault();
                        });
                    };
                })(),
                enableSelection: function () {
                    return this.off(".ui-disableSelection");
                },
            });
        (t.ui.focusable = function (i, n) {
            var s,
                o,
                a,
                r,
                l,
                h = i.nodeName.toLowerCase();
            return "area" === h
                ? ((s = i.parentNode), (o = s.name), !(!i.href || !o || "map" !== s.nodeName.toLowerCase()) && ((a = t("img[usemap='#" + o + "']")), a.length > 0 && a.is(":visible")))
                : (/^(input|select|textarea|button|object)$/.test(h) ? ((r = !i.disabled), r && ((l = t(i).closest("fieldset")[0]), l && (r = !l.disabled))) : (r = "a" === h ? i.href || n : n), r && t(i).is(":visible") && e(t(i)));
        }),
            t.extend(t.expr[":"], {
                focusable: function (e) {
                    return t.ui.focusable(e, null != t.attr(e, "tabindex"));
                },
            });
        t.ui.focusable,
            (t.fn.form = function () {
                return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form);
            }),
            (t.ui.formResetMixin = {
                _formResetHandler: function () {
                    var e = t(this);
                    setTimeout(function () {
                        var i = e.data("ui-form-reset-instances");
                        t.each(i, function () {
                            this.refresh();
                        });
                    });
                },
                _bindFormResetHandler: function () {
                    if (((this.form = this.element.form()), this.form.length)) {
                        var t = this.form.data("ui-form-reset-instances") || [];
                        t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t);
                    }
                },
                _unbindFormResetHandler: function () {
                    if (this.form.length) {
                        var e = this.form.data("ui-form-reset-instances");
                        e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
                    }
                },
            });
        "1.7" === t.fn.jquery.substring(0, 3) &&
            (t.each(["Width", "Height"], function (e, i) {
                function n(e, i, n, o) {
                    return (
                        t.each(s, function () {
                            (i -= parseFloat(t.css(e, "padding" + this)) || 0), n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
                        }),
                        i
                    );
                }
                var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                    o = i.toLowerCase(),
                    a = { innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight };
                (t.fn["inner" + i] = function (e) {
                    return void 0 === e
                        ? a["inner" + i].call(this)
                        : this.each(function () {
                              t(this).css(o, n(this, e) + "px");
                          });
                }),
                    (t.fn["outer" + i] = function (e, s) {
                        return "number" != typeof e
                            ? a["outer" + i].call(this, e)
                            : this.each(function () {
                                  t(this).css(o, n(this, e, !0, s) + "px");
                              });
                    });
            }),
            (t.fn.addBack = function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
            }));
        var c =
            ((t.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }),
            (t.ui.escapeSelector = (function () {
                var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
                return function (e) {
                    return e.replace(t, "\\$1");
                };
            })()),
            (t.fn.labels = function () {
                var e, i, n, s, o;
                return this[0].labels && this[0].labels.length
                    ? this.pushStack(this[0].labels)
                    : ((s = this.eq(0).parents("label")),
                      (n = this.attr("id")),
                      n && ((e = this.eq(0).parents().last()), (o = e.add(e.length ? e.siblings() : this.siblings())), (i = "label[for='" + t.ui.escapeSelector(n) + "']"), (s = s.add(o.find(i).addBack(i)))),
                      this.pushStack(s));
            }),
            (t.fn.scrollParent = function (e) {
                var i = this.css("position"),
                    n = "absolute" === i,
                    s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    o = this.parents()
                        .filter(function () {
                            var e = t(this);
                            return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
                        })
                        .eq(0);
                return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document);
            }),
            t.extend(t.expr[":"], {
                tabbable: function (e) {
                    var i = t.attr(e, "tabindex"),
                        n = null != i;
                    return (!n || i >= 0) && t.ui.focusable(e, n);
                },
            }),
            t.fn.extend({
                uniqueId: (function () {
                    var t = 0;
                    return function () {
                        return this.each(function () {
                            this.id || (this.id = "ui-id-" + ++t);
                        });
                    };
                })(),
                removeUniqueId: function () {
                    return this.each(function () {
                        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
                    });
                },
            }),
            (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
            !1);
        t(document).on("mouseup", function () {
            c = !1;
        });
        t.widget("ui.mouse", {
            version: "1.12.1",
            options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 },
            _mouseInit: function () {
                var e = this;
                this.element
                    .on("mousedown." + this.widgetName, function (t) {
                        return e._mouseDown(t);
                    })
                    .on("click." + this.widgetName, function (i) {
                        if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1;
                    }),
                    (this.started = !1);
            },
            _mouseDestroy: function () {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
            },
            _mouseDown: function (e) {
                if (!c) {
                    (this._mouseMoved = !1), this._mouseStarted && this._mouseUp(e), (this._mouseDownEvent = e);
                    var i = this,
                        n = 1 === e.which,
                        s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                    return (
                        !(n && !s && this._mouseCapture(e)) ||
                        ((this.mouseDelayMet = !this.options.delay),
                        this.mouseDelayMet ||
                            (this._mouseDelayTimer = setTimeout(function () {
                                i.mouseDelayMet = !0;
                            }, this.options.delay)),
                        this._mouseDistanceMet(e) && this._mouseDelayMet(e) && ((this._mouseStarted = this._mouseStart(e) !== !1), !this._mouseStarted)
                            ? (e.preventDefault(), !0)
                            : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"),
                              (this._mouseMoveDelegate = function (t) {
                                  return i._mouseMove(t);
                              }),
                              (this._mouseUpDelegate = function (t) {
                                  return i._mouseUp(t);
                              }),
                              this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                              e.preventDefault(),
                              (c = !0),
                              !0))
                    );
                }
            },
            _mouseMove: function (e) {
                if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                    if (!e.which)
                        if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(e);
                }
                return (
                    (e.which || e.button) && (this._mouseMoved = !0),
                    this._mouseStarted
                        ? (this._mouseDrag(e), e.preventDefault())
                        : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
                );
            },
            _mouseUp: function (e) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
                    this._mouseStarted && ((this._mouseStarted = !1), e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)),
                    this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
                    (this.ignoreMissingWhich = !1),
                    (c = !1),
                    e.preventDefault();
            },
            _mouseDistanceMet: function (t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet;
            },
            _mouseStart: function () {},
            _mouseDrag: function () {},
            _mouseStop: function () {},
            _mouseCapture: function () {
                return !0;
            },
        }),
            (t.ui.plugin = {
                add: function (e, i, n) {
                    var s,
                        o = t.ui[e].prototype;
                    for (s in n) (o.plugins[s] = o.plugins[s] || []), o.plugins[s].push([i, n[s]]);
                },
                call: function (t, e, i, n) {
                    var s,
                        o = t.plugins[e];
                    if (o && (n || (t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))) for (s = 0; s < o.length; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i);
                },
            }),
            (t.ui.safeActiveElement = function (t) {
                var e;
                try {
                    e = t.activeElement;
                } catch (i) {
                    e = t.body;
                }
                return e || (e = t.body), e.nodeName || (e = t.body), e;
            }),
            (t.ui.safeBlur = function (e) {
                e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
            });
        t.widget("ui.draggable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null,
            },
            _create: function () {
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit();
            },
            _setOption: function (t, e) {
                this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName());
            },
            _destroy: function () {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy());
            },
            _mouseCapture: function (e) {
                var i = this.options;
                return (
                    !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) &&
                    ((this.handle = this._getHandle(e)), !!this.handle && (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0))
                );
            },
            _blockFrames: function (e) {
                this.iframeBlocks = this.document.find(e).map(function () {
                    var e = t(this);
                    return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0];
                });
            },
            _unblockFrames: function () {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
            },
            _blurActiveElement: function (e) {
                var i = t.ui.safeActiveElement(this.document[0]),
                    n = t(e.target);
                n.closest(i).length || t.ui.safeBlur(i);
            },
            _mouseStart: function (e) {
                var i = this.options;
                return (
                    (this.helper = this._createHelper(e)),
                    this._addClass(this.helper, "ui-draggable-dragging"),
                    this._cacheHelperProportions(),
                    t.ui.ddmanager && (t.ui.ddmanager.current = this),
                    this._cacheMargins(),
                    (this.cssPosition = this.helper.css("position")),
                    (this.scrollParent = this.helper.scrollParent(!0)),
                    (this.offsetParent = this.helper.offsetParent()),
                    (this.hasFixedAncestor =
                        this.helper.parents().filter(function () {
                            return "fixed" === t(this).css("position");
                        }).length > 0),
                    (this.positionAbs = this.element.offset()),
                    this._refreshOffsets(e),
                    (this.originalPosition = this.position = this._generatePosition(e, !1)),
                    (this.originalPageX = e.pageX),
                    (this.originalPageY = e.pageY),
                    i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
                    this._setContainment(),
                    this._trigger("start", e) === !1
                        ? (this._clear(), !1)
                        : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
                );
            },
            _refreshOffsets: function (t) {
                (this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }),
                    (this.offset.click = { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top });
            },
            _mouseDrag: function (e, i) {
                if ((this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), (this.position = this._generatePosition(e, !0)), (this.positionAbs = this._convertPositionTo("absolute")), !i)) {
                    var n = this._uiHash();
                    if (this._trigger("drag", e, n) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;
                    this.position = n.position;
                }
                return (this.helper[0].style.left = this.position.left + "px"), (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1;
            },
            _mouseStop: function (e) {
                var i = this,
                    n = !1;
                return (
                    t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)),
                    this.dropped && ((n = this.dropped), (this.dropped = !1)),
                    ("invalid" === this.options.revert && !n) || ("valid" === this.options.revert && n) || this.options.revert === !0 || (t.isFunction(this.options.revert) && this.options.revert.call(this.element, n))
                        ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                              i._trigger("stop", e) !== !1 && i._clear();
                          })
                        : this._trigger("stop", e) !== !1 && this._clear(),
                    !1
                );
            },
            _mouseUp: function (e) {
                return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e);
            },
            cancel: function () {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", { target: this.element[0] })) : this._clear(), this;
            },
            _getHandle: function (e) {
                return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length;
            },
            _setHandleClassName: function () {
                (this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element), this._addClass(this.handleElement, "ui-draggable-handle");
            },
            _removeHandleClassName: function () {
                this._removeClass(this.handleElement, "ui-draggable-handle");
            },
            _createHelper: function (e) {
                var i = this.options,
                    n = t.isFunction(i.helper),
                    s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                return (
                    s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
                    n && s[0] === this.element[0] && this._setPositionRelative(),
                    s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"),
                    s
                );
            },
            _setPositionRelative: function () {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
            },
            _adjustOffsetFromHelper: function (e) {
                "string" == typeof e && (e = e.split(" ")),
                    t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
                    "left" in e && (this.offset.click.left = e.left + this.margins.left),
                    "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
                    "top" in e && (this.offset.click.top = e.top + this.margins.top),
                    "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
            },
            _isRootNode: function (t) {
                return /(html|body)/i.test(t.tagName) || t === this.document[0];
            },
            _getParentOffset: function () {
                var e = this.offsetParent.offset(),
                    i = this.document[0];
                return (
                    "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && ((e.left += this.scrollParent.scrollLeft()), (e.top += this.scrollParent.scrollTop())),
                    this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }),
                    { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
                );
            },
            _getRelativeOffset: function () {
                if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
                var t = this.element.position(),
                    e = this._isRootNode(this.scrollParent[0]);
                return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft()) };
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
                };
            },
            _cacheHelperProportions: function () {
                this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
            },
            _setContainment: function () {
                var e,
                    i,
                    n,
                    s = this.options,
                    o = this.document[0];
                return (
                    (this.relativeContainer = null),
                    s.containment
                        ? "window" === s.containment
                            ? void (this.containment = [
                                  t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                                  t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                                  t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left,
                                  t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top,
                              ])
                            : "document" === s.containment
                            ? void (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top])
                            : s.containment.constructor === Array
                            ? void (this.containment = s.containment)
                            : ("parent" === s.containment && (s.containment = this.helper[0].parentNode),
                              (i = t(s.containment)),
                              (n = i[0]),
                              void (
                                  n &&
                                  ((e = /(scroll|auto)/.test(i.css("overflow"))),
                                  (this.containment = [
                                      (parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0),
                                      (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0),
                                      (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) -
                                          (parseInt(i.css("borderRightWidth"), 10) || 0) -
                                          (parseInt(i.css("paddingRight"), 10) || 0) -
                                          this.helperProportions.width -
                                          this.margins.left -
                                          this.margins.right,
                                      (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) -
                                          (parseInt(i.css("borderBottomWidth"), 10) || 0) -
                                          (parseInt(i.css("paddingBottom"), 10) || 0) -
                                          this.helperProportions.height -
                                          this.margins.top -
                                          this.margins.bottom,
                                  ]),
                                  (this.relativeContainer = i))
                              ))
                        : void (this.containment = null)
                );
            },
            _convertPositionTo: function (t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1,
                    n = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i,
                };
            },
            _generatePosition: function (t, e) {
                var i,
                    n,
                    s,
                    o,
                    a = this.options,
                    r = this._isRootNode(this.scrollParent[0]),
                    l = t.pageX,
                    h = t.pageY;
                return (
                    (r && this.offset.scroll) || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }),
                    e &&
                        (this.containment &&
                            (this.relativeContainer
                                ? ((n = this.relativeContainer.offset()), (i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]))
                                : (i = this.containment),
                            t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left),
                            t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top),
                            t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left),
                            t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)),
                        a.grid &&
                            ((s = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY),
                            (h = i ? (s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - a.grid[1] : s + a.grid[1]) : s),
                            (o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX),
                            (l = i ? (o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0]) : o)),
                        "y" === a.axis && (l = this.originalPageX),
                        "x" === a.axis && (h = this.originalPageY)),
                    {
                        top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                        left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left),
                    }
                );
            },
            _clear: function () {
                this._removeClass(this.helper, "ui-draggable-dragging"),
                    this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
                    (this.helper = null),
                    (this.cancelHelperRemoval = !1),
                    this.destroyOnClear && this.destroy();
            },
            _trigger: function (e, i, n) {
                return (
                    (n = n || this._uiHash()),
                    t.ui.plugin.call(this, e, [i, n, this], !0),
                    /^(drag|start|stop)/.test(e) && ((this.positionAbs = this._convertPositionTo("absolute")), (n.offset = this.positionAbs)),
                    t.Widget.prototype._trigger.call(this, e, i, n)
                );
            },
            plugins: {},
            _uiHash: function () {
                return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs };
            },
        }),
            t.ui.plugin.add("draggable", "connectToSortable", {
                start: function (e, i, n) {
                    var s = t.extend({}, i, { item: n.element });
                    (n.sortables = []),
                        t(n.options.connectToSortable).each(function () {
                            var i = t(this).sortable("instance");
                            i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s));
                        });
                },
                stop: function (e, i, n) {
                    var s = t.extend({}, i, { item: n.element });
                    (n.cancelHelperRemoval = !1),
                        t.each(n.sortables, function () {
                            var t = this;
                            t.isOver
                                ? ((t.isOver = 0),
                                  (n.cancelHelperRemoval = !0),
                                  (t.cancelHelperRemoval = !1),
                                  (t._storedCSS = { position: t.placeholder.css("position"), top: t.placeholder.css("top"), left: t.placeholder.css("left") }),
                                  t._mouseStop(e),
                                  (t.options.helper = t.options._helper))
                                : ((t.cancelHelperRemoval = !0), t._trigger("deactivate", e, s));
                        });
                },
                drag: function (e, i, n) {
                    t.each(n.sortables, function () {
                        var s = !1,
                            o = this;
                        (o.positionAbs = n.positionAbs),
                            (o.helperProportions = n.helperProportions),
                            (o.offset.click = n.offset.click),
                            o._intersectsWith(o.containerCache) &&
                                ((s = !0),
                                t.each(n.sortables, function () {
                                    return (
                                        (this.positionAbs = n.positionAbs),
                                        (this.helperProportions = n.helperProportions),
                                        (this.offset.click = n.offset.click),
                                        this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1),
                                        s
                                    );
                                })),
                            s
                                ? (o.isOver ||
                                      ((o.isOver = 1),
                                      (n._parent = i.helper.parent()),
                                      (o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0)),
                                      (o.options._helper = o.options.helper),
                                      (o.options.helper = function () {
                                          return i.helper[0];
                                      }),
                                      (e.target = o.currentItem[0]),
                                      o._mouseCapture(e, !0),
                                      o._mouseStart(e, !0, !0),
                                      (o.offset.click.top = n.offset.click.top),
                                      (o.offset.click.left = n.offset.click.left),
                                      (o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left),
                                      (o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top),
                                      n._trigger("toSortable", e),
                                      (n.dropped = o.element),
                                      t.each(n.sortables, function () {
                                          this.refreshPositions();
                                      }),
                                      (n.currentItem = n.element),
                                      (o.fromOutside = n)),
                                  o.currentItem && (o._mouseDrag(e), (i.position = o.position)))
                                : o.isOver &&
                                  ((o.isOver = 0),
                                  (o.cancelHelperRemoval = !0),
                                  (o.options._revert = o.options.revert),
                                  (o.options.revert = !1),
                                  o._trigger("out", e, o._uiHash(o)),
                                  o._mouseStop(e, !0),
                                  (o.options.revert = o.options._revert),
                                  (o.options.helper = o.options._helper),
                                  o.placeholder && o.placeholder.remove(),
                                  i.helper.appendTo(n._parent),
                                  n._refreshOffsets(e),
                                  (i.position = n._generatePosition(e, !0)),
                                  n._trigger("fromSortable", e),
                                  (n.dropped = !1),
                                  t.each(n.sortables, function () {
                                      this.refreshPositions();
                                  }));
                    });
                },
            }),
            t.ui.plugin.add("draggable", "cursor", {
                start: function (e, i, n) {
                    var s = t("body"),
                        o = n.options;
                    s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor);
                },
                stop: function (e, i, n) {
                    var s = n.options;
                    s._cursor && t("body").css("cursor", s._cursor);
                },
            }),
            t.ui.plugin.add("draggable", "opacity", {
                start: function (e, i, n) {
                    var s = t(i.helper),
                        o = n.options;
                    s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity);
                },
                stop: function (e, i, n) {
                    var s = n.options;
                    s._opacity && t(i.helper).css("opacity", s._opacity);
                },
            }),
            t.ui.plugin.add("draggable", "scroll", {
                start: function (t, e, i) {
                    i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
                        i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
                },
                drag: function (e, i, n) {
                    var s = n.options,
                        o = !1,
                        a = n.scrollParentNotHidden[0],
                        r = n.document[0];
                    a !== r && "HTML" !== a.tagName
                        ? ((s.axis && "x" === s.axis) ||
                              (n.overflowOffset.top + a.offsetHeight - e.pageY < s.scrollSensitivity
                                  ? (a.scrollTop = o = a.scrollTop + s.scrollSpeed)
                                  : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (a.scrollTop = o = a.scrollTop - s.scrollSpeed)),
                          (s.axis && "y" === s.axis) ||
                              (n.overflowOffset.left + a.offsetWidth - e.pageX < s.scrollSensitivity
                                  ? (a.scrollLeft = o = a.scrollLeft + s.scrollSpeed)
                                  : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed)))
                        : ((s.axis && "x" === s.axis) ||
                              (e.pageY - t(r).scrollTop() < s.scrollSensitivity
                                  ? (o = t(r).scrollTop(t(r).scrollTop() - s.scrollSpeed))
                                  : t(window).height() - (e.pageY - t(r).scrollTop()) < s.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + s.scrollSpeed))),
                          (s.axis && "y" === s.axis) ||
                              (e.pageX - t(r).scrollLeft() < s.scrollSensitivity
                                  ? (o = t(r).scrollLeft(t(r).scrollLeft() - s.scrollSpeed))
                                  : t(window).width() - (e.pageX - t(r).scrollLeft()) < s.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + s.scrollSpeed)))),
                        o !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e);
                },
            }),
            t.ui.plugin.add("draggable", "snap", {
                start: function (e, i, n) {
                    var s = n.options;
                    (n.snapElements = []),
                        t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function () {
                            var e = t(this),
                                i = e.offset();
                            this !== n.element[0] && n.snapElements.push({ item: this, width: e.outerWidth(), height: e.outerHeight(), top: i.top, left: i.left });
                        });
                },
                drag: function (e, i, n) {
                    var s,
                        o,
                        a,
                        r,
                        l,
                        h,
                        c,
                        u,
                        d,
                        p,
                        f = n.options,
                        g = f.snapTolerance,
                        m = i.offset.left,
                        v = m + n.helperProportions.width,
                        b = i.offset.top,
                        y = b + n.helperProportions.height;
                    for (d = n.snapElements.length - 1; d >= 0; d--)
                        (l = n.snapElements[d].left - n.margins.left),
                            (h = l + n.snapElements[d].width),
                            (c = n.snapElements[d].top - n.margins.top),
                            (u = c + n.snapElements[d].height),
                            v < l - g || m > h + g || y < c - g || b > u + g || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item)
                                ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), { snapItem: n.snapElements[d].item })), (n.snapElements[d].snapping = !1))
                                : ("inner" !== f.snapMode &&
                                      ((s = Math.abs(c - y) <= g),
                                      (o = Math.abs(u - b) <= g),
                                      (a = Math.abs(l - v) <= g),
                                      (r = Math.abs(h - m) <= g),
                                      s && (i.position.top = n._convertPositionTo("relative", { top: c - n.helperProportions.height, left: 0 }).top),
                                      o && (i.position.top = n._convertPositionTo("relative", { top: u, left: 0 }).top),
                                      a && (i.position.left = n._convertPositionTo("relative", { top: 0, left: l - n.helperProportions.width }).left),
                                      r && (i.position.left = n._convertPositionTo("relative", { top: 0, left: h }).left)),
                                  (p = s || o || a || r),
                                  "outer" !== f.snapMode &&
                                      ((s = Math.abs(c - b) <= g),
                                      (o = Math.abs(u - y) <= g),
                                      (a = Math.abs(l - m) <= g),
                                      (r = Math.abs(h - v) <= g),
                                      s && (i.position.top = n._convertPositionTo("relative", { top: c, left: 0 }).top),
                                      o && (i.position.top = n._convertPositionTo("relative", { top: u - n.helperProportions.height, left: 0 }).top),
                                      a && (i.position.left = n._convertPositionTo("relative", { top: 0, left: l }).left),
                                      r && (i.position.left = n._convertPositionTo("relative", { top: 0, left: h - n.helperProportions.width }).left)),
                                  !n.snapElements[d].snapping && (s || o || a || r || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), { snapItem: n.snapElements[d].item })),
                                  (n.snapElements[d].snapping = s || o || a || r || p));
                },
            }),
            t.ui.plugin.add("draggable", "stack", {
                start: function (e, i, n) {
                    var s,
                        o = n.options,
                        a = t.makeArray(t(o.stack)).sort(function (e, i) {
                            return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0);
                        });
                    a.length &&
                        ((s = parseInt(t(a[0]).css("zIndex"), 10) || 0),
                        t(a).each(function (e) {
                            t(this).css("zIndex", s + e);
                        }),
                        this.css("zIndex", s + a.length));
                },
            }),
            t.ui.plugin.add("draggable", "zIndex", {
                start: function (e, i, n) {
                    var s = t(i.helper),
                        o = n.options;
                    s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex);
                },
                stop: function (e, i, n) {
                    var s = n.options;
                    s._zIndex && t(i.helper).css("zIndex", s._zIndex);
                },
            });
        t.ui.draggable;
        t.widget("ui.droppable", {
            version: "1.12.1",
            widgetEventPrefix: "drop",
            options: { accept: "*", addClasses: !0, greedy: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null },
            _create: function () {
                var e,
                    i = this.options,
                    n = i.accept;
                (this.isover = !1),
                    (this.isout = !0),
                    (this.accept = t.isFunction(n)
                        ? n
                        : function (t) {
                              return t.is(n);
                          }),
                    (this.proportions = function () {
                        return arguments.length ? void (e = arguments[0]) : e ? e : (e = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight });
                    }),
                    this._addToManager(i.scope),
                    i.addClasses && this._addClass("ui-droppable");
            },
            _addToManager: function (e) {
                (t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || []), t.ui.ddmanager.droppables[e].push(this);
            },
            _splice: function (t) {
                for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1);
            },
            _destroy: function () {
                var e = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(e);
            },
            _setOption: function (e, i) {
                if ("accept" === e)
                    this.accept = t.isFunction(i)
                        ? i
                        : function (t) {
                              return t.is(i);
                          };
                else if ("scope" === e) {
                    var n = t.ui.ddmanager.droppables[this.options.scope];
                    this._splice(n), this._addToManager(i);
                }
                this._super(e, i);
            },
            _activate: function (e) {
                var i = t.ui.ddmanager.current;
                this._addActiveClass(), i && this._trigger("activate", e, this.ui(i));
            },
            _deactivate: function (e) {
                var i = t.ui.ddmanager.current;
                this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i));
            },
            _over: function (e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)));
            },
            _out: function (e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)));
            },
            _drop: function (e, i) {
                var n = i || t.ui.ddmanager.current,
                    s = !1;
                return (
                    !(!n || (n.currentItem || n.element)[0] === this.element[0]) &&
                    (this.element
                        .find(":data(ui-droppable)")
                        .not(".ui-draggable-dragging")
                        .each(function () {
                            var i = t(this).droppable("instance");
                            if (
                                i.options.greedy &&
                                !i.options.disabled &&
                                i.options.scope === n.options.scope &&
                                i.accept.call(i.element[0], n.currentItem || n.element) &&
                                u(n, t.extend(i, { offset: i.element.offset() }), i.options.tolerance, e)
                            )
                                return (s = !0), !1;
                        }),
                    !s && !!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(n)), this.element))
                );
            },
            ui: function (t) {
                return { draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs };
            },
            _addHoverClass: function () {
                this._addClass("ui-droppable-hover");
            },
            _removeHoverClass: function () {
                this._removeClass("ui-droppable-hover");
            },
            _addActiveClass: function () {
                this._addClass("ui-droppable-active");
            },
            _removeActiveClass: function () {
                this._removeClass("ui-droppable-active");
            },
        });
        var u = (t.ui.intersect = (function () {
            function t(t, e, i) {
                return t >= e && t < e + i;
            }
            return function (e, i, n, s) {
                if (!i.offset) return !1;
                var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                    a = (e.positionAbs || e.position.absolute).top + e.margins.top,
                    r = o + e.helperProportions.width,
                    l = a + e.helperProportions.height,
                    h = i.offset.left,
                    c = i.offset.top,
                    u = h + i.proportions().width,
                    d = c + i.proportions().height;
                switch (n) {
                    case "fit":
                        return h <= o && r <= u && c <= a && l <= d;
                    case "intersect":
                        return h < o + e.helperProportions.width / 2 && r - e.helperProportions.width / 2 < u && c < a + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < d;
                    case "pointer":
                        return t(s.pageY, c, i.proportions().height) && t(s.pageX, h, i.proportions().width);
                    case "touch":
                        return ((a >= c && a <= d) || (l >= c && l <= d) || (a < c && l > d)) && ((o >= h && o <= u) || (r >= h && r <= u) || (o < h && r > u));
                    default:
                        return !1;
                }
            };
        })());
        (t.ui.ddmanager = {
            current: null,
            droppables: { default: [] },
            prepareOffsets: function (e, i) {
                var n,
                    s,
                    o = t.ui.ddmanager.droppables[e.options.scope] || [],
                    a = i ? i.type : null,
                    r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                t: for (n = 0; n < o.length; n++)
                    if (!(o[n].options.disabled || (e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element)))) {
                        for (s = 0; s < r.length; s++)
                            if (r[s] === o[n].element[0]) {
                                o[n].proportions().height = 0;
                                continue t;
                            }
                        (o[n].visible = "none" !== o[n].element.css("display")),
                            o[n].visible && ("mousedown" === a && o[n]._activate.call(o[n], i), (o[n].offset = o[n].element.offset()), o[n].proportions({ width: o[n].element[0].offsetWidth, height: o[n].element[0].offsetHeight }));
                    }
            },
            drop: function (e, i) {
                var n = !1;
                return (
                    t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
                        this.options &&
                            (!this.options.disabled && this.visible && u(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n),
                            !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && ((this.isout = !0), (this.isover = !1), this._deactivate.call(this, i)));
                    }),
                    n
                );
            },
            dragStart: function (e, i) {
                e.element.parentsUntil("body").on("scroll.droppable", function () {
                    e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
                });
            },
            drag: function (e, i) {
                e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
                    t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                        if (!this.options.disabled && !this.greedyChild && this.visible) {
                            var n,
                                s,
                                o,
                                a = u(e, this, this.options.tolerance, i),
                                r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                            r &&
                                (this.options.greedy &&
                                    ((s = this.options.scope),
                                    (o = this.element.parents(":data(ui-droppable)").filter(function () {
                                        return t(this).droppable("instance").options.scope === s;
                                    })),
                                    o.length && ((n = t(o[0]).droppable("instance")), (n.greedyChild = "isover" === r))),
                                n && "isover" === r && ((n.isover = !1), (n.isout = !0), n._out.call(n, i)),
                                (this[r] = !0),
                                (this["isout" === r ? "isover" : "isout"] = !1),
                                this["isover" === r ? "_over" : "_out"].call(this, i),
                                n && "isout" === r && ((n.isout = !1), (n.isover = !0), n._over.call(n, i)));
                        }
                    });
            },
            dragStop: function (e, i) {
                e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
            },
        }),
            t.uiBackCompat !== !1 &&
                t.widget("ui.droppable", t.ui.droppable, {
                    options: { hoverClass: !1, activeClass: !1 },
                    _addActiveClass: function () {
                        this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
                    },
                    _removeActiveClass: function () {
                        this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
                    },
                    _addHoverClass: function () {
                        this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
                    },
                    _removeHoverClass: function () {
                        this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
                    },
                });
        t.ui.droppable;
        t.widget("ui.resizable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" },
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null,
            },
            _num: function (t) {
                return parseFloat(t) || 0;
            },
            _isNumber: function (t) {
                return !isNaN(parseFloat(t));
            },
            _hasScroll: function (e, i) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                    s = !1;
                return e[n] > 0 || ((e[n] = 1), (s = e[n] > 0), (e[n] = 0), s);
            },
            _create: function () {
                var e,
                    i = this.options,
                    n = this;
                this._addClass("ui-resizable"),
                    t.extend(this, {
                        _aspectRatio: !!i.aspectRatio,
                        aspectRatio: i.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null,
                    }),
                    this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) &&
                        (this.element.wrap(
                            t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                                position: this.element.css("position"),
                                width: this.element.outerWidth(),
                                height: this.element.outerHeight(),
                                top: this.element.css("top"),
                                left: this.element.css("left"),
                            })
                        ),
                        (this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance"))),
                        (this.elementIsWrapper = !0),
                        (e = {
                            marginTop: this.originalElement.css("marginTop"),
                            marginRight: this.originalElement.css("marginRight"),
                            marginBottom: this.originalElement.css("marginBottom"),
                            marginLeft: this.originalElement.css("marginLeft"),
                        }),
                        this.element.css(e),
                        this.originalElement.css("margin", 0),
                        (this.originalResizeStyle = this.originalElement.css("resize")),
                        this.originalElement.css("resize", "none"),
                        this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })),
                        this.originalElement.css(e),
                        this._proportionallyResize()),
                    this._setupHandles(),
                    i.autoHide &&
                        t(this.element)
                            .on("mouseenter", function () {
                                i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show());
                            })
                            .on("mouseleave", function () {
                                i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide());
                            }),
                    this._mouseInit();
            },
            _destroy: function () {
                this._mouseDestroy();
                var e,
                    i = function (e) {
                        t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
                    };
                return (
                    this.elementIsWrapper &&
                        (i(this.element), (e = this.element), this.originalElement.css({ position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left") }).insertAfter(e), e.remove()),
                    this.originalElement.css("resize", this.originalResizeStyle),
                    i(this.originalElement),
                    this
                );
            },
            _setOption: function (t, e) {
                switch ((this._super(t, e), t)) {
                    case "handles":
                        this._removeHandles(), this._setupHandles();
                }
            },
            _setupHandles: function () {
                var e,
                    i,
                    n,
                    s,
                    o,
                    a = this.options,
                    r = this;
                if (
                    ((this.handles =
                        a.handles ||
                        (t(".ui-resizable-handle", this.element).length
                            ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" }
                            : "e,s,se")),
                    (this._handles = t()),
                    this.handles.constructor === String)
                )
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; i < n.length; i++)
                        (e = t.trim(n[i])), (s = "ui-resizable-" + e), (o = t("<div>")), this._addClass(o, "ui-resizable-handle " + s), o.css({ zIndex: a.zIndex }), (this.handles[e] = ".ui-resizable-" + e), this.element.append(o);
                (this._renderAxis = function (e) {
                    var i, n, s, o;
                    e = e || this.element;
                    for (i in this.handles)
                        this.handles[i].constructor === String
                            ? (this.handles[i] = this.element.children(this.handles[i]).first().show())
                            : (this.handles[i].jquery || this.handles[i].nodeType) && ((this.handles[i] = t(this.handles[i])), this._on(this.handles[i], { mousedown: r._mouseDown })),
                            this.elementIsWrapper &&
                                this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) &&
                                ((n = t(this.handles[i], this.element)),
                                (o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth()),
                                (s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("")),
                                e.css(s, o),
                                this._proportionallyResize()),
                            (this._handles = this._handles.add(this.handles[i]));
                }),
                    this._renderAxis(this.element),
                    (this._handles = this._handles.add(this.element.find(".ui-resizable-handle"))),
                    this._handles.disableSelection(),
                    this._handles.on("mouseover", function () {
                        r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), (r.axis = o && o[1] ? o[1] : "se"));
                    }),
                    a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
            },
            _removeHandles: function () {
                this._handles.remove();
            },
            _mouseCapture: function (e) {
                var i,
                    n,
                    s = !1;
                for (i in this.handles) (n = t(this.handles[i])[0]), (n === e.target || t.contains(n, e.target)) && (s = !0);
                return !this.options.disabled && s;
            },
            _mouseStart: function (e) {
                var i,
                    n,
                    s,
                    o = this.options,
                    a = this.element;
                return (
                    (this.resizing = !0),
                    this._renderProxy(),
                    (i = this._num(this.helper.css("left"))),
                    (n = this._num(this.helper.css("top"))),
                    o.containment && ((i += t(o.containment).scrollLeft() || 0), (n += t(o.containment).scrollTop() || 0)),
                    (this.offset = this.helper.offset()),
                    (this.position = { left: i, top: n }),
                    (this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: a.width(), height: a.height() }),
                    (this.originalSize = this._helper ? { width: a.outerWidth(), height: a.outerHeight() } : { width: a.width(), height: a.height() }),
                    (this.sizeDiff = { width: a.outerWidth() - a.width(), height: a.outerHeight() - a.height() }),
                    (this.originalPosition = { left: i, top: n }),
                    (this.originalMousePosition = { left: e.pageX, top: e.pageY }),
                    (this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1),
                    (s = t(".ui-resizable-" + this.axis).css("cursor")),
                    t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
                    this._addClass("ui-resizable-resizing"),
                    this._propagate("start", e),
                    !0
                );
            },
            _mouseDrag: function (e) {
                var i,
                    n,
                    s = this.originalMousePosition,
                    o = this.axis,
                    a = e.pageX - s.left || 0,
                    r = e.pageY - s.top || 0,
                    l = this._change[o];
                return (
                    this._updatePrevProperties(),
                    !!l &&
                        ((i = l.apply(this, [e, a, r])),
                        this._updateVirtualBoundaries(e.shiftKey),
                        (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)),
                        (i = this._respectSize(i, e)),
                        this._updateCache(i),
                        this._propagate("resize", e),
                        (n = this._applyChanges()),
                        !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
                        t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()),
                        !1)
                );
            },
            _mouseStop: function (e) {
                this.resizing = !1;
                var i,
                    n,
                    s,
                    o,
                    a,
                    r,
                    l,
                    h = this.options,
                    c = this;
                return (
                    this._helper &&
                        ((i = this._proportionallyResizeElements),
                        (n = i.length && /textarea/i.test(i[0].nodeName)),
                        (s = n && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height),
                        (o = n ? 0 : c.sizeDiff.width),
                        (a = { width: c.helper.width() - o, height: c.helper.height() - s }),
                        (r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null),
                        (l = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null),
                        h.animate || this.element.css(t.extend(a, { top: l, left: r })),
                        c.helper.height(c.size.height),
                        c.helper.width(c.size.width),
                        this._helper && !h.animate && this._proportionallyResize()),
                    t("body").css("cursor", "auto"),
                    this._removeClass("ui-resizable-resizing"),
                    this._propagate("stop", e),
                    this._helper && this.helper.remove(),
                    !1
                );
            },
            _updatePrevProperties: function () {
                (this.prevPosition = { top: this.position.top, left: this.position.left }), (this.prevSize = { width: this.size.width, height: this.size.height });
            },
            _applyChanges: function () {
                var t = {};
                return (
                    this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"),
                    this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"),
                    this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"),
                    this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"),
                    this.helper.css(t),
                    t
                );
            },
            _updateVirtualBoundaries: function (t) {
                var e,
                    i,
                    n,
                    s,
                    o,
                    a = this.options;
                (o = {
                    minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                    maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                    minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                    maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0,
                }),
                    (this._aspectRatio || t) &&
                        ((e = o.minHeight * this.aspectRatio),
                        (n = o.minWidth / this.aspectRatio),
                        (i = o.maxHeight * this.aspectRatio),
                        (s = o.maxWidth / this.aspectRatio),
                        e > o.minWidth && (o.minWidth = e),
                        n > o.minHeight && (o.minHeight = n),
                        i < o.maxWidth && (o.maxWidth = i),
                        s < o.maxHeight && (o.maxHeight = s)),
                    (this._vBoundaries = o);
            },
            _updateCache: function (t) {
                (this.offset = this.helper.offset()),
                    this._isNumber(t.left) && (this.position.left = t.left),
                    this._isNumber(t.top) && (this.position.top = t.top),
                    this._isNumber(t.height) && (this.size.height = t.height),
                    this._isNumber(t.width) && (this.size.width = t.width);
            },
            _updateRatio: function (t) {
                var e = this.position,
                    i = this.size,
                    n = this.axis;
                return (
                    this._isNumber(t.height) ? (t.width = t.height * this.aspectRatio) : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
                    "sw" === n && ((t.left = e.left + (i.width - t.width)), (t.top = null)),
                    "nw" === n && ((t.top = e.top + (i.height - t.height)), (t.left = e.left + (i.width - t.width))),
                    t
                );
            },
            _respectSize: function (t) {
                var e = this._vBoundaries,
                    i = this.axis,
                    n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                    s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                    o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                    a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                    r = this.originalPosition.left + this.originalSize.width,
                    l = this.originalPosition.top + this.originalSize.height,
                    h = /sw|nw|w/.test(i),
                    c = /nw|ne|n/.test(i);
                return (
                    o && (t.width = e.minWidth),
                    a && (t.height = e.minHeight),
                    n && (t.width = e.maxWidth),
                    s && (t.height = e.maxHeight),
                    o && h && (t.left = r - e.minWidth),
                    n && h && (t.left = r - e.maxWidth),
                    a && c && (t.top = l - e.minHeight),
                    s && c && (t.top = l - e.maxHeight),
                    t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : (t.top = null),
                    t
                );
            },
            _getPaddingPlusBorderDimensions: function (t) {
                for (
                    var e = 0,
                        i = [],
                        n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")],
                        s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")];
                    e < 4;
                    e++
                )
                    (i[e] = parseFloat(n[e]) || 0), (i[e] += parseFloat(s[e]) || 0);
                return { height: i[0] + i[2], width: i[1] + i[3] };
            },
            _proportionallyResize: function () {
                if (this._proportionallyResizeElements.length)
                    for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++)
                        (t = this._proportionallyResizeElements[e]),
                            this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
                            t.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 });
            },
            _renderProxy: function () {
                var e = this.element,
                    i = this.options;
                (this.elementOffset = e.offset()),
                    this._helper
                        ? ((this.helper = this.helper || t("<div style='overflow:hidden;'></div>")),
                          this._addClass(this.helper, this._helper),
                          this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }),
                          this.helper.appendTo("body").disableSelection())
                        : (this.helper = this.element);
            },
            _change: {
                e: function (t, e) {
                    return { width: this.originalSize.width + e };
                },
                w: function (t, e) {
                    var i = this.originalSize,
                        n = this.originalPosition;
                    return { left: n.left + e, width: i.width - e };
                },
                n: function (t, e, i) {
                    var n = this.originalSize,
                        s = this.originalPosition;
                    return { top: s.top + i, height: n.height - i };
                },
                s: function (t, e, i) {
                    return { height: this.originalSize.height + i };
                },
                se: function (e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]));
                },
                sw: function (e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]));
                },
                ne: function (e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]));
                },
                nw: function (e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]));
                },
            },
            _propagate: function (e, i) {
                t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui());
            },
            plugins: {},
            ui: function () {
                return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition };
            },
        }),
            t.ui.plugin.add("resizable", "animate", {
                stop: function (e) {
                    var i = t(this).resizable("instance"),
                        n = i.options,
                        s = i._proportionallyResizeElements,
                        o = s.length && /textarea/i.test(s[0].nodeName),
                        a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                        r = o ? 0 : i.sizeDiff.width,
                        l = { width: i.size.width - r, height: i.size.height - a },
                        h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                        c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                    i.element.animate(t.extend(l, c && h ? { top: c, left: h } : {}), {
                        duration: n.animateDuration,
                        easing: n.animateEasing,
                        step: function () {
                            var n = { width: parseFloat(i.element.css("width")), height: parseFloat(i.element.css("height")), top: parseFloat(i.element.css("top")), left: parseFloat(i.element.css("left")) };
                            s && s.length && t(s[0]).css({ width: n.width, height: n.height }), i._updateCache(n), i._propagate("resize", e);
                        },
                    });
                },
            }),
            t.ui.plugin.add("resizable", "containment", {
                start: function () {
                    var e,
                        i,
                        n,
                        s,
                        o,
                        a,
                        r,
                        l = t(this).resizable("instance"),
                        h = l.options,
                        c = l.element,
                        u = h.containment,
                        d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
                    d &&
                        ((l.containerElement = t(d)),
                        /document/.test(u) || u === document
                            ? ((l.containerOffset = { left: 0, top: 0 }),
                              (l.containerPosition = { left: 0, top: 0 }),
                              (l.parentData = { element: t(document), left: 0, top: 0, width: t(document).width(), height: t(document).height() || document.body.parentNode.scrollHeight }))
                            : ((e = t(d)),
                              (i = []),
                              t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
                                  i[t] = l._num(e.css("padding" + n));
                              }),
                              (l.containerOffset = e.offset()),
                              (l.containerPosition = e.position()),
                              (l.containerSize = { height: e.innerHeight() - i[3], width: e.innerWidth() - i[1] }),
                              (n = l.containerOffset),
                              (s = l.containerSize.height),
                              (o = l.containerSize.width),
                              (a = l._hasScroll(d, "left") ? d.scrollWidth : o),
                              (r = l._hasScroll(d) ? d.scrollHeight : s),
                              (l.parentData = { element: d, left: n.left, top: n.top, width: a, height: r })));
                },
                resize: function (e) {
                    var i,
                        n,
                        s,
                        o,
                        a = t(this).resizable("instance"),
                        r = a.options,
                        l = a.containerOffset,
                        h = a.position,
                        c = a._aspectRatio || e.shiftKey,
                        u = { top: 0, left: 0 },
                        d = a.containerElement,
                        p = !0;
                    d[0] !== document && /static/.test(d.css("position")) && (u = l),
                        h.left < (a._helper ? l.left : 0) &&
                            ((a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - u.left)), c && ((a.size.height = a.size.width / a.aspectRatio), (p = !1)), (a.position.left = r.helper ? l.left : 0)),
                        h.top < (a._helper ? l.top : 0) &&
                            ((a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top)), c && ((a.size.width = a.size.height * a.aspectRatio), (p = !1)), (a.position.top = a._helper ? l.top : 0)),
                        (s = a.containerElement.get(0) === a.element.parent().get(0)),
                        (o = /relative|absolute/.test(a.containerElement.css("position"))),
                        s && o ? ((a.offset.left = a.parentData.left + a.position.left), (a.offset.top = a.parentData.top + a.position.top)) : ((a.offset.left = a.element.offset().left), (a.offset.top = a.element.offset().top)),
                        (i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - l.left))),
                        (n = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - l.top))),
                        i + a.size.width >= a.parentData.width && ((a.size.width = a.parentData.width - i), c && ((a.size.height = a.size.width / a.aspectRatio), (p = !1))),
                        n + a.size.height >= a.parentData.height && ((a.size.height = a.parentData.height - n), c && ((a.size.width = a.size.height * a.aspectRatio), (p = !1))),
                        p || ((a.position.left = a.prevPosition.left), (a.position.top = a.prevPosition.top), (a.size.width = a.prevSize.width), (a.size.height = a.prevSize.height));
                },
                stop: function () {
                    var e = t(this).resizable("instance"),
                        i = e.options,
                        n = e.containerOffset,
                        s = e.containerPosition,
                        o = e.containerElement,
                        a = t(e.helper),
                        r = a.offset(),
                        l = a.outerWidth() - e.sizeDiff.width,
                        h = a.outerHeight() - e.sizeDiff.height;
                    e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({ left: r.left - s.left - n.left, width: l, height: h }),
                        e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({ left: r.left - s.left - n.left, width: l, height: h });
                },
            }),
            t.ui.plugin.add("resizable", "alsoResize", {
                start: function () {
                    var e = t(this).resizable("instance"),
                        i = e.options;
                    t(i.alsoResize).each(function () {
                        var e = t(this);
                        e.data("ui-resizable-alsoresize", { width: parseFloat(e.width()), height: parseFloat(e.height()), left: parseFloat(e.css("left")), top: parseFloat(e.css("top")) });
                    });
                },
                resize: function (e, i) {
                    var n = t(this).resizable("instance"),
                        s = n.options,
                        o = n.originalSize,
                        a = n.originalPosition,
                        r = { height: n.size.height - o.height || 0, width: n.size.width - o.width || 0, top: n.position.top - a.top || 0, left: n.position.left - a.left || 0 };
                    t(s.alsoResize).each(function () {
                        var e = t(this),
                            n = t(this).data("ui-resizable-alsoresize"),
                            s = {},
                            o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(o, function (t, e) {
                            var i = (n[e] || 0) + (r[e] || 0);
                            i && i >= 0 && (s[e] = i || null);
                        }),
                            e.css(s);
                    });
                },
                stop: function () {
                    t(this).removeData("ui-resizable-alsoresize");
                },
            }),
            t.ui.plugin.add("resizable", "ghost", {
                start: function () {
                    var e = t(this).resizable("instance"),
                        i = e.size;
                    (e.ghost = e.originalElement.clone()),
                        e.ghost.css({ opacity: 0.25, display: "block", position: "relative", height: i.height, width: i.width, margin: 0, left: 0, top: 0 }),
                        e._addClass(e.ghost, "ui-resizable-ghost"),
                        t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost),
                        e.ghost.appendTo(e.helper);
                },
                resize: function () {
                    var e = t(this).resizable("instance");
                    e.ghost && e.ghost.css({ position: "relative", height: e.size.height, width: e.size.width });
                },
                stop: function () {
                    var e = t(this).resizable("instance");
                    e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
                },
            }),
            t.ui.plugin.add("resizable", "grid", {
                resize: function () {
                    var e,
                        i = t(this).resizable("instance"),
                        n = i.options,
                        s = i.size,
                        o = i.originalSize,
                        a = i.originalPosition,
                        r = i.axis,
                        l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                        h = l[0] || 1,
                        c = l[1] || 1,
                        u = Math.round((s.width - o.width) / h) * h,
                        d = Math.round((s.height - o.height) / c) * c,
                        p = o.width + u,
                        f = o.height + d,
                        g = n.maxWidth && n.maxWidth < p,
                        m = n.maxHeight && n.maxHeight < f,
                        v = n.minWidth && n.minWidth > p,
                        b = n.minHeight && n.minHeight > f;
                    (n.grid = l),
                        v && (p += h),
                        b && (f += c),
                        g && (p -= h),
                        m && (f -= c),
                        /^(se|s|e)$/.test(r)
                            ? ((i.size.width = p), (i.size.height = f))
                            : /^(ne)$/.test(r)
                            ? ((i.size.width = p), (i.size.height = f), (i.position.top = a.top - d))
                            : /^(sw)$/.test(r)
                            ? ((i.size.width = p), (i.size.height = f), (i.position.left = a.left - u))
                            : ((f - c <= 0 || p - h <= 0) && (e = i._getPaddingPlusBorderDimensions(this)),
                              f - c > 0 ? ((i.size.height = f), (i.position.top = a.top - d)) : ((f = c - e.height), (i.size.height = f), (i.position.top = a.top + o.height - f)),
                              p - h > 0 ? ((i.size.width = p), (i.position.left = a.left - u)) : ((p = h - e.width), (i.size.width = p), (i.position.left = a.left + o.width - p)));
                },
            });
        t.ui.resizable,
            t.widget("ui.selectable", t.ui.mouse, {
                version: "1.12.1",
                options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null },
                _create: function () {
                    var e = this;
                    this._addClass("ui-selectable"),
                        (this.dragged = !1),
                        (this.refresh = function () {
                            (e.elementPos = t(e.element[0]).offset()),
                                (e.selectees = t(e.options.filter, e.element[0])),
                                e._addClass(e.selectees, "ui-selectee"),
                                e.selectees.each(function () {
                                    var i = t(this),
                                        n = i.offset(),
                                        s = { left: n.left - e.elementPos.left, top: n.top - e.elementPos.top };
                                    t.data(this, "selectable-item", {
                                        element: this,
                                        $element: i,
                                        left: s.left,
                                        top: s.top,
                                        right: s.left + i.outerWidth(),
                                        bottom: s.top + i.outerHeight(),
                                        startselected: !1,
                                        selected: i.hasClass("ui-selected"),
                                        selecting: i.hasClass("ui-selecting"),
                                        unselecting: i.hasClass("ui-unselecting"),
                                    });
                                });
                        }),
                        this.refresh(),
                        this._mouseInit(),
                        (this.helper = t("<div>")),
                        this._addClass(this.helper, "ui-selectable-helper");
                },
                _destroy: function () {
                    this.selectees.removeData("selectable-item"), this._mouseDestroy();
                },
                _mouseStart: function (e) {
                    var i = this,
                        n = this.options;
                    (this.opos = [e.pageX, e.pageY]),
                        (this.elementPos = t(this.element[0]).offset()),
                        this.options.disabled ||
                            ((this.selectees = t(n.filter, this.element[0])),
                            this._trigger("start", e),
                            t(n.appendTo).append(this.helper),
                            this.helper.css({ left: e.pageX, top: e.pageY, width: 0, height: 0 }),
                            n.autoRefresh && this.refresh(),
                            this.selectees.filter(".ui-selected").each(function () {
                                var n = t.data(this, "selectable-item");
                                (n.startselected = !0),
                                    e.metaKey ||
                                        e.ctrlKey ||
                                        (i._removeClass(n.$element, "ui-selected"), (n.selected = !1), i._addClass(n.$element, "ui-unselecting"), (n.unselecting = !0), i._trigger("unselecting", e, { unselecting: n.element }));
                            }),
                            t(e.target)
                                .parents()
                                .addBack()
                                .each(function () {
                                    var n,
                                        s = t.data(this, "selectable-item");
                                    if (s)
                                        return (
                                            (n = (!e.metaKey && !e.ctrlKey) || !s.$element.hasClass("ui-selected")),
                                            i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"),
                                            (s.unselecting = !n),
                                            (s.selecting = n),
                                            (s.selected = n),
                                            n ? i._trigger("selecting", e, { selecting: s.element }) : i._trigger("unselecting", e, { unselecting: s.element }),
                                            !1
                                        );
                                }));
                },
                _mouseDrag: function (e) {
                    if (((this.dragged = !0), !this.options.disabled)) {
                        var i,
                            n = this,
                            s = this.options,
                            o = this.opos[0],
                            a = this.opos[1],
                            r = e.pageX,
                            l = e.pageY;
                        return (
                            o > r && ((i = r), (r = o), (o = i)),
                            a > l && ((i = l), (l = a), (a = i)),
                            this.helper.css({ left: o, top: a, width: r - o, height: l - a }),
                            this.selectees.each(function () {
                                var i = t.data(this, "selectable-item"),
                                    h = !1,
                                    c = {};
                                i &&
                                    i.element !== n.element[0] &&
                                    ((c.left = i.left + n.elementPos.left),
                                    (c.right = i.right + n.elementPos.left),
                                    (c.top = i.top + n.elementPos.top),
                                    (c.bottom = i.bottom + n.elementPos.top),
                                    "touch" === s.tolerance ? (h = !(c.left > r || c.right < o || c.top > l || c.bottom < a)) : "fit" === s.tolerance && (h = c.left > o && c.right < r && c.top > a && c.bottom < l),
                                    h
                                        ? (i.selected && (n._removeClass(i.$element, "ui-selected"), (i.selected = !1)),
                                          i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), (i.unselecting = !1)),
                                          i.selecting || (n._addClass(i.$element, "ui-selecting"), (i.selecting = !0), n._trigger("selecting", e, { selecting: i.element })))
                                        : (i.selecting &&
                                              ((e.metaKey || e.ctrlKey) && i.startselected
                                                  ? (n._removeClass(i.$element, "ui-selecting"), (i.selecting = !1), n._addClass(i.$element, "ui-selected"), (i.selected = !0))
                                                  : (n._removeClass(i.$element, "ui-selecting"),
                                                    (i.selecting = !1),
                                                    i.startselected && (n._addClass(i.$element, "ui-unselecting"), (i.unselecting = !0)),
                                                    n._trigger("unselecting", e, { unselecting: i.element }))),
                                          i.selected &&
                                              (e.metaKey ||
                                                  e.ctrlKey ||
                                                  i.startselected ||
                                                  (n._removeClass(i.$element, "ui-selected"), (i.selected = !1), n._addClass(i.$element, "ui-unselecting"), (i.unselecting = !0), n._trigger("unselecting", e, { unselecting: i.element })))));
                            }),
                            !1
                        );
                    }
                },
                _mouseStop: function (e) {
                    var i = this;
                    return (
                        (this.dragged = !1),
                        t(".ui-unselecting", this.element[0]).each(function () {
                            var n = t.data(this, "selectable-item");
                            i._removeClass(n.$element, "ui-unselecting"), (n.unselecting = !1), (n.startselected = !1), i._trigger("unselected", e, { unselected: n.element });
                        }),
                        t(".ui-selecting", this.element[0]).each(function () {
                            var n = t.data(this, "selectable-item");
                            i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), (n.selecting = !1), (n.selected = !0), (n.startselected = !0), i._trigger("selected", e, { selected: n.element });
                        }),
                        this._trigger("stop", e),
                        this.helper.remove(),
                        !1
                    );
                },
            }),
            t.widget("ui.sortable", t.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "sort",
                ready: !1,
                options: {
                    appendTo: "parent",
                    axis: !1,
                    connectWith: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    dropOnEmpty: !0,
                    forcePlaceholderSize: !1,
                    forceHelperSize: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    items: "> *",
                    opacity: !1,
                    placeholder: !1,
                    revert: !1,
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    scope: "default",
                    tolerance: "intersect",
                    zIndex: 1e3,
                    activate: null,
                    beforeStop: null,
                    change: null,
                    deactivate: null,
                    out: null,
                    over: null,
                    receive: null,
                    remove: null,
                    sort: null,
                    start: null,
                    stop: null,
                    update: null,
                },
                _isOverAxis: function (t, e, i) {
                    return t >= e && t < e + i;
                },
                _isFloating: function (t) {
                    return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
                },
                _create: function () {
                    (this.containerCache = {}), this._addClass("ui-sortable"), this.refresh(), (this.offset = this.element.offset()), this._mouseInit(), this._setHandleClassName(), (this.ready = !0);
                },
                _setOption: function (t, e) {
                    this._super(t, e), "handle" === t && this._setHandleClassName();
                },
                _setHandleClassName: function () {
                    var e = this;
                    this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"),
                        t.each(this.items, function () {
                            e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
                        });
                },
                _destroy: function () {
                    this._mouseDestroy();
                    for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                    return this;
                },
                _mouseCapture: function (e, i) {
                    var n = null,
                        s = !1,
                        o = this;
                    return (
                        !this.reverting &&
                        !this.options.disabled &&
                        "static" !== this.options.type &&
                        (this._refreshItems(e),
                        t(e.target)
                            .parents()
                            .each(function () {
                                if (t.data(this, o.widgetName + "-item") === o) return (n = t(this)), !1;
                            }),
                        t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)),
                        !!n &&
                            !(
                                this.options.handle &&
                                !i &&
                                (t(this.options.handle, n)
                                    .find("*")
                                    .addBack()
                                    .each(function () {
                                        this === e.target && (s = !0);
                                    }),
                                !s)
                            ) &&
                            ((this.currentItem = n), this._removeCurrentsFromItems(), !0))
                    );
                },
                _mouseStart: function (e, i, n) {
                    var s,
                        o,
                        a = this.options;
                    if (
                        ((this.currentContainer = this),
                        this.refreshPositions(),
                        (this.helper = this._createHelper(e)),
                        this._cacheHelperProportions(),
                        this._cacheMargins(),
                        (this.scrollParent = this.helper.scrollParent()),
                        (this.offset = this.currentItem.offset()),
                        (this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }),
                        t.extend(this.offset, { click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }),
                        this.helper.css("position", "absolute"),
                        (this.cssPosition = this.helper.css("position")),
                        (this.originalPosition = this._generatePosition(e)),
                        (this.originalPageX = e.pageX),
                        (this.originalPageY = e.pageY),
                        a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
                        (this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }),
                        this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
                        this._createPlaceholder(),
                        a.containment && this._setContainment(),
                        a.cursor &&
                            "auto" !== a.cursor &&
                            ((o = this.document.find("body")), (this.storedCursor = o.css("cursor")), o.css("cursor", a.cursor), (this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o))),
                        a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)),
                        a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)),
                        this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
                        this._trigger("start", e, this._uiHash()),
                        this._preserveHelperProportions || this._cacheHelperProportions(),
                        !n)
                    )
                        for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
                    return (
                        t.ui.ddmanager && (t.ui.ddmanager.current = this),
                        t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
                        (this.dragging = !0),
                        this._addClass(this.helper, "ui-sortable-helper"),
                        this._mouseDrag(e),
                        !0
                    );
                },
                _mouseDrag: function (e) {
                    var i,
                        n,
                        s,
                        o,
                        a = this.options,
                        r = !1;
                    for (
                        this.position = this._generatePosition(e),
                            this.positionAbs = this._convertPositionTo("absolute"),
                            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
                            this.options.scroll &&
                                (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName
                                    ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity
                                          ? (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed)
                                          : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed),
                                      this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity
                                          ? (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed)
                                          : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed))
                                    : (e.pageY - this.document.scrollTop() < a.scrollSensitivity
                                          ? (r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed))
                                          : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)),
                                      e.pageX - this.document.scrollLeft() < a.scrollSensitivity
                                          ? (r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed))
                                          : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))),
                                r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)),
                            this.positionAbs = this._convertPositionTo("absolute"),
                            (this.options.axis && "y" === this.options.axis) || (this.helper[0].style.left = this.position.left + "px"),
                            (this.options.axis && "x" === this.options.axis) || (this.helper[0].style.top = this.position.top + "px"),
                            i = this.items.length - 1;
                        i >= 0;
                        i--
                    )
                        if (
                            ((n = this.items[i]),
                            (s = n.item[0]),
                            (o = this._intersectsWithPointer(n)),
                            o &&
                                n.instance === this.currentContainer &&
                                !(s === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === s || t.contains(this.placeholder[0], s) || ("semi-dynamic" === this.options.type && t.contains(this.element[0], s))))
                        ) {
                            if (((this.direction = 1 === o ? "down" : "up"), "pointer" !== this.options.tolerance && !this._intersectsWithSides(n))) break;
                            this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                            break;
                        }
                    return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), (this.lastPositionAbs = this.positionAbs), !1;
                },
                _mouseStop: function (e, i) {
                    if (e) {
                        if ((t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert)) {
                            var n = this,
                                s = this.placeholder.offset(),
                                o = this.options.axis,
                                a = {};
                            (o && "x" !== o) || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
                                (o && "y" !== o) || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
                                (this.reverting = !0),
                                t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
                                    n._clear(e);
                                });
                        } else this._clear(e, i);
                        return !1;
                    }
                },
                cancel: function () {
                    if (this.dragging) {
                        this._mouseUp(new t.Event("mouseup", { target: null })),
                            "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                        for (var e = this.containers.length - 1; e >= 0; e--)
                            this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
                                this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), (this.containers[e].containerCache.over = 0));
                    }
                    return (
                        this.placeholder &&
                            (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
                            t.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }),
                            this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
                        this
                    );
                },
                serialize: function (e) {
                    var i = this._getItemsAsjQuery(e && e.connected),
                        n = [];
                    return (
                        (e = e || {}),
                        t(i).each(function () {
                            var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                            i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
                        }),
                        !n.length && e.key && n.push(e.key + "="),
                        n.join("&")
                    );
                },
                toArray: function (e) {
                    var i = this._getItemsAsjQuery(e && e.connected),
                        n = [];
                    return (
                        (e = e || {}),
                        i.each(function () {
                            n.push(t(e.item || this).attr(e.attribute || "id") || "");
                        }),
                        n
                    );
                },
                _intersectsWith: function (t) {
                    var e = this.positionAbs.left,
                        i = e + this.helperProportions.width,
                        n = this.positionAbs.top,
                        s = n + this.helperProportions.height,
                        o = t.left,
                        a = o + t.width,
                        r = t.top,
                        l = r + t.height,
                        h = this.offset.click.top,
                        c = this.offset.click.left,
                        u = "x" === this.options.axis || (n + h > r && n + h < l),
                        d = "y" === this.options.axis || (e + c > o && e + c < a),
                        p = u && d;
                    return "pointer" === this.options.tolerance ||
                        this.options.forcePointerForContainers ||
                        ("pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"])
                        ? p
                        : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l;
                },
                _intersectsWithPointer: function (t) {
                    var e,
                        i,
                        n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                        s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                        o = n && s;
                    return !!o && ((e = this._getDragVerticalDirection()), (i = this._getDragHorizontalDirection()), this.floating ? ("right" === i || "down" === e ? 2 : 1) : e && ("down" === e ? 2 : 1));
                },
                _intersectsWithSides: function (t) {
                    var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                        i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                        n = this._getDragVerticalDirection(),
                        s = this._getDragHorizontalDirection();
                    return this.floating && s ? ("right" === s && i) || ("left" === s && !i) : n && (("down" === n && e) || ("up" === n && !e));
                },
                _getDragVerticalDirection: function () {
                    var t = this.positionAbs.top - this.lastPositionAbs.top;
                    return 0 !== t && (t > 0 ? "down" : "up");
                },
                _getDragHorizontalDirection: function () {
                    var t = this.positionAbs.left - this.lastPositionAbs.left;
                    return 0 !== t && (t > 0 ? "right" : "left");
                },
                refresh: function (t) {
                    return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this;
                },
                _connectWith: function () {
                    var t = this.options;
                    return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith;
                },
                _getItemsAsjQuery: function (e) {
                    function i() {
                        r.push(this);
                    }
                    var n,
                        s,
                        o,
                        a,
                        r = [],
                        l = [],
                        h = this._connectWith();
                    if (h && e)
                        for (n = h.length - 1; n >= 0; n--)
                            for (o = t(h[n], this.document[0]), s = o.length - 1; s >= 0; s--)
                                (a = t.data(o[s], this.widgetFullName)),
                                    a &&
                                        a !== this &&
                                        !a.options.disabled &&
                                        l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
                    for (
                        l.push([
                            t.isFunction(this.options.items)
                                ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem })
                                : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
                            this,
                        ]),
                            n = l.length - 1;
                        n >= 0;
                        n--
                    )
                        l[n][0].each(i);
                    return t(r);
                },
                _removeCurrentsFromItems: function () {
                    var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                    this.items = t.grep(this.items, function (t) {
                        for (var i = 0; i < e.length; i++) if (e[i] === t.item[0]) return !1;
                        return !0;
                    });
                },
                _refreshItems: function (e) {
                    (this.items = []), (this.containers = [this]);
                    var i,
                        n,
                        s,
                        o,
                        a,
                        r,
                        l,
                        h,
                        c = this.items,
                        u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, { item: this.currentItem }) : t(this.options.items, this.element), this]],
                        d = this._connectWith();
                    if (d && this.ready)
                        for (i = d.length - 1; i >= 0; i--)
                            for (s = t(d[i], this.document[0]), n = s.length - 1; n >= 0; n--)
                                (o = t.data(s[n], this.widgetFullName)),
                                    o &&
                                        o !== this &&
                                        !o.options.disabled &&
                                        (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, { item: this.currentItem }) : t(o.options.items, o.element), o]), this.containers.push(o));
                    for (i = u.length - 1; i >= 0; i--)
                        for (a = u[i][1], r = u[i][0], n = 0, h = r.length; n < h; n++) (l = t(r[n])), l.data(this.widgetName + "-item", a), c.push({ item: l, instance: a, width: 0, height: 0, left: 0, top: 0 });
                },
                refreshPositions: function (e) {
                    (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item))), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                    var i, n, s, o;
                    for (i = this.items.length - 1; i >= 0; i--)
                        (n = this.items[i]),
                            (n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0]) ||
                                ((s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item),
                                e || ((n.width = s.outerWidth()), (n.height = s.outerHeight())),
                                (o = s.offset()),
                                (n.left = o.left),
                                (n.top = o.top));
                    if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                    else
                        for (i = this.containers.length - 1; i >= 0; i--)
                            (o = this.containers[i].element.offset()),
                                (this.containers[i].containerCache.left = o.left),
                                (this.containers[i].containerCache.top = o.top),
                                (this.containers[i].containerCache.width = this.containers[i].element.outerWidth()),
                                (this.containers[i].containerCache.height = this.containers[i].element.outerHeight());
                    return this;
                },
                _createPlaceholder: function (e) {
                    e = e || this;
                    var i,
                        n = e.options;
                    (n.placeholder && n.placeholder.constructor !== String) ||
                        ((i = n.placeholder),
                        (n.placeholder = {
                            element: function () {
                                var n = e.currentItem[0].nodeName.toLowerCase(),
                                    s = t("<" + n + ">", e.document[0]);
                                return (
                                    e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"),
                                    "tbody" === n
                                        ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s))
                                        : "tr" === n
                                        ? e._createTrPlaceholder(e.currentItem, s)
                                        : "img" === n && s.attr("src", e.currentItem.attr("src")),
                                    i || s.css("visibility", "hidden"),
                                    s
                                );
                            },
                            update: function (t, s) {
                                (i && !n.forcePlaceholderSize) ||
                                    (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)),
                                    s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
                            },
                        })),
                        (e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem))),
                        e.currentItem.after(e.placeholder),
                        n.placeholder.update(e, e.placeholder);
                },
                _createTrPlaceholder: function (e, i) {
                    var n = this;
                    e.children().each(function () {
                        t("<td>&#160;</td>", n.document[0])
                            .attr("colspan", t(this).attr("colspan") || 1)
                            .appendTo(i);
                    });
                },
                _contactContainers: function (e) {
                    var i,
                        n,
                        s,
                        o,
                        a,
                        r,
                        l,
                        h,
                        c,
                        u,
                        d = null,
                        p = null;
                    for (i = this.containers.length - 1; i >= 0; i--)
                        if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                            if (this._intersectsWith(this.containers[i].containerCache)) {
                                if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                                (d = this.containers[i]), (p = i);
                            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), (this.containers[i].containerCache.over = 0));
                    if (d)
                        if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), (this.containers[p].containerCache.over = 1));
                        else {
                            for (s = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--)
                                t.contains(this.containers[p].element[0], this.items[n].item[0]) &&
                                    this.items[n].item[0] !== this.currentItem[0] &&
                                    ((l = this.items[n].item.offset()[a]),
                                    (h = !1),
                                    e[u] - l > this.items[n][r] / 2 && (h = !0),
                                    Math.abs(e[u] - l) < s && ((s = Math.abs(e[u] - l)), (o = this.items[n]), (this.direction = h ? "up" : "down")));
                            if (!o && !this.options.dropOnEmpty) return;
                            if (this.currentContainer === this.containers[p])
                                return void (this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), (this.currentContainer.containerCache.over = 1)));
                            o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0),
                                this._trigger("change", e, this._uiHash()),
                                this.containers[p]._trigger("change", e, this._uiHash(this)),
                                (this.currentContainer = this.containers[p]),
                                this.options.placeholder.update(this.currentContainer, this.placeholder),
                                this.containers[p]._trigger("over", e, this._uiHash(this)),
                                (this.containers[p].containerCache.over = 1);
                        }
                },
                _createHelper: function (e) {
                    var i = this.options,
                        n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                    return (
                        n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]),
                        n[0] === this.currentItem[0] &&
                            (this._storedCSS = {
                                width: this.currentItem[0].style.width,
                                height: this.currentItem[0].style.height,
                                position: this.currentItem.css("position"),
                                top: this.currentItem.css("top"),
                                left: this.currentItem.css("left"),
                            }),
                        (n[0].style.width && !i.forceHelperSize) || n.width(this.currentItem.width()),
                        (n[0].style.height && !i.forceHelperSize) || n.height(this.currentItem.height()),
                        n
                    );
                },
                _adjustOffsetFromHelper: function (e) {
                    "string" == typeof e && (e = e.split(" ")),
                        t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
                        "left" in e && (this.offset.click.left = e.left + this.margins.left),
                        "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
                        "top" in e && (this.offset.click.top = e.top + this.margins.top),
                        "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
                },
                _getParentOffset: function () {
                    this.offsetParent = this.helper.offsetParent();
                    var e = this.offsetParent.offset();
                    return (
                        "absolute" === this.cssPosition &&
                            this.scrollParent[0] !== this.document[0] &&
                            t.contains(this.scrollParent[0], this.offsetParent[0]) &&
                            ((e.left += this.scrollParent.scrollLeft()), (e.top += this.scrollParent.scrollTop())),
                        (this.offsetParent[0] === this.document[0].body || (this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie)) && (e = { top: 0, left: 0 }),
                        { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
                    );
                },
                _getRelativeOffset: function () {
                    if ("relative" === this.cssPosition) {
                        var t = this.currentItem.position();
                        return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() };
                    }
                    return { top: 0, left: 0 };
                },
                _cacheMargins: function () {
                    this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 };
                },
                _cacheHelperProportions: function () {
                    this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
                },
                _setContainment: function () {
                    var e,
                        i,
                        n,
                        s = this.options;
                    "parent" === s.containment && (s.containment = this.helper[0].parentNode),
                        ("document" !== s.containment && "window" !== s.containment) ||
                            (this.containment = [
                                0 - this.offset.relative.left - this.offset.parent.left,
                                0 - this.offset.relative.top - this.offset.parent.top,
                                "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left,
                                ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) -
                                    this.helperProportions.height -
                                    this.margins.top,
                            ]),
                        /^(document|window|parent)$/.test(s.containment) ||
                            ((e = t(s.containment)[0]),
                            (i = t(s.containment).offset()),
                            (n = "hidden" !== t(e).css("overflow")),
                            (this.containment = [
                                i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left,
                                i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top,
                                i.left +
                                    (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
                                    (parseInt(t(e).css("borderLeftWidth"), 10) || 0) -
                                    (parseInt(t(e).css("paddingRight"), 10) || 0) -
                                    this.helperProportions.width -
                                    this.margins.left,
                                i.top +
                                    (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) -
                                    (parseInt(t(e).css("borderTopWidth"), 10) || 0) -
                                    (parseInt(t(e).css("paddingBottom"), 10) || 0) -
                                    this.helperProportions.height -
                                    this.margins.top,
                            ]));
                },
                _convertPositionTo: function (e, i) {
                    i || (i = this.position);
                    var n = "absolute" === e ? 1 : -1,
                        s = "absolute" !== this.cssPosition || (this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0])) ? this.scrollParent : this.offsetParent,
                        o = /(html|body)/i.test(s[0].tagName);
                    return {
                        top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                        left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n,
                    };
                },
                _generatePosition: function (e) {
                    var i,
                        n,
                        s = this.options,
                        o = e.pageX,
                        a = e.pageY,
                        r = "absolute" !== this.cssPosition || (this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0])) ? this.scrollParent : this.offsetParent,
                        l = /(html|body)/i.test(r[0].tagName);
                    return (
                        "relative" !== this.cssPosition || (this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0]) || (this.offset.relative = this._getRelativeOffset()),
                        this.originalPosition &&
                            (this.containment &&
                                (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left),
                                e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top),
                                e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left),
                                e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)),
                            s.grid &&
                                ((i = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1]),
                                (a = this.containment
                                    ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3]
                                        ? i
                                        : i - this.offset.click.top >= this.containment[1]
                                        ? i - s.grid[1]
                                        : i + s.grid[1]
                                    : i),
                                (n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0]),
                                (o = this.containment
                                    ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2]
                                        ? n
                                        : n - this.offset.click.left >= this.containment[0]
                                        ? n - s.grid[0]
                                        : n + s.grid[0]
                                    : n))),
                        {
                            top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                            left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft()),
                        }
                    );
                },
                _rearrange: function (t, e, i, n) {
                    i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), (this.counter = this.counter ? ++this.counter : 1);
                    var s = this.counter;
                    this._delay(function () {
                        s === this.counter && this.refreshPositions(!n);
                    });
                },
                _clear: function (t, e) {
                    function i(t, e, i) {
                        return function (n) {
                            i._trigger(t, n, e._uiHash(e));
                        };
                    }
                    this.reverting = !1;
                    var n,
                        s = [];
                    if ((!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), (this._noFinalSort = null), this.helper[0] === this.currentItem[0])) {
                        for (n in this._storedCSS) ("auto" !== this._storedCSS[n] && "static" !== this._storedCSS[n]) || (this._storedCSS[n] = "");
                        this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
                    } else this.currentItem.show();
                    for (
                        this.fromOutside &&
                            !e &&
                            s.push(function (t) {
                                this._trigger("receive", t, this._uiHash(this.fromOutside));
                            }),
                            (!this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0]) ||
                                e ||
                                s.push(function (t) {
                                    this._trigger("update", t, this._uiHash());
                                }),
                            this !== this.currentContainer &&
                                (e ||
                                    (s.push(function (t) {
                                        this._trigger("remove", t, this._uiHash());
                                    }),
                                    s.push(
                                        function (t) {
                                            return function (e) {
                                                t._trigger("receive", e, this._uiHash(this));
                                            };
                                        }.call(this, this.currentContainer)
                                    ),
                                    s.push(
                                        function (t) {
                                            return function (e) {
                                                t._trigger("update", e, this._uiHash(this));
                                            };
                                        }.call(this, this.currentContainer)
                                    ))),
                            n = this.containers.length - 1;
                        n >= 0;
                        n--
                    )
                        e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), (this.containers[n].containerCache.over = 0));
                    if (
                        (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()),
                        this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
                        this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
                        (this.dragging = !1),
                        e || this._trigger("beforeStop", t, this._uiHash()),
                        this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                        this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), (this.helper = null)),
                        !e)
                    ) {
                        for (n = 0; n < s.length; n++) s[n].call(this, t);
                        this._trigger("stop", t, this._uiHash());
                    }
                    return (this.fromOutside = !1), !this.cancelHelperRemoval;
                },
                _trigger: function () {
                    t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
                },
                _uiHash: function (e) {
                    var i = e || this;
                    return { helper: i.helper, placeholder: i.placeholder || t([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: e ? e.element : null };
                },
            }),
            t.widget("ui.accordion", {
                version: "1.12.1",
                options: {
                    active: 0,
                    animate: {},
                    classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" },
                    collapsible: !1,
                    event: "click",
                    header: "> li > :first-child, > :not(li):even",
                    heightStyle: "auto",
                    icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" },
                    activate: null,
                    beforeActivate: null,
                },
                hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" },
                showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" },
                _create: function () {
                    var e = this.options;
                    (this.prevShow = this.prevHide = t()),
                        this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
                        this.element.attr("role", "tablist"),
                        e.collapsible || (e.active !== !1 && null != e.active) || (e.active = 0),
                        this._processPanels(),
                        e.active < 0 && (e.active += this.headers.length),
                        this._refresh();
                },
                _getCreateEventData: function () {
                    return { header: this.active, panel: this.active.length ? this.active.next() : t() };
                },
                _createIcons: function () {
                    var e,
                        i,
                        n = this.options.icons;
                    n &&
                        ((e = t("<span>")),
                        this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header),
                        e.prependTo(this.headers),
                        (i = this.active.children(".ui-accordion-header-icon")),
                        this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
                },
                _destroyIcons: function () {
                    this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
                },
                _destroy: function () {
                    var t;
                    this.element.removeAttr("role"),
                        this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),
                        this._destroyIcons(),
                        (t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId()),
                        "content" !== this.options.heightStyle && t.css("height", "");
                },
                _setOption: function (t, e) {
                    return "active" === t
                        ? void this._activate(e)
                        : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)),
                          this._super(t, e),
                          "collapsible" !== t || e || this.options.active !== !1 || this._activate(0),
                          void ("icons" === t && (this._destroyIcons(), e && this._createIcons())));
                },
                _setOptionDisabled: function (t) {
                    this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t);
                },
                _keydown: function (e) {
                    if (!e.altKey && !e.ctrlKey) {
                        var i = t.ui.keyCode,
                            n = this.headers.length,
                            s = this.headers.index(e.target),
                            o = !1;
                        switch (e.keyCode) {
                            case i.RIGHT:
                            case i.DOWN:
                                o = this.headers[(s + 1) % n];
                                break;
                            case i.LEFT:
                            case i.UP:
                                o = this.headers[(s - 1 + n) % n];
                                break;
                            case i.SPACE:
                            case i.ENTER:
                                this._eventHandler(e);
                                break;
                            case i.HOME:
                                o = this.headers[0];
                                break;
                            case i.END:
                                o = this.headers[n - 1];
                        }
                        o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault());
                    }
                },
                _panelKeyDown: function (e) {
                    e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus");
                },
                refresh: function () {
                    var e = this.options;
                    this._processPanels(),
                        (e.active === !1 && e.collapsible === !0) || !this.headers.length
                            ? ((e.active = !1), (this.active = t()))
                            : e.active === !1
                            ? this._activate(0)
                            : this.active.length && !t.contains(this.element[0], this.active[0])
                            ? this.headers.length === this.headers.find(".ui-state-disabled").length
                                ? ((e.active = !1), (this.active = t()))
                                : this._activate(Math.max(0, e.active - 1))
                            : (e.active = this.headers.index(this.active)),
                        this._destroyIcons(),
                        this._refresh();
                },
                _processPanels: function () {
                    var t = this.headers,
                        e = this.panels;
                    (this.headers = this.element.find(this.options.header)),
                        this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"),
                        (this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide()),
                        this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"),
                        e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
                },
                _refresh: function () {
                    var e,
                        i = this.options,
                        n = i.heightStyle,
                        s = this.element.parent();
                    (this.active = this._findActive(i.active)),
                        this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"),
                        this._addClass(this.active.next(), "ui-accordion-content-active"),
                        this.active.next().show(),
                        this.headers
                            .attr("role", "tab")
                            .each(function () {
                                var e = t(this),
                                    i = e.uniqueId().attr("id"),
                                    n = e.next(),
                                    s = n.uniqueId().attr("id");
                                e.attr("aria-controls", s), n.attr("aria-labelledby", i);
                            })
                            .next()
                            .attr("role", "tabpanel"),
                        this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(),
                        this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0),
                        this._createIcons(),
                        this._setupEvents(i.event),
                        "fill" === n
                            ? ((e = s.height()),
                              this.element.siblings(":visible").each(function () {
                                  var i = t(this),
                                      n = i.css("position");
                                  "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0));
                              }),
                              this.headers.each(function () {
                                  e -= t(this).outerHeight(!0);
                              }),
                              this.headers
                                  .next()
                                  .each(function () {
                                      t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()));
                                  })
                                  .css("overflow", "auto"))
                            : "auto" === n &&
                              ((e = 0),
                              this.headers
                                  .next()
                                  .each(function () {
                                      var i = t(this).is(":visible");
                                      i || t(this).show(), (e = Math.max(e, t(this).css("height", "").height())), i || t(this).hide();
                                  })
                                  .height(e));
                },
                _activate: function (e) {
                    var i = this._findActive(e)[0];
                    i !== this.active[0] && ((i = i || this.active[0]), this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }));
                },
                _findActive: function (e) {
                    return "number" == typeof e ? this.headers.eq(e) : t();
                },
                _setupEvents: function (e) {
                    var i = { keydown: "_keydown" };
                    e &&
                        t.each(e.split(" "), function (t, e) {
                            i[e] = "_eventHandler";
                        }),
                        this._off(this.headers.add(this.headers.next())),
                        this._on(this.headers, i),
                        this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
                        this._hoverable(this.headers),
                        this._focusable(this.headers);
                },
                _eventHandler: function (e) {
                    var i,
                        n,
                        s = this.options,
                        o = this.active,
                        a = t(e.currentTarget),
                        r = a[0] === o[0],
                        l = r && s.collapsible,
                        h = l ? t() : a.next(),
                        c = o.next(),
                        u = { oldHeader: o, oldPanel: c, newHeader: l ? t() : a, newPanel: h };
                    e.preventDefault(),
                        (r && !s.collapsible) ||
                            this._trigger("beforeActivate", e, u) === !1 ||
                            ((s.active = !l && this.headers.index(a)),
                            (this.active = r ? t() : a),
                            this._toggle(u),
                            this._removeClass(o, "ui-accordion-header-active", "ui-state-active"),
                            s.icons && ((i = o.children(".ui-accordion-header-icon")), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)),
                            r ||
                                (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"),
                                s.icons && ((n = a.children(".ui-accordion-header-icon")), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)),
                                this._addClass(a.next(), "ui-accordion-content-active")));
                },
                _toggle: function (e) {
                    var i = e.newPanel,
                        n = this.prevShow.length ? this.prevShow : e.oldPanel;
                    this.prevShow.add(this.prevHide).stop(!0, !0),
                        (this.prevShow = i),
                        (this.prevHide = n),
                        this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)),
                        n.attr({ "aria-hidden": "true" }),
                        n.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }),
                        i.length && n.length
                            ? n.prev().attr({ tabIndex: -1, "aria-expanded": "false" })
                            : i.length &&
                              this.headers
                                  .filter(function () {
                                      return 0 === parseInt(t(this).attr("tabIndex"), 10);
                                  })
                                  .attr("tabIndex", -1),
                        i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
                },
                _animate: function (t, e, i) {
                    var n,
                        s,
                        o,
                        a = this,
                        r = 0,
                        l = t.css("box-sizing"),
                        h = t.length && (!e.length || t.index() < e.index()),
                        c = this.options.animate || {},
                        u = (h && c.down) || c,
                        d = function () {
                            a._toggleComplete(i);
                        };
                    return (
                        "number" == typeof u && (o = u),
                        "string" == typeof u && (s = u),
                        (s = s || u.easing || c.easing),
                        (o = o || u.duration || c.duration),
                        e.length
                            ? t.length
                                ? ((n = t.show().outerHeight()),
                                  e.animate(this.hideProps, {
                                      duration: o,
                                      easing: s,
                                      step: function (t, e) {
                                          e.now = Math.round(t);
                                      },
                                  }),
                                  void t.hide().animate(this.showProps, {
                                      duration: o,
                                      easing: s,
                                      complete: d,
                                      step: function (t, i) {
                                          (i.now = Math.round(t)), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && ((i.now = Math.round(n - e.outerHeight() - r)), (r = 0));
                                      },
                                  }))
                                : e.animate(this.hideProps, o, s, d)
                            : t.animate(this.showProps, o, s, d)
                    );
                },
                _toggleComplete: function (t) {
                    var e = t.oldPanel,
                        i = e.prev();
                    this._removeClass(e, "ui-accordion-content-active"),
                        this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"),
                        e.length && (e.parent()[0].className = e.parent()[0].className),
                        this._trigger("activate", null, t);
                },
            }),
            t.widget("ui.menu", {
                version: "1.12.1",
                defaultElement: "<ul>",
                delay: 300,
                options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null },
                _create: function () {
                    (this.activeMenu = this.element),
                        (this.mouseHandled = !1),
                        this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }),
                        this._addClass("ui-menu", "ui-widget ui-widget-content"),
                        this._on({
                            "mousedown .ui-menu-item": function (t) {
                                t.preventDefault();
                            },
                            "click .ui-menu-item": function (e) {
                                var i = t(e.target),
                                    n = t(t.ui.safeActiveElement(this.document[0]));
                                !this.mouseHandled &&
                                    i.not(".ui-state-disabled").length &&
                                    (this.select(e),
                                    e.isPropagationStopped() || (this.mouseHandled = !0),
                                    i.has(".ui-menu").length
                                        ? this.expand(e)
                                        : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                            },
                            "mouseenter .ui-menu-item": function (e) {
                                if (!this.previousFilter) {
                                    var i = t(e.target).closest(".ui-menu-item"),
                                        n = t(e.currentTarget);
                                    i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n));
                                }
                            },
                            mouseleave: "collapseAll",
                            "mouseleave .ui-menu": "collapseAll",
                            focus: function (t, e) {
                                var i = this.active || this.element.find(this.options.items).eq(0);
                                e || this.focus(t, i);
                            },
                            blur: function (e) {
                                this._delay(function () {
                                    var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
                                    i && this.collapseAll(e);
                                });
                            },
                            keydown: "_keydown",
                        }),
                        this.refresh(),
                        this._on(this.document, {
                            click: function (t) {
                                this._closeOnDocumentClick(t) && this.collapseAll(t), (this.mouseHandled = !1);
                            },
                        });
                },
                _destroy: function () {
                    var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                        i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),
                        i.children().each(function () {
                            var e = t(this);
                            e.data("ui-menu-submenu-caret") && e.remove();
                        });
                },
                _keydown: function (e) {
                    var i,
                        n,
                        s,
                        o,
                        a = !0;
                    switch (e.keyCode) {
                        case t.ui.keyCode.PAGE_UP:
                            this.previousPage(e);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            this.nextPage(e);
                            break;
                        case t.ui.keyCode.HOME:
                            this._move("first", "first", e);
                            break;
                        case t.ui.keyCode.END:
                            this._move("last", "last", e);
                            break;
                        case t.ui.keyCode.UP:
                            this.previous(e);
                            break;
                        case t.ui.keyCode.DOWN:
                            this.next(e);
                            break;
                        case t.ui.keyCode.LEFT:
                            this.collapse(e);
                            break;
                        case t.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                            break;
                        case t.ui.keyCode.ENTER:
                        case t.ui.keyCode.SPACE:
                            this._activate(e);
                            break;
                        case t.ui.keyCode.ESCAPE:
                            this.collapse(e);
                            break;
                        default:
                            (a = !1),
                                (n = this.previousFilter || ""),
                                (o = !1),
                                (s = e.keyCode >= 96 && e.keyCode <= 105 ? (e.keyCode - 96).toString() : String.fromCharCode(e.keyCode)),
                                clearTimeout(this.filterTimer),
                                s === n ? (o = !0) : (s = n + s),
                                (i = this._filterMenuItems(s)),
                                (i = o && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i),
                                i.length || ((s = String.fromCharCode(e.keyCode)), (i = this._filterMenuItems(s))),
                                i.length
                                    ? (this.focus(e, i),
                                      (this.previousFilter = s),
                                      (this.filterTimer = this._delay(function () {
                                          delete this.previousFilter;
                                      }, 1e3)))
                                    : delete this.previousFilter;
                    }
                    a && e.preventDefault();
                },
                _activate: function (t) {
                    this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
                },
                refresh: function () {
                    var e,
                        i,
                        n,
                        s,
                        o,
                        a = this,
                        r = this.options.icons.submenu,
                        l = this.element.find(this.options.menus);
                    this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length),
                        (n = l
                            .filter(":not(.ui-menu)")
                            .hide()
                            .attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" })
                            .each(function () {
                                var e = t(this),
                                    i = e.prev(),
                                    n = t("<span>").data("ui-menu-submenu-caret", !0);
                                a._addClass(n, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"));
                            })),
                        this._addClass(n, "ui-menu", "ui-widget ui-widget-content ui-front"),
                        (e = l.add(this.element)),
                        (i = e.find(this.options.items)),
                        i.not(".ui-menu-item").each(function () {
                            var e = t(this);
                            a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content");
                        }),
                        (s = i.not(".ui-menu-item, .ui-menu-divider")),
                        (o = s.children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() })),
                        this._addClass(s, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"),
                        i.filter(".ui-state-disabled").attr("aria-disabled", "true"),
                        this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
                },
                _itemRole: function () {
                    return { menu: "menuitem", listbox: "option" }[this.options.role];
                },
                _setOption: function (t, e) {
                    if ("icons" === t) {
                        var i = this.element.find(".ui-menu-icon");
                        this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu);
                    }
                    this._super(t, e);
                },
                _setOptionDisabled: function (t) {
                    this._super(t), this.element.attr("aria-disabled", String(t)), this._toggleClass(null, "ui-state-disabled", !!t);
                },
                focus: function (t, e) {
                    var i, n, s;
                    this.blur(t, t && "focus" === t.type),
                        this._scrollIntoView(e),
                        (this.active = e.first()),
                        (n = this.active.children(".ui-menu-item-wrapper")),
                        this._addClass(n, null, "ui-state-active"),
                        this.options.role && this.element.attr("aria-activedescendant", n.attr("id")),
                        (s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper")),
                        this._addClass(s, null, "ui-state-active"),
                        t && "keydown" === t.type
                            ? this._close()
                            : (this.timer = this._delay(function () {
                                  this._close();
                              }, this.delay)),
                        (i = e.children(".ui-menu")),
                        i.length && t && /^mouse/.test(t.type) && this._startOpening(i),
                        (this.activeMenu = e.parent()),
                        this._trigger("focus", t, { item: e });
                },
                _scrollIntoView: function (e) {
                    var i, n, s, o, a, r;
                    this._hasScroll() &&
                        ((i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0),
                        (n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0),
                        (s = e.offset().top - this.activeMenu.offset().top - i - n),
                        (o = this.activeMenu.scrollTop()),
                        (a = this.activeMenu.height()),
                        (r = e.outerHeight()),
                        s < 0 ? this.activeMenu.scrollTop(o + s) : s + r > a && this.activeMenu.scrollTop(o + s - a + r));
                },
                blur: function (t, e) {
                    e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, { item: this.active }), (this.active = null));
                },
                _startOpening: function (t) {
                    clearTimeout(this.timer),
                        "true" === t.attr("aria-hidden") &&
                            (this.timer = this._delay(function () {
                                this._close(), this._open(t);
                            }, this.delay));
                },
                _open: function (e) {
                    var i = t.extend({ of: this.active }, this.options.position);
                    clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
                },
                collapseAll: function (e, i) {
                    clearTimeout(this.timer),
                        (this.timer = this._delay(function () {
                            var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                            n.length || (n = this.element), this._close(n), this.blur(e), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), (this.activeMenu = n);
                        }, this.delay));
                },
                _close: function (t) {
                    t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
                },
                _closeOnDocumentClick: function (e) {
                    return !t(e.target).closest(".ui-menu").length;
                },
                _isDivider: function (t) {
                    return !/[^\-\u2014\u2013\s]/.test(t.text());
                },
                collapse: function (t) {
                    var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    e && e.length && (this._close(), this.focus(t, e));
                },
                expand: function (t) {
                    var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                    e &&
                        e.length &&
                        (this._open(e.parent()),
                        this._delay(function () {
                            this.focus(t, e);
                        }));
                },
                next: function (t) {
                    this._move("next", "first", t);
                },
                previous: function (t) {
                    this._move("prev", "last", t);
                },
                isFirstItem: function () {
                    return this.active && !this.active.prevAll(".ui-menu-item").length;
                },
                isLastItem: function () {
                    return this.active && !this.active.nextAll(".ui-menu-item").length;
                },
                _move: function (t, e, i) {
                    var n;
                    this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
                        (n && n.length && this.active) || (n = this.activeMenu.find(this.options.items)[e]()),
                        this.focus(i, n);
                },
                nextPage: function (e) {
                    var i, n, s;
                    return this.active
                        ? void (
                              this.isLastItem() ||
                              (this._hasScroll()
                                  ? ((n = this.active.offset().top),
                                    (s = this.element.height()),
                                    this.active.nextAll(".ui-menu-item").each(function () {
                                        return (i = t(this)), i.offset().top - n - s < 0;
                                    }),
                                    this.focus(e, i))
                                  : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))
                          )
                        : void this.next(e);
                },
                previousPage: function (e) {
                    var i, n, s;
                    return this.active
                        ? void (
                              this.isFirstItem() ||
                              (this._hasScroll()
                                  ? ((n = this.active.offset().top),
                                    (s = this.element.height()),
                                    this.active.prevAll(".ui-menu-item").each(function () {
                                        return (i = t(this)), i.offset().top - n + s > 0;
                                    }),
                                    this.focus(e, i))
                                  : this.focus(e, this.activeMenu.find(this.options.items).first()))
                          )
                        : void this.next(e);
                },
                _hasScroll: function () {
                    return this.element.outerHeight() < this.element.prop("scrollHeight");
                },
                select: function (e) {
                    this.active = this.active || t(e.target).closest(".ui-menu-item");
                    var i = { item: this.active };
                    this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i);
                },
                _filterMenuItems: function (e) {
                    var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                        n = new RegExp("^" + i, "i");
                    return this.activeMenu
                        .find(this.options.items)
                        .filter(".ui-menu-item")
                        .filter(function () {
                            return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()));
                        });
                },
            });
        t.widget("ui.autocomplete", {
            version: "1.12.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: { my: "left top", at: "left bottom", collision: "none" },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null,
            },
            requestIndex: 0,
            pending: 0,
            _create: function () {
                var e,
                    i,
                    n,
                    s = this.element[0].nodeName.toLowerCase(),
                    o = "textarea" === s,
                    a = "input" === s;
                (this.isMultiLine = o || (!a && this._isContentEditable(this.element))),
                    (this.valueMethod = this.element[o || a ? "val" : "text"]),
                    (this.isNewMenu = !0),
                    this._addClass("ui-autocomplete-input"),
                    this.element.attr("autocomplete", "off"),
                    this._on(this.element, {
                        keydown: function (s) {
                            if (this.element.prop("readOnly")) return (e = !0), (n = !0), void (i = !0);
                            (e = !1), (n = !1), (i = !1);
                            var o = t.ui.keyCode;
                            switch (s.keyCode) {
                                case o.PAGE_UP:
                                    (e = !0), this._move("previousPage", s);
                                    break;
                                case o.PAGE_DOWN:
                                    (e = !0), this._move("nextPage", s);
                                    break;
                                case o.UP:
                                    (e = !0), this._keyEvent("previous", s);
                                    break;
                                case o.DOWN:
                                    (e = !0), this._keyEvent("next", s);
                                    break;
                                case o.ENTER:
                                    this.menu.active && ((e = !0), s.preventDefault(), this.menu.select(s));
                                    break;
                                case o.TAB:
                                    this.menu.active && this.menu.select(s);
                                    break;
                                case o.ESCAPE:
                                    this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                                    break;
                                default:
                                    (i = !0), this._searchTimeout(s);
                            }
                        },
                        keypress: function (n) {
                            if (e) return (e = !1), void ((this.isMultiLine && !this.menu.element.is(":visible")) || n.preventDefault());
                            if (!i) {
                                var s = t.ui.keyCode;
                                switch (n.keyCode) {
                                    case s.PAGE_UP:
                                        this._move("previousPage", n);
                                        break;
                                    case s.PAGE_DOWN:
                                        this._move("nextPage", n);
                                        break;
                                    case s.UP:
                                        this._keyEvent("previous", n);
                                        break;
                                    case s.DOWN:
                                        this._keyEvent("next", n);
                                }
                            }
                        },
                        input: function (t) {
                            return n ? ((n = !1), void t.preventDefault()) : void this._searchTimeout(t);
                        },
                        focus: function () {
                            (this.selectedItem = null), (this.previous = this._value());
                        },
                        blur: function (t) {
                            return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t));
                        },
                    }),
                    this._initSource(),
                    (this.menu = t("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance")),
                    this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
                    this._on(this.menu.element, {
                        mousedown: function (e) {
                            e.preventDefault(),
                                (this.cancelBlur = !0),
                                this._delay(function () {
                                    delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
                                });
                        },
                        menufocus: function (e, i) {
                            var n, s;
                            return this.isNewMenu && ((this.isNewMenu = !1), e.originalEvent && /^mouse/.test(e.originalEvent.type))
                                ? (this.menu.blur(),
                                  void this.document.one("mousemove", function () {
                                      t(e.target).trigger(e.originalEvent);
                                  }))
                                : ((s = i.item.data("ui-autocomplete-item")),
                                  !1 !== this._trigger("focus", e, { item: s }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value),
                                  (n = i.item.attr("aria-label") || s.value),
                                  void (n && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))));
                        },
                        menuselect: function (e, i) {
                            var n = i.item.data("ui-autocomplete-item"),
                                s = this.previous;
                            this.element[0] !== t.ui.safeActiveElement(this.document[0]) &&
                                (this.element.trigger("focus"),
                                (this.previous = s),
                                this._delay(function () {
                                    (this.previous = s), (this.selectedItem = n);
                                })),
                                !1 !== this._trigger("select", e, { item: n }) && this._value(n.value),
                                (this.term = this._value()),
                                this.close(e),
                                (this.selectedItem = n);
                        },
                    }),
                    (this.liveRegion = t("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body)),
                    this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
                    this._on(this.window, {
                        beforeunload: function () {
                            this.element.removeAttr("autocomplete");
                        },
                    });
            },
            _destroy: function () {
                clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
            },
            _setOption: function (t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort();
            },
            _isEventTargetInWidget: function (e) {
                var i = this.menu.element[0];
                return e.target === this.element[0] || e.target === i || t.contains(i, e.target);
            },
            _closeOnClickOutside: function (t) {
                this._isEventTargetInWidget(t) || this.close();
            },
            _appendTo: function () {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), (e && e[0]) || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e;
            },
            _initSource: function () {
                var e,
                    i,
                    n = this;
                t.isArray(this.options.source)
                    ? ((e = this.options.source),
                      (this.source = function (i, n) {
                          n(t.ui.autocomplete.filter(e, i.term));
                      }))
                    : "string" == typeof this.options.source
                    ? ((i = this.options.source),
                      (this.source = function (e, s) {
                          n.xhr && n.xhr.abort(),
                              (n.xhr = t.ajax({
                                  url: i,
                                  data: e,
                                  dataType: "json",
                                  success: function (t) {
                                      s(t);
                                  },
                                  error: function () {
                                      s([]);
                                  },
                              }));
                      }))
                    : (this.source = this.options.source);
            },
            _searchTimeout: function (t) {
                clearTimeout(this.searching),
                    (this.searching = this._delay(function () {
                        var e = this.term === this._value(),
                            i = this.menu.element.is(":visible"),
                            n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                        (e && (!e || i || n)) || ((this.selectedItem = null), this.search(null, t));
                    }, this.options.delay));
            },
            search: function (t, e) {
                return (t = null != t ? t : this._value()), (this.term = this._value()), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0;
            },
            _search: function (t) {
                this.pending++, this._addClass("ui-autocomplete-loading"), (this.cancelSearch = !1), this.source({ term: t }, this._response());
            },
            _response: function () {
                var e = ++this.requestIndex;
                return t.proxy(function (t) {
                    e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
                }, this);
            },
            __response: function (t) {
                t && (t = this._normalize(t)), this._trigger("response", null, { content: t }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close();
            },
            close: function (t) {
                (this.cancelSearch = !0), this._close(t);
            },
            _close: function (t) {
                this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), (this.isNewMenu = !0), this._trigger("close", t));
            },
            _change: function (t) {
                this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem });
            },
            _normalize: function (e) {
                return e.length && e[0].label && e[0].value
                    ? e
                    : t.map(e, function (e) {
                          return "string" == typeof e ? { label: e, value: e } : t.extend({}, e, { label: e.label || e.value, value: e.value || e.label });
                      });
            },
            _suggest: function (e) {
                var i = this.menu.element.empty();
                this._renderMenu(i, e),
                    (this.isNewMenu = !0),
                    this.menu.refresh(),
                    i.show(),
                    this._resizeMenu(),
                    i.position(t.extend({ of: this.element }, this.options.position)),
                    this.options.autoFocus && this.menu.next(),
                    this._on(this.document, { mousedown: "_closeOnClickOutside" });
            },
            _resizeMenu: function () {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
            },
            _renderMenu: function (e, i) {
                var n = this;
                t.each(i, function (t, i) {
                    n._renderItemData(e, i);
                });
            },
            _renderItemData: function (t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e);
            },
            _renderItem: function (e, i) {
                return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
            },
            _move: function (t, e) {
                return this.menu.element.is(":visible")
                    ? (this.menu.isFirstItem() && /^previous/.test(t)) || (this.menu.isLastItem() && /^next/.test(t))
                        ? (this.isMultiLine || this._value(this.term), void this.menu.blur())
                        : void this.menu[t](e)
                    : void this.search(null, e);
            },
            widget: function () {
                return this.menu.element;
            },
            _value: function () {
                return this.valueMethod.apply(this.element, arguments);
            },
            _keyEvent: function (t, e) {
                (this.isMultiLine && !this.menu.element.is(":visible")) || (this._move(t, e), e.preventDefault());
            },
            _isContentEditable: function (t) {
                if (!t.length) return !1;
                var e = t.prop("contentEditable");
                return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
            },
        }),
            t.extend(t.ui.autocomplete, {
                escapeRegex: function (t) {
                    return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                },
                filter: function (e, i) {
                    var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                    return t.grep(e, function (t) {
                        return n.test(t.label || t.value || t);
                    });
                },
            }),
            t.widget("ui.autocomplete", t.ui.autocomplete, {
                options: {
                    messages: {
                        noResults: "No search results.",
                        results: function (t) {
                            return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                        },
                    },
                },
                __response: function (e) {
                    var i;
                    this._superApply(arguments),
                        this.options.disabled ||
                            this.cancelSearch ||
                            ((i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults), this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion));
                },
            });
        var d = (t.ui.autocomplete, /ui-corner-([a-z]){2,6}/g);
        t.widget("ui.controlgroup", {
            version: "1.12.1",
            defaultElement: "<div>",
            options: {
                direction: "horizontal",
                disabled: null,
                onlyVisible: !0,
                items: {
                    button: "input[type=button], input[type=submit], input[type=reset], button, a",
                    controlgroupLabel: ".ui-controlgroup-label",
                    checkboxradio: "input[type='checkbox'], input[type='radio']",
                    selectmenu: "select",
                    spinner: ".ui-spinner-input",
                },
            },
            _create: function () {
                this._enhance();
            },
            _enhance: function () {
                this.element.attr("role", "toolbar"), this.refresh();
            },
            _destroy: function () {
                this._callChildMethod("destroy"),
                    this.childWidgets.removeData("ui-controlgroup-data"),
                    this.element.removeAttr("role"),
                    this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
            },
            _initWidgets: function () {
                var e = this,
                    i = [];
                t.each(this.options.items, function (n, s) {
                    var o,
                        a = {};
                    if (s)
                        return "controlgroupLabel" === n
                            ? ((o = e.element.find(s)),
                              o.each(function () {
                                  var e = t(this);
                                  e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
                              }),
                              e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"),
                              void (i = i.concat(o.get())))
                            : void (
                                  t.fn[n] &&
                                  ((a = e["_" + n + "Options"] ? e["_" + n + "Options"]("middle") : { classes: {} }),
                                  e.element.find(s).each(function () {
                                      var s = t(this),
                                          o = s[n]("instance"),
                                          r = t.widget.extend({}, a);
                                      if ("button" !== n || !s.parent(".ui-spinner").length) {
                                          o || (o = s[n]()[n]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), s[n](r);
                                          var l = s[n]("widget");
                                          t.data(l[0], "ui-controlgroup-data", o ? o : s[n]("instance")), i.push(l[0]);
                                      }
                                  }))
                              );
                }),
                    (this.childWidgets = t(t.unique(i))),
                    this._addClass(this.childWidgets, "ui-controlgroup-item");
            },
            _callChildMethod: function (e) {
                this.childWidgets.each(function () {
                    var i = t(this),
                        n = i.data("ui-controlgroup-data");
                    n && n[e] && n[e]();
                });
            },
            _updateCornerClass: function (t, e) {
                var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
                    n = this._buildSimpleOptions(e, "label").classes.label;
                this._removeClass(t, null, i), this._addClass(t, null, n);
            },
            _buildSimpleOptions: function (t, e) {
                var i = "vertical" === this.options.direction,
                    n = { classes: {} };
                return (n.classes[e] = { middle: "", first: "ui-corner-" + (i ? "top" : "left"), last: "ui-corner-" + (i ? "bottom" : "right"), only: "ui-corner-all" }[t]), n;
            },
            _spinnerOptions: function (t) {
                var e = this._buildSimpleOptions(t, "ui-spinner");
                return (e.classes["ui-spinner-up"] = ""), (e.classes["ui-spinner-down"] = ""), e;
            },
            _buttonOptions: function (t) {
                return this._buildSimpleOptions(t, "ui-button");
            },
            _checkboxradioOptions: function (t) {
                return this._buildSimpleOptions(t, "ui-checkboxradio-label");
            },
            _selectmenuOptions: function (t) {
                var e = "vertical" === this.options.direction;
                return {
                    width: !!e && "auto",
                    classes: {
                        middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" },
                        first: { "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left") },
                        last: { "ui-selectmenu-button-open": e ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right") },
                        only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" },
                    }[t],
                };
            },
            _resolveClassesValues: function (e, i) {
                var n = {};
                return (
                    t.each(e, function (s) {
                        var o = i.options.classes[s] || "";
                        (o = t.trim(o.replace(d, ""))), (n[s] = (o + " " + e[s]).replace(/\s+/g, " "));
                    }),
                    n
                );
            },
            _setOption: function (t, e) {
                return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh();
            },
            refresh: function () {
                var e,
                    i = this;
                this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction),
                    "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"),
                    this._initWidgets(),
                    (e = this.childWidgets),
                    this.options.onlyVisible && (e = e.filter(":visible")),
                    e.length &&
                        (t.each(["first", "last"], function (t, n) {
                            var s = e[n]().data("ui-controlgroup-data");
                            if (s && i["_" + s.widgetName + "Options"]) {
                                var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
                                (o.classes = i._resolveClassesValues(o.classes, s)), s.element[s.widgetName](o);
                            } else i._updateCornerClass(e[n](), n);
                        }),
                        this._callChildMethod("refresh"));
            },
        });
        t.widget("ui.checkboxradio", [
            t.ui.formResetMixin,
            {
                version: "1.12.1",
                options: { disabled: null, label: null, icon: !0, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } },
                _getCreateOptions: function () {
                    var e,
                        i,
                        n = this,
                        s = this._super() || {};
                    return (
                        this._readType(),
                        (i = this.element.labels()),
                        (this.label = t(i[i.length - 1])),
                        this.label.length || t.error("No label found for checkboxradio widget"),
                        (this.originalLabel = ""),
                        this.label
                            .contents()
                            .not(this.element[0])
                            .each(function () {
                                n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML;
                            }),
                        this.originalLabel && (s.label = this.originalLabel),
                        (e = this.element[0].disabled),
                        null != e && (s.disabled = e),
                        s
                    );
                },
                _create: function () {
                    var t = this.element[0].checked;
                    this._bindFormResetHandler(),
                        null == this.options.disabled && (this.options.disabled = this.element[0].disabled),
                        this._setOption("disabled", this.options.disabled),
                        this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
                        this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"),
                        "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"),
                        this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel),
                        this._enhance(),
                        t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")),
                        this._on({
                            change: "_toggleClasses",
                            focus: function () {
                                this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
                            },
                            blur: function () {
                                this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
                            },
                        });
                },
                _readType: function () {
                    var e = this.element[0].nodeName.toLowerCase();
                    (this.type = this.element[0].type), ("input" === e && /radio|checkbox/.test(this.type)) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type);
                },
                _enhance: function () {
                    this._updateIcon(this.element[0].checked);
                },
                widget: function () {
                    return this.label;
                },
                _getRadioGroup: function () {
                    var e,
                        i = this.element[0].name,
                        n = "input[name='" + t.ui.escapeSelector(i) + "']";
                    return i
                        ? ((e = this.form.length
                              ? t(this.form[0].elements).filter(n)
                              : t(n).filter(function () {
                                    return 0 === t(this).form().length;
                                })),
                          e.not(this.element))
                        : t([]);
                },
                _toggleClasses: function () {
                    var e = this.element[0].checked;
                    this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e),
                        this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e),
                        "radio" === this.type &&
                            this._getRadioGroup().each(function () {
                                var e = t(this).checkboxradio("instance");
                                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active");
                            });
                },
                _destroy: function () {
                    this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
                },
                _setOption: function (t, e) {
                    if ("label" !== t || e) return this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void (this.element[0].disabled = e)) : void this.refresh();
                },
                _updateIcon: function (e) {
                    var i = "ui-icon ui-icon-background ";
                    this.options.icon
                        ? (this.icon || ((this.icon = t("<span>")), (this.iconSpace = t("<span> </span>")), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
                          "checkbox" === this.type ? ((i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank"), this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : (i += "ui-icon-blank"),
                          this._addClass(this.icon, "ui-checkboxradio-icon", i),
                          e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"),
                          this.icon.prependTo(this.label).after(this.iconSpace))
                        : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
                },
                _updateLabel: function () {
                    var t = this.label.contents().not(this.element[0]);
                    this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label);
                },
                refresh: function () {
                    var t = this.element[0].checked,
                        e = this.element[0].disabled;
                    this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({ disabled: e });
                },
            },
        ]);
        t.ui.checkboxradio;
        t.widget("ui.button", {
            version: "1.12.1",
            defaultElement: "<button>",
            options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: !0 },
            _getCreateOptions: function () {
                var t,
                    e = this._super() || {};
                return (
                    (this.isInput = this.element.is("input")),
                    (t = this.element[0].disabled),
                    null != t && (e.disabled = t),
                    (this.originalLabel = this.isInput ? this.element.val() : this.element.html()),
                    this.originalLabel && (e.label = this.originalLabel),
                    e
                );
            },
            _create: function () {
                !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0),
                    null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1),
                    (this.hasTitle = !!this.element.attr("title")),
                    this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)),
                    this._addClass("ui-button", "ui-widget"),
                    this._setOption("disabled", this.options.disabled),
                    this._enhance(),
                    this.element.is("a") &&
                        this._on({
                            keyup: function (e) {
                                e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
                            },
                        });
            },
            _enhance: function () {
                this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip());
            },
            _updateTooltip: function () {
                (this.title = this.element.attr("title")), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
            },
            _updateIcon: function (e, i) {
                var n = "iconPosition" !== e,
                    s = n ? this.options.iconPosition : i,
                    o = "top" === s || "bottom" === s;
                this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : ((this.icon = t("<span>")), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")),
                    n && this._addClass(this.icon, null, i),
                    this._attachIcon(s),
                    o
                        ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove())
                        : (this.iconSpace || ((this.iconSpace = t("<span> </span>")), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s));
            },
            _destroy: function () {
                this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title");
            },
            _attachIconSpace: function (t) {
                this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
            },
            _attachIcon: function (t) {
                this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
            },
            _setOptions: function (t) {
                var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                    i = void 0 === t.icon ? this.options.icon : t.icon;
                e || i || (t.showLabel = !0), this._super(t);
            },
            _setOption: function (t, e) {
                "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())),
                    "iconPosition" === t && this._updateIcon(t, e),
                    "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()),
                    "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))),
                    this._super(t, e),
                    "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), (this.element[0].disabled = e), e && this.element.blur());
            },
            refresh: function () {
                var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOptions({ disabled: t }), this._updateTooltip();
            },
        }),
            t.uiBackCompat !== !1 &&
                (t.widget("ui.button", t.ui.button, {
                    options: { text: !0, icons: { primary: null, secondary: null } },
                    _create: function () {
                        this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text),
                            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel),
                            this.options.icon || (!this.options.icons.primary && !this.options.icons.secondary)
                                ? this.options.icon && (this.options.icons.primary = this.options.icon)
                                : this.options.icons.primary
                                ? (this.options.icon = this.options.icons.primary)
                                : ((this.options.icon = this.options.icons.secondary), (this.options.iconPosition = "end")),
                            this._super();
                    },
                    _setOption: function (t, e) {
                        return "text" === t
                            ? void this._super("showLabel", e)
                            : ("showLabel" === t && (this.options.text = e),
                              "icon" === t && (this.options.icons.primary = e),
                              "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))),
                              void this._superApply(arguments));
                    },
                }),
                (t.fn.button = (function (e) {
                    return function () {
                        return !this.length || (this.length && "INPUT" !== this[0].tagName) || (this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type"))
                            ? e.apply(this, arguments)
                            : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({ icon: !1 }) : this.checkboxradio.apply(this, arguments));
                    };
                })(t.fn.button)),
                (t.fn.buttonset = function () {
                    return (
                        t.ui.controlgroup || t.error("Controlgroup widget missing"),
                        "option" === arguments[0] && "items" === arguments[1] && arguments[2]
                            ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]])
                            : "option" === arguments[0] && "items" === arguments[1]
                            ? this.controlgroup.apply(this, [arguments[0], "items.button"])
                            : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = { button: arguments[0].items }), this.controlgroup.apply(this, arguments))
                    );
                }));
        t.ui.button;
        t.extend(t.ui, { datepicker: { version: "1.12.1" } });
        var p;
        t.extend(n.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function () {
                return this.dpDiv;
            },
            setDefaults: function (t) {
                return a(this._defaults, t || {}), this;
            },
            _attachDatepicker: function (e, i) {
                var n, s, o;
                (n = e.nodeName.toLowerCase()),
                    (s = "div" === n || "span" === n),
                    e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
                    (o = this._newInst(t(e), s)),
                    (o.settings = t.extend({}, i || {})),
                    "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o);
            },
            _newInst: function (e, i) {
                var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: n,
                    input: e,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv,
                };
            },
            _connectDatepicker: function (e, i) {
                var n = t(e);
                (i.append = t([])),
                    (i.trigger = t([])),
                    n.hasClass(this.markerClassName) ||
                        (this._attachments(n, i),
                        n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp),
                        this._autoSize(i),
                        t.data(e, "datepicker", i),
                        i.settings.disabled && this._disableDatepicker(e));
            },
            _attachments: function (e, i) {
                var n,
                    s,
                    o,
                    a = this._get(i, "appendText"),
                    r = this._get(i, "isRTL");
                i.append && i.append.remove(),
                    a && ((i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>")), e[r ? "before" : "after"](i.append)),
                    e.off("focus", this._showDatepicker),
                    i.trigger && i.trigger.remove(),
                    (n = this._get(i, "showOn")),
                    ("focus" !== n && "both" !== n) || e.on("focus", this._showDatepicker),
                    ("button" !== n && "both" !== n) ||
                        ((s = this._get(i, "buttonText")),
                        (o = this._get(i, "buttonImage")),
                        (i.trigger = t(
                            this._get(i, "buttonImageOnly")
                                ? t("<img/>").addClass(this._triggerClass).attr({ src: o, alt: s, title: s })
                                : t("<button type='button'></button>")
                                      .addClass(this._triggerClass)
                                      .html(o ? t("<img/>").attr({ src: o, alt: s, title: s }) : s)
                        )),
                        e[r ? "before" : "after"](i.trigger),
                        i.trigger.on("click", function () {
                            return (
                                t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0]
                                    ? t.datepicker._hideDatepicker()
                                    : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0]
                                    ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0]))
                                    : t.datepicker._showDatepicker(e[0]),
                                !1
                            );
                        }));
            },
            _autoSize: function (t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e,
                        i,
                        n,
                        s,
                        o = new Date(2009, 11, 20),
                        a = this._get(t, "dateFormat");
                    a.match(/[DM]/) &&
                        ((e = function (t) {
                            for (i = 0, n = 0, s = 0; s < t.length; s++) t[s].length > i && ((i = t[s].length), (n = s));
                            return n;
                        }),
                        o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                        o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())),
                        t.input.attr("size", this._formatDate(t, o).length);
                }
            },
            _inlineDatepicker: function (e, i) {
                var n = t(e);
                n.hasClass(this.markerClassName) ||
                    (n.addClass(this.markerClassName).append(i.dpDiv),
                    t.data(e, "datepicker", i),
                    this._setDate(i, this._getDefaultDate(i), !0),
                    this._updateDatepicker(i),
                    this._updateAlternate(i),
                    i.settings.disabled && this._disableDatepicker(e),
                    i.dpDiv.css("display", "block"));
            },
            _dialogDatepicker: function (e, i, n, s, o) {
                var r,
                    l,
                    h,
                    c,
                    u,
                    d = this._dialogInst;
                return (
                    d ||
                        ((this.uuid += 1),
                        (r = "dp" + this.uuid),
                        (this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>")),
                        this._dialogInput.on("keydown", this._doKeyDown),
                        t("body").append(this._dialogInput),
                        (d = this._dialogInst = this._newInst(this._dialogInput, !1)),
                        (d.settings = {}),
                        t.data(this._dialogInput[0], "datepicker", d)),
                    a(d.settings, s || {}),
                    (i = i && i.constructor === Date ? this._formatDate(d, i) : i),
                    this._dialogInput.val(i),
                    (this._pos = o ? (o.length ? o : [o.pageX, o.pageY]) : null),
                    this._pos ||
                        ((l = document.documentElement.clientWidth),
                        (h = document.documentElement.clientHeight),
                        (c = document.documentElement.scrollLeft || document.body.scrollLeft),
                        (u = document.documentElement.scrollTop || document.body.scrollTop),
                        (this._pos = [l / 2 - 100 + c, h / 2 - 150 + u])),
                    this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
                    (d.settings.onSelect = n),
                    (this._inDialog = !0),
                    this.dpDiv.addClass(this._dialogClass),
                    this._showDatepicker(this._dialogInput[0]),
                    t.blockUI && t.blockUI(this.dpDiv),
                    t.data(this._dialogInput[0], "datepicker", d),
                    this
                );
            },
            _destroyDatepicker: function (e) {
                var i,
                    n = t(e),
                    s = t.data(e, "datepicker");
                n.hasClass(this.markerClassName) &&
                    ((i = e.nodeName.toLowerCase()),
                    t.removeData(e, "datepicker"),
                    "input" === i
                        ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp))
                        : ("div" !== i && "span" !== i) || n.removeClass(this.markerClassName).empty(),
                    p === s && (p = null));
            },
            _enableDatepicker: function (e) {
                var i,
                    n,
                    s = t(e),
                    o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) &&
                    ((i = e.nodeName.toLowerCase()),
                    "input" === i
                        ? ((e.disabled = !1),
                          o.trigger
                              .filter("button")
                              .each(function () {
                                  this.disabled = !1;
                              })
                              .end()
                              .filter("img")
                              .css({ opacity: "1.0", cursor: "" }))
                        : ("div" !== i && "span" !== i) || ((n = s.children("." + this._inlineClass)), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
                    (this._disabledInputs = t.map(this._disabledInputs, function (t) {
                        return t === e ? null : t;
                    })));
            },
            _disableDatepicker: function (e) {
                var i,
                    n,
                    s = t(e),
                    o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) &&
                    ((i = e.nodeName.toLowerCase()),
                    "input" === i
                        ? ((e.disabled = !0),
                          o.trigger
                              .filter("button")
                              .each(function () {
                                  this.disabled = !0;
                              })
                              .end()
                              .filter("img")
                              .css({ opacity: "0.5", cursor: "default" }))
                        : ("div" !== i && "span" !== i) || ((n = s.children("." + this._inlineClass)), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
                    (this._disabledInputs = t.map(this._disabledInputs, function (t) {
                        return t === e ? null : t;
                    })),
                    (this._disabledInputs[this._disabledInputs.length] = e));
            },
            _isDisabledDatepicker: function (t) {
                if (!t) return !1;
                for (var e = 0; e < this._disabledInputs.length; e++) if (this._disabledInputs[e] === t) return !0;
                return !1;
            },
            _getInst: function (e) {
                try {
                    return t.data(e, "datepicker");
                } catch (i) {
                    throw "Missing instance data for this datepicker";
                }
            },
            _optionDatepicker: function (e, i, n) {
                var s,
                    o,
                    r,
                    l,
                    h = this._getInst(e);
                return 2 === arguments.length && "string" == typeof i
                    ? "defaults" === i
                        ? t.extend({}, t.datepicker._defaults)
                        : h
                        ? "all" === i
                            ? t.extend({}, h.settings)
                            : this._get(h, i)
                        : null
                    : ((s = i || {}),
                      "string" == typeof i && ((s = {}), (s[i] = n)),
                      void (
                          h &&
                          (this._curInst === h && this._hideDatepicker(),
                          (o = this._getDateDatepicker(e, !0)),
                          (r = this._getMinMaxDate(h, "min")),
                          (l = this._getMinMaxDate(h, "max")),
                          a(h.settings, s),
                          null !== r && void 0 !== s.dateFormat && void 0 === s.minDate && (h.settings.minDate = this._formatDate(h, r)),
                          null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (h.settings.maxDate = this._formatDate(h, l)),
                          "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)),
                          this._attachments(t(e), h),
                          this._autoSize(h),
                          this._setDate(h, o),
                          this._updateAlternate(h),
                          this._updateDatepicker(h))
                      ));
            },
            _changeDatepicker: function (t, e, i) {
                this._optionDatepicker(t, e, i);
            },
            _refreshDatepicker: function (t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e);
            },
            _setDateDatepicker: function (t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
            },
            _getDateDatepicker: function (t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
            },
            _doKeyDown: function (e) {
                var i,
                    n,
                    s,
                    o = t.datepicker._getInst(e.target),
                    a = !0,
                    r = o.dpDiv.is(".ui-datepicker-rtl");
                if (((o._keyEvent = !0), t.datepicker._datepickerShowing))
                    switch (e.keyCode) {
                        case 9:
                            t.datepicker._hideDatepicker(), (a = !1);
                            break;
                        case 13:
                            return (
                                (s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv)),
                                s[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]),
                                (i = t.datepicker._get(o, "onSelect")),
                                i ? ((n = t.datepicker._formatDate(o)), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(),
                                !1
                            );
                        case 27:
                            t.datepicker._hideDatepicker();
                            break;
                        case 33:
                            t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                            break;
                        case 34:
                            t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                            break;
                        case 35:
                            (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), (a = e.ctrlKey || e.metaKey);
                            break;
                        case 36:
                            (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), (a = e.ctrlKey || e.metaKey);
                            break;
                        case 37:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
                                (a = e.ctrlKey || e.metaKey),
                                e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                            break;
                        case 38:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), (a = e.ctrlKey || e.metaKey);
                            break;
                        case 39:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
                                (a = e.ctrlKey || e.metaKey),
                                e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                            break;
                        case 40:
                            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), (a = e.ctrlKey || e.metaKey);
                            break;
                        default:
                            a = !1;
                    }
                else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : (a = !1);
                a && (e.preventDefault(), e.stopPropagation());
            },
            _doKeyPress: function (e) {
                var i,
                    n,
                    s = t.datepicker._getInst(e.target);
                if (t.datepicker._get(s, "constrainInput"))
                    return (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat"))), (n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode)), e.ctrlKey || e.metaKey || n < " " || !i || i.indexOf(n) > -1;
            },
            _doKeyUp: function (e) {
                var i,
                    n = t.datepicker._getInst(e.target);
                if (n.input.val() !== n.lastVal)
                    try {
                        (i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n))),
                            i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n));
                    } catch (s) {}
                return !0;
            },
            _showDatepicker: function (e) {
                if (((e = e.target || e), "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e)) {
                    var n, s, o, r, l, h, c;
                    (n = t.datepicker._getInst(e)),
                        t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
                        (s = t.datepicker._get(n, "beforeShow")),
                        (o = s ? s.apply(e, [e, n]) : {}),
                        o !== !1 &&
                            (a(n.settings, o),
                            (n.lastVal = null),
                            (t.datepicker._lastInput = e),
                            t.datepicker._setDateFromField(n),
                            t.datepicker._inDialog && (e.value = ""),
                            t.datepicker._pos || ((t.datepicker._pos = t.datepicker._findPos(e)), (t.datepicker._pos[1] += e.offsetHeight)),
                            (r = !1),
                            t(e)
                                .parents()
                                .each(function () {
                                    return (r |= "fixed" === t(this).css("position")), !r;
                                }),
                            (l = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
                            (t.datepicker._pos = null),
                            n.dpDiv.empty(),
                            n.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }),
                            t.datepicker._updateDatepicker(n),
                            (l = t.datepicker._checkOffset(n, l, r)),
                            n.dpDiv.css({ position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: l.left + "px", top: l.top + "px" }),
                            n.inline ||
                                ((h = t.datepicker._get(n, "showAnim")),
                                (c = t.datepicker._get(n, "duration")),
                                n.dpDiv.css("z-index", i(t(e)) + 1),
                                (t.datepicker._datepickerShowing = !0),
                                t.effects && t.effects.effect[h] ? n.dpDiv.show(h, t.datepicker._get(n, "showOptions"), c) : n.dpDiv[h || "show"](h ? c : null),
                                t.datepicker._shouldFocusInput(n) && n.input.trigger("focus"),
                                (t.datepicker._curInst = n)));
                }
            },
            _updateDatepicker: function (e) {
                (this.maxRows = 4), (p = e), e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                var i,
                    n = this._getNumberOfMonths(e),
                    s = n[1],
                    a = 17,
                    r = e.dpDiv.find("." + this._dayOverClass + " a");
                r.length > 0 && o.apply(r.get(0)),
                    e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
                    s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", a * s + "em"),
                    e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
                    e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
                    e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"),
                    e.yearshtml &&
                        ((i = e.yearshtml),
                        setTimeout(function () {
                            i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), (i = e.yearshtml = null);
                        }, 0));
            },
            _shouldFocusInput: function (t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
            },
            _checkOffset: function (e, i, n) {
                var s = e.dpDiv.outerWidth(),
                    o = e.dpDiv.outerHeight(),
                    a = e.input ? e.input.outerWidth() : 0,
                    r = e.input ? e.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                    h = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
                return (
                    (i.left -= this._get(e, "isRTL") ? s - a : 0),
                    (i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0),
                    (i.top -= n && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0),
                    (i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0)),
                    (i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + r) : 0)),
                    i
                );
            },
            _findPos: function (e) {
                for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)); ) e = e[s ? "previousSibling" : "nextSibling"];
                return (i = t(e).offset()), [i.left, i.top];
            },
            _hideDatepicker: function (e) {
                var i,
                    n,
                    s,
                    o,
                    a = this._curInst;
                !a ||
                    (e && a !== t.data(e, "datepicker")) ||
                    (this._datepickerShowing &&
                        ((i = this._get(a, "showAnim")),
                        (n = this._get(a, "duration")),
                        (s = function () {
                            t.datepicker._tidyDialog(a);
                        }),
                        t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, s) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s),
                        i || s(),
                        (this._datepickerShowing = !1),
                        (o = this._get(a, "onClose")),
                        o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]),
                        (this._lastInput = null),
                        this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))),
                        (this._inDialog = !1)));
            },
            _tidyDialog: function (t) {
                t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
            },
            _checkExternalClick: function (e) {
                if (t.datepicker._curInst) {
                    var i = t(e.target),
                        n = t.datepicker._getInst(i[0]);
                    ((i[0].id === t.datepicker._mainDivId ||
                        0 !== i.parents("#" + t.datepicker._mainDivId).length ||
                        i.hasClass(t.datepicker.markerClassName) ||
                        i.closest("." + t.datepicker._triggerClass).length ||
                        !t.datepicker._datepickerShowing ||
                        (t.datepicker._inDialog && t.blockUI)) &&
                        (!i.hasClass(t.datepicker.markerClassName) || t.datepicker._curInst === n)) ||
                        t.datepicker._hideDatepicker();
                }
            },
            _adjustDate: function (e, i, n) {
                var s = t(e),
                    o = this._getInst(s[0]);
                this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o));
            },
            _gotoToday: function (e) {
                var i,
                    n = t(e),
                    s = this._getInst(n[0]);
                this._get(s, "gotoCurrent") && s.currentDay
                    ? ((s.selectedDay = s.currentDay), (s.drawMonth = s.selectedMonth = s.currentMonth), (s.drawYear = s.selectedYear = s.currentYear))
                    : ((i = new Date()), (s.selectedDay = i.getDate()), (s.drawMonth = s.selectedMonth = i.getMonth()), (s.drawYear = s.selectedYear = i.getFullYear())),
                    this._notifyChange(s),
                    this._adjustDate(n);
            },
            _selectMonthYear: function (e, i, n) {
                var s = t(e),
                    o = this._getInst(s[0]);
                (o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10)), this._notifyChange(o), this._adjustDate(s);
            },
            _selectDay: function (e, i, n, s) {
                var o,
                    a = t(e);
                t(s).hasClass(this._unselectableClass) ||
                    this._isDisabledDatepicker(a[0]) ||
                    ((o = this._getInst(a[0])),
                    (o.selectedDay = o.currentDay = t("a", s).html()),
                    (o.selectedMonth = o.currentMonth = i),
                    (o.selectedYear = o.currentYear = n),
                    this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)));
            },
            _clearDate: function (e) {
                var i = t(e);
                this._selectDate(i, "");
            },
            _selectDate: function (e, i) {
                var n,
                    s = t(e),
                    o = this._getInst(s[0]);
                (i = null != i ? i : this._formatDate(o)),
                    o.input && o.input.val(i),
                    this._updateAlternate(o),
                    (n = this._get(o, "onSelect")),
                    n ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"),
                    o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), (this._lastInput = o.input[0]), "object" != typeof o.input[0] && o.input.trigger("focus"), (this._lastInput = null));
            },
            _updateAlternate: function (e) {
                var i,
                    n,
                    s,
                    o = this._get(e, "altField");
                o && ((i = this._get(e, "altFormat") || this._get(e, "dateFormat")), (n = this._getDate(e)), (s = this.formatDate(i, n, this._getFormatConfig(e))), t(o).val(s));
            },
            noWeekends: function (t) {
                var e = t.getDay();
                return [e > 0 && e < 6, ""];
            },
            iso8601Week: function (t) {
                var e,
                    i = new Date(t.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), (e = i.getTime()), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1;
            },
            parseDate: function (e, i, n) {
                if (null == e || null == i) throw "Invalid arguments";
                if (((i = "object" == typeof i ? i.toString() : i + ""), "" === i)) return null;
                var s,
                    o,
                    a,
                    r,
                    l = 0,
                    h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    c = "string" != typeof h ? h : (new Date().getFullYear() % 100) + parseInt(h, 10),
                    u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    d = (n ? n.dayNames : null) || this._defaults.dayNames,
                    p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    f = (n ? n.monthNames : null) || this._defaults.monthNames,
                    g = -1,
                    m = -1,
                    v = -1,
                    b = -1,
                    y = !1,
                    _ = function (t) {
                        var i = s + 1 < e.length && e.charAt(s + 1) === t;
                        return i && s++, i;
                    },
                    T = function (t) {
                        var e = _(t),
                            n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                            s = "y" === t ? n : 1,
                            o = new RegExp("^\\d{" + s + "," + n + "}"),
                            a = i.substring(l).match(o);
                        if (!a) throw "Missing number at position " + l;
                        return (l += a[0].length), parseInt(a[0], 10);
                    },
                    w = function (e, n, s) {
                        var o = -1,
                            a = t
                                .map(_(e) ? s : n, function (t, e) {
                                    return [[e, t]];
                                })
                                .sort(function (t, e) {
                                    return -(t[1].length - e[1].length);
                                });
                        if (
                            (t.each(a, function (t, e) {
                                var n = e[1];
                                if (i.substr(l, n.length).toLowerCase() === n.toLowerCase()) return (o = e[0]), (l += n.length), !1;
                            }),
                            o !== -1)
                        )
                            return o + 1;
                        throw "Unknown name at position " + l;
                    },
                    x = function () {
                        if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                        l++;
                    };
                for (s = 0; s < e.length; s++)
                    if (y) "'" !== e.charAt(s) || _("'") ? x() : (y = !1);
                    else
                        switch (e.charAt(s)) {
                            case "d":
                                v = T("d");
                                break;
                            case "D":
                                w("D", u, d);
                                break;
                            case "o":
                                b = T("o");
                                break;
                            case "m":
                                m = T("m");
                                break;
                            case "M":
                                m = w("M", p, f);
                                break;
                            case "y":
                                g = T("y");
                                break;
                            case "@":
                                (r = new Date(T("@"))), (g = r.getFullYear()), (m = r.getMonth() + 1), (v = r.getDate());
                                break;
                            case "!":
                                (r = new Date((T("!") - this._ticksTo1970) / 1e4)), (g = r.getFullYear()), (m = r.getMonth() + 1), (v = r.getDate());
                                break;
                            case "'":
                                _("'") ? x() : (y = !0);
                                break;
                            default:
                                x();
                        }
                if (l < i.length && ((a = i.substr(l)), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
                if ((g === -1 ? (g = new Date().getFullYear()) : g < 100 && (g += new Date().getFullYear() - (new Date().getFullYear() % 100) + (g <= c ? 0 : -100)), b > -1))
                    for (m = 1, v = b; ; ) {
                        if (((o = this._getDaysInMonth(g, m - 1)), v <= o)) break;
                        m++, (v -= o);
                    }
                if (((r = this._daylightSavingAdjust(new Date(g, m - 1, v))), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== v)) throw "Invalid date";
                return r;
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function (t, e, i) {
                if (!e) return "";
                var n,
                    s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    o = (i ? i.dayNames : null) || this._defaults.dayNames,
                    a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    r = (i ? i.monthNames : null) || this._defaults.monthNames,
                    l = function (e) {
                        var i = n + 1 < t.length && t.charAt(n + 1) === e;
                        return i && n++, i;
                    },
                    h = function (t, e, i) {
                        var n = "" + e;
                        if (l(t)) for (; n.length < i; ) n = "0" + n;
                        return n;
                    },
                    c = function (t, e, i, n) {
                        return l(t) ? n[e] : i[e];
                    },
                    u = "",
                    d = !1;
                if (e)
                    for (n = 0; n < t.length; n++)
                        if (d) "'" !== t.charAt(n) || l("'") ? (u += t.charAt(n)) : (d = !1);
                        else
                            switch (t.charAt(n)) {
                                case "d":
                                    u += h("d", e.getDate(), 2);
                                    break;
                                case "D":
                                    u += c("D", e.getDay(), s, o);
                                    break;
                                case "o":
                                    u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                    break;
                                case "m":
                                    u += h("m", e.getMonth() + 1, 2);
                                    break;
                                case "M":
                                    u += c("M", e.getMonth(), a, r);
                                    break;
                                case "y":
                                    u += l("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + (e.getFullYear() % 100);
                                    break;
                                case "@":
                                    u += e.getTime();
                                    break;
                                case "!":
                                    u += 1e4 * e.getTime() + this._ticksTo1970;
                                    break;
                                case "'":
                                    l("'") ? (u += "'") : (d = !0);
                                    break;
                                default:
                                    u += t.charAt(n);
                            }
                return u;
            },
            _possibleChars: function (t) {
                var e,
                    i = "",
                    n = !1,
                    s = function (i) {
                        var n = e + 1 < t.length && t.charAt(e + 1) === i;
                        return n && e++, n;
                    };
                for (e = 0; e < t.length; e++)
                    if (n) "'" !== t.charAt(e) || s("'") ? (i += t.charAt(e)) : (n = !1);
                    else
                        switch (t.charAt(e)) {
                            case "d":
                            case "m":
                            case "y":
                            case "@":
                                i += "0123456789";
                                break;
                            case "D":
                            case "M":
                                return null;
                            case "'":
                                s("'") ? (i += "'") : (n = !0);
                                break;
                            default:
                                i += t.charAt(e);
                        }
                return i;
            },
            _get: function (t, e) {
                return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
            },
            _setDateFromField: function (t, e) {
                if (t.input.val() !== t.lastVal) {
                    var i = this._get(t, "dateFormat"),
                        n = (t.lastVal = t.input ? t.input.val() : null),
                        s = this._getDefaultDate(t),
                        o = s,
                        a = this._getFormatConfig(t);
                    try {
                        o = this.parseDate(i, n, a) || s;
                    } catch (r) {
                        n = e ? "" : n;
                    }
                    (t.selectedDay = o.getDate()),
                        (t.drawMonth = t.selectedMonth = o.getMonth()),
                        (t.drawYear = t.selectedYear = o.getFullYear()),
                        (t.currentDay = n ? o.getDate() : 0),
                        (t.currentMonth = n ? o.getMonth() : 0),
                        (t.currentYear = n ? o.getFullYear() : 0),
                        this._adjustInstDate(t);
                }
            },
            _getDefaultDate: function (t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
            },
            _determineDate: function (e, i, n) {
                var s = function (t) {
                        var e = new Date();
                        return e.setDate(e.getDate() + t), e;
                    },
                    o = function (i) {
                        try {
                            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e));
                        } catch (n) {}
                        for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date(), o = s.getFullYear(), a = s.getMonth(), r = s.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = l.exec(i); h; ) {
                            switch (h[2] || "d") {
                                case "d":
                                case "D":
                                    r += parseInt(h[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    r += 7 * parseInt(h[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    (a += parseInt(h[1], 10)), (r = Math.min(r, t.datepicker._getDaysInMonth(o, a)));
                                    break;
                                case "y":
                                case "Y":
                                    (o += parseInt(h[1], 10)), (r = Math.min(r, t.datepicker._getDaysInMonth(o, a)));
                            }
                            h = l.exec(i);
                        }
                        return new Date(o, a, r);
                    },
                    a = null == i || "" === i ? n : "string" == typeof i ? o(i) : "number" == typeof i ? (isNaN(i) ? n : s(i)) : new Date(i.getTime());
                return (a = a && "Invalid Date" === a.toString() ? n : a), a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a);
            },
            _daylightSavingAdjust: function (t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
            },
            _setDate: function (t, e, i) {
                var n = !e,
                    s = t.selectedMonth,
                    o = t.selectedYear,
                    a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
                (t.selectedDay = t.currentDay = a.getDate()),
                    (t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth()),
                    (t.drawYear = t.selectedYear = t.currentYear = a.getFullYear()),
                    (s === t.selectedMonth && o === t.selectedYear) || i || this._notifyChange(t),
                    this._adjustInstDate(t),
                    t.input && t.input.val(n ? "" : this._formatDate(t));
            },
            _getDate: function (t) {
                var e = !t.currentYear || (t.input && "" === t.input.val()) ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return e;
            },
            _attachHandlers: function (e) {
                var i = this._get(e, "stepMonths"),
                    n = "#" + e.id.replace(/\\\\/g, "\\");
                e.dpDiv.find("[data-handler]").map(function () {
                    var e = {
                        prev: function () {
                            t.datepicker._adjustDate(n, -i, "M");
                        },
                        next: function () {
                            t.datepicker._adjustDate(n, +i, "M");
                        },
                        hide: function () {
                            t.datepicker._hideDatepicker();
                        },
                        today: function () {
                            t.datepicker._gotoToday(n);
                        },
                        selectDay: function () {
                            return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
                        },
                        selectMonth: function () {
                            return t.datepicker._selectMonthYear(n, this, "M"), !1;
                        },
                        selectYear: function () {
                            return t.datepicker._selectMonthYear(n, this, "Y"), !1;
                        },
                    };
                    t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]);
                });
            },
            _generateHTML: function (t) {
                var e,
                    i,
                    n,
                    s,
                    o,
                    a,
                    r,
                    l,
                    h,
                    c,
                    u,
                    d,
                    p,
                    f,
                    g,
                    m,
                    v,
                    b,
                    y,
                    _,
                    T,
                    w,
                    x,
                    S,
                    C,
                    P,
                    M,
                    A,
                    k,
                    D,
                    I,
                    E,
                    H,
                    G,
                    N,
                    B,
                    L,
                    O,
                    F,
                    R = new Date(),
                    z = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
                    W = this._get(t, "isRTL"),
                    $ = this._get(t, "showButtonPanel"),
                    V = this._get(t, "hideIfNoPrevNext"),
                    j = this._get(t, "navigationAsDateFormat"),
                    X = this._getNumberOfMonths(t),
                    q = this._get(t, "showCurrentAtPos"),
                    K = this._get(t, "stepMonths"),
                    Y = 1 !== X[0] || 1 !== X[1],
                    U = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    Q = this._getMinMaxDate(t, "min"),
                    Z = this._getMinMaxDate(t, "max"),
                    J = t.drawMonth - q,
                    tt = t.drawYear;
                if ((J < 0 && ((J += 12), tt--), Z))
                    for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - X[0] * X[1] + 1, Z.getDate())), e = Q && e < Q ? Q : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e; ) J--, J < 0 && ((J = 11), tt--);
                for (
                    t.drawMonth = J,
                        t.drawYear = tt,
                        i = this._get(t, "prevText"),
                        i = j ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - K, 1)), this._getFormatConfig(t)) : i,
                        n = this._canAdjustMonth(t, -1, tt, J)
                            ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + i + "</span></a>"
                            : V
                            ? ""
                            : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + i + "</span></a>",
                        s = this._get(t, "nextText"),
                        s = j ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, J + K, 1)), this._getFormatConfig(t)) : s,
                        o = this._canAdjustMonth(t, 1, tt, J)
                            ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + s + "</span></a>"
                            : V
                            ? ""
                            : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + s + "</span></a>",
                        a = this._get(t, "currentText"),
                        r = this._get(t, "gotoCurrent") && t.currentDay ? U : z,
                        a = j ? this.formatDate(a, r, this._getFormatConfig(t)) : a,
                        l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>",
                        h = $
                            ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                              (W ? l : "") +
                              (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") +
                              (W ? "" : l) +
                              "</div>"
                            : "",
                        c = parseInt(this._get(t, "firstDay"), 10),
                        c = isNaN(c) ? 0 : c,
                        u = this._get(t, "showWeek"),
                        d = this._get(t, "dayNames"),
                        p = this._get(t, "dayNamesMin"),
                        f = this._get(t, "monthNames"),
                        g = this._get(t, "monthNamesShort"),
                        m = this._get(t, "beforeShowDay"),
                        v = this._get(t, "showOtherMonths"),
                        b = this._get(t, "selectOtherMonths"),
                        y = this._getDefaultDate(t),
                        _ = "",
                        w = 0;
                    w < X[0];
                    w++
                ) {
                    for (x = "", this.maxRows = 4, S = 0; S < X[1]; S++) {
                        if (((C = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay))), (P = " ui-corner-all"), (M = ""), Y)) {
                            if (((M += "<div class='ui-datepicker-group"), X[1] > 1))
                                switch (S) {
                                    case 0:
                                        (M += " ui-datepicker-group-first"), (P = " ui-corner-" + (W ? "right" : "left"));
                                        break;
                                    case X[1] - 1:
                                        (M += " ui-datepicker-group-last"), (P = " ui-corner-" + (W ? "left" : "right"));
                                        break;
                                    default:
                                        (M += " ui-datepicker-group-middle"), (P = "");
                                }
                            M += "'>";
                        }
                        for (
                            M +=
                                "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                                P +
                                "'>" +
                                (/all|left/.test(P) && 0 === w ? (W ? o : n) : "") +
                                (/all|right/.test(P) && 0 === w ? (W ? n : o) : "") +
                                this._generateMonthYearHeader(t, J, tt, Q, Z, w > 0 || S > 0, f, g) +
                                "</div><table class='ui-datepicker-calendar'><thead><tr>",
                                A = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
                                T = 0;
                            T < 7;
                            T++
                        )
                            (k = (T + c) % 7), (A += "<th scope='col'" + ((T + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[k] + "'>" + p[k] + "</span></th>");
                        for (
                            M += A + "</tr></thead><tbody>",
                                D = this._getDaysInMonth(tt, J),
                                tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, D)),
                                I = (this._getFirstDayOfMonth(tt, J) - c + 7) % 7,
                                E = Math.ceil((I + D) / 7),
                                H = Y && this.maxRows > E ? this.maxRows : E,
                                this.maxRows = H,
                                G = this._daylightSavingAdjust(new Date(tt, J, 1 - I)),
                                N = 0;
                            N < H;
                            N++
                        ) {
                            for (M += "<tr>", B = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(G) + "</td>" : "", T = 0; T < 7; T++)
                                (L = m ? m.apply(t.input ? t.input[0] : null, [G]) : [!0, ""]),
                                    (O = G.getMonth() !== J),
                                    (F = (O && !b) || !L[0] || (Q && G < Q) || (Z && G > Z)),
                                    (B +=
                                        "<td class='" +
                                        ((T + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                                        (O ? " ui-datepicker-other-month" : "") +
                                        ((G.getTime() === C.getTime() && J === t.selectedMonth && t._keyEvent) || (y.getTime() === G.getTime() && y.getTime() === C.getTime()) ? " " + this._dayOverClass : "") +
                                        (F ? " " + this._unselectableClass + " ui-state-disabled" : "") +
                                        (O && !v ? "" : " " + L[1] + (G.getTime() === U.getTime() ? " " + this._currentClass : "") + (G.getTime() === z.getTime() ? " ui-datepicker-today" : "")) +
                                        "'" +
                                        ((O && !v) || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") +
                                        (F ? "" : " data-handler='selectDay' data-event='click' data-month='" + G.getMonth() + "' data-year='" + G.getFullYear() + "'") +
                                        ">" +
                                        (O && !v
                                            ? "&#xa0;"
                                            : F
                                            ? "<span class='ui-state-default'>" + G.getDate() + "</span>"
                                            : "<a class='ui-state-default" +
                                              (G.getTime() === z.getTime() ? " ui-state-highlight" : "") +
                                              (G.getTime() === U.getTime() ? " ui-state-active" : "") +
                                              (O ? " ui-priority-secondary" : "") +
                                              "' href='#'>" +
                                              G.getDate() +
                                              "</a>") +
                                        "</td>"),
                                    G.setDate(G.getDate() + 1),
                                    (G = this._daylightSavingAdjust(G));
                            M += B + "</tr>";
                        }
                        J++, J > 11 && ((J = 0), tt++), (M += "</tbody></table>" + (Y ? "</div>" + (X[0] > 0 && S === X[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")), (x += M);
                    }
                    _ += x;
                }
                return (_ += h), (t._keyEvent = !1), _;
            },
            _generateMonthYearHeader: function (t, e, i, n, s, o, a, r) {
                var l,
                    h,
                    c,
                    u,
                    d,
                    p,
                    f,
                    g,
                    m = this._get(t, "changeMonth"),
                    v = this._get(t, "changeYear"),
                    b = this._get(t, "showMonthAfterYear"),
                    y = "<div class='ui-datepicker-title'>",
                    _ = "";
                if (o || !m) _ += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
                else {
                    for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++)
                        (!l || c >= n.getMonth()) && (!h || c <= s.getMonth()) && (_ += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                    _ += "</select>";
                }
                if ((b || (y += _ + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml))
                    if (((t.yearshtml = ""), o || !v)) y += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else {
                        for (
                            u = this._get(t, "yearRange").split(":"),
                                d = new Date().getFullYear(),
                                p = function (t) {
                                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                                    return isNaN(e) ? d : e;
                                },
                                f = p(u[0]),
                                g = Math.max(f, p(u[1] || "")),
                                f = n ? Math.max(f, n.getFullYear()) : f,
                                g = s ? Math.min(g, s.getFullYear()) : g,
                                t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                            f <= g;
                            f++
                        )
                            t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                        (t.yearshtml += "</select>"), (y += t.yearshtml), (t.yearshtml = null);
                    }
                return (y += this._get(t, "yearSuffix")), b && (y += (!o && m && v ? "" : "&#xa0;") + _), (y += "</div>");
            },
            _adjustInstDate: function (t, e, i) {
                var n = t.selectedYear + ("Y" === i ? e : 0),
                    s = t.selectedMonth + ("M" === i ? e : 0),
                    o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                    a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
                (t.selectedDay = a.getDate()), (t.drawMonth = t.selectedMonth = a.getMonth()), (t.drawYear = t.selectedYear = a.getFullYear()), ("M" !== i && "Y" !== i) || this._notifyChange(t);
            },
            _restrictMinMax: function (t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    n = this._getMinMaxDate(t, "max"),
                    s = i && e < i ? i : e;
                return n && s > n ? n : s;
            },
            _notifyChange: function (t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]);
            },
            _getNumberOfMonths: function (t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
            },
            _getMinMaxDate: function (t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null);
            },
            _getDaysInMonth: function (t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
            },
            _getFirstDayOfMonth: function (t, e) {
                return new Date(t, e, 1).getDay();
            },
            _canAdjustMonth: function (t, e, i, n) {
                var s = this._getNumberOfMonths(t),
                    o = this._daylightSavingAdjust(new Date(i, n + (e < 0 ? e : s[0] * s[1]), 1));
                return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o);
            },
            _isInRange: function (t, e) {
                var i,
                    n,
                    s = this._getMinMaxDate(t, "min"),
                    o = this._getMinMaxDate(t, "max"),
                    a = null,
                    r = null,
                    l = this._get(t, "yearRange");
                return (
                    l && ((i = l.split(":")), (n = new Date().getFullYear()), (a = parseInt(i[0], 10)), (r = parseInt(i[1], 10)), i[0].match(/[+\-].*/) && (a += n), i[1].match(/[+\-].*/) && (r += n)),
                    (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r)
                );
            },
            _getFormatConfig: function (t) {
                var e = this._get(t, "shortYearCutoff");
                return (
                    (e = "string" != typeof e ? e : (new Date().getFullYear() % 100) + parseInt(e, 10)),
                    { shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames") }
                );
            },
            _formatDate: function (t, e, i, n) {
                e || ((t.currentDay = t.selectedDay), (t.currentMonth = t.selectedMonth), (t.currentYear = t.selectedYear));
                var s = e ? ("object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e))) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t));
            },
        }),
            (t.fn.datepicker = function (e) {
                if (!this.length) return this;
                t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), (t.datepicker.initialized = !0)), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
                var i = Array.prototype.slice.call(arguments, 1);
                return "string" != typeof e || ("isDisabled" !== e && "getDate" !== e && "widget" !== e)
                    ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1]
                        ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
                        : this.each(function () {
                              "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e);
                          })
                    : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i));
            }),
            (t.datepicker = new n()),
            (t.datepicker.initialized = !1),
            (t.datepicker.uuid = new Date().getTime()),
            (t.datepicker.version = "1.12.1");
        t.datepicker;
        t.widget("ui.dialog", {
            version: "1.12.1",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" },
                closeOnEscape: !0,
                closeText: "Close",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function (e) {
                        var i = t(this).css(e).offset().top;
                        i < 0 && t(this).css("top", e.top - i);
                    },
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null,
            },
            sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
            resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
            _create: function () {
                (this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height,
                }),
                    (this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }),
                    (this.originalTitle = this.element.attr("title")),
                    null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle),
                    this.options.disabled && (this.options.disabled = !1),
                    this._createWrapper(),
                    this.element.show().removeAttr("title").appendTo(this.uiDialog),
                    this._addClass("ui-dialog-content", "ui-widget-content"),
                    this._createTitlebar(),
                    this._createButtonPane(),
                    this.options.draggable && t.fn.draggable && this._makeDraggable(),
                    this.options.resizable && t.fn.resizable && this._makeResizable(),
                    (this._isOpen = !1),
                    this._trackFocus();
            },
            _init: function () {
                this.options.autoOpen && this.open();
            },
            _appendTo: function () {
                var e = this.options.appendTo;
                return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0);
            },
            _destroy: function () {
                var t,
                    e = this.originalPosition;
                this._untrackInstance(),
                    this._destroyOverlay(),
                    this.element.removeUniqueId().css(this.originalCss).detach(),
                    this.uiDialog.remove(),
                    this.originalTitle && this.element.attr("title", this.originalTitle),
                    (t = e.parent.children().eq(e.index)),
                    t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
            },
            widget: function () {
                return this.uiDialog;
            },
            disable: t.noop,
            enable: t.noop,
            close: function (e) {
                var i = this;
                this._isOpen &&
                    this._trigger("beforeClose", e) !== !1 &&
                    ((this._isOpen = !1),
                    (this._focusedElement = null),
                    this._destroyOverlay(),
                    this._untrackInstance(),
                    this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),
                    this._hide(this.uiDialog, this.options.hide, function () {
                        i._trigger("close", e);
                    }));
            },
            isOpen: function () {
                return this._isOpen;
            },
            moveToTop: function () {
                this._moveToTop();
            },
            _moveToTop: function (e, i) {
                var n = !1,
                    s = this.uiDialog
                        .siblings(".ui-front:visible")
                        .map(function () {
                            return +t(this).css("z-index");
                        })
                        .get(),
                    o = Math.max.apply(null, s);
                return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), (n = !0)), n && !i && this._trigger("focus", e), n;
            },
            open: function () {
                var e = this;
                return this._isOpen
                    ? void (this._moveToTop() && this._focusTabbable())
                    : ((this._isOpen = !0),
                      (this.opener = t(t.ui.safeActiveElement(this.document[0]))),
                      this._size(),
                      this._position(),
                      this._createOverlay(),
                      this._moveToTop(null, !0),
                      this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
                      this._show(this.uiDialog, this.options.show, function () {
                          e._focusTabbable(), e._trigger("focus");
                      }),
                      this._makeFocusTarget(),
                      void this._trigger("open"));
            },
            _focusTabbable: function () {
                var t = this._focusedElement;
                t || (t = this.element.find("[autofocus]")),
                    t.length || (t = this.element.find(":tabbable")),
                    t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
                    t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
                    t.length || (t = this.uiDialog),
                    t.eq(0).trigger("focus");
            },
            _keepFocus: function (e) {
                function i() {
                    var e = t.ui.safeActiveElement(this.document[0]),
                        i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                    i || this._focusTabbable();
                }
                e.preventDefault(), i.call(this), this._delay(i);
            },
            _createWrapper: function () {
                (this.uiDialog = t("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo())),
                    this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"),
                    this._on(this.uiDialog, {
                        keydown: function (e) {
                            if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                            if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                                var i = this.uiDialog.find(":tabbable"),
                                    n = i.filter(":first"),
                                    s = i.filter(":last");
                                (e.target !== s[0] && e.target !== this.uiDialog[0]) || e.shiftKey
                                    ? (e.target !== n[0] && e.target !== this.uiDialog[0]) ||
                                      !e.shiftKey ||
                                      (this._delay(function () {
                                          s.trigger("focus");
                                      }),
                                      e.preventDefault())
                                    : (this._delay(function () {
                                          n.trigger("focus");
                                      }),
                                      e.preventDefault());
                            }
                        },
                        mousedown: function (t) {
                            this._moveToTop(t) && this._focusTabbable();
                        },
                    }),
                    this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") });
            },
            _createTitlebar: function () {
                var e;
                (this.uiDialogTitlebar = t("<div>")),
                    this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"),
                    this._on(this.uiDialogTitlebar, {
                        mousedown: function (e) {
                            t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
                        },
                    }),
                    (this.uiDialogTitlebarClose = t("<button type='button'></button>")
                        .button({ label: t("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: !1 })
                        .appendTo(this.uiDialogTitlebar)),
                    this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"),
                    this._on(this.uiDialogTitlebarClose, {
                        click: function (t) {
                            t.preventDefault(), this.close(t);
                        },
                    }),
                    (e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar)),
                    this._addClass(e, "ui-dialog-title"),
                    this._title(e),
                    this.uiDialogTitlebar.prependTo(this.uiDialog),
                    this.uiDialog.attr({
                        "aria-labelledby": e.attr("id"),
                    });
            },
            _title: function (t) {
                this.options.title ? t.text(this.options.title) : t.html("&#160;");
            },
            _createButtonPane: function () {
                (this.uiDialogButtonPane = t("<div>")),
                    this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"),
                    (this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane)),
                    this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
                    this._createButtons();
            },
            _createButtons: function () {
                var e = this,
                    i = this.options.buttons;
                return (
                    this.uiDialogButtonPane.remove(),
                    this.uiButtonSet.empty(),
                    t.isEmptyObject(i) || (t.isArray(i) && !i.length)
                        ? void this._removeClass(this.uiDialog, "ui-dialog-buttons")
                        : (t.each(i, function (i, n) {
                              var s, o;
                              (n = t.isFunction(n) ? { click: n, text: i } : n),
                                  (n = t.extend({ type: "button" }, n)),
                                  (s = n.click),
                                  (o = { icon: n.icon, iconPosition: n.iconPosition, showLabel: n.showLabel, icons: n.icons, text: n.text }),
                                  delete n.click,
                                  delete n.icon,
                                  delete n.iconPosition,
                                  delete n.showLabel,
                                  delete n.icons,
                                  "boolean" == typeof n.text && delete n.text,
                                  t("<button></button>", n)
                                      .button(o)
                                      .appendTo(e.uiButtonSet)
                                      .on("click", function () {
                                          s.apply(e.element[0], arguments);
                                      });
                          }),
                          this._addClass(this.uiDialog, "ui-dialog-buttons"),
                          void this.uiDialogButtonPane.appendTo(this.uiDialog))
                );
            },
            _makeDraggable: function () {
                function e(t) {
                    return { position: t.position, offset: t.offset };
                }
                var i = this,
                    n = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function (n, s) {
                        i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s));
                    },
                    drag: function (t, n) {
                        i._trigger("drag", t, e(n));
                    },
                    stop: function (s, o) {
                        var a = o.offset.left - i.document.scrollLeft(),
                            r = o.offset.top - i.document.scrollTop();
                        (n.position = { my: "left top", at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r, of: i.window }),
                            i._removeClass(t(this), "ui-dialog-dragging"),
                            i._unblockFrames(),
                            i._trigger("dragStop", s, e(o));
                    },
                });
            },
            _makeResizable: function () {
                function e(t) {
                    return { originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size };
                }
                var i = this,
                    n = this.options,
                    s = n.resizable,
                    o = this.uiDialog.css("position"),
                    a = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog
                    .resizable({
                        cancel: ".ui-dialog-content",
                        containment: "document",
                        alsoResize: this.element,
                        maxWidth: n.maxWidth,
                        maxHeight: n.maxHeight,
                        minWidth: n.minWidth,
                        minHeight: this._minHeight(),
                        handles: a,
                        start: function (n, s) {
                            i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s));
                        },
                        resize: function (t, n) {
                            i._trigger("resize", t, e(n));
                        },
                        stop: function (s, o) {
                            var a = i.uiDialog.offset(),
                                r = a.left - i.document.scrollLeft(),
                                l = a.top - i.document.scrollTop();
                            (n.height = i.uiDialog.height()),
                                (n.width = i.uiDialog.width()),
                                (n.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l, of: i.window }),
                                i._removeClass(t(this), "ui-dialog-resizing"),
                                i._unblockFrames(),
                                i._trigger("resizeStop", s, e(o));
                        },
                    })
                    .css("position", o);
            },
            _trackFocus: function () {
                this._on(this.widget(), {
                    focusin: function (e) {
                        this._makeFocusTarget(), (this._focusedElement = t(e.target));
                    },
                });
            },
            _makeFocusTarget: function () {
                this._untrackInstance(), this._trackingInstances().unshift(this);
            },
            _untrackInstance: function () {
                var e = this._trackingInstances(),
                    i = t.inArray(this, e);
                i !== -1 && e.splice(i, 1);
            },
            _trackingInstances: function () {
                var t = this.document.data("ui-dialog-instances");
                return t || ((t = []), this.document.data("ui-dialog-instances", t)), t;
            },
            _minHeight: function () {
                var t = this.options;
                return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
            },
            _position: function () {
                var t = this.uiDialog.is(":visible");
                t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide();
            },
            _setOptions: function (e) {
                var i = this,
                    n = !1,
                    s = {};
                t.each(e, function (t, e) {
                    i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e);
                }),
                    n && (this._size(), this._position()),
                    this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s);
            },
            _setOption: function (e, i) {
                var n,
                    s,
                    o = this.uiDialog;
                "disabled" !== e &&
                    (this._super(e, i),
                    "appendTo" === e && this.uiDialog.appendTo(this._appendTo()),
                    "buttons" === e && this._createButtons(),
                    "closeText" === e &&
                        this.uiDialogTitlebarClose.button({
                            label: t("<a>")
                                .text("" + this.options.closeText)
                                .html(),
                        }),
                    "draggable" === e && ((n = o.is(":data(ui-draggable)")), n && !i && o.draggable("destroy"), !n && i && this._makeDraggable()),
                    "position" === e && this._position(),
                    "resizable" === e && ((s = o.is(":data(ui-resizable)")), s && !i && o.resizable("destroy"), s && "string" == typeof i && o.resizable("option", "handles", i), s || i === !1 || this._makeResizable()),
                    "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
            },
            _size: function () {
                var t,
                    e,
                    i,
                    n = this.options;
                this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
                    n.minWidth > n.width && (n.width = n.minWidth),
                    (t = this.uiDialog.css({ height: "auto", width: n.width }).outerHeight()),
                    (e = Math.max(0, n.minHeight - t)),
                    (i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none"),
                    "auto" === n.height ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, n.height - t)),
                    this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
            },
            _blockFrames: function () {
                this.iframeBlocks = this.document.find("iframe").map(function () {
                    var e = t(this);
                    return t("<div>").css({ position: "absolute", width: e.outerWidth(), height: e.outerHeight() }).appendTo(e.parent()).offset(e.offset())[0];
                });
            },
            _unblockFrames: function () {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
            },
            _allowInteraction: function (e) {
                return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length;
            },
            _createOverlay: function () {
                if (this.options.modal) {
                    var e = !0;
                    this._delay(function () {
                        e = !1;
                    }),
                        this.document.data("ui-dialog-overlays") ||
                            this._on(this.document, {
                                focusin: function (t) {
                                    e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable());
                                },
                            }),
                        (this.overlay = t("<div>").appendTo(this._appendTo())),
                        this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
                        this._on(this.overlay, { mousedown: "_keepFocus" }),
                        this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
                }
            },
            _destroyOverlay: function () {
                if (this.options.modal && this.overlay) {
                    var t = this.document.data("ui-dialog-overlays") - 1;
                    t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), (this.overlay = null);
                }
            },
        }),
            t.uiBackCompat !== !1 &&
                t.widget("ui.dialog", t.ui.dialog, {
                    options: { dialogClass: "" },
                    _createWrapper: function () {
                        this._super(), this.uiDialog.addClass(this.options.dialogClass);
                    },
                    _setOption: function (t, e) {
                        "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments);
                    },
                });
        t.ui.dialog,
            t.widget("ui.progressbar", {
                version: "1.12.1",
                options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null },
                min: 0,
                _create: function () {
                    (this.oldValue = this.options.value = this._constrainedValue()),
                        this.element.attr({ role: "progressbar", "aria-valuemin": this.min }),
                        this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
                        (this.valueDiv = t("<div>").appendTo(this.element)),
                        this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"),
                        this._refreshValue();
                },
                _destroy: function () {
                    this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
                },
                value: function (t) {
                    return void 0 === t ? this.options.value : ((this.options.value = this._constrainedValue(t)), void this._refreshValue());
                },
                _constrainedValue: function (t) {
                    return void 0 === t && (t = this.options.value), (this.indeterminate = t === !1), "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t));
                },
                _setOptions: function (t) {
                    var e = t.value;
                    delete t.value, this._super(t), (this.options.value = this._constrainedValue(e)), this._refreshValue();
                },
                _setOption: function (t, e) {
                    "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
                },
                _setOptionDisabled: function (t) {
                    this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t);
                },
                _percentage: function () {
                    return this.indeterminate ? 100 : (100 * (this.options.value - this.min)) / (this.options.max - this.min);
                },
                _refreshValue: function () {
                    var e = this.options.value,
                        i = this._percentage();
                    this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"),
                        this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate),
                        this.indeterminate
                            ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || ((this.overlayDiv = t("<div>").appendTo(this.valueDiv)), this._addClass(this.overlayDiv, "ui-progressbar-overlay")))
                            : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": e }), this.overlayDiv && (this.overlayDiv.remove(), (this.overlayDiv = null))),
                        this.oldValue !== e && ((this.oldValue = e), this._trigger("change")),
                        e === this.options.max && this._trigger("complete");
                },
            }),
            t.widget("ui.selectmenu", [
                t.ui.formResetMixin,
                {
                    version: "1.12.1",
                    defaultElement: "<select>",
                    options: {
                        appendTo: null,
                        classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" },
                        disabled: null,
                        icons: { button: "ui-icon-triangle-1-s" },
                        position: { my: "left top", at: "left bottom", collision: "none" },
                        width: !1,
                        change: null,
                        close: null,
                        focus: null,
                        open: null,
                        select: null,
                    },
                    _create: function () {
                        var e = this.element.uniqueId().attr("id");
                        (this.ids = { element: e, button: e + "-button", menu: e + "-menu" }), this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), (this._rendered = !1), (this.menuItems = t());
                    },
                    _drawButton: function () {
                        var e,
                            i = this,
                            n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                        (this.labels = this.element.labels().attr("for", this.ids.button)),
                            this._on(this.labels, {
                                click: function (t) {
                                    this.button.focus(), t.preventDefault();
                                },
                            }),
                            this.element.hide(),
                            (this.button = t("<span>", {
                                tabindex: this.options.disabled ? -1 : 0,
                                id: this.ids.button,
                                role: "combobox",
                                "aria-expanded": "false",
                                "aria-autocomplete": "list",
                                "aria-owns": this.ids.menu,
                                "aria-haspopup": "true",
                                title: this.element.attr("title"),
                            }).insertAfter(this.element)),
                            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"),
                            (e = t("<span>").appendTo(this.button)),
                            this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button),
                            (this.buttonItem = this._renderButtonItem(n).appendTo(this.button)),
                            this.options.width !== !1 && this._resizeButton(),
                            this._on(this.button, this._buttonEvents),
                            this.button.one("focusin", function () {
                                i._rendered || i._refreshMenu();
                            });
                    },
                    _drawMenu: function () {
                        var e = this;
                        (this.menu = t("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu })),
                            (this.menuWrap = t("<div>").append(this.menu)),
                            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
                            this.menuWrap.appendTo(this._appendTo()),
                            (this.menuInstance = this.menu
                                .menu({
                                    classes: { "ui-menu": "ui-corner-bottom" },
                                    role: "listbox",
                                    select: function (t, i) {
                                        t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t);
                                    },
                                    focus: function (t, i) {
                                        var n = i.item.data("ui-selectmenu-item");
                                        null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, { item: n }), e.isOpen || e._select(n, t)),
                                            (e.focusIndex = n.index),
                                            e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"));
                                    },
                                })
                                .menu("instance")),
                            this.menuInstance._off(this.menu, "mouseleave"),
                            (this.menuInstance._closeOnDocumentClick = function () {
                                return !1;
                            }),
                            (this.menuInstance._isDivider = function () {
                                return !1;
                            });
                    },
                    refresh: function () {
                        this._refreshMenu(), this.buttonItem.replaceWith((this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {}))), null === this.options.width && this._resizeButton();
                    },
                    _refreshMenu: function () {
                        var t,
                            e = this.element.find("option");
                        this.menu.empty(),
                            this._parseOptions(e),
                            this._renderMenu(this.menu, this.items),
                            this.menuInstance.refresh(),
                            (this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper")),
                            (this._rendered = !0),
                            e.length && ((t = this._getSelectedItem()), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
                    },
                    open: function (t) {
                        this.options.disabled ||
                            (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(),
                            this.menuItems.length && ((this.isOpen = !0), this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)));
                    },
                    _position: function () {
                        this.menuWrap.position(t.extend({ of: this.button }, this.options.position));
                    },
                    close: function (t) {
                        this.isOpen && ((this.isOpen = !1), this._toggleAttr(), (this.range = null), this._off(this.document), this._trigger("close", t));
                    },
                    widget: function () {
                        return this.button;
                    },
                    menuWidget: function () {
                        return this.menu;
                    },
                    _renderButtonItem: function (e) {
                        var i = t("<span>");
                        return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i;
                    },
                    _renderMenu: function (e, i) {
                        var n = this,
                            s = "";
                        t.each(i, function (i, o) {
                            var a;
                            o.optgroup !== s &&
                                ((a = t("<li>", { text: o.optgroup })),
                                n._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")),
                                a.appendTo(e),
                                (s = o.optgroup)),
                                n._renderItemData(e, o);
                        });
                    },
                    _renderItemData: function (t, e) {
                        return this._renderItem(t, e).data("ui-selectmenu-item", e);
                    },
                    _renderItem: function (e, i) {
                        var n = t("<li>"),
                            s = t("<div>", { title: i.element.attr("title") });
                        return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), n.append(s).appendTo(e);
                    },
                    _setText: function (t, e) {
                        e ? t.text(e) : t.html("&#160;");
                    },
                    _move: function (t, e) {
                        var i,
                            n,
                            s = ".ui-menu-item";
                        this.isOpen ? (i = this.menuItems.eq(this.focusIndex).parent("li")) : ((i = this.menuItems.eq(this.element[0].selectedIndex).parent("li")), (s += ":not(.ui-state-disabled)")),
                            (n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0)),
                            n.length && this.menuInstance.focus(e, n);
                    },
                    _getSelectedItem: function () {
                        return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
                    },
                    _toggle: function (t) {
                        this[this.isOpen ? "close" : "open"](t);
                    },
                    _setSelection: function () {
                        var t;
                        this.range && (window.getSelection ? ((t = window.getSelection()), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus());
                    },
                    _documentClick: {
                        mousedown: function (e) {
                            this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e));
                        },
                    },
                    _buttonEvents: {
                        mousedown: function () {
                            var t;
                            window.getSelection ? ((t = window.getSelection()), t.rangeCount && (this.range = t.getRangeAt(0))) : (this.range = document.selection.createRange());
                        },
                        click: function (t) {
                            this._setSelection(), this._toggle(t);
                        },
                        keydown: function (e) {
                            var i = !0;
                            switch (e.keyCode) {
                                case t.ui.keyCode.TAB:
                                case t.ui.keyCode.ESCAPE:
                                    this.close(e), (i = !1);
                                    break;
                                case t.ui.keyCode.ENTER:
                                    this.isOpen && this._selectFocusedItem(e);
                                    break;
                                case t.ui.keyCode.UP:
                                    e.altKey ? this._toggle(e) : this._move("prev", e);
                                    break;
                                case t.ui.keyCode.DOWN:
                                    e.altKey ? this._toggle(e) : this._move("next", e);
                                    break;
                                case t.ui.keyCode.SPACE:
                                    this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                                    break;
                                case t.ui.keyCode.LEFT:
                                    this._move("prev", e);
                                    break;
                                case t.ui.keyCode.RIGHT:
                                    this._move("next", e);
                                    break;
                                case t.ui.keyCode.HOME:
                                case t.ui.keyCode.PAGE_UP:
                                    this._move("first", e);
                                    break;
                                case t.ui.keyCode.END:
                                case t.ui.keyCode.PAGE_DOWN:
                                    this._move("last", e);
                                    break;
                                default:
                                    this.menu.trigger(e), (i = !1);
                            }
                            i && e.preventDefault();
                        },
                    },
                    _selectFocusedItem: function (t) {
                        var e = this.menuItems.eq(this.focusIndex).parent("li");
                        e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t);
                    },
                    _select: function (t, e) {
                        var i = this.element[0].selectedIndex;
                        (this.element[0].selectedIndex = t.index),
                            this.buttonItem.replaceWith((this.buttonItem = this._renderButtonItem(t))),
                            this._setAria(t),
                            this._trigger("select", e, { item: t }),
                            t.index !== i && this._trigger("change", e, { item: t }),
                            this.close(e);
                    },
                    _setAria: function (t) {
                        var e = this.menuItems.eq(t.index).attr("id");
                        this.button.attr({ "aria-labelledby": e, "aria-activedescendant": e }), this.menu.attr("aria-activedescendant", e);
                    },
                    _setOption: function (t, e) {
                        if ("icons" === t) {
                            var i = this.button.find("span.ui-icon");
                            this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button);
                        }
                        this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton();
                    },
                    _setOptionDisabled: function (t) {
                        this._super(t),
                            this.menuInstance.option("disabled", t),
                            this.button.attr("aria-disabled", t),
                            this._toggleClass(this.button, null, "ui-state-disabled", t),
                            this.element.prop("disabled", t),
                            t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
                    },
                    _appendTo: function () {
                        var e = this.options.appendTo;
                        return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), (e && e[0]) || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e;
                    },
                    _toggleAttr: function () {
                        this.button.attr("aria-expanded", this.isOpen),
                            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))
                                ._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))
                                ._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen),
                            this.menu.attr("aria-hidden", !this.isOpen);
                    },
                    _resizeButton: function () {
                        var t = this.options.width;
                        return t === !1 ? void this.button.css("width", "") : (null === t && ((t = this.element.show().outerWidth()), this.element.hide()), void this.button.outerWidth(t));
                    },
                    _resizeMenu: function () {
                        this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
                    },
                    _getCreateOptions: function () {
                        var t = this._super();
                        return (t.disabled = this.element.prop("disabled")), t;
                    },
                    _parseOptions: function (e) {
                        var i = this,
                            n = [];
                        e.each(function (e, s) {
                            n.push(i._parseOption(t(s), e));
                        }),
                            (this.items = n);
                    },
                    _parseOption: function (t, e) {
                        var i = t.parent("optgroup");
                        return { element: t, index: e, value: t.val(), label: t.text(), optgroup: i.attr("label") || "", disabled: i.prop("disabled") || t.prop("disabled") };
                    },
                    _destroy: function () {
                        this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
                    },
                },
            ]),
            t.widget("ui.slider", t.ui.mouse, {
                version: "1.12.1",
                widgetEventPrefix: "slide",
                options: {
                    animate: !1,
                    classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" },
                    distance: 0,
                    max: 100,
                    min: 0,
                    orientation: "horizontal",
                    range: !1,
                    step: 1,
                    value: 0,
                    values: null,
                    change: null,
                    slide: null,
                    start: null,
                    stop: null,
                },
                numPages: 5,
                _create: function () {
                    (this._keySliding = !1),
                        (this._mouseSliding = !1),
                        (this._animateOff = !0),
                        (this._handleIndex = null),
                        this._detectOrientation(),
                        this._mouseInit(),
                        this._calculateNewMax(),
                        this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"),
                        this._refresh(),
                        (this._animateOff = !1);
                },
                _refresh: function () {
                    this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
                },
                _createHandles: function () {
                    var e,
                        i,
                        n = this.options,
                        s = this.element.find(".ui-slider-handle"),
                        o = "<span tabindex='0'></span>",
                        a = [];
                    for (i = (n.values && n.values.length) || 1, s.length > i && (s.slice(i).remove(), (s = s.slice(0, i))), e = s.length; e < i; e++) a.push(o);
                    (this.handles = s.add(t(a.join("")).appendTo(this.element))),
                        this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
                        (this.handle = this.handles.eq(0)),
                        this.handles.each(function (e) {
                            t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
                        });
                },
                _createRange: function () {
                    var e = this.options;
                    e.range
                        ? (e.range === !0 &&
                              (e.values ? (e.values.length && 2 !== e.values.length ? (e.values = [e.values[0], e.values[0]]) : t.isArray(e.values) && (e.values = e.values.slice(0))) : (e.values = [this._valueMin(), this._valueMin()])),
                          this.range && this.range.length
                              ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" }))
                              : ((this.range = t("<div>").appendTo(this.element)), this._addClass(this.range, "ui-slider-range")),
                          ("min" !== e.range && "max" !== e.range) || this._addClass(this.range, "ui-slider-range-" + e.range))
                        : (this.range && this.range.remove(), (this.range = null));
                },
                _setupEvents: function () {
                    this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
                },
                _destroy: function () {
                    this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
                },
                _mouseCapture: function (e) {
                    var i,
                        n,
                        s,
                        o,
                        a,
                        r,
                        l,
                        h,
                        c = this,
                        u = this.options;
                    return (
                        !u.disabled &&
                        ((this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }),
                        (this.elementOffset = this.element.offset()),
                        (i = { x: e.pageX, y: e.pageY }),
                        (n = this._normValueFromMouse(i)),
                        (s = this._valueMax() - this._valueMin() + 1),
                        this.handles.each(function (e) {
                            var i = Math.abs(n - c.values(e));
                            (s > i || (s === i && (e === c._lastChangedValue || c.values(e) === u.min))) && ((s = i), (o = t(this)), (a = e));
                        }),
                        (r = this._start(e, a)),
                        r !== !1 &&
                            ((this._mouseSliding = !0),
                            (this._handleIndex = a),
                            this._addClass(o, null, "ui-state-active"),
                            o.trigger("focus"),
                            (l = o.offset()),
                            (h = !t(e.target).parents().addBack().is(".ui-slider-handle")),
                            (this._clickOffset = h
                                ? { left: 0, top: 0 }
                                : {
                                      left: e.pageX - l.left - o.width() / 2,
                                      top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0),
                                  }),
                            this.handles.hasClass("ui-state-hover") || this._slide(e, a, n),
                            (this._animateOff = !0),
                            !0))
                    );
                },
                _mouseStart: function () {
                    return !0;
                },
                _mouseDrag: function (t) {
                    var e = { x: t.pageX, y: t.pageY },
                        i = this._normValueFromMouse(e);
                    return this._slide(t, this._handleIndex, i), !1;
                },
                _mouseStop: function (t) {
                    return (
                        this._removeClass(this.handles, null, "ui-state-active"),
                        (this._mouseSliding = !1),
                        this._stop(t, this._handleIndex),
                        this._change(t, this._handleIndex),
                        (this._handleIndex = null),
                        (this._clickOffset = null),
                        (this._animateOff = !1),
                        !1
                    );
                },
                _detectOrientation: function () {
                    this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
                },
                _normValueFromMouse: function (t) {
                    var e, i, n, s, o;
                    return (
                        "horizontal" === this.orientation
                            ? ((e = this.elementSize.width), (i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)))
                            : ((e = this.elementSize.height), (i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))),
                        (n = i / e),
                        n > 1 && (n = 1),
                        n < 0 && (n = 0),
                        "vertical" === this.orientation && (n = 1 - n),
                        (s = this._valueMax() - this._valueMin()),
                        (o = this._valueMin() + n * s),
                        this._trimAlignValue(o)
                    );
                },
                _uiHash: function (t, e, i) {
                    var n = { handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value() };
                    return this._hasMultipleValues() && ((n.value = void 0 !== e ? e : this.values(t)), (n.values = i || this.values())), n;
                },
                _hasMultipleValues: function () {
                    return this.options.values && this.options.values.length;
                },
                _start: function (t, e) {
                    return this._trigger("start", t, this._uiHash(e));
                },
                _slide: function (t, e, i) {
                    var n,
                        s,
                        o = this.value(),
                        a = this.values();
                    this._hasMultipleValues() && ((s = this.values(e ? 0 : 1)), (o = this.values(e)), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), (a[e] = i)),
                        i !== o && ((n = this._trigger("slide", t, this._uiHash(e, i, a))), n !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
                },
                _stop: function (t, e) {
                    this._trigger("stop", t, this._uiHash(e));
                },
                _change: function (t, e) {
                    this._keySliding || this._mouseSliding || ((this._lastChangedValue = e), this._trigger("change", t, this._uiHash(e)));
                },
                value: function (t) {
                    return arguments.length ? ((this.options.value = this._trimAlignValue(t)), this._refreshValue(), void this._change(null, 0)) : this._value();
                },
                values: function (e, i) {
                    var n, s, o;
                    if (arguments.length > 1) return (this.options.values[e] = this._trimAlignValue(i)), this._refreshValue(), void this._change(null, e);
                    if (!arguments.length) return this._values();
                    if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
                    for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) (n[o] = this._trimAlignValue(s[o])), this._change(null, o);
                    this._refreshValue();
                },
                _setOption: function (e, i) {
                    var n,
                        s = 0;
                    switch (
                        ("range" === e &&
                            this.options.range === !0 &&
                            ("min" === i ? ((this.options.value = this._values(0)), (this.options.values = null)) : "max" === i && ((this.options.value = this._values(this.options.values.length - 1)), (this.options.values = null))),
                        t.isArray(this.options.values) && (s = this.options.values.length),
                        this._super(e, i),
                        e)
                    ) {
                        case "orientation":
                            this._detectOrientation(),
                                this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation),
                                this._refreshValue(),
                                this.options.range && this._refreshRange(i),
                                this.handles.css("horizontal" === i ? "bottom" : "left", "");
                            break;
                        case "value":
                            (this._animateOff = !0), this._refreshValue(), this._change(null, 0), (this._animateOff = !1);
                            break;
                        case "values":
                            for (this._animateOff = !0, this._refreshValue(), n = s - 1; n >= 0; n--) this._change(null, n);
                            this._animateOff = !1;
                            break;
                        case "step":
                        case "min":
                        case "max":
                            (this._animateOff = !0), this._calculateNewMax(), this._refreshValue(), (this._animateOff = !1);
                            break;
                        case "range":
                            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
                    }
                },
                _setOptionDisabled: function (t) {
                    this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
                },
                _value: function () {
                    var t = this.options.value;
                    return (t = this._trimAlignValue(t));
                },
                _values: function (t) {
                    var e, i, n;
                    if (arguments.length) return (e = this.options.values[t]), (e = this._trimAlignValue(e));
                    if (this._hasMultipleValues()) {
                        for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                        return i;
                    }
                    return [];
                },
                _trimAlignValue: function (t) {
                    if (t <= this._valueMin()) return this._valueMin();
                    if (t >= this._valueMax()) return this._valueMax();
                    var e = this.options.step > 0 ? this.options.step : 1,
                        i = (t - this._valueMin()) % e,
                        n = t - i;
                    return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5));
                },
                _calculateNewMax: function () {
                    var t = this.options.max,
                        e = this._valueMin(),
                        i = this.options.step,
                        n = Math.round((t - e) / i) * i;
                    (t = n + e), t > this.options.max && (t -= i), (this.max = parseFloat(t.toFixed(this._precision())));
                },
                _precision: function () {
                    var t = this._precisionOf(this.options.step);
                    return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
                },
                _precisionOf: function (t) {
                    var e = t.toString(),
                        i = e.indexOf(".");
                    return i === -1 ? 0 : e.length - i - 1;
                },
                _valueMin: function () {
                    return this.options.min;
                },
                _valueMax: function () {
                    return this.max;
                },
                _refreshRange: function (t) {
                    "vertical" === t && this.range.css({ width: "", left: "" }), "horizontal" === t && this.range.css({ height: "", bottom: "" });
                },
                _refreshValue: function () {
                    var e,
                        i,
                        n,
                        s,
                        o,
                        a = this.options.range,
                        r = this.options,
                        l = this,
                        h = !this._animateOff && r.animate,
                        c = {};
                    this._hasMultipleValues()
                        ? this.handles.each(function (n) {
                              (i = ((l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin())) * 100),
                                  (c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%"),
                                  t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate),
                                  l.options.range === !0 &&
                                      ("horizontal" === l.orientation
                                          ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === n && l.range[h ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: r.animate }))
                                          : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === n && l.range[h ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: r.animate }))),
                                  (e = i);
                          })
                        : ((n = this.value()),
                          (s = this._valueMin()),
                          (o = this._valueMax()),
                          (i = o !== s ? ((n - s) / (o - s)) * 100 : 0),
                          (c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%"),
                          this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate),
                          "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ width: i + "%" }, r.animate),
                          "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ width: 100 - i + "%" }, r.animate),
                          "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ height: i + "%" }, r.animate),
                          "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ height: 100 - i + "%" }, r.animate));
                },
                _handleEvents: {
                    keydown: function (e) {
                        var i,
                            n,
                            s,
                            o,
                            a = t(e.target).data("ui-slider-handle-index");
                        switch (e.keyCode) {
                            case t.ui.keyCode.HOME:
                            case t.ui.keyCode.END:
                            case t.ui.keyCode.PAGE_UP:
                            case t.ui.keyCode.PAGE_DOWN:
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.RIGHT:
                            case t.ui.keyCode.DOWN:
                            case t.ui.keyCode.LEFT:
                                if ((e.preventDefault(), !this._keySliding && ((this._keySliding = !0), this._addClass(t(e.target), null, "ui-state-active"), (i = this._start(e, a)), i === !1))) return;
                        }
                        switch (((o = this.options.step), (n = s = this._hasMultipleValues() ? this.values(a) : this.value()), e.keyCode)) {
                            case t.ui.keyCode.HOME:
                                s = this._valueMin();
                                break;
                            case t.ui.keyCode.END:
                                s = this._valueMax();
                                break;
                            case t.ui.keyCode.PAGE_UP:
                                s = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case t.ui.keyCode.PAGE_DOWN:
                                s = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.RIGHT:
                                if (n === this._valueMax()) return;
                                s = this._trimAlignValue(n + o);
                                break;
                            case t.ui.keyCode.DOWN:
                            case t.ui.keyCode.LEFT:
                                if (n === this._valueMin()) return;
                                s = this._trimAlignValue(n - o);
                        }
                        this._slide(e, a, s);
                    },
                    keyup: function (e) {
                        var i = t(e.target).data("ui-slider-handle-index");
                        this._keySliding && ((this._keySliding = !1), this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"));
                    },
                },
            });
        t.widget("ui.spinner", {
            version: "1.12.1",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" },
                culture: null,
                icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null,
            },
            _create: function () {
                this._setOption("max", this.options.max),
                    this._setOption("min", this.options.min),
                    this._setOption("step", this.options.step),
                    "" !== this.value() && this._value(this.element.val(), !0),
                    this._draw(),
                    this._on(this._events),
                    this._refresh(),
                    this._on(this.window, {
                        beforeunload: function () {
                            this.element.removeAttr("autocomplete");
                        },
                    });
            },
            _getCreateOptions: function () {
                var e = this._super(),
                    i = this.element;
                return (
                    t.each(["min", "max", "step"], function (t, n) {
                        var s = i.attr(n);
                        null != s && s.length && (e[n] = s);
                    }),
                    e
                );
            },
            _events: {
                keydown: function (t) {
                    this._start(t) && this._keydown(t) && t.preventDefault();
                },
                keyup: "_stop",
                focus: function () {
                    this.previous = this.element.val();
                },
                blur: function (t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void (this.previous !== this.element.val() && this._trigger("change", t)));
                },
                mousewheel: function (t, e) {
                    if (e) {
                        if (!this.spinning && !this._start(t)) return !1;
                        this._spin((e > 0 ? 1 : -1) * this.options.step, t),
                            clearTimeout(this.mousewheelTimer),
                            (this.mousewheelTimer = this._delay(function () {
                                this.spinning && this._stop(t);
                            }, 100)),
                            t.preventDefault();
                    }
                },
                "mousedown .ui-spinner-button": function (e) {
                    function i() {
                        var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
                        e ||
                            (this.element.trigger("focus"),
                            (this.previous = n),
                            this._delay(function () {
                                this.previous = n;
                            }));
                    }
                    var n;
                    (n = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val()),
                        e.preventDefault(),
                        i.call(this),
                        (this.cancelBlur = !0),
                        this._delay(function () {
                            delete this.cancelBlur, i.call(this);
                        }),
                        this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e);
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function (e) {
                    if (t(e.currentTarget).hasClass("ui-state-active")) return this._start(e) !== !1 && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e);
                },
                "mouseleave .ui-spinner-button": "_stop",
            },
            _enhance: function () {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
            },
            _draw: function () {
                this._enhance(),
                    this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"),
                    this._addClass("ui-spinner-input"),
                    this.element.attr("role", "spinbutton"),
                    (this.buttons = this.uiSpinner
                        .children("a")
                        .attr("tabIndex", -1)
                        .attr("aria-hidden", !0)
                        .button({ classes: { "ui-button": "" } })),
                    this._removeClass(this.buttons, "ui-corner-all"),
                    this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"),
                    this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"),
                    this.buttons.first().button({ icon: this.options.icons.up, showLabel: !1 }),
                    this.buttons.last().button({ icon: this.options.icons.down, showLabel: !1 }),
                    this.buttons.height() > Math.ceil(0.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height());
            },
            _keydown: function (e) {
                var i = this.options,
                    n = t.ui.keyCode;
                switch (e.keyCode) {
                    case n.UP:
                        return this._repeat(null, 1, e), !0;
                    case n.DOWN:
                        return this._repeat(null, -1, e), !0;
                    case n.PAGE_UP:
                        return this._repeat(null, i.page, e), !0;
                    case n.PAGE_DOWN:
                        return this._repeat(null, -i.page, e), !0;
                }
                return !1;
            },
            _start: function (t) {
                return !(!this.spinning && this._trigger("start", t) === !1) && (this.counter || (this.counter = 1), (this.spinning = !0), !0);
            },
            _repeat: function (t, e, i) {
                (t = t || 500),
                    clearTimeout(this.timer),
                    (this.timer = this._delay(function () {
                        this._repeat(40, e, i);
                    }, t)),
                    this._spin(e * this.options.step, i);
            },
            _spin: function (t, e) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), (i = this._adjustValue(i + t * this._increment(this.counter))), (this.spinning && this._trigger("spin", e, { value: i }) === !1) || (this._value(i), this.counter++);
            },
            _increment: function (e) {
                var i = this.options.incremental;
                return i ? (t.isFunction(i) ? i(e) : Math.floor((e * e * e) / 5e4 - (e * e) / 500 + (17 * e) / 200 + 1)) : 1;
            },
            _precision: function () {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
            },
            _precisionOf: function (t) {
                var e = t.toString(),
                    i = e.indexOf(".");
                return i === -1 ? 0 : e.length - i - 1;
            },
            _adjustValue: function (t) {
                var e,
                    i,
                    n = this.options;
                return (
                    (e = null !== n.min ? n.min : 0),
                    (i = t - e),
                    (i = Math.round(i / n.step) * n.step),
                    (t = e + i),
                    (t = parseFloat(t.toFixed(this._precision()))),
                    null !== n.max && t > n.max ? n.max : null !== n.min && t < n.min ? n.min : t
                );
            },
            _stop: function (t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), (this.counter = 0), (this.spinning = !1), this._trigger("stop", t));
            },
            _setOption: function (t, e) {
                var i, n, s;
                return "culture" === t || "numberFormat" === t
                    ? ((i = this._parse(this.element.val())), (this.options[t] = e), void this.element.val(this._format(i)))
                    : (("max" !== t && "min" !== t && "step" !== t) || ("string" == typeof e && (e = this._parse(e))),
                      "icons" === t &&
                          ((n = this.buttons.first().find(".ui-icon")),
                          this._removeClass(n, null, this.options.icons.up),
                          this._addClass(n, null, e.up),
                          (s = this.buttons.last().find(".ui-icon")),
                          this._removeClass(s, null, this.options.icons.down),
                          this._addClass(s, null, e.down)),
                      void this._super(t, e));
            },
            _setOptionDisabled: function (t) {
                this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable");
            },
            _setOptions: r(function (t) {
                this._super(t);
            }),
            _parse: function (t) {
                return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t;
            },
            _format: function (t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t;
            },
            _refresh: function () {
                this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) });
            },
            isValid: function () {
                var t = this.value();
                return null !== t && t === this._adjustValue(t);
            },
            _value: function (t, e) {
                var i;
                "" !== t && ((i = this._parse(t)), null !== i && (e || (i = this._adjustValue(i)), (t = this._format(i)))), this.element.val(t), this._refresh();
            },
            _destroy: function () {
                this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element);
            },
            stepUp: r(function (t) {
                this._stepUp(t);
            }),
            _stepUp: function (t) {
                this._start() && (this._spin((t || 1) * this.options.step), this._stop());
            },
            stepDown: r(function (t) {
                this._stepDown(t);
            }),
            _stepDown: function (t) {
                this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
            },
            pageUp: r(function (t) {
                this._stepUp((t || 1) * this.options.page);
            }),
            pageDown: r(function (t) {
                this._stepDown((t || 1) * this.options.page);
            }),
            value: function (t) {
                return arguments.length ? void r(this._value).call(this, t) : this._parse(this.element.val());
            },
            widget: function () {
                return this.uiSpinner;
            },
        }),
            t.uiBackCompat !== !1 &&
                t.widget("ui.spinner", t.ui.spinner, {
                    _enhance: function () {
                        this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                    },
                    _uiSpinnerHtml: function () {
                        return "<span>";
                    },
                    _buttonHtml: function () {
                        return "<a></a><a></a>";
                    },
                });
        t.ui.spinner;
        t.widget("ui.tabs", {
            version: "1.12.1",
            delay: 300,
            options: {
                active: null,
                classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" },
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null,
            },
            _isLocal: (function () {
                var t = /#.*$/;
                return function (e) {
                    var i, n;
                    (i = e.href.replace(t, "")), (n = location.href.replace(t, ""));
                    try {
                        i = decodeURIComponent(i);
                    } catch (s) {}
                    try {
                        n = decodeURIComponent(n);
                    } catch (s) {}
                    return e.hash.length > 1 && i === n;
                };
            })(),
            _create: function () {
                var e = this,
                    i = this.options;
                (this.running = !1),
                    this._addClass("ui-tabs", "ui-widget ui-widget-content"),
                    this._toggleClass("ui-tabs-collapsible", null, i.collapsible),
                    this._processTabs(),
                    (i.active = this._initialActive()),
                    t.isArray(i.disabled) &&
                        (i.disabled = t
                            .unique(
                                i.disabled.concat(
                                    t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                                        return e.tabs.index(t);
                                    })
                                )
                            )
                            .sort()),
                    this.options.active !== !1 && this.anchors.length ? (this.active = this._findActive(i.active)) : (this.active = t()),
                    this._refresh(),
                    this.active.length && this.load(i.active);
            },
            _initialActive: function () {
                var e = this.options.active,
                    i = this.options.collapsible,
                    n = location.hash.substring(1);
                return (
                    null === e &&
                        (n &&
                            this.tabs.each(function (i, s) {
                                if (t(s).attr("aria-controls") === n) return (e = i), !1;
                            }),
                        null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
                        (null !== e && e !== -1) || (e = !!this.tabs.length && 0)),
                    e !== !1 && ((e = this.tabs.index(this.tabs.eq(e))), e === -1 && (e = !i && 0)),
                    !i && e === !1 && this.anchors.length && (e = 0),
                    e
                );
            },
            _getCreateEventData: function () {
                return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t() };
            },
            _tabKeydown: function (e) {
                var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                    n = this.tabs.index(i),
                    s = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                            n++;
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.LEFT:
                            (s = !1), n--;
                            break;
                        case t.ui.keyCode.END:
                            n = this.anchors.length - 1;
                            break;
                        case t.ui.keyCode.HOME:
                            n = 0;
                            break;
                        case t.ui.keyCode.SPACE:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                        case t.ui.keyCode.ENTER:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
                        default:
                            return;
                    }
                    e.preventDefault(),
                        clearTimeout(this.activating),
                        (n = this._focusNextTab(n, s)),
                        e.ctrlKey ||
                            e.metaKey ||
                            (i.attr("aria-selected", "false"),
                            this.tabs.eq(n).attr("aria-selected", "true"),
                            (this.activating = this._delay(function () {
                                this.option("active", n);
                            }, this.delay)));
                }
            },
            _panelKeydown: function (e) {
                this._handlePageNav(e) || (e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus")));
            },
            _handlePageNav: function (e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP
                    ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0)
                    : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN
                    ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0)
                    : void 0;
            },
            _findNextTab: function (e, i) {
                function n() {
                    return e > s && (e = 0), e < 0 && (e = s), e;
                }
                for (var s = this.tabs.length - 1; t.inArray(n(), this.options.disabled) !== -1; ) e = i ? e + 1 : e - 1;
                return e;
            },
            _focusNextTab: function (t, e) {
                return (t = this._findNextTab(t, e)), this.tabs.eq(t).trigger("focus"), t;
            },
            _setOption: function (t, e) {
                return "active" === t
                    ? void this._activate(e)
                    : (this._super(t, e),
                      "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)),
                      "event" === t && this._setupEvents(e),
                      void ("heightStyle" === t && this._setupHeightStyle(e)));
            },
            _sanitizeSelector: function (t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
            },
            refresh: function () {
                var e = this.options,
                    i = this.tablist.children(":has(a[href])");
                (e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                    return i.index(t);
                })),
                    this._processTabs(),
                    e.active !== !1 && this.anchors.length
                        ? this.active.length && !t.contains(this.tablist[0], this.active[0])
                            ? this.tabs.length === e.disabled.length
                                ? ((e.active = !1), (this.active = t()))
                                : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1))
                            : (e.active = this.tabs.index(this.active))
                        : ((e.active = !1), (this.active = t())),
                    this._refresh();
            },
            _refresh: function () {
                this._setOptionDisabled(this.options.disabled),
                    this._setupEvents(this.options.event),
                    this._setupHeightStyle(this.options.heightStyle),
                    this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }),
                    this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }),
                    this.active.length
                        ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }),
                          this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
                          this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" }))
                        : this.tabs.eq(0).attr("tabIndex", 0);
            },
            _processTabs: function () {
                var e = this,
                    i = this.tabs,
                    n = this.anchors,
                    s = this.panels;
                (this.tablist = this._getList().attr("role", "tablist")),
                    this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"),
                    this.tablist
                        .on("mousedown" + this.eventNamespace, "> li", function (e) {
                            t(this).is(".ui-state-disabled") && e.preventDefault();
                        })
                        .on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                            t(this).closest("li").is(".ui-state-disabled") && this.blur();
                        }),
                    (this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 })),
                    this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
                    (this.anchors = this.tabs
                        .map(function () {
                            return t("a", this)[0];
                        })
                        .attr({ role: "presentation", tabIndex: -1 })),
                    this._addClass(this.anchors, "ui-tabs-anchor"),
                    (this.panels = t()),
                    this.anchors.each(function (i, n) {
                        var s,
                            o,
                            a,
                            r = t(n).uniqueId().attr("id"),
                            l = t(n).closest("li"),
                            h = l.attr("aria-controls");
                        e._isLocal(n)
                            ? ((s = n.hash), (a = s.substring(1)), (o = e.element.find(e._sanitizeSelector(s))))
                            : ((a = l.attr("aria-controls") || t({}).uniqueId()[0].id),
                              (s = "#" + a),
                              (o = e.element.find(s)),
                              o.length || ((o = e._createPanel(a)), o.insertAfter(e.panels[i - 1] || e.tablist)),
                              o.attr("aria-live", "polite")),
                            o.length && (e.panels = e.panels.add(o)),
                            h && l.data("ui-tabs-aria-controls", h),
                            l.attr({ "aria-controls": a, "aria-labelledby": r }),
                            o.attr("aria-labelledby", r);
                    }),
                    this.panels.attr("role", "tabpanel"),
                    this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
                    i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)));
            },
            _getList: function () {
                return this.tablist || this.element.find("ol, ul").eq(0);
            },
            _createPanel: function (e) {
                return t("<div>").attr("id", e).data("ui-tabs-destroy", !0);
            },
            _setOptionDisabled: function (e) {
                var i, n, s;
                for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : (e = !1)), s = 0; (n = this.tabs[s]); s++)
                    (i = t(n)), e === !0 || t.inArray(s, e) !== -1 ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
                (this.options.disabled = e), this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0);
            },
            _setupEvents: function (e) {
                var i = {};
                e &&
                    t.each(e.split(" "), function (t, e) {
                        i[e] = "_eventHandler";
                    }),
                    this._off(this.anchors.add(this.tabs).add(this.panels)),
                    this._on(!0, this.anchors, {
                        click: function (t) {
                            t.preventDefault();
                        },
                    }),
                    this._on(this.anchors, i),
                    this._on(this.tabs, { keydown: "_tabKeydown" }),
                    this._on(this.panels, { keydown: "_panelKeydown" }),
                    this._focusable(this.tabs),
                    this._hoverable(this.tabs);
            },
            _setupHeightStyle: function (e) {
                var i,
                    n = this.element.parent();
                "fill" === e
                    ? ((i = n.height()),
                      (i -= this.element.outerHeight() - this.element.height()),
                      this.element.siblings(":visible").each(function () {
                          var e = t(this),
                              n = e.css("position");
                          "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0));
                      }),
                      this.element
                          .children()
                          .not(this.panels)
                          .each(function () {
                              i -= t(this).outerHeight(!0);
                          }),
                      this.panels
                          .each(function () {
                              t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
                          })
                          .css("overflow", "auto"))
                    : "auto" === e &&
                      ((i = 0),
                      this.panels
                          .each(function () {
                              i = Math.max(i, t(this).height("").height());
                          })
                          .height(i));
            },
            _eventHandler: function (e) {
                var i = this.options,
                    n = this.active,
                    s = t(e.currentTarget),
                    o = s.closest("li"),
                    a = o[0] === n[0],
                    r = a && i.collapsible,
                    l = r ? t() : this._getPanelForTab(o),
                    h = n.length ? this._getPanelForTab(n) : t(),
                    c = { oldTab: n, oldPanel: h, newTab: r ? t() : o, newPanel: l };
                e.preventDefault(),
                    o.hasClass("ui-state-disabled") ||
                        o.hasClass("ui-tabs-loading") ||
                        this.running ||
                        (a && !i.collapsible) ||
                        this._trigger("beforeActivate", e, c) === !1 ||
                        ((i.active = !r && this.tabs.index(o)),
                        (this.active = a ? t() : o),
                        this.xhr && this.xhr.abort(),
                        h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."),
                        l.length && this.load(this.tabs.index(o), e),
                        this._toggle(e, c));
            },
            _toggle: function (e, i) {
                function n() {
                    (o.running = !1), o._trigger("activate", e, i);
                }
                function s() {
                    o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, n) : (a.show(), n());
                }
                var o = this,
                    a = i.newPanel,
                    r = i.oldPanel;
                (this.running = !0),
                    r.length && this.options.hide
                        ? this._hide(r, this.options.hide, function () {
                              o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s();
                          })
                        : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), s()),
                    r.attr("aria-hidden", "true"),
                    i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }),
                    a.length && r.length
                        ? i.oldTab.attr("tabIndex", -1)
                        : a.length &&
                          this.tabs
                              .filter(function () {
                                  return 0 === t(this).attr("tabIndex");
                              })
                              .attr("tabIndex", -1),
                    a.attr("aria-hidden", "false"),
                    i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
            },
            _activate: function (e) {
                var i,
                    n = this._findActive(e);
                n[0] !== this.active[0] && (n.length || (n = this.active), (i = n.find(".ui-tabs-anchor")[0]), this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }));
            },
            _findActive: function (e) {
                return e === !1 ? t() : this.tabs.eq(e);
            },
            _getIndex: function (e) {
                return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e;
            },
            _destroy: function () {
                this.xhr && this.xhr.abort(),
                    this.tablist.removeAttr("role").off(this.eventNamespace),
                    this.anchors.removeAttr("role tabIndex").removeUniqueId(),
                    this.tabs.add(this.panels).each(function () {
                        t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
                    }),
                    this.tabs.each(function () {
                        var e = t(this),
                            i = e.data("ui-tabs-aria-controls");
                        i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls");
                    }),
                    this.panels.show(),
                    "content" !== this.options.heightStyle && this.panels.css("height", "");
            },
            enable: function (e) {
                var i = this.options.disabled;
                i !== !1 &&
                    (void 0 === e
                        ? (i = !1)
                        : ((e = this._getIndex(e)),
                          (i = t.isArray(i)
                              ? t.map(i, function (t) {
                                    return t !== e ? t : null;
                                })
                              : t.map(this.tabs, function (t, i) {
                                    return i !== e ? i : null;
                                }))),
                    this._setOptionDisabled(i));
            },
            disable: function (e) {
                var i = this.options.disabled;
                if (i !== !0) {
                    if (void 0 === e) i = !0;
                    else {
                        if (((e = this._getIndex(e)), t.inArray(e, i) !== -1)) return;
                        i = t.isArray(i) ? t.merge([e], i).sort() : [e];
                    }
                    this._setOptionDisabled(i);
                }
            },
            load: function (e, i) {
                e = this._getIndex(e);
                var n = this,
                    s = this.tabs.eq(e),
                    o = s.find(".ui-tabs-anchor"),
                    a = this._getPanelForTab(s),
                    r = { tab: s, panel: a },
                    l = function (t, e) {
                        "abort" === e && n.panels.stop(!1, !0), n._removeClass(s, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === n.xhr && delete n.xhr;
                    };
                this._isLocal(o[0]) ||
                    ((this.xhr = t.ajax(this._ajaxSettings(o, i, r))),
                    this.xhr &&
                        "canceled" !== this.xhr.statusText &&
                        (this._addClass(s, "ui-tabs-loading"),
                        a.attr("aria-busy", "true"),
                        this.xhr
                            .done(function (t, e, s) {
                                setTimeout(function () {
                                    a.html(t), n._trigger("load", i, r), l(s, e);
                                }, 1);
                            })
                            .fail(function (t, e) {
                                setTimeout(function () {
                                    l(t, e);
                                }, 1);
                            })));
            },
            _ajaxSettings: function (e, i, n) {
                var s = this;
                return {
                    url: e.attr("href").replace(/#.*$/, ""),
                    beforeSend: function (e, o) {
                        return s._trigger("beforeLoad", i, t.extend({ jqXHR: e, ajaxSettings: o }, n));
                    },
                };
            },
            _getPanelForTab: function (e) {
                var i = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i));
            },
        }),
            t.uiBackCompat !== !1 &&
                t.widget("ui.tabs", t.ui.tabs, {
                    _processTabs: function () {
                        this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
                    },
                });
        t.ui.tabs;
        t.widget("ui.tooltip", {
            version: "1.12.1",
            options: {
                classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" },
                content: function () {
                    var e = t(this).attr("title") || "";
                    return t("<a>").text(e).html();
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" },
                show: !0,
                track: !1,
                close: null,
                open: null,
            },
            _addDescribedBy: function (e, i) {
                var n = (e.attr("aria-describedby") || "").split(/\s+/);
                n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")));
            },
            _removeDescribedBy: function (e) {
                var i = e.data("ui-tooltip-id"),
                    n = (e.attr("aria-describedby") || "").split(/\s+/),
                    s = t.inArray(i, n);
                s !== -1 && n.splice(s, 1), e.removeData("ui-tooltip-id"), (n = t.trim(n.join(" "))), n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby");
            },
            _create: function () {
                this._on({ mouseover: "open", focusin: "open" }),
                    (this.tooltips = {}),
                    (this.parents = {}),
                    (this.liveRegion = t("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body)),
                    this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
                    (this.disabledTitles = t([]));
            },
            _setOption: function (e, i) {
                var n = this;
                this._super(e, i),
                    "content" === e &&
                        t.each(this.tooltips, function (t, e) {
                            n._updateContent(e.element);
                        });
            },
            _setOptionDisabled: function (t) {
                this[t ? "_disable" : "_enable"]();
            },
            _disable: function () {
                var e = this;
                t.each(this.tooltips, function (i, n) {
                    var s = t.Event("blur");
                    (s.target = s.currentTarget = n.element[0]), e.close(s, !0);
                }),
                    (this.disabledTitles = this.disabledTitles.add(
                        this.element
                            .find(this.options.items)
                            .addBack()
                            .filter(function () {
                                var e = t(this);
                                if (e.is("[title]")) return e.data("ui-tooltip-title", e.attr("title")).removeAttr("title");
                            })
                    ));
            },
            _enable: function () {
                this.disabledTitles.each(function () {
                    var e = t(this);
                    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"));
                }),
                    (this.disabledTitles = t([]));
            },
            open: function (e) {
                var i = this,
                    n = t(e ? e.target : this.element).closest(this.options.items);
                n.length &&
                    !n.data("ui-tooltip-id") &&
                    (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")),
                    n.data("ui-tooltip-open", !0),
                    e &&
                        "mouseover" === e.type &&
                        n.parents().each(function () {
                            var e,
                                n = t(this);
                            n.data("ui-tooltip-open") && ((e = t.Event("blur")), (e.target = e.currentTarget = this), i.close(e, !0)),
                                n.attr("title") && (n.uniqueId(), (i.parents[this.id] = { element: this, title: n.attr("title") }), n.attr("title", ""));
                        }),
                    this._registerCloseHandlers(e, n),
                    this._updateContent(n, e));
            },
            _updateContent: function (t, e) {
                var i,
                    n = this.options.content,
                    s = this,
                    o = e ? e.type : null;
                return "string" == typeof n || n.nodeType || n.jquery
                    ? this._open(e, t, n)
                    : ((i = n.call(t[0], function (i) {
                          s._delay(function () {
                              t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i));
                          });
                      })),
                      void (i && this._open(e, t, i)));
            },
            _open: function (e, i, n) {
                function s(t) {
                    (h.of = t), a.is(":hidden") || a.position(h);
                }
                var o,
                    a,
                    r,
                    l,
                    h = t.extend({}, this.options.position);
                if (n) {
                    if ((o = this._find(i))) return void o.tooltip.find(".ui-tooltip-content").html(n);
                    i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")),
                        (o = this._tooltip(i)),
                        (a = o.tooltip),
                        this._addDescribedBy(i, a.attr("id")),
                        a.find(".ui-tooltip-content").html(n),
                        this.liveRegion.children().hide(),
                        (l = t("<div>").html(a.find(".ui-tooltip-content").html())),
                        l.removeAttr("name").find("[name]").removeAttr("name"),
                        l.removeAttr("id").find("[id]").removeAttr("id"),
                        l.appendTo(this.liveRegion),
                        this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, { mousemove: s }), s(e)) : a.position(t.extend({ of: i }, this.options.position)),
                        a.hide(),
                        this._show(a, this.options.show),
                        this.options.track &&
                            this.options.show &&
                            this.options.show.delay &&
                            (r = this.delayedShow = setInterval(function () {
                                a.is(":visible") && (s(h.of), clearInterval(r));
                            }, t.fx.interval)),
                        this._trigger("open", e, { tooltip: a });
                }
            },
            _registerCloseHandlers: function (e, i) {
                var n = {
                    keyup: function (e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var n = t.Event(e);
                            (n.currentTarget = i[0]), this.close(n, !0);
                        }
                    },
                };
                i[0] !== this.element[0] &&
                    (n.remove = function () {
                        this._removeTooltip(this._find(i).tooltip);
                    }),
                    (e && "mouseover" !== e.type) || (n.mouseleave = "close"),
                    (e && "focusin" !== e.type) || (n.focusout = "close"),
                    this._on(!0, i, n);
            },
            close: function (e) {
                var i,
                    n = this,
                    s = t(e ? e.currentTarget : this.element),
                    o = this._find(s);
                return o
                    ? ((i = o.tooltip),
                      void (
                          o.closing ||
                          (clearInterval(this.delayedShow),
                          s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")),
                          this._removeDescribedBy(s),
                          (o.hiding = !0),
                          i.stop(!0),
                          this._hide(i, this.options.hide, function () {
                              n._removeTooltip(t(this));
                          }),
                          s.removeData("ui-tooltip-open"),
                          this._off(s, "mouseleave focusout keyup"),
                          s[0] !== this.element[0] && this._off(s, "remove"),
                          this._off(this.document, "mousemove"),
                          e &&
                              "mouseleave" === e.type &&
                              t.each(this.parents, function (e, i) {
                                  t(i.element).attr("title", i.title), delete n.parents[e];
                              }),
                          (o.closing = !0),
                          this._trigger("close", e, { tooltip: i }),
                          o.hiding || (o.closing = !1))
                      ))
                    : void s.removeData("ui-tooltip-open");
            },
            _tooltip: function (e) {
                var i = t("<div>").attr("role", "tooltip"),
                    n = t("<div>").appendTo(i),
                    s = i.uniqueId().attr("id");
                return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), (this.tooltips[s] = { element: e, tooltip: i });
            },
            _find: function (t) {
                var e = t.data("ui-tooltip-id");
                return e ? this.tooltips[e] : null;
            },
            _removeTooltip: function (t) {
                t.remove(), delete this.tooltips[t.attr("id")];
            },
            _appendTo: function (t) {
                var e = t.closest(".ui-front, dialog");
                return e.length || (e = this.document[0].body), e;
            },
            _destroy: function () {
                var e = this;
                t.each(this.tooltips, function (i, n) {
                    var s = t.Event("blur"),
                        o = n.element;
                    (s.target = s.currentTarget = o[0]), e.close(s, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"));
                }),
                    this.liveRegion.remove();
            },
        }),
            t.uiBackCompat !== !1 &&
                t.widget("ui.tooltip", t.ui.tooltip, {
                    options: { tooltipClass: null },
                    _tooltip: function () {
                        var t = this._superApply(arguments);
                        return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t;
                    },
                });
        var f = (t.ui.tooltip, "ui-effects-"),
            g = "ui-effects-style",
            m = "ui-effects-animated",
            v = t;
        (t.effects = { effect: {} }),
            (function (t, e) {
                function i(t, e, i) {
                    var n = u[e.type] || {};
                    return null == t ? (i || !e.def ? null : e.def) : ((t = n.floor ? ~~t : parseFloat(t)), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t);
                }
                function n(e) {
                    var i = h(),
                        n = (i._rgba = []);
                    return (
                        (e = e.toLowerCase()),
                        f(l, function (t, s) {
                            var o,
                                a = s.re.exec(e),
                                r = a && s.parse(a),
                                l = s.space || "rgba";
                            if (r) return (o = i[l](r)), (i[c[l].cache] = o[c[l].cache]), (n = i._rgba = o._rgba), !1;
                        }),
                        n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), i) : o[e]
                    );
                }
                function s(t, e, i) {
                    return (i = (i + 1) % 1), 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t;
                }
                var o,
                    a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    r = /^([\-+])=\s*(\d+\.?\d*)/,
                    l = [
                        {
                            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            parse: function (t) {
                                return [t[1], t[2], t[3], t[4]];
                            },
                        },
                        {
                            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            parse: function (t) {
                                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
                            },
                        },
                        {
                            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                            parse: function (t) {
                                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
                            },
                        },
                        {
                            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                            parse: function (t) {
                                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
                            },
                        },
                        {
                            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            space: "hsla",
                            parse: function (t) {
                                return [t[1], t[2] / 100, t[3] / 100, t[4]];
                            },
                        },
                    ],
                    h = (t.Color = function (e, i, n, s) {
                        return new t.Color.fn.parse(e, i, n, s);
                    }),
                    c = {
                        rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } },
                        hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } },
                    },
                    u = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                    d = (h.support = {}),
                    p = t("<p>")[0],
                    f = t.each;
                (p.style.cssText = "background-color:rgba(1,1,1,.5)"),
                    (d.rgba = p.style.backgroundColor.indexOf("rgba") > -1),
                    f(c, function (t, e) {
                        (e.cache = "_" + t), (e.props.alpha = { idx: 3, type: "percent", def: 1 });
                    }),
                    (h.fn = t.extend(h.prototype, {
                        parse: function (s, a, r, l) {
                            if (s === e) return (this._rgba = [null, null, null, null]), this;
                            (s.jquery || s.nodeType) && ((s = t(s).css(a)), (a = e));
                            var u = this,
                                d = t.type(s),
                                p = (this._rgba = []);
                            return (
                                a !== e && ((s = [s, a, r, l]), (d = "array")),
                                "string" === d
                                    ? this.parse(n(s) || o._default)
                                    : "array" === d
                                    ? (f(c.rgba.props, function (t, e) {
                                          p[e.idx] = i(s[e.idx], e);
                                      }),
                                      this)
                                    : "object" === d
                                    ? (s instanceof h
                                          ? f(c, function (t, e) {
                                                s[e.cache] && (u[e.cache] = s[e.cache].slice());
                                            })
                                          : f(c, function (e, n) {
                                                var o = n.cache;
                                                f(n.props, function (t, e) {
                                                    if (!u[o] && n.to) {
                                                        if ("alpha" === t || null == s[t]) return;
                                                        u[o] = n.to(u._rgba);
                                                    }
                                                    u[o][e.idx] = i(s[t], e, !0);
                                                }),
                                                    u[o] && t.inArray(null, u[o].slice(0, 3)) < 0 && ((u[o][3] = 1), n.from && (u._rgba = n.from(u[o])));
                                            }),
                                      this)
                                    : void 0
                            );
                        },
                        is: function (t) {
                            var e = h(t),
                                i = !0,
                                n = this;
                            return (
                                f(c, function (t, s) {
                                    var o,
                                        a = e[s.cache];
                                    return (
                                        a &&
                                            ((o = n[s.cache] || (s.to && s.to(n._rgba)) || []),
                                            f(s.props, function (t, e) {
                                                if (null != a[e.idx]) return (i = a[e.idx] === o[e.idx]);
                                            })),
                                        i
                                    );
                                }),
                                i
                            );
                        },
                        _space: function () {
                            var t = [],
                                e = this;
                            return (
                                f(c, function (i, n) {
                                    e[n.cache] && t.push(i);
                                }),
                                t.pop()
                            );
                        },
                        transition: function (t, e) {
                            var n = h(t),
                                s = n._space(),
                                o = c[s],
                                a = 0 === this.alpha() ? h("transparent") : this,
                                r = a[o.cache] || o.to(a._rgba),
                                l = r.slice();
                            return (
                                (n = n[o.cache]),
                                f(o.props, function (t, s) {
                                    var o = s.idx,
                                        a = r[o],
                                        h = n[o],
                                        c = u[s.type] || {};
                                    null !== h && (null === a ? (l[o] = h) : (c.mod && (h - a > c.mod / 2 ? (a += c.mod) : a - h > c.mod / 2 && (a -= c.mod)), (l[o] = i((h - a) * e + a, s))));
                                }),
                                this[s](l)
                            );
                        },
                        blend: function (e) {
                            if (1 === this._rgba[3]) return this;
                            var i = this._rgba.slice(),
                                n = i.pop(),
                                s = h(e)._rgba;
                            return h(
                                t.map(i, function (t, e) {
                                    return (1 - n) * s[e] + n * t;
                                })
                            );
                        },
                        toRgbaString: function () {
                            var e = "rgba(",
                                i = t.map(this._rgba, function (t, e) {
                                    return null == t ? (e > 2 ? 1 : 0) : t;
                                });
                            return 1 === i[3] && (i.pop(), (e = "rgb(")), e + i.join() + ")";
                        },
                        toHslaString: function () {
                            var e = "hsla(",
                                i = t.map(this.hsla(), function (t, e) {
                                    return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t;
                                });
                            return 1 === i[3] && (i.pop(), (e = "hsl(")), e + i.join() + ")";
                        },
                        toHexString: function (e) {
                            var i = this._rgba.slice(),
                                n = i.pop();
                            return (
                                e && i.push(~~(255 * n)),
                                "#" +
                                    t
                                        .map(i, function (t) {
                                            return (t = (t || 0).toString(16)), 1 === t.length ? "0" + t : t;
                                        })
                                        .join("")
                            );
                        },
                        toString: function () {
                            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
                        },
                    })),
                    (h.fn.parse.prototype = h.fn),
                    (c.hsla.to = function (t) {
                        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                        var e,
                            i,
                            n = t[0] / 255,
                            s = t[1] / 255,
                            o = t[2] / 255,
                            a = t[3],
                            r = Math.max(n, s, o),
                            l = Math.min(n, s, o),
                            h = r - l,
                            c = r + l,
                            u = 0.5 * c;
                        return (
                            (e = l === r ? 0 : n === r ? (60 * (s - o)) / h + 360 : s === r ? (60 * (o - n)) / h + 120 : (60 * (n - s)) / h + 240),
                            (i = 0 === h ? 0 : u <= 0.5 ? h / c : h / (2 - c)),
                            [Math.round(e) % 360, i, u, null == a ? 1 : a]
                        );
                    }),
                    (c.hsla.from = function (t) {
                        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                        var e = t[0] / 360,
                            i = t[1],
                            n = t[2],
                            o = t[3],
                            a = n <= 0.5 ? n * (1 + i) : n + i - n * i,
                            r = 2 * n - a;
                        return [Math.round(255 * s(r, a, e + 1 / 3)), Math.round(255 * s(r, a, e)), Math.round(255 * s(r, a, e - 1 / 3)), o];
                    }),
                    f(c, function (n, s) {
                        var o = s.props,
                            a = s.cache,
                            l = s.to,
                            c = s.from;
                        (h.fn[n] = function (n) {
                            if ((l && !this[a] && (this[a] = l(this._rgba)), n === e)) return this[a].slice();
                            var s,
                                r = t.type(n),
                                u = "array" === r || "object" === r ? n : arguments,
                                d = this[a].slice();
                            return (
                                f(o, function (t, e) {
                                    var n = u["object" === r ? t : e.idx];
                                    null == n && (n = d[e.idx]), (d[e.idx] = i(n, e));
                                }),
                                c ? ((s = h(c(d))), (s[a] = d), s) : h(d)
                            );
                        }),
                            f(o, function (e, i) {
                                h.fn[e] ||
                                    (h.fn[e] = function (s) {
                                        var o,
                                            a = t.type(s),
                                            l = "alpha" === e ? (this._hsla ? "hsla" : "rgba") : n,
                                            h = this[l](),
                                            c = h[i.idx];
                                        return "undefined" === a
                                            ? c
                                            : ("function" === a && ((s = s.call(this, c)), (a = t.type(s))),
                                              null == s && i.empty ? this : ("string" === a && ((o = r.exec(s)), o && (s = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), (h[i.idx] = s), this[l](h)));
                                    });
                            });
                    }),
                    (h.hook = function (e) {
                        var i = e.split(" ");
                        f(i, function (e, i) {
                            (t.cssHooks[i] = {
                                set: function (e, s) {
                                    var o,
                                        a,
                                        r = "";
                                    if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                        if (((s = h(o || s)), !d.rgba && 1 !== s._rgba[3])) {
                                            for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style; )
                                                try {
                                                    (r = t.css(a, "backgroundColor")), (a = a.parentNode);
                                                } catch (l) {}
                                            s = s.blend(r && "transparent" !== r ? r : "_default");
                                        }
                                        s = s.toRgbaString();
                                    }
                                    try {
                                        e.style[i] = s;
                                    } catch (l) {}
                                },
                            }),
                                (t.fx.step[i] = function (e) {
                                    e.colorInit || ((e.start = h(e.elem, i)), (e.end = h(e.end)), (e.colorInit = !0)), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
                                });
                        });
                    }),
                    h.hook(a),
                    (t.cssHooks.borderColor = {
                        expand: function (t) {
                            var e = {};
                            return (
                                f(["Top", "Right", "Bottom", "Left"], function (i, n) {
                                    e["border" + n + "Color"] = t;
                                }),
                                e
                            );
                        },
                    }),
                    (o = t.Color.names = {
                        aqua: "#00ffff",
                        black: "#000000",
                        blue: "#0000ff",
                        fuchsia: "#ff00ff",
                        gray: "#808080",
                        green: "#008000",
                        lime: "#00ff00",
                        maroon: "#800000",
                        navy: "#000080",
                        olive: "#808000",
                        purple: "#800080",
                        red: "#ff0000",
                        silver: "#c0c0c0",
                        teal: "#008080",
                        white: "#ffffff",
                        yellow: "#ffff00",
                        transparent: [null, null, null, 0],
                        _default: "#ffffff",
                    });
            })(v),
            (function () {
                function e(e) {
                    var i,
                        n,
                        s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                        o = {};
                    if (s && s.length && s[0] && s[s[0]]) for (n = s.length; n--; ) (i = s[n]), "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
                    else for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                    return o;
                }
                function i(e, i) {
                    var n,
                        o,
                        a = {};
                    for (n in i) (o = i[n]), e[n] !== o && (s[n] || (!t.fx.step[n] && isNaN(parseFloat(o))) || (a[n] = o));
                    return a;
                }
                var n = ["add", "remove", "toggle"],
                    s = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
                t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
                    t.fx.step[i] = function (t) {
                        (("none" !== t.end && !t.setAttr) || (1 === t.pos && !t.setAttr)) && (v.style(t.elem, i, t.end), (t.setAttr = !0));
                    };
                }),
                    t.fn.addBack ||
                        (t.fn.addBack = function (t) {
                            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
                        }),
                    (t.effects.animateClass = function (s, o, a, r) {
                        var l = t.speed(o, a, r);
                        return this.queue(function () {
                            var o,
                                a = t(this),
                                r = a.attr("class") || "",
                                h = l.children ? a.find("*").addBack() : a;
                            (h = h.map(function () {
                                var i = t(this);
                                return { el: i, start: e(this) };
                            })),
                                (o = function () {
                                    t.each(n, function (t, e) {
                                        s[e] && a[e + "Class"](s[e]);
                                    });
                                }),
                                o(),
                                (h = h.map(function () {
                                    return (this.end = e(this.el[0])), (this.diff = i(this.start, this.end)), this;
                                })),
                                a.attr("class", r),
                                (h = h.map(function () {
                                    var e = this,
                                        i = t.Deferred(),
                                        n = t.extend({}, l, {
                                            queue: !1,
                                            complete: function () {
                                                i.resolve(e);
                                            },
                                        });
                                    return this.el.animate(this.diff, n), i.promise();
                                })),
                                t.when.apply(t, h.get()).done(function () {
                                    o(),
                                        t.each(arguments, function () {
                                            var e = this.el;
                                            t.each(this.diff, function (t) {
                                                e.css(t, "");
                                            });
                                        }),
                                        l.complete.call(a[0]);
                                });
                        });
                    }),
                    t.fn.extend({
                        addClass: (function (e) {
                            return function (i, n, s, o) {
                                return n ? t.effects.animateClass.call(this, { add: i }, n, s, o) : e.apply(this, arguments);
                            };
                        })(t.fn.addClass),
                        removeClass: (function (e) {
                            return function (i, n, s, o) {
                                return arguments.length > 1 ? t.effects.animateClass.call(this, { remove: i }, n, s, o) : e.apply(this, arguments);
                            };
                        })(t.fn.removeClass),
                        toggleClass: (function (e) {
                            return function (i, n, s, o, a) {
                                return "boolean" == typeof n || void 0 === n
                                    ? s
                                        ? t.effects.animateClass.call(this, n ? { add: i } : { remove: i }, s, o, a)
                                        : e.apply(this, arguments)
                                    : t.effects.animateClass.call(this, { toggle: i }, n, s, o);
                            };
                        })(t.fn.toggleClass),
                        switchClass: function (e, i, n, s, o) {
                            return t.effects.animateClass.call(this, { add: i, remove: e }, n, s, o);
                        },
                    });
            })(),
            (function () {
                function e(e, i, n, s) {
                    return (
                        t.isPlainObject(e) && ((i = e), (e = e.effect)),
                        (e = { effect: e }),
                        null == i && (i = {}),
                        t.isFunction(i) && ((s = i), (n = null), (i = {})),
                        ("number" == typeof i || t.fx.speeds[i]) && ((s = n), (n = i), (i = {})),
                        t.isFunction(n) && ((s = n), (n = null)),
                        i && t.extend(e, i),
                        (n = n || i.duration),
                        (e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default),
                        (e.complete = s || i.complete),
                        e
                    );
                }
                function i(e) {
                    return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e]) || !!t.isFunction(e) || ("object" == typeof e && !e.effect);
                }
                function n(t, e) {
                    var i = e.outerWidth(),
                        n = e.outerHeight(),
                        s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                        o = s.exec(t) || ["", 0, i, n, 0];
                    return { top: parseFloat(o[1]) || 0, right: "auto" === o[2] ? i : parseFloat(o[2]), bottom: "auto" === o[3] ? n : parseFloat(o[3]), left: parseFloat(o[4]) || 0 };
                }
                t.expr &&
                    t.expr.filters &&
                    t.expr.filters.animated &&
                    (t.expr.filters.animated = (function (e) {
                        return function (i) {
                            return !!t(i).data(m) || e(i);
                        };
                    })(t.expr.filters.animated)),
                    t.uiBackCompat !== !1 &&
                        t.extend(t.effects, {
                            save: function (t, e) {
                                for (var i = 0, n = e.length; i < n; i++) null !== e[i] && t.data(f + e[i], t[0].style[e[i]]);
                            },
                            restore: function (t, e) {
                                for (var i, n = 0, s = e.length; n < s; n++) null !== e[n] && ((i = t.data(f + e[n])), t.css(e[n], i));
                            },
                            setMode: function (t, e) {
                                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
                            },
                            createWrapper: function (e) {
                                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                                var i = { width: e.outerWidth(!0), height: e.outerHeight(!0), float: e.css("float") },
                                    n = t("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                                    s = { width: e.width(), height: e.height() },
                                    o = document.activeElement;
                                try {
                                    o.id;
                                } catch (a) {
                                    o = document.body;
                                }
                                return (
                                    e.wrap(n),
                                    (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"),
                                    (n = e.parent()),
                                    "static" === e.css("position")
                                        ? (n.css({ position: "relative" }), e.css({ position: "relative" }))
                                        : (t.extend(i, { position: e.css("position"), zIndex: e.css("z-index") }),
                                          t.each(["top", "left", "bottom", "right"], function (t, n) {
                                              (i[n] = e.css(n)), isNaN(parseInt(i[n], 10)) && (i[n] = "auto");
                                          }),
                                          e.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })),
                                    e.css(s),
                                    n.css(i).show()
                                );
                            },
                            removeWrapper: function (e) {
                                var i = document.activeElement;
                                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e;
                            },
                        }),
                    t.extend(t.effects, {
                        version: "1.12.1",
                        define: function (e, i, n) {
                            return n || ((n = i), (i = "effect")), (t.effects.effect[e] = n), (t.effects.effect[e].mode = i), n;
                        },
                        scaledDimensions: function (t, e, i) {
                            if (0 === e) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
                            var n = "horizontal" !== i ? (e || 100) / 100 : 1,
                                s = "vertical" !== i ? (e || 100) / 100 : 1;
                            return { height: t.height() * s, width: t.width() * n, outerHeight: t.outerHeight() * s, outerWidth: t.outerWidth() * n };
                        },
                        clipToBox: function (t) {
                            return { width: t.clip.right - t.clip.left, height: t.clip.bottom - t.clip.top, left: t.clip.left, top: t.clip.top };
                        },
                        unshift: function (t, e, i) {
                            var n = t.queue();
                            e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue();
                        },
                        saveStyle: function (t) {
                            t.data(g, t[0].style.cssText);
                        },
                        restoreStyle: function (t) {
                            (t[0].style.cssText = t.data(g) || ""), t.removeData(g);
                        },
                        mode: function (t, e) {
                            var i = t.is(":hidden");
                            return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e;
                        },
                        getBaseline: function (t, e) {
                            var i, n;
                            switch (t[0]) {
                                case "top":
                                    i = 0;
                                    break;
                                case "middle":
                                    i = 0.5;
                                    break;
                                case "bottom":
                                    i = 1;
                                    break;
                                default:
                                    i = t[0] / e.height;
                            }
                            switch (t[1]) {
                                case "left":
                                    n = 0;
                                    break;
                                case "center":
                                    n = 0.5;
                                    break;
                                case "right":
                                    n = 1;
                                    break;
                                default:
                                    n = t[1] / e.width;
                            }
                            return { x: n, y: i };
                        },
                        createPlaceholder: function (e) {
                            var i,
                                n = e.css("position"),
                                s = e.position();
                            return (
                                e
                                    .css({ marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight") })
                                    .outerWidth(e.outerWidth())
                                    .outerHeight(e.outerHeight()),
                                /^(static|relative)/.test(n) &&
                                    ((n = "absolute"),
                                    (i = t("<" + e[0].nodeName + ">")
                                        .insertAfter(e)
                                        .css({
                                            display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                                            visibility: "hidden",
                                            marginTop: e.css("marginTop"),
                                            marginBottom: e.css("marginBottom"),
                                            marginLeft: e.css("marginLeft"),
                                            marginRight: e.css("marginRight"),
                                            float: e.css("float"),
                                        })
                                        .outerWidth(e.outerWidth())
                                        .outerHeight(e.outerHeight())
                                        .addClass("ui-effects-placeholder")),
                                    e.data(f + "placeholder", i)),
                                e.css({ position: n, left: s.left, top: s.top }),
                                i
                            );
                        },
                        removePlaceholder: function (t) {
                            var e = f + "placeholder",
                                i = t.data(e);
                            i && (i.remove(), t.removeData(e));
                        },
                        cleanUp: function (e) {
                            t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
                        },
                        setTransition: function (e, i, n, s) {
                            return (
                                (s = s || {}),
                                t.each(i, function (t, i) {
                                    var o = e.cssUnit(i);
                                    o[0] > 0 && (s[i] = o[0] * n + o[1]);
                                }),
                                s
                            );
                        },
                    }),
                    t.fn.extend({
                        effect: function () {
                            function i(e) {
                                function i() {
                                    r.removeData(m), t.effects.cleanUp(r), "hide" === n.mode && r.hide(), a();
                                }
                                function a() {
                                    t.isFunction(l) && l.call(r[0]), t.isFunction(e) && e();
                                }
                                var r = t(this);
                                (n.mode = c.shift()), t.uiBackCompat === !1 || o ? ("none" === n.mode ? (r[h](), a()) : s.call(r[0], n, i)) : (r.is(":hidden") ? "hide" === h : "show" === h) ? (r[h](), a()) : s.call(r[0], n, a);
                            }
                            var n = e.apply(this, arguments),
                                s = t.effects.effect[n.effect],
                                o = s.mode,
                                a = n.queue,
                                r = a || "fx",
                                l = n.complete,
                                h = n.mode,
                                c = [],
                                u = function (e) {
                                    var i = t(this),
                                        n = t.effects.mode(i, h) || o;
                                    i.data(m, !0), c.push(n), o && ("show" === n || (n === o && "hide" === n)) && i.show(), (o && "none" === n) || t.effects.saveStyle(i), t.isFunction(e) && e();
                                };
                            return t.fx.off || !s
                                ? h
                                    ? this[h](n.duration, l)
                                    : this.each(function () {
                                          l && l.call(this);
                                      })
                                : a === !1
                                ? this.each(u).each(i)
                                : this.queue(r, u).queue(r, i);
                        },
                        show: (function (t) {
                            return function (n) {
                                if (i(n)) return t.apply(this, arguments);
                                var s = e.apply(this, arguments);
                                return (s.mode = "show"), this.effect.call(this, s);
                            };
                        })(t.fn.show),
                        hide: (function (t) {
                            return function (n) {
                                if (i(n)) return t.apply(this, arguments);
                                var s = e.apply(this, arguments);
                                return (s.mode = "hide"), this.effect.call(this, s);
                            };
                        })(t.fn.hide),
                        toggle: (function (t) {
                            return function (n) {
                                if (i(n) || "boolean" == typeof n) return t.apply(this, arguments);
                                var s = e.apply(this, arguments);
                                return (s.mode = "toggle"), this.effect.call(this, s);
                            };
                        })(t.fn.toggle),
                        cssUnit: function (e) {
                            var i = this.css(e),
                                n = [];
                            return (
                                t.each(["em", "px", "%", "pt"], function (t, e) {
                                    i.indexOf(e) > 0 && (n = [parseFloat(i), e]);
                                }),
                                n
                            );
                        },
                        cssClip: function (t) {
                            return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : n(this.css("clip"), this);
                        },
                        transfer: function (e, i) {
                            var n = t(this),
                                s = t(e.to),
                                o = "fixed" === s.css("position"),
                                a = t("body"),
                                r = o ? a.scrollTop() : 0,
                                l = o ? a.scrollLeft() : 0,
                                h = s.offset(),
                                c = { top: h.top - r, left: h.left - l, height: s.innerHeight(), width: s.innerWidth() },
                                u = n.offset(),
                                d = t("<div class='ui-effects-transfer'></div>")
                                    .appendTo("body")
                                    .addClass(e.className)
                                    .css({ top: u.top - r, left: u.left - l, height: n.innerHeight(), width: n.innerWidth(), position: o ? "fixed" : "absolute" })
                                    .animate(c, e.duration, e.easing, function () {
                                        d.remove(), t.isFunction(i) && i();
                                    });
                        },
                    }),
                    (t.fx.step.clip = function (e) {
                        e.clipInit || ((e.start = t(e.elem).cssClip()), "string" == typeof e.end && (e.end = n(e.end, e.elem)), (e.clipInit = !0)),
                            t(e.elem).cssClip({
                                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                                left: e.pos * (e.end.left - e.start.left) + e.start.left,
                            });
                    });
            })(),
            (function () {
                var e = {};
                t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
                    e[i] = function (e) {
                        return Math.pow(e, t + 2);
                    };
                }),
                    t.extend(e, {
                        Sine: function (t) {
                            return 1 - Math.cos((t * Math.PI) / 2);
                        },
                        Circ: function (t) {
                            return 1 - Math.sqrt(1 - t * t);
                        },
                        Elastic: function (t) {
                            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
                        },
                        Back: function (t) {
                            return t * t * (3 * t - 2);
                        },
                        Bounce: function (t) {
                            for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; );
                            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
                        },
                    }),
                    t.each(e, function (e, i) {
                        (t.easing["easeIn" + e] = i),
                            (t.easing["easeOut" + e] = function (t) {
                                return 1 - i(1 - t);
                            }),
                            (t.easing["easeInOut" + e] = function (t) {
                                return t < 0.5 ? i(2 * t) / 2 : 1 - i(t * -2 + 2) / 2;
                            });
                    });
            })();
        var b,
            b = t.effects;
        t.effects.define("blind", "hide", function (e, i) {
            var n = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] },
                s = t(this),
                o = e.direction || "up",
                a = s.cssClip(),
                r = { clip: t.extend({}, a) },
                l = t.effects.createPlaceholder(s);
            (r.clip[n[o][0]] = r.clip[n[o][1]]),
                "show" === e.mode && (s.cssClip(r.clip), l && l.css(t.effects.clipToBox(r)), (r.clip = a)),
                l && l.animate(t.effects.clipToBox(r), e.duration, e.easing),
                s.animate(r, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
        }),
            t.effects.define("bounce", function (e, i) {
                var n,
                    s,
                    o,
                    a = t(this),
                    r = e.mode,
                    l = "hide" === r,
                    h = "show" === r,
                    c = e.direction || "up",
                    u = e.distance,
                    d = e.times || 5,
                    p = 2 * d + (h || l ? 1 : 0),
                    f = e.duration / p,
                    g = e.easing,
                    m = "up" === c || "down" === c ? "top" : "left",
                    v = "up" === c || "left" === c,
                    b = 0,
                    y = a.queue().length;
                for (
                    t.effects.createPlaceholder(a),
                        o = a.css(m),
                        u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3),
                        h &&
                            ((s = { opacity: 1 }),
                            (s[m] = o),
                            a
                                .css("opacity", 0)
                                .css(m, v ? 2 * -u : 2 * u)
                                .animate(s, f, g)),
                        l && (u /= Math.pow(2, d - 1)),
                        s = {},
                        s[m] = o;
                    b < d;
                    b++
                )
                    (n = {}), (n[m] = (v ? "-=" : "+=") + u), a.animate(n, f, g).animate(s, f, g), (u = l ? 2 * u : u / 2);
                l && ((n = { opacity: 0 }), (n[m] = (v ? "-=" : "+=") + u), a.animate(n, f, g)), a.queue(i), t.effects.unshift(a, y, p + 1);
            }),
            t.effects.define("clip", "hide", function (e, i) {
                var n,
                    s = {},
                    o = t(this),
                    a = e.direction || "vertical",
                    r = "both" === a,
                    l = r || "horizontal" === a,
                    h = r || "vertical" === a;
                (n = o.cssClip()),
                    (s.clip = { top: h ? (n.bottom - n.top) / 2 : n.top, right: l ? (n.right - n.left) / 2 : n.right, bottom: h ? (n.bottom - n.top) / 2 : n.bottom, left: l ? (n.right - n.left) / 2 : n.left }),
                    t.effects.createPlaceholder(o),
                    "show" === e.mode && (o.cssClip(s.clip), (s.clip = n)),
                    o.animate(s, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
            }),
            t.effects.define("drop", "hide", function (e, i) {
                var n,
                    s = t(this),
                    o = e.mode,
                    a = "show" === o,
                    r = e.direction || "left",
                    l = "up" === r || "down" === r ? "top" : "left",
                    h = "up" === r || "left" === r ? "-=" : "+=",
                    c = "+=" === h ? "-=" : "+=",
                    u = { opacity: 0 };
                t.effects.createPlaceholder(s),
                    (n = e.distance || s["top" === l ? "outerHeight" : "outerWidth"](!0) / 2),
                    (u[l] = h + n),
                    a && (s.css(u), (u[l] = c + n), (u.opacity = 1)),
                    s.animate(u, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
            }),
            t.effects.define("explode", "hide", function (e, i) {
                function n() {
                    y.push(this), y.length === u * d && s();
                }
                function s() {
                    p.css({ visibility: "visible" }), t(y).remove(), i();
                }
                var o,
                    a,
                    r,
                    l,
                    h,
                    c,
                    u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                    d = u,
                    p = t(this),
                    f = e.mode,
                    g = "show" === f,
                    m = p.show().css("visibility", "hidden").offset(),
                    v = Math.ceil(p.outerWidth() / d),
                    b = Math.ceil(p.outerHeight() / u),
                    y = [];
                for (o = 0; o < u; o++)
                    for (l = m.top + o * b, c = o - (u - 1) / 2, a = 0; a < d; a++)
                        (r = m.left + a * v),
                            (h = a - (d - 1) / 2),
                            p
                                .clone()
                                .appendTo("body")
                                .wrap("<div></div>")
                                .css({ position: "absolute", visibility: "visible", left: -a * v, top: -o * b })
                                .parent()
                                .addClass("ui-effects-explode")
                                .css({ position: "absolute", overflow: "hidden", width: v, height: b, left: r + (g ? h * v : 0), top: l + (g ? c * b : 0), opacity: g ? 0 : 1 })
                                .animate({ left: r + (g ? 0 : h * v), top: l + (g ? 0 : c * b), opacity: g ? 1 : 0 }, e.duration || 500, e.easing, n);
            }),
            t.effects.define("fade", "toggle", function (e, i) {
                var n = "show" === e.mode;
                t(this)
                    .css("opacity", n ? 0 : 1)
                    .animate({ opacity: n ? 1 : 0 }, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
            }),
            t.effects.define("fold", "hide", function (e, i) {
                var n = t(this),
                    s = e.mode,
                    o = "show" === s,
                    a = "hide" === s,
                    r = e.size || 15,
                    l = /([0-9]+)%/.exec(r),
                    h = !!e.horizFirst,
                    c = h ? ["right", "bottom"] : ["bottom", "right"],
                    u = e.duration / 2,
                    d = t.effects.createPlaceholder(n),
                    p = n.cssClip(),
                    f = { clip: t.extend({}, p) },
                    g = { clip: t.extend({}, p) },
                    m = [p[c[0]], p[c[1]]],
                    v = n.queue().length;
                l && (r = (parseInt(l[1], 10) / 100) * m[a ? 0 : 1]),
                    (f.clip[c[0]] = r),
                    (g.clip[c[0]] = r),
                    (g.clip[c[1]] = 0),
                    o && (n.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), (g.clip = p)),
                    n
                        .queue(function (i) {
                            d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i();
                        })
                        .animate(f, u, e.easing)
                        .animate(g, u, e.easing)
                        .queue(i),
                    t.effects.unshift(n, v, 4);
            }),
            t.effects.define("highlight", "show", function (e, i) {
                var n = t(this),
                    s = { backgroundColor: n.css("backgroundColor") };
                "hide" === e.mode && (s.opacity = 0), t.effects.saveStyle(n), n.css({ backgroundImage: "none", backgroundColor: e.color || "#ffff99" }).animate(s, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
            }),
            t.effects.define("size", function (e, i) {
                var n,
                    s,
                    o,
                    a = t(this),
                    r = ["fontSize"],
                    l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                    h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                    c = e.mode,
                    u = "effect" !== c,
                    d = e.scale || "both",
                    p = e.origin || ["middle", "center"],
                    f = a.css("position"),
                    g = a.position(),
                    m = t.effects.scaledDimensions(a),
                    v = e.from || m,
                    b = e.to || t.effects.scaledDimensions(a, 0);
                t.effects.createPlaceholder(a),
                    "show" === c && ((o = v), (v = b), (b = o)),
                    (s = { from: { y: v.height / m.height, x: v.width / m.width }, to: { y: b.height / m.height, x: b.width / m.width } }),
                    ("box" !== d && "both" !== d) ||
                        (s.from.y !== s.to.y && ((v = t.effects.setTransition(a, l, s.from.y, v)), (b = t.effects.setTransition(a, l, s.to.y, b))),
                        s.from.x !== s.to.x && ((v = t.effects.setTransition(a, h, s.from.x, v)), (b = t.effects.setTransition(a, h, s.to.x, b)))),
                    ("content" !== d && "both" !== d) || (s.from.y !== s.to.y && ((v = t.effects.setTransition(a, r, s.from.y, v)), (b = t.effects.setTransition(a, r, s.to.y, b)))),
                    p &&
                        ((n = t.effects.getBaseline(p, m)),
                        (v.top = (m.outerHeight - v.outerHeight) * n.y + g.top),
                        (v.left = (m.outerWidth - v.outerWidth) * n.x + g.left),
                        (b.top = (m.outerHeight - b.outerHeight) * n.y + g.top),
                        (b.left = (m.outerWidth - b.outerWidth) * n.x + g.left)),
                    a.css(v),
                    ("content" !== d && "both" !== d) ||
                        ((l = l.concat(["marginTop", "marginBottom"]).concat(r)),
                        (h = h.concat(["marginLeft", "marginRight"])),
                        a.find("*[width]").each(function () {
                            var i = t(this),
                                n = t.effects.scaledDimensions(i),
                                o = { height: n.height * s.from.y, width: n.width * s.from.x, outerHeight: n.outerHeight * s.from.y, outerWidth: n.outerWidth * s.from.x },
                                a = { height: n.height * s.to.y, width: n.width * s.to.x, outerHeight: n.height * s.to.y, outerWidth: n.width * s.to.x };
                            s.from.y !== s.to.y && ((o = t.effects.setTransition(i, l, s.from.y, o)), (a = t.effects.setTransition(i, l, s.to.y, a))),
                                s.from.x !== s.to.x && ((o = t.effects.setTransition(i, h, s.from.x, o)), (a = t.effects.setTransition(i, h, s.to.x, a))),
                                u && t.effects.saveStyle(i),
                                i.css(o),
                                i.animate(a, e.duration, e.easing, function () {
                                    u && t.effects.restoreStyle(i);
                                });
                        })),
                    a.animate(b, {
                        queue: !1,
                        duration: e.duration,
                        easing: e.easing,
                        complete: function () {
                            var e = a.offset();
                            0 === b.opacity && a.css("opacity", v.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i();
                        },
                    });
            }),
            t.effects.define("scale", function (e, i) {
                var n = t(this),
                    s = e.mode,
                    o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
                    a = t.extend(!0, { from: t.effects.scaledDimensions(n), to: t.effects.scaledDimensions(n, o, e.direction || "both"), origin: e.origin || ["middle", "center"] }, e);
                e.fade && ((a.from.opacity = 1), (a.to.opacity = 0)), t.effects.effect.size.call(this, a, i);
            }),
            t.effects.define("puff", "hide", function (e, i) {
                var n = t.extend(!0, {}, e, { fade: !0, percent: parseInt(e.percent, 10) || 150 });
                t.effects.effect.scale.call(this, n, i);
            }),
            t.effects.define("pulsate", "show", function (e, i) {
                var n = t(this),
                    s = e.mode,
                    o = "show" === s,
                    a = "hide" === s,
                    r = o || a,
                    l = 2 * (e.times || 5) + (r ? 1 : 0),
                    h = e.duration / l,
                    c = 0,
                    u = 1,
                    d = n.queue().length;
                for ((!o && n.is(":visible")) || (n.css("opacity", 0).show(), (c = 1)); u < l; u++) n.animate({ opacity: c }, h, e.easing), (c = 1 - c);
                n.animate({ opacity: c }, h, e.easing), n.queue(i), t.effects.unshift(n, d, l + 1);
            }),
            t.effects.define("shake", function (e, i) {
                var n = 1,
                    s = t(this),
                    o = e.direction || "left",
                    a = e.distance || 20,
                    r = e.times || 3,
                    l = 2 * r + 1,
                    h = Math.round(e.duration / l),
                    c = "up" === o || "down" === o ? "top" : "left",
                    u = "up" === o || "left" === o,
                    d = {},
                    p = {},
                    f = {},
                    g = s.queue().length;
                for (t.effects.createPlaceholder(s), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, s.animate(d, h, e.easing); n < r; n++) s.animate(p, h, e.easing).animate(f, h, e.easing);
                s
                    .animate(p, h, e.easing)
                    .animate(d, h / 2, e.easing)
                    .queue(i),
                    t.effects.unshift(s, g, l + 1);
            }),
            t.effects.define("slide", "show", function (e, i) {
                var n,
                    s,
                    o = t(this),
                    a = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
                    r = e.mode,
                    l = e.direction || "left",
                    h = "up" === l || "down" === l ? "top" : "left",
                    c = "up" === l || "left" === l,
                    u = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
                    d = {};
                t.effects.createPlaceholder(o),
                    (n = o.cssClip()),
                    (s = o.position()[h]),
                    (d[h] = (c ? -1 : 1) * u + s),
                    (d.clip = o.cssClip()),
                    (d.clip[a[l][1]] = d.clip[a[l][0]]),
                    "show" === r && (o.cssClip(d.clip), o.css(h, d[h]), (d.clip = n), (d[h] = s)),
                    o.animate(d, { queue: !1, duration: e.duration, easing: e.easing, complete: i });
            });
        t.uiBackCompat !== !1 &&
            (b = t.effects.define("transfer", function (e, i) {
                t(this).transfer(e, i);
            }));
    }),
    !(function (t, e) {
        t(function () {
            "use strict";
            function t(t, e) {
                return null != t && null != e && t.toLowerCase() === e.toLowerCase();
            }
            function i(t, e) {
                var i,
                    n,
                    s = t.length;
                if (!s || !e) return !1;
                for (i = e.toLowerCase(), n = 0; n < s; ++n) if (i === t[n].toLowerCase()) return !0;
                return !1;
            }
            function n(t) {
                for (var e in t) l.call(t, e) && (t[e] = new RegExp(t[e], "i"));
            }
            function s(t) {
                return (t || "").substr(0, 500);
            }
            function o(t, e) {
                (this.ua = s(t)), (this._cache = {}), (this.maxPhoneWidth = e || 600);
            }
            var a = {};
            (a.mobileDetectRules = {
                phones: {
                    iPhone: "\\biPhone\\b|\\biPod\\b",
                    BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                    HTC:
                        "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                    Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                    Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                    Motorola:
                        "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092",
                    Samsung:
                        "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F",
                    LG:
                        "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
                    Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                    Asus: "Asus.*Galaxy|PadFone.*Mobile",
                    NokiaLumia: "Lumia [0-9]{3,4}",
                    Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                    Palm: "PalmSource|Palm",
                    Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                    Pantech:
                        "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                    Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                    Wiko:
                        "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                    iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                    SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                    Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                    Alcatel: "Alcatel",
                    Nintendo: "Nintendo 3DS",
                    Amoi: "Amoi",
                    INQ: "INQ",
                    GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser",
                },
                tablets: {
                    iPad: "iPad|iPad.*Mobile",
                    NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                    SamsungTablet:
                        "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y",
                    Kindle:
                        "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                    SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                    HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                    AsusTablet:
                        "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b",
                    BlackBerryTablet: "PlayBook|RIM Tablet",
                    HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                    MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                    NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                    AcerTablet:
                        "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                    ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                    LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                    FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                    PrestigioTablet:
                        "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                    LenovoTablet:
                        "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-8703F",
                    DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                    YarvikTablet:
                        "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                    MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                    ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                    IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                    IRUTablet: "M702pro",
                    MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                    EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                    AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                    ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                    AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                    NokiaLumiaTablet: "Lumia 2520",
                    SonyTablet:
                        "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
                    PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                    CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                    CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                    MIDTablet:
                        "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                    MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                    SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                    RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                    FlyTablet: "IQ310|Fly Vision",
                    bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus",
                    HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L",
                    NecTablet: "\\bN-06D|\\bN-08D",
                    PantechTablet: "Pantech.*P4100",
                    BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                    VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                    ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                    PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                    NabiTablet: "Android.*\\bNabi",
                    KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                    DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                    TexetTablet:
                        "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                    PlaystationTablet: "Playstation.*(Portable|Vita)",
                    TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                    PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                    AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                    DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                    GalapadTablet: "Android.*\\bG1\\b",
                    MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                    KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                    AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                    PROSCANTablet:
                        "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                    YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                    ChangJiaTablet:
                        "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                    GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                    PointOfViewTablet:
                        "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                    OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                    HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                    DPSTablet: "DPS Dream 9|DPS Dual 7",
                    VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                    CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                    MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                    ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                    GoCleverTablet:
                        "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                    ModecomTablet:
                        "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                    VoninoTablet:
                        "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                    ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                    StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                    VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                    EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                    RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                    iMobileTablet: "i-mobile i-note",
                    TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                    AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                    AMPETablet: "Android.* A78 ",
                    SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                    TecnoTablet: "TECNO P9",
                    JXDTablet:
                        "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                    iJoyTablet:
                        "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                    FX2Tablet: "FX2 PAD7|FX2 PAD10",
                    XoroTablet:
                        "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                    ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                    VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                    OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                    CaptivaTablet: "CAPTIVA PAD",
                    IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                    TeclastTablet:
                        "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                    OndaTablet:
                        "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                    JaytechTablet: "TPC-PA762",
                    BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                    DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                    EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                    LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                    AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                    MpmanTablet:
                        "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                    CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                    WolderTablet:
                        "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                    MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                    NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                    NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                    LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                    UbislateTablet: "UbiSlate[\\s]?7C",
                    PocketBookTablet: "Pocketbook",
                    KocasoTablet: "\\b(TB-1207)\\b",
                    HisenseTablet: "\\b(F5281|E2371)\\b",
                    Hudl: "Hudl HT7S3|Hudl 2",
                    TelstraTablet: "T-Hub2",
                    GenericTablet:
                        "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b",
                },
                oss: {
                    AndroidOS: "Android",
                    BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                    PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                    SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                    WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                    WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                    iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                    MeeGoOS: "MeeGo",
                    MaemoOS: "Maemo",
                    JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                    webOS: "webOS|hpwOS",
                    badaOS: "\\bBada\\b",
                    BREWOS: "BREW",
                },
                uas: {
                    Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                    Dolfin: "\\bDolfin\\b",
                    Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                    Skyfire: "Skyfire",
                    Edge: "Mobile Safari/[.0-9]* Edge",
                    IE: "IEMobile|MSIEMobile",
                    Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                    Bolt: "bolt",
                    TeaShark: "teashark",
                    Blazer: "Blazer",
                    Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                    UCBrowser: "UC.*Browser|UCWEB",
                    baiduboxapp: "baiduboxapp",
                    baidubrowser: "baidubrowser",
                    DiigoBrowser: "DiigoBrowser",
                    Puffin: "Puffin",
                    Mercury: "\\bMercury\\b",
                    ObigoBrowser: "Obigo",
                    NetFront: "NF-Browser",
                    GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                    PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon",
                },
                props: {
                    Mobile: "Mobile/[VER]",
                    Build: "Build/[VER]",
                    Version: "Version/[VER]",
                    VendorID: "VendorID/[VER]",
                    iPad: "iPad.*CPU[a-z ]+[VER]",
                    iPhone: "iPhone.*CPU[a-z ]+[VER]",
                    iPod: "iPod.*CPU[a-z ]+[VER]",
                    Kindle: "Kindle/[VER]",
                    Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                    Coast: ["Coast/[VER]"],
                    Dolfin: "Dolfin/[VER]",
                    Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                    Fennec: "Fennec/[VER]",
                    Edge: "Edge/[VER]",
                    IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                    NetFront: "NetFront/[VER]",
                    NokiaBrowser: "NokiaBrowser/[VER]",
                    Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                    "Opera Mini": "Opera Mini/[VER]",
                    "Opera Mobi": "Version/[VER]",
                    UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                    MQQBrowser: "MQQBrowser/[VER]",
                    MicroMessenger: "MicroMessenger/[VER]",
                    baiduboxapp: "baiduboxapp/[VER]",
                    baidubrowser: "baidubrowser/[VER]",
                    SamsungBrowser: "SamsungBrowser/[VER]",
                    Iron: "Iron/[VER]",
                    Safari: ["Version/[VER]", "Safari/[VER]"],
                    Skyfire: "Skyfire/[VER]",
                    Tizen: "Tizen/[VER]",
                    Webkit: "webkit[ /][VER]",
                    PaleMoon: "PaleMoon/[VER]",
                    Gecko: "Gecko/[VER]",
                    Trident: "Trident/[VER]",
                    Presto: "Presto/[VER]",
                    Goanna: "Goanna/[VER]",
                    iOS: " \\bi?OS\\b [VER][ ;]{1}",
                    Android: "Android [VER]",
                    BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                    BREW: "BREW [VER]",
                    Java: "Java/[VER]",
                    "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                    "Windows Phone": "Windows Phone [VER]",
                    "Windows CE": "Windows CE/[VER]",
                    "Windows NT": "Windows NT [VER]",
                    Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                    webOS: ["webOS/[VER]", "hpwOS/[VER];"],
                },
                utils: {
                    Bot:
                        "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                    MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                    DesktopMode: "WPDesktop",
                    TV: "SonyDTV|HbbTV",
                    WebKit: "(webkit)[ /]([\\w.]+)",
                    Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                    Watch: "SM-V700",
                },
            }),
                (a.detectMobileBrowsers = {
                    fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    tabletPattern: /android|ipad|playbook|silk/i,
                });
            var r,
                l = Object.prototype.hasOwnProperty;
            return (
                (a.FALLBACK_PHONE = "UnknownPhone"),
                (a.FALLBACK_TABLET = "UnknownTablet"),
                (a.FALLBACK_MOBILE = "UnknownMobile"),
                (r =
                    "isArray" in Array
                        ? Array.isArray
                        : function (t) {
                              return "[object Array]" === Object.prototype.toString.call(t);
                          }),
                (function () {
                    var t,
                        e,
                        i,
                        s,
                        o,
                        h,
                        c = a.mobileDetectRules;
                    for (t in c.props)
                        if (l.call(c.props, t)) {
                            for (e = c.props[t], r(e) || (e = [e]), o = e.length, s = 0; s < o; ++s)
                                (i = e[s]), (h = i.indexOf("[VER]")), h >= 0 && (i = i.substring(0, h) + "([\\w._\\+]+)" + i.substring(h + 5)), (e[s] = new RegExp(i, "i"));
                            c.props[t] = e;
                        }
                    n(c.oss), n(c.phones), n(c.tablets), n(c.uas), n(c.utils), (c.oss0 = { WindowsPhoneOS: c.oss.WindowsPhoneOS, WindowsMobileOS: c.oss.WindowsMobileOS });
                })(),
                (a.findMatch = function (t, e) {
                    for (var i in t) if (l.call(t, i) && t[i].test(e)) return i;
                    return null;
                }),
                (a.findMatches = function (t, e) {
                    var i = [];
                    for (var n in t) l.call(t, n) && t[n].test(e) && i.push(n);
                    return i;
                }),
                (a.getVersionStr = function (t, e) {
                    var i,
                        n,
                        s,
                        o,
                        r = a.mobileDetectRules.props;
                    if (l.call(r, t)) for (i = r[t], s = i.length, n = 0; n < s; ++n) if (((o = i[n].exec(e)), null !== o)) return o[1];
                    return null;
                }),
                (a.getVersion = function (t, e) {
                    var i = a.getVersionStr(t, e);
                    return i ? a.prepareVersionNo(i) : NaN;
                }),
                (a.prepareVersionNo = function (t) {
                    var e;
                    return (e = t.split(/[a-z._ \/\-]/i)), 1 === e.length && (t = e[0]), e.length > 1 && ((t = e[0] + "."), e.shift(), (t += e.join(""))), Number(t);
                }),
                (a.isMobileFallback = function (t) {
                    return a.detectMobileBrowsers.fullPattern.test(t) || a.detectMobileBrowsers.shortPattern.test(t.substr(0, 4));
                }),
                (a.isTabletFallback = function (t) {
                    return a.detectMobileBrowsers.tabletPattern.test(t);
                }),
                (a.prepareDetectionCache = function (t, i, n) {
                    if (t.mobile === e) {
                        var s, r, l;
                        return (r = a.findMatch(a.mobileDetectRules.tablets, i))
                            ? ((t.mobile = t.tablet = r), void (t.phone = null))
                            : (s = a.findMatch(a.mobileDetectRules.phones, i))
                            ? ((t.mobile = t.phone = s), void (t.tablet = null))
                            : void (a.isMobileFallback(i)
                                  ? ((l = o.isPhoneSized(n)),
                                    l === e ? ((t.mobile = a.FALLBACK_MOBILE), (t.tablet = t.phone = null)) : l ? ((t.mobile = t.phone = a.FALLBACK_PHONE), (t.tablet = null)) : ((t.mobile = t.tablet = a.FALLBACK_TABLET), (t.phone = null)))
                                  : a.isTabletFallback(i)
                                  ? ((t.mobile = t.tablet = a.FALLBACK_TABLET), (t.phone = null))
                                  : (t.mobile = t.tablet = t.phone = null));
                    }
                }),
                (a.mobileGrade = function (t) {
                    var e = null !== t.mobile();
                    return (t.os("iOS") && t.version("iPad") >= 4.3) ||
                        (t.os("iOS") && t.version("iPhone") >= 3.1) ||
                        (t.os("iOS") && t.version("iPod") >= 3.1) ||
                        (t.version("Android") > 2.1 && t.is("Webkit")) ||
                        t.version("Windows Phone OS") >= 7 ||
                        (t.is("BlackBerry") && t.version("BlackBerry") >= 6) ||
                        t.match("Playbook.*Tablet") ||
                        (t.version("webOS") >= 1.4 && t.match("Palm|Pre|Pixi")) ||
                        t.match("hp.*TouchPad") ||
                        (t.is("Firefox") && t.version("Firefox") >= 12) ||
                        (t.is("Chrome") && t.is("AndroidOS") && t.version("Android") >= 4) ||
                        (t.is("Skyfire") && t.version("Skyfire") >= 4.1 && t.is("AndroidOS") && t.version("Android") >= 2.3) ||
                        (t.is("Opera") && t.version("Opera Mobi") > 11 && t.is("AndroidOS")) ||
                        t.is("MeeGoOS") ||
                        t.is("Tizen") ||
                        (t.is("Dolfin") && t.version("Bada") >= 2) ||
                        ((t.is("UC Browser") || t.is("Dolfin")) && t.version("Android") >= 2.3) ||
                        t.match("Kindle Fire") ||
                        (t.is("Kindle") && t.version("Kindle") >= 3) ||
                        (t.is("AndroidOS") && t.is("NookTablet")) ||
                        (t.version("Chrome") >= 11 && !e) ||
                        (t.version("Safari") >= 5 && !e) ||
                        (t.version("Firefox") >= 4 && !e) ||
                        (t.version("MSIE") >= 7 && !e) ||
                        (t.version("Opera") >= 10 && !e)
                        ? "A"
                        : (t.os("iOS") && t.version("iPad") < 4.3) ||
                          (t.os("iOS") && t.version("iPhone") < 3.1) ||
                          (t.os("iOS") && t.version("iPod") < 3.1) ||
                          (t.is("Blackberry") && t.version("BlackBerry") >= 5 && t.version("BlackBerry") < 6) ||
                          (t.version("Opera Mini") >= 5 && t.version("Opera Mini") <= 6.5 && (t.version("Android") >= 2.3 || t.is("iOS"))) ||
                          t.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") ||
                          (t.version("Opera Mobi") >= 11 && t.is("SymbianOS"))
                        ? "B"
                        : (t.version("BlackBerry") < 5 || t.match("MSIEMobile|Windows CE.*Mobile") || t.version("Windows Mobile") <= 5.2, "C");
                }),
                (a.detectOS = function (t) {
                    return a.findMatch(a.mobileDetectRules.oss0, t) || a.findMatch(a.mobileDetectRules.oss, t);
                }),
                (a.getDeviceSmallerSide = function () {
                    return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
                }),
                (o.prototype = {
                    constructor: o,
                    mobile: function () {
                        return a.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile;
                    },
                    phone: function () {
                        return a.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone;
                    },
                    tablet: function () {
                        return a.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet;
                    },
                    userAgent: function () {
                        return this._cache.userAgent === e && (this._cache.userAgent = a.findMatch(a.mobileDetectRules.uas, this.ua)), this._cache.userAgent;
                    },
                    userAgents: function () {
                        return this._cache.userAgents === e && (this._cache.userAgents = a.findMatches(a.mobileDetectRules.uas, this.ua)), this._cache.userAgents;
                    },
                    os: function () {
                        return this._cache.os === e && (this._cache.os = a.detectOS(this.ua)), this._cache.os;
                    },
                    version: function (t) {
                        return a.getVersion(t, this.ua);
                    },
                    versionStr: function (t) {
                        return a.getVersionStr(t, this.ua);
                    },
                    is: function (e) {
                        return i(this.userAgents(), e) || t(e, this.os()) || t(e, this.phone()) || t(e, this.tablet()) || i(a.findMatches(a.mobileDetectRules.utils, this.ua), e);
                    },
                    match: function (t) {
                        return t instanceof RegExp || (t = new RegExp(t, "i")), t.test(this.ua);
                    },
                    isPhoneSized: function (t) {
                        return o.isPhoneSized(t || this.maxPhoneWidth);
                    },
                    mobileGrade: function () {
                        return this._cache.grade === e && (this._cache.grade = a.mobileGrade(this)), this._cache.grade;
                    },
                }),
                "undefined" != typeof window && window.screen
                    ? (o.isPhoneSized = function (t) {
                          return t < 0 ? e : a.getDeviceSmallerSide() <= t;
                      })
                    : (o.isPhoneSized = function () {}),
                (o._impl = a),
                (o.version = "1.4.1 2017-12-24"),
                o
            );
        });
    })(
        (function (t) {
            if ("undefined" != typeof module && module.exports)
                return function (t) {
                    module.exports = t();
                };
            if ("function" == typeof define && define.amd) return define;
            if ("undefined" != typeof window)
                return function (t) {
                    window.MobileDetect = t();
                };
            throw new Error("unknown environment");
        })()
    ),
    !(function (t, e, i, n) {
        "use strict";
        function s(t) {
            var e = i(t.currentTarget),
                n = t.data ? t.data.options : {},
                s = e.attr("data-fancybox") || "",
                o = 0,
                a = [];
            t.isDefaultPrevented() ||
                (t.preventDefault(),
                s ? ((a = n.selector ? i(n.selector) : t.data ? t.data.items : []), (a = a.length ? a.filter('[data-fancybox="' + s + '"]') : i('[data-fancybox="' + s + '"]')), (o = a.index(e)), o < 0 && (o = 0)) : (a = [e]),
                i.fancybox.open(a, n, o));
        }
        if (i) {
            if (i.fn.fancybox) return void ("console" in t && console.log("fancyBox already initialized"));
            var o = {
                    loop: !1,
                    margin: [44, 0],
                    gutter: 50,
                    keyboard: !0,
                    arrows: !0,
                    infobar: !0,
                    toolbar: !0,
                    buttons: ["slideShow", "fullScreen", "thumbs", "share", "close"],
                    idleTime: 3,
                    smallBtn: "auto",
                    protect: !1,
                    modal: !1,
                    image: { preload: "auto" },
                    ajax: { settings: { data: { fancybox: !0 } } },
                    iframe: {
                        tpl:
                            '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                        preload: !0,
                        css: {},
                        attr: { scrolling: "auto" },
                    },
                    defaultType: "image",
                    animationEffect: "zoom",
                    animationDuration: 500,
                    zoomOpacity: "auto",
                    transitionEffect: "fade",
                    transitionDuration: 366,
                    slideClass: "",
                    baseClass: "",
                    baseTpl:
                        '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                    spinnerTpl: '<div class="fancybox-loading"></div>',
                    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                    btnTpl: {
                        download:
                            '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',
                        zoom:
                            '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',
                        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
                        smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
                        arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',
                        arrowRight:
                            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>',
                    },
                    parentEl: "body",
                    autoFocus: !1,
                    backFocus: !0,
                    trapFocus: !0,
                    fullScreen: { autoStart: !1 },
                    touch: { vertical: !0, momentum: !0 },
                    hash: null,
                    media: {},
                    slideShow: { autoStart: !1, speed: 4e3 },
                    thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
                    onInit: i.noop,
                    beforeLoad: i.noop,
                    afterLoad: i.noop,
                    beforeShow: i.noop,
                    afterShow: i.noop,
                    beforeClose: i.noop,
                    afterClose: i.noop,
                    onActivate: i.noop,
                    onDeactivate: i.noop,
                    clickContent: function (t, e) {
                        return "image" === t.type && "zoom";
                    },
                    clickSlide: "close",
                    clickOutside: "close",
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1,
                    mobile: {
                        margin: 0,
                        clickContent: function (t, e) {
                            return "image" === t.type && "toggleControls";
                        },
                        clickSlide: function (t, e) {
                            return "image" === t.type ? "toggleControls" : "close";
                        },
                        dblclickContent: function (t, e) {
                            return "image" === t.type && "zoom";
                        },
                        dblclickSlide: function (t, e) {
                            return "image" === t.type && "zoom";
                        },
                    },
                    lang: "en",
                    i18n: {
                        en: {
                            CLOSE: "Close",
                            NEXT: "Next",
                            PREV: "Previous",
                            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                            PLAY_START: "Start slideshow",
                            PLAY_STOP: "Pause slideshow",
                            FULL_SCREEN: "Full screen",
                            THUMBS: "Thumbnails",
                            DOWNLOAD: "Download",
                            SHARE: "Share",
                            ZOOM: "Zoom",
                        },
                        de: {
                            CLOSE: "Schliessen",
                            NEXT: "Weiter",
                            PREV: "Zurück",
                            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                            PLAY_START: "Diaschau starten",
                            PLAY_STOP: "Diaschau beenden",
                            FULL_SCREEN: "Vollbild",
                            THUMBS: "Vorschaubilder",
                            DOWNLOAD: "Herunterladen",
                            SHARE: "Teilen",
                            ZOOM: "Maßstab",
                        },
                    },
                },
                a = i(t),
                r = i(e),
                l = 0,
                h = function (t) {
                    return t && t.hasOwnProperty && t instanceof i;
                },
                c = (function () {
                    return (
                        t.requestAnimationFrame ||
                        t.webkitRequestAnimationFrame ||
                        t.mozRequestAnimationFrame ||
                        t.oRequestAnimationFrame ||
                        function (e) {
                            return t.setTimeout(e, 1e3 / 60);
                        }
                    );
                })(),
                u = (function () {
                    var t,
                        i = e.createElement("fakeelement"),
                        s = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                    for (t in s) if (i.style[t] !== n) return s[t];
                    return "transitionend";
                })(),
                d = function (t) {
                    return t && t.length && t[0].offsetHeight;
                },
                p = function (t, n, s) {
                    var o = this;
                    (o.opts = i.extend(!0, { index: s }, i.fancybox.defaults, n || {})),
                        i.fancybox.isMobile && (o.opts = i.extend(!0, {}, o.opts, o.opts.mobile)),
                        n && i.isArray(n.buttons) && (o.opts.buttons = n.buttons),
                        (o.id = o.opts.id || ++l),
                        (o.group = []),
                        (o.currIndex = parseInt(o.opts.index, 10) || 0),
                        (o.prevIndex = null),
                        (o.prevPos = null),
                        (o.currPos = 0),
                        (o.firstRun = null),
                        o.createGroup(t),
                        o.group.length && ((o.$lastFocus = i(e.activeElement).blur()), (o.slides = {}), o.init());
                };
            i.extend(p.prototype, {
                init: function () {
                    var s,
                        o,
                        a,
                        l = this,
                        h = l.group[l.currIndex],
                        c = h.opts,
                        u = i.fancybox.scrollbarWidth;
                    (l.scrollTop = r.scrollTop()),
                        (l.scrollLeft = r.scrollLeft()),
                        i.fancybox.getInstance() ||
                            (i("body").addClass("fancybox-active"),
                            /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream
                                ? "image" !== h.type &&
                                  i("body")
                                      .css("top", i("body").scrollTop() * -1)
                                      .addClass("fancybox-iosfix")
                                : !i.fancybox.isMobile &&
                                  e.body.scrollHeight > t.innerHeight &&
                                  (u === n && ((s = i('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body")), (u = i.fancybox.scrollbarWidth = s[0].offsetWidth - s[0].clientWidth), s.remove()),
                                  i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + u + "px; }</style>"),
                                  i("body").addClass("compensate-for-scrollbar"))),
                        (a = ""),
                        i.each(c.buttons, function (t, e) {
                            a += c.btnTpl[e] || "";
                        }),
                        (o = i(l.translate(l, c.baseTpl.replace("{{buttons}}", a).replace("{{arrows}}", c.btnTpl.arrowLeft + c.btnTpl.arrowRight)))
                            .attr("id", "fancybox-container-" + l.id)
                            .addClass("fancybox-is-hidden")
                            .addClass(c.baseClass)
                            .data("FancyBox", l)
                            .appendTo(c.parentEl)),
                        (l.$refs = { container: o }),
                        ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                            l.$refs[t] = o.find(".fancybox-" + t);
                        }),
                        l.trigger("onInit"),
                        l.activate(),
                        l.jumpTo(l.currIndex);
                },
                translate: function (t, e) {
                    var i = t.opts.i18n[t.opts.lang];
                    return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                        var s = i[e];
                        return s === n ? t : s;
                    });
                },
                createGroup: function (t) {
                    var e = this,
                        s = i.makeArray(t);
                    i.each(s, function (t, s) {
                        var o,
                            a,
                            r,
                            l,
                            h = {},
                            c = {};
                        i.isPlainObject(s)
                            ? ((h = s), (c = s.opts || s))
                            : "object" === i.type(s) && i(s).length
                            ? ((o = i(s)), (c = o.data()), (c = i.extend({}, c, c.options || {})), (c.$orig = o), (h.src = c.src || o.attr("href")), h.type || h.src || ((h.type = "inline"), (h.src = s)))
                            : (h = { type: "html", src: s + "" }),
                            (h.opts = i.extend(!0, {}, e.opts, c)),
                            i.isArray(c.buttons) && (h.opts.buttons = c.buttons),
                            (a = h.type || h.opts.type),
                            (r = h.src || ""),
                            !a &&
                                r &&
                                (r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? (a = "image") : r.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "pdf") : "#" === r.charAt(0) && (a = "inline")),
                            a ? (h.type = a) : e.trigger("objectNeedsType", h),
                            (h.index = e.group.length),
                            h.opts.$orig && !h.opts.$orig.length && delete h.opts.$orig,
                            !h.opts.$thumb && h.opts.$orig && (h.opts.$thumb = h.opts.$orig.find("img:first")),
                            h.opts.$thumb && !h.opts.$thumb.length && delete h.opts.$thumb,
                            "function" === i.type(h.opts.caption) && (h.opts.caption = h.opts.caption.apply(s, [e, h])),
                            "function" === i.type(e.opts.caption) && (h.opts.caption = e.opts.caption.apply(s, [e, h])),
                            h.opts.caption instanceof i || (h.opts.caption = h.opts.caption === n ? "" : h.opts.caption + ""),
                            "ajax" === a && ((l = r.split(/\s+/, 2)), l.length > 1 && ((h.src = l.shift()), (h.opts.filter = l.shift()))),
                            "auto" == h.opts.smallBtn && (i.inArray(a, ["html", "inline", "ajax"]) > -1 ? ((h.opts.toolbar = !1), (h.opts.smallBtn = !0)) : (h.opts.smallBtn = !1)),
                            "pdf" === a && ((h.type = "iframe"), (h.opts.iframe.preload = !1)),
                            h.opts.modal &&
                                (h.opts = i.extend(!0, h.opts, {
                                    infobar: 0,
                                    toolbar: 0,
                                    smallBtn: 0,
                                    keyboard: 0,
                                    slideShow: 0,
                                    fullScreen: 0,
                                    thumbs: 0,
                                    touch: 0,
                                    clickContent: !1,
                                    clickSlide: !1,
                                    clickOutside: !1,
                                    dblclickContent: !1,
                                    dblclickSlide: !1,
                                    dblclickOutside: !1,
                                })),
                            e.group.push(h);
                    });
                },
                addEvents: function () {
                    var n = this;
                    n.removeEvents(),
                        n.$refs.container
                            .on("click.fb-close", "[data-fancybox-close]", function (t) {
                                t.stopPropagation(), t.preventDefault(), n.close(t);
                            })
                            .on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function (t) {
                                t.stopPropagation(), t.preventDefault(), n.previous();
                            })
                            .on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function (t) {
                                t.stopPropagation(), t.preventDefault(), n.next();
                            })
                            .on("click.fb", "[data-fancybox-zoom]", function (t) {
                                n[n.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                            }),
                        a.on("orientationchange.fb resize.fb", function (t) {
                            t && t.originalEvent && "resize" === t.originalEvent.type
                                ? c(function () {
                                      n.update();
                                  })
                                : (n.$refs.stage.hide(),
                                  setTimeout(function () {
                                      n.$refs.stage.show(), n.update();
                                  }, 600));
                        }),
                        r.on("focusin.fb", function (t) {
                            var s = i.fancybox ? i.fancybox.getInstance() : null;
                            s.isClosing ||
                                !s.current ||
                                !s.current.opts.trapFocus ||
                                i(t.target).hasClass("fancybox-container") ||
                                i(t.target).is(e) ||
                                (s && "fixed" !== i(t.target).css("position") && !s.$refs.container.has(t.target).length && (t.stopPropagation(), s.focus(), a.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft)));
                        }),
                        r.on("keydown.fb", function (t) {
                            var e = n.current,
                                s = t.keyCode || t.which;
                            if (e && e.opts.keyboard && !i(t.target).is("input") && !i(t.target).is("textarea"))
                                return 8 === s || 27 === s
                                    ? (t.preventDefault(), void n.close(t))
                                    : 37 === s || 38 === s
                                    ? (t.preventDefault(), void n.previous())
                                    : 39 === s || 40 === s
                                    ? (t.preventDefault(), void n.next())
                                    : void n.trigger("afterKeydown", t, s);
                        }),
                        n.group[n.currIndex].opts.idleTime &&
                            ((n.idleSecondsCounter = 0),
                            r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                                (n.idleSecondsCounter = 0), n.isIdle && n.showControls(), (n.isIdle = !1);
                            }),
                            (n.idleInterval = t.setInterval(function () {
                                n.idleSecondsCounter++, n.idleSecondsCounter >= n.group[n.currIndex].opts.idleTime && ((n.isIdle = !0), (n.idleSecondsCounter = 0), n.hideControls());
                            }, 1e3)));
                },
                removeEvents: function () {
                    var e = this;
                    a.off("orientationchange.fb resize.fb"), r.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), (e.idleInterval = null));
                },
                previous: function (t) {
                    return this.jumpTo(this.currPos - 1, t);
                },
                next: function (t) {
                    return this.jumpTo(this.currPos + 1, t);
                },
                jumpTo: function (t, e, s) {
                    var o,
                        a,
                        r,
                        l,
                        h,
                        c,
                        u,
                        p = this,
                        f = p.group.length;
                    if (!(p.isSliding || p.isClosing || (p.isAnimating && p.firstRun))) {
                        if (((t = parseInt(t, 10)), (a = p.current ? p.current.opts.loop : p.opts.loop), !a && (t < 0 || t >= f))) return !1;
                        if (((o = p.firstRun = null === p.firstRun), !(f < 2 && !o && p.isSliding))) {
                            if (
                                ((l = p.current),
                                (p.prevIndex = p.currIndex),
                                (p.prevPos = p.currPos),
                                (r = p.createSlide(t)),
                                f > 1 && ((a || r.index > 0) && p.createSlide(t - 1), (a || r.index < f - 1) && p.createSlide(t + 1)),
                                (p.current = r),
                                (p.currIndex = r.index),
                                (p.currPos = r.pos),
                                p.trigger("beforeShow", o),
                                p.updateControls(),
                                (c = i.fancybox.getTranslate(r.$slide)),
                                (r.isMoved = (0 !== c.left || 0 !== c.top) && !r.$slide.hasClass("fancybox-animated")),
                                (r.forcedDuration = n),
                                i.isNumeric(e) ? (r.forcedDuration = e) : (e = r.opts[o ? "animationDuration" : "transitionDuration"]),
                                (e = parseInt(e, 10)),
                                o)
                            )
                                return (
                                    r.opts.animationEffect && e && p.$refs.container.css("transition-duration", e + "ms"),
                                    p.$refs.container.removeClass("fancybox-is-hidden"),
                                    d(p.$refs.container),
                                    p.$refs.container.addClass("fancybox-is-open"),
                                    r.$slide.addClass("fancybox-slide--current"),
                                    p.loadSlide(r),
                                    void p.preload()
                                );
                            i.each(p.slides, function (t, e) {
                                i.fancybox.stop(e.$slide);
                            }),
                                r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),
                                r.isMoved
                                    ? ((h = Math.round(r.$slide.width())),
                                      i.each(p.slides, function (t, n) {
                                          var s = n.pos - r.pos;
                                          i.fancybox.animate(n.$slide, { top: 0, left: s * h + s * n.opts.gutter }, e, function () {
                                              n.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), n.pos === p.currPos && ((r.isMoved = !1), p.complete());
                                          });
                                      }))
                                    : p.$refs.stage.children().removeAttr("style"),
                                r.isLoaded ? p.revealContent(r) : p.loadSlide(r),
                                p.preload(),
                                l.pos !== r.pos &&
                                    ((u = "fancybox-slide--" + (l.pos > r.pos ? "next" : "previous")),
                                    l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),
                                    (l.isComplete = !1),
                                    e &&
                                        (r.isMoved || r.opts.transitionEffect) &&
                                        (r.isMoved
                                            ? l.$slide.addClass(u)
                                            : ((u = "fancybox-animated " + u + " fancybox-fx-" + r.opts.transitionEffect),
                                              i.fancybox.animate(l.$slide, u, e, function () {
                                                  l.$slide.removeClass(u).removeAttr("style");
                                              }))));
                        }
                    }
                },
                createSlide: function (t) {
                    var e,
                        n,
                        s = this;
                    return (
                        (n = t % s.group.length),
                        (n = n < 0 ? s.group.length + n : n),
                        !s.slides[t] && s.group[n] && ((e = i('<div class="fancybox-slide"></div>').appendTo(s.$refs.stage)), (s.slides[t] = i.extend(!0, {}, s.group[n], { pos: t, $slide: e, isLoaded: !1 })), s.updateSlide(s.slides[t])),
                        s.slides[t]
                    );
                },
                scaleToActual: function (t, e, s) {
                    var o,
                        a,
                        r,
                        l,
                        h,
                        c = this,
                        u = c.current,
                        d = u.$content,
                        p = parseInt(u.$slide.width(), 10),
                        f = parseInt(u.$slide.height(), 10),
                        g = u.width,
                        m = u.height;
                    "image" != u.type ||
                        u.hasError ||
                        !d ||
                        c.isAnimating ||
                        (i.fancybox.stop(d),
                        (c.isAnimating = !0),
                        (t = t === n ? 0.5 * p : t),
                        (e = e === n ? 0.5 * f : e),
                        (o = i.fancybox.getTranslate(d)),
                        (l = g / o.width),
                        (h = m / o.height),
                        (a = 0.5 * p - 0.5 * g),
                        (r = 0.5 * f - 0.5 * m),
                        g > p && ((a = o.left * l - (t * l - t)), a > 0 && (a = 0), a < p - g && (a = p - g)),
                        m > f && ((r = o.top * h - (e * h - e)), r > 0 && (r = 0), r < f - m && (r = f - m)),
                        c.updateCursor(g, m),
                        i.fancybox.animate(d, { top: r, left: a, scaleX: l, scaleY: h }, s || 330, function () {
                            c.isAnimating = !1;
                        }),
                        c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop());
                },
                scaleToFit: function (t) {
                    var e,
                        n = this,
                        s = n.current,
                        o = s.$content;
                    "image" != s.type ||
                        s.hasError ||
                        !o ||
                        n.isAnimating ||
                        (i.fancybox.stop(o),
                        (n.isAnimating = !0),
                        (e = n.getFitPos(s)),
                        n.updateCursor(e.width, e.height),
                        i.fancybox.animate(o, { top: e.top, left: e.left, scaleX: e.width / o.width(), scaleY: e.height / o.height() }, t || 330, function () {
                            n.isAnimating = !1;
                        }));
                },
                getFitPos: function (t) {
                    var e,
                        n,
                        s,
                        o,
                        a,
                        r = this,
                        l = t.$content,
                        h = t.width,
                        c = t.height,
                        u = t.opts.margin;
                    return (
                        !(!l || !l.length || (!h && !c)) &&
                        ("number" === i.type(u) && (u = [u, u]),
                        2 == u.length && (u = [u[0], u[1], u[0], u[1]]),
                        (e = parseInt(r.$refs.stage.width(), 10) - (u[1] + u[3])),
                        (n = parseInt(r.$refs.stage.height(), 10) - (u[0] + u[2])),
                        (s = Math.min(1, e / h, n / c)),
                        (o = Math.floor(s * h)),
                        (a = Math.floor(s * c)),
                        { top: Math.floor(0.5 * (n - a)) + u[0], left: Math.floor(0.5 * (e - o)) + u[3], width: o, height: a })
                    );
                },
                update: function () {
                    var t = this;
                    i.each(t.slides, function (e, i) {
                        t.updateSlide(i);
                    });
                },
                updateSlide: function (t) {
                    var e = this,
                        n = t.$content;
                    n && (t.width || t.height) && ((e.isAnimating = !1), i.fancybox.stop(n), i.fancybox.setTranslate(n, e.getFitPos(t)), t.pos === e.currPos && e.updateCursor()), t.$slide.trigger("refresh"), e.trigger("onUpdate", t);
                },
                updateCursor: function (t, e) {
                    var i,
                        s = this,
                        o = s.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                    s.current &&
                        !s.isClosing &&
                        (s.isZoomable()
                            ? (o.addClass("fancybox-is-zoomable"),
                              (i = t !== n && e !== n ? t < s.current.width && e < s.current.height : s.isScaledDown()),
                              i ? o.addClass("fancybox-can-zoomIn") : s.current.opts.touch ? o.addClass("fancybox-can-drag") : o.addClass("fancybox-can-zoomOut"))
                            : s.current.opts.touch && o.addClass("fancybox-can-drag"));
                },
                isZoomable: function () {
                    var t,
                        e = this,
                        n = e.current;
                    if (n && !e.isClosing)
                        return !!(
                            "image" === n.type &&
                            n.isLoaded &&
                            !n.hasError &&
                            ("zoom" === n.opts.clickContent || (i.isFunction(n.opts.clickContent) && "zoom" === n.opts.clickContent(n))) &&
                            ((t = e.getFitPos(n)), n.width > t.width || n.height > t.height)
                        );
                },
                isScaledDown: function () {
                    var t = this,
                        e = t.current,
                        n = e.$content,
                        s = !1;
                    return n && ((s = i.fancybox.getTranslate(n)), (s = s.width < e.width || s.height < e.height)), s;
                },
                canPan: function () {
                    var t = this,
                        e = t.current,
                        i = e.$content,
                        n = !1;
                    return i && ((n = t.getFitPos(e)), (n = Math.abs(i.width() - n.width) > 1 || Math.abs(i.height() - n.height) > 1)), n;
                },
                loadSlide: function (t) {
                    var e,
                        n,
                        s,
                        o = this;
                    if (!t.isLoading && !t.isLoaded) {
                        switch (
                            ((t.isLoading = !0),
                            o.trigger("beforeLoad", t),
                            (e = t.type),
                            (n = t.$slide),
                            n
                                .off("refresh")
                                .trigger("onReset")
                                .addClass("fancybox-slide--" + (e || "unknown"))
                                .addClass(t.opts.slideClass),
                            e)
                        ) {
                            case "image":
                                o.setImage(t);
                                break;
                            case "iframe":
                                o.setIframe(t);
                                break;
                            case "html":
                                o.setContent(t, t.src || t.content);
                                break;
                            case "inline":
                                i(t.src).length ? o.setContent(t, i(t.src)) : o.setError(t);
                                break;
                            case "ajax":
                                o.showLoading(t),
                                    (s = i.ajax(
                                        i.extend({}, t.opts.ajax.settings, {
                                            url: t.src,
                                            success: function (e, i) {
                                                "success" === i && o.setContent(t, e);
                                            },
                                            error: function (e, i) {
                                                e && "abort" !== i && o.setError(t);
                                            },
                                        })
                                    )),
                                    n.one("onReset", function () {
                                        s.abort();
                                    });
                                break;
                            default:
                                o.setError(t);
                        }
                        return !0;
                    }
                },
                setImage: function (e) {
                    var n,
                        s,
                        o,
                        a,
                        r = this,
                        l = e.opts.srcset || e.opts.image.srcset;
                    if (l) {
                        (o = t.devicePixelRatio || 1),
                            (a = t.innerWidth * o),
                            (s = l.split(",").map(function (t) {
                                var e = {};
                                return (
                                    t
                                        .trim()
                                        .split(/\s+/)
                                        .forEach(function (t, i) {
                                            var n = parseInt(t.substring(0, t.length - 1), 10);
                                            return 0 === i ? (e.url = t) : void (n && ((e.value = n), (e.postfix = t[t.length - 1])));
                                        }),
                                    e
                                );
                            })),
                            s.sort(function (t, e) {
                                return t.value - e.value;
                            });
                        for (var h = 0; h < s.length; h++) {
                            var c = s[h];
                            if (("w" === c.postfix && c.value >= a) || ("x" === c.postfix && c.value >= o)) {
                                n = c;
                                break;
                            }
                        }
                        !n && s.length && (n = s[s.length - 1]), n && ((e.src = n.url), e.width && e.height && "w" == n.postfix && ((e.height = (e.width / e.height) * n.value), (e.width = n.value)));
                    }
                    (e.$content = i('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide)),
                        e.opts.preload !== !1 && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb)
                            ? ((e.width = e.opts.width),
                              (e.height = e.opts.height),
                              (e.$ghost = i("<img />")
                                  .one("error", function () {
                                      i(this).remove(), (e.$ghost = null), r.setBigImage(e);
                                  })
                                  .one("load", function () {
                                      r.afterLoad(e), r.setBigImage(e);
                                  })
                                  .addClass("fancybox-image")
                                  .appendTo(e.$content)
                                  .attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))))
                            : r.setBigImage(e);
                },
                setBigImage: function (t) {
                    var e = this,
                        n = i("<img />");
                    (t.$image = n
                        .one("error", function () {
                            e.setError(t);
                        })
                        .one("load", function () {
                            clearTimeout(t.timouts),
                                (t.timouts = null),
                                e.isClosing ||
                                    ((t.width = this.naturalWidth),
                                    (t.height = this.naturalHeight),
                                    t.opts.image.srcset && n.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset),
                                    e.hideLoading(t),
                                    t.$ghost
                                        ? (t.timouts = setTimeout(function () {
                                              (t.timouts = null), t.$ghost.hide();
                                          }, Math.min(300, Math.max(1e3, t.height / 1600))))
                                        : e.afterLoad(t));
                        })
                        .addClass("fancybox-image")
                        .attr("src", t.src)
                        .appendTo(t.$content)),
                        (n[0].complete || "complete" == n[0].readyState) && n[0].naturalWidth && n[0].naturalHeight
                            ? n.trigger("load")
                            : n[0].error
                            ? n.trigger("error")
                            : (t.timouts = setTimeout(function () {
                                  n[0].complete || t.hasError || e.showLoading(t);
                              }, 100));
                },
                setIframe: function (t) {
                    var e,
                        s = this,
                        o = t.opts.iframe,
                        a = t.$slide;
                    (t.$content = i('<div class="fancybox-content' + (o.preload ? " fancybox-is-hidden" : "") + '"></div>')
                        .css(o.css)
                        .appendTo(a)),
                        (e = i(o.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                            .attr(o.attr)
                            .appendTo(t.$content)),
                        o.preload
                            ? (s.showLoading(t),
                              e.on("load.fb error.fb", function (e) {
                                  (this.isReady = 1), t.$slide.trigger("refresh"), s.afterLoad(t);
                              }),
                              a.on("refresh.fb", function () {
                                  var t,
                                      i,
                                      s,
                                      a = h.$content,
                                      r = o.css.width,
                                      l = o.css.height;
                                  if (1 === e[0].isReady) {
                                      try {
                                          (i = e.contents()), (s = i.find("body"));
                                      } catch (h) {}
                                      s &&
                                          s.length &&
                                          (r === n && ((t = e[0].contentWindow.document.documentElement.scrollWidth), (r = Math.ceil(s.outerWidth(!0) + (a.width() - t))), (r += a.outerWidth() - a.innerWidth())),
                                          l === n && ((l = Math.ceil(s.outerHeight(!0))), (l += a.outerHeight() - a.innerHeight())),
                                          r && a.width(r),
                                          l && a.height(l)),
                                          a.removeClass("fancybox-is-hidden");
                                  }
                              }))
                            : this.afterLoad(t),
                        e.attr("src", t.src),
                        t.opts.smallBtn === !0 && t.$content.prepend(s.translate(t, t.opts.btnTpl.smallBtn)),
                        a.one("onReset", function () {
                            try {
                                i(this).find("iframe").hide().attr("src", "//about:blank");
                            } catch (t) {}
                            i(this).empty(), (t.isLoaded = !1);
                        });
                },
                setContent: function (t, e) {
                    var n = this;
                    n.isClosing ||
                        (n.hideLoading(t),
                        t.$slide.empty(),
                        h(e) && e.parent().length
                            ? (e.parent(".fancybox-slide--inline").trigger("onReset"), (t.$placeholder = i("<div></div>").hide().insertAfter(e)), e.css("display", "inline-block"))
                            : t.hasError || ("string" === i.type(e) && ((e = i("<div>").append(i.trim(e)).contents()), 3 === e[0].nodeType && (e = i("<div>").html(e))), t.opts.filter && (e = i("<div>").html(e).find(t.opts.filter))),
                        t.$slide.one("onReset", function () {
                            t.$placeholder && (t.$placeholder.after(e.hide()).remove(), (t.$placeholder = null)), t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)), t.hasError || (i(this).empty(), (t.isLoaded = !1));
                        }),
                        (t.$content = i(e).appendTo(t.$slide)),
                        this.afterLoad(t));
                },
                setError: function (t) {
                    (t.hasError = !0), t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl));
                },
                showLoading: function (t) {
                    var e = this;
                    (t = t || e.current), t && !t.$spinner && (t.$spinner = i(e.opts.spinnerTpl).appendTo(t.$slide));
                },
                hideLoading: function (t) {
                    var e = this;
                    (t = t || e.current), t && t.$spinner && (t.$spinner.remove(), delete t.$spinner);
                },
                afterLoad: function (t) {
                    var e = this;
                    e.isClosing ||
                        ((t.isLoading = !1),
                        (t.isLoaded = !0),
                        e.trigger("afterLoad", t),
                        e.hideLoading(t),
                        t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = i(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div,form").first())),
                        t.opts.protect &&
                            t.$content &&
                            !t.hasError &&
                            (t.$content.on("contextmenu.fb", function (t) {
                                return 2 == t.button && t.preventDefault(), !0;
                            }),
                            "image" === t.type && i('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
                        e.revealContent(t));
                },
                revealContent: function (t) {
                    var e,
                        s,
                        o,
                        a,
                        r,
                        l = this,
                        h = t.$slide,
                        c = !1;
                    return (
                        (e = t.opts[l.firstRun ? "animationEffect" : "transitionEffect"]),
                        (o = t.opts[l.firstRun ? "animationDuration" : "transitionDuration"]),
                        (o = parseInt(t.forcedDuration === n ? o : t.forcedDuration, 10)),
                        (!t.isMoved && t.pos === l.currPos && o) || (e = !1),
                        "zoom" !== e || (t.pos === l.currPos && o && "image" === t.type && !t.hasError && (c = l.getThumbPos(t))) || (e = "fade"),
                        "zoom" === e
                            ? ((r = l.getFitPos(t)),
                              (r.scaleX = r.width / c.width),
                              (r.scaleY = r.height / c.height),
                              delete r.width,
                              delete r.height,
                              (a = t.opts.zoomOpacity),
                              "auto" == a && (a = Math.abs(t.width / t.height - c.width / c.height) > 0.1),
                              a && ((c.opacity = 0.1), (r.opacity = 1)),
                              i.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c),
                              d(t.$content),
                              void i.fancybox.animate(t.$content, r, o, function () {
                                  l.complete();
                              }))
                            : (l.updateSlide(t),
                              e
                                  ? (i.fancybox.stop(h),
                                    (s = "fancybox-animated fancybox-slide--" + (t.pos >= l.prevPos ? "next" : "previous") + " fancybox-fx-" + e),
                                    h.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(s),
                                    t.$content.removeClass("fancybox-is-hidden"),
                                    d(h),
                                    void i.fancybox.animate(
                                        h,
                                        "fancybox-slide--current",
                                        o,
                                        function (e) {
                                            h.removeClass(s).removeAttr("style"), t.pos === l.currPos && l.complete();
                                        },
                                        !0
                                    ))
                                  : (d(h), t.$content.removeClass("fancybox-is-hidden"), void (t.pos === l.currPos && l.complete())))
                    );
                },
                getThumbPos: function (n) {
                    var s,
                        o = this,
                        a = !1,
                        r = function (e) {
                            for (var n, s = e[0], o = s.getBoundingClientRect(), a = []; null !== s.parentElement; )
                                ("hidden" !== i(s.parentElement).css("overflow") && "auto" !== i(s.parentElement).css("overflow")) || a.push(s.parentElement.getBoundingClientRect()), (s = s.parentElement);
                            return (
                                (n = a.every(function (t) {
                                    var e = Math.min(o.right, t.right) - Math.max(o.left, t.left),
                                        i = Math.min(o.bottom, t.bottom) - Math.max(o.top, t.top);
                                    return e > 0 && i > 0;
                                })),
                                n && o.bottom > 0 && o.right > 0 && o.left < i(t).width() && o.top < i(t).height()
                            );
                        },
                        l = n.opts.$thumb,
                        h = l ? l.offset() : 0;
                    return (
                        h &&
                            l[0].ownerDocument === e &&
                            r(l) &&
                            ((s = o.$refs.stage.offset()),
                            (a = { top: h.top - s.top + parseFloat(l.css("border-top-width") || 0), left: h.left - s.left + parseFloat(l.css("border-left-width") || 0), width: l.width(), height: l.height(), scaleX: 1, scaleY: 1 })),
                        a
                    );
                },
                complete: function () {
                    var t = this,
                        n = t.current,
                        s = {};
                    n.isMoved ||
                        !n.isLoaded ||
                        n.isComplete ||
                        ((n.isComplete = !0),
                        n.$slide.siblings().trigger("onReset"),
                        d(n.$slide),
                        n.$slide.addClass("fancybox-slide--complete"),
                        i.each(t.slides, function (e, n) {
                            n.pos >= t.currPos - 1 && n.pos <= t.currPos + 1 ? (s[n.pos] = n) : n && (i.fancybox.stop(n.$slide), n.$slide.off().remove());
                        }),
                        (t.slides = s),
                        t.updateCursor(),
                        t.trigger("afterShow"),
                        (i(e.activeElement).is("[disabled]") || (n.opts.autoFocus && "image" != n.type && "iframe" !== n.type)) && t.focus());
                },
                preload: function () {
                    var t,
                        e,
                        i = this;
                    i.group.length < 2 || ((t = i.slides[i.currPos + 1]), (e = i.slides[i.currPos - 1]), t && "image" === t.type && i.loadSlide(t), e && "image" === e.type && i.loadSlide(e));
                },
                focus: function () {
                    var t,
                        e = this.current;
                    this.isClosing ||
                        (e && e.isComplete && ((t = e.$slide.find("input[autofocus]:enabled:visible:first")), t.length || (t = e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))),
                        (t = t && t.length ? t : this.$refs.container),
                        t.focus());
                },
                activate: function () {
                    var t = this;
                    i(".fancybox-container").each(function () {
                        var e = i(this).data("FancyBox");
                        e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
                    }),
                        (t.isVisible = !0),
                        (t.current || t.isIdle) && (t.update(), t.updateControls()),
                        t.trigger("onActivate"),
                        t.addEvents();
                },
                close: function (t, e) {
                    var n,
                        s,
                        o,
                        a,
                        r,
                        l,
                        h = this,
                        p = h.current,
                        f = function () {
                            h.cleanUp(t);
                        };
                    return !(
                        h.isClosing ||
                        ((h.isClosing = !0),
                        h.trigger("beforeClose", t) === !1
                            ? ((h.isClosing = !1),
                              c(function () {
                                  h.update();
                              }),
                              1)
                            : (h.removeEvents(),
                              p.timouts && clearTimeout(p.timouts),
                              (o = p.$content),
                              (n = p.opts.animationEffect),
                              (s = i.isNumeric(e) ? e : n ? p.opts.animationDuration : 0),
                              p.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                              p.$slide.siblings().trigger("onReset").remove(),
                              s && h.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),
                              h.hideLoading(p),
                              h.hideControls(),
                              h.updateCursor(),
                              "zoom" !== n || (t !== !0 && o && s && "image" === p.type && !p.hasError && (l = h.getThumbPos(p))) || (n = "fade"),
                              "zoom" === n
                                  ? (i.fancybox.stop(o),
                                    (r = i.fancybox.getTranslate(o)),
                                    (r.width = r.width * r.scaleX),
                                    (r.height = r.height * r.scaleY),
                                    (a = p.opts.zoomOpacity),
                                    "auto" == a && (a = Math.abs(p.width / p.height - l.width / l.height) > 0.1),
                                    a && (l.opacity = 0),
                                    (r.scaleX = r.width / l.width),
                                    (r.scaleY = r.height / l.height),
                                    (r.width = l.width),
                                    (r.height = l.height),
                                    i.fancybox.setTranslate(p.$content, r),
                                    d(p.$content),
                                    i.fancybox.animate(p.$content, l, s, f),
                                    0)
                                  : (n && s ? (t === !0 ? setTimeout(f, s) : i.fancybox.animate(p.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + n, s, f)) : f(), 0)))
                    );
                },
                cleanUp: function (t) {
                    var n,
                        s,
                        o = this,
                        r = i("body");
                    o.current.$slide.trigger("onReset"),
                        o.$refs.container.empty().remove(),
                        o.trigger("afterClose", t),
                        o.$lastFocus && o.current.opts.backFocus && o.$lastFocus.focus(),
                        (o.current = null),
                        (n = i.fancybox.getInstance()),
                        n
                            ? n.activate()
                            : (a.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),
                              r.removeClass("fancybox-active compensate-for-scrollbar"),
                              r.hasClass("fancybox-iosfix") &&
                                  ((s = parseInt(e.body.style.top, 10)),
                                  r
                                      .removeClass("fancybox-iosfix")
                                      .css("top", "")
                                      .scrollTop(s * -1)),
                              i("#fancybox-style-noscroll").remove());
                },
                trigger: function (t, e) {
                    var n,
                        s = Array.prototype.slice.call(arguments, 1),
                        o = this,
                        a = e && e.opts ? e : o.current;
                    return (
                        a ? s.unshift(a) : (a = o),
                        s.unshift(o),
                        i.isFunction(a.opts[t]) && (n = a.opts[t].apply(a, s)),
                        n === !1 ? n : void ("afterClose" !== t && o.$refs ? o.$refs.container.trigger(t + ".fb", s) : r.trigger(t + ".fb", s))
                    );
                },
                updateControls: function (t) {
                    var e = this,
                        i = e.current,
                        n = i.index,
                        s = i.opts.caption,
                        o = e.$refs.container,
                        a = e.$refs.caption;
                    i.$slide.trigger("refresh"),
                        (e.$caption = s && s.length ? a.html(s) : null),
                        e.isHiddenControls || e.isIdle || e.showControls(),
                        o.find("[data-fancybox-count]").html(e.group.length),
                        o.find("[data-fancybox-index]").html(n + 1),
                        o.find("[data-fancybox-prev]").prop("disabled", !i.opts.loop && n <= 0),
                        o.find("[data-fancybox-next]").prop("disabled", !i.opts.loop && n >= e.group.length - 1),
                        "image" === i.type
                            ? o
                                  .find("[data-fancybox-download]")
                                  .attr("href", i.opts.image.src || i.src)
                                  .show()
                            : o.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
                },
                hideControls: function () {
                    (this.isHiddenControls = !0), this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav");
                },
                showControls: function () {
                    var t = this,
                        e = t.current ? t.current.opts : t.opts,
                        i = t.$refs.container;
                    (t.isHiddenControls = !1),
                        (t.idleSecondsCounter = 0),
                        i
                            .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
                            .toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1))
                            .toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1))
                            .toggleClass("fancybox-is-modal", !!e.modal),
                        t.$caption ? i.addClass("fancybox-show-caption ") : i.removeClass("fancybox-show-caption");
                },
                toggleControls: function () {
                    this.isHiddenControls ? this.showControls() : this.hideControls();
                },
            }),
                (i.fancybox = {
                    version: "3.2.5",
                    defaults: o,
                    getInstance: function (t) {
                        var e = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                            n = Array.prototype.slice.call(arguments, 1);
                        return e instanceof p && ("string" === i.type(t) ? e[t].apply(e, n) : "function" === i.type(t) && t.apply(e, n), e);
                    },
                    open: function (t, e, i) {
                        return new p(t, e, i);
                    },
                    close: function (t) {
                        var e = this.getInstance();
                        e && (e.close(), t === !0 && this.close());
                    },
                    destroy: function () {
                        this.close(!0), r.off("click.fb-start");
                    },
                    isMobile: e.createTouch !== n && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    use3d: (function () {
                        var i = e.createElement("div");
                        return t.getComputedStyle && t.getComputedStyle(i).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11);
                    })(),
                    getTranslate: function (t) {
                        var e;
                        if (!t || !t.length) return !1;
                        if (((e = t.eq(0).css("transform")), e && e.indexOf("matrix") !== -1 ? ((e = e.split("(")[1]), (e = e.split(")")[0]), (e = e.split(","))) : (e = []), e.length))
                            (e = e.length > 10 ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]]), (e = e.map(parseFloat));
                        else {
                            e = [0, 0, 1, 1];
                            var i = /\.*translate\((.*)px,(.*)px\)/i,
                                n = i.exec(t.eq(0).attr("style"));
                            n && ((e[0] = parseFloat(n[2])), (e[1] = parseFloat(n[1])));
                        }
                        return { top: e[0], left: e[1], scaleX: e[2], scaleY: e[3], opacity: parseFloat(t.css("opacity")), width: t.width(), height: t.height() };
                    },
                    setTranslate: function (t, e) {
                        var i = "",
                            s = {};
                        if (t && e)
                            return (
                                (e.left === n && e.top === n) ||
                                    ((i = (e.left === n ? t.position().left : e.left) + "px, " + (e.top === n ? t.position().top : e.top) + "px"), (i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")")),
                                e.scaleX !== n && e.scaleY !== n && (i = (i.length ? i + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"),
                                i.length && (s.transform = i),
                                e.opacity !== n && (s.opacity = e.opacity),
                                e.width !== n && (s.width = e.width),
                                e.height !== n && (s.height = e.height),
                                t.css(s)
                            );
                    },
                    animate: function (t, e, s, o, a) {
                        i.isFunction(s) && ((o = s), (s = null)),
                            i.isPlainObject(e) || t.removeAttr("style"),
                            t.on(u, function (s) {
                                (!s || !s.originalEvent || (t.is(s.originalEvent.target) && "z-index" != s.originalEvent.propertyName)) &&
                                    (i.fancybox.stop(t),
                                    i.isPlainObject(e)
                                        ? e.scaleX !== n &&
                                          e.scaleY !== n &&
                                          (t.css("transition-duration", ""), (e.width = Math.round(t.width() * e.scaleX)), (e.height = Math.round(t.height() * e.scaleY)), (e.scaleX = 1), (e.scaleY = 1), i.fancybox.setTranslate(t, e))
                                        : a !== !0 && t.removeClass(e),
                                    i.isFunction(o) && o(s));
                            }),
                            i.isNumeric(s) && t.css("transition-duration", s + "ms"),
                            i.isPlainObject(e) ? i.fancybox.setTranslate(t, e) : t.addClass(e),
                            e.scaleX && t.hasClass("fancybox-image-wrap") && t.parent().addClass("fancybox-is-scaling"),
                            t.data(
                                "timer",
                                setTimeout(function () {
                                    t.trigger("transitionend");
                                }, s + 16)
                            );
                    },
                    stop: function (t) {
                        clearTimeout(t.data("timer")), t.off("transitionend").css("transition-duration", ""), t.hasClass("fancybox-image-wrap") && t.parent().removeClass("fancybox-is-scaling");
                    },
                }),
                (i.fn.fancybox = function (t) {
                    var e;
                    return (t = t || {}), (e = t.selector || !1), e ? i("body").off("click.fb-start", e).on("click.fb-start", e, { options: t }, s) : this.off("click.fb-start").on("click.fb-start", { items: this, options: t }, s), this;
                }),
                r.on("click.fb-start", "[data-fancybox]", s);
        }
    })(window, document, window.jQuery || jQuery),
    (function (t) {
        "use strict";
        var e = function (e, i, n) {
                if (e)
                    return (
                        (n = n || ""),
                        "object" === t.type(n) && (n = t.param(n, !0)),
                        t.each(i, function (t, i) {
                            e = e.replace("$" + t, i || "");
                        }),
                        n.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + n),
                        e
                    );
            },
            i = {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 },
                    paramPlace: 8,
                    type: "iframe",
                    url: "//www.youtube.com/embed/$4",
                    thumb: "//img.youtube.com/vi/$4/hqdefault.jpg",
                },
                vimeo: {
                    matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                    params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1, api: 1 },
                    paramPlace: 3,
                    type: "iframe",
                    url: "//player.vimeo.com/video/$2",
                },
                metacafe: { matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/, type: "iframe", url: "//www.metacafe.com/embed/$1/?ap=1" },
                dailymotion: { matcher: /dailymotion.com\/video\/(.*)\/?(.*)/, params: { additionalInfos: 0, autoStart: 1 }, type: "iframe", url: "//www.dailymotion.com/embed/video/$1" },
                vine: { matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/, type: "iframe", url: "//vine.co/v/$1/embed/simple" },
                instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" },
                gmap_place: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function (t) {
                        return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
                    },
                },
                gmap_search: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function (t) {
                        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
                    },
                },
            };
        t(document).on("objectNeedsType.fb", function (n, s, o) {
            var a,
                r,
                l,
                h,
                c,
                u,
                d,
                p = o.src || "",
                f = !1;
            (a = t.extend(!0, {}, i, o.opts.media)),
                t.each(a, function (i, n) {
                    if ((l = p.match(n.matcher))) {
                        if (((f = n.type), (u = {}), n.paramPlace && l[n.paramPlace])) {
                            (c = l[n.paramPlace]), "?" == c[0] && (c = c.substring(1)), (c = c.split("&"));
                            for (var s = 0; s < c.length; ++s) {
                                var a = c[s].split("=", 2);
                                2 == a.length && (u[a[0]] = decodeURIComponent(a[1].replace(/\+/g, " ")));
                            }
                        }
                        return (
                            (h = t.extend(!0, {}, n.params, o.opts[i], u)),
                            (p = "function" === t.type(n.url) ? n.url.call(this, l, h, o) : e(n.url, l, h)),
                            (r = "function" === t.type(n.thumb) ? n.thumb.call(this, l, h, o) : e(n.thumb, l)),
                            "vimeo" === i && (p = p.replace("&%23", "#")),
                            !1
                        );
                    }
                }),
                f
                    ? ((o.src = p),
                      (o.type = f),
                      o.opts.thumb || (o.opts.$thumb && o.opts.$thumb.length) || (o.opts.thumb = r),
                      "iframe" === f &&
                          (t.extend(!0, o.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } }), (o.contentProvider = d), (o.opts.slideClass += " fancybox-slide--" + ("gmap_place" == d || "gmap_search" == d ? "map" : "video"))))
                    : p && (o.type = o.opts.defaultType);
        });
    })(window.jQuery || jQuery),
    (function (t, e, i) {
        "use strict";
        var n = (function () {
                return (
                    t.requestAnimationFrame ||
                    t.webkitRequestAnimationFrame ||
                    t.mozRequestAnimationFrame ||
                    t.oRequestAnimationFrame ||
                    function (e) {
                        return t.setTimeout(e, 1e3 / 60);
                    }
                );
            })(),
            s = (function () {
                return (
                    t.cancelAnimationFrame ||
                    t.webkitCancelAnimationFrame ||
                    t.mozCancelAnimationFrame ||
                    t.oCancelAnimationFrame ||
                    function (e) {
                        t.clearTimeout(e);
                    }
                );
            })(),
            o = function (e) {
                var i = [];
                (e = e.originalEvent || e || t.e), (e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]);
                for (var n in e) e[n].pageX ? i.push({ x: e[n].pageX, y: e[n].pageY }) : e[n].clientX && i.push({ x: e[n].clientX, y: e[n].clientY });
                return i;
            },
            a = function (t, e, i) {
                return e && t ? ("x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))) : 0;
            },
            r = function (t) {
                if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea') || i.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
                for (var e = 0, n = t[0].attributes, s = n.length; e < s; e++) if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return !0;
                return !1;
            },
            l = function (e) {
                var i = t.getComputedStyle(e)["overflow-y"],
                    n = t.getComputedStyle(e)["overflow-x"],
                    s = ("scroll" === i || "auto" === i) && e.scrollHeight > e.clientHeight,
                    o = ("scroll" === n || "auto" === n) && e.scrollWidth > e.clientWidth;
                return s || o;
            },
            h = function (t) {
                for (var e = !1; !(e = l(t.get(0))) && ((t = t.parent()), t.length && !t.hasClass("fancybox-stage") && !t.is("body")); );
                return e;
            },
            c = function (t) {
                var e = this;
                (e.instance = t), (e.$bg = t.$refs.bg), (e.$stage = t.$refs.stage), (e.$container = t.$refs.container), e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(e, "ontouchstart"));
            };
        (c.prototype.destroy = function () {
            this.$container.off(".fb.touch");
        }),
            (c.prototype.ontouchstart = function (n) {
                var s = this,
                    l = i(n.target),
                    c = s.instance,
                    u = c.current,
                    d = u.$content,
                    p = "touchstart" == n.type;
                if ((p && s.$container.off("mousedown.fb.touch"), !u || s.instance.isAnimating || s.instance.isClosing)) return n.stopPropagation(), void n.preventDefault();
                if (
                    (!n.originalEvent || 2 != n.originalEvent.button) &&
                    l.length &&
                    !r(l) &&
                    !r(l.parent()) &&
                    !(n.originalEvent.clientX > l[0].clientWidth + l.offset().left) &&
                    ((s.startPoints = o(n)), s.startPoints && !(s.startPoints.length > 1 && c.isSliding))
                ) {
                    if (
                        ((s.$target = l),
                        (s.$content = d),
                        (s.canTap = !0),
                        (s.opts = u.opts.touch),
                        i(e).off(".fb.touch"),
                        i(e).on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(s, "ontouchend")),
                        i(e).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(s, "ontouchmove")),
                        (!s.opts && !c.canPan()) || (!l.is(s.$stage) && !s.$stage.find(l).length))
                    )
                        return void (l.is("img") && n.preventDefault());
                    n.stopPropagation(),
                        (i.fancybox.isMobile && (h(s.$target) || h(s.$target.parent()))) || n.preventDefault(),
                        (s.canvasWidth = Math.round(u.$slide[0].clientWidth)),
                        (s.canvasHeight = Math.round(u.$slide[0].clientHeight)),
                        (s.startTime = new Date().getTime()),
                        (s.distanceX = s.distanceY = s.distance = 0),
                        (s.isPanning = !1),
                        (s.isSwiping = !1),
                        (s.isZooming = !1),
                        (s.sliderStartPos = s.sliderLastPos || { top: 0, left: 0 }),
                        (s.contentStartPos = i.fancybox.getTranslate(s.$content)),
                        (s.contentLastPos = null),
                        1 !== s.startPoints.length ||
                            s.isZooming ||
                            ((s.canTap = !c.isSliding),
                            "image" === u.type && (s.contentStartPos.width > s.canvasWidth + 1 || s.contentStartPos.height > s.canvasHeight + 1)
                                ? (i.fancybox.stop(s.$content), s.$content.css("transition-duration", "0ms"), (s.isPanning = !0))
                                : (s.isSwiping = !0),
                            s.$container.addClass("fancybox-controls--isGrabbing")),
                        2 !== s.startPoints.length ||
                            c.isAnimating ||
                            u.hasError ||
                            "image" !== u.type ||
                            (!u.isLoaded && !u.$ghost) ||
                            ((s.isZooming = !0),
                            (s.isSwiping = !1),
                            (s.isPanning = !1),
                            i.fancybox.stop(s.$content),
                            s.$content.css("transition-duration", "0ms"),
                            (s.centerPointStartX = 0.5 * (s.startPoints[0].x + s.startPoints[1].x) - i(t).scrollLeft()),
                            (s.centerPointStartY = 0.5 * (s.startPoints[0].y + s.startPoints[1].y) - i(t).scrollTop()),
                            (s.percentageOfImageAtPinchPointX = (s.centerPointStartX - s.contentStartPos.left) / s.contentStartPos.width),
                            (s.percentageOfImageAtPinchPointY = (s.centerPointStartY - s.contentStartPos.top) / s.contentStartPos.height),
                            (s.startDistanceBetweenFingers = a(s.startPoints[0], s.startPoints[1])));
                }
            }),
            (c.prototype.ontouchmove = function (t) {
                var e = this;
                if (((e.newPoints = o(t)), i.fancybox.isMobile && (h(e.$target) || h(e.$target.parent())))) return t.stopPropagation(), void (e.canTap = !1);
                if (
                    (e.opts || e.instance.canPan()) &&
                    e.newPoints &&
                    e.newPoints.length &&
                    ((e.distanceX = a(e.newPoints[0], e.startPoints[0], "x")), (e.distanceY = a(e.newPoints[0], e.startPoints[0], "y")), (e.distance = a(e.newPoints[0], e.startPoints[0])), e.distance > 0)
                ) {
                    if (!e.$target.is(e.$stage) && !e.$stage.find(e.$target).length) return;
                    t.stopPropagation(), t.preventDefault(), e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom();
                }
            }),
            (c.prototype.onSwipe = function () {
                var e,
                    o = this,
                    a = o.isSwiping,
                    r = o.sliderStartPos.left || 0;
                a === !0
                    ? Math.abs(o.distance) > 10 &&
                      ((o.canTap = !1),
                      o.instance.group.length < 2 && o.opts.vertical
                          ? (o.isSwiping = "y")
                          : o.instance.isSliding || o.opts.vertical === !1 || ("auto" === o.opts.vertical && i(t).width() > 800)
                          ? (o.isSwiping = "x")
                          : ((e = Math.abs((180 * Math.atan2(o.distanceY, o.distanceX)) / Math.PI)), (o.isSwiping = e > 45 && e < 135 ? "y" : "x")),
                      (o.instance.isSliding = o.isSwiping),
                      (o.startPoints = o.newPoints),
                      i.each(o.instance.slides, function (t, e) {
                          i.fancybox.stop(e.$slide), e.$slide.css("transition-duration", "0ms"), (e.inTransition = !1), e.pos === o.instance.current.pos && (o.sliderStartPos.left = i.fancybox.getTranslate(e.$slide).left);
                      }),
                      o.instance.SlideShow && o.instance.SlideShow.isActive && o.instance.SlideShow.stop())
                    : ("x" == a &&
                          (o.distanceX > 0 && (o.instance.group.length < 2 || (0 === o.instance.current.index && !o.instance.current.opts.loop))
                              ? (r += Math.pow(o.distanceX, 0.8))
                              : o.distanceX < 0 && (o.instance.group.length < 2 || (o.instance.current.index === o.instance.group.length - 1 && !o.instance.current.opts.loop))
                              ? (r -= Math.pow(-o.distanceX, 0.8))
                              : (r += o.distanceX)),
                      (o.sliderLastPos = { top: "x" == a ? 0 : o.sliderStartPos.top + o.distanceY, left: r }),
                      o.requestId && (s(o.requestId), (o.requestId = null)),
                      (o.requestId = n(function () {
                          o.sliderLastPos &&
                              (i.each(o.instance.slides, function (t, e) {
                                  var n = e.pos - o.instance.currPos;
                                  i.fancybox.setTranslate(e.$slide, { top: o.sliderLastPos.top, left: o.sliderLastPos.left + n * o.canvasWidth + n * e.opts.gutter });
                              }),
                              o.$container.addClass("fancybox-is-sliding"));
                      })));
            }),
            (c.prototype.onPan = function () {
                var t,
                    e,
                    o,
                    a = this;
                (a.canTap = !1),
                    (t = a.contentStartPos.width > a.canvasWidth ? a.contentStartPos.left + a.distanceX : a.contentStartPos.left),
                    (e = a.contentStartPos.top + a.distanceY),
                    (o = a.limitMovement(t, e, a.contentStartPos.width, a.contentStartPos.height)),
                    (o.scaleX = a.contentStartPos.scaleX),
                    (o.scaleY = a.contentStartPos.scaleY),
                    (a.contentLastPos = o),
                    a.requestId && (s(a.requestId), (a.requestId = null)),
                    (a.requestId = n(function () {
                        i.fancybox.setTranslate(a.$content, a.contentLastPos);
                    }));
            }),
            (c.prototype.limitMovement = function (t, e, i, n) {
                var s,
                    o,
                    a,
                    r,
                    l = this,
                    h = l.canvasWidth,
                    c = l.canvasHeight,
                    u = l.contentStartPos.left,
                    d = l.contentStartPos.top,
                    p = l.distanceX,
                    f = l.distanceY;
                return (
                    (s = Math.max(0, 0.5 * h - 0.5 * i)),
                    (o = Math.max(0, 0.5 * c - 0.5 * n)),
                    (a = Math.min(h - i, 0.5 * h - 0.5 * i)),
                    (r = Math.min(c - n, 0.5 * c - 0.5 * n)),
                    i > h && (p > 0 && t > s && (t = s - 1 + Math.pow(-s + u + p, 0.8) || 0), p < 0 && t < a && (t = a + 1 - Math.pow(a - u - p, 0.8) || 0)),
                    n > c && (f > 0 && e > o && (e = o - 1 + Math.pow(-o + d + f, 0.8) || 0), f < 0 && e < r && (e = r + 1 - Math.pow(r - d - f, 0.8) || 0)),
                    { top: e, left: t }
                );
            }),
            (c.prototype.limitPosition = function (t, e, i, n) {
                var s = this,
                    o = s.canvasWidth,
                    a = s.canvasHeight;
                return i > o ? ((t = t > 0 ? 0 : t), (t = t < o - i ? o - i : t)) : (t = Math.max(0, o / 2 - i / 2)), n > a ? ((e = e > 0 ? 0 : e), (e = e < a - n ? a - n : e)) : (e = Math.max(0, a / 2 - n / 2)), { top: e, left: t };
            }),
            (c.prototype.onZoom = function () {
                var e = this,
                    o = e.contentStartPos.width,
                    r = e.contentStartPos.height,
                    l = e.contentStartPos.left,
                    h = e.contentStartPos.top,
                    c = a(e.newPoints[0], e.newPoints[1]),
                    u = c / e.startDistanceBetweenFingers,
                    d = Math.floor(o * u),
                    p = Math.floor(r * u),
                    f = (o - d) * e.percentageOfImageAtPinchPointX,
                    g = (r - p) * e.percentageOfImageAtPinchPointY,
                    m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft(),
                    v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop(),
                    b = m - e.centerPointStartX,
                    y = v - e.centerPointStartY,
                    _ = l + (f + b),
                    T = h + (g + y),
                    w = { top: T, left: _, scaleX: e.contentStartPos.scaleX * u, scaleY: e.contentStartPos.scaleY * u };
                (e.canTap = !1),
                    (e.newWidth = d),
                    (e.newHeight = p),
                    (e.contentLastPos = w),
                    e.requestId && (s(e.requestId), (e.requestId = null)),
                    (e.requestId = n(function () {
                        i.fancybox.setTranslate(e.$content, e.contentLastPos);
                    }));
            }),
            (c.prototype.ontouchend = function (t) {
                var n = this,
                    a = Math.max(new Date().getTime() - n.startTime, 1),
                    r = n.isSwiping,
                    l = n.isPanning,
                    h = n.isZooming;
                return (
                    (n.endPoints = o(t)),
                    n.$container.removeClass("fancybox-controls--isGrabbing"),
                    i(e).off(".fb.touch"),
                    n.requestId && (s(n.requestId), (n.requestId = null)),
                    (n.isSwiping = !1),
                    (n.isPanning = !1),
                    (n.isZooming = !1),
                    n.canTap
                        ? n.onTap(t)
                        : ((n.speed = 366),
                          (n.velocityX = (n.distanceX / a) * 0.5),
                          (n.velocityY = (n.distanceY / a) * 0.5),
                          (n.speedX = Math.max(0.5 * n.speed, Math.min(1.5 * n.speed, (1 / Math.abs(n.velocityX)) * n.speed))),
                          void (l ? n.endPanning() : h ? n.endZooming() : n.endSwiping(r)))
                );
            }),
            (c.prototype.endSwiping = function (t) {
                var e = this,
                    n = !1;
                (e.instance.isSliding = !1),
                    (e.sliderLastPos = null),
                    "y" == t && Math.abs(e.distanceY) > 50
                        ? (i.fancybox.animate(e.instance.current.$slide, { top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY, opacity: 0 }, 150), (n = e.instance.close(!0, 300)))
                        : "x" == t && e.distanceX > 50 && e.instance.group.length > 1
                        ? (n = e.instance.previous(e.speedX))
                        : "x" == t && e.distanceX < -50 && e.instance.group.length > 1 && (n = e.instance.next(e.speedX)),
                    n !== !1 || ("x" != t && "y" != t) || e.instance.jumpTo(e.instance.current.index, 150),
                    e.$container.removeClass("fancybox-is-sliding");
            }),
            (c.prototype.endPanning = function () {
                var t,
                    e,
                    n,
                    s = this;
                s.contentLastPos &&
                    (s.opts.momentum === !1 ? ((t = s.contentLastPos.left), (e = s.contentLastPos.top)) : ((t = s.contentLastPos.left + s.velocityX * s.speed), (e = s.contentLastPos.top + s.velocityY * s.speed)),
                    (n = s.limitPosition(t, e, s.contentStartPos.width, s.contentStartPos.height)),
                    (n.width = s.contentStartPos.width),
                    (n.height = s.contentStartPos.height),
                    i.fancybox.animate(s.$content, n, 330));
            }),
            (c.prototype.endZooming = function () {
                var t,
                    e,
                    n,
                    s,
                    o = this,
                    a = o.instance.current,
                    r = o.newWidth,
                    l = o.newHeight;
                o.contentLastPos &&
                    ((t = o.contentLastPos.left),
                    (e = o.contentLastPos.top),
                    (s = { top: e, left: t, width: r, height: l, scaleX: 1, scaleY: 1 }),
                    i.fancybox.setTranslate(o.$content, s),
                    r < o.canvasWidth && l < o.canvasHeight
                        ? o.instance.scaleToFit(150)
                        : r > a.width || l > a.height
                        ? o.instance.scaleToActual(o.centerPointStartX, o.centerPointStartY, 150)
                        : ((n = o.limitPosition(t, e, r, l)), i.fancybox.setTranslate(o.content, i.fancybox.getTranslate(o.$content)), i.fancybox.animate(o.$content, n, 150)));
            }),
            (c.prototype.onTap = function (t) {
                var e,
                    n = this,
                    s = i(t.target),
                    a = n.instance,
                    r = a.current,
                    l = (t && o(t)) || n.startPoints,
                    h = l[0] ? l[0].x - n.$stage.offset().left : 0,
                    c = l[0] ? l[0].y - n.$stage.offset().top : 0,
                    u = function (e) {
                        var s = r.opts[e];
                        if ((i.isFunction(s) && (s = s.apply(a, [r, t])), s))
                            switch (s) {
                                case "close":
                                    a.close(n.startEvent);
                                    break;
                                case "toggleControls":
                                    a.toggleControls(!0);
                                    break;
                                case "next":
                                    a.next();
                                    break;
                                case "nextOrClose":
                                    a.group.length > 1 ? a.next() : a.close(n.startEvent);
                                    break;
                                case "zoom":
                                    "image" == r.type && (r.isLoaded || r.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(h, c) : a.group.length < 2 && a.close(n.startEvent));
                            }
                    };
                if (!((t.originalEvent && 2 == t.originalEvent.button) || a.isSliding || h > s[0].clientWidth + s.offset().left)) {
                    if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside";
                    else if (s.is(".fancybox-slide")) e = "Slide";
                    else {
                        if (!a.current.$content || !a.current.$content.has(t.target).length) return;
                        e = "Content";
                    }
                    if (n.tapped) {
                        if ((clearTimeout(n.tapped), (n.tapped = null), Math.abs(h - n.tapX) > 50 || Math.abs(c - n.tapY) > 50 || a.isSliding)) return this;
                        u("dblclick" + e);
                    } else
                        (n.tapX = h),
                            (n.tapY = c),
                            r.opts["dblclick" + e] && r.opts["dblclick" + e] !== r.opts["click" + e]
                                ? (n.tapped = setTimeout(function () {
                                      (n.tapped = null), u("click" + e);
                                  }, 300))
                                : u("click" + e);
                    return this;
                }
            }),
            i(e).on("onActivate.fb", function (t, e) {
                e && !e.Guestures && (e.Guestures = new c(e));
            }),
            i(e).on("beforeClose.fb", function (t, e) {
                e && e.Guestures && e.Guestures.destroy();
            });
    })(window, document, window.jQuery || jQuery),
    (function (t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>',
            },
            slideShow: { autoStart: !1, speed: 3e3 },
        });
        var i = function (t) {
            (this.instance = t), this.init();
        };
        e.extend(i.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function () {
                var t = this;
                (t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                    t.toggle();
                })),
                    (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide();
            },
            set: function (t) {
                var e = this;
                e.instance && e.instance.current && (t === !0 || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1)
                    ? (e.timer = setTimeout(function () {
                          e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length);
                      }, e.instance.current.opts.slideShow.speed))
                    : (e.stop(), (e.instance.idleSecondsCounter = 0), e.instance.showControls());
            },
            clear: function () {
                var t = this;
                clearTimeout(t.timer), (t.timer = null);
            },
            start: function () {
                var t = this,
                    e = t.instance.current;
                e && ((t.isActive = !0), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.set(!0));
            },
            stop: function () {
                var t = this,
                    e = t.instance.current;
                t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), (t.isActive = !1);
            },
            toggle: function () {
                var t = this;
                t.isActive ? t.stop() : t.start();
            },
        }),
            e(t).on({
                "onInit.fb": function (t, e) {
                    e && !e.SlideShow && (e.SlideShow = new i(e));
                },
                "beforeShow.fb": function (t, e, i, n) {
                    var s = e && e.SlideShow;
                    n ? s && i.opts.slideShow.autoStart && s.start() : s && s.isActive && s.clear();
                },
                "afterShow.fb": function (t, e, i) {
                    var n = e && e.SlideShow;
                    n && n.isActive && n.set();
                },
                "afterKeydown.fb": function (i, n, s, o, a) {
                    var r = n && n.SlideShow;
                    !r || !s.opts.slideShow || (80 !== a && 32 !== a) || e(t.activeElement).is("button,a,input") || (o.preventDefault(), r.toggle());
                },
                "beforeClose.fb onDeactivate.fb": function (t, e) {
                    var i = e && e.SlideShow;
                    i && i.stop();
                },
            }),
            e(t).on("visibilitychange", function () {
                var i = e.fancybox.getInstance(),
                    n = i && i.SlideShow;
                n && n.isActive && (t.hidden ? n.clear() : n.set());
            });
    })(document, window.jQuery || jQuery),
    (function (t, e) {
        "use strict";
        var i = (function () {
            var e,
                i,
                n,
                s = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"],
                ],
                o = {};
            for (i = 0; i < s.length; i++)
                if (((e = s[i]), e && e[1] in t)) {
                    for (n = 0; n < e.length; n++) o[s[0][n]] = e[n];
                    return o;
                }
            return !1;
        })();
        if (!i) return void (e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1));
        var n = {
            request: function (e) {
                (e = e || t.documentElement), e[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
            },
            exit: function () {
                t[i.exitFullscreen]();
            },
            toggle: function (e) {
                (e = e || t.documentElement), this.isFullscreen() ? this.exit() : this.request(e);
            },
            isFullscreen: function () {
                return Boolean(t[i.fullscreenElement]);
            },
            enabled: function () {
                return Boolean(t[i.fullscreenEnabled]);
            },
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: { fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>' },
            fullScreen: { autoStart: !1 },
        }),
            e(t).on({
                "onInit.fb": function (t, e) {
                    var i;
                    e && e.group[e.currIndex].opts.fullScreen
                        ? ((i = e.$refs.container),
                          i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                              t.stopPropagation(), t.preventDefault(), n.toggle(i[0]);
                          }),
                          e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && n.request(i[0]),
                          (e.FullScreen = n))
                        : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
                },
                "afterKeydown.fb": function (t, e, i, n, s) {
                    e && e.FullScreen && 70 === s && (n.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]));
                },
                "beforeClose.fb": function (t) {
                    t && t.FullScreen && n.exit();
                },
            }),
            e(t).on(i.fullscreenchange, function () {
                var t = n.isFullscreen(),
                    i = e.fancybox.getInstance();
                i &&
                    (i.current && "image" === i.current.type && i.isAnimating && (i.current.$content.css("transition", "none"), (i.isAnimating = !1), i.update(!0, !0, 0)),
                    i.trigger("onFullscreenChange", t),
                    i.$refs.container.toggleClass("fancybox-is-fullscreen", t));
            });
    })(document, window.jQuery || jQuery),
    (function (t, e) {
        "use strict";
        e.fancybox.defaults = e.extend(
            !0,
            {
                btnTpl: {
                    thumbs:
                        '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>',
                },
                thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
            },
            e.fancybox.defaults
        );
        var i = function (t) {
            this.init(t);
        };
        e.extend(i.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function (t) {
                var e = this;
                (e.instance = t), (t.Thumbs = e);
                var i = t.group[0],
                    n = t.group[1];
                (e.opts = t.group[t.currIndex].opts.thumbs),
                    (e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]")),
                    e.opts && i && n && ("image" == i.type || i.opts.thumb || i.opts.$thumb) && ("image" == n.type || n.opts.thumb || n.opts.$thumb)
                        ? (e.$button.show().on("click", function () {
                              e.toggle();
                          }),
                          (e.isActive = !0))
                        : e.$button.hide();
            },
            create: function () {
                var t,
                    i,
                    n = this,
                    s = n.instance,
                    o = n.opts.parentEl;
                (n.$grid = e('<div class="fancybox-thumbs fancybox-thumbs-' + n.opts.axis + '"></div>').appendTo(s.$refs.container.find(o).addBack().filter(o))),
                    (t = "<ul>"),
                    e.each(s.group, function (e, n) {
                        (i = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null)),
                            i || "image" !== n.type || (i = n.src),
                            i && i.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + i + '" /></li>');
                    }),
                    (t += "</ul>"),
                    (n.$list = e(t)
                        .appendTo(n.$grid)
                        .on("click", "li", function () {
                            s.jumpTo(e(this).data("index"));
                        })),
                    n.$list
                        .find("img")
                        .hide()
                        .one("load", function () {
                            var t,
                                i,
                                n,
                                s,
                                o = e(this).parent().removeClass("fancybox-thumbs-loading"),
                                a = o.outerWidth(),
                                r = o.outerHeight();
                            (t = this.naturalWidth || this.width),
                                (i = this.naturalHeight || this.height),
                                (n = t / a),
                                (s = i / r),
                                n >= 1 && s >= 1 && (n > s ? ((t /= s), (i = r)) : ((t = a), (i /= n))),
                                e(this)
                                    .css({ width: Math.floor(t), height: Math.floor(i), "margin-top": i > r ? Math.floor(0.3 * r - 0.3 * i) : Math.floor(0.5 * r - 0.5 * i), "margin-left": Math.floor(0.5 * a - 0.5 * t) })
                                    .show();
                        })
                        .each(function () {
                            this.src = e(this).data("src");
                        }),
                    "x" === n.opts.axis && n.$list.width(parseInt(n.$grid.css("padding-right")) + s.group.length * n.$list.children().eq(0).outerWidth(!0) + "px");
            },
            focus: function (t) {
                var e,
                    i,
                    n = this,
                    s = n.$list;
                n.instance.current &&
                    ((e = s
                        .children()
                        .removeClass("fancybox-thumbs-active")
                        .filter('[data-index="' + n.instance.current.index + '"]')
                        .addClass("fancybox-thumbs-active")),
                    (i = e.position()),
                    "y" === n.opts.axis && (i.top < 0 || i.top > s.height() - e.outerHeight())
                        ? s.stop().animate({ scrollTop: s.scrollTop() + i.top }, t)
                        : "x" === n.opts.axis && (i.left < s.parent().scrollLeft() || i.left > s.parent().scrollLeft() + (s.parent().width() - e.outerWidth())) && s.parent().stop().animate({ scrollLeft: i.left }, t));
            },
            update: function () {
                this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
                    this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"),
                    this.instance.update();
            },
            hide: function () {
                (this.isVisible = !1), this.update();
            },
            show: function () {
                (this.isVisible = !0), this.update();
            },
            toggle: function () {
                (this.isVisible = !this.isVisible), this.update();
            },
        }),
            e(t).on({
                "onInit.fb": function (t, e) {
                    var n;
                    e && !e.Thumbs && ((n = new i(e)), n.isActive && n.opts.autoStart === !0 && n.show());
                },
                "beforeShow.fb": function (t, e, i, n) {
                    var s = e && e.Thumbs;
                    s && s.isVisible && s.focus(n ? 0 : 250);
                },
                "afterKeydown.fb": function (t, e, i, n, s) {
                    var o = e && e.Thumbs;
                    o && o.isActive && 71 === s && (n.preventDefault(), o.toggle());
                },
                "beforeClose.fb": function (t, e) {
                    var i = e && e.Thumbs;
                    i && i.isVisible && i.opts.hideOnClose !== !1 && i.$grid.hide();
                },
            });
    })(document, window.jQuery),
    (function (t, e) {
        "use strict";
        function i(t) {
            var e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" };
            return String(t).replace(/[&<>"'`=\/]/g, function (t) {
                return e[t];
            });
        }
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                share:
                    '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>',
            },
            share: {
                tpl:
                    '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a href="https://www.facebook.com/sharer/sharer.php?u={{src}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#3b5998"><path d="M27.6 3h-23.2c-.8 0-1.4.6-1.4 1.4v23.1c0 .9.6 1.5 1.4 1.5h12.5v-10.1h-3.4v-3.9h3.4v-2.9c0-3.4 2.1-5.2 5-5.2 1.4 0 2.7.1 3 .2v3.5h-2.1c-1.6 0-1.9.8-1.9 1.9v2.5h3.9l-.5 3.9h-3.4v10.1h6.6c.8 0 1.4-.6 1.4-1.4v-23.2c.1-.8-.5-1.4-1.3-1.4z"></path></svg><span>Facebook</span></a><a href="https://www.pinterest.com/pin/create/button/?url={{src}}&amp;description={{descr}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#c92228"><path d="M16 3c-7.2 0-13 5.8-13 13 0 5.5 3.4 10.2 8.3 12.1-.1-1-.2-2.6 0-3.7.2-1 1.5-6.5 1.5-6.5s-.4-.8-.4-1.9c0-1.8 1-3.2 2.4-3.2 1.1 0 1.6.8 1.6 1.8 0 1.1-.7 2.8-1.1 4.3-.3 1.3.6 2.3 1.9 2.3 2.3 0 4.1-2.4 4.1-6 0-3.1-2.2-5.3-5.4-5.3-3.7 0-5.9 2.8-5.9 5.6 0 1.1.4 2.3 1 3 .1.1.1.2.1.4-.1.4-.3 1.3-.4 1.5-.1.2-.2.3-.4.2-1.6-.8-2.6-3.1-2.6-5 0-4.1 3-7.9 8.6-7.9 4.5 0 8 3.2 8 7.5 0 4.5-2.8 8.1-6.7 8.1-1.3 0-2.6-.7-3-1.5 0 0-.7 2.5-.8 3.1-.3 1.1-1.1 2.5-1.6 3.4 1.2.4 2.5.6 3.8.6 7.2 0 13-5.8 13-13 0-7.1-5.8-12.9-13-12.9z"></path></svg><span>Pinterest</span></a><a href="https://twitter.com/intent/tweet?url={{src}}&amp;text={{descr}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#1da1f2"><path d="M30 7.3c-1 .5-2.1.8-3.3.9 1.2-.7 2.1-1.8 2.5-3.2-1.1.7-2.3 1.1-3.6 1.4-1-1.1-2.5-1.8-4.2-1.8-3.2 0-5.7 2.6-5.7 5.7 0 .5.1.9.1 1.3-4.8-.2-9-2.5-11.8-6-.5.9-.8 1.9-.8 3 0 2 1 3.8 2.6 4.8-.9 0-1.8-.3-2.6-.7v.1c0 2.8 2 5.1 4.6 5.6-.5.1-1 .2-1.5.2-.4 0-.7 0-1.1-.1.7 2.3 2.9 3.9 5.4 4-2 1.5-4.4 2.5-7.1 2.5-.5 0-.9 0-1.4-.1 2.5 1.6 5.6 2.6 8.8 2.6 10.6 0 16.3-8.8 16.3-16.3v-.7c1.1-1 2-2 2.8-3.2z"></path></svg><span>Twitter</span></a></p><p><input type="text" value="{{src_raw}}" onfocus="this.select()" /></p></div>',
            },
        }),
            e(t).on("click", "[data-fancybox-share]", function () {
                var t,
                    n,
                    s = e.fancybox.getInstance();
                s &&
                    ((t = s.current.opts.hash === !1 ? s.current.src : window.location),
                    (n = s.current.opts.share.tpl
                        .replace(/\{\{src\}\}/g, encodeURIComponent(t))
                        .replace(/\{\{src_raw\}\}/g, i(t))
                        .replace(/\{\{descr\}\}/g, s.$caption ? encodeURIComponent(s.$caption.text()) : "")),
                    e.fancybox.open({ src: s.translate(s, n), type: "html", opts: { animationEffect: "fade", animationDuration: 250 } }));
            });
    })(document, window.jQuery || jQuery),
    (function (t, e, i) {
        "use strict";
        function n() {
            var t = e.location.hash.substr(1),
                i = t.split("-"),
                n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) ? parseInt(i.pop(-1), 10) || 1 : 1,
                s = i.join("-");
            return n < 1 && (n = 1), { hash: t, index: n, gallery: s };
        }
        function s(t) {
            var e;
            "" !== t.gallery && ((e = i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1)), e.length || (e = i("#" + i.escapeSelector(t.gallery))), e.length && ((a = !1), e.trigger("click")));
        }
        function o(t) {
            var e;
            return !!t && ((e = t.current ? t.current.opts : t.opts), e.hash || (e.$orig ? e.$orig.data("fancybox") : ""));
        }
        i.escapeSelector ||
            (i.escapeSelector = function (t) {
                var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                    i = function (t, e) {
                        return e ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
                    };
                return (t + "").replace(e, i);
            });
        var a = !0,
            r = null,
            l = null;
        i(function () {
            i.fancybox.defaults.hash !== !1 &&
                (i(t).on({
                    "onInit.fb": function (t, e) {
                        var i, s;
                        e.group[e.currIndex].opts.hash !== !1 && ((i = n()), (s = o(e)), s && i.gallery && s == i.gallery && (e.currIndex = i.index - 1));
                    },
                    "beforeShow.fb": function (i, n, s) {
                        var h;
                        s &&
                            s.opts.hash !== !1 &&
                            ((h = o(n)),
                            h &&
                                "" !== h &&
                                (e.location.hash.indexOf(h) < 0 && (n.opts.origHash = e.location.hash),
                                (r = h + (n.group.length > 1 ? "-" + (s.index + 1) : "")),
                                "replaceState" in e.history
                                    ? (l && clearTimeout(l),
                                      (l = setTimeout(function () {
                                          e.history[a ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + r), (l = null), (a = !1);
                                      }, 300)))
                                    : (e.location.hash = r)));
                    },
                    "beforeClose.fb": function (n, s, a) {
                        var h, c;
                        l && clearTimeout(l),
                            a.opts.hash !== !1 &&
                                ((h = o(s)),
                                (c = s && s.opts.origHash ? s.opts.origHash : ""),
                                h && "" !== h && ("replaceState" in history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + c) : ((e.location.hash = c), i(e).scrollTop(s.scrollTop).scrollLeft(s.scrollLeft))),
                                (r = null));
                    },
                }),
                i(e).on("hashchange.fb", function () {
                    var t = n();
                    i.fancybox.getInstance() ? !r || r === t.gallery + "-" + t.index || (1 === t.index && r == t.gallery) || ((r = null), i.fancybox.close()) : "" !== t.gallery && s(t);
                }),
                setTimeout(function () {
                    s(n());
                }, 50));
        });
    })(document, window, window.jQuery || jQuery);
