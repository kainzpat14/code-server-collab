import { PluginConfig, WebsocketRouter, WsRouter } from "code-server";
import { ICodeServer } from "../iCodeServer";
import { ILogger } from "../iLogger";
import { CodeServerLogger } from "./codeServerLogger";

export class CodeServer implements ICodeServer {
    getLogger(config: PluginConfig): ILogger {
        return new CodeServerLogger(config.logger);
    }
    
    createWsRouter(): WebsocketRouter {
        return WsRouter();
    }

}