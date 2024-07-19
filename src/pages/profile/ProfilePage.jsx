import React, { useEffect, useState } from "react";
import { Container, Avatar, Typography, Box } from "@mui/material";

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("auth");
        if (token) {
            try {
                const decodedToken = parseJwt(token);
                setUserData(decodedToken);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, []);

    return (
        <Container component="main" maxWidth="xs" sx={{ mb: 10 }}>
            <Box
                sx={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} src={userData.picture} alt="User avatar" />
                <Typography component="h1" variant="h5">
                    {userData.name}
                </Typography>
                <Typography component="h2" variant="h6">
                    {userData.email}
                </Typography>
            </Box>
        </Container>
    );
};

export default ProfilePage;
