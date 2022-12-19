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
import { idUser } from "./data/idUser"
import AddTrip from "./pages/Admin/AddTrip"
import IncomeTrip from "./pages/Admin/IncomeTrip"
import PaymentWaitingApproval from "./components/PaymentWaitingApproval"

//  TODO[]: create Mockup for Add Trip and List Trip ( admin )
//  TODO[]: create dummy data for payment history in localstorage
//  TODO[]: handle for dynamically render image and other`s image
//  TODO[]: create modal for click button on page
//  TODO[]: create another order history with rendered approval from admin
//  TODO[]: create different dropdown for admin login
//  TODO[]: add more data for payment list in admin page
//  TODO[]: create different History order with aprove and cancel button

export default function App() {
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLogIn))
  })

  useEffect(() => {
    localStorage.setItem("idUser", JSON.stringify(idUser))
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

          {/* Private Login Route User */}
          <Route element={<PrivateLogin isLoggedIn={isLogIn} />}>
            <Route path="/detail-user/:id" element={<DetailUser />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/detail-tour" element={<DetailTour />} />
            <Route
              path="/pendingApproval"
              element={<PaymentWaitingApproval />}
            />
          </Route>
          {/* Private Login Admin */}
          <Route
            element={
              <PrivateLoginAdmin isLoggedIn={isLogIn} isAdmin={isAdmin} />
            }
          >
            <Route path="/incomeTrip" element={<IncomeTrip />} />
            <Route path="/addTrip" element={<AddTrip />} />
            <Route exact path="/IncomingTrips" element={<IncomingTrips />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
