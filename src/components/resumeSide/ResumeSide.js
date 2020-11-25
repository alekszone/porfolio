import React from "react";
import Title from "./../title/Title";
import Skills from "../skills/Skills";
import Experiences from "../experience/Experiences";
import withCustomScroll from "./../../hoc/withCustomScroll";
import "./ResumeSide.scss";

const ResumeSide = () => (
  <div className="ml-3 mr-3">
    <Experiences />
    <Title>My Skills</Title>
    <Skills />
  </div>
);

export default withCustomScroll(ResumeSide);
