
function BookTemplate( {bookData} ){
    let coverImageUrl =null
    if(bookData.cover_i){
       coverImageUrl = `https://covers.openlibrary.org/b/id/${bookData.cover_i}-M.jpg`
    }
   
   // https://covers.openlibrary.org/b/id/14627570-L.jpg
    
    return(
        <div>
            <div>
                <p>{bookData.title}</p>
                <p>{bookData.author_name}</p>
                <img src={coverImageUrl}></img>
            </div>
            
            <div>
                <button>+</button>
                <button>-</button>
            </div>
        </div>
    )

}

export default BookTemplate