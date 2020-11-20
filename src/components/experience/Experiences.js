import React from "react";
import { FaUniversity } from "react-icons/fa";
import { RiBriefcase4Fill } from "react-icons/ri";
import { Image } from "react-bootstrap";
import Title from "../title/Title";

const ExperienceItem = ({ time, field, location, description }) => (
  <div className="work__div border-bottom mb-4">
    <div className="o-time-title mb-2 position-relative o-font-sm">{time}</div>
    <div className="o-title-exp mb-2 d-flex flex-column">
      <strong className="font-weight-normal o-text-purple">{field}</strong>
      <small className="text-muted">{location}</small>
    </div>
    <p className="text-justify o-font-sm">{description}</p>
  </div>
);

class Experiences extends React.Component {
  state = {
    experiences: [
      //   {id: 1, type: 'work', time: '2016 - Present', field: 'Frontend Web Developer', location: 'Space Company', description: 'Collaborate with creative and development teams on the execution of ideas.'},
      //   {id: 2, type: 'education', time: '2013 - 2016', field: 'bachelor degree Computer', location: 'MIT', description: 'Collaborate with creative and development teams on the execution of ideas.'},
    ],
  };

  render() {
    return (
      <div className="row">
        {/* <div className="col-12 col-sm-6 col-md-12 col-lg-6 border-right">
          <div className="mb-4">
            <i className="o-font-lg align-bottom o-text-purple mr-2">
              <FaUniversity />
            </i>
            <span className="font-weight-bold">Work Experience</span>
          </div>
          {this.state.experiences.length > 0 &&
            this.state.experiences
              .filter((item) => item.type === "work")
              .map((item) => <ExperienceItem key={item.id} {...item} />)}
        </div> */}
        <div className="col-12 col-sm-6 col-md-12 col-lg-6">
          {this.state.experiences.length > 0 &&
            this.state.experiences
              .filter((item) => item.type === "education")
              .map((item) => <ExperienceItem key={item.id} {...item} />)}
        </div>
        <div className="services mb-5">
          <div className="mb-4">
            <i className="o-font-lg align-bottom o-text-purple mr-2">
              <FaUniversity />
            </i>
            <span className="font-weight-bold" style={{ fontSize: "21px " }}>
              {" "}
              Education
            </span>
          </div>
          <div className="d-flex flex-wrap ">
            {" "}
            <Image
              style={{
                width: "50px",
                height: "50px",
                margin: "-5px 10px 10px 0px",
              }}
              src="strive.png"
              roundedCircle
            />
            <h4 style={{ color: "#4A18F0" }}>Strive School</h4>{" "}
            <h5 style={{ color: "#4A18F0" }}>
              Full Stack Web Developer | Apr 2020 - Oct 2020
            </h5>{" "}
            <p>
              Subject:HTML & CSS | Bootstrap | JS+ES6 | React.js | Redux-Thunk
              |MongoDB |PostgreeSQL | Express | TypeScript | Node.js |Cloud
              Technologies
            </p>
          </div>
          <div className="d-flex flex-wrap ">
            {" "}
            <Image
              style={{
                width: "50px",
                height: "50px",
                margin: "-5px 10px 10px 0px",
              }}
              src="uamd.png"
              roundedCircle
            />
            <h4 style={{ color: "#4A18F0" }}>Aleksander Moisiu Durres</h4>{" "}
            <h5 style={{ color: "#4A18F0" }}>
              Masters in Computer Science | Oct 2017 - Oct 2018
            </h5>{" "}
            <p>
              Subject:Cryptography, Advanced web programming , Data mining, ,
              Algorithms, Android Studio, Project Management, Paralel
              Programming.
            </p>
          </div>
          <div className="d-flex flex-wrap ">
            {" "}
            <Image
              style={{
                width: "50px",
                height: "50px",
                margin: "-5px 10px 10px 0px",
              }}
              src="uamd.png"
              roundedCircle
            />
            <h4 style={{ color: "#4A18F0" }}>Aleksander Moisiu Durres</h4>{" "}
            <h5 style={{ color: "#4A18F0" }}>
              Bachelor in Information Technology | Oct 2013 - Oct 2016
            </h5>{" "}
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
            <h5 style={{ color: "#4A18F0" }}>JAVA SE 08</h5>{" "}
          </div>
          <div className="d-flex flex-wrap ">
            {" "}
            <p>Subject:JAVA Fundamentals,Object-oriented programing.</p>
          </div>
        </div>
        <div className="services mb-5">
          <div className="mb-4">
            <i className="o-font-lg align-bottom o-text-purple mr-2">
              <RiBriefcase4Fill />
            </i>
            <span className="font-weight-bold" style={{ fontSize: "21px " }}>
              {" "}
              Work Experience
            </span>
          </div>
          <div className="d-flex flex-wrap ">
            {" "}
            <Image
              style={{
                width: "50px",
                height: "50px",
                margin: "-5px 10px 10px 0px",
              }}
              src="fiverr.png"
              roundedCircle
            />
            <h4 style={{ color: "#4A18F0", paddingRight: "100px" }}>
              Fiverr-Freelance
            </h4>{" "}
            <br />
            <h5 style={{ color: "#4A18F0" }}>Part-Time 2018-Present</h5>{" "}
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

export default Experiences;
