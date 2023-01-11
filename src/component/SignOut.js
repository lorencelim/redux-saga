import React from "react";
import { useDispatch } from "react-redux";
import { signout } from "./redux/userSlice";

const SignOut = () => {
    const dispatch = useDispatch();
    const handlesignout = (e) => {
        e.preventDefault();

        dispatch(signout());
    };

    return (
        <div>
            <button className="logout__button" onClick={(e) => handlesignout(e)}> Logout </button>
        </div>
    )
}

export default SignOut;