import react from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";
import Options2 from "../components/Options/Options2";




const config = { 
  botNAme: "HelpLine",
  initialMessages: [
    createChatBotMessage(
      `Hello. \n I am HELP LINE BOT. \nI can help you.Answer the following questions to find out if you have depression.`
    ),
    // this.actionProvider.question01()
    
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
