import { useState, useContext, useEffect } from "react";
import { LibraryContext } from "../../App";
import BookListDisplay from "../bookDisplay/BookListDisplay";
import axios from "axios";
import BookTemplate from "../bookDisplay/BookTemplate";

function MyLibrary() {
  const context = useContext(LibraryContext);

  const [option, setOption] = useState(context.userLists[0].id);
  const [userList, setUserList] = useState(null);
 

  // BooksDisplay is passed a different array depending on which option is selected.
  const changeOption = (event) => {
    setOption(event.target.value);
  };
  
/* Posts required book_list id to server for retrieval. If successful, the returned book_list
data is stored in userList state */ 
  const handleGetList = () => {
    axios
      .post(
        "https://happy-upliftment-production.up.railway.app/book-list/get-list",
        { id: parseInt(option) },
        { method: "cors" },
        { withCredentials: true },
      )
      .then((res) => setUserList(res.data));
  };

/* When the option value in state is updated (user chooses a new option in drop down menu)
  handleGetList is called to retrieve chosen list data from server */
  useEffect(() => {
    handleGetList()
  }, [option]);

  return (
    <>
      <h2>My Library</h2>
      <div>
        <select onChange={changeOption}>
          {context.userLists &&
            context.userLists.map((entry) => {
              let correctedName = entry.name.replace("_", " ");
              return <option value={entry.id}>{correctedName}</option>;
            })}
        </select>
      </div>
      <button onClick={handleGetList}>click</button>
      <div>
        <ul>
          {userList &&
            userList.books.map((item) => {
              return <BookTemplate key={item.title} bookData={item}/>
            })}
        </ul>
        <BookListDisplay  />
      </div>
    </>
  );
}

export default MyLibrary;
