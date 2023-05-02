// const webCamElement = document.getElementById("webCam");
// const canvasElement = document.getElementById("canvas");
// const webcam = new Webcam(webCamElement, "user", canvasElement);
// webcam.start();
// Load the Keras model in JSON format
tf.loadLayersModel("model100d.json").then(model => {
    // Create a new instance of the webcam-easy library
    const webcam = new WebcamEasy({
      videoElement: document.getElementById('video'),
      // Don't need to pass in the canvas element
    });
  
    // Start the webcam and wait for it to be ready
    webcam.start().then(() => {
      // Start capturing frames from the webcam
      requestAnimationFrame(function captureFrame() {
        // Get the current frame from the webcam
        const image = webcam.capture();
  
        // Preprocess the input image to conform to the input shape of the Keras model
        const input = tf.browser.fromPixels(image).expandDims();
  
        // Make a prediction on the input image using the Keras model
        // const output = model.predict(input);
        const predictions = model.predict(input);
        const emotion_label = predictions.argMax(1).dataSync()[0];
        console.log(emotion_label);
        // Do something with the output (e.g. display it on the page)
        
  
        // Release the current frame and request the next one
        image.release();
        requestAnimationFrame(captureFrame);
      });
    });
  });
var player;
let searchQuery = 'jingichakka';
let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyDcOpYZxYuxqFJqAuC4vxLV9rQJHwVzudc&q=' + searchQuery;

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

$.ajax({
      url: url,
      method: 'GET',
      success: (result) => {
          const videoId = result.items[0].id.videoId;
      const player = document.getElementById('player');
      player.innerHTML = `<iframe width="560" height="350" src="https://www.youtube-nocookie.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        // populateSuggestions(result.items.slice(1,10));
      },
      error: (err, response) => {
        console.log(err.responseText);
      }
    })

  

function onPlayerReady(event) {
    event.target.playVideo();
}
function onPlayerStateChange(event) {
    // Do something when the video changes state (e.g. finished playing)
}

// function playSong(videoId) {
//     var player = document.getElementById('player');
//     player.src = 'https://www.youtube-nocookie.com/embed/' + videoId;
//   }
  
  