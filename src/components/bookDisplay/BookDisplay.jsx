import HomeBooksTemplate from "./BookTemplate"
function BooksDisplay( { BookApiData } ){

    console.log(BookApiData)
    return(
        <div>
            <p>hi</p>
            { BookApiData && BookApiData.map((book) => {
             return  <HomeBooksTemplate bookData={book} />
            })}

        </div>
    )




}

export default BooksDisplay