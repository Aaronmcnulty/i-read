import { LibraryContext } from "../../App";
import { useContext, useState } from "react"
import styles from "../../css-modules/bookTemplate.module.css"
import AddedToListPopup from "../reusableElements/AddedToListPopup";

function BookTemplate( {bookData} ){
    const context = useContext(LibraryContext)
    const [isVisible, setIsVisible] = useState(false)
    const [confirmationText, setConfirmationText] = useState("")

    let coverImageUrl = null
    if(bookData.cover_i){
       coverImageUrl = `https://covers.openlibrary.org/b/id/${bookData.cover_i}-M.jpg`
    }
    
    const toggleDisplay = () => {
        setIsVisible(true)
        setTimeout(() => {
            setIsVisible(false)
        }, 3000);
    }
    
    const addToOwned = () => {
        if(!context.ownedBooksArray.includes(bookData)){
            context.ownedBooksArray.push(bookData)
            setConfirmationText(`${bookData.title} added to Owned Books list`)
            toggleDisplay()
        }
    }
    const addToRead = () => {
        if(!context.readBooksArray.includes(bookData)){
            context.readBooksArray.push(bookData)
            setConfirmationText(`${bookData.title} added to Read Books list`)
            toggleDisplay()
        }

    }
    const addToWishlist = () => {
        if(!context.wishListBooksArray.includes(bookData)){
            context.wishListBooksArray.push(bookData)
            setConfirmationText(`${bookData.title} added to Wishlist`)
            toggleDisplay()
        }
        
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
            {isVisible && <AddedToListPopup  popupText={confirmationText}/>}
            <div class={styles.bookButtonsContainer}>
                <button onClick={addToOwned}>I own this</button>
                <button onClick={addToWishlist}>I want this</button>
                <button onClick={addToRead}>I read this</button>
            </div>
        </div>
    )
}

export default BookTemplate