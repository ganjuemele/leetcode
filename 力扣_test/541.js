// 给定一个字符串和一个整数 k，你需要对从字符串开头算起的每个 2k 个字符的前k个字符进行反转。
// 如果剩余少于 k 个字符，则将剩余的所有全部反转。如果有小于 2k 但大于或等于 k 个字符，
// 则反转前 k 个字符，并将剩余的字符保持原样。
//  输入: s = "abcdefg", k = 2
//  输出: "bacdfeg"
// 该字符串只包含小写的英文字母
// 给定字符串的长度和 k 在[1, 10000]范围内

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  var sStr,sArr=[], j = 0;
  if(s.length >= 2*k){
    for(var i = k; i <= s.length; i+=k){
      sStr = (s.slice(j, i)).split('');
      j = i;
      var m = s.length % k, lastStr;
      if(i/k%2 == 1){
        sStr = sStr.reverse().toString().replace(/,/gi, '');
        // console.log('1= ', sStr);
      }
      else if(i/k %2 == 0){
        sStr = sStr.toString().replace(/,/gi,'');
        // console.log('0= ', sStr)
      }
      var n = sArr.push(sStr);
      var newStr = sArr.toString().replace(/,/gi,'');
    }
      if(s.length % (2*k) < k) {
        lastStr = s.slice(s.length-m, s.length).split('').reverse().toString().replace(/,/gi, '');
        var n = sArr.push(lastStr);
        sArr = sArr.toString().replace(/,/gi, '');
        return  sArr;
      }else{
      lastStr = s.slice(s.length-m, s.length).split('').toString().replace(/,/gi, '');
      var n = sArr.push(lastStr);
      sArr = sArr.toString().replace(/,/gi, '');
      return  sArr;
    }
  }else{
    sStr = s.slice(0, k).split('').reverse().toString().replace(/,/gi, '');
    var secStr = s.slice(k, s.length);
    sStr = sStr + secStr;
    return  sStr;
  }
};
reverseStr('abcd', 3);
// console.log('++++'+reverseStr('abcdefgh', 2),"==")
