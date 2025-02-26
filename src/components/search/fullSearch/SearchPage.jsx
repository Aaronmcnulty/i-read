import { useEffect, useState } from "react";
import SearchResultsDisplay from "../searchResults/SearchResultsDisplay";

function SearchPage(){


    const [apiSearchResults, setApiSearchResults] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    const updateSearchTerm = (event) => {
        setSearchTerm(event.target.value)
    }

    const submitSearch = (event) => {
        event.preventDefault()
        fetchSearchTerm(searchTerm)
    }

    const fetchSearchTerm = (searchTerm) => {
        fetch(`https://openlibrary.org/search.json?q=${searchTerm}&limit=10`, { mode: "cors" })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error")
          }
          return response.json()
        })
        .then((response) => setApiSearchResults(response.docs))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
   
      
      if (loading) return <p>Loading...</p>;
      if (error) return <p>A network error was encountered</p>;
      console.log(apiSearchResults)
    }

 

    return(
        <>
            <form onSubmit={submitSearch}>
                <fieldset>
                    <label htmlFor="book-title">Book Title: </label>
                    <input onChange={updateSearchTerm} type="text" name="book-title" id="book-title" required></input>
                </fieldset>
                <button type="submit" >Search</button>
            </form>

            <div>
                <SearchResultsDisplay BookSearchResults={apiSearchResults} />
            </div>
        </>
    )
}

export default SearchPage;