module.exports = AnswerGenerator;

const DUPLICATION_COUNT = 4;

function AnswerGenerator () {
  this.arr = [];
}

AnswerGenerator.prototype = {
  constructor: AnswerGenerator,
  nextInt: function () {
    var num = parseInt(Math.random() * 10);
    if(!contained(this.arr, num)) {

      this.arr.push(num);

      if(this.arr.length >= DUPLICATION_COUNT) {
        this.arr.length = 0;
      }

      return num;
    } else {
      return this.nextInt();
    }
  },
  generate: function () {
    return [
      this.nextInt(),
      this.nextInt(),
      this.nextInt(),
      this.nextInt()
    ].join('');
  }
};

function contained(nums, num) {
  return nums.filter(function (n) { return n === num }).length > 0;
}
