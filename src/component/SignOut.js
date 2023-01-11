import React from "react";
import { useDispatch } from "react-redux";
import { signout } from "./redux/userSlice";

const signOut = () => {
    const handlesignout = (e) => {
        e.preventDefault();

        const dispatch = useDispatch();
        dispatch(signout());
    };

    return (
        <div>
            <button className="logout__button" onClick={(e) => handlesignout(e)}> Logout </button>
        </div>
    )
}

export default signOut;