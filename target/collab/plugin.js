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
exports.CollabPlugin = void 0;
const express = __importStar(require("express"));
const utils_1 = require("y-websocket/bin/utils");
const ws_1 = __importDefault(require("ws"));
const mockableApis_1 = require("./mockableApis");
class CollabPlugin {
    constructor() {
        this.name = "Collaboration";
        this.version = "0.0.1";
        this.displayName = "Collaboration";
        this.description = "Collaboration Backend Plugin";
        this.routerPath = "/collab";
        this.homepageURL = "https://github.com/kainzpat14/code-server-collab";
        this.logger = {};
        this.wss = new ws_1.default.Server({ noServer: true });
    }
    init(config) {
        this.logger = mockableApis_1.MockableApis.codeServer.getLogger(config);
        this.logger.debug("Starting CollabPlugin");
        this.wss.on('connection', utils_1.setupWSConnection);
    }
    router() {
        let router = express.Router();
        router.get("/", (req, res, next) => {
            this.logger.debug("New http request");
            res.send("Collab active");
        });
        return router;
    }
    wsRouter() {
        let wsRouter = mockableApis_1.MockableApis.codeServer.createWsRouter();
        wsRouter.ws("/yjs/*", (req, res, next) => {
            this.logger.debug("New websocket request");
            try {
                let relativeUrl = req.url.slice(4);
                req.baseUrl += "/yjs";
                req.url = relativeUrl;
                this.wss.handleUpgrade(req, req.ws, req.head, this.generateHandleAuth(req));
            }
            catch (err) {
                this.logger.debug(err);
                throw err;
            }
        });
        return wsRouter;
    }
    generateHandleAuth(req) {
        return (ws, _) => {
            this.wss.emit('connection', ws, req);
        };
    }
}
exports.CollabPlugin = CollabPlugin;
//# sourceMappingURL=plugin.js.map