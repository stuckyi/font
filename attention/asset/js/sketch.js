
// default values
var 알파 = 0, 베타 = 0, 감마 = 0;
var 자소이름리스트;
// var 자소기준점리스트;
var 글자데이터;




/* 곁받침 자소 선언 : code로 인식하지 못하는 문제 해결방안 *** */ 
var 자소ㄱㅅ = Hangul.assemble(['ㄱ', 'ㅅ']), 자소ㄴㅈ = Hangul.assemble(['ㄴ', 'ㅈ']), 자소ㄴㅎ = Hangul.assemble(['ㄴ', 'ㅎ']), 자소ㄹㄱ = Hangul.assemble(['ㄹ', 'ㄱ']), 자소ㄹㅁ = Hangul.assemble(['ㄹ', 'ㅁ']), 자소ㄹㅂ = Hangul.assemble(['ㄹ', 'ㅂ']), 자소ㄹㅅ = Hangul.assemble(['ㄹ', 'ㅅ']), 자소ㄹㅌ = Hangul.assemble(['ㄹ', 'ㅌ']), 자소ㄹㅍ = Hangul.assemble(['ㄹ', 'ㅍ']), 자소ㄹㅎ = Hangul.assemble(['ㄹ', 'ㅎ']), 자소ㅂㅅ = Hangul.assemble(['ㅂ', 'ㅅ']), 자소우 = Hangul.disassemble('우')[1];



// 글자처리 변수
const MAX_TYPE = 5; // 최대 입력 가능 문자
const 사잇점개수 = 4;
var 사용자입력문자 = '간단하게용'; // 사용자입력 기본값
var isLoop = true;
var isTilt = false;


var 자간 = 140, 행간 = 100;

// 데이터모델
var 글자데이터모델 = [];  // 글자데이터모델 
var 글자하나배열 = []; // 글자표현배열 (5개)
var 자소하나배열 = []; // 전체 자소배열
var 캐릭터배열 = []; // 캐릭터 표현 변수
var 캐릭터라인배열 = []; // 캐릭터 표현 변수



// 설정 : P5 DOM Element 
var 요소위치 = {
    캔버스위치: { x: 100, y: 100 },
    버튼위치: { x: 255, y: 55 },
    입력창위치: { x: 50, y: 55 },
    마진 : { 왼쪽 : 10 }
};

var 스타일 = {
    배경색: 0
};








function setup() {

    var mainCanvas = createCanvas(1200, 1000); // 캔버스 생성
    mainCanvas.position(요소위치.캔버스위치); //캔버스 위치 이동
    background(스타일.배경색);
    frameRate(20);
    fill(0, 30);
    
    /**
    * 사잇점 생성 및 글자데이터 초기화
    * 1.자소기준점리스트 기반으로 사잇점을  n개 생성 후, 
    * 2.자소이름리스트 기반으로 매칭 후
    * 3.전역객체인 '글자데이터'에 저장
    **/
    
    사잇점생성(사잇점개수); 
    업데이트();
    
    

    //UI 생성
    makeDomElement('input'); 
    makeDomElement('button');
    
    
    
    console.log("입력된 글자 수 : " + 글자하나배열.length);   // = 글자하나배열 길이
    console.log("입력된 자소 수 : " + 자소하나배열.length);   // = 자소하나배열 길이
    console.log("생성된 캐릭터 수  : " + 캐릭터배열.length);      // = 캐릭터배열 길이

//    noLoop();
//    isLoop =false;
}

function draw() {
    background(스타일.배경색, 50);
    
    
    for (var value of 캐릭터배열) {
        value.업데이트(베타, 감마);
        value.그리기();
        value.움직임(); //몬스터객체사용시
    }
    
    /*
    for (var value of 캐릭터라인배열) {
        value.업데이트(베타, 감마);
        value.그리기();
    }
    */
}



//버튼 클릭 이벤트 : 클릭할때마다 현재 Input값을 바탕으로 다시 loop를 실행시킨다.
function redrawing() {
    사용자입력문자 = input.value();  // 새로입력된 입력문자로 변경
    background(스타일.배경색);         // 이전의 글자를 지움(덮어쓰기)
    업데이트();                    // 사용자입력글자로 글자데이터 업데이트
    loop();                     //  루프 실행
}





