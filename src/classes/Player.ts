import PhysicsBody from './PhysicsBody';
import Color from './Color';
import Vector from './Vector';

class Player extends PhysicsBody {
  height: number;
  width: number;
  color: Color;
  jumping: boolean;
  jumpSpeed: Vector;
  lateralSpeed: Vector;

  left: boolean;
  up: boolean;
  right: boolean;

  constructor(
      x: number, y: number, 
      vx: number, vy: number, 
      z: number, vz: number, 
      width: number, height: number, color: Color
  ) {
    super(x, y, vx, vy, z, vz);

    this.width = width;
    this.height = height;
    this.color = color;

    this.jumping = false;

    this.jumpSpeed = new Vector(0, -30);
    this.lateralSpeed = new Vector(2, 0);

    this.left = false;
    this.up = false;
    this.right = false;

  }

  keyHandler = (e: KeyboardEvent): void => {
    const keyState = (e.type === 'keydown');

    switch(e.keyCode) {
      case 37:
      case 65:
        this.left = keyState;
        break;
      case 38:
      case 87:
        this.up = keyState;
        break;
      case 39:
      case 68:
        this.right = keyState;
        break;
    }
  }

  moveLeft = (): void => {
    this.vel.subtract(this.lateralSpeed);
  }

  moveRight = (): void => {
    this.vel.add(this.lateralSpeed);
  }

  jump = () => {
    this.jumping = true;
    this.applyForce(this.jumpSpeed);

  }

  land = (gameHeight: number, floorHeight: number) => {
    this.jumping = false;
    this.vel.set(this.vel.x, 0);
    this.pos.set(this.pos.x, gameHeight - floorHeight - this.height);
  }

  draw = (ctx: CanvasRenderingContext2D) => {
    const { x, y } = this.pos;
    const { width, height } = this;

    ctx.fillStyle = this.color.get();
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fill();
  }
}

export default Player;