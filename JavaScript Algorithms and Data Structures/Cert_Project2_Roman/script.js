const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const result = document.getElementById("output");


const convertToRoman = (num) => {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let romanNum = '';
  
    for (const [roman, value] of Object.entries(romanNumerals)) {
      while (num >= value) {
        romanNum += roman;
        num -= value;
      }
    }
  
    return romanNum;
  };


const checkInput = () => {
  const numberToConvert = parseInt(input.value);
  result.style.fontSize = "17px";
  result.classList.remove("hide");
  if (numberToConvert === '' || isNaN(numberToConvert)) {
    result.textContent = "Please enter a valid number";
    return;
  }
  if (numberToConvert === 4000 ) {
    result.textContent = "Please enter a number less than or equal to 3999";
    return;
  } else if (numberToConvert === -1) {
    result.textContent = "Please enter a number greater than or equal to 1";
    return;
  } else if (numberToConvert>4000) {
    result.textContent = "Please enter a number less than or equal to 3999";
    return;
  } else if (numberToConvert < 1) {
    result.textContent = "Please enter a number greater than or equal to 1";
    return;
  } else {
    result.style.fontSize = "40px";
    result.textContent = convertToRoman(numberToConvert);
  }
  
}

button.addEventListener("click", checkInput);
