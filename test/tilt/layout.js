function 글자레이아웃(초성, 중성, 종성, x, y){
  밀어넣기();
  이동(x * 200, y * 200);
  임의틀(200, 200);
  글자(초성, 0, 0);
  글자(중성, 100, 0);
  if(종성 !== ""){
    글자(종성, 80, 100);
  }
  
  꺼내기();
}

function 글자(자모, x, y){
  밀어넣기();
  이동(x, y);
  // 틀();
 
  try{
    한글[자모]();
  }catch(e){
    console.log(e);
  }
  꺼내기();
}

function 틀() {
  채우기없음();
  스트로크(0);
  스트로크두께(1);
  직사각형(0, 0, 100, 100);
}

function 임의틀(가로, 세로){
  채우기없음();
  스트로크(0);
  스트로크두께(1);
  직사각형(0, 0, 가로, 세로);  
}