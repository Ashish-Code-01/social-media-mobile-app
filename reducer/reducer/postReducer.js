import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    message: null,
    error: null,
};


export const CREATE_POST_REQUEST = createAction("CREATE_POST_REQUEST");
export const CREATE_POST_SUCCESS = createAction("CREATE_POST_SUCCESS");
export const CREATE_POST_FAILURE = createAction("CREATE_POST_FAILURE");

export const PostReducer = createReducer(initialState, (builder) => {
    builder
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
});
