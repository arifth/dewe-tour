import React from "react"
import { Base } from "../../components/Base"
import Hero from "../../components/Hero"
import TestisCard from "../../components/TestisCard"
import Footer from "../../components/Footer"
import ListTour from "../../components/ListTour"

export default function Home(isLoggedIn) {
  console.log(isLoggedIn)
  return (
    <Base>
      <Hero />
      <TestisCard />
      <ListTour />
      <Footer />
    </Base>
  )
}
