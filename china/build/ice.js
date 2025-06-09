"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["ice"],{

/***/ "./node_modules/.pnpm/@ice+jsx-runtime@0.3.1_react@18.3.1/node_modules/@ice/jsx-runtime/esm/dev.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+jsx-runtime@0.3.1_react@18.3.1/node_modules/@ice/jsx-runtime/esm/dev.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fragment: function() { return /* reexport safe */ react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment; },
/* harmony export */   jsxDEV: function() { return /* binding */ jsxDEV; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.js */ "./node_modules/.pnpm/@ice+jsx-runtime@0.3.1_react@18.3.1/node_modules/@ice/jsx-runtime/esm/style.js");
// @ts-ignore


/**
 * @param {*} type
 * @param {object} props
 * @param {string} key
 * @param {boolean} isStaticChildren
 * @param {object} source
 * @param {any} self
 */ function jsxDEV(type, props, key, isStaticChildren, source, self) {
    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(type, (0,_style_js__WEBPACK_IMPORTED_MODULE_1__.hijackElementProps)(props), key, isStaticChildren, source, self);
}



/***/ }),

/***/ "./node_modules/.pnpm/@ice+jsx-runtime@0.3.1_react@18.3.1/node_modules/@ice/jsx-runtime/esm/style.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+jsx-runtime@0.3.1_react@18.3.1/node_modules/@ice/jsx-runtime/esm/style.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hijackElementProps: function() { return /* binding */ hijackElementProps; }
/* harmony export */ });
/* harmony import */ var style_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-unit */ "./node_modules/.pnpm/style-unit@3.0.5/node_modules/style-unit/es/index.js");
// @ts-ignore

var STYLE = "style";
function isObject(obj) {
    return typeof obj === "object";
}
// Support rpx unit.
function hijackElementProps(props) {
    if (props && STYLE in props) {
        var style = props.style;
        if (isObject(style)) {
            var result = Object.assign({}, props);
            var convertedStyle = {};
            for(var prop in style)// @ts-ignore
            convertedStyle[prop] = typeof style[prop] === "string" ? (0,style_unit__WEBPACK_IMPORTED_MODULE_0__.convertUnit)(style[prop]) : style[prop];
            result["style"] = convertedStyle;
            return result;
        }
    }
    return props;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-react-dom@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-react-dom/esm/index.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-react-dom@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-react-dom/esm/index.js ***!
  \******************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: function() { return /* binding */ Internals; },
/* harmony export */   createPortal: function() { return /* binding */ createPortal; },
/* harmony export */   createRoot: function() { return /* reexport safe */ _render_js__WEBPACK_IMPORTED_MODULE_2__.createRoot; },
/* harmony export */   findDOMNode: function() { return /* binding */ findDOMNode; },
/* harmony export */   render: function() { return /* reexport safe */ _render_js__WEBPACK_IMPORTED_MODULE_2__.render; },
/* harmony export */   unmountComponentAtNode: function() { return /* binding */ unmountComponentAtNode; },
/* harmony export */   unstable_batchedUpdates: function() { return /* binding */ batchedUpdates; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _reconciler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reconciler.js */ "./node_modules/.pnpm/@ice+miniapp-react-dom@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-react-dom/esm/reconciler.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ "./node_modules/.pnpm/@ice+miniapp-react-dom@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-react-dom/esm/render.js");



const { batchedUpdates } = _reconciler_js__WEBPACK_IMPORTED_MODULE_0__.IceMiniappReconciler;
function unmountComponentAtNode(dom) {
    (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.ensure)(dom && [1, 8, 9, 11].includes(dom.nodeType), 'unmountComponentAtNode(...): Target container is not a DOM element.');
    const root = _render_js__WEBPACK_IMPORTED_MODULE_2__.ContainerMap.get(dom);
    if (!root)
        return false;
    batchedUpdates(() => {
        root.unmount(() => {
            _render_js__WEBPACK_IMPORTED_MODULE_2__.ContainerMap.delete(dom);
        });
    }, null);
    return true;
}
function findDOMNode(comp) {
    if (comp == null) {
        return null;
    }
    const { nodeType } = comp;
    if (nodeType === 1 || nodeType === 3) {
        return comp;
    }
    return _reconciler_js__WEBPACK_IMPORTED_MODULE_0__.IceMiniappReconciler.findHostInstance(comp);
}
const portalType = (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Symbol) && Symbol.for
    ? Symbol.for('react.portal')
    : 0xeaca;
function createPortal(children, containerInfo, key) {
    return {
        $$typeof: portalType,
        key: key == null ? null : String(key),
        children,
        containerInfo,
        implementation: null,
    };
}
const Internals = {
    usingClientEntryPoint: false,
};

/* harmony default export */ __webpack_exports__["default"] = ({
    render: _render_js__WEBPACK_IMPORTED_MODULE_2__.render,
    createRoot: _render_js__WEBPACK_IMPORTED_MODULE_2__.createRoot,
    unstable_batchedUpdates: batchedUpdates,
    unmountComponentAtNode,
    findDOMNode,
    createPortal,
});


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-react-dom@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-react-dom/esm/props.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-react-dom@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-react-dom/esm/props.js ***!
  \******************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateProps: function() { return /* binding */ updateProps; }
/* harmony export */ });
/* harmony import */ var _ice_miniapp_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ice/miniapp-runtime */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js");
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");


function isEventName(s) {
    return s[0] === 'o' && s[1] === 'n';
}
const IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function updateProps(dom, oldProps, newProps) {
    let i;
    for (i in oldProps) {
        if (!(i in newProps)) {
            setProperty(dom, i, null, oldProps[i]);
        }
    }
    const isFormElement = dom instanceof _ice_miniapp_runtime__WEBPACK_IMPORTED_MODULE_0__.FormElement;
    for (i in newProps) {
        if (oldProps[i] !== newProps[i] || (isFormElement && i === 'value')) {
            setProperty(dom, i, newProps[i], oldProps[i]);
        }
    }
}
// function eventProxy (e: CommonEvent) {
//   const el = document.getElementById(e.currentTarget.id)
//   const handlers = el!.__handlers[e.type]
//   handlers[0](e)
// }
function setEvent(dom, name, value, oldValue) {
    const isCapture = name.endsWith('Capture');
    let eventName = name.toLowerCase().slice(2);
    if (isCapture) {
        eventName = eventName.slice(0, -7);
    }
    const compName = (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(dom.tagName.toLowerCase()));
    if (eventName === 'click' && compName in _ice_shared__WEBPACK_IMPORTED_MODULE_1__.internalComponents) {
        eventName = 'tap';
    }
    if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
        if (oldValue) {
            dom.removeEventListener(eventName, oldValue, false);
            dom.addEventListener(eventName, value, { isCapture, sideEffect: false });
        }
        else {
            dom.addEventListener(eventName, value, isCapture);
        }
    }
    else {
        dom.removeEventListener(eventName, oldValue);
    }
}
function setStyle(style, key, value) {
    if (key[0] === '-') {
        style.setProperty(key, value.toString());
    }
    style[key] =
        (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isNumber)(value) && IS_NON_DIMENSIONAL.test(key) === false
            ? `${value}px`
            : value == null
                ? ''
                : value;
}
function setProperty(dom, name, value, oldValue) {
    var _a, _b;
    name = name === 'className' ? 'class' : name;
    if (name === 'key' ||
        name === 'children' ||
        name === 'ref') {
        // skip
    }
    else if (name === 'style') {
        const { style } = dom;
        if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
            style.cssText = value;
        }
        else {
            if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(oldValue)) {
                style.cssText = '';
                oldValue = null;
            }
            if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(oldValue)) {
                for (const i in oldValue) {
                    if (!(value && i in value)) {
                        setStyle(style, i, '');
                    }
                }
            }
            if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value)) {
                for (const i in value) {
                    if (!oldValue || value[i] !== oldValue[i]) {
                        setStyle(style, i, value[i]);
                    }
                }
            }
        }
    }
    else if (isEventName(name)) {
        setEvent(dom, name, value, oldValue);
    }
    else if (name === 'dangerouslySetInnerHTML') {
        const newHtml = (_a = value === null || value === void 0 ? void 0 : value.__html) !== null && _a !== void 0 ? _a : '';
        const oldHtml = (_b = oldValue === null || oldValue === void 0 ? void 0 : oldValue.__html) !== null && _b !== void 0 ? _b : '';
        if (newHtml || oldHtml) {
            if (oldHtml !== newHtml) {
                dom.innerHTML = newHtml;
            }
        }
    }
    else if (!(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
        if (value == null) {
            dom.removeAttribute(name);
        }
        else {
            dom.setAttribute(name, value);
        }
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-react-dom@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-react-dom/esm/reconciler.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-react-dom@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-react-dom/esm/reconciler.js ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

var scheduler__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IceMiniappReconciler: function() { return /* binding */ IceMiniappReconciler; }
/* harmony export */ });
/* harmony import */ var _ice_miniapp_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ice/miniapp-runtime */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js");
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-reconciler */ "./node_modules/.pnpm/react-reconciler@0.27.0_react@18.3.1/node_modules/react-reconciler/index.js");
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scheduler */ "./node_modules/.pnpm/scheduler@0.20.2/node_modules/scheduler/index.js");
/* harmony import */ var _props_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./props.js */ "./node_modules/.pnpm/@ice+miniapp-react-dom@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-react-dom/esm/props.js");





const { unstable_now: now, } = /*#__PURE__*/ (scheduler__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (scheduler__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(scheduler__WEBPACK_IMPORTED_MODULE_1__, 2)));
function returnFalse() {
    return false;
}
const hostConfig = {
    createInstance(type) {
        return _ice_miniapp_runtime__WEBPACK_IMPORTED_MODULE_2__.document.createElement(type);
    },
    createTextInstance(text) {
        return _ice_miniapp_runtime__WEBPACK_IMPORTED_MODULE_2__.document.createTextNode(text);
    },
    getPublicInstance(inst) {
        return inst;
    },
    getRootHostContext() {
        return {};
    },
    getChildHostContext() {
        return {};
    },
    getCurrentEventPriority() {
        // 因 @types/react-reconciler 未更新，ts会报错，这里直接返回16
        return 16; // import { DefaultEventPriority } from 'react-reconciler/constants'
    },
    detachDeletedInstance() {
        // noop
    },
    appendChild(parent, child) {
        parent.appendChild(child);
    },
    appendInitialChild(parent, child) {
        parent.appendChild(child);
    },
    appendChildToContainer(parent, child) {
        parent.appendChild(child);
    },
    removeChild(parent, child) {
        parent.removeChild(child);
    },
    removeChildFromContainer(parent, child) {
        parent.removeChild(child);
    },
    insertBefore(parent, child, refChild) {
        parent.insertBefore(child, refChild);
    },
    insertInContainerBefore(parent, child, refChild) {
        parent.insertBefore(child, refChild);
    },
    commitTextUpdate(textInst, _, newText) {
        textInst.nodeValue = newText;
    },
    finalizeInitialChildren(dom, _, props) {
        (0,_props_js__WEBPACK_IMPORTED_MODULE_3__.updateProps)(dom, {}, props);
        return false;
    },
    prepareUpdate() {
        return _ice_shared__WEBPACK_IMPORTED_MODULE_4__.EMPTY_ARR;
    },
    commitUpdate(dom, _payload, _type, oldProps, newProps) {
        (0,_props_js__WEBPACK_IMPORTED_MODULE_3__.updateProps)(dom, oldProps, newProps);
    },
    hideInstance(instance) {
        const { style } = instance;
        style.setProperty('display', 'none');
    },
    unhideInstance(instance, props) {
        const styleProp = props.style;
        let display = (styleProp && Object.prototype.hasOwnProperty.call(styleProp, 'display')) ? styleProp.display : null;
        display = display == null || (0,_ice_shared__WEBPACK_IMPORTED_MODULE_4__.isBoolean)(display) || display === '' ? '' : (`${display}`).trim();
        // eslint-disable-next-line dot-notation
        instance.style['display'] = display;
    },
    clearContainer(element) {
        if (element.childNodes.length > 0) {
            element.textContent = '';
        }
    },
    queueMicrotask: (0,_ice_shared__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(Promise)
        ? setTimeout
        : callback => Promise.resolve(null)
            .then(callback)
            .catch((error) => {
            setTimeout(() => {
                throw error;
            });
        }),
    shouldSetTextContent: returnFalse,
    prepareForCommit() { return null; },
    resetAfterCommit: _ice_shared__WEBPACK_IMPORTED_MODULE_4__.noop,
    commitMount: _ice_shared__WEBPACK_IMPORTED_MODULE_4__.noop,
    now,
    cancelTimeout: clearTimeout,
    scheduleTimeout: setTimeout,
    preparePortalMount: _ice_shared__WEBPACK_IMPORTED_MODULE_4__.noop,
    noTimeout: -1,
    supportsMutation: true,
    supportsPersistence: false,
    isPrimaryRenderer: true,
    supportsHydration: false,
};
const IceMiniappReconciler = react_reconciler__WEBPACK_IMPORTED_MODULE_0__(hostConfig);
if (true) {
    const foundDevTools = IceMiniappReconciler.injectIntoDevTools({
        bundleType: 1,
        version: '18.0.0',
        rendererPackageName: '@ice/miniapp-react-dom',
    });
    if (!foundDevTools) {
        // eslint-disable-next-line no-console
        console.info('%cDownload the React DevTools ' + 'for a better development experience: ' + 'https://reactjs.org/link/react-devtools', 'font-weight:bold');
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-react-dom@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-react-dom/esm/render.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-react-dom@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-react-dom/esm/render.js ***!
  \*******************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContainerMap: function() { return /* binding */ ContainerMap; },
/* harmony export */   createRoot: function() { return /* binding */ createRoot; },
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var _reconciler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reconciler.js */ "./node_modules/.pnpm/@ice+miniapp-react-dom@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-react-dom/esm/reconciler.js");

const ContainerMap = new WeakMap();
class Root {
    constructor(renderer, domContainer, isConcurrentRoot = false) {
        this.renderer = renderer;
        /** ConcurrentRoot & LegacyRoot: react-reconciler/src/ReactRootTags.js */
        this.internalRoot = renderer.createContainer(domContainer, isConcurrentRoot ? 1 : 0, false, null);
    }
    render(children, cb) {
        const { renderer, internalRoot } = this;
        renderer.updateContainer(children, internalRoot, null, cb);
        return renderer.getPublicRootInstance(internalRoot);
    }
    unmount(cb) {
        this.renderer.updateContainer(null, this.internalRoot, null, cb);
    }
}
function render(element, domContainer, cb) {
    const oldRoot = ContainerMap.get(domContainer);
    if (oldRoot != null) {
        return oldRoot.render(element, cb);
    }
    const root = new Root(_reconciler_js__WEBPACK_IMPORTED_MODULE_0__.IceMiniappReconciler, domContainer);
    ContainerMap.set(domContainer, root);
    return root.render(element, cb);
}
function createRoot(domContainer) {
    const oldRoot = ContainerMap.get(domContainer);
    if (oldRoot != null) {
        return oldRoot;
    }
    const root = new Root(_reconciler_js__WEBPACK_IMPORTED_MODULE_0__.IceMiniappReconciler, domContainer, true);
    ContainerMap.set(domContainer, root);
    return root;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/App.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/App.js ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _ice_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ice/runtime */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/index.js");
/* harmony import */ var _connect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connect.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/connect.js");



function App() {
    const { appConfig } = (0,_ice_runtime__WEBPACK_IMPORTED_MODULE_1__.usePublicAppContext)();
    const { strict, errorBoundary } = appConfig.app;
    const StrictMode = strict ? react__WEBPACK_IMPORTED_MODULE_0__.StrictMode : react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
    const ErrorBoundary = errorBoundary ? _ice_runtime__WEBPACK_IMPORTED_MODULE_1__.AppErrorBoundary : react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(StrictMode, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_connect_js__WEBPACK_IMPORTED_MODULE_2__.AppWrapper, null))));
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/Link.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/Link.js ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Link; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/history.js");


function matchRoute(url) {
    const [url_] = url.split('#');
    const [path, query] = url_.split('?');
    const miniappRoutes = (0,_history_js__WEBPACK_IMPORTED_MODULE_1__.getMiniappRoutes)();
    const matchedRoute = miniappRoutes.find(route => route.path === path);
    // / prefix is required in wechat miniprogram
    return query ? `/${matchedRoute.source}?${query}` : `/${matchedRoute.source}`;
}
function Link(props) {
    const url = matchRoute(props.to);
    // @ts-ignore
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("navigator", { url: url }, props.children);
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/connect.js":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/connect.js ***!
  \********************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppWrapper: function() { return /* binding */ AppWrapper; },
/* harmony export */   connectReactPage: function() { return /* binding */ connectReactPage; },
/* harmony export */   createMiniApp: function() { return /* binding */ createMiniApp; },
/* harmony export */   setReconciler: function() { return /* binding */ setReconciler; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/.pnpm/@ice+miniapp-react-dom@1.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-react-dom/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js");
/* harmony import */ var _routeContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routeContext.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/routeContext.js");
/* harmony import */ var _html_runtime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html/runtime.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/html/runtime.js");
/* harmony import */ var _react_meta_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./react-meta.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/react-meta.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/utils.js");








const pageKeyId = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.incrementId)();
function setReconciler() {
    _ice_shared__WEBPACK_IMPORTED_MODULE_2__.hooks.tap('modifyMpEvent', (event) => {
        event.type = event.type.replace(/-/g, '');
    });
    _ice_shared__WEBPACK_IMPORTED_MODULE_2__.hooks.tap('batchedEventUpdates', (cb) => {
        react_dom__WEBPACK_IMPORTED_MODULE_3__.unstable_batchedUpdates(cb);
    });
    _ice_shared__WEBPACK_IMPORTED_MODULE_2__.hooks.tap('mergePageInstance', (prev, next) => {
        if (!prev || !next)
            return;
        // 子组件使用 lifecycle hooks 注册了生命周期后，会存在 prev，里面是注册的生命周期回调。
        // prev 使用 Object.create(null) 创建，H5 的 fast-refresh 可能也会导致存在 prev，要排除这些意外产生的 prev
        if ('constructor' in prev)
            return;
        Object.keys(prev).forEach(item => {
            const prevList = prev[item];
            const nextList = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.ensureIsArray)(next[item]);
            next[item] = nextList.concat(prevList);
        });
    });
}
function connectReactPage(R, id) {
    return (Page, { routeData, routeConfig }) => {
        const isReactComponent = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isClassComponent)(R, Page);
        const inject = (node) => node && (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.injectPageInstance)(node, id);
        const refs = isReactComponent ? { ref: inject } : {
            forwardedRef: inject,
            // 兼容 react-redux 7.20.1+
            reactReduxForwardedRef: inject,
        };
        if (_react_meta_js__WEBPACK_IMPORTED_MODULE_5__.reactMeta.PageContext === _ice_shared__WEBPACK_IMPORTED_MODULE_2__.EMPTY_OBJ) {
            _react_meta_js__WEBPACK_IMPORTED_MODULE_5__.reactMeta.PageContext = R.createContext('');
        }
        const PageContextProvider = _react_meta_js__WEBPACK_IMPORTED_MODULE_5__.reactMeta.PageContext.Provider;
        return class PageWrapper extends R.Component {
            constructor() {
                super(...arguments);
                this.state = {
                    hasError: false,
                };
            }
            static getDerivedStateFromError(error) {
                triggerAppHook(this, 'onError', error.message + error.stack);
                return { hasError: true };
            }
            render() {
                const children = this.state.hasError
                    ? []
                    : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routeContext_js__WEBPACK_IMPORTED_MODULE_6__.DataProvider, { value: routeData },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routeContext_js__WEBPACK_IMPORTED_MODULE_6__.ConfigProvider, { value: routeConfig },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(PageContextProvider, { value: id },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(Page, { ...this.props, ...refs })))));
                return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)('root', { id }, children);
            }
        };
    };
}
class AppComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
        return this.props.children;
    }
}
let appWrapper;
class AppWrapper extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(props) {
        super(props);
        // run createElement() inside the render function to make sure that owner is right
        this.pages = [];
        this.elements = [];
        appWrapper = this;
    }
    mount(pageComponent, { id, routeData, routeConfig }, cb) {
        const pageWrapper = connectReactPage(react__WEBPACK_IMPORTED_MODULE_0__, id)(pageComponent, { routeData, routeConfig });
        const key = id + pageKeyId();
        const page = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(pageWrapper, { key, tid: id });
        this.pages.push(page);
        this.forceUpdate(cb);
    }
    unmount(id, cb) {
        const { elements } = this;
        const idx = elements.findIndex(item => item.props.tid === id);
        elements.splice(idx, 1);
        this.forceUpdate(cb);
    }
    render() {
        const { pages, elements } = this;
        while (pages.length > 0) {
            const page = pages.pop();
            elements.push(page());
        }
        const props = {};
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AppComponent, props, elements.slice());
    }
}
/**
 * 桥接小程序 App 构造器和 React 渲染流程
 * @param react 框架
 * @param dom 框架渲染器
 * @param config 入口组件配置 app.config.js 的内容
 * @returns 传递给 App 构造器的对象 obj ：App(obj)
 */
function createMiniApp(config, lifecycles) {
    setReconciler();
    (0,_html_runtime_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
    const [ON_LAUNCH, ON_SHOW, ON_HIDE, ON_ERROR, ON_PAGE_NOT_FOUND, ON_UNHANDLED_REJECTION] = _ice_shared__WEBPACK_IMPORTED_MODULE_2__.hooks.call('getMiniLifecycleImpl').app;
    const appObj = Object.create({
        render(cb) {
            appWrapper.forceUpdate(cb);
        },
        mount(component, { id, routeData, routeConfig }, cb) {
            appWrapper.mount(component, { id, routeData, routeConfig }, cb);
        },
        unmount(id, cb) {
            appWrapper.unmount(id, cb);
        },
    }, {
        config: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.setDefaultDescriptor)({
            configurable: true,
            value: config,
        }),
        [ON_LAUNCH]: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.setDefaultDescriptor)({
            value(options) {
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.setRouterParams)(options);
                triggerAppHook(this, 'onLaunch', options);
            },
        }),
        [ON_SHOW]: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.setDefaultDescriptor)({
            value(options) {
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.setRouterParams)(options);
                triggerAppHook(this, 'onShow', options);
            },
        }),
        [ON_HIDE]: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.setDefaultDescriptor)({
            value() {
                triggerAppHook(this, 'onHide');
            },
        }),
        [ON_ERROR]: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.setDefaultDescriptor)({
            value(error) {
                triggerAppHook(this, 'onError', error);
            },
        }),
        [ON_PAGE_NOT_FOUND]: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.setDefaultDescriptor)({
            value(res) {
                triggerAppHook(this, 'onPageNotFound', res);
            },
        }),
        [ON_UNHANDLED_REJECTION]: (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.setDefaultDescriptor)({
            value(res) {
                triggerAppHook(this, 'onUnhandledRejection', res);
            },
        }),
    });
    if (lifecycles.onShareAppMessage) {
        // Only works in ali miniapp
        appObj.onShareAppMessage = function (res) {
            return triggerAppHook(this, 'onShareAppMessage', res);
        };
    }
    _index_js__WEBPACK_IMPORTED_MODULE_1__.Current.app = appObj;
    return App(appObj);
}
function triggerAppHook(app, lifecycle, ...option) {
    const instance = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.getPageInstance)(_utils_js__WEBPACK_IMPORTED_MODULE_4__.HOOKS_APP_ID);
    if (instance) {
        const func = _ice_shared__WEBPACK_IMPORTED_MODULE_2__.hooks.call('getLifecycle', instance, lifecycle);
        if (Array.isArray(func)) {
            if (lifecycle === 'onShareAppMessage') {
                return func[0].apply(app, option);
            }
            func.forEach(cb => cb.apply(app, option));
        }
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/history.js":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/history.js ***!
  \********************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMiniappRoutes: function() { return /* binding */ getMiniappRoutes; },
/* harmony export */   routerHistory: function() { return /* binding */ routerHistory; },
/* harmony export */   setHistory: function() { return /* binding */ setHistory; }
/* harmony export */ });
/* harmony import */ var miniapp_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! miniapp-history */ "./node_modules/.pnpm/miniapp-history@0.1.7/node_modules/miniapp-history/es/index.js");

let routerHistory;
let miniappRoutes = [];
function generateRoutes(routes) {
    return routes.map(route => {
        const removedSlashRoute = route.replace(/^\//, ''); // Remove / at the beginning of the route
        return {
            path: removedSlashRoute === 'index' ? '/' : `/${removedSlashRoute}`.replace(/\/index$/, ''),
            source: `pages/${removedSlashRoute}`,
        };
    });
}
function setHistory(routes) {
    miniappRoutes = generateRoutes(routes);
    routerHistory = (0,miniapp_history__WEBPACK_IMPORTED_MODULE_0__.createMiniAppHistory)(miniappRoutes);
}
function getMiniappRoutes() {
    return miniappRoutes;
}



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/hooks.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/hooks.js ***!
  \******************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageLifecycleHooks: function() { return /* binding */ pageLifecycleHooks; },
/* harmony export */   pgeLifecycleArray: function() { return /* binding */ pgeLifecycleArray; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _dsl_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dsl/common.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dsl/common.js");
/* harmony import */ var _react_meta_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react-meta.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/react-meta.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/utils.js");




const createIceMiniappHook = (lifecycle) => {
    return (fn) => {
        const { R: React, PageContext } = _react_meta_js__WEBPACK_IMPORTED_MODULE_0__.reactMeta;
        const id = React.useContext(PageContext) || _utils_js__WEBPACK_IMPORTED_MODULE_1__.HOOKS_APP_ID;
        // hold fn ref and keep up to date
        const fnRef = React.useRef(fn);
        if (fnRef.current !== fn)
            fnRef.current = fn;
        React.useLayoutEffect(() => {
            let inst = (0,_dsl_common_js__WEBPACK_IMPORTED_MODULE_2__.getPageInstance)(id);
            let first = false;
            if (inst == null) {
                first = true;
                inst = Object.create(null);
            }
            inst = inst;
            // callback is immutable but inner function is up to date
            const callback = (...args) => fnRef.current(...args);
            if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_3__.isFunction)(inst[lifecycle])) {
                inst[lifecycle] = [inst[lifecycle], callback];
            }
            else {
                inst[lifecycle] = [
                    ...(inst[lifecycle] || []),
                    callback,
                ];
            }
            if (first) {
                (0,_dsl_common_js__WEBPACK_IMPORTED_MODULE_2__.injectPageInstance)(inst, id);
            }
            return () => {
                const inst = (0,_dsl_common_js__WEBPACK_IMPORTED_MODULE_2__.getPageInstance)(id);
                const list = inst[lifecycle];
                if (list === callback) {
                    inst[lifecycle] = undefined;
                }
                else if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_3__.isArray)(list)) {
                    inst[lifecycle] = list.filter(item => item !== callback);
                }
            };
        }, [id]);
    };
};
const pageLifecycle = _ice_shared__WEBPACK_IMPORTED_MODULE_3__.hooks.call('getMiniLifecycleImpl').page;
const pgeLifecycleArray = pageLifecycle.toString().split(',');
const pageLifecycleHooks = {};
pgeLifecycleArray.forEach(lifecycle => {
    pageLifecycleHooks[lifecycle] = createIceMiniappHook(lifecycle);
});



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/html/constant.js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/html/constant.js ***!
  \**************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockElements: function() { return /* binding */ blockElements; },
