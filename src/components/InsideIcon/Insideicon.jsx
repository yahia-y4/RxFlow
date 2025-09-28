import React from "react";
import "./Insideicon.css"

export default function Insideicon({ class_f ,font ,onClick}){
    return (
        <div className={"inside_icon_div"} onClick={onClick} ><span className={class_f}>{font}</span></div>
    )
}