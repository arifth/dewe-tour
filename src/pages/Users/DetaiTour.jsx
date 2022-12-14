import React, { useState } from "react"
import { Base } from "../../components/Base"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

export default function DetailTour() {
  return (
    <Base>
      <NavBar />
      <h1 style={{ textAlign: "center", display: "block", marginTop: "10rem" }}>
        This is DETAIL page motherfather
      </h1>

      <Footer />
    </Base>
  )
}
