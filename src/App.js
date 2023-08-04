import React from "react";
import "./App.css";
import Home from "./Componets/Home";
import Nav from "./Componets/Navbar";
import Sidebar from "./Componets/Sidebar";
import {Routes, Route} from "react-router-dom";
import Calendar from "./Componets/Calendar";
import ImageGenerator from "./Componets/Image";
import SpeachToText from "./Componets/SpeachToText";
import Users from "./Componets/Users";
import ThreeD from "./Componets/3D";
import Removebg from "./Componets/Removebg";
import View from "./Componets/View";
import Resize from "./Componets/Resize";
const App = () => {
  return (
    <div>
      <Nav />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Calendar" element={<Calendar />} exact />
          <Route
            path="/ImageGenerator"
            element={<ImageGenerator />}
            exact
          />{" "}
          <Route path="/SpeachToText" element={<SpeachToText />} exact />
          <Route path="/Users" element={<Users />} exact />
          <Route path="/remove" element={<Removebg />} exact />
          <Route path="/3Dmodle" element={<ThreeD />} exact />
          <Route path="/View/:id" element={<View />} exact />
          <Route path="/Resize" element={<Resize />} exact />
        </Routes>
      </div>
    </div>
  );
};

export default App;
