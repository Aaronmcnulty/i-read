import { useEffect, useState } from "react";
import SearchResultsDisplay from "../searchResults/SearchResultsDisplay";

function SearchPage(){


    const [apiSearchResults, setApiSearchResults] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [resultsPage, setResultsPage] = useState(1)


    const updateSearchTerm = (event) => {
        setSearchTerm(event.target.value)
    }

    const submitSearch = (event) => {
        event.preventDefault()
        setResultsPage(1)
        fetchApi()
    }

    const nextPage = () => {
        console.log(resultsPage)
        setResultsPage(resultsPage + 1)
    }

    const previousPage = () => {
        setResultsPage(resultsPage - 1)
    }

    useEffect(()=>{
        fetchApi()
    }, [searchTerm, resultsPage])
    const fetchApi = () => {
        fetch(`https://openlibrary.org/search.json?title=${searchTerm}&page=${resultsPage}&limit=10`, { mode: "cors" })
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
               {apiSearchResults && <SearchResultsDisplay BookSearchResults={apiSearchResults} />}
            </div>
            <p>{resultsPage}</p>
            {resultsPage > 1 ? <button onClick={previousPage}>Previous</button> : null}
            {apiSearchResults.length >= 10 ? <button onClick={nextPage}>Next Page</button> : null}
        </>
    )
}

export default SearchPage;