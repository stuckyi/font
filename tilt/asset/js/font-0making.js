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





//------------------------------기본 자음자 : 닿자에도 쓰이고 기본 받침에도 쓰임 --------------------------



//ㄱ
function a1(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(p1x, p1y, p2x, p2y);
    line(p2x, p2y ,p4x ,p4y);
    pop();
}
//ㄴ
function a2(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(p1x,p1y,p3x,p3y);
    line(p3x,p3y,p4x,p4y);
    pop();
}
//ㄷ
function a3(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(p1x,p1y,p2x,p2y);
    line(p1x,p1y,p3x,p3y);
    line(p3x,p3y,p4x,p4y);
    pop();
}
//ㄹ
function a4(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(w1/3 + mw0, h1/3 + mh0, w1 - mw0, h1/3 + mh0);
    line(w1 - mw0, h1/3 + mh0, w1 - mw0, h1*4/6);
    line(w1 - mw0, h1*4/6, w1/3 + mw0, h1*4/6);
    line(w1/3 + mw0, h1*4/6, w1/3 + mw0, h1 - mh0);
    line(w1/3 + mw0, h1 - mh0, w1-mw0 ,h1-mh0);
    pop();
}
//ㅁ
function a5(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(p1x, p1y, p2x, p2y);
    line(p2x, p2y ,p4x ,p4y);
    line(p1x, p1y, p3x, p3y);
    line(p3x, p3y, p4x, p4y);
    pop(); 
}
//ㅂ
function a6(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(p1x,p1y,p3x,p3y);
    line(p3x,p3y,p4x,p4y);
    line(p2x,p2y,p4x,p4y);
    line(p5x,p5y,p6x,p6y);
    pop();
}
//ㅅ
function a7(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(p8x,p8y,p7x,p7y);
    line(p7x,p7y,p3x,p3y);
    line(p7x,p7y,p4x,p4y);
    pop();
}
//ㅇ
function a8(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    ellipse(p7x,p7y,circleWidth,circleHeight);
    pop();
}
//ㅈ
function a9(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(p1x,p1y,p2x,p2y);
    line(p8x,p8y,p7x,p7y);
    line(p7x,p7y,p3x,p3y);
    line(p7x,p7y,p4x,p4y);
    pop();
}
//ㅊ
function a10(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(p12x,p12y,p8x,p8y);
    line(p1x,p1y,p2x,p2y);
    line(p8x,p8y,p7x,p7y);
    line(p7x,p7y,p3x,p3y);
    line(p7x,p7y,p4x,p4y);
    pop();
}
//ㅋ
function a11(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(p1x, p1y, p2x, p2y);
    line(p5x, p5y, p6x, p6y);
    line(p2x, p2y ,p4x ,p4y);
    pop();
}
//ㅌ
function a12(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(p1x,p1y,p2x,p2y);
    line(p1x,p1y,p3x,p3y);
    line(p5x, p5y, p6x, p6y);
    line(p3x,p3y,p4x,p4y);
    pop();
}
//ㅍ
function a13(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(p1x, p1y, p2x, p2y);
    line(p13x,p13y,p15x,p15y);
    line(p14x,p14y,p16x,p16y);
    line(p3x, p3y, p4x, p4y);
    pop(); 
}
//ㅎ
function a14(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(p9x,p9y,p10x,p10y);
    line(p12x,p12y,p11x,p11y);
    ellipse(p7x,p7y,circleWidth,circleHeight);
    pop();
}


//------------------------------복합 자음자와 겹받침을 위한 기본 자음 모듈 --------------------------


