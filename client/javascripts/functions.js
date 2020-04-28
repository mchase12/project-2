// jshint esversion: 6


let revWords1 = (sentence) => {
    var words = sentence.split(" ");
    var temp;
    for (var i = 0; i < words.length; i++) {
        temp = "";
        for (var j = words[i].length-1; j >= 0; j--) {
            temp += words[i][j];
        }
        words[i] = temp;
    }
    return words.join(" ");
}

let revWords2 = (sentence) => {
    var arr = sentence.split(" ");
    var temp;
    arr.forEach((char) => {
      temp = char + temp;
    });
    for (var i = 0; i < arr.length; i++) {
        temp = "";
        for (var j = arr[i].length-1; j >= 0; j--) {
            temp += arr[i][j];
        }
        arr[i] = temp;
    }
    return arr.join(" ");
}


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
