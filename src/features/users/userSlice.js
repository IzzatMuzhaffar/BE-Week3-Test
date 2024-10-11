import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../../firebase"

// action/message saveUser
export const saveUser = createAsyncThunk(
    "users/saveUser",
    async ({ username, password }) => {
        try {
            const usersRef = collection(db, `/users`)
            const newUserRef = doc(usersRef)
            await setDoc(newUserRef, { username, password })
            const newUser = await getDoc(newUserRef)

            const user = {
                id: newUser.id,
                ...newUser.data()
            }

            return user
        } catch (error) {
            console.error(error)
            throw error
        }
    }
)

// Slice
const usersSlice = createSlice({
    name: "users",
    initialState: { users: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveUser.fulfilled, (state, action) => {
                state.users = [action.payload, ...state.users]
            })
    }
})

export default usersSlice.reducer