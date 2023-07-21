"use strict";
exports.id = 281;
exports.ids = [281];
exports.modules = {

/***/ 6281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PhoneSection)
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
;// CONCATENATED MODULE: ./components/AboutUs/Background.js





function Background() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (main_module_default()).aboutPageMobileCircleBackground,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (main_module_default()).circleImageWrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (main_module_default()).circle,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: assets/* images.aboutUsLeftCircleImage */.W.aboutUsLeftCircleImage,
                        layout: "fill"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (main_module_default()).circle,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: assets/* images.aboutUsRightCircleImage */.W.aboutUsRightCircleImage,
                        layout: "fill"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const AboutUs_Background = (Background);

// EXTERNAL MODULE: ./strings/index.js
var strings = __webpack_require__(912);
;// CONCATENATED MODULE: ./components/AboutUs/PhoneSection/Content.js







function page2Content() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (main_module_default()).aboutUsContent,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AboutUs_Background, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (main_module_default()).aboutUsContentWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (main_module_default()).aboutUsHeaderContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                children: [
                                    (0,strings.getLocalizedString)("ABOUT_US_ABOUT_LABEL"),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: (0,strings.getLocalizedString)("ABOUT_US_US_LABEL")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: (0,strings.getLocalizedString)("ABOUT_US_MOTTO_TITLE")
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (main_module_default()).phoneImage,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: assets/* images.aboutUsPhoneImage */.W.aboutUsPhoneImage,
                            layout: "fill"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (main_module_default()).missionText,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: (0,strings.getLocalizedString)("ABOUT_US_MISSION_TEXT_ONE")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: (0,strings.getLocalizedString)("ABOUT_US_MISSION_TEXT_TWO")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: (0,strings.getLocalizedString)("ABOUT_US_YEARS_OF_EXPERIENCE_LABEL")
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Content = (page2Content);

;// CONCATENATED MODULE: ./components/AboutUs/PhoneSection/index.js






function index() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (main_module_default()).aboutUs,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (main_module_default()).mainBackgroundTexture,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: assets/* images.genericTexturedBackground */.W.genericTexturedBackground,
                    layout: "fill"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Content, {})
        ]
    });
}
/* harmony default export */ const PhoneSection = (index);


/***/ })

};
;