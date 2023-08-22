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

//Step 3  this was kinda confusing 

const [firstNum, secondNum, thirdNum] = fiveNumbers;
const { name, location, nationality } = personalInfo;

//Step 4 

const personalInfo2 = {
    name: "Aya Mouawi 2 ",
    age: 22,
    contactInfo: {
      email: "ayamouawi8@gmail.com",
      phone: "71 860 410 "
    }
  };
  
  const { contactInfo: { email, phone } } = personalInfo;
  const [firstNum2, secondNum2, ...restOfNumbers] = fiveNumbers;

  const ob1 = { a: 1, b: 2, c: 3 };
  const ob2 = { b: 4, c: 5, d: 6 };

  const mergedObject = { ...ob1, ...ob2 };
