webpackHotUpdate_N_E("pages/home",{

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color */ "./src/components/color.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-spring/web */ "./node_modules/@react-spring/web/index.js");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-use-gesture */ "./node_modules/react-use-gesture/dist/reactusegesture.esm.js");







const MenuUI = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`

width: 100vw;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;
color: white;
flex-direction: column;
transition: 1s ease-out;
z-index: 1000;
position: fixed;
top: 0;



`;
const LinkUI = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`

font-family: nunito;
margin: 25px 0;
text-decoration: none;
cursor: pointer;
font-size: 18px;

`;
const NavBarUI = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`

display: flex;
height: 100px;
width: 100vw;
justify-content: center;
align-items: center;
z-index: 100;
font-size: 18px;
z-index: 1500;
position: absolute;
top: 0;






`;
const SocialUI = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`

display: flex;
height: 30vh;
width: 100vw;
justify-content: center;
align-items: center;
position: absolute;
bottom: 0;
z-index: 100;
font-size: 24px;

`;
const SocialLinkUI = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a`

margin: 0 25px;
cursor: pointer;

`;
const IconUI = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`

position: absolute;
right: 10vw;
color: white;
cursor: pointer;

`;
const BackIconUI = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`

position: absolute;
left: 10vw;

cursor: pointer;

`;
const Menu = ({hideMenu = false, hide = false, setHide = false, menuColor = "transparent", logo = "/logo-small.png", iconColor = "white", three = false, backButton = true}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const [menuActive, setMenuActive] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const handleClick = () => {
    setMenuActive(!menuActive);
    if (three) {
      setHide(!hide);
    }
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarUI, null, backButton && !menuActive ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BackIconUI, {
    onClick: () => router.back()
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_3__["ArrowLeft"], {
    style: {
      color: iconColor
    }
  })) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), menuActive ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: () => router.push("/results"),
    src: "/logo-small.png"
  }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: () => router.push("/results"),
    src: logo
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconUI, null, menuActive && !hideMenu ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_3__["X"], {
    onClick: handleClick
  }) : !menuActive && !hideMenu ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    style: {
      color: iconColor
    },
    onClick: handleClick
  }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    style: {
      color: iconColor
    },
    onClick: handleClick
  }))), menuActive ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuUI, {
    style: {
      background: _color__WEBPACK_IMPORTED_MODULE_2__["colors"].blue
    }
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkUI, {
    onClick: () => router.push("/results")
  }, "Back to Earth"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkUI, {
    onClick: () => router.push("/shops")
  }, "Sustainable Stores"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkUI, {
    onClick: () => router.push("/materials")
  }, "Learn about Materials"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkUI, {
    onClick: () => router.push("/home")
  }, "Retake Eco Test"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialUI, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialLinkUI, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_3__["Instagram"], null)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialLinkUI, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_3__["Facebook"], null))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true,
    global: true
  }, `

@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800;900&family=Nunito:wght@300;400;600;700;800;900&family=Open+Sans:wght@300;400;600;700;800&display=swap');


        html, body {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          overflow-y: hidden;
          font-family: Nunito;
          
        }

        * {
      
        margin: 0
      }

      a{
        color: white;
      }
    `)) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsTUFBTSxTQUFTLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJ0QixNQUFNLFNBQVMseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVdEIsTUFBTSxXQUFXLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQnhCLE1BQU0sV0FBVyx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY3hCLE1BQU0sZUFBZSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU81QixNQUFNLFNBQVMseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU3RCLE1BQU0sYUFBYSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXbkIsTUFBTSxPQUFPLENBQUMsQ0FBRSxXQUFXLE9BQU8sT0FBSyxPQUFPLFVBQVEsT0FBTyxZQUFVLGVBQWUsT0FBSyxtQkFBbUIsWUFBVSxTQUFTLFFBQU0sT0FBTyxhQUFXLFVBQVc7QUFHdkssUUFBTSxTQUFTLDZEQUFTO0FBRXhCLFFBQU0sQ0FBQyxZQUFZLGlCQUFpQixzREFBUSxDQUFDO0FBQzdDLFFBQU0sY0FBYyxNQUFNO0FBQ3RCLGtCQUFjLENBQUM7QUFFZixRQUFJLE9BQU07QUFDTixjQUFRLENBQUM7QUFBQTtBQUFBO0FBS25CLFNBQ0Usd0lBSUEsMkVBQUMsVUFBRCxNQUNGLGNBQWMsQ0FBQyxhQUNiLDJFQUFDLFlBQUQ7QUFBQSxJQUNBLFNBQVMsTUFBTSxPQUFPO0FBQUEsS0FDZCwyRUFBQyx1REFBYyxFQUFmO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxPQUFNO0FBQUE7QUFBQSxRQUtsQix5SUFJSyxhQUFhLDJFQUFDLE9BQUQ7QUFBQSxJQUFLLFNBQVMsTUFBTSxPQUFPLEtBQUs7QUFBQSxJQUFhLEtBQUk7QUFBQSxPQUFzQiwyRUFBQyxPQUFEO0FBQUEsSUFBSyxTQUFTLE1BQU0sT0FBTyxLQUFLO0FBQUEsSUFBYSxLQUFLO0FBQUEsTUFFdkksMkVBQUMsUUFBRCxNQUdLLGNBQWMsQ0FBQyxXQUNoQiwyRUFBQywrQ0FBTSxFQUFQO0FBQUEsSUFDQSxTQUFTO0FBQUEsT0FDTCxDQUFDLGNBQWMsQ0FBQyxXQUNwQiwyRUFBQyxrREFBUyxFQUFWO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDSCxPQUFNO0FBQUE7QUFBQSxJQUVWLFNBQVM7QUFBQSxPQUNMLDJFQUFDLGtEQUFTLEVBQVY7QUFBQSxJQUNKLE9BQU87QUFBQSxNQUNILE9BQU07QUFBQTtBQUFBLElBRVYsU0FBUztBQUFBLFFBSUosYUFFYiwyRUFBQyxRQUFEO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDSCxZQUFZLDZDQUFNLENBQUM7QUFBQTtBQUFBLEtBR25CLDJFQUFDLFFBQUQ7QUFBQSxJQUFRLFNBQVMsTUFBSyxPQUFPLEtBQUs7QUFBQSxLQUFhLGtCQUMvQywyRUFBQyxRQUFEO0FBQUEsSUFBUSxTQUFTLE1BQUssT0FBTyxLQUFLO0FBQUEsS0FBVyx1QkFDN0MsMkVBQUMsUUFBRDtBQUFBLElBQVEsU0FBUyxNQUFLLE9BQU8sS0FBSztBQUFBLEtBQWUsMEJBQ2pELDJFQUFDLFFBQUQ7QUFBQSxJQUFRLFNBQVMsTUFBSyxPQUFPLEtBQUs7QUFBQSxLQUFVLG9CQUc1QywyRUFBQyxVQUFELE1BQ0ksMkVBQUMsY0FBRCxNQUNJLDJFQUFDLHVEQUFjLEVBQWYsUUFFSiwyRUFBQyxjQUFELE1BQ0ksMkVBQUMsc0RBQWEsRUFBZCxTQUlSLDJFQUFDLFNBQUQ7QUFBQSxJQUFPLEtBQUc7QUFBQSxJQUFDLFFBQU07QUFBQSxLQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQThCdkIsMkVBQUMsT0FBRDtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuMzY2MWY2MDliYjMxZjliOGVlZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vY29sb3InXHJcbmltcG9ydCAqIGFzIEljb24gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAnQHJlYWN0LXNwcmluZy93ZWInXHJcbmltcG9ydCB7IHVzZURyYWcgfSBmcm9tICdyZWFjdC11c2UtZ2VzdHVyZSdcclxuXHJcblxyXG5cclxuY29uc3QgTWVudVVJID0gc3R5bGVkLmRpdmBcclxuXHJcbndpZHRoOiAxMDB2dztcclxuaGVpZ2h0OiAxMDB2aDtcclxuXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5jb2xvcjogd2hpdGU7XHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbnRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xyXG56LWluZGV4OiAxMDAwO1xyXG5wb3NpdGlvbjogZml4ZWQ7XHJcbnRvcDogMDtcclxuXHJcblxyXG5cclxuYFxyXG5cclxuY29uc3QgTGlua1VJID0gc3R5bGVkLmFgXHJcblxyXG5mb250LWZhbWlseTogbnVuaXRvO1xyXG5tYXJnaW46IDI1cHggMDtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbmZvbnQtc2l6ZTogMThweDtcclxuXHJcbmBcclxuXHJcbmNvbnN0IE5hdkJhclVJID0gc3R5bGVkLmFgXHJcblxyXG5kaXNwbGF5OiBmbGV4O1xyXG5oZWlnaHQ6IDEwMHB4O1xyXG53aWR0aDogMTAwdnc7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG56LWluZGV4OiAxMDA7XHJcbmZvbnQtc2l6ZTogMThweDtcclxuei1pbmRleDogMTUwMDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDA7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmBcclxuXHJcbmNvbnN0IFNvY2lhbFVJID0gc3R5bGVkLmFgXHJcblxyXG5kaXNwbGF5OiBmbGV4O1xyXG5oZWlnaHQ6IDMwdmg7XHJcbndpZHRoOiAxMDB2dztcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYm90dG9tOiAwO1xyXG56LWluZGV4OiAxMDA7XHJcbmZvbnQtc2l6ZTogMjRweDtcclxuXHJcbmBcclxuXHJcbmNvbnN0IFNvY2lhbExpbmtVSSA9IHN0eWxlZC5hYFxyXG5cclxubWFyZ2luOiAwIDI1cHg7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxuXHJcbmBcclxuXHJcbmNvbnN0IEljb25VSSA9IHN0eWxlZC5kaXZgXHJcblxyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnJpZ2h0OiAxMHZ3O1xyXG5jb2xvcjogd2hpdGU7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxuXHJcbmBcclxuXHJcbmNvbnN0IEJhY2tJY29uVUkgPSBzdHlsZWQuZGl2YFxyXG5cclxucG9zaXRpb246IGFic29sdXRlO1xyXG5sZWZ0OiAxMHZ3O1xyXG5cclxuY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuYFxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgTWVudSA9ICh7IGhpZGVNZW51ID0gZmFsc2UsIGhpZGU9ZmFsc2UsIHNldEhpZGU9ZmFsc2UsIG1lbnVDb2xvcj0ndHJhbnNwYXJlbnQnLCBsb2dvPScvbG9nby1zbWFsbC5wbmcnLCBpY29uQ29sb3I9J3doaXRlJywgdGhyZWU9ZmFsc2UsIGJhY2tCdXR0b249dHJ1ZSB9KSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBcclxuICAgIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TWVudUFjdGl2ZSghbWVudUFjdGl2ZSlcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhyZWUpe1xyXG4gICAgICAgICAgICBzZXRIaWRlKCFoaWRlKVxyXG4gICAgICAgIH1cclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG5cclxuXHJcbiAgICA8TmF2QmFyVUk+XHJcbnsoYmFja0J1dHRvbiAmJiAhbWVudUFjdGl2ZSkgPyAoXHJcbiAgICA8QmFja0ljb25VSSAgIFxyXG4gICAgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+XHJcbiAgICAgICAgICAgIDxJY29uLkFycm93TGVmdFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjppY29uQ29sb3JcclxuICAgICAgICAgICAgfX0+PC9JY29uLkFycm93TGVmdD5cclxuICAgICAgICA8L0JhY2tJY29uVUk+XHJcblxyXG4pIDogKFxyXG4gICAgPD48Lz5cclxuKX1cclxuXHJcblxyXG4gICAgICAgIHttZW51QWN0aXZlID8gPGltZyBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Jlc3VsdHMnKX0gc3JjPScvbG9nby1zbWFsbC5wbmcnLz4gOiA8aW1nIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcmVzdWx0cycpfSBzcmM9e2xvZ299Lz59XHJcblxyXG4gICAgICAgIDxJY29uVUk+XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHttZW51QWN0aXZlICYmICFoaWRlTWVudSA/ICggIFxyXG4gICAgICAgICAgICA8SWNvbi5YIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja30vPlxyXG4gICAgICAgICAgICApIDogIW1lbnVBY3RpdmUgJiYgIWhpZGVNZW51ID8gKCAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8SWNvbi5NZW51IFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6aWNvbkNvbG9yXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfS8+XHJcbiAgICAgICAgICAgICkgOiA8SWNvbi5NZW51IFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6aWNvbkNvbG9yXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfS8+fVxyXG5cclxuICAgICAgICA8L0ljb25VST5cclxuICAgIDwvTmF2QmFyVUk+XHJcbiAgICAgICAgICAgICAgICB7bWVudUFjdGl2ZSA/IChcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgPE1lbnVVSVxyXG4gICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuYmx1ZVxyXG4gICAgfX0+XHJcblxyXG4gICAgICAgIDxMaW5rVUkgb25DbGljaz17KCk9PiByb3V0ZXIucHVzaCgnL3Jlc3VsdHMnKX0+QmFjayB0byBFYXJ0aDwvTGlua1VJPlxyXG4gICAgICAgIDxMaW5rVUkgb25DbGljaz17KCk9PiByb3V0ZXIucHVzaCgnL3Nob3BzJyl9PlN1c3RhaW5hYmxlIFN0b3JlczwvTGlua1VJPlxyXG4gICAgICAgIDxMaW5rVUkgb25DbGljaz17KCk9PiByb3V0ZXIucHVzaCgnL21hdGVyaWFscycpfT5MZWFybiBhYm91dCBNYXRlcmlhbHM8L0xpbmtVST5cclxuICAgICAgICA8TGlua1VJIG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goJy9ob21lJyl9PlJldGFrZSBFY28gVGVzdDwvTGlua1VJPlxyXG57LyogICAgICAgICA8TGlua1VJIG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goJy9sZWFybicpfT5MZWFybjwvTGlua1VJPlxyXG4gKi99XHJcbiAgICAgICAgPFNvY2lhbFVJPlxyXG4gICAgICAgICAgICA8U29jaWFsTGlua1VJPlxyXG4gICAgICAgICAgICAgICAgPEljb24uSW5zdGFncmFtIC8+XHJcbiAgICAgICAgICAgIDwvU29jaWFsTGlua1VJPlxyXG4gICAgICAgICAgICA8U29jaWFsTGlua1VJPlxyXG4gICAgICAgICAgICAgICAgPEljb24uRmFjZWJvb2sgLz5cclxuICAgICAgICAgICAgPC9Tb2NpYWxMaW5rVUk+XHJcbiAgICAgICAgPC9Tb2NpYWxVST5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQrQWx0ZXJuYXRlczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZmYW1pbHk9TnVuaXRvOndnaHRAMzAwOzQwMDs2MDA7NzAwOzgwMDs5MDAmZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cclxuICAgICAgICBodG1sLCBib2R5IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICBcclxuICAgICAgICBtYXJnaW46IDBcclxuICAgICAgfVxyXG5cclxuICAgICAgYXtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG5cclxuICAgIDwvTWVudVVJPlxyXG5cclxuICAgIFxyXG5cclxuKSA6IDxkaXY+PC9kaXY+XHJcbn1cclxuXHJcbjwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=