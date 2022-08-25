import React from "react";
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from "prop-types"

const Hero = ({data}) => {
  const logo = data.contentfulAlisonGallionPhotography.logo;

  return  <section id="hero">
	    <div className="container max-w-6xl mx-auto px-6 py-12">
	      <nav className="flex items-center justify-between font-bold text-white">
		<img src={logo.url} alt="Alison Gallion Photography" className="h-24"/>
              </nav>
	    </div>
	  </section>

}

export default function MyHero(props) {
  return (
    <StaticQuery
    query={graphql`
   {
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
`}
    render={data => <Hero data={data} {...props} />}
    />
  )
}
  
Hero.propTypes = {
  data: PropTypes.shape({
    contentfulAlisonGallionPhotography: PropTypes.shape({
      logo: PropTypes.shape({
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
