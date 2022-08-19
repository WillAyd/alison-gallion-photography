import React from "react";
import aboutMe from "../images/about-me-image.jpg";

const AboutMe = () => {
  const query = graphql`
  query {
    contentfulAlisonGallionPhotography {
      aboutMe {
        id
        title
        url
        width
        height
      }
    }
  }
`;
  const aboutMe = query["data"]["contentfulAlisonGallionPhotography"]["aboutMe"];
  
  return (
    <section id="feature">
      <div
        className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0"
      >
	<img src={aboutMe["image"]} alt="Alison Gallion" />

        <div
          className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20"
        >
          <h2
            className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left"
          >
	    About me
          </h2>

          <p className="max-w-md text-center md:text-left">
	    I LOVE photography. Capturing the beauty of our lives one moment at a time is the true definition of zen. Nothing brings greater joy than to bottle up the perfect point in time where you see the true kindness of a human being, animal companion, or Mother Nature herself.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
