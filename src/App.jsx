import { hot } from "react-hot-loader/root";
import React from "react";

import Example from "@/components/Example";

import styles from "./App.less";

console.log(styles);

import "./global.less";

const App = () => (
  <div className={`${styles['app']}`}>
    <div className="content-ok">AppContent</div>
    <span className="title">Hello World!</span>
    <Example />
  </div>
);

export default hot(App);
