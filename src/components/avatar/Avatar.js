import React from "react";
import myimage from "./../../images/myimage.jpg";
import "./Avatar.scss";

const Avatar = (props) => (
  <>
    <div
      className={`avatar__img rounded-circle mb-4 ${
        props.margin ? "mt-2" : ""
      }`}
    >
      <img
        src={myimage}
        alt="aleksander"
        title="aleksander"
        className="rounded-circle"
      />
    </div>
  </>
);

export default Avatar;
