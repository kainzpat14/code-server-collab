
import {Plugin, PluginConfig, WebsocketRequest, WebsocketRouter} from 'code-server'
import * as express from "express"
import { setupWSConnection } from 'y-websocket/bin/utils';
import WebSocket from 'ws';
import { ILogger } from './iLogger';
import { MockableApis } from './mockableApis';
import { IncomingMessage } from 'http';

export class CollabPlugin implements Plugin {
    name = "Collaboration";
    version = "0.0.1";
    displayName = "Collaboration";
    description = "Collaboration Backend Plugin";
    routerPath= "/collab";
    homepageURL = "https://github.com/kainzpat14/code-server-collab";

    private logger : ILogger = {} as ILogger;
    private wss = new WebSocket.Server({ noServer: true })

    init(config: PluginConfig): void {
        this.logger = MockableApis.codeServer.getLogger(config);
        this.logger.debug("Starting CollabPlugin");
        this.wss.on('connection', setupWSConnection);
    }

    router() : express.Router {
        let router = express.Router();
        router.get("/", (req, res, next) => {
            this.logger.debug("New http request");
            res.send("Collab active");
        });
        return router;
    }


    wsRouter() : WebsocketRouter {
        let wsRouter = MockableApis.codeServer.createWsRouter();
        wsRouter.ws("/yjs/*", (req,res,next) => {
            this.logger.debug("New websocket request");
            try {
                let relativeUrl = req.url.slice(4);
                req.baseUrl+="/yjs"
                req.url = relativeUrl;
                this.wss.handleUpgrade(req, req.ws, req.head, this.generateHandleAuth(req));
            } catch(err) {
                this.logger.debug(err);
                throw err;
            }
        });
        return wsRouter;
    }

    private generateHandleAuth(req : WebsocketRequest) {
        return (ws : WebSocket, _ : IncomingMessage) => {
            this.wss.emit('connection', ws, req)
        };
    }

}