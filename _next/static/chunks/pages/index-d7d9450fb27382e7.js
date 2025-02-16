(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    48312: function (e, l, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(80882);
        },
      ]);
    },
    11280: function (e, l, t) {
      "use strict";
      t.d(l, {
        Z: function () {
          return o;
        },
      });
      var r = t(85893),
        a = t(89932),
        s = t(69441),
        n = t(25675),
        i = t.n(n),
        c = t(92801),
        o = (e) => {
          let {
            size: l = "small",
            title: t,
            abstract: n,
            coverImage: o,
            tags: d,
            url: x,
          } = e;
          return (0, r.jsxs)("div", {
            className: (0, c.AK)(
              "relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md",
              "small" === l
                ? "w-80"
                : "big" === l
                ? "w-[380px] md:w-[640px]"
                : ""
            ),
            children: [
              (0, r.jsx)("div", {
                className: (0, c.AK)(
                  "shadow-blue-gray-500/40 relative mx-4 -mt-6 overflow-hidden rounded-xl bg-clip-border text-white shadow-lg",
                  "small" === l
                    ? "h-40"
                    : "big" === l
                    ? "h-[190px] md:h-[320px]"
                    : ""
                ),
                children: (0, r.jsx)(i(), {
                  src: o,
                  alt: "Cover Image",
                  className: "object-cover object-center",
                  fill: !0,
                }),
              }),
              (0, r.jsxs)("div", {
                className: "p-6",
                children: [
                  (0, r.jsx)("h5", {
                    className:
                      "text-blue-gray-900 mb-2 block font-sans text-xl font-bold leading-[25px] tracking-normal antialiased",
                    children: t,
                  }),
                  (0, r.jsx)("p", {
                    className:
                      "mb-2 block font-sans text-base font-light leading-relaxed text-inherit antialiased",
                    dangerouslySetInnerHTML: { __html: n },
                  }),
                  (0, r.jsx)("div", {
                    className: "flex flex-wrap gap-2",
                    children: d.map((e) =>
                      (0, r.jsx)(
                        s.C,
                        {
                          variant: "default",
                          className: "bg-[#202727] px-4 text-white",
                          children: "# ".concat(e.en),
                        },
                        crypto.randomUUID()
                      )
                    ),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "p-6 pt-0",
                children: (0, r.jsx)(a.Z, {
                  url: x,
                  type: "solid-petrol-black",
                  text: "Read More",
                }),
              }),
            ],
          });
        };
    },
    89932: function (e, l, t) {
      "use strict";
      t.d(l, {
        Z: function () {
          return i;
        },
      });
      var r = t(85893),
        a = t(92801),
        s = t(41664),
        n = t.n(s),
        i = (e) => {
          let l,
            {
              url: t,
              target: s = "_self",
              rel: i,
              text: c,
              disabled: o = !1,
              type: d,
              selected: x,
            } = e,
            h = (0, a.AK)(
              "self-center",
              "border rounded-full",
              "transition-all duration-300 ease-in-out",
              "text-xs uppercase whitespace-nowrap no-underline"
            );
          if (o)
            l = (0, a.AK)(
              h,
              "py-1 px-5 w-full",
              "cursor-not-allowed pointer-events-none",
              "text-black font-bold",
              "bg-gray-300 hover:bg-gray-300 opacity-60"
            );
          else
            switch (d) {
              case "welcome":
                l = (0, a.AK)(
                  h,
                  "py-1 px-6 w-full",
                  "text-black hover:text-white font-bold",
                  "bg-white hover:bg-transparent"
                );
                break;
              case "solid":
                l = x
                  ? (0, a.AK)(
                      h,
                      "py-1 px-5",
                      "cursor-default",
                      "text-black font-bold",
                      "bg-white"
                    )
                  : (0, a.AK)(
                      h,
                      "py-1 px-5",
                      "text-black hover:text-white font-bold",
                      "bg-white hover:bg-transparent"
                    );
                break;
              case "solid-petrol-black":
                l = (0, a.AK)(
                  h,
                  "py-1 px-5",
                  "text-white hover:text-petrol-black",
                  "bg-petrol-black hover:bg-transparent border-petrol-black"
                );
                break;
              case "solid-dark-blue":
                l = (0, a.AK)(
                  h,
                  "py-1 px-5",
                  "text-white hover:text-dark-blue",
                  "bg-dark-blue hover:bg-transparent border-dark-blue"
                );
                break;
              case "solid-pink":
                l = (0, a.AK)(
                  h,
                  "py-1 px-5 w-full",
                  "text-white hover:text-lukso-pink",
                  "bg-lukso-pink hover:bg-transparent border-lukso-pink"
                );
                break;
              case "solid-white-pink":
                l = (0, a.AK)(
                  h,
                  "py-1 px-5 w-full",
                  "cursor-default",
                  "text-lukso-pink",
                  "bg-white border-white"
                );
                break;
              case "outline-opacity":
                l = (0, a.AK)(
                  h,
                  "py-1 px-5 w-full",
                  "text-white hover:text-black font-bold",
                  "hover:bg-white border-white/40"
                );
                break;
              case "solid-red":
                l = (0, a.AK)(
                  h,
                  "py-1 px-5",
                  "text-white hover:text-dark-red",
                  "bg-dark-red hover:bg-transparent border-dark-red"
                );
                break;
              default:
                l = (0, a.AK)(
                  h,
                  "py-1 px-5 w-full",
                  "text-white hover:text-black font-bold",
                  "hover:bg-white"
                );
            }
          return (0, r.jsx)(n(), {
            href: t,
            target: s,
            ...(i && { rel: i }),
            className: l,
            style: { textDecoration: "none" },
            children: c,
          });
        };
    },
    7496: function (e, l, t) {
      "use strict";
      t.d(l, {
        Z: function () {
          return p;
        },
      });
      var r = t(85893),
        a = t(67294),
        s = t(77991),
        n = t(25675),
        i = t.n(n);
      let c = (e) => {
          let [l, t] = (0, a.useState)(!0),
            [r, s] = (0, a.useState)(!0),
            n = (0, a.useCallback)(() => {
              e && e.scrollPrev();
            }, [e]),
            i = (0, a.useCallback)(() => {
              e && e.scrollNext();
            }, [e]),
            c = (0, a.useCallback)((e) => {
              t(!e.canScrollPrev()), s(!e.canScrollNext());
            }, []);
          return (
            (0, a.useEffect)(() => {
              e && (c(e), e.on("reInit", c).on("select", c));
            }, [e, c]),
            {
              prevBtnDisabled: l,
              nextBtnDisabled: r,
              onPrevButtonClick: n,
              onNextButtonClick: i,
            }
          );
        },
        o = (e) => {
          let { children: l, ...t } = e;
          return (0, r.jsxs)("button", {
            className: "embla__button embla__button--prev",
            type: "button",
            ...t,
            children: [
              (0, r.jsx)("div", {
                className:
                  "fill-white transition-all duration-200 ease-out hover:fill-slate-300",
                children: (0, r.jsx)(s.Z, {
                  variant: "arrow-left",
                  width: 100,
                  height: 100,
                }),
              }),
              l,
            ],
          });
        },
        d = (e) => {
          let { children: l, ...t } = e;
          return (0, r.jsxs)("button", {
            className: "embla__button embla__button--next",
            type: "button",
            ...t,
            children: [
              (0, r.jsx)("div", {
                className:
                  "fill-white transition-all duration-200 ease-out hover:fill-slate-300",
                children: (0, r.jsx)(s.Z, {
                  variant: "arrow-right",
                  width: 100,
                  height: 100,
                }),
              }),
              l,
            ],
          });
        };
      var x = t(9474),
        h = t.n(x),
        m = t(89382);
      let u = (e) => {
        let { slide: l } = e,
          [t, s] = (0, a.useState)(!0);
        return (0, r.jsxs)("div", {
          className:
            "relative flex h-[100vh] w-[100vw] flex-col items-center justify-center overflow-hidden",
          children: [
            (0, r.jsx)("div", {
              className:
                "flex w-full justify-center px-[20px] pb-[20px] md:w-[50%]",
              children: (0, r.jsx)("label", {
                className: "w-full text-center ".concat(h().customTruncate),
                children: l.caption,
              }),
            }),
            (0, r.jsx)("div", {
              className:
                "relative flex h-auto w-auto items-center justify-center md:max-h-[80%] md:max-w-[80%]",
              children: (0, r.jsx)(i(), {
                onLoad: () => s(!1),
                src: l.image || "",
                alt: l.caption || "",
                width: 1024,
                height: 1024,
                className:
                  "h-auto max-h-full w-auto max-w-full rounded-[20px] object-contain md:h-full md:w-full",
              }),
            }),
          ],
        });
      };
      var p = (e) => {
        let { selectedImg: l, isOpen: t, items: n, onClose: i } = e,
          x = n.findIndex((e) => e.image === l),
          [p, f] = (0, m.Z)({ loop: !0, startIndex: x }),
          {
            prevBtnDisabled: g,
            nextBtnDisabled: b,
            onPrevButtonClick: j,
            onNextButtonClick: v,
          } = c(f);
        return ((0, a.useEffect)(
          () => (
            t
              ? (document.body.style.overflow = "hidden")
              : (document.body.style.overflow = ""),
            () => {
              document.body.style.overflow = "";
            }
          ),
          [t]
        ),
        t)
          ? (0, r.jsxs)("div", {
              className:
                "fixed inset-0 z-50 flex cursor-auto items-center justify-center bg-dark-gray bg-opacity-95",
              children: [
                (0, r.jsx)("button", {
                  className:
                    "absolute right-[20px] top-9 z-[51] h-6 w-6 cursor-pointer md:right-[54px]",
                  onClick: (e) => {
                    e.stopPropagation(), i();
                  },
                  children: (0, r.jsx)(s.Z, {
                    variant: "close-x",
                    width: 32,
                    height: 32,
                  }),
                }),
                (0, r.jsx)("section", {
                  className: "".concat(h().embla),
                  children: (0, r.jsxs)("div", {
                    className: "".concat(h().embla__viewport),
                    ref: p,
                    children: [
                      (0, r.jsx)("div", {
                        className: "".concat(h().embla__container),
                        children: n.map((e, l) =>
                          (0, r.jsx)(
                            "div",
                            {
                              className: "".concat(h().embla__slide),
                              children: (0, r.jsx)(u, { slide: e }),
                            },
                            crypto.randomUUID()
                          )
                        ),
                      }),
                      (0, r.jsx)("div", {
                        className: "hidden md:block",
                        children: (0, r.jsx)("div", {
                          className: "".concat(h().embla__controls),
                          children: (0, r.jsxs)("div", {
                            className: "".concat(h().embla__buttons),
                            children: [
                              (0, r.jsx)(o, { onClick: j, disabled: g }),
                              (0, r.jsx)(d, { onClick: v, disabled: b }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          : null;
      };
    },
    78181: function (e, l, t) {
      "use strict";
      t.d(l, {
        Z: function () {
          return a;
        },
      });
      var r = t(85893),
        a = (e) => {
          let { variant: l, width: t, height: a, fill: s } = e;
          switch (l) {
            case "white":
              return (0, r.jsx)("svg", {
                width: t,
                height: a,
                viewBox: "0 0 30 30",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, r.jsx)("path", {
                  id: "Exclusion_10",
                  "data-name": "Exclusion 10",
                  d: "M15,30A15,15,0,0,1,9.161,1.179,15,15,0,0,1,20.839,28.821,14.905,14.905,0,0,1,15,30Zm-3.891-8.486c-2.731,0-4.652.7-4.78,1.748-.08.647.53,1.34,1.716,1.95a14.057,14.057,0,0,0,4.565,1.281,17.274,17.274,0,0,0,2.1.132c2.73,0,4.651-.7,4.779-1.747.164-1.336-2.654-2.786-6.281-3.232A17.278,17.278,0,0,0,11.109,21.514Z",
                  fill: "#fff",
                }),
              });
            case "petrol":
              return (0, r.jsx)("svg", {
                width: t,
                height: a,
                viewBox: "0 0 30 30",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, r.jsx)("path", {
                  id: "Exclusion_10",
                  "data-name": "Exclusion 10",
                  d: "M15,30A15,15,0,0,1,9.161,1.179,15,15,0,0,1,20.839,28.821,14.905,14.905,0,0,1,15,30Zm-3.891-8.486c-2.731,0-4.652.7-4.78,1.748-.08.647.53,1.34,1.716,1.95a14.057,14.057,0,0,0,4.565,1.281,17.274,17.274,0,0,0,2.1.132c2.73,0,4.651-.7,4.779-1.747.164-1.336-2.654-2.786-6.281-3.232A17.278,17.278,0,0,0,11.109,21.514Z",
                  fill: "#00354B",
                }),
              });
            case "hollow":
              return (0, r.jsx)("svg", {
                width: t,
                height: a,
                viewBox: "0 0 30 30",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, r.jsxs)("g", {
                  id: "Exclusion_1",
                  "data-name": "Exclusion 1",
                  fill: "none",
                  children: [
                    (0, r.jsx)("path", {
                      d: "M15,30A15,15,0,0,1,9.161,1.179,15,15,0,0,1,20.839,28.821,14.905,14.905,0,0,1,15,30Zm-3.891-8.486c-2.731,0-4.652.7-4.78,1.748-.08.647.53,1.34,1.716,1.95a14.057,14.057,0,0,0,4.565,1.281,17.274,17.274,0,0,0,2.1.132c2.73,0,4.651-.7,4.779-1.747.164-1.336-2.654-2.786-6.281-3.232A17.278,17.278,0,0,0,11.109,21.514Z",
                      stroke: "none",
                    }),
                    (0, r.jsx)("path", {
                      d: "M 15.00010204315186 29.00020217895508 C 16.89044189453125 29.00020217895508 18.72376251220703 28.63016128540039 20.44911193847656 27.90037155151367 C 22.11610221862793 27.19526290893555 23.61344146728516 26.18563270568848 24.8995418548584 24.89955139160156 C 26.18563270568848 23.61344146728516 27.19526290893555 22.11610221862793 27.90037155151367 20.44912147521973 C 28.63016128540039 18.72376251220703 29.00020217895508 16.89044189453125 29.00020217895508 15.00010204315186 C 29.00020217895508 13.10961246490479 28.63016128540039 11.27621173858643 27.90037155151367 9.550822257995605 C 27.19525146484375 7.883801937103271 26.18563270568848 6.386472225189209 24.89955139160156 5.1004319190979 C 23.61348152160645 3.81439208984375 22.11614227294922 2.804811954498291 20.44914245605469 2.099751949310303 C 18.72379112243652 1.370012044906616 16.89047241210938 1.000002026557922 15.00010204315186 1.000002026557922 C 13.10958194732666 1.000002026557922 11.27617168426514 1.370012044906616 9.550802230834961 2.099751949310303 C 7.883781909942627 2.804821968078613 6.386452198028564 3.81439208984375 5.100421905517578 5.100411891937256 C 3.81439208984375 6.386452198028564 2.804821968078613 7.883781909942627 2.099751949310303 9.550802230834961 C 1.370012044906616 11.27617168426514 1.000002026557922 13.10958194732666 1.000002026557922 15.00010204315186 C 1.000002026557922 16.89047241210938 1.370012044906616 18.72379112243652 2.099751949310303 20.44914245605469 C 2.804811954498291 22.11614227294922 3.81439208984375 23.61348152160645 5.1004319190979 24.89955139160156 C 6.386472225189209 26.18563270568848 7.883801937103271 27.19525146484375 9.550822257995605 27.90037155151367 C 11.27621173858643 28.63016128540039 13.10961246490479 29.00020217895508 15.00010204315186 29.00020217895508 M 11.10903167724609 20.51426124572754 C 11.82850170135498 20.51424217224121 12.57464218139648 20.56103134155273 13.32688236236572 20.65335273742676 C 15.19516181945801 20.88293266296387 16.93446159362793 21.37489128112793 18.22437286376953 22.03861236572266 C 20.25881195068359 23.08542251586914 20.57308197021484 24.22640228271484 20.47841262817383 24.99975204467773 C 20.27628135681152 26.64372253417969 18.11858177185059 27.62520217895508 14.70652198791504 27.62520217895508 C 13.98628234863281 27.62517166137695 13.23976230621338 27.57829284667969 12.48785209655762 27.48589134216309 C 10.61653232574463 27.25626182556152 8.876261711120605 26.76471138000488 7.587622165679932 26.10178184509277 C 5.554471969604492 25.05586242675781 5.241062164306641 23.91393280029297 5.336162090301514 23.14015197753906 C 5.538201808929443 21.49601173400879 7.696281909942627 20.51437187194824 11.10903167724609 20.51426124572754 M 15.00010204315186 30.00020217895508 C 12.97503185272217 30.00020217895508 11.01057243347168 29.60358238220215 9.161262512207031 28.82137298583984 C 7.375051975250244 28.06584167480469 5.770882129669189 26.98426246643066 4.393311977386475 25.60665130615234 C 3.015762090682983 24.22906112670898 1.934222102165222 22.62488174438477 1.178742051124573 20.83868217468262 C 0.3965920507907867 18.98942184448242 2.043151880570804e-06 17.0250415802002 2.043151880570804e-06 15.00010204315186 C 2.043151880570804e-06 12.975022315979 0.3965920507907867 11.01055240631104 1.178742051124573 9.161262512207031 C 1.934222102165222 7.375051975250244 3.015752077102661 5.770882129669189 4.393311977386475 4.393311977386475 C 5.770882129669189 3.015752077102661 7.375051975250244 1.934222102165222 9.161262512207031 1.178742051124573 C 11.01055240631104 0.3965920507907867 12.975022315979 2.043151880570804e-06 15.00010204315186 2.043151880570804e-06 C 17.0250415802002 2.043151880570804e-06 18.98942184448242 0.3965920507907867 20.83868217468262 1.178742051124573 C 22.62488174438477 1.934222102165222 24.22906112670898 3.015762090682983 25.60665130615234 4.393311977386475 C 26.98426246643066 5.770882129669189 28.06584167480469 7.375051975250244 28.82137298583984 9.161262512207031 C 29.60358238220215 11.01057243347168 30.00020217895508 12.97503185272217 30.00020217895508 15.00010204315186 C 30.00020217895508 17.02502250671387 29.60358238220215 18.98940277099609 28.82137298583984 20.83868217468262 C 28.06584167480469 22.62486267089844 26.9842529296875 24.22904205322266 25.60665130615234 25.60665130615234 C 24.22904205322266 26.9842529296875 22.62486267089844 28.06584167480469 20.83868217468262 28.82137298583984 C 18.98940277099609 29.60358238220215 17.02502250671387 30.00020217895508 15.00010204315186 30.00020217895508 Z M 11.10906219482422 21.51426124572754 C 8.378232002258301 21.51435279846191 6.457151889801025 22.21676254272461 6.328691959381104 23.26212120056152 C 6.249122142791748 23.90956115722656 6.858682155609131 24.60223197937012 8.045071601867676 25.21255111694336 C 9.231422424316406 25.82285118103027 10.8524923324585 26.27771186828613 12.60965251922607 26.49333190917969 C 13.32149219512939 26.58081245422363 14.02699184417725 26.62517166137695 14.70656204223633 26.62520217895508 C 17.43693161010742 26.62520217895508 19.35737228393555 25.92294120788574 19.48588180541992 24.87772178649902 C 19.64947128295898 23.54137229919434 16.83185195922852 22.09157180786133 13.20491218566895 21.64588165283203 C 12.49307250976562 21.55852127075195 11.78793239593506 21.51424217224121 11.10906219482422 21.51426124572754 Z",
                      stroke: "none",
                      fill: "#fff",
                    }),
                  ],
                }),
              });
          }
        };
    },
    69441: function (e, l, t) {
      "use strict";
      t.d(l, {
        C: function () {
          return i;
        },
      });
      var r = t(85893),
        a = t(31071),
        s = t(12003);
      t(67294);
      let n = (0, s.j)(
        "inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300",
        {
          variants: {
            variant: {
              default:
                "border-transparent bg-neutral-900 text-neutral-50 hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80",
              secondary:
                "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
              destructive:
                "border-transparent bg-red-500 text-neutral-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/80",
              outline: "text-neutral-950 dark:text-neutral-50",
            },
          },
          defaultVariants: { variant: "default" },
        }
      );
      function i(e) {
        let { className: l, variant: t, ...s } = e;
        return (0, r.jsx)("div", {
          className: (0, a.cn)(n({ variant: t }), l),
          ...s,
        });
      }
    },
    80882: function (e, l, t) {
      "use strict";
      t.r(l),
        t.d(l, {
          __N_SSP: function () {
            return er;
          },
          default: function () {
            return ea;
          },
        });
      var r = t(85893),
        a = t(67294),
        s = t(89932),
        n = t(77991),
        i = t(5970),
        c = t(41664),
        o = t.n(c),
        d = t(92801);
      function x(e) {
        let { holders: l, getHolderTitle: t } = e;
        console.log(l);
        let [s, c] = (0, a.useState)([]),
          x = (0, a.useCallback)(async () => {
            let e =
              "\n      query GetProfiles {\n          profiles: Profile(\n              where: {\n                  _or: [".concat(
                Array.from(Object.keys(l))
                  .map((e) => '{id:{_eq:"'.concat(e, '"}}'))
                  .join(","),
                "]\n              }\n          ) {\n              id\n              name\n              profileImages(order_by: { width: desc }, limit: 1) {\n                  url\n              }\n          }\n      }\n      "
              );
            try {
              let t = await fetch(
                  "https://envio.mainnet.lukso.dev/v1/graphql",
                  {
                    method: "POST",
                    body: JSON.stringify({ query: e }),
                    headers: { "Content-Type": "application/json" },
                  }
                ),
                {
                  data: { profiles: r },
                } = await t.json();
              c(
                r
                  .map((e) => {
                    let { id: t, name: r, profileImages: a } = e;
                    return {
                      address: t,
                      name: r || "Anonymous",
                      profileImg: a.length ? (0, d.pZ)(a[0].url) : void 0,
                      tokensCount: l[t],
                    };
                  })
                  .sort((e, l) => l.tokensCount - e.tokensCount)
              );
            } catch (e) {
              console.error(e);
            }
          }, [l]);
        return (
          (0, a.useEffect)(() => (x(), () => c([])), [x]),
          (0, r.jsx)(r.Fragment, {
            children: s.map((e, l) => {
              let { address: a, name: s, profileImg: c, tokensCount: x } = e;
              return (0, r.jsxs)(
                "div",
                {
                  className: "mb-[5px]",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "mr-2 h-[25px] w-[28px] text-left text-[20px] font-bold leading-[25px] tracking-normal text-dark-blue",
                          children: "0".concat(l + 1, "."),
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex items-center justify-center gap-2",
                          children: [
                            c
                              ? (0, r.jsxs)(i.qE, {
                                  className: "h-[25px] w-[25px]",
                                  children: [
                                    (0, r.jsx)(i.F$, { src: (0, d.pZ)(c) }),
                                    (0, r.jsx)(i.Q5, { children: s }),
                                  ],
                                })
                              : (0, r.jsx)("div", {
                                  className: "overflow-hidden rounded-full",
                                  children: (0, r.jsx)(n.Z, {
                                    variant: "profile-default",
                                    width: 25,
                                    height: 25,
                                  }),
                                }),
                            (0, r.jsxs)("div", {
                              className: (0, d.AK)(
                                "flex justify-center gap-1",
                                "my-[7px] overflow-hidden text-ellipsis",
                                "text-[14px] font-normal not-italic leading-[18px] tracking-[0px] text-dark-blue"
                              ),
                              children: [
                                (0, r.jsx)("p", {
                                  children: "[".concat(x, "]"),
                                }),
                                t &&
                                  (0, r.jsx)("p", {
                                    children: "".concat(
                                      t({ address: a, tokensCount: x }),
                                      ", "
                                    ),
                                  }),
                                (0, r.jsx)("p", { children: s }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className: "ml-auto",
                          children: (0, r.jsx)(o(), {
                            href: "/profile/".concat(a),
                            target: "_self",
                            children: (0, r.jsx)(n.Z, {
                              variant: "user",
                              width: 20,
                              height: 20,
                              fill: "#000",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)("hr", {
                      className: "ml-[35px] border-t border-blue-opacity",
                    }),
                  ],
                },
                crypto.randomUUID()
              );
            }),
          })
        );
      }
      var h = t(25675),
        m = t.n(h),
        u = t(78551),
        p = t(77933),
        f = t(2130),
        g = t(27431),
        b = () => {
          let { data: e } = (0, u.a)({
            queryKey: ["top_five_bad_holders"],
            queryFn: async () => {
              let e = {};
              return (
                (
                  await (0, f.ZP)(
                    "https://graph.chillwhales.dev/subgraphs/name/chillwhales_v3",
                    p.NF,
                    {
                      first: 5,
                      skip: 0,
                      orderBy: p.N2.badCount,
                      orderDirection: p.N9.desc,
                    }
                  )
                ).holders.map((l) => {
                  let { address: t, badCount: r } = l;
                  return (e[t] = r);
                }),
                e
              );
            },
          });
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsx)("div", {
                className:
                  "relative flex min-h-[500px] justify-center md:min-h-[960px]",
                children: (0, r.jsx)(m(), {
                  src: "/assets/banners/bad.png",
                  alt: "Background",
                  fill: !0,
                  sizes: "100vw",
                  className: "z-0 object-cover object-center",
                }),
              }),
              (0, r.jsx)("div", {
                id: "bad",
                className: "flex min-h-[340px] justify-center bg-white",
                children: (0, r.jsxs)("div", {
                  className:
                    "grid-content-area grid grid-cols-1 gap-[15px] text-dark-blue md:grid-cols-2 md:gap-[30px] lg:grid-cols-2 lg:gap-[60px]",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "mt-8 flex flex-col",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "text-left text-[50px] font-extra-bold leading-[64px] tracking-normal md:text-6xl md:leading-[100px] lg:text-[120px] lg:leading-[153px]",
                          children: "B.A.D.",
                        }),
                        (0, r.jsx)("hr", {
                          className: "w-full border-t border-blue-opacity",
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "mt-[9px] text-left text-[14px] font-normal leading-[18px] tracking-normal",
                          children:
                            "welcome to B.A.D. your based and degenerate on-chain identity. \uD83D\uDCA5",
                        }),
                        (0, r.jsx)("div", {
                          className: "mt-[20px] pb-7",
                          children: (0, r.jsxs)("div", {
                            className: "flex min-w-[232px] gap-4",
                            children: [
                              (0, r.jsx)(s.Z, {
                                url: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
                                type: "solid-dark-blue",
                                text: "BUY $CHILL",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    e &&
                      (0, r.jsxs)("div", {
                        className:
                          "mb-5 overflow-auto md:mt-12 lg:mb-10 lg:mt-16 lg:h-[270px]",
                        children: [
                          
                        ],
                      }),
                  ],
                }),
              }),
            ],
          });
        };
      function j() {
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            id: "burntwhales",
            className: "flex min-h-[700px] justify-center bg-white",
            children: (0, r.jsxs)("div", {
              className: "grid-content-area",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "grid grid-cols-1 gap-[15px] text-dark-blue md:grid-cols-2 md:gap-[30px] lg:grid-cols-2 lg:gap-[60px]",
                  children: (0, r.jsxs)("div", {
                    className: "mt-8 flex flex-col",
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "text-left text-[50px] font-extra-bold leading-[64px] tracking-normal md:text-6xl md:leading-[100px] lg:text-[120px] lg:leading-[153px]",
                        children: "BURNTWHALES",
                      }),
                      (0, r.jsx)("hr", {
                        className: "w-full border-t border-blue-opacity",
                      }),
                      (0, r.jsx)("span", {
                        className:
                          "mt-[9px] text-left text-[14px] font-normal leading-[18px] tracking-normal",
                        children:
                          "‘burntwhales’ - a derivative collection created with the purpose to merge your burntpix and chillwhales, creating the ultimate homage piece towards the first NFTs created on Ethereum. burntwhales are capped at a 8,888 supply. 1 chillwhale per 1 burntpix. burn wisely. \uD83E\uDDCA \uD83D\uDC33",
                      }),
                      (0, r.jsx)("div", {
                        className: "mt-5 w-[285px] self-start",
                        children: (0, r.jsx)(s.Z, {
                          url: "https://dexscreener.com/ethereum/0xcomingsoon",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          text: "Chillwhales on Dexscreener",
                          type: "solid-dark-blue",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "my-10",
                  children: (0, r.jsx)("div", {
                    className:
                      "grid grid-cols-2 items-center justify-items-center gap-[20px] md:grid-cols-3 md:gap-[45px] lg:grid-cols-4 lg:gap-[60px]",
                    children: [
                      {
                        image: "/assets/burntwhales/burntwhales-1360.png",
                        url: "https://universal.page/collections/lukso/0x8bf5bf6c2f11643e75dc4199af2c7d39b1aefcd3/1360",
                      },
                      {
                        image: "/assets/burntwhales/burntwhales-805.png",
                        url: "https://universal.page/collections/lukso/0x8bf5bf6c2f11643e75dc4199af2c7d39b1aefcd3/805",
                      },
                      {
                        image: "/assets/burntwhales/burntwhales-741.png",
                        url: "https://universal.page/collections/lukso/0x8bf5bf6c2f11643e75dc4199af2c7d39b1aefcd3/741",
                      },
                      {
                        image: "/assets/burntwhales/burntwhales-23.png",
                        url: "https://universal.page/collections/lukso/0x8bf5bf6c2f11643e75dc4199af2c7d39b1aefcd3/23",
                      },
                    ].map((e) => {
                      let { image: l, url: t } = e;
                      return (0, r.jsx)(
                        o(),
                        {
                          href: "#",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, r.jsx)("div", {
                            className:
                              "relative flex max-w-[168px] flex-col items-center justify-center sm:max-w-[285px]",
                            children: (0, r.jsx)("div", {
                              className:
                                "grid max-h-[168px] min-h-[168px] items-center sm:max-h-[285px] sm:min-h-[285px]",
                              children: (0, r.jsx)(m(), {
                                src: l,
                                alt: "burntwhale",
                                width: 285,
                                height: 285,
                                className:
                                  "h-auto max-h-[168px] w-auto max-w-full rounded-[20px] object-contain sm:max-h-[285px]",
                              }),
                            }),
                          }),
                        },
                        crypto.randomUUID()
                      );
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      var v = t(31041),
        w = t.n(v),
        N = () =>
          (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("div", {
              id: "chill",
              className: "relative flex justify-center py-[37px] md:py-[93px]",
              children: [
                (0, r.jsx)(m(), {
                  src: "/assets/chill_coins.gif",
                  alt: "Background",
                  fill: !0,
                  sizes: "100vw",
                  style: { objectFit: "cover", objectPosition: "center" },
                  className: "z-0 opacity-30",
                }),
                (0, r.jsxs)("div", {
                  className: "grid-content-area relative z-10 min-h-[360px]",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "grid grid-cols-3",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "col-span-3 text-white md:col-span-2",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "text-left text-[50px] font-extra-light leading-[64px] tracking-normal md:p-4 md:text-[70px] md:leading-[90px] ".concat(
                                  w().chillBold
                                ),
                              children: [
                                (0, r.jsx)("strong", { children: "CHILL" }),
                                " Cultural Token",
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "grid grid-cols-1 gap-[10px] md:grid-cols-2 md:gap-[20px] lg:gap-[40px]",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "md:p-4",
                                  children: [
                                    (0, r.jsx)("hr", {
                                      className:
                                        "w-full border-t border-white border-opacity-30",
                                    }),
                                    (0, r.jsxs)("div", {
                                      className:
                                        "mt-2 text-left text-[14px] font-normal leading-[18px] tracking-normal ".concat(
                                          w().customTruncate
                                        ),
                                      children: [
                                        (0, r.jsx)("strong", {
                                          children: "CHILL",
                                        }),
                                        " claim will remain open indefinitely, just like our wallets (which are empty - all ",
                                        (0, r.jsx)("strong", {
                                          children: "CHILL",
                                        }),
                                        " is for you). We're all about the culture, not the coins, so you won't find any liquidity pools or team holdings from us. Chill Labs does not advise/nor look towards",
                                        " ",
                                        (0, r.jsx)("strong", {
                                          children: "CHILL",
                                        }),
                                        " as investments. This is your playground, not wall street.",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "md:p-4",
                                  children: [
                                    (0, r.jsx)("hr", {
                                      className:
                                        "w-full border-t border-white border-opacity-30",
                                    }),
                                    (0, r.jsxs)("div", {
                                      className:
                                        "mt-2 text-left text-[14px] font-normal leading-[18px] tracking-normal ".concat(
                                          w().customTruncate
                                        ),
                                      children: [
                                        "Total supply: ",
                                        (0, r.jsx)("strong", {
                                          children: "1,000,000,000",
                                        }),
                                        
                                        (0, r.jsx)("br", {}),
                                        "The first cultural currency on Ethereum. stay ",
                                        (0, r.jsx)("strong", {
                                          children: "CHILL",
                                        }),
                                        " \uD83D\uDC33",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className: "col-span-3 p-4 md:col-span-1",
                          children: (0, r.jsx)("div", {
                            className: "flex justify-center md:justify-end",
                            children: (0, r.jsx)(m(), {
                              alt: "Chill Token",
                              src: "/assets/chill_coin.gif",
                              width: 200,
                              height: 200,
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex gap-4 md:p-4",
                      children: [
                        (0, r.jsx)(s.Z, {
                          url: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          text: "CHILL on UniSwap",
                          disabled: !1,
                          type: "solid-red",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        y = t(31071),
        _ = t(29009),
        k = t(26050),
        C = t(33558);
      let B = { light: "", dark: ".dark" },
        S = a.createContext(null);
      function A() {
        let e = a.useContext(S);
        if (!e)
          throw Error("useChart must be used within a <ChartContainer />");
        return e;
      }
      let L = a.forwardRef((e, l) => {
        let { id: t, className: s, children: n, config: i, ...c } = e,
          o = a.useId(),
          d = "chart-".concat(t || o.replace(/:/g, ""));
        return (0, r.jsx)(S.Provider, {
          value: { config: i },
          children: (0, r.jsxs)("div", {
            "data-chart": d,
            ref: l,
            className: (0, y.cn)(
              "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
              s
            ),
            ...c,
            children: [
              (0, r.jsx)(D, { id: d, config: i }),
              (0, r.jsx)(_.h, { children: n }),
            ],
          }),
        });
      });
      L.displayName = "Chart";
      let D = (e) => {
          let { id: l, config: t } = e,
            a = Object.entries(t).filter((e) => {
              let [l, t] = e;
              return t.theme || t.color;
            });
          return a.length
            ? (0, r.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html: Object.entries(B)
                    .map((e) => {
                      let [t, r] = e;
                      return "\n"
                        .concat(r, " [data-chart=")
                        .concat(l, "] {\n")
                        .concat(
                          a
                            .map((e) => {
                              var l;
                              let [r, a] = e,
                                s =
                                  (null === (l = a.theme) || void 0 === l
                                    ? void 0
                                    : l[t]) || a.color;
                              return s
                                ? "  --color-".concat(r, ": ").concat(s, ";")
                                : null;
                            })
                            .join("\n"),
                          "\n}\n"
                        );
                    })
                    .join("\n"),
                },
              })
            : null;
        },
        Z = k.u,
        O = a.forwardRef((e, l) => {
          let {
              active: t,
              payload: s,
              className: n,
              indicator: i = "dot",
              hideLabel: c = !1,
              hideIndicator: o = !1,
              label: d,
              labelFormatter: x,
              labelClassName: h,
              formatter: m,
              color: u,
              nameKey: p,
              labelKey: f,
            } = e,
            { config: g } = A(),
            b = a.useMemo(() => {
              var e;
              if (c || !(null == s ? void 0 : s.length)) return null;
              let [l] = s,
                t = "".concat(f || l.dataKey || l.name || "value"),
                a = I(g, l, t),
                n =
                  f || "string" != typeof d
                    ? null == a
                      ? void 0
                      : a.label
                    : (null === (e = g[d]) || void 0 === e
                        ? void 0
                        : e.label) || d;
              return x
                ? (0, r.jsx)("div", {
                    className: (0, y.cn)("font-medium", h),
                    children: x(n, s),
                  })
                : n
                ? (0, r.jsx)("div", {
                    className: (0, y.cn)("font-medium", h),
                    children: n,
                  })
                : null;
            }, [d, x, s, c, h, g, f]);
          if (!t || !(null == s ? void 0 : s.length)) return null;
          let j = 1 === s.length && "dot" !== i;
          return (0, r.jsxs)("div", {
            ref: l,
            className: (0, y.cn)(
              "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-neutral-200 border-neutral-200/50 bg-white px-2.5 py-1.5 text-xs shadow-xl dark:border-neutral-800 dark:border-neutral-800/50 dark:bg-neutral-950",
              n
            ),
            children: [
              j ? null : b,
              (0, r.jsx)("div", {
                className: "grid gap-1.5",
                children: s.map((e, l) => {
                  let t = "".concat(p || e.name || e.dataKey || "value"),
                    a = I(g, e, t),
                    s = u || e.payload.fill || e.color;
                  return (0, r.jsx)(
                    "div",
                    {
                      className: (0, y.cn)(
                        "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-neutral-500 dark:[&>svg]:text-neutral-400",
                        "dot" === i && "items-center"
                      ),
                      children:
                        m && (null == e ? void 0 : e.value) !== void 0 && e.name
                          ? m(e.value, e.name, e, l, e.payload)
                          : (0, r.jsxs)(r.Fragment, {
                              children: [
                                (null == a ? void 0 : a.icon)
                                  ? (0, r.jsx)(a.icon, {})
                                  : !o &&
                                    (0, r.jsx)("div", {
                                      className: (0, y.cn)(
                                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                                        {
                                          "h-2.5 w-2.5": "dot" === i,
                                          "w-1": "line" === i,
                                          "w-0 border-[1.5px] border-dashed bg-transparent":
                                            "dashed" === i,
                                          "my-0.5": j && "dashed" === i,
                                        }
                                      ),
                                      style: {
                                        "--color-bg": s,
                                        "--color-border": s,
                                      },
                                    }),
                                (0, r.jsxs)("div", {
                                  className: (0, y.cn)(
                                    "flex flex-1 justify-between leading-none",
                                    j ? "items-end" : "items-center"
                                  ),
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className: "grid gap-1.5",
                                      children: [
                                        j ? b : null,
                                        (0, r.jsx)("span", {
                                          className:
                                            "text-neutral-500 dark:text-neutral-400",
                                          children:
                                            (null == a ? void 0 : a.label) ||
                                            e.name,
                                        }),
                                      ],
                                    }),
                                    e.value &&
                                      (0, r.jsx)("span", {
                                        className:
                                          "font-mono font-medium tabular-nums text-neutral-950 dark:text-neutral-50",
                                        children: e.value.toLocaleString(),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                    },
                    e.dataKey
                  );
                }),
              }),
            ],
          });
        });
      function I(e, l, t) {
        if ("object" != typeof l || null === l) return;
        let r =
            "payload" in l && "object" == typeof l.payload && null !== l.payload
              ? l.payload
              : void 0,
          a = t;
        return (
          t in l && "string" == typeof l[t]
            ? (a = l[t])
            : r && t in r && "string" == typeof r[t] && (a = r[t]),
          a in e ? e[a] : e[t]
        );
      }
      (O.displayName = "ChartTooltip"),
        C.D,
        (a.forwardRef((e, l) => {
          let {
              className: t,
              hideIcon: a = !1,
              payload: s,
              verticalAlign: n = "bottom",
              nameKey: i,
            } = e,
            { config: c } = A();
          return (null == s ? void 0 : s.length)
            ? (0, r.jsx)("div", {
                ref: l,
                className: (0, y.cn)(
                  "flex items-center justify-center gap-4",
                  "top" === n ? "pb-3" : "pt-3",
                  t
                ),
                children: s.map((e) => {
                  let l = "".concat(i || e.dataKey || "value"),
                    t = I(c, e, l);
                  return (0, r.jsxs)(
                    "div",
                    {
                      className: (0, y.cn)(
                        "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-neutral-500 dark:[&>svg]:text-neutral-400"
                      ),
                      children: [
                        (null == t ? void 0 : t.icon) && !a
                          ? (0, r.jsx)(t.icon, {})
                          : (0, r.jsx)("div", {
                              className: "h-2 w-2 shrink-0 rounded-[2px]",
                              style: { backgroundColor: e.color },
                            }),
                        null == t ? void 0 : t.label,
                      ],
                    },
                    e.value
                  );
                }),
              })
            : null;
        }).displayName = "ChartLegend");
      var T = t(51162),
        F = t(85521);
      let P = [
          { key: "airdrop", visitors: 3, fill: "#000c66" },
          { key: "team", visitors: 8, fill: "#0000ff" },
          { key: "fairLaunch", visitors: 89, fill: "#7ec8e3" },
        ],
        K = {
          team: { label: "Team (timelocked)", color: "hsl(var(--chart-1))" },
          airdrop: {
            label: "chillwhales airdrop",
            color: "hsl(var(--chart-2))",
          },
          fairLaunch: { label: "Fair launch", color: "hsl(var(--chart-3))" },
        };
      function W() {
        return (0, r.jsx)(L, {
          config: K,
          className:
            "aspect-square h-[240px] w-[250px] pb-0 [&_.recharts-pie-label-text]:fill-black [&_.recharts-pie-label-text]:text-base",
          children: (0, r.jsxs)(T.u, {
            children: [
              (0, r.jsx)(Z, {
                content: (0, r.jsx)(O, {
                  hideLabel: !0,
                  formatter: (e, l) =>
                    "".concat(K[l].label, " ").concat(e, " %"),
                }),
              }),
              (0, r.jsx)(F.b, {
                data: P,
                dataKey: "visitors",
                label: !0,
                nameKey: "key",
              }),
            ],
          }),
        });
      }
      var E = () =>
          (0, r.jsxs)("div", {
            id: "chillwhale-meme",
            children: [
              (0, r.jsx)("div", {
                className:
                  "relative flex min-h-[500px] justify-center md:min-h-[960px]",
                children: (0, r.jsx)(m(), {
                  src: "/assets/banners/chillwhaleMeme.png",
                  alt: "Background",
                  fill: !0,
                  sizes: "100vw",
                  style: { objectPosition: "center", objectFit: "cover" },
                  className: "z-0",
                }),
              }),
              (0, r.jsx)("div", {
                className: "flex min-h-[340px] justify-center bg-white",
                id: "chillwhales",
                children: (0, r.jsxs)("div", {
                  className:
                    "grid-content-area grid grid-cols-1 gap-[15px] text-dark-blue md:grid-cols-2 md:gap-[30px] lg:grid-cols-2 lg:gap-[60px]",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "mt-8 flex flex-col justify-center",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, r.jsx)("p", {
                              className:
                                "text-left text-[25px] font-extra-bold leading-[32px] tracking-normal md:text-3xl md:leading-[50px] lg:text-[60px] lg:leading-[76px]",
                              children: "\uD83E\uDDCA\uD83D\uDC33 ON Ethereum",
                            }),
                            (0, r.jsx)("hr", {
                              className: "w-full border-t border-blue-opacity",
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex flex-col",
                              children: [
                                (0, r.jsx)("p", {
                                  className:
                                    "my-[9px] text-left text-base font-normal leading-[18px] tracking-normal md:text-lg",
                                  children: (0, r.jsxs)("strong", {
                                    children: [
                                      "CA: ",
                                      (0, r.jsx)("code", {
                                        children:
                                          "0xcomingsoon",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "text-left text-[14px] font-normal leading-[18px] tracking-normal",
                                  children:
                                    "just a whale, chillin on ethereum. lp burned. fair launch. more info soon...",
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "text-left text-[14px] font-normal leading-[18px] tracking-normal",
                                  children:
                                    "not to be confused with $chill. this is just a meme for the fun and vibes",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "mt-[20px] flex min-w-[232px] gap-4 pb-7",
                          children: [
                            (0, r.jsx)(s.Z, {
                              url: "https://www.dextools.io/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              text: "chillwhale on Dextools",
                              disabled: !1,
                              type: "solid-dark-blue",
                            }),
                            (0, r.jsx)(s.Z, {
                              url: "https://dexscreener.com/ethereum/0xcomingsoon",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              text: "chillwhale on dexscreener",
                              disabled: !1,
                              type: "solid-dark-blue",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "mb-5 flex flex-col items-center overflow-auto md:mt-12 lg:mb-10 lg:mt-16 lg:h-[270px]",
                      children: [
                        (0, r.jsx)("p", {
                          className:
                            "text-center text-[20px] font-extra-bold leading-[25px] tracking-normal",
                          children: "Token distribution",
                        }),
                        (0, r.jsx)(W, {}),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        H = t(43138),
        U = t.n(H),
        R = () =>
          (0, r.jsx)("div", {
            className: U().container,
            children: (0, r.jsx)("div", {
              className: U().whale,
              children: (0, r.jsxs)("div", {
                className: U().image,
                children: [
                  (0, r.jsx)(m(), {
                    className: "".concat(U().maskImage, " ml-2"),
                    src: "https://ipfs.chillwhales.dev/ipfs/".concat(
                      g.VE,
                      "/19.png"
                    ),
                    alt: "Base Image",
                    width: 180,
                    height: 180,
                  }),
                  (0, r.jsxs)("div", {
                    className: U().innerBox,
                    children: [
                      (0, r.jsx)("p", {
                        className: U().text1,
                        children: "sup whales, welcome to the realm of chill",
                      }),
                      (0, r.jsx)("div", { className: U().divider }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: U().innerBoxRow,
                    children: (0, r.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, r.jsx)("a", {
                          href: "#chillwhales",
                          className: "scroll-smooth",
                          children: "CHILLWHALES",
                        }),
                        (0, r.jsx)("a", {
                          href: "#burntwhales",
                          children: "BURNTWHALES",
                        }),
                        (0, r.jsx)("a", { href: "#chill", children: "CHILL" }),
                        (0, r.jsx)("a", { href: "#orbs", children: "ORB" }),
                        (0, r.jsx)("a", { href: "#bad", children: "B.A.D." }),
                        (0, r.jsx)("a", {
                          href: "#chillwhale-meme",
                          children: "\uD83E\uDDCA\uD83D\uDC33 ON Ethereum",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        q = t(30006),
        z = () => {
          let { data: e } = (0, u.a)({
            queryKey: ["top_five_chillwhales_holders"],
            queryFn: async () => {
              let e = {};
              return (
                (
                  await (0, f.ZP)(
                    "https://graph.chillwhales.dev/subgraphs/name/chillwhales_v3",
                    p.NF,
                    {
                      first: 5,
                      skip: 0,
                      orderBy: p.N2.chillwhalesCount,
                      orderDirection: p.N9.desc,
                    }
                  )
                ).holders.map((l) => {
                  let { address: t, chillwhalesCount: r } = l;
                  return (e[t] = r);
                }),
                e
              );
            },
          });
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsxs)("div", {
                className:
                  "relative flex min-h-[500px] w-full items-center justify-start p-24 md:min-h-[960px]",
                children: [
                  (0, r.jsx)("div", {
                    className: "fixed left-0 right-0 top-0 z-10",
                    children: (0, r.jsx)(q.Z, {}),
                  }),
                  (0, r.jsx)(m(), {
                    src: "/assets/banners/chillwhales-1.png",
                    alt: "Background",
                    fill: !0,
                    sizes: "100vw",
                    className: "z-0 object-cover object-center",
                  }),
                  (0, r.jsx)(R, {}),
                ],
              }),
              (0, r.jsx)("div", {
                id: "chillwhales",
                className: "flex min-h-[340px] justify-center bg-white",
                children: (0, r.jsxs)("div", {
                  className:
                    "grid-content-area grid grid-cols-1 gap-[15px] text-dark-blue md:grid-cols-2 md:gap-[30px] lg:grid-cols-2 lg:gap-[60px]",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "mt-8 flex flex-col",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "text-left text-[50px] font-extra-bold leading-[64px] tracking-normal md:text-6xl md:leading-[100px] lg:text-[120px] lg:leading-[153px]",
                          children: "WHALES",
                        }),
                        (0, r.jsx)("hr", {
                          className: "w-full border-t border-blue-opacity",
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "mt-[9px] text-left text-[14px] font-normal leading-[18px] tracking-normal",
                          children:
                            "the first LSP8 pfp culture collection on Universal Profiles. here for the vibes. here for the legacy.",
                        }),
                        (0, r.jsx)("div", {
                          className: "mt-[20px] pb-7",
                          children: (0, r.jsxs)("div", {
                            className: "flex min-w-[232px] gap-4",
                            children: [
                              (0, r.jsx)(s.Z, {
                                url: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
                                type: "solid-dark-blue",
                                text: "BUY $CHILLL",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    e &&
                      (0, r.jsxs)("div", {
                        className:
                          "mb-5 overflow-auto md:mt-12 lg:mb-10 lg:mt-16 lg:h-[270px]",
                        children: [
                          
                        ],
                      }),
                  ],
                }),
              }),
            ],
          });
        },
        M = t(75633),
        J = t(66240),
        V = t(7496),
        Q = t(11163);
      let Y = (e) => {
        let { item: l, index: t, onOpenImg: s } = e,
          [n, i] = (0, a.useState)(!0);
        return (0, r.jsx)("div", {
          className: "".concat(
            t >= 3 ? "hidden md:block" : "",
            " cursor-pointer"
          ),
          onClick: () => {
            s(l.image);
          },
          children: (0, r.jsxs)("div", {
            className: "relative flex flex-col items-center justify-center",
            children: [
              n &&
                (0, r.jsx)("div", {
                  className:
                    "flex-x-4 absolute top-0 flex h-[457px] w-[285px] animate-pulse flex-col",
                  children: (0, r.jsx)("div", {
                    className: "h-[285px] w-[285px] rounded-[20px] bg-gray-300",
                  }),
                }),
              (0, r.jsx)(m(), {
                onLoad: () => i(!1),
                src: l.image || "",
                alt: "TODO",
                sizes: "100vw",
                width: 0,
                height: 0,
                style: {
                  objectFit: "contain",
                  objectPosition: "top",
                  height: "auto",
                  width: "100%",
                },
                className: "max-w-full rounded-xl ".concat(
                  n ? "invisible" : "visible"
                ),
              }),
            ],
          }),
        });
      };
      var $ = (e) => {
          let { memes: l } = e,
            t = (0, Q.useRouter)(),
            [s, n] = (0, a.useState)(!1),
            [i, c] = (0, a.useState)(""),
            o = (e) => {
              n(!0), c(e);
            };
          return (0, r.jsx)(r.Fragment, {
            children:
              l.is_active &&
              (0, r.jsx)("div", {
                className: "flex justify-center bg-petrol-black",
                children: (0, r.jsxs)("div", {
                  className: "grid-content-area",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "relative mb-[89px] mt-[84px] text-white",
                      children: [
                        (0, r.jsx)("div", {
                          className: "grid grid-cols-1 md:grid-cols-2",
                          children: (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("span", {
                                className: "text-4xl font-bold leading-[25px]",
                                children: l.title,
                              }),
                              (0, r.jsx)("hr", {
                                className:
                                  "mt-2 w-full border-t border-white border-opacity-30",
                              }),
                              (0, r.jsx)("p", {
                                className:
                                  "mt-2 text-left text-[14px] font-normal leading-[18px] tracking-normal",
                                children: l.text,
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "mt-14 columns-1 gap-2 space-y-2 sm:columns-2 md:columns-3 lg:columns-4",
                          children: l.items.map((e, l) =>
                            (0, r.jsx)(
                              Y,
                              { item: e, index: l, onOpenImg: o },
                              crypto.randomUUID()
                            )
                          ),
                        }),
                        (0, r.jsx)("div", {
                          className: "mt-10 grid grid-cols-1 md:grid-cols-2",
                          children: (0, r.jsxs)("div", {
                            className: "flex w-full flex-col",
                            children: [
                              (0, r.jsx)("hr", {
                                className:
                                  "w-full border-t border-white border-opacity-30",
                              }),
                              (0, r.jsx)("div", {
                                className: "mt-4 max-w-[285px] self-start",
                                children: (0, r.jsx)(J.Z, {
                                  onClick: () => {
                                    t.push(l.button.url);
                                  },
                                  text: l.button.text,
                                  disabled: !1,
                                  type: "outline",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)(V.Z, {
                      isOpen: s,
                      items: l.items.map((e) => ({
                        id: e.id,
                        image: e.image,
                        caption: e.caption,
                      })),
                      onClose: () => {
                        n(!1), c("");
                      },
                      selectedImg: i,
                    }),
                  ],
                }),
              }),
          });
        },
        G = t(11280),
        X = (e) => {
          let { news: l } = e,
            t = (0, Q.useRouter)();
          return (0, r.jsx)(r.Fragment, {
            children:
              l.is_active &&
              (0, r.jsx)("div", {
                className: "flex justify-center bg-petrol-black",
                children: (0, r.jsx)("div", {
                  className: "grid-content-area",
                  children: (0, r.jsxs)("div", {
                    className: "relative mb-[89px] mt-[84px] text-white",
                    children: [
                      (0, r.jsx)("div", {
                        className: "mb-10 grid grid-cols-1 md:grid-cols-2",
                        children: (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("span", {
                              className: "text-4xl font-bold leading-[25px]",
                              children: l.title,
                            }),
                            (0, r.jsx)("hr", {
                              className:
                                "mt-2 w-full border-t border-white border-opacity-30",
                            }),
                            (0, r.jsx)("p", {
                              className:
                                "mt-2 text-left text-[14px] font-normal leading-[18px] tracking-normal",
                              children:
                                "Keep up with the latest update. Stay CHILL. \uD83E\uDDCA \uD83D\uDC0B",
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "flex flex-wrap items-center justify-center",
                        children: l.items
                          .slice(0, 4)
                          .map((e, l, t) =>
                            (0, r.jsx)(
                              "div",
                              {
                                className: (0, d.AK)(
                                  "mx-4 my-6",
                                  l > 1 ? "hidden md:block" : ""
                                ),
                                children: (0, r.jsx)(G.Z, {
                                  size: l ? "small" : "big",
                                  title: e.title,
                                  abstract: e.abstract,
                                  coverImage: e.image || "",
                                  tags: e.tags,
                                  url: e.url,
                                }),
                              },
                              "news_".concat(l)
                            )
                          ),
                      }),
                      (0, r.jsx)("div", {
                        className: "mt-10 grid grid-cols-1 md:grid-cols-2",
                        children: (0, r.jsxs)("div", {
                          className: "flex w-full flex-col",
                          children: [
                            (0, r.jsx)("hr", {
                              className:
                                "w-full border-t border-white border-opacity-30",
                            }),
                            (0, r.jsx)("div", {
                              className: "mt-4 max-w-[285px] self-start",
                              children: (0, r.jsx)(J.Z, {
                                onClick: () => {
                                  t.push(l.button.url);
                                },
                                text: l.button.text,
                                disabled: !1,
                                type: "outline",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
          });
        },
        ee = t(78181),
        el = () => {
          let { data: e } = (0, u.a)({
            queryKey: ["top_five_orbs_holders"],
            queryFn: async () => {
              let e = {};
              return (
                (
                  await (0, f.ZP)(
                    "https://graph.chillwhales.dev/subgraphs/name/chillwhales_v3",
                    p.NF,
                    {
                      first: 5,
                      skip: 0,
                      orderBy: p.N2.orbsCount,
                      orderDirection: p.N9.desc,
                    }
                  )
                ).holders.map((l) => {
                  let { address: t, orbsCount: r } = l;
                  return (e[t] = r);
                }),
                e
              );
            },
          });
          return (0, r.jsxs)("div", {
            children: [
              (0, r.jsx)("div", {
                className:
                  "relative flex min-h-[500px] justify-center md:min-h-[960px]",
                children: (0, r.jsx)(m(), {
                  src: "/assets/banners/orbs.png",
                  alt: "Background",
                  fill: !0,
                  sizes: "100vw",
                  className: "z-0 object-cover object-center",
                }),
              }),
              (0, r.jsx)("div", {
                id: "orbs",
                className: "flex min-h-[340px] justify-center bg-white",
                children: (0, r.jsxs)("div", {
                  className:
                    "grid-content-area grid grid-cols-1 gap-[15px] text-dark-blue md:grid-cols-2 md:gap-[30px] lg:grid-cols-2 lg:gap-[60px]",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "mt-8 flex flex-col",
                      children: [
                        (0, r.jsx)("p", {
                          className:
                            "text-left text-[50px] font-extra-bold leading-[64px] tracking-normal md:text-6xl md:leading-[100px] lg:text-[120px] lg:leading-[153px]",
                          children: "ORBS",
                        }),
                        (0, r.jsx)("hr", {
                          className: "w-full border-t border-blue-opacity",
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "mt-[9px] text-left text-[14px] font-normal leading-[18px] tracking-normal",
                          children:
                            "the birth of orbs. at first glance it might resemble a normal object of some sort; yet with a touch of $CHILL, divinity takes place..",
                        }),
                        (0, r.jsx)("div", {
                          className: "mt-[20px] pb-7",
                          children: (0, r.jsx)("div", {
                            className: "flex flex-col",
                            children: (0, r.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                (0, r.jsx)(ee.Z, {
                                  variant: "petrol",
                                  width: 30,
                                  height: 30,
                                }),
                                (0, r.jsx)(s.Z, {
                                  url: "https://t.me/",
                                  text: "Join Community",
                                  type: "solid-dark-blue",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    e &&
                      (0, r.jsxs)("div", {
                        className:
                          "mb-5 overflow-auto md:mt-12 lg:mb-10 lg:mt-16 lg:h-[270px]",
                        children: [

                        ],
                      }),
                  ],
                }),
              }),
            ],
          });
        },
        et = (e) => {
          let { testimonials: l } = e;
          return (0, r.jsx)(r.Fragment, {
            children:
              l.is_active &&
              (0, r.jsx)("div", {
                className: "flex justify-center bg-white",

              }),
          });
        },
        er = !0;
      function ea(e) {
        let { page: l } = e,
          t = (e, l, t) => e.find((e) => e[l] === t);
        return (
          document.querySelectorAll('a[href^="#"]').forEach((e) => {
            e.addEventListener("click", function (l) {
              l.preventDefault();
              let t = e.getAttribute("href");
              if (t) {
                var r;
                null === (r = document.querySelector(t)) ||
                  void 0 === r ||
                  r.scrollIntoView({ behavior: "smooth" });
              }
            });
          }),
          (0, r.jsxs)("div", {
            className: "relative h-full min-h-screen",
            children: [
              (0, r.jsx)(z, {}),
              (0, r.jsx)(el, {}),
              (0, r.jsx)(b, {}),
              (0, r.jsx)(E, {}),
              (0, r.jsx)(N, {}),
              (0, r.jsx)(X, { news: t(l.content, "type", "latest_news") }),
              (0, r.jsx)(j, {}),
              (0, r.jsx)($, { memes: t(l.content, "type", "chill_memes") }),
              (0, r.jsx)(et, {
                testimonials: t(l.content, "type", "testimonials"),
              }),
              (0, r.jsx)(M.Z, {}),
            ],
          })
        );
      }
    },
    31041: function (e) {
      e.exports = {
        customTruncate: "ChillSection_customTruncate__UBeNi",
        chillBold: "ChillSection_chillBold__N5MOS",
      };
    },
    9474: function (e) {
      e.exports = {
        embla: "FullScreenOverlay_embla__WB_ii",
        embla__viewport: "FullScreenOverlay_embla__viewport__pkRhc",
        embla__slide: "FullScreenOverlay_embla__slide__aJ6w0",
        embla__container: "FullScreenOverlay_embla__container__ykTkr",
        embla__controls: "FullScreenOverlay_embla__controls__bPkCv",
        embla__buttons: "FullScreenOverlay_embla__buttons__i98_P",
        embla__button: "FullScreenOverlay_embla__button__Jij2_",
        embla__button__svg: "FullScreenOverlay_embla__button__svg__pyQb2",
        customTruncate: "FullScreenOverlay_customTruncate__GwJ3l",
      };
    },
    43138: function (e) {
      e.exports = {
        container: "WelcomeWhaleBox_container__e_26K",
        innerBox: "WelcomeWhaleBox_innerBox__63ROS",
        maskImage: "WelcomeWhaleBox_maskImage__JuMRp",
        whale: "WelcomeWhaleBox_whale__J7Fwl",
        image: "WelcomeWhaleBox_image___lIBO",
        text1: "WelcomeWhaleBox_text1__FfAS2",
        divider: "WelcomeWhaleBox_divider__uF1I_",
        text2: "WelcomeWhaleBox_text2__F5Fph",
        innerBoxRow: "WelcomeWhaleBox_innerBoxRow__jrLVS",
        orbLabel: "WelcomeWhaleBox_orbLabel__jB5W0",
        buildingLabel: "WelcomeWhaleBox_buildingLabel__QeeI0",
      };
    },
  },
  function (e) {
    e.O(0, [9595, 9382, 9123, 6646, 2888, 9774, 179], function () {
      return e((e.s = 48312));
    }),
      (_N_E = e.O());
  },
]);
