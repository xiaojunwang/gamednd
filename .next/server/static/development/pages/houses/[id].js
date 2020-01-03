module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DateRangePicker.js":
/*!***************************************!*\
  !*** ./components/DateRangePicker.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-day-picker/DayPickerInput */ "react-day-picker/DayPickerInput");
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-day-picker/lib/style.css */ "./node_modules/react-day-picker/lib/style.css");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-day-picker */ "react-day-picker");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/format */ "date-fns/format");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns_parse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/parse */ "date-fns/parse");
/* harmony import */ var date_fns_parse__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns_parse__WEBPACK_IMPORTED_MODULE_6__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const parseDate = (str, format, locale) => {
  const parsed = date_fns_parse__WEBPACK_IMPORTED_MODULE_6___default()(str, format, new Date(), {
    locale
  });
  return react_day_picker__WEBPACK_IMPORTED_MODULE_4__["DateUtils"].isDate(parsed) ? parsed : null;
};

const formatDate = (date, format, locale) => date_fns_format__WEBPACK_IMPORTED_MODULE_5___default()(date, format, {
  locale
});

const format = 'dd MMM yyyy';
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const numberOfNightsBetweenDates = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let dayCount = 0;

  while (end > start) {
    dayCount++;
    start.setDate(start.getDate() + 1);
  }

  return dayCount;
};

