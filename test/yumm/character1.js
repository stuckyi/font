
class Character1{
    
    // 기본 속성 부여
    constructor(tx,ty){
        this.positionX = tx; //x좌표
        this.positionY = ty; //y좌표
        
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
        
        this.bodyColor = color('hsl(130,30%,40%)'); //몸색
        this.faceColor = color('hsl(0,0%,100%)'); //얼굴색
        this.eyeColor = color('hsl(0,0%,20%)'); //눈색
    }

    display(){
        this.assembly();
    }
    
    move(){
        this.leg1move();
        this.leg2move();
        this.armLeftMove();
        this.armRightMove();
    }
    
    assembly(){
        push();
        translate(this.positionX,this.positionY);
        rotate(radians(this.rotation));
            //몸소환
            push();
            this.body();
                //얼굴소환
                push();
                translate(0,-this.bodyHeight/8);
                this.face();
                pop();
                //눈소환
                this.eyes();
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
        rect(0,0,this.bodyWidth *4/5, this.bodyHeight *1/4,this.bodyWidth*4/10);
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