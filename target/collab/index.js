"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const collabPlugin_1 = require("./collabPlugin");
let collabPlugin = new collabPlugin_1.CollabPlugin();
exports.plugin = Object.assign(Object.assign({}, collabPlugin), { init: collabPlugin.init.bind(collabPlugin), router: collabPlugin.router.bind(collabPlugin), wsRouter: collabPlugin.wsRouter.bind(collabPlugin) });
//# sourceMappingURL=index.js.map