/* harmony default export */ __webpack_exports__["default"] = (({
  datesChanged,
  bookedDates
}) => {
  const {
    0: startDate,
    1: setStartDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(today);
  const {
    0: endDate,
    1: setEndDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(tomorrow);
  bookedDates = bookedDates.map(date => {
    return new Date(date);
  });
  return __jsx("div", {
    className: "jsx-2233285091" + " " + 'date-range-picker-container'
  }, __jsx("div", {
    className: "jsx-2233285091"
  }, __jsx("label", {
    className: "jsx-2233285091"
  }, "From:"), __jsx(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_2___default.a, {
    formatDate: formatDate,
    format: format,
    parseDate: parseDate,
    placeholder: `${date_fns_format__WEBPACK_IMPORTED_MODULE_5___default()(new Date(), format)}`,
    dayPickerProps: {
      modifiers: {
        disabled: [...bookedDates, {
          before: new Date()
        }]
      }
    },
    onDayChange: day => {
      setStartDate(day);
      const newEndDate = new Date(day);

      if (numberOfNightsBetweenDates(day, endDate) < 1) {
        newEndDate.setDate(newEndDate.getDate() + 1);
        setEndDate(newEndDate);
      }

      datesChanged(day, newEndDate);
    }
  })), __jsx("div", {
    className: "jsx-2233285091"
  }, __jsx("label", {
    className: "jsx-2233285091"
  }, "To:"), __jsx(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_2___default.a, {
    formatDate: formatDate,
    format: format,
    parseDate: parseDate,
    placeholder: `${date_fns_format__WEBPACK_IMPORTED_MODULE_5___default()(new Date(), format)}`,
    dayPickerProps: {
      modifiers: {
        disabled: [startDate, ...bookedDates, {
          before: startDate
        }]
      }
    },
    onDayChange: day => {
      setEndDate(day);
      datesChanged(startDate, day);
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1123662568"
  }, ".date-range-picker-container.jsx-2233285091 div.jsx-2233285091{display:grid;border:1px solid #ddd;grid-template-columns:30% 70%;padding:10px;}label.jsx-2233285091{padding-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvY29tcG9uZW50cy9EYXRlUmFuZ2VQaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdrQixBQUd3QixBQU1JLGFBTEssSUFNeEIsa0JBTGdDLDhCQUNqQixhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvY29tcG9uZW50cy9EYXRlUmFuZ2VQaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXlQaWNrZXJJbnB1dCBmcm9tICdyZWFjdC1kYXktcGlja2VyL0RheVBpY2tlcklucHV0JztcbmltcG9ydCAncmVhY3QtZGF5LXBpY2tlci9saWIvc3R5bGUuY3NzJztcbmltcG9ydCB7IERhdGVVdGlscyB9IGZyb20gJ3JlYWN0LWRheS1waWNrZXInO1xuXG5pbXBvcnQgZGF0ZUZuc0Zvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IGRhdGVGbnNQYXJzZSBmcm9tICdkYXRlLWZucy9wYXJzZSc7XG5cbmNvbnN0IHBhcnNlRGF0ZSA9IChzdHIsIGZvcm1hdCwgbG9jYWxlKSA9PiB7XG4gIGNvbnN0IHBhcnNlZCA9IGRhdGVGbnNQYXJzZShzdHIsIGZvcm1hdCwgbmV3IERhdGUoKSwgeyBsb2NhbGUgfSk7XG4gIHJldHVybiBEYXRlVXRpbHMuaXNEYXRlKHBhcnNlZCkgPyBwYXJzZWQgOiBudWxsO1xufTtcblxuY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlLCBmb3JtYXQsIGxvY2FsZSkgPT5cbiAgZGF0ZUZuc0Zvcm1hdChkYXRlLCBmb3JtYXQsIHsgbG9jYWxlIH0pO1xuXG5jb25zdCBmb3JtYXQgPSAnZGQgTU1NIHl5eXknO1xuXG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5jb25zdCB0b21vcnJvdyA9IG5ldyBEYXRlKHRvZGF5KTtcbnRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XG5cbmNvbnN0IG51bWJlck9mTmlnaHRzQmV0d2VlbkRhdGVzID0gKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkgPT4ge1xuICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gIGNvbnN0IGVuZCA9IG5ldyBEYXRlKGVuZERhdGUpO1xuICBsZXQgZGF5Q291bnQgPSAwO1xuXG4gIHdoaWxlIChlbmQgPiBzdGFydCkge1xuICAgIGRheUNvdW50Kys7XG4gICAgc3RhcnQuc2V0RGF0ZShzdGFydC5nZXREYXRlKCkgKyAxKTtcbiAgfVxuICByZXR1cm4gZGF5Q291bnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoeyBkYXRlc0NoYW5nZWQsIGJvb2tlZERhdGVzIH0pID0+IHtcbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKHRvZGF5KTtcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUodG9tb3Jyb3cpO1xuXG4gIGJvb2tlZERhdGVzID0gYm9va2VkRGF0ZXMubWFwKGRhdGUgPT4ge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0ZS1yYW5nZS1waWNrZXItY29udGFpbmVyJz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5Gcm9tOjwvbGFiZWw+XG4gICAgICAgIDxEYXlQaWNrZXJJbnB1dFxuICAgICAgICAgIGZvcm1hdERhdGU9e2Zvcm1hdERhdGV9XG4gICAgICAgICAgZm9ybWF0PXtmb3JtYXR9XG4gICAgICAgICAgcGFyc2VEYXRlPXtwYXJzZURhdGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake2RhdGVGbnNGb3JtYXQobmV3IERhdGUoKSwgZm9ybWF0KX1gfVxuICAgICAgICAgIGRheVBpY2tlclByb3BzPXt7XG4gICAgICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IFtcbiAgICAgICAgICAgICAgICAuLi5ib29rZWREYXRlcyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBiZWZvcmU6IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRGF5Q2hhbmdlPXtkYXkgPT4ge1xuICAgICAgICAgICAgc2V0U3RhcnREYXRlKGRheSk7XG4gICAgICAgICAgICBjb25zdCBuZXdFbmREYXRlID0gbmV3IERhdGUoZGF5KTtcbiAgICAgICAgICAgIGlmIChudW1iZXJPZk5pZ2h0c0JldHdlZW5EYXRlcyhkYXksIGVuZERhdGUpIDwgMSkge1xuICAgICAgICAgICAgICBuZXdFbmREYXRlLnNldERhdGUobmV3RW5kRGF0ZS5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgICAgICAgc2V0RW5kRGF0ZShuZXdFbmREYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGVzQ2hhbmdlZChkYXksIG5ld0VuZERhdGUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5Ubzo8L2xhYmVsPlxuICAgICAgICA8RGF5UGlja2VySW5wdXRcbiAgICAgICAgICBmb3JtYXREYXRlPXtmb3JtYXREYXRlfVxuICAgICAgICAgIGZvcm1hdD17Zm9ybWF0fVxuICAgICAgICAgIHBhcnNlRGF0ZT17cGFyc2VEYXRlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtgJHtkYXRlRm5zRm9ybWF0KG5ldyBEYXRlKCksIGZvcm1hdCl9YH1cbiAgICAgICAgICBkYXlQaWNrZXJQcm9wcz17e1xuICAgICAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgICAgIGRpc2FibGVkOiBbXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgICAgICAgIC4uLmJvb2tlZERhdGVzLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZm9yZTogc3RhcnREYXRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkRheUNoYW5nZT17ZGF5ID0+IHtcbiAgICAgICAgICAgIHNldEVuZERhdGUoZGF5KTtcbiAgICAgICAgICAgIGRhdGVzQ2hhbmdlZChzdGFydERhdGUsIGRheSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5kYXRlLXJhbmdlLXBpY2tlci1jb250YWluZXIgZGl2IHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNzAlO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuRGF5UGlja2VySW5wdXQgaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/bennywang/Documents/Projects/gamednd/components/DateRangePicker.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2975770914"
  }, ".DayPickerInput input{width:120px;padding:10px;font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvY29tcG9uZW50cy9EYXRlUmFuZ2VQaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEd5QixBQUd1QixZQUNDLGFBQ0UsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2Jlbm55d2FuZy9Eb2N1bWVudHMvUHJvamVjdHMvZ2FtZWRuZC9jb21wb25lbnRzL0RhdGVSYW5nZVBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERheVBpY2tlcklucHV0IGZyb20gJ3JlYWN0LWRheS1waWNrZXIvRGF5UGlja2VySW5wdXQnO1xuaW1wb3J0ICdyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgRGF0ZVV0aWxzIH0gZnJvbSAncmVhY3QtZGF5LXBpY2tlcic7XG5cbmltcG9ydCBkYXRlRm5zRm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgZGF0ZUZuc1BhcnNlIGZyb20gJ2RhdGUtZm5zL3BhcnNlJztcblxuY29uc3QgcGFyc2VEYXRlID0gKHN0ciwgZm9ybWF0LCBsb2NhbGUpID0+IHtcbiAgY29uc3QgcGFyc2VkID0gZGF0ZUZuc1BhcnNlKHN0ciwgZm9ybWF0LCBuZXcgRGF0ZSgpLCB7IGxvY2FsZSB9KTtcbiAgcmV0dXJuIERhdGVVdGlscy5pc0RhdGUocGFyc2VkKSA/IHBhcnNlZCA6IG51bGw7XG59O1xuXG5jb25zdCBmb3JtYXREYXRlID0gKGRhdGUsIGZvcm1hdCwgbG9jYWxlKSA9PlxuICBkYXRlRm5zRm9ybWF0KGRhdGUsIGZvcm1hdCwgeyBsb2NhbGUgfSk7XG5cbmNvbnN0IGZvcm1hdCA9ICdkZCBNTU0geXl5eSc7XG5cbmNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbmNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUodG9kYXkpO1xudG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcblxuY29uc3QgbnVtYmVyT2ZOaWdodHNCZXR3ZWVuRGF0ZXMgPSAoc3RhcnREYXRlLCBlbmREYXRlKSA9PiB7XG4gIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc3RhcnREYXRlKTtcbiAgY29uc3QgZW5kID0gbmV3IERhdGUoZW5kRGF0ZSk7XG4gIGxldCBkYXlDb3VudCA9IDA7XG5cbiAgd2hpbGUgKGVuZCA+IHN0YXJ0KSB7XG4gICAgZGF5Q291bnQrKztcbiAgICBzdGFydC5zZXREYXRlKHN0YXJ0LmdldERhdGUoKSArIDEpO1xuICB9XG4gIHJldHVybiBkYXlDb3VudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGRhdGVzQ2hhbmdlZCwgYm9va2VkRGF0ZXMgfSkgPT4ge1xuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUodG9kYXkpO1xuICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZSh0b21vcnJvdyk7XG5cbiAgYm9va2VkRGF0ZXMgPSBib29rZWREYXRlcy5tYXAoZGF0ZSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdkYXRlLXJhbmdlLXBpY2tlci1jb250YWluZXInPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPkZyb206PC9sYWJlbD5cbiAgICAgICAgPERheVBpY2tlcklucHV0XG4gICAgICAgICAgZm9ybWF0RGF0ZT17Zm9ybWF0RGF0ZX1cbiAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdH1cbiAgICAgICAgICBwYXJzZURhdGU9e3BhcnNlRGF0ZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17YCR7ZGF0ZUZuc0Zvcm1hdChuZXcgRGF0ZSgpLCBmb3JtYXQpfWB9XG4gICAgICAgICAgZGF5UGlja2VyUHJvcHM9e3tcbiAgICAgICAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICAgICAgICBkaXNhYmxlZDogW1xuICAgICAgICAgICAgICAgIC4uLmJvb2tlZERhdGVzLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJlZm9yZTogbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25EYXlDaGFuZ2U9e2RheSA9PiB7XG4gICAgICAgICAgICBzZXRTdGFydERhdGUoZGF5KTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0VuZERhdGUgPSBuZXcgRGF0ZShkYXkpO1xuICAgICAgICAgICAgaWYgKG51bWJlck9mTmlnaHRzQmV0d2VlbkRhdGVzKGRheSwgZW5kRGF0ZSkgPCAxKSB7XG4gICAgICAgICAgICAgIG5ld0VuZERhdGUuc2V0RGF0ZShuZXdFbmREYXRlLmdldERhdGUoKSArIDEpO1xuICAgICAgICAgICAgICBzZXRFbmREYXRlKG5ld0VuZERhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0ZXNDaGFuZ2VkKGRheSwgbmV3RW5kRGF0ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPlRvOjwvbGFiZWw+XG4gICAgICAgIDxEYXlQaWNrZXJJbnB1dFxuICAgICAgICAgIGZvcm1hdERhdGU9e2Zvcm1hdERhdGV9XG4gICAgICAgICAgZm9ybWF0PXtmb3JtYXR9XG4gICAgICAgICAgcGFyc2VEYXRlPXtwYXJzZURhdGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake2RhdGVGbnNGb3JtYXQobmV3IERhdGUoKSwgZm9ybWF0KX1gfVxuICAgICAgICAgIGRheVBpY2tlclByb3BzPXt7XG4gICAgICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IFtcbiAgICAgICAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgICAgICAgLi4uYm9va2VkRGF0ZXMsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYmVmb3JlOiBzdGFydERhdGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRGF5Q2hhbmdlPXtkYXkgPT4ge1xuICAgICAgICAgICAgc2V0RW5kRGF0ZShkYXkpO1xuICAgICAgICAgICAgZGF0ZXNDaGFuZ2VkKHN0YXJ0RGF0ZSwgZGF5KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmRhdGUtcmFuZ2UtcGlja2VyLWNvbnRhaW5lciBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA3MCU7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5EYXlQaWNrZXJJbnB1dCBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/bennywang/Documents/Projects/gamednd/components/DateRangePicker.js */"));
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! easy-peasy */ "easy-peasy");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Header = () => {
  const setShowLoginModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_4__["useStoreActions"])(actions => actions.modals.setShowLoginModal);
  const setShowRegistrationModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_4__["useStoreActions"])(actions => actions.modals.setShowRegistrationModal);
  const user = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_4__["useStoreState"])(state => state.user.user);
  const setUser = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_4__["useStoreActions"])(actions => actions.user.setUser);
  return __jsx("div", {
    className: "jsx-787439034" + " " + 'nav-container'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-787439034"
  }, __jsx("img", {
    src: "/img/logo.png",
    alt: "",
    className: "jsx-787439034"
  }))), __jsx("nav", {
    className: "jsx-787439034"
  }, __jsx("ul", {
    className: "jsx-787439034"
  }, user ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    className: "jsx-787439034" + " " + 'username'
  }, user), __jsx("li", {
    className: "jsx-787439034"
  }, __jsx("a", {
    href: "#",
    onClick: async () => {
      await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/auth/logout');
      setUser(null);
    },
    className: "jsx-787439034"
  }, "Log Out"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    className: "jsx-787439034"
  }, __jsx("a", {
    href: "#",
    onClick: () => setShowRegistrationModal(),
    className: "jsx-787439034"
  }, "Sign up")), __jsx("li", {
    className: "jsx-787439034"
  }, __jsx("a", {
    href: "#",
    onClick: () => setShowLoginModal(),
    className: "jsx-787439034"
  }, "Log in"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "787439034"
  }, "ul.jsx-787439034{margin:0;padding:0;}li.jsx-787439034{display:block;float:left;}a.jsx-787439034{-webkit-text-decoration:none;text-decoration:none;display:block;margin-right:15px;color:#333;}nav.jsx-787439034 a.jsx-787439034{padding:1em 0.5em;}.nav-container.jsx-787439034{border-bottom:1px solid #eee;height:100px;}img.jsx-787439034{float:left;}ul.jsx-787439034{float:right;}username.jsx-787439034{padding:1em 0.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURrQixBQUdvQixBQUtLLEFBS08sQUFPSCxBQUlXLEFBS2xCLEFBSUMsQUFJTSxTQWpDUixFQTBCWixDQUlBLEVBekJhLElBWWIsQUFpQkEsQ0FqQ0EsTUFLQSxJQWVlLGFBQ2YsUUFaZ0IsY0FDSSxrQkFDUCxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVN0b3JlQWN0aW9ucywgdXNlU3RvcmVTdGF0ZSB9IGZyb20gJ2Vhc3ktcGVhc3knO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNldFNob3dMb2dpbk1vZGFsID0gdXNlU3RvcmVBY3Rpb25zKFxuICAgIGFjdGlvbnMgPT4gYWN0aW9ucy5tb2RhbHMuc2V0U2hvd0xvZ2luTW9kYWxcbiAgKTtcbiAgY29uc3Qgc2V0U2hvd1JlZ2lzdHJhdGlvbk1vZGFsID0gdXNlU3RvcmVBY3Rpb25zKFxuICAgIGFjdGlvbnMgPT4gYWN0aW9ucy5tb2RhbHMuc2V0U2hvd1JlZ2lzdHJhdGlvbk1vZGFsXG4gICk7XG5cbiAgY29uc3QgdXNlciA9IHVzZVN0b3JlU3RhdGUoc3RhdGUgPT4gc3RhdGUudXNlci51c2VyKTtcblxuICBjb25zdCBzZXRVc2VyID0gdXNlU3RvcmVBY3Rpb25zKGFjdGlvbnMgPT4gYWN0aW9ucy51c2VyLnNldFVzZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J25hdi1jb250YWluZXInPlxuICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgIDxhPlxuICAgICAgICAgIDxpbWcgc3JjPScvaW1nL2xvZ28ucG5nJyBhbHQ9JycgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8bmF2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd1c2VybmFtZSc+e3VzZXJ9PC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPScjJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2F1dGgvbG9nb3V0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIExvZyBPdXRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIG9uQ2xpY2s9eygpID0+IHNldFNob3dSZWdpc3RyYXRpb25Nb2RhbCgpfT5cbiAgICAgICAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPScjJyBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TG9naW5Nb2RhbCgpfT5cbiAgICAgICAgICAgICAgICAgIExvZyBpblxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICB1bCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2IGEge1xuICAgICAgICAgIHBhZGRpbmc6IDFlbSAwLjVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXYtY29udGFpbmVyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICB1c2VybmFtZSB7XG4gICAgICAgICAgcGFkZGluZzogMWVtIDAuNWVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/bennywang/Documents/Projects/gamednd/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! easy-peasy */ "easy-peasy");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ "./components/Modal.js");
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginModal */ "./components/LoginModal.js");
/* harmony import */ var _RegistrationModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RegistrationModal */ "./components/RegistrationModal.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Layout = props => {
  const showModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreState"])(state => state.modals.showModal);
  const showLoginModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreState"])(state => state.modals.showLoginModal);
  const showRegistrationModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreState"])(state => state.modals.showRegistrationModal);
  const setHideModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreActions"])(actions => actions.modals.setHideModal);
  const setShowRegistrationModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreActions"])(actions => actions.modals.setShowRegistrationModal);
  const setShowLoginModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreActions"])(actions => actions.modals.setShowLoginModal);
  return __jsx("div", {
    className: "jsx-3091886797"
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("main", {
    className: "jsx-3091886797"
  }, props.content), showModal && __jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    close: () => setHideModal()
  }, showLoginModal && __jsx(_LoginModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    showSignup: () => {
      setShowRegistrationModal();
    }
  }), showRegistrationModal && __jsx(_RegistrationModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    showLogin: () => {
      setShowLoginModal();
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2464272997"
  }, "body{margin:0;font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;font-size:14px;line-height:1.5;color:#333;}button{background-color:rgb(255,90,95);color:white;font-size:13px;width:100%;border:none;height:40px;border-radius:4px;cursor:pointer;}input[type='text'],input[type='email'],input[type='password']{display:block;padding:20px;font-size:20px !important;width:100%;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUR5QixBQUdvQixBQVN5QixBQVlwQixTQWxCRixLQW1CQyxhQUNhLEtBYmQsWUFDRyxTQWFKLE1BWkEsS0FhVyxNQVpWLFlBQ0EsSUFZTSxRQVhBLFVBWUksUUFYUCxjQVlJLENBWHJCLGdCQWJpQixFQXlCakIsYUF4QmtCLGdCQUNMLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2Jlbm55d2FuZy9Eb2N1bWVudHMvUHJvamVjdHMvZ2FtZWRuZC9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0b3JlU3RhdGUsIHVzZVN0b3JlQWN0aW9ucyB9IGZyb20gJ2Vhc3ktcGVhc3knO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgTG9naW5Nb2RhbCBmcm9tICcuL0xvZ2luTW9kYWwnO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbk1vZGFsIGZyb20gJy4vUmVnaXN0cmF0aW9uTW9kYWwnO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHNob3dNb2RhbCA9IHVzZVN0b3JlU3RhdGUoc3RhdGUgPT4gc3RhdGUubW9kYWxzLnNob3dNb2RhbCk7XG4gIGNvbnN0IHNob3dMb2dpbk1vZGFsID0gdXNlU3RvcmVTdGF0ZShzdGF0ZSA9PiBzdGF0ZS5tb2RhbHMuc2hvd0xvZ2luTW9kYWwpO1xuICBjb25zdCBzaG93UmVnaXN0cmF0aW9uTW9kYWwgPSB1c2VTdG9yZVN0YXRlKFxuICAgIHN0YXRlID0+IHN0YXRlLm1vZGFscy5zaG93UmVnaXN0cmF0aW9uTW9kYWxcbiAgKTtcblxuICBjb25zdCBzZXRIaWRlTW9kYWwgPSB1c2VTdG9yZUFjdGlvbnMoYWN0aW9ucyA9PiBhY3Rpb25zLm1vZGFscy5zZXRIaWRlTW9kYWwpO1xuICBjb25zdCBzZXRTaG93UmVnaXN0cmF0aW9uTW9kYWwgPSB1c2VTdG9yZUFjdGlvbnMoXG4gICAgYWN0aW9ucyA9PiBhY3Rpb25zLm1vZGFscy5zZXRTaG93UmVnaXN0cmF0aW9uTW9kYWxcbiAgKTtcbiAgY29uc3Qgc2V0U2hvd0xvZ2luTW9kYWwgPSB1c2VTdG9yZUFjdGlvbnMoXG4gICAgYWN0aW9ucyA9PiBhY3Rpb25zLm1vZGFscy5zZXRTaG93TG9naW5Nb2RhbFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiA8SGVhZD5cbiAgICAgICAgPHNjcmlwdCBzcmM9J2h0dHBzOi8vanMuc3RyaXBlLmNvbS92My8nPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPiAqL31cblxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4+e3Byb3BzLmNvbnRlbnR9PC9tYWluPlxuXG4gICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgPE1vZGFsIGNsb3NlPXsoKSA9PiBzZXRIaWRlTW9kYWwoKX0+XG4gICAgICAgICAge3Nob3dMb2dpbk1vZGFsICYmIChcbiAgICAgICAgICAgIDxMb2dpbk1vZGFsXG4gICAgICAgICAgICAgIHNob3dTaWdudXA9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTaG93UmVnaXN0cmF0aW9uTW9kYWwoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2hvd1JlZ2lzdHJhdGlvbk1vZGFsICYmIChcbiAgICAgICAgICAgIDxSZWdpc3RyYXRpb25Nb2RhbFxuICAgICAgICAgICAgICBzaG93TG9naW49eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTaG93TG9naW5Nb2RhbCgpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L01vZGFsPlxuICAgICAgKX1cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDkwLCA5NSk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRbdHlwZT0ndGV4dCddLFxuICAgICAgICBpbnB1dFt0eXBlPSdlbWFpbCddLFxuICAgICAgICBpbnB1dFt0eXBlPSdwYXNzd29yZCddIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDU2ZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/bennywang/Documents/Projects/gamednd/components/Layout.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "103826465"
  }, "main.jsx-3091886797{position:relative;max-width:56em;background-color:white;padding:2em;margin:0 auto;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZrQixBQUc2QixrQkFDSCxlQUNRLHVCQUNYLFlBQ0UsY0FDUSxzQkFDeEIiLCJmaWxlIjoiL1VzZXJzL2Jlbm55d2FuZy9Eb2N1bWVudHMvUHJvamVjdHMvZ2FtZWRuZC9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0b3JlU3RhdGUsIHVzZVN0b3JlQWN0aW9ucyB9IGZyb20gJ2Vhc3ktcGVhc3knO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgTG9naW5Nb2RhbCBmcm9tICcuL0xvZ2luTW9kYWwnO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbk1vZGFsIGZyb20gJy4vUmVnaXN0cmF0aW9uTW9kYWwnO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHNob3dNb2RhbCA9IHVzZVN0b3JlU3RhdGUoc3RhdGUgPT4gc3RhdGUubW9kYWxzLnNob3dNb2RhbCk7XG4gIGNvbnN0IHNob3dMb2dpbk1vZGFsID0gdXNlU3RvcmVTdGF0ZShzdGF0ZSA9PiBzdGF0ZS5tb2RhbHMuc2hvd0xvZ2luTW9kYWwpO1xuICBjb25zdCBzaG93UmVnaXN0cmF0aW9uTW9kYWwgPSB1c2VTdG9yZVN0YXRlKFxuICAgIHN0YXRlID0+IHN0YXRlLm1vZGFscy5zaG93UmVnaXN0cmF0aW9uTW9kYWxcbiAgKTtcblxuICBjb25zdCBzZXRIaWRlTW9kYWwgPSB1c2VTdG9yZUFjdGlvbnMoYWN0aW9ucyA9PiBhY3Rpb25zLm1vZGFscy5zZXRIaWRlTW9kYWwpO1xuICBjb25zdCBzZXRTaG93UmVnaXN0cmF0aW9uTW9kYWwgPSB1c2VTdG9yZUFjdGlvbnMoXG4gICAgYWN0aW9ucyA9PiBhY3Rpb25zLm1vZGFscy5zZXRTaG93UmVnaXN0cmF0aW9uTW9kYWxcbiAgKTtcbiAgY29uc3Qgc2V0U2hvd0xvZ2luTW9kYWwgPSB1c2VTdG9yZUFjdGlvbnMoXG4gICAgYWN0aW9ucyA9PiBhY3Rpb25zLm1vZGFscy5zZXRTaG93TG9naW5Nb2RhbFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiA8SGVhZD5cbiAgICAgICAgPHNjcmlwdCBzcmM9J2h0dHBzOi8vanMuc3RyaXBlLmNvbS92My8nPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPiAqL31cblxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4+e3Byb3BzLmNvbnRlbnR9PC9tYWluPlxuXG4gICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgPE1vZGFsIGNsb3NlPXsoKSA9PiBzZXRIaWRlTW9kYWwoKX0+XG4gICAgICAgICAge3Nob3dMb2dpbk1vZGFsICYmIChcbiAgICAgICAgICAgIDxMb2dpbk1vZGFsXG4gICAgICAgICAgICAgIHNob3dTaWdudXA9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTaG93UmVnaXN0cmF0aW9uTW9kYWwoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2hvd1JlZ2lzdHJhdGlvbk1vZGFsICYmIChcbiAgICAgICAgICAgIDxSZWdpc3RyYXRpb25Nb2RhbFxuICAgICAgICAgICAgICBzaG93TG9naW49eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTaG93TG9naW5Nb2RhbCgpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L01vZGFsPlxuICAgICAgKX1cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDkwLCA5NSk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRbdHlwZT0ndGV4dCddLFxuICAgICAgICBpbnB1dFt0eXBlPSdlbWFpbCddLFxuICAgICAgICBpbnB1dFt0eXBlPSdwYXNzd29yZCddIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDU2ZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/bennywang/Documents/Projects/gamednd/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/LoginModal.js":
