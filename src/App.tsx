import { useState } from "react";
import "./App.css";
import Navbar from "./screens/Navbar/Navbar";
import Hero from "./screens/Hero/Hero";
import About from "./screens/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
