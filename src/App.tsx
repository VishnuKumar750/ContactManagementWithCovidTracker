import React, { useState, useEffect } from 'react'
import './App.css'
import Contact from './pages/Contact'
import Charts from './pages/Charts'
import SideBar from './components/SideBar'
import { Route, Routes, useLocation, } from 'react-router-dom'



const App: React.FC = () => {
  const [ url, setUrl ] = useState('')

  const location = useLocation();
  
  useEffect(() => {
    if(location.pathname === '/') {
      setUrl('Contact Page')
    } else if(location.pathname === '/charts') {
      setUrl('Charts And Maps')
    }
  }, [location.pathname])

  return (
    <div>
    <div className='py-4 w-full bg-[#8294C4] text-white font-bold text-center text-2xl'>
      {url}
    </div>
    <div className='grid grid-cols-8'>
    <SideBar />
    <Routes>
      <Route path="/" element={<Contact />} />
      <Route path="/charts" element={<Charts />} />
    </Routes>
    </div>
    </div>
  )
}

export default App
