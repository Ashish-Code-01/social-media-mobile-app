import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    Authenticated: false,
    user: null,
    message: null,
    error: null,
};

export const LOGIN_REQUEST = createAction("LOGIN_REQUEST");
export const LOGIN_SUCCESS = createAction("LOGIN_SUCCESS");
export const LOGIN_FAILURE = createAction("LOGIN_FAILURE");

export const GET_MY_PROFILE_REQUEST = createAction("GET_MY_PROFILE_REQUEST");
export const GET_MY_PROFILE_SUCCESS = createAction("GET_MY_PROFILE_SUCCESS");
export const GET_MY_PROFILE_FAILURE = createAction("GET_MY_PROFILE_FAILURE");

export const LOAD_USER_REQUEST = createAction("LOAD_USER_REQUEST");
export const LOAD_USER_SUCCESS = createAction("LOAD_USER_SUCCESS");
export const LOAD_USER_FAILURE = createAction("LOAD_USER_FAILURE");

export const CLEAR_ERROR = createAction("CLEAR_ERROR");
export const CLEAR_MESSAGE = createAction("CLEAR_MESSAGE");

export const LOGOUT_USER_REQUEST = createAction("LOGOUT_USER_REQUEST");
export const LOGOUT_USER_SUCCESS = createAction("LOGOUT_USER_SUCCESS");
export const LOGOUT_USER_FAILURE = createAction("LOGOUT_USER_FAILURE");


export const UserAuthentication = createReducer(initialState, (builder) => {
    builder
        .addCase(LOGIN_REQUEST, (state) => {
            state.isLoading = true;
        })
        .addCase(LOGIN_SUCCESS, (state, action) => {
            state.isLoading = false;
            state.Authenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        })
        .addCase(LOGIN_FAILURE, (state, action) => {
            state.isLoading = false;
            state.Authenticated = false;
            state.error = action.payload;
        })
        .addCase(GET_MY_PROFILE_REQUEST, (state) => {
            state.isLoading = true;
        })
        .addCase(GET_MY_PROFILE_SUCCESS, (state, action) => {
            state.isLoading = false;
            state.Authenticated = true;
            state.user = action.payload.user;
        })
        .addCase(GET_MY_PROFILE_FAILURE, (state, action) => {
            state.isLoading = false;
            state.Authenticated = false;
            state.error = action.payload;
        })
        .addCase(LOAD_USER_REQUEST, (state) => {
            state.isLoading = true;
        })
        .addCase(LOAD_USER_SUCCESS, (state, action) => {
            state.isLoading = false;
            state.Authenticated = true;
            state.user = action.payload.user;
        })
        .addCase(LOAD_USER_FAILURE, (state, action) => {
            state.isLoading = false;
            state.Authenticated = false;
            state.error = action.payload;
        })
        .addCase(LOGOUT_USER_REQUEST, (state) => {
            state.isLoading = true;
        })
        .addCase(LOGOUT_USER_SUCCESS, (state) => {
            state.isLoading = false;
            state.Authenticated = false;
            state.user = null;
            state.message = "Logged out successfully";
        })
        .addCase(LOGOUT_USER_FAILURE, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(CLEAR_ERROR, (state) => {
            state.error = null;
        })
        .addCase(CLEAR_MESSAGE, (state) => {
            state.message = null;
        });
});
