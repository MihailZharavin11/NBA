import React from "react";
import { Home } from "./pages/Home";
import { Header } from "./shared/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
