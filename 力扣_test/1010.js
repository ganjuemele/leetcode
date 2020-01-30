//1010
var numPairsDivisibleBy60 = function(time) {
  let couple = 0;
  const length = time.length;
  for (let i = 0; i< length; i++) {
    let temp = time[i];
    for (let j =i+1; j< length; j++) {

      if ((temp + time[j]) % 60 === 0){
        couple++;
      }
      // console.log(i,j)
    }
    if (i === length-1) {
      // return console.log('return ',couple);
      return couple;
    }
  }
};
// numPairsDivisibleBy60([30,20,150,100,40]);
numPairsDivisibleBy60([60,60,60]);
