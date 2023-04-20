import react from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";

const config = {
  botNAme: "HelpLine",
  initialMessages: [
    createChatBotMessage(
      `Hello. \n I am HELP LINE BOT. \nI can help you.Answer the following questions to find out if you have depression.`
    ),
  ],

  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;
