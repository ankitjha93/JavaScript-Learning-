//Immediately Invoked Function Expression

(function chai(){
    console.log(`DB Connected`);
}) ();

( (name) => {
    console.log(`db connectedd 2 ${name}`)
}) ("hitesh");