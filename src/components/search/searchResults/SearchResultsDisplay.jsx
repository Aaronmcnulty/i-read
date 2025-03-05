import BookListDisplay from "../../bookDisplay/BookListDisplay";

function SearchResultsDisplay({ BookSearchResults }) {
  return <BookListDisplay BookApiData={BookSearchResults} />;
}

export default SearchResultsDisplay;
