const accountId= 12345;
let accountEmailId="rajas@gmail.com";
var accountPassword="rajas@123"
accountCity="Pune"

let userName;  // Only declared not initalized hence use placeholder value undefined


//For const variable once declared value cannot be changed
accountId=2;
console.log(accountId);  //TypeError: Assignment to constant variable

//To print data in tabular format
// console.table ([ inside this square bracket put all variable names])
console.table([accountId,accountEmailId,accountPassword,accountCity,userName]);


// We do not use var keyword 
// beacuse of issue in block scope and functional scope