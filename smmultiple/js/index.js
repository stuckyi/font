//A3 : 297 * 420
var step = 10;
var stepRange = 1;
var 셑 = {
    스텝 : 1,
    가로 : 900,
    세로 : 1300,
    배경색 : 'black',
    선 : { 색 : 255, 알파 : 200, 굵기 : 0.25  },
    마진 : 30,
    자간 : 120,
    행간 : 100,
    점위치1 : 0.25,
    점위치2 : 0.75,
    거미줄변화폭 : 2.5,
    몇줄:10,
    스케일:1.8
};






function setup(){
    createCanvas(셑.가로, 셑.세로);
    smooth();
    
    pixelDensity(3.0);// save시 활용
    
    //기본 스타일 설정
    background(셑.배경색);
    noFill();
    stroke(셑.선.색, 셑.선.알파);
    strokeWeight(셑.선.굵기);
//    scale(셑.스케일);
    
    //스몰멀티플 구성함수
    makeMultiple();

}


function makeMultiple(){
   
    var xPos = 0;
    var yPos = 0;
    var matrixLen = 셑.몇줄 * 4; //line count
    for(var index = 0; index < matrixLen; index++){
        if(index % 4 === 0){ yPos += 셑.행간; }
        word(yPos);
        stepRange+= 셑.거미줄변화폭;
    
    }
}


