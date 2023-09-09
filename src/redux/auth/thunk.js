import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, signUp } from "api/auth";

export const loginThunk = createAsyncThunk('auth/login', (data) => login(data))

export const signUpThunk = createAsyncThunk('auth/signUp', (data) => signUp(data))