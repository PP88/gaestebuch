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

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/***/ (() => {

eval("console.log(\"index.js\");\njQuery(document).ready(function ($) {\n  var form = $(\".new-entry\");\n  $(form).submit(function (event) {\n    event.preventDefault();\n    var title = $(\"#title\").val();\n    var content = $(\"#content\").val();\n    $.ajax({\n      url: \"/guestbook/new\",\n      method: \"POST\",\n      data: {\n        title: title,\n        content: content\n      },\n      success: function success(data) {\n        var div = $.parseHTML(\"<div></div>\"); // sets the content of the body to element div\n\n        $(div).html(data);\n        var newEntriesArray = $(\".entry\", div);\n        $(\"#guestbook-entries\").children([]);\n        newEntriesArray.each(function (i, newEntry) {\n          $(\"#guestbook-entries\").append(newEntry);\n        });\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack://Nodeproject/./public/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/index.js"]();
/******/ 	
/******/ })()
;