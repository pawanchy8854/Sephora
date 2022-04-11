var vid = document.getElementById("myVideo");
function enableAutoplay() { 
  vid.autoplay = true;
  vid.load();
}

function disableAutoplay() { 
  vid.autoplay = false;
  vid.load();
} 

function checkAutoplay() { 
  alert(vid.autoplay);
}