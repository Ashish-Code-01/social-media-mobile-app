import { configureStore } from "@reduxjs/toolkit"
import { UserAuthentication } from "../reducer/reducer"

export const store = configureStore({
    reducer: {
        auth: UserAuthentication
    }
})
