webpackHotUpdate_N_E("pages/results",{

/***/ "./src/components/CheckpointCard.js":
/*!******************************************!*\
  !*** ./src/components/CheckpointCard.js ***!
  \******************************************/
/*! exports provided: Container, CompletionCardUI, CompletionInformation, CompletionFact, Information, ResultsUI, CheckpointCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionCardUI", function() { return CompletionCardUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionInformation", function() { return CompletionInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionFact", function() { return CompletionFact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Information", function() { return Information; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsUI", function() { return ResultsUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckpointCard", function() { return CheckpointCard; });
/* harmony import */ var _components_layout_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout/_canvas */ "./src/components/layout/_canvas.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Menu */ "./src/components/Menu.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/color */ "./src/components/color.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_wavify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-wavify */ "./node_modules/react-wavify/lib/index.module.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_RoundBlueButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/RoundBlueButton */ "./src/components/RoundBlueButton.js");









const Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
  position: absolute; 
  
  
`;
const CompletionCardUI = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 90vw;
  height: 70vh;
  background: ${_components_color__WEBPACK_IMPORTED_MODULE_3__["colors"].blue};
  top: 15vw;
  z-index: 1000;
  border-radius: 10px;
  border: 1px solid white;;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10vh 0 10vh 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  transition: 0.5s ease;
  position: absolute; 
  left: 5vw;
  top: 2.5vh;
  z-index: 10000000;
  
`;
const CompletionInformation = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
  font-family: Nunito;
  text-align: center;

`;
const CompletionFact = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
  font-family: Nunito;
  text-align: center;
`;
const Information = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 80vw;
  min-height: 100px;
  position: absolute;
  top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  font-weight: 700;
  font-family: Nunito;
`;
const Space = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 10px;
`;
const ResultsUI = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 90vw;
  min-height: 100px;
  position: absolute;
  bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: Nunito;
  z-index: 500;
  animation: 3s blink infinite;
`;
const Plastic = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img`
  width: 20vw;

  z-index: 200;
  position: absolute;
  bottom: 35vh;
  animation: float 3s infinite;
  cursor: pointer;
  max-width: 100px;
  padding: 10px;
`;
const RoundBlueButtonUI = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
height: 50px;
width: 80%;
border-radius: 10px;
background-color: ${_components_color__WEBPACK_IMPORTED_MODULE_3__["colors"].green};
margin-top: 20px;
font-family: 'Nunito',sans-serif;
font-size: 18;
color: white;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
cursor: pointer;
`;
const CheckpointCard = ({completeImage = "microfiber.png", completeMessage = "Your Eco Score Could be Better!", completeFact = "The recent increase in fast fashion has polluted our air and water. complete the tasks to increase your score to bring the stars back!"}) => {
  const [completeTask, setCompleteTask] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CompletionCardUI, {
    style: {
      transform: completeTask ? "translateX(-100vw)" : "translateX(0vw)"
    }
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CompletionInformation, null, completeMessage), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    style: {
      width: "100px"
    },
    src: completeImage
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CompletionFact, null, completeFact), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RoundBlueButtonUI, {
    onClick: () => setCompleteTask(true)
  }, "got it!"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2twb2ludENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTSxZQUFZLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhekIsTUFBTSxtQkFBbUIseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQSxnQkFHdkIsd0RBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQmhCLE1BQU0sd0JBQXdCLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYXJDLE1BQU0saUJBQWlCLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVk5QixNQUFNLGNBQWMseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFsQyxNQUFNLFFBQVEseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFJZCxNQUFNLFlBQVkseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNoQyxNQUFNLFVBQVUseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWXZCLE1BQU0sb0JBQW9CLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFJYix3REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFwQixNQUFNLGlCQUFpQixDQUFDLENBQUUsZ0JBQWMsa0JBQWtCLGtCQUFnQixtQ0FBbUMsZUFBYSw4SUFBOEk7QUFFL1EsUUFBTSxDQUFDLGNBQWMsbUJBQW1CLHNEQUFRLENBQUM7QUFDL0MsU0FHTSwyRUFBQyxrQkFBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsV0FBVyxlQUFlLHVCQUF1QjtBQUFBO0FBQUEsS0FHbkQsMkVBQUMsdUJBQUQsTUFBd0Isa0JBRXhCLDJFQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLE9BQU87QUFBQTtBQUFBLElBRVQsS0FBSztBQUFBLE1BR1AsMkVBQUMsZ0JBQUQsTUFDRyxlQUlILDJFQUFDLG1CQUFEO0FBQUEsSUFBbUIsU0FBUyxNQUFNLGdCQUFnQjtBQUFBLEtBQU87QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXN1bHRzLmMwZjlhYjFmOGQ0OGU3ODE5ZTA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhyZWVDYW52YXMgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvX2NhbnZhcydcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcclxuLyogaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXgubW9kdWxlLmNzcycqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbG9yJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5pbXBvcnQgV2F2ZSBmcm9tICdyZWFjdC13YXZpZnknXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBSb3VuZEJsdWVCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvUm91bmRCbHVlQnV0dG9uJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICBcclxuICBcclxuYFxyXG5leHBvcnQgY29uc3QgQ29tcGxldGlvbkNhcmRVSSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIGJhY2tncm91bmQ6ICR7Y29sb3JzLmJsdWV9O1xyXG4gIHRvcDogMTV2dztcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTB2aCAwIDEwdmggMDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgbGVmdDogNXZ3O1xyXG4gIHRvcDogMi41dmg7XHJcbiAgei1pbmRleDogMTAwMDAwMDA7XHJcbiAgXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb21wbGV0aW9uSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb21wbGV0aW9uRmFjdCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LWZhbWlseTogTnVuaXRvO1xyXG5gXHJcbmNvbnN0IFNwYWNlID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTBweDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFJlc3VsdHNVSSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgei1pbmRleDogNTAwO1xyXG4gIGFuaW1hdGlvbjogM3MgYmxpbmsgaW5maW5pdGU7XHJcbmBcclxuXHJcbmNvbnN0IFBsYXN0aWMgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAyMHZ3O1xyXG5cclxuICB6LWluZGV4OiAyMDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMzV2aDtcclxuICBhbmltYXRpb246IGZsb2F0IDNzIGluZmluaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFJvdW5kQmx1ZUJ1dHRvblVJID0gc3R5bGVkLmRpdiBgXHJcbmhlaWdodDogNTBweDtcclxud2lkdGg6IDgwJTtcclxuYm9yZGVyLXJhZGl1czogMTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ3JlZW59O1xyXG5tYXJnaW4tdG9wOiAyMHB4O1xyXG5mb250LWZhbWlseTogJ051bml0bycsc2Fucy1zZXJpZjtcclxuZm9udC1zaXplOiAxODtcclxuY29sb3I6IHdoaXRlO1xyXG5ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrcG9pbnRDYXJkID0gKHsgY29tcGxldGVJbWFnZT1cIm1pY3JvZmliZXIucG5nXCIsIGNvbXBsZXRlTWVzc2FnZT1cIllvdXIgRWNvIFNjb3JlIENvdWxkIGJlIEJldHRlciFcIiwgY29tcGxldGVGYWN0PVwiVGhlIHJlY2VudCBpbmNyZWFzZSBpbiBmYXN0IGZhc2hpb24gaGFzIHBvbGx1dGVkIG91ciBhaXIgYW5kIHdhdGVyLiBjb21wbGV0ZSB0aGUgdGFza3MgdG8gaW5jcmVhc2UgeW91ciBzY29yZSB0byBicmluZyB0aGUgc3RhcnMgYmFjayFcIn0pID0+IHtcclxuXHJcbmNvbnN0IFtjb21wbGV0ZVRhc2ssIHNldENvbXBsZXRlVGFza10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICByZXR1cm4gKFxyXG5cclxuXHJcbiAgICAgICAgPENvbXBsZXRpb25DYXJkVUlcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogY29tcGxldGVUYXNrID8gJ3RyYW5zbGF0ZVgoLTEwMHZ3KScgOiAndHJhbnNsYXRlWCgwdncpJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENvbXBsZXRpb25JbmZvcm1hdGlvbj57Y29tcGxldGVNZXNzYWdlfTwvQ29tcGxldGlvbkluZm9ybWF0aW9uPlxyXG5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogJzEwMHB4JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3JjPXtjb21wbGV0ZUltYWdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Q29tcGxldGlvbkZhY3Q+XHJcbiAgICAgICAgICAgIHtjb21wbGV0ZUZhY3R9XHJcbiAgICAgICAgICA8L0NvbXBsZXRpb25GYWN0PlxyXG5cclxuXHJcbiAgICAgICAgICA8Um91bmRCbHVlQnV0dG9uVUkgb25DbGljaz17KCkgPT4gc2V0Q29tcGxldGVUYXNrKHRydWUpfT5nb3QgaXQhPC9Sb3VuZEJsdWVCdXR0b25VST5cclxuICAgICAgICA8L0NvbXBsZXRpb25DYXJkVUk+XHJcblxyXG5cclxuICApXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=