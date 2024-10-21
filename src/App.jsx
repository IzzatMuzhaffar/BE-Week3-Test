import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './AuthProvider'
import Form from './Form'
import AuthPage from './AuthPage'

export default function App() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/form" element={<Form />} />
                        <Route path="/login" element={<AuthPage />} />
                        <Route path="*" element={<AuthPage />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}
