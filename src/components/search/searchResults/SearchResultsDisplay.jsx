import BooksDisplay from "../../bookDisplay/BookDisplay"

function SearchResultsDisplay( { BookSearchResults } ){

 

    return(
        <BooksDisplay BookApiData={BookSearchResults}/>
    )
}

export default SearchResultsDisplay