// const coding = ["js", "python", "cpp", "java"]

// const values = coding.forEach((item)=>{
//     console.log(item);
// })

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((nums)=> {
//     return nums > 4;
// })
// console.log(newNums);

// const newNums = []
// myNums.forEach((num) =>{
//     if(num > 4){
//         return newNums.push(num);
//     }
// })

// console.log(newNums);

const books = [
    {
        title : "Jungle book", genre : "drama", publish : 1981, Edition : 2006
    },
    {
        title : 'king', genre: 'comedy', publish : 1999, Edition : 2019
    }
]

let userBook = books.filter((bk)=> bk.genre === 'drama')
userBook = books.filter((bk)=> {
    return bk.publish >= 1981 && bk.genre === 'comedy';
})

console.log(userBook);