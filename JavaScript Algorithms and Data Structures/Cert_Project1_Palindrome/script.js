const input = document.querySelector('#text-input');
const button = document.querySelector('#check-btn');
const result = document.querySelector('#result');

button.addEventListener('click', function() {
    if (input.value === '') {
        alert('Please input a value');
        return;
    }
    if(palindrome(input.value)) {
        result.innerText = `${input.value} is a palindrome`
        result.style.display = 'block';
    } else {
        result.innerText = `${input.value} is not a palindrome`;
        result.style.display = 'block';
    }
})

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
    return true
  }

  