import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@emotion/react';
import { ArrowBackIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';


const SignUp = ({ theme }) => {
    let navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        height: '100vh'
                    }}
                >
                    <Paper
                        elevation={2}
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRadius: "20px"
                        }}>
                        <Box sx={{ display: "flex", alignSelf: "start" }}>
                            <Button onClick={() => { navigate("/SignIn"); }}>
                                <ArrowBackIos />
                            </Button>
                        </Box>
                        <Box>
                            <Typography variant="h4" sx={{color: "#ff6f00"}}>
                                Sign Up
                            </Typography>
                        </Box>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="user"
                                label="Username"
                                name="username"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignUp;