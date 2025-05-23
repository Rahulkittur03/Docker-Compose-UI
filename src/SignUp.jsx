import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from 'postcss';
function SignUp(){
    const [Email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    function HandleSignUp(){
        if(Email===""||password===""||confirmPassword===""){
            toast.error("Fields are Empty")
        }
    }
    return(
        <>
            <div className="Login-Container">
                <h3 >SignUp</h3>
                <input type="text" placeholder='Enter Email ID' className="login-textfield"/><br/>
                <input type="password" placeholder='Enter Passoword' className="login-textfield"/>
                <br/>
                <input type="password" placeholder='confirm Passoword' className="login-textfield"/><br/>
                <button className="Login-button" onClick={HandleSignUp}>Sign up</button>
                <ToastContainer />
            </div>
        </>
    )

}
export default SignUp;