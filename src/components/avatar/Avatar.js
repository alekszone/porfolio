import React from "react";
import myimage from "./../../images/myimage.jpg";
import "./Avatar.scss";

const Avatar = (props) => (
  <>
    <div
      className={`avatar__img rounded-circle mb-2 ${
        props.margin ? "mt-5" : ""
      }`}
    >
      <img
        src={myimage}
        alt="oftadeh"
        title="oftadeh"
        className="rounded-circle"
      />
    </div>
  </>
);

export default Avatar;
