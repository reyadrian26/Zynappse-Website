"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 9520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export carouseldata */
const carouseldata = [
    {
        projectID: 1,
        projectName: "SARIMOIRE",
        projectImage: "/Carousel/SarimoireImage.png",
        projectType: "Website"
    },
    {
        projectID: 2,
        projectName: "ROBINSONS MALL APP",
        projectImage: "/Carousel/RobinsonsMallImage.png",
        projectType: "Mobile App"
    },
    {
        projectID: 3,
        projectName: "ALFAMART",
        projectImage: "/Carousel/AlfamartImage.png",
        projectType: "Website and Mobile App"
    },
    {
        projectID: 4,
        projectName: "SARIMOIRE",
        projectImage: "/Carousel/SarimoireImage.png",
        projectType: "Website"
    },
    {
        projectID: 5,
        projectName: "ROBINSONS MALL APP",
        projectImage: "/Carousel/RobinsonsMallImage.png",
        projectType: "Mobile App"
    },
    {
        projectID: 6,
        projectName: "ALFAMART",
        projectImage: "/Carousel/AlfamartImage.png",
        projectType: "Website and Mobile App"
    },
    {
        projectID: 7,
        projectName: "SARIMOIRE",
        projectImage: "/Carousel/SarimoireImage.png",
        projectType: "Website"
    },
    {
        projectID: 8,
        projectName: "ROBINSONS MALL APP",
        projectImage: "/Carousel/RobinsonsMallImage.png",
        projectType: "Mobile App"
    },
    {
        projectID: 9,
        projectName: "ALFAMART",
        projectImage: "/Carousel/AlfamartImage.png",
        projectType: "Website and Mobile App"
    },
    {
        projectID: 10,
        projectName: "SARIMOIRE",
        projectImage: "/Carousel/SarimoireImage.png",
        projectType: "Website"
    },
    {
        projectID: 11,
        projectName: "ROBINSONS MALL APP",
        projectImage: "/Carousel/RobinsonsMallImage.png",
        projectType: "Mobile App"
    },
    {
        projectID: 12,
        projectName: "ALFAMART",
        projectImage: "/Carousel/AlfamartImage.png",
        projectType: "Website and Mobile App"
    },
    {
        projectID: 13,
        projectName: "SARIMOIRE",
        projectImage: "/Carousel/SarimoireImage.png",
        projectType: "Website"
    },
    {
        projectID: 14,
        projectName: "ROBINSONS MALL APP",
        projectImage: "/Carousel/RobinsonsMallImage.png",
        projectType: "Mobile App"
    },
    {
        projectID: 15,
        projectName: "ALFAMART",
        projectImage: "/Carousel/AlfamartImage.png",
        projectType: "Website and Mobile App"
    },
    {
        projectID: 16,
        projectName: "SARIMOIRE",
        projectImage: "/Carousel/SarimoireImage.png",
        projectType: "Website"
    },
    {
        projectID: 17,
        projectName: "ROBINSONS MALL APP",
        projectImage: "/Carousel/RobinsonsMallImage.png",
        projectType: "Mobile App"
    },
    {
        projectID: 18,
        projectName: "ALFAMART",
        projectImage: "/Carousel/AlfamartImage.png",
        projectType: "Website and Mobile App"
    }, 
];


/***/ }),