/* harmony export */   inlineElements: function() { return /* binding */ inlineElements; },
/* harmony export */   specialElements: function() { return /* binding */ specialElements; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");

function genAttrMapFnFromDir(dir) {
    const fn = function (key, value) {
        const lowerKey = key.toLowerCase();
        if (lowerKey in dir) {
            const res = dir[lowerKey];
            if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(res)) {
                key = res;
            }
            else {
                key = res[0];
                value = res[1][value] || value;
            }
        }
        return [key, value];
    };
    return fn;
}
const inlineElements = new Set(['i', 'abbr', 'select', 'acronym', 'small', 'bdi', 'kbd', 'strong', 'big', 'sub', 'sup', 'br', 'mark', 'meter', 'template', 'cite', 'object', 'time', 'code', 'output', 'u', 'data', 'picture', 'tt', 'datalist', 'var', 'dfn', 'del', 'q', 'em', 's', 'embed', 'samp', 'b']);
const blockElements = new Set(['body', 'svg', 'address', 'fieldset', 'li', 'span', 'article', 'figcaption', 'main', 'aside', 'figure', 'nav', 'blockquote', 'footer', 'ol', 'details', 'p', 'dialog', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre', 'dd', 'header', 'section', 'div', 'hgroup', 'table', 'dl', 'hr', 'ul', 'dt', 'view', 'view-block']);
const specialElements = new Map([
    ['slot', 'slot'],
    ['form', 'form'],
    ['iframe', 'web-view'],
    ['img', 'image'],
    ['audio', 'audio'],
    ['video', 'video'],
    ['canvas', 'canvas'],
    ['a', {
            mapName(props) {
                return !props.href || (/^javascript/.test(props.href)) ? 'view' : 'navigator';
            },
            mapNameCondition: ['href'],
            mapAttr: genAttrMapFnFromDir({
                href: 'url',
                target: ['openType', {
                        _blank: 'navigate',
                        _self: 'redirect',
                    }],
            }),
        }],
    ['input', {
            mapName(props) {
                if (props.type === 'checkbox') {
                    return 'checkbox';
                }
                else if (props.type === 'radio') {
                    return 'radio';
                }
                return 'input';
            },
            mapNameCondition: ['type'],
            mapAttr(key, value, props) {
                const htmlKey = key.toLowerCase();
                if (htmlKey === 'autofocus') {
                    key = 'focus';
                }
                else if (htmlKey === 'readonly') {
                    if (props.disabled === true) {
                        value = true;
                    }
                    key = 'disabled';
                }
                else if (htmlKey === 'type') {
                    if (value === 'password') {
                        key = 'password';
                        value = true;
                    }
                    else if (value === 'tel') {
                        value = 'number';
                    }
                }
                return [key, value];
            },
        }],
    ['label', {
            mapName: 'label',
            mapAttr: genAttrMapFnFromDir({
                htmlfor: 'for',
            }),
        }],
    ['textarea', {
            mapName: 'textarea',
            mapAttr: genAttrMapFnFromDir({
                autofocus: 'focus',
                readonly: 'disabled',
            }),
        }],
    ['progress', {
            mapName: 'progress',
            mapAttr(key, value, props) {
                if (key === 'value') {
                    const max = props.max || 1;
                    key = 'percent';
                    value = Math.round(value / max * 100);
                }
                return [key, value];
            },
        }],
    ['button', {
            mapName: 'button',
            mapAttr(key, value) {
                if (key === 'type' && (value === 'submit' || value === 'reset')) {
                    key = 'formType';
                }
                return [key, value];
            },
        }],
]);


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/html/runtime.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/html/runtime.js ***!
  \*************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ enableHtmlRuntime; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/html/utils.js");


function enableHtmlRuntime() {
    _ice_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('modifyHydrateData', data => {
        const nodeName = data[_ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.NodeName];
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isHtmlTags)(nodeName))
            return;
         true && (0,_ice_shared__WEBPACK_IMPORTED_MODULE_0__.warn)(data[_ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.NodeName] === 'select', '请使用 Picker 组件代替 <select>');
        // map nodeName
        data[_ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.NodeName] = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getMappedType)(nodeName, data);
        // map attr Key/Value
        const attrMapFn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getAttrMapFn)(nodeName);
        if (attrMapFn) {
            for (const key in data) {
                const value = data[key];
                const [mapKey, mapValue] = attrMapFn(key, value, data);
                if (key !== mapKey) {
                    delete data[key];
                    data[mapKey] = mapValue;
                }
                else if (value !== mapValue) {
                    data[key] = mapValue;
                }
            }
        }
        if (nodeName === 'br') {
            data[_ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Childnodes] = [{
                    [_ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.NodeName]: '#text',
                    v: '\n',
                }];
        }
        data[_ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Class] = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureHtmlClass)(nodeName, data[_ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Class]);
        data[_ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Style] = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureRect)(data, data[_ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Style]);
    });
    _ice_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('modifySetAttrPayload', (element, key, payload, componentsAlias) => {
        const { nodeName, _path, props } = element;
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isHtmlTags)(nodeName))
            return;
        // map nodeName
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.mapNameByContion)(nodeName, key, element, componentsAlias);
        const mapName = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getMappedType)(nodeName, props);
        const alias = componentsAlias[mapName];
        // map attr Key/Value
        const attrMapFn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getAttrMapFn)(nodeName);
        if (attrMapFn) {
            const { value } = payload;
            const [mapKey, mapValue] = attrMapFn(key, value, props);
            payload.path = `${_path}.${alias[mapKey] || mapKey}`;
            payload.value = mapValue;
        }
        if (key === _ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Class) {
            payload.value = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureHtmlClass)(nodeName, payload.value);
        }
        else if (key === _ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Style || key === 'width' || key === 'height') {
            payload.path = `${_path}.${_ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Style}`;
            payload.value = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureRect)(props, element.style.cssText);
        }
    });
    _ice_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('modifyRmAttrPayload', (element, key, payload, componentsAlias) => {
        const { nodeName, _path, props } = element;
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isHtmlTags)(nodeName))
            return;
        // map nodeName
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.mapNameByContion)(nodeName, key, element, componentsAlias);
        const mapName = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getMappedType)(nodeName, props);
        const alias = componentsAlias[mapName];
        // map attr Key/Value
        const attrMapFn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getAttrMapFn)(nodeName);
        if (attrMapFn) {
            const value = payload[key];
            const [mapKey] = attrMapFn(key, value, props);
            payload.path = `${_path}.${alias[mapKey] || mapKey}`;
        }
        if (key === _ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Class) {
            payload.value = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureHtmlClass)(nodeName, payload.value);
        }
        else if (key === _ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Style || key === 'width' || key === 'height') {
            payload.path = `${_path}.${_ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Style}`;
            payload.value = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureRect)(props, element.style.cssText);
        }
    });
    _ice_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('onAddEvent', (type, _handler, _options, node) => {
        node = node;
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isHtmlTags)(node.nodeName))
            return;
        if (type === 'click') {
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.defineMappedProp)(node.__handlers, type, 'tap');
        }
        else if (node.nodeName === 'input') {
            if (type === 'change') {
                if (node.props.type === 'checkbox' || node.props.type === 'radio') {
                    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.defineMappedProp)(node.__handlers, type, 'tap');
                }
                else {
                    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.defineMappedProp)(node.__handlers, type, 'input');
                }
            }
            else if (type === 'keypress') {
                (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.defineMappedProp)(node.__handlers, type, 'confirm');
            }
        }
    });
    _ice_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.tap('modifyIceEvent', (event, element) => {
        const { nodeName, props } = element;
        if (nodeName === 'input' && event.type === 'tap') {
            if (props.type === 'checkbox') {
                props.checked = !props.checked;
            }
            else if (props.type === 'radio' && !props.checked) {
                props.checked = true;
            }
            if (event.mpEvent) {
                const { currentTarget, target } = event.mpEvent;
                currentTarget.checked = props.checked;
                if (target.id === currentTarget.id) {
                    target.checked = props.checked;
                }
            }
        }
    });
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/html/utils.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/html/utils.js ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineMappedProp: function() { return /* binding */ defineMappedProp; },
/* harmony export */   ensureHtmlClass: function() { return /* binding */ ensureHtmlClass; },
/* harmony export */   ensureRect: function() { return /* binding */ ensureRect; },
/* harmony export */   getAttrMapFn: function() { return /* binding */ getAttrMapFn; },
/* harmony export */   getMappedType: function() { return /* binding */ getMappedType; },
/* harmony export */   isHtmlTags: function() { return /* binding */ isHtmlTags; },
/* harmony export */   mapNameByContion: function() { return /* binding */ mapNameByContion; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/html/constant.js");


function isHtmlTags(nodeName) {
    if (_constant_js__WEBPACK_IMPORTED_MODULE_0__.inlineElements.has(nodeName) || _constant_js__WEBPACK_IMPORTED_MODULE_0__.blockElements.has(nodeName) || _constant_js__WEBPACK_IMPORTED_MODULE_0__.specialElements.has(nodeName)) {
        return true;
    }
    return false;
}
function getMappedType(nodeName, rawProps) {
    if (_constant_js__WEBPACK_IMPORTED_MODULE_0__.inlineElements.has(nodeName)) {
        return 'text';
    }
    else if (_constant_js__WEBPACK_IMPORTED_MODULE_0__.specialElements.has(nodeName)) {
        const mapping = _constant_js__WEBPACK_IMPORTED_MODULE_0__.specialElements.get(nodeName);
        if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(mapping)) {
            return mapping;
        }
        const { mapName } = mapping;
        return (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(mapName) ? mapName(rawProps) : mapName;
    }
    else {
        return 'view';
    }
}
function getAttrMapFn(nodeName) {
    const mapping = _constant_js__WEBPACK_IMPORTED_MODULE_0__.specialElements.get(nodeName);
    if (!(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(mapping)) {
        return mapping === null || mapping === void 0 ? void 0 : mapping.mapAttr;
    }
}
function getMapNameByCondition(nodeName, attr, props) {
    const mapping = _constant_js__WEBPACK_IMPORTED_MODULE_0__.specialElements.get(nodeName);
    if (!mapping || (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(mapping))
        return;
    const { mapName, mapNameCondition } = mapping;
    if (!mapNameCondition)
        return;
    if (mapNameCondition.indexOf(attr) > -1 && !(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(mapName)) {
        return mapName(props);
    }
}
function mapNameByContion(nodeName, key, element, componentsAlias) {
    const mapName = getMapNameByCondition(nodeName, key, element.props);
    if (mapName) {
        const mapNameAlias = componentsAlias[mapName]._num;
        element.enqueueUpdate({
            path: `${element._path}.${_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.NodeName}`,
            value: mapNameAlias,
        });
    }
}
function ensureHtmlClass(tagName, className = '') {
    const classList = className.split(' ');
    const htmlClass = `h5-${tagName}`;
    if (classList.indexOf(htmlClass) === -1) {
        classList.unshift(htmlClass);
    }
    return classList.join(' ');
}
function ensureRect(props, style = '') {
    let cssText = style;
    const { width, height } = props;
    if (width) {
        cssText = `width: ${width};${cssText}`;
    }
    if (height) {
        cssText = `height: ${height};${cssText}`;
    }
    return cssText;
}
function defineMappedProp(obj, propName, mapName) {
    Object.defineProperty(obj, propName, {
        enumerable: true,
        configurable: true,
        get() {
            return obj[mapName];
        },
        set(val) {
            obj[mapName] = val;
        },
    });
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/index.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/index.js ***!
  \******************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Link: function() { return /* reexport safe */ _Link_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   defineAppConfig: function() { return /* reexport safe */ _ice_runtime__WEBPACK_IMPORTED_MODULE_1__.defineAppConfig; },
/* harmony export */   defineDataLoader: function() { return /* reexport safe */ _ice_runtime__WEBPACK_IMPORTED_MODULE_1__.defineDataLoader; },
/* harmony export */   getAppConfig: function() { return /* reexport safe */ _ice_runtime__WEBPACK_IMPORTED_MODULE_1__.getAppConfig; },
/* harmony export */   history: function() { return /* reexport safe */ _history_js__WEBPACK_IMPORTED_MODULE_5__.routerHistory; },
/* harmony export */   runClientApp: function() { return /* reexport safe */ _runClientApp_js__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   useAppData: function() { return /* reexport safe */ _ice_runtime__WEBPACK_IMPORTED_MODULE_1__.useAppData; },
/* harmony export */   useConfig: function() { return /* reexport safe */ _routeContext_js__WEBPACK_IMPORTED_MODULE_2__.useConfig; },
/* harmony export */   useData: function() { return /* reexport safe */ _routeContext_js__WEBPACK_IMPORTED_MODULE_2__.useData; },
/* harmony export */   usePageLifecycle: function() { return /* reexport safe */ _usePageLifecycle_js__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   useSearchParams: function() { return /* reexport safe */ _useSearchParams_js__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   useSuspenseData: function() { return /* reexport safe */ _suspense_js__WEBPACK_IMPORTED_MODULE_7__.useSuspenseData; },
/* harmony export */   withSuspense: function() { return /* reexport safe */ _suspense_js__WEBPACK_IMPORTED_MODULE_7__.withSuspense; }
/* harmony export */ });
/* harmony import */ var _ice_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ice/runtime */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/index.js");
/* harmony import */ var _runClientApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./runClientApp.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/runClientApp.js");
/* harmony import */ var _Link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/Link.js");
/* harmony import */ var _useSearchParams_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useSearchParams.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/useSearchParams.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/history.js");
/* harmony import */ var _usePageLifecycle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usePageLifecycle.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/usePageLifecycle.js");
/* harmony import */ var _routeContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routeContext.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/routeContext.js");
/* harmony import */ var _suspense_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./suspense.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/suspense.js");











/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/injectMiniappLifecycles.js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/injectMiniappLifecycles.js ***!
  \************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ injectMiniappLifecycles; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _dsl_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dsl/common.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dsl/common.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/utils.js");



const MINIAPP_LIFECYCLES = _ice_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('getMiniLifecycleImpl').app;
function injectMiniappLifecycles(miniappLifecycles) {
    let inst = (0,_dsl_common_js__WEBPACK_IMPORTED_MODULE_1__.getPageInstance)(_utils_js__WEBPACK_IMPORTED_MODULE_2__.HOOKS_APP_ID);
    if (!inst) {
        inst = Object.create(null);
        (0,_dsl_common_js__WEBPACK_IMPORTED_MODULE_1__.injectPageInstance)(inst, _utils_js__WEBPACK_IMPORTED_MODULE_2__.HOOKS_APP_ID);
    }
    Object.keys(miniappLifecycles).forEach(key => {
        if (MINIAPP_LIFECYCLES.includes(key)) {
            if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(inst[key])) {
                inst[key] = [inst[key], miniappLifecycles[key]];
            }
            else {
                inst[key] = [
                    ...(inst[key] || []),
                    miniappLifecycles[key],
                ];
            }
        }
    });
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/react-meta.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/react-meta.js ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reactMeta: function() { return /* binding */ reactMeta; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");


const reactMeta = {
    PageContext: _ice_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    R: react__WEBPACK_IMPORTED_MODULE_0__,
};


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/routeContext.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/routeContext.js ***!
  \*************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigProvider: function() { return /* binding */ ConfigProvider; },
/* harmony export */   DataProvider: function() { return /* binding */ DataProvider; },
/* harmony export */   useConfig: function() { return /* binding */ useConfig; },
/* harmony export */   useData: function() { return /* binding */ useData; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");

const DataContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
DataContext.displayName = 'Data';
function useData() {
    const value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataContext);
    return value;
}
const DataProvider = DataContext.Provider;
const ConfigContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
ConfigContext.displayName = 'Config';
function useConfig() {
    const value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ConfigContext);
    return value;
}
const ConfigProvider = ConfigContext.Provider;



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/runClientApp.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/runClientApp.js ***!
  \*************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ runClientApp; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _ice_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ice/runtime */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js");
/* harmony import */ var _emitter_emitter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../emitter/emitter.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/emitter/emitter.js");
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/constants/index.js");
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/App.js");
/* harmony import */ var _connect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/connect.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/history.js");
/* harmony import */ var _injectMiniappLifecycles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./injectMiniappLifecycles.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/injectMiniappLifecycles.js");
/* provided dependency */ var document = __webpack_require__(/*! @ice/miniapp-runtime */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js")["document"];









async function runClientApp(options) {
    const { app, runtimeModules, runtimeOptions } = options;
    const appConfig = (0,_ice_runtime__WEBPACK_IMPORTED_MODULE_1__.getAppConfig)(app);
    const appContext = {
        appExport: app,
        appConfig,
        appData: null,
    };
    const runtime = new _ice_runtime__WEBPACK_IMPORTED_MODULE_1__.Runtime(appContext, runtimeOptions);
    if (runtimeModules.statics && runtimeModules.statics.length > 0) {
        const promises = runtimeModules.statics.map(m => runtime.loadModule(m));
        if (promises.some(promise => promise && promise.then)) {
            console.warn('Miniapp is not support async static runtime modules');
        }
    }
    const { miniappManifest, miniappLifecycles = {} } = app;
    (0,_injectMiniappLifecycles_js__WEBPACK_IMPORTED_MODULE_2__["default"])(miniappLifecycles);
    // TODO: transform routes to pages in miniappManifest
    (0,_connect_js__WEBPACK_IMPORTED_MODULE_3__.createMiniApp)(miniappManifest, miniappLifecycles);
    const appData = await (0,_ice_runtime__WEBPACK_IMPORTED_MODULE_1__.getAppData)(app);
    (0,_history_js__WEBPACK_IMPORTED_MODULE_4__.setHistory)(miniappManifest.routes);
    runtime.setAppContext({ ...appContext, appData });
    if (runtimeModules.commons) {
        await Promise.all(runtimeModules.commons.map(m => runtime.loadModule(m)).filter(Boolean));
    }
    render(runtime);
    _index_js__WEBPACK_IMPORTED_MODULE_5__.Current.appDataReady = true;
    _emitter_emitter_js__WEBPACK_IMPORTED_MODULE_6__.eventCenter.trigger(_constants_index_js__WEBPACK_IMPORTED_MODULE_7__.APP_DATA_READY);
}
async function render(runtime) {
    const appContext = runtime.getAppContext();
    const render = runtime.getRender();
    const AppRuntimeProvider = runtime.composeAppProvider() || react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
    render(document.getElementById('ice-container'), react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ice_runtime__WEBPACK_IMPORTED_MODULE_1__.AppContextProvider, { value: appContext },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppRuntimeProvider, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App_js__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/suspense.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/suspense.js ***!
  \*********************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSuspenseData: function() { return /* binding */ useSuspenseData; },
/* harmony export */   withSuspense: function() { return /* binding */ withSuspense; }
/* harmony export */ });
function withSuspense(cpt) {
    return cpt;
}
// TODO: 小程序场景下仅为套壳函数，暂不支持 useSuspenseData
function useSuspenseData(request) {
    console.warn('miniapp-runtime does not support `useSuspenseData` api yet.');
    return request;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/usePageLifecycle.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/usePageLifecycle.js ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ usePageLifecycle; }
/* harmony export */ });
/* harmony import */ var _hooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/hooks.js");

function usePageLifecycle(lifecycle, callback) {
    if (_hooks_js__WEBPACK_IMPORTED_MODULE_0__.pgeLifecycleArray.includes(lifecycle)) {
        return _hooks_js__WEBPACK_IMPORTED_MODULE_0__.pageLifecycleHooks[lifecycle](callback);
    }
    return;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/useSearchParams.js":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/useSearchParams.js ***!
  \****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useSearchParams; }
/* harmony export */ });
/* harmony import */ var _current_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../current.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/current.js");

function useSearchParams() {
    const searchParams = _current_js__WEBPACK_IMPORTED_MODULE_0__.Current.router.params;
    const setSearchParams = () => {
        console.warn('setSearchParams is not implemented in miniapp');
    };
    return [
        searchParams,
        setSearchParams,
    ];
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/utils.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/app/utils.js ***!
  \******************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HOOKS_APP_ID: function() { return /* binding */ HOOKS_APP_ID; },
/* harmony export */   ensureIsArray: function() { return /* binding */ ensureIsArray; },
/* harmony export */   isClassComponent: function() { return /* binding */ isClassComponent; },
/* harmony export */   setDefaultDescriptor: function() { return /* binding */ setDefaultDescriptor; },
/* harmony export */   setRouterParams: function() { return /* binding */ setRouterParams; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _current_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../current.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/current.js");


const HOOKS_APP_ID = 'ice-miniapp';
function isClassComponent(R, component) {
    var _a;
    const { prototype } = component;
    // For React Redux
    if ((_a = component.displayName) === null || _a === void 0 ? void 0 : _a.includes('Connect'))
        return false;
    return ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(component.render) ||
        !!(prototype === null || prototype === void 0 ? void 0 : prototype.isReactComponent) ||
        prototype instanceof R.Component // compat for some others react-like library
    );
}
function ensureIsArray(item) {
    if (Array.isArray(item)) {
        return item;
    }
    else {
        return item ? [item] : [];
    }
}
/**
 * set writable, enumerable to true
 */
function setDefaultDescriptor(obj) {
    obj.writable = true;
    obj.enumerable = true;
    return obj;
}
/**
 * 设置入口的路由参数
 * @param options 小程序传入的参数
 */
function setRouterParams(options) {
    _current_js__WEBPACK_IMPORTED_MODULE_1__.Current.router = {
        params: options === null || options === void 0 ? void 0 : options.query,
        ...options,
    };
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/document.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/document.js ***!
  \*********************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   document: function() { return /* binding */ document; }
/* harmony export */ });
/* harmony import */ var _dom_document_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/document.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/document.js");
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/constants/index.js");
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/env.js");



/* eslint-disable no-inner-declarations */
function createDocument() {
    /**
       * <document>
       *   <html>
       *     <head></head>
       *     <body>
       *       <ice-container id="app" />
       *     </body>
       *   </html>
       * </document>
       */
    const doc = new _dom_document_js__WEBPACK_IMPORTED_MODULE_0__.Document();
    const documentCreateElement = doc.createElement.bind(doc);
    const html = documentCreateElement(_constants_index_js__WEBPACK_IMPORTED_MODULE_1__.HTML);
    const head = documentCreateElement(_constants_index_js__WEBPACK_IMPORTED_MODULE_1__.HEAD);
    const body = documentCreateElement(_constants_index_js__WEBPACK_IMPORTED_MODULE_1__.BODY);
    const iceContainer = documentCreateElement(_constants_index_js__WEBPACK_IMPORTED_MODULE_1__.ICE_CONTAINER);
    iceContainer.id = _constants_index_js__WEBPACK_IMPORTED_MODULE_1__.ICE_CONTAINER;
    doc.appendChild(html);
    html.appendChild(head);
    html.appendChild(body);
    body.appendChild(iceContainer);
    doc.documentElement = html;
    doc.head = head;
    doc.body = body;
    return doc;
}
const document = _env_js__WEBPACK_IMPORTED_MODULE_2__["default"].document = createDocument();



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/getComputedStyle.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/getComputedStyle.js ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComputedStyle: function() { return /* binding */ getComputedStyle; }
/* harmony export */ });
function getComputedStyle(element) {
    return element.style;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/navigator.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/navigator.js ***!
  \**********************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigator: function() { return /* binding */ navigator; }
/* harmony export */ });
const machine = 'Macintosh';
const arch = 'Intel Mac OS X 10_14_5';
const engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
const msg = `(${machine}; ${arch}) ${engine}`;
const navigator = {
    appCodeName: 'Mozilla',
    appName: 'Netscape',
    appVersion: `5.0 ${msg}`,
    cookieEnabled: true,
    mimeTypes: [],
    onLine: true,
    platform: 'MacIntel',
    plugins: [],
    product: 'ICE',
    productSub: '20030107',
    userAgent: `Mozilla/5.0 ${msg}`,
    vendor: 'Joyent',
    vendorSub: '',
};


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/raf.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/raf.js ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   caf: function() { return /* binding */ caf; },
/* harmony export */   now: function() { return /* binding */ now; },
/* harmony export */   raf: function() { return /* binding */ raf; }
/* harmony export */ });
// https://github.com/myrne/performance-now
let now;
(function () {
    let loadTime;
    if ((typeof performance !== 'undefined' && performance !== null) && performance.now) {
        now = () => performance.now();
    }
    else if (Date.now) {
        loadTime = Date.now();
        now = () => Date.now() - loadTime;
    }
    else {
        loadTime = new Date().getTime();
        now = () => new Date().getTime() - loadTime;
    }
})();
let lastTime = 0;
// https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
const raf = function (callback) {
    const _now = now();
    // First time will execute it immediately but barely noticeable and performance is gained.
    const nextTime = Math.max(lastTime + 16, _now);
    return setTimeout(() => { callback(lastTime = nextTime); }, nextTime - _now);
};
const caf = function (seed) {
    // fix https://github.com/NervJS/taro/issues/7749
    clearTimeout(seed);
};



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/window.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/window.js ***!
  \*******************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   window: function() { return /* binding */ window; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _emitter_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emitter/emitter.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/emitter/emitter.js");
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../env.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/env.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/getComputedStyle.js");
/* harmony import */ var _navigator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigator.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/navigator.js");
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raf.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/raf.js");






class Window extends _emitter_emitter_js__WEBPACK_IMPORTED_MODULE_0__.Events {
    constructor() {
        super();
        this.navigator = _navigator_js__WEBPACK_IMPORTED_MODULE_1__.navigator;
        this.requestAnimationFrame = _raf_js__WEBPACK_IMPORTED_MODULE_2__.raf;
        this.cancelAnimationFrame = _raf_js__WEBPACK_IMPORTED_MODULE_2__.caf;
        this.getComputedStyle = _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_3__.getComputedStyle;
        const globalProperties = [
            ...Object.getOwnPropertyNames(global || {}),
            ...Object.getOwnPropertySymbols(global || {}),
        ];
        globalProperties.forEach(property => {
            if (property === 'atob' || property === 'document')
                return;
            if (!Object.prototype.hasOwnProperty.call(this, property)) {
                this[property] = global[property];
            }
        });
        if (!this.Date) {
            this.Date = Date;
        }
    }
    get document() {
        return _env_js__WEBPACK_IMPORTED_MODULE_4__["default"].document;
    }
    addEventListener(event, callback) {
        if (!(0,_ice_shared__WEBPACK_IMPORTED_MODULE_5__.isString)(event))
            return;
        this.on(event, callback, null);
    }
    removeEventListener(event, callback) {
        if (!(0,_ice_shared__WEBPACK_IMPORTED_MODULE_5__.isString)(event))
            return;
        this.off(event, callback, null);
    }
    setTimeout(...args) {
        return setTimeout(...args);
    }
    clearTimeout(...args) {
        return clearTimeout(...args);
    }
}
const window = _env_js__WEBPACK_IMPORTED_MODULE_4__["default"].window = new Window();



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/constants/index.js":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/constants/index.js ***!
  \************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_DATA_READY: function() { return /* binding */ APP_DATA_READY; },
/* harmony export */   BEHAVIORS: function() { return /* binding */ BEHAVIORS; },
/* harmony export */   BODY: function() { return /* binding */ BODY; },
/* harmony export */   CATCHMOVE: function() { return /* binding */ CATCHMOVE; },
/* harmony export */   CATCH_VIEW: function() { return /* binding */ CATCH_VIEW; },
/* harmony export */   CHANGE: function() { return /* binding */ CHANGE; },
/* harmony export */   CLASS: function() { return /* binding */ CLASS; },
/* harmony export */   COMMENT: function() { return /* binding */ COMMENT; },
/* harmony export */   CONFIRM: function() { return /* binding */ CONFIRM; },
/* harmony export */   CURRENT_TARGET: function() { return /* binding */ CURRENT_TARGET; },
/* harmony export */   CUSTOM_WRAPPER: function() { return /* binding */ CUSTOM_WRAPPER; },
/* harmony export */   DATASET: function() { return /* binding */ DATASET; },
/* harmony export */   DATE: function() { return /* binding */ DATE; },
/* harmony export */   DOCUMENT_ELEMENT_NAME: function() { return /* binding */ DOCUMENT_ELEMENT_NAME; },
/* harmony export */   DOCUMENT_FRAGMENT: function() { return /* binding */ DOCUMENT_FRAGMENT; },
/* harmony export */   EXTERNAL_CLASSES: function() { return /* binding */ EXTERNAL_CLASSES; },
/* harmony export */   FOCUS: function() { return /* binding */ FOCUS; },
/* harmony export */   HEAD: function() { return /* binding */ HEAD; },
/* harmony export */   HTML: function() { return /* binding */ HTML; },
/* harmony export */   ICE_CONTAINER: function() { return /* binding */ ICE_CONTAINER; },
/* harmony export */   ID: function() { return /* binding */ ID; },
/* harmony export */   INPUT: function() { return /* binding */ INPUT; },
/* harmony export */   KEY_CODE: function() { return /* binding */ KEY_CODE; },
/* harmony export */   OBJECT: function() { return /* binding */ OBJECT; },
/* harmony export */   ON_HIDE: function() { return /* binding */ ON_HIDE; },
/* harmony export */   ON_LOAD: function() { return /* binding */ ON_LOAD; },
/* harmony export */   ON_READY: function() { return /* binding */ ON_READY; },
/* harmony export */   ON_SHOW: function() { return /* binding */ ON_SHOW; },
/* harmony export */   OPTIONS: function() { return /* binding */ OPTIONS; },
/* harmony export */   PAGE_INIT: function() { return /* binding */ PAGE_INIT; },
/* harmony export */   PROPERTY_THRESHOLD: function() { return /* binding */ PROPERTY_THRESHOLD; },
/* harmony export */   PROPS: function() { return /* binding */ PROPS; },
/* harmony export */   PURE_VIEW: function() { return /* binding */ PURE_VIEW; },
/* harmony export */   ROOT_STR: function() { return /* binding */ ROOT_STR; },
/* harmony export */   SET_DATA: function() { return /* binding */ SET_DATA; },
/* harmony export */   SET_TIMEOUT: function() { return /* binding */ SET_TIMEOUT; },
/* harmony export */   STATIC_VIEW: function() { return /* binding */ STATIC_VIEW; },
/* harmony export */   STYLE: function() { return /* binding */ STYLE; },
/* harmony export */   TARGET: function() { return /* binding */ TARGET; },
/* harmony export */   TIME_STAMP: function() { return /* binding */ TIME_STAMP; },
/* harmony export */   TOUCHMOVE: function() { return /* binding */ TOUCHMOVE; },
/* harmony export */   TYPE: function() { return /* binding */ TYPE; },
/* harmony export */   UID: function() { return /* binding */ UID; },
/* harmony export */   VALUE: function() { return /* binding */ VALUE; },
/* harmony export */   VIEW: function() { return /* binding */ VIEW; }
/* harmony export */ });
const PROPERTY_THRESHOLD = 2046;
const SET_DATA = '小程序 setData';
const PAGE_INIT = '页面初始化';
const ROOT_STR = 'root';
const HTML = 'html';
const HEAD = 'head';
const BODY = 'body';
const ICE_CONTAINER = 'ice-container';
const DOCUMENT_ELEMENT_NAME = '#document';
const DOCUMENT_FRAGMENT = 'document-fragment';
const ID = 'id';
const UID = 'uid';
const CLASS = 'class';
const STYLE = 'style';
const FOCUS = 'focus';
const VIEW = 'view';
const STATIC_VIEW = 'static-view';
const PURE_VIEW = 'pure-view';
const PROPS = 'props';
const DATASET = 'dataset';
const OBJECT = 'object';
const VALUE = 'value';
const INPUT = 'input';
const CHANGE = 'change';
const CUSTOM_WRAPPER = 'custom-wrapper';
const TARGET = 'target';
const CURRENT_TARGET = 'currentTarget';
const TYPE = 'type';
const CONFIRM = 'confirm';
const TIME_STAMP = 'timeStamp';
const KEY_CODE = 'keyCode';
const TOUCHMOVE = 'touchmove';
const DATE = 'Date';
const SET_TIMEOUT = 'setTimeout';
const CATCHMOVE = 'catchMove';
const CATCH_VIEW = 'catch-view';
const COMMENT = 'comment';
const ON_LOAD = 'onLoad';
const ON_READY = 'onReady';
const ON_SHOW = 'onShow';
const ON_HIDE = 'onHide';
const OPTIONS = 'options';
const EXTERNAL_CLASSES = 'externalClasses';
const BEHAVIORS = 'behaviors';
const APP_DATA_READY = 'appReady';


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/current.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/current.js ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Current: function() { return /* binding */ Current; },
/* harmony export */   getCurrentInstance: function() { return /* binding */ getCurrentInstance; }
/* harmony export */ });
const Current = {
    app: null,
    router: null,
    page: null,
    appDataReady: false,
};
const getCurrentInstance = () => Current;


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom-external/mutation-observer/implements.js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom-external/mutation-observer/implements.js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MutationObserverImpl: function() { return /* binding */ MutationObserverImpl; },
/* harmony export */   recordMutation: function() { return /* binding */ recordMutation; }
/* harmony export */ });
const observers = [];
/**
 * The MutationObserver provides the ability
 * to watch for changes being made to the DOM tree.
 * It will invoke a specified callback function
 * when DOM changes occur.
 * @see https://dom.spec.whatwg.org/#mutationobserver
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
class MutationObserverImpl {
    constructor(callback) {
        this.records = [];
        this.callback = callback;
    }
    /**
     * Configures the MutationObserver
     * to begin receiving notifications
     * through its callback function
     * when DOM changes matching the given options occur.
     *
     * Options matching is to be implemented.
     */
    observe(target, options) {
        this.disconnect();
        this.target = target;
        this.options = options || {};
        observers.push(this);
    }
    /**
     * Stop the MutationObserver instance
     * from receiving further notifications
     * until and unless observe() is called again.
     */
    disconnect() {
        this.target = null;
        const index = observers.indexOf(this);
        if (index >= 0) {
            observers.splice(index, 1);
        }
    }
    /**
     * Removes all pending notifications
     * from the MutationObserver's notification queue
     * and returns them in a new Array of MutationRecord objects.
     */
    takeRecords() {
        return this.records.splice(0, this.records.length);
    }
}
/** Match two Nodes by sid. */
const sidMatches = (observerTarget, target) => {
    return !!observerTarget && observerTarget.sid === (target === null || target === void 0 ? void 0 : target.sid);
};
const isConcerned = (record, options) => {
    const { characterData, characterDataOldValue, attributes, attributeOldValue, childList } = options;
    switch (record.type) {
        case "characterData" /* MutationRecordType.CHARACTER_DATA */:
            if (characterData) {
                if (!characterDataOldValue)
                    record.oldValue = null;
                return true;
            }
            return false;
        case "attributes" /* MutationRecordType.ATTRIBUTES */:
            if (attributes) {
                if (!attributeOldValue)
                    record.oldValue = null;
                return true;
            }
            return false;
        case "childList" /* MutationRecordType.CHILD_LIST */:
            if (childList) {
                return true;
            }
            return false;
    }
};
let pendingMuatations = false;
function logMutation(observer, record) {
    observer.records.push(record);
    if (!pendingMuatations) {
        pendingMuatations = true;
        Promise
            .resolve()
            .then(() => {
            pendingMuatations = false;
            observers.forEach(observer => {
                return observer.callback(observer.takeRecords());
            });
        });
    }
}
function recordMutation(record) {
    observers.forEach(observer => {
        const { options } = observer;
        for (let t = record.target; t; t = t.parentNode) {
            if (sidMatches(observer.target, t) && isConcerned(record, options)) {
                logMutation(observer, record);
                break;
            }
            if (!options.subtree)
                break;
        }
    });
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom-external/mutation-observer/index.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom-external/mutation-observer/index.js ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MutationObserver: function() { return /* binding */ MutationObserver; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _implements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./implements.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom-external/mutation-observer/implements.js");


class MutationObserver {
    constructor() {
        this.core = {
            observe: _ice_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
            disconnect: _ice_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
            takeRecords: _ice_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
        };
    }
    observe(...args) {
        this.core.observe(...args);
    }
    disconnect() {
        this.core.disconnect();
    }
    takeRecords() {
        return this.core.takeRecords();
    }
    static record(record) {
        (0,_implements_js__WEBPACK_IMPORTED_MODULE_1__.recordMutation)(record);
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/class-list.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/class-list.js ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassList: function() { return /* binding */ ClassList; }
/* harmony export */ });
class ClassList extends Set {
    constructor(className, el) {
        super();
        className.trim().split(/\s+/).forEach(super.add.bind(this));
        this.el = el;
    }
    get value() {
        return [...this].filter(v => v !== '').join(' ');
    }
    add(s) {
        super.add(s);
        this._update();
        return this;
    }
    get length() {
        return this.size;
    }
    remove(s) {
        super.delete(s);
        this._update();
    }
    toggle(s) {
        if (super.has(s)) {
            super.delete(s);
        }
        else {
            super.add(s);
        }
        this._update();
    }
    replace(s1, s2) {
        super.delete(s1);
        super.add(s2);
        this._update();
    }
    contains(s) {
        return super.has(s);
    }
    toString() {
        return this.value;
    }
    _update() {
        this.el.className = this.value;
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/document.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/document.js ***!
  \*********************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Document: function() { return /* binding */ Document; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/constants/index.js");
/* harmony import */ var _dom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/element.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/element.js");
/* harmony import */ var _dom_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/event.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/event.js");
/* harmony import */ var _dom_event_source_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dom/event-source.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/event-source.js");
/* harmony import */ var _dom_form_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/form.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/form.js");
/* harmony import */ var _dom_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/root.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/root.js");
/* harmony import */ var _dom_text_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom/text.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/text.js");
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../env.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/env.js");









class Document extends _dom_element_js__WEBPACK_IMPORTED_MODULE_0__.Element {
    constructor() {
        super();
        this.createEvent = _dom_event_js__WEBPACK_IMPORTED_MODULE_1__.createEvent;
        this.nodeType = 9 /* NodeType.DOCUMENT_NODE */;
        this.nodeName = _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT_ELEMENT_NAME;
    }
    createElement(type) {
        if (type === _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.ROOT_STR) {
            return new _dom_root_js__WEBPACK_IMPORTED_MODULE_3__.RootElement();
        }
        const element = _ice_shared__WEBPACK_IMPORTED_MODULE_4__.controlledComponent.has(type)
            ? new _dom_form_js__WEBPACK_IMPORTED_MODULE_5__.FormElement()
            : new _dom_element_js__WEBPACK_IMPORTED_MODULE_0__.Element();
        element.nodeName = type;
        element.tagName = type.toUpperCase();
        return element;
    }
    // an ugly fake createElementNS to deal with @vue/runtime-dom's
    // support mounting app to svg container since vue@3.0.8
    createElementNS(_svgNS, type) {
        return this.createElement(type);
    }
    createTextNode(text) {
        return new _dom_text_js__WEBPACK_IMPORTED_MODULE_6__.Text(text);
    }
    getElementById(id) {
        const el = _dom_event_source_js__WEBPACK_IMPORTED_MODULE_7__.eventSource.get(id);
        return (0,_ice_shared__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(el) ? null : el;
    }
    querySelector(query) {
        // 为了 Vue3 的乞丐版实现
        if (/^#/.test(query)) {
            return this.getElementById(query.slice(1));
        }
        return null;
    }
    querySelectorAll() {
        // fake hack
        return [];
    }
    // @TODO: @PERF: 在 hydrate 移除掉空的 node
    createComment() {
        const textnode = new _dom_text_js__WEBPACK_IMPORTED_MODULE_6__.Text('');
        textnode.nodeName = _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT;
        return textnode;
    }
    get defaultView() {
        return _env_js__WEBPACK_IMPORTED_MODULE_8__["default"].window;
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/element.js":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/element.js ***!
  \********************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Element: function() { return /* binding */ Element; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/constants/index.js");
/* harmony import */ var _dom_external_mutation_observer_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-external/mutation-observer/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom-external/mutation-observer/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/utils/index.js");
/* harmony import */ var _class_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class-list.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/class-list.js");
/* harmony import */ var _event_source_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-source.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/event-source.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/node.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/style.js");
/* harmony import */ var _tree_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tree.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/tree.js");









class Element extends _node_js__WEBPACK_IMPORTED_MODULE_0__.Node {
    constructor() {
        super();
        this.props = {};
        this.dataset = _ice_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        this.nodeType = 1 /* NodeType.ELEMENT_NODE */;
        this.style = new _style_js__WEBPACK_IMPORTED_MODULE_2__.Style(this);
        _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('patchElement', this);
    }
    _stopPropagation(event) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let target = this;
        // eslint-disable-next-line no-cond-assign
        while ((target = target.parentNode)) {
            const listeners = target.__handlers[event.type];
            if (!(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(listeners)) {
                continue;
            }
            for (let i = listeners.length; i--;) {
                const l = listeners[i];
                l._stop = true;
            }
        }
    }
    get id() {
        return this.getAttribute(_constants_index_js__WEBPACK_IMPORTED_MODULE_3__.ID);
    }
    set id(val) {
        this.setAttribute(_constants_index_js__WEBPACK_IMPORTED_MODULE_3__.ID, val);
    }
    get className() {
        return this.getAttribute(_constants_index_js__WEBPACK_IMPORTED_MODULE_3__.CLASS) || '';
    }
    set className(val) {
        this.setAttribute(_constants_index_js__WEBPACK_IMPORTED_MODULE_3__.CLASS, val);
    }
    get cssText() {
        return this.getAttribute(_constants_index_js__WEBPACK_IMPORTED_MODULE_3__.STYLE) || '';
    }
    get classList() {
        return new _class_list_js__WEBPACK_IMPORTED_MODULE_4__.ClassList(this.className, this);
    }
    get children() {
        return this.childNodes.filter(_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.isElement);
    }
    get attributes() {
        const { props } = this;
        const propKeys = Object.keys(props);
        const style = this.style.cssText;
        const attrs = propKeys.map(key => ({ name: key, value: props[key] }));
        return attrs.concat(style ? { name: _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.STYLE, value: style } : []);
    }
    get textContent() {
        let text = '';
        const { childNodes } = this;
        for (let i = 0; i < childNodes.length; i++) {
            text += childNodes[i].textContent;
        }
        return text;
    }
    set textContent(text) {
        super.textContent = text;
    }
    hasAttribute(qualifiedName) {
        return !(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(this.props[qualifiedName]);
    }
    hasAttributes() {
        return this.attributes.length > 0;
    }
    get focus() {
        return function () {
            this.setAttribute(_constants_index_js__WEBPACK_IMPORTED_MODULE_3__.FOCUS, true);
        };
    }
    // 兼容 Vue3，详情请见：https://github.com/NervJS/taro/issues/10579
    set focus(value) {
        this.setAttribute(_constants_index_js__WEBPACK_IMPORTED_MODULE_3__.FOCUS, value);
    }
    blur() {
        this.setAttribute(_constants_index_js__WEBPACK_IMPORTED_MODULE_3__.FOCUS, false);
    }
    setAttribute(qualifiedName, value) {
         true && (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.warn)((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value) && value.length > _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.PROPERTY_THRESHOLD, `元素 ${this.nodeName} 的 ${qualifiedName} 属性值数据量过大，可能会影响渲染性能。考虑在 CSS 中使用 base64。`);
        const isPureView = this.nodeName === _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.VIEW && !(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.isHasExtractProp)(this) && !this.isAnyEventBinded();
        if (qualifiedName !== _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.STYLE) {
            _dom_external_mutation_observer_index_js__WEBPACK_IMPORTED_MODULE_6__.MutationObserver.record({
                target: this,
                type: "attributes" /* MutationRecordType.ATTRIBUTES */,
                attributeName: qualifiedName,
                oldValue: this.getAttribute(qualifiedName),
            });
        }
        switch (qualifiedName) {
            case _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.STYLE:
                this.style.cssText = value;
                break;
            case _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.ID:
                if (this.uid !== this.sid) {
                    // eventSource[sid] 永远保留，直到组件卸载
                    // eventSource[uid] 可变
                    _event_source_js__WEBPACK_IMPORTED_MODULE_7__.eventSource.delete(this.uid);
                }
                value = String(value);
                this.props[qualifiedName] = this.uid = value;
                _event_source_js__WEBPACK_IMPORTED_MODULE_7__.eventSource.set(value, this);
                break;
            default:
                this.props[qualifiedName] = value;
                if (qualifiedName.startsWith('data-')) {
                    if (this.dataset === _ice_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
                        this.dataset = Object.create(null);
                    }
                    this.dataset[(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(qualifiedName.replace(/^data-/, ''))] = value;
                }
                break;
        }
        // Serialization
        if (!this._root)
            return;
        const componentsAlias = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.getComponentsAlias)();
        const _alias = componentsAlias[this.nodeName];
        const viewAlias = componentsAlias[_constants_index_js__WEBPACK_IMPORTED_MODULE_3__.VIEW]._num;
        const staticViewAlias = componentsAlias[_constants_index_js__WEBPACK_IMPORTED_MODULE_3__.STATIC_VIEW]._num;
        const catchViewAlias = componentsAlias[_constants_index_js__WEBPACK_IMPORTED_MODULE_3__.CATCH_VIEW]._num;
        const { _path } = this;
        qualifiedName = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.shortcutAttr)(qualifiedName);
        const payload = {
            path: `${_path}.${(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(qualifiedName)}`,
            value: (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) ? () => value : value,
        };
        _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('modifySetAttrPayload', this, qualifiedName, payload, componentsAlias);
        if (_alias) {
            const qualifiedNameAlias = _alias[qualifiedName] || qualifiedName;
            payload.path = `${_path}.${(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(qualifiedNameAlias)}`;
        }
        this.enqueueUpdate(payload);
        if (this.nodeName === _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.VIEW) {
            if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(qualifiedName) === _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.CATCHMOVE) {
                // catchMove = true: catch-view
                // catchMove = false: view or static-view
                this.enqueueUpdate({
                    path: `${_path}.${_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.NodeName}`,
                    value: value ? catchViewAlias : (this.isAnyEventBinded() ? viewAlias : staticViewAlias),
                });
            }
            else if (isPureView && (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.isHasExtractProp)(this)) {
                // pure-view => static-view
                this.enqueueUpdate({
                    path: `${_path}.${_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.NodeName}`,
                    value: staticViewAlias,
                });
            }
        }
    }
    removeAttribute(qualifiedName) {
        const isStaticView = this.nodeName === _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.VIEW && (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.isHasExtractProp)(this) && !this.isAnyEventBinded();
        _dom_external_mutation_observer_index_js__WEBPACK_IMPORTED_MODULE_6__.MutationObserver.record({
            target: this,
            type: "attributes" /* MutationRecordType.ATTRIBUTES */,
            attributeName: qualifiedName,
            oldValue: this.getAttribute(qualifiedName),
        });
        if (qualifiedName === _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.STYLE) {
            this.style.cssText = '';
        }
        else {
            const isInterrupt = _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('onRemoveAttribute', this, qualifiedName);
            if (isInterrupt) {
                return;
            }
            if (!Object.prototype.hasOwnProperty.call(this.props, qualifiedName)) {
                return;
            }
            delete this.props[qualifiedName];
        }
        // Serialization
        if (!this._root)
            return;
        const componentsAlias = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.getComponentsAlias)();
        const _alias = componentsAlias[this.nodeName];
        const viewAlias = componentsAlias[_constants_index_js__WEBPACK_IMPORTED_MODULE_3__.VIEW]._num;
        const staticViewAlias = componentsAlias[_constants_index_js__WEBPACK_IMPORTED_MODULE_3__.STATIC_VIEW]._num;
        const pureViewAlias = componentsAlias[_constants_index_js__WEBPACK_IMPORTED_MODULE_3__.PURE_VIEW]._num;
        const { _path } = this;
        qualifiedName = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.shortcutAttr)(qualifiedName);
        const payload = {
            path: `${_path}.${(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(qualifiedName)}`,
            value: '',
        };
        _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('modifyRmAttrPayload', this, qualifiedName, payload, componentsAlias);
        if (_alias) {
            const qualifiedNameAlias = _alias[qualifiedName] || qualifiedName;
            payload.path = `${_path}.${(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(qualifiedNameAlias)}`;
        }
        this.enqueueUpdate(payload);
        if (this.nodeName === _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.VIEW) {
            if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(qualifiedName) === _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.CATCHMOVE) {
                // catch-view => view or static-view or pure-view
                this.enqueueUpdate({
                    path: `${_path}.${_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.NodeName}`,
                    value: this.isAnyEventBinded() ? viewAlias : ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.isHasExtractProp)(this) ? staticViewAlias : pureViewAlias),
                });
            }
            else if (isStaticView && !(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.isHasExtractProp)(this)) {
                // static-view => pure-view
                this.enqueueUpdate({
                    path: `${_path}.${_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.NodeName}`,
                    value: pureViewAlias,
                });
            }
        }
    }
    getAttribute(qualifiedName) {
        const attr = qualifiedName === _constants_index_js__WEBPACK_IMPORTED_MODULE_3__.STYLE ? this.style.cssText : this.props[qualifiedName];
        return attr !== null && attr !== void 0 ? attr : '';
    }
    getElementsByTagName(tagName) {
        return (0,_tree_js__WEBPACK_IMPORTED_MODULE_8__.treeToArray)(this, (el) => {
            return el.nodeName === tagName || (tagName === '*' && this !== el);
        });
    }
    getElementsByClassName(className) {
        return (0,_tree_js__WEBPACK_IMPORTED_MODULE_8__.treeToArray)(this, (el) => {
            const { classList } = el;
            const classNames = className.trim().split(/\s+/);
            return classNames.every(c => classList.has(c));
        });
    }
    dispatchEvent(event) {
        const { cancelable } = event;
        const listeners = this.__handlers[event.type];
        if (!(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(listeners)) {
            return false;
        }
        for (let i = listeners.length; i--;) {
            const listener = listeners[i];
            let result;
            if (listener._stop) {
                listener._stop = false;
            }
            else {
                _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('modifyDispatchEvent', event, this);
                result = listener.call(this, event);
            }
            if ((result === false || event._end) && cancelable) {
                event.defaultPrevented = true;
            }
            if (event._end && event._stop) {
                break;
            }
        }
        if (event._stop) {
            this._stopPropagation(event);
        }
        else {
            event._stop = true;
        }
        return listeners != null;
    }
    addEventListener(type, handler, options) {
        const name = this.nodeName;
        const SPECIAL_NODES = _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('getSpecialNodes');
        let sideEffect = true;
        if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(options) && options.sideEffect === false) {
            sideEffect = false;
            delete options.sideEffect;
        }
        if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
            const componentsAlias = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.getComponentsAlias)();
            const alias = componentsAlias[name]._num;
            this.enqueueUpdate({
                path: `${this._path}.${_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.NodeName}`,
                value: alias,
            });
        }
        super.addEventListener(type, handler, options);
    }
    removeEventListener(type, handler, sideEffect = true) {
        super.removeEventListener(type, handler);
        const name = this.nodeName;
        const SPECIAL_NODES = _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('getSpecialNodes');
        if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
            const componentsAlias = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.getComponentsAlias)();
            const value = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.isHasExtractProp)(this) ? `static-${name}` : `pure-${name}`;
            const valueAlias = componentsAlias[value]._num;
            this.enqueueUpdate({
                path: `${this._path}.${_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.NodeName}`,
                value: valueAlias,
            });
        }
    }
    static extend(methodName, options) {
        (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.extend)(Element, methodName, options);
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/event-source.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/event-source.js ***!
  \*************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventSource: function() { return /* binding */ eventSource; }
/* harmony export */ });
class EventSource extends Map {
    static create() {
        const inst = new Map();
        inst['__proto__'] = EventSource.prototype;
        return inst;
    }
    removeNode(child) {
        const { sid, uid } = child;
        this.delete(sid);
        if (uid !== sid && uid)
            this.delete(uid);
    }
    removeNodeTree(child) {
        this.removeNode(child);
        const { childNodes } = child;
        childNodes.forEach(node => this.removeNodeTree(node));
    }
}
const eventSource = EventSource.create();


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/event-target.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/event-target.js ***!
  \*************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventTarget: function() { return /* binding */ EventTarget; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");

class EventTarget {
    constructor() {
        this.__handlers = {};
    }
    addEventListener(type, handler, options) {
        type = type.toLowerCase();
        _ice_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('onAddEvent', type, handler, options, this);
        if (type === 'regionchange') {
            // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
            this.addEventListener('begin', handler, options);
            this.addEventListener('end', handler, options);
            return;
        }
        let isCapture = Boolean(options);
        let isOnce = false;
        if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(options)) {
            isCapture = Boolean(options.capture);
            isOnce = Boolean(options.once);
        }
        if (isOnce) {
            const wrapper = function (...args) {
                handler.apply(this, args); // this 指向 Element
                this.removeEventListener(type, wrapper);
            };
            this.addEventListener(type, wrapper, {
                ...options,
                once: false,
            });
            return;
        }
         true && (0,_ice_shared__WEBPACK_IMPORTED_MODULE_0__.warn)(isCapture, 'ICE Miniapp 暂未实现 event 的 capture 特性。');
        // 某些框架，如 PReact 有委托的机制，handler 始终是同一个函数
        // 这会导致多层停止冒泡失败：view -> view(handler.stop = false) -> view(handler.stop = true)
        // 这样解决：view -> view(handlerA.stop = false) -> view(handlerB.stop = false)
        // 因此每次绑定事件都新建一个函数，如果带来了性能问题，可以把这段逻辑抽取到 PReact 插件中。
        const oldHandler = handler;
        handler = function (...args) {
            oldHandler.apply(this, args); // this 指向 Element
        };
        handler.oldHandler = oldHandler;
        const handlers = this.__handlers[type];
        if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(handlers)) {
            handlers.push(handler);
        }
        else {
            this.__handlers[type] = [handler];
        }
    }
    removeEventListener(type, handler) {
        type = type.toLowerCase();
        if (type === 'regionchange') {
            // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
            this.removeEventListener('begin', handler);
            this.removeEventListener('end', handler);
            return;
        }
        if (!handler) {
            return;
        }
        const handlers = this.__handlers[type];
        if (!(0,_ice_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(handlers)) {
            return;
        }
        const index = handlers.findIndex(item => {
            if (item === handler || item.oldHandler === handler) {
                return true;
            }
            return;
        });
         true && (0,_ice_shared__WEBPACK_IMPORTED_MODULE_0__.warn)(index === -1, `事件: '${type}' 没有注册在 DOM 中，因此不会被移除。`);
        handlers.splice(index, 1);
    }
    isAnyEventBinded() {
        const handlers = this.__handlers;
        const isAnyEventBinded = Object.keys(handlers).find(key => handlers[key].length);
        return Boolean(isAnyEventBinded);
    }
    triggerEventListenerInternal(type, args) {
        type = type.toLowerCase();
        const handlers = this.__handlers[type];
        if (!(0,_ice_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(handlers)) {
            return;
        }
        for (const handler of handlers) {
            handler(...args);
        }
    }
    getListenerNames() {
        const handlers = this.__handlers;
        return Object.keys(handlers).filter(key => handlers[key].length);
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/event.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/event.js ***!
  \******************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Event: function() { return /* binding */ Event; },
/* harmony export */   bindEventHandlersForThirdComponentNode: function() { return /* binding */ bindEventHandlersForThirdComponentNode; },
/* harmony export */   createEvent: function() { return /* binding */ createEvent; },
/* harmony export */   createEventHandlerForThirdComponent: function() { return /* binding */ createEventHandlerForThirdComponent; },
/* harmony export */   eventHandler: function() { return /* binding */ eventHandler; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/constants/index.js");
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/env.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/utils/index.js");




// 事件对象。以 Web 标准的事件对象为基础，加入小程序事件对象中携带的部分信息，并模拟实现事件冒泡。
class Event {
    constructor(type, opts, event) {
        this._stop = false;
        this._end = false;
        this.defaultPrevented = false;
        // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
        // here use hi-res timestamp
        this.timeStamp = Date.now();
        this.type = type.toLowerCase();
        this.mpEvent = event;
        this.bubbles = Boolean(opts && opts.bubbles);
        this.cancelable = Boolean(opts && opts.cancelable);
    }
    stopPropagation() {
        this._stop = true;
    }
    stopImmediatePropagation() {
        this._end = this._stop = true;
    }
    preventDefault() {
        this.defaultPrevented = true;
    }
    get target() {
        var _a, _b;
        const { cacheTarget } = this;
        if (cacheTarget) {
            return cacheTarget;
        }
        else {
            const target = Object.create(((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target) || null);
            const element = _env_js__WEBPACK_IMPORTED_MODULE_0__["default"].document.getElementById(target.id);
            target.dataset = element === null ? _ice_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ : element.dataset;
            for (const key in (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.detail) {
                target[key] = this.mpEvent.detail[key];
            }
            this.cacheTarget = target;
            return target;
        }
    }
    get currentTarget() {
        var _a, _b, _c, _d;
        const { cacheCurrentTarget } = this;
        if (cacheCurrentTarget) {
            return cacheCurrentTarget;
        }
        else {
            const doc = _env_js__WEBPACK_IMPORTED_MODULE_0__["default"].document;
            const currentTarget = Object.create(((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget) || null);
            const element = doc.getElementById(currentTarget.id);
            const targetElement = doc.getElementById(((_c = (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.target) === null || _c === void 0 ? void 0 : _c.id) || null);
            if (element === null || (element && element === targetElement)) {
                this.cacheCurrentTarget = this.target;
                return this.target;
            }
            currentTarget.dataset = element.dataset;
            for (const key in (_d = this.mpEvent) === null || _d === void 0 ? void 0 : _d.detail) {
                currentTarget[key] = this.mpEvent.detail[key];
            }
            this.cacheCurrentTarget = currentTarget;
            return currentTarget;
        }
    }
}
function createEvent(event, node) {
    if (typeof event === 'string') {
        // For Vue3 using document.createEvent
        return new Event(event, { bubbles: true, cancelable: true });
    }
    const domEv = new Event(event.type, { bubbles: true, cancelable: true }, event);
    for (const key in event) {
        if (key === _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.CURRENT_TARGET || key === _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.TARGET || key === _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.TYPE || key === _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.TIME_STAMP) {
            continue;
        }
        else {
            domEv[key] = event[key];
        }
    }
    if (domEv.type === _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.CONFIRM && (node === null || node === void 0 ? void 0 : node.nodeName) === _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.INPUT) {
        // eslint-disable-next-line dot-notation
        domEv[_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.KEY_CODE] = 13;
    }
    return domEv;
}
const eventsBatch = {};
// 小程序的事件代理回调函数
function eventHandler(event) {
    var _a;
    _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('modifyMpEventImpl', event);
    if (!event.currentTarget) {
        event.currentTarget = event.target;
    }
    const { currentTarget } = event;
    const id = ((_a = currentTarget.dataset) === null || _a === void 0 ? void 0 : _a.sid /** sid */) || currentTarget.id /** uid */ || '';
    const node = _env_js__WEBPACK_IMPORTED_MODULE_0__["default"].document.getElementById(id);
    if (node) {
        const dispatch = () => {
            const e = createEvent(event, node);
            _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('modifyIceEvent', e, node);
            node.dispatchEvent(e);
        };
        if (_ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.isExist('batchedEventUpdates')) {
            const { type } = event;
            if (!_ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('isBubbleEvents', type) ||
                !(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_3__.isParentBinded)(node, type) ||
                (type === _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.TOUCHMOVE && !!node.props.catchMove)) {
                // 最上层组件统一 batchUpdate
                _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('batchedEventUpdates', () => {
                    if (eventsBatch[type]) {
                        eventsBatch[type].forEach(fn => fn());
                        delete eventsBatch[type];
                    }
                    dispatch();
                });
            }
            else {
                // 如果上层组件也有绑定同类型的组件，委托给上层组件调用事件回调
                if (!eventsBatch[type]) {
                    eventsBatch[type] = [];
                }
                eventsBatch[type].push(dispatch);
            }
        }
        else {
            dispatch();
        }
    }
}
function createEventHandlerForThirdComponent(sid, eventName) {
    return (...args) => {
        const node = _env_js__WEBPACK_IMPORTED_MODULE_0__["default"].document.getElementById(sid);
        if (node) {
            node.triggerEventListenerInternal(eventName, args);
        }
    };
}
function bindEventHandlersForThirdComponentNode(node) {
    var _a;
    const instance = (_a = node._root) === null || _a === void 0 ? void 0 : _a.ctx;
    if (!instance) {
        return;
    }
    const eventNames = node.getListenerNames();
    for (const eventName of eventNames) {
        instance[`eh_${node.sid}_${eventName}`] = createEventHandlerForThirdComponent(node.sid, eventName);
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/form.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/form.js ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormElement: function() { return /* binding */ FormElement; }
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/constants/index.js");
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/element.js");


class FormElement extends _element_js__WEBPACK_IMPORTED_MODULE_0__.Element {
    get value() {
        // eslint-disable-next-line dot-notation
        const val = this.props[_constants_index_js__WEBPACK_IMPORTED_MODULE_1__.VALUE];
        return val == null ? '' : val;
    }
    set value(val) {
        this.setAttribute(_constants_index_js__WEBPACK_IMPORTED_MODULE_1__.VALUE, val);
    }
    dispatchEvent(event) {
        if (event.mpEvent) {
            const val = event.mpEvent.detail.value;
            if (event.type === _constants_index_js__WEBPACK_IMPORTED_MODULE_1__.CHANGE) {
                this.props.value = val;
            }
            else if (event.type === _constants_index_js__WEBPACK_IMPORTED_MODULE_1__.INPUT) {
                // Web 规范中表单组件的 value 应该跟着输入改变
                // 只是改 this.props.value 的话不会进行 setData，因此这里修改 this.value。
                // 只测试了 React、Vue、Vue3 input 组件的 onInput 事件，onChange 事件不确定有没有副作用，所以暂不修改。
                this.value = val;
            }
        }
        return super.dispatchEvent(event);
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/node.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/node.js ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: function() { return /* binding */ Node; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/constants/index.js");
/* harmony import */ var _dom_external_mutation_observer_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-external/mutation-observer/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom-external/mutation-observer/index.js");
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../env.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/env.js");
/* harmony import */ var _hydrate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hydrate.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/hydrate.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/utils/index.js");
/* harmony import */ var _event_source_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-source.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/event-source.js");
/* harmony import */ var _event_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-target.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/event-target.js");








const CHILDNODES = _ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Childnodes;
const nodeId = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.incrementId)();
class Node extends _event_target_js__WEBPACK_IMPORTED_MODULE_2__.EventTarget {
    constructor() {
        super();
        this.parentNode = null;
        this.childNodes = [];
        this.hydrate = (node) => () => (0,_hydrate_js__WEBPACK_IMPORTED_MODULE_3__.hydrate)(node);
        this.uid = `_${nodeId()}`; // dom 节点 id，开发者可修改
        this.sid = this.uid; // dom 节点全局唯一 id，不可被修改
        _event_source_js__WEBPACK_IMPORTED_MODULE_4__.eventSource.set(this.sid, this);
    }
    updateChildNodes(isClean) {
        const cleanChildNodes = () => [];
        const rerenderChildNodes = () => {
            const childNodes = this.childNodes.filter(node => !(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.isComment)(node));
            return childNodes.map(_hydrate_js__WEBPACK_IMPORTED_MODULE_3__.hydrate);
        };
        this.enqueueUpdate({
            path: `${this._path}.${CHILDNODES}`,
            value: isClean ? cleanChildNodes : rerenderChildNodes,
        });
    }
    get _root() {
        var _a;
        return ((_a = this.parentNode) === null || _a === void 0 ? void 0 : _a._root) || null;
    }
    findIndex(refChild) {
        const index = this.childNodes.indexOf(refChild);
        (0,_ice_shared__WEBPACK_IMPORTED_MODULE_0__.ensure)(index !== -1, 'The node to be replaced is not a child of this node.');
        return index;
    }
    get _path() {
        const { parentNode } = this;
        if (parentNode) {
            // 计算路径时，先过滤掉 comment 节点
            const list = parentNode.childNodes.filter(node => !(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.isComment)(node));
            const indexOfNode = list.indexOf(this);
            const index = _ice_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('getPathIndex', indexOfNode);
            return `${parentNode._path}.${CHILDNODES}.${index}`;
        }
        return '';
    }
    get nextSibling() {
        const { parentNode } = this;
        return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) + 1]) || null;
    }
    get previousSibling() {
        const { parentNode } = this;
        return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) - 1]) || null;
    }
    get parentElement() {
        const { parentNode } = this;
        if ((parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 1 /* NodeType.ELEMENT_NODE */) {
            return parentNode;
        }
        return null;
    }
    get firstChild() {
        return this.childNodes[0] || null;
    }
    get lastChild() {
        const { childNodes } = this;
        return childNodes[childNodes.length - 1] || null;
    }
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */
    // eslint-disable-next-line accessor-pairs
    set textContent(text) {
        const removedNodes = this.childNodes.slice();
        const addedNodes = [];
        // Handle old children' data structure & ref
        while (this.firstChild) {
            this.removeChild(this.firstChild, { doUpdate: false });
        }
        if (text === '') {
            this.updateChildNodes(true);
        }
        else {
            const newText = _env_js__WEBPACK_IMPORTED_MODULE_5__["default"].document.createTextNode(text);
            addedNodes.push(newText);
            this.appendChild(newText);
            this.updateChildNodes();
        }
        // @Todo: appendChild 会多触发一次
        _dom_external_mutation_observer_index_js__WEBPACK_IMPORTED_MODULE_6__.MutationObserver.record({
            type: "childList" /* MutationRecordType.CHILD_LIST */,
            target: this,
            removedNodes,
            addedNodes,
        });
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
     * @scenario
     * [A,B,C]
     *   1. insert D before C, D has no parent
     *   2. insert D before C, D has the same parent of C
     *   3. insert D before C, D has the different parent of C
     */
    insertBefore(newChild, refChild, isReplace) {
        if (newChild.nodeName === _constants_index_js__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT_FRAGMENT) {
            newChild.childNodes.reduceRight((previousValue, currentValue) => {
                this.insertBefore(currentValue, previousValue);
                return currentValue;
            }, refChild);
            return newChild;
        }
        // Parent release newChild
        //   - cleanRef: false (No need to clean eventSource, because newChild is about to be inserted)
        //   - update: true (Need to update parent.childNodes, because parent.childNodes is reordered)
        newChild.remove({ cleanRef: false });
        // Data structure
        newChild.parentNode = this;
        if (refChild) {
            // insertBefore & replaceChild
            const index = this.findIndex(refChild);
            this.childNodes.splice(index, 0, newChild);
        }
        else {
            // appendChild
            this.childNodes.push(newChild);
        }
        // Serialization
        if (this._root) {
            if (!refChild) {
                // appendChild
                const isOnlyChild = this.childNodes.length === 1;
                if (isOnlyChild) {
                    this.updateChildNodes();
                }
                else {
                    this.enqueueUpdate({
                        path: newChild._path,
                        value: this.hydrate(newChild),
                    });
                }
            }
            else if (isReplace) {
                // replaceChild
                this.enqueueUpdate({
                    path: newChild._path,
                    value: this.hydrate(newChild),
                });
            }
            else {
                // insertBefore
                this.updateChildNodes();
            }
        }
        _dom_external_mutation_observer_index_js__WEBPACK_IMPORTED_MODULE_6__.MutationObserver.record({
            type: "childList" /* MutationRecordType.CHILD_LIST */,
            target: this,
            addedNodes: [newChild],
            removedNodes: isReplace
                ? [refChild] /** replaceChild */
                : [],
            nextSibling: isReplace
                ? refChild.nextSibling /** replaceChild */
                : (refChild || null),
            previousSibling: newChild.previousSibling,
        });
        return newChild;
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
     * @scenario
     * [A,B,C]
     *   1. append C, C has no parent
     *   2. append C, C has the same parent of B
     *   3. append C, C has the different parent of B
     */
    appendChild(newChild) {
        return this.insertBefore(newChild);
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/replaceChild
     * @scenario
     * [A,B,C]
     *   1. replace B with C, C has no parent
     *   2. replace B with C, C has no parent, C has the same parent of B
     *   3. replace B with C, C has no parent, C has the different parent of B
     */
    replaceChild(newChild, oldChild) {
        if (oldChild.parentNode !== this)
            return;
        // Insert the newChild
        this.insertBefore(newChild, oldChild, true);
        // Destroy the oldChild
        // - cleanRef: true (Need to clean eventSource, because the oldChild was detached from the DOM tree)
        // - update: false (No need to update parent.childNodes,
        // because replace will not cause the parent.childNodes being reordered)
        oldChild.remove({ doUpdate: false });
        return oldChild;
    }
    /**
     * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild
     * @scenario
     * [A,B,C]
     *   1. remove A or B
     *   2. remove C
     */
    removeChild(child, options = {}) {
        const { cleanRef, doUpdate } = options;
        if (cleanRef !== false && doUpdate !== false) {
            // appendChild/replaceChild/insertBefore 不应该触发
            // @Todo: 但其实如果 newChild 的父节点是另一颗子树的节点，应该是要触发的
            _dom_external_mutation_observer_index_js__WEBPACK_IMPORTED_MODULE_6__.MutationObserver.record({
                type: "childList" /* MutationRecordType.CHILD_LIST */,
                target: this,
                removedNodes: [child],
                nextSibling: child.nextSibling,
                previousSibling: child.previousSibling,
            });
        }
        // Data Structure
        const index = this.findIndex(child);
        this.childNodes.splice(index, 1);
        child.parentNode = null;
        // Set eventSource
        if (cleanRef !== false) {
            _event_source_js__WEBPACK_IMPORTED_MODULE_4__.eventSource.removeNodeTree(child);
        }
        // Serialization
        if (this._root && doUpdate !== false) {
            this.updateChildNodes();
        }
        return child;
    }
    remove(options) {
        var _a;
        (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this, options);
    }
    hasChildNodes() {
        return this.childNodes.length > 0;
    }
    enqueueUpdate(payload) {
        var _a;
        (_a = this._root) === null || _a === void 0 ? void 0 : _a.enqueueUpdate(payload);
    }
    get ownerDocument() {
        return _env_js__WEBPACK_IMPORTED_MODULE_5__["default"].document;
    }
    static extend(methodName, options) {
        (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.extend)(Node, methodName, options);
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/root.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/root.js ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RootElement: function() { return /* binding */ RootElement; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/constants/index.js");
/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../options.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/options.js");
/* harmony import */ var _perf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../perf.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/perf.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/utils/index.js");
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/element.js");






function findCustomWrapper(root, dataPathArr) {
    // ['root', 'cn', '[0]'] remove 'root' => ['cn', '[0]']
    const list = dataPathArr.slice(1);
    let currentData = root;
    let customWrapper;
    let splitedPath = '';
    list.some((item, i) => {
        const key = item
            // '[0]' => '0'
            .replace(/^\[(.+)\]$/, '$1')
            // 'cn' => 'childNodes'
            .replace(/\bcn\b/g, 'childNodes');
        currentData = currentData[key];
        if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(currentData))
            return true;
        if (currentData.nodeName === _constants_index_js__WEBPACK_IMPORTED_MODULE_1__.CUSTOM_WRAPPER) {
            const res = _utils_index_js__WEBPACK_IMPORTED_MODULE_2__.customWrapperCache.get(currentData.sid);
            if (res) {
                customWrapper = res;
                splitedPath = dataPathArr.slice(i + 2).join('.');
            }
        }
        return;
    });
    if (customWrapper) {
        return {
            customWrapper,
            splitedPath,
        };
    }
}
class RootElement extends _element_js__WEBPACK_IMPORTED_MODULE_3__.Element {
    constructor() {
        super();
        this.updatePayloads = [];
        this.updateCallbacks = [];
        this.pendingUpdate = false;
        this.ctx = null;
        this.nodeName = _constants_index_js__WEBPACK_IMPORTED_MODULE_1__.ROOT_STR;
        this.tagName = _constants_index_js__WEBPACK_IMPORTED_MODULE_1__.ROOT_STR.toUpperCase();
    }
    get _path() {
        return _constants_index_js__WEBPACK_IMPORTED_MODULE_1__.ROOT_STR;
    }
    get _root() {
        return this;
    }
    enqueueUpdate(payload) {
        this.updatePayloads.push(payload);
        if (!this.pendingUpdate && this.ctx) {
            this.performUpdate();
        }
    }
    performUpdate(initRender = false, prerender) {
        this.pendingUpdate = true;
        const ctx = this.ctx;
        setTimeout(() => {
            _perf_js__WEBPACK_IMPORTED_MODULE_4__.perf.start(_constants_index_js__WEBPACK_IMPORTED_MODULE_1__.SET_DATA);
            const data = Object.create(null);
            const resetPaths = new Set(initRender
                ? ['root.cn.[0]', 'root.cn[0]']
                : []);
            while (this.updatePayloads.length > 0) {
                const { path, value } = this.updatePayloads.shift();
                if (path.endsWith(_ice_shared__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Childnodes)) {
                    resetPaths.add(path);
                }
                data[path] = value;
            }
            for (const path in data) {
                resetPaths.forEach(p => {
                    // 已经重置了数组，就不需要分别再设置了
                    if (path.includes(p) && path !== p) {
                        delete data[path];
                    }
                });
                const value = data[path];
                if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value)) {
                    data[path] = value();
                }
            }
            // 预渲染
            if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(prerender))
                return prerender(data);
            // 正常渲染
            this.pendingUpdate = false;
            let normalUpdate = {};
            const customWrapperMap = new Map();
            if (initRender) {
                // 初次渲染，使用页面级别的 setData
                normalUpdate = data;
            }
            else {
                // 更新渲染，区分 CustomWrapper 与页面级别的 setData
                for (const p in data) {
                    const dataPathArr = p.split('.');
                    const found = findCustomWrapper(this, dataPathArr);
                    if (found) {
                        // 此项数据使用 CustomWrapper 去更新
                        const { customWrapper, splitedPath } = found;
                        // 合并同一个 customWrapper 的相关更新到一次 setData 中
                        customWrapperMap.set(customWrapper, {
                            ...(customWrapperMap.get(customWrapper) || {}),
                            [`i.${splitedPath}`]: data[p],
                        });
                    }
                    else {
                        // 此项数据使用页面去更新
                        normalUpdate[p] = data[p];
                    }
                }
            }
            const customWrpperCount = customWrapperMap.size;
            const isNeedNormalUpdate = Object.keys(normalUpdate).length > 0;
            const updateArrLen = customWrpperCount + (isNeedNormalUpdate ? 1 : 0);
            let executeTime = 0;
            const cb = () => {
                if (++executeTime === updateArrLen) {
                    _perf_js__WEBPACK_IMPORTED_MODULE_4__.perf.stop(_constants_index_js__WEBPACK_IMPORTED_MODULE_1__.SET_DATA);
                    this.flushUpdateCallback();
                    initRender && _perf_js__WEBPACK_IMPORTED_MODULE_4__.perf.stop(_constants_index_js__WEBPACK_IMPORTED_MODULE_1__.PAGE_INIT);
                }
            };
            // custom-wrapper setData
            if (customWrpperCount) {
                customWrapperMap.forEach((data, ctx) => {
                    if ( true && _options_js__WEBPACK_IMPORTED_MODULE_5__.options.debug) {
                        // eslint-disable-next-line no-console
                        console.log('custom wrapper setData: ', data);
                    }
                    _ice_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('modifySetDataPayload', data, ctx);
                    ctx.setData(data, cb);
                });
            }
            // page setData
            if (isNeedNormalUpdate) {
                if ( true && _options_js__WEBPACK_IMPORTED_MODULE_5__.options.debug) {
                    // eslint-disable-next-line no-console
                    console.log('page setData:', normalUpdate);
                }
                _ice_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('modifySetDataPayload', data, ctx);
                ctx.setData(normalUpdate, cb);
            }
        }, 0);
    }
    enqueueUpdateCallback(cb, ctx) {
        this.updateCallbacks.push(() => {
            ctx ? cb.call(ctx) : cb();
        });
    }
    flushUpdateCallback() {
        const { updateCallbacks } = this;
        if (!updateCallbacks.length)
            return;
        const copies = updateCallbacks.slice(0);
        this.updateCallbacks.length = 0;
        for (let i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/style.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/style.js ***!
  \******************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Style: function() { return /* binding */ Style; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/constants/index.js");
/* harmony import */ var _dom_external_mutation_observer_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-external/mutation-observer/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom-external/mutation-observer/index.js");
/* harmony import */ var _style_properties_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style_properties.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/style_properties.js");




function recordCss(obj) {
    _dom_external_mutation_observer_index_js__WEBPACK_IMPORTED_MODULE_0__.MutationObserver.record({
        type: "attributes" /* MutationRecordType.ATTRIBUTES */,
        target: obj._element,
        attributeName: 'style',
        oldValue: obj.cssText,
    });
}
function enqueueUpdate(obj) {
    const element = obj._element;
    if (element._root) {
        element.enqueueUpdate({
            path: `${element._path}.${_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.Style}`,
            value: obj.cssText,
        });
    }
}
function setStyle(newVal, styleKey) {
     true && (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.warn)((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(newVal) && newVal.length > _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.PROPERTY_THRESHOLD, `Style 属性 ${styleKey} 的值数据量过大，可能会影响渲染性能，考虑使用 CSS 类或其它方案替代。`);
    const old = this[styleKey];
    if (old === newVal)
        return;
    !this._pending && recordCss(this);
    if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isNull)(newVal) || (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(newVal)) {
        this._usedStyleProp.delete(styleKey);
        delete this._value[styleKey];
    }
    else {
        this._usedStyleProp.add(styleKey);
        this._value[styleKey] = newVal;
    }
    !this._pending && enqueueUpdate(this);
}
function initStyle(ctor) {
    const properties = {};
    for (let i = 0; i < _style_properties_js__WEBPACK_IMPORTED_MODULE_3__.styleProperties.length; i++) {
        const styleKey = _style_properties_js__WEBPACK_IMPORTED_MODULE_3__.styleProperties[i];
        properties[styleKey] = {
            get() {
                const val = this._value[styleKey];
                return (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isNull)(val) || (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(val) ? '' : val;
            },
            set(newVal) {
                setStyle.call(this, newVal, styleKey);
            },
        };
    }
    Object.defineProperties(ctor.prototype, properties);
}
function isCssVariable(propertyName) {
    return /^--/.test(propertyName);
}
class Style {
    constructor(element) {
        this._element = element;
        this._usedStyleProp = new Set();
        this._value = {};
    }
    setCssVariables(styleKey) {
        Object.prototype.hasOwnProperty.call(this, styleKey) || Object.defineProperty(this, styleKey, {
            enumerable: true,
            configurable: true,
            get: () => {
                return this._value[styleKey] || '';
            },
            set: (newVal) => {
                setStyle.call(this, newVal, styleKey);
            },
        });
    }
    get cssText() {
        if (!this._usedStyleProp.size)
            return '';
        const texts = [];
        this._usedStyleProp.forEach(key => {
            const val = this[key];
            if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isNull)(val) || (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(val))
                return;
            let styleName = isCssVariable(key) ? key : (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.toDashed)(key);
            if (styleName.indexOf('webkit') === 0 || styleName.indexOf('Webkit') === 0) {
                styleName = `-${styleName}`;
            }
            texts.push(`${styleName}: ${val};`);
        });
        return texts.join(' ');
    }
    set cssText(str) {
        this._pending = true;
        recordCss(this);
        this._usedStyleProp.forEach(prop => {
            this.removeProperty(prop);
        });
        if (str === '' || (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(str) || (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isNull)(str)) {
            this._pending = false;
            enqueueUpdate(this);
            return;
        }
        const rules = str.split(';');
        for (let i = 0; i < rules.length; i++) {
            const rule = rules[i].trim();
            if (rule === '') {
                continue;
            }
            // 可能存在 'background: url(http:x/y/z)' 的情况
            const [propName, ...valList] = rule.split(':');
            const val = valList.join(':');
            if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(val)) {
                continue;
            }
            this.setProperty(propName.trim(), val.trim());
        }
        this._pending = false;
        enqueueUpdate(this);
    }
    setProperty(propertyName, value) {
        if (propertyName[0] === '-') {
            // 支持 webkit 属性或 css 变量
            this.setCssVariables(propertyName);
        }
        else {
            propertyName = (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(propertyName);
        }
        if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isNull)(value) || (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(value)) {
            this.removeProperty(propertyName);
        }
        else {
            this[propertyName] = value;
        }
    }
    removeProperty(propertyName) {
        propertyName = (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(propertyName);
        if (!this._usedStyleProp.has(propertyName)) {
            return '';
        }
        const value = this[propertyName];
        this[propertyName] = undefined;
        return value;
    }
    getPropertyValue(propertyName) {
        propertyName = (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(propertyName);
        const value = this[propertyName];
        if (!value) {
            return '';
        }
        return value;
    }
}
initStyle(Style);


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/style_properties.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/style_properties.js ***!
  \*****************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styleProperties: function() { return /* binding */ styleProperties; }
/* harmony export */ });
/* eslint-disable camelcase */
/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */
const WEBKIT = 'webkit';
const styleProperties = [
    'all',
    'appearance',
    'blockOverflow',
    'blockSize',
    'bottom',
    'clear',
    'contain',
    'content',
    'continue',
    'cursor',
    'direction',
    'display',
    'filter',
    'float',
    'gap',
    'height',
    'inset',
    'isolation',
    'left',
    'letterSpacing',
    'lightingColor',
    'markerSide',
    'mixBlendMode',
    'opacity',
    'order',
    'position',
    'quotes',
    'resize',
    'right',
    'rowGap',
    'tabSize',
    'tableLayout',
    'top',
    'userSelect',
    'verticalAlign',
    'visibility',
    'voiceFamily',
    'volume',
    'whiteSpace',
    'widows',
    'width',
    'zIndex',
    'pointerEvents',
    /** 非常用 style */
    // 'azimuth',
    // 'backfaceVisibility',
    // 'baselineShift',
    // 'captionSide',
    // 'chains',
    // 'dominantBaseline',
    // 'elevation',
    // 'emptyCells',
    // 'forcedColorAdjust',
    // 'glyphOrientationVertical',
    // 'hangingPunctuation',
    // 'hyphenateCharacter',
    // 'hyphens',
    // 'imageOrientation',
    // 'imageResolution',
    // 'orphans',
    // 'playDuring',
    // 'pointerEvents',
    // 'regionFragment',
    // 'richness',
    // 'running',
    // 'scrollBehavior',
    // 'speechRate',
    // 'stress',
    // 'stringSet',
    // 'unicodeBidi',
    // 'willChange',
    // 'writingMode',
];
// 减少文件体积
function combine(prefix, list, excludeSelf) {
    !excludeSelf && styleProperties.push(prefix);
    list.forEach(item => {
        styleProperties.push(prefix + item);
        if (prefix === WEBKIT) {
            styleProperties.push(`Webkit${item}`);
        }
    });
}
const color = 'Color';
const style = 'Style';
const width = 'Width';
const image = 'Image';
const size = 'Size';
const color_style_width = [color, style, width];
const fitlength_fitwidth_image = ['FitLength', 'FitWidth', image];
const fitlength_fitwidth_image_radius = [...fitlength_fitwidth_image, 'Radius'];
const color_style_width_fitlength_fitwidth_image = [...color_style_width, ...fitlength_fitwidth_image];
const endRadius_startRadius = ['EndRadius', 'StartRadius'];
const bottom_left_right_top = ['Bottom', 'Left', 'Right', 'Top'];
const end_start = ['End', 'Start'];
const content_items_self = ['Content', 'Items', 'Self'];
const blockSize_height_inlineSize_width = ['BlockSize', 'Height', 'InlineSize', width];
const after_before = ['After', 'Before'];
combine('borderBlock', color_style_width);
combine('borderBlockEnd', color_style_width);
combine('borderBlockStart', color_style_width);
combine('outline', [...color_style_width, 'Offset']);
combine('border', [...color_style_width, 'Boundary', 'Break', 'Collapse', 'Radius', 'Spacing']);
combine('borderFit', ['Length', width]);
combine('borderInline', color_style_width);
combine('borderInlineEnd', color_style_width);
combine('borderInlineStart', color_style_width);
combine('borderLeft', color_style_width_fitlength_fitwidth_image);
combine('borderRight', color_style_width_fitlength_fitwidth_image);
combine('borderTop', color_style_width_fitlength_fitwidth_image);
combine('borderBottom', color_style_width_fitlength_fitwidth_image);
combine('textDecoration', [color, style, 'Line']);
combine('textEmphasis', [color, style, 'Position']);
combine('scrollMargin', bottom_left_right_top);
combine('scrollPadding', bottom_left_right_top);
combine('padding', bottom_left_right_top);
combine('margin', [...bottom_left_right_top, 'Trim']);
combine('scrollMarginBlock', end_start);
combine('scrollMarginInline', end_start);
combine('scrollPaddingBlock', end_start);
combine('scrollPaddingInline', end_start);
combine('gridColumn', end_start);
combine('gridRow', end_start);
combine('insetBlock', end_start);
combine('insetInline', end_start);
combine('marginBlock', end_start);
combine('marginInline', end_start);
combine('paddingBlock', end_start);
combine('paddingInline', end_start);
combine('pause', after_before);
combine('cue', after_before);
combine('mask', ['Clip', 'Composite', image, 'Mode', 'Origin', 'Position', 'Repeat', size, 'Type']);
combine('borderImage', ['Outset', 'Repeat', 'Slice', 'Source', 'Transform', width]);
combine('maskBorder', ['Mode', 'Outset', 'Repeat', 'Slice', 'Source', width]);
combine('font', ['Family', 'FeatureSettings', 'Kerning', 'LanguageOverride', 'MaxSize', 'MinSize', 'OpticalSizing', 'Palette', size, 'SizeAdjust', 'Stretch', style, 'Weight', 'VariationSettings']);
combine('transform', ['Box', 'Origin', style]);
combine('background', [color, image, 'Attachment', 'BlendMode', 'Clip', 'Origin', 'Position', 'Repeat', size]);
combine('listStyle', [image, 'Position', 'Type']);
combine('scrollSnap', ['Align', 'Stop', 'Type']);
combine('grid', ['Area', 'AutoColumns', 'AutoFlow', 'AutoRows']);
combine('gridTemplate', ['Areas', 'Columns', 'Rows']);
combine('overflow', ['Block', 'Inline', 'Wrap', 'X', 'Y']);
combine('transition', ['Delay', 'Duration', 'Property', 'TimingFunction']);
combine('color', ['Adjust', 'InterpolationFilters', 'Scheme']);
combine('textAlign', ['All', 'Last']);
combine('page', ['BreakAfter', 'BreakBefore', 'BreakInside']);
combine('animation', ['Delay', 'Direction', 'Duration', 'FillMode', 'IterationCount', 'Name', 'PlayState', 'TimingFunction']);
combine('flex', ['Basis', 'Direction', 'Flow', 'Grow', 'Shrink', 'Wrap']);
combine('offset', [...after_before, ...end_start, 'Anchor', 'Distance', 'Path', 'Position', 'Rotate']);
combine('perspective', ['Origin']);
combine('clip', ['Path', 'Rule']);
combine('flow', ['From', 'Into']);
combine('align', ['Content', 'Items', 'Self'], true);
combine('alignment', ['Adjust', 'Baseline'], true);
combine('borderStart', endRadius_startRadius, true);
combine('borderEnd', endRadius_startRadius, true);
combine('borderCorner', ['Fit', image, 'ImageTransform'], true);
combine('borderTopLeft', fitlength_fitwidth_image_radius, true);
combine('borderTopRight', fitlength_fitwidth_image_radius, true);
combine('borderBottomLeft', fitlength_fitwidth_image_radius, true);
combine('borderBottomRight', fitlength_fitwidth_image_radius, true);
combine('column', ['s', 'Count', 'Fill', 'Gap', 'Rule', 'RuleColor', 'RuleStyle', 'RuleWidth', 'Span', width], true);
combine('break', [...after_before, 'Inside'], true);
combine('wrap', [...after_before, 'Flow', 'Inside', 'Through'], true);
combine('justify', content_items_self, true);
combine('place', content_items_self, true);
combine('max', [...blockSize_height_inlineSize_width, 'Lines'], true);
combine('min', blockSize_height_inlineSize_width, true);
combine('line', ['Break', 'Clamp', 'Grid', 'Height', 'Padding', 'Snap'], true);
combine('inline', ['BoxAlign', size, 'Sizing'], true);
combine('text', ['CombineUpright', 'GroupAlign', 'Height', 'Indent', 'Justify', 'Orientation', 'Overflow', 'Shadow', 'SpaceCollapse', 'SpaceTrim', 'Spacing', 'Transform', 'UnderlinePosition', 'Wrap'], true);
combine('shape', ['ImageThreshold', 'Inside', 'Margin', 'Outside'], true);
combine('word', ['Break', 'Spacing', 'Wrap'], true);
combine('object', ['Fit', 'Position'], true);
combine('box', ['DecorationBreak', 'Shadow', 'Sizing', 'Snap'], true);
combine(WEBKIT, ['LineClamp', 'BoxOrient', 'TextFillColor', 'TextStroke', 'TextStrokeColor', 'TextStrokeWidth'], true);
/** 非常用 style */
// combine('caret', [color, 'Shape'])
// combine('counter', ['Increment', 'Reset', 'Set'], true)
// combine('dropInitial', ['AfterAdjust', 'AfterAlign', 'BeforeAdjust', 'BeforeAlign', size, 'Value'], true)
// combine('flood', [color, 'Opacity'], true)
// combine('footnote', ['Display', 'Policy'], true)
// combine('hyphenateLimit', ['Chars', 'Last', 'Lines', 'Zone'], true)
// combine('initialLetters', ['Align', 'Wrap'])
// combine('ruby', ['Align', 'Merge', 'Position'], true)
// combine('lineStacking', ['Ruby', 'Shift', 'Strategy'])
// combine('bookmark', ['Label', 'Level', 'State'], true)
// combine('speak', ['Header', 'Numeral', 'Punctuation'])
// combine('pitch', ['Range'])
// combine('nav', ['Down', 'Left', 'Right', 'Up'], true)
// combine('fontSynthesis', ['SmallCaps', style, 'Weight'])
// combine('fontVariant', ['Alternates', 'Caps', 'EastAsian', 'Emoji', 'Ligatures', 'Numeric', 'Position'])



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/svg.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/svg.js ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGElement: function() { return /* binding */ SVGElement; }
/* harmony export */ });
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/element.js");

// for Vue3
class SVGElement extends _element_js__WEBPACK_IMPORTED_MODULE_0__.Element {
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/text.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/text.js ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Text: function() { return /* binding */ Text; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _dom_external_mutation_observer_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-external/mutation-observer/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom-external/mutation-observer/index.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/node.js");



class Text extends _node_js__WEBPACK_IMPORTED_MODULE_0__.Node {
    constructor(value) {
        super();
        this.nodeType = 3 /* NodeType.TEXT_NODE */;
        this.nodeName = '#text';
        this._value = value;
    }
    set textContent(text) {
        _dom_external_mutation_observer_index_js__WEBPACK_IMPORTED_MODULE_1__.MutationObserver.record({
            target: this,
            type: "characterData" /* MutationRecordType.CHARACTER_DATA */,
            oldValue: this._value,
        });
        this._value = text;
        this.enqueueUpdate({
            path: `${this._path}.${_ice_shared__WEBPACK_IMPORTED_MODULE_2__.Shortcuts.Text}`,
            value: text,
        });
    }
    get textContent() {
        return this._value;
    }
    set nodeValue(text) {
        this.textContent = text;
    }
    get nodeValue() {
        return this._value;
    }
    set data(text) {
        this.textContent = text;
    }
    get data() {
        return this._value;
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/tree.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/tree.js ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   treeToArray: function() { return /* binding */ treeToArray; }
/* harmony export */ });
function returnTrue() {
    return true;
}
function treeToArray(root, predict) {
    const array = [];
    const filter = predict !== null && predict !== void 0 ? predict : returnTrue;
    let object = root;
    while (object) {
        if (object.nodeType === 1 /* NodeType.ELEMENT_NODE */ && filter(object)) {
            array.push(object);
        }
        object = following(object, root);
    }
    return array;
}
function following(el, root) {
    const { firstChild } = el;
    if (firstChild) {
        return firstChild;
    }
    let current = el;
    do {
        if (current === root) {
            return null;
        }
        const { nextSibling } = current;
        if (nextSibling) {
            return nextSibling;
        }
        current = current.parentElement;
    } while (current);
    return null;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dsl/common.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dsl/common.js ***!
  \*******************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingSlash: function() { return /* binding */ addLeadingSlash; },
/* harmony export */   createComponentConfig: function() { return /* binding */ createComponentConfig; },
/* harmony export */   createPageConfig: function() { return /* binding */ createPageConfig; },
/* harmony export */   createRecursiveComponentConfig: function() { return /* binding */ createRecursiveComponentConfig; },
/* harmony export */   getOnHideEventKey: function() { return /* binding */ getOnHideEventKey; },
/* harmony export */   getOnReadyEventKey: function() { return /* binding */ getOnReadyEventKey; },
/* harmony export */   getOnShowEventKey: function() { return /* binding */ getOnShowEventKey; },
/* harmony export */   getPageInstance: function() { return /* binding */ getPageInstance; },
/* harmony export */   getPath: function() { return /* binding */ getPath; },
/* harmony export */   injectPageInstance: function() { return /* binding */ injectPageInstance; },
/* harmony export */   safeExecute: function() { return /* binding */ safeExecute; },
/* harmony export */   stringify: function() { return /* binding */ stringify; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _bom_raf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bom/raf.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/raf.js");
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/constants/index.js");
/* harmony import */ var _current_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/current.js");
/* harmony import */ var _dom_event_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom/event.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/event.js");
/* harmony import */ var _emitter_emitter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../emitter/emitter.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/emitter/emitter.js");
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../env.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/env.js");
/* harmony import */ var _perf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../perf.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/perf.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/utils/index.js");
/* provided dependency */ var document = __webpack_require__(/*! @ice/miniapp-runtime */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js")["document"];
/* eslint-disable dot-notation */









const instances = new Map();
const pageId = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.incrementId)();
function injectPageInstance(inst, id) {
    _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('mergePageInstance', instances.get(id), inst);
    instances.set(id, inst);
}
function getPageInstance(id) {
    return instances.get(id);
}
function addLeadingSlash(path) {
    if (path == null) {
        return '';
    }
    return path.charAt(0) === '/' ? path : `/${path}`;
}
function safeExecute(path, lifecycle, ...args) {
    const instance = instances.get(path);
    if (instance == null) {
        return;
    }
    const func = _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('getLifecycle', instance, lifecycle);
    if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(func)) {
        const res = func.map(fn => fn.apply(instance, args));
        return res[0];
    }
    if (!(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(func)) {
        return;
    }
    return func.apply(instance, args);
}
function stringify(obj) {
    if (obj == null) {
        return '';
    }
    const path = Object.keys(obj).map((key) => {
        return `${key}=${obj[key]}`;
    }).join('&');
    return path === '' ? path : `?${path}`;
}
function getPath(id, options) {
    const idx = id.indexOf('?');
    return `${idx > -1 ? id.substring(0, idx) : id}${stringify(options)}`;
}
function getOnReadyEventKey(path) {
    return `${path}.${_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.ON_READY}`;
}
function getOnShowEventKey(path) {
    return `${path}.${_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.ON_SHOW}`;
}
function getOnHideEventKey(path) {
    return `${path}.${_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.ON_HIDE}`;
}
function createPageConfig(component, pageName, data, { dataLoader, pageConfig }, miniappPageConfig) {
    // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上
    const id = pageName !== null && pageName !== void 0 ? pageName : `ice_page_${pageId()}`;
    const [ONLOAD, ONUNLOAD, ONREADY, ONSHOW, ONHIDE, LIFECYCLES, , ALI_MINIAPP_EVENTS,] = _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('getMiniLifecycleImpl').page;
    let pageElement = null;
    let unmounting = false;
    let prepareMountList = [];
    function setCurrentRouter(page) {
        const router = page.route || page.__route__ || page.$icePath;
        _current_js__WEBPACK_IMPORTED_MODULE_3__.Current.router = {
            params: page.$iceParams,
            path: addLeadingSlash(router),
            $icePath: page.$icePath,
            onReady: getOnReadyEventKey(id),
            onShow: getOnShowEventKey(id),
            onHide: getOnHideEventKey(id),
        };
        if (!(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(page.exitState)) {
            _current_js__WEBPACK_IMPORTED_MODULE_3__.Current.router.exitState = page.exitState;
        }
    }
    let loadResolver;
    let hasLoaded;
    const routeConfig = pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig();
    const config = {
        [ONLOAD](options = {}, cb) {
            hasLoaded = new Promise(resolve => { loadResolver = resolve; });
            _perf_js__WEBPACK_IMPORTED_MODULE_4__.perf.start(_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.PAGE_INIT);
            _current_js__WEBPACK_IMPORTED_MODULE_3__.Current.page = this;
            this.config = miniappPageConfig || {};
            // this.$icePath 是页面唯一标识
            const uniqueOptions = Object.assign({}, options);
            const $icePath = this.$icePath = getPath(id, uniqueOptions);
            // this.$iceParams 作为暴露给开发者的页面参数对象，可以被随意修改
            if (this.$iceParams == null) {
                this.$iceParams = uniqueOptions;
            }
            setCurrentRouter(this);
            if (!dataLoader) {
                // createRoot(render) is asynchronous
                dataLoader = () => new Promise(resolve => setTimeout(resolve, 0));
            }
            const mount = () => {
                dataLoader({ pathname: id, query: this.$iceParams }).then(routeData => {
                    _current_js__WEBPACK_IMPORTED_MODULE_3__.Current.app.mount(component, { id: $icePath, routeData, routeConfig }, () => {
                        pageElement = _env_js__WEBPACK_IMPORTED_MODULE_5__["default"].document.getElementById($icePath);
                        (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.ensure)(pageElement !== null, '没有找到页面实例。');
                        safeExecute($icePath, _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.ON_LOAD, this.$iceParams);
                        loadResolver();
                        pageElement.ctx = this;
                        pageElement.performUpdate(true, cb);
                    });
                });
            };
            if (unmounting) {
                prepareMountList.push(mount);
            }
            else if (_current_js__WEBPACK_IMPORTED_MODULE_3__.Current.appDataReady) {
                mount();
            }
            else {
                // Only when getAppData is ready, the page can be mounted
                _emitter_emitter_js__WEBPACK_IMPORTED_MODULE_6__.eventCenter.on(_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.APP_DATA_READY, () => {
                    mount();
                });
            }
        },
        [ONUNLOAD]() {
            const { $icePath } = this;
            // 触发onUnload生命周期
            safeExecute($icePath, ONUNLOAD);
            unmounting = true;
            _current_js__WEBPACK_IMPORTED_MODULE_3__.Current.app.unmount($icePath, () => {
                unmounting = false;
                instances.delete($icePath);
                if (pageElement) {
                    pageElement.ctx = null;
                    pageElement = null;
                }
                if (prepareMountList.length) {
                    prepareMountList.forEach(fn => fn());
                    prepareMountList = [];
                }
            });
        },
        [ONREADY]() {
            hasLoaded.then(() => {
                // 触发生命周期
                safeExecute(this.$icePath, _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.ON_READY);
                // 通过事件触发子组件的生命周期
                (0,_bom_raf_js__WEBPACK_IMPORTED_MODULE_7__.raf)(() => _emitter_emitter_js__WEBPACK_IMPORTED_MODULE_6__.eventCenter.trigger(getOnReadyEventKey(id)));
                this.onReady.called = true;
            });
        },
        [ONSHOW](options = {}) {
            hasLoaded.then(() => {
                // 设置 Current 的 page 和 router
                _current_js__WEBPACK_IMPORTED_MODULE_3__.Current.page = this;
                setCurrentRouter(this);
                // 触发生命周期
                safeExecute(this.$icePath, _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.ON_SHOW, options);
                // 通过事件触发子组件的生命周期
                (0,_bom_raf_js__WEBPACK_IMPORTED_MODULE_7__.raf)(() => _emitter_emitter_js__WEBPACK_IMPORTED_MODULE_6__.eventCenter.trigger(getOnShowEventKey(id)));
            });
        },
        [ONHIDE]() {
            // 设置 Current 的 page 和 router
            if (_current_js__WEBPACK_IMPORTED_MODULE_3__.Current.page === this) {
                _current_js__WEBPACK_IMPORTED_MODULE_3__.Current.page = null;
                _current_js__WEBPACK_IMPORTED_MODULE_3__.Current.router = null;
            }
            // 触发生命周期
            safeExecute(this.$icePath, _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.ON_HIDE);
            // 通过事件触发子组件的生命周期
            _emitter_emitter_js__WEBPACK_IMPORTED_MODULE_6__.eventCenter.trigger(getOnHideEventKey(id));
        },
        // For ali miniapp only
        events: {},
    };
    LIFECYCLES.forEach((lifecycle) => {
        config[lifecycle] = function (...args) {
            return safeExecute(this.$icePath, lifecycle, ...args);
        };
    });
    /*
      onShareAppMessage 和 onShareTimeline 会影响小程序右上方按钮的选项，因此不能默认注册
      onPageScroll 则因性能问题不能默认注册
     */
    const { nativeEvents = [] } = routeConfig || {};
    nativeEvents.forEach(nativeEvent => {
        if (ALI_MINIAPP_EVENTS.includes(nativeEvent)) {
            config.events[nativeEvent] = function (...args) {
                return safeExecute(this.$icePath, nativeEvent, ...args);
            };
        }
        else {
            config[nativeEvent] = function (...args) {
                if (nativeEvent === 'onShareAppMessage') {
                    const target = args === null || args === void 0 ? void 0 : args[0].target;
                    if (target) {
                        const { id } = target;
                        const element = document.getElementById(id);
                        if (element) {
                            target.dataset = element.dataset;
                        }
                    }
                }
                return safeExecute(this.$icePath, nativeEvent, ...args);
            };
        }
    });
    config.eh = _dom_event_js__WEBPACK_IMPORTED_MODULE_8__.eventHandler;
    if (!(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(data)) {
        config.data = data;
    }
    _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('modifyPageObject', config);
    return config;
}
function createComponentConfig(component, componentName, data) {
    const id = componentName !== null && componentName !== void 0 ? componentName : `ice_component_${pageId()}`;
    let componentElement = null;
    const config = {
        attached() {
            var _a;
            _perf_js__WEBPACK_IMPORTED_MODULE_4__.perf.start(_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.PAGE_INIT);
            const path = getPath(id, { id: ((_a = this.getPageId) === null || _a === void 0 ? void 0 : _a.call(this)) || pageId() });
            _current_js__WEBPACK_IMPORTED_MODULE_3__.Current.app.mount(component, { id: path }, () => {
                componentElement = _env_js__WEBPACK_IMPORTED_MODULE_5__["default"].document.getElementById(path);
                (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.ensure)(componentElement !== null, '没有找到组件实例。');
                this.$iceInstances = instances.get(path);
                safeExecute(path, _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.ON_LOAD);
                if (componentElement) {
                    componentElement.ctx = this;
                    componentElement.performUpdate(true);
                }
            });
        },
        detached() {
            const path = getPath(id, { id: this.getPageId() });
            _current_js__WEBPACK_IMPORTED_MODULE_3__.Current.app.unmount(path, () => {
                instances.delete(path);
                if (componentElement) {
                    componentElement.ctx = null;
                }
            });
        },
        methods: {
            eh: _dom_event_js__WEBPACK_IMPORTED_MODULE_8__.eventHandler,
        },
    };
    if (!(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(data)) {
        config.data = data;
    }
    [_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.OPTIONS, _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.EXTERNAL_CLASSES, _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.BEHAVIORS].forEach(key => {
        var _a;
        config[key] = (_a = component[key]) !== null && _a !== void 0 ? _a : _ice_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    });
    return config;
}
function createRecursiveComponentConfig(componentName) {
    const isCustomWrapper = componentName === _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.CUSTOM_WRAPPER;
    const lifeCycles = isCustomWrapper
        ? {
            attached() {
                var _a;
                const componentId = (_a = this.data.i) === null || _a === void 0 ? void 0 : _a.sid;
                if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(componentId)) {
                    _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.customWrapperCache.set(componentId, this);
                }
            },
            detached() {
                var _a;
                const componentId = (_a = this.data.i) === null || _a === void 0 ? void 0 : _a.sid;
                if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(componentId)) {
                    _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.customWrapperCache.delete(componentId);
                }
            },
        }
        : _ice_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    return {
        properties: {
            i: {
                type: Object,
                value: {
                    [_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.NodeName]: _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.VIEW,
                },
            },
            l: {
                type: String,
                value: '',
            },
        },
        options: {
            addGlobalClass: true,
            virtualHost: !isCustomWrapper,
        },
        methods: {
            eh: _dom_event_js__WEBPACK_IMPORTED_MODULE_8__.eventHandler,
        },
        ...lifeCycles,
    };
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dsl/instance.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dsl/instance.js ***!
  \*********************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/emitter/emitter.js":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/emitter/emitter.js ***!
  \************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: function() { return /* reexport safe */ _ice_shared__WEBPACK_IMPORTED_MODULE_0__.Events; },
/* harmony export */   eventCenter: function() { return /* binding */ eventCenter; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");

const eventCenter = _ice_shared__WEBPACK_IMPORTED_MODULE_0__.hooks.call('getEventCenter', _ice_shared__WEBPACK_IMPORTED_MODULE_0__.Events);



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/env.js":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/env.js ***!
  \************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");

const env = {
    window: _ice_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ,
    document: _ice_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ,
};
/* harmony default export */ __webpack_exports__["default"] = (env);


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/hydrate.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/hydrate.js ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hydrate: function() { return /* binding */ hydrate; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/constants/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/utils/index.js");



let SPECIAL_NODES;
let componentsAlias;
/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what ICE's doing in here.
 */
function hydrate(node) {
    if (!componentsAlias) {
        // 初始化 componentsAlias
        componentsAlias = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.getComponentsAlias)();
    }
    if (!SPECIAL_NODES) {
        // 初始化 SPECIAL_NODES
        SPECIAL_NODES = _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('getSpecialNodes');
    }
    const { nodeName } = node;
    if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.isText)(node)) {
        return {
            [_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.Text]: node.nodeValue,
            [_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.NodeName]: componentsAlias[nodeName]._num,
        };
    }
    const data = {
        [_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.NodeName]: nodeName,
        sid: node.sid,
    };
    if (node.uid !== node.sid) {
        data.uid = node.uid;
    }
    if (!node.isAnyEventBinded() && SPECIAL_NODES.indexOf(nodeName) > -1) {
        data[_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.NodeName] = `static-${nodeName}`;
        if (nodeName === _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.VIEW && !(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.isHasExtractProp)(node)) {
            data[_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.NodeName] = _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.PURE_VIEW;
        }
    }
    const { props } = node;
    for (const prop in props) {
        const propInCamelCase = (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(prop);
        if (!prop.startsWith('data-') && // 在 node.dataset 的数据
            prop !== _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.CLASS &&
            prop !== _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.STYLE &&
            prop !== _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.ID &&
            propInCamelCase !== _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.CATCHMOVE) {
            data[propInCamelCase] = props[prop];
        }
        if (nodeName === _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.VIEW && propInCamelCase === _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.CATCHMOVE && props[prop] !== false) {
            data[_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.NodeName] = _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.CATCH_VIEW;
        }
    }
    // Children
    data[_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.Childnodes] = node.childNodes.filter(node => !(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.isComment)(node)).map(hydrate);
    if (node.className !== '') {
        data[_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.Class] = node.className;
    }
    const { cssText } = node;
    if (cssText !== '' && nodeName !== 'swiper-item') {
        data[_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.Style] = cssText;
    }
    _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('modifyHydrateData', data);
    const nn = data[_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.NodeName];
    const componentAlias = componentsAlias[nn];
    if (componentAlias) {
        data[_ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.NodeName] = componentAlias._num;
        for (const prop in data) {
            if (prop in componentAlias) {
                data[componentAlias[prop]] = data[prop];
                delete data[prop];
            }
        }
    }
    else {
        _ice_shared__WEBPACK_IMPORTED_MODULE_1__.hooks.call('hydrateNativeComponentNode', node);
    }
    return data;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js ***!
  \**************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Current: function() { return /* reexport safe */ _current_js__WEBPACK_IMPORTED_MODULE_15__.Current; },
/* harmony export */   Element: function() { return /* reexport safe */ _dom_element_js__WEBPACK_IMPORTED_MODULE_6__.Element; },
/* harmony export */   Event: function() { return /* reexport safe */ _dom_event_js__WEBPACK_IMPORTED_MODULE_7__.Event; },
/* harmony export */   FormElement: function() { return /* reexport safe */ _dom_form_js__WEBPACK_IMPORTED_MODULE_8__.FormElement; },
/* harmony export */   MutationObserver: function() { return /* reexport safe */ _dom_external_mutation_observer_index_js__WEBPACK_IMPORTED_MODULE_14__.MutationObserver; },
/* harmony export */   Node: function() { return /* reexport safe */ _dom_node_js__WEBPACK_IMPORTED_MODULE_9__.Node; },
/* harmony export */   RootElement: function() { return /* reexport safe */ _dom_root_js__WEBPACK_IMPORTED_MODULE_10__.RootElement; },
/* harmony export */   SVGElement: function() { return /* reexport safe */ _dom_svg_js__WEBPACK_IMPORTED_MODULE_12__.SVGElement; },
/* harmony export */   Style: function() { return /* reexport safe */ _dom_style_js__WEBPACK_IMPORTED_MODULE_11__.Style; },
/* harmony export */   Text: function() { return /* reexport safe */ _dom_text_js__WEBPACK_IMPORTED_MODULE_13__.Text; },
/* harmony export */   addLeadingSlash: function() { return /* reexport safe */ _dsl_common_js__WEBPACK_IMPORTED_MODULE_17__.addLeadingSlash; },
/* harmony export */   bindEventHandlersForThirdComponentNode: function() { return /* reexport safe */ _dom_event_js__WEBPACK_IMPORTED_MODULE_7__.bindEventHandlersForThirdComponentNode; },
/* harmony export */   cancelAnimationFrame: function() { return /* reexport safe */ _bom_raf_js__WEBPACK_IMPORTED_MODULE_4__.caf; },
/* harmony export */   createComponentConfig: function() { return /* reexport safe */ _dsl_common_js__WEBPACK_IMPORTED_MODULE_17__.createComponentConfig; },
/* harmony export */   createEvent: function() { return /* reexport safe */ _dom_event_js__WEBPACK_IMPORTED_MODULE_7__.createEvent; },
/* harmony export */   createEventHandlerForThirdComponent: function() { return /* reexport safe */ _dom_event_js__WEBPACK_IMPORTED_MODULE_7__.createEventHandlerForThirdComponent; },
/* harmony export */   createPageConfig: function() { return /* reexport safe */ _dsl_common_js__WEBPACK_IMPORTED_MODULE_17__.createPageConfig; },
/* harmony export */   createRecursiveComponentConfig: function() { return /* reexport safe */ _dsl_common_js__WEBPACK_IMPORTED_MODULE_17__.createRecursiveComponentConfig; },
/* harmony export */   document: function() { return /* reexport safe */ _bom_document_js__WEBPACK_IMPORTED_MODULE_1__.document; },
/* harmony export */   eventHandler: function() { return /* reexport safe */ _dom_event_js__WEBPACK_IMPORTED_MODULE_7__.eventHandler; },
/* harmony export */   eventSource: function() { return /* reexport safe */ _dom_event_source_js__WEBPACK_IMPORTED_MODULE_16__.eventSource; },
/* harmony export */   getComputedStyle: function() { return /* reexport safe */ _bom_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__.getComputedStyle; },
/* harmony export */   getCurrentInstance: function() { return /* reexport safe */ _current_js__WEBPACK_IMPORTED_MODULE_15__.getCurrentInstance; },
/* harmony export */   getPageInstance: function() { return /* reexport safe */ _dsl_common_js__WEBPACK_IMPORTED_MODULE_17__.getPageInstance; },
/* harmony export */   hooks: function() { return /* reexport safe */ _ice_shared__WEBPACK_IMPORTED_MODULE_0__.hooks; },
/* harmony export */   hydrate: function() { return /* reexport safe */ _hydrate_js__WEBPACK_IMPORTED_MODULE_19__.hydrate; },
/* harmony export */   incrementId: function() { return /* reexport safe */ _utils_index_js__WEBPACK_IMPORTED_MODULE_22__.incrementId; },
/* harmony export */   injectPageInstance: function() { return /* reexport safe */ _dsl_common_js__WEBPACK_IMPORTED_MODULE_17__.injectPageInstance; },
/* harmony export */   navigator: function() { return /* reexport safe */ _bom_navigator_js__WEBPACK_IMPORTED_MODULE_3__.navigator; },
/* harmony export */   nextTick: function() { return /* reexport safe */ _next_tick_js__WEBPACK_IMPORTED_MODULE_20__.nextTick; },
/* harmony export */   now: function() { return /* reexport safe */ _bom_raf_js__WEBPACK_IMPORTED_MODULE_4__.now; },
/* harmony export */   options: function() { return /* reexport safe */ _options_js__WEBPACK_IMPORTED_MODULE_21__.options; },
/* harmony export */   requestAnimationFrame: function() { return /* reexport safe */ _bom_raf_js__WEBPACK_IMPORTED_MODULE_4__.raf; },
/* harmony export */   safeExecute: function() { return /* reexport safe */ _dsl_common_js__WEBPACK_IMPORTED_MODULE_17__.safeExecute; },
/* harmony export */   stringify: function() { return /* reexport safe */ _dsl_common_js__WEBPACK_IMPORTED_MODULE_17__.stringify; },
/* harmony export */   window: function() { return /* reexport safe */ _bom_window_js__WEBPACK_IMPORTED_MODULE_5__.window; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _bom_document_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bom/document.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/document.js");
/* harmony import */ var _bom_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bom/getComputedStyle.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/getComputedStyle.js");
/* harmony import */ var _bom_navigator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bom/navigator.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/navigator.js");
/* harmony import */ var _bom_raf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bom/raf.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/raf.js");
/* harmony import */ var _bom_window_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bom/window.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/bom/window.js");
/* harmony import */ var _dom_element_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/element.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/element.js");
/* harmony import */ var _dom_event_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/event.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/event.js");
/* harmony import */ var _dom_form_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/form.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/form.js");
/* harmony import */ var _dom_node_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/node.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/node.js");
/* harmony import */ var _dom_root_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/root.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/root.js");
/* harmony import */ var _dom_style_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom/style.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/style.js");
/* harmony import */ var _dom_svg_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom/svg.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/svg.js");
/* harmony import */ var _dom_text_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dom/text.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/text.js");
/* harmony import */ var _dom_external_mutation_observer_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dom-external/mutation-observer/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom-external/mutation-observer/index.js");
/* harmony import */ var _current_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./current.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/current.js");
/* harmony import */ var _dom_event_source_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dom/event-source.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dom/event-source.js");
/* harmony import */ var _dsl_common_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dsl/common.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dsl/common.js");
/* harmony import */ var _emitter_emitter_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./emitter/emitter.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/emitter/emitter.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _emitter_emitter_js__WEBPACK_IMPORTED_MODULE_18__) if(["default","hooks","document","getComputedStyle","navigator","cancelAnimationFrame","now","requestAnimationFrame","window","Element","createEvent","eventHandler","Event","createEventHandlerForThirdComponent","bindEventHandlersForThirdComponentNode","FormElement","Node","RootElement","Style","SVGElement","Text","MutationObserver","Current","getCurrentInstance","eventSource","addLeadingSlash","createComponentConfig","createPageConfig","createRecursiveComponentConfig","getPageInstance","injectPageInstance","safeExecute","stringify","hydrate","nextTick","options","incrementId"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _emitter_emitter_js__WEBPACK_IMPORTED_MODULE_18__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _hydrate_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./hydrate.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/hydrate.js");
/* harmony import */ var _next_tick_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./next-tick.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/next-tick.js");
/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./options.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/options.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/utils/index.js");
/* harmony import */ var _dsl_instance_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dsl/instance.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/dsl/instance.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _dsl_instance_js__WEBPACK_IMPORTED_MODULE_23__) if(["default","hooks","document","getComputedStyle","navigator","cancelAnimationFrame","now","requestAnimationFrame","window","Element","createEvent","eventHandler","Event","createEventHandlerForThirdComponent","bindEventHandlersForThirdComponentNode","FormElement","Node","RootElement","Style","SVGElement","Text","MutationObserver","Current","getCurrentInstance","eventSource","addLeadingSlash","createComponentConfig","createPageConfig","createRecursiveComponentConfig","getPageInstance","injectPageInstance","safeExecute","stringify","hydrate","nextTick","options","incrementId"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _dsl_instance_js__WEBPACK_IMPORTED_MODULE_23__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _interface_index_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./interface/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _interface_index_js__WEBPACK_IMPORTED_MODULE_24__) if(["default","hooks","document","getComputedStyle","navigator","cancelAnimationFrame","now","requestAnimationFrame","window","Element","createEvent","eventHandler","Event","createEventHandlerForThirdComponent","bindEventHandlersForThirdComponentNode","FormElement","Node","RootElement","Style","SVGElement","Text","MutationObserver","Current","getCurrentInstance","eventSource","addLeadingSlash","createComponentConfig","createPageConfig","createRecursiveComponentConfig","getPageInstance","injectPageInstance","safeExecute","stringify","hydrate","nextTick","options","incrementId"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _interface_index_js__WEBPACK_IMPORTED_MODULE_24__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// hook
// dom-external


// bom





// dom









// others








// typings




/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/element.js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/element.js ***!
  \**************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/event-target.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/event-target.js ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/event.js":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/event.js ***!
  \************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/hydrate.js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/hydrate.js ***!
  \**************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/index.js":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/index.js ***!
  \************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/element.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _element_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _element_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/event.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _event_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _event_js__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _event_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-target.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/event-target.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _event_target_js__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _event_target_js__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _hydrate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hydrate.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/hydrate.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hydrate_js__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _hydrate_js__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/node.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_js__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_js__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/options.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _options_js__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _options_js__WEBPACK_IMPORTED_MODULE_5__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/utils.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _utils_js__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _utils_js__WEBPACK_IMPORTED_MODULE_6__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);









/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/node.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/node.js ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/options.js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/options.js ***!
  \**************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/utils.js":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/interface/utils.js ***!
  \************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/next-tick.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/next-tick.js ***!
  \******************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nextTick: function() { return /* binding */ nextTick; }
/* harmony export */ });
/* harmony import */ var _current_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/current.js");
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/env.js");


const nextTick = (cb, ctx) => {
    const { router } = _current_js__WEBPACK_IMPORTED_MODULE_0__.Current;
    const timerFunc = () => {
        setTimeout(() => {
            ctx ? cb.call(ctx) : cb();
        }, 1);
    };
    if (router === null) {
        timerFunc();
    }
    else {
        let pageElement = null;
        const path = router.$icePath;
        pageElement = _env_js__WEBPACK_IMPORTED_MODULE_1__["default"].document.getElementById(path);
        if (pageElement === null || pageElement === void 0 ? void 0 : pageElement.pendingUpdate) {
            pageElement.enqueueUpdateCallback(cb, ctx);
        }
        else {
            timerFunc();
        }
    }
};


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/options.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/options.js ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   options: function() { return /* binding */ options; }
/* harmony export */ });
const options = {
    prerender: true,
    debug: false,
};


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/perf.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/perf.js ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   perf: function() { return /* binding */ perf; }
/* harmony export */ });
/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/options.js");

class Performance {
    constructor() {
        this.recorder = new Map();
    }
    start(id) {
        if (!_options_js__WEBPACK_IMPORTED_MODULE_0__.options.debug) {
            return;
        }
        this.recorder.set(id, Date.now());
    }
    stop(id) {
        if (!_options_js__WEBPACK_IMPORTED_MODULE_0__.options.debug) {
            return;
        }
        const now = Date.now();
        const prev = this.recorder.get(id);
        const time = now - prev;
        // eslint-disable-next-line no-console
        console.log(`${id} 时长： ${time}ms`);
    }
}
const perf = new Performance();


/***/ }),

/***/ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/utils/index.js":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/utils/index.js ***!
  \********************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customWrapperCache: function() { return /* binding */ customWrapperCache; },
/* harmony export */   extend: function() { return /* binding */ extend; },
/* harmony export */   getComponentsAlias: function() { return /* binding */ getComponentsAlias; },
/* harmony export */   incrementId: function() { return /* binding */ incrementId; },
/* harmony export */   isComment: function() { return /* binding */ isComment; },
/* harmony export */   isElement: function() { return /* binding */ isElement; },
/* harmony export */   isHasExtractProp: function() { return /* binding */ isHasExtractProp; },
/* harmony export */   isParentBinded: function() { return /* binding */ isParentBinded; },
/* harmony export */   isText: function() { return /* binding */ isText; },
/* harmony export */   shortcutAttr: function() { return /* binding */ shortcutAttr; }
/* harmony export */ });
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/constants/index.js");


const incrementId = () => {
    const chatCodes = [];
    // A-Z
    for (let i = 65; i <= 90; i++) {
        chatCodes.push(i);
    }
    // a-z
    for (let i = 97; i <= 122; i++) {
        chatCodes.push(i);
    }
    const chatCodesLen = chatCodes.length - 1;
    const list = [0, 0];
    return () => {
        const target = list.map(item => chatCodes[item]);
        const res = String.fromCharCode(...target);
        let tailIdx = list.length - 1;
        list[tailIdx]++;
        while (list[tailIdx] > chatCodesLen) {
            list[tailIdx] = 0;
            tailIdx = tailIdx - 1;
            if (tailIdx < 0) {
                list.push(0);
                break;
            }
            list[tailIdx]++;
        }
        return res;
    };
};
function isElement(node) {
    return node.nodeType === 1 /* NodeType.ELEMENT_NODE */;
}
function isText(node) {
    return node.nodeType === 3 /* NodeType.TEXT_NODE */;
}
function isComment(node) {
    return node.nodeName === _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.COMMENT;
}
function isHasExtractProp(el) {
    const res = Object.keys(el.props).find(prop => {
        return !(/^(class|style|id)$/.test(prop) || prop.startsWith('data-'));
    });
    return Boolean(res);
}
/**
 * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
 * @param node 当前组件
 * @param type 事件类型
 */
function isParentBinded(node, type) {
    var _a;
    let res = false;
    while ((node === null || node === void 0 ? void 0 : node.parentElement) && node.parentElement._path !== _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.ROOT_STR) {
        if ((_a = node.parentElement.__handlers[type]) === null || _a === void 0 ? void 0 : _a.length) {
            res = true;
            break;
        }
        node = node.parentElement;
    }
    return res;
}
function shortcutAttr(key) {
    switch (key) {
        case _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.STYLE:
            return _ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.Style;
        case _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.ID:
            return _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.UID;
        case _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.CLASS:
            return _ice_shared__WEBPACK_IMPORTED_MODULE_1__.Shortcuts.Class;
        default:
            return key;
    }
}
const customWrapperCache = new Map();
function extend(ctor, methodName, options) {
    if ((0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(options)) {
        options = {
            value: options,
        };
    }
    Object.defineProperty(ctor.prototype, methodName, {
        configurable: true,
        enumerable: true,
        ...options,
    });
}
let componentsAlias;
function getComponentsAlias() {
    if (!componentsAlias) {
        componentsAlias = (0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.getComponentsAlias)(_ice_shared__WEBPACK_IMPORTED_MODULE_1__.internalComponents);
    }
    return componentsAlias;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+plugin-miniapp@1.2.3_@swc+helpers@0.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/plugin-miniapp/esm/miniapp/webpack/template/comp.js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+plugin-miniapp@1.2.3_@swc+helpers@0.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/plugin-miniapp/esm/miniapp/webpack/template/comp.js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ice_miniapp_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ice/miniapp-runtime */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js");
/* eslint-disable no-undef */

// @ts-ignore
Component((0,_ice_miniapp_runtime__WEBPACK_IMPORTED_MODULE_0__.createRecursiveComponentConfig)());


/***/ }),

/***/ "./node_modules/.pnpm/@ice+plugin-miniapp@1.2.3_@swc+helpers@0.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/plugin-miniapp/esm/miniapp/webpack/template/custom-wrapper.js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+plugin-miniapp@1.2.3_@swc+helpers@0.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/plugin-miniapp/esm/miniapp/webpack/template/custom-wrapper.js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ice_miniapp_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ice/miniapp-runtime */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js");
/* eslint-disable no-undef */

// @ts-ignore
Component((0,_ice_miniapp_runtime__WEBPACK_IMPORTED_MODULE_0__.createRecursiveComponentConfig)('custom-wrapper'));


/***/ }),

/***/ "./node_modules/.pnpm/@ice+plugin-miniapp@1.2.3_@swc+helpers@0.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/plugin-miniapp/esm/runtime/index.js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+plugin-miniapp@1.2.3_@swc+helpers@0.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/plugin-miniapp/esm/runtime/index.js ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineMiniappConfig: function() { return /* binding */ defineMiniappConfig; }
/* harmony export */ });
function defineMiniappConfig(miniappConfigOrDefineMiniappConfig) {
    let miniappLifecycles = {};
    if (typeof miniappConfigOrDefineMiniappConfig === 'function') {
        miniappLifecycles = miniappConfigOrDefineMiniappConfig();
    }
    else {
        miniappLifecycles = miniappConfigOrDefineMiniappConfig;
    }
    return miniappLifecycles;
}
const runtime = ({}) => { };
/* harmony default export */ __webpack_exports__["default"] = (runtime);


/***/ }),

/***/ "./node_modules/.pnpm/@ice+plugin-miniapp@1.2.3_@swc+helpers@0.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/plugin-miniapp/esm/targets/wechat/components.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+plugin-miniapp@1.2.3_@swc+helpers@0.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/plugin-miniapp/esm/targets/wechat/components.js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: function() { return /* binding */ components; }
/* harmony export */ });
const _true = 'true';
const _false = 'false';
const _empty = '';
const _zero = '0';
const components = {
    // ======== 调整属性 ========
    Progress: {
        'border-radius': _zero,
        'font-size': '16',
        duration: '30',
        bindActiveEnd: _empty,
    },
    RichText: {
        space: _empty,
        'user-select': _false,
    },
    Text: {
        'user-select': _false,
        overflow: 'visible',
        'max-lines': '',
    },
    Map: {
        polygons: '[]',
        subkey: _empty,
        rotate: _zero,
        skew: _zero,
        'max-scale': '20',
        'min-scale': '3',
        'enable-3D': _false,
        'show-compass': _false,
        'show-scale': _false,
        'enable-overlooking': _false,
        'enable-auto-max-overlooking': _false,
        'enable-zoom': _true,
        'enable-scroll': _true,
        'enable-rotate': _false,
        'enable-satellite': _false,
        'enable-traffic': _false,
        'enable-poi': _true,
        'enable-building': _true,
        setting: '[]',
        bindLabelTap: _empty,
        bindRegionChange: _empty,
        bindPoiTap: _empty,
        bindPolylineTap: _empty,
        bindAbilitySuccess: _empty,
        bindAbilityFailed: _empty,
        bindAuthSuccess: _empty,
        bindInterpolatePoint: _empty,
        bindError: _empty,
        bindAnchorPointTap: _empty,
    },
    Button: {
        lang: 'en',
        'session-from': _empty,
        'send-message-title': _empty,
        'send-message-path': _empty,
        'send-message-img': _empty,
        'app-parameter': _empty,
        'show-message-card': _false,
        'business-id': _empty,
        bindGetUserInfo: _empty,
        bindContact: _empty,
        bindGetPhoneNumber: _empty,
        bindGetRealTimePhoneNumber: _empty,
        bindChooseAvatar: _empty,
        bindError: _empty,
        bindOpenSetting: _empty,
        bindLaunchApp: _empty,
        bindAgreePrivacyAuthorization: _empty,
    },
    Form: {
        'report-submit-timeout': _zero,
    },
    Input: {
        'always-embed': _false,
        'adjust-position': _true,
        'hold-keyboard': _false,
        'safe-password-cert-path': '',
        'safe-password-length': '',
        'safe-password-time-stamp': '',
        'safe-password-nonce': '',
        'safe-password-salt': '',
        'safe-password-custom-hash': '',
        'auto-fill': _empty,
        bindKeyboardHeightChange: _empty,
        bindNicknameReview: _empty,
    },
    Picker: {
        'header-text': _empty,
        level: 'region',
    },
    PickerView: {
        'immediate-change': _false,
        bindPickStart: _empty,
        bindPickEnd: _empty,
    },
    Slider: {
        color: "'#e9e9e9'",
        'selected-color': "'#1aad19'",
    },
    Textarea: {
        'show-confirm-bar': _true,
        'adjust-position': _true,
        'hold-keyboard': _false,
        'disable-default-padding': _false,
        'confirm-type': "'return'",
        'confirm-hold': _false,
        bindKeyboardHeightChange: _empty,
    },
    ScrollView: {
        'enable-flex': _false,
        'scroll-anchoring': _false,
        enhanced: _false,
        'using-sticky': _false,
        'paging-enabled': _false,
        'enable-passive': _false,
        'refresher-enabled': _false,
        'refresher-threshold': '45',
        'refresher-default-style': "'black'",
        'refresher-background': "'#FFF'",
        'refresher-triggered': _false,
        bounces: _true,
        'show-scrollbar': _true,
        'fast-deceleration': _false,
        type: "'list'",
        reverse: _false,
        clip: _true,
        'enable-back-to-top': _false,
        'cache-extent': _empty,
        'min-drag-distance': '18',
        'scroll-into-view-within-extent': _false,
        'scroll-into-view-alignment': "'start'",
        padding: '[0,0,0,0]',
        'refresher-two-level-enabled': _false,
        'refresher-two-level-triggered': _false,
        'refresher-two-level-threshold': '150',
        'refresher-two-level-close-threshold': '80',
        'refresher-two-level-scroll-enabled': _false,
        'refresher-ballistic-refresh-enabled': _false,
        'refresher-two-level-pinned': _false,
        bindDragStart: _empty,
        bindDragging: _empty,
        bindDragEnd: _empty,
        bindRefresherPulling: _empty,
        bindRefresherRefresh: _empty,
        bindRefresherRestore: _empty,
        bindRefresherAbort: _empty,
        bindScrollStart: _empty,
        bindScrollEnd: _empty,
        bindRefresherWillRefresh: _empty,
        bindRefresherStatusChange: _empty,
    },
    StickySection: {
        'push-pinned-header': _true,
        padding: '[0, 0, 0, 0]',
    },
    GridView: {
        type: "'aligned'",
        'cross-axis-count': '2',
        'max-cross-axis-extent': _zero,
        'main-axis-gap': _zero,
        'cross-axis-gap': _zero,
        padding: '[0, 0, 0, 0]',
    },
    GridBuilder: {
        type: "'aligned'",
        list: '[]',
        'cross-axis-count': '2',
        'max-cross-axis-extent': _zero,
        'main-axis-gap': _zero,
        'cross-axis-gap': _zero,
        padding: '[0, 0, 0, 0]',
        bindItemBuild: _empty,
        bindItemDispose: _empty,
    },
    ListView: {
        padding: '[0, 0, 0, 0]',
    },
    ListBuilder: {
        list: '[]',
        type: 'static',
        padding: '[0, 0, 0, 0]',
        'child-count': _empty,
        'child-height': _empty,
        bindItemBuild: _empty,
        bindItemDispose: _empty,
    },
    StickyHeader: {
        'offset-top': '0',
        padding: '[0, 0, 0, 0]',
    },
    Swiper: {
        'snap-to-edge': _false,
        'easing-function': "'default'",
    },
    SwiperItem: {
        'skip-hidden-item-layout': _false,
    },
    Navigator: {
        target: "'self'",
        'app-id': _empty,
        path: _empty,
        'extra-data': _empty,
        version: "'version'",
    },
    Camera: {
        mode: "'normal'",
        resolution: "'medium'",
        'frame-size': "'medium'",
        bindInitDone: _empty,
        bindScanCode: _empty,
    },
    Image: {
        webp: _false,
        'show-menu-by-longpress': _false,
    },
    LivePlayer: {
        mode: "'live'",
        'sound-mode': "'speaker'",
        'auto-pause-if-navigate': _true,
        'auto-pause-if-open-native': _true,
        'picture-in-picture-mode': '[]',
        'enable-auto-rotation': _false,
        'referrer-policy': "'no-referrer'",
        'enable-casting': _false,
        bindstatechange: _empty,
        bindfullscreenchange: _empty,
        bindnetstatus: _empty,
        bindAudioVolumeNotify: _empty,
        bindEnterPictureInPicture: _empty,
        bindLeavePictureInPicture: _empty,
        bindCastingUserSelect: _empty,
        bindCastingStateChange: _empty,
        bindCastingInterrupt: _empty,
    },
    Video: {
        title: _empty,
        'play-btn-position': "'bottom'",
        'enable-play-gesture': _false,
        'auto-pause-if-navigate': _true,
        'auto-pause-if-open-native': _true,
        'vslide-gesture': _false,
        'vslide-gesture-in-fullscreen': _true,
        'show-bottom-progress': _true,
        'ad-unit-id': _empty,
        'poster-for-crawler': _empty,
        'show-casting-button': _false,
        'picture-in-picture-mode': '[]',
        // picture-in-picture-show-progress 属性先注释掉的原因如下：
        // 该属性超过了 wxml 属性的长度限制，实际无法使用且导致编译报错。可等微信官方修复后再放开。
        // 参考1：https://developers.weixin.qq.com/community/develop/doc/000a429beb87f0eac07acc0fc5b400
        // 参考2: https://developers.weixin.qq.com/community/develop/doc/0006883619c48054286a4308258c00?_at=vyxqpllafi
        // 'picture-in-picture-show-progress': 'false',
        'enable-auto-rotation': _false,
        'show-screen-lock-button': _false,
        'show-snapshot-button': _false,
        'show-background-playback-button': _false,
        'background-poster': _empty,
        'referrer-policy': "'no-referrer'",
        'is-drm': _false,
        'is-live': _false,
        'provision-url': _empty,
        'certificate-url': _empty,
        'license-url': _empty,
        'preferred-peak-bit-rate': _empty,
        bindProgress: _empty,
        bindLoadedMetadata: _empty,
        bindControlsToggle: _empty,
        bindEnterPictureInPicture: _empty,
        bindLeavePictureInPicture: _empty,
        bindSeekComplete: _empty,
        bindCastingUserSelect: _empty,
        bindCastingStateChange: _empty,
        bindCastingInterrupt: _empty,
        bindAdLoad: _empty,
        bindAdError: _empty,
        bindAdClose: _empty,
        bindAdPlay: _empty,
    },
    Canvas: {
        type: _empty,
    },
    Ad: {
        'ad-type': "'banner'",
        'ad-theme': "'white'",
    },
    CoverView: {
        'marker-id': _empty,
        slot: _empty,
    },
    // ======== 额外组件 ========
    Editor: {
        'read-only': _false,
        placeholder: _empty,
        'show-img-size': _false,
        'show-img-toolbar': _false,
        'show-img-resize': _false,
        focus: _false,
        bindReady: _empty,
        bindFocus: _empty,
        bindBlur: _empty,
        bindInput: _empty,
        bindStatusChange: _empty,
        name: _empty,
    },
    MatchMedia: {
        'min-width': _empty,
        'max-width': _empty,
        width: _empty,
        'min-height': _empty,
        'max-height': _empty,
        height: _empty,
        orientation: _empty,
    },
    FunctionalPageNavigator: {
        version: "'release'",
        name: _empty,
        args: _empty,
        bindSuccess: _empty,
        bindFail: _empty,
        bindCancel: _empty,
    },
    LivePusher: {
        url: _empty,
        mode: "'RTC'",
        autopush: _false,
        muted: _false,
        'enable-camera': _true,
        'auto-focus': _true,
        orientation: "'vertical'",
        beauty: _zero,
        whiteness: _zero,
        aspect: "'9:16'",
        'min-bitrate': '200',
        'max-bitrate': '1000',
        'audio-quality': "'high'",
        'waiting-image': _empty,
        'waiting-image-hash': _empty,
        zoom: _false,
        'device-position': "'front'",
        'background-mute': _false,
        mirror: _false,
        'remote-mirror': _false,
        'local-mirror': _false,
        'audio-reverb-type': _zero,
        'enable-mic': _true,
        'enable-agc': _false,
        'enable-ans': _false,
        'audio-volume-type': "'voicecall'",
        'video-width': '360',
        'video-height': '640',
        'beauty-style': "'smooth'",
        filter: "'standard'",
        'picture-in-picture-mode': '[]',
        animation: _empty,
        bindStateChange: _empty,
        bindNetStatus: _empty,
        bindBgmStart: _empty,
        bindBgmProgress: _empty,
        bindBgmComplete: _empty,
        bindAudioVolumeNotify: _empty,
    },
    OfficialAccount: {
        bindLoad: _empty,
        bindError: _empty,
    },
    OpenData: {
        type: _empty,
        'open-gid': _empty,
        lang: "'en'",
        'default-text': _empty,
        'default-avatar': _empty,
        bindError: _empty,
    },
    NavigationBar: {
        title: _empty,
        loading: _false,
        'front-color': "'#000000'",
        'background-color': _empty,
        'color-animation-duration': _zero,
        'color-animation-timing-func': "'linear'",
    },
    PageMeta: {
        'background-text-style': _empty,
        'background-color': _empty,
        'background-color-top': _empty,
        'background-color-bottom': _empty,
        'root-background-color': _empty,
        'scroll-top': "''",
        'scroll-duration': '300',
        'page-style': "''",
        'root-font-size': "''",
        'page-orientation': "''",
        bindResize: _empty,
        bindScroll: _empty,
        bindScrollDone: _empty,
    },
    VoipRoom: {
        openid: _empty,
        mode: "'camera'",
        'device-position': "'front'",
        bindError: _empty,
    },
    AdCustom: {
        'unit-id': _empty,
        'ad-intervals': _empty,
        bindLoad: _empty,
        bindError: _empty,
    },
    PageContainer: {
        show: _false,
        duration: '300',
        'z-index': '100',
        overlay: _true,
        position: "'bottom'",
        round: _false,
        'close-on-slide-down': _false,
        'overlay-style': _empty,
        'custom-style': _empty,
        bindBeforeEnter: _empty,
        bindEnter: _empty,
        bindAfterEnter: _empty,
        bindBeforeLeave: _empty,
        bindLeave: _empty,
        bindAfterLeave: _empty,
        bindClickOverlay: _empty,
    },
    ShareElement: {
        mapkey: _empty,
        transform: _false,
        duration: '300',
        'easing-function': "'ease-out'",
    },
    KeyboardAccessory: {},
    RootPortal: {
        enable: _true,
    },
    ChannelLive: {
        'feed-id': _empty,
        'finder-user-name': _empty,
    },
    ChannelVideo: {
        'feed-id': _empty,
        'finder-user-name': _empty,
        'feed-token': _empty,
        autoplay: _false,
        loop: _false,
        muted: _false,
        'object-fit': "'contain'",
        bindError: _empty,
    },
    Snapshot: {
        mode: "'view'",
    },
    Span: {},
    OpenContainer: {
        transitionType: "'fade'",
        transitionDuration: '300',
        closedColor: "'white'",
        closedElevation: _zero,
        closeBorderRadius: _zero,
        middleColor: _empty,
        openColor: "'white'",
        openElevation: _zero,
        openBorderRadius: _zero,
    },
    DraggableSheet: {
        initialChildSize: '0.5',
        minChildSize: '0.25',
        maxChildSize: '1.0',
        snap: _false,
        snapSizes: '[]',
    },
    NestedScrollHeader: {},
    NestedScrollBody: {},
};


/***/ }),