function 모음변환(자소이름) {

    if (자소이름 === 'ㅏ') { return '아'; }
    else if (자소이름 === 'ㅑ') { return '야'; }
    else if (자소이름 === 'ㅓ') { return '어'; }
    else if (자소이름 === 'ㅕ') { return '여'; }
    else if (자소이름 === 'ㅗ') { return '오'; }
    else if (자소이름 === 'ㅛ') { return '요'; }
    else if (자소이름 === 'ㅠ') { return '유'; }
    else if (자소이름 === 'ㅡ') { return '으'; }
    else if (자소이름 === 'ㅣ') { return '이'; }
    else if (자소이름 === 'ㅐ') { return '애'; }
    else if (자소이름 === 'ㅒ') { return '얘'; }
    else if (자소이름 === 'ㅔ') { return '에'; }
    else if (자소이름 === 'ㅖ') { return '예'; }
    else { console.log("모음변환() : " + 자소이름);  return '우'; }
}

// 글자데이터 모델을 만든다.
function getLetter(letterString) {
    
    글자하나배열 = [];
    자소하나배열 = [];
    캐릭터배열 = [];
    
    var 사용자입력문장분할 = letterString.split('');
    if (사용자입력문장분할.length < MAX_TYPE) {
        
        var 부족한글자수 = MAX_TYPE - 사용자입력문장분할.length;
        for (var i = 0; i < 부족한글자수; i++){
            사용자입력문장분할.push(' ');
        }
    }
    

    
    for (var i = 0; i < 사용자입력문장분할.length; i++){
        사용자입력문장분할[i] = Hangul.disassemble(사용자입력문장분할[i]);



        //겹받침 체크후 자소배열을 곁받침형태로 변환
        var 겹받침인가 = 겹받침체크(사용자입력문장분할[i]);
        if (겹받침인가 === true) {
            var pushEl = 겹받침변환(사용자입력문장분할[i]);
            사용자입력문장분할[i].push(pushEl);
        }

        if (사용자입력문장분할[i].length === 1 && 사용자입력문장분할[i][0] === ' ') {
            console.log("공백정정!");
            사용자입력문장분할[i] = [' ', ' ', ' '];
        } else {
        
        }
        

        for (var j = 0; j < 사용자입력문장분할[i].length; j++){
            if (Hangul.isVowel(사용자입력문장분할[i][j])) {
                사용자입력문장분할[i][j] = 모음변환(사용자입력문장분할[i][j]);
            }
        }
    }
    
    var 글자데이터모델 = 사용자입력문장분할;
    
    
    var 글자간격 = 500; //임의값
    var 공백자소배열 = [' ', ' ', ' '];
    // 글자객체 생성 후 글자표현배열에 추가
    for (var i = 0; i < MAX_TYPE; i++){
        var 글자인덱스 = i;
        var 글자별자소배열 = (글자데이터모델[i] === undefined) ? 공백자소배열 : 글자데이터모델[i];

        var 글자객체 = new 글자하나(글자별자소배열, 글자인덱스);
        글자하나배열[i] = 글자객체;
    }
    
}

function 글자이동점얻기(인덱스) {
    var 초기시작점 = 요소위치.마진.왼쪽; //첫글자시작위치 (x)

    var 글자이동점 = {};
    switch (인덱스) {
        case 0: 글자이동점 = { x: 초기시작점, y: 행간*1 }; break;
        case 1: 글자이동점 = { x: 초기시작점 + 자간*1, y: 행간*1 }; break;
        case 2: 글자이동점 = { x: 초기시작점 + 자간*2, y: 행간*1 }; break;
        case 3: 글자이동점 = { x: 초기시작점 + 자간*3, y: 행간*1 }; break;
        case 4: 글자이동점 = { x: 초기시작점 + 자간*4, y: 행간*1 }; break;
        default:
            console.error("글자이동점얻기(인덱스) notfound err");
            글자이동점 = { x: 자간*5, y: 행간*5 };
            break;
    }
    return 글자이동점;
}

