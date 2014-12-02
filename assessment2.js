  var arr1 = [1,2,3,4,5];
  var arr2 = [6,7,8,9,10];

var addArray = function(x,y) {
  var newArray = [];
  for (i=0; i < x.length; i++) {
    newArray[i] = x[i] + y[i];
  }
  return newArray;
}

console.log(addArray(arr1,arr2));
