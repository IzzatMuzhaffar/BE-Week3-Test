import { configureStore } from '@reduxjs/toolkit'
import usersReducer from "./features/users/userSlice"

export default configureStore({
    reducer: {
        users: usersReducer
    }
})