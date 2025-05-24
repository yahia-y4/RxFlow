import React from "react";
import "./Right_part_storage.css"

import Insideicon from "../../../components/InsideIcon/Insideicon";
import Input from "../../../components/Input/Input";
 export default function Right_part_storage(){
    return (
        <div id="right_part_storage_div">
           <div className="top_icons_right_flex">
            <Insideicon id_i="add" class_f="fas" font="&#xf108;"></Insideicon>
            
           </div>

           <div className="add_inputs_right_div">
            <Input label_v="الاسم" id_v="name"></Input>

           </div>
        </div>
    )
 }