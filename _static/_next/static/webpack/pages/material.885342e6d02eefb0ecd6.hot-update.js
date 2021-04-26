webpackHotUpdate_N_E("pages/material",{

/***/ "./src/pages/material.jsx":
/*!********************************!*\
  !*** ./src/pages/material.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Menu */ \"./src/components/Menu.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MaterialButtonSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MaterialButtonSlider */ \"./src/components/MaterialButtonSlider.js\");\n/* harmony import */ var _components_AboutResourcesCont__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AboutResourcesCont */ \"./src/components/AboutResourcesCont.js\");\n/* harmony import */ var _components_RecycleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RecycleButton */ \"./src/components/RecycleButton.js\");\n/* harmony import */ var _components_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/color */ \"./src/components/color.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_StoreContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/StoreContainer */ \"./src/components/StoreContainer.js\");\n/* harmony import */ var _data_materials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/materials */ \"./src/data/materials.js\");\n\n\n\n\n\n\n\n\n\nconst Material = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div`\n  display: flex;\n  text-align: left;\n  align-self: flex;\n  margin: 150px 0 0 0;\n  width: 90vw;\n\n  color: white;\n  font-size: 36px;\n  font-family: Nunito;\n  font-weight: bold;\n`;\nconst MaterialType = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div`\n  display: flex;\n  text-align: left;\n  align-self: flex;\n  margin: 25px 0 50px 0;\n  width: 90vw;\n\n  color: white;\n  font-size: 18px;\n  font-family: Open Sans;\n`;\nconst SubHeading = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div`\n  display: flex;\n  text-align: left;\n  align-self: flex;\n  margin: 25px 0 25px 0;\n  width: 90vw;\n\n  color: white;\n  font-size: 24px;\n  font-family: Open Sans;\n`;\nconst MaterialInfo = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div`\n  display: flex;\n  text-align: left;\n  align-self: flex;\n  margin: 15px 0 25px 0;\n  width: 90vw;\n\n  color: white;\n  font-size: 18px;\n  font-family: Open Sans;\n`;\nconst MaterialsPage = ({\n  pageColor = _components_color__WEBPACK_IMPORTED_MODULE_5__[\"colors\"].green,\n  materialText = \"Bamboo\",\n  materialType = \"Plant\",\n  materialImage = \"/bamboo.svg\",\n  materialInfo = \"Bamboo requires no need for pesticides or fertilizers\"\n}) => {\n  const [mySwitch, setMySwitch] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const [type, setType] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const [factOne, setFactOne] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const [factTwo, setFactTwo] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const [factThree, setFactThree] = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    let currentMaterial = JSON.parse(localStorage.getItem(\"currentMaterial\"));\n    const displayMaterial = _data_materials__WEBPACK_IMPORTED_MODULE_8__[\"materials\"].filter((el) => {\n      return el.name == currentMaterial;\n    });\n    setName(displayMaterial[0].name);\n    setType(displayMaterial[0].type);\n    setFactOne(displayMaterial[0].fact1);\n    setFactTwo(displayMaterial[0].fact2);\n    setFactThree(displayMaterial[0].fact3);\n    console.log(displayMaterial[0]);\n  }, []);\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    style: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      alignItems: \"center\",\n      background: pageColor,\n      minHeight: \"100vh\"\n    }\n  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"], null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Material, null, name), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MaterialType, null, \"Type: \", type, \" Fiber\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AboutResourcesCont__WEBPACK_IMPORTED_MODULE_3__[\"AboutResourcesCont\"], {\n    margin: \"0 0 25px 0\",\n    bgColor: _components_color__WEBPACK_IMPORTED_MODULE_5__[\"colors\"].green,\n    buttonText: \"Resources\",\n    mySwitch,\n    setMySwitch\n  }), mySwitch ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    style: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      alignItems: \"center\"\n    }\n  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubHeading, null, \"Where to Recylce\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_RecycleButton__WEBPACK_IMPORTED_MODULE_4__[\"RecycleButton\"], null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_RecycleButton__WEBPACK_IMPORTED_MODULE_4__[\"RecycleButton\"], {\n    buttonText: \"Vancouver Recycle\"\n  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubHeading, null, \"To help save the world check out these sustainable store options near you.\"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_StoreContainer__WEBPACK_IMPORTED_MODULE_7__[\"StoreContainer\"], null)) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubHeading, null, \"About \", name), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MaterialInfo, null, factOne), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MaterialInfo, null, factTwo), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MaterialInfo, null, factThree)));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MaterialsPage);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21hdGVyaWFsLmpzeD9kYTA2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNLFdBQVcseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFheEIsTUFBTSxlQUFlLHlEQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVk1QixNQUFNLGFBQWEseURBQU0sQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWTFCLE1BQU0sZUFBZSx5REFBTSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZNUIsTUFBTSxnQkFBZ0IsQ0FBQztBQUFBLEVBQ3JCLFlBQVksd0RBQU0sQ0FBQztBQUFBLEVBQ25CLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxNQUNYO0FBQ0osUUFBTSxDQUFDLFVBQVUsZUFBZSxzREFBUSxDQUFDO0FBR3pDLFFBQU0sQ0FBQyxNQUFNLFdBQVcsc0RBQVEsQ0FBQztBQUNqQyxRQUFNLENBQUMsTUFBTSxXQUFXLHNEQUFRLENBQUM7QUFFakMsUUFBTSxDQUFDLFNBQVMsY0FBYyxzREFBUSxDQUFDO0FBQ3ZDLFFBQU0sQ0FBQyxTQUFTLGNBQWMsc0RBQVEsQ0FBQztBQUN2QyxRQUFNLENBQUMsV0FBVyxnQkFBZ0Isc0RBQVEsQ0FBQztBQUUzQyx5REFBUyxDQUFDLE1BQU07QUFJZCxRQUFJLGtCQUFrQixLQUFLLE1BQU0sYUFBYSxRQUFRO0FBSXRELFVBQU0sa0JBQWtCLHlEQUFTLENBQUMsT0FBTyxDQUFDLE9BQU87QUFDL0MsYUFBTyxHQUFHLFFBQVE7QUFBQTtBQUtwQixZQUFRLGdCQUFnQixHQUFHO0FBQzNCLFlBQVEsZ0JBQWdCLEdBQUc7QUFFM0IsZUFBVyxnQkFBZ0IsR0FBRztBQUM5QixlQUFXLGdCQUFnQixHQUFHO0FBQzlCLGlCQUFhLGdCQUFnQixHQUFHO0FBRWhDLFlBQVEsSUFBSSxnQkFBZ0I7QUFBQSxLQUUzQjtBQUdILFNBQ0UsMkVBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsZUFBZTtBQUFBLE1BQ2YsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osV0FBVztBQUFBO0FBQUEsS0FHYiwyRUFBQyxxREFBSSxFQUFMLE9BRUEsMkVBQUMsVUFBRCxNQUFXLE9BRVgsMkVBQUMsY0FBRCxNQUFjLFVBQU8sTUFBSyxXQU8xQiwyRUFBQyxpRkFBa0IsRUFBbkI7QUFBQSxJQUNFLFFBQVE7QUFBQSxJQUNSLFNBQVMsd0RBQU0sQ0FBQztBQUFBLElBQ2hCLFlBQVk7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLE1BR0QsV0FDQywyRUFBQyxPQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxlQUFlO0FBQUEsTUFDZixZQUFZO0FBQUE7QUFBQSxLQUdkLDJFQUFDLFlBQUQsTUFBWSxxQkFFWiwyRUFBQyx1RUFBYSxFQUFkLE9BRUEsMkVBQUMsdUVBQWEsRUFBZDtBQUFBLElBQWUsWUFBWTtBQUFBLE1BRTNCLDJFQUFDLFlBQUQsTUFBWSwrRUFLWiwyRUFBQyx5RUFBYyxFQUFmLFNBR0YsMkVBQUMsT0FBRCxNQUNFLDJFQUFDLFlBQUQsTUFBWSxVQUFPLE9BRW5CLDJFQUFDLGNBQUQsTUFBZSxVQUVmLDJFQUFDLGNBQUQsTUFBZSxVQUVmLDJFQUFDLGNBQUQsTUFBZTtBQUFBO0FBU1YsNEVBQWEiLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWF0ZXJpYWwuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBNYXRlcmlhbEJ1dHRvblNsaWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvTWF0ZXJpYWxCdXR0b25TbGlkZXInXG5pbXBvcnQgeyBBYm91dFJlc291cmNlc0NvbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0UmVzb3VyY2VzQ29udCdcbmltcG9ydCB7IFJlY3ljbGVCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL1JlY3ljbGVCdXR0b24nXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbG9yJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFN0b3JlQ29udGFpbmVyIH0gZnJvbSAnQC9jb21wb25lbnRzL1N0b3JlQ29udGFpbmVyJ1xuaW1wb3J0IHsgbWF0ZXJpYWxzIH0gZnJvbSAnLi4vZGF0YS9tYXRlcmlhbHMnXG5cbmNvbnN0IE1hdGVyaWFsID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogZmxleDtcbiAgbWFyZ2luOiAxNTBweCAwIDAgMDtcbiAgd2lkdGg6IDkwdnc7XG5cbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5jb25zdCBNYXRlcmlhbFR5cGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBmbGV4O1xuICBtYXJnaW46IDI1cHggMCA1MHB4IDA7XG4gIHdpZHRoOiA5MHZ3O1xuXG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuYFxuXG5jb25zdCBTdWJIZWFkaW5nID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogZmxleDtcbiAgbWFyZ2luOiAyNXB4IDAgMjVweCAwO1xuICB3aWR0aDogOTB2dztcblxuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbmBcblxuY29uc3QgTWF0ZXJpYWxJbmZvID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24tc2VsZjogZmxleDtcbiAgbWFyZ2luOiAxNXB4IDAgMjVweCAwO1xuICB3aWR0aDogOTB2dztcblxuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbmBcblxuY29uc3QgTWF0ZXJpYWxzUGFnZSA9ICh7XG4gIHBhZ2VDb2xvciA9IGNvbG9ycy5ncmVlbixcbiAgbWF0ZXJpYWxUZXh0ID0gJ0JhbWJvbycsXG4gIG1hdGVyaWFsVHlwZSA9ICdQbGFudCcsXG4gIG1hdGVyaWFsSW1hZ2UgPSAnL2JhbWJvby5zdmcnLFxuICBtYXRlcmlhbEluZm8gPSAnQmFtYm9vIHJlcXVpcmVzIG5vIG5lZWQgZm9yIHBlc3RpY2lkZXMgb3IgZmVydGlsaXplcnMnLFxufSkgPT4ge1xuICBjb25zdCBbbXlTd2l0Y2gsIHNldE15U3dpdGNoXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKCcnKVxuICBcbiAgY29uc3QgW2ZhY3RPbmUsIHNldEZhY3RPbmVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtmYWN0VHdvLCBzZXRGYWN0VHdvXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZmFjdFRocmVlLCBzZXRGYWN0VGhyZWVdID0gdXNlU3RhdGUoJycpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuXG4gICAgLy9nZXQgc2NvcmVcbiAgICBsZXQgY3VycmVudE1hdGVyaWFsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudE1hdGVyaWFsJykpXG5cblxuICBcbiAgICBjb25zdCBkaXNwbGF5TWF0ZXJpYWwgPSBtYXRlcmlhbHMuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgcmV0dXJuIGVsLm5hbWUgPT0gY3VycmVudE1hdGVyaWFsXG4gICAgfSlcblxuXG4gICAgLy9zZXQgcHJvZ3Jlc3NiYXIgdG8gc2NvcmUgXG4gICAgc2V0TmFtZShkaXNwbGF5TWF0ZXJpYWxbMF0ubmFtZSlcbiAgICBzZXRUeXBlKGRpc3BsYXlNYXRlcmlhbFswXS50eXBlKVxuXG4gICAgc2V0RmFjdE9uZShkaXNwbGF5TWF0ZXJpYWxbMF0uZmFjdDEpXG4gICAgc2V0RmFjdFR3byhkaXNwbGF5TWF0ZXJpYWxbMF0uZmFjdDIpXG4gICAgc2V0RmFjdFRocmVlKGRpc3BsYXlNYXRlcmlhbFswXS5mYWN0MylcblxuICAgIGNvbnNvbGUubG9nKGRpc3BsYXlNYXRlcmlhbFswXSlcblxuICB9LCBbXSlcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZDogcGFnZUNvbG9yLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxNZW51IC8+XG5cbiAgICAgIDxNYXRlcmlhbD57bmFtZX08L01hdGVyaWFsPlxuXG4gICAgICA8TWF0ZXJpYWxUeXBlPlR5cGU6IHt0eXBlfSBGaWJlcjwvTWF0ZXJpYWxUeXBlPlxuXG57LyogICAgICAgPGltZyBzdHlsZT17e1xuICAgICAgICB3aWR0aDogJzEwMHB4JyxcbiAgICAgICAgbWFyZ2luOiAnMjVweCAwIDI1cHggMCdcbiAgICAgIH19IHNyYz17bWF0ZXJpYWxJbWFnZX0+PC9pbWc+ICovfVxuXG4gICAgICA8QWJvdXRSZXNvdXJjZXNDb250XG4gICAgICAgIG1hcmdpbj17JzAgMCAyNXB4IDAnfVxuICAgICAgICBiZ0NvbG9yPXtjb2xvcnMuZ3JlZW59XG4gICAgICAgIGJ1dHRvblRleHQ9eydSZXNvdXJjZXMnfVxuICAgICAgICBteVN3aXRjaD17bXlTd2l0Y2h9XG4gICAgICAgIHNldE15U3dpdGNoPXtzZXRNeVN3aXRjaH1cbiAgICAgIC8+XG5cbiAgICAgIHtteVN3aXRjaCA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3ViSGVhZGluZz5XaGVyZSB0byBSZWN5bGNlPC9TdWJIZWFkaW5nPlxuXG4gICAgICAgICAgPFJlY3ljbGVCdXR0b24+PC9SZWN5Y2xlQnV0dG9uPlxuXG4gICAgICAgICAgPFJlY3ljbGVCdXR0b24gYnV0dG9uVGV4dD17J1ZhbmNvdXZlciBSZWN5Y2xlJ30+PC9SZWN5Y2xlQnV0dG9uPlxuXG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBUbyBoZWxwIHNhdmUgdGhlIHdvcmxkIGNoZWNrIG91dCB0aGVzZSBzdXN0YWluYWJsZSBzdG9yZSBvcHRpb25zXG4gICAgICAgICAgICBuZWFyIHlvdS5cbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG5cbiAgICAgICAgICA8U3RvcmVDb250YWluZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTdWJIZWFkaW5nPkFib3V0IHtuYW1lfTwvU3ViSGVhZGluZz5cblxuICAgICAgICAgIDxNYXRlcmlhbEluZm8+e2ZhY3RPbmV9PC9NYXRlcmlhbEluZm8+XG5cbiAgICAgICAgICA8TWF0ZXJpYWxJbmZvPntmYWN0VHdvfTwvTWF0ZXJpYWxJbmZvPlxuXG4gICAgICAgICAgPE1hdGVyaWFsSW5mbz57ZmFjdFRocmVlfTwvTWF0ZXJpYWxJbmZvPlxuXG4gICAgICAgICAgey8qIDxNYXRlcmlhbEJ1dHRvblNsaWRlciAvPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGVyaWFsc1BhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/material.jsx\n");

/***/ })

})