import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Users/Home"
import DetailTour from "./pages/Users/DetaiTour"
import DetailUser from "./pages/Users/DetailUser"
import Payment from "./pages/Users/Payment"
import IncomingTrips from "./pages/Admin/IncomingTrips"
import { ListTours } from "./data/ListTours"
import { users } from "./data/ListUsers"
import PrivateLogin from "./components/PrivateLogin"
import PrivateLoginAdmin from "./components/PrivateLoginAdmin"
import { isLogIn } from "./data/IsLoggedIn"
import { isAdmin } from "./data/isAdmin"

export default function App() {
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLogIn))
  })

  useEffect(() => {
    localStorage.setItem("isAdmin", JSON.stringify(isAdmin))
  })

  useEffect(() => {
    localStorage.setItem("listUsers", JSON.stringify(users))
  })

  useEffect(() => {
    localStorage.setItem("listTours", JSON.stringify(ListTours))
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail-tour/:id" element={<DetailTour />} />
          <Route element={<PrivateLogin isLoggedIn={isLogIn} />}>
            <Route exact path="/IncomingTrips" element={<IncomingTrips />} />
            <Route path="/detail-user" element={<DetailUser />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/trips-history" element={<IncomingTrips />} />
            <Route path="/detail-tour" element={<DetailTour />} />
            <Route path="/detail-user" element={<DetailUser />} />
            <Route path="/payment" element={<Payment />} />
          </Route>
          <Route element={<PrivateLoginAdmin />}>
            <Route exact path="/IncomingTrips" element={<IncomingTrips />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
