function join(arr, concatStr) {
  var result = []
  var temp = ''

  if(concatStr)
    temp = concatStr
  
  for(let i=0; i<arr.length; i++){
    if(i === arr.length-1) 
      result += arr[i]
    else
      result += (arr[i]+temp)
  }

   return result
 
}

function repeat(str, times) {
  var result = ''
  
  for(let i=0; i<times; i++)
    result += str  

  return result
}

console.log(join(['a'], '!'));
console.log(join([1,2,3], ''));
console.log(join(["a","b","c"], '!'));
console.log(join(["a", 1, "b", 2, "c", 3], ','));
console.log(repeat('a', 5));
console.log(repeat('yoyo', 2));
