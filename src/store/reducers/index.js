// reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import { TestReducer } from "./templateReducer";
import { ThemingReducer } from "./themingReducer";
import { AuthReducer } from "./authReducer";
import { UsersReducer } from "./usersReducer";

// наші редюсери
export const rootReducer = combineReducers({
  testReducer: TestReducer,
  themingReducer: ThemingReducer,
  authReducer: AuthReducer,
  usersReducer: UsersReducer,
});
