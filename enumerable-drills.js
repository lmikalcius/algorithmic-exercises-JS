// A drill of building out functions I did at DBC in Ruby, thought
// it would be a quick refresher while first learning JS

function isOdd(input) {
  return input % 2 !== 0;
}


function oddIndexedIntegers(input) {
  var collectedOddIndexedIntegers = [];
  for (var i = 0; i < input.length; i++) {
    if (isOdd(i)) {
      collectedOddIndexedIntegers.push(input[i]);
    }
  }
  return collectedOddIndexedIntegers;
}
console.log(oddIndexedIntegers([0, 1, 2, 3, 4, 5]));


function findOddIntegers(input) {
  return input.filter(isOdd);
}
console.log(findOddIntegers([100, 1, 2, 57, 3, 4, 5, 7]));


function findFirstUnder(input, limit) {
  for (var i = 0; i < input.length; i++) {
    if(input[i] < limit) {
      return input[i];
    }
  }
  return "No number under limit";
  // For ES6
  // input.find(function(el) {
  //   return el < limit
  // });

}
console.log(findFirstUnder([100, 50, 25, 20, 19, 18], 19));


function addBang(input) {
  return input.map(function(element) {
    return element + "!";
  });
}
console.log(addBang(["Linas", "James", "Josie"]));

function findSum(input) {
  return input.reduce(function(previousValue, currentValue, currentIndex, array){
    return previousValue + currentValue;
  });
}
console.log(findSum([0, 1, 2, 4, 5, 1]));

// sort units of three in the array by alphabetical order
function sortTriples(input) {
  var newArray = [];
  while (input.length > 0) {
    newArray.push(input.splice(0,3).sort());
  }
  return newArray;
}
console.log(sortTriples(["Aaron", "Linas", "Fools", "Eat", "Birds", "Stuff"]));