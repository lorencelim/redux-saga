import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Grid, ThemeProvider } from "@mui/material";

function User({ theme }) {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const logout = () => {
        localStorage.clear();
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Grid container>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>

                            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: "block", md: "none" }
                                    }}
                                >
                                    <MenuItem>
                                        <Link style={{ textDecoration: 'none' }} to={`/${localStorage.getItem("user-Info")}/TruckManagement`}>
                                            <Button onClick={handleCloseNavMenu} sx={{ pt: 1 }}>
                                                <Typography textAlign="center">Truck Management</Typography>
                                            </Button>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link style={{ textDecoration: 'none' }} to={`/${localStorage.getItem("user-Info")}/UserManagement`}>
                                            <Button onClick={handleCloseNavMenu} sx={{ px: 1 }}>
                                                <Typography textAlign="center">User Management</Typography>
                                            </Button>
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </Box>

                            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                                <Grid item>
                                    <Link style={{ textDecoration: 'none' }} to={`/${localStorage.getItem("user-Info")}/TruckManagement`}>
                                        <Button sx={{ pt: 1 }}>
                                            <Typography textAlign="center" sx={{ color: "white" }}>Truck Management</Typography>
                                        </Button>
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} to={`/${localStorage.getItem("user-Info")}/UserManagement`}>
                                        <Button sx={{ pt: 1 }}>
                                            <Typography textAlign="center" sx={{ color: "white" }}>User Management</Typography>
                                        </Button>
                                    </Link>
                                </Grid>
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Typography sx={{ color: "white", textTransform: 'uppercase', fontSize: 15 }}>
                                            {localStorage.getItem("user-Info")}
                                        </Typography>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: "45px" }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem>
                                        <Link style={{ textDecoration: 'none' }} to={`/${localStorage.getItem("user-Info")}/Account`}>
                                            <Button onClick={handleCloseNavMenu} sx={{ pt: 1 }}>
                                                <Typography textAlign="center">Account</Typography>
                                            </Button>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link style={{ textDecoration: 'none' }} to={`/SignIn`} onClick={handleCloseNavMenu}>
                                            <Button onClick={logout} sx={{ px: 1 }}>
                                                <Typography textAlign="center">Logout</Typography>
                                            </Button>
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
                <Outlet />
            </ThemeProvider>
        </Grid >
    );
}
export default User;





// return (
//     <Grid item>
//         <Link style={{ textDecoration: 'none' }} to="/SignIn">
//             <Button
//                 variant="outlined"
//                 color="primary"
//                 theme={theme}
//                 sx={{
//                     mt: 1,
//                     '&:hover': {
//                         color: '#ff6f00'
//                     }
//                 }}
//                 onClick={logout}
//             >
//                 Sign Out
//             </Button>
//         </Link>
//     </Grid>

// )