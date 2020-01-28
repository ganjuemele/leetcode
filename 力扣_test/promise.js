/**
 * Created by xubin on 2019/10/20.
 */
var XXX = new Promise(function (resolve, reject) {
  var a = 1;
  if (a === 1) {
    resolve(a);
    console.log('a= '+a)
  } else {
    reject(error)
  }
});
XXX.then(
  value => {console.log(value++);
  return value
}).catch (
  error => console.log(error)
).then (
  value => console.log("'a'",value++)
);
// console.log(XXX);

