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
      if (this.props.dataApi.length) {
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
      }, "*{margin:0;padding:0;}main{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:100vh;position:relative;}.principalContent{padding:20px;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.noche footer,.noche nav{color:#d1d1d1;background-color:#1a1a1b;}.noche .principalContent{background-color:#030303;color:#d1d1d1;}.noche footer button{background:#000;color:#fff;}.noche nav ul li a{color:#fff;}.dia footer,.dia nav{color:#000;background-color:#fff;}.dia .principalContent{background-color:#dae0e6;color:#000;}.dia footer button{background:#00c4b3;color:#fff;}.dia nav ul li a{color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGlsbGlhbVxcRGVza3RvcFxcZnJvbnQtZW5kXFxwcmFjdGljYVxcbmV4dC1yZWR1eC1wYy0yXFxjb21wb25lbnRzXFxsYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0MyQixBQUdzQixBQUlJLEFBTUEsQUFXQyxBQUtXLEFBS1QsQUFJTCxBQUtBLEFBS2MsQUFJTixBQUtSLFNBckRELEVBbUNaLEFBS3dCLEFBY3hCLEVBNUNnQixDQVdXLEVBVWQsR0E5QmIsQUFnRGEsTUF2QkcsQUFtQkgsRUFiYixHQWtCQSxHQVRBLEdBS0EsR0F4QkEsQUFLQSw0QkFoQmUsT0FQUyxtRUFRQyxXQVBOLGlCQUNDLGtCQUNwQixxREFNcUIsNkZBQ0MsZ0RBQ0MsOEVBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbGlsbGlhbVxcRGVza3RvcFxcZnJvbnQtZW5kXFxwcmFjdGljYVxcbmV4dC1yZWR1eC1wYy0yXFxjb21wb25lbnRzXFxsYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4vbmF2XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZmlsbERhdGFBcGkgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBtb2RvOiBzdGF0ZS5tb2RvLFxyXG4gICAgZGF0YUFwaTogc3RhdGUuZGF0YUFwaVxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgZmlsbERhdGFBcGk6IGRhdGFBcGkgPT4gZGlzcGF0Y2goZmlsbERhdGFBcGkoZGF0YUFwaSkpXHJcbiAgfTtcclxufVxyXG5cclxuY2xhc3MgQ29ubmVjdGVkTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmRhdGFBcGkubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKClcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICBmZXRjaChcImh0dHBzOi8vb2F6aXZpdGFsaXR5LmNvbS9hcGkvcHJvZHVjdHNcIilcclxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKG15SnNvbikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RhdGFwaSB0byBmaWxsJywgbXlKc29uLnByb2R1Y3RzKVxyXG4gICAgICAgICAgdGhhdC5wcm9wcy5maWxsRGF0YUFwaShteUpzb24ucHJvZHVjdHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJpcyBmdWxsXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLm1vZG99PlxyXG4gICAgICAgIDxOYXYgLz5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICoge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtYWluIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcmluY2lwYWxDb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ub2NoZSBmb290ZXIsXHJcbiAgICAgICAgICAubm9jaGUgbmF2IHtcclxuICAgICAgICAgICAgY29sb3I6ICNkMWQxZDE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5vY2hlIC5wcmluY2lwYWxDb250ZW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMDMwMztcclxuICAgICAgICAgICAgY29sb3I6ICNkMWQxZDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5vY2hlIGZvb3RlciBidXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ub2NoZSBuYXYgdWwgbGkgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5kaWEgZm9vdGVyLFxyXG4gICAgICAgICAgLmRpYSBuYXYge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZGlhIC5wcmluY2lwYWxDb250ZW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZTBlNjtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGlhIGZvb3RlciBidXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBjNGIzO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZGlhIG5hdiB1bCBsaSBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L21haW4+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5jb25zdCBMYXlvdXQgPSBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShDb25uZWN0ZWRMYXlvdXQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\lilliam\\Desktop\\front-end\\practica\\next-redux-pc-2\\components\\layout.js */"));
    }
  }]);

  return ConnectedLayout;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var Layout = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(ConnectedLayout);
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=[product].js.e4dfbd48d4dda1b1a23b.hot-update.js.map