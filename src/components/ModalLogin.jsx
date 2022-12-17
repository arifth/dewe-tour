import React, { useEffect, useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

export default function ModalLogin({
  show,
  handleOpen,
  handleClose,
  isLoggedIn,
  setIsLoggedIn
}) {
  // declare variable for users container
  let listUsers = {}

  useEffect(() => {
    const tours = JSON.parse(localStorage.getItem("listTours"))
  })

  useEffect(() => {
    listUsers = JSON.parse(localStorage.getItem("listUsers"))
  })

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    // compare value in form to local storage

    // console.log(typeof form.password)
    listUsers.map((k) => {
      console.log(listUsers[0].password)
      // console.log(k.email === form.email)
      // console.log(parseInt(form.password) === k.password)
      // console.log(k.password)
      if (
        form.email === k.email &&
        listUsers[0].password === parseInt(form.password)
      ) {
        console.log("log as admin")
        localStorage.setItem("isAdmin", true)
        localStorage.setItem("isLoggedIn", true)
      } else {
        if (k.email === form.email && parseInt(form.password) === k.password) {
          console.log("log as user")
          localStorage.setItem("isAdmin", false)
          localStorage.setItem("isLoggedIn", true)
        }
      }
      // eslint-disable-next-line array-callback-return
      return
    })
    // } else {
    //   listUsers.filter((k) => {
    //     if (k.email === form.email && k.password === form.password) {
    //       localStorage.setItem("isLoggedIn", true)
    //     }
    //   })
    // }
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
      </Modal.Footer>
    </Modal>
  )
}
