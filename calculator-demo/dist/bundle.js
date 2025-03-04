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

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* binding */ add),\n/* harmony export */   divide: () => (/* binding */ divide),\n/* harmony export */   multiply: () => (/* binding */ multiply),\n/* harmony export */   subtract: () => (/* binding */ subtract)\n/* harmony export */ });\nfunction add(a, b) {\n  return a + b;\n}\n\nfunction subtract(a, b) {\n    return a - b;\n    }\n\nfunction multiply(a, b) {\n    return a * b;\n    }\n\nfunction divide(a, b) {\n    if (b === 0) {\n        return 'Cannot divide by zero';\n    }\nreturn a / b; \n}\n\n\n//# sourceURL=webpack:///./src/calculator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator.js */ \"./src/calculator.js\");\n\n\ndocument.addEventListener('DOMContentLoaded',function(){\n    const numberInput = document.getElementById('num1');\n    const number2Input = document.getElementById('num2');\n    const operatorSelect = document.getElementById('operator');\n    const calculateButton = document.getElementById('calculate');\n    const result = document.getElementById('result');\n\n    calculateButton.addEventListener('click', function(){\nconst number1 = number(numberInput.value);\nconst number2 = number(number2Input.value);\nconst operation = operatorSelect.value\nlet result;\n//nan stands for not a number\n//is NaN('a') --> true\n//is NaN(1) --> false\n\nif(isNaN(number1) || isNaN(number2))\n    resultSelection.inner.Text = 'Please enter a valid number';\n     return;\n})\nswitch(operation) {\n    case \"add\":\n  result = (0,_calculator_js__WEBPACK_IMPORTED_MODULE_0__.add)(number1,number2)\n   break;\ncase \"subtract\":\n  result = (0,_calculator_js__WEBPACK_IMPORTED_MODULE_0__.subtract)(number1,number2)\n  break;\ncase \"multiply\":\n  result = (0,_calculator_js__WEBPACK_IMPORTED_MODULE_0__.multiply)(number1,number2)\n  break;\ncase \"divide\":\n  result = (0,_calculator_js__WEBPACK_IMPORTED_MODULE_0__.divide)(number1,number2)\n  break;\ndefault:\n    result = \"invalid operation\";\n     break;\n}\n\nresultSelection.innerText = `result ${result}`;\n\n})\n/*\n for operstion i have 4 different ones\n add, subtract, multiply, divide\nif (operstion === 'add') {\nelse if (operation === 'subtract') {\nelse if (operation === 'multiply') {\nelse if (operation === 'divide') {\n} else {\n\n*/\n\n\n//# sourceURL=webpack:///./src/index.js?");

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