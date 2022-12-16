import React, { useState } from "react"
import { Base } from "../../components/Base"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import InfoDetail from "../../components/InfoDetail"
import { Container, Row, Image, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function DetailTour({ isLoggedIn, setIsLoggedIn }) {
  return (
    <Base>
      <NavBar
        bgNav={"url(/heroBg.png)"}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Container fluid style={{ width: "80vw" }} className="mb-5">
        <Row>
          <h1
            className="col-12"
            style={{
              textAlign: "start",
              display: "block",
              marginTop: "10rem",
              fontWeight: 800,
              fontSize: "4rem"
            }}
          >
            This is DETAIL PAGE motherfather
          </h1>
          <h3 col-12 className="text-secondary mb-3">
            Australia
          </h3>
          <Image
            src="/detailBig.png"
            className="col-12 mb-5"
            rounded
            height={"500px"}
          />
          <Image
            src="/detailBig.png"
            className="col-4"
            rounded
            height={"230px"}
          />
          <Image
            src="/detailBig.png"
            className="col-4"
            rounded
            height={"230px"}
          />
          <Image
            src="/detailBig.png"
            className="col-4"
            rounded
            height={"230px"}
          />
          <h2 col-12 className="mt-5 mb-5">
            Information Trip
          </h2>
          <Container
            fluid
            className="d-flex gap-5 align-item-center justify-content-between "
          >
            <InfoDetail />
            <InfoDetail />
            <InfoDetail />
            <InfoDetail />
            <InfoDetail />
          </Container>

          <h2 col-12 className="mt-5">
            Description
          </h2>
          <p
            col-12
            className="text-secondary mt-5 mb-5 "
            style={{ lineHeight: "2rem" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quas sit earum aliquid? Eius amet voluptatem officiis, at illum
            consectetur, temporibus reprehenderit, esse magnam aspernatur
            distinctio dolorum ducimus corrupti facilis eos praesentium.
            Laboriosam veniam ad rem enim, atque aut dolor nobis beatae
            voluptate voluptates nostrum, nam doloribus facere! Modi eaque alias
            error quaerat vero odio voluptatem, aut, ipsam cupiditate labore,
            qui maiores. Ex officiis provident molestiae, repudiandae maxime
            inventore culpa delectus tenetur nisi nulla iusto sit similique
            deleniti tempore minima, at dolore illo neque voluptatem molestias.
            Adipisci, nisi velit in atque cupiditate repellendus sed dicta
            accusantium at animi maiores molestiae tempore distinctio labore ea
            ab, unde consequuntur illum? Similique, provident praesentium
            temporibus quod dolorem eos recusandae aliquid maiores ducimus eaque
            adipisci? Maxime enim officiis a alias iure ea, in ratione atque.
            Dolorum optio veritatis voluptates beatae quas? Odit at tempora sunt
            fugiat assumenda deserunt quia consequuntur illo, qui quisquam unde
            provident delectus quod labore! Similique blanditiis et quaerat
            minus dolor magni enim reiciendis inventore. Ad officia eius
            aperiam, incidunt rem itaque vel ea commodi a suscipit cumque
            tenetur adipisci reprehenderit optio, consectetur quasi illo! Natus
            voluptatibus eius quos praesentium eos animi inventore libero quod
            reiciendis error, temporibus eum at minima magnam et unde provident
            iure reprehenderit veritatis? Ad, cupiditate. Aperiam quidem, velit
            natus rerum quae quaerat nulla minima, consectetur cupiditate eum
            quos blanditiis laboriosam, nisi facere placeat reiciendis? Sed
            possimus distinctio sit nulla quos doloribus laborum libero,
            voluptatem eum sapiente, est nemo facilis! Quis, voluptates saepe
            maxime nostrum explicabo quam debitis voluptate eveniet, vel
            excepturi nobis necessitatibus eos illum cum animi provident fuga!
            Quam aliquid eligendi nulla alias ducimus. Sequi eum quasi corporis
            iusto perspiciatis voluptatibus iste illo unde deserunt similique
            debitis sapiente, voluptatem saepe eos alias aliquam, vero explicabo
            quis! Assumenda, dolorum facere dignissimos expedita earum iste
            consequatur alias!
          </p>
          <Row
            className="d-flex justify-content-between align-item-center mb-5"
            style={{ borderBottom: "1px solid #B7B7B7" }}
          >
            <h2 className="col-4">
              <span className="text-primary">IDR. 12.000</span> /Person
            </h2>
            <Col
              className="col-2"
              style={{
                alignSelf: "center",
                display: "flex",
                justifyContent: "end"
              }}
            >
              <h1 className="text-primary">
                <span onClick={console.log("plus clicked ")}>
                  <img
                    src="/Plus.png"
                    alt=""
                    srcset=""
                    style={{ marginRight: "1rem", cursor: "Pointer" }}
                  />
                </span>
                100
                <span onClick={console.log("Minus clicked ")}>
                  <img
                    src="/Minus.png"
                    alt=""
                    srcset=""
                    style={{ marginLeft: "1rem", cursor: "Pointer" }}
                  />
                </span>
              </h1>
            </Col>
          </Row>

          <Row
            className="d-flex justify-content-between align-item-center mb-5"
            style={{ borderBottom: "1px solid #B7B7B7" }}
          >
            <h2 className="col-4 ">Total</h2>
            <Col
              className="col-4"
              style={{ alignSelf: "end", textAlign: "end" }}
            >
              <h1 className="text-primary">IDR. 12,398,000</h1>
            </Col>
          </Row>
          <Row className="d-flex justify-content-end">
            <Button
              className="text-white align-self-end col-4 "
              style={{
                height: "4rem",
                fontSize: "1.5rem",
                padding: "1rem",
                marginBottom: "3rem"
              }}
            >
              <Link
                to={"/payment"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Book Now
              </Link>
            </Button>
          </Row>
        </Row>
      </Container>
      <Footer />
    </Base>
  )
}