/*!**********************************!*\
  !*** ./components/LoginModal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! easy-peasy */ "easy-peasy");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const setUser = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreActions"])(actions => actions.user.setUser);
  const setHideModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreActions"])(actions => actions.modals.setHideModal);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", null, "Log In"), __jsx("div", null, __jsx("form", {
    onSubmit: async event => {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/auth/login', {
          email,
          password
        });

        if (response.data.status === 'error') {
          alert(response.data.message);
          return;
        }

        setUser(email);
        setHideModal();
      } catch (error) {
        alert(error.response.data.message);
        return;
      }

      event.preventDefault();
    }
  }, __jsx("input", {
    id: "email",
    type: "email",
    placeholder: "Email address",
    onChange: event => setEmail(event.target.value)
  }), __jsx("input", {
    id: "password",
    type: "password",
    placeholder: "Password",
    onChange: event => setPassword(event.target.value)
  }), __jsx("button", null, "Log in")), __jsx("p", null, "Don't have an account yet?", ' ', __jsx("a", {
    href: "#",
    onClick: () => props.showSignup()
  }, "Sign up"))));
});

/***/ }),

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bennywang/Documents/Projects/gamednd/components/Modal.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (props => __jsx("div", {
  className: "jsx-3099105251" + " " + 'nav-container',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  onClick: () => props.close(),
  className: "jsx-3099105251" + " " + 'modal-background',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-3099105251" + " " + 'modal',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3099105251",
  __self: undefined
}, ".modal-background{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.3);}.modal{position:absolute;left:50%;top:50%;width:calc(100vw - 4em);max-width:32em;max-height:calc(100vh - 4em);overflow:auto;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:1em;border-radius:0.2em;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvY29tcG9uZW50cy9Nb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLdUIsQUFHd0IsQUFTRyxlQVJaLEdBU0csR0FSRixNQVNDLENBUkcsT0FTYSxJQVJaLFlBQ2tCLFFBUWYsZUFDYyxJQVIvQix5QkFTZ0IsY0FDa0IseUdBQ3BCLFlBQ1Esb0JBQ0gsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvY29tcG9uZW50cy9Nb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J25hdi1jb250YWluZXInPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1iYWNrZ3JvdW5kJyBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jbG9zZSgpfT48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwnPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAubW9kYWwtYmFja2dyb3VuZCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICB9XG5cbiAgICAgIC5tb2RhbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0ZW0pO1xuICAgICAgICBtYXgtd2lkdGg6IDMyZW07XG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0ZW0pO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/bennywang/Documents/Projects/gamednd/components/Modal.js */")));