function word(ty){

    makeWord(); //글자 생성
    
    
    // 글자 생성함수 ====================
    function makeWord(){ 
        var m = 셑.마진; //margin
        var ls = 셑.자간; //letterspace
        var lh = 셑.행간; //lineheight
        
        makeJaso(m, ty, "오");
        makeJaso(m+ls, ty, "랜");
        makeJaso(m+ls*2, ty, "시");
        makeJaso(m+ls*3, ty, "간");
        
        // 자소 생성함수 ====================
        function makeJaso(sx, sy, letters){
            switch(letters){
                case "오" :
                    글자_오();
                    break;
                case "랜" :
                    글자_랜();
                    break;
                case "시" :
                    글자_시();
                    break;
                case "간" :
                    글자_간();
                    break;
                default :
                    sa();
                    break;
            }
            function 글자_오(){
                push();
                translate(sx, sy);
                이응("닿자");
                오();
                pop();
            }
            function 글자_랜(){
                push();
                translate(sx, sy);
                리을();
                애();
                니은("받침");
                pop();
            }
            function 글자_시(){
                push();
                translate(sx, sy);
                시옷();
                이();
                pop();
                
            }
            function 글자_간(){
                push();
                translate(sx, sy);
                기억("닿자");
                아();
                니은("받침");
                pop();
                
            }
        }
        
        
        
        //*** 글자 생성 시스템 *******
        
        //자음
        function 시옷(){
            
            var data = [
                {x1:30, y1:0, x2:0, y2:35},
                {x1:30, y1:0, x2:30, y2:50}
            ];
            var drawingArray = [];
            
            //좌표데이터로 객체 생성
            for(var i = 0; i < data.length; i++){
                var f = new Flow(data[i].x1, data[i].y1, data[i].x2, data[i].y2);
                drawingArray.push(f);
            }
            //객체 배열로 그리기
            for(var i = 0; i < drawingArray.length; i++){
                var rows = drawingArray[i];
                rows.updateOBJ(rows.x1, rows.y1, rows.x2, rows.y2); //noise step만 올린다.
                rows.displayOBJ(); //noise step변경된 것을 그린다.
            }            
            
        }
        function 리을(){

            var data = [ 
                {x1:0, y1:0, x2:40, y2:0},
                {x1:40, y1:0, x2:40, y2:20},
                {x1:0, y1:20, x2:40, y2:20},
                {x1:40, y1:20, x2:0, y2:20},
                {x1:0, y1:20, x2:0, y2:40},
                {x1:0, y1:40, x2:40, y2:40}
            ];
            
            var drawingArray = [];
            
            //좌표데이터로 객체 생성
            for(var i = 0; i < data.length; i++){
                var f = new Flow(data[i].x1, data[i].y1, data[i].x2, data[i].y2);
                drawingArray.push(f);
            }
            //객체 배열로 그리기
            for(var i = 0; i < drawingArray.length; i++){
                var rows = drawingArray[i];
                rows.updateOBJ(rows.x1, rows.y1, rows.x2, rows.y2); //noise step만 올린다.
                rows.displayOBJ(); //noise step변경된 것을 그린다.
            }    
        }
        function 이응(types){
            var moaType = types;
            var data;
            
            //받침
            if(moaType === "닿자"){ 
               //닿자
                data = [ 
                    {x1:30, y1:0, x2:10, y2:10},
                    {x1:10, y1:10, x2:7, y2:25},
                    {x1:7, y1:25, x2:17, y2:35},
                    {x1:17, y1:35, x2:37, y2:35},
                    {x1:37, y1:35, x2:58, y2:25},
                    {x1:58, y1:25, x2:58, y2:7},
                    {x1:58, y1:7, x2:30, y2:0}
                ];
            } else if(moaType === "받침"){
               data = [ 
                    {x1:30, y1:50, x2:10, y2:60},
                    {x1:10, y1:60, x2:7, y2:75},
                    {x1:7, y1:75, x2:17, y2:85},
                    {x1:17, y1:85, x2:37, y2:85},
                    {x1:37, y1:85, x2:58, y2:65},
                    {x1:58, y1:75, x2:58, y2:57},
                    {x1:58, y1:57, x2:30, y2:50}
                ]; 
            }
            
            var drawingArray = [];
            
            //좌표데이터로 객체 생성
            for(var i = 0; i < data.length; i++){
                var f = new Flow(data[i].x1, data[i].y1, data[i].x2, data[i].y2);
                drawingArray.push(f);
            }
            //객체 배열로 그리기
            for(var i = 0; i < drawingArray.length; i++){
                var rows = drawingArray[i];
                rows.updateOBJ(rows.x1, rows.y1, rows.x2, rows.y2); //noise step만 올린다.
                rows.displayOBJ(); //noise step변경된 것을 그린다.
            }    
        }
        function 니은(types){
            var moaType = types;
            var data;
            
            //받침
            if(moaType === "닿자"){ 
               //닿자
                data = [ 
                    {x1:30, y1:0, x2:10, y2:10},
                    {x1:10, y1:10, x2:7, y2:25},
                    {x1:7, y1:25, x2:17, y2:35},
                    {x1:17, y1:35, x2:37, y2:35},
                    {x1:37, y1:35, x2:58, y2:25},
                    {x1:58, y1:25, x2:58, y2:7},
                    {x1:58, y1:7, x2:30, y2:0}
                ];
            } else if(moaType === "받침"){
               data = [ 
                    {x1:70, y1:60, x2:0, y2:60},
                    {x1:0, y1:45, x2:0, y2:60}
                ]; 
            }
            
            var drawingArray = [];
            
            //좌표데이터로 객체 생성
            for(var i = 0; i < data.length; i++){
                var f = new Flow(data[i].x1, data[i].y1, data[i].x2, data[i].y2);
                drawingArray.push(f);
            }
            //객체 배열로 그리기
            for(var i = 0; i < drawingArray.length; i++){
                var rows = drawingArray[i];
                rows.updateOBJ(rows.x1, rows.y1, rows.x2, rows.y2); //noise step만 올린다.
                rows.displayOBJ(); //noise step변경된 것을 그린다.
            }   
            
        }
        function 기억(types){
            var moaType = types;
            var data;
            
            //받침
            if(moaType === "닿자"){ 
               //닿자
                data = [ 
                    {x1:0, y1:5, x2:30, y2:5},
                    {x1:30, y1:5, x2:4, y2:35}
                ];
            } else if(moaType === "받침"){
               data = [ 
                    {x1:30, y1:50, x2:10, y2:60},
                    {x1:10, y1:60, x2:7, y2:75},
                    {x1:7, y1:75, x2:17, y2:85},
                    {x1:17, y1:85, x2:37, y2:85},
                    {x1:37, y1:85, x2:58, y2:65},
                    {x1:58, y1:75, x2:58, y2:57},
                    {x1:58, y1:57, x2:30, y2:50}
                ]; 
            }
            
            var drawingArray = [];
            
            //좌표데이터로 객체 생성
            for(var i = 0; i < data.length; i++){
                var f = new Flow(data[i].x1, data[i].y1, data[i].x2, data[i].y2);
                drawingArray.push(f);
            }
            //객체 배열로 그리기
            for(var i = 0; i < drawingArray.length; i++){
                var rows = drawingArray[i];
                rows.updateOBJ(rows.x1, rows.y1, rows.x2, rows.y2); //noise step만 올린다.
                rows.displayOBJ(); //noise step변경된 것을 그린다.
            }    
        }

        //모음
        function 오(){

            var data = [ 
                {x1:37, y1:35, x2:37, y2:60},
                {x1:10, y1:55, x2:70, y2:53}
            ];
            
            var drawingArray = [];
            
            //좌표데이터로 객체 생성
            for(var i = 0; i < data.length; i++){
                var f = new Flow(data[i].x1, data[i].y1, data[i].x2, data[i].y2);
                drawingArray.push(f);
            }
            //객체 배열로 그리기
            for(var i = 0; i < drawingArray.length; i++){
                var rows = drawingArray[i];
                rows.updateOBJ(rows.x1, rows.y1, rows.x2, rows.y2); //noise step만 올린다.
                rows.displayOBJ(); //noise step변경된 것을 그린다.
            }    
        }
        function 아(){

            var data = [
                {x1:55, y1:0, x2:55, y2:40},
                {x1:55, y1:20, x2:70, y2:20}
            ];
            
            var drawingArray = [];
            
            //좌표데이터로 객체 생성
            for(var i = 0; i < data.length; i++){
                var f = new Flow(data[i].x1, data[i].y1, data[i].x2, data[i].y2);
                drawingArray.push(f);
            }
            //객체 배열로 그리기
            for(var i = 0; i < drawingArray.length; i++){
                var rows = drawingArray[i];
                rows.updateOBJ(rows.x1, rows.y1, rows.x2, rows.y2); //noise step만 올린다.
                rows.displayOBJ(); //noise step변경된 것을 그린다.
            }    
        }
        function 애(){
            var data = [
                {x1:45, y1:25, x2:60, y2:25},
                {x1:45, y1:0, x2:42, y2:40},
                {x1:60, y1:0, x2:62, y2:40}
            ];
            
            var drawingArray = [];
            
            //좌표데이터로 객체 생성
            for(var i = 0; i < data.length; i++){
                var f = new Flow(data[i].x1, data[i].y1, data[i].x2, data[i].y2);
                drawingArray.push(f);
            }
            //객체 배열로 그리기
            for(var i = 0; i < drawingArray.length; i++){
                var rows = drawingArray[i];
                rows.updateOBJ(rows.x1, rows.y1, rows.x2, rows.y2); //noise step만 올린다.
                rows.displayOBJ(); //noise step변경된 것을 그린다.
            }    
        }
        function 이(){
            var data = [
                {x1:53, y1:0, x2:56, y2:60}
            ];
            
            var drawingArray = [];
            
            //좌표데이터로 객체 생성
            for(var i = 0; i < data.length; i++){
                var f = new Flow(data[i].x1, data[i].y1, data[i].x2, data[i].y2);
                drawingArray.push(f);
            }
            //객체 배열로 그리기
            for(var i = 0; i < drawingArray.length; i++){
                var rows = drawingArray[i];
                rows.updateOBJ(rows.x1, rows.y1, rows.x2, rows.y2); //noise step만 올린다.
                rows.displayOBJ(); //noise step변경된 것을 그린다.
            }    
        }
        
        
        
    }//end MakeJaso
    
}



