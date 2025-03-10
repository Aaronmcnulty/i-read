import axios from "axios";
import { useState } from "react";



function LogInForm(){


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
              console.log(res.data);
            })
            .catch((error) => {
              console.error(error);
            });
    }
    
    const logOut = () => {
      axios.get('https://happy-upliftment-production.up.railway.app/log-out',
      {method: "cors"},
      { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }

    return(
        
        <>
        <button onClick={logOut}>log Out </button>
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
        </>
    )
}

export default LogInForm;