function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);
    frameRate(10);
    c1 = new Character1(250,250);
    c2 = new Character1(30,30);
    c3 = new Character1(100,50);
    
}


function draw(){
    background(230);
    var angle = -1;
    
    c1.display();
    c2.display();
    c3.display();
    
   if(c1.rotationLeftLeg1 == 90){
        angle = angle * -1;
    }else if(c1.rotationLeftLeg1 == 0){
        angle = angle * -1;
    }else{}
    
  c1.rotationLeftLeg1 = c1.rotationLeftLeg1 + angle;
   
    
    
    //도대체 왜왜왜옹..
//    c1.positionX= c1.positionX - 0.299;
//    c1.positionY = c1.positionY + 0.954;
//    c1.positionX= c1.positionX + sin(radians(this.rotation));
//    c1.positionY = c1.positionY + cos(radians(this.rotation));
//    c1.positionX= c1.positionX + sin(this.rotation);
//    c1.positionY = c1.positionY + cos(this.rotation);
//    var angle;
//    if(c1.rotationLeftLeg1<90){
//        c1.rotationLeftLeg1 = c1.rotationLeftLeg1 + angle;
//    }else if (c1.rotationLeftLeg == 90){
//        angle= angle*-1;
//        c1.rotationLeftLeg1 = c1.rotationLeftLeg1 + angle;
//    }
    
}


class Character1{
    
    // 기본 속성 부여
    constructor(tx,ty){
        this.positionX = tx; //x좌표
        this.positionY = ty; //y좌표
        
        this.bodyWidth = 10; //몸너비
        this.bodyHeight = random(10,20); //몸길이
        this.defaultMargin = this.bodyWidth / 10; //단위여백
        this.eyeR = this.bodyWidth / 6; //눈반지름
        this.legWeight = 2; //다리굵기
        this.leg1Height = this.bodyHeight / 4; //허벅지길이
        this.leg2Height = this.bodyHeight / 4; //정강이길이
        this.footHeight = this.bodyWidth / 10; //발길이
        
        this.rotation = random(0,360); // 전체 회전값
        this.rotationLeftLeg1 = 20; // 왼쪽 허벅다리 회전값
        this.rotationLeftLeg2 = 90; // 왼쪽 정강이 회전값
        this.rotationLeftFoot = 20; // 왼쪽 발 회전값
        this.rotationRightLeg1 = 0; //오른쪽 허벅다리 회전값
        this.rotationRightLeg2 = 0; //오른쪽 정강이 회전값
        this.rotationRightFoot = 0; //오른쪽 발 회전값
        
        this.bodyColor = color('hsl(130,30%,60%)'); //몸색
        this.eyeColor = color('hsl(0,0%,100%)'); //눈색
    }

    display(){
        this.assembly();
    }
    
    
    assembly(){
        push();
        translate(this.positionX,this.positionY);
        rotate(radians(this.rotation));
            //몸소환
            push();
            this.body();
                //눈소환
                this.eyes();
            pop();
        
        
            //허벅다리 소환하여 왼쪽 허벅다리로 사용
            push();
            translate(-this.bodyWidth / 5, this.bodyHeight * 2 / 5);
            rotate(radians(this.rotationLeftLeg1));
            this.leg1();
                //정강이 소환
                translate(0,this.leg1Height);
                rotate(radians(this.rotationLeftLeg2));
                this.leg2();
                //발
                translate(0,this.leg2Height);
                rotate(radians(this.rotationLeftFoot));
                this.foot();
            pop();
        
        
            //허벅다리 소환하여 오른쪽 허벅다리로 사용
            push();
            translate(this.bodyWidth / 5, this.bodyHeight * 2 / 5);
            rotate(radians(this.rotationRightLeg1));
            this.leg1();
                //정강이
                translate(0,this.leg1Height);
                rotate(radians(this.rotationRightLeg2));
                this.leg2();
                //발
                translate(0,this.leg2Height);
                rotate(radians(this.rotationRightFoot));
                this.foot();
            pop();
        
        
        pop();
    }

    body(){
        push();
        fill(this.bodyColor);
        noStroke();
        rectMode(CENTER);
        rect(0,0,this.bodyWidth,this.bodyHeight,this.bodyWidth);
        this.eyes();
        pop();
    }
    
    eyes(){
        push();
        fill(this.eyeColor);
        noStroke();
        ellipse(-this.defaultMargin,-this.defaultMargin * 2,this.eyeR,this.eyeR);
        ellipse(2*this.defaultMargin,-this.defaultMargin * 2,this.eyeR,this.eyeR);
        pop();
    }
    
    leg1(){
        push();
        noFill();
        stroke(this.bodyColor);
        strokeWeight(this.legWeight);
        line(0,0,0,this.leg1Height); 
        pop();
    }
    
    leg2(){
        push();
        noFill();
        stroke(this.bodyColor);
        strokeWeight(this.legWeight);
        line(0,0,0,this.leg2Height);
        pop();
    }

    foot(){
        push();
        noFill();
        stroke(this.bodyColor);
        strokeWeight(this.legWeight);
        line(0,0,this.footHeight,0);
        pop();
    }
}