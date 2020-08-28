// Design inspired by this dribbble: https://dribbble.com/shots/2316219-User-profile -->
import React from "react";
import "./styles.css";

function Details(props) {
  return (
    <li>
      <h3>{props.data.count}</h3>
      <small>{props.data.about}</small>
    </li>
  );
}

export default function App() {
  const detailsArr = [
    {
      count: "100+",
      about: "projects"
    },
    {
      count: "6751",
      about: "followers"
    },
    {
      count: "50+",
      about: "articles"
    }
  ];

  return (
    <div className="user-profile-container">
      <div className="user-profile">
        <h3>karthick Rajan</h3>
        <p>Web Developer</p>
      </div>

      <ul className="user-info">
        {detailsArr.map((el) => (
          <Details key={el.about} data={el} />
        ))}
      </ul>
      <a
        href="https://twitter.com/karthicktamil17"
        target="_blank"
        rel="noopener noreferrer"
        className="follow-btn"
      >
        Follow
      </a>
    </div>
  );
}