function 자소이동점얻기(자소이름, 자소인덱스, 글자이동점객체) {
    var g = 0; //틸트사용하지않음
    


    
    //각 자소타입별 위치
    var 닿자위치 = { x: 글자이동점객체.x + g, y: 글자이동점객체.y + m1 },
        종적모음위치 = { x: 글자이동점객체.x + m2, y: 글자이동점객체.y },
        횡적모음위치 = { x: 글자이동점객체.x, y: 글자이동점객체.y + m3 },
        받침위치 = { x: 글자이동점객체.x + g, y: 글자이동점객체.y + m4 };
    

    switch (자소이름) {
        case 'ㄱ': return (자소인덱스 === 0)? 닿자위치 : 받침위치; 
        case 'ㄴ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치; 
        case 'ㄷ': return (자소인덱스 === 0)? 닿자위치 : 받침위치; 
        case 'ㄹ': return (자소인덱스 === 0)? 닿자위치 : 받침위치; 
        case 'ㅁ': return (자소인덱스 === 0)? 닿자위치 : 받침위치; 
        case 'ㅂ': return (자소인덱스 === 0)? 닿자위치 : 받침위치; 
        case 'ㅅ': return (자소인덱스 === 0)? 닿자위치 : 받침위치; 
        case 'ㅇ': return (자소인덱스 === 0)? 닿자위치 : 받침위치; 
        case 'ㅈ': return (자소인덱스 === 0)? 닿자위치 : 받침위치; 
        case 'ㅊ': return (자소인덱스 === 0)? 닿자위치 : 받침위치; 
        case 'ㅋ': return (자소인덱스 === 0)? 닿자위치 : 받침위치; 
        case 'ㅌ': return (자소인덱스 === 0)? 닿자위치 : 받침위치; 
        case 'ㅍ': return (자소인덱스 === 0)? 닿자위치 : 받침위치; 
        case 'ㅎ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치; 
        case 'ㄱㅅ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치; 
        case 'ㄴㅈ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치; 
        case 'ㄴㅎ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치; 
        case 'ㄹㄱ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치; 
        case 'ㄹㅂ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치; 
        case 'ㄹㅅ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치; 
        case 'ㄹㅌ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치; 
        case 'ㄹㅍ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치; 
        case 'ㄹㅎ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치; 
        case 'ㅂㅅ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치;     
        case '얇은ㄱ': return 받침위치; 
        case '얇은ㄴ': return 받침위치; 
        case '얇은ㄷ': return 받침위치; 
        case '얇은ㄹ': return 받침위치; 
        case '얇은ㅁ': return 받침위치; 
        case '얇은ㅂ': return 받침위치; 
        case '얇은ㅅ': return 받침위치; 
        case '얇은ㅈ': return 받침위치; 
        case '얇은ㅌ': return 받침위치; 
        case '얇은ㅍ': return 받침위치; 
        case '얇은ㅎ': return 받침위치; 
        case '아': return 종적모음위치; 
        case '야': return 종적모음위치; 
        case '어': return 종적모음위치; 
        case '여': return 종적모음위치; 
        case '오': return 횡적모음위치; 
        case '요': return 횡적모음위치; 
        case '우': return 횡적모음위치; 
        case '유': return 횡적모음위치; 
        case '으': return 횡적모음위치; 
        case '이': return 종적모음위치; 
        case '애': return 종적모음위치; 
        case '예': return 종적모음위치; 
        case '에': return 종적모음위치; 
        case '예': return 종적모음위치; 
        case ' ': return 닿자위치; 
        case 'ㄲ': return (자소인덱스 === 0) ?  닿자위치 : 받침위치; 
        case 'ㅆ': return (자소인덱스 === 0) ?  닿자위치 : 받침위치; 
        case 'ㅉ': return (자소인덱스 === 0) ?  닿자위치 : 받침위치; 
            
        default:
            console.error("자소이동점얻기(인덱스) notfound err : " + 자소이름);
            return 닿자위치;        
    }
    
}

