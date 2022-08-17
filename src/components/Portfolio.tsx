import React from "react";
import image1 from "../images/image001.jpg";
import image2 from "../images/image002.jpg";
import image3 from "../images/image003.jpg";
import image4 from "../images/image004.jpg";
import image5 from "../images/image005.jpg";
import image6 from "../images/image006.jpg";
import image7 from "../images/image007.jpg";
import image8 from "../images/image008.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Portfolio
          </h2>
        </div>

        <div className="item-container">
          <div className="group item">
            <img
	      src={image1}
              alt=""
              className="w-full duration-200 md:block group-hover:scale-110"
            />
          </div>

          <div className="group item">
            <img
              src={image2}
              alt=""
              className="w-full duration-200 md:block group-hover:scale-110"
            />
          </div>

          <div className="group item">
            <img
              src={image3}
              alt=""
              className="w-full duration-200 md:block group-hover:scale-110"
            />
          </div>

          <div className="group item">
            <img
              src={image4}
              alt=""
              className="w-full duration-200 md:block group-hover:scale-110"
            />
          </div>
        </div>

        <div className="item-container mt-10">
          <div className="group item">
            <img
              src={image5}
              alt=""
              className="w-full duration-200 md:block group-hover:scale-110"
            />
          </div>

          <div className="group item">
            <img
              src={image6}
              alt=""
              className="w-full duration-200 md:block group-hover:scale-110"
            />
          </div>

          <div className="group item">
            <img
              src={image7}
              alt=""
              className="w-full duration-200 md:block group-hover:scale-110"
            />
          </div>

          <div className="group item">
            <img
              src={image8}
              alt=""
              className="w-full duration-200 md:block group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
