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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Nunito|PT+Serif:400,400i&display=swap);\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=PT+Serif:ital@0;1&display=swap);\"]);\n// Module\nexports.push([module.i, \"* {\\n  box-sizing: border-box;\\n}\\nhtml,\\nbody {\\n  width: 100%;\\n  height: 100%;\\n}\\ninput[type='text'] {\\n  /* width: 100%; */\\n  padding: 5px 10px;\\n  margin: 8px 0;\\n}\\n\\n.icon {\\n  height: 12px;\\n  width: 12px;\\n}\\n\\n.w80 {\\n  width: 80px;\\n}\\n.w90 {\\n  width: 90px;\\n}\\n.w100 {\\n  width: 100px;\\n}\\n\\nbody {\\n  /* font-family: \\\"PT Serif\\\", serif; */\\n\\n  /* background-color: #f0efeb; */\\n  background-color: #e9ecee;\\n  /* margin: 50px auto 0px; */\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.workoutRegistContinaer {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 10px;\\n  border-radius: 4px;\\n  border: 1px black solid;\\n  height: 60vh;\\n}\\n\\n/* 매일 운동 루틴 */\\n.workoutRegistHeader {\\n  text-align: center;\\n  height: 4vh;\\n  line-height: 4vh;\\n  margin-bottom: 10px;\\n  border-radius: 4px;\\n  border: 1px black solid;\\n  background-color: #ffffff;\\n}\\n\\n.workoutContainer {\\n  display: grid;\\n  grid-template-columns: 1.5fr 3fr;\\n  grid-auto-rows: 100%;\\n  height: 100%;\\n}\\n\\n/*  */\\n/* 왼쪽 */\\n/*  */\\n.workoutRoutineContentsContainer {\\n  display: flex;\\n  flex-direction: column;\\n  justify-items: center;\\n  align-items: center;\\n  border-radius: 4px;\\n  margin-right: 10px;\\n}\\n\\n.toolbarContainer {\\n  /* border: 1px blue solid; */\\n  width: 100%;\\n  text-align: center;\\n  height: 30px;\\n  line-height: 30px;\\n  margin: 0 0 10px 0;\\n}\\n\\n/* 새 운동 루틴 + */\\n.newWorkOutRoutineBtn {\\n  padding: 0 10px;\\n  /* height: 2vh;\\n  line-height: 2vh; */\\n  height: 30px;\\n  line-height: 30px;\\n  border-radius: 4px;\\n  border: 1px black solid;\\n  background-color: #ffffff;\\n}\\n\\n/* 운동루틴 list container */\\n.workoutRoutineListContentsContainer {\\n  display: flex;\\n  flex-direction: column;\\n  justify-items: center;\\n  align-items: center;\\n  /* height: 100%; */\\n  width: 100%;\\n  padding: 10px;\\n  border: 1px black solid;\\n\\n  height: calc(60vh - 125px);\\n  overflow-y: scroll;\\n}\\n.registWorkOutRoutineContainer {\\n  display: none;\\n  margin-bottom: 10px;\\n}\\n.workoutRoutineListContainer {\\n  width: 100%;\\n  /* padding: 0 10px; */\\n}\\n.workoutRoutine {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  justify-items: center;\\n  align-items: center;\\n  margin-bottom: 5px;\\n}\\n\\n/*  */\\n/* 오른쪽 */\\n/*  */\\n.workoutContentsContainer {\\n  display: flex;\\n  flex-direction: column;\\n  border-radius: 4px;\\n}\\n\\n/* 운동추가 */\\n.newWorkoutBtn {\\n  margin-right: 10px;\\n  padding: 0 10px;\\n  /* height: 2vh;\\n  line-height: 2vh; */\\n  height: 30px;\\n  line-height: 30px;\\n  border-radius: 4px;\\n  border: 1px black solid;\\n  background-color: #ffffff;\\n}\\n\\n/* 삭제 */\\n.workoutdeleteBtn {\\n  padding: 0 10px;\\n  /* height: 2vh;\\n  line-height: 2vh; */\\n  height: 30px;\\n  line-height: 30px;\\n  border-radius: 4px;\\n  border: 1px black solid;\\n  background-color: tomato;\\n}\\n\\n.toolbar {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n}\\n\\n.toolbarLeft {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.toolbarRight {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.totalTime {\\n  display: inline-flex;\\n  align-items: center;\\n}\\n\\n.workoutListContainer {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  height: 100%;\\n}\\n.workoutListNestedContainer {\\n  flex: 6;\\n  align-items: stretch;\\n  padding: 10px;\\n  margin-bottom: 10px;\\n  border: 1px solid black;\\n}\\n.workoutList {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.workoutList:last-child {\\n  /* border: 1px solid black; */\\n}\\n.workoutListContentsContainer {\\n}\\n.workout {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  margin-bottom: 7px;\\n}\\n.workout:last-child {\\n  /* margin-bottom: 0px !important;\\n  border: 1px solid saddlebrown; */\\n}\\n\\n/* 운동추가 */\\n.registWorkOutContainer {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.registWorkOutHeader {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  margin-bottom: 10px;\\n  padding: 7px;\\n  border: 1px solid black;\\n}\\n.registWorkOutHeaderLeft {\\n  display: flex;\\n  flex-direction: row;\\n}\\n.registWorkOutHeaderLeft > span,\\n.registWorkOutHeaderRight > span {\\n  /* display: inline-block;\\n  vertical-align: middle; */\\n  /* min-height: 100px; */\\n  display: inline-flex;\\n  align-items: center;\\n  /* border: 1px solid aqua; */\\n  margin: 5px;\\n}\\n.registWorkOutHeaderLeft > input,\\n.registWorkOutHeaderRight > input {\\n  width: 70px;\\n}\\n.registWorkOutHeaderRight {\\n  display: flex;\\n  flex-direction: row;\\n}\\n.registWorkOutFooter {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-end;\\n}\\n.saveBtnRegistWorkOutBtn,\\n.cancelBtnRegistWorkOutBtn {\\n  text-align: center;\\n  /* width: 10vw; */\\n  width: 100%;\\n  /* height: 2vh;\\n  line-height: 2vh; */\\n  height: 30px;\\n  line-height: 30px;\\n  margin-right: 10px;\\n  border-radius: 4px;\\n  border: 1px black solid;\\n  background-color: #ffffff;\\n}\\n\\n.cancelBtnRegistWorkOutBtn {\\n  margin-right: 0px !important;\\n}\\n/* 운동 시작 */\\n.startWorkOutBtn {\\n  text-align: center;\\n  margin: 0 10px;\\n  height: 4vh;\\n  line-height: 4vh;\\n  border-radius: 4px;\\n  border: 1px black solid;\\n  background-color: #ffffff;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/app.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./app.css */ \"./node_modules/css-loader/dist/cjs.js!./src/app.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/app.css?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/math.js */ \"./src/js/math.js\");\n/* harmony import */ var _js_dummyData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/dummyData.js */ \"./src/js/dummyData.js\");\n/* harmony import */ var _js_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/common.js */ \"./src/js/common.js\");\n/* harmony import */ var _js_registWorkoutRoutine_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/registWorkoutRoutine.js */ \"./src/js/registWorkoutRoutine.js\");\n/* harmony import */ var _js_registWorkout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/registWorkout.js */ \"./src/js/registWorkout.js\");\n/* harmony import */ var _js_registWorkout_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_registWorkout_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.css */ \"./src/app.css\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _img_soccer_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/soccer.png */ \"./src/img/soccer.png\");\n/* harmony import */ var _img_addIcon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/addIcon.png */ \"./src/img/addIcon.png\");\n/* harmony import */ var _img_deleteIcon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/deleteIcon.png */ \"./src/img/deleteIcon.png\");\n/* harmony import */ var _img_editIcon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/editIcon.png */ \"./src/img/editIcon.png\");\n\n\n\n\n\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  // const el = document.querySelector('#app');\n  // el.innerHTML = `<h1>1+2=${sum(1, 2)}</h1>\n  // <img src=\"${soccer}\" alt=\"webpack\"/>`;\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/img/addIcon.png":
/*!*****************************!*\
  !*** ./src/img/addIcon.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../dist/img/addIcon.png?d577e16d0353bf8380d5ec21b187b22d\");\n\n//# sourceURL=webpack:///./src/img/addIcon.png?");

/***/ }),

