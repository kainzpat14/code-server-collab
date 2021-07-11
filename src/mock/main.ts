import { Logger } from 'code-server';
import express, { Express } from "express"
import * as http from 'http'
import { MockableApis } from '../mockableApis';
import { CollabPlugin } from '../collabPlugin';
import { SimulatedCodeServer } from './simulatedCodeServer';

console.log("Mock server starting");

MockableApis.codeServer = new SimulatedCodeServer();

const app = express();
const port = 8080;

const server = http.createServer(app);

const plugin = new CollabPlugin();
plugin.init({
    logger: {} as Logger, 
    workingDirectory: undefined
});

app.use(plugin.routerPath, plugin.router());


const wsApp = express();
wsApp.use(plugin.routerPath, plugin.wsRouter().router);
//code copied from code-server
server.on("upgrade", (req, socket, head) => {
    socket.pause()
    console.log("Handle upgrade");

    req.ws = socket
    req.head = head
    req._ws_handled = false

    // Send the request off to be handled by Express.
    ;(wsApp as any).handle(req, new http.ServerResponse(req), () => {
        if (!req._ws_handled) {
        socket.end("HTTP/1.1 404 Not Found\r\n\r\n")
        }
    })
});

server.listen(port,"0.0.0.0");
console.log("Mock server started");
