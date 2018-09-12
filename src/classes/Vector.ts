class Vector {
  x: number;
  y: number;
  z?: number;

  constructor(x:number, y:number, z: number=0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  add = (v: Vector): Vector => {
    this.x += v.x;
    this.y += v.y;
    if (this.z && v.z) {
      this.z += v.z;
    }
    return this;
  }
  
  subtract = (v: Vector): Vector => {
    this.x -= v.x;
    this.y -= v.y;
    if (this.z && v.z) {
      this.z -= v.z;
    }
    return this;
  }

  multiply = (v: Vector): Vector => {
    this.x *= v.x;
    this.y *= v.y;
    if (this.z && v.z) {
      this.z *= v.z;
    }

    return this;
  }

  combine = (v: Vector): Vector => {
    if (!this.x && v.x) {
      this.x = v.x;
    }

    if (!this.y && v.y) {
      this.y = v.y;
    }

    return this;
  }
  
  set = (x: number, y: number, z?: number): Vector => {
    this.x = x;
    this.y = y;
    this.z = z;

    return this;
  }
}

export default Vector;