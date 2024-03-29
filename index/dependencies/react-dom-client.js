System.register(["react", "scheduler", "react-dom"], (_exports, _context) => {

    const bimport = specifier => {
        const dependencies = new Map([["react"], ["scheduler"], ["react-dom"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
    };

    var dependencies = new Map();
    var require = dependency => dependencies.get(dependency);
    return {
        setters: [dep => dependencies.set('react', dep), dep => dependencies.set('scheduler', dep), dep => dependencies.set('react-dom', dep)],
        execute: function () {
// Prevent esbuild from considering the context to be amd
            const define = void 0;
            const module = {};

            const code = (module, require) => {
                var __create = Object.create;
                var __defProp = Object.defineProperty;
                var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
                var __getOwnPropNames = Object.getOwnPropertyNames;
                var __getProtoOf = Object.getPrototypeOf;
                var __hasOwnProp = Object.prototype.hasOwnProperty;

                var __markAsModule = target => __defProp(target, "__esModule", {
                    value: true
                });

                var __commonJS = (cb, mod) => function __require() {
                    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
                        exports: {}
                    }).exports, mod), mod.exports;
                };

                var __export = (target, all) => {
                    for (var name in all) __defProp(target, name, {
                        get: all[name],
                        enumerable: true
                    });
                };

                var __reExport = (target, module2, copyDefault, desc) => {
                    if (module2 && typeof module2 === "object" || typeof module2 === "function") {
                        for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
                            get: () => module2[key],
                            enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
                        });
                    }

                    return target;
                };

                var __toESM = (module2, isNodeMode) => {
                    return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? {
                        get: () => module2.default,
                        enumerable: true
                    } : {
                        value: module2,
                        enumerable: true
                    })), module2);
                };

                var __toCommonJS = /* @__PURE__ */(cache => {
                    return (module2, temp) => {
                        return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
                    };
                })(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0); // node_modules/react-dom/client.js


                var require_client = __commonJS({
                    "node_modules/react-dom/client.js"(exports) {
                        "use strict";

                        var m = require("react-dom");

                        if (false) {
                            exports.createRoot = m.createRoot;
                            exports.hydrateRoot = m.hydrateRoot;
                        }
                        else {
                            i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

                            exports.createRoot = function (c, o) {
                                i.usingClientEntryPoint = true;

                                try {
                                    return m.createRoot(c, o);
                                }
                                finally {
                                    i.usingClientEntryPoint = false;
                                }
                            };

                            exports.hydrateRoot = function (c, h, o) {
                                i.usingClientEntryPoint = true;

                                try {
                                    return m.hydrateRoot(c, h, o);
                                }
                                finally {
                                    i.usingClientEntryPoint = false;
                                }
                            };
                        }

                        var i;
                    }

                }); // .beyond/uimport/react-dom/client.18.2.0.js


                var client_18_2_0_exports = {};

                __export(client_18_2_0_exports, {
                    default: () => client_18_2_0_default
                });

                __reExport(client_18_2_0_exports, __toESM(require_client()));

                var import_client = __toESM(require_client());

                var client_18_2_0_default = import_client.default;
                module.exports = __toCommonJS(client_18_2_0_exports);
            };

            code(module, require);
            _exports(module.exports);
        }
    }
});
