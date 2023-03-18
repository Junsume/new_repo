import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom'; 
import Home from './pages/Home';


function App() {
  

  return (
    <Router>
      <Routes>  
        <Route exact path='/' element={< Home />}></Route>  
        {/* <Route exact path='/about' element={< About />}></Route>  
        <Route exact path='/contact' element={< Contact />}></Route>   */}
      </Routes>
    </Router>
  )
}

export default App
