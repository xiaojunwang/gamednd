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
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-day-picker/DayPickerInput */ "./node_modules/react-day-picker/DayPickerInput.js");
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/bennywang/Documents/Projects/gamednd/pages/houses/[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var House = function House(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: __jsx("div", {
      className: "jsx-8918653" + " " + 'container',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-8918653",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, props.house.title)), __jsx("article", {
      className: "jsx-8918653",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-8918653",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Welcome to ", props.house.hostName || 'no name', "'s listing"), __jsx("img", {
      src: props.house.picture,
      width: "70%",
      alt: "House picture",
      className: "jsx-8918653",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-8918653",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, props.house.type, " - ", props.house.town), __jsx("p", {
      className: "jsx-8918653",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, props.house.title), __jsx("p", {
      className: "jsx-8918653",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, props.house.rating, " (", props.house.reviewsCount, ")")), __jsx("aside", {
      className: "jsx-8918653",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-8918653",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Add dates for prices"), __jsx(_components_DateRangePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "8918653",
      __self: this
    }, ".container.jsx-8918653{display:grid;grid-template-columns:60% 40%;grid-gap:30px;}aside.jsx-8918653{border:1px solid #ccc;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvcGFnZXMvaG91c2VzL1tpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJvQixBQUcwQixBQU1TLGFBTFEsU0FNakIsYUFDZixRQU5nQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvYmVubnl3YW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9nYW1lZG5kL3BhZ2VzL2hvdXNlcy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBEYXRlUmFuZ2VQaWNrZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EYXRlUmFuZ2VQaWNrZXInO1xuaW1wb3J0IGhvdXNlcyBmcm9tICcuLi8uLi9ob3VzZXMuanNvbic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBEYXlQaWNrZXJJbnB1dCBmcm9tICdyZWFjdC1kYXktcGlja2VyL0RheVBpY2tlcklucHV0JztcblxuY29uc3QgSG91c2UgPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXRcbiAgICBjb250ZW50PXtcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e3Byb3BzLmhvdXNlLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgPGgxPldlbGNvbWUgdG8ge3Byb3BzLmhvdXNlLmhvc3ROYW1lIHx8ICdubyBuYW1lJ30ncyBsaXN0aW5nPC9oMT5cbiAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaG91c2UucGljdHVyZX0gd2lkdGg9JzcwJScgYWx0PSdIb3VzZSBwaWN0dXJlJyAvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge3Byb3BzLmhvdXNlLnR5cGV9IC0ge3Byb3BzLmhvdXNlLnRvd259XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPntwcm9wcy5ob3VzZS50aXRsZX08L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7cHJvcHMuaG91c2UucmF0aW5nfSAoe3Byb3BzLmhvdXNlLnJldmlld3NDb3VudH0pXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDxhc2lkZT5cbiAgICAgICAgICA8aDI+QWRkIGRhdGVzIGZvciBwcmljZXM8L2gyPlxuICAgICAgICAgIDxEYXRlUmFuZ2VQaWNrZXIgLz5cbiAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDQwJTtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFzaWRlIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgfVxuICAvPlxuKTtcblxuSG91c2UuZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhxdWVyeSk7XG4gIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5O1xuXG4gIHJldHVybiB7XG4gICAgaG91c2U6IGhvdXNlcy5maWx0ZXIoaG91c2UgPT4gaG91c2UuaWQgPT09IGlkKVswXSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXNlO1xuIl19 */\n/*@ sourceURL=/Users/bennywang/Documents/Projects/gamednd/pages/houses/[id].js */")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
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
//# sourceMappingURL=[id].js.a08215742d8e653fba62.hot-update.js.map