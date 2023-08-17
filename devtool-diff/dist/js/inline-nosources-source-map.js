/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  console.log("Heading~");
  var element = document.createElement("h2");
  element.textContent = "Hello world";
  element.classList.add("heading");
  element.addEventListener("click", function () {
    alert("Hello webpack");
  });
  return element;
});

/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var heading = (0,_heading_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
document.body.append(heading);
console.log("main.js is running");
console.log11("main.js is running");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5saW5lLW5vc291cmNlcy1zb3VyY2UtbWFwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUsWUFBTTtFQUNuQkEsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBRXZCLElBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0VBRTVDRixPQUFPLENBQUNHLFdBQVcsR0FBRyxhQUFhO0VBQ25DSCxPQUFPLENBQUNJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztFQUNoQ0wsT0FBTyxDQUFDTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUN0Q0MsS0FBSyxDQUFDLGVBQWUsQ0FBQztFQUN4QixDQUFDLENBQUM7RUFFRixPQUFPUCxPQUFPO0FBQ2hCLENBQUM7Ozs7O1VDWkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ055QztBQUV6QyxJQUFNUyxPQUFPLEdBQUdELHVEQUFhLENBQUMsQ0FBQztBQUUvQlAsUUFBUSxDQUFDUyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDO0FBRTdCWCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztBQUVqQ0QsT0FBTyxDQUFDYyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RldnRvb2wtZGlmZi8uL3NyYy9oZWFkaW5nLmpzIiwid2VicGFjazovL2RldnRvb2wtZGlmZi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXZ0b29sLWRpZmYvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RldnRvb2wtZGlmZi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RldnRvb2wtZGlmZi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RldnRvb2wtZGlmZi8uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWxlcnQiLCJjcmVhdGVIZWFkaW5nIiwiaGVhZGluZyIsImJvZHkiLCJhcHBlbmQiLCJsb2cxMSJdLCJzb3VyY2VSb290IjoiIn0=