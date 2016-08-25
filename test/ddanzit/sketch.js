console.log("sketch.js");
//로딩 후 가장 처음에 보일 글자들
var letterArray = ["헤", "쳐", "모", "여", "모", "여", "헤", "쳐"]; 
var state = { currentX: 0, currentY: 0 };
var textAreaX, textAreaY = 0; //글자 영역 결정 전역변수
var rowX, rowY = 0;  //글자 위치 결정 전역변수
var input, button, greeting, div;

 

// default values
var xpos = 200, ypos = 200, 알파 = 0, 베타 = 0, 감마 = 0;

/* SET : P5 DOM Element *** */
var 요소위치 = {
    canvasX: 0, canvasY: 140,
    inputX: 50, inputY: 55,
    btnX: 255, btnY: 55
};

var 글자위치 = { x: 60, y: 150 };
//데이터 모델
var 모델 = {
자소이름 : ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ','얇은ㄱ','얇은ㄴ','얇은ㄷ','얇은ㄹ','얇은ㅁ','얇은ㅂ','얇은ㅅ','얇은ㅈ','얇은ㅌ','얇은ㅍ','얇은ㅎ','오','요','우','유','으','아','야','어','여','이','애','얘','에','예']
};
var 글자데이터객체 = {}; //자소별 사잇점 배열을 저장하는 객체
var 글자데이터배열 = []; //자소별 사잇점 배열을 저장하는 배열리스트. 39개(현재 자소 수)



function setup() {
  console.log("start setup()");
    
    //캔버스 생성 및 변수에 할당
    var mainCanvas = createCanvas(windowWidth, 5000);
    mainCanvas.position(요소위치.canvasX, 요소위치.canvasY); //캔버스 기준점 변경
    

    //Canvas default style
    setStyle(); 
  

    //User Interface
    makeDomElement('input'); 
    makeDomElement('button');
  


    noLoop();
}





function draw() {
    background(255);
    //글자크기 변수
    // letterWidth = letterWidth + 0.1 * 베타;
    // letterHeight = letterHeight + 0.1 * 베타;

    //글자 위치 변수
    글자위치.x += 0.05 * 베타;
    글자위치.y += 0.05 * 베타;

    //글자 위치 결정하는 for문    
    for (var i = 0; i < letterArray.length; i++) {
        textAreaX = i % 4;
        // rowX = textAreaX * (letterWidth + letterSpacing);
        rowX = textAreaX * (글자위치.x + letterSpacing);

        글자레이아웃(letterArray[i], rowX, rowY, 감마); //2차
        
        //글자수에 따라 줄 변경 : 현재 3글자에 변경
        if (textAreaX === 3) {
            rowY += (글자위치.y + lineHeight);
        }
    }
    //위치값 초기화
    rowX = 0;
    rowY = 0;
} //end draw







/* **** 글자레이아웃, 글자 ****************************** */

// 글자 레이아웃 생성
function 글자레이아웃(letter, tx, ty, g) {  
  var 자소배열추출 = Hangul.disassemble(letter); //글자2자소단위 분리
  //겹받침 체크후 자소배열을 곁받침형태로 변환
  var 겹받침인가 = 겹받침체크(자소배열추출);
  if (겹받침인가 === true) {
      var pushEl = 겹받침변환(자소배열추출);
      자소배열추출.push(pushEl);
  }
  글자(자소배열추출, tx, ty, g); //글자함수에 자소배열과 파라미터를 넘겨준다.
}





// 글자 생성
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










/* **** 스타일, DOM Elment 생성 ****************************** */

function setStyle() {
    //캔버스 기본 스타일 설정
    colorMode(HSL);
    strokeJoin(ROUND);
    // strokeWeight(10);
    // noFill();
}
//P5로 DOM Element를 생성
function makeDomElement(elName) {

  switch (elName) {
    case 'input':
      makeInput();
      break;
    case 'button':
      makeButton();
      break;
    default:
      console.log("none dom element.");
      break;
  }

  function makeInput() {
    //Input 설정    
    input = createInput(); //생성
    input.addClass('form-control'); //클래스 부여
    input.size(200, 40); //크기
    input.position(요소위치.inputX, 요소위치.inputY); //위치
    //   input.hide();
  }

  function makeButton() {
    //Button 설정 
    button = createButton('글자생성'); //생성
    button.position(요소위치.btnX, 요소위치.btnY); //위치
    button.mousePressed(redrawing); //마우스 클릭시 이벤트함수 호출
    button.addClass('btn btn-default'); //클래스 부여
  }
}


//버튼 클릭 이벤트 : 클릭할때마다 현재 Input값을 바탕으로 다시 loop를 실행시킨다.
function redrawing() {
  var inputall = input.value();
  var inputSplit = inputall.split('');
  letterArray = inputSplit;
  background(255); //다시 그릴때 이전의 글자를 지움(덮어쓰기)
  loop();
}


//개발함수 : 루프정지
function mousePressed() {
  noLoop();
  console.log("noLoop");
}



// 스마트폰 가속도계 데이터 accelerometer Data
window.addEventListener('deviceorientation', function(e) {
  알파 = e.alpha;
  베타 = e.beta;
  감마 = e.gamma;
});

