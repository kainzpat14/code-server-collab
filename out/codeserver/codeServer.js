"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeServer = void 0;
const code_server_1 = require("code-server");
const codeServerLogger_1 = require("./codeServerLogger");
class CodeServer {
    getLogger(config) {
        return new codeServerLogger_1.CodeServerLogger(config.logger);
    }
    createWsRouter() {
        return code_server_1.WsRouter();
    }
}
exports.CodeServer = CodeServer;
//# sourceMappingURL=codeServer.js.map