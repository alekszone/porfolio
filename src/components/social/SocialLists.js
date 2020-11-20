import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialItem = ({ url, Icon }) => (
  <li className="m-1">
    <Link className="text-white p-2" to={url}>
      <Icon />
    </Link>
  </li>
);

class SocialList extends React.Component {
  state = {
    socials: [
      {
        url: "linkedin.com",
        Icon: FaLinkedinIn,
      },
      {
        url: "github.com",
        Icon: FaGithub,
      },
    ],
  };

  render() {
    return (
      <ul className={`list-unstyled d-flex ${this.props.margin ? "mb-5" : ""}`}>
        {this.state.socials.map((item, index) => (
          <SocialItem key={index} {...item} />
        ))}
      </ul>
    );
  }
}

export default SocialList;
