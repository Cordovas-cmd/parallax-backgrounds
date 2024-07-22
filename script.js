const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');

console.log(ctx)

// for scaling purposes make canvas width and height the same as we set in css

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// bring image in to JS