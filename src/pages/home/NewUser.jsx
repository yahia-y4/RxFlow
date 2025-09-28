import React from "react";
import "./Home.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
export default function NewUser({handleActiveHomeRightPart}){
    const addUser = () =>{
        handleActiveHomeRightPart("loged");
    }
    const cancelAddUser = () =>{
        handleActiveHomeRightPart("logout");
    }
    return(
        <div className="inside_right_part_com">
            <div className="newUser_inputs"> 
            <Input label_v={"اسم المستخدم"}></Input>
            <Input label_v={"البريد الإلكتروني"}></Input>
            <Input label_v={"كلمة المرور"}></Input>
                     <div className="newUser_buts">
                <Button string={"انشاء حساب"} onClick={()=>addUser()}></Button>       
                <Button string={" الغاء"} onClick={()=>cancelAddUser()}></Button>
            </div>
            </div>
   
          
        </div>
    )
}