
class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    return `Hello what is up, I am ${this.name}`;
  }
}

module.exports = Dog;
