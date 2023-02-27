import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@emotion/react";
import { ArrowBackIos } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
import { FormControl, Paper } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { initSaveUsersValue, initSaveUsersValueSuccessfull } from "../../containers/user/addUser/store/actions";
import { SignupSchema } from "./SignupSchema";
import CustomInputSignIn from "./CustomInputSignIn";
import { initGetListUser } from "../../containers/user/userList/store/actions";


const SignUp = ({ theme }) => {
    const [userPostSuccess, setUserPostSuccess] = useState(false);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState("");
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState("");
    const { usersList } = useSelector(state => state.UsersListReducer)
    const { success } = useSelector(state => state.AddUsersReducer)
    const accountMatch = usersList.some(acc => acc.username === user.username)

    useEffect(() => {
        dispatch(initGetListUser())
    }, [dispatch])

    useEffect(() => {
        if (success) {
            setUser("");
            dispatch(initSaveUsersValueSuccessfull(false));
        }
    }, [dispatch])

    const handleSubmit = async (e) => {
        console.log(e);
            if (!accountMatch) {
                await dispatch(initSaveUsersValue(user));
                setUserPostSuccess(true);
            } else {
                setErrMsg("Username taken, Please another username")
            }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        height: "80vh"
                    }}
                >
                    <Paper
                        elevation={2}
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            borderRadius: "20px"
                        }}>
                        <Box sx={{ display: "flex", alignSelf: "start" }}>
                            <Button onClick={() => { navigate("/SignIn"); }}>
                                <ArrowBackIos />
                            </Button>
                        </Box>
                        <Box>
                            <Typography variant="h4" sx={{ color: "#ff6f00" }}>
                                Sign Up
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                ref={errRef}
                                className={errMsg ? "errmsg" : "offscreen"}
                                aria-live="assertive"
                                sx={{ color: "red" }}>
                                {errMsg}
                            </Typography>
                        </Box>
                        <Formik
                            initialValues={{
                                id: "",
                                username: "",
                                password: "",
                                confirm_password: ""
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={handleSubmit}
                        >
                            <Box noValidate sx={{ mt: 1 }}>

                                <Form>
                                    <FormControl
                                        sx={{
                                            ".MuiFormLabel-root.Mui-focused": {
                                                color: "#ffb300"
                                            },
                                            "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                                                borderColor: "#ffb300",
                                            },
                                            "& .MuiFormHelperText-root": {
                                                color: "red"
                                            }
                                        }}>
                                        <Field
                                            component={CustomInputSignIn}
                                            type="text"
                                            label="Username"
                                            name="username"
                                            user={user}
                                            setUser={setUser}
                                        />
                                        <Field
                                            component={CustomInputSignIn}
                                            type="password"
                                            name="password"
                                            label="Password"
                                            user={user}
                                            setUser={setUser}
                                        />
                                        <Field
                                            component={CustomInputSignIn}
                                            type="password"
                                            name="confirm_password"
                                            label="Confirm Password"
                                            user={user}
                                            setUser={setUser}
                                        />
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Sign Up
                                        </Button>
                                    </FormControl>
                                </Form>
                            </Box>
                        </Formik>
                        {
                            userPostSuccess ?
                                (
                                    <Navigate to={"/SignIn"} />
                                ) : (
                                    null
                                )
                        }
                    </Paper>
                </Box>
            </Container>
        </ThemeProvider >
    );
}

export default SignUp;