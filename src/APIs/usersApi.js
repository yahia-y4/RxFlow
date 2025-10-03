import axios from "axios";
import getServerUrl from "./url.js";
import { setToken,getToken } from "./storageToken.js";
const Route = "/user";
export async function addNewUser(userData) {
 
   try {
       if(!userData.UserName || !userData.Email || !userData.Password){
        throw new Error("يرجى ملء جميع الحقول");
    }
    const baseUrl = await getServerUrl();
    const response = await axios.post(`${baseUrl}${Route}/register`,userData);
    console.log(response.data);
    return {success:true,data:response.data};
 
   } catch (error) {
    return {success:false,error:error.message};
   }
}