import { BrowserRouter as Router, Routes, Route,  Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Loginpage from './Loginpage.jsx'
import SignUp from './SignUp.jsx'
import Home from './Home.jsx'

import './App.css'



function App() {
  const [count, setCount] = useState(0)
  return (<Router>
    <div style={{ width: '100%' }}>
      <h2 className="Docker-Title">Docker Compose</h2>
    </div>
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  </Router>
  )
}

export default App
