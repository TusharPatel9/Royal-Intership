import React from "react";
import "./assets/css/app.css";
import Header from "./components/homework/Header";
import Content from "./components/homework/Content";
import { FooterCompo } from "./components/Class/FooterCompo";
import MapDemo6 from "./components/homework/MapDemo6";
import MapDemo7 from "./components/homework/MapDemo7";
import MapDemo8 from "./components/homework/MapDemo8";
import MapDemo9 from "./components/homework/MapDemo9";
// import MapDemo1 from "./components/Class/MapDemo1";
// import MapDemo2 from "./components/Class/MapDemo2";
// import MapDemo3 from "./components/Class/MapDemo3";
// import { MapDemo4 } from "./components/Class/MapDemo4";
// import MapDemo5 from "./components/Class/MapDemo5";

function App() {
  return (
    <div className="app">
      <div>
        <Header />
        <Content />
        {/* <MapDemo1 />
        <MapDemo2 />
        <MapDemo3 />
        <MapDemo4 />
        <MapDemo5 /> */}
        <MapDemo6 />
        <MapDemo7 />
        <MapDemo8/>
        <MapDemo9/>

        <FooterCompo />
      </div>
    </div>
  );
}

export default App;
