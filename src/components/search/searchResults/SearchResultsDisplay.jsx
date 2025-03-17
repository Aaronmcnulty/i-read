import BookTemplate from "../../bookDisplay/BookListDisplay";

function SearchResultsDisplay({ BookSearchResults }) {
  return <BookTemplate BookApiData={BookSearchResults} />;
}

export default SearchResultsDisplay;
