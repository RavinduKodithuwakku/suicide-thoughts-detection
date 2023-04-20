import react from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";
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

    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;
