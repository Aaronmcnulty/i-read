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
  const [listOption, setListOption] = useState('Read Books')

  //API is patchy on what fields exist or not. Catches error if cover_i field is missing in bookData
  let coverUrl = null
   if (bookData.cover_i) {
   coverUrl = `https://covers.openlibrary.org/b/id/${bookData.cover_i}-L.jpg`;
  }  else if(bookData.cover_url) {
   coverUrl = bookData.cover_url
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
  console.log(e.target.value)
    setListOption(e.target.value)
 }

 const handleListSubmit = (e) => {
  console.log(bookData.author_name)
  toggleDisplay()
  toggleVisibility()
  const b = localStorage.getItem("storedToken").replaceAll('"', "");
  axios.defaults.headers.common["Authorization"] = `bearer ${b}`;
  axios.post(
    "https://happy-upliftment-production.up.railway.app/books/add-to-list",
    { listId: parseInt(listOption),
      title: Booktitle,
      author: bookData.author_name[0],
      year: bookData.first_publish_year,
      description: '',
      pages: 0,
      coverUrl: coverUrl,
     },
    { method: "cors" },
    { withCredentials: true },
  )
  .then((res) => console.log(res));
 }

  const Booktitle = bookData.title;
  const shortTitle = shorten(Booktitle, 40);

  return (
    <div className={styles.bookContainer}>
      <div className={styles.bookDetailsContainer}>
        <img className={styles.bookCoverImage} src={coverUrl}></img>
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
          <h4>Add book to a list?</h4>
          
          <form >
            <select onChange={handleOptionChange}>
              {context.userLists && context.userLists.map(entry => {
                return <option value={entry.id}>{entry.id}</option>
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
