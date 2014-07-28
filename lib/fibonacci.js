var fibonacci = function(number) {
  if(number < 3) {
    return 1;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

var nonRecursiveFibonacci = function(n) {
  fibNumbers = [1, 1];
  for(var i = 0; i < n - 2; i++) {
    fibNumbers.push(fibNumbers[i] + fibNumbers[i + 1]);
  }
  return fibNumbers[fibNumbers.length - 1];
}

console.log(nonRecursiveFibonacci(1))

console.log(nonRecursiveFibonacci(2))

console.log(nonRecursiveFibonacci(3))

console.log(nonRecursiveFibonacci(4))

console.log(nonRecursiveFibonacci(5))

console.log(nonRecursiveFibonacci(6))
