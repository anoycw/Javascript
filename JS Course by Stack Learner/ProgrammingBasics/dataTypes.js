// There are 2 types of data type in js.
// 1. Primitive Data Type - Primitive Types are Defined by Javascript.
// 2. Object Data Type [Heart of js] - Object type is constructed by Multiple Primitive Data Types.

// Primitive Data Type

// 1. Number - 1,2,3,4,5,10,3.4 etc

// String - 'This is a text' + "This is also a text"   `ddadad`

// Boolean - true or false
// Undefined = Nothing is defined.
// null = Absence of a value.

// *** undefined and null both indicates false;

// Object Data Type

//Array
//Object
//Function

// Note : Javascript is a Case Sensitive language
// Meaning, var and VAR or Var is not same.

// *********  NUMBERS ********

var n = 1451;
var f = 3.14;

var nn = Number(3231); // Number keyword construct Number and also convert string to Number
console.log(nn);

var nnn = Number("231"); // String to Number
console.log(nnn);

var nnnn = Number(10.23);

// Parsing

console.log(parseFloat(nn)); // Integer to Float
console.log(parseInt(nnnn)); // Float to Integer

// There is also two primitive data types

console.log(10 / 0); // Infinity

console.log("abcd" * 10); // NaN - Not a Number
console.log("abcd" / 10); // NaN
console.log("abcd" - 10); // NaN
console.log("abcd" + 10); // abcd10 ; bcz string + anything = string;

// ************* STRING *************

// Anything into '',"" or `` is string
var str = "String";
var str1 = "String";
var str3 = `String`;

var str4 = String("adasdasd");
var str5 = String(156);
var str6 = String(3.12345);
console.log(str4, str5, str6);

// Boolean

var b1 = true;
var b2 = false;

var b3 = Boolean(true);
var b4 = Boolean(false);

console.log(b3, b4);

// Null vs Undefined

// A Variable without Value Always Store Undefined
var abc;
var xyz = null;

console.log(abc);
console.log(xyz);

// Null is a special type Used as a Absence of an Object
