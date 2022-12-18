import React from "react"
import { Navigate, Outlet } from "react-router-dom"

export default function PrivateLogin() {
  console.log(JSON.parse(localStorage.getItem("isLoggedIn")))
  return (
    <>
      {/* to avoid route not redirecting to home ,condition must be set so false one got evaluated first ,ok , */}
      {!JSON.parse(localStorage.getItem("isLoggedIn")) ? (
        <Navigate to="/" />
      ) : (
        <Outlet />
      )}
    </>
  )
}
