module.exports = Guess;

function Guess(compareNum, answerGen) {
  this.compareNum = compareNum;
  this.answer = answerGen.generate();
}

Guess.prototype.verify = function (userInput) {
  return this.compareNum.compare(this.answer, userInput);
};
