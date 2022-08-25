import React from "react";
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"


const Portfolio = ({data}) => {
  const images = data.contentfulAlisonGallionPhotography.portfolioImages;

  // Break these up every 4th element
  const imageHtml = images.map((image, index) => {
    return (
      <div className="group item" key={image.id}>
        <img
	  src={image.url}
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

export default function MyPortfolio(props) {
  return (
    <StaticQuery
    query={graphql`
  {
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
`}
    render={data => <Portfolio data={data} {...props} />}
    />
  )
}

Portfolio.propTypes = {
  data: PropTypes.shape({
    contentfulAlisonGallionPhotography: PropTypes.shape({
      portfolioImages: PropTypes.arrayOf(PropTypes.shape({
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired
      })).isRequired,
    }).isRequired,
  }).isRequired,
}
