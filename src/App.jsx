import { hot } from "react-hot-loader/root";
import React from "react";

import { Header } from "@/components/Example";
import { HoverButton } from "@/components/HoverButton";

import { AppWrapper } from  "./App.css.js";

import { Button } from "./button";

const App = () => (
  <AppWrapper>
    Hello World!
    <Header />
    <HoverButton />

    <Button />
  </AppWrapper>
);

export default hot(App);
