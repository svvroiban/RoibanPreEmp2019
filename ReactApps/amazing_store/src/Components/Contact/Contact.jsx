import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h4 className="subTitle">
        <i className="fas fa-map-marker-alt" /> My city:
        <a href="https://goo.gl/maps/27cDydCFh38FUNeb6">Los Angeles</a>
      </h4>

      <h4 className="subTitle">
        <i className="fas fa-phone" /> 8 800505-04-83
      </h4>
    </div>
  );
};

export default Contact;
