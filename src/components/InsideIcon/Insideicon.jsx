import React from "react";
import "./Insideicon.css"

export default function Insideicon({id_i , class_f ,font}){
    return (
        <div id={id_i} className="inside_icon_div" ><span className={class_f}>{font}</span></div>
    )
}