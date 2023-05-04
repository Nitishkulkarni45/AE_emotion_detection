// const webCamElement = document.getElementById("webCam");
// const modell  = require('./model100d.json');
// const canvasElement = document.getElementById("canvas");
// const webcam = new Webcam(webCamElement, "user", canvasElement);
// webcam.start();
// Load the Keras model in JSON format
// async function logJSONData() {
//   const response = await fetch("http://example.com/movies.json");
//   const jsonData = await response.json();
//   console.log(jsonData);
// }
// const model = await tf.loadLayersModel('file://C:/Users/Admin/Desktop/KLE/Web_dev/Emotion Detector/model100d.json');

const modell = {
  "class_name": "Sequential",
  "config": {
      "name": "sequential_1",
      "layers": [
          {
              "class_name": "InputLayer",
              "config": {
                  "batch_input_shape": [
                      null,
                      48,
                      48,
                      1
                  ],
                  "dtype": "float32",
                  "sparse": false,
                  "ragged": false,
                  "name": "conv2d_4_input"
              }
          },
          {
              "class_name": "Conv2D",
              "config": {
                  "name": "conv2d_4",
                  "trainable": true,
                  "dtype": "float32",
                  "batch_input_shape": [
                      null,
                      48,
                      48,
                      1
                  ],
                  "filters": 32,
                  "kernel_size": [
                      3,
                      3
                  ],
                  "strides": [
                      1,
                      1
                  ],
                  "padding": "valid",
                  "data_format": "channels_last",
                  "dilation_rate": [
                      1,
                      1
                  ],
                  "groups": 1,
                  "activation": "relu",
                  "use_bias": true,
                  "kernel_initializer": {
                      "class_name": "GlorotUniform",
                      "config": {
                          "seed": null
                      }
                  },
                  "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                  },
                  "kernel_regularizer": null,
                  "bias_regularizer": null,
                  "activity_regularizer": null,
                  "kernel_constraint": null,
                  "bias_constraint": null
              }
          },
          {
              "class_name": "Conv2D",
              "config": {
                  "name": "conv2d_5",
                  "trainable": true,
                  "dtype": "float32",
                  "filters": 64,
                  "kernel_size": [
                      3,
                      3
                  ],
                  "strides": [
                      1,
                      1
                  ],
                  "padding": "valid",
                  "data_format": "channels_last",
                  "dilation_rate": [
                      1,
                      1
                  ],
                  "groups": 1,
                  "activation": "relu",
                  "use_bias": true,
                  "kernel_initializer": {
                      "class_name": "GlorotUniform",
                      "config": {
                          "seed": null
                      }
                  },
                  "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                  },
                  "kernel_regularizer": null,
                  "bias_regularizer": null,
                  "activity_regularizer": null,
                  "kernel_constraint": null,
                  "bias_constraint": null
              }
          },
          {
              "class_name": "MaxPooling2D",
              "config": {
                  "name": "max_pooling2d_3",
                  "trainable": true,
                  "dtype": "float32",
                  "pool_size": [
                      2,
                      2
                  ],
                  "padding": "valid",
                  "strides": [
                      2,
                      2
                  ],
                  "data_format": "channels_last"
              }
          },
          {
              "class_name": "Dropout",
              "config": {
                  "name": "dropout_4",
                  "trainable": true,
                  "dtype": "float32",
                  "rate": 0.25,
                  "noise_shape": null,
                  "seed": null
              }
          },
          {
              "class_name": "Conv2D",
              "config": {
                  "name": "conv2d_6",
                  "trainable": true,
                  "dtype": "float32",
                  "filters": 128,
                  "kernel_size": [
                      3,
                      3
                  ],
                  "strides": [
                      1,
                      1
                  ],
                  "padding": "valid",
                  "data_format": "channels_last",
                  "dilation_rate": [
                      1,
                      1
                  ],
                  "groups": 1,
                  "activation": "relu",
                  "use_bias": true,
                  "kernel_initializer": {
                      "class_name": "GlorotUniform",
                      "config": {
                          "seed": null
                      }
                  },
                  "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                  },
                  "kernel_regularizer": null,
                  "bias_regularizer": null,
                  "activity_regularizer": null,
                  "kernel_constraint": null,
                  "bias_constraint": null
              }
          },
          {
              "class_name": "MaxPooling2D",
              "config": {
                  "name": "max_pooling2d_4",
                  "trainable": true,
                  "dtype": "float32",
                  "pool_size": [
                      2,
                      2
                  ],
                  "padding": "valid",
                  "strides": [
                      2,
                      2
                  ],
                  "data_format": "channels_last"
              }
          },
          {
              "class_name": "Conv2D",
              "config": {
                  "name": "conv2d_7",
                  "trainable": true,
                  "dtype": "float32",
                  "filters": 256,
                  "kernel_size": [
                      3,
                      3
                  ],
                  "strides": [
                      1,
                      1
                  ],
                  "padding": "valid",
                  "data_format": "channels_last",
                  "dilation_rate": [
                      1,
                      1
                  ],
                  "groups": 1,
                  "activation": "relu",
                  "use_bias": true,
                  "kernel_initializer": {
                      "class_name": "GlorotUniform",
                      "config": {
                          "seed": null
                      }
                  },
                  "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                  },
                  "kernel_regularizer": null,
                  "bias_regularizer": null,
                  "activity_regularizer": null,
                  "kernel_constraint": null,
                  "bias_constraint": null
              }
          },
          {
              "class_name": "MaxPooling2D",
              "config": {
                  "name": "max_pooling2d_5",
                  "trainable": true,
                  "dtype": "float32",
                  "pool_size": [
                      2,
                      2
                  ],
                  "padding": "valid",
                  "strides": [
                      2,
                      2
                  ],
                  "data_format": "channels_last"
              }
          },
          {
              "class_name": "Dropout",
              "config": {
                  "name": "dropout_5",
                  "trainable": true,
                  "dtype": "float32",
                  "rate": 0.25,
                  "noise_shape": null,
                  "seed": null
              }
          },
          {
              "class_name": "Flatten",
              "config": {
                  "name": "flatten_2",
                  "trainable": true,
                  "dtype": "float32",
                  "data_format": "channels_last"
              }
          },
          {
              "class_name": "Dense",
              "config": {
                  "name": "dense_4",
                  "trainable": true,
                  "dtype": "float32",
                  "units": 128,
                  "activation": "relu",
                  "use_bias": true,
                  "kernel_initializer": {
                      "class_name": "GlorotUniform",
                      "config": {
                          "seed": null
                      }
                  },
                  "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                  },
                  "kernel_regularizer": null,
                  "bias_regularizer": null,
                  "activity_regularizer": null,
                  "kernel_constraint": null,
                  "bias_constraint": null
              }
          },
          {
              "class_name": "Dropout",
              "config": {
                  "name": "dropout_6",
                  "trainable": true,
                  "dtype": "float32",
                  "rate": 0.5,
                  "noise_shape": null,
                  "seed": null
              }
          },
          {
              "class_name": "Dense",
              "config": {
                  "name": "dense_5",
                  "trainable": true,
                  "dtype": "float32",
                  "units": 7,
                  "activation": "softmax",
                  "use_bias": true,
                  "kernel_initializer": {
                      "class_name": "GlorotUniform",
                      "config": {
                          "seed": null
                      }
                  },
                  "bias_initializer": {
                      "class_name": "Zeros",
                      "config": {}
                  },
                  "kernel_regularizer": null,
                  "bias_regularizer": null,
                  "activity_regularizer": null,
                  "kernel_constraint": null,
                  "bias_constraint": null
              }
          }
      ]
  },
  "keras_version": "2.12.0",
  "backend": "tensorflow"
}

console.log(modell);
(async function() {
  const response = await modell;
  console.log('model', response)
  const modelData = response;
  const model = await tf.loadGraphModel(modelData);
  const webcam = new WebcamEasy({
    videoElement: document.getElementById('video'),
  });
  // rest of your code
//   var data;
// fetch("model100d.json")
//   .then(response => response.json())
//   .then(json =>data=json );
//   const model = await tf.loadLayersModel(data);

//     // Create a new instance of the webcam-easy library
//     const webcam = new WebcamEasy({
//       videoElement: document.getElementById('video'),
//       // Don't need to pass in the canvas element
//     });
    // Start the webcam and wait for it to be ready
    console.log('Hi')
    webcam.start().then(() => {
      console.log('HELLO')
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
})();


// function playSong(videoId) {
//     var player = document.getElementById('player');
//     player.src = 'https://www.youtube-nocookie.com/embed/' + videoId;
//   }
  
  