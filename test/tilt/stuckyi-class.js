// stuckyi-class.js
/*

변수화할 것들
1. 폰트 크기 변경 가능하게 설계한다.
2. 획 굵기 변경 가능하게 설계한다.
3. 위치 변경 가능하게 설계한다.
4. 쌍자음은 gamma 값 변할 때 위치가 왼쪽 -> 오른쪽 | 오른쪽 -> 왼쪽으로 차례로 변할 수 있게 한다.
5. 모음은 gamma 값에 따라 형태가 변할 수 있게 한다.

*/

class 한글 {
    constructor(){ }
    /** 자음 모듈 (기본)  **************************/
    // 닿자, 기본 받침에 쓰이는 자음 모듈

    static ㄱ() {
        line(p1x, p1y, p2x, p2y);
        line(p2x, p2y ,p4x ,p4y);
    }
    static ㄴ() {
        line(p1x,p1y,p3x,p3y);
        line(p3x,p3y,p4x,p4y);
    }
    static ㄷ() {
        line(p1x,p1y,p2x,p2y);
        line(p1x,p1y,p3x,p3y);
        line(p3x,p3y,p4x,p4y);
    }
    static ㄹ() {
        line(w1 / 3 + mw0, h1 / 3 + mh0, w1 - mw0, h1 / 3 + mh0);
        line(w1 - mw0, h1/3 + mh0, w1 - mw0, h1*4/6);
        line(w1 - mw0, h1*4/6, w1/3 + mw0, h1*4/6);
        line(w1/3 + mw0, h1*4/6, w1/3 + mw0, h1 - mh0);
        line(w1/3 + mw0, h1 - mh0, w1-mw0 ,h1-mh0);
    }
    static ㅁ() {
        line(p1x, p1y, p2x, p2y);
        line(p2x, p2y ,p4x ,p4y);
        line(p1x, p1y, p3x, p3y);
        line(p3x, p3y, p4x, p4y);
    }
    static ㅂ() {
        line(p1x,p1y,p3x,p3y);
        line(p3x,p3y,p4x,p4y);
        line(p2x,p2y,p4x,p4y);
        line(p5x,p5y,p6x,p6y);
    }
    static ㅅ() {
        line(p8x,p8y,p7x,p7y);
        line(p7x,p7y,p3x,p3y);
        line(p7x,p7y,p4x,p4y);
    }
    static ㅇ() {
        ellipse(p7x,p7y,circleWidth,circleHeight);
    }
    static ㅈ() {
        line(p1x,p1y,p2x,p2y);
        line(p8x,p8y,p7x,p7y);
        line(p7x,p7y,p3x,p3y);
        line(p7x,p7y,p4x,p4y);
    }

    static ㅋ() {
        line(p1x, p1y, p2x, p2y);
        line(p5x, p5y, p6x, p6y);
        line(p2x, p2y ,p4x ,p4y);
    }
    static ㅌ() {
        line(p1x,p1y,p2x,p2y);
        line(p1x,p1y,p3x,p3y);
        line(p5x, p5y, p6x, p6y);
        line(p3x,p3y,p4x,p4y);
    }
    static ㅎ() {
        line(p9x,p9y,p10x,p10y);
        line(p12x,p12y,p11x,p11y);
        ellipse(p7x,p7y,circleWidth,circleHeight);
    }


    /** 자음 모듈 (얇은)  **************************/
    //복합 자음자와 겹받침을 위한 기본 자음 모듈

    static 얇은ㄱ() {
        line(bp1x,bp1y,bp5x,bp5y);
        line(bp5x,bp5y,bp17x,bp17y);
    }
    static 얇은ㄷ() {
        line(bp1x,bp1y,bp5x,bp5y);
        line(bp1x,bp1y,bp13x,bp13y);
        line(bp13x,bp13y,bp17x,bp17y);
    }

