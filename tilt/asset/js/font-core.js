
/**
 * 2016 Stuckyi Studio
 *
 * 변수화 목록
 * 1. 폰트 크기 변경 가능하게 설계한다.
 * 2. 획 굵기 변경 가능하게 설계한다
 * 3. 위치 변경 가능하게 설계한다
 * 4. 쌍자음은 gamma 값 변할 때 위치가 왼쪽 -> 오른쪽 | 오른쪽 -> 왼쪽으로 차례로 변할 수 있게 한다.
 * 5. 모음은 gamma 값에 따라 형태가 변할 수 있게 한다.
 */


// 타이포그래피
폰트크기 = 0.3; //폰트 크기 단계화

글자너비 = 폰트크기 * 250 ; // 변형 전 글자 기본 공간 - 가로
글자높이 = 폰트크기 * 500; // 변형 전 글자 기본 공간 - 세로

자간 = 글자너비 / 3; //자간
행간 = 글자높이 / 4; //줄간격

w1 = 글자너비 * 3 / 5 ; // 닿자 기본 공간 - 가로
w2 = 글자너비 * 2 / 5 ; // 종적 모음 기본 공간 - 가로
w3 = 글자너비 * 4 / 5 ; // 횡적 모음 기본 공간 - 가로
w4 = 글자너비 * 3 / 5 ; // 받침 기본 공간 - 가로

h1 = 글자높이 * 3 / 10 ; // 닿자 기본 공간 - 세로
h2 = 글자높이 * 3 / 5 ; // 종적 모음 기본 공간 - 세로
h3 = 글자높이 * 1 / 5 ; // 횡적 모음 기본 공간 - 세로
h4 = 글자높이 * 3 / 10 ; // 받침 기본 공간 - 세로

m1 = 글자높이 / 10 ; // 닿자 윗쪽 패딩 - 세로
m2 = 5*w1/4; // 종적 모음 왼쪽 패딩
m3 = m1 + h1 + 0.7 * m1; // 횡적 모음 윗쪽 패딩
m4 = m1 + h1 + h3; // 받침 윗쪽 패딩
m5 = 글자너비 / 5 ; // 받침 왼쪽 패딩

mw0 = 글자너비 / 25; // 단위 여백 - 가로 : 10
mh0 = 글자높이 / 50; // 단위 여백 - 세로 : 10



//글자 형태 변경을 위한 각 포인트 위치 지정 변수

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

//종적 모음 위치
var dp1x=w2/2, dp1y=mh0, dp2x=dp1x, dp2y=h2-mh0,dp3x=w2-mw0, dp3y=dp1y, dp4x=dp3x, dp4y=dp2y, dp5x=dp1x, dp5y=(dp1y+dp2y)/2, dp6x=dp3x, dp6y=dp5y,dp7x=mw0, dp7y=dp5y, dp8x=dp5x, dp8y=dp5y-2*h1/3, dp9x=dp3x, dp9y=dp8y, dp10x=dp5x, dp10y=dp5y-h1/3, dp11x=dp6x, dp11y=dp10y, dp12x=dp5x, dp12y=dp5y+h1/3, dp13x=dp6x, dp13y=dp6y+h1/3, dp14x=dp5x, dp14y=dp5y-h1/6, dp15x=dp6x, dp15y=dp6y-h1/6, dp16x=dp7x, dp16y=dp14y, dp17x=dp5x, dp17y=dp5y+h1/6, dp18x=dp6x, dp18y=dp6y+h1/6, dp19x=dp7x, dp19y = dp17y;



//곁받침자소 변수선언 : code로 인식하지 못하기 때문 
자소ㄱㅅ = Hangul.assemble(['ㄱ', 'ㅅ']), 자소ㄴㅈ = Hangul.assemble(['ㄴ', 'ㅈ']), 자소ㄴㅎ = Hangul.assemble(['ㄴ', 'ㅎ']), 자소ㄹㄱ = Hangul.assemble(['ㄹ', 'ㄱ']), 자소ㄹㅁ = Hangul.assemble(['ㄹ', 'ㅁ']), 자소ㄹㅂ = Hangul.assemble(['ㄹ', 'ㅂ']), 자소ㄹㅅ = Hangul.assemble(['ㄹ', 'ㅅ']), 자소ㄹㅌ = Hangul.assemble(['ㄹ', 'ㅌ']), 자소ㄹㅍ = Hangul.assemble(['ㄹ', 'ㅍ']), 자소ㄹㅎ = Hangul.assemble(['ㄹ', 'ㅎ']), 자소ㅂㅅ = Hangul.assemble(['ㅂ', 'ㅅ']), 자소우 = Hangul.disassemble('우')[1];