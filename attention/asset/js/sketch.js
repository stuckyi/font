
// default values
var 알파 = 0, 베타 = 0, 감마 = 0;
var 자소이름리스트;
var 글자데이터;





/* 곁받침 자소 선언 : code로 인식하지 못하는 문제 해결방안 *** */ 
var 자소ㄱㅅ = Hangul.assemble(['ㄱ', 'ㅅ']), 자소ㄴㅈ = Hangul.assemble(['ㄴ', 'ㅈ']), 자소ㄴㅎ = Hangul.assemble(['ㄴ', 'ㅎ']), 자소ㄹㄱ = Hangul.assemble(['ㄹ', 'ㄱ']), 자소ㄹㅁ = Hangul.assemble(['ㄹ', 'ㅁ']), 자소ㄹㅂ = Hangul.assemble(['ㄹ', 'ㅂ']), 자소ㄹㅅ = Hangul.assemble(['ㄹ', 'ㅅ']), 자소ㄹㅌ = Hangul.assemble(['ㄹ', 'ㅌ']), 자소ㄹㅍ = Hangul.assemble(['ㄹ', 'ㅍ']), 자소ㄹㅎ = Hangul.assemble(['ㄹ', 'ㅎ']), 자소ㅂㅅ = Hangul.assemble(['ㅂ', 'ㅅ']), 자소우 = Hangul.disassemble('우')[1];



// 글자처리 변수
const MAX_TYPE = 2; // 최대 입력 가능 문자
const 사잇점개수 = 14; // 자소별기준점 사이에 추가할 사잇점의 수
var 사용자입력문자 = '꼬또'; // 사용자입력 기본값


//State Info
var isLoop = true;
var isTilt = false;


//Style
// var 자간 = 180, 행간 = 100;

// 데이터모델
var 글자데이터모델 = [];  // 글자데이터모델 
var 글자하나배열 = []; // 글자표현배열 (5개)
var 자소하나배열 = []; // 전체 자소배열
var 캐릭터배열 = []; // 캐릭터 표현 변수
var 캐릭터라인배열 = []; // 캐릭터 표현 변수



// 설정 : P5 DOM Element 
var 요소위치 = {
   
};

var 스타일 = {};






function setup() {

    스타일적용();

    var mainCanvas = createCanvas(1200, 1000); // 캔버스 생성
    mainCanvas.position(요소위치.캔버스위치); //캔버스 위치 이동

    background(스타일.배경색);
    frameRate(20);
    
    
    
    /**
    * 사잇점 생성 및 글자데이터 초기화
    * 1.자소기준점리스트 기반으로 사잇점을  n개 생성 후, 
    * 2.자소이름리스트 기반으로 매칭 후
    * 3.전역객체인 '글자데이터'에 저장 /////// 아아아아아아아아말도안돼
    **/
    
    글자데이터생성(사잇점개수); 
    업데이트();
    
    

    //UI 생성
    makeDomElement('input'); 
    makeDomElement('button');
    
    
    
    console.log("입력된 글자 수 : " + 글자하나배열.length);   // = 글자하나배열 길이
    console.log("입력된 자소 수 : " + 자소하나배열.length);   // = 자소하나배열 길이
    console.log("생성된 캐릭터 수  : " + 캐릭터배열.length);      // = 캐릭터배열 길이

}





function draw() {
    var 배경색 = (isTilt)? 스타일.배경색_틸트 : 스타일.배경색; // 틸트상태 정보에따라 배경색 결정
    background(배경색, 50);

    틸트상태업데이트(감마); //디바이스의 감마값으로 틸트액션 ON/OFF

    for (var value of 캐릭터배열) {
        value.업데이트(베타, 감마);
        value.그리기();
        value.움직임();
    }
}



