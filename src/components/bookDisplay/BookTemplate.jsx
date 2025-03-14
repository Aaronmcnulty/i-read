import { LibraryContext } from "../../App";
import { useContext, useState, useEffect } from "react";
import styles from "../../css-modules/bookTemplate.module.css";
import AddedToListPopup from "../reusableElements/AddedToListPopup";
import { capitalise, shorten } from "../../modules/bookTextCorrection";
import axios from "axios";

function BookTemplate({ bookData }) {
  
  const context = useContext(LibraryContext);
  const [isVisible, setIsVisible] = useState(false);
  const [confirmationText, setConfirmationText] = useState("");
  const [displayAddButtons, setDisplayAddButtons] = useState(false);
  const [listOption, setListOption] = useState('read_books')

  //API is patchy on what fields exist or not. Catches error if cover_i field is missing in bookData
  let coverImageUrl = null;
  if (bookData.cover_i) {
    coverImageUrl = `https://covers.openlibrary.org/b/id/${bookData.cover_i}-L.jpg`;
  }

  // Toggles display state to true for 3 seconds when called, returns to false on timeout.
  const toggleDisplay = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const toggleVisibility = () => {
    if (displayAddButtons === false) {
      setDisplayAddButtons(true);
    } else {
      setDisplayAddButtons(false);
    }
  };

 const handleOptionChange = (e) => {
    setListOption(e.target.value)
 }

 const handleListSubmit = (e) => {
  console.log(listOption)
  toggleVisibility()
 }

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
        <button className={styles.toggleButton} onClick={toggleVisibility}>
          +
        </button>
      </div>
      {isVisible && <AddedToListPopup popupText={confirmationText} />}
      {displayAddButtons && (
        <div className={styles.bookButtonsContainer}>
          <h4>Add book a list?</h4>
          
          <form >
            <select onChange={handleOptionChange}>
              {context.userLists && context.userLists.map(entry => {
                return <option value={entry.name}>{entry.name}</option>
              })}
            </select>
            <button onClick={handleListSubmit} type="button">Add</button>
          </form>
          

        </div>
      )}
    </div>
  );
}

export default BookTemplate;
