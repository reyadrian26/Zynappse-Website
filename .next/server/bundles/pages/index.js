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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 2 */
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
        md: 5
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards-test animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/rwm2.png",
        alt: "rwm",
        width: 230
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/rwm.png",
        alt: "rwm",
        width: 230
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
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
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "https://itunes.apple.com/ph/app/rwm-mobile-app/id909015173?mt=8",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/apple_no_animation.svg",
        target: "_blank",
        height: "50"
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards-test animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/alaska2.png",
        alt: "alaska",
        width: 230
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/alaska.png",
        alt: "alaska",
        width: 230
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
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
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "https://itunes.apple.com/ph/app/alaska-aces/id743641908?mt=8",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/apple_no_animation.svg",
        target: "_blank",
        height: "50"
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards-test animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/myblood2.png",
        alt: "myblood",
        width: 230
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/myblood.png",
        alt: "myblood",
        width: 230
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
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
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "https://itunes.apple.com/ph/app/myblood-profile/id1208015547?mt=8",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/apple_no_animation.svg",
        target: "_blank",
        height: "50"
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards-test animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/unfold2.png",
        alt: "unfold",
        width: 230
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/unfold.png",
        alt: "unfold",
        width: 230
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
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
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "https://itunes.apple.com/ph/app/unfold-app/id830612465?mt=8",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/apple_no_animation.svg",
        target: "_blank",
        height: "50"
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards-test animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/flashunt2.png",
        alt: "flashunt",
        width: 230
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/flashunt.png",
        alt: "flashunt",
        width: 230
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
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
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50"
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards-test animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/locali2.png",
        alt: "locali",
        width: 230
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/locali.png",
        alt: "locali",
        width: 230
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
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
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50"
      }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards-test animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInDown",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/oap2.png",
        alt: "oap",
        width: 230
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "cd-product-tour",
        className: "cd-product-mockup cards2 animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated fadeInUp delay-500",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/oap.png",
        alt: "oap",
        width: 230
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
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
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_no_animation.svg",
        target: "_blank",
        height: "50"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "text-left",
        href: "https://itunes.apple.com/ph/app/our-awesome-planet/id926617833?mt=8",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/apple_no_animation.svg",
        target: "_blank",
        height: "50"
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "  animatedParent animateOnce",
        style: {
          width: "100%"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated tada",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/alaska-website.png",
        alt: "alaska-website",
        width: 400
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className: "cd-close-product-tour cd-img-replace"
      }, "img2"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
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
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/web.svg",
        target: "_blank",
        width: "50"
      })))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Carousel"].Item, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 5
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cd-product"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "  animatedParent animateOnce",
        style: {
          width: "100%"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "mofoid animated tada",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cards/zygurtech.png",
        alt: "zygurtech",
        width: 400
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 7,
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
        href: "https://www.zygurtech.com/",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/web.svg",
        target: "_blank",
        width: "50"
      }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-center"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.zynappse.com/static/js/Zynappse_ProfilePortfolio.pdf",
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

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
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

 // import {images} from './../../public/assets';



var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "logo-pos animateOnce animatedParent",
        style: {
          position: "fixed",
          zIndex: "1031"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "img-logo exact-logo animated growIn delay-5000",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/logo.png",
        alt: "",
        style: {
          width: "250px",
          paddingTop: "15px"
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"], {
        inverse: true,
        collapseOnSelect: true,
        className: "navbar-fixed-top",
        style: {
          padding: "10px 0px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Header, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Toggle, null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Collapse, {
        id: "nav"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Nav"], {
        pullRight: true,
        className: "text-white animateOnce animatedParent"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"], {
        id: "HOME",
        className: "animated growIn delay-5000"
      }, "HOME"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"], {
        id: "ABOUT",
        className: "animated growIn delay-5000"
      }, "ABOUT"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"], {
        id: "PORTFOLIO",
        className: "animated growIn delay-5000"
      }, "PORTFOLIO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"], {
        id: "SKILLS",
        className: "animated growIn delay-5000"
      }, "SKILLS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"], {
        id: "CONTACT",
        className: "animated growIn delay-5000"
      }, "CONTACT")))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]); // <img className="img-logo exact-logo animated growIn" src="https://www.zynappse.com/wp-content/uploads/2015/04/zynappse-op.png" alt="" style={{ width: "200px", paddingTop: "6px" }}/>




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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




