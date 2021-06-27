/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.arr = [];
  this.size = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  if (this.arr.length >= this.size) {
    this.arr.shift();
  }
  
  this.arr.push(val);
  return this.arr.reduce((a, b) => a + b, 0) / this.arr.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */