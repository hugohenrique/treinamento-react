import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        login: (state, action) => {
            const { username, token } = action.payload;
            state.user = username;
            state.token = token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;