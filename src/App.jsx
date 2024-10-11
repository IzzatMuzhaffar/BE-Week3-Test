import { Provider } from 'react-redux'
import Form from './Form'
import store from './store'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
    return (
        <>
            <Provider store={store}>
                <Form />
            </Provider>
        </>
    )
}
