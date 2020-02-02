//58

var lengthOfLastWord = function (s) {
  let n = s.split(' ').reverse();
  let length = n.length;
  for (let i = 0; i < length; i++) {
    console.log(n);
    if (n[i] !== '') {
      console.log(n[i].split('').length);
      return n[i].split('').length;
    }
    if (i === length-1 && n[i] === '') {
      return 0
    }
  }



};
// lengthOfLastWord('hello world');
lengthOfLastWord('a  ');
// lengthOfLastWord('     ');
// lengthOfLastWord("Today is a nice day");