//버튼 클릭 이벤트 : 클릭할때마다 현재 Input값을 바탕으로 다시 loop를 실행시킨다.
function redrawing() {
    var 덮어쓰기배경색 = (isTilt)? 스타일.배경색_틸트 : 스타일.배경색;
    사용자입력문자 = input.value();  // 새로입력된 입력문자로 변경
    background(덮어쓰기배경색);      // 이전의 글자를 지움(덮어쓰기)
    업데이트();                    // 사용자입력글자로 글자데이터 업데이트
    loop();                     //  루프 실행
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


//상태 및 데이터 업데이트 함수
function 업데이트() {
    console.log("업데이트!");
    console.log("현재 사용자입력문자 : " + 사용자입력문자);
    
    getLetter(사용자입력문자); //글자배열 얻기
    for (var i = 0; i < 글자하나배열.length; i++){
        글자하나배열[i].init();
    }
    for (var i = 0; i < 자소하나배열.length; i++){
        자소하나배열[i].init();
    }
    for (var i = 0; i < 캐릭터배열.length; i++){
        캐릭터배열[i].그리기();
    }
    
    for (var i = 0; i < 캐릭터라인배열.length; i++){
        캐릭터라인배열[i].그리기();
    }
}

//기본 스타일, DOM Element의 위치 적용함수
function 스타일적용() {

    //P5 스타일
    스타일.자간 = 180;
    스타일.행간 = 100;
    스타일.배경색 = 0;
    스타일.배경색_틸트 = color('hsl(2, 100%, 78%)');
    스타일.몬스터색상_기본 = color('hsl(200,30%,60%)'); //기본몸색
    스타일.몬스터색상_랜덤 = [
        color('hsl(149, 100%, 39%)'),
        color('hsl(46, 100%, 54%)'),
        color('hsl(13, 100%, 84%)'),
        color('hsl(278, 19%, 74%)'),
        color('hsl(51, 62%, 85%)'),
        color('hsl(67, 63%, 49%)'),
        color('hsl(161, 49%, 58%)')
    ];
    
    //DOM Elment 위치
    요소위치.캔버스위치 = { x: 0, y: 100 };
    요소위치.버튼위치 = { x: 255, y: 55 };
    요소위치.입력창위치 = { x: 50, y: 55 };
    요소위치.마진 = { 왼쪽: 2 };
}


/* 스투키스튜디오 Coded-font class */
class 글자하나{
    constructor(글자별자소배열, 글자인덱스) {
        this.글자별자소배열 = 글자별자소배열;
        this.글자인덱스 = 글자인덱스;
    }

    //객체 데이터 초기화  
    //입력데이터로 객체데이터를 업데이트한다.
    init() {
        var 글자별자소배열 = this.글자별자소배열;

        for (var i = 0; i < 글자별자소배열.length; i++){
            var 자소이름 = 글자별자소배열[i] + '';
            var 자소배열 = 자소모델설정(자소이름);
            var 글자속자소인덱스 = i;
            var 객체자소 = new 자소하나(자소배열, this.글자인덱스, 글자속자소인덱스, 자소이름); 
            
            자소하나배열.push(객체자소);
        }
    }

}

class 자소하나{
    constructor(글자하나자소배열, 글자인덱스, 글자속자소인덱스, 자소이름) {
        this.글자하나자소배열 = 글자하나자소배열;
        this.글자인덱스 = 글자인덱스;
        this.글자속자소인덱스 = 글자속자소인덱스;
        this.자소이름 = 자소이름;
        this.자소하나점배열;

    }

    init() {
        var 글자속자소인덱스 = this.글자속자소인덱스;
        var 글자하나자소배열 = (this.글자하나자소배열 === undefined)? [{x:0, y:0}] : this.글자하나자소배열;
        
        var 글자하나자소배열그룹 = d3.pairs(글자하나자소배열); //인접쌍으로 배열을만들기
        
        var 글자이동점 = 글자이동점얻기(this.글자인덱스);
        var 자소이동점 = 자소이동점얻기(this.자소이름, 글자속자소인덱스, 글자이동점);
        var 자소타입 = 자소타입얻기(this.자소이름, 글자속자소인덱스, 글자이동점);
    
        
        //몬스터객체 초기화
        for (var i = 0; i < 글자하나자소배열.length; i++){
            var 캐릭터 = new 몬스터B(글자하나자소배열[i], 글자이동점, 자소이동점, 자소타입);
            캐릭터배열.push(캐릭터);
        }

        
    }
}




//개발함수 : 루프정지
function keyPressed() {
    var worktime = "" + year() + ". " + month() + ". " + day() + ". ";

    switch (keyCode) {
        case 67:
            //C
            changeLoop();
            break;
        case 68:
            //D
            changeSituation();
            break;
        case 83:
            //S
            changeTilt_PC();
            break;
        default:
            console.log("keyPressd. but nothing happend.")
            break;
    }
    //Loop ON/OFF
    function changeLoop() {
        if (isLoop) {
            console.log("noLoop()");
            noLoop();
            isLoop = false;
        } else {
            console.log("loop()");
            loop();
            isLoop = true;
        }
    }

    function changeTilt_PC() {
        if (isTilt) {
            isTilt = false;
            console.log("ㅜnot tilt");
        } else if (!isTilt) {
            isTilt = true;
            console.log("tilt");
        }   
    }

    function changeSituation() {
        console.log("changeSituation");
    }
    
}



function 틸트상태업데이트(gamma) {

    var deviceAngle = abs(gamma);

    
    if (isTilt && (deviceAngle < 70) ){
        isTilt = false;
        console.log("틸트해제");
    } else if (!isTilt && (deviceAngle > 70) ) {
        isTilt = true;
        console.log("틸트동작");
    }   
}


// 스마트폰 가속도계 데이터 accelerometer Data
window.addEventListener('deviceorientation', function(e) 
{
  알파 = e.alpha;
  베타 = e.beta;
  감마 = e.gamma;
});




