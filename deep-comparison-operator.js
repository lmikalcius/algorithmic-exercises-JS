function deepEqual(value1, value2) {
  if (value1 === value2) {
    return true;
  } else if ((typeof value1 === "object" && value1 !== null) &&
             (typeof value2 === "object" && value2 !== null)) {   // If they are objects and not null do a deep comparison
    if (!arraysEqual(Object.keys(value1), Object.keys(value2))) { // Check to see if the keys of the objects are equal
      return false;
    }
    for (var prop in value1) { // Check to see if the values of each key are equal
      if (!deepEqual(value1[prop], value2[prop])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function arraysEqual(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for(var i = arr1.length; i--;) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


// Eloquent JavaScript way

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;

  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}
