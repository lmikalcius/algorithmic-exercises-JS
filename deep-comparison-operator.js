function deepComparison(value1, value2) {
  if ((typeof value1 === "object" && value1 !== null) &&
      (typeof value2 === "object" && value2 !== null)) {
    for (prop in value1) {
      if (!compareKeys(value1, value2)) return false;
      if (!deepComparison(value1[prop], value2[prop])) return false;
    }
    return true;
  } else {
    return value1 === value2;
  }
}

function compareKeys(obj1, obj2) {
  keys1 = Object.keys(obj1).sort;
  keys2 = Object.keys(obj2).sort;
  if (keys1.length !== keys2.length) return false;
  for (var i = 0; i < keys1.length; i++)
    if (keys1[i] !== keys2[i]) return false;
  return true;
}

var obj1 = {name: "Linas", stuff: "extra", rest: {middle: "Richard", last: "Mikalcius"}};
var obj2 = {name: "Linas", rest: {middle: "Richard", last: "Mikalcius"}, stuff: "extra"};

console.log(deepComparison(obj1, obj2));


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
