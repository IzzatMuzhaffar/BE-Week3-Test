import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

export default function AuthPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const auth = getAuth()
    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        if (currentUser) navigate("/login")
    }, [currentUser, navigate])

    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                username,
                password
            )
            console.log(res.user)
        } catch (error) {
            console.error(error)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await signInWithEmailAndPassword(
                auth,
                username,
                password
            )
            console.log(res.user)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h1>User signup</h1>
            <Form>
                <Form.Group className='mb-3' controlId='form'>
                    <Form.Control onChange={(e) => setUsername(e.target.value)} type='email' placeholder='Enter email' value={username} />
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter password' value={password} />
                </Form.Group>
                <Button className='rounded-pill mb-3' type='submit' onClick={handleSignUp}>
                    Signup
                </Button>
                <Button className='rounded-pill mb-3' type='submit' onClick={handleLogin}>
                    Login
                </Button>
            </Form>
        </div>
    )
}
