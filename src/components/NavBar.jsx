import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import { Button } from "react-bootstrap"
import ModalRegister from "./ModalRegister"
import ModalLogin from "./ModalLogin"
import { Link } from "react-router-dom"
import ProfileThumb from "./ProfileThumb"

function NavBar({ bgNav }) {
  const [showreg, setShowreg] = useState(false)

  const [loggedIn, setIsLoggedIn] = useState(false)
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("isLoggedIn")))
  })

  useEffect(() => {
    const tours = JSON.parse(localStorage.getItem("listTours"))
  })

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("listUsers"))
    // console.log(users[0].isLoggedIn)
  })

  const handleCloseReg = () => {
    setShowreg(false)
  }

  const handleOpenReg = () => {
    setShowreg(true)
    setShowLog(false)
  }

  const [showLog, setShowLog] = useState(false)

  const handleCloseLog = () => {
    setShowLog(false)
  }

  const handleOpenLog = () => {
    setShowLog(true)
  }

  // console.log(loggedIn)

  return (
    <>
      <div style={{ display: "none" }}>{}</div>
      <ModalRegister
        show={showreg}
        handleOpenLog={handleOpenLog}
        handleClose={handleCloseReg}
      />
      <ModalLogin
        show={showLog}
        handleClose={handleCloseLog}
        redirect={handleOpenReg}
      />
      <Navbar
        style={{
          background: bgNav,
          top: 0,
          position: "absolute",
          zIndex: 3,
          width: "100vw"
        }}
      >
        <Container className="d-flex align-items-center">
          <Navbar.Brand>
            <Link to={"/"}>
              <img
                alt=""
                src="/icon.png"
                width="190"
                height="68"
                className="d-inline-block align-top "
              />
            </Link>
          </Navbar.Brand>
          <div
            style={{ alignSelf: "end" }}
            className="d-flex align-item-center mb-3"
          >
            {loggedIn ? (
              <ProfileThumb isLoggedIn={loggedIn} setTrigger={setTrigger} />
            ) : (
              <>
                <Button
                  className="me-3 text-white"
                  onClick={handleOpenReg}
                  style={{
                    width: "6rem",
                    background: "transparent",
                    border: "1px solid white"
                  }}
                >
                  Register
                </Button>
                <Button
                  onClick={handleOpenLog}
                  className="bg-primary text-white"
                  style={{ width: "6rem" }}
                >
                  Login
                </Button>
              </>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
