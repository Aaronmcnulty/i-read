import { LibraryContext } from "../../App";
import { useContext } from "react"
import styles from "../../css-modules/bookTemplate.module.css"

function BookTemplate( {bookData} ){
    const context = useContext(LibraryContext)
    
    let coverImageUrl = null
    if(bookData.cover_i){
       coverImageUrl = `https://covers.openlibrary.org/b/id/${bookData.cover_i}-M.jpg`
    }
   
    
    const addToOwned = () => {
        if(!context.ownedBooksArray.includes(bookData)){
            context.ownedBooksArray.push(bookData)
        }
    }
    const addToRead = () => {
        if(!context.readBooksArray.includes(bookData)){
            context.readBooksArray.push(bookData)
        }
    }
    const addToWishlist = () => {
        if(!context.wishListBooksArray.includes(bookData))
        context.wishListBooksArray.push(bookData)
    }

    return(
        <div class={styles.bookContainer}>
            <div class={styles.bookDetailsContainer}>
                <img class={styles.bookCoverImage} src={coverImageUrl}></img>
                <div class={styles.bookTextContainer}>
                    <h4  class={styles.bookTitleText}>{bookData.title}</h4>
                    <h5  class={styles.bookAuthorText}>{bookData.author_name}</h5>
                    <p   class={styles.bookYearText}>{bookData.first_publish_year}</p>
                </div>
            </div>
            
            <div class={styles.bookButtonsContainer}>
                <button onClick={addToOwned}>I own this</button>
                <button onClick={addToWishlist}>I want this</button>
                <button onClick={addToRead}>I read this</button>
            </div>
        </div>
    )
}

export default BookTemplate