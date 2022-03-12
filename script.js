let debugText = document.getElementById("debug");

function setup() {
    collideDebug(true);
    createCanvas(500, 500);
    background(255);
}

var hit = false;

let lineCenter = {x: 250, y: 400}
let lines = [
    {x: 100, y: 200},
    {x: 400, y: 200}
]

// Return True iff point at (testX,testY) is colliding with either line
function didHit(testX, testY){
    return lines
        .some(({x,y}) => collidePointLine(testX, testY, x, y, lineCenter.x, lineCenter.y));
}

function draw() {
    // Reset debug text
    debugText.textContent = "";

    // Draw lines
    stroke(color('black'));
    lines.forEach(({x, y}) => {
        line(x, y, lineCenter.x, lineCenter.y);
    })
    hit = didHit(mouseX, mouseY);
    
    if(hit) debugText.textContent = "Hit!"
}