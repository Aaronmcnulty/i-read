import BookListDisplay from "../../bookDisplay/BookDisplay";

function SearchResultsDisplay({ BookSearchResults }) {
  return <BookListDisplay BookApiData={BookSearchResults} />;
}

export default SearchResultsDisplay;
