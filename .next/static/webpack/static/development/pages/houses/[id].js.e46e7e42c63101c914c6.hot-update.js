webpackHotUpdate("static/development/pages/houses/[id].js",{

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





var calcNumberOfNightsBetweenDates = function calcNumberOfNightsBetweenDates(startDate, endDate) {
  var start = new Date(startDate);
  var end = new Date(endDate);
  var dayCount = 0;

  while (end > start) {
    dayCount++;
    start.setDate(start.getDate() + 1);
  }

  return dayCount;
};

var _useState = useState(0),
    _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    numberOfNightsBetweenDates = _useState2[0],
    setNumberOfNightsBetweenDates = _useState2[1];

var House = function House(props) {
  var _useState3 = useState(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      dateChosen = _useState4[0],
      setDateChosen = _useState4[1]; //create new dateChosen state propery, which defaults to false;


  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: __jsx("div", {
      className: "jsx-1671841858" + " " + 'container',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, props.house.title)), __jsx("article", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Welcome to ", props.house.hostName || 'no name', "'s listing"), __jsx("img", {
      src: props.house.picture,
      width: "70%",
      alt: "House picture",
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, props.house.type, " - ", props.house.town), __jsx("p", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, props.house.title), __jsx("p", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, props.house.rating, " (", props.house.reviewsCount, ")")), __jsx("aside", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Add dates for prices"), __jsx(_components_DateRangePicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
      datesChanged: function datesChanged(startDate, endDate) {
        console.log('start', startDate, 'end', endDate);
        setDateChosen(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), dateChosen && __jsx("div", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Price per night"), __jsx("p", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "$", props.house.price))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1671841858",
      __self: this
    }, ".container.jsx-1671841858{display:grid;grid-template-columns:60% 40%;grid-gap:30px;}aside.jsx-1671841858{border:1px solid #ccc;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvcGFnZXMvaG91c2VzL1tpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURzQixBQUc0QixBQU1TLGFBTFEsU0FNakIsYUFDZixRQU5nQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvYmVubnl3YW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9nYW1lZG5kL3BhZ2VzL2hvdXNlcy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBEYXRlUmFuZ2VQaWNrZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EYXRlUmFuZ2VQaWNrZXInO1xuaW1wb3J0IGhvdXNlcyBmcm9tICcuLi8uLi9ob3VzZXMuanNvbic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY29uc3QgY2FsY051bWJlck9mTmlnaHRzQmV0d2VlbkRhdGVzID0gKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkgPT4ge1xuICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gIGNvbnN0IGVuZCA9IG5ldyBEYXRlKGVuZERhdGUpO1xuICBsZXQgZGF5Q291bnQgPSAwO1xuXG4gIHdoaWxlIChlbmQgPiBzdGFydCkge1xuICAgIGRheUNvdW50Kys7XG4gICAgc3RhcnQuc2V0RGF0ZShzdGFydC5nZXREYXRlKCkgKyAxKTtcbiAgfVxuICByZXR1cm4gZGF5Q291bnQ7XG59O1xuXG5jb25zdCBbbnVtYmVyT2ZOaWdodHNCZXR3ZWVuRGF0ZXMsIHNldE51bWJlck9mTmlnaHRzQmV0d2VlbkRhdGVzXSA9IHVzZVN0YXRlKDApO1xuXG5jb25zdCBIb3VzZSA9IHByb3BzID0+IHtcbiAgY29uc3QgW2RhdGVDaG9zZW4sIHNldERhdGVDaG9zZW5dID0gdXNlU3RhdGUoZmFsc2UpOyAvL2NyZWF0ZSBuZXcgZGF0ZUNob3NlbiBzdGF0ZSBwcm9wZXJ5LCB3aGljaCBkZWZhdWx0cyB0byBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIGNvbnRlbnQ9e1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57cHJvcHMuaG91c2UudGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8aDE+V2VsY29tZSB0byB7cHJvcHMuaG91c2UuaG9zdE5hbWUgfHwgJ25vIG5hbWUnfSdzIGxpc3Rpbmc8L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmhvdXNlLnBpY3R1cmV9IHdpZHRoPSc3MCUnIGFsdD0nSG91c2UgcGljdHVyZScgLz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7cHJvcHMuaG91c2UudHlwZX0gLSB7cHJvcHMuaG91c2UudG93bn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPntwcm9wcy5ob3VzZS50aXRsZX08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3Byb3BzLmhvdXNlLnJhdGluZ30gKHtwcm9wcy5ob3VzZS5yZXZpZXdzQ291bnR9KVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICA8aDI+QWRkIGRhdGVzIGZvciBwcmljZXM8L2gyPlxuICAgICAgICAgICAgPERhdGVSYW5nZVBpY2tlclxuICAgICAgICAgICAgICBkYXRlc0NoYW5nZWQ9eyhzdGFydERhdGUsIGVuZERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQnLCBzdGFydERhdGUsICdlbmQnLCBlbmREYXRlKTtcbiAgICAgICAgICAgICAgICBzZXREYXRlQ2hvc2VuKHRydWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtkYXRlQ2hvc2VuICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+UHJpY2UgcGVyIG5pZ2h0PC9oMj5cbiAgICAgICAgICAgICAgICA8cD4ke3Byb3BzLmhvdXNlLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDQwJTtcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFzaWRlIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIC8+XG4gICk7XG59O1xuXG5Ib3VzZS5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgY29uc3QgeyBpZCB9ID0gcXVlcnk7XG5cbiAgcmV0dXJuIHtcbiAgICBob3VzZTogaG91c2VzLmZpbHRlcihob3VzZSA9PiBob3VzZS5pZCA9PT0gaWQpWzBdLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG91c2U7XG4iXX0= */\n/*@ sourceURL=/Users/bennywang/Documents/Projects/gamednd/pages/houses/[id].js */")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
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
//# sourceMappingURL=[id].js.e46e7e42c63101c914c6.hot-update.js.map