import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const CreateUserPage = () => {
  const navigate = useNavigate();
  
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Пошта обов'язкова")
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Не вірний формат пошти"),
    name: Yup.string().required("Вкажіть своє ім'я"),
    surname: Yup.string().required("Вкажіть своє прізвище"),
    userName: Yup.string().required("Вкажіть user name"),
    role: Yup.string().required("Вкажіть свою роль"),
  });

  const query = useQuery();
  const user = {
    id: query.get("userId"),
    email: query.get("email"),
    name: query.get("name"),
    surname: query.get("surname"),
    userName: query.get("userName"),
    role: query.get("role"),
  };

  const onSubmitHandler = (values) => {
    console.log(values);
    navigate('/user');
  };

  const formik = useFormik({
    initialValues: {
      email: user.email || "",
      role: user.role || "",
      name: user.name || "",
      surname: user.surname || "",
      userName: user.userName || "",
    },
    onSubmit: onSubmitHandler,
    validationSchema: validationSchema,
  });

  return (
    <Container component="main" maxWidth="xs" sx={{ mb: 4 }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Edit
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3 }}
          onSubmit={formik.handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="First Name"
                autoFocus
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              ) : null}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="surname"
                label="Last Name"
                name="surname"
                autoComplete="family-name"
                value={formik.values.surname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.surname && formik.errors.surname ? (
                <div style={{ color: "red" }}>{formik.errors.surname}</div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="userName"
                label="User name"
                id="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.userName && formik.errors.userName ? (
                <div style={{ color: "red" }}>{formik.errors.userName}</div>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                required
                fullWidth
                name="role"
                label="Role"
                id="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </TextField>
              {formik.touched.role && formik.errors.role ? (
                <div style={{ color: "red" }}>{formik.errors.role}</div>
              ) : null}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Edit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateUserPage;
