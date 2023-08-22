//Step 1

const fiveNumbers = [12, 7, 3, 20, 23];

const personalInfo = {
  name: "Aya Mouawi",
  age: 20,
  height: 156,
  location: "Beirut",
  nationality: "Lebanese"
};

//Step 2 

const nextThreeNumbers = [42, 56, 68];
const allNumbers = [...fiveNumbers, ...nextThreeNumbers];

const additionalInfo = {
  occupation: "student",
  hobby: "Reading",
  education: "In progress"
};

const fullInfo = { ...personalInfo, ...additionalInfo };

//Step 3 

const [firstNum, secondNum, thirdNum] = fiveNumbers;
const { name, location, nationality } = personalInfo;

