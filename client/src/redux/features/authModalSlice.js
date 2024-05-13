import { createSlice } from "@reduxjs/toolkit"

export const appModalSlice = createSlice({
    name: "AuthModal",
    initialState: {
        authModalOpen: false
    },
    reducers: {
        setAuthModalOpen: (state, action) => {
            state.authModalOpen = action.payload
        },
    }
})

export const {
    setAuthModalOpen
} = appModalSlice.actions

export default appModalSlice.reducer