function convertToRomanNumeral(arabic) {
  var convertedToRoman = "";
  var convertedTable = {
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

  for (var sym in convertedTable) {
    while(arabic >= convertedTable[sym]) {
      convertedToRoman += sym;
      arabic -= convertedTable[sym];
    }
  }
  return convertedToRoman;
}

console.log(convertToRomanNumeral(12000));
console.log(convertToRomanNumeral(94));
console.log(convertToRomanNumeral(99));
console.log(convertToRomanNumeral(944));
