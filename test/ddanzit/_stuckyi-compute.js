
//coded font에 사용한 계산 변수들

/*** 크기 지정 부분 ************************************** */

var fontSize = 1; //폰트 크기 단계화

var letterWidth = fontSize * 250 ; // 변형 전 글자 기본 공간 - 가로
var letterHeight = fontSize * 500; // 변형 전 글자 기본 공간 - 세로
// var letterSpacing = letterWidth / 5; //자간
var letterSpacing = letterWidth; //자간
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



/* BBP : 겹복합 자음자 관련 변수 *** */

var bbp1 = {
    x: mw0+bm3,
    y: 0
};
var bbp5 = {
    x: w4 / 3+bm3,
    y: 0
};
var bbp13 = {
    x: bp1.x+bm3,
    y: bp1.y + h4 * 5 / 9
};
var bbp17 = {
    x: bp5.x+bm3,
    y: bp13.y
};
var bbp3 = {
    x: (bp1.x + bp5.x) / 2+bm3,
    y: bp1.y
};
var bbp2 = {
    x: (bp1.x + bp3.x) / 2+bm3,
    y: bp1.y
};
var bbp4 = {
    x: (bp3.x + bp5.x) / 2+bm3,
    y: bp1.y
};
var bbp15 = {
    x: (bp13.x + bp17.x) / 2+bm3,
    y: bp13.y
};
var bbp14 = {
    x: (bp13.x + bp15.x) / 2+bm3,
    y: bp13.y
};
var bbp16 = {
    x: (bp15.x + bp17.x) / 2+bm3,
    y: bp13.y
};
var bbp6 = {
    x: bp1.x+bm3,
    y: (bp1.y + bp13.y) / 3
};
var bbp7 = {
    x: bp3.x+bm3,
    y: bp6.y
};
var bbp8 = {
    x: bp5.x+bm3,
    y: bp6.y
};
var bbp9 = {
    x: bp6.x+bm3,
    y: (bp1.y + bp13.y) / 2
};
var bbp10 = {
    x: bp7.x+bm3,
    y: bp9.y
};
var bbp11 = {
    x: bp8.x+bm3,
    y: bp9.y
};
var bbp12 = {
    x: bp10.x+bm3,
    y: (bp7.y + bp15.y) / 2
};


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



/* ****** 초기화시 글자데이터구조 계산하는 영역 *********/
/* 글자구조데이터
  * 클래스에서 계산하는 것이아니라, setup함수에서 객체 생성시 활용하기 위함.
  * 자소별 기준점을 통해 글자데이터객체를 구한다.
*/

