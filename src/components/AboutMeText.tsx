import React from "react";
import { graphql, StaticQuery } from "gatsby";

const AboutMe = ({ data }) => {
  const aboutMe =
    data.contentfulAlisonGallionPhotography.aboutMeText.aboutMeText;

  return <p className="max-w-md text-center md:text-left">{aboutMe}</p>;
};

export default function MyAboutMe(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          contentfulAlisonGallionPhotography {
            aboutMeText {
              aboutMeText
            }
          }
        }
      `}
      render={(data) => <AboutMe data={data} {...props} />}
    />
  );
}
