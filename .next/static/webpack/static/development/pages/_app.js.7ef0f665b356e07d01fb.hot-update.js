webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./redux/reducers.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./redux/localStorage.js");



var persistedState = Object(_localStorage__WEBPACK_IMPORTED_MODULE_2__["loadState"])();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedState, _reducers__WEBPACK_IMPORTED_MODULE_1__["default"]);
store.subscribe(function () {
  Object(_localStorage__WEBPACK_IMPORTED_MODULE_2__["saveState"])({
    modo: store.getState().modo,
    modoTitle: store.getState().modoTitle
  });
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

})
//# sourceMappingURL=_app.js.7ef0f665b356e07d01fb.hot-update.js.map