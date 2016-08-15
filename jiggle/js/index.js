//yukong.js
//title, memo변수는 사진 저장시 활용하기위함
var title = 'runner.js';
var memo = '몸통너비, 색상랜덤값 ㅇㅋ';


let bodyWidth = 40;
let bodyHeight = 40; //40~100;

let canvasWidth = 1500;
let canvasHeight = 1000;
let facePos = bodyHeight / canvasHeight * bodyHeight * bodyHeight / 600;
let leftLeg1Angle = 0;
let rightLeg1Angle = 20;
let leftLeg2Angle = 0;
let rightLeg2Angle = 0;
let leftFeetAngle = 0;
let rightFeetAngle = 0;

//스타일조절부분
let chaStroke = 2;
var colorArray = ["hs,l(116, 89%, 50%)", "hsl(304, 100%, 85%)", "hsl(204, 62%, 76%)", "hsl(252, 100%, 92%)",
"hsl(149, 100%, 39%)","hsl(46, 100%, 54%)","hsl(13, 100%, 84%)","hsl(278, 19%, 74%)","hsl(51, 62%, 85%)","hsl(67, 63%, 49%)","hsl(161, 49%, 58%)"];
var bwArray = [40, 50, 60, 70, 80, 90, 100]; //바디너비 배열

var letterArray = [
  //모 - 41개 객체
  //ㅁ
    {
        x: 150,
        y: 80
    },
    {
        x: 195,
        y: 80
    },
    {
        x: 265,
        y: 80
    },
    {
        x: 315,
        y: 80
    },
    {
        x: 220,
        y: 85
    },

    {
        x: 100,
        y: 100
    },
    {
        x: 300,
        y: 120
    },
    {
        x: 120,
        y: 150
    },
    {
        x: 310,
        y: 150
    },
    {
        x: 90,
        y: 180
    },

    {
        x: 290,
        y: 180
    },
    {
        x: 330,
        y: 210
    },
    {
        x: 90,
        y: 220
    },
    {
        x: 290,
        y: 220
    },
    {
        x: 130,
        y: 230
    },

    {
        x: 310,
        y: 240
    },
    {
        x: 130,
        y: 260
    },
    {
        x: 265,
        y: 275
    },
    {
        x: 100,
        y: 280
    },
    {
        x: 315,
        y: 280
    },

    {
        x: 130,
        y: 285
    },
    {
        x: 180,
        y: 285
    },
    {
        x: 220,
        y: 285
    },
    {
        x: 200,
        y: 355
    },
    {
        x: 240,
        y: 365
    },

    {
        x: 220,
        y: 385
    },
    {
        x: 230,
        y: 405
    },
    {
        x: 220,
        y: 425
    },
    {
        x: 240,
        y: 445
    },
    {
        x: 130,
        y: 460
    },

    {
        x: 340,
        y: 460
    },
    {
        x: 180,
        y: 470
    },
    {
        x: 70,
        y: 480
    },
    {
        x: 230,
        y: 482
    },
    {
        x: 280,
        y: 475
    },

    {
        x: 375,
        y: 480
    },
    {
        x: 140,
        y: 490
    },
    {
        x: 185,
        y: 495
    },
    {
        x: 310,
        y: 495
    },
    {
        x: 90,
        y: 500
    },

    {
        x: 220,
        y: 505
    },


  //여 - 41개 객체
  //ㅇ
    {
        x: 887,
        y: 60
    },
    {
        x: 600,
        y: 80
    },
    {
        x: 850,
        y: 80
    },
    {
        x: 880,
        y: 95
    },
    {
        x: 660,
        y: 100
    },

    {
        x: 570,
        y: 100
    },
    {
        x: 680,
        y: 110
    },
    {
        x: 530,
        y: 120
    },
    {
        x: 808,
        y: 135
    },
    {
        x: 848,
        y: 135
    },

    {
        x: 768,
        y: 137
    },
    {
        x: 710,
        y: 140
    },
    {
        x: 888,
        y: 145
    },
    {
        x: 500,
        y: 150
    },
    {
        x: 860,
        y: 166
    },

    {
        x: 530,
        y: 170
    },
    {
        x: 730,
        y: 180
    },
    {
        x: 480,
        y: 200
    },
    {
        x: 888,
        y: 207
    },
    {
        x: 850,
        y: 215
    },

    {
        x: 685,
        y: 225
    },
    {
        x: 715,
        y: 239
    },
    {
        x: 500,
        y: 240
    },
    {
        x: 545,
        y: 250
    },

    {
        x: 865,
        y: 250
    },
    {
        x: 898,
        y: 257
    },
    {
        x: 860,
        y: 270
    },
    {
        x: 808,
        y: 275
    },
    {
        x: 768,
        y: 277
    },


    {
        x: 525,
        y: 280
    },
    {
        x: 585,
        y: 290
    },
    {
        x: 635,
        y: 295
    },
    {
        x: 675,
        y: 265
    },
    {
        x: 890,
        y: 300
    },

    {
        x: 858,
        y: 317
    },
    {
        x: 878,
        y: 357
    },
    {
        x: 870,
        y: 390
    },
    {
        x: 895,
        y: 410
    },
    {
        x: 869,
        y: 450
    },

    {
        x: 889,
        y: 470
    }







  //ㅣ






]; // 글자 정보 데이터 배열
var moverArray = []; // Particle 객체 배열