var Infographics =
/*#__PURE__*/
function (_Component) {
  _inherits(Infographics, _Component);

  function Infographics() {
    _classCallCheck(this, Infographics);

    return _possibleConstructorReturn(this, (Infographics.__proto__ || Object.getPrototypeOf(Infographics)).apply(this, arguments));
  }

  _createClass(Infographics, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container margin-section "
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-center animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "text-center animated fadeInUpShort"
      }, "What We Do")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-center animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "animated fadeInLeft",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/app-solution.svg",
        alt: "appsolution",
        height: 200
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "animated fadeInRight"
      }, "Mobile App"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-center animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "animated fadeInLeft delay-250",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/web-solution.svg",
        alt: "websolution",
        height: 200
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "animated fadeInRight delay-250"
      }, "Web and Ecommerce")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-center animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "animated fadeInLeft ",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/cloud2.svg",
        alt: "cloud",
        height: 200
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "animated fadeInRight "
      }, "Cloud and Database Management")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-center animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "animated fadeInLeft",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/ai.svg",
        alt: "artificial-intelligence",
        height: 200
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "animated fadeInRight"
      }, "Artificial Intelligence"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "text-center animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "animated fadeInLeft ",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/ar.svg",
        alt: "augmented-reality",
        height: 200
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "animated fadeInRight"
      }, "Augmented Reality")));
    }
  }]);

  return Infographics;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Infographics);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var IntroBanner =
/*#__PURE__*/
function (_Component) {
  _inherits(IntroBanner, _Component);

  function IntroBanner() {
    _classCallCheck(this, IntroBanner);

    return _possibleConstructorReturn(this, (IntroBanner.__proto__ || Object.getPrototypeOf(IntroBanner)).apply(this, arguments));
  }

  _createClass(IntroBanner, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "slantedDiv",
        id: "home"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "parallax",
        className: "slant"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "parallax2",
        "data-parallaxify-range-x": "10",
        "data-parallaxify-range-y": "10"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        id: "stars1",
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white"
        },
        "data-parallaxify-range-x": "80",
        "data-parallaxify-range-y": "80"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-center animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "animated growIn delay-1000"
      }, "We."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "animated growIn delay-2000"
      }, "Build."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "animated growIn delay-3000"
      }, "Beautiful."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "animated growIn delay-4000"
      }, "Apps")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "animated growIn delay-5000",
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/zynappse.svg",
        width: 350,
        style: {
          zIndex: "3"
        },
        alt: "banner"
      }))))));
    }
  }]);

  return IntroBanner;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (IntroBanner);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

 // import {images} from './../../public/assets';



var Skills =
/*#__PURE__*/
function (_Component) {
  _inherits(Skills, _Component);

  function Skills() {
    _classCallCheck(this, Skills);

    return _possibleConstructorReturn(this, (Skills.__proto__ || Object.getPrototypeOf(Skills)).apply(this, arguments));
  }

  _createClass(Skills, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container margin-section  animatedParent animateOnce",
        id: "skills"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "text-center animated fadeInLeft"
      }, "Technology Stack")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 4,
        className: "text-center   animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        width: 200,
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/android_animation.gif",
        alt: "android",
        className: "animated growIn"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "gradient animated growIn"
      }, "99%"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "animated growIn"
      }, "Android")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 4,
        className: "text-center  animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        height: 200,
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530848464/zynappse_website/apple_animation.gif",
        alt: "apple",
        className: "animated growIn"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "gradient animated growIn"
      }, "99%"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "animated growIn"
      }, "IOS")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 4,
        className: "text-center  animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        width: 200,
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847140/zynappse_website/web_animation.gif",
        alt: "web",
        className: "animated growIn"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "gradient animated growIn"
      }, "99%"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "animated growIn"
      }, "Web")));
    }
  }]);

  return Skills;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_js__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var About =
/*#__PURE__*/
function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "margin-section animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 3
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.appfutura.com/web-developers",
        target: "_blank",
        className: "animated growIn "
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        width: "200",
        src: "https://www.appfutura.com/img/badges/badge-top-web-company.png",
        alt: "appfutura badge"
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 3
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.appfutura.com/ios-developers",
        target: "_blank",
        className: "animated growIn delay-500"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        width: "200",
        src: "https://www.appfutura.com/img/badges/badge-top-ios-company.png",
        alt: "appfutura badge"
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 3
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.appfutura.com/android-developers",
        target: "_blank",
        className: "animated growIn delay-1000"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        width: "200",
        src: "https://www.appfutura.com/img/badges/badge-top-android-company.png",
        alt: "appfutura badge"
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 3
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.appfutura.com/app-developers",
        target: "_blank",
        className: "animated growIn delay-1500"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        width: "200",
        src: "https://www.appfutura.com/img/badges/badge-top-company.png",
        alt: "appfutura badge"
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "margin-section animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "text-center animated fadeInLeft"
      }, "About Us"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "animated fadeInRight delay-250"
      }, "Zynappse Corporation is a company that provides Information Technology (IT) solutions. Our IT development team is backed up by experienced management and industry consultants who are experts in aligning and merging technology and day-to-day operational requirements to achieve an efficient and effective system. We are a mobile apps developers and creators of custom friendly applications in mobile, desktop, enterprise, and cloud computing technologies. Our core expertise is in mobile applications or apps, made easy in two of the most in demand mobile platforms: android and iOS to help you reach ten folds of your market and customers particularly in the growing smart phone community.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "margin-section",
        id: "portfolio"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "text-center"
      }, "Portfolio"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__carousel_js__["default"], null)));
    }
  }]);

  return About;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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


 // import {images} from './../../public/assets';
