import { useState } from "react";

function SearchPage(){

    const [bookTitleValue, setBookTitleValue] = useState("")
    
    const updateBookTitleValue = () => {
        setBookTitleValue(event.target.value)
    }

    const submitSearch = (event) => {
        event.preventDefault()
        console.log(bookTitleValue)
    }

    return(
        <>
            <form onSubmit={submitSearch}>
                <fieldset>
                    <label htmlFor="book-title">Book Title: </label>
                    <input onChange={updateBookTitleValue} type="text" name="book-title" id="book-title" required></input>
                </fieldset>
                <button type="submit" >Search</button>
            </form>
        </>
    )
}

export default SearchPage;