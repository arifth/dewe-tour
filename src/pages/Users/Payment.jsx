import React, { useState } from "react"
import { Base } from "../../components/Base"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import InfoDetail from "../../components/InfoDetail"
import { Container, Row, Image, Col, Button } from "react-bootstrap"

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
        style={{ width: "80vw", marginTop: "3rem" }}
        className="mb-5 "
      >
        <Row>
          <h1
            className="col-12"
            diu
            style={{
              textAlign: "start",
              display: "block",
              marginTop: "10rem",
              fontWeight: 800,
              fontSize: "4rem"
            }}
          >
            This is Payment
          </h1>

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
