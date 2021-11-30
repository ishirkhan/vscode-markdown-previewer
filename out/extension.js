var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/shirkhan-alphabet-converter/dist/shirkhan-alphabet-converter.umd.js
var require_shirkhan_alphabet_converter_umd = __commonJS({
  "node_modules/shirkhan-alphabet-converter/dist/shirkhan-alphabet-converter.umd.js"(exports2, module2) {
    var o0 = Object.defineProperty;
    var F0 = (p, w, x) => w in p ? o0(p, w, { enumerable: true, configurable: true, writable: true, value: x }) : p[w] = x;
    var _ = (p, w, x) => (F0(p, typeof w != "symbol" ? w + "" : w, x), x);
    (function(p, w) {
      typeof exports2 == "object" && typeof module2 != "undefined" ? w(exports2) : typeof define == "function" && define.amd ? define(["exports"], w) : (p = typeof globalThis != "undefined" ? globalThis : p || self, w(p["shirkhan-alphabet-converter"] = {}));
    })(exports2, function(p) {
      "use strict";
      const w = "/", x = "\u0626", Wu = [{ uchar: "\u0626", volwes: false, uly: "'", khan: "'" }, { uchar: "\u0627", volwes: true, uly: "a", khan: "a" }, { uchar: "\u06D5", volwes: true, uly: "e", khan: "e" }, { uchar: "\u06D0", volwes: true, uly: "\xEB", khan: "eh" }, { uchar: "\u0649", volwes: true, uly: "i", khan: "i" }, { uchar: "\u0648", volwes: true, uly: "o", khan: "o" }, { uchar: "\u06C7", volwes: true, uly: "u", khan: "u" }, { uchar: "\u06C6", volwes: true, uly: "\xF6", khan: "c" }, { uchar: "\u06C8", volwes: true, uly: "\xFC", khan: "v" }, { uchar: "\u0628", volwes: false, uly: "b", khan: "b" }, { uchar: "\u067E", volwes: false, uly: "p", khan: "p" }, { uchar: "\u062A", volwes: false, uly: "t", khan: "t" }, { uchar: "\u062C", volwes: false, uly: "j", khan: "j" }, { uchar: "\u0686", volwes: false, uly: "ch", khan: "ch" }, { uchar: "\u062E", volwes: false, uly: "x", khan: "kh" }, { uchar: "\u062F", volwes: false, uly: "d", khan: "d" }, { uchar: "\u0631", volwes: false, uly: "r", khan: "r" }, { uchar: "\u0632", volwes: false, uly: "z", khan: "z" }, { uchar: "\u0698", volwes: false, uly: "zh", khan: "zh" }, { uchar: "\u0633", volwes: false, uly: "s", khan: "s" }, { uchar: "\u0634", volwes: false, uly: "sh", khan: "sh" }, { uchar: "\u063A", volwes: false, uly: "gh", khan: "gh" }, { uchar: "\u0642", volwes: false, uly: "q", khan: "q" }, { uchar: "\u0641", volwes: false, uly: "f", khan: "f" }, { uchar: "\u0643", volwes: false, uly: "k", khan: "k" }, { uchar: "\u06AF", volwes: false, uly: "g", khan: "g" }, { uchar: "\u06AD", volwes: false, uly: "ng", khan: "ng" }, { uchar: "\u0644", volwes: false, uly: "l", khan: "l" }, { uchar: "\u0645", volwes: false, uly: "m", khan: "m" }, { uchar: "\u0646", volwes: false, uly: "n", khan: "n" }, { uchar: "\u06BE", volwes: false, uly: "h", khan: "wh" }, { uchar: "\u06CB", volwes: false, uly: "w", khan: "w" }, { uchar: "\u064A", volwes: false, uly: "y", khan: "y" }];
      function Du(u) {
        if (u)
          throw u;
      }
      var nu = function(e) {
        return e != null && e.constructor != null && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
      }, R = Object.prototype.hasOwnProperty, ru = Object.prototype.toString, iu = Object.defineProperty, ou = Object.getOwnPropertyDescriptor, Fu = function(e) {
        return typeof Array.isArray == "function" ? Array.isArray(e) : ru.call(e) === "[object Array]";
      }, su = function(e) {
        if (!e || ru.call(e) !== "[object Object]")
          return false;
        var t = R.call(e, "constructor"), n = e.constructor && e.constructor.prototype && R.call(e.constructor.prototype, "isPrototypeOf");
        if (e.constructor && !t && !n)
          return false;
        var D;
        for (D in e)
          ;
        return typeof D == "undefined" || R.call(e, D);
      }, Eu = function(e, t) {
        iu && t.name === "__proto__" ? iu(e, t.name, { enumerable: true, configurable: true, value: t.newValue, writable: true }) : e[t.name] = t.newValue;
      }, Cu = function(e, t) {
        if (t === "__proto__")
          if (R.call(e, t)) {
            if (ou)
              return ou(e, t).value;
          } else
            return;
        return e[t];
      }, au = function u() {
        var e, t, n, D, r, i, o = arguments[0], F = 1, s = arguments.length, f = false;
        for (typeof o == "boolean" && (f = o, o = arguments[1] || {}, F = 2), (o == null || typeof o != "object" && typeof o != "function") && (o = {}); F < s; ++F)
          if (e = arguments[F], e != null)
            for (t in e)
              n = Cu(o, t), D = Cu(e, t), o !== D && (f && D && (su(D) || (r = Fu(D))) ? (r ? (r = false, i = n && Fu(n) ? n : []) : i = n && su(n) ? n : {}, Eu(o, { name: t, newValue: u(f, i, D) })) : typeof D != "undefined" && Eu(o, { name: t, newValue: D }));
        return o;
      };
      function $(u) {
        if (Object.prototype.toString.call(u) !== "[object Object]")
          return false;
        const e = Object.getPrototypeOf(u);
        return e === null || e === Object.prototype;
      }
      function Ou() {
        const u = [], e = { run: t, use: n };
        return e;
        function t(...D) {
          let r = -1;
          const i = D.pop();
          if (typeof i != "function")
            throw new TypeError("Expected function as last argument, not " + i);
          o(null, ...D);
          function o(F, ...s) {
            const f = u[++r];
            let h = -1;
            if (F) {
              i(F);
              return;
            }
            for (; ++h < D.length; )
              (s[h] === null || s[h] === void 0) && (s[h] = D[h]);
            D = s, f ? ju(f, o)(...s) : i(null, ...s);
          }
        }
        function n(D) {
          if (typeof D != "function")
            throw new TypeError("Expected `middelware` to be a function, not " + D);
          return u.push(D), e;
        }
      }
      function ju(u, e) {
        let t;
        return n;
        function n(...i) {
          const o = u.length > i.length;
          let F;
          o && i.push(D);
          try {
            F = u(...i);
          } catch (s) {
            const f = s;
            if (o && t)
              throw f;
            return D(f);
          }
          o || (F instanceof Promise ? F.then(r, D) : F instanceof Error ? D(F) : r(F));
        }
        function D(i, ...o) {
          t || (t = true, e(i, ...o));
        }
        function r(i) {
          D(null, i);
        }
      }
      var T = {}.hasOwnProperty;
      function _u(u) {
        return !u || typeof u != "object" ? "" : T.call(u, "position") || T.call(u, "type") ? Au(u.position) : T.call(u, "start") || T.call(u, "end") ? Au(u) : T.call(u, "line") || T.call(u, "column") ? q(u) : "";
      }
      function q(u) {
        return lu(u && u.line) + ":" + lu(u && u.column);
      }
      function Au(u) {
        return q(u && u.start) + "-" + q(u && u.end);
      }
      function lu(u) {
        return u && typeof u == "number" ? u : 1;
      }
      class S extends Error {
        constructor(e, t, n) {
          var D = [null, null], r = { start: { line: null, column: null }, end: { line: null, column: null } }, i;
          super();
          typeof t == "string" && (n = t, t = null), typeof n == "string" && (i = n.indexOf(":"), i === -1 ? D[1] = n : (D[0] = n.slice(0, i), D[1] = n.slice(i + 1))), t && ("type" in t || "position" in t ? t.position && (r = t.position) : "start" in t || "end" in t ? r = t : ("line" in t || "column" in t) && (r.start = t)), this.name = _u(t) || "1:1", this.message = typeof e == "object" ? e.message : e, this.stack = typeof e == "object" ? e.stack : "", this.reason = this.message, this.line = r.start.line, this.column = r.start.column, this.source = D[0], this.ruleId = D[1], this.position = r, this.file, this.fatal, this.url, this.note;
        }
      }
      S.prototype.file = "", S.prototype.name = "", S.prototype.reason = "", S.prototype.message = "", S.prototype.stack = "", S.prototype.fatal = null, S.prototype.column = null, S.prototype.line = null, S.prototype.source = null, S.prototype.ruleId = null, S.prototype.position = null;
      const P = { basename: Ru, dirname: Lu, extname: Uu, join: Vu, sep: "/" };
      function Ru(u, e) {
        if (e !== void 0 && typeof e != "string")
          throw new TypeError('"ext" argument must be a string');
        W(u);
        let t = 0, n = -1, D = u.length, r;
        if (e === void 0 || e.length === 0 || e.length > u.length) {
          for (; D--; )
            if (u.charCodeAt(D) === 47) {
              if (r) {
                t = D + 1;
                break;
              }
            } else
              n < 0 && (r = true, n = D + 1);
          return n < 0 ? "" : u.slice(t, n);
        }
        if (e === u)
          return "";
        let i = -1, o = e.length - 1;
        for (; D--; )
          if (u.charCodeAt(D) === 47) {
            if (r) {
              t = D + 1;
              break;
            }
          } else
            i < 0 && (r = true, i = D + 1), o > -1 && (u.charCodeAt(D) === e.charCodeAt(o--) ? o < 0 && (n = D) : (o = -1, n = i));
        return t === n ? n = i : n < 0 && (n = u.length), u.slice(t, n);
      }
      function Lu(u) {
        if (W(u), u.length === 0)
          return ".";
        let e = -1, t = u.length, n;
        for (; --t; )
          if (u.charCodeAt(t) === 47) {
            if (n) {
              e = t;
              break;
            }
          } else
            n || (n = true);
        return e < 0 ? u.charCodeAt(0) === 47 ? "/" : "." : e === 1 && u.charCodeAt(0) === 47 ? "//" : u.slice(0, e);
      }
      function Uu(u) {
        W(u);
        let e = u.length, t = -1, n = 0, D = -1, r = 0, i;
        for (; e--; ) {
          const o = u.charCodeAt(e);
          if (o === 47) {
            if (i) {
              n = e + 1;
              break;
            }
            continue;
          }
          t < 0 && (i = true, t = e + 1), o === 46 ? D < 0 ? D = e : r !== 1 && (r = 1) : D > -1 && (r = -1);
        }
        return D < 0 || t < 0 || r === 0 || r === 1 && D === t - 1 && D === n + 1 ? "" : u.slice(D, t);
      }
      function Vu(...u) {
        let e = -1, t;
        for (; ++e < u.length; )
          W(u[e]), u[e] && (t = t === void 0 ? u[e] : t + "/" + u[e]);
        return t === void 0 ? "." : Mu(t);
      }
      function Mu(u) {
        W(u);
        const e = u.charCodeAt(0) === 47;
        let t = $u(u, !e);
        return t.length === 0 && !e && (t = "."), t.length > 0 && u.charCodeAt(u.length - 1) === 47 && (t += "/"), e ? "/" + t : t;
      }
      function $u(u, e) {
        let t = "", n = 0, D = -1, r = 0, i = -1, o, F;
        for (; ++i <= u.length; ) {
          if (i < u.length)
            o = u.charCodeAt(i);
          else {
            if (o === 47)
              break;
            o = 47;
          }
          if (o === 47) {
            if (!(D === i - 1 || r === 1))
              if (D !== i - 1 && r === 2) {
                if (t.length < 2 || n !== 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
                  if (t.length > 2) {
                    if (F = t.lastIndexOf("/"), F !== t.length - 1) {
                      F < 0 ? (t = "", n = 0) : (t = t.slice(0, F), n = t.length - 1 - t.lastIndexOf("/")), D = i, r = 0;
                      continue;
                    }
                  } else if (t.length > 0) {
                    t = "", n = 0, D = i, r = 0;
                    continue;
                  }
                }
                e && (t = t.length > 0 ? t + "/.." : "..", n = 2);
              } else
                t.length > 0 ? t += "/" + u.slice(D + 1, i) : t = u.slice(D + 1, i), n = i - D - 1;
            D = i, r = 0;
          } else
            o === 46 && r > -1 ? r++ : r = -1;
        }
        return t;
      }
      function W(u) {
        if (typeof u != "string")
          throw new TypeError("Path must be a string. Received " + JSON.stringify(u));
      }
      const qu = { cwd: Ku };
      function Ku() {
        return "/";
      }
      function K(u) {
        return u !== null && typeof u == "object" && u.href && u.origin;
      }
      function Hu(u) {
        if (typeof u == "string")
          u = new URL(u);
        else if (!K(u)) {
          const e = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + u + "`");
          throw e.code = "ERR_INVALID_ARG_TYPE", e;
        }
        if (u.protocol !== "file:") {
          const e = new TypeError("The URL must be of scheme file");
          throw e.code = "ERR_INVALID_URL_SCHEME", e;
        }
        return Yu(u);
      }
      function Yu(u) {
        if (u.hostname !== "") {
          const n = new TypeError('File URL host must be "localhost" or empty on darwin');
          throw n.code = "ERR_INVALID_FILE_URL_HOST", n;
        }
        const e = u.pathname;
        let t = -1;
        for (; ++t < e.length; )
          if (e.charCodeAt(t) === 37 && e.charCodeAt(t + 1) === 50) {
            const n = e.charCodeAt(t + 2);
            if (n === 70 || n === 102) {
              const D = new TypeError("File URL path must not include encoded / characters");
              throw D.code = "ERR_INVALID_FILE_URL_PATH", D;
            }
          }
        return decodeURIComponent(e);
      }
      const H = ["history", "path", "basename", "stem", "extname", "dirname"];
      class Zu {
        constructor(e) {
          let t;
          e ? typeof e == "string" || nu(e) ? t = { value: e } : K(e) ? t = { path: e } : t = e : t = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = qu.cwd(), this.value, this.stored, this.result, this.map;
          let n = -1;
          for (; ++n < H.length; ) {
            const r = H[n];
            r in t && t[r] !== void 0 && (this[r] = r === "history" ? [...t[r]] : t[r]);
          }
          let D;
          for (D in t)
            H.includes(D) || (this[D] = t[D]);
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          K(e) && (e = Hu(e)), Z(e, "path"), this.path !== e && this.history.push(e);
        }
        get dirname() {
          return typeof this.path == "string" ? P.dirname(this.path) : void 0;
        }
        set dirname(e) {
          fu(this.basename, "dirname"), this.path = P.join(e || "", this.basename);
        }
        get basename() {
          return typeof this.path == "string" ? P.basename(this.path) : void 0;
        }
        set basename(e) {
          Z(e, "basename"), Y(e, "basename"), this.path = P.join(this.dirname || "", e);
        }
        get extname() {
          return typeof this.path == "string" ? P.extname(this.path) : void 0;
        }
        set extname(e) {
          if (Y(e, "extname"), fu(this.dirname, "extname"), e) {
            if (e.charCodeAt(0) !== 46)
              throw new Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw new Error("`extname` cannot contain multiple dots");
          }
          this.path = P.join(this.dirname, this.stem + (e || ""));
        }
        get stem() {
          return typeof this.path == "string" ? P.basename(this.path, this.extname) : void 0;
        }
        set stem(e) {
          Z(e, "stem"), Y(e, "stem"), this.path = P.join(this.dirname || "", e + (this.extname || ""));
        }
        toString(e) {
          return (this.value || "").toString(e);
        }
        message(e, t, n) {
          const D = new S(e, t, n);
          return this.path && (D.name = this.path + ":" + D.name, D.file = this.path), D.fatal = false, this.messages.push(D), D;
        }
        info(e, t, n) {
          const D = this.message(e, t, n);
          return D.fatal = null, D;
        }
        fail(e, t, n) {
          const D = this.message(e, t, n);
          throw D.fatal = true, D;
        }
      }
      function Y(u, e) {
        if (u && u.includes(P.sep))
          throw new Error("`" + e + "` cannot be a path: did not expect `" + P.sep + "`");
      }
      function Z(u, e) {
        if (!u)
          throw new Error("`" + e + "` cannot be empty");
      }
      function fu(u, e) {
        if (!u)
          throw new Error("Setting `" + e + "` requires `path` to be set too");
      }
      const Gu = hu().freeze(), cu = {}.hasOwnProperty;
      function hu() {
        const u = Ou(), e = [];
        let t = {}, n, D = -1;
        return r.data = i, r.Parser = void 0, r.Compiler = void 0, r.freeze = o, r.attachers = e, r.use = F, r.parse = s, r.stringify = f, r.run = h, r.runSync = g, r.process = z, r.processSync = I, r;
        function r() {
          const E = hu();
          let a = -1;
          for (; ++a < e.length; )
            E.use(...e[a]);
          return E.data(au(true, {}, t)), E;
        }
        function i(E, a) {
          return typeof E == "string" ? arguments.length === 2 ? (X("data", n), t[E] = a, r) : cu.call(t, E) && t[E] || null : E ? (X("data", n), t = E, r) : t;
        }
        function o() {
          if (n)
            return r;
          for (; ++D < e.length; ) {
            const [E, ...a] = e[D];
            if (a[0] === false)
              continue;
            a[0] === true && (a[1] = void 0);
            const A = E.call(r, ...a);
            typeof A == "function" && u.use(A);
          }
          return n = true, D = Number.POSITIVE_INFINITY, r;
        }
        function F(E, ...a) {
          let A;
          if (X("use", n), E != null)
            if (typeof E == "function")
              b(E, ...a);
            else if (typeof E == "object")
              Array.isArray(E) ? N(E) : m(E);
            else
              throw new TypeError("Expected usable value, not `" + E + "`");
          return A && (t.settings = Object.assign(t.settings || {}, A)), r;
          function y(C) {
            if (typeof C == "function")
              b(C);
            else if (typeof C == "object")
              if (Array.isArray(C)) {
                const [l, ...c] = C;
                b(l, ...c);
              } else
                m(C);
            else
              throw new TypeError("Expected usable value, not `" + C + "`");
          }
          function m(C) {
            N(C.plugins), C.settings && (A = Object.assign(A || {}, C.settings));
          }
          function N(C) {
            let l = -1;
            if (C != null)
              if (Array.isArray(C))
                for (; ++l < C.length; ) {
                  const c = C[l];
                  y(c);
                }
              else
                throw new TypeError("Expected a list of plugins, not `" + C + "`");
          }
          function b(C, l) {
            let c = -1, k;
            for (; ++c < e.length; )
              if (e[c][0] === C) {
                k = e[c];
                break;
              }
            k ? ($(k[1]) && $(l) && (l = au(true, k[1], l)), k[1] = l) : e.push([...arguments]);
          }
        }
        function s(E) {
          r.freeze();
          const a = O(E), A = r.Parser;
          return G("parse", A), pu(A, "parse") ? new A(String(a), a).parse() : A(String(a), a);
        }
        function f(E, a) {
          r.freeze();
          const A = O(a), y = r.Compiler;
          return J("stringify", y), Bu(E), pu(y, "compile") ? new y(E, A).compile() : y(E, A);
        }
        function h(E, a, A) {
          if (Bu(E), r.freeze(), !A && typeof a == "function" && (A = a, a = void 0), !A)
            return new Promise(y);
          y(null, A);
          function y(m, N) {
            u.run(E, O(a), b);
            function b(C, l, c) {
              l = l || E, C ? N(C) : m ? m(l) : A(null, l, c);
            }
          }
        }
        function g(E, a) {
          let A, y;
          return r.run(E, a, m), yu("runSync", "run", y), A;
          function m(N, b) {
            Du(N), A = b, y = true;
          }
        }
        function z(E, a) {
          if (r.freeze(), G("process", r.Parser), J("process", r.Compiler), !a)
            return new Promise(A);
          A(null, a);
          function A(y, m) {
            const N = O(E);
            r.run(r.parse(N), N, (C, l, c) => {
              if (C || !l || !c)
                b(C);
              else {
                const k = r.stringify(l, c);
                k == null || (Qu(k) ? c.value = k : c.result = k), b(C, c);
              }
            });
            function b(C, l) {
              C || !l ? m(C) : y ? y(l) : a(null, l);
            }
          }
        }
        function I(E) {
          let a;
          r.freeze(), G("processSync", r.Parser), J("processSync", r.Compiler);
          const A = O(E);
          return r.process(A, y), yu("processSync", "process", a), A;
          function y(m) {
            a = true, Du(m);
          }
        }
      }
      function pu(u, e) {
        return typeof u == "function" && u.prototype && (Ju(u.prototype) || e in u.prototype);
      }
      function Ju(u) {
        let e;
        for (e in u)
          if (cu.call(u, e))
            return true;
        return false;
      }
      function G(u, e) {
        if (typeof e != "function")
          throw new TypeError("Cannot `" + u + "` without `Parser`");
      }
      function J(u, e) {
        if (typeof e != "function")
          throw new TypeError("Cannot `" + u + "` without `Compiler`");
      }
      function X(u, e) {
        if (e)
          throw new Error("Cannot call `" + u + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
      }
      function Bu(u) {
        if (!$(u) || typeof u.type != "string")
          throw new TypeError("Expected node, got `" + u + "`");
      }
      function yu(u, e, t) {
        if (!t)
          throw new Error("`" + u + "` finished async. Use `" + e + "` instead");
      }
      function O(u) {
        return Xu(u) ? u : new Zu(u);
      }
      function Xu(u) {
        return Boolean(u && typeof u == "object" && "message" in u && "messages" in u);
      }
      function Qu(u) {
        return typeof u == "string" || nu(u);
      }
      function ue(u) {
        const e = class extends u {
        }, t = e.prototype;
        let n;
        for (n in t) {
          const D = t[n];
          D && typeof D == "object" && (t[n] = "concat" in D ? D.concat() : Object.assign({}, D));
        }
        return e;
      }
      var B = du;
      function du(u, e) {
        var t = e || "", n, D, r;
        if (!u || !("length" in u) && !u.type)
          throw new Error("Expected node, not `" + u + "`");
        if (typeof u.value == "string")
          return u.value;
        if (r = "length" in u ? u : u.children, D = r.length, D === 1 && "value" in r[0])
          return r[0].value;
        for (n = []; D--; )
          n[D] = du(r[D], t);
        return n.join(t);
      }
      var ee = De, te = {}.hasOwnProperty;
      function De(u, e, t) {
        var n = -1, D;
        if (!u)
          throw new Error("Iterate requires that |this| not be " + u);
        if (!te.call(u, "length"))
          throw new Error("Iterate requires that |this| has a `length`");
        if (typeof e != "function")
          throw new Error("`callback` must be a function");
        for (; ++n < u.length; )
          n in u && (D = e.call(t, u[n], n, u), typeof D == "number" && (D < 0 && (n = 0), n = D - 1));
      }
      var ne = ee, re = ie;
      function ie(u) {
        return oe(Fe(u));
      }
      function oe(u) {
        return e;
        function e(t) {
          var n = t && t.children;
          if (!n)
            throw new Error("Missing children in `parent` for `modifier`");
          ne(n, u, t);
        }
      }
      function Fe(u) {
        return e;
        function e(t, n) {
          return u(t, n, this);
        }
      }
      var v = re, se = v(function(u, e, t) {
        var n, D;
        if (!(u.type !== "SymbolNode" && u.type !== "PunctuationNode" || B(u) !== "&") && (n = t.children, D = n[e + 1], !(e > 0 && n[e - 1].type === "WordNode" || !(D && D.type === "WordNode"))))
          return n.splice(e, 1), D.children.unshift(u), D.position && u.position && (D.position.start = u.position.start), e - 1;
      }), Ee = v(function(u, e, t) {
        var n, D, r;
        if (e > 0 && (u.type === "SymbolNode" || u.type === "PunctuationNode") && B(u) === "-" && (n = t.children, D = n[e - 1], r = n[e + 1], (!r || r.type !== "WordNode") && D && D.type === "WordNode"))
          return n.splice(e, 1), D.children.push(u), D.position && u.position && (D.position.end = u.position.end), e;
      }), Ce = /^([!"').?\u00BB\u0F3B\u0F3D\u169C\u2019\u201D\u2026\u203A\u203D\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21\u2E23\u2E25\u2E27\u2E29\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63\]}])\1*$/, ae = /^[ \t]*((\r?\n|\r)[\t ]*)+$/, Ae = /^[ \t]*((\r?\n|\r)[\t ]*){2,}$/, gu = /^([!.?\u2026\u203D]+)$/, le = /^([&'\-.:=?@\u00AD\u00B7\u2010\u2011\u2019\u2027]|_+)$/, fe = /^(?:[\d\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]|\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9])+$/, ce = /^\d/, he = /^(?:[a-z\u00B5\u00DF-\u00F6\u00F8-\u00FF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C3\uA7C8\uA7CA\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43])/, pe = /[\uD800-\uDFFF]/, Be = /[!"'-),-/:;?[-\]_{}\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u201F\u2022-\u2027\u2032-\u203A\u203C-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, ye = /[\dA-Za-z\u00AA\u00B2\u00B3\u00B5\u00B9\u00BA\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u17F0-\u17F9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1AC0\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u20D0-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA827\uA82C\uA830-\uA835\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE6\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC52-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF3B]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]|\uDB40[\uDD00-\uDDEF]/, de = /[\t-\r \u0085\u00A0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, ge = v(function(u, e, t) {
        var n, D, r, i, o, F, s;
        if (e > 0 && (u.type === "SymbolNode" || u.type === "PunctuationNode") && (n = t.children, r = n[e - 1], r && r.type === "WordNode")) {
          for (o = e - 1, F = [], s = []; n[++o]; )
            if (D = n[o], D.type === "WordNode")
              F = F.concat(s, D.children), s = [];
            else if ((D.type === "SymbolNode" || D.type === "PunctuationNode") && le.test(B(D)))
              s.push(D);
            else
              break;
          if (F.length > 0)
            return s.length > 0 && (o -= s.length), n.splice(e, o - e), r.children = r.children.concat(F), i = F[F.length - 1], r.position && i.position && (r.position.end = i.position.end), e;
        }
      }), ve = "/", we = v(function(u, e, t) {
        var n = t.children, D, r, i, o, F, s, f;
        if (D = n[e - 1], r = n[e + 1], D && D.type === "WordNode" && (u.type === "SymbolNode" || u.type === "PunctuationNode") && B(u) === ve && (i = B(D), s = u, F = [u], f = 1, r && r.type === "WordNode" && (o = B(r), s = r, F = F.concat(r.children), f++), i.length < 3 && (!o || o.length < 3)))
          return D.children = D.children.concat(F), n.splice(e, f), D.position && s.position && (D.position.end = s.position.end), e;
      }), me = v(function(u, e, t) {
        var n, D, r, i, o, F, s;
        if (e > 0 && B(u) === "." && (n = t.children, D = n[e - 1], r = D.children, D.type === "WordNode" && r && r.length !== 1 && r.length % 2 != 0)) {
          for (i = r.length, F = true; r[--i]; )
            if (o = r[i], s = B(o), i % 2 == 0) {
              if (s.length > 1)
                return;
              fe.test(s) || (F = false);
            } else if (s !== ".") {
              if (i < r.length - 2)
                break;
              return;
            }
          if (!F)
            return n.splice(e, 1), r.push(u), D.position && u.position && (D.position.end = u.position.end), e;
        }
      }), be = v(function(u, e, t) {
        var n = t.children, D;
        if (u.type === "WordNode" && (D = n[e + 1], D && D.type === "WordNode"))
          return n.splice(e + 1, 1), u.children = u.children.concat(D.children), D.position && u.position && (u.position.end = D.position.end), e;
      }), ke = Se;
      function Se(u) {
        return e;
        function e(t) {
          var n = -1, D = t && t.children;
          if (!D)
            throw new Error("Missing children in `parent` for `visitor`");
          for (; ++n in D; )
            u(D[n], n, t);
        }
      }
      var Q = ke, uu = Q(function(u, e, t) {
        var n = t.children;
        !u.position || (e < 1 && (!t.position || !t.position.start) && (vu(t), t.position.start = u.position.start), e === n.length - 1 && (!t.position || !t.position.end) && (vu(t), t.position.end = u.position.end));
      });
      function vu(u) {
        u.position || (u.position = {});
      }
      var Ne = v(function(u, e, t) {
        for (var n = u.children, D = -1, r, i; n[++D]; )
          if (n[D].type === "WordNode")
            return;
        if (r = t.children[e - 1], r)
          return r.children = r.children.concat(n), t.children.splice(e, 1), r.position && u.position && (r.position.end = u.position.end), e;
        i = t.children[e + 1], i && (i.children = n.concat(i.children), i.position && u.position && (i.position.start = u.position.start), t.children.splice(e, 1));
      }), Pe = v(function(u, e, t) {
        var n = u.children, D, r, i;
        if (n && n.length > 0 && e > 0 && (D = n[0], r = n[1], i = t.children[e - 1], (D.type === "SymbolNode" || D.type === "PunctuationNode") && Ce.test(B(D))))
          return i.children.push(n.shift()), D.position && i.position && (i.position.end = D.position.end), r && r.position && u.position && (u.position.start = r.position.start), e - 1;
      }), ze = v(function(u, e, t) {
        var n = u.children, D, r, i, o;
        if (n && n.length > 0 && e > 0)
          for (D = -1; n[++D]; ) {
            if (r = n[D], r.type === "WordNode")
              return he.test(B(r)) ? (i = t.children, o = i[e - 1], o.children = o.children.concat(n), i.splice(e, 1), o.position && u.position && (o.position.end = u.position.end), e) : void 0;
            if (r.type === "SymbolNode" || r.type === "PunctuationNode")
              return;
          }
      }), Ie = v(function(u, e, t) {
        var n = u.children, D = t.children, r = D[e - 1], i = n[0];
        if (r && i && i.type === "WordNode" && ce.test(B(i)))
          return r.children = r.children.concat(n), D.splice(e, 1), r.position && u.position && (r.position.end = u.position.end), e;
      }), xe = new RegExp("^([0-9]{1,3}|[a-z]|al|ca|cap|cca|cent|cf|cit|con|cp|cwt|ead|etc|ff|fl|ibid|id|nem|op|pro|seq|sic|stat|tem|viz)$"), Te = v(function(u, e, t) {
        var n = u.children, D, r, i;
        if (n && n.length > 1 && (D = n[n.length - 1], D && B(D) === "." && (r = n[n.length - 2], r && r.type === "WordNode" && xe.test(B(r).toLowerCase()) && (r.children.push(D), n.pop(), D.position && r.position && (r.position.end = D.position.end), i = t.children[e + 1], i))))
          return u.children = n.concat(i.children), t.children.splice(e + 1, 1), i.position && u.position && (u.position.end = i.position.end), e - 1;
      }), We = v(function(u, e, t) {
        var n = u.children, D, r, i, o;
        if (!(!n || n.length === 0 || e < 1))
          for (r = -1; n[++r]; ) {
            if (D = n[r], D.type === "WordNode")
              return;
            if (D.type === "SymbolNode" || D.type === "PunctuationNode")
              return i = B(D), i !== "," && i !== ";" ? void 0 : (o = t.children[e - 1], o.children = o.children.concat(n), o.position && u.position && (o.position.end = u.position.end), t.children.splice(e, 1), e);
          }
      }), Oe = Q(function(u) {
        for (var e = u.children, t = e.length, n = false, D, r, i, o; e[--t]; ) {
          if (D = e[t], D.type !== "SymbolNode" && D.type !== "PunctuationNode") {
            D.type === "WordNode" && (n = true);
            continue;
          }
          if (!!gu.test(B(D))) {
            if (!n) {
              n = true;
              continue;
            }
            if (B(D) === ".")
              if (r = e[t - 1], i = e[t + 1], r && r.type === "WordNode") {
                if (o = e[t + 2], i && o && i.type === "WhiteSpaceNode" && B(o) === ".")
                  continue;
                e.splice(t, 1), r.children.push(D), D.position && r.position && (r.position.end = D.position.end), t--;
              } else
                i && i.type === "WordNode" && (e.splice(t, 1), i.children.unshift(D), D.position && i.position && (i.position.start = D.position.start));
          }
        }
      }), wu = Q(function(u, e, t) {
        var n = u.children, D;
        n && n.length > 0 && n[0].type === "WhiteSpaceNode" && (t.children.splice(e, 0, n.shift()), D = n[0], D && D.position && u.position && (u.position.start = D.position.start));
      }), mu = v(function(u, e, t) {
        var n = u.children, D;
        if (n && n.length > 0 && n[n.length - 1].type === "WhiteSpaceNode")
          return t.children.splice(e + 1, 0, u.children.pop()), D = n[n.length - 1], D && D.position && u.position && (u.position.end = D.position.end), e;
      }), je = v(function(u, e, t) {
        var n, D, r, i, o, F, s;
        if (u.type === "SentenceNode") {
          for (n = u.children, D = 0; ++D < n.length - 1; )
            if (s = n[D], !(s.type !== "WhiteSpaceNode" || !Ae.test(B(s))))
              return u.children = n.slice(0, D), F = { type: "SentenceNode", children: n.slice(D + 1) }, r = n[D - 1], i = n[D + 1], t.children.splice(e + 1, 0, s, F), u.position && r.position && i.position && (o = u.position.end, u.position.end = r.position.end, F.position = { start: i.position.start, end: o }), e + 1;
        }
      }), bu = v(function(u, e, t) {
        if ("children" in u && u.children.length === 0)
          return t.children.splice(e, 1), e;
      });
      function _e(u, e) {
        return t;
        function t(n) {
          for (var D = [], r = n.children, i = n.type, o = -1, F = r.length - 1, s = 0, f, h, g; ++o < r.length; )
            (o === F || r[o].type === u && e.test(B(r[o]))) && (f = r[s], h = r[o], g = { type: i, children: r.slice(s, o + 1) }, f.position && h.position && (g.position = { start: f.position.start, end: h.position.end }), D.push(g), s = o + 1);
          return D;
        }
      }
      function eu(u) {
        var e = u.type, t = u.tokenizer, n = u.delimiter, D = n && _e(u.delimiterType, n);
        return r;
        function r(i) {
          var o = this[t](i);
          return { type: e, children: D ? D(o) : o };
        }
      }
      class d {
        constructor(e, t) {
          var n = t || e;
          this.doc = n ? String(n) : null;
        }
        run(e, t) {
          var n = e + "Plugins", D = this[n], r = -1;
          if (D)
            for (; D[++r]; )
              D[r](t);
          return t;
        }
        parse(e) {
          return this.tokenizeRoot(e || this.doc);
        }
        tokenize(e) {
          var t = this, n = [], D = 0, r = 0, i = 1, o = 1, F, s, f, h, g, z;
          if (e == null ? e = "" : e instanceof String && (e = e.toString()), typeof e != "string") {
            if ("length" in e && (!e[0] || e[0].type))
              return e;
            throw new Error("Illegal invocation: '" + e + "' is not a valid argument for 'ParseLatin'");
          }
          if (!e)
            return n;
          for (z = this.position ? E : a, f = "", s = ""; D < e.length; )
            F = e.charAt(D), de.test(F) ? g = "WhiteSpace" : Be.test(F) ? g = "Punctuation" : ye.test(F) ? g = "Word" : g = "Symbol", I(), f = F, F = "", h = g, g = null, D++;
          return I(), n;
          function I() {
            h === g && (h === "Word" || h === "WhiteSpace" || F === f || pe.test(F)) ? s += F : (s && t["tokenize" + h](s, z), s = F);
          }
          function E(C) {
            var l = y();
            return m(C), c;
            function c(...k) {
              return l(A(...k));
            }
          }
          function a() {
            return A;
          }
          function A(C, l) {
            return l ? l.children.push(C) : n.push(C), C;
          }
          function y() {
            var C = b();
            function l(c) {
              return c.position = new N(C), c;
            }
            return l;
          }
          function m(C) {
            var l = -1, c = -1;
            for (r += C.length; ++l < C.length; )
              C.charAt(l) === `
` && (c = l, i++);
            c < 0 ? o += C.length : o = C.length - c;
          }
          function N(C) {
            this.start = C, this.end = b();
          }
          function b() {
            return { line: i, column: o, offset: r };
          }
        }
      }
      d.prototype.position = true, d.prototype.tokenizeSymbol = j("Symbol"), d.prototype.tokenizeWhiteSpace = j("WhiteSpace"), d.prototype.tokenizePunctuation = j("Punctuation"), d.prototype.tokenizeSource = j("Source"), d.prototype.tokenizeText = j("Text"), d.prototype.use = ku(function(u, e, t) {
        u[e] = u[e].concat(t);
      }), d.prototype.useFirst = ku(function(u, e, t) {
        u[e] = t.concat(u[e]);
      }), L(d, "tokenizeWord", function(u, e) {
        var t = (e || Su)(""), n = { type: "WordNode", children: [] };
        return this.tokenizeText(u, e, n), t(n);
      }), L(d, "tokenizeSentence", eu({ type: "SentenceNode", tokenizer: "tokenize" })), L(d, "tokenizeParagraph", eu({ type: "ParagraphNode", delimiter: gu, delimiterType: "PunctuationNode", tokenizer: "tokenizeSentence" })), L(d, "tokenizeRoot", eu({ type: "RootNode", delimiter: ae, delimiterType: "WhiteSpaceNode", tokenizer: "tokenizeParagraph" })), d.prototype.use("tokenizeSentence", [se, Ee, ge, we, me, be, uu]), d.prototype.use("tokenizeParagraph", [Ne, Pe, ze, Ie, Te, We, Oe, wu, mu, je, bu, uu]), d.prototype.use("tokenizeRoot", [wu, mu, bu, uu]);
      function j(u) {
        return u += "Node", e;
        function e(t, n, D) {
          return t == null && (t = ""), (n || Su)(t)({ type: u, value: String(t) }, D);
        }
      }
      function L(u, e, t) {
        u.prototype[e] = function(...n) {
          return this.run(e, t.apply(this, n));
        };
      }
      function ku(u) {
        return e;
        function e(t, n) {
          var D;
          if (!(t in this))
            throw new Error("Illegal Invocation: Unsupported `key` for `use(key, plugins)`. Make sure `key` is a supported function");
          !n || (D = t + "Plugins", n = typeof n == "function" ? [n] : n.concat(), this[D] || (this[D] = []), u(this, D, n));
        }
      }
      function Re(u, e) {
        return e && e.children.push(u), u;
      }
      function Su() {
        return Re;
      }
      function Le() {
        Object.assign(this, { Parser: ue(d) });
      }
      function Nu(u, e = "") {
        let t = -1;
        if (!u || !Array.isArray(u) && !u.type)
          throw new Error("Expected node, not `" + u + "`");
        if (typeof u.value == "string")
          return u.value;
        const n = (Array.isArray(u) ? u : u.children) || [];
        if (n.length === 1 && "value" in n[0])
          return n[0].value;
        const D = [];
        for (; ++t < n.length; )
          D[t] = Nu(n[t], e);
        return D.join(e);
      }
      function Ue() {
        Object.assign(this, { Compiler: Ve });
      }
      function Ve(u) {
        return Nu(u);
      }
      const Me = Gu().use(Le).use(Ue).freeze(), Pu = function(u) {
        if (u == null)
          return He;
        if (typeof u == "string")
          return Ke(u);
        if (typeof u == "object")
          return Array.isArray(u) ? $e(u) : qe(u);
        if (typeof u == "function")
          return U(u);
        throw new Error("Expected function, string, or object as test");
      };
      function $e(u) {
        const e = [];
        let t = -1;
        for (; ++t < u.length; )
          e[t] = Pu(u[t]);
        return U(n);
        function n(...D) {
          let r = -1;
          for (; ++r < e.length; )
            if (e[r].call(this, ...D))
              return true;
          return false;
        }
      }
      function qe(u) {
        return U(e);
        function e(t) {
          let n;
          for (n in u)
            if (t[n] !== u[n])
              return false;
          return true;
        }
      }
      function Ke(u) {
        return U(e);
        function e(t) {
          return t && t.type === u;
        }
      }
      function U(u) {
        return e;
        function e(...t) {
          return Boolean(u.call(this, ...t));
        }
      }
      function He() {
        return true;
      }
      function Ye(u) {
        return u;
      }
      const Ze = true, Ge = "skip", zu = false, Je = function(u, e, t, n) {
        typeof e == "function" && typeof t != "function" && (n = t, t = e, e = null);
        const D = Pu(e), r = n ? -1 : 1;
        i(u, null, [])();
        function i(o, F, s) {
          const f = typeof o == "object" && o !== null ? o : {};
          let h;
          return typeof f.type == "string" && (h = typeof f.tagName == "string" ? f.tagName : typeof f.name == "string" ? f.name : void 0, Object.defineProperty(g, "name", { value: "node (" + Ye(f.type + (h ? "<" + h + ">" : "")) + ")" })), g;
          function g() {
            let z = [], I, E, a;
            if ((!e || D(o, F, s[s.length - 1] || null)) && (z = Xe(t(o, s)), z[0] === zu))
              return z;
            if (o.children && z[0] !== Ge)
              for (E = (n ? o.children.length : -1) + r, a = s.concat(o); E > -1 && E < o.children.length; ) {
                if (I = i(o.children[E], E, a)(), I[0] === zu)
                  return I;
                E = typeof I[1] == "number" ? I[1] : E + r;
              }
            return z;
          }
        }
      };
      function Xe(u) {
        return Array.isArray(u) ? u : typeof u == "number" ? [Ze, u] : [u];
      }
      const Qe = function(u, e, t, n) {
        typeof e == "function" && typeof t != "function" && (n = t, t = e, e = null), Je(u, e, D, n);
        function D(r, i) {
          const o = i[i.length - 1];
          return t(r, o ? o.children.indexOf(r) : null, o);
        }
      };
      let V = false;
      function u0(u) {
        u.type === "PunctuationNode" && u.value === w && (V = !V, u.value = "");
      }
      function Iu(u, e) {
        return u.type === "WhiteSpaceNode" || (u.type === "PunctuationNode" && u0(u), !V && (u == null ? void 0 : u.value) && (u.value = e(u.value)), !(u == null ? void 0 : u.children)) || u.children.forEach((t) => {
          Iu(t, e);
        }), u;
      }
      function e0(u) {
        return V = false, (e) => {
          Qe(e, "SentenceNode", (t) => {
            Iu(t, u);
          });
        };
      }
      function xu(u, e, t) {
        return u.replace(new RegExp(e, "ig"), t);
      }
      class Tu {
        constructor() {
          _(this, "type");
          _(this, "table");
          this.table = Wu;
        }
        orderedTable() {
          return this.table.sort((e, t) => {
            var n, D;
            return ((n = t[this.type]) == null ? void 0 : n.length) - ((D = e[this.type]) == null ? void 0 : D.length);
          });
        }
        getMap() {
          const e = {};
          return this.orderedTable().forEach((t) => e[t[this.type]] = t.uchar), e;
        }
        convert(e) {
          return Object.entries(this.getMap()).forEach(([t, n]) => e = xu(e, n, t)), e;
        }
        forward(e) {
          return Object.entries(this.getMap()).forEach(([n, D]) => e = xu(e, n, D)), this.table.filter((n) => n.volwes).map((n) => n.uchar).includes(e[0]) ? x + e : e;
        }
        forwardText(e) {
          return Me().use(e0, (t) => this.forward(t)).processSync(e).value;
        }
      }
      class M extends Tu {
        constructor() {
          super(...arguments);
          _(this, "type", "khan");
        }
      }
      class tu extends Tu {
        constructor() {
          super(...arguments);
          _(this, "type", "uly");
        }
      }
      function t0(u) {
        return new tu().convert(u);
      }
      function D0(u) {
        return new tu().forward(u);
      }
      function n0(u) {
        return new M().convert(u);
      }
      function r0(u) {
        return new M().forward(u);
      }
      function i0(u) {
        return new M().forwardText(u);
      }
      p.KhanConverter = M, p.UlyConverter = tu, p.khan2u = r0, p.khanText2u = i0, p.u2khan = n0, p.u2uly = t0, p.uly2u = D0, Object.defineProperty(p, "__esModule", { value: true }), p[Symbol.toStringTag] = "Module";
    });
  }
});

