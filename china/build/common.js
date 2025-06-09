"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./.ice/env.ts":
/*!*********************!*\
  !*** ./.ice/env.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAliMiniApp: function() { return /* binding */ isAliMiniApp; },
/* harmony export */   isBaiduSmartProgram: function() { return /* binding */ isBaiduSmartProgram; },
/* harmony export */   isByteDanceMicroApp: function() { return /* binding */ isByteDanceMicroApp; },
/* harmony export */   isFRM: function() { return /* binding */ isFRM; },
/* harmony export */   isKraken: function() { return /* binding */ isKraken; },
/* harmony export */   isKuaiShouMiniProgram: function() { return /* binding */ isKuaiShouMiniProgram; },
/* harmony export */   isMiniApp: function() { return /* binding */ isMiniApp; },
/* harmony export */   isNode: function() { return /* binding */ isNode; },
/* harmony export */   isPHA: function() { return /* binding */ isPHA; },
/* harmony export */   isQuickApp: function() { return /* binding */ isQuickApp; },
/* harmony export */   isWeChatMiniProgram: function() { return /* binding */ isWeChatMiniProgram; },
/* harmony export */   isWeb: function() { return /* binding */ isWeb; },
/* harmony export */   isWeex: function() { return /* binding */ isWeex; },
/* harmony export */   isWindVane: function() { return /* binding */ isWindVane; }
/* harmony export */ });
/* provided dependency */ var navigator = __webpack_require__(/*! @ice/miniapp-runtime */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js")["navigator"];
// This is build-time generated prebuilt for universal-env impl.
var isServer = "client" === "server";
var isClient = "client" === "client";
var isNode = isServer;
var isWeb = isClient && "wechat-miniprogram" === "web";
var isWeex = isClient && "wechat-miniprogram" === "weex";
var isAliMiniApp = isClient && "wechat-miniprogram" === "ali-miniapp";
var isByteDanceMicroApp = isClient && "wechat-miniprogram" === "bytedance-microapp";
var isBaiduSmartProgram = isClient && "wechat-miniprogram" === "baidu-smartprogram";
var isKuaiShouMiniProgram = isClient && "wechat-miniprogram" === "kuaishou-miniprogram";
var isWeChatMiniProgram = isClient && "wechat-miniprogram" === "wechat-miniprogram";
var isKraken = isClient && "wechat-miniprogram" === "kraken";
var isQuickApp = false; // Now ice.js will not implement quick app target.
var isMiniApp = isAliMiniApp; // in universal-env, isMiniApp is equals to isAliMiniApp
// Following variables are runtime executed envs.
// See also @uni/env.
var isPHA = isWeb && typeof pha === "object";
var ua = typeof navigator === "object" ? navigator.userAgent || navigator.swuserAgent : "";
var wvRegExp = /.+AliApp\((\w+)\/((?:\d+\.)+\d+)\).* .*(WindVane)(?:\/((?:\d+\.)+\d+))?.*/;
var isWindVane = wvRegExp.test(ua) && isWeb && typeof WindVane !== "undefined" && typeof WindVane.call !== "undefined";
// WindVane.call is a function while page importing lib-windvane
var isFRM = isMiniApp && isWeb && typeof my !== "undefined" && typeof my.isFRM !== "undefined";
// Compatible with default export, for example: import env from '@ice/env'; env.isWeb;
/* harmony default export */ __webpack_exports__["default"] = ({
    isWeb: isWeb,
    isNode: isNode,
    isWeex: isWeex,
    isKraken: isKraken,
    isMiniApp: isMiniApp,
    isByteDanceMicroApp: isByteDanceMicroApp,
    isBaiduSmartProgram: isBaiduSmartProgram,
    isKuaiShouMiniProgram: isKuaiShouMiniProgram,
    isWeChatMiniProgram: isWeChatMiniProgram,
    isQuickApp: isQuickApp,
    isPHA: isPHA,
    isWindVane: isWindVane,
    isFRM: isFRM
});


/***/ })

}]);
//# sourceMappingURL=common.js.map