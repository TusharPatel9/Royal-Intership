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
import InputDemo from "./components/homework/Input HW/InputDemo";
import DropDown from "./components/homework/DropDown";
import InputHomeWork from "./components/homework/Input HW/InputHomeWork";
import FormHW1 from "./components/homework/Form HW/FormHW1";
import FormDemo2 from "./components/homework/Form HW/FormDemo2";
import FormDemo3 from "./components/homework/Form HW/FormDemo3";
import FormMain from "./components/homework/Form HW/FormMain";
import FormClassDemo2 from "./components/Class/Form/FormClassDemo2";
import ProductFormValidator from "./components/homework/Form HW/ProductFormValidator";
import EmployeeFormValidation from "./components/homework/Form HW/EmployeeFormValidation";
import PasswordFormValidator from "./components/homework/Form HW/PasswordFormValidator";
import ApiMain from "./components/Class/api/ApiMain";
import ApiDemo1 from "./components/Class/api/ApiDemo1";
import ApiHomeWork1 from "./components/homework/api Hw/ApiHomeWork1";
import ApiHomeWork2 from "./components/homework/api Hw/ApiHomeWork2";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/movie" element={<Movies />}></Route>
        <Route path="/watch/:name" element={<Watch />}></Route>
        <Route path="/team" element={<Teams />}></Route>
        <Route path="/teamdetails/:teamname" element={<TeamDetails />}></Route>
        <Route path="/employee" element={<Employee />}></Route>
        <Route path="/student" element={<Student />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/watchdata" element={<WatchData />}></Route>
        <Route path="/inputdemo" element={<InputDemo />} />
        <Route path="/inputhomework" element={<InputHomeWork />}></Route>
        <Route path="/dropdown" element={<DropDown />}></Route>
        <Route path="/forms" element={<FormMain />}></Route>
        <Route path="/formhw1" element={<FormHW1 />}></Route>
        <Route path="/formdemo2" element={<FormDemo2 />}></Route>
        <Route path="/formclassdemo2" element={<FormClassDemo2 />}></Route>
        <Route path="/productform" element={<ProductFormValidator/>}></Route>
        <Route path="/employeeform" element={<EmployeeFormValidation/>}></Route>
        <Route path="/formdemo3" element={<FormDemo3 />}></Route>
        <Route path="/passwordvalidation" element={<PasswordFormValidator />}></Route>
        <Route path="/apis" element={<ApiMain/>}/>
        <Route path="/apidemo1" element={<ApiDemo1/>}/>
        <Route path="/apihw1" element={<ApiHomeWork1/>}/>
        <Route path="/apihw2" element={<ApiHomeWork2/>}/>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
