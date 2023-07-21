"use strict";
exports.id = 1918;
exports.ids = [1918];
exports.modules = {

/***/ 1918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(912);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(strings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4__);

/** LIBRARIES */ 

/** COMPONENTS */ 
const IconsComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 3270).then(__webpack_require__.bind(__webpack_require__, 3270))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/AboutUs/Content.js -> " + "./Icons"
        ]
    }
});
/** SEMANTIC */ const Button = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ Button: Button1  })=>Button1
    )
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/AboutUs/Content.js -> " + "semantic-ui-react"
        ]
    }
});
/** STYLES */ 
function Content() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsBody),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bgContainer)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsContainer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: (0,strings__WEBPACK_IMPORTED_MODULE_3__.getLocalizedString)("ABOUT_ABOUT_US_LABEL")
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsBox),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().aboutUsMission),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: (0,strings__WEBPACK_IMPORTED_MODULE_3__.getLocalizedString)("ABOUT_DESCRIPTION_LABEL")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: (0,strings__WEBPACK_IMPORTED_MODULE_3__.getLocalizedString)("ABOUT_INTERESTED_LABEL")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().expBtnContainer),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: "/about-us",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                                    className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().expBtn),
                                    children: (0,strings__WEBPACK_IMPORTED_MODULE_3__.getLocalizedString)("ABOUT_EXPLORE_LABEL")
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconsComponent, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dlBtnContainer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                    className: [
                        (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dlBtn),
                        (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cursorPointer)
                    ].join(" "),
                    onClick: ()=>{
                        window.open(`/portfolio`, "_blank");
                    },
                    children: (0,strings__WEBPACK_IMPORTED_MODULE_3__.getLocalizedString)("ABOUT_DOWNLOAD_LABEL")
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);


/***/ })

};
;