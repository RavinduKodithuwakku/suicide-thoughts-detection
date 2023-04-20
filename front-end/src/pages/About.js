import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "../modelBot/config";
import ActionProvider from "../modelBot/ActionProvider";
import MessageParser from "../modelBot/MessageParser";
import "../App.css";


export default function About(){
    return (
      <div className="App">
  
        <div style={{ maxWidth: "300px" }}>
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>

      </div>
    );
  }

  