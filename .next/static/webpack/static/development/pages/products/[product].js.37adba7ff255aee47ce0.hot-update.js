webpackHotUpdate("static\\development\\pages\\products\\[product].js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
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
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");





var _jsxFileName = "C:\\Users\\lilliam\\Desktop\\front-end\\practica\\next-redux-pc-2\\components\\layout.js";







var mapStateToProps = function mapStateToProps(state) {
  return {
    modo: state.modo,
    dataApi: state.dataApi
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fillDataApi: function fillDataApi(dataApi) {
      return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_10__["fillDataApi"])(dataApi));
    }
  };
}

var ConnectedLayout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ConnectedLayout, _Component);

  function ConnectedLayout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConnectedLayout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ConnectedLayout).call(this));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ConnectedLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.dataApi.length === 0 || this.props.dataApi) {
        console.log();
        var that = this;
        fetch("https://oazivitality.com/api/products").then(function (response) {
          return response.json();
        }).then(function (myJson) {
          console.log('datapi to fill', myJson.products);
          that.props.fillDataApi(myJson.products);
        });
      } else {
        console.log("is full");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("main", {
        className: "jsx-1685624458" + " " + (this.props.modo || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_nav__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), this.props.children, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1685624458",
        __self: this
      }, "*{margin:0;padding:0;}main{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:100vh;position:relative;}.principalContent{padding:20px;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.noche footer,.noche nav{color:#d1d1d1;background-color:#1a1a1b;}.noche .principalContent{background-color:#030303;color:#d1d1d1;}.noche footer button{background:#000;color:#fff;}.noche nav ul li a{color:#fff;}.dia footer,.dia nav{color:#000;background-color:#fff;}.dia .principalContent{background-color:#dae0e6;color:#000;}.dia footer button{background:#00c4b3;color:#fff;}.dia nav ul li a{color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGlsbGlhbVxcRGVza3RvcFxcZnJvbnQtZW5kXFxwcmFjdGljYVxcbmV4dC1yZWR1eC1wYy0yXFxjb21wb25lbnRzXFxsYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0MyQixBQUdzQixBQUlJLEFBTUEsQUFXQyxBQUtXLEFBS1QsQUFJTCxBQUtBLEFBS2MsQUFJTixBQUtSLFNBckRELEVBbUNaLEFBS3dCLEFBY3hCLEVBNUNnQixDQVdXLEVBVWQsR0E5QmIsQUFnRGEsTUF2QkcsQUFtQkgsRUFiYixHQWtCQSxHQVRBLEdBS0EsR0F4QkEsQUFLQSw0QkFoQmUsT0FQUyxtRUFRQyxXQVBOLGlCQUNDLGtCQUNwQixxREFNcUIsNkZBQ0MsZ0RBQ0MsOEVBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGlsbGlhbVxcRGVza3RvcFxcZnJvbnQtZW5kXFxwcmFjdGljYVxcbmV4dC1yZWR1eC1wYy0yXFxjb21wb25lbnRzXFxsYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vbmF2XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZmlsbERhdGFBcGkgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBtb2RvOiBzdGF0ZS5tb2RvLFxyXG4gICAgZGF0YUFwaTogc3RhdGUuZGF0YUFwaVxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgZmlsbERhdGFBcGk6IGRhdGFBcGkgPT4gZGlzcGF0Y2goZmlsbERhdGFBcGkoZGF0YUFwaSkpXHJcbiAgfTtcclxufVxyXG5cclxuY2xhc3MgQ29ubmVjdGVkTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmRhdGFBcGkubGVuZ3RoID09PSAwIHx8IHRoaXMucHJvcHMuZGF0YUFwaSApIHtcclxuICAgICAgY29uc29sZS5sb2coKVxyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGZldGNoKFwiaHR0cHM6Ly9vYXppdml0YWxpdHkuY29tL2FwaS9wcm9kdWN0c1wiKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obXlKc29uKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YXBpIHRvIGZpbGwnLCBteUpzb24ucHJvZHVjdHMpXHJcbiAgICAgICAgICB0aGF0LnByb3BzLmZpbGxEYXRhQXBpKG15SnNvbi5wcm9kdWN0cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImlzIGZ1bGxcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3RoaXMucHJvcHMubW9kb30+XHJcbiAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByaW5jaXBhbENvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5vY2hlIGZvb3RlcixcclxuICAgICAgICAgIC5ub2NoZSBuYXYge1xyXG4gICAgICAgICAgICBjb2xvcjogI2QxZDFkMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubm9jaGUgLnByaW5jaXBhbENvbnRlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwMzAzO1xyXG4gICAgICAgICAgICBjb2xvcjogI2QxZDFkMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubm9jaGUgZm9vdGVyIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5vY2hlIG5hdiB1bCBsaSBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRpYSBmb290ZXIsXHJcbiAgICAgICAgICAuZGlhIG5hdiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5kaWEgLnByaW5jaXBhbENvbnRlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU2O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kaWEgZm9vdGVyIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGM0YjM7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5kaWEgbmF2IHVsIGxpIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmNvbnN0IExheW91dCA9IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKENvbm5lY3RlZExheW91dCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\lilliam\\Desktop\\front-end\\practica\\next-redux-pc-2\\components\\layout.js */"));
    }
  }]);

  return ConnectedLayout;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var Layout = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(ConnectedLayout);
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=[product].js.37adba7ff255aee47ce0.hot-update.js.map