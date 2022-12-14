import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Users/Home"
import DetailTour from "./pages/Users/DetaiTour"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route
            path="/detail-tour"
            element={<DetailTour isLoggedIn={isLoggedIn} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}