/***/ "./src/img/deleteIcon.png":
/*!********************************!*\
  !*** ./src/img/deleteIcon.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../dist/img/deleteIcon.png?18467e41a6bc8820ff3bb18e0b4fc75e\");\n\n//# sourceURL=webpack:///./src/img/deleteIcon.png?");

/***/ }),

/***/ "./src/img/editIcon.png":
/*!******************************!*\
  !*** ./src/img/editIcon.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../dist/img/editIcon.png?306f262de73c9e777cd5069a1bed71a5\");\n\n//# sourceURL=webpack:///./src/img/editIcon.png?");

/***/ }),

/***/ "./src/img/soccer.png":
/*!****************************!*\
  !*** ./src/img/soccer.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../dist/img/soccer.png?5a26e87ce4d20941a8348b845b303ad4\");\n\n//# sourceURL=webpack:///./src/img/soccer.png?");

/***/ }),

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! exports provided: getWorkoutRountineListDom, appendWorkoutRountine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWorkoutRountineListDom\", function() { return getWorkoutRountineListDom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendWorkoutRountine\", function() { return appendWorkoutRountine; });\nconsole.log('### common');\n\nconst workoutRoutineTemplate = `<div data-index=\"{{index}}\" class=\"workoutRoutine\">\n<span data-index=\"{{index}}\" class=\"workoutRoutineTtitle\">{{title}}</span>\n<div data-index=\"{{index}}\" class=\"workoutRoutineButtonContainer\">\n  <span data-index=\"{{index}}\" class=\"workoutRoutineEditBtn\">\n    <img data-index=\"{{index}}\" id=\"edit\" class=\"icon\" src=\"./img/editIcon.png\" />\n  </span>\n  <span data-index=\"{{index}}\" class=\"workoutRoutineDeleteBtn\">\n    <img data-index=\"{{index}}\" id=\"delete\" class=\"icon\" src=\"./img/deleteIcon.png\" />\n  </span>\n</div>\n</div>`;\n\nconst targetWorkoutRoutineListContainer = document.getElementById(\n  'targetWorkoutRoutineListContainer',\n);\n\nconst toggleRegisterWorkoutRoutineInput = (mode = '', index = '') => {\n  let display = '';\n\n  if (targetRegisterWorkoutRoutine.style.display === 'block') {\n    display = 'none';\n    mode = '';\n    targetRegisterWorkoutRoutineInput.value = '';\n  } else {\n    display = 'block';\n    mode = mode;\n\n    if (mode === 'edit') {\n      targetRegisterWorkoutRoutine.dataset.editIndex = index;\n    }\n  }\n  targetRegisterWorkoutRoutine.dataset.mode = mode;\n  targetRegisterWorkoutRoutine.style.display = display;\n};\n\nfunction getWorkoutRountineListDom(workoutRoutineListDummyData = []) {\n  console.log('### getWorkoutRountineListDom');\n  const template = workoutRoutineListDummyData\n    .map((v) =>\n      workoutRoutineTemplate\n        .replace(/\\{\\{index\\}\\}/g, v.index)\n        .replace('{{title}}', v.title),\n    )\n    .join('');\n\n  return new DOMParser().parseFromString(template, 'text/html').body.childNodes;\n}\n\nfunction appendWorkoutRountine(templateDomList = []) {\n  console.log('### appendWorkoutRountine');\n  const copy = [...templateDomList];\n  copy.forEach((node) => {\n    targetWorkoutRoutineListContainer.appendChild(node);\n  });\n}\n\n\n//# sourceURL=webpack:///./src/js/common.js?");

