var flag:number=0

export class Light {
    public on() : string {
        return "on";
    }

    public off() : string {
        return "off";
    }

    public increseLumin() : string {
        flag++;
        if(flag>3) {
            flag=3;
        }
        return `red${flag}`;
    }

    public decreseLumin() : string {
        flag--;
        if(flag<0) {
            flag=0;
        }
        return `red${flag}`;
    }

    public redOn() : string {
        flag=0;
        return "red0";
    }
}


export interface Command {
    execute(): string;
}

export class LightOnCommand implements Command {
    light: Light;

    constructor(light: Light) {
        this.light = light
    }
    execute() : string {
        return this.light.on();
    }
}

export class LightOffCommand implements Command {
    light: Light;
    
    constructor( light : Light) {
        this.light = light;
    }
    execute() : string {
        return this.light.off();
    }
}

export class IncreaseLuminCommand implements Command {
    light: Light;
    
    constructor( light : Light) {
        this.light = light;
    }
    execute() : string {
        return this.light.increseLumin();
    }
}

export class DecreaseLuminCommand implements Command {
    light: Light;
    
    constructor( light : Light) {
        this.light = light;
    }
    execute() : string {
        return this.light.decreseLumin();
    }
}

export class RedLightCommand implements Command {
    light: Light;
    
    constructor( light : Light) {
        this.light = light;
    }
    execute() : string {
        return this.light.redOn();
    }
}


export class Remote {
    command: Command;

    constructor(command : Command) {
        this.command = command;
    }

    execute() : string {
        return this.command.execute();
    }
}






