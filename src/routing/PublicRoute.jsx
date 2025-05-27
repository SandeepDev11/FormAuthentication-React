import React from 'react'
import { Route, Routes } from 'react-router'
import { About, Dashboard, Home, Login } from '../pages'
import App from '../App'
import PrivateRoute from './PrivateRoute'

const PublicRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="login" element={<Login />} />
                    <Route path="dashboard" element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    } />
                </Route>
            </Routes>
        </>
    )
}

export default PublicRoute
