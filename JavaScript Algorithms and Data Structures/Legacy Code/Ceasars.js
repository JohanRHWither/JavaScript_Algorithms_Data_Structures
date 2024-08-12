//Function that de-decifers each character
function getChar(str) {
    let numPos = str.charCodeAt(0)-65;
    numPos = numPos - 13;
    if(numPos < 0) {
      numPos = numPos + 26;
    }
    return String.fromCharCode(numPos+65);
  }
  
  function rot13(str) {
    let myStr = "";
    for(let i=0;i<str.length;i++) {
      if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) {
        myStr = myStr.concat(getChar(str[i]))
      } else {
        myStr = myStr.concat(str[i])
      }
    }
    console.log(myStr)
    return myStr;
  }
  
  rot13("SERR PBQR PNZC");