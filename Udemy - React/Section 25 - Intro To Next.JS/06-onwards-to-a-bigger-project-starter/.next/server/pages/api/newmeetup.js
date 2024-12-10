"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/newmeetup";
exports.ids = ["pages/api/newmeetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/newmeetup.js":
/*!********************************!*\
  !*** ./pages/api/newmeetup.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handler\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        console.log(req);\n        try {\n            // mongodb+srv://kannanshankar130203:Shankar%4013@restapicluster.cbsm0tq.mongodb.net/\n            const data = req.body;\n            console.log(data);\n            const { title , image , description , address  } = data;\n            const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://kannanshankar130203:Shankar%4013@restapicluster.cbsm0tq.mongodb.net/\");\n            const db = await client.db();\n            const meetupCollections = await db.collection(\"meetups\");\n            const result = await meetupCollections.insertOne(data);\n            client.close();\n            res.status(201).json({\n                message: \"meetup inserted\"\n            });\n        } catch (error) {\n            res.status(500).json({\n                message: error\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3bWVldHVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUMvQixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBQ0MsR0FBRyxFQUFDO0lBQ3BDLElBQUdELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEdBQUcsQ0FBQztRQUNoQixJQUFHO1lBQ0QscUZBQXFGO1lBQ3JGLE1BQU1LLElBQUksR0FBR0wsR0FBRyxDQUFDTSxJQUFJO1lBQ3JCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7WUFHbEIsTUFBTSxFQUFDRSxLQUFLLEdBQUVDLEtBQUssR0FBRUMsV0FBVyxHQUFFQyxPQUFPLEdBQUMsR0FBR0wsSUFBSTtZQUNqRCxNQUFNTSxNQUFNLEdBQUcsTUFBTWIsd0RBQW1CLENBQUMsb0ZBQW9GLENBQUM7WUFDOUgsTUFBTWUsRUFBRSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0UsRUFBRSxFQUFFO1lBRTVCLE1BQU1DLGlCQUFpQixHQUFFLE1BQU1ELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFNBQVMsQ0FBQztZQUV2RCxNQUFNQyxNQUFNLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLFNBQVMsQ0FBQ1osSUFBSSxDQUFDO1lBQ3RETSxNQUFNLENBQUNPLEtBQUssRUFBRTtZQUVkakIsR0FBRyxDQUFDa0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUNDLE9BQU8sRUFBQyxpQkFBaUI7YUFBQyxDQUFDLENBQUM7UUFDcEQsRUFDQSxPQUFNQyxLQUFLLEVBQUM7WUFDVnJCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFDQyxPQUFPLEVBQUNDLEtBQUs7YUFBQyxDQUFDO1FBQ3ZDLENBQUM7SUFFSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3bWVldHVwLmpzPzg1MTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcclxuICBpZihyZXEubWV0aG9kID09PSBcIlBPU1RcIiApe1xyXG4gICAgY29uc29sZS5sb2cocmVxKVxyXG4gICAgdHJ5e1xyXG4gICAgICAvLyBtb25nb2RiK3NydjovL2thbm5hbnNoYW5rYXIxMzAyMDM6U2hhbmthciU0MDEzQHJlc3RhcGljbHVzdGVyLmNic20wdHEubW9uZ29kYi5uZXQvXHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICBcclxuICAgICAgY29uc3Qge3RpdGxlLCBpbWFnZSwgZGVzY3JpcHRpb24sIGFkZHJlc3N9ID0gZGF0YTtcclxuICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcIm1vbmdvZGIrc3J2Oi8va2FubmFuc2hhbmthcjEzMDIwMzpTaGFua2FyJTQwMTNAcmVzdGFwaWNsdXN0ZXIuY2JzbTB0cS5tb25nb2RiLm5ldC9cIilcclxuICAgICAgY29uc3QgZGIgPSBhd2FpdCBjbGllbnQuZGIoKVxyXG4gICAgICBcclxuICAgICAgY29uc3QgbWVldHVwQ29sbGVjdGlvbnMgPWF3YWl0IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cENvbGxlY3Rpb25zLmluc2VydE9uZShkYXRhKTtcclxuICAgICAgY2xpZW50LmNsb3NlKClcclxuICAgICAgXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHttZXNzYWdlOidtZWV0dXAgaW5zZXJ0ZWQnfSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHttZXNzYWdlOmVycm9yfSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImJvZHkiLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJhZGRyZXNzIiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwQ29sbGVjdGlvbnMiLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/newmeetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/newmeetup.js"));
module.exports = __webpack_exports__;

})();