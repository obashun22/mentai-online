export class WebRTCCam {
  private handleSuccess(stream: MediaStream) {
    const video = document.querySelector("video");
    video!.srcObject = stream;
  }

  private handleError(error: Error) {
    console.error(error);
  }

  async init() {
    const constraints = {
      audio: false,
      video: true,
    };
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.handleSuccess(stream);
    } catch (e: any) {
      this.handleError(e);
    }
  }
}
