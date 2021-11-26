import React from "react";
import { Button } from "react-bootstrap";

const Experience = () => {
  return (
    <div className="my-5">
      <h2 className="my-4 py-5" style={{ fontSize: "40px" }}>
        Experience
      </h2>
      <div className="row container">
        <div className="col-lg-6">
          <h2>
            Experience with <br />
            <span> camera x8</span>{" "}
          </h2>
          <p className="my-4">
            Discover the Sony DSC-W830 compact camera. Small in size but large
            in power, this small camera packs a 20.1MP sensor, and a ZEISS lens
            with 8x optical zoom.
          </p>
          <Button className="m-2 P-2">Shop Now</Button>
          <br />
          <img
            className="my-5"
            src="https://i.ibb.co/8YtskqT/banner-img4.png"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <img
            className="img-fluid"
            src="https://i.ibb.co/SycfHS4/banner-img3.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
