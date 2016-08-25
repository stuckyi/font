
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





//글자단위로 나누어 넣는다.
function 글자레이아웃(letter, tx, ty, g) {  
  var 자소배열추출 = Hangul.disassemble(letter); //글자2자소단위 분리
  //겹받침 체크후 자소배열을 곁받침형태로 변환
  var 겹받침인가 = 겹받침체크(자소배열추출);
  if (겹받침인가 === true) {
      var pushEl = 겹받침변환(자소배열추출);
      자소배열추출.push(pushEl);
  }
  글자(자소배열추출, tx, ty, g); //글자함수에 자소배열과 파라미터를 넘겨준다.
} // end 글자레이아웃

function 글자(자소배열, tx, ty, g) {
  
  //각 자소타입별 위치
  var 닿자위치 = {
          x: tx + g,
          y: ty + m1
      },
      종적모음위치 = {
          x: tx + m2,
          y: ty
      },
      횡적모음위치 = {
          x: tx,
          y: ty + m3
      },
      받침위치 = {
          x: tx + g,
          y: ty + m4
      };
  
  for (var j = 0; j < 자소배열.length; j++) {
    var 자소 = 자소배열[j];
    if (자소 === 자소우) { 자소 = '우'; }

    switch (자소) {
      case 'ㄱ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          // 한글['ㄱ']();
          딴짓['ㄱ']();
          pop();
          
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㄱ']();
          pop();
        }
        break;
      case 'ㄴ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㄴ']();
          pop();
          
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㄴ']();
          pop();
        }
        break;
      case 'ㄷ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㄷ']();
          pop();
          
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㄷ']();
          pop();
        }
        break;
      case 'ㄹ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㄹ']();
          pop();
          
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㄹ']();
          pop();
        }
        break;
      case 'ㅁ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㅁ']();
          pop();
          
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㅁ']();
          pop();
        }
        break;
      case 'ㅂ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㅂ']();
          pop();
          
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㅂ']();
          pop();
        }
        break;
      case 'ㅅ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㅅ']();
          pop();
          
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㅅ']();
          pop();
        }
        break;
      case 'ㅇ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㅇ']();
          pop();
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㅇ']();
          pop();
        }
        break;
      case 'ㅈ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㅈ']();
          pop();
          
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㅈ']();
          pop();
        }
        break;
      case 'ㅊ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㅊ']();
          pop();
          
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㅊ']();
          pop();
        }
        break;
      case 'ㅋ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㅋ']();
          pop();
          
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㅋ']();
          pop();
        }
        break;
      case 'ㅌ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㅌ']();
          pop();
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㅌ']();
          pop();
        }
        break;
      case 'ㅍ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㅍ']();
          pop();
          
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㅍ']();
          pop();
        }
        break;
      case 'ㅎ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㅎ']();
          pop();
          
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㅎ']();
          pop();
        }
        break;
      case 'bottom15':
        push();
        translate(받침위치.x, 받침위치.y);
        한글['bottom15']();
        pop();
        break;
      case 'bottom16':
        push();
        translate(받침위치.x, 받침위치.y);
        한글['bottom16']();
        pop();
        break;
      case 'bottom17':
        push();
        translate(받침위치.x, 받침위치.y);
        한글['bottom17']();
        pop();
        break;
      case 'bottom18':
        push();
        translate(받침위치.x, 받침위치.y);
        한글['bottom18']();
        pop();
        break;
      case 'bottom19':
        push();
        translate(받침위치.x, 받침위치.y);
        한글['bottom19']();
        pop();
        break;
      case 'bottom20':
        push();
        translate(받침위치.x, 받침위치.y);
        한글['bottom20']();
        pop();
        break;
      case 'bottom21':
        push();
        translate(받침위치.x, 받침위치.y);
        한글['bottom21']();
        pop();
        break;
      case 'bottom22':
        push();
        translate(받침위치.x, 받침위치.y);
        한글['bottom22']();
        pop();
        break;
      case 'bottom23':
        push();
        translate(받침위치.x, 받침위치.y);
        한글['bottom23']();
        pop();
        break;
      case 'bottom24':
        push();
        translate(받침위치.x, 받침위치.y);
        한글['bottom24']();
        pop();
        break;
      case 'bottom25':
        push();
        translate(받침위치.x, 받침위치.y);
        한글['bottom25']();
        pop();
        break;
      case 'ㄲ':
         if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㄲ']();
          pop();
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㄲ']();
          pop();
        }
         break;
      case 'ㄸ':
         if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㄸ']();
          pop();
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㄸ']();
          pop();
        }
        break;
      case 'ㅆ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㅆ']();
          pop();
        } else {
          push();
          translate(받침위치.x, 받침위치.y);
          한글['ㅆ']();
          pop();
        }
        break;
      case 'ㅏ':
        push();
        translate(종적모음위치.x, 종적모음위치.y);
        한글['아A'](g);
        pop();
        break;
      case 'ㅑ':
        push();
        translate(종적모음위치.x, 종적모음위치.y);
        한글['야A'](g);
        pop();
        break;
      case 'ㅓ':
        push();
        translate(종적모음위치.x, 종적모음위치.y);
        한글['어A'](g);
        pop();
        break;
      case 'ㅕ':
        push();
        translate(종적모음위치.x, 종적모음위치.y);
        한글['여A'](g);
        pop();
        break;
      case 'ㅗ':
        push();
        translate(횡적모음위치.x, 횡적모음위치.y);
        한글['오'](g);
        pop();
        break;
      case 'ㅛ':
        push();
        translate(횡적모음위치.x, 횡적모음위치.y);
        한글['요'](g);
        pop();
        break;
      case '우':
        push();
        translate(횡적모음위치.x, 횡적모음위치.y);
        한글['우'](g);
        pop();
        break;
      case 'ㅠ':
        push();
        translate(횡적모음위치.x, 횡적모음위치.y);
        한글['유'](g);
        pop();
        break;
      case 'ㅡ':
        push();
        translate(횡적모음위치.x, 횡적모음위치.y);
        한글['으']();
        pop();
      case 'ㅣ':
        push();
        translate(종적모음위치.x, 종적모음위치.y);
        한글['이A'](g);
        pop();
        break;
      case 'ㅐ':
        push();
        translate(종적모음위치.x, 종적모음위치.y);
        한글['애A'](g);
        pop();
        break;
      case 'ㅒ':
        push();
        translate(종적모음위치.x, 종적모음위치.y);
        한글['얘A'](g);
        pop();
        break;
      case 'ㅔ':
        push();
        translate(종적모음위치.x, 종적모음위치.y);
        한글['에A'](g);
        pop();
        break;
      case 'ㅖ':
        push();
        translate(종적모음위치.x, 종적모음위치.y);
        한글['예A'](g);
        pop();
        break;
      default:
        push();
        translate(횡적모음위치.x, 횡적모음위치.y);
        한글['우']();
        pop();
        console.log("글자기본값출력");
        break;
    }  //end switch    
  } //end for()
  
  // pop();
}




