import React from "react";
import "./Home.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function Login({handleActiveHomeRightPart}) {
    function loginUser(){
        handleActiveHomeRightPart("loged");
    }
    function cancelLoginUser(){
        handleActiveHomeRightPart("logout");
    }
    return (
        <div className="inside_right_part_com">
            <div className="newUser_inputs">
                <Input label_v={"البريد الإلكتروني"}></Input>
                <Input label_v={"كلمة المرور"}></Input>
                <div className="newUser_buts">
                    <Button string={"تسجيل الدخول"} onClick={()=>loginUser()}></Button>
                    <Button string={" الغاء"} onClick={()=>cancelLoginUser()}></Button>
                </div>
            </div>

        </div>
    )
}