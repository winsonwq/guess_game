var sinon = require('sinon');
var should = require('chai').should();

var Guess = require('../lib/guess');
var CompareNumber = require('../lib/compare_number');
var AnswerGenerator = require('../lib/answer_generator');

describe('guess', function () {

  var guess, answerGen;

  beforeEach(function () {
    var generator = new AnswerGenerator;
    answerGen = sinon.stub(generator, 'generate').returns('1243');
    guess = new Guess(CompareNumber, generator);
  });

  it('should return 2A2B when guess 1234 to match answer 1243', function () {
    guess.verify('1234').should.eql('2A2B');
  });

});
