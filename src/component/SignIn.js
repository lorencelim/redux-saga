import React, { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { signin } from './redux/userSlice';


const SignIn = () => {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            signin({
                id: id,
                password: password,
                loggedIn: true
            })
        )
    }

    return (
        <div className="signin">
            <form className="signin__form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Sign In Here</h1>
                <input
                    type="id"
                    placeholder="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="outlined"> Sign In </Button>
            </form>
        </div>
    )
}



export default SignIn;