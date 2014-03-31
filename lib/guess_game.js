module.exports = GuessGame;

function GuessGame (readline, output, guess) {
  this.guess = guess;
  this.readline = readline;
  this.output = output;
}

GuessGame.prototype.start = function () {
  this.output.write('Welcome!\n');

  for (var count = 6; count > 0; count--) {
    this.readline.question('Please input your number(' + count + '):', this.proxy(function (userInput) {
      var ret = this.guess.verify(userInput);
    }));
  }

  if (count == 0) {
    this.output.write('Game Over\n');
  }
};

GuessGame.prototype.proxy = function (fn) {
  var that = this;
  return function () {
    return fn.apply(that, arguments);
  };
};
