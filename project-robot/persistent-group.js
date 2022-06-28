class PGroup {
  constructor(members) {
    this.members = members;
  }

  add(value) {
    if (this.members.includes(value)) return this;
    return new PGroup(this.members.concat(value));
  }

  delete(value) {
    if (!this.members.includes(value)) return this;
    return new PGroup(this.members.filter((m) => m !== value));
  }

  has(value) {
    return this.members.includes(value);
  }
}

PGroup.empty = new PGroup([]);