/***/ "./node_modules/.pnpm/@ice+plugin-miniapp@1.2.3_@swc+helpers@0.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/plugin-miniapp/esm/targets/wechat/runtime.js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+plugin-miniapp@1.2.3_@swc+helpers@0.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/plugin-miniapp/esm/targets/wechat/runtime.js ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ice_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ice/shared */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ "./node_modules/.pnpm/@ice+plugin-miniapp@1.2.3_@swc+helpers@0.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/plugin-miniapp/esm/targets/wechat/components.js");


(0,_ice_shared__WEBPACK_IMPORTED_MODULE_1__.mergeInternalComponents)(_components_js__WEBPACK_IMPORTED_MODULE_0__.components);


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/Activity.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/Activity.js ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Activity; },
/* harmony export */   useActive: function() { return /* binding */ useActive; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");

const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const ActivityProvider = Context.Provider;
const useActive = () => {
    const data = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
    return data === null || data === void 0 ? void 0 : data.active;
};
function Activity({ mode, children }) {
    const active = mode === 'visible';
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ActivityProvider, { value: {
            active,
        } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: active ? 'block' : 'none' } }, children)));
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/App.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/App.js ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _AppErrorBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppErrorBoundary.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/AppErrorBoundary.js");
/* harmony import */ var _AppContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppContext.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/AppContext.js");



