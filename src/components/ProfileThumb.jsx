import React, { useEffect, useState } from "react"
import { Image, Dropdown } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

export default function ProfileThumb({ setTrigger }) {
  const [LoggedIn, setIsLoggedIn] = useState()
  const [isAdmin, setIsAdmin] = useState()

  const [user, setUser] = useState()
  const [id, setId] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("isLoggedIn")))
  })

  useEffect(() => {
    setIsAdmin(JSON.parse(localStorage.getItem("isAdmin")))
  })

  useEffect(() => {
    setUser(localStorage.getItem("listUsers"))
  })

  useEffect(() => {
    setId(localStorage.getItem("idUser"))
  })

  // console.log(LoggedIn)
  // console.log(user)
  console.log(typeof isAdmin)

  const handleLOgOut = () => {
    JSON.stringify(localStorage.setItem("isLoggedIn", false))
    setTrigger(true)
    navigate("/")
    localStorage.setItem("idUser", 0)
  }
  return (
    <Dropdown>
      <Dropdown.Toggle
        style={{
          borderRadius: "20px",
          backgroundColor: "transparent",
          border: "none"
        }}
        rounded
      >
        <Image
          src="/monkey.jpg"
          style={{
            height: "50px",
            width: "50px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "2px solid yellow"
          }}
        />
      </Dropdown.Toggle>

      {!isAdmin && LoggedIn ? (
        <Dropdown.Menu className="p-4 mt-3">
          <img
            src="/polygon.png"
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 1,
              marginTop: "-16px"
            }}
          />
          <Dropdown.Item>
            {/* BUG: link doesn`t work properly */}
            <Link
              to={`/detail-user/${id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3 style={{ fontWeight: 600 }}>
                <span>
                  <img src="/DropIcon1.png" alt="" className="me-2" />
                </span>
                Profile
              </h3>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item style={{ borderBottom: "1px solid #A8A8A8" }}>
            <Link
              to={"/payment"}
              style={{ textDecoration: "none", color: "black" }}
            >
              {/* BUG: link doesn`t work properly */}
              <h3 style={{ fontWeight: 600 }}>
                <span>
                  <img src="/DropIcon2.png" alt="" className="me-2" />
                </span>
                Pay
              </h3>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item style={{ marginTop: "1rem" }}>
            <button
              style={{ border: "none", background: "none" }}
              onClick={handleLOgOut}
            >
              <h3 style={{ fontWeight: 600 }}>
                <span>
                  <img src="/logout.png" alt="" className="me-2" />
                </span>
                Log Out
              </h3>
            </button>
          </Dropdown.Item>
        </Dropdown.Menu>
      ) : (
        <Dropdown.Menu className="p-4 mt-3">
          <img
            src="/polygon.png"
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 1,
              marginTop: "-16px"
            }}
          />
          <Dropdown.Item>
            {/* BUG: link doesn`t work properly */}
            <Link
              to={"/incomeTrip"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3 style={{ fontWeight: 600 }}>
                <span>
                  <img src="/DropIcon1.png" alt="" className="me-2" />
                </span>
                Trip
              </h3>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item style={{ marginTop: "1rem" }}>
            <button
              style={{ border: "none", background: "none" }}
              onClick={handleLOgOut}
            >
              <h3 style={{ fontWeight: 600 }}>
                <span>
                  <img src="/logout.png" alt="" className="me-2" />
                </span>
                Log Out
              </h3>
            </button>
          </Dropdown.Item>
        </Dropdown.Menu>
      )}
    </Dropdown>
  )
}
