"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/generics/SemanticUIReact.js
var SemanticUIReact = __webpack_require__(2847);
// EXTERNAL MODULE: ./styles/main.module.scss
var main_module = __webpack_require__(8333);
var main_module_default = /*#__PURE__*/__webpack_require__.n(main_module);
// EXTERNAL MODULE: ./strings/index.js
var strings = __webpack_require__(912);
;// CONCATENATED MODULE: ./components/generics/UnderConstructionWrapper.js

/** LIBRARIES */ 
/** SEMANTIC UI COMPONENTS */ 
/** STYLES */ 

const UnderConstructionWrapper = (_Component)=>{
    return (props)=>{
        const { 0: isUnderConstruction , 1: setIsUnderConstruction  } = (0,external_react_.useState)(false);
        (0,external_react_.useEffect)(()=>{
            let isIgnore = false;
            if (!isIgnore && "undefined" !== "undefined") {}
        }, []);
        if (isUnderConstruction) {
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: [
                        (main_module_default()).content,
                        (main_module_default()).textCenter
                    ].join(" "),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SemanticUIReact/* Container */.W2, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SemanticUIReact/* Header */.h4, {
                                as: "h1",
                                className: [
                                    (main_module_default()).pt3
                                ].join(" "),
                                textAlign: "center",
                                children: (0,strings.getLocalizedString)("UNDER_CONSTRUCTION_TITLE")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: (0,strings.getLocalizedString)("UNDER_CONSTRUCTION_DESCRIPTION")
                            })
                        ]
                    })
                })
            });
        } else {
            return /*#__PURE__*/ jsx_runtime_.jsx(_Component, {
                ...props
            });
        }
    };
};
/* harmony default export */ const generics_UnderConstructionWrapper = (UnderConstructionWrapper);

// EXTERNAL MODULE: ./layout/main.js
var main = __webpack_require__(9046);
;// CONCATENATED MODULE: ./components/Landing/index.js

/** LIBRARIES */ 
/** COMPONENTS */ const HomeComponent = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(397), __webpack_require__.e(675), __webpack_require__.e(733)]).then(__webpack_require__.bind(__webpack_require__, 733))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/index.js -> " + "components/Landing/Home"
        ]
    }
});
const ServicesComponent = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(397), __webpack_require__.e(675), __webpack_require__.e(998), __webpack_require__.e(265)]).then(__webpack_require__.bind(__webpack_require__, 265))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/index.js -> " + "components/Landing/Services"
        ]
    }
});
const AboutUsComponent = (0,dynamic["default"])(()=>__webpack_require__.e(/* import() */ 921).then(__webpack_require__.bind(__webpack_require__, 921))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/index.js -> " + "components/Landing/AboutUs"
        ]
    }
});
const ProjectsComponent = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(998), __webpack_require__.e(589)]).then(__webpack_require__.bind(__webpack_require__, 6589))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/index.js -> " + "components/Landing/Projects"
        ]
    }
});
const SkillsComponent = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(397), __webpack_require__.e(675), __webpack_require__.e(625)]).then(__webpack_require__.bind(__webpack_require__, 5625))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/index.js -> " + "components/Landing/Skills"
        ]
    }
});
const TechStackComponent = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(397), __webpack_require__.e(675), __webpack_require__.e(912)]).then(__webpack_require__.bind(__webpack_require__, 3912))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/index.js -> " + "components/Landing/TechStack"
        ]
    }
});
const AccomplishmentsComponent = (0,dynamic["default"])(()=>__webpack_require__.e(/* import() */ 720).then(__webpack_require__.bind(__webpack_require__, 6720))
, {
    loadableGenerated: {
        modules: [
            "../components/Landing/index.js -> " + "components/Landing/Accomplishments"
        ]
    }
});
/* STYLES */ 
const Landing = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (main_module_default()).overflowHidden,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HomeComponent, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ServicesComponent, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(AboutUsComponent, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ProjectsComponent, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(AccomplishmentsComponent, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SkillsComponent, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(TechStackComponent, {})
        ]
    });
};
/* harmony default export */ const components_Landing = (Landing);

// EXTERNAL MODULE: ./components/assets/index.js
var assets = __webpack_require__(971);
;// CONCATENATED MODULE: ./pages/index.js

/** LIBRARIES */ 
/** COMPONENTS */ 




const Home = (props)=>{
    let mainLayoutProps = {
        ...props,
        hasMetaTags: true,
        hasHeader: true,
        hasFooter: true,
        title: (0,strings.getLocalizedString)("META_HOME_PAGE_LABEL"),
        imageUrl: `${assets/* images.genericMetaImage */.W.genericMetaImage}`,
        imageAlt: `zynappse`,
        imageWidth: 600,
        imageHeight: 600
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(main["default"], {
        ...mainLayoutProps,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Landing, {})
    });
};
/* harmony default export */ const pages = (generics_UnderConstructionWrapper(Home));


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
var __webpack_exports__ = __webpack_require__.X(0, [152,971,142,46,847], () => (__webpack_exec__(8513)));
module.exports = __webpack_exports__;

})();