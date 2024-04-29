const coding = ["js", "python", "cpp", "java"]

// coding.forEach(function(item){
//     console.log(item);

// })

// coding.forEach((val)=>{
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach( (item, index, arr) =>{
//     console.log(item, index, arr);

// })

const myCoding = [
    {
        languageName : "JavaScript",
        languageFile : "JS"
    },
    {
        languageName : "Python",
        languageFile : "py"
    },
    {
        languageName : "Java",
        languageFile : "Java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})
