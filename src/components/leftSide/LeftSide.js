import React from "react";
import Avatar from "../avatar/Avatar";
import SocialList from "../social/SocialLists";
import TypedText from "../TypeText/TypedText";
import "./LeftSide.scss";

const LeftSide = () => (
  <>
    <div className="col-12 col-md-6 left-back d-flex  justify-content-center ">
      <div className="d-flex flex-column justify-content-center ">
        <Avatar margin />
        <div className="d-flex flex-column  justify-content-center ">
          {/* <p className="o-font-lg text-white mb-1 mb-sm-3">Hi, I am</p> */}
          <h1 style={{ color: "white" }} className="o-font-lg ml-2 ">
            Aleksander Gjoni
          </h1>

          <TypedText dataText={["Full Stack Developer"]} />
        </div>
        {/* <p className="text-center text-white  mt-5">
          I'm a <u>Full Stack Developer</u> focused on MERN stack(MongoDB,
          ExpressJS, ReactJS, NodeJS). Master Degree in Computer Science and a
          student at STRIVE SCHOOL for +6 months.
        </p> */}
      </div>
    </div>
  </>
);

export default LeftSide;
