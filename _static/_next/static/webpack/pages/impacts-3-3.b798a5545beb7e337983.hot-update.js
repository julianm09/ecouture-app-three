webpackHotUpdate_N_E("pages/impacts-3-3",{

/***/ "./src/pages/impacts-3-3.jsx":
/*!***********************************!*\
  !*** ./src/pages/impacts-3-3.jsx ***!
  \***********************************/
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
/* harmony import */ var react_wavify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-wavify */ "./node_modules/react-wavify/lib/index.module.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_RoundBlueButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/RoundBlueButton */ "./src/components/RoundBlueButton.js");
/* harmony import */ var _components_CompletionCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CompletionCard */ "./src/components/CompletionCard.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Loader */ "./src/components/Loader.js");











const Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative
`;
const Information = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 80vw;
  min-height: 100px;
  position: absolute;
  top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${_components_color__WEBPACK_IMPORTED_MODULE_3__["colors"].blue};
  font-size: 16px;
  font-weight: 700;
  font-family: Nunito;
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
  animation: 5s blink-1 infinite;
`;
const Impact = () => {
  const props = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])({
    config: {duration: 2250},
    number: 70,
    from: {number: 0}
  });
  let count = 0;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const handleClick = (e) => {
    document.getElementById("ice").style.animation = "icegrow 2s ease forwards, 5s waves ease infinite";
    count++;
    setTimeout(() => {
      setCompleteTask(true);
    }, 1500);
  };
  const [completeTask, setCompleteTask] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [hide, setHide] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [instructions, setInstructions] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Click to pick up the microfibers from the ocean");
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_10__["Loader"], null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CompletionCard__WEBPACK_IMPORTED_MODULE_9__["CompletionCard"], {
    completeImage: "/iceberg.png",
    completeTask,
    completeMessage: "You've unlocked a tip!",
    completeFact: "Try to compose a majority of your wardrobe from used clothing, as the fashion industry contributes more than 10% of global carbon emissions annually."
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Information, null, "In the last 25 years, our Earth has lost 28 trillion tonnes of ice."), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    hide,
    setHide,
    logo: "/logo-small-blue.png",
    iconColor: _components_color__WEBPACK_IMPORTED_MODULE_3__["colors"].blue,
    three: true
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ResultsUI, {
    style: {color: _components_color__WEBPACK_IMPORTED_MODULE_3__["colors"].blue}
  }, "click to bring back the ice"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    onClick: (e) => handleClick(e),
    style: {
      position: "absolute",
      bottom: "0vh",
      width: "100%",
      height: "50%",
      animation: "3s waves ease infinite"
    },
    src: "/water.png"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    onClick: (e) => handleClick(e),
    style: {
      position: "absolute",
      bottom: "0vh",
      width: "100%",
      height: "50%",
      animation: "4s waves-2 ease infinite",
      zIndex: "400"
    },
    src: "/water-2.png"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    onClick: (e) => handleClick(e),
    style: {
      bottom: "0vh",
      position: "absolute",
      maxHeight: "800px",
      height: "50%",
      animation: "5s waves ease infinite",
      cursor: "pointer"
    },
    src: "/iceberg.png",
    id: "ice"
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Impact);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2ltcGFjdHMtMy0zLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNLFlBQVkseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYXpCLE1BQU0sY0FBYyx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVFoQix3REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPbEIsTUFBTSxZQUFZLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlekIsTUFBTSxTQUFTLE1BQU07QUFDbkIsUUFBTSxRQUFRLDhEQUFTLENBQUM7QUFBQSxJQUN0QixRQUFRLENBQUUsVUFBVTtBQUFBLElBQ3BCLFFBQVE7QUFBQSxJQUNSLE1BQU0sQ0FBRSxRQUFRO0FBQUE7QUFHbEIsTUFBSSxRQUFRO0FBRVosUUFBTSxTQUFTLDZEQUFTO0FBRXhCLFFBQU0sY0FBYyxDQUFDLE1BQU07QUFDekIsYUFBUyxlQUFlLE9BQU8sTUFBTSxZQUFZO0FBQ2pEO0FBRUEsZUFBVyxNQUFNO0FBQ2Ysc0JBQWdCO0FBQUEsT0FDZjtBQUFBO0FBR0wsUUFBTSxDQUFDLGNBQWMsbUJBQW1CLHNEQUFRLENBQUM7QUFFakQsUUFBTSxDQUFDLE1BQU0sV0FBVyxzREFBUSxDQUFDO0FBRWpDLFFBQU0sQ0FBQyxjQUFjLG1CQUFtQixzREFBUSxDQUM5QztBQUdGLFNBQ0Usd0lBQ0EsMkVBQUMsMERBQU0sRUFBUCxPQUNFLDJFQUFDLFdBQUQsTUFJQSwyRUFBQyx5RUFBYyxFQUFmO0FBQUEsSUFBZ0IsZUFBYztBQUFBLElBQWU7QUFBQSxJQUE0QixpQkFBZ0I7QUFBQSxJQUF5QixjQUFhO0FBQUEsTUFFN0gsMkVBQUMsYUFBRCxNQUFhLHdFQUliLDJFQUFDLHFEQUFJLEVBQUw7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLElBQ0EsTUFBSztBQUFBLElBQ0wsV0FBVyx3REFBTSxDQUFDO0FBQUEsSUFDbEIsT0FBTztBQUFBLE1BR1QsMkVBQUMsV0FBRDtBQUFBLElBQVcsT0FBTyxDQUFDLE9BQU8sd0RBQU0sQ0FBQztBQUFBLEtBQU8sZ0NBSXhDLDJFQUFDLE9BQUQ7QUFBQSxJQUNFLFNBQVMsQ0FBQyxNQUFNLFlBQVk7QUFBQSxJQUM1QixPQUFPO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUE7QUFBQSxJQUViLEtBQUk7QUFBQSxNQUVOLDJFQUFDLE9BQUQ7QUFBQSxJQUNFLFNBQVMsQ0FBQyxNQUFNLFlBQVk7QUFBQSxJQUM1QixPQUFPO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFFUixXQUFXO0FBQUEsTUFFWCxRQUFRO0FBQUE7QUFBQSxJQUVWLEtBQUk7QUFBQSxNQUlKLDJFQUFDLE9BQUQ7QUFBQSxJQUNBLFNBQVMsQ0FBQyxNQUFNLFlBQVk7QUFBQSxJQUMxQixPQUFPO0FBQUEsTUFDTCxRQUFPO0FBQUEsTUFDUCxVQUFTO0FBQUEsTUFDVCxXQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsTUFDWCxRQUFRO0FBQUE7QUFBQSxJQUVaLEtBQUk7QUFBQSxJQUNKLElBQUc7QUFBQTtBQUFBO0FBZUUscUVBQU0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wYWN0cy0zLTMuYjc5OGE1NTQ1YmViN2UzMzc5ODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaHJlZUNhbnZhcyBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9fY2FudmFzJ1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xyXG4vKiBpbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5tb2R1bGUuY3NzJyovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdAL2NvbXBvbmVudHMvY29sb3InXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCBXYXZlIGZyb20gJ3JlYWN0LXdhdmlmeSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IFJvdW5kQmx1ZUJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9Sb3VuZEJsdWVCdXR0b24nXHJcbmltcG9ydCB7Q29tcGxldGlvbkNhcmR9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcGxldGlvbkNhcmQnXHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGVyJ1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmVcclxuYFxyXG5cclxuXHJcbmNvbnN0IEluZm9ybWF0aW9uID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODB2dztcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogJHtjb2xvcnMuYmx1ZX07XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1mYW1pbHk6IE51bml0bztcclxuYFxyXG5cclxuXHJcbmNvbnN0IFJlc3VsdHNVSSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgei1pbmRleDogNTAwO1xyXG4gIGFuaW1hdGlvbjogNXMgYmxpbmstMSBpbmZpbml0ZTtcclxuYFxyXG5cclxuXHJcbmNvbnN0IEltcGFjdCA9ICgpID0+IHtcclxuICBjb25zdCBwcm9wcyA9IHVzZVNwcmluZyh7XHJcbiAgICBjb25maWc6IHsgZHVyYXRpb246IDIyNTAgfSxcclxuICAgIG51bWJlcjogNzAsXHJcbiAgICBmcm9tOiB7IG51bWJlcjogMCB9LFxyXG4gIH0pXHJcblxyXG4gIGxldCBjb3VudCA9IDBcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljZScpLnN0eWxlLmFuaW1hdGlvbiA9ICdpY2Vncm93IDJzIGVhc2UgZm9yd2FyZHMsIDVzIHdhdmVzIGVhc2UgaW5maW5pdGUnXHJcbiAgICBjb3VudCsrXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldENvbXBsZXRlVGFzayh0cnVlKVxyXG4gICAgfSwgMTUwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IFtjb21wbGV0ZVRhc2ssIHNldENvbXBsZXRlVGFza10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgW2hpZGUsIHNldEhpZGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IFtpbnN0cnVjdGlvbnMsIHNldEluc3RydWN0aW9uc10gPSB1c2VTdGF0ZShcclxuICAgICdDbGljayB0byBwaWNrIHVwIHRoZSBtaWNyb2ZpYmVycyBmcm9tIHRoZSBvY2VhbidcclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPExvYWRlci8+XHJcbiAgICAgIDxDb250YWluZXI+XHJcblxyXG4gICAgICB7LyogY2hhbmdlIGltYWdlIGhlcmUgICovfVxyXG5cclxuICAgICAgPENvbXBsZXRpb25DYXJkIGNvbXBsZXRlSW1hZ2U9XCIvaWNlYmVyZy5wbmdcIiBjb21wbGV0ZVRhc2s9e2NvbXBsZXRlVGFza30gY29tcGxldGVNZXNzYWdlPVwiWW91J3ZlIHVubG9ja2VkIGEgdGlwIVwiIGNvbXBsZXRlRmFjdD1cIlRyeSB0byBjb21wb3NlIGEgbWFqb3JpdHkgb2YgeW91ciB3YXJkcm9iZSBmcm9tIHVzZWQgY2xvdGhpbmcsIGFzIHRoZSBmYXNoaW9uIGluZHVzdHJ5IGNvbnRyaWJ1dGVzIG1vcmUgdGhhbiAxMCUgb2YgZ2xvYmFsIGNhcmJvbiBlbWlzc2lvbnMgYW5udWFsbHkuXCIvPlxyXG5cclxuICAgICAgICA8SW5mb3JtYXRpb24+XHJcbiAgICAgICAgICBJbiB0aGUgbGFzdCAyNSB5ZWFycywgb3VyIEVhcnRoIGhhcyBsb3N0IDI4IHRyaWxsaW9uIHRvbm5lcyBvZiBpY2UuXHJcbiAgICAgICAgPC9JbmZvcm1hdGlvbj5cclxuXHJcbiAgICAgICAgPE1lbnVcclxuICAgICAgICAgIGhpZGU9e2hpZGV9XHJcbiAgICAgICAgICBzZXRIaWRlPXtzZXRIaWRlfVxyXG4gICAgICAgICAgbG9nbz0nL2xvZ28tc21hbGwtYmx1ZS5wbmcnXHJcbiAgICAgICAgICBpY29uQ29sb3I9e2NvbG9ycy5ibHVlfVxyXG4gICAgICAgICAgdGhyZWU9e3RydWV9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFJlc3VsdHNVSSBzdHlsZT17e2NvbG9yOiBjb2xvcnMuYmx1ZX19PmNsaWNrIHRvIGJyaW5nIGJhY2sgdGhlIGljZTwvUmVzdWx0c1VJPlxyXG5cclxuICAgICAgICB7LyogZG8gYW5pbWF0aW9ucyBoZXJlICAqL31cclxuXHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUpfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIGJvdHRvbTogJzB2aCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzUwJScsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogJzNzIHdhdmVzIGVhc2UgaW5maW5pdGUnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHNyYz0nL3dhdGVyLnBuZydcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICBib3R0b206ICcwdmgnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICc1MCUnLFxyXG5cclxuICAgICAgICAgICAgYW5pbWF0aW9uOiAnNHMgd2F2ZXMtMiBlYXNlIGluZmluaXRlJyxcclxuXHJcbiAgICAgICAgICAgIHpJbmRleDogJzQwMCcsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgc3JjPScvd2F0ZXItMi5wbmcnXHJcbiAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSl9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm90dG9tOicwdmgnLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgbWF4SGVpZ2h0Oic4MDBweCcsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnNTAlJyxcclxuICAgICAgICAgICAgICBhbmltYXRpb246ICc1cyB3YXZlcyBlYXNlIGluZmluaXRlJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgc3JjPScvaWNlYmVyZy5wbmcnXHJcbiAgICAgICAgICBpZD0naWNlJ1xyXG4gICAgICAgICAgLz5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHsvKiBkbyBhbmltYXRpb25zIGhlcmUgICovfVxyXG5cclxuXHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbXBhY3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==