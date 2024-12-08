function myFunction(a, b) {
  if (a === 0 || b === 0) { 
    return 0; // This line will cause unexpected behavior
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Output: 0. This is expected
console.log(myFunction(0, 10)); //Output: 0. This is expected
console.log(myFunction(10, 2)); // Output: 5. This is expected
console.log(myFunction(0,0)); //Output: 0. This is unexpected. The function should throw an error instead. 
