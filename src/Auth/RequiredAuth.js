import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useNavigate } from 'react-router'
import auth from './firebase.init'
export const RequiredAuth = ({ children }) => {
  const [user] = useAuthState(auth)
  let location = useLocation()
  let navigate = useNavigate()
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
  }
  return <div>RequiredAuth</div>
}
