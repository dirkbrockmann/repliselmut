(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-red-300:oklch(80.8% .114 19.571);--tw-color-green-300:oklch(87.1% .15 154.449);--tw-color-blue-300:oklch(80.9% .105 251.813);--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._cell_1xgp5_1{stroke:#000;stroke-width:.5px}._plot_1xgp5_6>._xaxis_1xgp5_6,._plot_1xgp5_6>._xlabel_1xgp5_6{font-size:20px}._bigcircle_1xgp5_15{opacity:.25;stroke:#000;stroke-width:.5px}._smallcircle_1xgp5_21{opacity:1;stroke:#000;stroke-width:1px}._mf_1xgp5_27{fill:red}._plot_1xgp5_6>._xlabel_1xgp5_6{text-anchor:middle}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Aa = {
  display_type: "svg",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-1 tw:sm:p-0 tw:m-8"
};
function fn(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function $a(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function ti(t) {
  let n, e, r;
  t.length !== 2 ? (n = fn, e = (s, l) => fn(t(s), l), r = (s, l) => t(s) - l) : (n = t === fn || t === $a ? t : Ta, e = t, r = t);
  function i(s, l, u = 0, f = s.length) {
    if (u < f) {
      if (n(l, l) !== 0) return f;
      do {
        const h = u + f >>> 1;
        e(s[h], l) < 0 ? u = h + 1 : f = h;
      } while (u < f);
    }
    return u;
  }
  function a(s, l, u = 0, f = s.length) {
    if (u < f) {
      if (n(l, l) !== 0) return f;
      do {
        const h = u + f >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : f = h;
      } while (u < f);
    }
    return u;
  }
  function o(s, l, u = 0, f = s.length) {
    const h = i(s, l, u, f - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function Ta() {
  return 0;
}
function Sa(t) {
  return t === null ? NaN : +t;
}
const Na = ti(fn), Pa = Na.right;
ti(Sa).center;
class Ke extends Map {
  constructor(n, e = za) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null) for (const [r, i] of n) this.set(r, i);
  }
  get(n) {
    return super.get(We(this, n));
  }
  has(n) {
    return super.has(We(this, n));
  }
  set(n, e) {
    return super.set(Ea(this, n), e);
  }
  delete(n) {
    return super.delete(ka(this, n));
  }
}
function We({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function Ea({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function ka({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function za(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const Oa = Math.sqrt(50), Ia = Math.sqrt(10), Ca = Math.sqrt(2);
function gn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Oa ? 10 : a >= Ia ? 5 : a >= Ca ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? gn(t, n, e * 2) : [s, l, u];
}
function Ra(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? gn(n, t, e) : gn(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function ne(t, n, e) {
  return n = +n, t = +t, e = +e, gn(t, n, e)[2];
}
function Fa(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? ne(n, t, e) : ne(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function nn(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function Da(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
function La(t) {
  return t;
}
var Yn = 1, Vn = 2, ee = 3, It = 4, Ze = 1e-6;
function qa(t) {
  return "translate(" + t + ",0)";
}
function Ha(t) {
  return "translate(0," + t + ")";
}
function Ba(t) {
  return (n) => +t(n);
}
function Xa(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function Ga() {
  return !this.__axis;
}
function ni(t, n) {
  var e = [], r = null, i = null, a = 6, o = 6, s = 3, l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = t === Yn || t === It ? -1 : 1, f = t === It || t === Vn ? "x" : "y", h = t === Yn || t === ee ? qa : Ha;
  function c(p) {
    var d = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), y = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : La), m = Math.max(a, 0) + s, g = n.range(), w = +g[0] + l, M = +g[g.length - 1] + l, _ = (n.bandwidth ? Xa : Ba)(n.copy(), l), v = p.selection ? p.selection() : p, $ = v.selectAll(".domain").data([null]), A = v.selectAll(".tick").data(d, n).order(), T = A.exit(), O = A.enter().append("g").attr("class", "tick"), N = A.select("line"), x = A.select("text");
    $ = $.merge($.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(O), N = N.merge(O.append("line").attr("stroke", "currentColor").attr(f + "2", u * a)), x = x.merge(O.append("text").attr("fill", "currentColor").attr(f, u * m).attr("dy", t === Yn ? "0em" : t === ee ? "0.71em" : "0.32em")), p !== v && ($ = $.transition(p), A = A.transition(p), N = N.transition(p), x = x.transition(p), T = T.transition(p).attr("opacity", Ze).attr("transform", function(P) {
      return isFinite(P = _(P)) ? h(P + l) : this.getAttribute("transform");
    }), O.attr("opacity", Ze).attr("transform", function(P) {
      var S = this.parentNode.__axis;
      return h((S && isFinite(S = S(P)) ? S : _(P)) + l);
    })), T.remove(), $.attr("d", t === It || t === Vn ? o ? "M" + u * o + "," + w + "H" + l + "V" + M + "H" + u * o : "M" + l + "," + w + "V" + M : o ? "M" + w + "," + u * o + "V" + l + "H" + M + "V" + u * o : "M" + w + "," + l + "H" + M), A.attr("opacity", 1).attr("transform", function(P) {
      return h(_(P) + l);
    }), N.attr(f + "2", u * a), x.attr(f, u * m).text(y), v.filter(Ga).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Vn ? "start" : t === It ? "end" : "middle"), v.each(function() {
      this.__axis = _;
    });
  }
  return c.scale = function(p) {
    return arguments.length ? (n = p, c) : n;
  }, c.ticks = function() {
    return e = Array.from(arguments), c;
  }, c.tickArguments = function(p) {
    return arguments.length ? (e = p == null ? [] : Array.from(p), c) : e.slice();
  }, c.tickValues = function(p) {
    return arguments.length ? (r = p == null ? null : Array.from(p), c) : r && r.slice();
  }, c.tickFormat = function(p) {
    return arguments.length ? (i = p, c) : i;
  }, c.tickSize = function(p) {
    return arguments.length ? (a = o = +p, c) : a;
  }, c.tickSizeInner = function(p) {
    return arguments.length ? (a = +p, c) : a;
  }, c.tickSizeOuter = function(p) {
    return arguments.length ? (o = +p, c) : o;
  }, c.tickPadding = function(p) {
    return arguments.length ? (s = +p, c) : s;
  }, c.offset = function(p) {
    return arguments.length ? (l = +p, c) : l;
  }, c;
}
function Ua(t) {
  return ni(ee, t);
}
function Ya(t) {
  return ni(It, t);
}
var Va = { value: () => {
} };
function Pn() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new cn(e);
}
function cn(t) {
  this._ = t;
}
function Ka(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
cn.prototype = Pn.prototype = {
  constructor: cn,
  on: function(t, n) {
    var e = this._, r = Ka(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = Wa(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = Je(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Je(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new cn(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, a; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e);
  }
};
function Wa(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Je(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Va, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var re = "http://www.w3.org/1999/xhtml";
const je = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: re,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function En(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), je.hasOwnProperty(n) ? { space: je[n], local: t } : t;
}
function Za(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === re && n.documentElement.namespaceURI === re ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Ja(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ei(t) {
  var n = En(t);
  return (n.local ? Ja : Za)(n);
}
function ja() {
}
function $e(t) {
  return t == null ? ja : function() {
    return this.querySelector(t);
  };
}
function Qa(t) {
  typeof t != "function" && (t = $e(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, f = 0; f < o; ++f)
      (l = a[f]) && (u = t.call(l, l.__data__, f, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[f] = u);
  return new q(r, this._parents);
}
function to(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function no() {
  return [];
}
function ri(t) {
  return t == null ? no : function() {
    return this.querySelectorAll(t);
  };
}
function eo(t) {
  return function() {
    return to(t.apply(this, arguments));
  };
}
function ro(t) {
  typeof t == "function" ? t = eo(t) : t = ri(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new q(r, i);
}
function ii(t) {
  return function() {
    return this.matches(t);
  };
}
function ai(t) {
  return function(n) {
    return n.matches(t);
  };
}
var io = Array.prototype.find;
function ao(t) {
  return function() {
    return io.call(this.children, t);
  };
}
function oo() {
  return this.firstElementChild;
}
function so(t) {
  return this.select(t == null ? oo : ao(typeof t == "function" ? t : ai(t)));
}
var uo = Array.prototype.filter;
function lo() {
  return Array.from(this.children);
}
function fo(t) {
  return function() {
    return uo.call(this.children, t);
  };
}
function co(t) {
  return this.selectAll(t == null ? lo : fo(typeof t == "function" ? t : ai(t)));
}
function ho(t) {
  typeof t != "function" && (t = ii(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new q(r, this._parents);
}
function oi(t) {
  return new Array(t.length);
}
function po() {
  return new q(this._enter || this._groups.map(oi), this._parents);
}
function yn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
yn.prototype = {
  constructor: yn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function go(t) {
  return function() {
    return t;
  };
}
function yo(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new yn(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function _o(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), f = n.length, h = a.length, c = new Array(f), p;
  for (s = 0; s < f; ++s)
    (l = n[s]) && (c[s] = p = o.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : e[s] = new yn(t, a[s]);
  for (s = 0; s < f; ++s)
    (l = n[s]) && u.get(c[s]) === l && (i[s] = l);
}
function mo(t) {
  return t.__data__;
}
function vo(t, n) {
  if (!arguments.length) return Array.from(this, mo);
  var e = n ? _o : yo, r = this._parents, i = this._groups;
  typeof t != "function" && (t = go(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var f = r[u], h = i[u], c = h.length, p = wo(t.call(f, f && f.__data__, u, r)), d = p.length, y = s[u] = new Array(d), m = o[u] = new Array(d), g = l[u] = new Array(c);
    e(f, h, y, m, g, p, n);
    for (var w = 0, M = 0, _, v; w < d; ++w)
      if (_ = y[w]) {
        for (w >= M && (M = w + 1); !(v = m[M]) && ++M < d; ) ;
        _._next = v || null;
      }
  }
  return o = new q(o, r), o._enter = s, o._exit = l, o;
}
function wo(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function xo() {
  return new q(this._exit || this._groups.map(oi), this._parents);
}
function bo(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function Mo(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], f = r[l], h = u.length, c = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || f[d]) && (c[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new q(s, this._parents);
}
function Ao() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function $o(t) {
  t || (t = To);
  function n(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, l = i[a] = new Array(s), u, f = 0; f < s; ++f)
      (u = o[f]) && (l[f] = u);
    l.sort(n);
  }
  return new q(i, this._parents).order();
}
function To(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function So() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function No() {
  return Array.from(this);
}
function Po() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Eo() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function ko() {
  return !this.node();
}
function zo(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Oo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Io(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Co(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Ro(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Fo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Do(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Lo(t, n) {
  var e = En(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Io : Oo : typeof n == "function" ? e.local ? Do : Fo : e.local ? Ro : Co)(e, n));
}
function si(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function qo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ho(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Bo(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Xo(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? qo : typeof n == "function" ? Bo : Ho)(t, n, e ?? "")) : Tt(this.node(), t);
}
function Tt(t, n) {
  return t.style.getPropertyValue(n) || si(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Go(t) {
  return function() {
    delete this[t];
  };
}
function Uo(t, n) {
  return function() {
    this[t] = n;
  };
}
function Yo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Vo(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Go : typeof n == "function" ? Yo : Uo)(t, n)) : this.node()[t];
}
function ui(t) {
  return t.trim().split(/^|\s+/);
}
function Te(t) {
  return t.classList || new li(t);
}
function li(t) {
  this._node = t, this._names = ui(t.getAttribute("class") || "");
}
li.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function fi(t, n) {
  for (var e = Te(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function ci(t, n) {
  for (var e = Te(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Ko(t) {
  return function() {
    fi(this, t);
  };
}
function Wo(t) {
  return function() {
    ci(this, t);
  };
}
function Zo(t, n) {
  return function() {
    (n.apply(this, arguments) ? fi : ci)(this, t);
  };
}
function Jo(t, n) {
  var e = ui(t + "");
  if (arguments.length < 2) {
    for (var r = Te(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Zo : n ? Ko : Wo)(e, n));
}
function jo() {
  this.textContent = "";
}
function Qo(t) {
  return function() {
    this.textContent = t;
  };
}
function ts(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ns(t) {
  return arguments.length ? this.each(t == null ? jo : (typeof t == "function" ? ts : Qo)(t)) : this.node().textContent;
}
function es() {
  this.innerHTML = "";
}
function rs(t) {
  return function() {
    this.innerHTML = t;
  };
}
function is(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function as(t) {
  return arguments.length ? this.each(t == null ? es : (typeof t == "function" ? is : rs)(t)) : this.node().innerHTML;
}
function os() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ss() {
  return this.each(os);
}
function us() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ls() {
  return this.each(us);
}
function fs(t) {
  var n = typeof t == "function" ? t : ei(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function cs() {
  return null;
}
function hs(t, n) {
  var e = typeof t == "function" ? t : ei(t), r = n == null ? cs : typeof n == "function" ? n : $e(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ps() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function ds() {
  return this.each(ps);
}
function gs() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ys() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function _s(t) {
  return this.select(t ? ys : gs);
}
function ms(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function vs(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function ws(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function xs(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function bs(t, n, e) {
  return function() {
    var r = this.__on, i, a = vs(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Ms(t, n, e) {
  var r = ws(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, f; l < u; ++l)
        for (i = 0, f = s[l]; i < a; ++i)
          if ((o = r[i]).type === f.type && o.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = n ? bs : xs, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function hi(t, n, e) {
  var r = si(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function As(t, n) {
  return function() {
    return hi(this, t, n);
  };
}
function $s(t, n) {
  return function() {
    return hi(this, t, n.apply(this, arguments));
  };
}
function Ts(t, n) {
  return this.each((typeof n == "function" ? $s : As)(t, n));
}
function* Ss() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var pi = [null];
function q(t, n) {
  this._groups = t, this._parents = n;
}
function Kt() {
  return new q([[document.documentElement]], pi);
}
function Ns() {
  return this;
}
q.prototype = Kt.prototype = {
  constructor: q,
  select: Qa,
  selectAll: ro,
  selectChild: so,
  selectChildren: co,
  filter: ho,
  data: vo,
  enter: po,
  exit: xo,
  join: bo,
  merge: Mo,
  selection: Ns,
  order: Ao,
  sort: $o,
  call: So,
  nodes: No,
  node: Po,
  size: Eo,
  empty: ko,
  each: zo,
  attr: Lo,
  style: Xo,
  property: Vo,
  classed: Jo,
  text: ns,
  html: as,
  raise: ss,
  lower: ls,
  append: fs,
  insert: hs,
  remove: ds,
  clone: _s,
  datum: ms,
  on: Ms,
  dispatch: Ts,
  [Symbol.iterator]: Ss
};
function C(t) {
  return typeof t == "string" ? new q([[document.querySelector(t)]], [document.documentElement]) : new q([[t]], pi);
}
function Ps(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function ie(t, n) {
  if (t = Ps(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Es = { passive: !1 }, qt = { capture: !0, passive: !1 };
function Kn(t) {
  t.stopImmediatePropagation();
}
function At(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function ks(t) {
  var n = t.document.documentElement, e = C(t).on("dragstart.drag", At, qt);
  "onselectstart" in n ? e.on("selectstart.drag", At, qt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function zs(t, n) {
  var e = t.document.documentElement, r = C(t).on("dragstart.drag", null);
  n && (r.on("click.drag", At, qt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const en = (t) => () => t;
function ae(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: l,
  dy: u,
  dispatch: f
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: f }
  });
}
ae.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Os(t) {
  return !t.ctrlKey && !t.button;
}
function Is() {
  return this.parentNode;
}
function Cs(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Rs() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Fs() {
  var t = Os, n = Is, e = Cs, r = Rs, i = {}, a = Pn("start", "drag", "end"), o = 0, s, l, u, f, h = 0;
  function c(_) {
    _.on("mousedown.drag", p).filter(r).on("touchstart.drag", m).on("touchmove.drag", g, Es).on("touchend.drag touchcancel.drag", w).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(_, v) {
    if (!(f || !t.call(this, _, v))) {
      var $ = M(this, n.call(this, _, v), _, v, "mouse");
      $ && (C(_.view).on("mousemove.drag", d, qt).on("mouseup.drag", y, qt), ks(_.view), Kn(_), u = !1, s = _.clientX, l = _.clientY, $("start", _));
    }
  }
  function d(_) {
    if (At(_), !u) {
      var v = _.clientX - s, $ = _.clientY - l;
      u = v * v + $ * $ > h;
    }
    i.mouse("drag", _);
  }
  function y(_) {
    C(_.view).on("mousemove.drag mouseup.drag", null), zs(_.view, u), At(_), i.mouse("end", _);
  }
  function m(_, v) {
    if (t.call(this, _, v)) {
      var $ = _.changedTouches, A = n.call(this, _, v), T = $.length, O, N;
      for (O = 0; O < T; ++O)
        (N = M(this, A, _, v, $[O].identifier, $[O])) && (Kn(_), N("start", _, $[O]));
    }
  }
  function g(_) {
    var v = _.changedTouches, $ = v.length, A, T;
    for (A = 0; A < $; ++A)
      (T = i[v[A].identifier]) && (At(_), T("drag", _, v[A]));
  }
  function w(_) {
    var v = _.changedTouches, $ = v.length, A, T;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), A = 0; A < $; ++A)
      (T = i[v[A].identifier]) && (Kn(_), T("end", _, v[A]));
  }
  function M(_, v, $, A, T, O) {
    var N = a.copy(), x = ie(O || $, v), P, S, X;
    if ((X = e.call(_, new ae("beforestart", {
      sourceEvent: $,
      target: c,
      identifier: T,
      active: o,
      x: x[0],
      y: x[1],
      dx: 0,
      dy: 0,
      dispatch: N
    }), A)) != null)
      return P = X.x - x[0] || 0, S = X.y - x[1] || 0, function tn(ft, pt, Mt) {
        var B = x, Un;
        switch (ft) {
          case "start":
            i[T] = tn, Un = o++;
            break;
          case "end":
            delete i[T], --o;
          // falls through
          case "drag":
            x = ie(Mt || pt, v), Un = o;
            break;
        }
        N.call(
          ft,
          _,
          new ae(ft, {
            sourceEvent: pt,
            subject: X,
            target: c,
            identifier: T,
            active: Un,
            x: x[0] + P,
            y: x[1] + S,
            dx: x[0] - B[0],
            dy: x[1] - B[1],
            dispatch: N
          }),
          A
        );
      };
  }
  return c.filter = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : en(!!_), c) : t;
  }, c.container = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : en(_), c) : n;
  }, c.subject = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : en(_), c) : e;
  }, c.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : en(!!_), c) : r;
  }, c.on = function() {
    var _ = a.on.apply(a, arguments);
    return _ === a ? c : _;
  }, c.clickDistance = function(_) {
    return arguments.length ? (h = (_ = +_) * _, c) : Math.sqrt(h);
  }, c;
}
function Se(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function di(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Wt() {
}
var Ht = 0.7, _n = 1 / Ht, $t = "\\s*([+-]?\\d+)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", j = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ds = /^#([0-9a-f]{3,8})$/, Ls = new RegExp(`^rgb\\(${$t},${$t},${$t}\\)$`), qs = new RegExp(`^rgb\\(${j},${j},${j}\\)$`), Hs = new RegExp(`^rgba\\(${$t},${$t},${$t},${Bt}\\)$`), Bs = new RegExp(`^rgba\\(${j},${j},${j},${Bt}\\)$`), Xs = new RegExp(`^hsl\\(${Bt},${j},${j}\\)$`), Gs = new RegExp(`^hsla\\(${Bt},${j},${j},${Bt}\\)$`), Qe = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Se(Wt, _t, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: tr,
  // Deprecated! Use color.formatHex.
  formatHex: tr,
  formatHex8: Us,
  formatHsl: Ys,
  formatRgb: nr,
  toString: nr
});
function tr() {
  return this.rgb().formatHex();
}
function Us() {
  return this.rgb().formatHex8();
}
function Ys() {
  return gi(this).formatHsl();
}
function nr() {
  return this.rgb().formatRgb();
}
function _t(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Ds.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? er(n) : e === 3 ? new D(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? rn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? rn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Ls.exec(t)) ? new D(n[1], n[2], n[3], 1) : (n = qs.exec(t)) ? new D(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Hs.exec(t)) ? rn(n[1], n[2], n[3], n[4]) : (n = Bs.exec(t)) ? rn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Xs.exec(t)) ? ar(n[1], n[2] / 100, n[3] / 100, 1) : (n = Gs.exec(t)) ? ar(n[1], n[2] / 100, n[3] / 100, n[4]) : Qe.hasOwnProperty(t) ? er(Qe[t]) : t === "transparent" ? new D(NaN, NaN, NaN, 0) : null;
}
function er(t) {
  return new D(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function rn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new D(t, n, e, r);
}
function Vs(t) {
  return t instanceof Wt || (t = _t(t)), t ? (t = t.rgb(), new D(t.r, t.g, t.b, t.opacity)) : new D();
}
function oe(t, n, e, r) {
  return arguments.length === 1 ? Vs(t) : new D(t, n, e, r ?? 1);
}
function D(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Se(D, oe, di(Wt, {
  brighter(t) {
    return t = t == null ? _n : Math.pow(_n, t), new D(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ht : Math.pow(Ht, t), new D(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new D(yt(this.r), yt(this.g), yt(this.b), mn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: rr,
  // Deprecated! Use color.formatHex.
  formatHex: rr,
  formatHex8: Ks,
  formatRgb: ir,
  toString: ir
}));
function rr() {
  return `#${gt(this.r)}${gt(this.g)}${gt(this.b)}`;
}
function Ks() {
  return `#${gt(this.r)}${gt(this.g)}${gt(this.b)}${gt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ir() {
  const t = mn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${yt(this.r)}, ${yt(this.g)}, ${yt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function mn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function yt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function gt(t) {
  return t = yt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ar(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Y(t, n, e, r);
}
function gi(t) {
  if (t instanceof Y) return new Y(t.h, t.s, t.l, t.opacity);
  if (t instanceof Wt || (t = _t(t)), !t) return new Y();
  if (t instanceof Y) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new Y(o, s, l, t.opacity);
}
function Ws(t, n, e, r) {
  return arguments.length === 1 ? gi(t) : new Y(t, n, e, r ?? 1);
}
function Y(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Se(Y, Ws, di(Wt, {
  brighter(t) {
    return t = t == null ? _n : Math.pow(_n, t), new Y(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ht : Math.pow(Ht, t), new Y(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new D(
      Wn(t >= 240 ? t - 240 : t + 120, i, r),
      Wn(t, i, r),
      Wn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Y(or(this.h), an(this.s), an(this.l), mn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = mn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${or(this.h)}, ${an(this.s) * 100}%, ${an(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function or(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function an(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Wn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const Ne = (t) => () => t;
function Zs(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Js(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function js(t) {
  return (t = +t) == 1 ? yi : function(n, e) {
    return e - n ? Js(n, e, t) : Ne(isNaN(n) ? e : n);
  };
}
function yi(t, n) {
  var e = n - t;
  return e ? Zs(t, e) : Ne(isNaN(t) ? n : t);
}
const vn = function t(n) {
  var e = js(n);
  function r(i, a) {
    var o = e((i = oe(i)).r, (a = oe(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = yi(i.opacity, a.opacity);
    return function(f) {
      return i.r = o(f), i.g = s(f), i.b = l(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Qs(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function tu(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function nu(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = Pe(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function eu(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function G(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function ru(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Pe(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var se = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Zn = new RegExp(se.source, "g");
function iu(t) {
  return function() {
    return t;
  };
}
function au(t) {
  return function(n) {
    return t(n) + "";
  };
}
function _i(t, n) {
  var e = se.lastIndex = Zn.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = se.exec(t)) && (i = Zn.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: G(r, i) })), e = Zn.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? au(l[0].x) : iu(n) : (n = l.length, function(u) {
    for (var f = 0, h; f < n; ++f) s[(h = l[f]).i] = h.x(u);
    return s.join("");
  });
}
function Pe(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Ne(n) : (e === "number" ? G : e === "string" ? (r = _t(n)) ? (n = r, vn) : _i : n instanceof _t ? vn : n instanceof Date ? eu : tu(n) ? Qs : Array.isArray(n) ? nu : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? ru : G)(t, n);
}
function ou(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var sr = 180 / Math.PI, ue = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function mi(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * sr,
    skewX: Math.atan(l) * sr,
    scaleX: o,
    scaleY: s
  };
}
var on;
function su(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? ue : mi(n.a, n.b, n.c, n.d, n.e, n.f);
}
function uu(t) {
  return t == null || (on || (on = document.createElementNS("http://www.w3.org/2000/svg", "g")), on.setAttribute("transform", t), !(t = on.transform.baseVal.consolidate())) ? ue : (t = t.matrix, mi(t.a, t.b, t.c, t.d, t.e, t.f));
}
function vi(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, f, h, c, p, d) {
    if (u !== h || f !== c) {
      var y = p.push("translate(", null, n, null, e);
      d.push({ i: y - 4, x: G(u, h) }, { i: y - 2, x: G(f, c) });
    } else (h || c) && p.push("translate(" + h + n + c + e);
  }
  function o(u, f, h, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: G(u, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function s(u, f, h, c) {
    u !== f ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: G(u, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function l(u, f, h, c, p, d) {
    if (u !== h || f !== c) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: y - 4, x: G(u, h) }, { i: y - 2, x: G(f, c) });
    } else (h !== 1 || c !== 1) && p.push(i(p) + "scale(" + h + "," + c + ")");
  }
  return function(u, f) {
    var h = [], c = [];
    return u = t(u), f = t(f), a(u.translateX, u.translateY, f.translateX, f.translateY, h, c), o(u.rotate, f.rotate, h, c), s(u.skewX, f.skewX, h, c), l(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, c), u = f = null, function(p) {
      for (var d = -1, y = c.length, m; ++d < y; ) h[(m = c[d]).i] = m.x(p);
      return h.join("");
    };
  };
}
var lu = vi(su, "px, ", "px)", "deg)"), fu = vi(uu, ", ", ")", ")"), St = 0, Ct = 0, zt = 0, wi = 1e3, wn, Rt, xn = 0, mt = 0, kn = 0, Xt = typeof performance == "object" && performance.now ? performance : Date, xi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function zn() {
  return mt || (xi(cu), mt = Xt.now() + kn);
}
function cu() {
  mt = 0;
}
function Gt() {
  this._call = this._time = this._next = null;
}
Gt.prototype = Ee.prototype = {
  constructor: Gt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? zn() : +e) + (n == null ? 0 : +n), !this._next && Rt !== this && (Rt ? Rt._next = this : wn = this, Rt = this), this._call = t, this._time = e, le();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, le());
  }
};
function Ee(t, n, e) {
  var r = new Gt();
  return r.restart(t, n, e), r;
}
function hu() {
  zn(), ++St;
  for (var t = wn, n; t; )
    (n = mt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --St;
}
function ur() {
  mt = (xn = Xt.now()) + kn, St = Ct = 0;
  try {
    hu();
  } finally {
    St = 0, du(), mt = 0;
  }
}
function pu() {
  var t = Xt.now(), n = t - xn;
  n > wi && (kn -= n, xn = t);
}
function du() {
  for (var t, n = wn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : wn = e);
  Rt = t, le(r);
}
function le(t) {
  if (!St) {
    Ct && (Ct = clearTimeout(Ct));
    var n = t - mt;
    n > 24 ? (t < 1 / 0 && (Ct = setTimeout(ur, t - Xt.now() - kn)), zt && (zt = clearInterval(zt))) : (zt || (xn = Xt.now(), zt = setInterval(pu, wi)), St = 1, xi(ur));
  }
}
function lr(t, n, e) {
  var r = new Gt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function gu(t, n, e) {
  var r = new Gt(), i = n;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? zn() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, n, e), r;
}
var yu = Pn("start", "end", "cancel", "interrupt"), _u = [], bi = 0, fr = 1, fe = 2, hn = 3, cr = 4, ce = 5, pn = 6;
function On(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  mu(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: yu,
    tween: _u,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: bi
  });
}
function ke(t, n) {
  var e = K(t, n);
  if (e.state > bi) throw new Error("too late; already scheduled");
  return e;
}
function tt(t, n) {
  var e = K(t, n);
  if (e.state > hn) throw new Error("too late; already running");
  return e;
}
function K(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function mu(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Ee(a, 0, e.time);
  function a(u) {
    e.state = fr, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var f, h, c, p;
    if (e.state !== fr) return l();
    for (f in r)
      if (p = r[f], p.name === e.name) {
        if (p.state === hn) return lr(o);
        p.state === cr ? (p.state = pn, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[f]) : +f < n && (p.state = pn, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[f]);
      }
    if (lr(function() {
      e.state === hn && (e.state = cr, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = fe, e.on.call("start", t, t.__data__, e.index, e.group), e.state === fe) {
      for (e.state = hn, i = new Array(c = e.tween.length), f = 0, h = -1; f < c; ++f)
        (p = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var f = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = ce, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, f);
    e.state === ce && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = pn, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function vu(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > fe && r.state < ce, r.state = pn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function wu(t) {
  return this.each(function() {
    vu(this, t);
  });
}
function xu(t, n) {
  var e, r;
  return function() {
    var i = tt(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function bu(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = tt(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    a.tween = i;
  };
}
function Mu(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = K(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? xu : bu)(e, t, n));
}
function ze(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = tt(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return K(i, r).value[n];
  };
}
function Mi(t, n) {
  var e;
  return (typeof n == "number" ? G : n instanceof _t ? vn : (e = _t(n)) ? (n = e, vn) : _i)(t, n);
}
function Au(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function $u(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Tu(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Su(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Nu(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function Pu(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function Eu(t, n) {
  var e = En(t), r = e === "transform" ? fu : Mi;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Pu : Nu)(e, r, ze(this, "attr." + t, n)) : n == null ? (e.local ? $u : Au)(e) : (e.local ? Su : Tu)(e, r, n));
}
function ku(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function zu(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Ou(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && zu(t, a)), e;
  }
  return i._value = n, i;
}
function Iu(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && ku(t, a)), e;
  }
  return i._value = n, i;
}
function Cu(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = En(t);
  return this.tween(e, (r.local ? Ou : Iu)(r, n));
}
function Ru(t, n) {
  return function() {
    ke(this, t).delay = +n.apply(this, arguments);
  };
}
function Fu(t, n) {
  return n = +n, function() {
    ke(this, t).delay = n;
  };
}
function Du(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ru : Fu)(n, t)) : K(this.node(), n).delay;
}
function Lu(t, n) {
  return function() {
    tt(this, t).duration = +n.apply(this, arguments);
  };
}
function qu(t, n) {
  return n = +n, function() {
    tt(this, t).duration = n;
  };
}
function Hu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Lu : qu)(n, t)) : K(this.node(), n).duration;
}
function Bu(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    tt(this, t).ease = n;
  };
}
function Xu(t) {
  var n = this._id;
  return arguments.length ? this.each(Bu(n, t)) : K(this.node(), n).ease;
}
function Gu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    tt(this, t).ease = e;
  };
}
function Uu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Gu(this._id, t));
}
function Yu(t) {
  typeof t != "function" && (t = ii(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new at(r, this._parents, this._name, this._id);
}
function Vu(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], f = l.length, h = o[s] = new Array(f), c, p = 0; p < f; ++p)
      (c = l[p] || u[p]) && (h[p] = c);
  for (; s < r; ++s)
    o[s] = n[s];
  return new at(o, this._parents, this._name, this._id);
}
function Ku(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Wu(t, n, e) {
  var r, i, a = Ku(n) ? ke : tt;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function Zu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? K(this.node(), e).on.on(t) : this.each(Wu(e, t, n));
}
function Ju(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function ju() {
  return this.on("end.remove", Ju(this._id));
}
function Qu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = $e(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), f, h, c = 0; c < l; ++c)
      (f = s[c]) && (h = t.call(f, f.__data__, c, s)) && ("__data__" in f && (h.__data__ = f.__data__), u[c] = h, On(u[c], n, e, c, u, K(f, e)));
  return new at(a, this._parents, n, e);
}
function tl(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ri(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, f, h = 0; h < u; ++h)
      if (f = l[h]) {
        for (var c = t.call(f, f.__data__, h, l), p, d = K(f, e), y = 0, m = c.length; y < m; ++y)
          (p = c[y]) && On(p, n, e, y, c, d);
        a.push(c), o.push(f);
      }
  return new at(a, o, n, e);
}
var nl = Kt.prototype.constructor;
function el() {
  return new nl(this._groups, this._parents);
}
function rl(t, n) {
  var e, r, i;
  return function() {
    var a = Tt(this, t), o = (this.style.removeProperty(t), Tt(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function Ai(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function il(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = Tt(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function al(t, n, e) {
  var r, i, a;
  return function() {
    var o = Tt(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), Tt(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function ol(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = tt(this, t), u = l.on, f = l.value[a] == null ? s || (s = Ai(n)) : void 0;
    (u !== e || i !== f) && (r = (e = u).copy()).on(o, i = f), l.on = r;
  };
}
function sl(t, n, e) {
  var r = (t += "") == "transform" ? lu : Mi;
  return n == null ? this.styleTween(t, rl(t, r)).on("end.style." + t, Ai(t)) : typeof n == "function" ? this.styleTween(t, al(t, r, ze(this, "style." + t, n))).each(ol(this._id, t)) : this.styleTween(t, il(t, r, n), e).on("end.style." + t, null);
}
function ul(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function ll(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && ul(t, o, e)), r;
  }
  return a._value = n, a;
}
function fl(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, ll(t, n, e ?? ""));
}
function cl(t) {
  return function() {
    this.textContent = t;
  };
}
function hl(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function pl(t) {
  return this.tween("text", typeof t == "function" ? hl(ze(this, "text", t)) : cl(t == null ? "" : t + ""));
}
function dl(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function gl(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && dl(i)), n;
  }
  return r._value = t, r;
}
function yl(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, gl(t));
}
function _l() {
  for (var t = this._name, n = this._id, e = $i(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var f = K(l, n);
        On(l, t, e, u, o, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new at(r, this._parents, t, e);
}
function ml() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = tt(this, r), f = u.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
  });
}
var vl = 0;
function at(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function $i() {
  return ++vl;
}
var nt = Kt.prototype;
at.prototype = {
  constructor: at,
  select: Qu,
  selectAll: tl,
  selectChild: nt.selectChild,
  selectChildren: nt.selectChildren,
  filter: Yu,
  merge: Vu,
  selection: el,
  transition: _l,
  call: nt.call,
  nodes: nt.nodes,
  node: nt.node,
  size: nt.size,
  empty: nt.empty,
  each: nt.each,
  on: Zu,
  attr: Eu,
  attrTween: Cu,
  style: sl,
  styleTween: fl,
  text: pl,
  textTween: yl,
  remove: ju,
  tween: Mu,
  delay: Du,
  duration: Hu,
  ease: Xu,
  easeVarying: Uu,
  end: ml,
  [Symbol.iterator]: nt[Symbol.iterator]
};
function wl(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var xl = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: wl
};
function bl(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ml(t) {
  var n, e;
  t instanceof at ? (n = t._id, t = t._name) : (n = $i(), (e = xl).time = zn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && On(l, t, n, u, o, e || bl(l, n));
  return new at(r, this._parents, t, n);
}
Kt.prototype.interrupt = wu;
Kt.prototype.transition = Ml;
const he = Math.PI, pe = 2 * he, dt = 1e-6, Al = pe - dt;
function Ti(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function $l(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Ti;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Si {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Ti : $l(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = r - n, u = i - e, f = o - n, h = s - e, c = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (c > dt) if (!(Math.abs(h * l - u * f) > dt) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, d = i - s, y = l * l + u * u, m = p * p + d * d, g = Math.sqrt(y), w = Math.sqrt(c), M = a * Math.tan((he - Math.acos((y + c - m) / (2 * g * w))) / 2), _ = M / w, v = M / g;
      Math.abs(_ - 1) > dt && this._append`L${n + _ * f},${e + _ * h}`, this._append`A${a},${a},0,0,${+(h * p > f * d)},${this._x1 = n + v * l},${this._y1 = e + v * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, f = e + l, h = 1 ^ o, c = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > dt || Math.abs(this._y1 - f) > dt) && this._append`L${u},${f}`, r && (c < 0 && (c = c % pe + pe), c > Al ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = f}` : c > dt && this._append`A${r},${r},0,${+(c >= he)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function W() {
  return new Si();
}
W.prototype = Si.prototype;
function Tl(t) {
  const n = +this._x.call(null, t), e = +this._y.call(null, t);
  return Ni(this.cover(n, e), n, e, t);
}
function Ni(t, n, e, r) {
  if (isNaN(n) || isNaN(e)) return t;
  var i, a = t._root, o = { data: r }, s = t._x0, l = t._y0, u = t._x1, f = t._y1, h, c, p, d, y, m, g, w;
  if (!a) return t._root = o, t;
  for (; a.length; )
    if ((y = n >= (h = (s + u) / 2)) ? s = h : u = h, (m = e >= (c = (l + f) / 2)) ? l = c : f = c, i = a, !(a = a[g = m << 1 | y])) return i[g] = o, t;
  if (p = +t._x.call(null, a.data), d = +t._y.call(null, a.data), n === p && e === d) return o.next = a, i ? i[g] = o : t._root = o, t;
  do
    i = i ? i[g] = new Array(4) : t._root = new Array(4), (y = n >= (h = (s + u) / 2)) ? s = h : u = h, (m = e >= (c = (l + f) / 2)) ? l = c : f = c;
  while ((g = m << 1 | y) === (w = (d >= c) << 1 | p >= h));
  return i[w] = a, i[g] = o, t;
}
function Sl(t) {
  var n, e, r = t.length, i, a, o = new Array(r), s = new Array(r), l = 1 / 0, u = 1 / 0, f = -1 / 0, h = -1 / 0;
  for (e = 0; e < r; ++e)
    isNaN(i = +this._x.call(null, n = t[e])) || isNaN(a = +this._y.call(null, n)) || (o[e] = i, s[e] = a, i < l && (l = i), i > f && (f = i), a < u && (u = a), a > h && (h = a));
  if (l > f || u > h) return this;
  for (this.cover(l, u).cover(f, h), e = 0; e < r; ++e)
    Ni(this, o[e], s[e], t[e]);
  return this;
}
function Nl(t, n) {
  if (isNaN(t = +t) || isNaN(n = +n)) return this;
  var e = this._x0, r = this._y0, i = this._x1, a = this._y1;
  if (isNaN(e))
    i = (e = Math.floor(t)) + 1, a = (r = Math.floor(n)) + 1;
  else {
    for (var o = i - e || 1, s = this._root, l, u; e > t || t >= i || r > n || n >= a; )
      switch (u = (n < r) << 1 | t < e, l = new Array(4), l[u] = s, s = l, o *= 2, u) {
        case 0:
          i = e + o, a = r + o;
          break;
        case 1:
          e = i - o, a = r + o;
          break;
        case 2:
          i = e + o, r = a - o;
          break;
        case 3:
          e = i - o, r = a - o;
          break;
      }
    this._root && this._root.length && (this._root = s);
  }
  return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = a, this;
}
function Pl() {
  var t = [];
  return this.visit(function(n) {
    if (!n.length) do
      t.push(n.data);
    while (n = n.next);
  }), t;
}
function El(t) {
  return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function R(t, n, e, r, i) {
  this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i;
}
function kl(t, n, e) {
  var r, i = this._x0, a = this._y0, o, s, l, u, f = this._x1, h = this._y1, c = [], p = this._root, d, y;
  for (p && c.push(new R(p, i, a, f, h)), e == null ? e = 1 / 0 : (i = t - e, a = n - e, f = t + e, h = n + e, e *= e); d = c.pop(); )
    if (!(!(p = d.node) || (o = d.x0) > f || (s = d.y0) > h || (l = d.x1) < i || (u = d.y1) < a))
      if (p.length) {
        var m = (o + l) / 2, g = (s + u) / 2;
        c.push(
          new R(p[3], m, g, l, u),
          new R(p[2], o, g, m, u),
          new R(p[1], m, s, l, g),
          new R(p[0], o, s, m, g)
        ), (y = (n >= g) << 1 | t >= m) && (d = c[c.length - 1], c[c.length - 1] = c[c.length - 1 - y], c[c.length - 1 - y] = d);
      } else {
        var w = t - +this._x.call(null, p.data), M = n - +this._y.call(null, p.data), _ = w * w + M * M;
        if (_ < e) {
          var v = Math.sqrt(e = _);
          i = t - v, a = n - v, f = t + v, h = n + v, r = p.data;
        }
      }
  return r;
}
function zl(t) {
  if (isNaN(f = +this._x.call(null, t)) || isNaN(h = +this._y.call(null, t))) return this;
  var n, e = this._root, r, i, a, o = this._x0, s = this._y0, l = this._x1, u = this._y1, f, h, c, p, d, y, m, g;
  if (!e) return this;
  if (e.length) for (; ; ) {
    if ((d = f >= (c = (o + l) / 2)) ? o = c : l = c, (y = h >= (p = (s + u) / 2)) ? s = p : u = p, n = e, !(e = e[m = y << 1 | d])) return this;
    if (!e.length) break;
    (n[m + 1 & 3] || n[m + 2 & 3] || n[m + 3 & 3]) && (r = n, g = m);
  }
  for (; e.data !== t; ) if (i = e, !(e = e.next)) return this;
  return (a = e.next) && delete e.next, i ? (a ? i.next = a : delete i.next, this) : n ? (a ? n[m] = a : delete n[m], (e = n[0] || n[1] || n[2] || n[3]) && e === (n[3] || n[2] || n[1] || n[0]) && !e.length && (r ? r[g] = e : this._root = e), this) : (this._root = a, this);
}
function Ol(t) {
  for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
  return this;
}
function Il() {
  return this._root;
}
function Cl() {
  var t = 0;
  return this.visit(function(n) {
    if (!n.length) do
      ++t;
    while (n = n.next);
  }), t;
}
function Rl(t) {
  var n = [], e, r = this._root, i, a, o, s, l;
  for (r && n.push(new R(r, this._x0, this._y0, this._x1, this._y1)); e = n.pop(); )
    if (!t(r = e.node, a = e.x0, o = e.y0, s = e.x1, l = e.y1) && r.length) {
      var u = (a + s) / 2, f = (o + l) / 2;
      (i = r[3]) && n.push(new R(i, u, f, s, l)), (i = r[2]) && n.push(new R(i, a, f, u, l)), (i = r[1]) && n.push(new R(i, u, o, s, f)), (i = r[0]) && n.push(new R(i, a, o, u, f));
    }
  return this;
}
function Fl(t) {
  var n = [], e = [], r;
  for (this._root && n.push(new R(this._root, this._x0, this._y0, this._x1, this._y1)); r = n.pop(); ) {
    var i = r.node;
    if (i.length) {
      var a, o = r.x0, s = r.y0, l = r.x1, u = r.y1, f = (o + l) / 2, h = (s + u) / 2;
      (a = i[0]) && n.push(new R(a, o, s, f, h)), (a = i[1]) && n.push(new R(a, f, s, l, h)), (a = i[2]) && n.push(new R(a, o, h, f, u)), (a = i[3]) && n.push(new R(a, f, h, l, u));
    }
    e.push(r);
  }
  for (; r = e.pop(); )
    t(r.node, r.x0, r.y0, r.x1, r.y1);
  return this;
}
function Dl(t) {
  return t[0];
}
function Ll(t) {
  return arguments.length ? (this._x = t, this) : this._x;
}
function ql(t) {
  return t[1];
}
function Hl(t) {
  return arguments.length ? (this._y = t, this) : this._y;
}
function Pi(t, n, e) {
  var r = new Oe(n ?? Dl, e ?? ql, NaN, NaN, NaN, NaN);
  return t == null ? r : r.addAll(t);
}
function Oe(t, n, e, r, i, a) {
  this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = a, this._root = void 0;
}
function hr(t) {
  for (var n = { data: t.data }, e = n; t = t.next; ) e = e.next = { data: t.data };
  return n;
}
var F = Pi.prototype = Oe.prototype;
F.copy = function() {
  var t = new Oe(this._x, this._y, this._x0, this._y0, this._x1, this._y1), n = this._root, e, r;
  if (!n) return t;
  if (!n.length) return t._root = hr(n), t;
  for (e = [{ source: n, target: t._root = new Array(4) }]; n = e.pop(); )
    for (var i = 0; i < 4; ++i)
      (r = n.source[i]) && (r.length ? e.push({ source: r, target: n.target[i] = new Array(4) }) : n.target[i] = hr(r));
  return t;
};
F.add = Tl;
F.addAll = Sl;
F.cover = Nl;
F.data = Pl;
F.extent = El;
F.find = kl;
F.remove = zl;
F.removeAll = Ol;
F.root = Il;
F.size = Cl;
F.visit = Rl;
F.visitAfter = Fl;
F.x = Ll;
F.y = Hl;
function Z(t) {
  return function() {
    return t;
  };
}
function pr(t) {
  return (t() - 0.5) * 1e-6;
}
function Bl(t) {
  return t.x + t.vx;
}
function Xl(t) {
  return t.y + t.vy;
}
function Gl(t) {
  var n, e, r, i = 1, a = 1;
  typeof t != "function" && (t = Z(t == null ? 1 : +t));
  function o() {
    for (var u, f = n.length, h, c, p, d, y, m, g = 0; g < a; ++g)
      for (h = Pi(n, Bl, Xl).visitAfter(s), u = 0; u < f; ++u)
        c = n[u], y = e[c.index], m = y * y, p = c.x + c.vx, d = c.y + c.vy, h.visit(w);
    function w(M, _, v, $, A) {
      var T = M.data, O = M.r, N = y + O;
      if (T) {
        if (T.index > c.index) {
          var x = p - T.x - T.vx, P = d - T.y - T.vy, S = x * x + P * P;
          S < N * N && (x === 0 && (x = pr(r), S += x * x), P === 0 && (P = pr(r), S += P * P), S = (N - (S = Math.sqrt(S))) / S * i, c.vx += (x *= S) * (N = (O *= O) / (m + O)), c.vy += (P *= S) * N, T.vx -= x * (N = 1 - N), T.vy -= P * N);
        }
        return;
      }
      return _ > p + N || $ < p - N || v > d + N || A < d - N;
    }
  }
  function s(u) {
    if (u.data) return u.r = e[u.data.index];
    for (var f = u.r = 0; f < 4; ++f)
      u[f] && u[f].r > u.r && (u.r = u[f].r);
  }
  function l() {
    if (n) {
      var u, f = n.length, h;
      for (e = new Array(f), u = 0; u < f; ++u) h = n[u], e[h.index] = +t(h, u, n);
    }
  }
  return o.initialize = function(u, f) {
    n = u, r = f, l();
  }, o.iterations = function(u) {
    return arguments.length ? (a = +u, o) : a;
  }, o.strength = function(u) {
    return arguments.length ? (i = +u, o) : i;
  }, o.radius = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : Z(+u), l(), o) : t;
  }, o;
}
const Ul = 1664525, Yl = 1013904223, dr = 4294967296;
function Vl() {
  let t = 1;
  return () => (t = (Ul * t + Yl) % dr) / dr;
}
var Kl = 10, Wl = Math.PI * (3 - Math.sqrt(5));
function Zl(t) {
  var n, e = 1, r = 1e-3, i = 1 - Math.pow(r, 1 / 300), a = 0, o = 0.6, s = /* @__PURE__ */ new Map(), l = Ee(h), u = Pn("tick", "end"), f = Vl();
  t == null && (t = []);
  function h() {
    c(), u.call("tick", n), e < r && (l.stop(), u.call("end", n));
  }
  function c(y) {
    var m, g = t.length, w;
    y === void 0 && (y = 1);
    for (var M = 0; M < y; ++M)
      for (e += (a - e) * i, s.forEach(function(_) {
        _(e);
      }), m = 0; m < g; ++m)
        w = t[m], w.fx == null ? w.x += w.vx *= o : (w.x = w.fx, w.vx = 0), w.fy == null ? w.y += w.vy *= o : (w.y = w.fy, w.vy = 0);
    return n;
  }
  function p() {
    for (var y = 0, m = t.length, g; y < m; ++y) {
      if (g = t[y], g.index = y, g.fx != null && (g.x = g.fx), g.fy != null && (g.y = g.fy), isNaN(g.x) || isNaN(g.y)) {
        var w = Kl * Math.sqrt(0.5 + y), M = y * Wl;
        g.x = w * Math.cos(M), g.y = w * Math.sin(M);
      }
      (isNaN(g.vx) || isNaN(g.vy)) && (g.vx = g.vy = 0);
    }
  }
  function d(y) {
    return y.initialize && y.initialize(t, f), y;
  }
  return p(), n = {
    tick: c,
    restart: function() {
      return l.restart(h), n;
    },
    stop: function() {
      return l.stop(), n;
    },
    nodes: function(y) {
      return arguments.length ? (t = y, p(), s.forEach(d), n) : t;
    },
    alpha: function(y) {
      return arguments.length ? (e = +y, n) : e;
    },
    alphaMin: function(y) {
      return arguments.length ? (r = +y, n) : r;
    },
    alphaDecay: function(y) {
      return arguments.length ? (i = +y, n) : +i;
    },
    alphaTarget: function(y) {
      return arguments.length ? (a = +y, n) : a;
    },
    velocityDecay: function(y) {
      return arguments.length ? (o = 1 - y, n) : 1 - o;
    },
    randomSource: function(y) {
      return arguments.length ? (f = y, s.forEach(d), n) : f;
    },
    force: function(y, m) {
      return arguments.length > 1 ? (m == null ? s.delete(y) : s.set(y, d(m)), n) : s.get(y);
    },
    find: function(y, m, g) {
      var w = 0, M = t.length, _, v, $, A, T;
      for (g == null ? g = 1 / 0 : g *= g, w = 0; w < M; ++w)
        A = t[w], _ = y - A.x, v = m - A.y, $ = _ * _ + v * v, $ < g && (T = A, g = $);
      return T;
    },
    on: function(y, m) {
      return arguments.length > 1 ? (u.on(y, m), n) : u.on(y);
    }
  };
}
function Jl(t) {
  var n = Z(0.1), e, r, i;
  typeof t != "function" && (t = Z(t == null ? 0 : +t));
  function a(s) {
    for (var l = 0, u = e.length, f; l < u; ++l)
      f = e[l], f.vx += (i[l] - f.x) * r[l] * s;
  }
  function o() {
    if (e) {
      var s, l = e.length;
      for (r = new Array(l), i = new Array(l), s = 0; s < l; ++s)
        r[s] = isNaN(i[s] = +t(e[s], s, e)) ? 0 : +n(e[s], s, e);
    }
  }
  return a.initialize = function(s) {
    e = s, o();
  }, a.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : Z(+s), o(), a) : n;
  }, a.x = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : Z(+s), o(), a) : t;
  }, a;
}
function jl(t) {
  var n = Z(0.1), e, r, i;
  typeof t != "function" && (t = Z(t == null ? 0 : +t));
  function a(s) {
    for (var l = 0, u = e.length, f; l < u; ++l)
      f = e[l], f.vy += (i[l] - f.y) * r[l] * s;
  }
  function o() {
    if (e) {
      var s, l = e.length;
      for (r = new Array(l), i = new Array(l), s = 0; s < l; ++s)
        r[s] = isNaN(i[s] = +t(e[s], s, e)) ? 0 : +n(e[s], s, e);
    }
  }
  return a.initialize = function(s) {
    e = s, o();
  }, a.strength = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : Z(+s), o(), a) : n;
  }, a.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : Z(+s), o(), a) : t;
  }, a;
}
function Ql(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function bn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Nt(t) {
  return t = bn(Math.abs(t)), t ? t[1] : NaN;
}
function tf(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function nf(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var ef = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Mn(t) {
  if (!(n = ef.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Ie({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Mn.prototype = Ie.prototype;
function Ie(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ie.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function rf(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Ei;
function af(t, n) {
  var e = bn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (Ei = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + bn(t, Math.max(0, n + a - 1))[0];
}
function gr(t, n) {
  var e = bn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const yr = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Ql,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => gr(t * 100, n),
  r: gr,
  s: af,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function _r(t) {
  return t;
}
var mr = Array.prototype.map, vr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function of(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? _r : tf(mr.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? _r : nf(mr.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Mn(h);
    var c = h.fill, p = h.align, d = h.sign, y = h.symbol, m = h.zero, g = h.width, w = h.comma, M = h.precision, _ = h.trim, v = h.type;
    v === "n" ? (w = !0, v = "g") : yr[v] || (M === void 0 && (M = 12), _ = !0, v = "g"), (m || c === "0" && p === "=") && (m = !0, c = "0", p = "=");
    var $ = y === "$" ? e : y === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", A = y === "$" ? r : /[%p]/.test(v) ? o : "", T = yr[v], O = /[defgprs%]/.test(v);
    M = M === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function N(x) {
      var P = $, S = A, X, tn, ft;
      if (v === "c")
        S = T(x) + S, x = "";
      else {
        x = +x;
        var pt = x < 0 || 1 / x < 0;
        if (x = isNaN(x) ? l : T(Math.abs(x), M), _ && (x = rf(x)), pt && +x == 0 && d !== "+" && (pt = !1), P = (pt ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + P, S = (v === "s" ? vr[8 + Ei / 3] : "") + S + (pt && d === "(" ? ")" : ""), O) {
          for (X = -1, tn = x.length; ++X < tn; )
            if (ft = x.charCodeAt(X), 48 > ft || ft > 57) {
              S = (ft === 46 ? i + x.slice(X + 1) : x.slice(X)) + S, x = x.slice(0, X);
              break;
            }
        }
      }
      w && !m && (x = n(x, 1 / 0));
      var Mt = P.length + x.length + S.length, B = Mt < g ? new Array(g - Mt + 1).join(c) : "";
      switch (w && m && (x = n(B + x, B.length ? g - S.length : 1 / 0), B = ""), p) {
        case "<":
          x = P + x + S + B;
          break;
        case "=":
          x = P + B + x + S;
          break;
        case "^":
          x = B.slice(0, Mt = B.length >> 1) + P + x + S + B.slice(Mt);
          break;
        default:
          x = B + P + x + S;
          break;
      }
      return a(x);
    }
    return N.toString = function() {
      return h + "";
    }, N;
  }
  function f(h, c) {
    var p = u((h = Mn(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(Nt(c) / 3))) * 3, y = Math.pow(10, -d), m = vr[8 + d / 3];
    return function(g) {
      return p(y * g) + m;
    };
  }
  return {
    format: u,
    formatPrefix: f
  };
}
var sn, In, ki;
sf({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function sf(t) {
  return sn = of(t), In = sn.format, ki = sn.formatPrefix, sn;
}
function uf(t) {
  return Math.max(0, -Nt(Math.abs(t)));
}
function lf(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Nt(n) / 3))) * 3 - Nt(Math.abs(t)));
}
function ff(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Nt(n) - Nt(t)) + 1;
}
function Ce(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
const wr = Symbol("implicit");
function Re() {
  var t = new Ke(), n = [], e = [], r = wr;
  function i(a) {
    let o = t.get(a);
    if (o === void 0) {
      if (r !== wr) return r;
      t.set(a, o = n.push(a) - 1);
    }
    return e[o % e.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return n.slice();
    n = [], t = new Ke();
    for (const o of a)
      t.has(o) || t.set(o, n.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (e = Array.from(a), i) : e.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return Re(n, e).unknown(r);
  }, Ce.apply(i, arguments), i;
}
function cf(t) {
  return function() {
    return t;
  };
}
function hf(t) {
  return +t;
}
var xr = [0, 1];
function J(t) {
  return t;
}
function de(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : cf(isNaN(n) ? NaN : 0.5);
}
function pf(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function df(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = de(i, r), a = e(o, a)) : (r = de(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function gf(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = de(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = Pa(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function zi(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Oi() {
  var t = xr, n = xr, e = Pe, r, i, a, o = J, s, l, u;
  function f() {
    var c = Math.min(t.length, n.length);
    return o !== J && (o = pf(t[0], t[c - 1])), s = c > 2 ? gf : df, l = u = null, h;
  }
  function h(c) {
    return c == null || isNaN(c = +c) ? a : (l || (l = s(t.map(r), n, e)))(r(o(c)));
  }
  return h.invert = function(c) {
    return o(i((u || (u = s(n, t.map(r), G)))(c)));
  }, h.domain = function(c) {
    return arguments.length ? (t = Array.from(c, hf), f()) : t.slice();
  }, h.range = function(c) {
    return arguments.length ? (n = Array.from(c), f()) : n.slice();
  }, h.rangeRound = function(c) {
    return n = Array.from(c), e = ou, f();
  }, h.clamp = function(c) {
    return arguments.length ? (o = c ? !0 : J, f()) : o !== J;
  }, h.interpolate = function(c) {
    return arguments.length ? (e = c, f()) : e;
  }, h.unknown = function(c) {
    return arguments.length ? (a = c, h) : a;
  }, function(c, p) {
    return r = c, i = p, f();
  };
}
function yf() {
  return Oi()(J, J);
}
function _f(t, n, e, r) {
  var i = Fa(t, n, e), a;
  switch (r = Mn(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = lf(i, o)) && (r.precision = a), ki(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = ff(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = uf(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return In(r);
}
function Ii(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Ra(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return _f(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, f = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); f-- > 0; ) {
      if (u = ne(o, s, e), u === l)
        return r[i] = o, r[a] = s, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function V() {
  var t = yf();
  return t.copy = function() {
    return zi(t, V());
  }, Ce.apply(t, arguments), Ii(t);
}
function br(t) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
  };
}
function mf(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function vf(t) {
  return t < 0 ? -t * t : t * t;
}
function wf(t) {
  var n = t(J, J), e = 1;
  function r() {
    return e === 1 ? t(J, J) : e === 0.5 ? t(mf, vf) : t(br(e), br(1 / e));
  }
  return n.exponent = function(i) {
    return arguments.length ? (e = +i, r()) : e;
  }, Ii(n);
}
function Ci() {
  var t = wf(Oi());
  return t.copy = function() {
    return zi(t, Ci()).exponent(t.exponent());
  }, Ce.apply(t, arguments), t;
}
function xf() {
  return Ci.apply(null, arguments).exponent(0.5);
}
function Ft(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Ft.prototype = {
  constructor: Ft,
  scale: function(t) {
    return t === 1 ? this : new Ft(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Ft(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Ft.prototype;
var Ri = typeof global == "object" && global && global.Object === Object && global, bf = typeof self == "object" && self && self.Object === Object && self, st = Ri || bf || Function("return this")(), Q = st.Symbol, Fi = Object.prototype, Mf = Fi.hasOwnProperty, Af = Fi.toString, Ot = Q ? Q.toStringTag : void 0;
function $f(t) {
  var n = Mf.call(t, Ot), e = t[Ot];
  try {
    t[Ot] = void 0;
    var r = !0;
  } catch {
  }
  var i = Af.call(t);
  return r && (n ? t[Ot] = e : delete t[Ot]), i;
}
var Tf = Object.prototype, Sf = Tf.toString;
function Nf(t) {
  return Sf.call(t);
}
var Pf = "[object Null]", Ef = "[object Undefined]", Mr = Q ? Q.toStringTag : void 0;
function Et(t) {
  return t == null ? t === void 0 ? Ef : Pf : Mr && Mr in Object(t) ? $f(t) : Nf(t);
}
function vt(t) {
  return t != null && typeof t == "object";
}
var kf = "[object Symbol]";
function Zt(t) {
  return typeof t == "symbol" || vt(t) && Et(t) == kf;
}
function Jt(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var H = Array.isArray, Ar = Q ? Q.prototype : void 0, $r = Ar ? Ar.toString : void 0;
function Di(t) {
  if (typeof t == "string")
    return t;
  if (H(t))
    return Jt(t, Di) + "";
  if (Zt(t))
    return $r ? $r.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var zf = /\s/;
function Of(t) {
  for (var n = t.length; n-- && zf.test(t.charAt(n)); )
    ;
  return n;
}
var If = /^\s+/;
function Cf(t) {
  return t && t.slice(0, Of(t) + 1).replace(If, "");
}
function ot(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Tr = NaN, Rf = /^[-+]0x[0-9a-f]+$/i, Ff = /^0b[01]+$/i, Df = /^0o[0-7]+$/i, Lf = parseInt;
function qf(t) {
  if (typeof t == "number")
    return t;
  if (Zt(t))
    return Tr;
  if (ot(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ot(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Cf(t);
  var e = Ff.test(t);
  return e || Df.test(t) ? Lf(t.slice(2), e ? 2 : 8) : Rf.test(t) ? Tr : +t;
}
var Hf = 1 / 0, Bf = 17976931348623157e292;
function Dt(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = qf(t), t === Hf || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Bf;
  }
  return t === t ? t : 0;
}
function Cn(t) {
  return t;
}
var Xf = "[object AsyncFunction]", Gf = "[object Function]", Uf = "[object GeneratorFunction]", Yf = "[object Proxy]";
function Li(t) {
  if (!ot(t))
    return !1;
  var n = Et(t);
  return n == Gf || n == Uf || n == Xf || n == Yf;
}
var Jn = st["__core-js_shared__"], Sr = function() {
  var t = /[^.]+$/.exec(Jn && Jn.keys && Jn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Vf(t) {
  return !!Sr && Sr in t;
}
var Kf = Function.prototype, Wf = Kf.toString;
function xt(t) {
  if (t != null) {
    try {
      return Wf.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Zf = /[\\^$.*+?()[\]{}|]/g, Jf = /^\[object .+?Constructor\]$/, jf = Function.prototype, Qf = Object.prototype, tc = jf.toString, nc = Qf.hasOwnProperty, ec = RegExp(
  "^" + tc.call(nc).replace(Zf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rc(t) {
  if (!ot(t) || Vf(t))
    return !1;
  var n = Li(t) ? ec : Jf;
  return n.test(xt(t));
}
function ic(t, n) {
  return t == null ? void 0 : t[n];
}
function bt(t, n) {
  var e = ic(t, n);
  return rc(e) ? e : void 0;
}
var ge = bt(st, "WeakMap");
function ac(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
var oc = 800, sc = 16, uc = Date.now;
function lc(t) {
  var n = 0, e = 0;
  return function() {
    var r = uc(), i = sc - (r - e);
    if (e = r, i > 0) {
      if (++n >= oc)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function fc(t) {
  return function() {
    return t;
  };
}
var An = function() {
  try {
    var t = bt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), cc = An ? function(t, n) {
  return An(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: fc(n),
    writable: !0
  });
} : Cn, hc = lc(cc);
function pc(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
function dc(t, n, e, r) {
  for (var i = t.length, a = e + -1; ++a < i; )
    if (n(t[a], a, t))
      return a;
  return -1;
}
function gc(t) {
  return t !== t;
}
function yc(t, n, e) {
  for (var r = e - 1, i = t.length; ++r < i; )
    if (t[r] === n)
      return r;
  return -1;
}
function _c(t, n, e) {
  return n === n ? yc(t, n, e) : dc(t, gc, e);
}
function mc(t, n) {
  var e = t == null ? 0 : t.length;
  return !!e && _c(t, n, 0) > -1;
}
var vc = 9007199254740991, wc = /^(?:0|[1-9]\d*)$/;
function Rn(t, n) {
  var e = typeof t;
  return n = n ?? vc, !!n && (e == "number" || e != "symbol" && wc.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function xc(t, n, e) {
  n == "__proto__" && An ? An(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Fn(t, n) {
  return t === n || t !== t && n !== n;
}
var bc = Object.prototype, Mc = bc.hasOwnProperty;
function Ac(t, n, e) {
  var r = t[n];
  (!(Mc.call(t, n) && Fn(r, e)) || e === void 0 && !(n in t)) && xc(t, n, e);
}
var Nr = Math.max;
function $c(t, n, e) {
  return n = Nr(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, a = Nr(r.length - n, 0), o = Array(a); ++i < a; )
      o[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(o), ac(t, this, s);
  };
}
function Tc(t, n) {
  return hc($c(t, n, Cn), t + "");
}
var Sc = 9007199254740991;
function Fe(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Sc;
}
function kt(t) {
  return t != null && Fe(t.length) && !Li(t);
}
function qi(t, n, e) {
  if (!ot(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? kt(e) && Rn(n, e.length) : r == "string" && n in e) ? Fn(e[n], t) : !1;
}
var Nc = Object.prototype;
function Hi(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || Nc;
  return t === e;
}
function Pc(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var Ec = "[object Arguments]";
function Pr(t) {
  return vt(t) && Et(t) == Ec;
}
var Bi = Object.prototype, kc = Bi.hasOwnProperty, zc = Bi.propertyIsEnumerable, De = Pr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Pr : function(t) {
  return vt(t) && kc.call(t, "callee") && !zc.call(t, "callee");
};
function Oc() {
  return !1;
}
var Xi = typeof exports == "object" && exports && !exports.nodeType && exports, Er = Xi && typeof module == "object" && module && !module.nodeType && module, Ic = Er && Er.exports === Xi, kr = Ic ? st.Buffer : void 0, Cc = kr ? kr.isBuffer : void 0, ye = Cc || Oc, Rc = "[object Arguments]", Fc = "[object Array]", Dc = "[object Boolean]", Lc = "[object Date]", qc = "[object Error]", Hc = "[object Function]", Bc = "[object Map]", Xc = "[object Number]", Gc = "[object Object]", Uc = "[object RegExp]", Yc = "[object Set]", Vc = "[object String]", Kc = "[object WeakMap]", Wc = "[object ArrayBuffer]", Zc = "[object DataView]", Jc = "[object Float32Array]", jc = "[object Float64Array]", Qc = "[object Int8Array]", th = "[object Int16Array]", nh = "[object Int32Array]", eh = "[object Uint8Array]", rh = "[object Uint8ClampedArray]", ih = "[object Uint16Array]", ah = "[object Uint32Array]", E = {};
E[Jc] = E[jc] = E[Qc] = E[th] = E[nh] = E[eh] = E[rh] = E[ih] = E[ah] = !0;
E[Rc] = E[Fc] = E[Wc] = E[Dc] = E[Zc] = E[Lc] = E[qc] = E[Hc] = E[Bc] = E[Xc] = E[Gc] = E[Uc] = E[Yc] = E[Vc] = E[Kc] = !1;
function oh(t) {
  return vt(t) && Fe(t.length) && !!E[Et(t)];
}
function sh(t) {
  return function(n) {
    return t(n);
  };
}
var Gi = typeof exports == "object" && exports && !exports.nodeType && exports, Lt = Gi && typeof module == "object" && module && !module.nodeType && module, uh = Lt && Lt.exports === Gi, jn = uh && Ri.process, zr = function() {
  try {
    var t = Lt && Lt.require && Lt.require("util").types;
    return t || jn && jn.binding && jn.binding("util");
  } catch {
  }
}(), Or = zr && zr.isTypedArray, Ui = Or ? sh(Or) : oh, lh = Object.prototype, fh = lh.hasOwnProperty;
function Yi(t, n) {
  var e = H(t), r = !e && De(t), i = !e && !r && ye(t), a = !e && !r && !i && Ui(t), o = e || r || i || a, s = o ? Pc(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || fh.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Rn(u, l))) && s.push(u);
  return s;
}
function Vi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var ch = Vi(Object.keys, Object), hh = Object.prototype, ph = hh.hasOwnProperty;
function dh(t) {
  if (!Hi(t))
    return ch(t);
  var n = [];
  for (var e in Object(t))
    ph.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function jt(t) {
  return kt(t) ? Yi(t) : dh(t);
}
function gh(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var yh = Object.prototype, _h = yh.hasOwnProperty;
function mh(t) {
  if (!ot(t))
    return gh(t);
  var n = Hi(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !_h.call(t, r)) || e.push(r);
  return e;
}
function vh(t) {
  return kt(t) ? Yi(t, !0) : mh(t);
}
var wh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xh = /^\w*$/;
function Le(t, n) {
  if (H(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Zt(t) ? !0 : xh.test(t) || !wh.test(t) || n != null && t in Object(n);
}
var Ut = bt(Object, "create");
function bh() {
  this.__data__ = Ut ? Ut(null) : {}, this.size = 0;
}
function Mh(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Ah = "__lodash_hash_undefined__", $h = Object.prototype, Th = $h.hasOwnProperty;
function Sh(t) {
  var n = this.__data__;
  if (Ut) {
    var e = n[t];
    return e === Ah ? void 0 : e;
  }
  return Th.call(n, t) ? n[t] : void 0;
}
var Nh = Object.prototype, Ph = Nh.hasOwnProperty;
function Eh(t) {
  var n = this.__data__;
  return Ut ? n[t] !== void 0 : Ph.call(n, t);
}
var kh = "__lodash_hash_undefined__";
function zh(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Ut && n === void 0 ? kh : n, this;
}
function wt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
wt.prototype.clear = bh;
wt.prototype.delete = Mh;
wt.prototype.get = Sh;
wt.prototype.has = Eh;
wt.prototype.set = zh;
function Oh() {
  this.__data__ = [], this.size = 0;
}
function Dn(t, n) {
  for (var e = t.length; e--; )
    if (Fn(t[e][0], n))
      return e;
  return -1;
}
var Ih = Array.prototype, Ch = Ih.splice;
function Rh(t) {
  var n = this.__data__, e = Dn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : Ch.call(n, e, 1), --this.size, !0;
}
function Fh(t) {
  var n = this.__data__, e = Dn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Dh(t) {
  return Dn(this.__data__, t) > -1;
}
function Lh(t, n) {
  var e = this.__data__, r = Dn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function ut(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ut.prototype.clear = Oh;
ut.prototype.delete = Rh;
ut.prototype.get = Fh;
ut.prototype.has = Dh;
ut.prototype.set = Lh;
var Yt = bt(st, "Map");
function qh() {
  this.size = 0, this.__data__ = {
    hash: new wt(),
    map: new (Yt || ut)(),
    string: new wt()
  };
}
function Hh(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Ln(t, n) {
  var e = t.__data__;
  return Hh(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Bh(t) {
  var n = Ln(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Xh(t) {
  return Ln(this, t).get(t);
}
function Gh(t) {
  return Ln(this, t).has(t);
}
function Uh(t, n) {
  var e = Ln(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function lt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
lt.prototype.clear = qh;
lt.prototype.delete = Bh;
lt.prototype.get = Xh;
lt.prototype.has = Gh;
lt.prototype.set = Uh;
var Yh = "Expected a function";
function qe(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Yh);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (qe.Cache || lt)(), e;
}
qe.Cache = lt;
var Vh = 500;
function Kh(t) {
  var n = qe(t, function(r) {
    return e.size === Vh && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Wh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zh = /\\(\\)?/g, Jh = Kh(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Wh, function(e, r, i, a) {
    n.push(i ? a.replace(Zh, "$1") : r || e);
  }), n;
});
function qn(t) {
  return t == null ? "" : Di(t);
}
function Hn(t, n) {
  return H(t) ? t : Le(t, n) ? [t] : Jh(qn(t));
}
function Qt(t) {
  if (typeof t == "string" || Zt(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function He(t, n) {
  n = Hn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Qt(n[e++])];
  return e && e == r ? t : void 0;
}
function jh(t, n, e) {
  var r = t == null ? void 0 : He(t, n);
  return r === void 0 ? e : r;
}
function Be(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Ir = Q ? Q.isConcatSpreadable : void 0;
function Qh(t) {
  return H(t) || De(t) || !!(Ir && t && t[Ir]);
}
function tp(t, n, e, r, i) {
  var a = -1, o = t.length;
  for (e || (e = Qh), i || (i = []); ++a < o; ) {
    var s = t[a];
    e(s) ? Be(i, s) : i[i.length] = s;
  }
  return i;
}
function np(t) {
  var n = t == null ? 0 : t.length;
  return n ? tp(t) : [];
}
var ep = Vi(Object.getPrototypeOf, Object);
function rp(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + n];
  return a;
}
function ip(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, rp(t, n, e);
}
var ap = "\\ud800-\\udfff", op = "\\u0300-\\u036f", sp = "\\ufe20-\\ufe2f", up = "\\u20d0-\\u20ff", lp = op + sp + up, fp = "\\ufe0e\\ufe0f", cp = "\\u200d", hp = RegExp("[" + cp + ap + lp + fp + "]");
function Ki(t) {
  return hp.test(t);
}
function pp(t) {
  return t.split("");
}
var Wi = "\\ud800-\\udfff", dp = "\\u0300-\\u036f", gp = "\\ufe20-\\ufe2f", yp = "\\u20d0-\\u20ff", _p = dp + gp + yp, mp = "\\ufe0e\\ufe0f", vp = "[" + Wi + "]", _e = "[" + _p + "]", me = "\\ud83c[\\udffb-\\udfff]", wp = "(?:" + _e + "|" + me + ")", Zi = "[^" + Wi + "]", Ji = "(?:\\ud83c[\\udde6-\\uddff]){2}", ji = "[\\ud800-\\udbff][\\udc00-\\udfff]", xp = "\\u200d", Qi = wp + "?", ta = "[" + mp + "]?", bp = "(?:" + xp + "(?:" + [Zi, Ji, ji].join("|") + ")" + ta + Qi + ")*", Mp = ta + Qi + bp, Ap = "(?:" + [Zi + _e + "?", _e, Ji, ji, vp].join("|") + ")", $p = RegExp(me + "(?=" + me + ")|" + Ap + Mp, "g");
function Tp(t) {
  return t.match($p) || [];
}
function Sp(t) {
  return Ki(t) ? Tp(t) : pp(t);
}
function Np(t) {
  return function(n) {
    n = qn(n);
    var e = Ki(n) ? Sp(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? ip(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var Pp = Np("toUpperCase");
function Ep(t) {
  return Pp(qn(t).toLowerCase());
}
function kp() {
  this.__data__ = new ut(), this.size = 0;
}
function zp(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Op(t) {
  return this.__data__.get(t);
}
function Ip(t) {
  return this.__data__.has(t);
}
var Cp = 200;
function Rp(t, n) {
  var e = this.__data__;
  if (e instanceof ut) {
    var r = e.__data__;
    if (!Yt || r.length < Cp - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new lt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function rt(t) {
  var n = this.__data__ = new ut(t);
  this.size = n.size;
}
rt.prototype.clear = kp;
rt.prototype.delete = zp;
rt.prototype.get = Op;
rt.prototype.has = Ip;
rt.prototype.set = Rp;
function Fp(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function na() {
  return [];
}
var Dp = Object.prototype, Lp = Dp.propertyIsEnumerable, Cr = Object.getOwnPropertySymbols, ea = Cr ? function(t) {
  return t == null ? [] : (t = Object(t), Fp(Cr(t), function(n) {
    return Lp.call(t, n);
  }));
} : na, qp = Object.getOwnPropertySymbols, Hp = qp ? function(t) {
  for (var n = []; t; )
    Be(n, ea(t)), t = ep(t);
  return n;
} : na;
function ra(t, n, e) {
  var r = n(t);
  return H(t) ? r : Be(r, e(t));
}
function Rr(t) {
  return ra(t, jt, ea);
}
function Bp(t) {
  return ra(t, vh, Hp);
}
var ve = bt(st, "DataView"), we = bt(st, "Promise"), xe = bt(st, "Set"), Fr = "[object Map]", Xp = "[object Object]", Dr = "[object Promise]", Lr = "[object Set]", qr = "[object WeakMap]", Hr = "[object DataView]", Gp = xt(ve), Up = xt(Yt), Yp = xt(we), Vp = xt(xe), Kp = xt(ge), et = Et;
(ve && et(new ve(new ArrayBuffer(1))) != Hr || Yt && et(new Yt()) != Fr || we && et(we.resolve()) != Dr || xe && et(new xe()) != Lr || ge && et(new ge()) != qr) && (et = function(t) {
  var n = Et(t), e = n == Xp ? t.constructor : void 0, r = e ? xt(e) : "";
  if (r)
    switch (r) {
      case Gp:
        return Hr;
      case Up:
        return Fr;
      case Yp:
        return Dr;
      case Vp:
        return Lr;
      case Kp:
        return qr;
    }
  return n;
});
var Br = st.Uint8Array, Wp = "__lodash_hash_undefined__";
function Zp(t) {
  return this.__data__.set(t, Wp), this;
}
function Jp(t) {
  return this.__data__.has(t);
}
function Vt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new lt(); ++n < e; )
    this.add(t[n]);
}
Vt.prototype.add = Vt.prototype.push = Zp;
Vt.prototype.has = Jp;
function jp(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function ia(t, n) {
  return t.has(n);
}
var Qp = 1, t0 = 2;
function aa(t, n, e, r, i, a) {
  var o = e & Qp, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), f = a.get(n);
  if (u && f)
    return u == n && f == t;
  var h = -1, c = !0, p = e & t0 ? new Vt() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var d = t[h], y = n[h];
    if (r)
      var m = o ? r(y, d, h, n, t, a) : r(d, y, h, t, n, a);
    if (m !== void 0) {
      if (m)
        continue;
      c = !1;
      break;
    }
    if (p) {
      if (!jp(n, function(g, w) {
        if (!ia(p, w) && (d === g || i(d, g, e, r, a)))
          return p.push(w);
      })) {
        c = !1;
        break;
      }
    } else if (!(d === y || i(d, y, e, r, a))) {
      c = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), c;
}
function oa(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function n0(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var e0 = 1, r0 = 2, i0 = "[object Boolean]", a0 = "[object Date]", o0 = "[object Error]", s0 = "[object Map]", u0 = "[object Number]", l0 = "[object RegExp]", f0 = "[object Set]", c0 = "[object String]", h0 = "[object Symbol]", p0 = "[object ArrayBuffer]", d0 = "[object DataView]", Xr = Q ? Q.prototype : void 0, Qn = Xr ? Xr.valueOf : void 0;
function g0(t, n, e, r, i, a, o) {
  switch (e) {
    case d0:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case p0:
      return !(t.byteLength != n.byteLength || !a(new Br(t), new Br(n)));
    case i0:
    case a0:
    case u0:
      return Fn(+t, +n);
    case o0:
      return t.name == n.name && t.message == n.message;
    case l0:
    case c0:
      return t == n + "";
    case s0:
      var s = oa;
    case f0:
      var l = r & e0;
      if (s || (s = n0), t.size != n.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= r0, o.set(t, n);
      var f = aa(s(t), s(n), r, i, a, o);
      return o.delete(t), f;
    case h0:
      if (Qn)
        return Qn.call(t) == Qn.call(n);
  }
  return !1;
}
var y0 = 1, _0 = Object.prototype, m0 = _0.hasOwnProperty;
function v0(t, n, e, r, i, a) {
  var o = e & y0, s = Rr(t), l = s.length, u = Rr(n), f = u.length;
  if (l != f && !o)
    return !1;
  for (var h = l; h--; ) {
    var c = s[h];
    if (!(o ? c in n : m0.call(n, c)))
      return !1;
  }
  var p = a.get(t), d = a.get(n);
  if (p && d)
    return p == n && d == t;
  var y = !0;
  a.set(t, n), a.set(n, t);
  for (var m = o; ++h < l; ) {
    c = s[h];
    var g = t[c], w = n[c];
    if (r)
      var M = o ? r(w, g, c, n, t, a) : r(g, w, c, t, n, a);
    if (!(M === void 0 ? g === w || i(g, w, e, r, a) : M)) {
      y = !1;
      break;
    }
    m || (m = c == "constructor");
  }
  if (y && !m) {
    var _ = t.constructor, v = n.constructor;
    _ != v && "constructor" in t && "constructor" in n && !(typeof _ == "function" && _ instanceof _ && typeof v == "function" && v instanceof v) && (y = !1);
  }
  return a.delete(t), a.delete(n), y;
}
var w0 = 1, Gr = "[object Arguments]", Ur = "[object Array]", un = "[object Object]", x0 = Object.prototype, Yr = x0.hasOwnProperty;
function b0(t, n, e, r, i, a) {
  var o = H(t), s = H(n), l = o ? Ur : et(t), u = s ? Ur : et(n);
  l = l == Gr ? un : l, u = u == Gr ? un : u;
  var f = l == un, h = u == un, c = l == u;
  if (c && ye(t)) {
    if (!ye(n))
      return !1;
    o = !0, f = !1;
  }
  if (c && !f)
    return a || (a = new rt()), o || Ui(t) ? aa(t, n, e, r, i, a) : g0(t, n, l, e, r, i, a);
  if (!(e & w0)) {
    var p = f && Yr.call(t, "__wrapped__"), d = h && Yr.call(n, "__wrapped__");
    if (p || d) {
      var y = p ? t.value() : t, m = d ? n.value() : n;
      return a || (a = new rt()), i(y, m, e, r, a);
    }
  }
  return c ? (a || (a = new rt()), v0(t, n, e, r, i, a)) : !1;
}
function Xe(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !vt(t) && !vt(n) ? t !== t && n !== n : b0(t, n, e, r, Xe, i);
}
var M0 = 1, A0 = 2;
function $0(t, n, e, r) {
  var i = e.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = e[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = e[i];
    var s = o[0], l = t[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var f = new rt(), h;
      if (!(h === void 0 ? Xe(u, l, M0 | A0, r, f) : h))
        return !1;
    }
  }
  return !0;
}
function sa(t) {
  return t === t && !ot(t);
}
function T0(t) {
  for (var n = jt(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, sa(i)];
  }
  return n;
}
function ua(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function S0(t) {
  var n = T0(t);
  return n.length == 1 && n[0][2] ? ua(n[0][0], n[0][1]) : function(e) {
    return e === t || $0(e, t, n);
  };
}
function N0(t, n) {
  return t != null && n in Object(t);
}
function la(t, n, e) {
  n = Hn(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = Qt(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Fe(i) && Rn(o, i) && (H(t) || De(t)));
}
function P0(t, n) {
  return t != null && la(t, n, N0);
}
var E0 = 1, k0 = 2;
function z0(t, n) {
  return Le(t) && sa(n) ? ua(Qt(t), n) : function(e) {
    var r = jh(e, t);
    return r === void 0 && r === n ? P0(e, t) : Xe(n, r, E0 | k0);
  };
}
function O0(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function I0(t) {
  return function(n) {
    return He(n, t);
  };
}
function C0(t) {
  return Le(t) ? O0(Qt(t)) : I0(t);
}
function Bn(t) {
  return typeof t == "function" ? t : t == null ? Cn : typeof t == "object" ? H(t) ? z0(t[0], t[1]) : S0(t) : C0(t);
}
function R0(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var F0 = R0();
function D0(t, n) {
  return t && F0(t, n, jt);
}
function L0(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!kt(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var fa = L0(D0);
function q0(t) {
  return vt(t) && kt(t);
}
var H0 = 200;
function B0(t, n, e, r) {
  var i = -1, a = mc, o = !0, s = t.length, l = [], u = n.length;
  if (!s)
    return l;
  n.length >= H0 && (a = ia, o = !1, n = new Vt(n));
  t:
    for (; ++i < s; ) {
      var f = t[i], h = f;
      if (f = f !== 0 ? f : 0, o && h === h) {
        for (var c = u; c--; )
          if (n[c] === h)
            continue t;
        l.push(f);
      } else a(n, h, r) || l.push(f);
    }
  return l;
}
function X0(t) {
  return typeof t == "function" ? t : Cn;
}
function ca(t, n) {
  var e = H(t) ? pc : fa;
  return e(t, X0(n));
}
function G0(t, n) {
  return Jt(n, function(e) {
    return [e, t[e]];
  });
}
function U0(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var Y0 = "[object Map]", V0 = "[object Set]";
function K0(t) {
  return function(n) {
    var e = et(n);
    return e == Y0 ? oa(n) : e == V0 ? U0(n) : G0(n, t(n));
  };
}
var ha = K0(jt);
function W0(t, n) {
  var e = -1, r = kt(t) ? Array(t.length) : [];
  return fa(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function Pt(t, n) {
  var e = H(t) ? Jt : W0;
  return e(t, Bn(n));
}
function Z0(t, n) {
  return t > n;
}
var J0 = Object.prototype, j0 = J0.hasOwnProperty;
function Q0(t, n) {
  return t != null && j0.call(t, n);
}
function pa(t, n) {
  return t != null && la(t, n, Q0);
}
function td(t, n) {
  return Jt(n, function(e) {
    return t[e];
  });
}
function nd(t) {
  return t == null ? [] : td(t, jt(t));
}
function ed(t, n, e) {
  for (var r = -1, i = t.length; ++r < i; ) {
    var a = t[r], o = n(a);
    if (o != null && (s === void 0 ? o === o && !Zt(o) : e(o, s)))
      var s = o, l = a;
  }
  return l;
}
function rd(t, n) {
  return t && t.length ? ed(t, Bn(n), Z0) : void 0;
}
function id(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var a = n(t[r]);
    a !== void 0 && (e = e === void 0 ? a : e + a);
  }
  return e;
}
function ad(t, n, e, r) {
  if (!ot(t))
    return t;
  n = Hn(n, t);
  for (var i = -1, a = n.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var l = Qt(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != o) {
      var f = s[l];
      u = void 0, u === void 0 && (u = ot(f) ? f : Rn(n[i + 1]) ? [] : {});
    }
    Ac(s, l, u), s = s[l];
  }
  return t;
}
function od(t, n, e) {
  for (var r = -1, i = n.length, a = {}; ++r < i; ) {
    var o = n[r], s = He(t, o);
    e(s, o) && ad(a, Hn(o, t), s);
  }
  return a;
}
function sd(t, n) {
  if (t == null)
    return {};
  var e = Jt(Bp(t), function(r) {
    return [r];
  });
  return n = Bn(n), od(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var ud = Math.floor, ld = Math.random;
function da(t, n) {
  return t + ud(ld() * (n - t + 1));
}
var fd = parseFloat, cd = Math.min, hd = Math.random;
function ga(t, n, e) {
  if (e && typeof e != "boolean" && qi(t, n, e) && (n = e = void 0), e === void 0 && (typeof n == "boolean" ? (e = n, n = void 0) : typeof t == "boolean" && (e = t, t = void 0)), t === void 0 && n === void 0 ? (t = 0, n = 1) : (t = Dt(t), n === void 0 ? (n = t, t = 0) : n = Dt(n)), t > n) {
    var r = t;
    t = n, n = r;
  }
  if (e || t % 1 || n % 1) {
    var i = hd();
    return cd(t + i * (n - t + fd("1e-" + ((i + "").length - 1))), n);
  }
  return da(t, n);
}
var pd = Math.ceil, dd = Math.max;
function gd(t, n, e, r) {
  for (var i = -1, a = dd(pd((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function yd(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && qi(n, e, r) && (e = r = void 0), n = Dt(n), e === void 0 ? (e = n, n = 0) : e = Dt(e), r = r === void 0 ? n < e ? 1 : -1 : Dt(r), gd(n, e, r);
  };
}
var Ge = yd();
function _d() {
  var t = arguments, n = qn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function ya(t) {
  var n = t.length;
  return n ? t[da(0, n - 1)] : void 0;
}
function md(t) {
  return ya(nd(t));
}
function vd(t) {
  var n = H(t) ? ya : md;
  return n(t);
}
function _a(t, n) {
  return t && t.length ? id(t, Bn(n)) : 0;
}
var wd = Tc(function(t, n) {
  return q0(t) ? B0(t, n) : [];
});
const xd = (t, n, e = 12, r = 12) => {
  const i = V().domain([0, e]).range([0, t]), a = V().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Ge((e + 1) * (r + 1)).map(function(l) {
        return { m: l % (e + 1), n: Math.floor(l / (e + 1)), x: i(l % (e + 1)), y: a(Math.floor(l / (e + 1))) };
      });
    },
    position: function(l, u) {
      typeof l == "number" && (l = [l]), typeof u == "number" && (u = [u]);
      const f = np(Pt(u, function(h) {
        return Pt(
          l,
          function(c) {
            return { x: i(c), y: a(h) };
          }
        );
      }));
      return f.length == 1 ? f[0] : f;
    }
  };
}, bd = "_widget_18g36_1", Md = "_label_18g36_19", Ad = "_lit_18g36_24", $d = "_button_18g36_29", Td = "_symbol_18g36_29", Sd = "_radio_18g36_29", Nd = "_radiobutton_18g36_29", Pd = "_selected_18g36_35", Ed = "_toggle_18g36_35", kd = "_slider_18g36_44", zd = "_track_18g36_44", Od = "_track_overlay_18g36_48", Id = "_handle_18g36_55", b = {
  widget: bd,
  label: Md,
  lit: Ad,
  button: $d,
  symbol: Td,
  radio: Sd,
  radiobutton: Nd,
  selected: Pd,
  toggle: Ed,
  slider: kd,
  track: zd,
  track_overlay: Od,
  handle: Id
}, ma = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, Ue = (t, n, e) => {
  var r, i, a, o;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, Cd = (t = 1) => {
  const n = W();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Rd = (t = 1) => {
  const n = W(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Fd = (t = 1) => {
  const n = W();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Dd = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = W();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, Ld = (t = 1) => {
  const n = W(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, a = 0.5, o = 0.6, s = 0.6, l = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), n.arc(0, 0, t * (1 - a), r, i, !1), n.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), n.closePath(), n.toString();
}, qd = (t = 1) => {
  const n = W(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, a = e, o = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, o), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, a, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, Hd = (t = 1) => {
  const n = W(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), n.arc(0, 0, t * (1 - a), i, r, !0), n.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var l = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), n.closePath(), n.toString();
}, Bd = (t = 1) => {
  var n = W(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, Xd = (t = 1) => {
  const n = W(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, be = (t) => {
  switch (t) {
    case "play":
      return Cd;
    case "forward":
      return Rd;
    case "back":
      return Fd;
    case "pause":
      return Dd;
    case "reload":
      return Ld;
    case "capture":
      return qd;
    case "rewind":
      return Hd;
    case "stop":
      return Bd;
    case "push":
      return Xd;
  }
}, Ye = () => {
  const t = "button";
  var n = ma(), e = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", l = null, u = function(d) {
  }, f = ["play"], h = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? a.x : (a.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? a.y : (a.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? l : (l = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return u = d, this;
      u(d);
    },
    actions: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? h : (h = d, this);
    },
    click: function() {
      h = (h + 1) % f.length, u(), C(this.parentNode).select("." + b.symbol).attr("d", be(f[h])(r * e));
    },
    press: function(d) {
      h = (h + 1) % f.length, u(), d.select("#button_" + n).select("." + b.symbol).attr("d", be(f[h])(r * e));
    }
  };
}, Gd = () => {
  const t = "slider", n = In(".3f");
  var e = ma(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, l = "top-left", u = null, f = function(g) {
  }, h = function(g) {
  }, c = [0, 1], p = 0, d = null, y = V().domain(c).range([0, r]).clamp(!0);
  const m = function(g, w, M = c) {
    const _ = g.select("#slider_" + e);
    y.domain(M), p = w, _.selectAll("." + b.handle).transition().attr("cx", y(w)), o && _.select("." + b.label).text(d + " = " + n(p)), f(), h();
  };
  return {
    type: t,
    scale: y,
    id: function(g) {
      return typeof g > "u" ? e : (e = g, this);
    },
    label: function(g) {
      return typeof g > "u" ? d : (d = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    girth: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    knob: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    show: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? s.x : (s.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? s.y : (s.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? l : (l = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return f = g, this;
      f(g);
    },
    update_end: function(g) {
      if (typeof g == "function")
        return h = g, this;
      h(g);
    },
    range: function(g) {
      return typeof g > "u" ? c : (c = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? p : (p = g, this);
    },
    reset: m,
    click: m
  };
}, Ud = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = C(a).attr("class", b.widget + " " + b.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", b.background).on("click", t.click).on("mouseover", function() {
    C(this).classed(b.lit, !0), C(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    C(this).classed(b.lit, !1), C(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), o.append("path").attr("d", be(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", b.symbol), r) {
    const l = Ue(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", b.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return a;
}, va = (t, n) => {
  const e = W();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, Yd = (t, n) => {
  const e = In(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = C(l).attr("class", b.widget + " " + b.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", va(t.size(), t.girth())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", b.track_overlay).on("click", function(d) {
    const y = ie(d, this)[0];
    t.value(o.invert(y)), t.update(), t.update_end(), s.selectAll("." + b.handle).attr("cx", o(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Fs().on("drag", function(d) {
      t.value(o.invert(d.x)), t.update(), s.selectAll("." + b.handle).attr("cx", o(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var f, h, c, p = "bottom";
  return t.fontsize && (h = t.labelposition().match(/bottom/i) != null ? nn([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -nn([t.girth() / 2, t.knob()]) - t.fontsize() / 2), h = t.labelposition().match(/bottom/i) != null ? nn([t.girth() / 2, t.knob()]) + 7 : -nn([t.girth() / 2, t.knob()]) - 7, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, c = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", b.label).style("text-anchor", c).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + h + ")"), l;
}, Vd = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = C(o).attr("class", b.widget + " " + b.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(b.selected, t.value() == 1);
  if (s.append("path").attr("d", va(2 * t.size(), 2 * t.size())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", b.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = Ue(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", b.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return o;
}, Kd = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = Da(o), l = V().domain([0, o - 1]).range([0, t.size()]), u = V().domain([0, o - 1]).range([0, t.size()]), f = document.createElementNS("http://www.w3.org/2000/svg", "g"), c = C(f).attr("class", b.widget + " " + b.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + b.radiobutton).data(s).enter().append("g").attr("class", b.radiobutton).attr("id", (m) => "b" + m).attr("transform", (m) => t.orientation() == "vertical" ? "translate(0," + u(m) + ")" : "translate(" + l(m) + ",0)");
  var p, d;
  t.shape() == "rect" ? (p = c.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = c.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (p = c.append("circle").attr("r", i / 2), d = c.append("circle").attr("r", a / 2)), p.attr("class", b.background).on("mouseover", function() {
    C(this).classed(b.lit, !0), C(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    C(this).classed(b.lit, !1), C(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), d.attr("class", b.symbol), d.filter((m) => m == t.value()).classed(b.selected, !0), c.on("click", t.click);
  const y = Ue(t.buttonsize(), t.buttonsize(), r);
  return c.append("text").attr("class", b.label).text(function(m, g) {
    return t.choices()[g];
  }).attr("alignment-baseline", y.valign).attr("transform", "translate(" + y.x + "," + y.y + ")").style("font-size", t.fontsize()).attr("text-anchor", y.anchor), f;
}, Vr = (t, n) => {
  switch (t.type) {
    case "button":
      return Ud(t);
    case "slider":
      return Yd(t);
    case "radio":
      return Kd(t);
    case "toggle":
      return Vd(t);
  }
}, Wd = (t, n) => {
  const e = xd(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = C("#" + t).classed(n.id + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), a = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && a.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && a.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (o) => "translate(" + o.x + "," + o.y + ")").style("fill", "black"), { display: i, controls: a, grid: e };
}, k = {
  widgets: {
    slider_size: 400,
    slider_gap: 1.5,
    slider_girth: 11,
    slider_knob: 13,
    slider_anchor: { x: 1, y: 5 },
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 10, y: 2 },
    resetbutton_anchor: { x: 8, y: 2 }
  },
  plot: {
    blob_plot_width: 400,
    blob_plot_anchor: { x: 1, y: 10 },
    blob_plot_xlabel: "fitness",
    mf_size: 5
  },
  simulation: {
    delay: 10,
    velocityDecay: 0.5,
    attractionStrenth: 5e-3,
    iterations: 10
  }
}, I = {
  L: 500,
  N0: 10,
  Nmax: 400,
  agent_size_min: 8,
  agent_size_max: 10,
  L: 100,
  agentsize: 1,
  variation_magnitude: {
    range: [0, 1],
    default: 0.9
  },
  mutation_rate: {
    range: [0, 1 / 50],
    default: 1 / 100
  },
  selection_strength: {
    range: [2, 10],
    default: 8
  }
}, Zd = (t) => Pt(
  ha(t),
  (n) => {
    n[1].id = n[0], pa(n[1], "label") || (n[1].label = _d(Ep(n[0]), /_/g, " "));
  }
), Jd = (t) => Pt(ha(t), (n) => n[1]), jd = (t, n) => ca(t, (e, r) => e.widget = n[r]), Qd = (t) => sd(t, (n) => pa(n, "range"));
V().domain([0, 360]).range([0, 2 * Math.PI]);
V().range([0, 360]).domain([0, 2 * Math.PI]);
const Ve = Qd(I);
Zd(Ve);
const wa = Jd(Ve), dn = Pt(
  wa,
  (t) => Gd().id(t.id).label(t.label).range(t.range).value(t.default).size(k.widgets.slider_size).girth(k.widgets.slider_girth).knob(k.widgets.slider_knob)
);
jd(wa, dn);
const ht = Ye().actions(["play", "pause"]), Xn = Ye().actions(["back"]), Gn = Ye().actions(["rewind"]), tg = [ht, Xn, Gn], ng = (t, n) => {
  const e = n.position(k.widgets.slider_anchor.x, Ge(dn.length).map((r) => k.widgets.slider_anchor.y + k.widgets.slider_gap * r));
  dn.forEach((r, i) => r.position(e[i])), ht.position(n.position(k.widgets.playbutton_anchor.x, k.widgets.playbutton_anchor.y)).size(k.widgets.playbutton_size), Gn.position(n.position(k.widgets.backbutton_anchor.x, k.widgets.backbutton_anchor.y)), Xn.position(n.position(k.widgets.resetbutton_anchor.x, k.widgets.resetbutton_anchor.y)), t.selectAll(null).data(dn).enter().append(Vr), t.selectAll(null).data(tg).enter().append(Vr);
}, eg = (t) => {
  ca(Ve, (n) => n.widget.reset(t, n.default));
};
var ln = { exports: {} }, Kr;
function rg() {
  if (Kr) return ln.exports;
  Kr = 1;
  function t(i) {
    var a = i.__weighted_total;
    if (a != null)
      return a;
    function o(s, l) {
      return function() {
        s.__weighted_total = null, l.apply(s, arguments);
      };
    }
    return a === void 0 && ["pop", "push", "shift", "unshift", "splice"].forEach(function(s) {
      i[s] = o(i, i[s]);
    }), a = i.__weighted_total = i.reduce(function(s, l) {
      return s + l;
    }, 0), a;
  }
  function n(i, a, o) {
    if (typeof o.rand != "function" && (o.rand = Math.random), i.length !== a.length)
      throw new TypeError("Different number of options & weights.");
    for (var s = o.total || (o.normal ? 1 : t(a)), l = o.rand() * s, u = 0; u < a.length; u++)
      if (l -= a[u], l < 0)
        return i[u];
    throw new RangeError("All weights do not add up to >= 1 as expected.");
  }
  function e(i, a) {
    var o = Object.keys(i), s = o.map(function(l) {
      return i[l];
    });
    return n(o, s, a);
  }
  function r(i, a, o) {
    if (typeof o == "function" && (o = {
      rand: o
    }), o == null && (o = {}), Array.isArray(i)) {
      if (a == null && (a = i.map(function() {
        return 1;
      })), Array.isArray(a)) {
        if (i.length === a.length)
          return n(i, a, o);
        throw new TypeError("Set and Weights are different sizes.");
      }
      throw new TypeError("Set is an Array, and Weights is not.");
    }
    if (typeof i == "object")
      return e(i, a || o);
    throw new TypeError("Set is not an Object, nor is it an Array.");
  }
  return ln.exports = r, ln.exports.select = r, ln.exports;
}
var te, Wr;
function ig() {
  return Wr || (Wr = 1, te = rg()), te;
}
var ag = ig();
const Zr = I.L;
var L = [], it = [], Me;
function og(t) {
  const n = t.map((e) => Math.pow(e.fitness, I.selection_strength.widget.value()));
  return ag.select(t, n);
}
const sg = () => {
  I.timer = {}, I.tick = 0, it = [{ f: 1, n: I.N0 }], Me = 1, L = Pt(Ge(I.N0), (t) => ({
    id: t,
    x: Zr * (Math.random() - 0.5),
    y: Zr * (Math.random() - 0.5),
    type: 0,
    r: ga(I.agent_size_min, I.agent_size_max),
    fitness: 1
  }));
}, ug = () => {
  I.tick++;
  const t = og(L), n = 2 * Math.PI * Math.random();
  let e = t.type, r = t.fitness;
  if (Math.random() < I.mutation_rate.widget.value() ? (Me++, e = Me - 1, r += I.variation_magnitude.widget.value() * (Math.random() - 0.5), it.push({ f: r, n: 1 })) : it[e].n += 1, L.push({
    id: I.N0 + I.tick,
    x: t.x + t.r * Math.cos(n),
    y: t.y + t.r * Math.sin(n),
    r: ga(I.agent_size_min, I.agent_size_max),
    type: e,
    fitness: r
  }), L.length > I.Nmax) {
    let i = vd(L);
    L = wd(L, i), it[i.type].n -= 1;
  }
}, lg = "_cell_1xgp5_1", fg = "_plot_1xgp5_6", cg = "_xaxis_1xgp5_6", hg = "_xlabel_1xgp5_6", pg = "_dot_1xgp5_10", dg = "_bigcircle_1xgp5_15", gg = "_smallcircle_1xgp5_21", yg = "_mf_1xgp5_27", z = {
  cell: lg,
  plot: fg,
  xaxis: cg,
  xlabel: hg,
  dot: pg,
  bigcircle: dg,
  smallcircle: gg,
  mf: yg
}, $n = { batlowS: ["#011959", "#faccfb", "#828231", "#216061", "#f19d6b", "#4d734c", "#114360", "#fdb4b4", "#c09036", "#165262", "#fcc0d6", "#fba890", "#356a59", "#0c305d", "#a18a2b", "#667a3e", "#dc954d", "#08255b", "#fdaea3", "#fbc6e8", "#b08d2e", "#ce9340", "#91862c", "#2a655e", "#747e37", "#134b61", "#f8a27e", "#0f3a5f", "#406f53", "#1b5962", "#fcbac5", "#597745", "#e8995c", "#607942", "#467150", "#faa587", "#fcab9a", "#144e62", "#7b8034", "#6d7c3b", "#c7913b", "#e29754", "#f59f74", "#185662", "#b88f32", "#a88c2c", "#0d365e", "#103f60", "#537549", "#fac9f1", "#26635f", "#99882b", "#124761", "#fdb7bc", "#1e5c61", "#89842e", "#fdb1ab", "#fbc3df", "#fcbdcd", "#2f685c", "#051f5a", "#0a2b5c", "#3a6d56", "#d59446", "#ec9a62", "#437051", "#175462", "#246160", "#bc8f34", "#777f36", "#4a724e", "#fdb0a7", "#ac8c2d", "#9d892b", "#fcbed2", "#28645f", "#f6a179", "#f39e70", "#50744b", "#95872c", "#0b2e5d", "#09285c", "#8d852d", "#fcaa95", "#fbc4e3", "#104160", "#a58b2b", "#6a7b3c", "#031c5a", "#386b58", "#144c62", "#fcad9e", "#32695a", "#b48e30", "#124961", "#d29343", "#205e61", "#e59858", "#ef9c67", "#fba78c"] }, xa = Re([0, $n.batlowS.length - 1]).range($n.batlowS), Tn = I.L, Jr = V().domain([-Tn / 2, Tn / 2]), jr = V().domain([-Tn / 2, Tn / 2]);
var ct, Ae;
const _g = (t, n) => {
  const e = n.display_size.width, r = n.display_size.height;
  Jr.range([0, e]), jr.range([0, r]), t.selectAll("#origin").remove(), ct = t.append("g").attr("id", "origin").attr("transform", "translate(" + Jr(0) + "," + jr(0) + ")").selectAll("." + z.cell).data(L, (a) => a.id).enter().append("circle").attr("class", z.cell).attr("cx", (a) => a.x).attr("cy", (a) => a.y).style("fill", (a) => xa(a.type)).attr("r", (a) => a.r), Ae = Zl(L).velocityDecay(k.simulation.velocityDecay).force("x", Jl().strength(k.simulation.attractionStrenth)).force("y", jl().strength(k.simulation.attractionStrenth)).force("collide", Gl().radius((a) => a.r).iterations(k.simulation.iterations)).on("tick", vg);
}, mg = (t, n) => {
  ct = ct.data(L, (r) => r.id), ct.exit().remove();
  let e = ct.enter().append("circle").attr("class", z.cell).attr("cx", (r) => r.x).attr("cy", (r) => r.y).style("fill", (r) => xa(r.type));
  e.transition().duration(500).attr("r", (r) => r.r), ct = ct.merge(e), Ae.nodes(L), Ae.alpha(1).restart();
};
function vg() {
  ct.attr("cx", (t) => t.x).attr("cy", (t) => t.y);
}
const Sn = Re([0, $n.batlowS.length - 1]).range($n.batlowS), U = V().range([0, k.plot.blob_plot_width]), Nn = xf().range([0, -65]), ba = Ua(U).tickFormat("");
Ya(Nn).tickFormat("");
const wg = (t, n) => {
  Nn.domain([1, 400]), U.domain([0, 2]);
  const e = n.position(k.plot.blob_plot_anchor.x, k.plot.blob_plot_anchor.y);
  t.selectAll("#blobplot").remove();
  const r = t.append("g").attr("class", z.plot).attr("transform", "translate(" + e.x + "," + e.y + ")").attr("id", "blobplot");
  r.append("text").text(k.plot.blob_plot_xlabel).attr("transform", "translate(" + U(1) + ",70)").attr("class", z.xlabel), r.append("g").call(ba).attr("class", z.xaxis);
  let i = r.selectAll("." + z.dot).data(it).enter().append("g").attr("class", z.dot).attr("transform", function(o) {
    return "translate(" + U(o.f) + ",0)";
  });
  i.append("circle").attr("class", z.bigcircle).attr("r", function(o) {
    return -Nn(o.n);
  }).style("fill", function(o, s) {
    return Sn(s);
  }), i.append("circle").attr("class", z.smallcircle).attr("r", 3).style("fill", function(o, s) {
    return Sn(s);
  });
  const a = _a(it, (o) => o.f * o.n / L.length);
  r.append("circle").datum(a).attr("class", z.mf).attr("r", k.plot.mf_size).attr("transform", function(o) {
    return "translate(" + U(o) + ",0)";
  });
}, xg = (t) => {
  let n = t.select("." + z.plot).selectAll("." + z.dot).data(it), e = n.enter().insert("g", "." + z.mf).attr("class", z.dot);
  e.append("circle").attr("class", z.bigcircle), e.append("circle").attr("class", z.smallcircle), n.merge(e), n.attr("transform", function(i) {
    return "translate(" + U(i.f) + "," + (i.n == 0 ? 20 : 0) + ")";
  }), n.select("." + z.bigcircle).attr("r", function(i) {
    return i.n == 0 ? 0 : -Nn(i.n);
  }).style("fill", function(i, a) {
    return i.n == 0 ? "white" : Sn(a);
  }), n.select("." + z.smallcircle).attr("r", function(i) {
    return i.n == 0 ? 2 : 3;
  }).style("fill", function(i, a) {
    return i.n == 0 ? "white" : Sn(a);
  });
  const r = _a(it, (i) => i.f * i.n / L.length);
  if (t.select("." + z.plot).select("." + z.mf).datum(r).attr("r", k.plot.mf_size).attr("transform", function(i) {
    return "translate(" + U(i) + ",0)";
  }), rd(it, (i) => i.f).f > U.domain()[1]) {
    let i = U.domain(), a = (i[1] + i[0]) / 2;
    U.domain([a, a + i[1] - i[0]]), t.select("." + z.plot).selectAll("." + z.xaxis).transition().call(ba), n.transition().attr("transform", function(o) {
      return "translate(" + U(o.f) + "," + (o.n == 0 ? 20 : 0) + ")";
    });
  }
};
function bg(t, n, e) {
  ug(), mg(), xg(n);
}
function Ma(t, n, e, r) {
  sg(), _g(t, r), wg(n, e);
}
var Qr = {};
const Mg = (t, n) => {
  ht.value() == 1 ? Qr = gu(() => bg(t, n), k.simulation.delay) : Qr.stop();
}, Ag = (t, n, e, r) => {
  Gn.update(() => eg(n)), ht.update(() => Mg(t, n)), Xn.update(() => Ma(t, n, e, r));
}, $g = {
  name: "@explorables/repliselmut",
  title: "Repliselmut",
  subtitle: "An organic simulation of the replicator-mutator equation",
  description: "This explorable illustrates the basic mechanism of evolution. In a population of replicating species, species with the highest fitness dominate until mutations yield yet more fit species. The fitness of the entire population increases steadily.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function Tg(t, n = Aa) {
  const e = Wd(t, n), r = e.display, i = e.controls, a = e.grid;
  return ng(i, a), Ag(r, i, a, n), Ma(r, i, a, n), {
    halt() {
      ht.value() === 1 && ht.press(i);
    },
    reset() {
      ht.value() === 1 && ht.press(i), Gn.press(i), Xn.press(i);
    },
    config: n,
    meta: $g
  };
}
export {
  Aa as config,
  Tg as default,
  Tg as load,
  $g as meta
};
