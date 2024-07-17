import React from "react";
import GaleryPage from "../galery/GaleryPage";
// import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function MainPage() {

    const { counter } = useSelector(state => state.testReducer);

    return (
        <>
            {/* <Typography variant="h1" sx={{textAlign: "center"}}>{counter}</Typography> */}
            <GaleryPage />
        </>
    );
}