import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import AboutMeText from "./AboutMeText";

const AboutMe = ({ data }) => {
  const image = data.contentfulAlisonGallionPhotography.aboutMePhoto;

  return (
    <section id="feature">
      <div className="relative container flex flex-col max-w-6xl mx-auto my-16 px-6 text-gray-900 md:flex-row md:px-0">
        <GatsbyImage image={getImage(image)} alt="Alison Gallion" />
        <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
            About me
          </h2>
          <AboutMeText />
        </div>
      </div>
    </section>
  );
};

export default function MyAboutMe(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          contentfulAlisonGallionPhotography {
            aboutMePhoto {
              gatsbyImageData(
                width: 750
                height: 450
                placeholder: BLURRED
                formats: [AUTO]
              )
            }
          }
        }
      `}
      render={(data) => <AboutMe data={data} {...props} />}
    />
  );
}
