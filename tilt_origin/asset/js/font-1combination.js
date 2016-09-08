/*
2016 stuckyi studio 
for herald design tech 

고려사항:

변수화할 것들
1. 폰트 크기 변경 가능하게 설계한다.
2. 획 굵기 변경 가능하게 설계한다.
3. 위치 변경 가능하게 설계한다.
4. 쌍자음은 gamma 값 변할 때 위치가 왼쪽 -> 오른쪽 | 오른쪽 -> 왼쪽으로 차례로 변할 수 있게 한다.
5. 모음은 gamma 값에 따라 형태가 변할 수 있게 한다.

*/



//------------------------------------------닿자 재조합 그라운드------------------------------------------


// ------------------ 기본 자음 -----------------------

//기본자음ㄱ

function ㄱ(tx,ty){
    a1(tx,ty);
}

//기본자음ㄴ

function ㄴ(tx, ty) {
    a2(tx, ty);
}

//기본자음ㄷ
// function top3(tx, ty) {
function ㄷ(tx, ty) {
    a3(tx, ty);
}


//기본자음ㄹ
// function top4(tx,ty){    
function ㄹ(tx, ty) {
    a4(tx, ty);
}


//기본자음ㅁ
function ㅁ(tx, ty) {
    a5(tx, ty);
}

//기본자음ㅂ
function ㅂ(tx, ty) {
    
    a6(tx, ty);
}

//기본자음ㅅ
function ㅅ(tx, ty) {
    a7(tx, ty);
}

//기본자음ㅇ
function ㅇ(tx, ty) {
    a8(tx, ty);
}

//기본자음ㅈ
function ㅈ(tx, ty) {
    a9(tx, ty);
}

//기본자음ㅊ
function ㅊ(tx, ty) {
    a10(tx, ty);
}

//기본자음ㅋ
function ㅋ(tx, ty) {
    a11(tx, ty);
}

//기본자음ㅌ
function ㅌ(tx, ty) {
    a12(tx, ty);
}

//기본자음ㅍ
function ㅍ(tx, ty) {
    a13(tx, ty);
}

//기본자음ㅎ
function ㅎ(tx, ty) {
    a14(tx, ty);
}

// ------------------ 복합 자음 -----------------------

//복합자음ㄲ
function ㄲ(tx, ty) {
    b1(tx + bm1, ty + bm2);
    b1(tx + bm1 + bm3, ty + bm2);
}

//복합자음ㄸ
function ㄸ(tx, ty) {
    b2(tx + bm1, ty + bm2);
    b2(tx + bm1 + bm3, ty + bm2);
}

//복합자음ㅃ
function ㅃ(tx, ty) {
    b3(tx + bm1, ty + bm2);
    b3(tx + bm1 + bm3, ty + bm2);
}

//복합자음ㅆ
function ㅆ(tx, ty) {
    b4(tx + bm1, ty + bm2);
    b4(tx + bm1 + bm3, ty + bm2);
}

//복합자음ㅉ
function ㅉ(tx, ty) {
    b5(tx + bm1, ty + bm2);
    b5(tx + bm1 + bm3, ty + bm2);
}





//------------------------------------------홀자 재조합 그라운드------------------------------------------

// ------------------ 기본 모음 -----------------------

// -------- 종적 기본 모음 a,b--------

//기본모음ㅏa
// function middle1a(tx,ty,g){    
function 아1(tx, ty, g) {
    d1a(tx, ty, g);
}
//기본모음ㅏb
function 아2(tx, ty, g) {
    d1b(tx, ty, g);
}
//기본모음ㅑa
function 야1(tx, ty, g) {
    d2a(tx, ty, g);
}
//기본모음ㅑb
function 야2(tx, ty, g) {
    d2b(tx, ty, g);
}
//기본모음ㅓa
function 어1(tx, ty, g) {
    d3a(tx, ty, g);
}
//기본모음ㅓb
function 어2(tx, ty, g) {
    d3b(tx, ty, g);
}
//기본모음ㅕa
function 여1(tx, ty, g) {
    d4a(tx, ty, g);
}
//기본모음ㅕb
function 여2(tx, ty, g) {
    d4b(tx, ty, g);
}
//기본모음ㅣa
function 이1(tx, ty, g) {
    d5a(tx, ty, g);
}
//기본모음ㅣb
function 이2(tx, ty, g) {
    d5b(tx, ty, g);
}




// -------- 횡적 기본 모음 --------


//기본모음ㅗ
function 오(tx, ty, g) {
    c1(tx, ty, g);
}

//기본모음ㅛ
function 요(tx, ty, g) {
    c2(tx, ty, g);
}

//기본모음ㅜ
function 우(tx, ty, g) {
    c3(tx, ty, g);
}

//기본모음ㅠ
function 유(tx, ty, g) {
    c4(tx, ty, g);
}

//기본모음ㅡ
function 으(tx, ty, g) {
    c5(tx, ty, g);
}




// ------------------ 복합 모음 a,b-----------------------


// -------- 종적 복합 모음 a,b--------

//복합모음ㅐa
function 애1(tx, ty, g) {
    d6a(tx, ty, g);
}
//복합모음ㅐb
function 애2(tx, ty, g) {
    d6b(tx, ty, g);
}

