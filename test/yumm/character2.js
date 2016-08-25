

class Character2{
    
    // 기본 속성 부여
    constructor(tx,ty){
        this.positionX = tx; //x좌표
        this.positionY = ty; //y좌표
        
        this.bodyWidth = random(20,25); //몸너비
        this.bodyHeight = random(20,30); //몸길이
        this.defaultMargin = this.bodyWidth / 11; //단위여백
        this.faceDivide = random(3.5,5); //얼굴길이 결정, 나눗셈 분모
        this.headDivide = random(1.5,3); //머리높이 결정, 나눗셈 분모
        this.eyeR = 2; //눈반지름
        this.legWeight = 4; //다리굵기
        this.leg1Height = this.bodyHeight/random(2,4);
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
        
        this.movingBodyDirection = random(-1,1); //몸 가로 움직임 방향
        this.movingBodyX = 0; //몸 움직임x
        this.movingBodyY = 0; //몸 움직임y
        this.movingBodyAngle = 0; //몸 세로 움직임 각도
        
        
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
        translate(this.movingBodyX,this.movingBodyY);
        this.body();    
            //머리
            push();
            translate(0,-this.bodyHeight/this.headDivide);
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
            rect(0,-this.bodyHeight/2+this.bodyHeight/4.5,this.bodyWidth/3.5,this.bodyHeight/this.faceDivide,this.bodyWidth/10);

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
    move(){
    this.movingBody();
    this.headBanging();
    this.legBanging();
    this.leg1Swing1();
    }
    
    
    
    movingBody(){
//        this.movingBodyX = this.movingBodyX + this.movingBodyDirection; //좌우움직임: 현재는 -1과 1사이의 랜덤값으로 되어있음
        this.movingBodyY = this.movingBodyY + sin(radians(this.movingBodyAngle))*random(1,2);
        this.movingBodyAngle = this.movingBodyAngle + random(10,40);
    }
    
    
    
    headBanging(){
        this.rotationHeadX = sin(radians(this.rotationHeadAngle))/2;
    this.rotationHeadY = cos(radians(this.rotationHeadAngle));
    this.rotationHeadAngle = this.rotationHeadAngle + 10;
    }
    
    legBanging(){
        this.rotationLeg1X = sin(radians(this.rotationLeg1Angle))/2;
        this.rotationLeg1Y = cos(radians(this.rotationLeg1Angle));
        this.rotationLeg1Angle = this.rotationLeg1Angle - random(10,30);
    }

    
    leg1Swing1(){
//        console.log(this.swingLeg1Angle);
        if(this.swingLeg1Angle <= -random(15,20)){
            
            this.swingLegAdd = this.swingLegAdd * -1;
        }else if(this.swingLeg1Angle >= random(15,20)){
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
        line(0,0,0,this.leg1Height);
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