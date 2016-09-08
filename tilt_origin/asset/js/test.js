console.log("stuckyifont-0.1.js"); 

var input, button, greeting;



var letterArray = ["달", "달", "랄", "라", "라", "다", "다", "다", "다"];
var state = { currentX: 0, currentY: 0 };
var textAreaX, textAreaY = 0;
var rowX, rowY = 0;
var input, button, greeting, div;

function setup() {
    /* disvide size info 
    // let displayInfo = "display : " + displayWidth + "X" + displayHeight;
    // let windowInfo = "window : " + windowWidth + "X" + windowHeight;
    // console.log("setup : " + displayInfo + "," + windowInfo);
    */


    
    createCanvas(800, 1000);
    
    colorMode(HSL);
    strokeJoin(ROUND);
    fill(0);
    noLoop();
    
  input = createInput();
  input.position(20, 65);
//   input.hide();

  button = createButton('submit');
  button.position(150, 65);
  button.mousePressed(redrawing);
  button.addClass('btn btn-default');

  greeting = createElement('h4', 'ss');
  greeting.position(220, 45);
  //초기화 완료후 캔버스는 감춘다.
    // $('#defaultCanvas0').css('display', 'none');
  
}

function draw() {
    background(255);

    // letterWidth = letterWidth + 0.1*beta;
    // letterHeight = letterHeight + 0.1*beta;
    
    for (var i = 0; i < letterArray.length; i++){
        textAreaX = i % 3;
        rowX = textAreaX * (letterWidth + letterSpacing);

        makeJaso(letterArray[i], rowX, rowY, gamma);
        // console.log(rowX + ',' + rowY);
        if (textAreaX === 2) { rowY += (letterHeight + lineHeight); }
    }
    rowX = 0;
    rowY = 0;
    
} //end draw



var 자소ㄱㅅ = Hangul.assemble(['ㄱ', 'ㅅ']);
var 자소ㄴㅈ = Hangul.assemble(['ㄴ', 'ㅈ']);
var 자소ㄴㅎ = Hangul.assemble(['ㄴ', 'ㅎ']);
var 자소ㄹㄱ = Hangul.assemble(['ㄹ', 'ㄱ']);
var 자소ㄹㅁ = Hangul.assemble(['ㄹ', 'ㅁ']);
var 자소ㄹㅂ = Hangul.assemble(['ㄹ', 'ㅂ']);
var 자소ㄹㅅ = Hangul.assemble(['ㄹ', 'ㅅ']);
var 자소ㄹㅌ = Hangul.assemble(['ㄹ', 'ㅌ']);
var 자소ㄹㅍ = Hangul.assemble(['ㄹ', 'ㅍ']);
var 자소ㄹㅎ = Hangul.assemble(['ㄹ', 'ㅎ']);
var 자소ㅂㅅ = Hangul.assemble(['ㅂ', 'ㅅ']);





