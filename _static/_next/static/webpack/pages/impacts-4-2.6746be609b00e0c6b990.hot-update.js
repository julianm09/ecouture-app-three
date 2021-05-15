webpackHotUpdate_N_E("pages/impacts-4-2",{

/***/ "./src/components/Loader.js":
/*!**********************************!*\
  !*** ./src/components/Loader.js ***!
  \**********************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color */ "./src/components/color.js");



const LoaderUI = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`

background: ${_color__WEBPACK_IMPORTED_MODULE_2__["colors"].blue};
width: 100vw;
height: 100vh;
position: absolute;
z-index: 1000000000000000;
justify-content: center;
align-items: center;
transition: 1s ease;
display: flex;
`;
const Loader = () => {
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  setTimeout(() => {
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
      setIsLoading(false);
    }, []);
  }, 1e3);
  return /* @__PURE__ */ React.createElement(LoaderUI, {
    style: {transform: isLoading ? "translateY(0)" : "translateY(-100vh)"}
  }, /* @__PURE__ */ React.createElement("img", {
    style: {animation: "4s spin linear infinite"},
    width: "100px",
    src: "/loader.svg"
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNLFdBQVcseURBQU0sQ0FBQztBQUFBO0FBQUEsY0FFViw2Q0FBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWWQsTUFBTSxTQUFTLE1BQU07QUFDeEIsUUFBTSxDQUFDLFdBQVcsZ0JBQWdCLHNEQUFRLENBQUM7QUFDM0MsYUFBVyxNQUFNO0FBQ2pCLDJEQUFTLENBQUMsTUFBTTtBQUVSLG1CQUFhO0FBQUEsT0FFbEI7QUFBQSxLQUNKO0FBRUMsU0FFSSxvQ0FBQyxVQUFEO0FBQUEsSUFBVSxPQUFPLENBQUUsV0FBVyxZQUFZLGtCQUFrQjtBQUFBLEtBQ3hELG9DQUFDLE9BQUQ7QUFBQSxJQUFLLE9BQU8sQ0FBQyxXQUFXO0FBQUEsSUFBNEIsT0FBTTtBQUFBLElBQVEsS0FBSTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wYWN0cy00LTIuNjc0NmJlNjA5YjAwZTBjNmI5OTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29sb3JzfSBmcm9tICcuL2NvbG9yJ1xyXG5cclxuY29uc3QgTG9hZGVyVUkgPSBzdHlsZWQuZGl2YFxyXG5cclxuYmFja2dyb3VuZDogJHtjb2xvcnMuYmx1ZX07XHJcbndpZHRoOiAxMDB2dztcclxuaGVpZ2h0OiAxMDB2aDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG56LWluZGV4OiAxMDAwMDAwMDAwMDAwMDAwO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxudHJhbnNpdGlvbjogMXMgZWFzZTtcclxuZGlzcGxheTogZmxleDtcclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIFxyXG4gICAgfSwgW10pXHJcbn0sIDEwMDApXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxMb2FkZXJVSSBzdHlsZT17eyB0cmFuc2Zvcm06IGlzTG9hZGluZyA/ICd0cmFuc2xhdGVZKDApJyA6ICd0cmFuc2xhdGVZKC0xMDB2aCknIH19PlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7YW5pbWF0aW9uOiAnNHMgc3BpbiBsaW5lYXIgaW5maW5pdGUnfX0gd2lkdGg9XCIxMDBweFwiIHNyYz1cIi9sb2FkZXIuc3ZnXCIvPlxyXG4gICAgICAgIDwvTG9hZGVyVUk+XHJcblxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=