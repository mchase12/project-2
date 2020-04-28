// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};


let containsDuplicates = (str) => {
  let charCount = new Array(26).fill(0), ASCIIcode;
  for (let i in str) {
    ASCIIcode = str[i].toUpperCase().charCodeAt(0) - 65;
    if (charCount[ASCIIcode] > 0 ) {
      return true;
    } else {
      charCount[i]++;
    }
  }
  return false;
};
