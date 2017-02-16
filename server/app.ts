import { op, load, broadcast, Application } from "xhip"

export class App extends Application {
  @broadcast @op async iceCandidate(candidate: RTCIceCandidate) {
    return candidate
  }
  @broadcast @op async sessionDescription(desc: RTCSessionDescriptionInit) {
    return desc
  }
}

export default new App()
