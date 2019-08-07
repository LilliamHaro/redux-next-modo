webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_seoHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/seoHead */ "./components/seoHead.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var _jsxFileName = "C:\\Users\\lilliam\\Desktop\\front-end\\practica\\next-redux-pc-2\\pages\\about.js";







var mapStateToProps = function mapStateToProps(state) {
  return {
    dataApi: state.dataApi
  };
};

var IndexConnected =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(IndexConnected, _Component);

  function IndexConnected() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IndexConnected);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexConnected).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IndexConnected, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_seoHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "About",
        description: "About description",
        url: "ssssssfff",
        ogImage: "https://circuit.com.pe/test-nextjs/static/mor.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "jsx-2489697889" + " " + "principalContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-2489697889",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "ABOUT"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-2489697889" + " " + "about_list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.props.dataApi.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: item.ProductCode,
          className: "jsx-2489697889",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/products/[product]",
          as: "/products/".concat(item.ProductCode),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "jsx-2489697889",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, item.ProductName)));
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2489697889",
        __self: this
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGlsbGlhbVxcRGVza3RvcFxcZnJvbnQtZW5kXFxwcmFjdGljYVxcbmV4dC1yZWR1eC1wYy0yXFxwYWdlc1xcYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNrQiIsImZpbGUiOiJDOlxcVXNlcnNcXGxpbGxpYW1cXERlc2t0b3BcXGZyb250LWVuZFxccHJhY3RpY2FcXG5leHQtcmVkdXgtcGMtMlxccGFnZXNcXGFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgU2VvSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL3Nlb0hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhQXBpOnN0YXRlLmRhdGFBcGlcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEluZGV4Q29ubmVjdGVkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKCA8TGF5b3V0PlxyXG4gICAgICA8U2VvSGVhZCAgdGl0bGU9XCJBYm91dFwiXHJcbiAgICAgICAgZGVzY3JpcHRpb249XCJBYm91dCBkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgdXJsPVwic3Nzc3NzZmZmXCJcclxuICAgICAgICBvZ0ltYWdlPVwiaHR0cHM6Ly9jaXJjdWl0LmNvbS5wZS90ZXN0LW5leHRqcy9zdGF0aWMvbW9yLmpwZ1wiLz5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByaW5jaXBhbENvbnRlbnRcIj5cclxuICAgICAgICA8aDE+QUJPVVQ8L2gxPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJhYm91dF9saXN0XCI+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhQXBpLm1hcCggKGl0ZW0saSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLlByb2R1Y3RDb2RlfT5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9kdWN0cy9bcHJvZHVjdF1cIiBhcz17YC9wcm9kdWN0cy8ke2l0ZW0uUHJvZHVjdENvZGV9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT57aXRlbS5Qcm9kdWN0TmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICApICl9XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIFxyXG4gICAgPC9MYXlvdXQ+KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEluZGV4ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEluZGV4Q29ubmVjdGVkKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuIl19 */\n/*@ sourceURL=C:\\Users\\lilliam\\Desktop\\front-end\\practica\\next-redux-pc-2\\pages\\about.js */"));
    }
  }]);

  return IndexConnected;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var Index = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps)(IndexConnected);
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=about.js.4f134a65e5331903a720.hot-update.js.map