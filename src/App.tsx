import { useState } from "react";
import "./App.css";
import Navbar from "./screens/Navbar/Navbar";
import Hero from "./screens/Hero/Hero";
import About from "./screens/About/About";
import How from "./screens/How-we-work/How";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <How />
    </>
  );
}

export default App;
