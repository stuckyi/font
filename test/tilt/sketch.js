/*
var 입력된글자;

function setup() {
  createCanvas(1000, 1000);

  document.getElementById('textInput').value = "";

}

function draw() {
  배경(255);  
    
  // console.log(splitHangul(입력된글자));
  
  let i = 0;
  for(let 글자 of splitHangul(입력된글자)){
    글자레이아웃(...글자, i % 5, parseInt(i/5));
    i = i + 1;
  }
}
*/

console.log("sketch.js");



var letterArray = ["헤", "쳐", "모", "여", "모", "여", "헤", "쳐"]; // 로딩 후 가장 처음에 보일 글자들
var state = { currentX: 0, currentY: 0 };
var textAreaX, textAreaY = 0; //글자 영역 결정 전역변수
var rowX, rowY = 0;  //글자 위치 결정 전역변수
var input, button, greeting, div;



// default values
var xpos = 200, ypos = 200,
  alpha = 0, beta = 0, gamma = 0;



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

/* 곁받침 자소 선언 : code로 인식하지 못하는 문제 해결방안 *** */ 
var 자소ㄱㅅ = Hangul.assemble(['ㄱ', 'ㅅ']), 자소ㄴㅈ = Hangul.assemble(['ㄴ', 'ㅈ']), 자소ㄴㅎ = Hangul.assemble(['ㄴ', 'ㅎ']), 자소ㄹㄱ = Hangul.assemble(['ㄹ', 'ㄱ']), 자소ㄹㅁ = Hangul.assemble(['ㄹ', 'ㅁ']), 자소ㄹㅂ = Hangul.assemble(['ㄹ', 'ㅂ']), 자소ㄹㅅ = Hangul.assemble(['ㄹ', 'ㅅ']), 자소ㄹㅌ = Hangul.assemble(['ㄹ', 'ㅌ']), 자소ㄹㅍ = Hangul.assemble(['ㄹ', 'ㅍ']), 자소ㄹㅎ = Hangul.assemble(['ㄹ', 'ㅎ']), 자소ㅂㅅ = Hangul.assemble(['ㅂ', 'ㅅ']), 자소우 = Hangul.disassemble('우')[1];

/* SET : P5 DOM Element *** */
var elPos = {
    canvasX: 0, canvasY: 140,
    inputX: 50, inputY: 55,
    btnX: 255, btnY: 55
};

var letterPos = { x: 60, y: 150 };





function setup() {
    
    //캔버스 생성 및 변수에 할당
    var mainCanvas = createCanvas(800, 1000);
    mainCanvas.position(elPos.canvasX, elPos.canvasY); //캔버스 위치
    
    //캔버스 기본 스타일 설정
    colorMode(HSL);
    strokeJoin(ROUND);
    fill(0);
    // noLoop();

    //Input 설정    
    input = createInput(); //생성
    input.addClass('form-control'); //클래스 부여
    input.size(200, 40); //크기
    input.position(elPos.inputX, elPos.inputY); //위치
    //   input.hide();


    //Button 설정 
    button = createButton('글자생성'); //생성
    button.position(elPos.btnX, elPos.btnY); //위치
    button.mousePressed(redrawing); //마우스 클릭시 이벤트함수 호출
    button.addClass('btn btn-default'); //클래스 부여
}

function draw() {
    background(255);
    //글자크기 변수
    // letterWidth = letterWidth + 0.1 * beta;
    // letterHeight = letterHeight + 0.1 * beta;

    //글자 위치 변수
    letterPos.x += 0.05 * beta;
    letterPos.y += 0.05 * beta;


    // textSize(25);
    // text(letterPos.x, 100, 400);


    //글자 위치 결정하는 for문    
    for (var i = 0; i < letterArray.length; i++) {
        textAreaX = i % 4;
        // rowX = textAreaX * (letterWidth + letterSpacing);
        rowX = textAreaX * (letterPos.x + letterSpacing);

        //글자자소 생성 함수
        // 틸트폰트생성(letterArray[i], rowX, rowY, gamma); //1차
        글자레이아웃(letterArray[i], rowX, rowY, gamma); //2차
        
        //글자수에 따라 줄 변경 : 현재 3글자에 변경
        if (textAreaX === 3) {
            // rowY += (letterHeight + lineHeight);
            rowY += (letterPos.y + lineHeight);
        }
    }
    //위치값 초기화
    rowX = 0;
    rowY = 0;
} //end draw



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


//1에서는 글자()에 자소배열을
//2에서는 글자()에 자소만 넘겨준다.

