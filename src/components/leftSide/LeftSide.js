import React from "react";
import Avatar from "../avatar/Avatar";
import SocialList from "../social/SocialLists";
import "./LeftSide.scss";

const LeftSide = () => (
  <>
    <div className="col-12 col-md-6 left-back d-flex align-items-center ">
      <div className="d-flex flex-column align-items-center  ">
        <Avatar margin />
        <div className="d-flex justify-content-center flex-wrap align-items-baseline">
          <p className="o-font-lg text-white mb-1 mb-sm-3">Hi, I am</p>
          <h1 style={{ color: "white" }} className="o-font-lg ml-2 ">
            Aleksander Gjoni
          </h1>
        </div>
        <p className="text-center text-white ">
          I'm a <u>Full Stack Web Developer</u> that is focused on MERN
          stack(MongoDB, ExpressJS, ReactJS, NodeJS). Master Degree in Computer
          Science and a student at STRIVE SCHOOL for +6 months.
        </p>
        {/* <SocialList margin />
        <div className="row mb-5 justify-content-center">
          <a
            href="/"
            className="d-block m-3 text-white o-btn text-center py-2 position-relative"
          >
            RESUME
          </a>
        </div> */}
      </div>
    </div>
  </>
);

export default LeftSide;
