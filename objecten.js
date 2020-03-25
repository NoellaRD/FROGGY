//objects
const char = {
    naam : "kwaak",
    color: "green",
    width: 20,
    height: 30,
    startPos: ["hello"],
    // vector: [],
    // move: () => {
    //     return console.log(char.startPos)
    // }
};

function()
{
    const tree = {
        naam: "woosh",
        color: "brown",
        width: 60,
        height: 20,
        x: 0,
        y: 0
    };

    document.getElementById('can').innerHTML= tree;
}

const car = {
    naam: "toettoet",
    color: "red",
    width: 30,
    height: 40,
};

const turtle = {
    naam: "blub",
    color: "light-brown",
    width: 23,
    height: 33,
};

char.prototype.constructor = function (controls) {
    let x = y = 0;

    if (controls === 'left'){
        x = this.x -101;
        if(x >= 0){
            this.x = x;
        }
    }


    if (allowedKeys === 'right') {
        x = this.x + 101;
        if (x <= 1101) {
            this.x = x;
        }
    }