/***/ }),

/***/ "./components/RegistrationModal.js":
/*!*****************************************!*\
  !*** ./components/RegistrationModal.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! easy-peasy */ "easy-peasy");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: passwordconfirmation,
    1: setPasswordconfirmation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const setUser = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreActions"])(actions => actions.user.setUser);
  const setHideModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_2__["useStoreActions"])(actions => actions.modals.setHideModal);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", null, "Sign up"), __jsx("div", null, __jsx("form", {
    onSubmit: async event => {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/auth/register', {
          email,
          password,
          passwordconfirmation
        });

        if (response.data.status === 'error') {
          alert(response.data.message);
          return;
        }

        setUser(email);
        setHideModal();
      } catch (error) {
        alert(error.response.data.message);
        return;
      }

      event.preventDefault();
    }
  }, __jsx("input", {
    id: "email",
    type: "email",
    placeholder: "Email address",
    onChange: event => setEmail(event.target.value)
  }), __jsx("input", {
    id: "password",
    type: "password",
    placeholder: "Password",
    onChange: event => setPassword(event.target.value)
  }), __jsx("input", {
    id: "passwordconfirmation",
    type: "password",
    placeholder: "Enter password again",
    onChange: event => setPasswordconfirmation(event.target.value)
  }), __jsx("button", null, "Sign up")), __jsx("p", null, "Already have an account?", ' ', __jsx("a", {
    href: "#",
    onClick: () => props.showLogin()
  }, "Log in"))));
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-day-picker/lib/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-day-picker/lib/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/houses/[id].js":
/*!******************************!*\
  !*** ./pages/houses/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! easy-peasy */ "easy-peasy");
