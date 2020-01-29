//1287

var findSpecialInteger = function(arr) {
  const length = arr.length;
  if(arr.length > 1) {
    for (let i =0; i<arr.length; i++) {
      let temp = arr[i];
      let times = 0;

      for(let j =1; j<arr.length; j++) {
        if (temp === arr[j]){
          times++;
          if (times/length > 0.25) {
            console.log('return '+ arr[j]);
            return arr[i]
          }
          arr.splice(j,1);
          j--;
          console.log(times+' 个 '+temp);
        } else {
          console.log('不相同，跳过')
        }
      }
    }
  }else return arr[0];

};
// findSpecialInteger([1,2,2,6,6,6,6,7,10,10]);
findSpecialInteger([1,2,3,3]);
