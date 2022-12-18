import React, { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import CardTour from "./CardTour"

export default function ListTour({ title }) {
  title = "Group of Tours "
  const [tours, setTours] = useState([
    {
      id: "",
      img: "",
      title_trip: "",
      price: 0,
      country: "",
      quota: ""
    }
  ])

  useEffect(() => {
    const data = localStorage.getItem("listTours")

    if (data) {
      setTours(JSON.parse(data))
    }
    // console.log(data)
  }, [])

  // console.log(tours)
  return (
    <>
      <Container className="my-5 d-flex align-items-center justify-content-center flex-column mb-5">
        <h1>{title}</h1>
        <Container className="my-5 d-flex flex-row flex-wrap align-items-center justify-content-center gap-5">
          {tours.map((k) => (
            <CardTour
              id={k.id}
              img={k.img}
              title_trip={k.title_trip}
              price={k.price}
              country={k.country}
              quota={k.quota}
            />
          ))}
        </Container>
      </Container>
    </>
  )
}
