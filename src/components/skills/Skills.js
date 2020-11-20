import React from "react";

const SkillItem = ({ title, percent }) => (
  <li className="mb-3">
    <strong className="o-font-sm font-weight-normal">{title}</strong>
    <div className="progress">
      <div
        className="progress-bar o-bg-purple"
        role="progressbar"
        style={{ width: `${percent}%` }}
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </li>
);

class Skills extends React.Component {
  state = {
    skills: [
      { id: 1, title: "HTML", percent: "95" },
      { id: 2, title: "CSS", percent: "95" },
      { id: 3, title: "JAVASCRIPT", percent: "97" },
      { id: 4, title: "REACTJS", percent: "90" },
      { id: 5, title: "NODE JS", percent: "80" },
      { id: 6, title: "MONGODB", percent: "90" },
      { id: 7, title: "EXPRESS.JS", percent: "75" },
      { id: 8, title: "BOOTSTRAP", percent: "95" },
      { id: 9, title: "TYPESCRIPT", percent: "50" },
      { id: 10, title: "POSTGRESQL", percent: "70" },
      { id: 10, title: "JAVA SE 8 ", percent: "50" },
      { id: 10, title: "HEROKU", percent: "70" },
    ],
  };

  render() {
    return (
      <>
        <ul className="list-unstyled mb-5 o-grid">
          {this.state.skills.map((item) => (
            <SkillItem key={item.id} {...item} />
          ))}
        </ul>
      </>
    );
  }
}

export default Skills;
