const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let sum2 = 0;
  let str = String(n);
  const arr = str.split('');
  arr.forEach((item) => {
    sum += Number(item);
  })
  sum = String(sum);
  if(sum.length > 1) {
    const arr2 = sum.split('');
    sum = Number(sum);
    arr2.forEach((item) => {
      sum2 = sum2 + Number(item)
    })
    return sum2;
  }
  return Number(sum);
}

module.exports = {
  getSumOfDigits
};
