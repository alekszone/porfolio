import React, { Component } from "react";
import { FaUniversity } from "react-icons/fa";
import { RiBriefcase4Fill } from "react-icons/ri";
import { Image } from "react-bootstrap";
import Title from "../title/Title";
class experiences extends Component {
  render() {
    return (
      <div className="services mb-5">
        <div className="d-flex flex-wrap  ">
          {" "}
          <Image
            style={{
              width: "50px",
              height: "40px",
              margin: "-5px 10px 10px 0px",
            }}
            src="webinfo.jpg"
            roundedCircle
          />
          <h4 style={{ color: "#4A18F0", paddingRight: "100px" }}>
            WebInfo - FrontEnd Developer
          </h4>{" "}
          <br />
          <div>
            <h6 style={{ color: "#4A18F0" }}>Tirana | July 2019 - Oct 2019</h6>{" "}
            <p>
              Working as Front end developer using HTML, CSS, AND JAVASCRIPT.
            </p>
          </div>
        </div>
        <div className="d-flex flex-wrap  ">
          {" "}
          <Image
            style={{
              width: "40px",
              height: "40px",
              margin: "-5px 10px 10px 0px",
            }}
            src="fiverr.png"
            roundedCircle
          />
          <h4 style={{ color: "#4A18F0", paddingRight: "100px" }}>
            Fiverr-Freelance
          </h4>{" "}
          <br />
          <div>
            <h6 style={{ color: "#4A18F0" }}>Part-Time 2018-Present</h6>{" "}
            <p>
              Working Part Time as a Freelance as:Social Media Manager,Web
              Design using WordPress, Wix.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default experiences;
