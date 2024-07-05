import React from "react";
import { AppBar, Box, Button, Grid } from "@mui/material";
import logo from "./images/logo.png";
import { btnPageStyle } from "./style";
import { Link } from "react-router-dom";

const Navbar = () => {
    // деструктизація
    const obj = { name: "John", surname: "Thomson", age: 20, height: 200 };
    const { name, surname } = obj;

    const user = window.localStorage.getItem("user");

    const clickHandler = (e) => {
        console.log(e.target.innerText);
    };

    return (
        // sx === style
        <AppBar position="static">
            <Grid container sx={{ alignItems: "center", height: "100px" }}>
                <Grid item xs={2} sx={{ textAlign: "center" }}>
                    <Link to="/">
                        <img width={150} src={logo} alt="image" />
                    </Link>
                </Grid>
                <Grid
                    item
                    display="flex"
                    xs={8}
                    sx={{ justifyContent: "space-evenly" }}
                >
                    <Button sx={btnPageStyle} onClick={clickHandler}>
                        Головна сторінка
                    </Button>
                    <Button sx={btnPageStyle} onClick={clickHandler}>
                        Користувачі
                    </Button>
                    <Button sx={btnPageStyle} onClick={clickHandler}>
                        Сторінка 2
                    </Button>
                    <Button sx={btnPageStyle} onClick={clickHandler}>
                        Сторінка 3
                    </Button>
                </Grid>
                <Grid item xs={2} sx={{ textAlign: "end", pr: 3 }}>
                    {user === null ? (
                        <>
                            <Link to="/signin">
                                <Button sx={{ color: "black" }}>Увійти</Button>
                            </Link>
                            <Button sx={{ color: "black" }}>
                                Зареєструватися
                            </Button>
                        </>
                    ) : (
                        <>
                        <Button sx={{ color: "black" }}>Профіль</Button>
                            </>
                    )}
                </Grid>
            </Grid>
        </AppBar>
    );
};

export default Navbar;
