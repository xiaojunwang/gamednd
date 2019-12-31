webpackHotUpdate("static/development/pages/houses/[id].js",{

/***/ "./pages/houses/[id].js":
/*!******************************!*\
  !*** ./pages/houses/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _houses_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../houses.json */ "./houses.json");
var _houses_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../houses.json */ "./houses.json", 1);
var _jsxFileName = "/Users/bennywang/Documents/Projects/gamednd/pages/houses/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var House = function House(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.house.title)), __jsx("img", {
    src: props.house.picture,
    width: "50%",
    alt: "House picture",
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
  }, props.house.type, " - ", props.house.town), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.house.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.house.rating, " (", props.house.reviewsCount, ")"));
};

House.getInitialProps = function (_ref) {
  var query = _ref.query;
  console.log(query);
  var id = query.id;
  return {
    house: _houses_json__WEBPACK_IMPORTED_MODULE_2__.filter(function (house) {
      return house.id === id;
    })[0]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (House);

/***/ })

})
//# sourceMappingURL=[id].js.42a72d09806a081cbfcc.hot-update.js.map