import Vector from './Vector';

class PhysicsBody {

  pos: Vector;
  vel: Vector;
  acc: Vector;

  constructor(x: number, y: number, vx: number, vy: number, z?: number, vz?: number) {

    this.pos = new Vector(x, y, z);
    this.vel = new Vector(vx, vy, vz);
    this.acc = new Vector(0, 0, 0);
  }

  update = () => {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0, 0);
  }

  applyForce = (force: Vector) => {
    this.acc.add(force);
  }

  applyFriction = (force: Vector) => {
    this.vel.multiply(force);
  }
}

export default PhysicsBody;