"use strict";
exports.id = 9740;
exports.ids = [9740];
exports.modules = {

/***/ 614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(912);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(strings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2__);

/** COMPONENTS */ 
/** STYLES */ 
const Item = ({ item  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().carouselItem),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().carouselDiv1),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().carouselImage),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: item.projectImage
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().carouselText),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().carouselProjName),
                            children: item.projectName
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().carouselProjDetails),
                            children: item.projectDetails
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().carouselProjCountry),
                            children: [
                                (0,strings__WEBPACK_IMPORTED_MODULE_1__.getLocalizedString)("PROJECTS_COUNTRY_LABEL"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: item.country
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().carouselProjPlatform),
                            children: [
                                (0,strings__WEBPACK_IMPORTED_MODULE_1__.getLocalizedString)("PROJECTS_PLATFORMS_LABEL"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: item.platforms
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 9740:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(614);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AnimationVariants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/** LIBRARIES */ 


/** COMPONENTS */ 
/** STYLES */ 
/*Import Animation Variants*/ 
const DesktopCarousel = (props)=>{
    let { activeLabel , activeArray , activeIndex , updateIndex  } = props;
    const getSecondAnimationVariant = ()=>{
        if (activeLabel === "mobileAppsProjLabel") {
            return _AnimationVariants__WEBPACK_IMPORTED_MODULE_4__/* .fadeIn */ .Ji;
        } else if (activeLabel === "websiteProjLabel") {
            return _AnimationVariants__WEBPACK_IMPORTED_MODULE_4__/* .fadeIn */ .Ji;
        } else {
            return _AnimationVariants__WEBPACK_IMPORTED_MODULE_4__/* .fadeIn */ .Ji;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        className: `${(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().projectHomeCarouselContainer)} ${activeLabel === "mobileAppsProjLabel" || activeLabel === "websiteProjLabel" || activeLabel === "contentManagementProjLabel" ? (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().active) : (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().activeNone)}`,
        variants: getSecondAnimationVariant(),
        animate: activeLabel === "mobileAppsProjLabel" || activeLabel === "websiteProjLabel" || activeLabel === "contentManagementProjLabel" ? "active" : "inactive",
        transition: {
            type: "tween",
            duration: 1
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().inner),
                style: {
                    transform: `translate(-${activeIndex * 100}%)`
                },
                children: activeArray.map((item)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Item__WEBPACK_IMPORTED_MODULE_3__/* .Item */ .c, {
                        item: item,
                        width: "100%"
                    }, item.projectID);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().carouselButtons),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().indicators),
                    children: activeArray.map((item, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().indicatorButtons),
                            onClick: ()=>{
                                updateIndex(index);
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "radio",
                                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().indicatorActive),
                                checked: index === activeIndex,
                                onChange: ()=>{
                                    updateIndex(index);
                                }
                            }, item.projectID)
                        }, item.projectID);
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesktopCarousel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;