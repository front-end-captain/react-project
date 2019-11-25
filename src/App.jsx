import { hot } from "react-hot-loader/root";
import React from "react";

import { Header } from "@/components/Example";

import { AppWrapper } from  "./App.css.js";

const App = () => (
  <AppWrapper>
    Hello World!
    <Header />
  </AppWrapper>
);

export default hot(App);
