webpackHotUpdate_N_E("pages/impacts-2-1",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsTUFBTSxTQUFTLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJ0QixNQUFNLFNBQVMseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVdEIsTUFBTSxXQUFXLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQnhCLE1BQU0sV0FBVyx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY3hCLE1BQU0sZUFBZSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU81QixNQUFNLFNBQVMseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU3RCLE1BQU0sYUFBYSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXbkIsTUFBTSxPQUFPLENBQUMsQ0FBRSxXQUFXLE9BQU8sT0FBSyxPQUFPLFVBQVEsT0FBTyxZQUFVLGVBQWUsT0FBSyxtQkFBbUIsWUFBVSxTQUFTLFFBQU0sT0FBTyxhQUFXLFVBQVc7QUFHdkssUUFBTSxTQUFTLDZEQUFTO0FBRXhCLFFBQU0sQ0FBQyxZQUFZLGlCQUFpQixzREFBUSxDQUFDO0FBQzdDLFFBQU0sY0FBYyxNQUFNO0FBQ3RCLGtCQUFjLENBQUM7QUFFZixRQUFJLE9BQU07QUFDTixjQUFRLENBQUM7QUFBQTtBQUFBO0FBS25CLFNBQ0Usd0lBSUEsMkVBQUMsVUFBRCxNQUNGLGNBQWMsQ0FBQyxhQUNiLDJFQUFDLFlBQUQ7QUFBQSxJQUNBLFNBQVMsTUFBTSxPQUFPO0FBQUEsS0FDZCwyRUFBQyx1REFBYyxFQUFmO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxPQUFNO0FBQUE7QUFBQSxRQUtsQix5SUFJSyxhQUFhLDJFQUFDLE9BQUQ7QUFBQSxJQUFLLFNBQVMsTUFBTSxPQUFPLEtBQUs7QUFBQSxJQUFhLEtBQUk7QUFBQSxPQUFzQiwyRUFBQyxPQUFEO0FBQUEsSUFBSyxTQUFTLE1BQU0sT0FBTyxLQUFLO0FBQUEsSUFBYSxLQUFLO0FBQUEsTUFFdkksMkVBQUMsUUFBRCxNQUdLLGNBQWMsQ0FBQyxXQUNoQiwyRUFBQywrQ0FBTSxFQUFQO0FBQUEsSUFDQSxTQUFTO0FBQUEsT0FDTCxDQUFDLGNBQWMsQ0FBQyxXQUNwQiwyRUFBQyxrREFBUyxFQUFWO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDSCxPQUFNO0FBQUE7QUFBQSxJQUVWLFNBQVM7QUFBQSxPQUNMLDJFQUFDLGtEQUFTLEVBQVY7QUFBQSxJQUNKLE9BQU87QUFBQSxNQUNILE9BQU07QUFBQTtBQUFBLElBRVYsU0FBUztBQUFBLFFBSUosYUFFYiwyRUFBQyxRQUFEO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDSCxZQUFZLDZDQUFNLENBQUM7QUFBQTtBQUFBLEtBR25CLDJFQUFDLFFBQUQ7QUFBQSxJQUFRLFNBQVMsTUFBSyxPQUFPLEtBQUs7QUFBQSxLQUFhLGtCQUMvQywyRUFBQyxRQUFEO0FBQUEsSUFBUSxTQUFTLE1BQUssT0FBTyxLQUFLO0FBQUEsS0FBVyx1QkFDN0MsMkVBQUMsUUFBRDtBQUFBLElBQVEsU0FBUyxNQUFLLE9BQU8sS0FBSztBQUFBLEtBQWUsMEJBQ2pELDJFQUFDLFFBQUQ7QUFBQSxJQUFRLFNBQVMsTUFBSyxPQUFPLEtBQUs7QUFBQSxLQUFVLG9CQUc1QywyRUFBQyxVQUFELE1BQ0ksMkVBQUMsY0FBRCxNQUNJLDJFQUFDLHVEQUFjLEVBQWYsUUFFSiwyRUFBQyxjQUFELE1BQ0ksMkVBQUMsc0RBQWEsRUFBZCxTQUlSLDJFQUFDLFNBQUQ7QUFBQSxJQUFPLEtBQUc7QUFBQSxJQUFDLFFBQU07QUFBQSxLQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQThCdkIsMkVBQUMsT0FBRDtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltcGFjdHMtMi0xLjM2NjFmNjA5YmIzMWY5YjhlZWRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbG9yJ1xyXG5pbXBvcnQgKiBhcyBJY29uIGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ0ByZWFjdC1zcHJpbmcvd2ViJ1xyXG5pbXBvcnQgeyB1c2VEcmFnIH0gZnJvbSAncmVhY3QtdXNlLWdlc3R1cmUnXHJcblxyXG5cclxuXHJcbmNvbnN0IE1lbnVVSSA9IHN0eWxlZC5kaXZgXHJcblxyXG53aWR0aDogMTAwdnc7XHJcbmhlaWdodDogMTAwdmg7XHJcblxyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuY29sb3I6IHdoaXRlO1xyXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG50cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcclxuei1pbmRleDogMTAwMDtcclxucG9zaXRpb246IGZpeGVkO1xyXG50b3A6IDA7XHJcblxyXG5cclxuXHJcbmBcclxuXHJcbmNvbnN0IExpbmtVSSA9IHN0eWxlZC5hYFxyXG5cclxuZm9udC1mYW1pbHk6IG51bml0bztcclxubWFyZ2luOiAyNXB4IDA7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG5mb250LXNpemU6IDE4cHg7XHJcblxyXG5gXHJcblxyXG5jb25zdCBOYXZCYXJVSSA9IHN0eWxlZC5hYFxyXG5cclxuZGlzcGxheTogZmxleDtcclxuaGVpZ2h0OiAxMDBweDtcclxud2lkdGg6IDEwMHZ3O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuei1pbmRleDogMTAwO1xyXG5mb250LXNpemU6IDE4cHg7XHJcbnotaW5kZXg6IDE1MDA7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAwO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5gXHJcblxyXG5jb25zdCBTb2NpYWxVSSA9IHN0eWxlZC5hYFxyXG5cclxuZGlzcGxheTogZmxleDtcclxuaGVpZ2h0OiAzMHZoO1xyXG53aWR0aDogMTAwdnc7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmJvdHRvbTogMDtcclxuei1pbmRleDogMTAwO1xyXG5mb250LXNpemU6IDI0cHg7XHJcblxyXG5gXHJcblxyXG5jb25zdCBTb2NpYWxMaW5rVUkgPSBzdHlsZWQuYWBcclxuXHJcbm1hcmdpbjogMCAyNXB4O1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcblxyXG5gXHJcblxyXG5jb25zdCBJY29uVUkgPSBzdHlsZWQuZGl2YFxyXG5cclxucG9zaXRpb246IGFic29sdXRlO1xyXG5yaWdodDogMTB2dztcclxuY29sb3I6IHdoaXRlO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcblxyXG5gXHJcblxyXG5jb25zdCBCYWNrSWNvblVJID0gc3R5bGVkLmRpdmBcclxuXHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogMTB2dztcclxuXHJcbmN1cnNvcjogcG9pbnRlcjtcclxuXHJcbmBcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoeyBoaWRlTWVudSA9IGZhbHNlLCBoaWRlPWZhbHNlLCBzZXRIaWRlPWZhbHNlLCBtZW51Q29sb3I9J3RyYW5zcGFyZW50JywgbG9nbz0nL2xvZ28tc21hbGwucG5nJywgaWNvbkNvbG9yPSd3aGl0ZScsIHRocmVlPWZhbHNlLCBiYWNrQnV0dG9uPXRydWUgfSkgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgXHJcbiAgICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1lbnVBY3RpdmUoIW1lbnVBY3RpdmUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRocmVlKXtcclxuICAgICAgICAgICAgc2V0SGlkZSghaGlkZSlcclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG5cclxuXHJcblxyXG4gICAgPE5hdkJhclVJPlxyXG57KGJhY2tCdXR0b24gJiYgIW1lbnVBY3RpdmUpID8gKFxyXG4gICAgPEJhY2tJY29uVUkgICBcclxuICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9PlxyXG4gICAgICAgICAgICA8SWNvbi5BcnJvd0xlZnRcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6aWNvbkNvbG9yXHJcbiAgICAgICAgICAgIH19PjwvSWNvbi5BcnJvd0xlZnQ+XHJcbiAgICAgICAgPC9CYWNrSWNvblVJPlxyXG5cclxuKSA6IChcclxuICAgIDw+PC8+XHJcbil9XHJcblxyXG5cclxuICAgICAgICB7bWVudUFjdGl2ZSA/IDxpbWcgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9yZXN1bHRzJyl9IHNyYz0nL2xvZ28tc21hbGwucG5nJy8+IDogPGltZyBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Jlc3VsdHMnKX0gc3JjPXtsb2dvfS8+fVxyXG5cclxuICAgICAgICA8SWNvblVJPlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB7bWVudUFjdGl2ZSAmJiAhaGlkZU1lbnUgPyAoICBcclxuICAgICAgICAgICAgPEljb24uWCBcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9Lz5cclxuICAgICAgICAgICAgKSA6ICFtZW51QWN0aXZlICYmICFoaWRlTWVudSA/ICggICAgICAgICAgICBcclxuICAgICAgICAgICAgPEljb24uTWVudSBcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOmljb25Db2xvclxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja30vPlxyXG4gICAgICAgICAgICApIDogPEljb24uTWVudSBcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOmljb25Db2xvclxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja30vPn1cclxuXHJcbiAgICAgICAgPC9JY29uVUk+XHJcbiAgICA8L05hdkJhclVJPlxyXG4gICAgICAgICAgICAgICAge21lbnVBY3RpdmUgPyAoXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIDxNZW51VUlcclxuICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZDogY29sb3JzLmJsdWVcclxuICAgIH19PlxyXG5cclxuICAgICAgICA8TGlua1VJIG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goJy9yZXN1bHRzJyl9PkJhY2sgdG8gRWFydGg8L0xpbmtVST5cclxuICAgICAgICA8TGlua1VJIG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goJy9zaG9wcycpfT5TdXN0YWluYWJsZSBTdG9yZXM8L0xpbmtVST5cclxuICAgICAgICA8TGlua1VJIG9uQ2xpY2s9eygpPT4gcm91dGVyLnB1c2goJy9tYXRlcmlhbHMnKX0+TGVhcm4gYWJvdXQgTWF0ZXJpYWxzPC9MaW5rVUk+XHJcbiAgICAgICAgPExpbmtVSSBvbkNsaWNrPXsoKT0+IHJvdXRlci5wdXNoKCcvaG9tZScpfT5SZXRha2UgRWNvIFRlc3Q8L0xpbmtVST5cclxuey8qICAgICAgICAgPExpbmtVSSBvbkNsaWNrPXsoKT0+IHJvdXRlci5wdXNoKCcvbGVhcm4nKX0+TGVhcm48L0xpbmtVST5cclxuICovfVxyXG4gICAgICAgIDxTb2NpYWxVST5cclxuICAgICAgICAgICAgPFNvY2lhbExpbmtVST5cclxuICAgICAgICAgICAgICAgIDxJY29uLkluc3RhZ3JhbSAvPlxyXG4gICAgICAgICAgICA8L1NvY2lhbExpbmtVST5cclxuICAgICAgICAgICAgPFNvY2lhbExpbmtVST5cclxuICAgICAgICAgICAgICAgIDxJY29uLkZhY2Vib29rIC8+XHJcbiAgICAgICAgICAgIDwvU29jaWFsTGlua1VJPlxyXG4gICAgICAgIDwvU29jaWFsVUk+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0K0FsdGVybmF0ZXM6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZmFtaWx5PU51bml0bzp3Z2h0QDMwMDs0MDA7NjAwOzcwMDs4MDA7OTAwJmZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbiAgICAgICAgaHRtbCwgYm9keSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgXHJcbiAgICAgICAgbWFyZ2luOiAwXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGF7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuXHJcbiAgICA8L01lbnVVST5cclxuXHJcbiAgICBcclxuXHJcbikgOiA8ZGl2PjwvZGl2PlxyXG59XHJcblxyXG48Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9