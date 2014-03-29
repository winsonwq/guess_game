var util = require('util');

module.exports = {
  compare: function (a, b) {
    var aNums = a.split('');
    var bNums = b.split('');
    var numCorrectPos = 0, containsButNotCorrectPos = 0;

    aNums.forEach(function (num, idx) {
      if(num == bNums[idx]) {
        numCorrectPos ++;
      } else if(aNums.indexOf(bNums[idx]) != -1) {

        containsButNotCorrectPos ++;
      }
    });
    
    return util.format('%sA%sB', numCorrectPos, containsButNotCorrectPos);
  }
};
