/* 
 write a class called Group
 1. has add, deleted, and has methods
 2. its constructor creates an empty group
 3. it has a static method "form" that takes an iterable object, and creates a group that contains all the values produced by iterating over it.
*/

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (this.members.indexOf(value) < 0) this.members.push(value);
  }

  delete(value) {
    if (this.members.indexOf(value) >= 0) {
      this.members.splice(this.members.indexOf(value), 1);
    }
  }

  has(value) {
    return this.members.indexOf(value) >= 0;
  }

  static from(itObj) {
    let fromGrp = new Group();
    for (let item of itObj) {
      fromGrp.add(item);
    }
    return fromGrp;
  }
}

// ======[TEST]======
describe('Group', () => {
  test('examples from text', () => {
    const group = Group.from([10, 20])
    expect(group.has(10)).toBe(true)
    expect(group.has(30)).toBe(false)
    group.add(10)
    expect(group.members).toEqual([10, 20])
    group.delete(10)
    expect(group.members).toEqual([20])
    expect(group.has(10)).toBe(false)
  })
})