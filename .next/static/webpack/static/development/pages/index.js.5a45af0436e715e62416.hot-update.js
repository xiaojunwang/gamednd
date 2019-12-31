webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/House.js":
/*!***********************************!*\
  !*** ./pages/components/House.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bennywang/Documents/Projects/gamednd/pages/components/House.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var House = function House(props) {
  console.log(props);
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/houses/[id]",
    as: '/houses/' + props.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    src: props.picture,
    width: "100%",
    alt: "Host Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.type, " - ", props.town), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.rating, " (", props.reviewsCount, ")"))));
};

/* harmony default export */ __webpack_exports__["default"] = (House);

/***/ })

})
//# sourceMappingURL=index.js.5a45af0436e715e62416.hot-update.js.map