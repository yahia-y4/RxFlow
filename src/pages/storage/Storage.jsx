import React from "react";
import './Storage.css'

import Right_part_storage from "./right_part_srorage/Right_part_storage";
import Middle_part_storage from "./middle_part_storage/Middle_part_storage";
import Left_part_storage from "./left_part_storage/Left_part_storage";
export default function Storage(){
    return(
        <div className="storage_div">
            <Right_part_storage></Right_part_storage>
            <Middle_part_storage></Middle_part_storage>
            <Left_part_storage></Left_part_storage>
        </div>
    )
}