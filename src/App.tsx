import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./screens";
import About from "./screens/About/About";
import Categories from "./screens/Categories/Categories";
import Projects from "./screens/Projects/Projects";
import Contact from "./screens/Get-in-Touch/Contact";
import Blog from "./screens/Blog/Blog";
import Signup from "./screens/Signup/Signup";
import Login from "./screens/Login/Login";
import Home from "./screens/Dashboard/Body/Home/Home";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
