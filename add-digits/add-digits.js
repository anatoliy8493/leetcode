/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let str = String(num);
  
  while (str.length > 1) {
    str = String(str.split('').reduce((a, b) => +a + +b, 0));
  }
  
  return str;
};