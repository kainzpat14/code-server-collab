"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimulatedCodeServer = void 0;
const mockLogger_1 = require("./mockLogger");
const mockWebsocketRouter_1 = require("./mockWebsocketRouter");
class SimulatedCodeServer {
    getLogger(config) {
        return new mockLogger_1.MockLogger();
    }
    createWsRouter() {
        return new mockWebsocketRouter_1.MockWebsocketRouter();
    }
}
exports.SimulatedCodeServer = SimulatedCodeServer;
//# sourceMappingURL=simulatedCodeServer.js.map