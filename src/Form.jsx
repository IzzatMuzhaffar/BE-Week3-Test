import { useContext, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from './firebase'
import { getAuth } from 'firebase/auth'
import { AuthContext } from './AuthProvider'
import { useNavigate } from 'react-router-dom'


export default function UserForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])

    const auth = getAuth()
    const navigate = useNavigate()
    const { currentUser } = useContext(AuthContext)

    if (!currentUser) {
        navigate("/login")
    }

    const handleSave = async (e) => {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, "users"), {
                email: email,
                password: password
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setEmail('')
        setPassword('')
    }

    const handleShowUsers = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        const docs = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        setUsers(docs)
    }

    return (
        <Container>
            <h1>User signup</h1>
            <Form>
                <Form.Group className='mb-3' controlId='form'>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter email' value={email} />
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter password' value={password} />
                </Form.Group>
                <Button className='rounded-pill mb-3' type='submit' onClick={handleSave}>
                    Submit
                </Button>
            </Form>

            <h3>Show users</h3>
            <Button className='rounded-pill mb-3' onClick={handleShowUsers}>
                Show
            </Button>
            {users.map((user) => (
                <div key={user.id}>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                </div>
            ))}
        </Container>
    )
}
