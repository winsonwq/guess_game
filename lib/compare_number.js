var util = require('util');

module.exports = {
  compare: function (answer, guessStr) {
    var answerNums = answer.split('');
    var guessNums = guessStr.split('');
    var numCorrectPos = 0, containsButNotCorrectPos = 0;

    answerNums.forEach(function (num, idx) {
      if(num == guessNums[idx]) {
        numCorrectPos ++;
      } else if(answerNums.indexOf(guessNums[idx]) != -1) {

        containsButNotCorrectPos ++;
      }
    });

    return util.format('%sA%sB', numCorrectPos, containsButNotCorrectPos);
  }
};
