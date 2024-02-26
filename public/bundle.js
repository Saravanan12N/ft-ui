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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: F:\\FrontEnd\\ft-ui\\src\\index.js: Support for the experimental syntax 'jsx' isn't currently enabled (9:3):\n\n\u001b[0m \u001b[90m  7 |\u001b[39m \u001b[36mconst\u001b[39m root \u001b[33m=\u001b[39m \u001b[33mReactDOM\u001b[39m\u001b[33m.\u001b[39mcreateRoot(document\u001b[33m.\u001b[39mgetElementById(\u001b[32m'root'\u001b[39m))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 |\u001b[39m root\u001b[33m.\u001b[39mrender(\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 |\u001b[39m   \u001b[33m<\u001b[39m\u001b[33mReact\u001b[39m\u001b[33m.\u001b[39m\u001b[33mStrictMode\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mApp\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 |\u001b[39m   \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mReact\u001b[39m\u001b[33m.\u001b[39m\u001b[33mStrictMode\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 |\u001b[39m )\u001b[33m;\u001b[39m\u001b[0m\n\nAdd @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.\n    at constructor (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:353:19)\n    at Parser.raise (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:3277:19)\n    at Parser.expectOnePlugin (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:3311:18)\n    at Parser.parseExprAtom (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10925:18)\n    at Parser.parseExprSubscripts (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10580:23)\n    at Parser.parseUpdate (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10563:21)\n    at Parser.parseMaybeUnary (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10541:23)\n    at Parser.parseMaybeUnaryOrPrivate (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10395:61)\n    at Parser.parseExprOps (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10400:23)\n    at Parser.parseMaybeConditional (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10377:23)\n    at Parser.parseMaybeAssign (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10338:21)\n    at F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10308:39\n    at Parser.allowInAnd (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:11926:12)\n    at Parser.parseMaybeAssignAllowIn (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10308:17)\n    at Parser.parseExprListItem (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:11686:18)\n    at Parser.parseCallExpressionArguments (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10766:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10683:29)\n    at Parser.parseSubscript (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10620:19)\n    at Parser.parseSubscripts (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10593:19)\n    at Parser.parseExprSubscripts (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10584:17)\n    at Parser.parseUpdate (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10563:21)\n    at Parser.parseMaybeUnary (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10541:23)\n    at Parser.parseMaybeUnaryOrPrivate (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10395:61)\n    at Parser.parseExprOps (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10400:23)\n    at Parser.parseMaybeConditional (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10377:23)\n    at Parser.parseMaybeAssign (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10338:21)\n    at Parser.parseExpressionBase (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10292:23)\n    at F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10288:39\n    at Parser.allowInAnd (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:11921:16)\n    at Parser.parseExpression (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:10288:17)\n    at Parser.parseStatementContent (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:12362:23)\n    at Parser.parseStatementLike (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:12229:17)\n    at Parser.parseModuleItem (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:12206:17)\n    at Parser.parseBlockOrModuleBlockBody (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:12786:36)\n    at Parser.parseBlockBody (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:12779:10)\n    at Parser.parseProgram (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:12106:10)\n    at Parser.parseTopLevel (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:12096:25)\n    at Parser.parse (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:13895:10)\n    at parse (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\parser\\lib\\index.js:13937:38)\n    at parser (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\core\\lib\\parser\\index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:64:37)\n    at normalizeFile.next (<anonymous>)\n    at run (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\core\\lib\\transformation\\index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (F:\\FrontEnd\\ft-ui\\node_modules\\@babel\\core\\lib\\transform.js:22:33)\n    at transform.next (<anonymous>)\n    at step (F:\\FrontEnd\\ft-ui\\node_modules\\gensync\\index.js:261:32)\n    at F:\\FrontEnd\\ft-ui\\node_modules\\gensync\\index.js:273:13\n    at async.call.result.err.err (F:\\FrontEnd\\ft-ui\\node_modules\\gensync\\index.js:223:11)");

/***/ })
/******/ ]);