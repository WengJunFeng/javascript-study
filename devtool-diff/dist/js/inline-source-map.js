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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5saW5lLXNvdXJjZS1tYXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSxZQUFNO0VBQ25CQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7RUFFdkIsSUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFFNUNGLE9BQU8sQ0FBQ0csV0FBVyxHQUFHLGFBQWE7RUFDbkNILE9BQU8sQ0FBQ0ksU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBQ2hDTCxPQUFPLENBQUNNLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3RDQyxLQUFLLENBQUMsZUFBZSxDQUFDO0VBQ3hCLENBQUMsQ0FBQztFQUVGLE9BQU9QLE9BQU87QUFDaEIsQ0FBQzs7Ozs7VUNaRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7O0FDTnlDO0FBRXpDLElBQU1TLE9BQU8sR0FBR0QsdURBQWEsQ0FBQyxDQUFDO0FBRS9CUCxRQUFRLENBQUNTLElBQUksQ0FBQ0MsTUFBTSxDQUFDRixPQUFPLENBQUM7QUFFN0JYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0FBRWpDRCxPQUFPLENBQUNjLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2dG9vbC1kaWZmLy4vc3JjL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vZGV2dG9vbC1kaWZmL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RldnRvb2wtZGlmZi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGV2dG9vbC1kaWZmL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGV2dG9vbC1kaWZmL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGV2dG9vbC1kaWZmLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkhlYWRpbmd+XCIpO1xuXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiSGVsbG8gd29ybGRcIjtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFsZXJ0KFwiSGVsbG8gd2VicGFja1wiKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlSGVhZGluZyBmcm9tIFwiLi9oZWFkaW5nLmpzXCI7XG5cbmNvbnN0IGhlYWRpbmcgPSBjcmVhdGVIZWFkaW5nKCk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRpbmcpO1xuXG5jb25zb2xlLmxvZyhcIm1haW4uanMgaXMgcnVubmluZ1wiKTtcblxuY29uc29sZS5sb2cxMShcIm1haW4uanMgaXMgcnVubmluZ1wiKTtcbiJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFsZXJ0IiwiY3JlYXRlSGVhZGluZyIsImhlYWRpbmciLCJib2R5IiwiYXBwZW5kIiwibG9nMTEiXSwic291cmNlUm9vdCI6IiJ9