/***/ }),

/***/ "./src/js/dummyData.js":
/*!*****************************!*\
  !*** ./src/js/dummyData.js ***!
  \*****************************/
/*! exports provided: workoutRoutineList, workoutList, setWorkoutRoutineList, setWorkoutList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"workoutRoutineList\", function() { return workoutRoutineList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"workoutList\", function() { return workoutList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setWorkoutRoutineList\", function() { return setWorkoutRoutineList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setWorkoutList\", function() { return setWorkoutList; });\n// 운동 루틴 목록 List dummy data setting start\n// let workoutRoutineListDummyData = [];\nconst dummyData = {};\n// const dummyData = window;\ndummyData.workoutRoutineListDummyData = [];\ndummyData.workoutListDummyData = [];\n\nvar date = new Date();\nfor (let i = 0; i < 20; i++) {\n  dummyData.workoutRoutineListDummyData.push({\n    index: `${i}`,\n    title: `운동루틴 ${i}`,\n    regDate: date.setSeconds(i),\n    updateDate: date.setSeconds(i),\n  });\n}\n\nvar date = new Date();\nfor (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 5; j++) {\n    dummyData.workoutListDummyData.push({\n      index: `${j}`,\n      title: `운동 종류 ${j}`,\n      workoutIndex: i,\n      regDate: date.setSeconds(j),\n      updateDate: date.setSeconds(j),\n    });\n  }\n}\n\n// export default dummyData;\nlet workoutRoutineList = dummyData.workoutRoutineListDummyData;\nlet workoutList = dummyData.workoutListDummyData;\n\n\nconst setWorkoutRoutineList = (data) => {\n  // dummyData.workoutRoutineListDummyData = data;\n  workoutRoutineList = data;\n};\nconst setWorkoutList = (data) => {\n  // dummyData.workoutListDummyData = data;\n  workoutList = data;\n};\n\n\n\n//# sourceURL=webpack:///./src/js/dummyData.js?");

/***/ }),

