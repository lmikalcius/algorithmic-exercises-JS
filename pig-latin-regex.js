function convertWordToPigLatin(inputWord) {
  if (/\b[aeiou]/.test(inputWord)) {
    return inputWord;
  } else {
    var leadingConsonantsRegEx = /\b([^aeiou]+)/;
    var leadingConsonants = inputWord.match(leadingConsonantsRegEx)[0];
    var convertedWord = inputWord.replace(leadingConsonantsRegEx, "");
    convertedWord += leadingConsonants + "ay";
    return convertedWord;
  }
}


// Very raw, needs to be refactored at least for clarity and to flatten the 
// nested conditionals (pull out 19-33 into other methods at the least), currently factors
// in punctuation and hyphens
function convertSentence(inputSentence) {
  var splitSentence = inputSentence.split(" ");
  var convertedSentence = [];
  for (var i = 0; i < splitSentence.length; i++) {
    if(/\W/.test(splitSentence[i])) { // test to see if there's any punctuation or hyphens in the current word
      if(/\w/.test(splitSentence[i])) { // if there's any word characters split
        var specialCase = splitSentence[i].match(/(\w+)|(\W+)/g); // match groups of either punctuation or not punctuation - look into \b, didn't realize originally this caught hyphens and such
        var specialCaseConverted = [];
        for (var j = 0; j < specialCase.length; j++) {
          if(/\w/.test(specialCase[j])) {
            specialCaseConverted.push(convertWordToPigLatin(specialCase[j])); // if it's a word convert it to pig latin
          } else {
            specialCaseConverted.push(specialCase[j]); // if it's punctuation simply push it onto the array
          }
        }
        convertedSentence.push(specialCaseConverted.join(""));
      } else {
        convertedSentence.push(splitSentence[i]);
      }
    } else {
      convertedSentence.push(convertWordToPigLatin(splitSentence[i])); // otherwise simply push the converted word
    }
  }
  return convertedSentence.join(" ");
}

console.log(convertWordToPigLatin("animal"));
console.log(convertWordToPigLatin("prayers"));
console.log(convertSentence("animals are the best"));
console.log(convertSentence("animals are the best... right? am i right john-phillips?"));