//곁받침 체크 함수
function 겹받침체크(arrayname) {
    var lastest = arrayname[arrayname.length - 1];
    var last = arrayname[arrayname.length - 2];
    var t_lastest = Hangul.isConsonant(lastest);
    var t_last = Hangul.isConsonant(last);
    var result = false;
    if (t_lastest === true && t_last === true) {
        // console.log("곁밭침을 포함하는 문자 : " + arrayname);
        result = true;
    }
    return result;
}

//곁받침을 홑낱자로 변환
function 겹받침변환(arrayname) {

    var lastest = arrayname.pop();
    var last = arrayname.pop();
    var newEl = Hangul.assemble([last, lastest]);
    var result = '';
    if (newEl === 자소ㄱㅅ) {
        result = 'bottom15';
    } else if (newEl === 자소ㄴㅈ) {
        result = 'bottom16'
    } else if (newEl === 자소ㄴㅎ) {
        result = 'bottom17'
    } else if (newEl === 자소ㄹㄱ) {
        result = 'bottom18'
    } else if (newEl === 자소ㄹㅁ) {
        result = 'bottom19'
    } else if (newEl === 자소ㄹㅂ) {
        result = 'bottom20'
    } else if (newEl === 자소ㄹㅅ) {
        result = 'bottom21'
    } else if (newEl === 자소ㄹㅌ) {
        result = 'bottom22'
    } else if (newEl === 자소ㄹㅍ) {
        result = 'bottom23'
    } else if (newEl === 자소ㄹㅎ) {
        result = 'bottom24'
    } else if (newEl === 자소ㅂㅅ) {
        result = 'bottom25'
    }
    return result;           
}