//복합모음ㅒa
function 얘1(tx, ty, g) {
    d7a(tx, ty, g);
}
//복합모음ㅒb
function 얘2(tx, ty, g) {
    d7b(tx, ty, g);
}

//복합모음ㅔa
function 에1(tx, ty, g) {
    d8a(tx, ty, g);
}
//복합모음ㅔb
function 에2(tx, ty, g) {
    d8b(tx, ty, g);
}


//복합모음ㅖa
function 예1(tx, ty, g) {
    d9a(tx, ty, g);
}
//복합모음ㅖb
function 예2(tx, ty, g) {
    d9b(tx, ty, g);
}



// -------- 종+횡 복합 모음 a,b--------

//복합모음ㅘ
function 와(tx, ty, g) {

}


//복합모음ㅙ
function 왜(tx, ty, g) {

}


//복합모음ㅚ
function 외(tx, ty, g) {

}


//복합모음ㅝ
function 워(tx, ty, g) {

}


//복합모음ㅞ
function 웨(tx, ty, g) {

}


//복합모음ㅟ
function 위(tx, ty, g) {

}


//복합모음ㅢ
function 의(tx, ty, g) {

}




//------------------------------------------받침 재조합 그라운드------------------------------------------



// ------------------ 기본 받침 -----------------------

//기본받침ㄱ
function 받침ㄱ(tx, ty) {
    a1(tx, ty);
}


//기본받침ㄴ
function 받침ㄴ(tx, ty) {
    a2(tx, ty);
}

//기본받침ㄷ
// function bottom3(tx,ty){    
function 받침ㄷ(tx, ty) {
    a3(tx, ty);
}

//기본받침ㄹ
// function bottom4(tx, ty) {
function 받침ㄹ(tx, ty) {
    a4(tx, ty);
}

//기본받침ㅁ
function 받침ㅁ(tx, ty) {
    a5(tx, ty);
}

//기본받침ㅂ
function 받침ㅂ(tx, ty) {
    a6(tx, ty);
}

//기본받침ㅅ
function 받침ㅅ(tx, ty) {
    a7(tx, ty);
}

//기본받침ㅇ
function 받침ㅇ(tx, ty) {
    a8(tx, ty);
}

//기본받침ㅈ
function 받침ㅈ(tx, ty) {
    a9(tx, ty);
}

//기본받침ㅊ
function 받침ㅊ(tx, ty) {
    a10(tx, ty);
}

//기본받침ㅋ
function 받침ㅋ(tx, ty) {
    a11(tx, ty);
}

//기본받침ㅌ
function 받침ㅌ(tx, ty) {
    a12(tx, ty);
}

//기본받침ㅍ
function 받침ㅍ(tx, ty) {
    a13(tx, ty);
}

//기본받침ㅎ
function 받침ㅎ(tx, ty) {
    a14(tx, ty);
}


// ------------------ 겹받침 -----------------------

//겹받침 ㄱㅅ
function bottom15(tx, ty) {
    b1(tx + bm1, ty + bm2);
    b4(tx + bm1 + bm3, ty + bm2);
}



//겹받침 ㄴㅈ
function bottom16(tx, ty) {
    b6(tx + bm1, ty + bm2);
    b5(tx + bm1 + bm3, ty + bm2);
}


//겹받침 ㄴㅎ
function bottom17(tx, ty) {
    b6(tx + bm1, ty + bm2);
    b7(tx + bm1 + bm3, ty + bm2);
}


//겹받침 ㄹㄱ
function bottom18(tx, ty) {
    b8(tx + bm1, ty + bm2);
    b1(tx + bm1 + bm3, ty + bm2);
}


//겹받침 ㄹㅁ
function bottom19(tx, ty) {
    b8(tx + bm1, ty + bm2);
    b9(tx + bm1 + bm3, ty + bm2);
}


//겹받침 ㄹㅂ
function bottom20(tx, ty) {
    b8(tx + bm1, ty + bm2);
    b3(tx + bm1 + bm3, ty + bm2);
}


//겹받침 ㄹㅅ
function bottom21(tx, ty) {
    b8(tx + bm1, ty + bm2);
    b4(tx + bm1 + bm3, ty + bm2);
}


//겹받침 ㄹㅌ
function bottom22(tx, ty) {
    b8(tx + bm1, ty + bm2);
    b10(tx + bm1 + bm3, ty + bm2);
}


//겹받침 ㄹㅍ
function bottom23(tx, ty) {
    b8(tx + bm1, ty + bm2);
    b11(tx + bm1 + bm3, ty + bm2);
}


//겹받침 ㄹㅎ
function bottom24(tx, ty) {
    b8(tx + bm1, ty + bm2);
    b7(tx + bm1 + bm3, ty + bm2);
}


//겹받침 ㅂㅅ
function bottom25(tx, ty) {
    b3(tx + bm1, ty + bm2);
    b4(tx + bm1 + bm3, ty + bm2);
}







// ------------------ 쌍받침 -----------------------

//쌍받침ㄲ
function 받침ㄲ(tx, ty) {
    b1(tx + bm1, ty + bm2);
    b1(tx + bm1 + bm3, ty + bm2);
}

//쌍받침ㅆ
function 받침ㅆ(tx, ty) {
    b4(tx + bm1, ty + bm2);
    b4(tx + bm1 + bm3, ty + bm2);
}    
