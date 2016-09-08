
var letterArray = ["자", "동", "생", "성", "해", "주", "세", "요"]; // 로딩 후 가장 처음에 보일 글자들
var state = { currentX: 0, currentY: 0 };
var textAreaX, textAreaY = 0; //글자 영역 결정 전역변수
var rowX, rowY = 0;  //글자 위치 결정 전역변수
var input, button, greeting, div;

//곁받침자소 변수선언 : code로 인식하지 못하기 때문 
var 자소ㄱㅅ = Hangul.assemble(['ㄱ', 'ㅅ']), 자소ㄴㅈ = Hangul.assemble(['ㄴ', 'ㅈ']), 자소ㄴㅎ = Hangul.assemble(['ㄴ', 'ㅎ']), 자소ㄹㄱ = Hangul.assemble(['ㄹ', 'ㄱ']), 자소ㄹㅁ = Hangul.assemble(['ㄹ', 'ㅁ']), 자소ㄹㅂ = Hangul.assemble(['ㄹ', 'ㅂ']), 자소ㄹㅅ = Hangul.assemble(['ㄹ', 'ㅅ']), 자소ㄹㅌ = Hangul.assemble(['ㄹ', 'ㅌ']), 자소ㄹㅍ = Hangul.assemble(['ㄹ', 'ㅍ']), 자소ㄹㅎ = Hangul.assemble(['ㄹ', 'ㅎ']), 자소ㅂㅅ = Hangul.assemble(['ㅂ', 'ㅅ']), 자소우 = Hangul.disassemble('우')[1];

//캔버스, Input, Button 요소의 위치 설정객체
var elPos = {
    canvasX: 0, canvasY: 140,
    inputX: 50, inputY: 55,
    btnX: 255, btnY: 55
};

var letterPos = { x: 60, y: 150 };


var 요소위치 = {};
var 스타일 = {};

function 스타일지정() {
    //P5 스타일
    스타일.frameColor = (60,90,70);
    스타일.frameStrokeWeight = 2;

    스타일.선색상_기본 = 255;
    스타일.선색상_외곽 = 0;
    스타일.선굵기_기본 = 10;
    스타일.선굵기_외곽 = 20;


    //DOM Elment 위치
    요소위치.캔버스위치 = { x: 0, y: 100 };
    요소위치.버튼위치 = { x: 255, y: 55 };
    요소위치.입력창위치 = { x: 50, y: 55 };
    요소위치.마진 = { 왼쪽: 2 };



    //캔버스 기본 스타일 설정
    colorMode(HSL);
    strokeJoin(ROUND);
    fill(0);
}



function setup() {
    스타일지정();
    //캔버스 생성 및 변수에 할당
    var mainCanvas = createCanvas(800, 1000);
    mainCanvas.position(요소위치.캔버스위치.x, 요소위치.캔버스위치.y); //캔버스 위치
    


    //UI 생성
    makeDomElement('input'); 
    makeDomElement('button');
    
}

function draw() {
    background(255);
    //글자크기 변수
    // letterWidth = letterWidth + 0.1 * beta;
    // letterHeight = letterHeight + 0.1 * beta;

    //글자 위치 변수
    // letterPos.x += 0.05 * beta;
    // letterPos.y += 0.05 * beta;

    //글자 위치 결정하는 for문    
    for (var i = 0; i < letterArray.length; i++) {
        textAreaX = i % 4;
        rowX = textAreaX * (letterWidth + letterSpacing);

        //글자자소 생성 함수
        틸트폰트생성(letterArray[i], rowX, rowY, gamma);
        
        //글자수에 따라 줄 변경 : 현재 3글자에 변경
        if (textAreaX === 3) {
            rowY += (letterHeight + lineHeight);
        }
    }
    //위치값 초기화
    rowX = 0;
    rowY = 0;
} //end draw





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
      console.log("생성할 DOM Element 타입이 적절하지 않습니다.");
      break;
  }

  function makeInput() {
    //Input 설정    
    input = createInput();                              //생성
    input.addClass('form-control');                     //클래스 부여
    input.size(200, 40);                                //크기
    input.position(요소위치.입력창위치.x, 요소위치.입력창위치.y); //위치
    //   input.hide();                  
  }

  function makeButton() {
    //Button 설정 
    button = createButton('글자생성');                   //생성
    button.position(요소위치.버튼위치.x, 요소위치.버튼위치.y);  //위치
    button.mousePressed(redrawing);                    //클릭시 이벤트함수 호출
    button.addClass('btn btn-default');                //클래스 부여
  }
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
                break;
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



function 이미지저장() {
    save(letterArray + "");
}