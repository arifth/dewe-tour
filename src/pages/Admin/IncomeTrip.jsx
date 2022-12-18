import React from "react"
import { Base } from "../../components/Base"
import Footer from "../../components/Footer"
import ListTour from "../../components/ListTour"
import NavBar from "../../components/NavBar"
import { Col, Row, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
export default function IncomeTrip({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate()

  const handleButton = () => {
    navigate("/addTrip")
  }
  const title = "add Trip"
  return (
    <Base>
      <NavBar bgNav={"url(/heroBg.png)"} />
      <Row style={{ marginTop: "10rem" }}>
        <Col className="col-8 text-primary"></Col>
        <Col className="col-4">
          <Button onClick={handleButton}>add Trip</Button>
        </Col>
      </Row>
      <ListTour title={title} />
      <Footer />
    </Base>
  )
}
