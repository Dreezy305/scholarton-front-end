import { useState } from "react";
import "./App.css";
import Navbar from "./screens/Navbar/Navbar";
import Hero from "./screens/Hero/Hero";
import About from "./screens/About/About";
import How from "./screens/How-we-work/How";
import Categories from "./screens/Categories/Categories";
import Projects from "./screens/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <How />
      <Categories />
      <Projects />
    </>
  );
}

export default App;