// input : ltterArray[i];
function makeJaso(letter, tx, ty, g) {
    
    var letterSplit = letter.split('');
    
    //각 자소타입별 위치
    var 닿자위치 = { x: tx + g, y: ty + m1 }, 종적모음위치 = { x: tx + m2, y: ty }, 횡적모음위치 = { x: tx, y: ty + m3 }, 받침위치 = { x: tx + g, y: ty + m4 };

    for (var index = 0; index < letterSplit.length; index++){
        var rowLetter = letterSplit[index];
        var disassemble = Hangul.disassemble(rowLetter);

        //겹받침인지 체크
        var 겹받침인가 = 겹받침체크(disassemble);
        if (겹받침인가 === true) { 
            // console.log("겹받침 주의보");
            var lastest = disassemble.pop();
            var last = disassemble.pop();
            var newEl = Hangul.assemble([last, lastest]);
            var pushEl = '';
            if (newEl === 자소ㄱㅅ) { pushEl = 'bottom15'; }
            else if (newEl === 자소ㄴㅈ) { pushEl = 'bottom16' }
            else if (newEl === 자소ㄴㅎ) { pushEl = 'bottom17' }
            else if (newEl === 자소ㄹㄱ) { pushEl = 'bottom18' }
            else if (newEl === 자소ㄹㅁ) { pushEl = 'bottom19' }
            else if (newEl === 자소ㄹㅂ) { pushEl = 'bottom20' }
            else if (newEl === 자소ㄹㅅ) { pushEl = 'bottom21' }
            else if (newEl === 자소ㄹㅌ) { pushEl = 'bottom22' }
            else if (newEl === 자소ㄹㅍ) { pushEl = 'bottom23' }
            else if (newEl === 자소ㄹㅎ) { pushEl = 'bottom24' }
            else if( newEl === 자소ㅂㅅ ) { pushEl = 'bottom25' }
            console.log(pushEl);
            disassemble.push(pushEl);
        }

                
        
        
        for (var j = 0; j < disassemble.length; j++){
            
            switch (disassemble[j]) {
                case 'ㄱ':
                    if (j === 0) { ㄱ(닿자위치.x, 닿자위치.y); }
                    else { 받침ㄱ(받침위치.x, 받침위치.y); } 
                break;
                case 'ㄴ':
                    if (j === 0) { ㄴ(닿자위치.x, 닿자위치.y); }
                    else { 받침ㄴ(받침위치.x, 받침위치.y); } 
                break;
                case 'ㄷ':
                    if (j === 0) { ㄷ(닿자위치.x, 닿자위치.y); }
                    else { 받침ㄷ(받침위치.x, 받침위치.y); } 
                break;
                case 'ㄹ':
                    if (j === 0) { ㄹ(닿자위치.x, 닿자위치.y); }
                    else { 받침ㄹ(받침위치.x, 받침위치.y); } 
                break;
                case 'ㅁ':
                    if (j === 0) { ㅁ(닿자위치.x, 닿자위치.y); }
                    else { 받침ㅁ(받침위치.x, 받침위치.y); } 
                break;
                case 'ㅂ':
                    if (j === 0) { ㅂ(닿자위치.x, 닿자위치.y); }
                    else { 받침ㅂ(받침위치.x, 받침위치.y); } 
                break;
                case 'ㅅ':
                    if (j === 0) { ㅅ(닿자위치.x, 닿자위치.y); }
                    else { 받침ㅅ(받침위치.x, 받침위치.y); } 
                break;
                case 'ㅇ':
                    if (j === 0) { ㅇ(닿자위치.x, 닿자위치.y); }
                    else { 받침ㅇ(받침위치.x, 받침위치.y); } 
                break;
                case 'ㅈ':
                    if (j === 0) { ㅈ(닿자위치.x, 닿자위치.y); }
                    else { 받침ㅈ(받침위치.x, 받침위치.y); } 
                break;
                case 'ㅊ':
                    if (j === 0) { ㅊ(닿자위치.x, 닿자위치.y); }
                    else { 받침ㅊ(받침위치.x, 받침위치.y); } 
                break;
                case 'ㅋ':
                    if (j === 0) { ㅋ(닿자위치.x, 닿자위치.y); }
                    else { 받침ㅋ(받침위치.x, 받침위치.y); } 
                break;
                case 'ㅌ':
                    if (j === 0) { ㅌ(닿자위치.x, 닿자위치.y); }
                    else { 받침ㅌ(받침위치.x, 받침위치.y); } 
                break;
                case 'ㅍ':
                    if (j === 0) { ㅍ(닿자위치.x, 닿자위치.y); }
                    else { 받침ㅍ(받침위치.x, 받침위치.y); } 
                break;
                case 'ㅎ':
                    if (j === 0) { ㅎ(닿자위치.x, 닿자위치.y); }
                    else { 받침ㅎ(받침위치.x, 받침위치.y); } 
                    break;
                case 'bottom15':
                    bottom15(받침위치.x, 받침위치.y); 
                    break;    
                case 'bottom16':
                    bottom16(받침위치.x, 받침위치.y); 
                    break;    
                case 'bottom17':
                    bottom17(받침위치.x, 받침위치.y); 
                    break;    
                case 'bottom18':
                    bottom18(받침위치.x, 받침위치.y); 
                    break;    
                case 'bottom19':
                    bottom19(받침위치.x, 받침위치.y); 
                    break;    
                case 'bottom20':
                    bottom20(받침위치.x, 받침위치.y); 
                    break;    
                case 'bottom21':
                    bottom21(받침위치.x, 받침위치.y); 
                    break;    
                case 'bottom22':
                    bottom22(받침위치.x, 받침위치.y); 
                    break;      
                case 'bottom23':
                    bottom23(받침위치.x, 받침위치.y); 
                    break;       
                case 'bottom24':
                    bottom24(받침위치.x, 받침위치.y); 
                    break;      
                case 'bottom25':
                    bottom25(받침위치.x, 받침위치.y); 
                break;          
            case 'ㄲ':
                if (j === 0) { ㄲ(닿자위치.x, 닿자위치.y); }
                else { 받침ㄲ(받침위치.x, 받침위치.y); } 
            break;
            case 'ㅆ':
                if (j === 0) { ㅆ(닿자위치.x, 닿자위치.y); }
                else { 받침ㅆ(받침위치.x, 받침위치.y); } 
            break;
            case 'ㅏ':
                아1(종적모음위치.x, 종적모음위치.y, g);
                break;
            case 'ㅑ':
                야1(종적모음위치.x, 종적모음위치.y, g);
                break;
            case 'ㅓ':
                어1(종적모음위치.x, 종적모음위치.y, g);
                break;
            case 'ㅕ':
                여1(종적모음위치.x, 종적모음위치.y, g);
            break;
            case 'ㅗ':
                오(횡적모음위치.x, 횡적모음위치.y, g);
            break;
            case 'ㅛ':
                요(횡적모음위치.x, 횡적모음위치.y, g);
            break;
            case 'ㅠ':
                유(횡적모음위치.x, 횡적모음위치.y, g);
            break;
            case 'ㅡ':
                    console.log(disassemble[j]);
                우(횡적모음위치.x, 횡적모음위치.y, g);
            case 'ㅣ':
                이1(종적모음위치.x, 종적모음위치.y, g);
            break;
            case 'ㅐ':
                애1(종적모음위치.x, 종적모음위치.y, g);
            break;
            case 'ㅒ':
                얘1(종적모음위치.x, 종적모음위치.y, g);
            break;
            case 'ㅔ':
                에1(종적모음위치.x, 종적모음위치.y, g);
            break;
            case 'ㅖ':
                예1(종적모음위치.x, 종적모음위치.y, g);
            break;
        
            case 'ㄹ':
                if (j === 0) { ㄹ(닿자위치.x, 닿자위치.y); }
                    else { 받침ㄹ(받침위치.x, 받침위치.y); } 
                break;
            default:
                   
                우(횡적모음위치.x,횡적모음위치.y);
                break;
            }

        }
    }

} //makeJaso end
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
function redrawing(){
    var inputall = input.value();
    var inputSplit = inputall.split('');
    letterArray = inputSplit;
    loop();
    // console.log("redrawing!");
    // noLoop();
}

