export interface GateState {
    enter(): string;
    payOk(): string;
    payFailed(): string;
}

export class OpenGateState implements GateState {
    gate : Gate;
    constructor(gate: Gate) {
        this.gate = gate;
    }

    public payOk() : string {
        this.gate.changeState(new ClosedGateState(this.gate))
        return "open";
    }

    public enter() : string {
        return "";
    }

    public payFailed() : string {
        return "";
    }

    public doAction() : string {
        return this.payOk();
    }
}

export class ClosedGateState implements GateState {
    gate : Gate;
    constructor(gate: Gate) {
        this.gate = gate;
    }

    public payOk() : string {
        return "";
    }

    public enter() : string {
        return "";
    }

    public payFailed() : string {
        return "closed";
    }

    public doAction() : string {
        return this.payFailed();
    }
}


export class Gate {
    gateState : GateState;

    constructor() {
        this.gateState = new ClosedGateState(this);
    }

    public enter() : void {
        this.gateState.enter();
    }

    public payOk() : void {
        this.gateState.payOk;
    }

    public payFailed() : void {
        this.gateState.payFailed;
    }

    public changeState(gateState: GateState) {
        this.gateState = gateState;
    }


}