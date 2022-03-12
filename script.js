let debugText = document.getElementById("debug");

function setup() {
    collideDebug(true);
    createCanvas(500, 500);
    background(255);
}

var hit = false;

let lineCenter = {x: 250, y: 400}
let lines = [
    {x: 50, y: 150},
    {x: 450, y: 150}
]

let ballRadius = 15;
let balls = [
    {x: 100, y: 50, dir: 180}
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

    // Draw balls
    balls.forEach(({x,y}) => {
        circle(x, y, ballRadius)
        // Test draw the next one
    })

    // Calculate hit
    hit = didHit(mouseX, mouseY);
    // update based on hit
    if(hit) debugText.textContent = "Hit!"
}