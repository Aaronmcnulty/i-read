import { useState } from "react";
import axios from "axios";
function SignUpForm() {
  const [username, setSignupUsername] = useState("");
  const [password, setSignupPassword] = useState("");
  const submitLogIn = (event) => {
    console.log(username, password);
    event.preventDefault();
    axios
      .post(
        "https://happy-upliftment-production.up.railway.app/users/user-signup",
        { username, password },
        { method: "cors" },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const usernameInputChange = (event) => {
    setSignupUsername(event.target.value);
  };
  const passwordInputChange = (event) => {
    setSignupPassword(event.target.value);
  };

  return (
    <>
      <form onSubmit={submitLogIn} action="" method="POST">
        <fieldset>
          <label htmlFor="signup-username">Username: </label>
          <input
            onChange={usernameInputChange}
            type="text"
            name="signup-username"
            id="signup-username"
            required
          ></input>
          <label htmlFor="signup-password">Password: </label>
          <input
            onChange={passwordInputChange}
            type="signup-password"
            name="signup-password"
            id="signup-password"
            required
          ></input>
        </fieldset>
        <fieldset>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default SignUpForm;
