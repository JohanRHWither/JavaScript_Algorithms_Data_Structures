function convertToRoman(num) {
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
  }
  
  console.log(convertToRoman(3672));
  console.log(convertToRoman(3999));