/***/ 5566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export CarouselItems */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const CarouselItems = ({ item , viewAll  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: `${styles.CarouselItem} ${viewAll ? styles.ViewAll : ""}`,
        children: /*#__PURE__*/ _jsxs("div", {
            className: styles.FlexContainerInLine,
            children: [
                /*#__PURE__*/ _jsx("img", {
                    className: styles.CarouselImage,
                    src: item.projectImage
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: styles.CarouselProjName,
                    children: item.projectName
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: styles.CarouselProjType,
                    children: [
                        item.projectType,
                        /*#__PURE__*/ _jsx("span", {
                            className: styles.arrow,
                            children: ">>"
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            children: "Visit Site"
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 3993:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Landing_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6589);
/* harmony import */ var _CarouselItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var _ArrayofData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9520);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Landing_Projects__WEBPACK_IMPORTED_MODULE_1__]);
components_Landing_Projects__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Carousel = ()=>{
    const { 0: activeIndex , 1: setActiveIndex  } = useState(0);
    const { 0: showNewProject , 1: setShowNewProject  } = useState(false);
    const updateIndex = (newIndex)=>{
        const lastIndex = carouseldata.length - 1;
        if (newIndex < 0) {
            newIndex = lastIndex;
        } else if (newIndex > lastIndex) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };
    //AUTOPLAY
    useEffect(()=>{
        const interval = setInterval(()=>{
            updateIndex(activeIndex + 1);
        }, 1000);
        return ()=>{
            clearInterval(interval);
        };
    }, [
        activeIndex
    ]);
    const handleViewAllClick = ()=>{
        setShowNewProject(true);
    };
    if (showNewProject) {
        return /*#__PURE__*/ _jsx(Projects, {});
    }
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.carouselContainer,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: styles.FlexContainer,
                children: [
                    " ",
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.Heading,
                        children: "Some of our Projects"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.Button,
                        onClick: handleViewAllClick,
                        children: "View All"
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.CarouselContainer,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.Inner,
                        style: {
                            transform: `translate(-${activeIndex * 25}%)`
                        },
                        children: carouseldata.map((item)=>{
                            return /*#__PURE__*/ _jsx(CarouselItems, {
                                item: item
                            }, item.projectID);
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        onClick: ()=>{
                            updateIndex(activeIndex + 1);
                        },
                        className: styles.ArrowContainer,
                        children: /*#__PURE__*/ _jsx("div", {
                            className: styles.Arrow,
                            children: "\u279C"
                        })
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Carousel)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var components_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(971);

/** LIBRARIES */ 



/** COMPONENTS */ const HomeComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 733).then(__webpack_require__.bind(__webpack_require__, 733))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/index.js -> " + "components/Landing/Home"
        ]
    }
});
const ServicesComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 265).then(__webpack_require__.bind(__webpack_require__, 265))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/index.js -> " + "components/Landing/Services"
        ]
    }
});
const AboutUsComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 921).then(__webpack_require__.bind(__webpack_require__, 921))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/index.js -> " + "components/Landing/AboutUs"
        ]
    }
});
const ProjectsComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 6589))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/index.js -> " + "components/Landing/Projects"
        ]
    }
});
const SkillsComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 5625).then(__webpack_require__.bind(__webpack_require__, 5625))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/index.js -> " + "components/Landing/Skills"
        ]
    }
});
const TechStackComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 3912).then(__webpack_require__.bind(__webpack_require__, 3912))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/index.js -> " + "components/Landing/TechStack"
        ]
    }
});
const AccomplishmentsComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 6720).then(__webpack_require__.bind(__webpack_require__, 6720))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/index.js -> " + "components/Landing/Accomplishments"
        ]
    }
});
const Landing = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HomeComponent, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ServicesComponent, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AboutUsComponent, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProjectsComponent, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AccomplishmentsComponent, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SkillsComponent, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TechStackComponent, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);


/***/ }),

/***/ 9031:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/NewMeetTheFounders/executives_list.js
const executives_list_executivesList = [
    {
        id: "CEO",
        imageFile: "/static/new_meet_the_founders_images/ceo_img.png",
        alt: "CEO_img",
        name: "Cris Tagle",
        position: "Chief Executive Officer",
        description: "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \u201C"
    },
    {
        id: "CIO",
        imageFile: "/static/new_meet_the_founders_images/cio_img.png",
        alt: "CIO_img",
        name: "Allan Javier",
        position: "Chief Information Officer",
        description: "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \u201C"
    },
    {
        id: "CMO",
        imageFile: "/static/new_meet_the_founders_images/cmo_img.png",
        alt: "CMO_img",
        name: "Rachelle Consul",
        position: "Chief Marketing Officer",
        description: "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \u201C"
    },
    {
        id: "CTO",
        imageFile: "/static/new_meet_the_founders_images/cto_img.png",
        alt: "CTO_img",
        name: "John Paul Orpilla",
        position: "Chief Technology Officer",
        description: "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \u201C"
    },
    {
        id: "MDirector",
        imageFile: "/static/new_meet_the_founders_images/md_img.png",
        alt: "MD_img",
        name: "Trixia Betito",
        position: "Multimedia Director",
        description: "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \u201C"
    }, 
];
/* harmony default export */ const executives_list = ((/* unused pure expression or super */ null && (executives_list_executivesList)));

