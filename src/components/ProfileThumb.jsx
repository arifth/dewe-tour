import React from "react"
import { Image, Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function ProfileThumb({ isLoggedIn, setIsLoggedIn }) {
  const handleLOgOut = () => {
    setIsLoggedIn(false)
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
        <Image src="/thumb.png" rounded />
      </Dropdown.Toggle>

      <Dropdown.Menu className="p-4 mt-3">
        <img
          src="/polygon.png"
          alt=""
          style={{ position: "absolute", top: 0, left: 1, marginTop: "-16px" }}
        />
        <Dropdown.Item>
          <Link
            to={"/detail-user"}
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
    </Dropdown>
  )
}
