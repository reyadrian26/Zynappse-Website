"use strict";
exports.id = 5625;
exports.ids = [5625];
exports.modules = {

/***/ 6630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nq": () => (/* binding */ animVar),
/* harmony export */   "h7": () => (/* binding */ initVar),
/* harmony export */   "kX": () => (/* binding */ fadeOutVar),
/* harmony export */   "$z": () => (/* binding */ initVarLeft)
/* harmony export */ });
const animVar = {
    x: 0,
    opacity: 1,
    ease: "easeIn",
    transition: {
        duration: 1,
        type: "tween"
    }
};
const initVar = {
    opacity: 0,
    x: 1000
};
const fadeOutVar = {
    opacity: 0
};
const initVarLeft = {
    x: -500,
    opacity: 0
};


/***/ }),

/***/ 5625:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var components_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(971);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(912);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(strings__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _FramerMotion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6630);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/** LIBRARIES */ 



/** COMPONENTS */ 

const Android = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 702).then(__webpack_require__.bind(__webpack_require__, 702))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/Skills/index.js -> " + "./Android"
        ]
    }
});
const Web = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 2350).then(__webpack_require__.bind(__webpack_require__, 2350))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/Skills/index.js -> " + "./Web"
        ]
    }
});
const Ios = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 6618).then(__webpack_require__.bind(__webpack_require__, 6618))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/Skills/index.js -> " + "./Ios"
        ]
    }
});
/** STYLES */ 
/** ANIMATIONS */ 
const Skills = ()=>{
    const animationAndroid = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();
    const animationWeb = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();
    const animationIos = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimation)();
    const androidRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const isAndroidInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(androidRef);
    const webRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const isWebView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(webRef);
    const iosRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const isIosInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(iosRef);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (isAndroidInView) {
            animationAndroid.set(_FramerMotion__WEBPACK_IMPORTED_MODULE_7__/* .initVar */ .h7);
            animationAndroid.start(_FramerMotion__WEBPACK_IMPORTED_MODULE_7__/* .animVar */ .nq);
        }
        if (!isAndroidInView) {
            animationAndroid.start(_FramerMotion__WEBPACK_IMPORTED_MODULE_7__/* .fadeOutVar */ .kX);
        }
        if (isWebView) {
            animationWeb.set(_FramerMotion__WEBPACK_IMPORTED_MODULE_7__/* .initVarLeft */ .$z);
            animationWeb.start(_FramerMotion__WEBPACK_IMPORTED_MODULE_7__/* .animVar */ .nq);
        }
        if (!isWebView) {
            animationWeb.start(_FramerMotion__WEBPACK_IMPORTED_MODULE_7__/* .fadeOutVar */ .kX);
        }
        if (isIosInView) {
            animationIos.set(_FramerMotion__WEBPACK_IMPORTED_MODULE_7__/* .initVar */ .h7);
            animationIos.start(_FramerMotion__WEBPACK_IMPORTED_MODULE_7__/* .animVar */ .nq);
        }
        if (!isIosInView) {
            animationIos.start(_FramerMotion__WEBPACK_IMPORTED_MODULE_7__/* .fadeOutVar */ .kX);
        }
    }, [
        isAndroidInView,
        isWebView,
        isIosInView
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().skillsPage),
        id: "skillsContainer",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().skillsBackgroundCircleImage),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    src: components_assets__WEBPACK_IMPORTED_MODULE_5__/* .images.skillsCircleImage */ .W.skillsCircleImage,
                    alt: "Circle Overlay",
                    width: 991,
                    height: 991
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().textBackground)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().skillsHeading),
                children: (0,strings__WEBPACK_IMPORTED_MODULE_6__.getLocalizedString)("SKILLS_HEADING")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().scrollableCont),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().section),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: androidRef,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Android, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().section),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: webRef,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Web, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().section),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: iosRef,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Ios, {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h3, {
                initial: _FramerMotion__WEBPACK_IMPORTED_MODULE_7__/* .initVar */ .h7,
                animate: animationAndroid,
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().androidTitle),
                children: (0,strings__WEBPACK_IMPORTED_MODULE_6__.getLocalizedString)("ANDROID_TITLE")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h3, {
                initial: _FramerMotion__WEBPACK_IMPORTED_MODULE_7__/* .initVar */ .h7,
                animate: animationWeb,
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().webTitle),
                children: (0,strings__WEBPACK_IMPORTED_MODULE_6__.getLocalizedString)("WEB_TITLE")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h3, {
                initial: _FramerMotion__WEBPACK_IMPORTED_MODULE_7__/* .initVar */ .h7,
                animate: animationIos,
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_8___default().iosTitle),
                children: (0,strings__WEBPACK_IMPORTED_MODULE_6__.getLocalizedString)("IOS_TITLE")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;