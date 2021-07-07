
declare module 'y-websocket/bin/utils' {
    import * as net from 'net';
    export function setupWSConnection(conn : any, req : any) : void;
}