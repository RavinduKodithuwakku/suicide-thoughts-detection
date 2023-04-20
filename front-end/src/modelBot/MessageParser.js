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
      this.actionProvider.greet(lowercase);
    } else if (lowercase.includes("hii") && currentQuestion == 0) {
      currentQuestion = 1;
      this.actionProvider.question02(lowercase);
    } else if (lowercase.includes("test") && currentQuestion == 1) {
      currentQuestion = 2;
      this.actionProvider.question03();
    }
    //   else
    //   this.actionProvider.errormsg();
  }
}

export default MessageParser;
