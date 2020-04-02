// street zone
const background = {
    update: function(){},
    draw: function(vtx) {
        vtx.beginPath();
        vtx.rect(0, 140, 1000 , 10);
        vtx.fillStyle = "green";
        vtx.fill();

        vtx.beginPath();
        vtx.rect(0, 90, 1000, 50);
        vtx.fillStyle = "grey";
        vtx.fill();
        // another safe zone
        vtx.beginPath();
        vtx.rect(0, 80, 1000, 10);
        vtx.fillStyle = "green";
        vtx.fill();
        //water zone
        vtx.beginPath();
        vtx.rect(0, 30, 1000, 50);
        vtx.fillStyle = "blue";
        vtx.fill();
        //1st block
        vtx.beginPath();
        vtx.rect(25, 0, 25, 30);
        vtx.fillStyle = "yellow";
        vtx.fill();

        vtx.beginPath();
        vtx.rect(100, 0, 25, 30);
        vtx.fillStyle = "yellow";
        vtx.fill();

        vtx.beginPath();
        vtx.rect(175, 0, 25, 30);
        vtx.fillStyle = "yellow";
        vtx.fill();

        vtx.beginPath();
        vtx.rect(250, 0, 25, 30);
        vtx.fillStyle = "yellow";
        vtx.fill();
    }
};
export {background};