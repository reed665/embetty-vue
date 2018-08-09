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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "06d5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "4e4b":
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 154.34 315.62\"><defs><style>.cls-1{fill:#735aa3;}.cls-2{fill:#b99bc9;}.cls-3{fill:#cc352b;}.cls-4{fill:#030304;}.cls-5{fill:#020204;}.cls-6{fill:#6ac4cb;}.cls-7{fill:#fff;}.cls-8{fill:#1a1a1a;}</style></defs><g id=\"Ebene_2\" data-name=\"Ebene 2\"><g id=\"Ebene_1-2\" data-name=\"Ebene 1\"><path class=\"cls-1\" d=\"M79.63,1.83c-5.3-3.6-11.4,4.2-9.4,9.2,0,.1.1.2.2.4-.3,1.7-.2,3.7,1.2,4.7v.1c.4,1.3.9,2.6,1.3,4a19.51,19.51,0,0,1-.2,7.6V28c-.3.4-.6.6-.7,1.1-.8,3,2.8,2.9,4.4,1.7a1.36,1.36,0,0,0-.2-2.2.1.1,0,0,1,.1-.1,5.82,5.82,0,0,0,.4-3.2c0-.6-.1-1.2-.1-1.7a1.46,1.46,0,0,0,.6-.9v-.3l.3-2.1.3-.3a5.29,5.29,0,0,0,1.5-3.2,1.38,1.38,0,0,0,1-1.3.9.9,0,0,0-.1-.5C82.83,11,83.83,4.73,79.63,1.83Z\"/><path class=\"cls-1\" d=\"M70.33,21.83a2.51,2.51,0,0,0-.4-.7,3.81,3.81,0,0,0-1.3-.9,1.33,1.33,0,0,0-.3-.8,26.87,26.87,0,0,0-4.5-3.7,8.28,8.28,0,0,0-4.4-1.9,1.25,1.25,0,0,0-1.3.8l-.3.3c-1.1.7-.9,2.3-.1,3.4a3.38,3.38,0,0,0,.6,1.2l.2.2a3.59,3.59,0,0,0,1,.7v.1a1.45,1.45,0,0,0,1.6.7c2.2.9,4.9.5,6.6,2.1a1.22,1.22,0,0,0,.9.4,1.1,1.1,0,0,0,1,.5A1.33,1.33,0,0,0,70.33,21.83Z\"/><path class=\"cls-1\" d=\"M83.63,19.43a2.6,2.6,0,0,0-3.2.6,3.53,3.53,0,0,0-.4,3.7c.1.1.1.2.2.3a2.46,2.46,0,0,0-.1,1.7c-.2,1.3,1.5,2.7,2.5,1.4.6-.8,1.2-1.5,1.9-2.3a1.06,1.06,0,0,0,0-1.4,3.55,3.55,0,0,0,.4-.9A3.06,3.06,0,0,0,83.63,19.43Z\"/><path class=\"cls-1\" d=\"M113.83,248.93c-1.5-.4-3.4.1-4.9,0a33.94,33.94,0,0,1-5.5-.4,37.35,37.35,0,0,1-7.3-1.9,5.3,5.3,0,0,0-3.4-1.7c-2.9-1.4-5.8-2.9-8.7-4.3-.1-.1-.2-.2-.3-.2a77.88,77.88,0,0,1-11-8.9c-2.3-2.3-4.3-4.7-6.5-7.1a7.64,7.64,0,0,0-.9-.9c-.4-.4-.7-.8-1.1-1.2a1.19,1.19,0,0,0-1.1-.4c-.2-.4-.5-.8-.7-1.2a30,30,0,0,0-3.3-5.4,16.31,16.31,0,0,1-.6-4.5,3.26,3.26,0,0,0-1.6-3,23.56,23.56,0,0,1,7.8-5.5,6.21,6.21,0,0,0,3.7,3,.37.37,0,0,1,.3.1l1.5,2.5a1.45,1.45,0,0,0,.1,1.1,5.94,5.94,0,0,0,.4.8.6.6,0,0,0,.1.4,7.76,7.76,0,0,0,1.2,2.2,23.49,23.49,0,0,0,2.3,3.2,50.2,50.2,0,0,0,6.6,10.3,24.16,24.16,0,0,0,2.7,3.6,3.81,3.81,0,0,0,.9,1.3,34.4,34.4,0,0,0,3.6,2.8,1.2,1.2,0,0,0,.4,1.2l1.2,1.2a1.08,1.08,0,0,0,.7.3,43.71,43.71,0,0,0,7.6,4.3,3.55,3.55,0,0,0,.9.4,39.86,39.86,0,0,0,12.4,2.7,1.25,1.25,0,0,0,1.1-.4h.7a3.45,3.45,0,0,0,1.8-.5,4.18,4.18,0,0,0,2.3-1.8c5.3-8.5,1.9-17.9-1.8-26.2a3.13,3.13,0,0,0-1.7-1.7,1.27,1.27,0,0,0,.1-.6l1.2-10.2a2.67,2.67,0,0,0-.3-1.8,26.36,26.36,0,0,0,.1-9.3c-1.1-7-3.8-15.4-8-21.3-3.9-5.5-10.6-9.5-16.6-12.2a28.18,28.18,0,0,0-13.4-2.3,4.23,4.23,0,0,0-2.7-.7c-2.3.4-4.5,1.1-6.7,1.7a3.54,3.54,0,0,0-2.4,2,24.08,24.08,0,0,0-3.3,1.5,32.9,32.9,0,0,0-17.8,14.6,35.39,35.39,0,0,0-9.3,27.3,8.74,8.74,0,0,0-.8,1c-2,3.3.7,7,4,7.1a17.89,17.89,0,0,0-.3,8.3,2.37,2.37,0,0,0,.9,1.5c-.4,4,1.7,8.8,4.8,11.7a3,3,0,0,0,.4,2.1,3.74,3.74,0,0,0,1.5,1.3,2.8,2.8,0,0,0,2,.2l.7-.3a2,2,0,0,0,.7-.6h.8c-.1.2-.1.4-.2.6a35.54,35.54,0,0,1-20.7,25.1,4.13,4.13,0,0,0-1.1.7q-4.35,1.2-8.7,2.1c-3.1.6-6.2.7-9.1,1.9l.1.1c-2,1.2-2.4,4.5.6,5.2,6,1.6,14.2-1,20.1-2.7q2.7-.75,5.4-1.8c3.2,1.5,6.6-.6,9.3-2.7a13.57,13.57,0,0,0,11.9-6.7.35.35,0,0,1,.1-.2c2.6-.6,5-2.1,5.9-4.8a5.76,5.76,0,0,0,.2-2.6c2.1,1.6,4,3.6,6.6,4.3a8.13,8.13,0,0,0,3,2.1,6.23,6.23,0,0,0-3.6,2c-2.1,2.4-2.6,5.9-2.6,9.3a3.45,3.45,0,0,0-2,3.2,5.84,5.84,0,0,0,.4,1.8c0,.2-.1.4-.1.6-1.2,13.1,6,26,18.3,31a2.34,2.34,0,0,0,1.1.2,5.32,5.32,0,0,0,5.1,2,16.35,16.35,0,0,0,10-.6,3.67,3.67,0,0,0,1.9-1.5c.7-.1,1.4-.3,2-.4,4.6-1.2,2.7-8.4-2-7.2a17.54,17.54,0,0,1-9.1-.1,4.3,4.3,0,0,0-.9-1c-3.6-3.5-7.1-5.7-8.4-10.9-1.4-5.4.4-9.9,2.9-14.6v-.1c.2-.2.4-.3.6-.5a3,3,0,0,0,1.1-3c1.8,1.3,3.6,2.5,5.4,3.8l.1.1a3.3,3.3,0,0,0-2.2,1.7,14.09,14.09,0,0,0-1.4,8.6c-.1.2-.1.5-.2.7a10.25,10.25,0,0,0,7,11c5,1.6,8.4-1.4,13-2.5a3.4,3.4,0,0,0,2.5-2.9c1.6-1,1.2-4.1-1.2-4.1-.3,0-.6.1-.8.1a3.34,3.34,0,0,0-1.5-.3,11.75,11.75,0,0,0-3.8.9,4.13,4.13,0,0,0-1.1-.7,6.47,6.47,0,0,0-1.3-.4s-.6-.2-.8-.3a1.42,1.42,0,0,0-.4-.2c-.2-.1-.4-.3-.6-.4a4,4,0,0,1-.4-.3l-.3-.3-.7-.7a8.34,8.34,0,0,0-1.2-.8,2.75,2.75,0,0,0-.8-1.5,16.66,16.66,0,0,1,.6-2.9,3.92,3.92,0,0,0,1.4.8,3.23,3.23,0,0,0,2.7-.4,14.7,14.7,0,0,0,1.3-1l.2-.2a15.09,15.09,0,0,0,7-2.7c3.7-2.5,7.7-7.8,6.5-12.5C117.93,254.43,117.93,250.13,113.83,248.93Zm-63.6-58.7a23.16,23.16,0,0,0-5.8,4.5l.9-2.7a35.82,35.82,0,0,1,2.4-4.8l.3-.3c1.3-1.4,2.6-2.8,3.9-4.3.1,0,.2-.1.3-.1a101,101,0,0,0,11.5-7.8c1.4-.5,2.7-1,4.1-1.4a1.42,1.42,0,0,0,.6.2,43.82,43.82,0,0,0,9.5-1c2.1.2,4.3.3,6.4.4,1.8.7,3.6,1.5,5.5,2.3a1.56,1.56,0,0,0,.6.8c.8.5,1.6,1.1,2.4,1.6a3.09,3.09,0,0,0,1.6,1.1,5.74,5.74,0,0,0,1.6,4.1,4.51,4.51,0,0,0,1.4,1,75,75,0,0,1,.3,8,16.27,16.27,0,0,0-1.1,2.3,13.36,13.36,0,0,1-2.1,2,24.69,24.69,0,0,0-1-2.9,1.4,1.4,0,0,0,.5-1.9c-.1-.3-.3-.5-.4-.8a.92.92,0,0,0-.2-1,23.07,23.07,0,0,1-1.4-1.9,1.22,1.22,0,0,0-1-.6c-.2-.3-.5-.6-.7-.9a1.2,1.2,0,0,0-1.4-.3c-5.5-6.5-15.7-6.7-23.7-4.8C59.13,182.13,53.53,185.33,50.23,190.23Z\"/><path class=\"cls-1\" d=\"M58.53,264.93a1.4,1.4,0,0,0-1.2-1.4,1.27,1.27,0,0,0-1.8.1,8.52,8.52,0,0,0-1.7,2.5c-.3.3-.7.6-1,.9a5.7,5.7,0,0,0-1.3.1c-1.1.3-2.2.7-3.3,1a3.66,3.66,0,0,0-1.6,1c-1.3.4-2.7.7-4,1.1a.76.76,0,0,0-.4.2c-1.8-.2-3.6.3-4.4,2.2a1.88,1.88,0,0,0-.2.8,15.47,15.47,0,0,0-3.8,9.5,2.77,2.77,0,0,0,.1.9,24.45,24.45,0,0,0-1.2,5.5c-.4,2.4-.5,5.1-.8,7.7-2.4,3.5-3.4,7.8-4.8,11.8-1.1,3.5,3.8,6.4,6.2,3.6a24.57,24.57,0,0,0,5.4-12.1l.2-.2a3.34,3.34,0,0,0,.8-3.7,3.11,3.11,0,0,0,1.7-2.1c2.4-6.9,5-12.6,10.8-17.4a3.83,3.83,0,0,0,2.9-2.6l.9-2.5a3,3,0,0,0-.1-2.3l.3-1.8a6.11,6.11,0,0,1,.7-1.4A1.48,1.48,0,0,0,58.53,264.93Z\"/><path class=\"cls-2\" d=\"M97.13,188a2,2,0,0,0,.2-.9l-.2-3a1.49,1.49,0,0,0-1.7-1.4v-.2c-.3-1.1-.5-2.2-.8-3.3a1.33,1.33,0,0,0-1.8-1,14,14,0,0,0-2.7-2.1,1,1,0,0,0-.9-.1h0a1.37,1.37,0,0,0-1.3-.4,1.38,1.38,0,0,0-.4-.3c-.8-1.5-3.1-2-5-1.9-.1,0-.2-.1-.4-.1a1.38,1.38,0,0,0-1.5.5,1.48,1.48,0,0,0-1.8-1.3c-.9.2-1.8.3-2.8.5l-6.1,1.2a22.1,22.1,0,0,0-4.9.9,1.24,1.24,0,0,0-.8.6,1.41,1.41,0,0,0-.9-.1l-1.8.6a.6.6,0,0,0-.4.1c-.3.1-.7.3-1,.4a1.38,1.38,0,0,0-1,1.4.76.76,0,0,0-.4.2c-2.6,2-5.1,4.1-7.7,6.2-1.2,1,.4,3.1,1.7,2.2a60,60,0,0,1,13.5-7.6,1.25,1.25,0,0,0,1.2.3c1-.2,1.9-.4,2.9-.7,1.2-.2,2.4-.4,3.7-.5h6a1.38,1.38,0,0,0,.4.3,11.08,11.08,0,0,0,3.5,1.2h0l5.3,3.8a1.32,1.32,0,0,0,1.2.2c.3,1.8,1.2,3.5,3.3,3.5.2,0,.3,0,.4-.1-.1.8-.1,1.6-.2,2.4a1.27,1.27,0,0,0,.1.6,1.63,1.63,0,0,0,2.6,1.3,3,3,0,0,0,1.2-1.9A3.49,3.49,0,0,0,97.13,188Z\"/><path class=\"cls-2\" d=\"M111.43,243.93c-5.4,3-11.4.2-16.4-2.3a69.32,69.32,0,0,1-7.5-4.3.91.91,0,0,0-.4-.8l-1.5-1.5a1.28,1.28,0,0,0-.4-1c-1.1-1-2.2-2-3.2-3-.5-.6-.9-1.2-1.4-1.8,0-.1-.1-.2-.1-.3-.3-.5-.7-1.1-1-1.6a1.26,1.26,0,0,0-1-.7l-.4-.4a1.58,1.58,0,0,0-1.2-.5,9.29,9.29,0,0,1-.5-1,1.42,1.42,0,0,0-.2-.6c-1.1-2.1-2.3-4.1-3.4-6.2-.3-.5-.6-.7-1-.7-.5-1-1-1.9-1.5-2.9a1.64,1.64,0,0,0,.1-1,12.17,12.17,0,0,0-2.6-5.2,3,3,0,0,0-1.5-1.8,2.45,2.45,0,0,0-3.8-.6,4.62,4.62,0,0,0-.7.7c-1.2.1-2.8.8-3.1,2.3-1.7.9-2,3.4.1,4.8a3,3,0,0,0,.8.4,10.46,10.46,0,0,0,1.3,2.3,1.42,1.42,0,0,0,.2.6l3,4.2a1.87,1.87,0,0,0,.7.6,1.62,1.62,0,0,0,.4,1l3.7,4.6a1.44,1.44,0,0,0,1.5.4l.1.1a.86.86,0,0,0,.3.6c.8,1.1,1.7,2.2,2.5,3.3a1.41,1.41,0,0,0,1.4.6c.4.5.8,1.1,1.2,1.6a1.25,1.25,0,0,0,1.3.4,51.09,51.09,0,0,0,7.5,5.4,1.45,1.45,0,0,0,1.1.1,73.2,73.2,0,0,0,11.3,6.2c5.2,2.2,10.6,3.5,15.8.6C114.63,245.63,113.13,243,111.43,243.93Z\"/><path class=\"cls-2\" d=\"M95.63,291.53a13.85,13.85,0,0,1-7.2-7.3,1.28,1.28,0,0,0,.4-1c-.2-1.5-.4-3.1-.6-4.6a12.4,12.4,0,0,0,1.1-3.7,2.92,2.92,0,0,0-.6-2.1c.1-.2.1-.3.2-.5a1.47,1.47,0,0,0,.5-.6c.1-.4.3-.7.4-1.1.6-1.6-1.8-2.4-2.6-1.1a14.59,14.59,0,0,0-1.6,3,8.18,8.18,0,0,0-2.7,4c-2.6,8.5,4.3,15.2,11.6,17.9C96,294.83,97.13,292.23,95.63,291.53Z\"/><path class=\"cls-2\" d=\"M90.93,305.43a21.79,21.79,0,0,1-14.7-4.5,1.22,1.22,0,0,0-1.4-.1l-2.1-1.8c-2.9-5.2-5.9-10.3-8.8-15.5a2.2,2.2,0,0,0-.1-.8,25.33,25.33,0,0,1-1.2-3.6,2,2,0,0,0,.5-1.4c-.2-1.6-.5-3.2-.7-4.9.3-2.3.7-4.6,1-6.9v-.6c.8-1.7,1.7-3.3,2.5-5a1.15,1.15,0,0,0,.1-1,3,3,0,0,0,.8-1.7l.1-.1a1.27,1.27,0,0,0,.9-.7l.3-.3a1.46,1.46,0,0,0,.5-2,8.79,8.79,0,0,1-.6-1,1.62,1.62,0,0,0-1.4-.7h0a1.06,1.06,0,0,0-1.2-.1.78.78,0,0,0-.4-.4,2.12,2.12,0,0,0-2.2-1.5c-2.2,0-2.8,1.9-2.5,3.7a15.63,15.63,0,0,0-4.2,3.2c-.4.4-.9.8-1.3,1.2a90,90,0,0,1-25.6,9.1c-1.7.3-1.2,2.9.4,2.9a40.33,40.33,0,0,0,14.6-2.4,1.38,1.38,0,0,0,1.1.1,65.89,65.89,0,0,0,14.4-7.6c-.6,1.1-1.1,2.2-1.7,3.3a1.31,1.31,0,0,0,.3,1.8,26.47,26.47,0,0,0-2,4.7,46.57,46.57,0,0,0-.9,7.5c-.1.1-.3.2-.4.3l-.3.3a1.4,1.4,0,0,0-1.9.1,51.2,51.2,0,0,0-8.1,11q-1.65,1.35-3.3,3a1.49,1.49,0,0,0,2.1,2.1c.7-.7,1.5-1.3,2.2-2a1.42,1.42,0,0,0,.6-.2c.5-.3,1.1-.6,1.6-.9a1.34,1.34,0,0,0,.6-.7,23,23,0,0,0,7.8-5.1.1.1,0,0,0,.1.1c.9,1.3,1.8,2.7,2.7,4a1.48,1.48,0,0,0,0,1.3,31.13,31.13,0,0,0,31.8,16.5A1.35,1.35,0,1,0,90.93,305.43Z\"/><path class=\"cls-3\" d=\"M84.83,144.13a5.5,5.5,0,0,0-.7-.9,2.15,2.15,0,0,0-3.1-2.6c-.1.1-.2.1-.3.2a.9.9,0,0,0-.5-.1,3.3,3.3,0,0,0-2.2.2c-1.6.3-3.3,1-3.3,2.9-.1,2.2,2,3.3,3.9,3.4h.1a3.53,3.53,0,0,0,1.4-.3,7.62,7.62,0,0,0,3.3.2A2,2,0,0,0,84.83,144.13Z\"/><path class=\"cls-1\" d=\"M147.33,134.23c-8.5,23.8-21,35.4-35.5,42.7,0,0-10-22.4-34.2-23-25.9-.6-38.2,23-38.2,23-13.1-7.7-25.5-21.5-33-42.7-14.1-39.7,3.1-101.8,70.1-101.8C146.43,32.43,162.53,91.53,147.33,134.23Z\"/><path class=\"cls-4\" d=\"M40,179.33l-1.6-.9c-10.6-6.2-25-18.9-33.8-43.6a86.51,86.51,0,0,1-4.1-37.7A78.79,78.79,0,0,1,14.13,60c9.4-13.4,27.9-29.3,62.3-29.3,36.6,0,55.5,15.9,64.8,29.2,14.1,20,17.1,48.7,7.7,75-7.6,21.4-18.8,34.9-36.4,43.7l-1.6.8-.7-1.7c-.1-.2-9.9-21.4-32.7-22-24.5-.6-36.5,21.8-36.7,22.1Zm36.6-27.1h1c21.1.5,32,17.1,34.9,22.4,15.8-8.4,26.1-21.1,33.1-41l1.6.6-1.6-.6c9-25.2,6.2-52.7-7.3-71.8-12.8-18.1-34.2-27.7-62-27.7-32.9,0-50.5,15.1-59.4,27.9a76.77,76.77,0,0,0-13,35.5,84.22,84.22,0,0,0,4,36.2c8,22.6,20.9,34.7,30.8,40.9a53,53,0,0,1,8.9-10.6A41.88,41.88,0,0,1,76.63,152.23Z\"/><path class=\"cls-4\" d=\"M120.23,220.93a25.81,25.81,0,0,0-1.8-4.6,14.85,14.85,0,0,0-2.7-4.3c2.4-7.7,2.9-18.8,1.1-26.5-2.6-11.6-8-19.3-20.3-27.1-9.9-6.2-22.7-6.4-33.4-2.4-10,3.7-20.1,10.7-25.7,19.8-3,5-4.3,10.7-5.3,16.5s-.9,13.1,3,18.1a32.53,32.53,0,0,0-.3,4.4c0,8.1,3.5,17.2,10.7,21.5a.37.37,0,0,0,.3.1l-.9,3.6a22.82,22.82,0,0,1-6.7,10.3c-6.9,6.4-16.3,8.8-25.2,10.7-3.2.7-7.8,2.4-6.5,6.6s6.3,4.3,9.9,4.1l3.5-.3a81.51,81.51,0,0,0,11,.4c1.8,0,3.6-.2,5.5-.3-4.6,3.6-5.5,10.8-5.8,16.2-.2,3.8-.2,7.6-1.3,11.3-1,3.5-4.1,6.2-4.7,9.8a5.73,5.73,0,0,0,4.5,6.6c3.3.8,6.3-1,8.2-3.6a14.42,14.42,0,0,0,2.3-5.8l.2-.2c0-.1.1-.2.1-.3.3-1,.7-2.1,1-3.1.4-1.3,1-2.6,1.5-3.8a6.11,6.11,0,0,1,1.3-2.2v-.1a9.79,9.79,0,0,1,3.1-2.6c3.2-1.8,7.1-2.6,9.7-5.1l.9,2.4a31.33,31.33,0,0,0,22,18,32.16,32.16,0,0,0,8.2.8,25.36,25.36,0,0,0,2.9-.4,14.7,14.7,0,0,0,6-2.3V307a17.64,17.64,0,0,0,7.3-3.5c1.6-1.3,3.3-3,3.8-5.1a4.4,4.4,0,0,0-2.6-5.1,5,5,0,0,0-1.3-.4l1.5-.6c3.4-1.4,7.7-3.9,9.6-7.2a4,4,0,0,0-.6-5,5,5,0,0,0-5-.5c-2,.6-3.9,1.1-6,.4a7.61,7.61,0,0,1-2.8-1.5,5.82,5.82,0,0,1-1-1.1.71.71,0,0,1-.3-.6v-.1h0a1.94,1.94,0,0,1,1.7-1l2.5-.3a.1.1,0,0,1,.1-.1,20.57,20.57,0,0,0,14.2-12.1c1.6-3.8,2.4-10.4.1-14.5v-.2a1,1,0,0,1-.4-.5h0l-.1-.1c-.1-.1-.2-.1-.3-.3v-.1h-.1a1.79,1.79,0,0,1-.7-.5,2.94,2.94,0,0,1-1-.3h0a5.7,5.7,0,0,0-1.3.1,1.27,1.27,0,0,0-.6.1,2.19,2.19,0,0,0,.5-.3,35.53,35.53,0,0,0,3.1-2.3,17.39,17.39,0,0,1,1.1-1.8,9,9,0,0,0,1.2-2.4v-.3a1.33,1.33,0,0,1,.3-.5.35.35,0,0,1,.1-.2h-.1a23.45,23.45,0,0,0,1.7-8A27.05,27.05,0,0,0,120.23,220.93Zm-84.6-27.3a44.86,44.86,0,0,1,4.7-13.6,45.56,45.56,0,0,1,20.2-19.6c9.4-4.6,21.2-5.7,30.9-1.3,10,4.5,17.2,14.2,20.4,24.4,1.8,5.9,2.2,12.2,2.2,18.4,0,5.3-1,10.7-4,15.1a33.38,33.38,0,0,1-4.3-1,14.07,14.07,0,0,1-4.9-3.1,15.2,15.2,0,0,1-4.4-8.6.75.75,0,0,0-.1-.5,1.7,1.7,0,0,0-.1-.7l.3-.6a18,18,0,0,0,.3-8.3,13.24,13.24,0,0,0-.1-12.8c-2.3-4.2-6.5-7-11-8.4-7.6-2.4-16.2-1.4-23.5,2a1.39,1.39,0,0,0-1,.5,32.34,32.34,0,0,0-4.4,2.7c-4.9,3.5-8.7,8.3-12.2,13.1a.66.66,0,0,0-.1.6,35.81,35.81,0,0,0-8.4,14.6C34.63,202.33,34.93,197.83,35.63,193.63Zm48.6-17.9a2.56,2.56,0,0,0-3,.2,2,2,0,0,0-.6,2.3,30.9,30.9,0,0,0-15.1.4,1.9,1.9,0,0,0,.8-2.2,2.62,2.62,0,0,0-.5-.9,32.8,32.8,0,0,1,8.8-1.8c5.8-.4,12.2.6,16.9,4.4a6.47,6.47,0,0,1,.9.8c-.2.1-.4.1-.5.2a2.39,2.39,0,0,0-1,2.9,2.5,2.5,0,0,0,2.6,1.7,2.94,2.94,0,0,0,1.8-1,11.48,11.48,0,0,1,.9,8.7,20.75,20.75,0,0,0-7.5-9.6,33.54,33.54,0,0,0-3.6-2.1A2.93,2.93,0,0,0,84.23,175.73Zm-1.9,2.1c-.4-.7.8-.7,1.2-.4.5.5.1,1.2-.5,1.4h-.1a1.45,1.45,0,0,0-.7-.2A.75.75,0,0,0,82.33,177.83Zm11.6,2.8c0,.1.1.1.1.2a.37.37,0,0,0-.1.3c-.1.4-.2.7-.7.8-.3.1-.6-.2-.7-.5C92.23,180.43,93.33,180.53,93.93,180.63Zm-31.1-3.4-.3-.3c.1-.1.3-.1.4-.2a.87.87,0,0,0,1,.1c.2-.1.7-.2.7.2s-.4.4-.6.4A4.3,4.3,0,0,1,62.83,177.23Zm.8,2a45,45,0,0,0-12.4,6.6,39.35,39.35,0,0,1,7.4-6.7c.7-.5,1.5-.9,2.3-1.4A3,3,0,0,0,63.63,179.23ZM38,217.33c-.7-7,1.6-13.8,5.6-19.6,8.2-11.7,25-21.4,39.3-15.7,7.6,3.1,13,11.3,10.7,19.5a26.13,26.13,0,0,0-14.3-3.1,45.22,45.22,0,0,0-12.1,2.2c-5.3,1.9-10,4.7-12.2,7.1a26.86,26.86,0,0,0-7,18.5,27.23,27.23,0,0,0,.4,4.2,10.36,10.36,0,0,0-1.7,3.3A23.66,23.66,0,0,1,38,217.33Zm34.7,4.1a2.52,2.52,0,0,0-1.4,3c.6,2.3,4.1,3.1,5.7,1.3a59.2,59.2,0,0,0,6.8,8.2,25.23,25.23,0,0,0,3,2.7,2,2,0,0,0-1.1,1.1,2.39,2.39,0,0,0,.4,2h0a52.07,52.07,0,0,1-5.5-3.6,2.79,2.79,0,0,0,1.3-2.2,2.59,2.59,0,0,0-2.1-2.7,2.76,2.76,0,0,0-3,1.2,1.42,1.42,0,0,0-.2.6,70.79,70.79,0,0,1-10.5-10.7,3.1,3.1,0,0,0,2.4-1,3,3,0,0,0,.2-3.8,2.8,2.8,0,0,0-3.7-.6,2.73,2.73,0,0,0-1.2,2.4c-2.5-3.4-4.9-7.4-4.6-11.4.1,0,.1-.1.2-.1,1.1-.8,3.5-2.7,5.4-3-2.7,1.5-2.7,3.5-2.3,4.7a3.11,3.11,0,0,0,2.6,2.3,4.66,4.66,0,0,0,3.4-1.1,104.22,104.22,0,0,0,5.4,9.9,2.09,2.09,0,0,0,.4.6A6.27,6.27,0,0,0,72.73,221.43Zm1.6,2.1a.75.75,0,0,0,1-.2c.2.3.4.7.6,1l-.1.1a1.67,1.67,0,0,1-2.5,0c-.2-.3-.4-.8-.1-1.1S74,223.33,74.33,223.53Zm4.8,11.3c-.2,0-.3.1-.4.1a1.38,1.38,0,0,0-.4-.3c-.2-.7,0-1.6.9-1.5A.85.85,0,0,1,79.13,234.83Zm-13.3-14.3c-.2-.6-.5-1.4.1-1.8a1,1,0,0,1,1.3.2C67.83,220,66.73,220.73,65.83,220.53Zm.5-14.3s1,2.4,1.3,2.9c-1,.7-2.6,1.8-3.4.2A2.16,2.16,0,0,1,66.33,206.23Zm-46.5,62.2c-1.9.2-3.8.3-5.6.4-1.3,0-5.7-.3-4.6-2.7.5-1.2,2.6-1.5,3.7-1.7,2.2-.5,4.5-.9,6.7-1.5,7.5-1.9,14.9-4.9,20.6-10.3a25.79,25.79,0,0,0,6.6-9.7c1-2.6,1.2-5.6,2.2-8.2,2.1,5.7,6.1,10.4,10.9,14.5a15.08,15.08,0,0,1-5.7,6.8,58.78,58.78,0,0,1-10.4,5.8A81.71,81.71,0,0,1,19.83,268.43Zm32.1-6.9c0,.1-.1.1-.1.2a1.56,1.56,0,0,1-.6,1.2c-.3.2-.8.3-1,0a.45.45,0,0,1,0-.5,10.91,10.91,0,0,0,1.1-.6c.1,0,.1-.1.2-.1a.1.1,0,0,0,.1-.1C51.83,261.63,51.83,261.63,51.93,261.53Zm-10.6,4.9a1.15,1.15,0,0,1-.8,1,1.38,1.38,0,0,1-1.1.1.68.68,0,0,1-.5-.3A22.5,22.5,0,0,0,41.33,266.43Zm-11,3.7h-1.4a64.55,64.55,0,0,0,8.6-2.4.76.76,0,0,0,.2.4,2.73,2.73,0,0,0,2.7.8,2.92,2.92,0,0,0,2.2-1.8,2.44,2.44,0,0,0,0-1.2,5.36,5.36,0,0,0,1.1-.5c1.6-.7,3.3-1.4,5.1-2.3a2.62,2.62,0,0,0,.5.9,2.29,2.29,0,0,0,2.5.3,2.85,2.85,0,0,0,1.4-2.5.66.66,0,0,0-.6-.7c4.3-2.5,8.3-5.7,10.1-9.9,1,.8,2,1.6,3,2.3-.6.9-1.3,1.8-2,2.7a1.83,1.83,0,0,0-2.4-.5c-1,.4-2.1,1.3-1.8,2.5a1.38,1.38,0,0,0,1.3,1.1,38.75,38.75,0,0,1-15.5,8.6A52.82,52.82,0,0,1,30.33,270.13Zm30.5-6.4h0a2.15,2.15,0,0,0-.8,0c-.1,0-.2.1-.3.1.1-.2.2-.5.3-.7a1.91,1.91,0,0,1,.5-1h0a34.5,34.5,0,0,0,6.8-7.5l1.2.9a27.43,27.43,0,0,0-5.3,9.8l-.3-.3c0-.1-.1-.2-.1-.3A1.87,1.87,0,0,0,60.83,263.73Zm2.1,2.9a4.33,4.33,0,0,1-.1.5h-.1v.1a1.88,1.88,0,0,1-.4.9h-.4a1.08,1.08,0,0,1-.9-.2c-.2-.1-.4-.1-.6-.3s-.4-.3-.4-.6a.94.94,0,0,1,1.4-1h0a3.7,3.7,0,0,1,1.1.5C62.63,266.63,62.83,266.73,62.93,266.63Zm-1.6-9.2a1.62,1.62,0,0,1,.9-.5c.2-.1.5-.2.5.1s-.8.5-1.1.5a.7.7,0,0,0-.5.4C61,257.73,61.23,257.53,61.33,257.43Zm-11.7,32.7-.3.3h-.1a.84.84,0,0,1-.7.4h0a4.87,4.87,0,0,1-.7.3l-.1-.1a1.2,1.2,0,0,1-.8-.2.37.37,0,0,1-.2-.5v-.1c-.1-.2-.1-.4.1-.5v-.1a1.5,1.5,0,0,1,1.8-.8q.6-.15.9.6C49.93,289.73,49.83,290,49.63,290.13Zm2-.4v-.4a2.6,2.6,0,0,0-3-1.8,3.37,3.37,0,0,0-2.7,2.3,2.47,2.47,0,0,0,.5,2.2,7.46,7.46,0,0,0-1.2.7,11.31,11.31,0,0,0-2.6,2.3c.6-1.4,1.2-2.7,1.9-4a41.23,41.23,0,0,1,5.2-7.2,3,3,0,0,0,2.8,1.2,2.65,2.65,0,0,0,2.2-2.3,2.14,2.14,0,0,0-1.6-2.2c.6-.5,1.2-1,1.7-1.5a39.71,39.71,0,0,0,1.1,7.7A13.29,13.29,0,0,1,51.63,289.73Zm-.5-7.3a.55.55,0,0,1,.3-.5.37.37,0,0,1,.3-.1l.1-.1h0a1,1,0,0,1,.9.2,1.38,1.38,0,0,1,.3.4v.1a.91.91,0,0,1,0,1,1.09,1.09,0,0,1-.9.4c-.1,0-.2-.1-.3-.1s-.3-.1-.4-.1A1,1,0,0,1,51.13,282.43Zm4.3-10.7h0v.2c0,.1,0,.1-.1.2a.37.37,0,0,1-.1.3c-.1.6-.3,1.1-.4,1.7a21.4,21.4,0,0,1-4.2,4.3,42.58,42.58,0,0,0-6.4,7,43,43,0,0,0-7.4,17.8c-.5,2.9-1.2,6.5-3.8,8.4-2.2,1.6-6.2.7-5.3-2.6.4-1.5,1.5-2.8,2.3-4.2a19.68,19.68,0,0,0,2.1-4.4,36.83,36.83,0,0,0,1.4-9.4c.2-3.5.2-7,1.2-10.4a15.84,15.84,0,0,1,1.9-4.4,7.54,7.54,0,0,1,.6-1.3,10,10,0,0,1,.8-1.4l.1-.1a4,4,0,0,1,1.3-1.6.76.76,0,0,1,.2-.4,1.13,1.13,0,0,1,.8-.5h.2q3.15-.6,6.3-1.5a43.81,43.81,0,0,0,11.3-5.5A25.2,25.2,0,0,0,55.43,271.73Zm12.1,29.2c0-.8.5-1.1,1.2-1.2a.64.64,0,0,1,.6,0c.7.1,1.5.7,1.4,1.5C70.73,303,67.53,302.53,67.53,300.93Zm3.1,2.5a1.76,1.76,0,0,0,.9-.8,2.9,2.9,0,1,0-5.2-2.5,28.91,28.91,0,0,1-8.1-12.8,2.11,2.11,0,0,1-.4-1v-.1c-.1-.1-.1-.2-.1-.4s-.1-.3-.1-.5-.1-.1-.1-.2,0-.1-.1-.2v-.3h0A20.24,20.24,0,0,1,57,282a2.87,2.87,0,0,0,2.7-.2,3,3,0,0,0,1.3-3.6,2.85,2.85,0,0,0-3.2-1.8,4.88,4.88,0,0,0-.7.3v-3.3c.1-.3.1-.6.2-.9h0v-.1a4.25,4.25,0,0,1,.2-1.1,1.69,1.69,0,0,1,.3-1h-.1c.2-.8.5-1.6.7-2.5a3.86,3.86,0,0,0,1.6,1.5,3.1,3.1,0,0,0,1.3.6,2.48,2.48,0,0,0,.9-.1,29.59,29.59,0,0,0,.5,10.7,30.3,30.3,0,0,0,2.2,6.4h-.1c.1.2.3.5.4.7l.6,1.2h0c.1.1.1.3.2.4-.1,0-.1,0-.2.1a1.39,1.39,0,0,1-1.3,1.6c-.8.1-1.8-.6-1.6-1.5v-.1a1.17,1.17,0,0,0-.9-1.1.76.76,0,0,0-.5.2,2.77,2.77,0,0,0,0,1.8c.9,2.5,4,2.4,5.5.5a35.7,35.7,0,0,0,12.2,12.8,23.41,23.41,0,0,0,12.2,3.6A28.12,28.12,0,0,1,70.63,303.43Zm-13.8-24.1a1.28,1.28,0,0,1,1.1-1.2h.4a1.85,1.85,0,0,1,1.2.5,1.2,1.2,0,0,1-.2,1.8,1.4,1.4,0,0,1-1.8.3C57.13,280.63,56.83,279.93,56.83,279.33Zm47.3,17.3c1,1.1-.3,2.5-1.1,3.3a13.94,13.94,0,0,1-4.8,3.2,18.3,18.3,0,0,1-12,.5c-8.5-2.5-14.9-10.2-18.4-18a28.06,28.06,0,0,1,3.1-28.6c.7.5,1.5,1,2.2,1.5l12.7,8.9a17,17,0,0,0-4.4,19,16.18,16.18,0,0,0,8,8.1,16.85,16.85,0,0,0,5.4,1.6c2.2.3,4.3-.2,6.5-.4A4.68,4.68,0,0,1,104.13,296.63Zm-17.6-22.7c.4.2.4.7.2,1.1a1.37,1.37,0,0,1-1.3.6,1,1,0,0,0,0,1.9,4.39,4.39,0,0,0,2.2-.7,30.85,30.85,0,0,0,0,4.3,1.88,1.88,0,0,0-.8-.2,2,2,0,0,0-2,1.5,2.52,2.52,0,0,0,1,2.5,2.75,2.75,0,0,0,2.5.2c.6,2.5,4.2,5.8,7,7.3-6.6,1.4-11.5-6.2-11.8-10.9a14.69,14.69,0,0,1,1.3-7.2A1.42,1.42,0,0,1,86.53,273.93ZM86,272a11.85,11.85,0,0,1,2.5-2.5c.3.2.5.4.8.6-.4,1-.8,2-1.1,3A2.42,2.42,0,0,0,86,272Zm1.3,11.8c-.1.1-.2.2-.3.2a.6.6,0,0,1-.4.1h-.1a1.33,1.33,0,0,1-.8-.3.44.44,0,0,1-.1-.5v-.1c0-.1,0-.2.1-.2s.1-.1.1-.2v-.1c0-.1.1-.1.1-.2a.62.62,0,0,1,.8-.1l.3.3a.76.76,0,0,1,.2.5v.1h0C87.43,283.43,87.53,283.63,87.33,283.83Zm22.5-1c.7-.2,2.5-.9,2.5.3,0,.9-1.4,1.9-1.9,2.4a26.32,26.32,0,0,1-5.2,3.5c-3.9,1.9-8.1,2.1-10.8.6-6.2-3.5-5.9-11.8-3.5-18.4l5.7,4.1a3.25,3.25,0,0,0-.4,1.4,5.66,5.66,0,0,0,2.5,4.5A11.89,11.89,0,0,0,109.83,282.83Zm3.8-34c2,1.1,2.5,4,2.6,6.1a17,17,0,0,1-2,8.6,17.85,17.85,0,0,1-13.9,9.3,1.27,1.27,0,0,0-.9.4c-6.2-4.4-12.4-8.7-18.6-13.1-5.7-4-11.6-7.8-17-12.2h0c-.4-.3-.7-.6-1.1-.9a8,8,0,0,1-1.7-1.5c-3.8-3.4-7.2-7.5-8.8-12.4a18.25,18.25,0,0,1-.7-2.5,1.16,1.16,0,0,0-.2-1,23.68,23.68,0,0,1,1.8-13.9,22.19,22.19,0,0,1,4-6.1c.2,3.9,2.9,7.8,5,10.8A71.4,71.4,0,0,0,96,246.53c5.2,1.9,11,3.7,16.5,2.2h.2A1.53,1.53,0,0,0,113.63,248.83Zm-24.9-9.7a1.8,1.8,0,0,1-1-.2c-.1-.1-.7-.7-.1-.7a.6.6,0,0,0,.6-.3l1.3,1A1.88,1.88,0,0,1,88.73,239.13Zm2.5.9a39.77,39.77,0,0,0,5,2.7,1.57,1.57,0,0,0-1,1.1c0,.1-.1.3-.1.4-2.4-1-4.8-2.1-7.1-3.3A3.72,3.72,0,0,0,91.23,240Zm6.1,4.3c.1,0,.3-.1.4-.1a1.7,1.7,0,0,1,1,0c.4.1,1.1.7.5,1.1q-.3.15-.3.3a1.85,1.85,0,0,0-.7-.2,6.9,6.9,0,0,1-.8-.3A2,2,0,0,0,97.33,244.33Zm4,.2a31.1,31.1,0,0,0,9.1,1.1c.1,0,.2-.1.3-.1l1.8-.3a15.06,15.06,0,0,1-3.5,1.4c-1.2.3-2.4.3-3.6.6a36.32,36.32,0,0,1-4.5-1A2.54,2.54,0,0,0,101.33,244.53Zm15.5-7.1c-.6,1.7-1.7,3.9-3.4,4.9h-.2c-10.7,1.6-20.9-4-28.1-11.5a69.38,69.38,0,0,1-9.2-12.5c-2.6-4.5-5.6-9.9-7.9-14.6,3.9-1.9,9.1-2.2,13.4-2a27.83,27.83,0,0,1,12,3.5,18,18,0,0,0,5.2,10.1,20.11,20.11,0,0,0,5.5,3.6,14.08,14.08,0,0,0,3.1,1h0c1.7,0,3.5.1,5-.7a27.06,27.06,0,0,0,2.1-3.7,10,10,0,0,1,.8,1.4,25.44,25.44,0,0,1,1.6,3.8,28.15,28.15,0,0,1,1.4,8.6A18.91,18.91,0,0,1,116.83,237.43Z\"/><path class=\"cls-5\" d=\"M83.23,18.13c-2.2-.6-3.8,1-4.2,3.1-.6,3,2.5,7.5-1.1,9.3l-.1.1c-2.9-7,4.5-13.6,5.8-20.2.9-4.6-1.6-10.9-7.2-10.4-5.9.5-7.7,7.2-6.9,12.1.6,3.7,2.6,8.5,2.8,12.7a14.05,14.05,0,0,0-4.7-7.3c-2.4-2.2-7-6.5-10.4-3.7-3.1,2.5-.6,6.7,2.2,8.1,2.2,1,4.6,1.1,6.9,1.6,1.8.4,4.3,1.7,4.9,3.5a8.75,8.75,0,0,1-.2,1.6V29c-.1.2-.2.3-.3.5a.64.64,0,0,0,.3,1,8.9,8.9,0,0,1-1.9,2c-.6.5-.1,1.5.6,1.1,4.5-2.8,4.6-8.5,3.5-13.1C71.93,15,67.73,5.23,75,2c3.3-1.4,6.3,1.1,7.1,4.2.9,3.5-.7,7-2.3,10-2.6,4.9-5.8,10.2-3.1,15.8.3.7,1.2.3,1.3-.3.1,0,.2.1.3,0,.4-.1.7-.2,1-.3a2.51,2.51,0,0,0,2.3,2.5c.8.1,1-1.3.2-1.4-3.1-.5,1.1-4.2,1.8-5a9.73,9.73,0,0,0,2.1-3.3C86.53,21.53,85.73,18.83,83.23,18.13Zm-23.5,2.2c-2.1-1.1-4.2-5-.8-5.9,2.4-.6,4.6,1.6,6.3,2.9a16.08,16.08,0,0,1,5.1,6.2h0C67.33,21.23,63.13,22,59.73,20.33ZM81,27.53v-.8c-.2-1.7-1-3.4-.7-5.1.5-2.7,3.7-2.6,4.1.1S82.73,25.83,81,27.53Z\"/><ellipse class=\"cls-6\" cx=\"58.43\" cy=\"53.93\" rx=\"6.4\" ry=\"2.2\"/><ellipse class=\"cls-6\" cx=\"95.53\" cy=\"38.73\" rx=\"2.6\" ry=\"7.6\" transform=\"translate(42.91 127.38) rotate(-81.38)\"/><ellipse class=\"cls-6\" cx=\"38.63\" cy=\"46.71\" rx=\"6.4\" ry=\"2.2\" transform=\"translate(-11.76 13.01) rotate(-16.64)\"/><ellipse class=\"cls-6\" cx=\"61.62\" cy=\"37.93\" rx=\"8.2\" ry=\"2.8\" transform=\"translate(-3.28 5.93) rotate(-5.37)\"/><ellipse class=\"cls-6\" cx=\"121.32\" cy=\"48.86\" rx=\"2.2\" ry=\"6.4\" transform=\"translate(25.52 137.9) rotate(-64.84)\"/><ellipse class=\"cls-6\" cx=\"90.93\" cy=\"51.73\" rx=\"4.8\" ry=\"1.6\"/><path class=\"cls-3\" d=\"M85,144.13a5.5,5.5,0,0,0-.7-.9,2.15,2.15,0,0,0-3.1-2.6c-.1.1-.2.1-.3.2a.9.9,0,0,0-.5-.1,3.3,3.3,0,0,0-2.2.2c-1.6.3-3.3,1-3.3,2.9-.1,2.2,2,3.3,3.9,3.4h.1a3.53,3.53,0,0,0,1.4-.3,7.62,7.62,0,0,0,3.3.2C85.23,146.73,85.83,145.43,85,144.13Z\"/><path class=\"cls-5\" d=\"M86,141.43c-.2-.4-.3-.7-.5-1.1a1.38,1.38,0,0,0-.6-1.1c-.1-.2-.3-.3-.4-.5h0a13.42,13.42,0,0,0-8.2-4.8,1.06,1.06,0,0,0-.5,2,43.43,43.43,0,0,1,4.3,2.4c-3.6.3-8.3,1.9-7.5,6.5.7,4.1,5.2,5.5,8.7,4.4S87.63,145.13,86,141.43Zm-3,3.7c-1.5,1.7-5,2.5-6.8,1a2.44,2.44,0,0,1-.4-3.5c1.1-1.2,3.1-1.1,4.6-1.3,1.8-.2,2.2-.2,3.2.7S84,143.93,83,145.13Z\"/><ellipse class=\"cls-7\" cx=\"114.16\" cy=\"120.53\" rx=\"21\" ry=\"13.4\" transform=\"translate(-23.94 212.67) rotate(-80.26)\"/><ellipse class=\"cls-8\" cx=\"113.28\" cy=\"124.63\" rx=\"14.3\" ry=\"9.2\" transform=\"translate(-28.71 215.2) rotate(-80.26)\"/><ellipse class=\"cls-7\" cx=\"108.93\" cy=\"122.1\" rx=\"5.5\" ry=\"3.5\" transform=\"translate(-29.83 208.81) rotate(-80.26)\"/><ellipse class=\"cls-7\" cx=\"39.63\" cy=\"122.04\" rx=\"13.4\" ry=\"21\" transform=\"translate(-26.05 11.81) rotate(-12.8)\"/><ellipse class=\"cls-8\" cx=\"40.63\" cy=\"125.34\" rx=\"9.2\" ry=\"14.3\" transform=\"translate(-26.75 12.11) rotate(-12.8)\"/><ellipse class=\"cls-7\" cx=\"44.43\" cy=\"122.03\" rx=\"3.5\" ry=\"5.5\" transform=\"matrix(0.98, -0.22, 0.22, 0.98, -25.93, 12.87)\"/><path class=\"cls-1\" d=\"M130.73,152.13c0,13.4-30.2-19.1-51.8-20.2-30.1-1.5-57.4,33.5-57.4,20.2s24.4-25.3,54.6-25.3S130.73,138.83,130.73,152.13Z\"/><path class=\"cls-4\" d=\"M121.33,136.23c-11.8-5.5-28.4-10.6-45-10.6s-33.2,5-44.9,10.9c-.7.3-.4,1.7.3,1.4,11.9-5.1,32.4-10.1,45-10.2s32.3,5.1,44.2,10.4C121.83,138.53,122.23,136.63,121.33,136.23Z\"/><path class=\"cls-5\" d=\"M129,81.73a10.7,10.7,0,0,0-8.7-7.4c-3.3-.4-7.9.8-9.2,4.2-.3.8.7,1.3,1.3,1,2.5-1.1,4.3-2.8,7.3-2.4a7.9,7.9,0,0,1,6.5,5.4C126.93,84.33,129.73,83.53,129,81.73Z\"/><path class=\"cls-5\" d=\"M42.63,79.23c-3.2-2.7-8.3-2.8-12.2-1.7-3.4,1-8.1,3.5-7.6,7.7.2,1.8,3.1,1.9,2.9,0-.4-3.6,5.5-5.2,8.1-5.5s5.1.6,7.7,1.2C42.53,81.23,43.53,80,42.63,79.23Z\"/></g></g></svg>"

