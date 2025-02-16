(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9595],
  {
    45634: function (e, t) {
      "use strict";
      var r, n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          PrefetchKind: function () {
            return r;
          },
          ACTION_REFRESH: function () {
            return o;
          },
          ACTION_NAVIGATE: function () {
            return i;
          },
          ACTION_RESTORE: function () {
            return u;
          },
          ACTION_SERVER_PATCH: function () {
            return l;
          },
          ACTION_PREFETCH: function () {
            return a;
          },
          ACTION_FAST_REFRESH: function () {
            return s;
          },
          ACTION_SERVER_ACTION: function () {
            return f;
          },
          isThenable: function () {
            return c;
          },
        });
      let o = "refresh",
        i = "navigate",
        u = "restore",
        l = "server-patch",
        a = "prefetch",
        s = "fast-refresh",
        f = "server-action";
      function c(e) {
        return (
          e &&
          ("object" == typeof e || "function" == typeof e) &&
          "function" == typeof e.then
        );
      }
      ((n = r || (r = {})).AUTO = "auto"),
        (n.FULL = "full"),
        (n.TEMPORARY = "temporary"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    17149: function (e, t, r) {
      "use strict";
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(44648),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    80250: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let n = r(38754),
        o = r(61757),
        i = r(85893),
        u = o._(r(67294)),
        l = n._(r(73935)),
        a = n._(r(13709)),
        s = r(3943),
        f = r(96270),
        c = r(3334);
      r(96415);
      let d = r(15832),
        p = n._(r(25930)),
        g = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !0,
          unoptimized: !1,
        };
      function m(e, t, r, n, o, i) {
        let u = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== u &&
          ((e["data-loaded-src"] = u),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    o = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function h(e) {
        let [t, r] = u.version.split(".", 2),
          n = parseInt(t, 10),
          o = parseInt(r, 10);
        return n > 18 || (18 === n && o >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let v = (0, u.forwardRef)((e, t) => {
        let {
          src: r,
          srcSet: n,
          sizes: o,
          height: l,
          width: a,
          decoding: s,
          className: f,
          style: c,
          fetchPriority: d,
          placeholder: p,
          loading: g,
          unoptimized: v,
          fill: b,
          onLoadRef: y,
          onLoadingCompleteRef: _,
          setBlurComplete: w,
          setShowAltText: j,
          onLoad: C,
          onError: P,
          ...S
        } = e;
        return (0, i.jsx)("img", {
          ...S,
          ...h(d),
          loading: g,
          width: a,
          height: l,
          decoding: s,
          "data-nimg": b ? "fill" : "1",
          className: f,
          style: c,
          sizes: o,
          srcSet: n,
          src: r,
          ref: (0, u.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (P && (e.src = e.src), e.complete && m(e, p, y, _, w, v));
            },
            [r, p, y, _, w, P, v, t]
          ),
          onLoad: (e) => {
            m(e.currentTarget, p, y, _, w, v);
          },
          onError: (e) => {
            j(!0), "empty" !== p && w(!0), P && P(e);
          },
        });
      });
      function b(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...h(r.fetchPriority),
          };
        return t && l.default.preload
          ? (l.default.preload(r.src, n), null)
          : (0, i.jsx)(a.default, {
              children: (0, i.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let y = (0, u.forwardRef)((e, t) => {
        let r = (0, u.useContext)(d.RouterContext),
          n = (0, u.useContext)(c.ImageConfigContext),
          o = (0, u.useMemo)(() => {
            let e = g || n || f.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [n]),
          { onLoad: l, onLoadingComplete: a } = e,
          m = (0, u.useRef)(l);
        (0, u.useEffect)(() => {
          m.current = l;
        }, [l]);
        let h = (0, u.useRef)(a);
        (0, u.useEffect)(() => {
          h.current = a;
        }, [a]);
        let [y, _] = (0, u.useState)(!1),
          [w, j] = (0, u.useState)(!1),
          { props: C, meta: P } = (0, s.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: y,
            showAltText: w,
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(v, {
              ...C,
              unoptimized: P.unoptimized,
              placeholder: P.placeholder,
              fill: P.fill,
              onLoadRef: m,
              onLoadingCompleteRef: h,
              setBlurComplete: _,
              setShowAltText: j,
              ref: t,
            }),
            P.priority
              ? (0, i.jsx)(b, { isAppRouter: !r, imgAttributes: C })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    85494: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return _;
          },
        });
      let n = r(38754),
        o = r(85893),
        i = n._(r(67294)),
        u = r(95203),
        l = r(50298),
        a = r(41024),
        s = r(35522),
        f = r(92208),
        c = r(15832),
        d = r(22497),
        p = r(17283),
        g = r(17149),
        m = r(79290),
        h = r(45634),
        v = new Set();
      function b(e, t, r, n, o, i) {
        if (i || (0, l.isLocalURL)(t)) {
          if (!n.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (v.has(o)) return;
            v.add(o);
          }
          Promise.resolve(i ? e.prefetch(t, o) : e.prefetch(t, r, n)).catch(
            (e) => {}
          );
        }
      }
      function y(e) {
        return "string" == typeof e ? e : (0, a.formatUrl)(e);
      }
      let _ = i.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: a,
          as: v,
          children: _,
          prefetch: w = null,
          passHref: j,
          replace: C,
          shallow: P,
          scroll: S,
          locale: x,
          onClick: E,
          onMouseEnter: O,
          onTouchStart: M,
          legacyBehavior: R = !1,
          ...I
        } = e;
        (r = _),
          R &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, o.jsx)("a", { children: r }));
        let N = i.default.useContext(c.RouterContext),
          A = i.default.useContext(d.AppRouterContext),
          T = null != N ? N : A,
          k = !N,
          z = !1 !== w,
          L = null === w ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
          { href: D, as: F } = i.default.useMemo(() => {
            if (!N) {
              let e = y(a);
              return { href: e, as: v ? y(v) : e };
            }
            let [e, t] = (0, u.resolveHref)(N, a, !0);
            return { href: e, as: v ? (0, u.resolveHref)(N, v) : t || e };
          }, [N, a, v]),
          U = i.default.useRef(D),
          W = i.default.useRef(F);
        R && (n = i.default.Children.only(r));
        let V = R ? n && "object" == typeof n && n.ref : t,
          [B, G, $] = (0, p.useIntersection)({ rootMargin: "200px" }),
          H = i.default.useCallback(
            (e) => {
              (W.current !== F || U.current !== D) &&
                ($(), (W.current = F), (U.current = D)),
                B(e),
                V &&
                  ("function" == typeof V
                    ? V(e)
                    : "object" == typeof V && (V.current = e));
            },
            [F, V, D, $, B]
          );
        i.default.useEffect(() => {
          T && G && z && b(T, D, F, { locale: x }, { kind: L }, k);
        }, [F, D, G, x, z, null == N ? void 0 : N.locale, T, k, L]);
        let K = {
          ref: H,
          onClick(e) {
            R || "function" != typeof E || E(e),
              R &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              T &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, u, a, s, f) {
                  let { nodeName: c } = e.currentTarget;
                  if (
                    "A" === c.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!f && !(0, l.isLocalURL)(r)))
                  )
                    return;
                  e.preventDefault();
                  let d = () => {
                    let e = null == a || a;
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](r, n, {
                          shallow: u,
                          locale: s,
                          scroll: e,
                        })
                      : t[o ? "replace" : "push"](n || r, { scroll: e });
                  };
                  f ? i.default.startTransition(d) : d();
                })(e, T, D, F, C, P, S, x, k);
          },
          onMouseEnter(e) {
            R || "function" != typeof O || O(e),
              R &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              T &&
                (z || !k) &&
                b(
                  T,
                  D,
                  F,
                  { locale: x, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: L },
                  k
                );
          },
          onTouchStart(e) {
            R || "function" != typeof M || M(e),
              R &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              T &&
                (z || !k) &&
                b(
                  T,
                  D,
                  F,
                  { locale: x, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: L },
                  k
                );
          },
        };
        if ((0, s.isAbsoluteUrl)(F)) K.href = F;
        else if (!R || j || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== x ? x : null == N ? void 0 : N.locale,
            t =
              (null == N ? void 0 : N.isLocaleDomain) &&
              (0, g.getDomainLocale)(
                F,
                e,
                null == N ? void 0 : N.locales,
                null == N ? void 0 : N.domainLocales
              );
          K.href =
            t ||
            (0, m.addBasePath)(
              (0, f.addLocale)(F, e, null == N ? void 0 : N.defaultLocale)
            );
        }
        return R
          ? i.default.cloneElement(n, K)
          : (0, o.jsx)("a", { ...I, ...K, children: r });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    17283: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(67294),
        o = r(49833),
        i = "function" == typeof IntersectionObserver,
        u = new Map(),
        l = [];
      function a(e) {
        let { rootRef: t, rootMargin: r, disabled: a } = e,
          s = a || !i,
          [f, c] = (0, n.useState)(!1),
          d = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            d.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (i) {
              if (s || f) return;
              let e = d.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: i,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = l.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = u.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      l.push(r),
                      u.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    i.set(e, t),
                    o.observe(e),
                    function () {
                      if ((i.delete(e), o.unobserve(e), 0 === i.size)) {
                        o.disconnect(), u.delete(n);
                        let e = l.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && l.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && c(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!f) {
              let e = (0, o.requestIdleCallback)(() => c(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [s, r, t, f, d.current]),
          [
            p,
            f,
            (0, n.useCallback)(() => {
              c(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3943: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        r(96415);
      let n = r(54010),
        o = r(96270);
      function i(e) {
        return void 0 !== e.default;
      }
      function u(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function l(e, t) {
        var r;
        let l,
          a,
          s,
          {
            src: f,
            sizes: c,
            unoptimized: d = !1,
            priority: p = !1,
            loading: g,
            className: m,
            quality: h,
            width: v,
            height: b,
            fill: y = !1,
            style: _,
            onLoad: w,
            onLoadingComplete: j,
            placeholder: C = "empty",
            blurDataURL: P,
            fetchPriority: S,
            layout: x,
            objectFit: E,
            objectPosition: O,
            lazyBoundary: M,
            lazyRoot: R,
            ...I
          } = e,
          { imgConf: N, showAltText: A, blurComplete: T, defaultLoader: k } = t,
          z = N || o.imageConfigDefault;
        if ("allSizes" in z) l = z;
        else {
          let e = [...z.deviceSizes, ...z.imageSizes].sort((e, t) => e - t),
            t = z.deviceSizes.sort((e, t) => e - t);
          l = { ...z, allSizes: e, deviceSizes: t };
        }
        let L = I.loader || k;
        delete I.loader, delete I.srcSet;
        let D = "__next_img_default" in L;
        if (D) {
          if ("custom" === l.loader)
            throw Error(
              'Image with src "' +
                f +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = L;
          L = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (x) {
          "fill" === x && (y = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[x];
          e && (_ = { ..._, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[x];
          t && !c && (c = t);
        }
        let F = "",
          U = u(v),
          W = u(b);
        if ("object" == typeof (r = f) && (i(r) || void 0 !== r.src)) {
          let e = i(f) ? f.default : f;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((a = e.blurWidth),
            (s = e.blurHeight),
            (P = P || e.blurDataURL),
            (F = e.src),
            !y)
          ) {
            if (U || W) {
              if (U && !W) {
                let t = U / e.width;
                W = Math.round(e.height * t);
              } else if (!U && W) {
                let t = W / e.height;
                U = Math.round(e.width * t);
              }
            } else (U = e.width), (W = e.height);
          }
        }
        let V = !p && ("lazy" === g || void 0 === g);
        (!(f = "string" == typeof f ? f : F) ||
          f.startsWith("data:") ||
          f.startsWith("blob:")) &&
          ((d = !0), (V = !1)),
          l.unoptimized && (d = !0),
          D && f.endsWith(".svg") && !l.dangerouslyAllowSVG && (d = !0),
          p && (S = "high");
        let B = u(h),
          G = Object.assign(
            y
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: E,
                  objectPosition: O,
                }
              : {},
            A ? {} : { color: "transparent" },
            _
          ),
          $ =
            T || "empty" === C
              ? null
              : "blur" === C
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: U,
                  heightInt: W,
                  blurWidth: a,
                  blurHeight: s,
                  blurDataURL: P || "",
                  objectFit: G.objectFit,
                }) +
                '")'
              : 'url("' + C + '")',
          H = $
            ? {
                backgroundSize: G.objectFit || "cover",
                backgroundPosition: G.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: $,
              }
            : {},
          K = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: o,
              quality: i,
              sizes: u,
              loader: l,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: a, kind: s } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: o } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, u),
              f = a.length - 1;
            return {
              sizes: u || "w" !== s ? u : "100vw",
              srcSet: a
                .map(
                  (e, n) =>
                    l({ config: t, src: r, quality: i, width: e }) +
                    " " +
                    ("w" === s ? e : n + 1) +
                    s
                )
                .join(", "),
              src: l({ config: t, src: r, quality: i, width: a[f] }),
            };
          })({
            config: l,
            src: f,
            unoptimized: d,
            width: U,
            quality: B,
            sizes: c,
            loader: L,
          });
        return {
          props: {
            ...I,
            loading: V ? "lazy" : g,
            fetchPriority: S,
            width: U,
            height: W,
            decoding: "async",
            className: m,
            style: { ...G, ...H },
            sizes: K.sizes,
            srcSet: K.srcSet,
            src: K.src,
          },
          meta: { unoptimized: d, priority: p, placeholder: C, fill: y },
        };
      }
    },
    54010: function (e, t) {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: o,
            blurDataURL: i,
            objectFit: u,
          } = e,
          l = n ? 40 * n : t,
          a = o ? 40 * o : r,
          s = l && a ? "viewBox='0 0 " + l + " " + a + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          s +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (s
            ? "none"
            : "contain" === u
            ? "xMidYMid"
            : "cover" === u
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          i +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    27922: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getImageProps: function () {
            return l;
          },
          default: function () {
            return a;
          },
        });
      let n = r(38754),
        o = r(3943),
        i = r(80250),
        u = n._(r(25930)),
        l = (e) => {
          let { props: t } = (0, o.getImgProps)(e, {
            defaultLoader: u.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !0,
              unoptimized: !1,
            },
          });
          for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
          return { props: t };
        },
        a = i.Image;
    },
    25930: function (e, t) {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: n, quality: o } = e;
        return r
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    25675: function (e, t, r) {
      e.exports = r(27922);
    },
    41664: function (e, t, r) {
      e.exports = r(85494);
    },
    11163: function (e, t, r) {
      e.exports = r(94546);
    },
    10952: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ee: function () {
          return _;
        },
        NY: function () {
          return w;
        },
        fC: function () {
          return y;
        },
      });
      var n = r(67294),
        o = r(25360),
        i = r(79698),
        u = r(9981),
        l = r(75320),
        a = r(85893),
        s = "Avatar",
        [f, c] = (0, o.b)(s),
        [d, p] = f(s),
        g = n.forwardRef((e, t) => {
          let { __scopeAvatar: r, ...o } = e,
            [i, u] = n.useState("idle");
          return (0, a.jsx)(d, {
            scope: r,
            imageLoadingStatus: i,
            onImageLoadingStatusChange: u,
            children: (0, a.jsx)(l.WV.span, { ...o, ref: t }),
          });
        });
      g.displayName = s;
      var m = "AvatarImage",
        h = n.forwardRef((e, t) => {
          let {
              __scopeAvatar: r,
              src: o,
              onLoadingStatusChange: s = () => {},
              ...f
            } = e,
            c = p(m, r),
            d = (function (e, t) {
              let [r, o] = n.useState("idle");
              return (
                (0, u.b)(() => {
                  if (!e) {
                    o("error");
                    return;
                  }
                  let r = !0,
                    n = new window.Image(),
                    i = (e) => () => {
                      r && o(e);
                    };
                  return (
                    o("loading"),
                    (n.onload = i("loaded")),
                    (n.onerror = i("error")),
                    (n.src = e),
                    t && (n.referrerPolicy = t),
                    () => {
                      r = !1;
                    }
                  );
                }, [e, t]),
                r
              );
            })(o, f.referrerPolicy),
            g = (0, i.W)((e) => {
              s(e), c.onImageLoadingStatusChange(e);
            });
          return (
            (0, u.b)(() => {
              "idle" !== d && g(d);
            }, [d, g]),
            "loaded" === d
              ? (0, a.jsx)(l.WV.img, { ...f, ref: t, src: o })
              : null
          );
        });
      h.displayName = m;
      var v = "AvatarFallback",
        b = n.forwardRef((e, t) => {
          let { __scopeAvatar: r, delayMs: o, ...i } = e,
            u = p(v, r),
            [s, f] = n.useState(void 0 === o);
          return (
            n.useEffect(() => {
              if (void 0 !== o) {
                let e = window.setTimeout(() => f(!0), o);
                return () => window.clearTimeout(e);
              }
            }, [o]),
            s && "loaded" !== u.imageLoadingStatus
              ? (0, a.jsx)(l.WV.span, { ...i, ref: t })
              : null
          );
        });
      b.displayName = v;
      var y = g,
        _ = h,
        w = b;
    },
    25360: function (e, t, r) {
      "use strict";
      r.d(t, {
        b: function () {
          return u;
        },
        k: function () {
          return i;
        },
      });
      var n = r(67294),
        o = r(85893);
      function i(e, t) {
        let r = n.createContext(t),
          i = (e) => {
            let { children: t, ...i } = e,
              u = n.useMemo(() => i, Object.values(i));
            return (0, o.jsx)(r.Provider, { value: u, children: t });
          };
        return (
          (i.displayName = e + "Provider"),
          [
            i,
            function (o) {
              let i = n.useContext(r);
              if (i) return i;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function u(e, t = []) {
        let r = [],
          i = () => {
            let t = r.map((e) => n.createContext(e));
            return function (r) {
              let o = r?.[e] || t;
              return n.useMemo(
                () => ({ [`__scope${e}`]: { ...r, [e]: o } }),
                [r, o]
              );
            };
          };
        return (
          (i.scopeName = e),
          [
            function (t, i) {
              let u = n.createContext(i),
                l = r.length;
              r = [...r, i];
              let a = (t) => {
                let { scope: r, children: i, ...a } = t,
                  s = r?.[e]?.[l] || u,
                  f = n.useMemo(() => a, Object.values(a));
                return (0, o.jsx)(s.Provider, { value: f, children: i });
              };
              return (
                (a.displayName = t + "Provider"),
                [
                  a,
                  function (r, o) {
                    let a = o?.[e]?.[l] || u,
                      s = n.useContext(a);
                    if (s) return s;
                    if (void 0 !== i) return i;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let o = r(e)[`__scope${n}`];
                    return { ...t, ...o };
                  }, {});
                  return n.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(i, ...t),
          ]
        );
      }
    },
    79698: function (e, t, r) {
      "use strict";
      r.d(t, {
        W: function () {
          return o;
        },
      });
      var n = r(67294);
      function o(e) {
        let t = n.useRef(e);
        return (
          n.useEffect(() => {
            t.current = e;
          }),
          n.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    9981: function (e, t, r) {
      "use strict";
      r.d(t, {
        b: function () {
          return o;
        },
      });
      var n = r(67294),
        o = globalThis?.document ? n.useLayoutEffect : () => {};
    },
  },
]);
