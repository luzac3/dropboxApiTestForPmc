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

/***/ "./typescriptTest/js/ts/dragAndDropFile.ts":
/*!*************************************************!*\
  !*** ./typescriptTest/js/ts/dragAndDropFile.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DragAndDrop\": () => (/* binding */ DragAndDrop)\n/* harmony export */ });\nvar DragAndDrop = /** @class */ (function () {\r\n    function DragAndDrop(inDropAreaElemnt, inFileInformationElement, inUploadFileElement) {\r\n        this.dropAreaElement = inDropAreaElemnt;\r\n        this.fileInformationElement = inFileInformationElement;\r\n        this.uploadFileElement = inUploadFileElement;\r\n    }\r\n    DragAndDrop.prototype.setDragAndDropEvent = function () {\r\n        var _this = this;\r\n        this.dropAreaElement.on('dragover', function (event) {\r\n            event.stopPropagation();\r\n            event.preventDefault();\r\n            _this.dropAreaElement.addClass(\"bg-info\");\r\n            _this.dropAreaElement.removeClass(\"bg-warning\");\r\n            _this.dropAreaElement.removeClass(\"bg-success\");\r\n        });\r\n        this.dropAreaElement.on('dragleave', function (event) {\r\n            event.stopPropagation();\r\n            event.preventDefault();\r\n            if (_this.uploadFileElement.prop('files').length === 0) {\r\n                _this.dropAreaElement.addClass(\"bg-warning\");\r\n                _this.dropAreaElement.removeClass(\"bg-success\");\r\n            }\r\n            else {\r\n                _this.dropAreaElement.addClass(\"bg-success\");\r\n                _this.dropAreaElement.removeClass(\"bg-warning\");\r\n            }\r\n            _this.dropAreaElement.removeClass(\"bg-info\");\r\n        });\r\n        this.dropAreaElement.on('drop', function (event) {\r\n            var fileListObject;\r\n            event.stopPropagation();\r\n            event.preventDefault();\r\n            _this.dropAreaElement.addClass(\"bg-success\");\r\n            _this.dropAreaElement.removeClass(\"bg-warning\");\r\n            _this.dropAreaElement.removeClass(\"bg-info\");\r\n            if (event.originalEvent == undefined) {\r\n                alert(\"未知のエラーです\");\r\n                return;\r\n            }\r\n            if (event.originalEvent.dataTransfer == null) {\r\n                alert(\"未知のエラーです\");\r\n                return;\r\n            }\r\n            fileListObject = event.originalEvent.dataTransfer.files;\r\n            if (fileListObject.length > 1) {\r\n                alert(\"複数ファイルアップロードには対応しておりません\");\r\n                return;\r\n            }\r\n            // inputのファイルにデータを格納\r\n            _this.uploadFileElement.prop('files', fileListObject);\r\n            // inputを書き換えた際にChangeイベントが走らないため、changeを実行\r\n            _this.uploadFileElement.change();\r\n        });\r\n        this.dropAreaElement.on('click', function () {\r\n            _this.uploadFileElement[0].click();\r\n        });\r\n        this.uploadFileElement.on('change', function () {\r\n            var fileSize;\r\n            var fileUnit;\r\n            if (_this.uploadFileElement.prop('files').length === 0) {\r\n                _this.fileInformationElement.html(\"ファイルがありません\");\r\n                _this.dropAreaElement.addClass(\"bg-warning\");\r\n                _this.dropAreaElement.removeClass(\"bg-info\");\r\n                _this.dropAreaElement.removeClass(\"bg-success\");\r\n                return;\r\n            }\r\n            var fileObject = _this.uploadFileElement.prop('files')[0];\r\n            var changeSizeToAppropriateUnit = new ChangeSizeToAppropriateUnit(fileObject.size);\r\n            // ファイルサイズを変換(byte→Kb,Mb,Gb)\r\n            fileSize = changeSizeToAppropriateUnit.getConvertedSize();\r\n            fileUnit = changeSizeToAppropriateUnit.getUnit();\r\n            // ファイル情報取得、HTML書き換え\r\n            _this.fileInformationElement.html(fileObject.name + \"(\" + fileSize + fileUnit + \")\");\r\n        });\r\n    };\r\n    return DragAndDrop;\r\n}());\r\n\r\nvar ChangeSizeToAppropriateUnit = /** @class */ (function () {\r\n    function ChangeSizeToAppropriateUnit(fileSize) {\r\n        this.kb = 1024;\r\n        this.mb = Math.pow(this.kb, 2);\r\n        this.gb = Math.pow(this.kb, 3);\r\n        if (fileSize >= this.gb) {\r\n            this.unit = 'Gbyte';\r\n            this.convertedSize = Math.floor((fileSize / this.gb) * 100) / 100;\r\n        }\r\n        else if (fileSize >= this.mb) {\r\n            this.unit = 'Mbyte';\r\n            this.convertedSize = Math.floor((fileSize / this.mb) * 100) / 100;\r\n        }\r\n        else if (fileSize >= this.kb) {\r\n            this.unit = 'Kbyte';\r\n            this.convertedSize = Math.floor((fileSize / this.kb) * 100) / 100;\r\n        }\r\n        else {\r\n            this.unit = 'byte';\r\n            this.convertedSize = fileSize;\r\n        }\r\n    }\r\n    ChangeSizeToAppropriateUnit.prototype.getUnit = function () {\r\n        return this.unit;\r\n    };\r\n    ChangeSizeToAppropriateUnit.prototype.getConvertedSize = function () {\r\n        return this.convertedSize;\r\n    };\r\n    return ChangeSizeToAppropriateUnit;\r\n}());\r\n\n\n//# sourceURL=webpack://tst/./typescriptTest/js/ts/dragAndDropFile.ts?");

/***/ }),

/***/ "./typescriptTest/js/ts/eventControler.ts":
/*!************************************************!*\
  !*** ./typescriptTest/js/ts/eventControler.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EventControler\": () => (/* binding */ EventControler)\n/* harmony export */ });\n/* harmony import */ var _handleDropboxFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDropboxFile */ \"./typescriptTest/js/ts/handleDropboxFile.ts\");\n/* harmony import */ var _handleCookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleCookie */ \"./typescriptTest/js/ts/handleCookie.ts\");\n\r\n\r\nvar EventControler = /** @class */ (function () {\r\n    function EventControler() {\r\n    }\r\n    EventControler.prototype.setList = function (listElement) {\r\n        var _this = this;\r\n        var handleDropboxFile = new _handleDropboxFile__WEBPACK_IMPORTED_MODULE_0__.HandleDropboxFile();\r\n        handleDropboxFile.getFileList().then(function (listData) {\r\n            listData.forEach(function (val) {\r\n                var date = val['client_modified'].split('T');\r\n                var ymd = date[0];\r\n                var time = date[1].slice(0, -1);\r\n                var year;\r\n                var month;\r\n                var day;\r\n                var hour;\r\n                var minute;\r\n                var second;\r\n                var createDate;\r\n                // 日時を日本時間に修正\r\n                var jpDate = new Date(ymd + \" \" + time);\r\n                jpDate.setHours(jpDate.getHours() + 9);\r\n                year = jpDate.getFullYear();\r\n                month = ('00' + jpDate.getMonth() + 1).slice(-2);\r\n                day = ('00' + jpDate.getDate()).slice(-2);\r\n                hour = ('00' + jpDate.getHours()).slice(-2);\r\n                minute = ('00' + jpDate.getMinutes()).slice(-2);\r\n                second = ('00' + jpDate.getSeconds()).slice(-2);\r\n                createDate = year + \"/\" + month + \"/\" + day + \" \" + hour + \":\" + minute + \":\" + second;\r\n                var cloneListElement = listElement.clone();\r\n                cloneListElement.attr(\"class\", \"file_list\");\r\n                cloneListElement.find(\".file_data\")[0].dataset.file_path = val['id'];\r\n                cloneListElement.find(\".file_data\")[0].dataset.file_name = val['name'];\r\n                cloneListElement.find('.file_name a').html(val['name']);\r\n                cloneListElement.find('.date').html(createDate);\r\n                listElement.after(cloneListElement);\r\n                // 作成した要素にクリックイベントを追加\r\n                _this.downloadFile(cloneListElement.find('.file_name a'));\r\n                _this.deleteFile(cloneListElement.find('.delete_button'));\r\n            });\r\n        }, function (error) {\r\n            alert(\"リストの取得に失敗しました\\n\" + error);\r\n        });\r\n    };\r\n    EventControler.prototype.reSetList = function (reSetButtonElement, listElement) {\r\n        reSetButtonElement.on(\"click\", function () {\r\n            listElement.nextAll().remove();\r\n            var eventControler = new EventControler();\r\n            eventControler.setList(listElement);\r\n        });\r\n    };\r\n    EventControler.prototype.uploadFile = function (uploadButtonElement, uploadFileElement) {\r\n        uploadButtonElement.on(\"click\", function () {\r\n            var filesElement = uploadFileElement.prop('files');\r\n            var uploadFile;\r\n            if (filesElement.length === 0) {\r\n                alert(\"ファイルが登録されていません\");\r\n                return;\r\n            }\r\n            else {\r\n                uploadFile = filesElement[0];\r\n            }\r\n            var handleDropboxFile = new _handleDropboxFile__WEBPACK_IMPORTED_MODULE_0__.HandleDropboxFile();\r\n            // アップロード処理実行\r\n            handleDropboxFile.uploadFile(uploadFile).then(function (res) {\r\n                if (typeof res === \"number\") {\r\n                    alert(\"アップロードしました\");\r\n                    location.reload();\r\n                }\r\n                else {\r\n                    alert(\"未知のエラーが発生しました\");\r\n                }\r\n            }, function (error) {\r\n                alert(\"アップロードに失敗しました\\n\" + error);\r\n            }).finally(function () {\r\n                // inputフォームのファイルをクリア\r\n                uploadFileElement.val(\"\");\r\n                // inputを書き換えた際にChangeイベントが走らないため、changeを実行\r\n                uploadFileElement.change();\r\n            });\r\n        });\r\n    };\r\n    EventControler.prototype.downloadFile = function (downloadLinkElement) {\r\n        downloadLinkElement.on(\"click\", function (event) {\r\n            var handleDropboxFile = new _handleDropboxFile__WEBPACK_IMPORTED_MODULE_0__.HandleDropboxFile();\r\n            var filePath = $(event.target).closest(\"tr\").data(\"file_path\");\r\n            var fileName = $(event.target).closest(\"tr\").data(\"file_name\");\r\n            // fileNameが消えてしまうので一時的に保持\r\n            var handleCoolie = new _handleCookie__WEBPACK_IMPORTED_MODULE_1__.HandleCookie();\r\n            handleCoolie.setCookie('fileName', fileName);\r\n            handleDropboxFile.downloadFile(filePath).then(function (data) {\r\n                if (data === null) {\r\n                    alert(\"未知のエラーが発生しました\");\r\n                }\r\n                else {\r\n                    // fileName再取得\r\n                    var handleCookie = new _handleCookie__WEBPACK_IMPORTED_MODULE_1__.HandleCookie();\r\n                    var fileName_1 = handleCookie.getCookie('fileName');\r\n                    handleCookie.delCookie('fileName');\r\n                    if (typeof data !== \"string\") {\r\n                        alert(\"ファイルがテキスト形式ではありません\");\r\n                        return;\r\n                    }\r\n                    // ダウンロード用の要素を作成\r\n                    var downLoadElemnt = document.createElement(\"a\");\r\n                    downLoadElemnt.download = fileName_1;\r\n                    downLoadElemnt.href = URL.createObjectURL(new Blob([data], { type: 'text.plain' }));\r\n                    downLoadElemnt.dataset.downloadurl = [\"text/plain\", downLoadElemnt.download, downLoadElemnt.href].join(\":\");\r\n                    downLoadElemnt.click();\r\n                }\r\n            }, function (error) {\r\n                alert(\"ダウンロードに失敗しました\\n\" + error);\r\n            });\r\n        });\r\n    };\r\n    EventControler.prototype.deleteFile = function (deleteButtonElement) {\r\n        deleteButtonElement.on(\"click\", function (event) {\r\n            var deleteFilePath = $(event.target).closest(\"tr\").data(\"file_path\");\r\n            var deleteFileName = $(event.target).closest(\"tr\").data(\"file_name\");\r\n            var confirmMessage = deleteFileName + \"を削除します。\\nよろしいですか？\";\r\n            if (window.confirm(confirmMessage)) {\r\n                var handleDropboxFile = new _handleDropboxFile__WEBPACK_IMPORTED_MODULE_0__.HandleDropboxFile();\r\n                handleDropboxFile.deleteFile(deleteFilePath).then(function (res) {\r\n                    if (typeof res === \"number\") {\r\n                        alert(\"削除しました\");\r\n                        location.reload();\r\n                    }\r\n                    else {\r\n                        alert(\"未知のエラーが発生しました\");\r\n                    }\r\n                }, function (error) {\r\n                    alert(\"削除に失敗しました\\n\" + error);\r\n                });\r\n            }\r\n        });\r\n    };\r\n    return EventControler;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://tst/./typescriptTest/js/ts/eventControler.ts?");

