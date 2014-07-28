def non_recursive_fibonacci(n)
  fib_array = [1, 1]
  (n-2).times { fib_array << (fib_array[-2] + fib_array[-1]) }
  fib_array.last
end

def fibonacci(number)
  number < 3 ? 1 : fibonacci(number - 1) + fibonacci(number - 2)
end

puts fibonacci(25)

