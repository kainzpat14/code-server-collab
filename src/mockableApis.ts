import { CodeServer } from "./codeserver/codeServer";
import { ICodeServer } from "./iCodeServer";

export class MockableApis {
    static codeServer : ICodeServer = new CodeServer();
}