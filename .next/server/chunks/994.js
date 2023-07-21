"use strict";
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 2994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MeetTheFounders)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/main.module.scss
var main_module = __webpack_require__(8333);
var main_module_default = /*#__PURE__*/__webpack_require__.n(main_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/assets/index.js
var assets = __webpack_require__(971);
;// CONCATENATED MODULE: ./components/AboutUs/MeetTheFounders/ExecutivesList.js

const executivesList = [
    {
        id: "CEO",
        imageFile: assets/* images.executiveCeoImage */.W.executiveCeoImage,
        alt: "CEO_img",
        name: "Cris Tagle",
        position: "Chief Executive Officer",
        description: "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \u201C"
    },
    {
        id: "CIO",
        imageFile: assets/* images.executiveCioImage */.W.executiveCioImage,
        alt: "CIO_img",
        name: "Allan Javier",
        position: "Chief Information Officer",
        description: "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \u201C"
    },
    {
        id: "CMO",
        imageFile: assets/* images.executiveCmoImage */.W.executiveCmoImage,
        alt: "CMO_img",
        name: "Rachelle Consul",
        position: "Chief Marketing Officer",
        description: "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \u201C"
    },
    {
        id: "CTO",
        imageFile: assets/* images.executiveCtoImage */.W.executiveCtoImage,
        alt: "CTO_img",
        name: "John Paul Orpilla",
        position: "Chief Technology Officer",
        description: "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \u201C"
    },
    {
        id: "MDirector",
        imageFile: assets/* images.executiveMdirectorImage */.W.executiveMdirectorImage,
        alt: "MD_img",
        name: "Trixia Betito",
        position: "Multimedia Director",
        description: "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \u201C"
    }, 
];
/* harmony default export */ const ExecutivesList = (executivesList);

// EXTERNAL MODULE: ./strings/index.js
var strings = __webpack_require__(912);
;// CONCATENATED MODULE: ./components/AboutUs/MeetTheFounders/index.js






const Index = ()=>{
    // splits the array
    const firstRowExecutives = ExecutivesList.slice(0, 3);
    const secondRowExecutives = ExecutivesList.slice(3);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (main_module_default()).executivesContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (main_module_default()).executivesDiv,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (main_module_default()).executiveTitle,
                        children: (0,strings.getLocalizedString)("ABOUT_US_EXECUTIVE_TITLE")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (main_module_default()).executivesFirstRow,
                        children: firstRowExecutives.map((executive, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (main_module_default())["column" + executive.id],
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (main_module_default()).teamProfileWrapper,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (main_module_default()).imageContainer,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: executive.imageFile,
                                                alt: executive.alt,
                                                layout: "fill",
                                                className: (main_module_default()).imageStyle
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: (main_module_default()).executiveName,
                                        children: executive.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: (main_module_default()).executivePosition,
                                        children: executive.position
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (main_module_default()).executiveDescription,
                                        children: executive.description
                                    })
                                ]
                            }, index)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (main_module_default()).executivesSecondRow,
                        children: secondRowExecutives.map((executive, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (main_module_default())["column" + executive.id],
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (main_module_default()).teamProfileWrapper,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (main_module_default()).imageContainer,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: executive.imageFile,
                                                alt: executive.alt,
                                                layout: "fill",
                                                className: (main_module_default()).imageStyle
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: (main_module_default()).executiveName,
                                        children: executive.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: (main_module_default()).executivePosition,
                                        children: executive.position
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: (main_module_default()).executiveDescription,
                                        children: executive.description
                                    })
                                ]
                            }, index)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (main_module_default()).placeHolderContainer,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (main_module_default()).placeholderDiv,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: (0,strings.getLocalizedString)("ABOUT_US_CONTENT_QUOTE_LABEL")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (main_module_default()).quoteText,
                            children: (0,strings.getLocalizedString)("ABOUT_US_CONTENT_AUTHOR_LABEL")
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const MeetTheFounders = (Index);


/***/ })

};
;