function keyTyped() {
    
  if (key === 'a') {
    stepRange -= 0.1; 
    console.log(stepRange);
    background(0);
    makeMultiple();
  } else if (key === 'd') {
    stepRange += 0.1; 
    console.log(stepRange);
    background(0);
    makeMultiple();
  } else if(key === 's'){
      save();
  }
}

//flow를 만드는 클래스
class Flow{
    
    constructor(startX, starY, endX, endY){
        this.x1 = startX;
        this.y1 = starY;
        this.x4 = endX;
        this.y4 = endY;
        this.noiseStep = 0.0;
    }
    
    updateOBJ(startX, startY, endX, endY){
        this.x1 = startX;
        this.y1 = startY;
        this.x2 = endX;
        this.y2 = endY;
        
        this.noiseStep = random(-step, step);
        this.noiseArea = noise(this.noiseStep) * stepRange;
    }
    displayOBJ(){  
        
        beginShape();
        var x1 = this.x1;
        var y1 = this.y1;
        var x4 = this.x4;
        var y4 = this.y4;
        
        var x2 = lerp(x1, x4, 셑.점위치1) + this.noiseArea;
        var y2 = lerp(y1, y4, 셑.점위치1) + this.noiseArea;
        var x3 = lerp(x1, x4, 셑.점위치2) + this.noiseArea;
        var y3 = lerp(y1, y4, 셑.점위치2) + this.noiseArea;
        
        curveVertex(x1, y1);
        curveVertex(x1, y1);
        curveVertex(x2, y2);
        curveVertex(x3, y3);
        curveVertex(x4, y4);
        curveVertex(x4, y4);
        endShape();
        
    }
}