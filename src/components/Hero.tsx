import React from "react";
import logo from "../images/logo.svg";

const Hero = () => {
  const query = graphql`
  query {
    contentfulAlisonGallionPhotography {
      logo {
        id
        title
        url
        width
        height
      }
    }
  }
`;
  const logo = query["data"]["contentfulAlisonGallionPhotography"]["logo"];

  return  <section id="hero">
	    <div className="container max-w-6xl mx-auto px-6 py-12">
	      <nav className="flex items-center justify-between font-bold text-white">
		<img src={logo["url"]} alt="Alison Gallion Photography" className="h-24"/>
              </nav>
	    </div>
	  </section>

}

export default Hero;
