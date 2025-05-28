import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import { Input } from 'postcss';
function SignUp(){
    const [Email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    async function HandleSignUp(){
        if(Email===""||password===""||confirmPassword===""){
            toast.error("Fields are Empty")
            return;
        }
        if(password!==confirmPassword){
            toast.error("Comfirm password Dosn't Match with Confirm Password");
            return;
        }
            try{
                const response= await axios.post("http://localhost:8888/api/auth/signup",{
                        "email":Email,
                        "password":password
                    
                });
                const message = response.data.message;               
                toast.success(message);

                
                setEmail("");
                setPassword("");
                setConfirmPassword("");
            }
            catch(err){
                const errorMessage = err?.response?.data?.message || "Failed to Login";
                toast.error(errorMessage);
            }

    }
    return(
        <>
            <div className="Login-Container">
                <h3 >SignUp</h3>
                <input value={Email} type="text" placeholder='Enter Email ID' className="login-textfield" onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input value={password} type="password" placeholder='Enter Passoword' className="login-textfield" onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <input value={confirmPassword} type="password" placeholder='confirm Passoword' className="login-textfield" onChange={(e)=>setConfirmPassword(e.target.value)}/><br/>
                <button className="Login-button" onClick={HandleSignUp}>Sign up</button>
                <ToastContainer />
            </div>
        </>
    )

}
export default SignUp;