
function SignUpForm(){

    return(
        <>
            <form method="POST">
                <fieldset>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" required></input>
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" id="password" required></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" required></input>
                    </fieldset>
                <fieldset>
                    <button type="button">Submit</button>
                </fieldset>
            </form>
        </>
    )

}

export default SignUpForm;