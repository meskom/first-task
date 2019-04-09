// Positive, negative and zero
console.log(42); // Prints 42
console.log(-1); // Prints -1
console.log(0); // Prints 0

console.log(12341234123412341234); // 12341234123412340000
// In JavaScript numbers are rounded over a limit
// The maximal number that is not rounded (the maximum safe integer) is:
// 9007199254740991
// The reasoning behind that number is that JavaScript uses double-precision
// floating-point format numbers
// Link: http://en.wikipedia.org/wiki/Double_precision_floating-point_format

// Positive, negative and zero
console.log(3.1415); // Prints 3.1415
console.log(-1.5); // Prints -1.5
console.log(0.0); // Prints 0

// Leading and closing zero is not mandatory
console.log(.5) // Prints 0.5
console.log(5.) // Prints 5.0