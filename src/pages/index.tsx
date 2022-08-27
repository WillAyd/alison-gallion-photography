import * as React from "react";
import "@fontsource/josefin-sans/300.css";
import "../style/global.css";
import type { HeadFC } from "gatsby";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Hero />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <React.Fragment>
    <title>Alison Gallion Photography</title>
    <meta
      name="description"
      content="Alison Gallion is a photographer in San Diego offering family photos, pet photos, professional headshots and wedding photography."
    />
  </React.Fragment>
);
