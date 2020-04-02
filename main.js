

import {Vehicle} from "./treeobject.js";
import {background} from "./canvas.js";
import {mm} from "./kikker.js";


const canvas = document.getElementById("can");
const vtx = canvas.getContext("2d");


const gameObjects = [
    background,mm,
    new Vehicle('grey', 'red', 'grey', 0, 90, 10,30, 0, 1.5),
    new Vehicle('grey', 'blue', 'black', 0, 110, 10,30, 0, 1),
    new Vehicle('grey', 'pink', 'black', 0, 130, 10,30, 0, 0.7),
    // new Frog(50,50,"blue",200,135)
    // new Vehicle('white', 'silver', 20, 220, 305, 0.55, 'right'),
    // new Vehicle('purple', 'yellow', 20, 20, 280, 0.75, 'left'),
    // new Vehicle('purple', 'yellow', 20, 220, 280, 0.75, 'left'),
    // new Vehicle('green', 'red', 20, 20, 255, 1, 'right'),
    // new Vehicle('green', 'red', 20, 220, 255, 1, 'right'),
    // new Vehicle('white', 'green', 40, 20, 230, 0.4, 'left'),
    // new Vehicle('white', 'green', 40, 220, 230, 0.4, 'left')
];



function start() {
    // Code om hele canvas te clearen

    gameObjects.forEach((gameObject) => {
        gameObject.update();
        gameObject.draw(vtx);
    });
    requestAnimationFrame(start);
}

requestAnimationFrame(start);