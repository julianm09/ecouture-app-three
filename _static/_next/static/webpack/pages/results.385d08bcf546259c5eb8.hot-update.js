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
  text-align: center;
  
  
`;
const CompletionCardUI = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 90vw;
  height: 80vh;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2twb2ludENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTSxZQUFZLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWN6QixNQUFNLG1CQUFtQix5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBLGdCQUd2Qix3REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CaEIsTUFBTSx3QkFBd0IseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdyQyxNQUFNLGlCQUFpQix5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZOUIsTUFBTSxjQUFjLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhbEMsTUFBTSxRQUFRLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBSWQsTUFBTSxZQUFZLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjaEMsTUFBTSxVQUFVLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVl2QixNQUFNLG9CQUFvQix5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSWIsd0RBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhcEIsTUFBTSxpQkFBaUIsQ0FBQyxDQUFFLGdCQUFjLGtCQUFrQixrQkFBZ0IsbUNBQW1DLGVBQWEsOElBQThJO0FBRS9RLFFBQU0sQ0FBQyxjQUFjLG1CQUFtQixzREFBUSxDQUFDO0FBQy9DLFNBR00sMkVBQUMsa0JBQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLFdBQVcsZUFBZSx1QkFBdUI7QUFBQTtBQUFBLEtBR25ELDJFQUFDLHVCQUFELE1BQXdCLGtCQUV4QiwyRUFBQyxPQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxPQUFPO0FBQUE7QUFBQSxJQUVULEtBQUs7QUFBQSxNQUdQLDJFQUFDLGdCQUFELE1BQ0csZUFJSCwyRUFBQyxtQkFBRDtBQUFBLElBQW1CLFNBQVMsTUFBTSxnQkFBZ0I7QUFBQSxLQUFPO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzdWx0cy4zODVkMDhiY2Y1NDYyNTljNWViOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRocmVlQ2FudmFzIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L19jYW52YXMnXHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXHJcbi8qIGltcG9ydCAnLi4vc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3MnKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJ0AvY29tcG9uZW50cy9jb2xvcidcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZydcclxuaW1wb3J0IFdhdmUgZnJvbSAncmVhY3Qtd2F2aWZ5J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgUm91bmRCbHVlQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL1JvdW5kQmx1ZUJ1dHRvbidcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gIFxyXG5gXHJcbmV4cG9ydCBjb25zdCBDb21wbGV0aW9uQ2FyZFVJID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogOTB2dztcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgYmFja2dyb3VuZDogJHtjb2xvcnMuYmx1ZX07XHJcbiAgdG9wOiAxNXZ3O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTs7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxMHZoIDAgMTB2aCAwO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICBsZWZ0OiA1dnc7XHJcbiAgdG9wOiAyLjV2aDtcclxuICB6LWluZGV4OiAxMDAwMDAwMDtcclxuICBcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENvbXBsZXRpb25JbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb21wbGV0aW9uRmFjdCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LWZhbWlseTogTnVuaXRvO1xyXG5gXHJcbmNvbnN0IFNwYWNlID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTBweDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFJlc3VsdHNVSSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgei1pbmRleDogNTAwO1xyXG4gIGFuaW1hdGlvbjogM3MgYmxpbmsgaW5maW5pdGU7XHJcbmBcclxuXHJcbmNvbnN0IFBsYXN0aWMgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAyMHZ3O1xyXG5cclxuICB6LWluZGV4OiAyMDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMzV2aDtcclxuICBhbmltYXRpb246IGZsb2F0IDNzIGluZmluaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFJvdW5kQmx1ZUJ1dHRvblVJID0gc3R5bGVkLmRpdiBgXHJcbmhlaWdodDogNTBweDtcclxud2lkdGg6IDgwJTtcclxuYm9yZGVyLXJhZGl1czogMTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ3JlZW59O1xyXG5tYXJnaW4tdG9wOiAyMHB4O1xyXG5mb250LWZhbWlseTogJ051bml0bycsc2Fucy1zZXJpZjtcclxuZm9udC1zaXplOiAxODtcclxuY29sb3I6IHdoaXRlO1xyXG5ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrcG9pbnRDYXJkID0gKHsgY29tcGxldGVJbWFnZT1cIm1pY3JvZmliZXIucG5nXCIsIGNvbXBsZXRlTWVzc2FnZT1cIllvdXIgRWNvIFNjb3JlIENvdWxkIGJlIEJldHRlciFcIiwgY29tcGxldGVGYWN0PVwiVGhlIHJlY2VudCBpbmNyZWFzZSBpbiBmYXN0IGZhc2hpb24gaGFzIHBvbGx1dGVkIG91ciBhaXIgYW5kIHdhdGVyLiBjb21wbGV0ZSB0aGUgdGFza3MgdG8gaW5jcmVhc2UgeW91ciBzY29yZSB0byBicmluZyB0aGUgc3RhcnMgYmFjayFcIn0pID0+IHtcclxuXHJcbmNvbnN0IFtjb21wbGV0ZVRhc2ssIHNldENvbXBsZXRlVGFza10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICByZXR1cm4gKFxyXG5cclxuXHJcbiAgICAgICAgPENvbXBsZXRpb25DYXJkVUlcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogY29tcGxldGVUYXNrID8gJ3RyYW5zbGF0ZVgoLTEwMHZ3KScgOiAndHJhbnNsYXRlWCgwdncpJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENvbXBsZXRpb25JbmZvcm1hdGlvbj57Y29tcGxldGVNZXNzYWdlfTwvQ29tcGxldGlvbkluZm9ybWF0aW9uPlxyXG5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogJzEwMHB4JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3JjPXtjb21wbGV0ZUltYWdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Q29tcGxldGlvbkZhY3Q+XHJcbiAgICAgICAgICAgIHtjb21wbGV0ZUZhY3R9XHJcbiAgICAgICAgICA8L0NvbXBsZXRpb25GYWN0PlxyXG5cclxuXHJcbiAgICAgICAgICA8Um91bmRCbHVlQnV0dG9uVUkgb25DbGljaz17KCkgPT4gc2V0Q29tcGxldGVUYXNrKHRydWUpfT5nb3QgaXQhPC9Sb3VuZEJsdWVCdXR0b25VST5cclxuICAgICAgICA8L0NvbXBsZXRpb25DYXJkVUk+XHJcblxyXG5cclxuICApXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=