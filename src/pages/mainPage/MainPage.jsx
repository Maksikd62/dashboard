import React from "react";
import { useState } from "react";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
    Typography,
    Button,
} from "@mui/material";

const users = [
    {
        id: 1,
        userName: "admin",
        email: "admin@dash.com",
        role: "admin",
        name: "admin",
        surname: "admin",
    },
    {
        id: 2,
        userName: "user1",
        email: "user1@dash.com",
        role: "user",
        name: "userName1",
        surname: "userSurname1",
    },
    {
        id: 3,
        userName: "user2",
        email: "user2@dash.com",
        role: "user",
        name: "userName2",
        surname: "userSurname2",
    },
    {
        id: 4,
        userName: "user3",
        email: "user3@dash.com",
        role: "user",
        name: "userName3",
        surname: "userSurname3",
    },
    {
        id: 5,
        userName: "user4",
        email: "user4@dash.com",
        role: "user",
        name: "userName4",
        surname: "userSurname4",
    },
    {
        id: 6,
        userName: "user5",
        email: "user5@dash.com",
        role: "user",
        name: "userName5",
        surname: "userSurname5",
    },
];

export default function MainPage() {
    // state
    const [counter, setCounter] = useState(0);

    // деструктизація
    // const admin = users[0];


    // const adminCopy = { ...admin, name: "mega admin", id: 100 };

    // admin.email = "test";
    // console.log(adminCopy);
    // console.log(admin);

    // {
    //     id: 1,
    //     userName: "admin",
    //     email: "admin@dash.com",
    //     role: "admin",
    //     name: "admin",
    //     surname: "admin",
    // }

    // const { name, surname } = admin;

    // const colors = ["red", "green", "blue"];

    // const [red, green, blue] = colors;

    // console.log(red);
    // console.log(green);
    // console.log(blue);



    const incrementClick = () => {
        setCounter(counter + 1);
    };

    const decrementClick = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    return (
        <Container sx={{ mt: 2 }}>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{ fontWeight: "bold" }}
                                align="center"
                            >
                                Id
                            </TableCell>
                            <TableCell
                                sx={{ fontWeight: "bold" }}
                                align="center"
                            >
                                User name
                            </TableCell>
                            <TableCell
                                sx={{ fontWeight: "bold" }}
                                align="center"
                            >
                                Email
                            </TableCell>
                            <TableCell
                                sx={{ fontWeight: "bold" }}
                                align="center"
                            >
                                Role
                            </TableCell>
                            <TableCell
                                sx={{ fontWeight: "bold" }}
                                align="center"
                            >
                                Full name
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell align="center">{item.id}</TableCell>
                                <TableCell align="center">
                                    {item.userName}
                                </TableCell>
                                <TableCell align="center">
                                    {item.email}
                                </TableCell>
                                <TableCell align="center">
                                    {item.role}
                                </TableCell>
                                <TableCell align="center">{`${item.name} ${item.surname}`}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box sx={{ textAlign: "center", mt: 3 }}>
                <Typography variant="h4">{counter}</Typography>
                <Button
                    onClick={() => incrementClick()}
                    sx={{ color: "black" }}
                >
                    Up
                </Button>
                <Button
                    onClick={() => decrementClick()}
                    sx={{ color: "black" }}
                >
                    Down
                </Button>
            </Box>
        </Container>
    );
}
