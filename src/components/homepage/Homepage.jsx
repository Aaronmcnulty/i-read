import HomeBooksDisplay from "../bookDisplay/BookListDisplay";
import { useEffect, useState } from "react";
import styles from "../../css-modules/homepage.module.css";
import LogInForm from "../logInPage/LogInForm";
function Homepage() {
  const [randomBooks, setRandomBooks] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://openlibrary.org/search.json?q=publish_year:[1995 TO 2005]&sort=random&limit=10",
      { mode: "cors" },
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setRandomBooks(response.docs))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
    <div className={styles.bookDisplayHome}>
    {randomBooks && <HomeBooksDisplay BookApiData={randomBooks} />}
  </div>

  return (
    <>
      <LogInForm />
    </>
  );
}

export default Homepage;
