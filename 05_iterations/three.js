const arr = [1,2,3,4,5];

for (const num of arr){
    // console.log(num);
    
}

const grettings = "Hello World!";
for (const greet of grettings) {
    // console.log(`Each char is ${greet}`);
    
}

const map = new Map()
    map.set('IN', "India");
    map.set('USA', "United State Of America");
    map.set('Fr', "France");



// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const myObjects = {
    game1 :'NFS',
    game2 :'Spiderman'
}

for (const [key, value] of myObjects) {
    console.log(key, ':-', value);
    
}