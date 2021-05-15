webpackHotUpdate_N_E("pages/form3",{

/***/ "./src/components/survey.jsx":
/*!***********************************!*\
  !*** ./src/components/survey.jsx ***!
  \***********************************/
/*! exports provided: WaterUI, DialogueUI, SurveyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterUI", function() { return WaterUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogueUI", function() { return DialogueUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPage", function() { return SurveyPage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormButton */ "./src/components/FormButton.js");
/* harmony import */ var react_wavify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-wavify */ "./node_modules/react-wavify/lib/index.module.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color */ "./src/components/color.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Menu */ "./src/components/Menu.js");








const SurveyPageUI = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  flex-direction: column;
`;
const TitleContainerUI = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  flex-direction: column;
  font-size: 24px;
  text-align: left;
  font-weight: 700;
  width: 90vw;
  color: white;
  text-align: center;
  -webkit-text-stroke: 1px #3884ff;

`;
const ButtonContainerUI = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  flex-direction: column;
  position: fixed; 
  top: 40vh;
  
`;
const WaterUI = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background: #3884ff;
  position: absolute;
  z-index: -100;
  bottom: 0;
  transition: 0.5s ease;
`;
const DialogueUI = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  color: white;
  transition: 1s ease;
  height: 15vh;
  width: 90vw;
  position: absolute;
  bottom: 5vh;
  text-align: center;

`;
const LogoUI = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  height: 20vh;
  display: flex;
  align-items: center;
`;
const Loading = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  height: 100vh;
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: white;
`;
const Instructions = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center; 
  justify-content: space-between;
  background: ${_color__WEBPACK_IMPORTED_MODULE_6__["colors"].blue};
  position: absolute;
  color: white;
  z-index: 10000;
  flex-direction: column;
  text-align: center;
  padding: 20vh 0;
  transition: 0.7s ease-out;

  `;
const StartButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 90vw;
  height: 50px;

  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 0 25px 0;
  border: 1px solid white;
  font-weight: 600;
  transition: 0.3s ease-out;

