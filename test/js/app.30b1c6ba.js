(function (e) {
  function t(t) {
    for (
      var n, r, c = t[0], l = t[1], o = t[2], u = 0, b = [];
      u < c.length;
      u++
    )
      (r = c[u]),
        Object.prototype.hasOwnProperty.call(a, r) && a[r] && b.push(a[r][0]),
        (a[r] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    d && d(t);
    while (b.length) b.shift()();
    return s.push.apply(s, o || []), i();
  }
  function i() {
    for (var e, t = 0; t < s.length; t++) {
      for (var i = s[t], n = !0, c = 1; c < i.length; c++) {
        var l = i[c];
        0 !== a[l] && (n = !1);
      }
      n && (s.splice(t--, 1), (e = r((r.s = i[0]))));
    }
    return e;
  }
  var n = {},
    a = { app: 0 },
    s = [];
  function r(t) {
    if (n[t]) return n[t].exports;
    var i = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = n),
    (r.d = function (e, t, i) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (r.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (r.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            i,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return i;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var o = 0; o < c.length; o++) t(c[o]);
  var d = l;
  s.push([0, "chunk-vendors"]), i();
})({
  0: function (e, t, i) {
    e.exports = i("cd49");
  },
  "006d": function (e, t, i) {
    "use strict";
    i("36e1");
  },
  "0cc0": function (e, t, i) {},
  "0de3": function (e, t, i) {
    "use strict";
    i("d9cb");
  },
  1153: function (e, t, i) {
    "use strict";
    i("a8d6");
  },
  "1f1f": function (e, t, i) {
    "use strict";
    i("bb18");
  },
  "24d6": function (e, t, i) {
    "use strict";
    i("ef30");
  },
  2970: function (e, t, i) {
    "use strict";
    i("e2ee");
  },
  3191: function (e, t, i) {},
  "31b9": function (e, t, i) {
    "use strict";
    i("8789");
  },
  "36e1": function (e, t, i) {},
  3826: function (e, t, i) {
    "use strict";
    i("6a4c");
  },
  "45e2": function (e, t, i) {
    "use strict";
    i("0cc0");
  },
  4674: function (e, t, i) {
    "use strict";
    i("526c");
  },
  4678: function (e, t, i) {
    var n = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function a(e) {
      var t = s(e);
      return i(t);
    }
    function s(e) {
      if (!i.o(n, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return n[e];
    }
    (a.keys = function () {
      return Object.keys(n);
    }),
      (a.resolve = s),
      (e.exports = a),
      (a.id = "4678");
  },
  "47d8": function (e, t, i) {
    "use strict";
    i("3191");
  },
  "4b48": function (e, t, i) {},
  "526c": function (e, t, i) {},
  5622: function (e, t, i) {
    "use strict";
    i("8e87");
  },
  "662a": function (e, t, i) {
    "use strict";
    i("7783");
  },
  6636: function (e, t, i) {},
  6871: function (e, t, i) {},
  "6a4c": function (e, t, i) {},
  "76c1": function (e, t, i) {},
  7783: function (e, t, i) {},
  "7a15": function (e, t, i) {
    "use strict";
    i("4b48");
  },
  8030: function (e, t, i) {},
  8789: function (e, t, i) {},
  8898: function (e, t, i) {
    "use strict";
    i("dfa3");
  },
  "8dcb": function (e, t, i) {
    "use strict";
    i("6636");
  },
  "8e87": function (e, t, i) {},
  "979f": function (e, t, i) {
    "use strict";
    i("6871");
  },
  a162: function (e, t, i) {},
  a766: function (e, t, i) {},
  a8d6: function (e, t, i) {},
  bb18: function (e, t, i) {},
  c038: function (e, t, i) {
    "use strict";
    i("a162");
  },
  cd49: function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i("7a23");
    const a = { id: "app", class: "pb-10" };
    function s(e, t, i, s, r, c) {
      const l = Object(n["H"])("router-view"),
        o = Object(n["H"])("base-page");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", a, [
          Object(n["k"])(o, null, {
            default: Object(n["W"])(() => [Object(n["k"])(l)]),
            _: 1,
          }),
        ])
      );
    }
    const r = { class: "container mt-8 mb-4 pt-2" };
    function c(e, t, i, a, s, c) {
      const l = Object(n["H"])("page-title");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["h"])("div", r, [Object(n["k"])(l)]),
            Object(n["G"])(e.$slots, "default"),
          ],
          64
        )
      );
    }
    const l = { class: "header", role: "banner" },
      o = { class: "header__inner" },
      d = { class: "header__logo" },
      u = Object(n["h"])(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 30.7 46.8" },
        [
          Object(n["h"])("path", {
            d: "M22 28.6l-.2.2c-.2 0-.3 0-.3-.1v-.2c0-.1.1-.2.1-.2h.2c.1 0 .1 0 .2.1v.1c-.1 0 0 .1 0 .1zm7.1 5.5c.1-.1.1-.2.3-.3v-2h-2.6c.1-.1.2-.1.2-.1.9-.7 1-1.5 1.1-2.6l.3-4.1c.1-1 .1-2-.8-2.8-.7-.6-1.7-.7-2.6-.8.1.2.2.5.2.7 0 .4 0 .8-.1 1.2l.3.2.2.5s-.1-.1-.2 0v.3l.1.1h-.2v.2l-.1-.1h-.1c0 .1.1.1.1.2s0 .1.1.2c.1.3.2.6.2.9v1c0 .3-.2.7-.4 1l-.1.1-.1 1.1c-.1.8-.3 1-1 1h-.3l.1-1.4c-.3.1-.6.1-.8 0-.5-.1-1-.2-1.4-.6-.4-.3-.7-.7-.9-1.1 0 .1-.1.1-.1.1l-.2 2.2c0 .4-.1.7-.5.8l-.1 1.9h.2c.1 0 .1.1.2.1v-.1l.6.1v.4c.2.1.5.3.7.4 1.2.6 2.6 1 3.9 1.2l-.6-1.6H26s.1 0 .2-.1v1.5l.3.3c.5 0 .7.1 1.2.1l-.2.2c-.4 0-.5 0-.9-.1v1.9l1.9-1.8-1 3.8h.1l1-3.8.8 2.5-1.5 1.5 1.5-1.3v-2.8c-.8 0-.7-.1-.3-.2zM18.5 6.7l.1-.3h-.3l-.1.1c-.1 0-.2 0-.3.1-.1 0-.2 0-.3-.1 0 0 0-.1-.1-.2h-1.4v1.1c0 .4.1 1.1-.6 1.1v.2c.3.1.6.1.9.2.3.1.7.2 1 .3l.6.3.6.3.1.1c.1-.1.2-.1.3-.2V7.6h-.3v-.1s.1-.1.2-.1h.1v-.5c-.1.1-.2.1-.4.1.1 0 0-.1-.1-.3zm.7 3.7l-1.6.1.9-.3c-.4-.1-.8-.3-1.2-.3-.6-.1-1.2-.2-1.7-.3 0 .3-.1.5-.1.8v.2h-.2c0-.1.1-.2.1-.4v-.6c-.9 0-1.9.1-2.8.3v.1c.5.5 1.4.7 2.4.8l.1 3.1h.1l.2-.6.3-.5-.3.6v.2l-.4.6v.4c.1 0 .1 0 .2-.1l.3-.3-.3.5v.3l2.1-.1-.1-1.6c0-.4.1-.7.5-.7l.1 2.1c.3-.4.5-.8.7-1.3.4-1 .7-1.9.7-3zM8.6 24.5c-.1 0-.1 0 0 0v-.2c-.1 0-.3.1-.5.1-.3 0-.4.2-.4.4l.3.1c0-.2 0-.3.2-.2h.3c-.7 1.1-1.1 2.3-1.4 3.6h-.2c-.1 0-.2.1-.2.2-.1.1-.2.1-.3.2h-.1v.1c.3-.1.5 0 .6 0v.1l-.1.1-.2.2.3.1c0 .1 0 .3-.1.4v.5c.1.2.2.3.4.4.3.3.7.5 1 .6.2-.8.6-1.6 1.1-2.3.1-.1.2-.3.4-.4v-.1l.3-4.9c0-.3.1-.6.2-.8-.2.1-.3.2-.5.4l-.7.7c-.1.2-.2.5-.4.7zm-.4-.7c-.1 0-.2.1-.3.2-.1.1-.2.1-.3.1l.1.1h.4s.1-.1.2-.1l.1-.1v-.1l-.2-.1zm-.2-.1l.1-.2h-.3s-.1.1-.1.2c0 0 .1 0 .2.1 0-.2.1-.2.1-.1zm-1 2.4s-.1.1-.2.1h-.3v.2H7l.3-.2-.1-.2c-.1 0-.2 0-.2.1zm-.3-1.5c.1 0 .2 0 .3-.2l-.1-.1-.3.2h-.1v.2c.1 0 .1 0 .2-.1zm-.6 7.6l.2.2-.4-.4h-.2c-.1.1-.1.1-.2.1h-.3l-.3-.2c-.1 0-.1 0-.2.1v.1s-.1.1-.1 0c-.1 0-.1 0-.1.1s0 .1.1.2c.1 0 .1.1.2.1l-.2-.3c-.1 0-.1 0-.1.1s0 .1.1.1h-.1c.7.8 1.4 1.4 2.2 1.8.1-.1.2-.1.4-.1.4 0 .5.2.6.5.5.1 1.1.2 1.6.2l-.1.1c-.3 0-.6 0-.9-.1-.2 0-.4-.1-.6-.2 0 .2.1.4.1.6v.2h3.3v-.8H11c-.2.1-.5.1-.7.1s-.5.1-.7.1c0 0 .1 0 .1-.1.5 0 1-.1 1.5-.2v-1.7c-.3-.2-.6-.4-1-.5 0 .1 0 .1.1.1h-.1s-.1.1 0 .1c0 .1 0 .1.1.1H10l-.1.1s0 .1.1.1c-.1-.1-.2-.1-.2-.1h-.2s-.1 0-.1-.1h-.2c0-.1 0-.1-.1-.1s-.1 0-.2-.1v-.1s-.1 0-.1-.1l-.1-.2v-.2c-.2 0-.3-.1-.5-.1h-.2c-.1 0-.1.1.1.2-.1 0-.1 0-.1-.1 0 0 0-.1-.1-.1-.2-.1-.4-.1-.6 0s-.4.1-.6 0l-.1.1c0 .1 0 .1-.1.2l.4.2.3.2-.4-.2h-.1l-.6-.4c-.2.1-.2.2-.1.4zm-2.1.2c0 .1 0 .1 0 0-.1.1-.1.1 0 0-.1.1-.2.1-.2.1-.1.4-.2.9-.1 1.3.1.5.3 1 .6 1.4.5.7 1.1 1.3 1.9 1.6s1.6.4 2.5.4c.2 0 .4-.1.5-.1.2 0 .3-.1.5-.1v.1c.1 0 .2.1.3.1.1.1.2.1.3-.1l-.1-.2c-.1.1-.1.1-.2.1h-.1c0-.1-.1-.1-.1-.1.1 0 .2-.1.3-.1-.7-.4-1.8-.7-2.6-1-.3-.1-.8-.2-1-.4s-.2-.4-.2-.6.1-.4.2-.6c-.4-.2-.9-.5-1.2-.8-.4-.3-.7-.7-1.1-1.1l-.2.1c0-.1 0-.1 0 0 .1 0 .1.1 0 0 .1 0 .1 0 0 0zm-.4 1.4v-1.1c-.5.5-.7 1.1-.7 2.1v.2c0 2.4 1.2 2.9 3.3 3.5 1 .2 1.7.3 1.7 1.5 0 .4-.2.9-.7.9-.3 0-.5-.1-.6-.4-.1-.2-.1-.7-.1-1.4H3.1v3c1.1.9 2.6 1.2 4.1 1.2 3.3 0 4.3-1.6 4.3-3.8v-.1c0-.5-.1-1.1-.3-1.5 0-.1-.1-.2-.2-.3h-.2c-.1 0-.1-.1-.2 0v.1h.2l.1.1-.6.1-.1-.1h-.1v.1h-.4c-1.1 0-2.1-.3-3.1-.7s-1.9-1.1-2.5-2.1c-.2-.4-.4-.8-.5-1.3zm6.1 3.6c.2.1.2.1.3.1s.1 0 .2.1v-.1c-.1-.1-.1-.1-.2-.1h-.1c-.1-.1-.2-.1-.2 0zm.1.2c-.1.1 0 .1 0 0 0 .1 0 .1.1.2 0 0 .1 0 .1-.1 0 0 0-.1-.1-.1-.1.1-.1 0-.1 0zM6.4 26.8v.3c.1 0 .1-.1.2-.1.1-.1.4-.1.5-.1v-.2l-.1-.1c-.2.1-.3.2-.4.2h-.2zm.2 1.1c-.1.1-.2.1-.3.2v.2c.2 0 .3 0 .5-.1 0 0 .1-.1.2-.1.1-.1.1-.1.1-.2v-.1h-.2c-.1.1-.2.1-.3.1zm.5-2.4v.1h.1l.1-.1v-.1l-.2.1c.1 0 .1 0 0 0zm5.2 5.3h.2-.2zm-1.9-1.6c-.4 0-.6-.3-.6-.5l-.4.4c-.5.7-.8 1.4-1 2.1.5.2 1.1.3 1.7.3.9.1 2 0 2.9-.3v-.1c-.1-.1-.1-.1-.2-.1l.1-.1v-.1h-.1l.3-.3v-.1s-.1-.1-.2-.1c.2 0 .3 0 .4-.1 0 0 .1-.1 0-.1V30h.3l.2-.2c.1.1.1.1.3.1l.3-4.4c-1.1.4-2.1.9-3.1 1.6v-.2c.4-.3.8-.6 1.3-.8.5-.3 1-.5 1.4-.6.1 0 .2 0 .2-.1l-3.8-.3.2 2.2h.4l.2-.2s0 .1-.1.2v.5c0 .5 0 1.4-.7 1.4zm1.6 5.7v5c0 .4 0 .8-.4 1.1v2H20v-3.6c-.3-.2-.6-.3-.9-.5h-2.3v.4c0 .9 0 1.3-1 1.3h-.2v-2.3h2.2v-.4c-.6-.5-1.2-1.1-1.7-1.8h-.5v-.7c-.1-.2-.3-.4-.4-.6-.6-1-1-2-1.2-3.1h-2.4v2c.4.4.4.8.4 1.2zm7.8 4.1zm-2.3-1.3v-1.4h-1.4c.5.5.9 1 1.4 1.4zm-3.9-16.5c-1.1.3-2.1.8-3 1.4.1 0 .2-.1.3-.1.8.1.6 1 .6 1.5v.2l3.3.2.2-2.8-.9-.6c-.3.1-.4.1-.5.2zm1.1 8.5l-.1 1.9 2.9.2H14v.2c.3 1.1.7 2.2 1.4 3.1v-1h.2c.9 0 1 .3 1 1.1v.3h3.2v-3.4c-.2-.1-.4-.3-.7-.4h-.4l.1-1.9c-.4-.3-.3-.7-.3-1.1l.3-4.9c0-.4 0-.8.4-1l.1-1.9-3.9-.2-.1 1.9c.4.3.3.7.3 1.1l-.3 4.9c-.2.5-.2.9-.6 1.1zm3.4-11.4h-.3c0 .1-.1.1-.2.2l.1 1.7 3.7-.1-.1-1.7c-.4-.2-.3-.6-.4-.9v-.7c-.3.2-.5.5-.9.7-.5.3-1.2.6-1.9.8zm4.5 3.3c-.4-.2-.9-.4-1.4-.5l-1-.1-.1 1.7s.1 0 .1.1h.1c0 .1 0 .1.1.1s.1 0 .1.1v.1l.1.1.1.2v.3l.7-.1c.1 0 .1-.1 0-.1 0 0 .1 0 .1.1v.1c.2.1.4.1.5 0 .2-.1.4 0 .5.1l.1-.1s0-.1.1-.1l-.3-.2-.3-.2.3.2h.1l.5.4s.1-.1 0-.2c0-.1-.1-.1-.1-.2l.3.4h.1l.1-.1h.3l.2.2h.2v-.1h.2c0-.1 0-.1-.1-.1s-.1-.1-.1-.1l.2.1h.1v-.1c-.6-1.1-1.2-1.6-1.8-2zm.5 3c0-.1 0-.1 0 0 0-.1 0-.1-.1-.2h-.1c0 .1-.1.1-.1.2l-.7.3.1-.1h.1v-.1h.1l.2-.1v-.2h-.2l-.8-.1h-.2l-.2.1h-.4c-.1 0-.2 0-.3.1l-.1.9c.5 0 1 0 1.6-.1s1.1-.3 1.7-.6c.1 0 .2-.1.2-.2v-.1h-.1c-.1 0-.1-.1-.2 0h-.2v-.1h-.1c-.1.2-.1.2-.2.3zm.3 1.5c-.1.1-.1.1 0 0-.1 0-.1 0 0 0-.1 0-.1 0 0 0zm-.5 1.3l-.2.1-.1-.2c0-.1.1-.1.2-.1l.1.1v.1zm-.5-.9l-.1.1h-.2s0-.1-.1-.1l.1-.2h.1c.2 0 .2.1.2.2zm-.5 0l-.1.1-.4.1.3-.4h.2v.2zm1.6 1.9l.2-3.4c-.2.2-.5.3-.8.5s-.8.3-1.3.4h-1.3v.4c.1.4.3.7.6 1s.6.6.9.8l.6.3c.2.1.4.1.7.1.2 0 .3 0 .4-.1zm1.4-7l-3.3-.3c.1 0 .3.1.4.1l.6.3c.4.2.7.5 1 .7.3.3.6.6.8 1h.2s0-.1 0 0h.1c.2-.4.2-.8.2-1.2.2-.2.1-.4 0-.6zm.1 3.2v.8h-.1l-.1 2.3.2-.2c.2-.5.3-1 .3-1.6 0-.5-.1-.9-.3-1.3zm1.4-8l-3 .1v1.2h.1c.1 0 .2 0 .3.1l.2-.6.3-.5-.3.6v.2l-.6 1v.1c.1.1.2.1.4-.1l.3-.3-.5.5c0 .1 0 .2.1.3.1.1.1.2.2.3.5.3 1 .5 1.6.6.6-.7 1.1-1.3 1.4-2-.1-.1-.2-.1-.3-.2-.1-.3-.1-.8-.2-1.3zm-2.9 21.7v-.6l-.4-.1c-.1 0-.2 0-.3-.1l-.1.3.1.1-.1.2h-.1v.1l.6.1-.2 1-2.2-.6.2-.9.6.1v-.1h-.1l.1-.2h.1l.1-.3c-.1 0-.2 0-.3-.1l-.3-.1-.2.6h-.2v2c.9.3 1.8.5 2.7.6v-2zm-.2-.8l.4.1-.1.5v.1l.6.2.5-2-.6-.2-.2.6-.4-.1c0 .1-.2.3-.2.3s.1.3 0 .5zm-1.5-2.2l.6.2-.1.4c.2 0 .4.2.4.2s.2-.1.4 0l.1-.4.6.1.2-.6-2-.5-.2.6zm.8 2.7l-.8-.2-.1.3-.6-.2-.2.7 2 .5.2-.6-.6-.1.1-.4zm-.7-.5c.2-.1.2-.3.2-.3s-.1.1-.2.1v.2zm.7-.3s-.1.2.1.4l.1-.3c-.1 0-.2-.1-.2-.1zm-1.8.3l.2-.6.4.1c0-.2.2-.4.2-.4s-.1-.2 0-.4l-.4-.1.2-.6-.6-.2v2.2zm0-2.2l.8.2-.1.6.3.1c.1-.1.4 0 .4 0s-.1-.2.1-.3l.1-.3-.6-.1.2-.9 2.2.6-.2 1-.6-.1-.1.3c.1.1 0 .3 0 .3s.2 0 .3.1l.3.1.1-.6.9.2-.6 2.2-.7-.2.7 1.7.6 1.6.6 1.4h3.4v-3.9l-.4.4-.8-.8-.1.1.2.1-.2.5-.4-.1.5 1.2-.5-.1-.2-.4v.8l-.7.6-.3-.8.3-.7-.3.2-.6-.1 1-.8-.4-.1.1-.6.3.1v-.2l-1.1.3-.5-1.7 1-1-.8-2.1h-.1c-.9-.1-1.6-.3-2.2-.5s-1.2-.4-1.8-.7c-.2-.1-.5-.3-.7-.4v1.2c.4.3.4.7.4 1.1v.5h.2zm8.2 2.9v.2l-.2-.2-.2.1.1-.2-.1-.2.2.1.1-.2v.3-.6l-1.7 1.4v.1h.1l.3-.3.8.8.5-.6v-.2l.1-.5zm-.8-3.2l-.8 3.3h.1l1.4-1.4-.7-1.9zM26 40.1l.6-.5.1-.2-.7.7zm.9-.1l-.3-.1-.4.9.2.6.5-.4v-1zm-1.2-2.6l-.2.1.1-.2-.2-.2.2.1.1-.2v.3l.2.1h-.2v.3-.3zm-.3 1.3l1.1-.3.1.4h.1v-.1l-.9-2.3-.8.8.4 1.5zm1.4-.4l-.6-1.9v.4l.6 1.5zm1-3.3l-1.5 1.4.6 1.9h.1l.8-3.3zm-.5 5.5h.2l-.4-1-.1.3.3.7zm.1 3.3h-.6v3h.7v-1.5l.9 1.5h.6v-3h-.7v1.5l-.9-1.5zm-1.2 0h-2v3h2v-.6h-1.3v-.5H26v-.6h-1.1v-.5h1.3v-.8zm-5.8-.7h3.5v-2l-.1-.1c-1-.3-2-.6-2.9-1 0 .4 0 .8-.4 1.1l-.1 2zm2.2 1.3c.2 0 .3.1.3.3s-.1.3-.3.3h-.4v-.6h.4zm.1-.6h-1.2v3h.7v-1.1h.2l.5 1.1h.8l-.6-1.2c.2-.1.5-.4.5-.8.1-.6-.3-1-.9-1zm-1.7 0h-2v3h2v-.6h-1.3v-.5h1.1v-.6h-1.1v-.5H21v-.8zm-3.7.6c.2 0 .3.1.3.2.1.1.1.2.1.7s0 .6-.1.7c-.1.1-.2.2-.3.2H17v-1.7h.3v-.1zm.1-.6h-1.1v3h1.1c.3 0 .6-.1.8-.3.3-.3.3-.7.3-1.2s0-.8-.3-1.2c-.2-.3-.5-.3-.8-.3zm-3.4 0h-.6v3h.7v-1.5l.9 1.5h.6v-3h-.7v1.5l-.9-1.5zm-2.5 1.9l.3-.8.2.8h-.5zm0-1.9l-1.1 3h.8l.1-.4h.9l.1.4h.8l-1.1-3h-.5zm-2.7 1.9l.3-.8.2.8h-.5zm-.1-1.9l-1.1 3h.8l.1-.4h.9l.2.3h.8l-1.1-3-.6.1zm-2.4 0h-.7v3h2v-.6H6.4l-.1-2.4zm-2.8 0h-.8l1 3h.5l1-3h-.8l-.5 1.7-.4-1.7zm-.9-17.6v.1c.1 0 .1-.1 0-.1zm-.2.7v.1-.1zm-.1-.2v.1h.1l-.1-.1zM3.4 25c.1 0 .1 0 0 0 .1 0 .1 0 0 0zm.4-6.2c-.6 0-.6-.7-.6-.7l-.1-4.4c0-.1-.1-.7.6-.8.6 0 .6.7.6.7l.2 4.4c-.1.1 0 .8-.7.8zm-.2 5c.1.3.3.6.5.9-.1.1-.3.2-.5.3.2-.1.3-.1.5-.3.1.1.2.3.3.4h-.1c-.1.1-.3.2-.5.2-.3 0-.6-.4-.6-.8 0-.3.1-.6.4-.7zm0 2.4c0 .1.1.1.1.1v.1h-.1v-.2zm.6-3.9c-.1-.2-.3-.5-.3-.7s.1-.3.2-.4l.3.4c.1.1.1.2.1.3-.1.2-.2.4-.3.4zm.4-.4c0-.1-.1-.1-.1-.2-.1-.1-.2-.3-.3-.4l.1-.1c.2 0 .3.2.3.4v.3zm0 1.4c.1-.1.1-.2.2-.3h.1v-.1c.3-.4.5-.8.5-1.2 0-.5-.3-.8-.6-1 .2 0 .8-.1 1-.2.8.8.7 1.7.7 2.2v.2H5.3v.5h.2c.1 0 .2.1.2.3 0 .1 0 .3-.2.4l-.2.2c-.1-.2-.3-.5-.4-.7v-.5c0 .1-.1.3-.1.4l-.2-.2zm1.1 1.3s0-.1 0 0c0-.1 0 0 0 0zm.2-.1c.1 0 .1 0 .1.1s0 .1.1.2c0 .1 0 .1.1.2h-.1c-.1-.1-.1-.1-.1-.2-.1-.2-.1-.2-.1-.3zm.2.1v-.1c-.1 0-.1 0-.1-.1v-.1s0-.1-.1-.1v-.1H6v.1l.1.1v.1l.1.1-.1.1c.1.1.1 0 0 0zm.1.1c.1 0 .1 0 0 0 .1 0 .1.1 0 0zm.1-.3c-.1-.1-.1-.1 0 0-.1-.1-.1-.1 0 0l-.1-.1v-.1l-.1-.1L6 24v-.1h.1v.2s0 .1.1.1c0 0 0 .1.1.2 0-.1 0-.1 0 0zm0-.6zm0-.3s.1 0 .1-.1l-.1.1zm.1.6s-.1-.1 0 0l-.1-.1h.1v.1c0-.1 0 0 0 0zm.1-.2c0-.1.1-.1 0 0 .1 0 .1 0 0 0l.1.1-.1-.1c0 .1 0 0 0 0zm.1-.5v-.1.1zM4.4 10.8h-.9c-2.1.1-3.6.7-3.5 3.1L.1 18c.1 2.4 1.1 2.9 3.1 2.9-.2.2-.3.5-.3.9s.1.7.2 1.1c-.5.3-1.1.8-1.1 1.7 0 .7.3 1.4 1.1 1.6-.2.2-.3.4-.4.7-.1.1-.1.3-.1.6 0 .2.1.4.1.5.1.2.2.4.3.5.1.2.3.3.5.4s.4.2.7.2c.4 0 .8 0 1.2-.2.3-.2.6-.5.7-.8.1-.2.1-.3.1-.5s-.1-.3-.2-.5l-.3-.3c-.1 0-.2-.1-.4-.1h-.1v.1c.1 0 .2.1.3.1.1 0 .2.1.3.1.2.1.3.3.4.5 0 .2 0 .4-.1.6-.1.3-.4.5-.7.6-.3.2-.7.3-1 .2-.3 0-.6-.1-.8-.3-.2-.2-.4-.4-.5-.6s-.1-.4 0-.6c0-.2.1-.3.2-.5s.2-.3.4-.4c.1-.1.2-.2.3-.2l-.1-.1v-.1H4v.4l.1-.1-.1-.2h.1c0 .1.1.1.1.2.1 0 .1-.1.1-.1.1 0 .1-.1.2-.1v-.1h.1v.1l.1-.1h.1v.1H5v-.1h.2c.3.3.7.4 1 .4s.6-.1.7-.4c0 0 .1-.1.2-.1l.1-.1c0-.1-.1-.1-.2-.1 0-.1.1-.2.1-.4v-.3h-.6v.3c0 .2-.1.3-.3.3-.1 0-.3-.2-.4-.4v-.1l.1.1c0 .1.1.1.1.2h.1v-.2l-.1-.1s0-.1-.1-.1V25s-.1 0-.1-.1v-.1c.1 0 .1.1.1.1v.2l.1.1.1.1.4-.4c.1-.1.2-.2.2-.3l.5-.5h.2l.1-.1-.1-.1.2-.2.2-.2c1.5-1.1 3.2-1.8 5-2.2.2-.1.5-.1.8-.1-.3-.2-.7-.3-1-.4.4-.1.8-.2 1.2-.4-1.3-.1-2.5-.4-3.7-.9-.7-.3-1.4-.6-2-1.1.1.7.3 1.3 1 1.8.1.1.3.1.5.2-.6.1-1.2.2-1.7.6-.6.4-.9 1.1-1 1.7-.1-.3-.1-1.4-.8-2 1-.4 1.6-1.2 1.5-2.8v-.5c-.4-.4-.8-.8-1.1-1.3-.4-.6-.7-1.3-.9-2-.2-.7-.2-1.5 0-2.2l-.5-.2-.7-.9zm6.4 2.6c0-.4-.1-.7.3-1l-.1-1.7H9.6s0 .1-.1.1c0 .1 0 .2-.1.3l.6.2.6.4-.6-.3h-.2l-1-.6c-.1 0-.1.2.1.4l.3.3-.7-.6c-.1 0-.2 0-.3.1s-.2.1-.3.2h-.2l-.3.1-.1-.1.1 1.4c.2.1.3.3.3.5.7.6 1.5 1.1 2.2 1.4l.9.3v-1.4zM6 11.8c0 .1 0 .1 0 0h-.3c-.2.7-.3 1.5 0 2.3.2.8.5 1.5 1 2.1.2.3.5.6.7.8l-.1-3.3c0-.8-.2-1.4-.6-1.9l-.1-.1h-.5c0 .1 0 .1-.1.1.1 0 .1 0 0 0zm-.4-2.5V7.4c0-.2.1-.5.1-.7H4v2.7c.5.4 1.2.7 1.8.9 0-.4-.1-.7-.2-1zm5.8-5.8V1.1C10.3.3 9.1 0 7.7 0c-.9 0-1.9.1-2.6.6-.8.6-1 1.2-1.1 2.2V3c0 1.8.7 2.5 2.1 2.9.1-.1.1-.3.2-.4.4-.6.9-1.1 1.5-1.4l.6-.3h-.1c-.3-.1-.7-.2-.9-.4-.2-.2-.2-.4-.2-.6 0-.4.2-.7.6-.7.6 0 .6.6.6 1.1v.2l3 .1zm-.6 2.6c0 .1-.2.2-.4.2 0 0-.1 0-.1-.1v-.4l.1-.1h.1l.3.4zM9.6 8.4l-.1.1c-.1 0-.1 0-.1-.1.1-.1.1-.1.2 0 0-.1 0-.1 0 0zM7.2 9c0 .1-.1.1-.2.1h-.1L6.8 9v-.1s.1-.1.3-.1c0 0 .1 0 .1.2zm-.4.3l.2.2c0 .2-.4.4-.5.4s-.3 0-.5-.1v-.1c.1 0 .5-.2.6-.3-.1 0 0-.1.2-.1zm4.8-2.1c0-.5-.1-1-.2-1.4-.1-.4-.4-.7-.8-1-.5-.4-1.3-.6-2-.8-.4.1-.8.2-1.1.4-.6.4-1.1.9-1.4 1.6.2.1.5.2.8.2.9.2 1.5.3 1.5 1.4 0 .4-.2.8-.6.8-.2 0-.5-.1-.6-.3s-.1-.7-.1-1.3H5.8c-.2.7-.3 1.5-.1 2.4.1.4.1.8.3 1.2.6.1 1.1.2 1.7.2.4 0 .8 0 1.1-.1.5-.4.9-.7 1.4-.9l.9-.3c.2-.3.3-.7.4-1.2-.2 0-.3-.2-.3-.5l.2-.2h.1c.1-.1.1-.1.1-.2zm.3 3.6c-.1 0-.1 0-.2-.1h-.1l.1 1.7c.4.2.4.6.4.9l.1 1.7c.7.1 1.4.2 2.1.1l-.1.1c-.5 0-1 0-1.5-.1-.2 0-.4-.1-.5-.1l.1 2.6c0 .2 0 .7-.6.7s-.6-.5-.6-.7l-.1-3-.9-.3c-.7-.3-1.5-.7-2-1.2-.1 0-.1-.1-.2-.1v.3l.1 3.9v.5c.5.3.9.6 1.5.8 1.3.4 2.6.6 4 .5.3-.1.6-.1.9-.2.1 0 .3-.1.5-.1.2-.5.2-1 .2-1.6l-.1-1.9h-.4s.1 0 .1-.1c.1 0 .2 0 .3-.1l-.1-1.9c0-.4 0-.8.2-.9v-.7h-.2l-.1.1s0 .1.1.2c-.1-.1-.3-.2-.4-.2h-.2s-.1 0-.2-.1l-.3.1c0-.1 0-.2-.2-.2-.1 0-.2 0-.3-.1v-.1s-.1 0-.1-.1l-.1-.3v-.3h-1.2c-.1.2-.1.3 0 .3zm1.2-3.6l-.5.8-.4-.1-.3-.4v-.1s.1-.1.1-.2l.8-.3h.1c.1.2.1.2.2.3zm.6-1.2c-.5-.5-1.1-1-1.8-1.3v2.2c0 .7 0 1.4.2 2 .2 0 .3-.1.5-.1 1-.1 1.9-.1 2.8 0 0-.1 0-.2-.1-.3s-.2-.3-.2-.5v-.1c-.4-.7-.8-1.4-1.4-1.9zm5.6-1.8V1.4C18.3.7 17 .3 15.8.2s-2.3.2-3 .7-.8 1.3-.9 2.1c.3 0 .5 0 .6.2 0 .1.1.3 0 .4 0 .2-.1.3-.2.4h-.5c.3.1.7.3 1 .5.8.6 1.5 1.2 2 2.1 0-.1.1-.1.1-.2l.1-3.1c0-.4-.1-1.1.6-1.1s.6.7.6 1.1v.6l3.1.3zm3.5 9.7c.4-1.2.6-2.4.5-3.6l-3.9.1v.3c-.1.6-.2 1-.3 1.4s-.2.8-.4 1.2c-.2.5-.5 1-.8 1.5l.1 2.7c0 .2 0 .5-.1.7.1 0 .2 0 .3-.1.8-.2 1.5-.5 2.1-1 .2-.2.4-.3.6-.5l-.1-4.1c.4 0 .5.2.6.7l.1 1.6h1c0-.4.2-.6.3-.9zm1.7-2zm3.5 1.4l2.3-.1-.1-2.3c-.9-.6-1.8-.8-2.8-.9.1.2.2.3.2.5l.3 1.2c.1.4.1.8.1 1.2 0 0 0-.1-.1-.1-.1-.8-.2-1.6-.5-2.4 0-.2-.1-.3-.2-.4h-.7c-.9 0-1.8.2-2.5.7-.3.2-.4.4-.6.6 0 .1.1.3.2.3v.2s-.1.1-.1.2c-.1.2-.1.4-.1.6-.1.2-.1.4-.2.6-.2.5-.4.9-.6 1.3h.9v-.1l-.1-.1h.1v.1c.4.9 1.3 1.2 2.7 1.5.5.1 1 .2 1.3.5.3-.9.4-1.8.4-2.7-.2 0-.4-.1-.5-.1-.3-.1-.7-.2-.9-.4s-.2-.3-.2-.5c0-.4.2-.7.6-.7.6 0 .6.6.6 1v.2l.5.1c-.1-.2-.1-.2-.1-.3l.1.3zm2.7 3.5c0-.5-.1-1-.3-1.4s-.4-.7-.8-.9c-.5-.3-1.1-.5-1.7-.6v.9c-.1.6-.2 1-.3 1.4 0 .1-.1.3-.1.4.1.2.2.4.2.7 0 .4-.2.8-.6.8h-.2c-.3.5-.6 1-.9 1.4-.2.2-.3.4-.5.6.5.1 1.1.1 1.6.1 2.9-.1 3.7-1.6 3.6-3.4z",
          }),
        ],
        -1
      ),
      b = { class: "ml-0 w-full h1" };
    function m(e, t, i, a, s, r) {
      const c = Object(n["H"])("router-link");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["h"])("header", l, [
              Object(n["h"])("div", o, [
                Object(n["h"])("div", d, [
                  Object(n["k"])(
                    c,
                    {
                      to: e.home(e.$route.meta.homescreen),
                      class: "cursor-pointer header__logo__inner",
                    },
                    { default: Object(n["W"])(() => [u]), _: 1 },
                    8,
                    ["to"]
                  ),
                ]),
              ]),
            ]),
            Object(n["h"])("h1", b, Object(n["K"])(e.$route.meta.title), 1),
          ],
          64
        )
      );
    }
    var p = Object(n["l"])({
        name: "PageTitle",
        setup() {
          const e = (e) => String(e);
          return { home: e };
        },
      }),
      v = i("d959"),
      j = i.n(v);
    const O = j()(p, [["render", m]]);
    var h = O,
      g = Object(n["l"])({ name: "BasePage", components: { "page-title": h } });
    i("1f1f");
    const y = j()(g, [["render", c]]);
    var f = y;
    const k = "IS_NO_DRIVER";
    var S = i("cbdf");
    const E = (e) => {
        const t = {
          id: e.group_admin_id ? e.group_admin_id : void 0,
          name: e.name ? e.name : void 0,
          fullInfo:
            (e.group_admin_id ? e.group_admin_id : void 0) && e.name
              ? `${e.name} - ${e.group_admin_id ? e.group_admin_id : void 0}`
              : void 0,
        };
        return t;
      },
      _ = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          group_admin_id: e.id ? e.id : void 0,
          name: e.name ? e.name : void 0,
        };
        return t;
      },
      T = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          firstName: e.first_name ? e.first_name : void 0,
          lastName: e.last_name ? e.last_name : void 0,
          birthDate: e.birth_date ? e.birth_date : void 0,
          email: e.email ? e.email : void 0,
          membershipNumber: e.membership_number ? e.membership_number : void 0,
          phoneNumber: e.phone_number
            ? e.phone_number.replace(/ /g, "")
            : void 0,
          scoutsGroups: e.scouts_group
            ? e.scouts_groups.map((e) => E(e))
            : void 0,
          city: e.city ? e.city : void 0,
          groupAdminId: e.group_admin_id ? e.group_admin_id : void 0,
          permissions: e.user_permissions ? e.user_permissions : [],
          postalCode: e.postal_code ? e.postal_code : void 0,
        };
        return t;
      },
      x = (e) => {
        const t = {
          first_name: e.firstName,
          last_name: e.lastName,
          birth_date: e.birthDate,
          email: e.email,
          membership_number: e.membershipNumber,
          responsible_phone_number: e.phoneNumber
            ? e.phoneNumber.replace(/ /g, "")
            : "/",
        };
        return t;
      },
      w = (e) => {
        const t = {
          id: e.id ? e.id.toString() : void 0,
          value: e.value ? e.value.toString() : void 0,
          label: e.label ? e.label : void 0,
        };
        return t;
      },
      I = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          value: e.value ? e.value : void 0,
          label: e.label ? e.label : void 0,
        };
        return t;
      },
      C = (e) => {
        const t = {
          city: e.city ? e.city : void 0,
          postalCode: e.postal_code ? e.postal_code : void 0,
          label:
            e.postal_code && e.city ? e.postal_code + " " + e.city : void 0,
        };
        return t;
      },
      D = (e) => {
        const t = {
          city: e.city ? e.city : void 0,
          postal_code: e.postalCode ? e.postalCode : void 0,
        };
        return t;
      },
      N = (e) => {
        const t = {
          id: e.id ? e.id.toString() : void 0,
          contentType: e.content_type ? e.content_type : void 0,
          url: e.url ? e.url : void 0,
          name: e.name ? e.name : e.filename ? e.filename : void 0,
          size: e.size ? e.size : void 0,
        };
        return t;
      },
      M = (e) => {
        const t = { id: e.id, label: e.label, value: e.value };
        return t;
      };
    var z = i("c1df"),
      A = i.n(z);
    const H = (e) => {
        console.log("INPUT: ", e);
        const t = {
          id: e.id ? e.id : void 0,
          startDate: e.start_date
            ? A()(e.start_date).format("YYYY-MM-DD")
            : void 0,
          startTime: e.start_date ? A()(e.start_date).format("HH:mm") : void 0,
          endDate: e.end_date ? A()(e.end_date).format("YYYY-MM-DD") : void 0,
          endTime: e.end_date ? A()(e.end_date).format("HH:mm") : void 0,
          comment: e.comment ? e.comment : void 0,
          responsibleMember: e.responsible_member
            ? T(e.responsible_member)
            : void 0,
          responsiblePhoneNumber: e.responsible_phone_number
            ? e.responsible_phone_number
            : void 0,
          group: e.scouts_group ? E(e.scouts_group) : void 0,
          totalCost: e.total_cost
            ? e.total_cost.toString().replace(".", ",")
            : void 0,
          nature: e.nature ? e.nature : void 0,
          location:
            e.city && e.postal_code
              ? C({ city: e.city, postal_code: e.postal_code })
              : void 0,
          eventSize: e.event_size
            ? "object" === typeof e.event_size
              ? w(e.event_size)
              : { id: e.event_size }
            : void 0,
          vvksComment:
            e.vvksm_comment && e.vvksm_comment.length > 0
              ? e.vvksm_comment
              : "",
          status: e.status ? M(e.status) : void 0,
          participant_list_file: e.participant_list_file
            ? N(e.participant_list_file)
            : void 0,
        };
        return t;
      },
      R = (e) => {
        const t = {
          start_date: e.startDate
            ? A()(e.startDate + "T" + e.startTime).format()
            : void 0,
          end_date: e.endDate
            ? A()(e.endDate + "T" + e.endTime).format()
            : void 0,
          comment: e.comment ? e.comment : void 0,
          responsible_phone_number: e.responsibleMember
            ? x(e.responsibleMember).responsible_phone_number
            : void 0,
          group: e.group ? _(e.group).id : void 0,
          group_group_admin_id: e.group ? _(e.group).id : void 0,
          scouts_group: e.group ? _(e.group) : void 0,
          total_cost: e.totalCost ? e.totalCost : void 0,
          nature: e.nature ? e.nature : void 0,
          postal_code: e.location ? D(e.location).postal_code : void 0,
          city: e.location ? D(e.location).city : void 0,
          event_size: e.eventSize ? I(e.eventSize).id : void 0,
          vvksm_comment: e.vvksComment ? e.vvksComment : void 0,
        };
        return t;
      };
    var B,
      q = i("bc3a"),
      V = i.n(q),
      L = i("58f2"),
      G = {
        state: () => ({ notifications: !1 }),
        getters: {},
        mutations: {
          SET_NOTIFICATIONS(e, t) {
            e.notifications = t;
          },
        },
        actions: {
          setNotifications({ commit: e }, t) {
            e("SET_NOTIFICATIONS", t);
          },
        },
      };
    (function (e) {
      (e["COMPLETED"] = "COMPLETED"),
        (e["GENERAL"] = "GENERAL"),
        (e["DETAIL"] = "DETAIL"),
        (e["TYPE"] = "TYPE");
    })(B || (B = {}));
    const P = (e, t) => {
        if (e.valid) return;
        let i = null;
        const { errors: n } = e;
        if (n) {
          const [e] = Object.keys(n);
          e &&
            (i ||
              (i = document.querySelector(
                "#" + t + ' input[name="' + e + '"]'
              )),
            i ||
              (i = document.querySelector("#" + t + ' span[name="' + e + '"]')),
            i || (i = document.querySelector("#" + t + " #" + e)));
        }
        i && ((i = i.parentElement), i && i.scrollIntoView());
      },
      K = () => {
        const e = Object(n["E"])(void 0),
          t = () => {
            e.value && (e.value.scrollTop = 0);
          },
          i = () => {
            window.scrollTo({ top: 0, behavior: "auto" });
          };
        return { formDiv: e, scrollToTop: t, scrollToTopOfPage: i };
      },
      Y = (e) => {
        const t = Object(n["E"])(!1);
        return (
          e &&
            Object(n["U"])(e, (e) => {
              e.dirty && (t.value = !1);
            }),
          { formSendWithSuccess: t }
        );
      };
    var U = {
      state: () => ({
        holderState: B.GENERAL,
        insuranceTypeState: Ze
          ? Ze.TIJDELIJKE_VERZEKERING_NIET_LEDEN
          : "TIJDELIJKE_VERZEKERING_NIET_LEDEN",
        generalInsuranceState: {},
        oneTimeActivityState: {},
        nonMemberState: {},
        travelAssistanceState: {},
        temporaryVehicleState: {},
        eventState: {},
        materialInsuranceState: {},
        isDriverOwnerState: k,
        isSubmittingState: !1,
      }),
      getters: {
        holderState(e) {
          return e.holderState;
        },
        generalInsuranceState(e) {
          return e.generalInsuranceState;
        },
        insuranceTypeState(e) {
          return e.insuranceTypeState;
        },
        getCurrentInsuranceState(e, t) {
          return e[Je[t.insuranceTypeState]];
        },
        getIsDriverOwnerState(e) {
          return e.isDriverOwnerState;
        },
        getIsSubmittingState(e) {
          return e.isSubmittingState;
        },
      },
      mutations: {
        SET_HOLDER_STATE(e, t) {
          e.holderState = t;
        },
        SET_INSURANCE_TYPE_STATE(e, t) {
          e.insuranceTypeState = t;
        },
        SET_GENERAL_INSURANCE_STATE(e, t) {
          e.generalInsuranceState = t;
        },
        SET_ONE_TIME_ACTIVITY_STATE(e, t) {
          e.oneTimeActivityState = t;
        },
        SET_NON_MEMBER_STATE(e, t) {
          e.nonMemberState = t;
        },
        SET_TRAVEL_ASSISTANCE_STATE(e, t) {
          e.travelAssistanceState = t;
        },
        SET_TEMPORARY_VEHICLE_STATE(e, t) {
          e.temporaryVehicleState = t;
        },
        SET_EVENT_STATE(e, t) {
          e.eventState = t;
        },
        SET_MATERIAL_INSURANCE_STATE(e, t) {
          e.materialInsuranceState = t;
        },
        SET_IS_DRIVER_OWNER_STATE(e, t) {
          e.isDriverOwnerState = t;
        },
        RESET_STATES(e) {
          (e.holderState = B.GENERAL),
            (e.insuranceTypeState = Ze.TIJDELIJKE_VERZEKERING_NIET_LEDEN),
            (e.generalInsuranceState = {}),
            (e.oneTimeActivityState = {}),
            (e.nonMemberState = {}),
            (e.travelAssistanceState = {}),
            (e.temporaryVehicleState = {}),
            (e.eventState = {}),
            (e.materialInsuranceState = {}),
            (e.isDriverOwnerState = k),
            (e.isSubmittingState = !1);
        },
        SET_IS_SUBMITTING_STATE(e, t) {
          e.isSubmittingState = t;
        },
      },
      actions: {
        setHolderState({ commit: e }, t) {
          e("SET_HOLDER_STATE", t);
          const { scrollToTopOfPage: i } = K();
          i();
        },
        setInsuranceTypeState({ commit: e }, t) {
          e("SET_INSURANCE_TYPE_STATE", t);
        },
        setGeneralInsuranceState({ commit: e }, t) {
          e("SET_GENERAL_INSURANCE_STATE", t);
        },
        setOneTimeActivityState({ commit: e }, t) {
          e("SET_ONE_TIME_ACTIVITY_STATE", t);
        },
        setNonMemberState({ commit: e }, t) {
          e("SET_NON_MEMBER_STATE", t);
        },
        setTravelAssistanceState({ commit: e }, t) {
          e("SET_TRAVEL_ASSISTANCE_STATE", t);
        },
        setTemporaryVehicleState({ commit: e }, t) {
          e("SET_TEMPORARY_VEHICLE_STATE", t);
        },
        setEventState({ commit: e }, t) {
          e("SET_EVENT_STATE", t);
        },
        setMaterialInsuranceState({ commit: e }, t) {
          e("SET_MATERIAL_INSURANCE_STATE", t);
        },
        setIsDriverOwnerState({ commit: e }, t) {
          e("SET_IS_DRIVER_OWNER_STATE", t);
        },
        resetStates({ commit: e }) {
          e("RESET_STATES");
        },
        setIsSubmittingState({ commit: e }, t) {
          e("SET_IS_SUBMITTING_STATE", t);
        },
      },
    };
    class F {
      deserialize(e) {
        if (
          ((this.baseUrl = e.baseUrl),
          (this.apiSuffix = e.apiSuffix),
          !this.baseUrl)
        )
          throw new Error("Config needs an api baseUrl and apiSuffix");
        return this;
      }
    }
    class W {
      deserialize(e) {
        return (
          (this.baseUrl = e.baseUrl),
          (this.serverBaseUrl = e.serverBaseUrl),
          (this.authEndpoint = e.authEndpoint),
          (this.logoutEndpoint = e.logoutEndpoint),
          (this.clientId = e.clientId),
          (this.tokenEndpoint = e.tokenEndpoint),
          this
        );
      }
    }
    class X {
      deserialize(e) {
        return (
          e.api && (this.api = new F().deserialize(e.api)),
          e.oidc && (this.oidc = new W().deserialize(e.oidc)),
          this
        );
      }
    }
    var Z,
      J = {
        state: () => ({ config: new X() }),
        getters: {
          config(e) {
            return e.config;
          },
        },
        mutations: {
          SET_CONFIG(e, t) {
            e.config = t;
          },
        },
        actions: {
          setConfig({ commit: e }, t) {
            e("SET_CONFIG", t);
          },
        },
      };
    (function (e) {
      (e["ONE"] = "ONE"),
        (e["TWO"] = "TWO"),
        (e["THREE"] = "THREE"),
        (e["FOUR"] = "FOUR"),
        (e["FIVE"] = "FIVE");
    })(Z || (Z = {}));
    var $ = {
        state: () => ({ claimHolderState: Z.ONE, claimState: {} }),
        getters: {
          claimHolderState(e) {
            return e.claimHolderState;
          },
        },
        mutations: {
          SET_CLAIM_HOLDER_STATE(e, t) {
            e.claimHolderState = t;
          },
          SET_CLAIM_STATE(e, t) {
            e.claimState = t;
          },
          RESET_STATES(e) {
            (e.claimHolderState = Z.ONE), (e.isSubmittingState = !1);
          },
        },
        actions: {
          setClaimHolderState({ commit: e }, t) {
            e("SET_CLAIM_HOLDER_STATE", t);
            const { scrollToTopOfPage: i } = K();
            i();
          },
          setClaimState({ commit: e }, t) {
            e("SET_CLAIM_STATE", t);
          },
          resetStates({ commit: e }) {
            e("RESET_STATES");
          },
        },
      },
      Q = i("5502"),
      ee = {
        state: () => ({ user: {}, loaded: !1 }),
        getters: {
          isLoaded(e) {
            return e.loaded;
          },
          user(e) {
            return e.user;
          },
        },
        mutations: {
          SET_USER(e, t) {
            e.user = t;
          },
          SET_LOADED(e, t) {
            e.loaded = t;
          },
        },
        actions: {
          setUser({ commit: e }, t) {
            e("SET_USER", t);
          },
          setLoaded({ commit: e }, t) {
            e("SET_LOADED", t);
          },
        },
      };
    const te = Object(Q["a"])({
      modules: {
        notifications: G,
        insurance: U,
        config: J,
        claim: $,
        user: ee,
      },
    });
    var ie = te;
    class ne {
      constructor() {
        const e = ie.getters.config;
        (this.axiosInstance = V.a.create({
          baseURL: e.api.baseUrl + "/" + e.api.apiSuffix,
        })),
          (this.publicAxiosInstance = V.a.create({
            baseURL: e.api.baseUrl + "/" + e.api.apiSuffix,
          })),
          e.oidc &&
            e.oidc.clientId &&
            (this.axiosInstance.interceptors.request.use(
              L["a"].buildRequestTokenInterceptorCallback(ie)
            ),
            this.axiosInstance.interceptors.response.use(
              function (e) {
                return e;
              },
              (e) => L["a"].buildResponseErrorInterceptorCallback(e, ie)
            ));
      }
      get(e, t = {}, i = !1) {
        const n =
          i && !ie.getters["openid/isLoggedIn"]
            ? this.publicAxiosInstance
            : this.axiosInstance;
        return n
          .get(e, t)
          .then(function (e) {
            return e.data;
          })
          .catch((e) => this.processError(e));
      }
      post(e, t, i = {}) {
        return this.axiosInstance
          .post(e, t, i)
          .then(function (e) {
            return e.data;
          })
          .catch((e) => {
            throw this.processError(e);
          });
      }
      patch(e, t, i = {}) {
        return this.axiosInstance
          .patch(e, t, i)
          .then(function (e) {
            return e.data;
          })
          .catch((e) => this.processError(e));
      }
      put(e, t, i = {}) {
        return this.axiosInstance
          .put(e, t, i)
          .then(function (e) {
            return e.data;
          })
          .catch((e) => this.processError(e));
      }
      delete(e) {
        return this.axiosInstance
          .delete(e)
          .then(function (e) {
            return e.data;
          })
          .catch((e) => this.processError(e));
      }
      getFile(e, t = {}, i = !1) {
        t = { ...t, responseType: "blob" };
        const n =
          i && !ie.getters["openid/isLoggedIn"]
            ? this.publicAxiosInstance
            : this.axiosInstance;
        return n
          .get(e, t)
          .then(function (e) {
            return e.data;
          })
          .catch((e) => this.processError(e));
      }
      processError(e) {
        return (
          console.log("processError: ", e.response),
          500 === e.response.status && alert("Er is iets mis gelopen!"),
          "Birth date, phone number and email need to be either filled in or blank together" ===
            e.response.data.__all__[0] &&
            alert(
              "Birth date, phone number and email need to be either filled in or blank together"
            ),
          e
        );
      }
    }
    class ae extends ne {
      constructor() {
        super(...arguments),
          (this.previous = null),
          (this.next = ""),
          (this.formatPaginationUrl = (e) => e);
      }
      getArray(e) {
        return this.get(this.endpoint, {}).then((e) => {
          const t = [];
          return (
            e.results.forEach((e) => {
              t.push(this.deserializer(e));
            }),
            t
          );
        });
      }
      getPrevious() {
        return this.get(this.endpoint, {}).then((e) => {
          const t = [];
          return (
            e.results.forEach((e) => {
              t.push(this.deserializer(e));
            }),
            t
          );
        });
      }
      getById(e) {
        return this.get(this.endpoint + e, {}).then((e) =>
          e.response && 403 === e.response.status ? e : this.deserializer(e)
        );
      }
      editById(e, t) {
        return this.patch(this.endpoint + e, t).then((e) =>
          this.deserializer(e)
        );
      }
      search(e, t, i, n) {
        return this.get(this.endpoint + "?term=" + e, {}).then((e) => {
          const t = [];
          return (
            e.forEach((e) => {
              t.push(this.deserializer(e));
            }),
            t
          );
        });
      }
      create(e) {
        return this.post(this.endpoint, this.serializer(e)).then((e) =>
          this.deserializer(e)
        );
      }
      update(e, t) {
        return this.patch(this.endpoint + e + "/", this.serializer(t)).then(
          (e) => this.deserializer(e)
        );
      }
      removeById(e) {
        return this.delete(this.endpoint + e);
      }
      createDraft(e, t) {
        const i = { insurance_type: et[t], data: this.serializer(e) };
        return this.post("/insurance_drafts/", i).then((e) =>
          this.deserializer(e)
        );
      }
      getDraftById(e) {
        return this.get("/insurance_drafts/" + e, {}).then((e) => {
          const t = Object(n["E"])(ie.getters.user);
          if (t.value.scoutsGroups)
            return (
              (e.data.group = t.value.scoutsGroups.find(
                (t) => t.id === e.data.group
              )),
              this.deserializer(e.data)
            );
        });
      }
      downloadFile(e) {
        return this.getFile(this.endpoint + e).then((e) => e);
      }
    }
    class se extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/event-insurance/"),
          (this.endpoint = "/insurances/"),
          (this.deserializer = H),
          (this.serializer = R),
          (this.getCalculatedCost = (e) =>
            this.post(this.endpoint + "event/cost/", this.serializer(e)).then(
              (e) => e.total_cost.toString().replace(".", ",")
            ));
      }
      create(e) {
        return this.post(this.endpoint + "event/", this.serializer(e)).then(
          (e) => this.deserializer(e)
        );
      }
      editById(e, t) {
        return this.patch(
          this.endpoint + "event/" + e + "/",
          this.serializer(t)
        ).then((e) => this.deserializer(e));
      }
    }
    const re = (e) => {
        (e.description =
          "Materiaal verzekering" === e.description
            ? "Materiaalverzekering"
            : e.description),
          (e.description =
            "Evenementen verzekering" === e.description
              ? "Evenementenverzekering"
              : e.description),
          (e.description =
            "Eenmalige activiteit" === e.description
              ? "Verzekering eenmalige activiteit"
              : e.description);
        const t = {
          id: e.id,
          description: e.description,
          maxTerm: e.max_term,
          name: e.name,
        };
        return t;
      },
      ce = (e) => {
        const t = { id: e.id, name: e.name };
        return t;
      },
      le = (e) => {
        const t = { id: e.id, name: e.name };
        return t;
      },
      oe = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          lastName: e.last_name,
          firstName: e.first_name,
          phoneNumber: e.phone_number
            ? e.phone_number.replace(/ /g, "")
            : void 0,
          email: e.email ? e.email : void 0,
          birthDate: e.birth_date,
          groupAdminId: e.group_admin_id ? e.group_admin_id : void 0,
          street: e.street ? e.street : void 0,
          number: e.number ? e.number : void 0,
          letterBox: e.letter_box ? e.letter_box : void 0,
          postCodeCity: C({ city: e.city, postal_code: e.postal_code }),
          comment: e.comment,
          isChecked: !1,
          membershipNumber: e.membership_number ? e.membership_number : void 0,
          isMember: !!e.is_member && e.is_member,
          gender: "M" === e.gender || "F" === e.gender ? e.gender : "",
        };
        return t;
      },
      de = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          last_name: e.lastName,
          first_name: e.firstName,
          phone_number: e.phoneNumber ? e.phoneNumber.replace(/ /g, "") : "/",
          email: e.email ? e.email : void 0,
          birth_date: e.birthDate,
          group_admin_id: e.groupAdminId ? e.groupAdminId : void 0,
          street: e.street ? e.street : void 0,
          number: e.number ? e.number : void 0,
          group: e.group ? e.group : null,
          comment: e.comment ? e.comment : void 0,
          postal_code: e.postCodeCity ? D(e.postCodeCity).postal_code : void 0,
          city: e.postCodeCity ? D(e.postCodeCity).city : void 0,
          membership_number: e.membershipNumber ? e.membershipNumber : void 0,
        };
        return t;
      },
      ue = (e) => {
        const t = {
          inuitsId: e.inuits_id ? e.inuits_id : void 0,
          id: e.id ? e.id : void 0,
          lastName: e.last_name,
          firstName: e.first_name,
          phoneNumber: e.phone_number
            ? e.phone_number.replace(/ /g, "")
            : void 0,
          birthDate: e.birth_date,
          street: e.street,
          number: e.number,
          letterBox: e.letter_box,
          comment: e.comment,
          postCodeCity: C({ city: e.city, postal_code: e.postal_code }),
          isChecked: !1,
          group: e.group_admin_id
            ? e.group_admin_id
            : e.group_group_admin_id
            ? e.group_group_admin_id
            : void 0,
        };
        return t;
      },
      be = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          last_name: e.lastName,
          first_name: e.firstName,
          phone_number: e.phoneNumber ? e.phoneNumber.replace(/ /g, "") : "",
          birth_date: e.birthDate ? e.birthDate : void 0,
          street: e.street,
          number: e.number,
          letter_box: e.letterBox,
          comment: e.comment,
          postal_code: D(e.postCodeCity).postal_code,
          city: D(e.postCodeCity).city,
          group_group_admin_id: e.group ? e.group : null,
          group_admin_id: e.group ? e.group : null,
          inuits_id: e.inuitsId ? e.inuitsId : null,
        };
        return t;
      },
      me = (e, t) => {
        const i = {
          id: e.id ? e.id : void 0,
          inuitsId: e.inuits_id ? e.inuits_id : void 0,
          nature: e.nature ? e.nature : void 0,
          description: e.description ? e.description : void 0,
          totalValue: e.total_value ? e.total_value : void 0,
          ownerMember: e.owner_member ? oe(e.owner_member) : void 0,
          ownerNonMember: e.owner_non_member ? ue(e.owner_non_member) : void 0,
          group: t || (e.owner_group ? e.owner_group : void 0),
        };
        return i;
      },
      pe = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          nature: e.nature ? e.nature : null,
          description: e.description ? e.description : void 0,
          total_value: e.totalValue ? e.totalValue : void 0,
          owner_member: e.ownerMember ? e.ownerMember.groupAdminId : null,
          owner_non_member: e.ownerNonMember
            ? be(e.ownerNonMember).inuits_id
              ? be(e.ownerNonMember).inuits_id
              : be(e.ownerNonMember).id
            : null,
          owner_group: e.group ? e.group : null,
        };
        return t;
      },
      ve = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          nature: e.nature ? e.nature : void 0,
          description: e.description ? e.description : void 0,
          total_value: e.totalValue ? e.totalValue : void 0,
          owner_member: e.ownerMember ? de(e.ownerMember) : null,
          owner_non_member: e.ownerNonMember ? be(e.ownerNonMember) : null,
          owner_group: e.group ? e.group : null,
        };
        return t;
      },
      je = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          startDate: e.start_date
            ? A()(e.start_date).format("YYYY-MM-DD")
            : void 0,
          endDate: e.end_date ? A()(e.end_date).format("YYYY-MM-DD") : void 0,
          comment: e.comment ? e.comment : void 0,
          group: e.scouts_group ? E(e.scouts_group) : void 0,
          nature: e.nature ? e.nature : void 0,
          responsibleMember: e.responsible_member
            ? T(e.responsible_member)
            : void 0,
          status: e.status ? M(e.status) : void 0,
          totalCost: e.total_cost
            ? e.total_cost.toString().replace(".", ",")
            : void 0,
          type: e.type ? re(e.type) : void 0,
          vvksComment:
            e.vvksm_comment && e.vvksm_comment.length > 0
              ? e.vvksm_comment
              : "",
          country: e.country ? e.country.toString() : void 0,
          postCodeCity: C({ city: e.city, postal_code: e.postal_code }),
          equipment: e.equipment
            ? e.equipment.map((t) => me(t, E(e.scouts_group).id))
            : void 0,
        };
        return t;
      },
      Oe = (e) => {
        const t = {
          start_date: e.startDate
            ? A()(e.startDate).format("YYYY-MM-DDTh:mm:ss")
            : void 0,
          end_date: e.endDate
            ? A()(e.endDate).format("YYYY-MM-DDTh:mm:ss")
            : void 0,
          comment: e.comment ? e.comment : void 0,
          group_group_admin_id: e.group ? _(e.group).id : void 0,
          group_admin_id: e.group ? _(e.group).id : void 0,
          nature: e.nature ? e.nature : void 0,
          responsible_phone_number: e.responsibleMember
            ? x(e.responsibleMember).responsible_phone_number
            : void 0,
          country:
            e.country && "België" !== e.country.name
              ? le(e.country).id
              : void 0,
          postal_code: e.postCodeCity ? D(e.postCodeCity).postal_code : void 0,
          city: e.postCodeCity ? D(e.postCodeCity).city : void 0,
          equipment: e.equipment ? e.equipment.map((e) => ve(e)) : void 0,
          vvksm_comment: e.vvksComment ? e.vvksComment : void 0,
        };
        return t;
      };
    class he extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/material-insurance/"),
          (this.endpoint = "/insurances/"),
          (this.deserializer = je),
          (this.serializer = Oe),
          (this.getCalculatedCost = (e) =>
            this.post(
              this.endpoint + "equipment/cost/",
              this.serializer(e)
            ).then((e) => e.total_cost.toString().replace(".", ",")));
      }
      create(e) {
        return this.post(this.endpoint + "equipment/", this.serializer(e)).then(
          (e) => this.deserializer(e)
        );
      }
      editById(e, t) {
        return this.patch(
          this.endpoint + "equipment/" + e + "/",
          this.serializer(t)
        ).then((e) => this.deserializer(e));
      }
    }
    const ge = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          startDate: e.start_date
            ? A()(e.start_date).format("YYYY-MM-DD")
            : void 0,
          endDate: e.end_date ? A()(e.end_date).format("YYYY-MM-DD") : void 0,
          createdOn: e.created_on ? e.created_on : void 0,
          comment: e.comment ? e.comment : void 0,
          group: e.scouts_group ? E(e.scouts_group) : void 0,
          postCodeCity: C({ city: e.city, postal_code: e.postal_code }),
          nature: e.nature ? e.nature : void 0,
          responsibleMember: e.responsible_member
            ? T(e.responsible_member)
            : void 0,
          status: e.status ? M(e.status) : void 0,
          totalCost: e.total_cost
            ? e.total_cost.toString().replace(".", ",")
            : void 0,
          type: e.type ? re(e.type) : void 0,
          nonMembers: e.non_members ? e.non_members.map((e) => ue(e)) : void 0,
          country: e.country ? e.country.toString() : void 0,
          vvksComment:
            e.vvksm_comment && e.vvksm_comment.length > 0
              ? e.vvksm_comment
              : "",
        };
        return t;
      },
      ye = (e) => {
        const t = {
          start_date: e.startDate
            ? A()(e.startDate).format("YYYY-MM-DDTh:mm:ss")
            : void 0,
          end_date: e.endDate
            ? A()(e.endDate).format("YYYY-MM-DDTh:mm:ss")
            : void 0,
          created_on: e.createdOn ? e.createdOn : void 0,
          comment: e.comment ? e.comment : void 0,
          group_group_admin_id: e.group ? _(e.group).id : void 0,
          group_admin_id: e.group ? _(e.group).id : void 0,
          scouts_group: e.group ? _(e.group) : void 0,
          postal_code: e.postCodeCity ? D(e.postCodeCity).postal_code : void 0,
          city: e.postCodeCity ? D(e.postCodeCity).city : void 0,
          nature: e.nature ? e.nature : void 0,
          responsible_phone_number: e.responsibleMember
            ? x(e.responsibleMember).responsible_phone_number
            : void 0,
          total_cost: e.totalCost ? e.totalCost : void 0,
          non_members: e.nonMembers ? e.nonMembers.map((e) => be(e)) : void 0,
          country:
            e.country && "België" !== e.country.name
              ? le(e.country).id
              : void 0,
          vvksm_comment: e.vvksComment ? e.vvksComment : void 0,
        };
        return t;
      };
    class fe extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/insurances/temporary/"),
          (this.endpoint = "/insurances/"),
          (this.deserializer = ge),
          (this.serializer = ye),
          (this.getCalculatedCost = (e) =>
            this.post(
              this.endpoint + "temporary/cost/",
              this.serializer(e)
            ).then((e) => e.total_cost.toString().replace(".", ",")));
      }
      create(e) {
        return this.post(this.endpoint + "temporary/", this.serializer(e)).then(
          (e) => this.deserializer(e)
        );
      }
      editById(e, t) {
        return this.patch(
          this.endpoint + "temporary/" + e + "/",
          this.serializer(t)
        ).then((e) => this.deserializer(e));
      }
    }
    const ke = (e) => {
        const t = {
          id: e.id ? e.id.toString() : void 0,
          value: e.value ? e.value.toString() : void 0,
          label: e.label,
        };
        return t;
      },
      Se = (e) => {
        const t = { id: e.id, value: e.value, label: e.label };
        return t;
      },
      Ee = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          startDate: e.start_date
            ? A()(e.start_date).format("YYYY-MM-DD")
            : void 0,
          endDate: e.end_date ? A()(e.end_date).format("YYYY-MM-DD") : void 0,
          createdOn: e.created_on ? e.created_on : void 0,
          comment: e.comment ? e.comment : void 0,
          group: e.scouts_group ? E(e.scouts_group) : void 0,
          groupSize: e.group_size
            ? "object" === typeof e.group_size
              ? ke(e.group_size)
              : { id: e.group_size }
            : void 0,
          location:
            e.city && e.postal_code
              ? C({ city: e.city, postal_code: e.postal_code })
              : void 0,
          nature: e.nature ? e.nature : void 0,
          responsibleMember: e.responsible_member
            ? T(e.responsible_member)
            : void 0,
          status: e.status ? M(e.status) : void 0,
          totalCost: e.total_cost
            ? e.total_cost.toString().replace(".", ",")
            : void 0,
          type: e.type ? re(e.type) : void 0,
          vvksComment:
            e.vvksm_comment && e.vvksm_comment.length > 0 ? e.vvks_comment : "",
          participant_list_file: e.participant_list_file
            ? N(e.participant_list_file)
            : void 0,
        };
        return t;
      },
      _e = (e) => {
        const t = {
          start_date: e.startDate
            ? A()(e.startDate).format("YYYY-MM-DDTh:mm:ss")
            : void 0,
          end_date: e.endDate
            ? A()(e.endDate).format("YYYY-MM-DDTh:mm:ss")
            : void 0,
          created_on: e.createdOn ? e.createdOn : void 0,
          comment: e.comment ? e.comment : void 0,
          group_group_admin_id: e.group ? _(e.group).id : void 0,
          group_admin_id: e.group ? _(e.group).id : void 0,
          scouts_group: e.group ? _(e.group) : void 0,
          group_size: e.groupSize ? Se(e.groupSize).id : void 0,
          postal_code: e.location ? D(e.location).postal_code : void 0,
          city: e.location ? D(e.location).city : void 0,
          nature: e.nature ? e.nature : void 0,
          responsible_phone_number: e.responsibleMember
            ? x(e.responsibleMember).responsible_phone_number
            : void 0,
          total_cost: e.totalCost ? e.totalCost : void 0,
          vvksm_comment: e.vvksComment ? e.vvksComment : void 0,
        };
        return t;
      };
    class Te extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/one-time-activity-insurance/"),
          (this.endpoint = "/insurances/"),
          (this.deserializer = Ee),
          (this.serializer = _e),
          (this.getCalculatedCost = (e) =>
            this.post(
              this.endpoint + "activity/cost/",
              this.serializer(e)
            ).then((e) => e.total_cost.toString().replace(".", ",")));
      }
      create(e) {
        return this.post(this.endpoint + "activity/", this.serializer(e)).then(
          (e) => this.deserializer(e)
        );
      }
      editById(e, t) {
        return this.patch(
          this.endpoint + "activity/" + e + "/",
          this.serializer(t)
        ).then((e) => this.deserializer(e));
      }
    }
    const xe = (e) => {
        const t = {
          id: e.id ? e.id.toString() : void 0,
          value: e.value ? e.value.toString() : void 0,
          label: e.label,
        };
        return t;
      },
      we = (e) => {
        const t = { id: e.id, value: e.value, label: e.label };
        return t;
      },
      Ie = (e) => (
        "247,89 EUR" === e.label &&
          (e.label = "vrijstelling dekken tot 250 EUR"),
        "495,79 EUR" === e.label &&
          (e.label = " vrijstelling dekken tot 500 EUR"),
        "743,68 EUR" === e.label &&
          (e.label = "vrijstelling dekken tot 750 EUR"),
        e
      ),
      Ce = (e) => {
        const t = { id: e.id, value: e.value, label: e.label };
        return t;
      },
      De = (e) => {
        const t = { id: e.id, value: e.value, label: e.label };
        return t;
      },
      Ne = (e) => {
        const t = { id: e.id, value: e.value, label: e.label };
        return t;
      },
      Me = (e) => {
        const t = { id: e.id, value: Number(e.value), label: e.label };
        return t;
      },
      ze = (e) =>
        Ce(
          "PERSONENWAGEN" === e
            ? {
                id: "PERSONENWAGEN",
                value: "PERSONENWAGEN",
                label: "Personenwagen (maximum 5 inzittenden)",
              }
            : "MINIBUS" === e
            ? {
                id: "MINIBUS",
                value: "MINIBUS",
                label: "Minibus (maximum 8 inzittenden)",
              }
            : "VRACHTWAGEN" === e
            ? {
                id: "VRACHTWAGEN",
                value: "VRACHTWAGEN",
                label: "Vrachtwagen tot 3.5 ton (maximum 8 inzittenden)",
              }
            : {
                id: "PERSONENWAGEN",
                value: "PERSONENWAGEN",
                label: "Personenwagen (maximum 5 inzittenden)",
              }
        ),
      Ae = (e) =>
        Ne(
          "0" === e
            ? { id: "0", value: "0", label: "Geen" }
            : "1" === e
            ? { id: "1", value: "1", label: "Aanhangwagen (zonder meerprijs)" }
            : "2" === e
            ? { id: "2", value: "2", label: "<750kg" }
            : "3" === e
            ? { id: "3", value: "3", label: ">750kg" }
            : { id: "0", value: "0", label: "Geen" }
        ),
      He = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          type: e.type
            ? "object" === typeof e.type
              ? Ce(e.type)
              : ze(e.type)
            : void 0,
          brand: e.brand ? e.brand : void 0,
          licensePlate: e.license_plate ? e.license_plate : void 0,
          constructionYear: e.construction_year
            ? A()(e.construction_year.toString()).format("YYYY")
            : void 0,
          chassisNumber: e.chassis_number ? e.chassis_number : void 0,
          trailer:
            null !== e.trailer
              ? "object" === typeof e.trailer
                ? Ne(e.trailer)
                : Ae(e.trailer.toString())
              : void 0,
          group: e.group ? e.group : void 0,
        };
        return t;
      },
      Re = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          type: e.type ? De(e.type).value : void 0,
          brand: e.brand ? e.brand : void 0,
          license_plate: e.licensePlate ? e.licensePlate : void 0,
          construction_year: e.constructionYear ? e.constructionYear : void 0,
          chassis_number: e.chassisNumber ? e.chassisNumber : void 0,
          trailer: e.trailer ? Me(e.trailer).value : void 0,
          group_group_admin_id: e.group ? e.group : void 0,
        };
        return t;
      },
      Be = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          type: e.type ? De(e.type) : void 0,
          brand: e.brand ? e.brand : void 0,
          license_plate: e.licensePlate ? e.licensePlate : void 0,
          construction_year: e.constructionYear ? e.constructionYear : void 0,
          chassis_number: e.chassisNumber ? e.chassisNumber : void 0,
          trailer: e.trailer ? Me(e.trailer) : void 0,
          group: e.group ? e.group : void 0,
        };
        return t;
      },
      qe = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          lastName: e.last_name,
          firstName: e.first_name,
          phoneNumber: e.phone_number
            ? e.phone_number.replace(/ /g, "")
            : void 0,
          email: e.email ? e.email : void 0,
          birthDate: e.birth_date,
          groupAdminId: e.group_admin_id,
          street: e.street ? e.street : void 0,
          number: e.number ? e.number : void 0,
          letterBox: e.letter_box ? e.letter_box : void 0,
          postCodeCity: C({ city: e.city, postal_code: e.postal_code }),
          comment: e.comment,
          isChecked: !1,
          companyName: e.company_name ? e.company_name : void 0,
        };
        return t;
      },
      Ve = (e) => {
        const t = {
          last_name: e.lastName,
          first_name: e.firstName,
          phone_number: e.phoneNumber ? e.phoneNumber.replace(/ /g, "") : "/",
          email: e.email ? e.email : void 0,
          birth_date: e.birthDate ? e.birthDate : "2000-01-01",
          street: e.street ? e.street : void 0,
          number: e.number ? e.number : void 0,
          letter_box: e.letterBox ? e.letterBox : void 0,
          comment: e.comment ? e.comment : void 0,
          postal_code: e.postCodeCity ? D(e.postCodeCity).postal_code : void 0,
          city: e.postCodeCity ? D(e.postCodeCity).city : void 0,
          company_name: e.companyName ? e.companyName : void 0,
        };
        return t;
      },
      Le = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          lastName: e.last_name,
          firstName: e.first_name,
          phoneNumber: e.phone_number
            ? e.phone_number.replace(/ /g, "")
            : void 0,
          email: e.email ? e.email : void 0,
          birthDate: e.birth_date,
          groupAdminId: e.group_admin_id,
          street: e.street && e.street ? e.street : void 0,
          number: e.number && e.number ? e.number : void 0,
          letterBox: e.letter_box ? e.letter_box : void 0,
          postCodeCity: C({ city: e.city, postal_code: e.postal_code }),
          comment: e.comment,
          isChecked: !1,
        };
        return t;
      },
      Ge = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          startDate: e.start_date
            ? A()(e.start_date).format("YYYY-MM-DD")
            : void 0,
          endDate: e.end_date ? A()(e.end_date).format("YYYY-MM-DD") : void 0,
          comment: e.comment ? e.comment : void 0,
          responsiblePhoneNumber: e.responsible_phone_number
            ? e.responsible_phone_number
            : void 0,
          group: e.scouts_group ? E(e.scouts_group) : void 0,
          vehicle:
            e.vehicle && e.vehicle.license_plate ? He(e.vehicle) : void 0,
          drivers: e.drivers ? e.drivers.map((e) => Le(e)) : void 0,
          owner: e.owner ? qe(e.owner) : void 0,
          totalCost: e.total_cost
            ? e.total_cost.toString().replace(".", ",")
            : void 0,
          maxCoverage: e.max_coverage ? Ie(e.max_coverage) : void 0,
          insuranceOptions: e.insurance_options
            ? String(e.insurance_options)
                .split("")
                .map((e) => Number(e))
            : void 0,
          responsibleMember: e.responsible_member
            ? T(e.responsible_member)
            : void 0,
          vvksComment:
            e.vvksm_comment && e.vvksm_comment.length > 0
              ? e.vvksm_comment
              : "",
        };
        return t;
      },
      Pe = (e) => {
        const t = {
          start_date: e.startDate
            ? A()(e.startDate).format("YYYY-MM-DDTh:mm:ss")
            : void 0,
          end_date: e.endDate
            ? A()(e.endDate).format("YYYY-MM-DDTh:mm:ss")
            : void 0,
          comment: e.comment ? e.comment : void 0,
          responsible_phone_number: e.responsibleMember
            ? x(e.responsibleMember).responsible_phone_number
            : void 0,
          group_group_admin_id: e.group ? _(e.group).id : void 0,
          group_admin_id: e.group ? _(e.group).id : void 0,
          vehicle: e.vehicle && e.vehicle.licensePlate ? Re(e.vehicle) : void 0,
          drivers: e.drivers ? e.drivers.map((e) => de(e)) : void 0,
          owner: e.owner ? Ve(e.owner) : void 0,
          max_coverage: e.maxCoverage ? we(e.maxCoverage).value : void 0,
          insurance_options: e.insuranceOptions
            ? e.insuranceOptions.sort()
            : void 0,
          vvksm_comment: e.vvksComment ? e.vvksComment : void 0,
        };
        return t;
      },
      Ke = (e) => {
        const t = {
          start_date: e.startDate
            ? A()(e.startDate).format("YYYY-MM-DDTh:mm:ss")
            : void 0,
          end_date: e.endDate
            ? A()(e.endDate).format("YYYY-MM-DDTh:mm:ss")
            : void 0,
          comment: e.comment ? e.comment : void 0,
          responsible_phone_number: e.responsibleMember
            ? x(e.responsibleMember).responsible_phone_number
            : void 0,
          group: e.group ? _(e.group).id : void 0,
          scouts_group: e.group ? _(e.group) : void 0,
          vehicle: e.vehicle && e.vehicle.licensePlate ? Be(e.vehicle) : void 0,
          drivers: e.drivers ? e.drivers.map((e) => de(e)) : void 0,
          owner: e.owner ? Ve(e.owner) : void 0,
          max_coverage: e.maxCoverage ? e.maxCoverage : void 0,
          insurance_options: e.insuranceOptions
            ? e.insuranceOptions.sort()
            : void 0,
          vvksm_comment: e.vvksComment ? e.vvksComment : void 0,
        };
        return t;
      };
    class Ye extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/insurances/temporary_vehicle/"),
          (this.endpoint = "/insurances/"),
          (this.deserializer = Ge),
          (this.serializer = Pe),
          (this.getCalculatedCost = (e) =>
            this.post(
              this.endpoint + "temporary_vehicle/cost/",
              this.serializer(e)
            ).then((e) => e.total_cost.toString().replace(".", ",")));
      }
      create(e) {
        return this.post(
          this.endpoint + "temporary_vehicle/",
          this.serializer(e)
        ).then((e) => this.deserializer(e));
      }
      editById(e, t) {
        return this.patch(
          this.endpoint + "temporary_vehicle/" + e + "/",
          this.serializer(t)
        ).then((e) => this.deserializer(e));
      }
      createDraft(e, t) {
        const i = { insurance_type: et[t], data: Ke(e) };
        return this.post("/insurance_drafts/", i).then((e) =>
          this.deserializer(e)
        );
      }
    }
    const Ue = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          startDate: e.start_date
            ? A()(e.start_date).format("YYYY-MM-DD")
            : void 0,
          endDate: e.end_date ? A()(e.end_date).format("YYYY-MM-DD") : void 0,
          comment: e.comment ? e.comment : void 0,
          responsiblePhoneNumber: e.responsible_phone_number
            ? e.responsible_phone_number
            : void 0,
          country: e.country ? e.country.toString() : void 0,
          group: e.scouts_group ? E(e.scouts_group) : void 0,
          vehicle:
            e.vehicle && e.vehicle.license_plate ? He(e.vehicle) : void 0,
          participants: e.participants
            ? e.participants.map((e) => oe(e))
            : void 0,
          responsibleMember: e.responsible_member
            ? T(e.responsible_member)
            : void 0,
          totalCost: e.total_cost
            ? e.total_cost.toString().replace(".", ",")
            : void 0,
          vvksComment:
            e.vvksm_comment && e.vvksm_comment.length > 0
              ? e.vvksm_comment
              : "",
        };
        return t;
      },
      Fe = (e) => {
        const t = {
          start_date: e.startDate
            ? A()(e.startDate).format("YYYY-MM-DDTh:mm:ss")
            : void 0,
          end_date: e.endDate
            ? A()(e.endDate).format("YYYY-MM-DDTh:mm:ss")
            : void 0,
          comment: e.comment ? e.comment : void 0,
          responsible_phone_number: e.responsiblePhoneNumber
            ? e.responsiblePhoneNumber
            : void 0,
          country: e.country ? le(e.country).id : void 0,
          group_group_admin_id: e.group ? _(e.group).id : void 0,
          group_admin_id: e.group ? _(e.group).id : void 0,
          vehicle: e.vehicle && e.vehicle.licensePlate ? Re(e.vehicle) : void 0,
          participants: e.participants
            ? e.participants.map((e) => de(e))
            : void 0,
          total_cost: e.totalCost ? e.totalCost : void 0,
          vvksm_comment: e.vvksComment ? e.vvksComment : void 0,
        };
        return t;
      },
      We = (e) => {
        const t = {
          start_date: e.startDate
            ? A()(e.startDate).format("YYYY-MM-DDTh:mm:ss")
            : void 0,
          end_date: e.endDate
            ? A()(e.endDate).format("YYYY-MM-DDTh:mm:ss")
            : void 0,
          comment: e.comment ? e.comment : void 0,
          responsible_phone_number: e.responsiblePhoneNumber
            ? e.responsiblePhoneNumber
            : void 0,
          country: e.country ? le(e.country) : void 0,
          group: e.group ? _(e.group).id : void 0,
          scouts_group: e.group ? _(e.group) : void 0,
          vehicle: e.vehicle && e.vehicle.licensePlate ? Be(e.vehicle) : void 0,
          participants: e.participants
            ? e.participants.map((e) => de(e))
            : void 0,
          total_cost: e.totalCost ? e.totalCost : void 0,
          vvksm_comment: e.vvksComment ? e.vvksComment : void 0,
        };
        return t;
      };
    class Xe extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/insurances/travel_assistance/"),
          (this.endpoint = "/insurances/"),
          (this.deserializer = Ue),
          (this.serializer = Fe),
          (this.getCalculatedCost = (e) =>
            this.post(
              this.endpoint + "travel_assistance/cost/",
              this.serializer(e)
            ).then((e) => e.total_cost.toString().replace(".", ",")));
      }
      create(e) {
        return this.post(
          this.endpoint + "travel_assistance/",
          this.serializer(e)
        ).then((e) => this.deserializer(e));
      }
      editById(e, t) {
        return this.patch(
          this.endpoint + "travel_assistance/" + e + "/",
          this.serializer(t)
        ).then((e) => this.deserializer(e));
      }
      createDraft(e, t) {
        const i = { insurance_type: et[t], data: We(e) };
        return (
          i.data.vehicle && (i.insurance_type = "4"),
          this.post("/insurance_drafts/", i).then((e) => this.deserializer(e))
        );
      }
    }
    var Ze;
    (function (e) {
      (e["EENMALIGE_ACTIVITEIT"] = "EENMALIGE_ACTIVITEIT"),
        (e["TIJDELIJKE_VERZEKERING_NIET_LEDEN"] =
          "TIJDELIJKE_VERZEKERING_NIET_LEDEN"),
        (e["REIS_BIJSTAND"] = "REIS_BIJSTAND"),
        (e["TIJDELIJKE_AUTO_VERZEKERING"] = "TIJDELIJKE_AUTO_VERZEKERING"),
        (e["EVENEMENTEN_VERZEKERING"] = "EVENEMENTEN_VERZEKERING"),
        (e["MATERIAAL_VERZEKERING"] = "MATERIAAL_VERZEKERING");
    })(Ze || (Ze = {}));
    const Je = {
        EENMALIGE_ACTIVITEIT: "oneTimeActivityState",
        TIJDELIJKE_VERZEKERING_NIET_LEDEN: "nonMemberState",
        REIS_BIJSTAND: "travelAssistanceState",
        TIJDELIJKE_AUTO_VERZEKERING: "temporaryVehicleState",
        EVENEMENTEN_VERZEKERING: "eventState",
        MATERIAAL_VERZEKERING: "materialInsuranceState",
      },
      $e = {
        EENMALIGE_ACTIVITEIT: "setOneTimeActivityState",
        TIJDELIJKE_VERZEKERING_NIET_LEDEN: "setNonMemberState",
        REIS_BIJSTAND: "setTravelAssistanceState",
        TIJDELIJKE_AUTO_VERZEKERING: "setTemporaryVehicleState",
        EVENEMENTEN_VERZEKERING: "setEventState",
        MATERIAAL_VERZEKERING: "setMaterialInsuranceState",
      },
      Qe = {
        EENMALIGE_ACTIVITEIT: Te,
        TIJDELIJKE_VERZEKERING_NIET_LEDEN: fe,
        REIS_BIJSTAND: Xe,
        TIJDELIJKE_AUTO_VERZEKERING: Ye,
        EVENEMENTEN_VERZEKERING: se,
        MATERIAAL_VERZEKERING: he,
      },
      et = {
        EENMALIGE_ACTIVITEIT: "1",
        TIJDELIJKE_VERZEKERING_NIET_LEDEN: "2",
        REIS_BIJSTAND: "3",
        TIJDELIJKE_AUTO_VERZEKERING: "5",
        EVENEMENTEN_VERZEKERING: "10",
        MATERIAAL_VERZEKERING: "6",
      },
      tt = {
        EENMALIGE_ACTIVITEIT: "Maximum 5 dagen",
        TIJDELIJKE_VERZEKERING_NIET_LEDEN: "Maximum 1 maand",
        REIS_BIJSTAND: "Maximum 1 maand",
        TIJDELIJKE_AUTO_VERZEKERING: "Maximum 1 maand",
        EVENEMENTEN_VERZEKERING: "",
        MATERIAAL_VERZEKERING: "Maximum 1 maand",
      };
    var it = i("3aa8"),
      nt = i("7bb1");
    const at = (e) => {
      Object(nt["c"])("required", it["b"]),
        Object(nt["b"])({
          generateMessage: Object(S["a"])({
            en: { messages: { required: "This field is required" } },
            nl: { messages: { required: "Dit veld is verplicht" } },
          }),
        }),
        Object(S["b"])("nl"),
        Object(nt["c"])(
          "RequiredDrivers",
          (e) => 0 !== e.drivers.length || "Bestuurders zijn vereist."
        ),
        Object(nt["c"])(
          "RequiredVehicle",
          (e) =>
            (void 0 !== e.brand && null !== e.brand) || "Voertuig is vereist."
        ),
        Object(nt["c"])("customRequired", (t) => {
          const i = e.getters.getIsDriverOwnerState;
          return (
            !!((void 0 !== t && "" !== t && t) || i !== k) ||
            "Dit veld mag niet leeg blijven."
          );
        }),
        Object(nt["c"])("startDateBeforeEndDate", (e, t, i) => {
          const n = Number(A()(e).add(1, "days").format("YYYYMMDD")),
            a = Number(A()(i.form[t]).format("YYYYMMDD"));
          return !(a >= n) || "Startdatum moet voor einddatum zijn";
        }),
        Object(nt["c"])("maximumDateTerm", (t, i, n) => {
          const a = e.getters.insuranceTypeState,
            s = A()(t),
            r = A()(n.form[i]),
            c = s.diff(r, "days");
          return a === Ze.EENMALIGE_ACTIVITEIT && c > 4
            ? "Deze verzekering heeft een maximumtermijn van 5 dagen."
            : a === Ze.TIJDELIJKE_VERZEKERING_NIET_LEDEN && c > 30
            ? "Deze verzekering heeft een maximumtermijn van 31 dagen."
            : a === Ze.EVENEMENTEN_VERZEKERING && c > 29
            ? "Deze verzekering heeft een maximumtermijn van 30 dagen."
            : !(a === Ze.TIJDELIJKE_AUTO_VERZEKERING && c > 29) ||
              "Deze verzekering heeft een maximumtermijn van 30 dagen.";
        }),
        Object(nt["c"])(
          "isGroupOwnerOrOwner",
          (e, [t, i]) =>
            !1 !== e ||
            void 0 !== t ||
            void 0 !== i ||
            "Gelieve een eigenaar te selecteren."
        ),
        Object(nt["c"])(
          "bankAccountLength",
          (e) =>
            !(e.length < 19 && e.length > 0) ||
            "Geen geldige bankrekeningnummer"
        ),
        Object(nt["c"])(
          "fillInCheck",
          (e, [t]) =>
            0 !== e.length || !t || "Gelieve dit veld ook in te vullen"
        ),
        Object(nt["c"])(
          "checkForbiddenCountriesTemporaryCar",
          (e, [t, i]) =>
            !(t && t.some((t) => t.id === e.id) && i) ||
            "Voor dit land kan je geen tijdelijke autoverzekering afsluiten"
        ),
        Object(nt["c"])(
          "checkForbiddenCountriesTravelInscuranceWithCar",
          (e, [t, i]) =>
            !(t && t.some((t) => t.id === e.id) && i) ||
            "Voor dit land kan je geen verzekering reisbijstand met voertuig afsluiten"
        ),
        Object(nt["c"])(
          "fileSize",
          (e) =>
            !(e && e.size && Number((e.size / 1048576).toFixed(2)) > 5) ||
            "Bijlage is te groot, niet meer dan 5MB"
        );
    };
    var st = Object(n["l"])({
      name: "App",
      components: { "base-page": f },
      setup() {
        document.title = "Verzekeringen";
        const e = Object(Q["b"])();
        at(e);
      },
    });
    i("2970");
    const rt = j()(st, [
      ["render", s],
      ["__scopeId", "data-v-2958e7b3"],
    ]);
    var ct = rt;
    const lt = { key: 0 },
      ot = { key: 1, class: "mt-1" },
      dt = { key: 0 },
      ut = { key: 0 },
      bt = Object(n["h"])(
        "p",
        { class: "font-semibold mb-0" },
        "Opmerkingen",
        -1
      ),
      mt = { class: "ml-5" },
      pt = Object(n["h"])("p", { class: "font-semibold mb-0" }, "Datum", -1),
      vt = { class: "md:ml-20 xs:ml-5 sm:ml-5" };
    function jt(e, t, i, a, s, r) {
      const c = Object(n["H"])("participants-file-section"),
        l = Object(n["H"])("label-output"),
        o = Object(n["H"])("responsible-member-detail"),
        d = Object(n["H"])("activity-detail"),
        u = Object(n["H"])("base-detail");
      return (
        Object(n["y"])(),
        Object(n["e"])(
          u,
          {
            "single-page": e.singlePage,
            data: e.oneTimeActivityState,
            repository: e.OneTimeActivityRepository,
            title: "verzekering eenmalige activiteit",
          },
          {
            default: Object(n["W"])(({ details: t }) => [
              t && t.status && "Goedgekeurd" === t.status.label
                ? (Object(n["y"])(),
                  Object(n["g"])("div", lt, [
                    Object(n["k"])(
                      c,
                      { inscuranceType: "activities", details: t },
                      null,
                      8,
                      ["details"]
                    ),
                  ]))
                : Object(n["f"])("", !0),
              t
                ? (Object(n["y"])(),
                  Object(n["g"])("div", ot, [
                    e.holderState !== e.HolderStates.DETAIL
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", dt, [
                          t.comment
                            ? (Object(n["y"])(),
                              Object(n["g"])("div", ut, [
                                bt,
                                Object(n["h"])("div", mt, [
                                  Object(n["k"])(
                                    l,
                                    { text: t.comment },
                                    null,
                                    8,
                                    ["text"]
                                  ),
                                ]),
                              ]))
                            : Object(n["f"])("", !0),
                        ]))
                      : Object(n["f"])("", !0),
                    Object(n["G"])(e.$slots, "default"),
                    Object(n["k"])(
                      o,
                      { "responsible-member": t.responsibleMember },
                      null,
                      8,
                      ["responsible-member"]
                    ),
                    Object(n["h"])("div", null, [
                      pt,
                      Object(n["h"])("div", vt, [
                        Object(n["k"])(
                          l,
                          {
                            label: "Periode",
                            text: e.formatDate(t.startDate, t.endDate),
                          },
                          null,
                          8,
                          ["text"]
                        ),
                      ]),
                    ]),
                    Object(n["k"])(
                      d,
                      {
                        nature: t.nature,
                        "group-size": t.groupSize,
                        location: t.location,
                      },
                      null,
                      8,
                      ["nature", "group-size", "location"]
                    ),
                  ]))
                : Object(n["f"])("", !0),
            ]),
            _: 3,
          },
          8,
          ["single-page", "data", "repository"]
        )
      );
    }
    const Ot = { class: "font-semibold mb-0" };
    function ht(e, t, i, a, s, r) {
      const c = Object(n["H"])("phone-number"),
        l = Object(n["H"])("label-output");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["h"])("div", null, [
              Object(n["h"])("p", Ot, Object(n["K"])(e.title), 1),
            ]),
            Object(n["h"])(
              "div",
              {
                class: Object(n["s"])(
                  "Aanvrager" === e.title ? "md:ml-20 xs:ml-5 sm:ml-5" : ""
                ),
              },
              [
                Object(n["h"])("div", null, [
                  Object(n["h"])(
                    "p",
                    null,
                    Object(n["K"])(
                      e.responsibleMember.firstName +
                        " " +
                        (e.responsibleMember.lastName
                          ? e.responsibleMember.lastName
                          : "")
                    ),
                    1
                  ),
                ]),
                Object(n["h"])("div", null, [
                  Object(n["h"])(
                    "p",
                    null,
                    Object(n["K"])(e.responsibleMember.email),
                    1
                  ),
                ]),
                Object(n["k"])(
                  c,
                  { phoneNumber: e.responsibleMember.phoneNumber },
                  null,
                  8,
                  ["phoneNumber"]
                ),
                e.responsibleMember.membershipNumber
                  ? (Object(n["y"])(),
                    Object(n["e"])(
                      l,
                      {
                        key: 0,
                        label: "Lidnummer",
                        text: e.responsibleMember.membershipNumber,
                      },
                      null,
                      8,
                      ["text"]
                    ))
                  : Object(n["f"])("", !0),
              ],
              2
            ),
          ],
          64
        )
      );
    }
    const gt = { key: 0, class: "mb-0" },
      yt = { key: 1 };
    function ft(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["h"])("strong", null, Object(n["K"])(e.label), 1),
          Object(n["h"])(
            "div",
            { class: Object(n["s"])(e.textWidth) },
            [
              e.bold
                ? Object(n["f"])("", !0)
                : (Object(n["y"])(),
                  Object(n["g"])("p", gt, Object(n["K"])(e.text), 1)),
              e.bold
                ? (Object(n["y"])(),
                  Object(n["g"])("strong", yt, Object(n["K"])(e.text), 1))
                : Object(n["f"])("", !0),
            ],
            2
          ),
        ])
      );
    }
    var kt = Object(n["l"])({
      name: "LabelOutput",
      props: {
        label: { type: String, required: !0 },
        text: { type: [String, Number], required: !0 },
        textWidth: { type: String, default: "w-96", required: !1 },
        bold: { required: !1, type: Boolean, default: !1 },
      },
    });
    const St = j()(kt, [["render", ft]]);
    var Et = St;
    const _t = { key: 0 },
      Tt = { key: 0, class: "mb-1" },
      xt = Object(n["h"])(
        "p",
        null,
        "(Gsm kan toegevoegd worden op de groepsadmin.)",
        -1
      ),
      wt = [xt],
      It = { key: 1 },
      Ct = { key: 2 },
      Dt = { key: 0, class: "mb-1" },
      Nt = Object(n["h"])(
        "p",
        null,
        "(Gsm kan toegevoegd worden op de groepsadmin.)",
        -1
      ),
      Mt = [Nt];
    function zt(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            e.hasWarning
              ? (Object(n["y"])(),
                Object(n["g"])("div", _t, [
                  (e.phoneNumber && "" === e.phoneNumber) ||
                  "/" === e.phoneNumber
                    ? (Object(n["y"])(), Object(n["g"])("div", Tt, wt))
                    : Object(n["f"])("", !0),
                ]))
              : Object(n["f"])("", !0),
            (e.phoneNumber && "" !== e.phoneNumber) || "/" !== e.phoneNumber
              ? (Object(n["y"])(),
                Object(n["g"])("div", It, [
                  Object(n["h"])("p", null, Object(n["K"])(e.phoneNumber), 1),
                ]))
              : Object(n["f"])("", !0),
            e.hasWarning
              ? (Object(n["y"])(),
                Object(n["g"])("div", Ct, [
                  e.phoneNumber
                    ? Object(n["f"])("", !0)
                    : (Object(n["y"])(), Object(n["g"])("div", Dt, Mt)),
                ]))
              : Object(n["f"])("", !0),
          ],
          64
        )
      );
    }
    var At = Object(n["l"])({
      name: "PhoneNumber",
      props: { phoneNumber: String, hasWarning: Boolean },
    });
    const Ht = j()(At, [["render", zt]]);
    var Rt = Ht,
      Bt = Object(n["l"])({
        name: "ResponsibleMemberDetail",
        components: { "label-output": Et, "phone-number": Rt },
        props: {
          responsibleMember: { type: Object, default: Object },
          title: { type: String, required: !1, default: "Aanvrager" },
        },
      });
    const qt = j()(Bt, [["render", ht]]);
    var Vt = qt;
    const Lt = Object(n["h"])(
        "p",
        { class: "font-semibold mb-0" },
        "Activiteit",
        -1
      ),
      Gt = { class: "md:ml-20 xs:ml-5 sm:ml-5" };
    function Pt(e, t, i, a, s, r) {
      const c = Object(n["H"])("label-output");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Lt,
            Object(n["h"])("div", Gt, [
              e.nature
                ? (Object(n["y"])(),
                  Object(n["e"])(
                    c,
                    { key: 0, label: "Aard van activiteit", text: e.nature },
                    null,
                    8,
                    ["text"]
                  ))
                : Object(n["f"])("", !0),
              e.countryName
                ? (Object(n["y"])(),
                  Object(n["e"])(
                    c,
                    { key: 1, label: "Land", text: e.countryName },
                    null,
                    8,
                    ["text"]
                  ))
                : Object(n["f"])("", !0),
              e.location && e.location.postalCode
                ? (Object(n["y"])(),
                  Object(n["e"])(
                    c,
                    {
                      key: 2,
                      label: "Locatie",
                      text: e.location.postalCode + " " + e.location.city,
                    },
                    null,
                    8,
                    ["text"]
                  ))
                : Object(n["f"])("", !0),
              e.groupSize
                ? (Object(n["y"])(),
                  Object(n["e"])(
                    c,
                    {
                      key: 3,
                      label: "Aantal extra te verzekeren personen",
                      text: e.groupSize.label,
                    },
                    null,
                    8,
                    ["text"]
                  ))
                : Object(n["f"])("", !0),
              e.eventSize
                ? (Object(n["y"])(),
                  Object(n["e"])(
                    c,
                    {
                      key: 4,
                      label: "Grootte van evenement",
                      text: e.eventSize.label,
                    },
                    null,
                    8,
                    ["text"]
                  ))
                : Object(n["f"])("", !0),
            ]),
          ],
          64
        )
      );
    }
    var Kt;
    (function (e) {
      (e["DATE"] = "date"),
        (e["DATE_TIME_LOCAL"] = "datetime-local"),
        (e["TIME"] = "time"),
        (e["TEXT"] = "text"),
        (e["TEXT_AREA"] = "textarea"),
        (e["TEL"] = "tel"),
        (e["CHECK"] = "checkbox"),
        (e["NUMBER"] = "number");
    })(Kt || (Kt = {}));
    class Yt {
      static get(e) {
        const t = new e().id;
        let i = this.repositoryInstances[t];
        return i || ((i = new e()), (this.repositoryInstances[t] = i)), i;
      }
    }
    Yt.repositoryInstances = {};
    class Ut extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/countries_by_type/"),
          (this.endpoint = "/countries_by_type/"),
          (this.deserializer = ce),
          (this.serializer = le);
      }
      search(e, t) {
        return this.get(
          this.endpoint + t + "/?page_size=1000&term=" + e,
          {}
        ).then((e) => {
          const t = [];
          return (
            e.results.forEach((e) => {
              (e = ce(e)), t.push(e);
            }),
            t
          );
        });
      }
      getArray(e) {
        const t = e.split(this.endpoint)[1];
        return this.get(this.endpoint + t, {}).then((e) => {
          const t = [];
          return (
            e.results.forEach((e) => {
              const i = this.deserializer(e);
              t.push(i);
            }),
            (e.results = t),
            e
          );
        });
      }
    }
    var Ft = Object(n["l"])({
      name: "ActivityDetail",
      components: { "label-output": Et },
      props: {
        insuranceType: String,
        nature: { type: String, default: "" },
        groupSize: { type: Object },
        eventSize: { type: Object },
        location: Object,
        country: String,
      },
      setup(e) {
        const t = Object(n["E"])("");
        return (
          e.country
            ? (Yt.get(Ut)
                .getArray(
                  `/countries_by_type/${e.insuranceType}/?page_size=1000`
                )
                .then((i) => {
                  i.results.forEach((i) => {
                    e.country &&
                      i.id.toString() === e.country.toString() &&
                      (t.value = i.name);
                  });
                }),
              "3232" === e.country && (t.value = "België"))
            : (t.value = "België"),
          { InputTypes: Kt, countryName: t }
        );
      },
    });
    const Wt = j()(Ft, [["render", Pt]]);
    var Xt = Wt;
    const Zt = { key: 0, class: "mt-4" },
      Jt = { class: "mt-3" },
      $t = ["innerHTML"],
      Qt = { key: 1 },
      ei = { key: 2 },
      ti = { key: 0 },
      ii = { class: "mt-4 inline-block" };
    function ni(e, t, i, a, s, r) {
      const c = Object(n["H"])("navigation-arrow"),
        l = Object(n["H"])("inscurance-succes"),
        o = Object(n["H"])("custom-headline-sticker");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["h"])(
              "div",
              { class: Object(n["s"])({ container: e.singlePage }) },
              [
                e.isDetail
                  ? (Object(n["y"])(),
                    Object(n["g"])("div", Zt, [
                      Object(n["k"])(c, {
                        to: "/home/verzekeringen",
                        text: "Terug naar overzicht",
                      }),
                    ]))
                  : Object(n["f"])("", !0),
                Object(n["h"])("div", Jt, [
                  Object(n["h"])(
                    "div",
                    { innerHTML: e.titelText },
                    null,
                    8,
                    $t
                  ),
                ]),
                e.holderState === e.HolderStates.COMPLETED
                  ? (Object(n["y"])(),
                    Object(n["g"])("div", Qt, [Object(n["k"])(l)]))
                  : Object(n["f"])("", !0),
                e.detail &&
                e.details.vvksComment &&
                e.holderState !== e.HolderStates.COMPLETED
                  ? (Object(n["y"])(), Object(n["g"])("div", ei))
                  : Object(n["f"])("", !0),
                e.details && e.holderState !== e.HolderStates.COMPLETED
                  ? (Object(n["y"])(),
                    Object(n["e"])(
                      o,
                      { key: 3, text: "Totaalprijs: € " + e.details.totalCost },
                      null,
                      8,
                      ["text"]
                    ))
                  : Object(n["f"])("", !0),
                e.holderState !== e.HolderStates.COMPLETED
                  ? Object(n["G"])(e.$slots, "default", {
                      key: 4,
                      details: e.details,
                      isDetail: e.isDetail,
                    })
                  : Object(n["f"])("", !0),
              ],
              2
            ),
            e.holderState === e.HolderStates.COMPLETED
              ? (Object(n["y"])(),
                Object(n["g"])("div", ti, [
                  Object(n["h"])("div", ii, [
                    Object(n["k"])(c, {
                      to: "/home/verzekeringen",
                      text: "Terug naar overzicht",
                    }),
                  ]),
                ]))
              : Object(n["f"])("", !0),
          ],
          64
        )
      );
    }
    const ai = { class: "my-5 flex gap-3 w-96" },
      si = {
        key: 0,
        class: "group-search__title inline-block relative text-xl",
        style: {
          "font-size": "2rem",
          position: "initial",
          transition: "none !important",
          "margin-right": "0.3em !important",
        },
      },
      ri = { class: "animate-none" };
    function ci(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])("div", ai, [
          e.text
            ? (Object(n["y"])(),
              Object(n["g"])("h1", si, [
                Object(n["h"])("span", ri, Object(n["K"])(e.text), 1),
              ]))
            : Object(n["f"])("", !0),
          Object(n["G"])(e.$slots, "default", {}, void 0, !0),
        ])
      );
    }
    var li = Object(n["l"])({
      name: "CustomHeadlineSticker",
      props: { text: { type: String, required: !0 } },
    });
    i("0de3");
    const oi = j()(li, [
      ["render", ci],
      ["__scopeId", "data-v-60dc8534"],
    ]);
    var di = oi;
    const ui = { class: "inline-block" },
      bi = { class: "flex text-lg" },
      mi = Object(n["h"])(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          class: "h-5 w-5 mt-1 mr-2",
          fill: "none",
          viewBox: "0 0 20 20",
          stroke: "currentColor",
        },
        [
          Object(n["h"])("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M13 15l-5-5 5-5",
          }),
        ],
        -1
      );
    function pi(e, t, i, a, s, r) {
      const c = Object(n["H"])("router-link");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", ui, [
          Object(n["k"])(
            c,
            { to: e.to },
            {
              default: Object(n["W"])(() => [
                Object(n["h"])("div", bi, [
                  mi,
                  Object(n["h"])("p", null, Object(n["K"])(e.text), 1),
                ]),
              ]),
              _: 1,
            },
            8,
            ["to"]
          ),
        ])
      );
    }
    var vi = Object(n["l"])({
      name: "NavigationArrow",
      props: {
        to: { type: String, required: !0 },
        text: { type: String, required: !0 },
      },
    });
    const ji = j()(vi, [["render", pi]]);
    var Oi = ji,
      hi = i("6c02");
    const gi = Object(n["h"])(
        "p",
        null,
        " Een overzicht van je aanvraag vind je in je mailbox. Je krijgt nog een bevestigingsmail als je aanvraag verwerkt is. ",
        -1
      ),
      yi = [gi];
    function fi(e, t, i, a, s, r) {
      return Object(n["y"])(), Object(n["g"])("div", null, yi);
    }
    var ki = Object(n["l"])({ name: "InscuranceSucces", setup() {} });
    const Si = j()(ki, [["render", fi]]);
    var Ei = Si,
      _i = Object(n["l"])({
        name: "BaseDetail",
        components: {
          "custom-headline-sticker": di,
          "navigation-arrow": Oi,
          InscuranceSucces: Ei,
        },
        props: {
          title: { type: String, required: !0 },
          repository: { type: Function, required: !0 },
          data: { type: Object, required: !0 },
          singlePage: { type: Boolean, required: !1, default: !1 },
        },
        setup(e) {
          const t = Object(Q["b"])(),
            i = Object(hi["c"])(),
            a = !!i.meta.detail,
            s = Object(n["E"])(
              '<p style="font-size: 30px">Overzicht <strong class="font-semibold">' +
                e.title +
                "</strong> verzekering</p>"
            ),
            r = Object(n["E"])(a ? null : e.data),
            c = Object(n["c"])(() => t.state.insurance.holderState);
          return (
            Object(n["U"])(
              () => c.value,
              () => {
                c.value === B.COMPLETED &&
                  (s.value =
                    '<p style="font-size: 30px">Uw <strong class="font-semibold">' +
                    e.title +
                    "</strong> verzekering is aangevraagd </p>");
              }
            ),
            a &&
              (Yt.get(e.repository)
                .getById(i.params.id.toString())
                .then((e) => {
                  (r.value = e),
                    (r.value.totalCost = r.value.totalCost.replace(".", ","));
                }),
              (s.value =
                '<p style="font-size: 30px">Overzicht aangevraagde verzekering <strong class="font-semibold">' +
                e.title +
                "</strong></p>"),
              "Tijdelijke" === e.title &&
                (s.value =
                  '<p style="font-size: 30px">Overzicht aangevraagde verzekering <strong class="font-semibold">' +
                  e.title +
                  " autoverzekering </strong></p>")),
            c.value === B.COMPLETED &&
              (s.value =
                '<p style="font-size: 30px">Je aanvraag is verstuurd.</p>'),
            c.value === B.DETAIL &&
              ("Niet leden" === e.title &&
                (s.value =
                  '<p style="font-size: 30px">Overzicht tijdelijke verzekering <strong class="font-semibold">' +
                  e.title +
                  "</strong></p>"),
              "Reisbijstand" === e.title &&
                (s.value =
                  '<p style="font-size: 30px">Overzicht <strong class="font-semibold">' +
                  e.title +
                  "</strong> verzekering</p>"),
              "Tijdelijke" === e.title &&
                (s.value =
                  '<p style="font-size: 30px">Overzicht <strong class="font-semibold">tijdelijke autoverzekering</strong></p>'),
              "Materiaal" === e.title &&
                (s.value =
                  '<p style="font-size: 30px">Overzicht <strong class="font-semibold">materiaalverzekering</strong></p>'),
              "verzekering eenmalige activiteit" === e.title &&
                (s.value =
                  '<p style="font-size: 30px">Overzicht <strong class="font-semibold">' +
                  e.title +
                  "</strong></p>"),
              "evenementenverzekering" === e.title &&
                (s.value =
                  '<p style="font-size: 30px">Overzicht <strong class="font-semibold">' +
                  e.title +
                  "</strong></p>")),
            {
              HolderStates: B,
              holderState: c,
              titelText: s,
              isDetail: a,
              details: r,
            }
          );
        },
      });
    const Ti = j()(_i, [["render", ni]]);
    var xi = Ti;
    const wi = (e, t) =>
        A()(e).format("DD MMM YYYY") + " - " + A()(t).format("DD MMM YYYY"),
      Ii = (e, t, i, n) =>
        A()(e).format("DD MMM YYYY ") +
        t +
        " - " +
        A()(i).format("DD MMM YYYY ") +
        n,
      Ci = (e) => A()(e).format("DD MMM YYYY"),
      Di = (e) => A()(e).format("DD MMM YYYY"),
      Ni = { class: "mb-2" },
      Mi = { class: "mb-5" };
    function zi(e, t, i, a, s, r) {
      const c = Object(n["H"])("custom-headline-2"),
        l = Object(n["H"])("file-upload"),
        o = Object(n["H"])("custom-button");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["h"])(
            "form",
            {
              id: "list",
              onSubmit:
                t[0] ||
                (t[0] = Object(n["Z"])(
                  (t) => e.onSubmit(e.details),
                  ["prevent"]
                )),
            },
            [
              Object(n["k"])(c, { text: "Bijlage" }),
              Object(n["h"])("div", Ni, [
                Object(n["k"])(
                  l,
                  {
                    inscuranceType: e.inscuranceType,
                    file: e.details.participant_list_file,
                    message: "Deelnemerslijst kan hier opgeladen worden.",
                  },
                  null,
                  8,
                  ["inscuranceType", "file", "message"]
                ),
              ]),
              Object(n["h"])("div", Mi, [
                Object(n["k"])(
                  o,
                  {
                    loadingSubmit: e.isUploadingFile,
                    text: "Bijlage indienen",
                  },
                  null,
                  8,
                  ["loadingSubmit"]
                ),
              ]),
            ],
            32
          ),
        ])
      );
    }
    const Ai = { class: "font-semibold text-xl leading-9 pt-3 pb-3" };
    function Hi(e, t, i, a, s, r) {
      return (
        Object(n["y"])(), Object(n["g"])("h2", Ai, Object(n["K"])(e.text), 1)
      );
    }
    var Ri = Object(n["l"])({
      name: "CustomHeadline2",
      props: { text: { type: String, required: !0 } },
    });
    const Bi = j()(Ri, [["render", Hi]]);
    var qi = Bi;
    const Vi = (e) => (
        Object(n["B"])("data-v-0d3b99a2"), (e = e()), Object(n["z"])(), e
      ),
      Li = { key: 0 },
      Gi = { class: "mb-2" },
      Pi = { class: "bg-grey-lighter" },
      Ki = {
        class:
          "flex w-72 flex-col items-center py-2 bg-white text-black rounded-lg shadow-sm tracking-wide uppercase border border-blue cursor-pointer hover:text-lightGreen",
      },
      Yi = Vi(() =>
        Object(n["h"])(
          "svg",
          {
            class: "w-8 h-8",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
          },
          [
            Object(n["h"])("path", {
              d: "M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z",
            }),
          ],
          -1
        )
      ),
      Ui = { class: "mt-2 text-base leading-normal" },
      Fi = ["accept"],
      Wi = Vi(() =>
        Object(n["h"])(
          "span",
          { class: "text-xs" },
          "Max. 1 bestand, max. 5MB, enkel pdf, jpg, jpeg, png.",
          -1
        )
      ),
      Xi = { class: "mt-4 mb-4" },
      Zi = { key: 0 },
      Ji = Vi(() => Object(n["h"])("i", null, "Geen bijlage geselecteerd", -1)),
      $i = [Ji],
      Qi = { key: 1, class: "w-72" },
      en = ["name"];
    function tn(e, t, i, a, s, r) {
      const c = Object(n["H"])("file-item-component"),
        l = Object(n["H"])("ErrorMessage");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          "div",
          {
            class: Object(n["s"])([
              "border border-blue p-2 rounded-lg shadow-sm bg-lighterGreen",
              e.isDisplay ? "w-64" : "w-100",
            ]),
          },
          [
            e.isDisplay
              ? Object(n["f"])("", !0)
              : (Object(n["y"])(),
                Object(n["g"])("div", Li, [
                  Object(n["h"])("div", Gi, [
                    Object(n["h"])("p", null, Object(n["K"])(e.message), 1),
                  ]),
                  Object(n["h"])("div", null, [
                    Object(n["h"])("div", Pi, [
                      Object(n["h"])("label", Ki, [
                        Yi,
                        Object(n["h"])(
                          "span",
                          Ui,
                          Object(n["K"])(
                            e.selectedFile
                              ? "Vervang bestand"
                              : "Selecteer bestand"
                          ),
                          1
                        ),
                        Object(n["h"])(
                          "input",
                          {
                            ref: "file",
                            accept: e.allowedFiles,
                            onChange: t[0] || (t[0] = (t) => e.selectFile(t)),
                            type: "file",
                            name: "file",
                            id: "file",
                            class: "hidden",
                          },
                          null,
                          40,
                          Fi
                        ),
                      ]),
                    ]),
                    Wi,
                  ]),
                ])),
            Object(n["h"])("div", Xi, [
              e.selectedFile
                ? Object(n["f"])("", !0)
                : (Object(n["y"])(), Object(n["g"])("div", Zi, $i)),
              e.selectedFile
                ? (Object(n["y"])(),
                  Object(n["g"])("div", Qi, [
                    Object(n["k"])(
                      c,
                      {
                        isDisplay: e.isDisplay,
                        onDownloadFile:
                          t[1] || (t[1] = (t) => e.downloadFile(t)),
                        onDeleteFile: t[2] || (t[2] = (t) => e.deleteFile(t)),
                        file: e.selectedFile,
                        isDetailView: e.isDetailView,
                      },
                      null,
                      8,
                      ["isDisplay", "file", "isDetailView"]
                    ),
                    Object(n["h"])(
                      "span",
                      { name: e.id },
                      [
                        Object(n["k"])(l, {
                          name: "file",
                          class: "text-red text-sm block w-80",
                        }),
                      ],
                      8,
                      en
                    ),
                  ]))
                : Object(n["f"])("", !0),
            ]),
          ],
          2
        )
      );
    }
    const nn = (e) => (
        Object(n["B"])("data-v-37e03830"), (e = e()), Object(n["z"])(), e
      ),
      an = {
        class:
          "flex justify-content-center container rounded-lg bg-lightGreen mt-1",
      },
      sn = { key: 0, class: "p-3" },
      rn = { key: 0, class: "d-flex gap-4 justify-end" },
      cn = nn(() =>
        Object(n["h"])(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
          },
          [
            Object(n["h"])("path", {
              "fill-rule": "evenodd",
              d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
              "clip-rule": "evenodd",
            }),
          ],
          -1
        )
      ),
      ln = [cn],
      on = nn(() =>
        Object(n["h"])(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
          },
          [
            Object(n["h"])("path", {
              "fill-rule": "evenodd",
              d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
              "clip-rule": "evenodd",
            }),
          ],
          -1
        )
      ),
      dn = [on],
      un = { class: "mt-3 break-all" },
      bn = { class: "mt-3" };
    function mn(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])("div", an, [
          e.file
            ? (Object(n["y"])(),
              Object(n["g"])("div", sn, [
                !1 === e.isDisplay
                  ? (Object(n["y"])(),
                    Object(n["g"])("div", rn, [
                      Object(n["h"])(
                        "div",
                        {
                          class: "hover:text-lightGreen cursor-pointer",
                          onClick: t[0] || (t[0] = (t) => e.downloadFile()),
                        },
                        ln
                      ),
                      Object(n["h"])(
                        "div",
                        {
                          class: "hover:text-red cursor-pointer",
                          onClick: t[1] || (t[1] = (t) => e.deleteFromArray()),
                        },
                        dn
                      ),
                    ]))
                  : Object(n["f"])("", !0),
                Object(n["h"])("div", un, Object(n["K"])(e.file.name), 1),
                Object(n["h"])(
                  "div",
                  bn,
                  Object(n["K"])((e.file.size / 1048576).toFixed(2)) + " MB",
                  1
                ),
              ]))
            : Object(n["f"])("", !0),
        ])
      );
    }
    class pn extends ae {
      constructor() {
        super(...arguments),
          (this.id = "files"),
          (this.endpoint = "/files/"),
          (this.deserializer = null),
          (this.serializer = null);
      }
      uploadFile(e, t) {
        const i = new FormData();
        i.append("insurance_claim", t), i.append("file", e);
        const n = { headers: { "content-type": "multipart/form-data" } };
        return this.post(this.endpoint, i, n).then((e) => e);
      }
      uploadParticipantsFile(e, t, i) {
        const n = new FormData();
        n.append("file", e), n.append("insurance", t);
        const a = { headers: { "content-type": "multipart/form-data" } };
        return this.post("/" + i + "/participants/", n, a).then((e) => e);
      }
      downloadParticipantsFile(e, t) {
        return this.getFile("/" + t + "/participants/" + e + "/download").then(
          (e) => e
        );
      }
      deleteParticipantsFile(e, t) {
        return this.delete("/" + t + "/participants/" + e).then((e) => e);
      }
    }
    var vn = i("21a6"),
      jn = Object(n["l"])({
        name: "file-item-component",
        props: {
          file: { type: Object, required: !0 },
          isDetailView: { type: Boolean, required: !1, default: !1 },
          isDisplay: { type: Boolean, default: !1, required: !1 },
        },
        setup(e, t) {
          const i = () => {
              t.emit("downloadFile", !0),
                e.file &&
                  e.file.id &&
                  Yt.get(pn)
                    .downloadFile(e.file.id)
                    .then((t) => {
                      Object(vn["saveAs"])(t, e.file.name);
                    });
            },
            n = () => {
              t.emit("deleteFile", !0);
            };
          return { downloadFile: i, deleteFromArray: n };
        },
      });
    i("3826");
    const On = j()(jn, [
      ["render", mn],
      ["__scopeId", "data-v-37e03830"],
    ]);
    var hn = On,
      gn = Object(n["l"])({
        name: "file-upload",
        components: { "file-item-component": hn, ErrorMessage: nt["a"] },
        props: {
          message: {
            type: String,
            default:
              "Voeg hier optioneel het ingevulde geneeskundig getuigschrift, een rekening of factuur,... toe",
            required: !1,
          },
          isDisplay: { type: Boolean, default: !1, required: !1 },
          file: { type: Object, required: !1 },
          inscuranceType: { type: String, default: "" },
          allowedFiles: { type: String, default: "*", required: !1 },
        },
        setup(e) {
          const { value: t } = Object(nt["d"])("file", "fileSize", {});
          e.file &&
            Object(n["U"])(
              () => e.file,
              () => {
                e.file && e.file.name && i();
              }
            );
          const i = () => {
            e.file &&
              e.file.id &&
              Yt.get(pn)
                .downloadParticipantsFile(e.file.id, e.inscuranceType)
                .then((i) => {
                  (t.value = i),
                    e.file &&
                      e.file.name &&
                      ((t.value.name = e.file.name), (t.value.id = e.file.id));
                });
          };
          i();
          const a = () => {
              if (e.file && e.file.id) {
                Object(vn["saveAs"])(t.value, t.value.name);
              }
            },
            s = () => {
              (t.value = void 0),
                (document.getElementById("file").value = ""),
                e.file &&
                  e.file.id &&
                  Yt.get(pn).deleteParticipantsFile(
                    e.file.id,
                    e.inscuranceType
                  );
            },
            r = (e) => {
              t.value = e.target.files[0];
            };
          return {
            selectedFile: t,
            downloadFile: a,
            deleteFile: s,
            selectFile: r,
          };
        },
      });
    i("662a");
    const yn = j()(gn, [
      ["render", tn],
      ["__scopeId", "data-v-0d3b99a2"],
    ]);
    var fn = yn;
    const kn = ["disabled", "type"],
      Sn = { class: "btn-simple-dark mt-0 relative" },
      En = {
        class:
          "absolute flex justify-center items-center w-full left-0 top-0 h-full",
      };
    function _n(e, t, i, a, s, r) {
      const c = Object(n["H"])("loader");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          "button",
          {
            disabled: e.disabled || e.loadingSubmit || e.isSubmitting,
            class: Object(n["s"])([
              "btn-simple-dark",
              { " animate-pulse2 loading": e.isSubmitting || e.loadingSubmit },
            ]),
            type: e.type,
          },
          [
            Object(n["h"])("a", Sn, [
              Object(n["h"])(
                "span",
                {
                  class: Object(n["s"])({
                    "opacity-0": e.loadingSubmit || e.isSubmitting,
                  }),
                },
                Object(n["K"])(e.text),
                3
              ),
              Object(n["X"])(
                Object(n["h"])(
                  "div",
                  En,
                  [
                    Object(n["k"])(
                      c,
                      { "is-loading": e.loadingSubmit || e.isSubmitting },
                      null,
                      8,
                      ["is-loading"]
                    ),
                  ],
                  512
                ),
                [[n["S"], e.loadingSubmit || e.isSubmitting]]
              ),
            ]),
          ],
          10,
          kn
        )
      );
    }
    const Tn = {
        class: "animate-spin h-5 w-5 inline-block",
        viewBox: "0 0 24 24",
      },
      xn = Object(n["h"])(
        "path",
        {
          class: "opacity-20",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
        },
        null,
        -1
      ),
      wn = [xn];
    function In(e, t, i, a, s, r) {
      return Object(n["X"])(
        (Object(n["y"])(), Object(n["g"])("svg", Tn, wn, 512)),
        [[n["S"], e.isLoading]]
      );
    }
    var Cn = Object(n["l"])({
      name: "BackButton",
      props: { isLoading: { type: Boolean, required: !0, default: !1 } },
    });
    const Dn = j()(Cn, [["render", In]]);
    var Nn = Dn,
      Mn = Object(n["l"])({
        name: "CustomButton",
        components: { loader: Nn },
        props: {
          text: { type: String, required: !0 },
          disabled: { type: Boolean, required: !1, default: !1 },
          type: { type: String, default: "submit", required: !1 },
          loadingSubmit: { type: Boolean, default: !1, required: !1 },
        },
        setup() {
          const e = Object(Q["b"])(),
            t = Object(n["c"])(() => e.state.insurance.isSubmittingState);
          return { isSubmitting: t };
        },
      });
    i("4674");
    const zn = j()(Mn, [
      ["render", _n],
      ["__scopeId", "data-v-cc9ef8b4"],
    ]);
    var An = zn,
      Hn = Object(n["l"])({
        name: "ParticipantsFileSection",
        components: { CustomHeadline2: qi, FileUpload: fn, CustomButton: An },
        props: {
          details: { type: Object, required: !0 },
          inscuranceType: { type: String, default: "" },
        },
        setup(e) {
          const { handleSubmit: t } = Object(nt["e"])({}),
            i = Object(hi["c"])(),
            a = async (e) => {
              t(async (t) => {
                s.value || ((s.value = !0), r(t, e));
              })();
            },
            s = Object(n["E"])(!1),
            r = async (t, n) => {
              await Yt.get(pn)
                .uploadParticipantsFile(
                  t.file,
                  i.params.id.toString(),
                  e.inscuranceType
                )
                .then((e) => {
                  n.participant_list_file = N(e);
                }),
                (s.value = !1);
            };
          return { isUploadingFile: s, onSubmit: a };
        },
      });
    const Rn = j()(Hn, [["render", zi]]);
    var Bn = Rn,
      qn = Object(n["l"])({
        name: "OneTimeActivityDetail",
        components: {
          "responsible-member-detail": Vt,
          "activity-detail": Xt,
          "label-output": Et,
          "base-detail": xi,
          ParticipantsFileSection: Bn,
        },
        props: { singlePage: { type: Boolean, default: !1, required: !1 } },
        setup() {
          const e = Object(Q["b"])(),
            t = Object(n["c"])(() => e.state.insurance.oneTimeActivityState),
            i = Object(n["c"])(() => e.state.insurance.holderState);
          return {
            OneTimeActivityRepository: Te,
            oneTimeActivityState: t,
            formatDate: wi,
            InputTypes: Kt,
            HolderStates: B,
            holderState: i,
          };
        },
      });
    const Vn = j()(qn, [["render", jt]]);
    var Ln = Vn;
    const Gn = { key: 0, class: "mt-1" },
      Pn = { key: 0 },
      Kn = Object(n["h"])(
        "p",
        { class: "font-semibold mb-0" },
        "Opmerkingen",
        -1
      ),
      Yn = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Un = Object(n["h"])("p", { class: "font-semibold mb-0" }, "Datum", -1),
      Fn = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Wn = Object(n["h"])(
        "p",
        { class: "font-semibold mb-0" },
        "Materiaal",
        -1
      ),
      Xn = { class: "md:ml-20 xs:ml-5 sm:ml-5" };
    function Zn(e, t, i, a, s, r) {
      const c = Object(n["H"])("label-output"),
        l = Object(n["H"])("responsible-member-detail"),
        o = Object(n["H"])("activity-detail"),
        d = Object(n["H"])("equipment-list"),
        u = Object(n["H"])("base-detail");
      return (
        Object(n["y"])(),
        Object(n["e"])(
          u,
          {
            "single-page": e.singlePage,
            data: e.materialInsuranceState,
            repository: e.MaterialInsuranceRepository,
            title: "Materiaal",
          },
          {
            default: Object(n["W"])(({ details: t }) => [
              t
                ? (Object(n["y"])(),
                  Object(n["g"])("div", Gn, [
                    e.holderState !== e.HolderStates.DETAIL && t.comment
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", Pn, [
                          Kn,
                          Object(n["h"])("div", Yn, [
                            Object(n["k"])(c, { text: t.comment }, null, 8, [
                              "text",
                            ]),
                          ]),
                        ]))
                      : Object(n["f"])("", !0),
                    Object(n["G"])(e.$slots, "default"),
                    Object(n["k"])(
                      l,
                      { "responsible-member": t.responsibleMember },
                      null,
                      8,
                      ["responsible-member"]
                    ),
                    Object(n["h"])("div", null, [
                      Un,
                      Object(n["h"])("div", Fn, [
                        Object(n["k"])(
                          c,
                          {
                            label: "Periode",
                            text: e.formatDate(t.startDate, t.endDate),
                          },
                          null,
                          8,
                          ["text"]
                        ),
                      ]),
                    ]),
                    Object(n["k"])(
                      o,
                      {
                        nature: t.nature,
                        location: t.postCodeCity,
                        country: t.country
                          ? "object" === typeof t.country
                            ? t.country.id
                            : t.country
                          : void 0,
                        insuranceType: "6",
                      },
                      null,
                      8,
                      ["nature", "location", "country"]
                    ),
                    Wn,
                    Object(n["h"])("div", Xn, [
                      Object(n["k"])(
                        d,
                        { "equipment-list": t.equipment },
                        null,
                        8,
                        ["equipment-list"]
                      ),
                    ]),
                  ]))
                : Object(n["f"])("", !0),
            ]),
            _: 3,
          },
          8,
          ["single-page", "data", "repository"]
        )
      );
    }
    const Jn = { class: "grid lg:grid-cols-2 bg-gray gap-1 gap-4 p-4" },
      $n = { key: 0 },
      Qn = Object(n["h"])("i", null, "(Persoonlijk materiaal)", -1),
      ea = [Qn],
      ta = { key: 1 },
      ia = Object(n["h"])("i", null, "(Gehuurd of geleend materiaal)", -1),
      na = [ia],
      aa = { key: 2 },
      sa = Object(n["h"])("i", null, "(Groepsmateriaal)", -1),
      ra = [sa],
      ca = { key: 0, class: "text-left" },
      la = ["onClick"],
      oa = Object(n["h"])(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          class:
            "h-5 w-5 hover:text-lightGreen cursor-pointer inline-block mt-n1 mr-0",
          viewBox: "0 0 20 20",
          fill: "currentColor",
        },
        [
          Object(n["h"])("path", {
            d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z",
          }),
        ],
        -1
      ),
      da = [oa],
      ua = ["onClick"],
      ba = Object(n["h"])(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          class:
            "h-5 w-5 hover:text-lightGreen cursor-pointer inline-block mt-n1 mr-n1",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
        },
        [
          Object(n["h"])("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
          }),
        ],
        -1
      ),
      ma = [ba],
      pa = { class: "font-semibold text-lg" };
    function va(e, t, i, a, s, r) {
      const c = Object(n["H"])("equipment-item");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", Jn, [
          (Object(n["y"])(!0),
          Object(n["g"])(
            n["a"],
            null,
            Object(n["F"])(
              e.equipment,
              (t, i) => (
                Object(n["y"])(),
                Object(n["g"])(
                  "div",
                  { key: t.id, class: "w-full text-center" },
                  [
                    Object(n["k"])(
                      c,
                      { equipment: t },
                      {
                        top: Object(n["W"])(() => [
                          Object(n["h"])("div", null, [
                            t.ownerMember
                              ? (Object(n["y"])(),
                                Object(n["g"])("div", $n, ea))
                              : Object(n["f"])("", !0),
                            t.ownerNonMember
                              ? (Object(n["y"])(),
                                Object(n["g"])("div", ta, na))
                              : Object(n["f"])("", !0),
                            t.ownerNonMember || t.ownerMember
                              ? Object(n["f"])("", !0)
                              : (Object(n["y"])(),
                                Object(n["g"])("div", aa, ra)),
                          ]),
                        ]),
                        default: Object(n["W"])(() => [
                          e.canBeDeleted
                            ? Object(n["X"])(
                                (Object(n["y"])(),
                                Object(n["g"])(
                                  "div",
                                  ca,
                                  [
                                    Object(n["h"])(
                                      "a",
                                      {
                                        class:
                                          "hover:text-lightGreen cursor-pointer link-inline inline-block mr-3",
                                        for: "",
                                        onClick: (i) => e.editEquipment(t),
                                      },
                                      da,
                                      8,
                                      la
                                    ),
                                    Object(n["h"])(
                                      "a",
                                      {
                                        class:
                                          "hover:text-lightGreen cursor-pointer link-inline",
                                        for: "",
                                        onClick: (t) => e.deleteEquipment(i),
                                      },
                                      ma,
                                      8,
                                      ua
                                    ),
                                  ],
                                  512
                                )),
                                [[n["S"], !e.isSubmitting]]
                              )
                            : Object(n["f"])("", !0),
                        ]),
                        _: 2,
                      },
                      1032,
                      ["equipment"]
                    ),
                  ]
                )
              )
            ),
            128
          )),
          Object(n["X"])(
            Object(n["h"])("div", pa, "Geen materiaal geselecteerd", 512),
            [[n["S"], 0 === e.equipment.length]]
          ),
        ])
      );
    }
    const ja = {
        key: 0,
        class:
          "w-full shadow-md border-b-2 border-black bg-white p-2 h-full inline-block text-left d-flex flex-col justify-content-between",
      },
      Oa = { class: "flex justify-between" },
      ha = { class: "py-3 flex-grow" },
      ga = { key: 0 },
      ya = { key: 0, class: "mb-1" },
      fa = { key: 1, class: "mb-1" },
      ka = { key: 2 },
      Sa = { key: 3 },
      Ea = { key: 0 },
      _a = Object(n["h"])("strong", null, "Soort", -1),
      Ta = { key: 1 },
      xa = Object(n["h"])("strong", null, "Beschrijving", -1),
      wa = { key: 2 },
      Ia = Object(n["h"])("strong", null, "Nieuwwaarde", -1);
    function Ca(e, t, i, a, s, r) {
      const c = Object(n["H"])("phone-number");
      return e.equipment
        ? (Object(n["y"])(),
          Object(n["g"])("div", ja, [
            Object(n["h"])("div", Oa, [
              Object(n["h"])("div", null, [Object(n["G"])(e.$slots, "top")]),
              Object(n["h"])("div", null, [
                Object(n["G"])(e.$slots, "default"),
              ]),
            ]),
            Object(n["h"])("div", ha, [
              e.person
                ? (Object(n["y"])(),
                  Object(n["g"])("div", ga, [
                    e.person.firstName
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", ya, [
                          Object(n["h"])(
                            "strong",
                            null,
                            Object(n["K"])(
                              e.person.firstName + " " + e.person.lastName
                            ),
                            1
                          ),
                        ]))
                      : Object(n["f"])("", !0),
                    e.person.email
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", fa, [
                          Object(n["h"])(
                            "p",
                            null,
                            Object(n["K"])(
                              "" !== e.person.email ? e.person.email : "/"
                            ),
                            1
                          ),
                        ]))
                      : Object(n["f"])("", !0),
                    Object(n["k"])(
                      c,
                      { phoneNumber: e.person.phoneNumber },
                      null,
                      8,
                      ["phoneNumber"]
                    ),
                    e.person.postCodeCity && !e.equipment.ownerMember
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", ka, [
                          Object(n["h"])(
                            "p",
                            null,
                            Object(n["K"])(
                              e.person.street +
                                " " +
                                e.person.number +
                                (e.person.letterBox
                                  ? " Bus " + e.person.letterBox
                                  : "") +
                                ", " +
                                e.person.postCodeCity.postalCode +
                                " " +
                                e.person.postCodeCity.city
                            ),
                            1
                          ),
                        ]))
                      : Object(n["f"])("", !0),
                    e.person.birthDate
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", Sa, [
                          Object(n["h"])(
                            "p",
                            null,
                            Object(n["K"])(e.person.birthDate),
                            1
                          ),
                        ]))
                      : Object(n["f"])("", !0),
                  ]))
                : Object(n["f"])("", !0),
              Object(n["h"])("div", null, [
                e.equipment.nature
                  ? (Object(n["y"])(),
                    Object(n["g"])("div", Ea, [
                      _a,
                      Object(n["j"])(
                        " " + Object(n["K"])(e.equipment.nature),
                        1
                      ),
                    ]))
                  : Object(n["f"])("", !0),
                e.equipment.description
                  ? (Object(n["y"])(),
                    Object(n["g"])("div", Ta, [
                      xa,
                      Object(n["j"])(
                        " " + Object(n["K"])(e.equipment.description),
                        1
                      ),
                    ]))
                  : Object(n["f"])("", !0),
                e.equipment.totalValue
                  ? (Object(n["y"])(),
                    Object(n["g"])("div", wa, [
                      Ia,
                      Object(n["j"])(
                        " €" + Object(n["K"])(e.equipment.totalValue),
                        1
                      ),
                    ]))
                  : Object(n["f"])("", !0),
              ]),
            ]),
          ]))
        : Object(n["f"])("", !0);
    }
    var Da = Object(n["l"])({
      props: { equipment: { type: Object, required: !0 } },
      components: { "phone-number": Rt },
      setup(e) {
        const t = Object(n["E"])(
          e.equipment.ownerMember
            ? e.equipment.ownerMember
            : e.equipment.ownerNonMember
            ? e.equipment.ownerNonMember
            : void 0
        );
        return (
          Object(n["U"])(
            () => e.equipment,
            () => {
              t.value = e.equipment.ownerMember
                ? e.equipment.ownerMember
                : e.equipment.ownerNonMember
                ? e.equipment.ownerNonMember
                : void 0;
            }
          ),
          { person: t }
        );
      },
    });
    const Na = j()(Da, [["render", Ca]]);
    var Ma = Na,
      za = Object(n["l"])({
        name: "EquipmentList",
        components: { "equipment-item": Ma },
        props: {
          equipmentList: { type: Array, required: !1, default: () => [] },
          canBeDeleted: { type: Boolean, default: !1, required: !1 },
        },
        emit: ["deleteEquipmentFromList"],
        setup(e, t) {
          const i = Object(Q["b"])(),
            a = Object(n["E"])(e.equipmentList),
            s = (e) => {
              t.emit("deleteEquipmentFromList", e);
            },
            r = (e) => {
              t.emit("editEquipment", e);
            },
            c = Object(n["c"])(() => i.state.insurance.isSubmittingState);
          return (
            Object(n["U"])(
              () => e.equipmentList,
              () => {
                a.value = e.equipmentList;
              }
            ),
            {
              deleteEquipment: s,
              editEquipment: r,
              isSubmitting: c,
              equipment: a,
            }
          );
        },
      });
    const Aa = j()(za, [["render", va]]);
    var Ha = Aa,
      Ra = Object(n["l"])({
        name: "MaterialInusranceDetail",
        components: {
          "responsible-member-detail": Vt,
          "activity-detail": Xt,
          "label-output": Et,
          "base-detail": xi,
          "equipment-list": Ha,
        },
        props: { singlePage: { type: Boolean, default: !1, required: !1 } },
        setup() {
          const e = Object(Q["b"])(),
            t = Object(n["c"])(() => e.state.insurance.materialInsuranceState),
            i = Object(n["c"])(() => e.state.insurance.holderState);
          return {
            MaterialInsuranceRepository: he,
            materialInsuranceState: t,
            formatDate: wi,
            InputTypes: Kt,
            HolderStates: B,
            holderState: i,
          };
        },
      });
    const Ba = j()(Ra, [["render", Zn]]);
    var qa = Ba;
    const Va = { key: 0, class: "mt-1" },
      La = { key: 0 },
      Ga = { key: 0 },
      Pa = Object(n["h"])(
        "p",
        { class: "font-semibold mb-0" },
        "Opmerkingen",
        -1
      ),
      Ka = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Ya = Object(n["h"])("p", { class: "font-semibold mb-0" }, "Datum", -1),
      Ua = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Fa = { class: "mb-3" },
      Wa = Object(n["h"])(
        "p",
        { class: "font-semibold mb-0" },
        "Deelnemers",
        -1
      ),
      Xa = { class: "md:ml-20 xs:ml-5 sm:ml-5 mt-3" },
      Za = { key: 1, class: "mb-3" },
      Ja = Object(n["h"])("p", { class: "font-semibold mb-0" }, "Voertuig", -1),
      $a = { class: "md:ml-20 xs:ml-5 sm:ml-5 mt-3" };
    function Qa(e, t, i, a, s, r) {
      const c = Object(n["H"])("label-output"),
        l = Object(n["H"])("responsible-member-detail"),
        o = Object(n["H"])("activity-detail"),
        d = Object(n["H"])("member-list"),
        u = Object(n["H"])("vehicle-item"),
        b = Object(n["H"])("base-detail");
      return (
        Object(n["y"])(),
        Object(n["e"])(
          b,
          {
            "single-page": e.singlePage,
            data: e.travelAssistanceState,
            repository: e.TravelAssistanceRepository,
            title: "Reisbijstand",
          },
          {
            default: Object(n["W"])(({ details: t }) => [
              t
                ? (Object(n["y"])(),
                  Object(n["g"])("div", Va, [
                    e.holderState !== e.HolderStates.DETAIL
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", La, [
                          t.comment
                            ? (Object(n["y"])(),
                              Object(n["g"])("div", Ga, [
                                Pa,
                                Object(n["h"])("div", Ka, [
                                  Object(n["k"])(
                                    c,
                                    { text: t.comment },
                                    null,
                                    8,
                                    ["text"]
                                  ),
                                ]),
                              ]))
                            : Object(n["f"])("", !0),
                        ]))
                      : Object(n["f"])("", !0),
                    Object(n["G"])(e.$slots, "default"),
                    Object(n["k"])(
                      l,
                      { "responsible-member": t.responsibleMember },
                      null,
                      8,
                      ["responsible-member"]
                    ),
                    Object(n["h"])("div", null, [
                      Ya,
                      Object(n["h"])("div", Ua, [
                        Object(n["k"])(
                          c,
                          {
                            label: "Periode",
                            text: e.formatDate(t.startDate, t.endDate),
                          },
                          null,
                          8,
                          ["text"]
                        ),
                      ]),
                    ]),
                    Object(n["k"])(
                      o,
                      {
                        country: t.country
                          ? "object" === typeof t.country
                            ? t.country.id
                            : t.country
                          : void 0,
                        insuranceType: "3",
                      },
                      null,
                      8,
                      ["country"]
                    ),
                    Object(n["h"])("div", Fa, [
                      Wa,
                      Object(n["h"])("div", Xa, [
                        Object(n["k"])(
                          d,
                          { "members-list": t.participants },
                          null,
                          8,
                          ["members-list"]
                        ),
                      ]),
                    ]),
                    t.vehicle && t.vehicle.licensePlate
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", Za, [
                          Ja,
                          Object(n["h"])("div", $a, [
                            Object(n["k"])(
                              u,
                              { vehicle: t.vehicle, "no-line": !0 },
                              null,
                              8,
                              ["vehicle"]
                            ),
                          ]),
                        ]))
                      : Object(n["f"])("", !0),
                  ]))
                : Object(n["f"])("", !0),
            ]),
            _: 3,
          },
          8,
          ["single-page", "data", "repository"]
        )
      );
    }
    const es = { class: "grid lg:grid-cols-2 bg-gray gap-4 p-4" },
      ts = { key: 0, class: "text-left" },
      is = ["onClick"],
      ns = Object(n["h"])(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          class:
            "h-5 w-5 hover:text-lightGreen cursor-pointer inline-block mt-n1 mr-n1",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
        },
        [
          Object(n["h"])("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
          }),
        ],
        -1
      ),
      as = [ns],
      ss = { class: "font-semibold text-lg" };
    function rs(e, t, i, a, s, r) {
      const c = Object(n["H"])("member-item");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", es, [
          (Object(n["y"])(!0),
          Object(n["g"])(
            n["a"],
            null,
            Object(n["F"])(
              e.members,
              (t, i) => (
                Object(n["y"])(),
                Object(n["g"])("div", { key: t.id, class: "w-full" }, [
                  Object(n["k"])(
                    c,
                    { member: t },
                    {
                      deleteSection: Object(n["W"])(() => [
                        e.canBeDeleted
                          ? Object(n["X"])(
                              (Object(n["y"])(),
                              Object(n["g"])(
                                "div",
                                ts,
                                [
                                  Object(n["h"])(
                                    "a",
                                    {
                                      class:
                                        "hover:text-lightGreen cursor-pointer link-inline",
                                      for: "",
                                      onClick: (t) => e.deleteMemberFromList(i),
                                    },
                                    as,
                                    8,
                                    is
                                  ),
                                ],
                                512
                              )),
                              [[n["S"], !e.isSubmitting]]
                            )
                          : Object(n["f"])("", !0),
                      ]),
                      _: 2,
                    },
                    1032,
                    ["member"]
                  ),
                ])
              )
            ),
            128
          )),
          Object(n["X"])(
            Object(n["h"])("div", ss, "Geen lid geselecteerd", 512),
            [[n["S"], 0 === e.members.length]]
          ),
        ])
      );
    }
    const cs = {
        key: 0,
        class:
          "w-full shadow-md border-b-2 border-black bg-white p-2 h-full inline-block text-left d-flex flex-col justify-content-between",
      },
      ls = { class: "py-3" },
      os = { class: "flex justify-between" },
      ds = { key: 0 },
      us = { key: 1 };
    function bs(e, t, i, a, s, r) {
      const c = Object(n["H"])("phone-number");
      return e.member
        ? (Object(n["y"])(),
          Object(n["g"])("div", cs, [
            Object(n["h"])("div", ls, [
              Object(n["h"])("div", os, [
                Object(n["h"])("div", null, [
                  Object(n["h"])(
                    "strong",
                    null,
                    Object(n["K"])(
                      e.member.firstName + " " + e.member.lastName
                    ),
                    1
                  ),
                ]),
                Object(n["h"])("div", null, [
                  Object(n["G"])(e.$slots, "deleteSection"),
                ]),
              ]),
              e.member.email
                ? (Object(n["y"])(),
                  Object(n["g"])("div", ds, [
                    Object(n["h"])(
                      "p",
                      null,
                      Object(n["K"])(
                        "" !== e.member.email ? e.member.email : "/"
                      ),
                      1
                    ),
                  ]))
                : Object(n["f"])("", !0),
              Object(n["k"])(
                c,
                { phoneNumber: e.member.phoneNumber },
                null,
                8,
                ["phoneNumber"]
              ),
              e.member.postCodeCity && e.member.street
                ? (Object(n["y"])(),
                  Object(n["g"])("div", us, [
                    Object(n["h"])(
                      "p",
                      null,
                      Object(n["K"])(
                        e.member.street +
                          " " +
                          e.member.number +
                          (e.member.letterBox
                            ? " Bus " + e.member.letterBox
                            : "") +
                          ", " +
                          e.member.postCodeCity.postalCode +
                          " " +
                          e.member.postCodeCity.city
                      ),
                      1
                    ),
                  ]))
                : Object(n["f"])("", !0),
              Object(n["h"])("div", null, [
                Object(n["h"])(
                  "p",
                  null,
                  Object(n["K"])(e.member.birthDate),
                  1
                ),
              ]),
            ]),
            Object(n["G"])(e.$slots, "default"),
          ]))
        : Object(n["f"])("", !0);
    }
    var ms = Object(n["l"])({
      props: { member: { type: Object, required: !0 } },
      components: { "phone-number": Rt },
    });
    const ps = j()(ms, [["render", bs]]);
    var vs = ps,
      js = Object(n["l"])({
        name: "MembersList",
        components: { "member-item": vs },
        props: {
          membersList: { type: Array, required: !1, default: () => [] },
          canBeDeleted: { type: Boolean, default: !1, required: !1 },
        },
        emit: ["deleteMemberFromList"],
        setup(e, t) {
          const i = Object(n["E"])(e.membersList),
            a = Object(Q["b"])(),
            s = Object(n["c"])(() => a.state.insurance.isSubmittingState);
          Object(n["U"])(
            () => e.membersList,
            () => {
              i.value = e.membersList;
            }
          );
          const r = (e) => {
            t.emit("deleteMemberFromList", e);
          };
          return { deleteMemberFromList: r, isSubmitting: s, members: i };
        },
      });
    const Os = j()(js, [["render", rs]]);
    var hs = Os;
    const gs = {
        key: 0,
        class:
          "w-full shadow-md border-b-2 border-black bg-white p-2 h-full inline-block text-left d-flex flex-col justify-content-between",
      },
      ys = { key: 0 },
      fs = Object(n["h"])("strong", null, "Merk", -1),
      ks = { key: 1, class: "mt-3" },
      Ss = Object(n["h"])("strong", null, "Nummerplaat", -1),
      Es = { key: 2, class: "mt-3" },
      _s = Object(n["h"])("strong", null, "Bouwjaar", -1),
      Ts = { key: 3, class: "mt-3" },
      xs = Object(n["h"])("strong", null, "Chasisnummer", -1),
      ws = { key: 4, class: "mt-3" },
      Is = Object(n["h"])("strong", null, "Type", -1),
      Cs = { key: 5, class: "mt-3" },
      Ds = Object(n["h"])("strong", null, "Aanhangwagen", -1);
    function Ns(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["G"])(e.$slots, "top"),
            e.vehicle && e.vehicle.licensePlate
              ? (Object(n["y"])(),
                Object(n["g"])("div", gs, [
                  e.vehicle.brand
                    ? (Object(n["y"])(),
                      Object(n["g"])("div", ys, [
                        fs,
                        Object(n["h"])(
                          "p",
                          null,
                          Object(n["K"])(e.vehicle.brand),
                          1
                        ),
                      ]))
                    : Object(n["f"])("", !0),
                  e.vehicle.licensePlate
                    ? (Object(n["y"])(),
                      Object(n["g"])("div", ks, [
                        Ss,
                        Object(n["h"])(
                          "p",
                          null,
                          Object(n["K"])(e.vehicle.licensePlate),
                          1
                        ),
                      ]))
                    : Object(n["f"])("", !0),
                  e.vehicle.constructionYear
                    ? (Object(n["y"])(),
                      Object(n["g"])("div", Es, [
                        _s,
                        Object(n["h"])(
                          "p",
                          null,
                          Object(n["K"])(e.vehicle.constructionYear),
                          1
                        ),
                      ]))
                    : Object(n["f"])("", !0),
                  e.vehicle.chassisNumber
                    ? (Object(n["y"])(),
                      Object(n["g"])("div", Ts, [
                        xs,
                        Object(n["h"])(
                          "p",
                          null,
                          Object(n["K"])(e.vehicle.chassisNumber),
                          1
                        ),
                      ]))
                    : Object(n["f"])("", !0),
                  e.vehicle.type && e.vehicle.type.label
                    ? (Object(n["y"])(),
                      Object(n["g"])("div", ws, [
                        Is,
                        Object(n["h"])(
                          "p",
                          null,
                          Object(n["K"])(e.vehicle.type.label),
                          1
                        ),
                      ]))
                    : Object(n["f"])("", !0),
                  e.vehicle.trailer && e.vehicle.trailer.label
                    ? (Object(n["y"])(),
                      Object(n["g"])("div", Cs, [
                        Ds,
                        Object(n["h"])(
                          "p",
                          null,
                          Object(n["K"])(e.vehicle.trailer.label),
                          1
                        ),
                      ]))
                    : Object(n["f"])("", !0),
                  Object(n["G"])(e.$slots, "default"),
                ]))
              : Object(n["f"])("", !0),
          ],
          64
        )
      );
    }
    var Ms = Object(n["l"])({
      props: { vehicle: { type: Object, required: !0 }, noLine: Boolean },
    });
    const zs = j()(Ms, [["render", Ns]]);
    var As = zs,
      Hs = Object(n["l"])({
        name: "TarvelAssistanceDetail",
        components: {
          "responsible-member-detail": Vt,
          "activity-detail": Xt,
          "label-output": Et,
          "base-detail": xi,
          "member-list": hs,
          "vehicle-item": As,
        },
        props: { singlePage: { type: Boolean, default: !1, required: !1 } },
        setup() {
          const e = Object(Q["b"])(),
            t = Object(n["c"])(() => e.state.insurance.travelAssistanceState),
            i = Object(n["c"])(() => e.state.insurance.holderState);
          return {
            TravelAssistanceRepository: Xe,
            travelAssistanceState: t,
            formatDate: wi,
            InputTypes: Kt,
            HolderStates: B,
            holderState: i,
          };
        },
      });
    const Rs = j()(Hs, [["render", Qa]]);
    var Bs = Rs;
    const qs = { key: 0, class: "mt-1" },
      Vs = { key: 0 },
      Ls = { key: 0 },
      Gs = Object(n["h"])(
        "p",
        { class: "font-semibold mb-0" },
        "Opmerkingen",
        -1
      ),
      Ps = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Ks = Object(n["h"])("p", { class: "font-semibold mb-0" }, "Datum", -1),
      Ys = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Us = Object(n["h"])(
        "p",
        { class: "font-semibold mb-0" },
        "Gekozen verzekering",
        -1
      ),
      Fs = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Ws = { key: 0 },
      Xs = Object(n["h"])("p", null, "Optie 1: Omniumverzekering.", -1),
      Zs = [Xs],
      Js = { key: 1 },
      $s = Object(n["h"])(
        "p",
        { class: "mb-0" },
        "Optie 2: Vrijstelling van eigen omnium dekken.",
        -1
      ),
      Qs = { key: 2 },
      er = Object(n["h"])(
        "p",
        null,
        "Optie 3: Huurvoertuig: vrijstelling verzekering burgerlijke aansprakelijkheid dekken tot 500 euro.",
        -1
      ),
      tr = [er],
      ir = Object(n["h"])(
        "p",
        { class: "font-semibold mb-0" },
        "Bestuurders",
        -1
      ),
      nr = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      ar = { class: "mb-3" },
      sr = Object(n["h"])("p", { class: "font-semibold mb-0" }, "Eigenaar", -1),
      rr = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      cr = { key: 1, class: "mb-3" },
      lr = Object(n["h"])("p", { class: "font-semibold mb-0" }, "Voertuig", -1),
      or = { class: "md:ml-20 xs:ml-5 sm:ml-5" };
    function dr(e, t, i, a, s, r) {
      const c = Object(n["H"])("label-output"),
        l = Object(n["H"])("responsible-member-detail"),
        o = Object(n["H"])("member-list"),
        d = Object(n["H"])("owner"),
        u = Object(n["H"])("vehicle-item"),
        b = Object(n["H"])("base-detail");
      return (
        Object(n["y"])(),
        Object(n["e"])(
          b,
          {
            "single-page": e.singlePage,
            data: e.temporaryVehicleState,
            repository: e.TemporaryVehicleRepository,
            title: "Tijdelijke",
          },
          {
            default: Object(n["W"])(({ details: t }) => [
              t
                ? (Object(n["y"])(),
                  Object(n["g"])("div", qs, [
                    e.holderState !== e.HolderStates.DETAIL
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", Vs, [
                          t.comment
                            ? (Object(n["y"])(),
                              Object(n["g"])("div", Ls, [
                                Gs,
                                Object(n["h"])("div", Ps, [
                                  Object(n["k"])(
                                    c,
                                    { text: t.comment },
                                    null,
                                    8,
                                    ["text"]
                                  ),
                                ]),
                              ]))
                            : Object(n["f"])("", !0),
                        ]))
                      : Object(n["f"])("", !0),
                    Object(n["G"])(e.$slots, "default"),
                    Object(n["k"])(
                      l,
                      { "responsible-member": t.responsibleMember },
                      null,
                      8,
                      ["responsible-member"]
                    ),
                    Object(n["h"])("div", null, [
                      Ks,
                      Object(n["h"])("div", Ys, [
                        Object(n["k"])(
                          c,
                          {
                            label: "Periode",
                            text: e.formatDate(t.startDate, t.endDate),
                          },
                          null,
                          8,
                          ["text"]
                        ),
                      ]),
                    ]),
                    Object(n["h"])("div", null, [
                      Us,
                      Object(n["h"])("div", Fs, [
                        t.insuranceOptions.includes(1)
                          ? (Object(n["y"])(), Object(n["g"])("div", Ws, Zs))
                          : Object(n["f"])("", !0),
                        t.insuranceOptions.includes(2)
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", Js, [
                              $s,
                              Object(n["h"])(
                                "p",
                                null,
                                Object(n["K"])(t.maxCoverage.label),
                                1
                              ),
                            ]))
                          : Object(n["f"])("", !0),
                        t.insuranceOptions.includes(3)
                          ? (Object(n["y"])(), Object(n["g"])("div", Qs, tr))
                          : Object(n["f"])("", !0),
                      ]),
                    ]),
                    Object(n["h"])("div", null, [
                      ir,
                      Object(n["h"])("div", nr, [
                        Object(n["k"])(
                          o,
                          { "members-list": t.drivers },
                          null,
                          8,
                          ["members-list"]
                        ),
                      ]),
                    ]),
                    Object(n["h"])("div", ar, [
                      sr,
                      Object(n["h"])("div", rr, [
                        Object(n["k"])(d, { owner: t.owner }, null, 8, [
                          "owner",
                        ]),
                      ]),
                    ]),
                    t.vehicle && t.vehicle.licensePlate
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", cr, [
                          lr,
                          Object(n["h"])("div", or, [
                            Object(n["k"])(
                              u,
                              { vehicle: t.vehicle, "no-line": !0 },
                              null,
                              8,
                              ["vehicle"]
                            ),
                          ]),
                        ]))
                      : Object(n["f"])("", !0),
                  ]))
                : Object(n["f"])("", !0),
            ]),
            _: 3,
          },
          8,
          ["single-page", "data", "repository"]
        )
      );
    }
    const ur = { key: 0, class: "mb-0" },
      br = Object(n["h"])("strong", null, "Firma naam: ", -1),
      mr = { key: 1 },
      pr = { key: 0 };
    function vr(e, t, i, a, s, r) {
      const c = Object(n["H"])("phone-number");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          e.owner.companyName
            ? (Object(n["y"])(),
              Object(n["g"])("p", ur, [
                br,
                Object(n["j"])(Object(n["K"])(e.owner.companyName), 1),
              ]))
            : Object(n["f"])("", !0),
          e.owner.firstName
            ? (Object(n["y"])(),
              Object(n["g"])(
                "p",
                mr,
                Object(n["K"])(e.owner.firstName + " " + e.owner.lastName),
                1
              ))
            : Object(n["f"])("", !0),
          Object(n["h"])("div", null, [
            Object(n["h"])(
              "p",
              null,
              Object(n["K"])(
                e.owner.street +
                  " " +
                  e.owner.number +
                  (e.owner.letterBox ? " Bus " + e.owner.letterBox : "") +
                  ", " +
                  e.owner.postCodeCity.postalCode +
                  " " +
                  e.owner.postCodeCity.city
              ),
              1
            ),
          ]),
          Object(n["k"])(c, { phoneNumber: e.owner.phoneNumber }, null, 8, [
            "phoneNumber",
          ]),
          Object(n["h"])("div", null, [
            e.owner.companyName
              ? Object(n["f"])("", !0)
              : (Object(n["y"])(),
                Object(n["g"])("p", pr, Object(n["K"])(e.owner.birthDate), 1)),
          ]),
        ])
      );
    }
    var jr = Object(n["l"])({
      name: "Owner",
      components: { "phone-number": Rt },
      props: { owner: { type: Object, required: !0 } },
    });
    const Or = j()(jr, [["render", vr]]);
    var hr = Or,
      gr = Object(n["l"])({
        name: "TemporaryVehicleDetail",
        components: {
          "responsible-member-detail": Vt,
          "label-output": Et,
          "vehicle-item": As,
          "base-detail": xi,
          "member-list": hs,
          Owner: hr,
        },
        props: { singlePage: { type: Boolean, default: !1, required: !1 } },
        setup() {
          const e = Object(Q["b"])(),
            t = Object(n["c"])(() => e.state.insurance.temporaryVehicleState),
            i = Object(n["c"])(() => e.state.insurance.holderState);
          return {
            TemporaryVehicleRepository: Ye,
            temporaryVehicleState: t,
            formatDate: wi,
            InputTypes: Kt,
            HolderStates: B,
            holderState: i,
          };
        },
      });
    const yr = j()(gr, [["render", dr]]);
    var fr = yr;
    const kr = { key: 0 },
      Sr = { key: 1, class: "mt-1" },
      Er = { key: 0 },
      _r = { key: 0 },
      Tr = Object(n["h"])(
        "p",
        { class: "font-semibold mb-0" },
        "Opmerkingen",
        -1
      ),
      xr = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      wr = Object(n["h"])("p", { class: "font-semibold mb-0" }, "Datum", -1),
      Ir = { class: "md:ml-20 xs:ml-5 sm:ml-5" };
    function Cr(e, t, i, a, s, r) {
      const c = Object(n["H"])("participants-file-section"),
        l = Object(n["H"])("label-output"),
        o = Object(n["H"])("responsible-member-detail"),
        d = Object(n["H"])("activity-detail"),
        u = Object(n["H"])("base-detail");
      return (
        Object(n["y"])(),
        Object(n["e"])(
          u,
          {
            "single-page": e.singlePage,
            data: e.eventInsuranceState,
            repository: e.EventRepository,
            title: "evenementenverzekering",
          },
          {
            default: Object(n["W"])(({ details: t }) => [
              t && t.status && "Goedgekeurd" === t.status.label
                ? (Object(n["y"])(),
                  Object(n["g"])("div", kr, [
                    Object(n["k"])(
                      c,
                      { inscuranceType: "events", details: t },
                      null,
                      8,
                      ["details"]
                    ),
                  ]))
                : Object(n["f"])("", !0),
              t
                ? (Object(n["y"])(),
                  Object(n["g"])("div", Sr, [
                    e.holderState !== e.HolderStates.DETAIL
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", Er, [
                          t.comment
                            ? (Object(n["y"])(),
                              Object(n["g"])("div", _r, [
                                Tr,
                                Object(n["h"])("div", xr, [
                                  Object(n["k"])(
                                    l,
                                    { text: t.comment },
                                    null,
                                    8,
                                    ["text"]
                                  ),
                                ]),
                              ]))
                            : Object(n["f"])("", !0),
                        ]))
                      : Object(n["f"])("", !0),
                    Object(n["G"])(e.$slots, "default"),
                    Object(n["k"])(
                      o,
                      { "responsible-member": t.responsibleMember },
                      null,
                      8,
                      ["responsible-member"]
                    ),
                    Object(n["h"])("div", null, [
                      wr,
                      Object(n["h"])("div", Ir, [
                        Object(n["k"])(
                          l,
                          {
                            label: "Periode",
                            text: e.formatEventDate(
                              t.startDate,
                              t.startTime,
                              t.endDate,
                              t.endTime
                            ),
                          },
                          null,
                          8,
                          ["text"]
                        ),
                      ]),
                    ]),
                    Object(n["k"])(
                      d,
                      {
                        nature: t.nature,
                        "event-size": t.eventSize,
                        location: t.location,
                      },
                      null,
                      8,
                      ["nature", "event-size", "location"]
                    ),
                  ]))
                : Object(n["f"])("", !0),
            ]),
            _: 3,
          },
          8,
          ["single-page", "data", "repository"]
        )
      );
    }
    var Dr = Object(n["l"])({
      name: "EventInsuranceDetail",
      components: {
        "responsible-member-detail": Vt,
        "activity-detail": Xt,
        "label-output": Et,
        "base-detail": xi,
        ParticipantsFileSection: Bn,
      },
      props: { singlePage: { type: Boolean, default: !1, required: !1 } },
      setup() {
        const e = Object(Q["b"])(),
          t = Object(n["c"])(() => e.state.insurance.eventState),
          i = Object(n["c"])(() => e.state.insurance.holderState);
        return {
          eventInsuranceState: t,
          EventRepository: se,
          formatEventDate: Ii,
          CustomHeadline2: qi,
          HolderStates: B,
          holderState: i,
          InputTypes: Kt,
          FileUpload: fn,
        };
      },
    });
    const Nr = j()(Dr, [["render", Cr]]);
    var Mr = Nr;
    const zr = { key: 0, class: "mt-1" },
      Ar = { key: 0 },
      Hr = { key: 0 },
      Rr = Object(n["h"])(
        "p",
        { class: "font-semibold mb-0" },
        "Opmerkingen",
        -1
      ),
      Br = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      qr = Object(n["h"])("p", { class: "font-semibold mb-0" }, "Datum", -1),
      Vr = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Lr = { class: "mb-3" },
      Gr = Object(n["h"])(
        "p",
        { class: "font-semibold mb-0" },
        "Deelnemers",
        -1
      ),
      Pr = { class: "md:ml-20 xs:ml-5 sm:ml-5" };
    function Kr(e, t, i, a, s, r) {
      const c = Object(n["H"])("label-output"),
        l = Object(n["H"])("responsible-member-detail"),
        o = Object(n["H"])("activity-detail"),
        d = Object(n["H"])("non-members-list"),
        u = Object(n["H"])("base-detail");
      return (
        Object(n["y"])(),
        Object(n["e"])(
          u,
          {
            "single-page": e.singlePage,
            data: e.nonMemberState,
            repository: e.NonMemberInsuranceRepository,
            title: "Niet leden",
          },
          {
            default: Object(n["W"])(({ details: t }) => [
              t
                ? (Object(n["y"])(),
                  Object(n["g"])("div", zr, [
                    e.holderState !== e.HolderStates.DETAIL
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", Ar, [
                          t.comment
                            ? (Object(n["y"])(),
                              Object(n["g"])("div", Hr, [
                                Rr,
                                Object(n["h"])("div", Br, [
                                  Object(n["k"])(
                                    c,
                                    { text: t.comment },
                                    null,
                                    8,
                                    ["text"]
                                  ),
                                ]),
                              ]))
                            : Object(n["f"])("", !0),
                        ]))
                      : Object(n["f"])("", !0),
                    Object(n["G"])(e.$slots, "default"),
                    Object(n["k"])(
                      l,
                      { "responsible-member": t.responsibleMember },
                      null,
                      8,
                      ["responsible-member"]
                    ),
                    Object(n["h"])("div", null, [
                      qr,
                      Object(n["h"])("div", Vr, [
                        Object(n["k"])(
                          c,
                          {
                            label: "Periode",
                            text: e.formatDate(t.startDate, t.endDate),
                          },
                          null,
                          8,
                          ["text"]
                        ),
                      ]),
                    ]),
                    Object(n["k"])(
                      o,
                      {
                        nature: t.nature,
                        location: t.postCodeCity,
                        country: t.country
                          ? "object" === typeof t.country
                            ? t.country.id
                            : t.country
                          : void 0,
                        insuranceType: "2",
                      },
                      null,
                      8,
                      ["nature", "location", "country"]
                    ),
                    Object(n["h"])("div", Lr, [
                      Gr,
                      Object(n["h"])("div", Pr, [
                        Object(n["k"])(
                          d,
                          { "non-members-list": t.nonMembers },
                          null,
                          8,
                          ["non-members-list"]
                        ),
                      ]),
                    ]),
                  ]))
                : Object(n["f"])("", !0),
            ]),
            _: 3,
          },
          8,
          ["single-page", "data", "repository"]
        )
      );
    }
    const Yr = { class: "grid lg:grid-cols-2 bg-gray gap-4 p-4" },
      Ur = { key: 0, class: "text-left" },
      Fr = ["onClick"],
      Wr = Object(n["h"])(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          class:
            "h-5 w-5 hover:text-lightGreen cursor-pointer inline-block mt-n1 mr-0",
          viewBox: "0 0 20 20",
          fill: "currentColor",
        },
        [
          Object(n["h"])("path", {
            d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z",
          }),
        ],
        -1
      ),
      Xr = [Wr],
      Zr = ["onClick"],
      Jr = Object(n["h"])(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          class:
            "h-5 w-5 hover:text-lightGreen cursor-pointer inline-block mt-n1 mr-n1",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
        },
        [
          Object(n["h"])("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
          }),
        ],
        -1
      ),
      $r = [Jr],
      Qr = { class: "font-semibold text-lg" };
    function ec(e, t, i, a, s, r) {
      const c = Object(n["H"])("non-member-item");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", Yr, [
          (Object(n["y"])(!0),
          Object(n["g"])(
            n["a"],
            null,
            Object(n["F"])(
              e.nonMembers,
              (t, i) => (
                Object(n["y"])(),
                Object(n["g"])(
                  "div",
                  { key: t.id, class: "w-full text-center" },
                  [
                    Object(n["k"])(
                      c,
                      { "non-member": t },
                      {
                        default: Object(n["W"])(() => [
                          e.canBeDeleted
                            ? Object(n["X"])(
                                (Object(n["y"])(),
                                Object(n["g"])(
                                  "div",
                                  Ur,
                                  [
                                    Object(n["h"])(
                                      "a",
                                      {
                                        class:
                                          "hover:text-lightGreen cursor-pointer link-inline inline-block mr-3",
                                        for: "",
                                        onClick: (n) => e.editNonMember(t, i),
                                      },
                                      Xr,
                                      8,
                                      Fr
                                    ),
                                    Object(n["h"])(
                                      "a",
                                      {
                                        class:
                                          "hover:text-lightGreen cursor-pointer link-inline",
                                        for: "",
                                        onClick: (t) => e.deleteNonMember(i),
                                      },
                                      $r,
                                      8,
                                      Zr
                                    ),
                                  ],
                                  512
                                )),
                                [[n["S"], !e.isSubmitting]]
                              )
                            : Object(n["f"])("", !0),
                        ]),
                        _: 2,
                      },
                      1032,
                      ["non-member"]
                    ),
                  ]
                )
              )
            ),
            128
          )),
          Object(n["X"])(
            Object(n["h"])("div", Qr, "Geen persoon geselecteerd", 512),
            [[n["S"], 0 === e.nonMembers.length]]
          ),
        ])
      );
    }
    const tc = {
        key: 0,
        class:
          "w-full shadow-md border-b-2 border-black bg-white p-2 h-full inline-block text-left d-flex flex-col justify-content-between",
      },
      ic = { class: "py-3" },
      nc = { class: "flex justify-between" },
      ac = { class: "mt-1" },
      sc = { key: 0 };
    function rc(e, t, i, a, s, r) {
      return e.nonMember
        ? (Object(n["y"])(),
          Object(n["g"])("div", tc, [
            Object(n["G"])(e.$slots, "top"),
            Object(n["h"])("div", ic, [
              Object(n["h"])("div", nc, [
                Object(n["h"])("div", null, [
                  Object(n["h"])(
                    "strong",
                    null,
                    Object(n["K"])(
                      e.nonMember.firstName + " " + e.nonMember.lastName
                    ),
                    1
                  ),
                ]),
                Object(n["h"])("div", null, [
                  Object(n["G"])(e.$slots, "default"),
                ]),
              ]),
              Object(n["h"])("div", null, [
                Object(n["h"])(
                  "p",
                  null,
                  Object(n["K"])(
                    e.nonMember.street +
                      " " +
                      e.nonMember.number +
                      (e.nonMember.letterBox
                        ? " Bus " + e.nonMember.letterBox
                        : "") +
                      ", " +
                      e.nonMember.postCodeCity.postalCode +
                      " " +
                      e.nonMember.postCodeCity.city
                  ),
                  1
                ),
              ]),
              Object(n["h"])("div", null, [
                Object(n["h"])(
                  "p",
                  null,
                  Object(n["K"])(e.nonMember.birthDate),
                  1
                ),
              ]),
              Object(n["h"])("div", ac, [
                e.nonMember.comment
                  ? (Object(n["y"])(),
                    Object(n["g"])("strong", sc, "Opmerking"))
                  : Object(n["f"])("", !0),
                Object(n["h"])(
                  "p",
                  null,
                  Object(n["K"])(e.nonMember.comment),
                  1
                ),
              ]),
            ]),
          ]))
        : Object(n["f"])("", !0);
    }
    var cc = Object(n["l"])({
      props: { nonMember: { type: Object, required: !0 } },
    });
    const lc = j()(cc, [["render", rc]]);
    var oc = lc,
      dc = Object(n["l"])({
        name: "NonMembersList",
        components: { "non-member-item": oc },
        props: {
          nonMembersList: { type: Array, required: !1, default: () => [] },
          canBeDeleted: { type: Boolean, default: !1, required: !1 },
        },
        emit: ["deleteNonMemberFromList", "selectedIndex"],
        setup(e, t) {
          const i = Object(n["E"])(e.nonMembersList);
          Object(n["U"])(
            () => e.nonMembersList,
            () => {
              i.value = e.nonMembersList;
            }
          );
          const a = (e) => {
              t.emit("deleteNonMemberFromList", e);
            },
            s = (e, i) => {
              t.emit("editNonMember", e), t.emit("selectedIndex", i);
            },
            r = Object(Q["b"])(),
            c = Object(n["c"])(() => r.state.insurance.isSubmittingState);
          return {
            deleteNonMember: a,
            editNonMember: s,
            isSubmitting: c,
            nonMembers: i,
          };
        },
      });
    const uc = j()(dc, [["render", ec]]);
    var bc = uc,
      mc = Object(n["l"])({
        name: "NonMemberInsuranceDetail",
        components: {
          "responsible-member-detail": Vt,
          "activity-detail": Xt,
          "label-output": Et,
          "base-detail": xi,
          "non-members-list": bc,
        },
        props: { singlePage: { type: Boolean, default: !1, required: !1 } },
        setup() {
          const e = Object(Q["b"])(),
            t = Object(n["c"])(() => e.state.insurance.nonMemberState),
            i = Object(n["c"])(() => e.state.insurance.holderState);
          return {
            NonMemberInsuranceRepository: fe,
            nonMemberState: t,
            formatDate: wi,
            InputTypes: Kt,
            HolderStates: B,
            holderState: i,
          };
        },
      });
    const pc = j()(mc, [["render", Kr]]);
    var vc = pc;
    const jc = { class: "container" },
      Oc = { key: 0 },
      hc = { class: "container" };
    function gc(e, t, i, a, s, r) {
      const c = Object(n["H"])("request-bread-crumb"),
        l = Object(n["H"])("state-form-holder");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["h"])("div", jc, [
              Object(n["k"])(c),
              e.data.vvksComment &&
              e.holderState !== e.HolderStates.COMPLETED &&
              e.holderState !== e.HolderStates.DETAIL
                ? (Object(n["y"])(), Object(n["g"])("div", Oc))
                : Object(n["f"])("", !0),
            ]),
            Object(n["h"])("div", hc, [Object(n["k"])(l)]),
          ],
          64
        )
      );
    }
    const yc = { class: "flex smo:flex-col py-3" };
    function fc(e, t, i, a, s, r) {
      const c = Object(n["H"])("bread-crumb-item");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", yc, [
          Object(n["k"])(
            c,
            {
              "is-change-state-possible":
                e.holderState === e.HolderStates.TYPE ||
                e.holderState === e.HolderStates.DETAIL,
              "visible-on-state": e.HolderStates.GENERAL,
              index: "1",
              text: "Algemeen",
            },
            null,
            8,
            ["is-change-state-possible", "visible-on-state"]
          ),
          Object(n["k"])(
            c,
            {
              "is-change-state-possible":
                e.holderState === e.HolderStates.DETAIL,
              "visible-on-state": e.HolderStates.TYPE,
              index: "2",
              text: e.displayCorrectTypeLabel(e.insuranceTypeState),
            },
            null,
            8,
            ["is-change-state-possible", "visible-on-state", "text"]
          ),
          Object(n["k"])(
            c,
            {
              "is-change-state-possible": !1,
              "visible-on-state": e.HolderStates.DETAIL,
              index: "3",
              text: "Overzicht",
            },
            null,
            8,
            ["visible-on-state"]
          ),
          Object(n["k"])(
            c,
            {
              "is-change-state-possible": !1,
              "visible-on-state": e.HolderStates.COMPLETED,
              index: "4",
              text: "Verzonden",
            },
            null,
            8,
            ["visible-on-state"]
          ),
        ])
      );
    }
    const kc = { class: "flex smo:mb-2", style: { "margin-right": "2em" } },
      Sc = { key: 3, class: "pt-2 pl-3" };
    function Ec(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])("div", kc, [
          e.isChangeStatePossible
            ? (Object(n["y"])(),
              Object(n["g"])(
                "div",
                {
                  key: 0,
                  class: Object(n["s"])([
                    "h-10 w-10 text-center p-2 rounded-full border-2 border-lightGray cursor-pointer",
                    e.visibleOnState === e.holderState ? "bg-lightGreen" : "",
                  ]),
                  onClick: t[0] || (t[0] = (t) => e.changeState()),
                },
                Object(n["K"])(e.index),
                3
              ))
            : (Object(n["y"])(),
              Object(n["g"])(
                "div",
                {
                  key: 1,
                  class: Object(n["s"])([
                    "h-10 w-10 text-center p-2 rounded-full border-2 border-lightGray",
                    e.visibleOnState === e.holderState ? "bg-lightGreen" : "",
                  ]),
                },
                Object(n["K"])(e.index),
                3
              )),
          e.isChangeStatePossible
            ? (Object(n["y"])(),
              Object(n["g"])(
                "div",
                {
                  key: 2,
                  class: "pt-2 pl-3 cursor-pointer",
                  onClick: t[1] || (t[1] = (t) => e.changeState()),
                },
                Object(n["K"])(e.text),
                1
              ))
            : (Object(n["y"])(),
              Object(n["g"])("div", Sc, Object(n["K"])(e.text), 1)),
        ])
      );
    }
    var _c = Object(n["l"])({
      name: "BreadCrumbItem",
      props: {
        index: { type: String, required: !0 },
        text: { type: String, required: !0 },
        visibleOnState: { type: String, required: !0 },
        isChangeStatePossible: { type: Boolean, Required: !0 },
      },
      setup(e) {
        const t = Object(Q["b"])(),
          i = Object(n["c"])(() => t.state.insurance.holderState),
          a = () => {
            e.isChangeStatePossible &&
              t.dispatch("setHolderState", e.visibleOnState);
          };
        return { changeState: a, holderState: i };
      },
    });
    const Tc = j()(_c, [["render", Ec]]);
    var xc = Tc;
    const wc = (e) => {
        switch (e) {
          case Ze.EENMALIGE_ACTIVITEIT:
            return "Verzekering eenmalige activiteit";
          case Ze.TIJDELIJKE_VERZEKERING_NIET_LEDEN:
            return "Tijdelijke verzekering niet-leden";
          case Ze.REIS_BIJSTAND:
            return "Reisbijstand";
          case Ze.TIJDELIJKE_AUTO_VERZEKERING:
            return "Tijdelijke autoverzekering";
          case Ze.EVENEMENTEN_VERZEKERING:
            return "Evenementenverzekering";
          case Ze.MATERIAAL_VERZEKERING:
            return "Materiaalverzekering";
          default:
            return "No correct type selected";
        }
      },
      Ic = (e, t) => e === t;
    var Cc = Object(n["l"])({
      name: "RequestBreadCrumb",
      components: { "bread-crumb-item": xc },
      setup() {
        const e = Object(Q["b"])(),
          t = Object(n["c"])(() => e.state.insurance.insuranceTypeState),
          i = Object(n["c"])(() => e.state.insurance.holderState);
        return {
          displayCorrectTypeLabel: wc,
          insuranceTypeState: t,
          HolderStates: B,
          holderState: i,
        };
      },
    });
    const Dc = j()(Cc, [["render", fc]]);
    var Nc = Dc;
    const Mc = { key: 0 },
      zc = { key: 1 };
    function Ac(e, t, i, a, s, r) {
      const c = Object(n["H"])("request-insurance-general"),
        l = Object(n["H"])("request-insurance-type"),
        o = Object(n["H"])("request-insurance-submit"),
        d = Object(n["H"])("request-insurance-detail");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["X"])(
              Object(n["h"])("div", null, [Object(n["k"])(c)], 512),
              [[n["S"], e.holderState === e.HolderStates.GENERAL]]
            ),
            Object(n["X"])(
              Object(n["h"])("div", null, [Object(n["k"])(l)], 512),
              [[n["S"], e.holderState === e.HolderStates.TYPE]]
            ),
            e.holderState === e.HolderStates.DETAIL
              ? (Object(n["y"])(),
                Object(n["g"])("div", Mc, [Object(n["k"])(o)]))
              : Object(n["f"])("", !0),
            e.holderState === e.HolderStates.COMPLETED
              ? (Object(n["y"])(),
                Object(n["g"])("div", zc, [Object(n["k"])(d)]))
              : Object(n["f"])("", !0),
          ],
          64
        )
      );
    }
    const Hc = (e) => (
        Object(n["B"])("data-v-043ab700"), (e = e()), Object(n["z"])(), e
      ),
      Rc = { class: "mb-5" },
      Bc = { key: 0, class: "mt-3" },
      qc = { class: "md:ml-20 xs:ml-5 sm:ml-5 mb-5" },
      Vc = Hc(() =>
        Object(n["h"])(
          "div",
          null,
          [
            Object(n["h"])(
              "strong",
              null,
              "Gebruik bij twijfel deze keuzehulp"
            ),
          ],
          -1
        )
      ),
      Lc = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Gc = Hc(() =>
        Object(n["h"])(
          "div",
          { class: "mt-4" },
          [Object(n["h"])("strong", null, "Vink hier je optie(s) aan")],
          -1
        )
      ),
      Pc = { class: "mt-2 md:ml-20 xs:ml-5 sm:ml-5" },
      Kc = { class: "flex" },
      Yc = Hc(() =>
        Object(n["h"])(
          "label",
          { for: "choice-1" },
          "Optie 1: Omniumverzekering.",
          -1
        )
      ),
      Uc = { class: "mt-4" },
      Fc = { class: "flex" },
      Wc = Hc(() =>
        Object(n["h"])(
          "label",
          { class: "custom-label", for: "choice-2" },
          "Optie 2: Vrijstelling van eigen omnium dekken.",
          -1
        )
      ),
      Xc = { key: 0, class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Zc = { style: { "margin-top": "-2em" }, class: "w-80" },
      Jc = { class: "flex mt-4" },
      $c = Hc(() =>
        Object(n["h"])(
          "label",
          { class: "custom-label", for: "choice-3" },
          "Optie 3: Huurvoertuig: vrijstelling verzekering burgerlijke aansprakelijkheid dekken tot 500 euro. ",
          -1
        )
      ),
      Qc = { class: "ml-5" },
      el = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      tl = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      il = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      nl = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      al = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      sl = { class: "mb-5" },
      rl = { class: "md:ml-20 xs:ml-5 sm:ml-5 md:flex md:gap-4" },
      cl = { class: "md:ml-20 xs:ml-5 sm:ml-5 pt-2" },
      ll = { class: "mb-5" },
      ol = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      dl = Hc(() =>
        Object(n["h"])(
          "p",
          null,
          "De factuur wordt naar de financieel verantwoordelijke van je groep gestuurd.",
          -1
        )
      ),
      ul = { class: "group-selector" },
      bl = { class: "mb-5" },
      ml = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      pl = Object(n["j"])(" Staat er een fout in je gegevens? Pas ze dan aan "),
      vl = Hc(() =>
        Object(n["h"])(
          "strong",
          null,
          [
            Object(n["h"])(
              "a",
              {
                target: "_blank",
                href: "https://groepsadmin.scoutsengidsenvlaanderen.be/",
              },
              "in de Groepsadministratie"
            ),
          ],
          -1
        )
      ),
      jl = Object(n["j"])(" en klik vervolgens op Herlaad. "),
      Ol = { class: "flex gap-3 md:ml-20 xs:ml-5 sm:ml-5 mt-5 items-center" };
    function hl(e, t, i, a, s, r) {
      const c = Object(n["H"])("custom-headline-2"),
        l = Object(n["H"])("insurance-type-menu"),
        o = Object(n["H"])("tip-general-vehicle-insurance"),
        d = Object(n["H"])("tip-choice-help"),
        u = Object(n["H"])("multi-select"),
        b = Object(n["H"])("custom-input"),
        m = Object(n["H"])("tip-general-non-member"),
        p = Object(n["H"])("tip-general-travel-assistance"),
        v = Object(n["H"])("tip-general-material-insurance"),
        j = Object(n["H"])("tip-general-event-insurance"),
        O = Object(n["H"])("tip-general-one-time-insurance"),
        h = Object(n["H"])("date-disclaimer"),
        g = Object(n["H"])("insurance-applicant"),
        y = Object(n["H"])("custom-button"),
        f = Object(n["H"])("info-alert"),
        k = Object(n["H"])("loader");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          "form",
          {
            id: "RequestInsuranceGeneral",
            onSubmit:
              t[5] ||
              (t[5] = Object(n["Z"])(
                (...t) => e.onSubmit && e.onSubmit(...t),
                ["prevent"]
              )),
          },
          [
            Object(n["h"])("div", Rc, [
              Object(n["k"])(c, { text: "Welke" }),
              Object(n["k"])(l, { disabled: e.isEdit }, null, 8, ["disabled"]),
              e.insuranceTypeState ===
              e.InsuranceTypes.TIJDELIJKE_AUTO_VERZEKERING
                ? (Object(n["y"])(),
                  Object(n["g"])("div", Bc, [
                    Object(n["h"])("div", qc, [Object(n["k"])(o)]),
                    Object(n["k"])(c, {
                      text: "Je hebt drie opties voor een tijdelijke autoverzekering",
                    }),
                    Vc,
                    Object(n["h"])("div", Lc, [Object(n["k"])(d)]),
                    Gc,
                    Object(n["h"])("div", Pc, [
                      Object(n["h"])("div", Kc, [
                        Object(n["X"])(
                          Object(n["h"])(
                            "input",
                            {
                              id: "choice-1",
                              "onUpdate:modelValue":
                                t[0] ||
                                (t[0] = (t) => (e.values.insuranceOptions = t)),
                              class: "mr-2 mt-1.5",
                              type: "checkbox",
                              value: 1,
                            },
                            null,
                            512
                          ),
                          [[n["O"], e.values.insuranceOptions]]
                        ),
                        Yc,
                      ]),
                      Object(n["h"])("div", Uc, [
                        Object(n["h"])("div", Fc, [
                          Object(n["X"])(
                            Object(n["h"])(
                              "input",
                              {
                                id: "choice-2",
                                "onUpdate:modelValue":
                                  t[1] ||
                                  (t[1] = (t) =>
                                    (e.values.insuranceOptions = t)),
                                class: "mr-2",
                                type: "checkbox",
                                value: 2,
                              },
                              null,
                              512
                            ),
                            [[n["O"], e.values.insuranceOptions]]
                          ),
                          Wc,
                        ]),
                        e.values.insuranceOptions.includes(2)
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", Xc, [
                              Object(n["h"])("div", Zc, [
                                Object(n["k"])(
                                  u,
                                  {
                                    id: "maxCoverage",
                                    rules: "required",
                                    object: !0,
                                    "track-by": "label",
                                    "value-prop": "value",
                                    repository: e.maxCoverageRepository,
                                    options: e.maxCoverageOptions,
                                    placeholder: "vrijstelling dekken tot",
                                  },
                                  null,
                                  8,
                                  ["repository", "options"]
                                ),
                              ]),
                            ]))
                          : Object(n["f"])("", !0),
                      ]),
                      Object(n["h"])("div", Jc, [
                        Object(n["X"])(
                          Object(n["h"])(
                            "input",
                            {
                              id: "choice-3",
                              "onUpdate:modelValue":
                                t[2] ||
                                (t[2] = (t) => (e.values.insuranceOptions = t)),
                              class: "mr-2",
                              type: "checkbox",
                              value: 3,
                            },
                            null,
                            512
                          ),
                          [[n["O"], e.values.insuranceOptions]]
                        ),
                        $c,
                      ]),
                    ]),
                    Object(n["h"])("div", Qc, [
                      Object(n["X"])(
                        Object(n["k"])(
                          b,
                          {
                            "hide-input": "true",
                            type: e.InputTypes.TEXT,
                            rules: "required",
                            name: "insuranceOptions",
                          },
                          null,
                          8,
                          ["type"]
                        ),
                        [[n["S"], !0]]
                      ),
                    ]),
                  ]))
                : Object(n["f"])("", !0),
              Object(n["X"])(
                Object(n["h"])("div", el, [Object(n["k"])(m)], 512),
                [
                  [
                    n["S"],
                    e.insuranceTypeState ===
                      e.InsuranceTypes.TIJDELIJKE_VERZEKERING_NIET_LEDEN,
                  ],
                ]
              ),
              Object(n["X"])(
                Object(n["h"])("div", tl, [Object(n["k"])(p)], 512),
                [
                  [
                    n["S"],
                    e.insuranceTypeState === e.InsuranceTypes.REIS_BIJSTAND,
                  ],
                ]
              ),
              Object(n["X"])(
                Object(n["h"])("div", il, [Object(n["k"])(v)], 512),
                [
                  [
                    n["S"],
                    e.insuranceTypeState ===
                      e.InsuranceTypes.MATERIAAL_VERZEKERING,
                  ],
                ]
              ),
              Object(n["X"])(
                Object(n["h"])("div", nl, [Object(n["k"])(j)], 512),
                [
                  [
                    n["S"],
                    e.insuranceTypeState ===
                      e.InsuranceTypes.EVENEMENTEN_VERZEKERING,
                  ],
                ]
              ),
              Object(n["X"])(
                Object(n["h"])("div", al, [Object(n["k"])(O)], 512),
                [
                  [
                    n["S"],
                    e.insuranceTypeState ===
                      e.InsuranceTypes.EENMALIGE_ACTIVITEIT,
                  ],
                ]
              ),
            ]),
            Object(n["h"])("div", sl, [
              Object(n["k"])(c, { text: "Wanneer" }),
              Object(n["h"])("div", rl, [
                Object(n["h"])(
                  "div",
                  {
                    class: Object(n["s"])([
                      "flex gap-4",
                      e.insuranceTypeState ===
                      e.InsuranceTypes.EVENEMENTEN_VERZEKERING
                        ? "w-96"
                        : "w-70",
                    ]),
                  },
                  [
                    Object(n["k"])(
                      b,
                      {
                        onInvalid:
                          "this.setCustomValidity('De verzekering moet minstens 1 dag op voorhand aangevraagd worden.')",
                        "loading-submit": e.isSubmitting,
                        min: e.minDate,
                        type: e.InputTypes.DATE,
                        rules: "required",
                        name: "startDate",
                        label: "Startdatum",
                      },
                      null,
                      8,
                      ["loading-submit", "min", "type"]
                    ),
                    e.insuranceTypeState ===
                    e.InsuranceTypes.EVENEMENTEN_VERZEKERING
                      ? (Object(n["y"])(),
                        Object(n["e"])(
                          b,
                          {
                            key: 0,
                            "oading-submit": e.isSubmitting,
                            rules: "required",
                            type: e.InputTypes.TIME,
                            name: "startTime",
                            label: "Starttijd",
                            step: "3600",
                          },
                          null,
                          8,
                          ["oading-submit", "type"]
                        ))
                      : Object(n["f"])("", !0),
                  ],
                  2
                ),
                Object(n["h"])(
                  "div",
                  {
                    class: Object(n["s"])([
                      "flex xs:mt-5 md:mt-0 gap-4",
                      e.insuranceTypeState ===
                      e.InsuranceTypes.EVENEMENTEN_VERZEKERING
                        ? "w-96"
                        : "w-80",
                    ]),
                  },
                  [
                    Object(n["k"])(
                      b,
                      {
                        onInvalid:
                          "this.setCustomValidity('De verzekering moet minstens 1 dag op voorhand aangevraagd worden.')",
                        "loading-submit": e.isSubmitting,
                        min: e.minDate,
                        type: e.InputTypes.DATE,
                        rules:
                          "required|startDateBeforeEndDate:startDate|maximumDateTerm:startDate",
                        name: "endDate",
                        label: "Einddatum",
                      },
                      null,
                      8,
                      ["loading-submit", "min", "type"]
                    ),
                    e.insuranceTypeState ===
                    e.InsuranceTypes.EVENEMENTEN_VERZEKERING
                      ? (Object(n["y"])(),
                        Object(n["e"])(
                          b,
                          {
                            key: 0,
                            rules: "required",
                            step: "3600",
                            type: e.InputTypes.TIME,
                            name: "endTime",
                            label: "Eindtijd",
                            "loading-submit": e.isSubmitting,
                          },
                          null,
                          8,
                          ["type", "loading-submit"]
                        ))
                      : Object(n["f"])("", !0),
                  ],
                  2
                ),
              ]),
              Object(n["h"])("div", cl, [Object(n["k"])(h)]),
            ]),
            Object(n["h"])("div", ll, [
              Object(n["k"])(c, { text: "Groep" }),
              Object(n["h"])("div", ol, [
                dl,
                Object(n["h"])("div", null, [
                  Object(n["h"])("div", ul, [
                    Object(n["k"])(
                      u,
                      {
                        id: "group",
                        object: !0,
                        disabled: e.isEdit,
                        rules: "required",
                        placeholder: "Groep",
                        "track-by": "fullInfo",
                        "value-prop": "id",
                        options: e.userData.scoutsGroups,
                        label: "Selecteer je groep",
                        "loading-submit": e.isSubmitting,
                      },
                      null,
                      8,
                      ["disabled", "options", "loading-submit"]
                    ),
                  ]),
                ]),
              ]),
            ]),
            Object(n["h"])("div", bl, [
              Object(n["k"])(c, { text: "Aanvrager" }),
              Object(n["h"])("div", ml, [
                Object(n["k"])(
                  g,
                  { applicant: e.values.responsibleMember },
                  null,
                  8,
                  ["applicant"]
                ),
              ]),
            ]),
            Object(n["h"])("div", null, [
              Object(n["k"])(f, null, {
                default: Object(n["W"])(() => [
                  Object(n["h"])("p", null, [
                    pl,
                    vl,
                    jl,
                    Object(n["k"])(
                      y,
                      {
                        loadingSubmit: e.isRefreshing,
                        type: "button",
                        class: "ml-2 mt-2",
                        text: "Herlaad",
                        onClick: t[3] || (t[3] = (t) => e.refreshGroups()),
                      },
                      null,
                      8,
                      ["loadingSubmit"]
                    ),
                  ]),
                ]),
                _: 1,
              }),
            ]),
            Object(n["h"])("div", Ol, [
              Object(n["k"])(y, { text: "Volgende" }),
              e.isEdit
                ? Object(n["f"])("", !0)
                : (Object(n["y"])(),
                  Object(n["g"])(
                    "a",
                    {
                      key: 0,
                      class: "link-inline cursor-pointer",
                      onClick: t[4] || (t[4] = (t) => e.saveAsDraft()),
                    },
                    "Opslaan"
                  )),
              Object(n["k"])(k, { "is-loading": e.isSavingDraft }, null, 8, [
                "is-loading",
              ]),
            ]),
          ],
          32
        )
      );
    }
    const gl = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      yl = { action: "" },
      fl = ["disabled", "id", "name", "value", "onChange"],
      kl = ["for"];
    function Sl(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])("div", gl, [
          Object(n["h"])("form", yl, [
            (Object(n["y"])(!0),
            Object(n["g"])(
              n["a"],
              null,
              Object(n["F"])(
                e.insuranceTypes,
                (i, a) => (
                  Object(n["y"])(),
                  Object(n["g"])("div", { key: i.id, class: "py-1" }, [
                    Object(n["X"])(
                      Object(n["h"])(
                        "input",
                        {
                          disabled: e.disabled,
                          id: a,
                          "onUpdate:modelValue":
                            t[0] || (t[0] = (t) => (e.selection = t)),
                          class: "cursor-pointer",
                          type: "radio",
                          name: a,
                          value: i.value,
                          onChange: (t) => e.setInsuranceTypeState(i.value),
                        },
                        null,
                        40,
                        fl
                      ),
                      [[n["Q"], e.selection]]
                    ),
                    Object(n["h"])(
                      "label",
                      { for: a, class: "ml-2 cursor-pointer" },
                      Object(n["K"])(i.name),
                      9,
                      kl
                    ),
                  ])
                )
              ),
              128
            )),
          ]),
        ])
      );
    }
    var El = Object(n["l"])({
      name: "InsuranceTypeMenu",
      props: { disabled: { type: Boolean, default: !1 } },
      setup() {
        const e = Object(Q["b"])(),
          t = Object(n["E"])(e.getters.insuranceTypeState),
          i = Object(n["E"])([
            {
              name: "Tijdelijke verzekering niet-leden",
              value: Ze.TIJDELIJKE_VERZEKERING_NIET_LEDEN,
            },
            {
              name: "Tijdelijke autoverzekering",
              value: Ze.TIJDELIJKE_AUTO_VERZEKERING,
            },
            { name: "Materiaalverzekering", value: Ze.MATERIAAL_VERZEKERING },
            {
              name: "Evenementenverzekering",
              value: Ze.EVENEMENTEN_VERZEKERING,
            },
            {
              name: "Verzekering eenmalige activiteit",
              value: Ze.EENMALIGE_ACTIVITEIT,
            },
            { name: "Reisbijstand", value: Ze.REIS_BIJSTAND },
          ]),
          a = (t) => {
            e.dispatch("setInsuranceTypeState", t);
          };
        return { setInsuranceTypeState: a, insuranceTypes: i, selection: t };
      },
    });
    const _l = j()(El, [["render", Sl]]);
    var Tl = _l;
    const xl = Object(n["h"])(
      "div",
      null,
      [
        Object(n["h"])("p", null, [
          Object(n["j"])(" Meer info over de "),
          Object(n["h"])(
            "a",
            {
              target: "_blank",
              class: "underline",
              href: "https://www.scoutsengidsenvlaanderen.be/leiding/ondersteuning/groepsleiding/verzekeringen/materiaalverzekering",
            },
            "materiaalverzekering."
          ),
        ]),
      ],
      -1
    );
    function wl(e, t, i, a, s, r) {
      const c = Object(n["H"])("info-alert");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["k"])(c, null, {
            default: Object(n["W"])(() => [xl]),
            _: 1,
          }),
        ])
      );
    }
    const Il = { class: "bg-lighterGreen p-3 inline-block" };
    function Cl(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])("div", Il, [
          Object(n["h"])("div", null, [Object(n["G"])(e.$slots, "default")]),
        ])
      );
    }
    var Dl = Object(n["l"])({ name: "InfoAlert", setup() {} });
    const Nl = j()(Dl, [["render", Cl]]);
    var Ml = Nl,
      zl = Object(n["l"])({
        name: "TipGeneralMaterialInsurance",
        components: { "info-alert": Ml },
        setup() {
          return {};
        },
      });
    const Al = j()(zl, [["render", wl]]);
    var Hl = Al;
    const Rl = Object(n["h"])(
      "div",
      null,
      [
        Object(n["h"])("p", null, [
          Object(n["j"])(" Meer info over de "),
          Object(n["h"])(
            "a",
            {
              target: "_blank",
              class: "underline",
              href: "https://www.scoutsengidsenvlaanderen.be/leiding/ondersteuning/groepsleiding/verzekeringen/evenementenverzekering",
            },
            "evenementenverzekering."
          ),
        ]),
      ],
      -1
    );
    function Bl(e, t, i, a, s, r) {
      const c = Object(n["H"])("info-alert");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["k"])(c, null, {
            default: Object(n["W"])(() => [Rl]),
            _: 1,
          }),
        ])
      );
    }
    var ql = Object(n["l"])({
      name: "TipGeneralEVentInsurance",
      components: { "info-alert": Ml },
      setup() {
        return {};
      },
    });
    const Vl = j()(ql, [["render", Bl]]);
    var Ll = Vl;
    const Gl = Object(n["h"])(
      "div",
      null,
      [
        Object(n["h"])("p", null, [
          Object(n["j"])(" Meer info over de "),
          Object(n["h"])(
            "a",
            {
              target: "_blank",
              class: "underline",
              href: "https://www.scoutsengidsenvlaanderen.be/leiding/ondersteuning/groepsleiding/verzekeringen/autoverzekering",
            },
            "tijdelijke autoverzekering."
          ),
        ]),
      ],
      -1
    );
    function Pl(e, t, i, a, s, r) {
      const c = Object(n["H"])("info-alert");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["k"])(c, null, {
            default: Object(n["W"])(() => [Gl]),
            _: 1,
          }),
        ])
      );
    }
    var Kl = Object(n["l"])({
      name: "TipTempVehicle",
      components: { "info-alert": Ml },
      setup() {
        return {};
      },
    });
    const Yl = j()(Kl, [["render", Pl]]);
    var Ul = Yl;
    const Fl = Object(n["h"])(
      "div",
      null,
      [
        Object(n["h"])("p", null, [
          Object(n["j"])(" Meer info over "),
          Object(n["h"])(
            "a",
            {
              target: "_blank",
              class: "underline",
              href: "https://www.scoutsengidsenvlaanderen.be/leiding/ondersteuning/groepsleiding/verzekeringen/verzekering-voor-een-eenmalige-activiteit",
            },
            "de verzekering voor een eenmalige activiteit."
          ),
        ]),
      ],
      -1
    );
    function Wl(e, t, i, a, s, r) {
      const c = Object(n["H"])("info-alert");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["k"])(c, null, {
            default: Object(n["W"])(() => [Fl]),
            _: 1,
          }),
        ])
      );
    }
    var Xl = Object(n["l"])({
      name: "TipGeneralEVentInsurance",
      components: { "info-alert": Ml },
      setup() {
        return {};
      },
    });
    const Zl = j()(Xl, [["render", Wl]]);
    var Jl = Zl;
    const $l = Object(n["h"])(
      "div",
      null,
      [
        Object(n["h"])("p", null, [
          Object(n["j"])(" Meer info over "),
          Object(n["h"])(
            "a",
            {
              class: "underline",
              target: "_blank",
              href: "https://www.scoutsengidsenvlaanderen.be/leiding/ondersteuning/groepsleiding/verzekeringen/reisbijstand",
            },
            "reisbijstand"
          ),
          Object(n["j"])(" en "),
          Object(n["h"])(
            "a",
            {
              class: "underline",
              target: "_blank",
              href: "https://www.scoutsengidsenvlaanderen.be/leiding/ondersteuning/groepsleiding/verzekeringen/reisbijstand-met-de-auto",
            },
            "reisbijstand met auto"
          ),
        ]),
      ],
      -1
    );
    function Ql(e, t, i, a, s, r) {
      const c = Object(n["H"])("info-alert");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["k"])(c, null, {
            default: Object(n["W"])(() => [$l]),
            _: 1,
          }),
        ])
      );
    }
    var eo = Object(n["l"])({
      name: "TipGeneralTravelAssistance",
      components: { "info-alert": Ml },
      setup() {
        return {};
      },
    });
    const to = j()(eo, [["render", Ql]]);
    var io = to;
    function no(e, t, i, a, s, r) {
      const c = Object(n["H"])("phone-number"),
        l = Object(n["H"])("label-output");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["h"])("div", null, [
              Object(n["h"])(
                "p",
                null,
                Object(n["K"])(
                  e.user.firstName +
                    " " +
                    (e.user.lastName ? e.user.lastName : "")
                ),
                1
              ),
            ]),
            Object(n["h"])("div", null, [
              Object(n["h"])("p", null, Object(n["K"])(e.user.email), 1),
            ]),
            Object(n["k"])(
              c,
              { hasWarning: !0, phoneNumber: e.user.phoneNumber },
              null,
              8,
              ["phoneNumber"]
            ),
            Object(n["k"])(
              l,
              { label: "Lidnummer", text: e.user.membershipNumber },
              null,
              8,
              ["text"]
            ),
          ],
          64
        )
      );
    }
    var ao = Object(n["l"])({
      name: "InsuranceApplicant",
      components: { "label-output": Et, "phone-number": Rt },
      props: { applicant: { type: Object } },
      setup(e) {
        const t = Object(n["E"])(e.applicant ? e.applicant : ie.getters.user);
        return (
          Object(n["U"])(
            () => e.applicant,
            () => {
              t.value = e.applicant;
            }
          ),
          { InputTypes: Kt, user: t }
        );
      },
    });
    const so = j()(ao, [["render", no]]);
    var ro = so;
    class co extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/vehicle_insurance_coverage_options/"),
          (this.endpoint = "/vehicle_insurance_coverage_options/"),
          (this.deserializer = xe),
          (this.serializer = we);
      }
      getArray() {
        return this.get(this.endpoint, {}).then((e) => {
          const t = [];
          return (
            e.forEach((e) => {
              t.push(this.deserializer(Ie(e)));
            }),
            t
          );
        });
      }
    }
    const lo = Object(n["h"])(
        "strong",
        null,
        "OPGELET! Via deze verzekering kan je geen nieuwe leden verzekeren.",
        -1
      ),
      oo = Object(n["h"])(
        "p",
        null,
        [
          Object(n["j"])(" Je VGA moet dit via de "),
          Object(n["h"])(
            "a",
            {
              target: "_blank",
              class: "underline",
              href: "https://groepsadmin.scoutsengidsenvlaanderen.be/",
            },
            "Groepsadministratie"
          ),
          Object(n["j"])(" doen. "),
        ],
        -1
      ),
      uo = Object(n["h"])(
        "div",
        { class: "mt-3" },
        [
          Object(n["h"])("p", null, [
            Object(n["j"])(" Meer info over de "),
            Object(n["h"])(
              "a",
              {
                target: "_blank",
                class: "underline",
                href: "https://www.scoutsengidsenvlaanderen.be/leiding/ondersteuning/groepsleiding/verzekeringen/tijdelijke-verzekering-niet-leden",
              },
              "tijdelijke verzekering niet-leden."
            ),
          ]),
        ],
        -1
      );
    function bo(e, t, i, a, s, r) {
      const c = Object(n["H"])("info-alert");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["k"])(c, null, {
            default: Object(n["W"])(() => [lo, oo, uo]),
            _: 1,
          }),
        ])
      );
    }
    var mo = Object(n["l"])({
      name: "TipGeneralNonMember",
      components: { "info-alert": Ml },
      setup() {
        return {};
      },
    });
    const po = j()(mo, [["render", bo]]);
    var vo = po;
    const jo = { class: "text-xs" };
    function Oo(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["h"])("p", jo, [
            Object(n["h"])("i", null, Object(n["K"])(e.disclaimerText), 1),
          ]),
        ])
      );
    }
    var ho = Object(n["l"])({
      name: "DateDisclaimer",
      setup() {
        const e = Object(Q["b"])(),
          t = Object(n["c"])(() => e.state.insurance.insuranceTypeState),
          i = Object(n["E"])(tt[t.value]);
        return (
          Object(n["U"])(
            () => t.value,
            () => {
              i.value = tt[t.value];
            }
          ),
          { insuranceTypeState: t, disclaimerText: i }
        );
      },
    });
    const go = j()(ho, [["render", Oo]]);
    var yo = go;
    const fo = { class: "py-2" },
      ko = { key: 0, class: "py-2" },
      So = { key: 1, class: "py-2" },
      Eo = { key: 2, class: "py-2" },
      _o = { key: 3, class: "py-2" },
      To = { key: 4, class: "py-2" },
      xo = { key: 5, class: "mt-2" },
      wo = ["innerHTML"];
    function Io(e, t, i, a, s, r) {
      const c = Object(n["H"])("choice-help-item"),
        l = Object(n["H"])("info-alert");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["h"])("div", fo, [
              Object(n["k"])(
                c,
                {
                  id: "0",
                  text: "Heb je de auto gehuurd?",
                  choice: e.choices[0],
                  "onUpdate:choice": t[0] || (t[0] = (t) => (e.choices[0] = t)),
                },
                null,
                8,
                ["choice"]
              ),
            ]),
            !0 === e.choices[0]
              ? (Object(n["y"])(),
                Object(n["g"])("div", ko, [
                  Object(n["k"])(
                    c,
                    {
                      id: "1",
                      text: "Is er een vrijstelling (franchise) op de wettelijk verplichte verzekering voor burgerlijke aansprakelijkheid (BA)?",
                      choice: e.choices[1],
                      "onUpdate:choice":
                        t[1] || (t[1] = (t) => (e.choices[1] = t)),
                    },
                    null,
                    8,
                    ["choice"]
                  ),
                ]))
              : Object(n["f"])("", !0),
            !0 === e.choices[1]
              ? (Object(n["y"])(),
                Object(n["g"])("div", So, [
                  Object(n["k"])(
                    c,
                    {
                      id: "2",
                      text: "Wil je de vrijstelling van de verzekering voor burgerlijke aansprakelijkheid afkopen?",
                      choice: e.choices[2],
                      "onUpdate:choice":
                        t[2] || (t[2] = (t) => (e.choices[2] = t)),
                    },
                    null,
                    8,
                    ["choice"]
                  ),
                ]))
              : Object(n["f"])("", !0),
            !0 === e.choices[2] ||
            !1 === e.choices[0] ||
            (!0 === e.choices[0] && !1 === e.choices[1]) ||
            (!0 === e.choices[0] && !0 === e.choices[1] && !1 === e.choices[2])
              ? (Object(n["y"])(),
                Object(n["g"])("div", Eo, [
                  Object(n["k"])(
                    c,
                    {
                      id: "3",
                      text: "Is de auto omnium verzekerd?",
                      choice: e.choices[3],
                      "onUpdate:choice":
                        t[3] || (t[3] = (t) => (e.choices[3] = t)),
                    },
                    null,
                    8,
                    ["choice"]
                  ),
                ]))
              : Object(n["f"])("", !0),
            !0 === e.choices[3]
              ? (Object(n["y"])(),
                Object(n["g"])("div", _o, [
                  Object(n["k"])(
                    c,
                    {
                      id: "4",
                      text: "Wil je de vrijstelling (franchise) van deze verzekering afkopen?",
                      choice: e.choices[4],
                      "onUpdate:choice":
                        t[4] || (t[4] = (t) => (e.choices[4] = t)),
                    },
                    null,
                    8,
                    ["choice"]
                  ),
                ]))
              : Object(n["f"])("", !0),
            (!1 === e.choices[0] && !1 === e.choices[3]) ||
            (!0 === e.choices[0] &&
              !1 === e.choices[1] &&
              !1 === e.choices[3]) ||
            (!0 === e.choices[0] &&
              !0 === e.choices[1] &&
              !1 === e.choices[2] &&
              !1 === e.choices[3]) ||
            (!0 === e.choices[0] &&
              !0 === e.choices[1] &&
              !0 === e.choices[2] &&
              !1 === e.choices[3])
              ? (Object(n["y"])(),
                Object(n["g"])("div", To, [
                  Object(n["k"])(
                    c,
                    {
                      id: "5",
                      text: "Wil je een omnium verzekering afsluiten?",
                      choice: e.choices[5],
                      "onUpdate:choice":
                        t[5] || (t[5] = (t) => (e.choices[5] = t)),
                    },
                    null,
                    8,
                    ["choice"]
                  ),
                ]))
              : Object(n["f"])("", !0),
            "" !== e.displayText()
              ? (Object(n["y"])(),
                Object(n["g"])("div", xo, [
                  Object(n["k"])(l, null, {
                    default: Object(n["W"])(() => [
                      Object(n["h"])(
                        "p",
                        { innerHTML: e.displayText() },
                        null,
                        8,
                        wo
                      ),
                    ]),
                    _: 1,
                  }),
                ]))
              : Object(n["f"])("", !0),
          ],
          64
        )
      );
    }
    const Co = {
        class: "max-w-xs max-w-xs border-2 border-lightGray p-3 rounded-xl",
      },
      Do = { class: "text-center pb-4" },
      No = { class: "max-w-xs flex justify-center" },
      Mo = {
        class: "rounded-xl bg-white p-3 border-2 border-black",
        style: { "margin-top": "-2em", "max-width": "15em" },
      },
      zo = { class: "flex" },
      Ao = { class: "px-3" },
      Ho = ["id", "name"],
      Ro = ["for"],
      Bo = Object(n["h"])("strong", null, "Ja", -1),
      qo = [Bo],
      Vo = { class: "px-3" },
      Lo = ["id", "name"],
      Go = ["for"],
      Po = Object(n["h"])("strong", null, "Nee", -1),
      Ko = [Po];
    function Yo(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["h"])("div", Co, [
            Object(n["h"])("div", Do, Object(n["K"])(e.text), 1),
          ]),
          Object(n["h"])("div", No, [
            Object(n["h"])("div", Mo, [
              Object(n["h"])("form", null, [
                Object(n["h"])("div", zo, [
                  Object(n["h"])("div", Ao, [
                    Object(n["X"])(
                      Object(n["h"])(
                        "input",
                        {
                          class: "h-7 w-7 mr-2",
                          "onUpdate:modelValue":
                            t[0] || (t[0] = (t) => (e.isChecked = t)),
                          type: "radio",
                          id: "yes" + e.id,
                          name: "yes" + e.id,
                          value: !0,
                          onChange: t[1] || (t[1] = (t) => e.emit(!0)),
                        },
                        null,
                        40,
                        Ho
                      ),
                      [[n["Q"], e.isChecked]]
                    ),
                    Object(n["h"])("label", { for: "yes" + e.id }, qo, 8, Ro),
                  ]),
                  Object(n["h"])("div", Vo, [
                    Object(n["X"])(
                      Object(n["h"])(
                        "input",
                        {
                          class: "h-7 w-7 mr-2",
                          "onUpdate:modelValue":
                            t[2] || (t[2] = (t) => (e.isChecked = t)),
                          type: "radio",
                          id: "no" + e.id,
                          name: "no" + e.id,
                          value: !1,
                          onChange: t[3] || (t[3] = (t) => e.emit(!1)),
                        },
                        null,
                        40,
                        Lo
                      ),
                      [[n["Q"], e.isChecked]]
                    ),
                    Object(n["h"])("label", { for: "no" + e.id }, Ko, 8, Go),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    }
    var Uo = Object(n["l"])({
      name: "ChoiceHelpItem",
      props: { text: String, choice: [Boolean, String], id: String },
      setup(e, t) {
        const i = Object(n["E"])(""),
          a = (e) => {
            t.emit("update:choice", e);
          };
        return (
          Object(n["U"])(
            () => e.choice,
            () => {
              e.choice && (i.value = e.choice);
            }
          ),
          { isChecked: i, emit: a }
        );
      },
    });
    const Fo = j()(Uo, [["render", Yo]]);
    var Wo = Fo,
      Xo = Object(n["l"])({
        name: "TipChoiceHelp",
        components: { "info-alert": Ml, "choice-help-item": Wo },
        setup() {
          const e = Object(n["E"])(["", "", "", "", "", ""]),
            t = Object(n["E"])(""),
            i =
              "Aan de hand van voorgaande vragen is de volgende optie het best geschikt voor je aanvraag: ",
            a =
              "Aan de hand van voorgaande vragen zijn de volgende opties het best geschikt voor je aanvraag: ",
            s =
              "Aan de hand van voorgaande vragen is gebleken dat je <strong>geen</strong> extra verzekering nodig hebt.",
            r = () => (
              !1 === e.value[0] &&
                !1 === e.value[3] &&
                !1 === e.value[5] &&
                (t.value = s),
              !1 === e.value[0] &&
                !1 === e.value[3] &&
                !0 === e.value[5] &&
                (t.value = i + "<strong>optie 1</strong>"),
              !1 === e.value[0] &&
                !0 === e.value[3] &&
                !1 === e.value[4] &&
                (t.value = s),
              !1 === e.value[0] &&
                !0 === e.value[3] &&
                !0 === e.value[4] &&
                (t.value = i + "<strong>optie 2</strong>"),
              !0 === e.value[0] &&
                !1 === e.value[1] &&
                !1 === e.value[3] &&
                !1 === e.value[5] &&
                (t.value = s),
              !0 === e.value[0] &&
                !1 === e.value[1] &&
                !0 === e.value[3] &&
                !0 === e.value[4] &&
                (t.value = i + "<strong>optie 2</strong>"),
              !0 === e.value[0] &&
                !1 === e.value[1] &&
                !0 === e.value[3] &&
                !1 === e.value[4] &&
                (t.value = s),
              !0 === e.value[0] &&
                !0 === e.value[1] &&
                !1 === e.value[2] &&
                !1 === e.value[3] &&
                !1 === e.value[5] &&
                (t.value = s),
              !0 === e.value[0] &&
                !0 === e.value[1] &&
                !1 === e.value[2] &&
                !1 === e.value[3] &&
                !0 === e.value[5] &&
                (t.value = i + "<strong>optie 1</strong>"),
              !0 === e.value[0] &&
                !0 === e.value[1] &&
                !1 === e.value[2] &&
                !0 === e.value[3] &&
                !0 === e.value[4] &&
                (t.value = i + "<strong>optie 2</strong>"),
              !0 === e.value[0] &&
                !0 === e.value[1] &&
                !1 === e.value[2] &&
                !0 === e.value[3] &&
                !1 === e.value[4] &&
                (t.value = s),
              !0 === e.value[0] &&
                !0 === e.value[1] &&
                !0 === e.value[2] &&
                !1 === e.value[3] &&
                !1 === e.value[5] &&
                (t.value = i + "<strong>optie 3</strong>"),
              !0 === e.value[0] &&
                !0 === e.value[1] &&
                !0 === e.value[2] &&
                !1 === e.value[3] &&
                !0 === e.value[5] &&
                (t.value = a + "<strong>optie 1 & optie 3</strong>"),
              !0 === e.value[0] &&
                !0 === e.value[1] &&
                !0 === e.value[2] &&
                !0 === e.value[3] &&
                !1 === e.value[4] &&
                (t.value = i + "<strong>optie 3</strong>"),
              !0 === e.value[0] &&
                !0 === e.value[1] &&
                !0 === e.value[2] &&
                !0 === e.value[3] &&
                !0 === e.value[4] &&
                (t.value = a + "<strong>optie 2 & optie 3</strong>"),
              t.value
            ),
            c = (t) => {
              Object(n["U"])(
                () => e.value[t],
                () => {
                  for (let i = t + 1; i < e.value.length; i++)
                    e.value[i] = "empty";
                }
              );
            };
          return c(0), c(1), c(2), c(3), c(4), { choices: e, displayText: r };
        },
      });
    const Zo = j()(Xo, [["render", Io]]);
    var Jo = Zo;
    const $o = { key: 0 },
      Qo = { key: 1, style: { "font-size": "13px" } },
      ed = [
        "min",
        "max",
        "type",
        "maxlength",
        "name",
        "disabled",
        "placeholder",
        "oninvalid",
      ],
      td = ["id", "name", "disabled", "step"],
      id = ["name", "disabled"],
      nd = ["name"];
    function ad(e, t, i, a, s, r) {
      const c = Object(n["H"])("required"),
        l = Object(n["H"])("ErrorMessage");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          !e.hideInput && e.label
            ? (Object(n["y"])(),
              Object(n["g"])("strong", $o, [
                Object(n["h"])("label", null, [
                  Object(n["j"])(Object(n["K"])(e.label) + " ", 1),
                  Object(n["k"])(c, { rules: e.rules }, null, 8, ["rules"]),
                ]),
              ]))
            : Object(n["f"])("", !0),
          e.extraInfo
            ? (Object(n["y"])(),
              Object(n["g"])("div", Qo, [
                Object(n["h"])("label", null, Object(n["K"])(e.extraInfo), 1),
              ]))
            : Object(n["f"])("", !0),
          Object(n["h"])("div", null, [Object(n["G"])(e.$slots, "default")]),
          Object(n["h"])(
            "div",
            {
              class: Object(n["s"])({
                "text-lightGray animate-pulse2 bg-lightGray":
                  e.loadingSubmit || e.isSubmitting,
              }),
            },
            [
              e.type === e.InputTypes.TEXT_AREA ||
              e.hideInput ||
              e.type === e.InputTypes.TIME
                ? Object(n["f"])("", !0)
                : Object(n["X"])(
                    (Object(n["y"])(),
                    Object(n["g"])(
                      "input",
                      {
                        key: 0,
                        "onUpdate:modelValue":
                          t[0] || (t[0] = (t) => (e.inputValue = t)),
                        class: Object(n["s"])([
                          "bg-lightGray p-2 min-w-0 w-100",
                          { "opacity-0": e.loadingSubmit || e.isSubmitting },
                        ]),
                        min: e.min,
                        max: e.max,
                        type: e.type,
                        step: "1",
                        maxlength: e.maxlength,
                        name: e.name,
                        disabled:
                          e.disabled || e.loadingSubmit || e.isSubmitting,
                        placeholder: e.placeholder,
                        oninvalid: e.onInvalid,
                        oninput: "this.setCustomValidity('')",
                      },
                      null,
                      10,
                      ed
                    )),
                    [[n["P"], e.inputValue]]
                  ),
              e.type === e.InputTypes.TIME
                ? Object(n["X"])(
                    (Object(n["y"])(),
                    Object(n["g"])(
                      "input",
                      {
                        key: 1,
                        id: e.name,
                        "onUpdate:modelValue":
                          t[1] || (t[1] = (t) => (e.inputValue = t)),
                        class: Object(n["s"])([
                          "bg-lightGray p-2 min-w-0 w-100",
                          { "opacity-0": e.loadingSubmit || e.isSubmitting },
                        ]),
                        style: { "max-width": "100px" },
                        type: "time",
                        name: e.name,
                        disabled:
                          e.disabled || e.loadingSubmit || e.isSubmitting,
                        step: e.step,
                      },
                      null,
                      10,
                      td
                    )),
                    [[n["R"], e.inputValue]]
                  )
                : Object(n["f"])("", !0),
            ],
            2
          ),
          e.type !== e.InputTypes.TEXT_AREA ||
          e.hideInput ||
          e.type === e.InputTypes.TIME
            ? Object(n["f"])("", !0)
            : Object(n["X"])(
                (Object(n["y"])(),
                Object(n["g"])(
                  "textarea",
                  {
                    key: 2,
                    "onUpdate:modelValue":
                      t[2] || (t[2] = (t) => (e.inputValue = t)),
                    class: Object(n["s"])([
                      "bg-lightGray p-2",
                      "md:" + e.textAreaWidth + " xs:w-full",
                    ]),
                    type: "text",
                    name: e.name,
                    maxlength: "500",
                    disabled: e.disabled || e.loadingSubmit || e.isSubmitting,
                  },
                  null,
                  10,
                  id
                )),
                [[n["R"], e.inputValue]]
              ),
          Object(n["h"])(
            "span",
            { name: e.name },
            [
              Object(n["k"])(
                l,
                { name: e.name, class: "text-red text-sm block mt-1 w-80" },
                null,
                8,
                ["name"]
              ),
            ],
            8,
            nd
          ),
        ])
      );
    }
    const sd = { key: 0, class: "text-red ml-1" };
    function rd(e, t, i, a, s, r) {
      return e.rules.includes("required") || e.rules.includes("customRequired")
        ? (Object(n["y"])(), Object(n["g"])("label", sd, "*"))
        : Object(n["f"])("", !0);
    }
    var cd = Object(n["l"])({
      name: "Required",
      props: {
        rules: { type: [Object, String, Function], default: "", required: !1 },
      },
    });
    const ld = j()(cd, [["render", rd]]);
    var od = ld,
      dd = Object(n["l"])({
        name: "CustomInput",
        components: { ErrorMessage: nt["a"], Required: od },
        props: {
          name: { type: String, required: !0 },
          label: { type: String, required: !0 },
          type: { type: String, required: !0 },
          value: { type: String, default: "" },
          rules: {
            type: [Object, String, Function],
            default: "",
            required: !1,
          },
          disabled: { type: Boolean, default: !1 },
          min: { type: String, required: !1, default: "" },
          max: { type: String, required: !1, default: "" },
          maxlength: { type: String, required: !1, default: "1000" },
          extraInfo: { type: String, required: !1 },
          hideInput: { type: Boolean, default: !1, required: !1 },
          loadingSubmit: { type: Boolean, default: !1, required: !1 },
          onInvalid: { type: String, default: "", required: !1 },
          textAreaWidth: { type: String, required: !1, default: "w-96 h-32" },
          placeholder: { type: String, required: !1 },
          step: { type: String, required: !1 },
        },
        setup(e) {
          const { value: t } = Object(nt["d"])(e.name, e.rules, {
              initialValue: e.value,
            }),
            i = Object(Q["b"])(),
            a = Object(n["c"])(() => i.state.insurance.isSubmittingState),
            s = () => {
              "victim.bankAccount" === e.name &&
                (t.value = t.value
                  .replace(/[^\dA-Z]/g, "")
                  .replace(/(.{4})/g, "$1 ")
                  .trim());
            };
          return (
            Object(n["U"])(
              () => t.value,
              () => {
                s();
              }
            ),
            { InputTypes: Kt, inputValue: t, isSubmitting: a }
          );
        },
      });
    const ud = j()(dd, [["render", ad]]);
    var bd = ud;
    const md = { key: 0, class: "pt-4" };
    function pd(e, t, i, a, s, r) {
      const c = Object(n["H"])("required"),
        l = Object(n["H"])("multi-select", !0),
        o = Object(n["H"])("error-message");
      return e.options
        ? (Object(n["y"])(),
          Object(n["g"])("div", md, [
            Object(n["h"])("div", null, [
              Object(n["h"])("strong", null, Object(n["K"])(e.label), 1),
              Object(n["h"])("strong", null, [
                e.label
                  ? (Object(n["y"])(),
                    Object(n["e"])(
                      c,
                      { key: 0, class: "inline", rules: e.rules },
                      null,
                      8,
                      ["rules"]
                    ))
                  : Object(n["f"])("", !0),
              ]),
            ]),
            Object(n["h"])(
              "div",
              {
                class: Object(n["s"])([
                  "min-w-0",
                  {
                    "text-lightGray animate-pulse2 bg-lightGray":
                      e.loadingSubmit,
                  },
                ]),
              },
              [
                Object(n["k"])(
                  l,
                  {
                    id: e.id,
                    ref: "multiselect",
                    modelValue: e.inputValue,
                    "onUpdate:modelValue":
                      t[0] || (t[0] = (t) => (e.inputValue = t)),
                    name: e.id,
                    "value-prop": e.valueProp,
                    disabled: e.disabled || e.loadingSubmit || e.isSubmitting,
                    "filter-results": !1,
                    "min-chars": 1,
                    "resolve-on-load": !0,
                    delay: 500,
                    placeholder: e.placeholder,
                    "track-by": e.trackBy,
                    label: e.trackBy,
                    searchable: e.searchable,
                    search: !0,
                    object: e.object,
                    options: e.searchable
                      ? async function (t) {
                          return e.fetchSearchData(t);
                        }
                      : e.options,
                    "no-options-text": "-geen resultaten-",
                  },
                  null,
                  8,
                  [
                    "id",
                    "modelValue",
                    "name",
                    "value-prop",
                    "disabled",
                    "placeholder",
                    "track-by",
                    "label",
                    "searchable",
                    "object",
                    "options",
                  ]
                ),
                Object(n["k"])(
                  o,
                  {
                    class: "text-red font-light ml-1 mt-1 text-sm inline-block",
                    name: e.id,
                  },
                  null,
                  8,
                  ["name"]
                ),
              ],
              2
            ),
          ]))
        : Object(n["f"])("", !0);
    }
    var vd = i("5c40"),
      jd = i("a306"),
      Od = Object(vd["o"])({
        name: "AppMultiSelect",
        components: {
          "error-message": nt["a"],
          "multi-select": jd["a"],
          Required: od,
        },
        emits: ["fetchedOptions", "addSelection"],
        props: {
          id: { type: String, required: !0 },
          label: { type: String, required: !0 },
          loading: { type: Boolean, required: !1, default: !1 },
          options: { type: Array, required: !0 },
          rules: {
            type: [Object, String, Function],
            default: "",
            required: !1,
          },
          trackBy: { type: String, required: !0 },
          placeholder: { type: String, required: !0 },
          value: { type: String, default: "" },
          searchable: { type: Boolean, default: !1 },
          repository: { type: Function, required: !1, default: Function },
          valueProp: { type: String, required: !0 },
          disabled: { type: Boolean, default: !1 },
          insuranceTypeId: { type: String, default: "", required: !1 },
          resolveOnLoad: { type: Boolean, default: !1, required: !1 },
          object: { type: Boolean, default: !1, required: !1 },
          extraOption: { type: Object, required: !1 },
          loadingSubmit: { type: Boolean, default: !1, required: !1 },
        },
        setup(e, t) {
          const i = Object(n["E"])(),
            { value: a } = Object(nt["d"])(e.id, e.rules, {
              initialValue: e.value,
            }),
            s = async (i) => {
              let n = [];
              return (
                i
                  ? await Yt.get(e.repository)
                      .search(i, e.insuranceTypeId)
                      .then((i) => {
                        (n = e.extraOption ? [e.extraOption, ...i] : i),
                          t.emit("fetchedOptions", n);
                      })
                  : e.resolveOnLoad && (n = e.options),
                n
              );
            },
            r = Object(Q["b"])(),
            c = Object(n["c"])(() => r.state.insurance.isSubmittingState);
          return (
            Object(n["U"])(
              () => a.value,
              () => {
                t.emit("addSelection", a.value);
              }
            ),
            {
              inputValue: a,
              multiselect: i,
              fetchSearchData: s,
              isSubmitting: c,
            }
          );
        },
      });
    i("d742");
    const hd = j()(Od, [["render", pd]]);
    var gd = hd;
    class yd {
      constructor(e, t, i, n = [], a, s, r, c, l, o, d, u) {
        return (
          (this.id = e),
          (this.firstName = t),
          (this.lastName = i),
          (this.permissions = n),
          (this.email = a),
          (this.membershipNumber = s),
          (this.birthDate = r),
          (this.phoneNumber = c),
          (this.scoutsGroups = l),
          (this.city = o),
          (this.groupAdminId = d),
          (this.postalCode = u),
          this
        );
      }
      static deserialize(e) {
        const t = e.scouts_groups.map((e) => E(e));
        return new yd(
          e.group_admin_id,
          e.first_name,
          e.last_name,
          e.user_permissions ? e.user_permissions : [],
          e.email,
          e.membership_number,
          e.birth_date,
          e.phone_number ? e.phone_number.replace(/ /g, "") : void 0,
          t,
          e.city ? e.city : void 0,
          e.group_admin_id ? e.group_admin_id : void 0,
          e.postal_code ? e.postal_code : void 0
        );
      }
    }
    class fd extends ne {
      constructor() {
        super(...arguments), (this.id = "auth");
      }
      me() {
        return this.get("/user").then((e) => yd.deserialize(e));
      }
    }
    var kd = Object(n["l"])({
      name: "RequestInsuranceGeneral",
      components: {
        "tip-general-material-insurance": Hl,
        "tip-general-travel-assistance": io,
        "tip-general-event-insurance": Ll,
        "tip-general-vehicle-insurance": Ul,
        "tip-general-one-time-insurance": Jl,
        "tip-general-non-member": vo,
        "insurance-applicant": ro,
        "insurance-type-menu": Tl,
        "custom-headline-2": qi,
        "date-disclaimer": yo,
        "tip-choice-help": Jo,
        "custom-button": An,
        "custom-input": bd,
        "multi-select": gd,
        "info-alert": Ml,
        Loader: Nn,
      },
      setup() {
        const { scrollToTopOfPage: e } = K(),
          t = Object(hi["c"])(),
          i = Object(Q["b"])(),
          a = !!t.params.id,
          s = Object(n["E"])(i.getters.user);
        let r = i.getters.getCurrentInsuranceState;
        const c = Object(n["E"])(),
          {
            handleSubmit: l,
            values: o,
            validate: d,
            isSubmitting: u,
          } = Object(nt["e"])({
            initialValues: {
              startDate: r.startDate ? r.startDate : "",
              startTime: r.startTime ? r.startTime : "",
              endDate: r.endDate ? r.endDate : "",
              endTime: r.endTime ? r.endTime : "",
              group: a
                ? r.group
                : s.value.scoutsGroups
                ? s.value.scoutsGroups[0]
                : void 0,
              responsibleMember: r.responsibleMember
                ? r.responsibleMember
                : s.value,
              insuranceOptions: r.insuranceOptions ? r.insuranceOptions : [],
              maxCoverage: r.maxCoverage ? r.maxCoverage : [],
            },
          }),
          b = Object(n["c"])(() => i.state.insurance.insuranceTypeState),
          m = A()().add(1, "days").format("YYYY-MM-DD"),
          p = async () => {
            await d().then((e) => P(e, "RequestInsuranceGeneral")),
              l(async (e) => {
                const t = Object(n["E"])({
                  startDate: e.startDate,
                  startTime: e.startTime ? e.startTime : void 0,
                  endDate: e.endDate,
                  endTime: e.endTime ? e.endTime : void 0,
                  group: e.group,
                  responsibleMember: e.responsibleMember
                    ? e.responsibleMember
                    : s.value,
                  totalCost: "1.00",
                  insuranceOptions: e.insuranceOptions
                    ? e.insuranceOptions
                    : [],
                  maxCoverage: e.maxCoverage ? e.maxCoverage : void 0,
                });
                i.dispatch("setGeneralInsuranceState", t),
                  i.dispatch("setHolderState", B.TYPE);
              })();
          },
          v = () => {
            Yt.get(co)
              .getArray()
              .then((e) => {
                c.value = e;
              });
          },
          j = Object(n["E"])(!1),
          O = () => {
            (j.value = !0),
              Yt.get(fd)
                .me()
                .then((e) => {
                  i.dispatch("setUser", e).then(() => {
                    (o.responsibleMember = i.getters.user), (j.value = !1);
                  });
                });
          },
          h = Object(n["E"])(!1),
          g = () => {
            const e = Object(n["E"])({
              startDate: o.startDate,
              startTime: o.startTime ? o.startTime : void 0,
              endDate: o.endDate,
              endTime: o.endTime ? o.endTime : void 0,
              group: o.group,
              responsibleMember: o.responsibleMember
                ? o.responsibleMember
                : s.value,
              totalCost: "1.00",
              insuranceOptions: o.insuranceOptions ? o.insuranceOptions : [],
              maxCoverage: o.maxCoverage ? o.maxCoverage : void 0,
            });
            h.value ||
              ((h.value = !0),
              Yt.get(Qe[b.value])
                .createDraft(e.value, b.value)
                .then(() => {
                  Qf.push("/home/verzekeringen");
                }));
          };
        return (
          v(),
          e(),
          Object(n["U"])(
            () => b.value,
            () => {
              b.value === Ze.TIJDELIJKE_AUTO_VERZEKERING &&
                (o.insuranceOptions = []);
            }
          ),
          Object(n["U"])(
            () => o.insuranceOptions,
            (e, t) => {
              t &&
                e &&
                t.includes(2) &&
                e.includes(1) &&
                (o.insuranceOptions = e.filter((e) => ![2].includes(e))),
                t &&
                  e &&
                  t.includes(1) &&
                  e.includes(2) &&
                  (o.insuranceOptions = e.filter((e) => ![1].includes(e)));
            }
          ),
          {
            maxCoverageOptions: c,
            insuranceTypeState: b,
            InsuranceTypes: Ze,
            refreshGroups: O,
            isSavingDraft: h,
            isSubmitting: u,
            isRefreshing: j,
            saveAsDraft: g,
            InputTypes: Kt,
            userData: s,
            onSubmit: p,
            minDate: m,
            isEdit: a,
            values: o,
            data: r,
          }
        );
      },
    });
    i("8dcb");
    const Sd = j()(kd, [
      ["render", hl],
      ["__scopeId", "data-v-043ab700"],
    ]);
    var Ed = Sd;
    const _d = { key: 0 },
      Td = { key: 1 },
      xd = { key: 2 },
      wd = { key: 3 },
      Id = { key: 4 },
      Cd = { key: 5 };
    function Dd(e, t, i, a, s, r) {
      const c = Object(n["H"])("one-time-activity-detail"),
        l = Object(n["H"])("non-member-insurance-detail"),
        o = Object(n["H"])("travel-assistance-detail"),
        d = Object(n["H"])("temporary-vehicle-detail"),
        u = Object(n["H"])("event-detail"),
        b = Object(n["H"])("material-insurance-detail");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          e.isCurrentType(
            e.InsuranceTypes.EENMALIGE_ACTIVITEIT,
            e.insuranceTypeState
          )
            ? (Object(n["y"])(),
              Object(n["g"])("div", _d, [
                Object(n["k"])(c, null, {
                  default: Object(n["W"])(() => [
                    Object(n["G"])(e.$slots, "default"),
                  ]),
                  _: 3,
                }),
              ]))
            : Object(n["f"])("", !0),
          e.isCurrentType(
            e.InsuranceTypes.TIJDELIJKE_VERZEKERING_NIET_LEDEN,
            e.insuranceTypeState
          )
            ? (Object(n["y"])(),
              Object(n["g"])("div", Td, [
                Object(n["k"])(l, null, {
                  default: Object(n["W"])(() => [
                    Object(n["G"])(e.$slots, "default"),
                  ]),
                  _: 3,
                }),
              ]))
            : Object(n["f"])("", !0),
          e.isCurrentType(e.InsuranceTypes.REIS_BIJSTAND, e.insuranceTypeState)
            ? (Object(n["y"])(),
              Object(n["g"])("div", xd, [
                Object(n["k"])(o, null, {
                  default: Object(n["W"])(() => [
                    Object(n["G"])(e.$slots, "default"),
                  ]),
                  _: 3,
                }),
              ]))
            : Object(n["f"])("", !0),
          e.isCurrentType(
            e.InsuranceTypes.TIJDELIJKE_AUTO_VERZEKERING,
            e.insuranceTypeState
          )
            ? (Object(n["y"])(),
              Object(n["g"])("div", wd, [
                Object(n["k"])(d, null, {
                  default: Object(n["W"])(() => [
                    Object(n["G"])(e.$slots, "default"),
                  ]),
                  _: 3,
                }),
              ]))
            : Object(n["f"])("", !0),
          e.isCurrentType(
            e.InsuranceTypes.EVENEMENTEN_VERZEKERING,
            e.insuranceTypeState
          )
            ? (Object(n["y"])(),
              Object(n["g"])("div", Id, [
                Object(n["k"])(u, null, {
                  default: Object(n["W"])(() => [
                    Object(n["G"])(e.$slots, "default"),
                  ]),
                  _: 3,
                }),
              ]))
            : Object(n["f"])("", !0),
          e.isCurrentType(
            e.InsuranceTypes.MATERIAAL_VERZEKERING,
            e.insuranceTypeState
          )
            ? (Object(n["y"])(),
              Object(n["g"])("div", Cd, [
                Object(n["k"])(b, null, {
                  default: Object(n["W"])(() => [
                    Object(n["G"])(e.$slots, "default"),
                  ]),
                  _: 3,
                }),
              ]))
            : Object(n["f"])("", !0),
        ])
      );
    }
    var Nd = Object(n["l"])({
      name: "RequestInsuranceDetail",
      components: {
        "one-time-activity-detail": Ln,
        "non-member-insurance-detail": vc,
        "travel-assistance-detail": Bs,
        "event-detail": Mr,
        "material-insurance-detail": qa,
        TemporaryVehicleDetail: fr,
      },
      setup() {
        const e = Object(Q["b"])(),
          t = Object(n["c"])(() => e.state.insurance.insuranceTypeState);
        return { insuranceTypeState: t, InsuranceTypes: Ze, isCurrentType: Ic };
      },
    });
    const Md = j()(Nd, [["render", Dd]]);
    var zd = Md;
    const Ad = { key: 0 },
      Hd = { key: 1 },
      Rd = { key: 2 },
      Bd = { key: 3 },
      qd = { key: 4 },
      Vd = { key: 5 };
    function Ld(e, t, i, a, s, r) {
      const c = Object(n["H"])("one-time-activity"),
        l = Object(n["H"])("non-member"),
        o = Object(n["H"])("travel-assistance"),
        d = Object(n["H"])("temporary-vehicle"),
        u = Object(n["H"])("event-insurance"),
        b = Object(n["H"])("material-insurance");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            e.isCurrentType(
              e.InsuranceTypes.EENMALIGE_ACTIVITEIT,
              e.insuranceTypeState
            )
              ? (Object(n["y"])(),
                Object(n["g"])("div", Ad, [Object(n["k"])(c)]))
              : Object(n["f"])("", !0),
            e.isCurrentType(
              e.InsuranceTypes.TIJDELIJKE_VERZEKERING_NIET_LEDEN,
              e.insuranceTypeState
            )
              ? (Object(n["y"])(),
                Object(n["g"])("div", Hd, [Object(n["k"])(l)]))
              : Object(n["f"])("", !0),
            e.isCurrentType(
              e.InsuranceTypes.REIS_BIJSTAND,
              e.insuranceTypeState
            )
              ? (Object(n["y"])(),
                Object(n["g"])("div", Rd, [Object(n["k"])(o)]))
              : Object(n["f"])("", !0),
            e.isCurrentType(
              e.InsuranceTypes.TIJDELIJKE_AUTO_VERZEKERING,
              e.insuranceTypeState
            )
              ? (Object(n["y"])(),
                Object(n["g"])("div", Bd, [Object(n["k"])(d)]))
              : Object(n["f"])("", !0),
            e.isCurrentType(
              e.InsuranceTypes.EVENEMENTEN_VERZEKERING,
              e.insuranceTypeState
            )
              ? (Object(n["y"])(),
                Object(n["g"])("div", qd, [Object(n["k"])(u)]))
              : Object(n["f"])("", !0),
            e.isCurrentType(
              e.InsuranceTypes.MATERIAAL_VERZEKERING,
              e.insuranceTypeState
            )
              ? (Object(n["y"])(),
                Object(n["g"])("div", Vd, [Object(n["k"])(b)]))
              : Object(n["f"])("", !0),
          ],
          64
        )
      );
    }
    const Gd = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Pd = Object(n["h"])(
        "div",
        { class: "mt-4" },
        [
          Object(n["h"])("strong", null, "Land"),
          Object(n["h"])("div", { class: "w-96" }, [
            Object(n["h"])("p", { class: "mt-2 w-96" }, "Belgie"),
          ]),
        ],
        -1
      ),
      Kd = { class: "xs:w-72 md:w-96" },
      Yd = { class: "mt-2 xs:w-72 md:w-96" },
      Ud = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Fd = { class: "flex gap-3 md:ml-20 xs:ml-5 sm:ml-5 mt-5 items-center" };
    function Wd(e, t, i, a, s, r) {
      const c = Object(n["H"])("custom-headline-2"),
        l = Object(n["H"])("custom-input"),
        o = Object(n["H"])("multi-select"),
        d = Object(n["H"])("back-button"),
        u = Object(n["H"])("custom-button"),
        b = Object(n["H"])("loader");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          "form",
          {
            id: "OneTimeActivity",
            onSubmit:
              t[1] ||
              (t[1] = Object(n["Z"])(
                (...t) => e.onSubmit && e.onSubmit(...t),
                ["prevent"]
              )),
          },
          [
            Object(n["k"])(c, { text: "Activiteit" }),
            Object(n["h"])("div", Gd, [
              Object(n["k"])(
                l,
                {
                  type: e.InputTypes.TEXT_AREA,
                  rules: "required",
                  name: "nature",
                  label: "Aard van de activiteit",
                },
                null,
                8,
                ["type"]
              ),
              Pd,
              Object(n["h"])("div", Kd, [
                Object(n["k"])(
                  o,
                  {
                    id: "location",
                    object: !0,
                    "track-by": "label",
                    "value-prop": "label",
                    repository: e.BelgianCitySearchRepository,
                    "resolve-on-load": !0,
                    options: [e.values.location],
                    searchable: !0,
                    label: "Gemeente",
                    rules: "required",
                    placeholder: "Zoek op naam/postcode",
                  },
                  null,
                  8,
                  ["repository", "options"]
                ),
              ]),
              Object(n["h"])("div", Yd, [
                Object(n["k"])(
                  o,
                  {
                    id: "groupSize",
                    object: !0,
                    "track-by": "label",
                    "value-prop": "id",
                    options: e.groupSizes,
                    searchable: !1,
                    label: "Aantal extra te verzekeren personen",
                    rules: "required",
                    placeholder: "Aantal",
                  },
                  null,
                  8,
                  ["options"]
                ),
              ]),
            ]),
            Object(n["h"])("div", null, [
              Object(n["k"])(c, { text: "Opmerkingen" }),
              Object(n["h"])("div", Ud, [
                Object(n["k"])(
                  l,
                  { type: e.InputTypes.TEXT_AREA, name: "comment", label: "" },
                  null,
                  8,
                  ["type"]
                ),
              ]),
            ]),
            Object(n["h"])("div", Fd, [
              Object(n["k"])(
                d,
                {
                  stateName: "setHolderState",
                  backToState: e.HolderStates.GENERAL,
                },
                null,
                8,
                ["backToState"]
              ),
              Object(n["k"])(u, { text: "Volgende" }),
              e.isEdit
                ? Object(n["f"])("", !0)
                : (Object(n["y"])(),
                  Object(n["g"])(
                    "a",
                    {
                      key: 0,
                      class: "link-inline cursor-pointer",
                      onClick: t[0] || (t[0] = (t) => e.saveAsDraft()),
                    },
                    "Opslaan"
                  )),
              Object(n["k"])(b, { "is-loading": e.isSavingDraft }, null, 8, [
                "is-loading",
              ]),
            ]),
          ],
          32
        )
      );
    }
    class Xd extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/belgian_city_search/"),
          (this.endpoint = "/belgian_city_search/"),
          (this.deserializer = null),
          (this.serializer = null);
      }
      search(e) {
        return this.get(this.endpoint + "?term=" + e, {}).then((e) => {
          const t = [];
          return (
            e.forEach((e) => {
              (e = C(e)), t.push(e);
            }),
            t
          );
        });
      }
    }
    class Zd extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/insurance_group_sizes/"),
          (this.endpoint = "/insurance_group_sizes/"),
          (this.deserializer = ke),
          (this.serializer = Se);
      }
      getArray() {
        return this.get(this.endpoint, {}).then((e) => {
          const t = [];
          return (
            e.forEach((e) => {
              const i = Object(n["E"])(this.deserializer(e));
              t.push({
                id: i.value.id,
                value: i.value.value,
                label: i.value.label,
              });
            }),
            t
          );
        });
      }
    }
    function Jd(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])(
          "a",
          {
            class: "link-inline cursor-pointer mr-3",
            onClick: t[0] || (t[0] = (t) => e.back()),
          },
          "Vorige"
        )
      );
    }
    var $d = Object(n["l"])({
      name: "BackButton",
      props: {
        stateName: { type: String, required: !0 },
        backToState: { type: Object, required: !0 },
      },
      setup(e) {
        const t = Object(Q["b"])(),
          i = () => {
            t.dispatch(e.stateName, e.backToState);
          };
        return { back: i };
      },
    });
    const Qd = j()($d, [["render", Jd]]);
    var eu = Qd,
      tu = Object(n["l"])({
        name: "OneTimeActivity",
        components: {
          "custom-headline-2": qi,
          "custom-button": An,
          "multi-select": gd,
          "custom-input": bd,
          "back-button": eu,
          Loader: Nn,
        },
        setup() {
          const e = Object(hi["c"])(),
            t = Object(Q["b"])(),
            i = t.getters.getCurrentInsuranceState,
            {
              handleSubmit: a,
              values: s,
              isSubmitting: r,
              validate: c,
            } = Object(nt["e"])({
              initialValues: {
                nature: i.nature ? i.nature : "",
                location: i.location ? i.location : "",
                groupSize: i.groupSize ? i.groupSize : "",
                comment: i.comment ? i.comment : "",
                vvksComment: i.vvksComment ? i.vvksComment : "",
              },
            }),
            l = !!e.params.id,
            o = Object(n["c"])(() => t.state.insurance.generalInsuranceState),
            d = Object(n["E"])([]),
            u = () => {
              Yt.get(Zd)
                .getArray()
                .then((e) => {
                  d.value = e;
                });
            };
          Object(n["U"])(
            () => r.value,
            () => {
              t.dispatch("setIsSubmittingState", r.value);
            }
          );
          const b = async () => {
              await c().then((e) => P(e, "OneTimeActivity")),
                a(async (e) => {
                  const i = Object(n["E"])({
                    ...o.value,
                    nature: e.nature,
                    location: e.location,
                    groupSize: e.groupSize,
                    comment: e.comment ? e.comment : "",
                    vvksComment: e.vvksComment ? e.vvksComment : "",
                  });
                  await Yt.get(Qe[t.getters.insuranceTypeState])
                    .getCalculatedCost(i.value)
                    .then((e) => {
                      (i.value.totalCost = e),
                        t
                          .dispatch("setOneTimeActivityState", i.value)
                          .then(() => {
                            t.dispatch("setHolderState", B.DETAIL);
                          });
                    });
                })();
            },
            m = Object(n["c"])(() => t.state.insurance.insuranceTypeState),
            p = Object(n["E"])(!1),
            v = () => {
              const e = Object(n["E"])({
                ...o.value,
                nature: s.nature,
                location: s.location,
                groupSize: s.groupSize,
                comment: s.comment ? s.comment : "",
              });
              p.value ||
                ((p.value = !0),
                Yt.get(Qe[m.value])
                  .createDraft(e.value, m.value)
                  .then(() => {
                    Qf.push("/home/verzekeringen");
                  }));
            };
          return (
            u(),
            {
              BelgianCitySearchRepository: Xd,
              generalInsuranceState: o,
              isSavingDraft: p,
              HolderStates: B,
              saveAsDraft: v,
              groupSizes: d,
              InputTypes: Kt,
              onSubmit: b,
              values: s,
              isEdit: l,
            }
          );
        },
      });
    const iu = j()(tu, [["render", Wd]]);
    var nu = iu;
    const au = { key: 0 },
      su = { key: 0, class: "md:ml-20 xs:ml-5 sm:ml-5 xs:w-72 md:w-96" },
      ru = { class: "mt-3" },
      cu = { class: "flex gap-1" },
      lu = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      ou = { class: "mt-3" },
      du = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      uu = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      bu = { class: "flex gap-3 md:ml-20 xs:ml-5 sm:ml-5 mt-5 items-center" };
    function mu(e, t, i, a, s, r) {
      const c = Object(n["H"])("custom-headline-2"),
        l = Object(n["H"])("multi-select"),
        o = Object(n["H"])("required"),
        d = Object(n["H"])("select-participants"),
        u = Object(n["H"])("select-vehicle"),
        b = Object(n["H"])("custom-input"),
        m = Object(n["H"])("back-button"),
        p = Object(n["H"])("custom-button"),
        v = Object(n["H"])("loader");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          "form",
          {
            id: "TravelAssistance",
            onSubmit:
              t[1] ||
              (t[1] = Object(n["Z"])(
                (...t) => e.onSubmit && e.onSubmit(...t),
                ["prevent"]
              )),
          },
          [
            e.values
              ? (Object(n["y"])(),
                Object(n["g"])("div", au, [
                  Object(n["h"])("div", null, [
                    Object(n["k"])(c, { text: "Bestemming" }),
                    "object" !== typeof e.values.country && e.values.country
                      ? Object(n["f"])("", !0)
                      : (Object(n["y"])(),
                        Object(n["g"])("div", su, [
                          Object(n["k"])(
                            l,
                            {
                              id: "country",
                              rules:
                                "required|checkForbiddenCountriesTravelInscuranceWithCar:@forbiddenCountriesVehicle,@vehicle",
                              "insurance-type-id": e.values.vehicle ? "4" : "3",
                              object: !0,
                              "track-by": "name",
                              "value-prop": "name",
                              repository: e.CountryRepository,
                              "resolve-on-load": !0,
                              options: e.values.country
                                ? [e.values.country]
                                : [],
                              searchable: !0,
                              label: "Land",
                              placeholder: "Zoek op naam",
                            },
                            null,
                            8,
                            ["insurance-type-id", "repository", "options"]
                          ),
                        ])),
                  ]),
                  Object(n["h"])("div", ru, [
                    Object(n["h"])("div", cu, [
                      Object(n["k"])(c, { text: "Deelnemers" }),
                      Object(n["k"])(o, { rules: "required", class: "mt-3" }),
                    ]),
                    Object(n["h"])("div", lu, [
                      Object(n["k"])(d, {
                        id: "participants",
                        rules: "required",
                      }),
                    ]),
                  ]),
                  Object(n["h"])("div", ou, [
                    Object(n["k"])(c, { text: "Voertuig" }),
                    Object(n["h"])("div", du, [
                      Object(n["k"])(u, { id: "vehicle" }),
                    ]),
                  ]),
                  Object(n["h"])("div", null, [
                    Object(n["k"])(c, { text: "Opmerkingen" }),
                    Object(n["h"])("div", uu, [
                      Object(n["k"])(
                        b,
                        {
                          type: e.InputTypes.TEXT_AREA,
                          name: "comment",
                          label: "",
                        },
                        null,
                        8,
                        ["type"]
                      ),
                    ]),
                  ]),
                  Object(n["h"])("div", bu, [
                    Object(n["k"])(
                      m,
                      {
                        stateName: "setHolderState",
                        backToState: e.HolderStates.GENERAL,
                      },
                      null,
                      8,
                      ["backToState"]
                    ),
                    Object(n["k"])(p, { text: "Volgende" }),
                    e.isEdit
                      ? Object(n["f"])("", !0)
                      : (Object(n["y"])(),
                        Object(n["g"])(
                          "a",
                          {
                            key: 0,
                            class: "link-inline cursor-pointer",
                            onClick: t[0] || (t[0] = (t) => e.saveAsDraft()),
                          },
                          "Opslaan"
                        )),
                    Object(n["k"])(
                      v,
                      { "is-loading": e.isSavingDraft },
                      null,
                      8,
                      ["is-loading"]
                    ),
                  ]),
                ]))
              : Object(n["f"])("", !0),
          ],
          32
        )
      );
    }
    const pu = ["name"];
    function vu(e, t, i, a, s, r) {
      const c = Object(n["H"])("ErrorMessage"),
        l = Object(n["H"])("member-list"),
        o = Object(n["H"])("members-side-bar");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["h"])(
              "span",
              { name: e.id },
              [
                Object(n["k"])(
                  c,
                  { name: e.id, class: "text-red text-sm block mt-1 w-80" },
                  null,
                  8,
                  ["name"]
                ),
              ],
              8,
              pu
            ),
            Object(n["h"])(
              "a",
              {
                class: "cursor-pointer btn-simple-green mb-4",
                onClick: t[0] || (t[0] = (t) => e.openSideBar()),
              },
              " + Voeg lid toe "
            ),
            Object(n["k"])(
              l,
              {
                "can-be-deleted": !0,
                "members-list": e.members,
                onDeleteMemberFromList:
                  t[1] || (t[1] = (t) => e.deleteMemberFromList(t)),
              },
              null,
              8,
              ["members-list"]
            ),
            e.generalInsuranceState.group
              ? (Object(n["y"])(),
                Object(n["e"])(
                  o,
                  {
                    key: 0,
                    start: e.generalInsuranceState.startDate,
                    end: e.generalInsuranceState.endDate,
                    isDisplay: e.isDisplay,
                    "onUpdate:isDisplay":
                      t[2] || (t[2] = (t) => (e.isDisplay = t)),
                    group: e.generalInsuranceState.group.id,
                    "existing-list": e.members,
                    title: "Lid",
                    onAddMemberToList:
                      t[3] || (t[3] = (t) => e.addMemberToList(t)),
                  },
                  null,
                  8,
                  ["start", "end", "isDisplay", "group", "existing-list"]
                ))
              : Object(n["f"])("", !0),
          ],
          64
        )
      );
    }
    const ju = { class: "d-flex flex-col h-full px-4 pt-4" },
      Ou = { class: "h-full overflow-y-scroll mt-4 pb-24" },
      hu = { key: 0, class: "mt-4 border-t-2 w-100 border-black" },
      gu = { class: "pt-3 pb-4 text-right" };
    function yu(e, t, i, a, s, r) {
      const c = Object(n["H"])("search-input"),
        l = Object(n["H"])("custom-button"),
        o = Object(n["H"])("member-item"),
        d = Object(n["H"])("base-side-bar");
      return (
        Object(n["y"])(),
        Object(n["e"])(
          d,
          {
            isOverflowHidden: e.isOverflowHidden,
            isDisplay: e.display,
            "onUpdate:isDisplay": t[2] || (t[2] = (t) => (e.display = t)),
            name: "Member",
            title: e.title,
          },
          {
            default: Object(n["W"])(() => [
              Object(n["h"])("div", ju, [
                Object(n["h"])("div", null, [
                  Object(n["k"])(
                    c,
                    {
                      start: e.start,
                      end: e.end,
                      loading: e.loading,
                      "onUpdate:loading":
                        t[0] || (t[0] = (t) => (e.loading = t)),
                      name: "member",
                      placeholder: "Zoek op naam",
                      repository: e.PersonRepository,
                      onFetchedOptions:
                        t[1] || (t[1] = (t) => e.fetchedOptions(t)),
                      group: e.group ? e.group : "",
                    },
                    null,
                    8,
                    ["start", "end", "loading", "repository", "group"]
                  ),
                ]),
                Object(n["h"])("div", Ou, [
                  e.selectedMembers.length > 0
                    ? (Object(n["y"])(), Object(n["g"])("hr", hu))
                    : Object(n["f"])("", !0),
                  (Object(n["y"])(!0),
                  Object(n["g"])(
                    n["a"],
                    null,
                    Object(n["F"])(
                      e.selectedMembers,
                      (t) => (
                        Object(n["y"])(),
                        Object(n["g"])("div", { key: t.id, class: "w-100" }, [
                          Object(n["k"])(
                            o,
                            { member: t },
                            {
                              default: Object(n["W"])(() => [
                                Object(n["h"])("div", null, [
                                  Object(n["h"])("div", gu, [
                                    Object(n["k"])(
                                      l,
                                      {
                                        type: "button",
                                        text: e.existingList.some(
                                          (e) =>
                                            e.firstName === t.firstName &&
                                            e.lastName === t.lastName &&
                                            e.street === t.street &&
                                            e.number === t.number
                                        )
                                          ? "Toegevoegd"
                                          : "Voeg toe",
                                        disabled: !(
                                          !e.existingList ||
                                          !e.existingList.some(
                                            (e) =>
                                              e.firstName === t.firstName &&
                                              e.lastName === t.lastName &&
                                              e.street === t.street &&
                                              e.number === t.number
                                          )
                                        ),
                                        onClick: (i) => e.addMember(t),
                                      },
                                      null,
                                      8,
                                      ["text", "disabled", "onClick"]
                                    ),
                                  ]),
                                ]),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["member"]
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]),
            _: 1,
          },
          8,
          ["isOverflowHidden", "isDisplay", "title"]
        )
      );
    }
    class fu extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/member/"),
          (this.endpoint = "/ga/members/info/"),
          (this.deserializer = oe),
          (this.serializer = de);
      }
      search(e, t) {
        return this.get("/ga/members/search/" + e + "/" + (t || ""), {}).then(
          (e) => {
            const t = [];
            return (
              e.forEach((e) => {
                (e = oe(e)), t.push(e);
              }),
              t
            );
          }
        );
      }
    }
    class ku extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/person/"),
          (this.endpoint = "/persons/"),
          (this.deserializer = oe),
          (this.serializer = de);
      }
      search(e, t, i, n) {
        return this.get(
          "/persons/?term=" +
            e +
            "&group=" +
            t +
            (i ? "&start=" + i : "") +
            (n ? "&end=" + n : ""),
          {}
        ).then((e) => {
          const t = [];
          return (
            e.forEach((e) => {
              (e = oe(e)), t.push(e);
            }),
            t
          );
        });
      }
    }
    const Su = ["placeholder", "disabled"],
      Eu = { key: 0, style: { "margin-left": "-2em" }, class: "mt-2" },
      _u = Object(n["h"])(
        "svg",
        { class: "animate-spin h-5 w-5 mr-3", viewBox: "0 0 24 24" },
        [
          Object(n["h"])("path", {
            class: "opacity-20",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
          }),
        ],
        -1
      ),
      Tu = [_u];
    function xu(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])(
          "div",
          {
            class: Object(n["s"])([
              "flex",
              { "text-lightGray animate-pulse2 bg-lightGray": e.loadingSubmit },
            ]),
          },
          [
            Object(n["X"])(
              Object(n["h"])(
                "input",
                {
                  "onUpdate:modelValue": t[0] || (t[0] = (t) => (e.query = t)),
                  placeholder: e.placeholder,
                  type: "text",
                  disabled: e.loadingSubmit,
                  class: Object(n["s"])([
                    { "opacity-0": e.loadingSubmit },
                    "appearance-none border rounded xs:w-72 md:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  ]),
                  onInput: t[1] || (t[1] = (t) => e.search()),
                },
                null,
                42,
                Su
              ),
              [[n["R"], e.query]]
            ),
            e.loading && "" != e.query
              ? (Object(n["y"])(), Object(n["g"])("div", Eu, Tu))
              : Object(n["f"])("", !0),
          ],
          2
        )
      );
    }
    var wu = Object(n["l"])({
      name: "SearchInput",
      props: {
        name: { type: String, required: !0 },
        placeholder: { type: String, required: !1, default: "Zoek..." },
        repository: { type: Function, required: !1, default: Function },
        loading: Boolean,
        loadingSubmit: { type: Boolean, default: !1, required: !1 },
        group: String,
        start: String,
        end: String,
      },
      setup(e, t) {
        let i;
        const a = Object(n["E"])(""),
          s = Object(n["E"])([]),
          r = () => {
            t.emit("update:loading", !0),
              clearTimeout(i),
              (i = setTimeout(() => {
                a.value &&
                  Yt.get(e.repository)
                    .search(a.value, e.group, e.start, e.end)
                    .then((e) => {
                      (s.value = e), t.emit("fetchedOptions", s.value);
                    });
              }, 1e3));
          };
        return { options: s, search: r, query: a };
      },
    });
    const Iu = j()(wu, [["render", xu]]);
    var Cu = Iu,
      Du = i("c26a"),
      Nu = Object(n["l"])({
        name: "MemberSideBar",
        components: {
          "custom-button": An,
          "base-side-bar": Du["a"],
          "search-input": Cu,
          "member-item": vs,
        },
        props: {
          title: { type: String, required: !0 },
          isDisplay: { type: Boolean, required: !0 },
          existingList: { type: Array, default: () => [] },
          closeOnAdd: { type: Boolean, default: !1, required: !1 },
          isOverflowHidden: { type: Boolean, required: !1, default: !0 },
          group: String,
          start: String,
          end: String,
        },
        setup(e, t) {
          const i = Object(Q["b"])(),
            a = Object(n["E"])(i.getters.user),
            s = Object(n["E"])(e.isDisplay),
            r = Object(n["E"])([]),
            c = Object(n["E"])(!1),
            l = (i) => {
              e.existingList.includes(i) || t.emit("addMemberToList", i),
                e.closeOnAdd && (s.value = !1);
            },
            o = (e) => {
              (r.value = []),
                e.forEach((e) => {
                  r.value.push(e);
                }),
                (c.value = !1);
            };
          return (
            Object(n["U"])(
              () => e.isDisplay,
              () => {
                s.value = e.isDisplay;
              }
            ),
            Object(n["U"])(
              () => s.value,
              () => {
                t.emit("update:isDisplay", s.value);
              }
            ),
            {
              BelgianCitySearchRepository: Xd,
              MemberRepository: fu,
              PersonRepository: ku,
              selectedMembers: r,
              fetchedOptions: o,
              InputTypes: Kt,
              addMember: l,
              display: s,
              loading: c,
              user: a,
            }
          );
        },
      });
    i("47d8");
    const Mu = j()(Nu, [
      ["render", yu],
      ["__scopeId", "data-v-f6a7f910"],
    ]);
    var zu = Mu,
      Au = Object(n["l"])({
        name: "SelectParticipant",
        components: {
          "members-side-bar": zu,
          "member-list": hs,
          ErrorMessage: nt["a"],
        },
        props: {
          id: { type: String, required: !0 },
          rules: {
            type: [Object, String, Function],
            default: "",
            required: !1,
          },
        },
        setup(e) {
          const { value: t } = Object(nt["d"])(e.id, e.rules, {}),
            i = Object(n["E"])(!1),
            a = () => {
              i.value = !0;
            },
            s = (e) => {
              t.value.push(e);
            },
            r = (e) => {
              t.value.splice(Number(e), 1);
            },
            c = Object(Q["b"])(),
            l = Object(n["c"])(() => c.state.insurance.generalInsuranceState);
          return {
            addMemberToList: s,
            deleteMemberFromList: r,
            openSideBar: a,
            members: t,
            isDisplay: i,
            generalInsuranceState: l,
          };
        },
      });
    const Hu = j()(Au, [["render", vu]]);
    var Ru = Hu;
    const Bu = { name: "vehicle" },
      qu = { key: 0, class: "grid bg-gray gap-4 p-4" },
      Vu = { class: "text-left mt-3" },
      Lu = Object(n["h"])(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          class:
            "h-5 w-5 hover:text-lightGreen cursor-pointer inline-block mt-n1 mr-0",
          viewBox: "0 0 20 20",
          fill: "currentColor",
        },
        [
          Object(n["h"])("path", {
            d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z",
          }),
        ],
        -1
      ),
      Gu = Object(n["h"])("span", { class: "inline-block" }, "Bewerken", -1),
      Pu = [Lu, Gu],
      Ku = Object(n["h"])(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          class:
            "h-5 w-5 hover:text-lightGreen cursor-pointer inline-block mt-n1 mr-n1",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
        },
        [
          Object(n["h"])("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
          }),
        ],
        -1
      ),
      Yu = Object(n["j"])(" Verwijder"),
      Uu = [Ku, Yu],
      Fu = { class: "font-semibold text-lg" };
    function Wu(e, t, i, a, s, r) {
      const c = Object(n["H"])("ErrorMessage"),
        l = Object(n["H"])("vehicle-item"),
        o = Object(n["H"])("vehicle-side-bar");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["h"])("span", Bu, [
              Object(n["k"])(c, {
                name: "vehicle",
                class: "text-red text-sm block mt-1 w-80",
              }),
            ]),
            Object(n["h"])(
              "a",
              {
                class: "cursor-pointer btn-simple-green mb-4",
                onClick: t[0] || (t[0] = (t) => e.openSideBar()),
              },
              Object(n["K"])(
                e.vehicle ? "Verander voertuig" : "+ Voeg voertuig toe"
              ),
              1
            ),
            e.vehicle
              ? (Object(n["y"])(),
                Object(n["g"])("div", qu, [
                  Object(n["k"])(
                    l,
                    { vehicle: e.vehicle, "no-line": !0 },
                    {
                      default: Object(n["W"])(() => [
                        Object(n["X"])(
                          Object(n["h"])(
                            "div",
                            Vu,
                            [
                              Object(n["h"])(
                                "a",
                                {
                                  class:
                                    "hover:text-lightGreen cursor-pointer link-inline inline-block mr-3",
                                  for: "",
                                  onClick:
                                    t[1] ||
                                    (t[1] = (t) => e.editVehicle(e.vehicle)),
                                },
                                Pu
                              ),
                              Object(n["h"])(
                                "a",
                                {
                                  class:
                                    "hover:text-lightGreen cursor-pointer link-inline",
                                  for: "",
                                  onClick:
                                    t[2] ||
                                    (t[2] = (t) => e.deleteVehicle(e.index)),
                                },
                                Uu
                              ),
                            ],
                            512
                          ),
                          [[n["S"], !e.isSubmitting]]
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["vehicle"]
                  ),
                  Object(n["X"])(
                    Object(n["h"])(
                      "div",
                      Fu,
                      "Geen voertuig geselecteerd",
                      512
                    ),
                    [[n["S"], !e.vehicle]]
                  ),
                ]))
              : Object(n["f"])("", !0),
            Object(n["k"])(
              o,
              {
                "side-bar-state": e.sideBarState,
                "onUpdate:side-bar-state":
                  t[3] || (t[3] = (t) => (e.sideBarState = t)),
                title:
                  "edit" === e.sideBarState.state
                    ? "Bewerk voertuig"
                    : "Voertuig toevoegen",
                onAddCreatedVehicle:
                  t[4] || (t[4] = (t) => e.addCreatedVehicle(t)),
              },
              null,
              8,
              ["side-bar-state", "title"]
            ),
          ],
          64
        )
      );
    }
    const Xu = (e) => (
        Object(n["B"])("data-v-1fce249a"), (e = e()), Object(n["z"])(), e
      ),
      Zu = {
        class: "flex-col overflow-y-scroll overflow-x-hidden px-4 h-full",
      },
      Ju = { class: "w-100" },
      $u = { class: "w-100 mt-4 w-" },
      Qu = { class: "w-100 mt-4" },
      eb = Xu(() =>
        Object(n["h"])(
          "div",
          { class: "pb-3" },
          " Bouwjaar ouder 10 jaar geleden? Het heeft weinig zin om een oud voertuig te verzekeren. Bij een schade zal de verzekeringsmaatschappij nooit een bedrag uitkeren dat hoger is dan de waarde. (Meestal erg laag voor een oude auto.) ",
          -1
        )
      ),
      tb = { class: "w-100 mt-4" },
      ib = { class: "w-100" },
      nb = { key: 0, class: "w-100 mb-32" },
      ab = { key: 1, class: "w-100 mb-32" },
      sb = { class: "ml-4 py-4 sticky bottom-0 bg-white" },
      rb = { class: "h-full overflow-y-scroll mt-4 pb-44" },
      cb = { key: 0, class: "mt-4 border-t-2 w-100 border-black pb-4" },
      lb = { class: "pb-4 text-right" };
    function ob(e, t, i, a, s, r) {
      const c = Object(n["H"])("custom-input"),
        l = Object(n["H"])("multi-select"),
        o = Object(n["H"])("custom-button"),
        d = Object(n["H"])("search-input"),
        u = Object(n["H"])("vehicle-item"),
        b = Object(n["H"])("base-side-bar");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["k"])(
            b,
            {
              selection: e.selected,
              "is-display": "hide" !== e.sideBarState.state,
              name: "Vehicle",
              title: e.title,
              options: e.options,
              onOptions: e.changeSideBar,
              onHideSidebar: e.closeSideBar,
            },
            {
              default: Object(n["W"])(() => [
                Object(n["h"])(
                  "form",
                  {
                    id: "addNewVehicle",
                    class: Object(n["s"])([
                      {
                        "d-flex":
                          "new" === e.sideBarState.state ||
                          "edit" === e.sideBarState.state,
                        "d-none": "list" === e.sideBarState.state,
                      },
                      "flex-col relative overflow-y-scroll overflow-x-hidden h-full",
                    ]),
                    onSubmit:
                      t[0] ||
                      (t[0] = Object(n["Z"])(
                        (...t) => e.onSubmit && e.onSubmit(...t),
                        ["prevent"]
                      )),
                  },
                  [
                    Object(n["h"])("div", Zu, [
                      Object(n["h"])("div", Ju, [
                        Object(n["k"])(
                          c,
                          {
                            type: e.InputTypes.TEXT,
                            rules: "required",
                            name: "brand",
                            label: "Merk",
                          },
                          null,
                          8,
                          ["type"]
                        ),
                      ]),
                      Object(n["h"])("div", $u, [
                        Object(n["k"])(
                          c,
                          {
                            maxlength: 10,
                            type: e.InputTypes.TEXT,
                            rules: "required",
                            name: "licensePlate",
                            label: "Nummerplaat",
                          },
                          null,
                          8,
                          ["type"]
                        ),
                      ]),
                      Object(n["h"])("div", Qu, [
                        Object(n["k"])(
                          c,
                          {
                            type: e.InputTypes.TEXT,
                            rules: "required",
                            name: "constructionYear",
                            maxlength: "4",
                            label: "Bouwjaar",
                          },
                          { default: Object(n["W"])(() => [eb]), _: 1 },
                          8,
                          ["type"]
                        ),
                      ]),
                      Object(n["h"])("div", tb, [
                        Object(n["k"])(
                          c,
                          {
                            maxlength: 20,
                            type: e.InputTypes.TEXT,
                            rules: "required",
                            name: "chassisNumber",
                            label: "Chassisnummer",
                          },
                          null,
                          8,
                          ["type"]
                        ),
                      ]),
                      Object(n["h"])("div", ib, [
                        Object(n["k"])(
                          l,
                          {
                            id: "type",
                            class: "custom",
                            object: !0,
                            "track-by": "label",
                            "value-prop": "value",
                            repository: e.VehicleTypeRepository,
                            options: e.vehicleTypes,
                            label: "Type",
                            rules: "required",
                            placeholder: "Selecteer type",
                          },
                          null,
                          8,
                          ["repository", "options"]
                        ),
                      ]),
                      "REIS_BIJSTAND" !== e.insuranceTypeState
                        ? (Object(n["y"])(),
                          Object(n["g"])("div", nb, [
                            Object(n["k"])(
                              l,
                              {
                                id: "trailer",
                                object: !0,
                                "track-by": "label",
                                "value-prop": "value",
                                repository: e.TrailerRepository,
                                options: e.trailers,
                                label: "Aanhangwagen",
                                rules: "required",
                                placeholder: "Selecteer aanhangwagen",
                              },
                              null,
                              8,
                              ["repository", "options"]
                            ),
                          ]))
                        : (Object(n["y"])(),
                          Object(n["g"])("div", ab, [
                            Object(n["k"])(
                              l,
                              {
                                id: "trailer",
                                object: !0,
                                "track-by": "label",
                                "value-prop": "value",
                                repository: e.TrailerRepository,
                                options: e.trailersReisbijstand,
                                label: "Aanhangwagen",
                                rules: "required",
                                placeholder: "Selecteer aanhangwagen",
                              },
                              null,
                              8,
                              ["repository", "options"]
                            ),
                          ])),
                    ]),
                    Object(n["h"])("div", sb, [
                      Object(n["k"])(
                        o,
                        {
                          text:
                            "edit" === e.sideBarState.state
                              ? "Bewerk"
                              : "Voeg toe",
                        },
                        null,
                        8,
                        ["text"]
                      ),
                    ]),
                  ],
                  34
                ),
                Object(n["h"])(
                  "form",
                  {
                    class: Object(n["s"])([
                      {
                        "d-flex": "list" === e.sideBarState.state,
                        "d-none":
                          "new" === e.sideBarState.state ||
                          "edit" === e.sideBarState.state,
                      },
                      "flex-col h-full px-4 pt-3",
                    ]),
                    onSubmit:
                      t[3] ||
                      (t[3] = Object(n["Z"])(
                        (...t) => e.onSubmit && e.onSubmit(...t),
                        ["prevent"]
                      )),
                  },
                  [
                    Object(n["h"])("div", null, [
                      Object(n["k"])(
                        d,
                        {
                          loading: e.loading,
                          "onUpdate:loading":
                            t[1] || (t[1] = (t) => (e.loading = t)),
                          name: "search",
                          placeholder: "Zoek op merk",
                          repository: e.VehicleRepository,
                          onFetchedOptions:
                            t[2] || (t[2] = (t) => e.fetchedOptions(t)),
                        },
                        null,
                        8,
                        ["loading", "repository"]
                      ),
                    ]),
                    Object(n["h"])("div", rb, [
                      e.fetchedVehicles.length > 0
                        ? (Object(n["y"])(), Object(n["g"])("hr", cb))
                        : Object(n["f"])("", !0),
                      (Object(n["y"])(!0),
                      Object(n["g"])(
                        n["a"],
                        null,
                        Object(n["F"])(
                          e.fetchedVehicles,
                          (t) => (
                            Object(n["y"])(),
                            Object(n["g"])(
                              "div",
                              { key: t.id, class: "w-100" },
                              [
                                Object(n["k"])(
                                  u,
                                  { vehicle: t },
                                  {
                                    default: Object(n["W"])(() => [
                                      Object(n["h"])("div", null, [
                                        Object(n["h"])("div", lb, [
                                          Object(n["h"])("div", null, [
                                            Object(n["k"])(
                                              o,
                                              {
                                                type: "button",
                                                text: "Kies",
                                                onClick: (i) => e.setVehicle(t),
                                              },
                                              null,
                                              8,
                                              ["onClick"]
                                            ),
                                          ]),
                                        ]),
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["vehicle"]
                                ),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ],
                  34
                ),
              ]),
              _: 1,
            },
            8,
            [
              "selection",
              "is-display",
              "title",
              "options",
              "onOptions",
              "onHideSidebar",
            ]
          ),
        ])
      );
    }
    class db extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/vehicle_types/"),
          (this.endpoint = "/vehicle_types/"),
          (this.deserializer = Ce),
          (this.serializer = De);
      }
      getArray(e) {
        return this.get(this.endpoint, {}).then((e) => {
          const t = [];
          return (
            e.forEach((e) => {
              t.push(this.deserializer(e));
            }),
            t
          );
        });
      }
    }
    class ub extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/vehicles/"),
          (this.endpoint = "/vehicles/"),
          (this.deserializer = He),
          (this.serializer = Re);
      }
      search(e) {
        return this.get(this.endpoint + "?term=" + e, {}).then((e) => {
          const t = [];
          return (
            e.results.forEach((e) => {
              (e = He(e)), t.push(e);
            }),
            t
          );
        });
      }
    }
    class bb extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/vehicle_trailer_options/"),
          (this.endpoint = "/vehicle_trailer_options/"),
          (this.deserializer = Ne),
          (this.serializer = Me);
      }
      getArray(e) {
        return this.get(this.endpoint, {}).then((e) => {
          const t = [];
          return (
            e.forEach((e) => {
              t.push(this.deserializer(e));
            }),
            t
          );
        });
      }
    }
    var mb = Object(n["l"])({
      name: "VehicleSideBar",
      components: {
        "custom-button": An,
        "base-side-bar": Du["a"],
        "custom-input": bd,
        "multi-select": gd,
        "vehicle-item": As,
        "search-input": Cu,
      },
      props: {
        title: { type: String, required: !0 },
        sideBarState: { type: Object, required: !0, default: () => {} },
      },
      emits: ["update:sideBarState", "addCreatedVehicle", "updateMemberInList"],
      setup(e, t) {
        const i = Object(n["E"])([
            { text: "Nieuw", value: "Nieuw" },
            { text: "Uit eerdere aanvragen", value: "Bestaand" },
          ]),
          a = Object(Q["b"])(),
          s = Object(n["E"])(a.getters.user),
          {
            resetForm: r,
            handleSubmit: c,
            validate: l,
            meta: o,
            values: d,
            isSubmitting: u,
          } = Object(nt["e"])({
            initialValues: { trailer: { id: "0", value: "0", label: "Geen" } },
          }),
          { formSendWithSuccess: b } = Y(o),
          m = Object(n["c"])(() =>
            "list" === e.sideBarState.state ? "BestaandVehicle" : "NieuwVehicle"
          ),
          p = Object(n["E"])({}),
          v = Object(n["E"])([]),
          j = Object(n["c"])(() => a.state.insurance.generalInsuranceState),
          O = Object(n["E"])(!1),
          { sideBarState: h } = Object(n["M"])(e),
          g = Object(n["c"])(() => a.state.insurance.insuranceTypeState),
          y = async () => {
            await l().then((e) => P(e, "addNewVehicle")),
              c(async (t) => {
                if (
                  "new" === e.sideBarState.state ||
                  "edit" === e.sideBarState.state
                ) {
                  t.group = j.value.group.id;
                  const i = Object(n["E"])({
                    id: t.id,
                    type: t.type,
                    brand: t.brand,
                    licensePlate: t.licensePlate,
                    constructionYear: t.constructionYear,
                    chassisNumber: t.chassisNumber,
                    trailer: t.trailer,
                    group: j.value.group.id,
                  });
                  "edit" === e.sideBarState.state
                    ? await S(i.value)
                    : await k(i.value);
                }
                T();
              })();
          },
          f = (e) => {
            e && (p.value = e);
          },
          k = async (e) => {
            await Yt.get(ub)
              .create(e)
              .then((e) => {
                (p.value = e),
                  t.emit("addCreatedVehicle", p.value),
                  (p.value = {}),
                  r();
              });
          },
          S = async (e) => {
            await Yt.get(ub)
              .update(e.id ? e.id : "", e)
              .then((e) => {
                (p.value = e),
                  t.emit("addCreatedVehicle", p.value),
                  (p.value = {}),
                  r();
              });
          },
          E = Object(n["E"])([]),
          _ = () => {
            Yt.get(db)
              .getArray()
              .then((e) => {
                E.value = e;
              })
              .catch(() => {
                Yt.get(db)
                  .getArray()
                  .then((e) => {
                    E.value = e;
                  });
              });
          },
          T = () => {
            t.emit("update:sideBarState", { state: "hide" });
          },
          x = (e) => {
            "NieuwVehicle" === e &&
              t.emit("update:sideBarState", { state: "new" }),
              "BestaandVehicle" === e &&
                t.emit("update:sideBarState", { state: "list" });
          },
          w = Object(n["E"])([]),
          I = Object(n["E"])([
            { id: "0", value: "0", label: "Geen" },
            { id: "1", value: "1", label: "Aanhangwagen (zonder meerprijs)" },
          ]),
          C = () => {
            Yt.get(bb)
              .getArray()
              .then((e) => {
                w.value = e;
              })
              .catch(() => {
                Yt.get(bb)
                  .getArray()
                  .then((e) => {
                    w.value = e;
                  });
              });
          },
          D = (e) => {
            (v.value = []),
              e.forEach((e) => {
                v.value.push(e);
              }),
              (O.value = !1);
          },
          N = (e) => {
            "BestaandVehicle" === m.value && t.emit("addCreatedVehicle", e),
              T();
          };
        return (
          _(),
          C(),
          Object(n["U"])(
            () => u.value,
            () => {
              a.dispatch("setIsSubmittingState", u.value);
            }
          ),
          Object(n["U"])(h, (e) => {
            "edit" === e.state &&
              ((b.value = !1),
              r({
                values: {
                  id: e.entity.id,
                  type: e.entity.type,
                  brand: e.entity.brand,
                  licensePlate: e.entity.licensePlate,
                  constructionYear: e.entity.constructionYear,
                  chassisNumber: e.entity.chassisNumber,
                  trailer: e.entity.trailer,
                  group: j.value.group.id,
                },
              })),
              "new" === e.state &&
                ((b.value = !1),
                r({
                  values: {
                    id: "",
                    type: void 0,
                    brand: "",
                    licensePlate: "",
                    constructionYear: "",
                    chassisNumber: "",
                    trailer: { id: "0", value: "0", label: "Geen" },
                    group: j.value.group.id,
                  },
                  errors: {},
                }));
          }),
          {
            insuranceTypeState: g,
            VehicleTypeRepository: db,
            TrailerRepository: bb,
            VehicleRepository: ub,
            selectedVehicle: p,
            fetchedVehicles: v,
            fetchedOptions: D,
            addVehicle: f,
            setVehicle: N,
            InputTypes: Kt,
            selected: m,
            onSubmit: y,
            user: s,
            values: d,
            vehicleTypes: E,
            trailers: w,
            generalInsuranceState: j,
            loading: O,
            changeSideBar: x,
            closeSideBar: T,
            options: i,
            trailersReisbijstand: I,
          }
        );
      },
    });
    i("24d6"), i("979f");
    const pb = j()(mb, [
      ["render", ob],
      ["__scopeId", "data-v-1fce249a"],
    ]);
    var vb = pb,
      jb = Object(n["l"])({
        name: "SelectVehicle",
        components: {
          "vehicle-side-bar": vb,
          "vehicle-item": As,
          ErrorMessage: nt["a"],
        },
        props: {
          id: { type: String, required: !0 },
          rules: {
            type: [Object, String, Function],
            default: "",
            required: !1,
          },
        },
        setup(e) {
          const { value: t } = Object(nt["d"])(e.id, e.rules, {
              initialValue: void 0,
            }),
            i = Object(n["E"])({ state: "hide" }),
            a = Object(n["E"])(!1),
            s = () => {
              i.value = { state: "new" };
            },
            r = (e) => {
              t.value = e;
            },
            c = () => {
              t.value = void 0;
            },
            l = Object(n["E"])(),
            o = Object(n["E"])(!1),
            d = (e) => {
              i.value = { state: "edit", entity: e };
            },
            u = Object(Q["b"])(),
            b = Object(n["c"])(() => u.state.insurance.isSubmittingState);
          return {
            addCreatedVehicle: r,
            deleteVehicle: c,
            vehicleToEdit: l,
            sideBarState: i,
            isSubmitting: b,
            openSideBar: s,
            editVehicle: d,
            isDisplay: a,
            vehicle: t,
            isEdit: o,
          };
        },
      });
    const Ob = j()(jb, [["render", Wu]]);
    var hb = Ob,
      gb = Object(n["l"])({
        name: "TravelAssistance",
        components: {
          "select-participants": Ru,
          "custom-headline-2": qi,
          "select-vehicle": hb,
          "custom-button": An,
          "multi-select": gd,
          "custom-input": bd,
          "back-button": eu,
          Required: od,
          Loader: Nn,
        },
        setup() {
          const e = Object(hi["c"])(),
            t = Object(Q["b"])(),
            i = t.getters.getCurrentInsuranceState,
            {
              handleSubmit: a,
              values: s,
              isSubmitting: r,
              validate: c,
            } = Object(nt["e"])({
              initialValues: {
                country: i.country ? i.country : void 0,
                participants: i.participants ? i.participants : [],
                vehicle: i.vehicle ? i.vehicle : void 0,
                comment: i.comment ? i.comment : "",
                vvksComment: i.vvksComment ? i.vvksComment : "",
              },
            }),
            l = !!e.params.id,
            o = Object(n["c"])(() => t.state.insurance.generalInsuranceState),
            d = Object(n["E"])([]),
            u = Object(n["E"])([]);
          Yt.get(Ut)
            .getArray("/countries_by_type/3/?page_size=1000")
            .then((e) => {
              var t;
              ((d.value = e.results), l) &&
                (d.value.forEach((e) => {
                  e.id.toString() === s.country && (t = e);
                }),
                (s.country = t));
            })
            .then(() => {
              Yt.get(Ut)
                .getArray("/countries_by_type/4/?page_size=1000")
                .then((e) => {
                  u.value = e.results;
                })
                .then(() => {
                  s.forbiddenCountriesVehicle = d.value.filter((e) =>
                    u.value.every((t) => !(t.name === e.name))
                  );
                });
            }),
            Object(n["U"])(
              () => r.value,
              () => {
                t.dispatch("setIsSubmittingState", r.value);
              }
            );
          const b = async () => {
              await c().then((e) => P(e, "TravelAssistance")),
                a(async (e) => {
                  const i = Object(n["E"])({
                    ...o.value,
                    country: e.country ? e.country : void 0,
                    participants: e.participants ? e.participants : [],
                    vehicle: e.vehicle ? e.vehicle : void 0,
                    responsiblePhoneNumber:
                      o.value.responsibleMember &&
                      o.value.responsibleMember.phoneNumber
                        ? o.value.responsibleMember.phoneNumber
                        : "/",
                    comment: e.comment ? e.comment : "",
                    vvksComment: e.vvksComment ? e.vvksComment : "",
                  });
                  await Yt.get(Qe[t.getters.insuranceTypeState])
                    .getCalculatedCost(i.value)
                    .then((e) => {
                      (i.value.totalCost = e),
                        t.dispatch("setTravelAssistanceState", i),
                        t.dispatch("setHolderState", B.DETAIL);
                    })
                    .catch((e) => {
                      i.value.vehicle &&
                        i.value.vehicle.trailer &&
                        ("2" === i.value.vehicle.trailer.value &&
                          window.alert(
                            'Opgelet: Pas het veld "aanhangwagen" aan via de knop Bewerken bij het voertuig.'
                          ),
                        "3" === i.value.vehicle.trailer.value &&
                          window.alert(
                            'Opgelet: Pas het veld "aanhangwagen" aan via de knop Bewerken bij het voertuig.'
                          ));
                    });
                })();
            },
            m = Object(n["c"])(() => t.state.insurance.insuranceTypeState),
            p = Object(n["E"])(!1),
            v = () => {
              const e = Object(n["E"])({
                ...o.value,
                country: s.country ? s.country : void 0,
                participants: s.participants ? s.participants : [],
                vehicle: s.vehicle ? s.vehicle : void 0,
                responsiblePhoneNumber:
                  o.value.responsibleMember &&
                  o.value.responsibleMember.phoneNumber
                    ? o.value.responsibleMember.phoneNumber
                    : "/",
                comment: s.comment ? s.comment : "",
              });
              p.value ||
                ((p.value = !0),
                Yt.get(Qe[m.value])
                  .createDraft(e.value, m.value)
                  .then(() => {
                    Qf.push("/home/verzekeringen");
                  }));
            };
          return {
            CountryRepository: Ut,
            isSavingDraft: p,
            HolderStates: B,
            isSubmitting: r,
            saveAsDraft: v,
            InputTypes: Kt,
            onSubmit: b,
            values: s,
            isEdit: l,
          };
        },
      });
    const yb = j()(gb, [["render", mu]]);
    var fb = yb;
    const kb = { key: 0, class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Sb = { key: 0, class: "md:w-96 xs:w-72" },
      Eb = { key: 1 },
      _b = { key: 0, class: "md:w-96 xs:w-72" },
      Tb = { class: "mt-3" },
      xb = { class: "flex gap-1" },
      wb = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Ib = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Cb = { class: "flex gap-3 mt-5 items-center" };
    function Db(e, t, i, a, s, r) {
      const c = Object(n["H"])("custom-headline-2"),
        l = Object(n["H"])("custom-input"),
        o = Object(n["H"])("multi-select"),
        d = Object(n["H"])("required"),
        u = Object(n["H"])("select-non-member"),
        b = Object(n["H"])("back-button"),
        m = Object(n["H"])("custom-button"),
        p = Object(n["H"])("loader");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          "form",
          {
            id: "NonMember",
            onSubmit:
              t[1] ||
              (t[1] = Object(n["Z"])(
                (...t) => e.onSubmit && e.onSubmit(...t),
                ["prevent"]
              )),
          },
          [
            Object(n["k"])(c, { text: "Activiteit" }),
            e.values
              ? (Object(n["y"])(),
                Object(n["g"])("div", kb, [
                  Object(n["k"])(
                    l,
                    {
                      type: e.InputTypes.TEXT_AREA,
                      rules: "required",
                      name: "nature",
                      label: "Aard van de activiteit",
                    },
                    null,
                    8,
                    ["type"]
                  ),
                  "object" === typeof e.values.country
                    ? (Object(n["y"])(),
                      Object(n["g"])("div", Sb, [
                        Object(n["k"])(
                          o,
                          {
                            id: "country",
                            rules: "required",
                            "insurance-type-id": "2",
                            object: !0,
                            "track-by": "name",
                            "value-prop": "name",
                            repository: e.CountryRepository,
                            "resolve-on-load": !0,
                            options: e.values.country
                              ? [e.values.country]
                              : [{ id: "3232", name: "België" }],
                            "extra-option": { id: "3232", name: "België" },
                            searchable: !0,
                            label: "Land",
                            placeholder: "Zoek op naam",
                          },
                          null,
                          8,
                          ["repository", "options"]
                        ),
                      ]))
                    : Object(n["f"])("", !0),
                  e.values.country
                    ? (Object(n["y"])(),
                      Object(n["g"])("div", Eb, [
                        "" === e.values.country.name ||
                        "België" === e.values.country.name
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", _b, [
                              Object(n["k"])(
                                o,
                                {
                                  id: "postCodeCity",
                                  object: !0,
                                  "track-by": "label",
                                  "value-prop": "label",
                                  repository: e.BelgianCitySearchRepository,
                                  "resolve-on-load": !0,
                                  options: e.values.postCodeCity
                                    ? [e.values.postCodeCity]
                                    : [],
                                  searchable: !0,
                                  label: "Gemeente",
                                  rules: "required",
                                  placeholder: "Zoek op naam/postcode",
                                },
                                null,
                                8,
                                ["repository", "options"]
                              ),
                            ]))
                          : Object(n["f"])("", !0),
                      ]))
                    : Object(n["f"])("", !0),
                ]))
              : Object(n["f"])("", !0),
            Object(n["h"])("div", Tb, [
              Object(n["h"])("div", xb, [
                Object(n["k"])(c, { text: "Te verzekeren personen" }),
                Object(n["k"])(d, { rules: "required", class: "mt-3" }),
              ]),
            ]),
            Object(n["h"])("div", wb, [
              Object(n["k"])(u, {
                id: "nonMembers",
                "is-extra-information-comment": !0,
                rules: "required",
              }),
            ]),
            Object(n["h"])("div", null, [
              Object(n["k"])(c, { text: "Opmerkingen" }),
              Object(n["h"])("div", Ib, [
                Object(n["k"])(
                  l,
                  { type: e.InputTypes.TEXT_AREA, name: "comment", label: "" },
                  null,
                  8,
                  ["type"]
                ),
              ]),
            ]),
            Object(n["h"])("div", Cb, [
              Object(n["k"])(
                b,
                {
                  stateName: "setHolderState",
                  backToState: e.HolderStates.GENERAL,
                },
                null,
                8,
                ["backToState"]
              ),
              Object(n["k"])(m, { text: "Volgende" }),
              e.isEdit
                ? Object(n["f"])("", !0)
                : (Object(n["y"])(),
                  Object(n["g"])(
                    "a",
                    {
                      key: 0,
                      class: "link-inline cursor-pointer",
                      onClick: t[0] || (t[0] = (t) => e.saveAsDraft()),
                    },
                    "Opslaan"
                  )),
              Object(n["k"])(p, { "is-loading": e.isSavingDraft }, null, 8, [
                "is-loading",
              ]),
            ]),
          ],
          32
        )
      );
    }
    const Nb = ["name"];
    function Mb(e, t, i, a, s, r) {
      const c = Object(n["H"])("ErrorMessage"),
        l = Object(n["H"])("non-member-list"),
        o = Object(n["H"])("non-member-side-bar");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["h"])(
              "span",
              { name: e.id },
              [
                Object(n["k"])(
                  c,
                  { name: e.id, class: "text-red text-sm block mt-1 w-80" },
                  null,
                  8,
                  ["name"]
                ),
              ],
              8,
              Nb
            ),
            Object(n["h"])(
              "a",
              {
                class: "cursor-pointer btn-simple-green mb-4",
                onClick: t[0] || (t[0] = (t) => e.openSideBar()),
              },
              " + Voeg persoon toe "
            ),
            Object(n["k"])(
              l,
              {
                "can-be-deleted": !0,
                "non-members-list": e.nonMembers,
                onDeleteNonMemberFromList:
                  t[1] || (t[1] = (t) => e.deleteNonMemberFromList(t)),
                onEditNonMember: t[2] || (t[2] = (t) => e.editNonMember(t)),
                onSelectedIndex: t[3] || (t[3] = (t) => e.selectedElement(t)),
              },
              null,
              8,
              ["non-members-list"]
            ),
            Object(n["k"])(
              o,
              {
                "side-bar-state": e.sideBarState,
                "onUpdate:side-bar-state":
                  t[4] || (t[4] = (t) => (e.sideBarState = t)),
                "is-extra-information-comment": e.isExtraInformationComment,
                "existing-list": e.nonMembers,
                title:
                  "edit" === e.sideBarState.state
                    ? "Bewerk persoonsgegevens"
                    : "Persoonsgegevens",
                onAddCreatedNonMemberToList:
                  t[5] || (t[5] = (t) => e.addCreatedNonMemberToList(t)),
                onUpdateMemberInList:
                  t[6] || (t[6] = (t) => e.updateMemberInList(t)),
              },
              null,
              8,
              [
                "side-bar-state",
                "is-extra-information-comment",
                "existing-list",
                "title",
              ]
            ),
          ],
          64
        )
      );
    }
    const zb = {
        class: "flex-col overflow-y-scroll overflow-x-hidden px-4 h-full",
      },
      Ab = { class: "w-100" },
      Hb = { class: "w-100 mt-4" },
      Rb = { class: "w-100" },
      Bb = { class: "w-100 mt-4" },
      qb = { class: "w-100 mt-4" },
      Vb = { class: "w-100 mt-4" },
      Lb = { class: "w-100 mt-4" },
      Gb = { class: "w-100 mt-4" },
      Pb = { key: 0 },
      Kb = { class: "py-4 sticky bottom-0 bg-white pl-4" },
      Yb = { class: "h-full overflow-y-scroll mt-4 pb-36" },
      Ub = { key: 0, class: "mt-4 border-t-2 w-100 border-black" },
      Fb = { class: "pt-3 pb-4 text-right" };
    function Wb(e, t, i, a, s, r) {
      const c = Object(n["H"])("success-toast"),
        l = Object(n["H"])("custom-input"),
        o = Object(n["H"])("multi-select"),
        d = Object(n["H"])("custom-button"),
        u = Object(n["H"])("search-input"),
        b = Object(n["H"])("non-member-item"),
        m = Object(n["H"])("base-side-bar");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["k"])(
            m,
            {
              isOverflowHidden: e.isOverflowHidden,
              selection: e.selected,
              "is-display": "hide" !== e.sideBarState.state,
              "is-edit": "edit" === e.sideBarState.state,
              name: "NonMember",
              title: e.title,
              options: e.options,
              onOptions: e.changeSideBar,
              onHideSidebar: e.closeSideBar,
            },
            {
              default: Object(n["W"])(() => [
                Object(n["h"])(
                  "form",
                  {
                    id: "addNewNonMember",
                    ref: "formDiv",
                    class: Object(n["s"])([
                      {
                        "d-flex":
                          "new" === e.sideBarState.state ||
                          "edit" === e.sideBarState.state,
                        "d-none": "list" === e.sideBarState.state,
                      },
                      "flex-col relative overflow-y-scroll overflow-x-hidden h-full",
                    ]),
                    onSubmit:
                      t[0] ||
                      (t[0] = Object(n["Z"])(
                        (...t) => e.onSubmit && e.onSubmit(...t),
                        ["prevent"]
                      )),
                  },
                  [
                    Object(n["X"])(
                      Object(n["k"])(
                        c,
                        { label: "Persoon succesvol toegevoegd" },
                        null,
                        512
                      ),
                      [[n["S"], e.formSendWithSuccess]]
                    ),
                    Object(n["h"])("div", zb, [
                      Object(n["h"])("div", Ab, [
                        Object(n["k"])(
                          l,
                          {
                            "loading-submit": e.isSubmitting,
                            type: e.InputTypes.TEXT,
                            rules: "required",
                            name: "firstName",
                            label: "Voornaam",
                          },
                          null,
                          8,
                          ["loading-submit", "type"]
                        ),
                      ]),
                      Object(n["h"])("div", Hb, [
                        Object(n["k"])(
                          l,
                          {
                            "loading-submit": e.isSubmitting,
                            type: e.InputTypes.TEXT,
                            rules: "required",
                            name: "lastName",
                            label: "Achternaam",
                          },
                          null,
                          8,
                          ["loading-submit", "type"]
                        ),
                      ]),
                      Object(n["h"])("div", Rb, [
                        Object(n["k"])(
                          o,
                          {
                            id: "postCodeCity",
                            "loading-submit": e.isSubmitting,
                            object: !0,
                            "track-by": "label",
                            "value-prop": "label",
                            repository: e.BelgianCitySearchRepository,
                            "resolve-on-load": !0,
                            options: [],
                            searchable: !0,
                            label: "Gemeente",
                            rules: "required",
                            placeholder: "Zoek op naam/postcode",
                          },
                          null,
                          8,
                          ["loading-submit", "repository"]
                        ),
                      ]),
                      Object(n["h"])("div", Bb, [
                        Object(n["k"])(
                          l,
                          {
                            "loading-submit": e.isSubmitting,
                            type: e.InputTypes.TEXT,
                            rules: "required",
                            name: "street",
                            label: "Straat",
                          },
                          null,
                          8,
                          ["loading-submit", "type"]
                        ),
                      ]),
                      Object(n["h"])("div", qb, [
                        Object(n["k"])(
                          l,
                          {
                            "loading-submit": e.isSubmitting,
                            type: e.InputTypes.TEXT,
                            maxlength: "5",
                            rules: "required",
                            name: "number",
                            label: "Nr",
                          },
                          null,
                          8,
                          ["loading-submit", "type"]
                        ),
                      ]),
                      Object(n["h"])("div", Vb, [
                        Object(n["k"])(
                          l,
                          {
                            "loading-submit": e.isSubmitting,
                            type: e.InputTypes.TEXT,
                            maxlength: "5",
                            name: "letterBox",
                            label: "Bus",
                          },
                          null,
                          8,
                          ["loading-submit", "type"]
                        ),
                      ]),
                      Object(n["h"])("div", Lb, [
                        Object(n["k"])(
                          l,
                          {
                            "loading-submit": e.isSubmitting,
                            type: e.InputTypes.DATE,
                            name: "birthDate",
                            label: "Geboortedatum",
                            rules: "required",
                          },
                          null,
                          8,
                          ["loading-submit", "type"]
                        ),
                      ]),
                      Object(n["h"])("div", Gb, [
                        Object(n["k"])(
                          l,
                          {
                            "loading-submit": e.isSubmitting,
                            type: e.InputTypes.TEXT_AREA,
                            name: "comment",
                            label: "Opmerking",
                          },
                          {
                            default: Object(n["W"])(() => [
                              e.isExtraInformationComment
                                ? (Object(n["y"])(),
                                  Object(n["g"])(
                                    "p",
                                    Pb,
                                    " Indien je niet-leden wil verzekeren die in het buitenland wonen moet je in dit tekstvak de buitenlands gemeente, postcode en land opgeven. En bij adres, het belgisch adres van de persoon die de verzekering aanvraagt. "
                                  ))
                                : Object(n["f"])("", !0),
                            ]),
                            _: 1,
                          },
                          8,
                          ["loading-submit", "type"]
                        ),
                      ]),
                    ]),
                    Object(n["h"])("div", Kb, [
                      Object(n["k"])(
                        d,
                        {
                          "loading-submit": e.isSubmitting,
                          text:
                            "edit" === e.sideBarState.state
                              ? "Bewerk"
                              : "Voeg toe",
                        },
                        null,
                        8,
                        ["loading-submit", "text"]
                      ),
                    ]),
                  ],
                  34
                ),
                Object(n["h"])(
                  "form",
                  {
                    class: Object(n["s"])([
                      {
                        "d-flex": "list" === e.sideBarState.state,
                        "d-none":
                          "new" === e.sideBarState.state ||
                          "edit" === e.sideBarState.state,
                      },
                      "flex-col h-full px-4 pt-3",
                    ]),
                    onSubmit:
                      t[3] ||
                      (t[3] = Object(n["Z"])(
                        (...t) => e.onSubmit && e.onSubmit(...t),
                        ["prevent"]
                      )),
                  },
                  [
                    Object(n["h"])("div", null, [
                      e.generalInsuranceState.group
                        ? (Object(n["y"])(),
                          Object(n["e"])(
                            u,
                            {
                              key: 0,
                              group: e.generalInsuranceState.group.id,
                              loading: e.loading,
                              "onUpdate:loading":
                                t[1] || (t[1] = (t) => (e.loading = t)),
                              name: "nonMember",
                              placeholder: "Zoek op naam",
                              repository: e.NonMemberRepository,
                              onFetchedOptions:
                                t[2] || (t[2] = (t) => e.fetchedOptions(t)),
                            },
                            null,
                            8,
                            ["group", "loading", "repository"]
                          ))
                        : Object(n["f"])("", !0),
                    ]),
                    Object(n["h"])("div", Yb, [
                      e.selectedNonMembers.length > 0
                        ? (Object(n["y"])(), Object(n["g"])("hr", Ub))
                        : Object(n["f"])("", !0),
                      (Object(n["y"])(!0),
                      Object(n["g"])(
                        n["a"],
                        null,
                        Object(n["F"])(
                          e.selectedNonMembers,
                          (t) => (
                            Object(n["y"])(),
                            Object(n["g"])(
                              "div",
                              { key: t.id, class: "w-100" },
                              [
                                Object(n["k"])(
                                  b,
                                  { "non-member": t },
                                  {
                                    default: Object(n["W"])(() => [
                                      Object(n["h"])("div", null, [
                                        Object(n["h"])("div", Fb, [
                                          Object(n["k"])(
                                            d,
                                            {
                                              type: "button",
                                              text: e.existingList.includes(t)
                                                ? "Toegevoegd"
                                                : "Voeg toe",
                                              onClick: (i) => e.addNonMember(t),
                                            },
                                            null,
                                            8,
                                            ["text", "onClick"]
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["non-member"]
                                ),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ],
                  34
                ),
              ]),
              _: 1,
            },
            8,
            [
              "isOverflowHidden",
              "selection",
              "is-display",
              "is-edit",
              "title",
              "options",
              "onOptions",
              "onHideSidebar",
            ]
          ),
        ])
      );
    }
    class Xb extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/non_member/"),
          (this.endpoint = "/non_member/"),
          (this.deserializer = ue),
          (this.serializer = be);
      }
      search(e, t) {
        return this.get(this.endpoint + "?term=" + e + "&group=" + t, {}).then(
          (e) => {
            const t = [];
            return (
              e.results.forEach((e) => {
                (e = ue(e)),
                  (e.inuitsId = e.id),
                  t.push({ value: e, name: e.firstName + " " + e.lastName });
              }),
              t
            );
          }
        );
      }
    }
    const Zb = {
        role: "alert",
        "aria-label": "Statusbericht",
        class:
          "alert alert-dismissible alert-status-msg fadeIn show container alert-success",
      },
      Jb = Object(n["i"])(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 587.9 587.9"><path d="M471.5 116.4C424.1 69 361 42.8 294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.2-73.6-177.6zM294 544.6C155.5 544.6 43.3 432.4 43.3 294 43.3 155.5 155.5 43.3 294 43.3c138.4 0 250.6 112.2 250.6 250.6 0 138.5-112.2 250.7-250.6 250.7zm177.5-428.2C424.1 69 361 42.8 294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.2-73.6-177.6zM294 544.6C155.5 544.6 43.3 432.4 43.3 294 43.3 155.5 155.5 43.3 294 43.3c138.4 0 250.6 112.2 250.6 250.6 0 138.5-112.2 250.7-250.6 250.7zm177.5-428.2C424.1 69 361 42.8 294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.2-73.6-177.6zM294 544.6C155.5 544.6 43.3 432.4 43.3 294 43.3 155.5 155.5 43.3 294 43.3c138.4 0 250.6 112.2 250.6 250.6 0 138.5-112.2 250.7-250.6 250.7zm177.5-428.2C424.1 69 361 42.8 294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.2-73.6-177.6zM294 544.6C155.5 544.6 43.3 432.4 43.3 294 43.3 155.5 155.5 43.3 294 43.3c138.4 0 250.6 112.2 250.6 250.6 0 138.5-112.2 250.7-250.6 250.7zm270.3-364.9c-14.8-34.9-35.9-66.3-62.9-93.3s-58.3-48.1-93.3-62.9C372 8.3 333.5.5 294 .5c-39.6 0-78 7.8-114.2 23.1-34.9 14.8-66.3 35.9-93.3 62.9-26.9 26.9-48.1 58.3-62.9 93.3C8.3 215.9.5 254.4.5 294c0 39.6 7.8 78 23.1 114.2 14.8 35 35.9 66.3 62.9 93.3s58.3 48.1 93.3 62.9c36.2 15.3 74.6 23.1 114.2 23.1 39.6 0 78-7.8 114.2-23.1 35-14.8 66.3-35.9 93.3-62.9s48.1-58.3 62.9-93.3c15.3-36.2 23.1-74.6 23.1-114.2-.1-39.6-7.8-78.1-23.2-114.3zm-.4 228.3c-14.8 34.9-35.9 66.2-62.8 93.1-26.9 26.9-58.2 48-93.1 62.8-36.1 15.3-74.5 23-114 23s-77.9-7.8-114.1-23c-34.9-14.8-66.2-35.9-93.1-62.8-26.9-26.9-48-58.2-62.8-93.1C8.8 371.8 1 333.5 1 294s7.8-77.9 23-114.1c14.8-34.9 35.9-66.2 62.8-93.1 26.9-26.9 58.2-48 93.1-62.8C216.1 8.8 254.4 1 294 1c39.5 0 77.9 7.8 114 23 34.9 14.8 66.2 35.9 93.1 62.8 26.9 26.9 48 58.2 62.8 93.1 15.3 36.2 23 74.5 23 114.1 0 39.5-7.7 77.8-23 114zM294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.1-73.5-177.6S361 42.8 294 42.8zm0 501.8C155.5 544.6 43.3 432.4 43.3 294 43.3 155.5 155.5 43.3 294 43.3c138.4 0 250.6 112.2 250.6 250.6 0 138.5-112.2 250.7-250.6 250.7zm177.5-428.2C424.1 69 361 42.8 294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.2-73.6-177.6zM294 544.6C155.5 544.6 43.3 432.4 43.3 294 43.3 155.5 155.5 43.3 294 43.3c138.4 0 250.6 112.2 250.6 250.6 0 138.5-112.2 250.7-250.6 250.7zm177.5-428.2C424.1 69 361 42.8 294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.2-73.6-177.6zM294 544.6C155.5 544.6 43.3 432.4 43.3 294 43.3 155.5 155.5 43.3 294 43.3c138.4 0 250.6 112.2 250.6 250.6 0 138.5-112.2 250.7-250.6 250.7z"></path><path d="M471.5 116.4C424.1 69 361 42.8 294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.2-73.6-177.6zM294 544.1c-66.8 0-129.6-26-176.9-73.3-47.2-47.2-73.3-110-73.3-176.8 0-66.8 26-129.6 73.3-176.9C164.3 69.9 227.2 43.8 294 43.8c66.8 0 129.6 26 176.9 73.3 47.2 47.2 73.3 110.1 73.3 176.9 0 66.8-26 129.6-73.3 176.8S360.8 544.1 294 544.1zm177.5-427.7C424.1 69 361 42.8 294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.2-73.6-177.6zM294 544.1c-66.8 0-129.6-26-176.9-73.3-47.2-47.2-73.3-110-73.3-176.8 0-66.8 26-129.6 73.3-176.9C164.3 69.9 227.2 43.8 294 43.8c66.8 0 129.6 26 176.9 73.3 47.2 47.2 73.3 110.1 73.3 176.9 0 66.8-26 129.6-73.3 176.8S360.8 544.1 294 544.1zm177.5-427.7C424.1 69 361 42.8 294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.2-73.6-177.6zM294 544.1c-66.8 0-129.6-26-176.9-73.3-47.2-47.2-73.3-110-73.3-176.8 0-66.8 26-129.6 73.3-176.9C164.3 69.9 227.2 43.8 294 43.8c66.8 0 129.6 26 176.9 73.3 47.2 47.2 73.3 110.1 73.3 176.9 0 66.8-26 129.6-73.3 176.8S360.8 544.1 294 544.1zm177.5-427.7C424.1 69 361 42.8 294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.2-73.6-177.6zM294 544.1c-66.8 0-129.6-26-176.9-73.3-47.2-47.2-73.3-110-73.3-176.8 0-66.8 26-129.6 73.3-176.9C164.3 69.9 227.2 43.8 294 43.8c66.8 0 129.6 26 176.9 73.3 47.2 47.2 73.3 110.1 73.3 176.9 0 66.8-26 129.6-73.3 176.8S360.8 544.1 294 544.1zm270.8-364.6c-14.8-35-36-66.4-63-93.4s-58.4-48.2-93.4-63C372.1 7.8 333.6 0 294 0c-39.7 0-78.2 7.8-114.4 23.1-35 14.8-66.4 36-93.4 63s-48.2 58.4-63 93.4C7.8 215.8 0 254.3 0 294s7.8 78.2 23.1 114.4c14.8 35 36 66.4 63 93.4s58.4 48.2 93.4 63c36.3 15.3 74.8 23.1 114.4 23.1 39.7 0 78.2-7.8 114.4-23.1 35-14.8 66.4-36 93.4-63s48.2-58.4 63-93.4c15.3-36.3 23.1-74.8 23.1-114.4.1-39.7-7.7-78.2-23-114.5zM294 586.9c-39.5 0-77.9-7.8-114.1-23-34.9-14.8-66.2-35.9-93.1-62.8-26.9-26.9-48-58.2-62.8-93.1C8.8 371.8 1 333.5 1 294s7.8-77.9 23-114.1c14.8-34.9 35.9-66.2 62.8-93.1 26.9-26.9 58.2-48 93.1-62.8C216.1 8.8 254.4 1 294 1c39.5 0 77.9 7.8 114 23 34.9 14.8 66.2 35.9 93.1 62.8 26.9 26.9 48 58.2 62.8 93.1 15.3 36.2 23 74.5 23 114.1 0 39.5-7.8 77.9-23 114-14.8 34.9-35.9 66.2-62.8 93.1-26.9 26.9-58.2 48-93.1 62.8-36.1 15.3-74.5 23-114 23zm177.5-470.5C424.1 69 361 42.8 294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.2-73.6-177.6zM294 544.1c-66.8 0-129.6-26-176.9-73.3-47.2-47.2-73.3-110-73.3-176.8 0-66.8 26-129.6 73.3-176.9C164.3 69.9 227.2 43.8 294 43.8c66.8 0 129.6 26 176.9 73.3 47.2 47.2 73.3 110.1 73.3 176.9 0 66.8-26 129.6-73.3 176.8S360.8 544.1 294 544.1zm177.5-427.7C424.1 69 361 42.8 294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.2-73.6-177.6zM294 544.1c-66.8 0-129.6-26-176.9-73.3-47.2-47.2-73.3-110-73.3-176.8 0-66.8 26-129.6 73.3-176.9C164.3 69.9 227.2 43.8 294 43.8c66.8 0 129.6 26 176.9 73.3 47.2 47.2 73.3 110.1 73.3 176.9 0 66.8-26 129.6-73.3 176.8S360.8 544.1 294 544.1zm177.5-427.7C424.1 69 361 42.8 294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.2-73.6-177.6zM294 544.1c-66.8 0-129.6-26-176.9-73.3-47.2-47.2-73.3-110-73.3-176.8 0-66.8 26-129.6 73.3-176.9C164.3 69.9 227.2 43.8 294 43.8c66.8 0 129.6 26 176.9 73.3 47.2 47.2 73.3 110.1 73.3 176.9 0 66.8-26 129.6-73.3 176.8S360.8 544.1 294 544.1zm177.5-427.7C424.1 69 361 42.8 294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.2-73.6-177.6zM294 544.1c-66.8 0-129.6-26-176.9-73.3-47.2-47.2-73.3-110-73.3-176.8 0-66.8 26-129.6 73.3-176.9C164.3 69.9 227.2 43.8 294 43.8c66.8 0 129.6 26 176.9 73.3 47.2 47.2 73.3 110.1 73.3 176.9 0 66.8-26 129.6-73.3 176.8S360.8 544.1 294 544.1zm177.5-427.7C424.1 69 361 42.8 294 42.8c-67.1 0-130.1 26.1-177.6 73.5S42.8 226.9 42.8 294s26.1 130.1 73.5 177.6 110.5 73.5 177.6 73.5S424 519 471.5 471.6 545.1 361 545.1 294c0-67.1-26.1-130.2-73.6-177.6zM294 544.1c-66.8 0-129.6-26-176.9-73.3-47.2-47.2-73.3-110-73.3-176.8 0-66.8 26-129.6 73.3-176.9C164.3 69.9 227.2 43.8 294 43.8c66.8 0 129.6 26 176.9 73.3 47.2 47.2 73.3 110.1 73.3 176.9 0 66.8-26 129.6-73.3 176.8S360.8 544.1 294 544.1z"></path><path d="M563.9 179.9c-14.8-34.9-35.9-66.2-62.8-93.1-26.9-26.9-58.2-48-93.1-62.8C371.9 8.8 333.5 1 294 1s-77.9 7.8-114 23c-35 14.8-66.3 35.9-93.2 62.8-26.9 26.9-48 58.2-62.8 93.1C8.8 216.1 1 254.4 1 294c0 39.5 7.8 77.9 23 114 14.8 34.9 35.9 66.2 62.8 93.1 26.9 26.9 58.2 48 93.1 62.8 36.1 15.3 74.5 23 114.1 23 39.5 0 77.9-7.8 114-23 34.9-14.8 66.2-35.9 93.1-62.8 26.9-26.9 48-58.2 62.8-93.1 15.3-36.2 23-74.5 23-114 0-39.6-7.7-77.9-23-114.1zm-92.4 291.6C424.1 519 361 545.1 294 545.1c-67.1 0-130.1-26.1-177.6-73.5S42.8 361 42.8 294c0-67.1 26.1-130.1 73.5-177.6S226.9 42.8 294 42.8s130.1 26.1 177.6 73.5 73.5 110.5 73.5 177.6-26.1 130.2-73.6 177.6z"></path><path d="M324.2 294l78.8-78.8c8.4-8.4 8.4-21.9 0-30.3-8.4-8.4-21.9-8.4-30.3 0L294 263.7 215.3 185c-8.4-8.4-21.9-8.4-30.3 0-8.4 8.4-8.4 21.9 0 30.3l78.7 78.8-78.7 78.7c-8.4 8.4-8.4 21.9 0 30.3 4.2 4.2 9.7 6.3 15.2 6.3s11-2.1 15.1-6.3l78.7-78.7 78.8 78.7c4.2 4.2 9.7 6.3 15.1 6.3 5.5 0 11-2.1 15.1-6.3 8.4-8.4 8.4-21.9 0-30.3L324.2 294zm78.4 108.6c-4 4-9.2 6.1-14.8 6.1-5.6 0-10.8-2.2-14.8-6.1l-79-79.1-79.1 79.1c-4 4-9.2 6.1-14.8 6.1-5.6 0-10.8-2.2-14.8-6.1-4-4-6.1-9.2-6.1-14.8 0-5.6 2.2-10.8 6.1-14.8l79.1-79.1-79.1-79.1c-8.2-8.2-8.2-21.4 0-29.6 3.9-4 9.2-6.1 14.8-6.1 5.6 0 10.8 2.2 14.8 6.1l79.1 79.1 79.1-79.1c4-4 9.2-6.1 14.8-6.1 5.6 0 10.8 2.2 14.8 6.1 4 3.9 6.1 9.2 6.1 14.8 0 5.6-2.2 10.8-6.1 14.8L323.5 294l79.1 79.1c4 4 6.1 9.2 6.1 14.8.1 5.5-2.1 10.8-6.1 14.7z"></path><path d="M403.3 372.3L325 294l78.4-78.4c4.1-4.1 6.4-9.7 6.4-15.5 0-5.9-2.3-11.4-6.4-15.5-4.1-4.1-9.6-6.4-15.5-6.4s-11.4 2.3-15.5 6.4L294 263l-78.4-78.4c-4.1-4.1-9.7-6.4-15.5-6.4-5.9 0-11.4 2.3-15.5 6.4-8.5 8.5-8.5 22.5 0 31L263 294l-78.4 78.4c-4.1 4.1-6.4 9.6-6.4 15.5s2.3 11.4 6.4 15.5c4.1 4.1 9.6 6.4 15.5 6.4 5.8 0 11.4-2.3 15.5-6.4L294 325l78.4 78.4c4.1 4.1 9.6 6.4 15.5 6.4s11.4-2.3 15.5-6.4c4.1-4.1 6.4-9.6 6.4-15.5s-2.3-11.4-6.5-15.6zm-15.5 36.5c-5.6 0-10.8-2.2-14.8-6.1l-79-79.2-79.1 79.1c-4 4-9.2 6.1-14.8 6.1-5.6 0-10.8-2.2-14.8-6.1-4-4-6.1-9.2-6.1-14.8 0-5.6 2.2-10.8 6.1-14.8l79.1-79.1-79.1-79.1c-8.2-8.2-8.2-21.4 0-29.6 3.9-4 9.2-6.1 14.8-6.1 5.6 0 10.8 2.2 14.8 6.1l79.1 79.1 79.1-79.1c4-4 9.2-6.1 14.8-6.1 5.6 0 10.8 2.2 14.8 6.1 4 3.9 6.1 9.2 6.1 14.8 0 5.6-2.2 10.8-6.1 14.8L323.5 294l79.1 79.1c4 4 6.1 9.2 6.1 14.8 0 5.6-2.2 10.8-6.1 14.8-3.9 3.9-9.2 6.1-14.8 6.1z"></path><path d="M402.6 373c4 4 6.1 9.2 6.1 14.8 0 5.6-2.2 10.8-6.1 14.8-4 4-9.2 6.1-14.8 6.1-5.6 0-10.8-2.2-14.8-6.1l-79-79.1-79.1 79.1c-4 4-9.2 6.1-14.8 6.1-5.6 0-10.8-2.2-14.8-6.1-4-4-6.1-9.2-6.1-14.8 0-5.6 2.2-10.8 6.1-14.8l79.1-79.1-79.1-79.1c-8.2-8.2-8.2-21.4 0-29.6 3.9-4 9.2-6.1 14.8-6.1 5.6 0 10.8 2.2 14.8 6.1l79.1 79.1 79.1-79.1c4-4 9.2-6.1 14.8-6.1 5.6 0 10.8 2.2 14.8 6.1 4 3.9 6.1 9.2 6.1 14.8 0 5.6-2.2 10.8-6.1 14.8L323.5 294l79.1 79z"></path></svg>',
        1
      ),
      $b = [Jb],
      Qb = Object(n["h"])(
        "h2",
        { class: "visually-hidden" },
        "Statusbericht",
        -1
      ),
      em = { class: "content pr-4 pl-3" };
    function tm(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])("div", Zb, [
          Object(n["h"])(
            "button",
            {
              type: "button",
              class: "close",
              "data-dismiss": "alert",
              "aria-label": "Close",
              onClick:
                t[0] || (t[0] = (...t) => e.hideToast && e.hideToast(...t)),
            },
            $b
          ),
          Qb,
          Object(n["h"])("div", em, Object(n["K"])(e.label), 1),
        ])
      );
    }
    var im = Object(n["l"])({
      name: "SuccessToast",
      props: {
        label: { type: String, required: !1, default: "Succesvol toegevoegd" },
      },
      emits: ["update:showOrHide"],
      setup(e, { emit: t }) {
        const i = () => {
          t("update:showOrHide", !1);
        };
        return { hideToast: i };
      },
    });
    const nm = j()(im, [["render", tm]]);
    var am = nm,
      sm = Object(n["l"])({
        name: "NonMemberSideBar",
        components: {
          "custom-button": An,
          "base-side-bar": Du["a"],
          "custom-input": bd,
          "multi-select": gd,
          "non-member-item": oc,
          "search-input": Cu,
          "success-toast": am,
        },
        props: {
          title: { type: String, required: !0 },
          existingList: { type: Array, default: () => [] },
          closeOnAdd: { type: Boolean, default: !1, required: !1 },
          sideBarState: { type: Object, required: !0, default: () => {} },
          isExtraInformationComment: {
            type: Boolean,
            required: !1,
            default: !1,
          },
          isOverflowHidden: { type: Boolean, required: !1, default: !0 },
        },
        emits: [
          "update:sideBarState",
          "addCreatedNonMemberToList",
          "updateMemberInList",
        ],
        setup(e, t) {
          const i = Object(Q["b"])(),
            a = Object(n["c"])(() => i.state.insurance.generalInsuranceState),
            s = Object(n["E"])(i.getters.user),
            {
              resetForm: r,
              errors: c,
              handleSubmit: l,
              validate: o,
              meta: d,
              values: u,
              isSubmitting: b,
            } = Object(nt["e"])(),
            { formSendWithSuccess: m } = Y(d),
            p = Object(n["c"])(() =>
              "list" === e.sideBarState.state
                ? "BestaandNonMember"
                : "NieuwNonMember"
            ),
            v = Object(n["E"])([]),
            j = Object(n["E"])(!1),
            { formDiv: O, scrollToTop: h } = K(),
            { sideBarState: g } = Object(n["M"])(e),
            y = Object(n["E"])([
              { text: "Nieuw", value: "Nieuw" },
              { text: "Uit eerdere aanvragen", value: "Bestaand" },
            ]),
            f = async () => {
              await o().then((e) => P(e, "addNewNonMember")),
                l(async (t) => {
                  if (
                    "new" === e.sideBarState.state ||
                    "edit" === e.sideBarState.state
                  ) {
                    console.log("VALUES:", t);
                    const i = Object(n["E"])({
                      id: t.id,
                      inuitsId: t.inuitsId,
                      lastName: t.lastName,
                      firstName: t.firstName,
                      phoneNumber: t.phoneNumber ? t.phoneNumber : "/",
                      birthDate: t.birthDate ? t.birthDate : void 0,
                      street: t.street,
                      number: t.number,
                      letterBox: t.letterBox,
                      comment: t.comment,
                      postCodeCity: t.postCodeCity,
                      group: a.value.group.id,
                    });
                    "edit" === e.sideBarState.state
                      ? await S(i.value)
                      : await E(i.value);
                  }
                })();
            },
            k = (i) => {
              e.existingList.includes(i) ||
                t.emit("addCreatedNonMemberToList", i),
                e.closeOnAdd && T();
            },
            S = async (e) => {
              (m.value = !1),
                console.log("data to edit: ", e),
                e.inuitsId &&
                  (await Yt.get(Xb)
                    .update(e.inuitsId, e)
                    .then((i) => {
                      (i.inuitsId = e.inuitsId),
                        t.emit("updateMemberInList", i),
                        T();
                    }));
            },
            E = async (i) => {
              (m.value = !1),
                await Yt.get(Xb)
                  .create(i)
                  .then((i) => {
                    (i.inuitsId = i.id),
                      t.emit("addCreatedNonMemberToList", i),
                      (m.value = !0),
                      h(),
                      r(),
                      e.closeOnAdd && T();
                  });
            },
            _ = (e) => {
              (v.value = []),
                e.forEach((e) => {
                  v.value.push(e.value);
                }),
                (j.value = !1);
            },
            T = () => {
              t.emit("update:sideBarState", { state: "hide" });
            },
            x = (e) => {
              "NieuwNonMember" === e &&
                t.emit("update:sideBarState", { state: "new" }),
                "BestaandNonMember" === e &&
                  t.emit("update:sideBarState", { state: "list" });
            };
          return (
            Object(n["U"])(g, (e) => {
              "edit" === e.state &&
                ((m.value = !1),
                r({
                  values: {
                    id: e.entity.id,
                    inuitsId: e.entity.inuitsId,
                    lastName: e.entity.lastName,
                    firstName: e.entity.firstName,
                    phoneNumber: e.entity.phoneNumber,
                    birthDate: e.entity.birthDate,
                    street: e.entity.street,
                    number: e.entity.number,
                    letterBox: e.entity.letterBox,
                    comment: e.entity.comment,
                    postCodeCity: e.entity.postCodeCity,
                  },
                })),
                "new" === e.state &&
                  ((m.value = !1),
                  r({
                    values: {
                      id: "",
                      inuitsId: "",
                      lastName: "",
                      firstName: "",
                      phoneNumber: "",
                      birthDate: "",
                      street: "",
                      number: "",
                      letterBox: "",
                      comment: "",
                      postCodeCity: {},
                    },
                    errors: {},
                  }));
            }),
            {
              BelgianCitySearchRepository: Xd,
              generalInsuranceState: a,
              NonMemberRepository: Xb,
              formSendWithSuccess: m,
              selectedNonMembers: v,
              fetchedOptions: _,
              editNonMember: S,
              changeSideBar: x,
              addNonMember: k,
              closeSideBar: T,
              isSubmitting: b,
              InputTypes: Kt,
              selected: p,
              onSubmit: f,
              loading: j,
              formDiv: O,
              options: y,
              errors: c,
              values: u,
              user: s,
            }
          );
        },
      });
    i("dee7");
    const rm = j()(sm, [
      ["render", Wb],
      ["__scopeId", "data-v-d248ed52"],
    ]);
    var cm = rm,
      lm = Object(n["l"])({
        name: "SelectNonMembers",
        components: {
          "non-member-side-bar": cm,
          "non-member-list": bc,
          ErrorMessage: nt["a"],
        },
        props: {
          id: { type: String, required: !0 },
          rules: {
            type: [Object, String, Function],
            default: "",
            required: !1,
          },
          isExtraInformationComment: {
            type: Boolean,
            required: !1,
            default: !1,
          },
        },
        setup(e) {
          const { value: t } = Object(nt["d"])(e.id, e.rules, {}),
            i = Object(n["E"])({ state: "hide" }),
            a = Object(n["E"])(),
            s = () => {
              i.value = { state: "new" };
            },
            r = (e) => {
              e && t.value.push(e);
            },
            c = (e) => {
              t.value.splice(Number(e), 1);
            },
            l = (e) => {
              i.value = { state: "edit", entity: e };
            },
            o = (e) => {
              a.value = e;
            },
            d = (e) => {
              const i = [];
              t.value.forEach((t, n) => {
                n === a.value ? i.push(e) : i.push(t);
              }),
                (t.value = i);
            };
          return {
            addCreatedNonMemberToList: r,
            deleteNonMemberFromList: c,
            updateMemberInList: d,
            selectedElement: o,
            editNonMember: l,
            openSideBar: s,
            nonMembers: t,
            sideBarState: i,
          };
        },
      });
    const om = j()(lm, [["render", Mb]]);
    var dm = om,
      um = Object(n["l"])({
        name: "NonMember",
        components: {
          "select-non-member": dm,
          "custom-headline-2": qi,
          "custom-button": An,
          "multi-select": gd,
          "custom-input": bd,
          "back-button": eu,
          required: od,
          Loader: Nn,
        },
        setup() {
          const e = Object(hi["c"])(),
            t = !!e.params.id,
            i = Object(Q["b"])(),
            a = Object(n["E"])(ce({ id: "3232", name: "België" })),
            s = i.getters.getCurrentInsuranceState,
            r = Object(n["c"])(() => i.state.insurance.generalInsuranceState),
            c = (e) => (
              e.forEach((e) => {
                e.group = r.value.group.id;
              }),
              e
            ),
            {
              handleSubmit: l,
              values: o,
              isSubmitting: d,
              validate: u,
            } = Object(nt["e"])({
              initialValues: {
                nature: s.nature ? s.nature : "",
                country: s.country ? s.country : a.value,
                postCodeCity: s.postCodeCity
                  ? void 0 === s.postCodeCity.city
                    ? void 0
                    : s.postCodeCity
                  : void 0,
                nonMembers: s.nonMembers ? s.nonMembers : [],
                comment: s.comment ? s.comment : "",
                vvksComment: s.vvksComment ? s.vvksComment : "",
              },
            });
          Object(n["U"])(
            () => d.value,
            () => {
              i.dispatch("setIsSubmittingState", d.value);
            }
          );
          const b = Object(n["E"])([]);
          void 0 !== s.country &&
            Yt.get(Ut)
              .getArray("/countries_by_type/3/?page_size=1000")
              .then((e) => {
                var i;
                ((b.value = e.results), t) &&
                  (b.value.forEach((e) => {
                    e.id.toString() === o.country && (i = e);
                  }),
                  (o.country = i));
              });
          const m = async () => {
              await u().then((e) => P(e, "NonMember")),
                l(async (e) => {
                  const t = Object(n["E"])({
                    ...r.value,
                    nature: e.nature,
                    postCodeCity: e.postCodeCity ? e.postCodeCity : void 0,
                    country: e.country ? e.country : void 0,
                    nonMembers: e.nonMembers ? c(e.nonMembers) : [],
                    comment: e.comment ? e.comment : "",
                    vvksComment: e.vvksComment ? e.vvksComment : "",
                  });
                  await Yt.get(Qe[i.getters.insuranceTypeState])
                    .getCalculatedCost(t.value)
                    .then((e) => {
                      (t.value.totalCost = e),
                        i.dispatch("setNonMemberState", t),
                        i.dispatch("setHolderState", B.DETAIL);
                    });
                })();
            },
            p = Object(n["c"])(() => i.state.insurance.insuranceTypeState),
            v = Object(n["E"])(!1),
            j = () => {
              const e = Object(n["E"])({
                ...r.value,
                nature: o.nature,
                postCodeCity: o.postCodeCity ? o.postCodeCity : void 0,
                country: o.country ? o.country : void 0,
                nonMembers: o.nonMembers ? o.nonMembers : [],
                comment: o.comment ? o.comment : "",
              });
              v.value ||
                ((v.value = !0),
                Yt.get(Qe[p.value])
                  .createDraft(e.value, p.value)
                  .then(() => {
                    Qf.push("/home/verzekeringen");
                  }));
            };
          function O(e) {
            return /\d/.test(e);
          }
          return {
            BelgianCitySearchRepository: Xd,
            stringContainsNumber: O,
            CountryRepository: Ut,
            isSavingDraft: v,
            HolderStates: B,
            isSubmitting: d,
            saveAsDraft: j,
            InputTypes: Kt,
            onSubmit: m,
            values: o,
            isEdit: t,
            data: s,
          };
        },
      });
    const bm = j()(um, [["render", Db]]);
    var mm = bm;
    const pm = { key: 0, class: "md:ml-20 xs:ml-5 sm:ml-5" },
      vm = { key: 0, class: "xs:w-72 md:w-96" },
      jm = { key: 1, class: "xs:w-72 md:w-96" },
      Om = { class: "flex gap-1" },
      hm = { class: "md:ml-20 xs:ml-5 sm:ml-5 mt-3" },
      gm = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      ym = { class: "flex gap-3 md:ml-20 xs:ml-5 sm:ml-5 mt-5 items-center" };
    function fm(e, t, i, a, s, r) {
      const c = Object(n["H"])("custom-headline-2"),
        l = Object(n["H"])("custom-input"),
        o = Object(n["H"])("multi-select"),
        d = Object(n["H"])("required"),
        u = Object(n["H"])("select-equipment"),
        b = Object(n["H"])("back-button"),
        m = Object(n["H"])("custom-button"),
        p = Object(n["H"])("loader");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          "form",
          {
            id: "MaterialInsurance",
            onSubmit:
              t[1] ||
              (t[1] = Object(n["Z"])(
                (...t) => e.onSubmit && e.onSubmit(...t),
                ["prevent"]
              )),
          },
          [
            Object(n["k"])(c, { text: "Activiteit" }),
            e.values
              ? (Object(n["y"])(),
                Object(n["g"])("div", pm, [
                  Object(n["k"])(
                    l,
                    {
                      type: e.InputTypes.TEXT_AREA,
                      rules: "required",
                      name: "nature",
                      label: "Aard van de activiteit",
                    },
                    null,
                    8,
                    ["type"]
                  ),
                  "object" === typeof e.values.country
                    ? (Object(n["y"])(),
                      Object(n["g"])("div", vm, [
                        Object(n["k"])(
                          o,
                          {
                            id: "country",
                            rules: "required",
                            "insurance-type-id": "6",
                            object: !0,
                            "track-by": "name",
                            "value-prop": "name",
                            repository: e.CountryRepository,
                            "resolve-on-load": !0,
                            options: e.values.country.city
                              ? [e.values.country]
                              : [{ id: "3232", name: "België" }],
                            "extra-option": { id: "3232", name: "België" },
                            searchable: !0,
                            label: "Land",
                            placeholder: "Zoek op naam",
                          },
                          null,
                          8,
                          ["repository", "options"]
                        ),
                      ]))
                    : Object(n["f"])("", !0),
                  "" === e.values.country.name ||
                  "België" === e.values.country.name
                    ? (Object(n["y"])(),
                      Object(n["g"])("div", jm, [
                        Object(n["k"])(
                          o,
                          {
                            id: "postCodeCity",
                            object: !0,
                            "track-by": "label",
                            "value-prop": "label",
                            repository: e.BelgianCitySearchRepository,
                            "resolve-on-load": !0,
                            options: e.values.postCodeCity
                              ? [e.values.postCodeCity]
                              : [],
                            searchable: !0,
                            label: "Gemeente",
                            rules: "required",
                            placeholder: "Zoek op naam/postcode",
                          },
                          null,
                          8,
                          ["repository", "options"]
                        ),
                      ]))
                    : Object(n["f"])("", !0),
                ]))
              : Object(n["f"])("", !0),
            Object(n["h"])("div", Om, [
              Object(n["k"])(c, { class: "mt-2", text: "Materiaal" }),
              Object(n["k"])(d, { rules: "required", class: "mt-3" }),
            ]),
            Object(n["h"])("div", hm, [
              Object(n["k"])(u, { id: "equipment", rules: "required" }),
            ]),
            Object(n["h"])("div", null, [
              Object(n["k"])(c, { text: "Opmerkingen" }),
              Object(n["h"])("div", gm, [
                Object(n["k"])(
                  l,
                  { type: e.InputTypes.TEXT_AREA, name: "comment", label: "" },
                  null,
                  8,
                  ["type"]
                ),
              ]),
            ]),
            Object(n["h"])("div", ym, [
              Object(n["k"])(
                b,
                {
                  stateName: "setHolderState",
                  backToState: e.HolderStates.GENERAL,
                },
                null,
                8,
                ["backToState"]
              ),
              Object(n["k"])(m, { text: "Volgende" }),
              e.isEdit
                ? Object(n["f"])("", !0)
                : (Object(n["y"])(),
                  Object(n["g"])(
                    "a",
                    {
                      key: 0,
                      class: "link-inline cursor-pointer",
                      onClick: t[0] || (t[0] = (t) => e.saveAsDraft()),
                    },
                    "Opslaan"
                  )),
              Object(n["k"])(p, { "is-loading": e.isSavingDraft }, null, 8, [
                "is-loading",
              ]),
            ]),
          ],
          32
        )
      );
    }
    const km = ["name"];
    function Sm(e, t, i, a, s, r) {
      const c = Object(n["H"])("ErrorMessage"),
        l = Object(n["H"])("equipment-list"),
        o = Object(n["H"])("equipment-side-bar");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["h"])(
              "span",
              { name: e.id },
              [
                Object(n["k"])(
                  c,
                  { name: e.id, class: "text-red text-sm block mt-1 w-80" },
                  null,
                  8,
                  ["name"]
                ),
              ],
              8,
              km
            ),
            Object(n["h"])(
              "a",
              {
                class: "cursor-pointer btn-simple-green mb-4",
                onClick: t[0] || (t[0] = (t) => e.openSideBar()),
              },
              " + Voeg materiaal toe "
            ),
            Object(n["k"])(
              l,
              {
                "can-be-deleted": !0,
                "equipment-list": e.equipment,
                onDeleteEquipmentFromList:
                  t[1] || (t[1] = (t) => e.deleteEquipmentFromList(t)),
                onEditEquipment: t[2] || (t[2] = (t) => e.editEquipment(t)),
              },
              null,
              8,
              ["equipment-list"]
            ),
            Object(n["k"])(
              o,
              {
                "side-bar-state": e.sideBarState,
                "onUpdate:side-bar-state":
                  t[3] || (t[3] = (t) => (e.sideBarState = t)),
                "existing-list": e.equipment,
                title:
                  "edit" === e.sideBarState.state
                    ? "Bewerk materiaal"
                    : "Materiaal toevoegen",
                onAddEquipmentToList:
                  t[4] || (t[4] = (t) => e.addEquipmentToList(t)),
                onUpdateEquipmentInList:
                  t[5] || (t[5] = (t) => e.updateEquipmentInList(t)),
              },
              null,
              8,
              ["side-bar-state", "existing-list", "title"]
            ),
          ],
          64
        )
      );
    }
    const Em = (e) => (
        Object(n["B"])("data-v-e90f281c"), (e = e()), Object(n["z"])(), e
      ),
      _m = { class: "mt-4" },
      Tm = Em(() =>
        Object(n["h"])("p", null, "Wil je een fiets verzekeren?", -1)
      ),
      xm = { class: "flex gap-7" },
      wm = Em(() =>
        Object(n["h"])("label", { for: "ja", class: "ml-2" }, "Ja", -1)
      ),
      Im = Em(() =>
        Object(n["h"])("label", { for: "nee", class: "ml-2" }, "Nee", -1)
      ),
      Cm = { key: 0, class: "w-100 mt-4" },
      Dm = { class: "w-100 mt-4" },
      Nm = { class: "w-100 mt-4" },
      Mm = { class: "w-100 mt-3" },
      zm = Em(() => Object(n["h"])("strong", null, "Eigenaar", -1)),
      Am = { key: 0 },
      Hm = { class: "w-full mt-2" },
      Rm = Em(() =>
        Object(n["h"])("label", { for: "equipement-group" }, "Onze groep", -1)
      ),
      Bm = { class: "py-3" },
      qm = { key: 0, class: "border-t-2 border-black" },
      Vm = { class: "text-right" },
      Lm = { class: "z-30" },
      Gm = { class: "mt-3 z-30" },
      Pm = { class: "mt-5 py-4 sticky bottom-0 bg-white" },
      Km = { class: "h-full overflow-y-scroll mt-4 pb-24" },
      Ym = { key: 0, class: "mt-4 border-t-2 w-100 border-black" },
      Um = { class: "mt-2 pb-4 text-right" };
    function Fm(e, t, i, a, s, r) {
      const c = Object(n["H"])("success-toast"),
        l = Object(n["H"])("custom-input"),
        o = Object(n["H"])("required"),
        d = Object(n["H"])("ErrorMessage"),
        u = Object(n["H"])("member-item"),
        b = Object(n["H"])("members-only-side-bar"),
        m = Object(n["H"])("non-member-side-bar"),
        p = Object(n["H"])("custom-button"),
        v = Object(n["H"])("search-input"),
        j = Object(n["H"])("equipment-item"),
        O = Object(n["H"])("base-side-bar");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["k"])(
            O,
            {
              "is-edit": "edit" === e.sideBarState.state,
              selection: e.selected,
              "is-display": "hide" !== e.sideBarState.state,
              name: "Equipment",
              title: e.title,
              options: e.options,
              onOptions: e.changeSideBar,
              onHideSidebar: e.closeSideBar,
            },
            {
              default: Object(n["W"])(() => [
                Object(n["h"])(
                  "form",
                  {
                    id: "addNewEquipment",
                    ref: "formDiv",
                    class: Object(n["s"])([
                      {
                        "d-flex":
                          "new" === e.sideBarState.state ||
                          "edit" === e.sideBarState.state,
                        "d-none": "list" === e.sideBarState.state,
                      },
                      "flex-col relative overflow-y-scroll h-full px-4 pt-3",
                    ]),
                    onSubmit:
                      t[10] ||
                      (t[10] = Object(n["Z"])(
                        (...t) => e.onSubmit && e.onSubmit(...t),
                        ["prevent"]
                      )),
                  },
                  [
                    Object(n["X"])(
                      Object(n["k"])(
                        c,
                        { label: "Materiaal succesvol toegevoegd" },
                        null,
                        512
                      ),
                      [[n["S"], e.formSendWithSuccess]]
                    ),
                    Object(n["h"])("div", null, [
                      Object(n["h"])("div", null, [
                        Object(n["h"])("div", _m, [
                          Tm,
                          Object(n["h"])("div", xm, [
                            Object(n["h"])("div", null, [
                              Object(n["X"])(
                                Object(n["h"])(
                                  "input",
                                  {
                                    id: "ja",
                                    "onUpdate:modelValue":
                                      t[0] || (t[0] = (t) => (e.isBicycle = t)),
                                    class: "cursor-pointer",
                                    type: "radio",
                                    name: "ja",
                                    value: !0,
                                  },
                                  null,
                                  512
                                ),
                                [[n["Q"], e.isBicycle]]
                              ),
                              wm,
                            ]),
                            Object(n["h"])("div", null, [
                              Object(n["X"])(
                                Object(n["h"])(
                                  "input",
                                  {
                                    id: "nee",
                                    "onUpdate:modelValue":
                                      t[1] || (t[1] = (t) => (e.isBicycle = t)),
                                    class: "cursor-pointer",
                                    type: "radio",
                                    name: "nee",
                                    value: !1,
                                  },
                                  null,
                                  512
                                ),
                                [[n["Q"], e.isBicycle]]
                              ),
                              Im,
                            ]),
                          ]),
                        ]),
                        e.isBicycle
                          ? Object(n["f"])("", !0)
                          : (Object(n["y"])(),
                            Object(n["g"])("div", Cm, [
                              Object(n["h"])("div", null, [
                                Object(n["k"])(
                                  l,
                                  {
                                    "extra-info":
                                      "bv: Tent, Geluidsinstallatie",
                                    type: e.InputTypes.TEXT,
                                    name: "nature",
                                    label: "Soort",
                                    rules: "required",
                                  },
                                  null,
                                  8,
                                  ["type"]
                                ),
                              ]),
                            ])),
                        Object(n["h"])("div", Dm, [
                          Object(n["k"])(
                            l,
                            {
                              "extra-info": e.isBicycle
                                ? "Merk, model en type. bv: Gazelle, Paris Plus, stadsfiets"
                                : "Merk, model. bv: Senior, JB Systems ME2 mixer",
                              type: e.InputTypes.TEXT_AREA,
                              rules: "required",
                              name: "description",
                              label: "Beschrijving",
                            },
                            null,
                            8,
                            ["extra-info", "type"]
                          ),
                        ]),
                      ]),
                      Object(n["h"])("div", Nm, [
                        Object(n["k"])(
                          l,
                          {
                            "extra-info": e.setTotalValueInfo(),
                            type: e.InputTypes.TEXT,
                            rules: "required",
                            name: "totalValue",
                            label: "Nieuwwaarde",
                          },
                          null,
                          8,
                          ["extra-info", "type"]
                        ),
                      ]),
                      Object(n["h"])("div", Mm, [
                        zm,
                        e.owner
                          ? (Object(n["y"])(),
                            Object(n["g"])(
                              "strong",
                              Am,
                              Object(n["K"])(e.lidType),
                              1
                            ))
                          : Object(n["f"])("", !0),
                        Object(n["k"])(o, { rules: "required" }),
                        Object(n["X"])(
                          Object(n["h"])(
                            "div",
                            Hm,
                            [
                              Object(n["X"])(
                                Object(n["h"])(
                                  "input",
                                  {
                                    id: "equipement-group",
                                    "onUpdate:modelValue":
                                      t[2] ||
                                      (t[2] = (t) => (e.isGroupEquipement = t)),
                                    class: "mr-2",
                                    type: "checkbox",
                                  },
                                  null,
                                  512
                                ),
                                [[n["O"], e.isGroupEquipement]]
                              ),
                              Rm,
                              Object(n["k"])(d, {
                                name: "equipement-group",
                                class: "text-red text-sm block mt-1 w-80",
                              }),
                            ],
                            512
                          ),
                          [[n["S"], !e.owner]]
                        ),
                        Object(n["h"])("div", Bm, [
                          e.owner
                            ? (Object(n["y"])(), Object(n["g"])("hr", qm))
                            : Object(n["f"])("", !0),
                          Object(n["k"])(
                            u,
                            { member: e.owner },
                            {
                              default: Object(n["W"])(() => [
                                Object(n["X"])(
                                  Object(n["h"])(
                                    "div",
                                    Vm,
                                    [
                                      Object(n["h"])(
                                        "label",
                                        {
                                          class:
                                            "hover:text-lightGreen cursor-pointer",
                                          for: "",
                                          onClick:
                                            t[3] ||
                                            (t[3] = (t) => e.removeOwner()),
                                        },
                                        "Verwijder"
                                      ),
                                    ],
                                    512
                                  ),
                                  [[n["S"], !e.isSubmitting]]
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["member"]
                          ),
                        ]),
                      ]),
                      Object(n["X"])(
                        Object(n["h"])(
                          "div",
                          null,
                          [
                            Object(n["h"])("div", Lm, [
                              Object(n["h"])(
                                "strong",
                                {
                                  class: "cursor-pointer text-lightGreen",
                                  onClick:
                                    t[4] ||
                                    (t[4] = (t) => e.openMemberSideBar()),
                                },
                                " Een lid (persoonlijk materiaal) "
                              ),
                              Object(n["k"])(
                                b,
                                {
                                  isOverflowHidden: "false",
                                  isDisplay: e.isMemberSideBarDisplay,
                                  "onUpdate:isDisplay":
                                    t[5] ||
                                    (t[5] = (t) =>
                                      (e.isMemberSideBarDisplay = t)),
                                  "close-on-add": !0,
                                  "existing-list": e.members,
                                  title: "Lid",
                                  onAddMemberToList:
                                    t[6] || (t[6] = (t) => e.addMember(t)),
                                },
                                null,
                                8,
                                ["isDisplay", "existing-list"]
                              ),
                            ]),
                            Object(n["h"])("div", Gm, [
                              Object(n["h"])(
                                "strong",
                                {
                                  class: "cursor-pointer text-lightGreen",
                                  onClick:
                                    t[7] ||
                                    (t[7] = (t) => e.openNonMemberSideBar()),
                                },
                                " Een niet-lid (gehuurd of geleend materiaal) "
                              ),
                              Object(n["k"])(
                                m,
                                {
                                  isOverflowHidden: "false",
                                  "side-bar-state": e.nonMemberSideBarState,
                                  "onUpdate:side-bar-state":
                                    t[8] ||
                                    (t[8] = (t) =>
                                      (e.nonMemberSideBarState = t)),
                                  "close-on-add": !0,
                                  "existing-list": e.nonMembers,
                                  title: "Niet lid",
                                  onAddCreatedNonMemberToList:
                                    t[9] ||
                                    (t[9] = (t) => e.addCreatedNonMember(t)),
                                },
                                null,
                                8,
                                ["side-bar-state", "existing-list"]
                              ),
                            ]),
                          ],
                          512
                        ),
                        [[n["S"], !1 === e.isGroupEquipement && !e.owner]]
                      ),
                      Object(n["h"])("div", Pm, [
                        Object(n["k"])(
                          p,
                          {
                            text:
                              "edit" === e.sideBarState.state
                                ? "Bewerk"
                                : "Voeg toe",
                          },
                          null,
                          8,
                          ["text"]
                        ),
                      ]),
                    ]),
                  ],
                  34
                ),
                Object(n["h"])(
                  "form",
                  {
                    class: Object(n["s"])([
                      {
                        "d-flex": "list" === e.sideBarState.state,
                        "d-none":
                          "new" === e.sideBarState.state ||
                          "edit" === e.sideBarState.state,
                      },
                      "flex-col h-full px-4 pt-3",
                    ]),
                    onSubmit:
                      t[13] ||
                      (t[13] = Object(n["Z"])(
                        (...t) => e.onSubmit && e.onSubmit(...t),
                        ["prevent"]
                      )),
                  },
                  [
                    Object(n["h"])("div", null, [
                      Object(n["k"])(
                        v,
                        {
                          loading: e.loading,
                          "onUpdate:loading":
                            t[11] || (t[11] = (t) => (e.loading = t)),
                          name: "equipment",
                          placeholder: "Zoek op beschrijving",
                          repository: e.EquipmentRepository,
                          onFetchedOptions:
                            t[12] || (t[12] = (t) => e.fetchedOptions(t)),
                        },
                        null,
                        8,
                        ["loading", "repository"]
                      ),
                    ]),
                    Object(n["h"])("div", Km, [
                      e.searchedEquipmentList.length > 0
                        ? (Object(n["y"])(), Object(n["g"])("hr", Ym))
                        : Object(n["f"])("", !0),
                      (Object(n["y"])(!0),
                      Object(n["g"])(
                        n["a"],
                        null,
                        Object(n["F"])(
                          e.searchedEquipmentList,
                          (t) => (
                            Object(n["y"])(),
                            Object(n["g"])(
                              "div",
                              { key: t.id, class: "w-100" },
                              [
                                Object(n["k"])(
                                  j,
                                  { equipment: t },
                                  {
                                    default: Object(n["W"])(() => [
                                      Object(n["h"])("div", null, [
                                        Object(n["h"])("div", Um, [
                                          Object(n["k"])(
                                            p,
                                            {
                                              type: "button",
                                              text: e.existingList.includes(t)
                                                ? "Toegevoegd"
                                                : "Voeg toe",
                                              onClick: (i) => e.addEquipment(t),
                                            },
                                            null,
                                            8,
                                            ["text", "onClick"]
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["equipment"]
                                ),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                  ],
                  34
                ),
              ]),
              _: 1,
            },
            8,
            [
              "is-edit",
              "selection",
              "is-display",
              "title",
              "options",
              "onOptions",
              "onHideSidebar",
            ]
          ),
        ])
      );
    }
    const Wm = { class: "d-flex flex-col h-full px-4 pt-4" },
      Xm = { class: "h-full overflow-y-scroll mt-4 pb-24" },
      Zm = { key: 0, class: "mt-4 border-t-2 w-100 border-black" },
      Jm = { class: "pt-3 pb-4 text-right" };
    function $m(e, t, i, a, s, r) {
      const c = Object(n["H"])("search-input"),
        l = Object(n["H"])("custom-button"),
        o = Object(n["H"])("member-item"),
        d = Object(n["H"])("base-side-bar");
      return (
        Object(n["y"])(),
        Object(n["e"])(
          d,
          {
            isOverflowHidden: e.isOverflowHidden,
            isDisplay: e.display,
            "onUpdate:isDisplay": t[2] || (t[2] = (t) => (e.display = t)),
            name: "Member",
            title: e.title,
          },
          {
            default: Object(n["W"])(() => [
              Object(n["h"])("div", Wm, [
                Object(n["h"])("div", null, [
                  e.generalInsuranceState.group
                    ? (Object(n["y"])(),
                      Object(n["e"])(
                        c,
                        {
                          key: 0,
                          group: e.generalInsuranceState.group.id,
                          loading: e.loading,
                          "onUpdate:loading":
                            t[0] || (t[0] = (t) => (e.loading = t)),
                          name: "member",
                          placeholder: "Zoek op naam",
                          repository: e.MemberRepository,
                          onFetchedOptions:
                            t[1] || (t[1] = (t) => e.fetchedOptions(t)),
                        },
                        null,
                        8,
                        ["group", "loading", "repository"]
                      ))
                    : Object(n["f"])("", !0),
                ]),
                Object(n["h"])("div", Xm, [
                  e.selectedMembers.length > 0
                    ? (Object(n["y"])(), Object(n["g"])("hr", Zm))
                    : Object(n["f"])("", !0),
                  (Object(n["y"])(!0),
                  Object(n["g"])(
                    n["a"],
                    null,
                    Object(n["F"])(
                      e.selectedMembers,
                      (t) => (
                        Object(n["y"])(),
                        Object(n["g"])("div", { key: t.id, class: "w-100" }, [
                          Object(n["k"])(
                            o,
                            { member: t },
                            {
                              default: Object(n["W"])(() => [
                                Object(n["h"])("div", null, [
                                  Object(n["h"])("div", Jm, [
                                    Object(n["k"])(
                                      l,
                                      {
                                        type: "button",
                                        text: e.existingList.some(
                                          (e) =>
                                            e.firstName === t.firstName &&
                                            e.lastName === t.lastName &&
                                            e.street === t.street &&
                                            e.number === t.number
                                        )
                                          ? "Toegevoegd"
                                          : "Voeg toe",
                                        disabled: !(
                                          !e.existingList ||
                                          !e.existingList.some(
                                            (e) =>
                                              e.firstName === t.firstName &&
                                              e.lastName === t.lastName &&
                                              e.street === t.street &&
                                              e.number === t.number
                                          )
                                        ),
                                        onClick: (i) => e.addMember(t),
                                      },
                                      null,
                                      8,
                                      ["text", "disabled", "onClick"]
                                    ),
                                  ]),
                                ]),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["member"]
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]),
            _: 1,
          },
          8,
          ["isOverflowHidden", "isDisplay", "title"]
        )
      );
    }
    var Qm = Object(n["l"])({
      name: "MembersOnlySideBar",
      components: {
        "custom-button": An,
        "base-side-bar": Du["a"],
        "search-input": Cu,
        "member-item": vs,
      },
      props: {
        title: { type: String, required: !0 },
        isDisplay: { type: Boolean, required: !0 },
        existingList: { type: Array, default: () => [] },
        closeOnAdd: { type: Boolean, default: !1, required: !1 },
        isOverflowHidden: { type: Boolean, required: !1, default: !0 },
      },
      setup(e, t) {
        const i = Object(Q["b"])(),
          a = Object(n["E"])(i.getters.user),
          s = Object(n["E"])(e.isDisplay),
          r = Object(n["E"])([]),
          c = Object(n["E"])(!1),
          l = Object(n["c"])(() => i.state.insurance.generalInsuranceState),
          o = (i) => {
            e.existingList.includes(i) || t.emit("addMemberToList", i),
              e.closeOnAdd && (s.value = !1);
          },
          d = (e) => {
            (r.value = []),
              e.forEach((e) => {
                e.groupAdminId &&
                  Yt.get(fu)
                    .getById(e.groupAdminId)
                    .then((t) => {
                      (t.birthDate = e.birthDate),
                        (t.gender = e.gender),
                        (t.isMember = !0),
                        r.value.push(t);
                    });
              }),
              (c.value = !1);
          };
        return (
          Object(n["U"])(
            () => e.isDisplay,
            () => {
              s.value = e.isDisplay;
            }
          ),
          Object(n["U"])(
            () => s.value,
            () => {
              t.emit("update:isDisplay", s.value);
            }
          ),
          {
            BelgianCitySearchRepository: Xd,
            MemberRepository: fu,
            selectedMembers: r,
            fetchedOptions: d,
            InputTypes: Kt,
            addMember: o,
            display: s,
            loading: c,
            user: a,
            generalInsuranceState: l,
          }
        );
      },
    });
    i("006d");
    const ep = j()(Qm, [
      ["render", $m],
      ["__scopeId", "data-v-36a7eccb"],
    ]);
    var tp = ep;
    class ip extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/equipment_search/"),
          (this.endpoint = "/equipment/"),
          (this.deserializer = me),
          (this.serializer = pe);
      }
      search(e) {
        return this.get(this.endpoint + "?page_size=1000&term=" + e, {}).then(
          (e) => {
            const t = [];
            return (
              e.results.forEach((e) => {
                (e = me(e)), t.push(e);
              }),
              t
            );
          }
        );
      }
    }
    var np = Object(n["l"])({
      name: "EquipmentSideBar",
      components: {
        "non-member-side-bar": cm,
        "members-only-side-bar": tp,
        "equipment-item": Ma,
        "success-toast": Du["c"],
        "custom-button": An,
        "base-side-bar": Du["a"],
        "search-input": Cu,
        "custom-input": bd,
        "member-item": vs,
        ErrorMessage: nt["a"],
        Required: od,
      },
      props: {
        title: { type: String, required: !0 },
        existingList: { type: Array, default: () => [] },
        sideBarState: { type: Object, required: !0, default: () => {} },
      },
      emits: [
        "update:sideBarState",
        "addEquipmentToList",
        "updateEquipmentInList",
      ],
      setup(e, t) {
        const i = Object(Q["b"])(),
          a = Object(n["c"])(() =>
            "list" === e.sideBarState.state
              ? "BestaandEquipment"
              : "NieuwEquipment"
          ),
          s = Object(n["E"])(!1),
          r = Object(n["E"])([]),
          c = Object(n["E"])(!1),
          l = Object(n["E"])(i.getters.user),
          o = Object(n["E"])(),
          d = Object(n["E"])(),
          {
            resetForm: u,
            handleSubmit: b,
            validate: m,
            meta: p,
            values: v,
            isSubmitting: j,
          } = Object(nt["e"])(),
          { formSendWithSuccess: O } = Y(p),
          { formDiv: h, scrollToTop: g } = K(),
          { sideBarState: y } = Object(n["M"])(e),
          f = Object(n["E"])({ state: "hide" }),
          k = Object(n["E"])({ state: "hide" }),
          S = Object(n["E"])(!1),
          { value: E } = Object(nt["d"])(
            "equipement-group",
            "isGroupOwnerOrOwner:@ownerMember,@ownerNonMember",
            { initialValue: !1 }
          ),
          _ = Object(n["E"])([
            { text: "Nieuw", value: "Nieuw" },
            { text: "Uit eerdere aanvragen", value: "Bestaand" },
          ]);
        "edit" === y.value.state &&
          (v.ownerMember || v.ownerNonMember
            ? (o.value = v.ownerMember ? v.ownerMember : v.ownerNonMember)
            : (E.value = !0));
        const T = Object(n["c"])(() => i.state.insurance.generalInsuranceState),
          x = async () => {
            await m().then((e) => P(e, "addNewEquipment")),
              b(async (t) => {
                if (
                  "new" === e.sideBarState.state ||
                  "edit" === e.sideBarState.state
                ) {
                  const i = Object(n["E"])({
                    id: t.id ? t.id : void 0,
                    inuitsId: t.inuitsId ? t.inuitsId : void 0,
                    nature: t.nature ? t.nature : void 0,
                    description: t.description ? t.description : void 0,
                    totalValue: t.totalValue ? t.totalValue : void 0,
                    ownerMember:
                      t.ownerMember && !1 === E.value ? t.ownerMember : void 0,
                    ownerNonMember:
                      t.ownerNonMember && !1 === E.value
                        ? t.ownerNonMember
                        : void 0,
                    group: E.value ? T.value.group.id : null,
                  });
                  "edit" === e.sideBarState.state
                    ? await I(i.value)
                    : (console.log("@@@@@@@@@@@@@ EQUIPMENT: ", i.value),
                      await C(i.value));
                }
              })();
          },
          w = async (e) => {
            e.id &&
              (await Yt.get(ip)
                .getById(e.id)
                .then((e) => {
                  (e.inuitsId = e.id), t.emit("addEquipmentToList", e);
                }));
          },
          I = async (e) => {
            e.inuitsId &&
              (await Yt.get(ip)
                .update(e.inuitsId, e)
                .then((i) => {
                  (i.inuitsId = e.inuitsId), t.emit("updateEquipmentInList", i);
                }));
          },
          C = async (e) => {
            (O.value = !1),
              await Yt.get(ip)
                .create(e)
                .then((e) => {
                  (e.inuitsId = e.id),
                    t.emit("addEquipmentToList", e),
                    u(),
                    (o.value = void 0),
                    g(),
                    (O.value = !0);
                });
          },
          D = (e) => {
            (r.value = e), (s.value = !1);
          },
          N = () => {
            let e =
              "Maximum te verzekeren bedrag per tent 2500 EUR. Vrijstelling 250 EUR";
            return (
              v.ownerMember &&
                (e = "Maximum te verzekeren bedrag per persoon 2000 EUR"),
              v.ownerNonMember &&
                (e =
                  "Maximum te verzekeren bedrag per tent 2500 EUR. Vrijstelling 250 EUR"),
              c.value && (e = "Maximum te verzekeren bedrag per fiets 500 EUR"),
              e
            );
          },
          M = () => {
            S.value = !0;
          },
          z = () => {
            f.value = { state: "new" };
          },
          A = (e) => {
            e.isMember
              ? ((v.ownerNonMember = void 0),
                (v.ownerMember = e),
                (o.value = e),
                (d.value = " (Lid)"))
              : ((v.ownerMember = void 0),
                (v.ownerNonMember = e),
                (o.value = e),
                (d.value = " (Niet lid met tijdelijk lid-nummer)"));
          },
          H = (e) => {
            e.id &&
              ((v.ownerMember = void 0),
              (v.ownerNonMember = e),
              (o.value = e),
              (d.value = " (Niet lid)"));
          },
          R = () => {
            (o.value = void 0),
              (v.ownerMember = void 0),
              (v.ownerNonMember = void 0);
          },
          B = () => {
            t.emit("update:sideBarState", { state: "hide" });
          },
          q = (e) => {
            "NieuwEquipment" === e &&
              t.emit("update:sideBarState", { state: "new" }),
              "BestaandEquipment" === e &&
                t.emit("update:sideBarState", { state: "list" });
          };
        return (
          Object(n["U"])(y, (e) => {
            "edit" === e.state &&
              ((O.value = !1),
              u({
                values: {
                  id: e.entity.id,
                  inuitsId: e.entity.inuitsId,
                  nature: e.entity.nature,
                  description: e.entity.description,
                  totalValue: e.entity.totalValue,
                  ownerMember: e.entity.ownerMember,
                  ownerNonMember: e.entity.ownerNonMember,
                  owner: e.entity.ownerMember
                    ? e.entity.ownerMember
                    : e.entity.ownerNonMember
                    ? e.entity.ownerNonMember
                    : void 0,
                  group: e.entity.group,
                },
              }),
              (o.value = v.owner),
              e.entity.ownerMember && (d.value = " (Lid)"),
              e.entity.ownerNonMember && (d.value = " (Niet lid)"),
              void 0 === e.entity.ownerMember &&
                void 0 === e.entity.ownerNonMember &&
                (E.value = !0)),
              "new" === e.state &&
                ((O.value = !1),
                u({
                  values: {
                    id: "",
                    inuitsId: "",
                    nature: "",
                    description: "",
                    totalValue: "",
                    ownerMember: void 0,
                    ownerNonMember: void 0,
                    group: "",
                  },
                  errors: {},
                }));
          }),
          Object(n["U"])(
            () => j.value,
            () => {
              i.dispatch("setIsSubmittingState", j.value);
            }
          ),
          {
            isMemberSideBarDisplay: S,
            searchedEquipmentList: r,
            nonMemberSideBarState: f,
            openNonMemberSideBar: z,
            EquipmentRepository: ip,
            addCreatedNonMember: H,
            formSendWithSuccess: O,
            memberSideBarState: k,
            setTotalValueInfo: N,
            openMemberSideBar: M,
            isGroupEquipement: E,
            fetchedOptions: D,
            postEquipment: C,
            changeSideBar: q,
            addEquipment: w,
            closeSideBar: B,
            removeOwner: R,
            InputTypes: Kt,
            isBicycle: c,
            addMember: A,
            selected: a,
            onSubmit: x,
            userData: l,
            loading: s,
            lidType: d,
            formDiv: h,
            options: _,
            values: v,
            owner: o,
          }
        );
      },
    });
    i("c038");
    const ap = j()(np, [
      ["render", Fm],
      ["__scopeId", "data-v-e90f281c"],
    ]);
    var sp = ap,
      rp = Object(n["l"])({
        name: "SelectMaterial",
        components: {
          "equipment-side-bar": sp,
          "equipment-list": Ha,
          ErrorMessage: nt["a"],
        },
        props: {
          id: { type: String, required: !0 },
          rules: {
            type: [Object, String, Function],
            default: "",
            required: !1,
          },
        },
        setup(e) {
          const { value: t } = Object(nt["d"])(e.id, e.rules, {}),
            i = Object(n["E"])({ state: "hide" }),
            a = Object(n["E"])(!1),
            s = () => {
              i.value = { state: "new" };
            },
            r = (e) => {
              0 === t.value.filter((t) => t.id == e.id).length &&
                t.value.push(e);
            },
            c = (e) => {
              t.value.splice(Number(e), 1);
            },
            l = Object(n["E"])(),
            o = Object(n["E"])(!1),
            d = (e) => {
              i.value = { state: "edit", entity: e };
            },
            u = (e) => {
              const n = [];
              t.value.forEach((t) => {
                t.inuitsId === e.inuitsId ? n.push(e) : n.push(t);
              }),
                (t.value = n),
                (i.value = { state: "hide" });
            };
          return {
            deleteEquipmentFromList: c,
            updateEquipmentInList: u,
            addEquipmentToList: r,
            equipmentToEdit: l,
            editEquipment: d,
            openSideBar: s,
            equipment: t,
            isDisplay: a,
            isEdit: o,
            sideBarState: i,
          };
        },
      });
    const cp = j()(rp, [["render", Sm]]);
    var lp = cp,
      op = Object(n["l"])({
        name: "MaterialInsurance",
        components: {
          "custom-headline-2": qi,
          "select-equipment": lp,
          "custom-button": An,
          "multi-select": gd,
          "custom-input": bd,
          "back-button": eu,
          required: od,
          Loader: Nn,
        },
        setup() {
          const e = Object(hi["c"])(),
            t = Object(Q["b"])(),
            i = Object(n["E"])(ce({ id: "3232", name: "België" })),
            a = t.getters.getCurrentInsuranceState,
            {
              handleSubmit: s,
              values: r,
              isSubmitting: c,
              validate: l,
            } = Object(nt["e"])({
              initialValues: {
                nature: a.nature ? a.nature : "",
                country: a.country ? a.country : i.value,
                postCodeCity: a.postCodeCity
                  ? void 0 === a.postCodeCity.city
                    ? {}
                    : a.postCodeCity
                  : void 0,
                equipment: a.equipment ? a.equipment : [],
                vvksComment: a.vvksComment ? a.vvksComment : "",
                comment: a.comment ? a.comment : void 0,
              },
            }),
            o = !!e.params.id,
            d = Object(n["c"])(() => t.state.insurance.generalInsuranceState),
            u = Object(n["E"])([]);
          void 0 !== a.country &&
            Yt.get(Ut)
              .getArray("/countries_by_type/3/?page_size=1000")
              .then((e) => {
                var t;
                ((u.value = e.results), o) &&
                  (u.value.forEach((e) => {
                    e.id.toString() === r.country && (t = e);
                  }),
                  (r.country = t));
              });
          const b = async () => {
              await l().then((e) => P(e, "MaterialInsurance")),
                s(async (e) => {
                  const i = Object(n["E"])({
                    ...d.value,
                    nature: e.nature,
                    postCodeCity: e.postCodeCity ? e.postCodeCity : void 0,
                    country: e.country ? e.country : void 0,
                    comment: e.comment ? e.comment : "",
                    equipment: e.equipment ? e.equipment : void 0,
                    vvksComment: e.vvksComment ? e.vvksComment : "",
                  });
                  await Yt.get(Qe[t.getters.insuranceTypeState])
                    .getCalculatedCost(i.value)
                    .then((e) => {
                      (i.value.totalCost = e),
                        t.dispatch("setMaterialInsuranceState", i.value),
                        t.dispatch("setHolderState", B.DETAIL);
                    });
                })();
            },
            m = Object(n["c"])(() => t.state.insurance.insuranceTypeState),
            p = Object(n["E"])(!1),
            v = () => {
              const e = Object(n["E"])({
                ...d.value,
                nature: r.nature,
                postCodeCity: r.postCodeCity ? r.postCodeCity : void 0,
                country: r.country ? r.country : void 0,
                comment: r.comment ? r.comment : "",
                equipment: r.equipment ? r.equipment : void 0,
              });
              p.value ||
                ((p.value = !0),
                Yt.get(Qe[m.value])
                  .createDraft(e.value, m.value)
                  .then(() => {
                    Qf.push("/home/verzekeringen");
                  }));
            };
          return (
            Object(n["U"])(
              () => c.value,
              () => {
                t.dispatch("setIsSubmittingState", c.value);
              }
            ),
            {
              BelgianCitySearchRepository: Xd,
              generalInsuranceState: d,
              CountryRepository: Ut,
              isSavingDraft: p,
              HolderStates: B,
              saveAsDraft: v,
              InputTypes: Kt,
              onSubmit: b,
              values: r,
              isEdit: o,
              data: a,
            }
          );
        },
      });
    const dp = j()(op, [["render", fm]]);
    var up = dp;
    const bp = { key: 0 },
      mp = { class: "mt-3" },
      pp = { class: "flex gap-1" },
      vp = { class: "mt-3" },
      jp = { class: "flex gap-1" },
      Op = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      hp = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      gp = { class: "flex gap-3 md:ml-20 xs:ml-5 sm:ml-5 mt-5 items-center" };
    function yp(e, t, i, a, s, r) {
      const c = Object(n["H"])("custom-headline-2"),
        l = Object(n["H"])("required"),
        o = Object(n["H"])("select-drivers"),
        d = Object(n["H"])("select-vehicle"),
        u = Object(n["H"])("custom-input"),
        b = Object(n["H"])("back-button"),
        m = Object(n["H"])("custom-button"),
        p = Object(n["H"])("loader");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          "form",
          {
            id: "TemporaryVehicle",
            onSubmit:
              t[1] ||
              (t[1] = Object(n["Z"])(
                (...t) => e.onSubmit && e.onSubmit(...t),
                ["prevent"]
              )),
          },
          [
            e.values
              ? (Object(n["y"])(),
                Object(n["g"])("div", bp, [
                  Object(n["h"])("div", mp, [
                    Object(n["h"])("div", pp, [
                      Object(n["k"])(c, { text: "Bestuurders" }),
                      Object(n["k"])(l, { rules: "required", class: "mt-3" }),
                    ]),
                    Object(n["k"])(o, {
                      id: "selectDriverField",
                      rules: "RequiredDrivers:selectDriverField",
                    }),
                  ]),
                  Object(n["h"])("div", vp, [
                    Object(n["h"])("div", jp, [
                      Object(n["k"])(c, { text: "Voertuig" }),
                      Object(n["k"])(l, { rules: "required", class: "mt-3" }),
                    ]),
                    Object(n["h"])("div", Op, [
                      Object(n["k"])(d, {
                        id: "vehicle",
                        rules: "required|RequiredVehicle:vehicle",
                      }),
                    ]),
                  ]),
                  Object(n["h"])("div", null, [
                    Object(n["k"])(c, { text: "Opmerkingen" }),
                    Object(n["h"])("div", hp, [
                      Object(n["k"])(
                        u,
                        {
                          type: e.InputTypes.TEXT_AREA,
                          name: "comment",
                          label: "",
                        },
                        null,
                        8,
                        ["type"]
                      ),
                    ]),
                  ]),
                  Object(n["h"])("div", gp, [
                    Object(n["k"])(
                      b,
                      {
                        stateName: "setHolderState",
                        backToState: e.HolderStates.GENERAL,
                      },
                      null,
                      8,
                      ["backToState"]
                    ),
                    Object(n["k"])(m, { text: "Volgende" }),
                    e.isEdit
                      ? Object(n["f"])("", !0)
                      : (Object(n["y"])(),
                        Object(n["g"])(
                          "a",
                          {
                            key: 0,
                            class: "link-inline cursor-pointer",
                            onClick: t[0] || (t[0] = (t) => e.saveAsDraft()),
                          },
                          "Opslaan"
                        )),
                    Object(n["k"])(
                      p,
                      { "is-loading": e.isSavingDraft },
                      null,
                      8,
                      ["is-loading"]
                    ),
                  ]),
                ]))
              : Object(n["f"])("", !0),
          ],
          32
        )
      );
    }
    const fp = ["name"],
      kp = { class: "mt-5" },
      Sp = { class: "mt-5" },
      Ep = { class: "flex" },
      _p = ["value"],
      Tp = Object(n["h"])(
        "label",
        { class: "cursor-pointer", for: "isOwnerInput" },
        "Eigenaar is geen bestuurder of het is een huurwagen",
        -1
      ),
      xp = { class: "md:ml-5" },
      wp = { key: 0, class: "xs:w-72 md:w-96 mt-3" },
      Ip = { key: 1 },
      Cp = { class: "xs:w-72 md:w-96 mt-3" },
      Dp = { class: "xs:w-72 md:w-96 mt-3" },
      Np = { class: "xs:w-72 md:w-96 mt-3" },
      Mp = { class: "xs:w-72 md:w-96" },
      zp = { class: "xs:w-72 md:w-96 mt-3" },
      Ap = { class: "xs:w-72 md:w-96 mt-3" },
      Hp = { class: "xs:w-72 md:w-96 mt-3" };
    function Rp(e, t, i, a, s, r) {
      const c = Object(n["H"])("ErrorMessage"),
        l = Object(n["H"])("driver-list"),
        o = Object(n["H"])("tip-temp-vehicle"),
        d = Object(n["H"])("custom-input"),
        u = Object(n["H"])("multi-select"),
        b = Object(n["H"])("members-side-bar");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["h"])(
              "span",
              { name: e.id },
              [
                Object(n["k"])(
                  c,
                  { name: e.id, class: "text-red text-sm block w-80" },
                  null,
                  8,
                  ["name"]
                ),
              ],
              8,
              fp
            ),
            Object(n["h"])(
              "a",
              {
                class: "cursor-pointer btn-simple-green mb-4",
                onClick: t[0] || (t[0] = (t) => e.openSideBar()),
              },
              " + Voeg bestuurder toe "
            ),
            Object(n["k"])(
              l,
              {
                owner: e.selectDriverField.isDriverOwner,
                "onUpdate:owner":
                  t[1] ||
                  (t[1] = (t) => (e.selectDriverField.isDriverOwner = t)),
                "can-be-deleted": !0,
                "members-list": e.selectDriverField.drivers,
                onDeleteMemberFromList:
                  t[2] || (t[2] = (t) => e.deleteMemberFromList(t)),
              },
              null,
              8,
              ["owner", "members-list"]
            ),
            Object(n["h"])("div", kp, [Object(n["k"])(o)]),
            Object(n["h"])("div", Sp, [
              Object(n["X"])(
                Object(n["h"])(
                  "div",
                  Ep,
                  [
                    Object(n["X"])(
                      Object(n["h"])(
                        "input",
                        {
                          id: "isOwnerInput",
                          "onUpdate:modelValue":
                            t[3] ||
                            (t[3] = (t) =>
                              (e.selectDriverField.isDriverOwner = t)),
                          class: "mr-2 cursor-pointer mt-1.5",
                          type: "radio",
                          name: "isOwnerInput",
                          value: e.IS_NO_DRIVER,
                        },
                        null,
                        8,
                        _p
                      ),
                      [[n["Q"], e.selectDriverField.isDriverOwner]]
                    ),
                    Tp,
                  ],
                  512
                ),
                [[n["S"], !e.isSubmitting]]
              ),
              Object(n["X"])(
                Object(n["h"])(
                  "div",
                  xp,
                  [
                    e.input.firstName || e.input.lastName
                      ? Object(n["f"])("", !0)
                      : (Object(n["y"])(),
                        Object(n["g"])("div", wp, [
                          Object(n["k"])(
                            d,
                            {
                              type: e.InputTypes.TEXT,
                              name: "input.companyName",
                              label: "Firma naam",
                              rules: "customRequired",
                            },
                            null,
                            8,
                            ["type"]
                          ),
                        ])),
                    e.input.companyName
                      ? Object(n["f"])("", !0)
                      : (Object(n["y"])(),
                        Object(n["g"])("div", Ip, [
                          Object(n["h"])("div", Cp, [
                            Object(n["k"])(
                              d,
                              {
                                type: e.InputTypes.TEXT,
                                name: "input.firstName",
                                label: "Naam",
                                rules: "customRequired",
                              },
                              null,
                              8,
                              ["type"]
                            ),
                          ]),
                          Object(n["h"])("div", Dp, [
                            Object(n["k"])(
                              d,
                              {
                                type: e.InputTypes.TEXT,
                                name: "input.lastName",
                                label: "Achternaam",
                                rules: "customRequired",
                              },
                              null,
                              8,
                              ["type"]
                            ),
                          ]),
                        ])),
                    Object(n["h"])("div", Np, [
                      Object(n["k"])(
                        d,
                        {
                          type: e.InputTypes.TEXT,
                          name: "input.phoneNumber",
                          label: "Gsm",
                          rules: "customRequired",
                        },
                        null,
                        8,
                        ["type"]
                      ),
                    ]),
                    Object(n["h"])("div", Mp, [
                      Object(n["k"])(
                        u,
                        {
                          id: "input.postCodeCity",
                          object: !0,
                          "track-by": "label",
                          "value-prop": "label",
                          repository: e.BelgianCitySearchRepository,
                          "resolve-on-load": !0,
                          options: [],
                          searchable: !0,
                          label: "Gemeente",
                          placeholder: "Zoek op naam/postcode",
                          rules: "customRequired",
                        },
                        null,
                        8,
                        ["repository"]
                      ),
                    ]),
                    Object(n["h"])("div", zp, [
                      Object(n["k"])(
                        d,
                        {
                          type: e.InputTypes.TEXT,
                          name: "input.street",
                          label: "Straat",
                          rules: "customRequired",
                        },
                        null,
                        8,
                        ["type"]
                      ),
                    ]),
                    Object(n["h"])("div", Ap, [
                      Object(n["k"])(
                        d,
                        {
                          type: e.InputTypes.TEXT,
                          name: "input.number",
                          label: "Nr",
                          rules: "customRequired",
                        },
                        null,
                        8,
                        ["type"]
                      ),
                    ]),
                    Object(n["h"])("div", Hp, [
                      Object(n["k"])(
                        d,
                        {
                          type: e.InputTypes.TEXT,
                          name: "input.letterBox",
                          label: "Bus",
                        },
                        null,
                        8,
                        ["type"]
                      ),
                    ]),
                  ],
                  512
                ),
                [[n["S"], e.selectDriverField.isDriverOwner === e.IS_NO_DRIVER]]
              ),
            ]),
            e.generalInsuranceState.group
              ? (Object(n["y"])(),
                Object(n["e"])(
                  b,
                  {
                    key: 0,
                    start: e.generalInsuranceState.startDate,
                    end: e.generalInsuranceState.endDate,
                    isDisplay: e.isDisplay,
                    "onUpdate:isDisplay":
                      t[4] || (t[4] = (t) => (e.isDisplay = t)),
                    group: e.generalInsuranceState.group.id,
                    "existing-list": e.selectDriverField.drivers,
                    title: "Lid",
                    onAddMemberToList:
                      t[5] || (t[5] = (t) => e.addMemberToDriverList(t)),
                  },
                  null,
                  8,
                  ["start", "end", "isDisplay", "group", "existing-list"]
                ))
              : Object(n["f"])("", !0),
          ],
          64
        )
      );
    }
    const Bp = { class: "grid lg:grid-cols-2 bg-gray gap-4 p-4" },
      qp = ["onClick"],
      Vp = Object(n["h"])(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          class:
            "h-5 w-5 hover:text-lightGreen cursor-pointer inline-block mt-n1 mr-n1",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
        },
        [
          Object(n["h"])("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
          }),
        ],
        -1
      ),
      Lp = [Vp],
      Gp = { key: 0 },
      Pp = ["id", "name", "value"],
      Kp = ["for"],
      Yp = { class: "font-semibold text-lg" };
    function Up(e, t, i, a, s, r) {
      const c = Object(n["H"])("member-item");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", Bp, [
          (Object(n["y"])(!0),
          Object(n["g"])(
            n["a"],
            null,
            Object(n["F"])(
              e.membersList,
              (i, a) => (
                Object(n["y"])(),
                Object(n["g"])("div", { key: i.id, class: "w-full" }, [
                  Object(n["k"])(
                    c,
                    { member: i },
                    {
                      deleteSection: Object(n["W"])(() => [
                        Object(n["h"])(
                          "a",
                          {
                            class:
                              "hover:text-lightGreen cursor-pointer link-inline",
                            for: "",
                            onClick: (t) => e.deleteDriverFromList(a),
                          },
                          Lp,
                          8,
                          qp
                        ),
                      ]),
                      default: Object(n["W"])(() => [
                        e.canBeDeleted
                          ? Object(n["X"])(
                              (Object(n["y"])(),
                              Object(n["g"])(
                                "div",
                                Gp,
                                [
                                  Object(n["X"])(
                                    Object(n["h"])(
                                      "input",
                                      {
                                        id: a + "isOwner",
                                        "onUpdate:modelValue":
                                          t[0] ||
                                          (t[0] = (t) => (e.ownerComputed = t)),
                                        class: "mr-2 cursor-pointer",
                                        type: "radio",
                                        name: a + "isOwner",
                                        value:
                                          i.firstName +
                                          i.lastName +
                                          i.birthDate,
                                      },
                                      null,
                                      8,
                                      Pp
                                    ),
                                    [[n["Q"], e.ownerComputed]]
                                  ),
                                  Object(n["h"])(
                                    "label",
                                    {
                                      class: "cursor-pointer",
                                      for: a + "isOwner",
                                    },
                                    "Eigenaar",
                                    8,
                                    Kp
                                  ),
                                ],
                                512
                              )),
                              [[n["S"], !e.isSubmitting]]
                            )
                          : Object(n["f"])("", !0),
                      ]),
                      _: 2,
                    },
                    1032,
                    ["member"]
                  ),
                ])
              )
            ),
            128
          )),
          Object(n["X"])(
            Object(n["h"])("div", Yp, "Geen bestuurder geselecteerd", 512),
            [[n["S"], 0 === e.membersList.length]]
          ),
        ])
      );
    }
    var Fp = Object(n["l"])({
      name: "MembersList",
      components: { "member-item": vs },
      props: {
        membersList: { type: Array, required: !1, default: () => [] },
        canBeDeleted: { type: Boolean, default: !1, required: !1 },
        owner: { type: String },
      },
      emit: ["update:owner", "deleteMemberFromList"],
      setup(e, t) {
        const i = Object(n["c"])({
            get: () => e.owner,
            set: (e) => t.emit("update:owner", e),
          }),
          a = (e) => {
            t.emit("deleteMemberFromList", e);
          },
          s = Object(Q["b"])(),
          r = Object(n["c"])(() => s.state.insurance.isSubmittingState);
        return { deleteDriverFromList: a, isSubmitting: r, ownerComputed: i };
      },
    });
    const Wp = j()(Fp, [["render", Up]]);
    var Xp = Wp;
    const Zp = Object(n["h"])(
      "p",
      null,
      "Als een bestuurder geen lid (of leiding) is van Scouts en Gidsen Vlaanderen, vraag dan eerst een tijdelijke verzekering niet-leden aan en je ontvangt een tijdelijk lidnummer.",
      -1
    );
    function Jp(e, t, i, a, s, r) {
      const c = Object(n["H"])("info-alert");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["k"])(c, null, {
            default: Object(n["W"])(() => [Zp]),
            _: 1,
          }),
        ])
      );
    }
    var $p = Object(n["l"])({
      name: "TipTempVehicle",
      components: { "info-alert": Ml },
      setup() {
        return {};
      },
    });
    const Qp = j()($p, [["render", Jp]]);
    var ev = Qp,
      tv = Object(n["l"])({
        name: "SelectParticipant",
        components: {
          "members-side-bar": zu,
          "driver-list": Xp,
          "custom-input": bd,
          "multi-select": gd,
          "tip-temp-vehicle": ev,
          ErrorMessage: nt["a"],
        },
        props: {
          id: { type: String, required: !0 },
          rules: {
            type: [Object, String, Function],
            default: "",
            required: !1,
          },
        },
        setup(e) {
          const t = Object(Q["b"])(),
            { value: i } = Object(nt["d"])(e.id, e.rules, {}),
            { value: a } = Object(nt["d"])("input", "required", {});
          Object(n["U"])(
            () => i.value.isDriverOwner,
            () => {
              t.dispatch("setIsDriverOwnerState", i.value.isDriverOwner);
            }
          );
          const s = Object(n["E"])(!1),
            r = () => {
              s.value = !0;
            },
            c = (e) => {
              i.value.drivers.push(e);
            },
            l = (e) => {
              i.value.drivers.splice(Number(e), 1);
            },
            o = Object(n["c"])(() => t.state.insurance.isSubmittingState),
            d = Object(n["c"])(() => t.state.insurance.generalInsuranceState);
          return {
            BelgianCitySearchRepository: Xd,
            addMemberToDriverList: c,
            generalInsuranceState: d,
            deleteMemberFromList: l,
            selectDriverField: i,
            IS_NO_DRIVER: k,
            isSubmitting: o,
            openSideBar: r,
            InputTypes: Kt,
            isDisplay: s,
            input: a,
          };
        },
      });
    const iv = j()(tv, [["render", Rp]]);
    var nv = iv,
      av = Object(n["l"])({
        name: "TemporaryVehicle",
        components: {
          "custom-headline-2": qi,
          "select-drivers": nv,
          "select-vehicle": hb,
          "custom-button": An,
          "custom-input": bd,
          "back-button": eu,
          required: od,
          Loader: Nn,
        },
        setup() {
          const e = Object(hi["c"])(),
            t = Object(Q["b"])(),
            i = t.getters.getCurrentInsuranceState,
            a = !!e.params.id,
            s = (e, i) => {
              let n = k;
              return (
                i.forEach((t) => {
                  e.firstName &&
                    e.lastName &&
                    t.firstName &&
                    t.lastName &&
                    e.firstName + e.lastName + e.birthDate ===
                      t.firstName + t.lastName + t.birthDate &&
                    (n = e.firstName + e.lastName + e.birthDate);
                }),
                t.dispatch("setIsDriverOwnerState", n),
                n
              );
            },
            {
              handleSubmit: r,
              values: c,
              isSubmitting: l,
              validate: o,
            } = Object(nt["e"])({
              initialValues: {
                drivers: i.drivers ? i.drivers : [],
                vehicle: i.vehicle ? i.vehicle : void 0,
                owner: i.owner ? i.owner : { firstName: "", lastName: "" },
                input: i.owner ? i.owner : { firstName: "", lastName: "" },
                selectDriverField: {
                  drivers: i.drivers ? i.drivers : [],
                  isDriverOwner: s(
                    i.owner ? i.owner : { firstName: "", lastName: "" },
                    i.drivers ? i.drivers : []
                  ),
                },
                comment: i.comment ? i.comment : "",
                vvksComment: i.vvksComment ? i.vvksComment : "",
              },
            }),
            d = Object(n["c"])(() => t.state.insurance.generalInsuranceState);
          Object(n["U"])(
            () => l.value,
            () => {
              t.dispatch("setIsSubmittingState", l.value);
            }
          );
          const u = async () => {
              await o().then((e) => P(e, "TemporaryVehicle")),
                r(async (e) => {
                  const i = Object(n["E"])({
                    ...d.value,
                    vehicle: e.vehicle ? e.vehicle : void 0,
                    drivers: e.selectDriverField.drivers
                      ? e.selectDriverField.drivers
                      : [],
                    selectDriverField: e.selectDriverField,
                    owner:
                      e.selectDriverField.isDriverOwner === k
                        ? e.input
                        : e.selectDriverField.drivers.find((t) => {
                            if (
                              t.firstName &&
                              t.lastName &&
                              t.firstName + t.lastName + t.birthDate ===
                                e.selectDriverField.isDriverOwner
                            )
                              return t;
                          }),
                    comment: e.comment ? e.comment : "",
                    vvksComment: e.vvksComment ? e.vvksComment : "",
                  });
                  Object(n["c"])(() => t.state.insurance.insuranceTypeState);
                  await Yt.get(Qe[t.getters.insuranceTypeState])
                    .getCalculatedCost(i.value)
                    .then((e) => {
                      (i.value.totalCost = e),
                        t.dispatch("setTemporaryVehicleState", i),
                        t.dispatch("setHolderState", B.DETAIL);
                    })
                    .catch((e) => {
                      i.value.vehicle &&
                        i.value.vehicle.trailer &&
                        "1" === i.value.vehicle.trailer.value &&
                        window.alert(
                          'Opgelet: Pas het veld "aanhangwagen" aan via de knop Bewerken bij het voertuig.'
                        );
                    });
                })();
            },
            b = Object(n["c"])(() => t.state.insurance.insuranceTypeState),
            m = Object(n["E"])(!1),
            p = () => {
              const e = Object(n["E"])({
                ...d.value,
                vehicle: c.vehicle ? c.vehicle : void 0,
                drivers:
                  c.selectDriverField && c.selectDriverField.drivers
                    ? c.selectDriverField.drivers
                    : [],
                selectDriverField: c.selectDriverField,
                owner:
                  c.selectDriverField && c.selectDriverField.isDriverOwner === k
                    ? c.input
                    : c.selectDriverField &&
                      c.selectDriverField.drivers.find((e) => {
                        if (
                          e.firstName &&
                          e.lastName &&
                          c.selectDriverField &&
                          e.firstName + e.lastName + e.birthDate ===
                            c.selectDriverField.isDriverOwner
                        )
                          return e;
                      }),
                comment: c.comment ? c.comment : "",
              });
              m.value ||
                ((m.value = !0),
                Yt.get(Qe[b.value])
                  .createDraft(e.value, b.value)
                  .then(() => {
                    Qf.push("/home/verzekeringen");
                  }));
            };
          return {
            BelgianCitySearchRepository: Xd,
            CountryRepository: Ut,
            isSavingDraft: m,
            HolderStates: B,
            saveAsDraft: p,
            InputTypes: Kt,
            onSubmit: u,
            values: c,
            isEdit: a,
          };
        },
      });
    const sv = j()(av, [["render", yp]]);
    var rv = sv;
    const cv = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      lv = Object(n["h"])(
        "div",
        { class: "mt-4" },
        [
          Object(n["h"])("strong", null, "Land"),
          Object(n["h"])("div", { class: "w-96" }, [
            Object(n["h"])("p", { class: "mt-2 w-96" }, "Belgie"),
          ]),
        ],
        -1
      ),
      ov = { class: "xs:w-72 md:w-96" },
      dv = { class: "mt-2 xs:w-72 md:w-96" },
      uv = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      bv = { class: "flex gap-3 md:ml-20 xs:ml-5 sm:ml-5 mt-5 items-center" };
    function mv(e, t, i, a, s, r) {
      const c = Object(n["H"])("custom-headline-2"),
        l = Object(n["H"])("custom-input"),
        o = Object(n["H"])("multi-select"),
        d = Object(n["H"])("back-button"),
        u = Object(n["H"])("custom-button"),
        b = Object(n["H"])("loader");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          "form",
          {
            id: "EventInsurance",
            onSubmit:
              t[1] ||
              (t[1] = Object(n["Z"])(
                (...t) => e.onSubmit && e.onSubmit(...t),
                ["prevent"]
              )),
          },
          [
            Object(n["k"])(c, { text: "Activiteit" }),
            Object(n["h"])("div", cv, [
              Object(n["k"])(
                l,
                {
                  type: e.InputTypes.TEXT_AREA,
                  rules: "required",
                  name: "nature",
                  label: "Aard van de activiteit",
                },
                null,
                8,
                ["type"]
              ),
              lv,
              Object(n["h"])("div", ov, [
                Object(n["k"])(
                  o,
                  {
                    id: "location",
                    object: !0,
                    "track-by": "label",
                    "value-prop": "label",
                    repository: e.BelgianCitySearchRepository,
                    "resolve-on-load": !0,
                    options: [e.values.location],
                    searchable: !0,
                    label: "Gemeente",
                    rules: "required",
                    placeholder: "Zoek op naam/postcode",
                  },
                  null,
                  8,
                  ["repository", "options"]
                ),
              ]),
              Object(n["h"])("div", dv, [
                Object(n["k"])(
                  o,
                  {
                    id: "eventSize",
                    repository: e.EventSizeRepository,
                    object: !0,
                    "track-by": "label",
                    "value-prop": "id",
                    options: e.eventSizes,
                    label: "Grootte van evenement",
                    rules: "required",
                    placeholder: "Kies",
                  },
                  null,
                  8,
                  ["repository", "options"]
                ),
              ]),
            ]),
            Object(n["h"])("div", null, [
              Object(n["k"])(c, { text: "Opmerkingen" }),
              Object(n["h"])("div", uv, [
                Object(n["k"])(
                  l,
                  { type: e.InputTypes.TEXT_AREA, name: "comment", label: "" },
                  null,
                  8,
                  ["type"]
                ),
              ]),
            ]),
            Object(n["h"])("div", bv, [
              Object(n["k"])(
                d,
                {
                  stateName: "setHolderState",
                  backToState: e.HolderStates.GENERAL,
                },
                null,
                8,
                ["backToState"]
              ),
              Object(n["k"])(u, { text: "Volgende" }),
              e.isEdit
                ? Object(n["f"])("", !0)
                : (Object(n["y"])(),
                  Object(n["g"])(
                    "a",
                    {
                      key: 0,
                      class: "link-inline cursor-pointer",
                      onClick: t[0] || (t[0] = (t) => e.saveAsDraft()),
                    },
                    "Opslaan"
                  )),
              Object(n["k"])(b, { "is-loading": e.isSavingDraft }, null, 8, [
                "is-loading",
              ]),
            ]),
          ],
          32
        )
      );
    }
    class pv extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/insurance_event_sizes/"),
          (this.endpoint = "/insurance_event_sizes/"),
          (this.deserializer = w),
          (this.serializer = I);
      }
      getArray() {
        return this.get(this.endpoint, {}).then((e) => {
          const t = [];
          return (
            e.forEach((e) => {
              const i = Object(n["E"])(this.deserializer(e));
              t.push(i.value);
            }),
            t
          );
        });
      }
    }
    var vv = Object(n["l"])({
      name: "EventInsurance",
      components: {
        "custom-headline-2": qi,
        "custom-button": An,
        "multi-select": gd,
        "custom-input": bd,
        "back-button": eu,
        Loader: Nn,
      },
      setup() {
        const e = Object(hi["c"])(),
          t = Object(Q["b"])(),
          i = t.getters.getCurrentInsuranceState,
          {
            handleSubmit: a,
            values: s,
            isSubmitting: r,
            validate: c,
          } = Object(nt["e"])({
            initialValues: {
              nature: i.nature ? i.nature : "",
              location: i.location ? i.location : "",
              eventSize: i.eventSize ? i.eventSize : "",
              comment: i.comment ? i.comment : "",
              vvksComment: i.vvksComment ? i.vvksComment : "",
            },
          }),
          l = !!e.params.id,
          o = Object(n["c"])(() => t.state.insurance.generalInsuranceState),
          d = Object(n["E"])([]),
          u = () => {
            Yt.get(pv)
              .getArray()
              .then((e) => {
                d.value = e;
              });
          };
        u(),
          Object(n["U"])(
            () => r.value,
            () => {
              t.dispatch("setIsSubmittingState", r.value);
            }
          );
        const b = async () => {
            await c().then((e) => P(e, "EventInsurance")),
              a(async (e) => {
                const i = Object(n["E"])({
                  ...o.value,
                  nature: e.nature,
                  location: e.location,
                  eventSize: e.eventSize,
                  comment: e.comment ? e.comment : "",
                  vvksComment: e.vvksComment ? e.vvksComment : "",
                });
                await Yt.get(Qe[t.getters.insuranceTypeState])
                  .getCalculatedCost(i.value)
                  .then((e) => {
                    (i.value.totalCost = e),
                      t.dispatch("setEventState", i.value).then(() => {
                        t.dispatch("setHolderState", B.DETAIL);
                      });
                  });
              })();
          },
          m = Object(n["c"])(() => t.state.insurance.insuranceTypeState),
          p = Object(n["E"])(!1),
          v = () => {
            const e = Object(n["E"])({
              ...o.value,
              nature: s.nature,
              location: s.location,
              eventSize: s.eventSize,
              comment: s.comment ? s.comment : "",
            });
            p.value ||
              ((p.value = !0),
              Yt.get(Qe[m.value])
                .createDraft(e.value, m.value)
                .then(() => {
                  Qf.push("/home/verzekeringen");
                }));
          };
        return {
          BelgianCitySearchRepository: Xd,
          generalInsuranceState: o,
          isSavingDraft: p,
          HolderStates: B,
          saveAsDraft: v,
          eventSizes: d,
          InputTypes: Kt,
          onSubmit: b,
          values: s,
          isEdit: l,
        };
      },
    });
    const jv = j()(vv, [["render", mv]]);
    var Ov = jv,
      hv = Object(n["l"])({
        name: "RequestInsuranceType",
        components: {
          "one-time-activity": nu,
          "travel-assistance": fb,
          "temporary-vehicle": rv,
          "event-insurance": Ov,
          "material-insurance": up,
          "non-member": mm,
        },
        setup() {
          const e = Object(Q["b"])(),
            t = Object(n["c"])(() => e.state.insurance.insuranceTypeState);
          return {
            insuranceTypeState: t,
            InsuranceTypes: Ze,
            isCurrentType: Ic,
          };
        },
      });
    const gv = j()(hv, [["render", Ld]]);
    var yv = gv;
    const fv = { key: 0 },
      kv = Object(n["h"])(
        "p",
        { class: "text-red" },
        "Er is iets mis gegaan.",
        -1
      ),
      Sv = [kv],
      Ev = Object(n["h"])("p", { class: "font-semibold" }, "Opmerkingen", -1),
      _v = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Tv = { class: "flex gap-3 md:ml-20 xs:ml-5 sm:ml-5 mt-5" };
    function xv(e, t, i, a, s, r) {
      const c = Object(n["H"])("custom-input"),
        l = Object(n["H"])("request-insurance-detail"),
        o = Object(n["H"])("custom-button"),
        d = Object(n["H"])("call-to-action"),
        u = Object(n["H"])("back-button");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          "form",
          {
            onSubmit: t[0] || (t[0] = (...t) => e.onSubmit && e.onSubmit(...t)),
          },
          [
            e.error
              ? (Object(n["y"])(), Object(n["g"])("div", fv, Sv))
              : Object(n["f"])("", !0),
            Object(n["k"])(l, null, {
              default: Object(n["W"])(() => [
                Object(n["h"])("div", null, [
                  Ev,
                  Object(n["h"])("div", _v, [
                    Object(n["k"])(
                      c,
                      {
                        type: e.InputTypes.TEXT_AREA,
                        name: "comment",
                        label: "",
                      },
                      null,
                      8,
                      ["type"]
                    ),
                  ]),
                ]),
              ]),
              _: 1,
            }),
            e.data
              ? (Object(n["y"])(),
                Object(n["e"])(
                  d,
                  { key: 1, class: "mt-4" },
                  {
                    info: Object(n["W"])(() => [
                      Object(n["k"])(o, { text: "Verstuur je aanvraag" }),
                    ]),
                    _: 1,
                  }
                ))
              : Object(n["f"])("", !0),
            Object(n["h"])("div", Tv, [
              Object(n["k"])(
                u,
                {
                  stateName: "setHolderState",
                  backToState: e.HolderStates.TYPE,
                },
                null,
                8,
                ["backToState"]
              ),
            ]),
          ],
          32
        )
      );
    }
    const wv = (e) => {
        const t = {
          id: e.id,
          startDate: e.start_date,
          endDate: e.end_date,
          responsibleMember: e.responsible_member
            ? T(e.responsible_member)
            : void 0,
          group: e.group ? E({ id: e.group }) : void 0,
          status: e.status ? M({ label: e.status }) : M({ label: "draft" }),
          type: e.type ? re(e.type) : void 0,
          createdOn: e.created_on ? e.created_on : void 0,
        };
        return t;
      },
      Iv = (e) => {
        const t = {
          id: e.id,
          startDate: e.start_date,
          endDate: e.end_date,
          responsibleMember: T(e.responsible_member),
          group: E(e.group),
          status: M(e.status),
          type: re(e.type),
        };
        return t;
      };
    class Cv extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/insurance_drafts/"),
          (this.endpoint = "/insurance_drafts/"),
          (this.deserializer = wv),
          (this.serializer = Iv);
      }
      getArray(e) {
        const t = e.split(this.endpoint)[1];
        return this.get(this.endpoint + t, {}).then((e) => {
          const t = [];
          return (
            e.results.forEach((e) => {
              const i = this.deserializer({
                ...e.data,
                type: e.insurance_type,
                id: e.id,
                created_on: e.created_on,
              });
              t.push(i);
            }),
            (e.results = t),
            e
          );
        });
      }
    }
    const Dv = { id: "block-scouts-footer-contact-cta-block", class: "block" },
      Nv = {
        class: "footer-contact-cta angled-section-wrapper call-to-action",
      },
      Mv = {
        class:
          "angled-section angled-section--texture angled-section--bottom-right",
      },
      zv = Object(n["h"])(
        "div",
        { class: "angled-section__bg-image" },
        [
          Object(n["h"])("img", {
            src: "/bg-texture.jpg",
            class: "img-fluid img-fit-cover",
            alt: "Contacteer Scouts en Gidsen Vlaanderen",
            loading: "lazy",
          }),
        ],
        -1
      ),
      Av = { class: "container angled-section__content pt-5 pb-6 pb-md-8" },
      Hv = { class: "call-to-action__content" },
      Rv = { class: "row justify-content-lg-center" },
      Bv = { class: "col-12" },
      qv = { class: "row" },
      Vv = { class: "col-12 col-md-7 col-lg-10" },
      Lv = Object(n["h"])(
        "span",
        { class: "btn-blob__inner" },
        [
          Object(n["h"])("span", { class: "btn-blob__blobs" }, [
            Object(n["h"])("span", { class: "btn-blob__blob" }),
            Object(n["j"])(),
            Object(n["h"])("span", { class: "btn-blob__blob" }),
            Object(n["j"])(),
            Object(n["h"])("span", { class: "btn-blob__blob" }),
            Object(n["j"])(),
            Object(n["h"])("span", { class: "btn-blob__blob" }),
          ]),
        ],
        -1
      ),
      Gv = { key: 1 },
      Pv = { class: "text-2xl font-extrabold" };
    function Kv(e, t, i, a, s, r) {
      const c = Object(n["H"])("router-link");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", Dv, [
          Object(n["h"])("div", Nv, [
            Object(n["h"])("div", Mv, [
              zv,
              Object(n["h"])("div", Av, [
                Object(n["h"])("div", Hv, [
                  Object(n["h"])("div", Rv, [
                    Object(n["h"])("div", Bv, [
                      Object(n["h"])("div", qv, [
                        Object(n["h"])("div", Vv, [
                          e.link
                            ? (Object(n["y"])(),
                              Object(n["e"])(
                                c,
                                {
                                  key: 0,
                                  to: e.link,
                                  class: "btn btn-blob mt-0",
                                },
                                {
                                  default: Object(n["W"])(() => [
                                    Object(n["j"])(
                                      Object(n["K"])(e.text) + " ",
                                      1
                                    ),
                                    Lv,
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["to"]
                              ))
                            : (Object(n["y"])(),
                              Object(n["g"])("div", Gv, [
                                Object(n["h"])(
                                  "h1",
                                  Pv,
                                  Object(n["K"])(e.text),
                                  1
                                ),
                                Object(n["G"])(e.$slots, "info"),
                              ])),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    }
    var Yv = Object(n["l"])({
      name: "CallToAction",
      props: {
        text: { type: String, required: !0 },
        link: { type: String, required: !1, default: void 0 },
      },
    });
    const Uv = j()(Yv, [["render", Kv]]);
    var Fv = Uv,
      Wv = Object(n["l"])({
        name: "RequestInsuranceSubmit",
        components: {
          "request-insurance-detail": zd,
          "call-to-action": Fv,
          "custom-button": An,
          "custom-input": bd,
          "back-button": eu,
        },
        setup() {
          const e = Object(hi["c"])(),
            t = Object(Q["b"])(),
            i = Object(n["E"])(!1),
            a = !!e.params.id,
            s = !!e.meta.isDraft && e.meta.isDraft,
            r = t.getters.getCurrentInsuranceState,
            { handleSubmit: c, isSubmitting: l } = Object(nt["e"])({
              initialValues: { comment: r.comment ? r.comment : "" },
            }),
            o = c(async (e) => {
              t.dispatch($e[t.getters.insuranceTypeState], {
                ...t.getters.getCurrentInsuranceState,
                comment: e.comment,
              }),
                a && !s ? await u() : await d();
            }),
            d = async () => {
              await Yt.get(Qe[t.getters.insuranceTypeState])
                .create(t.getters.getCurrentInsuranceState)
                .then((i) => {
                  t.dispatch("setHolderState", B.COMPLETED),
                    t.dispatch($e[t.getters.insuranceTypeState], i),
                    a && Yt.get(Cv).removeById(e.params.id);
                })
                .catch((e) => {
                  e.value = !0;
                });
            },
            u = async () => {
              await Yt.get(Qe[t.getters.insuranceTypeState])
                .editById(e.params.id, t.getters.getCurrentInsuranceState)
                .then((e) => {
                  t.dispatch("setHolderState", B.COMPLETED),
                    t.dispatch($e[t.getters.insuranceTypeState], e);
                })
                .catch(() => {
                  i.value = !0;
                });
            },
            b = () => {
              t.dispatch("setHolderState", B.TYPE);
            };
          return (
            Object(n["U"])(
              () => l.value,
              () => {
                t.dispatch("setIsSubmittingState", l.value);
              }
            ),
            {
              HolderStates: B,
              isSubmitting: l,
              InputTypes: Kt,
              onSubmit: o,
              error: i,
              back: b,
              data: r,
            }
          );
        },
      });
    const Xv = j()(Wv, [["render", xv]]);
    var Zv = Xv,
      Jv = Object(n["l"])({
        name: "HolderStateForm",
        components: {
          "request-insurance-general": Ed,
          "request-insurance-detail": zd,
          "request-insurance-submit": Zv,
          "request-insurance-type": yv,
        },
        setup() {
          const e = Object(Q["b"])(),
            t = Object(n["c"])(() => e.state.insurance.holderState);
          return { HolderStates: B, holderState: t };
        },
      });
    const $v = j()(Jv, [["render", Ac]]);
    var Qv = $v,
      ej = Object(n["l"])({
        name: "RequestInsurance",
        components: { "request-bread-crumb": Nc, "state-form-holder": Qv },
        setup() {
          const e = Object(Q["b"])();
          let t = e.getters.getCurrentInsuranceState;
          const i = Object(n["c"])(() => e.state.insurance.holderState);
          return { data: t, holderState: i, HolderStates: B };
        },
      });
    const tj = j()(ej, [["render", gc]]);
    var ij = tj;
    const nj = { class: "container" },
      aj = { key: 0 },
      sj = { class: "flex gap-5 pt-1 pb-5 float-right" },
      rj = { key: 1 },
      cj = { class: "pb-3", style: { "margin-top": "-2em" } },
      lj = { class: "flex gap-5 pt-1 pb-5 float-right" };
    function oj(e, t, i, a, s, r) {
      const c = Object(n["H"])("call-to-action"),
        l = Object(n["H"])("custom-list"),
        o = Object(n["H"])("multi-select");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["k"])(c, {
            link: "/aanvraag/verzekering",
            text: "Vraag nieuwe verzekering aan",
          }),
          Object(n["h"])("div", nj, [
            e.drafts
              ? (Object(n["y"])(),
                Object(n["g"])("div", aj, [
                  Object(n["k"])(
                    l,
                    {
                      "is-draft": !0,
                      items: e.drafts.results,
                      title: "Nog te voltooien",
                      onRemoveDraft: t[0] || (t[0] = (t) => e.removeDraft(t)),
                    },
                    null,
                    8,
                    ["items"]
                  ),
                  Object(n["h"])("div", sj, [
                    e.drafts.previous
                      ? (Object(n["y"])(),
                        Object(n["g"])(
                          "a",
                          {
                            key: 0,
                            class: "link-inline cursor-pointer",
                            onClick:
                              t[1] ||
                              (t[1] = (t) =>
                                e.getPreviousDrafts(e.drafts.previous)),
                          },
                          "Vorige pagina"
                        ))
                      : Object(n["f"])("", !0),
                    e.drafts.next
                      ? (Object(n["y"])(),
                        Object(n["g"])(
                          "a",
                          {
                            key: 1,
                            class: "link-inline cursor-pointer",
                            onClick:
                              t[2] ||
                              (t[2] = (t) => e.getNextDrafts(e.drafts.next)),
                          },
                          "Volgende pagina"
                        ))
                      : Object(n["f"])("", !0),
                  ]),
                ]))
              : Object(n["f"])("", !0),
            e.data
              ? (Object(n["y"])(),
                Object(n["g"])("div", rj, [
                  Object(n["k"])(
                    l,
                    { items: e.data.results, title: "Recent aangevraagd" },
                    {
                      default: Object(n["W"])(() => [
                        Object(n["h"])("div", cj, [
                          Object(n["k"])(
                            o,
                            {
                              id: "group",
                              object: !0,
                              placeholder: "Filter op groep",
                              onAddSelection:
                                t[3] ||
                                (t[3] = (t) => e.addSelectionInsurances(t)),
                              "track-by": "fullInfo",
                              "value-prop": "id",
                              options: e.userData.scoutsGroups,
                              "loading-submit": e.isSubmitting,
                            },
                            null,
                            8,
                            ["options", "loading-submit"]
                          ),
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ["items"]
                  ),
                  Object(n["h"])("div", lj, [
                    e.data.previous
                      ? (Object(n["y"])(),
                        Object(n["g"])(
                          "a",
                          {
                            key: 0,
                            class: "link-inline cursor-pointer",
                            onClick:
                              t[4] ||
                              (t[4] = (t) =>
                                e.getPreviousInsurances(e.data.previous)),
                          },
                          "Vorige pagina"
                        ))
                      : Object(n["f"])("", !0),
                    e.data.next
                      ? (Object(n["y"])(),
                        Object(n["g"])(
                          "a",
                          {
                            key: 1,
                            class: "link-inline cursor-pointer",
                            onClick:
                              t[5] ||
                              (t[5] = (t) => e.getNextInsurances(e.data.next)),
                          },
                          "Volgende pagina"
                        ))
                      : Object(n["f"])("", !0),
                  ]),
                ]))
              : Object(n["f"])("", !0),
          ]),
        ])
      );
    }
    const dj = (e) => {
        const t = {
          id: e.id,
          startDate: e.start_date,
          endDate: e.end_date,
          responsibleMember: e.responsible_member
            ? T(e.responsible_member)
            : void 0,
          group: e.scouts_group ? E(e.scouts_group) : void 0,
          status: e.status ? M(e.status) : void 0,
          type: e.type ? re(e.type) : void 0,
          createdOn: e.created_on ? e.created_on : void 0,
        };
        return t;
      },
      uj = (e) => {
        const t = {
          id: e.id,
          startDate: e.start_date,
          endDate: e.end_date,
          responsibleMember: T(e.responsible_member),
          group: E(e.group),
          status: M(e.status),
          type: re(e.type),
        };
        return t;
      };
    class bj extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/insurances/"),
          (this.endpoint = "/insurances/"),
          (this.deserializer = dj),
          (this.serializer = uj);
      }
      getArray(e) {
        const t = e.split(this.endpoint)[1];
        return this.get(this.endpoint + t, {}).then((e) => {
          const t = [];
          return (
            e.results.forEach((e) => {
              t.push(this.deserializer(e));
            }),
            (e.results = t),
            e
          );
        });
      }
    }
    const mj = Object(n["i"])(
        '<div class="grid-cols-list py-2 border-t-2 border-black grid opacity-0 md:opacity-100"><div><p class="font-semibold">Aanvraag datum</p></div><div><p class="font-semibold">Wanneer</p></div><div><p class="font-semibold">Groep</p></div><div><p class="font-semibold">Type</p></div><div><p class="font-semibold">Status</p></div></div>',
        1
      ),
      pj = Object(n["h"])("hr", { class: "border-t-2 border-black" }, null, -1),
      vj = { key: 0, class: "text-center my-3" },
      jj = Object(n["h"])("i", null, "Geen resultaten", -1),
      Oj = [jj];
    function hj(e, t, i, a, s, r) {
      const c = Object(n["H"])("custom-headline-2"),
        l = Object(n["H"])("custom-list-item");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["k"])(c, { text: e.title }, null, 8, ["text"]),
            Object(n["G"])(e.$slots, "default"),
            mj,
            (Object(n["y"])(!0),
            Object(n["g"])(
              n["a"],
              null,
              Object(n["F"])(
                e.items,
                (i) => (
                  Object(n["y"])(),
                  Object(n["e"])(
                    l,
                    {
                      key: i.id,
                      "is-draft": e.isDraft,
                      item: i,
                      onRemoveDraft: t[0] || (t[0] = (t) => e.removeDraft(t)),
                    },
                    null,
                    8,
                    ["is-draft", "item"]
                  )
                )
              ),
              128
            )),
            pj,
            0 === e.items.length
              ? (Object(n["y"])(), Object(n["g"])("div", vj, Oj))
              : Object(n["f"])("", !0),
          ],
          64
        )
      );
    }
    const gj = (e) => (
        Object(n["B"])("data-v-2213bb94"), (e = e()), Object(n["z"])(), e
      ),
      yj = {
        key: 0,
        class: "md:grid-cols-list grid py-2 border-t-2 border-black",
      },
      fj = { class: "date-normal" },
      kj = { class: "date-under" },
      Sj = { class: "date-normal" },
      Ej = { class: "date-under" },
      _j = { key: 0, class: "float-right flex gap-3" },
      Tj = gj(() =>
        Object(n["h"])(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5 hover:text-lightGreen cursor-pointer",
            viewBox: "0 0 20 20",
            fill: "currentColor",
          },
          [
            Object(n["h"])("path", {
              d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z",
            }),
          ],
          -1
        )
      ),
      xj = [Tj],
      wj = { class: "flex gap-4" },
      Ij = gj(() =>
        Object(n["h"])(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5 hover:text-red cursor-pointer",
            viewBox: "0 0 20 20",
            fill: "currentColor",
          },
          [
            Object(n["h"])("path", {
              "fill-rule": "evenodd",
              d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
              "clip-rule": "evenodd",
            }),
          ],
          -1
        )
      ),
      Cj = gj(() =>
        Object(n["h"])(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5 hover:text-lightGreen cursor-pointer",
            viewBox: "0 0 20 20",
            fill: "currentColor",
          },
          [
            Object(n["h"])("path", {
              d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z",
            }),
          ],
          -1
        )
      ),
      Dj = [Cj],
      Nj = { key: 3 },
      Mj = gj(() =>
        Object(n["h"])(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-6 w-6 hover:text-lightGreen cursor-pointer",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
          },
          [
            Object(n["h"])("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "3",
              d: "M9 5l7 7-7 7",
            }),
          ],
          -1
        )
      );
    function zj(e, t, i, a, s, r) {
      const c = Object(n["H"])("router-link"),
        l = Object(n["H"])("loader");
      return e.item
        ? (Object(n["y"])(),
          Object(n["g"])("div", yj, [
            Object(n["h"])("div", null, [
              Object(n["h"])(
                "p",
                null,
                Object(n["K"])(
                  e.item.createdOn ? e.formatCreatedOn(e.item.createdOn) : ""
                ),
                1
              ),
            ]),
            e.isDraft
              ? Object(n["f"])("", !0)
              : (Object(n["y"])(),
                Object(n["e"])(
                  c,
                  {
                    key: 0,
                    to:
                      e.routeDetailLinkBasedOnType(e.item.type.name) +
                      "/" +
                      e.item.id,
                  },
                  {
                    default: Object(n["W"])(() => [
                      Object(n["h"])("div", null, [
                        Object(n["h"])("div", fj, [
                          Object(n["h"])(
                            "p",
                            null,
                            Object(n["K"])(
                              e.item.startDate && e.item.endDate
                                ? e.formatDate(e.item.startDate, e.item.endDate)
                                : ""
                            ),
                            1
                          ),
                        ]),
                        Object(n["h"])("div", kj, [
                          Object(n["h"])(
                            "p",
                            null,
                            Object(n["K"])(
                              e.item.startDate && e.item.endDate
                                ? e.formatSingleDate(e.item.startDate)
                                : ""
                            ),
                            1
                          ),
                          Object(n["h"])(
                            "p",
                            null,
                            Object(n["K"])(
                              e.item.startDate && e.item.endDate
                                ? e.formatSingleDate(e.item.endDate)
                                : ""
                            ),
                            1
                          ),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["to"]
                )),
            e.isDraft
              ? (Object(n["y"])(),
                Object(n["g"])(
                  "div",
                  {
                    key: 1,
                    class:
                      "hover:underline cursor-pointer hover:text-darkGreen",
                    onClick:
                      t[0] ||
                      (t[0] = (t) => e.goToDraft(e.item.id, e.item.type.name)),
                  },
                  [
                    Object(n["h"])("div", null, [
                      Object(n["h"])("div", Sj, [
                        Object(n["h"])(
                          "p",
                          null,
                          Object(n["K"])(
                            e.item.startDate && e.item.endDate
                              ? e.formatDate(e.item.startDate, e.item.endDate)
                              : ""
                          ),
                          1
                        ),
                      ]),
                      Object(n["h"])("div", Ej, [
                        Object(n["h"])(
                          "p",
                          null,
                          Object(n["K"])(
                            e.item.startDate && e.item.endDate
                              ? e.formatSingleDate(e.item.startDate)
                              : ""
                          ),
                          1
                        ),
                        Object(n["h"])(
                          "p",
                          null,
                          Object(n["K"])(
                            e.item.startDate && e.item.endDate
                              ? e.formatSingleDate(e.item.endDate)
                              : ""
                          ),
                          1
                        ),
                      ]),
                    ]),
                  ]
                ))
              : Object(n["f"])("", !0),
            Object(n["h"])("div", null, [
              Object(n["h"])(
                "p",
                null,
                Object(n["K"])(
                  e.item.group && e.item.group.name ? e.item.group.name : ""
                ) +
                  " " +
                  Object(n["K"])(
                    e.item.group && e.item.group.id ? e.item.group.id : ""
                  ),
                1
              ),
            ]),
            Object(n["h"])("div", null, [
              Object(n["h"])(
                "p",
                null,
                Object(n["K"])(
                  e.item.type && e.item.type.description
                    ? e.item.type.description
                    : ""
                ),
                1
              ),
            ]),
            Object(n["h"])("div", null, [
              Object(n["h"])(
                "p",
                null,
                Object(n["K"])(
                  e.item.status && e.item.status.label
                    ? e.item.status.label
                    : ""
                ),
                1
              ),
            ]),
            Object(n["h"])("div", null, [
              e.item.type && e.item.type.name
                ? (Object(n["y"])(),
                  Object(n["g"])("div", _j, [
                    e.isDraft
                      ? (Object(n["y"])(),
                        Object(n["g"])(
                          "div",
                          {
                            key: 0,
                            onClick:
                              t[1] ||
                              (t[1] = (t) =>
                                e.goToDraft(e.item.id, e.item.type.name)),
                          },
                          xj
                        ))
                      : Object(n["f"])("", !0),
                    e.isDraft
                      ? (Object(n["y"])(),
                        Object(n["g"])(
                          "div",
                          {
                            key: 1,
                            onClick:
                              t[2] || (t[2] = (t) => e.deleteDraft(e.item.id)),
                          },
                          [
                            Object(n["h"])("div", wj, [
                              Ij,
                              Object(n["k"])(
                                l,
                                { isLoading: e.isDeletingDraft },
                                null,
                                8,
                                ["isLoading"]
                              ),
                            ]),
                          ]
                        ))
                      : Object(n["f"])("", !0),
                    e.isDraft || "Goedgekeurd" === e.item.status.label
                      ? Object(n["f"])("", !0)
                      : (Object(n["y"])(),
                        Object(n["g"])(
                          "div",
                          {
                            key: 2,
                            onClick:
                              t[3] ||
                              (t[3] = (t) =>
                                e.fetchInsuranceById(
                                  e.item.id,
                                  e.item.type.name
                                )),
                          },
                          Dj
                        )),
                    e.isDraft
                      ? Object(n["f"])("", !0)
                      : (Object(n["y"])(),
                        Object(n["g"])("div", Nj, [
                          Object(n["k"])(
                            c,
                            {
                              to:
                                e.routeDetailLinkBasedOnType(e.item.type.name) +
                                "/" +
                                e.item.id,
                            },
                            { default: Object(n["W"])(() => [Mj]), _: 1 },
                            8,
                            ["to"]
                          ),
                        ])),
                  ]))
                : Object(n["f"])("", !0),
            ]),
          ]))
        : Object(n["f"])("", !0);
    }
    const Aj = (e) => {
      switch (e) {
        case "TypeEenmaligeActiviteit":
          return "/eenmalige-activiteit-detail";
        case "TypeTijdelijkeVerzekering":
          return "/tijdelijke-verzekering-niet-leden-detail";
        case "TypeEthiasAssistanceMetAuto":
          return "/reisbijstand-met-auto-detail";
        case "TypeEthiasAssistanceZonderAuto":
          return "/reisbijstand-zonder-auto-detail";
        case "TypeTijdelijkeAutoverzekering":
          return "/tijdelijke-autoverzekering-detail";
        case "TypeEvenementenVerzekering":
          return "/evenementen-verzekering-detail";
        case "TypeGroepsmateriaalVerzekering":
          return "/materiaal-verzekering-detail";
        default:
          return "/home";
      }
    };
    var Hj = Object(n["l"])({
      name: "CustomListItem",
      components: { loader: Nn },
      props: { item: { type: Object, required: !0 }, isDraft: Boolean },
      setup(e, t) {
        const i = Object(Q["b"])(),
          a = (e, t) => {
            l(t),
              Yt.get(Qe[i.getters.insuranceTypeState])
                .getById(e)
                .then((t) => {
                  i.dispatch($e[i.getters.insuranceTypeState], t).then(() => {
                    Qf.push("/verzekering-bewerken/" + e);
                  });
                });
          },
          s = (e, t) => {
            l(t),
              Yt.get(Qe[i.getters.insuranceTypeState])
                .getDraftById(e)
                .then((t) => {
                  i.dispatch($e[i.getters.insuranceTypeState], t).then(() => {
                    Qf.push("/draft-bewerken/" + e);
                  });
                });
          },
          r = Object(n["E"])(!1),
          c = (e) => {
            !1 === r.value &&
              ((r.value = !0),
              Yt.get(Cv)
                .removeById(e)
                .then(() => {
                  t.emit("removeDraft", e), (r.value = !1);
                }));
          },
          l = (e) => {
            switch (e) {
              case "TypeEenmaligeActiviteit":
                o(Ze.EENMALIGE_ACTIVITEIT);
                break;
              case "TypeTijdelijkeVerzekering":
                o(Ze.TIJDELIJKE_VERZEKERING_NIET_LEDEN);
                break;
              case "TypeEthiasAssistanceMetAuto":
                o(Ze.REIS_BIJSTAND);
                break;
              case "TypeEthiasAssistanceZonderAuto":
                o(Ze.REIS_BIJSTAND);
                break;
              case "TypeTijdelijkeAutoverzekering":
                o(Ze.TIJDELIJKE_AUTO_VERZEKERING);
                break;
              case "TypeEvenementenVerzekering":
                o(Ze.EVENEMENTEN_VERZEKERING);
                break;
              case "TypeGroepsmateriaalVerzekering":
                o(Ze.MATERIAAL_VERZEKERING);
                break;
              default:
                break;
            }
          },
          o = (e) => {
            i.dispatch("setInsuranceTypeState", e);
          };
        return {
          routeDetailLinkBasedOnType: Aj,
          fetchInsuranceById: a,
          formatSingleDate: Di,
          isDeletingDraft: r,
          formatCreatedOn: Ci,
          deleteDraft: c,
          formatDate: wi,
          goToDraft: s,
        };
      },
    });
    i("1153");
    const Rj = j()(Hj, [
      ["render", zj],
      ["__scopeId", "data-v-2213bb94"],
    ]);
    var Bj = Rj,
      qj = Object(n["l"])({
        name: "CustomList",
        components: { "custom-headline-2": qi, "custom-list-item": Bj },
        props: {
          title: { type: String, required: !0 },
          items: { type: Array, required: !0 },
          isDraft: Boolean,
        },
        setup(e, t) {
          const i = (e) => {
            t.emit("removeDraft", e);
          };
          return { removeDraft: i };
        },
      });
    const Vj = j()(qj, [["render", hj]]);
    var Lj = Vj,
      Gj = Object(n["l"])({
        name: "InsurancesHome",
        components: {
          "call-to-action": Fv,
          "multi-select": gd,
          "custom-list": Lj,
        },
        setup: () => {
          const e = Object(Q["b"])();
          e.dispatch("resetStates");
          const t = Object(n["E"])(),
            i = Object(n["E"])(),
            a = Object(n["E"])(e.getters.user),
            s = () => {
              Yt.get(bj)
                .getArray("/insurances/?page=1&page_size=10")
                .then((e) => {
                  t.value = e;
                });
            },
            r = (e) => {
              Yt.get(bj)
                .getArray(e)
                .then((e) => {
                  t.value = e;
                });
            },
            c = (e) => {
              Yt.get(bj)
                .getArray(e)
                .then((e) => {
                  t.value = e;
                });
            },
            l = () => {
              Yt.get(Cv)
                .getArray("/insurance_drafts/?page=1&page_size=10")
                .then((e) => {
                  i.value = e;
                });
            },
            o = (e) => {
              Yt.get(Cv)
                .getArray(e)
                .then((e) => {
                  i.value = e;
                });
            },
            d = (e) => {
              Yt.get(Cv)
                .getArray(e)
                .then((e) => {
                  i.value = e;
                });
            },
            u = () => {
              l();
            },
            b = (e) => {
              Yt.get(bj)
                .getArray(
                  "/insurances/?search=" + e.id + "&page=1&page_size=10"
                )
                .then((e) => {
                  t.value = e;
                });
            };
          return (
            s(),
            l(),
            {
              addSelectionInsurances: b,
              getPreviousInsurances: r,
              getNextInsurances: c,
              getPreviousDrafts: o,
              getNextDrafts: d,
              removeDraft: u,
              userData: a,
              drafts: i,
              data: t,
            }
          );
        },
      });
    const Pj = j()(Gj, [["render", oj]]);
    var Kj = Pj;
    const Yj = { class: "container" },
      Uj = { class: "container" };
    function Fj(e, t, i, a, s, r) {
      const c = Object(n["H"])("request-bread-crumb"),
        l = Object(n["H"])("state-claim-form-holder");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["h"])("div", Yj, [Object(n["k"])(c)]),
            Object(n["h"])("div", Uj, [Object(n["k"])(l)]),
          ],
          64
        )
      );
    }
    const Wj = { class: "flex py-3 xs:flex-col" };
    function Xj(e, t, i, a, s, r) {
      const c = Object(n["H"])("bread-crumb-item");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", Wj, [
          Object(n["k"])(
            c,
            {
              "is-change-state-possible":
                e.claimHolderState === e.ClaimHolderStates.TWO ||
                e.claimHolderState === e.ClaimHolderStates.THREE ||
                e.claimHolderState === e.ClaimHolderStates.FOUR,
              "visible-on-state": e.ClaimHolderStates.ONE,
              index: "1",
              text: "Slachtoffer",
            },
            null,
            8,
            ["is-change-state-possible", "visible-on-state"]
          ),
          Object(n["k"])(
            c,
            {
              "is-change-state-possible":
                e.claimHolderState === e.ClaimHolderStates.THREE ||
                e.claimHolderState === e.ClaimHolderStates.FOUR,
              "visible-on-state": e.ClaimHolderStates.TWO,
              index: "2",
              text: "Ongeval",
            },
            null,
            8,
            ["is-change-state-possible", "visible-on-state"]
          ),
          Object(n["k"])(
            c,
            {
              "is-change-state-possible":
                e.claimHolderState === e.ClaimHolderStates.FOUR,
              "visible-on-state": e.ClaimHolderStates.THREE,
              index: "3",
              text: "Betrokkenen",
            },
            null,
            8,
            ["is-change-state-possible", "visible-on-state"]
          ),
          Object(n["k"])(
            c,
            {
              "is-change-state-possible": !1,
              "visible-on-state": e.ClaimHolderStates.FOUR,
              index: "4",
              text: "Overzicht",
            },
            null,
            8,
            ["visible-on-state"]
          ),
          Object(n["k"])(
            c,
            {
              "is-change-state-possible": !1,
              "visible-on-state": e.ClaimHolderStates.FIVE,
              index: "5",
              text: "Verzonden",
            },
            null,
            8,
            ["visible-on-state"]
          ),
        ])
      );
    }
    const Zj = { class: "flex", style: { "margin-right": "1em" } },
      Jj = { key: 3, class: "pt-2 pl-3" };
    function $j(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])("div", Zj, [
          e.isChangeStatePossible
            ? (Object(n["y"])(),
              Object(n["g"])(
                "div",
                {
                  key: 0,
                  class: Object(n["s"])([
                    "h-10 w-10 text-center p-2 rounded-full border-2 border-lightGray cursor-pointer",
                    e.visibleOnState === e.claimHolderState
                      ? "bg-lightGreen"
                      : "",
                  ]),
                  onClick: t[0] || (t[0] = (t) => e.changeState()),
                },
                Object(n["K"])(e.index),
                3
              ))
            : (Object(n["y"])(),
              Object(n["g"])(
                "div",
                {
                  key: 1,
                  class: Object(n["s"])([
                    "h-10 w-10 text-center p-2 rounded-full border-2 border-lightGray",
                    e.visibleOnState === e.claimHolderState
                      ? "bg-lightGreen"
                      : "",
                  ]),
                },
                Object(n["K"])(e.index),
                3
              )),
          e.isChangeStatePossible
            ? (Object(n["y"])(),
              Object(n["g"])(
                "div",
                {
                  key: 2,
                  class: "pt-2 pl-3 cursor-pointer",
                  onClick: t[1] || (t[1] = (t) => e.changeState()),
                },
                Object(n["K"])(e.text),
                1
              ))
            : (Object(n["y"])(),
              Object(n["g"])("div", Jj, Object(n["K"])(e.text), 1)),
        ])
      );
    }
    var Qj = Object(n["l"])({
      name: "BreadCrumbItem",
      props: {
        index: { type: String, required: !0 },
        text: { type: String, required: !0 },
        visibleOnState: { type: String, required: !0 },
        isChangeStatePossible: { type: Boolean, Required: !0 },
      },
      setup(e) {
        const t = Object(Q["b"])(),
          i = Object(n["c"])(() => t.state.claim.claimHolderState),
          a = () => {
            e.isChangeStatePossible &&
              t.dispatch("setClaimHolderState", e.visibleOnState);
          };
        return { changeState: a, claimHolderState: i };
      },
    });
    const eO = j()(Qj, [["render", $j]]);
    var tO = eO,
      iO = Object(n["l"])({
        name: "RequestBreadCrumb",
        components: { "bread-crumb-item": tO },
        setup() {
          const e = Object(Q["b"])(),
            t = Object(n["c"])(() => e.state.claim.claimHolderState);
          return { ClaimHolderStates: Z, claimHolderState: t };
        },
      });
    const nO = j()(iO, [["render", Xj]]);
    var aO = nO;
    const sO = { key: 0 },
      rO = { key: 1 };
    function cO(e, t, i, a, s, r) {
      const c = Object(n["H"])("request-claim-identities"),
        l = Object(n["H"])("accident-details"),
        o = Object(n["H"])("involvement-other-parties"),
        d = Object(n["H"])("claim-detail"),
        u = Object(n["H"])("success-screen");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["X"])(
              Object(n["h"])("div", null, [Object(n["k"])(c)], 512),
              [[n["S"], e.claimHolderState === e.ClaimHolderStates.ONE]]
            ),
            Object(n["X"])(
              Object(n["h"])("div", null, [Object(n["k"])(l)], 512),
              [[n["S"], e.claimHolderState === e.ClaimHolderStates.TWO]]
            ),
            Object(n["X"])(
              Object(n["h"])("div", null, [Object(n["k"])(o)], 512),
              [[n["S"], e.claimHolderState === e.ClaimHolderStates.THREE]]
            ),
            e.claimHolderState === e.ClaimHolderStates.FOUR
              ? (Object(n["y"])(),
                Object(n["g"])("div", sO, [Object(n["k"])(d)]))
              : Object(n["f"])("", !0),
            e.claimHolderState === e.ClaimHolderStates.FIVE
              ? (Object(n["y"])(),
                Object(n["g"])("div", rO, [Object(n["k"])(u)]))
              : Object(n["f"])("", !0),
          ],
          64
        )
      );
    }
    const lO = (e) => (
        Object(n["B"])("data-v-7f0ed8d6"), (e = e()), Object(n["z"])(), e
      ),
      oO = { class: "mb-5" },
      dO = { class: "mt-2" },
      uO = lO(() =>
        Object(n["h"])(
          "div",
          null,
          [
            Object(n["h"])(
              "p",
              null,
              " Wat je invult wordt doorgestuurd naar Ethias en het e-mailadres van het slachtoffer. Na deze aangifte neemt Ethias contact op met (de ouders van) het slachtoffer. Alle verdere communicatie verloopt rechtstreeks tussen hen. "
            ),
          ],
          -1
        )
      ),
      bO = {
        key: 0,
        class: "md:ml-20 xs:ml-5 sm:ml-5",
        style: { "margin-top": "-2em" },
      },
      mO = { style: { "max-width": "600px" } },
      pO = { class: "md:ml-20 xs:ml-5 sm:ml-5 mt-5" },
      vO = { class: "md:ml-20 xs:ml-5 sm:ml-5 mt-5" },
      jO = Object(n["j"])(" Staat er een fout in je gegevens? Pas ze dan aan "),
      OO = lO(() =>
        Object(n["h"])(
          "strong",
          null,
          [
            Object(n["h"])(
              "a",
              {
                target: "_blank",
                href: "https://groepsadmin.scoutsengidsenvlaanderen.be/",
              },
              "in de Groepsadministratie"
            ),
          ],
          -1
        )
      ),
      hO = Object(n["j"])(" en klik vervolgens op Herlaad. "),
      gO = { class: "mb-5" },
      yO = { class: "md:ml-20 xs:ml-5 sm:ml-5 my-3" },
      fO = Object(n["j"])(" of "),
      kO = { class: "mt-3" },
      SO = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      EO = { class: "sm:flex sm:gap-2 xs:w-72 sm:w-100" },
      _O = { class: "sm:mt-3 sm:flex sm:gap-2 xs:w-72 sm:w-100" },
      TO = lO(() => Object(n["h"])("strong", null, "Bus", -1)),
      xO = {
        class: Object(n["s"])("md:ml-20 xs:ml-5 sm:ml-5 sm:flex sm:gap-2"),
      },
      wO = { key: 0 },
      IO = { class: "input" },
      CO = { class: "mt-4 ml-3" },
      DO = { class: "mt-3 md:ml-20 xs:ml-5 sm:ml-5 sm:flex sm:gap-5" },
      NO = { class: "xs:mt-3" },
      MO = { action: "" },
      zO = Object(n["j"])("Geslacht "),
      AO = { class: "mt-3 flex gap-4" },
      HO = lO(() =>
        Object(n["h"])("label", { for: "M", class: "ml-1" }, "M", -1)
      ),
      RO = lO(() =>
        Object(n["h"])("label", { for: "V", class: "ml-1" }, "V", -1)
      ),
      BO = { style: { "margin-top": "1px" } },
      qO = Object(n["j"])(
        " Ethias beperkt technisch voorlopig de keuze tot 'M' of 'V'; Scouts en Gidsen Vlaanderen gaat hierover met hen in dialoog om een oplossing te vinden zodat we genderneutraal binnen scouting kunnen communiceren. "
      ),
      VO = { class: "md:ml-20 xs:ml-5 sm:ml-5 mt-3" },
      LO = lO(() =>
        Object(n["h"])(
          "p",
          { class: "input text-2xs mt-1" },
          [
            Object(n["h"])(
              "i",
              null,
              " Als het slachtoffer minderjarig is, vul dan het mailadres van de opvoedingsverantwoordelijke (ouders, voogd) in. "
            ),
          ],
          -1
        )
      ),
      GO = { class: "mt-3 md:ml-20 xs:ml-5 sm:ml-5 w-72" },
      PO = { key: 0, class: "mt-3 md:ml-20 xs:ml-5 sm:ml-5 w-72" },
      KO = { key: 1, class: "mt-3 md:ml-20 xs:ml-5 sm:ml-5" },
      YO = lO(() =>
        Object(n["h"])(
          "p",
          null,
          "Enkel manueel invullen in geval van eenmalige activiteit of evenementenverzekering.",
          -1
        )
      ),
      UO = { class: "flex gap-3 mt-5 items-center" };
    function FO(e, t, i, a, s, r) {
      const c = Object(n["H"])("info-alert"),
        l = Object(n["H"])("custom-headline-2"),
        o = Object(n["H"])("multi-select"),
        d = Object(n["H"])("insurance-applicant"),
        u = Object(n["H"])("custom-button"),
        b = Object(n["H"])("members-side-bar"),
        m = Object(n["H"])("non-member-side-bar"),
        p = Object(n["H"])("custom-input"),
        v = Object(n["H"])("label-output"),
        j = Object(n["H"])("required"),
        O = Object(n["H"])("question-disclaimer"),
        h = Object(n["H"])("ErrorMessage");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          "form",
          {
            id: "RequestClaimIdentities",
            onSubmit:
              t[11] ||
              (t[11] = Object(n["Z"])(
                (...t) => e.onSubmit && e.onSubmit(...t),
                ["prevent"]
              )),
          },
          [
            Object(n["h"])("div", oO, [
              Object(n["h"])("div", dO, [
                Object(n["k"])(c, null, {
                  default: Object(n["W"])(() => [uO]),
                  _: 1,
                }),
              ]),
              Object(n["k"])(l, { text: "Wie doet de aangifte?" }),
              e.claimGroups
                ? (Object(n["y"])(),
                  Object(n["g"])("div", bO, [
                    Object(n["h"])("div", mO, [
                      Object(n["k"])(
                        o,
                        {
                          id: "group",
                          object: !0,
                          disabled: e.isEdit,
                          rules: "required",
                          placeholder: "Groep",
                          "track-by": "fullInfo",
                          "value-prop": "id",
                          options: e.claimGroups,
                          label: "Selecteer je groep",
                          "loading-submit": e.isSubmitting,
                        },
                        null,
                        8,
                        ["disabled", "options", "loading-submit"]
                      ),
                    ]),
                  ]))
                : Object(n["f"])("", !0),
              Object(n["h"])("div", pO, [
                Object(n["k"])(d, { applicant: e.userData }, null, 8, [
                  "applicant",
                ]),
              ]),
              Object(n["h"])("div", vO, [
                Object(n["k"])(c, null, {
                  default: Object(n["W"])(() => [
                    Object(n["h"])("p", null, [
                      jO,
                      OO,
                      hO,
                      Object(n["k"])(
                        u,
                        {
                          loadingSubmit: e.isRefreshing,
                          type: "button",
                          class: "ml-2 mt-2",
                          text: "Herlaad",
                          onClick: t[0] || (t[0] = (t) => e.refreshGroups()),
                        },
                        null,
                        8,
                        ["loadingSubmit"]
                      ),
                    ]),
                  ]),
                  _: 1,
                }),
              ]),
            ]),
            Object(n["h"])("div", gO, [
              Object(n["k"])(l, { text: "Wie is het slachtoffer?" }),
              Object(n["h"])("div", yO, [
                Object(n["h"])("div", null, [
                  Object(n["h"])(
                    "strong",
                    {
                      class: "cursor-pointer text-lightGreen hover:text-green",
                      onClick: t[1] || (t[1] = (t) => e.openMemberSideBar()),
                    },
                    "+ Kies een lid"
                  ),
                  fO,
                  Object(n["h"])(
                    "strong",
                    {
                      class: "cursor-pointer text-lightGreen",
                      onClick: t[2] || (t[2] = (t) => e.displayFields()),
                    },
                    "vul manueel in"
                  ),
                  e.values.group
                    ? (Object(n["y"])(),
                      Object(n["e"])(
                        b,
                        {
                          key: 0,
                          isDisplay: e.isMemberSideBarDisplay,
                          "onUpdate:isDisplay":
                            t[3] ||
                            (t[3] = (t) => (e.isMemberSideBarDisplay = t)),
                          "close-on-add": !0,
                          group: e.values.group.id,
                          "existing-list": e.members,
                          title: "Lid",
                          onAddMemberToList:
                            t[4] || (t[4] = (t) => e.addMember(t)),
                        },
                        null,
                        8,
                        ["isDisplay", "group", "existing-list"]
                      ))
                    : Object(n["f"])("", !0),
                ]),
                Object(n["X"])(
                  Object(n["h"])(
                    "div",
                    kO,
                    [
                      Object(n["h"])("div", null, [
                        Object(n["h"])(
                          "strong",
                          {
                            class: "cursor-pointer text-lightGreen",
                            onClick:
                              t[5] || (t[5] = (t) => e.openNonMemberSideBar()),
                          },
                          " Kies een niet-lid"
                        ),
                      ]),
                      Object(n["k"])(
                        m,
                        {
                          isOverflowHidden: "false",
                          "side-bar-state": e.nonMemberSideBarState,
                          "onUpdate:side-bar-state":
                            t[6] ||
                            (t[6] = (t) => (e.nonMemberSideBarState = t)),
                          "close-on-add": !0,
                          "existing-list": e.nonMembers,
                          title: "Niet lid",
                          onAddCreatedNonMemberToList:
                            t[7] || (t[7] = (t) => e.addCreatedNonMember(t)),
                        },
                        null,
                        8,
                        ["side-bar-state", "existing-list"]
                      ),
                    ],
                    512
                  ),
                  [[n["S"], !1]]
                ),
              ]),
              Object(n["X"])(
                Object(n["h"])(
                  "div",
                  null,
                  [
                    Object(n["h"])("div", SO, [
                      Object(n["h"])("div", EO, [
                        Object(n["k"])(
                          p,
                          {
                            maxlength: 15,
                            disabled: e.isSelectedVictim,
                            type: e.InputTypes.TEXT,
                            rules: "required",
                            name: "victim.firstName",
                            label: "Voornaam",
                          },
                          null,
                          8,
                          ["disabled", "type"]
                        ),
                        Object(n["k"])(
                          p,
                          {
                            maxlength: 25,
                            disabled: e.isSelectedVictim,
                            type: e.InputTypes.TEXT,
                            rules: "required",
                            name: "victim.lastName",
                            label: "Achternaam",
                          },
                          null,
                          8,
                          ["disabled", "type"]
                        ),
                      ]),
                      Object(n["h"])("div", _O, [
                        Object(n["k"])(
                          p,
                          {
                            maxlength: 100,
                            class: "streetInput",
                            type: e.InputTypes.TEXT,
                            rules: "required",
                            name: "victim.street",
                            label: "Straat",
                          },
                          null,
                          8,
                          ["type"]
                        ),
                        Object(n["k"])(
                          p,
                          {
                            maxlength: 5,
                            type: e.InputTypes.TEXT,
                            rules: "required",
                            name: "victim.number",
                            label: "Nummer",
                          },
                          null,
                          8,
                          ["type"]
                        ),
                        Object(n["h"])("div", null, [
                          TO,
                          Object(n["k"])(
                            p,
                            {
                              class: "mt-3",
                              maxlength: 5,
                              type: e.InputTypes.TEXT,
                              name: "victim.letterBox",
                            },
                            null,
                            8,
                            ["type"]
                          ),
                        ]),
                      ]),
                    ]),
                    Object(n["h"])("div", xO, [
                      (e.values.victim &&
                        e.values.victim.country &&
                        "" === e.values.victim.country.name) ||
                      (e.values.victim.country &&
                        "België" === e.values.victim.country.name)
                        ? (Object(n["y"])(),
                          Object(n["g"])("div", wO, [
                            Object(n["h"])("div", IO, [
                              Object(n["k"])(
                                o,
                                {
                                  id: "victim.postCodeCity",
                                  object: !0,
                                  "track-by": "label",
                                  "value-prop": "label",
                                  repository: e.BelgianCitySearchRepository,
                                  "resolve-on-load": !0,
                                  options: [],
                                  searchable: !0,
                                  label: "Gemeente",
                                  rules: "required",
                                  placeholder: "Zoek op naam/postcode",
                                },
                                null,
                                8,
                                ["repository"]
                              ),
                            ]),
                          ]))
                        : Object(n["f"])("", !0),
                      Object(n["h"])("div", CO, [
                        Object(n["k"])(v, { label: "Land", text: "België" }),
                      ]),
                    ]),
                    Object(n["h"])("div", DO, [
                      Object(n["h"])("div", null, [
                        Object(n["k"])(
                          p,
                          {
                            rules: "required",
                            class: "input",
                            "loading-submit": e.isSubmitting,
                            type: e.InputTypes.DATE,
                            name: "victim.birthDate",
                            label: "Geboortedatum",
                          },
                          null,
                          8,
                          ["loading-submit", "type"]
                        ),
                      ]),
                      Object(n["h"])("div", NO, [
                        Object(n["h"])("form", MO, [
                          Object(n["h"])("strong", null, [
                            zO,
                            Object(n["k"])(j, { rules: "required" }),
                          ]),
                          Object(n["h"])("div", AO, [
                            Object(n["X"])(
                              Object(n["k"])(
                                p,
                                {
                                  type: "victim.gender",
                                  rules: "required",
                                  name: "victim.gender",
                                },
                                null,
                                8,
                                ["type"]
                              ),
                              [[n["S"], !1]]
                            ),
                            Object(n["h"])("div", null, [
                              Object(n["X"])(
                                Object(n["h"])(
                                  "input",
                                  {
                                    id: "M",
                                    "onUpdate:modelValue":
                                      t[8] ||
                                      (t[8] = (t) => (e.selectedGender = t)),
                                    class: "cursor-pointer",
                                    type: "radio",
                                    name: "M",
                                    value: "M",
                                  },
                                  null,
                                  512
                                ),
                                [[n["Q"], e.selectedGender]]
                              ),
                              HO,
                            ]),
                            Object(n["h"])("div", null, [
                              Object(n["X"])(
                                Object(n["h"])(
                                  "input",
                                  {
                                    id: "V",
                                    "onUpdate:modelValue":
                                      t[9] ||
                                      (t[9] = (t) => (e.selectedGender = t)),
                                    class: "cursor-pointer",
                                    type: "radio",
                                    name: "F",
                                    value: "F",
                                  },
                                  null,
                                  512
                                ),
                                [[n["Q"], e.selectedGender]]
                              ),
                              RO,
                            ]),
                            Object(n["f"])("", !0),
                            Object(n["h"])("div", BO, [
                              Object(n["k"])(O, null, {
                                default: Object(n["W"])(() => [qO]),
                                _: 1,
                              }),
                            ]),
                          ]),
                          Object(n["k"])(h, {
                            name: "victim.gender",
                            class: "text-red text-sm block my-2 w-36",
                          }),
                        ]),
                      ]),
                    ]),
                    Object(n["h"])("div", VO, [
                      Object(n["h"])("div", null, [
                        Object(n["k"])(
                          p,
                          {
                            maxlength: 60,
                            class: "input",
                            type: e.InputTypes.TEXT,
                            rules: "required",
                            name: "victim.email",
                            label: "E-mail",
                          },
                          null,
                          8,
                          ["type"]
                        ),
                        LO,
                      ]),
                    ]),
                    Object(n["h"])("div", GO, [
                      Object(n["k"])(
                        p,
                        {
                          type: e.InputTypes.TEXT,
                          rules: "bankAccountLength:victim.bankAccount",
                          name: "victim.bankAccount",
                          label: "Bankrekeningnummer",
                          maxlength: 19,
                        },
                        null,
                        8,
                        ["type"]
                      ),
                    ]),
                    e.values.victim && e.values.victim.membershipNumber
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", PO, [
                          Object(n["k"])(
                            p,
                            {
                              disabled: !0,
                              type: e.InputTypes.TEXT,
                              name: "victim.membershipNumber",
                              label: "Lidnummer",
                            },
                            null,
                            8,
                            ["type"]
                          ),
                        ]))
                      : (Object(n["y"])(),
                        Object(n["g"])("div", KO, [
                          Object(n["k"])(c, null, {
                            default: Object(n["W"])(() => [YO]),
                            _: 1,
                          }),
                        ])),
                  ],
                  512
                ),
                [[n["S"], e.isFieldsVisible]]
              ),
            ]),
            Object(n["h"])("div", UO, [
              Object(n["k"])(u, { text: "Volgende" }),
            ]),
          ],
          32
        )
      );
    }
    const WO = (e) => (
        Object(n["B"])("data-v-ffaee1b4"), (e = e()), Object(n["z"])(), e
      ),
      XO = { class: "custom-tooltip cursor-pointer" },
      ZO = WO(() =>
        Object(n["h"])(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-5 w-5 text-lightGreen",
            viewBox: "0 0 20 20",
            fill: "currentColor",
          },
          [
            Object(n["h"])("path", {
              "fill-rule": "evenodd",
              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
              "clip-rule": "evenodd",
            }),
          ],
          -1
        )
      ),
      JO = { class: "custom-tooltiptext text-sm" };
    function $O(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["h"])("div", XO, [
            ZO,
            Object(n["h"])("span", JO, [
              Object(n["G"])(e.$slots, "default", {}, void 0, !0),
            ]),
          ]),
        ])
      );
    }
    var QO = Object(n["l"])({ name: "QuestionDisclaimer" });
    i("e747");
    const eh = j()(QO, [
      ["render", $O],
      ["__scopeId", "data-v-ffaee1b4"],
    ]);
    var th,
      ih = eh;
    (function (e) {
      (e["REGULAR"] = "REGULAR"),
        (e["IRREGULAR_LOCATION"] = "IRREGULAR_LOCATION"),
        (e["TRANSPORT"] = "TRANSPORT");
    })(th || (th = {}));
    const nh = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          lastName: e.last_name,
          firstName: e.first_name,
          phoneNumber: e.phone_number
            ? e.phone_number.replace(/ /g, "")
            : void 0,
          email: e.email ? e.email : void 0,
          birthDate: e.birth_date,
          groupAdminId: e.group_admin_id ? e.group_admin_id : void 0,
          street: e.street ? e.street : void 0,
          number: e.number ? e.number : void 0,
          letterBox: e.letter_box ? e.letter_box : void 0,
          postCodeCity: C({ city: e.city, postal_code: e.postal_code }),
          comment: e.comment,
          isChecked: !1,
          membershipNumber: e.membership_number ? e.membership_number : void 0,
          bankAccount: e.bank_account ? e.bank_account : void 0,
          gender: e.gender ? e.gender : void 0,
          nonMember: e.non_member ? e.non_member : void 0,
        };
        return t;
      },
      ah = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          last_name: e.lastName,
          first_name: e.firstName,
          phone_number: e.phoneNumber ? e.phoneNumber.replace(/ /g, "") : "/",
          email: e.email ? e.email : void 0,
          birth_date: e.birthDate,
          group_admin_id: e.groupAdminId ? e.groupAdminId : void 0,
          street: e.street ? e.street : void 0,
          number: e.number ? e.number : void 0,
          comment: e.comment ? e.comment : void 0,
          membership_number: e.membershipNumber ? e.membershipNumber : void 0,
          postal_code: e.postcode
            ? e.postcode
            : e.postCodeCity
            ? D(e.postCodeCity).postal_code
            : void 0,
          city: e.city
            ? e.city
            : e.postCodeCity
            ? D(e.postCodeCity).city
            : void 0,
          gender: e.gender ? e.gender : void 0,
          non_member: e.nonMember ? e.nonMember : void 0,
          letter_box: e.letterBox ? e.letterBox : void 0,
        };
        return t;
      },
      sh = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          filename: e.filename ? e.filename : void 0,
          contentType: e.content_type ? e.content_type : void 0,
        };
        return t;
      },
      rh = (e) => {
        const t = {
          id: e.id ? e.id : void 0,
          date: e.date ? e.date : void 0,
          person: e.declarant ? e.declarant : void 0,
          group: e.group ? E(e.group) : void 0,
          victimMember: e.victim_member ? e.victim_member : void 0,
          victimNonMember: e.victim_non_member ? e.victim_non_member : void 0,
          victimMemberGroupAdminId: e.victim_member_group_admin_id
            ? e.victim_member_group_admin_id
            : void 0,
          bankAccount: e.bank_account ? e.bank_account : void 0,
          dateOfAccident: e.date_of_accident
            ? A()(e.date_of_accident).format("DD MMM YYYY")
            : void 0,
          activity: e.activity ? e.activity : void 0,
          activityTypes: e.activity_type ? e.activity_type : void 0,
          usedTransport: e.used_transport ? e.used_transport : void 0,
          isDamage: e.isDamage ? e.isDamage : void 0,
          description: e.description ? e.description : void 0,
          involvedPartyName: e.involved_party_name
            ? e.involved_party_name
            : void 0,
          involvedPartyDescription: e.involved_party_description
            ? e.involved_party_description
            : void 0,
          involvedPartyBirthdate: e.involved_party_birthdate
            ? e.involved_party_birthdate
            : void 0,
          officialReportDescription: e.official_report_description
            ? e.official_report_description
            : void 0,
          pvNumber: e.pv_number ? e.pv_number : void 0,
          leadershipDescription: e.leadership_description
            ? e.leadership_description
            : void 0,
          victim: e.victim ? nh(e.victim) : void 0,
          administrationComment: e.administrationComment
            ? e.administrationComment
            : void 0,
          dossierNumber: e.case_number ? e.case_number : void 0,
          note: e.note ? e.note : void 0,
          attachment: e.attachment ? sh(e.attachment) : void 0,
          declarantCity: e.declarant_city ? e.declarant_city : void 0,
          witnessName: e.witness_name ? e.witness_name : void 0,
          witnessDescription: e.witness_description
            ? e.witness_description
            : void 0,
          gender: e.gender ? e.gender : void 0,
          victimBirthDate: e.victim_birth_date ? e.victim_birth_date : void 0,
          victimEmail: e.victim_email ? e.victim_email : void 0,
          groupNumber: e.group_group_admin_id ? e.group_group_admin_id : void 0,
          declarant: e.declarant ? oe(e.declarant) : void 0,
          damageType: e.damage_type ? e.damage_type : void 0,
          createdOn: e.created_on
            ? A()(e.created_on).format("DD MMM YYYY")
            : void 0,
          isWitnessChecked: e.witness ? e.witness : null,
          isInvolvedPartyChecked: e.involved_party ? e.involved_party : null,
          isLeadershipChecked: e.leadership ? e.leadership : null,
          isOfficialReportChecked: e.official_report ? e.official_report : null,
          attachmentName: e.attachment_name ? e.attachment_name : void 0,
        };
        return t;
      },
      ch = (e) => {
        e.victim.gender = e.gender;
        const t = {
          group_group_admin_id: e.group.id ? e.group.id : void 0,
          victim_member: e.victimMember ? e.victimMember : void 0,
          victim_non_member: e.victimNonMember ? e.victimNonMember : void 0,
          bank_account: e.victim.bankAccount
            ? e.victim.bankAccount.replace(/ /g, "")
            : void 0,
          date_of_accident: e.dateOfAccident
            ? e.dateOfAccident + "T09:00:00.000Z"
            : void 0,
          activity: e.activity ? e.activity : void 0,
          activity_type: e.activityTypes ? e.activityTypes : void 0,
          used_transport:
            e.activityTypes.includes(th.TRANSPORT) && e.usedTransport
              ? e.usedTransport
              : void 0,
          description: e.description ? e.description : void 0,
          involved_party_name: e.involvedPartyName ? e.involvedPartyName : "",
          involved_party_description: e.involvedPartyDescription
            ? e.involvedPartyDescription
            : "",
          involved_party_birthdate: e.involvedPartyBirthdate
            ? e.involvedPartyBirthdate
            : "",
          official_report_description: e.officialReportDescription
            ? e.officialReportDescription
            : "",
          pv_number: e.pvNumber ? e.pvNumber : "",
          leadership_description: e.leadershipDescription
            ? e.leadershipDescription
            : void 0,
          declarant_city: e.declarantCity ? e.declarantCity : void 0,
          witness_name: e.witnessName ? e.witnessName : "",
          witness_description: e.witnessDescription ? e.witnessDescription : "",
          gender: e.gender ? e.gender : void 0,
          victim_birth_date: e.victimBirthDate ? e.victimBirthDate : void 0,
          victim_email: e.victimEmail ? e.victimEmail : void 0,
          victim: e.victim ? ah(e.victim) : void 0,
          file: e.file ? e.file : void 0,
          damage_type: e.damageType ? e.damageType : void 0,
          witness: e.isWitnessChecked ? e.isWitnessChecked : null,
          official_report: e.isOfficialReportChecked
            ? e.isOfficialReportChecked
            : null,
          leadership: e.isLeadershipChecked ? e.isLeadershipChecked : null,
          involved_party: e.isInvolvedPartyChecked
            ? e.isInvolvedPartyChecked
            : null,
        };
        return t;
      };
    class lh extends ae {
      constructor() {
        super(...arguments),
          (this.id = "/insurances_claims/"),
          (this.endpoint = "/insurances_claims/"),
          (this.deserializer = rh),
          (this.serializer = ch);
      }
      getArray(e) {
        const t = e.split(this.endpoint)[1];
        return this.get(this.endpoint + t, {}).then((e) => {
          const t = [];
          return e.response && 403 === e.response.status
            ? (console.log("RESPONSE: ", e.response), t)
            : (e.results.forEach((e) => {
                t.push(this.deserializer(e));
              }),
              (e.results = t),
              e);
        });
      }
      search(e, t) {
        return this.get(
          this.endpoint +
            "?search=" +
            e +
            "&year=" +
            t +
            "&page=1&page_size=10",
          {}
        ).then((e) => {
          const t = [];
          return (
            e.results.forEach((e) => {
              t.push(this.deserializer(e));
            }),
            (e.results = t),
            e
          );
        });
      }
      getClaimGroupsByPermissions() {
        return this.get("/insurances_claims/data/", {}).then((e) => {
          const t = [];
          return (
            e.permitted_scouts_groups.forEach((e) => {
              t.push(E(e));
            }),
            (e = t),
            e
          );
        });
      }
      updateInfo(e, t) {
        return this.patch(this.endpoint + e + "/", t).then((e) =>
          this.deserializer(e)
        );
      }
      create(e, t) {
        const i = e,
          n = new FormData();
        console.log("CLAIM: ", i),
          i.group && i.group.id && n.append("group_group_admin_id", i.group.id),
          i.activityTypes &&
            n.append("activity_type", JSON.stringify(i.activityTypes)),
          i.usedTransport &&
            n.append("used_transport", i.usedTransport.toString()),
          this.serializer(e).bank_account &&
            n.append("bank_account", this.serializer(e).bank_account),
          this.serializer(e).victim &&
            n.append("victim", JSON.stringify(this.serializer(e).victim)),
          i.activity && n.append("activity", i.activity.toString()),
          this.serializer(e).date_of_accident &&
            n.append("date_of_accident", this.serializer(e).date_of_accident),
          i.description && n.append("description", i.description.toString()),
          i.declarantCity &&
            n.append("declarant_city", i.declarantCity.toString()),
          i.involvedPartyName
            ? n.append("involved_party_name", i.involvedPartyName.toString())
            : n.append("involved_party_name", ""),
          i.involvedPartyDescription
            ? n.append(
                "involved_party_description",
                i.involvedPartyDescription.toString()
              )
            : n.append("involved_party_description", ""),
          i.involvedPartyBirthdate &&
            n.append(
              "involved_party_birthdate",
              i.involvedPartyBirthdate.toString()
            ),
          i.officialReportDescription
            ? n.append(
                "official_report_description",
                i.officialReportDescription.toString()
              )
            : n.append("official_report_description", ""),
          i.pvNumber
            ? n.append("pv_number", i.pvNumber.toString())
            : n.append("pv_number", ""),
          i.witnessName
            ? n.append("witness_name", i.witnessName.toString())
            : n.append("witness_name", ""),
          i.witnessDescription
            ? n.append("witness_description", i.witnessDescription.toString())
            : n.append("witness_description", ""),
          i.leadershipDescription
            ? n.append(
                "leadership_description",
                i.leadershipDescription.toString()
              )
            : n.append("leadership_description", ""),
          t && n.append("file", t),
          i.damageType
            ? n.append("damage_type", i.damageType)
            : n.append("damage_type", ""),
          i.isInvolvedPartyChecked
            ? ("True" === i.isInvolvedPartyChecked &&
                n.append("involved_party", "yes"),
              "False" === i.isInvolvedPartyChecked &&
                n.append("involved_party", "no"))
            : n.append("involved_party", ""),
          i.isLeadershipChecked
            ? ("True" === i.isLeadershipChecked &&
                n.append("leadership", "yes"),
              "False" === i.isLeadershipChecked && n.append("leadership", "no"))
            : n.append("leadership", ""),
          i.isOfficialReportChecked
            ? ("True" === i.isOfficialReportChecked &&
                n.append("official_report", "yes"),
              "False" === i.isOfficialReportChecked &&
                n.append("official_report", "no"))
            : n.append("official_report", ""),
          i.isWitnessChecked
            ? ("True" === i.isWitnessChecked && n.append("witness", "yes"),
              "False" === i.isWitnessChecked && n.append("witness", "no"))
            : n.append("witness", "");
        const a = { headers: { "content-type": "multipart/form-data" } };
        return this.post(this.endpoint, n, a)
          .then((e) => e)
          .catch((e) => {
            throw e;
          });
      }
    }
    var oh = Object(n["l"])({
      name: "RequestClaimIdentities",
      components: {
        "question-disclaimer": ih,
        "insurance-applicant": ro,
        "non-member-side-bar": cm,
        "custom-headline-2": qi,
        "members-side-bar": zu,
        "custom-button": An,
        "multi-select": gd,
        "custom-input": bd,
        "info-alert": Ml,
        "label-output": Et,
        ErrorMessage: nt["a"],
        Required: od,
      },
      setup() {
        const e = Object(hi["c"])(),
          t = Object(Q["b"])(),
          i = Object(n["E"])(ce({ id: "3232", name: "België" })),
          a = Object(n["E"])({ state: "hide" }),
          s = Object(n["E"])(t.getters.user),
          r = Object(n["E"])(!1),
          { scrollToTopOfPage: c } = K(),
          l = Object(n["E"])(),
          o = !!e.params.id,
          d = Object(n["E"])(!1),
          u = Object(n["E"])(!1),
          {
            handleSubmit: b,
            values: m,
            validate: p,
            isSubmitting: v,
          } = Object(nt["e"])({
            initialValues: { victim: { country: i.value } },
          }),
          j = Object(n["E"])([]),
          O = () => {
            Yt.get(lh)
              .getClaimGroupsByPermissions()
              .then((e) => {
                (j.value = e), (m.group = e[0]);
              });
          };
        O();
        const h = Object(n["c"])(() => t.state.claim.claimState),
          g = async () => {
            await p().then((e) => P(e, "RequestClaimIdentities")),
              b(async (e) => {
                const i = Object(n["E"])({
                  id: e.id,
                  group: e.group,
                  groupLeader: s.value,
                  victim: e.victim,
                  victimMember: e.victim.isMember ? e.victimMember : void 0,
                  victimNonMember: e.victim.isMember ? void 0 : e.victimMember,
                  file: e.file,
                  gender: e.victim.gender,
                  victimBirthDate: e.victim.birthDate,
                  victimEmail: e.victim.email,
                });
                t.dispatch("setClaimState", i),
                  t.dispatch("setClaimHolderState", Z.TWO);
              })();
          },
          y = Object(n["E"])(!1),
          f = () => {
            (y.value = !0),
              Yt.get(fd)
                .me()
                .then((e) => {
                  t.dispatch("setUser", e).then(() => {
                    (s.value = t.getters.user), (y.value = !1);
                  });
                });
          },
          k = () => {
            r.value = !0;
          },
          S = () => {
            a.value = { state: "new" };
          },
          E = (e) => {
            m.victim &&
              (_(),
              (m.victimMember = e.id),
              (m.victim.id = e.id),
              (m.victim.firstName = e.firstName),
              (m.victim.lastName = e.lastName),
              (m.victim.street = e.street),
              (m.victim.number = e.number),
              (m.victim.letterBox = e.letterBox),
              (m.victim.postCodeCity = e.postCodeCity),
              (m.victim.birthDate = e.birthDate),
              (m.victim.gender = e.gender),
              (m.victim.email = e.email),
              (m.victim.membershipNumber = e.membershipNumber),
              (m.victim.isMember = e.isMember),
              (m.victim.groupAdminId = e.isMember ? e.groupAdminId : void 0),
              (m.victim.nonMember = e.isMember ? void 0 : e.id),
              (l.value = e.gender)),
              (u.value = !0);
          },
          _ = () => {
            u.value &&
              m.victim &&
              ((m.victimMember = ""),
              (m.victim.id = ""),
              (m.victim.firstName = ""),
              (m.victim.lastName = ""),
              (m.victim.street = ""),
              (m.victim.number = ""),
              (m.victim.letterBox = ""),
              (m.victim.postCodeCity = void 0),
              (m.victim.birthDate = ""),
              (m.victim.email = ""),
              (m.victim.membershipNumber = ""),
              (m.victim.isMember = !1),
              (m.victim.gender = ""),
              (m.victim.bankAccount = "")),
              (u.value = !1),
              (d.value = !0);
          };
        return (
          c(),
          Object(n["U"])(
            () => l.value,
            () => {
              m.victim && (m.victim.gender = l.value);
            }
          ),
          {
            BelgianCitySearchRepository: Xd,
            isMemberSideBarDisplay: r,
            nonMemberSideBarState: a,
            openNonMemberSideBar: S,
            openMemberSideBar: k,
            CountryRepository: Ut,
            isFieldsVisible: d,
            displayFields: _,
            refreshGroups: f,
            isRefreshing: y,
            isSubmitting: v,
            InputTypes: Kt,
            claimState: h,
            addMember: E,
            userData: s,
            onSubmit: g,
            selectedGender: l,
            isEdit: o,
            values: m,
            isSelectedVictim: u,
            claimGroups: j,
          }
        );
      },
    });
    i("45e2");
    const dh = j()(oh, [
      ["render", FO],
      ["__scopeId", "data-v-7f0ed8d6"],
    ]);
    var uh = dh;
    const bh = { class: "mb-5" },
      mh = { class: "md:w-96 xs:w-72" },
      ph = { class: "md:w-96 xs:w-72" },
      vh = { class: "md:w-96 xs:w-72" },
      jh = { class: "md:w-96 xs:w-72" },
      Oh = { class: "flex gap-3 mt-5 items-center" };
    function hh(e, t, i, a, s, r) {
      const c = Object(n["H"])("custom-headline-2"),
        l = Object(n["H"])("custom-input"),
        o = Object(n["H"])("display-content-checkbox"),
        d = Object(n["H"])("back-button"),
        u = Object(n["H"])("custom-button");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          "form",
          {
            id: "RequestInsuranceGeneral",
            onSubmit:
              t[3] ||
              (t[3] = Object(n["Z"])(
                (...t) => e.onSubmit && e.onSubmit(...t),
                ["prevent"]
              )),
          },
          [
            Object(n["h"])("div", bh, [
              Object(n["k"])(c, { text: "Zijn er andere personen betrokken?" }),
              Object(n["h"])("div", null, [
                Object(n["h"])("div", null, [
                  Object(n["k"])(
                    o,
                    {
                      onCheckChanged:
                        t[0] || (t[0] = (t) => e.involvedPartyCheck(t)),
                      text: "Is het ongeval te wijten aan een fout van iemand anders?",
                    },
                    {
                      default: Object(n["W"])(() => [
                        Object(n["h"])("div", mh, [
                          Object(n["k"])(
                            l,
                            {
                              maxlength: 1024,
                              type: e.InputTypes.TEXT,
                              name: "involvedPartyName",
                              label: "Naam",
                              rules: "fillInCheck:@involvedPartyDescription",
                            },
                            null,
                            8,
                            ["type"]
                          ),
                          Object(n["k"])(
                            l,
                            {
                              maxlength: 1024,
                              type: e.InputTypes.TEXT,
                              name: "involvedPartyDescription",
                              label: "Adres",
                              rules: "fillInCheck:@involvedPartyBirthdate",
                            },
                            null,
                            8,
                            ["type"]
                          ),
                          Object(n["k"])(
                            l,
                            {
                              class: "mt-1",
                              type: e.InputTypes.DATE,
                              name: "involvedPartyBirthdate",
                              label: "Geboortedatum",
                            },
                            null,
                            8,
                            ["type"]
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                  Object(n["k"])(
                    o,
                    {
                      onCheckChanged:
                        t[1] || (t[1] = (t) => e.officialReportCheck(t)),
                      text: "Werd er een vaststelling gedaan door een verbaliserende autoriteit (bv politie)?",
                    },
                    {
                      default: Object(n["W"])(() => [
                        Object(n["h"])("div", ph, [
                          Object(n["k"])(
                            l,
                            {
                              maxlength: 1024,
                              type: e.InputTypes.TEXT,
                              name: "officialReportDescription",
                              label: "Welke",
                              rules: "fillInCheck:@pvNumber",
                            },
                            null,
                            8,
                            ["type"]
                          ),
                          Object(n["k"])(
                            l,
                            {
                              maxlength: 30,
                              class: "mt-1",
                              type: e.InputTypes.TEXT,
                              name: "pvNumber",
                              label: "Nummer van proces-verbaal",
                            },
                            null,
                            8,
                            ["type"]
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                  Object(n["k"])(
                    o,
                    {
                      onCheckChanged: t[2] || (t[2] = (t) => e.witnessCheck(t)),
                      text: "Was er een getuige?",
                    },
                    {
                      default: Object(n["W"])(() => [
                        Object(n["h"])("div", vh, [
                          Object(n["k"])(
                            l,
                            {
                              maxlength: 1024,
                              type: e.InputTypes.TEXT,
                              name: "witnessName",
                              label: "Naam",
                            },
                            null,
                            8,
                            ["type"]
                          ),
                        ]),
                        Object(n["h"])("div", jh, [
                          Object(n["k"])(
                            l,
                            {
                              maxlength: 1024,
                              type: e.InputTypes.TEXT,
                              name: "witnessDescription",
                              label: "Adres",
                            },
                            null,
                            8,
                            ["type"]
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]),
            ]),
            Object(n["h"])("div", Oh, [
              Object(n["k"])(
                d,
                {
                  stateName: "setClaimHolderState",
                  backToState: e.ClaimHolderStates.TWO,
                },
                null,
                8,
                ["backToState"]
              ),
              Object(n["k"])(u, { text: "Volgende" }),
            ]),
          ],
          32
        )
      );
    }
    const gh = { class: "mb-3" },
      yh = { style: { "max-width": "700px" } },
      fh = { class: "flex gap-5" },
      kh = Object(n["h"])("label", { class: "ml-1", for: "yes" }, "Ja", -1),
      Sh = Object(n["h"])("label", { class: "ml-1", for: "no" }, "Neen", -1),
      Eh = { key: 0, class: "pb-4 mt-2" };
    function _h(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])("div", gh, [
          Object(n["h"])("div", yh, [
            Object(n["h"])("div", null, [
              Object(n["h"])("strong", null, [
                Object(n["h"])("p", null, Object(n["K"])(e.text), 1),
              ]),
            ]),
          ]),
          Object(n["h"])("div", fh, [
            Object(n["h"])("div", null, [
              Object(n["X"])(
                Object(n["h"])(
                  "input",
                  {
                    type: "radio",
                    id: "yes",
                    value: "yes",
                    "onUpdate:modelValue":
                      t[0] || (t[0] = (t) => (e.isChecked = t)),
                  },
                  null,
                  512
                ),
                [[n["Q"], e.isChecked]]
              ),
              kh,
            ]),
            Object(n["h"])("div", null, [
              Object(n["X"])(
                Object(n["h"])(
                  "input",
                  {
                    type: "radio",
                    id: "no",
                    value: "no",
                    "onUpdate:modelValue":
                      t[1] || (t[1] = (t) => (e.isChecked = t)),
                  },
                  null,
                  512
                ),
                [[n["Q"], e.isChecked]]
              ),
              Sh,
            ]),
          ]),
          "yes" === e.isChecked
            ? (Object(n["y"])(),
              Object(n["g"])("div", Eh, [Object(n["G"])(e.$slots, "default")]))
            : Object(n["f"])("", !0),
        ])
      );
    }
    var Th = Object(n["l"])({
      name: "DisplayContentCheckBox",
      props: { text: { type: String, required: !0 }, initialState: String },
      setup(e, { emit: t }) {
        const i = Object(n["E"])(e.initialState ? e.initialState : "");
        return (
          Object(n["U"])(
            () => i.value,
            () => {
              "yes" === i.value
                ? t("checkChanged", "True")
                : "no" === i.value
                ? t("checkChanged", "False")
                : t("checkChanged", null);
            }
          ),
          { isChecked: i }
        );
      },
    });
    const xh = j()(Th, [["render", _h]]);
    var wh = xh,
      Ih = Object(n["l"])({
        name: "AccidentDetails",
        components: {
          "display-content-checkbox": wh,
          "custom-headline-2": qi,
          "custom-button": An,
          "custom-input": bd,
          "back-button": eu,
        },
        setup() {
          const { scrollToTopOfPage: e } = K(),
            t = Object(hi["c"])(),
            i = Object(Q["b"])(),
            a = !!t.params.id,
            {
              handleSubmit: s,
              values: r,
              validate: c,
              isSubmitting: l,
            } = Object(nt["e"])({ initialValues: {} }),
            o = Object(n["c"])(() => i.state.claim.claimState),
            d = async () => {
              await c().then((e) => P(e, "RequestInsuranceGeneral")),
                s(async (e) => {
                  const t = Object(n["E"])({
                    involvedPartyName: e.involvedPartyName
                      ? e.involvedPartyName
                      : void 0,
                    involvedPartyDescription: e.involvedPartyDescription
                      ? e.involvedPartyDescription
                      : void 0,
                    involvedPartyBirthdate: e.involvedPartyBirthdate
                      ? e.involvedPartyBirthdate
                      : void 0,
                    officialReportDescription: e.officialReportDescription
                      ? e.officialReportDescription
                      : void 0,
                    pvNumber: e.pvNumber ? e.pvNumber : void 0,
                    witnessName: e.witnessName ? e.witnessName : void 0,
                    witnessDescription: e.witnessDescription
                      ? e.witnessDescription
                      : void 0,
                    isWitnessChecked: e.isWitnessChecked
                      ? e.isWitnessChecked
                      : null,
                    isOfficialReportChecked: e.isOfficialReportChecked
                      ? e.isOfficialReportChecked
                      : null,
                    isInvolvedPartyChecked: e.isInvolvedPartyChecked
                      ? e.isInvolvedPartyChecked
                      : null,
                  });
                  i.dispatch("setClaimState", { ...o.value, ...t.value }),
                    i.dispatch("setClaimHolderState", Z.FOUR);
                })();
            };
          e();
          const u = (e) => {
              r.isInvolvedPartyChecked = e;
            },
            b = (e) => {
              r.isOfficialReportChecked = e;
            },
            m = (e) => {
              r.isWitnessChecked = e;
            };
          return {
            BelgianCitySearchRepository: Xd,
            ClaimHolderStates: Z,
            isSubmitting: l,
            InputTypes: Kt,
            claimState: o,
            onSubmit: d,
            isEdit: a,
            values: r,
            witnessCheck: m,
            officialReportCheck: b,
            involvedPartyCheck: u,
          };
        },
      });
    i("31b9");
    const Ch = j()(Ih, [
      ["render", hh],
      ["__scopeId", "data-v-462882a2"],
    ]);
    var Dh = Ch;
    const Nh = { class: "mb-5" },
      Mh = { style: { "max-width": "505px" } },
      zh = { class: "mt-3" },
      Ah = Object(n["j"])(" Het ongeval gebeurde: "),
      Hh = ["id", "name", "value"],
      Rh = ["for"],
      Bh = ["id", "name", "value"],
      qh = ["for"],
      Vh = { style: { "margin-left": "1.3em" } },
      Lh = { class: "h-0 invisible" },
      Gh = { class: "mt-3" },
      Ph = { class: "mb-2" },
      Kh = { style: { "max-width": "1025px" } },
      Yh = Object(n["h"])(
        "strong",
        null,
        [
          Object(n["h"])(
            "label",
            null,
            "Is er schade aan een medisch hulpmiddel? (bril, hoorapparaat, rolstoel...)"
          ),
        ],
        -1
      ),
      Uh = { style: { "max-width": "505px" } },
      Fh = { class: "invisible" },
      Wh = { class: "md:w-96 xs:w-72" },
      Xh = { class: "flex gap-3 mt-5 items-center" };
    function Zh(e, t, i, a, s, r) {
      const c = Object(n["H"])("custom-headline-2"),
        l = Object(n["H"])("custom-input"),
        o = Object(n["H"])("required"),
        d = Object(n["H"])("ErrorMessage"),
        u = Object(n["H"])("display-content-checkbox"),
        b = Object(n["H"])("back-button"),
        m = Object(n["H"])("custom-button");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          "form",
          {
            id: "RequestInsuranceGeneral",
            onSubmit:
              t[3] ||
              (t[3] = Object(n["Z"])(
                (...t) => e.onSubmit && e.onSubmit(...t),
                ["prevent"]
              )),
          },
          [
            Object(n["h"])("div", Nh, [
              Object(n["k"])(c, { text: "Wat is er gebeurd?" }),
              Object(n["h"])("div", Mh, [
                Object(n["k"])(
                  l,
                  {
                    max: e.maxDate,
                    class: "xs:w-72 md:w-100",
                    type: e.InputTypes.DATE,
                    rules: "required",
                    name: "dateOfAccident",
                    label: "Datum van het ongeval",
                  },
                  null,
                  8,
                  ["max", "type"]
                ),
                Object(n["h"])("div", zh, [
                  Object(n["h"])("form", null, [
                    Object(n["h"])("strong", null, [
                      Object(n["h"])("label", null, [
                        Ah,
                        Object(n["k"])(o, { rules: "required" }),
                      ]),
                    ]),
                    Object(n["X"])(
                      Object(n["k"])(
                        l,
                        {
                          type: "activityTypes",
                          rules: "required",
                          name: "activityTypes",
                        },
                        null,
                        512
                      ),
                      [[n["S"], !1]]
                    ),
                    Object(n["h"])("div", null, [
                      Object(n["X"])(
                        Object(n["h"])(
                          "input",
                          {
                            id: e.ActivityTypes.REGULAR,
                            "onUpdate:modelValue":
                              t[0] ||
                              (t[0] = (t) => (e.selectedActivityType = t)),
                            class: "cursor-pointer",
                            type: "radio",
                            name: e.ActivityTypes.REGULAR,
                            value: e.ActivityTypes.REGULAR,
                          },
                          null,
                          8,
                          Hh
                        ),
                        [[n["Q"], e.selectedActivityType]]
                      ),
                      Object(n["h"])(
                        "label",
                        { for: e.ActivityTypes.REGULAR, class: "inline ml-2" },
                        "tijdens de activiteit van onze groep.",
                        8,
                        Rh
                      ),
                    ]),
                    Object(n["h"])("div", null, [
                      Object(n["h"])("div", null, [
                        Object(n["X"])(
                          Object(n["h"])(
                            "input",
                            {
                              id: e.ActivityTypes.TRANSPORT,
                              "onUpdate:modelValue":
                                t[1] ||
                                (t[1] = (t) => (e.selectedActivityType = t)),
                              class: "cursor-pointer",
                              type: "radio",
                              name: e.ActivityTypes.TRANSPORT,
                              value: e.ActivityTypes.TRANSPORT,
                            },
                            null,
                            8,
                            Bh
                          ),
                          [[n["Q"], e.selectedActivityType]]
                        ),
                        Object(n["h"])(
                          "label",
                          {
                            for: e.ActivityTypes.TRANSPORT,
                            class: "ml-2 xs:max-w-xs xs:pt-5",
                          },
                          "op de heen- of terugweg van of naar de activiteit.",
                          8,
                          qh
                        ),
                      ]),
                      Object(n["h"])("div", Vh, [
                        Object(n["k"])(
                          l,
                          {
                            maxlength: 30,
                            class: "xs:w-64 md:w-100",
                            type: e.InputTypes.TEXT,
                            placeholder:
                              "Hoe gebeurde de verplaatsing? (te voet, met de fiets...)",
                            name: "usedTransport",
                          },
                          null,
                          8,
                          ["type"]
                        ),
                      ]),
                    ]),
                    Object(n["h"])(
                      "label",
                      Lh,
                      Object(n["K"])(e.selectedActivityType),
                      1
                    ),
                    Object(n["k"])(d, {
                      name: "activityTypes",
                      class: "text-red text-sm block my-2 w-80",
                    }),
                  ]),
                ]),
                Object(n["k"])(
                  l,
                  {
                    maxlength: 1024,
                    textAreaWidth: "xs:w-72 md:w-100 md:min-w-full h-11",
                    class: "mt-3 xs:w-80 md:w-100",
                    type: e.InputTypes.TEXT_AREA,
                    rules: "required",
                    name: "activity",
                    label:
                      "Geef een korte beschrijving van de scoutsactiviteit.",
                  },
                  null,
                  8,
                  ["type"]
                ),
              ]),
              Object(n["h"])("div", Gh, [
                Object(n["h"])("form", null, [
                  Object(n["h"])("div", Ph, [
                    Object(n["h"])("div", Kh, [
                      Object(n["k"])(
                        l,
                        {
                          maxlength: 1024,
                          class: "mt-3 xs:w-80 md:w-100",
                          type: e.InputTypes.TEXT_AREA,
                          rules: "required",
                          name: "description",
                          label:
                            "Geef een uitgebreide beschrijving van het ongeval (oorzaken, omstandigheden, gevolgen, opgelopen verwondingen, schade).",
                          textAreaWidth: "xs:w-72 md:w-100 md:min-w-full h-36",
                        },
                        null,
                        8,
                        ["type"]
                      ),
                    ]),
                  ]),
                  Yh,
                  Object(n["h"])("div", null, [
                    Object(n["h"])("div", Uh, [
                      Object(n["k"])(
                        l,
                        {
                          maxlength: 128,
                          class: "xs:w-80 md:w-100",
                          placeholder: "Welk hulpmiddel?",
                          type: e.InputTypes.TEXT,
                          name: "damageType",
                        },
                        null,
                        8,
                        ["type"]
                      ),
                      Object(n["h"])(
                        "label",
                        Fh,
                        Object(n["K"])(e.isDamage),
                        1
                      ),
                    ]),
                  ]),
                  Object(n["k"])(
                    u,
                    {
                      onCheckChanged:
                        t[2] || (t[2] = (t) => e.leaderShipCheck(t)),
                      text: "Hield iemand van de leiding toezicht op het moment dat het ongeval plaatsvond?",
                    },
                    {
                      default: Object(n["W"])(() => [
                        Object(n["h"])("div", Wh, [
                          Object(n["k"])(
                            l,
                            {
                              type: e.InputTypes.TEXT,
                              name: "leadershipDescription",
                              placeholder: "Naam",
                            },
                            null,
                            8,
                            ["type"]
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]),
            ]),
            Object(n["h"])("div", Xh, [
              Object(n["k"])(
                b,
                {
                  stateName: "setClaimHolderState",
                  backToState: e.ClaimHolderStates.ONE,
                },
                null,
                8,
                ["backToState"]
              ),
              Object(n["k"])(m, { text: "Volgende" }),
            ]),
          ],
          32
        )
      );
    }
    var Jh;
    (function (e) {
      (e["GLASSES"] = "GLASSES"), (e["MATERIAL"] = "MATERIAL");
    })(Jh || (Jh = {}));
    var $h = Object(n["l"])({
      name: "AccidentDetails",
      components: {
        "display-content-checkbox": wh,
        "custom-headline-2": qi,
        "custom-button": An,
        "custom-input": bd,
        "back-button": eu,
        ErrorMessage: nt["a"],
        Required: od,
      },
      setup() {
        const e = A()().format("YYYY-MM-DD"),
          { scrollToTopOfPage: t } = K(),
          i = Object(hi["c"])(),
          a = Object(Q["b"])(),
          s = !!i.params.id,
          r = Object(n["E"])(),
          c = Object(n["E"])([]),
          {
            handleSubmit: l,
            values: o,
            validate: d,
            isSubmitting: u,
          } = Object(nt["e"])(),
          b = Object(n["c"])(() => a.state.claim.claimState),
          m = async () => {
            await d().then((e) => P(e, "RequestInsuranceGeneral")),
              l(async (e) => {
                const t = Object(n["E"])({
                  dateOfAccident: e.dateOfAccident,
                  activity: e.activity,
                  activityTypes: [r.value],
                  isDamage: 1 === c.value.length,
                  description: e.description,
                  usedTransport: e.usedTransport,
                  damage: e.damage,
                  leadershipDescription: e.leadershipDescription
                    ? e.leadershipDescription
                    : void 0,
                  damageType: e.damageType ? e.damageType : void 0,
                  isLeadershipChecked: e.isLeadershipChecked
                    ? e.isLeadershipChecked
                    : null,
                });
                a.dispatch("setClaimState", { ...b.value, ...t.value }),
                  a.dispatch("setClaimHolderState", Z.THREE);
              })();
          };
        t(),
          Object(n["U"])(
            () => o.usedTransport,
            () => {
              o.usedTransport &&
                o.usedTransport.length > 0 &&
                (r.value = th.TRANSPORT);
            }
          ),
          Object(n["U"])(
            () => r.value,
            () => {
              (o.activityTypes = [r.value]), (o.usedTransport = void 0);
            }
          ),
          Object(n["U"])(
            () => o.damage,
            () => {
              o.damage && o.damage.length > 0
                ? 0 === c.value.length && (c.value = [!0])
                : c.value.includes(!0) && (c.value = []);
            }
          );
        const p = (e) => {
          o.isLeadershipChecked = e;
        };
        return {
          selectedActivityType: r,
          ClaimHolderStates: Z,
          ActivityTypes: th,
          isSubmitting: u,
          DamageTypes: Jh,
          InputTypes: Kt,
          claimState: b,
          onSubmit: m,
          isDamage: c,
          isEdit: s,
          values: o,
          maxDate: e,
          leaderShipCheck: p,
        };
      },
    });
    const Qh = j()($h, [["render", Zh]]);
    var eg = Qh;
    const tg = (e) => (
        Object(n["B"])("data-v-6673239e"), (e = e()), Object(n["z"])(), e
      ),
      ig = { key: 0 },
      ng = { class: "mt-4 mb-4" },
      ag = { key: 0 },
      sg = tg(() =>
        Object(n["h"])("p", { class: "font-semibold" }, "Administratie", -1)
      ),
      rg = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      cg = { key: 1, class: "mt-2 mb-4" },
      lg = { class: "mt-2" },
      og = tg(() =>
        Object(n["h"])(
          "p",
          { class: "font-semibold" },
          "Wie doet de aangifte?",
          -1
        )
      ),
      dg = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      ug = { key: 0 },
      bg = { key: 1 },
      mg = { class: "mt-2" },
      pg = tg(() =>
        Object(n["h"])(
          "p",
          { class: "font-semibold" },
          "Wie is het slachtoffer?",
          -1
        )
      ),
      vg = { key: 0, class: "md:ml-20 xs:ml-5 sm:ml-5" },
      jg = { class: "mb-0" },
      Og = tg(() => Object(n["h"])("strong", null, "Geboortedatum", -1)),
      hg = { class: "mb-0" },
      gg = tg(() => Object(n["h"])("strong", null, "Geslacht", -1)),
      yg = { class: "mt-2" },
      fg = tg(() =>
        Object(n["h"])(
          "p",
          { class: "font-semibold" },
          "Wat is er gebeurd?",
          -1
        )
      ),
      kg = { class: "md:ml-20 xs:ml-5 sm:ml-5" },
      Sg = tg(() =>
        Object(n["h"])(
          "div",
          null,
          [Object(n["h"])("strong", null, "Het ongeval gebeurde:")],
          -1
        )
      ),
      Eg = { key: 0 },
      _g = { class: "mb-0" },
      Tg = Object(n["j"])(
        " op de heen- of terugweg van of naar de activiteit. "
      ),
      xg = { class: "mb-0" },
      wg = tg(() =>
        Object(n["h"])(
          "strong",
          null,
          "Geef een uitgebreide beschrijving van het ongeval (oorzaken, omstandigheden, gevolgen, opgelopen verwondingen, schade).",
          -1
        )
      ),
      Ig = {
        style: { "max-width": "725px !important", "text-align": "justify" },
      },
      Cg = tg(() =>
        Object(n["h"])("strong", null, "Schade aan medisch hulpmiddel", -1)
      ),
      Dg = tg(() =>
        Object(n["h"])(
          "strong",
          null,
          "Hield iemand van de leiding toezicht op het moment dat het ongeval plaatsvond?",
          -1
        )
      ),
      Ng = { key: 0 },
      Mg = Object(n["j"])(" Ja "),
      zg = { key: 0 },
      Ag = { key: 1 },
      Hg = { key: 2 },
      Rg = { class: "mt-2" },
      Bg = tg(() =>
        Object(n["h"])(
          "p",
          { class: "font-semibold" },
          "Zijn er andere personen betrokken?",
          -1
        )
      ),
      qg = { class: "md:ml-20 xs:ml-5 sm:ml-5 mb-1" },
      Vg = tg(() =>
        Object(n["h"])(
          "strong",
          null,
          "Is het ongeval te wijten aan een fout van iemand anders?",
          -1
        )
      ),
      Lg = { key: 0 },
      Gg = { key: 1 },
      Pg = { key: 2 },
      Kg = { key: 0 },
      Yg = { key: 0 },
      Ug = { key: 1 },
      Fg = { key: 2, class: "mb-0" },
      Wg = tg(() => Object(n["h"])("strong", null, "Geboortedatum", -1)),
      Xg = { class: "md:ml-20 xs:ml-5 sm:ml-5 mb-1" },
      Zg = tg(() =>
        Object(n["h"])(
          "strong",
          null,
          "Werd er een vaststelling gedaan door een verbaliserende autoriteit (bv politie)?",
          -1
        )
      ),
      Jg = { key: 0 },
      $g = { key: 1 },
      Qg = { key: 2 },
      ey = { key: 3 },
      ty = { key: 0 },
      iy = { key: 4 },
      ny = { class: "md:ml-20 xs:ml-5 sm:ml-5 mb-1" },
      ay = tg(() => Object(n["h"])("strong", null, "Was er een getuige?", -1)),
      sy = { key: 0 },
      ry = { key: 1 },
      cy = { key: 2 },
      ly = { key: 3 },
      oy = { key: 0 },
      dy = { key: 4 },
      uy = { key: 2, class: "mt-2 mb-4" },
      by = { key: 3 },
      my = { class: "md:flex md:gap-5" },
      py = { class: "mt-4" },
      vy = tg(() =>
        Object(n["h"])(
          "strong",
          null,
          [
            Object(n["j"])("Opgemaakt te "),
            Object(n["h"])("span", { class: "text-red ml-1" }, "*"),
          ],
          -1
        )
      ),
      jy = { class: "mt-4" },
      Oy = tg(() =>
        Object(n["h"])(
          "strong",
          null,
          [
            Object(n["j"])("Op "),
            Object(n["h"])("span", { class: "text-red ml-1" }, "*"),
          ],
          -1
        )
      ),
      hy = { class: "mt-3 mb-6" },
      gy = { key: 4, class: "mt-4" },
      yy = tg(() =>
        Object(n["h"])("strong", null, "Datum van de aangifte:", -1)
      ),
      fy = { class: "flex gap-3 mt-2 items-center" };
    function ky(e, t, i, a, s, r) {
      const c = Object(n["H"])("forbidden"),
        l = Object(n["H"])("navigation-arrow"),
        o = Object(n["H"])("custom-input"),
        d = Object(n["H"])("custom-button"),
        u = Object(n["H"])("custom-headline-2"),
        b = Object(n["H"])("file-upload"),
        m = Object(n["H"])("label-output"),
        p = Object(n["H"])("phone-number"),
        v = Object(n["H"])("responsible-member-detail"),
        j = Object(n["H"])("back-button");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            e.isForbidden
              ? (Object(n["y"])(),
                Object(n["g"])("div", ig, [Object(n["k"])(c)]))
              : Object(n["f"])("", !0),
            e.checkVisibility()
              ? (Object(n["y"])(),
                Object(n["g"])(
                  "form",
                  {
                    key: 1,
                    id: "ClaimDetail",
                    onSubmit:
                      t[0] ||
                      (t[0] = Object(n["Z"])(
                        (...t) => e.onSubmit && e.onSubmit(...t),
                        ["prevent"]
                      )),
                  },
                  [
                    Object(n["X"])(
                      Object(n["h"])(
                        "div",
                        ng,
                        [
                          Object(n["k"])(l, {
                            to: "/home/schadeaangiftes",
                            text: "Terug naar overzicht",
                          }),
                        ],
                        512
                      ),
                      [[n["S"], e.isEdit]]
                    ),
                    e.isEdit &&
                    (e.can("insurances.view_insuranceclaim_case_number") ||
                      e.can("insurances.view_insuranceclaim_note"))
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", ag, [
                          sg,
                          Object(n["h"])("div", rg, [
                            Object(n["X"])(
                              Object(n["k"])(
                                o,
                                {
                                  disabled: !e.can(
                                    "insurances.add_insuranceclaim_case_number"
                                  ),
                                  value: e.details.dossierNumber,
                                  class: "xs:w-72 md:w-96",
                                  type: e.InputTypes.TEXT,
                                  label: "Dossiernummer",
                                  name: "dossierNumber",
                                },
                                null,
                                8,
                                ["disabled", "value", "type"]
                              ),
                              [
                                [
                                  n["S"],
                                  e.can(
                                    "insurances.view_insuranceclaim_case_number"
                                  ),
                                ],
                              ]
                            ),
                            Object(n["X"])(
                              Object(n["k"])(
                                o,
                                {
                                  disabled: !e.can(
                                    "insurances.add_insuranceclaim_note"
                                  ),
                                  value: e.details.note,
                                  class: "xs:w-72 md:w-96",
                                  type: e.InputTypes.TEXT_AREA,
                                  label: "Administratieve commentaar",
                                  name: "note",
                                },
                                null,
                                8,
                                ["disabled", "value", "type"]
                              ),
                              [
                                [
                                  n["S"],
                                  e.can("insurances.view_insuranceclaim_note"),
                                ],
                              ]
                            ),
                            Object(n["k"])(d, { text: "Opslaan" }),
                          ]),
                        ]))
                      : Object(n["f"])("", !0),
                    e.isEdit
                      ? Object(n["f"])("", !0)
                      : (Object(n["y"])(),
                        Object(n["g"])("div", cg, [
                          Object(n["h"])("div", null, [
                            Object(n["k"])(u, { text: "Bijlage" }),
                            Object(n["h"])("div", null, [
                              Object(n["k"])(
                                b,
                                {
                                  allowedFiles:
                                    "application/pdf,.jpg,.jpeg,.png",
                                },
                                null,
                                8,
                                ["allowedFiles"]
                              ),
                            ]),
                          ]),
                        ])),
                    Object(n["k"])(u, { text: "Overzicht" }),
                    Object(n["h"])("div", lg, [
                      og,
                      Object(n["h"])("div", dg, [
                        e.isEdit
                          ? Object(n["f"])("", !0)
                          : (Object(n["y"])(),
                            Object(n["g"])("div", ug, [
                              e.claimState.group
                                ? (Object(n["y"])(),
                                  Object(n["e"])(
                                    m,
                                    {
                                      key: 0,
                                      label: "",
                                      text:
                                        e.claimState.group.name +
                                        " - " +
                                        e.claimState.group.id,
                                    },
                                    null,
                                    8,
                                    ["text"]
                                  ))
                                : Object(n["f"])("", !0),
                              e.userData.firstName
                                ? (Object(n["y"])(),
                                  Object(n["e"])(
                                    m,
                                    {
                                      key: 1,
                                      label: "",
                                      text:
                                        e.userData.firstName +
                                        " " +
                                        e.userData.lastName,
                                    },
                                    null,
                                    8,
                                    ["text"]
                                  ))
                                : Object(n["f"])("", !0),
                              e.userData.email
                                ? (Object(n["y"])(),
                                  Object(n["e"])(
                                    m,
                                    {
                                      key: 2,
                                      label: "",
                                      text: e.userData.email,
                                    },
                                    null,
                                    8,
                                    ["text"]
                                  ))
                                : Object(n["f"])("", !0),
                              Object(n["k"])(
                                p,
                                {
                                  hasWarning: !0,
                                  phoneNumber: e.userData.phoneNumber,
                                },
                                null,
                                8,
                                ["phoneNumber"]
                              ),
                            ])),
                        e.claimState.declarant
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", bg, [
                              Object(n["k"])(
                                v,
                                {
                                  title: "",
                                  "responsible-member": e.claimState.declarant,
                                },
                                null,
                                8,
                                ["responsible-member"]
                              ),
                            ]))
                          : Object(n["f"])("", !0),
                      ]),
                    ]),
                    Object(n["h"])("div", mg, [
                      pg,
                      e.claimState.victim
                        ? (Object(n["y"])(),
                          Object(n["g"])("div", vg, [
                            Object(n["h"])("div", null, [
                              Object(n["h"])(
                                "p",
                                null,
                                Object(n["K"])(
                                  e.claimState.victim.firstName +
                                    " " +
                                    e.claimState.victim.lastName
                                ),
                                1
                              ),
                            ]),
                            Object(n["h"])("div", null, [
                              Object(n["h"])(
                                "p",
                                null,
                                Object(n["K"])(
                                  e.claimState.victim.street +
                                    " " +
                                    e.claimState.victim.number +
                                    (e.claimState.victim.letterBox
                                      ? " Bus " + e.claimState.victim.letterBox
                                      : "") +
                                    ", " +
                                    (e.claimState.victim.postcode
                                      ? e.claimState.victim.postcode
                                      : e.claimState.victim.postCodeCity
                                          .postalCode) +
                                    " " +
                                    (e.claimState.victim.city
                                      ? e.claimState.victim.city
                                      : e.claimState.victim.postCodeCity.city) +
                                    " " +
                                    (e.claimState.victim.country
                                      ? e.claimState.victim.country.name
                                      : "")
                                ),
                                1
                              ),
                            ]),
                            Object(n["h"])("div", null, [
                              Object(n["h"])(
                                "p",
                                null,
                                Object(n["K"])(e.claimState.victim.email),
                                1
                              ),
                            ]),
                            Object(n["h"])("p", jg, [
                              Og,
                              Object(n["j"])(
                                " " +
                                  Object(n["K"])(
                                    e
                                      .moment(e.claimState.victim.birthDate)
                                      .format("DD-MM-YYYY")
                                  ),
                                1
                              ),
                            ]),
                            Object(n["h"])("p", hg, [
                              gg,
                              Object(n["j"])(
                                " " +
                                  Object(n["K"])(
                                    e.claimState.victim.gender
                                      ? e.genderDisplay(
                                          e.claimState.victim.gender
                                        )
                                      : ""
                                  ),
                                1
                              ),
                            ]),
                            e.claimState.victim.membershipNumber
                              ? (Object(n["y"])(),
                                Object(n["e"])(
                                  m,
                                  {
                                    key: 0,
                                    label: "Lidnummer",
                                    text: e.claimState.victim.membershipNumber,
                                  },
                                  null,
                                  8,
                                  ["text"]
                                ))
                              : Object(n["f"])("", !0),
                            Object(n["k"])(
                              m,
                              {
                                label: "Bankrekeningnummer",
                                text: e.claimState.victim.bankAccount
                                  ? e.claimState.victim.bankAccount
                                  : e.claimState.bankAccount
                                  ? e.claimState.bankAccount
                                  : "Leeg",
                              },
                              null,
                              8,
                              ["text"]
                            ),
                          ]))
                        : Object(n["f"])("", !0),
                    ]),
                    Object(n["h"])("div", yg, [
                      fg,
                      Object(n["h"])("div", kg, [
                        Object(n["k"])(
                          m,
                          {
                            label: "Datum van het ongeval",
                            text: e.claimState.dateOfAccident,
                          },
                          null,
                          8,
                          ["text"]
                        ),
                        Sg,
                        e.claimState.activityTypes
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", Eg, [
                              Object(n["X"])(
                                Object(n["h"])(
                                  "p",
                                  _g,
                                  "tijdens de activiteit van onze groep.",
                                  512
                                ),
                                [
                                  [
                                    n["S"],
                                    e.claimState.activityTypes.includes(
                                      e.ActivityTypes.REGULAR
                                    ),
                                  ],
                                ]
                              ),
                              Object(n["X"])(
                                Object(n["h"])(
                                  "div",
                                  null,
                                  [
                                    Tg,
                                    Object(n["X"])(
                                      Object(n["h"])(
                                        "p",
                                        { class: "mb-0" },
                                        "Gebruikt voertuig: " +
                                          Object(n["K"])(
                                            e.claimState.usedTransport
                                          ),
                                        513
                                      ),
                                      [[n["S"], e.claimState.usedTransport]]
                                    ),
                                  ],
                                  512
                                ),
                                [
                                  [
                                    n["S"],
                                    e.claimState.activityTypes.includes(
                                      e.ActivityTypes.TRANSPORT
                                    ),
                                  ],
                                ]
                              ),
                              Object(n["X"])(
                                Object(n["h"])(
                                  "p",
                                  xg,
                                  "Tijdens een activiteit op verplaatsing",
                                  512
                                ),
                                [
                                  [
                                    n["S"],
                                    e.claimState.activityTypes.includes(
                                      e.ActivityTypes.IRREGULAR_LOCATION
                                    ),
                                  ],
                                ]
                              ),
                            ]))
                          : Object(n["f"])("", !0),
                        Object(n["k"])(
                          m,
                          {
                            label:
                              "Geef een korte beschrijving van de scoutsactiviteit.",
                            text: e.claimState.activity,
                          },
                          null,
                          8,
                          ["text"]
                        ),
                        Object(n["h"])("div", null, [
                          wg,
                          Object(n["h"])("div", null, [
                            Object(n["h"])(
                              "p",
                              Ig,
                              Object(n["K"])(e.claimState.description),
                              1
                            ),
                          ]),
                        ]),
                        Object(n["X"])(
                          Object(n["h"])(
                            "div",
                            null,
                            [
                              Cg,
                              Object(n["h"])("div", null, [
                                Object(n["X"])(
                                  Object(n["h"])(
                                    "label",
                                    { class: "block" },
                                    Object(n["K"])(e.claimState.damageType),
                                    513
                                  ),
                                  [[n["S"], e.claimState.damageType]]
                                ),
                              ]),
                            ],
                            512
                          ),
                          [[n["S"], e.claimState.damageType]]
                        ),
                        Object(n["h"])("div", null, [
                          Dg,
                          "yes" === e.claimState.isLeadershipChecked ||
                          "True" === e.claimState.isLeadershipChecked
                            ? (Object(n["y"])(),
                              Object(n["g"])("div", Ng, [
                                Mg,
                                e.claimState.leadershipDescription
                                  ? (Object(n["y"])(),
                                    Object(n["g"])(
                                      "p",
                                      zg,
                                      Object(n["K"])(
                                        e.claimState.leadershipDescription
                                      ),
                                      1
                                    ))
                                  : Object(n["f"])("", !0),
                              ]))
                            : Object(n["f"])("", !0),
                          "no" === e.claimState.isLeadershipChecked ||
                          "False" === e.claimState.isLeadershipChecked
                            ? (Object(n["y"])(),
                              Object(n["g"])("div", Ag, " Neen "))
                            : Object(n["f"])("", !0),
                          null === e.claimState.isLeadershipChecked
                            ? (Object(n["y"])(),
                              Object(n["g"])("div", Hg, " Leeg "))
                            : Object(n["f"])("", !0),
                        ]),
                      ]),
                    ]),
                    Object(n["h"])("div", Rg, [
                      Bg,
                      Object(n["h"])("div", qg, [
                        Vg,
                        "yes" === e.claimState.isInvolvedPartyChecked ||
                        "True" === e.claimState.isInvolvedPartyChecked
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", Lg, " Ja "))
                          : Object(n["f"])("", !0),
                        "no" === e.claimState.isInvolvedPartyChecked ||
                        "False" === e.claimState.isInvolvedPartyChecked
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", Gg, " Neen "))
                          : Object(n["f"])("", !0),
                        null === e.claimState.isInvolvedPartyChecked
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", Pg, " Leeg "))
                          : Object(n["f"])("", !0),
                        Object(n["h"])("div", null, [
                          "yes" === e.claimState.isInvolvedPartyChecked ||
                          "True" === e.claimState.isInvolvedPartyChecked
                            ? (Object(n["y"])(),
                              Object(n["g"])("div", Kg, [
                                e.claimState.involvedPartyName
                                  ? (Object(n["y"])(),
                                    Object(n["g"])(
                                      "p",
                                      Yg,
                                      Object(n["K"])(
                                        e.claimState.involvedPartyName
                                      ),
                                      1
                                    ))
                                  : Object(n["f"])("", !0),
                              ]))
                            : Object(n["f"])("", !0),
                          e.claimState.involvedPartyDescription
                            ? (Object(n["y"])(),
                              Object(n["g"])("div", Ug, [
                                Object(n["h"])(
                                  "p",
                                  null,
                                  Object(n["K"])(
                                    e.claimState.involvedPartyDescription
                                  ),
                                  1
                                ),
                              ]))
                            : Object(n["f"])("", !0),
                          e.claimState.involvedPartyBirthdate
                            ? (Object(n["y"])(),
                              Object(n["g"])("p", Fg, [
                                Wg,
                                Object(n["j"])(
                                  " " +
                                    Object(n["K"])(
                                      e
                                        .moment(
                                          e.claimState.involvedPartyBirthdate
                                        )
                                        .format("DD-MM-YYYY")
                                    ),
                                  1
                                ),
                              ]))
                            : Object(n["f"])("", !0),
                        ]),
                      ]),
                      Object(n["h"])("div", Xg, [
                        Zg,
                        "yes" === e.claimState.isOfficialReportChecked ||
                        "True" === e.claimState.isOfficialReportChecked
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", Jg, " Ja "))
                          : Object(n["f"])("", !0),
                        "no" === e.claimState.isOfficialReportChecked ||
                        "False" === e.claimState.isOfficialReportChecked
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", $g, " Neen "))
                          : Object(n["f"])("", !0),
                        null === e.claimState.isOfficialReportChecked
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", Qg, " Leeg "))
                          : Object(n["f"])("", !0),
                        "yes" === e.claimState.isOfficialReportChecked ||
                        "True" === e.claimState.isOfficialReportChecked
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", ey, [
                              e.claimState.officialReportDescription
                                ? (Object(n["y"])(),
                                  Object(n["g"])(
                                    "p",
                                    ty,
                                    Object(n["K"])(
                                      e.claimState.officialReportDescription
                                    ),
                                    1
                                  ))
                                : Object(n["f"])("", !0),
                            ]))
                          : Object(n["f"])("", !0),
                        e.claimState.pvNumber
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", iy, [
                              Object(n["h"])(
                                "p",
                                null,
                                Object(n["K"])(e.claimState.pvNumber),
                                1
                              ),
                            ]))
                          : Object(n["f"])("", !0),
                      ]),
                      Object(n["h"])("div", ny, [
                        ay,
                        "yes" === e.claimState.isWitnessChecked ||
                        "True" === e.claimState.isWitnessChecked
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", sy, " Ja "))
                          : Object(n["f"])("", !0),
                        "no" === e.claimState.isWitnessChecked ||
                        "False" === e.claimState.isWitnessChecked
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", ry, " Neen "))
                          : Object(n["f"])("", !0),
                        null === e.claimState.isWitnessChecked
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", cy, " Leeg "))
                          : Object(n["f"])("", !0),
                        "yes" === e.claimState.isWitnessChecked ||
                        "True" === e.claimState.isWitnessChecked
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", ly, [
                              e.claimState.witnessName
                                ? (Object(n["y"])(),
                                  Object(n["g"])(
                                    "p",
                                    oy,
                                    Object(n["K"])(e.claimState.witnessName),
                                    1
                                  ))
                                : Object(n["f"])("", !0),
                            ]))
                          : Object(n["f"])("", !0),
                        e.claimState.witnessDescription
                          ? (Object(n["y"])(),
                            Object(n["g"])("div", dy, [
                              Object(n["h"])(
                                "p",
                                null,
                                Object(n["K"])(e.claimState.witnessDescription),
                                1
                              ),
                            ]))
                          : Object(n["f"])("", !0),
                      ]),
                    ]),
                    e.claimState.attachmentName
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", uy, [
                          Object(n["h"])("div", null, [
                            Object(n["k"])(u, { text: "Bijlage" }),
                            Object(n["h"])(
                              "div",
                              null,
                              Object(n["K"])(e.claimState.attachmentName),
                              1
                            ),
                          ]),
                        ]))
                      : Object(n["f"])("", !0),
                    e.isDetailPage
                      ? Object(n["f"])("", !0)
                      : (Object(n["y"])(),
                        Object(n["g"])("div", by, [
                          Object(n["h"])("div", null, [
                            Object(n["h"])("div", my, [
                              Object(n["h"])("div", py, [
                                vy,
                                Object(n["k"])(
                                  o,
                                  {
                                    class: "xs:w-72 md:w-96",
                                    type: e.InputTypes.TEXT,
                                    rules: "required",
                                    name: "declarantCity",
                                  },
                                  null,
                                  8,
                                  ["type"]
                                ),
                              ]),
                              Object(n["h"])("div", jy, [
                                Oy,
                                Object(n["k"])(
                                  o,
                                  {
                                    class: "xs:w-72 md:w-96",
                                    type: e.InputTypes.DATE,
                                    rules: "required",
                                    name: "DECLARANT_DATE",
                                  },
                                  null,
                                  8,
                                  ["type"]
                                ),
                              ]),
                            ]),
                            Object(n["h"])("div", hy, [
                              Object(n["k"])(
                                m,
                                {
                                  label: "Identiteit van de aangever",
                                  class: "mt-1",
                                  text:
                                    e.userData.lastName +
                                    " " +
                                    e.userData.firstName,
                                },
                                null,
                                8,
                                ["text"]
                              ),
                            ]),
                          ]),
                        ])),
                    e.isDetailPage
                      ? (Object(n["y"])(),
                        Object(n["g"])("div", gy, [
                          yy,
                          Object(n["j"])(
                            " " + Object(n["K"])(e.claimState.createdOn),
                            1
                          ),
                        ]))
                      : Object(n["f"])("", !0),
                    Object(n["X"])(
                      Object(n["h"])(
                        "div",
                        fy,
                        [
                          Object(n["k"])(
                            j,
                            {
                              stateName: "setClaimHolderState",
                              backToState: e.ClaimHolderStates.THREE,
                            },
                            null,
                            8,
                            ["backToState"]
                          ),
                          Object(n["k"])(d, { text: "Verstuur je aangifte" }),
                        ],
                        512
                      ),
                      [[n["S"], !e.isEdit]]
                    ),
                  ],
                  32
                ))
              : Object(n["f"])("", !0),
          ],
          64
        )
      );
    }
    function Sy() {
      const e = Object(n["E"])(ie.getters.user);
      function t(t) {
        return e.value.permissions.includes(t);
      }
      return { can: t };
    }
    const Ey = { class: "flex flex-col gap-5" },
      _y = Object(n["h"])(
        "div",
        { class: "text-xl text-leftr" },
        " Je hebt niet de juiste rechten om deze pagina te zien. Als je denkt dat dat fout is, contacteer dan je verantwoordelijke groepsadministratie (VGA) zodat die het kan goedzetten in de Groepsadministratie. ",
        -1
      ),
      Ty = Object(n["h"])(
        "div",
        { class: "flex justify-center h-screen" },
        [
          Object(n["h"])("img", {
            class: "h-3/5",
            src: "https://www.scoutsengidsenvlaanderen.be/sites/default/files/images/site403.png",
            alt: "",
          }),
        ],
        -1
      ),
      xy = [_y, Ty];
    function wy(e, t, i, a, s, r) {
      return Object(n["y"])(), Object(n["g"])("div", Ey, xy);
    }
    var Iy = Object(n["l"])({ name: "forbidden", setup() {} });
    const Cy = j()(Iy, [["render", wy]]);
    var Dy = Cy,
      Ny = Object(n["l"])({
        name: "ClaimDetail",
        components: {
          "responsible-member-detail": Vt,
          "navigation-arrow": Oi,
          "custom-button": An,
          "label-output": Et,
          "custom-input": bd,
          "back-button": eu,
          FileUpload: fn,
          CustomHeadline2: qi,
          PhoneNumber: Rt,
          Forbidden: Dy,
        },
        props: { isDetailPage: { type: Boolean, required: !1, default: !1 } },
        setup() {
          const { scrollToTopOfPage: e } = K(),
            t = Object(hi["c"])(),
            i = Object(Q["b"])(),
            a = !!t.params.id,
            s = Object(n["E"])({}),
            r = Object(n["E"])(i.getters.user),
            { can: c } = Sy(),
            l = (e) => {
              Object(vn["saveAs"])(e, e.name);
            },
            o = () => !(a && !s.value.id) && !u.value,
            d = Object(n["E"])(""),
            u = Object(n["E"])(!1);
          a &&
            Yt.get(lh)
              .getById(t.params.id.toString())
              .then((e) => {
                e.response && 403 === e.response.status && (u.value = !0),
                  (s.value = e),
                  (m.dossierNumber = s.value.dossierNumber),
                  (m.note = s.value.note),
                  i.dispatch("setClaimState", s.value),
                  s.value.attachment && (d.value = s.value.attachment.filename);
              });
          const {
              handleSubmit: b,
              values: m,
              validate: p,
              isSubmitting: v,
            } = Object(nt["e"])({
              initialValues: {
                victim: s.value.victim,
                activityTypes: s.value.activityTypes,
                DECLARANT_DATE: A()().format("YYYY-MM-DD"),
                declarantCity: r.value.city,
              },
            }),
            j = Object(n["c"])(() => i.state.claim.claimState),
            O = Object(n["E"])(!1),
            h = async () => {
              await p().then((e) => P(e, "RequestInsuranceGeneral")),
                b(async (e) => {
                  if (!O.value)
                    if (((O.value = !0), a))
                      j.value.id &&
                        (await g(j.value.id.toString(), {
                          note: e.note,
                          case_number: e.dossierNumber,
                        }),
                        (O.value = !1));
                    else {
                      const t = Object(n["E"])({
                        declarantCity: e.declarantCity
                          ? e.declarantCity
                          : void 0,
                        DECLARANT_DATE: e.DECLARANT_DATE
                          ? e.DECLARANT_DATE
                          : void 0,
                      });
                      i.dispatch("setClaimState", {
                        ...j.value,
                        ...t.value,
                      }).then(async () => {
                        await y()
                          .then((e) => {
                            i.dispatch("setClaimHolderState", Z.FIVE),
                              (O.value = !1);
                          })
                          .catch((e) => {
                            window.alert(
                              "Er is iets misgelopen: \n" + e.message
                            );
                          });
                      });
                    }
                })();
            },
            g = async (e, t) => {
              await Yt.get(lh)
                .updateInfo(e, t)
                .then((e) => {
                  console.log("patched reuslt: ", e);
                });
            },
            y = async () => {
              m.file && (j.value.file = m.file),
                await Yt.get(lh).create(
                  j.value,
                  j.value.file ? j.value.file : void 0
                );
            };
          e();
          const f = (e) => ("M" === e ? "M" : "F" === e ? "V" : void 0);
          return {
            BelgianCitySearchRepository: Xd,
            ClaimHolderStates: Z,
            genderDisplay: f,
            ActivityTypes: th,
            isSubmitting: v,
            DamageTypes: Jh,
            InputTypes: Kt,
            claimState: j,
            details: s,
            onSubmit: h,
            userData: r,
            saveFile: l,
            isEdit: a,
            values: m,
            moment: A.a,
            can: c,
            filename: d,
            isForbidden: u,
            checkVisibility: o,
          };
        },
      });
    i("5622");
    const My = j()(Ny, [
      ["render", ky],
      ["__scopeId", "data-v-6673239e"],
    ]);
    var zy = My;
    const Ay = Object(n["h"])(
        "p",
        { class: "py-4", style: { "font-size": "30px" } },
        "Je aangifte is verstuurd.",
        -1
      ),
      Hy = Object(n["h"])(
        "div",
        null,
        [
          Object(n["h"])(
            "p",
            null,
            " Een bevestiging van je aangifte vind je in je mailbox. "
          ),
          Object(n["h"])(
            "p",
            null,
            " De aangifte is verstuurd naar Ethias, met het slachtoffer in cc. Na deze aangifte neemt Ethias contact op met (de ouders van) het slachtoffer. Alle verdere communicatie verloopt rechtstreeks tussen hen. "
          ),
        ],
        -1
      ),
      Ry = { class: "mt-4 inline-block" };
    function By(e, t, i, a, s, r) {
      const c = Object(n["H"])("navigation-arrow");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Ay,
            Hy,
            Object(n["h"])("div", Ry, [
              Object(n["k"])(c, {
                to: "/home/schadeaangiftes",
                text: "Terug naar overzicht",
              }),
            ]),
          ],
          64
        )
      );
    }
    var qy = Object(n["l"])({
      name: "RemarksDetail",
      components: { "navigation-arrow": Oi },
      props: {},
    });
    const Vy = j()(qy, [["render", By]]);
    var Ly = Vy,
      Gy = Object(n["l"])({
        name: "HolderStateForm",
        components: {
          "involvement-other-parties": Dh,
          "request-claim-identities": uh,
          "accident-details": eg,
          "claim-detail": zy,
          "success-screen": Ly,
        },
        setup() {
          const e = Object(Q["b"])(),
            t = Object(n["c"])(() => e.state.claim.claimHolderState);
          return { ClaimHolderStates: Z, claimHolderState: t };
        },
      });
    const Py = j()(Gy, [["render", cO]]);
    var Ky = Py,
      Yy = Object(n["l"])({
        name: "RequestClaim",
        components: {
          "request-bread-crumb": aO,
          "state-claim-form-holder": Ky,
        },
        setup() {
          return {};
        },
      });
    const Uy = j()(Yy, [["render", Fj]]);
    var Fy = Uy;
    const Wy = { class: "container" },
      Xy = Object(n["h"])("pre", null, "        ", -1),
      Zy = { class: "mb-3" },
      Jy = { class: "flex gap-5 pt-1 pb-5 float-right" };
    function $y(e, t, i, a, s, r) {
      const c = Object(n["H"])("call-to-action"),
        l = Object(n["H"])("search-input-claims"),
        o = Object(n["H"])("claim-list"),
        d = Object(n["H"])("loader");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", null, [
          Object(n["k"])(c, {
            link: "/aanvraag/schadeaangifte",
            text: "Start een nieuwe aangifte",
          }),
          Object(n["h"])("div", Wy, [
            e.data
              ? (Object(n["y"])(),
                Object(n["e"])(
                  o,
                  {
                    key: 0,
                    title: "Aangiftes",
                    items: e.can("insurances.list_insuranceclaims")
                      ? e.data.results
                      : [],
                  },
                  {
                    default: Object(n["W"])(() => [
                      Xy,
                      Object(n["h"])("div", Zy, [
                        Object(n["k"])(
                          l,
                          {
                            loading: e.loading,
                            "onUpdate:loading":
                              t[0] || (t[0] = (t) => (e.loading = t)),
                            name: "claim",
                            placeholder:
                              "Zoek op naam, lidnummer of groepsnummer",
                            repository: e.ClaimRepository,
                            onFetchedOptions:
                              t[1] || (t[1] = (t) => e.fetchedOptions(t)),
                          },
                          null,
                          8,
                          ["loading", "repository"]
                        ),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["items"]
                ))
              : Object(n["f"])("", !0),
            Object(n["h"])("div", Jy, [
              e.data.previous && !e.isLoading
                ? (Object(n["y"])(),
                  Object(n["g"])(
                    "a",
                    {
                      key: 0,
                      class: "link-inline cursor-pointer",
                      onClick:
                        t[2] ||
                        (t[2] = (t) => e.getPreviousClaims(e.data.previous)),
                    },
                    "Vorige pagina"
                  ))
                : Object(n["f"])("", !0),
              e.data.next && !e.isLoading
                ? (Object(n["y"])(),
                  Object(n["g"])(
                    "a",
                    {
                      key: 1,
                      class: "link-inline cursor-pointer",
                      onClick:
                        t[3] || (t[3] = (t) => e.getNextClaims(e.data.next)),
                    },
                    "Volgende pagina"
                  ))
                : Object(n["f"])("", !0),
              Object(n["k"])(
                d,
                { isLoading: e.isLoading, color: "black" },
                null,
                8,
                ["isLoading"]
              ),
            ]),
          ]),
        ])
      );
    }
    const Qy = Object(n["i"])(
        '<div class="grid-cols-claims py-2 border-t-2 border-black grid opacity-0 md:opacity-100"><div><p class="font-semibold">Datum van het ongeval</p></div><div><p class="font-semibold">Slachtoffer</p></div><div><p class="font-semibold">Groep</p></div><div><p class="font-semibold">Aangever</p></div><div></div></div>',
        1
      ),
      ef = { key: 0 },
      tf = Object(n["h"])("hr", { class: "border-t-2 border-black" }, null, -1),
      nf = { key: 1, class: "text-center my-3" },
      af = Object(n["h"])("i", null, "Geen resultaten", -1),
      sf = [af];
    function rf(e, t, i, a, s, r) {
      const c = Object(n["H"])("custom-headline-2"),
        l = Object(n["H"])("claim-list-item");
      return (
        Object(n["y"])(),
        Object(n["g"])(
          n["a"],
          null,
          [
            Object(n["k"])(c, { text: e.title }, null, 8, ["text"]),
            Object(n["G"])(e.$slots, "default"),
            Qy,
            e.items
              ? (Object(n["y"])(),
                Object(n["g"])("div", ef, [
                  (Object(n["y"])(!0),
                  Object(n["g"])(
                    n["a"],
                    null,
                    Object(n["F"])(
                      e.items,
                      (e) => (
                        Object(n["y"])(),
                        Object(n["e"])(l, { key: e.id, item: e }, null, 8, [
                          "item",
                        ])
                      )
                    ),
                    128
                  )),
                ]))
              : Object(n["f"])("", !0),
            tf,
            e.items && 0 === e.items.length
              ? (Object(n["y"])(), Object(n["g"])("div", nf, sf))
              : Object(n["f"])("", !0),
          ],
          64
        )
      );
    }
    const cf = (e) => (
        Object(n["B"])("data-v-020614e9"), (e = e()), Object(n["z"])(), e
      ),
      lf = {
        key: 0,
        class: "md:grid-cols-claims grid py-2 border-t-2 border-black",
      },
      of = { key: 0 },
      df = { class: "float-right" },
      uf = cf(() =>
        Object(n["h"])(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-6 w-6 hover:text-lightGreen cursor-pointer",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
          },
          [
            Object(n["h"])("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "3",
              d: "M9 5l7 7-7 7",
            }),
          ],
          -1
        )
      );
    function bf(e, t, i, a, s, r) {
      const c = Object(n["H"])("router-link");
      return e.item
        ? (Object(n["y"])(),
          Object(n["g"])("div", lf, [
            Object(n["h"])("div", null, [
              Object(n["h"])(
                "p",
                null,
                Object(n["K"])(
                  e.item.dateOfAccident
                    ? e.formatSingleDate(e.item.dateOfAccident)
                    : ""
                ),
                1
              ),
            ]),
            e.item.victim
              ? (Object(n["y"])(),
                Object(n["g"])("div", of, [
                  Object(n["h"])(
                    "p",
                    null,
                    Object(n["K"])(
                      e.item.victim.firstName + " " + e.item.victim.lastName
                    ),
                    1
                  ),
                ]))
              : Object(n["f"])("", !0),
            Object(n["h"])("div", null, [
              Object(n["h"])(
                "p",
                null,
                Object(n["K"])(
                  e.item.group && e.item.group.name ? e.item.group.name : ""
                ) +
                  " - " +
                  Object(n["K"])(
                    e.item.group && e.item.group.id ? e.item.group.id : ""
                  ),
                1
              ),
            ]),
            Object(n["h"])("div", null, [
              Object(n["h"])(
                "p",
                null,
                Object(n["K"])(
                  e.item.declarant && e.item.declarant.firstName
                    ? e.item.declarant.firstName
                    : ""
                ) +
                  " " +
                  Object(n["K"])(
                    e.item.declarant && e.item.declarant.lastName
                      ? e.item.declarant.lastName
                      : ""
                  ),
                1
              ),
            ]),
            Object(n["h"])("div", null, [
              Object(n["h"])("div", df, [
                Object(n["k"])(
                  c,
                  { to: "/schadeaangifte-detail/" + e.item.id },
                  { default: Object(n["W"])(() => [uf]), _: 1 },
                  8,
                  ["to"]
                ),
              ]),
            ]),
          ]))
        : Object(n["f"])("", !0);
    }
    var mf = Object(n["l"])({
      name: "CustomListItem",
      components: {},
      props: { item: { type: Object, required: !0 } },
      setup() {
        const e = (e) => {
          console.log("claim id:", e);
        };
        return { formatSingleDate: Di, fetchClaimById: e };
      },
    });
    i("7a15");
    const pf = j()(mf, [
      ["render", bf],
      ["__scopeId", "data-v-020614e9"],
    ]);
    var vf = pf,
      jf = Object(n["l"])({
        name: "ClaimList",
        components: { "custom-headline-2": qi, "claim-list-item": vf },
        props: {
          title: { type: String, required: !0 },
          items: { type: Array, required: !0 },
        },
        setup() {
          return {};
        },
      });
    i("8898");
    const Of = j()(jf, [["render", rf]]);
    var hf = Of;
    const gf = { class: "flex gap-3" },
      yf = ["disabled"],
      ff = { key: 0, style: { "margin-left": "-2em" }, class: "mt-2" },
      kf = Object(n["h"])(
        "svg",
        { class: "animate-spin h-5 w-5 mr-3", viewBox: "0 0 24 24" },
        [
          Object(n["h"])("path", {
            class: "opacity-20",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
          }),
        ],
        -1
      ),
      Sf = [kf],
      Ef = ["placeholder", "disabled"],
      _f = { key: 0, style: { "margin-left": "-2em" }, class: "mt-2" },
      Tf = Object(n["h"])(
        "svg",
        { class: "animate-spin h-5 w-5 mr-3", viewBox: "0 0 24 24" },
        [
          Object(n["h"])("path", {
            class: "opacity-20",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
          }),
        ],
        -1
      ),
      xf = [Tf];
    function wf(e, t, i, a, s, r) {
      return (
        Object(n["y"])(),
        Object(n["g"])("div", gf, [
          Object(n["h"])(
            "div",
            {
              class: Object(n["s"])([
                "flex",
                {
                  "text-lightGray animate-pulse2 bg-lightGray": e.loadingSubmit,
                },
              ]),
            },
            [
              Object(n["X"])(
                Object(n["h"])(
                  "input",
                  {
                    "onUpdate:modelValue": t[0] || (t[0] = (t) => (e.year = t)),
                    placeholder: "Zoek op jaar",
                    type: "text",
                    disabled: e.loadingSubmit || e.loading_1,
                    class: Object(n["s"])([
                      { "opacity-0": e.loadingSubmit },
                      "appearance-none border rounded xs:w-72 md:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    ]),
                    onInput: t[1] || (t[1] = (t) => e.search_2()),
                  },
                  null,
                  42,
                  yf
                ),
                [[n["R"], e.year]]
              ),
              e.loading_2
                ? (Object(n["y"])(), Object(n["g"])("div", ff, Sf))
                : Object(n["f"])("", !0),
            ],
            2
          ),
          Object(n["h"])(
            "div",
            {
              class: Object(n["s"])([
                "flex",
                {
                  "text-lightGray animate-pulse2 bg-lightGray": e.loadingSubmit,
                },
              ]),
            },
            [
              Object(n["X"])(
                Object(n["h"])(
                  "input",
                  {
                    "onUpdate:modelValue":
                      t[2] || (t[2] = (t) => (e.query = t)),
                    placeholder: e.placeholder,
                    type: "text",
                    disabled: e.loadingSubmit || e.loading_2,
                    class: Object(n["s"])([
                      { "opacity-0": e.loadingSubmit },
                      "appearance-none border rounded xs:w-72 md:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                    ]),
                    onInput: t[3] || (t[3] = (t) => e.search_1()),
                  },
                  null,
                  42,
                  Ef
                ),
                [[n["R"], e.query]]
              ),
              e.loading_1
                ? (Object(n["y"])(), Object(n["g"])("div", _f, xf))
                : Object(n["f"])("", !0),
            ],
            2
          ),
        ])
      );
    }
    var If = Object(n["l"])({
      name: "SearchInputClaims",
      props: {
        name: { type: String, required: !0 },
        placeholder: { type: String, required: !1, default: "Zoek..." },
        repository: { type: Function, required: !1, default: Function },
        loading: Boolean,
        loadingSubmit: { type: Boolean, default: !1, required: !1 },
      },
      setup(e, t) {
        let i;
        const a = Object(n["E"])(""),
          s = Object(n["E"])(""),
          r = Object(n["E"])([]),
          c = Object(n["E"])(!1),
          l = Object(n["E"])(!1),
          o = () => {
            (c.value = !0),
              clearTimeout(i),
              (i = setTimeout(() => {
                a.value &&
                  Yt.get(e.repository)
                    .search(a.value, s.value)
                    .then((e) => {
                      (r.value = e),
                        t.emit("fetchedOptions", r.value),
                        (c.value = !1);
                    });
              }, 1e3));
          },
          d = () => {
            (l.value = !0),
              clearTimeout(i),
              (i = setTimeout(() => {
                Yt.get(e.repository)
                  .search(a.value, s.value)
                  .then((e) => {
                    (r.value = e),
                      t.emit("fetchedOptions", r.value),
                      (l.value = !1);
                  });
              }, 1e3));
          };
        return (
          Object(n["U"])(
            () => a.value,
            () => {
              "" === a.value &&
                ((c.value = !0),
                Yt.get(e.repository)
                  .search(a.value, s.value)
                  .then((e) => {
                    (r.value = e),
                      t.emit("fetchedOptions", r.value),
                      (c.value = !1);
                  }));
            }
          ),
          {
            options: r,
            search_1: o,
            query: a,
            year: s,
            search_2: d,
            loading_1: c,
            loading_2: l,
          }
        );
      },
    });
    const Cf = j()(If, [["render", wf]]);
    var Df = Cf,
      Nf = Object(n["l"])({
        name: "ClaimsHome",
        components: {
          "call-to-action": Fv,
          "claim-list": hf,
          loader: Du["b"],
          "search-input-claims": Df,
        },
        setup() {
          const { can: e } = Sy(),
            t = Object(n["E"])(!1),
            i = Object(n["E"])(!1),
            a = Object(Q["b"])(),
            s = Object(n["E"])(a.getters.user);
          a.dispatch("resetStates");
          const r = Object(n["E"])(),
            c = () => {
              Yt.get(lh)
                .getArray("/insurances_claims/?page=1&page_size=10")
                .then((e) => {
                  r.value = e;
                });
            },
            l = (e) => {
              (i.value = !0),
                Yt.get(lh)
                  .getArray(e)
                  .then((e) => {
                    (r.value = e), (i.value = !1);
                  });
            },
            o = (e) => {
              (i.value = !0),
                Yt.get(lh)
                  .getArray(e)
                  .then((e) => {
                    (r.value = e), (i.value = !1);
                  });
            },
            d = Object(n["E"])({ id: "" }),
            u = (e) => {
              (d.value.id = e.id),
                Yt.get(lh)
                  .getArray(
                    "/insurances_claims/?group_number=" +
                      d.value.id +
                      "&search=&page=1&page_size=10"
                  )
                  .then((e) => {
                    r.value = e;
                  });
            },
            b = (e) => {
              (r.value = e), (t.value = !1);
            };
          return (
            c(),
            {
              data: r,
              getPreviousClaims: l,
              getNextClaims: o,
              isLoading: i,
              addSelectionInsurances: u,
              userData: s,
              loading: t,
              fetchedOptions: b,
              ClaimRepository: lh,
              can: e,
            }
          );
        },
      });
    const Mf = j()(Nf, [["render", $y]]);
    var zf = Mf;
    function Af(e, t, i, a, s, r) {
      return Object(n["y"])(), Object(n["g"])("div");
    }
    var Hf = Object(n["l"])({
      name: "start-view",
      setup() {
        const e = Object(Q["b"])();
        let t = new URL(document.location.toString()).searchParams,
          i = t.get("code");
        return (
          i
            ? e.dispatch("fetchTokens", i).then(() => {
                const e = new URL(location.toString());
                e.searchParams.delete("code"),
                  e.searchParams.delete("session_state"),
                  window.location.replace(e.toString());
              })
            : localStorage.getItem("homescreen")
            ? Qf.push(String(localStorage.getItem("homescreen")))
            : Qf.push("/home"),
          {}
        );
      },
    });
    const Rf = j()(Hf, [["render", Af]]);
    var Bf = Rf;
    const qf = { class: "container" };
    function Vf(e, t, i, a, s, r) {
      const c = Object(n["H"])("claim-detail");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", qf, [Object(n["k"])(c, { isDetailPage: !0 })])
      );
    }
    var Lf = Object(n["l"])({
      name: "ClaimDetailPage",
      components: { "claim-detail": zy },
      setup() {
        return { InputTypes: Kt };
      },
    });
    const Gf = j()(Lf, [["render", Vf]]);
    var Pf = Gf;
    const Kf = { class: "container" },
      Yf = { class: "ml-0 w-full h1" },
      Uf = { class: "flex gap-5 xs:flex-col" };
    function Ff(e, t, i, a, s, r) {
      const c = Object(n["H"])("custom-button"),
        l = Object(n["H"])("router-link");
      return (
        Object(n["y"])(),
        Object(n["g"])("div", Kf, [
          Object(n["h"])(
            "h1",
            Yf,
            "Welkom " + Object(n["K"])(e.user.firstName),
            1
          ),
          Object(n["h"])("div", Uf, [
            Object(n["k"])(
              l,
              { to: "/home/verzekeringen" },
              {
                default: Object(n["W"])(() => [
                  Object(n["k"])(c, { text: "verzekeringsaanvragen" }),
                ]),
                _: 1,
              }
            ),
            Object(n["k"])(
              l,
              { to: "/home/schadeaangiftes" },
              {
                default: Object(n["W"])(() => [
                  Object(n["k"])(c, {
                    class: "xs:w-100",
                    text: "Schadeaangiftes",
                  }),
                ]),
                _: 1,
              }
            ),
          ]),
        ])
      );
    }
    var Wf = Object(n["l"])({
      name: "Home",
      components: { "custom-button": An },
      setup() {
        const e = Object(n["E"])(ie.getters.user);
        return { user: e };
      },
    });
    const Xf = j()(Wf, [["render", Ff]]);
    var Zf = Xf;
    const Jf = [
        {
          path: "",
          name: "Start",
          component: Bf,
          meta: { title: "Verzekering" },
        },
        {
          path: "/home",
          name: "Home",
          component: Zf,
          meta: { requiresOpenIdAuth: !0, homescreen: "/home" },
        },
        {
          path: "/home/schadeaangiftes",
          name: "ClaimsHome",
          component: zf,
          meta: {
            requiresOpenIdAuth: !0,
            title: "Schadeaangiftes",
            homescreen: "/home",
          },
        },
        {
          path: "/aanvraag/schadeaangifte",
          name: "AanvraagSchadeAangifte",
          component: Fy,
          meta: {
            requiresOpenIdAuth: !0,
            title: "Aangifte lichamelijke schade",
            homescreen: "/home/schadeaangiftes",
          },
        },
        {
          path: "/schadeaangifte-detail/:id?",
          name: "ClaimDetail",
          component: Pf,
          meta: {
            requiresOpenIdAuth: !0,
            title: "Schadeaangifte",
            detail: !0,
            homescreen: "/home/schadeaangiftes",
          },
        },
        {
          path: "/home/verzekeringen",
          name: "InsurancesHome",
          component: Kj,
          meta: {
            requiresOpenIdAuth: !0,
            title: "Verzekering",
            homescreen: "/home",
          },
        },
        {
          path: "/aanvraag/verzekering",
          name: "AanvraagVerzekering",
          component: ij,
          meta: {
            requiresOpenIdAuth: !0,
            title: "Verzekering aanvragen",
            homescreen: "/home/verzekeringen",
          },
        },
        {
          path: "/verzekering-bewerken/:id",
          name: "Bewerken",
          component: ij,
          meta: {
            requiresOpenIdAuth: !0,
            title: "Verzekering Aanvragen",
            homescreen: "/home/verzekeringen",
          },
        },
        {
          path: "/eenmalige-activiteit-detail/:id?",
          name: "ActivityDetail",
          component: Ln,
          props: { singlePage: !0 },
          meta: {
            requiresOpenIdAuth: !0,
            title: "Verzekering",
            detail: !0,
            homescreen: "/home/verzekeringen",
          },
        },
        {
          path: "/tijdelijke-verzekering-niet-leden-detail/:id?",
          name: "NonMemberDetail",
          component: vc,
          props: { singlePage: !0 },
          meta: {
            requiresOpenIdAuth: !0,
            title: "Verzekering",
            detail: !0,
            homescreen: "/home/verzekeringen",
          },
        },
        {
          path: "/reisbijstand-met-auto-detail/:id?",
          name: "TravelAssistanceWithCar",
          component: Bs,
          props: { singlePage: !0 },
          meta: {
            requiresOpenIdAuth: !0,
            title: "Verzekering",
            detail: !0,
            homescreen: "/home/verzekeringen",
          },
        },
        {
          path: "/reisbijstand-zonder-auto-detail/:id?",
          name: "TravelAssistanceWithoutCar",
          component: Bs,
          props: { singlePage: !0 },
          meta: {
            requiresOpenIdAuth: !0,
            title: "Verzekering",
            detail: !0,
            homescreen: "/home/verzekeringen",
          },
        },
        {
          path: "/evenementen-verzekering-detail/:id?",
          name: "EventInsuranceDetail",
          component: Mr,
          props: { singlePage: !0 },
          meta: {
            requiresOpenIdAuth: !0,
            title: "Verzekering",
            detail: !0,
            homescreen: "/home/verzekeringen",
          },
        },
        {
          path: "/tijdelijke-autoverzekering-detail/:id?",
          name: "TemporaryVehicleDetail",
          component: fr,
          props: { singlePage: !0 },
          meta: {
            requiresOpenIdAuth: !0,
            title: "Verzekering",
            detail: !0,
            homescreen: "/home/verzekeringen",
          },
        },
        {
          path: "/materiaal-verzekering-detail/:id?",
          name: "MaterialInsuranceDetail",
          component: qa,
          props: { singlePage: !0 },
          meta: {
            requiresOpenIdAuth: !0,
            title: "Verzekering",
            detail: !0,
            homescreen: "/home/verzekeringen",
          },
        },
        {
          path: "/draft-bewerken/:id",
          name: "DraftBewerken",
          component: ij,
          meta: {
            requiresOpenIdAuth: !0,
            title: "Verzekering Aanvragen",
            isDraft: !0,
            homescreen: "/home/verzekeringen",
          },
        },
      ],
      $f = Object(hi["a"])({ history: Object(hi["b"])(), routes: Jf });
    $f.beforeEach((e, t, i) => {
      e.meta.homescreen
        ? (localStorage.setItem("homescreen", String(e.meta.homescreen)), i())
        : i();
    });
    var Qf = $f;
    i("a766");
    class ek {
      getFile(e) {
        return V.a.get("/" + e).then(function (e) {
          return e.data;
        });
      }
    }
    new ek().getFile("config.json").then((e) => {
      const t = Object(n["d"])(ct);
      let i = e;
      (i = new X().deserialize(i)),
        i.oidc &&
          i.oidc.baseUrl &&
          i.oidc.clientId &&
          t.use(L["b"], {
            store: ie,
            router: Qf,
            configuration: {
              baseUrl: i.oidc.baseUrl,
              serverBaseUrl: i.oidc.serverBaseUrl,
              authEndpoint: i.oidc.authEndpoint ? i.oidc.authEndpoint : "auth",
              logoutEndpoint: i.oidc.logoutEndpoint
                ? i.oidc.logoutEndpoint
                : "logout",
              clientId: i.oidc.clientId,
              authorizedRedirectRoute: "/",
              serverTokenEndpoint: "token/",
              serverRefreshEndpoint: "refresh/",
              InternalRedirectUrl: i.oidc.internalRedirectUrl
                ? i.oidc.internalRedirectUrl
                : "/",
            },
          }),
        ie.dispatch("setConfig", i),
        Qf.beforeEach((e, t, i) => {
          e.matched.some((e) => e.meta.requiresOpenIdAuth) &&
          ie.getters.isLoggedIn
            ? ie.getters.loaded
              ? i()
              : Yt.get(fd)
                  .me()
                  .then((e) => {
                    ie.dispatch("setUser", e).then(() => {
                      i();
                    });
                  })
            : i();
        }),
        t.use(Qf).use(ie).mount("#app");
    });
  },
  d9cb: function (e, t, i) {},
  dee7: function (e, t, i) {
    "use strict";
    i("8030");
  },
  dfa3: function (e, t, i) {},
  e2ee: function (e, t, i) {},
  e747: function (e, t, i) {
    "use strict";
    i("76c1");
  },
  ef30: function (e, t, i) {},
});
//# sourceMappingURL=app.8b3a3fbf.js.map
