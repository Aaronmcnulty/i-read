import { useState } from "react"

function SearchFormNavbar(){

    const [searchTermValue, setSearchTermValue] = useState(null)

    const searchClick = (event) => {
        event.preventDefault()
        console.log(searchTermValue)
    }

    const typey = (event) => {
        setSearchTermValue(event.target.value)
    }

    return(
        <form onSubmit={searchClick}>
                <label htmlFor="searchTerm">Quick Search</label>
                <input onChange={typey} type="text" name="searchTerm" id="searchTerm" required></input>
                <button  id="search-submit" >Search</button>
        </form>
    )
}

export default SearchFormNavbar;