import React from "react";
import "./Button.css";

export default function Button({ id_v, string }) {
  return (
    <div id={id_v} className="button_class">
      {string}
    </div>
  );
}
