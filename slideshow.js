var images = ["images/bootstrap.png", "images/github-logo.jpg", "images/logo_JavaScript.png"];

var count = 0;
var slideShow;

$("#start").click(start)
$("#stop").click(stop)


function displayImage(){
  $("#image-holder").html("<img src=" + images[count] + " width = '400px'>")
}

function nextImage(){
  count++;
  $("#image-holder").html("<img src= 'images/loading.gif' width='200px'/>")

  setTimeout(displayImage,1000)
  if(count === images.length){
    count = 0;
  }
}

function start(){
  slideShow = setInterval(nextImage,2000)
}

function stop(){
  clearInterval(slideShow)
}

displayImage()