import React, { useEffect } from "react";
import { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Pagination,
    ImageList,
    ImageListItem,
} from "@mui/material";

export default function MainPage() {
    // state
    const [counter, setCounter] = useState(0);
    const [images, setImages] = useState([]);
    const [pagination, setPagination] = useState({ total: 0, page: 1 });

    const perPage = 8;
    const imagesCategory = "Harry Potter"
    const apiKey = "XnwpPKhh4msoD07AMkJrjHXUmXjMHaMyZYb4SAlxYB5njXsfZNSi9QKQ";
    let apiUrl = `https://api.pexels.com/v1/search?query=${imagesCategory}&per_page=${perPage}&page=${pagination.page}`;

    const pageCount = Math.ceil(pagination.total / perPage);

    const pageChangeHandler = (event, value) => {
        setPagination({ ...pagination, page: value });
    };

    const incrementClick = () => {
        setCounter(counter + 1);
    };

    const decrementClick = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    useEffect(() => {
        fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: apiKey,
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then((data) => {
                const photos = data.photos.map((item) => item.src.medium);
                setPagination({ ...pagination, total: data.total_results });
                setImages(photos);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [pagination.page]);

    return (
        <Container sx={{ mt: 2 }}>
            <Grid container columnSpacing={2} rowSpacing={1}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {images.map((item) => (
                        <ImageListItem key={item}>
                            <img
                                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item}?w=248&fit=crop&auto=format`}
                                alt="image"
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Grid item xs={12} sx={{ display: "flex" }}>
                    <Pagination
                        page={pagination.page}
                        onChange={pageChangeHandler}
                        sx={{ m: "auto" }}
                        count={pageCount}
                        color="primary"
                    />
                </Grid>
            </Grid>

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