import React from "react"
import { Card } from "react-bootstrap"

export default function CardTour() {
  return (
    <>
      <Card
        style={{ width: "350px", padding: "1rem 1rem 0 1rem" }}
        className="d-flex flex-column justify-content-center align-item-center "
      >
        <Card.Img variant="top" src="/ImgCard1a.png" />
        <Card.Body>
          <Card.Title>6D/4N Fun Tassie Vacation ...</Card.Title>
          <div
            className="d-flex justify-content-between"
            style={{
              alignSelf: "end",
              width: "100%",
              marginTop: "2rem",
              padding: 0
            }}
          >
            <Card.Text className="text-primary">IDR. 12,398,000</Card.Text>
            <Card.Text className="text-muted">Australia</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
