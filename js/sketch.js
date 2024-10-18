var myCanvas = createCanvas(winWidth, winHeight);
    myCanvas.parent("canvas");

//loops runs once
function setup() {
  createCanvas(windowWidth, windowHeight);
  //loads image once
  image(img, 0, 0);
}

//loops continously
function draw() {
  //background(220);
  stroke(255,0, 255);
  fill(100, 5);
  ellipse(mouseX, mouseY, 100, 100);
}

function mouseClicked(){
  image(img, 0, 0);
}