function 글자(자소배열, tx, ty, g) {
  fill(0);
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



  // push();
  // translate(x, y);
  //글자 영역 : 글자만 그린다.

  for (var j = 0; j < 자소배열.length; j++) {
    var 자소 = 자소배열[j];
    if (자소 === 자소우) { 자소 = '우'; }

    switch (자소) {
      case 'ㄱ':
        if (j === 0) {
          push();
          translate(닿자위치.x, 닿자위치.y);
          한글['ㄱ']();
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
        한글['으'](g);
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
        console.log("글자기본값출력");
        우(횡적모음위치.x, 횡적모음위치.y);
        break;
    }  //end switch    
  } //end for()
  
  // pop();
}


//글자자소 생성 함수 --------------------------------------
function 틸트폰트생성(letter, tx, ty, g) {


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
  

        var disassemble = Hangul.disassemble(letter);

        //겹받침 체크후 자소배열을 곁받침형태로 변환
        var 겹받침인가 = 겹받침체크(disassemble);
        if (겹받침인가 === true) {
            var pushEl = 겹받침변환(disassemble);
            disassemble.push(pushEl);
        }
  

        //자소분리(disassemble)된 단위로 font함수 호출
        for (var j = 0; j < disassemble.length; j++) {
            var jaso = disassemble[j];
            if (jaso === 자소우) { jaso = '우'; }

            switch (jaso) {
            case 'ㄱ':
                if (j === 0) {
                    ㄱ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㄱ(받침위치.x, 받침위치.y);
                }
                break;
            case 'ㄴ':
                if (j === 0) {
                    ㄴ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㄴ(받침위치.x, 받침위치.y);
                }
                break;
            case 'ㄷ':
                if (j === 0) {
                    ㄷ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㄷ(받침위치.x, 받침위치.y);
                }
                break;
            case 'ㄹ':
                if (j === 0) {
                    ㄹ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㄹ(받침위치.x, 받침위치.y);
                }
                break;
            case 'ㅁ':
                if (j === 0) {
                    ㅁ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㅁ(받침위치.x, 받침위치.y);
                }
                break;
            case 'ㅂ':
                if (j === 0) {
                    ㅂ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㅂ(받침위치.x, 받침위치.y);
                }
                break;
            case 'ㅅ':
                if (j === 0) {
                    ㅅ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㅅ(받침위치.x, 받침위치.y);
                }
                break;
            case 'ㅇ':
                if (j === 0) {
                    ㅇ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㅇ(받침위치.x, 받침위치.y);
                }
                break;
            case 'ㅈ':
                if (j === 0) {
                    ㅈ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㅈ(받침위치.x, 받침위치.y);
                }
                break;
            case 'ㅊ':
                if (j === 0) {
                    ㅊ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㅊ(받침위치.x, 받침위치.y);
                }
                break;
            case 'ㅋ':
                if (j === 0) {
                    ㅋ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㅋ(받침위치.x, 받침위치.y);
                }
                break;
            case 'ㅌ':
                if (j === 0) {
                    ㅌ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㅌ(받침위치.x, 받침위치.y);
                }
                break;
            case 'ㅍ':
                if (j === 0) {
                    ㅍ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㅍ(받침위치.x, 받침위치.y);
                }
                break;
            case 'ㅎ':
                if (j === 0) {
                    ㅎ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㅎ(받침위치.x, 받침위치.y);
                }
                break;
            case 'bottom15':
                bottom15(받침위치.x, 받침위치.y);
                break;
            case 'bottom16':
                bottom16(받침위치.x, 받침위치.y);
                break;
            case 'bottom17':
                bottom17(받침위치.x, 받침위치.y);
                break;
            case 'bottom18':
                bottom18(받침위치.x, 받침위치.y);
                break;
            case 'bottom19':
                bottom19(받침위치.x, 받침위치.y);
                break;
            case 'bottom20':
                bottom20(받침위치.x, 받침위치.y);
                break;
            case 'bottom21':
                bottom21(받침위치.x, 받침위치.y);
                break;
            case 'bottom22':
                bottom22(받침위치.x, 받침위치.y);
                break;
            case 'bottom23':
                bottom23(받침위치.x, 받침위치.y);
                break;
            case 'bottom24':
                bottom24(받침위치.x, 받침위치.y);
                break;
            case 'bottom25':
                bottom25(받침위치.x, 받침위치.y);
                break;
            case 'ㄲ':
                if (j === 0) {
                    ㄲ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㄲ(받침위치.x, 받침위치.y);
                }
                break;
            case 'ㅆ':
                if (j === 0) {
                    ㅆ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㅆ(받침위치.x, 받침위치.y);
                }
                break;
            case 'ㅏ':
                아1(종적모음위치.x, 종적모음위치.y, g);
                break;
            case 'ㅑ':
                야1(종적모음위치.x, 종적모음위치.y, g);
                break;
            case 'ㅓ':
                어1(종적모음위치.x, 종적모음위치.y, g);
                break;
            case 'ㅕ':
                여1(종적모음위치.x, 종적모음위치.y, g);
                break;
            case 'ㅗ':
                오(횡적모음위치.x, 횡적모음위치.y, g);
                break;
            case 'ㅛ':
                요(횡적모음위치.x, 횡적모음위치.y, g);
                break;
            case '우':
                우(횡적모음위치.x, 횡적모음위치.y, g);
                break;
            case 'ㅠ':
                유(횡적모음위치.x, 횡적모음위치.y, g);
                break;
            case 'ㅡ':
                으(횡적모음위치.x, 횡적모음위치.y, g);
            case 'ㅣ':
                이1(종적모음위치.x, 종적모음위치.y, g);
                break;
            case 'ㅐ':
                애1(종적모음위치.x, 종적모음위치.y, g);
                break;
            case 'ㅒ':
                얘1(종적모음위치.x, 종적모음위치.y, g);
                break;
            case 'ㅔ':
                에1(종적모음위치.x, 종적모음위치.y, g);
                break;
            case 'ㅖ':
                예1(종적모음위치.x, 종적모음위치.y, g);
                break;

            case 'ㄹ':
                if (j === 0) {
                    ㄹ(닿자위치.x, 닿자위치.y);
                } else {
                    받침ㄹ(받침위치.x, 받침위치.y);
                }
                break;
            default:

                우(횡적모음위치.x, 횡적모음위치.y);
                break;
            }

        
    }

} //makeJaso end

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

//버튼 클릭 이벤트 : 클릭할때마다 현재 Input값을 바탕으로 다시 loop를 실행시킨다.
function redrawing() {
    var inputall = input.value();
    var inputSplit = inputall.split('');
    letterArray = inputSplit;
    background(255); //다시 그릴때 이전의 글자를 지움(덮어쓰기)
    loop();
}

// accelerometer Data
window.addEventListener('deviceorientation', function(e) 
{
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});
