// stuckyi-class.js

class 한글 {
    constructor() { }
    
    /** 자음 모듈 (기본)  **************************/
    // 닿자, 기본 받침에 쓰이는 자음 모듈

    static ㄱ() {
        //p1과 p2, p2와 p4사이의 점 n개를 구해야 한다.
        //우리가 이렇게 진행하는 것은, 구조화를 위한 추상화를 하는 개념이라고 이해하자. 모든 자소에 대해 수백개의 pos가 있다면 인간이 눈으로 바라보기조차 힘들다.
        // 각각의 기준점을 바탕으로 사이의 점을 만들어낸다.
        //모여라에서처럼 각 기준점 사이의 점을 뽑아낸다음 draw로 간다는 개념이겠지?
        
        // function getPosBetweenAB
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

    static ㅊ() {
        line(p12x,p12y,p8x,p8y);
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
        line(bp1x,bp1y,bp13x,bp13y);
        line(bp5x,bp5y,bp17x,bp17y);
        line(bp13x,bp13y,bp17x,bp17y);
        line(bp9x,bp9y,bp11x,bp11y);
    }
    static 얇은ㅅ() {
        line(bp3x,bp3y,bp10x,bp10y);
        line(bp10x,bp10y,bp13x,bp13y);
        line(bp10x,bp10y,bp17x,bp17y);
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


    static 오(g) {
        line(cp1x,cp1y,cp2x,cp2y);
        line(cp6x,cp6y,cp3x+g,cp3y);
    } 

    static 요(g) {
        line(cp1x,cp1y,cp2x,cp2y);
        line(cp8x,cp8y,cp4x+g,cp4y);
        line(cp9x,cp9y,cp5x+g,cp5y);
    } 
    
    static 우(g) {
        line(cp1x,cp1y,cp2x,cp2y);
        line(cp3x,cp3y,cp7x+g,cp7y);
    } 

    static 유(g) {
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

    static 아A(g) {
        //중간세로선
        line(dp1x,dp1y,dp10x+g,dp10y);
        line(dp10x+g,dp10y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp6x+g,dp6y,dp5x+g,dp5y);
    }
    static 아B(g) {
        //중간세로선
        line(dp1x,dp1y,dp8x+g,dp8y);
        line(dp8x+g,dp8y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp6x+g,dp6y,dp5x+g,dp5y);
    }


    static 야A(g) {
        //중간세로선
        line(dp1x,dp1y,dp10x+g,dp10y);
        line(dp10x+g,dp10y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp14x+g,dp14y,dp15x+g,dp15y);
        line(dp17x+g,dp17y,dp18x+g,dp18y);
    }
    static 야B(g) {
        //중간세로선
        line(dp1x,dp1y,dp8x+g,dp8y);
        line(dp8x+g,dp8y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp14x+g,dp14y,dp15x+g,dp15y);
        line(dp17x+g,dp17y,dp18x+g,dp18y);
    }

    static 어A(g) {
        //중간세로선
        line(dp1x,dp1y,dp10x+g,dp10y);
        line(dp10x+g,dp10y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp7x+g,dp7y,dp5x+g,dp5y);
    }
    static 어B(g) {
        //중간세로선
        line(dp1x,dp1y,dp8x+g,dp8y);
        line(dp8x+g,dp8y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp7x+g,dp7y,dp5x+g,dp5y);
    }



    
    static 여A(g) {
        //중간세로선
        line(dp1x,dp1y,dp10x+g,dp10y);
        line(dp10x+g,dp10y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp14x+g,dp14y,dp16x+g,dp16y);
        line(dp17x+g,dp17y,dp19x+g,dp19y);
    }
    static 여B(g) {
        //중간세로선
        line(dp1x,dp1y,dp8x+g,dp8y);
        line(dp8x+g,dp8y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
        //가로선
        line(dp14x+g,dp14y,dp16x+g,dp16y);
        line(dp17x+g,dp17y,dp19x+g,dp19y);
    }
    


    static 이A(g) {
       //중간세로선
        line(dp1x,dp1y,dp10x+g,dp10y);
        line(dp10x+g,dp10y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
    }

    static 이B(g) {
        //중간세로선
        line(dp1x,dp1y,dp8x+g,dp8y);
        line(dp8x+g,dp8y,dp12x+g,dp12y);
        line(dp12x+g,dp12y,dp2x,dp2y);
    }



    static 애A(g) {
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

    static 애B(g) {
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


    static 얘A(g) {
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

    static 얘B(g) {
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



    static 에A(g) {
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

    static 에B(g) {
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
    



    static 예A(g) {
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

    static 예B(g) {
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