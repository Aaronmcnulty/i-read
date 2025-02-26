import HomeBooksTemplate from "./HomeBooksTemplate"
function HomeBooksDisplay( { BookApiData } ){

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

export default HomeBooksDisplay