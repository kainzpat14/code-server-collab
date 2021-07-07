import { PluginConfig, WebsocketRouter } from "code-server";
import { ICodeServer } from "../iCodeServer";
import { ILogger } from "../iLogger";
import { MockLogger } from "./mockLogger";
import { MockWebsocketRouter } from "./mockWebsocketRouter";

export class SimulatedCodeServer implements ICodeServer {
    
    getLogger(config: PluginConfig): ILogger {
        return new MockLogger();
    }

    createWsRouter(): WebsocketRouter {
        return new MockWebsocketRouter();
    }

}