import React from "react";
import "./assets/css/app.css";
import Navbar from "./components/Class/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Class/Home";
import Resume from "./components/Class/Resume";
import Project from "./components/Class/Project";
import AboutUs from "./components/Class/AboutUs";
import PageNotFound from "./components/Class/PageNotFound";
import Watch from "./components/Class/Watch";
import Movies from "./components/Class/Movies";
import Teams from "./components/homework/Teams";
import TeamDetails from "./components/homework/TeamDetails";
import Employee from "./components/Class/Employee";
import Student from "./components/Class/Student";
import Product from "./components/homework/Product";
import WatchData from "./components/homework/WatchData";
import InputDemo from "./components/homework/InputDemo";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/movie" element={<Movies />}></Route>
        <Route path="/watch/:name" element={<Watch />}></Route>
        <Route path="/team" element={<Teams />}></Route>
        <Route path="/teamdetails/:teamname" element={<TeamDetails />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/employee" element={<Employee />}></Route>
        <Route path="/student" element={<Student />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/watchdata" element={<WatchData />}></Route>
        <Route path="/inputdemo" element={<InputDemo />} />
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
