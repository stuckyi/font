
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
    [[bp1, bp5], [bp1, bp13], [bp13, bp17], [bbp1, bbp5], [bbp1, bbp13], [bbp13, bbp17]],//ㄸ
    [[bp1, bp13], [bp5, bp17], [bp13, bp17], [bp9, bp11], [bbp1, bbp13], [bbp5, bbp17], [bbp13, bbp17], [bbp9, bbp11] ],//얇은ㅂ
    [[bp3, bp10], [bp10, bp13], [bp10, bp17], [bbp3, bbp10], [bbp10, bbp13], [bbp10, bbp17]], //ㅆ
    [[bp1, bp5], [bp3, bp10], [bp10, bp13], [bp10, bp17], [bbp1, bbp5], [bbp3, bbp10], [bbp10, bbp13], [bbp10, bbp17]]//ㅉ
];
    


function 글자데이터생성(nums){
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
        case 'ㄸ': return 글자데이터.ㄸ;
        case 'ㅃ': return 글자데이터.ㅃ;
        case 'ㅆ': return 글자데이터.ㅆ;
        case 'ㅉ': return 글자데이터.ㅉ;
        case ' ': return 글자데이터.공백;     
        default:
            console.log("setJasoModel(자소이름) notfound err : " + 자소이름변수);
            return  글자데이터.으;
    }

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
        case 0: 글자이동점 = { x: 초기시작점, y: 스타일.행간*1 }; break;
        case 1: 글자이동점 = { x: 초기시작점 + 스타일.자간*1, y: 스타일.행간*1 }; break;
        case 2: 글자이동점 = { x: 초기시작점 + 스타일.자간*2, y: 스타일.행간*1 }; break;
        case 3: 글자이동점 = { x: 초기시작점 + 스타일.자간*3, y: 스타일.행간*1 }; break;
        case 4: 글자이동점 = { x: 초기시작점 + 스타일.자간*4, y: 스타일.행간*1 }; break;
        default:
            console.error("글자이동점얻기(인덱스) notfound err");
            글자이동점 = { x: 스타일.자간*5, y: 스타일.행간*5 };
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
        case 'ㄲ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치;
        case 'ㄸ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치;
        case 'ㅃ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치;    
        case 'ㅆ': return (자소인덱스 === 0) ?  닿자위치 : 받침위치; 
        case 'ㅉ': return (자소인덱스 === 0) ? 닿자위치 : 받침위치;
        case ' ': return 닿자위치;     
            
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
        case 'ㄲ': return (자소인덱스 === 0) ? "닿자" : "받침";
        case 'ㄸ': return (자소인덱스 === 0) ? "닿자" : "받침";
        case 'ㅃ': return (자소인덱스 === 0) ? "닿자" : "받침";    
        case 'ㅆ': return (자소인덱스 === 0) ? "닿자" : "받침"; 
        case 'ㅉ': return (자소인덱스 === 0) ? "닿자" : "받침";
        case ' ': return "받침";    
            
        default:
            console.error("자소이동점얻기(인덱스) notfound err : " + 자소이름);
            return "닿자";        
    }
    
}



function 틸트값표시(beta, gamma) {
    push();
    textSize(25);
    fill(255);
    text("베타 값 : " + beta, 500, 60);
    text("감마 값 : " + gamma, 500, 100);
    pop();
}



function 라이트표시() {
    if (isTilt) {
        push();
        fill(255, 204, 0, 40);
        rect(0, 0, width, height);
        pop();
        
    }
}