import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __export
} from "./chunk-UAMNIRXN.mjs";

// .ice/env.server.ts
process.env.ICE_CORE_MODE = "development";
process.env.ICE_CORE_ROUTER = "true";
process.env.ICE_CORE_ERROR_BOUNDARY = "false";
process.env.ICE_CORE_INITIAL_DATA = "true";
process.env.ICE_CORE_DEV_PORT = "undefined";
process.env.ICE_CORE_REMOVE_ROUTES_CONFIG = "false";
process.env.ICE_CORE_REMOVE_DATA_LOADER = "false";

// .ice/entry.server.ts
import { getAppConfig, renderToHTML as renderAppToHTML, renderToResponse as renderAppToResponse } from "@ice/runtime/server";

// .ice/runtime-modules.ts
import module0 from "../../node_modules/.cache/deps/@ice_plugin-miniapp_runtime.mjs";
var statics = [];
var commons = [
  module0
];

// src/app.ts
var app_exports = {};
__export(app_exports, {
  authConfig: () => authConfig,
  default: () => app_default,
  miniappManifest: () => miniappManifest
});

// .ice/index.ts
import { Link, NavLink, Outlet, useParams, useSearchParams, useLocation, useData, useConfig, useNavigate, useNavigation, useRevalidator, useAsyncValue } from "@ice/runtime/router";
import { defineAppConfig, useAppData, history, useActive, KeepAliveOutlet, useMounted, ClientOnly, withSuspense, useSuspenseData, usePublicAppContext as useAppContext, Await, usePageLifecycle, unstable_useDocumentData, dynamic, Meta, Title, Links, Scripts, FirstChunkCache, Data, Main, usePageAssets } from "@ice/runtime";
import { defineDataLoader, defineServerDataLoader, defineStaticDataLoader } from "@ice/runtime/data-loader";

// src/app.ts
import { defineAuthConfig } from "../../node_modules/.cache/deps/@ice_plugin-auth_types.mjs";
var app_default = defineAppConfig(() => ({
  router: {
    type: "memory",
    // 渲染 home 页面
    initialEntries: [
      "/home"
    ]
  },
  app: {
    strict: true
  }
}));
var miniappManifest = {
  routes: [
    "index",
    "about",
    "repo/index",
    "repo/preview",
    "about"
  ]
};
var authConfig = defineAuthConfig(() => {
  return {
    initialAuth: {
      admin: true
    }
  };
});

// src/document.tsx
import { jsxDEV as _jsxDEV } from "@ice/runtime/react/jsx-dev-runtime";
function Document() {
  return /* @__PURE__ */ _jsxDEV("html", {
    children: [
      /* @__PURE__ */ _jsxDEV("head", {
        children: [
          /* @__PURE__ */ _jsxDEV("meta", {
            charSet: "utf-8"
          }, void 0, false, {
            fileName: "C:/china/china/src/document.tsx",
            lineNumber: 7,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV("meta", {
            name: "description",
            content: "ice.js 3 lite scaffold"
          }, void 0, false, {
            fileName: "C:/china/china/src/document.tsx",
            lineNumber: 8,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV("link", {
            rel: "icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: "C:/china/china/src/document.tsx",
            lineNumber: 9,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
          }, void 0, false, {
            fileName: "C:/china/china/src/document.tsx",
            lineNumber: 10,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Meta, {}, void 0, false, {
            fileName: "C:/china/china/src/document.tsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Title, {}, void 0, false, {
            fileName: "C:/china/china/src/document.tsx",
            lineNumber: 12,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Links, {}, void 0, false, {
            fileName: "C:/china/china/src/document.tsx",
            lineNumber: 13,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "C:/china/china/src/document.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ _jsxDEV("body", {
        children: [
          /* @__PURE__ */ _jsxDEV(Main, {}, void 0, false, {
            fileName: "C:/china/china/src/document.tsx",
            lineNumber: 16,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Scripts, {}, void 0, false, {
            fileName: "C:/china/china/src/document.tsx",
            lineNumber: 17,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "C:/china/china/src/document.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "C:/china/china/src/document.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// asset-manifest:virtual:assets-manifest.json
var virtual_assets_manifest_default = { publicPath: "/", entries: { main: ["js/framework.js", "js/vendors-node_modules_pnpm_ice_bundles_0_2_9__swc_helpers_0_5_1_node_modules_ice_bundles_compi-5d6a84.js", "js/main.js"] }, pages: { index: ["js/p_index.js", "css/p_index.css"] }, assets: {} };

// .ice/routes.tsx
import { jsxDEV as _jsxDEV2 } from "@ice/runtime/react/jsx-dev-runtime";
import { createRouteLoader, WrapRouteComponent, RouteErrorComponent } from "@ice/runtime";
var createRoutes = ({ requestContext, renderMode }) => [
  {
    path: "",
    async lazy() {
      const componentModule = await import(
        /* webpackChunkName: "p_index" */
        "./pages-N2VSWBYN.mjs"
      );
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: "/",
          isLayout: false,
          routeExports: componentModule
        }),
        loader: createRouteLoader({
          routeId: "/",
          requestContext,
          renderMode,
          module: componentModule
        })
      };
    },
    errorElement: /* @__PURE__ */ _jsxDEV2(RouteErrorComponent, {}, void 0, false, {
      fileName: "C:/china/china/.ice/routes.tsx",
      lineNumber: 26,
      columnNumber: 19
    }, void 0),
    componentName: "index",
    index: true,
    id: "/",
    exact: true,
    exports: [
      "default"
    ]
  }
];
var routes_default = createRoutes;

// .ice/entry.server.ts
var runtimeModules = {
  commons,
  statics
};
var getRouterBasename = () => {
  var _a, _b, _c;
  const appConfig = getAppConfig(app_exports);
  return (_c = (_b = (_a = appConfig == null ? void 0 : appConfig.router) == null ? void 0 : _a.basename) != null ? _b : "/") != null ? _c : "";
};
var setRuntimeEnv = (renderMode) => {
  if (renderMode === "SSG") {
    process.env.ICE_CORE_SSG = "true";
  } else {
    process.env.ICE_CORE_SSR = "true";
  }
};
async function renderToHTML(requestContext, options = {}) {
  const { renderMode = "SSR" } = options;
  setRuntimeEnv(renderMode);
  const mergedOptions = mergeOptions(options);
  return await renderAppToHTML(requestContext, mergedOptions);
}
async function renderToResponse(requestContext, options = {}) {
  const { renderMode = "SSR" } = options;
  setRuntimeEnv(renderMode);
  const mergedOptions = mergeOptions(options);
  return renderAppToResponse(requestContext, mergedOptions);
}
function mergeOptions(options) {
  const { renderMode = "SSR", basename, publicPath } = options;
  if (publicPath) {
    virtual_assets_manifest_default.publicPath = publicPath;
  }
  return {
    ...options,
    app: app_exports,
    assetsManifest: virtual_assets_manifest_default,
    createRoutes: routes_default,
    runtimeModules,
    documentDataLoader: void 0,
    Document,
    basename: basename || getRouterBasename(),
    renderMode,
    runtimeOptions: {}
  };
}
export {
  renderToHTML,
  renderToResponse
};
//# sourceMappingURL=index.mjs.map
