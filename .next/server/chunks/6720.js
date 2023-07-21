"use strict";
exports.id = 6720;
exports.ids = [6720];
exports.modules = {

/***/ 6720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(912);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(strings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3__);

/** LIBRARIES */ 
/** Components */ const Appfutura = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 772).then(__webpack_require__.bind(__webpack_require__, 772))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/Accomplishments/index.js -> " + "./Appfutura"
        ]
    }
});
const Background = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 5084).then(__webpack_require__.bind(__webpack_require__, 5084))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/Accomplishments/index.js -> " + "./Background"
        ]
    }
});

/** SEMANTIC */ const Header = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ Header: Header1  })=>Header1
    )
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/Accomplishments/index.js -> " + "semantic-ui-react"
        ]
    }
});
/** STYLES */ 
const Accomplishments = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().accomplishmentPage),
        id: "accomplishmentContainer",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Background, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                as: "h1",
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().accomplishmentsHeader),
                children: (0,strings__WEBPACK_IMPORTED_MODULE_2__.getLocalizedString)("ACCOMPLISHMENT_HEADER")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Appfutura, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().accomplishmentsTextbox),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_3___default().accomplishmentsContent),
                    children: (0,strings__WEBPACK_IMPORTED_MODULE_2__.getLocalizedString)("ACCOMPLISHMENT_DESCRIPTION")
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accomplishments);


/***/ })

};
;