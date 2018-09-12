import Player from './classes/Player';
import Color from './classes/Color';
import Vector from './classes/Vector';

const playerColor: Color = new Color('2f', 'ba', '5c');
const objectColor: Color = new Color('E8', '33', '5b');

const bgc: Color = new Color('38', '38', '38');

console.log(objectColor.get());

const canvasHeight = 540;
const canvasWidth = 960;

const playerHeight = 60;
const playerWidth = 40;

const gravity = new Vector(0, 1.5);
const friction = new Vector(.9, .9);

const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('game');
const ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext('2d');

ctx.canvas.height = canvasHeight;
ctx.canvas.width = canvasWidth;

const player = new Player(40, canvasHeight - playerHeight, 0 ,0, 0, 0, playerWidth, playerHeight, playerColor);

document.addEventListener('keyup', player.keyHandler);
document.addEventListener('keydown', player.keyHandler);

const loop = () => {
  window.requestAnimationFrame(loop);

  ctx.fillStyle = bgc.get();
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  ctx.fillStyle = objectColor.get();
  ctx.beginPath();
  ctx.rect( 500, canvasHeight - 100, 100, 100);
  ctx.fill();


  if (player.up && !player.jumping) {
    player.jump();
  }

  if (player.left) {
    player.moveLeft();
  }

  if (player.right) {
    player.moveRight();
  }

  player.applyForce(gravity);
  player.update();
  player.applyFriction(friction);

  if (player.pos.x < 0) { 
    player.pos.set(0, player.pos.y);
  } else if (player.pos.x > ctx.canvas.width - player.width) {
    player.pos.set(ctx.canvas.width - player.width, player.pos.y);
  }

  if (player.pos.y > ctx.canvas.height - player.height) {
    player.land(ctx.canvas.height, 0);
  }

  player.draw(ctx);
}

loop();