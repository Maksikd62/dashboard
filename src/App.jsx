import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import MainPage from "./pages/mainPage/MainPage";
import NotFound from "./pages/notFound/NotFound";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./theming/lightTheme";
import CreateUserPage from "./pages/user/create/CreateUserPage";
import SignInPage from "./pages/auth/signin/SignInPage";
import SignUp from "./pages/auth/signup/SignUp";
import { Routes, Route } from "react-router-dom";
import DefaulLayout from "./components/layouts/default/DefaultLayout";

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Routes>
                <Route path="/" element={<DefaulLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/createuser" element={<CreateUserPage />} />
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
};

export default App;
