webpackHotUpdate_N_E("pages/material",{

/***/ "./src/pages/material.jsx":
/*!********************************!*\
  !*** ./src/pages/material.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Menu */ \"./src/components/Menu.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MaterialButtonSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MaterialButtonSlider */ \"./src/components/MaterialButtonSlider.js\");\n/* harmony import */ var _components_AboutResourcesCont__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AboutResourcesCont */ \"./src/components/AboutResourcesCont.js\");\n/* harmony import */ var _components_RecycleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RecycleButton */ \"./src/components/RecycleButton.js\");\n/* harmony import */ var _components_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/color */ \"./src/components/color.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_StoreContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/StoreContainer */ \"./src/components/StoreContainer.js\");\n/* harmony import */ var _data_materials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/materials */ \"./src/data/materials.js\");\n\n\n\n\n\n\n\n\n\nconst Material = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div`\n  display: flex;\n  text-align: left;\n  align-self: flex;\n  margin: 150px 0 0 0;\n  width: 90vw;\n\n  color: white;\n  font-size: 36px;\n  font-family: Nunito;\n  font-weight: bold;\n`;\nconst MaterialType = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div`\n  display: flex;\n  text-align: left;\n  align-self: flex;\n  margin: 10px 0 0 0;\n  width: 90vw;\n\n  color: white;\n  font-size: 18px;\n  font-family: Open Sans;\n`;\nconst SubHeading = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div`\n  display: flex;\n  text-align: left;\n  align-self: flex;\n  margin: 40px 0 20px 0;\n  width: 90vw;\n\n  color: white;\n  font-size: 24px;\n  font-family: Open Sans;\n`;\nconst MaterialInfo = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div`\n  display: flex;\n  text-align: left;\n  align-self: flex;\n  margin: 15px 0 100px 0;\n  width: 90vw;\n\n  color: white;\n  font-size: 18px;\n  font-family: Open Sans;\n`;\nconst MaterialsPage = ({\n  pageColor = _components_color__WEBPACK_IMPORTED_MODULE_5__[\"colors\"].green,\n  materialText = \"Bamboo\",\n  materialType = \"Plant\",\n  materialImage = \"/bamboo.svg\",\n  materialInfo = \"Bamboo requires no need for pesticides or fertilizers\"\n}) => {\n  const [mySwitch, setMySwitch] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const [type, setType] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const [factOne, setFactOne] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const [factTwo, setFactTwo] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const [factThree, setFactThree] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    let currentMaterial = JSON.parse(localStorage.getItem(\"currentMaterial\"));\n    const displayMaterial = _data_materials__WEBPACK_IMPORTED_MODULE_8__[\"materials\"].filter((el) => {\n      return el.name == currentMaterial;\n    });\n    setName(displayMaterial[0].name);\n    setType(displayMaterial[0].type);\n    setFactOne(displayMaterial[0].fact1);\n    setFactTwo(displayMaterial[0].fact2);\n    setFactThree(displayMaterial[0].fact3);\n    console.log(displayMaterial[0]);\n  }, []);\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    style: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      alignItems: \"center\",\n      background: pageColor,\n      minHeight: \"100vh\"\n    }\n  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"], null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Material, null, name), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MaterialType, null, \"Type: \", type, \" Fiber\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AboutResourcesCont__WEBPACK_IMPORTED_MODULE_3__[\"AboutResourcesCont\"], {\n    margin: \"0 0 25px 0\",\n    bgColor: _components_color__WEBPACK_IMPORTED_MODULE_5__[\"colors\"].green,\n    buttonText: \"Resources\",\n    mySwitch,\n    setMySwitch\n  }), mySwitch ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    style: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      alignItems: \"center\"\n    }\n  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubHeading, null, \"Where to Recylce\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_RecycleButton__WEBPACK_IMPORTED_MODULE_4__[\"RecycleButton\"], null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_RecycleButton__WEBPACK_IMPORTED_MODULE_4__[\"RecycleButton\"], {\n    buttonText: \"Vancouver Recycle\"\n  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubHeading, null, \"To help save the world check out these sustainable store options near you.\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_StoreContainer__WEBPACK_IMPORTED_MODULE_7__[\"StoreContainer\"], null)) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubHeading, null, \"About \", name), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MaterialInfo, null, factOne), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MaterialInfo, null, factTwo), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MaterialInfo, null, factThree)));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MaterialsPage);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21hdGVyaWFsLmpzeD9kYTA2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNLFdBQVcseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFheEIsTUFBTSxlQUFlLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVk1QixNQUFNLGFBQWEseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWTFCLE1BQU0sZUFBZSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZNUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUFBLEVBQ3JCLFlBQVksd0RBQU0sQ0FBQztBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxNQUNYO0FBQ0osUUFBTSxDQUFDLFVBQVUsZUFBZSxzREFBUSxDQUFDO0FBR3pDLFFBQU0sQ0FBQyxNQUFNLFdBQVcsc0RBQVEsQ0FBQztBQUNqQyxRQUFNLENBQUMsTUFBTSxXQUFXLHNEQUFRLENBQUM7QUFFakMsUUFBTSxDQUFDLFNBQVMsY0FBYyxzREFBUSxDQUFDO0FBQ3ZDLFFBQU0sQ0FBQyxTQUFTLGNBQWMsc0RBQVEsQ0FBQztBQUN2QyxRQUFNLENBQUMsV0FBVyxnQkFBZ0Isc0RBQVEsQ0FBQztBQUUzQyx5REFBUyxDQUFDLE1BQU07QUFJZCxRQUFJLGtCQUFrQixLQUFLLE1BQU0sYUFBYSxRQUFRO0FBSXRELFVBQU0sa0JBQWtCLHlEQUFTLENBQUMsT0FBTyxDQUFDLE9BQU87QUFDL0MsYUFBTyxHQUFHLFFBQVE7QUFBQTtBQUtwQixZQUFRLGdCQUFnQixHQUFHO0FBQzNCLFlBQVEsZ0JBQWdCLEdBQUc7QUFFM0IsZUFBVyxnQkFBZ0IsR0FBRztBQUM5QixlQUFXLGdCQUFnQixHQUFHO0FBQzlCLGlCQUFhLGdCQUFnQixHQUFHO0FBRWhDLFlBQVEsSUFBSSxnQkFBZ0I7QUFBQSxLQUUzQjtBQUdILFNBQ0UsMkVBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsZUFBZTtBQUFBLE1BQ2YsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osV0FBVztBQUFBO0FBQUEsS0FHYiwyRUFBQyxxREFBSSxFQUFMLE9BRUEsMkVBQUMsVUFBRCxNQUFXLE9BRVgsMkVBQUMsY0FBRCxNQUFjLFVBQU8sTUFBSyxXQU8xQiwyRUFBQyxpRkFBa0IsRUFBbkI7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLFNBQVMsd0RBQU0sQ0FBQztBQUFBLElBQ2hCLFlBQVk7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLE1BR0QsV0FDQywyRUFBQyxPQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxlQUFlO0FBQUEsTUFDZixZQUFZO0FBQUE7QUFBQSxLQUdkLDJFQUFDLFlBQUQsTUFBWSxxQkFFWiwyRUFBQyx1RUFBYSxFQUFkLE9BRUEsMkVBQUMsdUVBQWEsRUFBZDtBQUFBLElBQWUsWUFBWTtBQUFBLE1BRTNCLDJFQUFDLFlBQUQsTUFBWSwrRUFLWiwyRUFBQyx5RUFBYyxFQUFmLFNBR0YsMkVBQUMsT0FBRCxNQUNFLDJFQUFDLFlBQUQsTUFBWSxVQUFPLE9BRW5CLDJFQUFDLGNBQUQsTUFBZSxVQUVmLDJFQUFDLGNBQUQsTUFBZSxVQUVmLDJFQUFDLGNBQUQsTUFBZTtBQUFBO0FBU1YsNEVBQWEiLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWF0ZXJpYWwuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBNYXRlcmlhbEJ1dHRvblNsaWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvTWF0ZXJpYWxCdXR0b25TbGlkZXInXG5pbXBvcnQgeyBBYm91dFJlc291cmNlc0NvbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0UmVzb3VyY2VzQ29udCdcbmltcG9ydCB7IFJlY3ljbGVCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL1JlY3ljbGVCdXR0b24nXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbG9yJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFN0b3JlQ29udGFpbmVyIH0gZnJvbSAnQC9jb21wb25lbnRzL1N0b3JlQ29udGFpbmVyJ1xuaW1wb3J0IHsgbWF0ZXJpYWxzIH0gZnJvbSAnLi4vZGF0YS9tYXRlcmlhbHMnXG5cbmNvbnN0IE1hdGVyaWFsID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogZmxleDtcbiAgbWFyZ2luOiAxNTBweCAwIDAgMDtcbiAgd2lkdGg6IDkwdnc7XG5cbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5jb25zdCBNYXRlcmlhbFR5cGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBmbGV4O1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG4gIHdpZHRoOiA5MHZ3O1xuXG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuYFxuXG5jb25zdCBTdWJIZWFkaW5nID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogZmxleDtcbiAgbWFyZ2luOiA0MHB4IDAgMjBweCAwO1xuICB3aWR0aDogOTB2dztcblxuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbmBcblxuY29uc3QgTWF0ZXJpYWxJbmZvID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogZmxleDtcbiAgbWFyZ2luOiAxNXB4IDAgMTAwcHggMDtcbiAgd2lkdGg6IDkwdnc7XG5cbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG5gXG5cbmNvbnN0IE1hdGVyaWFsc1BhZ2UgPSAoe1xuICBwYWdlQ29sb3IgPSBjb2xvcnMuZ3JlZW4sXG4gIG1hdGVyaWFsVGV4dCA9ICdCYW1ib28nLFxuICBtYXRlcmlhbFR5cGUgPSAnUGxhbnQnLFxuICBtYXRlcmlhbEltYWdlID0gJy9iYW1ib28uc3ZnJyxcbiAgbWF0ZXJpYWxJbmZvID0gJ0JhbWJvbyByZXF1aXJlcyBubyBuZWVkIGZvciBwZXN0aWNpZGVzIG9yIGZlcnRpbGl6ZXJzJyxcbn0pID0+IHtcbiAgY29uc3QgW215U3dpdGNoLCBzZXRNeVN3aXRjaF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZSgnJylcbiAgXG4gIGNvbnN0IFtmYWN0T25lLCBzZXRGYWN0T25lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZmFjdFR3bywgc2V0RmFjdFR3b10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2ZhY3RUaHJlZSwgc2V0RmFjdFRocmVlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cblxuICAgIC8vZ2V0IHNjb3JlXG4gICAgbGV0IGN1cnJlbnRNYXRlcmlhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRNYXRlcmlhbCcpKVxuXG5cbiAgXG4gICAgY29uc3QgZGlzcGxheU1hdGVyaWFsID0gbWF0ZXJpYWxzLmZpbHRlcigoZWwpID0+IHtcbiAgICAgIHJldHVybiBlbC5uYW1lID09IGN1cnJlbnRNYXRlcmlhbFxuICAgIH0pXG5cblxuICAgIC8vc2V0IHByb2dyZXNzYmFyIHRvIHNjb3JlIFxuICAgIHNldE5hbWUoZGlzcGxheU1hdGVyaWFsWzBdLm5hbWUpXG4gICAgc2V0VHlwZShkaXNwbGF5TWF0ZXJpYWxbMF0udHlwZSlcblxuICAgIHNldEZhY3RPbmUoZGlzcGxheU1hdGVyaWFsWzBdLmZhY3QxKVxuICAgIHNldEZhY3RUd28oZGlzcGxheU1hdGVyaWFsWzBdLmZhY3QyKVxuICAgIHNldEZhY3RUaHJlZShkaXNwbGF5TWF0ZXJpYWxbMF0uZmFjdDMpXG5cbiAgICBjb25zb2xlLmxvZyhkaXNwbGF5TWF0ZXJpYWxbMF0pXG5cbiAgfSwgW10pXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGJhY2tncm91bmQ6IHBhZ2VDb2xvcixcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8TWVudSAvPlxuXG4gICAgICA8TWF0ZXJpYWw+e25hbWV9PC9NYXRlcmlhbD5cblxuICAgICAgPE1hdGVyaWFsVHlwZT5UeXBlOiB7dHlwZX0gRmliZXI8L01hdGVyaWFsVHlwZT5cblxuey8qICAgICAgIDxpbWcgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6ICcxMDBweCcsXG4gICAgICAgIG1hcmdpbjogJzI1cHggMCAyNXB4IDAnXG4gICAgICB9fSBzcmM9e21hdGVyaWFsSW1hZ2V9PjwvaW1nPiAqL31cblxuICAgICAgPEFib3V0UmVzb3VyY2VzQ29udFxuICAgICAgICBtYXJnaW49eycwIDAgMjVweCAwJ31cbiAgICAgICAgYmdDb2xvcj17Y29sb3JzLmdyZWVufVxuICAgICAgICBidXR0b25UZXh0PXsnUmVzb3VyY2VzJ31cbiAgICAgICAgbXlTd2l0Y2g9e215U3dpdGNofVxuICAgICAgICBzZXRNeVN3aXRjaD17c2V0TXlTd2l0Y2h9XG4gICAgICAvPlxuXG4gICAgICB7bXlTd2l0Y2ggPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+V2hlcmUgdG8gUmVjeWxjZTwvU3ViSGVhZGluZz5cblxuICAgICAgICAgIDxSZWN5Y2xlQnV0dG9uPjwvUmVjeWNsZUJ1dHRvbj5cblxuICAgICAgICAgIDxSZWN5Y2xlQnV0dG9uIGJ1dHRvblRleHQ9eydWYW5jb3V2ZXIgUmVjeWNsZSd9PjwvUmVjeWNsZUJ1dHRvbj5cblxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgVG8gaGVscCBzYXZlIHRoZSB3b3JsZCBjaGVjayBvdXQgdGhlc2Ugc3VzdGFpbmFibGUgc3RvcmUgb3B0aW9uc1xuICAgICAgICAgICAgbmVhciB5b3UuXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuXG4gICAgICAgICAgPFN0b3JlQ29udGFpbmVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U3ViSGVhZGluZz5BYm91dCB7bmFtZX08L1N1YkhlYWRpbmc+XG5cbiAgICAgICAgICA8TWF0ZXJpYWxJbmZvPntmYWN0T25lfTwvTWF0ZXJpYWxJbmZvPlxuXG4gICAgICAgICAgPE1hdGVyaWFsSW5mbz57ZmFjdFR3b308L01hdGVyaWFsSW5mbz5cblxuICAgICAgICAgIDxNYXRlcmlhbEluZm8+e2ZhY3RUaHJlZX08L01hdGVyaWFsSW5mbz5cblxuICAgICAgICAgIHsvKiA8TWF0ZXJpYWxCdXR0b25TbGlkZXIgLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbHNQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/material.jsx\n");

/***/ })

})