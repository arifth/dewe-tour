import React from "react"
import { Navigate, Outlet } from "react-router-dom"

export default function PrivateLogin({ isLoggedIn }) {
  return <>{!isLoggedIn ? <Navigate to="/" /> : <Outlet />}</>
}
