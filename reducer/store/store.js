import { configureStore } from "@reduxjs/toolkit"
import { UserAuthentication } from "../reducer/userReducer"
import { PostReducer } from "../reducer/postReducer"

export const store = configureStore({
    reducer: {
        auth: UserAuthentication,
        post: PostReducer
    }
})
