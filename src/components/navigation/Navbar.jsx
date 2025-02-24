import { Link } from "react-router-dom";

function Navbar(){

    return(
        <div>
            <nav>
                <Link to="homepage"> Home </Link>
                <Link to="library"> Library </Link>
                <Link to="my-library">My Library</Link>
            </nav>
        </div>
    )
}

export default Navbar