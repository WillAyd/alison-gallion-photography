import React from "react";
import { graphql, StaticQuery } from "gatsby";

const FooterSocialLinks = ({ data }) => {
  const socialLogos = data.contentfulSocialLogos.logo;
  return (
    <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
      <div className="h-8 group">
        <a href="https://www.instagram.com/alisongallionphotography/">
          <img src={socialLogos.url} alt="" className="h-6" />
        </a>
      </div>
    </div>
  );
};

export default function MyFooterSocialLinks(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          contentfulSocialLogos {
            logo {
              id
              title
              url
              width
              height
            }
          }
        }
      `}
      render={(data) => <FooterSocialLinks data={data} {...props} />}
    />
  );
}
