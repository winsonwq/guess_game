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

    question = sinon.stub(rl, 'question');

    game = new GuessGame(rl, process.stdout, guess);
  });

  afterEach(function () {
    process.stdout.write.restore();
    generator.generate.restore();
    question.restore();
  });

  it('should print "Welcome!"', function (done) {
    question.callsArgWithAsync(1, '5678');
    game.start(function end() {
      output.calledWith('Welcome!\n').should.be.true;
      done();
    });
  });

  it('should print "Please input your number(6)!"', function (done) {
    question.callsArgWithAsync(1, '5678');
    game.start(function end() {
      question.calledWith('Please input your number(6):').should.be.true;
      done();
    });

  });

  it('should print "Please input your number(x):" when guesses are always wrong', function (done) {
    question.callsArgWithAsync(1, '5678');
    game.start(function end() {
      question.callCount.should.eql(6);
      question.calledWith('Please input your number(5):').should.be.true;
      question.calledWith('Please input your number(1):').should.be.true;
      question.calledWith('Please input your number(0):').should.not.be.true;
      done();
    });

  });

  it('should print "Game Over" when have no time', function (done) {
    question.callsArgWithAsync(1, '5678');
    game.start(function end() {
      output.calledWith('Game Over\n').should.be.true;
      done();
    });
  });

  it('should print "Congratulations!" when guess correct answer', function (done) {
    question.callsArgWithAsync(1, '1234');
    game.start(function end() {
      output.calledWith('Congratulations!\n').should.be.true;
      done();
    });
  });

});