function 자소타입얻기(자소이름, 자소인덱스, 글자이동점객체) {
    var g = 0; //틸트사용하지않음
    
    switch (자소이름) {
        case 'ㄱ': return (자소인덱스 === 0)? "닿자" : "받침"; 
        case 'ㄴ': return (자소인덱스 === 0) ? "닿자" : "받침"; 
        case 'ㄷ': return (자소인덱스 === 0)? "닿자" : "받침"; 
        case 'ㄹ': return (자소인덱스 === 0)? "닿자" : "받침"; 
        case 'ㅁ': return (자소인덱스 === 0)? "닿자" : "받침"; 
        case 'ㅂ': return (자소인덱스 === 0)? "닿자" : "받침"; 
        case 'ㅅ': return (자소인덱스 === 0)? "닿자" : "받침"; 
        case 'ㅇ': return (자소인덱스 === 0)? "닿자" : "받침"; 
        case 'ㅈ': return (자소인덱스 === 0)? "닿자" : "받침"; 
        case 'ㅊ': return (자소인덱스 === 0)? "닿자" : "받침"; 
        case 'ㅋ': return (자소인덱스 === 0)? "닿자" : "받침"; 
        case 'ㅌ': return (자소인덱스 === 0)? "닿자" : "받침"; 
        case 'ㅍ': return (자소인덱스 === 0)? "닿자" : "받침"; 
        case 'ㅎ': return (자소인덱스 === 0) ? "닿자" : "받침"; 
        case 'ㄱㅅ': return (자소인덱스 === 0) ? "닿자" : "받침"; 
        case 'ㄴㅈ': return (자소인덱스 === 0) ? "닿자" : "받침"; 
        case 'ㄴㅎ': return (자소인덱스 === 0) ? "닿자" : "받침"; 
        case 'ㄹㄱ': return (자소인덱스 === 0) ? "닿자" : "받침"; 
        case 'ㄹㅂ': return (자소인덱스 === 0) ? "닿자" : "받침"; 
        case 'ㄹㅅ': return (자소인덱스 === 0) ? "닿자" : "받침"; 
        case 'ㄹㅌ': return (자소인덱스 === 0) ? "닿자" : "받침"; 
        case 'ㄹㅍ': return (자소인덱스 === 0) ? "닿자" : "받침"; 
        case 'ㄹㅎ': return (자소인덱스 === 0) ? "닿자" : "받침"; 
        case 'ㅂㅅ': return (자소인덱스 === 0) ? "닿자" : "받침";     
        case '얇은ㄱ': return "받침"; 
        case '얇은ㄴ': return "받침"; 
        case '얇은ㄷ': return "받침"; 
        case '얇은ㄹ': return "받침"; 
        case '얇은ㅁ': return "받침"; 
        case '얇은ㅂ': return "받침"; 
        case '얇은ㅅ': return "받침"; 
        case '얇은ㅈ': return "받침"; 
        case '얇은ㅌ': return "받침"; 
        case '얇은ㅍ': return "받침"; 
        case '얇은ㅎ': return "받침"; 
        case '아': return "종적모음"; 
        case '야': return "종적모음"; 
        case '어': return "종적모음"; 
        case '여': return "종적모음"; 
        case '오': return "횡적모음"; 
        case '요': return "횡적모음"; 
        case '우': return "횡적모음"; 
        case '유': return "횡적모음"; 
        case '으': return "횡적모음"; 
        case '이': return "종적모음"; 
        case '애': return "종적모음"; 
        case '예': return "종적모음"; 
        case '에': return "종적모음"; 
        case '예': return "종적모음"; 
        case ' ': return "받침"; 
        case 'ㄲ': return (자소인덱스 === 0) ?  "닿자" : "받침"; 
        case 'ㅆ': return (자소인덱스 === 0) ?  "닿자" : "받침"; 
        case 'ㅉ': return (자소인덱스 === 0) ?  "닿자" : "받침"; 
            
        default:
            console.error("자소이동점얻기(인덱스) notfound err : " + 자소이름);
            return "닿자";        
    }
    
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
        var 글자하나자소배열 = this.글자하나자소배열;
        var 글자하나자소배열그룹 = d3.pairs(글자하나자소배열); //인접쌍으로 배열을만들기
        
        var 글자이동점 = 글자이동점얻기(this.글자인덱스);
        var 자소이동점 = 자소이동점얻기(this.자소이름, 글자속자소인덱스, 글자이동점);
        var 자소타입 = 자소타입얻기(this.자소이름, 글자속자소인덱스, 글자이동점);
        
        /*
        //라인객체 초기화
        for(var i = 0; i < 글자하나자소배열그룹.length; i++){
            var 캐릭터 = new 캐릭터라인(글자하나자소배열그룹[i], 글자이동점, 자소이동점, 자소타입);
            캐릭터라인배열.push(캐릭터);
        }

        */

        


        
        //몬스터객체 초기화
        for (var i = 0; i < 글자하나자소배열.length; i++){
            var 랜덤값 = Math.round(Math.random(1)); //0 or 1

            var 캐릭터 = (랜덤값 === 0)
                ? new 몬스터B(글자하나자소배열[i], 글자이동점, 자소이동점, 자소타입)
                : new 몬스터B(글자하나자소배열[i], 글자이동점, 자소이동점, 자소타입);
            
            캐릭터배열.push(캐릭터);
        }

        
        /*
        //점 객체 초기화
        for (var i = 0; i < 글자하나자소배열.length; i++){
            var 캐릭터 = new 캐릭터하나(글자하나자소배열[i], 글자이동점, 자소이동점, 자소타입);
            캐릭터배열.push(캐릭터);
        }
        */
    }
}


