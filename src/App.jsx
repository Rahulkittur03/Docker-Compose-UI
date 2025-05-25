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
    <div style={{ width: '100%' }}>
      <h2 className="Docker-Title">Docker Compose</h2>
    </div>
    <div >
      {loginPage?<Loginpage />:<SignUp/>}
      <br/>
      {loginPage ? (
      <label className="Account-swap-login">
        Don't have an account? <a onClick={HandleSignUp}>Register</a>
      </label>
      ) : (
        <label className="Account-swap-login">
          Already have an account? <a onClick={HandleSignUp}>Login</a>
        </label>
      )}

    </div>
    </>
  )
}

export default App
