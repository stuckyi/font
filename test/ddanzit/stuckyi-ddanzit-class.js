<<<<<<< HEAD
// stuckyi-class.js

var dataArray = { ㄱ: '', ㄴ: '' };

class 한글 {
    constructor() { 
        
        
    }
    
    /** 자음 모듈 (기본)  **************************/
    // 닿자, 기본 받침에 쓰이는 자음 모듈

    static ㄱ() {

        /* 기존 표현 */
        line(p1.x, p1.y, p2.x, p2.y);
        line(p2.x, p2.y, p4.x, p4.y);
        

        //p1과 p2, p2와 p4사이의 점 n개를 구해야 한다.
        //우리가 이렇게 진행하는 것은, 구조화를 위한 추상화를 하는 개념이라고 이해하자. 모든 자소에 대해 수백개의 pos가 있다면 인간이 눈으로 바라보기조차 힘들다.
        // 각각의 기준점을 바탕으로 사이의 점을 만들어낸다.
        //모여라에서처럼 각 기준점 사이의 점을 뽑아낸다음 draw로 간다는 개념이겠지?
        //미리 계산해둘 point들이기때문에, 효율걱정말자


        var arrayA = makePointByLerp(p1, p2, 10);
        var arrayB = makePointByLerp(p2, p4, 10);
        
        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        for (var i = 0; i < arrayA.length; i++){
            ellipse(arrayA[i].x, arrayA[i].y, 4, 4);
        }
        dataArray.ㄱ = arrayA;
        console.log("dataArray");
        console.log(dataArray);

        친구['꿈틀이']();
        



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
    static 얇은ㄹ() {
        /* 기존 표현 */
        line(bp1x,bp1y,bp5x,bp5y);
        line(bp5x,bp5y,bp11x,bp11y);
        line(bp9x,bp9y,bp11x,bp11y);
        line(bp9x,bp9y,bp13x,bp13y);
        line(bp13x, bp13y, bp17x, bp17y);
        


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
        line(bp1x,bp1y,bp5x,bp5y);
        line(bp1x,bp1y,bp13x,bp13y);
        line(bp13x,bp13y,bp17x,bp17y);
        line(bp5x, bp5y, bp17x, bp17y);
        
        /* 새로운 표현 */
        var arrayA = makePointByLerp(bp1, bp5, 10);
        var arrayB = makePointByLerp(bp1, bp13, 10);
        var arrayC = makePointByLerp(bp13, bp17, 10);
        var arrayD = makePointByLerp(bp5, bp17, 10);
        

        // arr1에 arr2의 모든 항목을 덧붙임, ES6 Spread_operator
        arrayA.push(...arrayB);
        arrayA.push(...arrayC);
        arrayA.push(...arrayD);
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
        
=======
>>>>>>> 671918f441422244e850c33822d6cbc54ce2f86c


var ddanzit;

//사용자입력문장
//사용자입력글자배열
//자소 추출
//사잇점 계산 ----x
//사잇점 추출 ----x

//사용자입력문장
//사용자입력글자배열
//자소 추출
//사잇점 매칭 후 객체 생성 





class 딴짓 {


    
    // 기본 속성 부여
    constructor(centerPos, translatePos){
        this.positionX = centerPos.x; //x좌표
        this.positionY = centerPos.y; //y좌표
        this.translatePos = translatePos;
        this.theta = 0.1;

        this.bodyWidth = 10; //몸너비
        this.bodyHeight = 20; //몸길이
        this.defaultMargin = this.bodyWidth / 10; //단위여백
        this.eyeR = this.bodyWidth / 6; //눈반지름
        this.legWeight = 2; //다리굵기
        this.leg1Height = this.bodyHeight / 4; //허벅지길이
        this.leg2Height = this.bodyHeight / 4; //정강이길이
        this.footHeight = this.bodyWidth / 10; //발길이
        
        // this.rotation = random(0, 360); // 전체 회전값
        this.rotation = random(0,10); // 전체 회전값
        this.rotationLeftLeg1 = 20; // 왼쪽 허벅다리 회전값
        this.rotationLeftLeg2 = 90; // 왼쪽 정강이 회전값
        this.rotationLeftFoot = 20; // 왼쪽 발 회전값
        this.rotationRightLeg1 = 0; //오른쪽 허벅다리 회전값
        this.rotationRightLeg2 = 0; //오른쪽 정강이 회전값
        this.rotationRightFoot = 0; //오른쪽 발 회전값
        
        this.bodyColor = color('hsl(130,30,60)'); //몸색
        this.eyeColor = color('hsl(0,0,100)'); //눈색
    }

    display() {
        push();
        translate(this.translatePos.x, this.translatePos.y);
        this.assembly();
        pop();
    }
    update(mx, my) {
        var x = map(mx, 0, width, -5, 5);
        var y = map(my, 0, height, -5, 5);

        var dist = (x, y, this.positionX, this.positionY);
        if (dist < 10) {
            this.rotation += this.theta;
            this.positionX += x;
        }
        
    }
    
    
    assembly(){
        push();
        translate(this.positionX,this.positionY);
        // rotate(radians(this.rotation));
        rotate(radians(this.rotation += 0.01));
            //몸소환
            push();
            this.body();
                //눈소환
                this.eyes();
            pop();
        
        
            //허벅다리 소환하여 왼쪽 허벅다리로 사용
            push();
            translate(-this.bodyWidth / 5, this.bodyHeight * 2 / 5);
            rotate(radians(this.rotationLeftLeg1));
            this.leg1();
                //정강이 소환
                translate(0,this.leg1Height);
                rotate(radians(this.rotationLeftLeg2));
                this.leg2();
                //발
                translate(0,this.leg2Height);
                rotate(radians(this.rotationLeftFoot));
                this.foot();
            pop();
        
        
            //허벅다리 소환하여 오른쪽 허벅다리로 사용
            push();
            translate(this.bodyWidth / 5, this.bodyHeight * 2 / 5);
            rotate(radians(this.rotationRightLeg1));
            this.leg1();
                //정강이
                translate(0,this.leg1Height);
                rotate(radians(this.rotationRightLeg2));
                this.leg2();
                //발
                translate(0,this.leg2Height);
                rotate(radians(this.rotationRightFoot));
                this.foot();
            pop();
        
        
        pop();
    }

    body(){
        push();
        fill(20);
        noStroke();
        rectMode(CENTER);
        rect(0,0,this.bodyWidth,this.bodyHeight,this.bodyWidth);
        this.eyes();
        pop();
    }
    
    eyes(){
        push();
        fill(255);
        noStroke();
        ellipse(-this.defaultMargin,-this.defaultMargin * 2,this.eyeR,this.eyeR);
        ellipse(2*this.defaultMargin,-this.defaultMargin * 2,this.eyeR,this.eyeR);
        pop();
    }
    
    leg1(){
        push();
        noFill();
        stroke(80);
        strokeWeight(this.legWeight);
        line(0,0,0,this.leg1Height); 
        pop();
    }
    
    leg2(){
        push();
        noFill();
        stroke(60);
        strokeWeight(this.legWeight);
        line(0,0,0,this.leg2Height);
        pop();
    }

    foot(){
        push();
        noFill();
        stroke(20);
        strokeWeight(this.legWeight);
        line(0,0,this.footHeight,0);
        pop();
    }
}
/*
//딴짓클래스는 글자를 받는것이 아니라, 하나의 사잇점만 받는다.
class 딴짓 {
    constructor(centerPos, translatePos) {
        this.centerPos = centerPos; //딴짓객체의 중심점
        this.translatePos = translatePos;
    }

    display() {
        push();
        translate(this.translatePos.x, this.translatePos.y);
        ellipse(this.centerPos.x, this.centerPos.y, 10, 2);
        pop();
    }
    

    update() {
        console.log("stuckyi coded font");
    }

}

*/
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