/*
class 캐릭터하나 {
    constructor(시작점, 글자이동점, 자소이동점, 자소타입) {
        this.시작점 = 시작점;
        this.글자이동점 = 글자이동점;
        this.자소이동점 = 자소이동점;
        this.자소타입 = 자소타입;
        
        this.g = 0;
        this.b = 0;
        // 개선필요
        this.닿자위치 = { x: 글자이동점.x + this.g, y: 글자이동점.y + m1 + this.b },
        this.종적모음위치 = { x: 글자이동점.x + m2 + this.g, y: 글자이동점.y + this.b },
        this.횡적모음위치 = { x: 글자이동점.x + this.g, y: 글자이동점.y + m3 + this.b },
        this.받침위치 = { x: 글자이동점.x + this.g, y: 글자이동점.y + m4 + this.b };
        
    }
    
    업데이트(b, g){
        this.g = g;
        this.b = b;
        // 개선필요
        this.닿자위치 = { x: this.글자이동점.x + this.g, y: this.글자이동점.y + m1 + this.b },
        this.종적모음위치 = { x: this.글자이동점.x + m2 + this.g, y: this.글자이동점.y + this.b},
        this.횡적모음위치 = { x: this.글자이동점.x + this.g, y: this.글자이동점.y + m3 + this.b},
        this.받침위치 = { x: this.글자이동점.x + this.g, y: this.글자이동점.y + m4 + this.b};
        
        
    }
    그리기() {
       
        var 글자단위이동점 = this.글자이동점;
        var 자소단위이동점;
        
        if (this.자소타입 === "닿자") { 자소단위이동점 = this.닿자위치; }
        else if (this.자소타입 === "받침") { 자소단위이동점 = this.받침위치; }
        else if (this.자소타입 === "횡적모음") { 자소단위이동점 = this.횡적모음위치; }
        else if (this.자소타입 === "종적모음") { 자소단위이동점 = this.종적모음위치; }
        
        push();
        translate(글자단위이동점.x, 글자단위이동점.y);
        translate(자소단위이동점.x, 자소단위이동점.y);

        noStroke();
        fill(0);
        ellipse(this.시작점.x+2, this.시작점.y+2, 20, 20);
        fill(242, 248, 76);
        ellipse(this.시작점.x, this.시작점.y, 20, 20);
        
        pop();
        
    }

}



class 캐릭터라인 {
    constructor(시작점, 글자이동점, 자소이동점, 자소타입) {
        this.시작점 = 시작점;
        this.글자이동점 = 글자이동점;
        this.자소이동점 = 자소이동점;
        this.자소타입 = 자소타입;
        
        this.g = 0;
        this.b = 0;
        // 개선필요
        this.닿자위치 = { x: 글자이동점.x + this.g, y: 글자이동점.y + m1 + this.b },
        this.종적모음위치 = { x: 글자이동점.x + m2 + this.g, y: 글자이동점.y + this.b },
        this.횡적모음위치 = { x: 글자이동점.x + this.g, y: 글자이동점.y + m3 + this.b },
        this.받침위치 = { x: 글자이동점.x + this.g, y: 글자이동점.y + m4 + this.b };
        
    }
    
    업데이트(b, g){        
//        console.log("감마 : " + g + ", 베타  : " + b);
        this.g = g;
        this.b = b;
        // 개선필요
        this.닿자위치 = { x: this.글자이동점.x + this.g, y: this.글자이동점.y + m1 + this.b },
        this.종적모음위치 = { x: this.글자이동점.x + m2 + this.g, y: this.글자이동점.y + this.b},
        this.횡적모음위치 = { x: this.글자이동점.x + this.g, y: this.글자이동점.y + m3 + this.b},
        this.받침위치 = { x: this.글자이동점.x + this.g, y: this.글자이동점.y + m4 + this.b};
        
        
    }
    그리기() {
       
        var 글자단위이동점 = this.글자이동점;
        var 자소단위이동점;
        
        if (this.자소타입 === "닿자") { 자소단위이동점 = this.닿자위치; }
        else if (this.자소타입 === "받침") { 자소단위이동점 = this.받침위치; }
        else if (this.자소타입 === "횡적모음") { 자소단위이동점 = this.횡적모음위치; }
        else if (this.자소타입 === "종적모음") { 자소단위이동점 = this.종적모음위치; }
        
        push();
        translate(글자단위이동점.x, 글자단위이동점.y);
        translate(자소단위이동점.x, 자소단위이동점.y);
        
        stroke(0);
        strokeWeight(23);
        line(this.시작점[0].x+5, this.시작점[0].y+5, this.시작점[1].x+5, this.시작점[1].y+5);
        
        
        stroke(242, 248, 76);
        strokeWeight(23);
        line(this.시작점[0].x, this.시작점[0].y, this.시작점[1].x, this.시작점[1].y);
        
        
        pop();
        
    }
    

}

*/



