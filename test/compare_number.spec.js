var should = require('chai').should();
var CompareNumber = require('../lib/compare_number');

describe('compare number', function () {

  it('could return 4A0B when comparing 1234 and 1234', function () {
    CompareNumber.compare('1234', '1234').should.eql('4A0B');
  });

  it('could return 0A4B when comparing 1234 and 4321', function () {
    CompareNumber.compare('1234', '4321').should.eql('0A4B');
  });

  it('could return 1A2B when comparing 1324 and 1435', function () {
    CompareNumber.compare('1324', '1435').should.eql('1A2B');
  });

  it('could return 0A0B when comparing 1234 and 5678', function () {
    CompareNumber.compare('1234', '5678').should.eql('0A0B');
  });

});
