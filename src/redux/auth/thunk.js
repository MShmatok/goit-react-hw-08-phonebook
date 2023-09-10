import { createAsyncThunk } from "@reduxjs/toolkit";
import { logOut, login, refreshUser, signUp } from "api/auth";

export const loginThunk = createAsyncThunk('auth/login', (data) => login(data))

export const signUpThunk = createAsyncThunk('auth/signUp', (data) => signUp(data))
export const refreshUserThunk = createAsyncThunk('auth/refresh', (data) => refreshUser(data))
export const logOutThunk = createAsyncThunk('auth/logOut', () => logOut())

