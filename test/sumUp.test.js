//  Uncomment if using Node
var chai = require('chai');
var SumpUp = require('../js/SumUp');
var assert = chai.assert;

describe('Sum of array values', () => {
  it('should sum up [2, 3, 4, 6] to equals 15', () => {
    assert.equal(SumpUp([2, 3, 4, 6]), 15);
  });
  it('should sum up [2, 7, 4, 3] to equals 16', () => {
    assert.equal(SumpUp([2, 7, 4, 3]), 16);
  });
  it('should sum up [2, 3, 4] to equals 9', () => {
    assert.equal(SumpUp([2, 3, 4]), 9);
  });
  it('should sum up [4, 3, 4, 2] to equals 13', () => {
    assert.equal(SumpUp([4, 3, 4, 2]), 13);
  });
  it('should sum up [2, 3, 4, 6, 4] to equals 19', () => {
    assert.equal(SumpUp([2, 3, 4, 6, 4]), 19);
  });
  it('should sum up [10, 20, 4, 30] to equals 64', () => {
    assert.equal(SumpUp([10, 20, 4, 30]), 64);
  });
  it('should sum up [2, 2] to equals 4', () => {
    assert.equal(SumpUp([2, 2]), 4);
  });
});