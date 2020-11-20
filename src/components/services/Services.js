import React from "react";
import Title from "../title/Title";
import Style from './Services.scss'
import "./Services.scss";

class Services extends React.Component {
  render() {
    return (
      <div>
        <h3 style={{ color: "#4A18F0" }}>About</h3>
        <p className={`${Style.text}`}>
          A Full-Stack JavaScript Developer that is focused on MERN
          stack(MongoDB, ExpressJS, ReactJS, NodeJS). Master Degree in Computer
          Science and a student at STRIVE SCHOOL for +6 months. <br />
          <br /> I am an active communicator with powerful attention to detail
          that allows me to grasp new information in a single flash and be in
          close cooperation with my colleagues and mentors. I am ready to learn
          and work even under pressure and in a stereo medium, as I believe that
          this contributes to the character and professionalism building.
        </p>
      </div>
    );
  }
}

export default Services;
