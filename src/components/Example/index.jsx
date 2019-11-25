import React from "react";

import { HeaderWrapper } from "./index.css.js";

import "./index.css";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header-container">
        <h1 className="title">React Typescript Starter</h1>
      </div>
    </HeaderWrapper>
  );
};

export { Header };
