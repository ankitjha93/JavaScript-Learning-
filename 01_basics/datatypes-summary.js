const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 345667786798987n;

// const heros = ["Shaktiman", "Doga", "Naagraj"];

// let myObj = {
//     name: "hitesh",
//     age:23,
// }

const myFunction = function(){
    console.log("Hello World")
}

// console.log(typeof bigNumber)

//************************************************************//

// Stack(primitive) 
// heap(non-primitive)

let myYoutubeName = "hiteshChoudharydotcom";

let anotherName = myYoutubeName;
anotherName = 'chaiaurcode';
// console.log(myYoutubeName)
// console.log(anotherName);

let userOne = {
    email:"google@gmail.com",
    upi: "ankit@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);