/* harmony import */ var easy_peasy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(easy_peasy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_DateRangePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/DateRangePicker */ "./components/DateRangePicker.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const calcNumberOfNightsBetweenDates = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let dayCount = 0;

  while (end > start) {
    dayCount++;
    start.setDate(start.getDate() + 1);
  }

  return dayCount;
};

const getBookedDates = async houseId => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:3000/api/houses/booked', {
      houseId
    });

    if (response.data.status === 'error') {
      alert(response.data.message);
      return;
    }

    return response.data.dates;
  } catch (error) {
    console.error(error);
    return;
  }
};

const canReserve = async (houseId, startDate, endDate) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:3000/api/houses/check', {
      houseId,
      startDate,
      endDate
    });

    if (response.data.status === 'error') {
      alert(response.data.message);
      return;
    }

    if (response.data.message === 'busy') {
      return false;
    }

    return true;
  } catch (error) {
    console.error(error);
    return;
  }
};

const House = props => {
  const {
    0: numberOfNightsBetweenDates,
    1: setNumberOfNightsBetweenDates
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: dateChosen,
    1: setDateChosen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: startDate,
    1: setStartDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: endDate,
    1: setEndDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const setShowLoginModal = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_4__["useStoreActions"])(actions => actions.modals.setShowLoginModal);
  const user = Object(easy_peasy__WEBPACK_IMPORTED_MODULE_4__["useStoreState"])(state => state.user.user);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: __jsx("div", {
      className: "jsx-1671841858" + " " + 'container'
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("title", {
      className: "jsx-1671841858"
    }, props.house.title)), __jsx("article", {
      className: "jsx-1671841858"
    }, __jsx("h1", {
      className: "jsx-1671841858"
    }, "Welcome to ", props.house.hostName || 'no name', "'s listing"), __jsx("img", {
      src: props.house.picture,
      width: "100%",
      alt: "House picture",
      className: "jsx-1671841858"
    }), __jsx("p", {
      className: "jsx-1671841858"
    }, props.house.type, " - ", props.house.town), __jsx("p", {
      className: "jsx-1671841858"
    }, props.house.title), props.house.reviewsCount ? __jsx("div", {
      className: "jsx-1671841858" + " " + 'reviews'
    }, __jsx("h3", {
      className: "jsx-1671841858"
    }, props.house.reviewsCount, " Reviews "), props.house.reviews.map((review, index) => {
      return __jsx("div", {
        key: index,
        className: "jsx-1671841858"
      }, __jsx("p", {
        className: "jsx-1671841858"
      }, new Date(review.createdAt).toDateString()), __jsx("p", {
        className: "jsx-1671841858"
      }, review.comment));
    })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null)), __jsx("aside", {
      className: "jsx-1671841858"
    }, __jsx("h2", {
      className: "jsx-1671841858"
    }, "Add dates for prices"), __jsx(_components_DateRangePicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
      datesChanged: (startDate, endDate) => {
        setNumberOfNightsBetweenDates(calcNumberOfNightsBetweenDates(startDate, endDate));
        setDateChosen(true);
        setStartDate(startDate);
        setEndDate(endDate);
      },
      bookedDates: props.bookedDates
    }), dateChosen && __jsx("div", {
      className: "jsx-1671841858"
    }, __jsx("h2", {
      className: "jsx-1671841858"
    }, "Price per night"), __jsx("p", {
      className: "jsx-1671841858"
    }, "$", props.house.price), __jsx("h2", {
      className: "jsx-1671841858"
    }, "Total price for booking"), __jsx("p", {
      className: "jsx-1671841858"
    }, "$", (numberOfNightsBetweenDates * props.house.price).toFixed(2)), user ? __jsx("button", {
      onClick: async () => {
        if (!(await canReserve(props.house.id, startDate, endDate))) {
          alert('The dates chosen are not valid');
          return;
        }

        try {
          const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/houses/reserve', {
            houseId: props.house.id,
            startDate,
            endDate
          });

          if (response.data.status === 'error') {
            alert(response.data.message);
            return;
          }

          console.log(response.data);
        } catch (error) {
          console.log(error);
          return;
        }
      },
      className: "jsx-1671841858" + " " + 'reserve'
    }, "Reserve") : __jsx("button", {
      onClick: () => {
        setShowLoginModal();
      },
      className: "jsx-1671841858" + " " + 'reserve'
    }, "Reserve"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1671841858"
    }, ".container.jsx-1671841858{display:grid;grid-template-columns:60% 40%;grid-gap:30px;}aside.jsx-1671841858{border:1px solid #ccc;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ueXdhbmcvRG9jdW1lbnRzL1Byb2plY3RzL2dhbWVkbmQvcGFnZXMvaG91c2VzL1tpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0tzQixBQUc0QixBQU1TLGFBTFEsU0FNakIsYUFDZixRQU5nQixjQUNoQiIsImZpbGUiOiIvVXNlcnMvYmVubnl3YW5nL0RvY3VtZW50cy9Qcm9qZWN0cy9nYW1lZG5kL3BhZ2VzL2hvdXNlcy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdG9yZUFjdGlvbnMsIHVzZVN0b3JlU3RhdGUgfSBmcm9tICdlYXN5LXBlYXN5JztcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IERhdGVSYW5nZVBpY2tlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RhdGVSYW5nZVBpY2tlcic7XG5cbmNvbnN0IGNhbGNOdW1iZXJPZk5pZ2h0c0JldHdlZW5EYXRlcyA9IChzdGFydERhdGUsIGVuZERhdGUpID0+IHtcbiAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xuICBjb25zdCBlbmQgPSBuZXcgRGF0ZShlbmREYXRlKTtcbiAgbGV0IGRheUNvdW50ID0gMDtcblxuICB3aGlsZSAoZW5kID4gc3RhcnQpIHtcbiAgICBkYXlDb3VudCsrO1xuICAgIHN0YXJ0LnNldERhdGUoc3RhcnQuZ2V0RGF0ZSgpICsgMSk7XG4gIH1cbiAgcmV0dXJuIGRheUNvdW50O1xufTtcblxuY29uc3QgZ2V0Qm9va2VkRGF0ZXMgPSBhc3luYyBob3VzZUlkID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ob3VzZXMvYm9va2VkJyxcbiAgICAgIHtcbiAgICAgICAgaG91c2VJZFxuICAgICAgfVxuICAgICk7XG4gICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICBhbGVydChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRlcztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbmNvbnN0IGNhblJlc2VydmUgPSBhc3luYyAoaG91c2VJZCwgc3RhcnREYXRlLCBlbmREYXRlKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvaG91c2VzL2NoZWNrJyxcbiAgICAgIHtcbiAgICAgICAgaG91c2VJZCxcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlXG4gICAgICB9XG4gICAgKTtcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgIGFsZXJ0KHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZXNwb25zZS5kYXRhLm1lc3NhZ2UgPT09ICdidXN5Jykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbmNvbnN0IEhvdXNlID0gcHJvcHMgPT4ge1xuICBjb25zdCBbbnVtYmVyT2ZOaWdodHNCZXR3ZWVuRGF0ZXMsIHNldE51bWJlck9mTmlnaHRzQmV0d2VlbkRhdGVzXSA9IHVzZVN0YXRlKFxuICAgIDBcbiAgKTtcbiAgY29uc3QgW2RhdGVDaG9zZW4sIHNldERhdGVDaG9zZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2VuZERhdGUsIHNldEVuZERhdGVdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBzZXRTaG93TG9naW5Nb2RhbCA9IHVzZVN0b3JlQWN0aW9ucyhcbiAgICBhY3Rpb25zID0+IGFjdGlvbnMubW9kYWxzLnNldFNob3dMb2dpbk1vZGFsXG4gICk7XG5cbiAgY29uc3QgdXNlciA9IHVzZVN0b3JlU3RhdGUoc3RhdGUgPT4gc3RhdGUudXNlci51c2VyKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRcbiAgICAgIGNvbnRlbnQ9e1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57cHJvcHMuaG91c2UudGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8aDE+V2VsY29tZSB0byB7cHJvcHMuaG91c2UuaG9zdE5hbWUgfHwgJ25vIG5hbWUnfSdzIGxpc3Rpbmc8L2gxPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmhvdXNlLnBpY3R1cmV9IHdpZHRoPScxMDAlJyBhbHQ9J0hvdXNlIHBpY3R1cmUnIC8+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3Byb3BzLmhvdXNlLnR5cGV9IC0ge3Byb3BzLmhvdXNlLnRvd259XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD57cHJvcHMuaG91c2UudGl0bGV9PC9wPlxuXG4gICAgICAgICAgICB7cHJvcHMuaG91c2UucmV2aWV3c0NvdW50ID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmV2aWV3cyc+XG4gICAgICAgICAgICAgICAgPGgzPntwcm9wcy5ob3VzZS5yZXZpZXdzQ291bnR9IFJldmlld3MgPC9oMz5cblxuICAgICAgICAgICAgICAgIHtwcm9wcy5ob3VzZS5yZXZpZXdzLm1hcCgocmV2aWV3LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8cD57bmV3IERhdGUocmV2aWV3LmNyZWF0ZWRBdCkudG9EYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPntyZXZpZXcuY29tbWVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgPGFzaWRlPlxuICAgICAgICAgICAgPGgyPkFkZCBkYXRlcyBmb3IgcHJpY2VzPC9oMj5cbiAgICAgICAgICAgIDxEYXRlUmFuZ2VQaWNrZXJcbiAgICAgICAgICAgICAgZGF0ZXNDaGFuZ2VkPXsoc3RhcnREYXRlLCBlbmREYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TnVtYmVyT2ZOaWdodHNCZXR3ZWVuRGF0ZXMoXG4gICAgICAgICAgICAgICAgICBjYWxjTnVtYmVyT2ZOaWdodHNCZXR3ZWVuRGF0ZXMoc3RhcnREYXRlLCBlbmREYXRlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc2V0RGF0ZUNob3Nlbih0cnVlKTtcbiAgICAgICAgICAgICAgICBzZXRTdGFydERhdGUoc3RhcnREYXRlKTtcbiAgICAgICAgICAgICAgICBzZXRFbmREYXRlKGVuZERhdGUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBib29rZWREYXRlcz17cHJvcHMuYm9va2VkRGF0ZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2RhdGVDaG9zZW4gJiYgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5QcmljZSBwZXIgbmlnaHQ8L2gyPlxuICAgICAgICAgICAgICAgIDxwPiR7cHJvcHMuaG91c2UucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDxoMj5Ub3RhbCBwcmljZSBmb3IgYm9va2luZzwvaDI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAkeyhudW1iZXJPZk5pZ2h0c0JldHdlZW5EYXRlcyAqIHByb3BzLmhvdXNlLnByaWNlKS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Jlc2VydmUnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAhKGF3YWl0IGNhblJlc2VydmUocHJvcHMuaG91c2UuaWQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnVGhlIGRhdGVzIGNob3NlbiBhcmUgbm90IHZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICcvYXBpL2hvdXNlcy9yZXNlcnZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXNlSWQ6IHByb3BzLmhvdXNlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICBSZXNlcnZlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Jlc2VydmUnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TG9naW5Nb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXJ2ZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDQwJTtcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFzaWRlIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIC8+XG4gICk7XG59O1xuXG5Ib3VzZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5O1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2hvdXNlcy8ke2lkfWApO1xuICBjb25zdCBob3VzZSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgYm9va2VkRGF0ZXMgPSBhd2FpdCBnZXRCb29rZWREYXRlcyhpZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBob3VzZSxcbiAgICBib29rZWREYXRlc1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG91c2U7XG4iXX0= */\n/*@ sourceURL=/Users/bennywang/Documents/Projects/gamednd/pages/houses/[id].js */"))
  });
};

House.getInitialProps = async ({
  query
}) => {
  const {
    id
  } = query;
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`http://localhost:3000/api/houses/${id}`);
  const house = await res.json();
  const bookedDates = await getBookedDates(id);
  return {
    house,
    bookedDates
  };
};

/* harmony default export */ __webpack_exports__["default"] = (House);

/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./pages/houses/[id].js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bennywang/Documents/Projects/gamednd/pages/houses/[id].js */"./pages/houses/[id].js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "date-fns/format":
/*!**********************************!*\
  !*** external "date-fns/format" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "date-fns/parse":
/*!*********************************!*\
  !*** external "date-fns/parse" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/parse");

/***/ }),

/***/ "easy-peasy":
/*!*****************************!*\
  !*** external "easy-peasy" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("easy-peasy");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-day-picker":
/*!***********************************!*\
  !*** external "react-day-picker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-day-picker");

/***/ }),

/***/ "react-day-picker/DayPickerInput":
/*!**************************************************!*\
  !*** external "react-day-picker/DayPickerInput" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-day-picker/DayPickerInput");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map