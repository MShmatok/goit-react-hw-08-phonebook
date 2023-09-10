const { createSlice } = require("@reduxjs/toolkit");
const { loginThunk, signUpThunk, refreshUserThunk, logOutThunk } = require("./thunk");

const initialState = {
    token: '',
    user: ''
}
const handleLogin = (state, { payload }) => {
    state.token = payload.token
    state.user = payload.user
}
const handleRefreshUser = (state, { payload }) => {
    state.token = payload.token
    state.user = payload.user
}

const handleLogOut = (state) => {
    state.token = '';
    state.user = '';
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, handleLogin)
            .addCase(signUpThunk.fulfilled, handleLogin)
            .addCase(refreshUserThunk.fulfilled, handleRefreshUser)
            .addCase(logOutThunk.fulfilled, handleLogOut)

    }

})

export const reducerAuth = authSlice.reducer