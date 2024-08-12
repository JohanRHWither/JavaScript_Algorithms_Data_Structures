function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let totalCID = 0;
    for (let element of cid) {
      totalCID += element[1];
    }
    totalCID = totalCID.toFixed(2);
    if (change > totalCID) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (change == totalCID) {
      return {status: "CLOSED", change: cid};
    } else {
      let changeArr = [];
      cid = cid.reverse();
      const currencyUnit = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
      };
      for (let i = 0; i < cid.length; i++) {
        const currency = cid[i][0];
        const currencyTotal = cid[i][1];
        const currencyValue = currencyUnit[currency];
        let currencyAmount = (currencyTotal / currencyValue).toFixed(0);
        let returnedCurrency = 0;
        while (change >= currencyValue && currencyAmount > 0) {
          change -= currencyValue;
          change = change.toFixed(2);
          currencyAmount--;
          returnedCurrency += currencyValue;
        }
        returnedCurrency = Number(returnedCurrency.toFixed(2));
        if (returnedCurrency > 0) {
          changeArr.push([currency, returnedCurrency]);
        }
      }
      if (change > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      } else {
        return {status: "OPEN", change: changeArr};
      }
    }
  }
  
  //checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
  let a = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  
  console.log(a)
