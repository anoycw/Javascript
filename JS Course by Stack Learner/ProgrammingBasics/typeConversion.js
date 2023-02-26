// Type Conversion & Truthy Falsy Value

// Type Conversion : When we convert one data type to another data type is called type conversion.

var str = "1010";
var str1 = 10;

console.log(Number(str) + str1);

Number(str); // String to Number Conversion
str1.toString(); // Number to String Conversion

//Any kind of data type can be converted

// We can convert Infinity to String

console.log("Infinity", Infinity);

console.log(String(Infinity));
console.log(Infinity.toString());
