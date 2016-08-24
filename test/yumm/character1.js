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
    c1.display();
    c2.display();
    c3.display();
//    c2.rotation = c2.rotation + 1;

    if(c1.positionX>0){
    c1.positionX = c1.positionX - 1;
    c1.positionY = c1.positionY - 1;}
    else{c1.positionX = 250;
        c1.positionY = 250;}
}


class Character1{
    
    // 기본 속성 부여
    constructor(tx,ty){
        this.positionX = tx; //x좌표
        this.positionY = ty; //y좌표
        
        this.bodyWidth = 10; //몸너비
        this.bodyHeight = 20; //몸길이
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
        
        this.bodyColor = color('hsl(130,30,60)'); //몸색
        this.eyeColor = color('hsl(0,0,100)'); //눈색
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
        fill(20);
        noStroke();
        rectMode(CENTER);
        rect(0,0,this.bodyWidth,this.bodyHeight,this.bodyWidth);
        this.eyes();
        pop();
    }
    
    eyes(){
        push();
        fill(255);
        noStroke();
        ellipse(-this.defaultMargin,-this.defaultMargin * 2,this.eyeR,this.eyeR);
        ellipse(2*this.defaultMargin,-this.defaultMargin * 2,this.eyeR,this.eyeR);
        pop();
    }
    
    leg1(){
        push();
        noFill();
        stroke(80);
        strokeWeight(this.legWeight);
        line(0,0,0,this.leg1Height); 
        pop();
    }
    
    leg2(){
        push();
        noFill();
        stroke(60);
        strokeWeight(this.legWeight);
        line(0,0,0,this.leg2Height);
        pop();
    }

    foot(){
        push();
        noFill();
        stroke(20);
        strokeWeight(this.legWeight);
        line(0,0,this.footHeight,0);
        pop();
    }
}