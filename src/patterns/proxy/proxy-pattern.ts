export interface Request {
    getFromPinterest(): string;
}

export class RealRequest implements Request {
    
    fileName : string;
    
    constructor(fileName : string) {
        this.fileName = fileName;
    }

    public getFromPinterest() : string {
        return "image";
    }
}

export class ProxyRequest implements Request {
    fileName : string;
    real : RealRequest;
    
    constructor(fileName : string) {
        this.fileName = fileName;
        this.real = new RealRequest(this.fileName);
    }

    public getFromPinterest() : string {
        return this.real.getFromPinterest();
    }

}

export class NormalRequest implements Request {
    fileName : string;
    
    constructor(fileName : string) {
        this.fileName = fileName;
    }

    public getFromPinterest() : string {
        return "error";
    }

}

