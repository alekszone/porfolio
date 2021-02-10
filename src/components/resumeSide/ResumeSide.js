import React from "react";
import Title from "./../title/Title";
import Skills from "../skills/Skills";
import Experiences from "../experience/Experiences";
import Experience from "../experiences/experiences";
import withCustomScroll from "./../../hoc/withCustomScroll";
import "./ResumeSide.scss";

const ResumeSide = () => (
  <div className="ml-3 mr-3">
    <Title>Education</Title>
    <Experiences />
    <Title>Work Experience</Title>
    <Experience />
    <Title>My Skills</Title>
    <Skills />
  </div>
);

export default withCustomScroll(ResumeSide);
