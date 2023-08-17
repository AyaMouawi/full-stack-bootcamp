// Step 1
const age = 20; 

if (age >= 20) {
  console.log("You can enter this room.");
} else {
  console.log("You can't enter this room.");
}

const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;

console.log('expression1:', expression1); 
console.log('expression2:', expression2); 
console.log('expression3:', expression3); 
console.log('expression4:', expression4); 

//Step 2

const age2 = 25;
const hasDriverLicense = true;
const hasCar = false;

let canDrive = false;
if (age2 >= 18 && hasDriverLicense) {
  canDrive = true;
}

let canRentCar = false;
if (age2 >= 22 && hasDriverLicense && !hasCar) {
  canRentCar = true;
}

let needDriver = false;
if (age2 < 18 && !hasDriverLicense && !hasCar) {
  needDriver = true;
}

console.log('canDrive:', canDrive);
console.log('canRentCar:', canRentCar);
console.log('needDriver:', needDriver);
