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
  bottom: 10vh;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Jlc3VsdHMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTSxZQUFZLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRekIsTUFBTSxRQUFRLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVVWLHdEQUFNLENBQUM7QUFBQSxzQkFDSSx3REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlN0IsTUFBTSxRQUFRLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBSXJCLE1BQU0sWUFBWSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY3pCLE1BQU0sV0FBVyx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFleEIsTUFBTSxlQUFlLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFPWix3REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBS3ZCLE1BQU0sWUFBWSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVV6QixNQUFNLGdCQUFnQix5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYzdCLE1BQU0sUUFBUSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZckIsTUFBTSxXQUFXLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFReEIsTUFBTSxTQUFTLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFLdEIsTUFBTSxVQUFVLE1BQU07QUFDcEIsUUFBTSxnQkFBZ0IsTUFBTTtBQUMxQix1QkFBbUIsQ0FBQztBQUFBO0FBR3RCLFFBQU0sQ0FBQyxPQUFPLFlBQVksc0RBQVEsQ0FBQztBQUVuQyxRQUFNLENBQUMsaUJBQWlCLHNCQUFzQixzREFBUSxDQUFDO0FBRXZELFFBQU0sQ0FBQyxVQUFVLGVBQWUsc0RBQVEsQ0FBQyxDQUFDLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTztBQUV2SCxRQUFNLENBQUMsYUFBYSxrQkFBa0Isc0RBQVEsQ0FBQyxDQUFDLEdBQUc7QUFFbkQsUUFBTSxDQUFDLFVBQVUsZUFBZSxzREFBUSxDQUFDO0FBRXpDLFFBQU0sQ0FBQyxNQUFNLFdBQVcsc0RBQVEsQ0FBQztBQUVqQyx5REFBUyxDQUFDLE1BQU07QUFFZCxRQUFJLFFBQVEsS0FBSyxNQUFNLGFBQWEsUUFBUTtBQUU1QyxRQUFJLFlBQVksTUFBTTtBQUNwQixVQUFJLElBQWUsRUFBRTtBQUNuQixZQUFJLGFBQWEsUUFBUSxpQkFBaUIsTUFBTTtBQUM5QyxpQkFBTyxDQUFDLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTztBQUFBLGVBQ2hGO0FBQ0wsaUJBQU8sS0FBSyxNQUFNLGFBQWEsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUs3QyxRQUFJLElBQUk7QUFFUixnQkFBWTtBQUVaLFFBQUksU0FBUSxFQUFFLE9BQU8sU0FBUztBQUU5QixRQUFJLFNBQVMsS0FBSyxJQUFJLEtBQUssSUFBSSxTQUFTLFNBQVEsSUFBSTtBQUVwRCxpQkFBYSxRQUFRLFNBQVM7QUFFOUIsYUFBUztBQUVULG1CQUFlLENBQUMsT0FBUyxPQUFNLFNBQVMsSUFBSztBQUFBLEtBQzVDO0FBRUgsaUJBQWUsS0FBSyxLQUFLLEtBQUs7QUFDNUIsV0FBTyxPQUFPLE1BQU0sTUFBTSxPQUFPLE1BQU0sTUFBTTtBQUFBO0FBRy9DLFVBQVEsSUFBSSxZQUFZO0FBQ3hCLFVBQVEsSUFBSSxZQUFZO0FBRXhCLFFBQU0sUUFBUSw4REFBUyxDQUFDO0FBQUEsSUFDdEIsUUFBUSxDQUFFLFVBQVU7QUFBQSxJQUNwQixRQUFRLFlBQVksS0FBSyxZQUFZO0FBQUEsSUFDckMsTUFBTSxDQUFFLFFBQVE7QUFBQTtBQUdsQixRQUFNLENBQUMsTUFBTSxXQUFXLHNEQUFRLENBQUM7QUFDakMsVUFBUSxJQUFJLGdCQUFnQjtBQUM1QixTQUNFLDJFQUFDLFdBQUQ7QUFBQSxJQUFXLE9BQU8sQ0FBQyxZQUFZLFNBQVMsS0FBSyw4Q0FBOEMsd0RBQU0sQ0FBQztBQUFBLEtBQ2hHLDJFQUFDLHFEQUFJLEVBQUw7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLElBQ0EsTUFBSztBQUFBLElBQ0wsV0FBVztBQUFBLElBQ1gsT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLE1BR2QsMkVBQUMsV0FBRCxNQUFXLHFEQUVULFNBQVMsSUFBSSwyRUFBQyx5RUFBYyxFQUFmO0FBQUEsSUFBZ0IsZUFBYztBQUFBLElBQWEsaUJBQWdCO0FBQUEsSUFBbUMsY0FBYTtBQUFBLE9BQThJLHlJQUV0USxTQUFTLElBQUksMkVBQUMseUVBQWMsRUFBZjtBQUFBLElBQWdCLGVBQWM7QUFBQSxJQUFhLGlCQUFnQjtBQUFBLElBQThCLGNBQWE7QUFBQSxPQUFnRix5SUFFbk0sU0FBUyxLQUFLLDJFQUFDLHlFQUFjLEVBQWY7QUFBQSxJQUFnQixlQUFjO0FBQUEsSUFBYSxpQkFBZ0I7QUFBQSxJQUFrQyxjQUFhO0FBQUEsT0FBZ0UseUlBRTFMLDJFQUFDLGlFQUFXLEVBQVo7QUFBQSxJQUNFLEtBQUc7QUFBQSxJQUNIO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLE1BR0YsMkVBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsUUFBUSxrQkFBa0IsU0FBUztBQUFBLE1BQ25DLFlBQVksa0JBQWtCLGVBQWU7QUFBQSxNQUM3QyxnQkFBZ0Isa0JBQWtCLGtCQUFrQjtBQUFBLE1BQ3BELFNBQVMsa0JBQWtCLFFBQVE7QUFBQSxNQUNuQyxlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUE7QUFBQSxLQUlWLDJFQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLGdCQUFnQjtBQUFBO0FBQUEsS0FJbEIsMkVBQUMsT0FBRDtBQUFBLElBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBO0FBQUEsS0FHWCxjQUVDLDJFQUFDLE9BQUQsT0FDQSwyRUFBQyxxREFBUSxDQUFDLEtBQVYsTUFDRyxNQUFNLE9BQU8sR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNLFFBRXZDLDJFQUFDLE9BQUQsUUFFRCxrQkFBa0IsMkVBQUMseURBQWdCLEVBQWpCO0FBQUEsSUFBa0IsT0FBTyxDQUFDLFFBQVE7QUFBQSxJQUFZLFNBQVM7QUFBQSxPQUFtQiwyRUFBQyx1REFBYyxFQUFmO0FBQUEsSUFBZ0IsT0FBTyxDQUFDLFFBQVE7QUFBQSxJQUFZLFNBQVM7QUFBQSxPQUdwSiwyRUFBQyxXQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxTQUFTLGtCQUFrQixTQUFTO0FBQUEsTUFDcEMsZ0JBQWdCO0FBQUEsTUFDaEIsUUFBUTtBQUFBLE1BQ1IsZUFBZTtBQUFBO0FBQUEsS0FHakIsMkVBQUMsT0FBRDtBQUFBLElBQ0EsU0FBUyxNQUFNLFlBQVksQ0FBQztBQUFBLElBQ3ZCLE9BQU87QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFlBQVksd0RBQU0sQ0FBQztBQUFBLE1BQ25CLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFNBQVMsV0FBVyxTQUFTO0FBQUEsTUFDN0IsZUFBZTtBQUFBLE1BQ2YsZ0JBQWdCO0FBQUEsTUFDaEIsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBO0FBQUEsS0FHUiwyRUFBQywrQ0FBTSxFQUFQO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUE7QUFBQSxJQUdSLFNBQVMsTUFBTSxZQUFZLENBQUM7QUFBQSxNQUM1QiwyRUFBQyxRQUFELE1BRUcsUUFLVCwyRUFBQyxPQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxZQUFZLHdEQUFNLENBQUM7QUFBQSxNQUNuQixPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsTUFDWCxTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUE7QUFBQSxLQUlkLDJFQUFDLEtBQUQ7QUFBQSxJQUFHLE9BQU87QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQTtBQUFBLEtBRVQsUUFBUSxJQUFJLG1DQUFtQyxnQ0FDbkQsMkVBQUMsS0FBRDtBQUFBLElBQUcsT0FBTztBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsZ0JBQWdCO0FBQUEsTUFDaEIsU0FBUztBQUFBO0FBQUEsS0FDUixxQ0FJTCwyRUFBQyxlQUFELE1BRUUsMkVBQUMsbURBQUcsRUFBSjtBQUFBLElBQUssVUFBVTtBQUFBLElBQUc7QUFBQSxJQUFvQixPQUFNO0FBQUEsSUFBa0I7QUFBQSxJQUEwQjtBQUFBLElBQW9CO0FBQUEsSUFBa0IsS0FBSTtBQUFBLE1BRWxJLDJFQUFDLG1EQUFHLEVBQUo7QUFBQSxJQUFLLFVBQVU7QUFBQSxJQUFHO0FBQUEsSUFBb0IsT0FBTTtBQUFBLElBQW9CO0FBQUEsSUFBMEI7QUFBQSxJQUFvQjtBQUFBLElBQWtCLEtBQUk7QUFBQSxNQUVwSSwyRUFBQyxtREFBRyxFQUFKO0FBQUEsSUFBSyxVQUFVO0FBQUEsSUFBRztBQUFBLElBQW9CLE9BQU07QUFBQSxJQUFlO0FBQUEsSUFBMEI7QUFBQSxJQUFvQjtBQUFBLElBQWtCLEtBQUk7QUFBQSxNQUUvSCwyRUFBQyxtREFBRyxFQUFKO0FBQUEsSUFBSyxVQUFVO0FBQUEsSUFBRztBQUFBLElBQW9CLE9BQU07QUFBQSxJQUFlO0FBQUEsSUFBMEI7QUFBQSxJQUFvQjtBQUFBLElBQWtCLEtBQUk7QUFBQSxNQUUvSCwyRUFBQyxtREFBRyxFQUFKO0FBQUEsSUFBSyxVQUFVO0FBQUEsSUFBRztBQUFBLElBQW9CLE9BQU07QUFBQSxJQUFXO0FBQUEsSUFBMEI7QUFBQSxJQUFvQjtBQUFBLElBQWtCLEtBQUk7QUFBQSxNQUUzSCwyRUFBQyxtREFBRyxFQUFKO0FBQUEsSUFBSyxVQUFVO0FBQUEsSUFBRztBQUFBLElBQW9CLE9BQU07QUFBQSxJQUFnQjtBQUFBLElBQTBCO0FBQUEsSUFBb0I7QUFBQSxJQUFrQixLQUFJO0FBQUEsTUFFaEksMkVBQUMsbURBQUcsRUFBSjtBQUFBLElBQUssVUFBVTtBQUFBLElBQUc7QUFBQSxJQUFvQixPQUFNO0FBQUEsSUFBWTtBQUFBLElBQTBCO0FBQUEsSUFBb0I7QUFBQSxJQUFrQixLQUFJO0FBQUEsTUFFNUgsMkVBQUMsbURBQUcsRUFBSjtBQUFBLElBQUssVUFBVTtBQUFBLElBQUc7QUFBQSxJQUFvQixPQUFNO0FBQUEsSUFBZ0I7QUFBQSxJQUEwQjtBQUFBLElBQW9CO0FBQUEsSUFBa0IsS0FBSTtBQUFBLE1BRWhJLDJFQUFDLG1EQUFHLEVBQUo7QUFBQSxJQUFLLFVBQVU7QUFBQSxJQUFHO0FBQUEsSUFBb0IsT0FBTTtBQUFBLElBQWU7QUFBQSxJQUEwQjtBQUFBLElBQW9CO0FBQUEsSUFBa0IsS0FBSTtBQUFBLE1BRS9ILDJFQUFDLG1EQUFHLEVBQUo7QUFBQSxJQUFLLFVBQVU7QUFBQSxJQUFHO0FBQUEsSUFBb0IsT0FBTTtBQUFBLElBQWtCO0FBQUEsSUFBMEI7QUFBQSxJQUFvQjtBQUFBLElBQWtCLEtBQUk7QUFBQSxNQUVsSSwyRUFBQyxtREFBRyxFQUFKO0FBQUEsSUFBSyxVQUFVO0FBQUEsSUFBSTtBQUFBLElBQW9CLE9BQU07QUFBQSxJQUFrQjtBQUFBLElBQTBCO0FBQUEsSUFBb0I7QUFBQSxJQUFrQixLQUFJO0FBQUEsTUFFbkksMkVBQUMsbURBQUcsRUFBSjtBQUFBLElBQUssVUFBVTtBQUFBLElBQUk7QUFBQSxJQUFvQixPQUFNO0FBQUEsSUFBYTtBQUFBLElBQTBCO0FBQUEsSUFBb0I7QUFBQSxJQUFrQixLQUFJO0FBQUEsU0FNcEksMkVBQUMsVUFBRCxNQUNFLDJFQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLE9BQU8sWUFBWSxLQUFLO0FBQUEsTUFDeEIsV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLE1BQ1osZ0JBQWdCO0FBQUEsTUFDaEIsWUFBWSx3REFBTSxDQUFDO0FBQUEsTUFDbkIsWUFBWTtBQUFBO0FBQUEsTUFJaEIsMkVBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsT0FBTyxZQUFZLEtBQUssS0FBSztBQUFBLE1BQzdCLFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxNQUNaLGdCQUFnQjtBQUFBLE1BQ2hCLFlBQVksd0RBQU0sQ0FBQztBQUFBLE1BQ25CLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFRVCxzRUFBTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXN1bHRzLjBiMWQ0NDY4NjUwN2E3Mzc1MjNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhyZWVDYW52YXMgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvX2NhbnZhcydcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbG9yJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5pbXBvcnQgeyBUaXAgfSBmcm9tICcuLi9jb21wb25lbnRzL1RpcCdcclxuaW1wb3J0IHsgQ2hlY2twb2ludENhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NoZWNrcG9pbnRDYXJkJ1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgei1pbmRleDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBTY29yZSA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNXZ3O1xyXG4gIGJvdHRvbTogMTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGNvbG9yOiAke2NvbG9ycy5ibHVlfTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5ibHVlfTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGhlaWdodDogNXZoO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgcGFkZGluZzogMCA1dncgMCA1dnc7XHJcbiAgdHJhbnNpdGlvbjogMHMgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBTcGFjZSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFJlc3VsdHNVSSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTV2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGFuaW1hdGlvbjogNXMgZWFzZSBibGluay0xIGluZmluaXRlO1xyXG5gXHJcblxyXG5jb25zdCBQcm9ncmVzcyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNXZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuYFxyXG5cclxuY29uc3QgUHJvZ3Jlc3NCbHVlID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTB2dztcclxuICBtaW4taGVpZ2h0OiA1dmg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5ibHVlfTtcclxuICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbmBcclxuXHJcbmNvbnN0IFNjb3JlSW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XHJcbiAgZm9udC1mYW1pbHk6IE51bml0bztcclxuYFxyXG5cclxuY29uc3QgVGlwc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMmZyIDJmciAyZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDJmcjtcclxuICBtYXJnaW46IDF2aCAwIDAgMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbmBcclxuXHJcbmNvbnN0IFRpcFVJID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcclxuICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgXHJcbmBcclxuXHJcbmNvbnN0IFRpcEltYWdlID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMTB2aDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgcGFkZGluZzogMXZoO1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpXHJcbmBcclxuXHJcbmNvbnN0IEZhY3RVSSA9IHN0eWxlZC5kaXZgXHJcbndpZHRoOiA1MCU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgUmVzdWx0cyA9ICgpID0+IHtcclxuICBjb25zdCBzaG93U2NvcmVDYXJkID0gKCkgPT4ge1xyXG4gICAgc2V0U2NvcmVDYXJkRXhwYW5kKCFzY29yZUNhcmRFeHBhbmQpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IFtzY29yZUNhcmRFeHBhbmQsIHNldFNjb3JlQ2FyZEV4cGFuZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZShbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0pXHJcblxyXG4gIGNvbnN0IFtwcm9ncmVzc0Jhciwgc2V0UHJvZ3Jlc3NCYXJdID0gdXNlU3RhdGUoWzAsIDBdKVxyXG5cclxuICBjb25zdCBbc2hvd0ZhY3QsIHNldFNob3dGYWN0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBbZmFjdCwgc2V0RmFjdF0gPSB1c2VTdGF0ZShcImJlYW5zXCIpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL2dldCBzY29yZVxyXG4gICAgbGV0IHNjb3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmUnKSlcclxuXHJcbiAgICBsZXQgY29tcGxldGVkID0gKCkgPT4ge1xyXG4gICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb21wbGV0ZWQnKSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgcmV0dXJuIFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tcGxldGVkJykpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHAgPSBjb21wbGV0ZWQoKVxyXG5cclxuICAgIHNldFByb2dyZXNzKHApXHJcbiAgICAvL2NoZWNrIGlmIHBvaW50cyBhcmUgY29tcGxldGUgYW5kIGFkZCBpbmNyZW1lbnQgdG8gc2NvcmVcclxuICAgIGxldCBjb3VudCA9IHAuZmlsdGVyKEJvb2xlYW4pLmxlbmd0aFxyXG5cclxuICAgIHZhciBudW1iZXIgPSBNYXRoLm1pbihNYXRoLm1heChwYXJzZUludChjb3VudCksIDApLCAzKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY291bnQnLCBjb3VudClcclxuXHJcbiAgICBzZXRDb3VudChjb3VudClcclxuXHJcbiAgICBzZXRQcm9ncmVzc0Jhcihbc2NvcmUsICgoMTAwIC0gc2NvcmUpIC8gMykgKiBudW1iZXJdKVxyXG4gIH0sIFtdKVxyXG5cclxuICBmdW5jdGlvbiBjbGFtcChudW0sIG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gbnVtIDw9IG1pbiA/IG1pbiA6IG51bSA+PSBtYXggPyBtYXggOiBudW07XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZygncHJvZ3Jlc3MnLCBwcm9ncmVzcylcclxuICBjb25zb2xlLmxvZygncmVuZGVyZWQnLCBwcm9ncmVzc0JhcilcclxuXHJcbiAgY29uc3QgcHJvcHMgPSB1c2VTcHJpbmcoe1xyXG4gICAgY29uZmlnOiB7IGR1cmF0aW9uOiAyMDAwIH0sXHJcbiAgICBudW1iZXI6IHByb2dyZXNzQmFyWzBdICsgcHJvZ3Jlc3NCYXJbMV0gLyogKyBwcm9ncmVzc0dyZWVuICovLFxyXG4gICAgZnJvbTogeyBudW1iZXI6IDAgfSxcclxuICB9KVxyXG5cclxuICBjb25zdCBbaGlkZSwgc2V0SGlkZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zb2xlLmxvZygncHJvZ3Jlc3MgYmFyJywgcHJvZ3Jlc3NCYXIpXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBjb3VudCA9PSAxMiA/ICdsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjMzg4NEZGLCAjNTFCMjdFKScgOiBjb2xvcnMuYmx1ZX19PlxyXG4gICAgICA8TWVudVxyXG4gICAgICAgIGhpZGU9e2hpZGV9XHJcbiAgICAgICAgc2V0SGlkZT17c2V0SGlkZX1cclxuICAgICAgICBsb2dvPScvbG9nby1zbWFsbC5wbmcnXHJcbiAgICAgICAgaWNvbkNvbG9yPXsnd2hpdGUnfVxyXG4gICAgICAgIHRocmVlPXt0cnVlfVxyXG4gICAgICAgIGJhY2tCdXR0b249e2ZhbHNlfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPFJlc3VsdHNVST5jbGljayB0aGUgcG9pbnRzIHRvIHNlZSB5b3VyIGltcGFjdCBvbiB0aGUgZWFydGg8L1Jlc3VsdHNVST5cclxuXHJcbiAgICAgIHsgY291bnQgPT0gMCA/IDxDaGVja3BvaW50Q2FyZCBjb21wbGV0ZUltYWdlPVwiL2VhcnRoLnBuZ1wiIGNvbXBsZXRlTWVzc2FnZT1cIllvdXIgRWNvIFNjb3JlIENvdWxkIGJlIEJldHRlci4uXCIgY29tcGxldGVGYWN0PVwiVGhlIHJlY2VudCBpbmNyZWFzZSBpbiBmYXN0IGZhc2hpb24gaGFzIHBvbGx1dGVkIG91ciBhaXIgYW5kIHdhdGVyLiBDb21wbGV0ZSB0aGUgdGFza3MgdG8gaW5jcmVhc2UgeW91ciBzY29yZSBhbmQgYnJpbmcgdGhlIHN0YXJzIGJhY2shXCIvPiA6IDw+PC8+IH1cclxuXHJcbiAgICAgIHsgY291bnQgPT0gMyA/IDxDaGVja3BvaW50Q2FyZCBjb21wbGV0ZUltYWdlPVwiL2VhcnRoLnBuZ1wiIGNvbXBsZXRlTWVzc2FnZT1cIllvdSBicm91Z2h0IHRoZSBzdGFycyBiYWNrIVwiIGNvbXBsZXRlRmFjdD1cIkNvbXBsZXRlIG1vcmUgdGFza3MgdG8gdW5sb2NrIG1vcmUgdGlwcyBvciBjaGVjayBvdXQgb3VyIG90aGVyIHJlc291cmNlcy5cIi8+IDogPD48Lz4gfVxyXG5cclxuICAgICAgeyBjb3VudCA9PSAxMiA/IDxDaGVja3BvaW50Q2FyZCBjb21wbGV0ZUltYWdlPVwiL2VhcnRoLnBuZ1wiIGNvbXBsZXRlTWVzc2FnZT1cIllvdSd2ZSBjb21wbGV0ZWQgYWxsIHRoZSB0YXNrcyFcIiBjb21wbGV0ZUZhY3Q9XCJTaGFyZSB0aGlzIHdpdGggeW91ciBmcmllbmRzIGFuZCBjaGVjayBvdXQgb3VyIHJlc291cmNlcyFcIi8+IDogPD48Lz4gfVxyXG5cclxuICAgICAgPFRocmVlQ2FudmFzXHJcbiAgICAgICAgcjNmXHJcbiAgICAgICAgaGlkZT17aGlkZX1cclxuICAgICAgICBzZXRIaWRlPXtzZXRIaWRlfVxyXG4gICAgICAgIHByb2dyZXNzPXtwcm9ncmVzc31cclxuICAgICAgICBzZXRQcm9ncmVzcz17c2V0UHJvZ3Jlc3N9XHJcbiAgICAgICAgcHJvZ3Jlc3NCYXIgPSB7cHJvZ3Jlc3NCYXJ9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8U2NvcmVcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgaGVpZ2h0OiBzY29yZUNhcmRFeHBhbmQgPyAnNzB2aCcgOiAnNXZoJyxcclxuICAgICAgICAgIGFsaWduSXRlbXM6IHNjb3JlQ2FyZEV4cGFuZCA/ICdmbGV4LXN0YXJ0JyA6ICdjZW50ZXInLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IHNjb3JlQ2FyZEV4cGFuZCA/ICdzcGFjZS1iZXR3ZWVuJyA6ICdjZW50ZXInLFxyXG4gICAgICAgICAgcGFkZGluZzogc2NvcmVDYXJkRXhwYW5kID8gJzJ2aCcgOiAnMCAydmgnLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgd2hpdGUnXHJcbiAgICAgICAgfX1cclxuICAgICAgICBcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgIG9uQ2xpY2s9e3Nob3dTY29yZUNhcmR9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEVjbyBTY29yZTpcclxuICAgICAgICAgICAgPFNwYWNlPjwvU3BhY2U+XHJcbiAgICAgICAgICAgIDxhbmltYXRlZC5kaXY+XHJcbiAgICAgICAgICAgICAge3Byb3BzLm51bWJlci50bygodmFsKSA9PiBNYXRoLmZsb29yKHZhbCkpfVxyXG4gICAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cclxuICAgICAgICAgICAgPFNwYWNlPjwvU3BhY2U+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtzY29yZUNhcmRFeHBhbmQgPyA8SWNvbi5DaGV2cm9uRG93biBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0gb25DbGljaz17c2hvd1Njb3JlQ2FyZH0vPiA6IDxJY29uLkNoZXZyb25VcCBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0gb25DbGljaz17c2hvd1Njb3JlQ2FyZH0gLz59XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxTY29yZUluZm9cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHNjb3JlQ2FyZEV4cGFuZCA/ICdmbGV4JyA6ICdub25lJyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgICAgICAgbWFyZ2luOiAnMXZoIDAgMCAwJyxcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dGYWN0KCFzaG93RmFjdCl9XHJcbiAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzkwdncnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnOTIlJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9ycy5ibHVlLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogJzEwMDAwJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHNob3dGYWN0ID8gJ2ZsZXgnIDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHdoaXRlJ1xyXG4gICAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICAgIDxJY29uLlggXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgdG9wOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0ZhY3QoIXNob3dGYWN0KX0vPlxyXG4gICAgICAgICAgICAgICAgPEZhY3RVST5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtmYWN0fVxyXG4gICAgICAgICAgICAgICAgPC9GYWN0VUk+XHJcblxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAnOTB2dycsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogY29sb3JzLmJsdWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzF2dyA1dncnLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogJzZ2aCcsXHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAnMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KScsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInIFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICBhbmltYXRpb246ICdibGluayA2cyBlYXNlIGluZmluaXRlJyxcclxuICAgICAgXHJcbiAgICAgICAgICAgIH19Pntjb3VudCA8IDMgPyAnWW91ciBFY28gU2NvcmUgQ291bGQgYmUgQmV0dGVyJyA6ICdZb3VyIEVjbyBTY29yZSBpcyBDb21wbGV0ZSEnfTwvcD5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICBhbmltYXRpb246ICdibGluayA2cyBlYXNlIGluZmluaXRlJyxcclxuICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogJzNzJyxcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAnMCcsXHJcbiAgICAgICAgICAgIH19PlNlZSB5b3VyIGltcGFjdHMgdG8gdW5sb2NrIHRpcHM8L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPFRpcHNDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8VGlwIHBvc2l0aW9uPXswfSBwcm9ncmVzcz17cHJvZ3Jlc3N9IGltYWdlPScvbWljcm9maWJlci5wbmcnIHNldFNob3dGYWN0PXtzZXRTaG93RmFjdH0gc2hvd0ZhY3Q9e3Nob3dGYWN0fSBzZXRGYWN0PXtzZXRGYWN0fSB0aXA9XCJUbyByZWR1Y2UgdGhlIG1pY3JvZmliZXJzIHlvdSBwcm9kdWNlLCBidXkgbmF0dXJhbCB0ZXh0aWxlcyBhbmQgdHJ5IHdhc2hpbmcgbGVzcyB3aXRoIGNvb2wgd2F0ZXIuXCIvPlxyXG5cclxuICAgICAgICAgICAgPFRpcCBwb3NpdGlvbj17MX0gcHJvZ3Jlc3M9e3Byb2dyZXNzfSBpbWFnZT0nL2JvdHRsZS1lbXB0eS5wbmcnIHNldFNob3dGYWN0PXtzZXRTaG93RmFjdH0gc2hvd0ZhY3Q9e3Nob3dGYWN0fSBzZXRGYWN0PXtzZXRGYWN0fSB0aXA9XCJUbyBoZWxwIGxlc3NlbiB3YXRlciB1c2FnZSB0cnkgd2FzaGluZyB5b3VyIGNsb3RoZXMgaW4gYmlnZ2VyIGJhdGNoZXMgYW5kIGxlc3Mgb2Z0ZW4uXCIvPlxyXG5cclxuICAgICAgICAgICAgPFRpcCBwb3NpdGlvbj17Mn0gcHJvZ3Jlc3M9e3Byb2dyZXNzfSBpbWFnZT0nL2ZhY3RvcnkucG5nJyBzZXRTaG93RmFjdD17c2V0U2hvd0ZhY3R9IHNob3dGYWN0PXtzaG93RmFjdH0gc2V0RmFjdD17c2V0RmFjdH0gdGlwPVwiVHJ5IHB1cmNoYXNpbmcgY2xvdGhpbmcgbWFkZSBmcm9tIHJlY3ljbGVkIG1hdGVyaWFscyB0byBhdm9pZCBhZGRpbmcgdG8gY2FyYm9uIGVtaXNzaW9ucy5cIi8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxUaXAgcG9zaXRpb249ezN9IHByb2dyZXNzPXtwcm9ncmVzc30gaW1hZ2U9Jy9nYXJiYWdlLnBuZycgc2V0U2hvd0ZhY3Q9e3NldFNob3dGYWN0fSBzaG93RmFjdD17c2hvd0ZhY3R9IHNldEZhY3Q9e3NldEZhY3R9IHRpcD1cIlRvIGxlc3NlbiB0aGUgYW1vdW50IG9mIHRleHRpbGVzIHBvcHVsYXRpbmcgbGFuZGZpbGxzIHRyeSBkb25hdGluZyB5b3VyIGNsb3RoZXMgdG8gdGhyaWZ0IHN0b3Jlcywgd2hlcmUgdGhleSBjYW4gYmUgcmV1c2VkIGFuZCByZWN5Y2xlZCBpbnN0ZWFkLlwiLz5cclxuXHJcbiAgICAgICAgICAgIDxUaXAgcG9zaXRpb249ezR9IHByb2dyZXNzPXtwcm9ncmVzc30gaW1hZ2U9Jy90ZWUucG5nJyBzZXRTaG93RmFjdD17c2V0U2hvd0ZhY3R9IHNob3dGYWN0PXtzaG93RmFjdH0gc2V0RmFjdD17c2V0RmFjdH0gdGlwPVwiSWYgeW91ciBjbG90aGluZyBpcyBydWluZWQgYW5kIG5vIGxvbmdlciB3ZWFyYWJsZSwgY29uc2lkZXIgZG9uYXRpbmcgdG8geW91ciBsb2NhbCB0ZXh0aWxlIHJlY3ljbGluZyBwcm9ncmFtLlwiLz5cclxuXHJcbiAgICAgICAgICAgIDxUaXAgcG9zaXRpb249ezV9IHByb2dyZXNzPXtwcm9ncmVzc30gaW1hZ2U9Jy9vaWwtZHJ1bS5wbmcnIHNldFNob3dGYWN0PXtzZXRTaG93RmFjdH0gc2hvd0ZhY3Q9e3Nob3dGYWN0fSBzZXRGYWN0PXtzZXRGYWN0fSB0aXA9XCJUbyBoZWxwIGxlc3NlbiB3YXRlciBwb2xsdXRpb24gdHJ5IHB1cmNoYXNpbmcgY2xvdGhpbmcgZnJvbSBjb21wYW5pZXMgdGhhdCB1c2UgYSBjYXJib24gYmFzZWQgZHllaW5nIHByb2Nlc3MuXCIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFRpcCBwb3NpdGlvbj17Nn0gcHJvZ3Jlc3M9e3Byb2dyZXNzfSBpbWFnZT0nL3RyZWUucG5nJyBzZXRTaG93RmFjdD17c2V0U2hvd0ZhY3R9IHNob3dGYWN0PXtzaG93RmFjdH0gc2V0RmFjdD17c2V0RmFjdH0gdGlwPVwiVHJ5IG5vdCB0byBidXkgY2xvdGhpbmcgbWFkZSBmcm9tIHJheW9uIG9yIHZpc2Nvc2UsIGFzIHRoZXNlIGZpYmVycyBhcmUgYWxtb3N0IGNvbXBsZXRlbHkgY29uc3R1Y3RlZCBmcm9tIHdvb2QgcHVscC5cIi8+XHJcblxyXG4gICAgICAgICAgICA8VGlwIHBvc2l0aW9uPXs3fSBwcm9ncmVzcz17cHJvZ3Jlc3N9IGltYWdlPScvYnVpbGRpbmcucG5nJyBzZXRTaG93RmFjdD17c2V0U2hvd0ZhY3R9IHNob3dGYWN0PXtzaG93RmFjdH0gc2V0RmFjdD17c2V0RmFjdH0gdGlwPVwiVHJ5IHRvIHNob3AgbG9jYWxseSBtb3JlIG9mdGVuIHRoYW4gbm90LCBhcyBlbWlzc2lvbnMgZnJvbSB0cmFuc3BvcnRhdGlvbiBjb250cmlidXRlcyB0byB0aGUgbWVsdGluZyBvZiBvdXIgaWNlIGNhcHMgYW5kIHRoZSBleHBhbnNpb24gb2Ygb3VyIG9jZWFucy5cIi8+XHJcblxyXG4gICAgICAgICAgICA8VGlwIHBvc2l0aW9uPXs4fSBwcm9ncmVzcz17cHJvZ3Jlc3N9IGltYWdlPScvaWNlYmVyZy5wbmcnIHNldFNob3dGYWN0PXtzZXRTaG93RmFjdH0gc2hvd0ZhY3Q9e3Nob3dGYWN0fSBzZXRGYWN0PXtzZXRGYWN0fSB0aXA9XCJUcnkgdG8gY29tcG9zZSBhIG1ham9yaXR5IG9mIHlvdXIgd2FyZHJvYmUgZnJvbSB1c2VkIGNsb3RoaW5nLCBhcyB0aGUgZmFzaGlvbiBpbmR1c3RyeSBjb250cmlidXRlcyBtb3JlIHRoYW4gMTAlIG9mIGdsb2JhbCBjYXJib24gZW1pc3Npb25zIGFubnVhbGx5LlwiLz5cclxuXHJcbiAgICAgICAgICAgIDxUaXAgcG9zaXRpb249ezl9IHByb2dyZXNzPXtwcm9ncmVzc30gaW1hZ2U9Jy9ncmV5LWNsb3VkLnBuZycgc2V0U2hvd0ZhY3Q9e3NldFNob3dGYWN0fSBzaG93RmFjdD17c2hvd0ZhY3R9IHNldEZhY3Q9e3NldEZhY3R9IHRpcD1cIlRyeSBicmluZ2luZyB1bndhbnRlZCBjbG90aGluZyB0byB0aHJpZnQgc3RvcmVzIG9yIHRleHRpbGUgcmVjeWNsaW5nIHNob3BzIGFzIDk1JSBvZiB0ZXh0aWxlcyBjYW4gYmUgcmVjeWNsZWQuXCIvPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8VGlwIHBvc2l0aW9uPXsxMH0gcHJvZ3Jlc3M9e3Byb2dyZXNzfSBpbWFnZT0nL3dhdGVyLWRyb3AucG5nJyBzZXRTaG93RmFjdD17c2V0U2hvd0ZhY3R9IHNob3dGYWN0PXtzaG93RmFjdH0gc2V0RmFjdD17c2V0RmFjdH0gdGlwPVwiQXZvaWQgcHVyY2hhc2luZyBjbG90aGluZyBtYWRlIG9mIGNvdHRvbiBhcyBjb3R0b24gcmVxdWlyZXMgbW9yZSB3YXRlciB0byBkeWUgdGhhbiBvdGhlciB0ZXh0aWxlcy5cIi8+XHJcblxyXG4gICAgICAgICAgICA8VGlwIHBvc2l0aW9uPXsxMX0gcHJvZ3Jlc3M9e3Byb2dyZXNzfSBpbWFnZT0nL3NoZWVwLnBuZycgc2V0U2hvd0ZhY3Q9e3NldFNob3dGYWN0fSBzaG93RmFjdD17c2hvd0ZhY3R9IHNldEZhY3Q9e3NldEZhY3R9IHRpcD1cIkhlbXAgaXMgYSBuYXR1cmFsLCBiaW9kZWdyYWRhYmxlIG1hdGVyaWFsIHdoaWNoIGRvZXNuJ3QgcmVxdWlyZSBwZXN0aWNpZGVzIHRvIGdyb3cgYW5kIGlzIGEgZ3JlYXQgYWx0ZXJuYXRpdmUgdG8gd29vbC5cIi8+XHJcblxyXG4gICAgICAgICAgPC9UaXBzQ29udGFpbmVyPlxyXG4gICAgICAgIDwvU2NvcmVJbmZvPlxyXG4gICAgICA8L1Njb3JlPlxyXG5cclxuICAgICAgPFByb2dyZXNzPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBwcm9ncmVzc0JhclswXSArICd2dycsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogJzV2aCcsXHJcbiAgICAgICAgICAgIGJvdHRvbTogJzAnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9ycy5ibHVlLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnMnMgZWFzZScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBwcm9ncmVzc0JhclsxXSAtIDEwICsgJ3Z3JyxcclxuICAgICAgICAgICAgbWluSGVpZ2h0OiAnNXZoJyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMCcsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogY29sb3JzLmdyZWVuLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnMnMgZWFzZScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvUHJvZ3Jlc3M+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==