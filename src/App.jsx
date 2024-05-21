import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Survey from './Components/Survey'
import Iteration1 from './Components/Iteration1'
import Iteration2 from './Components/Iteration2'
import Final from './Components/Final'
import Navbar from './Components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div></div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/survey' element={<Survey/>}/> 
          <Route path='/test1' element={<Iteration1/>}/>
          <Route path='/test2' element={<Iteration2/>}/>
          <Route path='/final' element={<Final/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
