import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
    user: null,
    isLoadingUser: true,
})

export const userStore = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logInUser: (state, action) => {
            state.user = action.payload;
        },

        logOutUser: (state) => {
            state.user = null;
        },

        loadingSetUser: (state, action) => {
            state.isLoadingUser = action.payload
        }
    }
})


export const { logInUser, logOutUser, loadingSetUser } = userStore.actions