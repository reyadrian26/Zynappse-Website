"use strict";
exports.id = 953;
exports.ids = [953];
exports.modules = {

/***/ 9953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Header_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./styles/main.module.scss
var main_module = __webpack_require__(8333);
var main_module_default = /*#__PURE__*/__webpack_require__.n(main_module);
;// CONCATENATED MODULE: ./components/generics/Header/Header.js

/** LIBRARIES */ 

/** COMPONENTS */ const Desktop = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(397), __webpack_require__.e(676), __webpack_require__.e(664), __webpack_require__.e(675), __webpack_require__.e(61)]).then(__webpack_require__.bind(__webpack_require__, 1061))
, {
    loadableGenerated: {
        modules: [
            "../components/generics/Header/Header.js -> " + "./Desktop"
        ]
    }
});
const Mobile = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(397), __webpack_require__.e(675), __webpack_require__.e(686)]).then(__webpack_require__.bind(__webpack_require__, 7341))
, {
    loadableGenerated: {
        modules: [
            "../components/generics/Header/Header.js -> " + "./Mobile"
        ]
    }
});
const MobileContent = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(397), __webpack_require__.e(676), __webpack_require__.e(664), __webpack_require__.e(494)]).then(__webpack_require__.bind(__webpack_require__, 1494))
, {
    loadableGenerated: {
        modules: [
            "../components/generics/Header/Header.js -> " + "./Mobile/Content"
        ]
    }
});
/** STYLES */ 
const Header = ()=>{
    const { 0: isBurgerClicked , 1: setIsBurgerClicked  } = (0,external_react_.useState)(false);
    let mobileProps = {
        isBurgerClicked,
        setIsBurgerClicked
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (main_module_default()).headerDesktopWrapper,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Desktop, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (main_module_default()).headerMobileWrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Mobile, {
                        ...mobileProps
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MobileContent, {
                        ...mobileProps
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./components/generics/Header/index.js



/***/ })

};
;