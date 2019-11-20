import "./index.css";

class App {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const app = new App("hello app");

console.log(app.getName());
