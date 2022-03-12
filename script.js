let debugText = document.getElementById("debug");

function setup() {
    collideDebug(true);
    createCanvas(500, 500)
    background(255)
    // debugText.textContent = ""
}

var hit = false;

let lineCenter = {x: 250, y: 400}
let lines = [
    {x: 100, y: 200},
    {x: 400, y: 200}
]

function draw() {
    stroke(color('black'))
    lines.forEach(({x, y}) => {
        line(x, y, lineCenter.x, lineCenter.y)
    })

    // No buffer zone, most standard example:
    // hit = collidePointPoint(100, 100, mouseX, mouseY);
}