console.log('I am linked now!');

var name;
name = 'Aya Mouawi';
alert('My name is ' + name);

var age = 20;
let lastName = 'Aya';
const DOB = '12-7-2003';


console.log('Initial values:');
console.log('age:', age);
console.log('lastName:', lastName);
console.log('DOB:', DOB);


age = 30;
lastName = 'Not Mouawi';


console.log('Updated values:');
console.log('age:', age);
console.log('lastName:', lastName);
console.log('DOB:', DOB);


console.log(typeof "This is a text"); 
console.log(typeof true); 
console.log(typeof false); 
console.log(typeof 1215); 
console.log(typeof "999"); 
console.log(typeof {}); 
console.log(typeof []); 
console.log(typeof null); 
console.log(typeof undefined); 


let vString = "Hello, world!";
let vNumber = 42;
let vBoolean = true;
let vObject = { key: "value" };
let vArray = [1, 2, 3];
let vNull = null;


console.log('Variables and Data Types:');
console.log('vString:', vString, typeof vString);
console.log('vNumber:', vNumber, typeof vNumber);
console.log('vBoolean:', vBoolean, typeof vBoolean);
console.log('vObject:', vObject, typeof vObject);
console.log('vArray:', vArray, typeof vArray);
console.log('vNull:', vNull, typeof vNull);


const myText = "I am Aya!";

const counter = 3;
const backtick = `This is my text using backticks ${counter} times`;
const singleQuote = 'This is my text using single quotations ${counter} times';
const doubleQuote = "This is my text using double quotations ${counter} times";
const tryThisAlso = `This is my new version, it’s the ${2 + 3}th version`;

console.log('myText:', myText);
console.log('backtick:', backtick);
console.log('singleQuote:', singleQuote);
console.log('doubleQuote:', doubleQuote);
console.log('tryThisAlso:', tryThisAlso);

console.log('Differences in String Declaration Methods:');
console.log('backtick:', 'Allows multiline text and supports interpolation');
console.log('singleQuote:', 'Does not support interpolation');
console.log('doubleQuote:', 'Does not support interpolation');
console.log('tryThisAlso:', 'Uses interpolation for calculations within the string');// i used some chatgpt with this step

