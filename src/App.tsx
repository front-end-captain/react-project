import { hot } from "react-hot-loader/root";
import React, { FunctionComponent } from "react";

import { Countdown } from "@/components/Countdown";

import "./App.css";

interface AppProps {
  name?: string;
}

const App: FunctionComponent<AppProps> = () => {
  return <div className="App">React App <Countdown remainingTime={5000} /></div>;
};

export default hot(App);
