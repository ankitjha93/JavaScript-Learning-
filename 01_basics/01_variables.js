const accountId = 144553;
let accountEmail = "ankijha096@gmail.com";
var accountPassword = "12345678";

let accountCity = "Bilaspur";

// accountId = 2;

accountEmail = "hdfc@gmail.com";
accountPassword = "56789";
accountCity = "Bengaluru";


console.log(accountId);
/*

Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity]);
