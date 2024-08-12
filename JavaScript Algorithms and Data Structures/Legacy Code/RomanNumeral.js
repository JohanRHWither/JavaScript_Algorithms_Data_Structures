function convertToRoman(num) {
    let myNum=num;
    let romanNum="";
    let thPart = Math.floor(myNum/1000);
    let huPart = Math.floor((myNum-(1000*thPart))/100);
    let tePart = Math.floor((myNum%100)/10);
    let unPart = Math.floor((myNum%10))
    console.log(thPart)
    //Thousands
    if(thPart!=0) {
      if(thPart==1) {
        romanNum=romanNum.concat("M")
      } else if(thPart==2) {
        romanNum=romanNum.concat("MM")
      } else if(thPart==3) {
        romanNum=romanNum.concat("MMM")
      }
    }
    //Hundreds
    if(huPart!=0) {
      if(huPart==1) {
        romanNum=romanNum.concat("C")
      } else if(huPart==2) {
        romanNum=romanNum.concat("CC")
      } else if(huPart==3) {
        romanNum=romanNum.concat("CCC")
      } else if(huPart==4) {
        romanNum=romanNum.concat("CD")
      } else if(huPart==5) {
        romanNum=romanNum.concat("D")
      } else if(huPart==6) {
        romanNum=romanNum.concat("DC")
      } else if(huPart==7) {
        romanNum=romanNum.concat("DCC")
      } else if(huPart==8) {
        romanNum=romanNum.concat("DCCC")
      } else if(huPart==9) {
        romanNum=romanNum.concat("CM")
      }
    }
    //Tens
    if(tePart!=0) {
      if(tePart==1) {
        romanNum=romanNum.concat("X")
      } else if(tePart==2) {
        romanNum=romanNum.concat("XX")
      } else if(tePart==3) {
        romanNum=romanNum.concat("XXX")
      } else if(tePart==4) {
        romanNum=romanNum.concat("XL")
      } else if(tePart==5) {
        romanNum=romanNum.concat("L")
      } else if(tePart==6) {
        romanNum=romanNum.concat("LX")
      } else if(tePart==7) {
        romanNum=romanNum.concat("LXX")
      } else if(tePart==8) {
        romanNum=romanNum.concat("LXXX")
      } else if(tePart==9) {
        romanNum=romanNum.concat("XC")
      }
    }
    //Units
    if(unPart!=0) {
      if(unPart==1) {
        romanNum=romanNum.concat("I")
      } else if(unPart==2) {
        romanNum=romanNum.concat("II")
      } else if(unPart==3) {
        romanNum=romanNum.concat("III")
      } else if(unPart==4) {
        romanNum=romanNum.concat("IV")
      } else if(unPart==5) {
        romanNum=romanNum.concat("V")
      } else if(unPart==6) {
        romanNum=romanNum.concat("VI")
      } else if(unPart==7) {
        romanNum=romanNum.concat("VII")
      } else if(unPart==8) {
        romanNum=romanNum.concat("VIII")
      } else if(unPart==9) {
        romanNum=romanNum.concat("IX")
      }
    }
    console.log(romanNum)
   return romanNum;
  }
  
  convertToRoman(3672);
  convertToRoman(3999);