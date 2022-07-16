/**
 * Infinite Ajax Scroll v3.0.0
 * Turn your existing pagination into infinite scrolling pages with ease
 *
 * Commercial use requires one-time purchase of a commercial license
 * https://infiniteajaxscroll.com/docs/license.html
 *
 * Copyright 2014-2021 Webcreate (Jeroen Fiege)
 * https://infiniteajaxscroll.com
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).InfiniteAjaxScroll = e());
})(this, function () {
  "use strict";
  function t(t) {
    return "object" == typeof window.Node
      ? t instanceof window.Node
      : null !== t &&
          "object" == typeof t &&
          "number" == typeof t.nodeType &&
          "string" == typeof t.nodeName;
  }
  function e(e, n) {
    if ((void 0 === n && (n = document), e instanceof Array))
      return e.filter(t);
    if (t(e)) return [e];
    if (
      ((o = Object.prototype.toString.call((i = e))),
      "object" == typeof window.NodeList
        ? i instanceof window.NodeList
        : null !== i &&
          "object" == typeof i &&
          "number" == typeof i.length &&
          /^\[object (HTMLCollection|NodeList|Object)\]$/.test(o) &&
          (0 === i.length || t(i[0])))
    )
      return Array.prototype.slice.call(e);
    var i, o;
    if ("string" == typeof e)
      try {
        var r = n.querySelectorAll(e);
        return Array.prototype.slice.call(r);
      } catch (t) {
        return [];
      }
    return [];
  }
  var n = Object.prototype.hasOwnProperty,
    i = Object.prototype.toString,
    o = Object.defineProperty,
    r = Object.getOwnPropertyDescriptor,
    s = function (t) {
      return "function" == typeof Array.isArray
        ? Array.isArray(t)
        : "[object Array]" === i.call(t);
    },
    l = function (t) {
      if (!t || "[object Object]" !== i.call(t)) return !1;
      var e,
        o = n.call(t, "constructor"),
        r =
          t.constructor &&
          t.constructor.prototype &&
          n.call(t.constructor.prototype, "isPrototypeOf");
      if (t.constructor && !o && !r) return !1;
      for (e in t);
      return void 0 === e || n.call(t, e);
    },
    a = function (t, e) {
      o && "__proto__" === e.name
        ? o(t, e.name, {
            enumerable: !0,
            configurable: !0,
            value: e.newValue,
            writable: !0,
          })
        : (t[e.name] = e.newValue);
    },
    h = function (t, e) {
      if ("__proto__" === e) {
        if (!n.call(t, e)) return;
        if (r) return r(t, e).value;
      }
      return t[e];
    },
    c = function t() {
      var e,
        n,
        i,
        o,
        r,
        c,
        u = arguments,
        d = arguments[0],
        p = 1,
        f = arguments.length,
        m = !1;
      for (
        "boolean" == typeof d && ((m = d), (d = arguments[1] || {}), (p = 2)),
          (null == d || ("object" != typeof d && "function" != typeof d)) &&
            (d = {});
        f > p;
        ++p
      )
        if (null != (e = u[p]))
          for (n in e)
            (i = h(d, n)),
              d !== (o = h(e, n)) &&
                (m && o && (l(o) || (r = s(o)))
                  ? (r
                      ? ((r = !1), (c = i && s(i) ? i : []))
                      : (c = i && l(i) ? i : {}),
                    a(d, { name: n, newValue: t(m, c, o) }))
                  : void 0 !== o && a(d, { name: n, newValue: o }));
      return d;
    },
    u =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    d = "Expected a function",
    p = /^\s+|\s+$/g,
    f = /^[-+]0x[0-9a-f]+$/i,
    m = /^0b[01]+$/i,
    y = /^0o[0-7]+$/i,
    g = parseInt,
    v = "object" == typeof self && self && self.Object === Object && self,
    b =
      ("object" == typeof u && u && u.Object === Object && u) ||
      v ||
      Function("return this")(),
    w = Object.prototype.toString,
    x = Math.max,
    O = Math.min,
    E = function () {
      return b.Date.now();
    };
  function S(t, e, n) {
    var i,
      o,
      r,
      s,
      l,
      a,
      h = 0,
      c = !1,
      u = !1,
      p = !0;
    if ("function" != typeof t) throw new TypeError(d);
    function f(e) {
      var n = i,
        r = o;
      return (i = o = void 0), (h = e), (s = t.apply(r, n));
    }
    function m(t) {
      return (h = t), (l = setTimeout(g, e)), c ? f(t) : s;
    }
    function y(t) {
      var n = t - a;
      return void 0 === a || n >= e || 0 > n || (u && t - h >= r);
    }
    function g() {
      var t = E();
      if (y(t)) return v(t);
      l = setTimeout(
        g,
        (function (t) {
          var n = e - (t - a);
          return u ? O(n, r - (t - h)) : n;
        })(t)
      );
    }
    function v(t) {
      return (l = void 0), p && i ? f(t) : ((i = o = void 0), s);
    }
    function b() {
      var t = E(),
        n = y(t);
      if (((i = arguments), (o = this), (a = t), n)) {
        if (void 0 === l) return m(a);
        if (u) return (l = setTimeout(g, e)), f(a);
      }
      return void 0 === l && (l = setTimeout(g, e)), s;
    }
    return (
      (e = j(e) || 0),
      T(n) &&
        ((c = !!n.leading),
        (r = (u = "maxWait" in n) ? x(j(n.maxWait) || 0, e) : r),
        (p = "trailing" in n ? !!n.trailing : p)),
      (b.cancel = function () {
        void 0 !== l && clearTimeout(l), (h = 0), (i = a = o = l = void 0);
      }),
      (b.flush = function () {
        return void 0 === l ? s : v(E());
      }),
      b
    );
  }
  function T(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }
  function j(t) {
    if ("number" == typeof t) return t;
    if (
      (function (t) {
        return (
          "symbol" == typeof t ||
          ((function (t) {
            return !!t && "object" == typeof t;
          })(t) &&
            "[object Symbol]" == w.call(t))
        );
      })(t)
    )
      return NaN;
    if (T(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = T(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(p, "");
    var n = m.test(t);
    return n || y.test(t) ? g(t.slice(2), n ? 2 : 8) : f.test(t) ? NaN : +t;
  }
  var L = function (t, e, n) {
      var i = !0,
        o = !0;
      if ("function" != typeof t) throw new TypeError(d);
      return (
        T(n) &&
          ((i = "leading" in n ? !!n.leading : i),
          (o = "trailing" in n ? !!n.trailing : o)),
        S(t, e, { leading: i, maxWait: e, trailing: o })
      );
    },
    I = {
      item: void 0,
      next: void 0,
      pagination: void 0,
      responseType: "document",
      bind: !0,
      scrollContainer: window,
      spinner: !1,
      logger: !0,
      loadOnScroll: !0,
      negativeMargin: 0,
      trigger: !1,
      prefill: !0,
    },
    C = function (t, n) {
      var i = e(t);
      if (i.length > 1) throw Error('Expected single element for "' + n + '"');
      if (0 === i.length)
        throw Error('Element "' + t + '" not found for "' + n + '"');
    },
    _ = function (t, n) {
      if (0 === e(t).length)
        throw Error('Element "' + t + '" not found for "' + n + '"');
    },
    H = function (t) {
      for (var e = [], n = arguments.length - 1; n-- > 0; )
        e[n] = arguments[n + 1];
      try {
        t.apply(void 0, e);
      } catch (t) {
        console && console.warn && console.warn(t.message);
      }
    };
  function N(t) {
    if (t !== window) return { x: t.scrollLeft, y: t.scrollTop };
    var e = void 0 !== window.pageXOffset,
      n = "CSS1Compat" === (document.compatMode || "");
    return {
      x: e
        ? window.pageXOffset
        : n
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft,
      y: e
        ? window.pageYOffset
        : n
        ? document.documentElement.scrollTop
        : document.body.scrollTop,
    };
  }
  function M(t) {
    var e;
    if (t !== window) e = t.getBoundingClientRect();
    else {
      var n = document.documentElement,
        i = document.body;
      e = {
        top: 0,
        left: 0,
        right: n.clientWidth || i.clientWidth,
        width: n.clientWidth || i.clientWidth,
        bottom: n.clientHeight || i.clientHeight,
        height: n.clientHeight || i.clientHeight,
      };
    }
    return e;
  }
  var P = "append",
    F = "appended",
    R = "binded",
    D = "unbinded",
    k = "hit",
    A = "load",
    B = "loaded",
    W = "error",
    z = "last",
    X = "next",
    q = "nexted",
    $ = "ready",
    V = "scrolled",
    Y = "resized",
    G = "page",
    U = "prefill",
    J = "prefilled",
    K = { y: 0, x: 0, deltaY: 0, deltaX: 0 };
  function Q(t, e) {
    var n = N(t);
    return (
      (n.deltaY = n.y - (e ? e.y : n.y)), (n.deltaX = n.x - (e ? e.x : n.x)), n
    );
  }
  function Z() {
    var t = this,
      e = (t._lastScroll = Q(t.scrollContainer, t._lastScroll || K));
    this.emitter.emit(V, { scroll: e });
  }
  function tt() {
    var t = this,
      e = (t._lastScroll = Q(t.scrollContainer, t._lastScroll || K));
    this.emitter.emit(Y, { scroll: e });
  }
  function et() {}
  et.prototype = {
    on: function (t, e, n) {
      var i = this.e || (this.e = {});
      return (i[t] || (i[t] = [])).push({ fn: e, ctx: n }), this;
    },
    once: function (t, e, n) {
      var i = this;
      function o() {
        i.off(t, o), e.apply(n, arguments);
      }
      return (o._ = e), this.on(t, o, n);
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          n = ((this.e || (this.e = {}))[t] || []).slice(),
          i = 0,
          o = n.length;
        o > i;
        i++
      )
        n[i].fn.apply(n[i].ctx, e);
      return this;
    },
    off: function (t, e) {
      var n = this.e || (this.e = {}),
        i = n[t],
        o = [];
      if (i && e)
        for (var r = 0, s = i.length; s > r; r++)
          i[r].fn !== e && i[r].fn._ !== e && o.push(i[r]);
      return o.length ? (n[t] = o) : delete n[t], this;
    },
  };
  var nt = et;
  function it(t) {
    var n = this,
      i = n._lastResponse || document,
      o = e(n.options.next, i)[0];
    if (o)
      return n.load(o.href).then(function (o) {
        i = n._lastResponse = o.xhr.response;
        var r = e(n.options.next, i)[0];
        return n
          .append(o.items)
          .then(function () {
            return !!r;
          })
          .then(function (e) {
            return (
              !e &&
                1 >= t &&
                console &&
                console.warn &&
                console.warn(
                  'Element "' +
                    n.options.next +
                    '" not found for "options.next" on "' +
                    o.url +
                    '"'
                ),
              e
            );
          });
      });
    H(C, n.options.next, "options.next");
  }
  nt.TinyEmitter = et;
  var ot = { element: void 0, hide: !1 };
  var rt = function (t, e) {
    (this.options = c(
      {},
      ot,
      (function (t) {
        return (
          "string" == typeof t ||
          ("object" == typeof t && t.nodeType === Node.ELEMENT_NODE)
            ? (t = { element: t, hide: !0 })
            : "boolean" == typeof t && (t = { element: void 0, hide: t }),
          t
        );
      })(e)
    )),
      (this.originalDisplayStyles = new WeakMap()),
      this.options.hide &&
        (H(_, this.options.element, "pagination.element"),
        t.on(R, this.hide.bind(this)),
        t.on(D, this.restore.bind(this)));
  };
  (rt.prototype.hide = function () {
    var t = this;
    e(this.options.element).forEach(function (e) {
      t.originalDisplayStyles.set(e, window.getComputedStyle(e).display),
        (e.style.display = "none");
    });
  }),
    (rt.prototype.restore = function () {
      var t = this;
      e(this.options.element).forEach(function (e) {
        e.style.display = t.originalDisplayStyles.get(e) || "block";
      });
    });
  var st = {
    element: void 0,
    delay: 600,
    show: function (t) {
      t.style.opacity = "1";
    },
    hide: function (t) {
      t.style.opacity = "0";
    },
  };
  var lt = function (t, n) {
    !1 !== n &&
      ((this.ias = t),
      (this.options = c(
        {},
        st,
        (function (t) {
          return (
            ("string" == typeof t ||
              ("object" == typeof t && t.nodeType === Node.ELEMENT_NODE)) &&
              (t = { element: t }),
            t
          );
        })(n)
      )),
      void 0 !== this.options.element &&
        C(this.options.element, "spinner.element"),
      (this.element = e(this.options.element)[0]),
      (this.hideFn = this.options.hide),
      (this.showFn = this.options.show),
      t.on(R, this.bind.bind(this)),
      t.on(R, this.hide.bind(this)));
  };
  (lt.prototype.bind = function () {
    var t,
      e,
      n = this,
      i = this.ias;
    i.on(X, function () {
      (t = +new Date()), n.show();
    }),
      i.on(z, function () {
        n.hide();
      }),
      i.on(P, function (i) {
        e = Math.max(0, n.options.delay - (+new Date() - t));
        var o = i.appendFn.bind({});
        i.appendFn = function (t, i, r) {
          return new Promise(function (s) {
            setTimeout(function () {
              n.hide().then(function () {
                o(t, i, r), s();
              });
            }, e);
          });
        };
      });
  }),
    (lt.prototype.show = function () {
      return Promise.resolve(this.showFn(this.element));
    }),
    (lt.prototype.hide = function () {
      return Promise.resolve(this.hideFn(this.element));
    });
  var at = {
    hit: function () {
      console.log("Hit scroll threshold");
    },
    binded: function () {
      console.log("Binded event handlers");
    },
    unbinded: function () {
      console.log("Unbinded event handlers");
    },
    next: function (t) {
      console.log("Next page triggered [pageIndex=" + t.pageIndex + "]");
    },
    nexted: function (t) {
      console.log("Next page completed [pageIndex=" + t.pageIndex + "]");
    },
    load: function (t) {
      console.log("Start loading " + t.url);
    },
    loaded: function () {
      console.log("Finished loading");
    },
    append: function () {
      console.log("Start appending items");
    },
    appended: function (t) {
      console.log("Finished appending " + t.items.length + " item(s)");
    },
    last: function () {
      console.log("No more pages left to load");
    },
    page: function (t) {
      console.log("Page changed [pageIndex=" + t.pageIndex + "]");
    },
    prefill: function (t) {
      console.log("Start prefilling");
    },
    prefilled: function (t) {
      console.log("Finished prefilling");
    },
  };
  var ht = function (t, e) {
    if (!1 !== e) {
      var n = (function (t) {
        return !0 === t && (t = at), t;
      })(e);
      Object.keys(n).forEach(function (e) {
        t.on(e, n[e]);
      });
    }
  };
  var ct = function (t) {
    (this.ias = t),
      (this.pageBreaks = []),
      (this.currentPageIndex = t.pageIndex),
      (this.currentScrollTop = 0),
      t.on(R, this.binded.bind(this)),
      t.on(X, this.next.bind(this)),
      t.on(V, this.scrolled.bind(this)),
      t.on(Y, this.scrolled.bind(this));
  };
  (ct.prototype.binded = function () {
    this.ias.sentinel() &&
      this.pageBreaks.push({
        pageIndex: this.currentPageIndex,
        url: "" + document.location,
        title: document.title,
        sentinel: this.ias.sentinel(),
      });
  }),
    (ct.prototype.next = function () {
      var t = this,
        e = "" + document.location,
        n = document.title,
        i = function (t) {
          (e = t.url), t.xhr.response && (n = t.xhr.response.title);
        };
      this.ias.once(B, i),
        this.ias.once(q, function (o) {
          t.pageBreaks.push({
            pageIndex: o.pageIndex,
            url: e,
            title: n,
            sentinel: t.ias.sentinel(),
          }),
            t.update(),
            t.ias.off(B, i);
        });
    }),
    (ct.prototype.scrolled = function (t) {
      this.update(t.scroll.y);
    }),
    (ct.prototype.update = function (t) {
      this.currentScrollTop = t || this.currentScrollTop;
      var e = (function (t, e, n) {
        for (var i = e + M(n).height, o = t.length - 1; o >= 0; o--)
          if (i > t[o].sentinel.getBoundingClientRect().bottom + e)
            return t[Math.min(o + 1, t.length - 1)];
        return t[0];
      })(this.pageBreaks, this.currentScrollTop, this.ias.scrollContainer);
      e &&
        e.pageIndex !== this.currentPageIndex &&
        (this.ias.emitter.emit(G, e), (this.currentPageIndex = e.pageIndex));
    });
  var ut = {
    element: void 0,
    when: function (t) {
      return !0;
    },
    show: function (t) {
      t.style.opacity = "1";
    },
    hide: function (t) {
      t.style.opacity = "0";
    },
  };
  var dt = function (t, n) {
    var i = this;
    !1 !== n &&
      ((this.ias = t),
      (this.options = c(
        {},
        ut,
        (function (t) {
          if (
            (("string" == typeof t ||
              "function" == typeof t ||
              ("object" == typeof t && t.nodeType === Node.ELEMENT_NODE)) &&
              (t = { element: t }),
            "function" == typeof t.element && (t.element = t.element()),
            t.when && Array.isArray(t.when))
          ) {
            var e = t.when;
            t.when = function (t) {
              return -1 !== e.indexOf(t);
            };
          }
          return t;
        })(n)
      )),
      void 0 !== this.options.element &&
        C(this.options.element, "trigger.element"),
      (this.element = e(this.options.element)[0]),
      (this.hideFn = this.options.hide),
      (this.showFn = this.options.show),
      (this.voter = this.options.when),
      (this.showing = void 0),
      (this.enabled = void 0),
      t.on(R, this.bind.bind(this)),
      t.on(D, this.unbind.bind(this)),
      t.on(k, this.hit.bind(this)),
      t.on(X, function (t) {
        return i.ias.once(F, function () {
          return i.update(t.pageIndex);
        });
      }));
  };
  function pt(t, e, n) {
    var i = n ? n.nextSibling : null,
      o = document.createDocumentFragment();
    t.forEach(function (t) {
      o.appendChild(t);
    }),
      e.insertBefore(o, i);
  }
  (dt.prototype.bind = function () {
    this.hide(),
      this.update(this.ias.pageIndex),
      this.element.addEventListener("click", this.clickHandler.bind(this));
  }),
    (dt.prototype.unbind = function () {
      this.element.removeEventListener("click", this.clickHandler.bind(this));
    }),
    (dt.prototype.clickHandler = function () {
      this.hide().then(this.ias.next.bind(this.ias));
    }),
    (dt.prototype.update = function (t) {
      (this.enabled = this.voter(t)),
        this.enabled
          ? this.ias.disableLoadOnScroll()
          : this.ias.enableLoadOnScroll();
    }),
    (dt.prototype.hit = function () {
      this.enabled && this.show();
    }),
    (dt.prototype.show = function () {
      if (!this.showing)
        return (this.showing = !0), Promise.resolve(this.showFn(this.element));
    }),
    (dt.prototype.hide = function () {
      if (this.showing || void 0 === this.showing)
        return (this.showing = !1), Promise.resolve(this.hideFn(this.element));
    });
  var ft = window.ResizeObserver,
    mt = function (t, e) {
      (this.el = t), (this.listener = e);
    };
  (mt.prototype.observe = function () {
    this.el.addEventListener("resize", this.listener);
  }),
    (mt.prototype.unobserve = function () {
      this.el.removeEventListener("resize", this.listener);
    });
  var yt = function (t, e) {
    (this.el = t), (this.listener = e), (this.ro = new ft(this.listener));
  };
  (yt.prototype.observe = function () {
    this.ro.observe(this.el);
  }),
    (yt.prototype.unobserve = function () {
      this.ro.unobserve();
    });
  var gt = function (t, e) {
    (this.el = t),
      (this.listener = e),
      (this.interval = null),
      (this.lastHeight = null);
  };
  (gt.prototype.pollHeight = function () {
    var t = Math.trunc(M(this.el).height);
    null !== this.lastHeight && this.lastHeight !== t && this.listener(),
      (this.lastHeight = t);
  }),
    (gt.prototype.observe = function () {
      this.interval = setInterval(this.pollHeight.bind(this), 200);
    }),
    (gt.prototype.unobserve = function () {
      clearInterval(this.interval);
    });
  var vt = function (t, e) {
    (this.ias = t), (this.enabled = e);
  };
  (vt.prototype.prefill = function () {
    var t = this;
    if (this.enabled && 0 >= this.ias.distance())
      return (
        this.ias.emitter.emit(U),
        this._prefill().then(function () {
          t.ias.emitter.emit(J), t.ias.measure();
        })
      );
  }),
    (vt.prototype._prefill = function () {
      var t = this;
      return this.ias.next().then(function (e) {
        if (e) return 0 > t.ias.distance() ? t._prefill() : void 0;
      });
    });
  var bt = function (t, n) {
    var i,
      o,
      r,
      s = this;
    void 0 === n && (n = {}),
      C(t, "container"),
      (this.container = e(t)[0]),
      (this.options = c({}, I, n)),
      (this.emitter = new nt()),
      this.options.loadOnScroll
        ? this.enableLoadOnScroll()
        : this.disableLoadOnScroll(),
      (this.negativeMargin = Math.abs(this.options.negativeMargin)),
      (this.scrollContainer = this.options.scrollContainer),
      this.options.scrollContainer !== window &&
        (C(this.options.scrollContainer, "options.scrollContainer"),
        (this.scrollContainer = e(this.options.scrollContainer)[0])),
      (this.nextHandler = it),
      !1 === this.options.next
        ? (this.nextHandler = function () {})
        : "function" == typeof this.options.next &&
          (this.nextHandler = this.options.next),
      (this.resizeObserver =
        ((i = this),
        (o = this.scrollContainer),
        (r = L(tt, 200).bind(i)),
        o === window
          ? new mt(o, r)
          : ft
          ? new yt(o, r)
          : (console &&
              console.warn &&
              console.warn(
                "ResizeObserver not supported. Falling back on polling."
              ),
            new gt(o, r)))),
      (this._scrollListener = L(Z, 200).bind(this)),
      (this.ready = !1),
      (this.bindOnReady = !0),
      (this.binded = !1),
      (this.paused = !1),
      (this.pageIndex = this.sentinel() ? 0 : -1),
      this.on(k, function () {
        s.loadOnScroll && s.next();
      }),
      this.on(V, this.measure),
      this.on(Y, this.measure),
      (this.pagination = new rt(this, this.options.pagination)),
      (this.spinner = new lt(this, this.options.spinner)),
      (this.logger = new ht(this, this.options.logger)),
      (this.paging = new ct(this)),
      (this.trigger = new dt(this, this.options.trigger)),
      (this.prefill = new vt(this, this.options.prefill)),
      this.on(R, this.prefill.prefill.bind(this.prefill));
    var l = function () {
      s.ready ||
        ((s.ready = !0),
        s.emitter.emit($),
        s.bindOnReady && s.options.bind && s.bind());
    };
    "complete" === document.readyState || "interactive" === document.readyState
      ? setTimeout(l, 1)
      : window.addEventListener("DOMContentLoaded", l);
  };
  return (
    (bt.prototype.bind = function () {
      this.binded ||
        (this.ready || (this.bindOnReady = !1),
        this.scrollContainer.addEventListener("scroll", this._scrollListener),
        this.resizeObserver.observe(),
        (this.binded = !0),
        this.emitter.emit(R));
    }),
    (bt.prototype.unbind = function () {
      this.binded
        ? (this.resizeObserver.unobserve(),
          this.scrollContainer.removeEventListener(
            "scroll",
            this._scrollListener
          ),
          (this.binded = !1),
          this.emitter.emit(D))
        : this.ready || this.once(R, this.unbind);
    }),
    (bt.prototype.next = function () {
      var t = this;
      if (!this.binded) return this.ready ? void 0 : this.once(R, this.next);
      this.pause();
      var e = this.pageIndex + 1;
      return (
        this.emitter.emit(X, { pageIndex: this.pageIndex + 1 }),
        Promise.resolve(this.nextHandler(e))
          .then(function (n) {
            (t.pageIndex = e), n ? t.resume() : t.emitter.emit(z);
          })
          .then(function () {
            t.emitter.emit(q, { pageIndex: t.pageIndex });
          })
      );
    }),
    (bt.prototype.load = function (t) {
      var n = this;
      return new Promise(function (i, o) {
        var r = new XMLHttpRequest(),
          s = {
            url: t,
            xhr: r,
            method: "GET",
            body: null,
            nocache: !1,
            responseType: n.options.responseType,
            headers: { "X-Requested-With": "XMLHttpRequest" },
          };
        n.emitter.emit(A, s);
        var l = s.url,
          a = s.method,
          h = s.responseType,
          c = s.headers,
          u = s.body;
        for (var d in (s.nocache ||
          (l = l + (/\?/.test(l) ? "&" : "?") + new Date().getTime()),
        (r.onreadystatechange = function () {
          if (r.readyState === XMLHttpRequest.DONE)
            if (0 === r.status);
            else if (200 === r.status) {
              var t = r.response;
              "document" === h && (t = e(n.options.item, r.response)),
                n.emitter.emit(B, { items: t, url: l, xhr: r }),
                i({ items: t, url: l, xhr: r });
            } else n.emitter.emit(W, { url: l, method: a, xhr: r }), o(r);
        }),
        (r.onerror = function () {
          n.emitter.emit(W, { url: l, method: a, xhr: r }), o(r);
        }),
        r.open(a, l, !0),
        (r.responseType = h),
        c))
          r.setRequestHeader(d, c[d]);
        r.send(u);
      });
    }),
    (bt.prototype.append = function (t, e) {
      var n = this,
        i = { items: t, parent: (e = e || n.container), appendFn: pt };
      n.emitter.emit(P, i);
      return new Promise(function (o) {
        window.requestAnimationFrame(function () {
          Promise.resolve(i.appendFn(i.items, i.parent, n.sentinel())).then(
            function () {
              o({ items: t, parent: e });
            }
          );
        });
      }).then(function (t) {
        n.emitter.emit(F, t);
      });
    }),
    (bt.prototype.sentinel = function () {
      var t = e(this.options.item, this.container);
      return t.length ? t[t.length - 1] : null;
    }),
    (bt.prototype.pause = function () {
      this.paused = !0;
    }),
    (bt.prototype.resume = function () {
      this.paused = !1;
    }),
    (bt.prototype.enableLoadOnScroll = function () {
      this.loadOnScroll = !0;
    }),
    (bt.prototype.disableLoadOnScroll = function () {
      this.loadOnScroll = !1;
    }),
    (bt.prototype.distance = function (t, e) {
      var n = t || M(this.scrollContainer),
        i = (function (t, e, n) {
          var i = n;
          if (!t) return -1 * i.height;
          var o = e.y,
            r = t.getBoundingClientRect();
          return Math.trunc(o + r.bottom - i.top - (o + i.height));
        })(e || this.sentinel(), N(this.scrollContainer), n);
      return (i -= this.negativeMargin), i;
    }),
    (bt.prototype.measure = function () {
      if (!this.paused) {
        var t = M(this.scrollContainer);
        if (0 !== t.height) {
          var e = this.sentinel(),
            n = this.distance(t, e);
          n > 0 || this.emitter.emit(k, { distance: n });
        }
      }
    }),
    (bt.prototype.on = function (t, e) {
      this.emitter.on(t, e, this), t === R && this.binded && e.bind(this)();
    }),
    (bt.prototype.off = function (t, e) {
      this.emitter.off(t, e, this);
    }),
    (bt.prototype.once = function (t, e) {
      var n = this;
      return new Promise(function (i) {
        n.emitter.once(
          t,
          function () {
            Promise.resolve(e.apply(this, arguments)).then(i);
          },
          n
        ),
          t === R && n.binded && (e.bind(n)(), i());
      });
    }),
    bt
  );
});
