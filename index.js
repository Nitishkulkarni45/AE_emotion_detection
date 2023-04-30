const WebCamElement = document.getElementById("WebCam");
const CanvasElement = document.getElementById("canvas");
const webcam = new Webcam(WebCamElement,"user",CanvasElement);
webcam.start();