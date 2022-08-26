import React from "react";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import AboutMeText from "./AboutMeText";

const AboutMe = ({ data }) => {
  const aboutMe = data.contentfulAlisonGallionPhotography.aboutMePhoto;

  return (
    <section id="feature">
      <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
        <img src={aboutMe.url} alt="Alison Gallion" />

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
              id
              title
              url
              width
              height
            }
          }
        }
      `}
      render={(data) => <AboutMe data={data} {...props} />}
    />
  );
}

AboutMe.propTypes = {
  data: PropTypes.shape({
    contentfulAlisonGallionPhotography: PropTypes.shape({
      aboutMePhoto: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
