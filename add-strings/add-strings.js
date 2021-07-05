/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  //  356
  //  777
  // 1133
  let curry = 0;
  let result = '';
  
  let i = num1.length - 1;
  let j = num2.length - 1;
  
  while (i >= 0 || j >= 0) {
    const n1 = num1[i] || 0;
    const n2 = num2[j] || 0;
    
    let sum = +n1 + +n2 + curry;
    
    if (sum > 9) {
      curry = 1;
      sum %= 10;
    } else {
      curry = 0;
    }
    
    result = `${sum}${result}`;
    
    i -= 1;
    j -= 1;
  }
  
  return curry > 0 ? `${curry}${result}` : result;
};