/*
2016 stuckyi studio 
for herald design tech 

고려사항:

변수화할 것들
1. 폰트 크기 변경 가능하게 설계한다.
2. 획 굵기 변경 가능하게 설계한다.
3. 위치 변경 가능하게 설계한다.
4. 쌍자음은 gamma 값 변할 때 위치가 왼쪽 -> 오른쪽 | 오른쪽 -> 왼쪽으로 차례로 변할 수 있게 한다.
5. 모음은 gamma 값에 따라 형태가 변할 수 있게 한다.

*/


/* ----------------- 크기 지정 부분 ------------------- */

var fontSize = 1; //폰트 크기 단계화

var letterWidth = fontSize * 250; // 변형 전 글자 기본 공간 - 가로
var letterHeight = fontSize * 500; // 변형 전 글자 기본 공간 - 세로

var w1 = letterWidth * 3 / 5 ; // 닿자 기본 공간 - 가로
var w2 = letterWidth * 2 / 5 ; // 종적 모음 기본 공간 - 가로
var w3 = letterWidth * 4 / 5 ; // 횡적 모음 기본 공간 - 가로
var w4 = letterWidth * 3 / 5 ; // 받침 기본 공간 - 가로

var h1 = letterHeight * 3 / 10 ; // 닿자 기본 공간 - 세로
var h2 = letterHeight * 3 / 5 ; // 종적 모음 기본 공간 - 세로
var h3 = letterHeight * 1 / 5 ; // 횡적 모음 기본 공간 - 세로
var h4 = letterHeight * 3 / 10 ; // 받침 기본 공간 - 세로

var m1 = letterHeight / 10 ; // 닿자 윗쪽 패딩 - 세로
var m2 = w1; // 종적 모음 왼쪽 패딩
var m3 = m1 + h1; // 횡적 모음 윗쪽 패딩
var m4 = m1 + h1 + h3; // 받침 윗쪽 패딩
var m5 = letterWidth / 5 ; // 받침 왼쪽 패딩

var mw0 = letterWidth / 25; // 단위 여백 - 가로 : 10
var mh0 = letterHeight / 50; // 단위 여백 - 세로 : 10


/* ----------------- 스타일 지정 부분 ------------------- */

var frameColor = (60,90,70); //이상하다......
var frameStrokeWeight = 2;

var fontColor = 0;
var fontStrokeWeight = 10;





/* ----------------- 글자 형태 변경을 위한 각 포인트 위치 지정 변수 ------------------- */
/*-------------------자음--------------------*/
//기본 자음자 관련 변수
var p1x = w1/3 + mw0;
var p1y = h1/3 + mh0;
var p2x = w1 - mw0;
var p2y = h1/3 + mh0;
var p3x = w1/3 + mw0;
var p3y = h1 - mh0;
var p4x = w1-mw0;
var p4y = h1-mh0;
var p5x = w1 - mw0;
var p5y = h1*4/6;
var p6x = w1/3 + mw0;
var p6y = h1*4/6;
var p7x = (p5x + p6x) /2;
var p7y = (p2y + p4y)*4.2 /10;
var p8x = (p1x + p2x) /2;
var p8y = p1y;
var p9x = p1x;
var p9y = p1y - 2*mh0;
var p10x = p2x;
var p10y = p2y - 2*mh0;
var p11x = (p9x+p10x)/2;
var p11y = p10y;
var p12x = p11x;
var p12y = p11y-3*mh0;
var p13x = (p1x+p8x)/2;
var p13y = p8y;
var p14x = (p2x+p8x)/2;
var p14y = p8y;
var p17x = (p3x+p4x)/2;
var p17y = p3y;
var p15x = (p3x+p17x)/2;;
var p15y = p3y;
var p16x = (p4x+p17x)/2;;
var p16y = p3y;

//복합 자음자 관련 변수
var bp1x = mw0;
var bp1y = 0;
var bp5x = w4 / 3;
var bp5y = 0;
var bp13x = bp1x;
var bp13y = bp1y + h4*5/9;
var bp17x = bp5x;
var bp17y = bp13y;
var bp3x = (bp1x+bp5x)/2;
var bp3y = bp1y;
var bp2x = (bp1x+bp3x)/2;
var bp2y = bp1y;
var bp4x = (bp3x+bp5x)/2;
var bp4y = bp1y;
var bp15x = (bp13x+bp17x)/2;
var bp15y = bp13y;
var bp14x = (bp13x+bp15x)/2;
var bp14y = bp13y;
var bp16x = (bp15x+bp17x)/2;
var bp16y = bp13y;
var bp6x = bp1x;
var bp6y = (bp1y+bp13y)/3;
var bp7x = bp3x;
var bp7y = bp6y;
var bp8x = bp5x;
var bp8y = bp6y;
var bp9x = bp6x;
var bp9y = (bp1y+bp13y)/2;
var bp10x = bp7x;
var bp10y = bp9y;
var bp11x = bp8x;
var bp11y = bp9y;
var bp12x = bp10x;
var bp12y= (bp7y+bp15y)/2;

//복합 자음 위치
var bm1 = w4/9+mw0; // 복합자음 첫번째 날씬자음 왼쪽 패딩
var bm2 = h4/3+mh0; // 복합자음 위쪽 패딩
var bm3 = w4*4/9; // 복합자음 두번째 날씬자음 왼쪽 패딩


var circleWidth = (p6x-p5x)*4 / 5; //기본 자음 동그라미 가로지름
var circleHeight = (p4y-p8y)*4/ 5; // 기본 자음 동그라미 세로지름
var circleWidth2 = bp11x - bp9x ; // 복합 자음 동그라미 가로 지름
var circleHeight2 = circleWidth2; // 복합 자음 동그라미 세로 지름


/*-------------------모음--------------------*/
//횡적 모음 위치
var cp1x = mw0;
var cp1y = h3 / 2;
var cp2x = w3-mw0;
var cp2y = cp1y;
var cp3x = (cp1x + cp2x) / 2;
var cp3y = cp1y;
var cp4x = cp3x-2*mw0;
var cp4y = cp1y;
var cp5x = cp3x+2*mw0;
var cp5y = cp1y;
var cp6x = cp3x;
var cp6y = mh0;
var cp7x = cp6x;
var cp7y = h3-mh0;
var cp8x = cp4x;
var cp8y = cp6y;
var cp9x = cp5x;
var cp9y = cp6y;
var cp10x = cp4x;
var cp10y = cp7y;
var cp11x = cp5x;
var cp11y = cp7y;



function setup(){
    createCanvas(800,500);
    colorMode(HSL);
    
    layout(0,0);
    
}

function draw(){
    
}


function layout(tx,ty){
    frame1(tx, ty + m1); //닿자 위치
    frame2(tx + m2, ty); //종적 모음 위치
    frame3(tx,ty + m3); //횡적 모음 위치
    frame4(tx, ty + m4); //받침 위치
}


//글자 틀
//닿자
function frame1(tx,ty){
    push();
    noFill();
    stroke(frameColor);
    strokeWeight(frameStrokeWeight);
    translate(tx,ty);
    rect(0,0,w1,h1);
    pop();
    
    //ㄱ
//    top1(tx,ty); 
    //ㄴ
//    top2(tx,ty);
    //ㄷ
//    top3(tx,ty);
    //ㄹ
//    top4(tx,ty);
    //ㅁ
//    top5(tx,ty);    
    //ㅂ
//    top6(tx,ty);
    //ㅅ
//    top7(tx,ty);    
    //ㅇ
//    top8(tx,ty);    
//    ㅈ
//    top9(tx,ty);    
    //ㅊ
//    top10(tx,ty);    
    //ㅋ
//    top11(tx,ty);    
    //ㅌ
//    top12(tx,ty);    
    //ㅍ
    top13(tx,ty);    
    //ㅎ
//    top14(tx,ty);  






} 
//종적 모음
function frame2(tx,ty){
    push();
    noFill();
    stroke(frameColor);
    strokeWeight(frameStrokeWeight);
    translate(tx,ty);
    rect(0,0,w2,h2);
    pop();
}
//횡적 모음
function frame3(tx,ty){
    push();
    noFill();
    stroke(frameColor);
    strokeWeight(frameStrokeWeight);
    translate(tx,ty);
    rect(0,0,w3,h3);
    pop();
}
//받침
function frame4(tx,ty){
    push();
    noFill();
    stroke(frameColor);
    strokeWeight(frameStrokeWeight);
    translate(tx,ty);
    rect(0,0,w4,h4);
    pop();
    
    
    //기본받침
        //ㄱ
//    bottom1(tx,ty); 
    //ㄴ
//    bottom2(tx,ty);
    //ㄷ
//    bottom3(tx,ty);
    //ㄹ
//    bottom4(tx,ty);
    //ㅁ
//    bottom5(tx,ty);    
    //ㅂ
//    bottom6(tx,ty);
    //ㅅ
//    bottom7(tx,ty);    
    //ㅇ
//    bottom8(tx,ty);    
//    ㅈ
//    bottom9(tx,ty);    
    //ㅊ
//    bottom10(tx,ty);    
    //ㅋ
//    bottom11(tx,ty);    
    //ㅌ
//    bottom12(tx,ty);    
    //ㅍ
//    bottom13(tx,ty);    
    //ㅎ
//    bottom14(tx,ty); 
    
    
// ------------------ 겹받침 -----------------------

    //겹받침 ㄱㅅ
//  bottom15(tx,ty);
    //겹받침 ㄴㅈ
//  bottom16(tx,ty);
    //겹받침 ㄴㅎ
//  bottom17(tx,ty);
    //겹받침 ㄹㄱ
//  bottom18(tx,ty);
    //겹받침 ㄹㅁ
//  bottom19(tx,ty);
    //겹받침 ㄹㅂ
//  bottom20(tx,ty);
    //겹받침 ㄹㅅ
//  bottom21(tx,ty);
    //겹받침 ㄹㅌ
//  bottom22(tx,ty);
    //겹받침 ㄹㅍ
//  bottom23(tx,ty);
    //겹받침 ㄹㅎ
//  bottom24(tx,ty);
    //겹받침 ㅂㅅ
  bottom25(tx,ty);



// ------------------ 쌍받침 -----------------------

    //쌍받침ㄲ
//  bottom26(tx,ty);
    //쌍받침ㅆ
//  bottom27(tx,ty);

}







