import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navigation/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <p>Hola</p>
    </>
  )
}

export default App
