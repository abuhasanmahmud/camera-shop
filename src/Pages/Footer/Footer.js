import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-white pt-5  pb-2">
      <div className="row mb-3">
        <div className="col-lg-4 col-md-12">
          <p>Chicago, IL</p>
          <p>60606 123, New Lenox</p>
        </div>
        <div className="col-lg-4 col-md-12">
          <img
            className="img-fluid"
            src="https://i.ibb.co/XZW0Dzg/logo-ft.png"
          />
        </div>
        <div className="col-lg-4 col-md-12">
          <p>Call us 24/7</p>
          <p>094 711 80 58</p>
        </div>
      </div>

      <p className="pb-3 mt-5">developermahmud © 2021. All rights reserved.</p>
    </div>
  );
};

export default Footer;
