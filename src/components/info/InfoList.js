import React from "react";
import Title from "../title/Title";

const InfoItem = ({ infoTitle, infoValue }) => (
  <li className="mb-2">
    <div className="row">
      <div className="col-4 font-weight-bold">{infoTitle}</div>
      <div className="col-8">{infoValue}</div>
    </div>
  </li>
);

class InfoList extends React.Component {
  state = {
    allInfo: [
      {
        infoTitle: "Full Name",
        infoValue: "Aleksander Gjoni",
      },

      {
        infoTitle: "Languages",
        infoValue: "English, Albanian",
      },

      {
        infoTitle: "Location",
        infoValue: "Albania",
      },
      {
        infoTitle: "Github",
        infoValue: (
          <a href="https://github.com/alekszone" target="_blank">
            @alekszone
          </a>
        ),
      },
      {
        infoTitle: "LinkedIn",
        infoValue: (
          <a
            href="https://www.linkedin.com/in/aleksandergjoni/"
            target="_blank"
          >
            @aleksandergjoni
          </a>
        ),
      },
    ],
  };

  render() {
    return (
      <>
        <Title>PERSONAL INFO</Title>
        <ul className="list-unstyled p-2">
          {this.state.allInfo.map((item, index) => (
            <InfoItem key={index} {...item} />
          ))}
        </ul>
      </>
    );
  }
}

export default InfoList;
