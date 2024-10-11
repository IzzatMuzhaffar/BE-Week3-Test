import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { saveUser } from './features/users/userSlice'

export default function Form() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleSave = () => {
        dispatch(saveUser({ username, password }))
            .then(setUsername(""))
            .then(setPassword(""))
    }

    return (
        <div>
            <Form>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control onChange={(e) => setUsername(e.target.value)} type='email' placeholder='Enter email' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                </Form.Group>
                <Button className='rounded-pill' type='submit' onClick={handleSave}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}
Form