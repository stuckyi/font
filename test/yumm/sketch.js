
var guideW; //모든 가로 길이 관련 기준이 되는 가로 : 추후 변경 가능
var guideH; //모든 세로 길이 관련 기준이 되는 세로 : 추후 변경 가능

//길이 관련 변수
var chaW; //캐릭터 가로 길이
var chaH; //캐릭터 세로 길이
var chaM; //캐릭터 단위 마진
var chaLW; //캐릭터 다리 가로
var chaLH; //캐릭터 다리 세로
var chaEyeR; //캐릭터 눈 반지름

//스타일 관련 변수
var chaC; //캐릭터 색깔
var chaStrokeWeight;



function setup(){
    guideW = windowWidth; //지금은 모든 가로의 가이드 가로값을 윈도우가로로 지정해놓음
    guideH = windowHeight; //지금은 모든 세로의 가이드 세로값을 윈도우세로로 지정해놓음
    chaW = guideW / 40;
    chaH = guideW / 30;
    chaM = chaW / 10;
    chaLW = chaW / 5;
    chaLH = chaH / 4;
    chaEyeR = chaW / 6;
    
    chaStrokeWeight = 2;
    
    
    createCanvas(guideW,guideH);
    colorMode(HSL);
    strokeCap(ROUND);
    cha1(50,50,0,0,0,-40,-40,30,30,0,0);
    cha1(80,53,150,0,0,-40,-40,90,90,0,0);
    cha1(100,60,290,0,0,-40,-40,90,90,0,0);
    
}


//캐릭터1
function cha1(x,y,r,ex,ey,rotateLeftLeg1,rotateRightLeg1,rotateLeftLeg2,rotateRightLeg2,rotateLeftFoot,rotateRightFoot){
    push();
    translate(x,y);
    rotate(radians(r));
    //몸 소환 
    push();
    cha1b();
    //눈 소환
    translate(ex,ey);
    cha1e();
    pop();
    
    //허벅다리 소환하여 왼쪽 허벅다리로 사용
    push();
    translate(-chaLW*5/6,chaH/2-chaM*2);
    rotate(radians(rotateLeftLeg1));
    cha1L1();
    //정강이
    translate(0,chaLH);
    rotate(radians(rotateLeftLeg2));
    cha1L2();
    //발
    translate(0,chaLH);
    rotate(radians(rotateLeftFoot));
    cha1F();
    pop();
    
    
    //허벅다리 소환하여 오른쪽 허벅다리로 사용
    push();
    translate(5*chaLW/4,chaH/2-chaM*2);
    rotate(radians(rotateRightLeg1));
    cha1L1();
    //정강이
    translate(0,chaLH);
    rotate(radians(rotateRightLeg2));
    cha1L2();
    //발
    translate(0,chaLH);
    rotate(radians(rotateRightFoot));
    cha1F();
    pop();
    pop();
}

//캐릭터1 몸
function cha1b(){
    push();
    fill(130,30,60);
    noStroke();
    rectMode(CENTER);
    rect(0,0,chaW,chaH,chaW);
    cha1e();
    pop();
}

//캐릭터1 눈들
function cha1e(){
    push();
    fill(0,0,100);
    noStroke();
    ellipse(-chaM,-chaM,chaEyeR,chaEyeR);
    ellipse(2*chaM,-chaM,chaEyeR,chaEyeR);
    pop();
}

//캐릭터1 허벅다리
function cha1L1(){
    push();
//    rectMode(CORNER);
//    fill(130,30,40);
//    noStroke();
    stroke(130,30,40);
    strokeWeight(chaStrokeWeight);
    noFill();
    line(0,0,0,chaLH);
    pop();
}

//캐릭터1 정강이
function cha1L2(){
    push();
//    rectMode(CORNER);
//    fill(130,30,40);
//    noStroke();
    stroke(130,30,40);
    strokeWeight(chaStrokeWeight);
    noFill();
    line(0,0,0,chaLH);
    pop();
}

//캐릭터1 발
function cha1F(){
    push();
    stroke(130,30,20);
    strokeWeight(chaStrokeWeight);
    noFill();
    line(0,0,chaLW,0);
    pop();
}