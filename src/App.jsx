import React from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


import Header from "./components/Header/Header";
import Storage from "./pages/storage/Storage";

const App = () => {
  return (
    <div className="app_div">

     <Header></Header>
     
     <Storage></Storage>
     
    </div>
  );
};

export default App;
