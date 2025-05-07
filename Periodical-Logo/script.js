let interp;
let waterLevel;
let xTranslate;
let yTranslate;

function preload(){
  abcMono = loadFont('Fonts/ABCGaisyrMono-Regular-Trial.otf');
  abcRegular = loadFont('Fonts/ABCGaisyr-Regular-Trial.otf');
}

function setup() {
  createCanvas(457, 450);
  loadJSON('https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?station=8518750&date=latest&product=water_level&datum=MLLW&time_zone=GMT&units=english&format=json&application=yourAppName', gotData);
}

function gotData(data) {
  waterLevel = (data.data[0].v)
  interp = constrain(map(waterLevel, 0.5, 5, -20, 20), -20, 20);

  // testing info
  // interp = -20
  console.log(interp);
  xTranslate = map(interp, -20, 20, -6, 16);
  yTranslate = map(interp, -20, 20, 0, -4);
}

function draw() {
  background(250);
  
  fill(0);
  rect(60, 190, 400, 120);
  
  fill(255); 
  textFont(abcRegular)
  textSize(95);
  textAlign(CENTER, CENTER);
  
  text("An", 145, 250);
  text("ther", 370, 250)

  
  push();
  translate(235, 221);
  textFont(abcMono)
  textSize(155)
  text("O", 250, 221);
  rotate(radians(interp));
  translate(xTranslate, yTranslate);
  text("O", 0, 0);
  pop();

}



