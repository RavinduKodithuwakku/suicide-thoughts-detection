import axios from "axios";
import React, { useState, useEffect, Component } from "react";
import Options from "../components/Options/Options";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.currentScore = 0;
  }

  getScore(id) {
    let score = 0;
    if (id == 0) {
      score = 0;
    } else if (id === 1) {
      score = 1;
    } else if (id === 2) {
      score = 2;
    } else if (id === 3) {
      score = 3;
    }
    return score;
  }

  interpretScore(score) {
    let interpretation = "";
    if (score <= 4) {
      interpretation = "Your depression level is minimal.";
    } else if (score <= 9) {
      interpretation = "Your depression is mild.";
    } else if (score <= 14) {
      interpretation = "Your depression is moderate.";
    } else if (score <= 19) {
      interpretation = "Your depression is moderately severe.";
    } else {
      interpretation = "Your depression is severe.";
    }
    return interpretation;
  }

  sendData = (msg) => {
    const abc = { message: msg };

    console.log(abc);
    axios
      .post("http://localhost:5000/flask/hello", abc)
      .then((response) => {
        console.log(response.data.message);
        const message = this.createChatBotMessage(response.data.message);
        this.addMessageToState(message);
      })
      .catch((error) => console.error(error));
  };

  greet = () => {
    this.sendData();
  };

  question01 = () => {
    console.log("question01", this.currentScore);
    localStorage.setItem("currentScore", 0);
    const message = this.createChatBotMessage(
      " 1. Do you experience a reduced or limited enjoyment of activities that you once found pleasurable or fulfilling?",
      {
        widget: "options",
      }
    );
    this.addMessageToState(message);
  };

  question02 = (id) => {
    let currentScore = parseInt(localStorage.getItem("currentScore"));
    console.log(currentScore, id);
    console.log(this.getScore(id));
    const score = currentScore + this.getScore(id);
    console.log("question02", score);
    localStorage.setItem("currentScore", score);
    const message = this.createChatBotMessage(
      "2. Have you been experiencing feelings of sadness, hopelessness, or a general sense of low mood recently?",
      {
        widget: "options2",
      }
    );
    this.addMessageToState(message);
    // console.log("question02",id,score,currentScore);
  };

  question03 = (id) => {
    let currentScore = parseInt(localStorage.getItem("currentScore"));
    console.log(this.getScore(id));
    const score = currentScore + this.getScore(id);
    console.log("question03", score);
    localStorage.setItem("currentScore", score);
    const message = this.createChatBotMessage(
      "3. Have you been experiencing any difficulties with your sleep recently, such as trouble falling or staying asleep, or sleeping for extended periods of time?",
      {
        widget: "options3",
      }
    );
    this.addMessageToState(message);
    // console.log("question03",id,score,currentScore);
  };

  question04 = (id) => {
    let currentScore = parseInt(localStorage.getItem("currentScore"));
    console.log(currentScore, id);
    console.log(this.getScore(id));
    const score = currentScore + this.getScore(id);
    console.log("question04", score);
    localStorage.setItem("currentScore", score);
    const message = this.createChatBotMessage(
      "4. Have you been experiencing feelings of fatigue or a lack of energy lately?",
      {
        widget: "options4",
      }
    );
    this.addMessageToState(message);
    // console.log("question04",id,score);
  };

  question05 = (id) => {
    let currentScore = parseInt(localStorage.getItem("currentScore"));
    console.log(this.getScore(id));
    const score = currentScore + this.getScore(id);
    console.log("question05", score);
    localStorage.setItem("currentScore", score);
    const message = this.createChatBotMessage(
      "5. Have you experienced any changes in your eating habits recently, such as a loss of appetite or an increase in appetite and overeating? ",
      {
        widget: "options5",
      }
    );
    this.addMessageToState(message);
    // console.log("question05",id,score);
  };

  question06 = (id) => {
    let currentScore = parseInt(localStorage.getItem("currentScore"));
    console.log(this.getScore(id));
    const score = currentScore + this.getScore(id);
    console.log("question06", score);
    localStorage.setItem("currentScore", score);
    const message = this.createChatBotMessage(
      "6. Have you been experiencing feelings of low self-esteem, worthlessness, or a sense of failure lately? ",
      {
        widget: "options6",
      }
    );
    this.addMessageToState(message);
    // console.log("question06",id,score);
  };

  question07 = (id) => {
    let currentScore = parseInt(localStorage.getItem("currentScore"));
    console.log(this.getScore(id));
    const score = currentScore + this.getScore(id);
    console.log("question07", score);
    localStorage.setItem("currentScore", score);
    const message = this.createChatBotMessage(
      "7. Have you been having difficulty concentrating on tasks such as reading, watching television, or other activities that require sustained focus?",
      {
        widget: "options7",
      }
    );
    this.addMessageToState(message);
    // console.log("question07",id,score);
  };

  question08 = (id) => {
    let currentScore = parseInt(localStorage.getItem("currentScore"));
    console.log(this.getScore(id));
    const score = currentScore + this.getScore(id);
    console.log("question08", score);
    localStorage.setItem("currentScore", score);
    const message = this.createChatBotMessage(
      "8. Have you been experiencing any changes in your physical movements, such as slowed movements or speech that others may have noticed, or increased restlessness or fidgeting?",
      {
        widget: "options8",
      }
    );
    this.addMessageToState(message);
    // console.log("question08",id,score);
  };

  question09 = (id) => {
    let currentScore = parseInt(localStorage.getItem("currentScore"));
    console.log(this.getScore(id));
    const score = currentScore + this.getScore(id);
    console.log("question09", score);
    localStorage.setItem("currentScore", score);
    const message = this.createChatBotMessage(
      "9. Have you had any suicidal thoughts or thoughts of hurting yourself recently?",
      {
        widget: "options9",
      }
    );
    this.addMessageToState(message);
    // console.log("question09",id,score);
  };

  question09ans = (id) => {
    let currentScore = parseInt(localStorage.getItem("currentScore"));
    console.log(this.getScore(id));
    const score = currentScore + this.getScore(id);
    console.log("question09ans", score);
    localStorage.setItem("currentScore", score);
    const message = this.createChatBotMessage(
      "Your Total Score is : " +
        score +
        " so your Depression Severity is: " +
        this.interpretScore(score)
    );

    this.addMessageToState(message);
    // console.log("question09ans",id,score);
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your quiz. Good luck!",
      {
        widget: "javascriptQuiz",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  incrementScore = (score) => {
    this.setState((prevState) => ({
      ...prevState,
      score: prevState.score ? prevState.score + score : score,
    }));
    console.log(this.state);
  };
}
export default ActionProvider;
