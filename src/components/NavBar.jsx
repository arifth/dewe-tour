import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

function NavBar() {
  return (
    <>
      <Navbar style={{background:"transparent",top:0, position:"absolute",zIndex:999, width:"100vw"}} >
        <Container className='d-flex align-items-center' >
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/icon.png"
              width="190"
              height="68"
              className="d-inline-block align-top "
            />
          </Navbar.Brand>
          <div style={{alignSelf: "end" }} className="d-flex align-item-center mb-3">
          <Button  className='me-3 text-white' style={{width: "6rem", background: "transparent", border: "1px solid white"}}>Register</Button>
          <Button  className='bg-primary text-white' style={{width: "6rem"}} >Login</Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;