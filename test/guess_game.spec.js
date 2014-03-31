var sinon = require('sinon');
var readline = require('readline');
var should = require('chai').should();

var GuessGame = require('../lib/guess_game.js');
var Guess = require('../lib/guess');
var CompareNumber = require('../lib/compare_number');
var AnswerGenerator = require('../lib/answer_generator');

describe('guess game', function () {

  var output, game, input, generator, guess, answerGen, question, rl;

  beforeEach(function () {
    output = sinon.spy(process.stdout, 'write');

    generator = new AnswerGenerator;
    answerGen = sinon.stub(generator, 'generate').returns('1234');

    guess = new Guess(CompareNumber, generator);

    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    question = sinon.stub(rl, 'question').callsArgWithAsync(1, '5678');

    game = new GuessGame(rl, process.stdout, guess);
  });

  afterEach(function () {
    process.stdout.write.restore();
    generator.generate.restore();
    question.restore();
  });

  it('should print "Welcome!\n"', function () {
    game.start();
    output.calledWith('Welcome!\n').should.be.true;
  });

  it('should print "Please input your number(6)!\n"', function () {
    game.start();
    question.calledWith('Please input your number(6):').should.be.true;
  });

  it('should print "Please input your number(x):"\n when guesses are always wrong', function () {
    game.start();
    question.callCount.should.eql(6);
    question.calledWith('Please input your number(5):').should.be.true;
    question.calledWith('Please input your number(1):').should.be.true;
    question.calledWith('Please input your number(0):').should.not.be.true;
  });

  it('should print "Game Over" when have no time', function () {
    game.start();
    output.calledWith('Game Over\n').should.be.true;
  });

  it('should print "Congratulations!" when guess correct answer', function () {
    question.callsArgWithAsync(1, '1234');
    output.calledWith('Congratulations!\n').should.be.true;
  });

});
