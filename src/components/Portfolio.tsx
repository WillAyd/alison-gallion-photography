import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

const Portfolio = ({ data }) => {
  const images = data.contentfulAlisonGallionPhotography.portfolioImages;

  // Need to chunk data so we have balanced opening and closing tags
  // https://stackoverflow.com/a/37826698/621736
  const perChunk = 4; // items per chunk
  const chunked = images.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  const imageHtml = chunked.map((chunk, index) => {
    return (
      <div
        className={index > 0 ? "item-container mt-10" : "item-container"}
        key={index}
      >
        {chunk.map((image) => {
          const renderedImage = getImage(image);
          return (
            <div className="group item" key={image.id}>
              <GatsbyImage
                image={renderedImage}
                alt={image.title}
                className="w-full duration-200 md:block group-hover:scale-110"
              />
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <section id="portfolio">
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Portfolio
          </h2>
        </div>

        {imageHtml}
      </div>
    </section>
  );
};

export default function MyPortfolio(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          contentfulAlisonGallionPhotography {
            portfolioImages {
              id
              title
              gatsbyImageData(width: 300, placeholder: BLURRED, formats: [AUTO])
            }
          }
        }
      `}
      render={(data) => <Portfolio data={data} {...props} />}
    />
  );
}
