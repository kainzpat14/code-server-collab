"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeServerLogger = void 0;
class CodeServerLogger {
    constructor(logger) {
        this.logger = logger;
    }
    debug(message) {
        this.logger.debug(message);
    }
}
exports.CodeServerLogger = CodeServerLogger;
//# sourceMappingURL=codeServerLogger.js.map