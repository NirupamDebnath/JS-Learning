var myObj = {}; // inline object creation

myObj.foo = "a"; // dot notation
console.log(myObj["foo"]); // bracket notation

function createEmployeeObject(firstName, lastName, gender, designation) {
  var newObject = {};
  newObject.firstName = firstName;
  newObject.lastName = lastName;
  newObject.gender = gender;
  newObject.designation = designation;
  return newObject;
}

var firstEmployee = createEmployeeObject(
  "Scarlette",
  "Johanson",
  "F",
  "Assitant Engineer"
);

console.log("First employee:  \n", firstEmployee);

function Employee(firstName, lastName, gender, designation) {
  // var this = {};
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.designation = designation;
  // return this;
}

var secondEmployee = new Employee(
  "Sheldon",
  "Cooper",
  "M",
  "Assosiate Analyst"
);

console.log("Second Employee : \n", secondEmployee);
