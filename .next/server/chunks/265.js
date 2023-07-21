"use strict";
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ moveLabel),
/* harmony export */   "up": () => (/* binding */ up),
/* harmony export */   "O": () => (/* binding */ opacity)
/* harmony export */ });
const moveLabel = {
    active: {
        x: "-22%"
    },
    inactive: {
        x: 0
    }
};
const up = {
    before: {
        y: "300%",
        x: "-300%",
        opacity: 0,
        rotate: 90
    },
    after: {
        y: 0,
        x: 0,
        opacity: 1,
        rotate: 0
    }
};
const opacity = {
    before: {
        opacity: 0
    },
    after: {
        height: "60%",
        opacity: 1
    }
};


/***/ }),

/***/ 265:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var components_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(971);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(912);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(strings__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AnimationVariants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(275);
/* harmony import */ var components_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/** LIBRARIES */ 



/** COMPONENTS */ 

/** SEMANTIC */ const Header = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ Header: Header1  })=>Header1
    )
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/Services/index.js -> " + "semantic-ui-react"
        ]
    }
});
/** STYLES */ 
/*Import Animation Variants*/ 
/** CONSTANTS */ 
const Services = ()=>{
    const { 0: activeLabel , 1: setActiveLabel  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("mobileApps");
    const { 0: getData , 1: setGetData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("mobileApps01");
    // setActiveLabel equals to NULL when the screen size is <= 899
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        function handleResize() {
            if (window.innerWidth < 899) {
                setActiveLabel(null);
            } else {
                setActiveLabel("mobileApps");
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setGetData("");
        setTimeout(()=>{
            setGetData(activeLabel === "mobileApps" ? "mobileApps01" :  false || activeLabel === "webEcommerce" ? "webEcommerce02" :  false || activeLabel === "cloudDatabaseManagement" ? "cloudDatabaseManagement03" :  false || activeLabel === "artificialIntelligence" ? "artificialIntelligence04" :  false || activeLabel === "augmentedReality" ? "augmentedReality05" : "");
        }, 0);
    }, [
        activeLabel
    ]);
    let motionDivProps = {
        activeLabel,
        setActiveLabel,
        setGetData
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "servicesContainer",
        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().servicesPage),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                as: "h1",
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().ourServicesLabel),
                children: (0,strings__WEBPACK_IMPORTED_MODULE_6__.getLocalizedString)("SERVICES_OUR_SERVICES_LABEL")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().glassContainer),
                children: (0,components_constants__WEBPACK_IMPORTED_MODULE_8__/* .SERVICES_MOTION_DIV */ .MA)(motionDivProps).map((item, index)=>{
                    let { active , handleClick , initial , mainAnimate , subAnimate , mainLabel , subLabel  } = item;
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        className: [
                            (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().glassBox),
                            active
                        ].join(" "),
                        onClick: handleClick,
                        variants: _AnimationVariants__WEBPACK_IMPORTED_MODULE_7__/* .moveLabel */ .G,
                        initial: initial,
                        animate: mainAnimate,
                        transition: {
                            type: "spring",
                            stiffness: 100
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                className: [
                                    (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().redLine),
                                    active
                                ].join(" "),
                                variants: _AnimationVariants__WEBPACK_IMPORTED_MODULE_7__/* .opacity */ .O,
                                animate: subAnimate,
                                transition: {
                                    type: "tween",
                                    duration: 0.5
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().whiteWord),
                                children: [
                                    mainLabel,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().redWord),
                                        children: subLabel
                                    })
                                ]
                            })
                        ]
                    }, index);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().redCircleContainer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: components_assets__WEBPACK_IMPORTED_MODULE_5__/* .images.servicesRedCircleImage */ .W.servicesRedCircleImage
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().dotsContainer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: components_assets__WEBPACK_IMPORTED_MODULE_5__/* .images.servicesDotsImage */ .W.servicesDotsImage
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().outerCircle)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().innerCircle)
            }),
            components_constants__WEBPACK_IMPORTED_MODULE_8__/* .SERVICES_DATA.map */ .j$.map(({ id , count , image  })=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: getData === id ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                variants: _AnimationVariants__WEBPACK_IMPORTED_MODULE_7__.up,
                                initial: "before",
                                animate: "after",
                                transition: {
                                    type: "tween",
                                    duration: 1
                                },
                                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().mobileImageContainer),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    src: image,
                                    layout: "fill",
                                    objectFit: "contain"
                                })
                            }, image),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().firstCounter),
                                children: [
                                    (0,strings__WEBPACK_IMPORTED_MODULE_6__.getLocalizedString)("SERVICES_ZERO_LABEL"),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {
                                        variants: _AnimationVariants__WEBPACK_IMPORTED_MODULE_7__.up,
                                        initial: "before",
                                        animate: "after",
                                        transition: {
                                            type: "tween",
                                            duration: 1
                                        },
                                        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().redNumber),
                                        children: count
                                    }, count)
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().secondCounter),
                                children: (0,strings__WEBPACK_IMPORTED_MODULE_6__.getLocalizedString)("SERVICES_ZERO_FIVE_LABEL")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().counterLine)
                            })
                        ]
                    }) : null
                }, id);
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;