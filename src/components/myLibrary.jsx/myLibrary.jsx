import { useState, useContext } from "react";
import { LibraryContext } from "../../App";
import BooksDisplay from "../bookDisplay/BookDisplay";

function MyLibrary(){
    
    const context = useContext(LibraryContext)
    
    const lists = [
        context.ownedBooksArray,
        context.readBooksArray,
        context.wishListBooksArray
    ]
    
    const [option, setOption] = useState(0)

    const  changeOption = (event) => {
        setOption(event.target.value)
    }

    return(
        <>
            <h2>My Library</h2>
            <div>
                <select onChange={changeOption}>
                    <option value="0">Owned Books</option>
                    <option value="1">Read Books</option>
                    <option  value="2">Wishlist</option>
                </select>
            </div>
            <div>
             <BooksDisplay BookApiData={lists[option]} />
            </div>          
        </>
    )
}

export default MyLibrary;