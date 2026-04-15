let myNumber;
myNumber=42;
console.log(myNumber);

let num = 5;
console.log(num++);
console.log(++num);

let person = {
  name: "Asmitha",
  age: 20
};
person.age = 21;
person.city = "Kilinochchi";
console.log(person);

let a = 10;
let b = "10";
console.log(a == b);
console.log(a == b);

let num1 = 25;
let num2 = 5;
let sum = num1 + num2;
console.log(sum); 

let items = ["pen", "book"];
items.push("bag");
items.splice(1, 1);
console.log(items);


const result1 = 20 + 5 * 2;
console.log(result1); 
const result2 = (20 + 5) * 2;
console.log(result2); 


let result = null;
console.log("Initial value:", result); 
result = 42;
console.log("As a number:", result);
result = "Hello World";
console.log("As a string:", result);


const student = {
  name: "Asmitha",
  subjects: ["Maths", "Science", "History"]
};
student.subjects.push("Art");
const favoriteSubject = student.subjects[1];
console.log("Student Name:", student.name);
console.log("All Subjects:", student.subjects);
console.log("Accessed Subject:", favoriteSubject);


 a = true;
 b = false;
console.log(a && b);
console.log(a || b); 
console.log(!a);  


let strValue = "25";
let numValue = 5; 
result = strValue + numValue;
console.log(result); 


a = 10;
b = a;
b = 50;
console.log(a); 
console.log(b); 



let marks = 75;
if (marks >= 50) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
};



const greeter = {
  message: "Hello",
  sayHello: function() {
    return this.message;
  }
};
console.log(greeter.sayHello());
greeter.message = "Hi";
console.log(greeter.sayHello()); 


const dayNumber = 2;
let dayName;
switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown Day";
}
console.log(dayName);


result = "hello" * 2;
console.log(result); 



const age = 20; 
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);


