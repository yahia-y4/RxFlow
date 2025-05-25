import React from "react";
import "./Add_item_to_storage.css"
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Add_item_to_storage(){
    return(
         <div className="Add_item_to_storage_div">
           
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

                 <div className="add_buttons_div">
                    <Button string={"اضافة"}></Button>
                    <Button string={"الغاء"}></Button>
                    <Button string={"محو"}></Button>
                 </div>
            

           </div>
    )
}