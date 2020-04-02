
let frogss;

let mm = function frogger() {
    ruimte.start();
    frogss = new Frog(50, 50, "green", 200, 135);
};

let ruimte = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            ruimte.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            ruimte.key = false;
        })
    },
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function Frog(width, height, color, x, y) {
    this.gamearea = ruimte;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        vtx = ruimte.context;
        vtx.fillStyle = color;
        vtx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    ruimte.clear();
    frogss.speedX = 0;
    frogss.speedY = 0;
    if (ruimte.key && ruimte.key == 37) {frogss.speedX = -10; }
    if (ruimte.key && ruimte.key == 39) {frogss.speedX = 10; }
    if (ruimte.key && ruimte.key == 38) {frogss.speedY = -10; }
    if (ruimte.key && ruimte.key == 40) {frogss.speedY = 10; }
    frogss.newPos();
    frogss.update();
}

export {mm};