import { useState } from 'react'
import Loginpage from './Loginpage.jsx'
import SignUp from './SignUp.jsx'

import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const [loginPage,setloginPage] =useState(true);


  function HandleSignUp(){
    if(loginPage){
      setloginPage(false);
    }
    else{
      setloginPage(true);
    }
  }

  return (
    <>
    <div>
      <h2>Docker Compose</h2>
    </div>
    <div>
      {loginPage?<Loginpage />:<SignUp/>}
    {loginPage ? <label> Don't have a account?<a onClick={HandleSignUp}>Register</a></label>:<label>Already have a account? <a onClick={HandleSignUp}>Login</a></label>}
    </div>
    </>
  )
}

export default App