// EXTERNAL MODULE: ./components/generics/Footer/index.js + 1 modules
var Footer = __webpack_require__(274);
;// CONCATENATED MODULE: ./components/NewMeetTheFounders/index.js






const Index = ()=>{
    // splits the array
    const firstRowExecutives = executivesList.slice(0, 3);
    const secondRowExecutives = executivesList.slice(3);
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.executivesContainer,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: styles.executivesDiv,
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        className: styles.executiveTitle,
                        children: "Executive Directors"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.executivesFirstRow,
                        children: firstRowExecutives.map((executive, index)=>/*#__PURE__*/ _jsxs("div", {
                                className: styles["column" + executive.id],
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: styles.teamProfileWrapper,
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: styles.imageContainer,
                                            children: /*#__PURE__*/ _jsx(Image, {
                                                src: executive.imageFile,
                                                alt: executive.alt,
                                                layout: "fill",
                                                className: styles.imageStyle
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("h2", {
                                        className: styles.executiveName,
                                        children: executive.name
                                    }),
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: styles.executivePosition,
                                        children: executive.position
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: styles.executiveDescription,
                                        children: executive.description
                                    })
                                ]
                            }, index)
                        )
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.executivesSecondRow,
                        children: secondRowExecutives.map((executive, index)=>/*#__PURE__*/ _jsxs("div", {
                                className: styles["column" + executive.id],
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: styles.teamProfileWrapper,
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: styles.imageContainer,
                                            children: /*#__PURE__*/ _jsx(Image, {
                                                src: executive.imageFile,
                                                alt: executive.alt,
                                                layout: "fill",
                                                className: styles.imageStyle
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("h2", {
                                        className: styles.executiveName,
                                        children: executive.name
                                    }),
                                    /*#__PURE__*/ _jsx("h4", {
                                        className: styles.executivePosition,
                                        children: executive.position
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                        className: styles.executiveDescription,
                                        children: executive.description
                                    })
                                ]
                            }, index)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: styles.placeHolderContainer,
                children: /*#__PURE__*/ _jsxs("div", {
                    className: styles.placeholderDiv,
                    children: [
                        /*#__PURE__*/ _jsx("p", {
                            children: "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\u201D"
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            className: styles.quoteText,
                            children: "-Lorem Ipsum"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const NewMeetTheFounders = ((/* unused pure expression or super */ null && (Index)));


/***/ }),

/***/ 2599:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const ProductsAndServices = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs("div", {
            className: styles.ProductsAndServicesContainer,
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: styles.ProductsAndServicesLabel,
                    children: [
                        "PRODUCTS AND ",
                        /*#__PURE__*/ _jsx("span", {
                            className: styles.RedWord,
                            children: "SERVICES"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: styles.GlassContainer,
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: [
                                styles.Col1,
                                styles.mobGlassContainer
                            ].join(" "),
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: styles.GlassBox,
                                    children: [
                                        "CLOUD BASED SOLUTIONS",
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/ProductsAndServices/cloudicon.svg"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: styles.GlassBox,
                                    children: [
                                        "iBEACONS",
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/ProductsAndServices/beaconsicon.svg"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: styles.GlassBox,
                                    children: [
                                        "MOBILE SOLUTIONS",
                                        " ",
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/ProductsAndServices/mobile-solutions-icon.svg"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: styles.GlassBox,
                                    children: [
                                        "ARTIFICIAL INTELLIGENCE",
                                        " ",
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/ProductsAndServices/ai-icon.svg"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: [
                                styles.Col2,
                                styles.mobGlassContainer
                            ].join(" "),
                            children: [
                                " ",
                                /*#__PURE__*/ _jsxs("div", {
                                    className: styles.GlassBox,
                                    children: [
                                        "AUGMENTED REALITY",
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/ProductsAndServices/ar-icon.svg"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: styles.GlassBox,
                                    children: [
                                        "BLOCKCHAIN",
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/ProductsAndServices/blockchain-icon.svg"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: styles.GlassBox,
                                    children: [
                                        "KINECT ENABLED GAMES",
                                        " ",
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/ProductsAndServices/kinect-enabled-games-icon.svg"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: styles.GlassBox,
                                    children: [
                                        "UI/UX ",
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/ProductsAndServices/ui-ux-icon.svg"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: [
                                styles.Col3,
                                styles.mobGlassContainer
                            ].join(" "),
                            children: [
                                " ",
                                /*#__PURE__*/ _jsxs("div", {
                                    className: styles.GlassBox,
                                    children: [
                                        "PROJECT MANAGEMENT",
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/ProductsAndServices/project-management-icon.svg"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: styles.GlassBox,
                                    children: [
                                        "QUALITY ASSURANCE AND TESTING",
                                        " ",
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/ProductsAndServices/qa-icon.svg"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: styles.GlassBox,
                                    children: [
                                        "PRODUCT/BRAND DEVELOPMENT",
                                        " ",
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/ProductsAndServices/product-development-icon.svg"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: styles.GlassBox,
                                    children: [
                                        "HARDWARE INFRASTRUCTURE",
                                        " ",
                                        /*#__PURE__*/ _jsx("img", {
                                            src: "/ProductsAndServices/hardware-infrastructure-icon.svg"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ProductsAndServices)));


/***/ }),

/***/ 525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_generics_SemanticUIReact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2847);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8333);
/* harmony import */ var styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(912);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(strings__WEBPACK_IMPORTED_MODULE_3__);

/** LIBRARIES */ 
/** SEMANTIC UI COMPONENTS */ 
/** STYLES */ 

const UnderConstructionWrapper = (_Component)=>{
    return (props)=>{
        const { 0: isUnderConstruction , 1: setIsUnderConstruction  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            let isIgnore = false;
            if (!isIgnore && "undefined" !== "undefined") {}
        }, []);
        if (isUnderConstruction) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: [
                        (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
                        (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().textCenter)
                    ].join(" "),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_generics_SemanticUIReact__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_generics_SemanticUIReact__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h4, {
                                as: "h1",
                                className: [
                                    (styles_main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().pt3)
                                ].join(" "),
                                textAlign: "center",
                                children: (0,strings__WEBPACK_IMPORTED_MODULE_3__.getLocalizedString)("UNDER_CONSTRUCTION_TITLE")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: (0,strings__WEBPACK_IMPORTED_MODULE_3__.getLocalizedString)("UNDER_CONSTRUCTION_DESCRIPTION")
                            })
                        ]
                    })
                })
            });
        } else {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Component, {
                ...props
            });
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnderConstructionWrapper);


/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var components_generics_UnderConstructionWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(525);
/* harmony import */ var layout_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9046);
/* harmony import */ var components_Landing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8686);
/* harmony import */ var _components_NewContactUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8126);
/* harmony import */ var components_ProductsAndServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2599);
/* harmony import */ var _components_NewMeetTheFounders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9031);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3993);
/* harmony import */ var components_assets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(971);
/* harmony import */ var components_NavBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7757);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(912);
/* harmony import */ var strings__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(strings__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Carousel__WEBPACK_IMPORTED_MODULE_8__]);
_components_Carousel__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/** LIBRARIES */ 
/** COMPONENTS */ 


const Footer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 274))
, {
    loadableGenerated: {
        modules: [
            "index.js -> " + "components/generics/Footer"
        ]
    }
});







const Home = (props)=>{
    let mainLayoutProps = {
        ...props,
        hasMetaTags: true,
        hasHeader: true,
        title: (0,strings__WEBPACK_IMPORTED_MODULE_11__.getLocalizedString)("META_HOME_PAGE_LABEL"),
        imageUrl: `${components_assets__WEBPACK_IMPORTED_MODULE_9__/* .images.genericMetaImage */ .W.genericMetaImage}`,
        imageAlt: `zynappse`,
        imageWidth: 600,
        imageHeight: 600
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(layout_main__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ...mainLayoutProps,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Landing__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,components_generics_UnderConstructionWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Home));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 4508:
/***/ ((module) => {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 2730:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1397,676,1664,5675,5152,8333,971,912,7757,9046,2847,6589,8126,274], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();