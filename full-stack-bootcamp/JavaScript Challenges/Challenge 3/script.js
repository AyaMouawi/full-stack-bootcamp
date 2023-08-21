
//Step 1

function addNumbers(num1, num2) {
    return num1 + num2;
  }
  

  console.log(addNumbers(2, 7)); 
  console.log(addNumbers(-3, 5));
  console.log(addNumbers(0, 1));

  function findMax(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    } else {
      return "Both are equal";
    }
  }
  
  function compute(num1, num2, operation) {
    function add() {
      return num1 + num2;
    }
    
    function subtract() {
      return num1 - num2;
    }
    
    function multiply() {
      return num1 * num2;
    }
    
    function divide() {
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Cannot divide by zero";
      }
    }
  
    switch (operation) {
      case "add":
        return add();
      case "subtract":
        return subtract();
      case "multiply":
        return multiply();
      case "divide":
        return divide();
      default:
        return "Invalid operation";
    }
  }


console.log(findMax(5, 7)); 
console.log(findMax(-3, 10)); 
console.log(findMax(5, 5)); 


console.log(compute(10, 5, "add")); 
console.log(compute(10, 5, "subtract")); 
console.log(compute(10, 5, "multiply")); 
console.log(compute(10, 5, "divide")); 


//Step 2 

const squareNumber = (number) => number * number;

const globalVar = " global variable";

console.log("Global Scope:");
console.log("Value of globalVar:", globalVar); 

console.log("Local Scope:");
console.log("Value of localVar before the function call:", localVar); //error

squareNumber(5);

console.log("Value of localVar after the function call:", localVar); //error

//Step 3 

console.log("For Loop:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("While Loop:");
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}


console.log("Do-While Loop with Conditionals:");
let k = 1;
do {
  if (k % 2 === 0) {
    console.log(k);
  }
  k++;
} while (k <= 10);


console.log("Advanced Loop Challenge:");
const favoriteFruits = ["apple", "banana", "strawberry", "kiwi", "blueberry", "watermelon"];

for (let fruit of favoriteFruits) {
  if (fruit.length > 5) {
    console.log(fruit);
  }
}


//Step 4 

function processArray(array, callback) {
  for (let element of array) {
    callback(element);
  }
}

function printElement(element) {
  console.log(element);
}

const numbers = [1, 2, 3, 4, 5];
console.log("Processing array using processArray:");
processArray(numbers, printElement);


function multiplier(factor) {
  return function(number) {
    return factor * number;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log("Multiplier example:");
console.log(double(5));
console.log(triple(5)); 

  
  