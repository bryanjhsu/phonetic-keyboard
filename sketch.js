
var pauses =
[1.5, 2.8, 4.1, 5.44, 6.7, 8, 9.5, 10.8, 
12.3, 13.8, 15.2, 16.7, 18.2, 19.5, 21.1,
22.51, 24.1, 25.65, 27.35, 28.6, 29.86, 31.4,
32.77, 34.28, 35.73, 37.32]; 

function preload() {
  fullVid = createVideo("vid.mp4");
  fullVid.size(720, 480);

  fullVid.showControls();
  fullVid.style("margin", "-100px auto auto auto")
  fullVid.style("display", "block")
  fullVid.play();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function keyPressed() {
  if(keyCode >= 65)
  {
    var key = keyCode - 65;
    if(pauses[key] != null)
    {
      console.log(pauses[key]); 
      fullVid.time(pauses[key]);
      return true;
    }
  }
  return false;
}