!function(e, n) { "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.jsonview = n() : e.jsonview = n() }(self, (() => (() => { "use strict"; var e = { 425: (e, n, t) => { t.d(n, { Z: () => s }); var r = t(650), o = t.n(r), i = t(196), a = t.n(i)()(o()); a.push([e.id, '.json-container{font-family:"Open Sans";font-size:16px;background-color:#fff;color:gray;box-sizing:border-box}.json-container .line{margin:4px 0;display:flex;justify-content:flex-start}.json-container .caret-icon{width:18px;text-align:center;cursor:pointer}.json-container .empty-icon{width:18px}.json-container .json-type{margin-right:4px;margin-left:4px}.json-container .json-key{color:#444;margin-right:4px;margin-left:4px}.json-container .json-index{margin-right:4px;margin-left:4px}.json-container .json-value{margin-left:8px}.json-container .json-number{color:#f9ae58}.json-container .json-boolean{color:#ec5f66}.json-container .json-string{color:#86b25c}.json-container .json-size{margin-right:4px;margin-left:4px}.json-container .hidden{display:none}.json-container .fas{display:inline-block;border-style:solid;width:0;height:0}.json-container .fa-caret-down{border-width:6px 5px 0 5px;border-color:gray rgba(0,0,0,0)}.json-container .fa-caret-right{border-width:5px 0 5px 6px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) gray}', ""]); const s = a }, 196: e => { e.exports = function(e) { var n = []; return n.toString = function() { return this.map((function(n) { var t = "", r = void 0 !== n[5]; return n[4] && (t += "@supports (".concat(n[4], ") {")), n[2] && (t += "@media ".concat(n[2], " {")), r && (t += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")), t += e(n), r && (t += "}"), n[2] && (t += "}"), n[4] && (t += "}"), t })).join("") }, n.i = function(e, t, r, o, i) { "string" == typeof e && (e = [[null, e, void 0]]); var a = {}; if (r) for (var s = 0; s < this.length; s++) { var c = this[s][0]; null != c && (a[c] = !0) } for (var l = 0; l < e.length; l++) { var d = [].concat(e[l]); r && a[d[0]] || (void 0 !== i && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = i), t && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = t) : d[2] = t), o && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = o) : d[4] = "".concat(o)), n.push(d)) } }, n } }, 650: e => { e.exports = function(e) { return e[1] } }, 62: e => { var n = []; function t(e) { for (var t = -1, r = 0; r < n.length; r++)if (n[r].identifier === e) { t = r; break } return t } function r(e, r) { for (var i = {}, a = [], s = 0; s < e.length; s++) { var c = e[s], l = r.base ? c[0] + r.base : c[0], d = i[l] || 0, u = "".concat(l, " ").concat(d); i[l] = d + 1; var p = t(u), f = { css: c[1], media: c[2], sourceMap: c[3], supports: c[4], layer: c[5] }; if (-1 !== p) n[p].references++, n[p].updater(f); else { var v = o(f, r); r.byIndex = s, n.splice(s, 0, { identifier: u, updater: v, references: 1 }) } a.push(u) } return a } function o(e, n) { var t = n.domAPI(n); return t.update(e), function(n) { if (n) { if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) return; t.update(e = n) } else t.remove() } } e.exports = function(e, o) { var i = r(e = e || [], o = o || {}); return function(e) { e = e || []; for (var a = 0; a < i.length; a++) { var s = t(i[a]); n[s].references-- } for (var c = r(e, o), l = 0; l < i.length; l++) { var d = t(i[l]); 0 === n[d].references && (n[d].updater(), n.splice(d, 1)) } i = c } } }, 566: e => { var n = {}; e.exports = function(e, t) { var r = function(e) { if (void 0 === n[e]) { var t = document.querySelector(e); if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try { t = t.contentDocument.head } catch (e) { t = null } n[e] = t } return n[e] }(e); if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."); r.appendChild(t) } }, 911: e => { e.exports = function(e) { var n = document.createElement("style"); return e.setAttributes(n, e.attributes), e.insert(n, e.options), n } }, 107: (e, n, t) => { e.exports = function(e) { var n = t.nc; n && e.setAttribute("nonce", n) } }, 552: e => { e.exports = function(e) { if ("undefined" == typeof document) return { update: function() { }, remove: function() { } }; var n = e.insertStyleElement(e); return { update: function(t) { !function(e, n, t) { var r = ""; t.supports && (r += "@supports (".concat(t.supports, ") {")), t.media && (r += "@media ".concat(t.media, " {")); var o = void 0 !== t.layer; o && (r += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), r += t.css, o && (r += "}"), t.media && (r += "}"), t.supports && (r += "}"); var i = t.sourceMap; i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), n.styleTagTransform(r, e, n.options) }(n, e, t) }, remove: function() { !function(e) { if (null === e.parentNode) return !1; e.parentNode.removeChild(e) }(n) } } } }, 227: e => { e.exports = function(e, n) { if (n.styleSheet) n.styleSheet.cssText = e; else { for (; n.firstChild;)n.removeChild(n.firstChild); n.appendChild(document.createTextNode(e)) } } } }, n = {}; function t(r) { var o = n[r]; if (void 0 !== o) return o.exports; var i = n[r] = { id: r, exports: {} }; return e[r](i, i.exports, t), i.exports } t.n = e => { var n = e && e.__esModule ? () => e.default : () => e; return t.d(n, { a: n }), n }, t.d = (e, n) => { for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] }) }, t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), t.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, t.nc = void 0; var r = {}; return (() => { t.r(r), t.d(r, { collapse: () => A, create: () => S, default: () => H, destroy: () => L, expand: () => D, render: () => w, renderJSON: () => k, toggleNode: () => N, traverse: () => C }); var e = t(62), n = t.n(e), o = t(552), i = t.n(o), a = t(566), s = t.n(a), c = t(107), l = t.n(c), d = t(911), u = t.n(d), p = t(227), f = t.n(p), v = t(425), y = {}; function h(e) { return Array.isArray(e) ? "array" : null === e ? "null" : typeof e } function m(e) { return document.createElement(e) } y.styleTagTransform = f(), y.setAttributes = l(), y.insert = s().bind(null, "head"), y.domAPI = i(), y.insertStyleElement = u(), n()(v.Z, y), v.Z && v.Z.locals && v.Z.locals; const g = { HIDDEN: "hidden", CARET_ICON: "caret-icon", CARET_RIGHT: "fa-caret-right", CARET_DOWN: "fa-caret-down", ICON: "fas" }; function x(e) { e.children.forEach((e => { e.el.classList.add(g.HIDDEN), e.isExpanded && x(e) })) } function j(e) { e.children.forEach((e => { e.el.classList.remove(g.HIDDEN), e.isExpanded && j(e) })) } function b(e) { if (e.children.length > 0) { const n = e.el.querySelector("." + g.ICON); n && n.classList.replace(g.CARET_RIGHT, g.CARET_DOWN) } } function E(e) { if (e.children.length > 0) { const n = e.el.querySelector("." + g.ICON); n && n.classList.replace(g.CARET_DOWN, g.CARET_RIGHT) } } function N(e) { e.isExpanded ? (e.isExpanded = !1, E(e), x(e)) : (e.isExpanded = !0, b(e), j(e)) } function C(e, n) { n(e), e.children.length > 0 && e.children.forEach((e => { C(e, n) })) } function T(e = {}) { let n = e.hasOwnProperty("value") ? e.value : null; return (e => "object" === h(e) && 0 === Object.keys(e).length)(n) && (n = "{}"), { key: e.key || null, parent: e.parent || null, value: n, isExpanded: e.isExpanded || !1, type: e.type || null, children: e.children || [], el: e.el || null, depth: e.depth || 0, dispose: null } } function I(e, n) { if ("object" == typeof e) for (let t in e) { const r = T({ value: e[t], key: t, depth: n.depth + 1, type: h(e[t]), parent: n }); n.children.push(r), I(e[t], r) } } function O(e) { return "string" == typeof e ? JSON.parse(e) : e } function S(e) { const n = O(e), t = T({ value: n, key: h(n), type: h(n) }); return I(n, t), t } function k(e, n) { const t = S(O(e)); return w(t, n), t } function w(e, n) { const t = function() { const e = m("div"); return e.className = "json-container", e }(); C(e, (function(e) { e.el = function(e) { let n = m("div"); const t = e => { const n = e.children.length; return "array" === e.type ? `[${n}]` : "object" === e.type ? `{${n}}` : null }; if (e.children.length > 0) { n.innerHTML = function(e = {}) { const { key: n, size: t } = e; return `\n    <div class="line">\n      <div class="caret-icon"><i class="fas fa-caret-right"></i></div>\n      <div class="json-key">${n}</div>\n      <div class="json-size">${t}</div>\n    </div>\n  ` }({ key: e.key, size: t(e) }); const r = n.querySelector("." + g.CARET_ICON); e.dispose = function(e, n, t) { return e.addEventListener(n, t), () => e.removeEventListener(n, t) }(r, "click", (() => N(e))) } else n.innerHTML = function(e = {}) { const { key: n, value: t, type: r } = e; return `\n    <div class="line">\n      <div class="empty-icon"></div>\n      <div class="json-key">${n}</div>\n      <div class="json-separator">:</div>\n      <div class="json-value json-${r}">${t}</div>\n    </div>\n  ` }({ key: e.key, value: e.value, type: "{}" === e.value ? "object" : typeof e.value }); const r = n.children[0]; return null !== e.parent && r.classList.add(g.HIDDEN), r.style = "margin-left: " + 18 * e.depth + "px;", r }(e), t.appendChild(e.el) })), n.appendChild(t) } function D(e) { C(e, (function(e) { e.el.classList.remove(g.HIDDEN), e.isExpanded = !0, b(e) })) } function A(e) { C(e, (function(n) { n.isExpanded = !1, n.depth > e.depth && n.el.classList.add(g.HIDDEN), E(n) })) } function L(e) { var n; C(e, (e => { e.dispose && e.dispose() })), (n = e.el.parentNode).parentNode.removeChild(n) } const H = { toggleNode: N, render: w, create: S, renderJSON: k, expand: D, collapse: A, traverse: C, destroy: L } })(), r })()));
