import { Link } from "react-router-dom";
import SearchFormNavbar from "../search/SearchFormNavbar";

function Navbar(){

    return(
        <div>
            <nav>
                <Link to="homepage"> Home </Link>
                <Link to="library"> Library </Link>
                <Link to="my-library">My Library</Link>
            </nav>
            <div>
                <SearchFormNavbar /> 
            </div>
        </div>
    )
}

export default Navbar