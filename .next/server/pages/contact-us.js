"use strict";
(() => {
var exports = {};
exports.id = 455;
exports.ids = [455];
exports.modules = {

/***/ 8796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact_us)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./components/assets/index.js
var assets = __webpack_require__(971);
// EXTERNAL MODULE: ./styles/main.module.scss
var main_module = __webpack_require__(8333);
var main_module_default = /*#__PURE__*/__webpack_require__.n(main_module);
// EXTERNAL MODULE: ./strings/index.js
var strings = __webpack_require__(912);
;// CONCATENATED MODULE: ./components/NewContactUs/index.js




const NewContactUs = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (main_module_default()).NewContactUsContainer,
            id: "contactContainer",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (main_module_default()).ContactUsLabelContainer,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (main_module_default()).ContactLabel,
                            children: (0,strings.getLocalizedString)("CONTACT_US_CONTACT_LABEL")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (main_module_default()).UsLabel,
                            children: (0,strings.getLocalizedString)("CONTACT_US_US_LABEL")
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (main_module_default()).DetailsContainer,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (main_module_default()).DetailsBackground,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (main_module_default()).WeWantLabel,
                                children: (0,strings.getLocalizedString)("CONTACT_US_TITLE_LABEL")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (main_module_default()).DetailColContainer,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (main_module_default()).DetailCol1,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (main_module_default()).TellUsLabel,
                                                children: (0,strings.getLocalizedString)("CONTACT_US_SUBTITLE_LABEL")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (main_module_default()).NameLabel,
                                                children: (0,strings.getLocalizedString)("CONTACT_US_NAME_LABEL")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: (main_module_default()).NameInput
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (main_module_default()).EmailLabel,
                                                children: (0,strings.getLocalizedString)("CONTACT_US_EMAIL_LABEL")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: (main_module_default()).EmailInput
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (main_module_default()).MessageLabel,
                                                children: (0,strings.getLocalizedString)("CONTACT_US_MESSAGE_LABEL")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                className: (main_module_default()).MessageTextarea
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (main_module_default()).DetailCol2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (main_module_default()).ImageContainer,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: assets/* images.contactUsLaptopImage */.W.contactUsLaptopImage
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: (main_module_default()).SubmitButton,
                                                children: (0,strings.getLocalizedString)("CONTACT_US_SUBMIT_BUTTON_LABEL")
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (main_module_default()).RedCircleContainer,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: assets/* images.contactUsCircleImage */.W.contactUsCircleImage
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_NewContactUs = (NewContactUs);

// EXTERNAL MODULE: ./components/NavBar/index.js
var NavBar = __webpack_require__(7757);
;// CONCATENATED MODULE: ./pages/contact-us.js

/** LIBRARIES */ 



const MainLayout = (0,dynamic["default"])(()=>__webpack_require__.e(/* import() */ 46).then(__webpack_require__.bind(__webpack_require__, 9046))
, {
    loadableGenerated: {
        modules: [
            "contact-us.js -> " + "layout/main"
        ]
    }
});

const ContactUs = (props)=>{
    let mainLayoutProps = {
        ...props,
        hasMetaTags: true,
        hasHeader: true,
        hasFooter: false,
        title: (0,strings.getLocalizedString)("CONTACT_US_META_TITLE_LABEL"),
        imageUrl: `${assets/* images.genericMetaImage */.W.genericMetaImage}`,
        imageAlt: `zynappse`,
        imageWidth: 600,
        imageHeight: 600
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(MainLayout, {
        ...mainLayoutProps,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_NewContactUs, {})
    });
};
/* harmony default export */ const contact_us = (ContactUs);


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [397,675,676,664,152,971,142,757], () => (__webpack_exec__(8796)));
module.exports = __webpack_exports__;

})();