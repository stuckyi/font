function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);
    frameRate(10);
    
//    var rotationHeadXangle = 0;
    c1 = new Character2(150,150);
   
    
}


function draw(){
    background(230);
    
    
    c1.display();
    c1.headBanging();
    c1.legBanging();
    c1.leg1Swing1();
}


class Character2{
    
    // 기본 속성 부여
    constructor(tx,ty){
        this.positionX = tx; //x좌표
        this.positionY = ty; //y좌표
        
        this.bodyWidth = 20; //몸너비
        this.bodyHeight = 30; //몸길이
        this.defaultMargin = this.bodyWidth / 11; //단위여백
        this.eyeR = this.bodyWidth / 10; //눈반지름
        this.legWeight = 5; //다리굵기
//        this.leg1Height = this.bodyHeight / 4; //허벅지길이
//        this.leg2Height = this.bodyHeight / 4; //정강이길이
//        this.footHeight = this.bodyWidth / 10; //발길이
//        
        this.rotation = random(0,360); // 전체 회전값
        this.rotationHeadX = 0; //머리 원운동x
        this.rotationHeadY = 0; //머리 원운동y
        this.rotationHeadAngle = 0; //머리 원운동각
        
        this.rotationLeg1X = 0; //허벅지 원운동x
        this.rotationLeg1Y = 0; //허벅지 원운동y
        this.rotationLeg1Angle = 0; //허벅지 원운동각
        
        this.swingLeg1Angle = 0; //허벅지 흔들리는 각도
        this.swingLegAdd = -1; //허벅지 각도에 더해주는 수
//        this.rotationLeftLeg1 = 20; // 왼쪽 허벅다리 회전값
//        this.rotationLeftLeg2 = 90; // 왼쪽 정강이 회전값
//        this.rotationLeftFoot = 20; // 왼쪽 발 회전값
//        this.rotationRightLeg1 = 0; //오른쪽 허벅다리 회전값
//        this.rotationRightLeg2 = 0; //오른쪽 정강이 회전값
//        this.rotationRightFoot = 0; //오른쪽 발 회전값
//        
        this.bodyColor = color('hsl(200,30%,60%)'); //몸색
        this.headColor = color('hsl(200,30%,60%)'); //몸색
        this.faceColor = color('hsl(0,0%,100%)'); //얼굴색
        this.eyeColor = color('hsl(0,0%,20%)'); //눈색
        this.legColor = color('hsl(200,30%,60%)'); //다리색
    }

    display(){
        this.assembly();
    }
    
    //형태
    
    assembly(){
        push();
        translate(this.positionX,this.positionY);
        this.body();    
            //머리
            push();
            translate(0,-this.bodyHeight/1.8);
            translate(this.rotationHeadX,this.rotationHeadY);
            this.head();
            pop();
            //왼다리
            push();
            translate(-this.bodyWidth/4,this.bodyHeight/3);
            translate(-this.rotationLeg1X,this.rotationLeg1Y);
            rotate(radians(this.swingLeg1Angle)/2);
            this.leg1();
            pop();
            //오른다리
            push();
            translate(this.bodyWidth/4,this.bodyHeight/3);
            translate(this.rotationLeg1X,this.rotationLeg1Y);
            rotate(radians(this.swingLeg1Angle));
            this.leg1();
            pop();
        
        pop();
    }

    body(){
        push();
        fill(this.bodyColor);
        noStroke();
        rectMode(CENTER);
        rect(0,0,this.bodyWidth,this.bodyHeight,this.bodyWidth / 3);
        pop();
    }
    
    
    head(){
        push();
            //머리
            fill(this.headColor);
            noStroke();
            rectMode(CENTER);
            rect(0,0,this.bodyWidth/2,this.bodyHeight,this.bodyWidth/4);

            //얼굴
            fill(this.faceColor);
            rect(0,-this.bodyHeight/2+this.bodyHeight/5,this.bodyWidth/3.5,this.bodyHeight/5,this.bodyWidth/10);

            //눈
            push();
            translate(0,-this.bodyHeight/2+this.bodyHeight/5);
            fill(this.eyeColor);
            noStroke();
            ellipse(-this.defaultMargin,0,this.eyeR,this.eyeR);
            ellipse(this.defaultMargin,0,this.eyeR,this.eyeR);
            pop();
        pop();
    }
    
    
    //움직임
    
    headBanging(){
        this.rotationHeadX = sin(radians(this.rotationHeadAngle))/2;
    this.rotationHeadY = cos(radians(this.rotationHeadAngle));
    this.rotationHeadAngle = this.rotationHeadAngle + 10;
    }
    
    legBanging(){
        this.rotationLeg1X = sin(radians(this.rotationLeg1Angle))/2;
        this.rotationLeg1Y = cos(radians(this.rotationLeg1Angle));
        this.rotationLeg1Angle = this.rotationLeg1Angle -20;
    }

    
    leg1Swing1(){
//        console.log(this.swingLeg1Angle);
        if(this.swingLeg1Angle <= -15){
            
            this.swingLegAdd = this.swingLegAdd * -1;
        }else if(this.swingLeg1Angle >= 15){
            this.swingLegAdd = this.swingLegAdd * -1;
        }
            
        this.swingLeg1Angle = this.swingLeg1Angle + this.swingLegAdd;
//        console.log(this.swingLeg1Angle);
    }
    
    
    
    
    leg1(){
        push();
        stroke(this.legColor);
        strokeWeight(this.legWeight);
        noFill();
        line(0,0,0,this.bodyHeight/3);
        pop();
    }
    
    leg2(){
        push();
        
        pop();
    }

    foot(){
        push();
        
        pop();
    }
}