import "./index.css";

class App {
  constructor(rootNode) {
    this.node = rootNode;

    rootNode.innerHTML = "<div class='content'>This project has not any features</div>";
  }

  getName() {
    return this.name;
  }
}

const root = document.getElementById("root");
new App(root);
