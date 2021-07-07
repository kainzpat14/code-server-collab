import { ILogger } from "../iLogger";

export class MockLogger implements ILogger {
    
    debug(message: string): void {
        console.debug(message);
    }
    

}