function App({ children }) {
    const { appConfig } = (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();
    const { strict, errorBoundary } = appConfig.app;
    const StrictMode = strict ? react__WEBPACK_IMPORTED_MODULE_0__.StrictMode : react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
    const ErrorBoundary = errorBoundary ? _AppErrorBoundary_js__WEBPACK_IMPORTED_MODULE_2__["default"] : react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(StrictMode, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary, null, children)));
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/AppContext.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/AppContext.js ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppContextProvider: function() { return /* binding */ AppContextProvider; },
/* harmony export */   useAppContext: function() { return /* binding */ useAppContext; },
/* harmony export */   useAppData: function() { return /* binding */ useAppData; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");

const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
Context.displayName = 'AppContext';
function useAppContext() {
    const value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
    return value;
}
function useAppData() {
    const value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
    return value.appData;
}
const AppContextProvider = Context.Provider;



/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/AppErrorBoundary.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/AppErrorBoundary.js ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AppErrorBoundary; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");

class AppErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super(...arguments);
        this.state = {
            error: null,
        };
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('AppErrorBoundary', error, errorInfo);
    }
    render() {
        if (this.state.error) {
            // TODO: Show the error message and the error stack.
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Something went wrong.");
        }
        return this.props.children;
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/ClientOnly.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/ClientOnly.js ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _useMounted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMounted.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/useMounted.js");


const ClientOnly = ({ children, fallback }) => {
    const mounted = (0,_useMounted_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    // Ref https://github.com/facebook/docusaurus/blob/v2.1.0/packages/docusaurus/src/client/exports/BrowserOnly.tsx
    if (mounted) {
        if (typeof children !== 'function' &&
            "development" === 'development') {
            throw new Error(`Error: The children of <ClientOnly> must be a "render function", e.g. <ClientOnly>{() => <span>{window.location.href}</span>}</ClientOnly>.
Current type: ${(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children) ? 'React element' : typeof children}`);
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children === null || children === void 0 ? void 0 : children());
    }
    return fallback !== null && fallback !== void 0 ? fallback : null;
};
/* harmony default export */ __webpack_exports__["default"] = (ClientOnly);


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/ClientRouter.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/ClientRouter.js ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/App.js");
/* harmony import */ var _AppContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppContext.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/AppContext.js");







function createRouterHistory(history, router) {
    const routerHistory = history;
    routerHistory.push = (to, state) => {
        router.navigate(to, { replace: false, state });
    };
    routerHistory.replace = (to, state) => {
        router.navigate(to, { replace: true, state });
    };
    routerHistory.go = (delta) => {
        router.navigate(delta);
    };
    return routerHistory;
}
let router = null;
function ClientRouter(props) {
    const { Component, routerContext } = props;
    const { revalidate } = (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();
    function clearRouter() {
        if (router) {
            router.dispose();
            router = null;
        }
    }
    // API createRouter only needs to be called once, and create before mount.
    if (false) {}
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (revalidate) {
            // Revalidate after render for SSG while staticDataLoader and dataLoader both defined.
            router === null || router === void 0 ? void 0 : router.revalidate();
        }
        return () => {
            // In case of micro app, ClientRouter will be unmounted,
            // duspose router before mount again.
            clearRouter();
        };
    }, [revalidate]);
    let element;
    if (false) {}
    else {
        element = react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, null);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, element));
}
/* harmony default export */ __webpack_exports__["default"] = (ClientRouter);


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/Document.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/Document.js ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Data: function() { return /* binding */ Data; },
/* harmony export */   DocumentContextProvider: function() { return /* binding */ DocumentContextProvider; },
/* harmony export */   FirstChunkCache: function() { return /* binding */ FirstChunkCache; },
/* harmony export */   Links: function() { return /* binding */ Links; },
/* harmony export */   Main: function() { return /* binding */ Main; },
/* harmony export */   Meta: function() { return /* binding */ Meta; },
/* harmony export */   Scripts: function() { return /* binding */ Scripts; },
/* harmony export */   Title: function() { return /* binding */ Title; },
/* harmony export */   getAllAssets: function() { return /* binding */ getAllAssets; },
/* harmony export */   getEntryAssets: function() { return /* binding */ getEntryAssets; },
/* harmony export */   getPageAssets: function() { return /* binding */ getPageAssets; },
/* harmony export */   usePageAssets: function() { return /* binding */ usePageAssets; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _AppContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppContext.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/AppContext.js");
/* harmony import */ var _routesConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routesConfig.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/routesConfig.js");
/* harmony import */ var _utils_getCurrentRoutePath_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/getCurrentRoutePath.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/utils/getCurrentRoutePath.js");




const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
Context.displayName = 'DocumentContext';
function useDocumentContext() {
    const value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
    return value;
}
const DocumentContextProvider = Context.Provider;
const Meta = (props) => {
    const { matches, loaderData } = (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();
    const meta = (0,_routesConfig_js__WEBPACK_IMPORTED_MODULE_2__.getMeta)(matches, loaderData);
    const { MetaElement = 'meta', } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        meta.map(item => react__WEBPACK_IMPORTED_MODULE_0__.createElement(MetaElement, { key: item.name, ...props, ...item })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(MetaElement, { ...props, name: "ice-meta-count", content: meta.length.toString() })));
};
const Title = (props) => {
    const { matches, loaderData } = (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();
    const title = (0,_routesConfig_js__WEBPACK_IMPORTED_MODULE_2__.getTitle)(matches, loaderData);
    const { TitleElement = 'title', ...rest } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(TitleElement, { ...rest }, title));
};
const Links = (props) => {
    const { loaderData, matches, assetsManifest } = (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();
    const { LinkElement = 'link', ...rest } = props;
    const routeLinks = (0,_routesConfig_js__WEBPACK_IMPORTED_MODULE_2__.getLinks)(matches, loaderData);
    const pageAssets = getPageAssets(matches, assetsManifest);
    const entryAssets = getEntryAssets(assetsManifest);
    const styles = entryAssets.concat(pageAssets).filter(path => path.indexOf('.css') > -1);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        routeLinks.map(routeLinkProps => {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(LinkElement, { key: routeLinkProps.href, ...rest, ...routeLinkProps, "data-route-link": true });
        }),
        styles.map(style => react__WEBPACK_IMPORTED_MODULE_0__.createElement(LinkElement, { key: style, ...rest, rel: "stylesheet", type: "text/css", href: style }))));
};
const Scripts = (props) => {
    const { loaderData, matches, assetsManifest } = (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();
    const { ScriptElement = 'script', ...rest } = props;
    const routeScripts = (0,_routesConfig_js__WEBPACK_IMPORTED_MODULE_2__.getScripts)(matches, loaderData);
    const pageAssets = getPageAssets(matches, assetsManifest);
    const entryAssets = getEntryAssets(assetsManifest);
    // Page assets need to be load before entry assets, so when call dynamic import won't cause duplicate js chunk loaded.
    let scripts = pageAssets.concat(entryAssets).filter(path => path.indexOf('.js') > -1);
    if (assetsManifest.dataLoader) {
        scripts.unshift(`${assetsManifest.publicPath}${assetsManifest.dataLoader}`);
    }
    // Unique scripts for duplicate chunks.
    const jsSet = {};
    scripts = scripts.filter((script) => {
        if (jsSet[script])
            return false;
        jsSet[script] = true;
        return true;
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Data, { ScriptElement: ScriptElement }),
        routeScripts.map(routeScriptProps => {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ScriptElement, { key: routeScriptProps.src, ...rest, ...routeScriptProps, "data-route-script": true });
        }),
        scripts.map(script => {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ScriptElement, { key: script, src: script, ...rest });
        })));
};
function getAllAssets(loaderData, matches, assetsManifest) {
    const routeLinks = (0,_routesConfig_js__WEBPACK_IMPORTED_MODULE_2__.getLinks)(matches, loaderData);
    const routeScripts = (0,_routesConfig_js__WEBPACK_IMPORTED_MODULE_2__.getScripts)(matches, loaderData);
    const pageAssets = getPageAssets(matches, assetsManifest);
    const entryAssets = getEntryAssets(assetsManifest);
    // Page assets need to be load before entry assets, so when call dynamic import won't cause duplicate js chunk loaded.
    const assets = [].concat(routeLinks).concat(routeScripts).concat(pageAssets).concat(entryAssets);
    if (assetsManifest.dataLoader) {
        assets.unshift(`${assetsManifest.publicPath}${assetsManifest.dataLoader}`);
    }
    return assets;
}
function usePageAssets() {
    const { loaderData, matches, assetsManifest } = (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();
    return getAllAssets(loaderData, matches, assetsManifest);
}
// use app context separately
const Data = (props) => {
    const { documentOnly, matches, downgrade, renderMode, serverData, loaderData, revalidate } = (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();
    const appData = (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_1__.useAppData)();
    const { ScriptElement = 'script', } = props;
    const matchedIds = matches.map(match => match.route.id);
    const routePath = matches.length > 0 ? encodeURI((0,_utils_getCurrentRoutePath_js__WEBPACK_IMPORTED_MODULE_3__["default"])(matches)) : '';
    const windowContext = {
        appData,
        loaderData,
        routePath,
        downgrade,
        matchedIds,
        documentOnly,
        renderMode,
        serverData,
        revalidate,
    };
    return (
    // Disable hydration warning for csr, initial app data may not equal csr result.
    // Should merge global context when there are multiple <Data />.
    react__WEBPACK_IMPORTED_MODULE_0__.createElement(ScriptElement, { suppressHydrationWarning: documentOnly, dangerouslySetInnerHTML: { __html: `!(function () {var a = window.__ICE_APP_CONTEXT__ || {};var b = ${JSON.stringify(windowContext)};for (var k in a) {b[k] = a[k]}window.__ICE_APP_CONTEXT__=b;})();` } }));
};
const FirstChunkCache = () => {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { dangerouslySetInnerHTML: { __html: '<!--fcc-->' } });
};
const Main = (props) => {
    const { main } = useDocumentContext();
    const { appConfig } = (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: appConfig.app.rootId, ...props }, main));
};
/**
 * merge assets info for matched route
 */
