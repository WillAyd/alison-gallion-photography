import React from "react";

const Contact = () => {
  return (
    <section id="contact-me">
      <div className="container max-w-6xl mx-auto my-16 px-6 text-gray-900 md:px-0">
        <div className="flex justify-center mb-10 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Contact Me
          </h2>
        </div>
        <p className="text-2xl">
          <a href="mailto:alison@alisongallionphotography.com">
            alison@alisongallionphotography.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
