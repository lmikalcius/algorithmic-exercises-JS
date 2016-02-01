function fibonacciIterative(input) {
  // Alternate solution
  // var fib = [0, 1];
  // if (input === 0) return 0;
  // if (input === 1) return 1;
  // for (var i = 2; i <= input; i++) {
  //   fib.push(fib[i-1] + fib[i-2]);
  // }
  // return fib[fib.length - 1];
  var a = 0, b = 1, f = 1;
  if (input === 0) return 0;
  for (var i = 2; i <= input; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
}

function fibonacciRecursive(input) {
  if (input === 0) return 0;
  if (input === 1) return 1;
  return fibonacciRecursive(input - 1) + fibonacciRecursive(input - 2);
}

console.log(fibonacciIterative(2));
console.log(fibonacciIterative(3));
console.log(fibonacciIterative(4));
console.log(fibonacciIterative(5));
console.log(fibonacciIterative(6));
console.log(fibonacciIterative(8));

console.log(fibonacciRecursive(2));
console.log(fibonacciRecursive(3));
console.log(fibonacciRecursive(4));
console.log(fibonacciRecursive(5));
console.log(fibonacciRecursive(6));
console.log(fibonacciRecursive(8));