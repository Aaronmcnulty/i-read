import { Link } from "react-router-dom";
import styles from "../../css-modules/navbar.module.css";
function Navbar() {
  return (
    
      <nav className={styles.navLinksContainer}>
        <Link className={styles.navLink} to="homepage">
          {" "}
          Home{" "}
        </Link>
        <Link className={styles.navLink} to="library">
          {" "}
          Library{" "}
        </Link>
        <Link className={styles.navLink} to="my-library">
          My Library
        </Link>
        <Link className={styles.navLink} to="search-page">
          Full Search
        </Link>
      </nav>
   
  );
}

export default Navbar;
