import React from "react";
import "./Button.css";

export default function Button({ string , onClick}) {
  return (
    <div onClick={onClick} className="button_class" >
      {string}
    </div>
  );
}

