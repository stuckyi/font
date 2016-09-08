
//곁받침 체크 함수
function 겹받침체크(배열이름) {
    var lastest = 배열이름[배열이름.length - 1],
        last = 배열이름[배열이름.length - 2];
    
    var t_lastest = Hangul.isConsonant(lastest),
        t_last = Hangul.isConsonant(last);
    
    if (t_lastest && t_last) { return true; }
    return false;
}



//곁받침을 홑낱자로 변환
function 겹받침변환(배열이름) {
    var lastest = 배열이름.pop(), last = 배열이름.pop();
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