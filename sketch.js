var ekran;
function setup() {
    createCanvas(windowWidth,windowHeight);
    background(81);
    ekran = createGraphics(windowWidth, windowHeight);
    ekran.background(81);
}

function draw() {

    background(81);
    if(mouseIsPressed)
    {
        ekran.stroke(255);
        ekran.fill(255,255,255,150);
        ekran.ellipse(mouseX, mouseY,64);
    }
    image(ekran,0,0);

    fill(255,255,50,240);
    ellipse(mouseX,mouseY,32);

}

function keyPressed()
{
    ekran.background(81);
}