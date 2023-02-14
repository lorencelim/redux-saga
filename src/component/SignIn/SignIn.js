import { useEffect, useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../../app/api/axios';


const SignIn = () => {
    const SIGNIN_URL = '/users';
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, password]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(SIGNIN_URL + "/" + user,
                JSON.stringify({ user, password }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Accept": "application/json"
                    },
                    withCredentials: true,
                }
            );
            
            localStorage.setItem("user-Info", response.data.map(account => account.username));
            

            if (user === response.data[0].username &&
                password === response.data[0].password) {
                setSuccess(true);
            }
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    };




    return (
        <>
            {success ? (
                <section>
                    <Navigate to={"/TruckManagement"} />
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    );
};


export default SignIn;