import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Protected/home/home'

function Protected() {
  return (
    <Routes>
      <Route path='/home' index element={<Home />} />
      <Route path='*' element={<Navigate to="/home" />} />
    </Routes>
  )
}

export default Protected
