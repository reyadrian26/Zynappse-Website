exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

function _getLocalizedString(key, lang) {
    // Read the default.json first to fill in the missing string data should there be additions to the app.
    let genericStrings = __webpack_require__(28);
    let defaultStrings = {
        ...genericStrings
    };
    if (!lang && lang !== "en") {
        try {
            let genericLangStrings = __webpack_require__(2977)("./lang_" + lang + "/generics.json");
            let langStrings = {
                ...genericLangStrings
            };
            if (!langStrings[key]) {
                // Key has string value. Use this.
                return langStrings[key];
            } else {
                // Not defined. Use default.
                return defaultStrings[key];
            }
        } catch (error) {
            // Unable to read language JSON file.
            console.log("Localization error: " + error.message);
            console.log("Error details:");
            console.log(error);
            return defaultStrings[key];
        }
    } else {
        return defaultStrings[key];
    }
}
module.exports = {
    getLocalizedString: function(key, lang = null) {
        if (!lang) {
            return _getLocalizedString(key, "en");
        } else {
            return _getLocalizedString(key, lang);
        }
    }
};


/***/ }),

/***/ 2977:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 2977;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 28:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"UNDER_CONSTRUCTION_TITLE":"This site is UNDER CONSTRUCTION.","UNDER_CONSTRUCTION_DESCRIPTION":"Check us back soon for updates.","WELCOME_TEXT":"Welcome to Zynappse Next.js Boilerplate!","WELCOME_SUB_TEXT":"Your code starts here.","FOUNDERS_TEXT":"Meet the Founders","TEXTBOX_HEADER":"We\'re here for you","TEXTBOX_DESCRIPTION":"We believe that zynappse customers will benefit more by using our applications, and our wealth of experience in various local and international industries to meet their current and future needs.","YEARS_OF_EXPERIENCE_NUM":"12","YEARS_OF_EXPERIENCE_HEADER":"Years of Experience","PROJECTS_NUM":"22","PROJECTS_HEADER":"Projects","CLIENTS_NUM":"34","CLIENTS_HEADER":"Clients","TECHSTACK_TITLE":"Technology Stack","TIME":"11:11","DATE":"Tuesday, September 14","SKILLS_HEADING":"We specialize at","ANDROID_TITLE":"Android","IOS_TITLE":"IOS","WEB_TITLE":"Web","ABOUT_US_JOIN_TEAM":"Join Our Team","ABOUT_US_PORTFOLIO":"Download our Portfolio","ABOUT_US_HEADER":"About Us","ABOUT_US_DESCRIPTION":"Zynappse\'s mission is to design and provide custom develop applications by combining modern technologies, top-of-the-line equipment with industry standard services to meet our customer needs in order to make their operations and service delivery fast, simple, effective, and efficient","ABOUT_US_END":"Efficient and Effective","CONTACT_US_TITLE":"Bring your ideas to life","CONTACT_US_TALK":"TALK TO US","CONTACT_US_ADDRESS":"Unit 202 2nd Floor #19 Libertad Plaza Building Libertad Street, Brgy. Highway Hills Mandaluyong City 1550","CONTACT_US_PHONE_NUM":"+63. 8. 291-4837","CONTACT_US_EMAIL":"hi@zynappse.com","MODAL_TITLE":"Tell us about your idea","MODAL_NAME":"Enter your name","MODAL_EMAIL":"Enter your email address","MODAL_IDEA":"Type your idea","MODAL_WORK":"We will make it work","MODAL_SUBMIT":"Submit","LANDING_EXPLORE_BTN":"Explore More","LANDING_ARROW_BTN":"↓","LANDING_WE":"WE","LANDING_BUILD":"BUILD","LANDING_BEAUTIFUL":"BEAUTIFUL","LANDING_APPS":"APPS","LANDING_DESC1":"Zynappse Corporation is a company that provides","LANDING_DESC2":"Information Technology solutions","LANDING_NAV_BTN":"Talk to Us","PROJ_ROB":"Robinsons Mall App","PROJ_ROB_DESC":"Everything you need to know about Robinsons Malls is now at your fngertips— store directory, events and promos, Robinsons Privilege Card discounts and benefts, Lingkod Pinoy directory, movie schedules and mall directions and operating hours.","PROJ_COUNTRY":"Country","PROJ_PH":"Philippines","PROJ_PLATFORM":"Platforms","PROJ_LIFE_KONNEKT":"Life Konnekt Mobile App","PROJ_LIFE_KONNEKT_DESC":"LifeKonnekt helps you chronicle your thoughts, feelings, ideas and experiences and allows you to share them with the people who really matter to you.","PROJ_MY_BLOOD":"Myblood Profile Mobile App","PROJ_MY_BLOOD_DESC":"My Blood is a healthy lifestyle app that graphically presents and tracks your lab results. It gives health recommendations based on your calculated risk of developing lifestyle diseases. This app is only available for use on select tests from partner laboratories","PROJ_E_SHUTTLE":"E-Shuttle","PROJ_UNFOLD":"Unfold Mobile App","PROJ_UNFOLD_DESC":"Unfold is an app that makes Master Choa Kok Sui’s teachings more modern and accessible than ever before. The app allows users to receive daily nuggets of inspiration from his teachings and also allows them to personalize the quotes through various fonts, backgrounds, and stickers. Users can then share these personalized quotes through popular social media accounts such as Facebook, Twitter, Instagram, and Pinterest. ories","SERVICES_HEADER":"WHAT WE DO","COUNTER_0":"0","COUNTER_1":"1","COUNTER_2":"2","COUNTER_3":"3","COUNTER_4":"4","COUNTER_5":"5","COUNTER_6":"6","COUNTER_END":"06","SERVICES_MOBILE":"Mobile Apps","SERVICES_WEB":"Web & Ecommerce","SERVICES_CLOUD_DBM":"Cloud & Database Management","SERVICES_AI":"Artificial Intelligence","SERVICES_AR":"Augmented reality","SERVICES_BLOCKCHAIN":"Blockchain","CI_OVERLAY":"CI","HR_OVERLAY":"HR","CE_OVERLAY":"CE","ACCOMPLISHMENT_HEADER":"ACCOMPLISHMENTS","ACCOMPLISHMENT_DESCRIPTION":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","FOOTER_TAGLINE":"We.Build.Beautiful.Apps","FOOTER_SERVICES":"SERVICES","FOOTER_SKILLS":"SKILLS","FOOTER_CONTACT":"CONTACT","META_HOME_PAGE_LABEL":"Zynappse","META_ABOUT_PAGE_LABEL":"About Us","LANDING_WE_BUILD_BEAUTIFUL_LABEL":"We Build Beautiful","LANDING_APPS_LABEL":"Apps","LANDING_LEARN_MORE_LABEL":"Learn More","LANDING_CONTENT_LABEL":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","LANDING_OUR_SERVICES_LABEL":"Our Services","LANDING_ABOUT_US_LABEL":"About Us","LANDING_PROJECTS_LABEL":"Projects","LANDING_ACCOMPLISHMENT_LABEL":"Accomplishments","LANDING_CONTACT_US_LABEL":"Contact Us","SERVICES_MOBILE_LABEL":"MOBILE ","SERVICES_APPS_LABEL":"APPS","SERVICES_WEB_AND_LABEL":"WEB AND ","SERVICES_ECOMMERCE_LABEL":"ECOMMERCE","SERVICES_CLOUD_AND_LABEL":"CLOUD AND ","SERVICES_DATABASE_MANAGEMENT_LABEL":"DATABASE MANAGEMENT","SERVICES_ARTIFICIAL_LABEL":"ARTIFICIAL ","SERVICES_INTELLIGENCE_LABEL":"INTELLIGENCE","SERVICES_AUGMENTED_LABEL":"AUGMENTED ","SERVICES_REALITY_LABEL":"REALITY","SERVICES_OUR_SERVICES_LABEL":"OUR SERVICES","SERVICES_ZERO_LABEL":"0","SERVICES_ZERO_FIVE_LABEL":"05","ABOUT_US_SARIMOIRE_LABEL":"SARIMOIRE","ABOUT_US_ROBINSONS_MALL_APP_LABEL":"ROBINSONS MALL APP","ABOUT_US_ALFAMART_LABEL":"ALFAMART","ABOUT_US_ZYGURTECH_LABEL":"ZYGURTECH","ABOUT_US_NOAH_LABEL":"NOAH COURIER SERVICES","ABOUT_US_ALASKA_ACES_LABEL":"ALASKA ACES","ABOUT_US_JOBSTREAM_LABEL":"JOBSTREAM","ABOUT_US_GESSA_LABEL":"GESSA","ABOUT_US_EXACT_LABEL":"EXACT TRAINING CENTER","ABOUT_US_RWM_LABEL":"RESORTS WORLD MANILA","ABOUT_US_METRODEAL_LABEL":"METRODEAL","ABOUT_US_OAP_LABEL":"OUR AWESOME PLANET","ABOUT_US_FLASHHUNT_LABEL":"FLASHHUNT","ABOUT_US_AZMAS_LABEL":"AMELLAR ZONING AND MONITORING","ABOUT_US_MYBLOOD_LABEL":"MYBLOOD PROFILE","ABOUT_US_UNFOLD_LABEL":"UNFOLD","ABOUT_US_ESHUTTLE_LABEL":"E-SHUTTLE","ABOUT_US_FOOZE_LABEL":"FOOZE","ABOUT_US_RBX_LABEL":"RBX INTEGRATED SOLUTION","ABOUT_US_KONEKKT_LABEL":"LIFE KONNEKT","ABOUT_US_BUSINESS_TAGGING_LABEL":"BUSINESS TAGGING","ABOUT_US_WEBSITE_LABEL":"Website","ABOUT_US_MOBILE_APP_LABEL":"Mobile App","ABOUT_US_WEBSITE_AND_MOBILE_APP_LABEL":"Website and Mobile App","ABOUT_US_VIEW_ALL_BUTTON_LABEL":"View All","ABOUT_US_CEO_LABEL":"CEO","ABOUT_US_CIO_LABEL":"CIO","ABOUT_US_CMO_LABEL":"CMO","ABOUT_US_CTO_LABEL":"CTO","ABOUT_US_MD_LABEL":"MDirector","ABOUT_US_EXECUTIVE_TITLE":"Executive Directors","ABOUT_US_CONTENT_QUOTE_LABEL":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","ABOUT_US_CONTENT_AUTHOR_LABEL":"-Lorem ipsum","ABOUT_US_ABOUT_LABEL":"ABOUT","ABOUT_US_US_LABEL":"US","ABOUT_US_MOTTO_TITLE":"We Build Beautiful Apps","ABOUT_US_MISSION_TEXT_ONE":"“Zynappse’ mission is to design and provide custom applications by combining modern technologies, top-of-the-line equipment with industry standard services to meet our customer needs in order to make their operations and service delivery fast, simple, effective and efficient.","ABOUT_US_MISSION_TEXT_TWO":"We believe that Zynappse customers will benefit more by using our applications, and our wealth of experience in various local and international industries to meet their current and future needs.”","ABOUT_US_YEARS_OF_EXPERIENCE_LABEL":"8+ years experience","ABOUT_US_PRODUCTS_LABEL":"PRODUCTS AND ","ABOUT_US_SERVICES_LABEL":"SERVICES","ABOUT_US_CLOUD_BASED_SOLUTION_LABEL":"CLOUD BASED SOLUTIONS","ABOUT_US_IBEACONS_LABEL":"iBEACONS","ABOUT_US_MOBILE_SOLUTIONS_LABEL":"MOBILE SOLUTIONS ","ABOUT_US_AI_LABEL":"ARTIFICIAL INTELLIGENCE ","ABOUT_US_AR_LABEL":"AUGMENTED REALITY","ABOUT_US_BLOCKCHAIN_LABEL":"BLOCKCHAIN","ABOUT_US_KINETIC_ENABLED_GAMES_LABEL":"KINETIC ENABLED GAMES ","ABOUT_US_UI_UX_LABEL":"UI/UX","ABOUT_US_PROJECT_MANAGEMENT_LABEL":"PROJECT MANAGEMENT","ABOUT_US_QUALITY_ASSURANCE_LABEL":"QUALITY ASSURANCE AND TESTING","ABOUT_US_PRODUCT_DEVELOPMENT_LABEL":"PRODUCT/BRAND DEVELOPMENT","ABOUT_US_HARDWARE_INFRASTRUCTURE_LABEL":"HARDWARE INFRASTRUCTURE","ABOUT_US_AIMING_FOR_LABEL":"What were aiming for","ABOUT_US_GOAL_TEXT":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","ABOUT_US_EFFICIENCY_LABEL":"EFFICIENCY","ABOUT_US_EFFICIENCY_DESCRIPTION_TEXT":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","ABOUT_US_QUALITY_LABEL":"QUALITY","ABOUT_US_QUALITY_DESCRIPTION_TEXT":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","ABOUT_US_EFFECTIVENESS_LABEL":"EFFECTIVENESS","ABOUT_US_EFFECTIVENESS_DESCRIPTION_TEXT":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","CONTACT_US_CONTACT_LABEL":"CONTACT","CONTACT_US_US_LABEL":"US","CONTACT_US_TITLE_LABEL":"We want to hear you out","CONTACT_US_SUBTITLE_LABEL":"TELL US ABOUT YOUR IDEAS","CONTACT_US_NAME_LABEL":"Name","CONTACT_US_EMAIL_LABEL":"Email Address","CONTACT_US_MESSAGE_LABEL":"Message","CONTACT_US_SUBMIT_BUTTON_LABEL":"Submit","CONTACT_US_META_TITLE_LABEL":"Contact Us","ABOUT_ABOUT_US_LABEL":"ABOUT US","ABOUT_DESCRIPTION_LABEL":"Zynappse’ mission is to design and provide custom develop applications by combining modern technologies, top-of-the-line equipment with industry standard services to meet our customer needs in order to make their operations and service delivery fast, simple, effective, and efficient.","ABOUT_INTERESTED_LABEL":"Interested? Learn more about us!","ABOUT_EXPLORE_LABEL":"Explore","ABOUT_DOWNLOAD_LABEL":"Download Our Portfolio","PROJECTS_PROJECTS_LABEL":"PROJECTS","PROJECTS_COUNTRY_LABEL":"Country:","PROJECTS_PLATFORMS_LABEL":"Platforms:","PROJECTS_MOBILE_APPS_LABEL":"MOBILE APPS","PROJECTS_WEBSITES_LABEL":"WEBSITES","PROJECTS_CONTENT_MANAGEMENT_APPS_LABEL":"CONTENT MANAGEMENT APP"}');

/***/ })

};
;