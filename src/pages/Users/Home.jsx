import React from 'react'
import { InputGroup, Form } from 'react-bootstrap'
import NavBar from '../../components/NavBar'

export default function Home() {
  return (
    <>
    <NavBar />
    <div style={{ zIndex:-1, width: '100vw', height: '70vh', top: 0, background: `url(/heroBg.png)`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition:"center center "}}>

      {/* <h1>Explore </h1> */}
      
      <div class="container-fluid " style={{paddingTop:"12rem", marginLeft: "13rem"}}>
        <h1 class="display-5 fw-bold text-white" style={{fontSize: "7rem"}}>Explore</h1>
        <p class="col-md-8 text-white" style={{fontSize:"3.5rem"}}>YOUR AMAZING CITY TOGETHER</p>
        <label className="text-white mb-1" style={{fontSize:"1.5rem"}}>Find Great Places to Holiday</label>
        <InputGroup className="mb-3 " style={{width:"60%",height:"50px"}}>
        <Form.Control/>
        
        <InputGroup.Text id="basic-addon2">SEARCH</InputGroup.Text>
      </InputGroup>
      </div>
      {/* <div style={{position: 'absolute', background: "black",height:"70vh",width:"100%",opacity:0.2}} /> */}
    </div>
    </>
      
    )
  }