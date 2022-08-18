import React from "react";
import { graphql } from "gatsby"


const Portfolio = () => {
  const query = graphql`
  query {
    contentfulAlisonGallionPhotography {
      portfolioImages {
        id
        title
        url
        width
        height
      }
    }
  }
`;
  const images = query["data"]["contentfulAlisonGallionPhotography"]["portfolioImages"];
  const imageHtml = images.map((image) => {
    return (
      <div className="group item">
        <img
	  src={image["url"]}
          alt=""
          className="w-full duration-200 md:block group-hover:scale-110"
        />
      </div>
    )});

  return (
    <section id="portfolio">
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Portfolio
          </h2>
        </div>

        <div className="item-container">
	  {imageHtml}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
