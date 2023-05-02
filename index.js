const webCamElement = document.getElementById("webCam");
const canvasElement = document.getElementById("canvas");
const webcam = new Webcam(webCamElement, "user", canvasElement);
webcam.start();


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
  
  