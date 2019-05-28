function reverse(str){
  return reverseArray = str.trim().split(' ').map((x, index) => index%2 !== 0 ? x.split("").reverse().join("") : x).join(' ');
}
