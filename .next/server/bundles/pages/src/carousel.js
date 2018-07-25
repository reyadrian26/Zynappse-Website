module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarouselBanner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // import {images} from '../assets';
// import '../css/linkgrid.css';
// import {images} from './../../public/assets';
// eslint-disable-next-line

var CarouselBanner =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselBanner, _Component);

  function CarouselBanner() {
    _classCallCheck(this, CarouselBanner);

    return _possibleConstructorReturn(this, (CarouselBanner.__proto__ || Object.getPrototypeOf(CarouselBanner)).apply(this, arguments));
  }

  _createClass(CarouselBanner, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"], {
        indicators: false
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup  animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/rwm2.png",
        alt: "rwm",
        width: 230
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce",
        style: {
          transform: "rotateX(-60deg) rotateZ(28deg) translateX(250px) translateY(324px) translateZ(-189px)"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/rwm.png",
        alt: "rwm",
        width: 230
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6,
        className: "text-left   "
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "animatedParent animateOnce text-left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left animated fadeInUp"
      }, "Resorts World Manila"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left  animated fadeInUp delay-250"
      }, "This Resorts World Manila Mobile Companion is your best friend in and around the Philippines\u2019 First Integrated Entertainment Hub. Get updated on the latest promotions and events that are happening at the resort. Look up movie schedules from the Newport Cinemas. Browse through the Resorts World Manila Exclusives packages."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-500"
      }, "Available on:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp delay-750"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=com.zynappse.rwmanila&hl=en",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        style: {
          paddingRight: "32px"
        },
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "https://itunes.apple.com/ph/app/rwm-mobile-app/id909015173?mt=8",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/apple_no_animation.svg",
        target: "_blank",
        height: "50"
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup  animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/alaska2.png",
        alt: "alaska",
        width: 230
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce",
        style: {
          transform: "rotateX(-60deg) rotateZ(28deg) translateX(250px) translateY(324px) translateZ(-189px)"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/alaska.png",
        alt: "alaska",
        width: 230
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6,
        className: "text-left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left animated fadeInUp "
      }, "Alaska Aces"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-250 "
      }, "The Official Alaska Aces PBA Basketball Team iPhone App. Stay connected to the Alaska Aces everywhere you go. Get Alaska Aces news, player profiles, schedules and more."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-500"
      }, "Available on:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp delay-750"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=ph.com.alaskaaces&hl=en",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        style: {
          paddingRight: "32px"
        },
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "https://itunes.apple.com/ph/app/alaska-aces/id743641908?mt=8",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/apple_no_animation.svg",
        target: "_blank",
        height: "50"
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup  animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/myblood2.png",
        alt: "myblood",
        width: 230
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce",
        style: {
          transform: "rotateX(-60deg) rotateZ(28deg) translateX(250px) translateY(324px) translateZ(-189px)"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/myblood.png",
        alt: "myblood",
        width: 230
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6,
        className: "text-left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left"
      }, "My Blood"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left"
      }, "My Blood is a healthy lifestyle app that graphically presents and tracks your lab results. It gives health recommendations based on your calculated risk of developing lifestyle diseases. This app is only available for use on select tests from partner laboratories."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-500"
      }, "Available on:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp delay-750"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=com.mybloodprofile.myblood&hl=en",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        style: {
          paddingRight: "32px"
        },
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "https://itunes.apple.com/ph/app/myblood-profile/id1208015547?mt=8",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/apple_no_animation.svg",
        target: "_blank",
        height: "50"
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup  animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/unfold2.png",
        alt: "unfold",
        width: 230
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce",
        style: {
          transform: "rotateX(-60deg) rotateZ(28deg) translateX(250px) translateY(324px) translateZ(-189px)"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/unfold.png",
        alt: "unfold",
        width: 230
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6,
        className: "text-left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left"
      }, "Unfold App"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left"
      }, "Unfold is an app that makes Master Choa Kok Sui\u2019s teachings more modern and accessible than ever before. The app allows users to receive daily nuggets of inspiration from his teachings and also allows them to personalize the quotes through various fonts, backgrounds, and stickers."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-500"
      }, "Available on:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp delay-750"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=com.unfold.unfold&hl=en",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        style: {
          paddingRight: "32px"
        },
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "https://itunes.apple.com/ph/app/unfold-app/id830612465?mt=8",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/apple_no_animation.svg",
        target: "_blank",
        height: "50"
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup  animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/flashunt2.png",
        alt: "flashunt",
        width: 230
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce",
        style: {
          transform: "rotateX(-60deg) rotateZ(28deg) translateX(250px) translateY(324px) translateZ(-189px)"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/flashunt.png",
        alt: "flashunt",
        width: 230
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6,
        className: "text-left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left"
      }, "Flashunt"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left"
      }, "FLASHUNT is a mobile scavenger hunt app that engages its users in physical tasks and the excitement of Augmented Reality! Made even more interactive with its in-app sharing of user\u2019s experience to their Social Media accounts. This app makes use of the latest digital solutions to deliver a relevant and truly rewarding experience!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-500"
      }, "Available on:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp delay-750"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=com.zynappse.flashnt&hl=en",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50"
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup  animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/locali2.png",
        alt: "locali",
        width: 230
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce",
        style: {
          transform: "rotateX(-60deg) rotateZ(28deg) translateX(250px) translateY(324px) translateZ(-189px)"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/locali.png",
        alt: "locali",
        width: 230
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6,
        className: "text-left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left"
      }, "Locali"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left"
      }, "An integrated tourism app that will turn any tourist into a local citizen of Manila, LOCALi revolutionizes the way tourists immerse themselves in the beautiful Capital of the Philippines. With an interface that allows users to scan through the city for virtually anything they want \u2013 from restaurants, to cultural spots, to holes-in-the-wall, etc."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-500"
      }, "Available on:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp delay-750"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 3,
        className: "text-left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=com.zynappse.locali&hl=en",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50"
      }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup  animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/oap2.png",
        alt: "oap",
        width: 230
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce",
        style: {
          transform: "rotateX(-60deg) rotateZ(28deg) translateX(250px) translateY(324px) translateZ(-189px)"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/oap.png",
        alt: "oap",
        width: 230
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6,
        className: "text-left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left"
      }, "Our Awesome Planet"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left"
      }, "The Our Awesome Planet App is your personal travel guide to the most awesome food and travel experiences in the Philippines. Know the best restaurants, best places, and best travel experiences in the Philippines as curated by Anton Diaz, founder of the top food & travel blog in the Philippines and ASEAN since 2005."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left animated fadeInUp delay-500"
      }, "Available on:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp delay-750"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=com.zynappse.ourawesomeplanet&hl=en",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        style: {
          paddingRight: "32px"
        },
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "https://itunes.apple.com/ph/app/our-awesome-planet/id926617833?mt=8",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/apple_no_animation.svg",
        target: "_blank",
        height: "50"
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "  animatedParent animateOnce",
        style: {
          width: "100%"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated tada",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/alaska-website.png",
        alt: "alaska-website",
        width: 400
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "cd-close-product-tour cd-img-replace"
      }, "img2"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6,
        className: "text-left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "  animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left"
      }, "Alaska Website"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left"
      }, "One of the famous PBA Sports Team in the Philippines."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp "
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.alaskaaces.com.ph/",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/alaska.png",
        target: "_blank",
        width: "50"
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "  animatedParent animateOnce",
        style: {
          width: "100%"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated tada",
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/zygurtech.png",
        alt: "zygurtech",
        width: 400
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 6,
        className: "text-left"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Caption, {
        className: "  animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-left"
      }, "Zygurtech Website"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-left"
      }, "An IT company solutions based in US."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-left animated fadeInUp "
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "http://www.zygurtech.com/",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "http://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/web.svg",
        target: "_blank",
        width: "50"
      }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-center"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "http://res.cloudinary.com/da0fky5vm/image/upload/v1530847128/zynappse_website/Zynappse_ProfilePortfolio.pdf",
        download: "Zynappse_ProfilePortfolio",
        target: "_blank",
        className: "btn-custom",
        style: {
          color: "#fff"
        }
      }, "Download our Portfolio")));
    }
  }]);

  return CarouselBanner;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


{
  /*  */
}

/***/ })

/******/ });