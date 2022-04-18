import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
// import { Navigate, useNavigate } from 'react-router'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'
import auth from './firebase.init'
export const RequiredAuth = ({ children }) => {
  const [user] = useAuthState(auth)
  let location = useLocation()
  let navigate = useNavigate()
  if (!user) {
    return (
      <Navigate to="/register" state={{ from: location }} replace></Navigate>
    )
  }
  return children
}
