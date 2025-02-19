let dollarSigns = [];
let bitcoinClicked = false;
let trump1;
let bitcoin;
let bitcoinPos;

function preload() {
  trump1 = loadImage("trump-transparent.png");
  bitcoin = loadImage("bitcoin.png");
}

function setup() {
  createCanvas(600, 600);
  
 
  bitcoinPos = {
    x: width / 4,   
    y: height / 1.80   
  };

  // Initialize dollar signs with angles for radial movement
  for (let i = 0; i < 10; i++) {
    dollarSigns.push({
      x: bitcoinPos.x,
      y: bitcoinPos.y,
      angle: random(TWO_PI),
      speed: random(2, 5),
      distance: 0
    });
  }
}

function draw() {
  background(255);
  fill(63, 72, 204);
  noStroke();
  rect(width / 4, 0, width * 3/4, height);

  // Draw decorative star (static)
  drawStar(75, 100, 50, 5);

  // If bitcoin was clicked, make dollars expel outward
  if (bitcoinClicked) {
    for (let dollar of dollarSigns) {
      dollar.distance += dollar.speed;
      dollar.x = bitcoinPos.x + cos(dollar.angle) * dollar.distance;
      dollar.y = bitcoinPos.y + sin(dollar.angle) * dollar.distance;

      fill('#e63c37');
      textSize(15);
      text('$', dollar.x, dollar.y);

      if (dollar.distance > 300) {
        dollar.distance = 0;
        dollar.x = bitcoinPos.x;
        dollar.y = bitcoinPos.y;
      }
    }
  }

  // Draw Trump image with aspect ratio
  let maxWidth = 500;
  let aspectRatio = trump1.width / trump1.height;
  let newWidth = maxWidth;
  let newHeight = newWidth / aspectRatio;
  image(trump1, 190, 350, newWidth, newHeight);

  // Draw Bitcoin image with aspect ratio
  let maxBWidth = 500;  // Set a max width for the bitcoin image
  let aspectBRatio = bitcoin.width / bitcoin.height;
  let newBWidth = maxBWidth;
  let newBHeight = newBWidth / aspectBRatio;

  image(bitcoin, bitcoinPos.x - newBWidth / 2, bitcoinPos.y - newBHeight / 2, newBWidth, newBHeight);
}

function mousePressed() {
  // Use the actual Bitcoin image dimensions for click detection
  let maxBWidth = 150;
  let aspectBRatio = bitcoin.width / bitcoin.height;
  let newBWidth = maxBWidth;
  let newBHeight = newBWidth / aspectBRatio;

  let d = dist(mouseX, mouseY, bitcoinPos.x, bitcoinPos.y);
  if (d < newBWidth / 2) {
    bitcoinClicked = true;
  }
}

function drawStar(x, y, radius, points) {
  fill('#e63c37');
  noStroke();

  beginShape();
  for (let i = 0; i < points * 2; i++) {
    let r = (i % 2 === 0) ? radius : radius / 2.5;
    let angle = (TWO_PI * i) / (points * 2) - PI / 2;
    let sx = x + cos(angle) * r;
    let sy = y + sin(angle) * r;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
