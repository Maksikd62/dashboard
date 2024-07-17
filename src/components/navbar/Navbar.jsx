import React, { useEffect, useState } from "react";
import {
    AppBar,
    Button,
    Grid,
    Menu,
    MenuItem,
    Typography,
    Avatar,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./images/logo.png";
import { btnPageStyle } from "./style";
import { Link, useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useAction";
import { toast } from "react-toastify";

const pages = [
    { id: "1", title: "Головна сторінка", url: "/" },
    { id: "2", title: "Користувачі", url: "user" },
    { id: "3", title: "Персонажі", url: "characters" },
    { id: "4", title: "Сторінка 3", url: "counter" },
];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const { isAuth, user } = useSelector((state) => state.authReducer);
    const { theme } = useSelector((state) => state.themingReducer);
    const { logout, setTheme } = useAction();
    const navigate = useNavigate();

    // auth
    const logoutHandler = () => {
        handleCloseUserMenu();
        logout();
        navigate("signin");
    };

    // navmenu
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // usermenu
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // theming
    const changeTheme = () => {
        const value = theme === "light" ? "dark" : "light";
        setTheme(value);
        toast.success(`${value} theme`);
    };

    useEffect(() => {
        const themeLocal = localStorage.getItem("theme");
        if (themeLocal != null) {
            if (themeLocal != "light") {
                setTheme(themeLocal);
            }
        }
    }, []);

    return (
        // sx === style
        <AppBar position="static">
            <Grid container sx={{ alignItems: "center", height: "100px" }}>
                <Grid
                    item
                    xs={2}
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                >
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
                            display: { xs: "block", md: "none" },
                        }}
                    >
                        {pages.map((page) => (
                            <Link key={page.id} to={page.url}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        {page.title}
                                    </Typography>
                                </MenuItem>
                            </Link>
                        ))}
                    </Menu>
                </Grid>
                <Grid
                    item
                    xs={7}
                    sx={{
                        justifyContent: "start",
                        display: { xs: "flex", md: "none" },
                    }}
                >
                    <Link to="/">
                        <img width={150} src={logo} alt="image" />
                    </Link>
                </Grid>
                <Grid
                    item
                    xs={2}
                    sx={{
                        textAlign: "center",
                        display: { xs: "none", md: "block" },
                    }}
                >
                    <Link to="/">
                        <img width={150} src={logo} alt="image" />
                    </Link>
                </Grid>
                <Grid
                    item
                    xs={7}
                    sx={{
                        justifyContent: "space-evenly",
                        display: { xs: "none", md: "flex" },
                    }}
                >
                    {pages.map((page) => (
                        <Link key={page.id} to={page.url}>
                            <Button sx={btnPageStyle}>{page.title}</Button>
                        </Link>
                    ))}
                </Grid>
                <Grid item container xs={3} sx={{ textAlign: "end", pr: 3 }}>
                    <Grid item xs={2} sx={{ textAlign: "end" }}>
                        <IconButton onClick={changeTheme} color="inherit">
                            {theme === "dark" ? (
                                <Brightness7Icon />
                            ) : (
                                <Brightness4Icon />
                            )}
                        </IconButton>
                    </Grid>
                    <Grid item xs={10} sx={{ textAlign: "end" }}>
                        {!isAuth ? (
                            <>
                                <Link to="/signin">
                                    <Button sx={{ color: "black" }}>
                                        Увійти
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button sx={{ color: "black" }}>
                                        Зареєструватися
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            // <Button sx={{ color: "black" }}>Профіль</Button>
                            <>
                                <IconButton
                                    sx={{ p: 0, mr: 2 }}
                                    onClick={handleOpenUserMenu}
                                >
                                    <Avatar alt="Avatar" src={user.picture} />
                                </IconButton>
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
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Link to="/profile">
                                            <Typography textAlign="center">
                                                Profile
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={logoutHandler}>
                                        <Typography textAlign="center">
                                            Logout
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default Navbar;
