import react from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import Options from "../components/Options/Options";
import Options2 from "../components/Options/Options2";
import Options3 from "../components/Options/Options3";
import Options4 from "../components/Options/Options4";
import Options5 from "../components/Options/Options5";
import Options6 from "../components/Options/Options6";
import Options7 from "../components/Options/Options7";
import Options8 from "../components/Options/Options8";
import Options9 from "../components/Options/Options9";

// const actionProvider = new ActionProvider();

const config = {
  botNAme: "HelpLine",
  initialMessages: [
    createChatBotMessage(
      `Hello. \n I am HELP LINE BOT. \nI can help you.Answer the following questions to find out if you have depression.`
    ),
    // actionProvider.question01()
  ],

  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "options2",
      widgetFunc: (props) => <Options2 {...props} />,
    },

    {
      widgetName: "options3",
      widgetFunc: (props) => <Options3 {...props} />,
    },

    {
      widgetName: "options4",
      widgetFunc: (props) => <Options4 {...props} />,
    },

    {
      widgetName: "options5",
      widgetFunc: (props) => <Options5 {...props} />,
    },

    {
      widgetName: "options6",
      widgetFunc: (props) => <Options6 {...props} />,
    },

    {
      widgetName: "options7",
      widgetFunc: (props) => <Options7 {...props} />,
    },

    {
      widgetName: "options8",
      widgetFunc: (props) => <Options8 {...props} />,
    },

    {
      widgetName: "options9",
      widgetFunc: (props) => <Options9 {...props} />,
    },

  ],
};

export default config;
