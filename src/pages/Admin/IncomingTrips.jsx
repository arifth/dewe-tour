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
import HistoryOrderConfirmation from "../../components/HistoryOrderConfirmation"
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
                  <td>1</td>
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

                <tr>
                  <td>2</td>
                  <td>usman maun</td>
                  <td>@mdo</td>
                  <td>test</td>
                  <td style={{ color: "red" }}>rejected</td>
                  <td>
                    <Button
                      onClick={handleShow}
                      style={{ background: "none", border: "none" }}
                    >
                      <img src="/search.png" alt="" />
                    </Button>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>jafar </td>
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

                <tr>
                  <td>4</td>
                  <td>sbut sj si anu</td>
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

                <tr>
                  <td>5 </td>
                  <td>bbae rmasdf</td>
                  <td>@mdo</td>
                  <td>test</td>
                  <td style={{ color: "orange" }}>pending</td>
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
            <HistoryOrderConfirmation />
          </Modal.Body>
        </Modal>
        <Footer />
      </Base>
    </>
  )
}
