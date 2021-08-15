import { LightOnCommand, LightOffCommand, IncreaseLuminCommand, DecreaseLuminCommand, RedLightCommand, Remote, Light, Command } from "patterns/command/command-light"

let redLight = false;
let lightOff = false;


function invokeHandler(selectedButton: string) {
    const action = `${selectedButton}`;
    console.log({ action });
    switch (action) {
      case "on":
        return new LightOnCommand(new Light());
        break;
      case "off":
        return new LightOffCommand(new Light());
        break;
      case "increase-lum":
        return new IncreaseLuminCommand(new Light());
        break;
      case "decrease-lum":
        return new DecreaseLuminCommand(new Light());
        break;
      case "red-light":
        return new RedLightCommand(new Light());
        break;
      default:
        return new LightOnCommand(new Light());
        break;
    }
  }

export function invokeRemote(command: Command): string {
  const remote = new Remote(command);

  return remote.execute();

}


export function action(selected: string) {
  if(selected=="red-light") {
    redLight = true;
  } 
  else if (selected=="on"||selected=="off") {
    redLight = false;
  }

  if((redLight==false) && (selected=="increase-lum"||selected=="decrease-lum")) {
    if(lightOff==true){
      const invoke = invokeHandler("off");
      if (invoke) {
        return invokeRemote(invoke);
      }
    } else {
      const invoke = invokeHandler("on");
      if (invoke) {
        return invokeRemote(invoke);
      }
    }
    
  } else {
    if (selected=="off") {
      lightOff = true;
    } else {
      lightOff = false;
    }
    const invoke = invokeHandler(selected);
    if (invoke) {
      return invokeRemote(invoke);
    }
  }
}