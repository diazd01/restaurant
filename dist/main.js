/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContact\": () => (/* binding */ renderContact)\n/* harmony export */ });\nfunction renderContact() {\r\n    const contactDiv = document.createElement('div');\r\n    contactDiv.classList.add('contactDiv');\r\n    const contactH1 = document.createElement('h1');\r\n    contactH1.textContent = 'Contact';\r\n    contactDiv.classList.add('activePage');\r\n    contactDiv.appendChild(contactH1);\r\n\r\n    const contactWrap = document.createElement('div');\r\n    createContact(contactWrap);\r\n    contactDiv.appendChild(contactWrap);\r\n\r\n    return content.appendChild(contactDiv);\r\n}\r\n\r\nfunction createContact(contactWrap) {\r\n    contactWrap.classList.add('contactWrap');\r\n    const contactNumber = document.createElement('h3');\r\n    const contactLocation = document.createElement('h3');\r\n    const contactMap = document.createElement('img');\r\n    \r\n    contactNumber.textContent = '📲 905 111 2222';\r\n    contactLocation.textContent = '22 Southern Singer street, Toronto, ON';\r\n    contactMap.src = 'images/map.jpg';\r\n    \r\n    contactWrap.appendChild(contactNumber);\r\n    contactWrap.appendChild(contactLocation);\r\n    contactWrap.appendChild(contactMap);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://9_project-restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHome\": () => (/* binding */ renderHome)\n/* harmony export */ });\nfunction renderHome() {\r\n    const header = document.createElement('div');\r\n    header.classList.add('activePage');\r\n    header.classList.add('header');\r\n    // header.classList.add('background');\r\n    const headerH1 = document.createElement('h1');\r\n    headerH1.textContent = `Tessie's Treats`;\r\n    header.appendChild(headerH1);\r\n\r\n    const headerPara = document.createElement('p');\r\n    headerPara.textContent = `The best Filipino cuisine in the City!`;\r\n    header.appendChild(headerPara);\r\n    //hours\r\n    const hoursDiv = document.createElement('div');\r\n    renderHours(hoursDiv);\r\n    header.appendChild(hoursDiv);\r\n\r\n    return content.appendChild(header);\r\n}\r\n\r\nfunction renderHours(hoursDiv) {\r\n    hoursDiv.classList.add('hoursWrap');\r\n\r\n    const hoursHeader = document.createElement('h2');\r\n    const hoursInfo = document.createElement('p');\r\n    hoursHeader.textContent = 'hours';\r\n    hoursInfo.innerHTML = `Monday-Friday: <span>9AM-9PM</span>\r\n                             Saturday: <span>9AM-8PM</span>\r\n                             Sunday: <span>9AM-6PM</span>`;\r\n\r\n    hoursDiv.appendChild(hoursHeader);\r\n    hoursDiv.appendChild(hoursInfo);\r\n}\n\n//# sourceURL=webpack://9_project-restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadpage */ \"./src/loadpage.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\nconst content = document.getElementById('content');\r\n\r\n(0,_loadpage__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\r\n\n\n//# sourceURL=webpack://9_project-restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/loadpage.js":
/*!*************************!*\
  !*** ./src/loadpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nfunction loadPage() {\r\n    content.classList.add('background');\r\n    //render nav \r\n    renderNav();\r\n    //render home page \r\n    let activeTab; \r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.renderHome)();\r\n    //active tab: \r\n    activeTab = document.querySelector('.active');\r\n    //event\r\n    document.querySelectorAll('nav div').forEach((tab) => {\r\n        tab.addEventListener('click', (e) => {\r\n            activeTab.classList.remove('active');\r\n            tab.classList.add('active');\r\n            activeTab = tab;\r\n            //remove active tab first and then render new tab\r\n            content.removeChild(document.querySelector('.activePage'));\r\n            if(activeTab.textContent === 'home') {\r\n                (0,_home__WEBPACK_IMPORTED_MODULE_0__.renderHome)();\r\n            }\r\n            if (activeTab.textContent === 'menu') {\r\n                (0,_menu__WEBPACK_IMPORTED_MODULE_1__.renderMenu)();\r\n            }\r\n            if(activeTab.textContent === 'contact') {\r\n                (0,_contact__WEBPACK_IMPORTED_MODULE_2__.renderContact)();\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\nfunction renderNav() {\r\n    \r\n    const nav = document.createElement('nav');\r\n    content.appendChild(nav);\r\n    //Home Tab:\r\n    const homeDiv = document.createElement('div');\r\n    homeDiv.classList.add('active');\r\n    const homeH1 = document.createElement('h1');\r\n    homeH1.textContent = 'home';\r\n    homeDiv.appendChild(homeH1);\r\n    //Menu Tab: \r\n    const menuDiv = document.createElement('div');\r\n    const menuH1 = document.createElement('h1');\r\n    menuH1.textContent = 'menu';\r\n    menuDiv.appendChild(menuH1);\r\n    //Contact Tab: \r\n    const contactDiv = document.createElement('div');\r\n    const contactH1 = document.createElement('h1');\r\n    contactH1.textContent = 'contact';\r\n    contactDiv.appendChild(contactH1);\r\n\r\n    //appending tabs: \r\n    nav.appendChild(homeDiv);\r\n    nav.appendChild(menuDiv);\r\n    nav.appendChild(contactDiv);\r\n\r\n}\n\n//# sourceURL=webpack://9_project-restaurantpage/./src/loadpage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu)\n/* harmony export */ });\n\r\nfunction renderMenu() {\r\n    const menuDiv = document.createElement('div');\r\n    menuDiv.classList.add('menuDiv');\r\n    menuDiv.classList.add('activePage');\r\n\r\n    const menuH1 = document.createElement('h1');\r\n    menuH1.textContent = 'menu';\r\n    menuDiv.appendChild(menuH1);\r\n    const cardsDiv = document.createElement('div');\r\n    cardsDiv.classList.add('cardsDiv');\r\n    //card 1:\r\n    const menuOne = new Menu();\r\n    menuOne.createCard('chicken roll', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, \r\n    sed do eiusmod tempor incididunt ut labore`, '$5 each', 'images/chickenroll.jpg');\r\n    cardsDiv.appendChild(menuOne.card); \r\n    //card 2: \r\n    const menuTwo = new Menu();\r\n    menuTwo.createCard('longganisa', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, \r\n    sed do eiusmod tempor incididunt ut labore`, '$5 per pack', 'images/item2.jpg');\r\n    cardsDiv.appendChild(menuTwo.card);\r\n    //card 3: \r\n    const menuThree = new Menu();\r\n    menuThree.createCard('Bulacan Beef Steak', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, \r\n    sed do eiusmod tempor incididunt ut labore`, '$10 with white rice, $5 without', 'images/item3.jpg');\r\n    cardsDiv.appendChild(menuThree.card);\r\n    //card 4: \r\n    const menuFour = new Menu();\r\n    menuFour.createCard('lumpia shanghai', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, \r\n    sed do eiusmod tempor incididunt ut labore`, '$10 per pound', 'images/item4.jpg');\r\n    cardsDiv.appendChild(menuFour.card);\r\n\r\n    menuDiv.appendChild(cardsDiv);\r\n    return content.appendChild(menuDiv);\r\n}\r\n\r\nclass Menu {\r\n    constructor(card, title, about, price, image) {\r\n        this.card = card;\r\n        this.title = title; \r\n        this.about = about; \r\n        this.price = price; \r\n        this.image = image; \r\n        \r\n    }\r\n\r\n    createCard(titleContent, aboutContent, priceContent, imageSource) { \r\n        this.card = document.createElement('div');\r\n        this.card.classList.add('card');\r\n\r\n        this.title = document.createElement('h2');\r\n        this.about = document.createElement('p');\r\n        this.price = document.createElement('p');\r\n        this.image = document.createElement('img');\r\n\r\n        this.title.textContent = titleContent;\r\n        this.about.textContent = aboutContent;\r\n        this.price.textContent = priceContent;\r\n        this.price.classList.add('priceText');\r\n        this.image.src = imageSource;\r\n\r\n        this.card.appendChild(this.title);\r\n        this.card.appendChild(this.image);\r\n        this.card.appendChild(this.about);\r\n        this.card.appendChild(this.price);\r\n        \r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://9_project-restaurantpage/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;