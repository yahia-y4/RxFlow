import React from "react";
import "./Right_part_storage.css";

import Insideicon from "../../../components/InsideIcon/Insideicon";
import Add_item_to_storage from "../../../components/Add_item_to_storage/Add_item_to_storage";

export default function Right_part_storage() {
  return (
    <div id="right_part_storage_div">
      <div className="top_icons_right_flex">
        <Insideicon id_i="add" class_f="fas" font="&#xf108;"></Insideicon>
      </div>

      <Add_item_to_storage></Add_item_to_storage>
    </div>
  );
}
