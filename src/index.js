import "./index.css"

class Demo {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const demo = new Demo("hello viking");

console.log(demo.getName())
