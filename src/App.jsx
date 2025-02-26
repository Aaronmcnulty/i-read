import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navigation/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

    //cover URL example = https://covers.openlibrary.org/b/id/14627570-L.jpg

    

  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
