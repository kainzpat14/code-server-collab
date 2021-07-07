"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosableSocket = void 0;
class ClosableSocket {
    constructor(socket) {
        this.socket = socket;
    }
    close() {
        this.socket.end();
    }
    on(event, listener) {
        this.socket.on(event, listener);
    }
}
exports.ClosableSocket = ClosableSocket;
//# sourceMappingURL=closableSocket.js.map