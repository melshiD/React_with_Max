webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");


var _jsxFileName = "C:\\Users\\davem\\Coding\\udemy\\React_with_Max\\nextjs_practice_proj\\pages\\index.js",
    _s = $RefreshSig$();




var DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'awesome meetup',
  image: 'https://picsum.photos/1200/1300',
  address: 'First of 1st One South St.',
  description: 'this is a fantastic place to meetup'
}, {
  id: 'm2',
  title: 'Here we go',
  image: 'https://picsum.photos/1200/1301',
  address: 'Second st.',
  description: 'here we are!'
}, {
  id: 'm3',
  title: 'creepy meetup',
  image: 'https://picsum.photos/1201/1300',
  address: '1456 Southish St.',
  description: 'Better than all the meetups'
}];

function HomePage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      loadedMeetups = _useState[0],
      setLoadedMeetups = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    //send http request
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    meetups: loadedMeetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 13
  }, this);
}

_s(HomePage, "lt95aOlOC9RW+nrRzHOiZRPQygU=");

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvYWRlZE1lZXR1cHMiLCJzZXRMb2FkZWRNZWV0dXBzIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNsQjtBQUNJQyxJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsZ0JBRlg7QUFHSUMsT0FBSyxFQUFFLGlDQUhYO0FBSUlDLFNBQU8sRUFBRSw0QkFKYjtBQUtJQyxhQUFXLEVBQUU7QUFMakIsQ0FEa0IsRUFRbEI7QUFDSUosSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLFlBRlg7QUFHSUMsT0FBSyxFQUFFLGlDQUhYO0FBSUlDLFNBQU8sRUFBRSxZQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQVJrQixFQWVsQjtBQUNJSixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxPQUFLLEVBQUUsaUNBSFg7QUFJSUMsU0FBTyxFQUFFLG1CQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQWZrQixDQUF0Qjs7QUF3QkEsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFBQSxrQkFDcUJDLHNEQUFRLENBQUMsRUFBRCxDQUQ3QjtBQUFBLE1BQ2RDLGFBRGM7QUFBQSxNQUNDQyxnQkFERDs7QUFFckJDLHlEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ0FELG9CQUFnQixDQUFDVixhQUFELENBQWhCO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUlBLHNCQUNRLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFUztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFI7QUFHSDs7R0FUUUgsUTs7S0FBQUEsUTs7QUFtQk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQxMGQ1NTQ1MmYxOGYxNjEwOTI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMScsXHJcbiAgICAgICAgdGl0bGU6ICdhd2Vzb21lIG1lZXR1cCcsXHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3BpY3N1bS5waG90b3MvMTIwMC8xMzAwJyxcclxuICAgICAgICBhZGRyZXNzOiAnRmlyc3Qgb2YgMXN0IE9uZSBTb3V0aCBTdC4nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAndGhpcyBpcyBhIGZhbnRhc3RpYyBwbGFjZSB0byBtZWV0dXAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTInLFxyXG4gICAgICAgIHRpdGxlOiAnSGVyZSB3ZSBnbycsXHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3BpY3N1bS5waG90b3MvMTIwMC8xMzAxJyxcclxuICAgICAgICBhZGRyZXNzOiAnU2Vjb25kIHN0LicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdoZXJlIHdlIGFyZSEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTMnLFxyXG4gICAgICAgIHRpdGxlOiAnY3JlZXB5IG1lZXR1cCcsXHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3BpY3N1bS5waG90b3MvMTIwMS8xMzAwJyxcclxuICAgICAgICBhZGRyZXNzOiAnMTQ1NiBTb3V0aGlzaCBTdC4nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQmV0dGVyIHRoYW4gYWxsIHRoZSBtZWV0dXBzJ1xyXG4gICAgfSxcclxuXVxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICAgIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy9zZW5kIGh0dHAgcmVxdWVzdFxyXG4gICAgICAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtsb2FkZWRNZWV0dXBzfSAvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQU1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=