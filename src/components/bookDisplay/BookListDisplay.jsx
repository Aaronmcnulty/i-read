import HomeBooksTemplate from "./BookTemplate";
import { v4 as uuidv4 } from "uuid";

function BookListDisplay({ BookApiData }) {
  return (
    <div>
      {BookApiData &&
        BookApiData.map((book) => {
          return <HomeBooksTemplate bookData={book} key={uuidv4()} />;
        })}
    </div>
  );
}

export default BookListDisplay;
