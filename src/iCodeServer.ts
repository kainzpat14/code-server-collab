import { PluginConfig, WebsocketRouter } from "code-server";
import { ILogger } from "./iLogger";

export interface ICodeServer {
    createWsRouter() : WebsocketRouter;
    getLogger(config: PluginConfig) : ILogger;
}