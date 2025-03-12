import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navigation/Navbar'
import { Outlet } from 'react-router-dom'
import { createContext, useEffect } from 'react'
export const LibraryContext = createContext()
function App() {
  
    // useEffect(() => {
    //   fetch('https://happy-upliftment-production.up.railway.app/users/users', {mode: "cors"})
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    // }, [])
    //cover URL example = https://covers.openlibrary.org/b/id/14627570-L.jpg

    const ownedBooksArray = []
    const readBooksArray = []
    const wishListBooksArray = []

  return (
    <>
    <LibraryContext.Provider value={{ ownedBooksArray, readBooksArray, wishListBooksArray }}>
          <Header />
          <Navbar />
        <Outlet />
      </LibraryContext.Provider>
    </>
  )
}

export default App
