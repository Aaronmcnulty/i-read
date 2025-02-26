import { useState, useContext } from "react";
import { LibraryContext } from "../../App";
import BooksDisplay from "../bookDisplay/BookDisplay";

function MyLibrary(){
    
    const context = useContext(LibraryContext)

    
    console.log(context.ownedBooksArray)
    console.log(context.readBooksArray)
    console.log(context.wishListBooksArray)
    return(
        <>
            <h2>My Library</h2>
            <div>
             <BooksDisplay BookApiData={context.ownedBooksArray} />
            </div>          
        </>
    )
}

export default MyLibrary;