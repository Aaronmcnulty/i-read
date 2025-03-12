import axios from "axios";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/AuthProvider";



function LogInForm(){
    
    const { setAuth } = useContext(AuthContext);

    const [success, setSuccess] = useState(false);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const submitLogIn = (event) => {
        event.preventDefault()
      axios.post('https://happy-upliftment-production.up.railway.app/log-in',
            {username, password},
            {method: "cors"},
            { withCredentials: true })
            .then((res) => {
              const theToken = res.data.token
              const userDetails = res.data.userDetails
              setAuth({ username, password, theToken});
              console.log(username);
              localStorage.setItem("storedToken", JSON.stringify(theToken))
              localStorage.setItem("user", JSON.stringify(userDetails))
              setSuccess(true);
            })
            .catch((error) => {
              console.error(error);
            });  
    }

    console.log(localStorage.getItem("storedToken"))
    console.log(localStorage.getItem("user"))
    const logOut = () => {
      axios.get('https://happy-upliftment-production.up.railway.app/log-out',
      {method: "cors"},
      { withCredentials: true })
      .then((res) => {
        localStorage.removeItem("storedToken")
        localStorage.removeItem("user")
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }

    return(
        
        <>
        
        {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <button onClick={logOut}>log Out </button>
        </section>
      ) : (
        
            <form  onSubmit={submitLogIn}>
                <fieldset>
                    <label htmlFor="username">Username: </label>
                    <input onChange={handleUsernameChange} type="text" name="username" id="username" required></input>
                    <label htmlFor="password">Password: </label>
                    <input onChange={handlePasswordChange} type="text" name="password" id="password" required></input>
                </fieldset>
                <fieldset>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
            )}
        </>
    )
}

export default LogInForm;