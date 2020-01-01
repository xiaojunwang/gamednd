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
      className: "jsx-1671841858" + " " + 'container',
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
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, props.house.title)), __jsx("article", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Welcome to ", props.house.hostName || 'no name', "'s listing"), __jsx("img", {
      src: props.house.picture,
      width: "100%",
      alt: "House picture",
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, props.house.type, " - ", props.house.town), __jsx("p", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, props.house.title), __jsx("p", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, props.house.rating, " (", props.house.reviewsCount, ")")), __jsx("aside", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1671841858",
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
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Price per night"), __jsx("p", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "$", props.house.price), __jsx("h2", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Total price for booking"), __jsx("p", {
      className: "jsx-1671841858",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "$", (numberOfNightsBetweenDates * props.house.price).toFixed(2)), __jsx("button", {
      className: "jsx-1671841858" + " " + 'reserve',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Reserve"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1671841858",
      __self: this
    }, ".container.jsx-1671841858{display:grid;grid-template-columns:60% 40%;grid-gap:30px;}aside.jsx-1671841858{border:1px solid #ccc;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvcGFnZXMvaG91c2VzL1tpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVzQixBQUc0QixBQU1TLGFBTFEsU0FNakIsYUFDZixRQU5nQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvYmVubnl3YW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9nYW1lZG5kL3BhZ2VzL2hvdXNlcy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IERhdGVSYW5nZVBpY2tlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RhdGVSYW5nZVBpY2tlcic7XG5pbXBvcnQgaG91c2VzIGZyb20gJy4uLy4uL2hvdXNlcy5qc29uJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jb25zdCBjYWxjTnVtYmVyT2ZOaWdodHNCZXR3ZWVuRGF0ZXMgPSAoc3RhcnREYXRlLCBlbmREYXRlKSA9PiB7XG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc3RhcnREYXRlKTtcbiAgY29uc3QgZW5kID0gbmV3IERhdGUoZW5kRGF0ZSk7XG4gIGxldCBkYXlDb3VudCA9IDA7XG5cbiAgd2hpbGUgKGVuZCA+IHN0YXJ0KSB7XG4gICAgZGF5Q291bnQrKztcbiAgICBzdGFydC5zZXREYXRlKHN0YXJ0LmdldERhdGUoKSArIDEpO1xuICB9XG4gIHJldHVybiBkYXlDb3VudDtcbn07XG5cbmNvbnN0IEhvdXNlID0gcHJvcHMgPT4ge1xuICBjb25zdCBbbnVtYmVyT2ZOaWdodHNCZXR3ZWVuRGF0ZXMsIHNldE51bWJlck9mTmlnaHRzQmV0d2VlbkRhdGVzXSA9IHVzZVN0YXRlKFxuICAgIDBcbiAgKTtcbiAgY29uc3QgW2RhdGVDaG9zZW4sIHNldERhdGVDaG9zZW5dID0gdXNlU3RhdGUoZmFsc2UpOyAvL2NyZWF0ZSBuZXcgZGF0ZUNob3NlbiBzdGF0ZSBwcm9wZXJ5LCB3aGljaCBkZWZhdWx0cyB0byBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIGNvbnRlbnQ9e1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57cHJvcHMuaG91c2UudGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8aDE+V2VsY29tZSB0byB7cHJvcHMuaG91c2UuaG9zdE5hbWUgfHwgJ25vIG5hbWUnfSdzIGxpc3Rpbmc8L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmhvdXNlLnBpY3R1cmV9IHdpZHRoPScxMDAlJyBhbHQ9J0hvdXNlIHBpY3R1cmUnIC8+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3Byb3BzLmhvdXNlLnR5cGV9IC0ge3Byb3BzLmhvdXNlLnRvd259XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD57cHJvcHMuaG91c2UudGl0bGV9PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtwcm9wcy5ob3VzZS5yYXRpbmd9ICh7cHJvcHMuaG91c2UucmV2aWV3c0NvdW50fSlcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgPGFzaWRlPlxuICAgICAgICAgICAgPGgyPkFkZCBkYXRlcyBmb3IgcHJpY2VzPC9oMj5cbiAgICAgICAgICAgIDxEYXRlUmFuZ2VQaWNrZXJcbiAgICAgICAgICAgICAgZGF0ZXNDaGFuZ2VkPXsoc3RhcnREYXRlLCBlbmREYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0Jywgc3RhcnREYXRlLCAnZW5kJywgZW5kRGF0ZSk7XG4gICAgICAgICAgICAgICAgc2V0TnVtYmVyT2ZOaWdodHNCZXR3ZWVuRGF0ZXMoXG4gICAgICAgICAgICAgICAgICBjYWxjTnVtYmVyT2ZOaWdodHNCZXR3ZWVuRGF0ZXMoc3RhcnREYXRlLCBlbmREYXRlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc2V0RGF0ZUNob3Nlbih0cnVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZGF0ZUNob3NlbiAmJiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPlByaWNlIHBlciBuaWdodDwvaDI+XG4gICAgICAgICAgICAgICAgPHA+JHtwcm9wcy5ob3VzZS5wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgPGgyPlRvdGFsIHByaWNlIGZvciBib29raW5nPC9oMj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICR7KG51bWJlck9mTmlnaHRzQmV0d2VlbkRhdGVzICogcHJvcHMuaG91c2UucHJpY2UpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdyZXNlcnZlJz5SZXNlcnZlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSA0MCU7XG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAvPlxuICApO1xufTtcblxuSG91c2UuZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhxdWVyeSk7XG4gIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5O1xuXG4gIHJldHVybiB7XG4gICAgaG91c2U6IGhvdXNlcy5maWx0ZXIoaG91c2UgPT4gaG91c2UuaWQgPT09IGlkKVswXSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXNlO1xuIl19 */\n/*@ sourceURL=/Users/bennywang/Documents/Projects/gamednd/pages/houses/[id].js */")),
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
//# sourceMappingURL=[id].js.099ee2c9a84b97eb2af5.hot-update.js.map