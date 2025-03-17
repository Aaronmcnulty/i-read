import axios from "axios";
import { useState, useContext} from "react";
import { LibraryContext } from "../../App";

function LogInForm() {
  const context = useContext(LibraryContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  
  const submitLogIn = (event) => {
    event.preventDefault();
    //  Posts log in details from log in form to server for authentication.
    axios
      .post(
        "https://happy-upliftment-production.up.railway.app/log-in",
        { username, password },
        { method: "cors" },
        { withCredentials: true },
      )
      /* If successful, unique token and stored user details from database are returned.
      This is stored in local storage to be used for server calls to protected routes 
      elsewhere in the app.
      */
      .then((res) => {
        const theToken = res.data.token;
        const userDetails = res.data.userDetails;
        console.log(username);
        localStorage.setItem("storedToken", JSON.stringify(theToken));
        localStorage.setItem("user", JSON.stringify(userDetails));
        context.setSuccess(true);
      })
      // If unsuccessful, error is logged
      .catch((error) => {
        console.error(error);
      });
  };


  const logOut = () => {
    axios
      .get(
        "https://happy-upliftment-production.up.railway.app/log-out",
        { method: "cors" },
        { withCredentials: true },
      )
      // On successful log out user details and unique token are removed from local storage
      .then((res) => {
        localStorage.removeItem("storedToken");
        localStorage.removeItem("user");
        context.setSuccess(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {context.success ? (
        <section>
          <h1>You are logged in!</h1>
          <button onClick={logOut}>log Out </button>

          <br />
        </section>
      ) : (
        <section>
          <form onSubmit={submitLogIn}>
            <fieldset>
              <label htmlFor="username">Username: </label>
              <input
                onChange={handleUsernameChange}
                type="text"
                name="username"
                id="username"
                required
              ></input>
              <label htmlFor="password">Password: </label>
              <input
                onChange={handlePasswordChange}
                type="text"
                name="password"
                id="password"
                required
              ></input>
            </fieldset>
            <fieldset>
              <button type="submit">Submit</button>
            </fieldset>
          </form>
        </section>
      )}
    </>
  );
}

export default LogInForm;
