function palindrome(str) {
    //Regex to filter unwanted characters
    let filterRegex = /[^a-z0-9]/gi;
    
    //Clean String
    let cleanStr = str.replace(filterRegex,"");
    cleanStr=cleanStr.toLowerCase();
    let normalList = cleanStr.split("");
    let reversedList = cleanStr.split("").reverse();
    console.log(normalList)
    console.log(reversedList)
    for(let i=0;i<normalList.length;i++) {
      if(normalList[i]!=reversedList[i]) {
        console.log(false);
        return false
      }
    }
    console.log(true);
    return true
  }
  
  palindrome("eye");
  palindrome("_eye");
  palindrome("race car");
  palindrome("not a palindrome");
  palindrome("A man, a plan, a canal. Panama!");
  palindrome("never odd or even");
  palindrome("nope");
  palindrome("almostomla");