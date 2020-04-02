function Vehicle(colorbg, color, wheelColor, length,width, x, y, xd, yd)
{
    this.color = color;
    this.colorbg = colorbg;
    this.length = length;
    this.width = width;
    this.x = x;
    this.y = y;
    this.vector = [xd, yd];
}

Vehicle.prototype.update = function () {
    // this.x += this.direction ==='right' ? this.speed : (this.speed * -1);
    // if (this.direction === 'right') { if (this.x >= 450) { this.x = -1; }
    // } else { if (this.x <= -40) { this.x = 400; } }
    this.x = this.x + this.vector[0];
    this.y = this.y + this.vector[1];
};

Vehicle.prototype.draw = function(vtx, show){
    vtx.beginPath();
    vtx.rect(this.length,this.width,this.y,this.x);
    if (show === true) {
            vtx.fillStyle = this.colorbg;
        vtx.fill();

    } else {
        vtx.fillStyle = this.color;
        vtx.fill();

    }
    console.log(vtx.fillStyle);
    // vtx.rect(30, 30, 50, 50);
    vtx.stroke();
};

export {Vehicle};