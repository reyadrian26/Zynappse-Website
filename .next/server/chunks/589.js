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

/***/ }),

/***/ 6677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ABOUT_US_SOCIALS_ICONS": () => (/* binding */ ABOUT_US_SOCIALS_ICONS)
/* harmony export */ });
/* harmony import */ var components_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(971);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/** COMPONENTS */ 
/** STYLES */ 
const ABOUT_US_SOCIALS_ICONS = [
    {
        wrapperStyle: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_1___default().aboutUsFB),
        image: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.aboutUsFBIcon */ .W.aboutUsFBIcon,
        imageStyle: [
            (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_1___default().cursorPointer),
            (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_1___default().borderCircle)
        ].join(" "),
        height: 71,
        width: 71,
        link: "https://www.facebook.com/zynappse/"
    }, 
];


/***/ }),

/***/ 1460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACCOMPLISHMENTS_BACKGROUND_IMAGES": () => (/* binding */ ACCOMPLISHMENTS_BACKGROUND_IMAGES),
/* harmony export */   "ACCOMPLISHMENTS_APPFUTURA_ACHIEVEMENTS": () => (/* binding */ ACCOMPLISHMENTS_APPFUTURA_ACHIEVEMENTS)
/* harmony export */ });
/* harmony import */ var components_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(971);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(912);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(strings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/** COMPONENTS */ 

/** STYLES */ 
const ACCOMPLISHMENTS_BACKGROUND_IMAGES = [
    {
        style: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().rightDecorContainer),
        image: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.accomplishmentsLeftBackground */ .W.accomplishmentsLeftBackground,
        height: 700,
        width: 350
    },
    {
        style: (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().leftDecorContainer),
        image: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.accomplishmentsRightBackground */ .W.accomplishmentsRightBackground,
        height: 700,
        width: 350
    }, 
];
const ACCOMPLISHMENTS_APPFUTURA_ACHIEVEMENTS = [
    {
        image: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.accomplishmentsFirstAppfutura */ .W.accomplishmentsFirstAppfutura,
        height: 253,
        width: 228
    },
    {
        image: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.accomplishmentsSecondAppfutura */ .W.accomplishmentsSecondAppfutura,
        height: 253,
        width: 228
    },
    {
        image: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.accomplishmentsThirdAppfutura */ .W.accomplishmentsThirdAppfutura,
        height: 253,
        width: 228
    },
    {
        image: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.accomplishmentsFourthAppfutura */ .W.accomplishmentsFourthAppfutura,
        height: 253,
        width: 228
    }, 
];


/***/ }),

