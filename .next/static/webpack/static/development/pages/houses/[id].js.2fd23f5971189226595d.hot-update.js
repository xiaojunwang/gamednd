webpackHotUpdate("static/development/pages/houses/[id].js",{

/***/ "./pages/houses/[id].js":
/*!******************************!*\
  !*** ./pages/houses/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DateRangePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/DateRangePicker */ "./components/DateRangePicker.js");
/* harmony import */ var _houses_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../houses.json */ "./houses.json");
var _houses_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../houses.json */ "./houses.json", 1);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/bennywang/Documents/Projects/gamednd/pages/houses/[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






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

var House = function House(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      numberOfNightsBetweenDates = _useState[0],
      setNumberOfNightsBetweenDates = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      dateChosen = _useState2[0],
      setDateChosen = _useState2[1]; //create new dateChosen state propery, which defaults to false;


  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: __jsx("div", {
      className: "jsx-3497459092" + " " + 'container',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, props.house.title)), __jsx("article", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Welcome to ", props.house.hostName || 'no name', "'s listing"), __jsx("img", {
      src: props.house.picture,
      width: "100%",
      alt: "House picture",
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, props.house.type, " - ", props.house.town), __jsx("p", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, props.house.title), __jsx("p", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, props.house.rating, " (", props.house.reviewsCount, ")")), __jsx("aside", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Add dates for prices"), __jsx(_components_DateRangePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
      datesChanged: function datesChanged(startDate, endDate) {
        console.log('start', startDate, 'end', endDate);
        setNumberOfNightsBetweenDates(calcNumberOfNightsBetweenDates(startDate, endDate));
        setDateChosen(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), dateChosen && __jsx("div", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Price per night"), __jsx("p", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "$", props.house.price), __jsx("h2", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Total price for booking"), __jsx("p", {
      className: "jsx-3497459092",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "$", (numberOfNightsBetweenDates * props.house.price).toFixed(2)), __jsx("button", {
      className: "jsx-3497459092" + " " + 'reserve',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Reserve"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3497459092",
      __self: this
    }, ".container.jsx-3497459092{display:grid;grid-template-columns:60% 40%;grid-gap:30px;}aside.jsx-3497459092{border:1px solid #ccc;padding:20px;}button.jsx-3497459092{background-color:rgb(255,90,95);color:white;font-size:13px;width:100%;border:none;height:40px;border-radius:4px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvcGFnZXMvaG91c2VzL1tpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVzQixBQUc0QixBQU1TLEFBS1ksYUFWSixTQU1qQixVQUtELEdBSmQsUUFOZ0IsQ0FXQyxhQVZqQixFQVdhLFdBQ0MsWUFDQSxZQUNNLGtCQUNILGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvcGFnZXMvaG91c2VzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgRGF0ZVJhbmdlUGlja2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGF0ZVJhbmdlUGlja2VyJztcbmltcG9ydCBob3VzZXMgZnJvbSAnLi4vLi4vaG91c2VzLmpzb24nO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmNvbnN0IGNhbGNOdW1iZXJPZk5pZ2h0c0JldHdlZW5EYXRlcyA9IChzdGFydERhdGUsIGVuZERhdGUpID0+IHtcbiAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShlbmREYXRlKTtcbiAgbGV0IGRheUNvdW50ID0gMDtcblxuICB3aGlsZSAoZW5kID4gc3RhcnQpIHtcbiAgICBkYXlDb3VudCsrO1xuICAgIHN0YXJ0LnNldERhdGUoc3RhcnQuZ2V0RGF0ZSgpICsgMSk7XG4gIH1cbiAgcmV0dXJuIGRheUNvdW50O1xufTtcblxuY29uc3QgSG91c2UgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtudW1iZXJPZk5pZ2h0c0JldHdlZW5EYXRlcywgc2V0TnVtYmVyT2ZOaWdodHNCZXR3ZWVuRGF0ZXNdID0gdXNlU3RhdGUoXG4gICAgMFxuICApO1xuICBjb25zdCBbZGF0ZUNob3Nlbiwgc2V0RGF0ZUNob3Nlbl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vY3JlYXRlIG5ldyBkYXRlQ2hvc2VuIHN0YXRlIHByb3BlcnksIHdoaWNoIGRlZmF1bHRzIHRvIGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dFxuICAgICAgY29udGVudD17XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPntwcm9wcy5ob3VzZS50aXRsZX08L3RpdGxlPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxoMT5XZWxjb21lIHRvIHtwcm9wcy5ob3VzZS5ob3N0TmFtZSB8fCAnbm8gbmFtZSd9J3MgbGlzdGluZzwvaDE+XG4gICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaG91c2UucGljdHVyZX0gd2lkdGg9JzEwMCUnIGFsdD0nSG91c2UgcGljdHVyZScgLz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7cHJvcHMuaG91c2UudHlwZX0gLSB7cHJvcHMuaG91c2UudG93bn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPntwcm9wcy5ob3VzZS50aXRsZX08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3Byb3BzLmhvdXNlLnJhdGluZ30gKHtwcm9wcy5ob3VzZS5yZXZpZXdzQ291bnR9KVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICA8aDI+QWRkIGRhdGVzIGZvciBwcmljZXM8L2gyPlxuICAgICAgICAgICAgPERhdGVSYW5nZVBpY2tlclxuICAgICAgICAgICAgICBkYXRlc0NoYW5nZWQ9eyhzdGFydERhdGUsIGVuZERhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQnLCBzdGFydERhdGUsICdlbmQnLCBlbmREYXRlKTtcbiAgICAgICAgICAgICAgICBzZXROdW1iZXJPZk5pZ2h0c0JldHdlZW5EYXRlcyhcbiAgICAgICAgICAgICAgICAgIGNhbGNOdW1iZXJPZk5pZ2h0c0JldHdlZW5EYXRlcyhzdGFydERhdGUsIGVuZERhdGUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBzZXREYXRlQ2hvc2VuKHRydWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtkYXRlQ2hvc2VuICYmIChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+UHJpY2UgcGVyIG5pZ2h0PC9oMj5cbiAgICAgICAgICAgICAgICA8cD4ke3Byb3BzLmhvdXNlLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICA8aDI+VG90YWwgcHJpY2UgZm9yIGJvb2tpbmc8L2gyPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgJHsobnVtYmVyT2ZOaWdodHNCZXR3ZWVuRGF0ZXMgKiBwcm9wcy5ob3VzZS5wcmljZSkudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3Jlc2VydmUnPlJlc2VydmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDQwJTtcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFzaWRlIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTAsIDk1KTtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAvPlxuICApO1xufTtcblxuSG91c2UuZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhxdWVyeSk7XG4gIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5O1xuXG4gIHJldHVybiB7XG4gICAgaG91c2U6IGhvdXNlcy5maWx0ZXIoaG91c2UgPT4gaG91c2UuaWQgPT09IGlkKVswXSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXNlO1xuIl19 */\n/*@ sourceURL=/Users/bennywang/Documents/Projects/gamednd/pages/houses/[id].js */")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  });
};

House.getInitialProps = function (_ref) {
  var query = _ref.query;
  console.log(query);
  var id = query.id;
  return {
    house: _houses_json__WEBPACK_IMPORTED_MODULE_4__.filter(function (house) {
      return house.id === id;
    })[0]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (House);

/***/ })

})
//# sourceMappingURL=[id].js.2fd23f5971189226595d.hot-update.js.map