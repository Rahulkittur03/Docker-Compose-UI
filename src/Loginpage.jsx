import React,{useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

import { Input } from 'postcss';
function Loginpage(){
    const [Email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    
    useEffect(()=>{
        document.title = "Login - MyApp";
        const token=Cookies.get('token');
        console.log('token',token);
        if(token){
            navigate('/home');
        }
    },[])
    
    
    async function HandleLogin(){
        if(Email==="" || password===""){
            toast.error("Email and Password cannot be empty!");
            return;
        }
        try{
            const response= await axios.post("http://103.152.114.177:8080/api/auth/login",{
                    "email":Email,
                    "password":password
                
            },{
                withCredentials: true
            });

            // const token = response.data.token;
            // Cookies.set('token', token, { expires: 7 });
            toast.success("Login SuccessFully ✅");
           
            setEmail("");
            setPassword("");
            setTimeout(()=>navigate('/Home',{ replace: true }),3000)
        }
        catch(err){
            console.error("❌ Login failed:"+ err);
            const errorMessage = err?.response?.data?.message || "Failed to Login";
            toast.error(errorMessage);
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
            <label className="Account-swap-login">
                        Don't have an account? <Link to="/signup">Register</Link>
            </label>
        </>
    )

}
export default Loginpage;
