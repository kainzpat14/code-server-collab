import { Logger } from "code-server";
import { ILogger } from "../iLogger";

export class CodeServerLogger implements ILogger{
    constructor(private logger : Logger) {
        
    }
    
    debug(message: string): void {
        this.logger.debug(message);
    }

    
}