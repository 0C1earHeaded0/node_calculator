/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/api/calculator/fetchResults.js":
/*!**************************************************!*\
  !*** ./public/js/api/calculator/fetchResults.js ***!
  \**************************************************/
/***/ ((module) => {

eval("{const postExpression = async (exp) => {\n    let response;\n\n    try {\n        response = await fetch('/api/count', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                expression: exp\n            })\n        });\n    } catch (error) {\n        throw new Error('Error when fetch calculation result:', error);\n    }\n\n    return await response.json();\n}\n\nmodule.exports = postExpression;\n\n//# sourceURL=webpack://frontend/./public/js/api/calculator/fetchResults.js?\n}");

/***/ }),

/***/ "./public/js/api/calculator/handleServerResult.js":
/*!********************************************************!*\
  !*** ./public/js/api/calculator/handleServerResult.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{const postExpression = __webpack_require__(/*! ./fetchResults */ \"./public/js/api/calculator/fetchResults.js\");\n\nconst getExpression = () => {\n    return document.querySelector('.calculator-input').innerHTML;\n}\n\nconst handleServerResponse = async () => {\n    let serverResult;\n\n    try {\n        serverResult = await postExpression(getExpression());\n    } catch (err) {\n        console.log('Ошибка при вычислении значения сервером.');\n        alert(\"Серверу не удалось обработать выражение.\");\n        return;\n    }\n\n    document.querySelector('.calculator-input').innerHTML = serverResult.result;\n}\n\nmodule.exports = handleServerResponse;\n\n//# sourceURL=webpack://frontend/./public/js/api/calculator/handleServerResult.js?\n}");

/***/ }),

/***/ "./public/js/utils/keyboardListener.js":
/*!*********************************************!*\
  !*** ./public/js/utils/keyboardListener.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("{const handleServerResponse = __webpack_require__(/*! ../api/calculator/handleServerResult */ \"./public/js/api/calculator/handleServerResult.js\");\n\nconst re = /^\\d$/;\nconst calcInput = document.querySelector('.calculator-input');\n\ndocument.addEventListener('keydown', async (event) => {\n    if (re.test(event.key)) {\n        calcInput.innerHTML += event.key;\n    }\n\n    switch (event.key) {\n        case '+':\n        case '-':\n        case '*':\n        case '/':\n        case '^':\n        case '%':\n            calcInput.innerHTML += event.key;\n            break;\n        case 'Backspace':\n            const inputLength = calcInput.innerHTML.length;\n            calcInput.innerHTML = calcInput.innerHTML.slice(0, inputLength - 1);\n            break;\n        case 'Enter':\n            await handleServerResponse();\n            break;\n    }\n});\n\n//# sourceURL=webpack://frontend/./public/js/utils/keyboardListener.js?\n}");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/utils/keyboardListener.js");
/******/ 	
/******/ })()
;