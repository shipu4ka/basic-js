const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  console.log(arr);
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if(!arr.length) {
    return arr;
  }
  const newArr = [...arr];
  const resultArr = [];
  newArr.forEach((item, i) => {
    if(typeof(item) === 'number') {
      resultArr.push(item);
    } else if(item === '--discard-next' && i !== newArr.length - 1) {
      newArr.splice(item, 2);
    } else if (item === '--discard-prev' && i !== 0) {
      resultArr.pop();
    } else if (item === '--double-next' && i !== newArr.length - 1) {
      resultArr.push(newArr[i + 1]);
    } else if (item === '--double-prev' && i !== 0) {
      resultArr.push(newArr[i - 1]);
    };
  });
}


module.exports = {
  transform
};