/***/ "./src/js/math.js":
/*!************************!*\
  !*** ./src/js/math.js ***!
  \************************/
/*! exports provided: sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return sum; });\nfunction sum(a,b){\n  console.log('### math: ', a, b)\n\n  return a+b;\n}\n\n//# sourceURL=webpack:///./src/js/math.js?");

/***/ }),

/***/ "./src/js/registWorkout.js":
/*!*********************************!*\
  !*** ./src/js/registWorkout.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('### registWorkout.js');\n\n\n//# sourceURL=webpack:///./src/js/registWorkout.js?");

/***/ }),

/***/ "./src/js/registWorkoutRoutine.js":
/*!****************************************!*\
  !*** ./src/js/registWorkoutRoutine.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/js/common.js\");\n/* harmony import */ var _dummyData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dummyData.js */ \"./src/js/dummyData.js\");\n\n\n\nconsole.log(\n  '### registerWorkoutRoutine module > workoutRoutineList',\n  _dummyData_js__WEBPACK_IMPORTED_MODULE_1__[\"workoutRoutineList\"],\n);\n\nconst workoutRoutineTemplate = `<div data-index=\"{{index}}\" class=\"workoutRoutine\">\n<span data-index=\"{{index}}\" class=\"workoutRoutineTtitle\">{{title}}</span>\n<div data-index=\"{{index}}\" class=\"workoutRoutineButtonContainer\">\n  <span data-index=\"{{index}}\" class=\"workoutRoutineEditBtn\">\n    <img data-index=\"{{index}}\" id=\"edit\" class=\"icon\" src=\"./img/editIcon.png\" />\n  </span>\n  <span data-index=\"{{index}}\" class=\"workoutRoutineDeleteBtn\">\n    <img data-index=\"{{index}}\" id=\"delete\" class=\"icon\" src=\"./img/deleteIcon.png\" />\n  </span>\n</div>\n</div>`;\n\n// const div = document.createElement('div').appendChild(templateDomList);\n\n// 새 운동 루틴 기능\n// 새 운동 루틴 버튼\nconst targetRegisterWorkoutRoutine = document.getElementById(\n  'targetRegisterWorkoutRoutine',\n);\n\n// 새 운동 루틴 추가 input box\nconst targetRegisterWorkoutRoutineInput = document.getElementById(\n  'targetRegisterWorkoutRoutineInput',\n);\n\n// 새 운동 루틴 추가 컨테이너\nconst targetWorkoutRoutineListContainer = document.getElementById(\n  'targetWorkoutRoutineListContainer',\n);\n\n// 운동 루틴 목록 List dummy data setting start\n// let workoutRoutineList = [];\n// const dummyData = window;\n// dummyData.workoutRoutineList = [];\n\n// //reg date 임의 등록\n// var date = new Date();\n// for (let i = 0; i < 20; i++) {\n//   dummyData.workoutRoutineList.push({\n//     index: `${i}`,\n//     title: `운동루틴${i}`,\n//     regDate: date.setSeconds(i),\n//     updateDate: date.setSeconds(i),\n//   });\n// }\n\n//최근것부터 보여주도록\n_dummyData_js__WEBPACK_IMPORTED_MODULE_1__[\"workoutRoutineList\"].sort((a, b) => b.regDate++ - a.regDate++);\n\n// 운동 루틴 리스트 dom 생성 / append\nconst templateDomList = Object(_common_js__WEBPACK_IMPORTED_MODULE_0__[\"getWorkoutRountineListDom\"])(_dummyData_js__WEBPACK_IMPORTED_MODULE_1__[\"workoutRoutineList\"]);\nObject(_common_js__WEBPACK_IMPORTED_MODULE_0__[\"appendWorkoutRountine\"])(templateDomList);\n\n// const template = workoutRoutineList\n//   .map((v) =>\n//     workoutRoutineTemplate\n//       .replace(/\\{\\{index\\}\\}/g, v.index)\n//       .replace('{{title}}', v.title),\n//   )\n//   .join('');\n\n// const templateDomList = new DOMParser().parseFromString(template, 'text/html')\n//   .body.childNodes;\n\n// # notice\n// - copy 하지 않으면 appendChild로 추가할때 templateDomList 배열에서 하나씩 제거 됨\n// const copy = [...templateDomList];\n// copy.forEach((node) => {\n//   console.log(node.firstElementChild.dataset);\n//   targetWorkoutRoutineListContainer.appendChild(node);\n// });\n\n// 운동 루틴 목록 List dummy data setting end\n\n// const copy = [...templateDomList];\n// for (let i = 0; i < copy.length; i++) {\n//   targetWorkoutRoutineListContainer.appendChild(copy[i]);\n// }\n\ndocument.addEventListener('click', (e) => {\n  // console.log('123', e);\n});\n\ndocument.addEventListener('keypress', (e) => {\n  console.log('### document.kepress: ', e.which);\n  if (e.which == 27) {\n    // Close my modal window\n  }\n});\n\ndocument.onkeydown = (e) => {\n  console.log('### document.onkeydown ', e.which);\n\n  e = e || window.event;\n  var isEscape = false;\n  if ('key' in e) {\n    isEscape = e.key === 'Escape' || e.key === 'Esc';\n  } else {\n    isEscape = e.keyCode === 27;\n  }\n  if (isEscape) {\n    if (document.activeElement === e.target) {\n      console.log('새운동루틴 input에 active있어서 input 제거');\n      toggleRegisterWorkoutRoutineInput();\n    }\n  }\n};\n\n// 새 운동 루틴 버튼\ndocument\n  .getElementById('registerWorkoutRoutine')\n  .addEventListener('click', (e) => {\n    console.log('### 새 운동 루틴 버튼');\n    // toggle 새 운동 루틴 추가 input box\n    let display = 'block';\n    toggleRegisterWorkoutRoutineInput('new');\n    // if (targetRegisterWorkoutRoutine.style.display === 'block') {\n    //   display = 'none';\n    // }\n    // targetRegisterWorkoutRoutine.style.display = display;\n\n    //새 운동 루틴 버튼 추가시 자동으로 focus\n    targetRegisterWorkoutRoutineInput.focus();\n\n    //[]TODO 가로 길이 늘어남\n  });\n\n// 새 운동 루틴 input\ndocument\n  .getElementById('targetRegisterWorkoutRoutineInput')\n  .addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      console.log('### 새 운동 루틴 추가 enter');\n      //운동루틴 목록 최상단에 노출\n      //TODO data-set list index 추가\n      const inputTitle = e.target.value;\n\n      switch (targetRegisterWorkoutRoutine.dataset.mode) {\n        case 'new':\n          const replaceWorkoutRoutineTemplate = workoutRoutineTemplate\n            .replace(/\\{\\{index\\}\\}/g, `${_dummyData_js__WEBPACK_IMPORTED_MODULE_1__[\"workoutRoutineList\"].length + 1}`)\n            .replace('{{title}}', inputTitle);\n\n          const templateDom = new DOMParser().parseFromString(\n            replaceWorkoutRoutineTemplate,\n            'text/html',\n          ).body.firstChild;\n\n          targetWorkoutRoutineListContainer.prepend(templateDom);\n\n          // workoutRoutineList에 push\n          _dummyData_js__WEBPACK_IMPORTED_MODULE_1__[\"workoutRoutineList\"].push({\n            index: `${_dummyData_js__WEBPACK_IMPORTED_MODULE_1__[\"workoutRoutineList\"].length + 1}`,\n            title: inputTitle,\n            regDate: new Date(),\n            updateDate: '',\n          });\n          break;\n        case 'edit':\n          debugger;\n          // update workoutRoutineList\n          const updateWorkoutRoutineList = _dummyData_js__WEBPACK_IMPORTED_MODULE_1__[\"workoutRoutineList\"].map((v) => {\n            if (v.index === targetRegisterWorkoutRoutine.dataset.editIndex) {\n              var date = new Date();\n              v.title = inputTitle;\n              v.regDate = date++;\n            }\n            return v;\n          });\n          Object(_dummyData_js__WEBPACK_IMPORTED_MODULE_1__[\"setWorkoutRoutineList\"])(updateWorkoutRoutineList);\n\n          // title update 방법 1,2\n\n          // title update 방법 1: 업데이트한 dummydata로 운동 루틴 컨테이너 다 지고 다시 그리기\n          // update 새 운동 루틴 추가 컨테이너 with workoutRoutineList;\n          targetWorkoutRoutineListContainer.innerHTML = '';\n          const templateDomList = Object(_common_js__WEBPACK_IMPORTED_MODULE_0__[\"getWorkoutRountineListDom\"])(_dummyData_js__WEBPACK_IMPORTED_MODULE_1__[\"workoutRoutineList\"]);\n          Object(_common_js__WEBPACK_IMPORTED_MODULE_0__[\"appendWorkoutRountine\"])(templateDomList);\n\n          // title update 방법 2: 수정한 dom 접근 text 직접 update\n          // let i = 0;\n          // for (i; i < targetWorkoutRoutineListContainer.children.length; i++) {\n          //   if (\n          //     targetWorkoutRoutineListContainer.children[i].dataset.index ===\n          //     targetRegisterWorkoutRoutine.dataset.editIndex\n          //   ) {\n          //     targetWorkoutRoutineListContainer.children[\n          //       i\n          //     ].firstElementChild.textContent = inputTitle;\n          //   }\n          // }\n          break;\n\n        // default:\n        //   break;\n      }\n\n      // debugger;\n\n      // 초기화\n      e.target.value = '';\n\n      // [x]TODO 입력부 제거\n      // toogle 새 운동 루틴 추가\n      toggleRegisterWorkoutRoutineInput();\n    }\n\n    //[]TODO ESC 이벤트시 제거\n    if (e.which == 27) {\n      console.log('### ESC');\n      // Close my modal window\n    }\n  });\n\n// 새 운동 루틴 edit, delete\ndocument\n  .getElementById('targetWorkoutRoutineListContainer')\n  .addEventListener('click', (e) => {\n    console.log('### 운동 루틴 edit, delete');\n\n    switch (e.target.id) {\n      case 'edit':\n        console.log('### 운동 루틴 edit');\n        //[X]TODO 입력부 show\n        if (targetRegisterWorkoutRoutine.style.display !== 'block') {\n          toggleRegisterWorkoutRoutineInput('edit', e.target.dataset.index);\n        }\n\n        //[X]TODO 입력부 input에 클릭한 title 입력, 입력부로 focus 이동\n        const clickedRoutine = _dummyData_js__WEBPACK_IMPORTED_MODULE_1__[\"workoutRoutineList\"].filter(\n          (v) => v.index === e.target.dataset.index,\n        )[0];\n        targetRegisterWorkoutRoutineInput.value = clickedRoutine.title;\n        targetRegisterWorkoutRoutineInput.focus();\n        //[X]TODO 입력부에 포커스, enter로 수정모드 완료(운동 루틴 이름 변경)\n\n        //[]TODO ESC누르면 최소(입력부 제거)\n\n        break;\n      case 'delete':\n        console.log('### 운동 루틴 delete');\n        const result = confirm('삭제하시겠습니까?');\n        if (result) {\n          // dummyData에서 삭제할 것 제외한 데이터 다시 render\n          const willNotDeleteOne = _dummyData_js__WEBPACK_IMPORTED_MODULE_1__[\"workoutRoutineList\"].filter(\n            (v) => v.index !== e.target.dataset.index,\n          );\n          targetWorkoutRoutineListContainer.innerHTML = '';\n\n          const templateDomList = Object(_common_js__WEBPACK_IMPORTED_MODULE_0__[\"getWorkoutRountineListDom\"])(willNotDeleteOne);\n          Object(_common_js__WEBPACK_IMPORTED_MODULE_0__[\"appendWorkoutRountine\"])(templateDomList);\n          Object(_dummyData_js__WEBPACK_IMPORTED_MODULE_1__[\"setWorkoutRoutineList\"])(willNotDeleteOne);\n        }\n        break;\n\n      default:\n        break;\n    }\n  });\n\n// common function\n// 새 운동 루틴 추가 input box\n\nconst toggleRegisterWorkoutRoutineInput = (mode = '', index = '') => {\n  let display = '';\n\n  if (targetRegisterWorkoutRoutine.style.display === 'block') {\n    display = 'none';\n    mode = '';\n    targetRegisterWorkoutRoutineInput.value = '';\n  } else {\n    display = 'block';\n    mode = mode;\n\n    if (mode === 'edit') {\n      targetRegisterWorkoutRoutine.dataset.editIndex = index;\n    }\n  }\n  targetRegisterWorkoutRoutine.dataset.mode = mode;\n  targetRegisterWorkoutRoutine.style.display = display;\n};\n\n// const getWorkoutRountineListDom = (workoutRoutineList = []) => {\n//   const template = workoutRoutineList\n//     .map((v) =>\n//       workoutRoutineTemplate\n//         .replace(/\\{\\{index\\}\\}/g, v.index)\n//         .replace('{{title}}', v.title),\n//     )\n//     .join('');\n\n//   return new DOMParser().parseFromString(template, 'text/html').body.childNodes;\n// };\n// const appendWorkoutRountine = () => {};\n\n\n//# sourceURL=webpack:///./src/js/registWorkoutRoutine.js?");

/***/ })

/******/ });