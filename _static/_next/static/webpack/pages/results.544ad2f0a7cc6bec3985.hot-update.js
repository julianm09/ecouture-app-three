webpackHotUpdate_N_E("pages/results",{

/***/ "./src/pages/results.jsx":
/*!*******************************!*\
  !*** ./src/pages/results.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_layout_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout/_canvas */ "./src/components/layout/_canvas.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Menu */ "./src/components/Menu.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/color */ "./src/components/color.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _components_Tip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Tip */ "./src/components/Tip.js");
/* harmony import */ var _components_CheckpointCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CheckpointCard */ "./src/components/CheckpointCard.js");









const Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 100vw;
  min-height: 100vh;
  z-index: 0;
  display: flex;
  justify-content: center;
`;
const Score = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  text-align: left;
  position: absolute;
  left: 5vw;
  bottom: 5vh;
  display: flex;
  height: 50px;
  border-radius: 10px 10px 0 0;
  align-items: center;
  justify-content: space-between;
  color: ${_components_color__WEBPACK_IMPORTED_MODULE_3__["colors"].blue};
  border: 1px solid ${_components_color__WEBPACK_IMPORTED_MODULE_3__["colors"].blue};
  background: white;
  font-size: 18px;
  font-weight: 700;
  font-family: Nunito;
  width: 90vw;
  height: 5vh;
  z-index: 0;
  padding: 0 5vw 0 5vw;
  transition: 0s ease;

  &:hover {
  }
`;
const Space = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 10px;
`;
const ResultsUI = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 90vw;
  min-height: 100px;
  position: absolute;
  top: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Nunito;
  font-size: 14px;
  animation: 5s ease blink-1 infinite;
`;
const Progress = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 90vw;
  position: absolute;
  bottom: 5vh;
  display: flex;
  align-items: center;
  justify-content: left;
  background: white;
  border: 1px solid white;
  font-family: Nunito;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const ProgressBlue = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 10vw;
  min-height: 5vh;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${_components_color__WEBPACK_IMPORTED_MODULE_3__["colors"].blue};
  transition: 1s ease;
  font-family: Nunito;
`;
const ScoreInfo = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ease;
  font-family: Nunito;
`;
const TipsContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 2fr 2fr 2fr;
  grid-template-columns: 2fr 2fr 2fr;
  margin: 1vh 0 0 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.1s ease;
  font-family: Nunito;
`;
const TipUI = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ease;
  font-family: Nunito;
  z-index: 1000;
  
`;
const TipImage = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img`
  width: 10vh;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1vh;
  filter: grayscale(100%)
`;
const FactUI = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
width: 50%;
text-align: center;
`;
const Results = () => {
  const showScoreCard = () => {
    setScoreCardExpand(!scoreCardExpand);
  };
  const [count, setCount] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const [scoreCardExpand, setScoreCardExpand] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [progress, setProgress] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([false, false, false, false, false, false, false, false, false, false, false, false]);
  const [progressBar, setProgressBar] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([0, 0]);
  const [showFact, setShowFact] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [fact, setFact] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("beans");
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let score = JSON.parse(localStorage.getItem("score"));
    let completed = () => {
      if (true) {
        if (localStorage.getItem("completed") === null) {
          return [false, false, false, false, false, false, false, false, false, false, false, false];
        } else {
          return JSON.parse(localStorage.getItem("completed"));
        }
      }
    };
    let p = completed();
    setProgress(p);
    let count2 = p.filter(Boolean).length;
    var number = Math.min(Math.max(parseInt(count2), 0), 3);
    localStorage.setItem("count", count2);
    setCount(count2);
    setProgressBar([score, (100 - score) / 3 * number]);
  }, []);
  function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }
  console.log("progress", progress);
  console.log("rendered", progressBar);
  const props = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])({
    config: {duration: 2e3},
    number: progressBar[0] + progressBar[1],
    from: {number: 0}
  });
  const [hide, setHide] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  console.log("progress bar", progressBar);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    style: {background: count == 12 ? "linear-gradient(-45deg, #3884FF, #51B27E)" : _components_color__WEBPACK_IMPORTED_MODULE_3__["colors"].blue}
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    hide,
    setHide,
    logo: "/logo-small.png",
    iconColor: "white",
    three: true,
    backButton: false
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ResultsUI, null, "click the points to see your impact on the earth"), count == 0 ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CheckpointCard__WEBPACK_IMPORTED_MODULE_8__["CheckpointCard"], {
    completeImage: "/earth.png",
    completeMessage: "Your Eco Score Could be Better..",
    completeFact: "The recent increase in fast fashion has polluted our air and water. Complete the tasks to increase your score and bring the stars back!"
  }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), count == 3 ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CheckpointCard__WEBPACK_IMPORTED_MODULE_8__["CheckpointCard"], {
    completeImage: "/earth.png",
    completeMessage: "You brought the stars back!",
    completeFact: "Complete more tasks to unlock more tips or check out our other resources."
  }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), count == 12 ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CheckpointCard__WEBPACK_IMPORTED_MODULE_8__["CheckpointCard"], {
    completeImage: "/earth.png",
    completeMessage: "You've completed all the tasks!",
    completeFact: "Share this with your friends and check out our resources!"
  }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout_canvas__WEBPACK_IMPORTED_MODULE_0__["default"], {
    r3f: true,
    hide,
    setHide,
    progress,
    setProgress,
    progressBar
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Score, {
    style: {
      display: "flex",
      height: scoreCardExpand ? "70vh" : "5vh",
      alignItems: scoreCardExpand ? "flex-start" : "center",
      justifyContent: scoreCardExpand ? "space-between" : "center",
      padding: scoreCardExpand ? "2vh" : "0 2vh",
      flexDirection: "column",
      border: "2px solid white"
    }
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between"
    }
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: showScoreCard,
    style: {
      display: "flex",
      width: "100%",
      cursor: "pointer"
    }
  }, "Eco Score:", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Space, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div, null, props.number.to((val) => Math.floor(val))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Space, null)), scoreCardExpand ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_6__["ChevronDown"], {
    style: {cursor: "pointer"},
    onClick: showScoreCard
  }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_6__["ChevronUp"], {
    style: {cursor: "pointer"},
    onClick: showScoreCard
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ScoreInfo, {
    style: {
      display: scoreCardExpand ? "flex" : "none",
      justifyContent: "flex-start",
      margin: "1vh 0 0 0",
      flexDirection: "column"
    }
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: () => setShowFact(!showFact),
    style: {
      width: "90vw",
      height: "92%",
      background: _components_color__WEBPACK_IMPORTED_MODULE_3__["colors"].blue,
      color: "white",
      position: "absolute",
      zIndex: "10000",
      display: showFact ? "flex" : "none",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      border: "1px solid white"
    }
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_6__["X"], {
    style: {
      position: "absolute",
      top: "10px",
      left: "10px"
    },
    onClick: () => setShowFact(!showFact)
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FactUI, null, fact)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      width: "90vw",
      background: _components_color__WEBPACK_IMPORTED_MODULE_3__["colors"].blue,
      color: "white",
      padding: "1vw 5vw",
      position: "relative",
      height: "6vh",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      display: "flex",
      alignItems: "center"
    }
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    style: {
      position: "absolute",
      animation: "blink 6s ease infinite"
    }
  }, count < 3 ? "Your Eco Score Could be Better" : "Your Eco Score is Complete!"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    style: {
      position: "absolute",
      animation: "blink 6s ease infinite",
      animationDelay: "3s",
      opacity: "0"
    }
  }, "See your impacts to unlock tips")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TipsContainer, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Tip__WEBPACK_IMPORTED_MODULE_7__["Tip"], {
    position: 0,
    progress,
    image: "/microfiber.png",
    setShowFact,
    showFact,
    setFact,
    tip: "To reduce the microfibers you produce, buy natural textiles and try washing less with cool water."
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Tip__WEBPACK_IMPORTED_MODULE_7__["Tip"], {
    position: 1,
    progress,
    image: "/bottle-empty.png",
    setShowFact,
    showFact,
    setFact,
    tip: "To help lessen water usage try washing your clothes in bigger batches and less often."
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Tip__WEBPACK_IMPORTED_MODULE_7__["Tip"], {
    position: 2,
    progress,
    image: "/factory.png",
    setShowFact,
    showFact,
    setFact,
    tip: "Try purchasing clothing made from recycled materials to avoid adding to carbon emissions."
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Tip__WEBPACK_IMPORTED_MODULE_7__["Tip"], {
    position: 3,
    progress,
    image: "/garbage.png",
    setShowFact,
    showFact,
    setFact,
    tip: "To lessen the amount of textiles populating landfills try donating your clothes to thrift stores, where they can be reused and recycled instead."
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Tip__WEBPACK_IMPORTED_MODULE_7__["Tip"], {
    position: 4,
    progress,
    image: "/tee.png",
    setShowFact,
    showFact,
    setFact,
    tip: "If your clothing is ruined and no longer wearable, consider donating to your local textile recycling program."
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Tip__WEBPACK_IMPORTED_MODULE_7__["Tip"], {
    position: 5,
    progress,
    image: "/oil-drum.png",
    setShowFact,
    showFact,
    setFact,
    tip: "To help lessen water pollution try purchasing clothing from companies that use a carbon based dyeing process."
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Tip__WEBPACK_IMPORTED_MODULE_7__["Tip"], {
    position: 6,
    progress,
    image: "/tree.png",
    setShowFact,
    showFact,
    setFact,
    tip: "Try not to buy clothing made from rayon or viscose, as these fibers are almost completely constucted from wood pulp."
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Tip__WEBPACK_IMPORTED_MODULE_7__["Tip"], {
    position: 7,
    progress,
    image: "/building.png",
    setShowFact,
    showFact,
    setFact,
    tip: "Try to shop locally more often than not, as emissions from transportation contributes to the melting of our ice caps and the expansion of our oceans."
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Tip__WEBPACK_IMPORTED_MODULE_7__["Tip"], {
    position: 8,
    progress,
    image: "/iceberg.png",
    setShowFact,
    showFact,
    setFact,
    tip: "Try to compose a majority of your wardrobe from used clothing, as the fashion industry contributes more than 10% of global carbon emissions annually."
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Tip__WEBPACK_IMPORTED_MODULE_7__["Tip"], {
    position: 9,
    progress,
    image: "/grey-cloud.png",
    setShowFact,
    showFact,
    setFact,
    tip: "Try bringing unwanted clothing to thrift stores or textile recycling shops as 95% of textiles can be recycled."
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Tip__WEBPACK_IMPORTED_MODULE_7__["Tip"], {
    position: 10,
    progress,
    image: "/water-drop.png",
    setShowFact,
    showFact,
    setFact,
    tip: "Avoid purchasing clothing made of cotton as cotton requires more water to dye than other textiles."
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Tip__WEBPACK_IMPORTED_MODULE_7__["Tip"], {
    position: 11,
    progress,
    image: "/sheep.png",
    setShowFact,
    showFact,
    setFact,
    tip: "Hemp is a natural, biodegradable material which doesn't require pesticides to grow and is a great alternative to wool."
  })))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Progress, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      width: progressBar[0] + "vw",
      minHeight: "5vh",
      bottom: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: _components_color__WEBPACK_IMPORTED_MODULE_3__["colors"].blue,
      transition: "2s ease"
    }
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      width: progressBar[1] - 10 + "vw",
      minHeight: "5vh",
      bottom: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: _components_color__WEBPACK_IMPORTED_MODULE_3__["colors"].green,
      transition: "2s ease"
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Results);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Jlc3VsdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTSxZQUFZLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRekIsTUFBTSxRQUFRLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVVWLHdEQUFNLENBQUM7QUFBQSxzQkFDSSx3REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlN0IsTUFBTSxRQUFRLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBSXJCLE1BQU0sWUFBWSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY3pCLE1BQU0sV0FBVyx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFleEIsTUFBTSxlQUFlLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFPWix3REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBS3ZCLE1BQU0sWUFBWSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVV6QixNQUFNLGdCQUFnQix5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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a0IsS0FBSTtBQUFBLE1BRS9ILDJFQUFDLG1EQUFHLEVBQUo7QUFBQSxJQUFLLFVBQVU7QUFBQSxJQUFHO0FBQUEsSUFBb0IsT0FBTTtBQUFBLElBQWtCO0FBQUEsSUFBMEI7QUFBQSxJQUFvQjtBQUFBLElBQWtCLEtBQUk7QUFBQSxNQUVsSSwyRUFBQyxtREFBRyxFQUFKO0FBQUEsSUFBSyxVQUFVO0FBQUEsSUFBSTtBQUFBLElBQW9CLE9BQU07QUFBQSxJQUFrQjtBQUFBLElBQTBCO0FBQUEsSUFBb0I7QUFBQSxJQUFrQixLQUFJO0FBQUEsTUFFbkksMkVBQUMsbURBQUcsRUFBSjtBQUFBLElBQUssVUFBVTtBQUFBLElBQUk7QUFBQSxJQUFvQixPQUFNO0FBQUEsSUFBYTtBQUFBLElBQTBCO0FBQUEsSUFBb0I7QUFBQSxJQUFrQixLQUFJO0FBQUEsU0FNcEksMkVBQUMsVUFBRCxNQUNFLDJFQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLE9BQU8sWUFBWSxLQUFLO0FBQUEsTUFDeEIsV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsTUFDaEIsWUFBWSx3REFBTSxDQUFDO0FBQUEsTUFDbkIsWUFBWTtBQUFBO0FBQUEsTUFJaEIsMkVBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsT0FBTyxZQUFZLEtBQUssS0FBSztBQUFBLE1BQzdCLFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLE1BQ2hCLFlBQVksd0RBQU0sQ0FBQztBQUFBLE1BQ25CLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFRVCxzRUFBTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXN1bHRzLjU0NGFkMmYwYTdjYzZiZWMzOTg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhyZWVDYW52YXMgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvX2NhbnZhcydcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbG9yJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5pbXBvcnQgeyBUaXAgfSBmcm9tICcuLi9jb21wb25lbnRzL1RpcCdcclxuaW1wb3J0IHsgQ2hlY2twb2ludENhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NoZWNrcG9pbnRDYXJkJ1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgei1pbmRleDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBTY29yZSA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNXZ3O1xyXG4gIGJvdHRvbTogNXZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgY29sb3I6ICR7Y29sb3JzLmJsdWV9O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLmJsdWV9O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAgei1pbmRleDogMDtcclxuICBwYWRkaW5nOiAwIDV2dyAwIDV2dztcclxuICB0cmFuc2l0aW9uOiAwcyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFNwYWNlID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTBweDtcclxuYFxyXG5cclxuY29uc3QgUmVzdWx0c1VJID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogOTB2dztcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYW5pbWF0aW9uOiA1cyBlYXNlIGJsaW5rLTEgaW5maW5pdGU7XHJcbmBcclxuXHJcbmNvbnN0IFByb2dyZXNzID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogOTB2dztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1dmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5gXHJcblxyXG5jb25zdCBQcm9ncmVzc0JsdWUgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMHZ3O1xyXG4gIG1pbi1oZWlnaHQ6IDV2aDtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICR7Y29sb3JzLmJsdWV9O1xyXG4gIHRyYW5zaXRpb246IDFzIGVhc2U7XHJcbiAgZm9udC1mYW1pbHk6IE51bml0bztcclxuYFxyXG5cclxuY29uc3QgU2NvcmVJbmZvID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcclxuICBmb250LWZhbWlseTogTnVuaXRvO1xyXG5gXHJcblxyXG5jb25zdCBUaXBzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAyZnIgMmZyIDJmcjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgMmZyO1xyXG4gIG1hcmdpbjogMXZoIDAgMCAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XHJcbiAgZm9udC1mYW1pbHk6IE51bml0bztcclxuYFxyXG5cclxuY29uc3QgVGlwVUkgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBcclxuYFxyXG5cclxuY29uc3QgVGlwSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAxMHZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBwYWRkaW5nOiAxdmg7XHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSlcclxuYFxyXG5cclxuY29uc3QgRmFjdFVJID0gc3R5bGVkLmRpdmBcclxud2lkdGg6IDUwJTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBSZXN1bHRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNob3dTY29yZUNhcmQgPSAoKSA9PiB7XHJcbiAgICBzZXRTY29yZUNhcmRFeHBhbmQoIXNjb3JlQ2FyZEV4cGFuZClcclxuICB9XHJcblxyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgW3Njb3JlQ2FyZEV4cGFuZCwgc2V0U2NvcmVDYXJkRXhwYW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSlcclxuXHJcbiAgY29uc3QgW3Byb2dyZXNzQmFyLCBzZXRQcm9ncmVzc0Jhcl0gPSB1c2VTdGF0ZShbMCwgMF0pXHJcblxyXG4gIGNvbnN0IFtzaG93RmFjdCwgc2V0U2hvd0ZhY3RdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IFtmYWN0LCBzZXRGYWN0XSA9IHVzZVN0YXRlKFwiYmVhbnNcIilcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vZ2V0IHNjb3JlXHJcbiAgICBsZXQgc2NvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZScpKVxyXG5cclxuICAgIGxldCBjb21wbGV0ZWQgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbXBsZXRlZCcpID09PSBudWxsKSB7XHJcbiAgICAgICAgICByZXR1cm4gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb21wbGV0ZWQnKSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcCA9IGNvbXBsZXRlZCgpXHJcblxyXG4gICAgc2V0UHJvZ3Jlc3MocClcclxuICAgIC8vY2hlY2sgaWYgcG9pbnRzIGFyZSBjb21wbGV0ZSBhbmQgYWRkIGluY3JlbWVudCB0byBzY29yZVxyXG4gICAgbGV0IGNvdW50ID0gcC5maWx0ZXIoQm9vbGVhbikubGVuZ3RoXHJcblxyXG4gICAgdmFyIG51bWJlciA9IE1hdGgubWluKE1hdGgubWF4KHBhcnNlSW50KGNvdW50KSwgMCksIDMpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb3VudCcsIGNvdW50KVxyXG5cclxuICAgIHNldENvdW50KGNvdW50KVxyXG5cclxuICAgIHNldFByb2dyZXNzQmFyKFtzY29yZSwgKCgxMDAgLSBzY29yZSkgLyAzKSAqIG51bWJlcl0pXHJcbiAgfSwgW10pXHJcblxyXG4gIGZ1bmN0aW9uIGNsYW1wKG51bSwgbWluLCBtYXgpIHtcclxuICAgIHJldHVybiBudW0gPD0gbWluID8gbWluIDogbnVtID49IG1heCA/IG1heCA6IG51bTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKCdwcm9ncmVzcycsIHByb2dyZXNzKVxyXG4gIGNvbnNvbGUubG9nKCdyZW5kZXJlZCcsIHByb2dyZXNzQmFyKVxyXG5cclxuICBjb25zdCBwcm9wcyA9IHVzZVNwcmluZyh7XHJcbiAgICBjb25maWc6IHsgZHVyYXRpb246IDIwMDAgfSxcclxuICAgIG51bWJlcjogcHJvZ3Jlc3NCYXJbMF0gKyBwcm9ncmVzc0JhclsxXSAvKiArIHByb2dyZXNzR3JlZW4gKi8sXHJcbiAgICBmcm9tOiB7IG51bWJlcjogMCB9LFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IFtoaWRlLCBzZXRIaWRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnNvbGUubG9nKCdwcm9ncmVzcyBiYXInLCBwcm9ncmVzc0JhcilcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBzdHlsZT17e2JhY2tncm91bmQ6IGNvdW50ID09IDEyID8gJ2xpbmVhci1ncmFkaWVudCgtNDVkZWcsICMzODg0RkYsICM1MUIyN0UpJyA6IGNvbG9ycy5ibHVlfX0+XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgaGlkZT17aGlkZX1cclxuICAgICAgICBzZXRIaWRlPXtzZXRIaWRlfVxyXG4gICAgICAgIGxvZ289Jy9sb2dvLXNtYWxsLnBuZydcclxuICAgICAgICBpY29uQ29sb3I9eyd3aGl0ZSd9XHJcbiAgICAgICAgdGhyZWU9e3RydWV9XHJcbiAgICAgICAgYmFja0J1dHRvbj17ZmFsc2V9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8UmVzdWx0c1VJPmNsaWNrIHRoZSBwb2ludHMgdG8gc2VlIHlvdXIgaW1wYWN0IG9uIHRoZSBlYXJ0aDwvUmVzdWx0c1VJPlxyXG5cclxuICAgICAgeyBjb3VudCA9PSAwID8gPENoZWNrcG9pbnRDYXJkIGNvbXBsZXRlSW1hZ2U9XCIvZWFydGgucG5nXCIgY29tcGxldGVNZXNzYWdlPVwiWW91ciBFY28gU2NvcmUgQ291bGQgYmUgQmV0dGVyLi5cIiBjb21wbGV0ZUZhY3Q9XCJUaGUgcmVjZW50IGluY3JlYXNlIGluIGZhc3QgZmFzaGlvbiBoYXMgcG9sbHV0ZWQgb3VyIGFpciBhbmQgd2F0ZXIuIENvbXBsZXRlIHRoZSB0YXNrcyB0byBpbmNyZWFzZSB5b3VyIHNjb3JlIGFuZCBicmluZyB0aGUgc3RhcnMgYmFjayFcIi8+IDogPD48Lz4gfVxyXG5cclxuICAgICAgeyBjb3VudCA9PSAzID8gPENoZWNrcG9pbnRDYXJkIGNvbXBsZXRlSW1hZ2U9XCIvZWFydGgucG5nXCIgY29tcGxldGVNZXNzYWdlPVwiWW91IGJyb3VnaHQgdGhlIHN0YXJzIGJhY2shXCIgY29tcGxldGVGYWN0PVwiQ29tcGxldGUgbW9yZSB0YXNrcyB0byB1bmxvY2sgbW9yZSB0aXBzIG9yIGNoZWNrIG91dCBvdXIgb3RoZXIgcmVzb3VyY2VzLlwiLz4gOiA8PjwvPiB9XHJcblxyXG4gICAgICB7IGNvdW50ID09IDEyID8gPENoZWNrcG9pbnRDYXJkIGNvbXBsZXRlSW1hZ2U9XCIvZWFydGgucG5nXCIgY29tcGxldGVNZXNzYWdlPVwiWW91J3ZlIGNvbXBsZXRlZCBhbGwgdGhlIHRhc2tzIVwiIGNvbXBsZXRlRmFjdD1cIlNoYXJlIHRoaXMgd2l0aCB5b3VyIGZyaWVuZHMgYW5kIGNoZWNrIG91dCBvdXIgcmVzb3VyY2VzIVwiLz4gOiA8PjwvPiB9XHJcblxyXG4gICAgICA8VGhyZWVDYW52YXNcclxuICAgICAgICByM2ZcclxuICAgICAgICBoaWRlPXtoaWRlfVxyXG4gICAgICAgIHNldEhpZGU9e3NldEhpZGV9XHJcbiAgICAgICAgcHJvZ3Jlc3M9e3Byb2dyZXNzfVxyXG4gICAgICAgIHNldFByb2dyZXNzPXtzZXRQcm9ncmVzc31cclxuICAgICAgICBwcm9ncmVzc0JhciA9IHtwcm9ncmVzc0Jhcn1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxTY29yZVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBoZWlnaHQ6IHNjb3JlQ2FyZEV4cGFuZCA/ICc3MHZoJyA6ICc1dmgnLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogc2NvcmVDYXJkRXhwYW5kID8gJ2ZsZXgtc3RhcnQnIDogJ2NlbnRlcicsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogc2NvcmVDYXJkRXhwYW5kID8gJ3NwYWNlLWJldHdlZW4nIDogJ2NlbnRlcicsXHJcbiAgICAgICAgICBwYWRkaW5nOiBzY29yZUNhcmRFeHBhbmQgPyAnMnZoJyA6ICcwIDJ2aCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgIGJvcmRlcjogJzJweCBzb2xpZCB3aGl0ZSdcclxuICAgICAgICB9fVxyXG4gICAgICAgIFxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25DbGljaz17c2hvd1Njb3JlQ2FyZH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRWNvIFNjb3JlOlxyXG4gICAgICAgICAgICA8U3BhY2U+PC9TcGFjZT5cclxuICAgICAgICAgICAgPGFuaW1hdGVkLmRpdj5cclxuICAgICAgICAgICAgICB7cHJvcHMubnVtYmVyLnRvKCh2YWwpID0+IE1hdGguZmxvb3IodmFsKSl9XHJcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICAgICAgICAgICA8U3BhY2U+PC9TcGFjZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3Njb3JlQ2FyZEV4cGFuZCA/IDxJY29uLkNoZXZyb25Eb3duIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fSBvbkNsaWNrPXtzaG93U2NvcmVDYXJkfS8+IDogPEljb24uQ2hldnJvblVwIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fSBvbkNsaWNrPXtzaG93U2NvcmVDYXJkfSAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPFNjb3JlSW5mb1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogc2NvcmVDYXJkRXhwYW5kID8gJ2ZsZXgnIDogJ25vbmUnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgICAgICBtYXJnaW46ICcxdmggMCAwIDAnLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0ZhY3QoIXNob3dGYWN0KX1cclxuICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnOTB2dycsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc5MiUnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY29sb3JzLmJsdWUsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiAnMTAwMDAnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogc2hvd0ZhY3QgPyAnZmxleCcgOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgd2hpdGUnXHJcbiAgICAgICAgICAgICAgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPEljb24uWCBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICB0b3A6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgbGVmdDogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RmFjdCghc2hvd0ZhY3QpfS8+XHJcbiAgICAgICAgICAgICAgICA8RmFjdFVJPlxyXG5cclxuICAgICAgICAgICAgICAgICAge2ZhY3R9XHJcbiAgICAgICAgICAgICAgICA8L0ZhY3RVST5cclxuXHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6ICc5MHZ3JyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuYmx1ZSxcclxuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAnMXZ3IDV2dycsXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnNnZoJyxcclxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpJyxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicgXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogJ2JsaW5rIDZzIGVhc2UgaW5maW5pdGUnLFxyXG4gICAgICBcclxuICAgICAgICAgICAgfX0+e2NvdW50IDwgMyA/ICdZb3VyIEVjbyBTY29yZSBDb3VsZCBiZSBCZXR0ZXInIDogJ1lvdXIgRWNvIFNjb3JlIGlzIENvbXBsZXRlISd9PC9wPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogJ2JsaW5rIDZzIGVhc2UgaW5maW5pdGUnLFxyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiAnM3MnLFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6ICcwJyxcclxuICAgICAgICAgICAgfX0+U2VlIHlvdXIgaW1wYWN0cyB0byB1bmxvY2sgdGlwczwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8VGlwc0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDxUaXAgcG9zaXRpb249ezB9IHByb2dyZXNzPXtwcm9ncmVzc30gaW1hZ2U9Jy9taWNyb2ZpYmVyLnBuZycgc2V0U2hvd0ZhY3Q9e3NldFNob3dGYWN0fSBzaG93RmFjdD17c2hvd0ZhY3R9IHNldEZhY3Q9e3NldEZhY3R9IHRpcD1cIlRvIHJlZHVjZSB0aGUgbWljcm9maWJlcnMgeW91IHByb2R1Y2UsIGJ1eSBuYXR1cmFsIHRleHRpbGVzIGFuZCB0cnkgd2FzaGluZyBsZXNzIHdpdGggY29vbCB3YXRlci5cIi8+XHJcblxyXG4gICAgICAgICAgICA8VGlwIHBvc2l0aW9uPXsxfSBwcm9ncmVzcz17cHJvZ3Jlc3N9IGltYWdlPScvYm90dGxlLWVtcHR5LnBuZycgc2V0U2hvd0ZhY3Q9e3NldFNob3dGYWN0fSBzaG93RmFjdD17c2hvd0ZhY3R9IHNldEZhY3Q9e3NldEZhY3R9IHRpcD1cIlRvIGhlbHAgbGVzc2VuIHdhdGVyIHVzYWdlIHRyeSB3YXNoaW5nIHlvdXIgY2xvdGhlcyBpbiBiaWdnZXIgYmF0Y2hlcyBhbmQgbGVzcyBvZnRlbi5cIi8+XHJcblxyXG4gICAgICAgICAgICA8VGlwIHBvc2l0aW9uPXsyfSBwcm9ncmVzcz17cHJvZ3Jlc3N9IGltYWdlPScvZmFjdG9yeS5wbmcnIHNldFNob3dGYWN0PXtzZXRTaG93RmFjdH0gc2hvd0ZhY3Q9e3Nob3dGYWN0fSBzZXRGYWN0PXtzZXRGYWN0fSB0aXA9XCJUcnkgcHVyY2hhc2luZyBjbG90aGluZyBtYWRlIGZyb20gcmVjeWNsZWQgbWF0ZXJpYWxzIHRvIGF2b2lkIGFkZGluZyB0byBjYXJib24gZW1pc3Npb25zLlwiLz5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPFRpcCBwb3NpdGlvbj17M30gcHJvZ3Jlc3M9e3Byb2dyZXNzfSBpbWFnZT0nL2dhcmJhZ2UucG5nJyBzZXRTaG93RmFjdD17c2V0U2hvd0ZhY3R9IHNob3dGYWN0PXtzaG93RmFjdH0gc2V0RmFjdD17c2V0RmFjdH0gdGlwPVwiVG8gbGVzc2VuIHRoZSBhbW91bnQgb2YgdGV4dGlsZXMgcG9wdWxhdGluZyBsYW5kZmlsbHMgdHJ5IGRvbmF0aW5nIHlvdXIgY2xvdGhlcyB0byB0aHJpZnQgc3RvcmVzLCB3aGVyZSB0aGV5IGNhbiBiZSByZXVzZWQgYW5kIHJlY3ljbGVkIGluc3RlYWQuXCIvPlxyXG5cclxuICAgICAgICAgICAgPFRpcCBwb3NpdGlvbj17NH0gcHJvZ3Jlc3M9e3Byb2dyZXNzfSBpbWFnZT0nL3RlZS5wbmcnIHNldFNob3dGYWN0PXtzZXRTaG93RmFjdH0gc2hvd0ZhY3Q9e3Nob3dGYWN0fSBzZXRGYWN0PXtzZXRGYWN0fSB0aXA9XCJJZiB5b3VyIGNsb3RoaW5nIGlzIHJ1aW5lZCBhbmQgbm8gbG9uZ2VyIHdlYXJhYmxlLCBjb25zaWRlciBkb25hdGluZyB0byB5b3VyIGxvY2FsIHRleHRpbGUgcmVjeWNsaW5nIHByb2dyYW0uXCIvPlxyXG5cclxuICAgICAgICAgICAgPFRpcCBwb3NpdGlvbj17NX0gcHJvZ3Jlc3M9e3Byb2dyZXNzfSBpbWFnZT0nL29pbC1kcnVtLnBuZycgc2V0U2hvd0ZhY3Q9e3NldFNob3dGYWN0fSBzaG93RmFjdD17c2hvd0ZhY3R9IHNldEZhY3Q9e3NldEZhY3R9IHRpcD1cIlRvIGhlbHAgbGVzc2VuIHdhdGVyIHBvbGx1dGlvbiB0cnkgcHVyY2hhc2luZyBjbG90aGluZyBmcm9tIGNvbXBhbmllcyB0aGF0IHVzZSBhIGNhcmJvbiBiYXNlZCBkeWVpbmcgcHJvY2Vzcy5cIi8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8VGlwIHBvc2l0aW9uPXs2fSBwcm9ncmVzcz17cHJvZ3Jlc3N9IGltYWdlPScvdHJlZS5wbmcnIHNldFNob3dGYWN0PXtzZXRTaG93RmFjdH0gc2hvd0ZhY3Q9e3Nob3dGYWN0fSBzZXRGYWN0PXtzZXRGYWN0fSB0aXA9XCJUcnkgbm90IHRvIGJ1eSBjbG90aGluZyBtYWRlIGZyb20gcmF5b24gb3IgdmlzY29zZSwgYXMgdGhlc2UgZmliZXJzIGFyZSBhbG1vc3QgY29tcGxldGVseSBjb25zdHVjdGVkIGZyb20gd29vZCBwdWxwLlwiLz5cclxuXHJcbiAgICAgICAgICAgIDxUaXAgcG9zaXRpb249ezd9IHByb2dyZXNzPXtwcm9ncmVzc30gaW1hZ2U9Jy9idWlsZGluZy5wbmcnIHNldFNob3dGYWN0PXtzZXRTaG93RmFjdH0gc2hvd0ZhY3Q9e3Nob3dGYWN0fSBzZXRGYWN0PXtzZXRGYWN0fSB0aXA9XCJUcnkgdG8gc2hvcCBsb2NhbGx5IG1vcmUgb2Z0ZW4gdGhhbiBub3QsIGFzIGVtaXNzaW9ucyBmcm9tIHRyYW5zcG9ydGF0aW9uIGNvbnRyaWJ1dGVzIHRvIHRoZSBtZWx0aW5nIG9mIG91ciBpY2UgY2FwcyBhbmQgdGhlIGV4cGFuc2lvbiBvZiBvdXIgb2NlYW5zLlwiLz5cclxuXHJcbiAgICAgICAgICAgIDxUaXAgcG9zaXRpb249ezh9IHByb2dyZXNzPXtwcm9ncmVzc30gaW1hZ2U9Jy9pY2ViZXJnLnBuZycgc2V0U2hvd0ZhY3Q9e3NldFNob3dGYWN0fSBzaG93RmFjdD17c2hvd0ZhY3R9IHNldEZhY3Q9e3NldEZhY3R9IHRpcD1cIlRyeSB0byBjb21wb3NlIGEgbWFqb3JpdHkgb2YgeW91ciB3YXJkcm9iZSBmcm9tIHVzZWQgY2xvdGhpbmcsIGFzIHRoZSBmYXNoaW9uIGluZHVzdHJ5IGNvbnRyaWJ1dGVzIG1vcmUgdGhhbiAxMCUgb2YgZ2xvYmFsIGNhcmJvbiBlbWlzc2lvbnMgYW5udWFsbHkuXCIvPlxyXG5cclxuICAgICAgICAgICAgPFRpcCBwb3NpdGlvbj17OX0gcHJvZ3Jlc3M9e3Byb2dyZXNzfSBpbWFnZT0nL2dyZXktY2xvdWQucG5nJyBzZXRTaG93RmFjdD17c2V0U2hvd0ZhY3R9IHNob3dGYWN0PXtzaG93RmFjdH0gc2V0RmFjdD17c2V0RmFjdH0gdGlwPVwiVHJ5IGJyaW5naW5nIHVud2FudGVkIGNsb3RoaW5nIHRvIHRocmlmdCBzdG9yZXMgb3IgdGV4dGlsZSByZWN5Y2xpbmcgc2hvcHMgYXMgOTUlIG9mIHRleHRpbGVzIGNhbiBiZSByZWN5Y2xlZC5cIi8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxUaXAgcG9zaXRpb249ezEwfSBwcm9ncmVzcz17cHJvZ3Jlc3N9IGltYWdlPScvd2F0ZXItZHJvcC5wbmcnIHNldFNob3dGYWN0PXtzZXRTaG93RmFjdH0gc2hvd0ZhY3Q9e3Nob3dGYWN0fSBzZXRGYWN0PXtzZXRGYWN0fSB0aXA9XCJBdm9pZCBwdXJjaGFzaW5nIGNsb3RoaW5nIG1hZGUgb2YgY290dG9uIGFzIGNvdHRvbiByZXF1aXJlcyBtb3JlIHdhdGVyIHRvIGR5ZSB0aGFuIG90aGVyIHRleHRpbGVzLlwiLz5cclxuXHJcbiAgICAgICAgICAgIDxUaXAgcG9zaXRpb249ezExfSBwcm9ncmVzcz17cHJvZ3Jlc3N9IGltYWdlPScvc2hlZXAucG5nJyBzZXRTaG93RmFjdD17c2V0U2hvd0ZhY3R9IHNob3dGYWN0PXtzaG93RmFjdH0gc2V0RmFjdD17c2V0RmFjdH0gdGlwPVwiSGVtcCBpcyBhIG5hdHVyYWwsIGJpb2RlZ3JhZGFibGUgbWF0ZXJpYWwgd2hpY2ggZG9lc24ndCByZXF1aXJlIHBlc3RpY2lkZXMgdG8gZ3JvdyBhbmQgaXMgYSBncmVhdCBhbHRlcm5hdGl2ZSB0byB3b29sLlwiLz5cclxuXHJcbiAgICAgICAgICA8L1RpcHNDb250YWluZXI+XHJcbiAgICAgICAgPC9TY29yZUluZm8+XHJcbiAgICAgIDwvU2NvcmU+XHJcblxyXG4gICAgICA8UHJvZ3Jlc3M+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6IHByb2dyZXNzQmFyWzBdICsgJ3Z3JyxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiAnNXZoJyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMCcsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogY29sb3JzLmJsdWUsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICcycyBlYXNlJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6IHByb2dyZXNzQmFyWzFdIC0gMTAgKyAndncnLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6ICc1dmgnLFxyXG4gICAgICAgICAgICBib3R0b206ICcwJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuZ3JlZW4sXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICcycyBlYXNlJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Qcm9ncmVzcz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0c1xyXG4iXSwic291cmNlUm9vdCI6IiJ9