

class 딴짓1 {
    
    // 기본 속성 부여
    constructor(중심점, 이동점){
        this.positionX = 중심점.x; //x좌표
        this.positionY = 중심점.y; //y좌표
        this.translatePos = 이동점;
        
        
        this.bodyWidth = 15; //몸너비
        this.bodyHeight = random(15,25); //몸길이
        this.defaultMargin = this.bodyWidth / 10; //단위여백
        this.eyeR = 2; //눈반지름
        this.legWeight = 3; //다리굵기
        this.leg1Height = this.bodyHeight / 4; //허벅지길이
        this.leg2Height = this.bodyHeight / 4; //정강이길이
        this.footHeight = this.bodyWidth / 10; //발길이
        
        this.rotation = random(250,340); // 전체 회전값
        this.rotationLeftLeg1 = 0; // 왼쪽 허벅다리 회전값
        this.rotationLeftLeg2 = 0; // 왼쪽 정강이 회전값
        this.rotationLeftFoot = 0; // 왼쪽 발 회전값
        this.rotationRightLeg1 = 0; //오른쪽 허벅다리 회전값
        this.rotationRightLeg2 = 0; //오른쪽 정강이 회전값
        this.rotationRightFoot = 0; //오른쪽 발 회전값
        this.rotationArmLeft = 0; //왼팔 회전값
        this.rotationArmRight = 0; //오른팔 회전값
        
        this.angle1 = -1;
        this.angle2 = 2;
        this.angle3 = -1.5;
        this.angle4 = 1.5;
        this.angle5 = 0; 
        this.angle5add = 3;
        this.distance5 = 1; //머리방향으로 이동거리
        
        this.bodyColor = color('hsl(130,30%,40%)'); //몸색
        this.faceColor = color('hsl(0,0%,100%)'); //얼굴색
        this.eyeColor = color('hsl(0,0%,20%)'); //눈색
    }

    getTranslatePos() {
        return this.translatePos;
    }
    
    display() {
        push();
        translate(this.translatePos.x, this.translatePos.y);
        fill(0, 10);
        this.assembly();
        pop();
    }
    
    move(){
        this.gotoUpper();
        this.leg1move();
        this.leg2move();
        this.armLeftMove();
        this.armRightMove();
    }
    
    //형태
    
    assembly(){
        push();
        translate(this.positionX,this.positionY);
        rotate(radians(this.rotation));
            //몸소환
            push();
            this.body();
                //얼굴소환
                push();
                translate(this.bodyWidth/20,-this.bodyHeight/8);
                this.face();
                pop();
                //눈소환
                push();
                translate(this.bodyWidth/15,0);
                this.eyes();
                pop();
            pop();
            
            //왼팔
            push();
            translate(-this.bodyWidth/2,-this.bodyHeight/8);
            rotate(radians(this.rotationArmLeft));
            this.armLeft();
            pop();
        
            //오른팔
            push();
            translate(this.bodyWidth/2,-this.bodyHeight/8);
            rotate(radians(this.rotationArmRight));
            this.armRight();
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
    
    face(){
        push();
        rectMode(CENTER);
        noStroke();
        fill(this.faceColor);
        rect(0,0,this.bodyWidth *3/5, this.bodyHeight *1/3,this.bodyWidth*4/10);
        pop();
    }
    
    eyes(){
        push();
        fill(this.eyeColor);
        noStroke();
        ellipse(-this.defaultMargin,-this.defaultMargin * 2,this.eyeR,this.eyeR);
        ellipse(this.defaultMargin,-this.defaultMargin * 2,this.eyeR,this.eyeR);
        pop();
    }
    
    armLeft(){
        push();
        noFill();
        stroke(this.bodyColor);
        strokeWeight(2.5);
        line(0,0,-this.bodyHeight/6,-this.bodyHeight/10);
        line(-this.bodyHeight/6,-this.bodyHeight/10,-this.bodyHeight/3,0);
        pop();
    }
    
    armRight(){
        push();
        noFill();
        stroke(this.bodyColor);
        strokeWeight(2.5);
        line(0,0,this.bodyHeight/6,-this.bodyHeight/10);
        line(this.bodyHeight/6,-this.bodyHeight/10,this.bodyHeight/3,0);
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
    
    
    //움직임
    
    gotoUpper(){
        
        this.angle5 = this.angle5 + this.angle5add;
        
        this.positionX = this.positionX - this.distance5 * sin(radians(360-this.rotation))*cos(radians(this.angle5));
        
        this.positionY = this.positionY - this.distance5 * cos(radians(360-this.rotation))*cos(radians(this.angle5));
        
        if(this.angle5 == 90){
            this.angle5add = this.angle5add * -1;
        }else if(this.angle5 < 0){
            this.angle5add = this.angle5add * -1;
        }
        
//        console.log(this.angle5);
//        console.log(this.positionX,this.positionY);
    }
    
    leg1move(){
        this.rotationLeftLeg1 = this.rotationLeftLeg1 + this.angle1;
        this.rotationRightLeg1 = this.rotationRightLeg1 + this.angle1;
        if(this.rotationLeftLeg1 == -30){
            this.angle1 = this.angle1 * -1;
        }
        else if(this.rotationLeftLeg1 >= 0){
            this.angle1 = this.angle1 * -1;
        }
    }
    
    leg2move(){
        this.rotationLeftLeg2 = this.rotationLeftLeg2 + this.angle2;
        this.rotationRightLeg2 = this.rotationRightLeg2 + this.angle2;
        if(this.rotationLeftLeg2 == 60){
            this.angle2 = this.angle2 * -1;
        } else if(this.rotationLeftLeg2 <0){
            this.angle2 = this.angle2 * -1;
        }
       
    }
          
    armLeftMove(){
        this.rotationArmLeft = this.rotationArmLeft + this.angle3;
        if(this.rotationArmLeft == -45){
            this.angle3 = this.angle3 * -1;
        }else if(this.rotationArmLeft >0) {
            this.angle3 = this.angle3 * -1;
        }
    }
    
    armRightMove(){
        this.rotationArmRight = this.rotationArmRight + this.angle4;
        if(this.rotationArmRight == 45){
            this.angle4 = this.angle4 * -1;
        }else if(this.rotationArmRight <0){
            this.angle4 = this.angle4 * -1;
        }
        
    }
     
    
}