`;
const SurveyPage = ({
  linkTo,
  page,
  waterHeight,
  buttons,
  dialogue,
  dialogueColor,
  title,
  colorOne,
  logo = "/logo-small-blue.png"
}) => {
  let history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const [hideInstruction, setHideInstruction] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (page == "loading") {
      setTimeout(() => {
        router.push("/results");
      }, 2e3);
    }
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SurveyPageUI, null, page == "home" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Instructions, {
    style: {transform: hideInstruction ? "translateY(-100vh)" : "translateY(0)"},
    onClick: () => setHideInstruction(!hideInstruction)
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "logo-small.png"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {width: "80%"}
  }, "At ecouture our mission is to raise awarenesss around the sustainability of clothing through interactive and memorable experiences."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StartButton, {
    onClick: () => setHideInstruction(!hideInstruction)
  }, "got it"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {width: "80%"}
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Created by: "), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "Julian Mayes, Saihaj Gill, ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), " Jurgen Albanel, Jesse Welk")) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_7__["Menu"], {
    logo,
    hideMenu: true,
    iconColor: _color__WEBPACK_IMPORTED_MODULE_6__["colors"].blue,
    backButton: page == "home" ? false : true
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LogoUI, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleContainerUI, {
    style: {
      justifyContent: page == "home" ? "flex-end" : "center"
    }
  }, title), page == "loading" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Loading, null, "calculating your score...") : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonContainerUI, null, buttons.map((button) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormButton__WEBPACK_IMPORTED_MODULE_3__["FormButton"], {
    linkTo,
    content: button,
    colorOne,
    colorTwo: "white",
    height: "50px",
    page
  }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DialogueUI, {
    style: {color: dialogueColor}
  }, dialogue)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_wavify__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      height: waterHeight + "vh",
      position: "absolute",
      zIndex: "-100",
      bottom: "0",
      transition: "1s ease"
    },
    fill: "#3884FF",
    paused: false,
    options: {
      height: 10,
      amplitude: 30,
      speed: 0.15,
      points: 3
    }
  }));
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3VydmV5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUN2QztBQUNBO0FBT0E7QUFDZ0M7QUFDaEM7QUFDQTtBQUNBO0FBTUEsTUFBTSxlQUFlLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRNUIsTUFBTSxtQkFBbUIseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQmhDLE1BQU0sb0JBQW9CLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXMUIsTUFBTSxVQUFVLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVl2QixNQUFNLGFBQWEseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZWpDLE1BQU0sU0FBUyx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNdEIsTUFBTSxVQUFVLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV3ZCLE1BQU0sZUFBZSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBT1osNkNBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdyQixNQUFNLGNBQWMseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0J0QixNQUFNLGFBQWEsQ0FBQztBQUFBLEVBQ3pCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0EsT0FBTztBQUFBLE1BQ0g7QUFDSixNQUFJLFVBQVUsbUVBQVU7QUFFeEIsUUFBTSxTQUFTLDZEQUFTO0FBRXhCLFFBQU0sQ0FBQyxpQkFBaUIsc0JBQXNCLHNEQUFRLENBQUM7QUFFdkQseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSSxRQUFRLFdBQVc7QUFDckIsaUJBQVcsTUFBTTtBQUNmLGVBQU8sS0FBSztBQUFBLFNBQ1g7QUFBQTtBQUFBO0FBSVAsU0FDRSwyRUFBQyxjQUFELE1BQ0csUUFBUSxTQUFVLDJFQUFDLGNBQUQ7QUFBQSxJQUFjLE9BQU8sQ0FBQyxXQUFXLGtCQUFrQix1QkFBdUI7QUFBQSxJQUFrQixTQUFTLE1BQU0sbUJBQW1CLENBQUM7QUFBQSxLQUNoSiwyRUFBQyxPQUFEO0FBQUEsSUFBSyxLQUFJO0FBQUEsTUFDVCwyRUFBQyxLQUFEO0FBQUEsSUFBRyxPQUFPLENBQUMsT0FBTTtBQUFBLEtBQVEsd0lBQ3pCLDJFQUFDLGFBQUQ7QUFBQSxJQUFhLFNBQVMsTUFBTSxtQkFBbUIsQ0FBQztBQUFBLEtBQWtCLFdBQ2xFLDJFQUFDLEtBQUQ7QUFBQSxJQUFHLE9BQU8sQ0FBQyxPQUFNO0FBQUEsS0FBUSwyRUFBQyxVQUFELE1BQVEsaUJBQXFCLDJFQUFDLE1BQUQsT0FBUywrQkFBMkIsMkVBQUMsTUFBRCxPQUFTLGtDQUNqRix5SUFDcEIsMkVBQUMsMENBQUksRUFBTDtBQUFBLElBQU07QUFBQSxJQUFZLFVBQVU7QUFBQSxJQUFNLFdBQVcsNkNBQU0sQ0FBQztBQUFBLElBQU0sWUFBWSxRQUFRLFNBQVMsUUFBUTtBQUFBLE1BQy9GLDJFQUFDLFFBQUQsT0FJQSwyRUFBQyxrQkFBRDtBQUFBLElBQWtCLE9BQU87QUFBQSxNQUN2QixnQkFBZSxRQUFRLFNBQVMsYUFBYTtBQUFBO0FBQUEsS0FDM0MsUUFFSCxRQUFRLFlBQ1AsMkVBQUMsU0FBRCxNQUFTLCtCQUVULHdJQUNFLDJFQUFDLG1CQUFELE1BQ0csUUFBUSxJQUFJLENBQUMsV0FDWiwyRUFBQyxzREFBVSxFQUFYO0FBQUEsSUFDRTtBQUFBLElBQ0EsU0FBUztBQUFBLElBQ1Q7QUFBQSxJQUNBLFVBQVM7QUFBQSxJQUNULFFBQU87QUFBQSxJQUNQO0FBQUEsUUFLTiwyRUFBQyxZQUFEO0FBQUEsSUFBWSxPQUFPLENBQUUsT0FBTztBQUFBLEtBQWtCLFlBSWxELDJFQUFDLG9EQUFJLEVBQUw7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLFFBQVEsY0FBYztBQUFBLE1BQ3RCLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQTtBQUFBLElBRWQsTUFBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb3JtMy5jNjgxZGRlM2JlYzYzNzJjNTk1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCcm93c2VyUm91dGVyIGFzIFJvdXRlcixcclxuICBTd2l0Y2gsXHJcbiAgUm91dGUsXHJcbiAgTGluayxcclxuICB1c2VIaXN0b3J5LFxyXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IEZvcm1CdXR0b24gfSBmcm9tIFwiLi9Gb3JtQnV0dG9uXCI7XHJcbmltcG9ydCBXYXZlIGZyb20gXCJyZWFjdC13YXZpZnlcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7Y29sb3JzfSBmcm9tICcuL2NvbG9yJ1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4vTWVudVwiO1xyXG5cclxuXHJcblxyXG4vL0luaXRpYWxpemUgQmFzZSBTdHlsaW5nLi4gdGhpcyB3b250IGNoYW5nZS8vXHJcblxyXG5jb25zdCBTdXJ2ZXlQYWdlVUkgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVDb250YWluZXJVSSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTB2aDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggIzM4ODRmZjtcclxuXHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25Db250YWluZXJVSSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogNDB2aDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgdG9wOiA0MHZoO1xyXG4gIFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdhdGVyVUkgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZDogIzM4ODRmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTEwMDtcclxuICBib3R0b206IDA7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpYWxvZ3VlVUkgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xyXG4gIGhlaWdodDogMTV2aDtcclxuICB3aWR0aDogOTB2dztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1dmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuYDtcclxuXHJcbmNvbnN0IExvZ29VSSA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAyMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IExvYWRpbmcgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IEluc3RydWN0aW9ucyA9IHN0eWxlZC5kaXZgXHJcblxyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQ6ICR7Y29sb3JzLmJsdWV9O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogMTAwMDA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjB2aCAwO1xyXG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZS1vdXQ7XHJcblxyXG4gIGBcclxuXHJcbiAgY29uc3QgU3RhcnRCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGhlaWdodDogNTBweDtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDAgMCAyNXB4IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdXJ2ZXlQYWdlID0gKHtcclxuICBsaW5rVG8sXHJcbiAgcGFnZSxcclxuICB3YXRlckhlaWdodCxcclxuICBidXR0b25zLFxyXG4gIGRpYWxvZ3VlLFxyXG4gIGRpYWxvZ3VlQ29sb3IsXHJcbiAgdGl0bGUsXHJcbiAgY29sb3JPbmUsIFxyXG4gIGxvZ28gPSAnL2xvZ28tc21hbGwtYmx1ZS5wbmcnXHJcbn0pID0+IHtcclxuICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgW2hpZGVJbnN0cnVjdGlvbiwgc2V0SGlkZUluc3RydWN0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBhZ2UgPT0gXCJsb2FkaW5nXCIpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvcmVzdWx0c1wiKTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3VydmV5UGFnZVVJPlxyXG4gICAgICB7cGFnZSA9PSAnaG9tZScgPyAoPEluc3RydWN0aW9ucyBzdHlsZT17e3RyYW5zZm9ybTogaGlkZUluc3RydWN0aW9uID8gJ3RyYW5zbGF0ZVkoLTEwMHZoKScgOiAndHJhbnNsYXRlWSgwKSd9fSBvbkNsaWNrPXsoKSA9PiBzZXRIaWRlSW5zdHJ1Y3Rpb24oIWhpZGVJbnN0cnVjdGlvbil9PlxyXG4gICAgICAgIDxpbWcgc3JjPVwibG9nby1zbWFsbC5wbmdcIi8+XHJcbiAgICAgICAgPHAgc3R5bGU9e3t3aWR0aDonODAlJ319PkF0IGVjb3V0dXJlIG91ciBtaXNzaW9uIGlzIHRvIHJhaXNlIGF3YXJlbmVzc3MgYXJvdW5kIHRoZSBzdXN0YWluYWJpbGl0eSBvZiBjbG90aGluZyB0aHJvdWdoIGludGVyYWN0aXZlIGFuZCBtZW1vcmFibGUgZXhwZXJpZW5jZXMuPC9wPlxyXG4gICAgICAgIDxTdGFydEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRIaWRlSW5zdHJ1Y3Rpb24oIWhpZGVJbnN0cnVjdGlvbil9PmdvdCBpdDwvU3RhcnRCdXR0b24+XHJcbiAgICAgICAgPHAgc3R5bGU9e3t3aWR0aDonODAlJ319PjxzdHJvbmc+Q3JlYXRlZCBieTogPC9zdHJvbmc+PGJyPjwvYnI+SnVsaWFuIE1heWVzLCBTYWloYWogR2lsbCwgPGJyPjwvYnI+IEp1cmdlbiBBbGJhbmVsLCBKZXNzZSBXZWxrPC9wPlxyXG4gICAgICA8L0luc3RydWN0aW9ucz4pIDogKDw+PC8+KX1cclxuICAgICAgPE1lbnUgbG9nbz17bG9nb30gaGlkZU1lbnU9e3RydWV9IGljb25Db2xvcj17Y29sb3JzLmJsdWV9IGJhY2tCdXR0b249e3BhZ2UgPT0gJ2hvbWUnID8gZmFsc2UgOiB0cnVlfS8+XHJcbiAgICAgIDxMb2dvVUk+XHJcblxyXG4gICAgICA8L0xvZ29VST5cclxuXHJcbiAgICAgIDxUaXRsZUNvbnRhaW5lclVJIHN0eWxlPXt7XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6cGFnZSA9PSBcImhvbWVcIiA/IFwiZmxleC1lbmRcIiA6IFwiY2VudGVyXCJcclxuICAgICAgfX0+e3RpdGxlfTwvVGl0bGVDb250YWluZXJVST5cclxuXHJcbiAgICAgIHtwYWdlID09IFwibG9hZGluZ1wiID8gKFxyXG4gICAgICAgIDxMb2FkaW5nPmNhbGN1bGF0aW5nIHlvdXIgc2NvcmUuLi48L0xvYWRpbmc+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxCdXR0b25Db250YWluZXJVST5cclxuICAgICAgICAgICAge2J1dHRvbnMubWFwKChidXR0b24pID0+IChcclxuICAgICAgICAgICAgICA8Rm9ybUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbGlua1RvPXtsaW5rVG99XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtidXR0b259XHJcbiAgICAgICAgICAgICAgICBjb2xvck9uZT17Y29sb3JPbmV9XHJcbiAgICAgICAgICAgICAgICBjb2xvclR3bz1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxyXG4gICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICA+PC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQnV0dG9uQ29udGFpbmVyVUk+XHJcblxyXG4gICAgICAgICAgPERpYWxvZ3VlVUkgc3R5bGU9e3sgY29sb3I6IGRpYWxvZ3VlQ29sb3IgfX0+e2RpYWxvZ3VlfTwvRGlhbG9ndWVVST5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxXYXZlXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGhlaWdodDogd2F0ZXJIZWlnaHQgKyBcInZoXCIsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgekluZGV4OiBcIi0xMDBcIixcclxuICAgICAgICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBcIjFzIGVhc2VcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGZpbGw9XCIjMzg4NEZGXCJcclxuICAgICAgICBwYXVzZWQ9e2ZhbHNlfVxyXG4gICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgIGhlaWdodDogMTAsXHJcbiAgICAgICAgICBhbXBsaXR1ZGU6IDMwLFxyXG4gICAgICAgICAgc3BlZWQ6IDAuMTUsXHJcbiAgICAgICAgICBwb2ludHM6IDMsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9TdXJ2ZXlQYWdlVUk+XHJcbiAgKTtcclxufTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=