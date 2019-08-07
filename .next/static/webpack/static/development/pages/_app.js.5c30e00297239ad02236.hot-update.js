webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/reducers.js":
/*!***************************!*\
  !*** ./redux/reducers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./redux/actionTypes.js");


var InitialState = {
  modo: "",
  modoTitle: "",
  dataApi: [],
  buyCar: []
};

function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_1__["CHANGE_MODO"]) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      modo: state.modo === "noche" ? "dia" : "noche",
      modoTitle: state.modo === "noche" ? "MODO DÍA" : "MODO NOCHE"
    });
  }

  if (action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FILL_DATAAPI"]) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      dataApi: action.payload
    });
  }

  if (action.type === _actionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_CAR"]) {
    return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      buyCar: state.buyCar.concat(action.payload)
    });
  }

  return state;
}

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ })

})
//# sourceMappingURL=_app.js.5c30e00297239ad02236.hot-update.js.map