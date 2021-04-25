function IsEnglishAlphabet(letter){
  if(letter>='a' && letter<='z'){
    return true
  }else if(letter>='A' && letter<='Z'){
    return true
  }
  
  return false
}
function capitalize(str) {
  var result = ''

  if(IsEnglishAlphabet(str[0]))
    result += str[0].toUpperCase()

  for(i=1; i<str.length; i++)
    result += str[i]

  return result

}

console.log(capitalize('hello'));
console.log(capitalize(',hello'));
console.log(capitalize('nick'));
console.log(capitalize('Nick'));
