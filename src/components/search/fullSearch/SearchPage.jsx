
function SearchPage(){

    

    return(
        <>
            <form>
                <fieldset>
                    <label htmlFor="book-title">Book Title: </label>
                    <input type="text" name="book-title" id="book-title" required></input>
                </fieldset>
                <button type="submit" >Search</button>
            </form>
        </>
    )
}

export default SearchPage;