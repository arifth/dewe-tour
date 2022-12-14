import Card from "react-bootstrap/Card"

function TestisCard(props) {
  return (
    <div className="container-fluid d-flex flex-wrap gap-4 justify-content-center text-center">
      <Card
        style={{ width: "15vw", marginTop: "-3rem" }}
        className="d-flex align-items-center px-3 py-3"
      >
        <Card.Img
          variant="top"
          src="/heart1.png"
          style={{ height: "70px", width: "70px", objectFit: "contain" }}
        />
        <Card.Body>
          -
          <Card.Title>
            <h3>Hello mamang</h3>
          </Card.Title>
          <Card.Text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              provident ipsam esse deleniti iusto, rem quibusdam velit unde
              sequi exercitationem!
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{ width: "15vw", marginTop: "-3rem" }}
        className="d-flex align-items-center px-3 py-3"
      >
        <Card.Img
          variant="top"
          src="/agent_1.png"
          style={{ height: "70px", width: "70px", objectFit: "contain" }}
        />
        <Card.Body>
          -
          <Card.Title>
            <h3>Hello mamang</h3>
          </Card.Title>
          <Card.Text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              provident ipsam esse deleniti iusto, rem quibusdam velit unde
              sequi exercitationem!
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "15vw", marginTop: "-3rem" }}
        className="d-flex align-items-center px-3 py-3"
      >
        <Card.Img
          variant="top"
          src="/guarantee1.svg"
          style={{ height: "70px", width: "70px", objectFit: "contain" }}
        />
        <Card.Body>
          -
          <Card.Title>
            <h3>Hello mamang</h3>
          </Card.Title>
          <Card.Text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              provident ipsam esse deleniti iusto, rem quibusdam velit unde
              sequi exercitationem!
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{ width: "15vw", marginTop: "-3rem" }}
        className="d-flex align-items-center px-3 py-3"
      >
        <Card.Img
          variant="top"
          src="/Group.png"
          style={{ height: "70px", width: "70px", objectFit: "contain" }}
        />
        <Card.Body>
          -
          <Card.Title>
            <h3>Hello mamang</h3>
          </Card.Title>
          <Card.Text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              quam dolorem nulla soluta? Sint sunt delectus consectetur quia
              ducimus reiciendis?
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TestisCard
