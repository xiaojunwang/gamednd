webpackHotUpdate("static/development/pages/houses/[id].js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArrayLimit(arr, i) {
  if (!(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/houses/[id].js":
/*!******************************!*\
  !*** ./pages/houses/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_DateRangePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/DateRangePicker */ "./components/DateRangePicker.js");
/* harmony import */ var _houses_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../houses.json */ "./houses.json");
var _houses_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../houses.json */ "./houses.json", 1);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");

var _jsxFileName = "/Users/bennywang/Documents/Projects/gamednd/pages/houses/[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var House = function House(props) {
  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      dateChosen = _useState2[0],
      setDateChosen = _useState2[1]; //create new dateChosen state propery, which defaults to false;


  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: __jsx("div", {
      className: "jsx-1671841858" + " " + 'container',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, props.house.title)), __jsx("article", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Welcome to ", props.house.hostName || 'no name', "'s listing"), __jsx("img", {
      src: props.house.picture,
      width: "70%",
      alt: "House picture",
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, props.house.type, " - ", props.house.town), __jsx("p", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, props.house.title), __jsx("p", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, props.house.rating, " (", props.house.reviewsCount, ")")), __jsx("aside", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Add dates for prices"), __jsx(_components_DateRangePicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
      datesChanged: function datesChanged(startDate, endDate) {
        console.log('start', startDate, 'end', endDate);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1671841858",
      __self: this
    }, ".container.jsx-1671841858{display:grid;grid-template-columns:60% 40%;grid-gap:30px;}aside.jsx-1671841858{border:1px solid #ccc;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvcGFnZXMvaG91c2VzL1tpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NzQixBQUc0QixBQU1TLGFBTFEsU0FNakIsYUFDZixRQU5nQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvYmVubnl3YW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9nYW1lZG5kL3BhZ2VzL2hvdXNlcy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBEYXRlUmFuZ2VQaWNrZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EYXRlUmFuZ2VQaWNrZXInO1xuaW1wb3J0IGhvdXNlcyBmcm9tICcuLi8uLi9ob3VzZXMuanNvbic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY29uc3QgSG91c2UgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtkYXRlQ2hvc2VuLCBzZXREYXRlQ2hvc2VuXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy9jcmVhdGUgbmV3IGRhdGVDaG9zZW4gc3RhdGUgcHJvcGVyeSwgd2hpY2ggZGVmYXVsdHMgdG8gZmFsc2U7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICBjb250ZW50PXtcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+e3Byb3BzLmhvdXNlLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8ge3Byb3BzLmhvdXNlLmhvc3ROYW1lIHx8ICdubyBuYW1lJ30ncyBsaXN0aW5nPC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5ob3VzZS5waWN0dXJlfSB3aWR0aD0nNzAlJyBhbHQ9J0hvdXNlIHBpY3R1cmUnIC8+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3Byb3BzLmhvdXNlLnR5cGV9IC0ge3Byb3BzLmhvdXNlLnRvd259XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD57cHJvcHMuaG91c2UudGl0bGV9PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtwcm9wcy5ob3VzZS5yYXRpbmd9ICh7cHJvcHMuaG91c2UucmV2aWV3c0NvdW50fSlcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgPGFzaWRlPlxuICAgICAgICAgICAgPGgyPkFkZCBkYXRlcyBmb3IgcHJpY2VzPC9oMj5cbiAgICAgICAgICAgIDxEYXRlUmFuZ2VQaWNrZXJcbiAgICAgICAgICAgICAgZGF0ZXNDaGFuZ2VkPXsoc3RhcnREYXRlLCBlbmREYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0Jywgc3RhcnREYXRlLCAnZW5kJywgZW5kRGF0ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDQwJTtcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFzaWRlIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIC8+XG4gICk7XG59O1xuXG5Ib3VzZS5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgY29uc3QgeyBpZCB9ID0gcXVlcnk7XG5cbiAgcmV0dXJuIHtcbiAgICBob3VzZTogaG91c2VzLmZpbHRlcihob3VzZSA9PiBob3VzZS5pZCA9PT0gaWQpWzBdLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG91c2U7XG4iXX0= */\n/*@ sourceURL=/Users/bennywang/Documents/Projects/gamednd/pages/houses/[id].js */")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
};

House.getInitialProps = function (_ref) {
  var query = _ref.query;
  console.log(query);
  var id = query.id;
  return {
    house: _houses_json__WEBPACK_IMPORTED_MODULE_5__.filter(function (house) {
      return house.id === id;
    })[0]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (House);

/***/ })

})
//# sourceMappingURL=[id].js.eb1a78f71d2e4fe3428d.hot-update.js.map