

var actLev;

class 친구 {
    constructor(){

    }

    static 꿈틀이(){
        console.log("꿈틀이 호출");

        switch(actLev){
            case undefined:
                console.log("actLev is undefined.");
                fill(255, 0, 0);
                ellipse(0, 0, 20, 20);
                noFill();    
            break;
            default:
            ellipse(0, 0, 20, 20);
            break;

        }
    }
}