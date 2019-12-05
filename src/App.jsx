import { hot } from "react-hot-loader/root";
import React from "react";

import Example from "@/components/Example";

import styles from "./App.less";

import "./global.less";

const App = () => (
  <div className={styles.app}>
    <div className={styles.content}>AppContent</div>
    Hello World!
    <Example />
  </div>
);

export default hot(App);
