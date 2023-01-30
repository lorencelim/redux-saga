import { useEffect, useState, useRef, useContext } from 'react';
// import { useDispatch } from 'react-redux';
// import { signin } from './redux/userSlice';
import { Navigate } from 'react-router-dom';
import axios from '../../app/api/axios';


const SignIn = () => {
    const SIGNIN_URL = '/users';
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(SIGNIN_URL + "/" + user,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );

            console.log(response.data);

            if (user === response.data[0].username &&
                pwd === response.data[0].password) {
                setUser('');
                setPwd('');
                setSuccess(true);
            }
        } catch (err) {
            if (!err?.response) {
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
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
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