import { NormalRequest, ProxyRequest } from "patterns/proxy/proxy-pattern"
let enter = false;

export function getProxyType(message: string) {
  switch (message) {
    case "off":
      return new NormalRequest("flower");

    case "on":
      return new ProxyRequest("flower");

    default:
      return new NormalRequest("flower");
  }
}

export function getState(selected: string) {
  const request = getProxyType(selected)
  if(request) {
    return request.getFromPinterest();
  }
}
