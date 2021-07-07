"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockableApis = void 0;
const codeServer_1 = require("./codeserver/codeServer");
class MockableApis {
}
exports.MockableApis = MockableApis;
MockableApis.codeServer = new codeServer_1.CodeServer();
//# sourceMappingURL=mockableApis.js.map