// 자소이름 기준 매칭 후 자소모델 반환
function 자소모델설정(자소이름변수) {
    
    switch (자소이름변수) {
        case 'ㄱ': return 글자데이터.ㄱ; 
        case 'ㄴ': return  글자데이터.ㄴ; 
        case 'ㄷ': return  글자데이터.ㄷ; 
        case 'ㄹ': return  글자데이터.ㄹ; 
        case 'ㅁ': return  글자데이터.ㅁ; 
        case 'ㅂ': return  글자데이터.ㅂ; 
        case 'ㅅ': return  글자데이터.ㅅ; 
        case 'ㅇ': return  글자데이터.ㅇ; 
        case 'ㅈ': return  글자데이터.ㅈ; 
        case 'ㅊ': return  글자데이터.ㅊ; 
        case 'ㅋ': return  글자데이터.ㅋ; 
        case 'ㅌ': return  글자데이터.ㅌ; 
        case 'ㅍ': return  글자데이터.ㅍ; 
        case 'ㅎ': return 글자데이터.ㅎ; 
        case 'ㄱㅅ': return 글자데이터.ㄱㅅ;
        case 'ㄴㅈ': return 글자데이터.ㄴㅈ;
        case 'ㄴㅎ': return 글자데이터.ㄴㅎ;
        case 'ㄹㄱ': return 글자데이터.ㄹㄱ;
        case 'ㄹㅂ': return 글자데이터.ㄹㅂ;
        case 'ㄹㅅ': return 글자데이터.ㄹㅂ;
        case 'ㄹㅌ': return 글자데이터.ㄹㅌ;
        case 'ㄹㅍ': return 글자데이터.ㄹㅍ;
        case 'ㄹㅎ': return 글자데이터.ㄹㅎ;
        case 'ㅂㅅ': return 글자데이터.ㅂㅅ;        
        case '얇은ㄱ': return  글자데이터.얇은ㄱ; 
        case '얇은ㄴ': return  글자데이터.얇은ㄴ; 
        case '얇은ㄷ': return  글자데이터.얇은ㄷ; 
        case '얇은ㄹ': return  글자데이터.얇은ㄹ; 
        case '얇은ㅁ': return  글자데이터.얇은ㅁ; 
        case '얇은ㅂ': return  글자데이터.얇은ㅂ; 
        case '얇은ㅅ': return  글자데이터.얇은ㅅ; 
        case '얇은ㅈ': return  글자데이터.얇은ㅈ; 
        case '얇은ㅌ': return  글자데이터.얇은ㅌ; 
        case '얇은ㅍ': return  글자데이터.얇은ㅍ; 
        case '얇은ㅎ': return  글자데이터.얇은ㅎ; 
        case '아': return 글자데이터.아;
        case '야': return  글자데이터.야; 
        case '어': return  글자데이터.어; 
        case '여': return  글자데이터.여; 
        case '오': return  글자데이터.오; 
        case '요': return  글자데이터.요; 
        case '우': return  글자데이터.우; 
        case '유': return  글자데이터.유; 
        case '으': return  글자데이터.으; 
        case '이': return  글자데이터.이; 
        case '애': return  글자데이터.애; 
        case '예': return  글자데이터.얘; 
        case '에': return  글자데이터.에; 
        case '예': return  글자데이터.예; 
        case 'ㄲ': return 글자데이터.ㄲ;
        case 'ㅆ': return 글자데이터.ㅆ;
        case 'ㅉ': return 글자데이터.ㅉ;
        case ' ': return 글자데이터.공백;     
        default:
            console.log("setJasoModel(자소이름) notfound err : " + 자소이름변수);
            return  글자데이터.으;
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
            changeTilt();
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

    function changeTilt() {
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
    

      
  //67 is c
  if (keyCode === 67) {
    
    
  } else if (keyCode === 83) {
     
    // save(wokrname + " " + worktime);
  } else if (keyCode === 68) {
      console.log("change situation!");
  }
}



// 스마트폰 가속도계 데이터 accelerometer Data
window.addEventListener('deviceorientation', function(e) 
{
  알파 = e.alpha;
  베타 = e.beta;
  감마 = e.gamma;
});




