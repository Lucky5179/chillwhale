(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7192],
  {
    73471: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/profile/[id]",
        function () {
          return i(89200);
        },
      ]);
    },
    6275: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return n;
        },
      });
      var a = i(85893),
        r = i(92801),
        s = i(67294),
        d = i(77991),
        n = (e) => {
          let { title: t, error: i, clearError: n } = e,
            [l, o] = (0, s.useState)(!1);
          return (0, a.jsxs)("div", {
            className: (0, r.AK)(
              "flex w-80 items-center justify-between rounded-xl bg-black/70 py-2 pl-6 pr-4 backdrop-blur-lg",
              l
                ? "animate-[position-easeOutElastic_1s]"
                : "animate-[position-easeInElastic_3s]"
            ),
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, a.jsx)("p", {
                    className: "text-lg font-bold",
                    children: t,
                  }),
                  (0, a.jsx)("p", {
                    className: "text-sm font-thin",
                    children: i,
                  }),
                ],
              }),
              (0, a.jsx)("button", {
                onClick: () => {
                  o(!0),
                    setTimeout(() => {
                      n();
                    }, 1e3);
                },
                className:
                  "rounded-xl border border-white fill-white p-2 transition-all duration-300 ease-in-out hover:bg-white hover:fill-black",
                children: (0, a.jsx)(d.Z, {
                  variant: "close-x",
                  width: 20,
                  height: 20,
                }),
              }),
            ],
          });
        };
    },
    91333: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = i(85893),
        r = i(92801),
        s = (e) => {
          let {
            followersCount: t,
            followingCount: i,
            onFollowersClick: s,
            onFollowingClick: d,
          } = e;
          return (0, a.jsxs)("div", {
            className:
              "relative box-border flex w-full gap-2 rounded-full bg-blue-lagoon/40 p-1 backdrop-blur-sm",
            children: [
              (0, a.jsx)("button", {
                onClick: () => (s ? s() : null),
                disabled: !s,
                className: (0, r.AK)(
                  "flex w-full items-center justify-center rounded-[999px_400px_400px_999px] p-2",
                  "transition-all duration-300 ease-in",
                  "bg-blue-lagoon text-white"
                ),
                children: (0, a.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    (0, a.jsx)("p", { children: "Followers" }),
                    (0, a.jsx)("p", {
                      className: "text-gray-400",
                      children: (0, r.qX)(t),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("button", {
                onClick: () => (d ? d() : null),
                disabled: !d,
                className: (0, r.AK)(
                  "flex w-full items-center justify-center rounded-[400px_999px_999px_400px] p-2",
                  "transition-all duration-300 ease-in",
                  "bg-blue-lagoon text-white"
                ),
                children: (0, a.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    (0, a.jsx)("p", { children: "Following" }),
                    (0, a.jsx)("p", {
                      className: "text-gray-400",
                      children: (0, r.qX)(i),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    99383: function (e, t, i) {
      "use strict";
      i.d(t, {
        O: function () {
          return d;
        },
      });
      var a = i(27431),
        r = i(4219),
        s = i(67294);
      let d = () => {
        let { account: e, provider: t } = (0, r.i)(),
          [i, d] = (0, s.useState)(!1),
          [n, l] = (0, s.useState)();
        return {
          inProgress: i,
          error: n,
          follow: async (i) => {
            if (!e || !t) return l("Account not connected");
            d(!0);
            try {
              let r = await t.getSigner(e);
              await a.KO.connect(r).follow(i), d(!1);
            } catch (t) {
              let e = await a.z3.decode(t);
              return l(e), d(!1), e;
            }
          },
          followBatch: async (i) => {
            if (!e || !t) return l("Account not connected");
            d(!0);
            try {
              let r = await t.getSigner(e),
                s = [];
              for (let e of i)
                try {
                  await a.KO.connect(r).follow.estimateGas(e), s.push(e);
                } catch (e) {}
              await a.KO.connect(r).followBatch(s), d(!1);
            } catch (t) {
              let e = await a.z3.decode(t);
              return l(e), d(!1), e;
            }
          },
          clearError: () => {
            l(void 0);
          },
        };
      };
    },
    51072: function (e, t, i) {
      "use strict";
      i.d(t, {
        u: function () {
          return s;
        },
      });
      var a = i(27431),
        r = i(67294);
      function s(e) {
        let [t, i] = (0, r.useState)(!0),
          [s, d] = (0, r.useState)(0),
          [n, l] = (0, r.useState)(0);
        return (
          (0, r.useEffect)(() => {
            (async () => {
              try {
                let t = await a.KO.connect(a.UJ).followerCount(e),
                  i = await a.KO.connect(a.UJ).followingCount(e);
                d(Number(t)), l(Number(i));
              } catch (e) {
                console.error(e);
              }
              i(!1);
            })();
          }, [e]),
          { isLoading: t, followerCount: s, followingCount: n }
        );
      }
    },
    52443: function (e, t, i) {
      "use strict";
      i.d(t, {
        h: function () {
          return d;
        },
      });
      var a = i(27431),
        r = i(4219),
        s = i(67294);
      let d = (e) => {
        let { account: t, provider: i } = (0, r.i)(),
          [d, n] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            (async () => {
              if (!t || !i) return console.error("Account not connected");
              try {
                let r = await i.getSigner(t),
                  s = await a.KO.connect(r).isFollowing(t, e);
                n(s);
              } catch (e) {
                console.error(e);
              }
            })();
          }, [t, i, e]),
          {
            isFollowing: d,
            updateIsFollowing: (e) => {
              n(e);
            },
          }
        );
      };
    },
    64030: function (e, t, i) {
      "use strict";
      i.d(t, {
        I: function () {
          return d;
        },
      });
      var a = i(27431),
        r = i(4219),
        s = i(67294);
      let d = () => {
        let { account: e, provider: t } = (0, r.i)(),
          [i, d] = (0, s.useState)(!1),
          [n, l] = (0, s.useState)();
        return {
          inProgress: i,
          error: n,
          unfollow: async (i) => {
            if (!e || !t) return l("Account not connected");
            d(!0);
            try {
              let r = await t.getSigner(e);
              await a.KO.connect(r).unfollow(i), d(!1);
            } catch (t) {
              let e = await a.z3.decode(t);
              return l(e), d(!1), e;
            }
          },
          clearError: () => {
            l(void 0);
          },
        };
      };
    },
    89200: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          __N_SSP: function () {
            return tB;
          },
          default: function () {
            return tE;
          },
        });
      var a,
        r,
        s,
        d,
        n,
        l,
        o,
        c,
        m,
        u,
        p,
        _,
        b,
        f,
        h,
        k,
        x,
        v,
        g,
        w,
        N,
        y,
        j,
        T,
        I,
        S,
        C,
        A,
        F,
        O,
        B,
        E,
        P,
        Z,
        D,
        U,
        V,
        R,
        L,
        K,
        G,
        M,
        q,
        z,
        W,
        X,
        H,
        Q,
        $,
        J,
        Y,
        ee,
        et,
        ei,
        ea,
        er,
        es,
        ed,
        en,
        el,
        eo,
        ec,
        em,
        eu,
        ep,
        e_,
        eb,
        ef,
        eh,
        ek,
        ex,
        ev,
        eg,
        ew,
        eN,
        ey,
        ej,
        eT,
        eI,
        eS,
        eC,
        eA,
        eF,
        eO,
        eB,
        eE,
        eP = i(85893),
        eZ = i(12229),
        eD = i(25675),
        eU = i.n(eD),
        eV = i(41664),
        eR = i.n(eV),
        eL = i(67294),
        eK = i(4219),
        eG = i(99383),
        eM = i(51072),
        eq = i(52443),
        ez = i(64030),
        eW = i(77991),
        eX = i(18946),
        eH = i(63272),
        eQ = i(19606),
        e$ = i(51782),
        eJ = i(36206),
        eY = i(25360),
        e0 = i(80650),
        e2 = i(29115),
        e1 = i(75320),
        e4 = i(78990),
        e9 = i(77342),
        e3 = i(91276),
        e8 = "Tabs",
        [e6, e5] = (0, eY.b)(e8, [e0.Pc]),
        e7 = (0, e0.Pc)(),
        [te, tt] = e6(e8),
        ti = eL.forwardRef((e, t) => {
          let {
              __scopeTabs: i,
              value: a,
              onValueChange: r,
              defaultValue: s,
              orientation: d = "horizontal",
              dir: n,
              activationMode: l = "automatic",
              ...o
            } = e,
            c = (0, e4.gm)(n),
            [m, u] = (0, e9.T)({ prop: a, onChange: r, defaultProp: s });
          return (0, eP.jsx)(te, {
            scope: i,
            baseId: (0, e3.M)(),
            value: m,
            onValueChange: u,
            orientation: d,
            dir: c,
            activationMode: l,
            children: (0, eP.jsx)(e1.WV.div, {
              dir: c,
              "data-orientation": d,
              ...o,
              ref: t,
            }),
          });
        });
      ti.displayName = e8;
      var ta = "TabsList",
        tr = eL.forwardRef((e, t) => {
          let { __scopeTabs: i, loop: a = !0, ...r } = e,
            s = tt(ta, i),
            d = e7(i);
          return (0, eP.jsx)(e0.fC, {
            asChild: !0,
            ...d,
            orientation: s.orientation,
            dir: s.dir,
            loop: a,
            children: (0, eP.jsx)(e1.WV.div, {
              role: "tablist",
              "aria-orientation": s.orientation,
              ...r,
              ref: t,
            }),
          });
        });
      tr.displayName = ta;
      var ts = "TabsTrigger",
        td = eL.forwardRef((e, t) => {
          let { __scopeTabs: i, value: a, disabled: r = !1, ...s } = e,
            d = tt(ts, i),
            n = e7(i),
            l = to(d.baseId, a),
            o = tc(d.baseId, a),
            c = a === d.value;
          return (0, eP.jsx)(e0.ck, {
            asChild: !0,
            ...n,
            focusable: !r,
            active: c,
            children: (0, eP.jsx)(e1.WV.button, {
              type: "button",
              role: "tab",
              "aria-selected": c,
              "aria-controls": o,
              "data-state": c ? "active" : "inactive",
              "data-disabled": r ? "" : void 0,
              disabled: r,
              id: l,
              ...s,
              ref: t,
              onMouseDown: (0, eJ.M)(e.onMouseDown, (e) => {
                r || 0 !== e.button || !1 !== e.ctrlKey
                  ? e.preventDefault()
                  : d.onValueChange(a);
              }),
              onKeyDown: (0, eJ.M)(e.onKeyDown, (e) => {
                [" ", "Enter"].includes(e.key) && d.onValueChange(a);
              }),
              onFocus: (0, eJ.M)(e.onFocus, () => {
                let e = "manual" !== d.activationMode;
                c || r || !e || d.onValueChange(a);
              }),
            }),
          });
        });
      td.displayName = ts;
      var tn = "TabsContent",
        tl = eL.forwardRef((e, t) => {
          let {
              __scopeTabs: i,
              value: a,
              forceMount: r,
              children: s,
              ...d
            } = e,
            n = tt(tn, i),
            l = to(n.baseId, a),
            o = tc(n.baseId, a),
            c = a === n.value,
            m = eL.useRef(c);
          return (
            eL.useEffect(() => {
              let e = requestAnimationFrame(() => (m.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, eP.jsx)(e2.z, {
              present: r || c,
              children: ({ present: i }) =>
                (0, eP.jsx)(e1.WV.div, {
                  "data-state": c ? "active" : "inactive",
                  "data-orientation": n.orientation,
                  role: "tabpanel",
                  "aria-labelledby": l,
                  hidden: !i,
                  id: o,
                  tabIndex: 0,
                  ...d,
                  ref: t,
                  style: {
                    ...e.style,
                    animationDuration: m.current ? "0s" : void 0,
                  },
                  children: i && s,
                }),
            })
          );
        });
      function to(e, t) {
        return `${e}-trigger-${t}`;
      }
      function tc(e, t) {
        return `${e}-content-${t}`;
      }
      tl.displayName = tn;
      var tm = i(31071);
      let tu = eL.forwardRef((e, t) => {
        let { className: i, ...a } = e;
        return (0, eP.jsx)(tr, {
          ref: t,
          className: (0, tm.cn)(
            "inline-flex h-10 items-center justify-center rounded-md bg-neutral-100 p-1 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400",
            i
          ),
          ...a,
        });
      });
      tu.displayName = tr.displayName;
      let tp = eL.forwardRef((e, t) => {
        let { className: i, ...a } = e;
        return (0, eP.jsx)(td, {
          ref: t,
          className: (0, tm.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-neutral-950 data-[state=active]:shadow-sm dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:data-[state=active]:bg-neutral-950 dark:data-[state=active]:text-neutral-50",
            i
          ),
          ...a,
        });
      });
      tp.displayName = td.displayName;
      let t_ = eL.forwardRef((e, t) => {
        let { className: i, ...a } = e;
        return (0, eP.jsx)(tl, {
          ref: t,
          className: (0, tm.cn)(
            "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
            i
          ),
          ...a,
        });
      });
      t_.displayName = tl.displayName;
      var tb = (e) => {
          let { tabs: t, content: i } = e;
          return (0, eP.jsxs)(ti, {
            defaultValue: t[0],
            children: [
              (0, eP.jsx)(tu, {
                className:
                  "relative mx-auto mb-12 mt-8 box-border flex w-[300px] gap-2 rounded-full bg-blue-lagoon/40 p-1 text-sm backdrop-blur-sm sm:w-[390px] lg:w-[480px]",
                children: t.map((e) =>
                  (0, eP.jsx)(
                    tp,
                    {
                      className:
                        "my-1 flex h-full w-full items-center justify-center rounded-full border border-transparent bg-transparent transition-all duration-200 ease-in hover:border-white/40 hover:bg-blue-lagoon/60 data-[state=active]:border-white data-[state=active]:bg-blue-lagoon data-[state=active]:font-semibold data-[state=active]:text-white",
                      value: e,
                      children: e,
                    },
                    crypto.randomUUID()
                  )
                ),
              }),
              Object.keys(i).map((e) =>
                (0, eP.jsx)(
                  t_,
                  { value: e, children: i[e] },
                  crypto.randomUUID()
                )
              ),
            ],
          });
        },
        tf = i(6275),
        th = i(91333),
        tk = i(75633),
        tx = i(66240),
        tv = i(30006),
        tg = i(54979),
        tw = i(92053),
        tN = i(76205),
        ty = i(69441),
        tj = i(47032),
        tT = i(96656),
        tI = i(53403),
        tS = i(77933);
      ((a = M || (M = {})).asset_id = "asset_id"),
        (a.blockNumber = "blockNumber"),
        (a.contentAsset_id = "contentAsset_id"),
        (a.contentToken_id = "contentToken_id"),
        (a.data = "data"),
        (a.db_write_timestamp = "db_write_timestamp"),
        (a.error = "error"),
        (a.fileType = "fileType"),
        (a.height = "height"),
        (a.id = "id"),
        (a.method = "method"),
        (a.src = "src"),
        (a.url = "url"),
        (a.verified = "verified"),
        (a.width = "width"),
        ((r = q || (q = {})).asset_id = "asset_id"),
        (r.attributeType = "attributeType"),
        (r.blockNumber = "blockNumber"),
        (r.db_write_timestamp = "db_write_timestamp"),
        (r.id = "id"),
        (r.key = "key"),
        (r.value = "value"),
        ((s = z || (z = {})).asset_id = "asset_id"),
        (s.blockNumber = "blockNumber"),
        (s.db_write_timestamp = "db_write_timestamp"),
        (s.id = "id"),
        (s.index = "index"),
        (s.interfaceId = "interfaceId"),
        (s.profile_id = "profile_id"),
        ((d = W || (W = {})).asset_id = "asset_id"),
        (d.blockNumber = "blockNumber"),
        (d.data = "data"),
        (d.db_write_timestamp = "db_write_timestamp"),
        (d.error = "error"),
        (d.fileType = "fileType"),
        (d.height = "height"),
        (d.id = "id"),
        (d.method = "method"),
        (d.src = "src"),
        (d.url = "url"),
        (d.verified = "verified"),
        (d.width = "width"),
        ((n = X || (X = {})).asset_id = "asset_id"),
        (n.blockNumber = "blockNumber"),
        (n.data = "data"),
        (n.db_write_timestamp = "db_write_timestamp"),
        (n.error = "error"),
        (n.fileType = "fileType"),
        (n.height = "height"),
        (n.id = "id"),
        (n.index = "index"),
        (n.method = "method"),
        (n.src = "src"),
        (n.url = "url"),
        (n.verified = "verified"),
        (n.width = "width"),
        ((l = H || (H = {})).asset_id = "asset_id"),
        (l.blockNumber = "blockNumber"),
        (l.db_write_timestamp = "db_write_timestamp"),
        (l.id = "id"),
        (l.title = "title"),
        (l.url = "url"),
        ((o = Q || (Q = {})).assets_ = "assets_"),
        (o.attributes_ = "attributes_"),
        (o.backgroundImages_ = "backgroundImages_"),
        (o.blockNumber = "blockNumber"),
        (o.createdBlockNumber = "createdBlockNumber"),
        (o.createdTimestamp = "createdTimestamp"),
        (o.createdTransactionIndex = "createdTransactionIndex"),
        (o.data = "data"),
        (o.db_write_timestamp = "db_write_timestamp"),
        (o.decimals = "decimals"),
        (o.description = "description"),
        (o.error = "error"),
        (o.icons_ = "icons_"),
        (o.id = "id"),
        (o.images_ = "images_"),
        (o.interfaces = "interfaces"),
        (o.isCollection = "isCollection"),
        (o.isLSP7 = "isLSP7"),
        (o.isUnknown = "isUnknown"),
        (o.links_ = "links_"),
        (o.lsp4Creators_ = "lsp4Creators_"),
        (o.lsp4TokenName = "lsp4TokenName"),
        (o.lsp4TokenSymbol = "lsp4TokenSymbol"),
        (o.lsp4TokenType = "lsp4TokenType"),
        (o.lsp8ReferenceContractSelf = "lsp8ReferenceContractSelf"),
        (o.lsp8ReferenceContract_id = "lsp8ReferenceContract_id"),
        (o.lsp8TokenIdFormat = "lsp8TokenIdFormat"),
        (o.lsp8TokenMetadataBaseUri = "lsp8TokenMetadataBaseUri"),
        (o.method = "method"),
        (o.name = "name"),
        (o.owner_id = "owner_id"),
        (o.src = "src"),
        (o.standard = "standard"),
        (o.supportedStandardsLsp4DigitalAsset =
          "supportedStandardsLsp4DigitalAsset"),
        (o.totalSupply = "totalSupply"),
        (o.updatedBlockNumber = "updatedBlockNumber"),
        (o.updatedTimestamp = "updatedTimestamp"),
        (o.updatedTransactionIndex = "updatedTransactionIndex"),
        (o.url = "url"),
        ((c = $ || ($ = {})).blockNumber = "blockNumber"),
        (c.contentAsset_id = "contentAsset_id"),
        (c.contentToken_id = "contentToken_id"),
        (c.data = "data"),
        (c.db_write_timestamp = "db_write_timestamp"),
        (c.error = "error"),
        (c.fileType = "fileType"),
        (c.height = "height"),
        (c.id = "id"),
        (c.index = "index"),
        (c.method = "method"),
        (c.profile_id = "profile_id"),
        (c.src = "src"),
        (c.url = "url"),
        (c.verified = "verified"),
        (c.width = "width"),
        ((m = J || (J = {})).blockNumber = "blockNumber"),
        (m.data = "data"),
        (m.db_write_timestamp = "db_write_timestamp"),
        (m.error = "error"),
        (m.fileType = "fileType"),
        (m.height = "height"),
        (m.id = "id"),
        (m.index = "index"),
        (m.method = "method"),
        (m.profile_id = "profile_id"),
        (m.src = "src"),
        (m.url = "url"),
        (m.verified = "verified"),
        (m.width = "width"),
        ((u = Y || (Y = {})).address = "address"),
        (u.blockNumber = "blockNumber"),
        (u.db_write_timestamp = "db_write_timestamp"),
        (u.id = "id"),
        (u.permissions = "permissions"),
        (u.profile_id = "profile_id"),
        (u.tags = "tags"),
        ((p = ee || (ee = {})).address = "address"),
        (p.asset_id = "asset_id"),
        (p.blockNumber = "blockNumber"),
        (p.data = "data"),
        (p.db_write_timestamp = "db_write_timestamp"),
        (p.dynamic = "dynamic"),
        (p.id = "id"),
        (p.name = "name"),
        (p.profile_id = "profile_id"),
        (p.token_id = "token_id"),
        ((_ = et || (et = {})).blockNumber = "blockNumber"),
        (_.createdBlockNumber = "createdBlockNumber"),
        (_.createdTimestamp = "createdTimestamp"),
        (_.createdTransactionIndex = "createdTransactionIndex"),
        (_.db_write_timestamp = "db_write_timestamp"),
        (_.followee_id = "followee_id"),
        (_.follower_id = "follower_id"),
        (_.id = "id"),
        (_.updatedBlockNumber = "updatedBlockNumber"),
        (_.updatedTimestamp = "updatedTimestamp"),
        (_.updatedTransactionIndex = "updatedTransactionIndex"),
        ((b = ei || (ei = {})).asset_id = "asset_id"),
        (b.balance = "balance"),
        (b.baseAsset_id = "baseAsset_id"),
        (b.blockNumber = "blockNumber"),
        (b.createdBlockNumber = "createdBlockNumber"),
        (b.createdTimestamp = "createdTimestamp"),
        (b.createdTransactionIndex = "createdTransactionIndex"),
        (b.db_write_timestamp = "db_write_timestamp"),
        (b.id = "id"),
        (b.ownerEOA = "ownerEOA"),
        (b.profile_id = "profile_id"),
        (b.timestamp = "timestamp"),
        (b.token_id = "token_id"),
        (b.transaction_id = "transaction_id"),
        (b.updatedBlockNumber = "updatedBlockNumber"),
        (b.updatedTimestamp = "updatedTimestamp"),
        (b.updatedTransactionIndex = "updatedTransactionIndex"),
        ((ea || (ea = {})).ownerEOA = "ownerEOA"),
        ((er || (er = {})).ownerEOA = "ownerEOA"),
        ((f = es || (es = {})).blockNumber = "blockNumber"),
        (f.db_write_timestamp = "db_write_timestamp"),
        (f.id = "id"),
        (f.interacted = "interacted"),
        (f.interactedAsset_id = "interactedAsset_id"),
        (f.interactionType = "interactionType"),
        (f.operationType = "operationType"),
        (f.profile_id = "profile_id"),
        (f.receivedData = "receivedData"),
        (f.returnedValue = "returnedValue"),
        (f.timestamp = "timestamp"),
        (f.transaction_id = "transaction_id"),
        (f.value = "value"),
        ((h = ed || (ed = {})).asset_id = "asset_id"),
        (h.blockNumber = "blockNumber"),
        (h.createdBlockNumber = "createdBlockNumber"),
        (h.createdTimestamp = "createdTimestamp"),
        (h.createdTransactionIndex = "createdTransactionIndex"),
        (h.db_write_timestamp = "db_write_timestamp"),
        (h.id = "id"),
        (h.index = "index"),
        (h.interfaceId = "interfaceId"),
        (h.profile_id = "profile_id"),
        (h.updatedBlockNumber = "updatedBlockNumber"),
        (h.updatedTimestamp = "updatedTimestamp"),
        (h.updatedTransactionIndex = "updatedTransactionIndex"),
        ((k = en || (en = {})).blockNumber = "blockNumber"),
        (k.data = "data"),
        (k.db_write_timestamp = "db_write_timestamp"),
        (k.error = "error"),
        (k.fileType = "fileType"),
        (k.height = "height"),
        (k.id = "id"),
        (k.index = "index"),
        (k.method = "method"),
        (k.profile_id = "profile_id"),
        (k.src = "src"),
        (k.url = "url"),
        (k.verified = "verified"),
        (k.width = "width"),
        ((x = el || (el = {})).blockNumber = "blockNumber"),
        (x.data = "data"),
        (x.db_write_timestamp = "db_write_timestamp"),
        (x.error = "error"),
        (x.fileType = "fileType"),
        (x.height = "height"),
        (x.id = "id"),
        (x.index = "index"),
        (x.method = "method"),
        (x.profile_id = "profile_id"),
        (x.src = "src"),
        (x.url = "url"),
        (x.verified = "verified"),
        (x.width = "width"),
        ((v = eo || (eo = {})).blockNumber = "blockNumber"),
        (v.db_write_timestamp = "db_write_timestamp"),
        (v.id = "id"),
        (v.profile_id = "profile_id"),
        (v.title = "title"),
        (v.url = "url"),
        ((g = ec || (ec = {})).addressPermissions = "addressPermissions"),
        (g.addressPermissions_ = "addressPermissions_"),
        (g.avatars_ = "avatars_"),
        (g.backgroundImages_ = "backgroundImages_"),
        (g.blockNumber = "blockNumber"),
        (g.controllers_ = "controllers_"),
        (g.createdBlockNumber = "createdBlockNumber"),
        (g.createdTimestamp = "createdTimestamp"),
        (g.createdTransactionIndex = "createdTransactionIndex"),
        (g.data = "data"),
        (g.db_write_timestamp = "db_write_timestamp"),
        (g.description = "description"),
        (g.error = "error"),
        (g.ft = "ft"),
        (g.fts = "fts"),
        (g.fullName = "fullName"),
        (g.id = "id"),
        (g.interfaces = "interfaces"),
        (g.isContract = "isContract"),
        (g.isEOA = "isEOA"),
        (g.lastMetadataUpdate = "lastMetadataUpdate"),
        (g.lastNameUpdate = "lastNameUpdate"),
        (g.links_ = "links_"),
        (g.method = "method"),
        (g.name = "name"),
        (g.owner_id = "owner_id"),
        (g.profileImages_ = "profileImages_"),
        (g.src = "src"),
        (g.standard = "standard"),
        (g.supportedStandardsLsp3Profile = "supportedStandardsLsp3Profile"),
        (g.tags = "tags"),
        (g.updatedBlockNumber = "updatedBlockNumber"),
        (g.updatedTimestamp = "updatedTimestamp"),
        (g.updatedTransactionIndex = "updatedTransactionIndex"),
        (g.url = "url"),
        ((w = em || (em = {})).asset_id = "asset_id"),
        (w.blockNumber = "blockNumber"),
        (w.createdBlockNumber = "createdBlockNumber"),
        (w.createdTimestamp = "createdTimestamp"),
        (w.createdTransactionIndex = "createdTransactionIndex"),
        (w.db_write_timestamp = "db_write_timestamp"),
        (w.id = "id"),
        (w.index = "index"),
        (w.interfaceId = "interfaceId"),
        (w.profile_id = "profile_id"),
        (w.updatedBlockNumber = "updatedBlockNumber"),
        (w.updatedTimestamp = "updatedTimestamp"),
        (w.updatedTransactionIndex = "updatedTransactionIndex"),
        ((N = eu || (eu = {})).blockNumber = "blockNumber"),
        (N.db_write_timestamp = "db_write_timestamp"),
        (N.delegate = "delegate"),
        (N.id = "id"),
        (N.profile_id = "profile_id"),
        (N.typeId = "typeId"),
        ((y = ep || (ep = {})).blockNumber = "blockNumber"),
        (y.contentAsset_id = "contentAsset_id"),
        (y.contentToken_id = "contentToken_id"),
        (y.data = "data"),
        (y.db_write_timestamp = "db_write_timestamp"),
        (y.error = "error"),
        (y.fileType = "fileType"),
        (y.height = "height"),
        (y.id = "id"),
        (y.method = "method"),
        (y.src = "src"),
        (y.token_id = "token_id"),
        (y.url = "url"),
        (y.verified = "verified"),
        (y.width = "width"),
        ((j = e_ || (e_ = {})).attributeType = "attributeType"),
        (j.blockNumber = "blockNumber"),
        (j.db_write_timestamp = "db_write_timestamp"),
        (j.id = "id"),
        (j.key = "key"),
        (j.token_id = "token_id"),
        (j.value = "value"),
        ((T = eb || (eb = {})).blockNumber = "blockNumber"),
        (T.db_write_timestamp = "db_write_timestamp"),
        (T.id = "id"),
        (T.index = "index"),
        (T.interfaceId = "interfaceId"),
        (T.profile_id = "profile_id"),
        (T.token_id = "token_id"),
        ((I = ef || (ef = {})).blockNumber = "blockNumber"),
        (I.data = "data"),
        (I.db_write_timestamp = "db_write_timestamp"),
        (I.error = "error"),
        (I.fileType = "fileType"),
        (I.height = "height"),
        (I.id = "id"),
        (I.method = "method"),
        (I.src = "src"),
        (I.token_id = "token_id"),
        (I.url = "url"),
        (I.verified = "verified"),
        (I.width = "width"),
        ((S = eh || (eh = {})).blockNumber = "blockNumber"),
        (S.data = "data"),
        (S.db_write_timestamp = "db_write_timestamp"),
        (S.error = "error"),
        (S.fileType = "fileType"),
        (S.height = "height"),
        (S.id = "id"),
        (S.index = "index"),
        (S.method = "method"),
        (S.src = "src"),
        (S.token_id = "token_id"),
        (S.url = "url"),
        (S.verified = "verified"),
        (S.width = "width"),
        ((C = ek || (ek = {})).blockNumber = "blockNumber"),
        (C.db_write_timestamp = "db_write_timestamp"),
        (C.id = "id"),
        (C.title = "title"),
        (C.token_id = "token_id"),
        (C.url = "url"),
        ((A = ex || (ex = {})).asset_id = "asset_id"),
        (A.assets_ = "assets_"),
        (A.attributes_ = "attributes_"),
        (A.backgroundImages_ = "backgroundImages_"),
        (A.baseAsset_id = "baseAsset_id"),
        (A.baseUriChanged = "baseUriChanged"),
        (A.blockNumber = "blockNumber"),
        (A.createdBlockNumber = "createdBlockNumber"),
        (A.createdTimestamp = "createdTimestamp"),
        (A.createdTransactionIndex = "createdTransactionIndex"),
        (A.data = "data"),
        (A.db_write_timestamp = "db_write_timestamp"),
        (A.description = "description"),
        (A.error = "error"),
        (A.formattedTokenId = "formattedTokenId"),
        (A.icons_ = "icons_"),
        (A.id = "id"),
        (A.images_ = "images_"),
        (A.links_ = "links_"),
        (A.lsp4Creators_ = "lsp4Creators_"),
        (A.lsp4TokenName = "lsp4TokenName"),
        (A.lsp4TokenSymbol = "lsp4TokenSymbol"),
        (A.lsp4TokenType = "lsp4TokenType"),
        (A.lsp8ReferenceContractSelf = "lsp8ReferenceContractSelf"),
        (A.lsp8ReferenceContract_id = "lsp8ReferenceContract_id"),
        (A.lsp8TokenIdFormat = "lsp8TokenIdFormat"),
        (A.method = "method"),
        (A.name = "name"),
        (A.src = "src"),
        (A.supportedStandardsLsp4DigitalAsset =
          "supportedStandardsLsp4DigitalAsset"),
        (A.tokenId = "tokenId"),
        (A.updatedBlockNumber = "updatedBlockNumber"),
        (A.updatedTimestamp = "updatedTimestamp"),
        (A.updatedTransactionIndex = "updatedTransactionIndex"),
        (A.url = "url"),
        ((F = ev || (ev = {})).baseUriChanged = "baseUriChanged"),
        (F.supportedStandardsLsp4DigitalAsset =
          "supportedStandardsLsp4DigitalAsset"),
        ((O = eg || (eg = {})).baseUriChanged = "baseUriChanged"),
        (O.supportedStandardsLsp4DigitalAsset =
          "supportedStandardsLsp4DigitalAsset"),
        ((B = ew || (ew = {})).blockNumber = "blockNumber"),
        (B.cumulativeGasUsed = "cumulativeGasUsed"),
        (B.db_write_timestamp = "db_write_timestamp"),
        (B.effectiveGasPrice = "effectiveGasPrice"),
        (B.from = "from"),
        (B.gas = "gas"),
        (B.gasPrice = "gasPrice"),
        (B.gasUsed = "gasUsed"),
        (B.id = "id"),
        (B.input = "input"),
        (B.isRelayer = "isRelayer"),
        (B.maxFeePerGas = "maxFeePerGas"),
        (B.maxPriorityFeePerGas = "maxPriorityFeePerGas"),
        (B.profile_id = "profile_id"),
        (B.timestamp = "timestamp"),
        (B.to = "to"),
        (B.transactionIndex = "transactionIndex"),
        (B.value = "value"),
        ((eN || (eN = {})).isRelayer = "isRelayer"),
        ((ey || (ey = {})).isRelayer = "isRelayer"),
        ((E = ej || (ej = {})).asset_id = "asset_id"),
        (E.blockNumber = "blockNumber"),
        (E.db_write_timestamp = "db_write_timestamp"),
        (E.from_id = "from_id"),
        (E.id = "id"),
        (E.timestamp = "timestamp"),
        (E.to_id = "to_id"),
        (E.token_id = "token_id"),
        (E.transaction_id = "transaction_id"),
        (E.value = "value"),
        ((P = eT || (eT = {})).block_height = "block_height"),
        (P.chain_id = "chain_id"),
        (P.end_block = "end_block"),
        (P.first_event_block_number = "first_event_block_number"),
        (P.is_hyper_sync = "is_hyper_sync"),
        (P.latest_fetched_block_number = "latest_fetched_block_number"),
        (P.latest_processed_block = "latest_processed_block"),
        (P.num_batches_fetched = "num_batches_fetched"),
        (P.num_events_processed = "num_events_processed"),
        (P.start_block = "start_block"),
        (P.timestamp_caught_up_to_head_or_endblock =
          "timestamp_caught_up_to_head_or_endblock"),
        ((Z = eI || (eI = {})).ASC = "ASC"),
        (Z.DESC = "DESC"),
        ((D = eS || (eS = {})).block_timestamp = "block_timestamp"),
        (D.chain_id = "chain_id"),
        (D.contract_address = "contract_address"),
        (D.contract_type = "contract_type"),
        (D.event_id = "event_id"),
        ((U = eC || (eC = {})).block_number = "block_number"),
        (U.block_timestamp = "block_timestamp"),
        (U.chain_id = "chain_id"),
        (U.entity_id = "entity_id"),
        (U.entity_type = "entity_type"),
        (U.log_index = "log_index"),
        (U.new_val = "new_val"),
        (U.old_val = "old_val"),
        (U.previous_block_number = "previous_block_number"),
        (U.previous_log_index = "previous_log_index"),
        ((V = eA || (eA = {})).block_number = "block_number"),
        (V.block_timestamp = "block_timestamp"),
        (V.chain_id = "chain_id"),
        (V.entity_id = "entity_id"),
        (V.entity_type = "entity_type"),
        (V.log_index = "log_index"),
        (V.params = "params"),
        (V.previous_block_number = "previous_block_number"),
        (V.previous_block_timestamp = "previous_block_timestamp"),
        (V.previous_chain_id = "previous_chain_id"),
        (V.previous_log_index = "previous_log_index"),
        ((R = eF || (eF = {})).block_number = "block_number"),
        (R.block_timestamp = "block_timestamp"),
        (R.chain_id = "chain_id"),
        (R.log_index = "log_index"),
        (R.transaction_index = "transaction_index"),
        ((L = eO || (eO = {})).asc = "asc"),
        (L.asc_nulls_first = "asc_nulls_first"),
        (L.asc_nulls_last = "asc_nulls_last"),
        (L.desc = "desc"),
        (L.desc_nulls_first = "desc_nulls_first"),
        (L.desc_nulls_last = "desc_nulls_last"),
        ((K = eB || (eB = {})).abi_files_hash = "abi_files_hash"),
        (K.config_hash = "config_hash"),
        (K.envio_version = "envio_version"),
        (K.handler_files_hash = "handler_files_hash"),
        (K.id = "id"),
        (K.schema_hash = "schema_hash"),
        ((G = eE || (eE = {})).block_hash = "block_hash"),
        (G.block_number = "block_number"),
        (G.block_timestamp = "block_timestamp"),
        (G.chain_id = "chain_id"),
        (G.db_write_timestamp = "db_write_timestamp"),
        (G.event_id = "event_id"),
        (G.event_type = "event_type"),
        (G.log_index = "log_index"),
        (G.params = "params"),
        (G.src_address = "src_address"),
        (G.transaction_hash = "transaction_hash"),
        (G.transaction_index = "transaction_index");
      let tC = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "ProfileByAddress" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "address" },
                },
                type: {
                  kind: "NonNullType",
                  type: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "String" },
                  },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "profiles" },
                  name: { kind: "Name", value: "Profile" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "id" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_ilike" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "address" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "address" },
                        name: { kind: "Name", value: "id" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "tags" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "description" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "links" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "title" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "profileImages" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "where" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "url" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: {
                                          kind: "Name",
                                          value: "_is_null",
                                        },
                                        value: {
                                          kind: "BooleanValue",
                                          value: !1,
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "order_by" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "url" },
                                  value: { kind: "EnumValue", value: "desc" },
                                },
                              ],
                            },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "limit" },
                            value: { kind: "IntValue", value: "1" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "backgroundImages" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "where" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "url" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: {
                                          kind: "Name",
                                          value: "_is_null",
                                        },
                                        value: {
                                          kind: "BooleanValue",
                                          value: !1,
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "order_by" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "url" },
                                  value: { kind: "EnumValue", value: "desc" },
                                },
                              ],
                            },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "limit" },
                            value: { kind: "IntValue", value: "1" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "url" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      };
      var tA = i(92801),
        tF = i(78551),
        tO = i(2130),
        tB = !0,
        tE = (e) => {
          let { id: t } = e,
            { account: i } = (0, eK.i)(),
            { followerCount: a, followingCount: r } = (0, eM.u)(t),
            { isFollowing: s, updateIsFollowing: d } = (0, eq.h)(t),
            { inProgress: n, error: l, follow: o, clearError: c } = (0, eG.O)(),
            {
              inProgress: m,
              error: u,
              unfollow: p,
              clearError: _,
            } = (0, ez.I)(),
            [b, f] = (0, eL.useState)(!1),
            [h, k] = (0, eL.useState)(!1),
            [x, v] = (0, eL.useState)(0),
            { data: g } = (0, tF.a)({
              queryKey: ["hodler", t],
              queryFn: async () => {
                try {
                  let { holder: e } = await (0, tO.ZP)(
                    "https://graph.chillwhales.dev/subgraphs/name/chillwhales_v3",
                    tS.Tm,
                    { address: t }
                  );
                  return e;
                } catch (e) {
                  return (
                    console.error(
                      "Failed getting the holder from the subgraph",
                      e
                    ),
                    null
                  );
                }
              },
            });
          (0, eL.useEffect)(() => {
            g
              ? v(
                  g.chillwhales.reduce((e, t) => {
                    let { attributes: i } = t;
                    return (
                      e +
                      i.reduce((e, t) => {
                        let { score: i } = t;
                        return e + i;
                      }, 0)
                    );
                  }, 0) +
                    g.orbs.reduce((e, t) => {
                      let { attributes: i } = t;
                      return (
                        e +
                        i.reduce((e, t) => {
                          let { score: i } = t;
                          return e + i;
                        }, 0)
                      );
                    }, 0) +
                    g.bad.reduce((e, t) => {
                      let { attributes: i } = t;
                      return (
                        e +
                        i.reduce((e, t) => {
                          let { score: i } = t;
                          return e + i;
                        }, 0)
                      );
                    }, 0)
                )
              : v(0);
          }, [g]);
          let { data: w } = (0, tF.a)({
              queryKey: ["profile", t],
              queryFn: async () => {
                try {
                  let { profiles: e } = await (0, tO.ZP)(
                    "https://envio.lukso-mainnet.universal.tech/v1/graphql",
                    tC,
                    { address: t }
                  );
                  return e[0];
                } catch (e) {
                  return (
                    console.error(
                      "Failed getting the profile from the subgraph",
                      e
                    ),
                    null
                  );
                }
              },
            }),
            N = (0, eL.useMemo)(
              () =>
                !b &&
                !!w &&
                !!w.profileImages &&
                !!w.profileImages.length &&
                w.profileImages[0].url,
              [w, b]
            ),
            y = (0, eL.useMemo)(
              () =>
                !h &&
                !!w &&
                !!w.backgroundImages &&
                !!w.backgroundImages.length &&
                w.backgroundImages[0].url,
              [w, h]
            );
          return (0, eP.jsxs)("div", {
            className: "relative flex h-full min-h-screen flex-col",
            children: [
              (0, eP.jsx)(eQ.Z, {}),
              (0, eP.jsx)(tv.Z, {}),
              (0, eP.jsxs)("div", {
                className:
                  "relative mx-8 mb-10 min-h-[340px] rounded-xl bg-blue-lagoon/40 pb-8 backdrop-blur-sm md:mb-14",
                children: [
                  (0, eP.jsx)("div", {
                    className: (0, tA.AK)(
                      "relative flex h-40 overflow-hidden rounded-t-xl md:h-52"
                    ),
                    children: y
                      ? (0, eP.jsx)(eU(), {
                          src: (0, tA.pZ)(y),
                          alt: "Background Image",
                          className: "object-cover object-center",
                          placeholder: "blur",
                          blurDataURL:
                            "/assets/banners/chillwhales-2000x1000.png",
                          onError: () => k(!0),
                          fill: !0,
                        })
                      : (0, eP.jsxs)(eP.Fragment, {
                          children: [
                            (0, eP.jsx)(eU(), {
                              src: "/assets/banners/chillwhales-2000x1000.png",
                              alt: "Background Image",
                              className: "object-cover object-center",
                              fill: !0,
                            }),
                            (0, eP.jsx)("div", {
                              className:
                                "absolute bottom-0 left-0 right-0 top-0 backdrop-blur-sm",
                            }),
                          ],
                        }),
                  }),
                  (0, eP.jsx)("div", {
                    className:
                      "absolute left-1/2 -translate-x-1/2 -translate-y-1/2",
                    children: (0, eP.jsx)("div", {
                      className:
                        "relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full md:h-28 md:w-28",
                      children: N
                        ? (0, eP.jsx)(eU(), {
                            src: (0, tA.pZ)(N),
                            alt: "Profile Image",
                            className: "object-cover object-center",
                            onError: () => f(!0),
                            fill: !0,
                          })
                        : (0, eP.jsx)(eW.Z, {
                            variant: "profile-default",
                            width: 112,
                            height: 112,
                          }),
                    }),
                  }),
                  (0, eP.jsxs)("div", {
                    className:
                      "absolute left-0 right-0 flex items-start justify-between px-4 pt-2 md:px-8 md:pt-4",
                    children: [
                      (0, eP.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, eP.jsxs)("div", {
                            className:
                              "flex justify-between gap-2 text-xs text-dark-red md:text-xl",
                            children: [
                              (0, eP.jsx)("p", { children: "Score" }),
                              (0, eP.jsx)("p", {
                                className: "font-bold",
                                children: x,
                              }),
                            ],
                          }),
                          (0, eP.jsx)("p", {
                            className:
                              "text-xs font-bold text-white md:text-lg",
                            children: (0, tA.YV)(
                              (null == g ? void 0 : g.chillwhales.length) || 0
                            ),
                          }),
                          (0, eP.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, eP.jsx)("p", {
                                className: "text-xs font-thin md:text-xl",
                                children: (0, tA.fq)(
                                  (null == g ? void 0 : g.chill.toString()) ||
                                    "0",
                                  !0
                                ),
                              }),
                              (0, eP.jsx)(eU(), {
                                src: "/assets/chill_coin.gif",
                                alt: "CHILL",
                                width: 20,
                                height: 20,
                                className:
                                  "h-4 w-4 object-cover object-center md:h-[20px] md:w-[20px]",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, eP.jsxs)("div", {
                        className: "mt-1 flex items-center gap-2 md:gap-4",
                        children: [
                          (0, eP.jsx)(eR(), {
                            href: "https://universal.page/profiles/lukso/".concat(
                              null == g ? void 0 : g.address
                            ),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "scale-90 md:scale-100",
                            children: (0, eP.jsx)(tN.Z, {
                              variant: "universal-page",
                              width: 25,
                              height: 25,
                              fill: "#6255e1",
                            }),
                          }),
                          (0, eP.jsx)(eR(), {
                            href: "https://universalswaps.io/social/".concat(
                              null == g ? void 0 : g.address
                            ),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "scale-90 md:scale-100",
                            children: (0, eP.jsx)(eU(), {
                              src: "/assets/universalswaps-logo.png",
                              alt: "Universal Swaps",
                              width: 25,
                              height: 25,
                            }),
                          }),
                          (0, eP.jsx)(eR(), {
                            href: "https://universalprofile.cloud/".concat(
                              null == g ? void 0 : g.address
                            ),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "scale-90 md:scale-100",
                            children: (0, eP.jsx)(tN.Z, {
                              variant: "universal-profile",
                              width: 25,
                              height: 25,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  i &&
                    i !== t &&
                    (0, eP.jsx)("div", {
                      className: "flex justify-center pt-16 md:pt-20",
                      children: (0, eP.jsx)("div", {
                        className: "w-28 md:w-40",
                        children: s
                          ? (0, eP.jsx)(tx.Z, {
                              type: "outline",
                              disabled: m,
                              text: "",
                              onClick: async () => {
                                (await p(t)) || d(!1);
                              },
                              children: m
                                ? (0, eP.jsx)("div", {
                                    className:
                                      "flex h-6 w-full animate-pulse items-center justify-center gap-2",
                                    children: (0, eP.jsx)("p", {
                                      className: "text-xs md:text-sm",
                                      children: "in progress",
                                    }),
                                  })
                                : (0, eP.jsxs)("div", {
                                    className:
                                      "flex h-6 w-full items-center justify-center gap-2 rounded-full fill-white text-white transition-all duration-300 ease-in-out hover:bg-white hover:fill-black hover:text-black",
                                    children: [
                                      (0, eP.jsx)(eW.Z, {
                                        variant: "user-unfollow",
                                        width: 12,
                                        height: 12,
                                      }),
                                      (0, eP.jsx)("p", {
                                        className: "text-xs md:text-sm",
                                        children: "Unfollow",
                                      }),
                                    ],
                                  }),
                            })
                          : (0, eP.jsx)(tx.Z, {
                              type: "outline",
                              disabled: n,
                              text: "",
                              onClick: async () => {
                                (await o(t)) || d(!0);
                              },
                              children: n
                                ? (0, eP.jsx)("div", {
                                    className:
                                      "flex h-6 w-full animate-pulse items-center justify-center gap-2",
                                    children: (0, eP.jsx)("p", {
                                      className: "text-xs md:text-sm",
                                      children: "in progress",
                                    }),
                                  })
                                : (0, eP.jsxs)("div", {
                                    className:
                                      "flex h-6 w-full items-center justify-center gap-2 rounded-full fill-white text-white transition-all duration-300 ease-in-out hover:bg-white hover:fill-black hover:text-black",
                                    children: [
                                      (0, eP.jsx)(eW.Z, {
                                        variant: "user-follow",
                                        width: 12,
                                        height: 12,
                                      }),
                                      (0, eP.jsx)("p", {
                                        className: "text-xs md:text-sm",
                                        children: "Follow",
                                      }),
                                    ],
                                  }),
                            }),
                      }),
                    }),
                  g &&
                    (0, eP.jsxs)("div", {
                      className: (0, tA.AK)(
                        "flex flex-col items-center gap-2 px-8",
                        i && i !== t ? "pt-4 md:pt-6" : "pt-16 md:pt-20"
                      ),
                      children: [
                        (0, eP.jsx)("div", {
                          className: "mb-2 flex flex-col leading-none md:mb-6",
                          children: (0, eP.jsxs)("div", {
                            className: "flex flex-wrap justify-center",
                            children: [
                              (0, eP.jsx)("p", {
                                className:
                                  "mr-2 max-w-[180px] overflow-hidden overflow-ellipsis whitespace-nowrap text-xl font-semibold md:max-w-[360px] md:text-4xl",
                                children:
                                  (null == w ? void 0 : w.name) || "Anonymous",
                              }),
                              (0, eP.jsx)("p", {
                                className: "text-xl font-semibold md:text-4xl",
                                children: "#",
                              }),
                              (0, eP.jsx)("p", {
                                className: "text-xl font-thin md:text-4xl",
                                children: g.address.substring(2, 6),
                              }),
                            ],
                          }),
                        }),
                        (0, eP.jsx)("div", {
                          className:
                            "mb-1 w-[240px] text-xs md:mb-4 md:w-[320px] md:text-sm",
                          children: (0, eP.jsx)(th.Z, {
                            followersCount: a,
                            followingCount: r,
                          }),
                        }),
                        (null == w ? void 0 : w.tags) &&
                          (0, eP.jsx)("div", {
                            className: "flex gap-2 md:pb-2",
                            children: w.tags
                              .slice(0, 3)
                              .map(
                                (e) =>
                                  e &&
                                  (0, eP.jsx)(
                                    ty.C,
                                    {
                                      variant: "default",
                                      className:
                                        "pointer-events-none bg-[#01506c] px-4 text-white",
                                      children: e,
                                    },
                                    crypto.randomUUID()
                                  )
                              ),
                          }),
                        (null == w ? void 0 : w.description) &&
                          (0, eP.jsx)("p", {
                            className:
                              "w-full break-words text-center text-sm font-thin md:text-lg",
                            children: w.description,
                          }),
                      ],
                    }),
                ],
              }),
              g &&
                (0, eP.jsx)(tb, {
                  tabs: ["chillwhales", "burntwhales", "orbs", "bad"],
                  content: {
                    chillwhales: (0, eP.jsx)(e$.Z, {
                      tokenIds: g.chillwhales.map((e) => {
                        let { tokenId: t } = e;
                        return t;
                      }),
                      getListItem: (e, t) => {
                        let {
                          attributes: i,
                          tokenId: a,
                          alphaImage: r,
                          chillClaimed: s,
                          orbsClaimed: d,
                        } = e;
                        return (0, eP.jsx)(eH.Z, {
                          variant: "simple",
                          tokenId: a,
                          score: i.reduce((e, t) => {
                            let { score: i } = t;
                            return e + i;
                          }, 0),
                          alphaImage: r ? (0, tA.pZ)(r.url) : "",
                          chillClaimed: s,
                          orbsClaimed: d,
                          onDetailClick: () => t(a),
                        });
                      },
                    }),
                    burntwhales: (0, eP.jsx)(tI.Z, {
                      tokenIds: g.burntwhales.map((e) => {
                        let { tokenId: t } = e;
                        return t;
                      }),
                      getListItem: (e, t) => {
                        let { tokenId: i } = e;
                        return (0, eP.jsx)(eX.Z, {
                          variant: "simple",
                          tokenId: i,
                          showImage: !0,
                          onDetailClick: () => {
                            t(i);
                          },
                        });
                      },
                    }),
                    orbs: (0, eP.jsx)(tw.Z, {
                      tokenIds: g.orbs.map((e) => {
                        let { tokenId: t } = e;
                        return t;
                      }),
                      getListItem: (e, t) =>
                        (0, eP.jsx)(tg.Z, {
                          variant: "simple",
                          id: (0, eZ.He)(e.tokenId),
                          level: e.level,
                          cooldownExpiry: e.cooldownExpiry,
                          faction: (0, tA.WZ)(e.faction),
                          score: e.score,
                          onDetailClick: () => t(e.tokenId),
                        }),
                    }),
                    bad: (0, eP.jsx)(tT.Z, {
                      tokenIds: g.bad.map((e) => {
                        let { tokenId: t } = e;
                        return t;
                      }),
                      getListItem: (e, t) => {
                        let {
                          tokenId: i,
                          revealed: a,
                          attributes: r,
                          alphaImage: s,
                        } = e;
                        return (0, eP.jsx)(tj.Z, {
                          tokenId: i,
                          revealed: a,
                          score: r.reduce((e, t) => (e += t.score), 0),
                          image: s
                            ? (0, tA.pZ)(s.url)
                            : "https://ipfs.chillwhales.dev/ipfs/QmbDGQP3HmGFvjA4qk9mGgqsH9yQWG9g5XZtfLPoEZKkhQ",
                          onDetailClick: () => t(i),
                        });
                      },
                    }),
                  },
                }),
              (0, eP.jsx)("div", {
                className: "mt-40",
                children: (0, eP.jsx)(tk.Z, {}),
              }),
              (l || u) &&
                (0, eP.jsxs)("div", {
                  className:
                    "fixed bottom-20 right-4 z-[10] flex flex-col gap-2 transition-all",
                  children: [
                    l &&
                      (0, eP.jsx)(tf.Z, {
                        title: "Follow error",
                        error: "string" == typeof l ? l : l.name,
                        clearError: c,
                      }),
                    u &&
                      (0, eP.jsx)(tf.Z, {
                        title: "Unfollow error",
                        error: "string" == typeof u ? u : u.name,
                        clearError: _,
                      }),
                  ],
                }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(
      0,
      [
        9595, 9382, 1949, 8325, 9332, 6903, 6646, 1019, 8372, 699, 1871, 7908,
        2888, 9774, 179,
      ],
      function () {
        return e((e.s = 73471));
      }
    ),
      (_N_E = e.O());
  },
]);
