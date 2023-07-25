"use strict";
exports.id = 589;
exports.ids = [589];
exports.modules = {

/***/ 8847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XA": () => (/* binding */ moveContainer),
/* harmony export */   "Dw": () => (/* binding */ moveLabelContainer),
/* harmony export */   "Ji": () => (/* binding */ fadeIn),
/* harmony export */   "Oh": () => (/* binding */ opacity)
/* harmony export */ });
const moveContainer = {
    active: {
        x: "-99%"
    },
    inactive: {
        x: 0
    }
};
const moveLabelContainer = {
    active: {
        x: "6%",
        paddingLeft: "15%"
    },
    inactive: {
        x: 0,
        paddingLeft: "10%"
    }
};
const fadeIn = {
    active: {
        x: 0,
        opacity: 1,
        scale: 1
    },
    inactive: {
        x: "80%",
        scale: 0.1,
        opacity: 0
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

/***/ 6589:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4508);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(912);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(strings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(971);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AnimationVariants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8847);
/* harmony import */ var components_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/** LIBRARIES */ 




/** COMPONENTS */ const DesktopCarousel = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 740).then(__webpack_require__.bind(__webpack_require__, 9740))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/Projects/index.js -> " + "./DesktopCarousel"
        ]
    }
});


/** SEMANTIC */ const Header = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2730, 23)).then(({ Header: Header1  })=>Header1
    )
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/Projects/index.js -> " + "semantic-ui-react"
        ]
    }
});
/** STYLES */ 
/*Import Animation Variants*/ 
/** CONSTANTS */ 
const NewProjects = ()=>{
    const { 0: activeIndex , 1: setActiveIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: activeArray , 1: setActiveArray  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(components_constants__WEBPACK_IMPORTED_MODULE_8__/* .PROJECTS_MOBILE_APPS */ .et);
    const { 0: activeLabel , 1: setActiveLabel  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { 0: activeCarousel , 1: setActiveCarousel  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: isButtonClicked , 1: setIsButtonClicked  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const updateIndex = (newIndex)=>{
        const projectsLength = activeArray.length;
        newIndex %= projectsLength;
        setActiveIndex(newIndex);
    };
    const handleButtonClick = (array)=>{
        setActiveArray(array);
        setActiveIndex(0);
    };
    // FOR AUTOPLAY
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const autoplayInterval = setInterval(()=>{
            updateIndex(activeIndex + 1);
        }, 2000);
        return ()=>clearInterval(autoplayInterval)
        ;
    }, [
        activeIndex
    ]);
    const handleClick = (label)=>{
        const isLargeScreen = window.innerWidth > 1024;
        setActiveLabel(isLargeScreen ? label : "");
        setIsButtonClicked(!isLargeScreen);
        setActiveCarousel(label);
        if (label === "mobileAppsProjLabel") {
            handleButtonClick(components_constants__WEBPACK_IMPORTED_MODULE_8__/* .PROJECTS_MOBILE_APPS */ .et);
        } else if (label === "websiteProjLabel") {
            handleButtonClick(components_constants__WEBPACK_IMPORTED_MODULE_8__/* .PROJECTS_WEBSITES */ .y4);
        } else {
            handleButtonClick(components_constants__WEBPACK_IMPORTED_MODULE_8__/* .PROJECTS_CONTENT_MANAGEMENT_APP */ .VM);
        }
    };
    const getFirstAnimationVariant = ()=>{
        if (activeLabel === "mobileAppsProjLabel") {
            return _AnimationVariants__WEBPACK_IMPORTED_MODULE_7__/* .moveContainer */ .XA;
        } else if (activeLabel === "websiteProjLabel") {
            return _AnimationVariants__WEBPACK_IMPORTED_MODULE_7__/* .moveContainer */ .XA;
        } else {
            return _AnimationVariants__WEBPACK_IMPORTED_MODULE_7__/* .moveContainer */ .XA;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleResize = ()=>{
            if (window.innerWidth <= 1024) {
                setActiveLabel(null);
            }
        };
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const motionDivProps = {
        activeCarousel,
        activeLabel,
        handleClick,
        isButtonClicked
    };
    const desktopCorouselProps = {
        activeLabel,
        activeArray,
        activeIndex,
        updateIndex
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().projectsPage),
        id: "portfolioContainer",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().circleContainer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: components_assets__WEBPACK_IMPORTED_MODULE_6__/* .images.projectsProjectCircle */ .W.projectsProjectCircle
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                as: "h1",
                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().projectsLabel),
                children: (0,strings__WEBPACK_IMPORTED_MODULE_5__.getLocalizedString)("PROJECTS_PROJECTS_LABEL")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                className: `${(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().divCon)} ${activeLabel === "mobileAppsProjLabel" || activeLabel === "websiteProjLabel" || activeLabel === "contentManagementProjLabel" ? (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().active) : ""}`,
                variants: getFirstAnimationVariant(),
                animate: activeLabel === "mobileAppsProjLabel" || activeLabel === "websiteProjLabel" || activeLabel === "contentManagementProjLabel" ? "active" : "inactive",
                transition: {
                    type: "tween",
                    duration: 1
                },
                children: (0,components_constants__WEBPACK_IMPORTED_MODULE_8__/* .PROJECTS_MOTION_DIV */ .tl)(motionDivProps).map((item1, index1)=>{
                    let { handleCarouselClick , active , initial , animate , label , image , subActive , subAnimate , activeProjectCarousel  } = item1;
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                onClick: handleCarouselClick,
                                className: [
                                    (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().glassContainer),
                                    active
                                ].join(" "),
                                variants: _AnimationVariants__WEBPACK_IMPORTED_MODULE_7__/* .moveLabelContainer */ .Dw,
                                initial: initial,
                                animate: animate,
                                transition: {
                                    type: "spring",
                                    stiffness: 100
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().projectLabel),
                                        children: label
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: image
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                        className: [
                                            (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().redLine),
                                            subActive
                                        ].join(" "),
                                        variants: _AnimationVariants__WEBPACK_IMPORTED_MODULE_7__/* .opacity */ .Oh,
                                        animate: subAnimate,
                                        transition: {
                                            type: "tween",
                                            duration: 0.5
                                        }
                                    })
                                ]
                            }, index1),
                            activeProjectCarousel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {
                                showThumbs: false,
                                infiniteLoop: "true",
                                showStatus: false,
                                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().projectCarousel),
                                renderArrowPrev: (clickHandler, hasPrev)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${hasPrev ? "absolute" : "hidden"} ${(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().arrowPrevMobileButton)}`,
                                        onClick: clickHandler,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: components_assets__WEBPACK_IMPORTED_MODULE_6__/* .images.projectsArrowPreview */ .W.projectsArrowPreview
                                        })
                                    });
                                },
                                renderArrowNext: (clickHandler, hasNext)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${hasNext ? "absolute" : "hidden"} ${(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().arrowNextMobileButton)}`,
                                        onClick: clickHandler,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: components_assets__WEBPACK_IMPORTED_MODULE_6__/* .images.projectsArrowNext */ .W.projectsArrowNext
                                        })
                                    });
                                },
                                children: activeArray.map((item, index)=>{
                                    let { projectImage , projectName , projectDetails , country , platforms  } = item;
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().slideContainer),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().imageContainer),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: projectImage
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().mobileProjectLabel),
                                                children: projectName
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().mobileProjectDetail),
                                                children: projectDetails
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().mobileProjectCountry),
                                                children: [
                                                    (0,strings__WEBPACK_IMPORTED_MODULE_5__.getLocalizedString)("PROJECTS_COUNTRY_LABEL"),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: country
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_9___default().mobileProjectType),
                                                children: [
                                                    (0,strings__WEBPACK_IMPORTED_MODULE_5__.getLocalizedString)("PROJECTS_PLATFORMS_LABEL"),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: platforms
                                                    })
                                                ]
                                            })
                                        ]
                                    }, index);
                                })
                            })
                        ]
                    });
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DesktopCarousel, {
                ...desktopCorouselProps
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewProjects);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;