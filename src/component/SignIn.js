import { useEffect, useState, useRef, useContext } from "react";
// import { useDispatch } from "react-redux";
// import { signin } from './redux/userSlice';
import axios from "../app/api/axios";
import AuthContext from "./context/AuthProvider"

const SIGNIN_URL = '/auth';

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

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(SIGNIN_URL, JSON.stringify({ user, pwd }),
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
                <form onSubmit={handleLoginSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        Required= "Required"
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        Required= "Required"
                    />
                    <button> Sign In </button>
                </form>
                <p>
                    Need an Account?<br />
                    <span className="line">

                        <a href="/SignUp">Sign Up</a>
                    </span>
                </p>
            </section>
        )}
    </>
)


}

{/* <div className="signin">
                <form className="signin__form" onSubmit={(e) => handleSubmit(e)}>
                    <h1>Sign In Here</h1>
                    <input
                        type="user"
                        placeholder="ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <input
                        type="pwd"
                        placeholder="Password"
                        value={pwd}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" variant="outlined"> Sign In </Button>
                </form>
            </div>
        </>
    )
} */}


export default SignIn;