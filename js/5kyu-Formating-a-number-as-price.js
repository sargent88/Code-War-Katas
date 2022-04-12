var numberToPrice = function (number) {
  if (isNaN(number) || typeof number == "string") {
    return "NaN";
  } else {
    decimal = "";
    stringNum = number.toString();
    numArray = stringNum.split(".");
    if (numArray[1] == undefined) {
      decimal = ".00";
    } else if (numArray[1].length == 0) {
      decimal = ".00";
    } else if (numArray[1].length == 1) {
      decimal = "." + numArray[1] + "0";
    } else {
      remainder = numArray[1].slice(0, 2);
      decimal = "." + remainder;
    }
    num = numArray[0] * 1;
    commaNum = num.toLocaleString();
    return commaNum + decimal;
  }
};