// extension.js
var vscode = require("vscode");
var { khanText2u } = require_shirkhan_alphabet_converter_umd();
var activeToConvert = vscode.workspace.getConfiguration("shirkhanMarkdown").get("activeConvert");
function injectContainerClassName(tokens, idx, options, env, slf) {
  if (tokens[idx].map && tokens[idx].level === 0) {
    if (activeToConvert) {
      tokens[idx].attrJoin("class", "shirkhan");
    }
  }
  return slf.renderToken(tokens, idx, options, env, slf);
}
function shirkhanAlphabetPlugin2(md) {
  md.core.ruler.after("normalize", "shirkhan-after-normalize", function(state) {
    if (activeToConvert) {
      state.src = khanText2u(state.src);
    }
  });
  md.renderer.rules.paragraph_open = md.renderer.rules.heading_open = md.renderer.rules.ordered_list_open = md.renderer.rules.bullet_list_open = injectContainerClassName;
  return md;
}
function activate(context) {
  console.log('Congratulations, your extension "shirkhan-markdown" is now active!');
  let disposable = vscode.commands.registerCommand("shirkhan-markdown.shirkhan", function() {
    activeToConvert = !activeToConvert;
    const msg = activeToConvert ? "\u5F00\u542F" : "\u5173\u95ED";
    vscode.window.showInformationMessage("shirkhan-alphabet \u8F6C\u6362\u72B6\u6001\u53D8\u6210\u4E3A:" + msg + " from shirkhan-markdown!");
  });
  context.subscriptions.push(disposable);
  return {
    extendMarkdownIt(md) {
      md.use(shirkhanAlphabetPlugin2);
      return md;
    }
  };
}
function deactivate() {
  activeToConvert = !activeToConvert;
  vscode.window.showInformationMessage("shirkhan-markdown deactivate");
}
module.exports = {
  activate,
  deactivate
};
/*!
* Determine if an object is a Buffer
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
//# sourceMappingURL=extension.js.map