//날씬ㄱ : ㄲ | ㄱㅅ, ㄹㅅ, ㅂㅅ 생성용
function b1(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(bp1x,bp1y,bp5x,bp5y);
    line(bp5x,bp5y,bp17x,bp17y);
    pop();
}
//날씬ㄷ : ㄸ 생성용
function b2(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(bp1x,bp1y,bp5x,bp5y);
    line(bp1x,bp1y,bp13x,bp13y);
    line(bp13x,bp13y,bp17x,bp17y);
    pop();
}
//날씬ㅂ : ㅃ | ㄹㅂ, ㅂㅅ 생성용
function b3(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(bp1x,bp1y,bp13x,bp13y);
    line(bp5x,bp5y,bp17x,bp17y);
    line(bp13x,bp13y,bp17x,bp17y);
    line(bp9x,bp9y,bp11x,bp11y);
    pop();
}
//날씬ㅅ : ㅆ | ㄱㅅ, ㄹㅅ, ㅂㅅ 생성용
function b4(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(bp3x,bp3y,bp10x,bp10y);
    line(bp10x,bp10y,bp13x,bp13y);
    line(bp10x,bp10y,bp17x,bp17y);
    pop();
}
//날씬ㅈ : ㅉ 생성용
function b5(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(bp1x,bp1y,bp5x,bp5y);
    line(bp3x,bp3y,bp10x,bp10y);
    line(bp10x,bp10y,bp13x,bp13y);
    line(bp10x,bp10y,bp17x,bp17y);
    pop(); 
}
//날씬ㄴ : ㄴㅈ, ㄴㅎ 생성용
function b6(tx,ty){
     push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(bp1x,bp1y,bp13x,bp13y);
    line(bp13x,bp13y,bp17x,bp17y);
    pop();
}
//날씬ㅎ : ㄴㅎ, ㄹㅎ 생성용
function b7(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(bp3x,bp3y,bp7x,bp7y);
    line(bp6x,bp6y,bp8x,bp8y);
    ellipse(bp12x,bp12y,circleWidth2,circleHeight2);
    pop();
}
//날씬ㄹ : ㄹㄱ, ㄹㅁ, ㄹㅂ, ㄹㅅ, ㄹㅌ, ㄹㅎ 생성용
function b8(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(bp1x,bp1y,bp5x,bp5y);
    line(bp5x,bp5y,bp11x,bp11y);
    line(bp9x,bp9y,bp11x,bp11y);
    line(bp9x,bp9y,bp13x,bp13y);
    line(bp13x,bp13y,bp17x,bp17y);
    pop(); 
}
//날씬ㅁ : ㄹㅁ 생성용
function b9(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(bp1x,bp1y,bp5x,bp5y);
    line(bp1x,bp1y,bp13x,bp13y);
    line(bp13x,bp13y,bp17x,bp17y);
    line(bp5x,bp5y,bp17x,bp17y);
    pop();
}
//날씬ㅌ : ㄹㅌ 생성용
function b10(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(bp1x,bp1y,bp5x,bp5y);
    line(bp1x,bp1y,bp13x,bp13y);
    line(bp13x,bp13y,bp17x,bp17y);
    line(bp9x,bp9y,bp11x,bp11y);
    pop();
}
//날씬ㅍ : ㄹㅍ 생성용
function b11(tx,ty){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(bp1x,bp1y,bp5x,bp5y);
    line(bp2x,bp2y,bp14x,bp14y);
    line(bp4x,bp4y,bp16x,bp16y);
    line(bp13x,bp13y,bp17x,bp17y);
    pop();
    
}


//------------------------------ 횡적 모음 --------------------------


//ㅗ
function c1(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(cp1x,cp1y,cp2x,cp2y);
    line(cp6x,cp6y,cp3x+g,cp3y);
    pop();
}

//ㅛ
function c2(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(cp1x,cp1y,cp2x,cp2y);
    line(cp8x,cp8y,cp4x+g,cp4y);
    line(cp9x,cp9y,cp5x+g,cp5y);
    pop();
}

//ㅜ
function c3(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(cp1x,cp1y,cp2x,cp2y);
    line(cp3x,cp3y,cp7x+g,cp7y);
    pop();
}

//ㅠㅜ 
function c4(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(cp1x,cp1y,cp2x,cp2y);
    line(cp4x,cp4y,cp10x+g,cp10y);
    line(cp5x,cp5y,cp11x+g,cp11y);
    pop(); 
}

//ㅡ
function c5(tx, ty, g) {
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    line(cp1x,cp1y,cp2x,cp2y);
    pop();
}


//------------------------------ 종적 모음 --------------------------
// a: 높이가 낮은 자음이 초성에 올 때
// b: 높이가 높은 자음이 초성에 올 때

//ㅏ-a
function d1a(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp10x+g,dp10y);
    line(dp10x+g,dp10y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
    //가로선
    line(dp6x+g,dp6y,dp5x+g,dp5y);
    pop();
}
//ㅏ-b
function d1b(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp8x+g,dp8y);
    line(dp8x+g,dp8y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
    //가로선
    line(dp6x+g,dp6y,dp5x+g,dp5y);
    pop();
}


//ㅑ-a
function d2a(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp10x+g,dp10y);
    line(dp10x+g,dp10y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
     //가로선
    line(dp14x+g,dp14y,dp15x+g,dp15y);
    line(dp17x+g,dp17y,dp18x+g,dp18y);
    pop();
}
//ㅑ-b
function d2b(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp8x+g,dp8y);
    line(dp8x+g,dp8y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
    //가로선
    line(dp14x+g,dp14y,dp15x+g,dp15y);
    line(dp17x+g,dp17y,dp18x+g,dp18y);
    pop();
}

//ㅓ-a
function d3a(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp10x+g,dp10y);
    line(dp10x+g,dp10y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
    //가로선
    line(dp7x+g,dp7y,dp5x+g,dp5y);
    pop();
}
//ㅓ-b
function d3b(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp8x+g,dp8y);
    line(dp8x+g,dp8y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
    //가로선
    line(dp7x+g,dp7y,dp5x+g,dp5y);
    pop();
}



