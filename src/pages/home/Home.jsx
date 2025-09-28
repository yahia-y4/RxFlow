import React from "react";
import "./Home.css";
import HomeLeftPart from "./HomeLeftPart";
import HomeRightPart from "./HomeRightPart";
export default function Home() {
  return (
    <div className="home_page">
        <HomeRightPart></HomeRightPart>
        <HomeLeftPart></HomeLeftPart>
      
    
    </div>
  );
}
