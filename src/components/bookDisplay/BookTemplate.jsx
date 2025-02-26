import { LibraryContext } from "../../App";
import { useContext } from "react"

function BookTemplate( {bookData} ){
    const context = useContext(LibraryContext)
    
    let coverImageUrl = null
    if(bookData.cover_i){
       coverImageUrl = `https://covers.openlibrary.org/b/id/${bookData.cover_i}-M.jpg`
    }
   
    
    const addToOwned = () => {
        context.ownedBooksArray.push(bookData)
    }
    const addToRead = () => {
        context.readBooksArray.push(bookData)
    }
    const addToWishlist = () => {
        context.wishListBooksArray.push(bookData)
    }


    return(
        <div>
            <div>
                <img src={coverImageUrl}></img>
                <h3>{bookData.title}</h3>
                <h4>{bookData.author_name}</h4>
                <p>{bookData.first_publish_year}</p>
            </div>
            
            <div>
                <button onClick={addToOwned}>I own this</button>
                <button onClick={addToWishlist}>I want this</button>
                <button onClick={addToRead}>I read this</button>
            </div>
        </div>
    )
}

export default BookTemplate