const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');

console.log(ctx)

// for scaling purposes make canvas width and height the same as we set in css

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// bring image in to JS
const playerImage = new Image();
playerImage.src = './images/shadow_dog.png';


// for a sprite sheet take width of entire file and divide it by number of columns to get the width of one "sprite" for sprite Height, get height of the file and divide it by number of rows
const spriteWidth = 575;
const spriteHeight = 525;


let frameX = 0;
let frameY = 0;

let gameFrame = 0;


// function to start animation loop
function animate() {
    // clear whole canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // ctx.fillRect(100,50,100,100);

    // draw image method can take 3, 5, or 9 arguments depending on how much control you want to have in this case it's just the image variable, and the x y coordinates

    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    // set up if statement to cycle through animation frames

    if(frameX < 6) frameX++;
    else frameX = 0;
    
    

    // run a function we pass to it, since I'm calling the animate function it will run it over and over. 
    requestAnimationFrame(animate);


    // if statement to reset and reloop x
    // if(x > 600){
    //     // console.log("yes")
    //     x=0
    // }
    
};

animate();