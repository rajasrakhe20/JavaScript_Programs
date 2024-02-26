// Premitive Data Types : String , Number , Boolean , BigInt , null , undefined
// Non Primitive Data Types: Array , Object  , Function

let score =100

let userEmail = "akshay@gmail.com"
let userPassword = null

let userValid = true

let userName

console.log(typeof userEmail);
console.log(typeof userPassword)  // Return type of null is object

// For primitive data types stack space is used and for non primmitive data types heap is used.
// Stack follow copy of value method
// Heap follow reference method. In case of heap, if value changes then it reflect changes in actual value 
// In case of stack copy of the same value is created.

// Example of stack memory
let userEmailId = "akshay@gmail.com"

let anotherEmailId = userEmail;

anotherEmailId="rohit@gmail.com"

console.log(userEmailId);
console.log(anotherEmailId);

// Example of heap memory

let user ={
    email : "akshay@gmail.com",
    id: 123
}

let anotherUser = user

anotherUser.email="rahul@gmail.com"

console.log(anotherUser);
console.log(user);