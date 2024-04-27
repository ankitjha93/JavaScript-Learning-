function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("C");
    console.log("D");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // console.log("Ankit")
    // return result;
    return number1 + number2;
}

const result = addTwoNumbers(3,5);
// console.log("Result:", result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a user name");
        return;
    }
    return `${username} just logged In`;
}

// console.log(loginUserMessage());

//*************Part-2******************* *//


function calculateCartPrice(val1, val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(2, 100, 200, 500))

const user = {
    username: "ankit",
    price: 199
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObjects(user);
handleObjects({
    username: "Sam",
    price: 399
})

const myNewArray = [200,300,400]

function returnSecondValue(getArray){

    return getArray[1];
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500]))