import React from 'react'
import LoginIndex from '../pages/auth/login'
import SignUpIndex from '../pages/auth/signup'
import { Navigate, Route, Routes } from 'react-router-dom'


function Auth() {
  return (
    <Routes>
    <Route path='/' element={<LoginIndex />} />
    <Route path='/sign-up' element={<SignUpIndex />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
  )
}

export default Auth