// import MapsDiv from './map.js';

var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact(props, context) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props, context));

    _this.handleClick = function (e) {
      _this.setState({
        target: e.target,
        show: !_this.state.show
      });
    };

    _this.state = {
      show: false
    };
    return _this;
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Row"], {
        className: "contact margin-section slantedDivContact",
        style: {
          color: "white",
          marginBottom: "-333px"
        },
        id: "contact"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container  animatedParent animateOnce slant-contact"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "text-center animated fadeInLeft"
      }, "Contact Us"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "animatedParent animateOnce"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["ButtonToolbar"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        onClick: this.handleClick,
        className: "text-center animated fadeInRight"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/pointer.svg",
        alt: "location",
        width: 30
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          paddingLeft: "20px"
        }
      }, "4F RFM Corporate Center, Pioneer cor Sheridan Sts., Mandaluyong City")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Overlay"], {
        show: this.state.show,
        target: this.state.target,
        placement: "top",
        container: this,
        containerPadding: 20
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Popover"], {
        id: "popover-contained",
        title: "Popover bottom",
        style: {
          transform: " skewY(4deg)"
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-center animated fadeInRight delay-250"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tel:576-3727"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/phone.svg",
        alt: "contact-no",
        width: 27
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          paddingLeft: "20px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tel:576-3727",
        style: {
          color: "white"
        }
      }, "+63. 2. 576-3727"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-center animated fadeInRight delay-350"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tel:639672763544"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/phone.svg",
        alt: "contact-no",
        width: 27
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          paddingLeft: "20px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "tel:639672763544",
        style: {
          color: "white"
        }
      }, "+63967-276-3544"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-center animated fadeInRight delay-500"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white"
        },
        href: "mailto:hi@zynappse.com?Subject=Hello%20",
        target: "_top"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/mail.svg",
        alt: "email",
        width: 27
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          paddingLeft: "20px"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white"
        },
        href: "mailto:hi@zynappse.com?Subject=Hello%20",
        target: "_top"
      }, "hi@zynappse.com"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
        className: "animated fadeInRight delay-750"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Col"], {
        md: 12,
        className: "animated fadeInRight delay-1000",
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start"
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white"
        },
        href: "https://www.facebook.com/zynappse/",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/facebook.svg",
        alt: "facebook",
        width: 50,
        style: {
          padding: "0 10px"
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white"
        },
        href: "https://www.youtube.com/channel/UCMB0M5r5vvQ1mowPyKJW8bQ",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/youtube.svg",
        alt: "youtube",
        width: 50,
        style: {
          padding: "0 10px"
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        style: {
          color: "white"
        },
        href: "https://ph.linkedin.com/in/zynappse-corporation-535885a2",
        target: "_blank"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "https://res.cloudinary.com/da0fky5vm/image/upload/f_auto/v1530847128/zynappse_website/linkedin.svg",
        alt: "linkedin",
        width: 50,
        style: {
          padding: "0 10px"
        }
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section"
      }));
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_animations_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_animations_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_animations_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_App_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_App_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_index_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_cards_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_cards_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_cards_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_ga__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_ga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_ga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_header_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_infographics_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_introbanner_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_skills_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_about_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_contact_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_next_head__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_next_head__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 // import '../static/css/index.css';
// import '../static/css/bootstrap.css';






 // import '/src/logo.svg';







 // import {SectionsContainer, Section} from 'react-fullpage';



var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["Row"], {
        id: "fullpage"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, "Zynappse Website")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src_header_js__["default"], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__src_introbanner_js__["default"], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__src_infographics_js__["default"], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "about",
        style: {
          color: "white"
        },
        id: "about"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__src_about_js__["default"], null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__src_skills_js__["default"], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "margin-section"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__src_contact_js__["default"], null));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App); // export default withGA("UA-51162965-1", Router)(App);
// <div className="cd-3d-right-side"></div>
// <div className="cd-3d-left-side"></div>
// <div className="cd-3d-bottom-side"></div>

/***/ }),
/* 14 */
/***/ (function(module, exports) {



/***/ }),
/* 15 */
/***/ (function(module, exports) {



/***/ }),
/* 16 */
/***/ (function(module, exports) {



/***/ }),
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("next-ga");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })
/******/ ]);