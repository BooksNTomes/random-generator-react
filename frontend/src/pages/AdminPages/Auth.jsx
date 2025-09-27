import { useState } from "react";

export default function Auth() {

    const handler = (event) => {
        event.preventDefault()
        console.log(event);
        console.log('Signing in');
    }

    return(
        <>
            <form className="flex flex-col m-auto">
                <label htmlFor="username">Username</label>
                <input name="username" type="text" placeholder=""
                className="border-1 border-black/15 mb-5"
                ></input>
                <label htmlFor="password">Password</label>
                <input name="password" type="text" placeholder=""
                className="border-1 border-black/15 mb-5"
                ></input>
                <button type="submit" onClick={(event) => handler(event)}
                className="border-1 border-black/15 rounded hover:border-black/60">Sign In</button>
            </form>
        </>
    )
}