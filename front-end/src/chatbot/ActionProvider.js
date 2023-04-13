import axios from "axios";
import React, { useState, useEffect } from "react";
import Options from "../components/Options/Options";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
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
    console.log("question01")
    const message = this.createChatBotMessage(
      "Do you experience a reduced or limited enjoyment of activities that you once found pleasurable or fulfilling?",
      {
        widget: "options",
      }
    );
    this.addMessageToState(message);
 
  };

  question02 = (id) => {
    console.log("question02",id)
    const message = this.createChatBotMessage(
      "Have you been experiencing feelings of sadness, hopelessness, or a general sense of low mood recently?",
      {
        widget: "options2",
      }
    );
    this.addMessageToState(message);
  };

  question03 = () => {
    const message = this.createChatBotMessage(
      "Have you been experiencing any difficulties with your sleep recently, such as trouble falling or staying asleep, or sleeping for extended periods of time?",
      {
        widget: "opetions",
      }
    );
    this.addMessageToState(message);
  };

  question04 = () => {
    const message = this.createChatBotMessage(
      "Have you been experiencing feelings of fatigue or a lack of energy lately?",
      {
        widget: "opetions",
      }
    );
    this.addMessageToState(message);
  };

  question05 = () => {
    const message = this.createChatBotMessage(
      "Have you experienced any changes in your eating habits recently, such as a loss of appetite or an increase in appetite and overeating? ",
      {
        widget: "opetions",
      }
    );
    this.addMessageToState(message);
  };

  question06 = () => {
    const message = this.createChatBotMessage(
      "Have you been experiencing feelings of low self-esteem, worthlessness, or a sense of failure lately? ",
      {
        widget: "opetions",
      }
    );
    this.addMessageToState(message);
  };

  question07 = () => {
    const message = this.createChatBotMessage(
      "Have you been having difficulty concentrating on tasks such as reading, watching television, or other activities that require sustained focus?",
      {
        widget: "opetions",
      }
    );
    this.addMessageToState(message);
  };

  question08 = () => {
    const message = this.createChatBotMessage(
      "Have you been experiencing any changes in your physical movements, such as slowed movements or speech that others may have noticed, or increased restlessness or fidgeting?",
      {
        widget: "opetions",
      }
    );
    this.addMessageToState(message);
  };

  question09 = () => {
    const message = this.createChatBotMessage(
      "Have you had any suicidal thoughts or thoughts of hurting yourself recently?",
      {
        widget: "opetions",
      }
    );
    this.addMessageToState(message);
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
}
export default ActionProvider;
