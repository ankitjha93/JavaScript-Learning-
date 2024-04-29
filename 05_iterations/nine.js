// const myNums = [1,2,3,4,5]

// const myTotal = myNums.reduce(function(acc, currVal){
//     console.log(`acc : ${acc}, currVal : ${currVal}`)
//     return acc + currVal;

// },0)

// const myTotal = myNums.reduce((acc, currVal)=> acc + currVal, 0);

// console.log(myTotal);

const shoppingCard = [
    { 
        courseName : 'Js Course',
        coursePrice : 2999
    },
    {
        courseName: 'mobile dev course',
        coursePrice: 5999

    },
    {
       courseName : 'Data Science',
       coursePrice : 12999
    }
]

const priceToPay = shoppingCard.reduce((acc, item)=> acc + item.coursePrice, 0)
console.log(priceToPay);