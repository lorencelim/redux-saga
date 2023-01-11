import React, { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "./redux/userSlice";


const SignIn = () => {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
                id: id,
                password: password,
                loggedIn: true
            })
        )
    }

    return (
        <div className="login">
            <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here</h1>
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
                <Button type="submit" variant="outlined"> Login </Button>
            </form>
        </div>
    )
}



export default SignIn;