function getPageAssets(matches, assetsManifest) {
    const { pages, publicPath } = assetsManifest;
    let result = [];
    matches.forEach(match => {
        const { componentName } = match.route;
        const assets = pages[componentName];
        assets && assets.forEach(filePath => {
            result.push(`${publicPath}${filePath}`);
        });
    });
    return result;
}
function getEntryAssets(assetsManifest) {
    const { entries, publicPath } = assetsManifest;
    let result = [];
    Object.values(entries).forEach(assets => {
        result = result.concat(assets);
    });
    return result.map((filePath) => {
        const prefixes = ['http:', 'https:', '//'];
        if (prefixes.some(prefix => filePath.startsWith(prefix))) {
            return filePath;
        }
        else {
            return `${publicPath}${filePath}`;
        }
    });
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/KeepAliveOutlet.js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/KeepAliveOutlet.js ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KeepAliveOutlet; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.21.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Activity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Activity.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/Activity.js");



// @ts-ignore
const Activity = react__WEBPACK_IMPORTED_MODULE_0__.unstable_Activity || _Activity_js__WEBPACK_IMPORTED_MODULE_1__["default"];
const OUTLET_LIMIT = 5;
function KeepAliveOutlet(props) {
    if (!Activity) {
        throw new Error('`<KeepAliveOutlet />` now requires react experimental version. Please install it first.');
    }
    const [outlets, setOutlets] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
    const outlet = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useOutlet)();
    const outletLimit = props.limit || OUTLET_LIMIT;
    const keepAlivePaths = props.paths;
    // Save the first outlet for SSR hydration.
    const outletRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        key: location.key,
        pathname: location.pathname,
        outlet,
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        var _a;
        // If outlets is empty, save the first outlet for SSR hydration,
        // and should not call setOutlets to avoid re-render.
        if (outlets.length !== 0 ||
            ((_a = outletRef.current) === null || _a === void 0 ? void 0 : _a.pathname) !== location.pathname) {
            let currentOutlets = outletRef.current ? [outletRef.current] : outlets;
            // Check current path if exsist before filter, to avoid infinite setOutlets loop.
            const result = currentOutlets.some(o => o.pathname === location.pathname);
            if (keepAlivePaths && keepAlivePaths.length > 0) {
                currentOutlets = currentOutlets.filter(o => keepAlivePaths.includes(o.pathname));
            }
            if (!result) {
                setOutlets([
                    ...currentOutlets,
                    {
                        key: location.key,
                        pathname: location.pathname,
                        outlet,
                    },
                ].slice(-outletLimit));
                outletRef.current = null;
            }
        }
    }, [location.pathname, location.key, outlet, outlets, outletLimit, keepAlivePaths]);
    // Render initail outlet for SSR hydration.
    const renderOutlets = outlets.length === 0 ? [outletRef.current] : outlets;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderOutlets.map((o) => {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Activity, { key: o.key, mode: location.pathname === o.pathname ? 'visible' : 'hidden' }, o.outlet));
    })));
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/RouteContext.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/RouteContext.js ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useConfig: function() { return /* binding */ useConfig; },
/* harmony export */   useData: function() { return /* binding */ useData; }
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.21.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js");

function useData() {
    var _a;
    return (_a = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useLoaderData)()) === null || _a === void 0 ? void 0 : _a.data;
}
function useConfig() {
    var _a;
    return (_a = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useLoaderData)()) === null || _a === void 0 ? void 0 : _a.pageConfig;
}



/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/RouteWrapper.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/RouteWrapper.js ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RouteWrapper; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");

function RouteWrapper(props) {
    const { wrappers = [], id, isLayout, routeExports } = props;
    // layout should only be wrapped by Wrapper with `layout: true`
    const filtered = isLayout ? wrappers.filter(wrapper => wrapper.layout === true) : wrappers;
    const RouteWrappers = filtered.map(item => item.Wrapper);
    let element;
    if (RouteWrappers.length) {
        element = RouteWrappers.reduce((preElement, CurrentWrapper) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CurrentWrapper, { routeId: id, routeExports: routeExports }, preElement)), props.children);
    }
    else {
        element = props.children;
    }
    return element;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/Suspense.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/Suspense.js ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSuspenseData: function() { return /* binding */ useSuspenseData; },
