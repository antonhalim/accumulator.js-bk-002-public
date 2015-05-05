var accumulate = function (array, accumulator) {
  var result = [];
  for(var i = 0; i < array.length; i++){
    result.push(accumulator(array[i]));
  }
  return result;
};
