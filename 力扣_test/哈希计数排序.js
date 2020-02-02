let countSort = arr => {
  let hashTable = {}, max = 0,result = [];
  for (let i=0; i< arr.length; i++) {
    if( !(i in hashTable)) {
      hashTable[arr[i]] = 1;
    } else {
      hashTable[arr[i]] +=1;
    }
    if(arr[i]> max) {
      max = arr[i]
    }
  }
  // for (let key in hashTable) {
  //   console.log(typeof key ) // key 为 string
  // }
  // console.log(hashTable['4'] === hashTable[4]);
  for (let j=0; j<= max; j++) {

    if (j in hashTable) {
      result.push(j);
    }
    console.log(j);
  }
  console.log(result[0]);
  return result;
};

countSort([9,7,5,7,4,8,4,6,8,3,5,0]);
