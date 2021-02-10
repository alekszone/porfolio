import React from "react";
import { FaUniversity } from "react-icons/fa";
import { RiBriefcase4Fill } from "react-icons/ri";
import { Image } from "react-bootstrap";
import Title from "../title/Title";

class Experiences extends React.Component {
  render() {
    return (
      <>
        <div className="services mb-5">
          <div className="d-flex flex-wrap mb-4">
            {" "}
            <Image
              style={{
                width: "40px",
                height: "40px",
                margin: "-5px 10px 10px 0px",
              }}
              src="strive.png"
              roundedCircle
            />
            <h4 style={{ color: "#4A18F0" }}>Strive School</h4>{" "}
            <h6 style={{ color: "#4A18F0" }}>
              Full Stack Web Developer | Apr 2020 - Oct 2020
            </h6>{" "}
            <p>
              Subject:HTML & CSS | Bootstrap | JS+ES6 | React.js | Redux-Thunk
              |MongoDB |PostgreeSQL | Express | TypeScript | Node.js |Cloud
              Technologies
            </p>
          </div>
          <div className="d-flex flex-wrap mb-4">
            {" "}
            <Image
              style={{
                width: "40px",
                height: "40px",
                margin: "-5px 10px 10px 0px",
              }}
              src="uamd.png"
              roundedCircle
            />
            <h4 style={{ color: "#4A18F0" }}>Aleksander Moisiu Durres</h4>{" "}
            <h6 style={{ color: "#4A18F0" }}>
              Masters in Computer Science | Oct 2017 - Oct 2018
            </h6>{" "}
            <p>
              Subject:Cryptography, Advanced web programming , Data mining, ,
              Algorithms, Android Studio, Project Management, Paralel
              Programming.
            </p>
          </div>
          <div className="d-flex flex-wrap mb-4">
            {" "}
            <Image
              style={{
                width: "40px",
                height: "40px",
                margin: "-5px 10px 10px 0px",
              }}
              src="uamd.png"
              roundedCircle
            />
            <h4 style={{ color: "#4A18F0" }}>Aleksander Moisiu Durres</h4>{" "}
            <h6 style={{ color: "#4A18F0" }}>
              Bachelor in Information Technology | Oct 2013 - Oct 2016
            </h6>{" "}
            <p>
              Subject:Database,Telecomunication,Web programing,Computer
              Architecture,Computer Network,Java,C++.
            </p>
          </div>
          <div className="d-flex flex-wrap ">
            {" "}
            <h4 style={{ color: "#4A18F0" }}>Tirana IT</h4>
          </div>
          <div className="d-flex flex-wrap ">
            {" "}
            <h6 style={{ color: "#4A18F0" }}>JAVA SE 08</h6>{" "}
          </div>
          <div className="d-flex flex-wrap ">
            {" "}
            <p>Subject:JAVA Fundamentals,Object-oriented programing.</p>
          </div>
        </div>
      </>
    );
  }
}

export default Experiences;
