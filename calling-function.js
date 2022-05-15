function foo() {
  console.log("Hello");
  console.log(this);
}

foo(); // Method #1

var obj = {};

obj.foo = function () {
  console.log("Hello");
  console.log(this);
};

obj.foo(); // Method #2

new foo(); // Method #3

// Function ment to be called in constructure mode
function Bicycle(speed, gear, tirePressure) {
  this.speed = speed;
  this.gear = gear;
  this.tirePressure = tirePressure;
  this.inflateTyre = function () {
    this.tirePressure += 3;
  };
}

//calling function in constructure mode
var bicycle1 = new Bicycle(30, 4, 23);
var bicycle2 = new Bicycle(35, 5, 25);

function Mechanic(name) {
  this.name = name;
}

var mike = new Mechanic("Mike");

mike.inflateTyre = bicycle1.inflateTyre;
// mike.inflateTyre() // this refers to mike object
mike.inflateTyre.call(bicycle1); // Method #4
console.log(bicycle1);
