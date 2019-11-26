import { hot } from "react-hot-loader/root";
import React, { FunctionComponent } from "react";

import { Countdown } from "@/components/Countdown";

import logo from "./assets/logo.svg";

import "./App.css";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <a className="App-link" href="http://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          Learn TypeScript
        </a>
        <p>
          Any questions contract author&apos;s dingtalk: <strong>Brendan.ye</strong>
        </p>

        <Countdown remainingTime={1 * 24 * 60 * 60 * 1000} />
      </header>
    </div>
  );
};

export default hot(App);
