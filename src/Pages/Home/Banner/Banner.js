import React from "react";
import img from "../../../img/bannerbgg.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

var sectionStyle = {
  width: "100%",
  height: "550px",
  backgroundImage: "url( https://i.ibb.co/w7XxstR/bannerbgg.png)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const Banner = () => {
  return (
    <div style={{ height: "550px" }} style={sectionStyle}>
      <div className="row">
        <div className="col-sm-12 col-md-6 text-white mt-5">
          <h1 style={{ fontSize: "70px", lineHeight: "80px" }}>
            Beautiful
            <br /> <span style={{ color: "#B47F16" }}>Moment</span> for you
          </h1>
          <Link to="/gallery">
            <Button className="w-50 mt-3">Explore now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
