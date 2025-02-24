import { useState } from "react";

function MyLibrary(){
    
    const [myReadBooks, setReadBooks] = useState([
        {name: "Batman"},
        {name: "Batman Two"}
    ])

    console.log(myReadBooks)
    return(
        <>
            <h2>My Library</h2>
            <div>
             <ul>
             {myReadBooks.map((book) => {
             return <li key={book.name}>{book.name}</li>
            })}
             </ul>
            </div>          
        </>
    )
}

export default MyLibrary;