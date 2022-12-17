import React, { useState } from "react"
import { Base } from "../../components/Base"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import "./IncomingTrips.css"
import {
  Container,
  Col,
  Row,
  Table,
  Button,
  Modal,
  Card,
  Image
} from "react-bootstrap"
import HistoryOrder from "../../components/HistoryOrder"
import "./IncomingTrips.css"

export default function IncomingTrips({ isLoggedIn, setIsLoggedIn }) {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <>
      <Base>
        <NavBar
          bgNav={"url(/heroBg.png)"}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Container
          fluid
          style={{ width: "90vw", marginTop: "10rem" }}
          className="mb-5 "
        >
          <Row style={{ marginBottom: "80vh" }}>
            <Table striped bordered hover>
              <thead style={{ fontWeight: 800, fontSize: "1.5rem" }}>
                <tr>
                  <th>No</th>
                  <th>Users</th>
                  <th>Trips</th>
                  <th>Bukti Transfer</th>
                  <th>Status Payment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>test</td>
                  <td style={{ color: "green" }}>succses</td>
                  <td>
                    <Button
                      onClick={handleShow}
                      style={{ background: "none", border: "none" }}
                    >
                      <img src="/search.png" alt="" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
        <Modal
          id="approvement-modal"
          show={show}
          centered
          onHide={handleClose}
          className="rounded-0"
          dialogClassName="approvement-modals"
        >
          <Modal.Body>
            <HistoryOrder />
          </Modal.Body>
        </Modal>
        <Footer />
      </Base>
    </>
  )
}
