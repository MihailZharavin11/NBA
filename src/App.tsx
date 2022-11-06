import React, { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { Header } from "./shared/Header/Header";
import "./App.css";
import "./sass/main.scss";
import { BurgerMenu } from "./shared/BurgerMenu/BurgerMenu";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
