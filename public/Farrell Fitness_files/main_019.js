webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/GymTimetable/GymTimetable.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/components/GymTimetable/GymTimetable.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html,\nbody {\n  font-size: 17px;\n  box-sizing: border-box;\n  background: #1a1a1a;\n  margin: 0;\n  padding: 0;\n  color: white;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n  html a,\n  body a {\n    text-decoration: none;\n    color: white; }\n\n@media screen and (max-width: 900px) {\n  html {\n    font-size: 15px; } }\n\n@media screen and (max-width: 400px) {\n  html {\n    font-size: 13px; } }\n\nh1 {\n  font-size: 3rem; }\n\nh2 {\n  font-size: 2.5rem; }\n\nh3 {\n  font-size: 2rem; }\n\n.table-gym {\n  margin: 1rem 0;\n  font-size: clamp(5px, 1vw, 20px);\n  display: grid;\n  grid-template-columns: repeat(8, minmax(20px, auto));\n  grid-template-rows: repeat(8, minmax(10px, auto)); }\n  .table-gym .header,\n  .table-gym .time {\n    color: white;\n    background: #343434;\n    border: 1px solid #4d4d4d;\n    margin: 0.1rem;\n    padding: .3rem;\n    text-align: center;\n    align-self: center; }\n    .table-gym .header .logo,\n    .table-gym .time .logo {\n      max-width: 50%; }\n    .table-gym .header:nth-child(2),\n    .table-gym .time:nth-child(2) {\n      background: none; }\n  .table-gym .classInfo {\n    border: 1px solid #be5a13;\n    padding: 0.3rem;\n    text-align: center; }\n", "",{"version":3,"sources":["webpack://src/index.scss","webpack://src/components/GymTimetable/GymTimetable.scss"],"names":[],"mappings":"AAUA;;EAEE,eAAe;EACf,sBAAsB;EACtB,mBAZkB;EAalB,SAAS;EACT,UAAU;EACV,YAd6B;EAe7B,8JAEY;EACZ,mCAAmC;EACnC,kCAAkC,EAAA;EAZpC;;IAeI,qBAAqB;IACrB,YAvB2B,EAAA;;AA2B/B;EACE;IACE,eAAe,EAAA,EAChB;;AAGH;EACE;IACE,eAAe,EAAA,EAChB;;AAGH;EACE,eAAe,EAAA;;AAGjB;EACE,iBAAiB,EAAA;;AAGnB;EACE,eAAe,EAAA;;ACjDjB;EACE,cAAc;EACd,gCAAgC;EAChC,aAAa;EACb,oDAAoD;EACpD,iDAAiD,EAAA;EALnD;;IASI,YDR2B;ICS3B,mBAA8C;IAC9C,yBAAoD;IAIpD,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,kBAAkB,EAAA;IAlBtB;;MAaM,cAAc,EAAA;IAbpB;;MAqBM,gBAAgB,EAAA;EArBtB;IA0BI,yBD3BuB;IC4BvB,eAAe;IACf,kBAAkB,EAAA","sourcesContent":["// colors\n$main: rgba(190, 90, 19, 1);\n$bg: rgb(26, 26, 26);\n$text-color: rgb(255, 255, 255);\n$footer-color: grey;\n\n// transitions\n$hover-trans: all 0.3s ease 0s;\n$slide: all 500ms cubic-bezier(1, 0, 0, 1);\n\nhtml,\nbody {\n  font-size: 17px;\n  box-sizing: border-box;\n  background: $bg;\n  margin: 0;\n  padding: 0;\n  color: $text-color;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n\n  a {\n    text-decoration: none;\n    color: $text-color;\n  }\n}\n\n@media screen and (max-width: 900px) {\n  html {\n    font-size: 15px;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  html {\n    font-size: 13px;\n  }\n}\n\nh1 {\n  font-size: 3rem;\n}\n\nh2 {\n  font-size: 2.5rem;\n}\n\nh3 {\n  font-size: 2rem;\n}\n","@import \"../../index.scss\";\n\n.table-gym {\n  margin: 1rem 0;\n  font-size: clamp(5px, 1vw, 20px);\n  display: grid;\n  grid-template-columns: repeat(8, minmax(20px, auto));\n  grid-template-rows: repeat(8, minmax(10px, auto));\n\n  .header,\n  .time {\n    color: $text-color;\n    background: lighten($color: $bg, $amount: 10%);\n    border: 1px solid lighten($color: $bg, $amount: 20%);\n    .logo{\n      max-width: 50%;\n    }\n    margin: 0.1rem;\n    padding: .3rem;\n    text-align: center;\n    align-self: center;\n\n    &:nth-child(2) {\n      background: none;\n    }\n  }\n\n  .classInfo {\n    border: 1px solid $main;\n    padding: 0.3rem;\n    text-align: center;\n  }\n  \n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.de2b1a5327607ba6e1e5.hot-update.js.map