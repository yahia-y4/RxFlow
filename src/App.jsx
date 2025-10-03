import React from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import {Route,Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Storage from "./pages/storage/Storage";
import Home from "./pages/home/Home";

const App = () => {

  return (
    <div className="app_div">

     <Header></Header>

     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/storage" element={<Storage></Storage>} ></Route>
     </Routes>
     
    </div>
  );
};

export default App;
