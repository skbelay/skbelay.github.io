let sheetID = "1OKvanf9EHsOrfm8wZqXfHCGIzB3ihifhTlsD--8NQ30";
let tabName = "Sheet1";
let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`;
let coffeeBlends = []; 
let blendImages = {};
let flavorImages = {};
let blueBottleLogo;

function preload() {
  abcMono = loadFont('ABCMonumentGroteskMono-Regular-Trial.otf');
  blendImages["Signature Blend"] = loadImage("signature.png");
  blendImages["Craft Instant"] = loadImage("lightning.png");
  blendImages["Decaf"] = loadImage("decaf.png");
  blendImages["Single Origin"] = loadImage("origin2.png");
  
  flavorImages["Fresh"] = loadImage("fresh-2.png");
  flavorImages["Fruity"] = loadImage("fruity-2.png");
  flavorImages["Gourmand"] = loadImage("gourmand.png");
  
blueBottleLogo = loadImage("logo.png"); 
  
}
  
function setup() {
  createCanvas(1200, 1800); 
  
  fetch(opensheet_uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        coffeeBlends = data; 
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
}
function draw() {
  background(255);
  
  if (coffeeBlends.length > 0) {
    // Define grid layout
    let cardWidth = 250;
    let cardHeight = 410; 
    let cols = 4; 
    let rows = Math.ceil(coffeeBlends.length / cols);
    let xSpacing = 20; 
    let ySpacing = 20; 
    
    // Draw each coffee blend card
    for (let i = 0; i < coffeeBlends.length; i++) {
      let col = i % cols;
      let row = Math.floor(i / cols);
      let x = col * (cardWidth + xSpacing);
      let y = row * (cardHeight + ySpacing);
      
      drawCoffeeCard(coffeeBlends[i], x, y);
    }
  }
}
function drawCoffeeCard(blend, x, y) {
  push(); // Save current drawing state
  translate(x, y); // Move to card position
  
  // Draw card background
  colorMode(HSL);  
  let roastValue = 100 - (blend.Roast) * 20;
  let roastColor = color(0, 0, roastValue);  
  noStroke();
  fill(roastColor);
  rect(0, 0, 250, 410); 
  
  let isDarkBackground = blend.Roast >= 3;
  
  
  // Half circle
  colorMode(RGB);
  let color1 = color('#A16628'); 
  let color2 = color('#C189A3'); 
  let floralness = (blend.Fruitiness - 1) / 4;
  let circleColor = lerpColor(color1, color2, floralness);
  
  fill(circleColor); 
  arc(15, 285, 210, 210, -HALF_PI, HALF_PI, PIE);
  
  // Draw blend type image
  if (blend.Type) {
    let img = blendImages[blend.Type];
    if (img) {
      imageMode(CENTER);
      image(img, 140, 90, 290, 290);
    }
  }
  
  // Draw flavor image
  if (blend.Flavor) {
    let img = flavorImages[blend.Flavor];
    if (img) {
      imageMode(CENTER);
      image(img, 210, 250, 200, 200);
    }
  }
  
  // Draw text elements
  textFont(abcMono);
  textAlign(CENTER, CENTER);
  
  if (blueBottleLogo) {
    imageMode(CENTER);
    image(blueBottleLogo, 38, 257, 110, 110); 
  }
  
  // Blue Bottle text
  textSize(15);
  fill(255); 
  text("BLUE", 70, 255); 
  text("BOTTLE", 79, 270); 
  
  // Product details
  textAlign(LEFT);
  textSize(8);
  fill(37, 38, 37); 
  text("WHOLE BEAN", 32, 335); 
  text("6 OZ", 32, 346); 
  
  // Location info
  textAlign(LEFT);
  if (isDarkBackground) {
    fill(255); 
  } else {
    fill(37, 38, 37); 
  } 
  text("EST. 2002", 185, 375); 
  text("OAKLAND CA", 185, 385); 
  
  // Blend name
  textAlign(LEFT);
  if (blend.Name) {
  let splitName = blend.Name.split(" ");
  console.log(splitName);
    textSize(10);
    fill(37, 38, 37);
    for (let i = 0; i < splitName.length; i++) {
    text(splitName[i].toUpperCase(), 32, 290 + i*11);
    }
    
  }
  
  pop(); 
}