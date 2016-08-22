
//coded font에 사용한 계산 변수들

/*** 크기 지정 부분 ************************************** */

var fontSize = 0.3; //폰트 크기 단계화

var letterWidth = fontSize * 250 ; // 변형 전 글자 기본 공간 - 가로
var letterHeight = fontSize * 500; // 변형 전 글자 기본 공간 - 세로
var letterSpacing = letterWidth/5; //자간
var lineHeight = letterHeight/4; //줄간격

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


/*** 스타일 지정 부분 ************************************** */

var frameColor = (60,90,70); //이상하다......
var frameStrokeWeight = 1;

var fontColor = 0;
var fontStrokeWeight = 3;


/*** 글자 형태 변경을 위한 각 포인트 위치 지정 변수  **************** */
/********************************************************* */






/*** 자음 관련 변수 ***************************************** */


/* 기본 자음자 관련 변수 *** */
var p1x = w1/3 + mw0, p1y = h1/3 + mh0, p2x = w1 - mw0, p2y = h1/3 + mh0, p3x = w1/3 + mw0, p3y = h1 - mh0, p4x = w1-mw0, p4y = h1-mh0, p5x = w1 - mw0, p5y = h1*4/6, p6x = w1/3 + mw0, p6y = h1*4/6, p7x = (p5x + p6x) /2, p7y = (p2y + p4y)*4.2 /10, p8x = (p1x + p2x) /2, p8y = p1y, p9x = p1x, p9y = p1y - 2*mh0, p10x = p2x, p10y = p2y - 2*mh0, p11x = (p9x+p10x)/2, p11y = p10y, p12x = p11x, p12y = p11y-3*mh0, p13x = (p1x+p8x)/2, p13y = p8y, p14x = (p2x+p8x)/2, p14y = p8y, p17x = (p3x+p4x)/2, p17y = p3y, p15x = (p3x+p17x)/2, p15y = p3y, p16x = (p4x+p17x)/2, p16y = p3y;

/* 복합 자음자 관련 변수 *** */
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

/* 복합 자음자 위치 *** */
var bm1 = w4/9+mw0; // 복합자음 첫번째 날씬자음 왼쪽 패딩
var bm2 = h4/3+mh0; // 복합자음 위쪽 패딩
var bm3 = w4*4/9; // 복합자음 두번째 날씬자음 왼쪽 패딩

/* 기본 자음자 - 동그라미 지름변수 *** */
var circleWidth = (p6x-p5x)*4 / 5; //기본 자음 동그라미 가로지름
var circleHeight = (p4y-p8y)*4/ 5; // 기본 자음 동그라미 세로지름
var circleWidth2 = bp11x - bp9x ; // 복합 자음 동그라미 가로 지름
var circleHeight2 = circleWidth2; // 복합 자음 동그라미 세로 지름


/*** 모음 관련 변수 ***************************************** */

/* 횡적 모음 위치 *** */
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

/* 종적 모음 위치 *** */
var dp1x=w2/2, dp1y=mh0, dp2x=dp1x, dp2y=h2-mh0,dp3x=w2-mw0, dp3y=dp1y, dp4x=dp3x, dp4y=dp2y, dp5x=dp1x, dp5y=(dp1y+dp2y)/2, dp6x=dp3x, dp6y=dp5y,dp7x=mw0, dp7y=dp5y, dp8x=dp5x, dp8y=dp5y-2*h1/3, dp9x=dp3x, dp9y=dp8y, dp10x=dp5x, dp10y=dp5y-h1/3, dp11x=dp6x, dp11y=dp10y, dp12x=dp5x, dp12y=dp5y+h1/3, dp13x=dp6x, dp13y=dp6y+h1/3, dp14x=dp5x, dp14y=dp5y-h1/6, dp15x=dp6x, dp15y=dp6y-h1/6, dp16x=dp7x, dp16y=dp14y, dp17x=dp5x, dp17y=dp5y+h1/6, dp18x=dp6x, dp18y=dp6y+h1/6, dp19x=dp7x, dp19y = dp17y;