import { useEffect, useState, useRef, useContext } from "react";
// import { useDispatch } from "react-redux";
// import { signin } from './redux/userSlice';
import { Link } from "react-router-dom";
import axios from "../app/api/axios";
import AuthContext from "./context/AuthProvider";

const SIGNIN_URL = '/users';

const SignIn = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    // const dispatch = useDispatch();

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     dispatch(
    //         signin({
    //             user: user,
    //             pwd: pwd,
    //             loggedIn: true
    //         })
    //     )
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(SIGNIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));

            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password')
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
        }
    }





    return (
        <>
            {success ? (
                <section>
                    <h1>you are logged in!</h1>
                    <br />
                    <p>
                        <a href="/">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ?
                        "errmsg" : "offscreen"}
                        aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="user"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            Required="Required"
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="pwd"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            Required="Required"
                        />
                        <button> Sign In </button>
                    </form>
                    <nav>
                        <Link to="/SignUp"> SignUp </Link>
                        <Link to="/SignIn/Main"> Main </Link>
                        <Link to="/SignIn/Main/TruckManagement"> TruckManagement </Link>
                        <Link to="/SignIn/Main/UserManagement"> UserManagement </Link>
                    </nav>
                </section>
            )}
        </>
    )


}


export default SignIn;