import React, { useState, useEffect } from "react"
import { Base } from "../../components/Base"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
// import InfoDetail from "../../components/InfoDetail"
import { Container, Row, Image, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

export default function DetailTour({ isLoggedIn, setIsLoggedIn }) {
  const [counter, setCounter] = useState(1)

  const handleAdder = () => {
    setCounter(() => counter + 1)
  }

  const handleReducer = () => {
    if (counter > 1) {
      setCounter(() => counter - 1)
    }
  }

  const handleTotal = (untotaled) => {
    return parseInt(counter) * parseInt(untotaled)
  }

  let { id } = useParams()
  console.log(typeof id)

  const [tours, setTours] = useState([])

  useEffect(() => {
    const data = localStorage.getItem("listTours")

    if (data) {
      setTours(JSON.parse(data))
    }
  }, [])

  // console.log(data.id)

  return (
    <Base>
      <NavBar
        bgNav={"url(/heroBg.png)"}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      {tours.map((key) => {
        if (key.id === parseInt(id)) {
          return (
            <Container fluid style={{ width: "80vw" }} className="mb-5">
              <Row>
                <h1
                  className="col-12"
                  style={{
                    textAlign: "start",
                    display: "block",
                    marginTop: "10rem",
                    fontWeight: 800,
                    fontSize: "4rem"
                  }}
                >
                  {key.title_trip}
                </h1>
                <h3 col-12 className="text-secondary mb-3">
                  {key.country}
                </h3>
                <Image
                  src={`/img_tours/${key.country}/${key.img}.jpg`}
                  className="col-12 mb-5"
                  rounded
                  height={"500px"}
                  style={{ objectFit: "cover" }}
                />
                <Image
                  src="/detailBig.png"
                  className="col-4"
                  rounded
                  height={"230px"}
                />
                <Image
                  src="/detailBig.png"
                  className="col-4"
                  rounded
                  height={"230px"}
                />
                <Image
                  src="/detailBig.png"
                  className="col-4"
                  rounded
                  height={"230px"}
                />
                <h2 col-12 className="mt-5 mb-5">
                  Information Trip
                </h2>
                <Container
                  fluid
                  className="d-flex gap-5 align-item-center justify-content-between "
                >
                  <Row
                    col-12
                    className="d-flex align-item-center justify-content-center"
                  >
                    <Col col-3 className="d-flex flex-column ">
                      <h5
                        className="text-secondary"
                        col-12
                        style={{ color: "#A8A8A8" }}
                      >
                        Accomodation
                      </h5>

                      <h3
                        style={{
                          display: "flex",
                          textAlign: "start",
                          alignItems: "end"
                        }}
                      >
                        <Image
                          src="/iconHome.png"
                          height={"25px"}
                          width={"25px"}
                          className="mt-3 me-2"
                          style={{ margin: "auto" }}
                        />
                        {key.accomodation}
                      </h3>
                    </Col>
                  </Row>
                  <Row
                    col-12
                    className="d-flex align-item-center justify-content-center"
                  >
                    <Col col-3 className="d-flex flex-column ">
                      <h5
                        className="text-secondary"
                        col-12
                        style={{ color: "#A8A8A8" }}
                      >
                        Transportation
                      </h5>

                      <h3
                        style={{
                          display: "flex",
                          textAlign: "start",
                          alignItems: "end"
                        }}
                      >
                        <Image
                          src="/plane.svg"
                          height={"25px"}
                          width={"25px"}
                          className="mt-3 me-2"
                          style={{ margin: "auto" }}
                        />
                        {key.accomodation}
                      </h3>
                    </Col>
                  </Row>

                  <Row
                    col-12
                    className="d-flex align-item-center justify-content-center"
                  >
                    <Col col-3 className="d-flex flex-column ">
                      <h5
                        className="text-secondary"
                        col-12
                        style={{ color: "#A8A8A8" }}
                      >
                        Eat
                      </h5>

                      <h3
                        style={{
                          display: "flex",
                          textAlign: "start",
                          alignItems: "end"
                        }}
                      >
                        <Image
                          src="/meal.png"
                          height={"25px"}
                          width={"25px"}
                          className="mt-3 me-2"
                          style={{ margin: "auto" }}
                        />
                        {key.eat}
                      </h3>
                    </Col>
                  </Row>

                  <Row
                    col-12
                    className="d-flex align-item-center justify-content-center"
                  >
                    <Col col-3 className="d-flex flex-column ">
                      <h5
                        className="text-secondary"
                        col-12
                        style={{ color: "#A8A8A8" }}
                      >
                        Duration
                      </h5>

                      <h3
                        style={{
                          display: "flex",
                          textAlign: "start",
                          alignItems: "end"
                        }}
                      >
                        <Image
                          src="/calendar.png"
                          height={"25px"}
                          width={"25px"}
                          style={{ margin: "auto" }}
                          className="mt-3 me-2"
                        />
                        {key.duration}
                      </h3>
                    </Col>
                  </Row>

                  <Row
                    col-12
                    className="d-flex align-item-center justify-content-center"
                  >
                    <Col col-3 className="d-flex flex-column ">
                      <h5
                        className="text-secondary"
                        col-12
                        style={{ color: "#A8A8A8" }}
                      >
                        Trip
                      </h5>

                      <h3
                        style={{
                          display: "flex",
                          textAlign: "start",
                          alignItems: "end"
                        }}
                      >
                        <Image
                          src="/time.png"
                          height={"25px"}
                          width={"25px"}
                          className="mt-3 me-2"
                          style={{ margin: "auto" }}
                        />
                        {key.date_trip}
                      </h3>
                    </Col>
                  </Row>
                </Container>

                <h2 col-12 className="mt-5">
                  Description
                </h2>
                <p
                  col-12
                  className="text-secondary mt-5 mb-5 "
                  style={{ lineHeight: "2rem" }}
                >
                  {key.desc}
                </p>
                <Row
                  className="d-flex justify-content-between align-item-center mb-5"
                  style={{ borderBottom: "1px solid #B7B7B7" }}
                >
                  <h2 className="col-4">
                    <span className="text-primary">
                      IDR. {key.price.toLocaleString()}
                    </span>{" "}
                    /Person
                  </h2>
                  <Col
                    className="col-2"
                    style={{
                      alignSelf: "center",
                      display: "flex",
                      justifyContent: "end"
                    }}
                  >
                    <div className="d-flex align-item-baseline justify-content-baseline ">
                      <div onClick={handleReducer} style={{ margin: "auto" }}>
                        <img
                          src="/Minus.png"
                          alt=""
                          srcset=""
                          style={{ marginRight: "1rem", cursor: "Pointer" }}
                        />
                      </div>
                      <div>
                        <h1 className="text-primary">{counter}</h1>
                      </div>

                      <div onClick={handleAdder} style={{ margin: "auto" }}>
                        <img
                          src="/Plus.png"
                          alt=""
                          srcset=""
                          style={{ marginLeft: "1rem", cursor: "Pointer" }}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row
                  className="d-flex justify-content-between align-item-center mb-5"
                  style={{ borderBottom: "1px solid #B7B7B7" }}
                >
                  <h2 className="col-4 ">Total</h2>
                  <Col
                    className="col-4"
                    style={{ alignSelf: "end", textAlign: "end" }}
                  >
                    <h1 className="text-primary">
                      {handleTotal(key.price).toLocaleString()}
                    </h1>
                  </Col>
                </Row>
                <Row className="d-flex " style={{ justifyContent: "end" }}>
                  <Link
                    to={"/payment"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      alignSelf: "end"
                    }}
                    className="col-4 "
                  >
                    <Button
                      className="text-white "
                      style={{
                        height: "4rem",
                        fontSize: "1.5rem",
                        padding: "1rem",
                        marginBottom: "3rem",
                        width: "100%"
                      }}
                    >
                      Book Now
                    </Button>
                  </Link>
                </Row>
              </Row>
            </Container>
          )
        }
      })}
      <Footer />
    </Base>
  )
}
