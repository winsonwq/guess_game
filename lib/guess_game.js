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
      end();
    } else if (--count){
      this.step('Please input your number(' + count + '):', cb);
    } else {
      this.output.write('Game Over\n');
      end();
    }
  });
};

GuessGame.prototype.step = function (questionStr, cb) {
  this.readline.question(questionStr, this.proxy(function (userInput) {
    cb && cb.call(this, this.guess.verify(userInput));
  }));
};

GuessGame.prototype.proxy = function (fn) {
  var that = this;
  return function () {
    return fn.apply(that, arguments);
  };
};
