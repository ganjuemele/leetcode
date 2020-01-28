//70
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var method = 0;
  var a = 0;
  var b = 1;
  for( var i =0; i < n; i++){
    method = a + b;
    a = b;
    b= method;
  }
  return method;

  // console.log(a,'+', b, '+', method);
};
climbStairs(6);
