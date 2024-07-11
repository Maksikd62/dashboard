import React from "react";
import MainPage from "./pages/mainPage/MainPage";
import NotFound from "./pages/notFound/NotFound";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./theming/lightTheme";
import CreateUserPage from "./pages/user/create/CreateUserPage";
import SignInPage from "./pages/auth/signin/SignInPage";
import SignUp from "./pages/auth/signup/SignUp";
import { Routes, Route } from "react-router-dom";
import DefaulLayout from "./components/layouts/default/DefaultLayout";
import UsersPage from "./pages/user/UsersPage";
import CharactersPage from "./pages/characters/CharactersPage";

import "./App.css";

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Routes>
                <Route path="/" element={<DefaulLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path="characters" element={<CharactersPage />} />
                    <Route path="user">
                        <Route index element={<UsersPage />} />
                        {/* <Route
                            path="createuser/:userId"
                            element={<CreateUserPage />}
                        /> */}
                        <Route
                            path="createuser"
                            element={<CreateUserPage />}
                        />
                    </Route>

                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
};

export default App;




