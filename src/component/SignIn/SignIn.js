import { Button, CssBaseline, Grid, Paper, TextField, ThemeProvider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initGetListUser } from "../../containers/user/userList/store/actions";

const SignIn = ({ theme }) => {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();
    const { usersList } = useSelector(state => state.UsersListReducer);
    
    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [user, password])

    useEffect(() => {
        dispatch(initGetListUser())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const userMatch = usersList.some(acc => acc.username === user && acc.password === password);
            const filterUser = usersList.filter(acc => acc.username === user && acc.password === password);
            if (userMatch) {
                localStorage.setItem("user-Info", filterUser.map(acc => acc.username));
                localStorage.setItem("designation", filterUser.map(acc => acc.designation));
                setSuccess(true);
            } else if (!userMatch) {
                setErrMsg("Incorrect Username And Password");
            }
        } catch (err) {
                setErrMsg("No Server Response");
            errRef.current.focus();
        }
    };

    return (
        <ThemeProvider theme={theme}>
            {success ? (
                <Grid>
                    <Navigate to={`/${localStorage.getItem("user-Info")}/TruckManagement`} />
                </Grid>
            ) : (
                <Grid container component="main" sx={{ height: "100vh" }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: "url(https://source.unsplash.com/random)",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: (t) =>
                                t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: "cover",
                            backgroundPosition: "center",
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
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                ref={errRef}
                                className={errMsg ? "errmsg" : "offscreen"}
                                aria-live="assertive"
                                sx={{ color: "red" }}>
                                {errMsg}
                            </Typography>
                            <Typography variant="h4" sx={{ color: "#ff6f00" }}>
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
                                <Typography variant="subtitle1"> Need an Account?</Typography>
                            </Grid>
                            <Grid item >
                                <Link to="/SignUp">Sign Up</Link>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            )}
        </ThemeProvider>
    );
};

export default SignIn;