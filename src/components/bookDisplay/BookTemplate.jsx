import { LibraryContext } from "../../App";
import { use, useContext, useState } from "react";
import styles from "../../css-modules/bookTemplate.module.css";
import AddedToListPopup from "../reusableElements/AddedToListPopup";
import { capitalise, shorten } from "../../modules/bookTextCorrection";

function BookTemplate({ bookData }) {
  const context = useContext(LibraryContext);
  const [isVisible, setIsVisible] = useState(false);
  const [confirmationText, setConfirmationText] = useState("");
  const [displayAddButtons, setDisplayAddButtons] = useState(false)

  //API is patchy on what fields exist or not. Catches error if cover_i field is missing in bookData
  let coverImageUrl = null;
  if (bookData.cover_i) {
    coverImageUrl = `https://covers.openlibrary.org/b/id/${bookData.cover_i}-M.jpg`;
  }

  // Toggles display state to true for 3 seconds when called, returns to false on timeout.
  const toggleDisplay = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const toggleVisibility = () => {
    if(displayAddButtons === false){
      setDisplayAddButtons(true)
    } else {
      setDisplayAddButtons(false)
    }
    
    };
  

  //When add to list button is clicked, function adds bookData to corresponding array.
  //Will be altered to add to database in future, should be condensed into one function for all three.
  const addToOwned = () => {
    if (!context.ownedBooksArray.includes(bookData)) {
      context.ownedBooksArray.push(bookData);
      setConfirmationText(`${bookData.title} added to Owned Books list`);
      toggleDisplay();
    }
  };
  const addToRead = () => {
    if (!context.readBooksArray.includes(bookData)) {
      context.readBooksArray.push(bookData);
      setConfirmationText(`${bookData.title} added to Read Books list`);
      toggleDisplay();
    }
  };
  const addToWishlist = () => {
    if (!context.wishListBooksArray.includes(bookData)) {
      context.wishListBooksArray.push(bookData);
      setConfirmationText(`${bookData.title} added to Wishlist`);
      toggleDisplay();
    }
  };

  const Booktitle = bookData.title;
  const shortTitle = shorten(Booktitle, 40);

  return (
    <div className={styles.bookContainer}>
      <div className={styles.bookDetailsContainer}>
        <img className={styles.bookCoverImage} src={coverImageUrl}></img>
        <div className={styles.bookTextContainer}>
          <h4 className={styles.bookTitleText}>{capitalise(shortTitle)}</h4>
          <h5 className={styles.bookAuthorText}>{bookData.author_name}</h5>
          <p className={styles.bookYearText}>{bookData.first_publish_year}</p>
        </div>
        <button className={styles.toggleButton} onClick={toggleVisibility}>+</button>

      </div>
      {isVisible && <AddedToListPopup popupText={confirmationText} />}
      {displayAddButtons && 
        <div className={styles.bookButtonsContainer}>
        <h4>Add book a list?</h4>
        <button onClick={addToOwned}>I own this</button>
        <button onClick={addToWishlist}>I want this</button>
        <button onClick={addToRead}>I read this</button>
      </div>}
    </div>
  );
}

export default BookTemplate;
