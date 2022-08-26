import * as React from "react"
import "../style/global.css"
import type { HeadFC } from "gatsby"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <React.Fragment><Hero /><AboutMe /><Portfolio /><Footer /></React.Fragment>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <React.Fragment>
    <title>Alison Gallion Photography</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Alata&family=Josefin+Sans:wght@300&display=swap"
      rel="stylesheet"
    />    
  </React.Fragment>
)
