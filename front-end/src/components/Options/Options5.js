import React from "react";

import "./Options.css";

const Options5 = (props) => {
  const options = [
    {
      text: "Not at all",
      handler:() => props.actionProvider.question06(0),
      id: 1,
    },
    { text: "Several days", handler:() => props.actionProvider.question06(1), id: 2 },
    { text: "More than half the days",handler:() => props.actionProvider.question06(2), id: 3 },
    { text: "Nearly every day", handler:() => props.actionProvider.question06(3), id: 4 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options5;