/* harmony export */   withSuspense: function() { return /* binding */ withSuspense; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _AppContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppContext.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/AppContext.js");
/* harmony import */ var _proxyData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proxyData.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/proxyData.js");
/* provided dependency */ var window = __webpack_require__(/*! @ice/miniapp-runtime */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js")["window"];



const LOADER = '__ICE_SUSPENSE_LOADER__';
const isClient = typeof window !== 'undefined' && 'onload' in window;
const SuspenseContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const getHydrateData = (id) => {
    let data = null;
    const loaderData = isClient && window[LOADER];
    let hasHydrateData;
    if (loaderData) {
        // Compatible with the old version which use Map to store data.
        if (loaderData.has) {
            hasHydrateData = loaderData.has(id);
            data = window[LOADER].get(id);
        }
        else {
            hasHydrateData = Object.prototype.hasOwnProperty.call(loaderData, id);
            // If hasHydrateData is false, data will be undefined.
            data = window[LOADER][id];
        }
    }
    return {
        hasHydrateData,
        data,
    };
};
function useSuspenseData(request) {
    const appContext = (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();
    const { requestContext } = appContext;
    const suspenseState = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SuspenseContext);
    const { data, done, promise, update, error, id } = suspenseState;
    const { hasHydrateData, data: hydrateData } = getHydrateData(id);
    let thenable = null;
    if (!hasHydrateData && !error && !done && !promise && request) {
        thenable = request(requestContext);
        thenable.then((response) => {
            update({
                done: true,
                data: response,
                promise: null,
            });
        }).catch(e => {
            update({
                done: true,
                error: e,
                promise: null,
            });
        });
    }
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        // Update state in useEffect, otherwise it will cause bad setState warning.
        if (thenable) {
            update({
                promise: thenable,
            });
        }
    }, [thenable, update]);
    // 1. Use data from server side directly when hydrate.
    if (hasHydrateData) {
        return hydrateData;
    }
    // 2. Check data request error, if error throw it to react.
    if (error) {
        throw error;
    }
    // 3. If request is done, return data.
    if (done) {
        if ( true && typeof data === 'object') {
            return (0,_proxyData_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
        }
        return data;
    }
    // 4. If request is pending, throw the promise to react.
    if (promise) {
        throw promise;
    }
    // 5. If no request, return null.
    if (!request) {
        return null;
    }
    if (!isClient) {
        // 6. Create a promise for the request and throw it to react.
        update({
            promise: thenable,
        });
    }
    throw thenable;
}
function withSuspense(Component) {
    return (props) => {
        const { fallback, id, ...componentProps } = props;
        const [suspenseState, updateSuspenseData] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
            id: id,
            data: null,
            done: false,
            promise: null,
            error: null,
            update,
        });
        function update(value) {
            let newState;
            if (isClient) {
                newState = Object.assign({}, suspenseState, value);
            }
            else {
                // For SSR, setState is not working, so here we need to update the state manually.
                newState = Object.assign(suspenseState, value);
            }
            // For CSR.
            updateSuspenseData(newState);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: fallback || null },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(SuspenseContext.Provider, { value: suspenseState },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, { ...componentProps }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(Data, { id: id }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("script", { dangerouslySetInnerHTML: {
                        __html: `window.dispatchEvent(new CustomEvent('ice-suspense', { detail: { id: ${id ? `'${id}'` : undefined} } }));`,
                    } }))));
    };
}
function Data(props) {
    const data = useSuspenseData();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("script", { id: props.id && `suspense-script-${props.id}`, dangerouslySetInnerHTML: {
            __html: `!function(){window['${LOADER}'] = window['${LOADER}'] || {};window['${LOADER}']['${props.id}'] = ${JSON.stringify(data)}}();`,
        } }));
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/appConfig.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/appConfig.js ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getAppConfig; },
/* harmony export */   defineAppConfig: function() { return /* binding */ defineAppConfig; }
/* harmony export */ });
const defaultAppConfig = {
    app: {
        strict: false,
        rootId: 'ice-container',
    },
    router: {
        type: 'browser',
    },
};
function getAppConfig(appExport) {
    const appConfig = (appExport === null || appExport === void 0 ? void 0 : appExport.default) || {};
    const { app, router, ...others } = appConfig;
    return {
        app: {
            ...defaultAppConfig.app,
            ...(app || {}),
        },
        router: {
            ...defaultAppConfig.router,
            ...(router || {}),
        },
        ...others,
    };
}
function defineAppConfig(appConfigOrDefineAppConfig) {
    if (typeof appConfigOrDefineAppConfig === 'function') {
        return appConfigOrDefineAppConfig();
    }
    else {
        return appConfigOrDefineAppConfig;
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/appData.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/appData.js ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAppData: function() { return /* binding */ getAppData; }
/* harmony export */ });
/* harmony import */ var _dataLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataLoader.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/dataLoader.js");
/* provided dependency */ var window = __webpack_require__(/*! @ice/miniapp-runtime */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js")["window"];

/**
 * Call the getData of app config.
 */
async function getAppData(appExport, requestContext) {
    const hasGlobalLoader = typeof window !== 'undefined' && window.__ICE_DATA_LOADER__;
    const globalLoader = hasGlobalLoader ? window.__ICE_DATA_LOADER__ : null;
    if (globalLoader) {
        return await globalLoader.getData('__app');
    }
    const appDataLoaderConfig = appExport === null || appExport === void 0 ? void 0 : appExport.dataLoader;
    if (!appDataLoaderConfig) {
        return null;
    }
    if (true) {
        let loader;
        if (typeof appDataLoaderConfig === 'function' || Array.isArray(appDataLoaderConfig)) {
            loader = appDataLoaderConfig;
        }
        else {
            loader = appDataLoaderConfig.loader;
        }
        return await (0,_dataLoader_js__WEBPACK_IMPORTED_MODULE_0__.callDataLoader)(loader, requestContext);
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/dataLoader.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/dataLoader.js ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callDataLoader: function() { return /* binding */ callDataLoader; },
/* harmony export */   dataLoader: function() { return /* binding */ dataLoader; },
/* harmony export */   defineDataLoader: function() { return /* binding */ defineDataLoader; },
/* harmony export */   defineServerDataLoader: function() { return /* binding */ defineServerDataLoader; },
/* harmony export */   defineStaticDataLoader: function() { return /* binding */ defineStaticDataLoader; },
/* harmony export */   loadDataByCustomFetcher: function() { return /* binding */ loadDataByCustomFetcher; },
/* harmony export */   parseTemplate: function() { return /* binding */ parseTemplate; },
/* harmony export */   setDecorator: function() { return /* binding */ setDecorator; },
/* harmony export */   setFetcher: function() { return /* binding */ setFetcher; }
/* harmony export */ });
/* harmony import */ var _requestContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestContext.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/requestContext.js");
/* provided dependency */ var document = __webpack_require__(/*! @ice/miniapp-runtime */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js")["document"];
/* provided dependency */ var window = __webpack_require__(/*! @ice/miniapp-runtime */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js")["window"];

function defineDataLoader(dataLoader, options) {
    return {
        loader: dataLoader,
        options,
    };
}
function defineServerDataLoader(dataLoader, options) {
    return {
        loader: dataLoader,
        options,
    };
}
function defineStaticDataLoader(dataLoader) {
    return {
        loader: dataLoader,
    };
}
/**
 * Custom fetcher for load static data loader config.
 * Set globally to avoid passing this fetcher too deep.
 */
let dataLoaderFetcher;
function setFetcher(customFetcher) {
    dataLoaderFetcher = customFetcher;
}
/**
 * Custom decorator for deal with data loader.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let dataLoaderDecorator = (dataLoader, id) => {
    return dataLoader;
};
function setDecorator(customDecorator) {
    dataLoaderDecorator = customDecorator;
}
/**
 * Parse template for static dataLoader.
 */
function parseTemplate(config) {
    const queryParams = {};
    const getQueryParams = () => {
        if (Object.keys(queryParams).length === 0) {
            if (location.search.includes('?')) {
                location.search.substring(1).split('&').forEach(query => {
                    const res = query.split('=');
                    // ?test=1&hello=world
                    if (res[0] !== undefined && res[1] !== undefined) {
                        queryParams[res[0]] = res[1];
                    }
                });
            }
        }
        return queryParams;
    };
    const cookie = {};
    const getCookie = () => {
        if (Object.keys(cookie).length === 0) {
            document.cookie.split(';').forEach(c => {
                const [key, value] = c.split('=');
                if (key !== undefined && value !== undefined) {
                    cookie[key.trim()] = value.trim();
                }
            });
        }
        return cookie;
    };
    // Match all template of query cookie and storage.
    let strConfig = JSON.stringify(config) || '';
    const regexp = /\$\{(queryParams|cookie|storage)(\.(\w|-)+)?}/g;
    let cap = [];
    let matched = [];
    while ((cap = regexp.exec(strConfig)) !== null) {
        matched.push(cap);
    }
    matched.forEach(item => {
        const [origin, key, value] = item;
        if (item && origin && key && value && value.startsWith('.')) {
            if (key === 'queryParams') {
                // Replace query params.
                strConfig = strConfig.replace(origin, getQueryParams()[value.substring(1)] || '');
            }
            else if (key === 'cookie') {
                // Replace cookie.
                strConfig = strConfig.replace(origin, getCookie()[value.substring(1)] || '');
            }
            else if (key === 'storage') {
                // Replace storage.
                strConfig = strConfig.replace(origin, localStorage.getItem(value.substring(1)) || '');
            }
        }
    });
    // Replace url.
    strConfig = strConfig.replace('${url}', location.href);
    return JSON.parse(strConfig);
}
function loadDataByCustomFetcher(config) {
    let parsedConfig = config;
    try {
        // Not parse template in SSG/SSR.
        if (true) {
            parsedConfig = parseTemplate(config);
        }
    }
    catch (error) {
        console.error('parse template error: ', error);
    }
    return dataLoaderFetcher(parsedConfig);
}
/**
 * Handle for different dataLoader.
 */
function callDataLoader(dataLoader, requestContext) {
    if (Array.isArray(dataLoader)) {
        const loaders = dataLoader.map((loader, index) => {
            return typeof loader === 'object' ? loadDataByCustomFetcher(loader) : dataLoaderDecorator(loader, index)(requestContext);
        });
        return loaders;
    }
    if (typeof dataLoader === 'object') {
        return loadDataByCustomFetcher(dataLoader);
    }
    return dataLoaderDecorator(dataLoader)(requestContext);
}
const cache = new Map();
/**
 * Start getData once data-loader.js is ready in client, and set to cache.
 */
function loadInitialDataInClient(loaders) {
    const context = window.__ICE_APP_CONTEXT__ || {};
    const matchedIds = context.matchedIds || [];
    const loaderData = context.loaderData || {};
    const { renderMode } = context;
    const ids = ['__app'].concat(matchedIds);
    ids.forEach(id => {
        var _a;
        const dataFromSSR = (_a = loaderData[id]) === null || _a === void 0 ? void 0 : _a.data;
        if (dataFromSSR) {
            cache.set(renderMode === 'SSG' ? `${id}_ssg` : id, {
                value: dataFromSSR,
            });
            if (renderMode === 'SSR') {
                return;
            }
        }
        const dataLoaderConfig = loaders[id];
        if (dataLoaderConfig) {
            const requestContext = (0,_requestContext_js__WEBPACK_IMPORTED_MODULE_0__["default"])(window.location);
            const { loader } = dataLoaderConfig;
            const promise = callDataLoader(loader, requestContext);
            cache.set(id, {
                value: promise,
            });
        }
    });
}
/**
 * Init data loader in client side.
 * Load initial data and register global loader.
 * In order to load data, JavaScript modules, CSS and other assets in parallel.
 */
async function init(loaders, options) {
    const { fetcher, decorator, runtimeModules, appExport, } = options;
    const runtimeApi = {
        appContext: {
            appExport,
        },
    };
    if (runtimeModules) {
        await Promise.all(runtimeModules.map(module => {
            const runtimeModule = (module.default || module);
            return runtimeModule(runtimeApi);
        }).filter(Boolean));
    }
    if (fetcher) {
        setFetcher(fetcher);
    }
    if (decorator) {
        setDecorator(decorator);
    }
    try {
        loadInitialDataInClient(loaders);
    }
    catch (error) {
        console.error('Load initial data error: ', error);
    }
    window.__ICE_DATA_LOADER__ = {
        getLoader: (id) => {
            return loaders[id];
        },
        getData: (id, options) => {
            let result;
            // First render for ssg use data from build time, second render for ssg will use data from data loader.
            const cacheKey = `${id}${(options === null || options === void 0 ? void 0 : options.renderMode) === 'SSG' ? '_ssg' : ''}`;
            // In CSR, all dataLoader is called by global data loader to avoid bundle dataLoader in page bundle duplicate.
            result = cache.get(cacheKey);
            // Always fetch new data after cache is been used.
            cache.delete(cacheKey);
            // Already send data request.
            if (result) {
                return result.value;
            }
            const dataLoaderConfig = loaders[id];
            // No data loader.
            if (!dataLoaderConfig) {
                return null;
            }
            // Call dataLoader.
            const { loader } = dataLoaderConfig;
            return callDataLoader(loader, (options === null || options === void 0 ? void 0 : options.requestContext) || (0,_requestContext_js__WEBPACK_IMPORTED_MODULE_0__["default"])(window.location));
        },
    };
}
const dataLoader = {
    init,
};
/* harmony default export */ __webpack_exports__["default"] = (dataLoader);


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/dynamic.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/dynamic.js ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dynamic: function() { return /* binding */ dynamic; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _useMounted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMounted.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/useMounted.js");


const isServer = "client" === 'server';
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
function convertModule(mod) {
    return { default: (mod === null || mod === void 0 ? void 0 : mod.default) || mod };
}
const DefaultFallback = () => null;
function dynamic(loader, option) {
    const { ssr = true, fallback = DefaultFallback } = option || {};
    let realLoader;
    // convert dynamic(import('xxx')) to dynamic(() => import('xxx'))
    if (loader instanceof Promise) {
        realLoader = () => loader;
    }
    else if (typeof loader === 'function') {
        realLoader = loader;
    }
    if (!realLoader)
        return DefaultFallback;
    const Fallback = fallback;
    if (!ssr && isServer) {
        return () => react__WEBPACK_IMPORTED_MODULE_0__.createElement(Fallback, null);
    }
    const LazyComp = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => realLoader().then(convertModule));
    return (props) => {
        const hasMounted = (0,_useMounted_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        return ssr || hasMounted ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0__.createElement(Fallback, null) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(LazyComp, { ...props }))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Fallback, null));
    };
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/history.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/history.js ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routerHistory: function() { return /* binding */ routerHistory; },
/* harmony export */   setHistory: function() { return /* binding */ setHistory; }
/* harmony export */ });
// Value of history will be modified after render Router.
let routerHistory = null;
function setHistory(customHistory) {
    routerHistory = customHistory;
}



/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/index.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/index.js ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppContextProvider: function() { return /* reexport safe */ _AppContext_js__WEBPACK_IMPORTED_MODULE_0__.AppContextProvider; },
/* harmony export */   AppErrorBoundary: function() { return /* reexport safe */ _AppErrorBoundary_js__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   Await: function() { return /* reexport safe */ _routes_js__WEBPACK_IMPORTED_MODULE_18__.Await; },
/* harmony export */   ClientOnly: function() { return /* reexport safe */ _ClientOnly_js__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   Data: function() { return /* reexport safe */ _Document_js__WEBPACK_IMPORTED_MODULE_7__.Data; },
/* harmony export */   FirstChunkCache: function() { return /* reexport safe */ _Document_js__WEBPACK_IMPORTED_MODULE_7__.FirstChunkCache; },
/* harmony export */   KeepAliveOutlet: function() { return /* reexport safe */ _KeepAliveOutlet_js__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   Link: function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Link; },
/* harmony export */   Links: function() { return /* reexport safe */ _Document_js__WEBPACK_IMPORTED_MODULE_7__.Links; },
/* harmony export */   Main: function() { return /* reexport safe */ _Document_js__WEBPACK_IMPORTED_MODULE_7__.Main; },
/* harmony export */   Meta: function() { return /* reexport safe */ _Document_js__WEBPACK_IMPORTED_MODULE_7__.Meta; },
/* harmony export */   NavLink: function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_19__.NavLink; },
/* harmony export */   Outlet: function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Outlet; },
/* harmony export */   RouteErrorComponent: function() { return /* reexport safe */ _routes_js__WEBPACK_IMPORTED_MODULE_18__.RouteErrorComponent; },
/* harmony export */   Runtime: function() { return /* reexport safe */ _runtime_js__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   Scripts: function() { return /* reexport safe */ _Document_js__WEBPACK_IMPORTED_MODULE_7__.Scripts; },
/* harmony export */   Title: function() { return /* reexport safe */ _Document_js__WEBPACK_IMPORTED_MODULE_7__.Title; },
/* harmony export */   WrapRouteComponent: function() { return /* reexport safe */ _routes_js__WEBPACK_IMPORTED_MODULE_18__.WrapRouteComponent; },
/* harmony export */   callDataLoader: function() { return /* reexport safe */ _dataLoader_js__WEBPACK_IMPORTED_MODULE_6__.callDataLoader; },
/* harmony export */   createRouteLoader: function() { return /* reexport safe */ _routes_js__WEBPACK_IMPORTED_MODULE_18__.createRouteLoader; },
/* harmony export */   dataLoader: function() { return /* reexport safe */ _dataLoader_js__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   defineAppConfig: function() { return /* reexport safe */ _appConfig_js__WEBPACK_IMPORTED_MODULE_1__.defineAppConfig; },
/* harmony export */   defineDataLoader: function() { return /* reexport safe */ _dataLoader_js__WEBPACK_IMPORTED_MODULE_6__.defineDataLoader; },
/* harmony export */   defineServerDataLoader: function() { return /* reexport safe */ _dataLoader_js__WEBPACK_IMPORTED_MODULE_6__.defineServerDataLoader; },
/* harmony export */   defineStaticDataLoader: function() { return /* reexport safe */ _dataLoader_js__WEBPACK_IMPORTED_MODULE_6__.defineStaticDataLoader; },
/* harmony export */   dynamic: function() { return /* reexport safe */ _dynamic_js__WEBPACK_IMPORTED_MODULE_10__.dynamic; },
/* harmony export */   getAppConfig: function() { return /* reexport safe */ _appConfig_js__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   getAppData: function() { return /* reexport safe */ _appData_js__WEBPACK_IMPORTED_MODULE_5__.getAppData; },
/* harmony export */   getRequestContext: function() { return /* reexport safe */ _requestContext_js__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   history: function() { return /* reexport safe */ _history_js__WEBPACK_IMPORTED_MODULE_9__.routerHistory; },
/* harmony export */   runClientApp: function() { return /* reexport safe */ _runClientApp_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   unstable_useDocumentData: function() { return /* binding */ unstable_useDocumentData; },
/* harmony export */   useActive: function() { return /* reexport safe */ _Activity_js__WEBPACK_IMPORTED_MODULE_11__.useActive; },
/* harmony export */   useAppContext: function() { return /* binding */ useAppContext; },
/* harmony export */   useAppData: function() { return /* reexport safe */ _AppContext_js__WEBPACK_IMPORTED_MODULE_0__.useAppData; },
/* harmony export */   useAsyncValue: function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useAsyncValue; },
/* harmony export */   useConfig: function() { return /* reexport safe */ _RouteContext_js__WEBPACK_IMPORTED_MODULE_4__.useConfig; },
/* harmony export */   useData: function() { return /* reexport safe */ _RouteContext_js__WEBPACK_IMPORTED_MODULE_4__.useData; },
/* harmony export */   useLocation: function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useLocation; },
/* harmony export */   useMounted: function() { return /* reexport safe */ _useMounted_js__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   useNavigate: function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useNavigate; },
/* harmony export */   useNavigation: function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useNavigation; },
/* harmony export */   usePageAssets: function() { return /* reexport safe */ _Document_js__WEBPACK_IMPORTED_MODULE_7__.usePageAssets; },
/* harmony export */   usePageLifecycle: function() { return /* reexport safe */ _usePageLifecycle_js__WEBPACK_IMPORTED_MODULE_16__["default"]; },
/* harmony export */   useParams: function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useParams; },
/* harmony export */   usePublicAppContext: function() { return /* binding */ usePublicAppContext; },
/* harmony export */   useRevalidator: function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useRevalidator; },
/* harmony export */   useSearchParams: function() { return /* reexport safe */ react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useSearchParams; },
/* harmony export */   useSuspenseData: function() { return /* reexport safe */ _Suspense_js__WEBPACK_IMPORTED_MODULE_17__.useSuspenseData; },
/* harmony export */   withSuspense: function() { return /* reexport safe */ _Suspense_js__WEBPACK_IMPORTED_MODULE_17__.withSuspense; }
/* harmony export */ });
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runtime.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/runtime.js");
/* harmony import */ var _runClientApp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runClientApp.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/runClientApp.js");
/* harmony import */ var _AppContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppContext.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/AppContext.js");
/* harmony import */ var _appData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appData.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/appData.js");
/* harmony import */ var _RouteContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RouteContext.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/RouteContext.js");
/* harmony import */ var _Document_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Document.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/Document.js");
/* harmony import */ var _dataLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataLoader.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/dataLoader.js");
/* harmony import */ var _requestContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./requestContext.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/requestContext.js");
/* harmony import */ var _AppErrorBoundary_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AppErrorBoundary.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/AppErrorBoundary.js");
/* harmony import */ var _appConfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appConfig.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/appConfig.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./history.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/history.js");
/* harmony import */ var _KeepAliveOutlet_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./KeepAliveOutlet.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/KeepAliveOutlet.js");
/* harmony import */ var _Activity_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Activity.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/Activity.js");
/* harmony import */ var _ClientOnly_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ClientOnly.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/ClientOnly.js");
/* harmony import */ var _useMounted_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useMounted.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/useMounted.js");
/* harmony import */ var _usePageLifecycle_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./usePageLifecycle.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/usePageLifecycle.js");
/* harmony import */ var _Suspense_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Suspense.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/Suspense.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/routes.js");
/* harmony import */ var _dynamic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dynamic.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/dynamic.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.21.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js");



















function useAppContext() {
    console.warn('import { useAppContext } from \'@ice/runtime\'; is deprecated, please use import { useAppContext } from \'ice\'; instead.');
    return (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_0__.useAppContext)();
}
function usePublicAppContext() {
    const context = (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_0__.useAppContext)();
    const { appConfig, routePath, downgrade, documentOnly, renderMode, } = context;
    return {
        appConfig,
        routePath,
        downgrade,
        documentOnly,
        renderMode,
    };
}
function useDocumentData() {
    const context = (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_0__.useAppContext)();
    return context.documentData;
}
// @TODO: remove unstable prefix or refactor.
// eslint-disable-next-line
const unstable_useDocumentData = useDocumentData;




/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/jsx-dev-runtime.js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/jsx-dev-runtime.js ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ice_jsx_runtime_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ice/jsx-runtime/jsx-dev-runtime */ "./node_modules/.pnpm/@ice+jsx-runtime@0.3.1_react@18.3.1/node_modules/@ice/jsx-runtime/esm/dev.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ice_jsx_runtime_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _ice_jsx_runtime_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/matchRoutes.js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/matchRoutes.js ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ matchRoutes; }
/* harmony export */ });
/* harmony import */ var _singleRouter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singleRouter.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/singleRouter.js");


function matchRoutes(routes, location, basename) {
    const matchRoutesFn =  false ? 0 : _singleRouter_js__WEBPACK_IMPORTED_MODULE_0__.matchRoutes;
    let matches = matchRoutesFn(routes, location, basename);
    if (!matches)
        return [];
    return matches.map(({ params, pathname, pathnameBase, route }) => ({
        params,
        pathname,
        route: route,
        pathnameBase,
    }));
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/proxyData.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/proxyData.js ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function proxyData(data) {
    if (typeof Proxy === 'function') {
        const errorMessage = 'Do not mutate suspense data directly, it will cause unexpected behavior.';
        const handler = {
            deleteProperty(target, prop) {
                console.error(errorMessage);
                delete target[prop];
                return true;
            },
            get(target, prop, receiver) {
                const value = Reflect.get(target, prop, receiver);
                if (typeof value === 'object' && value !== null) {
                    return new Proxy(value, handler);
                }
                return value;
            },
            set(target, prop, value, receiver) {
                if (prop === 'length' && Array.isArray(target)) {
                    if (value < target.length) {
                        console.error(errorMessage, `Popping value "${target[target.length - 1]}" from array`);
                    }
                    else {
                        console.error(errorMessage, `Pushing value "${value}" to array`);
                    }
                }
                else {
                    console.error(errorMessage, `Setting property "${String(prop)}" to "${value}"`);
                }
                Reflect.set(target, prop, value, receiver);
                return true;
            },
        };
        return new Proxy(data, handler);
    }
    else {
        console.log('Recommend using the latest Chrome to debug suspense data.');
        return data;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (proxyData);


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/reportRecoverableError.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/reportRecoverableError.js ***!
  \***************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOnRecoverableError: function() { return /* binding */ defaultOnRecoverableError; }
/* harmony export */ });
function isRuntimeWarning(error) {
    return error instanceof Error ? [
        'This Suspense boundary received an update before it finished hydrating.',
    ].some((message) => { var _a; return (_a = error === null || error === void 0 ? void 0 : error.message) === null || _a === void 0 ? void 0 : _a.includes(message); }) : false;
}
const defaultOnRecoverableError = typeof reportError === 'function'
    ? reportError
    : function (error) {
        console['error'](error);
    };
const reportRecoverableError = (error, errorStack, options) => {
    const ignoreError = (options === null || options === void 0 ? void 0 : options.ignoreRuntimeWarning) && isRuntimeWarning(error);
    if (!ignoreError) {
        if (false) {}
        // Fallback to default error handler.
        defaultOnRecoverableError(error);
    }
};
/* harmony default export */ __webpack_exports__["default"] = (reportRecoverableError);


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/requestContext.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/requestContext.js ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getRequestContext; },
/* harmony export */   parseSearch: function() { return /* binding */ parseSearch; }
/* harmony export */ });
/**
 * context for getData both in server and client side.
 */
function getRequestContext(location, serverContext = {}) {
    var _a;
    const { pathname, search } = location;
    // Use query form server context first to avoid unnecessary parsing.
    // @ts-ignore
    const query = ((_a = serverContext === null || serverContext === void 0 ? void 0 : serverContext.req) === null || _a === void 0 ? void 0 : _a.query) || parseSearch(search);
    const requestContext = {
        ...(serverContext || {}),
        pathname,
        query,
    };
    return requestContext;
}
/**
 * Search string to object
 * URLSearchParams is not compatible with iOS9 and IE.
 */
