import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./screens";
import About from "./screens/About/About";
import Categories from "./screens/Categories/Categories";
import Projects from "./screens/Project/Projects";
import Contact from "./screens/Get-in-Touch/Contact";
import Blog from "./screens/Blog/Blog";
import Signup from "./screens/Signup/Signup";
import Login from "./screens/Login/Login";
import Home from "./screens/Dashboard/Body/Home/Home";
import Dashboard from "./screens/Dashboard";
import StudentProjects from "./screens/Dashboard/Body/StudentProjects/StudentProjects";
import Articles from "./screens/Dashboard/Body/Articles/Articles";
import Educator from "./screens/Dashboard/Body/Educator/Educator";
import Settings from "./screens/Dashboard/Body/Setting/Settings";

// const About = React.lazy(() => import("./pages/About"));

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
        <Route
          path="/dashboard/student-projects"
          element={<StudentProjects />}
        />
        <Route path="/dashboard/articles" element={<Articles />} />
        <Route path="/dashboard/educator" element={<Educator />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
