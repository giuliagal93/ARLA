function setup() {
  createCanvas(800,600);
  frameRate(1);
}

function draw() {
  background(255);
  
/*  var x1=75;
  var y1=60;
  var x2=140;
  var y2=125;
  var x3=140;
  var y3=60;
  var x4=75;
  var y4=125;*/
  
  var x1=75+50*random();
  var y1=60+50*random();
  var x2=140+50*random();
  var y2=125+50*random();
  var x3=140+50*random();
  var y3=60+50*random();
  var x4=75+50*random();
  var y4=125+50*random();
  
  textSize(24);
  text("A", x1-25, y1-10);
  
  text("R",x3+10,y3-10);
  
  text("L",x4-25,y4+25);
  
  text("A",x2+10,y2+25);
  

  line(x1,y1,x2,y2);
  line(x3,y3,x4,y4);
}

/*function draw() {
  background(255);

  textSize(24);
  text("A",50,50);
  
  text("R",150,50);
  
  text("L",50,150);
  
  text("A",150,150);
  
  
  line(75,60,140,125);
  line(140,60,75,125);
}*/