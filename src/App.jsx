import { hot } from "react-hot-loader/root";
import React from "react";

import Example from "@/components/Example";

import "./App.css";

const App = () => (
  <div className="app">
    Hello World!
    <Example />
  </div>
);

export default hot(App);
