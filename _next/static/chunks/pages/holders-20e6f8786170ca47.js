(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9565],
  {
    56808: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/holders",
        function () {
          return r(74116);
        },
      ]);
    },
    19606: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var l = r(85893),
        s = r(92801),
        a = r(19661);
      function n() {
        let { width: e, height: t } = (0, a.e)();
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className: (0, s.AK)(
                "fixed bottom-0 left-0 right-0 top-0",
                "bg-chillwhale-gray-500 bg-cover bg-center bg-no-repeat",
                e > t
                  ? "bg-[url('/assets/backgrounds/landscape/chillwhales_1280x804.png')]"
                  : "bg-[url('/assets/backgrounds/portrait/chillwhales_720x1147.png')]"
              ),
            }),
            (0, l.jsx)("div", {
              className:
                "absolute bottom-0 left-0 right-0 top-0 backdrop-blur-sm",
            }),
          ],
        });
      }
    },
    6275: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var l = r(85893),
        s = r(92801),
        a = r(67294),
        n = r(77991),
        o = (e) => {
          let { title: t, error: r, clearError: o } = e,
            [i, c] = (0, a.useState)(!1);
          return (0, l.jsxs)("div", {
            className: (0, s.AK)(
              "flex w-80 items-center justify-between rounded-xl bg-black/70 py-2 pl-6 pr-4 backdrop-blur-lg",
              i
                ? "animate-[position-easeOutElastic_1s]"
                : "animate-[position-easeInElastic_3s]"
            ),
            children: [
              (0, l.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, l.jsx)("p", {
                    className: "text-lg font-bold",
                    children: t,
                  }),
                  (0, l.jsx)("p", {
                    className: "text-sm font-thin",
                    children: r,
                  }),
                ],
              }),
              (0, l.jsx)("button", {
                onClick: () => {
                  c(!0),
                    setTimeout(() => {
                      o();
                    }, 1e3);
                },
                className:
                  "rounded-xl border border-white fill-white p-2 transition-all duration-300 ease-in-out hover:bg-white hover:fill-black",
                children: (0, l.jsx)(n.Z, {
                  variant: "close-x",
                  width: 20,
                  height: 20,
                }),
              }),
            ],
          });
        };
    },
    91333: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = r(85893),
        s = r(92801),
        a = (e) => {
          let {
            followersCount: t,
            followingCount: r,
            onFollowersClick: a,
            onFollowingClick: n,
          } = e;
          return (0, l.jsxs)("div", {
            className:
              "relative box-border flex w-full gap-2 rounded-full bg-blue-lagoon/40 p-1 backdrop-blur-sm",
            children: [
              (0, l.jsx)("button", {
                onClick: () => (a ? a() : null),
                disabled: !a,
                className: (0, s.AK)(
                  "flex w-full items-center justify-center rounded-[999px_400px_400px_999px] p-2",
                  "transition-all duration-300 ease-in",
                  "bg-blue-lagoon text-white"
                ),
                children: (0, l.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    (0, l.jsx)("p", { children: "Followers" }),
                    (0, l.jsx)("p", {
                      className: "text-gray-400",
                      children: (0, s.qX)(t),
                    }),
                  ],
                }),
              }),
              (0, l.jsx)("button", {
                onClick: () => (n ? n() : null),
                disabled: !n,
                className: (0, s.AK)(
                  "flex w-full items-center justify-center rounded-[400px_999px_999px_400px] p-2",
                  "transition-all duration-300 ease-in",
                  "bg-blue-lagoon text-white"
                ),
                children: (0, l.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    (0, l.jsx)("p", { children: "Following" }),
                    (0, l.jsx)("p", {
                      className: "text-gray-400",
                      children: (0, s.qX)(r),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    89932: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var l = r(85893),
        s = r(92801),
        a = r(41664),
        n = r.n(a),
        o = (e) => {
          let t,
            {
              url: r,
              target: a = "_self",
              rel: o,
              text: i,
              disabled: c = !1,
              type: d,
              selected: u,
            } = e,
            h = (0, s.AK)(
              "self-center",
              "border rounded-full",
              "transition-all duration-300 ease-in-out",
              "text-xs uppercase whitespace-nowrap no-underline"
            );
          if (c)
            t = (0, s.AK)(
              h,
              "py-1 px-5 w-full",
              "cursor-not-allowed pointer-events-none",
              "text-black font-bold",
              "bg-gray-300 hover:bg-gray-300 opacity-60"
            );
          else
            switch (d) {
              case "welcome":
                t = (0, s.AK)(
                  h,
                  "py-1 px-6 w-full",
                  "text-black hover:text-white font-bold",
                  "bg-white hover:bg-transparent"
                );
                break;
              case "solid":
                t = u
                  ? (0, s.AK)(
                      h,
                      "py-1 px-5",
                      "cursor-default",
                      "text-black font-bold",
                      "bg-white"
                    )
                  : (0, s.AK)(
                      h,
                      "py-1 px-5",
                      "text-black hover:text-white font-bold",
                      "bg-white hover:bg-transparent"
                    );
                break;
              case "solid-petrol-black":
                t = (0, s.AK)(
                  h,
                  "py-1 px-5",
                  "text-white hover:text-petrol-black",
                  "bg-petrol-black hover:bg-transparent border-petrol-black"
                );
                break;
              case "solid-dark-blue":
                t = (0, s.AK)(
                  h,
                  "py-1 px-5",
                  "text-white hover:text-dark-blue",
                  "bg-dark-blue hover:bg-transparent border-dark-blue"
                );
                break;
              case "solid-pink":
                t = (0, s.AK)(
                  h,
                  "py-1 px-5 w-full",
                  "text-white hover:text-lukso-pink",
                  "bg-lukso-pink hover:bg-transparent border-lukso-pink"
                );
                break;
              case "solid-white-pink":
                t = (0, s.AK)(
                  h,
                  "py-1 px-5 w-full",
                  "cursor-default",
                  "text-lukso-pink",
                  "bg-white border-white"
                );
                break;
              case "outline-opacity":
                t = (0, s.AK)(
                  h,
                  "py-1 px-5 w-full",
                  "text-white hover:text-black font-bold",
                  "hover:bg-white border-white/40"
                );
                break;
              case "solid-red":
                t = (0, s.AK)(
                  h,
                  "py-1 px-5",
                  "text-white hover:text-dark-red",
                  "bg-dark-red hover:bg-transparent border-dark-red"
                );
                break;
              default:
                t = (0, s.AK)(
                  h,
                  "py-1 px-5 w-full",
                  "text-white hover:text-black font-bold",
                  "hover:bg-white"
                );
            }
          return (0, l.jsx)(n(), {
            href: r,
            target: a,
            ...(o && { rel: o }),
            className: t,
            style: { textDecoration: "none" },
            children: i,
          });
        };
    },
    67325: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return b;
        },
      });
      var l = r(85893),
        s = r(31071),
        a = r(92882),
        n = r(8971),
        o = r(84979),
        i = r(13742),
        c = r(67294);
      let d = a.fC;
      a.ZA;
      let u = a.B4,
        h = c.forwardRef((e, t) => {
          let { className: r, children: o, ...i } = e;
          return (0, l.jsxs)(a.xz, {
            ref: t,
            className: (0, s.cn)(
              "flex h-10 w-full items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-300 [&>span]:line-clamp-1",
              r
            ),
            ...i,
            children: [
              o,
              (0, l.jsx)(a.JO, {
                asChild: !0,
                children: (0, l.jsx)(n.Z, { className: "h-4 w-4 opacity-50" }),
              }),
            ],
          });
        });
      h.displayName = a.xz.displayName;
      let x = c.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, l.jsx)(a.u_, {
          ref: t,
          className: (0, s.cn)(
            "flex cursor-default items-center justify-center py-1",
            r
          ),
          ...n,
          children: (0, l.jsx)(o.Z, { className: "h-4 w-4" }),
        });
      });
      x.displayName = a.u_.displayName;
      let f = c.forwardRef((e, t) => {
        let { className: r, ...o } = e;
        return (0, l.jsx)(a.$G, {
          ref: t,
          className: (0, s.cn)(
            "flex cursor-default items-center justify-center py-1",
            r
          ),
          ...o,
          children: (0, l.jsx)(n.Z, { className: "h-4 w-4" }),
        });
      });
      f.displayName = a.$G.displayName;
      let p = c.forwardRef((e, t) => {
        let { className: r, children: n, position: o = "popper", ...i } = e;
        return (0, l.jsx)(a.h_, {
          children: (0, l.jsxs)(a.VY, {
            ref: t,
            className: (0, s.cn)(
              "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
              "popper" === o &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              r
            ),
            position: o,
            ...i,
            children: [
              (0, l.jsx)(x, {}),
              (0, l.jsx)(a.l_, {
                className: (0, s.cn)(
                  "p-1",
                  "popper" === o &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                ),
                children: n,
              }),
              (0, l.jsx)(f, {}),
            ],
          }),
        });
      });
      (p.displayName = a.VY.displayName),
        (c.forwardRef((e, t) => {
          let { className: r, ...n } = e;
          return (0, l.jsx)(a.__, {
            ref: t,
            className: (0, s.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", r),
            ...n,
          });
        }).displayName = a.__.displayName);
      let m = c.forwardRef((e, t) => {
        let { className: r, children: n, ...o } = e;
        return (0, l.jsxs)(a.ck, {
          ref: t,
          className: (0, s.cn)(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
            r
          ),
          ...o,
          children: [
            (0, l.jsx)("span", {
              className:
                "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, l.jsx)(a.wU, {
                children: (0, l.jsx)(i.Z, { className: "h-4 w-4" }),
              }),
            }),
            (0, l.jsx)(a.eT, { children: n }),
          ],
        });
      });
      (m.displayName = a.ck.displayName),
        (c.forwardRef((e, t) => {
          let { className: r, ...n } = e;
          return (0, l.jsx)(a.Z0, {
            ref: t,
            className: (0, s.cn)(
              "-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800",
              r
            ),
            ...n,
          });
        }).displayName = a.Z0.displayName);
      var b = (e) => {
        let { placeholder: t, list: r } = e;
        return (0, l.jsxs)(d, {
          onValueChange: (e) => {
            var t;
            return null ===
              (t = r.find((t) => {
                let { name: r } = t;
                return r === e;
              })) || void 0 === t
              ? void 0
              : t.func();
          },
          children: [
            (0, l.jsx)(h, {
              className:
                "flex h-max w-max gap-1 rounded-full border border-white/40 bg-transparent py-1 pl-4 pr-2 text-xs backdrop-blur-md transition-all duration-200 ease-in hover:bg-white hover:text-black focus:ring-0 focus:ring-offset-0",
              children: (0, l.jsx)(u, { placeholder: t }),
            }),
            (0, l.jsx)(p, {
              className:
                "border border-white/40 bg-transparent backdrop-blur-md",
              children: r.map((e) => {
                let { name: t, func: r } = e;
                return (0, l.jsx)(
                  m,
                  {
                    className:
                      "text-white transition-all duration-200 hover:bg-white/40 hover:text-black",
                    value: t,
                    onClick: r,
                    children: t,
                  },
                  crypto.randomUUID()
                );
              }),
            }),
          ],
        });
      };
    },
    99383: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return n;
        },
      });
      var l = r(27431),
        s = r(4219),
        a = r(67294);
      let n = () => {
        let { account: e, provider: t } = (0, s.i)(),
          [r, n] = (0, a.useState)(!1),
          [o, i] = (0, a.useState)();
        return {
          inProgress: r,
          error: o,
          follow: async (r) => {
            if (!e || !t) return i("Account not connected");
            n(!0);
            try {
              let s = await t.getSigner(e);
              await l.KO.connect(s).follow(r), n(!1);
            } catch (t) {
              let e = await l.z3.decode(t);
              return i(e), n(!1), e;
            }
          },
          followBatch: async (r) => {
            if (!e || !t) return i("Account not connected");
            n(!0);
            try {
              let s = await t.getSigner(e),
                a = [];
              for (let e of r)
                try {
                  await l.KO.connect(s).follow.estimateGas(e), a.push(e);
                } catch (e) {}
              await l.KO.connect(s).followBatch(a), n(!1);
            } catch (t) {
              let e = await l.z3.decode(t);
              return i(e), n(!1), e;
            }
          },
          clearError: () => {
            i(void 0);
          },
        };
      };
    },
    51072: function (e, t, r) {
      "use strict";
      r.d(t, {
        u: function () {
          return a;
        },
      });
      var l = r(27431),
        s = r(67294);
      function a(e) {
        let [t, r] = (0, s.useState)(!0),
          [a, n] = (0, s.useState)(0),
          [o, i] = (0, s.useState)(0);
        return (
          (0, s.useEffect)(() => {
            (async () => {
              try {
                let t = await l.KO.connect(l.UJ).followerCount(e),
                  r = await l.KO.connect(l.UJ).followingCount(e);
                n(Number(t)), i(Number(r));
              } catch (e) {
                console.error(e);
              }
              r(!1);
            })();
          }, [e]),
          { isLoading: t, followerCount: a, followingCount: o }
        );
      }
    },
    52443: function (e, t, r) {
      "use strict";
      r.d(t, {
        h: function () {
          return n;
        },
      });
      var l = r(27431),
        s = r(4219),
        a = r(67294);
      let n = (e) => {
        let { account: t, provider: r } = (0, s.i)(),
          [n, o] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            (async () => {
              if (!t || !r) return console.error("Account not connected");
              try {
                let s = await r.getSigner(t),
                  a = await l.KO.connect(s).isFollowing(t, e);
                o(a);
              } catch (e) {
                console.error(e);
              }
            })();
          }, [t, r, e]),
          {
            isFollowing: n,
            updateIsFollowing: (e) => {
              o(e);
            },
          }
        );
      };
    },
    19661: function (e, t, r) {
      "use strict";
      r.d(t, {
        e: function () {
          return s;
        },
      });
      var l = r(67294);
      let s = () => {
        let [e, t] = (0, l.useState)({ width: 1920, height: 1080 });
        return (
          (0, l.useEffect)(() => {
            function e() {
              t({ width: window.innerWidth, height: window.innerHeight });
            }
            return (
              window.addEventListener("resize", e),
              e(),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          e
        );
      };
    },
    64030: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return n;
        },
      });
      var l = r(27431),
        s = r(4219),
        a = r(67294);
      let n = () => {
        let { account: e, provider: t } = (0, s.i)(),
          [r, n] = (0, a.useState)(!1),
          [o, i] = (0, a.useState)();
        return {
          inProgress: r,
          error: o,
          unfollow: async (r) => {
            if (!e || !t) return i("Account not connected");
            n(!0);
            try {
              let s = await t.getSigner(e);
              await l.KO.connect(s).unfollow(r), n(!1);
            } catch (t) {
              let e = await l.z3.decode(t);
              return i(e), n(!1), e;
            }
          },
          clearError: () => {
            i(void 0);
          },
        };
      };
    },
    74116: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return B;
          },
          default: function () {
            return P;
          },
        });
      var l = r(85893),
        s = r(29726),
        a = r(2130),
        n = r(90332),
        o = r(39332),
        i = r(11163),
        c = r(67294),
        d = r(58533),
        u = r(4219),
        h = r(99383),
        x = r(77991),
        f = r(19606),
        p = r(75633),
        m = r(66240),
        b = r(67325),
        w = r(25675),
        g = r.n(w),
        j = r(51072),
        v = r(52443),
        N = r(27431),
        y = r(92801),
        k = r(64030),
        _ = r(6275),
        C = r(91333),
        Z = r(89932),
        S = (e) => {
          let {
              address: t,
              chillwhalesCount: r,
              orbsCount: s,
              badCount: a,
              chill: o,
              score: i,
            } = e,
            { account: d } = (0, u.i)(),
            { followerCount: f, followingCount: p } = (0, j.u)(t),
            { isFollowing: m, updateIsFollowing: b } = (0, v.h)(t),
            { inProgress: w, error: S, follow: A, clearError: K } = (0, h.O)(),
            {
              inProgress: E,
              error: B,
              unfollow: P,
              clearError: I,
            } = (0, k.I)(),
            [O, F] = (0, c.useState)(!1),
            [z, L] = (0, c.useState)(!1),
            [R, U] = (0, c.useState)(!1),
            {
              name: q,
              profileImage: D,
              backgroundImage: T,
            } = (function (e) {
              let [t, r] = (0, c.useState)(!0),
                [l, s] = (0, c.useState)("Anonymous"),
                [a, n] = (0, c.useState)(void 0),
                [o, i] = (0, c.useState)(void 0);
              return (
                (0, c.useEffect)(() => {
                  (async () => {
                    try {
                      let t =
                          '\n            query GetProfile {\n              profile: Profile_by_pk(id: "'.concat(
                            e.toLowerCase(),
                            '") {\n                address: id\n                name\n                profileImages(\n                  where: { url: { _is_null: false } },  \n                  order_by: { url: desc },\n                  limit: 1\n                ) {\n                  url\n                }\n                backgroundImages(\n                  where: { url: { _is_null: false } },  \n                  order_by: { url: desc },\n                  limit: 1\n                ) {\n                  url\n                }\n              }\n            }\n            '
                          ),
                        r = await fetch(N.nF, {
                          method: "POST",
                          body: JSON.stringify({ query: t }),
                          headers: { "Content-Type": "application/json" },
                        }),
                        l = await r.json();
                      if (l.data) {
                        let { profile: e } = l.data;
                        if (e) {
                          let {
                            name: t,
                            profileImages: r,
                            backgroundImages: l,
                          } = e;
                          t && s(t),
                            r.length && n((0, y.pZ)(r[0].url)),
                            l.length && i((0, y.pZ)(l[0].url));
                        }
                      }
                    } catch (e) {
                      console.error(
                        "Error occurred while getting chillwhale owner profile details:",
                        e
                      );
                    }
                    r(!1);
                  })();
                }, [e]),
                {
                  isLoading: t,
                  name: l,
                  address: e,
                  profileImage: a,
                  backgroundImage: o,
                }
              );
            })(t);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className:
                  "relative w-[320px] rounded-2xl bg-blue-lagoon/40 backdrop-blur-sm",
                children: [
                  (0, l.jsx)("div", {
                    className: (0, y.AK)(
                      "relative flex h-20 overflow-hidden rounded-t-xl"
                    ),
                    children: T
                      ? z
                        ? (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)(g(), {
                                src: "/assets/banners/chillwhales-2000x1000.png",
                                alt: "Background Image",
                                className: "object-cover object-center",
                                fill: !0,
                              }),
                              (0, l.jsx)("div", {
                                className:
                                  "absolute bottom-0 left-0 right-0 top-0 backdrop-blur-sm",
                              }),
                            ],
                          })
                        : (0, l.jsx)(g(), {
                            src: T,
                            alt: "Background Image",
                            className: "object-cover object-center",
                            placeholder: "blur",
                            blurDataURL:
                              "/assets/banners/chillwhales-2000x1000.png",
                            onError: () => L(!0),
                            fill: !0,
                          })
                      : (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)(g(), {
                              src: "/assets/banners/chillwhales-2000x1000.png",
                              alt: "Background Image",
                              className: "object-cover object-center",
                              fill: !0,
                            }),
                            (0, l.jsx)("div", {
                              className:
                                "absolute bottom-0 left-0 right-0 top-0 backdrop-blur-sm",
                            }),
                          ],
                        }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "absolute left-1/2 -translate-x-1/2 -translate-y-1/2",
                    children: (0, l.jsx)("div", {
                      className:
                        "relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full",
                      children: D
                        ? O
                          ? (0, l.jsx)(x.Z, {
                              variant: "profile-default",
                              width: 80,
                              height: 80,
                            })
                          : (0, l.jsx)(g(), {
                              src: D,
                              alt: "Profile Image",
                              className: "object-cover object-center",
                              onError: () => F(!0),
                              fill: !0,
                            })
                        : (0, l.jsx)(x.Z, {
                            variant: "profile-default",
                            width: 80,
                            height: 80,
                          }),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "absolute left-4 top-24",
                    children: (0, l.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, l.jsxs)("div", {
                          className:
                            "flex justify-between gap-1 text-xs text-dark-red",
                          children: [
                            (0, l.jsx)("p", { children: "Score" }),
                            (0, l.jsx)("p", {
                              className: "font-bold",
                              children: i,
                            }),
                          ],
                        }),
                        (0, l.jsx)("p", {
                          className: "text-xs font-bold text-white",
                          children: (0, y.YV)(r || 0),
                        }),
                      ],
                    }),
                  }),
                  d &&
                    d !== t &&
                    (0, l.jsx)("div", {
                      className: "mr-2 mt-2 flex justify-end",
                      children: m
                        ? R
                          ? E
                            ? (0, l.jsx)(n.Z, {
                                size: 35.6,
                                className: "animate-spin duration-1500",
                              })
                            : (0, l.jsx)("button", {
                                onClick: async () => {
                                  (await P(t)) || b(!1), U(!1);
                                },
                                className:
                                  "rounded-xl border border-dark-red fill-dark-red p-2 transition-all duration-300 ease-in-out hover:border-white hover:bg-white hover:fill-black",
                                children: (0, l.jsx)(x.Z, {
                                  variant: "user-unfollow",
                                  width: 18,
                                  height: 18,
                                }),
                              })
                          : (0, l.jsx)("button", {
                              onClick: () => U(!0),
                              className:
                                "rounded-xl border border-success-green fill-success-green p-2 transition-all duration-300 ease-in-out hover:border-white hover:bg-white hover:fill-black",
                              children: (0, l.jsx)(x.Z, {
                                variant: "user-followed",
                                width: 18,
                                height: 18,
                              }),
                            })
                        : w
                        ? (0, l.jsx)(n.Z, {
                            size: 35.6,
                            className: "animate-spin duration-1500",
                          })
                        : (0, l.jsx)("button", {
                            onClick: async () => {
                              (await A(t)) || b(!0);
                            },
                            className:
                              "rounded-xl border border-white fill-white p-2 transition-all duration-300 ease-in-out hover:bg-white hover:fill-black",
                            children: (0, l.jsx)(x.Z, {
                              variant: "user-follow",
                              width: 18,
                              height: 18,
                            }),
                          }),
                    }),
                  (0, l.jsxs)("div", {
                    className: (0, y.AK)(
                      "flex flex-col items-center gap-4 p-4",
                      d && d !== t ? "" : "mt-[44px]"
                    ),
                    children: [
                      (0, l.jsx)("p", {
                        className: "text-xl font-medium leading-7 text-white",
                        children: q,
                      }),
                      (0, l.jsx)("div", {
                        className: "w-[200px] text-[10px]",
                        children: (0, l.jsx)(C.Z, {
                          followersCount: f,
                          followingCount: p,
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "flex w-full items-center justify-evenly rounded-lg bg-blue-lagoon/40 p-2 text-xs leading-4 backdrop-blur-sm",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "mx-1 flex flex-col items-center",
                            children: [
                              (0, l.jsx)("p", {
                                className: "font-thin",
                                children: "CW",
                              }),
                              (0, l.jsx)("p", {
                                className: "font-bold",
                                children: r,
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "mx-1 flex flex-col items-center",
                            children: [
                              (0, l.jsx)("p", {
                                className: "font-thin",
                                children: "ORBS",
                              }),
                              (0, l.jsx)("p", {
                                className: "font-bold",
                                children: s,
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "mx-1 flex flex-col items-center",
                            children: [
                              (0, l.jsx)("p", {
                                className: "font-thin",
                                children: "B.A.D.",
                              }),
                              (0, l.jsx)("p", {
                                className: "font-bold",
                                children: a,
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "mx-1 flex flex-col items-center",
                            children: [
                              (0, l.jsx)("p", {
                                className: "font-thin",
                                children: "CHILL",
                              }),
                              (0, l.jsx)("p", {
                                className: "font-bold",
                                children: (0, y.fq)(o.toString(), !0),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "flex w-full text-center",
                        children: (0, l.jsx)(Z.Z, {
                          url: "/profile/".concat(t),
                          type: "outline",
                          text: "Profile",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (S || B) &&
                (0, l.jsxs)("div", {
                  className:
                    "fixed bottom-20 right-4 z-[10] flex flex-col gap-2 transition-all",
                  children: [
                    S &&
                      (0, l.jsx)(_.Z, {
                        title: "Follow error",
                        error: "string" == typeof S ? S : S.name,
                        clearError: K,
                      }),
                    B &&
                      (0, l.jsx)(_.Z, {
                        title: "Unfollow error",
                        error: "string" == typeof B ? B : B.name,
                        clearError: I,
                      }),
                  ],
                }),
            ],
          });
        },
        A = r(30006),
        K = r(77933);
      let E = [
        K.N2.chillwhalesCount,
        K.N2.burntwhalesCount,
        K.N2.orbsCount,
        K.N2.badCount,
        K.N2.chill,
        K.N2.followersCount,
        "score",
      ];
      var B = !0,
        P = () => {
          let e = (0, i.useRouter)(),
            t = (0, o.useSearchParams)(),
            r = null == t ? void 0 : t.get("orderBy");
          r || E.includes(r) || e.push("/holders?orderBy=chillwhalesCount");
          let { account: w } = (0, u.i)(),
            { followBatch: g, inProgress: j } = (0, h.O)(),
            [v, N] = (0, c.useState)(K.N9.desc),
            [k, _] = (0, c.useState)(""),
            [C, Z] = (0, c.useState)([]),
            {
              data: B,
              isLoading: P,
              fetchNextPage: I,
              hasNextPage: O,
            } = (0, s.N)({
              queryKey: ["holders", r, v, k],
              queryFn: async (e) => {
                let { pageParam: t } = e;
                try {
                  if ("score" === r) {
                    let e = (
                      await (0, a.ZP)(
                        "https://graph.chillwhales.dev/subgraphs/name/chillwhales_v3",
                        K.NF,
                        {
                          skip: 0,
                          first: 1e4,
                          orderBy: K.N2.id,
                          orderDirection: v,
                          where: {
                            or: [
                              { chill_gt: 0 },
                              { chillwhalesCount_gt: 0 },
                              { burntwhalesCount_gt: 0 },
                              { orbsCount_gt: 0 },
                              { badCount_gt: 0 },
                            ],
                          },
                        }
                      )
                    ).holders
                      .sort(
                        (e, t) =>
                          t.chillwhales.reduce((e, t) => {
                            let { attributes: r } = t;
                            return (
                              e +
                              r.reduce((e, t) => {
                                let { score: r } = t;
                                return e + r;
                              }, 0)
                            );
                          }, 0) +
                          t.orbs.reduce((e, t) => {
                            let { attributes: r } = t;
                            return (
                              e +
                              r.reduce((e, t) => {
                                let { score: r } = t;
                                return e + r;
                              }, 0)
                            );
                          }, 0) +
                          t.bad.reduce((e, t) => {
                            let { attributes: r } = t;
                            return (
                              e +
                              r.reduce((e, t) => {
                                let { score: r } = t;
                                return e + r;
                              }, 0)
                            );
                          }, 0) -
                          (e.chillwhales.reduce((e, t) => {
                            let { attributes: r } = t;
                            return (
                              e +
                              r.reduce((e, t) => {
                                let { score: r } = t;
                                return e + r;
                              }, 0)
                            );
                          }, 0) +
                            e.orbs.reduce((e, t) => {
                              let { attributes: r } = t;
                              return (
                                e +
                                r.reduce((e, t) => {
                                  let { score: r } = t;
                                  return e + r;
                                }, 0)
                              );
                            }, 0) +
                            e.bad.reduce((e, t) => {
                              let { attributes: r } = t;
                              return (
                                e +
                                r.reduce((e, t) => {
                                  let { score: r } = t;
                                  return e + r;
                                }, 0)
                              );
                            }, 0))
                      )
                      .slice(6 * t, 6 * (t + 1));
                    return {
                      holders: e,
                      ...(0 !== t && { previousId: t - 1 }),
                      ...(0 !== e.length &&
                        6 === e.length && { nextId: t + 1 }),
                    };
                  }
                  {
                    let { holders: e } = await (0, a.ZP)(
                      "https://graph.chillwhales.dev/subgraphs/name/chillwhales_v3",
                      K.NF,
                      {
                        skip: 6 * t,
                        first: 6,
                        orderBy: r,
                        orderDirection: v,
                        where: {
                          or: [
                            { chill_gt: 0 },
                            { chillwhalesCount_gt: 0 },
                            { burntwhalesCount_gt: 0 },
                            { orbsCount_gt: 0 },
                            { badCount_gt: 0 },
                          ],
                        },
                      }
                    );
                    return {
                      holders: e,
                      ...(0 !== t && { previousId: t - 1 }),
                      ...(0 !== e.length &&
                        6 === e.length && { nextId: t + 1 }),
                    };
                  }
                } catch (e) {
                  return (
                    console.error("Failed to get B.A.D. from subraph.", e),
                    { holders: [] }
                  );
                }
              },
              initialPageParam: 0,
              getPreviousPageParam: (e) => e.previousId,
              getNextPageParam: (e) => e.nextId,
            });
          return (
            (0, c.useEffect)(() => {
              B
                ? Z(
                    B.pages.flatMap((e) => {
                      let { holders: t } = e;
                      return t;
                    })
                  )
                : Z([]);
            }, [B]),
            (0, l.jsxs)("div", {
              className: "relative flex h-full min-h-screen flex-col",
              children: [
                (0, l.jsx)(f.Z, {}),
                (0, l.jsx)(A.Z, {}),
                (0, l.jsxs)("div", {
                  className: (0, y.AK)(
                    "relative flex flex-col items-center justify-center gap-4 pb-12 sm:mx-10 sm:gap-0",
                    w ? "sm:flex-row sm:justify-between" : ""
                  ),
                  children: [
                    w &&
                      (0, l.jsx)("div", {
                        children: (0, l.jsx)(m.Z, {
                          onClick: async () =>
                            await g(
                              C.map((e) => {
                                let { address: t } = e;
                                return t;
                              })
                            ),
                          text: "",
                          disabled: j,
                          type: "solid-pink",
                          children: j
                            ? (0, l.jsx)("p", {
                                className: "animate-pulse",
                                children: "In Progress...",
                              })
                            : (0, l.jsx)("p", { children: "Follow all" }),
                        }),
                      }),
                    (0, l.jsx)(b.Z, {
                      placeholder: "Sort by",
                      list: [
                        {
                          id: "score",
                          name: "Score",
                          func: () => (
                            e.push("/holders?orderBy=score"), N(K.N9.desc)
                          ),
                        },
                        {
                          id: "chillwhalesCount",
                          name: "chillwhales",
                          func: () => (
                            e.push("/holders?orderBy=chillwhalesCount"),
                            N(K.N9.desc)
                          ),
                        },
                        {
                          id: "orbsCount",
                          name: "ORBS",
                          func: () => (
                            e.push("/holders?orderBy=orbsCount"), N(K.N9.desc)
                          ),
                        },
                        {
                          id: "badCount",
                          name: "B.A.D.",
                          func: () => (
                            e.push("/holders?orderBy=badCount"), N(K.N9.desc)
                          ),
                        },
                        {
                          id: "chill",
                          name: "CHILL",
                          func: () => (
                            e.push("/holders?orderBy=chill"), N(K.N9.desc)
                          ),
                        },
                        {
                          id: "followersCount",
                          name: "Followers",
                          func: () => (
                            e.push("/holders?orderBy=followersCount"),
                            N(K.N9.desc)
                          ),
                        },
                        {
                          id: "followsCount",
                          name: "Follows",
                          func: () => (
                            e.push("/holders?orderBy=followsCount"),
                            N(K.N9.desc)
                          ),
                        },
                      ],
                    }),
                  ],
                }),
                P
                  ? (0, l.jsxs)("div", {
                      className:
                        "relative flex flex-grow flex-col items-center justify-center overflow-hidden",
                      children: [
                        (0, l.jsx)(n.Z, {
                          size: 160,
                          className: "animate-spin duration-1500",
                        }),
                        (0, l.jsx)("p", {
                          className: "my-10 text-2xl font-thin",
                          children: "Loading holders...",
                        }),
                      ],
                    })
                  : C.length
                  ? (0, l.jsx)("div", {
                      className: "mx-auto max-w-6xl",
                      children: (0, l.jsx)(d.Z, {
                        className: "!overflow-hidden",
                        dataLength: C.length,
                        next: I,
                        hasMore: O,
                        loader: (0, l.jsxs)("div", {
                          className:
                            "relative mt-8 flex flex-col items-center justify-center gap-2",
                          children: [
                            (0, l.jsx)("p", {
                              className: "text-lg font-thin",
                              children: "Loading...",
                            }),
                            (0, l.jsx)(n.Z, {
                              size: 64,
                              className: "animate-spin duration-1500",
                            }),
                          ],
                        }),
                        children: (0, l.jsx)("div", {
                          className:
                            "grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3",
                          children: C.map((e) => {
                            let {
                              address: t,
                              chill: r,
                              chillwhales: s,
                              chillwhalesCount: a,
                              orbs: n,
                              orbsCount: o,
                              bad: i,
                              badCount: c,
                            } = e;
                            return (0, l.jsx)(
                              "div",
                              {
                                children: (0, l.jsx)(S, {
                                  address: t,
                                  score:
                                    s.reduce((e, t) => {
                                      let { attributes: r } = t;
                                      return (
                                        e +
                                        r.reduce((e, t) => {
                                          let { score: r } = t;
                                          return e + r;
                                        }, 0)
                                      );
                                    }, 0) +
                                    n.reduce((e, t) => {
                                      let { attributes: r } = t;
                                      return (
                                        e +
                                        r.reduce((e, t) => {
                                          let { score: r } = t;
                                          return e + r;
                                        }, 0)
                                      );
                                    }, 0) +
                                    i.reduce((e, t) => {
                                      let { attributes: r } = t;
                                      return (
                                        e +
                                        r.reduce((e, t) => {
                                          let { score: r } = t;
                                          return e + r;
                                        }, 0)
                                      );
                                    }, 0),
                                  chillwhalesCount: a,
                                  orbsCount: o,
                                  badCount: c,
                                  chill: r,
                                }),
                              },
                              t
                            );
                          }),
                        }),
                      }),
                    })
                  : (0, l.jsxs)("div", {
                      className:
                        "relative flex flex-grow flex-col items-center justify-center",
                      children: [
                        (0, l.jsx)("p", {
                          className:
                            "my-10 px-10 text-center text-xl font-light",
                          children: "No search results found",
                        }),
                        (0, l.jsx)("div", {
                          className: "mx-auto flex justify-center text-center",
                          children: (0, l.jsx)(x.Z, {
                            variant: "big-x",
                            width: 250,
                            height: 250,
                          }),
                        }),
                      ],
                    }),
                (0, l.jsx)("div", {
                  className: "mt-40",
                  children: (0, l.jsx)(p.Z, {}),
                }),
              ],
            })
          );
        };
    },
  },
  function (e) {
    e.O(0, [9595, 1949, 8325, 9332, 6646, 2888, 9774, 179], function () {
      return e((e.s = 56808));
    }),
      (_N_E = e.O());
  },
]);
