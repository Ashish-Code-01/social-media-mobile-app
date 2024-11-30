import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    user: null,
    users: null,
    message: null,
    error: null,
};

// Action Creators
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

export const FORGOT_PASSWORD_REQUEST = createAction("FORGOT_PASSWORD_REQUEST");
export const FORGOT_PASSWORD_SUCCESS = createAction("FORGOT_PASSWORD_SUCCESS");
export const FORGOT_PASSWORD_FAILURE = createAction("FORGOT_PASSWORD_FAILURE");

export const CREATE_POST_REQUEST = createAction("CREATE_POST_REQUEST");
export const CREATE_POST_SUCCESS = createAction("CREATE_POST_SUCCESS");
export const CREATE_POST_FAILURE = createAction("CREATE_POST_FAILURE");

export const REGISTER_USER_REQUEST = createAction("REGISTER_USER_REQUEST");
export const REGISTER_USER_SUCCESS = createAction("REGISTER_USER_SUCCESS");
export const REGISTER_USER_FAILURE = createAction("REGISTER_USER_FAILURE");

export const GET_ALL_USER_REQUEST = createAction("GET_ALL_USER_REQUEST");
export const GET_ALL_USER_SUCCESS = createAction("GET_ALL_USER_SUCCESS");
export const GET_ALL_USER_FAILURE = createAction("GET_ALL_USER_FAILURE");

// Reducer
export const UserAuthentication = createReducer(initialState, (builder) => {
    builder
        .addCase(LOGIN_REQUEST, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(LOGIN_SUCCESS, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message || "Login successful";
        })
        .addCase(LOGIN_FAILURE, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.error = action.payload || "Login failed";
        })
        .addCase(REGISTER_USER_REQUEST, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(REGISTER_USER_SUCCESS, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message || "Registration successful";
        })
        .addCase(REGISTER_USER_FAILURE, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.error = action.payload || "Registration failed";
        })
        .addCase(GET_MY_PROFILE_REQUEST, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(GET_MY_PROFILE_SUCCESS, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        })
        .addCase(GET_MY_PROFILE_FAILURE, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.error = action.payload || "Failed to load profile";
        })
        .addCase(LOAD_USER_REQUEST, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(LOAD_USER_SUCCESS, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        })
        .addCase(LOAD_USER_FAILURE, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.error = action.payload || "Failed to load user";
        })
        .addCase(LOGOUT_USER_REQUEST, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(LOGOUT_USER_SUCCESS, (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.message = "Logged out successfully";
        })
        .addCase(LOGOUT_USER_FAILURE, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || "Logout failed";
        })
        .addCase(FORGOT_PASSWORD_REQUEST, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(FORGOT_PASSWORD_SUCCESS, (state, action) => {
            state.isLoading = false;
            state.message = action.payload?.message || "Password reset link sent";
        })
        .addCase(FORGOT_PASSWORD_FAILURE, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || "Failed to send reset link";
        })
        .addCase(CREATE_POST_REQUEST, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(CREATE_POST_SUCCESS, (state, action) => {
            state.isLoading = false;
            state.message = action.payload?.message || "Post created successfully";
        })
        .addCase(CREATE_POST_FAILURE, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || "Failed to create post";
        })
        .addCase(GET_ALL_USER_REQUEST, (state) => {
            state.isLoading = true;
        })
        .addCase(GET_ALL_USER_SUCCESS, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        })
        .addCase(GET_ALL_USER_FAILURE, (state, action) => {
            state.loading = false;
            state.error = action.payload || "User not found";
        })
        // Clear Error and Message
        .addCase(CLEAR_ERROR, (state) => {
            state.error = null; 
        })
        .addCase(CLEAR_MESSAGE, (state) => {
            state.message = null;
        });
});
