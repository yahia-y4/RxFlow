import React from "react";
import './TopIcon.css'

export default function TopIcon({icon ,class_f}){
    return(
        <div className="top_icon_div"><span className={class_f}>{icon}</span></div>
    )
}