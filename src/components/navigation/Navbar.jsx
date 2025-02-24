import { Link } from "react-router-dom";
import SearchFormNavbar from "../search/quickSearch/SearchFormNavbar";

function Navbar(){

    return(
        <div>
            <nav>
                <Link to="homepage"> Home </Link>
                <Link to="library"> Library </Link>
                <Link to="my-library">My Library</Link>
                <Link to="search-page">Full Search</Link>
            </nav>
            <div>
                <SearchFormNavbar /> 
            </div>
        </div>
    )
}

export default Navbar