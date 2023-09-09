const { createSlice } = require("@reduxjs/toolkit");
const { loginThunk, signUpThunk } = require("./thunk");

const initialState = {
    token: '',
    user: ''
}
const handleLogin = (state, { payload }) => {
    console.log(payload);
    state.token = payload.token
    state.user = payload.user
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, handleLogin)
            .addCase(signUpThunk.fulfilled, handleLogin)
    }

})

export const reducerAuth = authSlice.reducer