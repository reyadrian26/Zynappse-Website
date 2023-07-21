"use strict";
exports.id = 3270;
exports.ids = [3270];
exports.modules = {

/***/ 3270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1998);

/** LIBRARIES */ 

/** STYLES */ 
/** CONSTANTS */ 
const Icons = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconContentContainer),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: [
                (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconsContainer)
            ].join(" "),
            children: components_constants__WEBPACK_IMPORTED_MODULE_3__/* .ABOUT_US_SOCIALS_ICONS.map */ .mQ.map((item, index)=>{
                let { wrapperStyle , image , imageStyle , height , width , link  } = item;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: wrapperStyle,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        href: link,
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                className: imageStyle,
                                src: image,
                                height: height,
                                width: width
                            })
                        })
                    })
                }, index);
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icons);


/***/ })

};
;