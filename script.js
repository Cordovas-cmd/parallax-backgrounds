const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');

console.log(ctx)

// for scaling purposes make canvas width and height the same as we set in css

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// bring image in to JS
const playerImage = new Image();
playerImage.src = './images/shadow_dog.png';
let x = 0;

// function to start animation loop
function animate() {
    // clear whole canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.fillRect(x,50,100,100);
    x++
    

    // run a function we pass to it, since I'm calling the animate function it will run it over and over. 
    requestAnimationFrame(animate);


    // if statement to reset and reloop x
    // if(x > 600){
    //     // console.log("yes")
    //     x=0
    // }
    
};

animate();