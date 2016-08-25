// stuckyi-class.js

var dataArray = { ㄱ: '', ㄴ: '' };


var bmVec = createVector(bm, 0);


글자구조데이터();
function 글자구조데이터() {

/* 글자구조데이터
  * 클래스에서 계산하는 것이아니라, setup함수에서 객체 생성시 활용하기 위함.
  * 자소별 기준점을 통해 글자데이터객체를 구한다.
*/

    //기준점 (made by yumm)
    /*
    var 자소별기준점 = {
        ㄱ: [[p1, p2], [p2, p4]],
        ㄴ: [[p1, p2], [p2, p4]],
        ㄷ: [[p1, p2], [p2, p4]],
        ㄹ: [],
        ㅁ: [[p1, p2], [p2, p4], [p1, p3], [p3, p4]],
        ㅂ: [[p1, p3], [p3, p4], [p2, p4], [p5, p6]],
        ㅅ: [[p8, p7], [p7, p3], [p7, p4]],
        ㅇ: [[]],
        ㅈ: [[p1, p2], [p8, p7], [p7, p3], [p7, p4]],
        ㅊ: [[p12, p8], [p1, p2], [p8, p7], [p7, p3], [p7, p4]],
        ㅋ: [[p1, p2], [p5, p6], [p2, p4]],
        ㅌ: [[p1, p2], [p1, p3], [p5, p6], [p3, p4]],
        ㅍ: [[p1, p2], [p13, p15], [p14, p16], [p3, p4]],
        ㅎ: [[p9, p10], [p12, p11], [p7, p8]],

        얇은ㄱ: [[bp1, bp5], [bp5, bp17]],
        얇은ㄴ: [[bp1, bp13], [bp13, bp17]],
        얇은ㄷ: [[bp1, bp13], [bp5, bp17], [bp13, bp17], [bp9, bp11]],
        얇은ㄹ: [[bp1, bp5], [bp5, bp11], [bp9, bp11], [bp9, bp13], [bp13, bp17]],
        얇은ㅁ: [[bp1, bp5], [bp1, bp13], [bp13, bp17], [bp5, bp17]],
        
        얇은ㅂ: [[bp1, bp13], [bp5, bp17], [bp13, bp17], [bp9, bp11],],
        얇은ㅅ: [[bp3, bp10], [bp10, bp13], [bp10, bp17]],
        얇은ㅈ: [[bp1, bp5], [bp3, bp10], [bp10, bp13], [bp10, bp17]],
        얇은ㅌ: [[bp1, bp5], [bp1, bp13], [bp13, bp17], [bp9, bp11]],
        얇은ㅍ: [[bp1, bp5], [bp2, bp14], [bp4, bp16], [bp13, bp17]],
        얇은ㅎ: [[bp3, bp7], [bp6, bp8]],
        
        오: [[cp1, cp2], [cp6, cp3]],
        요: [[cp1, cp2], [cp8, cp4], [cp9, cp5]],
        우: [[cp1, cp2], [cp3, cp7]],
        유: [[cp1, cp2], [cp4, cp10], [cp5, cp11]],
        으: [[cp1, cp2]],
        
        아: [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp6, dp5]],
        야: [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp14, dp15], [dp17, dp18]],
        어: [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp7, dp5]],
        여: [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp14, dp16], [dp17, dp19]],
        이: [[dp1, dp10], [dp10, dp12], [dp12, dp2]],
        애: [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp6, dp5], [dp3, dp11], [dp11, dp13], [dp13, dp4]],
        얘: [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp14, dp15], [dp17, dp18], [dp3, dp11], [dp11, dp13], [dp13, dp4]],
        에: [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp7, dp5], [dp3, dp11], [dp11, dp13], [dp13, dp4]],
        예: [[dp1, dp10], [dp10, dp12], [dp12, dp2], [dp14, dp16], [dp17, dp19], [dp3, dp11], [dp11, dp13], [dp13, dp4]]
    };
    */
/*
        ㄱㅅ: [ ],
        ㄴㅈ: [],
        ㄴㅎ: [],
        ㄹㄱ: [],
        ㄹㅁ: [],
        ㄹㅂ: [],
        ㄹㅅ: [],
        ㄹㅌ: [],
        ㄹㅎ: [],
        ㅂㅅ: [],
        ㄲ: [],
        ㄸ: [],
        ㅆ: []

*/

var 자소별기준점 = [ 
    [[p1, p2], [p2, p4]],
    [[p1, p2], [p2, p4]],
    [[p1, p2], [p2, p4]],
    [[p1, p2], [p2, p4], [p4, p3], [p3,p5], [p5, p6]], //ㄹ
    [[p1, p2], [p2, p4], [p1, p3], [p3, p4]],
    [[p1, p3], [p3, p4], [p2, p4], [p5, p6]],
    [[p8, p7], [p7, p3], [p7, p4]],
    [[p9, p10], [p12, p11], [p7, p8]], //ㅇ
    [[p1, p2], [p8, p7], [p7, p3], [p7, p4]],
    [[p12, p8], [p1, p2], [p8, p7], [p7, p3], [p7, p4]],
    [[p1, p2], [p5, p6], [p2, p4]],
    [[p1, p2], [p1, p3], [p5, p6], [p3, p4]],
    [[p1, p2], [p13, p15], [p14, p16], [p3, p4]],
    [[p9, p10], [p12, p11], [p7, p8]],

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
    [[bp3, bp7], [bp6, bp8]],
        
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
    

    var 글자데이터객체 = {
    };




    for (var i = 0; i < 자소별기준점.length; i++) {
        var row = 자소별기준점[i];
        console.log(row[0] + ", " + row[1]);
    } 



     
}
class 데이터 {
    constructor() { 
        dataArray.ㄱ = this.데이터생성();
        dataArray.ㄱ = this.데이터_ㄴ();
        
    }
    
    /** 자음 모듈 (기본)  **************************/
    // 닿자, 기본 받침에 쓰이는 자음 모듈
    데이터생성() {
        this.데이터생성_ㄱ();
    }
    static 데이터_ㄱ() {

        var arrayA = makePointByLerp(p1, p2, 10);
        var arrayB = makePointByLerp(p2, p4, 10);
        arrayA.push(...arrayB);

        return arrayA;

    }
    static ㄴ() {

        
        /* 기존 표현 */
        line(p1.x, p1.y, p3.x,p3.y);
        line(p3.x, p3.y, p4.x, p4.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(p1, p3, 10);
        var arrayB = makePointByLerp(p3, p4, 10);
        
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }

    }
    static ㄷ() {
        /* 기존 표현 */
        line(p1.x, p1.y, p2.x, p2.y);
        line(p1.x, p1.y, p3.x, p3.y);
        line(p3.x, p3.y, p4.x, p4.y);
        


        /* 새로운 표현 */
        var arrayA = makePointByLerp(p1, p2, 10);
        var arrayB = makePointByLerp(p1, p3, 10);
        var arrayC = makePointByLerp(p3, p4, 10);
        
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }


    }
    static ㄹ() {
        line(w1 / 3 + mw0, h1 / 3 + mh0, w1 - mw0, h1 / 3 + mh0);
        line(w1 - mw0, h1/3 + mh0, w1 - mw0, h1*4/6);
        line(w1 - mw0, h1*4/6, w1/3 + mw0, h1*4/6);
        line(w1/3 + mw0, h1*4/6, w1/3 + mw0, h1 - mh0);
        line(w1/3 + mw0, h1 - mh0, w1-mw0 ,h1-mh0);
    }
    static ㅁ() {
        /* 기존 표현 */
        line(p1.x, p1.y, p2.x, p2.y);
        line(p2.x, p2.y ,p4.x ,p4.y);
        line(p1.x, p1.y, p3.x, p3.y);
        line(p3.x, p3.y, p4.x, p4.y);


        /* 새로운 표현 */
        var arrayA = makePointByLerp(p1, p2, 10);
        var arrayB = makePointByLerp(p2, p4, 10);
        var arrayC = makePointByLerp(p1, p3, 10);
        var arrayD = makePointByLerp(p3, p4, 10);
        
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);

        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }

    }
    static ㅂ() {
        /* 기존 표현 */
        line(p1.x,p1.y,p3.x,p3.y);
        line(p3.x,p3.y,p4.x,p4.y);
        line(p2.x,p2.y,p4.x,p4.y);
        line(p5.x, p5.y, p6.x, p6.y);
        


        /* 새로운 표현 */
        var arrayA = makePointByLerp(p1, p3, 10);
        var arrayB = makePointByLerp(p3, p4, 10);
        var arrayC = makePointByLerp(p2, p4, 10);
        var arrayD = makePointByLerp(p5, p6, 10);
        
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }
    static ㅅ() {
        /* 기존 표현 */
        line(p8.x,p8.y,p7.x,p7.y);
        line(p7.x,p7.y,p3.x,p3.y);
        line(p7.x, p7.y, p4.x, p4.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(p8, p7, 10);
        var arrayB = makePointByLerp(p7, p3, 10);
        var arrayC = makePointByLerp(p7, p4, 10);
        
        
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
        
    }
    static ㅇ() {
        ellipse(p7.x,p7.y,circleWidth,circleHeight);
    }
    static ㅈ() {
        /* 기존 표현 */
        line(p1.x,p1.y,p2.x,p2.y);
        line(p8.x,p8.y,p7.x,p7.y);
        line(p7.x,p7.y,p3.x,p3.y);
        line(p7.x, p7.y, p4.x, p4.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(p1, p2, 10);
        var arrayB = makePointByLerp(p8, p7, 10);
        var arrayC = makePointByLerp(p7, p3, 10);
        var arrayD = makePointByLerp(p7, p4, 10);
        
        
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
        
    }

    static ㅊ() {
        /* 기존 표현 */
        line(p12.x,p12.y,p8.x,p8.y);
        line(p1.x,p1.y,p2.x,p2.y);
        line(p8.x,p8.y,p7.x,p7.y);
        line(p7.x,p7.y,p3.x,p3.y);
        line(p7.x, p7.y, p4.x, p4.y);
        
        /* 새로운 표현 */
        var arrayA = makePointByLerp(p12, p8, 10);
        var arrayB = makePointByLerp(p1, p2, 10);
        var arrayC = makePointByLerp(p8, p7, 10);
        var arrayD = makePointByLerp(p7, p3, 10);
        var arrayE = makePointByLerp(p7, p4, 10);
        
        
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }

    static ㅋ() {
        /* 기존 표현 */
        line(p1.x, p1.y, p2.x, p2.y);
        line(p5.x, p5.y, p6.x, p6.y);
        line(p2.x, p2.y, p4.x, p4.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(p1, p2, 10);
        var arrayB = makePointByLerp(p5, p6, 10);
        var arrayC = makePointByLerp(p2, p4, 10);
        
        
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }

    static ㅌ() {
        /* 기존 표현 */
        line(p1.x,p1.y,p2.x,p2.y);
        line(p1.x,p1.y,p3.x,p3.y);
        line(p5.x, p5.y, p6.x, p6.y);
        line(p3.x, p3.y, p4.x, p4.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(p1, p2, 10);
        var arrayB = makePointByLerp(p1, p3, 10);
        var arrayC = makePointByLerp(p5, p6, 10);
        var arrayD = makePointByLerp(p3, p4, 10);
        
        
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }

    static ㅍ() {
        /* 기존 표현 */
        line(p1.x, p1.y, p2.x, p2.y);
        line(p13.x, p13.y, p15.x, p15.y);
        line(p14.x, p14.y, p16.x, p16.y);
        line(p3.x, p3.y, p4.x, p4.y);


        /* 새로운 표현 */
        var arrayA = makePointByLerp(p1, p2, 10);
        var arrayB = makePointByLerp(p13, p15, 10);
        var arrayC = makePointByLerp(p14, p16, 10);
        var arrayD = makePointByLerp(p3, p4, 10);
        
        
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }


    }
    static ㅎ() {
        /* 기존 표현 */
        line(p9.x,p9.y,p10.x,p10.y);
        line(p12.x,p12.y,p11.x,p11.y);
        ellipse(p7.x, p7.y, circleWidth, circleHeight);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(p9, p10, 10);
        var arrayB = makePointByLerp(p12, p11, 10);
        
        
        
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }


    /** 자음 모듈 (얇은)  **************************/
    //복합 자음자와 겹받침을 위한 기본 자음 모듈

    static 얇은ㄱ() {
        /* 기존 표현 */
        line(bp1.x,bp1.y,bp5.x,bp5.y);
        line(bp5.x, bp5.y, bp17.x, bp17.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(bp1, bp5, 10);
        var arrayB = makePointByLerp(bp5, bp17, 10);
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }
    static 얇은ㄷ() {
        /* 기존 표현 */
        line(bp1.x,bp1.y,bp5.x,bp5.y);
        line(bp1.x,bp1.y,bp13.x,bp13.y);
        line(bp13.x, bp13.y, bp17.x, bp17.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(bp1, bp5, 10);
        var arrayB = makePointByLerp(bp1, bp13, 10);
        var arrayC = makePointByLerp(bp13, bp17, 10);
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }

    static 얇은ㅂ() {
        /* 기존 표현 */
        line(bp1.x,bp1.y,bp13.x,bp13.y);
        line(bp5.x,bp5.y,bp17.x,bp17.y);
        line(bp13.x,bp13.y,bp17.x,bp17.y);
        line(bp9.x, bp9.y, bp11.x, bp11.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(bp1, bp13, 10);
        var arrayB = makePointByLerp(bp5, bp17, 10);
        var arrayC = makePointByLerp(bp13, bp17, 10);
        var arrayD = makePointByLerp(bp9, bp11, 10);
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }
    static 얇은ㅅ() {
        /* 기존 표현 */
        line(bp3.x,bp3.y,bp10.x,bp10.y);
        line(bp10.x,bp10.y,bp13.x,bp13.y);
        line(bp10.x, bp10.y, bp17.x, bp17.y);
        
        /* 새로운 표현 */
        var arrayA = makePointByLerp(bp3, bp10, 10);
        var arrayB = makePointByLerp(bp10, bp13, 10);
        var arrayC = makePointByLerp(bp10, bp17, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }
    static 얇은ㅈ() {
        /* 기존 표현 */
        line(bp1.x,bp1.y,bp5.x,bp5.y);
        line(bp3.x,bp3.y,bp10.x,bp10.y);
        line(bp10.x,bp10.y,bp13.x,bp13.y);
        line(bp10.x, bp10.y, bp17.x, bp17.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(bp1, bp5, 10);
        var arrayB = makePointByLerp(bp3, bp10, 10);
        var arrayC = makePointByLerp(bp10, bp13, 10);
        var arrayD = makePointByLerp(bp10, bp17, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }
    static 얇은ㄴ() {
        /* 기존 표현 */
        line(bp1.x,bp1.y,bp13.x,bp13.y);
        line(bp13.x, bp13.y, bp17.x, bp17.y);
        
        /* 새로운 표현 */
        var arrayA = makePointByLerp(bp1, bp13, 10);
        var arrayB = makePointByLerp(bp13, bp17, 10);
        // var arrayC = makePointByLerp(bp10, bp13, 10);
        // var arrayD = makePointByLerp(bp10, bp17, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        // arrayA.push(...arrayC);
        // arrayA.push(...arrayD);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }
    static 얇은ㅎ() {
        /* 기존 표현 */
        line(bp3.x,bp3.y,bp7.x,bp7.y);
        line(bp6.x,bp6.y,bp8.x,bp8.y);
        ellipse(bp12.x, bp12.y, circleWidth2, circleHeight2);
        
        /* 새로운 표현 */
        var arrayA = makePointByLerp(bp3, bp7, 10);
        var arrayB = makePointByLerp(bp6, bp8, 10);
        // var arrayC = makePointByLerp(bp10, bp13, 10);
        // var arrayD = makePointByLerp(bp10, bp17, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        // arrayA.push(...arrayC);
        // arrayA.push(...arrayD);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }


    }
    static 얇은ㄹ() {
        /* 기존 표현 */
        line(bp1.x, bp1.y, bp5.x, bp5.y);
        line(bp5.x,bp5.y,bp11.x,bp11.y);
        line(bp9.x,bp9.y,bp11.x,bp11.y);
        line(bp9.x,bp9.y,bp13.x,bp13.y);
        line(bp13.x, bp13.y, bp17.x, bp17.y);
        
        /* 새로운 표현 */
        var arrayA = makePointByLerp(bp1, bp5, 10);
        var arrayB = makePointByLerp(bp5, bp11, 10);
        var arrayC = makePointByLerp(bp9, bp11, 10);
        var arrayD = makePointByLerp(bp9, bp13, 10);
        var arrayE = makePointByLerp(bp13, bp17, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }
    static 얇은ㅁ() {
        /* 기존 표현 */
        line(bp1.x,bp1.y,bp5.x,bp5.y);
        line(bp1.x,bp1.y,bp13.x,bp13.y);
        line(bp13.x,bp13.y,bp17.x,bp17.y);
        line(bp5.x, bp5.y, bp17.x, bp17.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(bp1, bp5, 10);
        var arrayB = makePointByLerp(bp1, bp13, 10);
        var arrayC = makePointByLerp(bp13, bp17, 10);
        var arrayD = makePointByLerp(bp5, bp17, 10);
        // var arrayE = makePointByLerp(bp13, bp17, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        // arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }
    static 얇은ㅌ() {
        /* 기존 표현 */
        line(bp1.x,bp1.y,bp5.x,bp5.y);
        line(bp1.x,bp1.y,bp13.x,bp13.y);
        line(bp13.x,bp13.y,bp17.x,bp17.y);
        line(bp9.x, bp9.y, bp11.x, bp11.y);
        


        /* 새로운 표현 */
        var arrayA = makePointByLerp(bp1, bp5, 10);
        var arrayB = makePointByLerp(bp1, bp13, 10);
        var arrayC = makePointByLerp(bp13, bp17, 10);
        var arrayD = makePointByLerp(bp9, bp11, 10);
        // var arrayE = makePointByLerp(bp13, bp17, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        // arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }
    static 얇은ㅍ() {
        /* 기존 표현 */
        line(bp1.x,bp1.y,bp5.x,bp5.y);
        line(bp2.x,bp2.y,bp14.x,bp14.y);
        line(bp4.x,bp4.y,bp16.x,bp16.y);
        line(bp13.x, bp13.y, bp17.x, bp17.y);
        


        /* 새로운 표현 */
        var arrayA = makePointByLerp(bp1, bp5, 10);
        var arrayB = makePointByLerp(bp2, bp14, 10);
        var arrayC = makePointByLerp(bp4, bp16, 10);
        var arrayD = makePointByLerp(bp13, bp17, 10);
        // var arrayE = makePointByLerp(bp13, bp17, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        // arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }
    
    
    /** 모음 - 행적 모음 **************************/


    static 오(g) {
        /* 기존 표현 */
        line(cp1.x,cp1.y,cp2.x,cp2.y);
        line(cp6.x, cp6.y, cp3.x + g, cp3.y);

        /* 새로운 표현 */
        var arrayA = makePointByLerp(cp1, cp2, 10);
        var arrayB = makePointByLerp(cp6, cp3, 10);
        // var arrayC = makePointByLerp(cp4, cp16, 10);
        // var arrayD = makePointByLerp(cp13, cp17, 10);
        // var arrayE = makePointByLerp(cp13, cp17, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        // arrayA.push(...arrayC);
        // arrayA.push(...arrayD);
        // arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
        
    } 

    static 요(g) {
        /* 기존 표현 */
        line(cp1.x,cp1.y,cp2.x,cp2.y);
        line(cp8.x,cp8.y,cp4.x+g,cp4.y);
        line(cp9.x, cp9.y, cp5.x + g, cp5.y);

        /* 새로운 표현 */
        var arrayA = makePointByLerp(cp1, cp2, 10);
        var arrayB = makePointByLerp(cp8, cp4, 10);
        var arrayC = makePointByLerp(cp9, cp5, 10);
        // var arrayD = makePointByLerp(cp13, cp17, 10);
        // var arrayE = makePointByLerp(cp13, cp17, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        // arrayA.push(...arrayD);
        // arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
        

    } 
    
    static 우(g) {
        /* 기존 표현 */
        line(cp1.x,cp1.y,cp2.x,cp2.y);
        line(cp3.x, cp3.y, cp7.x + g, cp7.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(cp1, cp2, 10);
        var arrayB = makePointByLerp(cp3, cp7, 10);
        // var arrayC = makePointByLerp(cp9, cp5, 10);
        // var arrayD = makePointByLerp(cp13, cp17, 10);
        // var arrayE = makePointByLerp(cp13, cp17, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        // arrayA.push(...arrayC);
        // arrayA.push(...arrayD);
        // arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    } 

    static 유(g) {
        /* 기존 표현 */
        line(cp1.x,cp1.y,cp2.x,cp2.y);
        line(cp4.x,cp4.y,cp10.x+g,cp10.y);
        line(cp5.x, cp5.y, cp11.x + g, cp11.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(cp1, cp2, 10);
        var arrayB = makePointByLerp(cp4, cp10, 10);
        var arrayC = makePointByLerp(cp5, cp11, 10);
        // var arrayD = makePointByLerp(cp13, cp17, 10);
        // var arrayE = makePointByLerp(cp13, cp17, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        // arrayA.push(...arrayD);
        // arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    } 

    static 으() {
        /* 기존 표현 */
        line(cp1.x, cp1.y, cp2.x, cp2.y);



        /* 새로운 표현 */
        var arrayA = makePointByLerp(cp1, cp2, 10);
        // var arrayB = makePointByLerp(cp6, cp3, 10);
        // var arrayC = makePointByLerp(cp4, cp16, 10);
        // var arrayD = makePointByLerp(cp13, cp17, 10);
        // var arrayE = makePointByLerp(cp13, cp17, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        // arrayA.push(...arrayB);
        // arrayA.push(...arrayC);
        // arrayA.push(...arrayD);
        // arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    } 


    /** 모음 - 종적 모음 **************************/
    // a: 높이가 낮은 자음이 초성에 올 때
    // b: 높이가 높은 자음이 초성에 올 때    

    static 아A(g) {
        /* 기존 표현 */
        //중간세로선
        line(dp1.x,dp1.y,dp10.x+g,dp10.y);
        line(dp10.x+g,dp10.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp6.x + g, dp6.y, dp5.x + g, dp5.y);
        


        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp10, 10);
        var arrayB = makePointByLerp(dp10, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        var arrayD = makePointByLerp(dp6, dp5, 10);
        // var arrayE = makePointByLerp(dp13, dp17, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        // arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }


    }
    static 아B(g) {
        //중간세로선
        line(dp1.x,dp1.y,dp8.x+g,dp8.y);
        line(dp8.x+g,dp8.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp6.x + g, dp6.y, dp5.x + g, dp5.y);
        


        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp8, 10);
        var arrayB = makePointByLerp(dp8, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        var arrayD = makePointByLerp(dp6, dp5, 10);
        // var arrayE = makePointByLerp(dp13, dp17, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        // arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }

    }


    static 야A(g) {
        //중간세로선
        line(dp1.x,dp1.y,dp10.x+g,dp10.y);
        line(dp10.x+g,dp10.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp14.x+g,dp14.y,dp15.x+g,dp15.y);
        line(dp17.x + g, dp17.y, dp18.x + g, dp18.y);
        



        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp10, 10);
        var arrayB = makePointByLerp(dp10, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        var arrayD = makePointByLerp(dp14, dp15, 10);
        var arrayE = makePointByLerp(dp17, dp18, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }

    }
    static 야B(g) {
        //중간세로선
        line(dp1.x,dp1.y,dp8.x+g,dp8.y);
        line(dp8.x+g,dp8.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp14.x+g,dp14.y,dp15.x+g,dp15.y);
        line(dp17.x + g, dp17.y, dp18.x + g, dp18.y);

        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp8, 10);
        var arrayB = makePointByLerp(dp8, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        var arrayD = makePointByLerp(dp14, dp15, 10);
        var arrayE = makePointByLerp(dp17, dp18, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }

    }

    static 어A(g) {
        //중간세로선
        line(dp1.x,dp1.y,dp10.x+g,dp10.y);
        line(dp10.x+g,dp10.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp7.x + g, dp7.y, dp5.x + g, dp5.y);
        



        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp10, 10);
        var arrayB = makePointByLerp(dp10, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        var arrayD = makePointByLerp(dp7, dp5, 10);
        // var arrayE = makePointByLerp(dp17, dp18, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        // arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }

    }
    static 어B(g) {
        //중간세로선
        line(dp1.x,dp1.y,dp8.x+g,dp8.y);
        line(dp8.x+g,dp8.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp7.x + g, dp7.y, dp5.x + g, dp5.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp8, 10);
        var arrayB = makePointByLerp(dp8, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        var arrayD = makePointByLerp(dp7, dp5, 10);
        // var arrayE = makePointByLerp(dp17, dp18, 10);
        
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        // arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }



    
    static 여A(g) {
        //중간세로선
        line(dp1.x,dp1.y,dp10.x+g,dp10.y);
        line(dp10.x+g,dp10.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp14.x+g,dp14.y,dp16.x+g,dp16.y);
        line(dp17.x + g, dp17.y, dp19.x + g, dp19.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp10, 10);
        var arrayB = makePointByLerp(dp10, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        var arrayD = makePointByLerp(dp14, dp16, 10);
        var arrayE = makePointByLerp(dp17, dp19, 10);
        
    
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }


    }
    static 여B(g) {
        //중간세로선
        line(dp1.x,dp1.y,dp8.x+g,dp8.y);
        line(dp8.x+g,dp8.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp14.x+g,dp14.y,dp16.x+g,dp16.y);
        line(dp17.x + g, dp17.y, dp19.x + g, dp19.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp8, 10);
        var arrayB = makePointByLerp(dp8, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        var arrayD = makePointByLerp(dp14, dp16, 10);
        var arrayE = makePointByLerp(dp17, dp19, 10);
        
    
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }
    


    static 이A(g) {
       //중간세로선
        line(dp1.x,dp1.y,dp10.x+g,dp10.y);
        line(dp10.x+g,dp10.y,dp12.x+g,dp12.y);
        line(dp12.x + g, dp12.y, dp2.x, dp2.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp10, 10);
        var arrayB = makePointByLerp(dp10, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        // var arrayD = makePointByLerp(dp14, dp16, 10);
        // var arrayE = makePointByLerp(dp17, dp19, 10);
        
    
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        // arrayA.push(...arrayD);
        // arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }

    static 이B(g) {
        //중간세로선
        line(dp1.x,dp1.y,dp8.x+g,dp8.y);
        line(dp8.x+g,dp8.y,dp12.x+g,dp12.y);
        line(dp12.x + g, dp12.y, dp2.x, dp2.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp8, 10);
        var arrayB = makePointByLerp(dp8, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        // var arrayD = makePointByLerp(dp14, dp16, 10);
        // var arrayE = makePointByLerp(dp17, dp19, 10);
        
    
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        // arrayA.push(...arrayD);
        // arrayA.push(...arrayE);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }



    static 애A(g) {
       //중간세로선
        line(dp1.x,dp1.y,dp10.x+g,dp10.y);
        line(dp10.x+g,dp10.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp6.x+g,dp6.y,dp5.x+g,dp5.y);
        //오른쪽세로선
        line(dp3.x,dp3.y,dp11.x+g,dp11.y);
        line(dp11.x+g,dp11.y,dp13.x+g,dp13.y);
        line(dp13.x + g, dp13.y, dp4.x, dp4.y);
        


        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp10, 10);
        var arrayB = makePointByLerp(dp10, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        var arrayD = makePointByLerp(dp6, dp5, 10);
        var arrayE = makePointByLerp(dp3, dp11, 10);
        var arrayF = makePointByLerp(dp11, dp13, 10);
        var arrayG = makePointByLerp(dp13, dp4, 10);
        
    
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        arrayA.push(...arrayE);
        arrayA.push(...arrayF);
        arrayA.push(...arrayG);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }

    static 애B(g) {
        //중간세로선
        line(dp1.x,dp1.y,dp8.x+g,dp8.y);
        line(dp8.x+g,dp8.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp6.x+g,dp6.y,dp5.x+g,dp5.y);
        //오른쪽세로선
        line(dp3.x,dp3.y,dp9.x+g,dp9.y);
        line(dp9.x+g,dp9.y,dp13.x+g,dp13.y);
        line(dp13.x + g, dp13.y, dp4.x, dp4.y);
        


        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp8, 10);
        var arrayB = makePointByLerp(dp8, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        var arrayD = makePointByLerp(dp6, dp5, 10);
        var arrayE = makePointByLerp(dp3, dp9, 10);
        var arrayF = makePointByLerp(dp9, dp13, 10);
        var arrayG = makePointByLerp(dp13, dp4, 10);
        
    
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        arrayA.push(...arrayE);
        arrayA.push(...arrayF);
        arrayA.push(...arrayG);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }


    static 얘A(g) {
         //중간세로선
        line(dp1.x,dp1.y,dp10.x+g,dp10.y);
        line(dp10.x+g,dp10.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp14.x+g,dp14.y,dp15.x+g,dp15.y);
        line(dp17.x+g,dp17.y,dp18.x+g,dp18.y);
        //오른쪽세로선
        line(dp3.x,dp3.y,dp11.x+g,dp11.y);
        line(dp11.x+g,dp11.y,dp13.x+g,dp13.y);
        line(dp13.x+g,dp13.y,dp4.x,dp4.y);
        


        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp10, 10);
        var arrayB = makePointByLerp(dp10, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);

        var arrayD = makePointByLerp(dp14, dp15, 10);
        var arrayE = makePointByLerp(dp17, dp18, 10);

        var arrayF = makePointByLerp(dp3, dp11, 10);
        var arrayG = makePointByLerp(dp11, dp13, 10);
        var arrayH = makePointByLerp(dp13, dp4, 10);
        
    
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        arrayA.push(...arrayE);
        arrayA.push(...arrayF);
        arrayA.push(...arrayG);
        arrayA.push(...arrayH);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }

    static 얘B(g) {
        //중간세로선
        line(dp1.x,dp1.y,dp10.x+g,dp10.y);
        line(dp10.x+g,dp10.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp14.x+g,dp14.y,dp15.x+g,dp15.y);
        line(dp17.x+g,dp17.y,dp18.x+g,dp18.y);
        //오른쪽세로선
        line(dp3.x,dp3.y,dp11.x+g,dp11.y);
        line(dp11.x+g,dp11.y,dp13.x+g,dp13.y);
        line(dp13.x + g, dp13.y, dp4.x, dp4.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp10, 10);
        var arrayB = makePointByLerp(dp10, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);

        var arrayD = makePointByLerp(dp14, dp15, 10);
        var arrayE = makePointByLerp(dp17, dp18, 10);

        var arrayF = makePointByLerp(dp3, dp11, 10);
        var arrayG = makePointByLerp(dp11, dp13, 10);
        var arrayH = makePointByLerp(dp13, dp4, 10);
        
    
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        arrayA.push(...arrayE);
        arrayA.push(...arrayF);
        arrayA.push(...arrayG);
        arrayA.push(...arrayH);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }



    static 에A(g) {
       //중간세로선
        line(dp1.x,dp1.y,dp10.x+g,dp10.y);
        line(dp10.x+g,dp10.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp7.x+g,dp7.y,dp5.x+g,dp5.y);
        //오른쪽세로선
        line(dp3.x,dp3.y,dp11.x+g,dp11.y);
        line(dp11.x+g,dp11.y,dp13.x+g,dp13.y);
        line(dp13.x + g, dp13.y, dp4.x, dp4.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp10, 10);
        var arrayB = makePointByLerp(dp10, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        var arrayD = makePointByLerp(dp7, dp5, 10);
        var arrayE = makePointByLerp(dp3, dp11, 10);
        var arrayF = makePointByLerp(dp11, dp13, 10);
        var arrayG = makePointByLerp(dp13, dp4, 10);
        
    
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        arrayA.push(...arrayE);
        arrayA.push(...arrayF);
        arrayA.push(...arrayG);
        // arrayA.push(...arrayH);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }

    static 에B(g) {
       //중간세로선
        line(dp1.x,dp1.y,dp8.x+g,dp8.y);
        line(dp8.x+g,dp8.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp7.x+g,dp7.y,dp5.x+g,dp5.y);
        //오른쪽세로선
        line(dp3.x,dp3.y,dp9.x+g,dp9.y);
        line(dp9.x+g,dp9.y,dp13.x+g,dp13.y);
        line(dp13.x + g, dp13.y, dp4.x, dp4.y);
        


        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp8, 10);
        var arrayB = makePointByLerp(dp8, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        var arrayD = makePointByLerp(dp7, dp5, 10);
        var arrayE = makePointByLerp(dp3, dp9, 10);
        var arrayF = makePointByLerp(dp9, dp13, 10);
        var arrayG = makePointByLerp(dp13, dp4, 10);
        
    
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        arrayA.push(...arrayE);
        arrayA.push(...arrayF);
        arrayA.push(...arrayG);
        // arrayA.push(...arrayH);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
    }
    



    static 예A(g) {
        //중간세로선
        line(dp1.x,dp1.y,dp10.x+g,dp10.y);
        line(dp10.x+g,dp10.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp14.x+g,dp14.y,dp16.x+g,dp16.y);
        line(dp17.x+g,dp17.y,dp19.x+g,dp19.y);
        //오른쪽세로선
        line(dp3.x,dp3.y,dp11.x+g,dp11.y);
        line(dp11.x+g,dp11.y,dp13.x+g,dp13.y);
        line(dp13.x + g, dp13.y, dp4.x, dp4.y);
        


        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp10, 10);
        var arrayB = makePointByLerp(dp10, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        var arrayD = makePointByLerp(dp14, dp16, 10);
        var arrayE = makePointByLerp(dp17, dp19, 10);
        var arrayF = makePointByLerp(dp3, dp11, 10);
        var arrayG = makePointByLerp(dp11, dp13, 10);
        var arrayH = makePointByLerp(dp13, dp4, 10);
        
    
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        arrayA.push(...arrayE);
        arrayA.push(...arrayF);
        arrayA.push(...arrayG);
        arrayA.push(...arrayH);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }


    }

    static 예B(g) {
        //중간세로선
        line(dp1.x,dp1.y,dp8.x+g,dp8.y);
        line(dp8.x+g,dp8.y,dp12.x+g,dp12.y);
        line(dp12.x+g,dp12.y,dp2.x,dp2.y);
        //가로선
        line(dp14.x+g,dp14.y,dp16.x+g,dp16.y);
        line(dp17.x+g,dp17.y,dp19.x+g,dp19.y);
        //오른쪽세로선
        line(dp3.x,dp3.y,dp9.x+g,dp9.y);
        line(dp9.x+g,dp9.y,dp13.x+g,dp13.y);
        line(dp13.x + g, dp13.y, dp4.x, dp4.y);
        

        /* 새로운 표현 */
        var arrayA = makePointByLerp(dp1, dp8, 10);
        var arrayB = makePointByLerp(dp8, dp12, 10);
        var arrayC = makePointByLerp(dp12, dp2, 10);
        var arrayD = makePointByLerp(dp14, dp16, 10);
        var arrayE = makePointByLerp(dp17, dp19, 10);
        var arrayF = makePointByLerp(dp3, dp9, 10);
        var arrayG = makePointByLerp(dp9, dp13, 10);
        var arrayH = makePointByLerp(dp13, dp4, 10);
        
    
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
        arrayA.push(...arrayE);
        arrayA.push(...arrayF);
        arrayA.push(...arrayG);
        arrayA.push(...arrayH);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }


    }

    /** 겹받침 **************************/
    // 얇은 자음으로 구성

    //겹받침 ㄱㅅ
    static bottom15() {
        this.얇은ㄱ();
        push();
        translate(bm3, 0);
        this.얇은ㅅ();
        pop();
    }
    //겹받침 ㄴㅈ
    static bottom16() {
        this.얇은ㄴ();
        push();
        translate(bm3, 0);
        this.얇은ㅈ();
        pop();
    }
    //겹받침 ㄴㅈ
    static bottom16() {
        this.얇은ㄴ();
        push();
        translate(bm3, 0);
        this.얇은ㅈ();
        pop();
    }
    //겹받침 ㄴㅎ
    static bottom17() {
        this.얇은ㄴ();
        push();
        translate(bm3, 0);
        this.얇은ㅎ();
        pop();
    }
    //겹받침 ㄹㄱ
    static bottom18() {
        this.얇은ㄹ();
        push();
        translate(bm3, 0);
        this.얇은ㄱ();
        pop();
    }
    //겹받침 ㄹㅁ
    static bottom19() {
        this.얇은ㄹ();
        push();
        translate(bm3, 0);
        this.얇은ㅁ();
        pop();
    }
    //겹받침 ㄹㅂ
    static bottom20() {
        this.얇은ㄹ();
        push();
        translate(bm3, 0);
        this.얇은ㅂ();
        pop();
    }
    //겹받침 ㄹㅅ
    static bottom21() {
        this.얇은ㄹ();
        push();
        translate(bm3, 0);
        this.얇은ㅅ();
        pop();
    }
    //겹받침 ㄹㅌ
    static bottom22() {
        this.얇은ㄹ();
        push();
        translate(bm3, 0);
        this.얇은ㅌ();
        pop();
    }
    //겹받침 ㄹㅍ
    static bottom23() {
        this.얇은ㄹ();
        push();
        translate(bm3, 0);
        this.얇은ㅍ();
        pop();
    }
    //겹받침 ㄹㅎ
    static bottom24() {
        this.얇은ㄹ();
        push();
        translate(bm3, 0);
        this.얇은ㅎ();
        pop();
    }
    //겹받침 ㅂㅅ
    static bottom25() {
        this.얇은ㅂ();
        push();
        translate(bm3, 0);
        this.얇은ㅅ();
        pop();
    }

    /** 쌍자음 **************************/
    // ㄲ, ㅆ
    static ㄲ() {
        this.얇은ㄱ();
        push();
        translate(bm3, 0);
        this.얇은ㄱ();
        pop();
    }
    // ㄲ, ㅆ
    static ㅆ() {
        this.얇은ㅅ();
        push();
        translate(bm3, 0);
        this.얇은ㅅ();
        pop();
    }

    update() {
        console.log("stuckyi coded font");
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
    
    
    return resultArray;
}

