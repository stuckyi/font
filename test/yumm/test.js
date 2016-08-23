
var m;
function setup(){
  createCanvas(500, 500);
  fill(255, 100, 100); 
  noStroke();
  
  m = new Mover(250, 250);
  m.display();
  
  
}

function draw(){
  background(255);
  var mx = map(mouseX, 0, width, 0, 360);

  m.update(mx);
  m.display();
  m.viewInfo(); //현재 정보 텍스트 출력
}

class Mover{
  constructor(startX, startY){
    this.startX = startX;
    this.startY = startY;
    this.theta = 0.01;

  }
  
  display(){
    this.friends();
  }
  //캐릭터 만드는 곳
  
  friends(){
    //캐릭터 통합위치 기억
    push();
    translate(this.startX, this.startY);
    rotate(radians(this.theta));
    
    //body

    this.body();
    this.leg(0, 30);
    this.eyes(10, 0);
    pop();
    // ellipse(this.startX, this.startY, 60, 80);
    
  }
  
  body(){
    ellipse(0, 0, 60, 80); 
  }
  leg(tx, ty){
    // print("leg");
    push();
    translate(tx, ty);
    stroke(255, 100, 100);
    strokeWeight(3);
    line(4, 0, 4, 30);
    line(-4, 0, -4, 30);
    noStroke();
    pop();
  }
  eyes(tx, ty){
    push();
    translate(tx, ty);
    
    //eyes
    fill(255);
    ellipse(10, 10, 10, 10);
    ellipse(-10, 10, 10, 10);
    fill(255, 100, 100); 
    
    fill(0);
    ellipse(10, 10, 4, 4);
    ellipse(-10, 10, 4, 4);
    fill(255, 100, 100); 
    
    pop();
  }
  
  update(mx){
    this.theta = mx;
  }
  
  viewInfo(){
    textSize(30);
    text(this.theta + "", this.startX+30, this.startY+30);
  }
}


