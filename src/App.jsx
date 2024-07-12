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
import ProfilePage from "./pages/profile/ProfilePage";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./App.css";

const App = () => {
  const clientId =
    "135964319940-eesbq9ooc8gjh983qplaktbqttkiu4p3.apps.googleusercontent.com";
  return (
    <ThemeProvider theme={lightTheme}>
      <GoogleOAuthProvider clientId={clientId}>
        <Routes>
          <Route path="/" element={<DefaulLayout />}>
            <Route index element={<MainPage />} />
            <Route path="characters" element={<CharactersPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="user">
              <Route index element={<UsersPage />} />
              {/* <Route
                            path="createuser/:userId"
                            element={<CreateUserPage />}
                        /> */}
              <Route path="createuser" element={<CreateUserPage />} />
            </Route>

            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
};

export default App;
