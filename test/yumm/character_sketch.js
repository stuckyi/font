function setup(){
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);
    frameRate(10);
    
//    var rotationHeadXangle = 0;
    c1 = new Character2(150,150);
    c2 = new Character2(200,200);
    c3 = new Character2(250,90);
    
    c4 = new Character1(250,250);
    c5 = new Character1(30,30);
    c6 = new Character1(100,50);
}



function draw(){
    background(230);
    
    
    c1.display();
    c1.move();
    
    c2.display();
    c2.move();
    
    c3.display();
    c3.move();

    c4.display();
    c4.move();
    
    c5.display();
    c5.move();
    
    c6.display();
    c6.move();
}