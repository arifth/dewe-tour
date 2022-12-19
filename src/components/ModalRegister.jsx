import React, { useEffect, useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

export default function ModalRegister({ show, handleClose }) {
  const navigate = useNavigate()
  const [user, addUser] = useState({
    id: 0,
    isLoggedIn: false,
    full_name: "",
    email: "",
    password: 0,
    phone: 0,
    address: "",
    image: "",
    role: ""
  })
  const [users, addUsers] = useState({
    id: 0,
    isLoggedIn: false,
    full_name: "",
    email: "",
    password: 0,
    phone: 0,
    address: "",
    image: "",
    role: ""
  })
  useEffect(() => {
    const tours = JSON.parse(localStorage.getItem("listTours"))
  })

  useEffect(() => {
    addUsers(JSON.parse(localStorage.getItem("listUsers")))
  })

  // TODO[]: logic for register handling ,get all input from user then put it in ListUsers localstorage
  const handleRegister = (e) => {
    e.preventDefault()
    const result = [...users, user]
    localStorage.removeItem("listUsers")
    localStorage.setItem("listUsers", JSON.stringify(result))
    navigate("/")
    console.log(result)
    alert("registrasi sukses mazzeh")
    handleClose()
  }

  const handleChange = (e) => {
    const value = e.target.value
    addUser({ ...user, [e.target.name]: value })
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
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
          Register
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{ fontWeight: "800", fontSize: "24px" }}>
              Full Name
            </Form.Label>
            <Form.Control
              onChange={handleChange}
              name={"full_name"}
              type="text"
              style={{
                background: "#D2D2D2",
                marginBottom: "1rem",
                height: "3rem"
              }}
            />
            <Form.Label style={{ fontWeight: "800", fontSize: "24px" }}>
              Email
            </Form.Label>
            <Form.Control
              onChange={handleChange}
              name={"email"}
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
              onChange={handleChange}
              name={"password"}
              type="password"
              style={{
                background: "#D2D2D2",
                marginBottom: "1rem",
                height: "3rem"
              }}
            />
            <Form.Label style={{ fontWeight: "800", fontSize: "24px" }}>
              Phone
            </Form.Label>
            <Form.Control
              onChange={handleChange}
              name={"phone"}
              type="number"
              style={{
                background: "#D2D2D2",
                marginBottom: "1rem",
                height: "3rem"
              }}
            />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{ fontWeight: "800", fontSize: "24px" }}>
                Address
              </Form.Label>
              <Form.Control
                onChange={handleChange}
                name={"address"}
                as="textarea"
                rows={3}
                style={{
                  background: "#D2D2D2",
                  marginBottom: "1rem",
                  height: "7rem"
                }}
              />
            </Form.Group>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Link to={"/trips-history"}>
          <Button
            variant="primary"
            style={{ width: "100%" }}
            className="text-white"
            onClick={handleRegister}
          >
            Register
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  )
}
