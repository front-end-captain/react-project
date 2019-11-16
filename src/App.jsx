import { hot } from "react-hot-loader/root.js";
import React from "react";

import Countdown from "@/components/Countdown/index.js";

import "./App.css";

const App = () => (
  <div className="app">
    Hello World! <Countdown remainingTime={5000} onLessThenZero={() => console.log("zero")} />
  </div>
);

export default hot(App);