//테스트위한 객체변수
var options = {
    legAngle: 0
};

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background(0, 0, 80);
    colorMode(HSL);

    console.log("생성된 글자배열 요소 수 : " + letterArray.length);
    console.log("컬러배열 수 : " + colorArray.length);
    //객체 초기화 영역
    for (var i = 0; i < letterArray.length; i++) {
        var randomColor = round(random(0, colorArray.length - 1));
        var randomBw = round(random(0, bwArray.length - 1));
        var randomBh = round(random(0, bwArray.length - 1));


        var ran_l1 = round(random(50, -25));
        var ran_l2 = round(random(30, -20));
        var ran_lf = round(random(50, 0));

        var ran_r1 = round(random(10, -100));
        var ran_r2 = round(random(110, 0));
        var ran_rf = round(random(30, -20));



        var m = new Mover(bodyWidth,
            bwArray[randomBh],
            ran_l1,
            ran_l2,
            ran_lf,
            ran_r1,
            ran_r2,
            ran_rf,
            colorArray[randomColor]
        );
        moverArray.push(m);
    }
    
    

}

function draw() {
    background(0, 0, 80);

    for (var i = 0; i < moverArray.length; i++) {
        var m = moverArray[i];
        var l = letterArray[i];
        
        // m.hover(mouseX, mouseY); //마우스오버
        m.drag(); //드래그 인터랙션
        m.update(l.x, l.y); //업데이트
        m.display(); // 객체 표현
    }
}

// Mover 클래스 : 이동, 애니메이션 담당 ==============================
class Mover {
    constructor(bw, bh, l1, l2, lf, r1, r2, rf, colorName) {
        this.centerPos = createVector(0, 0);
        this.location = createVector(random(0, width), random(height, height + 100));
        this.velocity = createVector(random(-0.0005, 0.0005));
        this.acceleration = createVector(0.0, 0.0);
        this.maxSpeed = 6;
        this.mass = bodyWidth / 2;
        this.isArrived = false;
        this.color = colorName;
        this.w = bw;
        this.h = bh;
        this.facePos = bh / canvasHeight * bh * bh / 600;
        //각도 변수
        this.leftLeg1Angle = l1;
        this.leftLeg2Angle = l2;
        this.leftFeetAngle = lf;

        this.rightLeg1Angle = r1;
        this.rightLeg2Angle = r2;
        this.rightFeetAngle = rf;

        this.angleDiversity = 0.3;

        this.rollover = false;
        this.dragging = false;
        this.dragOffset = createVector(0.0, 0.0);

    }

    update(targetX, targetY) {

        var target = createVector(targetX, targetY); // 이동하고자하는 위치
        var dir = p5.Vector.sub(target, this.location); //방향 = 타겟위치 - 현재 위치
        dir.normalize();
        dir.mult(1);
        this.acceleration = dir;
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.location.add(this.velocity);
        this.acceleration.mult(0);

        this.centerPos.x = targetX;
        this.centerPos.y = targetY;

        if (this.isArrived) {
            //각도 업데이트
            var a = this.angleDiversity;
            var toAngle = 80;

            //부드럽게 다리각도 변경하는 방법
            //다리각도 = ( 변경하고자하는 각도 - 현재 각도 ) * 0.05;
            this.leftLeg2Angle += ((-toAngle) - this.leftLeg2Angle) * 0.05;
            this.rightLeg2Angle += (toAngle - this.rightLeg2Angle) * 0.05;

            this.leftFeetAngle = options.legAngle;
            this.rightFeetAngle = options.legAngle;
        }

    }

