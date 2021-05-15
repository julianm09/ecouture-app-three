webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2twb2ludENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTSxZQUFZLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhekIsTUFBTSxtQkFBbUIseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQSxnQkFHdkIsd0RBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQmhCLE1BQU0sd0JBQXdCLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYXJDLE1BQU0saUJBQWlCLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVk5QixNQUFNLGNBQWMseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFsQyxNQUFNLFFBQVEseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFJZCxNQUFNLFlBQVkseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNoQyxNQUFNLFVBQVUseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWXZCLE1BQU0sb0JBQW9CLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFJYix3REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFwQixNQUFNLGlCQUFpQixDQUFDLENBQUUsZ0JBQWMsa0JBQWtCLGtCQUFnQixtQ0FBbUMsZUFBYSw4SUFBOEk7QUFFL1EsUUFBTSxDQUFDLGNBQWMsbUJBQW1CLHNEQUFRLENBQUM7QUFDL0MsU0FHTSwyRUFBQyxrQkFBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsV0FBVyxlQUFlLHVCQUF1QjtBQUFBO0FBQUEsS0FHbkQsMkVBQUMsdUJBQUQsTUFBd0Isa0JBRXhCLDJFQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLE9BQU87QUFBQTtBQUFBLElBRVQsS0FBSztBQUFBLE1BR1AsMkVBQUMsZ0JBQUQsTUFDRyxlQUlILDJFQUFDLG1CQUFEO0FBQUEsSUFBbUIsU0FBUyxNQUFNLGdCQUFnQjtBQUFBLEtBQU87QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMGY5YWIxZjhkNDhlNzgxOWUwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRocmVlQ2FudmFzIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L19jYW52YXMnXHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXHJcbi8qIGltcG9ydCAnLi4vc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3MnKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJ0AvY29tcG9uZW50cy9jb2xvcidcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZydcclxuaW1wb3J0IFdhdmUgZnJvbSAncmVhY3Qtd2F2aWZ5J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgUm91bmRCbHVlQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL1JvdW5kQmx1ZUJ1dHRvbidcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgXHJcbiAgXHJcbmBcclxuZXhwb3J0IGNvbnN0IENvbXBsZXRpb25DYXJkVUkgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGhlaWdodDogNzB2aDtcclxuICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5ibHVlfTtcclxuICB0b3A6IDE1dnc7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDEwdmggMCAxMHZoIDA7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gIGxlZnQ6IDV2dztcclxuICB0b3A6IDIuNXZoO1xyXG4gIHotaW5kZXg6IDEwMDAwMDAwO1xyXG4gIFxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ29tcGxldGlvbkluZm9ybWF0aW9uID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ29tcGxldGlvbkZhY3QgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9ybWF0aW9uID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODB2dztcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1mYW1pbHk6IE51bml0bztcclxuYFxyXG5jb25zdCBTcGFjZSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBSZXN1bHRzVUkgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gIHotaW5kZXg6IDUwMDtcclxuICBhbmltYXRpb246IDNzIGJsaW5rIGluZmluaXRlO1xyXG5gXHJcblxyXG5jb25zdCBQbGFzdGljID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMjB2dztcclxuXHJcbiAgei1pbmRleDogMjAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDM1dmg7XHJcbiAgYW5pbWF0aW9uOiBmbG9hdCAzcyBpbmZpbml0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBSb3VuZEJsdWVCdXR0b25VSSA9IHN0eWxlZC5kaXYgYFxyXG5oZWlnaHQ6IDUwcHg7XHJcbndpZHRoOiA4MCU7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdyZWVufTtcclxubWFyZ2luLXRvcDogMjBweDtcclxuZm9udC1mYW1pbHk6ICdOdW5pdG8nLHNhbnMtc2VyaWY7XHJcbmZvbnQtc2l6ZTogMTg7XHJcbmNvbG9yOiB3aGl0ZTtcclxuYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja3BvaW50Q2FyZCA9ICh7IGNvbXBsZXRlSW1hZ2U9XCJtaWNyb2ZpYmVyLnBuZ1wiLCBjb21wbGV0ZU1lc3NhZ2U9XCJZb3VyIEVjbyBTY29yZSBDb3VsZCBiZSBCZXR0ZXIhXCIsIGNvbXBsZXRlRmFjdD1cIlRoZSByZWNlbnQgaW5jcmVhc2UgaW4gZmFzdCBmYXNoaW9uIGhhcyBwb2xsdXRlZCBvdXIgYWlyIGFuZCB3YXRlci4gY29tcGxldGUgdGhlIHRhc2tzIHRvIGluY3JlYXNlIHlvdXIgc2NvcmUgdG8gYnJpbmcgdGhlIHN0YXJzIGJhY2shXCJ9KSA9PiB7XHJcblxyXG5jb25zdCBbY29tcGxldGVUYXNrLCBzZXRDb21wbGV0ZVRhc2tdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgcmV0dXJuIChcclxuXHJcblxyXG4gICAgICAgIDxDb21wbGV0aW9uQ2FyZFVJXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGNvbXBsZXRlVGFzayA/ICd0cmFuc2xhdGVYKC0xMDB2dyknIDogJ3RyYW5zbGF0ZVgoMHZ3KScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDb21wbGV0aW9uSW5mb3JtYXRpb24+e2NvbXBsZXRlTWVzc2FnZX08L0NvbXBsZXRpb25JbmZvcm1hdGlvbj5cclxuXHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDBweCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHNyYz17Y29tcGxldGVJbWFnZX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPENvbXBsZXRpb25GYWN0PlxyXG4gICAgICAgICAgICB7Y29tcGxldGVGYWN0fVxyXG4gICAgICAgICAgPC9Db21wbGV0aW9uRmFjdD5cclxuXHJcblxyXG4gICAgICAgICAgPFJvdW5kQmx1ZUJ1dHRvblVJIG9uQ2xpY2s9eygpID0+IHNldENvbXBsZXRlVGFzayh0cnVlKX0+Z290IGl0ITwvUm91bmRCbHVlQnV0dG9uVUk+XHJcbiAgICAgICAgPC9Db21wbGV0aW9uQ2FyZFVJPlxyXG5cclxuXHJcbiAgKVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9