var readline = require('readline');

var Game = require('./guess_game');
var Guess = require('./guess');
var CompareNumber = require('./compare_number');
var AnswerGenerator = require('./answer_generator');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var game = new Game(rl, process.stdout, new Guess(CompareNumber, new AnswerGenerator));
game.start();
