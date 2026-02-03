import React from "react";
import "./assets/css/app.css";
import Navbar from "./components/Class/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Class/Home";
import Resume from "./components/Class/Resume";
import Project from "./components/Class/Project";
import Contact from "./components/Class/Contact";
import AboutUs from "./components/Class/AboutUs";


function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
