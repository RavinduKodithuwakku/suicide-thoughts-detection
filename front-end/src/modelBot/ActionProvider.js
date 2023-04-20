import axios from 'axios';
import React, { useState, useEffect, Component } from 'react';
import Options from '../components/Options/Options';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  sendData = (msg) => {
    const abc = { message: msg };

    console.log(abc);
    axios
      .post('http://localhost:5000/flask/hello', abc)
      .then((response) => {
        console.log(response.data.message);
        const message = this.createChatBotMessage(response.data.message);
        this.addMessageToState(message);
      })
      .catch((error) => console.error(error));
  };

  greet = (msg) => {
    this.sendData(msg);
  };


  question01 = () => {
    console.log("question01",this.currentScore);
    const message = this.createChatBotMessage(
      ' 1. Do you experience a reduced or limited enjoyment of activities that you once found pleasurable or fulfilling?');
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
