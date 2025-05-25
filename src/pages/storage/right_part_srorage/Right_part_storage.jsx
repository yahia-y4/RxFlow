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
           
               <Input label_v={" الاسم التجاري"} id_v={"add_name_item_input"}></Input>
               <Input label_v={"اسم الشركة "} id_v={"add_co_name_item_input"}></Input>
               <Input label_v={"الشكل الصيدلاني"} id_v={""}></Input>
               <Input label_v={"التركيز "} id_v={""}></Input>
               <Input label_v={"العيار"} id_v={""}></Input>
                <Input label_v={"العبوة "} id_v={""}></Input>
                 <Input label_v={"العدد "} id_v={""}></Input>
                 <Input label_v={"سعر القطعة"} id_v={""}></Input>
                 <Input label_v={"نسبة الربح %"} id_v={""}></Input>
                 <Input label_v={"الباركود "} id_v={""}></Input>
                 <Input label_v={"الصنف "} id_v={""}></Input>
            

           </div>
        </div>
    )
 }