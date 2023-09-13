const { createSlice } = require("@reduxjs/toolkit");
const { loginThunk, signUpThunk, refreshUserThunk, logOutThunk } = require("./thunk");

const initialState = {
    token: '',
    user: '',
    isRefreshing: false,
}
const handleLogin = (state, { payload }) => {
    state.token = payload.token
    state.user = payload.user
}
const handleLogOut = (state) => {
    state.token = '';
    state.user = '';
}

const handleRefreshUser = (state, { payload }) => {
    state.token = payload.token
    state.user = payload.user
    state.isRefreshing = false;
}
const handleRefreshUserEnd = (state) => {
    state.isRefreshing = false;
}
const handleRefreshUserStart = (state) => {
    state.isRefreshing = true;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, handleLogin)
            .addCase(signUpThunk.fulfilled, handleLogin)
            .addCase(refreshUserThunk.pending, handleRefreshUserStart)
            .addCase(refreshUserThunk.fulfilled, handleRefreshUser)
            .addCase(refreshUserThunk.rejected, handleRefreshUserEnd)
            .addCase(logOutThunk.fulfilled, handleLogOut)
    }

})

export const reducerAuth = authSlice.reducer