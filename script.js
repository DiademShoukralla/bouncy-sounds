let debugText = document.getElementById("debug");

var hit = false;

let lineCenterPos = {x: 250, y: 400}
let linePos = [
    {x: 50, y:150},
    {x: 450, y: 150}
]
let lines, lineCenter

let ballRadius = 15;
let ballPos = [
    {x: 100, y: 50}
]
let balls

function setup() {
    collideDebug(true);
    createCanvas(500, 500);
    background(255);

    lineCenter = createVector(lineCenterPos.x, lineCenterPos.y)
    lines = linePos.map(({x, y}) => createVector(x, y));
    balls = ballPos.map(({x,y}) => ({pos: createVector(x, y), dir: 180}))
}

/**
 * If a collision occurs with inVec, return the line vector in which it occured with
 *  */
function didHit(inVec){
    for(let i=0; i<lines.length; i++){
        if(collidePointLineVector(inVec, lines[i], lineCenter)) return lines[i];
    }
    return null
}

function draw() {
    // Reset debug text
    debugText.textContent = "";

    // Draw lines
    stroke(color('black'));
    lines.forEach(lineVec => {
        line(lineVec.x, lineVec.y, lineCenter.x, lineCenter.y);
    })

    // Draw balls
    balls.forEach(({pos}) => {
        circle(pos.x, pos.y, ballRadius)
        // Test draw the next one
    })

    // Calculate hit
    hit = didHit(createVector(mouseX, mouseY));
    // update based on hit
    if(hit) {
        debugText.textContent = "Hit!"
        
    }
}