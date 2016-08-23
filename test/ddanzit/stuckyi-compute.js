
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






/*** 자음 관련 변수 *****************************************
 * p : 기본 자음자 관련 변수
 * bp : 복합 자음자 관련 변수
 * bm : 복합 자음자 위치
 * circleWidth, circleWidth2, circleHeight, circleHeight2 : 기본 자음자 - 동그라미 변수 
*/


/* P : 기본 자음자 관련 변수 *** */

var p1 = { x: w1 / 3 + mw0, y: h1 / 3 + mh0 };
var p2 = { x: w1 - mw0, y: h1 / 3 + mh0 };
var p3 = { x: w1 / 3 + mw0, y: h1 - mh0 };
var p4 = {x: w1 - mw0, y:h1 - mh0 };
var p5 = {x: w1 - mw0, y:h1 * 4 / 6 };
var p6 = {x: w1 / 3 + mw0, y: h1 * 4 / 6 };
var p7 = {x: (p5.x + p6.x) / 2, y: (p2.y + p4.y) * 4.2 / 10 };
var p8 = {x: (p1.x + p2.x) / 2, y: p1.y };
var p9 = {x: p1.x, y: p1.y - 2 * mh0 };
var p10 = {x: p2.x, y: p2.y - 2 * mh0};
var p11 = {x: (p9.x + p10.x) / 2, y: p10.y };
var p12 = {x: p11.x, y: p11.y - 3 * mh0};
var p13 = {x: (p1.x + p8.x) / 2, y: p8.y};
var p14 = { x: (p2.x + p8.x) / 2, y: p8.y };
var p17 = {x: (p3.x + p4.x) /2, y: p3.y};
var p15 = {x: (p3.x + p17.x) / 2  , y: p3.y};
var p16 = { x: (p4.x + p17.x) / 2 , y: p3.y};
 



/* BP : 복합 자음자 관련 변수 *** */

 var bp1 = { x: mw0, y: 0 };
 var bp5 = { x: w4 / 3, y: 0 };
 var bp13 = { x: bp1.x, y: bp1.y + h4 * 5 / 9 };
 var bp17 = { x: bp5.x, y: bp13.y };
 var bp3 = { x: (bp1.x + bp5.x) / 2, y: bp1.y };
 var bp2 = { x: (bp1.x + bp3.x) / 2, y: bp1.y };
 var bp4 = { x: (bp3.x + bp5.x) / 2, y: bp1.y };
 var bp15 = { x: (bp13.x + bp17.x) / 2, y: bp13.y };
 var bp14 = { x: (bp13.x + bp15.x) / 2, y: bp13.y };
 var bp16 = { x: (bp15.x + bp17.x) / 2, y: bp13.y };
 var bp6 = { x: bp1.x, y: (bp1.y + bp13.y) / 3 };
 var bp7 = { x: bp3.x, y: bp6.y };
 var bp8 = { x: bp5.x, y: bp6.y };
 var bp9 = { x: bp6.x, y: (bp1.y + bp13.y) / 2 };
 var bp10 = { x: bp7.x, y: bp9.y };
 var bp11 = { x: bp8.x, y: bp9.y };
 var bp12 = { x: bp10.x, y: (bp7.y + bp15.y) / 2 };
 
/* 복합 자음자 위치 *** */
var bm1 = w4/9+mw0; // 복합자음 첫번째 날씬자음 왼쪽 패딩
var bm2 = h4/3+mh0; // 복합자음 위쪽 패딩
var bm3 = w4*4/9; // 복합자음 두번째 날씬자음 왼쪽 패딩

/* 기본 자음자 - 동그라미 지름변수 *** */
var circleWidth = (p6.x-p5.x)*4 / 5; //기본 자음 동그라미 가로지름
var circleHeight = (p4.y-p8.y)*4/ 5; // 기본 자음 동그라미 세로지름
var circleWidth2 = bp11.x - bp9.x ; // 복합 자음 동그라미 가로 지름
var circleHeight2 = circleWidth2; // 복합 자음 동그라미 세로 지름


/*** 모음 관련 변수 *****************************************
 * cp : 횡적 모음 위치
 * dp : 종적 모음 위치
*/

/* CP : 횡적 모음 위치 *** */
var cp1 = { x: mw0, y: h3 / 2 };
var cp2 = { x: w3 - mw0, y: cp1.y };
var cp3 = { x: (cp1.x + cp2.x) / 2, y: cp1.y };
var cp4 = { x: cp3.x - 2 * mw0, y: cp1.y };
var cp5 = { x: cp3.x + 2 * mw0, y: cp1.y };
var cp6 = { x: cp3.x, y: mh0 };
var cp7 = { x: cp6.x, y: h3 - mh0 };
var cp8 = { x: cp4.x, y: cp6.y };
var cp9 = { x: cp5.x, y: cp6.y };
var cp10 = { x: cp4.x, y: cp7.y };
var cp11 = { x: cp5.x, y: cp7.y };


/* DP : 종적 모음 위치 *** */
var dp1 = { x: w2 / 2, y: mh0 };
var dp2 = { x: dp1.x, y: h2 - mh0 };
var dp3 = { x: w2 - mw0, y: dp1.y };
var dp4 = { x: dp3.x, y: dp2.y };
var dp5 = { x: dp1.x, y: (dp1.y + dp2.y) / 2 };
var dp6 = { x: dp3.x, y: dp5.y };
var dp7 = { x: mw0, y: dp5.y };
var dp8 = { x: dp5.x, y: dp5.y - 2 * h1 / 3 };
var dp9 = { x: dp3.x, y: dp8.y };
var dp10 = { x: dp5.x, y: dp5.y - h1 / 3 };
var dp11 = { x: dp6.x, y: dp10.y };
var dp12 = { x: dp5.x, y: dp5.y + h1 / 3, };
var dp13 = { x: dp6.x, y: dp6.y + h1 / 3 };
var dp14 = { x: dp5.x, y: dp5.y - h1 / 6 };
var dp15 = { x: dp6.x, y: dp6.y - h1 / 6 };
var dp16 = { x: dp7.x, y: dp14.y };
var dp17 = { x: dp5.x, y: dp5.y + h1 / 6 };
var dp18 = { x: dp6.x, y: dp6.y + h1 / 6 };
var dp19 = { x: dp7.x, y: dp17.y };



/* 곁받침 자소 선언 : code로 인식하지 못하는 문제 해결방안 *** */ 
var 자소ㄱㅅ = Hangul.assemble(['ㄱ', 'ㅅ']), 자소ㄴㅈ = Hangul.assemble(['ㄴ', 'ㅈ']), 자소ㄴㅎ = Hangul.assemble(['ㄴ', 'ㅎ']), 자소ㄹㄱ = Hangul.assemble(['ㄹ', 'ㄱ']), 자소ㄹㅁ = Hangul.assemble(['ㄹ', 'ㅁ']), 자소ㄹㅂ = Hangul.assemble(['ㄹ', 'ㅂ']), 자소ㄹㅅ = Hangul.assemble(['ㄹ', 'ㅅ']), 자소ㄹㅌ = Hangul.assemble(['ㄹ', 'ㅌ']), 자소ㄹㅍ = Hangul.assemble(['ㄹ', 'ㅍ']), 자소ㄹㅎ = Hangul.assemble(['ㄹ', 'ㅎ']), 자소ㅂㅅ = Hangul.assemble(['ㅂ', 'ㅅ']), 자소우 = Hangul.disassemble('우')[1];

