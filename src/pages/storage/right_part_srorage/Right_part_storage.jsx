import React, { useState }from "react";
import "./Right_part_storage.css";

import Insideicon from "../../../components/InsideIcon/Insideicon";
import Add_item_to_storage from "../../../components/Add_item_to_storage/Add_item_to_storage";

export default function Right_part_storage() {
   const [currentPage, setCurrentPage] = useState('');
   const show_page = ()=>{
     switch (currentPage){
      case 'add_item_page':
        return <Add_item_to_storage />;
        default :
        return null

     }
   }
  return (
    <div id="right_part_storage_div">
      <div className="top_icons_right_flex">
        <Insideicon id_i="add" class_f="far" font="&#xf271;"   onClick={() => setCurrentPage('add_item_page')}></Insideicon>
        <Insideicon id_i="add" class_f="far" font="&#xf15c;"></Insideicon>
        <Insideicon id_i="add" class_f="far" font="&#xf06e;"></Insideicon>
        <Insideicon id_i="add" class_f="far" font="	&#xf044;"></Insideicon>
        <Insideicon id_i="add" class_f="far" font="&#xf2ed;"></Insideicon>
        <Insideicon id_i="add" class_f="fa" font="&#xf002;"></Insideicon>
      </div>

      <Add_item_to_storage></Add_item_to_storage>
    </div>
  );
}