/***/ }),

/***/ "./typescriptTest/js/ts/handleCookie.ts":
/*!**********************************************!*\
  !*** ./typescriptTest/js/ts/handleCookie.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HandleCookie\": () => (/* binding */ HandleCookie)\n/* harmony export */ });\nvar HandleCookie = /** @class */ (function () {\r\n    function HandleCookie() {\r\n    }\r\n    HandleCookie.prototype.setCookie = function (key, value, time) {\r\n        if (time === void 0) { time = 0; }\r\n        var maxAge = \"\";\r\n        if (time) {\r\n            maxAge = \"; max-age=\" + time;\r\n        }\r\n        document.cookie = key + \"=\" + (value || \"\") + maxAge + \"; path=/\";\r\n    };\r\n    HandleCookie.prototype.getCookie = function (key) {\r\n        var cookies = document.cookie;\r\n        var cookiesArray = cookies.split(';');\r\n        var cookieArray;\r\n        var ret = \"\";\r\n        cookiesArray.forEach(function (cookie) {\r\n            cookieArray = cookie.split('=');\r\n            if (cookieArray[0].trim() == key) {\r\n                ret = cookieArray[1].trim();\r\n            }\r\n        });\r\n        return ret;\r\n    };\r\n    HandleCookie.prototype.delCookie = function (key) {\r\n        document.cookie = key + \"=;max-age=0\";\r\n    };\r\n    return HandleCookie;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://tst/./typescriptTest/js/ts/handleCookie.ts?");

/***/ }),

