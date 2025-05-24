import React from "react";
import './TopIcon.css'

export default function TopIcon({icon ,class_f , id_i}){
    return(
        <div id_i={id_i} className="top_icon_div"><span className={class_f}>{icon}</span></div>
    )
}