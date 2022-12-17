import React from "react"
import { Navigate, Outlet } from "react-router-dom"

export default function PrivateLoginAdmin({ isLoggedIn, isAdmin }) {
  return <>{!isLoggedIn && !isAdmin ? <Navigate to="/" /> : <Outlet />}</>
}
