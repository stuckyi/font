
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
    [[p1,p2], [p2,p6], [p6,p5], [p5,p3], [p3,p4]], //ㄹ
    [[p1, p2], [p2, p4], [p1, p3], [p3, p4]],
    [[p1, p3], [p3, p4], [p2, p4], [p5, p6]],
    [[p8, p7], [p7, p3], [p7, p4]],
    [[p8,p5], [p5, p17], [p17,p6], [p6,p8]], //ㅇ
    [[p1, p2], [p8, p7], [p7, p3], [p7, p4]],
    [[p12, p8], [p1, p2], [p8, p7], [p7, p3], [p7, p4]],
    [[p1, p2], [p5, p6], [p2, p4]],
    [[p1, p2], [p1, p3], [p5, p6], [p3, p4]],
    [[p1, p2], [p13, p15], [p14, p16], [p3, p4]],
    [[p9, p10], [p12, p11], [p8,p5], [p5, p17], [p17,p6], [p6,p8]], //ㅎ

    [[bp1, bp5], [bp5, bp17]],
    [[bp1, bp13], [bp13, bp17]],
    [[bp1, bp13], [bp5, bp17], [bp13, bp17], [bp9, bp11]],
    [[bp1, bp5], [bp5, bp11], [bp9, bp11], [bp9, bp13], [bp13, bp17]],
    [[bp1, bp5], [bp1, bp13], [bp13, bp17], [bp5, bp17]],
          
          
    [[bp1, bp13], [bp5, bp17], [bp13, bp17], [bp9, bp11],],
    [[bp3, bp10], [bp10, bp13], [bp10, bp17]],
    [[bp1, bp5], [bp3, bp10], [bp10, bp13], [bp10, bp17]],
    [[bp1, bp5], [bp1, bp13], [bp13, bp17], [bp9, bp11]],
    [[bp1, bp5], [bp2, bp14], [bp4, bp16], [bp13, bp17]],
    [[bp3, bp7], [bp6, bp8], [bp10, bp9],[bp9, bp15], [bp15, bp11], [bp11, bp10]], //얇은ㅎ
          
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
    [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp14, dp16], [dp17, dp19], [dp3, dp11], [dp11, dp13], [dp13, dp4]]
  ];


//자소별 사잇점 리스트 구하기
function getBetweenData(){
    var 자소별사잇점 = [];

    for(var index = 0; index < 자소기준점리스트.length; i++){
        var row = 자소기준점리스트[index];
        var rowArray; //자소별 통합배열

        for(var j = 0; j < row.length; j++){
            var betweenArray = makePointByLerp(row[0], row[1]); 
            if(j === 0){
                rowArray = betweenArray;
            }else {
                rowArray.concat(betweenArray);
            }
        }
        자소별사잇점.push(rowArray);
    }
    console.log(자소별사잇점);
}



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
      
      console.log(자소객체.자소이름);
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

