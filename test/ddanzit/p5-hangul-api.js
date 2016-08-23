p5.prototype.캔버스생성 = function(width, height){
  var canvasWidth = width + 40;
  var canvasHeight = height + 40;
  
  var result = this.createCanvas(canvasWidth, canvasHeight);
 
  this.rect(0, 0, width, height);
  
  for(var i = 0; i < width; i = i + 50){
    this.stroke(230);
    this.strokeWeight(1);
    this.line(i, 1, i, height-1);
    this.stroke(100);
    this.line(i, height, i, height + 5);

    this.textSize(8);
    this.strokeWeight(0);
    this.text(i, i + 5, height + 10);
  }
  
  for(var i = 0; i < height; i = i + 50){
    this.stroke(230);
    this.strokeWeight(1);
    this.line(1, i, width - 1, i);
    this.stroke(100);
    this.line(width, i, width + 5, i);
    
    this.textSize(8);
    this.strokeWeight(0);
    this.text(i, width + 5, i + 10);
  }
  
  return result;
}

p5.prototype.그리드 = function(width, height){
  var canvasWidth = width + 40;
  var canvasHeight = height + 40;
   
  this.stroke(0);
  this.fill(255);
  this.rect(0, 0, width, height);
  
  for(var i = 0; i < width; i = i + 50){
    this.stroke(230);
    this.strokeWeight(1);
    this.line(i, 1, i, height-1);
    this.stroke(100);
    this.line(i, height, i, height + 5);

    this.textSize(8);
    this.strokeWeight(0);
    this.text(i, i + 5, height + 10);
  }
  
  for(var i = 0; i < height; i = i + 50){
    this.stroke(230);
    this.strokeWeight(1);
    this.line(1, i, width - 1, i);
    this.stroke(100);
    this.line(width, i, width + 5, i);
    
    this.textSize(8);
    this.strokeWeight(0);
    this.text(i, width + 5, i + 10);
  }
  
  return undefined;
}

//

p5.prototype.배경 = function(){
  return this.background(...arguments);
}

p5.prototype.클리어 = function(){
  return this.clear();
}

//

p5.prototype.채우기 = function(){
  return this.fill(...arguments);
}

p5.prototype.채우기없음 = function(){
  return this.noFill();
}

p5.prototype.스트로크 = function(){
  return this.stroke(...arguments);
}

p5.prototype.스트로크없음 = function(){
  return this.noStroke(...arguments);
}

p5.prototype.스트로크두께 = function(){
  return this.strokeWeight(...arguments);
}

//

p5.prototype.점 = function(){
  return this.point(...arguments);
}

p5.prototype.타원 = function(){
  return this.ellipse(...arguments);
}

p5.prototype.선 = function(){
  return this.line(...arguments);
}

p5.prototype.사각형 = function(){
  return this.quad(...arguments);
}

p5.prototype.삼각형 = function(){
  return this.triangle(...arguments);
}

p5.prototype.직사각형 = function(){
  return this.rect(...arguments);
}

p5.prototype.베지어 = function(){
  return this.bazier(...arguments);
}

p5.prototype.곡선 = function(){
  return this.bazier(...arguments);
}

p5.prototype.호 = function(){
  return this.arc(...arguments);
}

// 프로그래밍 2번째 시간

p5.prototype.화면너비 = screen.width;
p5.prototype.화면높이 = screen.height;
p5.prototype.창너비 = document.documentElement.clientWidth;
p5.prototype.창높이 = document.documentElement.clientHeight;
p5.prototype.너비 = 0;
p5.prototype.높이 = 0;
p5.Renderer.prototype.resize = function(w, h) {
  this.width = w;
  this.height = h;
  this.elt.width = w * this._pInst._pixelDensity;
  this.elt.height = h * this._pInst._pixelDensity;
  this.elt.style.width = w +'px';
  this.elt.style.height = h + 'px';
  if (this._isMainCanvas) {
    this._pInst._setProperty('width', this.width);
    this._pInst._setProperty('height', this.height);
    this._pInst._setProperty('너비', this.width);
    this._pInst._setProperty('높이', this.height);
  }
};

p5.prototype.도형시작 = function(){
  return this.beginShape(...arguments);
}

p5.prototype.도형종료 = function(){
  return this.endShape(...arguments);
}

p5.prototype.꼭짓점 = function(){
  return this.vertex(...arguments);
}

p5.prototype.$닫기 = p5.prototype.CLOSE;
p5.prototype.$선 = p5.prototype.LINES;
p5.prototype.$삼각형 = p5.prototype.TRIANGLES;
p5.prototype.$삼각형스트립 = p5.prototype.TRIANGLE_STRIP;
p5.prototype.$삼각형팬 = p5.prototype.TRIANGLE_FAN;
p5.prototype.$사각형 = p5.prototype.QUADS;
p5.prototype.$사각형스트립 = p5.prototype.QUADS_STRIP;

p5.prototype.$지름 = p5.prototype.RADIUS;
p5.prototype.$중앙 = p5.prototype.CENTER;
p5.prototype.$꼭짓점 = p5.prototype.CORNER;
p5.prototype.$꼭짓점들 = p5.prototype.CORNERS;

p5.prototype.이동 = function(){
  return this.translate(...arguments);
}

p5.prototype.회전 = function(){
  return this.rotate(...arguments);
}

p5.prototype.축척 = function(){
  return this.scale(...arguments);
}

p5.prototype.밀어넣기 = function(){
  return this.push(...arguments);
}

p5.prototype.꺼내기 = function(){
  return this.pop(...arguments);
}

//  123

p5.prototype.재생중지 = function(){
  return this.noLoop();
}


p5.prototype.재생 = function(){
  return this.loop();
}

p5.prototype.다시그리기 = function(){
  return this.redraw();
}