"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockWebsocketRouter = void 0;
const express = require("express");
class MockWebsocketRouter {
    constructor() {
        this.router = express.Router();
    }
    /**
     * Handle a websocket at this route. Note that websockets are immediately
     * paused when they come in.
     */
    ws(route, ...handlers) {
        this.router.get(route, ...handlers.map((handler) => {
            const wrapped = (req, res, next) => {
                ;
                req._ws_handled = true;
                return handler(req, res, next);
            };
            return wrapped;
        }));
    }
}
exports.MockWebsocketRouter = MockWebsocketRouter;
//# sourceMappingURL=mockWebsocketRouter.js.map