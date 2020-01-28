//509
/**
 * @param {number} N
 * @return {number}
 */
  var fib = function(N) {

    var Arr = [0,1];
    for(var i = 2; i <= N; i++){
      Arr[i] = Arr[i-1]+Arr[i-2];
      console.log(Arr)
    }

    return Arr[N];

  };
  fib(3);
