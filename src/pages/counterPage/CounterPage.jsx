import { Typography, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const CounterPage = () => {
    const [value, setValue] = useState(0);

    const { counter } = useSelector((state) => state.testReducer);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({ type: "INCREMENT" });
    };

    const decrementHandler = () => {
        dispatch({ type: "DECREMENT" });
    };

    const increaseHandler = () => {
        dispatch({type: "INCREASE", payload: value})
    }

    const changeHandler = (event) => {
        const v = parseInt(event.target.value);
        setValue(v);
    }

    return (
        <Box sx={{ textAlign: "center" }}>
            <Typography variant="h1">{counter}</Typography>
            <Button onClick={incrementHandler}>Increment</Button>
            <Button onClick={decrementHandler}>Decrement</Button>
            <Box>
                <Button onClick={increaseHandler}>Increase</Button>
                <TextField onChange={changeHandler}></TextField>
            </Box>
        </Box>
    );
};

export default CounterPage;