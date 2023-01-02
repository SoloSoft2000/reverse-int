module.exports = function reverse (n) {
  const str = Math.abs(n).toString(10);
  newStr = "";
  for (i = str.length-1; i >= 0; i--) {
    if(str!="-") {
        newStr += str[i];
    }
  }
  myNum = Number(newStr);
  return(myNum);
}
