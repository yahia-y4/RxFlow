import React from "react";
import "./Button.css";

export default function Button({ id_v, string , onClick}) {
  return (
    <div onClick={onClick} id={id_v} className="button_class" >
      {string}
    </div>
  );
}
