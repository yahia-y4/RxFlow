import React from "react";
import "./Home.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {useState} from "react";
import {addNewUser} from "../../APIs/usersApi.js";
export default function NewUser({handleActiveHomeRightPart}){
    const [userData,setUserData] = useState({
        UserName:"",
        Email:"",
        Password:"",
    });
    function handleName(e){
        setUserData({...userData,UserName:e.target.value});
    }
    function handleEmail(e){
        setUserData({...userData,Email:e.target.value});
    }
    function handlePassword(e){
        setUserData({...userData,Password:e.target.value});
    }
    async function addUser(){
        console.log(userData);
        const response = await addNewUser(userData);
        if(response.success){
            handleActiveHomeRightPart("loged");
        }else{
            console.log(response.error);
        }
    }
    async function cancelAddUser(){
        handleActiveHomeRightPart("logout");
    }
    return(
        <div className="inside_right_part_com">
            <div className="newUser_inputs"> 
            <Input label_v={"اسم المستخدم"} onChange={(e)=>handleName(e)}></Input>
            <Input label_v={"البريد الإلكتروني"} onChange={(e)=>handleEmail(e)}></Input>
            <Input label_v={"كلمة المرور"} onChange={(e)=>handlePassword(e)}></Input>   
                     <div className="newUser_buts">
                <Button string={"انشاء حساب"} onClick={()=>addUser()}></Button>       
                <Button string={" الغاء"} onClick={()=>cancelAddUser()}></Button>
            </div>
            </div>
   
          
        </div>
    )
}