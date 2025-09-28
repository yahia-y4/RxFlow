import React from "react";
import "./Home.css";
import Insideicon from "../../components/InsideIcon/Insideicon";
import Loged from "./Loged";
import NewUser from "./NewUser";
import Login from "./Login";
import Logout from "./Logout";

import { useState } from "react";
export default function HomeRightPart() {
const [activeHomeRightPart,setActiveHomeRightPart] = useState("loged");
const handleActiveHomeRightPart = (part) =>{
    setActiveHomeRightPart(part);
    
}
console.log(activeHomeRightPart);
    return (
        <div className="home_right_part">
            <div className="home_right_part_topButs">
               <Insideicon class_f="fas" font="&#xf234;" onClick={()=>handleActiveHomeRightPart("newUser")}></Insideicon>
               <Insideicon class_f="fas" font="&#xf2f6;" onClick={()=>handleActiveHomeRightPart("login")}></Insideicon>
               <Insideicon class_f="fas" font="	&#xf2f5;" onClick={()=>handleActiveHomeRightPart("logout")}></Insideicon>
            </div>
            {activeHomeRightPart === "loged" && <Loged></Loged>}
            {activeHomeRightPart === "newUser" && <NewUser handleActiveHomeRightPart = {handleActiveHomeRightPart}></NewUser>}
            {activeHomeRightPart === "login" && <Login handleActiveHomeRightPart = {handleActiveHomeRightPart}></Login>}
            {activeHomeRightPart === "logout" && <Logout></Logout>}

        </div>
    );
}