function 글자구조데이터(사잇점개수) {
  console.log("start 글자구조데이터()");


  var 자소기준점리스트 = [
        [[p1, p2], [p2, p4]],
        [[p1, p3], [p3, p4]],
        [[p1, p2], [p1, p3], [p3, p4]],
        [[p1, p2], [p2, p6], [p6, p5], [p5, p3], [p3, p4]],
        [[p1, p2], [p2, p4], [p1, p3], [p3, p4]],
        [[p1, p3], [p3, p4], [p2, p4], [p5, p6]],
        [[p8, p7], [p7, p3], [p7, p4]],
        [[p8, p5], [p5, p17], [p17, p6], [p6, p8]], //ㅇ
        [[p1, p2], [p8, p7], [p7, p3], [p7, p4]],
        [[p12, p8], [p1, p2], [p8, p7], [p7, p3], [p7, p4]],
        [[p1, p2], [p5, p6], [p2, p4]],
        [[p1, p2], [p1, p3], [p5, p6], [p3, p4]],
        [[p1, p2], [p13, p15], [p14, p16], [p3, p4]],
        [[p9, p10], [p12, p11], [p8, p5], [p5, p17], [p17, p6], [p6, p8]], //ㅎ

        [[bp1, bp5], [bp5, bp17]],//얇은ㄱ 
        [[bp1, bp13], [bp13, bp17]], //얇은ㄴ
        [[bp1, bp13], [bp5, bp17], [bp13, bp17], [bp9, bp11]], //얇은ㄷ
        [[bp1, bp5], [bp5, bp11], [bp9, bp11], [bp9, bp13], [bp13, bp17]], //얇은ㄹ
        [[bp1, bp5], [bp1, bp13], [bp13, bp17], [bp5, bp17] ], //얇은ㅁ 
        [[bp1, bp13], [bp5, bp17], [bp13, bp17], [bp9, bp11] ],//얇은ㅂ
        [[bp3, bp10], [bp10, bp13], [bp10, bp17]], //얇은ㅅ
        [[bp1, bp5], [bp3, bp10], [bp10, bp13], [bp10, bp17]],//얇은ㅈ
        [[bp1, bp5], [bp1, bp13], [bp13, bp17], [bp9, bp11]],//얇은ㅌ
        [[bp1, bp5], [bp2, bp14], [bp4, bp16], [bp13, bp17]],//얇은ㅍ
        [[bp3, bp7], [bp6, bp8], [bp10, bp9], [bp9, bp15], [bp15, bp11], [bp11, bp10]], //얇은ㅎ

        [[cp1, cp2], [cp6, cp3]],
        [[cp1, cp2], [cp8, cp4], [cp9, cp5]],
        [[cp1, cp2], [cp3, cp7]],
        [[cp1, cp2], [cp4, cp10], [cp5, cp11]],
        [[cp1, cp2]],

        [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp6, dp5]],
        [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp14, dp15], [dp17, dp18]],
        [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp7, dp5]],
        [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp14, dp16], [dp17, dp19]],
        [[dp1, dp10], [dp10, dp12], [dp12, dp2]],
        [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp6, dp5], [dp3, dp11], [dp11, dp13], [dp13, dp4]],
        [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp14, dp15], [dp17, dp18], [dp3, dp11], [dp11, dp13], [dp13, dp4]],
        [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp7, dp5], [dp3, dp11], [dp11, dp13], [dp13, dp4]],
        [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp14, dp16], [dp17, dp19], [dp3, dp11], [dp11, dp13], [dp13, dp4]],

        [ [bp1, bp5], [bp5, bp17], [bbp3, bbp10], [bbp10, bbp13], [bbp10, bbp17]], //ㄱㅅ 
        [[bp1, bp13], [bp13, bp17], [bbp1, bbp5], [bbp3, bbp10], [bbp10, bbp13], [bbp10, bbp17]], //ㄴㅈ  
        [[bp1, bp13], [bp13, bp17], [bbp3, bp7], [bbp6, bbp8], [bbp10, bbp9], [bbp9, bbp15], [bbp15, bbp11], [bbp11, bbp10]], //ㄴㅎ 
        [[bp1, bp5], [bp5, bp11], [bp9, bp11], [bp9, bp13], [bp13, bp17], [bbp1, bbp5], [bbp5, bbp17]], //ㄹㄱ 
        [[bp1, bp5], [bp5, bp11], [bp9, bp11], [bp9, bp13], [bp13, bp17], [bbp1, bbp5], [bbp1, bbp13], [bbp13, bbp17], [bbp5, bbp17]], //ㄹㅁ
        [[bp1, bp5], [bp5, bp11], [bp9, bp11], [bp9, bp13], [bp13, bp17], [bbp1, bbp13], [bbp5, bbp17], [bbp13, bbp17], [bbp9, bbp11]], //ㄹㅂ
        [[bp1, bp5], [bp5, bp11], [bp9, bp11], [bp9, bp13], [bp13, bp17], [bbp3, bbp10], [bbp10, bbp13], [bbp10, bbp17]], //ㄹㅅ
        [[bp1, bp5], [bp5, bp11], [bp9, bp11], [bp9, bp13], [bp13, bp17], [bbp1, bbp5], [bbp1, bbp13], [bbp13, bbp17], [bbp9, bbp11]], //ㄹㅌ
        [[bp1, bp5], [bp5, bp11], [bp9, bp11], [bp9, bp13], [bp13, bp17], [bbp1, bbp5], [bbp2, bbp14], [bbp4, bbp16], [bbp13, bbp17]], //ㄹㅍ
        [[bp1, bp5], [bp5, bp11], [bp9, bp11], [bp9, bp13], [bp13, bp17], [bbp3, bbp7], [bbp6, bbp8], [bbp10, bbp9], [bbp9, bbp15], [bbp15, bbp11], [bbp11, bbp10]], //ㄹㅎ
        [[bp1, bp13], [bp5, bp17], [bp13, bp17], [bp9, bp11], [bbp3, bbp10], [bbp10, bbp13], [bbp10, bbp17]], //ㅂㅅ
        
        [[bp1, bp5], [bp5, bp17], [bbp1, bbp5], [bbp5, bbp17]],//ㄲ
        [[bp3, bp10], [bp10, bp13], [bp10, bp17], [bbp3, bbp10], [bbp10, bbp13], [bbp10, bbp17]], //ㅆ
        [[bp1, bp5], [bp3, bp10], [bp10, bp13], [bp10, bp17], [bbp1, bbp5], [bbp3, bbp10], [bbp10, bbp13], [bbp10, bbp17]]//ㅉ
  ];


  //자소클래스 정보 업데이트        
  console.log("자소기준점리스트 목록 수 : " + 자소기준점리스트.length);
  console.log("자소줄기ㄱ의 목록 수 : " + 자소기준점리스트[0].length);




  /** 사잇점 구하고 '글자데이터배열'에 추가 ************************** */
  var ouputTestCount = 0;
  var ouetputTestArray;

  for (var i = 0; i < 자소기준점리스트.length; i++) {
    var 자소 = 자소기준점리스트[i];
    
    var 자소객체 = { 자소이름: 모델.자소이름[i], 자소인덱스: i, 자소배열: [] };
    
    for (var j = 0; j < 자소.length; j++) {
      var 손자소 = 자소[j];
      var 손자소사이점배열 = makePointByLerp(손자소[0], 손자소[1], 사잇점개수);
      if (i === 0) {
        console.log("손자소 : " + 손자소 + "자소객체이름: " + 자소객체.자소이름 + ", " +손자소사이점배열); 
      }
      var 자소사이점배열 = 손자소사이점배열.valueOf();
      console.log(자소사이점배열);
      자소객체.자소배열.push(자소사이점배열);
    }
    
    //계산완료된 자소사이점 배열을 글자데이터배열에 추가한다. 
    글자데이터배열.push(자소객체);
  }
}


