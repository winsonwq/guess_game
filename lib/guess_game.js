module.exports = GuessGame;

function GuessGame (readline, output, guess) {
  this.guess = guess;
  this.readline = readline;
  this.output = output;
}

GuessGame.prototype.start = function (end) {
  this.output.write('Welcome!\n');
  var count = 6;

  this.step('Please input your number(' + count + '):', function cb (ret) {
    if (ret == '4A0B') {
      this.output.write('Congratulations!\n');
      end && end();
    } else if (--count){
      this.output.write(ret + '\n');
      this.step('Please input your number(' + count + '):', cb);
    } else {
      this.output.write('Game Over\n');
      end && end();
    }
  });
};

GuessGame.prototype.step = function (questionStr, cb) {
  this.readline.question(questionStr, (function (userInput) {
    cb && cb.call(this, this.guess.verify(userInput));
  }).bind(this));
};
