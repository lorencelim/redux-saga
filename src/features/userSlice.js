import { createSlice } from "@reduxjs/toolkit";

import { db } from '../db/db.json'

const userSlice = createSlice({
    name: "users",
    initialState: { value: db },
    reducers: {
        addUser: (state, action) => {
            //code for adding user
        },
    },
});


export default userSlice.reducer;