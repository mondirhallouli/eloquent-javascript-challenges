/* 
  create a vector class that takes x and y parameters. 
    - it has two methods, plus and minus. they take another vector as paramter, and return the sum or difference of two vectors' x and y.
    - it has a getter prop called length in the prototype
      + returns the length of the vector => the distance of the point (x, y) from (0, 0);
*/

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector){
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }

  minus(vector){
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  }

  get length(){
    return Math.floor(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
  }
}

// =======[TESTS]=======
describe('Vec', () => {
  test('examples from text', () => {
    expect(new Vec(3, 5).plus(new Vec(2, 3))).toMatchObject({ x: 5, y: 8 })
    expect(new Vec(3, 5).minus(new Vec(2, 3))).toMatchObject({ x: 1, y: 2 })
    expect((new Vec(3, 5).length)).toBe(5)
  })
})
