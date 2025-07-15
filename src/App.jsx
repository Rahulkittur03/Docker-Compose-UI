import { BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loginpage from './Loginpage.jsx'
import SignUp from './SignUp.jsx'
import Home from './Home.jsx'

import './App.css'



function App() {
    
  return (
    <>
    <head>
      {document.title="Docker-UI"}
      <link rel="icon" type="image/png" href="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" />
    </head>
    
  <Router>
    
    <div style={{ width: '100%' }}>
      <h2 className="Docker-Title">Docker Compose</h2>
    </div>
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
    <ToastContainer />
  </Router>
  </>
  )
}

export default App
