//441.排列硬币
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  var rowNum = 0;
  var s = n;
  if(n ==0) {
    return 0;
  }else if(n >0){
    for(var i = 1; i <= n; i++){
      if(s < i){
        return rowNum;
      }else if(s == i){
        return rowNum + 1;
      }else{
        s = s - i;
        rowNum ++;
        // console.log(rowNum);
      }
    }
  }
  // console.log(rowNum);
};
console.log(arrangeCoins(8));

// 执行用时 : 132 ms, 在所有 JavaScript 提交中击败了47.18%的用户
// 内存消耗 : 36 MB, 在所有 JavaScript 提交中击败了65.75%的用户
