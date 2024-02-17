class Canvas {
    static canvas;
    static context;
    static width;
    static height;

    static init(selector) {
        Canvas.canvas = document.querySelector(selector);
        Canvas.context = Canvas.canvas.getContext("2d");

        window.addEventListener("resize", Canvas.resize);

        Canvas.resize();

        return Canvas.context;
    }

    static resize() {
        Canvas.canvas.width = Canvas.width = Canvas.canvas.clientWidth / 2;
        Canvas.canvas.height = Canvas.height = Canvas.canvas.clientHeight / 2;
    }

    static clear() {
        Canvas.context.clearRect(0, 0, Canvas.width, Canvas.height);
    }
}

let xx = 0;
let yy = 0;

let ctx = Canvas.init("#canvas");

let userFunction = "";

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function paintPixel() {
    const x = xx++; // random(0, Canvas.width);
    const y = yy; // random(0, Canvas.height);

    if (xx > Canvas.width) {
        xx = 0; 
        yy++;
    }

    if (yy > Canvas.height) yy = 0;
    
    try{
        ctx.fillStyle = `#${eval(userFunction)}`;
    } catch(e) {}
        
    ctx.fillRect(xx, yy, 1, 1);
}

const inputField = document.getElementById("functionEnter");
inputField.addEventListener("input", function(){
    userFunction = inputField.value;
});

function main() {
    for (let i = 0; i < 10000; i++) {
        paintPixel();
    }

    window.requestAnimationFrame(main);

}

main();