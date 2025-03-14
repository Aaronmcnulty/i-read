import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navigation/Navbar";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, createContext, useState} from "react";
export const LibraryContext = createContext();
function App() {
  // useEffect(() => {
  //   fetch('https://happy-upliftment-production.up.railway.app/users/users', {mode: "cors"})
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }, [])
  //cover URL example = https://covers.openlibrary.org/b/id/14627570-L.jpg

  const ownedBooksArray = [];
  const readBooksArray = [];
  const wishListBooksArray = [];
  const [userLists, setUserLists] = useState([])
  const [success, setSuccess] = useState(false);

  
  useEffect(() => {
    if(success){
      const b = localStorage.getItem("storedToken").replaceAll('"', "");
      axios.defaults.headers.common["Authorization"] = `bearer ${b}`;
      
      axios.post(
        "https://happy-upliftment-production.up.railway.app/book-list/get-user-lists",
        { body: "none" },
        { method: "cors" },
        { withCredentials: true },
      )
      .then((res) => setUserLists(res.data));
    }
    
  }, [success]);

  return (
    <>
      <LibraryContext.Provider
        value={{setSuccess, success, ownedBooksArray, readBooksArray, wishListBooksArray, userLists, setUserLists }}
      >
        <Header />
        <Navbar />
        <Outlet />
      </LibraryContext.Provider>
    </>
  );
}

export default App;
