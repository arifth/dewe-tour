import React from "react"
import { Container } from "react-bootstrap"
import CardTour from "./CardTour"

export default function ListTour() {
  return (
    <>
      <Container className="my-5 d-flex align-items-center justify-content-center flex-column mb-5">
        <h1>Group Tours</h1>
        <Container className="my-5 d-flex flex-row flex-wrap gap-5">
          <CardTour />
          <CardTour />
          <CardTour />
          <CardTour />
          <CardTour />
          <CardTour />
        </Container>
      </Container>
    </>
  )
}
