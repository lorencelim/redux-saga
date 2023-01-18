// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// import { Button } from '@mui/material';
// const SIGNUP_URL = '/SignUp';

// function SignUp() {
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [validName, setValidName] = useState(false);
//     const [userFocus, setUserFocus] = useState(false);

//     const [pwd, setPwd] = useState('');
//     const [validPwd, setValidPwd] = useState(false);
//     const [pwdFocus, setPwdFocus] = useState(false);

//     const [matchPwd, setMatchPwd] = useState('');
//     const [validMatch, setValidMatch] = useState(false);
//     const [matchFocus, setMatchFocus] = useState(false);

//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//     const USER_REGEX = "/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/";
//     const PWD_REGEX = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})$/";

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setValidName(USER_REGEX.test(user));
//     }, [user])

//     useEffect(() => {
//         setValidPwd(PWD_REGEX.test(pwd));
//         setValidMatch(pwd === matchPwd);
//     }, [pwd, matchPwd])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd, matchPwd])

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const v1 = USER_REGEX.test(user);
//         const v2 = PWD_REGEX.test(pwd);
//         if (!v1 || !v2) {
//             setErrMsg("Invalid Entry");
//             return;
//         }
//         try {
//             const response = await axios.post(SIGNUP_URL,
//                 JSON.stringify({ user, pwd }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true
//                 }
//             );
//             // TODO: remove console.logs before deployment
//             console.log(JSON.stringify(response?.data));
//             //console.log(JSON.stringify(response))
//             setSuccess(true);
//             //clear state and controlled inputs
//             setUser('');
//             setPwd('');
//             setMatchPwd('');
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg('No Server Response');
//             } else if (err.response?.status === 409) {
//                 setErrMsg('Username Taken');
//             } else {
//                 setErrMsg('Registration Failed')
//             }
//             errRef.current.focus();
//         }
//     }


//     const formik = useFormik({
//         initialValues: {
//             user: '',
//             pwd: ''
//         },
//         validationSchema: Yup.object({
//             id: Yup.string()
//                 .matches(USER_REGEX, 'Must be 15 characters or less')
//                 .required('required'),
//             password: Yup.string()
//                 .required('required')
//                 .matches(PWD_REGEX, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character')
//         }),
//         onSubmit: (values) => {
//             console.log(values);
//         },
//     });

//     console.log(formik.touched);

//     return (
//         <div className='signup'> Sign Up
//             <form onSubmit={formik.handleSubmit}>
//                 <div className='input-container'>
//                     <input
//                         type='text'
//                         id='username'
//                         ref={userRef}
//                         placeholder='Username'
//                         autoComplete="off"
//                         onChange={(e) => formik.setUser(e.target.value)}
//                         onFocus={() => setUserFocus(true)}
//                         onBlur={formik.setUserFocus(false)}
//                         value={formik.values.user}
//                         {formik.errors.user ? <p>{formik.errors.user}</p> : null}
//                     />
//                     <input
//                         onChange={(e) => setUser(e.target.value)}
//                         value={user}
//                         required
//                         aria-invalid={validName ? "false" : "true"}
//                         aria-describedby="uidnote"
//                         onFocus={() => setUserFocus(true)}
//                         onBlur={() => setUserFocus(false)}

//                         //stop here

//                 </div>
//                 <div className='input-container'>
//                     <input
//                         id='pwd'
//                         name='pwd'
//                         type='password'
//                         placeholder='Password'
//                         onChange={formik.handleChange}
//                         value={formik.values.pwd}
//                         onBlur={formik.handleBlur}
//                     />
//                     {formik.errors.pwd ? <p>{formik.errors.pwd}</p> : null}
//                 </div>
//                 <Button type='submit' variant='outlined'>Sign Up</Button>
//             </form>
//         </div>
//     )
// }


// import React, { useRef, useState, useEffect } from "react";
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from '../app/api/axios';


// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/SignUp';

// const SignUp = () => {



//     return (
//         <>
//             {success ? (
//                 <section>
//                     <h1>Success!</h1>
//                     <p>
//                         <a href="#">Sign In</a>
//                     </p>
//                 </section>
//             ) : (
//                 <section>
//                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//                     <h1>Register</h1>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="username">
//                             Username:
//                             <div className={validName ? "valid" : "hide"} />
//                             <div className={validName || !user ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="text"
//                             id="username"
//                             ref={userRef}
//                             autoComplete="off"
//                             onChange={(e) => setUser(e.target.value)}
//                             value={user}
//                             required
//                             aria-invalid={validName ? "false" : "true"}
//                             aria-describedby="uidnote"
//                             onFocus={() => setUserFocus(true)}
//                             onBlur={() => setUserFocus(false)}
//                         />
//                         <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
//                             4 to 24 characters.<br />
//                             Must begin with a letter.<br />
//                             Letters, numbers, underscores, hyphens allowed.
//                         </p>


//                         <label htmlFor="password">
//                             Password:
//                             <div className={validPwd ? "valid" : "hide"} />
//                             <div className={validPwd || !pwd ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             onChange={(e) => setPwd(e.target.value)}
//                             value={pwd}
//                             required
//                             aria-invalid={validPwd ? "false" : "true"}
//                             aria-describedby="pwdnote"
//                             onFocus={() => setPwdFocus(true)}
//                             onBlur={() => setPwdFocus(false)}
//                         />
//                         <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
//                             8 to 24 characters.<br />
//                             Must include uppercase and lowercase letters, a number and a special character.<br />
//                             Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
//                         </p>


//                         <label htmlFor="confirm_pwd">
//                             Confirm Password:
//                             <div className={validMatch && matchPwd ? "valid" : "hide"} />
//                             <div className={validMatch || !matchPwd ? "hide" : "invalid"} />
//                         </label>
//                         <input
//                             type="password"
//                             id="confirm_pwd"
//                             onChange={(e) => setMatchPwd(e.target.value)}
//                             value={matchPwd}
//                             required
//                             aria-invalid={validMatch ? "false" : "true"}
//                             aria-describedby="confirmnote"
//                             onFocus={() => setMatchFocus(true)}
//                             onBlur={() => setMatchFocus(false)}
//                         />
//                         <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
//                             <div />
//                             Must match the first password input field.
//                         </p>

//                         <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
//                     </form>
//                     <p>
//                         Already registered?<br />
//                         <span className="line">
//                             {/*put router link here*/}
//                             <a href="#">Sign In</a>create
//                         </span>
//                     </p>
//                 </section>
//             )}
//         </>
//     )
// }

// export default SignUp;


// export default SignUp;