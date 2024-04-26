
const mySym = Symbol("key1");



const JSuser  = {
    name: "Hitesh",
    age : 18,
    [mySym] :"myKey1",
    "full name" : "ankit jha",
    email : "ankit@google.com",
    location : "Bilaspur",
    isLoggedIn : false,
    lastLoggedInDay: ["Monday", "Saturday"]

  

}  

// console.log(JSuser.email)
// console.log(JSuser["email"])
// console.log(JSuser["full name"])
// console.log(JSuser[mySym]);

JSuser.email = "ankitjha@gmail.com"
// Object.freeze(JSuser)
JSuser.email = "hitesh@chatgpt.com"
console.log(JSuser);

JSuser.greeting = function(){
    console.log(`Hello Js User, ${this.name}`);
}

JSuser.greetingTwo = function(){
    console.log("Hello JS User");
}


console.log(JSuser.greeting());
console.log(JSuser.greetingTwo())