import React from "react"
import { Modal, Button, Form } from "react-bootstrap"

export default function ModalRegister({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
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
              type="email"
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
              type="email"
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
              type="email"
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
        <Button
          variant="primary"
          onClick={handleClose}
          style={{ width: "100%" }}
          className="text-white"
        >
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
