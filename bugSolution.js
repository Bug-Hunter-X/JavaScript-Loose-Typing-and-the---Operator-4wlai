function foo(a, b) {
  // Type checking for numbers, or use a more robust type checking approach if needed
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Addition
  } else {
    return String(a) + String(b); // Concatenation
  }
}
foo(1, 2); //3
foo(1, '2'); //'12'
foo('1', 2); //'12'
foo('1', '2'); //'12' 