webpackHotUpdate_N_E("pages/impacts-4-1",{

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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setIsLoading(false);
  }, []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNLFdBQVcseURBQU0sQ0FBQztBQUFBO0FBQUEsY0FFViw2Q0FBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWWQsTUFBTSxTQUFTLE1BQU07QUFDeEIsUUFBTSxDQUFDLFdBQVcsZ0JBQWdCLHNEQUFRLENBQUM7QUFFM0MseURBQVMsQ0FBQyxNQUFNO0FBRVIsaUJBQWE7QUFBQSxLQUVsQjtBQUdILFNBRUksb0NBQUMsVUFBRDtBQUFBLElBQVUsT0FBTyxDQUFFLFdBQVcsWUFBWSxrQkFBa0I7QUFBQSxLQUN4RCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxPQUFPLENBQUMsV0FBVztBQUFBLElBQTRCLE9BQU07QUFBQSxJQUFRLEtBQUk7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltcGFjdHMtNC0xLmIyNGQ5YTU3MDJiZWI3YTg4NDYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2NvbG9yc30gZnJvbSAnLi9jb2xvcidcclxuXHJcbmNvbnN0IExvYWRlclVJID0gc3R5bGVkLmRpdmBcclxuXHJcbmJhY2tncm91bmQ6ICR7Y29sb3JzLmJsdWV9O1xyXG53aWR0aDogMTAwdnc7XHJcbmhlaWdodDogMTAwdmg7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuei1pbmRleDogMTAwMDAwMDAwMDAwMDAwMDtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbnRyYW5zaXRpb246IDFzIGVhc2U7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTG9hZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgICAgICBcclxuICAgIH0sIFtdKVxyXG4gXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxMb2FkZXJVSSBzdHlsZT17eyB0cmFuc2Zvcm06IGlzTG9hZGluZyA/ICd0cmFuc2xhdGVZKDApJyA6ICd0cmFuc2xhdGVZKC0xMDB2aCknIH19PlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7YW5pbWF0aW9uOiAnNHMgc3BpbiBsaW5lYXIgaW5maW5pdGUnfX0gd2lkdGg9XCIxMDBweFwiIHNyYz1cIi9sb2FkZXIuc3ZnXCIvPlxyXG4gICAgICAgIDwvTG9hZGVyVUk+XHJcblxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=