//463.  岛屿的周长
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  var unitPerimeter = 4;  //单位周长
  var sum = 0;
  var len = grid.length; //竖长
  var landWidth = grid[0].length; //横宽
  grid.forEach(function (value) {
    value.forEach (function(hasLand) {
      sum += hasLand
    })
  });
  var perimeter = sum * unitPerimeter;
    // console.log(perimeter); //周长
  for(var i = len-1; i>= 0; i--){
    console.log(i);
    for(var j = landWidth-1; j >= 0; j--){
      var a = grid[i][j];
      console.log(i, j);
      if(j>0) {
        if (a + grid[i][j - 1] == 2) {
          perimeter -= 2;
        }
      }
      if(i>0){
        if(grid[i][j] + grid[i-1][j] == 2){
          perimeter -= 2;
        }
      }
    }
  }
    return perimeter;
};
// islandPerimeter([[0,1,0,0],
//   [1,1,1,0],
//   [0,1,1,0],
//   [1,1,0,0]]);
console.log(islandPerimeter([[1,1]]))
