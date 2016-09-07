
// BBP : 겹복합 자음자 관련 변수

var bbp1 = { x: mw0+bm3, y: 0 }, 
    bbp5 = { x: w4 / 3+bm3, y: 0 },
    bbp13 = { x: bp1.x+bm3, y: bp1.y + h4 * 5 / 9 },
    bbp17 = { x: bp5.x+bm3, y: bp13.y },
    bbp3 = { x: (bp1.x + bp5.x) / 2+bm3, y: bp1.y },
    bbp2 = { x: (bp1.x + bp3.x) / 2+bm3, y: bp1.y },
    bbp4 = { x: (bp3.x + bp5.x) / 2+bm3, y: bp1.y },
    bbp15 = { x: (bp13.x + bp17.x) / 2+bm3, y: bp13.y },
    bbp14 = { x: (bp13.x + bp15.x) / 2+bm3, y: bp13.y }, 
    bbp16 = { x: (bp15.x + bp17.x) / 2+bm3, y: bp13.y }, 
    bbp6 = { x: bp1.x+bm3, y: (bp1.y + bp13.y) / 3 },
    bbp7 = { x: bp3.x+bm3, y: bp6.y },
    bbp8 = { x: bp5.x+bm3, y: bp6.y },
    bbp9 = { x: bp6.x+bm3, y: (bp1.y + bp13.y) / 2 },
    bbp10 = { x: bp7.x+bm3, y: bp9.y }, 
    bbp11 = { x: bp8.x+bm3, y: bp9.y }, 
    bbp12 = { x: bp10.x+bm3, y: (bp7.y + bp15.y) / 2 };



자소기준점리스트 = [
    [[p1, p2], [p2, p4]], //ㄱ
    [[p1, p3], [p3, p4]], //ㄴ
    [[p1, p2], [p1, p3], [p3, p4]], //ㄷ
    [[p1, p2], [p2, p6], [p6, p5], [p5, p3], [p3, p4]],//ㄹ
    [[p1, p2], [p2, p4], [p1, p3], [p3, p4]],//ㅁ
    [[p1, p3], [p3, p4], [p2, p4], [p5, p6]],//ㅂ
    [[p8, p7], [p7, p3], [p7, p4]],//ㅅ
    [[p8, p5], [p5, p17], [p17, p6], [p6, p8]], //ㅇ
    [[p1, p2], [p8, p7], [p7, p3], [p7, p4]],//ㅈ
    [[p12, p8], [p1, p2], [p8, p7], [p7, p3], [p7, p4]],//ㅊ
    [[p1, p2], [p5, p6], [p2, p4]],//ㅋ
    [[p1, p2], [p1, p3], [p5, p6], [p3, p4]],//ㅌ
    [[p1, p2], [p13, p15], [p14, p16], [p3, p4]],//ㅍ
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

    [[cp1, cp2], [cp6, cp3]], //오
    [[cp1, cp2], [cp8, cp4], [cp9, cp5]], //요
    [[cp1, cp2], [cp3, cp7]], //우
    [[cp1, cp2], [cp4, cp10], [cp5, cp11]],//유
    [[cp1, cp2]],//으

    [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp6, dp5]],//아
    [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp14, dp15], [dp17, dp18]],//야
    [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp7, dp5]], //어
    [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp14, dp16], [dp17, dp19]],//여
    [[dp1, dp10], [dp10, dp12], [dp12, dp2]],//이
    [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp6, dp5], [dp3, dp11], [dp11, dp13], [dp13, dp4]],//애
    [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp14, dp15], [dp17, dp18], [dp3, dp11], [dp11, dp13], [dp13, dp4]],//얘
    [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp7, dp5], [dp3, dp11], [dp11, dp13], [dp13, dp4]], //에
    [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp14, dp16], [dp17, dp19], [dp3, dp11], [dp11, dp13], [dp13, dp4]], //예 

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
    


function 사잇점생성(nums){
    console.log("사잇점 " + nums + "개 생성!" );  
    
    
    var 사잇점수 = nums;
    for(var i = 0; i < 자소기준점리스트.length; i++){
        var 자소기준점 = 자소기준점리스트[i];
        var 자소별배열 = [];
        
        for(var j = 0 ; j < 자소기준점.length; j++){
            var 원소단위객체 = 자소기준점[j];
            var 시작점 = 원소단위객체[0];
            var 끝점 = 원소단위객체[1];
            
            var 원소단위객체배열 = 사잇점생성함수(시작점, 끝점, 사잇점수);
            
            for(var k = 0; k < 원소단위객체배열.length; k++){
                자소별배열.push(원소단위객체배열[k]);
            }
        }
        //사잇점 업데이트 후 전역 객체인 글자데이터에 자소별로 업데이트해준다.
        var 현재자소이름 = 자소이름리스트[i];
        글자데이터[현재자소이름] = 자소별배열; //얻은 point 배열값으로 전역 '글자데이터'의 데이터 변경       
    }
    console.log("사잇점생성 후 글자데이터에 자소별 업데이트 완료!");  
}




//시작점과 끝점 사이의 사잇점들을 생성한다. 
function 사잇점생성함수(start, end, len){

    var resultArray = [];
    var eachPos = (1.0 / len);
    
    resultArray.push(start);//시작점을 가장먼저 추가
    
    //시작점과 끝 점을 제외한 가운데 점들을 생성한다.
    for (var i = 0; i < len; i++){
        //사잇점 위치 계산
        var currentX = lerp(start.x, end.x, eachPos),
            currentY = lerp(start.y, end.y, eachPos),
            pos = { x: currentX, y: currentY };

        resultArray.push(pos); //리턴할 배열에 추가
        eachPos += 1.0/len;
    }
    resultArray.push(end); //끝점을 마지막에 추가
    
    
    return resultArray;
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
    
    if (newEl === 자소ㄱㅅ) { return 'ㄱㅅ'; }
    else if (newEl === 자소ㄴㅈ) { return 'ㄴㅈ' }
    else if (newEl === 자소ㄴㅎ) { return 'ㄴㅎ' }
    else if (newEl === 자소ㄹㄱ) { return 'ㄹㄱ' }
    else if (newEl === 자소ㄹㅁ) { return 'ㄹㅁ' }
    else if (newEl === 자소ㄹㅂ) { return 'ㄹㅂ' }
    else if (newEl === 자소ㄹㅅ) { return 'ㄹㅅ' }
    else if (newEl === 자소ㄹㅌ) { return 'ㄹㅌ' }
    else if (newEl === 자소ㄹㅍ) { return 'ㄹㅍ' }
    else if (newEl === 자소ㄹㅎ) { return 'ㄹㅎ' }
    else if (newEl === 자소ㅂㅅ) { return 'ㅂㅅ' }
    else {
        console.error("원하는 형태의 겹받침변환이 없습니다. from 겹받침변환()");
        return 'ㄴㅈ';
    }
    
}

