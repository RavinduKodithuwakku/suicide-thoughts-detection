import React from "react";

import "./Options.css";

const Options9 = (props) => {
  const options = [
    {
      text: "Not at all",
      handler:() =>props.actionProvider.question09ans(0),
      id: 1,
    },
    { text: "Several days", handler:() => props.actionProvider.question09ans(1), id: 2 },
    { text: "More than half the days",handler:() => props.actionProvider.question09ans(2), id: 3 },
    { text: "Nearly every day", handler:() => props.actionProvider.question09ans(3), id: 4 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options9;
