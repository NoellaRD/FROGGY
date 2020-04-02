let frogss;

function Frog(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
}


Frog.prototype.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
};


Frog.prototype.draw = function (vtx) {
    vtx.beginPath();
    vtx.rect(this.width,this.height,this.y,this.x);
    console.log(vtx.fillStyle);
    vtx.fill();
    vtx.stroke();
};

Frog.prototype.update = function () {
    vtx.fillStyle = this.color;
    vtx.fillRect(this.x, this.y, this.width, this.height);
};

export {Frog};

