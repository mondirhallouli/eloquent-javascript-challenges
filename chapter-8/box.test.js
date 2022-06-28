const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  },
};

// exercise function
function withBoxUnlocked(body) {
  // unlock the box
  // run the body function
  // lock the box
  // return the body function result
  let result;
  if (box.locked === false) {
    result = body();
    return result;
  }

  box.unlock();
  try {
    result = body();
    return result;
  } finally {
    box.lock();
  }
}

// TESTS
describe("tests from text", () => {
  test("pushing to the box content", () => {
    withBoxUnlocked(function () {
      box.content.push("gold piece");
    });
    box.unlock();
    expect(box.content).toContain("gold piece");
  });

  test("the box should still be unlocked", () => {
    expect(box.locked).toBe(false);
  });

  test("throw an error", () => {
    expect(() =>
      withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!");
      })
    ).toThrowError("Pirates on the horizon! Abort!");
  });
});
