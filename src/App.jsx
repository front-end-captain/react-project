import { hot } from "react-hot-loader/root";
import React from "react";

import { Header } from "@/components/Example";

import "./App.css";

const App = () => (
  <div className="app">
    Hello World!
    <Header />
  </div>
);

export default hot(App);
