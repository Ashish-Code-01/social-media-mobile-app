import { configureStore } from "@reduxjs/toolkit"
import { UserAuthentication } from "../reducer/userReducer"

export const store = configureStore({
    reducer: {
        auth: UserAuthentication,
    }
})
