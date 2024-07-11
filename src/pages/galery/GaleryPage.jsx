import React, { useEffect, useState } from "react";
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
    const [images, setImages] = useState([]);
    const [pagination, setPagination] = useState({ total: 0, page: 1 });
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(false);

    const perPage = 8;
    const apiKey = "XnwpPKhh4msoD07AMkJrjHXUmXjMHaMyZYb4SAlxYB5njXsfZNSi9QKQ";

    const pageCount = Math.ceil(pagination.total / perPage);

    const pageChangeHandler = (event, value) => {
        setPagination({ ...pagination, page: value });
    };

    useEffect(() => {
        if (selectedCategory) {
            const fetchImages = async () => {
                setLoading(true);
                const apiUrl = `https://api.pexels.com/v1/search?query=${selectedCategory}&per_page=${perPage}&page=${pagination.page}`;
                try {
                    const response = await fetch(apiUrl, {
                        method: "GET",
                        headers: {
                            Authorization: apiKey,
                        },
                    });
                    if (response.status === 200) {
                        const data = await response.json();
                        const photos = data.photos.map((item) => item.src.medium);
                        setPagination({ ...pagination, total: data.total_results });
                        setImages(photos);
                    }
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                }
            };
            fetchImages();
        }
    }, [pagination.page, selectedCategory]);

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setPagination({ ...pagination, page: 1 });
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
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleCategoryClick("Nature")}>
                            <ListItemIcon>
                                <ForestIcon />
                            </ListItemIcon>
                            <ListItemText primary="Nature" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleCategoryClick("Food")}>
                            <ListItemIcon>
                                <RestaurantIcon />
                            </ListItemIcon>
                            <ListItemText primary="Food" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleCategoryClick("Animals")}>
                            <ListItemIcon>
                                <PetsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Animals" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            {loading && <LinearProgress sx={{ mt: 2, backgroundColor: 'red', '& .MuiLinearProgress-bar': { backgroundColor: 'red' } }} />}
            {selectedCategory && !loading && (
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
            )}
        </>
    );
};

export default GaleryPage;
