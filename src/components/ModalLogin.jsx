import React, { useEffect, useState } from "react"
import { Modal, Button, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function ModalLogin({
  show,
  handleOpen,
  handleClose,
  // setIsLoggedIn
  redirect
}) {
  const navigate = useNavigate()
  // declare variable for users container

  const [listUsers, setListUsers] = useState([])

  // useEffect(() => {
  //   const tours = JSON.parse(localStorage.getItem("listTours"))
  // }, [])

  useEffect(() => {
    setListUsers(JSON.parse(localStorage.getItem("listUsers")))
    console.log(listUsers)
  }, [])

  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    // compare value in form to local storage

    // let admin = false
    // let users = false
    // console.log(admin)
    listUsers.map((k) => {
      if (
        form.email === k.email &&
        listUsers[0].password === parseInt(form.password)
      ) {
        console.log("log as admin")
        localStorage.setItem("isAdmin", true)
        localStorage.setItem("isLoggedIn", true)
        // admin = true
        navigate("/IncomingTrips")
        // console.log(admin)
      } else {
        if (k.email === form.email && parseInt(form.password) === k.password) {
          console.log(k.id)
          localStorage.setItem("isAdmin", false)
          localStorage.setItem("isLoggedIn", true)
          // users = true
          navigate("/payment")
        }
      }
      // console.log(admin)
      // eslint-disable-next-line array-callback-return
    })
  }

  return (
    <Modal show={show} onShow={handleOpen} onHide={handleClose} centered>
      <img
        src="/leftFlower.png"
        alt=""
        style={{ height: "200px", width: "200px", position: "absolute" }}
      />

      <img
        src="/rightFlower.png"
        alt=""
        style={{
          height: "100px",
          width: "100px",
          position: "absolute",
          right: 0,
          top: 0
        }}
      />

      <Modal.Header>
        <Modal.Title
          className="mx-auto"
          style={{ borderBottom: "none", fontSize: "3rem" }}
        >
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{ fontWeight: "800", fontSize: "24px" }}>
              Email
            </Form.Label>
            <Form.Control
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="name@example.com"
              style={{
                background: "#D2D2D2",
                marginBottom: "1rem",
                height: "3rem"
              }}
            />
            <Form.Label style={{ fontWeight: "800", fontSize: "24px" }}>
              Password
            </Form.Label>

            <Form.Control
              name="password"
              type="password"
              onChange={handleChange}
              style={{
                background: "#D2D2D2",
                marginBottom: "1rem",
                height: "3rem"
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="primary"
          onClick={handleSubmit}
          style={{ width: "100%" }}
          className="text-white"
        >
          Login
        </Button>

        <Row style={{ width: "100%" }}>
          <h3
            style={{ fontWeight: 300, textAlign: "center" }}
            className={"text-muted"}
          >
            Don't have an account?{" "}
            <span style={{ fontWeight: 800, cursor: "pointer" }}>
              <a onClick={redirect}>Klik Here</a>
            </span>
          </h3>
        </Row>
      </Modal.Footer>
    </Modal>
  )
}
