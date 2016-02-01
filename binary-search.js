// driver tests at bottom, forgive me, I'll clean up with better testing later


// Returns either the index of (the first instance found) of "number"
// or -1 if not found in an ordered array ("collection")
function binarySearchRecursive(number, collection, bottom, top) {
  bottom = typeof bottom !== 'undefined' ? bottom : 0; // Default argument of 0
  top = typeof top !== 'undefined' ? top : (collection.length - 1); // Default argument of the last index
  var currentGuessIndex = bottom + Math.floor((top - bottom)/2); // Guess of the middle rounded down

  if (bottom > top) return -1;                                           // base case
  if (number === collection[currentGuessIndex]) return currentGuessIndex;// base case

  // search through a smaller ranger
  if (number < collection[currentGuessIndex]) {
    return binarySearchRecursive(number, collection, bottom, currentGuessIndex - 1);
  } else {
    return binarySearchRecursive(number, collection, currentGuessIndex + 1, top);
  }
}



// For performance, here is an iterative solution
function binarySearchIterative(number, collection) {
  var bottom = 0;
  var top = collection.length - 1;
  var currentGuessIndex = Math.floor((top + bottom) / 2);

  // make the range to search smaller until either the number was found or there is nothing left to search
  while (collection[currentGuessIndex] !== number && bottom < top) {
    if (number < collection[currentGuessIndex]) {
      top = currentGuessIndex - 1;
    } else if (number > collection[currentGuessIndex]) {
      bottom = currentGuessIndex + 1;
    }
    currentGuessIndex = Math.floor((top + bottom) / 2); // recalculate a new middle
  }

  return number === collection[currentGuessIndex] ? currentGuessIndex : -1
}



// Returns true if the number is in an ordered array given as collection, false otherwise (recursive)
function binarySearchBoolean(number, collection) {
  if (collection.length === 0) return false; // base case

  var currentGuessIndex = Math.floor(collection.length/2);

  if (number === collection[currentGuessIndex]) {
    return true; // base case
  } else if (number < collection[currentGuessIndex]) {
    return binarySearchBoolean(number, collection.slice(0, currentGuessIndex)); // search through a smaller ranger
  } else {
    return binarySearchBoolean(number, collection.slice(currentGuessIndex + 1)); // search through a smaller ranger
  }
}

console.log("recursive");
console.log(binarySearchRecursive(5, [1, 3, 3, 3, 3, 4, 5, 6])); // 6
console.log(binarySearchRecursive(4, [2, 3, 3, 3, 3, 4])); // 5
console.log(binarySearchRecursive(0, [0])); // 0
console.log(binarySearchRecursive(1, [1, 3])); // 0
console.log(binarySearchRecursive(6, [1, 3, 3, 6])); // 3
console.log(binarySearchRecursive(5, [1, 3, 3, 3, 3, 4, 4, 5, 6])); // 7
console.log(binarySearchRecursive(8, [1, 3, 4, 5, 6])); // -1
console.log(binarySearchRecursive(7, [1, 3, 4, 5, 6])); // -1
console.log(binarySearchRecursive(2, [1, 3])); // -1
console.log(binarySearchRecursive(0, [1, 3])); // -1
console.log(binarySearchRecursive(1, [0])); // -1

console.log("iterative");
console.log(binarySearchIterative(5, [1, 3, 3, 3, 3, 4, 5, 6])); // 6
console.log(binarySearchIterative(4, [2, 3, 3, 3, 3, 4])); // 5
console.log(binarySearchIterative(0, [0])); // 0
console.log(binarySearchIterative(1, [1, 3])); // 0
console.log(binarySearchIterative(6, [1, 3, 3, 6])); // 3
console.log(binarySearchIterative(5, [1, 3, 3, 3, 3, 4, 4, 5, 6])); // 7
console.log(binarySearchIterative(8, [1, 3, 4, 5, 6])); // -1
console.log(binarySearchIterative(7, [1, 3, 4, 5, 6])); // -1
console.log(binarySearchIterative(2, [1, 3])); // -1
console.log(binarySearchIterative(0, [1, 3])); // -1
console.log(binarySearchIterative(1, [0])); // -1

console.log("boolean");
console.log(binarySearchBoolean(6, [1, 3, 3, 3, 4, 5, 6])); // true
console.log(binarySearchBoolean(5, [1, 3, 3, 3, 3, 4, 5, 6])); // true
console.log(binarySearchBoolean(2, [1, 1, 2, 3])); // true
console.log(binarySearchBoolean(1, [1, 3])); // true
console.log(binarySearchBoolean(0, [0])); // true
console.log(binarySearchBoolean(8, [1, 3, 4, 5, 6])); // false
console.log(binarySearchBoolean(7, [1, 3, 4, 5, 6])); // false
console.log(binarySearchBoolean(2, [1, 3])); // false
console.log(binarySearchBoolean(0, [1, 3])); // false
console.log(binarySearchBoolean(1, [0])); // false