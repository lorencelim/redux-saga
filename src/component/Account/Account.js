import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@emotion/react";
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { initGetListUser } from "../../containers/user/userList/store/actions";

const Account = ({ theme }) => {

    useEffect(() => {
        dispatch(initGetListUser());
    }, [])
    const dispatch = useDispatch();
    const { usersList } = useSelector(state => state.UsersListReducer);
    const userDetail = usersList.filter(acc => acc.username === localStorage.getItem("user-Info") && acc.designation === localStorage.getItem("designation"));
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        height: "100vh"
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
                        <Box>
                            <Typography variant="h4" sx={{ color: "#ff6f00" }}>
                                Account Detail
                            </Typography>
                        </Box>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Typography component="h1" variant="subtitle1">Username : {userDetail.map(acc => acc.username)}</Typography>
                        </Box>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <Typography component="h1" variant="subtitle1">Designation : {userDetail.map(acc => acc.designation)}</Typography>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Account;