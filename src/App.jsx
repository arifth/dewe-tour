import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Users/Home"
import DetailTour from "./pages/Users/DetaiTour"
import DetailUser from "./pages/Users/DetailUser"
import Payment from "./pages/Users/Payment"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [tours, setTours] = useState([
    {
      name: "tour de la pante8",
      desc: "ased asdf"
    },
    {
      name: "2nd name ",
      desc: "apaaan tuh"
    }
  ])

  useEffect(() => {
    localStorage.setItem("listOfTours", JSON.stringify(tours))
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path="/detail-tour"
            element={
              <DetailTour
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/detail-user"
            element={
              <DetailUser
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/payment"
            element={
              <Payment isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}