/***/ 4709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROJECTS_MOBILE_APPS": () => (/* binding */ PROJECTS_MOBILE_APPS),
/* harmony export */   "PROJECTS_WEBSITES": () => (/* binding */ PROJECTS_WEBSITES),
/* harmony export */   "PROJECTS_CONTENT_MANAGEMENT_APP": () => (/* binding */ PROJECTS_CONTENT_MANAGEMENT_APP),
/* harmony export */   "PROJECTS_MOTION_DIV": () => (/* binding */ PROJECTS_MOTION_DIV)
/* harmony export */ });
/* harmony import */ var components_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(971);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(912);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(strings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/** COMPONENTS */ 

/** STYLES */ 
const PROJECTS_MOBILE_APPS = [
    {
        projectID: 1,
        projectName: "Robinsons Mall App",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsRobinsonsMallAppImage */ .W.projectsRobinsonsMallAppImage,
        projectDetails: "Everything you need to know about Robinsons Malls is now at your fngertips\u2014 store directory, events and promos, Robinsons Privilege Card discounts and benefts, Lingkod Pinoy directory, movie schedules and mall directions and operating hours.",
        country: "Philippines",
        platforms: "Mobile(Android)"
    },
    {
        projectID: 2,
        projectName: "Resorts World Manila Mobile App Companion",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsResortsWorldImage */ .W.projectsResortsWorldImage,
        projectDetails: "Find it difficult to keep up with all that Resorts World Manila has to offer? Stay up-to-date with the RWM Mobile App, the best way to make the most out of every trip to the Philippines\u2019 First Integrated Resort!",
        country: "Philippines",
        platforms: "Mobile(Android and IOS)"
    },
    {
        projectID: 3,
        projectName: "Metrodeal App",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsMetroDealImage */ .W.projectsMetroDealImage,
        projectDetails: "Welcome to the world of MetroDeal: Unbeatable offers with discounts up to 90% for restaurants, buffets, spas, hotels, gadgets and more await you. Every day, we introduce exciting new deals with deep discounts for things to do in your city. Download the MetroDeal app to browse endless offers, tailored to your preferences. Fancy a mouthwatering buffet, a new hair-do, or a workout at the gym? Our deals help you discover your city for less. ",
        country: "Philippines",
        platforms: "Mobile(Android and IOS)"
    },
    {
        projectID: 4,
        projectName: "Our Awesome Planet Mobile App",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsOurAwesomePlanetImage */ .W.projectsOurAwesomePlanetImage,
        projectDetails: "The Our Awesome Planet App is your personal travel guide to the most awesome food and travel experiences in the Philippines. Know the best restaurants, best places, and best travel experiences in the Philippines as curated by Anton Diaz, founder of the top food & travel blog in the Philippines and ASEAN since 2005. Get updated with the hidden experiences only a local insider can provide. It\u2019s your one stop guide to Awesome Philippines.",
        country: "Philippines",
        platforms: "Mobile(Android and IOS)"
    },
    {
        projectID: 5,
        projectName: "Flash Hunt Mobile App",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsFlashHuntImage */ .W.projectsFlashHuntImage,
        projectDetails: "A mobile scavenger hunt app that engages its users in physical tasks and the excitement of Augmented Reality! Made even more interactive with its in-app sharing of user\u2019s experience to their Social Media accounts. This app makes use of the latest digital solutions to deliver a relevant and truly rewarding experience!",
        country: "Philippines",
        platforms: "Mobile(Android)"
    },
    {
        projectID: 6,
        projectName: "Amellar Zoning and Monitoring",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsAmellarZoningMonitoringImage */ .W.projectsAmellarZoningMonitoringImage,
        projectDetails: "aZMAS Android Edition is a mobile app that shall be deployed for fieldwork activities such as tagging for landmarks, establishments and other structures that maybe essential for zoning administration. This mobile app is an online-ready app that can automatically sync data into its cloud-base server and database. This means that all information gathered in the field will automatically be sent and saved into the main server in our Cloud Facility. In effect, users inside the City Hall shall automatically receive updates real-time. Thus, the local executive as well as the local managers shall receive updated reports anytime of the day.",
        country: "Philippines",
        platforms: "Mobile(Android)"
    },
    {
        projectID: 7,
        projectName: "Myblood profile Mobile App",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsMyBloodImage */ .W.projectsMyBloodImage,
        projectDetails: "My Blood is a healthy lifestyle app that graphically presents and tracks your lab results. It gives health recommendations based on your calculated risk of developing lifestyle diseases. This app is only available for use on select tests from partner laboratories",
        country: "Philippines",
        platforms: "Mobile(Android and IOS)"
    },
    {
        projectID: 8,
        projectName: "Unfold Mobile App",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsUnfoldImage */ .W.projectsUnfoldImage,
        projectDetails: "Unfold is an app that makes Master Choa Kok Sui\u2019s teachings more modern and accessible than ever before. The app allows users to receive daily nuggets of inspiration from his teachings and also allows them to personalize the quotes through various fonts, backgrounds, and stickers. Users can then share these personalized quotes through popular social media accounts such as Facebook, Twitter, Instagram, and Pinterest.",
        country: "Philippines",
        platforms: "Mobile(Android and IOS)"
    },
    {
        projectID: 9,
        projectName: "E-Shuttle",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsEShuttleImage */ .W.projectsEShuttleImage,
        projectDetails: "A mobile app designed and developed for finding the nearest and available e-tricycle within a specific vicinity or city. With the most advanced and real-time and online dashboard to monitor trips and transactions. The apps was designed and developed for both drivers and passengers to create a cohesive ecosystem across users.",
        country: "Philippines",
        platforms: "Mobile(Android)"
    },
    {
        projectID: 10,
        projectName: "Fooze",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsFoozeImage */ .W.projectsFoozeImage,
        projectDetails: "The fastest and easiest way to satisfy your late night cravings. Fooze is the 1-tap delivery app for your favorite late night munchies. Every night, we feature a different selection of three delicious munchies from great late night restaurants. Simply choose your munchie, and tap to order. Our meals are always a convenient all-inclusive price.",
        country: "Philippines",
        platforms: "Mobile(Android)"
    },
    {
        projectID: 11,
        projectName: "RBX Integrated Solution",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsRBXImage */ .W.projectsRBXImage,
        projectDetails: "The RBX INTEGRATED SOLUTION (RBXIS) is an enterprise-wide solution designed for Rice In A Box (RBX) for the monitoring and management of all their daily sales and purchase order reports from different outlets/branches (RBX-owned and/or franchises). The RBXIS consists of web, mobile and cloud solutions that handle and manage all branch transactions from purchasing to sales, which are consolidated to daily and executive reports for an effective and efficient management decision-making. ",
        country: "Philippines",
        platforms: "Mobile(Android)"
    },
    {
        projectID: 12,
        projectName: "Life Konnekt Mobile App",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsLifeKonnektImage */ .W.projectsLifeKonnektImage,
        projectDetails: "LifeKonnekt helps you chronicle your thoughts, feelings, ideas and experiences and allows you to share them with the people who really matter to you.",
        country: "Philippines",
        platforms: "Mobile(Android)"
    },
    {
        projectID: 13,
        projectName: "Business Tagging",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsBusinessTaggingImage */ .W.projectsBusinessTaggingImage,
        projectDetails: "Business Tagging for Android is a mobile application specifically designed for Local Government Units in the Philippines. This app is a customized business tagging solution for Android and iOS tailor-fitted to adapt to the current requirements of most of the local government units in the country.",
        country: "Philippines",
        platforms: "Mobile(Android)"
    }, 
];
const PROJECTS_WEBSITES = [
    {
        projectID: 1,
        projectName: "Sarimoire",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsSarimoiremage */ .W.projectsSarimoiremage,
        projectDetails: "A place for all things natural, magical, and spiritually uplifting. Sarimoire\u2019s Philosophy: At Sarimoire we believe that everyone deserves the magic and divinity that exists within us and in our surroundings. The elements and seasons are gifts that we treasure and hold to the highest esteem. Traditionally, throughout all cultures, herbs, resins, and healing stones have been used to further connect us with the elements. T his connection is a path that leads to deep enlightenment, understanding and overall alignment with our higher self. To work with these gifts from nature is like a world history course, learning about all the different cultures throughout human history.",
        country: "Philippines",
        platforms: "Website"
    },
    {
        projectID: 2,
        projectName: "Zygurtech",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsZygurtechImage */ .W.projectsZygurtechImage,
        projectDetails: "US-Based IT company that provides web solutions, mobile and wearable apps, cloud and database services.",
        country: "US",
        platforms: "Website"
    },
    {
        projectID: 3,
        projectName: "Noah Courier Services",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsNoahCourierServicesImage */ .W.projectsNoahCourierServicesImage,
        projectDetails: "N.O.A.H. courier service was established in the year 2020 of August 01. It is formally known as N.O.A.H. Courier Service Ngayon Orders Agad-Agad Hatid. We are a technology-based courier company that applies highly advanced IT management system to provide high efficiency, security, quality and excellent service to all Merchants and Consignee.",
        country: "Philippines",
        platforms: "Websites"
    }, 
];
const PROJECTS_CONTENT_MANAGEMENT_APP = [
    {
        projectID: 1,
        projectName: "Alaska Aces Mobile App and Alaska Aces Official Website",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsAlaskaAcesImage */ .W.projectsAlaskaAcesImage,
        projectDetails: "The Official Alaska Aces PBA Basketball Team iPhone App. Stay connected to the Alaska Aces everywhere you go. Get Alaska Aces news, player profiles, schedules and more. Be updated with Alaska Aces\u2019 latest events, standings and news.",
        country: "Philippines",
        platforms: "Mobile(Android and IOS) and Website"
    },
    {
        projectID: 2,
        projectName: "Jobstream",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsJobStreamImage */ .W.projectsJobStreamImage,
        projectDetails: "Whether you\u2019re a Jobseeker, Volunteer, an Employer or Non-Profit organization, the JobStream App makes it easier than ever to establish powerful, long-lasting relationships in the workplace. We are committed in using the latest technology available to assist in finding job opportunities near you or hiring qualified talents made QUICK & EASY through JobStream App.",
        country: "US",
        platforms: "Mobile(Android and IOS) and Website"
    },
    {
        projectID: 3,
        projectName: "Alfamart",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsRAlfamartImage */ .W.projectsRAlfamartImage,
        projectDetails: "Zynappse Store Audit for Alfamart is a solution designed specifically for stores with multiple branches such as Alfamart. This is a combination of cloud and mobile applications that has evolved into acomprehensive, all-in-one solution for direct-store audit system for auditors, area managers and supervisors to move forward and grow smarter.",
        country: "Philippines",
        platforms: "Mobile(Android and IOS) and CMS"
    },
    {
        projectID: 4,
        projectName: "GESSA - Gender Equality Staff Survey",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsGessaImage */ .W.projectsGessaImage,
        projectDetails: "Gender Equality Staff Survey Application (GESSA) is a survey administration app that creates surveys and questionnaires online to collect and organize information. It\u2019s the perfect solution for capturing employee perception around Workplace Gender Equality (WGE), understanding inclusiveness of company culture and opportunities for research and development. Unlimited surveys can be created to assess WGE events, initiatives, opinion and more.",
        country: "Philippines",
        platforms: "Mobile(Android and IOS) and CMS"
    },
    {
        projectID: 5,
        projectName: "Exact Training Center",
        projectImage: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsExactTrainingCenterImage */ .W.projectsExactTrainingCenterImage,
        projectDetails: "There is no gainsaying the fact that the international maritime community holds the Filipino mariner in the highest esteem not only for his adaptability, communications skills and natural talent but also for his indomitable spirit that often makes him the most dependable person on- board ship; attributes that are often challenged by the need for a more professional finish to his hands-on training. We are pleased to announce that EXACT Center, Inc. has dedicated itself in raising the bar of maritime excellence and competence. This is not, however, by all means, the end of it. More like the beginning.",
        country: "Philippines",
        platforms: "Website and CMS"
    }, 
];
const PROJECTS_MOTION_DIV = (props)=>{
    let { activeCarousel , activeLabel , handleClick , isButtonClicked  } = props;
    return [
        {
            handleCarouselClick: ()=>{
                handleClick("mobileAppsProjLabel");
            },
            active: activeLabel === "mobileAppsProjLabel" ? (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : "",
            initial: activeLabel === "mobileAppsProjLabel" ? "active" : "active",
            animate: activeLabel === "mobileAppsProjLabel" ? "active" : "inactive",
            label: (0,strings__WEBPACK_IMPORTED_MODULE_1__.getLocalizedString)("PROJECTS_MOBILE_APPS_LABEL"),
            image: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsMobileIcon */ .W.projectsMobileIcon,
            subActive: activeLabel === "mobileAppsProjLabel" ? (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : "",
            subAnimate: activeLabel === "mobileAppsProjLabel" || activeCarousel === "mobileAppsProjLabel" && window.innerWidth <= 1024 && isButtonClicked ? "after" : "before",
            activeProjectCarousel: isButtonClicked && activeCarousel === "mobileAppsProjLabel"
        },
        {
            handleCarouselClick: ()=>{
                handleClick("websiteProjLabel");
            },
            active: activeLabel === "websiteProjLabel" ? (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : "",
            initial: activeLabel === "websiteProjLabel" ? "active" : "active",
            animate: activeLabel === "websiteProjLabel" ? "active" : "inactive",
            label: (0,strings__WEBPACK_IMPORTED_MODULE_1__.getLocalizedString)("PROJECTS_WEBSITES_LABEL"),
            image: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsWebsiteIcon */ .W.projectsWebsiteIcon,
            subActive: activeLabel === "websiteProjLabel" ? (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : "",
            subAnimate: activeLabel === "websiteProjLabel" || activeCarousel === "websiteProjLabel" && window.innerWidth <= 1024 && isButtonClicked ? "after" : "before",
            activeProjectCarousel: isButtonClicked && activeCarousel === "websiteProjLabel"
        },
        {
            handleCarouselClick: ()=>{
                handleClick("contentManagementProjLabel");
            },
            active: activeLabel === "contentManagementProjLabel" ? (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : "",
            initial: activeLabel === "contentManagementProjLabel" ? "active" : "active",
            animate: activeLabel === "contentManagementProjLabel" ? "active" : "inactive",
            label: (0,strings__WEBPACK_IMPORTED_MODULE_1__.getLocalizedString)("PROJECTS_CONTENT_MANAGEMENT_APPS_LABEL"),
            image: components_assets__WEBPACK_IMPORTED_MODULE_0__/* .images.projectsContentIcon */ .W.projectsContentIcon,
            subActive: activeLabel === "contentManagementProjLabel" ? (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : "",
            subAnimate: activeLabel === "contentManagementProjLabel" || activeCarousel === "contentManagementProjLabel" && window.innerWidth <= 1024 && isButtonClicked ? "after" : "before",
            activeProjectCarousel: isButtonClicked && activeCarousel === "contentManagementProjLabel"
        }, 
    ];
};


/***/ }),

/***/ 7253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SERVICES_DATA": () => (/* binding */ SERVICES_DATA),
/* harmony export */   "SERVICES_MOTION_DIV": () => (/* binding */ SERVICES_MOTION_DIV)
/* harmony export */ });
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(912);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(strings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(971);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/** COMPONENTS */ 

/** STYLES */ 
const SERVICES_DATA = [
    {
        id: "mobileApps01",
        count: 1,
        image: components_assets__WEBPACK_IMPORTED_MODULE_1__/* .images.servicesPhoneImage */ .W.servicesPhoneImage
    },
    {
        id: "webEcommerce02",
        count: 2,
        image: components_assets__WEBPACK_IMPORTED_MODULE_1__/* .images.servicesECommerceImage */ .W.servicesECommerceImage
    },
    {
        id: "cloudDatabaseManagement03",
        count: 3,
        image: components_assets__WEBPACK_IMPORTED_MODULE_1__/* .images.servicesTabletImage */ .W.servicesTabletImage
    },
    {
        id: "artificialIntelligence04",
        count: 4,
        image: components_assets__WEBPACK_IMPORTED_MODULE_1__/* .images.servicesAIImage */ .W.servicesAIImage
    },
    {
        id: "augmentedReality05",
        count: 5,
        image: components_assets__WEBPACK_IMPORTED_MODULE_1__/* .images.servicesPCImage */ .W.servicesPCImage
    }, 
];
const SERVICES_MOTION_DIV = (props)=>{
    let { activeLabel , setActiveLabel , setGetData  } = props;
    return [
        {
            active: activeLabel === "mobileApps" ? (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : "",
            handleClick: ()=>{
                setActiveLabel("mobileApps");
                setGetData("mobileApps01");
            },
            initial: activeLabel === "mobileApps" ? "active" : "inactive",
            mainAnimate: activeLabel === "mobileApps" ? "active" : "inactive",
            subAnimate: activeLabel === "mobileApps" ? "after" : "before",
            mainLabel: (0,strings__WEBPACK_IMPORTED_MODULE_0__.getLocalizedString)("SERVICES_MOBILE_LABEL"),
            subLabel: (0,strings__WEBPACK_IMPORTED_MODULE_0__.getLocalizedString)("SERVICES_APPS_LABEL")
        },
        {
            active: activeLabel === "webEcommerce" ? (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : "",
            handleClick: ()=>{
                setActiveLabel("webEcommerce");
                setGetData("webEcommerce02");
            },
            initial: activeLabel === "webEcommerce" ? "active" : "inactive",
            mainAnimate: activeLabel === "webEcommerce" ? "active" : "inactive",
            subAnimate: activeLabel === "webEcommerce" ? "after" : "before",
            mainLabel: (0,strings__WEBPACK_IMPORTED_MODULE_0__.getLocalizedString)("SERVICES_WEB_AND_LABEL"),
            subLabel: (0,strings__WEBPACK_IMPORTED_MODULE_0__.getLocalizedString)("SERVICES_ECOMMERCE_LABEL")
        },
        {
            active: activeLabel === "cloudDatabaseManagement" ? (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : "",
            handleClick: ()=>{
                setActiveLabel("cloudDatabaseManagement");
                setGetData("cloudDatabaseManagement03");
            },
            initial: activeLabel === "cloudDatabaseManagement" ? "active" : "inactive",
            mainAnimate: activeLabel === "cloudDatabaseManagement" ? "active" : "inactive",
            subAnimate: activeLabel === "cloudDatabaseManagement" ? "after" : "before",
            mainLabel: (0,strings__WEBPACK_IMPORTED_MODULE_0__.getLocalizedString)("SERVICES_CLOUD_AND_LABEL"),
            subLabel: (0,strings__WEBPACK_IMPORTED_MODULE_0__.getLocalizedString)("SERVICES_DATABASE_MANAGEMENT_LABEL")
        },
        {
            active: activeLabel === "artificialIntelligence" ? (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : "",
            handleClick: ()=>{
                setActiveLabel("artificialIntelligence");
                setGetData("artificialIntelligence04");
            },
            initial: activeLabel === "artificialIntelligence" ? "active" : "inactive",
            mainAnimate: activeLabel === "artificialIntelligence" ? "active" : "inactive",
            subAnimate: activeLabel === "artificialIntelligence" ? "after" : "before",
            mainLabel: (0,strings__WEBPACK_IMPORTED_MODULE_0__.getLocalizedString)("SERVICES_ARTIFICIAL_LABEL"),
            subLabel: (0,strings__WEBPACK_IMPORTED_MODULE_0__.getLocalizedString)("SERVICES_INTELLIGENCE_LABEL")
        },
        {
            active: activeLabel === "augmentedReality" ? (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : "",
            handleClick: ()=>{
                setActiveLabel("augmentedReality");
                setGetData("augmentedReality05");
            },
            initial: activeLabel === "augmentedReality" ? "active" : "inactive",
            mainAnimate: activeLabel === "augmentedReality" ? "active" : "inactive",
            subAnimate: activeLabel === "augmentedReality" ? "after" : "before",
            mainLabel: (0,strings__WEBPACK_IMPORTED_MODULE_0__.getLocalizedString)("SERVICES_AUGMENTED_LABEL"),
            subLabel: (0,strings__WEBPACK_IMPORTED_MODULE_0__.getLocalizedString)("SERVICES_REALITY_LABEL")
        }
    ];
};


/***/ }),

/***/ 1998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j$": () => (/* binding */ SERVICES_DATA),
/* harmony export */   "MA": () => (/* binding */ SERVICES_MOTION_DIV),
/* harmony export */   "mQ": () => (/* binding */ ABOUT_US_SOCIALS_ICONS),
/* harmony export */   "et": () => (/* binding */ PROJECTS_MOBILE_APPS),
/* harmony export */   "y4": () => (/* binding */ PROJECTS_WEBSITES),
/* harmony export */   "VM": () => (/* binding */ PROJECTS_CONTENT_MANAGEMENT_APP),
/* harmony export */   "tl": () => (/* binding */ PROJECTS_MOTION_DIV),
/* harmony export */   "Ak": () => (/* binding */ ACCOMPLISHMENTS_BACKGROUND_IMAGES),
/* harmony export */   "Kp": () => (/* binding */ ACCOMPLISHMENTS_APPFUTURA_ACHIEVEMENTS)
/* harmony export */ });
/** DEFAULT */ const { SERVICES_DATA , SERVICES_MOTION_DIV  } = __webpack_require__(7253);
const { ABOUT_US_SOCIALS_ICONS  } = __webpack_require__(6677);
const { PROJECTS_MOBILE_APPS , PROJECTS_WEBSITES , PROJECTS_CONTENT_MANAGEMENT_APP , PROJECTS_MOTION_DIV  } = __webpack_require__(4709);
const { ACCOMPLISHMENTS_BACKGROUND_IMAGES , ACCOMPLISHMENTS_APPFUTURA_ACHIEVEMENTS  } = __webpack_require__(1460);



/***/ })

};
;