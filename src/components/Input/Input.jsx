import React  from "react";
import "./Input.css"

export default function Input({label_v, input_v ,plash_v, id_v ,type_v ="text", onChange }){

    return(
        <div className="input_compon ">
             <label className="label_class" htmlFor={id_v}>{label_v}</label>
            <input className="input_class" id={id_v} type={type_v} placeholder={plash_v} value={input_v} onChange={onChange} />
        </div>
    )
}