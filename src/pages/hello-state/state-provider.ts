import { Gate, GateState, OpenGateState, ClosedGateState } from "patterns/state/state-pattern"
let enter = false;

export function getStateM(message: string) {
  switch (message) {
    case "enter":
      return new OpenGateState(new Gate);

    case "payOk":
      return new OpenGateState(new Gate);

    case "payFailed":
      return new ClosedGateState(new Gate);
    default:
      return new ClosedGateState(new Gate);
  }
}

export function getState(selected: string) {
  const state = getStateM(selected);
  if(selected=="payOk") {
    enter = true;
  }

  if(selected=="payFailed") {
    enter = false;
  }

  if (enter==true) {
    return state.doAction();
  }
  else {
    return new ClosedGateState(new Gate).doAction();
  }

  // if(state) {
  //   return state.doAction()
  // }
}
