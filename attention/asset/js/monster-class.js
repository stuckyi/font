


class 몬스터A {
    constructor(시작점, 글자이동점, 자소이동점, 자소타입) {
        this.시작점 = 시작점;
        this.글자이동점 = 글자이동점;
        this.자소이동점 = 자소이동점;
        this.자소타입 = 자소타입;
        
        this.g = 0;
        this.b = 0;
        // 개선필요
        this.닿자위치 = { x: 글자이동점.x + this.g, y: 글자이동점.y + m1 + this.b },
        this.종적모음위치 = { x: 글자이동점.x + m2 + this.g, y: 글자이동점.y + this.b },
        this.횡적모음위치 = { x: 글자이동점.x + this.g, y: 글자이동점.y + m3 + this.b },
        this.받침위치 = { x: 글자이동점.x + this.g, y: 글자이동점.y + m4 + this.b };
        
    

    
        this.positionX = 시작점.x; //x좌표
        this.positionY = 시작점.y; //y좌표
        
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


    업데이트(b, g){
        this.g = g;
        this.b = b;
        // 개선필요
        this.닿자위치 = { x: this.글자이동점.x + this.g, y: this.글자이동점.y + m1 + this.b },
        this.종적모음위치 = { x: this.글자이동점.x + m2 + this.g, y: this.글자이동점.y + this.b},
        this.횡적모음위치 = { x: this.글자이동점.x + this.g, y: this.글자이동점.y + m3 + this.b},
        this.받침위치 = { x: this.글자이동점.x + this.g, y: this.글자이동점.y + m4 + this.b};
    }
    그리기() {
       
        var 글자단위이동점 = this.글자이동점;
        var 자소단위이동점;
        
        if (this.자소타입 === "닿자") { 자소단위이동점 = this.닿자위치; }
        else if (this.자소타입 === "받침") { 자소단위이동점 = this.받침위치; }
        else if (this.자소타입 === "횡적모음") { 자소단위이동점 = this.횡적모음위치; }
        else if (this.자소타입 === "종적모음") { 자소단위이동점 = this.종적모음위치; }
        
        push();
        translate(글자단위이동점.x, 글자단위이동점.y);
        translate(자소단위이동점.x, 자소단위이동점.y);
        
        this.신체결합();

        pop();
        
    }

    움직임(){
        this.leg1move();
        this.leg2move();
        this.armLeftMove();
        this.armRightMove();
    }
    
    신체결합(){
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



class 몬스터B {
    constructor(시작점, 글자이동점, 자소이동점, 자소타입) {
        this.시작점 = 시작점;
        this.글자이동점 = 글자이동점;
        this.자소이동점 = 자소이동점;
        this.자소타입 = 자소타입;
        
        this.g = 0;
        this.b = 0;
        // 개선필요
        this.닿자위치 = { x: 글자이동점.x + this.g, y: 글자이동점.y + m1 + this.b },
        this.종적모음위치 = { x: 글자이동점.x + m2 + this.g, y: 글자이동점.y + this.b },
        this.횡적모음위치 = { x: 글자이동점.x + this.g, y: 글자이동점.y + m3 + this.b },
        this.받침위치 = { x: 글자이동점.x + this.g, y: 글자이동점.y + m4 + this.b };
        
        this.positionX = 시작점.x; //x좌표
        this.positionY = 시작점.y; //y좌표
        
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

    업데이트(b, g){
        this.g = g;
        this.b = b;
        // this.글자움직임(); //틸트정보로 글자까지움직일지 여부
        
    }

    원점복귀() {    
            this.movingBodyX += (this.시작점.x - this.movingBodyX) * 0.1;
            this.movingBodyY += (this.시작점.y - this.movingBodyY) * 0.1;
    }
    그리기(){
        
        var 글자단위이동점 = this.글자이동점;
        var 자소단위이동점;
        
        if (this.자소타입 === "닿자") { 자소단위이동점 = this.닿자위치; }
        else if (this.자소타입 === "받침") { 자소단위이동점 = this.받침위치; }
        else if (this.자소타입 === "횡적모음") { 자소단위이동점 = this.횡적모음위치; }
        else if (this.자소타입 === "종적모음") { 자소단위이동점 = this.종적모음위치; }
        
        push();
        translate(글자단위이동점.x, 글자단위이동점.y);
        translate(자소단위이동점.x, 자소단위이동점.y);
        
        this.신체결합();
        
        pop();
    }

    글자위치움직임() {
        // 개선필요
        this.닿자위치 = { x: this.글자이동점.x + this.g, y: this.글자이동점.y + m1 + this.b },
        this.종적모음위치 = { x: this.글자이동점.x + m2 + this.g, y: this.글자이동점.y + this.b},
        this.횡적모음위치 = { x: this.글자이동점.x + this.g, y: this.글자이동점.y + m3 + this.b},
        this.받침위치 = { x: this.글자이동점.x + this.g, y: this.글자이동점.y + m4 + this.b};
    }
    
    //형태
    
    신체결합() {
        if (!isTilt) {
            this.원점복귀(); //틸트가 아닐때만 동작한다.
        }    
        push();
        translate(this.positionX,this.positionY);
        translate(this.movingBodyX,this.movingBodyY);
        this.body();    
            
        
            //틸트했을때만, 다리가 보인다.
        if (isTilt) {

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
                
            }
        pop();
    }



    움직임(){
    this.movingBody();
    this.headBanging();
    this.legBanging();
    this.leg1Swing1();
    }
    
    
    
    movingBody(){
       this.movingBodyX = this.movingBodyX + this.movingBodyDirection; //좌우움직임: 현재는 -1과 1사이의 랜덤값으로 되어있음
        this.movingBodyY = this.movingBodyY + sin(radians(this.movingBodyAngle))*random(1,2);
        this.movingBodyAngle = this.movingBodyAngle + random(10,40);
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


            function myFunction() {
                setTimeout(function(){ alert("Hello"); }, 3000);
            }
                