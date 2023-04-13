class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    console.log(lowercase);

    var currentQuestion = 0;

    if (lowercase.includes("hello")) {
      this.actionProvider.question01(lowercase);
    }
    if (lowercase.includes("yes") && currentQuestion == 0) {
      currentQuestion = 1;
      this.actionProvider.question02(lowercase);
    }
    if (lowercase.includes("test") && currentQuestion == 1) {
      currentQuestion = 2;
      this.actionProvider.question03();
    }
    if (lowercase.includes("no") && currentQuestion == 2) {
      currentQuestion = 3;
      this.actionProvider.question04();
    }
    if (lowercase.includes("maybe") && currentQuestion == 3) {
      currentQuestion = 4;
      this.actionProvider.question05();
    }

    if (lowercase.includes("yes") && currentQuestion == 5) {
      currentQuestion = 6;
      this.actionProvider.question06();
    }

    if (lowercase.includes("ques06") && currentQuestion == 6) {
      currentQuestion = 7;
      this.actionProvider.question07();
    }

    if (lowercase.includes("ques07") && currentQuestion == 7) {
      currentQuestion = 8;
      this.actionProvider.question08();
    }

    if (lowercase.includes("ques08") && currentQuestion == 8) {
      currentQuestion = 9;
      this.actionProvider.question09();
    }

    if (lowercase.includes("javascript") || lowercase.includes("js")) {
      this.actionProvider.handleJavascriptQuiz();
    }
    if (lowercase.includes("javascript") || lowercase.includes("js")) {
      this.actionProvider.handleJavascriptQuiz();
    }
    //   else
    //   this.actionProvider.errormsg();
  }
}

export default MessageParser;