/***/ "./typescriptTest/js/ts/handleDropboxFile.ts":
/*!***************************************************!*\
  !*** ./typescriptTest/js/ts/handleDropboxFile.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HandleDropboxFile\": () => (/* binding */ HandleDropboxFile)\n/* harmony export */ });\n/* harmony import */ var _handleCookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleCookie */ \"./typescriptTest/js/ts/handleCookie.ts\");\n\r\nvar HandleDropboxFile = /** @class */ (function () {\r\n    function HandleDropboxFile() {\r\n        var handleCookie = new _handleCookie__WEBPACK_IMPORTED_MODULE_0__.HandleCookie();\r\n        this.accessToken = handleCookie.getCookie(\"accessToken\");\r\n        // トークンがない場合、認証ページに移動\r\n        if (this.accessToken == \"\") {\r\n            console.log(\"no token\");\r\n            window.location.replace(\"./oAuth.html\");\r\n        }\r\n    }\r\n    HandleDropboxFile.prototype.uploadFile = function (file) {\r\n        var _this = this;\r\n        return new Promise(function (resolve, reject) {\r\n            var url = 'https://content.dropboxapi.com/2/files/upload';\r\n            var data;\r\n            // 日本語ファイル名をエスケープ\r\n            var fileName = _this.escapeFileNameToUtf8(file.name);\r\n            var contentType = 'application/octet-stream';\r\n            var headers = {\r\n                \"Authorization\": \"Bearer \" + _this.accessToken,\r\n                \"Dropbox-API-Arg\": '{\"path\": \"/test/' + fileName + '\",\"mode\": \"add\",\"autorename\": true,\"mute\": false}'\r\n            };\r\n            var reader = new FileReader();\r\n            reader.readAsText(file);\r\n            reader.onload = function () {\r\n                if (reader.result == null) {\r\n                    alert(\"ファイル情報の取得に失敗しました\");\r\n                    return;\r\n                }\r\n                if (typeof reader.result === 'string') {\r\n                    data = reader.result;\r\n                }\r\n                var handleDropboxFile = new HandleDropboxFile();\r\n                handleDropboxFile.sendRequest(url, data, contentType, headers).then(function () {\r\n                    resolve(1);\r\n                }, function (error) {\r\n                    reject(error);\r\n                });\r\n            };\r\n        });\r\n    };\r\n    HandleDropboxFile.prototype.downloadFile = function (path) {\r\n        var _this = this;\r\n        return new Promise(function (resolve, reject) {\r\n            var url = 'https://content.dropboxapi.com/2/files/download';\r\n            var data = '';\r\n            var contentType = '';\r\n            var headers = {\r\n                'Authorization': 'Bearer ' + _this.accessToken,\r\n                'Content-Type': 'application/octet-stream',\r\n                'Dropbox-API-Arg': JSON.stringify({\r\n                    \"path\": path,\r\n                }),\r\n            };\r\n            _this.sendRequest(url, data, contentType, headers).then(function (res) {\r\n                resolve(res);\r\n            }, function (error) {\r\n                reject(error);\r\n            });\r\n        });\r\n    };\r\n    HandleDropboxFile.prototype.deleteFile = function (deleteFilePath) {\r\n        var _this = this;\r\n        return new Promise(function (resolve, reject) {\r\n            var url = 'https://api.dropboxapi.com/2/files/delete_v2';\r\n            var data = JSON.stringify({ \"path\": deleteFilePath });\r\n            var contentType = 'application/json';\r\n            var headers = {\r\n                \"Authorization\": \"Bearer \" + _this.accessToken\r\n            };\r\n            _this.sendRequest(url, data, contentType, headers).then(function () {\r\n                resolve(1);\r\n            }, function (error) {\r\n                reject(error);\r\n            });\r\n        });\r\n    };\r\n    HandleDropboxFile.prototype.getFileList = function () {\r\n        var _this = this;\r\n        return new Promise(function (resolve, reject) {\r\n            var url = 'https://api.dropboxapi.com/2/files/list_folder';\r\n            var data = JSON.stringify({ 'path': '/test' });\r\n            var contentType = 'application/json';\r\n            var headers = {\r\n                \"Authorization\": \"Bearer \" + _this.accessToken\r\n            };\r\n            _this.sendRequest(url, data, contentType, headers).then(function (data) {\r\n                resolve(data['entries']);\r\n            }, function (error) {\r\n                reject(error.responseText);\r\n            });\r\n        });\r\n    };\r\n    HandleDropboxFile.prototype.getToken = function () {\r\n        return this.accessToken;\r\n    };\r\n    HandleDropboxFile.prototype.sendRequest = function (url, data, contentType, headers) {\r\n        return new Promise(function (resolve, reject) {\r\n            $.ajax({\r\n                'url': url,\r\n                'type': 'post',\r\n                'data': data,\r\n                'processData': false,\r\n                'contentType': contentType,\r\n                'headers': headers,\r\n            }).then(function (data) {\r\n                resolve(data);\r\n            }, function (error) {\r\n                reject(error[\"status\"] + \":\" + error[\"statusText\"]);\r\n                if (error[\"status\"] == 400) {\r\n                    window.location.replace(\"./oAuth.html\");\r\n                }\r\n            });\r\n        });\r\n    };\r\n    HandleDropboxFile.prototype.escapeFileNameToUtf8 = function (fileName) {\r\n        return unescape(encodeURIComponent(fileName));\r\n    };\r\n    return HandleDropboxFile;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://tst/./typescriptTest/js/ts/handleDropboxFile.ts?");