    display() {
        var c = color(this.color);
        
      
        //드래그 중 인 객체 색상 변경
        if (this.dragging) {
          fill(255, 0, 0);
        } else {
          fill(c);
        }
      
        var x = this.location.x;
        var y = this.location.y;
        var w = this.w;
        var h = this.h;
      

        //leg1-left
        push();
        translate(x - w / 5, y + h / 3);
        rotate(radians(this.leftLeg1Angle));
        leg1(w, h);

        //leg2-left
        translate(0, h / 4 - 3);
        rotate(radians(this.leftLeg2Angle));
        leg2(w, h);

        //foot -left
        translate(2, h / 6 - 2);
        rotate(radians(this.leftFeetAngle));
        feet(w, h);
        pop();

        //leg1-left
        push();
        translate(x - w / 5, y + h / 3);
        rotate(radians(this.leftLeg1Angle));
        leg1(w, h);
        pop();

        //leg1-right
        push();
        translate(x + w / 5, y + h / 3);
        rotate(radians(this.rightLeg1Angle));
        leg1(w, h);

        //leg2-right
        translate(0, h / 4 - 3);
        rotate(radians(this.rightLeg2Angle));
        leg2(w, h);

        //foot-right
        translate(0, h / 6);
        rotate(radians(this.rightFeetAngle));
        feet(w, h);
        pop();

        //leg1-right
        push();
        translate(x + w / 5, y + h / 3);
        rotate(radians(this.rightLeg1Angle));
        leg1(w, h);
        pop();

        // body
        push();
        stroke(270, 60, 50);
        strokeWeight(chaStroke);
        rectMode(CENTER);
        rect(x, y, w, h, w / 2);
        pop();
        //face

        //face
        push();
        translate(x, y - this.facePos - h / 8);
        face(w, h);
        pop();



    }

    //마우스오버
    hover(mx, my) {
        var d = dist(mx, my, this.location.x, this.location.y);
        if (d < this.mass) {
            this.rollover = true;
        } else {
            this.rollover = false;
        }
    }
  
   //클릭
    clicked(mx, my){
        var d = dist(mx, my, this.location.x, this.location.y);
        if( d < this.mass){
            this.dragging = true;
            this.dragOffset.x = this.location.x-mx;
            this.dragOffset.y = this.location.y-mx;
        }
    }
    
    
    //드래그
    drag(){
      if (this.dragging) {
          //default
            // this.location.x = mouseX + this.dragOffset.x;
            // this.location.y = mouseY + this.dragOffset.y;
        this.location.x = mouseX + random(-2, 2);
        this.location.y = mouseY + random(-2, 2);
        }
    }
  
    stopDragging(){
        this.dragging = false;
    }
  
}

function face(tw, th) {

    // rect(0,0,20,20);
    //eye-left
    push();
    translate(-tw / 30, tw / 40);
    eye(tw, th);
    pop();
    //eye-right
    push();
    translate(tw / 3.5, 0);
    eye(tw, th);
    pop();
    //mouth
    push();
    translate(tw / 3.5 - 6, 9);
    mouth(tw, th);
    pop();
}

function eye(tw, th) {
    //eye-white
    push();
    fill(330, 0, 100);
    stroke(270, 60, 50);
    strokeWeight(chaStroke);
    ellipse(0, 0, tw / 4, tw / 4);
    pop();
    //eye-pupil
    push();
    fill(270, 60, 50);
    noStroke();
    ellipse(-1, 0, tw / 6.5, tw / 6.5);
    pop();
}

function mouth(tw, th) {
    push();
    noFill();
    stroke(270, 60, 50);
    strokeWeight(chaStroke);
    arc(0, 0, tw / 2 - th / 30, th / 7, 0, 19 * PI / 20);
    pop();
}
//다리 허벅지
function leg1(tw, th) {
    push();
    fill(330, 60, 85);
    stroke(270, 60, 50);
    strokeWeight(chaStroke);
    rect(-tw / 10, 0, tw / 5, th / 4, th / 12);
    pop();
}

//다리 정강이
function leg2(tw, th) {
    push();
    fill(0, 0, 100);
    stroke(270, 60, 50);
    strokeWeight(chaStroke);
    rect(-tw / 20, 0, tw / 10, th / 6, tw / 12);
    pop();
}

function feet(tw, th) {
    push();
    fill(270, 60, 50);
    stroke(270, 60, 50);
    strokeWeight(chaStroke);
    rect(-tw / 15, 0, tw / 5, tw / 10, tw / 12);
    // // rect(-bodyWidth/20,0,bodyWidth/5,bodyHeight/12,bodyWidth/30);
    // rect(-bodyWidth/10,10,bodyWidth/5,bodyHeight/12,bodyWidth/30);
    pop();
}




//마우스 이벤트를 위한 함수
function mousePressed(){
    for(var i = 0; i< letterArray.length; i++){
        var l = letterArray[i];
        moverArray[i].clicked(mouseX, mouseY);   
    }
}
function mouseReleased(){
    for(var i = 0; i< letterArray.length; i++){
        var l = letterArray[i];
        moverArray[i].stopDragging();
    }
}



//개발 및 체크를 위한 함수====================================

//key입력으로 저장, 변수 변경
function keyTyped() {
    var years = year() + '';
    var saveinfo = years.substring(2, 4) + month() + day() + '_';
    switch (key) {
    case 's':
        console.log("save!");
        save(saveinfo + title + '_' + memo);
        break;
    case 'd':
        options.legAngle += 2;
        console.log("options.legAngle : " + options.legAngle);
        break;
    case 'a':
        options.legAngle -= 2;
        console.log("options.legAngle : " + options.legAngle);
        break;
    default:
        break;
    }
}