/***/ }),

/***/ "542b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyVideo_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a3b9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyVideo_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyVideo_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyVideo_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8686":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyVideo_vue_vue_type_style_index_0_id_d1418126_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("06d5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyVideo_vue_vue_type_style_index_0_id_d1418126_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyVideo_vue_vue_type_style_index_0_id_d1418126_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyVideo_vue_vue_type_style_index_0_id_d1418126_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "999f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a3b9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a691":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyTweet_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cbe0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyTweet_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyTweet_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyTweet_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cbe0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d372":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyTweet_vue_vue_type_style_index_0_id_70296c0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("999f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyTweet_vue_vue_type_style_index_0_id_70296c0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyTweet_vue_vue_type_style_index_0_id_70296c0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmbettyTweet_vue_vue_type_style_index_0_id_70296c0a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/flo/www/embetty/embetty-vue/node_modules/.cache/vue-loader","cacheIdentifier":"6747c6f6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmbettyTweet.vue?vue&type=template&id=70296c0a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'embetty-tweet': true, answered: _vm.answered}},[(_vm.fetched)?[(_vm.isReply)?_c('embetty-tweet',{attrs:{"status":_vm.answeredTweetId,"answered":true}}):_vm._e(),_c('header',[_c('img',{attrs:{"src":_vm.profileImageUrl}}),_c('span',[_c('strong',[_vm._v(_vm._s(_vm.userName))]),_c('a',{attrs:{"href":("https://twitter.com/" + _vm.screenName),"target":"_blank","rel":"noopener"}},[_vm._v("@"+_vm._s(_vm.screenName))])])]),_c('article',[_c('p',{domProps:{"innerHTML":_vm._s(_vm.fullText)}}),(_vm.media.length > 0)?_c('section',{class:("media media-" + (_vm.media.length))},_vm._l((_vm.media),function(med){return _c('a',{key:med.imageUrl,attrs:{"href":med.imageUrl,"target":"_blank"}},[_c('img',{attrs:{"src":med.imageUrl}})])})):_vm._e(),(_vm.links.length > 0)?_c('a',{ref:"link",staticClass:"links",attrs:{"href":_vm.link.url,"target":"_blank","rel":"noopener"}},[_c('img',{attrs:{"src":_vm.linkImageUrl}}),_c('section',{ref:"linkBody",staticClass:"link-body"},[_c('h3',[_vm._v(_vm._s(_vm.link.title))]),(_vm.linkDescription)?_c('p',[_vm._v(_vm._s(_vm.linkDescription))]):_vm._e(),(_vm.linkHostname)?_c('span',[_vm._v(_vm._s(_vm.linkHostname))]):_vm._e()])]):_vm._e(),_c('a',{staticClass:"created-at",attrs:{"href":_vm.twitterUrl,"target":"_blank","rel":"noopener"}},[_c('time',{attrs:{"datetime":_vm.createdAt.toISOString()}},[_vm._v(_vm._s(_vm.createdAt.toLocaleString()))]),_vm._v("\n        via Twitter\n        "),_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 400 400"}},[_c('path',{staticStyle:{"fill":"#1da1f2"},attrs:{"d":"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"}})])]),_c('a',{staticClass:"powered-by",attrs:{"href":"https://www.heise.de/embetty?wt_mc=link.embetty.poweredby","target":"_blank","rel":"noopener","title":"embetty - displaying remote content without compromising your privacy."}},[_vm._v("\n        powered by "),_c('span',{staticClass:"embetty-logo",domProps:{"innerHTML":_vm._s(_vm.embettyLogo)}})])])]:_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EmbettyTweet.vue?vue&type=template&id=70296c0a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmbettyEmbed.vue?vue&type=script&lang=js&

// eslint-disable-next-line
const EMBETTY_LOGO = __webpack_require__("4e4b").toString();

/* harmony default export */ var EmbettyEmbedvue_type_script_lang_js_ = ({
  name: 'EmbettyEmbed',
  props: {
    serverUrl: {
      type: String,
      required: false,
      default: null
    }
  },
  /**
   * @returns {!object} Component's data.
   */
  data: function() {
    return {
      embettyLogo: EMBETTY_LOGO,

      fetched: false,
      data: undefined
    };
  },
  computed: {
    /**
     * Override this in child components!
     * @returns {string | undefined} The URL to query for data in this component.
     */
    url: function() {
      return undefined;
    },

    /**
     * @returns {!string} The server URL, either from this component's prop or the global config.
     */
    _serverUrl: function() {
      if (this.serverUrl) {
        return this.serverUrl;
      }

      if (!this._embettyVueOptions.serverUrl) {
        throw new Error('serverUrl is neither set directly on the ' + this.$vnode.tag + ' component nor globally.');
      }

      return this._embettyVueOptions.serverUrl;
    }
  },
  watch: {
    url: {
      immediate: true,
      /**
       * @param {?string} url The newly set URL.
       */
      handler: function(url) {
        if (url) {
          this.fetchData();
        }
      }
    }
  },
  methods: {
    /**
     * Calls the API of embetty-server using the url set in the calling (child) component.
     */
    fetchData: function() {
      var thisCmp = this;
      window.fetch(this.url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          thisCmp.data = data;
          thisCmp.fetched = true;
        });
    },

    /**
     * @param {?string} apiEndpoint The API endpoint of the embetty-server.
     * @returns {?string} The given URL, prepended with the embetty-server base URL.
     */
    _api: function(apiEndpoint) {
      return apiEndpoint ? (this._serverUrl + apiEndpoint) : undefined;
    }
  }
});

// CONCATENATED MODULE: ./src/components/EmbettyEmbed.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EmbettyEmbedvue_type_script_lang_js_ = (EmbettyEmbedvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/EmbettyEmbed.vue
var EmbettyEmbed_render, EmbettyEmbed_staticRenderFns




/* normalize component */

var component = normalizeComponent(
  components_EmbettyEmbedvue_type_script_lang_js_,
  EmbettyEmbed_render,
  EmbettyEmbed_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EmbettyEmbed = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmbettyTweet.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var LINK_IMAGE_SIZE = 125;
var MIN_WINDOW_WIDTH = 600;

/* harmony default export */ var EmbettyTweetvue_type_script_lang_js_ = ({
  name: 'EmbettyTweet',
  extends: EmbettyEmbed,
  props: {
    status: {
      type: String,
      required: true,
      /**
       * @param {!string} statusId The Twitter status (tweet) ID.
       * @returns {!boolean} True if it seems like a valid status ID, false otherwise.
       */
      validator: function(statusId) {
        return /^\d{6,}$/.test(statusId);
      }
    },
    answered: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  /**
   * @returns {!object} The component's data.
   */
  data: function() {
    return {
      linkDescription: null
    };
  },
  computed: {
    /**
     * @override
     * @returns {!string} The embetty-server URL to query for this tweet's data.
     */
    url: function() {
      return this._api('/tweet/' + this.status);
    },

    /**
     * @returns {!string} The name of this tweet's user.
     */
    userName: function() {
      return this.data.user.name;
    },

    /**
     * @returns {!string} The twitter handle of this tweet's user.
     */
    screenName: function() {
      return this.data.user.screen_name;
    },

    /**
     * @returns {!string} The text content of this tweet. Can contain HTML links to URLs, hashtags and at-mentions.
     */
    fullText: function() {
      var thisCmp = this;
      return this.data.full_text
        .replace(/(https:\/\/[^\s]+)/g, function(link) {
          if (thisCmp.media.length > 0 && thisCmp.media[0].url === link) {
            return '';
          }

          return '<a href="' + link + '">' + link + '</a>';
        })
        .replace(/#(\w+)/g, function(hashtag, word) {
          return '<a href="https://twitter.com/hashtag/' + word + '">' + hashtag + '</a>';
        })
        .replace(/@(\w+)/g, function(name, word) {
          return '<a href="https://twitter.com/' + word + '">' + name + '</a>';
        });
    },

    /**
     * @returns {!array.<object>} An array of objects describing this tweet's attached photos.
     */
    media: function() {
      var thisCmp = this;
      var extended = this.data.extended_entities || {};
      var media = extended.media || [];
      return media.map(function(m, idx) {
        m.imageUrl = thisCmp.url + '-images-' + idx;
        return m;
      });
    },

    /**
     * @returns {!array.<object>} An array of objects describing this tweet's links.
     */
    links: function() {
      return this.data.entities.urls || [];
    },

    /**
     * @returns {?object} This tweet's first link object.
     */
    link: function() {
      return this.links[0];
    },

    /**
     * @returns {!string} The embetty-server URL for this tweet's first link's image.
     */
    linkImageUrl: function() {
      return this.url + '-link-image';
    },

    /**
     * @returns {?string} The hostname of this tweet's first link's URL.
     */
    linkHostname: function() {
      // adapted from https://stackoverflow.com/a/21553982/451391
      var match = this.link.url.match(/^.*?\/\/(([^:/?#]*)(?::([0-9]+))?)/);
      return match ? match[2] : undefined;
    },

    /**
     * @returns {!string} The embetty-server URL for this tweet's user profile image.
     */
    profileImageUrl: function() {
      return this.url + '-profile-image';
    },

    /**
     * @returns {!Date} A Date object containing this tweet's creation date.
     */
    createdAt: function() {
      var createdAt = this.data.created_at.replace(/\+\d{4}\s/, '');
      return new Date(createdAt);
    },

    /**
     * @returns {!string} The URL leading to this tweet on Twitter.
     */
    twitterUrl: function() {
      return 'https://twitter.com/statuses/' + this.data.id_str;
    },

    /**
     * @returns {?string} The status ID of the tweet that this tweet is a reply to, if any.
     */
    answeredTweetId: function() {
      return this.data.in_reply_to_status_id_str;
    },

    /**
     * @returns {!boolean} Whether this is a reply to another tweet.
     */
    isReply: function() {
      return !!this.answeredTweetId;
    }
  },

  /**
   * Hook that is called when this component is mounted. Calls fitLinkDescription
   * as soon as the data are fetched and whenever the window is resized.
   */
  mounted: function() {
    var thisCmp = this;
    this.$watch('fetched', function(fetched) {
      if (fetched) {
        thisCmp.fitLinkDescription();
      }
    }, {
      immediate: true
    });

    if (window) {
      window.addEventListener('resize', function() {
        if (window.innerWidth < MIN_WINDOW_WIDTH) {
          return;
        }

        thisCmp.fitLinkDescription();
      });
    }
  },
  methods: {
    /**
     * Truncate this tweet's first link's description to fit into the space it is given.
     */
    fitLinkDescription: function() {
      if (!this.link || !window) {
        return;
      }

      // reset link description to the one returned by the API
      this.linkDescription = this.link.description;

      if (!this.linkDescription) {
        return;
      }

      /** @type Element */
      var section = this.$refs.link;
      /** @type Element */
      var linkBody = this.$refs.linkBody;

      // don't do anything if the mobile view is active
      if (section.clientWidth === linkBody.clientWidth) {
        return;
      }

      var imgHeight = LINK_IMAGE_SIZE;
      var counter = 0;
      var last = '';

      var computedStyle = window.getComputedStyle(section);

      var sectionHeight = function() {
        var elemMarginTop = parseFloat(computedStyle.getPropertyValue('margin-top'));
        var elemMarginBottom = parseFloat(computedStyle.getPropertyValue('margin-bottom'));
        var elemHeight = parseFloat(computedStyle.getPropertyValue('height'));

        return elemHeight + elemMarginTop + elemMarginBottom;
      };

      var thisCmp = this;
      var reduceLinkDescriptionLength = function() {
        if (counter >= 200 || last === this.linkDescription) {
          return;
        }

        if ((sectionHeight() - 2) <= imgHeight) {
          return;
        }

        last = thisCmp.linkDescription;
        thisCmp.linkDescription = thisCmp.linkDescription.replace(/\W*\s(\S)*$/, '…');
        counter++;

        // wait for Vue to render until we measure again
        thisCmp.$nextTick(reduceLinkDescriptionLength);
      };

      this.$nextTick(reduceLinkDescriptionLength);
    }
  }
});

// CONCATENATED MODULE: ./src/components/EmbettyTweet.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EmbettyTweetvue_type_script_lang_js_ = (EmbettyTweetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/EmbettyTweet.vue?vue&type=style&index=0&id=70296c0a&lang=scss&scoped=true&
var EmbettyTweetvue_type_style_index_0_id_70296c0a_lang_scss_scoped_true_ = __webpack_require__("d372");

// EXTERNAL MODULE: ./src/components/EmbettyTweet.vue?vue&type=style&index=1&lang=scss&
var EmbettyTweetvue_type_style_index_1_lang_scss_ = __webpack_require__("a691");

// CONCATENATED MODULE: ./src/components/EmbettyTweet.vue







/* normalize component */

var EmbettyTweet_component = normalizeComponent(
  components_EmbettyTweetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "70296c0a",
  null
  
)

/* harmony default export */ var EmbettyTweet = (EmbettyTweet_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/home/flo/www/embetty/embetty-vue/node_modules/.cache/vue-loader","cacheIdentifier":"6747c6f6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmbettyVideo.vue?vue&type=template&id=d1418126&scoped=true&
var EmbettyVideovue_type_template_id_d1418126_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"embetty-video",style:(_vm.width === null ? "" : ("width: " + _vm.width + "px"))},[(_vm.activated)?_c('div',{class:{
      'wrapper': true,
      'default-height': _vm.height === null
    },style:(_vm.height === null ? "" : ("height: " + _vm.height + "px")),domProps:{"innerHTML":_vm._s(_vm.iframe)}}):[_c('button',{staticClass:"playbutton",attrs:{"type":"button"},on:{"click":_vm.activate}},[_c('svg',{staticClass:"playicon",attrs:{"viewBox":"0 0 200 200"}},[_c('circle',{attrs:{"cx":"100","cy":"100","r":"90","fill":"none","stroke-width":"15","stroke":"#fff"}}),_c('polygon',{attrs:{"points":"70, 55 70, 145 145, 100","fill":"#fff"}})])]),_c('div',{class:{
        'poster': true,
        'default-height': _vm.height === null,
        'contain': _vm.posterImageMode === 'contain'
      },style:([
        _vm.posterImageUrl ? { backgroundImage: ("url(" + _vm.posterImageUrl + ")") } : {},
        _vm.height === null ? {} : { height: (_vm.height + "px") }
    ])}),_c('a',{staticClass:"powered-by",attrs:{"href":"https://www.heise.de/embetty","target":"_blank","rel":"noopener","title":"embetty - displaying remote content without compromising your privacy."}},[_vm._v("\n      powered by "),_c('span',{staticClass:"embetty-logo",domProps:{"innerHTML":_vm._s(_vm.embettyLogo)}})])]],2)}
var EmbettyVideovue_type_template_id_d1418126_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EmbettyVideo.vue?vue&type=template&id=d1418126&scoped=true&

// CONCATENATED MODULE: ./src/components/video-impl/FacebookVideo.js
/** @type VideoImpl */
var FacebookVideo = {
  /**
   * @param {!string} videoId The ID of the video.
   * @returns {?string} The embetty-server API endpoint to get the video data from.
   */
  getVideoDataApiEndpoint: function(videoId) {
    return '/video/facebook/' + videoId;
  },

  /**
   * @param {!string} videoId The ID of the video.
   * @returns {!string} The embetty-server API endpoint to get the poster image from.
   */
  getPosterImageApiEndpoint: function(videoId) {
    return '/video/facebook/' + videoId + '-poster-image';
  },

  /**
   * @param {!VideoData} videoData All data required to render the video iframe.
   * @returns {!string} The <iframe> playing the video.
   */
  getIframe: function(videoData) {
    var canonicalUrl = encodeURIComponent(videoData.serverData.canonicalUrl);
    var iframeSrc = 'https://www.facebook.com/plugins/video.php?href=' + canonicalUrl +
      '&show_text=0&autoplay=1&mute=0&width=' + videoData.width;

    return '<iframe ' +
      'src="' + iframeSrc + '" ' +
      'width="' + videoData.width + '" ' +
      'height="' + videoData.height + '" ' +
      'frameborder="0" ' +
      'webkitallowfullscreen ' +
      'mozallowfullscreen ' +
      'msallowfullscreen ' +
      'allowfullscreen></iframe>';
  }
};

/* harmony default export */ var video_impl_FacebookVideo = (FacebookVideo);

// CONCATENATED MODULE: ./src/components/video-impl/VimeoVideo.js
/** @type VideoImpl */
var VimeoVideo = {
  /**
   * @param {!string} videoId The ID of the video.
   * @returns {?string} undefined because no additional video data are required for Vimeo.
   */
  getVideoDataApiEndpoint: function(videoId) {
    return undefined;
  },

  /**
   * @param {!string} videoId The ID of the video.
   * @returns {!string} The embetty-server API endpoint to get the poster image from.
   */
  getPosterImageApiEndpoint: function(videoId) {
    return '/video/vimeo/' + videoId + '-poster-image';
  },

  /**
   * @param {!VideoData} videoData All data required to render the video iframe.
   * @returns {!string} The <iframe> playing the video.
   */
  getIframe: function(videoData) {
    return '<iframe ' +
      'src="https://player.vimeo.com/video/' + videoData.videoId + '?autoplay=1#t=' + videoData.startAt + '" ' +
      'width="' + videoData.width + '" ' +
      'height="' + videoData.height + '" ' +
      'frameborder="0" ' +
      'webkitallowfullscreen ' +
      'mozallowfullscreen ' +
      'msallowfullscreen ' +
      'allowfullscreen></iframe>';
  }
};

/* harmony default export */ var video_impl_VimeoVideo = (VimeoVideo);

// CONCATENATED MODULE: ./src/components/video-impl/YoutubeVideo.js
/** @type VideoImpl */
var YoutubeVideo = {
  /**
   * @param {!string} videoId The ID of the video.
   * @returns {?string} undefined because no additional video data are required for YouTube.
   */
  getVideoDataApiEndpoint: function(videoId) {
    return undefined;
  },

  /**
   * @param {!string} videoId The ID of the video.
   * @returns {!string} The embetty-server API endpoint to get the poster image from.
   */
  getPosterImageApiEndpoint: function(videoId) {
    return '/video/youtube/' + videoId + '-poster-image';
  },

  /**
   * @param {!VideoData} videoData All data required to render the video iframe.
   * @returns {!string} The <iframe> playing the video.
   */
  getIframe: function(videoData) {
    return '<iframe ' +
      'src="//www.youtube-nocookie.com/embed/' + videoData.videoId + '?autoplay=1&start=' + videoData.startAt + '" ' +
      'width="' + videoData.width + '" ' +
      'height="' + videoData.height + '" ' +
      'frameborder="0" ' +
      'webkitallowfullscreen ' +
      'mozallowfullscreen ' +
      'msallowfullscreen ' +
      'allowfullscreen></iframe>';
  }
};

/* harmony default export */ var video_impl_YoutubeVideo = (YoutubeVideo);

// CONCATENATED MODULE: ./src/components/video-impl/index.js




var videoImplementations = {
  facebook: video_impl_FacebookVideo,
  vimeo: video_impl_VimeoVideo,
  youtube: video_impl_YoutubeVideo
};

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EmbettyVideo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var EmbettyVideovue_type_script_lang_js_ = ({
  name: 'EmbettyVideo',
  extends: EmbettyEmbed,
  props: {
    width: {
      type: Number,
      required: false,
      default: null
    },
    height: {
      type: Number,
      required: false,
      default: null
    },
    type: {
      type: String,
      required: true,
      /**
       * @param {!string} videoType The type of the video.
       * @returns {!boolean} True if it is a valid type, false otherwise.
       */
      validator: function(videoType) {
        return videoType in videoImplementations;
      }
    },
    videoId: {
      type: String,
      required: true,
      /**
       * @param {!string} videoId The ID of the video.
       * @returns {!boolean} True if it seems like a valid video ID, false otherwise.
       */
      validator: function(videoId) {
        return /^[a-zA-Z0-9_-]{6,}$/.test(videoId);
      }
    },
    startAt: {
      type: [Number, String],
      required: false,
      default: 0,
      /**
       * @param {!number} startAt The number of seconds to start playback after.
       * @returns {!boolean} True if it is a non-negative integer, false otherwise.
       */
      validator: function(startAt) {
        if (typeof startAt === 'number') {
          return startAt % 1 === 0 && startAt >= 0;
        }

        return /^(?:(?:\d+h)?\d+m)?\d+s?$/.test(startAt);
      }
    },
    posterImageMode: {
      type: String,
      required: false,
      default: null
    }
  },
  /**
   * @returns {!object} The component's data.
   */
  data: function() {
    return {
      activated: false
    };
  },
  computed: {
    /**
     * @returns {!VideoImpl} The video implementation, based on the video type.
     * @throws {!Error} If there is no video implementation for the given type.
     */
    impl: function() {
      if (!(this.type in videoImplementations)) {
        throw new Error('Could not find video implementation for type ' + this.type + '. Please specify a valid video type.');
      }

      return videoImplementations[this.type];
    },

    /**
     * @returns {!string} The embetty-server URL for the video poster image.
     */
    posterImageUrl: function() {
      return this._api(this.impl.getPosterImageApiEndpoint(this.videoId));
    },

    /**
     * @returns {!string} The poster image mode.
     */
    _posterImageMode: function() {
      return this.posterImageMode || this._embettyVueOptions.posterImageMode || 'cover';
    },

    /**
     * @returns {!number} The number of seconds the video should start at.
     */
    _startAt: function() {
      if (typeof this.startAt === 'number') {
        return this.startAt;
      }

      var timeRegex = /^(?:(?:(\d+)h)?(\d+)m)?(\d+)s?$/;
      var timeMatch = this.startAt.match(timeRegex);

      if (timeMatch) {
        // '1m16s'    -> timeMatch = ['1m16s',    undefined, '1', '16']
        // '1h23m45s' -> timeMatch = ['1h23m45s', '1',       '2', '34']
        var timeNumbers = timeMatch.map(function(val) {
          if (val === undefined) {
            return 0;
          }
          return parseInt(val);
        });

        var hours = timeNumbers[1];
        var minutes = timeNumbers[2];
        var seconds = timeNumbers[3];

        return (hours * 3600) + (minutes * 60) + seconds;
      }

      return 0;
    },

    /**
     * @override
     * @returns {?string} The embetty-server URL to fetch video data from, or undefined
     *                    if this video does not require additional data.
     */
    url: function() {
      return this._api(this.impl.getVideoDataApiEndpoint(this.videoId));
    },

    /**
     * @returns {!string} The HTML for the <iframe> this component renders upon activating.
     */
    iframe: function() {
      return this.impl.getIframe({
        width: this.width || 1600,
        height: this.height || 900,
        videoId: this.videoId,
        startAt: this._startAt,
        serverData: this.data
      });
    }
  },
  methods: {
    /**
     * Activates the video, i.e. replaces the poster image and play button with the iframe.
     */
    activate: function() {
      this.activated = true;
      this.$emit('activated');
    }
  }
});

// CONCATENATED MODULE: ./src/components/EmbettyVideo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EmbettyVideovue_type_script_lang_js_ = (EmbettyVideovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/EmbettyVideo.vue?vue&type=style&index=0&id=d1418126&lang=scss&scoped=true&
var EmbettyVideovue_type_style_index_0_id_d1418126_lang_scss_scoped_true_ = __webpack_require__("8686");

// EXTERNAL MODULE: ./src/components/EmbettyVideo.vue?vue&type=style&index=1&lang=scss&
var EmbettyVideovue_type_style_index_1_lang_scss_ = __webpack_require__("542b");

// CONCATENATED MODULE: ./src/components/EmbettyVideo.vue







/* normalize component */

var EmbettyVideo_component = normalizeComponent(
  components_EmbettyVideovue_type_script_lang_js_,
  EmbettyVideovue_type_template_id_d1418126_scoped_true_render,
  EmbettyVideovue_type_template_id_d1418126_scoped_true_staticRenderFns,
  false,
  null,
  "d1418126",
  null
  
)

/* harmony default export */ var EmbettyVideo = (EmbettyVideo_component.exports);
// CONCATENATED MODULE: ./src/install.js



var Plugin = {
  /**
   * @param {!VueConstructor} Vue The global Vue object.
   * @param {?EmbettyVueOptions} options Options for embetty-vue.
   */
  install: function(Vue, options) {
    options = options || {};

    Vue.component('embetty-tweet', EmbettyTweet);
    Vue.component('embetty-video', EmbettyVideo);
    Vue.prototype._embettyVueOptions = options;
  }
};

// auto install
if (typeof window !== 'undefined' && window.hasOwnProperty('Vue')) {
  var baseUrlMeta = document.querySelector('meta[data-embetty-server]');

  /** @type EmbettyVueOptions */
  var embettyVueOptions = {
    serverUrl: baseUrlMeta !== null ? baseUrlMeta.getAttribute('data-embetty-server') : undefined
  };

  window.Vue.use(Plugin, embettyVueOptions);
}

/* harmony default export */ var install = (Plugin);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (install);



/***/ })

/******/ })["default"];
//# sourceMappingURL=embetty-vue.common.js.map