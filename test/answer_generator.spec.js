var AnswerGen = require('../lib/answer_generator');

describe('answer generator', function () {

  var answerGen;

  beforeEach(function () {
    answerGen = new AnswerGen();
  });

  it('could generate a number', function () {
    answerGen.nextInt().should.be.a('number');
  });

  it('should generate a integer', function () {
    answerGen.nextInt().toString().length.should.eql(1);
  });

  it('could generate different two nums', function () {
    var num1 = answerGen.nextInt();
    var num2 = answerGen.nextInt();
    num1.should.not.eql(num2);
  });

  it('could generate 4 nums without duplication', function () {
    var num1 = answerGen.nextInt();
    var num2 = answerGen.nextInt();
    var num3 = answerGen.nextInt();
    var num4 = answerGen.nextInt();

    var nums = [num1, num2, num3, num4];
    for(var i = 0; i < 4 ; i++) {
      for(var j = i + 1 ; j < 4; j++){
        nums[i].should.not.eql(nums[j]);
      }
    }
  });

  it('could generate answer without dupicated num', function () {
    var answer = answerGen.generate();
    var nums = answer.split('');
    for(var i = 0; i < 4 ; i++) {
      for(var j = i + 1 ; j < 4; j++){
        nums[i].should.not.eql(nums[j]);
      }
    }
  });

});
