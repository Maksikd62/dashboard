import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
    Grid,
    Pagination,
    ImageList,
    ImageListItem,
    List,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Collapse,
    LinearProgress,
} from "@mui/material";
import {
    ExpandLess,
    ExpandMore,
} from "@mui/icons-material";
import CategoryIcon from '@mui/icons-material/Category';
import ForestIcon from '@mui/icons-material/Forest';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PetsIcon from '@mui/icons-material/Pets';
 
const GaleryPage = () => {
    // state
    const [images, setImages] = useState([]);
    const [pagination, setPagination] = useState({ total: 0, page: 1 });
 
    const perPage = 8;
    const imagesCategory = "Nature";
    const apiKey = "XnwpPKhh4msoD07AMkJrjHXUmXjMHaMyZYb4SAlxYB5njXsfZNSi9QKQ";
    let apiUrl = `https://api.pexels.com/v1/search?query=${imagesCategory}&per_page=${perPage}&page=${pagination.page}`;
 
    const pageCount = Math.ceil(pagination.total / perPage);
 
    const pageChangeHandler = (event, value) => {
        setPagination({ ...pagination, page: value });
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
 
    const [open, setOpen] = React.useState(false);
 
    const handleClick = () => {
        setOpen(!open);
    };
    const click= (text) => {
        console.log(text)
    };
 
    return (
        <>
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Categories" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={()=>{click("Nature")}}>
                            <ListItemIcon>
                                <ForestIcon />
                            </ListItemIcon>
                            <ListItemText primary="Nature" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={()=>{click("Food")}}>
                            <ListItemIcon>
                                <RestaurantIcon />
                            </ListItemIcon>
                            <ListItemText primary="Food" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={()=>{click("Animals")}}>
                            <ListItemIcon>
                                <PetsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Animals" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
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
        </>
    );
};
 
export default GaleryPage;