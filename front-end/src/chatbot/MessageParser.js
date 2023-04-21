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
    else if (lowercase.includes("hii") && currentQuestion == 0) {
      currentQuestion = 1;
      const score = this.getScore(this.currentQuestion - 1);
      console.log(this.score);
      this.actionProvider.question02(lowercase);
    }
    else if (lowercase.includes("test") && currentQuestion == 1) {
      currentQuestion = 2;
      const score = this.getScore(this.currentQuestion - 1);
      this.actionProvider.question03();
    }
    else if (lowercase.includes("no") && currentQuestion == 2) {
      currentQuestion = 3;
      const score = this.getScore(this.currentQuestion - 1);
      this.actionProvider.question04();
    }
    else if (lowercase.includes("maybe") && currentQuestion == 3) {
      currentQuestion = 4;
      const score = this.getScore(this.currentQuestion - 1);
      this.actionProvider.question05();
    }

    else if (lowercase.includes("yes") && currentQuestion == 5) {
      currentQuestion = 6;
      const score = this.getScore(this.currentQuestion - 1);
      this.actionProvider.question06();
    }

    else if (lowercase.includes("ques06") && currentQuestion == 6) {
      currentQuestion = 7;
      const score = this.getScore(this.currentQuestion - 1);
      this.actionProvider.question07();
    }

    else if (lowercase.includes("ques07") && currentQuestion == 7) {
      currentQuestion = 8;
      const score = this.getScore(this.currentQuestion - 1);
      this.actionProvider.question08();
    }

    else if (lowercase.includes("ques08") && currentQuestion == 8) {
      currentQuestion = 9;
      const score = this.getScore(this.currentQuestion - 1);
      this.actionProvider.question09();
    }


    //   else
    //   this.actionProvider.errormsg();
  }
}

export default MessageParser;
