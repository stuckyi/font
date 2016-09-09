
var 알파, 베타, 감마 = 0;
var 메인캔버스, 입력창, 입력버튼;
var 사용자입력문자 = "음음음음임임임임".split(''); //사용자입력문자 변수 선언 및 초기값 설정
var 한줄당최대글자수 = 3; 

var 요소위치 = {};
var 스타일 = {};


function setup() {
    //스타일 초기화
    스타일지정();
    
    //캔버스
    메인캔버스 = createCanvas(800, 1000);
    메인캔버스.position(요소위치.캔버스위치.x, 요소위치.캔버스위치.y); //캔버스 위치

    //UI 생성
    makeDomElement('입력창'); 
    makeDomElement('입력버튼');    
}

function draw() {
    background(스타일.배경색);
    var 글자위치 = { x: 0, y: 0 };                                     // 글자위치 초기화

    for (var i = 0; i < 사용자입력문자.length; i++) {
        var 반복범위 = i % (한줄당최대글자수+1);                           // 나머지연산자
        글자위치.x = 반복범위 * (글자너비 + 자간);                          // 글자위치 업데이트 (X축)         
        
        틸트폰트생성(사용자입력문자[i], 글자위치.x, 글자위치.y, 감마);           // 글자생성함수호출

        if (반복범위 === 한줄당최대글자수) { 글자위치.y += (글자높이 + 행간); } // 글자위치 업데이트 (Y축)
    }
} 

//스타일요소 지정
function 스타일지정() {
    //배경
    스타일.배경색 = 255;

    //글자꼴
    스타일.선색상_기본 = 255;
    스타일.선색상_외곽 = 0;
    스타일.선굵기_기본 = 10;
    스타일.선굵기_외곽 = 20;


    //P5 스타일
    스타일.frameColor = (60,90,70);
    스타일.frameStrokeWeight = 2;

    //DOM Elment 위치
    요소위치.캔버스위치 = { x: 0, y: 140 };
    요소위치.버튼위치 = { x: 255, y: 45 };
    요소위치.입력창위치 = { x: 50, y: 45 };
    요소위치.마진 = { 왼쪽: 2 };

    //캔버스 기본
    colorMode(HSL);
    strokeJoin(ROUND);
    fill(0);

}

//P5로 DOM Element를 생성
function makeDomElement(요소이름) {

  switch (요소이름) {
    case '입력창':
      입력창생성();
      break;
    case '입력버튼':
      입력버튼생성();
      break;
    default:
      console.log("생성할 DOM Element 타입이 적절하지 않습니다.");
      break;
  }

  function 입력창생성() {
    입력창 = createInput();                              //생성
    입력창.addClass('form-control');                     //클래스 부여
    입력창.size(200, 40);                                //크기
    입력창.position(요소위치.입력창위치.x, 요소위치.입력창위치.y); //위치          
  }

  function 입력버튼생성() {
    입력버튼 = createButton('글자생성');                   //생성
    입력버튼.position(요소위치.버튼위치.x, 요소위치.버튼위치.y);  //위치
    입력버튼.mousePressed(redrawing);                    //클릭시 이벤트함수 호출
    입력버튼.addClass('btn btn-default');                //클래스 부여
  }
}