    static 얇은ㅂ() {
        line(bp1x,bp1y,bp5x,bp5y);
        line(bp5x,bp5y,bp17x,bp17y);
    }
    static 얇은ㅅ() {
        line(bp1x,bp1y,bp5x,bp5y);
        line(bp1x,bp1y,bp13x,bp13y);
        line(bp13x,bp13y,bp17x,bp17y);
    }
    static 얇은ㅈ() {
        line(bp1x,bp1y,bp5x,bp5y);
        line(bp3x,bp3y,bp10x,bp10y);
        line(bp10x,bp10y,bp13x,bp13y);
        line(bp10x,bp10y,bp17x,bp17y);
    }
    static 얇은ㄴ() {
        line(bp1x,bp1y,bp13x,bp13y);
        line(bp13x,bp13y,bp17x,bp17y);
    }
    static 얇은ㅎ() {
        line(bp3x,bp3y,bp7x,bp7y);
        line(bp6x,bp6y,bp8x,bp8y);
        ellipse(bp12x,bp12y,circleWidth2,circleHeight2);
    }
    static 얇은ㄹ() {
        line(bp1x, bp1y, bp5x, bp5y);
        line(bp5x,bp5y,bp11x,bp11y);
        line(bp9x,bp9y,bp11x,bp11y);
        line(bp9x,bp9y,bp13x,bp13y);
        line(bp13x,bp13y,bp17x,bp17y);
    }
    static 얇은ㅁ() {
        line(bp1x,bp1y,bp5x,bp5y);
        line(bp1x,bp1y,bp13x,bp13y);
        line(bp13x,bp13y,bp17x,bp17y);
        line(bp5x,bp5y,bp17x,bp17y);
    }
    static 얇은ㅌ() {
        line(bp1x,bp1y,bp5x,bp5y);
        line(bp1x,bp1y,bp13x,bp13y);
        line(bp13x,bp13y,bp17x,bp17y);
        line(bp9x,bp9y,bp11x,bp11y);
    }
    static 얇은ㅍ() {
        line(bp1x,bp1y,bp5x,bp5y);
        line(bp2x,bp2y,bp14x,bp14y);
        line(bp4x,bp4y,bp16x,bp16y);
        line(bp13x,bp13y,bp17x,bp17y);
    }
    
    
    /** 모음 - 행적 모음 **************************/


    static 오() {
        line(cp1x,cp1y,cp2x,cp2y);
        line(cp6x,cp6y,cp3x+g,cp3y);
    } 

    static 요() {
        line(cp1x,cp1y,cp2x,cp2y);
        line(cp8x,cp8y,cp4x+g,cp4y);
        line(cp9x,cp9y,cp5x+g,cp5y);
    } 
    
    static 우() {
        line(cp1x,cp1y,cp2x,cp2y);
        line(cp3x,cp3y,cp7x+g,cp7y);
    } 

    static 유() {
        line(cp1x,cp1y,cp2x,cp2y);
        line(cp4x,cp4y,cp10x+g,cp10y);
        line(cp5x,cp5y,cp11x+g,cp11y);
    } 

    static 으() {
        line(cp1x, cp1y, cp2x, cp2y);
    } 


    /** 모음 - 종적 모음 **************************/
    // a: 높이가 낮은 자음이 초성에 올 때
    // b: 높이가 높은 자음이 초성에 올 때    

    static 아A() {
        //중간세로선
        line(dp1x,dp1y,dp10x+g,dp10y);
        line(dp10x+g,dp10y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp6x+g,dp6y,dp5x+g,dp5y);
    }
    static 아B() {
        //중간세로선
        line(dp1x,dp1y,dp8x+g,dp8y);
        line(dp8x+g,dp8y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp6x+g,dp6y,dp5x+g,dp5y);
    }


    static 야A() {
        //중간세로선
        line(dp1x,dp1y,dp10x+g,dp10y);
        line(dp10x+g,dp10y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp14x+g,dp14y,dp15x+g,dp15y);
        line(dp17x+g,dp17y,dp18x+g,dp18y);
    }
    static 야B() {
        //중간세로선
        line(dp1x,dp1y,dp8x+g,dp8y);
        line(dp8x+g,dp8y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp14x+g,dp14y,dp15x+g,dp15y);
        line(dp17x+g,dp17y,dp18x+g,dp18y);
    }

    static 어A() {
        //중간세로선
        line(dp1x,dp1y,dp10x+g,dp10y);
        line(dp10x+g,dp10y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp7x+g,dp7y,dp5x+g,dp5y);
    }
    static 어B() {
        //중간세로선
        line(dp1x,dp1y,dp8x+g,dp8y);
        line(dp8x+g,dp8y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp7x+g,dp7y,dp5x+g,dp5y);
    }



    
    static 여A() {
        //중간세로선
        line(dp1x,dp1y,dp10x+g,dp10y);
        line(dp10x+g,dp10y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp14x+g,dp14y,dp16x+g,dp16y);
        line(dp17x+g,dp17y,dp19x+g,dp19y);
    }
    static 여B() {
        //중간세로선
        line(dp1x,dp1y,dp8x+g,dp8y);
        line(dp8x+g,dp8y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp14x+g,dp14y,dp16x+g,dp16y);
        line(dp17x+g,dp17y,dp19x+g,dp19y);
    }
    


