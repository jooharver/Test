document.addEventListener('DOMContentLoaded', function() {
    var currentVideo = document.getElementById('portfolio-video');
  
    if (currentVideo) {
      currentVideo.play().catch(function() {
        currentVideo.muted = true;
        currentVideo.play();
      });
    }
  
    function muteAllVideos() {
      var allVideos = document.querySelectorAll('video');
      allVideos.forEach(function(video) {
        video.muted = true;
        video.pause();
      });
    }
  
    muteAllVideos();
  });