function parseSearch(search) {
    // remove first '?'
    if (search.indexOf('?') === 0) {
        search = search.slice(1);
    }
    const result = {};
    let pairs = search.split('&');
    for (let j = 0; j < pairs.length; j++) {
        const value = pairs[j];
        const index = value.indexOf('=');
        if (index > -1) {
            const k = value.slice(0, index);
            const v = value.slice(index + 1);
            result[k] = v;
        }
        else if (value) {
            result[value] = '';
        }
    }
    return result;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/routes.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/routes.js ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Await: function() { return /* binding */ Await; },
/* harmony export */   RouteComponent: function() { return /* binding */ RouteComponent; },
/* harmony export */   RouteErrorComponent: function() { return /* binding */ RouteErrorComponent; },
/* harmony export */   WrapRouteComponent: function() { return /* binding */ WrapRouteComponent; },
/* harmony export */   createRouteLoader: function() { return /* binding */ createRouteLoader; },
/* harmony export */   getRoutesPath: function() { return /* binding */ getRoutesPath; },
/* harmony export */   loadRouteModule: function() { return /* binding */ loadRouteModule; },
/* harmony export */   loadRouteModules: function() { return /* binding */ loadRouteModules; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.21.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _RouteWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RouteWrapper.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/RouteWrapper.js");
/* harmony import */ var _AppContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppContext.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/AppContext.js");
/* harmony import */ var _dataLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dataLoader.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/dataLoader.js");
/* harmony import */ var _routesConfig_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routesConfig.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/routesConfig.js");
/* harmony import */ var _requestContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requestContext.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/requestContext.js");
/* provided dependency */ var window = __webpack_require__(/*! @ice/miniapp-runtime */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js")["window"];







function getRoutesPath(routes, parentPath = '') {
    let paths = [];
    routes.forEach((route) => {
        const pathId = `${parentPath}/${route.path || ''}`.replace('//', '/');
        if (route.children) {
            paths.push(...getRoutesPath(route.children, pathId));
        }
        else {
            paths.push(pathId);
        }
    });
    return paths.map(str => str.replace('//', '/'));
}
async function loadRouteModule(route, routeModulesCache = {}) {
    const { id, lazy } = route;
    if ( true && // Don't use module cache and should load again in ssr. Ref: https://github.com/ice-lab/ice-next/issues/82
        id in routeModulesCache) {
        return routeModulesCache[id];
    }
    try {
        const routeModule = await lazy();
        routeModulesCache[id] = routeModule;
        return routeModule;
    }
    catch (error) {
        console.error(`Failed to load route module: ${id}.`);
        // Re-throw error for better debugging.
        throw error;
    }
}
async function loadRouteModules(routes, originRouteModules = {}) {
    const routeModules = { ...originRouteModules };
    for (const route of routes) {
        const routeModule = await loadRouteModule(route, routeModules);
        routeModules[route.id] = routeModule;
    }
    return routeModules;
}
// Wrap route component with runtime wrappers.
function WrapRouteComponent(options) {
    const { routeId, isLayout, routeExports } = options;
    const { RouteWrappers } = (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RouteWrapper_js__WEBPACK_IMPORTED_MODULE_2__["default"], { routeExports: routeExports, id: routeId, isLayout: isLayout, wrappers: RouteWrappers },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(routeExports.default, null)));
}
function RouteComponent({ id }) {
    // get current route component from latest routeModules
    const { routeModules } = (0,_AppContext_js__WEBPACK_IMPORTED_MODULE_1__.useAppContext)();
    const { Component } = routeModules[id] || {};
    if (true) {
        if (!Component) {
            throw new Error(`Route "${id}" has no component! Please go add a \`default\` export in the route module file.\n` +
                'If you were trying to navigate or submit to a resource route, use `<a>` instead of `<Link>` or `<Form reloadDocument>`.');
        }
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, null);
}
function ErrorComponentWithRouter() {
    const error = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useRouteError)();
    if (error) {
        // Re-throws the error so it can be caught by App Error Boundary.
        throw error;
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
}
function RouteErrorComponent() {
    return  false ? 0 : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
}
function Await(props) {
    return  false ? (0) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.children);
}
function getClientLoaderContext(url) {
    // Compatible with browsers do not support URL.
    const patterns = {
        protocol: '(?:([^:/?#]+):)',
        authority: '(?://([^/?#]*))',
        path: '([^?#]*)',
        query: '(\\?[^#]*)',
        hash: '(#.*)',
    };
    const urlRegExp = new RegExp(`^${patterns.protocol}?${patterns.authority}?${patterns.path}${patterns.query}?${patterns.hash}?`);
    const urlMatch = urlRegExp.exec(url);
    return urlMatch ? {
        pathname: urlMatch[3] || '',
        query: (0,_requestContext_js__WEBPACK_IMPORTED_MODULE_4__.parseSearch)(urlMatch[4] || ''),
    } : null;
}
function createRouteLoader(options) {
    let dataLoaderConfig;
    const { dataLoader, pageConfig, staticDataLoader, serverDataLoader } = options.module;
    const { requestContext: defaultRequestContext, renderMode, routeId } = options;
    const globalLoader = (typeof window !== 'undefined' && window.__ICE_DATA_LOADER__) ? window.__ICE_DATA_LOADER__ : null;
    if (true) {
        if (globalLoader) {
            dataLoaderConfig = globalLoader.getLoader(routeId);
        }
        else if (renderMode === 'SSG') {
            dataLoaderConfig = staticDataLoader;
        }
        else if (renderMode === 'SSR') {
            dataLoaderConfig = serverDataLoader || dataLoader;
        }
        else {
            dataLoaderConfig = dataLoader;
        }
    }
    if (!dataLoaderConfig) {
        return async () => {
            const loaderData = {
                pageConfig: pageConfig ? pageConfig({}) : {},
            };
            if (true) {
                await (0,_routesConfig_js__WEBPACK_IMPORTED_MODULE_5__.updateRoutesConfig)(loaderData);
            }
            return loaderData;
        };
    }
    // if ICE_CORE_REMOVE_DATA_LOADER is true, dataLoaderConfig should be null and it already return above.
    // dataLoader should be always called in server side because of the serverDataLoader.
    if (true) {
        let loader;
        let loaderOptions;
        // Compat dataLoaderConfig not return by defineDataLoader.
        if (typeof dataLoaderConfig === 'function' || Array.isArray(dataLoaderConfig)) {
            loader = dataLoaderConfig;
        }
        else {
            loader = dataLoaderConfig.loader;
            loaderOptions = dataLoaderConfig.options;
        }
        const getData = (requestContext) => {
            let routeData;
            if (true) {
                if (globalLoader) {
                    routeData = globalLoader.getData(routeId, { renderMode, requestContext });
                }
                else {
                    routeData = (0,_dataLoader_js__WEBPACK_IMPORTED_MODULE_6__.callDataLoader)(loader, requestContext);
                }
            }
            return routeData;
        };
        // Async dataLoader.
        if (loaderOptions === null || loaderOptions === void 0 ? void 0 : loaderOptions.defer) {
            if (false) {}
            else {
                throw new Error('DataLoader: defer is not supported in single router mode.');
            }
        }
        // Await dataLoader before render.
        return async (params) => {
            const result = getData( true && params ? getClientLoaderContext(params.request.url) : defaultRequestContext);
            let routeData;
            try {
                if (Array.isArray(result)) {
                    routeData = await Promise.all(result);
                }
                else if (result instanceof Promise) {
                    routeData = await result;
                }
                else {
                    routeData = result;
                }
            }
            catch (error) {
                if (true) {
                    console.error('DataLoader: getData error.\n', error);
                    routeData = {
                        message: 'DataLoader: getData error.',
                        error,
                    };
                }
                else {}
            }
            const routeConfig = pageConfig ? pageConfig({ data: routeData }) : {};
            const loaderData = {
                data: routeData,
                pageConfig: routeConfig,
            };
            // Update routes config when render mode is CSR.
            if (true) {
                await (0,_routesConfig_js__WEBPACK_IMPORTED_MODULE_5__.updateRoutesConfig)(loaderData);
            }
            return loaderData;
        };
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/routesConfig.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/routesConfig.js ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLinks: function() { return /* binding */ getLinks; },
/* harmony export */   getMeta: function() { return /* binding */ getMeta; },
/* harmony export */   getScripts: function() { return /* binding */ getScripts; },
/* harmony export */   getTitle: function() { return /* binding */ getTitle; },
/* harmony export */   updateRoutesConfig: function() { return /* binding */ updateRoutesConfig; }
/* harmony export */ });
/* provided dependency */ var document = __webpack_require__(/*! @ice/miniapp-runtime */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js")["document"];
function getMeta(matches, loadersData) {
    return getMergedValue('meta', matches, loadersData) || [];
}
function getLinks(matches, loadersData) {
    return getMergedValue('links', matches, loadersData) || [];
}
function getScripts(matches, loadersData) {
    return getMergedValue('scripts', matches, loadersData) || [];
}
function getTitle(matches, loadersData) {
    return getMergedValue('title', matches, loadersData);
}
/**
 * merge value for each matched route
 */
function getMergedValue(key, matches, loadersData) {
    var _a;
    let result;
    for (let match of matches) {
        const routeId = match.route.id;
        const data = (_a = loadersData[routeId]) === null || _a === void 0 ? void 0 : _a.pageConfig;
        const value = data === null || data === void 0 ? void 0 : data[key];
        if (Array.isArray(value)) {
            // merge array
            result = result ? result.concat(value) : value;
        }
        else if (value) {
            // overwrite
            result = value;
        }
    }
    return result;
}
/**
 * update routes config to document.
 */
async function updateRoutesConfig(loaderData) {
    const routeConfig = loaderData === null || loaderData === void 0 ? void 0 : loaderData.pageConfig;
    const title = routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.title;
    if (title) {
        document.title = title;
    }
    const meta = (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.meta) || [];
    const links = (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.links) || [];
    const scripts = (routeConfig === null || routeConfig === void 0 ? void 0 : routeConfig.scripts) || [];
    await Promise.all([
        updateMeta(meta),
        updateAssets('link', links),
        updateAssets('script', scripts),
    ]);
}
/**
 * find meta by 'next-meta-count' and update it
 */
function updateMeta(meta) {
    var _a;
    const headEl = document.head;
    const metaCountEl = headEl.querySelector('meta[name=ice-meta-count]');
    if (!metaCountEl) {
        console.warn('Can not find meta element.');
        return;
    }
    const headCount = Number(metaCountEl.content);
    const oldTags = [];
    for (let i = 0, j = metaCountEl.previousElementSibling; i < headCount; i++, j = j === null || j === void 0 ? void 0 : j.previousElementSibling) {
        if (((_a = j === null || j === void 0 ? void 0 : j.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'meta') {
            oldTags.push(j);
        }
    }
    const newTags = meta.map(item => {
        return reactElementToDOM('meta', item);
    });
    oldTags.forEach((t) => t.parentNode.removeChild(t));
    newTags.forEach((t) => headEl.insertBefore(t, metaCountEl));
    metaCountEl.content = (newTags.length).toString();
}
const DOMAttributeNames = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    noModule: 'noModule',
};
/**
 * map element props to dom
 * https://github.com/vercel/next.js/blob/canary/packages/next/client/head-manager.ts#L9
 */
function reactElementToDOM(type, props) {
    const el = document.createElement(type);
    for (const p in props) {
        // we don't render undefined props to the DOM
        if (props[p] === undefined)
            continue;
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (type === 'script' &&
            (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
            el[attr] = !!props[p];
        }
        else {
            el.setAttribute(attr, props[p]);
        }
    }
    return el;
}
const looseToArray = (input) => [].slice.call(input);
/**
 * Load links/scripts for current page.
 * Remove links/scripts for the last page.
 */
async function updateAssets(type, assets) {
    const oldTags = looseToArray(document.querySelectorAll(`${type}[data-route-${type}]`));
    await Promise.all(assets.map((asset) => {
        return appendTags(type, asset);
    }));
    oldTags.forEach((tag) => {
        var _a;
        // In some parcel case oldTags may be removed by other routes.
        (_a = tag.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(tag);
    });
}
async function appendTags(type, props) {
    return new Promise((resolve, reject) => {
        const tag = reactElementToDOM(type, props);
        tag.setAttribute(`data-route-${type}`, 'true');
        tag.onload = () => {
            resolve(null);
        };
        tag.onerror = () => {
            reject();
        };
        document.head.appendChild(tag);
    });
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/runClientApp.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/runClientApp.js ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ runClientApp; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js");
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @remix-run/router */ "./node_modules/.pnpm/@remix-run+router@1.14.2/node_modules/@remix-run/router/dist/router.js");
/* harmony import */ var _singleRouter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./singleRouter.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/singleRouter.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/history.js");
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./runtime.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/runtime.js");
/* harmony import */ var _appData_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./appData.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/appData.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/routes.js");
/* harmony import */ var _requestContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requestContext.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/requestContext.js");
/* harmony import */ var _appConfig_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appConfig.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/appConfig.js");
/* harmony import */ var _matchRoutes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./matchRoutes.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/matchRoutes.js");
/* harmony import */ var _dataLoader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dataLoader.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/dataLoader.js");
/* harmony import */ var _ClientRouter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ClientRouter.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/ClientRouter.js");
/* harmony import */ var _utils_addLeadingSlash_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/addLeadingSlash.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/utils/addLeadingSlash.js");
/* harmony import */ var _AppContext_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AppContext.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/AppContext.js");
/* harmony import */ var _utils_deprecatedHistory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/deprecatedHistory.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/utils/deprecatedHistory.js");
/* harmony import */ var _reportRecoverableError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reportRecoverableError.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/reportRecoverableError.js");
/* provided dependency */ var window = __webpack_require__(/*! @ice/miniapp-runtime */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js")["window"];
/* provided dependency */ var document = __webpack_require__(/*! @ice/miniapp-runtime */ "./node_modules/.pnpm/@ice+miniapp-runtime@1.2.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/miniapp-runtime/esm/index.js")["document"];

















async function runClientApp(options) {
    const { app, createRoutes, runtimeModules, basename, hydrate, memoryRouter, runtimeOptions, dataLoaderFetcher, dataLoaderDecorator, } = options;
    const windowContext = window.__ICE_APP_CONTEXT__ || {};
    const assetsManifest = window.__ICE_ASSETS_MANIFEST__ || {};
    let { appData, loaderData, routePath, downgrade, documentOnly, renderMode, serverData, revalidate, } = windowContext;
    const formattedBasename = (0,_utils_addLeadingSlash_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basename);
    const requestContext = (0,_requestContext_js__WEBPACK_IMPORTED_MODULE_3__["default"])(window.location);
    const appConfig = (0,_appConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"])(app);
    const routes = createRoutes ? createRoutes({
        requestContext,
        renderMode: 'CSR',
    }) : [];
    const historyOptions = {
        memoryRouter,
        initialEntry: routePath,
        routes,
    };
    const history = createHistory(appConfig, historyOptions);
    // Set history for import it from ice.
    (0,_history_js__WEBPACK_IMPORTED_MODULE_5__.setHistory)((0,_utils_deprecatedHistory_js__WEBPACK_IMPORTED_MODULE_6__.deprecatedHistory)(history));
    const appContext = {
        appExport: app,
        routes,
        appConfig,
        appData,
        loaderData,
        assetsManifest,
        basename: formattedBasename,
        routePath,
        renderMode,
        requestContext,
        serverData,
        revalidate,
    };
    const runtime = new _runtime_js__WEBPACK_IMPORTED_MODULE_7__["default"](appContext, runtimeOptions);
    runtime.setAppRouter(_ClientRouter_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
    // Load static module before getAppData,
    // so we can call request in in getAppData which provide by `plugin-request`.
    if (runtimeModules.statics) {
        await Promise.all(runtimeModules.statics.map(m => runtime.loadModule(m)).filter(Boolean));
    }
    if (true) {
        dataLoaderFetcher && (0,_dataLoader_js__WEBPACK_IMPORTED_MODULE_9__.setFetcher)(dataLoaderFetcher);
        dataLoaderDecorator && (0,_dataLoader_js__WEBPACK_IMPORTED_MODULE_9__.setDecorator)(dataLoaderDecorator);
    }
    if (!appData) {
        appData = await (0,_appData_js__WEBPACK_IMPORTED_MODULE_10__.getAppData)(app, requestContext);
    }
    const needHydrate = hydrate && !downgrade && !documentOnly;
    if (needHydrate) {
        runtime.setRender((container, element) => {
            var _a, _b, _c;
            const hydrateOptions = {
                // @ts-ignore react-dom do not define the type of second argument of onRecoverableError.
                onRecoverableError: ((_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.app) === null || _a === void 0 ? void 0 : _a.onRecoverableError) ||
                    ((error, errorInfo) => {
                        (0,_reportRecoverableError_js__WEBPACK_IMPORTED_MODULE_11__["default"])(error, errorInfo, { ignoreRuntimeWarning: revalidate });
                    }),
            };
            if ((_b = appConfig === null || appConfig === void 0 ? void 0 : appConfig.app) === null || _b === void 0 ? void 0 : _b.onBeforeHydrate) {
                (_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.app) === null || _c === void 0 ? void 0 : _c.onBeforeHydrate();
            }
            return react_dom_client__WEBPACK_IMPORTED_MODULE_1__.hydrateRoot(container, element, hydrateOptions);
        });
    }
    // Reset app context after app context is updated.
    runtime.setAppContext({ ...appContext, appData });
    if (runtimeModules.commons) {
        await Promise.all(runtimeModules.commons.map(m => runtime.loadModule(m)).filter(Boolean));
    }
    return render({ runtime, history, needHydrate });
}
async function render({ history, runtime, needHydrate }) {
    const appContext = runtime.getAppContext();
    const { appConfig, loaderData, routes, basename, routePath } = appContext;
    const appRender = runtime.getRender();
    const AppRuntimeProvider = runtime.composeAppProvider() || react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
    const AppRouter = runtime.getAppRouter();
    const rootId = appConfig.app.rootId || 'app';
    let root = document.getElementById(rootId);
    if (!root) {
        root = document.createElement('div');
        root.id = rootId;
        document.body.appendChild(root);
        console.warn(`Root node #${rootId} is not found, current root is automatically created by the framework.`);
    }
    const hydrationData = needHydrate ? { loaderData } : undefined;
    const routeModuleCache = {};
    const location = history.location ? history.location : { pathname: routePath || window.location.pathname };
    if (needHydrate) {
        const lazyMatches = (0,_matchRoutes_js__WEBPACK_IMPORTED_MODULE_12__["default"])(routes, location, basename).filter((m) => m.route.lazy);
        if ((lazyMatches === null || lazyMatches === void 0 ? void 0 : lazyMatches.length) > 0) {
            // Load the lazy matches and update the routes before creating your router
            // so we can hydrate the SSR-rendered content synchronously.
            await Promise.all(lazyMatches.map(async (m) => {
                let routeModule = await (0,_routes_js__WEBPACK_IMPORTED_MODULE_13__.loadRouteModule)(m.route, routeModuleCache);
                Object.assign(m.route, {
                    ...routeModule,
                    lazy: undefined,
                });
            }));
        }
    }
    const routerOptions = {
        basename,
        routes,
        history,
        hydrationData,
        future: {
            v7_prependBasename: true,
        },
    };
    const SingleComponent =  true &&
        await (0,_singleRouter_js__WEBPACK_IMPORTED_MODULE_14__.getSingleRoute)(routes, basename, location, routeModuleCache);
    const renderRoot = appRender(root, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AppContext_js__WEBPACK_IMPORTED_MODULE_15__.AppContextProvider, { value: appContext },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppRuntimeProvider, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppRouter, { routerContext: routerOptions, routes: routes, location: history.location, Component: SingleComponent }))));
    return renderRoot;
}
function createHistory(appConfig, { memoryRouter, initialEntry, routes }) {
    var _a, _b, _c;
    const routerType = memoryRouter ? 'memory' : (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.router) === null || _a === void 0 ? void 0 : _a.type;
    const createHistory =  false
        ? 0
        : _singleRouter_js__WEBPACK_IMPORTED_MODULE_14__.createHistory;
    let createHistoryOptions = { window };
    if (routerType === 'memory') {
        const memoryOptions = {};
        memoryOptions.initialEntries = ((_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.router) === null || _c === void 0 ? void 0 : _c.initialEntries) || (0,_routes_js__WEBPACK_IMPORTED_MODULE_13__.getRoutesPath)(routes);
        if (initialEntry) {
            const initialIndex = memoryOptions.initialEntries.findIndex((entry) => typeof entry === 'string' && entry === initialEntry);
            if (initialIndex >= 0) {
                memoryOptions.initialIndex = initialIndex;
            }
            else {
                console.error(`path: ${initialEntry} do not match any initialEntries ${memoryOptions.initialEntries}`);
            }
        }
        createHistoryOptions = memoryOptions;
    }
    const history = createHistory(createHistoryOptions);
    return history;
}
function createRouterHistory(type, memoryRouter) {
    if (memoryRouter || type === 'memory') {
        return _remix_run_router__WEBPACK_IMPORTED_MODULE_16__.createMemoryHistory;
    }
    if (type === 'browser') {
        return _remix_run_router__WEBPACK_IMPORTED_MODULE_16__.createBrowserHistory;
    }
    if (type === 'hash') {
        return _remix_run_router__WEBPACK_IMPORTED_MODULE_16__.createHashHistory;
    }
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/runtime.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/runtime.js ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/history.js");
/* harmony import */ var _singleRouter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleRouter.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/singleRouter.js");
/* harmony import */ var _AppContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppContext.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/AppContext.js");






class Runtime {
    constructor(appContext, runtimeOptions) {
        this.getAppContext = () => {
            return {
                ...this.appContext,
                RouteWrappers: this.RouteWrappers,
            };
        };
        this.setAppContext = (appContext) => {
            this.appContext = appContext;
        };
        this.getRender = () => {
            return this.render;
        };
        this.getWrappers = () => this.RouteWrappers;
        this.addProvider = (Provider) => {
            // must promise user's providers are wrapped by the plugins' providers
            this.AppProvider.unshift(Provider);
        };
        this.setRender = (render) => {
            this.render = render;
        };
        this.addWrapper = (Wrapper, forLayout) => {
            this.RouteWrappers.push({
                Wrapper,
                layout: forLayout,
            });
        };
        this.setAppRouter = (AppRouter) => {
            this.AppRouter = AppRouter;
        };
        this.addResponseHandler = (handler) => {
            this.responseHandlers.push(handler);
        };
        this.getResponseHandlers = () => {
            return this.responseHandlers;
        };
        this.AppProvider = [];
        this.appContext = appContext;
        this.render = (container, element) => {
            const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(container);
            root.render(element);
            return root;
        };
        this.RouteWrappers = [];
        this.runtimeOptions = runtimeOptions;
        this.responseHandlers = [];
        this.getAppRouter = this.getAppRouter.bind(this);
    }
    getAppRouter() {
        return this.AppRouter;
    }
    loadModule(module) {
        let runtimeAPI = {
            addProvider: this.addProvider,
            addResponseHandler: this.addResponseHandler,
            getResponseHandlers: this.getResponseHandlers,
            getAppRouter: this.getAppRouter,
            setRender: this.setRender,
            addWrapper: this.addWrapper,
            appContext: this.appContext,
            setAppRouter: this.setAppRouter,
            useData:  false ? 0 : _singleRouter_js__WEBPACK_IMPORTED_MODULE_2__.useData,
            useConfig:  false ? 0 : _singleRouter_js__WEBPACK_IMPORTED_MODULE_2__.useConfig,
            useAppContext: _AppContext_js__WEBPACK_IMPORTED_MODULE_3__.useAppContext,
            history: _history_js__WEBPACK_IMPORTED_MODULE_4__.routerHistory,
        };
        const runtimeModule = (module.default || module);
        if (module) {
            return runtimeModule(runtimeAPI, this.runtimeOptions);
        }
    }
    composeAppProvider() {
        if (!this.AppProvider.length)
            return null;
        return this.AppProvider.reduce((ProviderComponent, CurrentProvider) => {
            return ({ children, ...rest }) => {
                const element = CurrentProvider
                    ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(CurrentProvider, { ...rest }, children)
                    : children;
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProviderComponent, { ...rest }, element);
            };
        });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Runtime);


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/singleRouter.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/singleRouter.js ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataContextProvider: function() { return /* binding */ DataContextProvider; },
/* harmony export */   Link: function() { return /* binding */ Link; },
/* harmony export */   NavLink: function() { return /* binding */ NavLink; },
/* harmony export */   Outlet: function() { return /* binding */ Outlet; },
/* harmony export */   RenderedRoute: function() { return /* binding */ RenderedRoute; },
/* harmony export */   RouteContext: function() { return /* binding */ RouteContext; },
/* harmony export */   Router: function() { return /* binding */ Router; },
/* harmony export */   createHistory: function() { return /* binding */ createHistory; },
/* harmony export */   getSingleRoute: function() { return /* binding */ getSingleRoute; },
/* harmony export */   matchPath: function() { return /* binding */ matchPath; },
/* harmony export */   matchRoutes: function() { return /* binding */ matchRoutes; },
/* harmony export */   useAsyncValue: function() { return /* binding */ useAsyncValue; },
/* harmony export */   useConfig: function() { return /* binding */ useConfig; },
/* harmony export */   useData: function() { return /* binding */ useData; },
/* harmony export */   useLocation: function() { return /* binding */ useLocation; },
/* harmony export */   useNavigate: function() { return /* binding */ useNavigate; },
/* harmony export */   useNavigation: function() { return /* binding */ useNavigation; },
/* harmony export */   useOutlet: function() { return /* binding */ useOutlet; },
/* harmony export */   useOutletContext: function() { return /* binding */ useOutletContext; },
/* harmony export */   useParams: function() { return /* binding */ useParams; },
/* harmony export */   useRevalidator: function() { return /* binding */ useRevalidator; },
/* harmony export */   useRoutes: function() { return /* binding */ useRoutes; },
/* harmony export */   useSearchParams: function() { return /* binding */ useSearchParams; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes.js */ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/routes.js");
/**
 * Fake API of react-router-dom, react-router-dom will be remove
 * if user config `optimize.router` false
 */


const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
Context.displayName = 'DataContext';
const DataContextProvider = Context.Provider;
const RouteContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
    outlet: null,
    matches: [],
    routeData: null,
});
RouteContext.displayName = 'RouteContext';
function useData() {
    var _a;
    const value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    return (_a = value.routeData) === null || _a === void 0 ? void 0 : _a.data;
}
function useConfig() {
    var _a;
    const value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    return (_a = value.routeData) === null || _a === void 0 ? void 0 : _a.pageConfig;
}
const OutletContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
function useOutlet(context) {
    let { outlet } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    if (outlet) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(OutletContext.Provider, { value: context }, outlet));
    }
    return outlet;
}
function useOutletContext() {
    return react__WEBPACK_IMPORTED_MODULE_0__.useContext(OutletContext);
}
function Outlet(props) {
    return useOutlet(props.context);
}
function RenderedRoute({ routeContext, children }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, { value: routeContext }, children));
}
const useRoutes = (routes) => {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, routes[0].element);
};
const Router = (props) => {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.children);
};
const createHistory = () => {
    return {
        // @ts-expect-error
        listen: () => { },
        // @ts-expect-error
        action: 'POP',
        // @ts-expect-error
        location: '',
    };
};
const joinPaths = (paths) => paths.join('/').replace(/\/\/+/g, '/');
const flattenRoutes = (routes, branches = [], parentsMeta = [], parentPath = '') => {
    let flattenRoute = (route, index, relativePath) => {
        let routeMeta = {
            relativePath: relativePath === undefined ? route.path || '' : relativePath,
            childrenIndex: index,
            route,
        };
        if (routeMeta.relativePath.startsWith('/')) {
            if (!routeMeta.relativePath.startsWith(parentPath)) {
                throw new Error(`Route path "${routeMeta.relativePath}" nested under path "${parentPath}" is not valid`);
            }
            routeMeta.relativePath = routeMeta.relativePath.slice(parentPath.length);
        }
        let path = joinPaths([parentPath, routeMeta.relativePath]);
        let routesMeta = parentsMeta.concat(routeMeta);
        if (route.children && route.children.length > 0) {
            if (route.index) {
                throw new Error(`Index route should not have children, path "${path}"`);
            }
            flattenRoutes(route.children, branches, routesMeta, path);
        }
        if (route.path == null && !route.index) {
            return;
        }
        branches.push({
            path,
            routesMeta,
        });
    };
    routes.forEach((route, index) => {
        var _a;
        if (route.path === '' || !((_a = route.path) === null || _a === void 0 ? void 0 : _a.includes('?'))) {
            flattenRoute(route, index);
        }
        else {
            throw new Error(`Single Route mode do not support path: "${route.path}"`);
        }
    });
    return branches;
};
function compilePath(path, end = true) {
    let regexpSource = `^${path
        .replace(/\/*\*?$/, '') // Ignore trailing / and /*, we'll handle it below
        .replace(/^\/*/, '/') // Make sure it has a leading /
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')}`; // Escape special regex chars;
    if (end) {
        // When matching to the end, ignore trailing slashes
        regexpSource += '\\/*$';
    }
    else if (path !== '' && path !== '/') {
        // Keep alignment with react-router:
        // https://github.com/remix-run/react-router/blob/fb0f1f94778f4762989930db209e6a111504aa63/packages/router/utils.ts#L988-L995
        regexpSource += '(?:(?=\\/|$))';
    }
    else {
        // Nothing to match for "" or "/"
    }
    let matcher = new RegExp(regexpSource, 'i');
    return matcher;
}
function matchPath(pattern, pathname) {
    if (typeof pattern === 'string') {
        pattern = { path: pattern, end: true };
    }
    let matcher = compilePath(pattern.path, pattern.end);
    let match = pathname.match(matcher);
    if (!match)
        return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, '$1');
    return {
        // Params is not supported yet in single route mode.
        params: {},
        pathname: matchedPathname,
        pathnameBase,
        pattern,
    };
}
const normalizePathname = (pathname) => pathname.replace(/\/+$/, '').replace(/^\/*/, '/');
const matchRouteBranch = (branch, pathname) => {
    let { routesMeta } = branch;
    let matchedPathname = '/';
    let matches = [];
    const len = routesMeta.length;
    for (let i = 0; i < len; i++) {
        let routeMeta = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === '/' ? pathname : pathname.slice(matchedPathname.length) || '/';
        let match = matchPath(
        // TODO: casesensitive is not support yet.
        { path: routeMeta.relativePath, end }, remainingPathname);
        if (!match)
            return null;
        let { route } = routeMeta;
        matches.push({
            // TODO: Can this as be avoided?
            params: {},
            pathname: joinPaths([matchedPathname, match.pathname]),
            pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
            route,
        });
        if (match.pathnameBase !== '/') {
            matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
        }
    }
    return matches;
};
const stripBasename = (pathname, basename) => {
    if (basename === '/')
        return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
        return null;
    }
    const startIndex = basename.endsWith('/')
        ? basename.length - 1
        : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== '/') {
        return null;
    }
    return pathname.slice(startIndex) || '/';
};
const matchRoutes = (routes, location, basename) => {
    const pathname = (typeof location === 'string' ? location : location.pathname) || '/';
    let stripedPathname = stripBasename(pathname, basename || '/');
    if (!stripedPathname && basename !== '/') {
        // If pathname is not match, we should ignore the basename,
        // in case of the basename is customized.
        stripedPathname = stripBasename(pathname, '/');
    }
    let branches = flattenRoutes(routes);
    if (branches.length === 1) {
        // Just one branch, no need to match.
        return [{
                route: routes[0],
                params: {},
                pathname,
                pathnameBase: '',
            }];
    }
    let matches = null;
    for (let i = 0; matches == null && i < branches.length; i++) {
        matches = matchRouteBranch(branches[i], stripedPathname);
    }
    if (!matches) {
        console.warn('Single route manifest: ', routes);
        console.warn(`Basename "${basename}" is not match with pathname "${pathname}"`);
    }
    return matches;
};
const Link = () => null;
const NavLink = () => null;
const useParams = () => {
    return {};
};
const useSearchParams = () => {
    return [{}, () => { }];
};
const useLocation = () => {
    return {};
};
const useNavigate = () => {
    return {};
};
const useNavigation = () => {
    throw new Error('useNavigation is not supported in single router mode');
};
const useRevalidator = () => {
    throw new Error('useRevalidator is not supported in single router mode');
};
const useAsyncValue = () => {
    throw new Error('useAsyncValue is not supported in single router mode');
};
const getSingleRoute = async (routes, basename, location, routeModuleCache = {}) => {
    const matchedRoutes = matchRoutes(routes, location, basename);
    const routeModules = await (0,_routes_js__WEBPACK_IMPORTED_MODULE_1__.loadRouteModules)(matchedRoutes.map(({ route }) => route), routeModuleCache);
    let loaders = [];
    let loaderIds = [];
    const components = matchedRoutes.map(({ route }) => {
        const { loader, Component } = (routeModules === null || routeModules === void 0 ? void 0 : routeModules[route.id]) || {};
        if (loader) {
            loaders.push(loader());
            loaderIds.push(route.id);
        }
        return {
            Component: Component || route.Component,
            isDataRoute: !!loader,
            id: route.id,
        };
    });
    let routesData = {};
    // Compose components.
    const loaderDatas = await Promise.all(loaders);
    loaderDatas.forEach((data, index) => {
        routesData[loaderIds[index]] = data;
    });
    return () => components.reduceRight((outlet, { Component, isDataRoute, id }) => {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderedRoute, { routeContext: {
                outlet,
                routeData: isDataRoute && routesData[id],
            }, children: react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, null) || outlet }));
    }, null);
};


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/useMounted.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/useMounted.js ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useMounted; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");

function useMounted() {
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setMounted(true);
    }, []);
    return mounted;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/usePageLifecycle.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/usePageLifecycle.js ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ usePageLifecycle; }
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-unused-vars */
function usePageLifecycle(lifecycle, callback) {
    // Just compatible with miniapp
    return;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/utils/addLeadingSlash.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/utils/addLeadingSlash.js ***!
  \**************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const addLeadingSlash = (url = '') => (url.charAt(0) === '/' ? url : `/${url}`);
/* harmony default export */ __webpack_exports__["default"] = (addLeadingSlash);


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/utils/deprecatedHistory.js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/utils/deprecatedHistory.js ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecatedHistory: function() { return /* binding */ deprecatedHistory; },
/* harmony export */   disableHistoryWarning: function() { return /* binding */ disableHistoryWarning; }
/* harmony export */ });
let disableWarning = false;
function disableHistoryWarning() {
    disableWarning = true;
}
function deprecatedHistory(history) {
    const originHistory = { ...history };
    const deprecatedMessage = 'history.push and history.replace is not recommended to use outside of react component. The usage will be deprecated in the next minor version.';
    history.push = function (to, state) {
        if (!disableWarning) {
            console.warn(deprecatedMessage);
        }
        originHistory.push(to, state);
    };
    history.replace = function (to, state) {
        if (!disableWarning) {
            console.warn(deprecatedMessage);
        }
        originHistory.replace(to, state);
    };
    return history;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/utils/getCurrentRoutePath.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+runtime@1.5.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ice/runtime/esm/utils/getCurrentRoutePath.js ***!
  \******************************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getCurrentRoutePath; }
/* harmony export */ });
/**
 * Get the current route path exclude the basename.
 */
function getCurrentRoutePath(matches) {
    return matches.length && matches[matches.length - 1].pathname;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/event-emitter.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/event-emitter.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: function() { return /* binding */ Events; }
/* harmony export */ });
class Events {
    constructor(opts) {
        var _a;
        this.callbacks = (_a = opts === null || opts === void 0 ? void 0 : opts.callbacks) !== null && _a !== void 0 ? _a : {};
    }
    on(eventName, callback, context) {
        let event;
        let node;
        let tail;
        let list;
        if (!callback) {
            return this;
        }
        eventName = eventName.split(Events.eventSplitter);
        if (!this.callbacks) {
            this.callbacks = {};
        }
        const calls = this.callbacks;
        while ((event = eventName.shift())) {
            list = calls[event];
            node = list ? list.tail : {};
            node.next = tail = {};
            node.context = context;
            node.callback = callback;
            calls[event] = {
                tail,
                next: list ? list.next : node,
            };
        }
        return this;
    }
    once(events, callback, context) {
        const wrapper = (...args) => {
            callback.apply(this, args);
            this.off(events, wrapper, context);
        };
        this.on(events, wrapper, context);
        return this;
    }
    off(events, callback, context) {
        let event;
        let calls;
        let node;
        let tail;
        let cb;
        let ctx;
        if (!(calls = this.callbacks)) {
            return this;
        }
        if (!(events || callback || context)) {
            delete this.callbacks;
            return this;
        }
        events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
        while ((event = events.shift())) {
            node = calls[event];
            delete calls[event];
            if (!node || !(callback || context)) {
                continue;
            }
            tail = node.tail;
            while ((node = node.next) !== tail) {
                cb = node.callback;
                ctx = node.context;
                if ((callback && cb !== callback) || (context && ctx !== context)) {
                    this.on(event, cb, ctx);
                }
            }
        }
        return this;
    }
    trigger(events) {
        let event;
        let node;
        let calls;
        let tail;
        if (!(calls = this.callbacks)) {
            return this;
        }
        events = events.split(Events.eventSplitter);
        /* eslint-disable prefer-rest-params */
        const rest = [].slice.call(arguments, 1);
        while ((event = events.shift())) {
            if ((node = calls[event])) {
                tail = node.tail;
                while ((node = node.next) !== tail) {
                    node.callback.apply(node.context || this, rest);
                }
            }
        }
        return this;
    }
}
Events.eventSplitter = /\s+/;


/***/ }),

/***/ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/index.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/is.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _is_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _is_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/utils.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _utils_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _utils_js__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _event_emitter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-emitter.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/event-emitter.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _event_emitter_js__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _event_emitter_js__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _miniapp_shortcuts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./miniapp/shortcuts.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/shortcuts.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _miniapp_shortcuts_js__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _miniapp_shortcuts_js__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _miniapp_template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./miniapp/template.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/template.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _miniapp_template_js__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _miniapp_template_js__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _miniapp_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miniapp/components.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/components.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _miniapp_components_js__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _miniapp_components_js__WEBPACK_IMPORTED_MODULE_5__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _miniapp_runtime_hooks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./miniapp/runtime-hooks.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/runtime-hooks.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _miniapp_runtime_hooks_js__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _miniapp_runtime_hooks_js__WEBPACK_IMPORTED_MODULE_6__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _miniapp_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./miniapp/utils.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/utils.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _miniapp_utils_js__WEBPACK_IMPORTED_MODULE_7__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _miniapp_utils_js__WEBPACK_IMPORTED_MODULE_7__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);










/***/ }),

/***/ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/is.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/is.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArray: function() { return /* binding */ isArray; },
/* harmony export */   isBoolean: function() { return /* binding */ isBoolean; },
/* harmony export */   isBooleanStringLiteral: function() { return /* binding */ isBooleanStringLiteral; },
/* harmony export */   isEmpty: function() { return /* binding */ isEmpty; },
/* harmony export */   isFunction: function() { return /* binding */ isFunction; },
/* harmony export */   isNull: function() { return /* binding */ isNull; },
/* harmony export */   isNumber: function() { return /* binding */ isNumber; },
/* harmony export */   isObject: function() { return /* binding */ isObject; },
/* harmony export */   isString: function() { return /* binding */ isString; },
/* harmony export */   isUndefined: function() { return /* binding */ isUndefined; }
/* harmony export */ });
function isString(o) {
    return typeof o === 'string';
}
function isUndefined(o) {
    return typeof o === 'undefined';
}
function isNull(o) {
    return o === null;
}
function isObject(o) {
    return o !== null && typeof o === 'object';
}
function isBoolean(o) {
    return o === true || o === false;
}
function isFunction(o) {
    return typeof o === 'function';
}
function isNumber(o) {
    return typeof o === 'number';
}
function isBooleanStringLiteral(o) {
    return o === 'true' || o === 'false';
}
const { isArray } = Array;
function isEmpty(o) {
    return Object.keys(o).length === 0;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/components.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/components.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animation: function() { return /* binding */ animation; },
/* harmony export */   controlledComponent: function() { return /* binding */ controlledComponent; },
/* harmony export */   focusComponents: function() { return /* binding */ focusComponents; },
/* harmony export */   internalComponents: function() { return /* binding */ internalComponents; },
/* harmony export */   nestElements: function() { return /* binding */ nestElements; },
/* harmony export */   singleQuote: function() { return /* binding */ singleQuote; },
/* harmony export */   touchEvents: function() { return /* binding */ touchEvents; },
/* harmony export */   voidElements: function() { return /* binding */ voidElements; }
/* harmony export */ });
const DEFAULT_EMPTY_ARRAY = '[]';
const NO_DEFAULT_VALUE = '';
const DEFAULT_TRUE = '!0';
const DEFAULT_FALSE = '!1';
const touchEvents = {
    bindTouchStart: NO_DEFAULT_VALUE,
    bindTouchMove: NO_DEFAULT_VALUE,
    bindTouchEnd: NO_DEFAULT_VALUE,
    bindTouchCancel: NO_DEFAULT_VALUE,
    bindLongTap: NO_DEFAULT_VALUE,
};
const animation = {
    animation: NO_DEFAULT_VALUE,
    bindAnimationStart: NO_DEFAULT_VALUE,
    bindAnimationIteration: NO_DEFAULT_VALUE,
    bindAnimationEnd: NO_DEFAULT_VALUE,
    bindTransitionEnd: NO_DEFAULT_VALUE,
};
function singleQuote(s) {
    return `'${s}'`;
}
const View = {
    'hover-class': singleQuote('none'),
    'hover-stop-propagation': DEFAULT_FALSE,
    'hover-start-time': '50',
    'hover-stay-time': '400',
    ...touchEvents,
    ...animation,
};
const Icon = {
    type: NO_DEFAULT_VALUE,
    size: '23',
    color: NO_DEFAULT_VALUE,
};
const MapComp = {
    longitude: NO_DEFAULT_VALUE,
    latitude: NO_DEFAULT_VALUE,
    scale: '16',
    markers: DEFAULT_EMPTY_ARRAY,
    covers: NO_DEFAULT_VALUE,
    polyline: DEFAULT_EMPTY_ARRAY,
    circles: DEFAULT_EMPTY_ARRAY,
    controls: DEFAULT_EMPTY_ARRAY,
    'include-points': DEFAULT_EMPTY_ARRAY,
    'show-location': NO_DEFAULT_VALUE,
    'layer-style': '1',
    bindMarkerTap: NO_DEFAULT_VALUE,
    bindControlTap: NO_DEFAULT_VALUE,
    bindCalloutTap: NO_DEFAULT_VALUE,
    bindUpdated: NO_DEFAULT_VALUE,
    ...touchEvents,
};
const Progress = {
    percent: NO_DEFAULT_VALUE,
    'stroke-width': '6',
    color: singleQuote('#09BB07'),
    activeColor: singleQuote('#09BB07'),
    backgroundColor: singleQuote('#EBEBEB'),
    active: DEFAULT_FALSE,
    'active-mode': singleQuote('backwards'),
    'show-info': DEFAULT_FALSE,
};
const RichText = {
    nodes: DEFAULT_EMPTY_ARRAY,
};
const Text = {
    selectable: DEFAULT_FALSE,
    space: NO_DEFAULT_VALUE,
    decode: DEFAULT_FALSE,
};
const Button = {
    size: singleQuote('default'),
    type: NO_DEFAULT_VALUE,
    plain: DEFAULT_FALSE,
    disabled: NO_DEFAULT_VALUE,
    loading: DEFAULT_FALSE,
    'form-type': NO_DEFAULT_VALUE,
    'open-type': NO_DEFAULT_VALUE,
    'hover-class': singleQuote('button-hover'),
    'hover-stop-propagation': DEFAULT_FALSE,
    'hover-start-time': '20',
    'hover-stay-time': '70',
    name: NO_DEFAULT_VALUE,
    ...touchEvents,
};
const Checkbox = {
    value: NO_DEFAULT_VALUE,
    disabled: NO_DEFAULT_VALUE,
    checked: DEFAULT_FALSE,
    color: singleQuote('#09BB07'),
    name: NO_DEFAULT_VALUE,
};
const CheckboxGroup = {
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
};
const Form = {
    'report-submit': DEFAULT_FALSE,
    bindSubmit: NO_DEFAULT_VALUE,
    bindReset: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
};
const Input = {
    value: NO_DEFAULT_VALUE,
    type: singleQuote(NO_DEFAULT_VALUE),
    password: DEFAULT_FALSE,
    placeholder: NO_DEFAULT_VALUE,
    'placeholder-style': NO_DEFAULT_VALUE,
    'placeholder-class': singleQuote('input-placeholder'),
    disabled: NO_DEFAULT_VALUE,
    maxlength: '140',
    'cursor-spacing': '0',
    focus: DEFAULT_FALSE,
    'confirm-type': singleQuote('done'),
    'confirm-hold': DEFAULT_FALSE,
    cursor: 'i.value.length',
    'selection-start': '-1',
    'selection-end': '-1',
    bindInput: NO_DEFAULT_VALUE,
    bindFocus: NO_DEFAULT_VALUE,
    bindBlur: NO_DEFAULT_VALUE,
    bindConfirm: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
};
const Label = {
    for: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
};
const Picker = {
    mode: singleQuote('selector'),
    disabled: NO_DEFAULT_VALUE,
    range: NO_DEFAULT_VALUE,
    'range-key': NO_DEFAULT_VALUE,
    value: NO_DEFAULT_VALUE,
    start: NO_DEFAULT_VALUE,
    end: NO_DEFAULT_VALUE,
    fields: singleQuote('day'),
    'custom-item': NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
    bindCancel: NO_DEFAULT_VALUE,
    bindChange: NO_DEFAULT_VALUE,
    bindColumnChange: NO_DEFAULT_VALUE,
};
const PickerView = {
    value: NO_DEFAULT_VALUE,
    'indicator-style': NO_DEFAULT_VALUE,
    'indicator-class': NO_DEFAULT_VALUE,
    'mask-style': NO_DEFAULT_VALUE,
    'mask-class': NO_DEFAULT_VALUE,
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
};
const PickerViewColumn = {
    name: NO_DEFAULT_VALUE,
};
const Radio = {
    value: NO_DEFAULT_VALUE,
    checked: DEFAULT_FALSE,
    disabled: NO_DEFAULT_VALUE,
    color: singleQuote('#09BB07'),
    name: NO_DEFAULT_VALUE,
};
const RadioGroup = {
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
};
const Slider = {
    min: '0',
    max: '100',
    step: '1',
    disabled: NO_DEFAULT_VALUE,
    value: '0',
    activeColor: singleQuote('#1aad19'),
    backgroundColor: singleQuote('#e9e9e9'),
    'block-size': '28',
    'block-color': singleQuote('#ffffff'),
    'show-value': DEFAULT_FALSE,
    bindChange: NO_DEFAULT_VALUE,
    bindChanging: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
};
const Switch = {
    checked: DEFAULT_FALSE,
    disabled: NO_DEFAULT_VALUE,
    type: singleQuote('switch'),
    color: singleQuote('#04BE02'),
    bindChange: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
};
const Textarea = {
    value: NO_DEFAULT_VALUE,
    placeholder: NO_DEFAULT_VALUE,
    'placeholder-style': NO_DEFAULT_VALUE,
    'placeholder-class': singleQuote('textarea-placeholder'),
    disabled: NO_DEFAULT_VALUE,
    maxlength: '140',
    'auto-focus': DEFAULT_FALSE,
    focus: DEFAULT_FALSE,
    'auto-height': DEFAULT_FALSE,
    fixed: DEFAULT_FALSE,
    'cursor-spacing': '0',
    cursor: '-1',
    'selection-start': '-1',
    'selection-end': '-1',
    bindFocus: NO_DEFAULT_VALUE,
    bindBlur: NO_DEFAULT_VALUE,
    bindLineChange: NO_DEFAULT_VALUE,
    bindInput: NO_DEFAULT_VALUE,
    bindConfirm: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
};
const CoverImage = {
    src: NO_DEFAULT_VALUE,
    bindLoad: 'eh',
    bindError: 'eh',
};
const CoverView = {
    'scroll-top': DEFAULT_FALSE,
    ...touchEvents,
};
const MovableArea = {
    'scale-area': DEFAULT_FALSE,
};
const MovableView = {
    direction: 'none',
    inertia: DEFAULT_FALSE,
    'out-of-bounds': DEFAULT_FALSE,
    x: NO_DEFAULT_VALUE,
    y: NO_DEFAULT_VALUE,
    damping: '20',
    friction: '2',
    disabled: NO_DEFAULT_VALUE,
    scale: DEFAULT_FALSE,
    'scale-min': '0.5',
    'scale-max': '10',
    'scale-value': '1',
    bindChange: NO_DEFAULT_VALUE,
    bindScale: NO_DEFAULT_VALUE,
    bindHTouchMove: NO_DEFAULT_VALUE,
    bindVTouchMove: NO_DEFAULT_VALUE,
    width: singleQuote('10px'),
    height: singleQuote('10px'),
    ...touchEvents,
    ...animation,
};
const ScrollView = {
    'scroll-x': DEFAULT_FALSE,
    'scroll-y': DEFAULT_FALSE,
    'upper-threshold': '50',
    'lower-threshold': '50',
    'scroll-top': NO_DEFAULT_VALUE,
    'scroll-left': NO_DEFAULT_VALUE,
    'scroll-into-view': NO_DEFAULT_VALUE,
    'scroll-with-animation': DEFAULT_FALSE,
    'enable-back-to-top': DEFAULT_FALSE,
    bindScrollToUpper: NO_DEFAULT_VALUE,
    bindScrollToLower: NO_DEFAULT_VALUE,
    bindScroll: NO_DEFAULT_VALUE,
    ...touchEvents,
    ...animation,
};
const Swiper = {
    'indicator-dots': DEFAULT_FALSE,
    'indicator-color': singleQuote('rgba(0, 0, 0, .3)'),
    'indicator-active-color': singleQuote('#000000'),
    autoplay: DEFAULT_FALSE,
    current: '0',
    interval: '5000',
    duration: '500',
    circular: DEFAULT_FALSE,
    vertical: DEFAULT_FALSE,
    'previous-margin': singleQuote('0px'),
    'next-margin': singleQuote('0px'),
    'display-multiple-items': '1',
    bindChange: NO_DEFAULT_VALUE,
    bindTransition: NO_DEFAULT_VALUE,
    bindAnimationFinish: NO_DEFAULT_VALUE,
    ...touchEvents,
};
const SwiperItem = {
    'item-id': NO_DEFAULT_VALUE,
};
const Navigator = {
    url: NO_DEFAULT_VALUE,
    'open-type': singleQuote('navigate'),
    delta: '1',
    'hover-class': singleQuote('navigator-hover'),
    'hover-stop-propagation': DEFAULT_FALSE,
    'hover-start-time': '50',
    'hover-stay-time': '600',
    bindSuccess: NO_DEFAULT_VALUE,
    bindFail: NO_DEFAULT_VALUE,
    bindComplete: NO_DEFAULT_VALUE,
};
const Audio = {
    id: NO_DEFAULT_VALUE,
    src: NO_DEFAULT_VALUE,
    loop: DEFAULT_FALSE,
    controls: DEFAULT_FALSE,
    poster: NO_DEFAULT_VALUE,
    name: NO_DEFAULT_VALUE,
    author: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE,
    bindPlay: NO_DEFAULT_VALUE,
    bindPause: NO_DEFAULT_VALUE,
    bindTimeUpdate: NO_DEFAULT_VALUE,
    bindEnded: NO_DEFAULT_VALUE,
};
const Camera = {
    'device-position': singleQuote('back'),
    flash: singleQuote('auto'),
    bindStop: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE,
};
const Image = {
    src: NO_DEFAULT_VALUE,
    mode: singleQuote('scaleToFill'),
    'lazy-load': DEFAULT_FALSE,
    bindError: NO_DEFAULT_VALUE,
    bindLoad: NO_DEFAULT_VALUE,
    ...touchEvents,
};
const LivePlayer = {
    src: NO_DEFAULT_VALUE,
    autoplay: DEFAULT_FALSE,
    muted: DEFAULT_FALSE,
    orientation: singleQuote('vertical'),
    'object-fit': singleQuote('contain'),
    'background-mute': DEFAULT_FALSE,
    'min-cache': '1',
    'max-cache': '3',
    bindStateChange: NO_DEFAULT_VALUE,
    bindFullScreenChange: NO_DEFAULT_VALUE,
    bindNetStatus: NO_DEFAULT_VALUE,
    ...animation,
};
const Video = {
    src: NO_DEFAULT_VALUE,
    duration: NO_DEFAULT_VALUE,
    controls: DEFAULT_TRUE,
    'danmu-list': NO_DEFAULT_VALUE,
    'danmu-btn': NO_DEFAULT_VALUE,
    'enable-danmu': NO_DEFAULT_VALUE,
    autoplay: DEFAULT_FALSE,
    loop: DEFAULT_FALSE,
    muted: DEFAULT_FALSE,
    'initial-time': '0',
    'page-gesture': DEFAULT_FALSE,
    direction: NO_DEFAULT_VALUE,
    'show-progress': DEFAULT_TRUE,
    'show-fullscreen-btn': DEFAULT_TRUE,
    'show-play-btn': DEFAULT_TRUE,
    'show-center-play-btn': DEFAULT_TRUE,
    'enable-progress-gesture': DEFAULT_TRUE,
    'object-fit': singleQuote('contain'),
    poster: NO_DEFAULT_VALUE,
    'show-mute-btn': DEFAULT_FALSE,
    bindPlay: NO_DEFAULT_VALUE,
    bindPause: NO_DEFAULT_VALUE,
    bindEnded: NO_DEFAULT_VALUE,
    bindTimeUpdate: NO_DEFAULT_VALUE,
    bindFullScreenChange: NO_DEFAULT_VALUE,
    bindWaiting: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE,
    ...animation,
};
const Canvas = {
    'canvas-id': NO_DEFAULT_VALUE,
    'disable-scroll': DEFAULT_FALSE,
    bindError: NO_DEFAULT_VALUE,
    ...touchEvents,
};
const Ad = {
    'unit-id': NO_DEFAULT_VALUE,
    'ad-intervals': NO_DEFAULT_VALUE,
    bindLoad: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE,
    bindClose: NO_DEFAULT_VALUE,
};
const WebView = {
    src: NO_DEFAULT_VALUE,
    bindMessage: NO_DEFAULT_VALUE,
    bindLoad: NO_DEFAULT_VALUE,
    bindError: NO_DEFAULT_VALUE,
};
const Block = {};
// For Vue，因为 slot 标签被 vue 占用了
const SlotView = {
    name: NO_DEFAULT_VALUE,
};
// For React
// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
// 不给 View 直接加 slot 属性的原因是性能损耗
const Slot = {
    name: NO_DEFAULT_VALUE,
};
const internalComponents = {
    View,
    Icon,
    Progress,
    RichText,
    Text,
    Button,
    Checkbox,
    CheckboxGroup,
    Form,
    Input,
    Label,
    Picker,
    PickerView,
    PickerViewColumn,
    Radio,
    RadioGroup,
    Slider,
    Switch,
    CoverImage,
    Textarea,
    CoverView,
    MovableArea,
    MovableView,
    ScrollView,
    Swiper,
    SwiperItem,
    Navigator,
    Audio,
    Camera,
    Image,
    LivePlayer,
    Video,
    Canvas,
    Ad,
    WebView,
    Block,
    Map: MapComp,
    Slot,
    SlotView,
};
const controlledComponent = new Set([
    'input',
    'checkbox',
    'picker',
    'picker-view',
    'radio',
    'slider',
    'switch',
    'textarea',
]);
const focusComponents = new Set([
    'input',
    'textarea',
]);
const voidElements = new Set([
    'progress',
    'icon',
    'rich-text',
    'input',
    'textarea',
    'slider',
    'switch',
    'audio',
    'ad',
    'official-account',
    'open-data',
    'navigation-bar',
]);
const nestElements = new Map([
    ['view', -1],
    ['catch-view', -1],
    ['cover-view', -1],
    ['static-view', -1],
    ['pure-view', -1],
    ['block', -1],
    ['text', -1],
    ['static-text', 6],
    ['slot', 8],
    ['slot-view', 8],
    ['label', 6],
    ['form', 4],
    ['scroll-view', 4],
    ['swiper', 4],
    ['swiper-item', 4],
]);