//글자 생성 함수
function 틸트폰트생성(letter, tx, ty, g) {

    var 자소분리배열 = Hangul.disassemble(letter);

    //겹받침 체크후 자소배열을 곁받침형태로 변환
    var 겹받침인가 = 겹받침체크(자소분리배열);
    if (겹받침인가) {
        var pushEl = 겹받침변환(자소분리배열);
        자소분리배열.push(pushEl);
    }

    //종적모음체크 한다면 여기에 
    var 종적모음여부 = 종적모음체크(자소분리배열);
    if (!종적모음여부) { tx = tx + m5; } 
    

    //자소타입별 위치
    var 닿자위치 = { x: tx + g, y: ty + m1 },
        종적모음위치 = { x: tx + m2, y: ty },
        횡적모음위치 = { x: tx, y: ty + m3 },
        받침위치 = { x: tx + g, y: ty + m4 };

    //자소분리(disassemble)된 단위로 폰트 생성
    for (var j = 0; j < 자소분리배열.length; j++){
        var 자소 = 자소분리배열[j];
        if (자소 === 자소우) { 자소 = '우'; } //VisualStudio Code에서 모음 '우'가 표시되지않아 변경
        switch (자소) {
            case 'ㄱ': (j === 0) ? ㄱ(닿자위치.x, 닿자위치.y) : ㄱ(받침위치.x, 받침위치.y); break;
            case 'ㄴ': (j === 0) ? ㄴ(닿자위치.x, 닿자위치.y) : ㄴ(받침위치.x, 받침위치.y); break;
            case 'ㄷ': (j === 0) ? ㄷ(닿자위치.x, 닿자위치.y) : ㄷ(받침위치.x, 받침위치.y); break;
            case 'ㄹ': (j === 0) ? ㄹ(닿자위치.x, 닿자위치.y) : ㄹ(받침위치.x, 받침위치.y); break;
            case 'ㅁ': (j === 0) ? ㅁ(닿자위치.x, 닿자위치.y) : ㅁ(받침위치.x, 받침위치.y); break;
            case 'ㅂ': (j === 0) ? ㅂ(닿자위치.x, 닿자위치.y) : ㅂ(받침위치.x, 받침위치.y); break;
            case 'ㅅ': (j === 0) ? ㅅ(닿자위치.x, 닿자위치.y) : ㅅ(받침위치.x, 받침위치.y); break;
            case 'ㅇ': (j === 0) ? ㅇ(닿자위치.x, 닿자위치.y) : ㅇ(받침위치.x, 받침위치.y); break;
            case 'ㅈ': (j === 0) ? ㅈ(닿자위치.x, 닿자위치.y) : ㅈ(받침위치.x, 받침위치.y); break;
            case 'ㅊ': (j === 0) ? ㅊ(닿자위치.x, 닿자위치.y) : ㅊ(받침위치.x, 받침위치.y); break;
            case 'ㅋ': (j === 0) ? ㅋ(닿자위치.x, 닿자위치.y) : ㅋ(받침위치.x, 받침위치.y); break;
            case 'ㅌ': (j === 0) ? ㅌ(닿자위치.x, 닿자위치.y) : ㅌ(받침위치.x, 받침위치.y); break;
            case 'ㅍ': (j === 0) ? ㅍ(닿자위치.x, 닿자위치.y) : ㅍ(받침위치.x, 받침위치.y); break;
            case 'ㅎ': (j === 0) ? ㅎ(닿자위치.x, 닿자위치.y) : ㅎ(받침위치.x, 받침위치.y); break;
                
            case 'ㄱㅅ': (j === 0) ? ㄱㅅ(닿자위치.x, 닿자위치.y) : ㄱㅅ(받침위치.x, 받침위치.y); break;
            case 'ㄴㅈ': (j === 0) ? ㄴㅈ(닿자위치.x, 닿자위치.y) : ㄴㅈ(받침위치.x, 받침위치.y); break;
            case 'ㄴㅎ': (j === 0) ? ㄴㅎ(닿자위치.x, 닿자위치.y) : ㄴㅎ(받침위치.x, 받침위치.y); break;
            case 'ㄹㄱ': (j === 0) ? ㄹㄱ(닿자위치.x, 닿자위치.y) : ㄹㄱ(받침위치.x, 받침위치.y); break;
            case 'ㄹㅁ': (j === 0) ? ㄹㅁ(닿자위치.x, 닿자위치.y) : ㄹㅁ(받침위치.x, 받침위치.y); break;
            case 'ㄹㅂ': (j === 0) ? ㄹㅂ(닿자위치.x, 닿자위치.y) : ㄹㅂ(받침위치.x, 받침위치.y); break;
            case 'ㄹㅅ': (j === 0) ? ㄹㅅ(닿자위치.x, 닿자위치.y) : ㄹㅅ(받침위치.x, 받침위치.y); break;
            case 'ㄹㅌ': (j === 0) ? ㄹㅌ(닿자위치.x, 닿자위치.y) : ㄹㅌ(받침위치.x, 받침위치.y); break;
            case 'ㄹㅍ': (j === 0) ? ㄹㅍ(닿자위치.x, 닿자위치.y) : ㄹㅍ(받침위치.x, 받침위치.y); break;
            case 'ㄹㅎ': (j === 0) ? ㄹㅎ(닿자위치.x, 닿자위치.y) : ㄹㅎ(받침위치.x, 받침위치.y); break;
            case 'ㅂㅅ': (j === 0) ? ㅂㅅ(닿자위치.x, 닿자위치.y) : ㅂㅅ(받침위치.x, 받침위치.y); break;
                
            case 'ㄲ': (j === 0) ? ㄲ(닿자위치.x, 닿자위치.y) : ㄲ(받침위치.x, 받침위치.y); break;
            case 'ㄸ': (j === 0) ? ㄸ(닿자위치.x, 닿자위치.y) : ㄸ(받침위치.x, 받침위치.y); break;
            case 'ㅃ': (j === 0) ? ㅃ(닿자위치.x, 닿자위치.y) : ㅃ(받침위치.x, 받침위치.y); break;
            case 'ㅆ': (j === 0) ? ㅆ(닿자위치.x, 닿자위치.y) : ㅆ(받침위치.x, 받침위치.y); break;
            case 'ㅉ': (j === 0) ? ㅉ(닿자위치.x, 닿자위치.y) : ㅉ(받침위치.x, 받침위치.y); break;   
                
            case 'ㅏ': 아A(종적모음위치.x, 종적모음위치.y, g); break;
            case 'ㅑ': 야A(종적모음위치.x, 종적모음위치.y, g); break;
            case 'ㅓ': 어A(종적모음위치.x, 종적모음위치.y, g); break;
            case 'ㅕ': 여A(종적모음위치.x, 종적모음위치.y, g); break;
            case 'ㅗ': 오(횡적모음위치.x, 횡적모음위치.y, g); break;
            case 'ㅛ': 요(횡적모음위치.x, 횡적모음위치.y, g); break;
            case '우': 우(횡적모음위치.x, 횡적모음위치.y, g); break;
            case 'ㅠ': 유(횡적모음위치.x, 횡적모음위치.y, g); break;
            case 'ㅡ': 으(횡적모음위치.x, 횡적모음위치.y, g); break;
            case 'ㅣ': 이A(종적모음위치.x, 종적모음위치.y, g); break;
            case 'ㅐ': 애A(종적모음위치.x, 종적모음위치.y, g); break;
            case 'ㅒ': 얘A(종적모음위치.x, 종적모음위치.y, g); break;
            case 'ㅔ': 에A(종적모음위치.x, 종적모음위치.y, g); break;
            case 'ㅖ': 예A(종적모음위치.x, 종적모음위치.y, g); break;
                
            case ' ': 공백(받침위치.x, 받침위치.y); break;
        default:
            // console.log("틸트폰트 생성 변수가 적절치 않습니다.");
            공백(받침위치.x, 받침위치.y);
            break;
        }   
    }
}

//버튼 클릭 이벤트 : 클릭할때마다 현재 Input값을 업데이트
function redrawing() {
    사용자입력문자 = 입력창.value().split('');    //사용자입력문장 업데이트
    background(스타일.배경색);                  //기존글자 지우기
}


// 스마트폰 가속도계 데이터 accelerometer Data
window.addEventListener('deviceorientation', function(e) 
{
//   알파 = e.alpha;
//   베타 = e.beta;
  감마 = e.gamma;
});



