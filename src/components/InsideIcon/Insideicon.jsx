import React from "react";
import "./Insideicon.css"

export default function Insideicon({id_i , class_f ,font ,onClick}){
    return (
        <div id={id_i} className={"inside_icon_div"}  onClick={onClick} ><span className={class_f}>{font}</span></div>
    )
}