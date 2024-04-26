// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIN = false
// console.log(tinderUser)

const regularUser = {
    email : "ankit@gmail.com",
    fullName :{
        userfullname :{
            firstName : "Ankit",
            lastName : "Jha",

        }

    }
}

// console.log(regularUser.fullName.userfullname)

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: " a", 5: " b", 6: "c"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {

        id: 1,
        email : "ankit@gmail.com"
    }
    ,
    {

    },
    {

    }
]

users[1].email

// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIN'))

const course = {
    coursename: "JavaScript",
    price : 999,
    courseInstructor : "hitesh"

}


const {courseInstructor: instructor} = course;
console.log(instructor);

{
    "name" : "ankit Jha",
    "course" : "JavaScript",
    "price" : "free",
}