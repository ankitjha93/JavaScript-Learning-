const myObjects = {
    js : "Javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "Swift by apple"

}

for (const key in myObjects){
    // console.log(`${key} shortcut is for ${myObjects[key]}`);
}

const programming = ["js", "cpp", "python", "Java"]

for (const key in programming) {
    // console.log(programming[key]);
  
}

const map = new Map()
    map.set('IN', "India");
    map.set('USA', "United State Of America");
    map.set('Fr', "France");


    for (const key in map) {
        console.log(map[key]);
      
    }
 