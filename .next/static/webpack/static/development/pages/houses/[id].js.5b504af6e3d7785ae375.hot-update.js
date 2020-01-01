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
        setDateChosen(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1671841858",
      __self: this
    }, ".container.jsx-1671841858{display:grid;grid-template-columns:60% 40%;grid-gap:30px;}aside.jsx-1671841858{border:1px solid #ccc;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvcGFnZXMvaG91c2VzL1tpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNzQixBQUc0QixBQU1TLGFBTFEsU0FNakIsYUFDZixRQU5nQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvYmVubnl3YW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9nYW1lZG5kL3BhZ2VzL2hvdXNlcy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBEYXRlUmFuZ2VQaWNrZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EYXRlUmFuZ2VQaWNrZXInO1xuaW1wb3J0IGhvdXNlcyBmcm9tICcuLi8uLi9ob3VzZXMuanNvbic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY29uc3QgSG91c2UgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtkYXRlQ2hvc2VuLCBzZXREYXRlQ2hvc2VuXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy9jcmVhdGUgbmV3IGRhdGVDaG9zZW4gc3RhdGUgcHJvcGVyeSwgd2hpY2ggZGVmYXVsdHMgdG8gZmFsc2U7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0XG4gICAgICBjb250ZW50PXtcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+e3Byb3BzLmhvdXNlLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8ge3Byb3BzLmhvdXNlLmhvc3ROYW1lIHx8ICdubyBuYW1lJ30ncyBsaXN0aW5nPC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5ob3VzZS5waWN0dXJlfSB3aWR0aD0nNzAlJyBhbHQ9J0hvdXNlIHBpY3R1cmUnIC8+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3Byb3BzLmhvdXNlLnR5cGV9IC0ge3Byb3BzLmhvdXNlLnRvd259XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD57cHJvcHMuaG91c2UudGl0bGV9PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtwcm9wcy5ob3VzZS5yYXRpbmd9ICh7cHJvcHMuaG91c2UucmV2aWV3c0NvdW50fSlcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgPGFzaWRlPlxuICAgICAgICAgICAgPGgyPkFkZCBkYXRlcyBmb3IgcHJpY2VzPC9oMj5cbiAgICAgICAgICAgIDxEYXRlUmFuZ2VQaWNrZXJcbiAgICAgICAgICAgICAgZGF0ZXNDaGFuZ2VkPXsoc3RhcnREYXRlLCBlbmREYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0Jywgc3RhcnREYXRlLCAnZW5kJywgZW5kRGF0ZSk7XG4gICAgICAgICAgICAgICAgc2V0RGF0ZUNob3Nlbih0cnVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgNDAlO1xuICAgICAgICAgICAgICBncmlkLWdhcDogMzBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXNpZGUge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn07XG5cbkhvdXNlLmdldEluaXRpYWxQcm9wcyA9ICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc29sZS5sb2cocXVlcnkpO1xuICBjb25zdCB7IGlkIH0gPSBxdWVyeTtcblxuICByZXR1cm4ge1xuICAgIGhvdXNlOiBob3VzZXMuZmlsdGVyKGhvdXNlID0+IGhvdXNlLmlkID09PSBpZClbMF0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3VzZTtcbiJdfQ== */\n/*@ sourceURL=/Users/bennywang/Documents/Projects/gamednd/pages/houses/[id].js */")),
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
//# sourceMappingURL=[id].js.5b504af6e3d7785ae375.hot-update.js.map