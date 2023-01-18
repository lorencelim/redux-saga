import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        signin: (state, action) => {
            state.user = action.payload;
        },
        signout: (state) => {
            state.user = null;
        },
    },
})

export const { signin, signout } = UserSlice.actions;

export const SelectUser = (state) => state.user.user;

export default UserSlice.reducer;
