import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    UserAuthenticated: false,
    user: null,
    message: null,
    error: null,
};

export const UserAuthentication = createReducer(initialState, (builder) => {
    builder
        .addCase('LOGIN_REQUEST', (state) => {
            state.isLoading = true;
        })
        .addCase('LOGIN_SUCCESS', (state, action) => {
            state.isLoading = false;
            state.UserAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        })
        .addCase('LOGIN_FAILURE', (state, action) => {
            state.isLoading = false;
            state.UserAuthenticated = false;
            state.error = action.payload;
        })
        .addCase('GET_MY_PROFILE_REQUEST', (state) => {
            state.isLoading = true;
        })
        .addCase('GET_MY_PROFILE_SUCCESS', (state, action) => {
            state.isLoading = false;
            state.UserAuthenticated = true;
            state.user = action.payload.user;
        })
        .addCase('GET_MY_PROFILE_FAILURE', (state, action) => {
            state.isLoading = false;
            state.UserAuthenticated = false;
            state.error = action.payload;
        })
        .addCase('CLEAR_ERROR', (state) => {
            state.error = null;
        })
        .addCase('CLEAR_MESSAGE', (state) => {
            state.message = null;
        });
});
