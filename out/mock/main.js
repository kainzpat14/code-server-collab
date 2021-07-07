"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const mockableApis_1 = require("../mockableApis");
const collabPlugin_1 = require("../collabPlugin");
const simulatedCodeServer_1 = require("./simulatedCodeServer");
console.log("Mock server starting");
mockableApis_1.MockableApis.codeServer = new simulatedCodeServer_1.SimulatedCodeServer();
const app = express_1.default();
const port = 8180;
const server = http.createServer(app);
const plugin = new collabPlugin_1.CollabPlugin();
plugin.init({
    logger: {},
    workingDirectory: undefined
});
app.use(plugin.routerPath, plugin.router());
const wsApp = express_1.default();
wsApp.use(plugin.routerPath, plugin.wsRouter().router);
//code copied from code-server
server.on("upgrade", (req, socket, head) => {
    socket.pause();
    req.ws = socket;
    req.head = head;
    req._ws_handled = false;
    wsApp.handle(req, new http.ServerResponse(req), () => {
        if (!req._ws_handled) {
            socket.end("HTTP/1.1 404 Not Found\r\n\r\n");
        }
    });
});
server.listen(port, "0.0.0.0");
console.log("Mock server started");
//# sourceMappingURL=main.js.map