function viewPosData() {
  var allStrings = "";
  for (var i = 0; i < 글자데이터배열.length; i++){
    var rowPosData = makePosData(i); //JSON화된 자소별 배열
    allStrings += rowPosData; //전체 글자객체에 JSON화된 자소별 배열 추가
  }
  console.log(allStrings); //계산한 결과를 콘솔에 출력


  function makePosData(nums) {
    var arrayName = 모델.자소이름[nums];
      var result = "" + arrayName + ": [";
      var 대상자소배열 = 글자데이터배열[nums].자소배열;
      for (var i = 0; i < 대상자소배열.length; i++) {
        var 자소획 = 대상자소배열[i];
        for (var j = 0; j < 자소획.length; j++) {
          result += JSON.stringify(자소획[j]) + ", ";
        }
      }
      result += "],";
      return result.replace(/"/gi, '');
  }
  


  function makePos() {
    var 현재카운트 = 0;
      for (var t = 0; t < 글자데이터배열.length; t++) {
        var rowtest = 글자데이터배열[t].자소배열;
        console.log(t);
        for (var tj = 0; tj < rowtest.length; tj++){
          var rows = rowtest[tj];
          // println(rows);
          현재카운트++;
          console.log(현재카운트);
          
          for (var tjj = 0; tjj < rows.length; tjj++){
            var 사잇점 = rows[tjj];
            console.log(JSON.stringify(사잇점));
            // ellipse(rows[tjj].x, rows[tjj].y, 10, 10);
            //사잇점단위
          }
          //획단위
        }
        //자소단위
        translate(10, 60);
      }
  }
}




//시작점과 끝점 사이의 사잇점들을 생성한다. 
function makePointByLerp(start, end, len){

    var resultArray = [];
    var eachPos = (1.0 / len);
    
    resultArray.push(start);//시작점을 가장먼저 추가
    
    //시작점과 끝 점을 제외한 가운데 점들을 생성한다.
    for (var i = 0; i < len; i++){
        //사잇점 위치 계산
        var currentX = lerp(start.x, end.x, eachPos);
        var currentY = lerp(start.y, end.y, eachPos);
        
        var pos = { x: currentX, y: currentY };
        //리턴할 배열에 추가
        resultArray.push(pos);
        eachPos += 1.0/len;
    }
    resultArray.push(end); //끝점을 마지막에 추가
    // console.log(resultArray.length);
    
    return resultArray;
}

