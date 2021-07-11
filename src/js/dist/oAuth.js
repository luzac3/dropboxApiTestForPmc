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

/***/ "./typescriptTest/js/config/appKeys.json":
/*!***********************************************!*\
  !*** ./typescriptTest/js/config/appKeys.json ***!
  \***********************************************/
/***/ ((module) => {

eval("module.exports = {\"appKey\":\"9n7e4rnqptqzyc5\",\"appSecret\":\"boliq3s0i1hke5x\"}\n\n//# sourceURL=webpack://tst/./typescriptTest/js/config/appKeys.json?");

/***/ }),

/***/ "./typescriptTest/js/config/redirectUri.json":
/*!***************************************************!*\
  !*** ./typescriptTest/js/config/redirectUri.json ***!
  \***************************************************/
/***/ ((module) => {

eval("module.exports = {\"redirectUri\":\"http://localhost/typescriptTestWrapper/src/typescriptTest/oAuth.html\"}\n\n//# sourceURL=webpack://tst/./typescriptTest/js/config/redirectUri.json?");

/***/ }),

/***/ "./typescriptTest/js/ts/handleCookie.ts":
/*!**********************************************!*\
  !*** ./typescriptTest/js/ts/handleCookie.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HandleCookie\": () => (/* binding */ HandleCookie)\n/* harmony export */ });\nvar HandleCookie = /** @class */ (function () {\r\n    function HandleCookie() {\r\n    }\r\n    HandleCookie.prototype.setCookie = function (key, value, time) {\r\n        if (time === void 0) { time = 0; }\r\n        var maxAge = \"\";\r\n        if (time) {\r\n            maxAge = \"; max-age=\" + time;\r\n        }\r\n        document.cookie = key + \"=\" + (value || \"\") + maxAge + \"; path=/\";\r\n    };\r\n    HandleCookie.prototype.getCookie = function (key) {\r\n        var cookies = document.cookie;\r\n        var cookiesArray = cookies.split(';');\r\n        var cookieArray;\r\n        var ret = \"\";\r\n        cookiesArray.forEach(function (cookie) {\r\n            cookieArray = cookie.split('=');\r\n            if (cookieArray[0].trim() == key) {\r\n                ret = cookieArray[1].trim();\r\n            }\r\n        });\r\n        return ret;\r\n    };\r\n    HandleCookie.prototype.delCookie = function (key) {\r\n        document.cookie = key + \"=;max-age=0\";\r\n    };\r\n    return HandleCookie;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://tst/./typescriptTest/js/ts/handleCookie.ts?");

/***/ }),

/***/ "./typescriptTest/js/ts/handleOAuth.ts":
/*!*********************************************!*\
  !*** ./typescriptTest/js/ts/handleOAuth.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HandleOAuth\": () => (/* binding */ HandleOAuth)\n/* harmony export */ });\n/* harmony import */ var _config_appKeys_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/appKeys.json */ \"./typescriptTest/js/config/appKeys.json\");\n/* harmony import */ var _config_appKeys_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_appKeys_json__WEBPACK_IMPORTED_MODULE_0__);\n\r\nvar HandleOAuth = /** @class */ (function () {\r\n    function HandleOAuth(redirectUri) {\r\n        this.clientId = (_config_appKeys_json__WEBPACK_IMPORTED_MODULE_0___default().appKey);\r\n        this.clientSecret = (_config_appKeys_json__WEBPACK_IMPORTED_MODULE_0___default().appSecret);\r\n        this.redirectUri = redirectUri;\r\n    }\r\n    HandleOAuth.prototype.authorize = function () {\r\n        var authorizeUrl = \"https://www.dropbox.com/oauth2/authorize\";\r\n        authorizeUrl += \"?client_id=\" + this.clientId;\r\n        authorizeUrl += \"&redirect_uri=\" + this.redirectUri;\r\n        authorizeUrl += \"&response_type=code\";\r\n        location.href = authorizeUrl;\r\n    };\r\n    HandleOAuth.prototype.getAccessTokenFromCode = function (code) {\r\n        var url = \"https://api.dropboxapi.com/oauth2/token\";\r\n        url += '?grant_type=authorization_code';\r\n        url += \"&\" + code;\r\n        url += \"&client_id=\" + this.clientId;\r\n        url += \"&client_secret=\" + this.clientSecret;\r\n        url += \"&redirect_uri=\" + this.redirectUri;\r\n        return new Promise(function (resolve, reject) {\r\n            $.ajax({\r\n                'url': url,\r\n                'method': 'post',\r\n                'processData': false,\r\n                'contentType': 'application/x-www-form-urlencoded',\r\n            }).then(function (data) {\r\n                var jsonData = JSON.parse(data);\r\n                resolve(jsonData.access_token);\r\n            }, function (error) {\r\n                reject(error.responseText);\r\n            });\r\n        });\r\n    };\r\n    return HandleOAuth;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://tst/./typescriptTest/js/ts/handleOAuth.ts?");

/***/ }),

/***/ "./typescriptTest/js/ts/oAuth.ts":
/*!***************************************!*\
  !*** ./typescriptTest/js/ts/oAuth.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_redirectUri_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/redirectUri.json */ \"./typescriptTest/js/config/redirectUri.json\");\n/* harmony import */ var _config_redirectUri_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_redirectUri_json__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _handleOAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleOAuth */ \"./typescriptTest/js/ts/handleOAuth.ts\");\n/* harmony import */ var _handleCookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleCookie */ \"./typescriptTest/js/ts/handleCookie.ts\");\n\r\n\r\n\r\n$(document).ready(function () {\r\n    // 認証後のリダイレクトで戻ってきた場合、URLからCODEを取得\r\n    var url = location.search.substring(1).split('&');\r\n    var code = url[0];\r\n    var handleOAuth = new _handleOAuth__WEBPACK_IMPORTED_MODULE_1__.HandleOAuth((_config_redirectUri_json__WEBPACK_IMPORTED_MODULE_0___default().redirectUri));\r\n    // cookieのアクセストークンを初期化\r\n    var handleCookie = new _handleCookie__WEBPACK_IMPORTED_MODULE_2__.HandleCookie();\r\n    handleCookie.delCookie(\"accessToken\");\r\n    if (code == \"\") {\r\n        handleOAuth.authorize();\r\n    }\r\n    else {\r\n        handleOAuth.getAccessTokenFromCode(code).then(function (data) {\r\n            if (typeof data === 'string') {\r\n                handleCookie.setCookie(\"accessToken\", data, 30 * 60);\r\n                window.location.replace(\"./main.html\");\r\n            }\r\n            else {\r\n                alert(\"トークンが不正です\");\r\n            }\r\n        }, function (error) {\r\n            alert(\"認証に失敗しました。\\n\" + error);\r\n        });\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://tst/./typescriptTest/js/ts/oAuth.ts?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./typescriptTest/js/ts/oAuth.ts");
/******/ 	
/******/ })()
;