/***/ }),

/***/ "./typescriptTest/js/ts/main.ts":
/*!**************************************!*\
  !*** ./typescriptTest/js/ts/main.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventControler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventControler */ \"./typescriptTest/js/ts/eventControler.ts\");\n/* harmony import */ var _dragAndDropFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragAndDropFile */ \"./typescriptTest/js/ts/dragAndDropFile.ts\");\n\r\n\r\n$(document).ready(function () {\r\n    var reSetButtonElement = $(\".re_set_button\");\r\n    var listElement = $(\".file_list_wrapper .template\");\r\n    var uploadButtonElement = $(\".upload_button\");\r\n    var uploadFileElement = $(\".upload_file\");\r\n    var dropAreaElement = $(\".upload_area_wrapper\");\r\n    var fileInformationElement = $(\".file_information\");\r\n    var eventControler = new _eventControler__WEBPACK_IMPORTED_MODULE_0__.EventControler();\r\n    var dragAndDrop = new _dragAndDropFile__WEBPACK_IMPORTED_MODULE_1__.DragAndDrop(dropAreaElement, fileInformationElement, uploadFileElement);\r\n    // list取得\r\n    eventControler.setList(listElement);\r\n    // イベントリストを登録\r\n    eventControler.reSetList(reSetButtonElement, listElement);\r\n    eventControler.uploadFile(uploadButtonElement, uploadFileElement);\r\n    dragAndDrop.setDragAndDropEvent();\r\n});\r\n\n\n//# sourceURL=webpack://tst/./typescriptTest/js/ts/main.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./typescriptTest/js/ts/main.ts");
/******/ 	
/******/ })()
;