const webCamElement = document.getElementById("webCam");
const canvasElement = document.getElementById("canvas");
const webcam = new Webcam(webCamElement, "user", canvasElement);
webcam.start();

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'VIDEO_ID',
        playerVars: {
            'autoplay': 0,
            'controls': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    event.target.playVideo();
}
function onPlayerStateChange(event) {
    // Do something when the video changes state (e.g. finished playing)
}

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ZJdLJf4ZW-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}