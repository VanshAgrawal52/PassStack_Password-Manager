import { useState } from 'react' 
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() { 

  return (
    <>
        <Navbar /> 
        <div className="bg-[linear-gradient(to_right,#cbd5e180_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e180_1px,transparent_1px)] bg-[size:18px_28px] bg-blue-100 min-h-[80vh]">

       <Manager/> 
        </div>
       <Footer/>
    </>
  )
}

export default App
