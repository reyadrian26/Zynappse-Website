"use strict";
exports.id = 274;
exports.ids = [274];
exports.modules = {

/***/ 274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ generics_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./strings/index.js
var strings = __webpack_require__(912);
// EXTERNAL MODULE: ./styles/main.module.scss
var main_module = __webpack_require__(8333);
var main_module_default = /*#__PURE__*/__webpack_require__.n(main_module);
// EXTERNAL MODULE: ./components/assets/index.js
var assets = __webpack_require__(971);
// EXTERNAL MODULE: ./components/generics/SemanticUIReact.js
var SemanticUIReact = __webpack_require__(2847);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(2730);
;// CONCATENATED MODULE: ./components/generics/Footer/mapFuncs.js

/** SEMANTIC UI COMPONENTS */ 



const servicesArr = [
    "MOBILE APPS",
    "WEB AND E-COMMERCE",
    "CLOUD AND DATABASE MANAGEMENT"
];
const servicesMap = servicesArr.map((service, index)=>/*#__PURE__*/ jsx_runtime_.jsx(SemanticUIReact/* ListItem */.HC, {
        className: (main_module_default()).footerItem,
        children: service
    }, index)
);
const skillsArr = [
    "ANDROID",
    "IOS",
    "WEB"
];
const skillsMap = skillsArr.map((skill, index)=>/*#__PURE__*/ jsx_runtime_.jsx(SemanticUIReact/* ListItem */.HC, {
        className: (main_module_default()).footerItem,
        children: skill
    }, index)
);
const contactArr = [
    {
        contact: "Unit 202 2nd Floor #19 Libertad Plaza Building Libertad Street, Brgy. Highway Hills Mandaluyong City 1550",
        icon: "map marker alternate",
        style: ""
    },
    {
        contact: "+63. 8. 291-4837",
        icon: "phone",
        style: (main_module_default()).phoneIcon
    },
    {
        contact: "hi@zynappse.com",
        icon: "mail",
        style: ""
    }, 
];
const contactMap = contactArr.map((con, index)=>/*#__PURE__*/ jsx_runtime_.jsx(SemanticUIReact/* ListItem */.HC, {
        className: [
            (main_module_default()).footerItem,
            con.style
        ].join(" "),
        icon: con.icon,
        content: con.contact
    }, index)
);

;// CONCATENATED MODULE: ./components/generics/Footer/index.js





/** COMPONENTS*/ 
/** SEMANTIC UI COMPONENTS */ 

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (main_module_default()).footerCont,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (main_module_default()).footerBackground,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (main_module_default()).leftFooter,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: [
                                (main_module_default()).zyLogo,
                                (main_module_default()).imageContainer
                            ].join(" "),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: assets/* images.genericLogoIcon */.W.genericLogoIcon,
                                className: (main_module_default()).image,
                                alt: "logo",
                                layout: "fill"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: [
                                        (main_module_default()).zyText,
                                        (main_module_default()).imageContainer
                                    ].join(" "),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: assets/* images.genericLogoText */.W.genericLogoText,
                                        className: (main_module_default()).image,
                                        alt: "logo name",
                                        layout: "fill"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (main_module_default()).footerTagline,
                                    children: (0,strings.getLocalizedString)("FOOTER_TAGLINE")
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (main_module_default()).rightFooter,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (main_module_default()).mobileTwoBlocks,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (main_module_default()).servicesCont,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(SemanticUIReact/* Header */.h4, {
                                            as: "h6",
                                            className: (main_module_default()).footerHeader,
                                            children: (0,strings.getLocalizedString)("FOOTER_SERVICES")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(SemanticUIReact/* List */.aV, {
                                            className: (main_module_default()).footerList,
                                            children: servicesMap
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (main_module_default()).skillsCont,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(SemanticUIReact/* Header */.h4, {
                                            as: "h6",
                                            className: (main_module_default()).footerHeader,
                                            children: (0,strings.getLocalizedString)("FOOTER_SKILLS")
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(SemanticUIReact/* List */.aV, {
                                            className: (main_module_default()).footerList,
                                            children: skillsMap
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (main_module_default()).contactCont,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SemanticUIReact/* Header */.h4, {
                                    as: "h6",
                                    className: (main_module_default()).footerHeader,
                                    children: (0,strings.getLocalizedString)("FOOTER_CONTACT")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SemanticUIReact/* List */.aV, {
                                    className: (main_module_default()).footerList,
                                    children: contactMap
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const generics_Footer = (Footer);


/***/ })

};
;