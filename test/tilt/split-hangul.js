function splitHangul(words){
  if (!words){ return []; }
  return _.chain(Hangul.disassemble(words, true)).map((char) => {
    return splitChoJungJong(char);
  }).value();
}

function splitChoJungJong(jamos){
  let endCho = false;
  let cho = [];
  let jung = [];
  let jong = [];
  
  _.chain(jamos).each((jamo) => {
    if(Hangul.isConsonant(jamo) && endCho == false){
      cho.push(jamo);
    }else if(Hangul.isConsonant(jamo) && endCho == true){
      jong.push(jamo);
    }else if(Hangul.isVowel(jamo)){
      jung.push(jamo);
      endCho = true;
    }  
  }).value()
  
  return _.chain([cho, jung, jong]).map((jamo) => {
    return Hangul.assemble(jamo)
  }).value();
}