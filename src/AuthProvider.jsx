import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { auth } from "./firebase";

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        return auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
    }, [])

    const value = { currentUser }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
