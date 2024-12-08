function myFunction(a, b) {
  if (a === 0 || b === 0) { 
    if (a === 0 && b === 0) {
      throw new Error('Division by zero is not allowed.');
    } else {
      return 0; 
    }
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Output: 0
console.log(myFunction(0, 10)); // Output: 0
console.log(myFunction(10, 2)); // Output: 5

// The following line will now throw an error
//console.log(myFunction(0,0)); 
