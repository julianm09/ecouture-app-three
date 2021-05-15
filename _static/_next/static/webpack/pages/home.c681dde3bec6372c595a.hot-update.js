webpackHotUpdate_N_E("pages/home",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3VydmV5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUN2QztBQUNBO0FBT0E7QUFDZ0M7QUFDaEM7QUFDQTtBQUNBO0FBTUEsTUFBTSxlQUFlLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRNUIsTUFBTSxtQkFBbUIseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQmhDLE1BQU0sb0JBQW9CLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXMUIsTUFBTSxVQUFVLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVl2QixNQUFNLGFBQWEseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZWpDLE1BQU0sU0FBUyx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNdEIsTUFBTSxVQUFVLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV3ZCLE1BQU0sZUFBZSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBT1osNkNBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdyQixNQUFNLGNBQWMseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0J0QixNQUFNLGFBQWEsQ0FBQztBQUFBLEVBQ3pCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0EsT0FBTztBQUFBLE1BQ0g7QUFDSixNQUFJLFVBQVUsbUVBQVU7QUFFeEIsUUFBTSxTQUFTLDZEQUFTO0FBRXhCLFFBQU0sQ0FBQyxpQkFBaUIsc0JBQXNCLHNEQUFRLENBQUM7QUFFdkQseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSSxRQUFRLFdBQVc7QUFDckIsaUJBQVcsTUFBTTtBQUNmLGVBQU8sS0FBSztBQUFBLFNBQ1g7QUFBQTtBQUFBO0FBSVAsU0FDRSwyRUFBQyxjQUFELE1BQ0csUUFBUSxTQUFVLDJFQUFDLGNBQUQ7QUFBQSxJQUFjLE9BQU8sQ0FBQyxXQUFXLGtCQUFrQix1QkFBdUI7QUFBQSxJQUFrQixTQUFTLE1BQU0sbUJBQW1CLENBQUM7QUFBQSxLQUNoSiwyRUFBQyxPQUFEO0FBQUEsSUFBSyxLQUFJO0FBQUEsTUFDVCwyRUFBQyxLQUFEO0FBQUEsSUFBRyxPQUFPLENBQUMsT0FBTTtBQUFBLEtBQVEsd0lBQ3pCLDJFQUFDLGFBQUQ7QUFBQSxJQUFhLFNBQVMsTUFBTSxtQkFBbUIsQ0FBQztBQUFBLEtBQWtCLFdBQ2xFLDJFQUFDLEtBQUQ7QUFBQSxJQUFHLE9BQU8sQ0FBQyxPQUFNO0FBQUEsS0FBUSwyRUFBQyxVQUFELE1BQVEsaUJBQXFCLDJFQUFDLE1BQUQsT0FBUywrQkFBMkIsMkVBQUMsTUFBRCxPQUFTLGtDQUNqRix5SUFDcEIsMkVBQUMsMENBQUksRUFBTDtBQUFBLElBQU07QUFBQSxJQUFZLFVBQVU7QUFBQSxJQUFNLFdBQVcsNkNBQU0sQ0FBQztBQUFBLElBQU0sWUFBWSxRQUFRLFNBQVMsUUFBUTtBQUFBLE1BQy9GLDJFQUFDLFFBQUQsT0FJQSwyRUFBQyxrQkFBRDtBQUFBLElBQWtCLE9BQU87QUFBQSxNQUN2QixnQkFBZSxRQUFRLFNBQVMsYUFBYTtBQUFBO0FBQUEsS0FDM0MsUUFFSCxRQUFRLFlBQ1AsMkVBQUMsU0FBRCxNQUFTLCtCQUVULHdJQUNFLDJFQUFDLG1CQUFELE1BQ0csUUFBUSxJQUFJLENBQUMsV0FDWiwyRUFBQyxzREFBVSxFQUFYO0FBQUEsSUFDRTtBQUFBLElBQ0EsU0FBUztBQUFBLElBQ1Q7QUFBQSxJQUNBLFVBQVM7QUFBQSxJQUNULFFBQU87QUFBQSxJQUNQO0FBQUEsUUFLTiwyRUFBQyxZQUFEO0FBQUEsSUFBWSxPQUFPLENBQUUsT0FBTztBQUFBLEtBQWtCLFlBSWxELDJFQUFDLG9EQUFJLEVBQUw7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLFFBQVEsY0FBYztBQUFBLE1BQ3RCLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQTtBQUFBLElBRWQsTUFBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLmM2ODFkZGUzYmVjNjM3MmM1OTVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxyXG4gIFN3aXRjaCxcclxuICBSb3V0ZSxcclxuICBMaW5rLFxyXG4gIHVzZUhpc3RvcnksXHJcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgRm9ybUJ1dHRvbiB9IGZyb20gXCIuL0Zvcm1CdXR0b25cIjtcclxuaW1wb3J0IFdhdmUgZnJvbSBcInJlYWN0LXdhdmlmeVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtjb2xvcnN9IGZyb20gJy4vY29sb3InXHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi9NZW51XCI7XHJcblxyXG5cclxuXHJcbi8vSW5pdGlhbGl6ZSBCYXNlIFN0eWxpbmcuLiB0aGlzIHdvbnQgY2hhbmdlLy9cclxuXHJcbmNvbnN0IFN1cnZleVBhZ2VVSSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZUNvbnRhaW5lclVJID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB3aWR0aDogOTB2dztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAjMzg4NGZmO1xyXG5cclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbkNvbnRhaW5lclVJID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0MHZoO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IGZpeGVkOyBcclxuICB0b3A6IDQwdmg7XHJcbiAgXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgV2F0ZXJVSSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kOiAjMzg4NGZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGlhbG9ndWVVSSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDFzIGVhc2U7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDV2aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5gO1xyXG5cclxuY29uc3QgTG9nb1VJID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDIwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgTG9hZGluZyA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgSW5zdHJ1Y3Rpb25zID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZDogJHtjb2xvcnMuYmx1ZX07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHZoIDA7XHJcbiAgdHJhbnNpdGlvbjogMC43cyBlYXNlLW91dDtcclxuXHJcbiAgYFxyXG5cclxuICBjb25zdCBTdGFydEJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMCAwIDI1cHggMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN1cnZleVBhZ2UgPSAoe1xyXG4gIGxpbmtUbyxcclxuICBwYWdlLFxyXG4gIHdhdGVySGVpZ2h0LFxyXG4gIGJ1dHRvbnMsXHJcbiAgZGlhbG9ndWUsXHJcbiAgZGlhbG9ndWVDb2xvcixcclxuICB0aXRsZSxcclxuICBjb2xvck9uZSwgXHJcbiAgbG9nbyA9ICcvbG9nby1zbWFsbC1ibHVlLnBuZydcclxufSkgPT4ge1xyXG4gIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBbaGlkZUluc3RydWN0aW9uLCBzZXRIaWRlSW5zdHJ1Y3Rpb25dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocGFnZSA9PSBcImxvYWRpbmdcIikge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9yZXN1bHRzXCIpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdXJ2ZXlQYWdlVUk+XHJcbiAgICAgIHtwYWdlID09ICdob21lJyA/ICg8SW5zdHJ1Y3Rpb25zIHN0eWxlPXt7dHJhbnNmb3JtOiBoaWRlSW5zdHJ1Y3Rpb24gPyAndHJhbnNsYXRlWSgtMTAwdmgpJyA6ICd0cmFuc2xhdGVZKDApJ319IG9uQ2xpY2s9eygpID0+IHNldEhpZGVJbnN0cnVjdGlvbighaGlkZUluc3RydWN0aW9uKX0+XHJcbiAgICAgICAgPGltZyBzcmM9XCJsb2dvLXNtYWxsLnBuZ1wiLz5cclxuICAgICAgICA8cCBzdHlsZT17e3dpZHRoOic4MCUnfX0+QXQgZWNvdXR1cmUgb3VyIG1pc3Npb24gaXMgdG8gcmFpc2UgYXdhcmVuZXNzcyBhcm91bmQgdGhlIHN1c3RhaW5hYmlsaXR5IG9mIGNsb3RoaW5nIHRocm91Z2ggaW50ZXJhY3RpdmUgYW5kIG1lbW9yYWJsZSBleHBlcmllbmNlcy48L3A+XHJcbiAgICAgICAgPFN0YXJ0QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEhpZGVJbnN0cnVjdGlvbighaGlkZUluc3RydWN0aW9uKX0+Z290IGl0PC9TdGFydEJ1dHRvbj5cclxuICAgICAgICA8cCBzdHlsZT17e3dpZHRoOic4MCUnfX0+PHN0cm9uZz5DcmVhdGVkIGJ5OiA8L3N0cm9uZz48YnI+PC9icj5KdWxpYW4gTWF5ZXMsIFNhaWhhaiBHaWxsLCA8YnI+PC9icj4gSnVyZ2VuIEFsYmFuZWwsIEplc3NlIFdlbGs8L3A+XHJcbiAgICAgIDwvSW5zdHJ1Y3Rpb25zPikgOiAoPD48Lz4pfVxyXG4gICAgICA8TWVudSBsb2dvPXtsb2dvfSBoaWRlTWVudT17dHJ1ZX0gaWNvbkNvbG9yPXtjb2xvcnMuYmx1ZX0gYmFja0J1dHRvbj17cGFnZSA9PSAnaG9tZScgPyBmYWxzZSA6IHRydWV9Lz5cclxuICAgICAgPExvZ29VST5cclxuXHJcbiAgICAgIDwvTG9nb1VJPlxyXG5cclxuICAgICAgPFRpdGxlQ29udGFpbmVyVUkgc3R5bGU9e3tcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDpwYWdlID09IFwiaG9tZVwiID8gXCJmbGV4LWVuZFwiIDogXCJjZW50ZXJcIlxyXG4gICAgICB9fT57dGl0bGV9PC9UaXRsZUNvbnRhaW5lclVJPlxyXG5cclxuICAgICAge3BhZ2UgPT0gXCJsb2FkaW5nXCIgPyAoXHJcbiAgICAgICAgPExvYWRpbmc+Y2FsY3VsYXRpbmcgeW91ciBzY29yZS4uLjwvTG9hZGluZz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEJ1dHRvbkNvbnRhaW5lclVJPlxyXG4gICAgICAgICAgICB7YnV0dG9ucy5tYXAoKGJ1dHRvbikgPT4gKFxyXG4gICAgICAgICAgICAgIDxGb3JtQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBsaW5rVG89e2xpbmtUb31cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2J1dHRvbn1cclxuICAgICAgICAgICAgICAgIGNvbG9yT25lPXtjb2xvck9uZX1cclxuICAgICAgICAgICAgICAgIGNvbG9yVHdvPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgID48L0Zvcm1CdXR0b24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9CdXR0b25Db250YWluZXJVST5cclxuXHJcbiAgICAgICAgICA8RGlhbG9ndWVVSSBzdHlsZT17eyBjb2xvcjogZGlhbG9ndWVDb2xvciB9fT57ZGlhbG9ndWV9PC9EaWFsb2d1ZVVJPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPFdhdmVcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgaGVpZ2h0OiB3YXRlckhlaWdodCArIFwidmhcIixcclxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICB6SW5kZXg6IFwiLTEwMFwiLFxyXG4gICAgICAgICAgYm90dG9tOiBcIjBcIixcclxuICAgICAgICAgIHRyYW5zaXRpb246IFwiMXMgZWFzZVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgZmlsbD1cIiMzODg0RkZcIlxyXG4gICAgICAgIHBhdXNlZD17ZmFsc2V9XHJcbiAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMCxcclxuICAgICAgICAgIGFtcGxpdHVkZTogMzAsXHJcbiAgICAgICAgICBzcGVlZDogMC4xNSxcclxuICAgICAgICAgIHBvaW50czogMyxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICA8L1N1cnZleVBhZ2VVST5cclxuICApO1xyXG59O1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==