    static 이A() {
       //중간세로선
        line(dp1x,dp1y,dp10x+g,dp10y);
        line(dp10x+g,dp10y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
    }

    static 이B() {
        //중간세로선
        line(dp1x,dp1y,dp8x+g,dp8y);
        line(dp8x+g,dp8y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
    }



    static 애A() {
       //중간세로선
        line(dp1x,dp1y,dp10x+g,dp10y);
        line(dp10x+g,dp10y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp6x+g,dp6y,dp5x+g,dp5y);
        //오른쪽세로선
        line(dp3x,dp3y,dp11x+g,dp11y);
        line(dp11x+g,dp11y,dp13x+g,dp13y);
        line(dp13x+g,dp13y,dp4x,dp4y);
    }

    static 애B() {
        //중간세로선
        line(dp1x,dp1y,dp8x+g,dp8y);
        line(dp8x+g,dp8y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp6x+g,dp6y,dp5x+g,dp5y);
        //오른쪽세로선
        line(dp3x,dp3y,dp9x+g,dp9y);
        line(dp9x+g,dp9y,dp13x+g,dp13y);
        line(dp13x+g,dp13y,dp4x,dp4y);
    }


    static 애A() {
       //중간세로선
        line(dp1x,dp1y,dp10x+g,dp10y);
        line(dp10x+g,dp10y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp6x+g,dp6y,dp5x+g,dp5y);
        //오른쪽세로선
        line(dp3x,dp3y,dp11x+g,dp11y);
        line(dp11x+g,dp11y,dp13x+g,dp13y);
        line(dp13x+g,dp13y,dp4x,dp4y);
    }

    static 얘B() {
        //중간세로선
        line(dp1x,dp1y,dp10x+g,dp10y);
        line(dp10x+g,dp10y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp14x+g,dp14y,dp15x+g,dp15y);
        line(dp17x+g,dp17y,dp18x+g,dp18y);
        //오른쪽세로선
        line(dp3x,dp3y,dp11x+g,dp11y);
        line(dp11x+g,dp11y,dp13x+g,dp13y);
        line(dp13x+g,dp13y,dp4x,dp4y);
    }



    static 에A() {
       //중간세로선
        line(dp1x,dp1y,dp10x+g,dp10y);
        line(dp10x+g,dp10y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp7x+g,dp7y,dp5x+g,dp5y);
        //오른쪽세로선
        line(dp3x,dp3y,dp11x+g,dp11y);
        line(dp11x+g,dp11y,dp13x+g,dp13y);
        line(dp13x+g,dp13y,dp4x,dp4y);
    }

    static 에B() {
       //중간세로선
        line(dp1x,dp1y,dp8x+g,dp8y);
        line(dp8x+g,dp8y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp7x+g,dp7y,dp5x+g,dp5y);
        //오른쪽세로선
        line(dp3x,dp3y,dp9x+g,dp9y);
        line(dp9x+g,dp9y,dp13x+g,dp13y);
        line(dp13x+g,dp13y,dp4x,dp4y);
    }
    



    static 예A() {
        //중간세로선
        line(dp1x,dp1y,dp10x+g,dp10y);
        line(dp10x+g,dp10y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp14x+g,dp14y,dp16x+g,dp16y);
        line(dp17x+g,dp17y,dp19x+g,dp19y);
        //오른쪽세로선
        line(dp3x,dp3y,dp11x+g,dp11y);
        line(dp11x+g,dp11y,dp13x+g,dp13y);
        line(dp13x+g,dp13y,dp4x,dp4y);
    }

    static 예B() {
        //중간세로선
        line(dp1x,dp1y,dp8x+g,dp8y);
        line(dp8x+g,dp8y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp14x+g,dp14y,dp16x+g,dp16y);
        line(dp17x+g,dp17y,dp19x+g,dp19y);
        //오른쪽세로선
        line(dp3x,dp3y,dp9x+g,dp9y);
        line(dp9x+g,dp9y,dp13x+g,dp13y);
        line(dp13x+g,dp13y,dp4x,dp4y);
    }


    update() {
        console.log("stuckyi coded font");
    }

}