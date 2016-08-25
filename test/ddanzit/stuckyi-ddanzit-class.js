

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

