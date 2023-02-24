import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@emotion/react';
import { Paper } from '@mui/material';


const Account = ({ theme }) => {
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
                        <Box>
                            <Typography variant="h4" sx={{color:"#ff6f00"}}>
                                Account Detail
                            </Typography>
                        </Box>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Typography component="h1" variant="subtitle1">Username : {localStorage.getItem("user-Info")}</Typography>
                        </Box>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <Typography component="h1" variant="subtitle1">Position : {localStorage.getItem("position")}</Typography>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Account;