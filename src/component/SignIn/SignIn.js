import { Button, CssBaseline, Grid, Link, Paper, TextField, ThemeProvider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../../app/api/axios';


const SignIn = ({ theme }) => {
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
        <ThemeProvider theme={theme}>
            {success ? (
                <Grid>
                    <Navigate to={"/TruckManagement"} />
                </Grid>
            ) : (
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        component={Paper}
                        elevation={6}
                        square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <Typography component="h1" variant="h5">
                                Sign In
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                                <TextField
                                    type="text"
                                    id="username"
                                    label="Username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                    fullWidth
                                    sx={{ my: 2 }}
                                />

                                <TextField
                                    type="password"
                                    id="password"
                                    label="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    fullWidth
                                    sx={{ my: 2 }}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                            </Box>
                            <Grid item>
                                Need an Account?<br />
                            </Grid>
                            <Grid item>
                                {/*put router link here*/}
                                    <Link href="/SignUp">Sign Up</Link>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            )}
        </ThemeProvider>
    );
};


export default SignIn;