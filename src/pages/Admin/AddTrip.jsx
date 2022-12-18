import React, { useEffect, useState } from "react"
import { Base } from "../../components/Base"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { Container, Row, Button, Form, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function AddTrip({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate()
  const [listTours, setListTours] = useState({})

  useEffect(() => {
    const data = localStorage.getItem("listTours")
    if (data) {
      setListTours(JSON.parse(data))
    }
    // listTours?.forEach((element) => {
    //   console.log(element)
    // })
  }, [])
  const [input, setInput] = React.useState({
    id: 0,
    title_trip: "",
    duration: "",
    country: "",
    accomodation: "",
    transportation: "",
    eat: "",
    duration_day: "",
    duration_night: "",
    date_trip: "",
    price: 0,
    quota: "",
    desc: "",
    img: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const asdf = Object.keys(input).length++

    // BUG: id number sometimes showed up , sometimes not ,mmg pantex
    setInput({ ...input, id: asdf })

    setInput({
      ...input,
      duration: `${input.duration_day}day + ${input.duration_night} Night `
    })

    // TODO[]: logic for insert new object in an array of objects
    // set new object to liststorage

    // this work
    localStorage.removeItem("listTours")
    const result = [...listTours, input]
    localStorage.setItem("listTours", JSON.stringify(result))
    console.log(result)
    navigate("/")
  }

  const handleChange = (e) => {
    // e.preventDefault()
    const value = e.target.value

    setInput({ ...input, [e.target.name]: value })
    // console.log(input)
  }
  return (
    <Base>
      <NavBar
        bgNav={"url(/heroBg.png)"}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Container
        fluid
        style={{ width: "80vw", height: "200vh" }}
        className="mb-5 "
      >
        <Row style={{ marginTop: "10rem", marginBottom: "2rem" }}>
          <Col className="col-4">
            <h2>Add Trip</h2>
          </Col>
          <Col className="col-8"></Col>
        </Row>
        <Form style={{ width: "80vw" }}>
          <Form.Group className="mb-3" controlId="formBasicTitleTrip">
            <Form.Label style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Title Trip
            </Form.Label>
            <Form.Control
              required
              name="title_trip"
              value={input.title_trip}
              onChange={handleChange}
              type="text"
              style={{
                height: "3.5rem",
                border: "2px solid #B1B1B1",
                background: "#C4C4C4",
                color: "black"
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitleCountry">
            <Form.Label style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Country
            </Form.Label>
            <Form.Control
              required
              name="country"
              value={input.country}
              onChange={handleChange}
              type="text"
              placeholder="Indonesia"
              style={{
                height: "3.5rem",
                border: "2px solid #B1B1B1",
                background: "#C4C4C4",
                color: "black"
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitleAccomodation">
            <Form.Label style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Accomodation
            </Form.Label>
            <Form.Control
              required
              name="accomodation"
              value={input.accomodation}
              onChange={handleChange}
              type="text"
              style={{
                height: "3.5rem",
                border: "2px solid #B1B1B1",
                background: "#C4C4C4",
                color: "black"
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitleTransportation">
            <Form.Label style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Transportation
            </Form.Label>
            <Form.Control
              required
              name="transportation"
              value={input.transportation}
              onChange={handleChange}
              type="text"
              style={{
                height: "3.5rem",
                border: "2px solid #B1B1B1",
                background: "#C4C4C4",
                color: "black"
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitleEat">
            <Form.Label style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Eat
            </Form.Label>
            <Form.Control
              required
              name="eat"
              value={input.eat}
              onChange={handleChange}
              type="text"
              style={{
                height: "3.5rem",
                border: "2px solid #B1B1B1",
                background: "#C4C4C4",
                color: "black"
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitleTrip">
            <Form.Label style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Duration
            </Form.Label>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Form.Control
                required
                name="duration_day"
                value={input.duration_day}
                onChange={handleChange}
                type="number"
                style={{
                  width: "30%",
                  height: "3.5rem",
                  border: "2px solid #B1B1B1",
                  background: "#C4C4C4",
                  color: "black"
                }}
              />
              <h2>Day</h2>
              <Form.Control
                required
                name="duration_night"
                value={input.duration_night}
                onChange={handleChange}
                type="number"
                style={{
                  width: "30%",
                  height: "3.5rem",
                  border: "2px solid #B1B1B1",
                  background: "#C4C4C4",
                  color: "black"
                }}
              />
              <h3>Night</h3>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitleEat">
            <Form.Label style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Date Trip
            </Form.Label>
            <Form.Control
              required
              name="date_trip"
              value={input.date_trip}
              onChange={handleChange}
              type="date"
              style={{
                height: "3.5rem",
                border: "2px solid #B1B1B1",
                background: "#C4C4C4",
                color: "black"
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitleEat">
            <Form.Label style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Price
            </Form.Label>
            <Form.Control
              required
              name="price"
              value={input.price}
              onChange={handleChange}
              type="number"
              style={{
                height: "3.5rem",
                border: "2px solid #B1B1B1",
                background: "#C4C4C4",
                color: "black"
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitleEat">
            <Form.Label style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Quota
            </Form.Label>
            <Form.Control
              required
              name="quota"
              value={input.quota}
              onChange={handleChange}
              type="text"
              style={{
                height: "3.5rem",
                border: "2px solid #B1B1B1",
                background: "#C4C4C4",
                color: "black"
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTitleEat">
            <Form.Label style={{ fontWeight: 500, fontSize: "1.5rem" }}>
              Description
            </Form.Label>
            <Form.Control
              required
              name="desc"
              value={input.desc}
              onChange={handleChange}
              as="textarea"
              rows={3}
              style={{
                border: "2px solid #B1B1B1",
                background: "#C4C4C4",
                color: "black"
              }}
            />
          </Form.Group>

          <Form.Group controlId="formFileSm" className="mb-5">
            <Form.Label>Image Attachement</Form.Label>
            <Form.Control
              required
              name="image"
              //   multiple
              value={input.img}
              onChange={handleChange}
              type="file"
              size="sm"
              style={{
                width: "30%",
                border: "2px solid #B1B1B1",
                background: "#C4C4C4",
                color: "black",
                height: "3.5em"
              }}
            />
          </Form.Group>

          <Row>
            <Row className="d-flex justify-content-end">
              <Button
                onClick={handleSubmit}
                type="submit"
                className="text-white align-self-end col-4 "
                style={{
                  fontSize: "1.5rem",
                  padding: "1rem",
                  marginBottom: "3rem",
                  height: "5rem"
                }}
              >
                Add Trip
              </Button>
            </Row>
          </Row>
        </Form>
      </Container>
      <Footer />
    </Base>
  )
}
