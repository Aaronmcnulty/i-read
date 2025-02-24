import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navigation/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error")
        }
        return response.json()
      })
      .then((response) => console.log(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
    },[])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;


  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