//ㅕ-a
function d4a(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp10x+g,dp10y);
    line(dp10x+g,dp10y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
    //가로선
    line(dp14x+g,dp14y,dp16x+g,dp16y);
    line(dp17x+g,dp17y,dp19x+g,dp19y);
    pop();
}
//ㅕ-b
function d4b(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp8x+g,dp8y);
    line(dp8x+g,dp8y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
    //가로선
    line(dp14x+g,dp14y,dp16x+g,dp16y);
    line(dp17x+g,dp17y,dp19x+g,dp19y);
    pop();
}


//ㅣ-a
function d5a(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp10x+g,dp10y);
    line(dp10x+g,dp10y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
    pop();
}
//ㅣ-b
function d5b(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp8x+g,dp8y);
    line(dp8x+g,dp8y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
    pop();
}


//ㅐ-a
function d6a(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp10x+g,dp10y);
    line(dp10x+g,dp10y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
    //가로선
    line(dp6x+g,dp6y,dp5x+g,dp5y);
    //오른쪽세로선
    line(dp3x,dp3y,dp11x+g,dp11y);
    line(dp11x+g,dp11y,dp13x+g,dp13y);
    line(dp13x+g,dp13y,dp4x,dp4y);
    pop();
}
//ㅐ-b
function d6b(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp8x+g,dp8y);
    line(dp8x+g,dp8y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
    //가로선
    line(dp6x+g,dp6y,dp5x+g,dp5y);
    //오른쪽세로선
    line(dp3x,dp3y,dp9x+g,dp9y);
    line(dp9x+g,dp9y,dp13x+g,dp13y);
    line(dp13x+g,dp13y,dp4x,dp4y);
    pop();
}


//ㅒ-a
function d7a(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp10x+g,dp10y);
    line(dp10x+g,dp10y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
     //가로선
    line(dp14x+g,dp14y,dp15x+g,dp15y);
    line(dp17x+g,dp17y,dp18x+g,dp18y);
    //오른쪽세로선
    line(dp3x,dp3y,dp11x+g,dp11y);
    line(dp11x+g,dp11y,dp13x+g,dp13y);
    line(dp13x+g,dp13y,dp4x,dp4y);
    pop();
}


//ㅒ-b
function d7b(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp8x+g,dp8y);
    line(dp8x+g,dp8y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
     //가로선
    line(dp14x+g,dp14y,dp15x+g,dp15y);
    line(dp17x+g,dp17y,dp18x+g,dp18y);
    //오른쪽세로선
    line(dp3x,dp3y,dp9x+g,dp9y);
    line(dp9x+g,dp9y,dp13x+g,dp13y);
    line(dp13x+g,dp13y,dp4x,dp4y);
    pop();
}

//ㅔ-a
function d8a(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp10x+g,dp10y);
    line(dp10x+g,dp10y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
    //가로선
    line(dp7x+g,dp7y,dp5x+g,dp5y);
    //오른쪽세로선
    line(dp3x,dp3y,dp11x+g,dp11y);
    line(dp11x+g,dp11y,dp13x+g,dp13y);
    line(dp13x+g,dp13y,dp4x,dp4y);
    pop();
}
//ㅔ-b
function d8b(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp8x+g,dp8y);
    line(dp8x+g,dp8y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
    //가로선
    line(dp7x+g,dp7y,dp5x+g,dp5y);
    //오른쪽세로선
    line(dp3x,dp3y,dp9x+g,dp9y);
    line(dp9x+g,dp9y,dp13x+g,dp13y);
    line(dp13x+g,dp13y,dp4x,dp4y);
    pop();
}



//ㅖ-a
function d9a(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp10x+g,dp10y);
    line(dp10x+g,dp10y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
    //가로선
    line(dp14x+g,dp14y,dp16x+g,dp16y);
    line(dp17x+g,dp17y,dp19x+g,dp19y);
    //오른쪽세로선
    line(dp3x,dp3y,dp11x+g,dp11y);
    line(dp11x+g,dp11y,dp13x+g,dp13y);
    line(dp13x+g,dp13y,dp4x,dp4y);
    pop();
}

//ㅖ-b
function d9b(tx,ty,g){
    push();
    noFill();
    stroke(fontColor);
    strokeWeight(fontStrokeWeight);
    translate(tx,ty);
    //중간세로선
    line(dp1x,dp1y,dp8x+g,dp8y);
    line(dp8x+g,dp8y,dp12x+g,dp12y);
    line(dp12x+g,dp12y,dp2x,dp2y);
    //가로선
    line(dp14x+g,dp14y,dp16x+g,dp16y);
    line(dp17x+g,dp17y,dp19x+g,dp19y);
    //오른쪽세로선
    line(dp3x,dp3y,dp9x+g,dp9y);
    line(dp9x+g,dp9y,dp13x+g,dp13y);
    line(dp13x+g,dp13y,dp4x,dp4y);
    pop();
}