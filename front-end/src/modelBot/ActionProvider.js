import axios from 'axios';
import React, { useState, useEffect, Component } from 'react';
import Options from '../components/Options/Options';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  clearDB = (msg) => {
    const deleteMsg = { message: msg };
    // Simple DELETE request with axios
    axios.delete('http://localhost:5000/flask/hello',deleteMsg)
        // .then(() => this.setState({ status: 'Delete successful' }));
        .then((response) => {
          console.log(response.data.message);
          const message = this.createChatBotMessage(response.data.message);
          // this.addMessageToState(message);
        })
  }

  sendData = (msg) => {
    const sendDataMsg = { message: msg };

    console.log(sendDataMsg);
    axios
      .post("http://localhost:5000/flask/hello", sendDataMsg)
      .then((response) => {
        console.log(response.data.message);
        const message = this.createChatBotMessage(response.data.message);
        // this.addMessageToState(message);
      })
      .catch((error) => console.error(error));
  };


  greet = (sendDataMsg) => {
    this.sendData(sendDataMsg);
    
  };


  question01 = (sendDataMsg,deleteMsg) => {
    this.clearDB(deleteMsg);
    this.sendData(sendDataMsg);
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
