//551
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  //   LLL
  // A     A
  var sArr_A = s.match(/A/gi);
  var sArr_LLL = s.match(/LLL/gi);
  console.log(sArr_A, sArr_A == ['A']);
  console.log(typeof sArr_A)
  if(sArr_LLL == null){
    if(sArr_A == null){
      return true;
    }
    if(sArr_A.length == 1){
      return true
    }
    else{
      return false;
    }
  }else{
    return false
  }
  // if(sArr_A.length <= 2 && sArr_LLL == null){
  //   return true
  // }else
  //   return false
};
console.log(checkRecord('PPPPPALAL'));
