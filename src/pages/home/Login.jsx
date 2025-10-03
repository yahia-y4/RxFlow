import React from "react";
import "./Home.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState } from "react";

export default function Login({handleActiveHomeRightPart}) {
    const [userData,setUserData] = useState({
        email:"",
        password:"",
    });
    function loginUser(){
        handleActiveHomeRightPart("loged");
    }
    function cancelLoginUser(){
        handleActiveHomeRightPart("logout");
    }
    function handleEmail(e){
        setUserData({...userData,email:e.target.value});
        
    }
    function handlePassword(e){
        setUserData({...userData,password:e.target.value});
        
    }
    return (
        <div className="inside_right_part_com">
            <div className="newUser_inputs">
                <Input label_v={"البريد الإلكتروني"} onChange={(e)=>handleEmail(e)}></Input>
                <Input label_v={"كلمة المرور"} onChange={(e)=>handlePassword(e)}></Input>
                <div className="newUser_buts">
                    <Button string={"تسجيل الدخول"} onClick={()=>loginUser()}></Button>
                    <Button string={" الغاء"} onClick={()=>cancelLoginUser()}></Button>
                </div>
            </div>

        </div>
    )
}