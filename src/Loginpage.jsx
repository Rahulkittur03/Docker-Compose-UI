import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import { Input } from 'postcss';
function Loginpage(){
    const [Email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(""); 
    
    
    async function HandleLogin(){
        if(Email==="" || password===""){
            toast.error("Email and Password cannot be empty!");
            return;
        }
        try{
            const response= await axios.post("http://localhost:5000/api/auth/login",{
                    "email":Email,
                    "password":password
                
            });

            const token = response.data.token;
            console.log("✅ Token from backend:", token);
            toast.success("Login SuccessFully ✅");

        }
        catch(err){
            console.error("❌ Login failed:", err);
            toast.error("Failed",err);
        }
    }
    return(
        <>
            <div className="Login-Container">
               
                <h3>Login</h3>
                <input required value ={Email} type="text" placeholder='Enter Email ID' className="login-textfield" onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input required value ={password} type="password" placeholder='Enter Passoword' className="login-textfield" onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <button className="Login-button" onClick={HandleLogin}>Login</button>
                <ToastContainer />
            </div>
        </>
    )

}
export default Loginpage;