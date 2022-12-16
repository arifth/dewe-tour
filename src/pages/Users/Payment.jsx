import React, { useState } from "react"
import { Base } from "../../components/Base"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { Container, Row, Button } from "react-bootstrap"
import HistoryOrder from "../../components/HistoryOrder"

export default function DetailTour({ isLoggedIn, setIsLoggedIn }) {
  return (
    <Base>
      <NavBar
        bgNav={"url(/heroBg.png)"}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Container
        fluid
        style={{ width: "80vw", marginTop: "10px" }}
        className="mb-5 "
      >
        <Row>
          <HistoryOrder />
          <Row className="d-flex justify-content-end">
            <Button
              className="text-white align-self-end col-4 "
              style={{
                height: "4rem",
                fontSize: "1.5rem",
                padding: "1rem",
                marginBottom: "3rem"
              }}
            >
              PAY NOW
            </Button>
          </Row>
        </Row>
      </Container>
      <Footer />
    </Base>
  )
}
