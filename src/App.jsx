import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navigation/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
