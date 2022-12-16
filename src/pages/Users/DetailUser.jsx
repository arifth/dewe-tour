import React, { useState } from "react"
import { Base } from "../../components/Base"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { Container, Row, Image, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
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
        style={{ width: "80vw", marginTop: "3rem", border: "none" }}
        className="mb-5 p-2 "
      >
        <Row>
          <Row
            className="card mx-auto"
            style={{
              maxWidth: "1200px",
              marginBottom: "200px",
              marginTop: "10rem",
              border: "none"
            }}
          >
            <div className="row g-0">
              <div className="card-body col-6">
                <h5
                  className="card-title mb-5"
                  style={{ fontWeight: 800, fontSize: "2.5rem" }}
                >
                  Personal Info
                </h5>
                <div className="d-flex mb-3">
                  <div>
                    <Image
                      fluid
                      src="/personalIcon1.png"
                      alt=""
                      height={"50px"}
                      width={"50x"}
                      style={{ marginRight: "1rem" }}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <div>
                      <h4 style={{ fontWeight: 500 }}>Joko Bodo</h4>
                    </div>
                    <div>
                      <h5 className="text-muted">Full Name</h5>
                    </div>
                  </div>
                </div>

                <div className="d-flex mb-3 ">
                  <div>
                    <Image
                      fluid
                      src="/local_post_office.svg"
                      alt=""
                      height={"50px"}
                      width={"50x"}
                      style={{ marginRight: "1rem" }}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <div>
                      <h4 style={{ fontWeight: 500 }}>radifgans@gmail.com</h4>
                    </div>
                    <div>
                      <h5 className="text-muted">Email</h5>
                    </div>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <div>
                    <Image
                      fluid
                      src="/local_phone.png"
                      alt=""
                      height={"50px"}
                      width={"50x"}
                      style={{ marginRight: "1rem" }}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <div>
                      <h4 style={{ fontWeight: 500 }}>0812-8623-8911</h4>
                    </div>
                    <div>
                      <h5 className="text-muted">Mobile Phone</h5>
                    </div>
                  </div>
                </div>

                <div className="d-flex mb-5">
                  <div>
                    <Image
                      fluid
                      src="/place.png"
                      alt=""
                      height={"50px"}
                      width={"50x"}
                      style={{ marginRight: "1rem" }}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <div>
                      <h4 style={{ fontWeight: 500 }}>place.png</h4>
                    </div>
                    <div>
                      <h5 className="text-muted">Address</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 mt-2 overflow-hidden">
                <img
                  src="/photoBg.png"
                  className=" rounded-start mt-3"
                  alt="..."
                />
                <Row className="d-flex mx-auto">
                  <Button
                    className="text-white mt-2 "
                    style={{
                      height: "auto",
                      fontSize: "1.5rem",
                      padding: "1rem",
                      marginBottom: "3rem"
                    }}
                  >
                    <Link
                      to={"/payment"}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Change Photo Profile
                    </Link>
                  </Button>
                </Row>
              </div>
            </div>
          </Row>
        </Row>

        <h2 className="mb-5">History Trip </h2>

        <HistoryOrder />
      </Container>
      <Footer />
    </Base>
  )
}