/***/ }),

/***/ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/runtime-hooks.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/runtime-hooks.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HOOK_TYPE: function() { return /* binding */ HOOK_TYPE; },
/* harmony export */   IceHook: function() { return /* binding */ IceHook; },
/* harmony export */   IceHooks: function() { return /* binding */ IceHooks; },
/* harmony export */   hooks: function() { return /* binding */ hooks; }
/* harmony export */ });
/* harmony import */ var _event_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event-emitter.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/event-emitter.js");
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/is.js");


var HOOK_TYPE;
(function (HOOK_TYPE) {
    HOOK_TYPE[HOOK_TYPE["SINGLE"] = 0] = "SINGLE";
    HOOK_TYPE[HOOK_TYPE["MULTI"] = 1] = "MULTI";
    HOOK_TYPE[HOOK_TYPE["WATERFALL"] = 2] = "WATERFALL";
})(HOOK_TYPE || (HOOK_TYPE = {}));
const defaultMiniLifecycle = {
    app: [
        'onLaunch',
        'onShow',
        'onHide',
        'onError',
        'onPageNotFound',
        'onUnhandledRejection',
        'onShareAppMessage',
    ],
    page: [
        'onLoad',
        'onUnload',
        'onReady',
        'onShow',
        'onHide',
        [
            'onPullDownRefresh',
            'onReachBottom',
            'onResize',
            'onTabItemTap',
            'onTitleClick',
            'onOptionMenuClick',
            'onPopMenuClick',
            'onPullIntercept',
            'onAddToFavorites',
            'onSaveExitState',
        ],
        [
            'onPageScroll',
            'onShareAppMessage',
            'onShareTimeline',
        ],
        // 阿里小程序某些页面事件必须存放于 events 对象中
        [
            'onBack',
            'onKeyboardHeight',
            'beforeTabItemTap',
            'onResize',
            'onSelectedTabItemTap',
        ],
    ],
};
function IceHook(type, initial) {
    return {
        type,
        initial: initial || null,
    };
}
class IceHooks extends _event_emitter_js__WEBPACK_IMPORTED_MODULE_0__.Events {
    constructor(hooks, opts) {
        super(opts);
        this.hooks = hooks;
        for (const hookName in hooks) {
            const { initial } = hooks[hookName];
            if ((0,_is_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(initial)) {
                this.on(hookName, initial);
            }
        }
    }
    tapOneOrMany(hookName, callback) {
        const list = (0,_is_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(callback) ? [callback] : callback;
        list.forEach(cb => this.on(hookName, cb));
    }
    tap(hookName, callback) {
        const { hooks } = this;
        const { type, initial } = hooks[hookName];
        if (type === HOOK_TYPE.SINGLE) {
            this.off(hookName);
            this.on(hookName, (0,_is_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(callback) ? callback : callback[callback.length - 1]);
        }
        else {
            initial && this.off(hookName, initial);
            this.tapOneOrMany(hookName, callback);
        }
    }
    call(hookName, ...rest) {
        var _a;
        const hook = this.hooks[hookName];
        if (!hook)
            return;
        const { type } = hook;
        const calls = this.callbacks;
        if (!calls)
            return;
        const list = calls[hookName];
        if (list) {
            const { tail } = list;
            let node = list.next;
            let args = rest;
            let res;
            while (node !== tail) {
                res = (_a = node.callback) === null || _a === void 0 ? void 0 : _a.apply(node.context || this, args);
                if (type === HOOK_TYPE.WATERFALL) {
                    const params = [res];
                    args = params;
                }
                node = node.next;
            }
            return res;
        }
    }
    isExist(hookName) {
        var _a;
        return Boolean((_a = this.callbacks) === null || _a === void 0 ? void 0 : _a[hookName]);
    }
}
const hooks = new IceHooks({
    getMiniLifecycle: IceHook(HOOK_TYPE.SINGLE, defaultConfig => defaultConfig),
    getMiniLifecycleImpl: IceHook(HOOK_TYPE.SINGLE, function () {
        return this.call('getMiniLifecycle', defaultMiniLifecycle);
    }),
    getLifecycle: IceHook(HOOK_TYPE.SINGLE, (instance, lifecycle) => instance[lifecycle]),
    getPathIndex: IceHook(HOOK_TYPE.SINGLE, indexOfNode => `[${indexOfNode}]`),
    getEventCenter: IceHook(HOOK_TYPE.SINGLE, Events => new Events()),
    isBubbleEvents: IceHook(HOOK_TYPE.SINGLE, eventName => {
        /**
         * 支持冒泡的事件, 除 支付宝小程序外，其余的可冒泡事件都和微信保持一致
         * 详见 见 https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
         */
        const BUBBLE_EVENTS = new Set([
            'touchstart',
            'touchmove',
            'touchcancel',
            'touchend',
            'touchforcechange',
            'tap',
            'longpress',
            'longtap',
            'transitionend',
            'animationstart',
            'animationiteration',
            'animationend',
        ]);
        return BUBBLE_EVENTS.has(eventName);
    }),
    getSpecialNodes: IceHook(HOOK_TYPE.SINGLE, () => ['view', 'text', 'image']),
    onRemoveAttribute: IceHook(HOOK_TYPE.SINGLE),
    batchedEventUpdates: IceHook(HOOK_TYPE.SINGLE),
    mergePageInstance: IceHook(HOOK_TYPE.SINGLE),
    modifyPageObject: IceHook(HOOK_TYPE.SINGLE),
    createPullDownComponent: IceHook(HOOK_TYPE.SINGLE),
    getDOMNode: IceHook(HOOK_TYPE.SINGLE),
    modifyHydrateData: IceHook(HOOK_TYPE.SINGLE),
    modifySetAttrPayload: IceHook(HOOK_TYPE.SINGLE),
    modifyRmAttrPayload: IceHook(HOOK_TYPE.SINGLE),
    onAddEvent: IceHook(HOOK_TYPE.SINGLE),
    modifyMpEvent: IceHook(HOOK_TYPE.MULTI),
    modifyMpEventImpl: IceHook(HOOK_TYPE.SINGLE, function (e) {
        try {
            // 有些小程序的事件对象的某些属性只读
            this.call('modifyMpEvent', e);
        }
        catch (error) {
            console.warn('[ICE modifyMpEvent hook Error]: ', error);
        }
    }),
    modifyIceEvent: IceHook(HOOK_TYPE.MULTI),
    modifyDispatchEvent: IceHook(HOOK_TYPE.MULTI),
    modifySetDataPayload: IceHook(HOOK_TYPE.SINGLE),
    initNativeApi: IceHook(HOOK_TYPE.MULTI),
    patchElement: IceHook(HOOK_TYPE.MULTI),
    hydrateNativeComponentNode: IceHook(HOOK_TYPE.SINGLE),
});


/***/ }),

/***/ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/shortcuts.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/shortcuts.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Shortcuts: function() { return /* binding */ Shortcuts; }
/* harmony export */ });
// 字符串简写
var Shortcuts;
(function (Shortcuts) {
    Shortcuts["Container"] = "container";
    Shortcuts["Childnodes"] = "cn";
    Shortcuts["Text"] = "v";
    Shortcuts["NodeType"] = "nt";
    Shortcuts["NodeName"] = "nn";
    // Attrtibutes
    Shortcuts["Style"] = "st";
    Shortcuts["Class"] = "cl";
    Shortcuts["Src"] = "src";
})(Shortcuts || (Shortcuts = {}));


/***/ }),

/***/ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/template.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/template.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTemplate: function() { return /* binding */ BaseTemplate; },
/* harmony export */   RecursiveTemplate: function() { return /* binding */ RecursiveTemplate; },
/* harmony export */   Shortcuts: function() { return /* reexport safe */ _shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts; },
/* harmony export */   UnRecursiveTemplate: function() { return /* binding */ UnRecursiveTemplate; },
/* harmony export */   capitalize: function() { return /* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_2__.capitalize; },
/* harmony export */   events: function() { return /* binding */ events; },
/* harmony export */   internalComponents: function() { return /* reexport safe */ _components_js__WEBPACK_IMPORTED_MODULE_1__.internalComponents; },
/* harmony export */   styles: function() { return /* binding */ styles; },
/* harmony export */   toCamelCase: function() { return /* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_2__.toCamelCase; }
/* harmony export */ });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../is.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/is.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/utils.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/components.js");
/* harmony import */ var _shortcuts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcuts.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/shortcuts.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/utils.js");
/**
 * 这里我们需要关心的小程序种类有两类：
 * 1. 模板递归：
 *  - 支持：tmpl0 套 tmpl0
 *  - 不支持：这就使得我们必须生成多级的模板，tmpl0 套 tmpl1，tmpl1 套 tmpl2……
 *           直到超过阈值 N (N = config.miniapp.baseLevel) tmplN 会套组件 comp，组件 comp 重新再套 tmpl0。
 * 2. 小程序脚本语言（wxs, sjs, etc...）：
 *  - 支持：可以在模板使用函数缩减模板大小或提高性能（存疑），例如判断一个值是不是假值（falsy value）。
 *         将来或许会把数据序列化^1 的操作也放到小程序脚本语言里。
 *  - 不支持：使用纯 *xml 语法
 *
 * ^1: packages/miniapp-runtime/src/hydrate.ts
*/





const styles = {
    style: `i.${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Style}`,
    class: `i.${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Class}`,
};
const events = {
    bindtap: 'eh',
};
const weixinAdapter = {
    if: 'wx:if',
    else: 'wx:else',
    elseif: 'wx:elif',
    for: 'wx:for',
    forItem: 'wx:for-item',
    forIndex: 'wx:for-index',
    key: 'wx:key',
    xs: 'wxs',
    type: 'weapp',
};
class BaseTemplate {
    constructor() {
        this.exportExpr = 'module.exports =';
        this.thirdPartyPatcher = {};
        this.supportXS = false;
        this.adapter = weixinAdapter;
        /** 组件列表 */
        this.internalComponents = _components_js__WEBPACK_IMPORTED_MODULE_1__.internalComponents;
        /** 可以 focus 聚焦的组件 */
        this.focusComponents = _components_js__WEBPACK_IMPORTED_MODULE_1__.focusComponents;
        /** 不需要渲染子节点的元素 */
        this.voidElements = _components_js__WEBPACK_IMPORTED_MODULE_1__.voidElements;
        /** 可以递归调用自身的组件 */
        this.nestElements = _components_js__WEBPACK_IMPORTED_MODULE_1__.nestElements;
        this.buildPageTemplate = (baseTempPath) => {
            const template = `<import src="${baseTempPath}"/>
<template is="ice_tmpl" data="{{${this.dataKeymap('root:root')}}}" />`;
            return template;
        };
        this.buildBaseComponentTemplate = (ext) => {
            const data = !this.isSupportRecursive && this.supportXS
                ? this.dataKeymap('i:i,l:l')
                : this.dataKeymap('i:i');
            return `<import src="./base${ext}" />
<template is="tmpl_0_${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Container}" data="{{${data}}}" />`;
        };
        this.buildCustomComponentTemplate = (ext) => {
            const { adapter } = this;
            const data = !this.isSupportRecursive && this.supportXS
                ? `${this.dataKeymap('i:item,l:\'\'')}`
                : this.dataKeymap('i:item');
            return `<import src="./base${ext}" />
  <block ${adapter.for}="{{i.${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Childnodes}}}" ${adapter.key}="sid">
    <template is="tmpl_0_container" data="{{${data}}}" />
  </block>`;
        };
        this.buildXScript = () => {
            return `${this.exportExpr} {
  a: ${this.buildXSTmplName()},
  b: function (a, b) {
    return a === undefined ? b : a
  },
  c: ${this.buildXSTepFocus(_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.NodeName)},
  d: function (i, v) {
    return i === undefined ? v : i
  },
  e: function (n) {
    return 'tmpl_' + n + '_${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Container}'
  },
  ${this.buildXSTmpExtra()}
}`;
        };
    }
    buildAttribute(attrs, nodeName) {
        return Object.keys(attrs)
            .map(k => `${k}="${k.startsWith('bind') || k.startsWith('on') || k.startsWith('catch') ? attrs[k] : `{${this.getAttrValue(attrs[k], k, nodeName)}}`}" `)
            .join('');
    }
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    replacePropName(name, value, _componentName, _componentAlias) {
        if (value === 'eh')
            return name.toLowerCase();
        return name;
    }
    createMiniComponents(components) {
        const result = Object.create(null);
        for (const key in components) {
            if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.hasOwn)(components, key)) {
                let component = components[key];
                const compName = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toDashed)(key);
                const newComp = Object.create(null);
                const componentAlias = this.componentsAlias[compName];
                if ((0,_is_js__WEBPACK_IMPORTED_MODULE_3__.isFunction)(this.modifyCompProps)) {
                    component = this.modifyCompProps(compName, component);
                }
                for (let prop in component) {
                    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.hasOwn)(component, prop)) {
                        let propValue = component[prop];
                        if (prop.startsWith('bind') || propValue === 'eh') {
                            propValue = 'eh';
                        }
                        else if (propValue === '') {
                            const propInCamelCase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toCamelCase)(prop);
                            const propAlias = componentAlias[propInCamelCase] || propInCamelCase;
                            propValue = `i.${propAlias}`;
                        }
                        else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_3__.isBooleanStringLiteral)(propValue) || (0,_is_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(+propValue)) {
                            const propInCamelCase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toCamelCase)(prop);
                            const propAlias = componentAlias[propInCamelCase] || propInCamelCase;
                            propValue = this.supportXS
                                ? `xs.b(i.${propAlias},${propValue})`
                                : `i.${propAlias}===undefined?${propValue}:i.${propAlias}`;
                        }
                        else {
                            const propInCamelCase = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toCamelCase)(prop);
                            const propAlias = componentAlias[propInCamelCase] || propInCamelCase;
                            propValue = `i.${propAlias}||${propValue || (0,_components_js__WEBPACK_IMPORTED_MODULE_1__.singleQuote)('')}`;
                        }
                        prop = this.replacePropName(prop, propValue, compName, componentAlias);
                        newComp[prop] = propValue;
                    }
                }
                if (compName !== 'block') {
                    Object.assign(newComp, styles, this.getEvents());
                }
                if (compName === 'swiper-item') {
                    delete newComp.style;
                }
                if (compName === 'view') {
                    const reg = /^(bind|on)(touchmove|TouchMove)$/;
                    const comp = { ...newComp };
                    Object.keys(comp).forEach(originKey => {
                        if (!reg.test(originKey))
                            return;
                        const key = originKey.replace(reg, 'catch$2');
                        comp[key] = comp[originKey];
                        delete comp[originKey];
                    });
                    result['catch-view'] = comp;
                }
                if (compName === 'view' || compName === 'text' || compName === 'image') {
                    const comp = {};
                    Object.keys(newComp).forEach(key => {
                        const value = newComp[key];
                        if (value !== 'eh')
                            comp[key] = value;
                    });
                    result[`static-${compName}`] = comp;
                    if (compName === 'view') {
                        result['pure-view'] = {
                            style: comp.style,
                            class: comp.class,
                        };
                    }
                }
                if (compName === 'slot' || compName === 'slot-view') {
                    result[compName] = {
                        slot: newComp === null || newComp === void 0 ? void 0 : newComp.name,
                        ...styles,
                    };
                }
                else {
                    result[compName] = newComp;
                }
            }
        }
        return result;
    }
    buildBaseTemplate() {
        const { adapter } = this;
        const data = !this.isSupportRecursive && this.supportXS
            ? `${this.dataKeymap('i:item,l:\'\'')}`
            : this.dataKeymap('i:item');
        return `${this.buildXsTemplate()}
<template name="ice_tmpl">
  <block ${adapter.for}="{{root.cn}}" ${adapter.key}="sid">
    <template is="tmpl_0_${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Container}" data="{{${data}}}" />
  </block>
</template>
`;
    }
    buildThirdPartyAttr(attrs, patcher = {}) {
        return Array.from(attrs).reduce((str, attr) => {
            if (attr.startsWith('@')) {
                // vue2
                let value = attr.slice(1);
                if (value.indexOf('-') > -1) {
                    value = `:${value}`;
                }
                return `${str}bind${value}="eh" `;
            }
            else if (attr.startsWith('bind')) {
                return `${str}${attr}="eh" `;
            }
            else if (attr.startsWith('on')) {
                // react, vue3
                let value = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toKebabCase)(attr.slice(2));
                if (value.indexOf('-') > -1) {
                    // 兼容如 vant 某些组件的 bind:a-b 这类属性
                    value = `:${value}`;
                }
                return `${str}bind${value}="eh" `;
            }
            else if (attr === 'class') {
                return `${str}class="{{i.${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Class}}}" `;
            }
            else if (attr === 'style') {
                return `${str}style="{{i.${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Style}}}" `;
            }
            const patchValue = patcher[attr];
            if ((0,_is_js__WEBPACK_IMPORTED_MODULE_3__.isBooleanStringLiteral)(patchValue) || (0,_is_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(patchValue) || (0,_is_js__WEBPACK_IMPORTED_MODULE_3__.isString)(patchValue)) {
                const propValue = this.supportXS
                    ? `xs.b(i.${(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toCamelCase)(attr)},${patchValue})`
                    : `i.${(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toCamelCase)(attr)}===undefined?${patchValue}:i.${(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toCamelCase)(attr)}`;
                return `${str}${attr}="{{${propValue}}}" `;
            }
            return `${str}${attr}="{{i.${(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toCamelCase)(attr)}}}" `;
        }, '');
    }
    buildComponentTemplate(comp, level) {
        return this.focusComponents.has(comp.nodeName)
            ? this.buildFocusComponentTemplte(comp, level)
            : this.buildStandardComponentTemplate(comp, level);
    }
    getChildren(comp, level) {
        const { isSupportRecursive, adapter, supportXS } = this;
        const nextLevel = isSupportRecursive ? 0 : level + 1;
        const data = !this.isSupportRecursive && supportXS
            ? `${this.dataKeymap('i:item,l:l')}`
            : this.dataKeymap('i:item');
        let child = supportXS
            ? `<template is="{{xs.e(${isSupportRecursive ? 0 : 'cid+1'})}}" data="{{${data}}}" />`
            : `<template is="tmpl_${nextLevel}_${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Container}" data="{{${data}}}" />`;
        if ((0,_is_js__WEBPACK_IMPORTED_MODULE_3__.isFunction)(this.modifyLoopBody)) {
            child = this.modifyLoopBody(child, comp.nodeName);
        }
        let children = this.voidElements.has(comp.nodeName)
            ? ''
            : `
    <block ${adapter.for}="{{i.${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Childnodes}}}" ${adapter.key}="sid">
      ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.indent)(child, 6)}
    </block>
  `;
        if ((0,_is_js__WEBPACK_IMPORTED_MODULE_3__.isFunction)(this.modifyLoopContainer)) {
            children = this.modifyLoopContainer(children, comp.nodeName);
        }
        return children;
    }
    buildFocusComponentTemplte(comp, level) {
        const children = this.getChildren(comp, level);
        const { nodeName } = comp;
        const { nodeAlias } = comp;
        const attrs = { ...comp.attributes };
        const templateName = this.supportXS
            ? `xs.c(i, 'tmpl_${level}_')`
            : `i.focus ? 'tmpl_${level}_${nodeAlias}_focus' : 'tmpl_${level}_${nodeAlias}_blur'`;
        delete attrs.focus;
        let res = `
<template name="tmpl_${level}_${nodeAlias}">
  <template is="{{${templateName}}}" data="{{${this.dataKeymap('i:i')}${children ? ',cid:cid' : ''}}}" />
</template>

<template name="tmpl_${level}_${nodeAlias}_focus">
  <${nodeName} ${this.buildAttribute(comp.attributes, nodeName)} id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">${children}</${nodeName}>
</template>

<template name="tmpl_${level}_${nodeAlias}_blur">
  <${nodeName} ${this.buildAttribute(attrs, nodeName)} id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">${children}</${nodeName}>
</template>
`;
        if ((0,_is_js__WEBPACK_IMPORTED_MODULE_3__.isFunction)(this.modifyTemplateResult)) {
            res = this.modifyTemplateResult(res, nodeName, level, children);
        }
        return res;
    }
    buildStandardComponentTemplate(comp, level) {
        const children = this.getChildren(comp, level);
        const { nodeAlias } = comp;
        let nodeName = '';
        switch (comp.nodeName) {
            case 'slot':
            case 'slot-view':
            case 'catch-view':
            case 'static-view':
            case 'pure-view':
                nodeName = 'view';
                break;
            case 'static-text':
                nodeName = 'text';
                break;
            case 'static-image':
                nodeName = 'image';
                break;
            default:
                nodeName = comp.nodeName;
                break;
        }
        let res = `
<template name="tmpl_${level}_${nodeAlias}">
  <${nodeName} ${this.buildAttribute(comp.attributes, comp.nodeName)} id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">${children}</${nodeName}>
</template>
`;
        if ((0,_is_js__WEBPACK_IMPORTED_MODULE_3__.isFunction)(this.modifyTemplateResult)) {
            res = this.modifyTemplateResult(res, comp.nodeName, level, children);
        }
        return res;
    }
    buildPlainTextTemplate(level) {
        return `
<template name="tmpl_${level}_${this.componentsAlias['#text']._num}">
  <block>{{i.${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Text}}}</block>
</template>
`;
    }
    buildThirdPartyTemplate(level, componentConfig) {
        const { adapter, isSupportRecursive, supportXS, nestElements } = this;
        const nextLevel = isSupportRecursive ? 0 : level + 1;
        let template = '';
        const data = !isSupportRecursive && supportXS
            ? `${this.dataKeymap('i:item,l:l')}`
            : this.dataKeymap('i:item');
        componentConfig.thirdPartyComponents.forEach((attrs, compName) => {
            if (compName === 'custom-wrapper') {
                template += `
<template name="tmpl_${level}_${compName}">
  <${compName} i="{{i}}" l="{{l}}" id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
  </${compName}>
</template>
  `;
            }
            else {
                if (!isSupportRecursive &&
                    supportXS &&
                    nestElements.has(compName) &&
                    level + 1 > nestElements.get(compName)) {
                    return;
                }
                let child = supportXS
                    ? `<template is="{{xs.e(${isSupportRecursive ? 0 : 'cid+1'})}}" data="{{${data}}}" />`
                    : `<template is="tmpl_${nextLevel}_${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Container}" data="{{${data}}}" />`;
                if ((0,_is_js__WEBPACK_IMPORTED_MODULE_3__.isFunction)(this.modifyThirdPartyLoopBody)) {
                    child = this.modifyThirdPartyLoopBody(child, compName);
                }
                template += `
<template name="tmpl_${level}_${compName}">
  <${compName} ${this.buildThirdPartyAttr(attrs, this.thirdPartyPatcher[compName] || {})} id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block ${adapter.for}="{{i.${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Childnodes}}}" ${adapter.key}="sid">
      ${child}
    </block>
  </${compName}>
</template>
  `;
            }
        });
        return template;
    }
    buildContainerTemplate(level, restart = false) {
        let tmpl = '';
        if (restart) {
            tmpl = `<block ${this.adapter.if}="{{i.nn === '#text'}}">
    <template is="tmpl_0_#text" data="{{i:i}}" />
  </block>
  <block ${this.adapter.else}>
    ${!this.isSupportRecursive && this.supportXS ? '<comp i="{{i}}" l="{{l}}" />' : '<comp i="{{i}}" />'}
  </block>`;
        }
        else {
            const xs = this.isSupportRecursive
                ? `xs.a(${level}, i.${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.NodeName})`
                : `xs.a(${level}, i.${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.NodeName}, l)`;
            const data = this.isSupportRecursive
                ? `${this.dataKeymap('i:i')}`
                : `${this.dataKeymap(`i:i,cid:${level},l:xs.f(l,i.${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.NodeName})`)}`;
            tmpl = this.supportXS
                ? `<template is="{{${xs}}}" data="{{${data}}}" />`
                : `<template is="{{'tmpl_${level}_' + i.${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.NodeName}}}" data="{{${this.dataKeymap('i:i')}}}" />`;
        }
        return `
<template name="tmpl_${level}_${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Container}">
  ${tmpl}
</template>
`;
    }
    dataKeymap(keymap) {
        return keymap;
    }
    getEvents() {
        return events;
    }
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    getAttrValue(value, _key, _nodeName) {
        return `{${value}}`;
    }
    buildXsTemplate() {
        return '';
    }
    mergeComponents(ctx, patch) {
        ctx.helper.recursiveMerge(this.internalComponents, patch);
    }
    mergeThirdPartyComponents(patch) {
        this.thirdPartyPatcher = patch;
    }
    buildXSTmplName() {
        return `function (l, n) {
    return 'tmpl_' + l + '_' + n
  }`;
    }
    buildXSTepFocus(nn) {
        return `function(i, prefix) {
    var s = i.focus !== undefined ? 'focus' : 'blur'
    return prefix + i.${nn} + '_' + s
  }`;
    }
    buildXSTmpExtra() {
        return '';
    }
}
class RecursiveTemplate extends BaseTemplate {
    constructor() {
        super(...arguments);
        this.isSupportRecursive = true;
        this.buildTemplate = (componentConfig) => {
            let template = this.buildBaseTemplate();
            if (!this.miniComponents) {
                this.componentsAlias = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.getComponentsAlias)(this.internalComponents);
                this.miniComponents = this.createMiniComponents(this.internalComponents);
            }
            const ZERO_FLOOR = 0;
            const components = Object.keys(this.miniComponents)
                .filter(c => (componentConfig.includes.size &&
                !componentConfig.includeAll ? componentConfig.includes.has(c) : true));
            template = components.reduce((current, nodeName) => {
                const attributes = this.miniComponents[nodeName];
                const nodeAlias = this.componentsAlias[nodeName]._num;
                return current + this.buildComponentTemplate({ nodeName, nodeAlias, attributes }, ZERO_FLOOR);
            }, template);
            template += this.buildPlainTextTemplate(ZERO_FLOOR);
            template += this.buildThirdPartyTemplate(ZERO_FLOOR, componentConfig);
            template += this.buildContainerTemplate(ZERO_FLOOR);
            return template;
        };
    }
}
class UnRecursiveTemplate extends BaseTemplate {
    constructor() {
        super(...arguments);
        this.isSupportRecursive = false;
        this._baseLevel = 16;
        this.buildTemplate = (componentConfig) => {
            this.componentConfig = componentConfig;
            if (!this.miniComponents) {
                this.componentsAlias = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.getComponentsAlias)(this.internalComponents);
                this.miniComponents = this.createMiniComponents(this.internalComponents);
            }
            const components = Object.keys(this.miniComponents)
                .filter(c => (componentConfig.includes.size &&
                !componentConfig.includeAll ? componentConfig.includes.has(c) : true));
            let template = this.buildBaseTemplate();
            for (let i = 0; i < this.baseLevel; i++) {
                template += this.supportXS
                    ? this.buildOptimizeFloor(i, components, this.baseLevel === i + 1)
                    : this.buildFloor(i, components, this.baseLevel === i + 1);
            }
            return template;
        };
    }
    set baseLevel(lv) {
        this._baseLevel = lv;
    }
    get baseLevel() {
        return this._baseLevel;
    }
    buildFloor(level, components, restart = false) {
        if (restart)
            return this.buildContainerTemplate(level, restart);
        let template = components.reduce((current, nodeName) => {
            const attributes = this.miniComponents[nodeName];
            const nodeAlias = this.componentsAlias[nodeName]._num;
            return current + this.buildComponentTemplate({ nodeName, nodeAlias, attributes }, level);
        }, '');
        template += this.buildPlainTextTemplate(level);
        template += this.buildThirdPartyTemplate(level, this.componentConfig);
        template += this.buildContainerTemplate(level, restart);
        return template;
    }
    buildOptimizeFloor(level, components, restart = false) {
        if (restart)
            return this.buildContainerTemplate(level, restart);
        let template = components.reduce((current, nodeName) => {
            if (level !== 0) {
                if (!this.nestElements.has(nodeName)) {
                    // 不可嵌套自身的组件只需输出一层模板
                    return current;
                }
                else {
                    // 部分可嵌套自身的组件实际上不会嵌套过深，这里按阈值限制层数
                    const max = this.nestElements.get(nodeName);
                    if (max > 0 && level >= max) {
                        return current;
                    }
                }
            }
            const attributes = this.miniComponents[nodeName];
            const nodeAlias = this.componentsAlias[nodeName]._num;
            return current + this.buildComponentTemplate({ nodeName, nodeAlias, attributes }, level);
        }, '');
        if (level === 0)
            template += this.buildPlainTextTemplate(level);
        template += this.buildThirdPartyTemplate(level, this.componentConfig);
        template += this.buildContainerTemplate(level);
        return template;
    }
    buildXSTmplName() {
        const isLoopComps = [
            ...Array.from(this.nestElements.keys()),
            ...Array.from(this.componentConfig.thirdPartyComponents.keys()),
        ];
        const isLoopCompsSet = new Set(isLoopComps);
        const hasMaxComps = [];
        this.nestElements.forEach((max, comp) => {
            if (max > 1) {
                hasMaxComps.push(comp);
            }
            else if (max === 1 && isLoopCompsSet.has(comp)) {
                isLoopCompsSet.delete(comp);
            }
        });
        const { componentsAlias } = this;
        const listA = Array.from(isLoopCompsSet).map(item => { var _a; return ((_a = componentsAlias[item]) === null || _a === void 0 ? void 0 : _a._num) || item; });
        const listB = hasMaxComps.map(item => { var _a; return ((_a = componentsAlias[item]) === null || _a === void 0 ? void 0 : _a._num) || item; });
        const containerLevel = this.baseLevel - 1;
        return `function (l, n, s) {
    var a = ${JSON.stringify(listA)}
    var b = ${JSON.stringify(listB)}
    if (a.indexOf(n) === -1) {
      l = 0
    }
    if (b.indexOf(n) > -1) {
      var u = s.split(',')
      var depth = 0
      for (var i = 0; i < u.length; i++) {
        if (u[i] === n) depth++
      }
      l = depth
    }
    if (l >= ${containerLevel}) {
      return 'tmpl_${containerLevel}_${_shortcuts_js__WEBPACK_IMPORTED_MODULE_0__.Shortcuts.Container}'
    }
    return 'tmpl_' + l + '_' + n
  }`;
    }
    buildXSTmpExtra() {
        const hasMaxComps = [];
        this.nestElements.forEach((max, comp) => {
            if (max > 1)
                hasMaxComps.push(comp);
        });
        const { componentsAlias } = this;
        const listA = hasMaxComps.map(item => { var _a; return ((_a = componentsAlias[item]) === null || _a === void 0 ? void 0 : _a._num) || item; });
        return `f: function (l, n) {
    var b = ${JSON.stringify(listA)}
    if (b.indexOf(n) > -1) {
      if (l) l += ','
      l += n
    }
    return l
  }`;
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/utils.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/utils.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComponentsAlias: function() { return /* binding */ getComponentsAlias; },
/* harmony export */   mergeInternalComponents: function() { return /* binding */ mergeInternalComponents; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/utils.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/miniapp/components.js");


function mergeInternalComponents(components) {
    Object.keys(components).forEach(name => {
        if (name in _components_js__WEBPACK_IMPORTED_MODULE_0__.internalComponents) {
            Object.assign(_components_js__WEBPACK_IMPORTED_MODULE_0__.internalComponents[name], components[name]);
        }
        else {
            _components_js__WEBPACK_IMPORTED_MODULE_0__.internalComponents[name] = components[name];
        }
    });
    return _components_js__WEBPACK_IMPORTED_MODULE_0__.internalComponents;
}
function getComponentsAlias(origin) {
    const mapping = {};
    const viewAttrs = origin.View;
    const extraList = {
        '#text': {},
        StaticView: viewAttrs,
        StaticImage: origin.Image,
        StaticText: origin.Text,
        PureView: viewAttrs,
        CatchView: viewAttrs,
    };
    origin = { ...origin, ...extraList };
    Object.keys(origin)
        .sort((a, b) => {
        const reg = /^(Static|Pure|Catch)*(View|Image|Text)$/;
        const isACommonly = reg.test(a);
        const isBCommonly = reg.test(b);
        if (isACommonly && isBCommonly) {
            return a > b ? 1 : -1;
        }
        else if (isACommonly) {
            return -1;
        }
        else if (isBCommonly) {
            return 1;
        }
        else {
            return a >= b ? 1 : -1;
        }
    })
        .forEach((key, num) => {
        const obj = {
            _num: String(num),
        };
        Object.keys(origin[key])
            .filter(attr => !(/^bind/.test(attr)) && !['focus', 'blur'].includes(attr))
            .sort()
            .forEach((attr, index) => {
            obj[(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toCamelCase)(attr)] = `p${index}`;
        });
        mapping[(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toDashed)(key)] = obj;
    });
    return mapping;
}


/***/ }),

/***/ "./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/utils.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ice+shared@1.1.0/node_modules/@ice/shared/esm/utils.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_ARR: function() { return /* binding */ EMPTY_ARR; },
/* harmony export */   EMPTY_OBJ: function() { return /* binding */ EMPTY_OBJ; },
/* harmony export */   capitalize: function() { return /* binding */ capitalize; },
/* harmony export */   ensure: function() { return /* binding */ ensure; },
/* harmony export */   hasOwn: function() { return /* binding */ hasOwn; },
/* harmony export */   indent: function() { return /* binding */ indent; },
/* harmony export */   noop: function() { return /* binding */ noop; },
/* harmony export */   toCamelCase: function() { return /* binding */ toCamelCase; },
/* harmony export */   toDashed: function() { return /* binding */ toDashed; },
/* harmony export */   toKebabCase: function() { return /* binding */ toKebabCase; },
/* harmony export */   warn: function() { return /* binding */ warn; }
/* harmony export */ });
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const noop = () => { };
function toCamelCase(s) {
    let camel = '';
    let nextCap = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '-') {
            nextCap = true;
        }
        else {
            camel += nextCap ? s[i].toUpperCase() : s[i];
            nextCap = false;
        }
    }
    return camel;
}
function toDashed(s) {
    return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
const toKebabCase = function (string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
function indent(str, size) {
    return str.split('\n')
        .map((line, index) => {
        const indent = index === 0 ? '' : Array(size).fill(' ').join('');
        return indent + line;
    })
        .join('\n');
}
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */
function ensure(condition, msg) {
    if (!condition) {
        if (false) {}
        else {
            const reportIssue = '\n如有疑问，请提交 issue 至：https://github.com/alibaba/ice/issues';
            throw new Error(msg + reportIssue);
        }
    }
}
function warn(condition, msg) {
    if (true) {
        if (condition) {
            console.warn(`[ice miniapp warn] ${msg}`);
        }
    }
}
const { hasOwnProperty } = Object.prototype;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);


/***/ })

}]);
//# sourceMappingURL=ice.js.map